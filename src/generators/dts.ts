import { EOL } from "os";

import { FormatGenerator } from "./generator";
import { GirNSRegistry, GirNamespace } from "../gir/namespace";
import { GenerationOptions } from "../main";

import {
  GirBaseClass,
  GirRecord,
  GirInterface,
  GirClass,
  filterConflicts,
  filterFunctionConflict,
  resolveParents,
  resolveTypeIdentifier,
  FilterBehavior
} from "../gir/class";
import { GirConst } from "../gir/const";
import { GirEnum, GirError, GirEnumMember } from "../gir/enum";
import { GirProperty, GirField } from "../gir/property";
import { GirSignal, GirSignalType } from "../gir/signal";
import { GirFunction, GirConstructor, GirFunctionParameter, GirCallback } from "../gir/function";
import { GirClassFunction, GirStaticClassFunction, GirVirtualClassFunction } from "../gir/function";
import {
  sanitizeIdentifierName,
  isInvalid,
  resolveDirectedType,
  resolveType,
  parseTypeString
} from "../gir/util";
import {
  TypeExpression,
  NullableType,
  TypeIdentifier,
  ClosureType,
  AnyifiedType,
  NativeType,
  AnyType,
  VoidType,
  StringType,
  NumberType,
  ArrayType
} from "../gir";
import { GenericNameGenerator } from "../gir/generics";
import { Direction } from "../xml";
import { GirAlias } from "../gir/alias";

export class DtsGenerator extends FormatGenerator {
  modName: string;
  registry: GirNSRegistry;
  options: GenerationOptions;

  constructor(modName: string, registry: GirNSRegistry, options: GenerationOptions) {
    super();
    this.modName = modName;
    this.registry = registry;
    this.options = options;
  }

  private generateParameters(parameters: GirFunctionParameter[]): string {
    return parameters
      .map(p => {
        return p.asString(this);
      })
      .join(", ");
  }

  generateCallbackType(node: GirCallback, generics = true): [string, string] {
    const { modName, registry, options } = this;

    const Parameters = this.generateParameters(node.parameters);

    if (options.inferGenerics && generics) {
      const generateName = GenericNameGenerator.new();
      const [, , genericParameters] = node.shouldGenerifyParameters();
      const namedParameters = genericParameters.map(p => [p, generateName()] as const);

      const GObject = modName === "GObject" ? "Object" : "GObject.Object";

      const iterator = namedParameters[Symbol.iterator]();
      let genericParameter = iterator.next();
      const GenerifiedParameters = this.generateParameters(
        [...node.parameters].map(p => {
          if (!genericParameter.done && p === genericParameter.value[0]) {
            const generified = p.copy({ type: new NativeType(genericParameter.value[1]) });
            genericParameter = iterator.next();
            return generified;
          }

          return p;
        })
      );

      const names = namedParameters.map(([, name]) => name);

      if (names.length > 0) {
        const GenericDefinitions = names.map(name => `${name} = ${GObject}`).join(", ");
        return [
          `<${GenericDefinitions}>`,
          `(${GenerifiedParameters}) => ${node.return(modName, registry).resolve(modName, registry, options)}`
        ];
      } else {
        return [
          ``,
          `(${Parameters}) => ${node.return(modName, registry).resolve(modName, registry, options)}`
        ];
      }
    } else {
      return [``, `(${Parameters}) => ${node.return(modName, registry).resolve(modName, registry, options)}`];
    }
  }

  generateCallback(node: GirCallback): string {
    return `export type ${node.name}${this.generateCallbackType(node).join(" = ")};`;
  }

  generateReturn(return_type: TypeExpression, output_parameters: GirFunctionParameter[]) {
    const { modName: name, registry, options } = this;
    const type = return_type.rootResolve(name, registry, options);

    if (output_parameters.length > 0) {
      const exclude_first = type === "void" || type === "";
      const returns = [
        ...(exclude_first ? [] : [`${type}`]),
        ...output_parameters.map(op => op.type.rootResolve(name, registry, options))
      ];
      if (returns.length > 1) {
        return `[${returns.join(", ")}]`;
      } else {
        return `${returns[0]}`;
      }
    }

    return type;
  }

