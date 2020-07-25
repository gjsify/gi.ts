import {
  GirBase,
  NativeType,
  TypeIdentifier,
  TypeExpression,
  GirClassField,
  AnyifiedType,
  NeverType,
  ArrayType
} from "../gir";
import { InterfaceElement, Element, ClassElement, RecordElement, Direction } from "../xml";
import {
  GirClassFunction,
  GirVirtualClassFunction,
  GirStaticClassFunction,
  GirCallback,
  GirFunction,
  GirConstructor,
  GirFunctionParameter
} from "./function";
import { GirProperty, GirField } from "./property";
import { GirNSRegistry, GirNamespace } from "./namespace";
import { parseTypeString, sanitizeIdentifierName } from "./util";
import { GirSignal } from "./signal";
import { FormatGenerator } from "../generators/generator";

export function resolveTypeIdentifier(
  modName: string,
  rns: GirNSRegistry,
  type: TypeIdentifier
): GirBaseClass | null {
  const ns = type.namespace || modName;
  const name = type.name;

  const resolved_ns = rns.namespace(ns);

  if (resolved_ns) {
    const pclass = resolved_ns.getClass(name);
    if (pclass) {
      return pclass;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export function resolveParents(
  parent: TypeIdentifier | null,
  modName: string,
  registry: GirNSRegistry
): GirBaseClass[] {
  let resolved_parents: GirBaseClass[] = [];

  let resolved_parent = parent ? resolveTypeIdentifier(modName, registry, parent) : null;

  let inheritanceLevel = 0;
  while (resolved_parent != null) {
    if (inheritanceLevel > 100) {
      console.log(`Detected infinite inheritance in ${modName}... breaking at 100.`);
      break;
    }

    resolved_parents.push(resolved_parent);
    resolved_parent =
      (resolved_parent.parent &&
        resolveTypeIdentifier(resolved_parent.ns, registry, resolved_parent.parent)) ||
      null;
    inheritanceLevel++;
  }

  return resolved_parents;
}

function isTypeConflict(a: TypeExpression, b: TypeExpression) {
  return !a.equals(b) || !b.equals(a);
}

export class GenericParameter {
  default: string;
  deriveFrom: string | null = null;

  constructor(def) {
    this.default = def;
  }
}

export enum FilterBehavior {
  DELETE,
  ANYIFY
}

export function filterConflicts<T extends GirBase | GirClassField>(
  ns: string,
  elements: T[],
  resolved_parents: GirBaseClass[],
  registry: GirNSRegistry,
  behavior = FilterBehavior.ANYIFY
) {
  return elements
    .filter(p => p && p.name)
    .reduce((prev, next) => {
      const conflicts = resolved_parents.some(resolved_parent => {
        return [...resolved_parent.props, ...resolved_parent.fields].some(p => {
          if (p.name && p.name == next.name && (next instanceof GirProperty || next instanceof GirField)) {
            const conflict = isTypeConflict(next.type, p.type);

            return conflict;
          }
          return false;
        });
      });

      let function_conflicts = resolved_parents.some(resolved_parent =>
        [...resolved_parent.constructors, ...resolved_parent.members].some(
          p =>
            p.name &&
            p.name == next.name &&
            (!(next instanceof GirCallback) ||
              isConflictingFunction(ns, next, p, resolved_parent.ns, registry))
        )
      );

      if (conflicts || function_conflicts) {
        if (behavior === FilterBehavior.ANYIFY) {
          if (next instanceof GirProperty || next instanceof GirField) {
            prev.push(next.copy({ type: new AnyifiedType(next.type) }) as T);
          } else {
            prev.push(next);
          }
        }
      } else {
        prev.push(next);
      }
      return prev;
    }, [] as T[]);
}

function isConflictingFunction(
  currentNamespace: string,
  p: GirFunction | GirClassFunction | GirConstructor,
  next: GirClassFunction | GirFunction | GirConstructor,
  resolvedNamespace: string | null = null,
  registry: GirNSRegistry
) {
  return (
    p.parameters.length !== next.parameters.length ||
    p.output_parameters.length !== next.output_parameters.length ||
    isTypeConflict(p.return(currentNamespace, registry), next.return(resolvedNamespace, registry)) ||
    next.parameters.some((np, i) => isTypeConflict(p.parameters[i].type, np.type)) ||
    next.output_parameters.some((np, i) => isTypeConflict(p.output_parameters[i].type, np.type))
  );
}

export function filterFunctionConflict<
  T extends GirStaticClassFunction | GirVirtualClassFunction | GirClassFunction | GirConstructor
>(
  ns: string,
  elements: T[],
  resolved_parents: GirBaseClass[],
  conflict_ids: string[],
  registry: GirNSRegistry
) {
  return elements
    .filter(m => m.name)
    .reduce((prev, next) => {
      // TODO This should catch most of them.
      let conflicts =
        conflict_ids.includes(next.name) ||
        resolved_parents.some(resolved_parent =>
          [...resolved_parent.constructors, ...resolved_parent.members].some(p => {
            let conflicting = isConflictingFunction(ns, next, p, resolved_parent.ns, registry);
            return p.name && p.name == next.name && conflicting;
          })
        );

      let field_conflicts = resolved_parents.some(resolved_parent =>
        [...resolved_parent.props, ...resolved_parent.fields].some(
          p =>
            p.name &&
            p.name == next.name &&
            (!(p instanceof GirCallback) || isConflictingFunction(ns, next, p, resolved_parent.ns, registry))
        )
      );

      const isGObject = resolved_parents.some(p => p.ns === "GObject" && p.name === "Object");

      if (isGObject) {
        conflicts = conflicts || ["connect", "connect_after", "emit"].includes(next.name);
      }

      if (conflicts) {
        let never: GirConstructor | GirFunction | GirStaticClassFunction | GirVirtualClassFunction;

        const never_param = new GirFunctionParameter({
          name: "args",
          direction: Direction.In,
          isVarArgs: true,
          type: new ArrayType(NeverType)
        });

        const neverOptions = {
          name: next.name,
          parameters: [never_param],
          return_type: NeverType
        };

        if (next instanceof GirConstructor) {
          never = new GirConstructor(neverOptions);
        } else if (next instanceof GirStaticClassFunction) {
          never = new GirStaticClassFunction({ ...neverOptions, parent: next.parent });
        } else if (next instanceof GirVirtualClassFunction && next.parent instanceof GirClass) {
          never = new GirVirtualClassFunction({ ...neverOptions, parent: next.parent });
        } else if (next instanceof GirClassFunction) {
          never = new GirClassFunction({ ...neverOptions, parent: next.parent });
        } else {
          throw new Error(`Unknown function type ${next.constructor.name} encountered.`);
        }

        prev.push(next, never as T);
      } else if (field_conflicts) {
        if (next instanceof GirClassFunction) {
          next.anyify();

          prev.push(next);
        } else {
          console.log(`Omitting ${next.name} due to field conflict.`);
        }
      } else {
        prev.push(next);
      }

      return prev;
    }, [] as T[]);
}

export const enum ClassInjectionMember {
  MEMBER = "member",
  CONSTRUCTOR = "_constructor",
  PROPERTY = "prop",
  FIELD = "field",
  MAIN_CONSTRUCTOR = "constructor"
}

export abstract class GirBaseClass extends GirBase {
  ns: string;

  parent: TypeIdentifier | null = null;
  interfaces: TypeIdentifier[] = [];
  mainConstructor: null | GirConstructor = null;
  constructors: GirConstructor[] = [];
  members: GirClassFunction[] = [];
  props: GirProperty[] = [];
  fields: GirField[] = [];
  callbacks: GirCallback[] = [];
  generics: GenericParameter[] = [];
  generic_names: Map<string, string[]> = new Map();
  generic_override_types: Map<string, { [key: string]: string }> = new Map();

  constructor(name: string, ns: string) {
    super(name);
    this.ns = ns;
  }

  addGenericParemeter(definition: { deriveFrom?: string; default: string }) {
    const param = new GenericParameter(definition.default);

    if (definition.deriveFrom) {
      param.deriveFrom = definition.deriveFrom;
    }

    this.generics.push(param);
  }

  getType(): TypeIdentifier {
    return new TypeIdentifier(this.name, this.ns);
  }

  static fromXML(
    _modName: string,
    _ns: GirNamespace,
    _parent,
    _klass: ClassElement | InterfaceElement | RecordElement
  ): GirBaseClass {
    throw new Error("fromXML is not implemented on GirBaseClass");
  }

  resolveParents(modName: string, registry: GirNSRegistry) {
    const class_parents = resolveParents(this.parent, modName, registry);

    const class_parent_interface_parents = class_parents
      .map(i => i.interfaces.map(t => resolveParents(t, modName, registry)))
      .flat(2)
      .reduce((prev, next) => {
        if (!prev.includes(next) && !class_parents.includes(next)) {
          prev.push(next);
        }

        return prev;
      }, [] as GirBaseClass[]);

    const interface_parents = this.interfaces
      .map(i => resolveParents(i, modName, registry))
      .flat()
      .reduce((prev, next) => {
        if (
          !prev.includes(next) &&
          !class_parents.includes(next) &&
          !class_parent_interface_parents.includes(next)
        ) {
          prev.push(next);
        }

        return prev;
      }, [] as GirBaseClass[]);

    return { class_parents, class_parent_interface_parents, interface_parents };
  }

  implementedMethods(interfaces: GirBaseClass[], potentialConflicts: GirBase[] = []) {
    return interfaces
      .map(i =>
        i.members
          .filter(i => !(i instanceof GirStaticClassFunction))
          .filter(
            i =>
              potentialConflicts.every(p => i.name !== p.name) &&
              this.members.every(p => i.name !== p.name) &&
              this.props.every(p => i.name !== p.name) &&
              this.fields.every(p => i.name !== p.name)
          )
      )
      .flat()
      .map(m => m.copy({ parent: this, interfaceParent: m.parent }));
  }

  implementedProperties(interfaces: GirBaseClass[], potentialConflicts: GirBase[] = []) {
    return interfaces
      .map(i =>
        i.props
          .filter(i => !i.isStatic)
          .filter(
            i =>
              potentialConflicts.every(p => i.name !== p.name) &&
              this.members.every(p => i.name !== p.name) &&
              this.props.every(p => i.name !== p.name) &&
              this.fields.every(p => i.name !== p.name)
          )
      )
      .flat();
  }

  abstract asString(generator: FormatGenerator): string;
}

const isIntrospectable = (e: Element<{}>) => e && e.$ && (!e.$.introspectable || e.$.introspectable === "1");

// These should never be overriden by fields/methods
// TODO Do we need "draw" and "show_all" still?
const PROTECTED_IDS = ["draw", "show_all", "parent_instance", "parent", "parent_class", "object_class"];

export class GirClass extends GirBaseClass {
  signals: GirSignal[] = [];
  isAbstract: boolean = false;

  constructor(name: string, namespace: string) {
    super(name, namespace);
  }

  copy(): GirClass {
    const {
      name,
      ns,
      parent,
      interfaces,
      members,
      constructors,
      props,
      fields,
      callbacks,
      isAbstract,
      mainConstructor,
      signals
    } = this;

    const clazz = new GirClass(name, ns);

    if (parent) {
      clazz.parent = parent;
    }

    clazz.signals = signals.map(s => s.copy());
    clazz.interfaces = interfaces;
    clazz.props = props.map(p => p.copy());
    clazz.fields = fields.map(f => f.copy());
    clazz.callbacks = callbacks.map(c => c.copy());
    clazz.isAbstract = isAbstract;
    clazz.mainConstructor = mainConstructor;
    clazz.constructors = constructors.map(c => c.copy());
    clazz.members = members.map(m => m.copy({ parent: clazz }));

    return clazz;
  }

  static fromXML(modName: string, ns: GirNamespace, _parent, klass: ClassElement): GirClass {
    const name = sanitizeIdentifierName(ns.name, klass.$.name);

    console.log(`  >> GirClass: Parsing definition ${klass.$.name} (${name})...`);

    const clazz = new GirClass(name, ns.name);

    if (klass.$["glib:type-name"]) {
      clazz.resolve_names.push(klass.$["glib:type-name"]);
    }

    if (klass.$["glib:type-struct"]) {
      clazz.resolve_names.push(klass.$["glib:type-struct"]);
    }

    if (klass.$["c:type"]) {
      clazz.resolve_names.push(klass.$["c:type"]);
    }

    try {
      // Setup parent type if this is an interface or class.
      if (klass.$.parent) {
        clazz.parent = parseTypeString(klass.$.parent);
      }

      if (klass.$.abstract) {
        clazz.isAbstract = true;
      }

      if (Array.isArray(klass.constructor)) {
        clazz.constructors.push(
          ...klass.constructor
            .filter(isIntrospectable)
            .map(constructor => GirConstructor.fromXML(modName, ns, clazz, constructor))
        );
      }

      if (klass["glib:signal"]) {
        clazz.signals.push(
          ...klass["glib:signal"].map(signal => GirSignal.fromXML(modName, ns, clazz, signal))
        );
      }

      // Properties
      if (klass.property) {
        klass.property.filter(isIntrospectable).forEach(prop => {
          const property = GirProperty.fromXML(modName, ns, null, prop);
          if (!PROTECTED_IDS.includes(property.name)) {
            clazz.props.push(property);
          }
        });
      }

      // Instance Methods
      if (klass.method) {
        clazz.members.push(
          ...klass.method
            .filter(isIntrospectable)
            .map(method => GirClassFunction.fromXML(modName, ns, clazz, method))
            .filter(m => !clazz.props.some(n => n.name === m.name))
        );
      }

      // Fields (for "non-class" records)
      if (klass.field) {
        klass.field
          .filter(isIntrospectable)
          .filter(field => !field.$.private || field.$.private !== "1")
          .filter(field => !("callback" in field) && !field.$.name.startsWith("_"))
          .forEach(field => {
            const f = GirField.fromXML(modName, ns, null, field);
            if (
              !clazz.members.some(n => n.name === f.name) &&
              !clazz.props.some(n => n.name === f.name) &&
              !PROTECTED_IDS.includes(f.name)
            ) {
              clazz.fields.push(f);
            }
          });
      }

      if (klass.implements) {
        klass.implements.filter(isIntrospectable).forEach(implementee => {
          const name = implementee.$.name;
          const type = parseTypeString(name);

          // Sometimes namespaces will implicitely import
          // other namespaces like Atk via interface implements.
          if (type && type.namespace) {
            ns.addImport(type.namespace);
          }

          if (type) {
            clazz.interfaces.push(type);
          }
        });
      }

      // Callback Types
      if (klass.callback) {
        clazz.callbacks.push(
          ...klass.callback.filter(isIntrospectable).map(callback => {
            console.log(`Adding callback ${callback.$.name} for ${modName}`);

            return GirCallback.fromXML(modName, ns, clazz, callback);
          })
        );
      }

      // Virtual Methods
      if (klass["virtual-method"]) {
        clazz.members.push(
          ...klass["virtual-method"]
            .filter(isIntrospectable)
            .map(method => GirVirtualClassFunction.fromXML(modName, ns, clazz, method))
        );
      }

      // Static methods (functions)
      if (klass.function) {
        clazz.members.push(
          ...klass.function
            .filter(isIntrospectable)
            .map(func => GirStaticClassFunction.fromXML(modName, ns, clazz, func))
        );
      }
    } catch (e) {
      console.error(`Failed to parse class: ${clazz.name}.`);
      console.error(e);
    }

    return clazz;
  }

  asString(generator: FormatGenerator): string {
    return generator.generateClass(this);
  }
}

export class GirRecord extends GirBaseClass {
  private _isForeign: boolean = false;

  isForeign(): boolean {
    return this._isForeign;
  }

  copy(): GirRecord {
    const {
      name,
      ns,
      parent,
      interfaces,
      members,
      constructors,
      _isForeign,
      props,
      fields,
      callbacks,
      mainConstructor
    } = this;

    const clazz = new GirRecord(name, ns);

    if (parent) {
      clazz.parent = parent;
    }

    clazz._isForeign = _isForeign;
    clazz.interfaces = interfaces.map(i => i);
    clazz.props = props.map(p => p.copy());
    clazz.fields = fields.map(f => f.copy());
    clazz.callbacks = callbacks.map(c => c.copy());
    clazz.mainConstructor = !mainConstructor || mainConstructor.copy();
    clazz.constructors = constructors.map(c => c.copy());
    clazz.members = members.map(m => m.copy({ parent: clazz }));

    return clazz;
  }

  static foreign(name: string, namespace: string): GirRecord {
    const foreignRecord = new GirRecord(name, namespace);
    foreignRecord._isForeign = true;
    return foreignRecord;
  }

  static fromXML(modName: string, ns: GirNamespace, klass: RecordElement): GirRecord {
    console.log(
      `  >> GirRecord: Parsing definition ${klass.$.name} (${sanitizeIdentifierName(
        ns.name,
        klass.$.name
      )})...`
    );

    const clazz = new GirRecord(sanitizeIdentifierName(ns.name, klass.$.name), ns.name);

    if (klass.$["glib:type-name"]) {
      clazz.resolve_names.push(klass.$["glib:type-name"]);
    }

    if (klass.$["glib:type-struct"]) {
      clazz.resolve_names.push(klass.$["glib:type-struct"]);
    }

    if (klass.$["c:type"]) {
      clazz.resolve_names.push(klass.$["c:type"]);
    }

    try {
      // Instance Methods
      if (klass.method) {
        clazz.members.push(
          ...klass.method
            .filter(isIntrospectable)
            .map(method => GirClassFunction.fromXML(modName, ns, clazz, method))
        );
      }

      // Constructors
      if (Array.isArray(klass.constructor)) {
        klass.constructor.filter(isIntrospectable).forEach(constructor => {
          const c = GirConstructor.fromXML(modName, ns, clazz, constructor);

          // Records prefer to use a "new" constructor if one is introspectable
          if (constructor.$.name === "new" && constructor.parameters) {
            clazz.mainConstructor = c;
          }

          clazz.constructors.push(c);
        });
      }

      // Static methods (functions)
      if (klass.function) {
        clazz.members.push(
          ...klass.function
            .filter(isIntrospectable)
            .map(func => GirStaticClassFunction.fromXML(modName, ns, clazz, func))
        );
      }

      // Is this a foreign type? (don't allow construction if foreign)

      clazz._isForeign = klass.$.foreign && klass.$.foreign === "1";

      // Fields (for "non-class" records)
      if (klass.field) {
        clazz.fields.push(
          ...klass.field
            .filter(isIntrospectable)
            // TODO investigate these field callbacks.
            // Record fields can just be mirrors of existing functions.
            .filter(field => !("callback" in field))
            // If it starts with "_" it is most likely a private member of the class.
            .filter(field => !field.$.name.startsWith("_"))
            .map(field => GirField.fromXML(modName, ns, null, field))
            // Ensure identifiers don't overlap
            .filter(
              f =>
                !clazz.members.some(n => n.name === f.name) &&
                !clazz.props.some(n => n.name === f.name) &&
                !PROTECTED_IDS.includes(f.name)
            )
        );
      }
    } catch (e) {
      console.error(`Failed to parse record: ${clazz.name}.`);
      console.error(e);
    }

    return clazz;
  }

  isSimple(modName: string, registry: GirNSRegistry) {
    if (this.fields.length === 0) {
      return false;
    }

    const isSimpleType = (typeContainer: TypeExpression) => {
      // Primitive types can be directly allocated.
      if (typeContainer instanceof NativeType) {
        return true;
      }

      if (typeContainer instanceof TypeIdentifier) {
        const type = typeContainer;

        const child_ns = registry.namespace(type.namespace || modName);
        const child = child_ns ? child_ns.getClass(type.name) : null;

        // TODO Handle Unions
        if (child instanceof GirRecord) {
          if (child === this) {
            return false;
          }

          return child.isSimple(modName, registry);
        } else {
          return false;
        }
      }
    };

    return this.fields.every(f => isSimpleType(f.type));
  }

  asString(generator: FormatGenerator): string {
    return generator.generateRecord(this);
  }
}

export class GirInterface extends GirBaseClass {
  copy(): GirInterface {
    const {
      name,
      ns,
      parent,
      interfaces,
      members,
      constructors,
      props,
      fields,
      callbacks,
      mainConstructor
    } = this;

    const clazz = new GirInterface(name, ns);

    if (parent) {
      clazz.parent = parent;
    }

    clazz.interfaces = interfaces;
    clazz.props = props.map(p => p.copy());
    clazz.fields = fields.map(f => f.copy());
    clazz.callbacks = callbacks.map(c => c.copy());
    clazz.mainConstructor = !mainConstructor || mainConstructor.copy();
    clazz.constructors = constructors.map(c => c.copy());
    clazz.members = members.map(m => m.copy({ parent: clazz }));

    return clazz;
  }

  static fromXML(modName: string, ns: GirNamespace, klass: InterfaceElement): GirInterface {
    const name = sanitizeIdentifierName(ns.name, klass.$.name);
    console.log(`  >> GirInterface: Parsing definition ${klass.$.name} (${name})...`);

    const clazz = new GirInterface(name, ns.name);

    if (klass.$["glib:type-name"]) {
      clazz.resolve_names.push(klass.$["glib:type-name"]);
    }

    if (klass.$["glib:type-struct"]) {
      clazz.resolve_names.push(klass.$["glib:type-struct"]);
    }

    if (klass.$["c:type"]) {
      clazz.resolve_names.push(klass.$["c:type"]);
    }

    try {
      // Setup the "parent" (prerequisite) for this interface.
      if (klass.prerequisite && klass.prerequisite[0]) {
        const [prerequisite] = klass.prerequisite;

        clazz.parent = parseTypeString(prerequisite.$.name);
      }

      if (Array.isArray(klass.constructor)) {
        for (let constructor of klass.constructor.filter(isIntrospectable)) {
          clazz.constructors.push(GirConstructor.fromXML(modName, ns, clazz, constructor));
        }
      }

      // Properties
      if (klass.property) {
        clazz.props.push(
          ...klass.property
            .filter(isIntrospectable)
            .map(prop => GirProperty.fromXML(modName, ns, null, prop))
            .filter(property => !PROTECTED_IDS.includes(property.name))
        );
      }

      // Instance Methods
      if (klass.method) {
        for (let method of klass.method.filter(isIntrospectable)) {
          const m = GirClassFunction.fromXML(modName, ns, clazz, method);

          if (!clazz.props.some(n => n.name === m.name)) {
            clazz.members.push(m);
          }
        }
      }

      // Virtual Methods
      if (klass["virtual-method"]) {
        for (let method of klass["virtual-method"].filter(isIntrospectable)) {
          clazz.members.push(GirVirtualClassFunction.fromXML(modName, ns, clazz, method));
        }
      }

      // Callback Types
      if (klass.callback) {
        for (let callback of klass.callback.filter(isIntrospectable)) {
          console.log(`Adding callback ${callback.$.name} for ${modName}`);

          clazz.callbacks.push(GirCallback.fromXML(modName, ns, clazz, callback));
        }
      }

      // Static methods (functions)
      if (klass.function) {
        for (let func of klass.function.filter(isIntrospectable)) {
          clazz.members.push(GirStaticClassFunction.fromXML(modName, ns, clazz, func));
        }
      }
    } catch (e) {
      console.error(`Failed to parse interface: ${clazz.name}.`);
      console.error(e);
    }
    return clazz;
  }

  asString(generator: FormatGenerator): string {
    return generator.generateInterface(this);
  }
}
