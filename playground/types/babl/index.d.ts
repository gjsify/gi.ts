
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Babl from "babl";
/**
 * babl.d.ts
 */
type properties = { [key: string]: any };
export type FuncLinear = (conversion: Object, src: string, dst: string, n: number, user_data: object | null) => void;
export type FuncPlanar = (conversion: Object, src_bands: number, src: string, src_pitch: number, dst_bands: number, dst: string, dst_pitch: number, n: number, user_data: object | null) => void;
export const ALPHA_FLOOR: number;
export const ALPHA_FLOOR_F: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
/**
 * Returns the babl object representing the color component given by
 * @name such as for example "R", "cyan" or "CIE L".
 */
export function component(name: string): Object;
/**
 * Defines a new color component with babl.
 *     babl_component_new  (const char *name,
 *                          NULL);
 */
export function component_new(first_arg: object | null, ___: unknown[]): Object;
/**
 * Returns the RGB space defined for the destination of conversion.
 */
export function conversion_get_destination_space(conversion: Object): Object;
/**
 * Returns the RGB space defined for the source of conversion.
 */
export function conversion_get_source_space(conversion: Object): Object;
/**
 * Defines a new conversion between either two formats, two models or
 * two types in babl.
 *     babl_conversion_new (<BablFormat *source, BablFormat *destination|
 *                          BablModel  *source, BablModel  *destination|
 *                          BablType   *source, BablType   *destination>,
 *                          <"linear"|"planar">, <BablFuncLinear | BablFu
 * ncPlanar> conv_func,
 *                          NULL);
 */
export function conversion_new(first_arg: object | null, ___: unknown[]): Object;
/**
 * Deinitializes the babl library and frees any resources used when
 * matched with the number of calls to babl_init().
 */
export function exit(): void;
/**
 * Create a faster than normal fish with specified performance (and thus
 * corresponding precision tradeoff), values tolerance can hold: NULL and
 * "default", means do same as babl_fish(), other values understood in
 * increasing order of speed gain are:
 *    "exact" "precise" "fast" "glitch"
 * Fast fishes should be cached, since they are not internally kept track
 * of/made into singletons by babl and many creations of fast fishes will
 * otherwise be a leak.
 */
export function fast_fish(source_format: object | null, destination_format: object | null, performance: string): Object;
/**
 * Create a babl fish capable of converting from source_format to
 *  destination_format, source and destination can be either strings
 *  with the names of the formats or Babl-format objects.
 */
export function fish(source_format: object | null, destination_format: object | null): Object;
/**
 * Returns the babl object representing the color format given by
 * @name such as for example "RGB u8", "CMYK float" or "CIE Lab u16",
 * creates a format using the sRGB space, to also specify the color space
 * and TRCs for a format, see babl_format_with_space.
 */
export function format(encoding: string): Object;
/**
 * Returns 1 if the provided format name is known by babl or 0 if it is
 * not. Can also be used to verify that specific extension formats are
 * available (though this can also be inferred from the version of babl).
 */
export function format_exists(name: string): number;
/**
 * Returns the bytes per pixel for a babl color format.
 */
export function format_get_bytes_per_pixel(format: Object): number;
/**
 * Returns the components and data type, without space suffix.
 */
export function format_get_encoding(babl: Object): string;
/**
 * Return the model used for constructing the format.
 */
export function format_get_model(format: Object): Object;
/**
 * Returns the number of components for the given @format.
 */
export function format_get_n_components(format: Object): number;
/**
 * 
 */
export function format_get_space(format: Object): Object;
/**
 * Returns the type in the given @format for the given
 * @component_index.
 */
export function format_get_type(format: Object, component_index: number): Object;
/**
 * Returns whether the @format has an alpha channel.
 */
export function format_has_alpha(format: Object): number;
/**
 * Returns whether the @format is a format_n type.
 */
export function format_is_format_n(format: Object): number;
/**
 * check whether a format is a palette backed format.
 */
export function format_is_palette(format: Object): number;
/**
 * 
 */
export function format_n(type: Object, components: number): Object;
/**
 * Defines a new pixel format in babl. Provided BablType and|or
 * BablSampling is valid for the following components as well. If no
 * name is provided a (long) descriptive name is used.
 *     babl_format_new     (["name", const char *name,]
 *                          BablModel          *model,
 *                          [BablType           *type,]
 *                          [BablSampling,      *sampling,]
 *                          BablComponent      *component1,
 *                          [[BablType           *type,]
 *                           [BablSampling       *sampling,]
 *                           BablComponent      *componentN,
 *                           ...]
 *                          ["planar",]
 *                          NULL);
 */
