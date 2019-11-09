
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Soup from "soup";
import * as Fwupd from "fwupd";
/**
 * fwupd.d.ts
 */
type properties = { [key: string]: any };
export const DBUS_INTERFACE: string;
export const DBUS_PATH: string;
export const DBUS_SERVICE: string;
export const DEVICE_FLAG_ANOTHER_WRITE_REQUIRED: number;
export const DEVICE_FLAG_ENSURE_SEMVER: number;
export const DEVICE_FLAG_HISTORICAL: number;
export const DEVICE_FLAG_IGNORE_VALIDATION: number;
export const DEVICE_FLAG_INSTALL_PARENT_FIRST: number;
export const DEVICE_FLAG_INTERNAL: number;
export const DEVICE_FLAG_IS_BOOTLOADER: number;
export const DEVICE_FLAG_LOCKED: number;
export const DEVICE_FLAG_NEEDS_ACTIVATION: number;
export const DEVICE_FLAG_NEEDS_BOOTLOADER: number;
export const DEVICE_FLAG_NEEDS_REBOOT: number;
export const DEVICE_FLAG_NEEDS_SHUTDOWN: number;
export const DEVICE_FLAG_NONE: number;
export const DEVICE_FLAG_NOTIFIED: number;
export const DEVICE_FLAG_NO_AUTO_INSTANCE_IDS: number;
export const DEVICE_FLAG_ONLY_OFFLINE: number;
export const DEVICE_FLAG_REGISTERED: number;
export const DEVICE_FLAG_REPORTED: number;
export const DEVICE_FLAG_REQUIRE_AC: number;
export const DEVICE_FLAG_SUPPORTED: number;
export const DEVICE_FLAG_TRUSTED: number;
export const DEVICE_FLAG_UPDATABLE: number;
export const DEVICE_FLAG_USE_RUNTIME_VERSION: number;
export const DEVICE_FLAG_WAIT_FOR_REPLUG: number;
export const DEVICE_ID_ANY: string;
export const RELEASE_FLAG_BLOCKED_APPROVAL: number;
export const RELEASE_FLAG_BLOCKED_VERSION: number;
export const RELEASE_FLAG_IS_DOWNGRADE: number;
export const RELEASE_FLAG_IS_UPGRADE: number;
export const RELEASE_FLAG_NONE: number;
export const RELEASE_FLAG_TRUSTED_METADATA: number;
export const RELEASE_FLAG_TRUSTED_PAYLOAD: number;
export const RESULT_KEY_APPSTREAM_ID: string;
export const RESULT_KEY_CATEGORIES: string;
export const RESULT_KEY_CHECKSUM: string;
export const RESULT_KEY_CREATED: string;
export const RESULT_KEY_DESCRIPTION: string;
export const RESULT_KEY_DETAILS_URL: string;
export const RESULT_KEY_DEVICE_ID: string;
export const RESULT_KEY_FILENAME: string;
export const RESULT_KEY_FLAGS: string;
export const RESULT_KEY_FLASHES_LEFT: string;
export const RESULT_KEY_GUID: string;
export const RESULT_KEY_HOMEPAGE: string;
export const RESULT_KEY_ICON: string;
export const RESULT_KEY_INSTALL_DURATION: string;
export const RESULT_KEY_INSTANCE_IDS: string;
export const RESULT_KEY_ISSUES: string;
export const RESULT_KEY_LICENSE: string;
export const RESULT_KEY_METADATA: string;
export const RESULT_KEY_MODIFIED: string;
export const RESULT_KEY_NAME: string;
export const RESULT_KEY_NAME_VARIANT_SUFFIX: string;
export const RESULT_KEY_PARENT_DEVICE_ID: string;
export const RESULT_KEY_PLUGIN: string;
export const RESULT_KEY_PROTOCOL: string;
export const RESULT_KEY_RELEASE: string;
export const RESULT_KEY_REMOTE_ID: string;
export const RESULT_KEY_SERIAL: string;
export const RESULT_KEY_SIZE: string;
export const RESULT_KEY_SOURCE_URL: string;
export const RESULT_KEY_SUMMARY: string;
export const RESULT_KEY_TRUST_FLAGS: string;
export const RESULT_KEY_UPDATE_ERROR: string;
export const RESULT_KEY_UPDATE_MESSAGE: string;
export const RESULT_KEY_UPDATE_STATE: string;
export const RESULT_KEY_URI: string;
export const RESULT_KEY_VENDOR: string;
export const RESULT_KEY_VENDOR_ID: string;
export const RESULT_KEY_VERSION: string;
export const RESULT_KEY_VERSION_BOOTLOADER: string;
export const RESULT_KEY_VERSION_FORMAT: string;
export const RESULT_KEY_VERSION_LOWEST: string;
/**
 * Builds a JSON report for the list of devices. No filtering is done on 
 * the
 * @devices array, and it is expected that the caller will filter to some
 * thing
 * sane, e.g. %FWUPD_DEVICE_FLAG_REPORTED at the bare minimum.
 */
