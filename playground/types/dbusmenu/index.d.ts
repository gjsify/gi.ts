
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Dbusmenu from "dbusmenu";
/**
 * dbusmenu.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type ClientTypeHandler = (newitem: Menuitem, parent: Menuitem, client: Client, user_data: object | null) => boolean;
export type menuitem_about_to_show_cb = (mi: Menuitem, user_data: object | null) => void;
export type menuitem_buildvariant_slot_t = (mi: Menuitem, properties: string | null) => GLib.Variant;
export const CLIENT_PROP_DBUS_NAME: string;
export const CLIENT_PROP_DBUS_OBJECT: string;
export const CLIENT_PROP_GROUP_EVENTS: string;
export const CLIENT_PROP_STATUS: string;
export const CLIENT_PROP_TEXT_DIRECTION: string;
export const CLIENT_SIGNAL_EVENT_RESULT: string;
export const CLIENT_SIGNAL_ICON_THEME_DIRS_CHANGED: string;
export const CLIENT_SIGNAL_ITEM_ACTIVATE: string;
export const CLIENT_SIGNAL_LAYOUT_UPDATED: string;
export const CLIENT_SIGNAL_NEW_MENUITEM: string;
export const CLIENT_SIGNAL_ROOT_CHANGED: string;
export const CLIENT_TYPES_DEFAULT: string;
export const CLIENT_TYPES_IMAGE: string;
export const CLIENT_TYPES_SEPARATOR: string;
export const MENUITEM_CHILD_DISPLAY_SUBMENU: string;
export const MENUITEM_DISPOSITION_ALERT: string;
export const MENUITEM_DISPOSITION_INFORMATIVE: string;
export const MENUITEM_DISPOSITION_NORMAL: string;
export const MENUITEM_DISPOSITION_WARNING: string;
export const MENUITEM_EVENT_ACTIVATED: string;
export const MENUITEM_EVENT_CLOSED: string;
export const MENUITEM_EVENT_OPENED: string;
export const MENUITEM_ICON_NAME_BLANK: string;
export const MENUITEM_PROP_ACCESSIBLE_DESC: string;
export const MENUITEM_PROP_CHILD_DISPLAY: string;
export const MENUITEM_PROP_DISPOSITION: string;
export const MENUITEM_PROP_ENABLED: string;
export const MENUITEM_PROP_ICON_DATA: string;
export const MENUITEM_PROP_ICON_NAME: string;
export const MENUITEM_PROP_LABEL: string;
export const MENUITEM_PROP_SHORTCUT: string;
export const MENUITEM_PROP_TOGGLE_STATE: string;
export const MENUITEM_PROP_TOGGLE_TYPE: string;
export const MENUITEM_PROP_TYPE: string;
export const MENUITEM_PROP_VISIBLE: string;
export const MENUITEM_SHORTCUT_ALT: string;
export const MENUITEM_SHORTCUT_CONTROL: string;
export const MENUITEM_SHORTCUT_SHIFT: string;
export const MENUITEM_SHORTCUT_SUPER: string;
export const MENUITEM_SIGNAL_ABOUT_TO_SHOW: string;
export const MENUITEM_SIGNAL_CHILD_ADDED: string;
export const MENUITEM_SIGNAL_CHILD_MOVED: string;
export const MENUITEM_SIGNAL_CHILD_REMOVED: string;
export const MENUITEM_SIGNAL_EVENT: string;
export const MENUITEM_SIGNAL_ITEM_ACTIVATED: string;
export const MENUITEM_SIGNAL_PROPERTY_CHANGED: string;
export const MENUITEM_SIGNAL_REALIZED: string;
export const MENUITEM_SIGNAL_SHOW_TO_USER: string;
export const MENUITEM_TOGGLE_CHECK: string;
export const MENUITEM_TOGGLE_RADIO: string;
export const MENUITEM_TOGGLE_STATE_CHECKED: number;
export const MENUITEM_TOGGLE_STATE_UNCHECKED: number;
export const MENUITEM_TOGGLE_STATE_UNKNOWN: number;
export const SERVER_PROP_DBUS_OBJECT: string;
export const SERVER_PROP_ROOT_NODE: string;
export const SERVER_PROP_STATUS: string;
export const SERVER_PROP_TEXT_DIRECTION: string;
export const SERVER_PROP_VERSION: string;
export const SERVER_SIGNAL_ID_PROP_UPDATE: string;
export const SERVER_SIGNAL_ID_UPDATE: string;
export const SERVER_SIGNAL_ITEM_ACTIVATION: string;
export const SERVER_SIGNAL_LAYOUT_UPDATED: string;
export enum Status {
    NORMAL = 0,
    NOTICE = 1,
}
export enum TextDirection {
    NONE = 0,
    LTR = 1,
    RTL = 2,
}
export class Client extends GObject.Object {
    constructor(config?: properties);
    dbus_name: string;
    dbus_object: string;
    group_events: boolean;
    add_type_handler(type: string, newfunc: ClientTypeHandler): boolean;
    add_type_handler_full(type: string, newfunc: ClientTypeHandler, user_data: object | null, destroy_func: GLib.DestroyNotify): boolean;
    get_icon_paths(): string[];
    get_root(): Menuitem;
    get_status(): Status;
    get_text_direction(): TextDirection;
}
export class Menuitem extends GObject.Object {
    constructor(config?: properties);
    id: number;static new_with_id(id: number): Menuitem;
    child_add_position(child: Menuitem, position: number): boolean;
    child_append(child: Menuitem): boolean;
    child_delete(child: Menuitem): boolean;
    child_find(id: number): Menuitem;
    child_prepend(child: Menuitem): boolean;
    child_reorder(child: Menuitem, position: number): boolean;
    find_id(id: number): Menuitem;
    foreach(func: object | null, data: object | null): void;
    get_children(): GLib.List;
    get_id(): number;
    get_parent(): Menuitem;
    get_position(parent: Menuitem): number;
    get_position_realized(parent: Menuitem): number;
    get_root(): boolean;
    handle_event(name: string, variant: GLib.Variant, timestamp: number): void;
    properties_copy(): GLib.HashTable;
    properties_list(): GLib.List;
    property_exist(property: string): boolean;
    property_get(property: string): string;
    property_get_bool(property: string): boolean;
    property_get_byte_array(property: string): [number[], number];
    property_get_int(property: string): number;
    property_get_variant(property: string): GLib.Variant;
    property_remove(property: string): void;
    property_set(property: string, value: string): boolean;
    property_set_bool(property: string, value: boolean): boolean;
    property_set_byte_array(property: string, value: number, nelements: number): boolean;
    property_set_int(property: string, value: number): boolean;
    property_set_variant(property: string, value: GLib.Variant): boolean;
    send_about_to_show(cb: object | null, cb_data: object | null): void;
    set_parent(parent: Menuitem): boolean;
    set_root(root: boolean): void;
    show_to_user(timestamp: number): void;
    take_children(): GLib.List;
    unparent(): boolean;
    vfunc_child_added(position: number): void;
    vfunc_child_moved(newpos: number, oldpos: number): void;
    vfunc_child_removed(): void;
    vfunc_handle_event(name: string, variant: GLib.Variant, timestamp: number): void;
    vfunc_show_to_user(timestamp: number, cb_data: object | null): void;
}
export class MenuitemProxy extends Menuitem {
    constructor(config?: properties);
    menu_item: Menuitem;
    get_wrapped(): Menuitem;
}
export class Server extends GObject.Object {
    constructor(config?: properties);
    dbus_object: string;
    root_node: Menuitem;
    readonly version: number;
    get_icon_paths(): string[];
    get_status(): Status;
    get_text_direction(): TextDirection;
    set_icon_paths(icon_paths: string[]): void;
    set_root(root: Menuitem): void;
    set_status(status: Status): void;
    set_text_direction(dir: TextDirection): void;
}
export class ClientPrivate  {
    constructor(config?: properties);
}
export class MenuitemPrivate  {
    constructor(config?: properties);
}
export class MenuitemProxyPrivate  {
    constructor(config?: properties);
}
export class ServerPrivate  {
    constructor(config?: properties);
}