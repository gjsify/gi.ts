import {
  GirBase,
  NativeType,
  TypeIdentifier,
  TypeExpression,
  AnyifiedType,
  NeverType,
  ArrayType,
  ClosureType,
  BinaryType,
  PromiseType,
  VoidType,
  TupleType,
  BooleanType,
  Generic,
  GenericType,
  GenerifiedTypeIdentifier,
  AnyType,
  ThisType
} from "../gir";
import { InterfaceElement, Element, ClassElement, RecordElement, Direction, Class } from "@gi.ts/parser";
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
import { GirNamespace } from "./namespace";
import { sanitizeIdentifierName, parseTypeIdentifier } from "./util";
import { GirSignal } from "./signal";
import { FormatGenerator } from "../generators/generator";
import { LoadOptions } from "../types";
import { GirVisitor } from "../visitor";
import { GenericNameGenerator } from "./generics";
import { TwoKeyMap } from "../util";

export function resolveTypeIdentifier(
  namespace: GirNamespace,
  type: TypeIdentifier
): GirBaseClass | null {
  const ns = type.namespace;
  const name = type.name;

  const resolved_ns = namespace.assertInstalledImport(ns);

  const pclass = resolved_ns.getClass(name);
  if (pclass) {
    return pclass;
  } else {
    return null;
  }
}

export function resolveParents(
  parent: TypeIdentifier | null,
  namespace: GirNamespace
): [TypeIdentifier, GirBaseClass][] {
  let resolved_parents: [TypeIdentifier, GirBaseClass][] = [];

  let parentType = parent;
  let resolved_parent = parentType ? resolveTypeIdentifier(namespace, parentType) : null;

  let inheritanceLevel = 0;
  while (parentType != null && resolved_parent != null) {
    if (inheritanceLevel > 100) {
      console.error(`Detected infinite inheritance in ${namespace.name}... breaking at 100.`);
      break;
    }

    resolved_parents.push([parentType, resolved_parent]);
    parentType = resolved_parent.parent;
    resolved_parent =
      (parentType && resolveTypeIdentifier(resolved_parent.namespace, parentType)) ||
      null;

    inheritanceLevel++;
  }

  return resolved_parents;
}

function isTypeConflict(a: TypeExpression, b: TypeExpression) {
  return !a.equals(b) || !b.equals(a);
}

// TODO: Tie this into the registry to avoid it persisting runs.
const subtypes = new TwoKeyMap<string, string, TwoKeyMap<string, string, boolean>>();

function isSubtypeOf(namespace: GirNamespace, thisType: TypeIdentifier, parentThisType: TypeIdentifier, potentialSubtype: TypeExpression, parent: TypeExpression) {
  if (!isTypeConflict(potentialSubtype, parent)) {
    return true;
  }

  const unwrappedSubtype = potentialSubtype.unwrap();
  const unwrappedParent = parent.unwrap();

  if ((potentialSubtype.equals(ThisType) && unwrappedParent.equals(thisType)) || (parent.equals(ThisType) && unwrappedSubtype.equals(parentThisType))) {
    return true;
  }

  if (unwrappedParent instanceof GenericType && unwrappedParent.identifier !== "T") {
    // Technically there could be a conflicting generic, but it is unlikely.
    // "T" denotes a local function generic in the current implementation, those can't be ignored.
    return true;
  }

  if (!(unwrappedSubtype instanceof TypeIdentifier) || !(unwrappedParent instanceof TypeIdentifier)) {
    return false;
  }

  const resolutions = subtypes.get(unwrappedSubtype.name, unwrappedSubtype.namespace) ?? new TwoKeyMap<string, string, boolean>();
  const resolution = resolutions.get(unwrappedParent.name, unwrappedParent.namespace);

  if (typeof resolution === 'boolean') {
    return resolution;
  }

  const resolved = resolveTypeIdentifier(namespace, unwrappedSubtype);

  if (!resolved) {
    return false;
  }

  const { class_parents, class_parent_interface_parents, interface_parents } = resolved.resolveParents()

  // This checks that the two types have the same form, regardless of identifier (e.g. A | null and B | null)
  const isStructurallySubtype = potentialSubtype.rewrap(AnyType).equals(parent.rewrap(AnyType));

  const isSubtype = isStructurallySubtype && (class_parents.some(([t]) => t.equals(parent)) || interface_parents.some(([t]) => t.equals(parent)) || class_parent_interface_parents.some(([t]) => t.equals(parent)));

  resolutions.set(unwrappedParent.name, unwrappedParent.namespace, isSubtype);

  subtypes.set(unwrappedSubtype.name, unwrappedSubtype.namespace, resolutions);

  return isSubtype;
}

