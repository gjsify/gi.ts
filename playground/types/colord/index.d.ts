
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Colord from "colord";
/**
 * colord.d.ts
 */
type properties = { [key: string]: any };
export const CLIENT_PROPERTY_DAEMON_VERSION: string;
export const CLIENT_PROPERTY_SYSTEM_MODEL: string;
export const CLIENT_PROPERTY_SYSTEM_VENDOR: string;
export const DEVICE_METADATA_OUTPUT_EDID_MD5: string;
export const DEVICE_METADATA_OUTPUT_PRIORITY: string;
export const DEVICE_METADATA_OUTPUT_PRIORITY_PRIMARY: string;
export const DEVICE_METADATA_OUTPUT_PRIORITY_SECONDARY: string;
export const DEVICE_METADATA_OWNER_CMDLINE: string;
export const DEVICE_METADATA_XRANDR_NAME: string;
export const DEVICE_PROPERTY_COLORSPACE: string;
export const DEVICE_PROPERTY_CREATED: string;
export const DEVICE_PROPERTY_EMBEDDED: string;
export const DEVICE_PROPERTY_ENABLED: string;
export const DEVICE_PROPERTY_FORMAT: string;
export const DEVICE_PROPERTY_ID: string;
export const DEVICE_PROPERTY_KIND: string;
export const DEVICE_PROPERTY_METADATA: string;
export const DEVICE_PROPERTY_MODE: string;
export const DEVICE_PROPERTY_MODEL: string;
export const DEVICE_PROPERTY_MODIFIED: string;
export const DEVICE_PROPERTY_OWNER: string;
export const DEVICE_PROPERTY_PROFILES: string;
export const DEVICE_PROPERTY_PROFILING_INHIBITORS: string;
export const DEVICE_PROPERTY_SCOPE: string;
export const DEVICE_PROPERTY_SEAT: string;
export const DEVICE_PROPERTY_SERIAL: string;
export const DEVICE_PROPERTY_VENDOR: string;
export const PIXEL_FORMAT_ARGB32: number;
export const PIXEL_FORMAT_BGRA32: number;
export const PIXEL_FORMAT_CMYK32: number;
export const PIXEL_FORMAT_RGB24: number;
export const PIXEL_FORMAT_RGBA32: number;
export const PIXEL_FORMAT_UNKNOWN: number;
export const PROFILE_METADATA_ACCURACY_DE76_AVG: string;
export const PROFILE_METADATA_ACCURACY_DE76_MAX: string;
export const PROFILE_METADATA_ACCURACY_DE76_RMS: string;
export const PROFILE_METADATA_CMF_BINARY: string;
export const PROFILE_METADATA_CMF_PRODUCT: string;
export const PROFILE_METADATA_CMF_VERSION: string;
export const PROFILE_METADATA_CONNECTION_TYPE: string;
export const PROFILE_METADATA_CONNECTION_TYPE_DISPLAYPORT: string;
export const PROFILE_METADATA_CONNECTION_TYPE_DVI: string;
export const PROFILE_METADATA_CONNECTION_TYPE_HDMI: string;
export const PROFILE_METADATA_CONNECTION_TYPE_INTERNAL: string;
export const PROFILE_METADATA_CONNECTION_TYPE_VGA: string;
export const PROFILE_METADATA_DATA_SOURCE: string;
export const PROFILE_METADATA_DATA_SOURCE_CALIB: string;
export const PROFILE_METADATA_DATA_SOURCE_EDID: string;
export const PROFILE_METADATA_DATA_SOURCE_STANDARD: string;
export const PROFILE_METADATA_DATA_SOURCE_TEST: string;
export const PROFILE_METADATA_EDID_MD5: string;
export const PROFILE_METADATA_EDID_MNFT: string;
export const PROFILE_METADATA_EDID_MODEL: string;
export const PROFILE_METADATA_EDID_SERIAL: string;
export const PROFILE_METADATA_EDID_VENDOR: string;
export const PROFILE_METADATA_FILE_CHECKSUM: string;
export const PROFILE_METADATA_LICENSE: string;
export const PROFILE_METADATA_MAPPING_DEVICE_ID: string;
export const PROFILE_METADATA_MAPPING_FORMAT: string;
export const PROFILE_METADATA_MAPPING_QUALIFIER: string;
export const PROFILE_METADATA_MEASUREMENT_DEVICE: string;
export const PROFILE_METADATA_QUALITY: string;
export const PROFILE_METADATA_QUALITY_HIGH: string;
export const PROFILE_METADATA_QUALITY_LOW: string;
export const PROFILE_METADATA_QUALITY_MEDIUM: string;
export const PROFILE_METADATA_SCREEN_BRIGHTNESS: string;
export const PROFILE_METADATA_SCREEN_SURFACE: string;
export const PROFILE_METADATA_SCREEN_SURFACE_GLOSSY: string;
export const PROFILE_METADATA_SCREEN_SURFACE_MATTE: string;
export const PROFILE_METADATA_STANDARD_SPACE: string;
export const PROFILE_PROPERTY_COLORSPACE: string;
export const PROFILE_PROPERTY_CREATED: string;
export const PROFILE_PROPERTY_FILENAME: string;
export const PROFILE_PROPERTY_FORMAT: string;
export const PROFILE_PROPERTY_HAS_VCGT: string;
export const PROFILE_PROPERTY_ID: string;
export const PROFILE_PROPERTY_IS_SYSTEM_WIDE: string;
export const PROFILE_PROPERTY_KIND: string;
export const PROFILE_PROPERTY_METADATA: string;
export const PROFILE_PROPERTY_OWNER: string;
export const PROFILE_PROPERTY_QUALIFIER: string;
export const PROFILE_PROPERTY_SCOPE: string;
export const PROFILE_PROPERTY_TITLE: string;
export const PROFILE_PROPERTY_WARNINGS: string;
export const SENSOR_METADATA_IMAGE_ATTACH: string;
export const SENSOR_METADATA_IMAGE_CALIBRATE: string;
export const SENSOR_METADATA_IMAGE_SCREEN: string;
export const SENSOR_PROPERTY_CAPABILITIES: string;
export const SENSOR_PROPERTY_EMBEDDED: string;
export const SENSOR_PROPERTY_ID: string;
export const SENSOR_PROPERTY_KIND: string;
export const SENSOR_PROPERTY_LOCKED: string;
export const SENSOR_PROPERTY_METADATA: string;
export const SENSOR_PROPERTY_MODE: string;
export const SENSOR_PROPERTY_MODEL: string;
export const SENSOR_PROPERTY_NATIVE: string;
export const SENSOR_PROPERTY_OPTIONS: string;
export const SENSOR_PROPERTY_SERIAL: string;
export const SENSOR_PROPERTY_STATE: string;
export const SENSOR_PROPERTY_VENDOR: string;
/**
 * 
 */
