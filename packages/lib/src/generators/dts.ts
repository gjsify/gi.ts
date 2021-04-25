import { EOL } from "os";

import { FormatGenerator } from "./generator";
import { GirNamespace, promisifyNamespaceFunctions } from "../gir/namespace";


import {
  GirBaseClass,
  GirRecord,
  GirInterface,
  GirClass,
  filterConflicts,
  filterFunctionConflict,
  FilterBehavior,
  promisifyFunctions
} from "../gir/class";
import { GirConst } from "../gir/const";
import { GirEnum, GirError, GirEnumMember } from "../gir/enum";
import { GirProperty, GirField } from "../gir/property";
import { GirSignal, GirSignalType } from "../gir/signal";
import { GirFunction, GirConstructor, GirFunctionParameter, GirCallback } from "../gir/function";
import { GirClassFunction, GirStaticClassFunction, GirVirtualClassFunction } from "../gir/function";
import { sanitizeIdentifierName, isInvalid, resolveDirectedType } from "../gir/util";
import {
  TypeExpression,
  TypeIdentifier,
  NativeType,
  AnyType,
  VoidType,
  StringType,
  NumberType,
  ArrayType,
  GirBase,
  AnyFunctionType,
  Generic,
  ConflictType,
  TypeConflict,
  BinaryType,
} from "../gir";
import { Direction } from "@gi.ts/parser";
import { GirAlias } from "../gir/alias";
import { GenerationOptions } from "../types";

import { override as overrideGLib } from "./dts/glib";
import { override as overrideGObject } from "./dts/gobject";
import { override as overrideGio } from "./dts/gio";

export class DtsGenerator extends FormatGenerator<string> {

  constructor(namespace: GirNamespace, options: GenerationOptions) {
    super(namespace, options);
  }

  private generateParameters(parameters: GirFunctionParameter[]): string {
    return parameters
      .map(p => {
        return p.asString(this);
      })
      .join(", ");
  }

  generateGenerics(nodes: Generic[], withDefaults = true) {
    const { namespace, options } = this;

    const list = nodes.map(generic => {
      const Type = generic.type.rootPrint(namespace, options);

      if (generic.defaultType && withDefaults) {
        let defaultType = generic.defaultType.rootPrint(namespace, options);

        if (generic.constraint) {
          let constraint = generic.constraint.rootPrint(namespace, options);
          return `${Type} extends ${constraint} = ${defaultType}`;
        }

        return `${Type} = ${defaultType}`;
      } else if (generic.constraint && withDefaults) {
        let constraint = generic.constraint.rootPrint(namespace, options);
        return `${Type} extends ${constraint}`;
      } else {
        return `${Type}`;
      }
    });

    if (list.length > 0) {
      return `<${list.join(", ")}>`;
    }

    return "";
  }

  generateCallbackType(node: GirCallback): [string, string] {
    const { namespace, options } = this;

    const Parameters = this.generateParameters(node.parameters);

    if (node.generics.length > 0) {
      const GenericDefinitions = this.generateGenerics(node.generics);

      return [
        `${GenericDefinitions}`,
        `(${Parameters}) => ${node
          .return()
          .resolve(namespace, options)
          .print(namespace, options)}`
      ];
    }
    return [
      ``,
      `(${Parameters}) => ${node
        .return()
        .resolve(namespace, options)
        .print(namespace, options)}`
    ];
  }

  generateCallback(node: GirCallback): string {
    return `export type ${node.name}${this.generateCallbackType(node).join(" = ")};`;
  }

  generateReturn(return_type: TypeExpression, output_parameters: GirFunctionParameter[]) {
    const { namespace, options } = this;

    let resolved_return_type = resolveDirectedType(
      return_type, Direction.Out
    )?.resolve(namespace, options) ?? return_type.resolve(namespace, options);

    const type = resolved_return_type.rootPrint(namespace, options);

    if (output_parameters.length > 0) {
      const exclude_first = type === "void" || type === "";
      const returns = [
        ...(exclude_first ? [] : [`${type}`]),
        ...output_parameters.map(op => {
          return resolveDirectedType(
            op.type, Direction.Out
          )?.resolve(namespace, options) ?? op.type.resolve(namespace, options);
        }).map(p => p.rootPrint(namespace, options))
      ];
      if (returns.length > 1) {
        return `[${returns.join(", ")}]`;
      } else {
        return `${returns[0]}`;
      }
    }

    return type;
  }

