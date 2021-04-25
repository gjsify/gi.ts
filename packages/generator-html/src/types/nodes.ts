import {
  ErrorJson,
  NodeKind,
  TypeJson,
  NodeJson,
  PropertyJson as Prop,
  FieldJson as Field,
  ConstJson as Const,
  ConstructorJson as Constructor,
  ClassJson as Class,
  RecordJson as Record,
  EnumJson as Enum,
  EnumMemberJson as EnumMember,
  FunctionJson as Function,
  ParameterJson as Parameter,
  CallbackJson as Callback,
  AliasJson as Alias,
  VirtualMethodJson as ClassVirtualMethod,
  StaticMethodJson as ClassStaticMethod,
  MethodJson as ClassMethod,
  InterfaceJson as Interface,
  ConstJson as Constant,
  ImportsJson as Imports
} from "@gi.ts/lib/dist/generators/json";

export type Method = ClassMethod | ClassVirtualMethod | ClassStaticMethod;

export {
  ErrorJson,
  Prop,
  Const,
  Constructor,
  Class,
  Record,
  Enum,
  EnumMember,
  Field,
  Function,
  Parameter,
  Callback,
  Alias,
  ClassVirtualMethod,
  ClassStaticMethod,
  ClassMethod,
  Interface,
  Constant,
  NodeKind,
  TypeJson,
  Imports
};

export type Type = TypeJson;

export type NodeDeclaration<K extends NodeJson, V extends keyof K = "name" | "kind"> = Pick<
  K,
  "name" | "kind" | V
>;

export interface NodeMetadata {
  deprecated?: boolean;
  deprecatedVersion?: string;
  deprecatedDoc?: string;
  introducedVersion?: string;
}

export interface ChildNode {
  metadata?: NodeMetadata;
  doc?: string;
}

export type AliasDeclaration = NodeDeclaration<Alias, "type">;
export type EnumDeclaration = NodeDeclaration<Enum>;
export type FunctionDeclaration = NodeDeclaration<Function, "returnType" | "parameters">;
export type CallbackDeclaration = NodeDeclaration<Callback, "returnType" | "parameters">;
export type ConstantDeclaration = NodeDeclaration<Constant, "type">;
export type RecordDeclaration = NodeDeclaration<Record, "type" | "extends" | "implements">;
export type InterfaceDeclaration = NodeDeclaration<Interface, "type" | "extends">;
export type ClassDeclaration = NodeDeclaration<Class, "abstract" | "type" | "extends" | "implements">;

export interface Namespace {
  kind: string;
  version: string;
  name: string;
  alias: Alias[];
  enums: Enum[];
  functions: Function[];
  callbacks: Callback[];
  constants: Const[];
  records: Record[];
  interfaces: Interface[];
  classes: Class[];
  imports: Imports;
}
