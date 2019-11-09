
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as Gladeui from "gladeui";
import * as GdkPixbuf from "gdkpixbuf";
import * as Gdk from "gdk";
import * as GModule from "gmodule";
import * as cairo from "cairo";
/**
 * gladeui.d.ts
 */
type properties = { [key: string]: any };
export type ActionActivateFunc = (adaptor: WidgetAdaptor, object: GObject.Object, action_path: string) => void;
export type ActionSubmenuFunc = (adaptor: WidgetAdaptor, object: GObject.Object, action_path: string) => Gtk.Widget;
export type AddChildFunc = (adaptor: WidgetAdaptor, parent: GObject.Object, child: GObject.Object) => void;
export type AddChildVerifyFunc = (adaptor: WidgetAdaptor, parent: GObject.Object, child: GObject.Object, user_feedback: boolean) => boolean;
export type CatalogInitFunc = (name: string) => void;
export type ChildActionActivateFunc = (adaptor: WidgetAdaptor, container: GObject.Object, object: GObject.Object, action_path: string) => void;
export type ChildGetPropertyFunc = (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object, property_name: string, value: GObject.Value) => void;
export type ChildSetPropertyFunc = (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object, property_name: string, value: GObject.Value) => void;
export type ChildVerifyPropertyFunc = (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object, property_name: string, value: GObject.Value) => boolean;
export type ConstructObjectFunc = (adaptor: WidgetAdaptor, n_parameters: number, parameters: GObject.Parameter) => GObject.Object;
export type CreateEPropFunc = (adaptor: WidgetAdaptor, klass: PropertyClass, use_command: boolean) => EditorProperty;
export type CreateEditableFunc = (adaptor: WidgetAdaptor, type: EditorPageType) => Editable;
export type CreateWidgetFunc = (adaptor: WidgetAdaptor, first_property_name: string, var_args: any) => Widget;
export type DependsFunc = (adaptor: WidgetAdaptor, widget: Widget, another: Widget) => boolean;
export type DestroyObjectFunc = (adaptor: WidgetAdaptor, object: GObject.Object) => void;
export type GetChildrenFunc = (adaptor: WidgetAdaptor, container: GObject.Object) => GLib.List;
export type GetInternalFunc = (adaptor: WidgetAdaptor, parent: GObject.Object, name: string) => GObject.Object;
export type GetPropertyFunc = (adaptor: WidgetAdaptor, object: GObject.Object, property_name: string, value: GObject.Value) => void;
export type PostCreateFunc = (adaptor: WidgetAdaptor, object: GObject.Object, reason: CreateReason) => void;
export type ReadWidgetFunc = (adaptor: WidgetAdaptor, widget: Widget, node: XmlNode) => void;
export type RemoveChildFunc = (adaptor: WidgetAdaptor, parent: GObject.Object, child: GObject.Object) => void;
export type ReplaceChildFunc = (adaptor: WidgetAdaptor, container: GObject.Object, old_obj: GObject.Object, new_obj: GObject.Object) => void;
export type SetPropertyFunc = (adaptor: WidgetAdaptor, object: GObject.Object, property_name: string, value: GObject.Value) => void;
export type StringFromValueFunc = (adaptor: WidgetAdaptor, klass: PropertyClass, value: GObject.Value) => string;
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
export function displayable_value_is_disabled(type: unknown, value: string): boolean;
/**
 * 
 */
export function displayable_value_set_disabled(type: unknown, value: string, disabled: boolean): void;
/**
 * 
 */
export function get_debug_flags(): number;
/**
 * 
 */
export function get_displayable_value(type: unknown, value: string): string;
/**
 * 
 */
export function get_value_from_displayable(type: unknown, displayabe: string): string;
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
export function param_spec_objects(name: string, nick: string, blurb: string, accepted_type: unknown, flags: GObject.ParamFlags): GObject.ParamSpec;
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
export function property_class_update_from_node(node: XmlNode, object_type: unknown, property_class: PropertyClass, domain: string): boolean;
/**
 * 
 */
export function register_displayable_value(type: unknown, value: string, domain: string, string: string): void;
/**
 * 
 */
export function register_translated_value(type: unknown, value: string, string: string): void;
/**
 * Sets up a log handler to manage all %G_LOG_LEVEL_MASK errors of domain
 * :
 * GLib, GLib-GObject, Gtk, Gdk, and domainless.
 */
export function setup_log_handlers(): void;
/**
 * 
 */
export function standard_boolean_spec(): GObject.ParamSpec;
/**
 * 
 */
export function standard_float_spec(): GObject.ParamSpec;
/**
 * 
 */
export function standard_gdkcolor_spec(): GObject.ParamSpec;
/**
 * 
 */
export function standard_int_spec(): GObject.ParamSpec;
/**
 * 
 */
export function standard_objects_spec(): GObject.ParamSpec;
/**
 * 
 */
export function standard_pixbuf_spec(): GObject.ParamSpec;
/**
 * 
 */
export function standard_stock_append_prefix(prefix: string): void;
/**
 * 
 */
export function standard_string_spec(): GObject.ParamSpec;
/**
 * 
 */
export function standard_strv_spec(): GObject.ParamSpec;
/**
 * 
 */
export function standard_uint_spec(): GObject.ParamSpec;
/**
 * 
 */
export function type_has_displayable_values(type: unknown): boolean;
/**
 * 
 */
export function util_added_in_list(old_list: GLib.List, new_list: GLib.List): GLib.List;
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
 * Use this to itterate over all children in a GtkContainer,
 * as it used _forall() instead of _foreach() (and the GTK+ version
 * of this function is simply not exposed).
 * Note that glade_widget_class_get_children() is the high-level
 * abstraction and will usually end up calling this function.
 */
