import {
  GirBase,
  TypeIdentifier,
  UnknownType,
  VoidType,
  ArrayType,
  ClosureType,
  NullableType,
  TypeExpression,
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

import { GirNamespace } from "./namespace";
import { getType, isInvalid, sanitizeMemberName, sanitizeIdentifierName, resolveDirectedType } from "./util";
import { GirBaseClass } from "./class";
import { GirEnum } from "./enum";
import { GirSignal } from "./signal";
import { FormatGenerator } from "../generators/generator";
import { LoadOptions } from "../cli/commands/generate";

function hasShadow(obj: Function | Method): obj is Function & { $: { shadows: string } } {
  return obj.$["shadows"] != null;
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

  copy({ parameters, return_type }: {
    parent?: undefined,
    parameters?: GirFunctionParameter[],
    return_type?: TypeExpression
  } = {}): GirFunction {
    const fn = new GirFunction({
      raw_name: this.raw_name,
      name: this.name,
      return_type: return_type ?? this.return_type
    });

    fn.output_parameters.push(...this.output_parameters.map(p => p.copy()));
    fn.parameters.push(...(parameters ?? this.parameters).map(p => p.copy()));

    return fn;
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    options: LoadOptions,
    _parent,
    func: Function | Method
  ): GirFunction {
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

        parameters.push(...inputs.map(i => GirFunctionParameter.fromXML(modName, ns, options, null, i)));

        const unwrapped = return_type.unwrap();

        const length_params =
          unwrapped instanceof ArrayType && unwrapped.length != null ? [unwrapped.length] : ([] as number[]);
        const user_data_params = [] as number[];

        parameters = parameters
          .map((p) => {
            const unwrapped_type = p.type.unwrap();

            if (unwrapped_type instanceof ArrayType && unwrapped_type.length != null) {
              length_params.push(unwrapped_type.length);

              return p;
            }

            if (unwrapped_type instanceof ClosureType && unwrapped_type.user_data != null) {
              user_data_params.push(unwrapped_type.user_data);

              return p;
            }

            return p;
          })
          .filter((_, i) => {
            // We remove any length parameters.
            return !length_params.includes(i) && !user_data_params.includes(i);
          })
          .filter(v => !(v.type instanceof TypeIdentifier && v.type.is("GLib", "DestroyNotify")))
          .reverse()
          .reduce(({ allowOptions, params }, p) => {
            const { type, isOptional } = p;

            if (allowOptions) {
              if (type instanceof NullableType) {
                params.push(p.copy({ isOptional: true }));
              } else if (!isOptional) {
                params.push(p);
                return { allowOptions: false, params };
              } else {
                params.push(p);
              }
            } else {
              if (isOptional) {
                params.push(p.copy({ type: new NullableType(type), isOptional: false }));
              } else {
                params.push(p);
              }
            }

            return { allowOptions, params };
          }, {
            allowOptions: true,
            params: [] as GirFunctionParameter[]
          })
          .params
          .reverse()
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

    if (options.loadDocs) {
      fn.doc = func.doc?.[0]?._ ?? "";
    }

    return fn;
  }

  return() {
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
    const { raw_name: name, output_parameters, parameters, return_type, doc } = this;

    return new GirClassFunction({ parent, name, output_parameters, parameters, return_type, doc });
  }

  asVirtualClassFunction(parent: GirBaseClass): GirVirtualClassFunction {
    const { raw_name: name, output_parameters, parameters, return_type, doc } = this;

    return new GirVirtualClassFunction({ parent, name, output_parameters, parameters, return_type, doc });
  }

  asStaticClassFunction(parent: GirBaseClass | GirEnum): GirStaticClassFunction {
    const { raw_name: name, output_parameters, parameters, return_type, doc } = this;

    return new GirStaticClassFunction({ parent, name, output_parameters, parameters, return_type, doc });
  }

  asString<T = string>(generator: FormatGenerator<T>): T {
    return generator.generateFunction(this);
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

  copy(): GirConstructor {
    const constr = new GirConstructor({
      name: this.name,
      return_type: this.return_type
    });

    constr.parameters.push(...this.parameters.map(p => p.copy()));

    return constr;
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    options: LoadOptions,
    parent: GirBaseClass,
    m: ClassConstructor
  ): GirConstructor {
    return GirClassFunction.fromXML(modName, ns, options, parent, m as Function).asConstructor();
  }

  return() {
    return this.return_type;
  }

  asString<T = string>(generator: FormatGenerator<T>): T {
    return generator.generateConstructorFunction(this);
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
    doc,
    isVarArgs = false,
    isOptional = false
  }: {
    name: string;
    parent?: GirClassFunction | GirFunction | GirSignal | GirConstructor;
    type: TypeExpression;
    direction: Direction;
    doc?: string;
    isVarArgs?: boolean;
    isOptional?: boolean;
  }) {
    super(name);

    this.parent = parent;
    this.type = type;
    this.direction = direction;
    this.doc = doc;
    this.isVarArgs = isVarArgs;
    this.isOptional = isOptional;
  }

  copy(
    options: {
      parent?: GirClassFunction | GirFunction | GirSignal | GirConstructor;
      type?: TypeExpression;
      isOptional?: boolean;
    } = {
        parent: this.parent
      }
  ): GirFunctionParameter {
    const { type, parent, direction, isVarArgs, isOptional, name, doc } = this;

    return new GirFunctionParameter({
      parent: options.parent ?? parent,
      name,
      direction,
      isVarArgs,
      isOptional: options.isOptional ?? isOptional,
      type: options.type ?? type,
      doc
    });
  }

  asString<T = string>(generator: FormatGenerator<T>): T {
    return generator.generateParameter(this);
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    options: LoadOptions,
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
      type: isVarArgs ? new ArrayType(type) : type,
      direction,
      parent: parent ?? undefined,
      isOptional,
      name
    });

    if (options.loadDocs) {
      fp.doc = parameter.doc?.[0]?._ ?? "";
    }

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
    parent,
    doc
  }: {
    name: string;
    parameters?: GirFunctionParameter[];
    output_parameters?: GirFunctionParameter[];
    return_type?: TypeExpression;
    parent: GirBaseClass | GirEnum;
    doc?: string;
  }) {
    super(name);

    this.parameters = parameters.map(p => p.copy({ parent: this }));
    this.output_parameters = output_parameters.map(p => p.copy({ parent: this }));
    this.return_type = return_type;
    this.parent = parent;
    this.doc = doc;
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
    interfaceParent,
    parameters,
    returnType
  }: { parent?: GirBaseClass | GirEnum; interfaceParent?: GirBaseClass | GirEnum; parameters?: GirFunctionParameter[]; returnType?: TypeExpression } = {}): GirClassFunction {
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

    fn.parameters.push(...(parameters ?? this.parameters).map(p => p.copy()));
    fn.output_parameters.push(...this.output_parameters.map(o => o.copy()));
    fn.return_type = returnType ?? this.return_type;

    return fn;
  }

  anyify(): this {
    this._anyify = true;

    return this;
  }

  generify(): this {
    this._generify = true;

    return this;
  }

  shouldAnyify() {
    return this._anyify;
  }

  shouldGenerify() {
    return this._generify;
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
    options: LoadOptions,
    parent: GirBaseClass | GirEnum,
    m: Function | Method
  ): GirClassFunction {
    const fn = GirFunction.fromXML(modName, ns, options, null, m);

    return fn.asClassFunction(parent);
  }

  return(): TypeExpression {
    return this.return_type;
  }

  asString<T = string>(generator: FormatGenerator<T>): T {
    return generator.generateClassFunction(this);
  }
}