  generateEnum(node: GirEnum): string {
    const { namespace } = this;

    const isInvalidEnum = Array.from(node.members.keys()).some(
      name => name.match(/^[0-9]+$/) || name === "NaN" || name === "Infinity"
    );

    if (isInvalidEnum) {
      return node.asClass().asString(this);
    }

    // So we can use GObject.GType
    this.namespace.assertInstalledImport("GObject");

    return `
      export namespace ${node.name} {
          export const $gtype: ${namespace.name !== 'GObject' ? 'GObject.' : ''}GType<${node.name}>;
      }

      export enum ${node.name} {
                    ${Array.from(node.members.values())
        .map(member => `${member.asString(this)}`)
        .join(EOL)}
                }`;
  }

  generateError(node: GirError): string {
    const { namespace } = this;
    const clazz = node.asClass();

    clazz.members = [];
    clazz.members.push(...Array.from(node.functions.values()));

    const GLib = namespace.assertInstalledImport("GLib");
    const GLibError = GLib.assertClass("Error");

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
    const { namespace, options } = this;

    return `export const ${node.name}: ${node.type
      .resolve(namespace, options)
      .print(namespace, options)};`;
  }

  private implements(node: GirClass) {
    const { namespace, options } = this;

    const interfaces = node.interfaces
      .map(i => {
        return i.resolveIdentifier(namespace, options);
      })
      .filter((i): i is TypeIdentifier => i != null);

    if (interfaces.length > 0) {
      return ` implements ${interfaces.map(i => {
        const Type = i.print(namespace, options);
        return `${Type}`;
      })
        .join(", ")}`;
    }

    return "";
  }

  private extends(node: GirBaseClass) {
    const { namespace: ns, options } = this;
    if (node.parent) {
      const ResolvedType = node.parent.resolveIdentifier(ns, options);
      const Type = ResolvedType?.print(ns, options);

      if (Type) {
        return ` extends ${Type}`;
      }

      throw new Error(`Unable to resolve type: ${node.parent.name} from ${node.parent.namespace} in ${node.namespace.name} ${node.namespace.version}`);
    }

    return "";
  }

