import {
  GirBase,
  TypeIdentifier,
  UnknownType,
  VoidType,
  ArrayType,
  ClosureType,
  NativeType,
  NullableType,
  TypeExpression,
  AnyifiedType,
  ThisType
} from "../gir";
import {
  Function,
  Method,
  Direction,
  ClassMethodParameter,
  Callback,
  VirtualMethod,
  ClassConstructor
} from "../xml";

import { GirNamespace, GirNSRegistry } from "./namespace";
import {
  getType,
  resolveType,
  isInvalid,
  sanitizeMemberName,
  sanitizeIdentifierName,
  resolveDirectedType
} from "./util";
import { GirBaseClass } from "./class";
import { GirEnum } from "./enum";
import { GenericNameGenerator } from "./generics";
import { GirSignal } from "./signal";

function hasShadow(obj: Function | Method): obj is Function & { $: { shadows: string } } {
  return obj.$["shadows"] != null;
}

function generateParameters(parameters: GirFunctionParameter[], name, registry): string {
  return parameters
    .map(p => {
      return p.asString(name, registry);
    })
    .join(", ");
}

function generateReturn(
  return_type: TypeExpression,
  output_parameters: GirFunctionParameter[],
  name: string,
  registry: GirNSRegistry
) {
  const type = return_type.rootResolve(name, registry);

  if (output_parameters.length > 0) {
    const exclude_first = type === "void" || type === "";
    const returns = [
      ...(exclude_first ? [] : [`${type}`]),
      ...output_parameters.map(op => op.type.rootResolve(name, registry))
    ];
    if (returns.length > 1) {
      return `[${returns.join(", ")}]`;
    } else {
      return `${returns[0]}`;
    }
  }

  return type;
}

export class GirFunction extends GirBase {
  readonly parameters: GirFunctionParameter[];
  readonly output_parameters: GirFunctionParameter[];

  protected readonly return_type: TypeExpression;
  readonly raw_name: string;

  constructor({
    name,
    raw_name,
    return_type = UnknownType,
    parameters = [],
    output_parameters = []
  }: {
    name: string;
    raw_name: string;
    return_type?: TypeExpression;
    parameters?: GirFunctionParameter[];
    output_parameters?: GirFunctionParameter[];
  }) {
    super(name);

    this.raw_name = raw_name;
    this.parameters = parameters.map(p => p.copy({ parent: this }));
    this.output_parameters = output_parameters.map(p => p.copy({ parent: this }));
    this.return_type = return_type;
  }

  copy(): any {
    const fn = new GirFunction({
      raw_name: this.raw_name,
      name: this.name,
      return_type: this.return_type
    });

    fn.output_parameters.push(...this.output_parameters.map(p => p.copy()));
    fn.parameters.push(...this.parameters.map(p => p.copy()));
  }

  static fromXML(modName: string, ns: GirNamespace, _parent, func: Function | Method): GirFunction {
    let raw_name = func.$.name;
    let name = sanitizeIdentifierName(null, raw_name);

    if (hasShadow(func)) {
      raw_name = func.$["shadows"];
      name = sanitizeIdentifierName(null, func.$["shadows"]);
    }

    let return_type: TypeExpression;

    if ("return-value" in func && func["return-value"] && func["return-value"].length > 0) {
      const value = func["return-value"][0];

      return_type = getType(modName, ns, value);
    } else {
      return_type = VoidType;
    }

    let parameters: GirFunctionParameter[] = [];

    if (func.parameters) {
      const param = func.parameters[0].parameter;

      if (param) {
        const inputs = param;

        parameters.push(...inputs.map(i => GirFunctionParameter.fromXML(modName, ns, null, i)));

        const unwrapped = return_type.unwrap();

        const length_params =
          unwrapped instanceof ArrayType && unwrapped.length != null ? [unwrapped.length] : ([] as number[]);
        const user_data_params = [] as number[];

        parameters = parameters
          .map((p, i, a) => {
            const unwrapped_type = p.type.unwrap();

            if (unwrapped_type instanceof ArrayType && unwrapped_type.length != null) {
              length_params.push(unwrapped_type.length);

              return p;
            }

            if (unwrapped_type instanceof ClosureType && unwrapped_type.user_data != null) {
              user_data_params.push(unwrapped_type.user_data);

              return p;
            }

            // In TypeScript only the last parameter can be optional.
            if (p.isOptional && i < a.length) {
              const { type, name, direction } = p;

              return new GirFunctionParameter({
                type: new NullableType(type),
                name,
                isOptional: false,
                direction
              });
            }

            return p;
          })
          .filter((_, i) => {
            // We remove any length parameters.
            return !length_params.includes(i) && !user_data_params.includes(i);
          })
          .filter((p): p is GirFunctionParameter => p != null);
      }
    }

    let input_parameters = parameters.filter(
      param => param.direction === Direction.In || param.direction === Direction.Inout
    );
    let output_parameters = parameters.filter(
      param => param.direction && (param.direction === Direction.Out || param.direction === Direction.Inout)
    );

    const fn = new GirFunction({
      parameters: input_parameters,
      output_parameters,
      return_type,
      name,
      raw_name
    });

    return fn;
  }

