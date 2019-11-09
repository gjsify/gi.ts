
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
/**
 * gsound.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const ATTR_APPLICATION_ICON: string;
export const ATTR_APPLICATION_ICON_NAME: string;
export const ATTR_APPLICATION_ID: string;
export const ATTR_APPLICATION_LANGUAGE: string;
export const ATTR_APPLICATION_NAME: string;
export const ATTR_APPLICATION_PROCESS_BINARY: string;
export const ATTR_APPLICATION_PROCESS_HOST: string;
export const ATTR_APPLICATION_PROCESS_ID: string;
export const ATTR_APPLICATION_PROCESS_USER: string;
export const ATTR_APPLICATION_VERSION: string;
export const ATTR_CANBERRA_CACHE_CONTROL: string;
export const ATTR_CANBERRA_ENABLE: string;
export const ATTR_CANBERRA_FORCE_CHANNEL: string;
export const ATTR_CANBERRA_VOLUME: string;
export const ATTR_CANBERRA_XDG_THEME_NAME: string;
export const ATTR_CANBERRA_XDG_THEME_OUTPUT_PROFILE: string;
export const ATTR_EVENT_DESCRIPTION: string;
export const ATTR_EVENT_ID: string;
export const ATTR_EVENT_MOUSE_BUTTON: string;
export const ATTR_EVENT_MOUSE_HPOS: string;
export const ATTR_EVENT_MOUSE_VPOS: string;
export const ATTR_EVENT_MOUSE_X: string;
export const ATTR_EVENT_MOUSE_Y: string;
export const ATTR_MEDIA_ARTIST: string;
export const ATTR_MEDIA_FILENAME: string;
export const ATTR_MEDIA_ICON: string;
export const ATTR_MEDIA_ICON_NAME: string;
export const ATTR_MEDIA_LANGUAGE: string;
export const ATTR_MEDIA_NAME: string;
export const ATTR_MEDIA_ROLE: string;
export const ATTR_MEDIA_TITLE: string;
export const ATTR_WINDOW_DESKTOP: string;
export const ATTR_WINDOW_HEIGHT: string;
export const ATTR_WINDOW_HPOS: string;
export const ATTR_WINDOW_ICON: string;
export const ATTR_WINDOW_ICON_NAME: string;
export const ATTR_WINDOW_ID: string;
export const ATTR_WINDOW_NAME: string;
export const ATTR_WINDOW_VPOS: string;
export const ATTR_WINDOW_WIDTH: string;
export const ATTR_WINDOW_X: string;
export const ATTR_WINDOW_X11_DISPLAY: string;
export const ATTR_WINDOW_X11_MONITOR: string;
export const ATTR_WINDOW_X11_SCREEN: string;
export const ATTR_WINDOW_X11_XID: string;
export const ATTR_WINDOW_Y: string;
/**
 * 
 */
export function error_quark(): GLib.Quark;
export enum Error {
    NOTSUPPORTED = -1,
    INVALID = -2,
    STATE = -3,
    OOM = -4,
    NODRIVER = -5,
    SYSTEM = -6,
    CORRUPT = -7,
    TOOBIG = -8,
    NOTFOUND = -9,
    DESTROYED = -10,
    CANCELED = -11,
    NOTAVAILABLE = -12,
    ACCESS = -13,
    IO = -14,
    INTERNAL = -15,
    DISABLED = -16,
    FORKED = -17,
    DISCONNECTED = -18,
}
export class Context extends GObject.Object {
    constructor(config?: properties);
    cachev(attrs: GLib.HashTable): boolean;
    open(): boolean;
    play_full_finish(result: Gio.AsyncResult): boolean;
    play_fullv(attrs: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    play_simplev(attrs: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean;
    set_attributesv(attrs: GLib.HashTable): boolean;
    set_driver(driver: string): boolean;
}