
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gdk from "gdk";
import * as Gtk from "gtk";
import * as Pango from "pango";
import * as Vte from "vte";
/**
 * vte.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type SelectionFunc = (terminal: Terminal, column: number, row: number, data: object | null) => boolean;
export type TerminalSpawnAsyncCallback = (terminal: Terminal, pid: GLib.Pid, error: GLib.Error, user_data: object | null) => void;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const REGEX_FLAGS_DEFAULT: number;
export const SPAWN_NO_PARENT_ENVV: number;
export const TEST_FLAGS_ALL: number;
export const TEST_FLAGS_NONE: number;
/**
 * Gets a list of features vte was compiled with.
 */
export function get_features(): string;
/**
 * Returns the major version of the VTE library at runtime.
 * Contrast this with %VTE_MAJOR_VERSION which represents
 * the version of the VTE library that the code was compiled
 * with.
 */
export function get_major_version(): number;
/**
 * Returns the micro version of the VTE library at runtime.
 * Contrast this with %VTE_MICRO_VERSION which represents
 * the version of the VTE library that the code was compiled
 * with.
 */
export function get_micro_version(): number;
/**
 * Returns the minor version of the VTE library at runtime.
 * Contrast this with %VTE_MINOR_VERSION which represents
 * the version of the VTE library that the code was compiled
 * with.
 */
export function get_minor_version(): number;
/**
 * Gets the user's shell, or %NULL. In the latter case, the
 * system default (usually "/bin/sh") should be used.
 */
export function get_user_shell(): string;
/**
 * Error domain for VTE PTY errors. Errors in this domain will be from th
 * e #VtePtyError
 * enumeration. See #GError for more information on error domains.
 */
export function pty_error_quark(): GLib.Quark;
/**
 * 
 */