  generateInterface(node: GirInterface): string {
    const { namespace, options } = this;

    const isGObject = node.someParent((p) => p.namespace.name === "GObject" && p.name === "Object");

    const name = node.name;

    let generics = node.generics;

    let Generics = "";
    let GenericTypes = "";

    if (generics.length > 0) {
      Generics = `${this.generateGenerics(generics)}`;
      GenericTypes = `${this.generateGenerics(generics, false)}`
    }

    const Extends = this.extends(node);
    const filteredFunctions = filterFunctionConflict(node.namespace, node, node.members, []);
    const functions = options.promisify ? promisifyFunctions(filteredFunctions) : filteredFunctions;

    const staticFunctions = functions.filter(f => f instanceof GirStaticClassFunction);
    const staticFields = node.fields.filter(f => f.isStatic).map(f => f.copy({
      isStatic: false
    }));

    const nonStaticFunctions = functions.filter(f => !(f instanceof GirStaticClassFunction));
    const nonStaticFields = node.fields.filter(f => !f.isStatic);

    const hasNamespace = isGObject || staticFunctions.length > 0 || node.callbacks.length > 0;

    if (isGObject) {
      // So we can use GObject.GType
      this.namespace.assertInstalledImport("GObject");
    }

    return `
        ${node.callbacks.length > 0
        ? `export module ${name} {
  ${node.callbacks.map(c => c.asString(this)).join(EOL)}
  }`
        : ""
      }
      ${hasNamespace
        ? `export interface ${name}Namespace {
    ${isGObject ? `$gtype: ${namespace.name !== 'GObject' ? 'GObject.' : ''}GType<${name}>;` : ""}
    prototype: ${name}Prototype;
    ${staticFields.length > 0 ? staticFields.map(sf => sf.asString(this)).join(EOL) : ""}
    ${staticFunctions.length > 0
          ? staticFunctions.map(sf => GirClassFunction.prototype.asString.call(sf, this)).join(EOL)
          : ""
        }    
    }`
        : ""
      }
    export type ${name}${Generics} = ${name}Prototype${GenericTypes};
    export interface ${name}Prototype${Generics}${Extends} {${node.indexSignature ? `\n${node.indexSignature}\n` : ''}
    ${node.props.length > 0 ? `// Properties` : ""}
    ${filterConflicts(node.namespace, node, node.props)
        .map(p => p.asString(this))
        .join(EOL)}
    ${nonStaticFields.length > 0 ? `// Fields` : ""}
    ${filterConflicts(node.namespace, node, nonStaticFields)
        .map(p => p.asString(this))
        .join(EOL)}
    ${nonStaticFunctions.length > 0 ? `// Members\n` : ""}
    ${nonStaticFunctions.map(m => m.asString(this)).join(EOL)}
    }${hasNamespace ? `\n\nexport const ${name}: ${name}Namespace;\n` : ""}`;
  }

  generateRecord(node: GirRecord): string {
    const { options, namespace } = this;

    const { name } = node;

    const Extends = this.extends(node);

    let Generics = "";

    if (node.generics.length > 0) {
      Generics = `${this.generateGenerics(node.generics)}`;
    }

    let MainConstructor: string = "";

    if (node.isForeign()) {
      MainConstructor = "";
    } else if (node.mainConstructor) {
      MainConstructor = node.mainConstructor.asString(this);
    } else if (node.constructors.length > 0) {
      const [firstConstructor] = node.constructors;
      MainConstructor = firstConstructor.asString(this);
    }

    if (node.isSimple(namespace.name)) {
      const ConstructorFields = node.fields
        .filter(f => !f.isStatic && !f.isNative)
        .map(v => {
          const copied = v.copy();

          copied.optional = true;

          return copied.asString(this);
        })
        .join(EOL);
      MainConstructor += `
        constructor(properties?: Partial<{
          ${ConstructorFields}
        }>);`;
    }

    const hasCallbacks = node.callbacks.length > 0;

    const Properties = filterConflicts(node.namespace, node, node.props)
      .map(v => v.asString(this))
      .join(EOL);

    const Fields = filterConflicts(node.namespace, node, node.fields)
      .map(v => v.asString(this))
      .join(EOL);

    const Constructors = filterConflicts(node.namespace, node, node.constructors)
      .map(v => this.generateConstructorFunction(v))
      .join(EOL);

    const FilteredMembers = filterFunctionConflict(node.namespace, node, node.members, []);
    const Members = (options.promisify ? promisifyFunctions(FilteredMembers) : FilteredMembers)
      .map(v => v.asString(this))
      .join(EOL);


    // So we can use GObject.GType
    this.namespace.assertInstalledImport("GObject");

    return `${hasCallbacks
      ? `export module ${name} {
                ${node.callbacks.map(c => c.asString(this)).join(EOL)}
             }`
      : ``
      }
  
      export class ${name}${Generics}${Extends} {${node.indexSignature ? `\n${node.indexSignature}\n` : ''}
        static $gtype: ${namespace.name !== 'GObject' ? 'GObject.' : ''}GType<${name}>;

        ${MainConstructor}
        constructor(copy: ${node.name});
    
        ${node.props.length > 0 ? `// Properties` : ""}
        ${Properties}
        
        ${node.fields.length > 0 ? `// Fields` : ""}
        ${Fields}

        ${node.constructors.length > 0 ? `// Constructors` : ""}
        ${Constructors}
        
