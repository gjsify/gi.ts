
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as PackageKitGlib from "packagekitglib";
/**
 * packagekitglib.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type PackageSackFilterFunc = (_package: Package, user_data: object | null) => boolean;
export type ProgressCallback = (progress: Progress, type: ProgressType, user_data: object | null) => void;
export const DBUS_INTERFACE: string;
export const DBUS_INTERFACE_OFFLINE: string;
export const DBUS_INTERFACE_TRANSACTION: string;
export const DBUS_PATH: string;
export const DBUS_SERVICE: string;
export const DESKTOP_DEFAULT_APPLICATION_DIR: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const OFFLINE_DESTDIR: string;
export const OFFLINE_RESULTS_GROUP: string;
export const PACKAGE_IDS_DELIM: string;
export const PACKAGE_ID_ARCH: number;
export const PACKAGE_ID_DATA: number;
export const PACKAGE_ID_NAME: number;
export const PACKAGE_ID_VERSION: number;
export const SYSTEM_PACKAGE_CACHE_FILENAME: string;
export const SYSTEM_PACKAGE_LIST_FILENAME: string;
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function authorize_type_enum_from_string(authorize_type: string): AuthorizeEnum;
/**
 * Converts a enumerated type to its text representation
 */
export function authorize_type_enum_to_string(authorize_type: AuthorizeEnum): string;
/**
 * An error quark for #PkClientError.
 */
export function client_error_quark(): GLib.Quark;
/**
 * We are a GObject that sets errors
 */
export function control_error_quark(): GLib.Quark;
/**
 * Add a log domain to the debug output.
 */
export function debug_add_log_domain(log_domain: string): void;
/**
 * Check if verbose debugging is enabled.
 */
export function debug_is_verbose(): boolean;
/**
 * Set if verbose debugging is enabled.
 */
export function debug_set_verbose(verbose: boolean): void;
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function distro_upgrade_enum_from_string(upgrade: string): DistroUpgradeEnum;
/**
 * Converts a enumerated type to its text representation
 */
export function distro_upgrade_enum_to_string(upgrade: DistroUpgradeEnum): string;
/**
 * Search for a enum value in a table of constants.
 */
export function enum_find_string(table: EnumMatch, value: number): string;
/**
 * Search for a string value in a table of constants.
 */
export function enum_find_value(table: EnumMatch, string: string): number;
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function error_enum_from_string(code: string): ErrorEnum;
/**
 * Converts a enumerated type to its text representation
 */
export function error_enum_to_string(code: ErrorEnum): string;
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function exit_enum_from_string(exit: string): ExitEnum;
/**
 * Converts a enumerated type to its text representation
 */
export function exit_enum_to_string(exit: ExitEnum): string;
/**
 * Converts text representation to its enumerated type bitfield, or 0 for
 *  invalid
 */
export function filter_bitfield_from_string(filters: string): Bitfield;
/**
 * Converts a enumerated type bitfield to its text representation
 */
export function filter_bitfield_to_string(filters: Bitfield): string;
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function filter_enum_from_string(filter: string): FilterEnum;
/**
 * Converts a enumerated type to its text representation
 */
export function filter_enum_to_string(filter: FilterEnum): string;
/**
 * Get the distribution ID for the current host, typically "distro;versio
 * n;arch"
 */
export function get_distro_id(): string;
/**
 * Converts text representation to its enumerated type bitfield
 */
export function group_bitfield_from_string(groups: string): Bitfield;
/**
 * Converts a enumerated type bitfield to its text representation
 */
export function group_bitfield_to_string(groups: Bitfield): string;
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function group_enum_from_string(group: string): GroupEnum;
/**
 * Converts a enumerated type to its text representation
 */
export function group_enum_to_string(group: GroupEnum): string;
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function info_enum_from_string(info: string): InfoEnum;
/**
 * Converts a enumerated type to its localized description
 */
export function info_enum_to_localised_past(info: InfoEnum): string;
/**
 * Converts a enumerated type to its localized description
 */
export function info_enum_to_localised_present(info: InfoEnum): string;
/**
 * Converts a enumerated type to its text representation
 */
export function info_enum_to_string(info: InfoEnum): string;
/**
 * Convert a date into an ISO8601 data string.
 */
export function iso8601_from_date(date: GLib.Date): string;
/**
 * Get the current date / time as an ISO8601 string.
 */
export function iso8601_present(): string;
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function media_type_enum_from_string(media_type: string): MediaTypeEnum;
/**
 * Converts a enumerated type to its text representation
 */
export function media_type_enum_to_string(media_type: MediaTypeEnum): string;
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function network_enum_from_string(network: string): NetworkEnum;
/**
 * Converts a enumerated type to its text representation
 */
export function network_enum_to_string(network: NetworkEnum): string;
/**
 * Converts the string to the enumerated value.
 */
export function offline_action_from_string(action: string): OfflineAction;
/**
 * Converts the enumerated value to a string.
 */
export function offline_action_to_string(action: OfflineAction): string;
/**
 * 
 */
export function offline_auth_cancel(): boolean;
/**
 * 
 */
export function offline_auth_clear_results(): boolean;
/**
 * 
 */
export function offline_auth_invalidate(): boolean;
/**
 * 
 */
export function offline_auth_set_action(action: OfflineAction): boolean;
/**
 * 
 */
export function offline_auth_set_prepared_ids(package_ids: string): boolean;
/**
 * 
 */
export function offline_auth_set_prepared_upgrade(name: string, release_ver: string): boolean;
/**
 * 
 */
export function offline_auth_set_results(results: Results): boolean;
/**
 * 
 */