export function bitfield_from_enums(value: number, ___: unknown[]): number;
/**
 * Get the blackbody color for a specific temperature. If the temperature
 * range is outside 1000K to 10000K then the result is clipped.
 */
export function color_get_blackbody_rgb(temp: number, result: ColorRGB): boolean;
/**
 * Get the blackbody color for a specific temperature. If the temperature
 * range is outside 1000K to 10000K then the result is clipped.
 */
export function color_get_blackbody_rgb_full(temp: number, result: ColorRGB, flags: ColorBlackbodyFlags): boolean;
/**
 * Convert from one color format to another.
 */
export function color_rgb8_to_rgb(src: ColorRGB8, dest: ColorRGB): void;
/**
 * Interpolate the RGB array to a different size.
 * This uses the Akima interpolation algorithm unless the array would bec
 * ome
 * non-monotonic, in which case it falls back to linear interpolation.
 */
export function color_rgb_array_interpolate(array: ColorRGB[], new_length: number): ColorRGB[];
/**
 * Checks the array for monotonicity.
 */
export function color_rgb_array_is_monotonic(array: ColorRGB[]): boolean;
/**
 * Creates a new RGB array.
 */
export function color_rgb_array_new(): ColorRGB[];
/**
 * 
 */
export function colorspace_from_string(colorspace: string): Colorspace;
/**
 * 
 */
export function colorspace_to_string(colorspace: Colorspace): string;
/**
 * Clears a matrix value, setting all it's values to zero.
 */
export function mat33_clear(src: Mat3x3): void;
/**
 * Copies the matrix.
 * The arguments @src and @dest cannot be the same value.
 */
export function mat33_copy(src: Mat3x3, dest: Mat3x3): void;
/**
 * Gets the determinant of the matrix.
 */
export function mat33_determinant(src: Mat3x3): number;
/**
 * Gets the raw data for the matrix.
 */
export function mat33_get_data(src: Mat3x3): number;
/**
 * Initialises a matrix.
 */
export function mat33_init(dest: Mat3x3, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): void;
/**
 * Multiply (convolve) one matrix with another.
 * The arguments @mat_src1 cannot be the same as @mat_dest, and
 * @mat_src2 cannot be the same as @mat_dest.
 */
export function mat33_matrix_multiply(mat_src1: Mat3x3, mat_src2: Mat3x3, mat_dest: Mat3x3): void;
/**
 * Normalizes a matrix
 * The arguments @src and @dest can be the same value.
 */
export function mat33_normalize(src: Mat3x3, dest: Mat3x3): void;
/**
 * Inverts the matrix.
 * The arguments @src and @dest cannot be the same value.
 */
export function mat33_reciprocal(src: Mat3x3, dest: Mat3x3): boolean;
/**
 * Multiplies a matrix with a scalar.
 * The arguments @vec_src and @vec_dest can be the same value.
 */
export function mat33_scalar_multiply(mat_src: Mat3x3, value: number, mat_dest: Mat3x3): void;
/**
 * Sets the matrix to an identity value.
 */
export function mat33_set_identity(src: Mat3x3): void;
/**
 * Obtains a string representaton of a matrix.
 */
export function mat33_to_string(src: Mat3x3): string;
/**
 * Multiplies a matrix with a vector.
 * The arguments @vec_src and @vec_dest cannot be the same value.
 */
export function mat33_vector_multiply(mat_src: Mat3x3, vec_src: Vec3, vec_dest: Vec3): void;
/**
 * 
 */
export function object_scope_from_string(object_scope: string): ObjectScope;
/**
 * 
 */
export function object_scope_to_string(object_scope: ObjectScope): string;
/**
 * 
 */
export function pixel_format_from_string(pixel_format: string): PixelFormat;
/**
 * 
 */
export function pixel_format_to_string(pixel_format: PixelFormat): string;
/**
 * 
 */
export function rendering_intent_from_string(rendering_intent: string): RenderingIntent;
/**
 * 
 */
export function rendering_intent_to_string(rendering_intent: RenderingIntent): string;
/**
 * Gets the standard colorspace as a enumerated value.
 */
export function standard_space_from_string(standard_space: string): StandardSpace;
/**
 * Gets the standard colorspace as a string.
 */