export enum FilterBehavior {
  DELETE,
  ANYIFY
}

export function filterConflicts<T extends GirBase>(
  ns: GirNamespace,
  thisType: TypeIdentifier,
  elements: T[],
  resolved_parents: GirBaseClass[],
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
            (!(next instanceof GirClassFunction) ||
              isConflictingFunction(ns, thisType, next, resolved_parent.getType(), p, resolved_parent.namespace.name))
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
  namespace: GirNamespace,
  pThis: TypeIdentifier,
  p: GirFunction | GirClassFunction | GirConstructor,
  nextThis: TypeIdentifier,
  next: GirClassFunction | GirFunction | GirConstructor,
  _resolvedNamespace: string | null = null
) {
  if (p instanceof GirConstructor && next instanceof GirConstructor) {
    return (
      p.parameters.length !== next.parameters.length ||
      !isSubtypeOf(namespace, pThis, nextThis, p.return(), next.return()) ||
      next.parameters.some((np, i) => !isSubtypeOf(namespace, pThis, nextThis, p.parameters[i].type, np.type))
    );
  } else if (p instanceof GirConstructor || next instanceof GirConstructor) {
    return true;
  }

  return (
    p.parameters.length !== next.parameters.length ||
    p.output_parameters.length !== next.output_parameters.length ||
    !isSubtypeOf(namespace, pThis, nextThis, p.return(), next.return()) ||
    next.parameters.some((np, i) => !isSubtypeOf(namespace, pThis, nextThis, p.parameters[i].type, np.type)) ||
    next.output_parameters.some((np, i) => !isSubtypeOf(namespace, pThis, nextThis, p.output_parameters[i].type, np.type))
  );
}

export function filterFunctionConflict<
  T extends GirStaticClassFunction | GirVirtualClassFunction | GirClassFunction | GirConstructor
>(
  ns: GirNamespace,
  nextType: TypeIdentifier,
  elements: T[],
  resolved_parents: [TypeIdentifier, GirBaseClass][],
  conflict_ids: string[]
) {
  return elements
    .filter(m => m.name)
    .reduce((prev, next) => {
      // TODO This should catch most of them.
      let conflicts =
        conflict_ids.includes(next.name) ||
        resolved_parents.some(([, resolved_parent]) =>
          [...resolved_parent.constructors, ...resolved_parent.members].some(p => {
            let conflicting = isConflictingFunction(ns, nextType, next, resolved_parent.getType(), p, resolved_parent.namespace.name);
            return p.name && p.name == next.name && conflicting;
          })
        );

      let field_conflicts = resolved_parents.some(([, resolved_parent]) =>
        [...resolved_parent.props, ...resolved_parent.fields].some(
          p =>
            p.name &&
            p.name == next.name
        )
      );

      const isGObject = resolved_parents.some(([, p]) => p.namespace.name === "GObject" && p.name === "Object");

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
          console.error(`Omitting ${next.name} due to field conflict.`);
        }
      } else {
        prev.push(next);
      }

      return prev;
    }, [] as T[]);
}

