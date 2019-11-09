
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as Nautilus from "nautilus";
/**
 * nautilus.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
/**
 * 
 */
export function file_info_create(location: Gio.File): FileInfo;
/**
 * 
 */
export function file_info_create_for_uri(uri: string): FileInfo;
/**
 * 
 */
export function file_info_list_copy(files: GLib.List): GLib.List;
/**
 * 
 */
export function file_info_list_free(files: GLib.List): void;
/**
 * 
 */
export function file_info_lookup(location: Gio.File): FileInfo;
/**
 * 
 */
export function file_info_lookup_for_uri(uri: string): FileInfo;
/**
 * 
 */
export function info_provider_update_complete_invoke(update_complete: GObject.Closure, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void;
/**
 * Called when the extension is begin loaded to register the types it exp
 * orts
 * and to perform other initializations.
 */
export function module_initialize(module: GObject.TypeModule): void;
/**
 * Called after the extension has been initialized and has registered all
 *  the
 * types it exports, to load them into Nautilus.
 */
export function module_list_types(): [GType,number];
/**
 * Called when the extension is being unloaded.
 */
export function module_shutdown(): void;
export enum OperationResult {
    COMPLETE = 0,
    FAILED = 1,
    IN_PROGRESS = 2,
}
export type ColumnProviderIface = ColumnProviderInterface;
export type InfoProviderIface = InfoProviderInterface;
export type LocationWidgetProviderIface = LocationWidgetProviderInterface;
export type MenuProviderIface = MenuProviderInterface;
export type PropertyPageProviderIface = PropertyPageProviderInterface;
export class Column extends GObject.Object {
    constructor(config?: properties);
    attribute: string;
    readonly attribute_q: number;
    default_sort_order: Gtk.SortType;
    description: string;
    label: string;
    name: string;
    xalign: number;
}
export class Menu extends GObject.Object {
    constructor(config?: properties);
    append_item(item: MenuItem): void;
    get_items(): GLib.List;
}
export class MenuItem extends GObject.Object {
    constructor(config?: properties);
    icon: string;
    label: string;
    menu: Menu;
    name: string;
    priority: boolean;
    sensitive: boolean;
    tip: string;
    activate(): void;
    set_submenu(menu: Menu): void;
    vfunc_activate(): void;
    static list_free(item_list: GLib.List): void;
}
export class PropertyPage extends GObject.Object {
    constructor(config?: properties);
    label: Gtk.Widget;
    name: string;
    page: Gtk.Widget;
}
export class ColumnProviderInterface  {
    constructor(config?: properties);
    g_iface: GObject.TypeInterface;
}
export class File  {
    constructor(config?: properties);
}
export class InfoProviderInterface  {
    constructor(config?: properties);
    g_iface: GObject.TypeInterface;
}
export class LocationWidgetProviderInterface  {
    constructor(config?: properties);
    g_iface: GObject.TypeInterface;
}
export class MenuProviderInterface  {
    constructor(config?: properties);
    g_iface: GObject.TypeInterface;
}
export class OperationHandle  {
    constructor(config?: properties);
}
export class PropertyPageProviderInterface  {
    constructor(config?: properties);
    g_iface: GObject.TypeInterface;
}
export interface ColumnProvider  {
    get_columns(): GLib.List;
}
export interface FileInfo  {
    add_emblem(emblem_name: string): void;
    add_string_attribute(attribute_name: string, value: string): void;
    can_write(): boolean;
    get_activation_uri(): string;
    get_file_type(): Gio.FileType;
    get_location(): Gio.File;
    get_mime_type(): string;
    get_mount(): Gio.Mount | null;
    get_name(): string;
    get_parent_info(): FileInfo | null;
    get_parent_location(): Gio.File | null;
    get_parent_uri(): string;
    get_string_attribute(attribute_name: string): string;
    get_uri(): string;
    get_uri_scheme(): string;
    invalidate_extension_info(): void;
    is_directory(): boolean;
    is_gone(): boolean;
    is_mime_type(mime_type: string): boolean;
}
export interface InfoProvider  {
    cancel_update(handle: OperationHandle): void;
    update_file_info(file: FileInfo, update_complete: GObject.Closure, handle: OperationHandle): OperationResult;
}
export interface LocationWidgetProvider  {
    get_widget(uri: string, window: Gtk.Widget): Gtk.Widget;
}
export interface MenuProvider  {
    emit_items_updated_signal(): void;
    get_background_items(window: Gtk.Widget, current_folder: FileInfo): GLib.List | null;
    get_file_items(window: Gtk.Widget, files: GLib.List): GLib.List | null;
}
export interface PropertyPageProvider  {
    get_pages(files: GLib.List): GLib.List;
}