  return(_namespace: string | null, _registry: GirNSRegistry) {
    return this.return_type;
  }

  asCallback(): GirCallback {
    const { raw_name, name, output_parameters, parameters, return_type } = this;

    return new GirCallback({
      raw_name,
      name,
      output_parameters,
      parameters,
      return_type
    });
  }

  asClassFunction(parent: GirBaseClass | GirEnum): GirClassFunction {
    const { raw_name: name, output_parameters, parameters, return_type } = this;

    return new GirClassFunction({ parent, name, output_parameters, parameters, return_type });
  }

  asVirtualClassFunction(parent: GirBaseClass): GirVirtualClassFunction {
    const { raw_name: name, output_parameters, parameters, return_type } = this;

    return new GirVirtualClassFunction({ parent, name, output_parameters, parameters, return_type });
  }

  asStaticClassFunction(parent: GirBaseClass): GirStaticClassFunction {
    const { raw_name: name, output_parameters, parameters, return_type } = this;

    return new GirStaticClassFunction({ parent, name, output_parameters, parameters, return_type });
  }

  asString(modName: string, registry: GirNSRegistry): string {
    // Register our identifier with the sanitized identifiers.
    // We avoid doing this in fromXML because other class-level function classes
    // depends on that code.
    sanitizeIdentifierName(modName, this.raw_name);

    const Parameters = generateParameters(this.parameters, modName, registry);
    const ReturnType = generateReturn(
      this.return(modName, registry),
      this.output_parameters,
      modName,
      registry
    );
    return `export function ${this.name}(${Parameters}): ${ReturnType};`;
  }
}

export class GirConstructor extends GirBase {
  readonly output_parameters: GirFunctionParameter[] = [];
  readonly parameters: GirFunctionParameter[] = [];
  protected readonly return_type: TypeExpression = UnknownType;

  constructor({
    name,
    parameters = [],
    return_type
  }: {
    name: string;
    parameters?: GirFunctionParameter[];
    return_type: TypeExpression;
  }) {
    super(name);
    this.return_type = return_type;
    this.parameters = parameters.map(p => p.copy({ parent: this }));
  }

  copy(): any {
    const constr = new GirConstructor({
      name: this.name,
      return_type: this.return_type
    });

    constr.parameters.push(...this.parameters.map(p => p.copy()));
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    parent: GirBaseClass,
    m: ClassConstructor
  ): GirConstructor {
    return GirClassFunction.fromXML(modName, ns, parent, m as Function).asConstructor();
  }

  asConstructor(modName: string, registry: GirNSRegistry) {
    const Parameters = generateParameters(this.parameters, modName, registry);

    return `constructor(${Parameters});`;
  }

  return(_namespace: string | null, _registry: GirNSRegistry) {
    return this.return_type;
  }

  asString(modName: string, registry: GirNSRegistry) {
    const Parameters = generateParameters(this.parameters, modName, registry);

    const invalid = isInvalid(this.name);
    const name = invalid ? `["${this.name}"]` : this.name;
    return `static ${name}(${Parameters}): ${this.return(modName, registry).rootResolve(modName, registry)};`;
  }
}