export function promisifyFunctions(functions: GirClassFunction[]) {
  return functions.map(node => {
    if (node.parameters.length > 0) {
      const last_param = node.parameters[node.parameters.length - 1];

      if (last_param) {
        const last_param_unwrapped = last_param.type.unwrap();

        if (last_param_unwrapped instanceof ClosureType) {
          const internal = last_param_unwrapped.type;
          if (internal instanceof TypeIdentifier && internal.is("Gio", "AsyncReadyCallback")) {
            const parent = node.parent;
            const interfaceParent = node.interfaceParent;

            if (parent instanceof GirBaseClass) {
              let async_res = (node instanceof GirStaticClassFunction ? [
                ...parent.constructors,
                ...parent.members.filter(m => m instanceof GirStaticClassFunction)]
                : [
                  ...interfaceParent instanceof GirInterface ? [...interfaceParent.members] : [],
                  ...parent.members.filter(m => !(m instanceof GirStaticClassFunction))
                ]).find(m => m.name === `${node.name.replace(/_async$/, '')}_finish` || m.name === `${node.name}_finish`);

              if (async_res) {
                const async_parameters = node.parameters.slice(0, -1).map(p => p.copy());
                const sync_parameters = node.parameters.map(p => p.copy({ isOptional: false }))
                const output_parameters = async_res instanceof GirConstructor ? [] : async_res.output_parameters;

                let async_return = new PromiseType(async_res.return());

                if (output_parameters.length > 0) {
                  const raw_return = async_res.return();
                  if (raw_return.equals(VoidType) || raw_return.equals(BooleanType)) {
                    const [output_type, ...output_types] = output_parameters.map(op => op.type);
                    async_return = new PromiseType(new TupleType(output_type, ...output_types));
                  } else {
                    const [...output_types] = output_parameters.map(op => op.type);
                    async_return = new PromiseType(new TupleType(raw_return, ...output_types));
                  }
                }

                return [
                  node.copy({
                    parameters: async_parameters,
                    returnType: async_return
                  }),
                  node.copy({
                    parameters: sync_parameters,
                  }),
                  node.copy({
                    returnType: new BinaryType(async_return, node.return())
                  }),
                ];

              }
            }
          }
        }
      }
    }

    return node;
  }).flat(1);
}

export const enum ClassInjectionMember {
  MEMBER = "member",
  CONSTRUCTOR = "_constructor",
  PROPERTY = "prop",
  FIELD = "field",
  MAIN_CONSTRUCTOR = "constructor"
}

export interface ClassDefinition {
  parent: TypeIdentifier;
  interfaces: TypeIdentifier[];
  mainConstructor: GirConstructor;
  constructors: GirConstructor[];
  members: GirClassFunction[];
  props: GirProperty[];
  fields: GirField[];
  callbacks: GirCallback[];
}

export abstract class GirBaseClass extends GirBase {
  namespace: GirNamespace;
  indexSignature?: string;
  parent: TypeIdentifier | null;

  interfaces: TypeIdentifier[];
  mainConstructor: null | GirConstructor;
  constructors: GirConstructor[];
  members: GirClassFunction[];
  props: GirProperty[];
  fields: GirField[];
  callbacks: GirCallback[];

  // Generics support
  generics: Generic[] = [];

  constructor(options: {
    name: string;
    namespace: GirNamespace;
  } & Partial<ClassDefinition>) {
    super(options.name);

    const {
      namespace,
      parent = null,
      interfaces = [],
      mainConstructor = null,
      constructors = [],
      members = [],
      props = [],
      fields = [],
      callbacks = []
    } = options;

    this.namespace = namespace;
    this.parent = parent;

    this.interfaces = [...interfaces];

    this.mainConstructor = mainConstructor?.copy() ?? null;
    this.constructors = [...constructors.map(c => c.copy())];
    this.members = [...members.map(m => m.copy({ parent: this }))];
    this.props = [...props.map(p => p.copy({ parent: this }))];
    this.fields = [...fields.map(f => f.copy({ parent: this }))];
    this.callbacks = [...callbacks.map(c => c.copy())];
  }

  abstract accept(visitor: GirVisitor): GirBaseClass;

  abstract copy(options?: {
    parent?: undefined;
    constructors?: GirConstructor[],
    members?: GirClassFunction[],
    props?: GirProperty[],
    fields?: GirField[],
    callbacks?: GirCallback[]
  }): GirBaseClass;

  getGenericName = GenericNameGenerator.new();

  addGeneric(definition: { deriveFrom?: TypeIdentifier; default?: TypeExpression, constraint?: TypeExpression, propogate?: boolean }) {
    const param = new Generic(
      new GenericType(
        this.getGenericName()
      ),
      definition.default,
      definition.deriveFrom,
      definition.constraint,
      definition.propogate
    );

    this.generics.push(param);
  }

  getType(): TypeIdentifier {
    return new TypeIdentifier(this.name, this.namespace.name);
  }

  static fromXML(
    _modName: string,
    _ns: GirNamespace,
    _options: LoadOptions,
    _parent,
    _klass: ClassElement | InterfaceElement | RecordElement
  ): GirBaseClass {
    throw new Error("fromXML is not implemented on GirBaseClass");
  }