export function standard_space_to_string(standard_space: StandardSpace): string;
export enum ClientError {
    INTERNAL = 0,
    ALREADY_EXISTS = 1,
    FAILED_TO_AUTHENTICATE = 2,
    NOT_SUPPORTED = 3,
    NOT_FOUND = 4,
    INPUT_INVALID = 5,
    FILE_INVALID = 6,
}
export enum ColorBlackbodyFlags {
    NONE = 0,
    USE_PLANCKIAN = 1,
}
export enum Colorspace {
    UNKNOWN = 0,
    XYZ = 1,
    LAB = 2,
    LUV = 3,
    YCBCR = 4,
    YXY = 5,
    RGB = 6,
    GRAY = 7,
    HSV = 8,
    CMYK = 9,
    CMY = 10,
}
export enum DeviceError {
    INTERNAL = 0,
    PROFILE_DOES_NOT_EXIST = 1,
    PROFILE_ALREADY_ADDED = 2,
    PROFILING = 3,
    NOTHING_MATCHED = 4,
    FAILED_TO_INHIBIT = 5,
    FAILED_TO_UNINHIBIT = 6,
    FAILED_TO_AUTHENTICATE = 7,
    NOT_ENABLED = 8,
}
export enum DeviceKind {
    UNKNOWN = 0,
    DISPLAY = 1,
    SCANNER = 2,
    PRINTER = 3,
    CAMERA = 4,
    WEBCAM = 5,
}
export enum DeviceMode {
    UNKNOWN = 0,
    PHYSICAL = 1,
    VIRTUAL = 2,
}
export enum DeviceRelation {
    UNKNOWN = 0,
    SOFT = 1,
    HARD = 2,
}
export enum IccError {
    FAILED_TO_OPEN = 0,
    FAILED_TO_PARSE = 1,
    INVALID_LOCALE = 2,
    NO_DATA = 3,
    FAILED_TO_SAVE = 4,
    FAILED_TO_CREATE = 5,
    INVALID_COLORSPACE = 6,
    CORRUPTION_DETECTED = 7,
    INTERNAL = 8,
}
export enum IccSaveFlags {
    NONE = 0,
}
export enum It8Error {
    FAILED = 0,
    INVALID_FORMAT = 1,
    UNKNOWN_KIND = 2,
}
export enum It8Kind {
    UNKNOWN = 0,
    TI1 = 1,
    TI3 = 2,
    CCMX = 3,
    CAL = 4,
    CCSS = 5,
    SPECT = 6,
    CMF = 7,
}
export enum ObjectScope {
    UNKNOWN = 0,
    NORMAL = 1,
    TEMP = 2,
    DISK = 3,
}
export enum ProfileError {
    INTERNAL = 0,
    ALREADY_INSTALLED = 1,
    FAILED_TO_WRITE = 2,
    FAILED_TO_PARSE = 3,
    FAILED_TO_READ = 4,
    FAILED_TO_AUTHENTICATE = 5,
    PROPERTY_INVALID = 6,
    FAILED_TO_GET_UID = 7,
}
export enum ProfileKind {
    UNKNOWN = 0,
    INPUT_DEVICE = 1,
    DISPLAY_DEVICE = 2,
    OUTPUT_DEVICE = 3,
    DEVICELINK = 4,
    COLORSPACE_CONVERSION = 5,
    ABSTRACT = 6,
    NAMED_COLOR = 7,
}
export enum ProfileQuality {
    LOW = 0,
    MEDIUM = 1,
    HIGH = 2,
}
export enum ProfileWarning {
    NONE = 0,
    DESCRIPTION_MISSING = 1,
    COPYRIGHT_MISSING = 2,
    VCGT_NON_MONOTONIC = 3,
    SCUM_DOT = 4,
    GRAY_AXIS_INVALID = 5,
    GRAY_AXIS_NON_MONOTONIC = 6,
    PRIMARIES_INVALID = 7,
    PRIMARIES_NON_ADDITIVE = 8,
    PRIMARIES_UNLIKELY = 9,
    WHITEPOINT_INVALID = 10,
    WHITEPOINT_UNLIKELY = 11,
}
export enum RenderingIntent {
    UNKNOWN = 0,
    PERCEPTUAL = 1,
    RELATIVE_COLORIMETRIC = 2,
    SATURATION = 3,
    ABSOLUTE_COLORIMETRIC = 4,
}
export enum SensorCap {
    UNKNOWN = 0,
    LCD = 1,
    CRT = 2,
    PRINTER = 3,
    SPOT = 4,
    PROJECTOR = 5,
    AMBIENT = 6,
    CALIBRATION = 7,
    LED = 8,
    PLASMA = 9,
    LCD_CCFL = 10,
    LCD_RGB_LED = 11,
    LCD_WHITE_LED = 12,
    WIDE_GAMUT_LCD_CCFL = 13,
    WIDE_GAMUT_LCD_RGB_LED = 14,
    SPECTRAL = 15,
    CALIBRATION_DARK = 16,
    CALIBRATION_IRRADIANCE = 17,
}
export enum SensorError {
    NO_SUPPORT = 0,
    NO_DATA = 1,
    INTERNAL = 2,
    ALREADY_LOCKED = 3,
    NOT_LOCKED = 4,
    IN_USE = 5,
    FAILED_TO_AUTHENTICATE = 6,
    REQUIRED_POSITION_CALIBRATE = 7,
    REQUIRED_POSITION_SURFACE = 8,
    REQUIRED_DARK_CALIBRATION = 9,
    REQUIRED_IRRADIANCE_CALIBRATION = 10,
}
export enum SensorKind {
    UNKNOWN = 0,
    DUMMY = 1,
    HUEY = 2,
    COLOR_MUNKI_PHOTO = 3,
    SPYDER = 4,
    DTP20 = 5,
    DTP22 = 6,
    DTP41 = 7,
    DTP51 = 8,
    DTP94 = 9,
    SPECTRO_SCAN = 10,
    I1_PRO = 11,
    COLORIMTRE_HCFR = 12,
    I1_DISPLAY3 = 13,
    COLORHUG = 14,
    SPYDER2 = 15,
    SPYDER3 = 16,
    COLORHUG_PLUS = 17,
    I1_DISPLAY1 = 18,
    I1_DISPLAY2 = 19,
    DTP92 = 20,
    I1_MONITOR = 21,
    SPYDER4 = 22,
    COLOR_MUNKI_SMILE = 23,
    COLORHUG2 = 24,
    SPYDER5 = 25,
    SPARK = 26,
}
export enum SensorState {
    UNKNOWN = 0,
    STARTING = 1,
    IDLE = 2,
    MEASURING = 3,
    BUSY = 4,
}
export enum StandardSpace {
    UNKNOWN = 0,
    SRGB = 1,
    ADOBE_RGB = 2,
    PROPHOTO_RGB = 3,
}
export type PixelFormat = number;
export enum IccLoadFlags {
    NONE = 0,
    NAMED_COLORS = 1,
    TRANSLATIONS = 2,
    METADATA = 4,
    FALLBACK_MD5 = 8,
    PRIMARIES = 16,
    CHARACTERIZATION = 32,
    ALL = 255,
}
export class Client extends GObject.Object {constructor(config?: properties);
readonly connected: string;
readonly daemon_version: string;
readonly system_model: string;
readonly system_vendor: string;
connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
connect(...args: never[]): never;
connect_finish(res: Gio.AsyncResult): boolean;
connect_sync(cancellable: Gio.Cancellable | null): boolean;
create_device(id: string, scope: ObjectScope, properties: GLib.HashTable | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
create_device_finish(res: Gio.AsyncResult): Device;
create_device_sync(id: string, scope: ObjectScope, properties: GLib.HashTable | null, cancellable: Gio.Cancellable | null): Device;
create_profile(id: string, scope: ObjectScope, properties: GLib.HashTable | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
create_profile_finish(res: Gio.AsyncResult): Profile;
create_profile_for_icc(icc: Icc, scope: ObjectScope, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
create_profile_for_icc_finish(res: Gio.AsyncResult): Profile;
create_profile_for_icc_sync(icc: Icc, scope: ObjectScope, cancellable: Gio.Cancellable | null): Profile;
create_profile_sync(id: string, scope: ObjectScope, properties: GLib.HashTable | null, cancellable: Gio.Cancellable | null): Profile;
delete_device(device: Device, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
delete_device_finish(res: Gio.AsyncResult): boolean;
delete_device_sync(device: Device, cancellable: Gio.Cancellable | null): boolean;
delete_profile(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
delete_profile_finish(res: Gio.AsyncResult): boolean;
delete_profile_sync(profile: Profile, cancellable: Gio.Cancellable | null): boolean;
find_device(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
find_device_by_property(key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
find_device_by_property_finish(res: Gio.AsyncResult): Device;
find_device_by_property_sync(key: string, value: string, cancellable: Gio.Cancellable | null): Device;
find_device_finish(res: Gio.AsyncResult): Device;
find_device_sync(id: string, cancellable: Gio.Cancellable | null): Device;
find_profile(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
find_profile_by_filename(filename: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
find_profile_by_filename_finish(res: Gio.AsyncResult): Profile;
find_profile_by_filename_sync(filename: string, cancellable: Gio.Cancellable | null): Profile;
find_profile_by_property(key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
find_profile_by_property_finish(res: Gio.AsyncResult): Profile;
find_profile_by_property_sync(key: string, value: string, cancellable: Gio.Cancellable | null): Profile;
find_profile_finish(res: Gio.AsyncResult): Profile;
find_profile_sync(id: string, cancellable: Gio.Cancellable | null): Profile;
find_sensor(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
find_sensor_finish(res: Gio.AsyncResult): Sensor;
find_sensor_sync(id: string, cancellable: Gio.Cancellable | null): Sensor;
get_connected(): boolean;
get_daemon_version(): string;
get_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_devices_by_kind(kind: DeviceKind, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_devices_by_kind_finish(res: Gio.AsyncResult): Device[];
get_devices_by_kind_sync(kind: DeviceKind, cancellable: Gio.Cancellable | null): Device[];
get_devices_finish(res: Gio.AsyncResult): Device[];
get_devices_sync(cancellable: Gio.Cancellable | null): Device[];
get_has_server(): boolean;
get_profiles(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_profiles_finish(res: Gio.AsyncResult): Profile[];
get_profiles_sync(cancellable: Gio.Cancellable | null): Profile[];
get_sensors(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_sensors_finish(res: Gio.AsyncResult): Sensor[];
get_sensors_sync(cancellable: Gio.Cancellable | null): Sensor[];
get_standard_space(standard_space: StandardSpace, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_standard_space_finish(res: Gio.AsyncResult): Profile;
get_standard_space_sync(standard_space: StandardSpace, cancellable: Gio.Cancellable | null): Profile;
get_system_model(): string;
get_system_vendor(): string;
import_profile(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
import_profile_finish(res: Gio.AsyncResult): Profile;
import_profile_sync(file: Gio.File, cancellable: Gio.Cancellable | null): Profile;
vfunc_changed(): void;
vfunc_device_added(device: Device): void;
vfunc_device_changed(device: Device): void;
vfunc_device_removed(device: Device): void;
vfunc_profile_added(profile: Profile): void;
vfunc_profile_changed(profile: Profile): void;
vfunc_profile_removed(profile: Profile): void;
vfunc_sensor_added(sensor: Sensor): void;
vfunc_sensor_changed(sensor: Sensor): void;
vfunc_sensor_removed(sensor: Sensor): void;
static error_from_string(error_desc: string): ClientError;
static error_quark(): GLib.Quark;
static error_to_string(error_enum: ClientError): string;
}
export class Device extends GObject.Object {constructor(config?: properties);
readonly colorspace: number;
readonly connected: string;
readonly created: number;
readonly embedded: string;
readonly enabled: boolean;
readonly format: string;
readonly id: string;
readonly kind: number;
readonly mode: number;
readonly model: string;
readonly modified: number;
object_path: string;
readonly owner: number;
readonly profiling_inhibitors: string[];
readonly scope: number;
readonly seat: string;
readonly serial: string;
readonly vendor: string;static new_with_object_path(object_path: string): Device;
add_profile(relation: DeviceRelation, profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
add_profile_finish(res: Gio.AsyncResult): boolean;
add_profile_sync(relation: DeviceRelation, profile: Profile, cancellable: Gio.Cancellable | null): boolean;
connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
connect(...args: never[]): never;
connect_finish(res: Gio.AsyncResult): boolean;
connect_sync(cancellable: Gio.Cancellable | null): boolean;
equal(device2: Device): boolean;
get_colorspace(): Colorspace;
get_connected(): boolean;
get_created(): number;
get_default_profile(): Profile;
get_embedded(): boolean;
get_enabled(): boolean;
get_format(): string;
get_id(): string;
get_kind(): DeviceKind;
get_metadata(): GLib.HashTable;
get_metadata_item(key: string): string;
get_mode(): DeviceMode;
get_model(): string;
get_modified(): number;
get_object_path(): string;
get_owner(): number;
get_profile_for_qualifiers(qualifiers: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_profile_for_qualifiers_finish(res: Gio.AsyncResult): Profile;
get_profile_for_qualifiers_sync(qualifiers: string, cancellable: Gio.Cancellable | null): Profile;
get_profile_relation(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_profile_relation_finish(res: Gio.AsyncResult): DeviceRelation;
get_profile_relation_sync(profile: Profile, cancellable: Gio.Cancellable | null): DeviceRelation;
get_profiles(): Profile[];
get_profiling_inhibitors(): string[];
get_scope(): ObjectScope;
get_seat(): string;
get_serial(): string;
get_vendor(): string;
make_profile_default(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
make_profile_default_finish(res: Gio.AsyncResult): boolean;
make_profile_default_sync(profile: Profile, cancellable: Gio.Cancellable | null): boolean;
profiling_inhibit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
profiling_inhibit_finish(res: Gio.AsyncResult): boolean;
profiling_inhibit_sync(cancellable: Gio.Cancellable | null): boolean;
profiling_uninhibit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
profiling_uninhibit_finish(res: Gio.AsyncResult): boolean;
profiling_uninhibit_sync(cancellable: Gio.Cancellable | null): boolean;
remove_profile(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
remove_profile_finish(res: Gio.AsyncResult): boolean;
remove_profile_sync(profile: Profile, cancellable: Gio.Cancellable | null): boolean;
set_colorspace_sync(colorspace: Colorspace, cancellable: Gio.Cancellable | null): boolean;
set_enabled(enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_enabled_finish(res: Gio.AsyncResult): boolean;
set_enabled_sync(enabled: boolean, cancellable: Gio.Cancellable | null): boolean;
set_kind_sync(kind: DeviceKind, cancellable: Gio.Cancellable | null): boolean;
set_mode_sync(mode: DeviceMode, cancellable: Gio.Cancellable | null): boolean;
set_model_sync(value: string, cancellable: Gio.Cancellable | null): boolean;
set_object_path(object_path: string): void;
set_property(key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_property(...args: never[]): never;
set_property_finish(res: Gio.AsyncResult): boolean;
set_property_sync(key: string, value: string, cancellable: Gio.Cancellable | null): boolean;
set_serial_sync(value: string, cancellable: Gio.Cancellable | null): boolean;
set_vendor_sync(value: string, cancellable: Gio.Cancellable | null): boolean;
to_string(): string;
vfunc_changed(): void;
static error_from_string(error_desc: string): DeviceError;
static error_quark(): GLib.Quark;
static error_to_string(error_enum: DeviceError): string;
static kind_from_string(kind: string): DeviceKind;
static kind_to_profile_kind(device_kind: DeviceKind): ProfileKind;
static kind_to_string(kind_enum: DeviceKind): string;
static mode_from_string(device_mode: string): DeviceMode;
static mode_to_string(device_mode: DeviceMode): string;
static relation_from_string(device_relation: string): DeviceRelation;
static relation_to_string(device_relation: DeviceRelation): string;
}
export class Edid extends GObject.Object {constructor(config?: properties);
get_blue(): ColorYxy;
get_checksum(): string;
get_eisa_id(): string;
get_gamma(): number;
get_green(): ColorYxy;
get_height(): number;
get_monitor_name(): string;
get_pnp_id(): string;
get_red(): ColorYxy;
get_serial_number(): string;
get_vendor_name(): string;
get_white(): ColorYxy;
get_width(): number;
parse(edid_data: GLib.Bytes): boolean;
reset(): void;
static error_quark(): GLib.Quark;
}
export class Icc extends GObject.Object {constructor(config?: properties);
readonly blue: ColorXYZ;
readonly can_delete: boolean;
readonly checksum: string;
colorspace: number;
readonly filename: string;
readonly green: ColorXYZ;
kind: number;
readonly red: ColorXYZ;
readonly size: number;
readonly temperature: number;
version: number;
readonly white: ColorXYZ;
add_metadata(key: string, value: string): void;
create_default(): boolean;
create_from_edid(gamma_value: number, red: ColorYxy, green: ColorYxy, blue: ColorYxy, white: ColorYxy): boolean;
create_from_edid_data(edid: Edid): boolean;
get_blue(): ColorXYZ;
get_can_delete(): boolean;
get_characterization_data(): string;
get_checksum(): string;
get_colorspace(): Colorspace;
get_context(): object | null;
get_copyright(locale: string): string;
get_created(): GLib.DateTime;
get_description(locale: string): string;
get_filename(): string;
get_green(): ColorXYZ;
get_handle(): object | null;
get_kind(): ProfileKind;
get_manufacturer(locale: string): string;
get_metadata(): GLib.HashTable;
get_metadata_item(key: string): string;
get_model(locale: string): string;
get_named_colors(): ColorSwatch[];
get_red(): ColorXYZ;
get_response(size: number): ColorRGB[];
get_size(): number;
get_tag_data(tag: string): GLib.Bytes;
get_tags(): string[];
get_temperature(): number;
get_vcgt(size: number): ColorRGB[];
get_version(): number;
get_warnings(): ProfileWarning[];
get_white(): ColorXYZ;
load_data(data: number, data_len: number, flags: IccLoadFlags): boolean;
load_fd(fd: number, flags: IccLoadFlags): boolean;
load_file(file: Gio.File, flags: IccLoadFlags, cancellable: Gio.Cancellable | null): boolean;
load_handle(handle: object | null, flags: IccLoadFlags): boolean;
remove_metadata(key: string): void;
save_data(flags: IccSaveFlags): GLib.Bytes;
save_default(flags: IccSaveFlags, cancellable: Gio.Cancellable | null): boolean;
save_file(file: Gio.File, flags: IccSaveFlags, cancellable: Gio.Cancellable | null): boolean;
set_characterization_data(data: string): void;
set_colorspace(colorspace: Colorspace): void;
set_copyright(locale: string, value: string | null): void;
set_copyright_items(values: GLib.HashTable): void;
set_created(creation_time: GLib.DateTime): void;
set_description(locale: string, value: string | null): void;
set_description_items(values: GLib.HashTable): void;
set_filename(filename: string): void;
set_kind(kind: ProfileKind): void;
set_manufacturer(locale: string, value: string | null): void;
set_manufacturer_items(values: GLib.HashTable): void;
set_model(locale: string, value: string | null): void;
set_model_items(values: GLib.HashTable): void;
set_tag_data(tag: string, data: GLib.Bytes): boolean;
set_vcgt(vcgt: ColorRGB[]): boolean;
set_version(version: number): void;
to_string(): string;
static error_quark(): GLib.Quark;
}
export class It8 extends GObject.Object {constructor(config?: properties);
readonly instrument: string;
kind: number;
readonly normalized: boolean;
readonly originator: string;
readonly reference: string;
readonly spectral: boolean;
readonly title: string;static new_with_kind(kind: It8Kind): It8;
add_data(rgb: ColorRGB, xyz: ColorXYZ): void;
add_option(option: string): void;
add_spectrum(spectrum: Spectrum): void;
get_data_item(idx: number, rgb: ColorRGB, xyz: ColorXYZ): boolean;
get_data_size(): number;
get_enable_created(): boolean;
get_instrument(): string;
get_kind(): It8Kind;
get_matrix(): Mat3x3;
get_normalized(): boolean;
get_originator(): string;
get_reference(): string;
get_spectral(): boolean;
get_spectrum_array(): Spectrum[];
get_spectrum_by_id(id: string): Spectrum;
get_title(): string;
get_xyz_for_rgb(R: number, G: number, B: number, delta: number): ColorXYZ;
has_option(option: string): boolean;
load_from_data(data: string, size: number): boolean;
load_from_file(file: Gio.File): boolean;
save_to_data(data: string, size: number): boolean;
save_to_file(file: Gio.File): boolean;
set_enable_created(enable_created: boolean): void;
set_instrument(instrument: string): void;
set_kind(kind: It8Kind): void;
set_matrix(matrix: Mat3x3): void;
set_normalized(normalized: boolean): void;
set_originator(originator: string): void;
set_reference(reference: string): void;
set_spectral(spectral: boolean): void;
set_spectrum_array(data: Spectrum[]): void;
set_title(title: string): void;
static error_quark(): GLib.Quark;
}
export class Profile extends GObject.Object {constructor(config?: properties);
readonly colorspace: string;
readonly connected: string;
readonly created: number;
readonly filename: string;
readonly format: string;
readonly has_vcgt: string;
readonly id: string;
readonly is_system_wide: string;
readonly kind: string;
object_path: string;
readonly owner: number;
readonly qualifier: string;
readonly scope: number;
readonly title: string;
readonly warnings: string[];static new_with_object_path(object_path: string): Profile;
connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
connect(...args: never[]): never;
connect_finish(res: Gio.AsyncResult): boolean;
connect_sync(cancellable: Gio.Cancellable | null): boolean;
equal(profile2: Profile): boolean;
get_age(): number;
get_colorspace(): Colorspace;
get_connected(): boolean;
get_created(): number;
get_filename(): string;
get_format(): string;
get_has_vcgt(): boolean;
get_id(): string;
get_is_system_wide(): boolean;
get_kind(): ProfileKind;
get_metadata(): GLib.HashTable;
get_metadata_item(key: string): string;
get_object_path(): string;
get_owner(): number;
get_qualifier(): string;
get_scope(): ObjectScope;
get_title(): string;
get_warnings(): string[];
has_access(): boolean;
install_system_wide(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
install_system_wide_finish(res: Gio.AsyncResult): boolean;
install_system_wide_sync(cancellable: Gio.Cancellable | null): boolean;
load_icc(flags: IccLoadFlags, cancellable: Gio.Cancellable | null): Icc;
set_object_path(object_path: string): void;
set_property(key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_property(...args: never[]): never;
set_property_finish(res: Gio.AsyncResult): boolean;
set_property_sync(key: string, value: string, cancellable: Gio.Cancellable | null): boolean;
to_string(): string;
vfunc_changed(): void;
static error_from_string(error_desc: string): ProfileError;
static error_quark(): GLib.Quark;
static error_to_string(error_enum: ProfileError): string;
static kind_from_string(profile_kind: string): ProfileKind;
static kind_to_string(profile_kind: ProfileKind): string;
static quality_from_string(quality: string): ProfileQuality;
static quality_to_string(quality_enum: ProfileQuality): string;
static warning_from_string(type: string): ProfileWarning;
static warning_to_string(kind_enum: ProfileWarning): string;
}
export class Sensor extends GObject.Object {constructor(config?: properties);
readonly connected: string;
readonly embedded: string;
readonly id: string;
readonly kind: string;
readonly locked: string;
readonly mode: string;
readonly model: string;
readonly _native: string;
object_path: string;
readonly serial: string;
readonly state: string;
readonly vendor: string;static new_with_object_path(object_path: string): Sensor;
connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
connect(...args: never[]): never;
connect_finish(res: Gio.AsyncResult): boolean;
connect_sync(cancellable: Gio.Cancellable | null): boolean;
equal(sensor2: Sensor): boolean;
get_caps(): number;
get_connected(): boolean;
get_embedded(): boolean;
get_id(): string;
get_kind(): SensorKind;
get_locked(): boolean;
get_metadata(): GLib.HashTable;
get_metadata_item(key: string): string;
get_mode(): SensorCap;
get_model(): string;
get_native(): boolean;
get_object_path(): string;
get_option(key: string): string;
get_options(): GLib.HashTable;
get_sample(cap: SensorCap, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_sample_finish(res: Gio.AsyncResult): ColorXYZ;
get_sample_sync(cap: SensorCap, cancellable: Gio.Cancellable | null): ColorXYZ;
get_serial(): string;
get_spectrum(cap: SensorCap, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_spectrum_finish(res: Gio.AsyncResult): Spectrum;
get_spectrum_sync(cap: SensorCap, cancellable: Gio.Cancellable | null): Spectrum;
get_state(): SensorState;
get_vendor(): string;
has_cap(cap: SensorCap): boolean;
lock(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
lock_finish(res: Gio.AsyncResult): boolean;
lock_sync(cancellable: Gio.Cancellable | null): boolean;
set_object_path(object_path: string): void;
set_options(values: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_options_finish(res: Gio.AsyncResult): boolean;
set_options_sync(values: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean;
to_string(): string;
unlock(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
unlock_finish(res: Gio.AsyncResult): boolean;
unlock_sync(cancellable: Gio.Cancellable | null): boolean;
vfunc_button_pressed(): void;
static cap_from_string(sensor_cap: string): SensorCap;
static cap_to_string(sensor_cap: SensorCap): string;
static error_from_string(error_desc: string): SensorError;
static error_quark(): GLib.Quark;
static error_to_string(error_enum: SensorError): string;
static kind_from_string(sensor_kind: string): SensorKind;
static kind_to_string(sensor_kind: SensorKind): string;
static state_from_string(sensor_state: string): SensorState;
static state_to_string(sensor_state: SensorState): string;
}
export class ClientClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly device_added: unknown;
readonly device_removed: unknown;
readonly device_changed: unknown;
readonly profile_added: unknown;
readonly profile_removed: unknown;
readonly profile_changed: unknown;
readonly sensor_added: unknown;
readonly sensor_removed: unknown;
readonly sensor_changed: unknown;
readonly changed: unknown;
readonly _cd_client_reserved1: unknown;
readonly _cd_client_reserved2: unknown;
readonly _cd_client_reserved3: unknown;
readonly _cd_client_reserved4: unknown;
readonly _cd_client_reserved5: unknown;
readonly _cd_client_reserved6: unknown;
readonly _cd_client_reserved7: unknown;
readonly _cd_client_reserved8: unknown;
}
export class ColorLab  {constructor(config?: properties);
copy(dest: ColorLab): void;
delta_e76(p2: ColorLab): number;
dup(): ColorLab;
free(): void;
set(L: number, a: number, b: number): void;
}
export class ColorRGB  {constructor(config?: properties);
copy(dest: ColorRGB): void;
dup(): ColorRGB;
free(): void;
from_wavelength(wavelength: number): void;
interpolate(p2: ColorRGB, index: number, result: ColorRGB): void;
set(R: number, G: number, B: number): void;
to_rgb8(dest: ColorRGB8): void;
static array_interpolate(array: ColorRGB[], new_length: number): ColorRGB[];
static array_is_monotonic(array: ColorRGB[]): boolean;
static array_new(): ColorRGB[];
}
export class ColorRGB8  {constructor(config?: properties);
R: number;
G: number;
B: number;
}
export class ColorSwatch  {constructor(config?: properties);
dup(): ColorSwatch;
free(): void;
get_name(): string;
get_value(): ColorLab;
set_name(name: string): void;
set_value(value: ColorLab): void;
}
export class ColorUVW  {constructor(config?: properties);
copy(dest: ColorUVW): void;
dup(): ColorUVW;
free(): void;
get_chroma_difference(p2: ColorUVW): number;
set(U: number, V: number, W: number): void;
set_planckian_locus(temp: number): void;
}
export class ColorXYZ  {constructor(config?: properties);
clear(): void;
copy(dest: ColorXYZ): void;
dup(): ColorXYZ;
free(): void;
normalize(max: number, dest: ColorXYZ): void;
set(X: number, Y: number, Z: number): void;
to_cct(): number;
to_uvw(whitepoint: ColorXYZ, dest: ColorUVW): void;
to_yxy(dest: ColorYxy): void;
}
export class ColorYxy  {constructor(config?: properties);
copy(dest: ColorYxy): void;
dup(): ColorYxy;
free(): void;
set(Y: number, x: number, y: number): void;
to_uvw(dest: ColorUVW): void;
to_xyz(dest: ColorXYZ): void;
}
export class DeviceClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly changed: unknown;
readonly _cd_device_reserved1: unknown;
readonly _cd_device_reserved2: unknown;
readonly _cd_device_reserved3: unknown;
readonly _cd_device_reserved4: unknown;
readonly _cd_device_reserved5: unknown;
readonly _cd_device_reserved6: unknown;
readonly _cd_device_reserved7: unknown;
readonly _cd_device_reserved8: unknown;
}
export class EdidClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _cd_edid_reserved1: unknown;
readonly _cd_edid_reserved2: unknown;
readonly _cd_edid_reserved3: unknown;
readonly _cd_edid_reserved4: unknown;
readonly _cd_edid_reserved5: unknown;
readonly _cd_edid_reserved6: unknown;
readonly _cd_edid_reserved7: unknown;
readonly _cd_edid_reserved8: unknown;
}
export class IccClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _cd_icc_reserved1: unknown;
readonly _cd_icc_reserved2: unknown;
readonly _cd_icc_reserved3: unknown;
readonly _cd_icc_reserved4: unknown;
readonly _cd_icc_reserved5: unknown;
readonly _cd_icc_reserved6: unknown;
readonly _cd_icc_reserved7: unknown;
readonly _cd_icc_reserved8: unknown;
}
export class It8Class  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _cd_it8_reserved1: unknown;
readonly _cd_it8_reserved2: unknown;
readonly _cd_it8_reserved3: unknown;
readonly _cd_it8_reserved4: unknown;
readonly _cd_it8_reserved5: unknown;
readonly _cd_it8_reserved6: unknown;
readonly _cd_it8_reserved7: unknown;
readonly _cd_it8_reserved8: unknown;
}
export class Mat3x3  {constructor(config?: properties);
m00: number;
m01: number;
m02: number;
m10: number;
m11: number;
m12: number;
m20: number;
m21: number;
m22: number;
}
export class ProfileClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly changed: unknown;
readonly _cd_profile_reserved1: unknown;
readonly _cd_profile_reserved2: unknown;
readonly _cd_profile_reserved3: unknown;
readonly _cd_profile_reserved4: unknown;
readonly _cd_profile_reserved5: unknown;
readonly _cd_profile_reserved6: unknown;
readonly _cd_profile_reserved7: unknown;
readonly _cd_profile_reserved8: unknown;
}
export class SensorClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly button_pressed: unknown;
readonly _cd_sensor_reserved1: unknown;
readonly _cd_sensor_reserved2: unknown;
readonly _cd_sensor_reserved3: unknown;
readonly _cd_sensor_reserved4: unknown;
readonly _cd_sensor_reserved5: unknown;
readonly _cd_sensor_reserved6: unknown;
readonly _cd_sensor_reserved7: unknown;
readonly _cd_sensor_reserved8: unknown;
}
export class Spectrum  {constructor(config?: properties);
static planckian_new(temperature: number): Spectrum;
static planckian_new_full(temperature: number, start: number, end: number, resolution: number): Spectrum;
static sized_new(reserved_size: number): Spectrum;
add_value(data: number): void;
dup(): Spectrum;
free(): void;
get_data(): number[];
get_end(): number;
get_id(): string;
get_norm(): number;
get_resolution(): number;
get_size(): number;
get_start(): number;
get_value(idx: number): number;
get_value_for_nm(wavelength: number): number;
get_value_max(): number;
get_value_min(): number;
get_value_raw(idx: number): number;
get_wavelength(idx: number): number;
get_wavelength_cal(c1: number, c2: number, c3: number): void;
limit_max(value: number): void;
limit_min(value: number): void;
multiply(s2: Spectrum, resolution: number): Spectrum;
multiply_scalar(value: number): Spectrum;
normalize(wavelength: number, value: number): void;
normalize_max(value: number): void;
resample(start: number, end: number, resolution: number): Spectrum;
resample_to_size(size: number): Spectrum;
set_data(value: number[]): void;
set_end(end: number): void;
set_id(id: string): void;
set_norm(norm: number): void;
set_start(start: number): void;
set_value(idx: number, data: number): void;
set_wavelength_cal(c1: number, c2: number, c3: number): void;
subtract(s2: Spectrum, resolution: number): Spectrum;
to_string(max_width: number, max_height: number): string;
}
export class Vec3  {constructor(config?: properties);
v0: number;
v1: number;
v2: number;
add(src2: Vec3, dest: Vec3): void;
clear(): void;
copy(dest: Vec3): void;
get_data(): number;
init(v0: number, v1: number, v2: number): void;
scalar_multiply(value: number, dest: Vec3): void;
squared_error(src2: Vec3): number;
subtract(src2: Vec3, dest: Vec3): void;
to_string(): string;
}