        ${node.members.length > 0 ? `// Members` : ""}
        ${Members}
    }`;
  }

  generateClass(node: GirClass): string {
    const { options, namespace } = this;

    const name = node.name;

    let injectConstructorBucket = !node.mainConstructor;

    let Generics = "";
    let GenericTypes = "";

    if (node.generics.length > 0) {
      Generics = `${this.generateGenerics(node.generics)}`;
      GenericTypes = `${this.generateGenerics(node.generics, false)}`;
    }

    const Extends = this.extends(node);
    const Implements = this.implements(node);

    const implementedProperties = node.implementedProperties();
    const implementedMethods = node.implementedMethods(implementedProperties);

    let MainConstructor: string = "";

    if (node.mainConstructor) {
      MainConstructor = `\n${node.mainConstructor.asString(this)}`;
    } else {
      MainConstructor = `\nconstructor(properties?: Partial<${name}.ConstructorProperties${GenericTypes}>, ...args: any[]);
                  _init(properties?: Partial<${name}.ConstructorProperties${GenericTypes}>, ...args: any[]): void;\n`;
    }

    const ConstructorProps = filterConflicts(
      node.namespace,
      node,
      // TODO: Include properties from interface parents too.
      node.props
    )
      .map(v => v.asString(this, true))
      .join(EOL);

    const Properties = filterConflicts(node.namespace, node, node.props)
      .map(v => v.asString(this))
      .join(EOL);

    const Fields = filterConflicts(node.namespace, node, node.fields)
      .map(v => v.asString(this))
      .join(EOL);

    const Constructors = filterFunctionConflict(node.namespace, node, node.constructors, [])
      .map(v => this.generateConstructorFunction(v))
      .join(EOL);

    const FilteredMembers = filterFunctionConflict(node.namespace, node, node.members, []);
    const Members = (options.promisify ? promisifyFunctions(FilteredMembers) : FilteredMembers)
      .map(v => v.asString(this))
      .join(EOL);

    const ImplementedProperties = filterConflicts(node.namespace, node, implementedProperties)
      .map(m => m.asString(this))
      .join(EOL);

    const FilteredImplMethods = filterFunctionConflict(
      node.namespace,
      node,
      implementedMethods,
      []
    );
    const ImplementedMethods = (options.promisify ? promisifyFunctions(FilteredImplMethods) : FilteredImplMethods)
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
          type: AnyFunctionType,
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
          type: AnyFunctionType,
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
        namespace,
        node,
        default_signals,
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

    // So we can use GObject.GType
    this.namespace.assertInstalledImport("GObject");

    let [ExtendsInterface, ExtendsGenerics = ""] = Extends.split("<");

    if (ExtendsGenerics.length > 0) {
      ExtendsGenerics = `<${ExtendsGenerics}`;
    }

    return `${hasModule
      ? `export module ${name} {
                ${hasCallbacks ? node.callbacks.map(c => c.asString(this)).join(EOL) : ""}
                ${injectConstructorBucket
        ? `export interface ConstructorProperties${Generics}${Extends ? `${ExtendsInterface}.ConstructorProperties${ExtendsGenerics}` : ""
        } {
                          [key: string]: any;
                          ${ConstructorProps}
                        }`
        : ""
      }
              }`
      : ""
      }
      export ${node.isAbstract ? `abstract ` : ""}class ${name}${Generics}${Extends}${Implements} {${node.indexSignature ? `\n${node.indexSignature}\n` : ''}
      static $gtype: ${namespace.name !== 'GObject' ? 'GObject.' : ''}GType<${name}>;

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
    const { namespace, options } = this;
    const { name, computed } = node;
    const invalid = isInvalid(name);

    const Static = node.isStatic ? "static" : "";
    const ReadOnly = node.writable ? "" : "readonly";

    const Modifier = [Static, ReadOnly].filter(a => a !== "").join(" ");

    const Name = computed ? `[${name}]` : invalid ? `"${name}"` : name;

    let { type } = node;
    if (type instanceof TypeConflict)
      type = new BinaryType(type.unwrap(), AnyType);

    return `${Modifier} ${Name}${node.optional ? "?" : ""}: ${type.resolve(namespace, options).rootPrint(namespace, options)};`;
  }