  resolveParents() {
    const class_parents = resolveParents(this.parent, this.namespace);

    const interface_parents = this.interfaces
      .map(i => resolveParents(i, this.namespace))
      .flat()
      .reduce((prev, next) => {
        if (
          !prev.some(([, c]) => c === next[1]) &&
          !class_parents.some(([, c]) => c === next[1])
        ) {
          prev.push([...next]);
        }

        return prev;
      }, [] as [TypeIdentifier, GirBaseClass][]);

    const class_parent_interface_parents = class_parents
      .map(([, i]) => i.interfaces.map(t => resolveParents(t, this.namespace)))
      .flat(2)
      .reduce((prev, next) => {
        if (!prev.some(([, c]) => c === next[1]) &&
          !class_parents.some(([, c]) => c === next[1]) &&
          !interface_parents.some(([, c]) => c === next[1])) {
          prev.push(next);
        }

        return prev;
      }, [] as [TypeIdentifier, GirBaseClass][]);



    return { class_parents, class_parent_interface_parents, interface_parents };
  }

  implementedMethods(interfaces: [TypeIdentifier, GirBaseClass][], potentialConflicts: GirBase[] = []) {
    return interfaces
      .map(([type, i]) =>
        [i, i.members
          .filter(i => !(i instanceof GirStaticClassFunction))
          .filter(
            i =>
              potentialConflicts.every(p => i.name !== p.name) &&
              this.members.every(p => i.name !== p.name) &&
              this.props.every(p => i.name !== p.name) &&
              this.fields.every(p => i.name !== p.name)
          )
        ] as const
      )
      .map(([i, m]) => {
        return m.map(f => {
          const mapping = new Map<string, TypeExpression>();
          if (f.parent instanceof GirBaseClass) {
            const inter = this.interfaces.find(i => i.equals(f.parent.getType()));

            if (inter instanceof GenerifiedTypeIdentifier) {

              i.generics.forEach((g, i) => {
                if (inter.generics.length > i) {

                  mapping.set(g.type.identifier, inter.generics[i]);
                }
              });
            }
          }

          const unwrapped = f.return().deepUnwrap();
          let modifiedReturn = f.return();

          if (unwrapped instanceof GenericType && mapping.has(unwrapped.identifier)) {
            let mapped = mapping.get(unwrapped.identifier);

            if (mapped) {
              modifiedReturn = f.return().rewrap(mapped);
            }
            // Handles the case where a class implements an interface and thus copies its virtual methods.
          } else if (unwrapped.equals(this.getType())) {
            modifiedReturn = f.return().rewrap(this.getType());
          }

          return f.copy({
            parent: this,
            interfaceParent: f.parent,
            parameters: f.parameters.map(p => {
              const t = p.type.deepUnwrap();
              if (t instanceof GenericType && mapping.has(t.identifier)) {
                const iden = mapping.get(t.identifier);

                if (iden) {
                  return p.copy({ type: p.type.rewrap(iden) });
                }
              }

              return p;
            }),
            outputParameters: f.output_parameters.map(p => {
              const t = p.type.deepUnwrap();
              if (t instanceof GenericType && mapping.has(t.identifier)) {
                const iden = mapping.get(t.identifier);

                if (iden) {
                  return p.copy({ type: p.type.rewrap(iden) });
                }
              }

              return p;
            }),
            returnType: modifiedReturn
          })
        })
      })
      .flat();
  }

