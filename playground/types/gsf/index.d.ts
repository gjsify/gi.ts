
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as libxml2 from "libxml2";
import * as Gsf from "gsf";
/**
 * gsf.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type OpenPkgIter = (opkg: Input, rel: OpenPkgRel, user_data: object | null) => void;
export type XMLInExtDtor = (xin: XMLIn, old_state: object | null) => void;
export type XMLInUnknownFunc = (xin: XMLIn, elem: libxml2.Char, attrs: libxml2.Char) => boolean;
export type XMLProbeFunc = (name: libxml2.Char, prefix: libxml2.Char, URI: libxml2.Char, nb_namespaces: number, namespaces: libxml2.Char, nb_attributes: number, nb_defaulted: number, attributes: libxml2.Char) => boolean;
export const META_NAME_BYTE_COUNT: string;
export const META_NAME_CASE_SENSITIVE: string;
export const META_NAME_CATEGORY: string;
export const META_NAME_CELL_COUNT: string;
export const META_NAME_CHARACTER_COUNT: string;
export const META_NAME_CODEPAGE: string;
export const META_NAME_COMPANY: string;
export const META_NAME_CREATOR: string;
export const META_NAME_DATE_CREATED: string;
export const META_NAME_DATE_MODIFIED: string;
export const META_NAME_DESCRIPTION: string;
export const META_NAME_DICTIONARY: string;
export const META_NAME_DOCUMENT_PARTS: string;
export const META_NAME_EDITING_DURATION: string;
export const META_NAME_GENERATOR: string;
export const META_NAME_HEADING_PAIRS: string;
export const META_NAME_HIDDEN_SLIDE_COUNT: string;
export const META_NAME_IMAGE_COUNT: string;
export const META_NAME_INITIAL_CREATOR: string;
export const META_NAME_KEYWORD: string;
export const META_NAME_KEYWORDS: string;
export const META_NAME_LANGUAGE: string;
export const META_NAME_LAST_PRINTED: string;
export const META_NAME_LAST_SAVED_BY: string;
export const META_NAME_LINE_COUNT: string;
export const META_NAME_LINKS_DIRTY: string;
export const META_NAME_LOCALE_SYSTEM_DEFAULT: string;
export const META_NAME_MANAGER: string;
export const META_NAME_MM_CLIP_COUNT: string;
export const META_NAME_MSOLE_UNKNOWN_17: string;
export const META_NAME_MSOLE_UNKNOWN_18: string;
export const META_NAME_MSOLE_UNKNOWN_19: string;
export const META_NAME_MSOLE_UNKNOWN_20: string;
export const META_NAME_MSOLE_UNKNOWN_21: string;
export const META_NAME_MSOLE_UNKNOWN_22: string;
export const META_NAME_MSOLE_UNKNOWN_23: string;
export const META_NAME_NOTE_COUNT: string;
export const META_NAME_OBJECT_COUNT: string;
export const META_NAME_PAGE_COUNT: string;
export const META_NAME_PARAGRAPH_COUNT: string;
export const META_NAME_PRESENTATION_FORMAT: string;
export const META_NAME_PRINTED_BY: string;
export const META_NAME_PRINT_DATE: string;
export const META_NAME_REVISION_COUNT: string;
export const META_NAME_SCALE: string;
export const META_NAME_SECURITY: string;
export const META_NAME_SLIDE_COUNT: string;
export const META_NAME_SPREADSHEET_COUNT: string;
export const META_NAME_SUBJECT: string;
export const META_NAME_TABLE_COUNT: string;
export const META_NAME_TEMPLATE: string;
export const META_NAME_THUMBNAIL: string;
export const META_NAME_TITLE: string;
export const META_NAME_WORD_COUNT: string;
export const PARAM_STATIC: number;
/**
 * Decodes a chunk of base64 encoded data from @data back into @data.
 */
