import { EOL } from "os";

import { GirBase, ClassType, GirClassField, VariableType, NativeType, ArrayVariableType } from "../gir";
import { InterfaceElement, Element, ClassElement, RecordElement, Direction } from "../xml";
import {
  GirClassFunction,
  GirVirtualClassFunction,
  GirStaticClassFunction,
  GirCallback,
  GirFunctionParameter,
  GirFunction,
  GirConstructor,
} from "./function";
import { GirProperty, GirField } from "./property";
import { GirNSRegistry, GirNamespace, ClassInjection } from "./namespace";
import { resolveType, parseTypeString, resolvePrimitiveType, sanitizeIdentifierName } from "./util";
import { GirSignal, GirSignalType } from "./signal";

function resolveParent(modName: string, rns: GirNSRegistry, parent: ClassType): GirBaseClass | null {
  const ns = parent.namespace || modName;
  const name = parent.name;

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

function resolveParents(parent: ClassType | null, modName: string, registry: GirNSRegistry): GirBaseClass[] {
  let resolved_parents: GirBaseClass[] = [];

  let resolved_parent = parent ? resolveParent(modName, registry, parent) : null;

  let inheritanceLevel = 0;
  while (resolved_parent != null) {
    if (inheritanceLevel > 100) {
      console.log(`Detected infinite inheritance in ${modName}... breaking at 100.`);
      break;
    }

    resolved_parents.push(resolved_parent);
    resolved_parent =
      (resolved_parent.parent && resolveParent(resolved_parent.ns, registry, resolved_parent.parent)) || null;
    inheritanceLevel++;
  }

  return resolved_parents;
}

function isTypeConflict(
  a: ClassType,
  b: ClassType,
  currentNamespace: string | null = null,
  resolvedNamespace: string | null = null,
  _registry: GirNSRegistry
) {
  return (
    a.name !== b.name ||
    ((a.namespace || resolvedNamespace) !== (b.namespace || currentNamespace) &&
      (!resolvePrimitiveType(b.name) || !resolvePrimitiveType(a.name)))
  );
}

enum FilterBehavior {
  DELETE,
  ANYIFY,
}

function filterConflicts<T extends GirBase | GirClassField>(
  ns: string,
  elements: T[],
  resolved_parents: GirBaseClass[],
  registry: GirNSRegistry,
  behavior = FilterBehavior.ANYIFY
) {
  return elements
    .filter((p) => p.name)
    .reduce((prev, next) => {
      const conflicts = resolved_parents.some((resolved_parent) => {
        return [...resolved_parent.props, ...resolved_parent.fields].some((p) => {
          if (p.name && p.name == next.name && (next instanceof GirProperty || next instanceof GirField)) {
            const conflict = isTypeConflict(next.type, p.type, ns, resolved_parent.ns, registry);

            return conflict;
          }
          return false;
        });
      });

      let function_conflicts = resolved_parents.some((resolved_parent) =>
        [...resolved_parent.constructors, ...resolved_parent.members].some(
          (p) =>
            p.name &&
            p.name == next.name &&
            (!(next instanceof GirCallback) ||
              isConflictingFunction(ns, next, p, resolved_parent.ns, registry))
        )
      );

      if (conflicts || function_conflicts) {
        if (behavior === FilterBehavior.ANYIFY) {
          if (next instanceof GirProperty || next instanceof GirField) {
            next.type.anyified = true;
          }
          prev.push(next);
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
    isTypeConflict(
      p.return(currentNamespace, registry),
      next.return(resolvedNamespace, registry),
      resolvedNamespace,
      currentNamespace,
      registry
    ) ||
    next.parameters.some((np, i) =>
      isTypeConflict(p.parameters[i].type, np.type, resolvedNamespace, currentNamespace, registry)
    ) ||
    p.output_parameters.length !== next.output_parameters.length ||
    next.output_parameters.some((np, i) =>
      isTypeConflict(p.output_parameters[i].type, np.type, resolvedNamespace, currentNamespace, registry)
    )
  );
}

function filterFunctionConflict<
  T extends GirStaticClassFunction | GirVirtualClassFunction | GirClassFunction | GirConstructor
>(
  ns: string,
  elements: T[],
  resolved_parents: GirBaseClass[],
  conflict_ids: string[],
  registry: GirNSRegistry
) {
  return elements
    .filter((m) => m.name)
    .reduce((prev, next) => {
      // TODO This should catch most of them.
      let conflicts =
        conflict_ids.includes(next.name) ||
        resolved_parents.some((resolved_parent) =>
          [...resolved_parent.constructors, ...resolved_parent.members].some((p) => {
            let conflicting = isConflictingFunction(ns, next, p, resolved_parent.ns, registry);
            return p.name && p.name == next.name && conflicting;
          })
        );

      let field_conflicts = resolved_parents.some((resolved_parent) =>
        [...resolved_parent.props, ...resolved_parent.fields].some(
          (p) =>
            p.name &&
            p.name == next.name &&
            (!(p instanceof GirCallback) || isConflictingFunction(ns, next, p, resolved_parent.ns, registry))
        )
      );

      if (conflicts) {
        let never: GirConstructor | GirFunction | GirStaticClassFunction | GirVirtualClassFunction;

        const never_param = new GirFunctionParameter({
          name: "args",
          direction: Direction.In,
          isVarArgs: true,
          type: new VariableType("never"),
        });

        const neverOptions = {
          name: next.name,
          parameters: [never_param],
          return_type: new VariableType("never"),
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
  MAIN_CONSTRUCTOR = "constructor",
}

function handleInjection(
  elements: [string, string][],
  type: keyof ClassInjection,
  injection?: ClassInjection
): string[] {
  // If an injection is not passed, this function is a no-op.
  if (!injection) {
    return elements.map(([, val]) => val);
  }

  const type_injection = injection[type];

  // If there is no type injection for type, this function is a no-op.
  if (!type_injection) {
    return elements.map(([, val]) => val);
  }

  if (typeof type_injection === "string") {
    throw new Error("mainConstructor injections are not handled by handleInjection");
  }

  const injections = [...Object.entries(type_injection)].map(([name, val]) => {
    if (Array.isArray(val)) {
      return [name, val.join(EOL)] as const;
    } else {
      return [name, val] as const;
    }
  });

  const modifiedElements = elements.map(([name, val]) => {
    const injection = injections.find((i) => i[0] === name);

    if (injection) {
      const [, newVal] = injection;

      return [name, newVal] as const;
    } else {
      return [name, val] as const;
    }
  });

  injections.forEach(([name, val]) => {
    const isInjected = modifiedElements.find((m) => m[0] === name);

    if (!isInjected) {
      modifiedElements.push([name, val]);
    }
  });

  return modifiedElements.map(([, val]) => val);
}

export abstract class GirBaseClass extends GirBase {
  ns: string;

  parent: ClassType | null = null;
  interfaces: ClassType[] = [];
  mainConstructor: null | GirConstructor = null;
  constructors: GirConstructor[] = [];
  members: GirClassFunction[] = [];
  props: GirProperty[] = [];
  fields: GirField[] = [];
  callbacks: GirCallback[] = [];

  constructor(name: string, ns: string) {
    super(name);
    this.ns = ns;
  }

  getType(): ClassType {
    return new ClassType(this.name, this.ns);
  }

  static fromXML(
    _modName: string,
    _ns: GirNamespace,
    _parent,
    _klass: ClassElement | InterfaceElement | RecordElement
  ): GirBaseClass {
    throw new Error("fromXML is not implemented on GirBaseClass");
  }

  protected implements(modName: string, registry: GirNSRegistry) {
    if (this.interfaces.length > 0) {
      return ` implements ${this.interfaces.map((i) => resolveType(modName, registry, i)).join(", ")}`;
    }
    return "";
  }

  protected extends(modName, ns) {
    if (this.parent) {
      return ` extends ${resolveType(modName, ns, this.parent)}`;
    }

    return "";
  }

  protected resolveParents(modName: string, registry: GirNSRegistry) {
    const class_parents = resolveParents(this.parent, modName, registry);

    const class_parent_interface_parents = class_parents
      .map((i) => i.interfaces.map((t) => resolveParents(t, modName, registry)))
      .flat(2)
      .reduce((prev, next) => {
        if (!prev.includes(next) && !class_parents.includes(next)) {
          prev.push(next);
        }

        return prev;
      }, [] as GirBaseClass[]);

    const interface_parents = this.interfaces
      .map((i) => resolveParents(i, modName, registry))
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

  protected implementedMethods(interfaces: GirBaseClass[], potentialConflicts: GirBase[] = []) {
    return interfaces
      .map((i) =>
        i.members
          .filter((i) => !(i instanceof GirStaticClassFunction))
          .filter(
            (i) =>
              potentialConflicts.every((p) => i.name !== p.name) &&
              this.members.every((p) => i.name !== p.name) &&
              this.props.every((p) => i.name !== p.name) &&
              this.fields.every((p) => i.name !== p.name)
          )
      )
      .flat()
      .map((m) => m.copy({ parent: this }));
  }

  protected implementedProperties(interfaces: GirBaseClass[], potentialConflicts: GirBase[] = []) {
    return interfaces
      .map((i) =>
        i.props
          .filter((i) => !i.isStatic)
          .filter(
            (i) =>
              potentialConflicts.every((p) => i.name !== p.name) &&
              this.members.every((p) => i.name !== p.name) &&
              this.props.every((p) => i.name !== p.name) &&
              this.fields.every((p) => i.name !== p.name)
          )
      )
      .flat();
  }

  abstract asString(modName: string, registry: GirNSRegistry, injection?: ClassInjection): string;
}

const isIntrospectable = (e: Element<{}>) => e && e.$ && (!e.$.introspectable || e.$.introspectable === "1");

// These are inserted by the gobject injection
const GOBJECT_CONFLICT_IDS = [
  "_init",
  "connect",
  "connect_after",
  "emit",
  "disconnect",
  "set",
  "block_signal_handler",
  "unblock_signal_handler",
  "stop_emission_by_name",
];

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
      signals,
    } = this;

    const clazz = new GirClass(name, ns);

    if (parent) {
      clazz.parent = parent.copy();
    }

    clazz.signals = signals.map((s) => s.copy());
    clazz.interfaces = interfaces.map((i) => i.copy());
    clazz.props = props.map((p) => p.copy());
    clazz.fields = fields.map((f) => f.copy());
    clazz.callbacks = callbacks.map((c) => c.copy());
    clazz.isAbstract = isAbstract;
    clazz.mainConstructor = mainConstructor;
    clazz.constructors = constructors.map((c) => c.copy());
    clazz.members = members.map((m) => m.copy({ parent: clazz }));

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
            .map((constructor) => GirConstructor.fromXML(modName, ns, clazz, constructor))
        );
      }

      if (klass["glib:signal"]) {
        clazz.signals.push(
          ...klass["glib:signal"].map((signal) => GirSignal.fromXML(modName, ns, clazz, signal))
        );
      }

      // Properties
      if (klass.property) {
        klass.property.filter(isIntrospectable).forEach((prop) => {
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
            .map((method) => GirClassFunction.fromXML(modName, ns, clazz, method))
            .filter((m) => !clazz.props.some((n) => n.name === m.name))
        );
      }

      // Fields (for "non-class" records)
      if (klass.field) {
        klass.field
          .filter(isIntrospectable)
          .filter((field) => !field.$.private || field.$.private !== "1")
          .filter((field) => !("callback" in field) && !field.$.name.startsWith("_"))
          .forEach((field) => {
            const f = GirField.fromXML(modName, ns, null, field);
            if (
              !clazz.members.some((n) => n.name === f.name) &&
              !clazz.props.some((n) => n.name === f.name) &&
              !PROTECTED_IDS.includes(f.name)
            ) {
              clazz.fields.push(f);
            }
          });
      }

      if (klass.implements) {
        klass.implements.filter(isIntrospectable).forEach((implementee) => {
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
          ...klass.callback.filter(isIntrospectable).map((callback) => {
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
            .map((method) => GirVirtualClassFunction.fromXML(modName, ns, clazz, method))
        );
      }

      // Static methods (functions)
      if (klass.function) {
        clazz.members.push(
          ...klass.function
            .filter(isIntrospectable)
            .map((func) => GirStaticClassFunction.fromXML(modName, ns, clazz, func))
        );
      }
    } catch (e) {
      console.error(`Failed to parse class: ${clazz.name}.`);
      console.error(e);
    }

    return clazz;
  }

  asString(modName: string, registry: GirNSRegistry, injection?: ClassInjection): string {
    const { class_parents, class_parent_interface_parents, interface_parents } = this.resolveParents(
      modName,
      registry
    );

    const resolved_parents = [...class_parents, ...class_parent_interface_parents, ...interface_parents];

    const name = this.name;

    let injectConstructorBucket = !this.mainConstructor && (!injection || !injection.mainConstructor);

    const Extends = this.extends(modName, registry);
    const Implements = this.implements(modName, registry);

    const implementedProperties = this.implementedProperties(interface_parents);
    const implementedMethods = this.implementedMethods(interface_parents, implementedProperties);

    let MainConstructor: string = "";

    if (this.mainConstructor) {
      MainConstructor = `\n${this.mainConstructor.asConstructor(modName, registry)}`;
    } else if (injection && injection.mainConstructor) {
      MainConstructor = `\n${injection.mainConstructor}`;
    } else {
      MainConstructor = `\nconstructor(properties?: Partial<${name}.ConstructorProperties>, ...args: any[]);
                _init(properties?: Partial<${name}.ConstructorProperties>, ...args: any[]): void;\n`;
    }

    const ConstructorProps = handleInjection(
      filterConflicts(
        this.ns,
        this.props.filter((prop) => !prop.isStatic),
        // Only filter for extends, not implements.
        class_parents,
        registry
      ).map((v) => [v.name, v.asString(modName, registry, true)]),
      ClassInjectionMember.PROPERTY,
      injection
    ).join(EOL);

    const Properties = handleInjection(
      filterConflicts(this.ns, this.props, resolved_parents, registry).map((v) => [
        v.name,
        v.asString(modName, registry),
      ]),
      ClassInjectionMember.PROPERTY,
      injection
    ).join(EOL);

    const Fields = handleInjection(
      filterConflicts(this.ns, this.fields, resolved_parents, registry).map((v) => [
        v.name,
        v.asString(modName, registry),
      ]),
      ClassInjectionMember.FIELD,
      injection
    ).join(EOL);

    const isGObject = resolved_parents.some((p) => p.ns === "GObject" && p.name === "Object");

    const Constructors = handleInjection(
      filterFunctionConflict(
        this.ns,
        this.constructors,
        resolved_parents,
        isGObject ? GOBJECT_CONFLICT_IDS : [],
        registry
      ).map((v) => [v.name, v.asString(modName, registry)]),
      ClassInjectionMember.CONSTRUCTOR,
      injection
    ).join(EOL);

    const Members = handleInjection(
      filterFunctionConflict(
        this.ns,
        this.members,
        resolved_parents,
        isGObject ? GOBJECT_CONFLICT_IDS : [],
        registry
      ).map((v) => [v.name, v.asString(modName, registry)]),
      ClassInjectionMember.MEMBER,
      injection
    ).join(EOL);

    const ImplementedProperties = filterConflicts(this.ns, implementedProperties, resolved_parents, registry)
      .map((m) => m.asString(modName, registry))
      .join(EOL);

    const ImplementedMethods = filterFunctionConflict(
      this.ns,
      implementedMethods,
      resolved_parents,
      GOBJECT_CONFLICT_IDS,
      registry
    )
      .map((m) => m.asString(modName, registry))
      .join(EOL);

    // TODO Move these to a cleaner place.

    const Connect = new GirClassFunction({
      name: "connect",
      parent: this,
      parameters: [
        new GirFunctionParameter({
          name: "id",
          type: new VariableType("string"),
          direction: Direction.In,
        }),
        new GirFunctionParameter({
          name: "callback",
          type: new NativeType("(...args: any[]) => any"),
          direction: Direction.In,
        }),
      ],
      return_type: new VariableType("number"),
    });

    const ConnectAfter = new GirClassFunction({
      name: "connect_after",
      parent: this,
      parameters: [
        new GirFunctionParameter({
          name: "id",
          type: new VariableType("string"),
          direction: Direction.In,
        }),
        new GirFunctionParameter({
          name: "callback",
          type: new NativeType("(...args: any[]) => any"),
          direction: Direction.In,
        }),
      ],
      return_type: new VariableType("number"),
    });

    const Emit = new GirClassFunction({
      name: "emit",
      parent: this,
      parameters: [
        new GirFunctionParameter({
          name: "id",
          type: new VariableType("string"),
          direction: Direction.In,
        }),
        new GirFunctionParameter({
          name: "args",
          isVarArgs: true,
          type: new VariableType("any"),
          direction: Direction.In,
        }),
      ],
      return_type: new VariableType("void"),
    });

    let default_signals = [] as GirClassFunction[];
    let hasConnect, hasConnectAfter, hasEmit;

    if (this.signals.length > 0) {
      hasConnect = this.members.some((m) => m.name === "connect");
      hasConnectAfter = this.members.some((m) => m.name === "connect_after");
      hasEmit = this.members.some((m) => m.name === "emit");

      if (!hasConnect) {
        default_signals.push(Connect);
      }
      if (!hasConnectAfter) {
        default_signals.push(ConnectAfter);
      }
      if (!hasEmit) {
        default_signals.push(Emit);
      }

      default_signals = filterConflicts(
        modName,
        default_signals,
        resolved_parents,
        registry,
        FilterBehavior.DELETE
      );

      hasConnect = !default_signals.some((s) => s.name === "connect");
      hasConnectAfter = !default_signals.some((s) => s.name === "connect_after");
      hasEmit = !default_signals.some((s) => s.name === "emit");
    }

    const Signals = [
      // TODO Relocate these.
      ...default_signals.map((s) => s.asString(modName, registry)),
      ...this.signals
        .map((s) => {
          const methods = [] as string[];

          if (!hasConnect) methods.push(s.asString(modName, registry, GirSignalType.CONNECT));
          if (!hasConnectAfter) methods.push(s.asString(modName, registry, GirSignalType.CONNECT_AFTER));
          if (!hasEmit) methods.push(s.asString(modName, registry, GirSignalType.EMIT));

          return methods;
        })
        .flat(),
    ].join(EOL);

    const hasCallbacks = this.callbacks.length > 0;
    const hasModule = injectConstructorBucket || hasCallbacks;

    return `${
      hasModule
        ? `export module ${name} {
              ${hasCallbacks ? this.callbacks.map((c) => c.asString(modName, registry)).join(EOL) : ""}
              ${
                injectConstructorBucket
                  ? `export interface ConstructorProperties${
                      Extends ? `${Extends}.ConstructorProperties` : ""
                    } {
                        [key: string]: any;
                        ${ConstructorProps}
                      }`
                  : ""
              }
            }`
        : ""
    }
    export ${this.isAbstract ? `abstract ` : ""}class ${name}${Extends}${Implements} {
      
    ${MainConstructor}
    
    ${this.props.length > 0 ? `// Properties` : ""}
    ${Properties}
    
    ${this.fields.length > 0 ? `// Fields` : ""}
    ${Fields}

    ${this.signals.length > 0 ? `// Signals\n` : ""}
    ${Signals}
  
    ${implementedProperties.length > 0 ? `// Implemented Properties\n` : ""}
    ${ImplementedProperties}
  
    ${this.constructors.length > 0 ? `// Constructors\n` : ""}
    ${Constructors}
    
    ${this.members.length > 0 ? `// Members\n` : ""}
    ${Members}
    
    ${implementedMethods.length > 0 ? `// Implemented Members\n` : ""}
    ${ImplementedMethods}
  }`;
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
      mainConstructor,
    } = this;

    const clazz = new GirRecord(name, ns);

    if (parent) {
      clazz.parent = parent.copy();
    }

    clazz._isForeign = _isForeign;
    clazz.interfaces = interfaces.map((i) => i.copy());
    clazz.props = props.map((p) => p.copy());
    clazz.fields = fields.map((f) => f.copy());
    clazz.callbacks = callbacks.map((c) => c.copy());
    clazz.mainConstructor = !mainConstructor || mainConstructor.copy();
    clazz.constructors = constructors.map((c) => c.copy());
    clazz.members = members.map((m) => m.copy({ parent: clazz }));

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
            .map((method) => GirClassFunction.fromXML(modName, ns, clazz, method))
        );
      }

      // Constructors
      if (Array.isArray(klass.constructor)) {
        klass.constructor.filter(isIntrospectable).forEach((constructor) => {
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
            .map((func) => GirStaticClassFunction.fromXML(modName, ns, clazz, func))
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
            .filter((field) => !("callback" in field))
            // If it starts with "_" it is most likely a private member of the class.
            .filter((field) => !field.$.name.startsWith("_"))
            .map((field) => GirField.fromXML(modName, ns, null, field))
            // Ensure identifiers don't overlap
            .filter(
              (f) =>
                !clazz.members.some((n) => n.name === f.name) &&
                !clazz.props.some((n) => n.name === f.name) &&
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

    const isSimpleType = (type: VariableType) => {
      // Primitive types can be directly allocated.
      if (type.namespace === null && resolvePrimitiveType(type.name) !== null) {
        return true;
      }

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
    };

    return this.fields.every((f) => isSimpleType(f.type));
  }

  asString(modName: string, registry: GirNSRegistry, injection?: ClassInjection): string {
    const { class_parents, class_parent_interface_parents, interface_parents } = this.resolveParents(
      modName,
      registry
    );

    const resolved_parents = [...class_parents, ...class_parent_interface_parents, ...interface_parents];

    const name = this.name;

    const implementedProperties = this.implementedProperties(interface_parents);
    const implementedMethods = this.implementedMethods(interface_parents, implementedProperties);

    const Extends = this.extends(modName, registry);
    const Implements = this.implements(modName, registry);

    let MainConstructor: string = "";

    if (this.isForeign()) {
      MainConstructor = "";
    } else if (injection && injection.mainConstructor) {
      MainConstructor = `${injection.mainConstructor}`;
    } else if (this.mainConstructor) {
      MainConstructor = this.mainConstructor.asConstructor(modName, registry);
    } else if (this.constructors.length > 0) {
      const [firstConstructor] = this.constructors;
      MainConstructor = firstConstructor.asConstructor(modName, registry);
    } else if (this.isSimple(modName, registry)) {
      const ConstructorFields = this.fields.map((v) => {
        const copied = v.copy();

        copied.optional = true;

        return copied.asString(modName, registry)
      }).join(EOL);
      MainConstructor = `constructor(properties?: {
        ${ConstructorFields}
      });`;
    }

    const hasCallbacks = this.callbacks.length > 0;

    const Properties = handleInjection(
      filterConflicts(this.ns, this.props, resolved_parents, registry).map((v) => [
        v.name,
        v.asString(modName, registry),
      ]),
      ClassInjectionMember.PROPERTY,
      injection
    ).join(EOL);

    const Fields = handleInjection(
      filterConflicts(this.ns, this.fields, resolved_parents, registry).map((v) => [
        v.name,
        v.asString(modName, registry),
      ]),
      ClassInjectionMember.FIELD,
      injection
    ).join(EOL);

    const Constructors = handleInjection(
      filterFunctionConflict(this.ns, this.constructors, resolved_parents, [], registry).map((v) => [
        v.name,
        v.asString(modName, registry),
      ]),
      ClassInjectionMember.CONSTRUCTOR,
      injection
    ).join(EOL);

    const Members = handleInjection(
      filterFunctionConflict(this.ns, this.members, resolved_parents, [], registry).map((v) => [
        v.name,
        v.asString(modName, registry),
      ]),
      ClassInjectionMember.MEMBER,
      injection
    ).join(EOL);

    const ImplementedMethods = filterFunctionConflict(
      this.ns,
      implementedMethods,
      resolved_parents,
      [],
      registry
    )
      .map((m) => m.asString(modName, registry))
      .join(EOL);

    const ImplementedProperties = filterConflicts(this.ns, implementedProperties, resolved_parents, registry)
      .map((m) => m.asString(modName, registry))
      .join(EOL);

    return `${
      hasCallbacks
        ? `export module ${name} {
              ${this.callbacks.map((c) => c.asString(modName, registry)).join(EOL)}
           }`
        : ``
    }

    export class ${name}${Extends}${Implements} {
    
      ${MainConstructor}
      constructor(copy: ${this.name});
  
      ${this.props.length > 0 ? `// Properties` : ""}
      ${Properties}
      
      ${this.fields.length > 0 ? `// Fields` : ""}
      ${Fields}
      
      ${implementedProperties.length > 0 ? `// Implemented Properties` : ""}
      ${ImplementedProperties}
      
      ${this.constructors.length > 0 ? `// Constructors` : ""}
      ${Constructors}
      
      ${this.members.length > 0 ? `// Members` : ""}
      ${Members}
      
      ${implementedMethods.length > 0 ? `// Implemented Members` : ""}
      ${ImplementedMethods}
  }`;
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
      mainConstructor,
    } = this;

    const clazz = new GirInterface(name, ns);

    if (parent) {
      clazz.parent = parent.copy();
    }

    clazz.interfaces = interfaces.map((i) => i.copy());
    clazz.props = props.map((p) => p.copy());
    clazz.fields = fields.map((f) => f.copy());
    clazz.callbacks = callbacks.map((c) => c.copy());
    clazz.mainConstructor = !mainConstructor || mainConstructor.copy();
    clazz.constructors = constructors.map((c) => c.copy());
    clazz.members = members.map((m) => m.copy({ parent: clazz }));

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
            .map((prop) => GirProperty.fromXML(modName, ns, null, prop))
            .filter((property) => !PROTECTED_IDS.includes(property.name))
        );
      }

      // Instance Methods
      if (klass.method) {
        for (let method of klass.method.filter(isIntrospectable)) {
          const m = GirClassFunction.fromXML(modName, ns, clazz, method);

          if (!clazz.props.some((n) => n.name === m.name)) {
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

  asString(modName: string, registry: GirNSRegistry): string {
    // If an interface does not list a prerequisite type, we fill it with GObject.Object
    if (this.parent == null) {
      const gobject = registry.namespace("GObject");

      // TODO Optimize GObject.Object
      if (!gobject) {
        throw new Error("GObject not generated, all interfaces extend from GObject.Object!");
      }

      const GObject = gobject.getClass("Object");

      if (!GObject) {
        throw new Error(`GObject.Object could not be found while generating ${modName}.${this.name}`);
      }

      this.parent = GObject.getType();
    }

    const resolved_parents = resolveParents(this.parent, modName, registry);

    const isGObject = resolved_parents.some((p) => p.ns === "GObject" && p.name === "Object");

    const name = this.name;

    const functions = filterFunctionConflict(
      this.ns,
      this.members,
      resolved_parents,
      isGObject ? GOBJECT_CONFLICT_IDS : [],
      registry
    );

    const staticFunctions = functions.filter((f) => f instanceof GirStaticClassFunction);
    const nonstaticFunctions = functions.filter((f) => !(f instanceof GirStaticClassFunction));
    const hasNamespace = isGObject || staticFunctions.length > 0 || this.callbacks.length > 0;
    return `
      ${
        this.callbacks.length > 0
          ? `export module ${name} {
${this.callbacks.map((c) => c.asString(modName, registry)).join(EOL)}
}`
          : ""
      }
    ${
      hasNamespace
        ? `export interface ${name}Namespace {
  ${isGObject ? "$gtype: GType;" : ""}
  ${
    staticFunctions.length > 0
      ? staticFunctions.map((sf) => GirClassFunction.prototype.asString.call(sf, modName, registry)).join(EOL)
      : ""
  }    
  }`
        : ""
    }
  export interface ${name}${this.extends(modName, registry)} {
  ${this.props.length > 0 ? `// Properties` : ""}
  ${filterConflicts(this.ns, this.props, resolved_parents, registry)
    .map((p) => p.asString(modName, registry))
    .join(EOL)}
  ${this.fields.length > 0 ? `// Fields` : ""}
  ${filterConflicts(this.ns, this.fields, resolved_parents, registry)
    .map((p) => p.asString(modName, registry))
    .join(EOL)}
  ${nonstaticFunctions.length > 0 ? `// Members\n` : ""}
  ${nonstaticFunctions.map((m) => m.asString(modName, registry)).join(EOL)}
  }${hasNamespace ? `\n\nexport const ${name}: ${name}Namespace;` : ""}`;
  }
}