  implementedProperties(interfaces: [TypeIdentifier, GirBaseClass][], potentialConflicts: GirBase[] = []) {
    return interfaces
      .map(([, i]) =>
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

  abstract asString<T = string>(generator: FormatGenerator<T>): T;
}

const isIntrospectable = (e: Element<{}>) => e && e.$ && (!e.$.introspectable || e.$.introspectable === "1");

// These should never be overriden by fields/methods
// TODO Do we need "draw" and "show_all" still?
const PROTECTED_IDS = ["draw", "show_all", "parent_instance", "parent", "parent_class", "object_class"];

export class GirClass extends GirBaseClass {
  signals: GirSignal[] = [];
  isAbstract: boolean = false;

  constructor(name: string, namespace: GirNamespace) {
    super({ name, namespace });
  }

  accept(visitor: GirVisitor): GirClass {
    const node = this.copy({
      signals: this.signals.map(s => s.accept(visitor)),
      constructors: this.constructors.map(c => c.accept(visitor)),
      members: this.members.map(m => m.accept(visitor)),
      props: this.props.map(p => p.accept(visitor)),
      fields: this.fields.map(f => f.accept(visitor)),
      callbacks: this.callbacks.map(c => c.accept(visitor))
    });
    return visitor.visitClass?.(node) ?? node;
  }

  copy(options: {
    parent?: undefined;
    signals?: GirSignal[],
    constructors?: GirConstructor[],
    members?: GirClassFunction[],
    props?: GirProperty[],
    fields?: GirField[],
    callbacks?: GirCallback[]
  } = {}): GirClass {
    const {
      name,
      namespace,
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
      generics
    } = this;

    const clazz = new GirClass(name, namespace);

    clazz._copyBaseProperties(this);

    if (parent) {
      clazz.parent = parent;
    }

    clazz.signals = (options.signals ?? signals).map(s => s.copy());
    clazz.interfaces = [...interfaces];
    clazz.props = (options.props ?? props).map(p => p.copy());
    clazz.fields = (options.fields ?? fields).map(f => f.copy());
    clazz.callbacks = (options.callbacks ?? callbacks).map(c => c.copy());
    clazz.isAbstract = isAbstract;
    clazz.mainConstructor = mainConstructor;
    clazz.constructors = (options.constructors ?? constructors).map(c => c.copy());
    clazz.members = (options.members ?? members).map(m => m.copy({ parent: clazz }));
    clazz.generics = generics;

    // Ensure the generic iteration resumes
    clazz.getGenericName = GenericNameGenerator.at(this.getGenericName());

    return clazz;
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    options: LoadOptions,
    _parent,
    klass: ClassElement
  ): GirClass {
    const name = sanitizeIdentifierName(ns.name, klass.$.name);

    if (options.verbose) {
      console.debug(`  >> GirClass: Parsing definition ${klass.$.name} (${name})...`);
    }

    const clazz = new GirClass(name, ns);

    if (options.loadDocs) {
      clazz.doc = klass.doc?.[0]?._ ?? "";
    }

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
        clazz.parent = parseTypeIdentifier(modName, klass.$.parent);
      }

      if (klass.$.abstract) {
        clazz.isAbstract = true;
      }

      if (Array.isArray(klass.constructor)) {
        clazz.constructors.push(
          ...klass.constructor
            .filter(isIntrospectable)
            .map(constructor => GirConstructor.fromXML(modName, ns, options, clazz, constructor))
        );
      }

      if (klass["glib:signal"]) {
        clazz.signals.push(
          ...klass["glib:signal"].map(signal => GirSignal.fromXML(modName, ns, options, clazz, signal))
        );
      }

      // Properties
      if (klass.property) {
        klass.property.filter(isIntrospectable).forEach(prop => {
          const property = GirProperty.fromXML(modName, ns, options, null, prop);
          if (!PROTECTED_IDS.includes(property.name)) {
            switch (options.propertyCase) {
              case "both":
                clazz.props.push(property);

                const camelCase = property.toCamelCase();

                // Ensure we don't duplicate properties like 'show'
                if (property.name !== camelCase.name) {
                  clazz.props.push(camelCase);
                }

                break;
              case "camel":
                clazz.props.push(property.toCamelCase());
                break;
              case "underscore":
                clazz.props.push(property);
                break;
            }
          }
        });
      }

      // Instance Methods
      if (klass.method) {
        clazz.members.push(
          ...klass.method
            .filter(isIntrospectable)
            .map(method => GirClassFunction.fromXML(modName, ns, options, clazz, method))
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
            const f = GirField.fromXML(modName, ns, options, null, field);
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
          const type = parseTypeIdentifier(modName, name);

          // Sometimes namespaces will implicitly import
          // other namespaces like Atk via interface implements.
          if (
            type && type.namespace &&
            type.namespace !== modName &&
            !ns.imports.has(type.namespace)) {
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
            if (options.verbose) {
              console.debug(`Adding callback ${callback.$.name} for ${modName}`);
            }

            return GirCallback.fromXML(modName, ns, options, clazz, callback);
          })
        );
      }

      // Virtual Methods
      if (klass["virtual-method"]) {
        clazz.members.push(
          ...klass["virtual-method"]
            .filter(isIntrospectable)
            .map(method => GirVirtualClassFunction.fromXML(modName, ns, options, clazz, method))
        );
      }

      // Static methods (functions)
      if (klass.function) {
        clazz.members.push(
          ...klass.function
            .filter(isIntrospectable)
            .map(func => GirStaticClassFunction.fromXML(modName, ns, options, clazz, func))
        );
      }
    } catch (e) {
      console.error(`Failed to parse class: ${clazz.name}.`);
      console.error(e);
    }

