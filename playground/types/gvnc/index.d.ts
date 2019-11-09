
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GVnc from "gvnc";
/**
 * gvnc.d.ts
 */
type properties = { [key: string]: any };
export const LEDSTATE_CAPS_LOCK: number;
export const LEDSTATE_NUM_LOCK: number;
export const LEDSTATE_SCROLL_LOCK: number;
export const PADDING: number;
export const PADDING_LARGE: number;
/**
 * Check whether the library is at least as new as the
 * version (@major, @minor, @micro)
 */
export function util_check_version(major: number, minor: number, micro: number): boolean;
/**
 * Determine whether the VNC code will emit verbose
 * debug messages
 */
export function util_get_debug(): boolean;
/**
 * Get the encoded version number of the library release.
 * The major, minor and micro components are encoded in
 * 8-bits each.
 */
export function util_get_version(): number;
/**
 * Get the library version number in a printable
 * string format
 */
export function util_get_version_string(): string;
/**
 * Control whether the VNC code emits verbose debug
 * messages on stderr
 */
export function util_set_debug(enabled: boolean): void;
export enum AudioFormatType {
    U8 = 0,
    S8 = 1,
    U16 = 2,
    S16 = 3,
    U32 = 4,
    S32 = 5,
}
export enum ConnectionAuth {
    INVALID = 0,
    NONE = 1,
    VNC = 2,
    RA2 = 5,
    RA2NE = 6,
    TIGHT = 16,
    ULTRA = 17,
    TLS = 18,
    VENCRYPT = 19,
    SASL = 20,
    ARD = 30,
    MSLOGONII = 113,
    MSLOGON = 4294967290,
}
export enum ConnectionAuthVencrypt {
    PLAIN = 256,
    TLSNONE = 257,
    TLSVNC = 258,
    TLSPLAIN = 259,
    X509NONE = 260,
    X509VNC = 261,
    X509PLAIN = 262,
    X509SASL = 263,
    TLSSASL = 264,
}
export enum ConnectionCredential {
    PASSWORD = 0,
    USERNAME = 1,
    CLIENTNAME = 2,
}
export enum ConnectionEncoding {
    RAW = 0,
    COPY_RECT = 1,
    RRE = 2,
    CORRE = 4,
    HEXTILE = 5,
    TIGHT = 7,
    ZRLE = 16,
    TIGHT_JPEG0 = -32,
    TIGHT_JPEG1 = -31,
    TIGHT_JPEG2 = -30,
    TIGHT_JPEG3 = -29,
    TIGHT_JPEG4 = -28,
    TIGHT_JPEG5 = -27,
    TIGHT_JPEG6 = -26,
    TIGHT_JPEG7 = -25,
    TIGHT_JPEG8 = -24,
    TIGHT_JPEG9 = -23,
    DESKTOP_RESIZE = -223,
    WMVI = 1464686185,
    CURSOR_POS = -232,
    RICH_CURSOR = -239,
    XCURSOR = -240,
    POINTER_CHANGE = -257,
    EXT_KEY_EVENT = -258,
    AUDIO = -259,
    LED_STATE = -261,
}
export class BaseAudio extends GObject.Object {constructor(config?: properties);
vfunc_playback_data(sample: AudioSample): boolean;
vfunc_playback_start(format: AudioFormat): boolean;
vfunc_playback_stop(): boolean;
}
export class BaseFramebuffer extends GObject.Object {constructor(config?: properties);
buffer: object;
color_map: ColorMap;
height: number;
local_format: PixelFormat;
remote_format: PixelFormat;
rowstride: number;
width: number;
}
export class Connection extends GObject.Object {constructor(config?: properties);
framebuffer: Framebuffer;
audio_disable(): boolean;
audio_enable(): boolean;
client_cut_text(data: object | null, length: number): boolean;
framebuffer_update_request(incremental: boolean, x: number, y: number, width: number, height: number): boolean;
get_abs_pointer(): boolean;
get_audio_format(): AudioFormat;
get_cursor(): Cursor;
get_ext_key_event(): boolean;
get_height(): number;
get_ledstate(): number;
get_name(): string;
get_pixel_format(): PixelFormat;
get_shared(): boolean;
get_width(): number;
has_error(): boolean;
is_initialized(): boolean;
is_open(): boolean;
key_event(down_flag: boolean, key: number, scancode: number): boolean;
open_addr(addr: Gio.SocketAddress, hostname: string | null): boolean;
open_fd(fd: number): boolean;
open_fd_with_hostname(fd: number, hostname: string | null): boolean;
open_host(host: string, port: string): boolean;
pointer_event(button_mask: number, x: number, y: number): boolean;
set_audio(audio: Audio): boolean;
set_audio_format(fmt: AudioFormat): boolean;
set_auth_subtype(type: number): boolean;
set_auth_type(type: number): boolean;
set_credential(type: number, data: string): boolean;
set_encodings(n_encoding: number, encoding: number[]): boolean;
set_framebuffer(fb: Framebuffer): boolean;
set_pixel_format(fmt: PixelFormat): boolean;
set_shared(sharedFlag: boolean): boolean;
shutdown(): void;
vfunc_vnc_auth_choose_subtype(type: number, subtypes: GObject.ValueArray): void;
vfunc_vnc_auth_choose_type(types: GObject.ValueArray): void;
vfunc_vnc_auth_credential(creds: GObject.ValueArray): void;
vfunc_vnc_auth_failure(reason: string): void;
vfunc_vnc_auth_unsupported(authType: number): void;
vfunc_vnc_bell(): void;
vfunc_vnc_connected(): void;
vfunc_vnc_cursor_changed(cursor: Cursor): void;
vfunc_vnc_desktop_resize(width: number, height: number): void;
vfunc_vnc_disconnected(): void;
vfunc_vnc_error(message: string): void;
vfunc_vnc_framebuffer_update(x: number, y: number, width: number, height: number): void;
vfunc_vnc_initialized(): void;
vfunc_vnc_led_state(): void;
vfunc_vnc_pixel_format_changed(format: PixelFormat): void;
vfunc_vnc_pointer_mode_changed(absPointer: boolean): void;
vfunc_vnc_server_cut_text(text: GLib.String): void;
}
export class Cursor extends GObject.Object {constructor(config?: properties);
data: object;
height: number;
hotx: number;
hoty: number;
width: number;
get_data(): number[];
get_data(...args: never[]): never;
get_height(): number;
get_hotx(): number;
get_hoty(): number;
get_width(): number;
}
export class AudioFormat  {constructor(config?: properties);
copy(): AudioFormat;
free(): void;
}
export class AudioInterface  {constructor(config?: properties);
readonly playback_start: unknown;
readonly playback_stop: unknown;
readonly playback_data: unknown;
}
export class AudioSample  {constructor(config?: properties);
copy(): AudioSample;
free(): void;
}
export class BaseAudioClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly playback_start: unknown;
readonly playback_stop: unknown;
readonly playback_data: unknown;
}
export class BaseAudioPrivate  {constructor(config?: properties);
}
export class BaseFramebufferClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _vnc_reserved: object[];
}
export class BaseFramebufferPrivate  {constructor(config?: properties);
}
export class ColorMap  {constructor(config?: properties);
copy(): ColorMap;
free(): void;
lookup(idx: number, red: number, green: number, blue: number): boolean;
set(idx: number, red: number, green: number, blue: number): boolean;
}
export class ColorMapEntry  {constructor(config?: properties);
red: number;
green: number;
blue: number;
}
export class ConnectionClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly vnc_cursor_changed: unknown;
readonly vnc_pointer_mode_changed: unknown;
readonly vnc_bell: unknown;
readonly vnc_server_cut_text: unknown;
readonly vnc_framebuffer_update: unknown;
readonly vnc_desktop_resize: unknown;
readonly vnc_pixel_format_changed: unknown;
readonly vnc_auth_failure: unknown;
readonly vnc_auth_unsupported: unknown;
readonly vnc_auth_credential: unknown;
readonly vnc_auth_choose_type: unknown;
readonly vnc_auth_choose_subtype: unknown;
readonly vnc_connected: unknown;
readonly vnc_initialized: unknown;
readonly vnc_disconnected: unknown;
readonly vnc_led_state: unknown;
readonly vnc_error: unknown;
readonly _vnc_reserved: object[];
}
export class ConnectionPrivate  {constructor(config?: properties);
}
export class CursorClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _vnc_reserved: object[];
}
export class CursorPrivate  {constructor(config?: properties);
}
export class FramebufferInterface  {constructor(config?: properties);
readonly get_width: unknown;
readonly get_height: unknown;
readonly get_rowstride: unknown;
readonly get_buffer: unknown;
readonly get_local_format: unknown;
readonly get_remote_format: unknown;
readonly perfect_format_match: unknown;
readonly set_pixel_at: unknown;
readonly fill: unknown;
readonly copyrect: unknown;
readonly blt: unknown;
readonly rgb24_blt: unknown;
readonly set_color_map: unknown;
}
export class PixelFormat  {constructor(config?: properties);
copy(): PixelFormat;
free(): void;
}
export interface Audio  {
playback_data(sample: AudioSample): void;
playback_start(format: AudioFormat): void;
playback_stop(): void;
}
export interface Framebuffer  {
blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void;
copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void;
fill(src: number[], x: number, y: number, width: number, height: number): void;
get_buffer(): number[];
get_height(): number;
get_local_format(): PixelFormat;
get_remote_format(): PixelFormat;
get_rowstride(): number;
get_width(): number;
perfect_format_match(): boolean;
rgb24_blt(src: number[], rowstride: number, x: number, y: number, width: number, height: number): void;
set_color_map(map: ColorMap): void;
set_pixel_at(src: number[], x: number, y: number): void;
}