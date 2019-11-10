
/**
 * json
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
/**
 * 
 */
type properties = { [key: string]: any };
type GType = object;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION_S: string;
/**
 * Checks whether it is possible to deserialize a #GBoxed of
 * type @gboxed_type from a #JsonNode of type @node_type
 */
export function boxed_can_deserialize(gboxed_type: GType, node_type: NodeType): boolean;
/**
 * Checks whether it is possible to serialize a #GBoxed of
 * type @gboxed_type into a #JsonNode. The type of the
 * #JsonNode is placed inside @node_type if the function
 * returns %TRUE and it's undefined otherwise.
 */
export function boxed_can_serialize(gboxed_type: GType): [boolean, NodeType];
/**
 * Deserializes @node into a #GBoxed of @gboxed_type
 */
export function boxed_deserialize(gboxed_type: GType, node: Node): object | null;
/**
 * Serializes @boxed, a pointer to a #GBoxed of type @gboxed_type,
 * into a #JsonNode
 */
export function boxed_serialize(gboxed_type: GType, boxed: object | null): Node | null;
/**
 * Deserializes a JSON data stream and creates the corresponding
 * #GObject class. If @gtype implements the #JsonSerializableIface
 * interface, it will be asked to deserialize all the JSON members
 * into the respective properties; otherwise, the default implementation
 * will be used to translate the compatible JSON native types.
 * Note: the JSON data stream must be an object declaration.
 */
export function construct_gobject(gtype: GType, data: string, length: number): GObject.Object;
/**
 * Parses the string in @str and returns a #JsonNode representing
 * the JSON tree.
 * In case of parsing error, this function returns %NULL and sets
 * @error appropriately.
 */
export function from_string(str: string): Node;
/**
 * Creates a new #GObject of type @gtype, and constructs it
 * using the members of the passed #JsonObject
 */
export function gobject_deserialize(gtype: GType, node: Node): GObject.Object;
/**
 * Deserializes a JSON data stream and creates the corresponding
 * #GObject class. If @gtype implements the #JsonSerializableIface
 * interface, it will be asked to deserialize all the JSON members
 * into the respective properties; otherwise, the default implementation
 * will be used to translate the compatible JSON native types.
 * Note: the JSON data stream must be an object declaration.
 */
export function gobject_from_data(gtype: GType, data: string, length: number): GObject.Object;
/**
 * Creates a #JsonNode representing the passed #GObject
 * instance. Each member of the returned JSON object will
 * map to a property of the #GObject
 */
export function gobject_serialize(gobject: GObject.Object): Node;
/**
 * Serializes a #GObject into a JSON data stream, iterating recursively
 * over each property.
 * If @gobject implements the #JsonSerializableIface interface, it will
 * be asked to serialize all its properties; otherwise, the default
 * implementation will be use to translate the compatible types into
 * JSON native types.
 */
export function gobject_to_data(gobject: GObject.Object): [string, number];
/**
 * Converts a JSON data structure to a GVariant value using @signature to
 * resolve ambiguous data types. If no error occurs, the resulting #GVari
 * ant
 * is guaranteed to conform to @signature.
 * If @signature is not %NULL but does not represent a valid GVariant typ
 * e
 * string, %NULL is returned and error is set to %G_IO_ERROR_INVALID_ARGU
 * MENT.
 * If a @signature is provided but the JSON structure cannot be mapped to
 *  it,
 * %NULL is returned and error is set to %G_IO_ERROR_INVALID_DATA.
 * If @signature is %NULL, the conversion is done based strictly on the t
 * ypes
 * in the JSON nodes.
 * The returned variant has a floating reference that will need to be sun
 * k
 * by the caller code.
 */
export function gvariant_deserialize(json_node: Node, signature: string | null): GLib.Variant;
/**
 * Converts a JSON string to a #GVariant value. This method works exactly
 * like json_gvariant_deserialize(), but takes a JSON encoded string inst
 * ead.
 * The string is first converted to a #JsonNode using #JsonParser, and th
 * en
 * json_gvariant_deserialize() is called.
 * The returned variant has a floating reference that will need to be sun
 * k
 * by the caller code.
 */
export function gvariant_deserialize_data(json: string, length: number, signature: string | null): GLib.Variant;
/**
 * Converts @variant to a JSON tree.
 */
export function gvariant_serialize(variant: GLib.Variant): Node;
/**
 * Converts @variant to its JSON encoded string representation. This meth
 * od
 * is actually a helper function. It uses json_gvariant_serialize() to ob
 * tain the
 * JSON tree, and then #JsonGenerator to stringify it.
 */
export function gvariant_serialize_data(variant: GLib.Variant): [string, number | null];
/**
 * 
 */
export function parser_error_quark(): GLib.Quark;
/**
 * 
 */
export function path_error_quark(): GLib.Quark;
/**
 * 
 */
export function reader_error_quark(): GLib.Quark;
/**
 * Serializes a #GObject into a JSON data stream. If @gobject implements
 * the #JsonSerializableIface interface, it will be asked to serizalize a
 * ll
 * its properties; otherwise, the default implementation will be use to
 * translate the compatible types into JSON native types.
 */
