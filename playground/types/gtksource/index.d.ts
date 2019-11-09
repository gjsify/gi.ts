
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gdk from "gdk";
import * as Gtk from "gtk";
import * as GtkSource from "gtksource";
import * as GdkPixbuf from "gdkpixbuf";
import * as cairo from "cairo";
import * as Pango from "pango";
/**
 * gtksource.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
/**
 * 
 */
export function completion_error_quark(): GLib.Quark;
/**
 * Gets all encodings.
 */
export function encoding_get_all(): string[];
/**
 * Gets the #GtkSourceEncoding for the current locale. See also g_get_cha
 * rset().
 */
export function encoding_get_current(): Encoding;
/**
 * Gets the list of default candidate encodings to try when loading a fil
 * e. See
 * gtk_source_file_loader_set_candidate_encodings().
 * This function returns a different list depending on the current locale
 *  (i.e.
 * language, country and default encoding). The UTF-8 encoding and the cu
 * rrent
 * locale encoding are guaranteed to be present in the returned list.
 */
export function encoding_get_default_candidates(): string[];
/**
 * Gets a #GtkSourceEncoding from a character set such as "UTF-8" or
 * "ISO-8859-1".
 */
export function encoding_get_from_charset(charset: string): Encoding | null;
/**
 * 
 */
export function encoding_get_utf8(): Encoding;
/**
 * 
 */
export function file_loader_error_quark(): GLib.Quark;
/**
 * 
 */
export function file_saver_error_quark(): GLib.Quark;
/**
 * Use this function to escape the following characters: `\n`, `\r`, `\t`
 *  and `\`.
 * For a regular expression search, use g_regex_escape_string() instead.
 * One possible use case is to take the #GtkTextBuffer's selection and pu
 * t it in a
 * search entry. The selection can contain tabulations, newlines, etc. So
 *  it's
 * better to escape those special characters to better fit in the search 
 * entry.
 * See also: gtk_source_utils_unescape_search_text().
 * <warning>
 * Warning: the escape and unescape functions are not reciprocal! For exa
 * mple,
 * escape (unescape (\)) = \\. So avoid cycles such as: search entry -> u
 * nescape
 * -> search settings -> escape -> search entry. The original search entr
 * y text
 * may be modified.
 * </warning>
 */
export function utils_escape_search_text(text: string): string;
/**
 * Use this function before gtk_source_search_settings_set_search_text(),
 *  to
 * unescape the following sequences of characters: `\n`, `\r`, `\t` and `
 * \\`.
 * The purpose is to easily write those characters in a search entry.
 * Note that unescaping the search text is not needed for regular express
 * ion
 * searches.
 * See also: gtk_source_utils_escape_search_text().
 */
