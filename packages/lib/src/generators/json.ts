import { FormatGenerator } from "./generator";
import { GirNamespace } from "../gir/namespace";

import { GirBaseClass, GirRecord, GirInterface, GirClass } from "../gir/class";
import { GirConst } from "../gir/const";
import { GirEnum, GirError, GirEnumMember } from "../gir/enum";
import { GirProperty, GirField } from "../gir/property";
import { GirSignal, GirSignalType } from "../gir/signal";
import { GirFunction, GirConstructor, GirFunctionParameter, GirCallback } from "../gir/function";
import { GirClassFunction, GirStaticClassFunction, GirVirtualClassFunction } from "../gir/function";
import { sanitizeIdentifierName, isInvalid, resolveDirectedType } from "../gir/util";
import {
  TypeExpression,
  NativeType,
  AnyType,
  VoidType,
  StringType,
  NumberType,
  ArrayType,
  TypeIdentifier,
  OrType,
  TupleType,
  NullableType,
  AnyifiedType,
  ClosureType,
  GirBase,
  AnyFunctionType
} from "../gir";
import { Direction } from "@gi.ts/parser";
import { GirAlias } from "../gir/alias";
import { GenerationOptions } from "../types";

export const enum NodeKind {
  interface = "interface",
  function = "function",
  classFunction = "class_function",
  staticClassFunction = "static_class_function",
  virtualClassFunction = "virtual_class_function",
  prop = "prop",
  field = "field",
  alias = "alias",
  namespace = "namespace",
  callback = "callback",
  constant = "constant",
  record = "record",
  constructor = "constructor",
  parameter = "parameter"
}

type Primitive = string[] | number[] | boolean[] | null | string | number | boolean;
type Json = {
  [key: string]: Primitive | Json | Json[]
};

export const enum TypeKind {
  or = "or",
  tuple = "tuple",
  identifier = "identifier",
  native = "native",
  array = "array",
  nulled = "null",
  closure = "closure"
}

function generateType(type: TypeExpression): Json {
  if (type instanceof TypeIdentifier) {
    return {
      kind: TypeKind.identifier,
      name: type.name,
      namespace: type.namespace
    };
  } else if (type instanceof NativeType) {
    return {
      kind: TypeKind.native,
      type: type.expression()
    };
  } else if (type instanceof ClosureType) {
    return {
      kind: TypeKind.closure,
      type: generateType(type.type),
      user_data: type.user_data
    };
  } else if (type instanceof ArrayType) {
    return {
      kind: TypeKind.array,
      type: generateType(type.type),
      depth: type.arrayDepth
    };
  } else if (type instanceof NullableType) {
    return {
      kind: TypeKind.nulled,
      types: generateType(type.type)
    };
  } else if (type instanceof AnyifiedType) {
    return {
      kind: TypeKind.native,
      type: "any"
    };
  } else if (type instanceof TupleType) {
    return {
      kind: TypeKind.tuple,
      types: type.types.map(t => generateType(t))
    };
  } else if (type instanceof OrType) {
    return {
      kind: TypeKind.or,
      types: type.types.map(t => generateType(t))
    };
  } else {
    return {
      kind: TypeKind.native,
      type: "any"
    };
  }
}

