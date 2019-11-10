
/**
 * ostree
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
/**
 * 
 */
type properties = { [key: string]: any };
type GType = object;
export const BUILT_FEATURES: string;
export const COMMIT_GVARIANT_STRING: string;
export const COMMIT_META_KEY_COLLECTION_BINDING: string;
export const COMMIT_META_KEY_ENDOFLIFE: string;
export const COMMIT_META_KEY_ENDOFLIFE_REBASE: string;
export const COMMIT_META_KEY_REF_BINDING: string;
export const COMMIT_META_KEY_SOURCE_TITLE: string;
export const COMMIT_META_KEY_VERSION: string;
export const DIRMETA_GVARIANT_STRING: string;
export const FILEMETA_GVARIANT_STRING: string;
export const MAX_METADATA_SIZE: number;
export const MAX_METADATA_WARN_SIZE: number;
export const META_KEY_DEPLOY_COLLECTION_ID: string;
export const ORIGIN_TRANSIENT_GROUP: string;
export const RELEASE_VERSION: number;
export const REPO_METADATA_REF: string;
export const SHA256_DIGEST_LEN: number;
export const SHA256_STRING_LEN: number;
export const SUMMARY_GVARIANT_STRING: string;
export const SUMMARY_SIG_GVARIANT_STRING: string;
export const TIMESTAMP: number;
export const TREE_GVARIANT_STRING: string;
export const VERSION: number;
export const VERSION_S: string;
export const YEAR_VERSION: number;
/**
 * In many cases using libostree, a program may need to "break"
 * hardlinks by performing a copy.  For example, in order to
 * logically append to a file.
 * This function performs full copying, including e.g. extended
 * attributes and permissions of both regular files and symbolic links.
 * If the file is not hardlinked, this function does nothing and
 * returns successfully.
 * This function does not perform synchronization via `fsync()` or
 * `fdatasync()`; the idea is this will commonly be done as part
 * of an `ostree_repo_commit_transaction()`, which itself takes
 * care of synchronization.
 */
export function break_hardlink(dfd: number, path: string, skip_xattrs: boolean, cancellable: Gio.Cancellable | null): boolean;
/**
 * 
 */
export function check_version(required_year: number, required_release: number): boolean;
/**
 * 
 */
export function checksum_b64_from_bytes(csum: number[]): string;
/**
 * 
 */
export function checksum_b64_to_bytes(checksum: string): number[];
/**
 * 
 */
export function checksum_bytes_peek(bytes: GLib.Variant): number[];
/**
 * Like ostree_checksum_bytes_peek(), but also throws @error.
 */
export function checksum_bytes_peek_validate(bytes: GLib.Variant): number[];
/**
 * Compute the OSTree checksum for a given file.
 */
export function checksum_file(f: Gio.File, objtype: ObjectType, cancellable: Gio.Cancellable | null): [boolean, number[]];
/**
 * Asynchronously compute the OSTree checksum for a given file;
 * complete with ostree_checksum_file_async_finish().
 */
