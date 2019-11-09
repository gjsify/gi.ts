
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GdkPixbuf from "gdkpixbuf";
import * as AppStreamGlib from "appstreamglib";
/**
 * appstreamglib.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const APP_SUBSUME_FLAG_DEDUPE: number;
export const APP_SUBSUME_FLAG_MERGE: number;
export const IMAGE_ALPHA_FLAG_BOTTOM: number;
export const IMAGE_ALPHA_FLAG_INTERNAL: number;
export const IMAGE_ALPHA_FLAG_LEFT: number;
export const IMAGE_ALPHA_FLAG_NONE: number;
export const IMAGE_ALPHA_FLAG_RIGHT: number;
export const IMAGE_ALPHA_FLAG_TOP: number;
export const IMAGE_LARGE_HEIGHT: number;
export const IMAGE_LARGE_WIDTH: number;
export const IMAGE_NORMAL_HEIGHT: number;
export const IMAGE_NORMAL_WIDTH: number;
export const IMAGE_THUMBNAIL_HEIGHT: number;
export const IMAGE_THUMBNAIL_WIDTH: number;
/**
 * Converts the text representation to an enumerated value.
 */
export function id_kind_from_string(id_kind: string): IdKind;
/**
 * Converts the enumerated value to an text representation.
 */
export function id_kind_to_string(id_kind: IdKind): string;
/**
 * 
 */
export function inf_error_quark(): GLib.Quark;
/**
 * Parses the DriverVer string into a recognisable version and timestamp;
 */
export function inf_get_driver_version(keyfile: GLib.KeyFile, timestamp: number): string;
/**
 * Repairs .inf file data and opens it as a keyfile.
 * Important: The group and keynames are all forced to lower case as INF 
 * files
 * are specified as case insensitive and GKeyFile *is* case sensitive.
 * Any backslashes or spaces in the key name are also converted to '_'.
 */
export function inf_load_data(keyfile: GLib.KeyFile, data: string, flags: InfLoadFlags): boolean;
/**
 * Repairs an .inf file and opens it as a keyfile.
 */
export function inf_load_file(keyfile: GLib.KeyFile, filename: string, flags: InfLoadFlags): boolean;
/**
 * Converts the text representation to an enumerated value.
 */
export function kudo_kind_from_string(kudo_kind: string): KudoKind;
/**
 * Converts the enumerated value to an text representation.
 */
export function kudo_kind_to_string(kudo_kind: KudoKind): string;
/**
 * Converts an XML description into a printable form.
 */
export function markup_convert(markup: string, format: MarkupConvertFormat): string;
/**
 * Converts an XML description into a printable form.
 */
export function markup_convert_full(markup: string, format: MarkupConvertFormat, flags: MarkupConvertFlag): string;
/**
 * Converts an XML description into a printable form.
 */
export function markup_convert_simple(markup: string): string;
/**
 * Imports text and converts to AppStream markup.
 */
export function markup_import(text: string, format: MarkupConvertFormat): string;
/**
 * Splits up a long line into an array of smaller strings, each being no 
 * longer
 * than @line_len. Words are not split.
 */
export function markup_strsplit_words(text: string, line_len: number): string[];
/**
 * Validates some markup.
 */
export function markup_validate(markup: string): boolean;
/**
 * 
 */
export function node_error_quark(): GLib.Quark;
/**
 * Gets a node attribute, e.g. "false"
 */
export function node_get_attribute(node: GLib.Node, key: string): string;
/**
 * Gets a node attribute, e.g. 34
 */
export function node_get_attribute_as_int(node: GLib.Node, key: string): number;
/**
 * Gets a node attribute, e.g. 34
 */
export function node_get_attribute_as_uint(node: GLib.Node, key: string): number;
/**
 * Gets the node data, e.g. "Copyright 2014 Richard Hughes"
 */
export function node_get_comment(node: GLib.Node): string;
/**
 * Gets the node data, e.g. "paragraph text"
 */
export function node_get_data(node: GLib.Node): string;
/**
 * Extracts localized values from the DOM tree
 */
export function node_get_localized(node: GLib.Node, key: string): GLib.HashTable;
/**
 * Gets the 'best' locale version of a specific data value.
 */
export function node_get_localized_best(node: GLib.Node, key: string): string;
/**
 * Denormalize AppData data like this:
 * |[
 * <description>
 *  <p>Hi</p>
 *  <p xml:lang="pl">Czesc</p>
 *  <ul>
 *   <li>First</li>
 *   <li xml:lang="pl">Pierwszy</li>
 *  </ul>
 * </description>
 * ]|
 * into a hash that contains:
 * |[
 * "C"  ->  "<p>Hi</p><ul><li>First</li></ul>"
 * "pl" ->  "<p>Czesc</p><ul><li>Pierwszy</li></ul>"
 * ]|
 */
export function node_get_localized_unwrap(node: GLib.Node): GLib.HashTable;
/**
 * Gets the node name, e.g. "body"
 */
export function node_get_name(node: GLib.Node): string;
/**
 * Gets the node tag enum.
 */
export function node_get_tag(node: GLib.Node): Tag;
/**
 * Inserts a hash table of data into the DOM.
 */
export function node_insert_hash(parent: GLib.Node, name: string, attr_key: string, hash: GLib.HashTable, insert_flags: NodeInsertFlags): void;
/**
 * Inserts a localized key into the DOM.
 */
export function node_insert_localized(parent: GLib.Node, name: string, localized: GLib.HashTable, insert_flags: NodeInsertFlags): void;
/**
 * Converts a node and it's children to XML.
 */
export function node_to_xml(node: GLib.Node, flags: NodeToXmlFlags): GLib.String;
/**
 * Deallocates all notes in the tree.
 */
export function node_unref(node: GLib.Node): void;
/**
 * Converts the text representation to an enumerated value.
 */
export function size_kind_from_string(size_kind: string): SizeKind;
/**
 * Converts the enumerated value to an text representation.
 */
export function size_kind_to_string(size_kind: SizeKind): string;
/**
 * Converts the text representation to an enumerated value.
 */
