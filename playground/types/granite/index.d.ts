
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as cairo from "cairo";
import * as GdkPixbuf from "gdkpixbuf";
import * as Gdk from "gdk";
import * as Gtk from "gtk";
import * as Gee from "gee";
import * as Pango from "pango";
import * as Granite from "granite";
/**
 * granite.d.ts
 */
type properties = { [key: string]: any };
export type WidgetsDroppedDelegate = () => void;
export const BADGE: string;
export const CATEGORY_EXPANDER: string;
export const CONTENT_VIEW: string;
export const CONTENT_VIEW_WINDOW: string;
export const COMPOSITED: string;
export const DECORATED_WINDOW: string;
export const H1_TEXT: string;
export const H2_TEXT: string;
export const H3_TEXT: string;
export const HELP_BUTTON: string;
export const OVERLAY_BAR: string;
export const POPOVER: string;
export const POPOVER_BG: string;
export const SOURCE_LIST: string;
export const THIN_PANE_SEPARATOR: string;
export const TITLE_TEXT: string;
export const STYLE_CLASS_ACCENT: string;
export const STYLE_CLASS_AVATAR: string;
export const STYLE_CLASS_BACK_BUTTON: string;
export const STYLE_CLASS_BADGE: string;
export const STYLE_CLASS_CARD: string;
export const STYLE_CLASS_CATEGORY_EXPANDER: string;
export const STYLE_CLASS_CHECKERBOARD: string;
export const STYLE_CLASS_H1_LABEL: string;
export const STYLE_CLASS_H2_LABEL: string;
export const STYLE_CLASS_H3_LABEL: string;
export const STYLE_CLASS_H4_LABEL: string;
export const STYLE_CLASS_MODE_SWITCH: string;
export const STYLE_CLASS_OVERLAY_BAR: string;
export const STYLE_CLASS_PRIMARY_LABEL: string;
export const STYLE_CLASS_SEEKBAR: string;
export const STYLE_CLASS_SOURCE_LIST: string;
export const STYLE_CLASS_STORAGEBAR: string;
export const STYLE_CLASS_TERMINAL: string;
export const STYLE_CLASS_WELCOME: string;
/**
 * 
 */
export function date_time_get_default_time_format(is_12h: boolean, with_second: boolean): string;
/**
 * 
 */
export function date_time_get_relative_datetime(date_time: GLib.DateTime): string;
/**
 * 
 */
export function date_time_is_same_day(day1: GLib.DateTime, day2: GLib.DateTime): boolean;
/**
 * 
 */
export function date_time_get_default_date_format(with_weekday: boolean, with_day: boolean, with_year: boolean): string;
/**
 * 
 */
export function date_time_seconds_to_time(seconds: number): string;
/**
 * 
 */
