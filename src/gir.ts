import { GirNamespace, GirNSRegistry } from "./gir/namespace";
import { GirProperty, GirField } from "./gir/property";
import { resolveType } from "./gir/util";

export abstract class GirBase {
  name: string;
  resolve_names: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  abstract copy(options?: { parent?: GirBase }): GirBase;

  static fromXML(_modName: string, _ns: GirNamespace, _parent: GirBase | null, _gir: object): GirBase | null {
    throw new Error("GirBase cannot be instantiated");
  }

  abstract asString(modName: string, registry: GirNSRegistry): string | null;
}

export abstract class TypeExpression {
  abstract equals(type: TypeExpression): boolean;
  abstract unwrap(): TypeExpression;
  abstract resolve(ns: string, rns: GirNSRegistry): string;

  rootResolve(ns: string, rns: GirNSRegistry): string {
    return this.resolve(ns, rns);
  }
}

export class TypeIdentifier extends TypeExpression {
  readonly name: string;
  readonly namespace: string | null;

  constructor(name: string, namespace: string | null = null) {
    super();
    this.name = name;
    this.namespace = namespace;
  }

  equals(type: TypeExpression): boolean {
    return type instanceof TypeIdentifier && type.name === this.name && type.namespace === this.namespace;
  }

  is(namespace: string | null, name: string) {
    return this.namespace === namespace && this.name === name;
  }

  unwrap() {
    return this;
  }

  resolve(ns: string, rns: GirNSRegistry): string {
    return resolveType(ns, rns, this);
  }

  static new({ name, namespace }: { name: string; namespace: string | null }) {
    return new TypeIdentifier(name, namespace);
  }

  static nullable(name: string, namespace: string | null = null): NullableType {
    const vt = new NullableType(new TypeIdentifier(name, namespace));

    return vt;
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

  resolve(ns: string, rns: GirNSRegistry) {
    return `(${this.types.map(t => t.resolve(ns, rns)).join(" | ")})`;
  }

  rootResolve(ns: string, rns: GirNSRegistry) {
    return `${this.types.map(t => t.resolve(ns, rns)).join(" | ")}`;
  }

  equals(type: TypeExpression) {
    if (type instanceof OrType) {
      return this.types.every(t => type.types.some(type => type.equals(t)));
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

export class NativeType extends TypeExpression {
  readonly expression: string;

  constructor(expression: string) {
    super();
    this.expression = expression;
  }

  resolve(): string {
    return this.expression;
  }

  equals(type: TypeExpression): boolean {
    return type instanceof NativeType && this.expression === type.expression;
  }

  unwrap(): TypeExpression {
    return this;
  }

  static of(nativeType: string) {
    return new NativeType(nativeType);
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

  resolve(ns: string, rns: GirNSRegistry): string {
    return this.type.resolve(ns, rns);
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
      const arrayType = type;

      return arrayType.type.equals(this.type) && type.arrayDepth === this.arrayDepth;
    }

    return false;
  }

  resolve(ns: string, rns: GirNSRegistry) {
    const depth = this.arrayDepth;
    let typeSuffix: string = "";

    if (depth === 0) {
      typeSuffix = "";
    } else if (depth === 1) {
      typeSuffix = "[]";
    } else {
      typeSuffix = "".padStart(2 * depth, "[]");
    }

    return `${this.type.resolve(ns, rns)}${typeSuffix}`;
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

export const GTypeType = new NativeType("GType");
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