export class GirFunctionParameter extends GirBase {
  readonly type: TypeExpression;
  readonly direction: Direction;
  readonly isVarArgs: boolean = false;
  readonly isOptional: boolean = false;
  parent?: GirClassFunction | GirFunction | GirSignal | GirConstructor;

  constructor({
    name,
    direction,
    type,
    parent,
    isVarArgs = false,
    isOptional = false
  }: {
    name: string;
    parent?: GirClassFunction | GirFunction | GirSignal | GirConstructor;
    type: TypeExpression;
    direction: Direction;
    isVarArgs?: boolean;
    isOptional?: boolean;
  }) {
    super(name);

    this.parent = parent;
    this.type = type;
    this.direction = direction;
    this.isVarArgs = isVarArgs;
    this.isOptional = isOptional;
  }

  copy(
    options: {
      parent?: GirClassFunction | GirFunction | GirSignal | GirConstructor;
      type?: TypeExpression;
    } = {
      parent: this.parent
    }
  ): GirFunctionParameter {
    const { type, parent, direction, isVarArgs, isOptional, name } = this;

    return new GirFunctionParameter({
      parent: options.parent ?? parent,
      name,
      direction,
      isVarArgs,
      isOptional,
      type: options.type ?? type
    });
  }

  asString(modName, registry: GirNSRegistry): string {
    let type: string =
      resolveDirectedType(this.type, this.direction)?.rootResolve(modName, registry) ??
      this.type.rootResolve(modName, registry);

    const unwrapped = this.type.unwrap();

    // TODO I need a better system for this, but handling Gio.AsyncReadyCallback is the most common.
    if (
      this.parent instanceof GirClassFunction &&
      !(this.parent instanceof GirStaticClassFunction) &&
      unwrapped instanceof ClosureType
    ) {
      const internal = unwrapped.type;

      if (internal instanceof TypeIdentifier && internal.is("Gio", "AsyncReadyCallback")) {
        type = unwrapped.rootResolve(modName, registry);

        if (this.type instanceof NullableType) {
          return `${this.name}: ${type}<this> | null`;
        } else {
          return `${this.name}: ${type}<this>`;
        }
      }
    }

    if (this.isVarArgs) {
      return `...args: ${type}[]`;
    }

    if (this.isOptional) {
      return `${this.name}?: ${type}`;
    } else {
      return `${this.name}: ${type}`;
    }
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    parent: GirSignal | GirClassFunction | GirFunction | GirConstructor | null,
    parameter: ClassMethodParameter
  ): GirFunctionParameter {
    let name = sanitizeMemberName(parameter.$.name);

    if (isInvalid(name)) {
      name = `_${name}`;
    }

    let isVarArgs: boolean = false;
    let isOptional: boolean = false;

    let type: TypeExpression;
    let direction: Direction;

    if (
      !parameter.$.direction ||
      parameter.$.direction === Direction.In ||
      parameter.$.direction === Direction.Inout
    ) {
      if (name === "...") {
        isVarArgs = true;
        name = "args";
      }

      // Default to "in" direction
      direction = parameter.$.direction || Direction.In;

      const opt = parameter.$.optional === "1";

      if (opt) {
        isOptional = true;
      }

      type = getType(modName, ns, parameter);
    } else if (parameter.$.direction === Direction.Out || parameter.$.direction === Direction.Inout) {
      direction = parameter.$.direction;
      type = getType(modName, ns, parameter);
    } else {
      throw new Error(`Unknown parameter direction: ${parameter.$.direction}`);
    }

    const fp = new GirFunctionParameter({
      isVarArgs,
      type,
      direction,
      parent: parent ?? undefined,
      isOptional,
      name
    });

    return fp;
  }
}

export class GirClassFunction extends GirBase {
  readonly parameters: GirFunctionParameter[];
  protected return_type: TypeExpression;
  readonly output_parameters: GirFunctionParameter[];
  protected _anyify: boolean = false;
  protected _generify: boolean = false;
  parent: GirBaseClass | GirEnum;
  interfaceParent: GirBaseClass | GirEnum | null = null;

