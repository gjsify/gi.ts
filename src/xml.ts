type Version = string;

type ParameterContainer<T> = [
  {
    parameter?: T[];
  }
];

export type binary = "0" | "1";

export type Element<T> = {
  $: T & { introspectable?: binary };
};

export interface GirXML {
  repository: Repository;
}

export interface SourcePositionElement extends Element<SourcePosition> {}
export interface CIncludeElement extends Element<CInclude> {}

export interface Repository extends Element<RepositoryMeta> {
  include: Element<Include>[];
  package: CIncludeElement[];
  "c:include": CIncludeElement[];
  namespace: NamespaceElement[];
}

export interface CInclude {
  name: string;
}

export interface RepositoryMeta {
  version: string;
  xmlns: string;
  "xmlns:c": string;
  "xmlns:glib": string;
}

export interface Include {
  name: string;
  version: string;
}

export interface NamespaceElement extends Element<Namespace> {
  alias: AliasElement[];
  class: ClassElement[];
  record: RecordElement[];
  union: RecordElement[]; // TODO Anything unions do differently?
  bitfield: BitfieldElement[];
  callback: Callback[];
  interface: InterfaceElement[];
  enumeration: Enumeration[];
  constant: ConstantElement[];
  function: Function[];
  ["glib:boxed"]: GLibBoxedElement[];
}

export interface GLibBoxedElement extends Element<GLibBoxed> {}

export interface GLibBoxed {
  "glib:name": string;
  "c:symbol-prefix"?: string;
  "glib:type-name"?: string;
  "glib:get-type"?: string;
}

export interface Namespace {
  name: string;
  version: Version;
  "shared-library": string;
  "c:identifier-prefixes": string;
  "c:symbol-prefixes": string;
}

export interface AliasElement extends Element<Alias> {
  doc?: DocElement[];
  "source-position": SourcePositionElement[];
  type: AliasType[];
}

export interface Alias {
  name?: string;
  "c:type"?: string;
}

export interface DocElement extends Element<Doc> {
  _: string;
}

export interface Doc {
  "xml:space": XMLSpace;
  filename: string;
  line: string;
}

export enum XMLSpace {
  Preserve = "preserve"
}

export interface SourcePosition {
  filename: string;
  line: string;
}

export interface AliasType extends Element<Alias> {}

export interface BitfieldElement extends Element<Bitfield> {
  doc?: DocElement[];
  member: MemberElement[];
}

export interface Bitfield {
  name: string;
  "glib:type-name": string;
  "glib:get-type": string;
  "c:type": string;
  version?: Version;
  deprecated?: string;
  "deprecated-version"?: Version;
  "glib:error-domain"?: string;
}

export interface MemberElement extends Element<Member> {
  doc?: DocElement[];
}

export interface Member {
  name: string;
  value: string;
  "c:identifier": string;
  "glib:nick": string;
}