export function services_application_set_badge(count: number, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
/**
 * 
 */
export function services_application_set_badge_finish(_res_: Gio.AsyncResult): boolean;
/**
 * 
 */
export function services_application_set_badge_visible(visible: boolean, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
/**
 * 
 */
export function services_application_set_badge_visible_finish(_res_: Gio.AsyncResult): boolean;
/**
 * 
 */
export function services_application_set_progress(progress: number, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
/**
 * 
 */
export function services_application_set_progress_finish(_res_: Gio.AsyncResult): boolean;
/**
 * 
 */
export function services_application_set_progress_visible(visible: boolean, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
/**
 * 
 */
export function services_application_set_progress_visible_finish(_res_: Gio.AsyncResult): boolean;
/**
 * 
 */
export function widgets_utils_set_color_primary(window: Gtk.Widget, color: Gdk.RGBA, priority: number): Gtk.CssProvider | null;
/**
 * 
 */
export function widgets_utils_set_theming(widget: Gtk.Widget, stylesheet: string, class_name: string | null, priority: number): Gtk.CssProvider | null;
/**
 * 
 */
export function widgets_utils_set_theming_for_screen(screen: Gdk.Screen, stylesheet: string, priority: number): Gtk.CssProvider | null;
/**
 * 
 */
export function widgets_utils_get_css_provider(stylesheet: string): Gtk.CssProvider | null;
/**
 * 
 */
export function widgets_utils_apply_text_style_to_label(text_style: TextStyle, label: Gtk.Label): void;
/**
 * 
 */
export function widgets_utils_get_default_close_button_position(): [boolean, CloseButtonPosition];
/**
 * 
 */
export function widgets_utils_get_button_layout_schema(): string | null;
/**
 * 
 */
export function widgets_storage_bar_item_description_get_class(description: WidgetsStorageBarItemDescription): string | null;
/**
 * 
 */
export function widgets_storage_bar_item_description_get_name(description: WidgetsStorageBarItemDescription): string;
/**
 * 
 */
export function widgets_show_about_dialog(parent: object | null, first: string, ___: unknown[]): void;
/**
 * 
 */
export function text_style_get_stylesheet(): [string, string];
/**
 * 
 */
export function accel_to_string(accel: string): string;
/**
 * 
 */
export function markup_accel_tooltip(accels: string[] | null, accels_length1: number, description: string | null): string;
/**
 * 
 */
export function contrasting_foreground_color(bg_color: Gdk.RGBA): [Gdk.RGBA];
export enum ServicesLogLevel {
    DEBUG = 0,
    INFO = 1,
    NOTIFY = 2,
    WARN = 3,
    ERROR = 4,
    FATAL = 5,
}
export enum ContractorError {
    SERVICE_NOT_AVAILABLE = 0,
}
export enum WidgetsDynamicNotebookTabBarBehavior {
    ALWAYS = 0,
    SINGLE = 1,
    NEVER = 2,
}
export enum WidgetsStorageBarItemDescription {
    OTHER = 0,
    AUDIO = 1,
    VIDEO = 2,
    PHOTO = 3,
    APP = 4,
    FILES = (null),
}
export enum CollapseMode {
    NONE = 0,
    LEFT = 1,
    TOP = 1,
    FIRST = 1,
    RIGHT = 2,
    BOTTOM = 2,
    LAST = 2,
}
export enum TextStyle {
    TITLE = 0,
    H1 = 1,
    H2 = 2,
    H3 = 3,
}
export enum CloseButtonPosition {
    LEFT = 0,
    RIGHT = 1,
}
export enum SettingsPageStatusType {
    ERROR = 0,
    OFFLINE = 1,
    SUCCESS = 2,
    WARNING = 3,
    NONE = 4,
}
export class DrawingBufferSurface extends GObject.Object {constructor(config?: properties);
surface: cairo.Surface;
width: number;
height: number;
readonly context: cairo.Context;static with_surface(width: number, height: number, model: cairo.Surface): DrawingBufferSurface;
static with_buffer_surface(width: number, height: number, model: DrawingBufferSurface): DrawingBufferSurface;
clear(): void;
load_to_pixbuf(): GdkPixbuf.Pixbuf;
average_color(): DrawingColor;
fast_blur(radius: number, process_count: number): void;
exponential_blur(radius: number): void;
gaussian_blur(radius: number): void;
get_surface(): cairo.Surface;
get_width(): number;
get_height(): number;
get_context(): cairo.Context;
}
export class DrawingColor extends GObject.Object {constructor(config?: properties);
static from_gdk(color: Gdk.Color): DrawingColor;
static from_rgba(color: Gdk.RGBA): DrawingColor;
static from_string(color: string): DrawingColor;
static from_int(color: number): DrawingColor;
set_hue(hue: number): DrawingColor;
set_sat(sat: number): DrawingColor;
set_val(val: number): DrawingColor;
set_alpha(alpha: number): DrawingColor;
get_hue(): number;
get_sat(): number;
get_val(): number;
add_hue(val: number): DrawingColor;
set_min_sat(sat: number): DrawingColor;
set_min_value(val: number): DrawingColor;
set_max_sat(sat: number): DrawingColor;
set_max_val(val: number): DrawingColor;
multiply_sat(amount: number): DrawingColor;
brighten_val(amount: number): DrawingColor;
darken_val(amount: number): DrawingColor;
darken_by_sat(amount: number): DrawingColor;
to_string(): string;
to_int(): number;
static alpha_from_int(color: number): number;
static red_from_int(color: number): number;
static green_from_int(color: number): number;
static blue_from_int(color: number): number;
}
export class DrawingUtilities extends GObject.Object {constructor(config?: properties);
static cairo_rounded_rectangle(cr: cairo.Context, x: number, y: number, width: number, height: number, radius: number): void;
static average_color(source: GdkPixbuf.Pixbuf): DrawingColor;
}
export class GtkPatchAboutDialog extends Gtk.Dialog {constructor(config?: properties);
artists: string[];
authors: string[];
comments: string;
copyright: string;
documenters: string[];
license: string;
license_type: Gtk.License;
logo: GdkPixbuf.Pixbuf;
logo_icon_name: string;
program_name: string;
translator_credits: string;
version: string;
website: string;
website_label: string;
get_artists(): [string[], number];
set_artists(value: string[], value_length1: number): void;
get_authors(): [string[], number];
set_authors(value: string[], value_length1: number): void;
get_comments(): string;
set_comments(value: string): void;
get_copyright(): string;
set_copyright(value: string): void;
get_documenters(): [string[], number];
set_documenters(value: string[], value_length1: number): void;
get_license(): string;
set_license(value: string): void;
get_license_type(): Gtk.License;
set_license_type(value: Gtk.License): void;
get_logo(): GdkPixbuf.Pixbuf;
set_logo(value: GdkPixbuf.Pixbuf): void;
get_logo_icon_name(): string;
set_logo_icon_name(value: string): void;
get_program_name(): string;
set_program_name(value: string): void;
get_translator_credits(): string;
set_translator_credits(value: string): void;
get_version(): string;
set_version(value: string): void;
get_website(): string;
set_website(value: string): void;
get_website_label(): string;
set_website_label(value: string): void;
}
export class ServicesContractorProxy  {constructor(config?: properties);
readonly priv: ServicesContractorProxyPrivate;
static get_instance(): unknown;
static get_all_contracts(): Gee.List;
static get_contracts_by_mime(mime_type: string): Gee.List;
static get_contracts_by_mimelist(mime_types: string[], mime_types_length1: number): Gee.List;
static get_contracts_for_file(file: Gio.File): Gee.List;
static get_contracts_for_files(files: Gio.File[], files_length1: number): Gee.List;
}
export class ServicesIconFactory extends GObject.Object {constructor(config?: properties);
load_symbolic_icon_from_gicon(style: Gtk.StyleContext, gicon: Gio.Icon, size: number): GdkPixbuf.Pixbuf | null;
load_symbolic_icon(style: Gtk.StyleContext, iconname: string, size: number): GdkPixbuf.Pixbuf | null;
static get_default(): unknown;
}
export class ServicesLogger extends GObject.Object {constructor(config?: properties);
static initialize(app_name: string): void;
static notification(msg: string): void;
static get_DisplayLevel(): unknown;
static set_DisplayLevel(value: unknown): void;
}
export class ServicesPaths extends GObject.Object {constructor(config?: properties);
static initialize(app_name: string, data_folder_path: string): void;
static ensure_directory_exists(dir: Gio.File): boolean;
static get_home_folder(): Gio.File;
static set_home_folder(value: Gio.File): void;
static get_data_folder(): Gio.File;
static set_data_folder(value: Gio.File): void;
static get_xdg_config_home_folder(): Gio.File;
static set_xdg_config_home_folder(value: Gio.File): void;
static get_xdg_data_home_folder(): Gio.File;
static set_xdg_data_home_folder(value: Gio.File): void;
static get_xdg_cache_home_folder(): Gio.File;
static set_xdg_cache_home_folder(value: Gio.File): void;
static get_xdg_data_dir_folders(): GLib.List;
static set_xdg_data_dir_folders(value: GLib.List): void;
static get_user_config_folder(): Gio.File;
static set_user_config_folder(value: Gio.File): void;
static get_user_data_folder(): Gio.File;
static set_user_data_folder(value: Gio.File): void;
static get_user_cache_folder(): Gio.File;
static set_user_cache_folder(value: Gio.File): void;
}
export class ServicesSettings  {constructor(config?: properties);
schema: Gio.Settings;
readonly priv: ServicesSettingsPrivate;
verify(key: string): void;
get_schema(): Gio.Settings;
}
export class ServicesSimpleCommand extends GObject.Object {constructor(config?: properties);
run(): void;
}
export class ServicesSystem extends GObject.Object {constructor(config?: properties);
static open_uri(uri: string): void;
static open(file: Gio.File): void;
static open_files(files: Gio.File[], files_length1: number): void;
static launch(app: Gio.File): void;
static execute_command(command: string): boolean;
static launch_with_files(app: Gio.File | null, files: Gio.File[], files_length1: number): void;
static history_is_enabled(): boolean;
}
export class WidgetsAboutDialog extends GtkPatchAboutDialog {constructor(config?: properties);
help: string;
translate: string;
bug: string;
get_help(): string;
set_help(value: string): void;
get_translate(): string;
set_translate(value: string): void;
get_bug(): string;
set_bug(value: string): void;
}
export class WidgetsAlertView extends Gtk.Grid {constructor(config?: properties);
title: string;
description: string;
icon_name: string;
show_action(label: string | null): void;
hide_action(): void;
get_title(): string;
set_title(value: string): void;
get_description(): string;
set_description(value: string): void;
get_icon_name(): string;
set_icon_name(value: string): void;
}
export class WidgetsAppMenu extends Gtk.MenuButton {constructor(config?: properties);
static with_app(application: Application | null, menu: Gtk.Menu): WidgetsAppMenu;
add_items(menu: Gtk.Menu): void;
}
export class WidgetsAvatar extends Gtk.EventBox {constructor(config?: properties);
pixbuf: GdkPixbuf.Pixbuf;static from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): WidgetsAvatar;
static from_file(filepath: string, pixel_size: number): WidgetsAvatar;
static with_default_icon(pixel_size: number): WidgetsAvatar;
show_default(pixel_size: number): void;
get_pixbuf(): GdkPixbuf.Pixbuf | null;
set_pixbuf(value: GdkPixbuf.Pixbuf | null): void;
}
export class WidgetsCellRendererBadge extends Gtk.CellRenderer {constructor(config?: properties);
text: string;
get_text(): string;
set_text(value: string): void;
}
export class WidgetsCellRendererExpander extends Gtk.CellRenderer {constructor(config?: properties);
is_category_expander: boolean;
get_arrow_size(widget: Gtk.Widget): number;
get_is_category_expander(): boolean;
set_is_category_expander(value: boolean): void;
vfunc_get_arrow_size(widget: Gtk.Widget): number;
}
export class WidgetsCollapsiblePaned extends Gtk.Paned {constructor(config?: properties);
collapse_mode: CollapseMode;
get_collapse_mode(): CollapseMode;
set_collapse_mode(value: CollapseMode): void;
}
export class WidgetsCompositedWindow extends Gtk.Window {constructor(config?: properties);
}
export class WidgetsDatePicker extends Gtk.Entry {constructor(config?: properties);
format: string;
date: GLib.DateTime;static with_format(format: string): WidgetsDatePicker;
position_dropdown(): [Gdk.Rectangle];
get_format(): string;
get_date(): GLib.DateTime;
set_date(value: GLib.DateTime): void;
vfunc_position_dropdown(): [Gdk.Rectangle];
}
export class WidgetsTab extends Gtk.EventBox {constructor(config?: properties);
label: string;
pinned: boolean;
pinnable: boolean;
restore_data: string;
page: Gtk.Widget;
icon: Gio.Icon;
working: boolean;
ellipsize_mode: Pango.EllipsizeMode;
fixed: boolean;
menu: Gtk.Menu;
close(): void;
get_label(): string;
set_label(value: string): void;
get_pinned(): boolean;
set_pinned(value: boolean): void;
get_pinnable(): boolean;
set_pinnable(value: boolean): void;
get_restore_data(): string;
set_restore_data(value: string): void;
get_page(): Gtk.Widget;
set_page(value: Gtk.Widget): void;
get_icon(): Gio.Icon | null;
set_icon(value: Gio.Icon | null): void;
get_working(): boolean;
set_working(value: boolean): void;
get_ellipsize_mode(): Pango.EllipsizeMode;
set_ellipsize_mode(value: Pango.EllipsizeMode): void;
get_fixed(): boolean;
set_fixed(value: boolean): void;
get_menu(): Gtk.Menu;
set_menu(value: Gtk.Menu): void;
}
export class WidgetsDynamicNotebook extends Gtk.EventBox {constructor(config?: properties);
readonly n_tabs: number;
show_tabs: boolean;
show_icons: boolean;
tabs_closable: boolean;
allow_drag: boolean;
allow_new_window: boolean;
allow_duplication: boolean;
allow_restoring: boolean;
max_restorable_tabs: number;
add_button_visible: boolean;
allow_pinning: boolean;
force_left: boolean;
add_button_tooltip: string;
current: WidgetsTab;
readonly tabs: GLib.List;
group_name: string;
tab_bar_behavior: WidgetsDynamicNotebookTabBarBehavior;
menu: Gtk.Menu;
remove_tab(tab: WidgetsTab): void;
next_page(): void;
previous_page(): void;
get_children(): GLib.List;
get_tab_position(tab: WidgetsTab): number;
set_tab_position(tab: WidgetsTab, position: number): void;
get_tab_by_index(index: number): WidgetsTab | null;
get_tab_by_widget(widget: Gtk.Widget): WidgetsTab | null;
get_nth_page(index: number): Gtk.Widget;
insert_tab(tab: WidgetsTab, index: number): number;
get_n_tabs(): number;
get_show_tabs(): boolean;
set_show_tabs(value: boolean): void;
get_show_icons(): boolean;
set_show_icons(value: boolean): void;
get_tabs_closable(): boolean;
set_tabs_closable(value: boolean): void;
get_allow_drag(): boolean;
set_allow_drag(value: boolean): void;
get_allow_new_window(): boolean;
set_allow_new_window(value: boolean): void;
get_allow_duplication(): boolean;
set_allow_duplication(value: boolean): void;
get_allow_restoring(): boolean;
set_allow_restoring(value: boolean): void;
get_max_restorable_tabs(): number;
set_max_restorable_tabs(value: number): void;
get_add_button_visible(): boolean;
set_add_button_visible(value: boolean): void;
get_allow_pinning(): boolean;
set_allow_pinning(value: boolean): void;
get_force_left(): boolean;
set_force_left(value: boolean): void;
get_add_button_tooltip(): string;
set_add_button_tooltip(value: string): void;
get_current(): WidgetsTab;
set_current(value: WidgetsTab): void;
get_tabs(): GLib.List;
get_group_name(): string;
set_group_name(value: string): void;
get_tab_bar_behavior(): WidgetsDynamicNotebookTabBarBehavior;
set_tab_bar_behavior(value: WidgetsDynamicNotebookTabBarBehavior): void;
get_menu(): Gtk.Menu;
}
export class WidgetsModeButton extends Gtk.Box {constructor(config?: properties);
selected: number;
readonly n_items: number;
append_pixbuf(pixbuf: GdkPixbuf.Pixbuf): number;
append_text(text: string): number;
append_icon(icon_name: string, size: Gtk.IconSize): number;
append(w: Gtk.Widget): number;
set_active(new_active_index: number): void;
set_item_visible(index: number, val: boolean): void;
remove(index: number): void;
clear_children(): void;
get_selected(): number;
set_selected(value: number): void;
get_n_items(): number;
}
export class WidgetsOverlayBar extends Gtk.EventBox {constructor(config?: properties);
overlay: Gtk.Overlay;
status: string;
label: string;
active: boolean;
get_overlay(): Gtk.Overlay | null;
get_status(): string;
set_status(value: string): void;
get_label(): string;
set_label(value: string): void;
get_active(): boolean;
set_active(value: boolean): void;
}
export class WidgetsSourceList extends Gtk.ScrolledWindow {constructor(config?: properties);
root: WidgetsSourceListExpandableItem;
selected: WidgetsSourceListItem;
ellipsize_mode: Pango.EllipsizeMode;
readonly editing: boolean;
has_item(item: WidgetsSourceListItem): boolean;
set_filter_func(visible_func: unknown | null, visible_func_target: object | null, refilter: boolean): void;
refilter(): void;
is_item_expanded(item: WidgetsSourceListItem): boolean;
start_editing_item(item: WidgetsSourceListItem): boolean;
stop_editing(): void;
enable_drag_source(src_entries: Gtk.TargetEntry[], src_entries_length1: number): void;
disable_drag_source(): void;
enable_drag_dest(dest_entries: Gtk.TargetEntry[], dest_entries_length1: number, actions: Gdk.DragAction): void;
disable_drag_dest(): void;
scroll_to_item(item: WidgetsSourceListItem, expand_parents: boolean, use_align: boolean, row_align: number): boolean;
get_previous_item(reference: WidgetsSourceListItem): WidgetsSourceListItem | null;
get_next_item(reference: WidgetsSourceListItem): WidgetsSourceListItem | null;
get_first_child(parent: WidgetsSourceListExpandableItem): WidgetsSourceListItem | null;
get_last_child(parent: WidgetsSourceListExpandableItem): WidgetsSourceListItem | null;
get_n_visible_children(parent: WidgetsSourceListExpandableItem): number;
get_root(): WidgetsSourceListExpandableItem;
set_root(value: WidgetsSourceListExpandableItem): void;
get_selected(): WidgetsSourceListItem | null;
set_selected(value: WidgetsSourceListItem | null): void;
get_ellipsize_mode(): Pango.EllipsizeMode;
set_ellipsize_mode(value: Pango.EllipsizeMode): void;
get_editing(): boolean;
}
export class WidgetsSourceListItem extends GObject.Object {constructor(config?: properties);
name: string;
markup: string;
badge: string;
editable: boolean;
visible: boolean;
selectable: boolean;
icon: Gio.Icon;
activatable: Gio.Icon;
get_context_menu(): Gtk.Menu | null;
get_parent(): WidgetsSourceListExpandableItem;
get_name(): string;
set_name(value: string): void;
get_markup(): string | null;
set_markup(value: string | null): void;
get_badge(): string;
set_badge(value: string): void;
get_editable(): boolean;
set_editable(value: boolean): void;
get_visible(): boolean;
set_visible(value: boolean): void;
get_selectable(): boolean;
set_selectable(value: boolean): void;
get_icon(): Gio.Icon;
set_icon(value: Gio.Icon): void;
get_activatable(): Gio.Icon;
set_activatable(value: Gio.Icon): void;
vfunc_get_context_menu(): Gtk.Menu | null;
}
export class WidgetsSourceListExpandableItem extends WidgetsSourceListItem {constructor(config?: properties);
collapsible: boolean;
expanded: boolean;
readonly n_children: number;
readonly children: Gee.Collection;
contains(item: WidgetsSourceListItem): boolean;
add(item: WidgetsSourceListItem): void;
remove(item: WidgetsSourceListItem): void;
clear(): void;
expand_all(inclusive: boolean, recursive: boolean): void;
collapse_all(inclusive: boolean, recursive: boolean): void;
expand_with_parents(): void;
collapse_with_parents(): void;
get_collapsible(): boolean;
set_collapsible(value: boolean): void;
get_expanded(): boolean;
set_expanded(value: boolean): void;
get_n_children(): number;
get_children(): Gee.Collection;
}
export class WidgetsStorageBar extends Gtk.Box {constructor(config?: properties);
storage: number;
total_usage: number;
inner_margin_sides: number;static with_total_usage(storage: number, total_usage: number): WidgetsStorageBar;
update_block_size(description: WidgetsStorageBarItemDescription, size: number): void;
get_storage(): number;
set_storage(value: number): void;
get_total_usage(): number;
set_total_usage(value: number): void;
get_inner_margin_sides(): number;
set_inner_margin_sides(value: number): void;
}
export class WidgetsTimePicker extends Gtk.Entry {constructor(config?: properties);
format_12: string;
format_24: string;
time: GLib.DateTime;static with_format(format_12: string, format_24: string): WidgetsTimePicker;
position_dropdown(): [number,number];
get_format_12(): string;
get_format_24(): string;
get_time(): GLib.DateTime;
set_time(value: GLib.DateTime): void;
vfunc_position_dropdown(): [number,number];
}
export class WidgetsToast extends Gtk.Revealer {constructor(config?: properties);
title: string;
set_default_action(label: string | null): void;
send_notification(): void;
get_title(): string;
set_title(value: string): void;
}
export class WidgetsWelcomeButton extends Gtk.Button {constructor(config?: properties);
title: string;
description: string;
icon: Gtk.Image;
get_title(): string;
set_title(value: string): void;
get_description(): string;
set_description(value: string): void;
get_icon(): Gtk.Image | null;
set_icon(value: Gtk.Image | null): void;
}
export class WidgetsWelcome extends Gtk.EventBox {constructor(config?: properties);
title: string;
subtitle: string;
set_item_visible(index: number, val: boolean): void;
remove_item(index: number): void;
set_item_sensitivity(index: number, val: boolean): void;
append(icon_name: string, option_text: string, description_text: string): number;
append_with_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null, option_text: string, description_text: string): number;
append_with_image(image: Gtk.Image | null, option_text: string, description_text: string): number;
get_button_from_index(index: number): WidgetsWelcomeButton | null;
get_title(): string;
set_title(value: string): void;
get_subtitle(): string;
set_subtitle(value: string): void;
}
export class Application  {constructor(config?: properties);
readonly priv: ApplicationPrivate;
readonly build_data_dir: string;
readonly build_pkg_data_dir: string;
readonly build_release_name: string;
readonly build_version: string;
readonly build_version_info: string;
readonly program_name: string;
readonly exec_name: string;
readonly app_copyright: string;
readonly app_years: string;
readonly app_icon: string;
readonly app_launcher: string;
readonly main_url: string;
readonly bug_url: string;
readonly help_url: string;
readonly translate_url: string;
readonly about_authors: string[];
readonly about_authors_length1: number;
readonly about_documenters: string[];
readonly about_documenters_length1: number;
readonly about_artists: string[];
readonly about_artists_length1: number;
readonly about_comments: string;
readonly about_translators: string;
readonly about_license: string;
readonly about_license_type: Gtk.License;
readonly granite_application_DEBUG: boolean;
readonly about_dlg: WidgetsAboutDialog;
run(args: string[], args_length1: number): number;
set_options(): void;
create_appmenu(menu: Gtk.Menu): WidgetsAppMenu;
show_about(parent: Gtk.Widget): void;
}
export class SettingsPage  {constructor(config?: properties);
status_type: SettingsPageStatusType;
display_widget: Gtk.Widget;
header: string;
status: string;
icon_name: string;
title: string;
readonly priv: SettingsPagePrivate;
readonly _icon_name: string;
readonly _title: string;
get_status_type(): SettingsPageStatusType;
set_status_type(value: SettingsPageStatusType): void;
get_display_widget(): Gtk.Widget | null;
get_header(): string | null;
get_status(): string;
set_status(value: string): void;
get_icon_name(): string | null;
set_icon_name(value: string | null): void;
get_title(): string;
set_title(value: string): void;
}
export class SimpleSettingsPage  {constructor(config?: properties);
action_area: Gtk.ButtonBox;
content_area: Gtk.Grid;
status_switch: Gtk.Switch;
activatable: boolean;
description: string;
icon_name: string;
title: string;
readonly priv: SimpleSettingsPagePrivate;
get_action_area(): Gtk.ButtonBox;
get_content_area(): Gtk.Grid;
get_status_switch(): Gtk.Switch | null;
get_activatable(): boolean;
get_description(): string;
set_description(value: string): void;
get_icon_name(): string;
set_icon_name(value: string): void;
get_title(): string;
set_title(value: string): void;
}
export class AsyncImage extends Gtk.Image {constructor(config?: properties);
load_on_realize: boolean;
auto_size_request: boolean;
gicon_async: Gio.Icon;
size_async: number;static from_gicon_async(icon: Gio.Icon, size: number, load_on_realize: boolean, auto_size_request: boolean): AsyncImage;
static from_icon_name_async(icon_name: string, icon_size: Gtk.IconSize, load_on_realize: boolean, auto_size_request: boolean): AsyncImage;
set_from_gicon_async(icon: Gio.Icon, size: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
set_from_gicon_finish(_res_: Gio.AsyncResult): void;
set_from_icon_name_async(icon_name: string, icon_size: Gtk.IconSize, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
set_from_icon_name_finish(_res_: Gio.AsyncResult): void;
set_from_file_async(file: Gio.File, width: number, height: number, preserve_aspect_ratio: boolean, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
set_from_file_finish(_res_: Gio.AsyncResult): void;
get_gicon_async(): Gio.Icon | null;
get_size_async(): number;
}
export class HeaderLabel extends Gtk.Label {constructor(config?: properties);
}
export class MessageDialog extends Gtk.Dialog {constructor(config?: properties);
primary_text: string;
secondary_text: string;
image_icon: Gio.Icon;
badge_icon: Gio.Icon;
primary_label: Gtk.Label;
secondary_label: Gtk.Label;
buttons: Gtk.ButtonsType;
custom_bin: Gtk.Bin;static with_image_from_icon_name(primary_text: string, secondary_text: string, image_icon_name: string, buttons: Gtk.ButtonsType): MessageDialog;
show_error_details(error_message: string): void;
get_primary_text(): string;
set_primary_text(value: string): void;
get_secondary_text(): string;
set_secondary_text(value: string): void;
get_image_icon(): Gio.Icon;
set_image_icon(value: Gio.Icon): void;
get_badge_icon(): Gio.Icon;
set_badge_icon(value: Gio.Icon): void;
get_primary_label(): Gtk.Label;
get_secondary_label(): Gtk.Label;
get_custom_bin(): Gtk.Bin;
}
export class ModeSwitch extends Gtk.Grid {constructor(config?: properties);
active: boolean;
primary_icon_gicon: Gio.Icon;
primary_icon_name: string;
primary_icon_tooltip_text: string;
secondary_icon_gicon: Gio.Icon;
secondary_icon_name: string;
secondary_icon_tooltip_text: string;static from_icon_name(primary_icon_name: string, secondary_icon_name: string): ModeSwitch;
get_active(): boolean;
set_active(value: boolean): void;
get_primary_icon_gicon(): Gio.Icon;
set_primary_icon_gicon(value: Gio.Icon): void;
get_primary_icon_name(): string;
set_primary_icon_name(value: string): void;
get_primary_icon_tooltip_text(): string;
set_primary_icon_tooltip_text(value: string): void;
get_secondary_icon_gicon(): Gio.Icon;
set_secondary_icon_gicon(value: Gio.Icon): void;
get_secondary_icon_name(): string;
set_secondary_icon_name(value: string): void;
get_secondary_icon_tooltip_text(): string;
set_secondary_icon_tooltip_text(value: string): void;
}
export class SeekBar extends Gtk.Grid {constructor(config?: properties);
playback_duration: number;
playback_progress: number;
is_grabbing: boolean;
is_hovering: boolean;
progression_label: Gtk.Label;
duration_label: Gtk.Label;
scale: Gtk.Scale;
get_playback_duration(): number;
set_playback_duration(value: number): void;
get_playback_progress(): number;
set_playback_progress(value: number): void;
get_is_grabbing(): boolean;
get_is_hovering(): boolean;
get_progression_label(): Gtk.Label;
set_progression_label(value: Gtk.Label): void;
get_duration_label(): Gtk.Label;
set_duration_label(value: Gtk.Label): void;
get_scale(): Gtk.Scale;
set_scale(value: Gtk.Scale): void;
}
export class SettingsSidebar extends Gtk.ScrolledWindow {constructor(config?: properties);
stack: Gtk.Stack;
visible_child_name: string;
get_stack(): Gtk.Stack;
get_visible_child_name(): string | null;
set_visible_child_name(value: string | null): void;
}
export class DrawingBufferSurfaceClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class DrawingBufferSurfacePrivate  {constructor(config?: properties);
}
export class DrawingColorClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class DrawingColorPrivate  {constructor(config?: properties);
}
export class DrawingUtilitiesClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class DrawingUtilitiesPrivate  {constructor(config?: properties);
}
export class GtkPatchAboutDialogClass  {constructor(config?: properties);
readonly parent_class: Gtk.DialogClass;
readonly activate_link: unknown;
}
export class GtkPatchAboutDialogPrivate  {constructor(config?: properties);
}
export class ServicesContractorProxyClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class ServicesContractorProxyPrivate  {constructor(config?: properties);
}
export class ServicesIconFactoryClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class ServicesIconFactoryPrivate  {constructor(config?: properties);
}
export class ServicesLoggerClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class ServicesLoggerPrivate  {constructor(config?: properties);
}
export class ServicesPathsClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class ServicesPathsPrivate  {constructor(config?: properties);
}
export class ServicesSettingsClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly verify: unknown;
}
export class ServicesSettingsPrivate  {constructor(config?: properties);
}
export class ServicesSimpleCommandClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class ServicesSimpleCommandPrivate  {constructor(config?: properties);
}
export class ServicesSystemClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class ServicesSystemPrivate  {constructor(config?: properties);
}
export class ServicesContractIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_display_name: unknown;
readonly get_description: unknown;
readonly get_icon: unknown;
readonly execute_with_file: unknown;
readonly execute_with_files: unknown;
}
export class ServicesSettingsSerializableIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly settings_serialize: unknown;
readonly settings_deserialize: unknown;
}
export class WidgetsAboutDialogClass  {constructor(config?: properties);
readonly parent_class: GtkPatchAboutDialogClass;
}
export class WidgetsAboutDialogPrivate  {constructor(config?: properties);
}
export class WidgetsAlertViewClass  {constructor(config?: properties);
readonly parent_class: Gtk.GridClass;
}
export class WidgetsAlertViewPrivate  {constructor(config?: properties);
}
export class WidgetsAppMenuClass  {constructor(config?: properties);
readonly parent_class: Gtk.MenuButtonClass;
}
export class WidgetsAppMenuPrivate  {constructor(config?: properties);
}
export class WidgetsAvatarClass  {constructor(config?: properties);
readonly parent_class: Gtk.EventBoxClass;
}
export class WidgetsAvatarPrivate  {constructor(config?: properties);
}
export class WidgetsCellRendererBadgeClass  {constructor(config?: properties);
readonly parent_class: Gtk.CellRendererClass;
}
export class WidgetsCellRendererBadgePrivate  {constructor(config?: properties);
}
export class WidgetsCellRendererExpanderClass  {constructor(config?: properties);
readonly parent_class: Gtk.CellRendererClass;
readonly get_arrow_size: unknown;
}
export class WidgetsCellRendererExpanderPrivate  {constructor(config?: properties);
}
export class WidgetsCollapsiblePanedClass  {constructor(config?: properties);
readonly parent_class: Gtk.PanedClass;
}
export class WidgetsCollapsiblePanedPrivate  {constructor(config?: properties);
}
export class WidgetsCompositedWindowClass  {constructor(config?: properties);
readonly parent_class: Gtk.WindowClass;
}
export class WidgetsCompositedWindowPrivate  {constructor(config?: properties);
}
export class WidgetsDatePickerClass  {constructor(config?: properties);
readonly parent_class: Gtk.EntryClass;
readonly position_dropdown: unknown;
}
export class WidgetsDatePickerPrivate  {constructor(config?: properties);
}
export class WidgetsTabClass  {constructor(config?: properties);
readonly parent_class: Gtk.EventBoxClass;
}
export class WidgetsTabPrivate  {constructor(config?: properties);
}
export class WidgetsDynamicNotebookClass  {constructor(config?: properties);
readonly parent_class: Gtk.EventBoxClass;
}
export class WidgetsDynamicNotebookPrivate  {constructor(config?: properties);
}
export class WidgetsModeButtonClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
}
export class WidgetsModeButtonPrivate  {constructor(config?: properties);
}
export class WidgetsOverlayBarClass  {constructor(config?: properties);
readonly parent_class: Gtk.EventBoxClass;
}
export class WidgetsOverlayBarPrivate  {constructor(config?: properties);
}
export class WidgetsSourceListClass  {constructor(config?: properties);
readonly parent_class: Gtk.ScrolledWindowClass;
readonly item_selected: unknown;
}
export class WidgetsSourceListPrivate  {constructor(config?: properties);
}
export class WidgetsSourceListItemClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly get_context_menu: unknown;
readonly edited: unknown;
readonly action_activated: unknown;
readonly activated: unknown;
}
export class WidgetsSourceListItemPrivate  {constructor(config?: properties);
}
export class WidgetsSourceListExpandableItemClass  {constructor(config?: properties);
readonly parent_class: WidgetsSourceListItemClass;
readonly toggled: unknown;
}
export class WidgetsSourceListExpandableItemPrivate  {constructor(config?: properties);
}
export class WidgetsStorageBarClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
}
export class WidgetsStorageBarPrivate  {constructor(config?: properties);
}
export class WidgetsTimePickerClass  {constructor(config?: properties);
readonly parent_class: Gtk.EntryClass;
readonly position_dropdown: unknown;
}
export class WidgetsTimePickerPrivate  {constructor(config?: properties);
}
export class WidgetsToastClass  {constructor(config?: properties);
readonly parent_class: Gtk.RevealerClass;
}
export class WidgetsToastPrivate  {constructor(config?: properties);
}
export class WidgetsWelcomeButtonClass  {constructor(config?: properties);
readonly parent_class: Gtk.ButtonClass;
}
export class WidgetsWelcomeButtonPrivate  {constructor(config?: properties);
}
export class WidgetsWelcomeClass  {constructor(config?: properties);
readonly parent_class: Gtk.EventBoxClass;
}
export class WidgetsWelcomePrivate  {constructor(config?: properties);
}
export class WidgetsSourceListSortableIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly allow_dnd_sorting: unknown;
readonly compare: unknown;
}
export class WidgetsSourceListDragSourceIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly draggable: unknown;
readonly prepare_selection_data: unknown;
}
export class WidgetsSourceListDragDestIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly data_drop_possible: unknown;
readonly data_received: unknown;
}
export class ApplicationClass  {constructor(config?: properties);
readonly parent_class: Gtk.ApplicationClass;
readonly set_options: unknown;
readonly show_about: unknown;
}
export class ApplicationPrivate  {constructor(config?: properties);
}
export class SettingsPageClass  {constructor(config?: properties);
readonly parent_class: Gtk.ScrolledWindowClass;
}
export class SettingsPagePrivate  {constructor(config?: properties);
}
export class SimpleSettingsPageClass  {constructor(config?: properties);
readonly parent_class: SettingsPageClass;
}
export class SimpleSettingsPagePrivate  {constructor(config?: properties);
}
export class AsyncImageClass  {constructor(config?: properties);
readonly parent_class: Gtk.ImageClass;
}
export class AsyncImagePrivate  {constructor(config?: properties);
}
export class HeaderLabelClass  {constructor(config?: properties);
readonly parent_class: Gtk.LabelClass;
}
export class HeaderLabelPrivate  {constructor(config?: properties);
}
export class MessageDialogClass  {constructor(config?: properties);
readonly parent_class: Gtk.DialogClass;
}
export class MessageDialogPrivate  {constructor(config?: properties);
}
export class ModeSwitchClass  {constructor(config?: properties);
readonly parent_class: Gtk.GridClass;
}
export class ModeSwitchPrivate  {constructor(config?: properties);
}
export class SeekBarClass  {constructor(config?: properties);
readonly parent_class: Gtk.GridClass;
}
export class SeekBarPrivate  {constructor(config?: properties);
}
export class SettingsSidebarClass  {constructor(config?: properties);
readonly parent_class: Gtk.ScrolledWindowClass;
}
export class SettingsSidebarPrivate  {constructor(config?: properties);
}
export interface ServicesContract  {
get_display_name(): string;
get_description(): string;
get_icon(): Gio.Icon;
execute_with_file(file: Gio.File): void;
execute_with_files(files: Gio.File[], files_length1: number): void;
}
export interface ServicesSettingsSerializable  {
settings_serialize(): string;
settings_deserialize(s: string): void;
}
export interface WidgetsSourceListSortable  {
allow_dnd_sorting(): boolean;
compare(a: WidgetsSourceListItem, b: WidgetsSourceListItem): number;
}
export interface WidgetsSourceListDragSource  {
draggable(): boolean;
prepare_selection_data(selection_data: Gtk.SelectionData): void;
}
export interface WidgetsSourceListDragDest  {
data_drop_possible(context: Gdk.DragContext, data: Gtk.SelectionData): boolean;
data_received(context: Gdk.DragContext, data: Gtk.SelectionData): Gdk.DragAction;
}