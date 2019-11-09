
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as Gladeui from "gladeui";
import * as GdkPixbuf from "gdkpixbuf";
import * as Gdk from "gdk";
import * as cairo from "cairo";
import * as GModule from "gmodule";
/**
 * gladeui.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type ActionActivateFunc = (adaptor: WidgetAdaptor, object: GObject.Object, action_path: string) => void;
export type AddChildFunc = (adaptor: WidgetAdaptor, parent: GObject.Object, child: GObject.Object) => void;
export type AddChildVerifyFunc = (adaptor: WidgetAdaptor, parent: GObject.Object, child: GObject.Object, user_feedback: boolean) => boolean;
export type CatalogInitFunc = (name: string) => void;
export type ChildActionActivateFunc = (adaptor: WidgetAdaptor, container: GObject.Object, object: GObject.Object, action_path: string) => void;
export type ChildGetPropertyFunc = (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object, property_name: string, value: GObject.Value) => void;
export type ChildSetPropertyFunc = (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object, property_name: string, value: GObject.Value) => void;
export type ChildVerifyPropertyFunc = (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object, property_name: string, value: GObject.Value) => boolean;
export type DependsFunc = (adaptor: WidgetAdaptor, widget: Widget, another: Widget) => boolean;
export type DestroyObjectFunc = (adaptor: WidgetAdaptor, object: GObject.Object) => void;
export type GetPropertyFunc = (adaptor: WidgetAdaptor, object: GObject.Object, property_name: string, value: GObject.Value) => void;
export type PostCreateFunc = (adaptor: WidgetAdaptor, object: GObject.Object, reason: CreateReason) => void;
export type ReadWidgetFunc = (adaptor: WidgetAdaptor, widget: Widget, node: XmlNode) => void;
export type RemoveChildFunc = (adaptor: WidgetAdaptor, parent: GObject.Object, child: GObject.Object) => void;
export type ReplaceChildFunc = (adaptor: WidgetAdaptor, container: GObject.Object, old_obj: GObject.Object, new_obj: GObject.Object) => void;
export type SetPropertyFunc = (adaptor: WidgetAdaptor, object: GObject.Object, property_name: string, value: GObject.Value) => void;
export type StringFromValueFunc = (adaptor: WidgetAdaptor, klass: unknown, value: GObject.Value) => string;
export type VerifyPropertyFunc = (adaptor: WidgetAdaptor, object: GObject.Object, property_name: string, value: GObject.Value) => boolean;
export type WriteWidgetFunc = (adaptor: WidgetAdaptor, widget: Widget, context: XmlContext, node: XmlNode) => void;
export const DEVHELP_FALLBACK_ICON_FILE: string;
export const DEVHELP_ICON_NAME: string;
export const ENV_BUNDLED: string;
export const ENV_CATALOG_PATH: string;
export const ENV_ICON_THEME_PATH: string;
export const ENV_MODULE_PATH: string;
export const ENV_PIXMAP_DIR: string;
export const ENV_TESTING: string;
export const GTKBUILDER_VERSIONING_BASE_MAJOR: number;
export const GTKBUILDER_VERSIONING_BASE_MINOR: number;
export const TAG_ACTION: string;
export const TAG_ACTIONS: string;
export const TAG_ACTION_ACTIVATE_FUNCTION: string;
export const TAG_ACTION_SUBMENU_FUNCTION: string;
export const TAG_ADAPTOR: string;
export const TAG_ADD_CHILD_FUNCTION: string;
export const TAG_ADD_CHILD_VERIFY_FUNCTION: string;
export const TAG_ANARCHIST: string;
export const TAG_ATK_PROPERTY: string;
export const TAG_BOOK: string;
export const TAG_BUILDER_SINCE: string;
export const TAG_CHILD_ACTION_ACTIVATE_FUNCTION: string;
export const TAG_CHILD_GET_PROP_FUNCTION: string;
export const TAG_CHILD_PROPERTY: string;
export const TAG_CHILD_SET_PROP_FUNCTION: string;
export const TAG_CHILD_VERIFY_FUNCTION: string;
export const TAG_COMMENT: string;
export const TAG_COMMON: string;
export const TAG_CONSTRUCTOR_FUNCTION: string;
export const TAG_CONSTRUCT_OBJECT_FUNCTION: string;
export const TAG_CONSTRUCT_ONLY: string;
export const TAG_CONTEXT: string;
export const TAG_CREATE_EDITABLE_FUNCTION: string;
export const TAG_CREATE_EPROP_FUNCTION: string;
export const TAG_CREATE_TYPE: string;
export const TAG_CREATE_WIDGET_FUNCTION: string;
export const TAG_CUSTOM_LAYOUT: string;
export const TAG_DEEP_POST_CREATE_FUNCTION: string;
export const TAG_DEFAULT: string;
export const TAG_DEFAULT_HEIGHT: string;
export const TAG_DEFAULT_PALETTE_STATE: string;
export const TAG_DEFAULT_WIDTH: string;
export const TAG_DEPENDS: string;
export const TAG_DEPENDS_FUNCTION: string;
export const TAG_DEPRECATED: string;
export const TAG_DESTROY_OBJECT_FUNCTION: string;
export const TAG_DISABLED: string;
export const TAG_DISPLAYABLE_VALUES: string;
export const TAG_DOMAIN: string;
export const TAG_EDITABLE: string;
export const TAG_EVENT_HANDLER_CONNECTED: string;
export const TAG_EXPANDED: string;
export const TAG_FALSE: string;
export const TAG_GENERIC_NAME: string;
export const TAG_GET_CHILDREN_FUNCTION: string;
export const TAG_GET_FUNCTION: string;
export const TAG_GET_INTERNAL_CHILD_FUNCTION: string;
export const TAG_GET_TYPE_FUNCTION: string;
export const TAG_GLADE_CATALOG: string;
export const TAG_GLADE_WIDGET_CLASS: string;
export const TAG_GLADE_WIDGET_CLASSES: string;
export const TAG_GLADE_WIDGET_CLASS_REF: string;
export const TAG_GLADE_WIDGET_GROUP: string;
export const TAG_HAS_CONTEXT: string;
export const TAG_ICON_NAME: string;
export const TAG_ICON_PREFIX: string;
export const TAG_ID: string;
export const TAG_IGNORE: string;
export const TAG_IMPORTANT: string;
export const TAG_INIT_FUNCTION: string;
export const TAG_INTERNAL_CHILDREN: string;
export const TAG_KEY: string;
export const TAG_LIBRARY: string;
export const TAG_MAX_VALUE: string;
export const TAG_MIN_VALUE: string;
export const TAG_MULTILINE: string;
export const TAG_NAME: string;
export const TAG_NEEDS_SYNC: string;
export const TAG_NICK: string;
export const TAG_NO: string;
export const TAG_OPTIONAL: string;
export const TAG_OPTIONAL_DEFAULT: string;
export const TAG_PACKING_ACTIONS: string;
export const TAG_PACKING_DEFAULTS: string;
export const TAG_PACKING_PROPERTIES: string;
export const TAG_PARENT: string;
export const TAG_PARENTLESS_WIDGET: string;
export const TAG_PARENT_CLASS: string;
export const TAG_POST_CREATE_FUNCTION: string;
export const TAG_PROPERTIES: string;
export const TAG_PROPERTY: string;
export const TAG_QUERY: string;
export const TAG_READ_CHILD_FUNCTION: string;
export const TAG_READ_WIDGET_FUNCTION: string;
export const TAG_REMOVE_CHILD_FUNCTION: string;
export const TAG_REPLACE_CHILD_FUNCTION: string;
export const TAG_RESOURCE: string;
export const TAG_SAVE: string;
export const TAG_SAVE_ALWAYS: string;
export const TAG_SET_FUNCTION: string;
export const TAG_SIGNAL: string;
export const TAG_SIGNALS: string;
export const TAG_SPEC: string;
export const TAG_SPECIAL_CHILD_TYPE: string;
export const TAG_SPECIFICATIONS: string;
export const TAG_STOCK: string;
export const TAG_STOCK_ICON: string;
export const TAG_STRING_FROM_VALUE_FUNCTION: string;
export const TAG_TARGETABLE: string;
export const TAG_THEMED_ICON: string;
export const TAG_TITLE: string;
export const TAG_TOOLTIP: string;
export const TAG_TOPLEVEL: string;
export const TAG_TRANSFER_ON_PASTE: string;
export const TAG_TRANSLATABLE: string;
export const TAG_TRUE: string;
export const TAG_TYPE: string;
export const TAG_USE_PLACEHOLDERS: string;
export const TAG_VALUE: string;
export const TAG_VALUE_TYPE: string;
export const TAG_VERIFY_FUNCTION: string;
export const TAG_VERSION: string;
export const TAG_VERSION_SINCE: string;
export const TAG_VISIBLE: string;
export const TAG_WEIGHT: string;
export const TAG_WRITE_CHILD_FUNCTION: string;
export const TAG_WRITE_WIDGET_AFTER_FUNCTION: string;
export const TAG_WRITE_WIDGET_FUNCTION: string;
export const TAG_YES: string;
export const UNNAMED_PREFIX: string;
export const XML_TAG_AFTER: string;
export const XML_TAG_CHILD: string;
export const XML_TAG_CLASS: string;
export const XML_TAG_FILENAME: string;
export const XML_TAG_HANDLER: string;
export const XML_TAG_I18N_TRUE: string;
export const XML_TAG_ID: string;
export const XML_TAG_INTERNAL_CHILD: string;
export const XML_TAG_LIB: string;
export const XML_TAG_NAME: string;
export const XML_TAG_OBJECT: string;
export const XML_TAG_PACKING: string;
export const XML_TAG_PLACEHOLDER: string;
export const XML_TAG_PROJECT: string;
export const XML_TAG_PROPERTY: string;
export const XML_TAG_REQUIRES: string;
export const XML_TAG_SIGNAL: string;
export const XML_TAG_SIGNAL_FALSE: string;
export const XML_TAG_SIGNAL_TRUE: string;
export const XML_TAG_SOURCE: string;
export const XML_TAG_SOURCES: string;
export const XML_TAG_STOCK_ID: string;
export const XML_TAG_SWAPPED: string;
export const XML_TAG_TEMPLATE: string;
export const XML_TAG_TYPE: string;
export const XML_TAG_VERSION: string;
export const XML_TAG_WIDGET: string;
/**
 * Adds a new path to the list of path to look catalogs for.
 */