export function offline_auth_trigger(action: OfflineAction): boolean;
/**
 * 
 */
export function offline_auth_trigger_upgrade(action: OfflineAction): boolean;
/**
 * Cancels the offline operation that has been scheduled. If there is no
 * scheduled offline operation then this method returns with success.
 */
export function offline_cancel(cancellable: Gio.Cancellable | null): boolean;
/**
 * Crears the last offline operation report, which may be success or fail
 * ure.
 * If the report does not exist then this method returns success.
 */
export function offline_clear_results(cancellable: Gio.Cancellable | null): boolean;
/**
 * An error quark for #PkOfflineError.
 */
export function offline_error_quark(): GLib.Quark;
/**
 * Gets the action that will be taken after the offline action has comple
 * ted.
 * An error is set if the the value %PK_OFFLINE_ACTION_UNKNOWN is returne
 * d.
 */
export function offline_get_action(): OfflineAction;
/**
 * Gets a file monitor for the trigger.
 */
export function offline_get_action_monitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor;
/**
 * Gets the package-ids in the prepared transaction.
 */
export function offline_get_prepared_ids(): string[];
/**
 * Gets a file monitor for the prepared transaction.
 */
export function offline_get_prepared_monitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor;
/**
 * Gets a package sack of the packages in the prepared transaction.
 */
export function offline_get_prepared_sack(): PackageSack;
/**
 * 
 */
export function offline_get_prepared_upgrade(name: string, release_ver: string): boolean;
/**
 * Gets a file monitor for the prepared system upgrade transaction.
 */
export function offline_get_prepared_upgrade_monitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor;
/**
 * Gets the name of the prepared system upgrade in the prepared transacti
 * on.
 */
export function offline_get_prepared_upgrade_name(): string;
/**
 * Gets the version of the prepared system upgrade in the prepared transa
 * ction.
 */
export function offline_get_prepared_upgrade_version(): string;
/**
 * Gets the last result of the offline transaction.
 */
export function offline_get_results(): Results;
/**
 * Gets the modification time of the prepared transaction.
 */
export function offline_get_results_mtime(): number;
/**
 * Triggers the offline update so that the next reboot will perform the
 * pending transaction.
 */
export function offline_trigger(action: OfflineAction, cancellable: Gio.Cancellable | null): boolean;
/**
 * Triggers the offline system upgrade so that the next reboot will perfo
 * rm the
 * pending transaction.
 */
export function offline_trigger_upgrade(action: OfflineAction, cancellable: Gio.Cancellable | null): boolean;
/**
 * 
 */
export function polkit_agent_close(): void;
/**
 * 
 */
export function polkit_agent_open(): number;
/**
 * Form a composite string array of strings.
 * The data in the GPtrArray is copied.
 */
export function ptr_array_to_strv(array: string[]): string[];
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function restart_enum_from_string(restart: string): RestartEnum;
/**
 * Converts a enumerated type to its text representation
 */
export function restart_enum_to_string(restart: RestartEnum): string;
/**
 * Converts text representation to its enumerated type bitfield
 */
export function role_bitfield_from_string(roles: string): Bitfield;
/**
 * Converts a enumerated type bitfield to its text representation
 */
export function role_bitfield_to_string(roles: Bitfield): string;
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function role_enum_from_string(role: string): RoleEnum;
/**
 * Converts a enumerated type to its localized description
 */
export function role_enum_to_localised_present(role: RoleEnum): string;
/**
 * Converts a enumerated type to its text representation
 */
export function role_enum_to_string(role: RoleEnum): string;
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function sig_type_enum_from_string(sig_type: string): SigTypeEnum;
/**
 * Converts a enumerated type to its text representation
 */
export function sig_type_enum_to_string(sig_type: SigTypeEnum): string;
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function status_enum_from_string(status: string): StatusEnum;
/**
 * 
 */
export function status_enum_to_localised_text(status: StatusEnum): string;
/**
 * Converts a enumerated type to its text representation
 */
export function status_enum_to_string(status: StatusEnum): string;
/**
 * Converts text representation to its enumerated type bitfield, or 0 for
 *  invalid
 */
export function transaction_flag_bitfield_from_string(transaction_flags: string): Bitfield;
/**
 * Converts a enumerated type bitfield to its text representation
 */
export function transaction_flag_bitfield_to_string(transaction_flags: Bitfield): string;
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function transaction_flag_enum_from_string(transaction_flag: string): TransactionFlagEnum;
/**
 * Converts a enumerated type to its text representation
 */
export function transaction_flag_enum_to_string(transaction_flag: TransactionFlagEnum): string;
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function update_state_enum_from_string(update_state: string): UpdateStateEnum;
/**
 * Converts a enumerated type to its text representation
 */
export function update_state_enum_to_string(update_state: UpdateStateEnum): string;
/**
 * Converts a text enumerated type to its unsigned integer representation
 */
export function upgrade_kind_enum_from_string(upgrade_kind: string): UpgradeKindEnum;
/**
 * Converts a enumerated type to its text representation
 */