export function util_container_get_all_children(container: Gtk.Container): GLib.List;
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
 * 
 */
export function util_file_dialog_new(title: string, project: Project, parent: Gtk.Window, action: UtilFileDialogType): Gtk.Widget;
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
 * 
 */
export function util_flash_message(statusbar: Gtk.Widget, context_id: number, format: string, ___: unknown[]): void;
/**
 * Creates an image displaying the devhelp icon.
 */
export function util_get_devhelp_icon(size: Gtk.IconSize): Gtk.Widget;
/**
 * Gets the UTC modification time of file @filename.
 */
export function util_get_file_mtime(filename: string): number;
/**
 * 
 */
export function util_get_placeholder_from_pointer(container: Gtk.Container): Gtk.Widget;
/**
 * Returns the type using the "get type" function name based on @name.
 * If the @have_func flag is true,@name is used directly, otherwise the g
 * et-type
 * function is contrived from @name then used.
 */
export function util_get_type_from_name(name: string, have_func: boolean): unknown;
/**
 * 
 */
export function util_have_devhelp(): boolean;
/**
 * 
 */
export function util_icon_name_to_filename(value: string): string;
/**
 * Loads the named library from the Glade modules and lib directory or fa
 * iling that
 * from the standard platform specific directories. (Including /usr/local
 * /lib for unices)
 * The @library_name should not include any platform specifix prefix or s
 * uffix,
 * those are automatically added, if needed, by g_module_build_path()
 */
export function util_load_library(library_name: string): GModule.Module;
/**
 * 
 */
export function util_object_is_loading(object: GObject.Object): boolean;
/**
 * 
 */
export function util_purify_list(list: GLib.List): GLib.List;
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
 * 
 */
export function util_removed_from_list(old_list: GLib.List, new_list: GLib.List): GLib.List;
/**
 * Replaces each occurance of the character @a in @str to @b.
 */
export function util_replace(str: string, a: number, b: number): void;
/**
 * 
 */
export function util_search_devhelp(book: string, page: string, search: string): void;
/**
 * Creates a new warning dialog window as a child of @parent containing
 * the text of @format, runs it, then destroys it on close. Depending
 * on @type, a cancel button may apear or the icon may change.
 */
export function util_ui_message(parent: Gtk.Widget, type: UIMessageType, widget: Gtk.Widget, format: string, ___: unknown[]): boolean;
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
export function utils_enum_string_from_value(enum_type: unknown, value: number): string;
/**
 * 
 */
export function utils_enum_string_from_value_displayable(flags_type: unknown, value: number): string;
/**
 * 
 */
export function utils_enum_value_from_string(enum_type: unknown, strval: string): number;
/**
 * 
 */
export function utils_flags_string_from_value(enum_type: unknown, value: number): string;
/**
 * 
 */
export function utils_flags_string_from_value_displayable(flags_type: unknown, value: number): string;
/**
 * 
 */
export function utils_flags_value_from_string(enum_type: unknown, strval: string): number;
/**
 * Get's the pointer position relative to @widget, while @window and @dev
 * ice
 * are not absolutely needed, they should be passed wherever possible.
 */
export function utils_get_pointer(widget: Gtk.Widget, window: Gdk.Window, device: Gdk.Device, x: number, y: number): void;
/**
 * 
 */
export function utils_get_pspec_from_funcname(funcname: string): GObject.ParamSpec;
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
 * Creates a liststore suitable for comboboxes and such to
 * chose from a variety of types.
 */
export function utils_liststore_from_enum_type(enum_type: unknown, include_empty: boolean): Gtk.ListStore;
/**
 * Render an icon representing the pointer mode.
 * Best view with sizes bigger than GTK_ICON_SIZE_LARGE_TOOLBAR.
 */
export function utils_pointer_mode_render_icon(mode: PointerMode, size: Gtk.IconSize): GdkPixbuf.Pixbuf;
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
export function utils_value_from_string(type: unknown, string: string, project: Project): GObject.Value;
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
export function xml_get_property_targetable_versions(node_in: XmlNode, name: string): GLib.List;
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
 * 
 */
export function xml_search_child(node: XmlNode, name: string): XmlNode;
/**
 * just a small wrapper arround glade_xml_search_child that displays
 * an error if the child was not found
 */