  constructor({
    name,
    parameters = [],
    output_parameters = [],
    return_type = UnknownType,
    parent
  }: {
    name: string;
    parameters?: GirFunctionParameter[];
    output_parameters?: GirFunctionParameter[];
    return_type?: TypeExpression;
    parent: GirBaseClass | GirEnum;
  }) {
    super(name);

    this.parameters = parameters.map(p => p.copy({ parent: this }));
    this.output_parameters = output_parameters.map(p => p.copy({ parent: this }));
    this.return_type = return_type;
    this.parent = parent;
  }

  asConstructor(): GirConstructor {
    const { name, parameters } = this;

    if (this.parent instanceof GirBaseClass) {
      // Always force constructors to have the correct return type.
      return new GirConstructor({ name, parameters, return_type: this.parent.getType() });
    }

    throw new Error(
      `Attempted to convert GirClassFunction into GirConstructor from invalid parent: ${this.parent.name}`
    );
  }

  copy({
    parent = this.parent,
    interfaceParent
  }: { parent?: GirBaseClass | GirEnum; interfaceParent?: GirBaseClass | GirEnum } = {}): GirClassFunction {
    let constr = GirClassFunction;

    if (this instanceof GirVirtualClassFunction) {
      constr = GirVirtualClassFunction;
    } else if (this instanceof GirStaticClassFunction) {
      constr = GirStaticClassFunction;
    }

    const fn = new constr({
      name: this.name,
      parent
    });

    if (interfaceParent) {
      fn.interfaceParent = interfaceParent;
    }

    fn.parameters.push(...this.parameters.map(p => p.copy()));
    fn.output_parameters.push(...this.output_parameters.map(o => o.copy()));
    fn.return_type = this.return_type;

    return fn;
  }

  anyify() {
    this._anyify = true;
  }

  generify() {
    this._generify = true;
  }

  shouldGenerifyReturnType() {
    const unwrapped = this.return_type.unwrap();
    if (unwrapped instanceof TypeIdentifier) {
      return unwrapped.is("GObject", "Object");
    }

    return false;
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    parent: GirBaseClass | GirEnum,
    m: Function | Method
  ): GirClassFunction {
    const fn = GirFunction.fromXML(modName, ns, null, m);

    return fn.asClassFunction(parent);
  }

  return(_namespace: string | null, _registry: GirNSRegistry): TypeExpression {
    return this.return_type;
  }