export interface Callback extends Element<Constant> {
  "source-position": SourcePositionElement[];
  "return-value": FunctionReturnValue[];
  parameters: ParameterContainer<CallbackParameter>;
  doc?: DocElement[];
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface Constant {
  name: string;
  "c:type": string;
  version?: Version;
  deprecated?: string;
  "deprecated-version"?: Version;
  throws?: string;
  value?: string;
}

export interface CallbackParameter extends Element<Parameter> {
  type?: AliasType[];
  doc?: DocElement[];
  array?: Arrays[];
}

export interface Parameter {
  name: string;
  "transfer-ownership": TransferOwnership;
  nullable?: string;
  "allow-none"?: string;
  closure?: string;
  direction?: Direction;
  "caller-allocates"?: string;
  scope?: Scope;
  optional?: string;
  destroy?: string;
}

export enum Direction {
  In = "in",
  Inout = "inout",
  Out = "out"
}

export enum Scope {
  Async = "async",
  Call = "call",
  Notified = "notified"
}

export enum TransferOwnership {
  Container = "container",
  Full = "full",
  None = "none"
}

export interface Arrays extends Element<XmlArray> {
  type: AliasType[];
  array?: Arrays[];
}

export interface XmlArray {
  length?: string;
  "zero-terminated"?: string;
  "c:type": string;
}

export interface FunctionReturnValueMeta {
  "transfer-ownership"?: TransferOwnership;
  nullable?: string;
}

export interface InterfaceElement extends Element<Class> {
  doc?: DocElement[];
  "source-position"?: SourcePositionElement[];
  prerequisite?: CIncludeElement[];
  "virtual-method"?: VirtualMethod[];
  method: Method[];
  property?: InterfaceProperty[];
  "glib:signal"?: InterfaceGLibSignal[];
  function?: Function[];
  callback?: Callback[];
}

export interface ClassElement extends Element<Class> {
  doc?: DocElement[];
  "source-position"?: SourcePositionElement[];
  implements?: CIncludeElement[];
  "constructor"?: ClassConstructor[];
  "virtual-method"?: VirtualMethod[];
  method?: Method[];
  property?: ClassProperty[];
  field?: ClassField[];
  "glib:signal"?: ClassGLibSignal[];
  function?: Function[];
  callback?: Callback[]; // TODO Rename now!
}

export interface Class {
  name: string;
  "c:symbol-prefix": string;
  "c:type"?: string;
  parent?: string;
  "glib:type-name": string;
  "glib:get-type": string;
  "glib:type-struct"?: string;
  abstract?: string;
  version?: Version;
}

export interface ClassConstructor extends Element<FunctionMeta> {
  doc?: DocElement[];
  "source-position": SourcePositionElement[];
  "return-value": ConstructorReturnValue[];
  parameters?: ParameterContainer<ClassConstructorParameter>;
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface FunctionMeta {
  name: string;
  "c:identifier"?: string;
  version?: Version;
  deprecated?: string;
  "deprecated-version"?: Version;
  "shadowed-by"?: string;
  shadows?: string;
  throws?: string;
  "moved-to"?: string;
  invoker?: string;
}

export interface DocDeprecatedElement extends Element<DocDeprecated> {
  _: string;
}

export interface DocDeprecated {
  "xml:space": XMLSpace;
}

export interface ClassConstructorParameter extends ClassMethodParameter {
  doc?: DocElement[];
  type?: ParameterType[];
  varargs?: string[];
  array?: Arrays[];
}

export interface ConstructorMeta {
  name: string;
  "transfer-ownership": TransferOwnership;
  nullable?: string;
  "allow-none"?: string;
}

export interface ParameterType extends Element<Alias> {
  type?: CIncludeElement[];
}

export interface ClassField extends Element<FieldMeta> {
  type?: ClassFieldType[];
  doc?: DocElement[];
  array?: ClassFieldArray[];
}

export interface ClassFieldArray {
  $: ClassFieldArrayMeta;
  type: AliasType[];
}

export interface ClassFieldArrayMeta {
  "zero-terminated"?: string;
  "fixed-size"?: string;
  name?: string;
  "c:type"?: string;
  length?: string;
}

export interface ClassFieldType {
  $: Alias;
  type?: AliasType[];
}

export interface ConstructorReturnValue {
  $: ConstructorReturnValueMeta;
  doc?: DocElement[];
  type: AliasType[];
}

export interface FunctionReturnValue {
  $?: FunctionReturnValueMeta;
  doc?: DocElement[];
  type?: ParameterType[];
  array?: FunctionReturnValueArray[];
}

export interface ConstructorReturnValueMeta {
  "transfer-ownership": TransferOwnership;
}

export interface FunctionReturnValueArray {
  $: FunctionReturnValueMeta;
  type: AliasType[];
}

export interface FunctionReturnValueMeta {
  "c:type": string;
  length?: string;
  "zero-terminated"?: string;
  name?: string;
}

export interface ClassGLibSignalElement extends Element<ClassGLibSignal> {
  $: ClassGLibSignal;
  doc?: DocElement[];
  "return-value": ConstructorReturnValue[];
  parameters?: ClassMethodParameter[];
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface ClassGLibSignal {
  name: string;
  when?: When;
  version?: Version;
  detailed?: string;
  "no-recurse"?: string;
  deprecated?: string;
  "deprecated-version"?: Version;
  action?: string;
  "no-hooks"?: string;
}

export enum When {
  Cleanup = "cleanup",
  First = "first",
  Last = "last"
}

export interface MethodParameterContainer {
  "instance-parameter": ClassMethodInstanceParameter[];
  parameter?: ClassMethodParameter[];
}

export interface ClassMethodInstanceParameter extends Element<ConstructorMeta> {
  doc?: DocElement[];
  type: AliasType[];
}

export interface ClassMethodParameter extends Element<Parameter> {
  doc?: DocElement[];
  type?: ParameterType[];
  array?: Arrays[];
  varargs?: string[];
}

export interface ReturnValue {
  $?: FunctionReturnValueMeta;
  type?: ParameterType[];
  doc?: DocElement[];
  array?: Arrays[];
}

export interface ClassProperty extends Element<Property> {
  doc?: DocElement[];
  array?: PropertyArray[];
  type?: ParameterType[];
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface Property {
  name: string;
  version?: Version;
  writable?: binary;
  "transfer-ownership"?: TransferOwnership;
  deprecated?: string;
  "deprecated-version"?: Version;
  construct?: string;
  "construct-only"?: string;
  readable?: string;
}

export interface PropertyArray {
  type: CIncludeElement[];
}

export interface VirtualMethod extends Method {
  "source-position": SourcePositionElement[];
  "return-value": FunctionReturnValue[];
  parameters: MethodParameterContainer[];
  doc?: DocElement[];
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface ConstantElement extends Element<Constant> {
  doc?: DocElement[];
  "source-position": SourcePositionElement[];
  type: AliasType[];
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface Enumeration extends Element<Bitfield> {
  doc?: DocElement[];
  member: MemberElement[];
  function?: Function[];
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface Function extends Element<FunctionMeta> {
  doc?: DocElement[];
  "source-position"?: SourcePositionElement[];
  "return-value": ReturnValue[];
  parameters?: ParameterContainer<ClassMethodParameter>;
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface InterfaceGLibSignal extends Element<InterfaceGLibSignalMeta> {
  doc: DocElement[];
  "return-value": ConstructorReturnValue[];
  parameters?: ParameterContainer<ClassMethodParameter>;
}

export interface InterfaceGLibSignalMeta {
  name: string;
  when?: When;
  version?: Version;
  introspectable?: string;
  "c:identifier"?: string;
}

export interface InterfaceProperty extends Element<Property> {
  type: AliasType[];
  doc?: DocElement[];
}

export interface RecordElement extends Element<Record> {
  "source-position": SourcePositionElement[];
  field?: RecordField[];
  doc?: DocElement[];
  union?: Union[];
  function?: RecordFunction[];
  method?: Method[];
  "constructor"?: RecordConstructor[];
}

export interface Record {
  foreign: binary;
  name: string;
  "c:type": string;
  "glib:is-gtype-struct-for"?: string;
  disguised?: string;
  deprecated?: string;
  "deprecated-version"?: Version;
  version?: Version;
  "glib:type-name"?: string;
  "glib:get-type"?: string;
  "c:symbol-prefix"?: string;
}

export interface RecordConstructor extends Element<FunctionMeta> {
  doc: DocElement[];
  "source-position": SourcePositionElement[];
  "return-value": ConstructorReturnValue[];
  "doc-deprecated"?: DocDeprecatedElement[];
  parameters?: ParameterContainer<RecordConstructorParameter>;
}

export interface RecordConstructorParameter extends Element<ConstructorMeta> {
  doc: DocElement[];
  type?: AliasType[];
  array?: Arrays[];
  varargs?: string[];
}

export interface RecordField extends Element<FieldMeta> {
  type?: ClassFieldType[];
  callback?: FieldCallback[];
  doc?: DocElement[];
  array?: ClassFieldArray[];
}

export interface FieldMeta {
  name: string;
  writable?: string;
  bits?: string;
  readable?: string;
  private?: string;
}

export interface FieldCallback {
  $: FieldCallbackMeta;
  "source-position": SourcePositionElement[];
  "return-value": ReturnValue[];
  parameters?: ParameterContainer<CallbackParameter>;
}

export interface FieldCallbackMeta {
  name: string;
  introspectable?: string;
  throws?: string;
}

export interface RecordFunction extends Element<InterfaceGLibSignalMeta> {
  doc: DocElement[];
  "source-position": SourcePositionElement[];
  "return-value": ReturnValue[];
  parameters?: ParameterContainer<RecordFunctionParameter>;
}

export interface RecordFunctionParameter extends Element<ConstructorMeta> {
  doc: DocElement[];
  type?: ParameterType[];
  varargs?: string[];
  array?: StickyArrayElement[];
}

export interface StickyArrayElement extends Element<StickyArray> {
  type: AliasType[];
}

export interface StickyArray {
  "zero-terminated": string;
  "c:type": string;
}

export interface Method extends Element<FunctionMeta> {
  doc?: DocElement[];
  "source-position": SourcePositionElement[];
  "return-value": ReturnValue[];
  parameters: MethodParameterContainer[];
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface Union {
  $?: Alias;
  "source-position": SourcePositionElement[];
  field: UnionField[];
}

export interface UnionField extends Element<FieldMeta> {
  type?: AliasType[];
  array?: UnionArrayElement[];
}

export interface UnionArrayElement extends Element<UnionArray> {
  type: AliasType[];
}

export interface UnionArray {
  "zero-terminated": string;
  "fixed-size": string;
}