export function tag_from_string(tag: string): Tag;
/**
 * Converts the text representation to an enumerated value also convertin
 * g
 * legacy key names.
 */
export function tag_from_string_full(tag: string, flags: TagFlags): Tag;
/**
 * Converts the enumerated value to an text representation.
 */
export function tag_to_string(tag: Tag): string;
/**
 * Converts the text representation to an enumerated value.
 */
export function urgency_kind_from_string(urgency_kind: string): UrgencyKind;
/**
 * Converts the enumerated value to an text representation.
 */
export function urgency_kind_to_string(urgency_kind: UrgencyKind): string;
/**
 * Converts the text representation to an enumerated value.
 */
export function url_kind_from_string(url_kind: string): UrlKind;
/**
 * Converts the enumerated value to an text representation.
 */
export function url_kind_to_string(url_kind: UrlKind): string;
/**
 * Fixes a string to be a valid AppStream ID.
 * This function replaces any invalid chars with an underscore.
 */
export function utils_appstream_id_build(str: string): string;
/**
 * Checks to see if a string is a valid AppStream ID. A valid AppStream I
 * D only
 * contains alphanumeric chars, dots and dashes.
 */
export function utils_appstream_id_valid(str: string): boolean;
/**
 * 
 */
export function utils_error_quark(): GLib.Quark;
/**
 * Finds an icon filename from a filesystem root.
 */
export function utils_find_icon_filename(destdir: string, search: string): string;
/**
 * Finds an icon filename from a filesystem root.
 */
export function utils_find_icon_filename_full(destdir: string, search: string, flags: UtilsFindIconFlag): string;
/**
 * Returns a GUID for some data. This uses a hash and so even small
 * differences in the @data will produce radically different return value
 * s.
 * The implementation is taken from RFC4122, Section 4.1.3; specifically
 * using a type-5 SHA-1 hash.
 */
export function utils_guid_from_data(namespace_id: string, data: number, data_len: number): string;
/**
 * Returns a GUID for a given string. This uses a hash and so even small
 * differences in the @str will produce radically different return values
 * .
 * The implementation is taken from RFC4122, Section 4.1.3; specifically
 * using a type-5 SHA-1 hash with a DNS namespace.
 * The same result can be obtained with this simple python program:
 *    #!/usr/bin/python
 *    import uuid
 *    print uuid.uuid5(uuid.NAMESPACE_DNS, 'python.org')
 */
export function utils_guid_from_string(str: string): string;
/**
 * Checks the source string is a valid string GUID descriptor.
 */
export function utils_guid_is_valid(guid: string): boolean;
/**
 * Installs an AppData, MetaInfo, AppStream XML or AppStream Icon metadat
 * a file.
 */
export function utils_install_filename(location: UtilsLocation, filename: string, origin: string, destdir: string): boolean;
/**
 * Searches the known list of blacklisted desktop IDs.
 */
export function utils_is_blacklisted_id(desktop_id: string): boolean;
/**
 * Searches the known list of registered category IDs.
 */
export function utils_is_category_id(category_id: string): boolean;
/**
 * Searches the known list of registered environment IDs.
 */
export function utils_is_environment_id(environment_id: string): boolean;
/**
 * Checks the licence string to check it being a valid licence.
 * NOTE: SPDX licences can't typically contain brackets.
 */
export function utils_is_spdx_license(license: string): boolean;
/**
 * Searches the known list of SPDX license IDs.
 */
export function utils_is_spdx_license_id(license_id: string): boolean;
/**
 * Searches the known list of stock icons.
 */
export function utils_is_stock_icon_name(name: string): boolean;
/**
 * Converts a non-SPDX license into an SPDX format string where possible.
 */
export function utils_license_to_spdx(license: string): string;
/**
 * Checks the search token if it is valid. Valid tokens are at least 3 ch
 * ars in
 * length, not common words like "and", and do not contain markup.
 */
export function utils_search_token_valid(token: string): boolean;
/**
 * Splits up a string into tokens and returns tokens that are suitable fo
 * r
 * searching. This includes taking out common words and casefolding the
 * returned search tokens.
 */
export function utils_search_tokenize(search: string): string[];
/**
 * De-tokenizes the SPDX licenses into a string.
 */
export function utils_spdx_license_detokenize(license_tokens: string): string;
/**
 * Tokenizes the SPDX license string (or any simarly formatted string)
 * into parts. Any licence parts of the string e.g. "LGPL-2.0+" are prefe
 * xed
 * with "@", the conjunctive replaced with "&" and the disjunctive replac
 * ed
 * with "|". Brackets are added as indervidual tokens and other strings a
 * re
 * appended into single tokens where possible.
 */
export function utils_spdx_license_tokenize(license: string): string[];
/**
 * Performs multiple search and replace operations on the given string.
 */
export function utils_string_replace(string: GLib.String, search: string, replace: string): number;
/**
 * Builds a valid unique ID using available data.
 */
export function utils_unique_id_build(scope: AppScope, bundle_kind: BundleKind, origin: string, kind: AppKind, id: string, branch: string): string;
/**
 * Checks two unique IDs for equality allowing globs to match.
 */
export function utils_unique_id_equal(unique_id1: string, unique_id2: string): boolean;
/**
 * Converts a unique-id to a hash value.
 * This function implements the widely used DJB hash on the ID subset of 
 * the
 * unique-id string.
 * It can be passed to g_hash_table_new() as the hash_func parameter,
 * when using non-NULL strings or unique_ids as keys in a GHashTable.
 */
export function utils_unique_id_hash(unique_id: string): number;
/**
 * Checks two unique IDs for equality allowing globs to match, whilst als
 * o
 * allowing clients to whitelist sections that have to match.
 */
export function utils_unique_id_match(unique_id1: string, unique_id2: string, match_flags: UniqueIdMatchFlags): boolean;
/**
 * Checks if a unique ID is valid i.e. has the correct number of
 * sections.
 */
export function utils_unique_id_valid(unique_id: string): boolean;
/**
 * Compares version numbers for sorting.
 */
