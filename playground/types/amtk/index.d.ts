
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as Amtk from "amtk";
/**
 * amtk.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
/**
 * A wrapper function for g_action_map_add_action_entries() that checks
 * duplicates.
 * This function first checks - for each entry - that the @action_map doe
 * sn't
 * already contain a #GAction with the same name. A warning is printed if
 *  an old
 * action will be dropped. In any case, it then calls
 * g_action_map_add_action_entries() with the same arguments as passed to
 *  this
 * function.
 * This function also checks if there are duplicates in the @entries arra
 * y
 * itself.
 */
export function action_map_add_action_entries_check_dups(action_map: Gio.ActionMap, entries: Gio.ActionEntry[], n_entries: number, user_data: object | null): void;
/**
 * Free the resources allocated by Amtk. For example it unrefs the single
 * ton
 * objects.
 * It is not mandatory to call this function, it's just to be friendlier 
 * to
 * memory debugging tools. This function is meant to be called at the end
 *  of
 * main(). It can be called several times.
 */
export function finalize(): void;
/**
 * Like g_menu_append_item() but with (transfer full) for the @item param
 * eter.
 */
export function gmenu_append_item(menu: Gio.Menu, item: Gio.MenuItem): void;
/**
 * Like g_menu_append_section() but with (transfer full) and a different 
 * type
 * for the @section parameter, and calls g_menu_freeze() on @section.
 */
export function gmenu_append_section(menu: Gio.Menu, label: string | null, section: Gio.Menu): void;
/**
 * Initializes the Amtk library (e.g. for the internationalization).
 * This function can be called several times, but is meant to be called a
 * t the
 * beginning of main(), before any other Amtk function call.
 */
export function init(): void;
/**
 * 
 */
export function menu_item_get_long_description(menu_item: Gtk.MenuItem): string | null;
/**
 * Sets an icon to a #GtkMenuItem.
 * If the child widget of @item is already a #GtkBox, all #GtkImage widge
 * ts
 * inside that box are first destroyed. A #GtkImage for @icon_name is the
 * n
 * inserted to the box.
 * If the child widget of @item is not a #GtkBox (it's usually the
 * #GtkAccelLabel), it is replaced by a new #GtkBox and the initial child
 *  widget
 * is inserted to the #GtkBox, alongside the icon.
 * As a consequence, if you want to call functions on the #GtkAccelLabel,
 *  it's
 * easier to do it before calling this function.
 */
export function menu_item_set_icon_name(item: Gtk.MenuItem, icon_name: string): void;
/**
 * Sets the long description of @menu_item. A possible use-case is to dis
 * play it
 * in a #GtkStatusbar, or as a tooltip.
 */
export function menu_item_set_long_description(menu_item: Gtk.MenuItem, long_description: string | null): void;
/**
 * 
 */
export function shortcuts_group_new(title: string): Gtk.Container;
/**
 * 
 */
export function shortcuts_section_new(title: string): Gtk.Container;
/**
 * Creates a new #GtkShortcutsWindow. The #GtkWindow:modal property is se
 * t to
 * %TRUE.
 * It is on purpose that the return type is #GtkShortcutsWindow, not #Gtk
 * Widget
 * or something else, so in C when you declare the variable as
 * #GtkShortcutsWindow it's easier to find it later (searching "GtkShortc
 * uts"
 * will return something in your codebase).
 */