export function regex_error_quark(): GLib.Quark;
export enum CursorBlinkMode {
    SYSTEM = 0,
    ON = 1,
    OFF = 2,
}
export enum CursorShape {
    BLOCK = 0,
    IBEAM = 1,
    UNDERLINE = 2,
}
export enum EraseBinding {
    AUTO = 0,
    ASCII_BACKSPACE = 1,
    ASCII_DELETE = 2,
    DELETE_SEQUENCE = 3,
    TTY = 4,
}
export enum Format {
    TEXT = 1,
    HTML = 2,
}
export enum PtyError {
    PTY_HELPER_FAILED = 0,
    PTY98_FAILED = 1,
}
export enum RegexError {
    INCOMPATIBLE = 2147483646,
    NOT_SUPPORTED = 2147483647,
}
export enum TextBlinkMode {
    NEVER = 0,
    FOCUSED = 1,
    UNFOCUSED = 2,
    ALWAYS = 3,
}
export enum WriteFlags {
    DEFAULT = 0,
}
export enum PtyFlags {
    NO_LASTLOG = 1,
    NO_UTMP = 2,
    NO_WTMP = 4,
    NO_HELPER = 8,
    NO_FALLBACK = 16,
    NO_SESSION = 32,
    NO_CTTY = 64,
    DEFAULT = 0,
}
export class Pty extends GObject.Object {
    constructor(config?: properties);
    fd: number;
    flags: PtyFlags;static new_foreign_sync(fd: number, cancellable: Gio.Cancellable | null): Pty;
    static new_sync(flags: PtyFlags, cancellable: Gio.Cancellable | null): Pty;
    child_setup(): void;
    close(): void;
    get_fd(): number;
    get_size(): [boolean, number | null,number | null];
    set_size(rows: number, columns: number): boolean;
    set_utf8(utf8: boolean): boolean;
    spawn_async(working_directory: string | null, argv: string[], envv: string[] | null, spawn_flags: GLib.SpawnFlags, child_setup: GLib.SpawnChildSetupFunc | null, child_setup_data: object | null, child_setup_data_destroy: GLib.DestroyNotify, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    spawn_finish(result: Gio.AsyncResult): [boolean, GLib.Pid | null];
}
export class Terminal extends Gtk.Widget {
    constructor(config?: properties);
    allow_bold: boolean;
    allow_hyperlink: boolean;
    audible_bell: boolean;
    backspace_binding: EraseBinding;
    bold_is_bright: boolean;
    cell_height_scale: number;
    cell_width_scale: number;
    cjk_ambiguous_width: number;
    readonly current_directory_uri: string;
    readonly current_file_uri: string;
    cursor_blink_mode: CursorBlinkMode;
    cursor_shape: CursorShape;
    delete_binding: EraseBinding;
    enable_bidi: boolean;
    enable_shaping: boolean;
    encoding: string;
    font_desc: Pango.FontDescription;
    font_scale: number;
    readonly hyperlink_hover_uri: string;
    readonly icon_title: string;
    input_enabled: boolean;
    pointer_autohide: boolean;
    pty: Pty;
    rewrap_on_resize: boolean;
    scroll_on_keystroke: boolean;
    scroll_on_output: boolean;
    scrollback_lines: number;
    text_blink_mode: TextBlinkMode;
    readonly window_title: string;
    readonly word_char_exceptions: string;
    copy_clipboard(): void;
    copy_clipboard_format(format: Format): void;
    copy_primary(): void;
    event_check_gregex_simple(event: Gdk.Event, regexes: GLib.Regex[], match_flags: GLib.RegexMatchFlags): [boolean, number,string[]];
    event_check_regex_simple(event: Gdk.Event, regexes: Regex[], match_flags: number): [boolean, number,string[]];
    feed(data: number[] | null, length: number): void;
    feed_child(text: number[] | null, length: number): void;
    feed_child_binary(data: number[] | null, length: number): void;
    get_allow_bold(): boolean;
    get_allow_hyperlink(): boolean;
    get_audible_bell(): boolean;
    get_bold_is_bright(): boolean;
    get_cell_height_scale(): number;
    get_cell_width_scale(): number;
    get_char_height(): number;
    get_char_width(): number;
    get_cjk_ambiguous_width(): number;
    get_color_background_for_draw(): [Gdk.RGBA];
    get_column_count(): number;
    get_current_directory_uri(): string | null;
    get_current_file_uri(): string | null;
    get_cursor_blink_mode(): CursorBlinkMode;
    get_cursor_position(): [number | null,number | null];
    get_cursor_shape(): CursorShape;
    get_enable_bidi(): boolean;
    get_enable_shaping(): boolean;
    get_encoding(): string | null;
    get_font(): Pango.FontDescription;
    get_font_scale(): number;
    get_geometry_hints(min_rows: number, min_columns: number): [Gdk.Geometry];
    get_has_selection(): boolean;
    get_icon_title(): string | null;
    get_input_enabled(): boolean;
    get_mouse_autohide(): boolean;
    get_pty(): Pty;
    get_rewrap_on_resize(): boolean;
    get_row_count(): number;
    get_scroll_on_keystroke(): boolean;
    get_scroll_on_output(): boolean;
    get_scrollback_lines(): number;
    get_text(is_selected: SelectionFunc | null, user_data: object | null): [string, CharAttributes[]];
    get_text_blink_mode(): TextBlinkMode;
    get_text_include_trailing_spaces(is_selected: SelectionFunc | null, user_data: object | null): [string, CharAttributes[]];
    get_text_range(start_row: number, start_col: number, end_row: number, end_col: number, is_selected: SelectionFunc | null, user_data: object | null): [string, CharAttributes[]];
    get_window_title(): string | null;
    get_word_char_exceptions(): string | null;
    hyperlink_check_event(event: Gdk.Event): string;
    match_add_gregex(gregex: GLib.Regex, gflags: GLib.RegexMatchFlags): number;
    match_add_regex(regex: Regex, flags: number): number;
    match_check(column: number, row: number): [string, number | null];
    match_check_event(event: Gdk.Event): [string, number | null];
    match_remove(tag: number): void;
    match_remove_all(): void;
    match_set_cursor(tag: number, cursor: Gdk.Cursor | null): void;
    match_set_cursor_name(tag: number, cursor_name: string): void;
    match_set_cursor_type(tag: number, cursor_type: Gdk.CursorType): void;
    paste_clipboard(): void;
    paste_primary(): void;
    pty_new_sync(flags: PtyFlags, cancellable: Gio.Cancellable | null): Pty;
    reset(clear_tabstops: boolean, clear_history: boolean): void;
    search_find_next(): boolean;
    search_find_previous(): boolean;
    search_get_gregex(): GLib.Regex;
    search_get_regex(): Regex;
    search_get_wrap_around(): boolean;
    search_set_gregex(gregex: GLib.Regex | null, gflags: GLib.RegexMatchFlags): void;
    search_set_regex(regex: Regex | null, flags: number): void;
    search_set_wrap_around(wrap_around: boolean): void;
    select_all(): void;
    set_allow_bold(allow_bold: boolean): void;
    set_allow_hyperlink(allow_hyperlink: boolean): void;
    set_audible_bell(is_audible: boolean): void;
    set_backspace_binding(binding: EraseBinding): void;
    set_bold_is_bright(bold_is_bright: boolean): void;
    set_cell_height_scale(scale: number): void;
    set_cell_width_scale(scale: number): void;
    set_cjk_ambiguous_width(width: number): void;
    set_clear_background(setting: boolean): void;
    set_color_background(background: Gdk.RGBA): void;
    set_color_bold(bold: Gdk.RGBA | null): void;
    set_color_cursor(cursor_background: Gdk.RGBA | null): void;
    set_color_cursor_foreground(cursor_foreground: Gdk.RGBA | null): void;
    set_color_foreground(foreground: Gdk.RGBA): void;
    set_color_highlight(highlight_background: Gdk.RGBA | null): void;
    set_color_highlight_foreground(highlight_foreground: Gdk.RGBA | null): void;
    set_colors(foreground: Gdk.RGBA | null, background: Gdk.RGBA | null, palette: Gdk.RGBA[] | null, palette_size: number): void;
    set_cursor_blink_mode(mode: CursorBlinkMode): void;
    set_cursor_shape(shape: CursorShape): void;
    set_default_colors(): void;
    set_delete_binding(binding: EraseBinding): void;
    set_enable_bidi(enable_bidi: boolean): void;
    set_enable_shaping(enable_shaping: boolean): void;
    set_encoding(codeset: string | null): boolean;
    set_font(font_desc: Pango.FontDescription | null): void;
    set_font_scale(scale: number): void;
    set_geometry_hints_for_window(window: Gtk.Window): void;
    set_input_enabled(enabled: boolean): void;
    set_mouse_autohide(setting: boolean): void;
    set_pty(pty: Pty | null): void;
    set_rewrap_on_resize(rewrap: boolean): void;
    set_scroll_on_keystroke(scroll: boolean): void;
    set_scroll_on_output(scroll: boolean): void;
    set_scrollback_lines(lines: number): void;
    set_size(columns: number, rows: number): void;
    set_text_blink_mode(text_blink_mode: TextBlinkMode): void;
    set_word_char_exceptions(exceptions: string): void;
    spawn_async(pty_flags: PtyFlags, working_directory: string | null, argv: string[], envv: string[] | null, spawn_flags_: GLib.SpawnFlags, child_setup: GLib.SpawnChildSetupFunc | null, child_setup_data: object | null, child_setup_data_destroy: GLib.DestroyNotify, timeout: number, cancellable: Gio.Cancellable | null, callback: TerminalSpawnAsyncCallback | null, user_data: object | null): void;
    spawn_sync(pty_flags: PtyFlags, working_directory: string | null, argv: string[], envv: string[] | null, spawn_flags: GLib.SpawnFlags, child_setup: GLib.SpawnChildSetupFunc | null, child_setup_data: object | null, cancellable: Gio.Cancellable | null): [boolean, GLib.Pid | null];
    unselect_all(): void;
    watch_child(child_pid: GLib.Pid): void;
    write_contents_sync(stream: Gio.OutputStream, flags: WriteFlags, cancellable: Gio.Cancellable | null): boolean;
    vfunc_bell(): void;
    vfunc_char_size_changed(char_width: number, char_height: number): void;
    vfunc_child_exited(status: number): void;
    vfunc_commit(text: string, size: number): void;
    vfunc_contents_changed(): void;
    vfunc_copy_clipboard(): void;
    vfunc_cursor_moved(): void;
    vfunc_decrease_font_size(): void;
    vfunc_deiconify_window(): void;
    vfunc_encoding_changed(): void;
    vfunc_eof(): void;
    vfunc_icon_title_changed(): void;
    vfunc_iconify_window(): void;
    vfunc_increase_font_size(): void;
    vfunc_lower_window(): void;
    vfunc_maximize_window(): void;
    vfunc_move_window(x: number, y: number): void;
    vfunc_paste_clipboard(): void;
    vfunc_raise_window(): void;
    vfunc_refresh_window(): void;
    vfunc_resize_window(width: number, height: number): void;
    vfunc_restore_window(): void;
    vfunc_selection_changed(): void;
    vfunc_text_deleted(): void;
    vfunc_text_inserted(): void;
    vfunc_text_modified(): void;
    vfunc_text_scrolled(delta: number): void;
    vfunc_window_title_changed(): void;
}
export class CharAttributes  {
    constructor(config?: properties);
    readonly row: number;
    readonly column: number;
    readonly fore: Pango.Color;
    readonly back: Pango.Color;
    readonly underline: number;
    readonly strikethrough: number;
    readonly columns: number;
}
export class Regex  {
    constructor(config?: properties);
    static new_for_match(pattern: string, pattern_length: number, flags: number): Regex;
    static new_for_search(pattern: string, pattern_length: number, flags: number): Regex;
    jit(flags: number): boolean;
    ref(): Regex;
    substitute(subject: string, replacement: string, flags: number): string;
    unref(): Regex;
}
export class TerminalClassPrivate  {
    constructor(config?: properties);
}