export function base64_decode_simple(data: number[], len: number): number;
/**
 * Decodes a chunk of base64 encoded data
 */
export function base64_decode_step(_in: number[], len: number, out: number[], state: number, save: number): [number, number,number];
/**
 * This funcion should be called to when finished encoding everything, to
 * flush off the last little bit.
 */
export function base64_encode_close(_in: number[], inlen: number, break_lines: boolean, out: number[], state: number, save: number): [number, number,number];
/**
 * Encodes data from @data back into @data using base64 encoding.
 */
export function base64_encode_simple(data: number[], len: number): number;
/**
 * Performs an 'encode step', only encodes blocks of 3 characters from @i
 * n into
 * the output @out at a time, saves left-over state in @state and @save
 * (initialise to 0 on first invocation).
 */
export function base64_encode_step(_in: number[], len: number, break_lines: boolean, out: number[], state: number, save: number): [number, number,number];
/**
 * 
 */
export function debug_flag(flag: string): boolean;
/**
 * A debugging utility to dump the content of @meta via g_print
 */
export function doc_meta_dump(meta: DocMetaData): void;
/**
 * 
 */
export function error_quark(): GLib.Quark;
/**
 * Extracts the extension from the end of a filename (the part after the 
 * final
 * '.' in the filename).
 */
export function extension_pointer(path: string): string;
/**
 * A utility wrapper to make sure filenames are valid utf8.
 * Caller must g_free the result.
 */
export function filename_to_utf8(filename: string, quoted: boolean): string;
/**
 * Initializes the GSF library
 */
export function init(): void;
/**
 * Initializes the GSF library and associates it with a type module @mod.
 */
export function init_dynamic(module: GObject.TypeModule): void;
/**
 * Interpret binary data as a double in little endian order.
 */
export function le_get_double(p: object | null): number;
/**
 * Interpret binary data as a float in little endian order.
 */
export function le_get_float(p: object | null): number;
/**
 * Interpret binary data as a guint64 (8 byte unsigned integer type) in l
 * ittle
 * endian order.
 */
export function le_get_guint64(p: object | null): number;
/**
 * Store a value of type double in memory in little endian order
 */
export function le_set_double(p: object | null, d: number): void;
/**
 * Store a value of type float in memory in little endian order.
 */
export function le_set_float(p: object | null, f: number): void;
/**
 * Dump @len bytes from the memory location given by @ptr.
 */
export function mem_dump(ptr: number, len: number): void;
/**
 * 
 */
export function msole_codepage_to_lid(codepage: number): number;
/**
 * 
 */
export function msole_iconv_win_codepage(): number;
/**
 * Decompresses an LZ compressed stream.
 */
export function msole_inflate(input: Input, offset: gsf_off_t): number[];
/**
 * 
 */
export function msole_language_for_lid(lid: number): string;
/**
 * 
 */
export function msole_lid_for_language(lang: string | null): number;
/**
 * 
 */
export function msole_lid_to_codepage(lid: number): number;
/**
 * 
 */
export function msole_lid_to_codepage_str(lid: number): string;
/**
 * 
 */
export function odf_get_ns(): XMLInNS;
/**
 * Gives the ODF version used by libgsf when writing Open Document files.
 */
export function odf_get_version(): number;
/**
 * Gives the ODF version used by libgsf when writing Open Document files.
 */
export function odf_get_version_string(): string;
/**
 * 
 */
export function open_pkg_error_id(): number;
/**
 * New in 1.14.9
 * Walks each relationship associated with @opkg and calls @func with @us
 * er_data.
 */
export function open_pkg_foreach_rel(opkg: Input, func: OpenPkgIter, user_data: object | null): void;
/**
 * 
 */
export function open_pkg_open_rel(opkg: Input, rel: OpenPkgRel): Input;
/**
 * New in 1.14.7
 * Open @opkg's relation @id
 */