export function catalog_add_path(path: string): void;
/**
 * Destroy and free all resources related with every loaded catalog.
 */
export function catalog_destroy_all(): void;
/**
 * 
 */
export function catalog_is_loaded(name: string): boolean;
/**
 * Remove path from the list of path to look catalogs for.
 * NULL to remove all paths.
 */
export function catalog_remove_path(path: string): void;
/**
 * 
 */
export function cursor_get_add_widget_pixbuf(): GdkPixbuf.Pixbuf;
/**
 * Initializes cursors for use with glade_cursor_set().
 */
export function cursor_init(): void;
/**
 * Sets the cursor for @window to something appropriate based on @type.
 * (also sets the cursor on all visible project widgets)
 */
export function cursor_set(project: Project, window: Gdk.Window, type: CursorType): void;
/**
 * 
 */
export function displayable_value_is_disabled(type: GType, value: string): boolean;
/**
 * 
 */
export function displayable_value_set_disabled(type: GType, value: string, disabled: boolean): void;
/**
 * 
 */
export function get_debug_flags(): number;
/**
 * 
 */
export function get_displayable_value(type: GType, value: string): string;
/**
 * 
 */
export function get_value_from_displayable(type: GType, displayabe: string): string;
/**
 * Initialization function for libgladeui (not #GladeApp)
 * It builds paths, bind text domain, and register icons
 */
export function init(): void;
/**
 * 
 */
export function init_debug_flags(): void;
/**
 * 
 */
export function propert_get_insensitive_tooltip(property: Property): string;
/**
 * 
 */
