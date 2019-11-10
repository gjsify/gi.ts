
/**
 * notify
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GdkPixbuf from "gdkpixbuf";
/**
 * 
 */
type properties = { [key: string]: any };
type GType = object;
export const EXPIRES_DEFAULT: number;
export const EXPIRES_NEVER: number;
export const VERSION_MAJOR: number;
export const VERSION_MICRO: number;
export const VERSION_MINOR: number;
/**
 * Gets the application name registered.
 */
export function get_app_name(): string;
/**
 * Synchronously queries the server for its capabilities and returns them
 *  in a #GList.
 */
export function get_server_caps(): GLib.List;
/**
 * Synchronously queries the server for its information, specifically, th
 * e name, vendor,
 * server version, and the version of the notifications specification tha
 * t it
 * is compliant with.
 */
export function get_server_info(): [boolean, string | null,string | null,string | null,string | null];
/**
 * Initialized libnotify. This must be called before any other functions.
 */
export function init(app_name: string): boolean;
/**
 * Gets whether or not libnotify is initialized.
 */
export function is_initted(): boolean;
/**
 * Sets the application name.
 */
export function set_app_name(app_name: string): void;
/**
 * Uninitialized libnotify.
 * This should be called when the program no longer needs libnotify for
 * the rest of its lifecycle, typically just before exitting.
 */
export function uninit(): void;
export type ActionCallback = (notification: Notification, action: string, user_data: object | null) => void;
export enum Urgency {
    LOW = 0,
    NORMAL = 1,
    CRITICAL = 2,
}
export class Notification extends GObject.Object {
    constructor(config?: properties);
    app_name: string;
    body: string;
    readonly closed_reason: number;
    icon_name: string;
    id: number;
    summary: string;
    add_action(action: string, label: string, callback: ActionCallback, user_data: object | null, free_func: GLib.DestroyNotify): void;
    clear_actions(): void;
    clear_hints(): void;
    close(): boolean;
    get_closed_reason(): number;
    set_app_name(app_name: string): void;
    set_category(category: string): void;
    set_hint(key: string, value: GLib.Variant | null): void;
    set_hint_byte(key: string, value: number): void;
    set_hint_byte_array(key: string, value: number[], len: number): void;
    set_hint_double(key: string, value: number): void;
    set_hint_int32(key: string, value: number): void;
    set_hint_string(key: string, value: string): void;
    set_hint_uint32(key: string, value: number): void;
    set_icon_from_pixbuf(icon: GdkPixbuf.Pixbuf): void;
    set_image_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    set_timeout(timeout: number): void;
    set_urgency(urgency: Urgency): void;
    show(): boolean;
    update(summary: string, body: string | null, icon: string | null): boolean;
    vfunc_closed(): void;
}
export class NotificationPrivate  {
    constructor(config?: properties);
}