export function open_pkg_open_rel_by_id(opkg: Input, id: string): Input;
/**
 * New in 1.14.9
 * Open one of @opkg's relationships with type=@type.
 */
export function open_pkg_open_rel_by_type(opkg: Input, type: string): Input;
/**
 * Convenience function to parse a related part.
 */
export function open_pkg_parse_rel_by_id(xin: XMLIn, id: string, dtd: XMLInNode, ns: XMLInNS): GLib.Error;
/**
 * 
 */
export function property_settings_find(name: string, params: GObject.Parameter[], n_params: number): GObject.Parameter;
/**
 * 
 */
export function property_settings_free(params: GObject.Parameter[], n_params: number): void;
/**
 * De-intializes the GSF library
 * Currently does nothing.
 */
export function shutdown(): void;
/**
 * De-intializes the GSF library from a type module.
 * Currently does nothing.
 */
export function shutdown_dynamic(module: GObject.TypeModule): void;
/**
 * 
 */
export function value_get_docprop_varray(value: GObject.Value): GObject.ValueArray;
/**
 * This function returns a pointer to the GsfDocPropVector structure in @
 * value.
 * No additional references are created.
 */
export function value_get_docprop_vector(value: GObject.Value): DocPropVector;
/**
 * Decompresses VBA stream.
 */
export function vba_inflate(input: Input, offset: gsf_off_t, size: number, add_null_terminator: boolean): number;
/**
 * Dumps the document @cur into @output.
 */
export function xmlDocFormatDump(output: Output, cur: libxml2.Doc, encoding: string | null, format: boolean): number;
/**
 * Try to parse @str as a value of type @t into @res.
 */
export function xml_gvalue_from_str(res: GObject.Value, t: GType, str: string): boolean;
/**
 * 
 */
