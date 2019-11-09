type Version = string;

type Parameter<T> = [
  {
    parameter?: T[];
  }
];

type Element<T> = {
  $: T & { introspectable?: "0" | "1" };
};

export interface GirXML {
  repository: Repository;
}

type SourcePositionElement = Element<SourcePosition>;
type CIncludeElement = Element<CInclude>;

export interface Repository {
  $: RepositoryClass;
  include: Element<Include>[];
  package: CIncludeElement[];
  "c:include": CIncludeElement[];
  namespace: NamespaceElement[];
}

export interface CInclude {
  name: string;
}

export interface RepositoryClass {
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
  $: Namespace;
  alias: AliasElement[];
  class: ClassElement[];
  record: RecordElement[];
  union: RecordElement[]; // TODO Anything unions do differently?
  bitfield: BitfieldElement[];
  callback: NamespaceCallback[];
  interface: Interface[];
  enumeration: Enumeration[];
  constant: ConstantElement[];
  function: NamespaceFunction[];
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

export interface AliasType {
  $: Alias;
}

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

export interface NamespaceCallback extends Element<Constant> {
  "source-position": SourcePositionElement[];
  "return-value": FunctionReturnValue[];
  parameters: Parameter<CallbackParameter>;
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

export interface CallbackParameter {
  $: Callback;
  type?: AliasType[];
  doc?: DocElement[];
  array?: Arrays[];
}

export interface Callback {
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

export interface Arrays {
  $: XmlArray;
  type: AliasType[];
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

export interface ClassElement extends Element<Class> {
  doc?: DocElement[];
  "source-position"?: SourcePositionElement[];
  implements?: CIncludeElement[];
  constructor?: Array<ClassConstructor | null>;
  "virtual-method"?: ClassVirtualMethod[];
  method?: ClassMethod[];
  property?: ClassProperty[];
  field?: ClassField[];
  "glib:signal"?: ClassGLibSignal[];
  function?: ClassFunction[];
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

export interface ClassConstructor {
  $: Constructor;
  doc?: DocElement[];
  "source-position": SourcePositionElement[];
  "return-value": ConstructorReturnValue[];
  parameters?: Parameter<ClassConstructorParameter>;
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface Constructor {
  name: string;
  "c:identifier"?: string;
  version?: Version;
  deprecated?: string;
  "deprecated-version"?: Version;
  introspectable?: string;
  "shadowed-by"?: string;
  shadows?: string;
  throws?: string;
  "moved-to"?: string;
  invoker?: string;
}

export interface DocDeprecatedElement extends Element<DocDeprecated> {
  _: string;
  $: DocDeprecated;
}

export interface DocDeprecated {
  "xml:space": XMLSpace;
}

export interface ClassConstructorParameter extends ClassMethodParameter {
  $: ClassConstructorMeta;
  doc?: DocElement[];
  type?: ParameterType[];
  varargs?: string[];
  array?: Arrays[];
}

export interface ClassConstructorMeta {
  name: string;
  "transfer-ownership": TransferOwnership;
  nullable?: string;
  "allow-none"?: string;
}

export interface ParameterType {
  $: Alias;
  type?: CIncludeElement[];
}

export interface ClassField {
  $: ClassFieldMeta;
  type?: ClassFieldType[];
  doc?: DocElement[];
  array?: ClassFieldArray[];
}

export interface ClassFieldMeta {
  name: string;
  readable?: string;
  private?: string;
  bits?: string;
  writable?: string;
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

export interface ClassMethod {
  $: Constructor;
  doc?: DocElement[];
  "source-position": SourcePositionElement[];
  "return-value": ClassMethodReturnValue[];
  parameters?: Parameter<ClassMethodParameter>;
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface ClassMethodParameterContainer {
  "instance-parameter": ClassMethodInstanceParameter[];
  parameter?: ClassMethodParameter[];
}

export interface ClassMethodInstanceParameter {
  $: ClassConstructorMeta;
  doc?: DocElement[];
  type: AliasType[];
}

export interface ClassMethodParameter {
  $: Callback;
  doc?: DocElement[];
  type?: ParameterType[];
  array?: Arrays[];
  varargs?: string[];
}

export interface ClassMethodReturnValue {
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
  writable?: string;
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

export interface ClassVirtualMethod extends ClassFunction {
  $: ClassVirtualMethodMeta;
  "source-position": SourcePositionElement[];
  "return-value": FunctionReturnValue[];
  parameters: Parameter<ClassVirtualMethodParameter>;
  doc?: DocElement[];
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface ClassVirtualMethodMeta {
  name: string;
  invoker?: string;
  deprecated?: string;
  "deprecated-version"?: Version;
  version?: Version;
  introspectable?: string;
}

export interface ClassVirtualMethodInstanceParameter {
  $: ClassVirtualMethodInstanceParameterMeta;
  type: AliasType[];
  doc?: DocElement[];
}

export interface ClassVirtualMethodInstanceParameterMeta {
  name: string;
  "transfer-ownership": TransferOwnership;
}

export interface ClassVirtualMethodParameter {
  $: Callback;
  type: AliasType[];
  doc?: DocElement[];
}

export interface ConstantElement extends Element<Constant> {
  doc?: DocElement[];
  "source-position": SourcePositionElement[];
  type: AliasType[];
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface Enumeration {
  $: Bitfield;
  doc?: DocElement[];
  member: MemberElement[];
  function?: EnumerationFunction[];
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface EnumerationFunction {
  $: EnumerationFunctionMeta;
  "return-value": ConstructorReturnValue[];
  doc?: DocElement[];
  "doc-deprecated"?: DocDeprecatedElement[];
  "source-position"?: SourcePositionElement[];
  parameters?: Parameter<ClassVirtualMethodParameter>;
}

export interface EnumerationFunctionMeta {
  name: string;
  "c:identifier": string;
  version?: Version;
  deprecated?: string;
  "deprecated-version"?: Version;
}

export interface NamespaceFunction {
  $: Constructor;
  doc?: DocElement[];
  "source-position"?: SourcePositionElement[];
  "return-value": FunctionReturnValue[];
  parameters?: Parameter<ClassMethodParameter>;
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface ClassFunction {
  $: Constructor;
  doc?: DocElement[];
  "source-position"?: SourcePositionElement[];
  "return-value": ClassMethodReturnValue[];
  parameters?: Parameter<ClassMethodParameter>;
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface Interface {
  $: Class;
  doc?: DocElement[];
  "source-position"?: SourcePositionElement[];
  prerequisite?: CIncludeElement[];
  "virtual-method"?: InterfaceVirtualMethod[];
  method: InterfaceMethod[];
  property?: InterfaceProperty[];
  "glib:signal"?: InterfaceGLibSignal[];
}

export interface InterfaceGLibSignal {
  $: InterfaceGLibSignalMeta;
  doc: DocElement[];
  "return-value": ConstructorReturnValue[];
  parameters?: Parameter<ClassVirtualMethodParameter>;
}

export interface InterfaceGLibSignalMeta {
  name: string;
  when?: When;
  version?: Version;
  introspectable?: string;
  "c:identifier"?: string;
}

export interface InterfaceMethod {
  $: Constructor;
  doc?: DocElement[];
  "source-position": SourcePositionElement[];
  "return-value": ClassMethodReturnValue[];
  parameters: InterfaceMethodParameter[];
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface InterfaceMethodParameter {
  "instance-parameter": ClassVirtualMethodInstanceParameter[];
  parameter?: ClassMethodParameter[];
}

export interface InterfaceProperty extends Element<Property> {
  type: AliasType[];
  doc?: DocElement[];
}

export interface InterfaceVirtualMethod {
  $: Constructor;
  doc?: DocElement[];
  "source-position": SourcePositionElement[];
  "return-value": ClassMethodReturnValue[];
  parameters: InterfaceVirtualMethodParameter[];
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface InterfaceVirtualMethodParameter {
  "instance-parameter": ClassVirtualMethodInstanceParameter[];
  parameter?: CallbackParameter[];
}

export interface RecordElement extends Element<Record> {
  "source-position": SourcePositionElement[];
  field?: RecordField[];
  doc?: DocElement[];
  union?: Union[];
  function?: RecordFunction[];
  method?: RecordMethod[];
  constructor?: Array<RecordConstructor | null>;
}

export interface Record {
  foreign: "0" | "1";
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

export interface RecordConstructor {
  $: Constructor;
  doc: DocElement[];
  "source-position": SourcePositionElement[];
  "return-value": ConstructorReturnValue[];
  "doc-deprecated"?: DocDeprecatedElement[];
  parameters?: Parameter<RecordConstructorParameter>;
}

export interface RecordConstructorParameter {
  $: ClassConstructorMeta;
  doc: DocElement[];
  type?: AliasType[];
  array?: Arrays[];
  varargs?: string[];
}

export interface RecordField {
  $: RecordFieldMeta;
  type?: ClassFieldType[];
  callback?: FieldCallback[];
  doc?: DocElement[];
  array?: ClassFieldArray[];
}

export interface RecordFieldMeta {
  name: string;
  introspectable?: string;
  writable?: string;
  bits?: string;
  readable?: string;
  private?: string;
}

export interface FieldCallback {
  $: FieldCallbackMeta;
  "source-position": SourcePositionElement[];
  "return-value": ClassMethodReturnValue[];
  parameters?: Parameter<CallbackParameter>;
}

export interface FieldCallbackMeta {
  name: string;
  introspectable?: string;
  throws?: string;
}

export interface RecordFunction {
  $: InterfaceGLibSignalMeta;
  doc: DocElement[];
  "source-position": SourcePositionElement[];
  "return-value": ClassMethodReturnValue[];
  parameters?: Parameter<RecordFunctionParameter>;
}

export interface RecordFunctionParameter {
  $: ClassConstructorMeta;
  doc: DocElement[];
  type?: ParameterType[];
  varargs?: string[];
  array?: StickyArrayElement[];
}

export interface StickyArrayElement extends Element<StickyArray> {
  $: StickyArray;
  type: AliasType[];
}

export interface StickyArray {
  "zero-terminated": string;
  "c:type": string;
}

export interface RecordMethod {
  $: Constructor;
  doc?: DocElement[];
  "source-position": SourcePositionElement[];
  "return-value": ClassMethodReturnValue[];
  parameters: ClassMethodParameterContainer[];
  "doc-deprecated"?: DocDeprecatedElement[];
}

export interface Union {
  $?: Alias;
  "source-position": SourcePositionElement[];
  field: UnionField[];
}

export interface UnionField {
  $: ClassFieldMeta;
  type?: AliasType[];
  array?: UnionArrayElement[];
}

export interface UnionArrayElement extends Element<UnionArray> {
  $: UnionArray;
  type: AliasType[];
}

export interface UnionArray {
  "zero-terminated": string;
  "fixed-size": string;
}
