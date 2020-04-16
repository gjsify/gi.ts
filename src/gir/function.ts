import { GirBase, Type, UnknownType, VoidType, VariableType, ArrayVariableType } from "../gir";
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
  resolvePrimitiveType
} from "./util";
import { GirClass, GirBaseClass } from "./class";
import { GirEnum } from "./enum";

function hasShadow(obj: Function | Method): obj is Function {
  return obj.$["shadows"] != null;
}

function generateParameters(parameters: GirFunctionParameter[], name, registry): string {
  return parameters.map(p => p.asString(name, registry)).join(", ");
}

function generateReturn(
  return_type: Type,
  output_parameters: GirFunctionParameter[],
  name: string,
  registry: GirNSRegistry
) {
  const type = resolveType(name, registry, return_type);
  if (output_parameters.length > 0) {
    const exclude_first = type === "void" || type === "";
    const returns = [
      ...(exclude_first ? [] : [`${type}`]),
      output_parameters.map(op => resolveType(name, registry, op.type))
    ];
    return `[${returns.join(", ")}]`;
  }

  return type;
}

export class GirFunction extends GirBase {
  readonly parameters: GirFunctionParameter[];
  readonly output_parameters: GirFunctionParameter[];

  protected readonly return_type: Type;
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
    return_type?: Type;
    parameters?: GirFunctionParameter[];
    output_parameters?: GirFunctionParameter[];
  }) {
    super(name);

    this.raw_name = raw_name;
    this.parameters = parameters;
    this.output_parameters = output_parameters;
    this.return_type = return_type;
  }

  copy(): any {
    const fn = new GirFunction({
      raw_name: this.raw_name,
      name: this.name,
      return_type: this.return_type.copy()
    });

    fn.output_parameters.push(...this.output_parameters.map(p => p.copy()));
    fn.parameters.push(...this.parameters.map(p => p.copy()));
  }

  static fromXML(modName: string, ns: GirNamespace, _parent, func: Function | Method): GirFunction {
    let raw_name = func.$.name;
    let name = sanitizeIdentifierName(null, raw_name);

    if (hasShadow(func) && func.$["shadows"]) {
      name = sanitizeIdentifierName(null, func.$["shadows"]);
    }

    let parameters: GirFunctionParameter[] = [];
    let output_parameters: GirFunctionParameter[] = [];
    if (func.parameters) {
      const param = func.parameters[0].parameter;

      if (param) {
        const inputs = param
          .filter(p => p.$.name !== "user_data")
          .filter(
            parameter =>
              !parameter.$.direction ||
              parameter.$.direction === Direction.In ||
              parameter.$.direction === Direction.Inout
          );

        parameters.push(...inputs.map(i => GirFunctionParameter.fromXML(modName, ns, null, i)));

        parameters = parameters
          .map((p, i, a) => {
            // We remove any suspected length parameters.
            if (i > 0) {
              const type = parameters[i - 1].type;
              if (
                type &&
                type instanceof ArrayVariableType &&
                resolvePrimitiveType(p.type.name) === "number"
              ) {
                return null;
              }
            }

            // In TypeScript only the last parameter can be optional.
            if (p.isOptional && i < a.length) {
              const { type, name, direction } = p;

              // TODO
              p.type.nullable = true;

              return new GirFunctionParameter({
                type,
                name,
                isOptional: false,
                direction
              });
            }

            return p;
          })
          .filter((p): p is GirFunctionParameter => p != null);

        const outputs = param.filter(
          parameter =>
            parameter.$.direction && (parameter.$.direction === "out" || parameter.$.direction === "inout")
        );

        output_parameters.push(...outputs.map(i => GirFunctionParameter.fromXML(modName, ns, null, i)));
      }
    }

    let return_type;

    if ("return-value" in func && func["return-value"] && func["return-value"].length > 0) {
      return_type = getType(modName, ns, func["return-value"][0]);
    } else {
      return_type = VoidType;
    }

    const fn = new GirFunction({
      parameters,
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

  asConstructor(): GirConstructor {
    const { raw_name: name, parameters, return_type } = this;

    return new GirConstructor({ name, parameters, return_type });
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
  protected readonly return_type: Type = UnknownType;

  constructor({
    name,
    parameters = [],
    return_type
  }: {
    name: string;
    parameters?: GirFunctionParameter[];
    return_type: Type;
  }) {
    super(name);
    this.return_type = return_type;
    this.parameters = parameters;
  }

  copy(): any {
    const constr = new GirConstructor({
      name: this.name,
      return_type: this.return_type.copy()
    });

    constr.parameters.push(...this.parameters.map(p => p.copy()));
  }

  static fromXML(modName: string, ns: GirNamespace, parent: GirBaseClass, m: ClassConstructor): GirConstructor {
    return GirFunction.fromXML(modName, ns, parent, m as Function).asConstructor();
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
    return `static ${name}(${Parameters}): ${resolveType(
      modName,
      registry,
      this.return(modName, registry)
    )};`;
  }
}

export class GirFunctionParameter extends GirBase {
  readonly type: VariableType;
  readonly direction: Direction;
  readonly isVarArgs: boolean = false;
  readonly isOptional: boolean = false;

  constructor({
    name,
    direction,
    type,
    isVarArgs = false,
    isOptional = false
  }: {
    name: string;
    type: VariableType;
    direction: Direction;
    isVarArgs?: boolean;
    isOptional?: boolean;
  }) {
    super(name);

    this.type = type;
    this.direction = direction;
    this.isVarArgs = isVarArgs;
    this.isOptional = isOptional;
  }

  copy(): GirFunctionParameter {
    const { type, direction, isVarArgs, isOptional, name } = this;

    return new GirFunctionParameter({
      name,
      direction,
      isVarArgs,
      isOptional,
      type: type.copy()
    });
  }

  asString(modName, registry: GirNSRegistry): string {
    const type = resolveType(modName, registry, this.type);
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
    _parent,
    parameter: ClassMethodParameter
  ): GirFunctionParameter {
    let name = sanitizeMemberName(parameter.$.name);

    if (isInvalid(name)) {
      name = `_${name}`;
    }

    let isVarArgs, type, direction, isOptional;
    if (!parameter.$.direction || parameter.$.direction === "in" || parameter.$.direction === "inout") {
      if (name === "...") {
        isVarArgs = true;
        name = "args";
      }

      direction = parameter.$.direction;

      const opt = parameter.$.optional === "1";

      if (opt) {
        isOptional = true;
      }

      type = getType(modName, ns, parameter);
    } else if (parameter.$.direction === "out" || parameter.$.direction === "inout") {
      direction = parameter.$.direction;
      type = getType(modName, ns, parameter);
    } else if (parameter.$.direction) {
      console.log("Unknown parameter direction: ", parameter.$.direction);
    }

    const fp = new GirFunctionParameter({
      isVarArgs,
      type,
      direction,
      isOptional,
      name
    });

    return fp;
  }
}

export class GirClassFunction extends GirBase {
  readonly parameters: GirFunctionParameter[];
  protected return_type: Type;
  readonly output_parameters: GirFunctionParameter[];
  protected _anyify: boolean = false;
  parent: GirBaseClass | GirEnum;

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
    return_type?: Type;
    parent: GirBaseClass | GirEnum;
  }) {
    super(name);

    this.parameters = parameters;
    this.output_parameters = output_parameters;
    this.return_type = return_type;
    this.parent = parent;
  }

  copy({ parent = this.parent }: { parent?: GirBaseClass | GirEnum } = {}): GirClassFunction {
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

    fn.parameters.push(...this.parameters.map(p => p.copy()));
    fn.output_parameters.push(...this.output_parameters.map(o => o.copy()));
    fn.return_type = this.return_type.copy();

    return fn;
  }

  anyify() {
    this._anyify = true;
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

  return(_namespace: string | null, _registry: GirNSRegistry): Type {
    return this.return_type;
  }

  asString(modName: string, registry: GirNSRegistry) {
    const invalid = isInvalid(this.name);

    const Parameters = generateParameters(this.parameters, modName, registry);
    const ReturnType = generateReturn(
      this.return(modName, registry),
      this.output_parameters,
      modName,
      registry
    );

    if (this._anyify) {
      return `${invalid ? `["${this.name}"]` : this.name}: ((${Parameters}) => ${ReturnType}) | any;`;
    }

    return `${invalid ? `["${this.name}"]` : this.name}(${Parameters}): ${ReturnType};`;
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
    return_type?: Type;
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

  return(namespace: string | null, _registry: GirNSRegistry): Type {
    if (this.parent instanceof GirBaseClass) {
      // Handles the case where a class implements an interface and thus copies its virtual methods.
      if (
        this.parent.interfaces.some(iface => {
          return (
            this.return_type.name === iface.name &&
            ((this.return_type.namespace === namespace && iface.namespace == null) ||
              this.return_type.namespace === iface.namespace)
          );
        })
      ) {
        return new VariableType("this");
      }
    }

    if (
      this.parent &&
      this.return_type.name === this.parent.name &&
      this.return_type.namespace === this.parent.ns
    ) {
      return new VariableType("this");
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

  static fromXML(modName: string, ns: GirNamespace, parent: GirBaseClass, m: Function): GirStaticClassFunction {
    const fn = GirFunction.fromXML(modName, ns, parent, m);

    return fn.asStaticClassFunction(parent);
  }
}

export class GirCallback extends GirFunction {
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

  asString(modName: string, registry: GirNSRegistry): string {
    const Parameters = generateParameters(this.parameters, modName, registry);

    return `export type ${this.name} = (${Parameters}) => ${resolveType(
      modName,
      registry,
      this.return_type
    )};`;
  }
}