export function utils_unescape_search_text(text: string): string;
export enum BackgroundPatternType {
    NONE = 0,
    GRID = 1,
}
export enum BracketMatchType {
    NONE = 0,
    OUT_OF_RANGE = 1,
    NOT_FOUND = 2,
    FOUND = 3,
}
export enum ChangeCaseType {
    LOWER = 0,
    UPPER = 1,
    TOGGLE = 2,
    TITLE = 3,
}
export enum CompletionError {
    ALREADY_BOUND = 0,
    NOT_BOUND = 1,
}
export enum CompressionType {
    NONE = 0,
    GZIP = 1,
}
export enum FileLoaderError {
    TOO_BIG = 0,
    ENCODING_AUTO_DETECTION_FAILED = 1,
    CONVERSION_FALLBACK = 2,
}
export enum FileSaverError {
    INVALID_CHARS = 0,
    EXTERNALLY_MODIFIED = 1,
}
export enum GutterRendererAlignmentMode {
    CELL = 0,
    FIRST = 1,
    LAST = 2,
}
export enum NewlineType {
    LF = 0,
    CR = 1,
    CR_LF = 2,
}
export enum SmartHomeEndType {
    DISABLED = 0,
    BEFORE = 1,
    AFTER = 2,
    ALWAYS = 3,
}
export enum ViewGutterPosition {
    LINES = -30,
    MARKS = -20,
}
export enum CompletionActivation {
    NONE = 0,
    INTERACTIVE = 1,
    USER_REQUESTED = 2,
}
export enum DrawSpacesFlags {
    SPACE = 1,
    TAB = 2,
    NEWLINE = 4,
    NBSP = 8,
    LEADING = 16,
    TEXT = 32,
    TRAILING = 64,
    ALL = 127,
}
export enum FileSaverFlags {
    NONE = 0,
    IGNORE_INVALID_CHARS = 1,
    IGNORE_MODIFICATION_TIME = 2,
    CREATE_BACKUP = 4,
}
export enum GutterRendererState {
    NORMAL = 0,
    CURSOR = 1,
    PRELIT = 2,
    SELECTED = 4,
}
export enum SortFlags {
    NONE = 0,
    CASE_SENSITIVE = 1,
    REVERSE_ORDER = 2,
    REMOVE_DUPLICATES = 4,
}
export enum SpaceLocationFlags {
    NONE = 0,
    LEADING = 1,
    INSIDE_TEXT = 2,
    TRAILING = 4,
    ALL = 7,
}
export enum SpaceTypeFlags {
    NONE = 0,
    SPACE = 1,
    TAB = 2,
    NEWLINE = 4,
    NBSP = 8,
    ALL = 15,
}
export class Buffer extends Gtk.TextBuffer {
    constructor(config?: properties);
    highlight_matching_brackets: boolean;
    highlight_syntax: boolean;
    implicit_trailing_newline: boolean;
    language: Language;
    max_undo_levels: number;
    style_scheme: StyleScheme;
    undo_manager: UndoManager;static new_with_language(language: Language): Buffer;
    backward_iter_to_source_mark(iter: Gtk.TextIter, category: string | null): boolean;
    begin_not_undoable_action(): void;
    can_redo(): boolean;
    can_undo(): boolean;
    change_case(case_type: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void;
    create_source_mark(name: string | null, category: string, where: Gtk.TextIter): Mark;
    end_not_undoable_action(): void;
    ensure_highlight(start: Gtk.TextIter, end: Gtk.TextIter): void;
    forward_iter_to_source_mark(iter: Gtk.TextIter, category: string | null): boolean;
    get_context_classes_at_iter(iter: Gtk.TextIter): string[];
    get_highlight_matching_brackets(): boolean;
    get_highlight_syntax(): boolean;
    get_implicit_trailing_newline(): boolean;
    get_language(): Language | null;
    get_max_undo_levels(): number;
    get_source_marks_at_iter(iter: Gtk.TextIter, category: string | null): string[];
    get_source_marks_at_line(line: number, category: string | null): string[];
    get_style_scheme(): StyleScheme | null;
    get_undo_manager(): UndoManager | null;
    iter_backward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): boolean;
    iter_forward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): boolean;
    iter_has_context_class(iter: Gtk.TextIter, context_class: string): boolean;
    join_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
    redo(): void;
    remove_source_marks(start: Gtk.TextIter, end: Gtk.TextIter, category: string | null): void;
    set_highlight_matching_brackets(highlight: boolean): void;
    set_highlight_syntax(highlight: boolean): void;
    set_implicit_trailing_newline(implicit_trailing_newline: boolean): void;
    set_language(language: Language | null): void;
    set_max_undo_levels(max_undo_levels: number): void;
    set_style_scheme(scheme: StyleScheme | null): void;
    set_undo_manager(manager: UndoManager | null): void;
    sort_lines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void;
    undo(): void;
    vfunc_bracket_matched(iter: Gtk.TextIter, state: BracketMatchType): void;
    vfunc_redo(): void;
    vfunc_undo(): void;
}
export class Completion  {
    constructor(config?: properties);
    accelerators: number;
    auto_complete_delay: number;
    proposal_page_size: number;
    provider_page_size: number;
    remember_info_visibility: boolean;
    select_on_show: boolean;
    show_headers: boolean;
    show_icons: boolean;
    view: View;
    readonly priv: CompletionPrivate;
    add_provider(provider: CompletionProvider): boolean;
    block_interactive(): void;
    create_context(position: Gtk.TextIter | null): CompletionContext;
    get_info_window(): CompletionInfo;
    get_providers(): GLib.List;
    get_view(): View | null;
    hide(): void;
    move_window(iter: Gtk.TextIter): void;
    remove_provider(provider: CompletionProvider): boolean;
    show(providers: GLib.List | null, context: CompletionContext): boolean;
    unblock_interactive(): void;
}
export class CompletionContext  {
    constructor(config?: properties);
    activation: CompletionActivation;
    completion: Completion;
    iter: Gtk.TextIter;
    readonly priv: CompletionContextPrivate;
    add_proposals(provider: CompletionProvider, proposals: GLib.List | null, finished: boolean): void;
    get_activation(): CompletionActivation;
    get_iter(): [boolean, Gtk.TextIter];
}
export class CompletionInfo extends Gtk.Window {
    constructor(config?: properties);
    get_widget(): Gtk.Widget;
    move_to_iter(view: Gtk.TextView, iter: Gtk.TextIter | null): void;
    set_widget(widget: Gtk.Widget | null): void;
    vfunc_before_show(): void;
}
export class CompletionItem extends GObject.Object {
    constructor(config?: properties);
    gicon: Gio.Icon;
    icon: GdkPixbuf.Pixbuf;
    icon_name: string;
    info: string;
    label: string;
    markup: string;
    text: string;static new_from_stock(label: string | null, text: string, stock: string, info: string | null): CompletionItem;
    static new_with_markup(markup: string, text: string, icon: GdkPixbuf.Pixbuf | null, info: string | null): CompletionItem;
    set_gicon(gicon: Gio.Icon | null): void;
    set_icon(icon: GdkPixbuf.Pixbuf | null): void;
    set_icon_name(icon_name: string | null): void;
    set_info(info: string | null): void;
    set_label(label: string | null): void;
    set_markup(markup: string | null): void;
    set_text(text: string | null): void;
    static new2(): CompletionItem;
}
export class CompletionWords extends GObject.Object {
    constructor(config?: properties);
    activation: CompletionActivation;
    icon: GdkPixbuf.Pixbuf;
    interactive_delay: number;
    minimum_word_size: number;
    name: string;
    priority: number;
    proposals_batch_size: number;
    scan_batch_size: number;
    register(buffer: Gtk.TextBuffer): void;
    unregister(buffer: Gtk.TextBuffer): void;
}
export class File extends GObject.Object {
    constructor(config?: properties);
    readonly compression_type: CompressionType;
    readonly encoding: Encoding;
    location: Gio.File;
    readonly newline_type: NewlineType;
    readonly read_only: boolean;
    check_file_on_disk(): void;
    get_compression_type(): CompressionType;
    get_encoding(): Encoding;
    get_location(): Gio.File;
    get_newline_type(): NewlineType;
    is_deleted(): boolean;
    is_externally_modified(): boolean;
    is_local(): boolean;
    is_readonly(): boolean;
    set_location(location: Gio.File | null): void;
}
export class FileLoader extends GObject.Object {
    constructor(config?: properties);
    buffer: Buffer;
    file: File;
    input_stream: Gio.InputStream;
    location: Gio.File;static new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader;
    get_buffer(): Buffer;
    get_compression_type(): CompressionType;
    get_encoding(): Encoding;
    get_file(): File;
    get_input_stream(): Gio.InputStream | null;
    get_location(): Gio.File | null;
    get_newline_type(): NewlineType;
    load_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, progress_callback_data: object | null, progress_callback_notify: GLib.DestroyNotify | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    load_finish(result: Gio.AsyncResult): boolean;
    set_candidate_encodings(candidate_encodings: string[]): void;
}
export class FileSaver extends GObject.Object {
    constructor(config?: properties);
    buffer: Buffer;
    compression_type: CompressionType;
    encoding: Encoding;
    file: File;
    flags: FileSaverFlags;
    location: Gio.File;
    newline_type: NewlineType;static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;
    get_buffer(): Buffer;
    get_compression_type(): CompressionType;
    get_encoding(): Encoding;
    get_file(): File;
    get_flags(): FileSaverFlags;
    get_location(): Gio.File;
    get_newline_type(): NewlineType;
    save_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, progress_callback_data: object | null, progress_callback_notify: GLib.DestroyNotify | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    save_finish(result: Gio.AsyncResult): boolean;
    set_compression_type(compression_type: CompressionType): void;
    set_encoding(encoding: Encoding | null): void;
    set_flags(flags: FileSaverFlags): void;
    set_newline_type(newline_type: NewlineType): void;
}
export class Gutter  {
    constructor(config?: properties);
    view: View;
    window_type: Gtk.TextWindowType;
    xpad: number;
    ypad: number;
    readonly priv: GutterPrivate;
    get_padding(xpad: number, ypad: number): void;
    get_renderer_at_pos(x: number, y: number): GutterRenderer | null;
    get_view(): View;
    get_window(): Gdk.Window;
    get_window_type(): Gtk.TextWindowType;
    insert(renderer: GutterRenderer, position: number): boolean;
    queue_draw(): void;
    remove(renderer: GutterRenderer): void;
    reorder(renderer: GutterRenderer, position: number): void;
    set_padding(xpad: number, ypad: number): void;
}
export class GutterRenderer  {
    constructor(config?: properties);
    alignment_mode: GutterRendererAlignmentMode;
    background_rgba: Gdk.RGBA;
    background_set: boolean;
    size: number;
    readonly view: Gtk.TextView;
    visible: boolean;
    readonly window_type: Gtk.TextWindowType;
    xalign: number;
    xpad: number;
    yalign: number;
    ypad: number;
    readonly priv: GutterRendererPrivate;
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;
    begin(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void;
    draw(cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;
    end(): void;
    get_alignment(): [number | null,number | null];
    get_alignment_mode(): GutterRendererAlignmentMode;
    get_background(): [boolean, Gdk.RGBA | null];
    get_padding(): [number | null,number | null];
    get_size(): number;
    get_view(): Gtk.TextView;
    get_visible(): boolean;
    get_window_type(): Gtk.TextWindowType;
    query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean;
    query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;
    query_tooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean;
    queue_draw(): void;
    set_alignment(xalign: number, yalign: number): void;
    set_alignment_mode(mode: GutterRendererAlignmentMode): void;
    set_background(color: Gdk.RGBA | null): void;
    set_padding(xpad: number, ypad: number): void;
    set_size(size: number): void;
    set_visible(visible: boolean): void;
}
export class GutterRendererPixbuf extends GutterRenderer {
    constructor(config?: properties);
    gicon: Gio.Icon;
    icon_name: string;
    pixbuf: GdkPixbuf.Pixbuf;
    stock_id: string;
    get_gicon(): Gio.Icon;
    get_icon_name(): string;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_stock_id(): string;
    set_gicon(icon: Gio.Icon | null): void;
    set_icon_name(icon_name: string | null): void;
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null): void;
    set_stock_id(stock_id: string | null): void;
}
export class GutterRendererText extends GutterRenderer {
    constructor(config?: properties);
    markup: string;
    text: string;
    measure(text: string): [number | null,number | null];
    measure_markup(markup: string): [number | null,number | null];
    set_markup(markup: string, length: number): void;
    set_text(text: string, length: number): void;
}
export class Language  {
    constructor(config?: properties);
    readonly hidden: boolean;
    readonly id: string;
    readonly name: string;
    readonly section: string;
    readonly priv: LanguagePrivate;
    get_globs(): string[] | null;
    get_hidden(): boolean;
    get_id(): string;
    get_metadata(name: string): string | null;
    get_mime_types(): string[] | null;
    get_name(): string;
    get_section(): string;
    get_style_fallback(style_id: string): string | null;
    get_style_ids(): string[] | null;
    get_style_name(style_id: string): string | null;
}
export class LanguageManager extends GObject.Object {
    constructor(config?: properties);
    readonly language_ids: string[];
    search_path: string[];
    get_language(id: string): Language | null;
    get_language_ids(): string[] | null;
    get_search_path(): string[];
    guess_language(filename: string | null, content_type: string | null): Language | null;
    set_search_path(dirs: string[] | null): void;
    static get_default(): LanguageManager;
}
export class Map extends View {
    constructor(config?: properties);
    font_desc: Pango.FontDescription;
    view: View;
    get_view(): View | null;
    set_view(view: View): void;
}
export class Mark extends Gtk.TextMark {
    constructor(config?: properties);
    category: string;
    get_category(): string;
    next(category: string | null): Mark | null;
    prev(category: string): Mark | null;
}
export class MarkAttributes extends GObject.Object {
    constructor(config?: properties);
    background: Gdk.RGBA;
    gicon: Gio.Icon;
    icon_name: string;
    pixbuf: GdkPixbuf.Pixbuf;
    stock_id: string;
    get_background(): [boolean, Gdk.RGBA];
    get_gicon(): Gio.Icon;
    get_icon_name(): string;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_stock_id(): string;
    get_tooltip_markup(mark: Mark): string;
    get_tooltip_text(mark: Mark): string;
    render_icon(widget: Gtk.Widget, size: number): GdkPixbuf.Pixbuf;
    set_background(background: Gdk.RGBA): void;
    set_gicon(gicon: Gio.Icon): void;
    set_icon_name(icon_name: string): void;
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    set_stock_id(stock_id: string): void;
}
export class PrintCompositor extends GObject.Object {
    constructor(config?: properties);
    body_font_name: string;
    buffer: Buffer;
    footer_font_name: string;
    header_font_name: string;
    highlight_syntax: boolean;
    line_numbers_font_name: string;
    readonly n_pages: number;
    print_footer: boolean;
    print_header: boolean;
    print_line_numbers: number;
    tab_width: number;
    wrap_mode: Gtk.WrapMode;static new_from_view(view: View): PrintCompositor;
    draw_page(context: Gtk.PrintContext, page_nr: number): void;
    get_body_font_name(): string;
    get_bottom_margin(unit: Gtk.Unit): number;
    get_buffer(): Buffer;
    get_footer_font_name(): string;
    get_header_font_name(): string;
    get_highlight_syntax(): boolean;
    get_left_margin(unit: Gtk.Unit): number;
    get_line_numbers_font_name(): string;
    get_n_pages(): number;
    get_pagination_progress(): number;
    get_print_footer(): boolean;
    get_print_header(): boolean;
    get_print_line_numbers(): number;
    get_right_margin(unit: Gtk.Unit): number;
    get_tab_width(): number;
    get_top_margin(unit: Gtk.Unit): number;
    get_wrap_mode(): Gtk.WrapMode;
    paginate(context: Gtk.PrintContext): boolean;
    set_body_font_name(font_name: string): void;
    set_bottom_margin(margin: number, unit: Gtk.Unit): void;
    set_footer_font_name(font_name: string | null): void;
    set_footer_format(separator: boolean, left: string | null, center: string | null, right: string | null): void;
    set_header_font_name(font_name: string | null): void;
    set_header_format(separator: boolean, left: string | null, center: string | null, right: string | null): void;
    set_highlight_syntax(highlight: boolean): void;
    set_left_margin(margin: number, unit: Gtk.Unit): void;
    set_line_numbers_font_name(font_name: string | null): void;
    set_print_footer(print: boolean): void;
    set_print_header(print: boolean): void;
    set_print_line_numbers(interval: number): void;
    set_right_margin(margin: number, unit: Gtk.Unit): void;
    set_tab_width(width: number): void;
    set_top_margin(margin: number, unit: Gtk.Unit): void;
    set_wrap_mode(wrap_mode: Gtk.WrapMode): void;
}
export class Region extends GObject.Object {
    constructor(config?: properties);
    buffer: Gtk.TextBuffer;
    add_region(region_to_add: Region | null): void;
    add_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;
    get_bounds(): [boolean, Gtk.TextIter | null,Gtk.TextIter | null];
    get_buffer(): Gtk.TextBuffer | null;
    get_start_region_iter(): [RegionIter];
    intersect_region(region2: Region | null): Region | null;
    intersect_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): Region | null;
    is_empty(): boolean;
    subtract_region(region_to_subtract: Region | null): void;
    subtract_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;
    to_string(): string | null;
}
export class SearchContext extends GObject.Object {
    constructor(config?: properties);
    buffer: Buffer;
    highlight: boolean;
    match_style: Style;
    readonly occurrences_count: number;
    readonly regex_error: object;
    settings: SearchSettings;
    backward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null,Gtk.TextIter | null];
    backward2(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null,Gtk.TextIter | null,boolean | null];
    backward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    backward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null,Gtk.TextIter | null];
    backward_finish2(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null,Gtk.TextIter | null,boolean | null];
    forward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null,Gtk.TextIter | null];
    forward2(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null,Gtk.TextIter | null,boolean | null];
    forward_async(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    forward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null,Gtk.TextIter | null];
    forward_finish2(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null,Gtk.TextIter | null,boolean | null];
    get_buffer(): Buffer;
    get_highlight(): boolean;
    get_match_style(): Style;
    get_occurrence_position(match_start: Gtk.TextIter, match_end: Gtk.TextIter): number;
    get_occurrences_count(): number;
    get_regex_error(): GLib.Error | null;
    get_settings(): SearchSettings;
    replace(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean;
    replace2(match_start: Gtk.TextIter, match_end: Gtk.TextIter, replace: string, replace_length: number): boolean;
    replace_all(replace: string, replace_length: number): number;
    set_highlight(highlight: boolean): void;
    set_match_style(match_style: Style | null): void;
    set_settings(settings: SearchSettings | null): void;
}
export class SearchSettings extends GObject.Object {
    constructor(config?: properties);
    at_word_boundaries: boolean;
    case_sensitive: boolean;
    regex_enabled: boolean;
    search_text: string;
    wrap_around: boolean;
    get_at_word_boundaries(): boolean;
    get_case_sensitive(): boolean;
    get_regex_enabled(): boolean;
    get_search_text(): string | null;
    get_wrap_around(): boolean;
    set_at_word_boundaries(at_word_boundaries: boolean): void;
    set_case_sensitive(case_sensitive: boolean): void;
    set_regex_enabled(regex_enabled: boolean): void;
    set_search_text(search_text: string | null): void;
    set_wrap_around(wrap_around: boolean): void;
}
export class SpaceDrawer extends GObject.Object {
    constructor(config?: properties);
    enable_matrix: boolean;
    matrix: GLib.Variant;
    bind_matrix_setting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void;
    get_enable_matrix(): boolean;
    get_matrix(): GLib.Variant;
    get_types_for_locations(locations: SpaceLocationFlags): SpaceTypeFlags;
    set_enable_matrix(enable_matrix: boolean): void;
    set_matrix(matrix: GLib.Variant | null): void;
    set_types_for_locations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void;
}
export class Style  {
    constructor(config?: properties);
    background: string;
    background_set: boolean;
    bold: boolean;
    bold_set: boolean;
    foreground: string;
    foreground_set: boolean;
    italic: boolean;
    italic_set: boolean;
    line_background: string;
    line_background_set: boolean;
    pango_underline: Pango.Underline;
    scale: string;
    scale_set: boolean;
    strikethrough: boolean;
    strikethrough_set: boolean;
    underline: boolean;
    underline_color: string;
    underline_color_set: boolean;
    underline_set: boolean;
    apply(tag: Gtk.TextTag): void;
    copy(): Style;
}
export class StyleScheme  {
    constructor(config?: properties);
    readonly description: string;
    readonly filename: string;
    id: string;
    readonly name: string;
    readonly base: GObject.Object;
    readonly priv: StyleSchemePrivate;
    get_authors(): string[] | null;
    get_description(): string | null;
    get_filename(): string | null;
    get_id(): string;
    get_name(): string;
    get_style(style_id: string): Style | null;
}
export class StyleSchemeChooserButton extends Gtk.Button {
    constructor(config?: properties);
}
export class StyleSchemeChooserWidget extends Gtk.Bin {
    constructor(config?: properties);
}
export class StyleSchemeManager extends GObject.Object {
    constructor(config?: properties);
    readonly scheme_ids: string[];
    search_path: string[];
    append_search_path(path: string): void;
    force_rescan(): void;
    get_scheme(scheme_id: string): StyleScheme;
    get_scheme_ids(): string[] | null;
    get_search_path(): string[];
    prepend_search_path(path: string): void;
    set_search_path(path: string[] | null): void;
    static get_default(): StyleSchemeManager;
}
export class Tag extends Gtk.TextTag {
    constructor(config?: properties);
    draw_spaces: boolean;
    draw_spaces_set: boolean;
}
export class View extends Gtk.TextView {
    constructor(config?: properties);
    auto_indent: boolean;
    background_pattern: BackgroundPatternType;
    readonly completion: Completion;
    draw_spaces: DrawSpacesFlags;
    highlight_current_line: boolean;
    indent_on_tab: boolean;
    indent_width: number;
    insert_spaces_instead_of_tabs: boolean;
    right_margin_position: number;
    show_line_marks: boolean;
    show_line_numbers: boolean;
    show_right_margin: boolean;
    smart_backspace: boolean;
    smart_home_end: SmartHomeEndType;
    readonly space_drawer: SpaceDrawer;
    tab_width: number;static new_with_buffer(buffer: Buffer): Gtk.Widget;
    static new_with_buffer(...args: never[]): Gtk.Widget;
    get_auto_indent(): boolean;
    get_background_pattern(): BackgroundPatternType;
    get_completion(): Completion;
    get_draw_spaces(): DrawSpacesFlags;
    get_gutter(window_type: Gtk.TextWindowType): Gutter;
    get_highlight_current_line(): boolean;
    get_indent_on_tab(): boolean;
    get_indent_width(): number;
    get_insert_spaces_instead_of_tabs(): boolean;
    get_mark_attributes(category: string, priority: number): MarkAttributes;
    get_right_margin_position(): number;
    get_show_line_marks(): boolean;
    get_show_line_numbers(): boolean;
    get_show_right_margin(): boolean;
    get_smart_backspace(): boolean;
    get_smart_home_end(): SmartHomeEndType;
    get_space_drawer(): SpaceDrawer;
    get_tab_width(): number;
    get_visual_column(iter: Gtk.TextIter): number;
    indent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
    set_auto_indent(enable: boolean): void;
    set_background_pattern(background_pattern: BackgroundPatternType): void;
    set_draw_spaces(flags: DrawSpacesFlags): void;
    set_highlight_current_line(highlight: boolean): void;
    set_indent_on_tab(enable: boolean): void;
    set_indent_width(width: number): void;
    set_insert_spaces_instead_of_tabs(enable: boolean): void;
    set_mark_attributes(category: string, attributes: MarkAttributes, priority: number): void;
    set_right_margin_position(pos: number): void;
    set_show_line_marks(show: boolean): void;
    set_show_line_numbers(show: boolean): void;
    set_show_right_margin(show: boolean): void;
    set_smart_backspace(smart_backspace: boolean): void;
    set_smart_home_end(smart_home_end: SmartHomeEndType): void;
    set_tab_width(width: number): void;
    unindent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
    vfunc_line_mark_activated(iter: Gtk.TextIter, event: Gdk.Event): void;
    vfunc_move_lines(copy: boolean, step: number): void;
    vfunc_move_words(step: number): void;
    vfunc_redo(): void;
    vfunc_show_completion(): void;
    vfunc_undo(): void;
}
export class BufferPrivate  {
    constructor(config?: properties);
}
export class CompletionContextPrivate  {
    constructor(config?: properties);
}
export class CompletionInfoPrivate  {
    constructor(config?: properties);
}
export class CompletionItemPrivate  {
    constructor(config?: properties);
}
export class CompletionPrivate  {
    constructor(config?: properties);
}
export class CompletionWordsPrivate  {
    constructor(config?: properties);
}
export class Encoding  {
    constructor(config?: properties);
    copy(): Encoding;
    free(): void;
    get_charset(): string;
    get_name(): string;
    to_string(): string;
    static get_all(): string[];
    static get_current(): Encoding;
    static get_default_candidates(): string[];
    static get_from_charset(charset: string): Encoding | null;
    static get_utf8(): Encoding;
}
export class FileLoaderPrivate  {
    constructor(config?: properties);
}
export class FilePrivate  {
    constructor(config?: properties);
}
export class FileSaverPrivate  {
    constructor(config?: properties);
}
export class GutterPrivate  {
    constructor(config?: properties);
}
export class GutterRendererPixbufPrivate  {
    constructor(config?: properties);
}
export class GutterRendererPrivate  {
    constructor(config?: properties);
}
export class GutterRendererTextPrivate  {
    constructor(config?: properties);
}
export class LanguageManagerPrivate  {
    constructor(config?: properties);
}
export class LanguagePrivate  {
    constructor(config?: properties);
}
export class MarkAttributesPrivate  {
    constructor(config?: properties);
}
export class MarkPrivate  {
    constructor(config?: properties);
}
export class PrintCompositorPrivate  {
    constructor(config?: properties);
}
export class RegionIter  {
    constructor(config?: properties);
    readonly dummy1: object;
    readonly dummy2: number;
    readonly dummy3: object;
    get_subregion(): [boolean, Gtk.TextIter | null,Gtk.TextIter | null];
    is_end(): boolean;
    next(): boolean;
}
export class SearchContextPrivate  {
    constructor(config?: properties);
}
export class SearchSettingsPrivate  {
    constructor(config?: properties);
}
export class SpaceDrawerPrivate  {
    constructor(config?: properties);
}
export class StyleSchemeManagerPrivate  {
    constructor(config?: properties);
}
export class StyleSchemePrivate  {
    constructor(config?: properties);
}
export class ViewPrivate  {
    constructor(config?: properties);
}
export interface CompletionProposal  {
    changed(): void;
    equal(other: CompletionProposal): boolean;
    get_gicon(): Gio.Icon | null;
    get_icon(): GdkPixbuf.Pixbuf | null;
    get_icon_name(): string | null;
    get_info(): string | null;
    get_label(): string;
    get_markup(): string;
    get_text(): string;
    hash(): number;
}
export interface CompletionProvider  {
    activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;
    get_activation(): CompletionActivation;
    get_gicon(): Gio.Icon | null;
    get_icon(): GdkPixbuf.Pixbuf | null;
    get_icon_name(): string | null;
    get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;
    get_interactive_delay(): number;
    get_name(): string;
    get_priority(): number;
    get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];
    match(context: CompletionContext): boolean;
    populate(context: CompletionContext): void;
    update_info(proposal: CompletionProposal, info: CompletionInfo): void;
}
export interface StyleSchemeChooser  {
    style_scheme: StyleScheme;
    get_style_scheme(): StyleScheme;
    set_style_scheme(scheme: StyleScheme): void;
}
export interface UndoManager  {
    begin_not_undoable_action(): void;
    can_redo(): boolean;
    can_redo_changed(): void;
    can_undo(): boolean;
    can_undo_changed(): void;
    end_not_undoable_action(): void;
    redo(): void;
    undo(): void;
}