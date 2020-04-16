import { GirNamespace, GirNSRegistry } from "./gir/namespace";
import { GirProperty, GirField } from "./gir/property";

export abstract class GirBase {
  name: string;
  resolve_names: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  abstract copy(options?: { parent?: GirBase }): GirBase;

  static fromXML(_modName: string, _ns: GirNamespace, parent: GirBase, _gir: object): GirBase | null {
    throw new Error("GirBase cannot be instantiated");
  }

  abstract asString(modName: string, registry: GirNSRegistry): string | null;
}

export class Type {
  name: string;
  namespace: string | null;

  constructor(name: string, namespace: string | null = null) {
    this.name = name;
    this.namespace = namespace;
  }

  copy(): Type {
    const { name, namespace } = this;

    return new Type(name, namespace);
  }
}

export class ClassType extends Type {
  copy(): ClassType {
    const { name, namespace } = this;

    return new ClassType(name, namespace);
  }
}

export class VariableType extends Type {
  anyified?: boolean = false;
  nullable: boolean = false;

  copy(): VariableType {
    const { anyified, nullable, name, namespace } = this;

    return VariableType.new({ anyified, nullable, name, namespace });
  }

  static new({
    name,
    namespace = null,
    anyified = false,
    nullable = false
  }: {
    name: string;
    namespace?: string | null;
    anyified?: boolean;
    nullable?: boolean;
  }) {
    const vt = new VariableType(name, namespace);
    vt.anyified = anyified;
    vt.nullable = nullable;
    return vt;
  }

  static nullable(name: string, namespace: string | null = null): VariableType {
    const vt = new VariableType(name, namespace);
    vt.nullable = true;
    return vt;
  }
}

export class NativeType extends VariableType {
  constructor(typeString: string) {
    super(typeString, null);
  }

  copy(): NativeType {
    const { name } = this;

    return new NativeType(name);
  }
}

export class ArrayVariableType extends VariableType {
  arrayDepth: number = 1;

  copy(): ArrayVariableType {
    const { arrayDepth, anyified, nullable, name, namespace } = this;

    return ArrayVariableType.new({ arrayDepth, anyified, nullable, name, namespace });
  }

  static new({
    name,
    namespace = null,
    arrayDepth = 1,
    anyified = false,
    nullable = false
  }: {
    name: string;
    namespace?: string | null;
    arrayDepth?: number;
    anyified?: boolean;
    nullable?: boolean;
  }) {
    const vt = new ArrayVariableType(name, namespace);
    vt.anyified = anyified;
    vt.nullable = nullable;
    vt.arrayDepth = arrayDepth;
    return vt;
  }
}

export const VoidType = new Type("void");

export const UnknownType = new Type("unknown");

export type GirClassField = GirProperty | GirField;
