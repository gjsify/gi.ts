
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Xmlb from "xmlb";
/**
 * xmlb.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type BuilderFixupFunc = (self: BuilderFixup, bn: BuilderNode, user_data: object | null) => boolean;
export type BuilderNodeSortFunc = (bn1: BuilderNode, bn2: BuilderNode, user_data: object | null) => number;
export type BuilderNodeTraverseFunc = (bn: BuilderNode, user_data: object | null) => boolean;
export type BuilderSourceAdapterFunc = (self: BuilderSource, ctx: BuilderSourceCtx, user_data: object | null, cancellable: Gio.Cancellable | null) => Gio.InputStream;
export type BuilderSourceConverterFunc = (self: BuilderSource, file: Gio.File, user_data: object | null, cancellable: Gio.Cancellable | null) => Gio.InputStream;
export type BuilderSourceNodeFunc = (self: BuilderSource, bn: BuilderNode, user_data: object | null) => boolean;
export type MachineMethodFunc = (self: Machine, stack: Stack, result_unused: boolean, exec_data: object | null, user_data: object | null) => boolean;
export type MachineOpcodeFixupFunc = (self: Machine, opcodes: Stack, user_data: object | null) => boolean;
export type MachineTextHandlerFunc = (self: Machine, opcodes: Stack, text: string, handled: boolean, user_data: object | null) => boolean;
export type NodeTransmogrifyFunc = (self: Node, user_data: object | null) => boolean;
/**
 * Converts a string to an opcode kind.
 */
export function opcode_kind_from_string(str: string): OpcodeKind;
/**
 * Converts the opcode kind to a string.
 */
export function opcode_kind_to_string(kind: OpcodeKind): string;
/**
 * Escapes XPath control sequences such as newlines, tabs, and forward sl
 * ashes.
 */