export function utils_vercmp(version_a: string, version_b: string): number;
/**
 * Compares version numbers for sorting.
 */
export function utils_vercmp_full(version_a: string, version_b: string, flags: VersionCompareFlag): number;
/**
 * Returns a dotted decimal version string from a 16 bit number.
 */
export function utils_version_from_uint16(val: number, flags: VersionParseFlag): string;
/**
 * Returns a dotted decimal version string from a 32 bit number.
 */
export function utils_version_from_uint32(val: number, flags: VersionParseFlag): string;
/**
 * Returns a dotted decimal version string from a version string. The sup
 * ported
 * formats are:
 * - Dotted decimal, e.g. "1.2.3"
 * - Base 16, a hex number *with* a 0x prefix, e.g. "0x10203"
 * - Base 10, a string containing just [0-9], e.g. "66051"
 * - Date in YYYYMMDD format, e.g. 20150915
 * Anything with a '.' or that doesn't match [0-9] or 0x[a-f,0-9] is cons
 * idered
 * a string and returned without modification.
 */
export function utils_version_parse(version: string): string;
export enum AgreementKind {
    UNKNOWN = 0,
    GENERIC = 1,
    EULA = 2,
    PRIVACY = 3,
}
export enum AppError {
    FAILED = 0,
    INVALID_TYPE = 1,
}
export enum AppKind {
    UNKNOWN = 0,
    DESKTOP = 1,
    FONT = 2,
    CODEC = 3,
    INPUT_METHOD = 4,
    WEB_APP = 5,
    SOURCE = 6,
    ADDON = 7,
    FIRMWARE = 8,
    RUNTIME = 9,
    GENERIC = 10,
    OS_UPDATE = 11,
    OS_UPGRADE = 12,
    SHELL_EXTENSION = 13,
    LOCALIZATION = 14,
    CONSOLE = 15,
    DRIVER = 16,
}
export enum AppMergeKind {
    UNKNOWN = 0,
    NONE = 1,
    REPLACE = 2,
    APPEND = 3,
}
export enum AppScope {
    UNKNOWN = 0,
    USER = 1,
    SYSTEM = 2,
}
export enum AppState {
    UNKNOWN = 0,
    INSTALLED = 1,
    AVAILABLE = 2,
    AVAILABLE_LOCAL = 3,
    UPDATABLE = 4,
    UNAVAILABLE = 5,
    QUEUED_FOR_INSTALL = 6,
    INSTALLING = 7,
    REMOVING = 8,
    UPDATABLE_LIVE = 9,
    PURCHASABLE = 10,
    PURCHASING = 11,
}
export enum AppTrustFlags {
    COMPLETE = 0,
    CHECK_DUPLICATES = 1,
    CHECK_VALID_UTF8 = 2,
}
export enum AppValidateFlags {
    NONE = 0,
    RELAX = 1,
    STRICT = 2,
    NO_NETWORK = 4,
    ALL_APPS = 8,
}
export enum BundleKind {
    UNKNOWN = 0,
    LIMBA = 1,
    FLATPAK = 2,
    SNAP = 3,
    PACKAGE = 4,
    CABINET = 5,
    APPIMAGE = 6,
}
export enum ChecksumTarget {
    UNKNOWN = 0,
    CONTAINER = 1,
    CONTENT = 2,
    SIGNATURE = 3,
    DEVICE = 4,
}
export enum ContentRatingValue {
    UNKNOWN = 0,
    NONE = 1,
    MILD = 2,
    MODERATE = 3,
    INTENSE = 4,
}
export enum FormatKind {
    UNKNOWN = 0,
    APPSTREAM = 1,
    DESKTOP = 2,
    APPDATA = 3,
    METAINFO = 4,
}
export enum IconError {
    FAILED = 0,
}
export enum IconKind {
    UNKNOWN = 0,
    STOCK = 1,
    CACHED = 2,
    REMOTE = 3,
    EMBEDDED = 4,
    LOCAL = 5,
}
export enum IconLoadFlags {
    NONE = 0,
    SEARCH_SIZE = 1,
}
export enum IdKind {
    UNKNOWN = 0,
    DESKTOP = 1,
    FONT = 2,
    CODEC = 3,
    INPUT_METHOD = 4,
    WEB_APP = 5,
    SOURCE = 6,
    ADDON = 7,
    FIRMWARE = 8,
    RUNTIME = 9,
    GENERIC = 10,
}
export enum ImageKind {
    UNKNOWN = 0,
    SOURCE = 1,
    THUMBNAIL = 2,
}
export enum ImageLoadFlags {
    NONE = 0,
    SHARPEN = 1,
    SET_BASENAME = 2,
    SET_CHECKSUM = 4,
    ONLY_SUPPORTED = 8,
    ALWAYS_RESIZE = 16,
}
export enum ImageSaveFlags {
    NONE = 0,
    PAD_16_9 = 1,
    SHARPEN = 2,
    BLUR = 4,
}
export enum InfError {
    FAILED = 0,
    INVALID_TYPE = 1,
    NOT_FOUND = 2,
}
export enum KudoKind {
    UNKNOWN = 0,
    SEARCH_PROVIDER = 1,
    USER_DOCS = 2,
    APP_MENU = 3,
    MODERN_TOOLKIT = 4,
    NOTIFICATIONS = 5,
    HIGH_CONTRAST = 6,
    HI_DPI_ICON = 7,
}
export enum LaunchableKind {
    UNKNOWN = 0,
    DESKTOP_ID = 1,
    SERVICE = 2,
    COCKPIT_MANIFEST = 3,
    URL = 4,
}
export enum MarkupConvertFormat {
    SIMPLE = 0,
    MARKDOWN = 1,
    NULL = 2,
    APPSTREAM = 3,
    HTML = 4,
}
export enum NodeError {
    FAILED = 0,
    INVALID_MARKUP = 1,
    NO_SUPPORT = 2,
}
export enum NodeInsertFlags {
    NONE = 0,
    PRE_ESCAPED = 1,
    SWAPPED = 2,
    NO_MARKUP = 4,
    DEDUPE_LANG = 8,
    MARK_TRANSLATABLE = 16,
    BASE64_ENCODED = 32,
}
export enum NodeToXmlFlags {
    NONE = 0,
    ADD_HEADER = 1,
    FORMAT_MULTILINE = 2,
    FORMAT_INDENT = 4,
    INCLUDE_SIBLINGS = 8,
    SORT_CHILDREN = 16,
}
export enum ProblemKind {
    UNKNOWN = 0,
    TAG_DUPLICATED = 1,
    TAG_MISSING = 2,
    TAG_INVALID = 3,
    ATTRIBUTE_MISSING = 4,
    ATTRIBUTE_INVALID = 5,
    MARKUP_INVALID = 6,
    STYLE_INCORRECT = 7,
    TRANSLATIONS_REQUIRED = 8,
    DUPLICATE_DATA = 9,
    VALUE_MISSING = 10,
    URL_NOT_FOUND = 11,
    FILE_INVALID = 12,
    ASPECT_RATIO_INCORRECT = 13,
    RESOLUTION_INCORRECT = 14,
}
export enum ProvideKind {
    UNKNOWN = 0,
    LIBRARY = 1,
    BINARY = 2,
    FONT = 3,
    MODALIAS = 4,
    FIRMWARE_RUNTIME = 5,
    PYTHON2 = 6,
    PYTHON3 = 7,
    DBUS_SESSION = 8,
    DBUS_SYSTEM = 9,
    FIRMWARE_FLASHED = 10,
    ID = 11,
}
export enum ReleaseKind {
    UNKNOWN = 0,
    STABLE = 1,
    DEVELOPMENT = 2,
}
export enum ReleaseState {
    UNKNOWN = 0,
    INSTALLED = 1,
    AVAILABLE = 2,
}
export enum RequireCompare {
    UNKNOWN = 0,
    EQ = 1,
    NE = 2,
    LT = 3,
    GT = 4,
    LE = 5,
    GE = 6,
    GLOB = 7,
    REGEX = 8,
}
export enum RequireKind {
    UNKNOWN = 0,
    ID = 1,
    FIRMWARE = 2,
    HARDWARE = 3,
    MODALIAS = 4,
    KERNEL = 5,
    MEMORY = 6,
}
export enum ScreenshotKind {
    UNKNOWN = 0,
    NORMAL = 1,
    DEFAULT = 2,
}
export enum SizeKind {
    UNKNOWN = 0,
    INSTALLED = 1,
    DOWNLOAD = 2,
}
export enum StoreError {
    FAILED = 0,
}
export enum StoreSearchFlags {
    NONE = 0,
    USE_WILDCARDS = 1,
}
export enum StoreWatchFlags {
    NONE = 0,
    ADDED = 1,
    REMOVED = 2,
}
export enum SuggestKind {
    UNKNOWN = 0,
    UPSTREAM = 1,
    HEURISTIC = 2,
}
export enum Tag {
    UNKNOWN = 0,
    COMPONENTS = 1,
    COMPONENT = 2,
    ID = 3,
    PKGNAME = 4,
    NAME = 5,
    SUMMARY = 6,
    DESCRIPTION = 7,
    URL = 8,
    ICON = 9,
    CATEGORIES = 10,
    CATEGORY = 11,
    KEYWORDS = 12,
    KEYWORD = 13,
    MIMETYPES = 14,
    MIMETYPE = 15,
    PROJECT_GROUP = 16,
    PROJECT_LICENSE = 17,
    SCREENSHOT = 18,
    SCREENSHOTS = 19,
    UPDATE_CONTACT = 20,
    IMAGE = 21,
    COMPULSORY_FOR_DESKTOP = 22,
    PRIORITY = 23,
    CAPTION = 24,
    LANGUAGES = 25,
    LANG = 26,
    METADATA = 27,
    VALUE = 28,
    RELEASES = 29,
    RELEASE = 30,
    ARCHITECTURES = 31,
    ARCH = 32,
    METADATA_LICENSE = 33,
    PROVIDES = 34,
    EXTENDS = 35,
    DEVELOPER_NAME = 36,
    KUDOS = 37,
    KUDO = 38,
    SOURCE_PKGNAME = 39,
    VETOS = 40,
    VETO = 41,
    BUNDLE = 42,
    PERMISSIONS = 43,
    PERMISSION = 44,
    LOCATION = 45,
    CHECKSUM = 46,
    SIZE = 47,
    TRANSLATION = 48,
    CONTENT_RATING = 49,
    CONTENT_ATTRIBUTE = 50,
    VERSION = 51,
    REVIEWS = 52,
    REVIEW = 53,
    REVIEWER_NAME = 54,
    REVIEWER_ID = 55,
    SUGGESTS = 56,
    REQUIRES = 57,
    CUSTOM = 58,
    LAUNCHABLE = 59,
    AGREEMENT = 60,
    AGREEMENT_SECTION = 61,
    P = 62,
    LI = 63,
    UL = 64,
    OL = 65,
    BINARY = 66,
    FONT = 67,
    DBUS = 68,
    MODALIAS = 69,
    LIBRARY = 70,
}
export enum TagFlags {
    NONE = 0,
    USE_FALLBACKS = 1,
    USE_TRANSLATED = 2,
}
export enum TranslationKind {
    UNKNOWN = 0,
    GETTEXT = 1,
    QT = 2,
}
export enum UrgencyKind {
    UNKNOWN = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    CRITICAL = 4,
}
export enum UrlKind {
    UNKNOWN = 0,
    HOMEPAGE = 1,
    BUGTRACKER = 2,
    FAQ = 3,
    DONATION = 4,
    HELP = 5,
    MISSING = 6,
    TRANSLATE = 7,
    DETAILS = 8,
    SOURCE = 9,
    CONTACT = 10,
}
export enum UtilsError {
    FAILED = 0,
    INVALID_TYPE = 1,
}
export enum UtilsLocation {
    SHARED = 0,
    CACHE = 1,
    USER = 2,
}
export type AppSourceKind = FormatKind;
export type ImageAlphaFlags = number;
export type Node = GLib.Node;
export enum AppParseFlags {
    NONE = 0,
    USE_HEURISTICS = 1,
    KEEP_COMMENTS = 2,
    CONVERT_TRANSLATABLE = 4,
    APPEND_DATA = 8,
    ALLOW_VETO = 16,
    USE_FALLBACKS = 32,
    ADD_ALL_METADATA = 64,
    ONLY_NATIVE_LANGS = 128,
}
export enum AppQuirk {
    NONE = 0,
    PROVENANCE = 1,
    COMPULSORY = 2,
    HAS_SOURCE = 4,
    MATCH_ANY_PREFIX = 8,
    NEEDS_REBOOT = 16,
    NOT_REVIEWABLE = 32,
    HAS_SHORTCUT = 64,
    NOT_LAUNCHABLE = 128,
    NEEDS_USER_ACTION = 256,
    IS_PROXY = 512,
    REMOVABLE_HARDWARE = 1024,
    DEVELOPER_VERIFIED = 2048,
}
export enum AppSearchMatch {
    NONE = 0,
    MIMETYPE = 1,
    PKGNAME = 2,
    DESCRIPTION = 4,
    COMMENT = 8,
    NAME = 16,
    KEYWORD = 32,
    ID = 64,
    ORIGIN = 128,
}
export enum AppSubsumeFlags {
    NONE = 0,
    NO_OVERWRITE = 1,
    BOTH_WAYS = 2,
    REPLACE = 4,
    KIND = 8,
    STATE = 16,
    BUNDLES = 32,
    TRANSLATIONS = 64,
    RELEASES = 128,
    KUDOS = 256,
    CATEGORIES = 512,
    PERMISSIONS = 1024,
    EXTENDS = 2048,
    COMPULSORY = 4096,
    SCREENSHOTS = 8192,
    REVIEWS = 16384,
    CONTENT_RATINGS = 32768,
    PROVIDES = 65536,
    ICONS = 131072,
    MIMETYPES = 262144,
    VETOS = 524288,
    LANGUAGES = 1048576,
    NAME = 2097152,
    COMMENT = 4194304,
    DEVELOPER_NAME = 8388608,
    DESCRIPTION = 16777216,
    METADATA = 33554432,
    URL = 67108864,
    KEYWORDS = 134217728,
    FORMATS = 268435456,
    BRANCH = 536870912,
    ORIGIN = 1073741824,
    METADATA_LICENSE = 2147483648,
    PROJECT_LICENSE = 4294967296,
    PROJECT_GROUP = 8589934592,
    SOURCE_KIND = 17179869184,
    SUGGESTS = 34359738368,
    LAUNCHABLES = 68719476736,
    AGREEMENTS = 137438953472,
}
export enum InfLoadFlags {
    NONE = 0,
    STRICT = 1,
    CASE_INSENSITIVE = 2,
}
export enum MarkupConvertFlag {
    NONE = 0,
    IGNORE_ERRORS = 1,
}
export enum NodeFromXmlFlags {
    NONE = 0,
    LITERAL_TEXT = 1,
    KEEP_COMMENTS = 2,
    ONLY_NATIVE_LANGS = 4,
}
export enum ReviewFlags {
    NONE = 0,
    SELF = 1,
    VOTED = 2,
}
export enum StoreAddFlags {
    NONE = 0,
    PREFER_LOCAL = 1,
    USE_UNIQUE_ID = 2,
    USE_MERGE_HEURISTIC = 4,
    ONLY_NATIVE_LANGS = 8,
}
export enum StoreLoadFlags {
    NONE = 0,
    APP_INFO_SYSTEM = 1,
    APP_INFO_USER = 2,
    APP_INSTALL = 4,
    APPDATA = 8,
    DESKTOP = 16,
    ALLOW_VETO = 32,
    FLATPAK_USER = 64,
    FLATPAK_SYSTEM = 128,
    IGNORE_INVALID = 256,
    ONLY_UNCOMPRESSED = 512,
    ONLY_MERGE_APPS = 1024,
}
export enum UniqueIdMatchFlags {
    NONE = 0,
    SCOPE = 1,
    BUNDLE_KIND = 2,
    ORIGIN = 4,
    KIND = 8,
    ID = 16,
    BRANCH = 32,
}
export enum UtilsFindIconFlag {
    NONE = 0,
    HI_DPI = 1,
}
export enum VersionCompareFlag {
    NONE = 0,
    USE_HEURISTICS = 1,
}
export enum VersionParseFlag {
    NONE = 0,
    USE_TRIPLET = 1,
    USE_BCD = 2,
}
export class Agreement extends GObject.Object {
    constructor(config?: properties);
    add_section(agreement_section: AgreementSection): void;
    get_kind(): AgreementKind;
    get_section_default(): AgreementSection;
    get_sections(): AgreementSection[];
    get_version_id(): string;
    set_kind(kind: AgreementKind): void;
    set_version_id(version_id: string): void;
    static kind_from_string(value: string): AgreementKind;
    static kind_to_string(value: AgreementKind): string;
}
export class AgreementSection extends GObject.Object {
    constructor(config?: properties);
    get_description(locale: string | null): string;
    get_kind(): string;
    get_name(locale: string | null): string;
    set_description(locale: string | null, desc: string): void;
    set_kind(kind: string): void;
    set_name(locale: string | null, name: string): void;
}
export class App extends GObject.Object {
    constructor(config?: properties);
    add_addon(addon: App): void;
    add_agreement(agreement: Agreement): void;
    add_arch(arch: string): void;
    add_bundle(bundle: Bundle): void;
    add_category(category: string): void;
    add_compulsory_for_desktop(compulsory_for_desktop: string): void;
    add_content_rating(content_rating: ContentRating): void;
    add_extends(_extends: string): void;
    add_format(format: Format): void;
    add_icon(icon: Icon): void;
    add_keyword(locale: string | null, keyword: string): void;
    add_kudo(kudo: string): void;
    add_kudo_kind(kudo_kind: KudoKind): void;
    add_language(percentage: number, locale: string | null): void;
    add_launchable(launchable: Launchable): void;
    add_metadata(key: string, value: string | null): void;
    add_mimetype(mimetype: string): void;
    add_permission(permission: string): void;
    add_pkgname(pkgname: string): void;
    add_provide(provide: Provide): void;
    add_quirk(quirk: AppQuirk): void;
    add_release(release: Release): void;
    add_require(require: Require): void;
    add_review(review: Review): void;
    add_screenshot(screenshot: Screenshot): void;
    add_suggest(suggest: Suggest): void;
    add_translation(translation: Translation): void;
    add_url(url_kind: UrlKind, url: string): void;
    convert_icons(kind: IconKind): boolean;
    equal(app2: App): boolean;
    get_addons(): App[];
    get_agreement_by_kind(kind: AgreementKind): Agreement;
    get_agreement_default(): Agreement;
    get_architectures(): string[];
    get_branch(): string;
    get_bundle_default(): Bundle;
    get_bundles(): Bundle[];
    get_categories(): string[];
    get_comment(locale: string | null): string;
    get_comments(): GLib.HashTable;
    get_compulsory_for_desktops(): string[];
    get_content_rating(kind: string): ContentRating;
    get_content_ratings(): ContentRating[];
    get_description(locale: string | null): string;
    get_descriptions(): GLib.HashTable;
    get_developer_name(locale: string | null): string;
    get_developer_names(): GLib.HashTable;
    get_extends(): string[];
    get_format_by_filename(filename: string): Format;
    get_format_by_kind(kind: FormatKind): Format;
    get_format_default(): Format;
    get_formats(): string[];
    get_icon_default(): Icon;
    get_icon_for_size(width: number, height: number): Icon;
    get_icon_path(): string;
    get_icons(): Icon[];
    get_id(): string;
    get_id_filename(): string;
    get_id_kind(): IdKind;
    get_id_no_prefix(): string;
    get_keywords(locale: string | null): string[];
    get_kind(): AppKind;
    get_kudos(): string[];
    get_language(locale: string | null): number;
    get_languages(): GLib.List;
    get_launchable_by_kind(kind: LaunchableKind): Launchable;
    get_launchable_default(): Launchable;
    get_launchables(): Launchable[];
    get_merge_kind(): AppMergeKind;
    get_metadata(): GLib.HashTable;
    get_metadata_item(key: string): string;
    get_metadata_license(): string;
    get_mimetypes(): string[];
    get_name(locale: string | null): string;
    get_names(): GLib.HashTable;
    get_origin(): string;
    get_permissions(): string[];
    get_pkgname_default(): string;
    get_pkgnames(): string[];
    get_priority(): number;
    get_project_group(): string;
    get_project_license(): string;
    get_provides(): Provide[];
    get_release(version: string): Release;
    get_release_by_version(version: string): Release;
    get_release_default(): Release;
    get_releases(): Release[];
    get_require_by_value(kind: RequireKind, value: string): Require;
    get_requires(): Require[];
    get_reviews(): Screenshot[];
    get_scope(): AppScope;
    get_screenshot_default(): Screenshot;
    get_screenshots(): Screenshot[];
    get_search_match(): number;
    get_source_file(): string;
    get_source_kind(): FormatKind;
    get_source_pkgname(): string;
    get_state(): AppState;
    get_suggests(): Suggest[];
    get_translations(): Translation[];
    get_trust_flags(): number;
    get_unique_id(): string;
    get_update_contact(): string;
    get_url_item(url_kind: UrlKind): string;
    get_urls(): GLib.HashTable;
    get_vetos(): string[];
    has_category(category: string): boolean;
    has_compulsory_for_desktop(desktop: string): boolean;
    has_kudo(kudo: string): boolean;
    has_kudo_kind(kudo: KudoKind): boolean;
    has_permission(permission: string): boolean;
    has_quirk(quirk: AppQuirk): boolean;
    parse_data(data: GLib.Bytes, flags: number): boolean;
    parse_file(filename: string, flags: number): boolean;
    remove_category(category: string): void;
    remove_format(format: Format): void;
    remove_kudo(kudo: string): void;
    remove_metadata(key: string): void;
    remove_veto(description: string): void;
    search_matches(search: string): number;
    search_matches_all(search: string): number;
    set_branch(branch: string): void;
    set_comment(locale: string | null, comment: string): void;
    set_description(locale: string | null, description: string): void;
    set_developer_name(locale: string | null, developer_name: string): void;
    set_icon_path(icon_path: string): void;
    set_id(id: string): void;
    set_id_kind(id_kind: IdKind): void;
    set_kind(kind: AppKind): void;
    set_merge_kind(merge_kind: AppMergeKind): void;
    set_metadata_license(metadata_license: string): void;
    set_name(locale: string | null, name: string): void;
    set_origin(origin: string): void;
    set_priority(priority: number): void;
    set_project_group(project_group: string): void;
    set_project_license(project_license: string): void;
    set_scope(scope: AppScope): void;
    set_search_match(search_match: number): void;
    set_source_file(source_file: string): void;
    set_source_kind(source_kind: FormatKind): void;
    set_source_pkgname(source_pkgname: string): void;
    set_state(state: AppState): void;
    set_trust_flags(trust_flags: number): void;
    set_update_contact(update_contact: string): void;
    subsume(donor: App): void;
    subsume_full(donor: App, flags: number): void;
    to_file(file: Gio.File, cancellable: Gio.Cancellable | null): boolean;
    to_xml(): GLib.String;
    validate(flags: number): Problem[];
    static error_quark(): GLib.Quark;
    static guess_source_kind(filename: string): FormatKind;
    static kind_from_string(kind: string): AppKind;
    static kind_to_string(kind: AppKind): string;
    static merge_kind_from_string(merge_kind: string): AppMergeKind;
    static merge_kind_to_string(merge_kind: AppMergeKind): string;
    static scope_from_string(scope: string): AppScope;
    static scope_to_string(scope: AppScope): string;
    static source_kind_from_string(source_kind: string): FormatKind;
    static source_kind_to_string(source_kind: FormatKind): string;
    static state_to_string(state: AppState): string;
}
export class Bundle extends GObject.Object {
    constructor(config?: properties);
    get_id(): string;
    get_kind(): BundleKind;
    get_runtime(): string;
    get_sdk(): string;
    set_id(id: string): void;
    set_kind(kind: BundleKind): void;
    set_runtime(runtime: string): void;
    set_sdk(sdk: string): void;
    static kind_from_string(kind: string): BundleKind;
    static kind_to_string(kind: BundleKind): string;
}
export class Checksum extends GObject.Object {
    constructor(config?: properties);
    get_filename(): string;
    get_kind(): GLib.ChecksumType;
    get_target(): ChecksumTarget;
    get_value(): string;
    set_filename(filename: string): void;
    set_kind(kind: GLib.ChecksumType): void;
    set_target(target: ChecksumTarget): void;
    set_value(value: string): void;
    static target_from_string(target: string): ChecksumTarget;
    static target_to_string(target: ChecksumTarget): string;
}
export class ContentRating extends GObject.Object {
    constructor(config?: properties);
    add_attribute(id: string, value: ContentRatingValue): void;
    get_kind(): string;
    get_minimum_age(): number;
    get_rating_ids(): string[];
    get_value(id: string): ContentRatingValue;
    set_kind(kind: string): void;
    static attribute_to_csm_age(id: string, value: ContentRatingValue): number;
    static get_all_rating_ids(): string[];
    static value_from_string(value: string): ContentRatingValue;
    static value_to_string(value: ContentRatingValue): string;
}
export class Format extends GObject.Object {
    constructor(config?: properties);
    equal(format2: Format): boolean;
    get_filename(): string;
    get_kind(): FormatKind;
    set_filename(filename: string): void;
    set_kind(kind: FormatKind): void;
    static guess_kind(filename: string): FormatKind;
    static kind_from_string(kind: string): FormatKind;
    static kind_to_string(kind: FormatKind): string;
}
export class Icon extends GObject.Object {
    constructor(config?: properties);
    convert_to_kind(kind: IconKind): boolean;
    get_filename(): string;
    get_height(): number;
    get_kind(): IconKind;
    get_name(): string;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_prefix(): string;
    get_scale(): number;
    get_url(): string;
    get_width(): number;
    load(flags: IconLoadFlags): boolean;
    set_filename(filename: string): void;
    set_height(height: number): void;
    set_kind(kind: IconKind): void;
    set_name(name: string): void;
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    set_prefix(prefix: string): void;
    set_scale(scale: number): void;
    set_url(url: string): void;
    set_width(width: number): void;
    static error_quark(): GLib.Quark;
    static kind_from_string(icon_kind: string): IconKind;
    static kind_to_string(icon_kind: IconKind): string;
}
export class Image extends GObject.Object {
    constructor(config?: properties);
    equal(image2: Image): boolean;
    get_basename(): string;
    get_height(): number;
    get_kind(): ImageKind;
    get_locale(): string;
    get_md5(): string;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_url(): string;
    get_width(): number;
    load_filename(filename: string): boolean;
    load_filename_full(filename: string, dest_size: number, src_size_min: number, flags: ImageLoadFlags): boolean;
    save_filename(filename: string, width: number, height: number, flags: ImageSaveFlags): boolean;
    save_pixbuf(width: number, height: number, flags: ImageSaveFlags): GdkPixbuf.Pixbuf;
    set_basename(basename: string): void;
    set_height(height: number): void;
    set_kind(kind: ImageKind): void;
    set_locale(locale: string): void;
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    set_url(url: string): void;
    set_width(width: number): void;
    static kind_from_string(kind: string): ImageKind;
    static kind_to_string(kind: ImageKind): string;
}
export class Launchable extends GObject.Object {
    constructor(config?: properties);
    get_kind(): LaunchableKind;
    get_value(): string;
    set_kind(kind: LaunchableKind): void;
    set_value(value: string): void;
    static kind_from_string(kind: string): LaunchableKind;
    static kind_to_string(kind: LaunchableKind): string;
}
export class Problem extends GObject.Object {
    constructor(config?: properties);
    get_kind(): ProblemKind;
    get_line_number(): number;
    get_message(): string;
    set_kind(kind: ProblemKind): void;
    set_line_number(line_number: number): void;
    set_message(message: string): void;
    static kind_to_string(kind: ProblemKind): string;
}
export class Provide extends GObject.Object {
    constructor(config?: properties);
    get_kind(): ProvideKind;
    get_value(): string;
    set_kind(kind: ProvideKind): void;
    set_value(value: string): void;
    static kind_from_string(kind: string): ProvideKind;
    static kind_to_string(kind: ProvideKind): string;
}
export class Release extends GObject.Object {
    constructor(config?: properties);
    add_checksum(checksum: Checksum): void;
    add_location(location: string): void;
    get_blob(filename: string): GLib.Bytes;
    get_checksum_by_fn(fn: string): Checksum;
    get_checksum_by_target(target: ChecksumTarget): Checksum;
    get_checksums(): Checksum[];
    get_description(locale: string | null): string;
    get_install_duration(): number;
    get_kind(): ReleaseKind;
    get_location_default(): string;
    get_locations(): string[];
    get_size(kind: SizeKind): number;
    get_state(): ReleaseState;
    get_timestamp(): number;
    get_urgency(): UrgencyKind;
    get_url(url_kind: UrlKind): string;
    get_version(): string;
    set_blob(filename: string, blob: GLib.Bytes): void;
    set_description(locale: string | null, description: string): void;
    set_install_duration(install_duration: number): void;
    set_kind(kind: ReleaseKind): void;
    set_size(kind: SizeKind, size: number): void;
    set_state(state: ReleaseState): void;
    set_timestamp(timestamp: number): void;
    set_urgency(urgency: UrgencyKind): void;
    set_url(url_kind: UrlKind, url: string): void;
    set_version(version: string): void;
    vercmp(rel2: Release): number;
    static kind_from_string(kind_str: string): ReleaseKind;
    static kind_to_string(kind: ReleaseKind): string;
    static state_from_string(state: string): ReleaseState;
    static state_to_string(state: ReleaseState): string;
}
export class Require extends GObject.Object {
    constructor(config?: properties);
    equal(require2: Require): boolean;
    get_compare(): RequireCompare;
    get_kind(): RequireKind;
    get_value(): string;
    get_version(): string;
    set_compare(compare: RequireCompare): void;
    set_kind(kind: RequireKind): void;
    set_value(value: string): void;
    set_version(version: string): void;
    version_compare(version: string): boolean;
    static compare_from_string(compare: string): RequireCompare;
    static compare_to_string(compare: RequireCompare): string;
    static kind_from_string(kind: string): RequireKind;
    static kind_to_string(kind: RequireKind): string;
}
export class Review extends GObject.Object {
    constructor(config?: properties);
    date: Review;
    description: string;
    flags: number;
    id: string;
    locale: string;
    rating: number;
    reviewer_id: string;
    reviewer_name: string;
    summary: string;
    version: string;
    add_flags(flags: ReviewFlags): void;
    add_metadata(key: string, value: string): void;
    equal(review2: Review): boolean;
    get_date(): GLib.DateTime;
    get_description(): string;
    get_flags(): ReviewFlags;
    get_id(): string;
    get_locale(): string;
    get_metadata_item(key: string): string;
    get_priority(): number;
    get_rating(): number;
    get_reviewer_id(): string;
    get_reviewer_name(): string;
    get_summary(): string;
    get_version(): string;
    set_date(date: GLib.DateTime): void;
    set_description(description: string): void;
    set_flags(flags: ReviewFlags): void;
    set_id(id: string): void;
    set_locale(locale: string): void;
    set_priority(priority: number): void;
    set_rating(rating: number): void;
    set_reviewer_id(reviewer_id: string): void;
    set_reviewer_name(reviewer_name: string): void;
    set_summary(summary: string): void;
    set_version(version: string): void;
}
export class Screenshot extends GObject.Object {
    constructor(config?: properties);
    add_image(image: Image): void;
    equal(screenshot2: Screenshot): boolean;
    get_caption(locale: string | null): string;
    get_image(width: number, height: number): Image;
    get_image_for_locale(locale: string | null, width: number, height: number): Image;
    get_images(): Image[];
    get_images_for_locale(locale: string): Image[];
    get_kind(): ScreenshotKind;
    get_priority(): number;
    get_source(): Image;
    set_caption(locale: string | null, caption: string): void;
    set_kind(kind: ScreenshotKind): void;
    set_priority(priority: number): void;
    static kind_from_string(kind: string): ScreenshotKind;
    static kind_to_string(kind: ScreenshotKind): string;
}
export class Store extends GObject.Object {
    constructor(config?: properties);
    add_app(app: App): void;
    add_apps(apps: App[]): void;
    add_filter(kind: AppKind): void;
    add_metadata_index(key: string): void;
    convert_icons(kind: IconKind): boolean;
    dup_apps(): App[];
    dup_apps_by_id_merge(id: string): App[];
    from_bytes(bytes: GLib.Bytes, cancellable: Gio.Cancellable | null): boolean;
    from_file(file: Gio.File, icon_root: string | null, cancellable: Gio.Cancellable | null): boolean;
    from_xml(data: string, icon_root: string | null): boolean;
    get_add_flags(): number;
    get_api_version(): number;
    get_app_by_id(id: string): App;
    get_app_by_id_ignore_prefix(id: string): App;
    get_app_by_id_with_fallbacks(id: string): App;
    get_app_by_launchable(kind: LaunchableKind, value: string): App;
    get_app_by_pkgname(pkgname: string): App;
    get_app_by_pkgnames(pkgnames: string): App;
    get_app_by_provide(kind: ProvideKind, value: string): App;
    get_app_by_unique_id(unique_id: string, search_flags: number): App;
    get_apps(): App[];
    get_apps_by_id(id: string): App[];
    get_apps_by_id_merge(id: string): App[];
    get_apps_by_metadata(key: string, value: string): App[];
    get_apps_by_provide(kind: ProvideKind, value: string): App[];
    get_builder_id(): string;
    get_destdir(): string;
    get_origin(): string;
    get_search_match(): number;
    get_size(): number;
    get_watch_flags(): number;
    load(flags: number, cancellable: Gio.Cancellable | null): boolean;
    load_async(flags: StoreLoadFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    load_finish(result: Gio.AsyncResult): boolean;
    load_path(path: string, cancellable: Gio.Cancellable | null): boolean;
    load_path_async(path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    load_path_finish(result: Gio.AsyncResult): boolean;
    load_search_cache(): void;
    remove_all(): void;
    remove_app(app: App): void;
    remove_app_by_id(id: string): void;
    remove_apps_with_veto(): void;
    remove_filter(kind: AppKind): void;
    set_add_flags(add_flags: number): void;
    set_api_version(api_version: number): void;
    set_builder_id(builder_id: string): void;
    set_destdir(destdir: string): void;
    set_origin(origin: string): void;
    set_search_match(search_match: number): void;
    set_watch_flags(watch_flags: number): void;
    to_file(file: Gio.File, flags: number, cancellable: Gio.Cancellable | null): boolean;
    to_xml(flags: number): GLib.String;
    validate(flags: number): Problem[];
    vfunc_app_added(app: App): void;
    vfunc_app_changed(app: App): void;
    vfunc_app_removed(app: App): void;
    vfunc_changed(): void;
    static error_quark(): GLib.Quark;
}
export class Suggest extends GObject.Object {
    constructor(config?: properties);
    add_id(id: string): void;
    get_ids(): string[];
    get_kind(): SuggestKind;
    set_kind(kind: SuggestKind): void;
    static kind_from_string(kind: string): SuggestKind;
    static kind_to_string(kind: SuggestKind): string;
}
export class Translation extends GObject.Object {
    constructor(config?: properties);
    get_id(): string;
    get_kind(): TranslationKind;
    set_id(id: string): void;
    set_kind(kind: TranslationKind): void;
    static kind_from_string(kind: string): TranslationKind;
    static kind_to_string(kind: TranslationKind): string;
}