export function upgrade_kind_enum_to_string(upgrade_kind: UpgradeKindEnum): string;
export enum AuthorizeEnum {
    UNKNOWN = 0,
    YES = 1,
    NO = 2,
    INTERACTIVE = 3,
    LAST = 4,
}
export enum ClientError {
    FAILED = 0,
    FAILED_AUTH = 1,
    NO_TID = 2,
    ALREADY_TID = 3,
    ROLE_UNKNOWN = 4,
    CANNOT_START_DAEMON = 5,
    INVALID_INPUT = 6,
    INVALID_FILE = 7,
    NOT_SUPPORTED = 8,
    DECLINED_SIMULATION = 9,
    LAST = 10,
}
export enum ControlError {
    FAILED = 0,
    CANNOT_START_DAEMON = 1,
}
export enum DistroUpgradeEnum {
    UNKNOWN = 0,
    STABLE = 1,
    UNSTABLE = 2,
    LAST = 3,
}
export enum ErrorEnum {
    UNKNOWN = 0,
    OOM = 1,
    NO_NETWORK = 2,
    NOT_SUPPORTED = 3,
    INTERNAL_ERROR = 4,
    GPG_FAILURE = 5,
    PACKAGE_ID_INVALID = 6,
    PACKAGE_NOT_INSTALLED = 7,
    PACKAGE_NOT_FOUND = 8,
    PACKAGE_ALREADY_INSTALLED = 9,
    PACKAGE_DOWNLOAD_FAILED = 10,
    GROUP_NOT_FOUND = 11,
    GROUP_LIST_INVALID = 12,
    DEP_RESOLUTION_FAILED = 13,
    FILTER_INVALID = 14,
    CREATE_THREAD_FAILED = 15,
    TRANSACTION_ERROR = 16,
    TRANSACTION_CANCELLED = 17,
    NO_CACHE = 18,
    REPO_NOT_FOUND = 19,
    CANNOT_REMOVE_SYSTEM_PACKAGE = 20,
    PROCESS_KILL = 21,
    FAILED_INITIALIZATION = 22,
    FAILED_FINALISE = 23,
    FAILED_CONFIG_PARSING = 24,
    CANNOT_CANCEL = 25,
    CANNOT_GET_LOCK = 26,
    NO_PACKAGES_TO_UPDATE = 27,
    CANNOT_WRITE_REPO_CONFIG = 28,
    LOCAL_INSTALL_FAILED = 29,
    BAD_GPG_SIGNATURE = 30,
    MISSING_GPG_SIGNATURE = 31,
    CANNOT_INSTALL_SOURCE_PACKAGE = 32,
    REPO_CONFIGURATION_ERROR = 33,
    NO_LICENSE_AGREEMENT = 34,
    FILE_CONFLICTS = 35,
    PACKAGE_CONFLICTS = 36,
    REPO_NOT_AVAILABLE = 37,
    INVALID_PACKAGE_FILE = 38,
    PACKAGE_INSTALL_BLOCKED = 39,
    PACKAGE_CORRUPT = 40,
    ALL_PACKAGES_ALREADY_INSTALLED = 41,
    FILE_NOT_FOUND = 42,
    NO_MORE_MIRRORS_TO_TRY = 43,
    NO_DISTRO_UPGRADE_DATA = 44,
    INCOMPATIBLE_ARCHITECTURE = 45,
    NO_SPACE_ON_DEVICE = 46,
    MEDIA_CHANGE_REQUIRED = 47,
    NOT_AUTHORIZED = 48,
    UPDATE_NOT_FOUND = 49,
    CANNOT_INSTALL_REPO_UNSIGNED = 50,
    CANNOT_UPDATE_REPO_UNSIGNED = 51,
    CANNOT_GET_FILELIST = 52,
    CANNOT_GET_REQUIRES = 53,
    CANNOT_DISABLE_REPOSITORY = 54,
    RESTRICTED_DOWNLOAD = 55,
    PACKAGE_FAILED_TO_CONFIGURE = 56,
    PACKAGE_FAILED_TO_BUILD = 57,
    PACKAGE_FAILED_TO_INSTALL = 58,
    PACKAGE_FAILED_TO_REMOVE = 59,
    UPDATE_FAILED_DUE_TO_RUNNING_PROCESS = 60,
    PACKAGE_DATABASE_CHANGED = 61,
    PROVIDE_TYPE_NOT_SUPPORTED = 62,
    INSTALL_ROOT_INVALID = 63,
    CANNOT_FETCH_SOURCES = 64,
    CANCELLED_PRIORITY = 65,
    UNFINISHED_TRANSACTION = 66,
    LOCK_REQUIRED = 67,
    REPO_ALREADY_SET = 68,
    LAST = 69,
}
export enum ExitEnum {
    UNKNOWN = 0,
    SUCCESS = 1,
    FAILED = 2,
    CANCELLED = 3,
    KEY_REQUIRED = 4,
    EULA_REQUIRED = 5,
    KILLED = 6,
    MEDIA_CHANGE_REQUIRED = 7,
    NEED_UNTRUSTED = 8,
    CANCELLED_PRIORITY = 9,
    SKIP_TRANSACTION = 10,
    REPAIR_REQUIRED = 11,
    LAST = 12,
}
export enum FilterEnum {
    UNKNOWN = 0,
    NONE = 1,
    INSTALLED = 2,
    NOT_INSTALLED = 3,
    DEVELOPMENT = 4,
    NOT_DEVELOPMENT = 5,
    GUI = 6,
    NOT_GUI = 7,
    FREE = 8,
    NOT_FREE = 9,
    VISIBLE = 10,
    NOT_VISIBLE = 11,
    SUPPORTED = 12,
    NOT_SUPPORTED = 13,
    BASENAME = 14,
    NOT_BASENAME = 15,
    NEWEST = 16,
    NOT_NEWEST = 17,
    ARCH = 18,
    NOT_ARCH = 19,
    SOURCE = 20,
    NOT_SOURCE = 21,
    COLLECTIONS = 22,
    NOT_COLLECTIONS = 23,
    APPLICATION = 24,
    NOT_APPLICATION = 25,
    DOWNLOADED = 26,
    NOT_DOWNLOADED = 27,
    LAST = 28,
}
export enum GroupEnum {
    UNKNOWN = 0,
    ACCESSIBILITY = 1,
    ACCESSORIES = 2,
    ADMIN_TOOLS = 3,
    COMMUNICATION = 4,
    DESKTOP_GNOME = 5,
    DESKTOP_KDE = 6,
    DESKTOP_OTHER = 7,
    DESKTOP_XFCE = 8,
    EDUCATION = 9,
    FONTS = 10,
    GAMES = 11,
    GRAPHICS = 12,
    INTERNET = 13,
    LEGACY = 14,
    LOCALIZATION = 15,
    MAPS = 16,
    MULTIMEDIA = 17,
    NETWORK = 18,
    OFFICE = 19,
    OTHER = 20,
    POWER_MANAGEMENT = 21,
    PROGRAMMING = 22,
    PUBLISHING = 23,
    REPOS = 24,
    SECURITY = 25,
    SERVERS = 26,
    SYSTEM = 27,
    VIRTUALIZATION = 28,
    SCIENCE = 29,
    DOCUMENTATION = 30,
    ELECTRONICS = 31,
    COLLECTIONS = 32,
    VENDOR = 33,
    NEWEST = 34,
    LAST = 35,
}
export enum InfoEnum {
    UNKNOWN = 0,
    INSTALLED = 1,
    AVAILABLE = 2,
    LOW = 3,
    ENHANCEMENT = 4,
    NORMAL = 5,
    BUGFIX = 6,
    IMPORTANT = 7,
    SECURITY = 8,
    BLOCKED = 9,
    DOWNLOADING = 10,
    UPDATING = 11,
    INSTALLING = 12,
    REMOVING = 13,
    CLEANUP = 14,
    OBSOLETING = 15,
    COLLECTION_INSTALLED = 16,
    COLLECTION_AVAILABLE = 17,
    FINISHED = 18,
    REINSTALLING = 19,
    DOWNGRADING = 20,
    PREPARING = 21,
    DECOMPRESSING = 22,
    UNTRUSTED = 23,
    TRUSTED = 24,
    UNAVAILABLE = 25,
    LAST = 26,
}
export enum MediaTypeEnum {
    UNKNOWN = 0,
    CD = 1,
    DVD = 2,
    DISC = 3,
    LAST = 4,
}
export enum NetworkEnum {
    UNKNOWN = 0,
    OFFLINE = 1,
    ONLINE = 2,
    WIRED = 3,
    WIFI = 4,
    MOBILE = 5,
    LAST = 6,
}
export enum OfflineAction {
    UNKNOWN = 0,
    REBOOT = 1,
    POWER_OFF = 2,
    UNSET = 3,
    LAST = 4,
}
export enum OfflineError {
    FAILED = 0,
    INVALID_VALUE = 1,
    NO_DATA = 2,
    LAST = 3,
}
export enum PackageSackSortType {
    NAME = 0,
    INFO = 1,
    PACKAGE_ID = 2,
    SUMMARY = 3,
    LAST = 4,
}
export enum ProgressType {
    PACKAGE_ID = 0,
    TRANSACTION_ID = 1,
    PERCENTAGE = 2,
    ALLOW_CANCEL = 3,
    STATUS = 4,
    ROLE = 5,
    CALLER_ACTIVE = 6,
    ELAPSED_TIME = 7,
    REMAINING_TIME = 8,
    SPEED = 9,
    DOWNLOAD_SIZE_REMAINING = 10,
    UID = 11,
    PACKAGE = 12,
    ITEM_PROGRESS = 13,
    TRANSACTION_FLAGS = 14,
    INVALID = 15,
}
export enum RestartEnum {
    UNKNOWN = 0,
    NONE = 1,
    APPLICATION = 2,
    SESSION = 3,
    SYSTEM = 4,
    SECURITY_SESSION = 5,
    SECURITY_SYSTEM = 6,
    LAST = 7,
}
export enum RoleEnum {
    UNKNOWN = 0,
    CANCEL = 1,
    DEPENDS_ON = 2,
    GET_DETAILS = 3,
    GET_FILES = 4,
    GET_PACKAGES = 5,
    GET_REPO_LIST = 6,
    REQUIRED_BY = 7,
    GET_UPDATE_DETAIL = 8,
    GET_UPDATES = 9,
    INSTALL_FILES = 10,
    INSTALL_PACKAGES = 11,
    INSTALL_SIGNATURE = 12,
    REFRESH_CACHE = 13,
    REMOVE_PACKAGES = 14,
    REPO_ENABLE = 15,
    REPO_SET_DATA = 16,
    RESOLVE = 17,
    SEARCH_DETAILS = 18,
    SEARCH_FILE = 19,
    SEARCH_GROUP = 20,
    SEARCH_NAME = 21,
    UPDATE_PACKAGES = 22,
    WHAT_PROVIDES = 23,
    ACCEPT_EULA = 24,
    DOWNLOAD_PACKAGES = 25,
    GET_DISTRO_UPGRADES = 26,
    GET_CATEGORIES = 27,
    GET_OLD_TRANSACTIONS = 28,
    REPAIR_SYSTEM = 29,
    GET_DETAILS_LOCAL = 30,
    GET_FILES_LOCAL = 31,
    REPO_REMOVE = 32,
    UPGRADE_SYSTEM = 33,
    LAST = 34,
}
export enum SigTypeEnum {
    UNKNOWN = 0,
    GPG = 1,
    LAST = 2,
}
export enum StatusEnum {
    UNKNOWN = 0,
    WAIT = 1,
    SETUP = 2,
    RUNNING = 3,
    QUERY = 4,
    INFO = 5,
    REMOVE = 6,
    REFRESH_CACHE = 7,
    DOWNLOAD = 8,
    INSTALL = 9,
    UPDATE = 10,
    CLEANUP = 11,
    OBSOLETE = 12,
    DEP_RESOLVE = 13,
    SIG_CHECK = 14,
    TEST_COMMIT = 15,
    COMMIT = 16,
    REQUEST = 17,
    FINISHED = 18,
    CANCEL = 19,
    DOWNLOAD_REPOSITORY = 20,
    DOWNLOAD_PACKAGELIST = 21,
    DOWNLOAD_FILELIST = 22,
    DOWNLOAD_CHANGELOG = 23,
    DOWNLOAD_GROUP = 24,
    DOWNLOAD_UPDATEINFO = 25,
    REPACKAGING = 26,
    LOADING_CACHE = 27,
    SCAN_APPLICATIONS = 28,
    GENERATE_PACKAGE_LIST = 29,
    WAITING_FOR_LOCK = 30,
    WAITING_FOR_AUTH = 31,
    SCAN_PROCESS_LIST = 32,
    CHECK_EXECUTABLE_FILES = 33,
    CHECK_LIBRARIES = 34,
    COPY_FILES = 35,
    RUN_HOOK = 36,
    LAST = 37,
}
export enum TransactionFlagEnum {
    NONE = 0,
    ONLY_TRUSTED = 1,
    SIMULATE = 2,
    ONLY_DOWNLOAD = 3,
    ALLOW_REINSTALL = 4,
    JUST_REINSTALL = 5,
    ALLOW_DOWNGRADE = 6,
    LAST = 7,
}
export enum UpdateStateEnum {
    UNKNOWN = 0,
    STABLE = 1,
    UNSTABLE = 2,
    TESTING = 3,
    LAST = 4,
}
export enum UpgradeKindEnum {
    UNKNOWN = 0,
    MINIMAL = 1,
    DEFAULT = 2,
    COMPLETE = 3,
    LAST = 4,
}
export type Bitfield = number;
export class Category extends Source {
    constructor(config?: properties);
    cat_id: string;
    icon: string;
    name: string;
    parent_id: string;
    summary: string;
    get_icon(): string;
    get_id(): string;
    get_name(): string;
    get_parent_id(): string;
    get_summary(): string;
    set_icon(icon: string): void;
    set_id(cat_id: string): void;
    set_name(name: string): void;
    set_parent_id(parent_id: string): void;
    set_summary(summary: string): void;
}
export class Client extends GObject.Object {
    constructor(config?: properties);
    background: boolean;
    cache_age: number;
    readonly idle: boolean;
    interactive: boolean;
    locale: string;
    accept_eula(eula_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    accept_eula_async(eula_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    adopt(transaction_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    adopt_async(transaction_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    depends_on(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    depends_on_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    download_packages(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    download_packages_async(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    generic_finish(res: Gio.AsyncResult): Results;
    get_background(): boolean;
    get_cache_age(): number;
    get_categories(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_categories_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_details(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_details_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_details_local(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_details_local_async(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_distro_upgrades(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_distro_upgrades_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_files(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_files_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_files_local(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_files_local_async(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_idle(): boolean;
    get_interactive(): boolean;
    get_locale(): string;
    get_old_transactions(number: number, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_old_transactions_async(number: number, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_packages(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_packages_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_progress(transaction_id: string, cancellable: Gio.Cancellable | null): Progress;
    get_progress_async(transaction_id: string, cancellable: Gio.Cancellable | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_progress_finish(res: Gio.AsyncResult): Progress;
    get_repo_list(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_repo_list_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_update_detail(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_update_detail_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_updates(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_updates_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    install_files(transaction_flags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    install_files_async(transaction_flags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    install_packages(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    install_packages_async(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    install_signature(type: SigTypeEnum, key_id: string, package_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    install_signature_async(type: SigTypeEnum, key_id: string, package_id: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    refresh_cache(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    refresh_cache_async(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    remove_packages(transaction_flags: Bitfield, package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    remove_packages_async(transaction_flags: Bitfield, package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    repair_system(transaction_flags: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    repair_system_async(transaction_flags: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    repo_enable(repo_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    repo_enable_async(repo_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    repo_remove(transaction_flags: Bitfield, repo_id: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    repo_remove_async(transaction_flags: Bitfield, repo_id: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    repo_set_data(repo_id: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    repo_set_data_async(repo_id: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    required_by(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    required_by_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    resolve(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    resolve_async(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    search_details(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    search_details_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    search_files(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    search_files_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    search_groups(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    search_groups_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    search_names(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    search_names_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    set_background(background: boolean): void;
    set_cache_age(cache_age: number): void;
    set_interactive(interactive: boolean): void;
    set_locale(locale: string): void;
    update_packages(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    update_packages_async(transaction_flags: Bitfield, package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    upgrade_system(transaction_flags: Bitfield, distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    upgrade_system_async(transaction_flags: Bitfield, distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    what_provides(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    what_provides_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    vfunc_changed(): void;
}
export class ClientHelper extends GObject.Object {
    constructor(config?: properties);
    start(socket_filename: string, argv: string, envp: string): boolean;
    stop(): boolean;
}
export class Control extends GObject.Object {
    constructor(config?: properties);
    backend_author: string;
    backend_description: string;
    backend_name: string;
    connected: boolean;
    distro_id: string;
    filters: number;
    groups: number;
    mime_types: string[];
    network_state: NetworkEnum;
    provides: number;
    roles: number;
    readonly version_major: number;
    readonly version_micro: number;
    readonly version_minor: number;
    can_authorize_async(action_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    can_authorize_finish(res: Gio.AsyncResult): AuthorizeEnum;
    get_daemon_state_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_daemon_state_finish(res: Gio.AsyncResult): string;
    get_properties(cancellable: Gio.Cancellable | null): boolean;
    get_properties_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_properties_finish(res: Gio.AsyncResult): boolean;
    get_tid_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_tid_finish(res: Gio.AsyncResult): string;
    get_time_since_action_async(role: RoleEnum, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_time_since_action_finish(res: Gio.AsyncResult): number;
    get_transaction_list(cancellable: Gio.Cancellable | null): string[];
    get_transaction_list_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_transaction_list_finish(res: Gio.AsyncResult): string[];
    set_proxy(proxy_http: string, proxy_ftp: string, cancellable: Gio.Cancellable | null): boolean;
    set_proxy2(proxy_http: string, proxy_https: string, proxy_ftp: string, proxy_socks: string, no_proxy: string, pac: string, cancellable: Gio.Cancellable | null): boolean;
    set_proxy2_async(proxy_http: string, proxy_https: string, proxy_ftp: string, proxy_socks: string, no_proxy: string, pac: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    set_proxy_async(proxy_http: string, proxy_ftp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    set_proxy_finish(res: Gio.AsyncResult): boolean;
    suggest_daemon_quit(cancellable: Gio.Cancellable | null): boolean;
    suggest_daemon_quit_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    suggest_daemon_quit_finish(res: Gio.AsyncResult): boolean;
    vfunc_connection_changed(connected: boolean): void;
    vfunc_locked(is_locked: boolean): void;
    vfunc_network_state_changed(): void;
    vfunc_repo_list_changed(): void;
    vfunc_restart_schedule(): void;
    vfunc_transaction_list_changed(transaction_ids: string): void;
    vfunc_updates_changed(): void;
}
export class Desktop extends GObject.Object {
    constructor(config?: properties);
    get_files_for_package(_package: string): string[];
    get_package_for_file(filename: string): string;
    get_shown_for_package(_package: string): string[];
    open_database(): boolean;
}
export class Details extends Source {
    constructor(config?: properties);
    description: string;
    group: GroupEnum;
    license: string;
    package_id: string;
    size: number;
    summary: string;
    url: string;
    get_description(): string;
    get_group(): GroupEnum;
    get_license(): string;
    get_package_id(): string;
    get_size(): number;
    get_summary(): string;
    get_url(): string;
}
export class DistroUpgrade extends Source {
    constructor(config?: properties);
    name: string;
    state: DistroUpgradeEnum;
    summary: string;
    get_id(): string;
    get_state(): DistroUpgradeEnum;
    get_summary(): string;
}
export class Error extends Source {
    constructor(config?: properties);
    code: ErrorEnum;
    details: string;
    get_code(): ErrorEnum;
    get_details(): string;
}
export class EulaRequired extends Source {
    constructor(config?: properties);
    eula_id: string;
    license_agreement: string;
    package_id: string;
    vendor_name: string;
    get_eula_id(): string;
    get_license_agreement(): string;
    get_package_id(): string;
    get_vendor_name(): string;
}
export class Files extends Source {
    constructor(config?: properties);
    files: string[];
    package_id: string;
    get_files(): string[];
    get_package_id(): string;
}
export class ItemProgress extends Source {
    constructor(config?: properties);
    package_id: string;
    percentage: number;
    status: number;
    get_package_id(): string;
    get_percentage(): number;
    get_status(): StatusEnum;
}
export class MediaChangeRequired extends Source {
    constructor(config?: properties);
    media_id: string;
    media_text: string;
    media_type: MediaTypeEnum;
}
export class Package extends Source {
    constructor(config?: properties);
    description: string;
    group: GroupEnum;
    info: InfoEnum;
    license: string;
    readonly package_id: string;
    size: number;
    summary: string;
    update_bugzilla_urls: string[];
    update_changelog: string;
    update_cve_urls: string[];
    update_issued: string;
    update_obsoletes: string;
    update_restart: RestartEnum;
    update_state: UpdateStateEnum;
    update_text: string;
    update_updated: string;
    update_updates: string;
    update_vendor_urls: string[];
    url: string;
    equal(package2: Package): boolean;
    equal_id(package2: Package): boolean;
    get_arch(): string;
    get_data(): string;
    get_data(...args: never[]): never;
    get_id(): string;
    get_info(): InfoEnum;
    get_name(): string;
    get_summary(): string;
    get_version(): string;
    parse(data: string): boolean;
    print(): void;
    set_id(package_id: string): boolean;
    set_info(info: InfoEnum): void;
    set_summary(summary: string): void;
    vfunc_changed(): void;
    static id_build(name: string, version: string, arch: string, data: string): string;
    static id_check(package_id: string): boolean;
    static id_equal_fuzzy_arch(package_id1: string, package_id2: string): boolean;
    static id_split(package_id: string): string[];
    static id_to_printable(package_id: string): string;
    static ids_add_id(package_ids: string, package_id: string): string[];
    static ids_add_ids(package_ids: string, package_ids_new: string): string[];
    static ids_check(package_ids: string): boolean;
    static ids_from_id(package_id: string): string[];
    static ids_from_string(package_id: string): string[];
    static ids_present_id(package_ids: string, package_id: string): boolean;
    static ids_remove_id(package_ids: string, package_id: string): string[];
    static ids_to_string(package_ids: string): string;
}
export class PackageSack extends GObject.Object {
    constructor(config?: properties);
    add_package(_package: Package): boolean;
    add_package_by_id(package_id: string): boolean;
    add_packages_from_file(file: Gio.File): boolean;
    clear(): void;
    filter(filter_cb: PackageSackFilterFunc, user_data: object | null): PackageSack;
    filter_by_info(info: InfoEnum): PackageSack;
    find_by_id(package_id: string): Package;
    find_by_id_name_arch(package_id: string): Package;
    get_array(): Package[];
    get_details(cancellable: Gio.Cancellable | null): boolean;
    get_details_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_ids(): string[];
    get_size(): number;
    get_total_bytes(): number;
    get_update_detail(cancellable: Gio.Cancellable | null): boolean;
    get_update_detail_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    merge_generic_finish(res: Gio.AsyncResult): boolean;
    remove_by_filter(filter_cb: PackageSackFilterFunc, user_data: object | null): boolean;
    remove_package(_package: Package): boolean;
    remove_package_by_id(package_id: string): boolean;
    resolve(cancellable: Gio.Cancellable | null): boolean;
    resolve_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    sort(type: PackageSackSortType): void;
    to_file(file: Gio.File): boolean;
    vfunc_changed(): void;
}
export class Progress extends GObject.Object {
    constructor(config?: properties);
    allow_cancel: boolean;
    caller_active: boolean;
    download_size_remaining: number;
    elapsed_time: number;
    item_progress: ItemProgress;
    _package: Package;
    package_id: string;
    percentage: number;
    remaining_time: number;
    role: number;
    speed: number;
    status: number;
    transaction_flags: number;
    transaction_id: string;
    uid: number;
    get_allow_cancel(): boolean;
    get_caller_active(): boolean;
    get_download_size_remaining(): number;
    get_elapsed_time(): number;
    get_item_progress(): ItemProgress;
    get_package(): Package;
    get_package_id(): string;
    get_percentage(): number;
    get_remaining_time(): number;
    get_role(): RoleEnum;
    get_speed(): number;
    get_status(): StatusEnum;
    get_transaction_flags(): number;
    get_transaction_id(): string;
    get_uid(): number;
    set_allow_cancel(allow_cancel: boolean): boolean;
    set_caller_active(caller_active: boolean): boolean;
    set_download_size_remaining(download_size_remaining: number): boolean;
    set_elapsed_time(elapsed_time: number): boolean;
    set_item_progress(item_progress: ItemProgress): boolean;
    set_package(_package: Package): boolean;
    set_package_id(package_id: string): boolean;
    set_percentage(percentage: number): boolean;
    set_remaining_time(remaining_time: number): boolean;
    set_role(role: RoleEnum): boolean;
    set_speed(speed: number): boolean;
    set_status(status: StatusEnum): boolean;
    set_transaction_flags(transaction_flags: number): boolean;
    set_transaction_id(transaction_id: string): boolean;
    set_uid(uid: number): boolean;
}
export class RepoDetail extends Source {
    constructor(config?: properties);
    description: string;
    enabled: boolean;
    repo_id: string;
    get_description(): string;
    get_enabled(): boolean;
    get_id(): string;
}
export class RepoSignatureRequired extends Source {
    constructor(config?: properties);
    key_fingerprint: string;
    key_id: string;
    key_timestamp: string;
    key_url: string;
    key_userid: string;
    package_id: string;
    repository_name: string;
    type: SigTypeEnum;
}
export class RequireRestart extends Source {
    constructor(config?: properties);
    package_id: string;
    restart: RestartEnum;
}
export class Results extends GObject.Object {
    constructor(config?: properties);
    inputs: number;
    progress: Progress;
    role: RoleEnum;
    transaction_flags: number;
    add_category(item: Category): boolean;
    add_details(item: Details): boolean;
    add_distro_upgrade(item: DistroUpgrade): boolean;
    add_eula_required(item: EulaRequired): boolean;
    add_files(item: Files): boolean;
    add_media_change_required(item: MediaChangeRequired): boolean;
    add_package(item: Package): boolean;
    add_repo_detail(item: RepoDetail): boolean;
    add_repo_signature_required(item: RepoSignatureRequired): boolean;
    add_require_restart(item: RequireRestart): boolean;
    add_transaction(item: TransactionPast): boolean;
    add_update_detail(item: UpdateDetail): boolean;
    get_category_array(): Category[];
    get_details_array(): Details[];
    get_distro_upgrade_array(): DistroUpgrade[];
    get_error_code(): Error;
    get_eula_required_array(): EulaRequired[];
    get_exit_code(): ExitEnum;
    get_files_array(): Files[];
    get_media_change_required_array(): MediaChangeRequired[];
    get_package_array(): Package[];
    get_package_sack(): PackageSack;
    get_repo_detail_array(): RepoDetail[];
    get_repo_signature_required_array(): RepoSignatureRequired[];
    get_require_restart_array(): RequireRestart[];
    get_require_restart_worst(): RestartEnum;
    get_role(): RoleEnum;
    get_transaction_array(): TransactionPast[];
    get_transaction_flags(): Bitfield;
    get_update_detail_array(): UpdateDetail[];
    set_error_code(item: Error): boolean;
    set_exit_code(exit_enum: ExitEnum): boolean;
    set_role(role: RoleEnum): boolean;
}
export class Source extends GObject.Object {
    constructor(config?: properties);
    role: RoleEnum;
    transaction_id: string;
}
export class Task extends Client {
    constructor(config?: properties);
    allow_downgrade: boolean;
    allow_reinstall: boolean;
    only_download: boolean;
    only_trusted: boolean;
    simulate: boolean;
    depends_on_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    depends_on_sync(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    download_packages_async(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    download_packages_sync(package_ids: string[], directory: string, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    generic_finish(res: Gio.AsyncResult): Results;
    get_allow_downgrade(): boolean;
    get_allow_reinstall(): boolean;
    get_categories_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_categories_sync(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_details_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_details_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_files_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_files_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_only_download(): boolean;
    get_only_trusted(): boolean;
    get_packages_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_packages_sync(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_repo_list_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_repo_list_sync(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_simulate(): boolean;
    get_update_detail_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_update_detail_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    get_updates_async(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_updates_sync(filters: Bitfield, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    install_files_async(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    install_files_async(...args: never[]): never;
    install_files_sync(files: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    install_packages_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    install_packages_async(...args: never[]): never;
    install_packages_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    refresh_cache_async(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    refresh_cache_sync(force: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    remove_packages_async(package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    remove_packages_async(...args: never[]): never;
    remove_packages_sync(package_ids: string[], allow_deps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    repair_system_async(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    repair_system_async(...args: never[]): never;
    repair_system_sync(cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    repo_enable_async(repo_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    repo_enable_sync(repo_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    required_by_async(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    required_by_sync(filters: Bitfield, package_ids: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    resolve_async(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    resolve_sync(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    search_details_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    search_details_sync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    search_files_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    search_files_sync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    search_groups_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    search_groups_sync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    search_names_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    search_names_sync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    set_allow_downgrade(allow_downgrade: boolean): void;
    set_allow_reinstall(allow_reinstall: boolean): void;
    set_only_download(only_download: boolean): void;
    set_only_trusted(only_trusted: boolean): void;
    set_simulate(simulate: boolean): void;
    update_packages_async(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    update_packages_async(...args: never[]): never;
    update_packages_sync(package_ids: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    upgrade_system_async(distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    upgrade_system_async(...args: never[]): never;
    upgrade_system_sync(distro_id: string, upgrade_kind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    user_accepted(request: number): boolean;
    user_declined(request: number): boolean;
    what_provides_async(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null, callback_ready: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    what_provides_sync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progress_callback: ProgressCallback, progress_user_data: object | null): Results;
    vfunc_eula_question(request: number, results: Results): void;
    vfunc_key_question(request: number, results: Results): void;
    vfunc_media_change_question(request: number, results: Results): void;
    vfunc_repair_question(request: number, results: Results): void;
    vfunc_simulate_question(request: number, results: Results): void;
    vfunc_untrusted_question(request: number, results: Results): void;
}
export class TransactionList extends GObject.Object {
    constructor(config?: properties);
    get_ids(): string[];
    vfunc_added(tid: string): void;
    vfunc_removed(tid: string): void;
}
export class TransactionPast extends Source {
    constructor(config?: properties);
    cmdline: string;
    data: string;
    duration: number;
    role: RoleEnum;
    succeeded: boolean;
    tid: string;
    timespec: string;
    uid: number;
    get_cmdline(): string;
    get_data(): string;
    get_data(...args: never[]): never;
    get_datetime(): GLib.DateTime;
    get_duration(): number;
    get_id(): string;
    get_role(): RoleEnum;
    get_succeeded(): boolean;
    get_timespec(): string;
    get_timestamp(): number;
    get_uid(): number;
}
export class UpdateDetail extends Source {
    constructor(config?: properties);
    bugzilla_urls: string[];
    changelog: string;
    cve_urls: string[];
    issued: string;
    obsoletes: string[];
    package_id: string;
    restart: RestartEnum;
    state: UpdateStateEnum;
    update_text: string;
    updated: string;
    updates: string[];
    vendor_urls: string[];
    get_bugzilla_urls(): string[];
    get_changelog(): string;
    get_cve_urls(): string[];
    get_issued(): string;
    get_obsoletes(): string[];
    get_package_id(): string;
    get_restart(): RestartEnum;
    get_state(): UpdateStateEnum;
    get_update_text(): string;
    get_updated(): string;
    get_updates(): string[];
    get_vendor_urls(): string[];
}
export class CategoryPrivate  {
    constructor(config?: properties);
}
export class ClientHelperPrivate  {
    constructor(config?: properties);
}
export class ClientPrivate  {
    constructor(config?: properties);
}
export class ControlPrivate  {
    constructor(config?: properties);
}
export class DesktopPrivate  {
    constructor(config?: properties);
}
export class DetailsPrivate  {
    constructor(config?: properties);
}
export class DistroUpgradePrivate  {
    constructor(config?: properties);
}
export class EnumMatch  {
    constructor(config?: properties);
    value: number;
    string: string;
}
export class ErrorPrivate  {
    constructor(config?: properties);
}
export class EulaRequiredPrivate  {
    constructor(config?: properties);
}
export class FilesPrivate  {
    constructor(config?: properties);
}
export class ItemProgressPrivate  {
    constructor(config?: properties);
}
export class MediaChangeRequiredPrivate  {
    constructor(config?: properties);
}
export class PackagePrivate  {
    constructor(config?: properties);
}
export class PackageSackPrivate  {
    constructor(config?: properties);
}
export class PackageSackResults  {
    constructor(config?: properties);
}
export class ProgressPrivate  {
    constructor(config?: properties);
}
export class RepoDetailPrivate  {
    constructor(config?: properties);
}
export class RepoSignatureRequiredPrivate  {
    constructor(config?: properties);
}
export class RequireRestartPrivate  {
    constructor(config?: properties);
}
export class ResultsPrivate  {
    constructor(config?: properties);
}
export class SourcePrivate  {
    constructor(config?: properties);
}
export class TaskPrivate  {
    constructor(config?: properties);
}
export class TransactionListPrivate  {
    constructor(config?: properties);
}
export class TransactionPastPrivate  {
    constructor(config?: properties);
}
export class UpdateDetailPrivate  {
    constructor(config?: properties);
}