import { GirNamespace } from "./gir/namespace";
import { GirProperty, GirField } from "./gir/property";
import { FormatGenerator } from "./generators/generator";
import { GenerationOptions, LoadOptions } from "./cli/commands/generate";
import { sanitizeIdentifierName } from "./gir/util";

export abstract class GirBase {
  name: string;
  doc?: string;
  deprecated?: boolean;
  resolve_names: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  abstract copy(options?: { parent?: GirBase }): GirBase;

  static fromXML(
    _modName: string,
    _ns: GirNamespace,
    _options: LoadOptions,
    _parent: GirBase | null,
    _gir: object
  ): GirBase | null {
    throw new Error("GirBase cannot be instantiated");
  }

  abstract asString<T = string>(generator: FormatGenerator<T>): T | null;
}

export abstract class TypeExpression {
  abstract equals(type: TypeExpression): boolean;
  abstract unwrap(): TypeExpression;
  abstract resolve(ns: string, namespace: GirNamespace, options: GenerationOptions): TypeExpression;

  abstract print(ns: string, namespace: GirNamespace, options: GenerationOptions): string;
  rootPrint(ns: string, namespace: GirNamespace, options: GenerationOptions): string {
    return this.print(ns, namespace, options);
  }
}

export class TypeIdentifier extends TypeExpression {
  readonly name: string;
  readonly namespace: string;

  constructor(name: string, namespace: string) {
    super();
    this.name = name;
    this.namespace = namespace;
  }

  equals(type: TypeExpression): boolean {
    return type instanceof TypeIdentifier && type.name === this.name && type.namespace === this.namespace;
  }

  is(namespace: string, name: string) {
    return this.namespace === namespace && this.name === name;
  }

  unwrap() {
    return this;
  }

  private _resolve(modName: string, namespace: GirNamespace, _options: GenerationOptions): TypeIdentifier | null {
    const type = this;
    let name: string = sanitizeIdentifierName(null, type.name);
    let ns_name = type.namespace || modName;

    let current_rns = namespace.getImport(modName);
    let ns = namespace.getImport(ns_name);

    if (ns && (ns.hasSymbol(name) || ns.hasSymbol(`${ns_name}.${name}`))) {
      if (current_rns) {
        current_rns.addImport(ns_name);
      }

      return new TypeIdentifier(name, ns_name);
    } else if (ns) {
      // Handle "class callback" types (they're in a definition-merged module)
      let [cb, corrected_name] = ns.findClassCallback(name);
      let resolved_name: string | null = null;

      if (!cb) {
        resolved_name = ns.resolveSymbolFromTypeName(name);
      }

      let c_resolved_name: string | null = null;

      if (!c_resolved_name) {
        c_resolved_name = ns.resolveSymbolFromTypeName(`${ns_name}${name}`);
      }

      if (!cb && !resolved_name && !c_resolved_name) {
        // Don't warn if a missing import is at fault, this will be dealt with later.
        if (modName === ns_name) {
          console.error(`Attempting to fall back on c:type inference for ${ns_name}.${name}.`);
        }

        [cb, corrected_name] = ns.findClassCallback(`${ns_name}${name}`);

        if (cb) {
          console.error(
            `Falling back on c:type inference for ${ns_name}.${name} and found ${ns_name}.${corrected_name}.`
          );
        }
      }

      if (cb) {
        console.log(`Callback found: ${cb}.${corrected_name}`);
        return new TypeIdentifier(corrected_name, cb);
      } else if (resolved_name) {
        return new TypeIdentifier(resolved_name, ns_name);
      } else if (c_resolved_name) {
        console.error(
          `Fell back on c:type inference for ${ns_name}.${name} and found ${ns_name}.${corrected_name}.`
        );

        return new TypeIdentifier(c_resolved_name, ns_name);
      } else if (modName === ns_name) {
        throw new Error(`Unable to resolve type ${type.name} in same namespace ${ns_name}!`);
      } else {
        if (current_rns) {
          current_rns.addImport(ns_name);
        } else {
          console.log("Failed to add implicit import for current namespace.");
        }

        return null;
      }
    }

    return null;
  }

