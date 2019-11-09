
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Flatpak from "flatpak";
/**
 * flatpak.d.ts
 */
type properties = { [key: string]: any };
export type ProgressCallback = (status: string, progress: number, estimating: boolean, user_data: object | null) => void;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
/**
 * 
 */
export function error_quark(): GLib.Quark;
/**
 * Returns the canonical name for the arch of the current machine.
 */
export function get_default_arch(): string;
/**
 * Returns the canonical names for the arches that are supported (i.e. ca
 * n run)
 * on the current machine, in order of priority (default is first).
 */
export function get_supported_arches(): string[];
/**
 * Lists the system installations according to the current configuration 
 * and current
 * availability (e.g. doesn't return a configured installation if not rea
 * chable).
 */
export function get_system_installations(cancellable: Gio.Cancellable | null): Installation[];
/**
 * 
 */
export function portal_error_quark(): GLib.Quark;
/**
 * Converts the operation type to a string.
 */
export function transaction_operation_type_to_string(kind: TransactionOperationType): string;
export enum Error {
    ALREADY_INSTALLED = 0,
    NOT_INSTALLED = 1,
    ONLY_PULLED = 2,
    DIFFERENT_REMOTE = 3,
    ABORTED = 4,
    SKIPPED = 5,
    NEED_NEW_FLATPAK = 6,
    REMOTE_NOT_FOUND = 7,
    RUNTIME_NOT_FOUND = 8,
    DOWNGRADE = 9,
    INVALID_REF = 10,
    INVALID_DATA = 11,
    UNTRUSTED = 12,
    SETUP_FAILED = 13,
    EXPORT_FAILED = 14,
    REMOTE_USED = 15,
    RUNTIME_USED = 16,
    INVALID_NAME = 17,
    OUT_OF_SPACE = 18,
    WRONG_USER = 19,
    NOT_CACHED = 20,
    REF_NOT_FOUND = 21,
}
export enum PortalError {
    FAILED = 0,
    INVALID_ARGUMENT = 1,
    NOT_FOUND = 2,
    EXISTS = 3,
    NOT_ALLOWED = 4,
    CANCELLED = 5,
    WINDOW_DESTROYED = 6,
}
export enum RefKind {
    APP = 0,
    RUNTIME = 1,
}
export enum RemoteType {
    STATIC = 0,
    USB = 1,
    LAN = 2,
}
export enum StorageType {
    DEFAULT = 0,
    HARD_DISK = 1,
    SDCARD = 2,
    MMC = 3,
    NETWORK = 4,
}
export enum TransactionOperationType {
    INSTALL = 0,
    UPDATE = 1,
    INSTALL_BUNDLE = 2,
    UNINSTALL = 3,
    LAST_TYPE = 4,
}
export enum TransactionRemoteReason {
    GENERIC_REPO = 0,
    RUNTIME_DEPS = 1,
}
export enum InstallFlags {
    NONE = 0,
    NO_STATIC_DELTAS = 1,
    NO_DEPLOY = 4,
    NO_PULL = 8,
    NO_TRIGGERS = 16,
}
export enum LaunchFlags {
    NONE = 0,
    DO_NOT_REAP = 1,
}
export enum QueryFlags {
    NONE = 0,
    ONLY_CACHED = 1,
}
export enum TransactionErrorDetails {
    FATAL = 1,
}
export enum TransactionResult {
    CHANGE = 1,
}
export enum UninstallFlags {
    NONE = 0,
    NO_PRUNE = 1,
    NO_TRIGGERS = 2,
}
export enum UpdateFlags {
    NONE = 0,
    NO_DEPLOY = 1,
    NO_PULL = 2,
    NO_STATIC_DELTAS = 4,
    NO_PRUNE = 8,
    NO_TRIGGERS = 16,
}
export class BundleRef extends Ref {constructor(config?: properties);
file: Gio.File;
get_appstream(): GLib.Bytes;
get_file(): Gio.File;
get_icon(size: number): GLib.Bytes;
get_installed_size(): number;
get_metadata(): GLib.Bytes;
get_origin(): string;
get_runtime_repo_url(): string;
}
export class Installation extends GObject.Object {constructor(config?: properties);
static new_for_path(path: Gio.File, user: boolean, cancellable: Gio.Cancellable | null): Installation;
static new_system(cancellable: Gio.Cancellable | null): Installation;
static new_system_with_id(id: string | null, cancellable: Gio.Cancellable | null): Installation;
static new_user(cancellable: Gio.Cancellable | null): Installation;
add_remote(remote: Remote, if_needed: boolean, cancellable: Gio.Cancellable | null): boolean;
cleanup_local_refs_sync(cancellable: Gio.Cancellable | null): boolean;
create_monitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor;
drop_caches(cancellable: Gio.Cancellable | null): boolean;
fetch_remote_metadata_sync(remote_name: string, ref: Ref, cancellable: Gio.Cancellable | null): GLib.Bytes;
fetch_remote_ref_sync(remote_name: string, kind: RefKind, name: string, arch: string | null, branch: string | null, cancellable: Gio.Cancellable | null): RemoteRef;
fetch_remote_ref_sync_full(remote_name: string, kind: RefKind, name: string, arch: string | null, branch: string | null, flags: QueryFlags, cancellable: Gio.Cancellable | null): RemoteRef;
fetch_remote_size_sync(remote_name: string, ref: Ref, cancellable: Gio.Cancellable | null): [boolean, number,number];
get_config(key: string, cancellable: Gio.Cancellable | null): string;
get_current_installed_app(name: string, cancellable: Gio.Cancellable | null): InstalledRef;
get_default_languages(): string[];
get_display_name(): string;
get_id(): string;
get_installed_ref(kind: RefKind, name: string, arch: string | null, branch: string | null, cancellable: Gio.Cancellable | null): InstalledRef;
get_is_user(): boolean;
get_min_free_space_bytes(): [boolean, number];
get_no_interaction(): boolean;
get_path(): Gio.File;
get_priority(): number;
get_remote_by_name(name: string, cancellable: Gio.Cancellable | null): Remote;
get_storage_type(): StorageType;
install(remote_name: string, kind: RefKind, name: string, arch: string | null, branch: string | null, progress: ProgressCallback | null, progress_data: object | null, cancellable: Gio.Cancellable | null): InstalledRef;
install_bundle(file: Gio.File, progress: ProgressCallback | null, progress_data: object | null, cancellable: Gio.Cancellable | null): InstalledRef;
install_full(flags: InstallFlags, remote_name: string, kind: RefKind, name: string, arch: string | null, branch: string | null, subpaths: string[] | null, progress: ProgressCallback | null, progress_data: object | null, cancellable: Gio.Cancellable | null): InstalledRef;
install_ref_file(ref_file_data: GLib.Bytes, cancellable: Gio.Cancellable | null): RemoteRef;
launch(name: string, arch: string | null, branch: string | null, commit: string | null, cancellable: Gio.Cancellable | null): boolean;
launch_full(flags: LaunchFlags, name: string, arch: string | null, branch: string | null, commit: string | null, instance_out: Instance | null, cancellable: Gio.Cancellable | null): boolean;
list_installed_refs(cancellable: Gio.Cancellable | null): InstalledRef[];
list_installed_refs_by_kind(kind: RefKind, cancellable: Gio.Cancellable | null): InstalledRef[];
list_installed_refs_for_update(cancellable: Gio.Cancellable | null): InstalledRef[];
list_installed_related_refs_sync(remote_name: string, ref: string, cancellable: Gio.Cancellable | null): RelatedRef[];
list_remote_refs_sync(remote_or_uri: string, cancellable: Gio.Cancellable | null): RemoteRef[];
list_remote_refs_sync_full(remote_or_uri: string, flags: QueryFlags, cancellable: Gio.Cancellable | null): RemoteRef[];
list_remote_related_refs_sync(remote_name: string, ref: string, cancellable: Gio.Cancellable | null): RelatedRef[];
list_remotes(cancellable: Gio.Cancellable | null): Remote[];
list_remotes_by_type(types: RemoteType[], num_types: number, cancellable: Gio.Cancellable | null): Remote[];
list_unused_refs(arch: string | null, cancellable: Gio.Cancellable | null): InstalledRef[];
load_app_overrides(app_id: string, cancellable: Gio.Cancellable | null): string;
modify_remote(remote: Remote, cancellable: Gio.Cancellable | null): boolean;
prune_local_repo(cancellable: Gio.Cancellable | null): boolean;
remove_local_ref_sync(remote_name: string, ref: string, cancellable: Gio.Cancellable | null): boolean;
remove_remote(name: string, cancellable: Gio.Cancellable | null): boolean;
run_triggers(cancellable: Gio.Cancellable | null): boolean;
set_config_sync(key: string, value: string, cancellable: Gio.Cancellable | null): boolean;
set_no_interaction(no_interaction: boolean): void;
uninstall(kind: RefKind, name: string, arch: string | null, branch: string | null, progress: ProgressCallback | null, progress_data: object | null, cancellable: Gio.Cancellable | null): boolean;
uninstall_full(flags: UninstallFlags, kind: RefKind, name: string, arch: string | null, branch: string | null, progress: ProgressCallback | null, progress_data: object | null, cancellable: Gio.Cancellable | null): boolean;
update(flags: UpdateFlags, kind: RefKind, name: string, arch: string | null, branch: string | null, progress: ProgressCallback | null, progress_data: object | null, cancellable: Gio.Cancellable | null): InstalledRef;
update_appstream_full_sync(remote_name: string, arch: string | null, progress: ProgressCallback | null, progress_data: object | null, out_changed: boolean | null, cancellable: Gio.Cancellable | null): boolean;
update_appstream_sync(remote_name: string, arch: string | null, out_changed: boolean | null, cancellable: Gio.Cancellable | null): boolean;
update_full(flags: UpdateFlags, kind: RefKind, name: string, arch: string | null, branch: string | null, subpaths: string[] | null, progress: ProgressCallback | null, progress_data: object | null, cancellable: Gio.Cancellable | null): InstalledRef;
update_remote_sync(name: string, cancellable: Gio.Cancellable | null): boolean;
}
export class InstalledRef  {constructor(config?: properties);
appdata_license: string;
appdata_name: string;
appdata_summary: string;
appdata_version: string;
deploy_dir: string;
end_of_life: string;
end_of_life_rebase: string;
installed_size: number;
is_current: boolean;
latest_commit: string;
origin: string;
subpaths: string[];
get_appdata_license(): string;
get_appdata_name(): string;
get_appdata_summary(): string;
get_appdata_version(): string;
get_deploy_dir(): string;
get_eol(): string;
get_eol_rebase(): string;
get_installed_size(): number;
get_is_current(): boolean;
get_latest_commit(): string | null;
get_origin(): string;
get_subpaths(): string[];
load_appdata(cancellable: Gio.Cancellable | null): GLib.Bytes;
load_metadata(cancellable: Gio.Cancellable | null): GLib.Bytes;
}
export class Instance  {constructor(config?: properties);
get_app(): string;
get_arch(): string;
get_branch(): string;
get_child_pid(): number;
get_commit(): string;
get_id(): string;
get_info(): GLib.KeyFile;
get_pid(): number;
get_runtime(): string;
get_runtime_commit(): string;
is_running(): boolean;
static get_all(): Instance[];
}
export class Ref  {constructor(config?: properties);
arch: string;
branch: string;
collection_id: string;
commit: string;
kind: RefKind;
name: string;
format_ref(): string;
get_arch(): string;
get_branch(): string;
get_collection_id(): string;
get_commit(): string;
get_kind(): RefKind;
get_name(): string;
static parse(ref: string): Ref;
}
export class RelatedRef  {constructor(config?: properties);
subpaths: string[];
get_subpaths(): string[];
should_autoprune(): boolean;
should_delete(): boolean;
should_download(): boolean;
}
export class Remote extends GObject.Object {constructor(config?: properties);
name: string;
type: RemoteType;static new_from_file(name: string, data: GLib.Bytes): Remote;
get_appstream_dir(arch: string | null): Gio.File;
get_appstream_timestamp(arch: string | null): Gio.File;
get_collection_id(): string | null;
get_comment(): string;
get_default_branch(): string;
get_description(): string;
get_disabled(): boolean;
get_filter(): string;
get_gpg_verify(): boolean;
get_homepage(): string;
get_icon(): string;
get_main_ref(): string;
get_name(): string;
get_nodeps(): boolean;
get_noenumerate(): boolean;
get_prio(): number;
get_remote_type(): RemoteType;
get_title(): string;
get_url(): string;
set_collection_id(collection_id: string | null): void;
set_comment(comment: string): void;
set_default_branch(default_branch: string): void;
set_description(description: string): void;
set_disabled(disabled: boolean): void;
set_filter(filter_path: string): void;
set_gpg_key(gpg_key: GLib.Bytes): void;
set_gpg_verify(gpg_verify: boolean): void;
set_homepage(homepage: string): void;
set_icon(icon: string): void;
set_main_ref(main_ref: string): void;
set_nodeps(nodeps: boolean): void;
set_noenumerate(noenumerate: boolean): void;
set_prio(prio: number): void;
set_title(title: string): void;
set_url(url: string): void;
}
export class RemoteRef  {constructor(config?: properties);
download_size: number;
end_of_life: string;
end_of_life_rebase: string;
installed_size: number;
metadata: GLib.Bytes;
remote_name: string;
get_download_size(): number;
get_eol(): string;
get_eol_rebase(): string;
get_installed_size(): number;
get_metadata(): GLib.Bytes | null;
get_remote_name(): string;
}
export class Transaction extends GObject.Object {constructor(config?: properties);
installation: Installation;static new_for_installation(installation: Installation, cancellable: Gio.Cancellable | null): Transaction;
add_default_dependency_sources(): void;
add_dependency_source(installation: Installation): void;
add_install(remote: string, ref: string, subpaths: string[] | null): boolean;
add_install_bundle(file: Gio.File, gpg_data: GLib.Bytes | null): boolean;
add_install_flatpakref(flatpakref_data: GLib.Bytes): boolean;
add_rebase(remote: string, ref: string, subpaths: string, previous_ids: string[] | null): boolean;
add_uninstall(ref: string): boolean;
add_update(ref: string, subpaths: string[] | null, commit: string | null): boolean;
get_current_operation(): TransactionOperation;
get_installation(): Installation;
get_operations(): GLib.List;
is_empty(): boolean;
run(cancellable: Gio.Cancellable | null): boolean;
set_default_arch(arch: string): void;
set_disable_dependencies(disable_dependencies: boolean): void;
set_disable_prune(disable_prune: boolean): void;
set_disable_related(disable_related: boolean): void;
set_disable_static_deltas(disable_static_deltas: boolean): void;
set_force_uninstall(force_uninstall: boolean): void;
set_no_deploy(no_deploy: boolean): void;
set_no_pull(no_pull: boolean): void;
set_reinstall(reinstall: boolean): void;
vfunc_add_new_remote(reason: TransactionRemoteReason, from_id: string, remote_name: string, url: string): boolean;
vfunc_choose_remote_for_ref(for_ref: string, runtime_ref: string, remotes: string): number;
vfunc_end_of_lifed(ref: string, reason: string, rebase: string): void;
vfunc_end_of_lifed_with_rebase(remote: string, ref: string, reason: string, rebased_to_ref: string, previous_ids: string): boolean;
vfunc_new_operation(operation: TransactionOperation, progress: TransactionProgress): void;
vfunc_operation_done(operation: TransactionOperation, commit: string, details: TransactionResult): void;
vfunc_operation_error(operation: TransactionOperation, error: GLib.Error, detail: TransactionErrorDetails): boolean;
vfunc_ready(): boolean;
vfunc_run(cancellable: Gio.Cancellable | null): boolean;
}
export class TransactionOperation  {constructor(config?: properties);
get_bundle_path(): Gio.File;
get_commit(): string;
get_download_size(): number;
get_installed_size(): number;
get_metadata(): GLib.KeyFile;
get_old_metadata(): GLib.KeyFile;
get_operation_type(): TransactionOperationType;
get_ref(): string;
get_remote(): string;
}
export class TransactionProgress  {constructor(config?: properties);
get_bytes_transferred(): number;
get_is_estimating(): boolean;
get_progress(): number;
get_start_time(): number;
get_status(): string;
set_update_frequency(update_frequency: number): void;
}
export class BundleRefClass  {constructor(config?: properties);
readonly parent_class: RefClass;
}
export class InstallationClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class InstalledRefClass  {constructor(config?: properties);
readonly parent_class: RefClass;
}
export class InstanceClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class RefClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class RelatedRefClass  {constructor(config?: properties);
readonly parent_class: RefClass;
}
export class RemoteClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class RemoteRefClass  {constructor(config?: properties);
readonly parent_class: RefClass;
}
export class TransactionClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly new_operation: unknown;
readonly operation_done: unknown;
readonly operation_error: unknown;
readonly choose_remote_for_ref: unknown;
readonly end_of_lifed: unknown;
readonly ready: unknown;
readonly add_new_remote: unknown;
readonly run: unknown;
readonly end_of_lifed_with_rebase: unknown;
readonly padding: object[];
}
export class TransactionOperationClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class TransactionProgressClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}