  generateProperty(node: GirProperty, construct: boolean = false): string {
    const { namespace, options } = this;

    const invalid = isInvalid(node.name);
    const Name = invalid ? `"${node.name}"` : node.name;

    let type = node.type;
    let getterAnnotation = "";
    let setterAnnotation = "";
    let getterSetterAnnotation = "";

    if (type instanceof TypeConflict) {
      switch (type.conflictType) {
        case ConflictType.FUNCTION_NAME_CONFLICT:
        case ConflictType.FIELD_NAME_CONFLICT:
          getterSetterAnnotation = setterAnnotation = `// This accessor conflicts with a property, field, or function name in a parent class or interface.
                  // @ts-expect-error\n`;
        case ConflictType.ACCESSOR_PROPERTY_CONFLICT:
          getterSetterAnnotation = getterAnnotation = `// This accessor conflicts with a property, field, or function name in a parent class or interface.
                  // @ts-expect-error\n`;
          type = type.unwrap();
          break;
        case ConflictType.PROPERTY_ACCESSOR_CONFLICT:
          type = new BinaryType(type.unwrap(), AnyType);
          break;
        case ConflictType.PROPERTY_NAME_CONFLICT:
          getterSetterAnnotation = setterAnnotation = getterAnnotation = `// This accessor conflicts with another accessor's type in a parent class or interface.
                  // @ts-expect-error\n`;
          type = type.unwrap();
          break;
      }

      if (construct && !(type instanceof BinaryType)) {
        // For constructor properties we just convert to any.
        type = new BinaryType(type, AnyType);
      }
    }

    let Type =
      type.resolve(namespace, options).rootPrint(namespace, options) || "any";

    if (construct) {
      return `${Name}: ${Type};`;
    }

    const { readable, writable, constructOnly } = node;

    let hasGetter = readable;
    let hasSetter = writable && !constructOnly;


    if (node.parent instanceof GirInterface) {
      if (!hasSetter && hasGetter) {
        return `readonly ${Name}: ${Type};`;
      } else {
        return `${Name}: ${Type};`;
      }
    }

    if (hasGetter && hasSetter) {
      return `${getterAnnotation} get ${Name}(): ${Type};
              ${setterAnnotation} set ${Name}(val: ${Type});`;
    } else if (hasGetter) {
      return `${getterSetterAnnotation} get ${Name}(): ${Type};`;
    } else {
      return `${getterSetterAnnotation} set ${Name}(val: ${Type});`;
    }
  }

  generateSignal(node: GirSignal, type: GirSignalType = GirSignalType.CONNECT): string {
    switch (type) {
      case GirSignalType.CONNECT:
        return node.asConnect(false).asString(this);
      case GirSignalType.CONNECT_AFTER:
        return node.asConnect(true).asString(this);
      case GirSignalType.EMIT:
        return node.asEmit().asString(this);
    }
  }

  generateEnumMember(node: GirEnumMember): string {
    const invalid = isInvalid(node.name);
    if (
      node.value != null &&
      !Number.isNaN(Number.parseInt(node.value, 10))) {
      return invalid ? `"${node.name}" = ${node.value},` : `${node.name} = ${node.value},`;
    } else {
      return invalid ? `"${node.name}",` : `${node.name},`;
    }
  }

  generateParameter(node: GirFunctionParameter): string {
    const { namespace, options } = this;

    let type: string =
      resolveDirectedType(node.type, node.direction)
        ?.resolve(namespace, options)
        .rootPrint(namespace, options) ??
      node.type.resolve(namespace, options).rootPrint(namespace, options);

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
    const { namespace } = this;
    // Register our identifier with the sanitized identifiers.
    // We avoid doing this in fromXML because other class-level function classes
    // depends on that code.
    sanitizeIdentifierName(namespace.name, node.raw_name);

    const Parameters = this.generateParameters(node.parameters);
    const ReturnType = this.generateReturn(node.return(), node.output_parameters);
    const Generics = this.generateGenerics(node.generics);
    return `export function ${node.name}${Generics}(${Parameters}): ${ReturnType};`;
  }

