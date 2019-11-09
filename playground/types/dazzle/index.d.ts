
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as Dazzle from "dazzle";
import * as Gdk from "gdk";
import * as cairo from "cairo";
import * as Pango from "pango";
/**
 * dazzle.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type CounterForeachFunc = (counter: Counter, user_data: object | null) => void;
export type DirectoryModelVisibleFunc = (self: DirectoryModel, directory: Gio.File, file_info: Gio.FileInfo, user_data: object | null) => boolean;
export type ListModelFilterFunc = (object: GObject.Object, user_data: object | null) => boolean;
export type RecursiveIgnoreFunc = (file: Gio.File, user_data: object | null) => boolean;
export type ShortcutChordTableForeach = (chord: ShortcutChord, chord_data: object | null, user_data: object | null) => void;
export type StackListCreateWidgetFunc = (item: GObject.Object, user_data: object | null) => Gtk.Widget;
export type SuggestionPositionFunc = (entry: SuggestionEntry, area: Gdk.Rectangle, is_absolute: boolean, user_data: object | null) => void;
export type TaskCacheCallback = (self: TaskCache, key: object | null, task: Gio.Task, user_data: object | null) => void;
export type TreeFilterFunc = (tree: Tree, node: TreeNode, user_data: object | null) => boolean;
export type TreeFindFunc = (tree: Tree, node: TreeNode, child: TreeNode, user_data: object | null) => boolean;
export type TreeNodeCompareFunc = (a: TreeNode, b: TreeNode, user_data: object | null) => number;
export type TrieTraverseFunc = (dzl_trie: Trie, key: string, value: object | null, user_data: object | null) => boolean;
export const COUNTER_REQUIRES_ATOMIC: number;
export const DOCK_BIN_STYLE_CLASS_PINNED: string;
export const ENABLE_TRACE: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION_S: string;
/**
 * @cr a cairo context
 * Creates a region from the extents of the context's current clip area.
 */
export function cairo_region_create_from_clip_extents(cr: cairo.Context): cairo.Region;
/**
 * Adds a rounded rectangle to @cr's current path.
 */
export function cairo_rounded_rectangle(cr: cairo.Context, rect: Gdk.Rectangle, x_radius: number, y_radius: number): void;
/**
 * If both @self and @other are not %NULL, then the cancellation of
 * @other will be propagated to @self if @other is cancelled.
 * If @self and @other are the same, @self is returned and no additional
 * chaining will occur.
 * If @self and @other are %NULL, then %NULL is returned.
 * If @self is non-%NULL, it will be returned.
 * If @self is %NULL and @other is non-%NULL, other will be
 * returned. This is useful to succinctly chain cancellables like:
 * |[
 * cancellable = dzl_cancellable_chain (cancellable, self->cancellable);
 * ]|
 */
export function cancellable_chain(self: Gio.Cancellable | null, other: Gio.Cancellable | null): Gio.Cancellable | null;
/**
 * 
 */
export function counter_arena_get_default(): CounterArena;
/**
 * Create a list of valid uri's from a uri-list drop.
 */
export function dnd_get_uri_list(selection_data: Gtk.SelectionData): string[];
/**
 * 
 */
export function file_manager_show(file: Gio.File): boolean;
/**
 * Creates a new frame source that will execute when the timeout interval
 * for the source has elapsed. The timing will try to synchronize based
 * on the end time of the animation.
 */
export function frame_source_add(frames_per_sec: number, callback: GLib.SourceFunc, user_data: object | null): number;
/**
 * 
 */
export function frame_source_add_full(priority: number, frames_per_sec: number, callback: GLib.SourceFunc, user_data: object | null, notify: GLib.DestroyNotify): number;
/**
 * 
 */
export function fuzzy_highlight(str: string, query: string, case_sensitive: boolean): string;
/**
 * Helper function to create a human-friendly string describing approxima
 * tely
 * how long ago a #GDateTime is.
 */
export function g_date_time_format_for_display(self: GLib.DateTime): string;
/**
 * Creates a string describing the time span in hours, minutes, and secon
 * ds.
 * For example, a time span of three and a half minutes would be "3:30".
 * 2 days, 3 hours, 6 minutes, and 20 seconds would be "51:06:20".
 */
export function g_time_span_to_label(span: GLib.TimeSpan): string;
/**
 * A #GBindingTransformFunc to transform a time span into a string label 
 * using
 * dzl_g_time_span_to_label().
 */
export function g_time_span_to_label_mapping(binding: GObject.Binding, from_value: GObject.Value, to_value: GObject.Value, user_data: object | null): boolean;
/**
 * 
 */
export function g_variant_hash(data: object | null): number;
/**
 * 
 */
export function get_current_cpu_call(): number;
/**
 * This function will binary search the contents of @store looking for th
 * e
 * location to insert a new row.
 * @compare_column must be the index of a column that is a %G_TYPE_POINTE
 * R,
 * %G_TYPE_BOXED or %G_TYPE_OBJECT based column.
 * @compare_func will be called with @key as the first parameter and the
 * value from the #GtkListStore row as the second parameter. The third an
 * d
 * final parameter is @compare_data.
 */
export function gtk_list_store_insert_sorted(store: Gtk.ListStore, key: object | null, compare_column: number, compare_func: GLib.CompareDataFunc, compare_data: object | null): [Gtk.TreeIter];
/**
 * Like gtk_text_buffer_remove_tag() but allows specifying that the tags
 * should be removed one at a time to avoid over-damaging the views
 * displaying @buffer.
 */
export function gtk_text_buffer_remove_tag(buffer: Gtk.TextBuffer, tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter, minimal_damage: boolean): void;
/**
 * 
 */
export function gtk_widget_action(widget: Gtk.Widget, group: string, name: string, param: GLib.Variant): boolean;
/**
 * 
 */
export function gtk_widget_action_with_string(widget: Gtk.Widget, group: string, name: string, param: string): boolean;
/**
 * 
 */
export function gtk_widget_add_style_class(widget: Gtk.Widget, class_name: string): void;
/**
 * Tries to locate a widget in a hierarchy given it's #GType.
 * There is not an efficient implementation of this method, so use it
 * only when the hierarchy of widgets is small.
 */
export function gtk_widget_find_child_typed(widget: Gtk.Widget, type: GType): Gtk.Widget | null;
/**
 * This is similar to gtk_widget_get_ancestor(), but looks for relatives
 * via properties such as #GtkPopover:relative-to and others.
 */
export function gtk_widget_get_relative(widget: Gtk.Widget, relative_type: GType): Gtk.Widget | null;
/**
 * 
 */
export function gtk_widget_hide_with_fade(widget: Gtk.Widget): void;
/**
 * This function is like gtk_widget_is_ancestor() except that it checks
 * various relative widgets that are not in the direct hierarchy of
 * widgets. That includes #GtkMenu:attach-widget,
 * #GtkPopover:relative-to, and #GtkWindow:transient-for.
 */
export function gtk_widget_is_ancestor_or_relative(widget: Gtk.Widget, ancestor: Gtk.Widget): boolean;
/**
 * This function will find all of the actions on @from_widget in various
 * groups and add them to @widget. As this just copies the action groups
 * over, note that it does not allow for muxing items within the same
 * group.
 * You should specify a key for @mux_key so that if the same mux key is
 * seen again, the previous muxings will be removed.
 */
export function gtk_widget_mux_action_groups(widget: Gtk.Widget, from_widget: Gtk.Widget, mux_key: string | null): void;
/**
 * 
 */
export function gtk_widget_remove_style_class(widget: Gtk.Widget, class_name: string): void;
/**
 * 
 */
export function gtk_widget_show_with_fade(widget: Gtk.Widget): void;
/**
 * 
 */
export function levenshtein(needle: string, haystack: string): number;
/**
 * 
 */
