
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GdkPixbuf from "gdkpixbuf";
import * as GdkPixdata from "gdkpixdata";
/**
 * gdkpixdata.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const PIXBUF_MAGIC_NUMBER: number;
export const PIXDATA_HEADER_LENGTH: number;
/**
 * Converts a #GdkPixdata to a #GdkPixbuf. If @copy_pixels is %TRUE or
 * if the pixel data is run-length-encoded, the pixel data is copied into
 * newly-allocated memory; otherwise it is reused.
 */
export function pixbuf_from_pixdata(pixdata: Pixdata, copy_pixels: boolean): GdkPixbuf.Pixbuf;
export enum PixdataDumpType {
    PIXDATA_STREAM = 0,
    PIXDATA_STRUCT = 1,
    MACROS = 2,
    GTYPES = 0,
    CTYPES = 256,
    STATIC = 512,
    CONST = 1024,
    RLE_DECODER = 65536,
}
export enum PixdataType {
    COLOR_TYPE_RGB = 1,
    COLOR_TYPE_RGBA = 2,
    COLOR_TYPE_MASK = 255,
    SAMPLE_WIDTH_8 = 65536,
    SAMPLE_WIDTH_MASK = 983040,
    ENCODING_RAW = 16777216,
    ENCODING_RLE = 33554432,
    ENCODING_MASK = 251658240,
}
export class Pixdata  {
    constructor(config?: properties);
    magic: number;
    length: number;
    pixdata_type: number;
    rowstride: number;
    width: number;
    height: number;
    pixel_data: number[];
    deserialize(stream_length: number, stream: number[]): boolean;
    serialize(): [number[], number];
    to_csource(name: string, dump_type: PixdataDumpType): GLib.String;
}