export function property_class_get_default_from_spec(spec: GObject.ParamSpec): GObject.Value;
/**
 * Updates the @property_class with the contents of the node in the xml
 * file. Only the values found in the xml file are overridden.
 */
export function property_class_update_from_node(node: XmlNode, object_type: GType, property_class: unknown, domain: string): boolean;
/**
 * 
 */
export function register_displayable_value(type: GType, value: string, domain: string, string: string): void;
/**
 * 
 */
export function register_translated_value(type: GType, value: string, string: string): void;
/**
 * Sets up a log handler to manage all %G_LOG_LEVEL_MASK errors of domain
 * :
 * GLib, GLib-GObject, Gtk, Gdk, and domainless.
 */
export function setup_log_handlers(): void;
/**
 * 
 */
export function standard_stock_append_prefix(prefix: string): void;
/**
 * 
 */
export function type_has_displayable_values(type: GType): boolean;
/**
 * 
 */
export function util_canonical_path(path: string): string;
/**
 * 
 */
export function util_check_and_warn_scrollable(parent: Widget, child_adaptor: WidgetAdaptor, parent_widget: Gtk.Widget): boolean;
/**
 * This is a #GCompareFunc that compares the labels of two stock items,
 * ignoring any '_' characters. It isn't particularly efficient.
 */
export function util_compare_stock_labels(a: object | null, b: object | null): number;
/**
 * 
 */
export function util_count_placeholders(parent: Widget): number;
/**
 * Duplicates @name, but the copy has two underscores in place of any sin
 * gle
 * underscore in the original.
 */
export function util_duplicate_underscores(name: string): string;
/**
 * Checks whether the file at @path is writeable
 */
export function util_file_is_writeable(path: string): boolean;
/**
 * 
 */
export function util_filename_to_icon_name(value: string): string;
/**
 * Looks through @model for the #GtkTreeIter corresponding to
 * @findme under @column.
 */
export function util_find_iter_by_widget(model: Gtk.TreeModel, findme: Widget, column: number): Gtk.TreeIter;
/**
 * Gets the UTC modification time of file @filename.
 */
export function util_get_file_mtime(filename: string): number;
/**
 * Returns the type using the "get type" function name based on @name.
 * If the @have_func flag is true,@name is used directly, otherwise the g
 * et-type
 * function is contrived from @name then used.
 */
export function util_get_type_from_name(name: string, have_func: boolean): GType;
/**
 * 
 */
export function util_have_devhelp(): boolean;
/**
 * 
 */
export function util_icon_name_to_filename(value: string): string;
/**
 * 
 */
export function util_object_is_loading(object: GObject.Object): boolean;
/**
 * Return a usable version of a property identifier as found
 * in a freshly parserd #GladeInterface
 */
export function util_read_prop_name(str: string): string;
/**
 * 
 */
export function util_remove_scroll_events(widget: Gtk.Widget): void;
/**
 * Replaces each occurance of the character @a in @str to @b.
 */
export function util_replace(str: string, a: number, b: number): void;
/**
 * 
 */
export function util_search_devhelp(book: string, page: string, search: string): void;
/**
 * Portable function for showing an URL @url in a web browser.
 */
export function util_url_show(url: string): boolean;
/**
 * Parse a boolean value
 */
export function utils_boolean_from_string(string: string, value: boolean): boolean;
/**
 * 
 */
export function utils_cairo_draw_line(cr: cairo.Context, color: Gdk.Color, x1: number, y1: number, x2: number, y2: number): void;
/**
 * 
 */
export function utils_cairo_draw_rectangle(cr: cairo.Context, color: Gdk.Color, filled: boolean, x: number, y: number, width: number, height: number): void;
/**
 * 
 */
export function utils_enum_string_from_value(enum_type: GType, value: number): string;
/**
 * 
 */
export function utils_enum_string_from_value_displayable(flags_type: GType, value: number): string;
/**
 * 
 */
export function utils_enum_value_from_string(enum_type: GType, strval: string): number;
/**
 * 
 */
export function utils_flags_string_from_value(enum_type: GType, value: number): string;
/**
 * 
 */
export function utils_flags_string_from_value_displayable(flags_type: GType, value: number): string;
/**
 * 
 */
export function utils_flags_value_from_string(enum_type: GType, strval: string): number;
/**
 * Get's the pointer position relative to @widget, while @window and @dev
 * ice
 * are not absolutely needed, they should be passed wherever possible.
 */
export function utils_get_pointer(widget: Gtk.Widget, window: Gdk.Window, device: Gdk.Device, x: number, y: number): void;
/**
 * This function is meant to be attached to key-press-event of a toplevel
 * ,
 * it simply allows the window contents to treat key events /before/
 * accelerator keys come into play (this way widgets dont get deleted
 * when cutting text in an entry etc.).
 * Creates a liststore suitable for comboboxes and such to
 * chose from a variety of types.
 */
export function utils_hijack_key_press(win: Gtk.Window, event: Gdk.EventKey, user_data: object | null): number;
/**
 * 
 */
export function utils_replace_home_dir_with_tilde(path: string): string;
/**
 * Serializes #GValue into a string
 * (using glade conversion routines)
 */
export function utils_string_from_value(value: GObject.Value): string;
/**
 * Allocates and sets a #GValue of type @type
 * set to @string (using glade conversion routines)
 */
export function utils_value_from_string(type: GType, string: string, project: Project): GObject.Value;
/**
 * 
 */
export function xml_dump_from_context(context: XmlContext): string;
/**
 * 
 */
export function xml_get_boolean(node: XmlNode, name: string, _default: boolean): boolean;
/**
 * Gets a string containing the content of @node_in.
 */
export function xml_get_content(node_in: XmlNode): string;
/**
 * 
 */
export function xml_get_property_boolean(node_in: XmlNode, name: string, _default: boolean): boolean;
/**
 * 
 */
export function xml_get_property_double(node_in: XmlNode, name: string, _default: number): number;
/**
 * 
 */
export function xml_get_property_int(node_in: XmlNode, name: string, _default: number): number;
/**
 * 
 */
export function xml_get_property_string(node_in: XmlNode, name: string): string;
/**
 * 
 */