  generateEnum(node: GirEnum): string | null {
    try {
      const isInvalidEnum = Array.from(node.members.keys()).some(
        name => !Number.isNaN(Number.parseFloat(name)) || name === "NaN" || name === "Infinity"
      );
      if (isInvalidEnum) {
        return node.asClass().asString(this);
      }

      return `export enum ${node.name} {
                    ${Array.from(node.members.values())
                      .map(member => `${member.asString(this)}`)
                      .join(EOL)}
                }`;
    } catch (e) {
      console.error(`Failed to generate enum: ${node.name}.`);
      console.error(e);
      return null;
    }
  }

  generateError(node: GirError): string {
    const { registry } = this;
    const clazz = node.asClass();

    clazz.members = [];
    clazz.members.push(...Array.from(node.functions.values()));

    const GLib = registry.namespace("GLib");

    if (!GLib) {
      throw new Error(`Attempted to generate a subclass of GLib.Error without GLib loaded!`);
    }

    const GLibError = GLib.getClass("Error");

    if (!GLibError) {
      throw new Error(`GLib.Error is not defined. This should not occur.`);
    }

    clazz.parent = GLibError.getType();

    // Manually construct a GLib.Error constructor.
    clazz.mainConstructor = new GirConstructor({
      name: "new",
      parameters: [
        new GirFunctionParameter({
          name: "options",
          type: NativeType.of("{ message: string, code: number}"),
          direction: Direction.In
        })
      ],
      return_type: clazz.getType()
    });

    return clazz.asString(this);
  }

  generateConst(node: GirConst): string {
    const { modName, registry, options } = this;

    return `export const ${node.name}: ${node.type.resolve(modName, registry, options)};`;
  }

  private implements(node: GirBaseClass) {
    const { modName, registry, options } = this;
    if (node.interfaces.length > 0) {
      return ` implements ${node.interfaces
        .map(i => {
          const Type = resolveType(modName, registry, i, options);
          const Generic = node.generic_names.get(Type);

          if (Generic && Generic.length > 0) {
            return `${Type}<${Generic.join(", ")}>`;
          } else {
            return `${Type}`;
          }
        })
        .join(", ")}`;
    }
    return "";
  }

  private extends(node: GirBaseClass) {
    const { modName, registry: ns, options } = this;
    if (node.parent) {
      const resolvedParent = node.parent ? resolveTypeIdentifier(modName, ns, node.parent) : null;

      const ParentGeneric =
        resolvedParent?.interfaces
          .map(i => {
            const Type = resolveType(modName, ns, i, options);
            const Generic = node.generic_names.get(Type);

            return Generic ?? [];
          })
          .flat(1) ?? [];

      const Type = resolveType(modName, ns, node.parent, options);
      const Generic = node.generic_names.get(Type) ?? [];

      if (Generic.length > 0 || ParentGeneric.length > 0) {
        return ` extends ${Type}<${[...ParentGeneric, ...Generic].join(", ")}>`;
      } else {
        return ` extends ${Type}`;
      }
    }

    return "";
  }

