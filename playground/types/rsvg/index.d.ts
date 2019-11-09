
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GdkPixbuf from "gdkpixbuf";
import * as cairo from "cairo";
import * as Rsvg from "rsvg";
/**
 * rsvg.d.ts
 */
type properties = { [key: string]: any };
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION: string;
/**
 * 
 */
export function cleanup(): void;
/**
 * The error domain for RSVG
 */
export function error_quark(): GLib.Quark;
/**
 * Do not use this function.  Create an #RsvgHandle and call
 * rsvg_handle_set_dpi() on it instead.
 */
export function set_default_dpi(dpi: number): void;
/**
 * Do not use this function.  Create an #RsvgHandle and call
 * rsvg_handle_set_dpi_x_y() on it instead.
 */
export function set_default_dpi_x_y(dpi_x: number, dpi_y: number): void;
export enum Error {
    FAILED = 0,
}
export enum Unit {
    PERCENT = 0,
    PX = 1,
    EM = 2,
    EX = 3,
    IN = 4,
    CM = 5,
    MM = 6,
    PT = 7,
    PC = 8,
}
export enum HandleFlags {
    FLAGS_NONE = 0,
    FLAG_UNLIMITED = 1,
    FLAG_KEEP_IMAGE_DATA = 2,
}
export class Handle extends GObject.Object {constructor(config?: properties);
base_uri: string;
readonly desc: string;
dpi_x: number;
dpi_y: number;
readonly em: number;
readonly ex: number;
flags: HandleFlags;
readonly height: number;
readonly metadata: string;
readonly title: string;
readonly width: number;static new_from_data(data: number[], data_len: number): Handle;
static new_from_file(filename: string): Handle;
static new_from_gfile_sync(file: Gio.File, flags: HandleFlags, cancellable: Gio.Cancellable | null): Handle;
static new_from_stream_sync(input_stream: Gio.InputStream, base_file: Gio.File | null, flags: HandleFlags, cancellable: Gio.Cancellable | null): Handle;
static new_with_flags(flags: HandleFlags): Handle;
close(): boolean;
get_base_uri(): string;
get_dimensions(): [DimensionData];
get_dimensions_sub(id: string | null): [boolean, DimensionData];
get_geometry_for_element(id: string | null): [boolean, Rectangle | null,Rectangle | null];
get_geometry_for_layer(id: string | null, viewport: Rectangle): [boolean, Rectangle | null,Rectangle | null];
get_intrinsic_dimensions(): [boolean | null,Length | null,boolean | null,Length | null,boolean | null,Rectangle | null];
get_pixbuf(): GdkPixbuf.Pixbuf | null;
get_pixbuf_sub(id: string | null): GdkPixbuf.Pixbuf | null;
get_position_sub(id: string | null): [boolean, PositionData];
has_sub(id: string): boolean;
internal_set_testing(testing: boolean): void;
read_stream_sync(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean;
render_cairo(cr: cairo.Context): boolean;
render_cairo_sub(cr: cairo.Context, id: string | null): boolean;
render_document(cr: cairo.Context, viewport: Rectangle): boolean;
render_element(cr: cairo.Context, id: string | null, element_viewport: Rectangle): boolean;
render_layer(cr: cairo.Context, id: string | null, viewport: Rectangle): boolean;
set_base_gfile(base_file: Gio.File): void;
set_base_uri(base_uri: string): void;
set_dpi(dpi: number): void;
set_dpi_x_y(dpi_x: number, dpi_y: number): void;
write(buf: number[], count: number): boolean;
}
export class DimensionData  {constructor(config?: properties);
width: number;
height: number;
em: number;
ex: number;
}
export class HandleClass  {constructor(config?: properties);
readonly _abi_padding: object[];
}
export class Length  {constructor(config?: properties);
length: number;
unit: Unit;
}
export class PositionData  {constructor(config?: properties);
x: number;
y: number;
}
export class Rectangle  {constructor(config?: properties);
x: number;
y: number;
width: number;
height: number;
}