export function format_new(first_arg: object | null, ___: unknown[]): Object;
/**
 * Returns the babl object representing the color format given by
 * @name such as for example "RGB u8", "R'G'B'A float", "Y float" with
 * a specific RGB working space used as the space, the resulting format
 * has -space suffixed to it, unless the space requested is sRGB then
 * the unsuffixed version is used. If a format is passed in as space
 * the space of the format is used.
 */
export function format_with_space(encoding: string, space: Object): Object;
/**
 * 
 */
export function get_model_flags(model: Object): ModelFlag;
/**
 * Returns a string describing a Babl object.
 */
export function get_name(babl: Object): string;
/**
 * Get data set with babl_set_user_data
 */
export function get_user_data(babl: Object): object | null;
/**
 * Get the version information on the babl library
 */
export function get_version(): [number,number,number];
/**
 * 
 */
export function icc_get_key(icc_data: string, icc_length: number, key: string, language: string, country: string): string;
/**
 * 
 */
export function icc_make_space(icc_data: string, icc_length: number, intent: IccIntent, error: string): Object;
/**
 * Initializes the babl library.
 */
export function init(): void;
/**
 * introspect a given BablObject
 */
export function introspect(babl: Object): void;
/**
 * Returns the babl object representing the color model given by @name
 * such as for example "RGB", "CMYK" or "CIE Lab".
 */
export function model(name: string): Object;
/**
 * 
 */
export function model_is(babl: Object, model_name: string): number;
/**
 * Defines a new color model in babl. If no name is provided a name is
 * generated by concatenating the name of all the involved components.
 *     babl_model_new      (["name", const char *name,]
 *                          BablComponent *component1,
 *                          [BablComponent *componentN, ...]
 *                          NULL);
 */
export function model_new(first_arg: object | null, ___: unknown[]): Object;
/**
 * The models for formats also have a space in babl, try to avoid code
 * needing to use this.
 */
export function model_with_space(name: string, space: Object): Object;
/**
 * create a new palette based format, name is optional pass in NULL to ge
 * t
 * an anonymous format. If you pass in with_alpha the format also gets
 * an 8bit alpha channel. Returns the BablModel of the color model. If
 * you pass in the same name the previous formats will be provided
 * again.
 */
export function new_palette(name: string, format_u8: Object, format_u8_with_alpha: Object): Object;
/**
 * create a new palette based format, name is optional pass in NULL to ge
 * t
 * an anonymous format. If you pass in with_alpha the format also gets
 * an 8bit alpha channel. Returns the BablModel of the color model. If
 * you pass in the same name the previous formats will be provided
 * again.
 */
export function new_palette_with_space(name: string, space: Object, format_u8: Object, format_u8_with_alpha: Object): Object;
/**
 * reset a palette to initial state, frees up some caches that optimize
 * conversions.
 */
export function palette_reset(babl: Object): void;
/**
 * Assign a palette to a palette format, the data is a single span of pix
 * els
 * representing the colors of the palette.
 */
export function palette_set_palette(babl: Object, format: Object, data: number[], count: number): void;
/**
 * Process n pixels from source to destination using babl_fish,
 *  returns number of pixels converted.
 */
export function process(babl_fish: Object, source: object | null, destination: object | null, n: number): number;
/**
 * 
 */
export function process_rows(babl_fish: Object, source: object | null, source_stride: number, dest: object | null, dest_stride: number, n: number, rows: number): number;
/**
 * Returns the babl object representing the @horizontal and @vertical
 * sampling such as for example 2, 2 for the chroma components in
 * YCbCr.
 */
export function sampling(horizontal: number, vertical: number): Object;
/**
 * associate a data pointer with a format/model, this data can be accesse
 * d and
 * used from the conversion functions, encoding color profiles, palettes 
 * or
 * similar with the data, perhaps this should be made internal API, not
 * accesible at all from
 */
export function set_user_data(babl: Object, data: object | null): void;
/**
 * Returns the babl object representing the specific RGB matrix color
 * working space referred to by name. Babl knows of:
 *    sRGB, Rec2020, Adobish, Apple and ProPhoto
 */