export function checksum_file_async(f: Gio.File, objtype: ObjectType, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Finish computing the OSTree checksum for a given file; see
 * ostree_checksum_file_async().
 */
export function checksum_file_async_finish(f: Gio.File, result: Gio.AsyncResult): [boolean, number[]];
/**
 * Compute the OSTree checksum for a given file. This is an fd-relative v
 * ersion
 * of ostree_checksum_file() which also takes flags and fills in a caller
 * allocated buffer.
 */
export function checksum_file_at(dfd: number, path: string, stbuf: object | null, objtype: ObjectType, flags: ChecksumFlags, out_checksum: string, cancellable: Gio.Cancellable | null): boolean;
/**
 * Compute the OSTree checksum for a given input.
 */
export function checksum_file_from_input(file_info: Gio.FileInfo, xattrs: GLib.Variant | null, _in: Gio.InputStream | null, objtype: ObjectType, cancellable: Gio.Cancellable | null): [boolean, number[]];
/**
 * 
 */
export function checksum_from_bytes(csum: number[]): string;
/**
 * 
 */
export function checksum_from_bytes_v(csum_v: GLib.Variant): string;
/**
 * Convert @checksum from a string to binary in-place, without
 * allocating memory.  Use this function in hot code paths.
 */
export function checksum_inplace_to_bytes(checksum: string, buf: number): void;
/**
 * 
 */
export function checksum_to_bytes(checksum: string): number[];
/**
 * 
 */
export function checksum_to_bytes_v(checksum: string): GLib.Variant;
/**
 * 
 */
export function cmd__private__(): CmdPrivateVTable;
/**
 * Compare two binary checksums, using memcmp().
 */
export function cmp_checksum_bytes(a: number, b: number): number;
/**
 * Copy an array of #OstreeCollectionRefs, including deep copies of all i
 * ts
 * elements. @refs must be %NULL-terminated; it may be empty, but must no
 * t be
 * %NULL.
 */
export function collection_ref_dupv(refs: CollectionRef[]): CollectionRef[];
/**
 * Compare @ref1 and @ref2 and return %TRUE if they have the same collect
 * ion ID and
 * ref name, and %FALSE otherwise. Both @ref1 and @ref2 must be non-%NULL
 * .
 */
export function collection_ref_equal(ref1: object, ref2: object): boolean;
/**
 * Free the given array of @refs, including freeing all its elements. @re
 * fs
 * must be %NULL-terminated; it may be empty, but must not be %NULL.
 */
export function collection_ref_freev(refs: CollectionRef[]): void;
/**
 * Hash the given @ref. This function is suitable for use with #GHashTabl
 * e.
 * @ref must be non-%NULL.
 */
export function collection_ref_hash(ref: object): number;
/**
 * There are use cases where one wants a checksum just of the content of 
 * a
 * commit. OSTree commits by default capture the current timestamp, and m
 * ay have
 * additional metadata, which means that re-committing identical content
 * often results in a new checksum.
 * By comparing checksums of content, it's possible to easily distinguish
 * cases where nothing actually changed.
 * The content checksums is simply defined as `SHA256(root dirtree_checks
 * um || root_dirmeta_checksum)`,
 * i.e. the SHA-256 of the root "dirtree" object's checksum concatenated 
 * with the
 * root "dirmeta" checksum (both in binary form, not hexadecimal).
 */
export function commit_get_content_checksum(commit_variant: GLib.Variant): string | null;
/**
 * 
 */
export function commit_get_parent(commit_variant: GLib.Variant): string;
/**
 * 
 */
export function commit_get_timestamp(commit_variant: GLib.Variant): number;
/**
 * A thin wrapper for ostree_content_stream_parse(); this function
 * converts an object content stream back into components.
 */
export function content_file_parse(compressed: boolean, content_path: Gio.File, trusted: boolean, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream,Gio.FileInfo,GLib.Variant];
/**
 * A thin wrapper for ostree_content_stream_parse(); this function
 * converts an object content stream back into components.
 */
export function content_file_parse_at(compressed: boolean, parent_dfd: number, path: string, trusted: boolean, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream,Gio.FileInfo,GLib.Variant];
/**
 * The reverse of ostree_raw_file_to_content_stream(); this function
 * converts an object content stream back into components.
 */
export function content_stream_parse(compressed: boolean, input: Gio.InputStream, input_length: number, trusted: boolean, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream,Gio.FileInfo,GLib.Variant];
/**
 * 
 */
export function create_directory_metadata(dir_info: Gio.FileInfo, xattrs: GLib.Variant | null): GLib.Variant;
/**
 * Compute the difference between directory @a and @b as 3 separate
 * sets of #OstreeDiffItem in @modified, @removed, and @added.
 */
export function diff_dirs(flags: DiffFlags, a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[], cancellable: Gio.Cancellable | null): boolean;
/**
 * Compute the difference between directory @a and @b as 3 separate
 * sets of #OstreeDiffItem in @modified, @removed, and @added.
 */
export function diff_dirs_with_options(flags: DiffFlags, a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[], options: DiffDirsOptions | null, cancellable: Gio.Cancellable | null): boolean;
/**
 * Print the contents of a diff to stdout.
 */
export function diff_print(a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[]): void;
/**
 * 
 */
export function gpg_error_quark(): GLib.Quark;
/**
 * Use this function with #GHashTable and ostree_object_name_serialize().
 */
export function hash_object_name(a: object | null): number;
/**
 * Frees the OstreeKernelArgs structure pointed by *loc
 */
export function kernel_args_cleanup(loc: object | null): void;
/**
 * 
 */
export function metadata_variant_type(objtype: ObjectType): GLib.VariantType;
/**
 * Reverse ostree_object_to_string().
 */
export function object_from_string(str: string): [string,ObjectType];
/**
 * Reverse ostree_object_name_serialize().  Note that @out_checksum is
 * only valid for the lifetime of @variant, and must not be freed.
 */
export function object_name_deserialize(variant: GLib.Variant): [string,ObjectType];
/**
 * 
 */
export function object_name_serialize(checksum: string, objtype: ObjectType): GLib.Variant;
/**
 * 
 */
export function object_to_string(checksum: string, objtype: ObjectType): string;
/**
 * The reverse of ostree_object_type_to_string().
 */
export function object_type_from_string(str: string): ObjectType;
/**
 * Serialize @objtype to a string; this is used for file extensions.
 */
export function object_type_to_string(objtype: ObjectType): string;
/**
 * Split a refspec like `gnome-ostree:gnome-ostree/buildmaster` or just
 * `gnome-ostree/buildmaster` into two parts. In the first case, @out_rem
 * ote
 * will be set to `gnome-ostree`, and @out_ref to `gnome-ostree/buildmast
 * er`.
 * In the second case (a local ref), @out_remote will be %NULL, and @out_
 * ref
 * will be `gnome-ostree/buildmaster`. In both cases, %TRUE will be retur
 * ned.
 */
export function parse_refspec(refspec: string): [boolean, string | null,string | null];
/**
 * Convert from a "bare" file representation into an
 * OSTREE_OBJECT_TYPE_FILE stream suitable for ostree pull.
 */
export function raw_file_to_archive_z2_stream(input: Gio.InputStream, file_info: Gio.FileInfo, xattrs: GLib.Variant | null, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream];
/**
 * Like ostree_raw_file_to_archive_z2_stream(), but supports an extensibl
 * e set
 * of flags. The following flags are currently defined:
 * - `compression-level` (`i`): Level of compression to use, 0–9, with 0 
 * being
 *   the least compression, and <0 giving the default level (currently 6)
 * .
 */
export function raw_file_to_archive_z2_stream_with_options(input: Gio.InputStream, file_info: Gio.FileInfo, xattrs: GLib.Variant | null, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream];
/**
 * Convert from a "bare" file representation into an
 * OSTREE_OBJECT_TYPE_FILE stream.  This is a fundamental operation
 * for writing data to an #OstreeRepo.
 */
export function raw_file_to_content_stream(input: Gio.InputStream, file_info: Gio.FileInfo, xattrs: GLib.Variant | null, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream,number];
/**
 * 
 */
export function repo_commit_traverse_iter_cleanup(p: object | null): void;
/**
 * A version of ostree_repo_finder_resolve_async() which queries one or m
 * ore
 * @finders in parallel and combines the results.
 */
export function repo_finder_resolve_all_async(finders: RepoFinder[], refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Get the results from a ostree_repo_finder_resolve_all_async() operatio
 * n.
 */
export function repo_finder_resolve_all_finish(result: Gio.AsyncResult): RepoFinderResult[];
/**
 * Free the given @results array, freeing each element and the container.
 */
export function repo_finder_result_freev(results: RepoFinderResult[]): void;
/**
 * Use this function to see if input strings are checksums.
 */
export function validate_checksum_string(sha256: string): boolean;
/**
 * Check whether the given @collection_id is valid. Return an error if it
 *  is
 * invalid or %NULL.
 * Valid collection IDs are reverse DNS names:
 *  * They are composed of 1 or more elements separated by a period (`.`)
 *  character.
 *    All elements must contain at least one character.
 *  * Each element must only contain the ASCII characters `[A-Z][a-z][0-9
 * ]_` and must not
 *    begin with a digit.
 *  * They must contain at least one `.` (period) character (and thus at 
 * least two elements).
 *  * They must not begin with a `.` (period) character.
 *  * They must not exceed 255 characters in length.
 * (This makes their format identical to D-Bus interface names, for consi
 * stency.)
 */
export function validate_collection_id(collection_id: string | null): boolean;
/**
 * 
 */
export function validate_remote_name(remote_name: string): boolean;
/**
 * 
 */
export function validate_rev(rev: string): boolean;
/**
 * 
 */
export function validate_structureof_checksum_string(checksum: string): boolean;
/**
 * Use this to validate the basic structure of @commit, independent of
 * any other objects it references.
 */
export function validate_structureof_commit(commit: GLib.Variant): boolean;
/**
 * 
 */
export function validate_structureof_csum_v(checksum: GLib.Variant): boolean;
/**
 * Use this to validate the basic structure of @dirmeta.
 */
export function validate_structureof_dirmeta(dirmeta: GLib.Variant): boolean;
/**
 * Use this to validate the basic structure of @dirtree, independent of
 * any other objects it references.
 */
export function validate_structureof_dirtree(dirtree: GLib.Variant): boolean;
/**
 * 
 */
export function validate_structureof_file_mode(mode: number): boolean;
/**
 * 
 */
export function validate_structureof_objtype(objtype: number): boolean;
export type RepoCheckoutFilter = (repo: Repo, path: string, stbuf: object | null, user_data: object | null) => RepoCheckoutFilterResult;
export type RepoCommitFilter = (repo: Repo, path: string, file_info: Gio.FileInfo, user_data: object | null) => RepoCommitFilterResult;
export type RepoCommitModifierXattrCallback = (repo: Repo, path: string, file_info: Gio.FileInfo, user_data: object | null) => GLib.Variant;
export type RepoImportArchiveTranslatePathname = (repo: Repo, stbuf: object | null, src_path: string, user_data: object | null) => string;
export type CollectionRefv = CollectionRef;
export type RepoFinderResultv = RepoFinderResult;
export enum DeploymentUnlockedState {
    NONE = 0,
    DEVELOPMENT = 1,
    HOTFIX = 2,
}
export enum GpgError {
    NO_SIGNATURE = 0,
    INVALID_SIGNATURE = 1,
    MISSING_KEY = 2,
}
export enum GpgSignatureAttr {
    VALID = 0,
    SIG_EXPIRED = 1,
    KEY_EXPIRED = 2,
    KEY_REVOKED = 3,
    KEY_MISSING = 4,
    FINGERPRINT = 5,
    TIMESTAMP = 6,
    EXP_TIMESTAMP = 7,
    PUBKEY_ALGO_NAME = 8,
    HASH_ALGO_NAME = 9,
    USER_NAME = 10,
    USER_EMAIL = 11,
    FINGERPRINT_PRIMARY = 12,
    KEY_EXP_TIMESTAMP = 13,
    KEY_EXP_TIMESTAMP_PRIMARY = 14,
}
export enum GpgSignatureFormatFlags {
    GPG_SIGNATURE_FORMAT_DEFAULT = 0,
}
export enum ObjectType {
    FILE = 1,
    DIR_TREE = 2,
    DIR_META = 3,
    COMMIT = 4,
    TOMBSTONE_COMMIT = 5,
    COMMIT_META = 6,
    PAYLOAD_LINK = 7,
}
export enum RepoCheckoutFilterResult {
    ALLOW = 0,
    SKIP = 1,
}
export enum RepoCheckoutMode {
    NONE = 0,
    USER = 1,
}
export enum RepoCheckoutOverwriteMode {
    NONE = 0,
    UNION_FILES = 1,
    ADD_FILES = 2,
    UNION_IDENTICAL = 3,
}
export enum RepoCommitFilterResult {
    ALLOW = 0,
    SKIP = 1,
}
export enum RepoCommitIterResult {
    ERROR = 0,
    END = 1,
    FILE = 2,
    DIR = 3,
}
export enum RepoMode {
    BARE = 0,
    ARCHIVE = 1,
    ARCHIVE_Z2 = 1,
    BARE_USER = 2,
    BARE_USER_ONLY = 3,
}
export enum RepoPruneFlags {
    NONE = 0,
    NO_PRUNE = 1,
    REFS_ONLY = 2,
}
export enum RepoRemoteChange {
    ADD = 0,
    ADD_IF_NOT_EXISTS = 1,
    DELETE = 2,
    DELETE_IF_EXISTS = 3,
    REPLACE = 4,
}
export enum StaticDeltaGenerateOpt {
    LOWLATENCY = 0,
    MAJOR = 1,
}
export enum ChecksumFlags {
    NONE = 0,
    IGNORE_XATTRS = 1,
}
export enum DiffFlags {
    NONE = 0,
    IGNORE_XATTRS = 1,
}
export enum RepoCommitModifierFlags {
    NONE = 0,
    SKIP_XATTRS = 1,
    GENERATE_SIZES = 2,
    CANONICAL_PERMISSIONS = 4,
    ERROR_ON_UNLABELED = 8,
    CONSUME = 16,
    DEVINO_CANONICAL = 32,
}
export enum RepoCommitState {
    NORMAL = 0,
    PARTIAL = 1,
    FSCK_PARTIAL = 2,
}
export enum RepoCommitTraverseFlags {
    REPO_COMMIT_TRAVERSE_FLAG_NONE = 1,
}
export enum RepoListObjectsFlags {
    LOOSE = 1,
    PACKED = 2,
    ALL = 4,
    NO_PARENTS = 8,
}
export enum RepoListRefsExtFlags {
    NONE = 0,
    ALIASES = 1,
    EXCLUDE_REMOTES = 2,
    EXCLUDE_MIRRORS = 4,
}
export enum RepoPullFlags {
    NONE = 0,
    MIRROR = 1,
    COMMIT_ONLY = 2,
    UNTRUSTED = 4,
    BAREUSERONLY_FILES = 8,
    TRUSTED_HTTP = 16,
}
export enum RepoResolveRevExtFlags {
    NONE = 0,
    LOCAL_ONLY = 1,
}
export enum SePolicyRestoreconFlags {
    NONE = 0,
    ALLOW_NOLABEL = 1,
    KEEP_EXISTING = 2,
}
export enum SysrootSimpleWriteDeploymentFlags {
    NONE = 0,
    RETAIN = 1,
    NOT_DEFAULT = 2,
    NO_CLEAN = 4,
    RETAIN_PENDING = 8,
    RETAIN_ROLLBACK = 16,
}
export enum SysrootUpgraderFlags {
    IGNORE_UNCONFIGURED = 2,
}
export enum SysrootUpgraderPullFlags {
    NONE = 0,
    ALLOW_OLDER = 1,
    SYNTHETIC = 2,
}
export class AsyncProgress extends GObject.Object {
    constructor(config?: properties);
    static new_and_connect(changed: object | null, user_data: object | null): AsyncProgress;
    static new_and_connect(...args: never[]): never;
    finish(): void;
    get_status(): string | null;
    get_uint(key: string): number;
    get_uint64(key: string): number;
    get_variant(key: string): GLib.Variant | null;
    set_status(status: string | null): void;
    set_uint(key: string, value: number): void;
    set_uint64(key: string, value: number): void;
    set_variant(key: string, value: GLib.Variant): void;
    vfunc_changed(user_data: object | null): void;
}
export class BootconfigParser extends GObject.Object {
    constructor(config?: properties);
    clone(): BootconfigParser;
    get(key: string): string;
    parse(path: Gio.File, cancellable: Gio.Cancellable | null): boolean;
    parse_at(dfd: number, path: string, cancellable: Gio.Cancellable | null): boolean;
    set(key: string, value: string): void;
    write(output: Gio.File, cancellable: Gio.Cancellable | null): boolean;
    write_at(dfd: number, path: string, cancellable: Gio.Cancellable | null): boolean;
}
export class ChecksumInputStream extends Gio.FilterInputStream {
    constructor(config?: properties);
    checksum: object;
}
export class Deployment extends GObject.Object {
    constructor(config?: properties);
    clone(): Deployment;
    equal(bp: Deployment): boolean;
    get_bootconfig(): BootconfigParser;
    get_bootcsum(): string;
    get_bootserial(): number;
    get_csum(): string;
    get_deployserial(): number;
    get_index(): number;
    get_origin(): GLib.KeyFile;
    get_origin_relpath(): string;
    get_osname(): string;
    get_unlocked(): DeploymentUnlockedState;
    is_pinned(): boolean;
    is_staged(): boolean;
    set_bootconfig(bootconfig: BootconfigParser): void;
    set_bootserial(index: number): void;
    set_index(index: number): void;
    set_origin(origin: GLib.KeyFile): void;
    static hash(v: object | null): number;
    static origin_remove_transient_state(origin: GLib.KeyFile): void;
    static unlocked_state_to_string(state: DeploymentUnlockedState): string;
}
export class GpgVerifyResult  {
    constructor(config?: properties);
    count_all(): number;
    count_valid(): number;
    describe(signature_index: number, output_buffer: GLib.String, line_prefix: string | null, flags: GpgSignatureFormatFlags): void;
    get(signature_index: number, attrs: GpgSignatureAttr[], n_attrs: number): GLib.Variant;
    get_all(signature_index: number): GLib.Variant;
    lookup(key_id: string): [boolean, number];
    require_valid_signature(): boolean;
    static describe_variant(variant: GLib.Variant, output_buffer: GLib.String, line_prefix: string | null, flags: GpgSignatureFormatFlags): void;
}
export class MutableTree extends GObject.Object {
    constructor(config?: properties);
    static new_from_checksum(repo: Repo, contents_checksum: string, metadata_checksum: string): MutableTree;
    static new_from_checksum(...args: never[]): never;
    check_error(): boolean;
    ensure_dir(name: string): [boolean, MutableTree];
    ensure_parent_dirs(split_path: string[], metadata_checksum: string): [boolean, MutableTree];
    fill_empty_from_dirtree(repo: Repo, contents_checksum: string, metadata_checksum: string): boolean;
    get_contents_checksum(): string;
    get_files(): GLib.HashTable;
    get_metadata_checksum(): string;
    get_subdirs(): GLib.HashTable;
    lookup(name: string): [boolean, string,MutableTree];
    remove(name: string, allow_noent: boolean): boolean;
    replace_file(name: string, checksum: string): boolean;
    set_contents_checksum(checksum: string): void;
    set_metadata_checksum(checksum: string): void;
    walk(split_path: string[], start: number): [boolean, MutableTree];
}
export class Repo extends GObject.Object {
    constructor(config?: properties);
    path: Gio.File;
    remotes_config_dir: string;
    sysroot_path: Gio.File;static new_default(): Repo;
    static new_default(...args: never[]): never;
    static new_for_sysroot_path(repo_path: Gio.File, sysroot_path: Gio.File): Repo;
    static new_for_sysroot_path(...args: never[]): never;
    abort_transaction(cancellable: Gio.Cancellable | null): boolean;
    add_gpg_signature_summary(key_id: string[], homedir: string | null, cancellable: Gio.Cancellable | null): boolean;
    append_gpg_signature(commit_checksum: string, signature_bytes: GLib.Bytes, cancellable: Gio.Cancellable | null): boolean;
    checkout_at(options: RepoCheckoutAtOptions | null, destination_dfd: number, destination_path: string, commit: string, cancellable: Gio.Cancellable | null): boolean;
    checkout_gc(cancellable: Gio.Cancellable | null): boolean;
    checkout_tree(mode: RepoCheckoutMode, overwrite_mode: RepoCheckoutOverwriteMode, destination: Gio.File, source: RepoFile, source_info: Gio.FileInfo, cancellable: Gio.Cancellable | null): boolean;
    commit_transaction(cancellable: Gio.Cancellable | null): [boolean, RepoTransactionStats | null];
    copy_config(): GLib.KeyFile;
    create(mode: RepoMode, cancellable: Gio.Cancellable | null): boolean;
    delete_object(objtype: ObjectType, sha256: string, cancellable: Gio.Cancellable | null): boolean;
    equal(b: Repo): boolean;
    find_remotes_async(refs: CollectionRef[], options: GLib.Variant | null, finders: RepoFinder[], progress: AsyncProgress | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    find_remotes_finish(result: Gio.AsyncResult): RepoFinderResult[];
    fsck_object(objtype: ObjectType, sha256: string, cancellable: Gio.Cancellable | null): boolean;
    get_bootloader(): string;
    get_collection_id(): string | null;
    get_config(): GLib.KeyFile;
    get_default_repo_finders(): string[];
    get_dfd(): number;
    get_disable_fsync(): boolean;
    get_min_free_space_bytes(): [boolean, number];
    get_mode(): RepoMode;
    get_parent(): Repo;
    get_path(): Gio.File;
    get_remote_boolean_option(remote_name: string, option_name: string, default_value: boolean): [boolean, boolean];
    get_remote_list_option(remote_name: string, option_name: string): [boolean, string[]];
    get_remote_option(remote_name: string, option_name: string, default_value: string | null): [boolean, string];
    gpg_verify_data(remote_name: string | null, data: GLib.Bytes, signatures: GLib.Bytes, keyringdir: Gio.File | null, extra_keyring: Gio.File | null, cancellable: Gio.Cancellable | null): GpgVerifyResult;
    has_object(objtype: ObjectType, checksum: string, cancellable: Gio.Cancellable | null): [boolean, boolean];
    hash(): number;
    import_object_from(source: Repo, objtype: ObjectType, checksum: string, cancellable: Gio.Cancellable | null): boolean;
    import_object_from_with_trust(source: Repo, objtype: ObjectType, checksum: string, trusted: boolean, cancellable: Gio.Cancellable | null): boolean;
    is_system(): boolean;
    is_writable(): boolean;
    list_collection_refs(match_collection_id: string | null, flags: RepoListRefsExtFlags, cancellable: Gio.Cancellable | null): [boolean, GLib.HashTable];
    list_commit_objects_starting_with(start: string, cancellable: Gio.Cancellable | null): [boolean, GLib.HashTable];
    list_objects(flags: RepoListObjectsFlags, cancellable: Gio.Cancellable | null): [boolean, GLib.HashTable];
    list_refs(refspec_prefix: string | null, cancellable: Gio.Cancellable | null): [boolean, GLib.HashTable];
    list_refs_ext(refspec_prefix: string | null, flags: RepoListRefsExtFlags, cancellable: Gio.Cancellable | null): [boolean, GLib.HashTable];
    list_static_delta_names(cancellable: Gio.Cancellable | null): [boolean, string[]];
    load_commit(checksum: string): [boolean, GLib.Variant | null,RepoCommitState | null];
    load_file(checksum: string, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream | null,Gio.FileInfo | null,GLib.Variant | null];
    load_object_stream(objtype: ObjectType, checksum: string, cancellable: Gio.Cancellable | null): [boolean, Gio.InputStream,number];
    load_variant(objtype: ObjectType, sha256: string): [boolean, GLib.Variant];
    load_variant_if_exists(objtype: ObjectType, sha256: string): [boolean, GLib.Variant];
    mark_commit_partial(checksum: string, is_partial: boolean): boolean;
    mark_commit_partial_reason(checksum: string, is_partial: boolean, in_state: RepoCommitState): boolean;
    open(cancellable: Gio.Cancellable | null): boolean;
    prepare_transaction(cancellable: Gio.Cancellable | null): [boolean, boolean | null];
    prune(flags: RepoPruneFlags, depth: number, cancellable: Gio.Cancellable | null): [boolean, number,number,number];
    prune_from_reachable(options: RepoPruneOptions, cancellable: Gio.Cancellable | null): [boolean, number,number,number];
    prune_static_deltas(commit: string | null, cancellable: Gio.Cancellable | null): boolean;
    pull(remote_name: string, refs_to_fetch: string[] | null, flags: RepoPullFlags, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): boolean;
    pull_from_remotes_async(results: RepoFinderResult[], options: GLib.Variant | null, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    pull_from_remotes_finish(result: Gio.AsyncResult): boolean;
    pull_one_dir(remote_name: string, dir_to_pull: string, refs_to_fetch: string[] | null, flags: RepoPullFlags, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): boolean;
    pull_with_options(remote_name_or_baseurl: string, options: GLib.Variant, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): boolean;
    query_object_storage_size(objtype: ObjectType, sha256: string, cancellable: Gio.Cancellable | null): [boolean, number];
    read_commit(ref: string, cancellable: Gio.Cancellable | null): [boolean, Gio.File,string];
    read_commit_detached_metadata(checksum: string, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant];
    regenerate_summary(additional_metadata: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;
    reload_config(cancellable: Gio.Cancellable | null): boolean;
    remote_add(name: string, url: string, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;
    remote_change(sysroot: Gio.File | null, changeop: RepoRemoteChange, name: string, url: string, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;
    remote_delete(name: string, cancellable: Gio.Cancellable | null): boolean;
    remote_fetch_summary(name: string, cancellable: Gio.Cancellable | null): [boolean, GLib.Bytes | null,GLib.Bytes | null];
    remote_fetch_summary_with_options(name: string, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): [boolean, GLib.Bytes | null,GLib.Bytes | null];
    remote_get_gpg_verify(name: string): [boolean, boolean | null];
    remote_get_gpg_verify_summary(name: string): [boolean, boolean | null];
    remote_get_url(name: string): [boolean, string | null];
    remote_gpg_import(name: string, source_stream: Gio.InputStream | null, key_ids: string[] | null, cancellable: Gio.Cancellable | null): [boolean, number | null];
    remote_list(): [string[], number | null];
    remote_list_collection_refs(remote_name: string, cancellable: Gio.Cancellable | null): [boolean, GLib.HashTable];
    remote_list_refs(remote_name: string, cancellable: Gio.Cancellable | null): [boolean, GLib.HashTable];
    resolve_collection_ref(ref: CollectionRef, allow_noent: boolean, flags: RepoResolveRevExtFlags, cancellable: Gio.Cancellable | null): [boolean, string | null];
    resolve_keyring_for_collection(collection_id: string, cancellable: Gio.Cancellable | null): Remote;
    resolve_rev(refspec: string, allow_noent: boolean): [boolean, string];
    resolve_rev_ext(refspec: string, allow_noent: boolean, flags: RepoResolveRevExtFlags): [boolean, string];
    scan_hardlinks(cancellable: Gio.Cancellable | null): boolean;
    set_alias_ref_immediate(remote: string | null, ref: string, target: string | null, cancellable: Gio.Cancellable | null): boolean;
    set_cache_dir(dfd: number, path: string, cancellable: Gio.Cancellable | null): boolean;
    set_collection_id(collection_id: string | null): boolean;
    set_collection_ref_immediate(ref: CollectionRef, checksum: string | null, cancellable: Gio.Cancellable | null): boolean;
    set_disable_fsync(disable_fsync: boolean): void;
    set_ref_immediate(remote: string | null, ref: string, checksum: string | null, cancellable: Gio.Cancellable | null): boolean;
    sign_commit(commit_checksum: string, key_id: string, homedir: string | null, cancellable: Gio.Cancellable | null): boolean;
    sign_delta(from_commit: string, to_commit: string, key_id: string, homedir: string, cancellable: Gio.Cancellable | null): boolean;
    static_delta_execute_offline(dir_or_file: Gio.File, skip_validation: boolean, cancellable: Gio.Cancellable | null): boolean;
    static_delta_generate(opt: StaticDeltaGenerateOpt, from: string, to: string, metadata: GLib.Variant | null, params: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;
    transaction_set_collection_ref(ref: CollectionRef, checksum: string | null): void;
    transaction_set_ref(remote: string | null, ref: string, checksum: string | null): void;
    transaction_set_refspec(refspec: string, checksum: string | null): void;
    traverse_commit(commit_checksum: string, maxdepth: number, cancellable: Gio.Cancellable | null): [boolean, GLib.HashTable];
    traverse_reachable_refs(depth: number, reachable: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean;
    verify_commit(commit_checksum: string, keyringdir: Gio.File | null, extra_keyring: Gio.File | null, cancellable: Gio.Cancellable | null): boolean;
    verify_commit_ext(commit_checksum: string, keyringdir: Gio.File | null, extra_keyring: Gio.File | null, cancellable: Gio.Cancellable | null): GpgVerifyResult;
    verify_commit_for_remote(commit_checksum: string, remote_name: string, cancellable: Gio.Cancellable | null): GpgVerifyResult;
    verify_summary(remote_name: string, summary: GLib.Bytes, signatures: GLib.Bytes, cancellable: Gio.Cancellable | null): GpgVerifyResult;
    write_archive_to_mtree(archive: Gio.File, mtree: MutableTree, modifier: RepoCommitModifier | null, autocreate_parents: boolean, cancellable: Gio.Cancellable | null): boolean;
    write_archive_to_mtree_from_fd(fd: number, mtree: MutableTree, modifier: RepoCommitModifier | null, autocreate_parents: boolean, cancellable: Gio.Cancellable | null): boolean;
    write_commit(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, cancellable: Gio.Cancellable | null): [boolean, string];
    write_commit_detached_metadata(checksum: string, metadata: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;
    write_commit_with_time(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, time: number, cancellable: Gio.Cancellable | null): [boolean, string];
    write_config(new_config: GLib.KeyFile): boolean;
    write_content(expected_checksum: string | null, object_input: Gio.InputStream, length: number, cancellable: Gio.Cancellable | null): [boolean, number[] | null];
    write_content_async(expected_checksum: string | null, object: Gio.InputStream, length: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    write_content_finish(result: Gio.AsyncResult): [boolean, number];
    write_content_trusted(checksum: string, object_input: Gio.InputStream, length: number, cancellable: Gio.Cancellable | null): boolean;
    write_dfd_to_mtree(dfd: number, path: string, mtree: MutableTree, modifier: RepoCommitModifier | null, cancellable: Gio.Cancellable | null): boolean;
    write_directory_to_mtree(dir: Gio.File, mtree: MutableTree, modifier: RepoCommitModifier | null, cancellable: Gio.Cancellable | null): boolean;
    write_metadata(objtype: ObjectType, expected_checksum: string | null, object: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, number[] | null];
    write_metadata_async(objtype: ObjectType, expected_checksum: string | null, object: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    write_metadata_finish(result: Gio.AsyncResult): [boolean, number[]];
    write_metadata_stream_trusted(objtype: ObjectType, checksum: string, object_input: Gio.InputStream, length: number, cancellable: Gio.Cancellable | null): boolean;
    write_metadata_trusted(objtype: ObjectType, checksum: string, variant: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    write_mtree(mtree: MutableTree, cancellable: Gio.Cancellable | null): [boolean, Gio.File];
    static create_at(dfd: number, path: string, mode: RepoMode, options: GLib.Variant, cancellable: Gio.Cancellable | null): Repo;
    static mode_from_string(mode: string): [boolean, RepoMode];
    static open_at(dfd: number, path: string, cancellable: Gio.Cancellable | null): Repo;
    static pull_default_console_progress_changed(progress: AsyncProgress, user_data: object | null): void;
    static traverse_new_parents(): GLib.HashTable;
    static traverse_new_reachable(): GLib.HashTable;
    static traverse_parents_get_commits(parents: GLib.HashTable, object: GLib.Variant): string[];
}
export class RepoFile  {
    constructor(config?: properties);
    ensure_resolved(): boolean;
    get_checksum(): string;
    get_repo(): Repo;
    get_root(): RepoFile;
    get_xattrs(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    tree_find_child(name: string): [number, boolean,GLib.Variant];
    tree_get_contents(): GLib.Variant;
    tree_get_contents_checksum(): string;
    tree_get_metadata(): GLib.Variant;
    tree_get_metadata_checksum(): string;
    tree_query_child(n: number, attributes: string, flags: Gio.FileQueryInfoFlags, cancellable: Gio.Cancellable | null): [boolean, Gio.FileInfo];
    tree_set_metadata(checksum: string, metadata: GLib.Variant): void;
}
export class RepoFinderAvahi extends GObject.Object {
    constructor(config?: properties);
    start(): void;
    stop(): void;
}
export class RepoFinderConfig extends GObject.Object {
    constructor(config?: properties);
}
export class RepoFinderMount extends GObject.Object {
    constructor(config?: properties);
    monitor: Gio.VolumeMonitor;
}
export class RepoFinderOverride extends GObject.Object {
    constructor(config?: properties);
    add_uri(uri: string): void;
}
export class SePolicy extends GObject.Object {
    constructor(config?: properties);
    path: Gio.File;
    rootfs_dfd: number;static new_at(rootfs_dfd: number, cancellable: Gio.Cancellable | null): SePolicy;
    static new_at(...args: never[]): never;
    get_csum(): string;
    get_label(relpath: string, unix_mode: number, cancellable: Gio.Cancellable | null): [boolean, string | null];
    get_name(): string;
    get_path(): Gio.File;
    restorecon(path: string, info: Gio.FileInfo | null, target: Gio.File, flags: SePolicyRestoreconFlags, cancellable: Gio.Cancellable | null): [boolean, string | null];
    setfscreatecon(path: string, mode: number): boolean;
    static fscreatecon_cleanup(unused: object | null): void;
}
export class Sysroot extends GObject.Object {
    constructor(config?: properties);
    path: Gio.File;static new_default(): Sysroot;
    static new_default(...args: never[]): never;
    cleanup(cancellable: Gio.Cancellable | null): boolean;
    cleanup_prune_repo(options: RepoPruneOptions, cancellable: Gio.Cancellable | null): [boolean, number,number,number];
    deploy_tree(osname: string | null, revision: string, origin: GLib.KeyFile | null, provided_merge_deployment: Deployment | null, override_kernel_argv: string[] | null, cancellable: Gio.Cancellable | null): [boolean, Deployment];
    deployment_set_kargs(deployment: Deployment, new_kargs: string[], cancellable: Gio.Cancellable | null): boolean;
    deployment_set_mutable(deployment: Deployment, is_mutable: boolean, cancellable: Gio.Cancellable | null): boolean;
    deployment_set_pinned(deployment: Deployment, is_pinned: boolean): boolean;
    deployment_unlock(deployment: Deployment, unlocked_state: DeploymentUnlockedState, cancellable: Gio.Cancellable | null): boolean;
    ensure_initialized(cancellable: Gio.Cancellable | null): boolean;
    get_booted_deployment(): Deployment;
    get_bootversion(): number;
    get_deployment_directory(deployment: Deployment): Gio.File;
    get_deployment_dirpath(deployment: Deployment): string;
    get_deployments(): Deployment[];
    get_fd(): number;
    get_merge_deployment(osname: string | null): Deployment;
    get_path(): Gio.File;
    get_repo(cancellable: Gio.Cancellable | null): [boolean, Repo | null];
    get_staged_deployment(): Deployment;
    get_subbootversion(): number;
    init_osname(osname: string, cancellable: Gio.Cancellable | null): boolean;
    load(cancellable: Gio.Cancellable | null): boolean;
    load_if_changed(cancellable: Gio.Cancellable | null): [boolean, boolean];
    lock(): boolean;
    lock_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    lock_finish(result: Gio.AsyncResult): boolean;
    origin_new_from_refspec(refspec: string): GLib.KeyFile;
    prepare_cleanup(cancellable: Gio.Cancellable | null): boolean;
    query_deployments_for(osname: string | null): [Deployment | null,Deployment | null];
    repo(): Repo;
    simple_write_deployment(osname: string | null, new_deployment: Deployment, merge_deployment: Deployment | null, flags: SysrootSimpleWriteDeploymentFlags, cancellable: Gio.Cancellable | null): boolean;
    stage_tree(osname: string | null, revision: string, origin: GLib.KeyFile | null, merge_deployment: Deployment | null, override_kernel_argv: string[] | null, cancellable: Gio.Cancellable | null): [boolean, Deployment];
    try_lock(): [boolean, boolean];
    unload(): void;
    unlock(): void;
    write_deployments(new_deployments: Deployment[], cancellable: Gio.Cancellable | null): boolean;
    write_deployments_with_options(new_deployments: Deployment[], opts: SysrootWriteDeploymentsOpts, cancellable: Gio.Cancellable | null): boolean;
    write_origin_file(deployment: Deployment, new_origin: GLib.KeyFile | null, cancellable: Gio.Cancellable | null): boolean;
    static get_deployment_origin_path(deployment_path: Gio.File): Gio.File;
}
export class SysrootUpgrader extends GObject.Object {
    constructor(config?: properties);
    flags: SysrootUpgraderFlags;
    osname: string;
    sysroot: Sysroot;static new_for_os(sysroot: Sysroot, osname: string | null, cancellable: Gio.Cancellable | null): SysrootUpgrader;
    static new_for_os(...args: never[]): never;
    static new_for_os_with_flags(sysroot: Sysroot, osname: string | null, flags: SysrootUpgraderFlags, cancellable: Gio.Cancellable | null): SysrootUpgrader;
    static new_for_os_with_flags(...args: never[]): never;
    deploy(cancellable: Gio.Cancellable | null): boolean;
    dup_origin(): GLib.KeyFile;
    get_origin(): GLib.KeyFile;
    get_origin_description(): string;
    pull(flags: RepoPullFlags, upgrader_flags: SysrootUpgraderPullFlags, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): [boolean, boolean];
    pull_one_dir(dir_to_pull: string, flags: RepoPullFlags, upgrader_flags: SysrootUpgraderPullFlags, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): [boolean, boolean];
    set_origin(origin: GLib.KeyFile | null, cancellable: Gio.Cancellable | null): boolean;
    static check_timestamps(repo: Repo, from_rev: string, to_rev: string): boolean;
}
export class Bootloader  {
    constructor(config?: properties);
}
export class BootloaderGrub2  {
    constructor(config?: properties);
}
export class BootloaderInterface  {
    constructor(config?: properties);
    g_iface: GObject.TypeInterface;
}
export class BootloaderSyslinux  {
    constructor(config?: properties);
}
export class BootloaderUboot  {
    constructor(config?: properties);
}
export class ChecksumInputStreamPrivate  {
    constructor(config?: properties);
}
export class CmdPrivateVTable  {
    constructor(config?: properties);
}
export class CollectionRef  {
    constructor(config?: properties);
    dup(): CollectionRef;
    free(): void;
    static dupv(refs: CollectionRef[]): CollectionRef[];
    static equal(ref1: object, ref2: object): boolean;
    static freev(refs: CollectionRef[]): void;
    static hash(ref: object): number;
}
export class DiffDirsOptions  {
    constructor(config?: properties);
    owner_uid: number;
    owner_gid: number;
    devino_to_csum_cache: RepoDevInoCache;
    unused_bools: boolean[];
    unused_ints: number[];
    unused_ptrs: object[];
}
export class DiffItem  {
    constructor(config?: properties);
    refcount: number;
    src: Gio.File;
    target: Gio.File;
    src_info: Gio.FileInfo;
    target_info: Gio.FileInfo;
    src_checksum: string;
    target_checksum: string;
    ref(): DiffItem;
    unref(): void;
}
export class GpgVerifier  {
    constructor(config?: properties);
}
export class KernelArgs  {
    constructor(config?: properties);
    append(arg: string): void;
    append_argv(argv: string): void;
    append_argv_filtered(argv: string, prefixes: string): void;
    append_proc_cmdline(cancellable: Gio.Cancellable | null): boolean;
    ["delete"](arg: string): boolean;
    delete_key_entry(key: string): boolean;
    free(): void;
    get_last_value(key: string): string;
    new_replace(arg: string): boolean;
    parse_append(options: string): void;
    replace(arg: string): void;
    replace_argv(argv: string): void;
    replace_take(arg: string): void;
    to_string(): string;
    to_strv(): string[];
    static cleanup(loc: object | null): void;
}
export class LibarchiveInputStream  {
    constructor(config?: properties);
    readonly priv: LibarchiveInputStreamPrivate;
}
export class LibarchiveInputStreamClass  {
    constructor(config?: properties);
}
export class LibarchiveInputStreamPrivate  {
    constructor(config?: properties);
}
export class LzmaCompressor  {
    constructor(config?: properties);
}
export class LzmaCompressorClass  {
    constructor(config?: properties);
}
export class LzmaDecompressor  {
    constructor(config?: properties);
}
export class LzmaDecompressorClass  {
    constructor(config?: properties);
}
export class MutableTreeIter  {
    constructor(config?: properties);
    in_files: boolean;
    iter: GLib.HashTableIter;
}
export class Remote  {
    constructor(config?: properties);
    get_name(): string;
    get_url(): string;
    ref(): Remote;
    unref(): void;
}
export class RepoCheckoutAtOptions  {
    constructor(config?: properties);
    mode: RepoCheckoutMode;
    overwrite_mode: RepoCheckoutOverwriteMode;
    enable_uncompressed_cache: boolean;
    enable_fsync: boolean;
    process_whiteouts: boolean;
    no_copy_fallback: boolean;
    force_copy: boolean;
    bareuseronly_dirs: boolean;
    force_copy_zerosized: boolean;
    unused_bools: boolean[];
    subpath: string;
    devino_to_csum_cache: RepoDevInoCache;
    unused_ints: number[];
    unused_ptrs: object[];
    filter: RepoCheckoutFilter;
    filter_user_data: object;
    sepolicy: SePolicy;
    sepolicy_prefix: string;
    set_devino(cache: RepoDevInoCache | null): void;
}
export class RepoCommitModifier  {
    constructor(config?: properties);
    ref(): RepoCommitModifier;
    set_devino_cache(cache: RepoDevInoCache): void;
    set_sepolicy(sepolicy: SePolicy | null): void;
    set_xattr_callback(callback: RepoCommitModifierXattrCallback, destroy: GLib.DestroyNotify, user_data: object | null): void;
    unref(): void;
}
export class RepoCommitTraverseIter  {
    constructor(config?: properties);
    initialized: boolean;
    dummy: object[];
    dummy_checksum_data: number[];
    clear(): void;
    get_dir(): [string,string,string];
    get_file(): [string,string];
    init_commit(repo: Repo, commit: GLib.Variant, flags: RepoCommitTraverseFlags): boolean;
    init_dirtree(repo: Repo, dirtree: GLib.Variant, flags: RepoCommitTraverseFlags): boolean;
    next(cancellable: Gio.Cancellable | null): RepoCommitIterResult;
    static cleanup(p: object | null): void;
}
export class RepoDevInoCache  {
    constructor(config?: properties);
    ref(): RepoDevInoCache;
    unref(): void;
}
export class RepoFileEnumerator  {
    constructor(config?: properties);
}
export class RepoFileEnumeratorClass  {
    constructor(config?: properties);
}
export class RepoFinderResult  {
    constructor(config?: properties);
    compare(b: RepoFinderResult): number;
    dup(): RepoFinderResult;
    free(): void;
    static freev(results: RepoFinderResult[]): void;
}
export class RepoPruneOptions  {
    constructor(config?: properties);
    flags: RepoPruneFlags;
    reachable: GLib.HashTable;
    unused_bools: boolean[];
    unused_ints: number[];
    unused_ptrs: object[];
}
export class RepoTransactionStats  {
    constructor(config?: properties);
    metadata_objects_total: number;
    metadata_objects_written: number;
    content_objects_total: number;
    content_objects_written: number;
    content_bytes_written: number;
    devino_cache_hits: number;
    padding1: number;
    padding2: number;
    padding3: number;
    padding4: number;
}
export class RollsumMatches  {
    constructor(config?: properties);
    from_rollsums: GLib.HashTable;
    to_rollsums: GLib.HashTable;
    crcmatches: number;
    bufmatches: number;
    total: number;
    match_size: number;
    matches: object[];
}
export class SysrootWriteDeploymentsOpts  {
    constructor(config?: properties);
    do_postclean: boolean;
    unused_bools: boolean[];
    unused_ints: number[];
    unused_ptrs: object[];
}
export class TlsCertInteraction  {
    constructor(config?: properties);
}
export class TlsCertInteractionClass  {
    constructor(config?: properties);
}
export interface RepoFinder  {
    resolve_async(refs: CollectionRef[], parent_repo: Repo, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    resolve_finish(result: Gio.AsyncResult): RepoFinderResult[];
}