export function xml_probe(input: Input, func: XMLProbeFunc): boolean;
export enum ClipFormat {
    WINDOWS_CLIPBOARD = -1,
    MACINTOSH_CLIPBOARD = -2,
    GUID = -3,
    NO_DATA = 0,
    CLIPBOARD_FORMAT_NAME = 1,
    UNKNOWN = 2,
}
export enum ClipFormatWindows {
    ERROR = -1,
    UNKNOWN = -2,
    METAFILE = 3,
    DIB = 8,
    ENHANCED_METAFILE = 14,
}
export enum Error {
    OUT_OF_MEMORY = 0,
    INVALID_DATA = 1,
}
export enum OutputCsvQuotingMode {
    NEVER = 0,
    AUTO = 1,
    ALWAYS = 2,
}
export enum XMLContent {
    NO_CONTENT = 0,
    CONTENT = 1,
    SHARED_CONTENT = 2,
    Gjs_2ND = 3,
}
export enum ZipCompressionMethod {
    STORED = 0,
    SHRUNK = 1,
    REDUCEDX1 = 2,
    REDUCEDX2 = 3,
    REDUCEDX3 = 4,
    REDUCEDX4 = 5,
    IMPLODED = 6,
    TOKENIZED = 7,
    DEFLATED = 8,
    DEFLATED_BETTER = 9,
    IMPLODED_BETTER = 10,
}
export type gsf_off_t = number;
export class Blob extends GObject.Object {
    constructor(config?: properties);
    get_size(): number;
    peek_data(): object | null;
}
export class ClipData extends GObject.Object {
    constructor(config?: properties);
    get_data_blob(): Blob;
    get_format(): ClipFormat;
    get_windows_clipboard_format(): ClipFormatWindows;
    peek_real_data(ret_size: number): object | null;
}
export class DocMetaData extends GObject.Object {
    constructor(config?: properties);
    foreach(func: GLib.HFunc, user_data: object | null): void;
    insert(name: string, value: GObject.Value): void;
    lookup(name: string): DocProp | null;
    odf_subtree(doc: XMLIn): void;
    read_from_msole(_in: Input): GLib.Error;
    read_from_odf(input: Input): GLib.Error;
    remove(name: string): void;
    size(): number;
    steal(name: string): DocProp | null;
    store(prop: DocProp): void;
    write_to_msole(out: Output, doc_not_component: boolean): boolean;
    write_to_odf(output: XMLOut): boolean;
}
export class DocPropVector extends GObject.Object {
    constructor(config?: properties);
    append(value: GObject.Value): void;
    as_string(): string;
}
export class Infile  {
    constructor(config?: properties);
    child_by_aname(names: string[]): Input;
    child_by_index(i: number): Input;
    child_by_name(name: string): Input;
    name_by_index(i: number): string | null;
    num_children(): number;
}
export class InfileMSOle extends Infile {
    constructor(config?: properties);
    get_class_id(res: number): boolean;
}
export class InfileMSVBA extends Infile {
    constructor(config?: properties);
    get_modules(): GLib.HashTable | null;
    steal_modules(): GLib.HashTable | null;
}
export class InfileStdio extends Infile {
    constructor(config?: properties);
}
export class InfileTar extends Infile {
    constructor(config?: properties);
    source: Input;
}
export class InfileZip extends Infile {
    constructor(config?: properties);
    readonly compression_level: number;
    internal_parent: InfileZip;
    source: Input;
}
export class Input extends GObject.Object {
    constructor(config?: properties);
    readonly modtime: GLib.DateTime;
    readonly position: number;static mmap_new(filename: string): Input;
    container(): Infile | null;
    copy(output: Output): boolean;
    dump(dump_as_hex: boolean): void;
    dup(): Input | null;
    eof(): boolean;
    find_vba(): InfileMSVBA | null;
    get_modtime(): GLib.DateTime;
    name(): string;
    read0(num_bytes: number): [number[], number];
    remaining(): gsf_off_t;
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean;
    seek_emulate(pos: gsf_off_t): boolean;
    set_container(container: Infile | null): boolean;
    set_modtime(modtime: GLib.DateTime | null): boolean;
    set_modtime_from_stat(st: object | null): boolean;
    set_name(name: string | null): boolean;
    set_name_from_filename(filename: string): boolean;
    set_size(size: gsf_off_t): boolean;
    sibling(name: string): Input;
    size(): gsf_off_t;
    tell(): gsf_off_t;
    uncompress(): Input;
    vfunc_Dup(): Input | null;
    vfunc_OpenSibling(name: string): Input;
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean;
    static error_id(): GLib.Quark;
}
export class InputGZip extends Input {
    constructor(config?: properties);
    raw: boolean;
    source: Input;
    uncompressed_size: number;
}
export class InputGio extends Input {
    constructor(config?: properties);
    static new_for_path(path: string): Input;
    static new_for_uri(uri: string): Input;
}
export class InputHTTP extends Input {
    constructor(config?: properties);
    content_type: string;
    url: string;
    get_content_type(): string;
    get_url(): string;
}
export class InputMemory extends Input {
    constructor(config?: properties);
    static new_clone(buf: number[], length: gsf_off_t): Input;
    static new_from_bzip(source: Input): Input;
    static new_from_iochannel(channel: GLib.IOChannel): Input;
}
export class InputProxy extends Input {
    constructor(config?: properties);
    static new_section(source: Input, offset: gsf_off_t, size: gsf_off_t): Input;
}
export class InputStdio extends Input {
    constructor(config?: properties);
    static new_FILE(filename: string, file: object | null, keep_open: boolean): Input;
}
export class InputTextline extends Input {
    constructor(config?: properties);
    ascii_gets(): number[] | null;
    utf8_gets(): number[] | null;
}
export class ODFOut  {
    constructor(config?: properties);
    odf_version: number;
    readonly base: XMLOut;
    readonly priv: object;
    get_version(): number;
    get_version_string(): string;
}
export class Outfile  {
    constructor(config?: properties);
    new_child(name: string, is_dir: boolean): Output;
    open_pkg_add_rel(name: string, content_type: string, parent: Outfile, type: string): Output;
}
export class OutfileMSOle extends Outfile {
    constructor(config?: properties);
    big_block_size: number;
    sink: Output;
    small_block_size: number;static new_full(sink: Output, bb_size: number, sb_size: number): Outfile;
    set_class_id(clsid: number[]): boolean;
}
export class OutfileOpenPkg extends Outfile {
    constructor(config?: properties);
    content_type: string;
    is_dir: boolean;
    sink: Outfile;
    add_extern_rel(target: string, content_type: string): string;
    relate(parent: OutfileOpenPkg, type: string): string;
    set_content_type(content_type: string): void;
    set_sink(sink: Output): void;
}
export class OutfileStdio extends Outfile {
    constructor(config?: properties);
    static new_full(root: string, err: GLib.Error | null, first_property_name: string, ___: any): Outfile;
    static new_valist(root: string, err: GLib.Error | null, first_property_name: string, var_args: any): Outfile;
}
export class OutfileZip extends Outfile {
    constructor(config?: properties);
    compression_level: number;
    deflate_level: number;
    entry_name: string;
    sink: Output;
    zip64: number;
    set_compression_method(method: ZipCompressionMethod): boolean;
}
export class Output  {
    constructor(config?: properties);
    modtime: GLib.DateTime;
    readonly position: number;
    readonly g_object: GObject.Object;
    readonly cur_size: gsf_off_t;
    readonly cur_offset: gsf_off_t;
    readonly wrapped_by: GObject.Object;
    readonly err: GLib.Error;
    readonly printf_buf: string;
    readonly printf_buf_size: number;
    close(): boolean;
    container(): Outfile | null;
    error(): GLib.Error | null;
    get_modtime(): GLib.DateTime | null;
    is_closed(): boolean;
    name(): string | null;
    puts(line: string): boolean;
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean;
    set_container(container: Outfile | null): boolean;
    set_modtime(modtime: GLib.DateTime | null): boolean;
    set_name(name: string | null): boolean;
    set_name_from_filename(filename: string | null): boolean;
    size(): gsf_off_t;
    tell(): gsf_off_t;
    write(num_bytes: number, data: number[]): boolean;
    static error_id(): GLib.Quark;
    static unwrap(wrapper: GObject.Object, wrapee: Output): boolean;
    static wrap(wrapper: GObject.Object, wrapee: Output): boolean;
}
export class OutputBzip extends Output {
    constructor(config?: properties);
}
export class OutputCsv  {
    constructor(config?: properties);
    eol: string;
    quote: string;
    quoting_mode: OutputCsvQuotingMode;
    quoting_on_whitespace: boolean;
    quoting_triggers: string;
    separator: string;
    sink: Output;
    readonly output: Output;
    readonly quote_len: number;
    readonly eol_len: number;
    readonly separator_len: number;
    readonly fields_on_line: boolean;
    readonly buf: GLib.String;
    write_eol(): boolean;
    write_field(field: string, len: number): boolean;
}
export class OutputGZip extends Output {
    constructor(config?: properties);
    raw: boolean;
    sink: Output;
}
export class OutputGio extends Output {
    constructor(config?: properties);
    static new_for_path(path: string): Output;
    static new_for_uri(uri: string): Output;
}
export class OutputIOChannel extends Output {
    constructor(config?: properties);
}
export class OutputIconv extends Output {
    constructor(config?: properties);
    fallback: string;
    input_charset: string;
    output_charset: string;
    sink: Output;
}
export class OutputMemory extends Output {
    constructor(config?: properties);
    get_bytes(): number[] | null;
}
export class OutputStdio extends Output {
    constructor(config?: properties);
    static new_FILE(filename: string, file: object | null, keep_open: boolean): Output;
    static new_full(filename: string, err: GLib.Error | null, first_property_name: string, ___: any): Output;
    static new_valist(filename: string, err: GLib.Error, first_property_name: string, var_args: any): Output;
}
export class SharedMemory extends GObject.Object {
    constructor(config?: properties);
    static mmapped_new(buf: object | null, size: gsf_off_t): SharedMemory;
}
export class StructuredBlob  {
    constructor(config?: properties);
    write(container: Outfile): boolean;
    static read(input: Input): StructuredBlob;
}
export class XMLOut extends GObject.Object {
    constructor(config?: properties);
    pretty_print: boolean;
    sink: Output;
    add_base64(id: string | null, data: number[], len: number): void;
    add_bool(id: string | null, val: boolean): void;
    add_color(id: string | null, r: number, g: number, b: number): void;
    add_cstr(id: string | null, val_utf8: string | null): void;
    add_cstr_unchecked(id: string | null, val_utf8: string | null): void;
    add_enum(id: string | null, etype: GType, val: number): void;
    add_float(id: string | null, val: number, precision: number): void;
    add_gvalue(id: string | null, val: GObject.Value): void;
    add_int(id: string | null, val: number): void;
    add_uint(id: string | null, val: number): void;
    end_element(): string;
    get_output(): Output | null;
    get_pretty_print(): boolean;
    set_doc_type(type: string): void;
    set_pretty_print(pp: boolean): boolean;
    simple_element(id: string, content: string): void;
    simple_float_element(id: string, val: number, precision: number): void;
    simple_int_element(id: string, val: number): void;
    start_element(id: string): void;
}
export class BlobPrivate  {
    constructor(config?: properties);
}
export class ClipDataPrivate  {
    constructor(config?: properties);
}
export class DocProp  {
    constructor(config?: properties);
    dump(): void;
    free(): void;
    get_link(): string | null;
    get_name(): string;
    get_val(): GObject.Value;
    set_link(link: string | null): void;
    set_val(val: GObject.Value): void;
    swap_val(val: GObject.Value): GObject.Value;
}
export class MSOleSortingKey  {
    constructor(config?: properties);
    cmp(b: MSOleSortingKey): number;
    free(): void;
}
export class OpenPkgRel  {
    constructor(config?: properties);
    get_target(): string;
    get_type(): string;
    is_extern(): boolean;
}
export class OpenPkgRels  {
    constructor(config?: properties);
}
export class Timestamp  {
    constructor(config?: properties);
    as_string(): string;
    copy(): Timestamp;
    equal(b: Timestamp): boolean;
    free(): void;
    hash(): number;
    load_from_string(spec: string): number;
    set_time(t: number): void;
    to_value(value: GObject.Value): void;
}
export class XMLBlob  {
    constructor(config?: properties);
}
export class XMLIn  {
    constructor(config?: properties);
    user_state: object;
    content: GLib.String;
    doc: XMLInDoc;
    node: XMLInNode;
    readonly node_stack: string[];
    check_ns(str: string, ns_id: number): string | null;
    get_input(): Input;
    namecmp(str: string, ns_id: number, name: string): boolean;
    push_state(doc: XMLInDoc, new_state: object | null, dtor: XMLInExtDtor, attrs: string[]): void;
    set_silent_unknowns(silent: boolean): void;
}
export class XMLInDoc  {
    constructor(config?: properties);
    add_nodes(nodes: XMLInNode[]): void;
    free(): void;
    parse(input: Input, user_state: object | null): boolean;
    set_unknown_handler(handler: XMLInUnknownFunc): void;
}
export class XMLInNS  {
    constructor(config?: properties);
    uri: string;
    ns_id: number;
}
export class XMLInNode  {
    constructor(config?: properties);
    id: string;
    ns_id: number;
    name: string;
    parent_id: string;
    has_content: XMLContent;
    check_children_for_ns: number;
    share_children_with_parent: number;
}