export function space(name: string): Object;
/**
 * Creates a new babl-space/ RGB matrix color space definition with the
 * specified CIE xy(Y) values for white point: wx, wy and primary
 * chromaticities: rx,ry,gx,gy,bx,by and TRCs to be used. After registeri
 * ng a
 * new babl-space it can be used with babl_space() passing its name;
 * Internally this does the math to derive the RGBXYZ matrix as used in a
 * n ICC
 * profile.
 */
export function space_from_chromaticities(name: string | null, wx: number, wy: number, rx: number, ry: number, gx: number, gy: number, bx: number, by: number, trc_red: Object, trc_green: Object | null, trc_blue: Object | null, flags: SpaceFlags): Object;
/**
 * Create a babl space from an in memory ICC profile, the profile does no
 * longer need to be loaded for the space to work, multiple calls with th
 * e same
 * icc profile and same intent will result in the same babl space.
 * On a profile that doesn't contain A2B0 and B2A0 CLUTs perceptual and
 * relative-colorimetric intents are treated the same.
 * If a BablSpace cannot be created from the profile NULL is returned and
 *  a
 * static string is set on the const char *value pointed at with &value
 * containing a message describing why the provided data does not yield a
 *  babl
 * space.
 */
export function space_from_icc(icc_data: string, icc_length: number, intent: IccIntent): [Object, string];
/**
 * Creates a new RGB matrix color space definition using a precomputed D5
 * 0
 * adapted 3x3 matrix and associated CIE XYZ whitepoint, as possibly read
 *  from
 * an ICC profile.
 */
export function space_from_rgbxyz_matrix(name: string | null, wx: number, wy: number, wz: number, rx: number, gx: number, bx: number, ry: number, gy: number, by: number, rz: number, gz: number, bz: number, trc_red: Object, trc_green: Object | null, trc_blue: Object | null): Object;
/**
 * query the chromaticities of white point and primaries as well as trcs
 * used for r g a nd b, all arguments are optional (can be %NULL).
 */
export function space_get(space: Object): [number | null,number | null,number | null,number | null,number | null,number | null,number | null,number | null,Object | null,Object | null,Object | null];
/**
 * Return pointer to ICC profile for space note that this is
 * the ICC profile for R'G'B', though in formats only supporting linear
 * like EXR GEGL chooses to load this lienar data as RGB and use the sRGB
 * TRC.
 */
export function space_get_icc(babl: Object): [string, number | null];
/**
 * Retrieve the relevant RGB luminance constants for a babl space.
 */
export function space_get_rgb_luminance(space: Object): [number | null,number | null,number | null];
/**
 * 
 */
export function space_is_cmyk(space: Object): number;
/**
 * 
 */
export function space_is_gray(space: Object): number;
/**
 * Creates a variant of an existing space with different trc.
 */
export function space_with_trc(space: Object, trc: Object): Object;
/**
 * Look up a TRC by name, "sRGB" and "linear" are recognized
 * strings in a stock babl configuration.
 */
export function trc(name: string): Object;
/**
 * Creates a Babl TRC for a specific gamma value, it will be given
 * a name that is a short string representation of the value.
 */
export function trc_gamma(gamma: number): Object;
/**
 * Returns the babl object representing the data type given by @name
 * such as for example "u8", "u16" or "float".
 */
export function type(name: string): Object;
/**
 * Defines a new data type in babl. A data type that babl can have in
 * its buffers requires conversions to and from "double" to be
 * registered before passing sanity.
 *     babl_type_new       (const char *name,
 *                          "bits",     int bits,
 *                          ["min_val", double min_val,]
 *                          ["max_val", double max_val,]
 *                          NULL);
 */
export function type_new(first_arg: object | null, ___: unknown[]): Object;
export enum IccIntent {
    PERCEPTUAL = 0,
    RELATIVE_COLORIMETRIC = 1,
    SATURATION = 2,
    ABSOLUTE_COLORIMETRIC = 3,
    PERFORMANCE = 32,
}
export enum SpaceFlags {
    NONE = 0,
    EQUALIZE = 1,
}
export enum ModelFlag {
    ALPHA = 2,
    ASSOCIATED = 4,
    INVERTED = 8,
    LINEAR = 1024,
    NONLINEAR = 2048,
    PERCEPTUAL = 4096,
    GRAY = 1048576,
    RGB = 2097152,
    CIE = 8388608,
    CMYK = 16777216,
}
export class Object  {constructor(config?: properties);
}