export class GirVirtualClassFunction extends GirClassFunction {
  constructor({
    name,
    parameters = [],
    output_parameters = [],
    return_type = UnknownType,
    parent,
    doc
  }: {
    name: string;
    parameters: GirFunctionParameter[];
    output_parameters?: GirFunctionParameter[];
    return_type?: TypeExpression;
    parent: GirBaseClass;
    doc?: string;
  }) {
    super({
      parent,
      name: name.startsWith("vfunc_") ? name : `vfunc_${name}`,
      parameters,
      output_parameters,
      return_type,
      doc
    });
  }

  return(): TypeExpression {
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
    options: LoadOptions,
    parent: GirBaseClass,
    m: VirtualMethod
  ): GirVirtualClassFunction {
    const fn = GirFunction.fromXML(modName, ns, options, parent, m);

    return fn.asVirtualClassFunction(parent);
  }
}

export class GirStaticClassFunction extends GirClassFunction {
  asString<T = string>(generator: FormatGenerator<T>): T {
    return generator.generateStaticClassFunction(this);
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    options: LoadOptions,
    parent: GirBaseClass | GirEnum,
    m: Function
  ): GirStaticClassFunction {
    const fn = GirFunction.fromXML(modName, ns, options, parent, m);

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

  copy(): GirCallback {
    const fn = new GirCallback({
      raw_name: this.raw_name,
      name: this.name,
      return_type: this.return_type
    });

    fn.output_parameters.push(...this.output_parameters.map(p => p.copy()));
    fn.parameters.push(...this.parameters.map(p => p.copy()));

    return fn;
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    options: LoadOptions,
    _parent,
    func: Callback
  ): GirCallback {
    const cb = GirFunction.fromXML(modName, ns, options, null, func).asCallback();

    if (func.$["glib:type-name"]) {
      cb.resolve_names.push(func.$["glib:type-name"]);
    }

    if (func.$["c:type"]) {
      cb.resolve_names.push(func.$["c:type"]);
    }

    return cb;
  }

  asString<T = string>(generator: FormatGenerator<T>): T {
    return generator.generateCallback(this);
  }
}
