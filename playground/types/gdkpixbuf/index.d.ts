
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GModule from "gmodule";
import * as GdkPixbuf from "gdkpixbuf";
/**
 * gdkpixbuf.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type PixbufDestroyNotify = (pixels: number[], data: object | null) => void;
export type PixbufSaveFunc = (buf: number[], count: number, data: object | null) => boolean;
export const PIXBUF_FEATURES_H: number;
export const PIXBUF_MAJOR: number;
export const PIXBUF_MICRO: number;
export const PIXBUF_MINOR: number;
export const PIXBUF_VERSION: string;
/**
 * 
 */
export function pixbuf_error_quark(): GLib.Quark;
export enum Colorspace {
    RGB = 0,
}
export enum InterpType {
    NEAREST = 0,
    TILES = 1,
    BILINEAR = 2,
    HYPER = 3,
}
export enum PixbufAlphaMode {
    BILEVEL = 0,
    FULL = 1,
}
export enum PixbufError {
    CORRUPT_IMAGE = 0,
    INSUFFICIENT_MEMORY = 1,
    BAD_OPTION = 2,
    UNKNOWN_TYPE = 3,
    UNSUPPORTED_OPERATION = 4,
    FAILED = 5,
    INCOMPLETE_ANIMATION = 6,
}
export enum PixbufRotation {
    NONE = 0,
    COUNTERCLOCKWISE = 90,
    UPSIDEDOWN = 180,
    CLOCKWISE = 270,
}
export class Pixbuf extends GObject.Object {
    constructor(config?: properties);
    bits_per_sample: number;
    colorspace: Colorspace;
    has_alpha: boolean;
    height: number;
    n_channels: number;
    pixel_bytes: GLib.Bytes;
    pixels: object;
    rowstride: number;
    width: number;static new_from_bytes(data: GLib.Bytes, colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number): Pixbuf;
    static new_from_data(data: number[], colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number, destroy_fn: PixbufDestroyNotify | null, destroy_fn_data: object | null): Pixbuf;
    static new_from_file(filename: string): Pixbuf;
    static new_from_file_at_scale(filename: string, width: number, height: number, preserve_aspect_ratio: boolean): Pixbuf;
    static new_from_file_at_size(filename: string, width: number, height: number): Pixbuf;
    static new_from_inline(data_length: number, data: number[], copy_pixels: boolean): Pixbuf;
    static new_from_resource(resource_path: string): Pixbuf;
    static new_from_resource_at_scale(resource_path: string, width: number, height: number, preserve_aspect_ratio: boolean): Pixbuf;
    static new_from_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): Pixbuf;
    static new_from_stream_at_scale(stream: Gio.InputStream, width: number, height: number, preserve_aspect_ratio: boolean, cancellable: Gio.Cancellable | null): Pixbuf;
    static new_from_stream_finish(async_result: Gio.AsyncResult): Pixbuf;
    static new_from_xpm_data(data: string[]): Pixbuf;
    add_alpha(substitute_color: boolean, r: number, g: number, b: number): Pixbuf;
    apply_embedded_orientation(): Pixbuf;
    composite(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number): void;
    composite_color(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number, check_x: number, check_y: number, check_size: number, color1: number, color2: number): void;
    composite_color_simple(dest_width: number, dest_height: number, interp_type: InterpType, overall_alpha: number, check_size: number, color1: number, color2: number): Pixbuf | null;
    copy(): Pixbuf | null;
    copy_area(src_x: number, src_y: number, width: number, height: number, dest_pixbuf: Pixbuf, dest_x: number, dest_y: number): void;
    copy_options(dest_pixbuf: Pixbuf): boolean;
    fill(pixel: number): void;
    flip(horizontal: boolean): Pixbuf | null;
    get_bits_per_sample(): number;
    get_byte_length(): number;
    get_colorspace(): Colorspace;
    get_has_alpha(): boolean;
    get_height(): number;
    get_n_channels(): number;
    get_option(key: string): string;
    get_options(): GLib.HashTable;
    get_pixels(): number[];
    get_pixels_with_length(): [number[], number];
    get_rowstride(): number;
    get_width(): number;
    new_subpixbuf(src_x: number, src_y: number, width: number, height: number): Pixbuf;
    read_pixel_bytes(): GLib.Bytes;
    read_pixels(): number;
    remove_option(key: string): boolean;
    rotate_simple(angle: PixbufRotation): Pixbuf | null;
    saturate_and_pixelate(dest: Pixbuf, saturation: number, pixelate: boolean): void;
    save_to_bufferv(type: string, option_keys: string[], option_values: string[]): [boolean, number[],number];
    save_to_callbackv(save_func: PixbufSaveFunc, user_data: object | null, type: string, option_keys: string[], option_values: string[]): boolean;
    save_to_streamv(stream: Gio.OutputStream, type: string, option_keys: string[], option_values: string[], cancellable: Gio.Cancellable | null): boolean;
    save_to_streamv_async(stream: Gio.OutputStream, type: string, option_keys: string[], option_values: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    savev(filename: string, type: string, option_keys: string[], option_values: string[]): boolean;
    scale(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType): void;
    scale_simple(dest_width: number, dest_height: number, interp_type: InterpType): Pixbuf | null;
    set_option(key: string, value: string): boolean;
    static calculate_rowstride(colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number): number;
    static get_file_info(filename: string): [PixbufFormat | null, number | null,number | null];
    static get_file_info_async(filename: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    static get_file_info_finish(async_result: Gio.AsyncResult): [PixbufFormat, number,number];
    static get_formats(): string[];
    static init_modules(path: string): boolean;
    static new_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    static new_from_stream_at_scale_async(stream: Gio.InputStream, width: number, height: number, preserve_aspect_ratio: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    static save_to_stream_finish(async_result: Gio.AsyncResult): boolean;
}
export class PixbufAnimation extends GObject.Object {
    constructor(config?: properties);
    static new_from_file(filename: string): PixbufAnimation;
    static new_from_resource(resource_path: string): PixbufAnimation;
    static new_from_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): PixbufAnimation;
    static new_from_stream_finish(async_result: Gio.AsyncResult): PixbufAnimation;
    get_height(): number;
    get_iter(start_time: GLib.TimeVal | null): PixbufAnimationIter;
    get_static_image(): Pixbuf;
    get_width(): number;
    is_static_image(): boolean;
    static new_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class PixbufAnimationIter  {
    constructor(config?: properties);
    advance(current_time: GLib.TimeVal | null): boolean;
    get_delay_time(): number;
    get_pixbuf(): Pixbuf;
    on_currently_loading_frame(): boolean;
}
export class PixbufLoader extends GObject.Object {
    constructor(config?: properties);
    static new_with_mime_type(mime_type: string): PixbufLoader;
    static new_with_type(image_type: string): PixbufLoader;
    close(): boolean;
    get_animation(): PixbufAnimation;
    get_format(): PixbufFormat | null;
    get_pixbuf(): Pixbuf;
    set_size(width: number, height: number): void;
    write(buf: number[], count: number): boolean;
    write_bytes(buffer: GLib.Bytes): boolean;
    vfunc_area_prepared(): void;
    vfunc_area_updated(x: number, y: number, width: number, height: number): void;
    vfunc_closed(): void;
    vfunc_size_prepared(width: number, height: number): void;
}
export class PixbufSimpleAnim extends PixbufAnimation {
    constructor(config?: properties);
    loop: boolean;
    add_frame(pixbuf: Pixbuf): void;
    get_loop(): boolean;
    set_loop(loop: boolean): void;
}
export class PixbufSimpleAnimIter  {
    constructor(config?: properties);
}
export class PixbufFormat  {
    constructor(config?: properties);
    copy(): PixbufFormat;
    free(): void;
    get_description(): string;
    get_extensions(): string[];
    get_license(): string;
    get_mime_types(): string[];
    get_name(): string;
    is_disabled(): boolean;
    is_save_option_supported(option_key: string): boolean;
    is_scalable(): boolean;
    is_writable(): boolean;
    set_disabled(disabled: boolean): void;
}