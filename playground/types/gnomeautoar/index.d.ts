
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GnomeAutoar from "gnomeautoar";
/**
 * gnomeautoar.d.ts
 */
type properties = { [key: string]: any };
export type FilterFunc = (a: object | null) => number;
export type FormatFunc = (a: object | null) => number;
/**
 * Checks whether a mime type is supported by autoar. This function does 
 * no
 * blocking IO.
 */
export function check_mime_type_supported(mime_type: string): boolean;
/**
 * Gets description of the filter from the internal static data.
 */
export function filter_get_description(filter: Filter): string;
/**
 * Gets description of the filter from libarchive. This function creates
 * and destroys an archive object in order to get the description string.
 */
export function filter_get_description_libarchive(filter: Filter): string;
/**
 * Gets the file name extension of the filter from the internal static da
 * ta.
 */
export function filter_get_extension(filter: Filter): string;
/**
 * Gets the filter code used by libarchive. You can use the return value
 * as the argument for archive_write_add_filter().
 */
export function filter_get_filter_libarchive(filter: Filter): number;
/**
 * Gets the function used to add filter on the object returned by
 * archive_read_new().
 */
export function filter_get_libarchive_read(filter: Filter): FilterFunc;
/**
 * Gets the function used to add filter on the object returned by
 * archive_write_new().
 */
export function filter_get_libarchive_write(filter: Filter): FilterFunc;
/**
 * Gets the MIME type of the filter from the internal static data.
 */
export function filter_get_mime_type(filter: Filter): string;
/**
 * Checks whether an #AutoarFilter is valid.
 */
export function filter_is_valid(filter: Filter): boolean;
/**
 * Gets the maximal allowed values of #AutoarFilter
 */
export function filter_last(): number;
/**
 * Gets the description for an archive @format compressed by
 * @filter using #GContentType and autoar_format_filter_get_mime_type().
 */
export function format_filter_get_description(format: Format, filter: Filter): string;
/**
 * Gets the file name extension for an archive @format compressed by
 * @filter. The first character of the returned string is always '.'
 */
export function format_filter_get_extension(format: Format, filter: Filter): string;
/**
 * Gets the MIME type for an archive @format compressed by
 * @filter. This function always succeed, but it is not guaranteed
 * that the returned MIME type exists and can be recognized by applicatio
 * ns.
 * Some combination of format and filter seldom exists in application,
 * so this function can only generate the string based on some
 * non-standard rules.
 */
export function format_filter_get_mime_type(format: Format, filter: Filter): string;
/**
 * Gets description of the format from the internal static data.
 */
export function format_get_description(format: Format): string;
/**
 * Gets description of the format from libarchive. This function creates
 * and destroys an archive object in order to get the description string.
 */
export function format_get_description_libarchive(format: Format): string;
/**
 * Gets the file name extension of the format from the internal static da
 * ta.
 */
export function format_get_extension(format: Format): string;
/**
 * Gets the format code used by libarchive. You can use the return value
 * as the argument for archive_read_support_format_by_code() and
 * archive_write_set_format(). However, some format cannot be set using
 * these two functions because of problems inside libarchive. Use
 * autoar_format_get_libarchive_read() and
 * autoar_format_get_libarchive_write() to get the function pointer
 * is the more reliable way to set format on the archive object.
 */
export function format_get_format_libarchive(format: Format): number;
/**
 * Gets the function used to set format on the object returned by
 * archive_read_new().
 */
export function format_get_libarchive_read(format: Format): FormatFunc;
/**
 * Gets the function used to set format on the object returned by
 * archive_write_new().
 */
export function format_get_libarchive_write(format: Format): FormatFunc;
/**
 * Gets the MIME type of the format from the internal static data.
 */
export function format_get_mime_type(format: Format): string;
/**
 * Checks whether an #AutoarFormat is valid.
 */
export function format_is_valid(format: Format): boolean;
/**
 * Gets the maximal allowed values of #AutoarFormat
 */
export function format_last(): number;
/**
 * Gets the libarchive Error Quark.
 */
export function libarchive_quark(): GLib.Quark;
/**
 * This function will query the file's mime type and then call
 * autoar_check_mime_type_supported(), so it does blocking IO.
 */
export function query_mime_type_supported(file: Gio.File): boolean;
export enum ConflictAction {
    SKIP = 0,
    OVERWRITE = 1,
    CHANGE_DESTINATION = 2,
}
export enum Filter {
    NONE = 1,
    COMPRESS = 2,
    GZIP = 3,
    BZIP2 = 4,
    XZ = 5,
    LZMA = 6,
    LZIP = 7,
    LZOP = 8,
    GRZIP = 9,
    LRZIP = 10,
}
export enum Format {
    ZIP = 1,
    TAR = 2,
    CPIO = 3,
    Gjs_7ZIP = 4,
    AR_BSD = 5,
    AR_SVR4 = 6,
    CPIO_NEWC = 7,
    GNUTAR = 8,
    ISO9660 = 9,
    PAX = 10,
    USTAR = 11,
    XAR = 12,
}
export class Compressor extends GObject.Object {constructor(config?: properties);
readonly completed_files: number;
readonly completed_size: number;
create_top_level_directory: boolean;
readonly files: number;
filter: unknown;
format: unknown;
notify_interval: number;
output_file: Gio.File;
output_is_dest: boolean;
readonly size: number;
source_files: object;
get_completed_files(): number;
get_completed_size(): number;
get_create_top_level_directory(): boolean;
get_files(): number;
get_filter(): Filter;
get_format(): Format;
get_notify_interval(): number;
get_output_file(): Gio.File;
get_output_is_dest(): boolean;
get_size(): number;
get_source_files(): GLib.List;
set_notify_interval(notify_interval: number): void;
set_output_is_dest(output_is_dest: boolean): void;
start(cancellable: Gio.Cancellable | null): void;
start_async(cancellable: Gio.Cancellable | null): void;
static quark(): GLib.Quark;
}
export class Extractor extends GObject.Object {constructor(config?: properties);
readonly completed_files: number;
readonly completed_size: number;
delete_after_extraction: boolean;
notify_interval: number;
output_file: Gio.File;
output_is_dest: boolean;
source_file: Gio.File;
readonly total_files: number;
readonly total_size: number;
get_completed_files(): number;
get_completed_size(): number;
get_delete_after_extraction(): boolean;
get_notify_interval(): number;
get_output_file(): Gio.File;
get_output_is_dest(): boolean;
get_source_file(): Gio.File;
get_total_files(): number;
get_total_size(): number;
set_delete_after_extraction(delete_if_succeed: boolean): void;
set_notify_interval(notify_interval: number): void;
set_output_is_dest(output_is_dest: boolean): void;
start(cancellable: Gio.Cancellable | null): void;
start_async(cancellable: Gio.Cancellable | null): void;
static quark(): GLib.Quark;
}
export class CompressorClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class ExtractorClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}