export function serialize_gobject(gobject: GObject.Object): [string, number];
/**
 * Check whether @a and @b are equal UTF-8 JSON strings and return an ord
 * ering
 * over them in strcmp() style.
 */
export function string_compare(a: string, b: string): number;
/**
 * Check whether @a and @b are equal UTF-8 JSON strings.
 */
export function string_equal(a: string, b: string): boolean;
/**
 * Calculate a hash value for the given @key (a UTF-8 JSON string).
 * Note: Member names are compared byte-wise, without applying any Unicod
 * e
 * decomposition or normalisation. This is not explicitly mentioned in th
 * e JSON
 * standard (ECMA-404), but is assumed.
 */
export function string_hash(key: string): number;
/**
 * Generates a stringified JSON representation of the contents of
 * the passed @node.
 */
export function to_string(node: Node, pretty: boolean): string;
export type ArrayForeach = (array: Array, index_: number, element_node: Node, user_data: object | null) => void;
export type BoxedDeserializeFunc = (node: Node) => object | null;
export type BoxedSerializeFunc = (boxed: object | null) => Node;
export type ObjectForeach = (object: Object, member_name: string, member_node: Node, user_data: object | null) => void;
export enum NodeType {
    OBJECT = 0,
    ARRAY = 1,
    VALUE = 2,
    NULL = 3,
}
export enum ParserError {
    PARSE = 0,
    TRAILING_COMMA = 1,
    MISSING_COMMA = 2,
    MISSING_COLON = 3,
    INVALID_BAREWORD = 4,
    EMPTY_MEMBER_NAME = 5,
    INVALID_DATA = 6,
    UNKNOWN = 7,
}
export enum PathError {
    QUERY = 0,
}
export enum ReaderError {
    NO_ARRAY = 0,
    INVALID_INDEX = 1,
    NO_OBJECT = 2,
    INVALID_MEMBER = 3,
    INVALID_NODE = 4,
    NO_VALUE = 5,
    INVALID_TYPE = 6,
}
export class Builder extends GObject.Object {
    constructor(config?: properties);
    immutable: boolean;static new_immutable(): Builder;
    static new_immutable(...args: never[]): never;
    add_boolean_value(value: boolean): Builder | null;
    add_double_value(value: number): Builder | null;
    add_int_value(value: number): Builder | null;
    add_null_value(): Builder | null;
    add_string_value(value: string): Builder | null;
    add_value(node: Node): Builder | null;
    begin_array(): Builder | null;
    begin_object(): Builder | null;
    end_array(): Builder | null;
    end_object(): Builder | null;
    get_root(): Node | null;
    reset(): void;
    set_member_name(member_name: string): Builder | null;
}
export class Generator extends GObject.Object {
    constructor(config?: properties);
    indent: number;
    indent_char: number;
    pretty: boolean;
    root: Node;
    get_indent(): number;
    get_indent_char(): number;
    get_pretty(): boolean;
    get_root(): Node | null;
    set_indent(indent_level: number): void;
    set_indent_char(indent_char: number): void;
    set_pretty(is_pretty: boolean): void;
    set_root(node: Node): void;
    to_data(): [string, number];
    to_file(filename: string): boolean;
    to_gstring(string: GLib.String): GLib.String;
    to_stream(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): boolean;
}
export class Parser extends GObject.Object {
    constructor(config?: properties);
    immutable: boolean;static new_immutable(): Parser;
    static new_immutable(...args: never[]): never;
    get_current_line(): number;
    get_current_pos(): number;
    get_root(): Node | null;
    has_assignment(): [boolean, string | null];
    load_from_data(data: string, length: number): boolean;
    load_from_file(filename: string): boolean;
    load_from_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean;
    load_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    load_from_stream_finish(result: Gio.AsyncResult): boolean;
    steal_root(): Node | null;
    vfunc_array_element(array: Array, index_: number): void;
    vfunc_array_end(array: Array): void;
    vfunc_array_start(): void;
    vfunc_error(error: GLib.Error): void;
    vfunc_object_end(object: Object): void;
    vfunc_object_member(object: Object, member_name: string): void;
    vfunc_object_start(): void;
    vfunc_parse_end(): void;
    vfunc_parse_start(): void;
}
export class Path extends GObject.Object {
    constructor(config?: properties);
    compile(expression: string): boolean;
    match(root: Node): Node;
    static query(expression: string, root: Node): Node;
}
export class Reader extends GObject.Object {
    constructor(config?: properties);
    root: Node;
    count_elements(): number;
    count_members(): number;
    end_element(): void;
    end_member(): void;
    get_boolean_value(): boolean;
    get_double_value(): number;
    get_error(): GLib.Error | null;
    get_int_value(): number;
    get_member_name(): string | null;
    get_null_value(): boolean;
    get_string_value(): string;
    get_value(): Node | null;
    is_array(): boolean;
    is_object(): boolean;
    is_value(): boolean;
    list_members(): string[];
    read_element(index_: number): boolean;
    read_member(member_name: string): boolean;
    set_root(root: Node | null): void;
}
export class Array  {
    constructor(config?: properties);
    static sized_new(n_elements: number): Array;
    add_array_element(value: Array | null): void;
    add_boolean_element(value: boolean): void;
    add_double_element(value: number): void;
    add_element(node: Node): void;
    add_int_element(value: number): void;
    add_null_element(): void;
    add_object_element(value: Object): void;
    add_string_element(value: string): void;
    dup_element(index_: number): Node;
    equal(b: Array): boolean;
    foreach_element(func: ArrayForeach, data: object | null): void;
    get_array_element(index_: number): Array;
    get_boolean_element(index_: number): boolean;
    get_double_element(index_: number): number;
    get_element(index_: number): Node;
    get_elements(): GLib.List;
    get_int_element(index_: number): number;
    get_length(): number;
    get_null_element(index_: number): boolean;
    get_object_element(index_: number): Object;
    get_string_element(index_: number): string;
    hash(): number;
    is_immutable(): boolean;
    ref(): Array;
    remove_element(index_: number): void;
    seal(): void;
    unref(): void;
}
export class BuilderPrivate  {
    constructor(config?: properties);
}
export class GeneratorPrivate  {
    constructor(config?: properties);
}
export class Node  {
    constructor(config?: properties);
    static alloc(): Node;
    copy(): Node;
    dup_array(): Array | null;
    dup_object(): Object | null;
    dup_string(): string | null;
    equal(b: Node): boolean;
    free(): void;
    get_array(): Array | null;
    get_boolean(): boolean;
    get_double(): number;
    get_int(): number;
    get_node_type(): NodeType;
    get_object(): Object | null;
    get_parent(): Node | null;
    get_string(): string | null;
    get_value(): [GObject.Value];
    get_value_type(): GType;
    hash(): number;
    init(type: NodeType): Node;
    init_array(array: Array | null): Node;
    init_boolean(value: boolean): Node;
    init_double(value: number): Node;
    init_int(value: number): Node;
    init_null(): Node;
    init_object(object: Object | null): Node;
    init_string(value: string | null): Node;
    is_immutable(): boolean;
    is_null(): boolean;
    ref(): Node;
    seal(): void;
    set_array(array: Array): void;
    set_boolean(value: boolean): void;
    set_double(value: number): void;
    set_int(value: number): void;
    set_object(object: Object | null): void;
    set_parent(parent: Node): void;
    set_string(value: string): void;
    set_value(value: GObject.Value): void;
    take_array(array: Array): void;
    take_object(object: Object): void;
    type_name(): string;
    unref(): void;
}
export class Object  {
    constructor(config?: properties);
    add_member(member_name: string, node: Node): void;
    dup_member(member_name: string): Node | null;
    equal(b: Object): boolean;
    foreach_member(func: ObjectForeach, data: object | null): void;
    get_array_member(member_name: string): Array;
    get_boolean_member(member_name: string): boolean;
    get_double_member(member_name: string): number;
    get_int_member(member_name: string): number;
    get_member(member_name: string): Node | null;
    get_members(): GLib.List | null;
    get_null_member(member_name: string): boolean;
    get_object_member(member_name: string): Object | null;
    get_size(): number;
    get_string_member(member_name: string): string;
    get_values(): GLib.List | null;
    has_member(member_name: string): boolean;
    hash(): number;
    is_immutable(): boolean;
    ref(): Object;
    remove_member(member_name: string): void;
    seal(): void;
    set_array_member(member_name: string, value: Array): void;
    set_boolean_member(member_name: string, value: boolean): void;
    set_double_member(member_name: string, value: number): void;
    set_int_member(member_name: string, value: number): void;
    set_member(member_name: string, node: Node): void;
    set_null_member(member_name: string): void;
    set_object_member(member_name: string, value: Object): void;
    set_string_member(member_name: string, value: string): void;
    unref(): void;
}
export class ObjectIter  {
    constructor(config?: properties);
    readonly priv_pointer: object[];
    readonly priv_int: number[];
    readonly priv_boolean: boolean[];
    init(object: Object): void;
    next(): [boolean, string | null,Node | null];
}
export class ParserPrivate  {
    constructor(config?: properties);
}
export class ReaderPrivate  {
    constructor(config?: properties);
}
export interface Serializable  {
    default_deserialize_property(property_name: string, value: GObject.Value, pspec: GObject.ParamSpec, property_node: Node): boolean;
    default_serialize_property(property_name: string, value: GObject.Value, pspec: GObject.ParamSpec): Node;
    deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Node): [boolean, GObject.Value];
    find_property(name: string): GObject.ParamSpec | null;
    get_property(pspec: GObject.ParamSpec): [GObject.Value];
    list_properties(): [GObject.ParamSpec[], number];
    serialize_property(property_name: string, value: GObject.Value, pspec: GObject.ParamSpec): Node;
    set_property(pspec: GObject.ParamSpec, value: GObject.Value): void;
}