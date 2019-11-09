
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GVnc from "gvnc";
import * as Gtk from "gtk";
import * as cairo from "cairo";
import * as GtkVnc from "gtkvnc";
import * as GdkPixbuf from "gdkpixbuf";
/**
 * gtkvnc.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export enum DisplayCredential {
    PASSWORD = 0,
    USERNAME = 1,
    CLIENTNAME = 2,
}
export enum DisplayDepthColor {
    DEFAULT = 0,
    FULL = 1,
    MEDIUM = 2,
    LOW = 3,
    ULTRA_LOW = 4,
}
export enum DisplayKeyEvent {
    PRESS = 1,
    RELEASE = 2,
    CLICK = 3,
}
export class CairoFramebuffer extends GVnc.BaseFramebuffer {
    constructor(config?: properties);
    surface: object;
    get_surface(): cairo.Surface;
}
export class Display extends Gtk.DrawingArea {
    constructor(config?: properties);
    readonly connection: GVnc.Connection;
    depth: DisplayDepthColor;
    force_size: boolean;
    grab_keyboard: boolean;
    grab_keys: GrabSequence;
    grab_pointer: boolean;
    readonly height: number;
    local_pointer: boolean;
    lossy_encoding: boolean;
    readonly name: string;
    read_only: boolean;
    scaling: boolean;
    shared_flag: boolean;
    smoothing: boolean;
    readonly width: number;
    client_cut_text(text: string): void;
    close(): void;
    force_grab(enable: boolean): void;
    get_connection(): GVnc.Connection;
    get_depth(): DisplayDepthColor;
    get_force_size(): boolean;
    get_grab_keys(): GrabSequence;
    get_height(): number;
    get_keyboard_grab(): boolean;
    get_lossy_encoding(): boolean;
    get_name(): string;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_pointer_grab(): boolean;
    get_pointer_local(): boolean;
    get_read_only(): boolean;
    get_scaling(): boolean;
    get_shared_flag(): boolean;
    get_smoothing(): boolean;
    get_width(): number;
    is_open(): boolean;
    is_pointer_absolute(): boolean;
    open_addr(addr: Gio.SocketAddress, hostname: string | null): boolean;
    open_fd(fd: number): boolean;
    open_fd_with_hostname(fd: number, hostname: string | null): boolean;
    open_host(host: string, port: string): boolean;
    request_update(): boolean;
    send_keys(keyvals: number[], nkeyvals: number): void;
    send_keys_ex(keyvals: number[], nkeyvals: number, kind: DisplayKeyEvent): void;
    send_pointer(x: number, y: number, button_mask: number): void;
    set_credential(type: number, data: string): boolean;
    set_depth(depth: DisplayDepthColor): void;
    set_force_size(enable: boolean): void;
    set_grab_keys(seq: GrabSequence): void;
    set_keyboard_grab(enable: boolean): void;
    set_lossy_encoding(enable: boolean): void;
    set_pointer_grab(enable: boolean): void;
    set_pointer_local(enable: boolean): void;
    set_read_only(enable: boolean): void;
    set_scaling(enable: boolean): boolean;
    set_shared_flag(shared: boolean): void;
    set_smoothing(enable: boolean): void;
    vfunc_vnc_auth_credential(credList: GObject.ValueArray): void;
    vfunc_vnc_connected(): void;
    vfunc_vnc_disconnected(): void;
    vfunc_vnc_initialized(): void;
    static get_option_entries(): GLib.OptionEntry[];
    static get_option_group(): GLib.OptionGroup;
}
export class CairoFramebufferPrivate  {
    constructor(config?: properties);
}
export class DisplayPrivate  {
    constructor(config?: properties);
}
export class GrabSequence  {
    constructor(config?: properties);
    static new_from_string(str: string): GrabSequence;
    as_string(): string;
    copy(): GrabSequence;
    free(): void;
    get_nth(n: number): number;
}