export function xml_search_child_required(tree: XmlNode, name: string): XmlNode;
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
export class AdaptorChooser extends Gtk.Box {constructor(config?: properties);
project: Project;
get_project(): Project;
set_project(project: Project): void;
}
export class App extends GObject.Object {constructor(config?: properties);
static add_project(project: Project): void;
static config_save(): number;
static do_event(event: Gdk.Event): boolean;
static get(): App;
get(...args: never[]): never;
static get_accel_group(): Gtk.AccelGroup;
static get_bin_dir(): string;
static get_catalog(name: string): Catalog;
static get_catalog_version(name: string, major: number, minor: number): boolean;
static get_catalogs(): GLib.List;
static get_catalogs_dir(): string;
static get_clipboard(): Clipboard;
static get_config(): GLib.KeyFile;
static get_lib_dir(): string;
static get_locale_dir(): string;
static get_modules_dir(): string;
static get_pixmaps_dir(): string;
static get_project_by_path(project_path: string): Project;
static get_projects(): GLib.List;
static get_window(): Gtk.Widget;
static is_project_loaded(project_path: string): boolean;
static remove_project(project: Project): void;
static search_docs(book: string, page: string, search: string): void;
static set_accel_group(accel_group: Gtk.AccelGroup): void;
static set_window(window: Gtk.Widget): void;
}
export class BaseEditor extends Gtk.Box {constructor(config?: properties);
container: GObject.Object;
add_default_properties(gchild: Widget): void;
add_editable(gchild: Widget, page: EditorPageType): void;
add_label(str: string): void;
add_properties(gchild: Widget, packing: boolean, ___: unknown[]): void;
append_types(parent_type: unknown, ___: unknown[]): void;
pack_new_window(title: string, help_markup: string): Gtk.Widget;
set_show_signal_editor(val: boolean): void;
vfunc_build_child(arg1: Widget, arg2: unknown): Widget;
vfunc_change_type(arg1: Widget, arg2: unknown): boolean;
vfunc_child_selected(arg1: Widget): void;
vfunc_delete_child(arg1: Widget, arg2: Widget): boolean;
vfunc_get_display_name(arg1: Widget): string;
vfunc_move_child(arg1: Widget, arg2: Widget): boolean;
}
export class CellRendererIcon extends Gtk.CellRendererPixbuf {constructor(config?: properties);
activatable: boolean;
active: boolean;
get_activatable(): boolean;
get_active(): boolean;
set_activatable(setting: boolean): void;
set_active(setting: boolean): void;
vfunc_activate(path: string): void;
}
export class Clipboard extends GObject.Object {constructor(config?: properties);
readonly has_selection: boolean;
add(widgets: GLib.List): void;
clear(): void;
get_has_selection(): boolean;
widgets(): GLib.List;
}
export class Command  {constructor(config?: properties);
readonly priv: CommandPrivate;
collapse(other: Command): void;
description(): string;
execute(): boolean;
group_id(): number;
undo(): boolean;
unifies(other: Command): boolean;
static add(widgets: GLib.List, parent: Widget, placeholder: Placeholder, project: Project, pasting: boolean): void;
static add_signal(glade_widget: Widget, signal: Signal): void;
static change_signal(glade_widget: Widget, old_signal: Signal, new_signal: Signal): void;
static create(adaptor: WidgetAdaptor, parent: Widget, placeholder: Placeholder, project: Project): Widget;
static cut(widgets: GLib.List): void;
static _delete(widgets: GLib.List): void;
static dnd(widgets: GLib.List, parent: Widget, placeholder: Placeholder): void;
static get_group_depth(): number;
static lock_widget(widget: Widget, lock: Widget): void;
static paste(widgets: GLib.List, parent: Widget, placeholder: Placeholder, project: Project): void;
static pop_group(): void;
static push_group(fmt: string, ___: unknown[]): void;
static remove_signal(glade_widget: Widget, signal: Signal): void;
static set_i18n(property: Property, translatable: boolean, context: string, comment: string): void;
static set_name(glade_widget: Widget, name: string): void;
static set_project_domain(project: Project, domain: string): void;
static set_project_license(project: Project, license: string): void;
static set_project_resource_path(project: Project, path: string): void;
static set_project_target(project: Project, catalog: string, major: number, minor: number): void;
static set_project_template(project: Project, widget: Widget): void;
static set_properties(property: Property, old_value: GObject.Value, new_value: GObject.Value, ___: unknown[]): void;
static set_properties_list(project: Project, props: GLib.List): void;
static set_property(property: Property, ___: unknown[]): void;
static set_property_enabled(property: Property, enabled: boolean): void;
static set_property_value(property: Property, value: GObject.Value): void;
static unlock_widget(widget: Widget): void;
}
export class DesignView extends Gtk.Box {constructor(config?: properties);
project: Project;
get_project(): Project;
static get_from_project(project: Project): DesignView;
}
export class EPropBool  {constructor(config?: properties);
}
export class EPropCheck  {constructor(config?: properties);
}
export class EPropColor  {constructor(config?: properties);
}
export class EPropEnum  {constructor(config?: properties);
}
export class EPropFlags  {constructor(config?: properties);
}
export class EPropNamedIcon  {constructor(config?: properties);
}
export class EPropNumeric  {constructor(config?: properties);
}
export class EPropObject  {constructor(config?: properties);
}
export class EPropObjects  {constructor(config?: properties);
}
export class EPropText  {constructor(config?: properties);
}
export class EPropUnichar  {constructor(config?: properties);
}
export class Editor extends Gtk.Box {constructor(config?: properties);
readonly class_field: string;
show_boder: boolean;
widget: Widget;
hide_class_field(): void;
hide_info(): void;
load_widget(widget: Widget): void;
show_class_field(): void;
show_info(): void;
static dialog_for_widget(widget: Widget): Gtk.Widget;
static query_dialog(widget: Widget): boolean;
static reset_dialog_run(parent: Gtk.Widget, gwidget: Widget): void;
}
export class EditorProperty  {constructor(config?: properties);
custom_text: string;
disable_check: boolean;
property_class: object;
use_command: boolean;
readonly priv: EditorPropertyPrivate;
commit(value: GObject.Value): void;
commit_no_callback(value: GObject.Value): void;
get_custom_text(): string;
get_disable_check(): boolean;
get_item_label(): Gtk.Widget;
get_pclass(): PropertyClass;
get_property(): Property;
load(property: Property): void;
load_by_widget(widget: Widget): void;
loading(): boolean;
set_custom_text(custom_text: string): void;
set_disable_check(disable_check: boolean): void;
static show_i18n_dialog(parent: Gtk.Widget, text: string, context: string, comment: string, translatable: boolean): boolean;
static show_object_dialog(project: Project, title: string, parent: Gtk.Widget, object_type: unknown, exception: Widget, object: Widget): boolean;
static show_resource_dialog(project: Project, parent: Gtk.Widget, filename: string): boolean;
}
export class EditorSkeleton extends Gtk.Box {constructor(config?: properties);
add_editor(editor: Editable): void;
}
export class EditorTable extends Gtk.Grid {constructor(config?: properties);
page_type: EditorPageType;
}
export class Inspector extends Gtk.Box {constructor(config?: properties);
project: Project;static new_with_project(project: Project): Gtk.Widget;
get_project(): Project;
get_selected_items(): GLib.List;
set_project(project: Project): void;
vfunc_item_activated(): void;
vfunc_selection_changed(): void;
}
export class NamedIconChooserDialog extends Gtk.Dialog {constructor(config?: properties);
get_context(): string;
get_icon_name(): string;
set_context(context: string): boolean;
set_icon_name(icon_name: string): void;
vfunc_icon_activated(): void;
vfunc_selection_changed(): void;
}
export class Palette extends Gtk.Box {constructor(config?: properties);
item_appearance: ItemAppearance;
project: Project;
show_selector_button: boolean;
use_small_item_icons: boolean;
get_item_appearance(): ItemAppearance;
get_project(): Project;
get_show_selector_button(): boolean;
get_tool_palette(): Gtk.ToolPalette;
get_use_small_item_icons(): boolean;
set_item_appearance(item_appearance: ItemAppearance): void;
set_project(project: Project): void;
set_show_selector_button(show_selector_button: boolean): void;
set_use_small_item_icons(use_small_item_icons: boolean): void;
vfunc_refresh(): void;
}
export class ParamObjects  {constructor(config?: properties);
}
export class Placeholder extends Gtk.Widget {constructor(config?: properties);
get_parent(): Widget;
get_project(): Project;
packing_actions(): GLib.List;
}
export class Project extends GObject.Object {constructor(config?: properties);
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
check_reordered(parent: Widget, old_order: GLib.List): void;
command_cut(): void;
command_delete(): void;
command_paste(placeholder: Placeholder): void;
copy_selection(): void;
display_dependencies(): string;
get_add_item(): WidgetAdaptor;
get_css_provider_path(): string;
get_file_mtime(): number;
get_has_selection(): boolean;
get_license(): string;
get_modified(): boolean;
get_name(): string;
get_objects(): GLib.List;
get_path(): string;
get_pointer_mode(): PointerMode;
get_readonly(): boolean;
get_resource_path(): string;
get_target_version(catalog: string, major: number, minor: number): void;
get_template(): Widget;
get_translation_domain(): string;
get_widget_by_name(name: string): Widget;
has_object(object: GObject.Object): boolean;
is_loading(): boolean;
is_selected(object: GObject.Object): boolean;
load_cancelled(): boolean;
load_from_file(path: string): boolean;
new_widget_name(widget: Widget, base_name: string): string;
next_redo_item(): Command;
next_undo_item(): Command;
preview(gwidget: Widget): void;
properties(): void;
push_progress(): void;
push_undo(cmd: Command): void;
queue_selection_changed(): void;
redo(): void;
redo_items(): Gtk.Widget;
remove_object(object: GObject.Object): void;
required_libs(): GLib.List;
reset_path(): void;
resource_fullpath(resource: string): string;
save(path: string): boolean;
save_verify(path: string, flags: VerifyFlags): boolean;
selection_add(object: GObject.Object, emit_signal: boolean): void;
selection_changed(): void;
selection_clear(emit_signal: boolean): void;
selection_get(): GLib.List;
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
toplevels(): GLib.List;
undo(): void;
undo_items(): Gtk.Widget;
verify(saving: boolean, flags: VerifyFlags): boolean;
verify_widget_adaptor(adaptor: WidgetAdaptor, mask: SupportMask): string;
widget_changed(gwidget: Widget): void;
widget_visibility_changed(widget: Widget, visible: boolean): void;
writing_preview(): boolean;
vfunc_add_object(widget: Widget): void;
vfunc_changed(command: Command, forward: boolean): void;
vfunc_close(): void;
vfunc_next_redo_item(): Command;
vfunc_next_undo_item(): Command;
vfunc_parse_finished(): void;
vfunc_push_undo(command: Command): void;
vfunc_redo(): void;
vfunc_remove_object(widget: Widget): void;
vfunc_selection_changed(): void;
vfunc_undo(): void;
vfunc_widget_name_changed(widget: Widget): void;
static load(path: string): Project;
static verify_property(property: Property): void;
static verify_signal(widget: Widget, signal: Signal): void;
}
export class Property extends GObject.Object {constructor(config?: properties);
_class: object;
enabled: boolean;
i18n_comment: string;
i18n_context: string;
i18n_translatable: boolean;
sensitive: boolean;
readonly state: number;
add_object(object: GObject.Object): void;
_default(): boolean;
dup(widget: Widget): Property;
equals(___: unknown[]): boolean;
equals_value(value: GObject.Value): boolean;
get(___: unknown[]): void;
get(...args: never[]): never;
get_class(): PropertyClass;
get_default(value: GObject.Value): void;
get_enabled(): boolean;
get_save_always(): boolean;
get_sensitive(): boolean;
get_state(): PropertyState;
get_support_warning(): string;
get_va_list(vl: any): void;
get_value(value: GObject.Value): void;
get_widget(): Widget;
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
set(___: unknown[]): boolean;
set(...args: never[]): never;
set_enabled(enabled: boolean): void;
set_save_always(setting: boolean): void;
set_sensitive(sensitive: boolean, reason: string): void;
set_support_warning(disable: boolean, reason: string): void;
set_va_list(vl: any): boolean;
set_value(value: GObject.Value): boolean;
set_widget(widget: Widget): void;
sync(): void;
warn_usage(): boolean;
write(context: XmlContext, node: XmlNode): void;
static pop_superuser(): void;
static push_superuser(): void;
static superuser(): boolean;
}
export class PropertyLabel extends Gtk.EventBox {constructor(config?: properties);
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
get_property(): Property;
get_property_name(): string;
set_append_colon(append_colon: boolean): void;
set_custom_text(custom_text: string): void;
set_custom_tooltip(custom_tooltip: string): void;
set_packing(packing: boolean): void;
set_property(property: Property): void;
set_property_name(property_name: string): void;
}
export class PropertyShell extends Gtk.Box {constructor(config?: properties);
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
export class Signal extends GObject.Object {constructor(config?: properties);
after: boolean;
_class: object;
detail: string;
handler: string;
support_warning: string;
swapped: boolean;
userdata: string;
clone(): Signal;
equal(sig2: Signal): boolean;
get_after(): boolean;
get_class(): SignalClass;
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
static read(node: XmlNode, adaptor: WidgetAdaptor): Signal;
}
export class SignalEditor extends Gtk.Box {constructor(config?: properties);
glade_widget: Gtk.TreeModel;
enable_dnd(enabled: boolean): void;
get_widget(): Widget;
load_widget(widget: Widget): void;
vfunc_callback_suggestions(signal: Signal): string[];
vfunc_detail_suggestions(signal: Signal): string[];
}
export class SignalModel  {constructor(config?: properties);
signals: object;
widget: Widget;
readonly priv: SignalModelPrivate;
static _new(widget: Widget, signals: GLib.HashTable): Gtk.TreeModel;
}
export class Widget  {constructor(config?: properties);
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
adaptor_create_internal(internal_object: GObject.Object, internal_name: string, parent_name: string, anarchist: boolean, reason: CreateReason): Widget;
add_child(child: Widget, at_mouse: boolean): void;
add_prop_ref(property: Property): void;
add_signal_handler(signal_handler: Signal): void;
add_verify(child: Widget, user_feedback: boolean): boolean;
change_signal_handler(old_signal_handler: Signal, new_signal_handler: Signal): void;
child_get_property(child: Widget, property_name: string, value: GObject.Value): void;
child_set_property(child: Widget, property_name: string, value: GObject.Value): void;
copy_properties(template_widget: Widget, copy_parentless: boolean, exact: boolean): void;
copy_signals(template_widget: Widget): void;
create_editor_property(property: string, packing: boolean, use_command: boolean): EditorProperty;
depends(other: Widget): boolean;
dup(exact: boolean): Widget;
dup_properties(template_props: GLib.List, as_load: boolean, copy_parentless: boolean, exact: boolean): GLib.List;
ensure_name(project: Project, use_command: boolean): void;
event(event: Gdk.Event): boolean;
find_child(name: string): Widget;
generate_path_name(): string;
get_action(action_path: string): WidgetAction;
get_actions(): GLib.List;
get_adaptor(): WidgetAdaptor;
get_children(): GLib.List;
get_display_name(): string;
get_internal(): string;
get_is_composite(): boolean;
get_locker(): Widget;
get_name(): string;
get_object(): GObject.Object;
get_pack_action(action_path: string): WidgetAction;
get_pack_actions(): GLib.List;
get_pack_property(id_property: string): Property;
get_packing_properties(): GLib.List;
get_parent(): Widget;
get_parentless_reffed_widgets(): GLib.List;
get_parentless_widget_ref(): Property;
get_project(): Project;
get_properties(): GLib.List;
get_property(id_property: string): Property;
get_signal_list(): GLib.List;
get_signal_model(): Gtk.TreeModel;
get_toplevel(): Widget;
has_decendant(type: unknown): boolean;
has_name(): boolean;
has_prop_refs(): boolean;
hide(): void;
in_project(): boolean;
is_ancestor(ancestor: Widget): boolean;
list_locked_widgets(): GLib.List;
list_prop_refs(): GLib.List;
list_signal_handlers(signal_name: string): object[];
lock(locked: Widget): void;
object_get_property(property_name: string, value: GObject.Value): void;
object_set_property(property_name: string, value: GObject.Value): void;
pack_property_default(id_property: string): boolean;
pack_property_get(id_property: string, ___: unknown[]): boolean;
pack_property_reset(id_property: string): boolean;
pack_property_set(id_property: string, ___: unknown[]): boolean;
pack_property_set_enabled(id_property: string, enabled: boolean): boolean;
pack_property_set_save_always(id_property: string, setting: boolean): boolean;
pack_property_set_sensitive(id_property: string, sensitive: boolean, reason: string): boolean;
pack_property_string(id_property: string, value: GObject.Value): string;
placeholder_relation(widget: Widget): boolean;
property_default(id_property: string): boolean;
property_get(id_property: string, ___: unknown[]): boolean;
property_original_default(id_property: string): boolean;
property_reset(id_property: string): boolean;
property_set(id_property: string, ___: unknown[]): boolean;
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
static get_device_from_event(event: Gdk.Event): Gdk.Device;
static get_from_gobject(object: object | null): Widget;
static pop_superuser(): void;
static push_superuser(): void;
static read(project: Project, parent: Widget, node: XmlNode, internal: string): Widget;
static superuser(): boolean;
}
export class WidgetAction  {constructor(config?: properties);
_class: object;
sensitive: boolean;
visible: boolean;
readonly priv: WidgetActionPrivate;
get_children(): GLib.List;
get_class(): unknown;
get_sensitive(): boolean;
get_visible(): boolean;
set_sensitive(sensitive: boolean): void;
set_visible(visible: boolean): void;
}
export class WidgetAdaptor  {constructor(config?: properties);
book: string;
catalog: string;
readonly cursor: object;
generic_name: string;
icon_name: string;
name: string;
special_child_type: string;
title: string;
type: unknown;
readonly priv: WidgetAdaptorPrivate;
action_activate(object: GObject.Object, action_path: string): void;
action_add(action_path: string, label: string, stock: string, important: boolean): boolean;
action_remove(action_path: string): boolean;
action_submenu(object: GObject.Object, action_path: string): Gtk.Widget;
actions_new(): GLib.List;
add(container: GObject.Object, child: GObject.Object): void;
add_verify(container: GObject.Object, child: GObject.Object, user_feedback: boolean): boolean;
child_action_activate(container: GObject.Object, object: GObject.Object, action_path: string): void;
child_get_property(container: GObject.Object, child: GObject.Object, property_name: string, value: GObject.Value): void;
child_set_property(container: GObject.Object, child: GObject.Object, property_name: string, value: GObject.Value): void;
child_verify_property(container: GObject.Object, child: GObject.Object, property_name: string, value: GObject.Value): boolean;
construct_object(n_parameters: number, parameters: GObject.Parameter): GObject.Object;
create_editable(type: EditorPageType): Editable;
create_eprop(klass: PropertyClass, use_command: boolean): EditorProperty;
create_eprop_by_name(property_id: string, packing: boolean, use_command: boolean): EditorProperty;
default_params(construct: boolean, n_params: number): GObject.Parameter;
depends(widget: Widget, another: Widget): boolean;
destroy_object(object: GObject.Object): void;
from_pspec(spec: GObject.ParamSpec): WidgetAdaptor;
get_book(): string;
get_catalog(): string;
get_children(container: GObject.Object): GLib.List;
get_generic_name(): string;
get_icon_name(): string;
get_internal_child(object: GObject.Object, internal_name: string): GObject.Object;
get_missing_icon(): string;
get_name(): string;
get_object_type(): unknown;
get_pack_property_class(name: string): PropertyClass;
get_packing_default(container_adaptor: WidgetAdaptor, id: string): string;
get_packing_props(): GLib.List;
get_parent_adaptor(): WidgetAdaptor;
get_properties(): GLib.List;
get_property(object: GObject.Object, property_name: string, value: GObject.Value): void;
get_property_class(name: string): PropertyClass;
get_signal_class(name: string): SignalClass;
get_signals(): GLib.List;
get_title(): string;
has_child(container: GObject.Object, child: GObject.Object): boolean;
has_internal_children(): boolean;
is_container(): boolean;
pack_action_add(action_path: string, label: string, stock: string, important: boolean): boolean;
pack_action_remove(action_path: string): boolean;
pack_actions_new(): GLib.List;
post_create(object: GObject.Object, reason: CreateReason): void;
query(): boolean;
read_child(widget: Widget, node: XmlNode): void;
read_widget(widget: Widget, node: XmlNode): void;
register(): void;
remove(container: GObject.Object, child: GObject.Object): void;
replace_child(container: GObject.Object, old_obj: GObject.Object, new_obj: GObject.Object): void;
set_property(object: GObject.Object, property_name: string, value: GObject.Value): void;
string_from_value(klass: PropertyClass, value: GObject.Value): string;
verify_property(object: GObject.Object, property_name: string, value: GObject.Value): boolean;
write_child(widget: Widget, context: XmlContext, node: XmlNode): void;
write_widget(widget: Widget, context: XmlContext, node: XmlNode): void;
write_widget_after(widget: Widget, context: XmlContext, node: XmlNode): void;
static create_widget_real(query: boolean, first_property: string, ___: unknown[]): Widget;
static from_catalog(catalog: Catalog, class_node: XmlNode, module: GModule.Module): WidgetAdaptor;
static get_by_name(name: string): WidgetAdaptor;
static get_by_type(type: unknown): WidgetAdaptor;
static list_adaptors(): GLib.List;
}
export class AdaptorChooserClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
}
export class AppClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
readonly glade_reserved5: unknown;
readonly glade_reserved6: unknown;
}
export class AppPrivate  {constructor(config?: properties);
}
export class BaseEditorClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
readonly child_selected: unknown;
readonly change_type: unknown;
readonly get_display_name: unknown;
readonly build_child: unknown;
readonly delete_child: unknown;
readonly move_child: unknown;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
readonly glade_reserved5: unknown;
readonly glade_reserved6: unknown;
}
export class BaseEditorPrivate  {constructor(config?: properties);
}
export class Catalog  {constructor(config?: properties);
get_adaptors(): GLib.List;
get_book(): string;
get_domain(): string;
get_icon_prefix(): string;
get_major_version(): number;
get_minor_version(): number;
get_name(): string;
get_targets(): GLib.List;
get_widget_groups(): GLib.List;
static add_path(path: string): void;
static destroy_all(): void;
static get_extra_paths(): GLib.List;
static is_loaded(name: string): boolean;
static load_all(): GLib.List;
static remove_path(path: string): void;
}
export class CellRendererIconClass  {constructor(config?: properties);
readonly parent_class: Gtk.CellRendererPixbufClass;
readonly activate: unknown;
}
export class CellRendererIconPrivate  {constructor(config?: properties);
}
export class ClipboardClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
}
export class ClipboardPrivate  {constructor(config?: properties);
}
export class CommandClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly execute: unknown;
readonly undo: unknown;
readonly unifies: unknown;
readonly collapse: unknown;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
}
export class CommandPrivate  {constructor(config?: properties);
}
export class Cursor  {constructor(config?: properties);
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
export class DesignViewClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
}
export class DesignViewPrivate  {constructor(config?: properties);
}
export class EditableIface  {constructor(config?: properties);
readonly g_iface: GObject.TypeInterface;
readonly load: unknown;
readonly set_show_name: unknown;
}
export class EditableInterface  {constructor(config?: properties);
readonly g_iface: GObject.TypeInterface;
readonly load: unknown;
readonly set_show_name: unknown;
}
export class EditorClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
}
export class EditorPrivate  {constructor(config?: properties);
}
export class EditorPropertyClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
readonly load: unknown;
readonly create_input: unknown;
readonly commit: unknown;
readonly changed: unknown;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
}
export class EditorPropertyPrivate  {constructor(config?: properties);
}
export class EditorSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
}
export class EditorSkeletonPrivate  {constructor(config?: properties);
}
export class EditorTableClass  {constructor(config?: properties);
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
}
export class EditorTablePrivate  {constructor(config?: properties);
}
export class IDAllocator  {constructor(config?: properties);
allocate(): number;
destroy(): void;
release(id: number): void;
static _new(): IDAllocator;
}
export class InspectorClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
readonly selection_changed: unknown;
readonly item_activated: unknown;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
}
export class InspectorPrivate  {constructor(config?: properties);
}
export class NameContext  {constructor(config?: properties);
add_name(name: string): boolean;
destroy(): void;
has_name(name: string): boolean;
n_names(): number;
new_name(base_name: string): string;
release_name(name: string): void;
static _new(): NameContext;
}
export class NamedIconChooserDialogClass  {constructor(config?: properties);
readonly parent_class: Gtk.DialogClass;
readonly icon_activated: unknown;
readonly selection_changed: unknown;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
}
export class NamedIconChooserDialogPrivate  {constructor(config?: properties);
}
export class PaletteClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
readonly refresh: unknown;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
}
export class PalettePrivate  {constructor(config?: properties);
}
export class ParamSpecObjects  {constructor(config?: properties);
get_type(): unknown;
set_type(type: unknown): void;
}
export class PlaceholderClass  {constructor(config?: properties);
readonly parent_class: Gtk.WidgetClass;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
}
export class PlaceholderPrivate  {constructor(config?: properties);
}
export class ProjectClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly add_object: unknown;
readonly remove_object: unknown;
readonly undo: unknown;
readonly redo: unknown;
readonly next_undo_item: unknown;
readonly next_redo_item: unknown;
readonly push_undo: unknown;
readonly changed: unknown;
readonly widget_name_changed: unknown;
readonly selection_changed: unknown;
readonly close: unknown;
readonly parse_finished: unknown;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
readonly glade_reserved5: unknown;
readonly glade_reserved6: unknown;
readonly glade_reserved7: unknown;
readonly glade_reserved8: unknown;
}
export class ProjectPrivate  {constructor(config?: properties);
}
export class PropertyClass  {constructor(config?: properties);
atk(): boolean;
clone(reset_version: boolean): PropertyClass;
common(): boolean;
compare(value1: GObject.Value, value2: GObject.Value): number;
create_type(): string;
custom_layout(): boolean;
deprecated(): boolean;
free(): void;
get_adaptor(): WidgetAdaptor;
get_construct_only(): boolean;
get_default(): GObject.Value;
get_from_gvalue(value: GObject.Value, ___: unknown[]): void;
get_ignore(): boolean;
get_is_packing(): boolean;
get_name(): string;
get_original_default(): GObject.Value;
get_pspec(): GObject.ParamSpec;
get_tooltip(): string;
get_virtual(): boolean;
id(): string;
is_object(): boolean;
is_visible(): boolean;
load_defaults_from_spec(): void;
make_adjustment(): Gtk.Adjustment;
make_gvalue(___: unknown[]): GObject.Value;
make_gvalue_from_string(string: string, project: Project): GObject.Value;
make_gvalue_from_vl(vl: any): GObject.Value;
make_string_from_gvalue(value: GObject.Value): string;
match(comp: PropertyClass): boolean;
multiline(): boolean;
needs_sync(): boolean;
optional(): boolean;
optional_default(): boolean;
parentless_widget(): boolean;
query(): boolean;
save(): boolean;
save_always(): boolean;
set_adaptor(adaptor: WidgetAdaptor): void;
set_construct_only(construct_only: boolean): void;
set_ignore(ignore: boolean): void;
set_is_packing(is_packing: boolean): void;
set_name(name: string): void;
set_pspec(pspec: GObject.ParamSpec): void;
set_tooltip(tooltip: string): void;
set_virtual(value: boolean): void;
set_vl_from_gvalue(value: GObject.Value, vl: any): void;
since_major(): number;
since_minor(): number;
stock(): boolean;
stock_icon(): boolean;
themed_icon(): boolean;
transfer_on_paste(): boolean;
translatable(): boolean;
void_value(value: GObject.Value): boolean;
weight(): number;
static get_default_from_spec(spec: GObject.ParamSpec): GObject.Value;
static _new(adaptor: WidgetAdaptor, id: string): PropertyClass;
static new_from_spec(adaptor: WidgetAdaptor, spec: GObject.ParamSpec): PropertyClass;
static new_from_spec_full(adaptor: WidgetAdaptor, spec: GObject.ParamSpec, need_handle: boolean): PropertyClass;
static set_weights(properties: GLib.List, parent: unknown): void;
static update_from_node(node: XmlNode, object_type: unknown, property_class: PropertyClass, domain: string): boolean;
}
export class PropertyKlass  {constructor(config?: properties);
parent_class: GObject.ObjectClass;
readonly dup: unknown;
readonly equals_value: unknown;
readonly set_value: unknown;
readonly get_value: unknown;
readonly sync: unknown;
readonly load: unknown;
readonly value_changed: unknown;
readonly tooltip_changed: unknown;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
readonly glade_reserved5: unknown;
readonly glade_reserved6: unknown;
}
export class PropertyLabelClass  {constructor(config?: properties);
readonly parent_class: Gtk.EventBoxClass;
}
export class PropertyLabelPrivate  {constructor(config?: properties);
}
export class PropertyPrivate  {constructor(config?: properties);
}
export class PropertyShellClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
}
export class PropertyShellPrivate  {constructor(config?: properties);
}
export class SignalClass  {constructor(config?: properties);
deprecated(): boolean;
free(): void;
get_adaptor(): WidgetAdaptor;
get_flags(): GObject.SignalFlags;
get_name(): string;
get_type(): string;
set_deprecated(deprecated: boolean): void;
set_since(since_major: number, since_minor: number): void;
since_major(): number;
since_minor(): number;
update_from_node(node: XmlNode, domain: string): void;
static _new(adaptor: WidgetAdaptor, for_type: unknown, signal_id: number): SignalClass;
}
export class SignalEditorClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
readonly callback_suggestions: unknown;
readonly detail_suggestions: unknown;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
}
export class SignalEditorPrivate  {constructor(config?: properties);
}
export class SignalKlass  {constructor(config?: properties);
object_class: GObject.ObjectClass;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
}
export class SignalModelClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class SignalModelPrivate  {constructor(config?: properties);
}
export class SignalPrivate  {constructor(config?: properties);
}
export class TargetableVersion  {constructor(config?: properties);
major: number;
minor: number;
}
export class WidgetActionClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
static clone(action: unknown): unknown;
static free(action: unknown): void;
static _new(path: string): unknown;
static set_important(action: unknown, important: boolean): void;
static set_label(action: unknown, label: string): void;
static set_stock(action: unknown, stock: string): void;
}
export class WidgetActionPrivate  {constructor(config?: properties);
}
export class WidgetAdaptorClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly version_since_major: number;
readonly version_since_minor: number;
readonly default_width: number;
readonly default_height: number;
readonly deprecated: number;
readonly toplevel: number;
readonly use_placeholders: number;
readonly create_widget: CreateWidgetFunc;
readonly construct_object: ConstructObjectFunc;
readonly deep_post_create: PostCreateFunc;
readonly post_create: PostCreateFunc;
readonly get_internal_child: GetInternalFunc;
readonly verify_property: VerifyPropertyFunc;
readonly set_property: SetPropertyFunc;
readonly get_property: GetPropertyFunc;
readonly add_verify: AddChildVerifyFunc;
readonly add: AddChildFunc;
readonly remove: RemoveChildFunc;
readonly get_children: GetChildrenFunc;
readonly child_verify_property: ChildVerifyPropertyFunc;
readonly child_set_property: ChildSetPropertyFunc;
readonly child_get_property: ChildGetPropertyFunc;
readonly replace_child: ReplaceChildFunc;
readonly action_activate: ActionActivateFunc;
readonly child_action_activate: ChildActionActivateFunc;
readonly action_submenu: ActionSubmenuFunc;
readonly depends: DependsFunc;
readonly read_widget: ReadWidgetFunc;
readonly write_widget: WriteWidgetFunc;
readonly read_child: ReadWidgetFunc;
readonly write_child: WriteWidgetFunc;
readonly create_eprop: CreateEPropFunc;
readonly string_from_value: StringFromValueFunc;
readonly create_editable: CreateEditableFunc;
readonly destroy_object: DestroyObjectFunc;
readonly write_widget_after: WriteWidgetFunc;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
readonly glade_reserved5: unknown;
readonly glade_reserved6: unknown;
}
export class WidgetAdaptorPrivate  {constructor(config?: properties);
}
export class WidgetClass  {constructor(config?: properties);
readonly parent_class: GObject.InitiallyUnownedClass;
readonly add_child: unknown;
readonly remove_child: unknown;
readonly replace_child: unknown;
readonly add_signal_handler: unknown;
readonly remove_signal_handler: unknown;
readonly change_signal_handler: unknown;
readonly button_press_event: unknown;
readonly button_release_event: unknown;
readonly motion_notify_event: unknown;
readonly event: unknown;
readonly glade_reserved1: unknown;
readonly glade_reserved2: unknown;
readonly glade_reserved3: unknown;
readonly glade_reserved4: unknown;
readonly glade_reserved5: unknown;
readonly glade_reserved6: unknown;
readonly glade_reserved7: unknown;
readonly glade_reserved8: unknown;
}
export class WidgetGroup  {constructor(config?: properties);
get_adaptors(): GLib.List;
get_expanded(): boolean;
get_name(): string;
get_title(): string;
}
export class WidgetPrivate  {constructor(config?: properties);
}
export class XmlContext  {constructor(config?: properties);
destroy(): void;
free(): void;
get_doc(): XmlDoc;
static _new(doc: XmlDoc, name_space: string): XmlContext;
static new_from_path(full_path: string, nspace: string, root_name: string): XmlContext;
}
export class XmlDoc  {constructor(config?: properties);
free(): void;
get_root(): XmlNode;
new_comment(comment: string): XmlNode;
save(full_path: string): number;
set_root(node: XmlNode): void;
static _new(): XmlDoc;
}
export class XmlNode  {constructor(config?: properties);
add_next_sibling(new_node: XmlNode): XmlNode;
add_prev_sibling(new_node: XmlNode): XmlNode;
append_child(child: XmlNode): void;
copy(): XmlNode;
_delete(): void;
get_children(): XmlNode;
get_children_with_comments(): XmlNode;
get_name(): string;
get_parent(): XmlNode;
is_comment(): boolean;
next(): XmlNode;
next_with_comments(): XmlNode;
prev_with_comments(): XmlNode;
remove(): void;
set_property_boolean(name: string, value: boolean): void;
set_property_string(name: string, string: string): void;
verify(name: string): boolean;
verify_silent(name: string): boolean;
static _new(context: XmlContext, name: string): XmlNode;
static new_comment(context: XmlContext, comment: string): XmlNode;
}
export interface Editable  {
block(): void;
load(widget: Widget): void;
loaded_widget(): Widget;
loading(): boolean;
set_show_name(show_name: boolean): void;
unblock(): void;
}