    return clazz;
  }

  asString<T = string>(generator: FormatGenerator<T>): T {
    return generator.generateClass(this);
  }
}

export class GirRecord extends GirBaseClass {
  private _isForeign: boolean = false;

  isForeign(): boolean {
    return this._isForeign;
  }

  accept(visitor: GirVisitor): GirRecord {
    const node = this.copy({
      constructors: this.constructors.map(c => c.accept(visitor)),
      members: this.members.map(m => m.accept(visitor)),
      props: this.props.map(p => p.accept(visitor)),
      fields: this.fields.map(f => f.accept(visitor)),
      callbacks: this.callbacks.map(c => c.accept(visitor))
    });

    return visitor.visitRecord?.(node) ?? node;
  }

  copy(options: {
    parent?: undefined;
    constructors?: GirConstructor[],
    members?: GirClassFunction[],
    props?: GirProperty[],
    fields?: GirField[],
    callbacks?: GirCallback[]
  } = {}): GirRecord {
    const {
      name,
      namespace,
      parent,
      interfaces,
      members,
      constructors,
      _isForeign,
      props,
      fields,
      callbacks,
      generics,
      mainConstructor
    } = this;

    const clazz = new GirRecord({ name, namespace });

    clazz._copyBaseProperties(this);

    if (parent) {
      clazz.parent = parent;
    }

    clazz._isForeign = _isForeign;
    clazz.interfaces = interfaces.map(i => i);
    clazz.props = (options.props ?? props).map(p => p.copy());
    clazz.fields = (options.fields ?? fields).map(f => f.copy());
    clazz.callbacks = (options.callbacks ?? callbacks).map(c => c.copy());
    clazz.mainConstructor = mainConstructor?.copy() ?? null;
    clazz.constructors = (options.constructors ?? constructors).map(c => c.copy());
    clazz.members = (options.members ?? members).map(m => m.copy({ parent: clazz }));
    clazz.generics = generics;

    return clazz;
  }

  static foreign(name: string, namespace: GirNamespace): GirRecord {
    const foreignRecord = new GirRecord({ name, namespace });
    foreignRecord._isForeign = true;
    return foreignRecord;
  }

  static fromXML(modName: string, namespace: GirNamespace, options: LoadOptions, klass: RecordElement): GirRecord {
    const name = sanitizeIdentifierName(namespace.name, klass.$.name);

    if (options.verbose) {
      console.debug(`  >> GirRecord: Parsing definition ${klass.$.name} (${name})...`);
    }

    const clazz = new GirRecord({ name, namespace });

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
            .map(method => GirClassFunction.fromXML(modName, namespace, options, clazz, method))
        );
      }

      // Constructors
      if (Array.isArray(klass.constructor)) {
        klass.constructor.filter(isIntrospectable).forEach(constructor => {
          const c = GirConstructor.fromXML(modName, namespace, options, clazz, constructor);

          clazz.constructors.push(c);
        });
      }

      // Static methods (functions)
      if (klass.function) {
        clazz.members.push(
          ...klass.function
            .filter(isIntrospectable)
            .map(func => GirStaticClassFunction.fromXML(modName, namespace, options, clazz, func))
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
            .map(field => GirField.fromXML(modName, namespace, options, null, field))
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

  isSimple(modName: string) {
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

        const child_ns = this.namespace.assertInstalledImport(type.namespace || modName);
        const child = child_ns.getClass(type.name);

        // TODO Handle Unions
        if (child instanceof GirRecord) {
          if (child === this) {
            return false;
          }

          return child.isSimple(modName);
        } else {
          return false;
        }
      }
    };

    return this.fields.every(f => isSimpleType(f.type));
  }

  asString<T = string>(generator: FormatGenerator<T>): T {
    return generator.generateRecord(this);
  }
}

export class GirInterface extends GirBaseClass {
  noParent = false;