export function string_escape(str: string): string;
export enum OpcodeKind {
    UNKNOWN = 0,
    INTEGER = 1,
    TEXT = 2,
    FUNCTION = 5,
    BOUND_UNSET = 8,
    BOUND_INTEGER = 9,
    BOUND_TEXT = 10,
    INDEXED_TEXT = 3,
    BOOLEAN = 17,
}
export enum BuilderCompileFlags {
    NONE = 0,
    NATIVE_LANGS = 2,
    IGNORE_INVALID = 4,
    SINGLE_LANG = 8,
    WATCH_BLOB = 16,
    IGNORE_GUID = 32,
}
export enum BuilderNodeFlags {
    NONE = 0,
    IGNORE = 1,
    LITERAL_TEXT = 2,
    HAS_TEXT = 4,
    HAS_TAIL = 8,
}
export enum BuilderSourceFlags {
    NONE = 0,
    LITERAL_TEXT = 1,
    WATCH_FILE = 2,
}
export enum MachineDebugFlags {
    NONE = 0,
    SHOW_STACK = 1,
    SHOW_PARSING = 2,
    SHOW_OPTIMIZER = 4,
}
export enum MachineParseFlags {
    NONE = 0,
    OPTIMIZE = 1,
}
export enum NodeExportFlags {
    NONE = 0,
    ADD_HEADER = 1,
    FORMAT_MULTILINE = 2,
    FORMAT_INDENT = 4,
    INCLUDE_SIBLINGS = 8,
    ONLY_CHILDREN = 16,
}
export enum OpcodeFlags {
    UNKNOWN = 0,
    INTEGER = 1,
    TEXT = 2,
    FUNCTION = 4,
    BOUND = 8,
    BOOLEAN = 16,
}
export enum QueryFlags {
    NONE = 0,
    OPTIMIZE = 1,
    USE_INDEXES = 2,
}
export enum SiloLoadFlags {
    NONE = 0,
    NO_MAGIC = 1,
    WATCH_BLOB = 2,
}
export enum SiloProfileFlags {
    NONE = 0,
    DEBUG = 1,
    APPEND = 2,
    XPATH = 4,
}
export class Builder extends GObject.Object {
    constructor(config?: properties);
    add_fixup(fixup: BuilderFixup): void;
    add_locale(locale: string): void;
    append_guid(guid: string): void;
    compile(flags: BuilderCompileFlags, cancellable: Gio.Cancellable | null): Silo;
    ensure(file: Gio.File, flags: BuilderCompileFlags, cancellable: Gio.Cancellable | null): Silo;
    import_node(bn: BuilderNode): void;
    import_source(source: BuilderSource): void;
    set_profile_flags(profile_flags: SiloProfileFlags): void;
}
export class BuilderFixup extends GObject.Object {
    constructor(config?: properties);
    get_max_depth(): number;
    set_max_depth(max_depth: number): void;
}
export class BuilderNode extends GObject.Object {
    constructor(config?: properties);
    add_child(child: BuilderNode): void;
    add_flag(flag: BuilderNodeFlags): void;
    depth(): number;
    _export(flags: NodeExportFlags): string;
    get_attr(name: string): string;
    get_attr_as_uint(name: string): number;
    get_child(element: string, text: string | null): BuilderNode;
    get_children(): BuilderNode[];
    get_element(): string;
    get_first_child(): BuilderNode;
    get_last_child(): BuilderNode;
    get_parent(): BuilderNode;
    get_tail(): string;
    get_text(): string;
    get_text_as_uint(): number;
    has_flag(flag: BuilderNodeFlags): boolean;
    remove_attr(name: string): void;
    remove_child(child: BuilderNode): void;
    set_attr(name: string, value: string): void;
    set_element(element: string): void;
    set_tail(tail: string, tail_len: number): void;
    set_text(text: string, text_len: number): void;
    sort_children(func: BuilderNodeSortFunc, user_data: object | null): void;
    traverse(order: GLib.TraverseType, flags: GLib.TraverseFlags, max_depth: number, func: BuilderNodeTraverseFunc, user_data: object | null): void;
    unlink(): void;
}
export class BuilderSource extends GObject.Object {
    constructor(config?: properties);
    add_fixup(fixup: BuilderFixup): void;
    add_node_func(id: string, func: BuilderSourceNodeFunc, user_data: object | null, user_data_free: GLib.DestroyNotify): void;
    load_bytes(bytes: GLib.Bytes, flags: BuilderSourceFlags): boolean;
    load_file(file: Gio.File, flags: BuilderSourceFlags, cancellable: Gio.Cancellable | null): boolean;
    load_xml(xml: string, flags: BuilderSourceFlags): boolean;
    set_info(info: BuilderNode | null): void;
    set_prefix(prefix: string | null): void;
}
export class BuilderSourceCtx  {
    constructor(config?: properties);
    get_bytes(cancellable: Gio.Cancellable | null): GLib.Bytes;
    get_filename(): string;
    get_stream(): Gio.InputStream;
}
export class Machine extends GObject.Object {
    constructor(config?: properties);
    add_method(name: string, n_opcodes: number, method_cb: MachineMethodFunc, user_data: object | null, user_data_free: GLib.DestroyNotify): void;
    add_opcode_fixup(opcodes_sig: string, fixup_cb: MachineOpcodeFixupFunc, user_data: object | null, user_data_free: GLib.DestroyNotify): void;
    add_operator(str: string, name: string): void;
    add_text_handler(handler_cb: MachineTextHandlerFunc, user_data: object | null, user_data_free: GLib.DestroyNotify): void;
    get_stack_size(): number;
    opcode_func_new(func_name: string): Opcode;
    opcode_to_string(opcode: Opcode): string;
    opcodes_to_string(opcodes: Stack): string;
    parse(text: string, text_len: number): Stack;
    parse_full(text: string, text_len: number, flags: MachineParseFlags): Stack;
    run(opcodes: Stack, exec_data: object | null): [boolean, boolean];
    set_debug_flags(flags: MachineDebugFlags): void;
    set_stack_size(stack_size: number): void;
    stack_pop(stack: Stack): Opcode;
    stack_push(stack: Stack, opcode: Opcode): void;
    stack_push_integer(stack: Stack, val: number): void;
    stack_push_steal(stack: Stack, opcode: Opcode): void;
    stack_push_text(stack: Stack, str: string): void;
    stack_push_text_static(stack: Stack, str: string): void;
    stack_push_text_steal(stack: Stack, str: string): void;
}
export class Node  {
    constructor(config?: properties);
    _export(flags: NodeExportFlags): string;
    get_attr(name: string): string;
    get_attr_as_uint(name: string): number;
    get_child(): Node;
    get_children(): Node[];
    get_data(key: string): GLib.Bytes;
    get_depth(): number;
    get_element(): string;
    get_next(): Node;
    get_parent(): Node;
    get_root(): Node;
    get_tail(): string;
    get_text(): string;
    get_text_as_uint(): number;
    query(xpath: string, limit: number): Node[];
    query_attr(xpath: string, name: string): string;
    query_attr_as_uint(xpath: string, name: string): number;
    query_export(xpath: string): string;
    query_first(xpath: string): Node;
    query_first_full(query: Query): Node;
    query_full(query: Query): Node[];
    query_text(xpath: string): string;
    query_text_as_uint(xpath: string): number;
    set_data(key: string, data: GLib.Bytes): void;
    transmogrify(func_text: NodeTransmogrifyFunc, func_tail: NodeTransmogrifyFunc, user_data: object | null): boolean;
}
export class Query extends GObject.Object {
    constructor(config?: properties);
    static new_full(silo: Silo, xpath: string, flags: QueryFlags): Query;
    bind_str(idx: number, str: string): boolean;
    bind_val(idx: number, val: number): boolean;
    get_limit(): number;
    get_xpath(): string;
    set_limit(limit: number): void;
}
export class Silo extends GObject.Object {
    constructor(config?: properties);
    guid: string;
    readonly valid: boolean;static new_from_xml(xml: string): Silo;
    _export(flags: NodeExportFlags): string;
    export_file(file: Gio.File, flags: NodeExportFlags, cancellable: Gio.Cancellable | null): boolean;
    get_bytes(): GLib.Bytes;
    get_guid(): string;
    get_profile_string(): string;
    get_root(): Node;
    get_size(): number;
    invalidate(): void;
    is_valid(): boolean;
    load_from_bytes(blob: GLib.Bytes, flags: SiloLoadFlags): boolean;
    load_from_file(file: Gio.File, flags: SiloLoadFlags, cancellable: Gio.Cancellable | null): boolean;
    query(xpath: string, limit: number): Node[];
    query_build_index(xpath: string, attr: string | null): boolean;
    query_first(xpath: string): Node;
    save_to_file(file: Gio.File, cancellable: Gio.Cancellable | null): boolean;
    set_profile_flags(profile_flags: SiloProfileFlags): void;
    to_string(): string;
    watch_file(file: Gio.File, cancellable: Gio.Cancellable | null): boolean;
}
export class Opcode  {
    constructor(config?: properties);
    static func_new(func: number): Opcode;
    static integer_new(val: number): Opcode;
    static text_new(str: string): Opcode;
    static text_new_static(str: string): Opcode;
    static text_new_steal(str: string): Opcode;
    cmp_str(): boolean;
    cmp_val(): boolean;
    get_kind(): OpcodeKind;
    get_str(): string;
    get_val(): number;
    ref(): Opcode;
    to_string(): string;
    unref(): void;
    static kind_from_string(str: string): OpcodeKind;
    static kind_to_string(kind: OpcodeKind): string;
}
export class Stack  {
    constructor(config?: properties);
    pop(): Opcode;
    push(opcode: Opcode): boolean;
    push_steal(opcode: Opcode): boolean;
    to_string(): string;
}