export function build_history_report_json(devices: Device[]): string;
/**
 * Gets a salted hash of the /etc/machine-id contents. This can be used t
 * o
 * identify a specific machine. It is not possible to recover the origina
 * l
 * machine-id from the machine-hash.
 */
export function build_machine_id(salt: string): string;
/**
 * Builds a user-agent to use for the download.
 * Supplying harmless details to the server means it knows more about eac
 * h
 * client. This allows the web service to respond in a different way, for
 * instance sending a different metadata file for old versions of fwupd, 
 * or
 * returning an error for Solaris machines.
 * Before freaking out about theoretical privacy implications, much more 
 * data
 * than this is sent to each and every website you visit.
 */
export function build_user_agent(package_name: string, package_version: string): string;
/**
 * Formats a checksum for display.
 */
export function checksum_format_for_display(checksum: string): string;
/**
 * Gets a the best possible checksum kind.
 */
export function checksum_get_best(checksums: string[]): string;
/**
 * Gets a specific checksum kind.
 */
export function checksum_get_by_kind(checksums: string[], kind: GLib.ChecksumType): string;
/**
 * Guesses the checksum kind based on the length of the hash.
 */
export function checksum_guess_kind(checksum: string): GLib.ChecksumType;
/**
 * Converts a string to a #FwupdError.
 */
export function error_from_string(error: string): Error;
/**
 * 
 */
export function error_quark(): GLib.Quark;
/**
 * Converts a #FwupdError to a string.
 */
export function error_to_string(error: Error): string;
/**
 * Loads information from the system os-release file.
 */
export function get_os_release(): GLib.HashTable;
/**
 * Converts a string GUID into its binary encoding. All string GUIDs are
 * formatted as big endian but on-disk can be encoded in different ways.
 */
export function guid_from_string(guidstr: string | null, guid: number, flags: GuidFlags): boolean;
/**
 * Returns a GUID for some data. This uses a hash and so even small
 * differences in the @data will produce radically different return value
 * s.
 * The implementation is taken from RFC4122, Section 4.1.3; specifically
 * using a type-5 SHA-1 hash.
 */
export function guid_hash_data(data: number, datasz: number, flags: GuidFlags): string;
/**
 * Returns a GUID for a given string. This uses a hash and so even small
 * differences in the @str will produce radically different return values
 * .
 * The default implementation is taken from RFC4122, Section 4.1.3; speci
 * fically
 * using a type-5 SHA-1 hash with a DNS namespace.
 * The same result can be obtained with this simple python program:
 *    #!/usr/bin/python
 *    import uuid
 *    print uuid.uuid5(uuid.NAMESPACE_DNS, 'python.org')
 */
export function guid_hash_string(str: string): string;
/**
 * Checks the string is a valid GUID.
 */
export function guid_is_valid(guid: string): boolean;
/**
 * Returns a text GUID of mixed or BE endian for a packed buffer.
 */
export function guid_to_string(guid: number, flags: GuidFlags): string;
/**
 * Converts an printable string to an enumerated type.
 */
export function keyring_kind_from_string(keyring_kind: string): KeyringKind;
/**
 * Converts an enumerated type to a printable string.
 */
export function keyring_kind_to_string(keyring_kind: KeyringKind): string;
/**
 * Converts a string to a #FwupdStatus.
 */
export function status_from_string(status: string): Status;
/**
 * Converts a #FwupdStatus to a string.
 */
export function status_to_string(status: Status): string;
/**
 * Converts a string to a #FwupdTrustFlags.
 */
export function trust_flag_from_string(trust_flag: string): TrustFlags;
/**
 * Converts a #FwupdTrustFlags to a string.
 */
export function trust_flag_to_string(trust_flag: TrustFlags): string;
/**
 * Converts a string to a #FwupdUpdateState.
 */
export function update_state_from_string(update_state: string): UpdateState;
/**
 * Converts a #FwupdUpdateState to a string.
 */