  copy(options: {
    parent?: undefined;
    noParent?: boolean;
    constructors?: GirConstructor[],
    members?: GirClassFunction[],
    props?: GirProperty[],
    fields?: GirField[],
    callbacks?: GirCallback[]
  } = {}): GirInterface {
    const {
      name,
      namespace,
      parent,
      noParent,
      interfaces,
      members,
      constructors,
      props,
      fields,
      callbacks,
      mainConstructor,
      generics
    } = this;

    const clazz = new GirInterface({ name, namespace });

    clazz._copyBaseProperties(this);

    clazz.noParent = noParent;

    if (parent) {
      clazz.parent = parent;
    }

    clazz.interfaces = interfaces;
    clazz.props = (options.props ?? props).map(p => p.copy());
    clazz.fields = (options.fields ?? fields).map(f => f.copy());
    clazz.callbacks = (options.callbacks ?? callbacks).map(c => c.copy());
    clazz.mainConstructor = mainConstructor?.copy() ?? null;
    clazz.constructors = (options.constructors ?? constructors).map(c => c.copy());
    clazz.members = (options.members ?? members).map(m => m.copy({ parent: clazz }));
    clazz.generics = generics;

    return clazz;
  }

  accept(visitor: GirVisitor): GirInterface {
    const node = this.copy(
      {
        constructors: this.constructors.map(c => c.accept(visitor)),
        members: this.members.map(m => m.accept(visitor)),
        props: this.props.map(p => p.accept(visitor)),
        fields: this.fields.map(f => f.accept(visitor)),
        callbacks: this.callbacks.map(c => c.accept(visitor))
      }
    );

    return visitor.visitInterface?.(node) ?? node;
  }

  static fromXML(
    modName: string,
    namespace: GirNamespace,
    options: LoadOptions,
    klass: InterfaceElement
  ): GirInterface {
    const name = sanitizeIdentifierName(namespace.name, klass.$.name);

    if (options.verbose) {
      console.debug(`  >> GirInterface: Parsing definition ${klass.$.name} (${name})...`);
    }

    const clazz = new GirInterface({ name, namespace });

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

        clazz.parent = parseTypeIdentifier(modName, prerequisite.$.name);
      }

      if (Array.isArray(klass.constructor)) {
        for (let constructor of klass.constructor.filter(isIntrospectable)) {
          clazz.constructors.push(GirConstructor.fromXML(modName, namespace, options, clazz, constructor));
        }
      }

      // Properties
      if (klass.property) {
        clazz.props.push(
          ...klass.property
            .filter(isIntrospectable)
            .map(prop => GirProperty.fromXML(modName, namespace, options, null, prop))
            .map(prop => {
              switch (options.propertyCase) {
                case "both":
                  const camelCase = prop.toCamelCase();

                  // Ensure we don't duplicate properties like 'show'
                  if (prop.name !== camelCase.name) {
                    return [prop, prop.toCamelCase()];
                  }

                  return [prop];
                case "camel":
                  return [prop.toCamelCase()];
                case "underscore":
                  return [prop];
              }
            })
            .flat(1)
            .filter(property => !PROTECTED_IDS.includes(property.name))
        );
      }

      // Instance Methods
      if (klass.method) {
        for (let method of klass.method.filter(isIntrospectable)) {
          const m = GirClassFunction.fromXML(modName, namespace, options, clazz, method);

          if (!clazz.props.some(n => n.name === m.name)) {
            clazz.members.push(m);
          }
        }
      }

      // Virtual Methods
      if (klass["virtual-method"]) {
        for (let method of klass["virtual-method"].filter(isIntrospectable)) {
          clazz.members.push(GirVirtualClassFunction.fromXML(modName, namespace, options, clazz, method));
        }
      }

      // Callback Types
      if (klass.callback) {
        for (let callback of klass.callback.filter(isIntrospectable)) {
          if (options.verbose) {
            console.debug(`Adding callback ${callback.$.name} for ${modName}`);
          }

          clazz.callbacks.push(GirCallback.fromXML(modName, namespace, options, clazz, callback));
        }
      }

      // Static methods (functions)
      if (klass.function) {
        for (let func of klass.function.filter(isIntrospectable)) {
          clazz.members.push(GirStaticClassFunction.fromXML(modName, namespace, options, clazz, func));
        }
      }
    } catch (e) {
      console.error(`Failed to parse interface: ${clazz.name}.`);
      console.error(e);
    }
    return clazz;
  }

  asString<T = string>(generator: FormatGenerator<T>): T {
    return generator.generateInterface(this);
  }
}