  asString(modName: string, registry: GirNSRegistry) {
    const invalid = isInvalid(this.name);

    const parent = this.parent;

    let parameters = this.parameters;
    let output_parameters = this.output_parameters;
    let return_type = this.return(modName, registry);

    let shouldGenerify = this.shouldGenerifyReturnType();

    if (parent instanceof GirBaseClass) {
      const resolvedParentType = resolveType(modName, registry, parent.getType());
      const resolvedInterfaceParentTypes = parent.interfaces.map(i => resolveType(modName, registry, i));

      const replaceType = (t: TypeExpression, genericName?: string): TypeExpression | null => {
        const resolvedType = t.unwrap().resolve(modName, registry);
        const interfaceType = this.interfaceParent?.getType().resolve(modName, registry) ?? null;
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

    const Parameters = generateParameters(parameters, modName, registry);
    const ReturnType = generateReturn(return_type, output_parameters, modName, registry);

    const GenericBaseType = shouldGenerify ? (modName === "GObject" ? "Object" : "GObject.Object") : "";

    if (this._anyify) {
      return `${invalid ? `["${this.name}"]` : this.name}: ${
        shouldGenerify ? `<T = ${GenericBaseType}>` : ""
      }((${Parameters}) => ${ReturnType}) | any;`;
    }

    return `${invalid ? `["${this.name}"]` : this.name}${
      shouldGenerify ? `<T = ${GenericBaseType}>` : ""
    }(${Parameters}): ${ReturnType};`;
  }
}

export class GirVirtualClassFunction extends GirClassFunction {
  constructor({
    name,
    parameters = [],
    output_parameters = [],
    return_type = UnknownType,
    parent
  }: {
    name: string;
    parameters: GirFunctionParameter[];
    output_parameters?: GirFunctionParameter[];
    return_type?: TypeExpression;
    parent: GirBaseClass;
  }) {
    super({
      parent,
      name: name.startsWith("vfunc_") ? name : `vfunc_${name}`,
      parameters,
      output_parameters,
      return_type
    });
  }

  return(_namespace: string | null, _registry: GirNSRegistry): TypeExpression {
    if (this.parent instanceof GirBaseClass) {
      // Handles the case where a class implements an interface and thus copies its virtual methods.
      if (
        this.parent.interfaces.some(iface => {
          return this.return_type.equals(iface);
        })
      ) {
        return ThisType;
      }
    }

    if (this.parent && this.return_type.equals(this.parent.getType())) {
      return ThisType;
    }

    return this.return_type;
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    parent: GirBaseClass,
    m: VirtualMethod
  ): GirVirtualClassFunction {
    const fn = GirFunction.fromXML(modName, ns, parent, m);

    return fn.asVirtualClassFunction(parent);
  }
}

export class GirStaticClassFunction extends GirClassFunction {
  asString(modName: string, registry: GirNSRegistry) {
    return `static ${this.name}(${generateParameters(this.parameters, modName, registry)}): ${generateReturn(
      this.return(modName, registry),
      this.output_parameters,
      modName,
      registry
    )};`;
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    parent: GirBaseClass,
    m: Function
  ): GirStaticClassFunction {
    const fn = GirFunction.fromXML(modName, ns, parent, m);

    return fn.asStaticClassFunction(parent);
  }
}

export class GirCallback extends GirFunction {
  shouldGenerifyParameters() {
    const input = this.parameters.filter(p => {
      const type = p.type.unwrap();
      return type instanceof TypeIdentifier && type.is("GObject", "Object");
    });

    return [input.length > 0, input.length, input] as const;
  }

  static fromXML(modName: string, ns: GirNamespace, _parent, func: Callback): GirCallback {
    const cb = GirFunction.fromXML(modName, ns, null, func).asCallback();

    if (func.$["glib:type-name"]) {
      cb.resolve_names.push(func.$["glib:type-name"]);
    }

    if (func.$["c:type"]) {
      cb.resolve_names.push(func.$["c:type"]);
    }

    return cb;
  }

  asTypeString(modName: string, registry: GirNSRegistry, useGenerics = false): [string, string] {
    const Parameters = generateParameters(this.parameters, modName, registry);
    if (useGenerics) {
      const generateName = GenericNameGenerator.new();
      const [, , genericParameters] = this.shouldGenerifyParameters();
      const namedParameters = genericParameters.map(p => [p, generateName()] as const);

      const GObject = modName === "GObject" ? "Object" : "GObject.Object";

      const iterator = namedParameters[Symbol.iterator]();
      let genericParameter = iterator.next();
      const GenerifiedParameters = generateParameters(
        [...this.parameters].map(p => {
          if (!genericParameter.done && p === genericParameter.value[0]) {
            const generified = p.copy({ type: new NativeType(genericParameter.value[1]) });
            genericParameter = iterator.next();
            return generified;
          }

          return p;
        }),
        modName,
        registry
      );

      const names = namedParameters.map(([, name]) => name);

      if (names.length > 0) {
        const GenericDefinitions = names.map(name => `${name} = ${GObject}`).join(", ");
        return [
          `<${GenericDefinitions}>`,
          `(${GenerifiedParameters}) => ${this.return_type.resolve(modName, registry)}`
        ];
      } else {
        return [``, `(${Parameters}) => ${this.return_type.resolve(modName, registry)}`];
      }
    } else {
      return [``, `(${Parameters}) => ${this.return_type.resolve(modName, registry)}`];
    }
  }

  asString(modName: string, registry: GirNSRegistry): string {
    return `export type ${this.name}${this.asTypeString(modName, registry, true).join(" = ")};`;
  }
}