  generateInterface(node: GirInterface): string {
    const { modName, registry, options } = this;
    // If an interface does not list a prerequisite type, we fill it with GObject.Object
    if (node.parent == null) {
      const gobject = registry.namespace("GObject");

      // TODO Optimize GObject.Object
      if (!gobject) {
        throw new Error("GObject not generated, all interfaces extend from GObject.Object!");
      }

      const GObject = gobject.getClass("Object");

      if (!GObject) {
        throw new Error(`GObject.Object could not be found while generating ${modName}.${node.name}`);
      }

      node.parent = GObject.getType();
    }

    const resolved_parents = resolveParents(node.parent, modName, registry);

    const isGObject = resolved_parents.some(p => p.ns === "GObject" && p.name === "Object");

    const name = node.name;

    const getGenericName = GenericNameGenerator.new();

    const resolvedParent = node.parent ? resolveTypeIdentifier(modName, registry, node.parent) : null;

    let type_map = {} as { [key: string]: string };

    let Generics = [...(resolvedParent ? [resolvedParent] : []), node as GirBaseClass]
      .map(g => {
        const resolvedType = resolveType(modName, registry, g.getType(), options);

        let types = [] as string[];

        if (!node.generic_names.has(resolvedType)) {
          node.generic_names.set(resolvedType, types);
        }

        return g.generics.map(generic => {
          if (generic.deriveFrom) {
            const type = parseTypeString(generic.deriveFrom);
            const typeName = resolveType(modName, registry, type, options);
            const name = type_map[typeName];

            if (name) {
              types.push(name);
            } else {
              throw new Error(`Attempted to derive generic from unknown or non-generic parent: ${typeName}`);
            }

            return "";
          }

          const genericName = getGenericName();

          type_map[resolvedType] = genericName;
          types.push(genericName);

          if (generic.default) {
            // Override instances of this type!
            const mapping = node.generic_override_types.get(generic.default) || {};

            mapping[resolvedType] = genericName;

            node.generic_override_types.set(generic.default, mapping);

            return `${genericName} = ${generic.default}`;
          } else {
            return `${genericName}`;
          }
        });
      })
      .flat()
      .filter(s => s.length > 0)
      .join(", ");

    if (Generics !== "") {
      Generics = `<${Generics}>`;
    }

    const Extends = this.extends(node);

    const functions = filterFunctionConflict(node.ns, node.members, resolved_parents, [], registry);

    const staticFunctions = functions.filter(f => f instanceof GirStaticClassFunction);
    const nonstaticFunctions = functions.filter(f => !(f instanceof GirStaticClassFunction));
    const hasNamespace = isGObject || staticFunctions.length > 0 || node.callbacks.length > 0;
    return `
        ${
          node.callbacks.length > 0
            ? `export module ${name} {
  ${node.callbacks.map(c => c.asString(this)).join(EOL)}
  }`
            : ""
        }
      ${
        hasNamespace
          ? `export interface ${name}Namespace {
    ${isGObject ? "$gtype: GType;" : ""}
    ${
      staticFunctions.length > 0
        ? staticFunctions.map(sf => GirClassFunction.prototype.asString.call(sf, this)).join(EOL)
        : ""
    }    
    }`
          : ""
      }
    export interface ${name}${Generics}${Extends} {
    ${node.props.length > 0 ? `// Properties` : ""}
    ${filterConflicts(node.ns, node.props, resolved_parents, registry)
      .map(p => p.asString(this))
      .join(EOL)}
    ${node.fields.length > 0 ? `// Fields` : ""}
    ${filterConflicts(node.ns, node.fields, resolved_parents, registry)
      .map(p => p.asString(this))
      .join(EOL)}
    ${nonstaticFunctions.length > 0 ? `// Members\n` : ""}
    ${nonstaticFunctions.map(m => m.asString(this)).join(EOL)}
    }${hasNamespace ? `\n\nexport const ${name}: ${name}Namespace;\n` : ""}`;
  }

  generateRecord(node: GirRecord): string {
    const { modName, registry } = this;
    const { class_parents, class_parent_interface_parents, interface_parents } = node.resolveParents(
      modName,
      registry
    );

    const resolved_parents = [...class_parents, ...class_parent_interface_parents, ...interface_parents];

    const { name } = node;

    const implementedProperties = node.implementedProperties(interface_parents);
    const implementedMethods = node.implementedMethods(interface_parents, implementedProperties);

    const Extends = this.extends(node);
    const Implements = this.implements(node);

    let MainConstructor: string = "";

    if (node.isForeign()) {
      MainConstructor = "";
    } else if (node.mainConstructor) {
      MainConstructor = this.generateConstructor(node.mainConstructor);
    } else if (node.constructors.length > 0) {
      const [firstConstructor] = node.constructors;
      MainConstructor = this.generateConstructor(firstConstructor);
    } else if (node.isSimple(modName, registry)) {
      const ConstructorFields = node.fields
        .map(v => {
          const copied = v.copy();

          copied.optional = true;

          return copied.asString(this);
        })
        .join(EOL);
      MainConstructor = `constructor(properties?: {
          ${ConstructorFields}
        });`;
    }

    const hasCallbacks = node.callbacks.length > 0;

    const Properties = filterConflicts(node.ns, node.props, resolved_parents, registry)
      .map(v => v.asString(this))
      .join(EOL);

    const Fields = filterConflicts(node.ns, node.fields, resolved_parents, registry)
      .map(v => v.asString(this))
      .join(EOL);

    const Constructors = filterConflicts(node.ns, node.constructors, resolved_parents, registry)
      .map(v => v.asString(this))
      .join(EOL);

    const Members = filterFunctionConflict(node.ns, node.members, resolved_parents, [], registry)
      .map(v => v.asString(this))
      .join(EOL);

    const ImplementedMethods = filterFunctionConflict(
      node.ns,
      implementedMethods,
      resolved_parents,
      [],
      registry
    )
      .map(m => m.asString(this))
      .join(EOL);

    const ImplementedProperties = filterConflicts(node.ns, implementedProperties, resolved_parents, registry)
      .map(m => m.asString(this))
      .join(EOL);

    return `${
      hasCallbacks
        ? `export module ${name} {
                ${node.callbacks.map(c => c.asString(this)).join(EOL)}
             }`
        : ``
    }
  