export function shortcuts_window_new(parent: Gtk.Window): Gtk.ShortcutsWindow;
/**
 * Utility function to be able to port an application gradually to #GActi
 * on,
 * when #GtkUIManager and #GtkAction are still used. Porting to #GAction 
 * should
 * be the first step.
 * For @detailed_g_action_name_without_prefix, see the
 * g_action_parse_detailed_name() function.  The `"app."` or `"win."` pre
 * fix (or
 * any other #GActionMap prefix) must not be included in
 * @detailed_g_action_name_without_prefix. For example a valid
 * @detailed_g_action_name_without_prefix is `"open"` or
 * `"insert-command::foobar"`.
 * The same #GAction can be bound to several #GtkAction's (with different
 * parameter values for the #GAction), but the reverse is not true, one
 * #GtkAction cannot be bound to several #GAction's.
 * This function:
 * - Calls g_action_activate() when the #GtkAction #GtkAction::activate s
 * ignal
 *   is emitted.
 * - Binds the #GAction #GAction:enabled property to the #GtkAction
 *   #GtkAction:sensitive property. The binding is done with the
 *   %G_BINDING_BIDIRECTIONAL and %G_BINDING_SYNC_CREATE flags, the sourc
 * e is
 *   the #GAction and the target is the #GtkAction.
 * When using this function, you should set the callback to %NULL in the
 * corresponding #GtkActionEntry.
 */
export function utils_bind_g_action_to_gtk_action(g_action_map: Gio.ActionMap, detailed_g_action_name_without_prefix: string, gtk_action_group: Gtk.ActionGroup, gtk_action_name: string): void;
/**
 * Utility function to be able to port an application gradually to #GActi
 * on and
 * #AmtkActionInfo, when #GtkUIManager is still used. This function goes 
 * one
 * step further compared to amtk_utils_bind_g_action_to_gtk_action(). Wit
 * h
 * amtk_utils_bind_g_action_to_gtk_action(), only the #GAction must exist
 * . With
 * amtk_utils_create_gtk_action(), both the #GAction and #AmtkActionInfo 
 * must
 * exist (so typically you need to convert the #GtkActionEntry's into
 * #AmtkActionInfoEntry's).
 * This function creates a #GtkAction from a #GAction plus its correspond
 * ing
 * #AmtkActionInfo.
 * The #GtkAction is created with the information provided by the
 * #AmtkActionInfo (retrieved with amtk_action_info_central_store_lookup(
 * ) with
 * @detailed_g_action_name_with_prefix as argument). Only the first accel
 * erator
 * is taken into account.
 * Once the #GtkAction is created, it is added to the @gtk_action_group, 
 * and
 * amtk_utils_bind_g_action_to_gtk_action() is called.
 */
export function utils_create_gtk_action(g_action_map: Gio.ActionMap, detailed_g_action_name_with_prefix: string, gtk_action_group: Gtk.ActionGroup, gtk_action_name: string): void;
/**
 * Gets the URI of @item. @item must be a child of @menu. @menu must be a
 * #GtkRecentChooserMenu.
 * This function has been written because the value returned by
 * gtk_recent_chooser_get_current_uri() is not updated when #GtkMenuItem'
 * s of a
 * #GtkRecentChooserMenu are selected/deselected.
 */
export function utils_recent_chooser_menu_get_item_uri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string;
/**
 * Removes the mnemonics from @str. Single underscores are removed, and t
 * wo
 * consecutive underscores are replaced by one underscore (see the docume
 * ntation
 * of gtk_label_new_with_mnemonic()).
 */