export function xml_get_property_string_required(node_in: XmlNode, name: string, xtra: string): string;
/**
 * 
 */
export function xml_get_property_version(node_in: XmlNode, name: string, major: number, minor: number): boolean;
/**
 * Gets an integer value for a node either carried as an attribute or as
 * the content of a child.
 */
export function xml_get_value_int(node_in: XmlNode, name: string, val: number): boolean;
/**
 * This is a wrapper around glade_xml_get_value_int(), only it emits
 * a g_warning() if @node_in did not contain the requested tag
 */
export function xml_get_value_int_required(node: XmlNode, name: string, val: number): boolean;
/**
 * 
 */
export function xml_get_value_string(node: XmlNode, name: string): string;
/**
 * 
 */
export function xml_get_value_string_required(node: XmlNode, name: string, xtra_info: string): string;
/**
 * 
 */
export function xml_load_sym_from_node(node_in: XmlNode, module: GModule.Module, tagname: string, sym_location: object | null): boolean;
/**
 * Sets the content of @node to @content.
 */
export function xml_set_content(node_in: XmlNode, content: string): void;
/**
 * Sets the property @name in @node_in to @val
 */
export function xml_set_value(node_in: XmlNode, name: string, val: string): void;
export enum CreateReason {
    USER = 0,
    COPY = 1,
    LOAD = 2,
    REBUILD = 3,
    REASONS = 4,
}
export enum CursorType {
    SELECTOR = 0,
    ADD_WIDGET = 1,
    RESIZE_TOP_LEFT = 2,
    RESIZE_TOP_RIGHT = 3,
    RESIZE_BOTTOM_LEFT = 4,
    RESIZE_BOTTOM_RIGHT = 5,
    RESIZE_LEFT = 6,
    RESIZE_RIGHT = 7,
    RESIZE_TOP = 8,
    RESIZE_BOTTOM = 9,
    DRAG = 10,
}
export enum EditorPageType {
    GENERAL = 0,
    COMMON = 1,
    PACKING = 2,
    ATK = 3,
    QUERY = 4,
    SIGNAL = 5,
}
export enum ItemAppearance {
    ICON_AND_LABEL = 0,
    ICON_ONLY = 1,
    LABEL_ONLY = 2,
}
export enum PointerMode {
    SELECT = 0,
    ADD_WIDGET = 1,
    DRAG_RESIZE = 2,
    MARGIN_EDIT = 3,
    ALIGN_EDIT = 4,
}
export enum ProjectModelColumns {
    COLUMN_ICON_NAME = 0,
    COLUMN_NAME = 1,
    COLUMN_TYPE_NAME = 2,
    COLUMN_OBJECT = 3,
    COLUMN_MISC = 4,
    COLUMN_WARNING = 5,
    N_COLUMNS = 6,
}
export enum SignalModelColumns {
    COLUMN_NAME = 0,
    COLUMN_SHOW_NAME = 1,
    COLUMN_HANDLER = 2,
    COLUMN_OBJECT = 3,
    COLUMN_SWAP = 4,
    COLUMN_AFTER = 5,
    COLUMN_TOOLTIP = 6,
    COLUMN_SIGNAL = 7,
    COLUMN_DETAIL = 8,
    N_COLUMNS = 9,
}
export enum Stock {
    DUMMY = 0,
}
export enum StockImage {
    DUMMY = 0,
}
export enum UIMessageType {
    INFO = 0,
    WARN = 1,
    ERROR = 2,
    ARE_YOU_SURE = 3,
    YES_OR_NO = 4,
}
export enum UtilFileDialogType {
    OPEN = 0,
    SAVE = 1,
}
export type GList = object;
export enum DebugFlag {
    REF_COUNTS = 1,
    WIDGET_EVENTS = 2,
    COMMANDS = 4,
    PROPERTIES = 8,
    VERIFY = 16,
}
export enum PropertyState {
    NORMAL = 0,
    CHANGED = 1,
    UNSUPPORTED = 2,
    SUPPORT_DISABLED = 4,
}
export enum SupportMask {
    OK = 0,
    DEPRECATED = 1,
    MISMATCH = 2,
}
export enum VerifyFlags {
    VERSIONS = 1,
    DEPRECATIONS = 2,
    UNRECOGNIZED = 4,
}
export class AdaptorChooser extends Gtk.Box {
    constructor(config?: properties);
    project: Project;
    set_project(project: Project): void;
}
export class App extends GObject.Object {
    constructor(config?: properties);
    static add_project(project: Project): void;
    static config_save(): number;
    static do_event(event: Gdk.Event): boolean;
    static get_bin_dir(): string;
    static get_catalog_version(name: string, major: number, minor: number): boolean;
    static get_catalogs_dir(): string;
    static get_config(): GLib.KeyFile;
    static get_lib_dir(): string;
    static get_locale_dir(): string;
    static get_modules_dir(): string;
    static get_pixmaps_dir(): string;
    static is_project_loaded(project_path: string): boolean;
    static remove_project(project: Project): void;
    static search_docs(book: string, page: string, search: string): void;
    static set_accel_group(accel_group: Gtk.AccelGroup): void;
    static set_window(window: Gtk.Widget): void;
}
export class BaseEditor extends Gtk.Box {
    constructor(config?: properties);
    container: GObject.Object;
    add_default_properties(gchild: Widget): void;
    add_editable(gchild: Widget, page: EditorPageType): void;
    add_label(str: string): void;
    set_show_signal_editor(val: boolean): void;
    vfunc_change_type(arg1: Widget, arg2: GType): boolean;
    vfunc_child_selected(arg1: Widget): void;
    vfunc_delete_child(arg1: Widget, arg2: Widget): boolean;
    vfunc_get_display_name(arg1: Widget): string;
    vfunc_move_child(arg1: Widget, arg2: Widget): boolean;
}
export class CellRendererIcon extends Gtk.CellRendererPixbuf {
    constructor(config?: properties);
    activatable: boolean;
    active: boolean;
    get_activatable(): boolean;
    get_active(): boolean;
    set_activatable(setting: boolean): void;
    set_active(setting: boolean): void;
    vfunc_activate(path: string): void;
}
export class Clipboard extends GObject.Object {
    constructor(config?: properties);
    readonly has_selection: boolean;
    clear(): void;
    get_has_selection(): boolean;
}
export class Command  {
    constructor(config?: properties);
    readonly priv: CommandPrivate;
    collapse(other: Command): void;
    description(): string;
    execute(): boolean;
    group_id(): number;
    undo(): boolean;
    unifies(other: Command): boolean;
    static add_signal(glade_widget: Widget, signal: Signal): void;
    static change_signal(glade_widget: Widget, old_signal: Signal, new_signal: Signal): void;
    static get_group_depth(): number;
    static lock_widget(widget: Widget, lock: Widget): void;
    static pop_group(): void;
    static remove_signal(glade_widget: Widget, signal: Signal): void;
    static set_i18n(property: Property, translatable: boolean, context: string, comment: string): void;
    static set_name(glade_widget: Widget, name: string): void;
    static set_project_domain(project: Project, domain: string): void;
    static set_project_license(project: Project, license: string): void;
    static set_project_resource_path(project: Project, path: string): void;
    static set_project_target(project: Project, catalog: string, major: number, minor: number): void;
    static set_project_template(project: Project, widget: Widget): void;
    static set_property_enabled(property: Property, enabled: boolean): void;
    static set_property_value(property: Property, value: GObject.Value): void;
    static unlock_widget(widget: Widget): void;
}
export class DesignView extends Gtk.Box {
    constructor(config?: properties);
    project: Project;
}
export class EPropBool  {
    constructor(config?: properties);
}
export class EPropCheck  {
    constructor(config?: properties);
}
export class EPropColor  {
    constructor(config?: properties);
}
export class EPropEnum  {
    constructor(config?: properties);
}
export class EPropFlags  {
    constructor(config?: properties);
}
export class EPropNamedIcon  {
    constructor(config?: properties);
}
export class EPropNumeric  {
    constructor(config?: properties);
}
export class EPropObject  {
    constructor(config?: properties);
}
export class EPropObjects  {
    constructor(config?: properties);
}
export class EPropText  {
    constructor(config?: properties);
}
export class EPropUnichar  {
    constructor(config?: properties);
}
export class Editor extends Gtk.Box {
    constructor(config?: properties);
    readonly class_field: string;
    show_boder: boolean;
    widget: Widget;
    hide_class_field(): void;
    hide_info(): void;
    load_widget(widget: Widget): void;
    show_class_field(): void;
    show_info(): void;
    static query_dialog(widget: Widget): boolean;
    static reset_dialog_run(parent: Gtk.Widget, gwidget: Widget): void;
}
export class EditorProperty  {
    constructor(config?: properties);
    custom_text: string;
    disable_check: boolean;
    property_class: object;
    use_command: boolean;
    readonly priv: EditorPropertyPrivate;
    commit(value: GObject.Value): void;
    commit_no_callback(value: GObject.Value): void;
    get_custom_text(): string;
    get_disable_check(): boolean;
    load(property: Property): void;
    load_by_widget(widget: Widget): void;
    loading(): boolean;
    set_custom_text(custom_text: string): void;
    set_disable_check(disable_check: boolean): void;
    static show_i18n_dialog(parent: Gtk.Widget, text: string, context: string, comment: string, translatable: boolean): boolean;
    static show_object_dialog(project: Project, title: string, parent: Gtk.Widget, object_type: GType, exception: Widget, object: Widget): boolean;
    static show_resource_dialog(project: Project, parent: Gtk.Widget, filename: string): boolean;
}
export class EditorSkeleton extends Gtk.Box {
    constructor(config?: properties);
    add_editor(editor: Editable): void;
}
export class EditorTable extends Gtk.Grid {
    constructor(config?: properties);
    page_type: EditorPageType;
}
export class Inspector extends Gtk.Box {
    constructor(config?: properties);
    project: Project;static new_with_project(project: Project): Gtk.Widget;
    set_project(project: Project): void;
    vfunc_item_activated(): void;
    vfunc_selection_changed(): void;
}
export class NamedIconChooserDialog extends Gtk.Dialog {
    constructor(config?: properties);
    get_context(): string;
    get_icon_name(): string;
    set_context(context: string): boolean;
    set_icon_name(icon_name: string): void;
    vfunc_icon_activated(): void;
    vfunc_selection_changed(): void;
}
export class Palette extends Gtk.Box {
    constructor(config?: properties);
    item_appearance: ItemAppearance;
    project: Project;
    show_selector_button: boolean;
    use_small_item_icons: boolean;
    get_item_appearance(): ItemAppearance;
    get_show_selector_button(): boolean;
    get_use_small_item_icons(): boolean;
    set_item_appearance(item_appearance: ItemAppearance): void;
    set_project(project: Project): void;
    set_show_selector_button(show_selector_button: boolean): void;
    set_use_small_item_icons(use_small_item_icons: boolean): void;
    vfunc_refresh(): void;
}
export class ParamObjects  {
    constructor(config?: properties);
}
export class Placeholder extends Gtk.Widget {
    constructor(config?: properties);
}
export class Project extends GObject.Object {
    constructor(config?: properties);
    readonly add_item: WidgetAdaptor;
    css_provider_path: string;
    readonly has_selection: boolean;
    license: string;
    readonly modified: boolean;
    readonly path: string;
    readonly pointer_mode: PointerMode;
    readonly read_only: boolean;
    resource_path: string;
    template: Widget;
    translation_domain: string;
    add_object(object: GObject.Object): void;
    autosave(): boolean;
    available_widget_name(widget: Widget, name: string): boolean;
    backup(path: string): boolean;
    cancel_load(): void;
    command_cut(): void;
    command_delete(): void;
    command_paste(placeholder: Placeholder): void;
    copy_selection(): void;
    display_dependencies(): string;
    get_css_provider_path(): string;
    get_file_mtime(): number;
    get_has_selection(): boolean;
    get_license(): string;
    get_modified(): boolean;
    get_name(): string;
    get_path(): string;
    get_pointer_mode(): PointerMode;
    get_readonly(): boolean;
    get_resource_path(): string;
    get_target_version(catalog: string, major: number, minor: number): void;
    get_translation_domain(): string;
    has_object(object: GObject.Object): boolean;
    is_loading(): boolean;
    is_selected(object: GObject.Object): boolean;
    load_cancelled(): boolean;
    load_from_file(path: string): boolean;
    new_widget_name(widget: Widget, base_name: string): string;
    preview(gwidget: Widget): void;
    properties(): void;
    push_progress(): void;
    push_undo(cmd: Command): void;
    queue_selection_changed(): void;
    redo(): void;
    remove_object(object: GObject.Object): void;
    reset_path(): void;
    resource_fullpath(resource: string): string;
    save(path: string): boolean;
    save_verify(path: string, flags: VerifyFlags): boolean;
    selection_add(object: GObject.Object, emit_signal: boolean): void;
    selection_changed(): void;
    selection_clear(emit_signal: boolean): void;
    selection_remove(object: GObject.Object, emit_signal: boolean): void;
    selection_set(object: GObject.Object, emit_signal: boolean): void;
    set_add_item(adaptor: WidgetAdaptor): void;
    set_css_provider_path(path: string): void;
    set_license(license: string): void;
    set_pointer_mode(mode: PointerMode): void;
    set_resource_path(path: string): void;
    set_target_version(catalog: string, major: number, minor: number): void;
    set_template(widget: Widget): void;
    set_translation_domain(domain: string): void;
    set_widget_name(widget: Widget, name: string): void;
    undo(): void;
    verify(saving: boolean, flags: VerifyFlags): boolean;
    verify_widget_adaptor(adaptor: WidgetAdaptor, mask: SupportMask): string;
    widget_changed(gwidget: Widget): void;
    widget_visibility_changed(widget: Widget, visible: boolean): void;
    writing_preview(): boolean;
    vfunc_add_object(widget: Widget): void;
    vfunc_changed(command: Command, forward: boolean): void;
    vfunc_close(): void;
    vfunc_parse_finished(): void;
    vfunc_push_undo(command: Command): void;
    vfunc_redo(): void;
    vfunc_remove_object(widget: Widget): void;
    vfunc_selection_changed(): void;
    vfunc_undo(): void;
    vfunc_widget_name_changed(widget: Widget): void;
    static verify_property(property: Property): void;
    static verify_signal(widget: Widget, signal: Signal): void;
}
export class Property extends GObject.Object {
    constructor(config?: properties);
    "class": object;
    enabled: boolean;
    i18n_comment: string;
    i18n_context: string;
    i18n_translatable: boolean;
    sensitive: boolean;
    readonly state: number;
    add_object(object: GObject.Object): void;
    _default(): boolean;
    equals_value(value: GObject.Value): boolean;
    get_default(value: GObject.Value): void;
    get_enabled(): boolean;
    get_save_always(): boolean;
    get_sensitive(): boolean;
    get_state(): PropertyState;
    get_support_warning(): string;
    get_value(value: GObject.Value): void;
    i18n_get_comment(): string;
    i18n_get_context(): string;
    i18n_get_translatable(): boolean;
    i18n_set_comment(str: string): void;
    i18n_set_context(str: string): void;
    i18n_set_translatable(translatable: boolean): void;
    inline_value(): GObject.Value;
    load(): void;
    make_string(): string;
    original_default(): boolean;
    original_reset(): void;
    read(project: Project, node: XmlNode): void;
    remove_object(object: GObject.Object): void;
    reset(): void;
    set_enabled(enabled: boolean): void;
    set_save_always(setting: boolean): void;
    set_sensitive(sensitive: boolean, reason: string): void;
    set_support_warning(disable: boolean, reason: string): void;
    set_value(value: GObject.Value): boolean;
    set_widget(widget: Widget): void;
    sync(): void;
    warn_usage(): boolean;
    write(context: XmlContext, node: XmlNode): void;
    static pop_superuser(): void;
    static push_superuser(): void;
    static superuser(): boolean;
}
export class PropertyLabel extends Gtk.EventBox {
    constructor(config?: properties);
    append_colon: boolean;
    custom_text: string;
    custom_tooltip: string;
    packing: boolean;
    property: Property;
    property_name: string;
    get_append_colon(): boolean;
    get_custom_text(): string;
    get_custom_tooltip(): string;
    get_packing(): boolean;
    get_property_name(): string;
    set_append_colon(append_colon: boolean): void;
    set_custom_text(custom_text: string): void;
    set_custom_tooltip(custom_tooltip: string): void;
    set_packing(packing: boolean): void;
    set_property(property: Property): void;
    set_property_name(property_name: string): void;
}
export class PropertyShell extends Gtk.Box {
    constructor(config?: properties);
    custom_text: string;
    disable_check: boolean;
    editor_type: string;
    packing: boolean;
    property_name: string;
    use_command: boolean;
    get_custom_text(): string;
    get_disable_check(): boolean;
    get_packing(): boolean;
    get_property_name(): string;
    get_use_command(): boolean;
    set_custom_text(custom_text: string): void;
    set_disable_check(disable_check: boolean): void;
    set_packing(packing: boolean): void;
    set_property_name(property_name: string): void;
    set_use_command(use_command: boolean): void;
}
export class Signal extends GObject.Object {
    constructor(config?: properties);
    after: boolean;
    "class": object;
    detail: string;
    handler: string;
    support_warning: string;
    swapped: boolean;
    userdata: string;
    equal(sig2: Signal): boolean;
    get_after(): boolean;
    get_class(): unknown;
    get_detail(): string;
    get_handler(): string;
    get_name(): string;
    get_support_warning(): string;
    get_swapped(): boolean;
    get_userdata(): string;
    set_after(after: boolean): void;
    set_detail(detail: string): void;
    set_handler(handler: string): void;
    set_support_warning(support_warning: string): void;
    set_swapped(swapped: boolean): void;
    set_userdata(userdata: string): void;
    write(context: XmlContext, node: XmlNode): void;
}
export class SignalEditor extends Gtk.Box {
    constructor(config?: properties);
    glade_widget: Gtk.TreeModel;
    enable_dnd(enabled: boolean): void;
    load_widget(widget: Widget): void;
}
export class SignalModel  {
    constructor(config?: properties);
    signals: object;
    widget: Widget;
    readonly priv: SignalModelPrivate;
}
export class Widget  {
    constructor(config?: properties);
    adaptor: WidgetAdaptor;
    anarchist: boolean;
    composite: boolean;
    internal: string;
    internal_name: string;
    name: string;
    object: GObject.Object;
    project: Project;
    properties: object;
    reason: number;
    template: Widget;
    template_exact: boolean;
    toplevel_height: number;
    toplevel_width: number;
    readonly visible: boolean;
    readonly priv: WidgetPrivate;
    add_child(child: Widget, at_mouse: boolean): void;
    add_prop_ref(property: Property): void;
    add_signal_handler(signal_handler: Signal): void;
    add_verify(child: Widget, user_feedback: boolean): boolean;
    change_signal_handler(old_signal_handler: Signal, new_signal_handler: Signal): void;
    child_get_property(child: Widget, property_name: string, value: GObject.Value): void;
    child_set_property(child: Widget, property_name: string, value: GObject.Value): void;
    copy_properties(template_widget: Widget, copy_parentless: boolean, exact: boolean): void;
    copy_signals(template_widget: Widget): void;
    depends(other: Widget): boolean;
    ensure_name(project: Project, use_command: boolean): void;
    event(event: Gdk.Event): boolean;
    generate_path_name(): string;
    get_display_name(): string;
    get_internal(): string;
    get_is_composite(): boolean;
    get_name(): string;
    has_decendant(type: GType): boolean;
    has_name(): boolean;
    has_prop_refs(): boolean;
    hide(): void;
    in_project(): boolean;
    is_ancestor(ancestor: Widget): boolean;
    lock(locked: Widget): void;
    object_get_property(property_name: string, value: GObject.Value): void;
    object_set_property(property_name: string, value: GObject.Value): void;
    pack_property_default(id_property: string): boolean;
    pack_property_reset(id_property: string): boolean;
    pack_property_set_enabled(id_property: string, enabled: boolean): boolean;
    pack_property_set_save_always(id_property: string, setting: boolean): boolean;
    pack_property_set_sensitive(id_property: string, sensitive: boolean, reason: string): boolean;
    pack_property_string(id_property: string, value: GObject.Value): string;
    placeholder_relation(widget: Widget): boolean;
    property_default(id_property: string): boolean;
    property_original_default(id_property: string): boolean;
    property_reset(id_property: string): boolean;
    property_set_enabled(id_property: string, enabled: boolean): boolean;
    property_set_save_always(id_property: string, setting: boolean): boolean;
    property_set_sensitive(id_property: string, sensitive: boolean, reason: string): boolean;
    property_string(id_property: string, value: GObject.Value): string;
    read_child(node: XmlNode): void;
    rebuild(): void;
    remove_child(child: Widget): void;
    remove_prop_ref(property: Property): void;
    remove_property(id_property: string): void;
    remove_signal_handler(signal_handler: Signal): void;
    replace(old_object: GObject.Object, new_object: GObject.Object): void;
    set_action_sensitive(action_path: string, sensitive: boolean): boolean;
    set_action_visible(action_path: string, sensitive: boolean): boolean;
    set_child_type_from_node(child: GObject.Object, node: XmlNode): void;
    set_in_project(in_project: boolean): void;
    set_internal(internal: string): void;
    set_is_composite(composite: boolean): void;
    set_name(name: string): void;
    set_pack_action_sensitive(action_path: string, sensitive: boolean): boolean;
    set_pack_action_visible(action_path: string, sensitive: boolean): boolean;
    set_packing_properties(container: Widget): void;
    set_parent(parent: Widget): void;
    set_project(project: Project): void;
    set_support_warning(warning: string): void;
    show(): void;
    support_changed(): void;
    support_warning(): string;
    unlock(): void;
    verify(): void;
    write(context: XmlContext, node: XmlNode): void;
    write_child(child: Widget, context: XmlContext, node: XmlNode): void;
    write_placeholder(object: GObject.Object, context: XmlContext, node: XmlNode): void;
    write_signals(context: XmlContext, node: XmlNode): void;
    write_special_child_prop(object: GObject.Object, context: XmlContext, node: XmlNode): void;
    static pop_superuser(): void;
    static push_superuser(): void;
    static superuser(): boolean;
}
export class WidgetAction  {
    constructor(config?: properties);
    "class": object;
    sensitive: boolean;
    visible: boolean;
    readonly priv: WidgetActionPrivate;
    get_sensitive(): boolean;
    get_visible(): boolean;
    set_sensitive(sensitive: boolean): void;
    set_visible(visible: boolean): void;
}
export class WidgetAdaptor  {
    constructor(config?: properties);
    book: string;
    catalog: string;
    readonly cursor: object;
    generic_name: string;
    icon_name: string;
    name: string;
    special_child_type: string;
    title: string;
    type: GType;
    readonly priv: WidgetAdaptorPrivate;
    action_activate(object: GObject.Object, action_path: string): void;
    action_add(action_path: string, label: string, stock: string, important: boolean): boolean;
    action_remove(action_path: string): boolean;
    add(container: GObject.Object, child: GObject.Object): void;
    add_verify(container: GObject.Object, child: GObject.Object, user_feedback: boolean): boolean;
    child_action_activate(container: GObject.Object, object: GObject.Object, action_path: string): void;
    child_get_property(container: GObject.Object, child: GObject.Object, property_name: string, value: GObject.Value): void;
    child_set_property(container: GObject.Object, child: GObject.Object, property_name: string, value: GObject.Value): void;
    child_verify_property(container: GObject.Object, child: GObject.Object, property_name: string, value: GObject.Value): boolean;
    depends(widget: Widget, another: Widget): boolean;
    destroy_object(object: GObject.Object): void;
    get_book(): string;
    get_catalog(): string;
    get_generic_name(): string;
    get_icon_name(): string;
    get_missing_icon(): string;
    get_name(): string;
    get_object_type(): GType;
    get_packing_default(container_adaptor: WidgetAdaptor, id: string): string;
    get_property(object: GObject.Object, property_name: string, value: GObject.Value): void;
    get_title(): string;
    has_child(container: GObject.Object, child: GObject.Object): boolean;
    has_internal_children(): boolean;
    is_container(): boolean;
    pack_action_add(action_path: string, label: string, stock: string, important: boolean): boolean;
    pack_action_remove(action_path: string): boolean;
    post_create(object: GObject.Object, reason: CreateReason): void;
    query(): boolean;
    read_child(widget: Widget, node: XmlNode): void;
    read_widget(widget: Widget, node: XmlNode): void;
    register(): void;
    remove(container: GObject.Object, child: GObject.Object): void;
    replace_child(container: GObject.Object, old_obj: GObject.Object, new_obj: GObject.Object): void;
    set_property(object: GObject.Object, property_name: string, value: GObject.Value): void;
    string_from_value(klass: unknown, value: GObject.Value): string;
    verify_property(object: GObject.Object, property_name: string, value: GObject.Value): boolean;
    write_child(widget: Widget, context: XmlContext, node: XmlNode): void;
    write_widget(widget: Widget, context: XmlContext, node: XmlNode): void;
    write_widget_after(widget: Widget, context: XmlContext, node: XmlNode): void;
}
export class AppPrivate  {
    constructor(config?: properties);
}
export class BaseEditorPrivate  {
    constructor(config?: properties);
}
export class Catalog  {
    constructor(config?: properties);
    get_book(): string;
    get_domain(): string;
    get_icon_prefix(): string;
    get_major_version(): number;
    get_minor_version(): number;
    get_name(): string;
    static add_path(path: string): void;
    static destroy_all(): void;
    static is_loaded(name: string): boolean;
    static remove_path(path: string): void;
}
export class CellRendererIconPrivate  {
    constructor(config?: properties);
}
export class ClipboardPrivate  {
    constructor(config?: properties);
}
export class CommandPrivate  {
    constructor(config?: properties);
}
export class Cursor  {
    constructor(config?: properties);
    selector: Gdk.Cursor;
    add_widget: Gdk.Cursor;
    resize_top_left: Gdk.Cursor;
    resize_top_right: Gdk.Cursor;
    resize_bottom_left: Gdk.Cursor;
    resize_bottom_right: Gdk.Cursor;
    resize_left: Gdk.Cursor;
    resize_right: Gdk.Cursor;
    resize_top: Gdk.Cursor;
    resize_bottom: Gdk.Cursor;
    drag: Gdk.Cursor;
    add_widget_pixbuf: GdkPixbuf.Pixbuf;
    static get_add_widget_pixbuf(): GdkPixbuf.Pixbuf;
    static init(): void;
    static set(project: Project, window: Gdk.Window, type: CursorType): void;
}
export class DesignViewPrivate  {
    constructor(config?: properties);
}
export class EditableInterface  {
    constructor(config?: properties);
    readonly g_iface: GObject.TypeInterface;
}
export class EditorPrivate  {
    constructor(config?: properties);
}
export class EditorPropertyPrivate  {
    constructor(config?: properties);
}
export class EditorSkeletonPrivate  {
    constructor(config?: properties);
}
export class EditorTablePrivate  {
    constructor(config?: properties);
}
export class IDAllocator  {
    constructor(config?: properties);
    allocate(): number;
    destroy(): void;
    release(id: number): void;
}
export class InspectorPrivate  {
    constructor(config?: properties);
}
export class NameContext  {
    constructor(config?: properties);
    add_name(name: string): boolean;
    destroy(): void;
    has_name(name: string): boolean;
    n_names(): number;
    new_name(base_name: string): string;
    release_name(name: string): void;
}
export class NamedIconChooserDialogPrivate  {
    constructor(config?: properties);
}
export class PalettePrivate  {
    constructor(config?: properties);
}
export class ParamSpecObjects  {
    constructor(config?: properties);
    get_type(): GType;
    set_type(type: GType): void;
}
export class PlaceholderPrivate  {
    constructor(config?: properties);
}
export class ProjectPrivate  {
    constructor(config?: properties);
}
export class PropertyKlass  {
    constructor(config?: properties);
}
export class PropertyLabelPrivate  {
    constructor(config?: properties);
}
export class PropertyPrivate  {
    constructor(config?: properties);
}
export class PropertyShellPrivate  {
    constructor(config?: properties);
}
export class SignalEditorPrivate  {
    constructor(config?: properties);
}
export class SignalKlass  {
    constructor(config?: properties);
}
export class SignalModelPrivate  {
    constructor(config?: properties);
}
export class SignalPrivate  {
    constructor(config?: properties);
}
export class TargetableVersion  {
    constructor(config?: properties);
    major: number;
    minor: number;
}
export class WidgetActionPrivate  {
    constructor(config?: properties);
}
export class WidgetAdaptorPrivate  {
    constructor(config?: properties);
}
export class WidgetGroup  {
    constructor(config?: properties);
    get_expanded(): boolean;
    get_name(): string;
    get_title(): string;
}
export class WidgetPrivate  {
    constructor(config?: properties);
}
export class XmlContext  {
    constructor(config?: properties);
    destroy(): void;
    free(): void;
}
export class XmlDoc  {
    constructor(config?: properties);
    free(): void;
    save(full_path: string): number;
    set_root(node: XmlNode): void;
}
export class XmlNode  {
    constructor(config?: properties);
    append_child(child: XmlNode): void;
    _delete(): void;
    get_name(): string;
    is_comment(): boolean;
    remove(): void;
    set_property_boolean(name: string, value: boolean): void;
    set_property_string(name: string, string: string): void;
    verify(name: string): boolean;
    verify_silent(name: string): boolean;
}
export interface Editable  {
    block(): void;
    load(widget: Widget): void;
    loading(): boolean;
    set_show_name(show_name: boolean): void;
    unblock(): void;
}