      export class ${name}${Extends}${Implements} {
      
        ${MainConstructor}
        constructor(copy: ${node.name});
    
        ${node.props.length > 0 ? `// Properties` : ""}
        ${Properties}
        
        ${node.fields.length > 0 ? `// Fields` : ""}
        ${Fields}
        
        ${implementedProperties.length > 0 ? `// Implemented Properties` : ""}
        ${ImplementedProperties}
        
        ${node.constructors.length > 0 ? `// Constructors` : ""}
        ${Constructors}
        
        ${node.members.length > 0 ? `// Members` : ""}
        ${Members}
        
        ${implementedMethods.length > 0 ? `// Implemented Members` : ""}
        ${ImplementedMethods}
    }`;
  }

  generateClass(node: GirClass): string {
    const { modName, registry, options } = this;
    const { class_parents, class_parent_interface_parents, interface_parents } = node.resolveParents(
      modName,
      registry
    );

    const resolved_parents = [...class_parents, ...class_parent_interface_parents, ...interface_parents];

    const name = node.name;

    let injectConstructorBucket = !node.mainConstructor;

    const getGenericName = GenericNameGenerator.new();

    const resolvedParent = node.parent ? resolveTypeIdentifier(modName, registry, node.parent) : null;
    const resolvedInterfaces = node.interfaces
      .map(i => resolveTypeIdentifier(modName, registry, i))
      .filter((c): c is GirBaseClass => c != null);

    let type_map = {} as { [key: string]: string };

    let Generics = [...(resolvedParent ? [resolvedParent] : []), ...resolvedInterfaces, node as GirBaseClass]
      .map(g => {
        const resolvedType = resolveType(modName, registry, g.getType(), options);

        let types = [] as string[];

        if (!node.generic_names.has(resolvedType)) {
          node.generic_names.set(resolvedType, types);
        }

        return g.generics.map(generic => {
          if (generic.deriveFrom) {
            const type = parseTypeString(generic.deriveFrom);
            const typeName = resolveType(modName, registry, type, options);
            const name = type_map[typeName];
            console.log(`Deriving from ${typeName} with name ${name}`);
            if (name) {
              types.push(name);
            } else {
              throw new Error(`Attempted to derive generic from unknown or non-generic parent: ${typeName}`);
            }

            return "";
          }

          const genericName = getGenericName();
          console.log(`Generic: ${resolvedType} => ${genericName}`);
          type_map[resolvedType] = genericName;
          types.push(genericName);

          if (generic.default) {
            // Override instances of this type!
            const mapping = node.generic_override_types.get(generic.default) || {};

            mapping[resolvedType] = genericName;

            node.generic_override_types.set(generic.default, mapping);

            return `${genericName} = ${generic.default}`;
          } else {
            return `${genericName}`;
          }
        });
      })
      .flat()
      .filter(s => s.length > 0)
      .join(", ");

    if (Generics !== "") {
      Generics = `<${Generics}>`;
    }

    const Extends = this.extends(node);
    const Implements = this.implements(node);

    const implementedProperties = node.implementedProperties(interface_parents);
    const implementedMethods = node.implementedMethods(interface_parents, implementedProperties);

    let MainConstructor: string = "";

    if (node.mainConstructor) {
      MainConstructor = `\n${this.generateConstructor(node.mainConstructor)}`;
    } else {
      MainConstructor = `\nconstructor(properties?: Partial<${name}.ConstructorProperties>, ...args: any[]);
                  _init(properties?: Partial<${name}.ConstructorProperties>, ...args: any[]): void;\n`;
    }

    const ConstructorProps = filterConflicts(
      node.ns,
      node.props.filter(prop => !prop.isStatic),
      // Only filter for extends, not implements.
      class_parents,
      registry
    )
      .map(v => this.generateProperty(v, true))
      .join(EOL);

    const Properties = filterConflicts(node.ns, node.props, resolved_parents, registry)
      .map(v => v.asString(this))
      .join(EOL);

    const Fields = filterConflicts(node.ns, node.fields, resolved_parents, registry)
      .map(v => v.asString(this))
      .join(EOL);

    const Constructors = filterFunctionConflict(node.ns, node.constructors, resolved_parents, [], registry)
      .map(v => v.asString(this))
      .join(EOL);

    const Members = filterFunctionConflict(node.ns, node.members, resolved_parents, [], registry)
      .map(v => v.asString(this))
      .join(EOL);

    const ImplementedProperties = filterConflicts(node.ns, implementedProperties, resolved_parents, registry)
      .map(m => m.asString(this))
      .join(EOL);

    const ImplementedMethods = filterFunctionConflict(
      node.ns,
      implementedMethods,
      resolved_parents,
      [],
      registry
    )
      .map(m => m.asString(this))
      .join(EOL);

    // TODO Move these to a cleaner place.

    const Connect = new GirClassFunction({
      name: "connect",
      parent: node,
      parameters: [
        new GirFunctionParameter({
          name: "id",
          type: StringType,
          direction: Direction.In
        }),
        new GirFunctionParameter({
          name: "callback",
          type: NativeType.of("(...args: any[]) => any"),
          direction: Direction.In
        })
      ],
      return_type: NumberType
    });

    const ConnectAfter = new GirClassFunction({
      name: "connect_after",
      parent: node,
      parameters: [
        new GirFunctionParameter({
          name: "id",
          type: StringType,
          direction: Direction.In
        }),
        new GirFunctionParameter({
          name: "callback",
          type: NativeType.of("(...args: any[]) => any"),
          direction: Direction.In
        })
      ],
      return_type: NumberType
    });

    const Emit = new GirClassFunction({
      name: "emit",
      parent: node,
      parameters: [
        new GirFunctionParameter({
          name: "id",
          type: StringType,
          direction: Direction.In
        }),
        new GirFunctionParameter({
          name: "args",
          isVarArgs: true,
          type: new ArrayType(AnyType),
          direction: Direction.In
        })
      ],
      return_type: VoidType
    });

    let default_signals = [] as GirClassFunction[];
    let hasConnect, hasConnectAfter, hasEmit;

    if (node.signals.length > 0) {
      hasConnect = node.members.some(m => m.name === "connect");
      hasConnectAfter = node.members.some(m => m.name === "connect_after");
      hasEmit = node.members.some(m => m.name === "emit");

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

      hasConnect = !default_signals.some(s => s.name === "connect");
      hasConnectAfter = !default_signals.some(s => s.name === "connect_after");
      hasEmit = !default_signals.some(s => s.name === "emit");
    }

    const SignalsList = [
      // TODO Relocate these.
      ...default_signals.map(s => s.asString(this)),
      ...node.signals
        .map(s => {
          const methods = [] as string[];

          if (!hasConnect) methods.push(s.asString(this, GirSignalType.CONNECT));
          if (!hasConnectAfter) methods.push(s.asString(this, GirSignalType.CONNECT_AFTER));
          if (!hasEmit) methods.push(s.asString(this, GirSignalType.EMIT));

          return methods;
        })
        .flat()
    ];

    const hasSignals = SignalsList.length > 0;
    const Signals = SignalsList.join(EOL);

    const hasCallbacks = node.callbacks.length > 0;
    const hasModule = injectConstructorBucket || hasCallbacks;

    return `${
      hasModule
        ? `export module ${name} {
                ${hasCallbacks ? node.callbacks.map(c => c.asString(this)).join(EOL) : ""}
                ${
                  injectConstructorBucket
                    ? `export interface ConstructorProperties${
                        Extends ? `${Extends.split("<")[0]}.ConstructorProperties` : ""
                      } {
                          [key: string]: any;
                          ${ConstructorProps}
                        }`
                    : ""
                }
              }`
        : ""
    }
      export ${node.isAbstract ? `abstract ` : ""}class ${name}${Generics}${Extends}${Implements} {
        
      ${MainConstructor}
      
      ${node.props.length > 0 ? `// Properties` : ""}
      ${Properties}
      
      ${node.fields.length > 0 ? `// Fields` : ""}
      ${Fields}
  
      ${hasSignals ? `// Signals\n` : ""}
      ${Signals}
    
      ${implementedProperties.length > 0 ? `// Implemented Properties\n` : ""}
      ${ImplementedProperties}
    
      ${node.constructors.length > 0 ? `// Constructors\n` : ""}
      ${Constructors}
      
      ${node.members.length > 0 ? `// Members\n` : ""}
      ${Members}
      
      ${implementedMethods.length > 0 ? `// Implemented Members\n` : ""}
      ${ImplementedMethods}
    }`;
  }

  generateField(node: GirField): string {
    const { modName: namespace, registry, options } = this;
    const { name, computed } = node;
    const invalid = isInvalid(name);

    const Static = node.isStatic ? "static" : "";
    const ReadOnly = node.writable ? "" : "readonly";

    const Modifier = [Static, ReadOnly].filter(a => a !== "").join(" ");

    const Name = computed ? `[${name}]` : invalid ? `"${name}"` : name;

    return `${Modifier} ${Name}${node.optional ? "?" : ""}: ${
      node.type.rootResolve(namespace, registry, options) || "any"
    };`;
  }

  generateProperty(node: GirProperty, construct: boolean = false): string {
    const { modName: namespace, registry, options } = this;

    const invalid = isInvalid(node.name);
    const Static = node.isStatic ? "static" : "";
    const ReadOnly = node.writable || construct ? "" : "readonly";

    const Modifier = [Static, ReadOnly].filter(a => a !== "").join(" ");

    const Name = invalid ? `"${node.name}"` : node.name;

    let Type = node.type.rootResolve(namespace, registry, options) || "any";

    return `${Modifier} ${Name}: ${Type};`;
  }

  generateSignal(node: GirSignal, type: GirSignalType = GirSignalType.CONNECT): string {
    switch (type) {
      case GirSignalType.CONNECT:
        return node.asConnect(this, false).asString(this);
      case GirSignalType.CONNECT_AFTER:
        return node.asConnect(this, true).asString(this);
      case GirSignalType.EMIT:
        return node.asEmit().asString(this);
    }
  }

  generateEnumMember(node: GirEnumMember): string {
    const invalid = isInvalid(node.name);
    if (
      node.value != null &&
      !Number.isNaN(Number.parseInt(node.value, 10)) &&
      Number.isNaN(Number.parseInt(node.name, 10)) &&
      node.name !== "NaN"
    ) {
      return invalid ? `"${node.name}" = ${node.value},` : `${node.name} = ${node.value},`;
    } else {
      return invalid ? `"${node.name}",` : `${node.name},`;
    }
  }

  generateParameter(node: GirFunctionParameter): string {
    const { modName, registry, options } = this;

    let type: string =
      resolveDirectedType(node.type, node.direction)?.rootResolve(modName, registry, options) ??
      node.type.rootResolve(modName, registry, options);

    const unwrapped = node.type.unwrap();

    // TODO I need a better system for this, but handling Gio.AsyncReadyCallback is the most common.
    if (
      node.parent instanceof GirClassFunction &&
      !(node.parent instanceof GirStaticClassFunction) &&
      unwrapped instanceof ClosureType
    ) {
      const internal = unwrapped.type;

      if (internal instanceof TypeIdentifier && internal.is("Gio", "AsyncReadyCallback")) {
        type = unwrapped.rootResolve(modName, registry, options);

        if (node.type instanceof NullableType) {
          return `${node.name}: ${type}<this> | null`;
        } else {
          return `${node.name}: ${type}<this>`;
        }
      }
    }

    if (node.isVarArgs) {
      return `...args: ${type}`;
    }

    if (node.isOptional) {
      return `${node.name}?: ${type}`;
    } else {
      return `${node.name}: ${type}`;
    }
  }

  generateFunction(node: GirFunction): string {
    const { modName, registry } = this;
    // Register our identifier with the sanitized identifiers.
    // We avoid doing this in fromXML because other class-level function classes
    // depends on that code.
    sanitizeIdentifierName(modName, node.raw_name);

    const Parameters = this.generateParameters(node.parameters);
    const ReturnType = this.generateReturn(node.return(modName, registry), node.output_parameters);
    return `export function ${node.name}(${Parameters}): ${ReturnType};`;
  }

  generateConstructorFunction(node: GirConstructor): string {
    const { modName, registry, options } = this;

    const Parameters = this.generateParameters(node.parameters);

    const invalid = isInvalid(node.name);
    const name = invalid ? `["${node.name}"]` : node.name;
    return `static ${name}(${Parameters}): ${node
      .return(modName, registry)
      .rootResolve(modName, registry, options)};`;
  }

  generateConstructor(node: GirConstructor): string {
    const Parameters = this.generateParameters(node.parameters);

    return `constructor(${Parameters});`;
  }

  generateClassFunction(node: GirClassFunction): string {
    const { modName, registry, options } = this;
    const invalid = isInvalid(node.name);

    const parent = node.parent;

    let parameters = node.parameters;
    let output_parameters = node.output_parameters;
    let return_type = node.return(modName, registry);

    let shouldGenerify = node.shouldGenerifyReturnType();

    if (parent instanceof GirBaseClass) {
      const resolvedParentType = resolveType(modName, registry, parent.getType(), options);
      const resolvedInterfaceParentTypes = parent.interfaces.map(i =>
        resolveType(modName, registry, i, options)
      );

      const replaceType = (t: TypeExpression, genericName?: string): TypeExpression | null => {
        const resolvedType = t.unwrap().resolve(modName, registry, options);
        const interfaceType = node.interfaceParent?.getType().resolve(modName, registry, options) ?? null;
        let replacement: string | null = null;

        if (genericName) {
          replacement = genericName;
        } else {
          const mapping = parent.generic_override_types.get(resolvedType);

          if (mapping) {
            const r1 = resolvedInterfaceParentTypes.filter(t => mapping[t]);
            let r0: string;

            if (interfaceType) {
              r0 = r1.find(r => r === interfaceType) ?? r1[0];
            } else {
              r0 = r1[0];
            }

            replacement = mapping[resolvedParentType] || (r0 && mapping[r0]) || null;
          }
        }

        if (replacement) {
          let replacementType = new NativeType(replacement);

          if (t instanceof NullableType) {
            return new NullableType(replacementType);
          } else if (t instanceof AnyifiedType) {
            return new AnyifiedType(replacementType);
          } else if (t.unwrap() !== t) {
            throw new Error("Attempted to generify unknown wrapped type.");
          } else {
            return replacementType;
          }
        }

        return null;
      };

      const replace = (p: GirFunctionParameter) => {
        const replacement = p.type.unwrap() instanceof TypeIdentifier ? replaceType(p.type) : null;

        if (replacement) {
          return p.copy({ type: replacement });
        } else {
          return p;
        }
      };

      // Insert generics.

      const class_replaced = replaceType(return_type);

      if (class_replaced) {
        return_type = class_replaced;
        shouldGenerify = false;
      } else if (shouldGenerify) {
        const function_replaced = replaceType(return_type, "T");

        if (function_replaced) {
          return_type = function_replaced;
        }
      }

      parameters = parameters.map(replace);
      output_parameters = output_parameters.map(replace);
    }

    const Parameters = this.generateParameters(parameters);
    const ReturnType = this.generateReturn(return_type, output_parameters);

    const GenericBaseType = shouldGenerify ? (modName === "GObject" ? "Object" : "GObject.Object") : "";

    if (node.shouldAnyify()) {
      return `${invalid ? `["${node.name}"]` : node.name}: ${
        shouldGenerify ? `<T = ${GenericBaseType}>` : ""
      }((${Parameters}) => ${ReturnType}) | any;`;
    }

    return `${invalid ? `["${node.name}"]` : node.name}${
      shouldGenerify ? `<T = ${GenericBaseType}>` : ""
    }(${Parameters}): ${ReturnType};`;
  }

  generateStaticClassFunction(node: GirStaticClassFunction): string {
    const { modName, registry } = this;
    return `static ${node.name}(${this.generateParameters(node.parameters)}): ${this.generateReturn(
      node.return(modName, registry),
      node.output_parameters
    )};`;
  }

  generateAlias(node: GirAlias): string {
    const { modName, registry, options } = this;
    const Type = node.type.resolve(modName, registry, options);
    const GenericBase = node.generics
      .map(g => {
        if (g.type) {
          return `${g.name} = ${g.type.rootResolve(modName, registry, options)}`;
        }

        return `${g.name}`;
      })
      .join(", ");
    const Generic = GenericBase ? `<${GenericBase}>` : "";

    return `export type ${node.name}${Generic} = ${Type};`;
  }

  generateVirtualClassFunction(node: GirVirtualClassFunction): string {
    return node.asString(this);
  }

  generateNamespace(node: GirNamespace): string | null {
    const { modName, registry } = this;
    console.log(`Resolving the types of ${modName}...`);
    try {
      const { name } = node;

      const header = `
/**
 * ${name}
 */
`;
      const base = `

type GType = object;

`;

      const content = Array.from(node.members.values())
        .map(m => {
          return `${(Array.isArray(m) ? m : [m]).map(m => m.asString(this)).join(EOL)}`;
        })
        .join(EOL);

      // Resolve imports after we stringify everything else, sometimes we have to ad-hoc add an import.
      const imports = node.imports
        .filter(i => registry.namespace(i) != null)
        .map(i => `import * as ${i} from "${i.toLowerCase()}";`)
        .join(`${EOL}`);

      const raw_output = [header, imports, base, content].join(`\n\n`);

      // Cleanup and indent the output
      const [, output] = raw_output.split("\n").reduce(
        (prev, next) => {
          const trimmed = next.trim();

          if (trimmed === "") {
            return prev;
          }

          let [indent, str] = prev;

          if (
            !trimmed.startsWith("/*") &&
            !trimmed.startsWith("*") &&
            (trimmed.startsWith("}") || trimmed.endsWith("}"))
          ) {
            indent--;
          }

          const indented = trimmed.padStart(trimmed.length + indent * 4, " ");

          if (!trimmed.startsWith("/*") && !trimmed.startsWith("*") && trimmed.endsWith("{")) {
            indent++;
          }

          if (
            indent < 1 &&
            ((trimmed.startsWith("export") && !str.endsWith("*/")) || trimmed.startsWith("/**"))
          ) {
            return [indent, `${str}\n\n${indented}`];
          }

          const isJSDoc = trimmed.startsWith("*");

          return [indent, `${str}\n${isJSDoc ? " " : ""}${indented}`];
        },
        [0, ""] as [number, string]
      );

      console.log(`Printing ${modName}...`);

      return output;
    } catch (err) {
      console.error(`Failed to generate namespace: ${node.name}`);
      console.error(err);
      return null;
    }
  }
}