export function utils_remove_mnemonic(str: string): string;
export enum FactoryFlags {
    FLAGS_NONE = 0,
    IGNORE_GACTION = 1,
    IGNORE_ICON = 2,
    IGNORE_LABEL = 4,
    IGNORE_TOOLTIP = 8,
    IGNORE_ACCELS = 16,
    IGNORE_ACCELS_FOR_DOC = 32,
    IGNORE_ACCELS_FOR_APP = 64,
}
export class ActionInfoCentralStore  {
    constructor(config?: properties);
    readonly priv: ActionInfoCentralStorePrivate;
    lookup(action_name: string): ActionInfo;
    static get_singleton(): ActionInfoCentralStore;
}
export class ActionInfoStore extends GObject.Object {
    constructor(config?: properties);
    add(info: ActionInfo): void;
    add_entries(entries: ActionInfoEntry[], n_entries: number, translation_domain: string | null): void;
    check_all_used(): void;
    lookup(action_name: string): ActionInfo;
    set_all_accels_to_app(application: Gtk.Application): void;
}
export class ApplicationWindow  {
    constructor(config?: properties);
    application_window: Gtk.ApplicationWindow;
    statusbar: Gtk.Statusbar;
    readonly priv: ApplicationWindowPrivate;
    connect_menu_to_statusbar(menu_shell: Gtk.MenuShell): void;
    connect_recent_chooser_menu_to_statusbar(menu: Gtk.RecentChooserMenu): void;
    create_open_recent_menu(): Gtk.Widget;
    create_open_recent_menu_item(): Gtk.Widget;
    get_application_window(): Gtk.ApplicationWindow;
    get_statusbar(): Gtk.Statusbar | null;
    set_statusbar(statusbar: Gtk.Statusbar | null): void;
    static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow;
}
export class Factory extends GObject.Object {
    constructor(config?: properties);
    application: Gtk.Application;
    default_flags: FactoryFlags;static new_with_default_application(): Factory;
    create_check_menu_item(action_name: string): Gtk.Widget;
    create_check_menu_item_full(action_name: string, flags: FactoryFlags): Gtk.Widget;
    create_gmenu_item(action_name: string): Gio.MenuItem;
    create_gmenu_item_full(action_name: string, flags: FactoryFlags): Gio.MenuItem;
    create_menu_item(action_name: string): Gtk.Widget;
    create_menu_item_full(action_name: string, flags: FactoryFlags): Gtk.Widget;
    create_menu_tool_button(action_name: string): Gtk.MenuToolButton;
    create_menu_tool_button_full(action_name: string, flags: FactoryFlags): Gtk.MenuToolButton;
    create_shortcut(action_name: string): Gtk.Widget;
    create_shortcut_full(action_name: string, flags: FactoryFlags): Gtk.Widget;
    create_simple_menu(entries: ActionInfoEntry[], n_entries: number): Gtk.Widget;
    create_simple_menu_full(entries: ActionInfoEntry[], n_entries: number, flags: FactoryFlags): Gtk.Widget;
    create_tool_button(action_name: string): Gtk.ToolItem;
    create_tool_button_full(action_name: string, flags: FactoryFlags): Gtk.ToolItem;
    get_application(): Gtk.Application | null;
    get_default_flags(): FactoryFlags;
    set_default_flags(default_flags: FactoryFlags): void;
}
export class MenuShell  {
    constructor(config?: properties);
    menu_shell: Gtk.MenuShell;
    readonly priv: MenuShellPrivate;
    get_menu_shell(): Gtk.MenuShell;
    static get_from_gtk_menu_shell(gtk_menu_shell: Gtk.MenuShell): MenuShell;
}
export class ActionInfo  {
    constructor(config?: properties);
    static new_from_entry(info_entry: ActionInfoEntry, translation_domain: string | null): ActionInfo;
    copy(): ActionInfo;
    get_accels(): string[];
    get_action_name(): string | null;
    get_icon_name(): string | null;
    get_label(): string | null;
    get_tooltip(): string | null;
    has_been_used(): boolean;
    mark_as_used(): void;
    ref(): ActionInfo;
    set_accels(accels: string[]): void;
    set_action_name(action_name: string): void;
    set_icon_name(icon_name: string | null): void;
    set_label(label: string | null): void;
    set_tooltip(tooltip: string | null): void;
    unref(): void;
}
export class ActionInfoCentralStorePrivate  {
    constructor(config?: properties);
}
export class ActionInfoEntry  {
    constructor(config?: properties);
    action_name: string;
    icon_name: string;
    label: string;
    accel: string;
    tooltip: string;
    readonly padding: object[];
}
export class ActionInfoStorePrivate  {
    constructor(config?: properties);
}
export class ApplicationWindowPrivate  {
    constructor(config?: properties);
}
export class FactoryPrivate  {
    constructor(config?: properties);
}
export class MenuShellPrivate  {
    constructor(config?: properties);
}