  generateConstructorFunction(node: GirConstructor): string {
    const { namespace, options } = this;

    const Parameters = this.generateParameters(node.parameters);

    const invalid = isInvalid(node.name);
    const name = invalid ? `["${node.name}"]` : node.name;
    const warning = node.getWarning();
    return `${warning ? `${warning}\n` : ""}static ${name}(${Parameters}): ${node
      .return()
      .resolve(namespace, options)
      .rootPrint(namespace, options)};`;
  }

  generateConstructor(node: GirConstructor): string {
    const Parameters = this.generateParameters(node.parameters);

    return `constructor(${Parameters});`;
  }

  generateClassFunction(node: GirClassFunction): string {
    const invalid = isInvalid(node.name);

    let parameters = node.parameters;
    let output_parameters = node.output_parameters;
    let return_type = node.return();


    const Parameters = this.generateParameters(parameters);
    let ReturnType = this.generateReturn(return_type, output_parameters);

    const Generics = this.generateGenerics(node.generics);

    if (node.shouldAnyify()) {
      return `${invalid ? `["${node.name}"]` : node.name}: ${Generics}((${Parameters}) => ${ReturnType}) | any;`;
    }

    const warning = node.getWarning();
    return `${warning ? `${warning}\n` : ""}${invalid ? `["${node.name}"]` : node.name}${Generics}(${Parameters}): ${ReturnType};`;
  }

  generateStaticClassFunction(node: GirStaticClassFunction): string {
    const Generics = this.generateGenerics(node.generics);

    let ReturnType = this.generateReturn(
      node.return(),
      node.output_parameters
    );

    const warning = node.getWarning();
    return `${warning ? `${warning}\n` : ""}static ${node.name}${Generics}(${this.generateParameters(node.parameters)}): ${ReturnType};`;
  }

  generateAlias(node: GirAlias): string {
    const { namespace, options } = this;
    const Type = node.type.resolve(namespace, options).print(namespace, options);
    const GenericBase = node.generics
      .map(g => {
        if (g.type) {
          return `${g.name} = ${g.type
            .resolve(namespace, options)
            .rootPrint(namespace, options)}`;
        }

        return `${g.name}`;
      })
      .join(", ");
    const Generic = GenericBase ? `<${GenericBase}>` : "";

    return `export type ${node.name}${Generic} = ${Type};`;
  }

  generateVirtualClassFunction(node: GirVirtualClassFunction): string {
    return this.generateClassFunction(node);
  }

  async generateNamespace(node: GirNamespace): Promise<string | null> {
    const { namespace, options } = this;

    if (options.verbose) {
      console.debug(`Resolving the types of ${namespace.name}...`);
    }

    let suffix = '';

    if (!options.noAdvancedVariants && node.name === 'GLib') {
      suffix = `\n${overrideGLib(node)}\n`;
    } else if (node.name === 'GObject') {
      suffix = `\n${overrideGObject(node)}\n`;
    } else if (node.name === 'Gio') {
      suffix = `\n${overrideGio(node)}\n`;
    }

    try {
      const { name } = node;

      const header = `
/**
 * ${name} ${node.version}
 * 
 * Generated from ${node.package_version.join('.')}
 */
`;
      const base = `

`;

      if (options.promisify) {
        promisifyNamespaceFunctions(node);
      }

      const content = Array.from(node.members.values())
        .map(m => {
          return `${(Array.isArray(m) ? m : [m]).map(m => m.emit ? (m as GirBase).asString(this) : '').join(EOL)}`;
        })
        .join(EOL);

      // Resolve imports after we stringify everything else, sometimes we have to ad-hoc add an import.
      const imports = Array.from(node.getImports())
        .map(([i, version]) => `import * as ${i} from "${options.importPrefix}${i.toLowerCase()}${options.versionedImports ? version.toLowerCase().split('.')[0] : ''}";`)
        .join(`${EOL}`);

      const output = [header, imports, base, content, suffix].join(`\n\n`);

      if (options.verbose) {
        console.debug(`Printing ${namespace.name}...`);
      }

      return output;
    } catch (err) {
      console.error(`Failed to generate namespace: ${node.name}`);
      console.error(err);

      return null;
    }
  }

  async stringifyNamespace(node: GirNamespace): Promise<string | null> {
    return this.generateNamespace(node);
  }
}