function capitalize(str: string) {
  if (str.length === 0) {
    return '';
  }

  if (str.length === 1) {
    return str[0].toUpperCase();
  }

  return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

export class JsonGenerator extends FormatGenerator<Json> {
  modName: string;
  registry: GirNamespace;
  options: GenerationOptions;

  constructor(modName: string, registry: GirNamespace, options: GenerationOptions) {
    super();
    this.modName = modName;
    this.registry = registry;
    this.options = options;
  }

  /**
   * Intelligently reformats # and () references
   * to handle c-prefixes and namespacing.
   * 
   * @param doc 
   */
  private generateDoc(doc: string): string {
    const { registry } = this;

    function resolveClass(ns: GirNamespace, className: string): readonly [GirBase | null, boolean] {
      let classes = ns.getMembers(className);

      let plural = false;

      if (classes.length === 0 && className.endsWith('Class')) {
        classes = ns.getMembers(className.slice(0, -5));
      }

      if (!classes && className.endsWith('s')) {
        plural = true;
        classes = ns.getMembers(className.slice(0, -1));
      }

      return [classes[0] ?? null, plural] as const;
    }

    function formatReference(identifier: string, member_name: string, punc?: string): string | null {
      const parts = identifier.split(/([A-Z])/).reduce((prev, next) => {
        if (next.toUpperCase() === next) {
          prev.push(`${next}`);
        } else {
          const lastCapital = prev.pop();

          prev.push(`${lastCapital}${next}`);
        }

        return prev;
      }, [] as string[]).filter(p => p != '');

      let [base_part] = parts;

      const [, , namespaces, className] = parts.slice(1).reduce(([underscore, camel, ns, selected], next) => {

        const next_underscore = [underscore, next.toLowerCase()].join('_');

        const namespaces = registry.getImportsForCPrefix(next_underscore);
        const nextCamel = camel + capitalize(next);

        if (namespaces.length > 0) {
          return [next_underscore, nextCamel, namespaces, capitalize(next)] as const;
        }

        return [next_underscore, nextCamel, ns, selected + capitalize(next)] as const;
      }, [base_part.toLowerCase(), capitalize(base_part), registry.getImportsForCPrefix(base_part.toLowerCase()), ""] as const);

      let ns = namespaces.find(n => n.hasSymbol(className));

      if (!ns) {
        ns = namespaces.find(n => {
          const [c] = resolveClass(n, className);

          return c != null;
        });
      }

      if (ns) {
        const is_prop = punc === ":";
        const modified_name = is_prop ? member_name.replace(/[\-]/g, "_") : member_name;

        let [clazz, plural] = resolveClass(ns, className);

        if (clazz instanceof GirBaseClass || clazz instanceof GirEnum) {
          const r = `#${plural ? '{' : ''}${ns.name}.${clazz.name}${punc ? `${punc}${modified_name}` : ''}${plural ? '}s' : ''}`;
          return r;
        }

        return `#${ns.name}${punc ? ` (${punc}${modified_name})` : ''}`;
      } else {
        return null;
      }
    }

    function formatFunctionReference(func: string, upper = false): string | null {
      // namespace_class_do_thing()

      const parts = func.toLowerCase().split("_");

      // ['namespace', 'class', 'do', 'thing']

      const [base_part] = parts;

      // ['namespace']

      const namespaceBase = [capitalize(base_part), registry.getImportsForCPrefix(base_part), 0] as const;

      // ['Namespace', { Namespace }, -1]

      const [, namespaces, i] = parts.slice(1).reduce(([prev, currentNamespaces, selected], next, i) => {
        const namespaces = registry.getImportsForCPrefix([prev, next].join('_'));
        const identifier = prev + capitalize(next);

        // We've found namespace(s) which matches the c_prefix
        if (namespaces.length > 0) {
          return [identifier, namespaces, i + 1] as const;
        }

        return [identifier, currentNamespaces, selected] as const;
      }, namespaceBase);

      // If no namespaces are found for the function's c_prefix, we return the original reference.
      if (namespaces.length === 0) {
        return null;
      }

      // ['class', 'do', 'thing']

      const nameParts = parts.slice(i + 1);

      // 'class_do_thing'

      const functionName = nameParts.join("_");
      const functionNamespace = namespaces.find(n => n.hasSymbol(functionName.toLowerCase()));
      const constNamespace = namespaces.find(n => n.hasSymbol(functionName.toUpperCase()));
      const enumNamespace = namespaces.find(n => n.enum_constants.has(func.toUpperCase()));

      if (functionNamespace) {
        const [member = null] = functionNamespace.getMembers(functionName.toLowerCase());

        if (member instanceof GirFunction) {
          return `${functionNamespace.name}.${member.name}`;
        }

        return null;
      } else if (constNamespace) {
        const [member = null] = constNamespace.getMembers(functionName.toUpperCase());

        if (member instanceof GirConst) {
          return `${constNamespace.name}.${member.name}`;
        }

        return null;
      } else if (enumNamespace) {
        const constantInfo = enumNamespace.enum_constants.get(func.toUpperCase());

        if (constantInfo) {
          const [enumName, memberName] = constantInfo;

          const [klass = null] = enumNamespace.getMembers(enumName);

          if (klass instanceof GirEnum) {
            return `${enumNamespace.name}.${klass.name}.${memberName.toUpperCase()}`;
          }
        }

        return null;
      } else {
        // ['class', 'do', 'thing']

        const { selectedClassName, resolvedNamespace, selectedIndex } = parts.slice(i + 1).reduce(({
          className, selectedClassName, resolvedNamespace, selectedIndex
        }, next, i) => {
          // Class
          const identifier = `${className}${capitalize(next)}`;

          const withSymbol = namespaces.find(n => n.hasSymbol(identifier));

          if (withSymbol) {
            // { className: Class, resolvedNamespace: {Namespace}, selectedIndex: 0 }
            return { className: identifier, selectedClassName: identifier, resolvedNamespace: withSymbol, selectedIndex: i } as const;
          }

          return { className: identifier, selectedClassName, resolvedNamespace, selectedIndex } as const;
        }, {
          className: "" as string,
          selectedClassName: "" as string,
          resolvedNamespace: null as GirNamespace | null,
          selectedIndex: -1
        });

        if (resolvedNamespace && selectedIndex >= 0) {
          const nextIndex = i + selectedIndex + 1 /* (slice omits first index) */ + 1 /* (the next index) */;
          const functionName = parts.slice(nextIndex).join("_");

          let [klass] = resolveClass(resolvedNamespace, selectedClassName);

          if (klass instanceof GirBaseClass || klass instanceof GirEnum) {
            return `${resolvedNamespace.name}.${klass.name}.${upper ? functionName.toUpperCase() : functionName}`;
          }

          return `${resolvedNamespace.name}.${selectedClassName}.${upper ? functionName.toUpperCase() : functionName}`;
        }
      }

      return null;
    }

    return doc
      .replace(/[#]{0,1}([A-Z][A-z]+)\.([a-z_]+)\(\)/g, (original, identifier: string, member_name: string) => {
        const resolved = formatReference(identifier, member_name, '.');
        return resolved != null ? `${resolved}()` : original;
      })
      .replace(/#([A-Z][A-z]+)(([:]{1,2})([a-z\-]+)){0,1}/g,
        (original, identifier: string, _: string, punc: string, member_name: string) => {
          const resolved = formatReference(identifier, member_name, punc);
          return resolved != null ? resolved : original;
        })
      .replace(/([A-Z][A-z]+)(([:]{1,2})([a-z\-]+))/g,
        (original, identifier: string, _: string, punc: string, member_name: string) => {
          const resolved = formatReference(identifier, member_name, punc);
          return resolved != null ? resolved : original;
        })
      .replace(/(\s)([a-z_]+)\(\)/g, (original: string, w: string, func: string) => {
        const resolved = formatFunctionReference(func)
        return resolved != null ? `${w}${resolved}()` : original;
      })
      .replace(/%([A-Z_]+)/g, (original: string, identifier: string) => {
        const resolved = formatFunctionReference(identifier.toLowerCase(), true);
        return resolved != null ? `%${resolved}` : original;
      });
  }

  private generateParameters(parameters: GirFunctionParameter[]): Json[] {
    const { modName, registry, options } = this;

    return parameters.map(p => ({
      direction: p.direction,
      optional: p.isOptional,
      varargs: p.isVarArgs,
      name: p.name,
      resoleNames: p.resolve_names,
      type: generateType(p.type.resolve(modName, registry, options)),
      ...(this.options.withDocs ? { doc: this.generateDoc(p.doc ?? "") } : {})
    }));
  }

  generateCallbackType(node: GirCallback): [Json, Json] {
    return [
      {},
      {}
    ];
  }

  generateCallback(node: GirCallback): Json {
    const { modName, registry, options } = this;

    const parameters = this.generateParameters(node.parameters);

    return {
      kind: NodeKind.callback,
      name: node.name,
      type: this.generateCallbackType(node),
      parameters,
      returnType: generateType(node
        .return()
        .resolve(modName, registry, options)
      )
    };
  }

  generateReturn(return_type: TypeExpression, output_parameters: GirFunctionParameter[]) {
    const { modName: name, registry, options } = this;
    const type = return_type.resolve(name, registry, options);

    if (output_parameters.length > 0) {
      const exclude_first = type.equals(VoidType);
      const returns = [
        ...(exclude_first ? [] : [type]),
        ...output_parameters.map(op => op.type.resolve(name, registry, options))
      ];

      return returns.map(r => generateType(r));
    }

    return generateType(type);
  }

  generateEnum(node: GirEnum): Json | null {
    try {
      // TODO Pull invalid enum detection out of JSON
      const isInvalidEnum = Array.from(node.members.keys()).some(
        name => !Number.isNaN(Number.parseFloat(name)) || name === "NaN" || name === "Infinity"
      );
      if (isInvalidEnum) {
        return this.generateRecord(node.asClass());
      }

      return {
        name: node.name,
        members: Array.from(node.members.values()).map(member => member.asString(this)),
        ...(this.options.withDocs ? { doc: this.generateDoc(node.doc ?? "") } : {})
      };
    } catch (e) {
      console.error(`Failed to generate enum: ${node.name}.`);
      console.error(e);
      return null;
    }
  }

  generateError(node: GirError): Json {
    const { registry } = this;
    const clazz = node.asClass();

    clazz.members = [];
    clazz.members.push(...Array.from(node.functions.values()));

    const GLib = registry.getImport("GLib");

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

  generateConst(node: GirConst): Json {
    const { modName, registry, options } = this;

    return {
      kind: NodeKind.constant,
      name: node.name,
      type: generateType(node.type.resolve(modName, registry, options)),
      ...(this.options.withDocs ? { doc: this.generateDoc(node.doc ?? "") } : {})
    };
  }

  private implements(node: GirBaseClass): TypeIdentifier[] {
    const { modName, registry, options } = this;

    if (node.interfaces.length > 0) {
      return node.interfaces
        .map(i => i.resolveIdentifier(modName, registry, options))
        .filter((i): i is TypeIdentifier => i != null);
    }

    return [];
  }

  private extends(node: GirBaseClass): TypeIdentifier | null {
    const { modName, registry: ns, options } = this;

    if (node.parent) {
      return node.parent.resolveIdentifier(modName, ns, options);
    }

    return null;
  }

  generateInterface(node: GirInterface): Json {
    const { modName, registry } = this;
    // If an interface does not list a prerequisite type, we fill it with GObject.Object
    if (node.parent == null) {
      const gobject = registry.getImport("GObject");

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

    const Extends = this.extends(node);

    const name = node.name;

    const staticFunctions = node.members
      .filter(f => f instanceof GirStaticClassFunction)
      .map(f => f.asString(this));
    const functions = node.members
      .filter(f => !(f instanceof GirStaticClassFunction))
      .map(f => f.asString(this));

    return {
      type: NodeKind.interface,
      name,
      extends: Extends ? generateType(Extends) : null,
      staticFunctions,
      functions,
      ...(this.options.withDocs ? { doc: this.generateDoc(node.doc ?? "") } : {})
    };
  }

  generateRecord(node: GirRecord): Json {
    const { name } = node;

    const Extends = this.extends(node);
    const Implements = this.implements(node);

    const Properties = node.props.map(v => v && v.asString(this));

    const Fields = node.fields.map(v => v && v.asString(this));

    const Constructors = node.constructors.map(v => v && v.asString(this));

    const Members = node.members.map(v => v && v.asString(this));

    const Callbacks = node.callbacks.map(c => c && c.asString(this));

    return {
      type: NodeKind.record,
      name,
      extends: Extends ? generateType(Extends) : null,
      implements: Implements.map(i => generateType(i)),
      props: Properties,
      fields: Fields,
      constructors: Constructors,
      members: Members,
      callbacks: Callbacks,
      ...(this.options.withDocs ? { doc: this.generateDoc(node.doc ?? "") } : {})
    };
  }

  generateClass(node: GirClass): Json {
    const Extends = this.extends(node);
    const Implements = this.implements(node);

    let MainConstructor: Json | null = null;

    const ConstructorProps = node.props
      .filter(prop => !prop.isStatic)
      .map(v => this.generateProperty(v, true));

    if (node.mainConstructor) {
      MainConstructor = this.generateConstructor(node.mainConstructor);
    } else {
      MainConstructor = {
        kind: NodeKind.constructor,
        parameters: ConstructorProps
      };
    }

    const Properties = node.props.map(v => v.asString(this));

    const Fields = node.fields.map(v => v.asString(this));

    const Constructors = node.constructors.map(v => v.asString(this));

    const Members = node.members.map(v => v.asString(this));

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

      hasConnect = !default_signals.some(s => s.name === "connect");
      hasConnectAfter = !default_signals.some(s => s.name === "connect_after");
      hasEmit = !default_signals.some(s => s.name === "emit");
    }

    const SignalsList = [
      ...default_signals.map(s => s.asString(this)),
      ...node.signals
        .map(s => {
          const methods = [] as Json[];

          if (!hasConnect) methods.push(s.asString(this, GirSignalType.CONNECT));
          if (!hasConnectAfter) methods.push(s.asString(this, GirSignalType.CONNECT_AFTER));
          if (!hasEmit) methods.push(s.asString(this, GirSignalType.EMIT));

          return methods;
        })
        .flat()
    ];

    const Signals = SignalsList;

    return {
      abstract: node.isAbstract,
      name: node.name,
      signals: Signals,
      extends: Extends ? generateType(Extends) : null,
      implements: Implements.map(i => generateType(i)),
      props: Properties,
      fields: Fields,
      constructors: Constructors,
      members: Members,
      ...(this.options.withDocs ? { doc: this.generateDoc(node.doc ?? "") } : {})
    };
  }

  generateField(node: GirField): Json {
    const { modName: namespace, registry, options } = this;
    const { name, computed } = node;
    const invalid = isInvalid(name);

    const Static = node.isStatic;
    const ReadOnly = node.writable;

    return {
      readonly: ReadOnly,
      static: Static,
      computed,
      type: generateType(node.type.resolve(namespace, registry, options)),
      name: invalid ? `"${name}"` : name,
      ...(this.options.withDocs ? { doc: this.generateDoc(node.doc ?? "") } : {})
    };
  }

  generateProperty(node: GirProperty, construct: boolean = false): Json {
    const { modName: namespace, registry, options } = this;

    const invalid = isInvalid(node.name);
    const Static = node.isStatic;
    const ReadOnly = node.writable || construct;

    const Name = invalid ? `"${node.name}"` : node.name;

    let Type = generateType(node.type.resolve(namespace, registry, options));
    return {
      readonly: ReadOnly,
      static: Static,
      type: Type,
      name: Name,
      ...(this.options.withDocs ? { doc: this.generateDoc(node.doc ?? "") } : {})
    };
  }

  generateSignal(node: GirSignal, type: GirSignalType = GirSignalType.CONNECT): Json {
    switch (type) {
      case GirSignalType.CONNECT:
        return node.asConnect(this, false).asString(this);
      case GirSignalType.CONNECT_AFTER:
        return node.asConnect(this, true).asString(this);
      case GirSignalType.EMIT:
        return node.asEmit().asString(this);
    }
  }

  generateEnumMember(node: GirEnumMember): Json {
    const invalid = isInvalid(node.name);
    if (
      node.value != null &&
      !Number.isNaN(Number.parseInt(node.value, 10)) &&
      Number.isNaN(Number.parseInt(node.name, 10)) &&
      node.name !== "NaN"
    ) {
      return invalid
        ? { name: `"${node.name}"`, value: `${node.value}` }
        : { name: `${node.name}`, value: `${node.value}` };
    } else {
      return invalid ? { name: `"${node.name}"`, value: null } : { name: `${node.name}`, value: null };
    }
  }

  generateParameter(node: GirFunctionParameter): Json {
    const { modName, registry, options } = this;

    let type: Json = generateType(
      resolveDirectedType(node.type, node.direction)?.resolve(modName, registry, options) ??
      node.type.resolve(modName, registry, options)
    );

    return {
      kind: NodeKind.parameter,
      name: node.name,
      type,
      varargs: node.isVarArgs,
      optional: node.isOptional,
      ...(this.options.withDocs ? { doc: this.generateDoc(node.doc ?? "") } : {})
    };
  }

  generateFunction(node: GirFunction): Json {
    const { modName } = this;
    // Register our identifier with the sanitized identifiers.
    // We avoid doing this in fromXML because other class-level function classes
    // depends on that code.
    sanitizeIdentifierName(modName, node.raw_name);

    const Parameters = this.generateParameters(node.parameters);
    const ReturnType = this.generateReturn(node.return(), node.output_parameters);

    return {
      kind: NodeKind.function,
      name: node.name,
      parameters: Parameters,
      returnType: ReturnType,
      ...(this.options.withDocs ? { doc: this.generateDoc(node.doc ?? "") } : {})
    };
  }

  generateConstructorFunction(node: GirConstructor): Json {
    const { modName, registry, options } = this;

    const Parameters = this.generateParameters(node.parameters);

    const invalid = isInvalid(node.name);
    const name = invalid ? `["${node.name}"]` : node.name;

    return {
      kind: NodeKind.classFunction,
      static: true,
      name,
      parameters: Parameters,
      returnType: generateType(node.return().resolve(modName, registry, options)),
      ...(this.options.withDocs ? { doc: this.generateDoc(node.doc ?? "") } : {})
    };
  }

  generateConstructor(node: GirConstructor): Json {
    return {
      kind: NodeKind.constructor,
      parameters: this.generateParameters(node.parameters),
      ...(this.options.withDocs ? { doc: this.generateDoc(node.doc ?? "") } : {})
    };
  }

  generateClassFunction(node: GirClassFunction): Json {

    let parameters = node.parameters.map(p => this.generateParameter(p));
    let output_parameters = node.output_parameters;
    let return_type = node.return();

    const ReturnType = this.generateReturn(return_type, output_parameters);

    return {
      kind: NodeKind.classFunction,
      name: node.name,
      parameters,
      returnType: ReturnType,
      ...(this.options.withDocs ? { doc: this.generateDoc(node.doc ?? "") } : {})
    };
  }

  generateStaticClassFunction(node: GirStaticClassFunction): Json {

    let parameters = node.parameters.map(p => this.generateParameter(p));
    let output_parameters = node.output_parameters;
    let return_type = node.return();

    const ReturnType = this.generateReturn(return_type, output_parameters);

    return {
      kind: NodeKind.staticClassFunction,
      name: node.name,
      parameters,
      returnType: ReturnType,
      ...(this.options.withDocs ? { doc: this.generateDoc(node.doc ?? "") } : {})
    };
  }

  generateAlias(node: GirAlias): Json {
    const { modName, registry, options } = this;
    const type = node.type.resolve(modName, registry, options);

    const { name } = node;

    return {
      kind: NodeKind.alias,
      name,
      type: generateType(type.resolve(modName, registry, options))
    };
  }

  generateVirtualClassFunction(node: GirVirtualClassFunction): Json {
    return node.asString(this);
  }

  generateNamespace(node: GirNamespace): string | null {
    const { modName, options } = this;

    if (options.verbose) {
      console.debug(`Resolving the types of ${modName}...`);
    }

    try {
      const { name, version } = node;

      const members = Array.from(node.members.values()).flatMap(m => m);

      members.filter((m): m is GirEnum => m instanceof GirEnum).forEach(m => {
        m.members.forEach(() => {
        });
      });

      const classes = members.filter((m): m is GirClass => m instanceof GirClass).map(m => m.asString(this));
      const interfaces = members
        .filter((m): m is GirInterface => m instanceof GirInterface)
        .map(m => m.asString(this));
      const records = members
        .filter((m): m is GirRecord => m instanceof GirRecord)
        .map(m => m.asString(this));
      const constants = members
        .filter((m): m is GirConst => m instanceof GirConst)
        .map(m => m.asString(this));
      const functions = members
        .filter((m): m is GirConst => m instanceof GirFunction)
        .map(m => m.asString(this));
      const enums = members.filter((m): m is GirEnum => m instanceof GirEnum).map(m => m.asString(this));
      const alias = members.filter((m): m is GirAlias => m instanceof GirAlias).map(m => m.asString(this));

      // Resolve imports after we stringify everything else, sometimes we have to ad-hoc add an import.
      const imports = Array.from(node.imports.entries()).filter(([i]) => node.getImport(i) != null);

      const raw_output = {
        kind: NodeKind.namespace,
        name,
        version,
        imports: Object.fromEntries(imports),
        classes,
        interfaces,
        records,
        constants,
        functions,
        enums,
        alias
      };

      if (options.verbose) {
        console.debug(`Printing ${modName}...`);
      }

      return JSON.stringify(raw_output, null, 4);
    } catch (err) {
      console.error(`Failed to generate namespace: ${node.name}`);
      console.error(err);
      return null;
    }
  }
}