export function update_state_to_string(update_state: UpdateState): string;
/**
 * Converts text to a display version type.
 */
export function version_format_from_string(str: string): VersionFormat;
/**
 * Converts a display version type to text.
 */
export function version_format_to_string(kind: VersionFormat): string;
export enum Error {
    INTERNAL = 0,
    VERSION_NEWER = 1,
    VERSION_SAME = 2,
    ALREADY_PENDING = 3,
    AUTH_FAILED = 4,
    READ = 5,
    WRITE = 6,
    INVALID_FILE = 7,
    NOT_FOUND = 8,
    NOTHING_TO_DO = 9,
    NOT_SUPPORTED = 10,
    SIGNATURE_INVALID = 11,
    AC_POWER_REQUIRED = 12,
    PERMISSION_DENIED = 13,
    BROKEN_SYSTEM = 14,
    BATTERY_LEVEL_TOO_LOW = 15,
}
export enum KeyringKind {
    UNKNOWN = 0,
    NONE = 1,
    GPG = 2,
    PKCS7 = 3,
}
export enum RemoteKind {
    UNKNOWN = 0,
    DOWNLOAD = 1,
    LOCAL = 2,
    DIRECTORY = 3,
}
export enum Status {
    UNKNOWN = 0,
    IDLE = 1,
    LOADING = 2,
    DECOMPRESSING = 3,
    DEVICE_RESTART = 4,
    DEVICE_WRITE = 5,
    DEVICE_VERIFY = 6,
    SCHEDULING = 7,
    DOWNLOADING = 8,
    DEVICE_READ = 9,
    DEVICE_ERASE = 10,
    WAITING_FOR_AUTH = 11,
    DEVICE_BUSY = 12,
    SHUTDOWN = 13,
}
export enum UpdateState {
    UNKNOWN = 0,
    PENDING = 1,
    SUCCESS = 2,
    FAILED = 3,
    NEEDS_REBOOT = 4,
    FAILED_TRANSIENT = 5,
}
export enum VersionFormat {
    UNKNOWN = 0,
    PLAIN = 1,
    NUMBER = 2,
    PAIR = 3,
    TRIPLET = 4,
    QUAD = 5,
    BCD = 6,
    INTEL_ME = 7,
    INTEL_ME2 = 8,
}
export type DeviceFlags = number;
export type ReleaseFlags = number;
export enum GuidFlags {
    NONE = 0,
    NAMESPACE_MICROSOFT = 1,
    MIXED_ENDIAN = 2,
}
export enum InstallFlags {
    NONE = 0,
    OFFLINE = 1,
    ALLOW_REINSTALL = 2,
    ALLOW_OLDER = 4,
    FORCE = 8,
    NO_HISTORY = 16,
}
export enum SelfSignFlags {
    NONE = 0,
    ADD_TIMESTAMP = 1,
    ADD_CERT = 2,
}
export enum TrustFlags {
    NONE = 0,
    PAYLOAD = 1,
    METADATA = 2,
}
export class Client extends GObject.Object {constructor(config?: properties);
readonly daemon_version: string;
readonly host_machine_id: string;
readonly host_product: string;
percentage: number;
status: number;
readonly tainted: boolean;
activate(cancellable: Gio.Cancellable | null, device_id: string): boolean;
clear_results(device_id: string, cancellable: Gio.Cancellable | null): boolean;
connect(cancellable: Gio.Cancellable | null): boolean;
connect(...args: never[]): never;
get_approved_firmware(cancellable: Gio.Cancellable | null): string[];
get_daemon_version(): string;
get_details(filename: string, cancellable: Gio.Cancellable | null): Device[];
get_device_by_id(device_id: string, cancellable: Gio.Cancellable | null): Device;
get_devices(cancellable: Gio.Cancellable | null): Device[];
get_downgrades(device_id: string, cancellable: Gio.Cancellable | null): Release[];
get_history(cancellable: Gio.Cancellable | null): Device[];
get_host_machine_id(): string;
get_host_product(): string;
get_percentage(): number;
get_releases(device_id: string, cancellable: Gio.Cancellable | null): Release[];
get_remote_by_id(remote_id: string, cancellable: Gio.Cancellable | null): Remote;
get_remotes(cancellable: Gio.Cancellable | null): Remote[];
get_results(device_id: string, cancellable: Gio.Cancellable | null): Device;
get_status(): Status;
get_tainted(): boolean;
get_upgrades(device_id: string, cancellable: Gio.Cancellable | null): Release[];
install(device_id: string, filename: string, install_flags: InstallFlags, cancellable: Gio.Cancellable | null): boolean;
modify_config(key: string, value: string, cancellable: Gio.Cancellable | null): boolean;
modify_device(device_id: string, key: string, value: string, cancellable: Gio.Cancellable | null): boolean;
modify_remote(remote_id: string, key: string, value: string, cancellable: Gio.Cancellable | null): boolean;
self_sign(value: string, flags: SelfSignFlags, cancellable: Gio.Cancellable | null): string;
set_approved_firmware(checksums: string, cancellable: Gio.Cancellable | null): boolean;
unlock(device_id: string, cancellable: Gio.Cancellable | null): boolean;
update_metadata(remote_id: string, metadata_fn: string, signature_fn: string, cancellable: Gio.Cancellable | null): boolean;
verify(device_id: string, cancellable: Gio.Cancellable | null): boolean;
verify_update(device_id: string, cancellable: Gio.Cancellable | null): boolean;
vfunc_changed(): void;
vfunc_device_added(result: Device): void;
vfunc_device_changed(result: Device): void;
vfunc_device_removed(result: Device): void;
vfunc_status_changed(status: Status): void;
}
export class Device extends GObject.Object {constructor(config?: properties);
version_format: number;
add_checksum(checksum: string): void;
add_flag(flag: DeviceFlags): void;
add_guid(guid: string): void;
add_icon(icon: string): void;
add_instance_id(instance_id: string): void;
add_release(release: Release): void;
compare(device2: Device): number;
get_checksums(): string[];
get_created(): number;
get_description(): string;
get_flags(): number;
get_flashes_left(): number;
get_guid_default(): string;
get_guids(): string[];
get_icons(): string[];
get_id(): string;
get_install_duration(): number;
get_instance_ids(): string[];
get_modified(): number;
get_name(): string;
get_parent(): Device;
get_parent_id(): string;
get_plugin(): string;
get_release_default(): Release;
get_releases(): Release[];
get_serial(): string;
get_summary(): string;
get_update_error(): string;
get_update_message(): string;
get_update_state(): UpdateState;
get_vendor(): string;
get_vendor_id(): string;
get_version(): string;
get_version_bootloader(): string;
get_version_format(): VersionFormat;
get_version_lowest(): string;
has_flag(flag: DeviceFlags): boolean;
has_guid(guid: string): boolean;
has_instance_id(instance_id: string): boolean;
incorporate(donor: Device): void;
remove_flag(flag: DeviceFlags): void;
set_created(created: number): void;
set_description(description: string): void;
set_flags(flags: number): void;
set_flashes_left(flashes_left: number): void;
set_id(id: string): void;
set_install_duration(duration: number): void;
set_modified(modified: number): void;
set_name(name: string): void;
set_parent(parent: Device): void;
set_parent_id(parent_id: string): void;
set_plugin(plugin: string): void;
set_serial(serial: string): void;
set_summary(summary: string): void;
set_update_error(update_error: string): void;
set_update_message(update_message: string): void;
set_update_state(update_state: UpdateState): void;
set_vendor(vendor: string): void;
set_vendor_id(vendor_id: string): void;
set_version(version: string): void;
set_version_bootloader(version_bootloader: string): void;
set_version_format(version_format: VersionFormat): void;
set_version_lowest(version_lowest: string): void;
to_json(builder: unknown): void;
to_string(): string;
to_variant(): GLib.Variant;
to_variant_full(flags: DeviceFlags): GLib.Variant;
static array_from_variant(value: GLib.Variant): Device[];
static flag_from_string(device_flag: string): DeviceFlags;
static flag_to_string(device_flag: DeviceFlags): string;
static from_variant(value: GLib.Variant): Device;
}
export class Release extends GObject.Object {constructor(config?: properties);
add_category(category: string): void;
add_checksum(checksum: string): void;
add_flag(flag: ReleaseFlags): void;
add_issue(issue: string): void;
add_metadata(hash: GLib.HashTable): void;
add_metadata_item(key: string, value: string): void;
get_appstream_id(): string;
get_categories(): string[];
get_checksums(): string[];
get_description(): string;
get_details_url(): string;
get_filename(): string;
get_flags(): ReleaseFlags;
get_homepage(): string;
get_install_duration(): number;
get_issues(): string[];
get_license(): string;
get_metadata(): GLib.HashTable;
get_metadata_item(key: string): string;
get_name(): string;
get_name_variant_suffix(): string;
get_protocol(): string;
get_remote_id(): string;
get_size(): number;
get_source_url(): string;
get_summary(): string;
get_trust_flags(): TrustFlags;
get_update_message(): string;
get_uri(): string;
get_vendor(): string;
get_version(): string;
has_category(category: string): boolean;
has_checksum(checksum: string): boolean;
has_flag(flag: ReleaseFlags): boolean;
remove_flag(flag: ReleaseFlags): void;
set_appstream_id(appstream_id: string): void;
set_description(description: string): void;
set_details_url(details_url: string): void;
set_filename(filename: string): void;
set_flags(flags: ReleaseFlags): void;
set_homepage(homepage: string): void;
set_install_duration(duration: number): void;
set_license(license: string): void;
set_name(name: string): void;
set_name_variant_suffix(name_variant_suffix: string): void;
set_protocol(protocol: string): void;
set_remote_id(remote_id: string): void;
set_size(size: number): void;
set_source_url(source_url: string): void;
set_summary(summary: string): void;
set_trust_flags(trust_flags: TrustFlags): void;
set_update_message(update_message: string): void;
set_uri(uri: string): void;
set_vendor(vendor: string): void;
set_version(version: string): void;
to_json(builder: unknown): void;
to_string(): string;
to_variant(): GLib.Variant;
static array_from_variant(value: GLib.Variant): Release[];
static flag_from_string(release_flag: string): ReleaseFlags;
static flag_to_string(release_flag: ReleaseFlags): string;
static from_variant(value: GLib.Variant): Release;
}
export class Remote extends GObject.Object {constructor(config?: properties);
approval_required: boolean;
enabled: boolean;
id: string;
build_firmware_uri(url: string): string;
get_age(): number;
get_agreement(): string;
get_approval_required(): boolean;
get_checksum(): string;
get_enabled(): boolean;
get_filename_cache(): string;
get_filename_cache_sig(): string;
get_filename_source(): string;
get_firmware_base_uri(): string;
get_id(): string;
get_keyring_kind(): KeyringKind;
get_kind(): RemoteKind;
get_metadata_uri(): string;
get_metadata_uri_sig(): string;
get_order_after(): string[];
get_order_before(): string[];
get_password(): string;
get_priority(): number;
get_remotes_dir(): string;
get_report_uri(): string;
get_title(): string;
get_username(): string;
load_from_filename(filename: string, cancellable: Gio.Cancellable | null): boolean;
set_agreement(agreement: string): void;
set_mtime(mtime: number): void;
set_priority(priority: number): void;
set_remotes_dir(directory: string): void;
to_variant(): GLib.Variant;
static array_from_variant(value: GLib.Variant): Remote[];
static from_variant(value: GLib.Variant): Remote;
static kind_from_string(kind: string): RemoteKind;
static kind_to_string(kind: RemoteKind): string;
}
export class ClientClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly changed: unknown;
readonly status_changed: unknown;
readonly device_added: unknown;
readonly device_removed: unknown;
readonly device_changed: unknown;
readonly _fwupd_reserved1: unknown;
readonly _fwupd_reserved2: unknown;
readonly _fwupd_reserved3: unknown;
readonly _fwupd_reserved4: unknown;
readonly _fwupd_reserved5: unknown;
readonly _fwupd_reserved6: unknown;
readonly _fwupd_reserved7: unknown;
}
export class DeviceClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _fwupd_reserved1: unknown;
readonly _fwupd_reserved2: unknown;
readonly _fwupd_reserved3: unknown;
readonly _fwupd_reserved4: unknown;
readonly _fwupd_reserved5: unknown;
readonly _fwupd_reserved6: unknown;
readonly _fwupd_reserved7: unknown;
}
export class ReleaseClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _fwupd_reserved1: unknown;
readonly _fwupd_reserved2: unknown;
readonly _fwupd_reserved3: unknown;
readonly _fwupd_reserved4: unknown;
readonly _fwupd_reserved5: unknown;
readonly _fwupd_reserved6: unknown;
readonly _fwupd_reserved7: unknown;
}
export class RemoteClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _fwupd_reserved1: unknown;
readonly _fwupd_reserved2: unknown;
readonly _fwupd_reserved3: unknown;
readonly _fwupd_reserved4: unknown;
readonly _fwupd_reserved5: unknown;
readonly _fwupd_reserved6: unknown;
readonly _fwupd_reserved7: unknown;
}