  resolveIdentifier(modName: string, namespace: GirNamespace, options: GenerationOptions): TypeIdentifier | null {
    return this._resolve(modName, namespace, options);
  }

  resolve(modName: string, namespace: GirNamespace, options: GenerationOptions): TypeExpression {
    const resolved = this._resolve(modName, namespace, options);

    if (!resolved) {
      return AnyType;
    }

    return resolved;
  }

  static new({ name, namespace }: { name: string; namespace: string }) {
    return new TypeIdentifier(name, namespace);
  }

  print(ns: string, _namespace: GirNamespace, _options: GenerationOptions): string {
    if (ns === this.namespace) {
      return `${this.name}`;
    } else {
      return `${this.namespace}.${this.name}`;
    }
  }
}

export class NativeType extends TypeExpression {
  readonly expression: (options?: GenerationOptions) => string;

  constructor(expression: ((options?: GenerationOptions) => string) | string) {
    super();

    this.expression = typeof expression === "string" ? () => expression : expression;
  }

  resolve(_ns: string, _namespace: GirNamespace, _options: GenerationOptions): TypeExpression {
    return this;
  }

  print(_ns: string, _namespace: GirNamespace, options: GenerationOptions) {
    return this.expression(options);
  }

  equals(type: TypeExpression): boolean {
    // TODO This is hacky.
    const options = {
      inferGenerics: false,
      resolveTypeConflicts: true,
      format: "dts"
    } as GenerationOptions;

    return type instanceof NativeType && this.expression(options) === type.expression(options);
  }

  unwrap(): TypeExpression {
    return this;
  }

  static withGenerator(generator: (options?: GenerationOptions) => string): TypeExpression {
    return new NativeType(generator);
  }

  static of(nativeType: string) {
    return new NativeType(nativeType);
  }
}

export class OrType extends TypeExpression {
  readonly types: ReadonlyArray<TypeExpression>;

  constructor(type: TypeExpression, ...types: TypeExpression[]) {
    super();
    this.types = [type, ...types];
  }

  unwrap(): TypeExpression {
    return this;
  }

  resolve(ns: string, namespace: GirNamespace, options: GenerationOptions): TypeExpression {
    const [type, ...types] = this.types;

    return new OrType(type.resolve(ns, namespace, options), ...types.map(t => t.resolve(ns, namespace, options)));
  }

  print(ns: string, namespace: GirNamespace, options: GenerationOptions): string {
    return `(${this.types.map(t => t.print(ns, namespace, options)).join(" | ")})`;
  }

  rootPrint(ns: string, namespace: GirNamespace, options: GenerationOptions): string {
    return `${this.types.map(t => t.print(ns, namespace, options)).join(" | ")}`;
  }

  equals(type: TypeExpression) {
    if (type instanceof OrType) {
      return this.types.every(t => type.types.some(type => type.equals(t)));
    } else {
      return false;
    }
  }
}

export class TupleType extends OrType {
  print(ns: string, namespace: GirNamespace, options: GenerationOptions): string {
    return `[${this.types.map(t => t.print(ns, namespace, options)).join(", ")}]`;
  }

  rootPrint(ns: string, namespace: GirNamespace, options: GenerationOptions): string {
    return this.print(ns, namespace, options);
  }

  resolve(ns: string, namespace: GirNamespace, options: GenerationOptions): TypeExpression {
    const [type, ...types] = this.types;

    return new TupleType(type.resolve(ns, namespace, options), ...types.map(t => t.resolve(ns, namespace, options)));
  }

  equals(type: TypeExpression) {
    if (type instanceof TupleType) {
      return this.types.length === type.types.length && this.types.every((t, i) => type.types[i].equals(t));
    } else {
      return false;
    }
  }
}

export class BinaryType extends OrType {
  constructor(primary: TypeExpression, secondary: TypeExpression) {
    super(primary, secondary);
  }

  unwrap(): TypeExpression {
    return this;
  }

  is(_namespace: string | null, _name: string) {
    return false;
  }

  get a() {
    return this.types[0];
  }

  get b() {
    return this.types[1];
  }
}

export class NullableType extends BinaryType {
  constructor(type: TypeExpression) {
    super(type, NullType);
  }

  unwrap() {
    return this.type;
  }