export function overlay_add_child(self: DockOverlay, child: Gtk.Widget, type: string): void;
/**
 * This function will generate CSS suitable for Gtk's CSS engine
 * based on the properties of the #PangoFontDescription.
 */
export function pango_font_description_to_css(font_desc: Pango.FontDescription): string;
/**
 * Creates a shade of the color @rgba by multiplying its saturation and l
 * ightness by @k.
 * Values of @k greater than 1 will make the color brighter, while values
 *  less than 1 will make it
 * darker. The alpha value will remain the same.
 */
export function rgba_shade(rgba: Gdk.RGBA, k: number): [Gdk.RGBA];
/**
 * 
 */
export function shortcut_chord_equal(data1: object | null, data2: object | null): boolean;
/**
 * 
 */
export function shortcut_chord_hash(data: object | null): number;
/**
 * 
 */
export function shortcut_chord_table_get_type(): GType;
export enum AnimationMode {
    LINEAR = 0,
    EASE_IN_QUAD = 1,
    EASE_IN_OUT_QUAD = 3,
    EASE_OUT_QUAD = 2,
    EASE_IN_CUBIC = 4,
    EASE_OUT_CUBIC = 5,
    EASE_IN_OUT_CUBIC = 6,
}
export enum DockRevealerTransitionType {
    NONE = 0,
    SLIDE_RIGHT = 1,
    SLIDE_LEFT = 2,
    SLIDE_UP = 3,
    SLIDE_DOWN = 4,
}
export enum ShortcutMatch {
    NONE = 0,
    EQUAL = 1,
    PARTIAL = 2,
}
export enum ShortcutType {
    ACCELERATOR = 0,
    GESTURE_PINCH = 1,
    GESTURE_STRETCH = 2,
    GESTURE_ROTATE_CLOCKWISE = 3,
    GESTURE_ROTATE_COUNTERCLOCKWISE = 4,
    GESTURE_TWO_FINGER_SWIPE_LEFT = 5,
    GESTURE_TWO_FINGER_SWIPE_RIGHT = 6,
    GESTURE = 7,
}
export enum SliderPosition {
    NONE = 0,
    TOP = 1,
    RIGHT = 2,
    BOTTOM = 3,
    LEFT = 4,
}
export enum ThreeGridColumn {
    LEFT = 0,
    CENTER = 1,
    RIGHT = 2,
}
export enum TreeDropPosition {
    INTO = 0,
    BEFORE = 1,
    AFTER = 2,
}
export enum FileTransferFlags {
    NONE = 0,
    MOVE = 1,
}
export enum PropertiesFlags {
    NONE = 0,
    STATEFUL_BOOLEANS = 1,
}
export enum ShortcutPhase {
    DISPATCH = 0,
    CAPTURE = 1,
    BUBBLE = 2,
    GLOBAL = 4,
}
export enum TabStyle {
    ICONS = 2,
    TEXT = 1,
    BOTH = 3,
}
export class Animation  {
    constructor(config?: properties);
    duration: number;
    frame_clock: Gdk.FrameClock;
    mode: AnimationMode;
    target: GObject.Object;
    add_property(pspec: GObject.ParamSpec, value: GObject.Value): void;
    start(): void;
    stop(): void;
    static calculate_duration(monitor: Gdk.Monitor, from_value: number, to_value: number): number;
}
export class Application extends Gtk.Application {
    constructor(config?: properties);
    readonly menu_manager: MenuManager;
    readonly shortcut_manager: ShortcutManager;
    readonly theme_manager: ThemeManager;
    add_resources(resource_path: string): void;
    get_menu_by_id(menu_id: string): Gio.Menu;
    get_menu_manager(): MenuManager;
    get_shortcut_manager(): ShortcutManager;
    get_theme_manager(): ThemeManager;
    remove_resources(resource_path: string): void;
    vfunc_add_resources(resource_path: string): void;
    vfunc_remove_resources(resource_path: string): void;
}
export class ApplicationWindow  {
    constructor(config?: properties);
    fullscreen: boolean;
    get_fullscreen(): boolean;
    get_titlebar(): Gtk.Widget;
    set_fullscreen(fullscreen: boolean): void;
    set_titlebar(titlebar: Gtk.Widget): void;
}
export class Bin extends Gtk.Bin {
    constructor(config?: properties);
}
export class BindingGroup extends GObject.Object {
    constructor(config?: properties);
    source: GObject.Object;
    bind(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): void;
    bind_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object | null, user_data_destroy: GLib.DestroyNotify): void;
    bind_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure | null, transform_from: GObject.Closure | null): void;
    get_source(): GObject.Object | null;
    set_source(source: GObject.Object | null): void;
}
export class BoldingLabel extends Gtk.Label {
    constructor(config?: properties);
    bold: boolean;static new_with_mnemonic(str: string, bold: boolean): BoldingLabel;
    static new_with_mnemonic(...args: never[]): BoldingLabel;
    set_bold(bold: boolean): void;
    set_weight(weight: Pango.Weight): void;
}
export class Box extends Gtk.Box {
    constructor(config?: properties);
    max_width_request: number;
    get_max_width_request(): number;
    get_nth_child(nth: number): Gtk.Widget | null;
    set_max_width_request(max_width_request: number): void;
}
export class BoxTheatric  {
    constructor(config?: properties);
    alpha: number;
    background: string;
    height: number;
    icon: Gio.Icon;
    surface: object;
    target: Gtk.Widget;
    width: number;
    x: number;
    y: number;
}
export class CenteringBin extends Gtk.Bin {
    constructor(config?: properties);
    max_width_request: number;
}
export class ChildPropertyAction  {
    constructor(config?: properties);
    readonly child: Gtk.Widget;
    readonly child_property_name: string;
    readonly container: Gtk.Container;
    static _new(name: string, container: Gtk.Container, child: Gtk.Widget, child_property_name: string): Gio.Action;
}
export class ColumnLayout extends Gtk.Container {
    constructor(config?: properties);
    column_spacing: number;
    column_width: number;
    max_columns: number;
    row_spacing: number;
    get_column_spacing(): number;
    get_column_width(): number;
    get_max_columns(): number;
    get_row_spacing(): number;
    set_column_spacing(column_spacing: number): void;
    set_column_width(column_width: number): void;
    set_max_columns(max_columns: number): void;
    set_row_spacing(row_spacing: number): void;
}
export class CountersWindow extends Gtk.Window {
    constructor(config?: properties);
    get_arena(): CounterArena | null;
    set_arena(arena: CounterArena): void;
}
export class CpuGraph extends GraphView {
    constructor(config?: properties);
    max_samples: number;
    timespan: number;static new_full(timespan: number, max_samples: number): Gtk.Widget;
}
export class CpuModel extends GraphModel {
    constructor(config?: properties);
}
export class CssProvider extends Gtk.CssProvider {
    constructor(config?: properties);
    base_path: string;
}
export class DirectoryModel  {
    constructor(config?: properties);
    directory: Gio.File;
    get_directory(): Gio.File;
    set_directory(directory: Gio.File): void;
    set_visible_func(visible_func: DirectoryModelVisibleFunc, user_data: object | null, user_data_free_func: GLib.DestroyNotify): void;
    static _new(directory: Gio.File): Gio.ListModel;
}
export class DirectoryReaper extends GObject.Object {
    constructor(config?: properties);
    add_directory(directory: Gio.File, min_age: GLib.TimeSpan): void;
    add_file(file: Gio.File, min_age: GLib.TimeSpan): void;
    add_glob(directory: Gio.File, glob: string, min_age: GLib.TimeSpan): void;
    execute(cancellable: Gio.Cancellable | null): boolean;
    execute_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    execute_finish(result: Gio.AsyncResult): boolean;
}
export class DockBin extends Gtk.Container {
    constructor(config?: properties);
    bottom_visible: boolean;
    left_visible: boolean;
    right_visible: boolean;
    top_visible: boolean;
    get_bottom_edge(): Gtk.Widget;
    get_center_widget(): Gtk.Widget | null;
    get_left_edge(): Gtk.Widget;
    get_right_edge(): Gtk.Widget;
    get_top_edge(): Gtk.Widget;
}
export class DockBinEdge  {
    constructor(config?: properties);
    edge: Gtk.PositionType;
    get_edge(): Gtk.PositionType;
}
export class DockManager extends GObject.Object {
    constructor(config?: properties);
    pause_grabs(): void;
    register_dock(dock: Dock): void;
    release_transient_grab(): void;
    unpause_grabs(): void;
    unregister_dock(dock: Dock): void;
    vfunc_register_dock(dock: Dock): void;
    vfunc_unregister_dock(dock: Dock): void;
}
export class DockOverlay extends Gtk.EventBox {
    constructor(config?: properties);
    get_edge(position: Gtk.PositionType): DockOverlayEdge;
    get_edge_adjustment(position: Gtk.PositionType): Gtk.Adjustment;
    vfunc_hide_edges(): void;
}
export class DockOverlayEdge  {
    constructor(config?: properties);
    edge: Gtk.PositionType;
    position: number;
    get_edge(): Gtk.PositionType;
    get_position(): number;
    set_edge(edge: Gtk.PositionType): void;
    set_position(position: number): void;
}
export class DockPaned extends MultiPaned {
    constructor(config?: properties);
}
export class DockRevealer extends Bin {
    constructor(config?: properties);
    readonly child_revealed: boolean;
    position: number;
    position_set: boolean;
    reveal_child: boolean;
    transition_duration: number;
    transition_type: DockRevealerTransitionType;
    animate_to_position(position: number, transition_duration: number): void;
    get_child_revealed(): boolean;
    get_position(): number;
    get_position_set(): boolean;
    get_reveal_child(): boolean;
    get_transition_duration(): number;
    get_transition_type(): DockRevealerTransitionType;
    is_animating(): boolean;
    set_position(position: number): void;
    set_position_set(position_set: boolean): void;
    set_reveal_child(reveal_child: boolean): void;
    set_transition_duration(transition_duration: number): void;
    set_transition_type(transition_type: DockRevealerTransitionType): void;
}
export class DockStack extends Gtk.Box {
    constructor(config?: properties);
    edge: Gtk.PositionType;
    show_pinned_button: boolean;
    style: TabStyle;
    get_edge(): Gtk.PositionType;
    get_show_pinned_button(): boolean;
    get_style(): TabStyle;
    set_edge(edge: Gtk.PositionType): void;
    set_show_pinned_button(show_pinned_button: boolean): void;
    set_style(style: TabStyle): void;
}
export class DockTransientGrab extends GObject.Object {
    constructor(config?: properties);
    timeout: number;
    acquire(): void;
    add_item(item: DockItem): void;
    cancel(): void;
    contains(item: DockItem): boolean;
    get_timeout(): number;
    is_descendant(widget: Gtk.Widget): boolean;
    release(): void;
    remove_item(item: DockItem): void;
    set_timeout(timeout: number): void;
    steal_common_ancestors(other: DockTransientGrab): void;
}
export class DockWidget extends Bin {
    constructor(config?: properties);
    can_close: boolean;
    gicon: Gio.Icon;
    icon_name: string;
    manager: DockManager;
    title: string;
    set_gicon(gicon: Gio.Icon): void;
    set_icon_name(icon_name: string): void;
    set_title(title: string): void;
}
export class DockWindow extends Gtk.Window {
    constructor(config?: properties);
}
export class ElasticBin extends Gtk.Bin {
    constructor(config?: properties);
}
export class EmptyState extends Gtk.Bin {
    constructor(config?: properties);
    icon_name: string;
    pixel_size: number;
    resource: string;
    subtitle: string;
    title: string;
    get_icon_name(): string;
    get_subtitle(): string;
    get_title(): string;
    set_icon_name(icon_name: string): void;
    set_resource(resource: string): void;
    set_subtitle(title: string): void;
    set_title(title: string): void;
}
export class EntryBox extends Gtk.Box {
    constructor(config?: properties);
    max_width_chars: number;
}
export class FileChooserEntry extends Gtk.Bin {
    constructor(config?: properties);
    action: Gtk.FileChooserAction;
    create_folders: boolean;
    do_overwrite_confirmation: boolean;
    file: Gio.File;
    filter: Gtk.FileFilter;
    local_only: boolean;
    max_width_chars: number;
    show_hidden: boolean;
    title: string;
    get_entry(): Gtk.Entry;
    get_file(): Gio.File | null;
    set_file(file: Gio.File): void;
}
export class FileTransfer extends GObject.Object {
    constructor(config?: properties);
    flags: FileTransferFlags;
    readonly progress: number;
    add(src: Gio.File, dest: Gio.File): void;
    execute(io_priority: number, cancellable: Gio.Cancellable | null): boolean;
    execute_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    execute_finish(result: Gio.AsyncResult): boolean;
    get_flags(): FileTransferFlags;
    get_progress(): number;
    set_flags(flags: FileTransferFlags): void;
    stat(): [FileTransferStat];
}
export class FuzzyIndex extends GObject.Object {
    constructor(config?: properties);
    get_metadata(key: string): GLib.Variant | null;
    get_metadata_string(key: string): string;
    get_metadata_uint32(key: string): number;
    get_metadata_uint64(key: string): number;
    load_file(file: Gio.File, cancellable: Gio.Cancellable | null): boolean;
    load_file_async(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    load_file_finish(result: Gio.AsyncResult): boolean;
    query_async(query: string, max_matches: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    query_finish(result: Gio.AsyncResult): Gio.ListModel;
}
export class FuzzyIndexBuilder extends GObject.Object {
    constructor(config?: properties);
    case_sensitive: boolean;
    get_case_sensitive(): boolean;
    get_document(document_id: number): GLib.Variant;
    insert(key: string, document: GLib.Variant, priority: number): number;
    set_case_sensitive(case_sensitive: boolean): void;
    set_metadata(key: string, value: GLib.Variant): void;
    set_metadata_string(key: string, value: string): void;
    set_metadata_uint32(key: string, value: number): void;
    set_metadata_uint64(key: string, value: number): void;
    write(file: Gio.File, io_priority: number, cancellable: Gio.Cancellable | null): boolean;
    write_async(file: Gio.File, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    write_finish(result: Gio.AsyncResult): boolean;
}
export class FuzzyIndexCursor  {
    constructor(config?: properties);
    case_sensitive: boolean;
    index: FuzzyIndex;
    max_matches: number;
    query: string;
    tables: GLib.VariantDict;
    get_index(): FuzzyIndex;
}
export class FuzzyIndexMatch  {
    constructor(config?: properties);
    document: GLib.Variant;
    key: string;
    priority: number;
    score: number;
    get_document(): GLib.Variant;
    get_key(): string;
    get_priority(): number;
    get_score(): number;
}
export class GraphColumn extends GObject.Object {
    constructor(config?: properties);
    name: string;
    value_type: GType;
    get_name(): string;
    set_name(name: string): void;
}
export class GraphLineRenderer extends GObject.Object {
    constructor(config?: properties);
    column: number;
    line_width: number;
    stroke_color: string;
    stroke_color_rgba: Gdk.RGBA;
    get_stroke_color_rgba(): Gdk.RGBA;
    set_stroke_color(stroke_color: string): void;
    set_stroke_color_rgba(stroke_color_rgba: Gdk.RGBA): void;
}
export class GraphModel extends GObject.Object {
    constructor(config?: properties);
    max_samples: number;
    timespan: number;
    value_max: number;
    value_min: number;
    add_column(column: GraphColumn): number;
    get_end_time(): number;
    get_iter_first(iter: GraphModelIter): boolean;
    get_iter_last(iter: GraphModelIter): boolean;
    get_max_samples(): number;
    get_n_columns(): number;
    get_timespan(): GLib.TimeSpan;
    push(timestamp: number): [GraphModelIter];
    set_max_samples(n_rows: number): void;
    set_timespan(timespan: GLib.TimeSpan): void;
    static iter_get_timestamp(iter: GraphModelIter): number;
    static iter_get_value(iter: GraphModelIter, column: number, value: GObject.Value): void;
    static iter_next(iter: GraphModelIter): boolean;
    static iter_set_value(iter: GraphModelIter, column: number, value: GObject.Value): void;
}
export class GraphView extends Gtk.DrawingArea {
    constructor(config?: properties);
    model: GraphModel;
    add_renderer(renderer: GraphRenderer): void;
    get_model(): GraphModel | null;
    set_model(model: GraphModel): void;
}
export class JoinedMenu extends Gio.MenuModel {
    constructor(config?: properties);
    append_menu(model: Gio.MenuModel): void;
    get_n_joined(): number;
    prepend_menu(model: Gio.MenuModel): void;
    remove_index(index: number): void;
    remove_menu(model: Gio.MenuModel): void;
}
export class ListBox extends Gtk.ListBox {
    constructor(config?: properties);
    property_name: string;
    row_type: GType;
    row_type_name: string;
    get_model(): Gio.ListModel | null;
    get_property_name(): string;
    get_row_type(): GType;
    set_model(model: Gio.ListModel): void;
    set_recycle_max(recycle_max: number): void;
}
export class ListBoxRow  {
    constructor(config?: properties);
}
export class ListModelFilter extends GObject.Object {
    constructor(config?: properties);
    readonly child_model: Gio.ListModel;
    get_child_model(): Gio.ListModel;
    invalidate(): void;
    set_filter_func(filter_func: ListModelFilterFunc, filter_func_data: object | null, filter_func_data_destroy: GLib.DestroyNotify): void;
}
export class ListStoreAdapter extends GObject.Object {
    constructor(config?: properties);
    model: Gio.ListModel;
    get_model(): Gio.ListModel;
    set_model(model: Gio.ListModel): void;
}
export class MenuButton extends Gtk.MenuButton {
    constructor(config?: properties);
    icon_name: string;
    menu_id: string;
    model: Gio.MenuModel;
    show_accels: boolean;
    show_arrow: boolean;
    show_icons: boolean;
    transitions_enabled: boolean;static new_with_model(icon_name: string, model: Gio.MenuModel | null): Gtk.Widget;
    get_model(): Gio.MenuModel | null;
    get_show_accels(): boolean;
    get_show_arrow(): boolean;
    get_show_icons(): boolean;
    set_model(model: Gio.MenuModel): void;
    set_show_accels(show_accels: boolean): void;
    set_show_arrow(show_arrow: boolean): void;
    set_show_icons(show_icons: boolean): void;
}
export class MenuManager extends GObject.Object {
    constructor(config?: properties);
    add_filename(filename: string): number;
    add_resource(resource: string): number;
    get_menu_by_id(menu_id: string): Gio.Menu;
    merge(menu_id: string, model: Gio.MenuModel): number;
    remove(merge_id: number): void;
}
export class MultiPaned extends Gtk.Container {
    constructor(config?: properties);
    orientation: Gtk.Orientation;
    get_at_point(x: number, y: number): Gtk.Widget | null;
    get_n_children(): number;
    get_nth_child(nth: number): Gtk.Widget;
    vfunc_resize_drag_begin(child: Gtk.Widget): void;
    vfunc_resize_drag_end(child: Gtk.Widget): void;
}
export class Path extends GObject.Object {
    constructor(config?: properties);
    append(element: PathElement): void;
    get_element(index: number): PathElement | null;
    get_elements(): GLib.List;
    get_length(): number;
    has_prefix(prefix: Path): boolean;
    is_empty(): boolean;
    prepend(element: PathElement): void;
    printf(): string;
}
export class PathBar extends Gtk.Box {
    constructor(config?: properties);
    path: Path;
    get_path(): Path;
    set_path(path: Path): void;
    set_selected_index(index: number): void;
}
export class PathElement extends GObject.Object {
    constructor(config?: properties);
    icon_name: string;
    id: string;
    title: string;
    get_icon_name(): string | null;
    get_id(): string;
    get_title(): string | null;
}
export class PillBox extends Gtk.EventBox {
    constructor(config?: properties);
    label: string;
    get_label(): string;
    set_label(label: string): void;
}
export class PreferencesBin  {
    constructor(config?: properties);
    keywords: string;
    path: string;
    priority: number;
    schema_id: string;
}
export class PreferencesEntry  {
    constructor(config?: properties);
    text: string;
    title: string;
    get_entry_widget(): Gtk.Widget;
    get_title_widget(): Gtk.Widget;
}
export class PreferencesFileChooserButton  {
    constructor(config?: properties);
    action: Gtk.FileChooserAction;
    key: string;
    subtitle: string;
    title: string;
}
export class PreferencesFlowBox extends ColumnLayout {
    constructor(config?: properties);
}
export class PreferencesFontButton  {
    constructor(config?: properties);
    key: string;
    title: string;
}
export class PreferencesGroup  {
    constructor(config?: properties);
    is_list: boolean;
    mode: Gtk.SelectionMode;
    priority: number;
    title: string;
    add(widget: Gtk.Widget): void;
    get_priority(): number;
    get_size_group(column: number): Gtk.SizeGroup;
    get_title(): string;
    refilter(spec: PatternSpec): number;
    set_map(map: GLib.HashTable): void;
}
export class PreferencesPage  {
    constructor(config?: properties);
    priority: number;
    add_group(group: PreferencesGroup): void;
    get_group(group_name: string): PreferencesGroup | null;
    refilter(spec: PatternSpec): void;
    set_map(map: GLib.HashTable): void;
}
export class PreferencesSpinButton  {
    constructor(config?: properties);
    key: string;
    subtitle: string;
    title: string;
    get_spin_button(): Gtk.Widget;
}
export class PreferencesSwitch  {
    constructor(config?: properties);
    is_radio: boolean;
    key: string;
    subtitle: string;
    target: GLib.Variant;
    title: string;
}
export class PreferencesView extends Gtk.Bin {
    constructor(config?: properties);
    show_search_entry: boolean;
    use_sidebar: boolean;
    get_show_search_entry(): boolean;
    get_use_sidebar(): boolean;
    reapply_filter(): void;
    set_show_search_entry(show_search_entry: boolean): void;
    set_use_sidebar(use_sidebar: boolean): void;
}
export class PriorityBox extends Gtk.Box {
    constructor(config?: properties);
}
export class ProgressButton extends Gtk.Button {
    constructor(config?: properties);
    progress: number;
    show_progress: boolean;
    get_progress(): number;
    get_show_progress(): boolean;
    set_progress(percentage: number): void;
    set_show_progress(show_progress: boolean): void;
}
export class ProgressIcon extends Gtk.DrawingArea {
    constructor(config?: properties);
    progress: number;
    get_progress(): number;
    set_progress(progress: number): void;
}
export class ProgressMenuButton extends Gtk.MenuButton {
    constructor(config?: properties);
    progress: number;
    show_progress: boolean;
    show_theatric: boolean;
    theatric_icon_name: string;
    transition_duration: number;
    get_progress(): number;
    get_show_progress(): boolean;
    get_show_theatric(): boolean;
    reset_theatrics(): void;
    set_progress(progress: number): void;
    set_show_progress(show_progress: boolean): void;
    set_show_theatric(show_theatic: boolean): void;
}
export class PropertiesGroup extends GObject.Object {
    constructor(config?: properties);
    object: GObject.Object;
    object_type: GType;static new_for_type(object_type: GType): PropertiesGroup;
    add_all_properties(): void;
    add_property(name: string, property_name: string): void;
    add_property_full(name: string, property_name: string, flags: PropertiesFlags): void;
    remove(name: string): void;
}
export class RadioBox extends Gtk.Bin {
    constructor(config?: properties);
    active_id: string;
    readonly has_more: boolean;
    show_more: boolean;
    add_item(id: string, text: string): void;
    get_active_id(): string;
    remove_item(id: string): void;
    set_active_id(id: string): void;
}
export class ReadOnlyListModel  {
    constructor(config?: properties);
    base_model: Gio.ListModel;
    static _new(base_model: Gio.ListModel): Gio.ListModel;
}
export class RecursiveFileMonitor extends GObject.Object {
    constructor(config?: properties);
    root: Gio.File;
    cancel(): void;
    get_root(): Gio.File;
    set_ignore_func(ignore_func: RecursiveIgnoreFunc, ignore_func_data: object | null, ignore_func_data_destroy: GLib.DestroyNotify): void;
    start_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    start_finish(result: Gio.AsyncResult): boolean;
}
export class ScrolledWindow  {
    constructor(config?: properties);
}
export class SearchBar extends Gtk.Bin {
    constructor(config?: properties);
    search_mode_enabled: boolean;
    show_close_button: boolean;
    get_entry(): Gtk.SearchEntry;
    get_search_mode_enabled(): boolean;
    get_show_close_button(): boolean;
    set_search_mode_enabled(search_mode_enabled: boolean): void;
    set_show_close_button(show_close_button: boolean): void;
}
export class SettingsFlagAction  {
    constructor(config?: properties);
    flag_nick: string;
    schema_id: string;
    schema_key: string;
    static _new(schema_id: string, schema_key: string, flag_nick: string): Gio.Action;
}
export class SettingsSandwich extends GObject.Object {
    constructor(config?: properties);
    path: string;
    schema_id: string;
    append(settings: Gio.Settings): void;
    bind(key: string, object: object | null, property: string, flags: Gio.SettingsBindFlags): void;
    bind_with_mapping(key: string, object: object | null, property: string, flags: Gio.SettingsBindFlags, get_mapping: Gio.SettingsBindGetMapping, set_mapping: Gio.SettingsBindSetMapping, user_data: object | null, destroy: GLib.DestroyNotify): void;
    get_boolean(key: string): boolean;
    get_default_value(key: string): GLib.Variant;
    get_double(key: string): number;
    get_int(key: string): number;
    get_string(key: string): string;
    get_uint(key: string): number;
    get_user_value(key: string): GLib.Variant;
    get_value(key: string): GLib.Variant;
    set_boolean(key: string, val: boolean): void;
    set_double(key: string, val: number): void;
    set_int(key: string, val: number): void;
    set_string(key: string, val: string): void;
    set_uint(key: string, val: number): void;
    set_value(key: string, value: GLib.Variant): void;
    unbind(property: string): void;
}
export class ShortcutAccelDialog extends Gtk.Dialog {
    constructor(config?: properties);
    accelerator: string;
    shortcut_title: string;
    get_accelerator(): string;
    get_chord(): ShortcutChord;
    get_shortcut_title(): string;
    set_accelerator(accelerator: string): void;
    set_shortcut_title(title: string): void;
}
export class ShortcutContext extends GObject.Object {
    constructor(config?: properties);
    name: string;
    use_binding_sets: boolean;
    activate(widget: Gtk.Widget, chord: ShortcutChord): ShortcutMatch;
    add_action(accel: string, detailed_action_name: string): void;
    add_command(accel: string, command: string): void;
    add_signalv(accel: string, signal_name: string, values: GObject.Value[] | null): void;
    get_name(): string;
    load_from_data(data: string, len: number): boolean;
    load_from_resource(resource_path: string): boolean;
    remove(accel: string): boolean;
}
export class ShortcutController extends GObject.Object {
    constructor(config?: properties);
    readonly context: ShortcutContext;
    readonly current_chord: ShortcutChord;
    manager: ShortcutManager;
    widget: Gtk.Widget;
    add_command_action(command_id: string, default_accel: string, phase: ShortcutPhase, action: string): void;
    add_command_callback(command_id: string, default_accel: string, phase: ShortcutPhase, callback: Gtk.Callback, callback_data: object | null, callback_data_destroy: GLib.DestroyNotify): void;
    execute_command(command: string): boolean;
    get_context(): ShortcutContext | null;
    get_context_for_phase(phase: ShortcutPhase): ShortcutContext | null;
    get_current_chord(): ShortcutChord | null;
    get_manager(): ShortcutManager;
    get_widget(): Gtk.Widget;
    remove_accel(accel: string, phase: ShortcutPhase): void;
    set_context_by_name(name: string | null): void;
    set_manager(manager: ShortcutManager | null): void;
    static find(widget: Gtk.Widget): ShortcutController;
    static try_find(widget: Gtk.Widget): ShortcutController | null;
}
export class ShortcutLabel extends Gtk.Box {
    constructor(config?: properties);
    accelerator: string;
    chord: ShortcutChord;
    get_accelerator(): string;
    get_chord(): ShortcutChord | null;
    set_accelerator(accelerator: string): void;
    set_chord(chord: ShortcutChord): void;
}
export class ShortcutManager  {
    constructor(config?: properties);
    theme: ShortcutTheme;
    theme_name: string;
    user_dir: string;
    add_action(detailed_action_name: string, section: string, group: string, title: string, subtitle: string): void;
    add_command(command: string, section: string, group: string, title: string, subtitle: string): void;
    add_shortcut_entries(shortcuts: ShortcutEntry[], n_shortcuts: number, translation_domain: string | null): void;
    add_shortcuts_to_window(window: ShortcutsWindow): void;
    append_search_path(directory: string): void;
    get_theme(): ShortcutTheme;
    get_theme_by_name(theme_name: string | null): ShortcutTheme | null;
    get_theme_name(): string;
    get_user_dir(): string;
    handle_event(event: Gdk.EventKey, toplevel: Gtk.Widget): boolean;
    prepend_search_path(directory: string): void;
    queue_reload(): void;
    reload(cancellable: Gio.Cancellable | null): void;
    remove_search_path(directory: string): void;
    set_theme(theme: ShortcutTheme): void;
    set_theme_name(theme_name: string): void;
    set_user_dir(user_dir: string): void;
    static get_default(): ShortcutManager;
}
export class ShortcutModel  {
    constructor(config?: properties);
    manager: ShortcutManager;
    theme: ShortcutTheme;
    get_manager(): ShortcutManager;
    get_theme(): ShortcutTheme;
    rebuild(): void;
    set_chord(iter: Gtk.TreeIter, chord: ShortcutChord): void;
    set_manager(manager: ShortcutManager): void;
    set_theme(theme: ShortcutTheme): void;
    static _new(): Gtk.TreeModel;
}
export class ShortcutSimpleLabel extends Gtk.Box {
    constructor(config?: properties);
    accel: string;
    action: string;
    command: string;
    show_accel: boolean;
    title: string;
    get_accel(): string;
    get_action(): string;
    get_command(): string;
    get_title(): string;
    set_accel(accel: string): void;
    set_action(action: string): void;
    set_command(command: string): void;
    set_title(title: string): void;
}
export class ShortcutTheme extends GObject.Object {
    constructor(config?: properties);
    name: string;
    parent_name: string;
    subtitle: string;
    title: string;
    add_command(accelerator: string, command: string): void;
    add_context(context: ShortcutContext): void;
    add_css_resource(path: string): void;
    find_context_by_name(name: string): ShortcutContext;
    find_default_context(widget: Gtk.Widget): ShortcutContext | null;
    get_chord_for_action(detailed_action_name: string): ShortcutChord;
    get_chord_for_command(command: string): ShortcutChord;
    get_name(): string;
    get_parent(): ShortcutTheme | null;
    get_parent_name(): string | null;
    get_subtitle(): string;
    get_title(): string;
    load_from_data(data: string, len: number): boolean;
    load_from_file(file: Gio.File, cancellable: Gio.Cancellable | null): boolean;
    load_from_path(path: string, cancellable: Gio.Cancellable | null): boolean;
    remove_css_resource(path: string): void;
    save_to_file(file: Gio.File, cancellable: Gio.Cancellable | null): boolean;
    save_to_path(path: string, cancellable: Gio.Cancellable | null): boolean;
    save_to_stream(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): boolean;
    set_accel_for_action(detailed_action_name: string, accel: string, phase: ShortcutPhase): void;
    set_accel_for_command(command: string | null, accel: string | null, phase: ShortcutPhase): void;
    set_chord_for_action(detailed_action_name: string, chord: ShortcutChord, phase: ShortcutPhase): void;
    set_chord_for_command(command: string | null, chord: ShortcutChord | null, phase: ShortcutPhase): void;
    set_parent_name(parent_name: string): void;
}
export class ShortcutThemeEditor extends Gtk.Bin {
    constructor(config?: properties);
    theme: ShortcutTheme;
    get_theme(): ShortcutTheme | null;
    set_theme(theme: ShortcutTheme): void;
}
export class ShortcutTooltip extends GObject.Object {
    constructor(config?: properties);
    accel: string;
    command_id: string;
    title: string;
    widget: Gtk.Widget;
    get_accel(): string | null;
    get_command_id(): string | null;
    get_title(): string | null;
    get_widget(): Gtk.Widget | null;
    set_accel(accel: string | null): void;
    set_command_id(command_id: string): void;
    set_title(title: string | null): void;
    set_widget(widget: Gtk.Widget | null): void;
}
export class ShortcutsGroup  {
    constructor(config?: properties);
    accel_size_group: Gtk.SizeGroup;
    readonly height: number;
    title: string;
    title_size_group: Gtk.SizeGroup;
    view: string;
}
export class ShortcutsSection  {
    constructor(config?: properties);
    max_height: number;
    section_name: string;
    title: string;
    view_name: string;
}
export class ShortcutsShortcut  {
    constructor(config?: properties);
    accel_size_group: Gtk.SizeGroup;
    accelerator: string;
    action_name: string;
    direction: Gtk.TextDirection;
    icon: Gio.Icon;
    icon_set: boolean;
    shortcut_type: Gtk.ShortcutType;
    subtitle: string;
    subtitle_set: boolean;
    title: string;
    title_size_group: Gtk.SizeGroup;
}
export class ShortcutsWindow  {
    constructor(config?: properties);
    section_name: string;
    view_name: string;
    readonly window: Gtk.Window;
}
export class SignalGroup extends GObject.Object {
    constructor(config?: properties);
    target: GObject.Object;
    target_type: GType;
    block(): void;
    connect_data(detailed_signal: string, c_handler: GObject.Callback, data: object | null, notify: GObject.ClosureNotify, flags: GObject.ConnectFlags): void;
    connect_swapped(detailed_signal: string, c_handler: GObject.Callback, data: object | null): void;
    get_target(): GObject.Object | null;
    set_target(target: GObject.Object | null): void;
    unblock(): void;
}
export class SimpleLabel extends Gtk.Widget {
    constructor(config?: properties);
    label: string;
    width_chars: number;
    xalign: number;
    get_label(): string;
    get_width_chars(): number;
    get_xalign(): number;
    set_label(label: string): void;
    set_width_chars(width_chars: number): void;
    set_xalign(xalign: number): void;
}
export class SimplePopover extends Gtk.Popover {
    constructor(config?: properties);
    button_text: string;
    message: string;
    ready: boolean;
    text: string;
    title: string;
    get_button_text(): string;
    get_message(): string;
    get_ready(): boolean;
    get_text(): string;
    get_title(): string;
    set_button_text(button_text: string): void;
    set_message(message: string): void;
    set_ready(ready: boolean): void;
    set_text(text: string): void;
    set_title(title: string): void;
    vfunc_activate(text: string): void;
    vfunc_changed(): void;
    vfunc_insert_text(position: number, chars: string, n_chars: number): boolean;
}
export class Slider extends Gtk.Container {
    constructor(config?: properties);
    position: SliderPosition;
    add_slider(widget: Gtk.Widget, position: SliderPosition): void;
    get_position(): SliderPosition;
    set_position(position: SliderPosition): void;
}
export class StackList extends Gtk.Bin {
    constructor(config?: properties);
    readonly model: Gio.ListModel;
    clear(): void;
    get_depth(): number;
    get_model(): Gio.ListModel;
    pop(): void;
    push(header: Gtk.Widget, model: Gio.ListModel, create_widget_func: StackListCreateWidgetFunc, user_data: object | null, user_data_free_func: GLib.DestroyNotify): void;
    vfunc_header_activated(row: Gtk.ListBoxRow): void;
    vfunc_row_activated(row: Gtk.ListBoxRow): void;
}
export class StateMachine extends GObject.Object {
    constructor(config?: properties);
    state: string;
    add_binding(state: string, source_object: object | null, source_property: string, target_object: object | null, target_property: string, flags: GObject.BindingFlags): void;
    add_propertyv(state: string, object: object | null, property: string, value: GObject.Value): void;
    add_style(state: string, widget: Gtk.Widget, style: string): void;
    create_action(name: string): Gio.Action;
    get_state(): string;
    is_state(state: string | null): boolean;
    set_state(state: string): void;
}
export class Suggestion extends GObject.Object {
    constructor(config?: properties);
    readonly icon: Gio.Icon;
    icon_name: string;
    id: string;
    subtitle: string;
    title: string;
    get_icon(): Gio.Icon | null;
    get_icon_name(): string;
    get_icon_surface(widget: Gtk.Widget): cairo.Surface | null;
    get_id(): string;
    get_subtitle(): string;
    get_title(): string;
    replace_typed_text(typed_text: string): string | null;
    set_icon_name(icon_name: string): void;
    set_id(id: string): void;
    set_subtitle(subtitle: string): void;
    set_title(title: string): void;
    suggest_suffix(typed_text: string): string | null;
    vfunc_get_icon(): Gio.Icon | null;
    vfunc_get_icon_surface(widget: Gtk.Widget): cairo.Surface | null;
    vfunc_replace_typed_text(typed_text: string): string | null;
    vfunc_suggest_suffix(typed_text: string): string | null;
}
export class SuggestionButton extends Gtk.Stack {
    constructor(config?: properties);
    readonly button: Gtk.Button;
    readonly entry: SuggestionEntry;
    get_button(): Gtk.Button;
    get_entry(): SuggestionEntry;
}
export class SuggestionEntry extends Gtk.Entry {
    constructor(config?: properties);
    activate_on_single_click: boolean;
    compact: boolean;
    model: Gio.ListModel;
    suggestion: Suggestion;
    readonly typed_text: string;
    default_position_func(area: Gdk.Rectangle, is_absolute: boolean, user_data: object | null): void;
    get_activate_on_single_click(): boolean;
    get_compact(): boolean;
    get_model(): Gio.ListModel | null;
    get_popover(): Gtk.Widget;
    get_suggestion(): Suggestion | null;
    get_typed_text(): string;
    hide_suggestions(): void;
    set_activate_on_single_click(activate_on_single_click: boolean): void;
    set_compact(compact: boolean): void;
    set_model(model: Gio.ListModel): void;
    set_position_func(func: SuggestionPositionFunc | null, func_data: object | null, func_data_destroy: GLib.DestroyNotify | null): void;
    set_suggestion(suggestion: Suggestion): void;
    window_position_func(area: Gdk.Rectangle, is_absolute: boolean, user_data: object | null): void;
    vfunc_hide_suggestions(): void;
    vfunc_move_suggestion(amount: number): void;
    vfunc_show_suggestions(): void;
    vfunc_suggestion_activated(suggestion: Suggestion): void;
    vfunc_suggestion_selected(suggestion: Suggestion): void;
}
export class SuggestionEntryBuffer extends Gtk.EntryBuffer {
    constructor(config?: properties);
    suggestion: Suggestion;
    clear(): void;
    commit(): void;
    get_suggestion(): Suggestion | null;
    get_typed_length(): number;
    get_typed_text(): string;
    set_suggestion(suggestion: Suggestion | null): void;
}
export class SuggestionPopover extends Gtk.Window {
    constructor(config?: properties);
    model: Suggestion;
    relative_to: Gtk.Widget;
    selected: Suggestion;
    subtitle_ellipsize: Pango.EllipsizeMode;
    title_ellipsize: Pango.EllipsizeMode;
    activate_selected(): void;
    get_model(): Gio.ListModel | null;
    get_relative_to(): Gtk.Widget | null;
    get_selected(): Suggestion | null;
    move_by(amount: number): void;
    popdown(): void;
    popup(): void;
    set_model(model: Gio.ListModel): void;
    set_relative_to(widget: Gtk.Widget): void;
    set_selected(suggestion: Suggestion): void;
}
export class SuggestionRow extends ListBoxRow {
    constructor(config?: properties);
    orientation: Gtk.Orientation;
    suggestion: Suggestion;
    get_suggestion(): Suggestion;
    set_suggestion(suggestion: Suggestion): void;
}
export class Tab  {
    constructor(config?: properties);
    active: boolean;
    can_close: boolean;
    edge: Gtk.PositionType;
    style: TabStyle;
    title: string;
    widget: Gtk.Widget;
    get_active(): boolean;
    get_can_close(): boolean;
    get_edge(): Gtk.PositionType;
    get_icon_name(): string;
    get_style(): TabStyle;
    get_title(): string;
    get_widget(): Gtk.Widget | null;
    set_active(active: boolean): void;
    set_can_close(can_close: boolean): void;
    set_edge(edge: Gtk.PositionType): void;
    set_gicon(gicon: Gio.Icon): void;
    set_icon_name(icon_name: string): void;
    set_style(style: TabStyle): void;
    set_title(title: string): void;
    set_widget(widget: Gtk.Widget): void;
}
export class TabStrip extends Gtk.Box {
    constructor(config?: properties);
    edge: Gtk.PositionType;
    stack: Gtk.Stack;
    style: TabStyle;
    add_control(widget: Gtk.Widget): void;
    get_edge(): Gtk.PositionType;
    get_stack(): Gtk.Stack | null;
    get_style(): TabStyle;
    set_edge(edge: Gtk.PositionType): void;
    set_stack(stack: Gtk.Stack): void;
    set_style(style: TabStyle): void;
}
export class TaskCache extends GObject.Object {
    constructor(config?: properties);
    key_copy_func: object;
    key_destroy_func: object;
    key_equal_func: object;
    key_hash_func: object;
    populate_callback: object;
    populate_callback_data: object;
    populate_callback_data_destroy: object;
    time_to_live: number;
    value_copy_func: object;
    value_destroy_func: object;
    evict(key: object | null): boolean;
    evict_all(): void;
    get_async(key: object | null, force_update: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_finish(result: Gio.AsyncResult): object | null;
    peek(key: object | null): GObject.Object | null;
    set_name(name: string): void;
}
export class ThemeManager extends GObject.Object {
    constructor(config?: properties);
    add_resources(resource_path: string): void;
    remove_resources(resource_path: string): void;
}
export class ThreeGrid extends Gtk.Container {
    constructor(config?: properties);
    column_spacing: number;
    row_spacing: number;
}
export class Tree  {
    constructor(config?: properties);
    always_expand: boolean;
    context_menu: Gio.MenuModel;
    root: TreeNode;
    selection: TreeNode;
    show_icons: boolean;
    add_builder(builder: TreeBuilder): void;
    expand_to_node(node: TreeNode): void;
    find_child_node(node: TreeNode, find_func: TreeFindFunc, user_data: object | null): TreeNode | null;
    find_custom(equal_func: GLib.EqualFunc, key: object | null): TreeNode | null;
    find_item(item: GObject.Object | null): TreeNode | null;
    get_context_menu(): Gio.MenuModel | null;
    get_root(): TreeNode | null;
    get_selected(): TreeNode;
    get_show_icons(): boolean;
    rebuild(): void;
    remove_builder(builder: TreeBuilder): void;
    scroll_to_node(node: TreeNode): void;
    set_context_menu(context_menu: Gio.MenuModel): void;
    set_filter(filter_func: TreeFilterFunc, filter_data: object | null, filter_data_destroy: GLib.DestroyNotify): void;
    set_root(node: TreeNode): void;
    set_show_icons(show_icons: boolean): void;
    unselect_all(): void;
}
export class TreeBuilder extends GObject.InitiallyUnowned {
    constructor(config?: properties);
    readonly tree: Tree;
    get_tree(): Tree | null;
    vfunc_added(tree: Gtk.Widget): void;
    vfunc_build_children(parent: TreeNode): void;
    vfunc_build_node(node: TreeNode): void;
    vfunc_cell_data_func(node: TreeNode, cell: Gtk.CellRenderer): void;
    vfunc_drag_data_get(node: TreeNode, data: Gtk.SelectionData): boolean;
    vfunc_drag_data_received(drop_node: TreeNode, position: TreeDropPosition, action: Gdk.DragAction, data: Gtk.SelectionData): boolean;
    vfunc_drag_node_delete(node: TreeNode): boolean;
    vfunc_drag_node_received(drag_node: TreeNode, drop_node: TreeNode, position: TreeDropPosition, action: Gdk.DragAction, data: Gtk.SelectionData): boolean;
    vfunc_node_activated(node: TreeNode): boolean;
    vfunc_node_collapsed(node: TreeNode): void;
    vfunc_node_draggable(node: TreeNode): boolean;
    vfunc_node_droppable(node: TreeNode, data: Gtk.SelectionData): boolean;
    vfunc_node_expanded(node: TreeNode): void;
    vfunc_node_popup(node: TreeNode, menu: Gio.Menu): void;
    vfunc_node_selected(node: TreeNode): void;
    vfunc_node_unselected(node: TreeNode): void;
    vfunc_removed(tree: Gtk.Widget): void;
}
export class TreeNode extends GObject.InitiallyUnowned {
    constructor(config?: properties);
    children_possible: boolean;
    expanded_icon_name: string;
    gicon: Gio.Icon;
    icon_name: string;
    item: GObject.Object;
    reset_on_collapse: boolean;
    text: string;
    tree: Tree;
    use_dim_label: boolean;
    use_markup: boolean;
    add_emblem(emblem_name: string): void;
    append(child: TreeNode): void;
    clear_emblems(): void;
    collapse(): void;
    expand(expand_ancestors: boolean): boolean;
    get_area(area: Gdk.Rectangle): void;
    get_children_possible(): boolean;
    get_expanded(): boolean;
    get_foreground_rgba(): Gdk.RGBA | null;
    get_gicon(): Gio.Icon;
    get_icon_name(): string;
    get_item(): GObject.Object;
    get_iter(iter: Gtk.TreeIter): boolean;
    get_parent(): TreeNode;
    get_path(): Gtk.TreePath | null;
    get_reset_on_collapse(): boolean;
    get_text(): string;
    get_tree(): Tree;
    get_use_dim_label(): boolean;
    get_use_markup(): boolean;
    has_emblem(emblem_name: string): boolean;
    insert(child: TreeNode, position: number): void;
    insert_sorted(child: TreeNode, compare_func: TreeNodeCompareFunc, user_data: object | null): void;
    invalidate(): void;
    is_root(): boolean;
    n_children(): number;
    nth_child(nth: number): TreeNode | null;
    prepend(child: TreeNode): void;
    rebuild(): void;
    remove(child: TreeNode): void;
    remove_emblem(emblem_name: string): void;
    select(): void;
    set_children_possible(children_possible: boolean): void;
    set_emblems(emblems: string): void;
    set_foreground_rgba(foreground_rgba: Gdk.RGBA | null): void;
    set_gicon(icon: Gio.Icon): void;
    set_icon_name(icon_name: string | null): void;
    set_item(item: GObject.Object): void;
    set_reset_on_collapse(reset_on_collapse: boolean): void;
    set_text(text: string | null): void;
    set_use_dim_label(use_dim_label: boolean): void;
    set_use_markup(use_markup: boolean): void;
    show_popover(popover: Gtk.Popover): void;
}
export class WidgetActionGroup  {
    constructor(config?: properties);
    widget: Gtk.Widget;
    set_action_enabled(action_name: string, enabled: boolean): void;
    static attach(widget: Gtk.Widget, group_name: string): void;
    static _new(widget: Gtk.Widget): Gio.ActionGroup;
}
export class Counter  {
    constructor(config?: properties);
    values: CounterValue;
    category: string;
    name: string;
    description: string;
    get(): number;
    reset(): void;
}
export class CounterArena  {
    constructor(config?: properties);
    static new_for_pid(pid: GLib.Pid): CounterArena;
    foreach(func: CounterForeachFunc, user_data: object | null): void;
    ref(): CounterArena;
    register(counter: Counter): void;
    unref(): void;
    static get_default(): CounterArena;
}
export class CounterValue  {
    constructor(config?: properties);
    value: number;
    padding: number[];
}
export class FileTransferStat  {
    constructor(config?: properties);
    n_files_total: number;
    n_files: number;
    n_dirs_total: number;
    n_dirs: number;
    n_bytes_total: number;
    n_bytes: number;
}
export class FuzzyMutableIndex  {
    constructor(config?: properties);
    static new_with_free_func(case_sensitive: boolean, free_func: GLib.DestroyNotify): FuzzyMutableIndex;
    begin_bulk_insert(): void;
    contains(key: string): boolean;
    end_bulk_insert(): void;
    insert(key: string, value: object | null): void;
    match(needle: string, max_matches: number): FuzzyMutableIndexMatch[];
    ref(): FuzzyMutableIndex;
    remove(key: string): void;
    set_free_func(free_func: GLib.DestroyNotify): void;
    unref(): void;
}
export class FuzzyMutableIndexMatch  {
    constructor(config?: properties);
    key: string;
    value: object;
    score: number;
    id: number;
}
export class GraphModelIter  {
    constructor(config?: properties);
    data: object[];
}
export class Heap  {
    constructor(config?: properties);
    extract(result: object | null): boolean;
    extract_index(index_: number, result: object | null): boolean;
    insert_vals(data: object | null, len: number): void;
    ref(): Heap;
    unref(): void;
}
export class PatternSpec  {
    constructor(config?: properties);
    get_text(): string;
    match(haystack: string): boolean;
    ref(): PatternSpec;
    unref(): void;
}
export class Ring  {
    constructor(config?: properties);
    static sized_new(element_size: number, reserved_size: number, element_destroy: GLib.DestroyNotify): Ring;
    append_vals(data: object | null, len: number): number;
    foreach(func: GLib.Func, user_data: object | null): void;
    ref(): Ring;
    unref(): void;
}
export class ShortcutChord  {
    constructor(config?: properties);
    static new_from_event(event: Gdk.EventKey): ShortcutChord;
    static new_from_string(accelerator: string): ShortcutChord;
    append_event(event: Gdk.EventKey): boolean;
    copy(): ShortcutChord;
    free(): void;
    get_label(): string;
    get_length(): number;
    get_nth_key(nth: number, keyval: number, modifier: Gdk.ModifierType): void;
    has_modifier(): boolean;
    match(other: ShortcutChord): ShortcutMatch;
    to_string(): string;
    static equal(data1: object | null, data2: object | null): boolean;
    static hash(data: object | null): number;
}
export class ShortcutChordTable  {
    constructor(config?: properties);
    add(chord: ShortcutChord, data: object | null): void;
    foreach(foreach_func: ShortcutChordTableForeach, foreach_data: object | null): void;
    free(): void;
    lookup(chord: ShortcutChord, data: object | null): ShortcutMatch;
    lookup_data(data: object | null): ShortcutChord;
    printf(): void;
    remove(chord: ShortcutChord): boolean;
    remove_data(data: object | null): boolean;
    set_free_func(notify: GLib.DestroyNotify): void;
    size(): number;
}
export class ShortcutEntry  {
    constructor(config?: properties);
    command: string;
    phase: ShortcutPhase;
    default_accel: string;
    section: string;
    group: string;
    title: string;
    subtitle: string;
}
export class Trie  {
    constructor(config?: properties);
    destroy(): void;
    insert(key: string, value: object | null): void;
    lookup(key: string): object | null;
    ref(): Trie;
    remove(key: string): boolean;
    traverse(key: string, order: GLib.TraverseType, flags: GLib.TraverseFlags, max_depth: number, func: TrieTraverseFunc, user_data: object | null): void;
    unref(): void;
}
export interface Dock  {
    manager: DockManager;
}
export interface DockItem  {
    adopt(child: DockItem): boolean;
    close(): boolean;
    emit_presented(): void;
    get_can_close(): boolean;
    get_can_minimize(): boolean;
    get_child_visible(child: DockItem): boolean;
    get_icon_name(): string | null;
    get_manager(): DockManager | null;
    get_parent(): DockItem | null;
    get_title(): string | null;
    has_widgets(): boolean;
    minimize(child: DockItem, position: Gtk.PositionType): [boolean, Gtk.PositionType];
    needs_attention(): void;
    present(): void;
    present_child(child: DockItem): void;
    ref_gicon(): Gio.Icon | null;
    release(child: DockItem): void;
    set_child_visible(child: DockItem, child_visible: boolean): void;
    set_manager(manager: DockManager | null): void;
    update_visibility(): void;
}
export interface GraphRenderer  {
    render(table: GraphModel, x_begin: number, x_end: number, y_begin: number, y_end: number, cr: cairo.Context, area: cairo.RectangleInt): void;
}
export interface Preferences  {
    add_custom(page_name: string, group_name: string, widget: Gtk.Widget, keywords: string | null, priority: number): number;
    add_file_chooser(page_name: string, group_name: string, schema_id: string, key: string, path: string, title: string, subtitle: string, action: Gtk.FileChooserAction, keywords: string, priority: number): number;
    add_font_button(page_name: string, group_name: string, schema_id: string, key: string, title: string, keywords: string, priority: number): number;
    add_group(page_name: string, group_name: string, title: string, priority: number): void;
    add_list_group(page_name: string, group_name: string, title: string, mode: Gtk.SelectionMode, priority: number): void;
    add_page(page_name: string, title: string, priority: number): void;
    add_radio(page_name: string, group_name: string, schema_id: string, key: string, path: string | null, variant_string: string | null, title: string | null, subtitle: string | null, keywords: string | null, priority: number): number;
    add_spin_button(page_name: string, group_name: string, schema_id: string, key: string, path: string, title: string, subtitle: string, keywords: string, priority: number): number;
    add_switch(page_name: string, group_name: string, schema_id: string, key: string, path: string | null, variant_string: string | null, title: string | null, subtitle: string | null, keywords: string | null, priority: number): number;
    get_widget(widget_id: number): Gtk.Widget | null;
    remove_id(widget_id: number): boolean;
    set_page(page_name: string, map: GLib.HashTable): void;
}