
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GExiv2 from "gexiv2";
/**
 * gexiv2.d.ts
 */
type properties = { [key: string]: any };
export type LogHandler = (level: LogLevel, msg: string) => void;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
/**
 * 
 */
export function get_version(): number;
/**
 * gexiv2 requires initialization before its methods are used.  In partic
 * ular, this call must be
 * made in a thread-safe fashion.  Best practice is to call from the appl
 * ication's main thread and
 * not to use any Gexiv2 code until it has returned.
 */
export function initialize(): boolean;
/**
 * 
 */
export function log_get_default_handler(): LogHandler;
/**
 * 
 */
export function log_get_handler(): LogHandler;
/**
 * 
 */
export function log_get_level(): LogLevel;
/**
 * This method is not thread-safe.  It's best to set this before beginnin
 * g to use gexiv2.
 */
export function log_set_handler(handler: LogHandler): void;
/**
 * Log messages below this level will not be logged.
 */
export function log_set_level(level: LogLevel): void;
/**
 * When called, gexiv2 will install it's own #GExiv2LogHandler which redi
 * rects all Exiv2 and gexiv2
 * log messages to GLib's logging calls (g_debug(), g_message(), g_warnin
 * g(), and g_critical() for the
 * respective #GExiv2LogLevel value).  #GEXIV2_LOG_LEVEL_MUTE logs are dr
 * opped.
 * One advantage to using this is that GLib's logging control and handler
 * s can be used rather than
 * GExiv2's ad hoc scheme.  It also means an application can use GLib log
 * ging and have all its
 * messages routed through the same calls.
 */
export function log_use_glib_logging(): void;
export enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    MUTE = 4,
}
export enum Orientation {
    UNSPECIFIED = 0,
    NORMAL = 1,
    HFLIP = 2,
    ROT_180 = 3,
    VFLIP = 4,
    ROT_90_HFLIP = 5,
    ROT_90 = 6,
    ROT_90_VFLIP = 7,
    ROT_270 = 8,
}
export enum StructureType {
    NONE = 0,
    ALT = 20,
    BAG = 21,
    SEQ = 22,
    LANG = 23,
}
export enum XmpFormatFlags {
    OMIT_PACKET_WRAPPER = 16,
    READ_ONLY_PACKET = 32,
    USE_COMPACT_FORMAT = 64,
    INCLUDE_THUMBNAIL_PAD = 256,
    EXACT_PACKET_LENGTH = 512,
    WRITE_ALIAS_COMMENTS = 1024,
    OMIT_ALL_FORMATTING = 2048,
}
export class Metadata extends GObject.Object {constructor(config?: properties);
clear(): void;
clear_comment(): void;
clear_exif(): void;
clear_iptc(): void;
clear_tag(tag: string): boolean;
clear_xmp(): void;
delete_gps_info(): void;
erase_exif_thumbnail(): void;
free(): void;
from_app1_segment(data: number[], n_data: number): boolean;
from_stream(stream: Gio.InputStream): boolean;
generate_xmp_packet(xmp_format_flags: XmpFormatFlags, padding: number): string | null;
get_comment(): string | null;
get_exif_tag_rational(tag: string): [boolean, number,number];
get_exif_tags(): string[];
get_exif_thumbnail(): [boolean, number[],number];
get_exposure_time(): [boolean, number,number];
get_fnumber(): number;
get_focal_length(): number;
get_gps_altitude(): [boolean, number];
get_gps_info(): [boolean, number,number,number];
get_gps_latitude(): [boolean, number];
get_gps_longitude(): [boolean, number];
get_iptc_tags(): string[];
get_iso_speed(): number;
get_metadata_pixel_height(): number;
get_metadata_pixel_width(): number;
get_mime_type(): string;
get_orientation(): Orientation;
get_pixel_height(): number;
get_pixel_width(): number;
get_preview_image(props: PreviewProperties): PreviewImage;
get_preview_properties(): PreviewProperties[] | null;
get_supports_exif(): boolean;
get_supports_iptc(): boolean;
get_supports_xmp(): boolean;
get_tag_interpreted_string(tag: string): string | null;
get_tag_long(tag: string): number;
get_tag_multiple(tag: string): string[] | null;
get_tag_raw(tag: string): GLib.Bytes | null;
get_tag_string(tag: string): string | null;
get_xmp_packet(): string | null;
get_xmp_tags(): string[];
has_exif(): boolean;
has_iptc(): boolean;
has_tag(tag: string): boolean;
has_xmp(): boolean;
open_buf(data: number[], n_data: number): boolean;
open_path(path: string): boolean;
open_stream(cb: unknown): boolean;
save_external(path: string): boolean;
save_file(path: string): boolean;
save_stream(cb: unknown): boolean;
set_comment(comment: string): void;
set_exif_tag_rational(tag: string, nom: number, den: number): boolean;
set_exif_thumbnail_from_buffer(buffer: number[], size: number): void;
set_exif_thumbnail_from_file(path: string): boolean;
set_gps_info(longitude: number, latitude: number, altitude: number): boolean;
set_metadata_pixel_height(height: number): void;
set_metadata_pixel_width(width: number): void;
set_orientation(orientation: Orientation): void;
set_tag_long(tag: string, value: number): boolean;
set_tag_multiple(tag: string, values: string[]): boolean;
set_tag_string(tag: string, value: string): boolean;
set_xmp_tag_struct(tag: string, type: StructureType): boolean;
static get_tag_description(tag: string): string | null;
static get_tag_label(tag: string): string | null;
static get_tag_type(tag: string): string | null;
static is_exif_tag(tag: string): boolean;
static is_iptc_tag(tag: string): boolean;
static is_xmp_tag(tag: string): boolean;
static register_xmp_namespace(name: string, prefix: string): boolean;
static unregister_all_xmp_namespaces(): void;
static unregister_xmp_namespace(name: string): boolean;
}
export class PreviewImage  {constructor(config?: properties);
readonly priv: PreviewImagePrivate;
free(): void;
get_data(): [number[], number];
get_extension(): string;
get_height(): number;
get_mime_type(): string;
get_width(): number;
write_file(path: string): number;
}
export class PreviewProperties  {constructor(config?: properties);
readonly priv: PreviewPropertiesPrivate;
get_extension(): string;
get_height(): number;
get_mime_type(): string;
get_size(): number;
get_width(): number;
}
export class MetadataClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class MetadataPrivate  {constructor(config?: properties);
}
export class PreviewImageClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class PreviewImagePrivate  {constructor(config?: properties);
}
export class PreviewPropertiesClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class PreviewPropertiesPrivate  {constructor(config?: properties);
}