  get type() {
    return this.a;
  }
}

export class PromiseType extends TypeExpression {
  type: TypeExpression;

  constructor(type: TypeExpression) {
    super();
    this.type = type;
  }

  equals(type: TypeExpression): boolean {
    return type instanceof PromiseType && type.type.equals(this.type);
  }

  unwrap() {
    return this.type;
  }

  resolve(ns: string, namespace: GirNamespace, options: GenerationOptions): TypeExpression {
    return new PromiseType(this.type.resolve(ns, namespace, options));
  }

  print(ns: string, namespace: GirNamespace, options: GenerationOptions): string {
    // TODO: Optimize this check.
    if (!namespace.hasSymbol("Promise")) {
        return `Promise<${this.type.print(ns, namespace, options)}>`;
    }

    return `globalThis.Promise<${this.type.print(ns, namespace, options)}>`;
  }
}

export class AnyifiedType extends BinaryType {
  constructor(type: TypeExpression) {
    super(type, AnyType);
  }

  unwrap() {
    return this.type;
  }

  get type() {
    return this.a;
  }

  equals(_type: TypeExpression) {
    return true;
  }
}

export class ClosureType extends TypeExpression {
  type: TypeExpression;
  user_data: number | null = null;

  constructor(type: TypeExpression) {
    super();
    this.type = type;
  }

  equals(type: TypeExpression): boolean {
    if (type instanceof ClosureType) {
      const closureType = type;
      return this.type.equals(closureType.type);
    }

    return false;
  }

  unwrap(): TypeExpression {
    return this;
  }

  resolve(ns: string, namespace: GirNamespace, options: GenerationOptions) {
    const { user_data, type } = this;

    return ClosureType.new({
      user_data,
      type: type.resolve(ns, namespace, options)
    });
  }

  print(ns: string, namespace: GirNamespace, options: GenerationOptions): string {
    return this.type.print(ns, namespace, options);
  }

  static new({ type, user_data = null }: { type: TypeExpression; user_data?: number | null }) {
    const vt = new ClosureType(type);
    vt.user_data = user_data;
    return vt;
  }
}

export class ArrayType extends TypeExpression {
  type: TypeExpression;
  arrayDepth: number = 1;
  length: number | null = null;

  constructor(type: TypeExpression) {
    super();
    this.type = type;
  }

  unwrap(): TypeExpression {
    return this;
  }

  equals(type: TypeExpression) {
    if (type instanceof ArrayType) {
      const arrayType: ArrayType = type;

      return arrayType.type.equals(this.type) && type.arrayDepth === this.arrayDepth;
    }

    return false;
  }

  resolve(ns: string, namespace: GirNamespace, options: GenerationOptions): TypeExpression {
    const { type, arrayDepth, length } = this;
    return ArrayType.new({
      type: type.resolve(ns, namespace, options),
      arrayDepth,
      length
    });
  }

  print(ns: string, namespace: GirNamespace, options: GenerationOptions): string {
    const depth = this.arrayDepth;
    let typeSuffix: string = "";

    if (depth === 0) {
      typeSuffix = "";
    } else if (depth === 1) {
      typeSuffix = "[]";
    } else {
      typeSuffix = "".padStart(2 * depth, "[]");
    }

    return `${this.type.print(ns, namespace, options)}${typeSuffix}`;
  }

  static new({
    type,
    arrayDepth = 1,
    length = null
  }: {
    type: TypeExpression;
    length?: number | null;
    arrayDepth?: number;
  }) {
    const vt = new ArrayType(type);
    vt.length = length;
    vt.arrayDepth = arrayDepth;
    return vt;
  }
}

export const GTypeType = new TypeIdentifier("GType", "GObject");
export const ThisType = new NativeType("this");
export const ObjectType = new NativeType("object");
export const AnyType = new NativeType("any");
export const NeverType = new NativeType("never");
export const Uint8ArrayType = new NativeType("Uint8Array");
export const BooleanType = new NativeType("boolean");
export const StringType = new NativeType("string");
export const NumberType = new NativeType("number");
export const NullType = new NativeType("null");
export const VoidType = new NativeType("void");
export const UnknownType = new NativeType("unknown");

export type GirClassField = GirProperty | GirField;
