
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Ggit from "ggit";
/**
 * ggit.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type ConfigCallback = (entry: ConfigEntry, user_data: object | null) => number;
export type ConfigMatchCallback = (match_info: GLib.MatchInfo, value: string, user_data: object | null) => number;
export type CredAcquireCallback = (url: string, username_from_url: string | null, allowed_types: number, cred: Cred, user_data: object | null) => number;
export type DiffBinaryCallback = (delta: DiffDelta, binary: DiffBinary, user_data: object | null) => number;
export type DiffFileCallback = (delta: DiffDelta, progress: number, user_data: object | null) => number;
export type DiffHunkCallback = (delta: DiffDelta, hunk: DiffHunk, user_data: object | null) => number;
export type DiffLineCallback = (delta: DiffDelta, hunk: DiffHunk | null, line: DiffLine, user_data: object | null) => number;
export type DiffSimilarityMetricBufferSignatureCallback = (file: DiffFile, buf: string, buflen: number, out: object | null, user_data: object | null) => number;
export type DiffSimilarityMetricFileSignatureCallback = (file: DiffFile, fullpath: string, out: object | null, user_data: object | null) => number;
export type DiffSimilarityMetricFreeSignatureCallback = (signature: object | null, user_data: object | null) => void;
export type DiffSimilarityMetricSimilarityCallback = (score: number, signature_a: object | null, signature_b: object | null, user_data: object | null) => number;
export type NoteCallback = (blob_id: OId, annotated_object_id: OId, user_data: object | null) => number;
export type ReferencesCallback = (reference: Ref, user_data: object | null) => number;
export type ReferencesNameCallback = (name: string, user_data: object | null) => number;
export type RemoteListCallback = (name: string, oid: OId, loid: OId, local: boolean, user_data: object | null) => number;
export type StashCallback = (index: number, message: string, stash_oid: OId, user_data: object | null) => number;
export type StatusCallback = (path: string, status_flags: StatusFlags, user_data: object | null) => number;
export type SubmoduleCallback = (submodule: Submodule, name: string, user_data: object | null) => number;
export type TagCallback = (name: string, tag_oid: OId, user_data: object | null) => number;
export type TransferProgressCallback = (stats: TransferProgress, user_data: object | null) => number;
export type TreeWalkCallback = (root: string, entry: TreeEntry, user_data: object | null) => number;
/**
 * Error domain for Ggit functions.
 * Errors in this domain will be from the GgitError enumeration.
 * See #GError for information on error domains.
 */
export function error_quark(): GLib.Quark;
/**
 * Gets the features of the library.
 */
export function get_features(): FeatureFlags;
/**
 * Call this function before using any other libgit2-glib function.
 */
export function init(): void;
/**
 * Prettify a commit message by removing excess whitespace and making sur
 * e the
 * last line ends with a newline. If @strip_comments is %TRUE, then lines
 * starting with a @comment_char will be removed.
 */
export function message_prettify(message: string, strip_comments: boolean, comment_char: number): string;
export enum BranchType {
    LOCAL = 1,
    REMOTE = 2,
}
export enum CloneLocal {
    AUTO = 0,
    LOCAL = 1,
    NO_LOCAL = 2,
    NO_LINKS = 3,
}
export enum ConfigLevel {
    PROGRAMDATA = 1,
    SYSTEM = 2,
    XDG = 3,
    GLOBAL = 4,
    LOCAL = 5,
    APP = 6,
    HIGHEST = -1,
}
export enum DeltaType {
    UNMODIFIED = 0,
    ADDED = 1,
    DELETED = 2,
    MODIFIED = 3,
    RENAMED = 4,
    COPIED = 5,
    IGNORED = 6,
    UNTRACKED = 7,
}
export enum DiffBinaryType {
    NONE = 0,
    LITERAL = 1,
    DELTA = 2,
}
export enum DiffFormatType {
    PATCH = 1,
    PATCH_HEADER = 2,
    RAW = 3,
    NAME_ONLY = 4,
    NAME_STATUS = 5,
}
export enum DiffLineType {
    CONTEXT = 32,
    ADDITION = 43,
    DELETION = 45,
    CONTEXT_EOFNL = 61,
    ADD_EOFNL = 62,
    DEL_EOFNL = 60,
    FILE_HDR = 70,
    HUNK_HDR = 72,
    BINARY = 66,
}
export enum Direction {
    FETCH = 0,
    PUSH = 1,
}
export enum Error {
    GIT_ERROR = -1,
    NOTFOUND = -3,
    EXISTS = -4,
    AMBIGUOUS = -5,
    BUFS = -6,
    PASSTHROUGH = -30,
    ITEROVER = -31,
}
export enum FileMode {
    UNREADABLE = 0,
    TREE = 16384,
    BLOB = 33188,
    BLOB_EXECUTABLE = 33261,
    LINK = 40960,
    COMMIT = 57344,
}
export enum MergeFileFavor {
    NORMAL = 0,
    OURS = 1,
    THEIRS = 2,
    UNION = 3,
}
export enum PackbuilderStage {
    ADDING_OBJECTS = 0,
    DELTAFICATION = 1,
}
export enum ProxyType {
    NONE = 0,
    AUTO = 1,
    SPECIFIED = 2,
}
export enum RebaseOperationType {
    PICK = 0,
    REWORD = 1,
    EDIT = 2,
    SQUASH = 3,
    FIXUP = 4,
    EXEC = 5,
}
export enum RefType {
    INVALID = 0,
    OID = 1,
    SYMBOLIC = 2,
    LISTALL = 3,
}
export enum RemoteCompletionType {
    DOWNLOAD = 0,
    INDEXING = 1,
    ERROR = 2,
}
export enum RemoteDownloadTagsType {
    UNSPECIFIED = 0,
    AUTO = 1,
    NONE = 2,
    ALL = 3,
}
export enum ResetType {
    SOFT = 1,
    MIXED = 2,
    HARD = 3,
}
export enum StatusShow {
    INDEX_AND_WORKDIR = 0,
    INDEX_ONLY = 1,
    WORKDIR_ONLY = 2,
}
export enum SubmoduleIgnore {
    UNSPECIFIED = -1,
    NONE = 1,
    UNTRACKED = 2,
    DIRTY = 3,
    ALL = 4,
}
export enum SubmoduleRecurse {
    NO = 0,
    YES = 1,
    ONDEMAND = 2,
}
export enum SubmoduleUpdate {
    CHECKOUT = 1,
    REBASE = 2,
    MERGE = 3,
    NONE = 4,
    DEFAULT = 0,
}
export enum TreeWalkMode {
    PRE = 0,
    POST = 1,
}
export enum AttributeCheckFlags {
    FILE_THEN_INDEX = 0,
    INDEX_THEN_FILE = 1,
    INDEX_ONLY = 2,
    NO_SYSTEM = 4,
}
export enum BlameFlags {
    NORMAL = 0,
    TRACK_COPIES_SAME_FILE = 1,
}
export enum CheckoutNotifyFlags {
    NONE = 0,
    CONFLICT = 1,
    DIRTY = 2,
    UPDATED = 4,
    UNTRACKED = 8,
    IGNORED = 16,
    ALL = 65535,
}
export enum CheckoutStrategy {
    NONE = 0,
    SAFE = 1,
    FORCE = 2,
    RECREATE_MISSING = 4,
    ALLOW_CONFLICTS = 16,
    REMOVE_UNTRACKED = 32,
    REMOVE_IGNORED = 64,
    UPDATE_ONLY = 128,
    DONT_UPDATE_INDEX = 256,
    NO_REFRESH = 512,
    SKIP_UNMERGED = 1024,
    USE_OURS = 2048,
    USE_THEIRS = 4096,
    DISABLE_PATHSPEC_MATCH = 8192,
    SKIP_LOCKED_DIRECTORIES = 262144,
    DONT_OVERWRITE_IGNORED = 524288,
    CONFLICT_STYLE_MERGE = 1048576,
    CONFLICT_STYLE_DIFF3 = 2097152,
    DONT_REMOVE_EXISTING = 4194304,
    DONT_WRITE_INDEX = 8388608,
    UPDATE_SUBMODULES = 65536,
    UPDATE_SUBMODULES_IF_CHANGED = 131072,
}
export enum CreateFlags {
    NONE = 0,
    FORCE = 1,
}
export enum Credtype {
    USERPASS_PLAINTEXT = 1,
    SSH_KEY = 2,
    SSH_CUSTOM = 4,
    DEFAULT = 8,
    SSH_INTERACTIVE = 16,
}
export enum DiffFindFlags {
    FIND_BY_CONFIG = 0,
    FIND_RENAMES = 1,
    FIND_RENAMES_FROM_REWRITES = 2,
    FIND_COPIES = 4,
    FIND_COPIES_FROM_UNMODIFIED = 8,
    FIND_REWRITES = 16,
    BREAK_REWRITES = 32,
    FIND_AND_BREAK_REWRITES = 48,
    FIND_FOR_UNTRACKED = 64,
    FIND_ALL = 255,
    FIND_IGNORE_LEADING_WHITESPACE = 0,
    FIND_IGNORE_WHITESPACE = 4096,
    FIND_DONT_IGNORE_WHITESPACE = 8192,
    FIND_EXACT_MATCH_ONLY = 16384,
    BREAK_REWRITES_FOR_RENAMES_ONLY = 32768,
    FIND_REMOVE_UNMODIFIED = 65536,
}
export enum DiffFlag {
    BINARY = 1,
    NOT_BINARY = 2,
    VALID_ID = 4,
}
export enum DiffFormatEmailFlags {
    NONE = 0,
    EXCLUDE_SUBJECT_PATCH_MARKER = 1,
}
export enum DiffOption {
    NORMAL = 0,
    REVERSE = 1,
    INCLUDE_IGNORED = 2,
    RECURSE_IGNORED_DIRS = 4,
    INCLUDE_UNTRACKED = 8,
    RECURSE_UNTRACKED_DIRS = 16,
    INCLUDE_UNMODIFIED = 32,
    INCLUDE_TYPECHANGE = 64,
    INCLUDE_TYPECHANGE_TREES = 128,
    IGNORE_FILE_MODE = 256,
    IGNORE_SUBMODULES = 512,
    IGNORE_CASE = 1024,
    DISABLE_PATHSPEC_MATCH = 4096,
    SKIP_BINARY_CHECK = 8192,
    ENABLE_FAST_UNTRACKED_DIRS = 16384,
    FORCE_TEXT = 1048576,
    FORCE_BINARY = 2097152,
    IGNORE_WHITESPACE = 4194304,
    IGNORE_WHITESPACE_CHANGE = 8388608,
    IGNORE_WHITESPACE_EOL = 16777216,
    SHOW_UNTRACKED_CONTENT = 33554432,
    SHOW_UNMODIFIED = 67108864,
    PATIENCE = 268435456,
    MINIMAL = 536870912,
    SHOW_BINARY = 1073741824,
}
export enum FeatureFlags {
    THREADS = 1,
    HTTPS = 2,
    SSH = 4,
}
export enum MergeFileFlags {
    DEFAULT = 0,
    STYLE_MERGE = 1,
    STYLE_DIFF3 = 2,
    SIMPLIFY_ALNUM = 4,
    IGNORE_WHITESPACE = 8,
    IGNORE_WHITESPACE_CHANGE = 16,
    IGNORE_WHITESPACE_EOL = 32,
    DIFF_PATIENCE = 64,
    DIFF_MINIMAL = 128,
}
export enum MergeFlags {
    FIND_RENAMES = 1,
    FAIL_ON_CONFLICT = 2,
    SKIP_REUC = 4,
    NO_RECURSIVE = 8,
}
export enum SortMode {
    NONE = 0,
    TOPOLOGICAL = 1,
    TIME = 2,
    REVERSE = 4,
}
export enum StashFlags {
    DEFAULT = 0,
    KEEP_INDEX = 1,
    INCLUDE_UNTRACKED = 2,
    INCLUDE_IGNORED = 4,
}
export enum StatusFlags {
    CURRENT = 0,
    INDEX_NEW = 1,
    INDEX_MODIFIED = 2,
    INDEX_DELETED = 4,
    INDEX_RENAMED = 8,
    INDEX_TYPECHANGE = 16,
    WORKING_TREE_NEW = 128,
    WORKING_TREE_MODIFIED = 256,
    WORKING_TREE_DELETED = 512,
    WORKING_TREE_TYPECHANGE = 1024,
    IGNORED = 16384,
}
export enum StatusOption {
    INCLUDE_UNTRACKED = 1,
    INCLUDE_IGNORED = 2,
    INCLUDE_UNMODIFIED = 4,
    EXCLUDE_SUBMODULES = 8,
    RECURSE_UNTRACKED_DIRS = 16,
    DISABLE_PATHSPEC_MATCH = 32,
    RECURSE_IGNORED_DIRS = 64,
    RENAMES_HEAD_TO_INDEX = 128,
    RENAMES_INDEX_TO_WORKDIR = 256,
    SORT_CASE_SENSITIVELY = 512,
    SORT_CASE_INSENSITIVELY = 1024,
    DEFAULT = 19,
}
export enum SubmoduleStatus {
    IN_HEAD = 1,
    IN_INDEX = 2,
    IN_CONFIG = 4,
    IN_WD = 8,
    INDEX_ADDED = 16,
    INDEX_DELETED = 32,
    INDEX_MODIFIED = 64,
    WD_UNINITIALIZED = 128,
    WD_ADDED = 256,
    WD_DELETED = 512,
    WD_MODIFIED = 1024,
    WD_INDEX_MODIFIED = 2048,
    WD_WD_MODIFIED = 4096,
    WD_UNTRACKED = 8192,
}
export class Blame  {
    constructor(config?: properties);
    from_buffer(buffer: number[], buffer_length: number): Blame | null;
    get_hunk_by_index(idx: number): BlameHunk;
    get_hunk_by_line(line: number): BlameHunk;
    get_hunk_count(): number;
    static get_flags(blame_options: BlameOptions): BlameFlags;
    static set_flags(blame_options: BlameOptions, flags: BlameFlags): void;
}
export class Blob  {
    constructor(config?: properties);
    get_raw_content(): [number[] | null, number | null];
    is_binary(): boolean;
}
export class BlobOutputStream  {
    constructor(config?: properties);
    repository: Repository;
    get_id(): OId | null;
}
export class Branch  {
    constructor(config?: properties);
    _delete(): void;
    get_name(): string | null;
    get_upstream(): Ref | null;
    is_head(): boolean;
    move(new_branch_name: string, flags: CreateFlags): Branch | null;
    set_upstream(upstream_branch_name: string): void;
}
export class CheckoutOptions extends GObject.Object {
    constructor(config?: properties);
    ancestor_label: string;
    baseline: Tree;
    dir_mode: number;
    disable_filters: boolean;
    file_mode: number;
    file_open_flags: number;
    notify_flags: CheckoutNotifyFlags;
    our_label: string;
    strategy: CheckoutStrategy;
    target_directory: string;
    their_label: string;
    get_ancestor_label(): string | null;
    get_baseline(): Tree | null;
    get_dir_mode(): number;
    get_disable_filters(): boolean;
    get_file_mode(): number;
    get_file_open_flags(): number;
    get_notify_flags(): CheckoutNotifyFlags;
    get_our_label(): string | null;
    get_paths(): string[] | null;
    get_strategy(): CheckoutStrategy;
    get_target_directory(): string | null;
    get_their_label(): string | null;
    set_ancestor_label(label: string | null): void;
    set_baseline(tree: Tree | null): void;
    set_dir_mode(dir_mode: number): void;
    set_disable_filters(disable: boolean): void;
    set_file_mode(file_mode: number): void;
    set_file_open_flags(flags: number): void;
    set_notify_flags(flags: CheckoutNotifyFlags): void;
    set_our_label(label: string | null): void;
    set_paths(paths: string[] | null): void;
    set_strategy(strategy: CheckoutStrategy): void;
    set_target_directory(directory: string | null): void;
    set_their_label(label: string | null): void;
    vfunc_notify(why: CheckoutNotifyFlags, path: string, baseline: DiffFile, target: DiffFile, workdir: DiffFile): number;
    notify(...args: never[]): never;
    vfunc_progress(path: string, completed_steps: number, total_steps: number): void;
}
export class CherryPickOptions extends GObject.Object {
    constructor(config?: properties);
    checkout_options: CheckoutOptions;
    mainline: number;
    merge_options: MergeOptions;
    get_checkout_options(): CheckoutOptions;
    get_mainline(): number;
    get_merge_options(): MergeOptions;
    set_checkout_options(checkout_options: CheckoutOptions | null): void;
    set_mainline(mainline: number): void;
    set_merge_options(merge_options: MergeOptions | null): void;
}
export class CloneOptions extends GObject.Object {
    constructor(config?: properties);
    get_checkout_branch(): string;
    get_fetch_options(): FetchOptions;
    get_is_bare(): boolean;
    get_local(): CloneLocal;
    set_checkout_branch(checkout_branch: string | null): void;
    set_fetch_options(fetch_options: FetchOptions | null): void;
    set_is_bare(bare: boolean): void;
    set_local(local: CloneLocal): void;
    vfunc_create_remote(repository: Repository, name: string, url: string): Remote | null;
    vfunc_create_repository(path: string, is_bare: boolean): Repository | null;
}
export class Commit  {
    constructor(config?: properties);
    amend(update_ref: string | null, author: Signature, committer: Signature, message_encoding: string | null, message: string, tree: Tree): OId | null;
    get_author(): Signature | null;
    get_committer(): Signature | null;
    get_message(): string | null;
    get_message_encoding(): string | null;
    get_nth_ancestor(n: number): Commit | null;
    get_parents(): CommitParents | null;
    get_subject(): string | null;
    get_tree(): Tree | null;
    get_tree_id(): OId | null;
}
export class CommitParents extends GObject.Object {
    constructor(config?: properties);
    commit: Commit;
    readonly size: number;
    get(idx: number): Commit | null;
    get_id(idx: number): OId | null;
    get_size(): number;
}
export class Config extends Native {
    constructor(config?: properties);
    static new_default(): Config;
    static new_from_file(file: Gio.File): Config;
    add_file(file: Gio.File, level: ConfigLevel, force: boolean): void;
    delete_entry(name: string): boolean;
    foreach(callback: ConfigCallback, user_data: object | null): boolean;
    get_bool(name: string): boolean;
    get_entry(name: string): ConfigEntry;
    get_int32(name: string): number;
    get_int64(name: string): number;
    get_string(name: string): string | null;
    match(regex: GLib.Regex): [string | null, GLib.MatchInfo | null];
    match_foreach(regex: GLib.Regex, callback: ConfigMatchCallback, user_data: object | null): boolean;
    open_level(level: ConfigLevel): Config;
    set_bool(name: string, value: boolean): boolean;
    set_int32(name: string, value: number): boolean;
    set_int64(name: string, value: number): boolean;
    set_string(name: string, value: string): boolean;
    snapshot(): Config;
    static find_global(): Gio.File;
    static find_system(): Gio.File;
}
export class Cred  {
    constructor(config?: properties);
}
export class CredPlaintext extends Cred {
    constructor(config?: properties);
    password: string;
    username: string;
    get_password(): string;
    get_username(): string;
}
export class CredSshInteractive extends Cred {
    constructor(config?: properties);
    username: string;
    get_username(): string;
    vfunc_prompt(prompts: CredSshInteractivePrompt[], num_prompts: number): void;
}
export class CredSshKeyFromAgent extends Cred {
    constructor(config?: properties);
    username: string;
    get_username(): string | null;
}
export class Diff extends Native {
    constructor(config?: properties);
    repository: Repository;static new_index_to_workdir(repository: Repository, index: Index | null, diff_options: DiffOptions | null): Diff | null;
    static new_tree_to_index(repository: Repository, old_tree: Tree | null, index: Index | null, diff_options: DiffOptions | null): Diff | null;
    static new_tree_to_tree(repository: Repository, old_tree: Tree | null, new_tree: Tree | null, diff_options: DiffOptions | null): Diff | null;
    static new_tree_to_workdir(repository: Repository, old_tree: Tree | null, diff_options: DiffOptions | null): Diff | null;
    find_similar(options: DiffFindOptions | null): boolean;
    foreach(file_cb: DiffFileCallback | null, binary_cb: DiffBinaryCallback | null, hunk_cb: DiffHunkCallback | null, line_cb: DiffLineCallback | null, user_data: object | null): void;
    format_email(options: DiffFormatEmailOptions): string | null;
    get_delta(index: number): DiffDelta | null;
    get_num_deltas(): number;
    merge(from: Diff): void;
    print(type: DiffFormatType, print_cb: DiffLineCallback, user_data: object | null): void;
    static blob_to_buffer(old_blob: Blob | null, old_as_path: string | null, buffer: number[] | null, buffer_len: number, buffer_as_path: string | null, diff_options: DiffOptions | null, file_cb: DiffFileCallback | null, binary_cb: DiffBinaryCallback | null, hunk_cb: DiffHunkCallback | null, line_cb: DiffLineCallback | null, user_data: object | null): void;
    static blobs(old_blob: Blob | null, old_as_path: string | null, new_blob: Blob | null, new_as_path: string | null, diff_options: DiffOptions | null, file_cb: DiffFileCallback | null, binary_cb: DiffBinaryCallback | null, hunk_cb: DiffHunkCallback | null, line_cb: DiffLineCallback | null, user_data: object | null): void;
}
export class DiffFindOptions extends GObject.Object {
    constructor(config?: properties);
    copy_threshold: number;
    flags: DiffFindFlags;
    metric: DiffSimilarityMetric;
    rename_from_rewrite_threshold: number;
    rename_limit: number;
    rename_threshold: number;
    get_copy_threshold(): number;
    get_flags(): DiffFindFlags;
    get_metric(): DiffSimilarityMetric | null;
    get_rename_from_rewrite_threshold(): number;
    get_rename_limit(): number;
    get_rename_threshold(): number;
    set_copy_threshold(threshold: number): void;
    set_flags(flags: DiffFindFlags): void;
    set_metric(metric: DiffSimilarityMetric): void;
    set_rename_from_rewrite_threshold(threshold: number): void;
    set_rename_limit(limit: number): void;
    set_rename_threshold(threshold: number): void;
}
export class DiffFormatEmailOptions extends GObject.Object {
    constructor(config?: properties);
    author: Signature;
    body: string;
    flags: DiffFormatEmailFlags;
    id: OId;
    patch_number: number;
    summary: string;
    total_patches: number;
    get_author(): Signature | null;
    get_body(): string | null;
    get_flags(): DiffFormatEmailFlags;
    get_id(): OId | null;
    get_patch_number(): number;
    get_summary(): string | null;
    get_total_patches(): number;
    set_author(author: Signature | null): void;
    set_body(body: string | null): void;
    set_flags(flags: DiffFormatEmailFlags): void;
    set_id(id: OId | null): void;
    set_patch_number(number: number): void;
    set_summary(summary: string | null): void;
    set_total_patches(patches: number): void;
}
export class DiffOptions extends GObject.Object {
    constructor(config?: properties);
    flags: DiffOption;
    n_context_lines: number;
    n_interhunk_lines: number;
    new_prefix: string;
    old_prefix: string;
    pathspec: string[];
    get_flags(): DiffOption;
    get_n_context_lines(): number;
    get_n_interhunk_lines(): number;
    get_new_prefix(): string | null;
    get_old_prefix(): string | null;
    get_pathspec(): string[] | null;
    set_flags(flags: DiffOption): void;
    set_n_context_lines(n: number): void;
    set_n_interhunk_lines(n: number): void;
    set_new_prefix(prefix: string): void;
    set_old_prefix(prefix: string): void;
    set_pathspec(pathspec: string[] | null): void;
}
export class Index  {
    constructor(config?: properties);
    file: Gio.File;
    add(entry: IndexEntry): boolean;
    add_file(file: Gio.File): boolean;
    add_path(path: string): boolean;
    get_entries(): IndexEntries | null;
    get_entries_resolve_undo(): IndexEntriesResolveUndo | null;
    get_owner(): Repository | null;
    has_conflicts(): boolean;
    read(force: boolean): boolean;
    remove(file: Gio.File, stage: number): boolean;
    write(): boolean;
    write_tree(): OId | null;
    write_tree_to(repository: Repository): OId | null;
    static open(file: Gio.File): Index | null;
}
export class Native  {
    constructor(config?: properties);
    "native": object;
}
export class Object  {
    constructor(config?: properties);
    get_id(): OId | null;
    get_owner(): Repository | null;
}
export class ObjectFactory  {
    constructor(config?: properties);
    construct(parent_class: any, basetype: GType, n_construct_properties: number, construct_properties: GObject.ObjectConstructParam[]): GObject.Object | null;
    register(basetype: GType, subtype: GType): void;
    unregister(basetype: GType, subtype: GType): void;
    static get_default(): ObjectFactory;
}
export class ObjectFactoryBase  {
    constructor(config?: properties);
}
export class ProxyOptions extends GObject.Object {
    constructor(config?: properties);
}
export class PushOptions extends GObject.Object {
    constructor(config?: properties);
    callbacks: RemoteCallbacks;
    parallelism: number;
    get_parallelism(): number;
    get_remote_callbacks(): RemoteCallbacks | null;
    set_parallelism(parallelism: number): void;
    set_remote_callbacks(callbacks: RemoteCallbacks): void;
}
export class Rebase  {
    constructor(config?: properties);
    abort(): void;
    commit(author: Signature | null, committer: Signature, message: string | null): OId | null;
    finish(signature: Signature | null): void;
    get_operation_by_index(idx: number): RebaseOperation | null;
    get_operation_entry_count(): number;
    get_operation_index(): number;
    next(): RebaseOperation | null;
}
export class Ref  {
    constructor(config?: properties);
    _delete(): void;
    delete_log(): void;
    get_log(): Reflog | null;
    get_name(): string | null;
    get_owner(): Repository | null;
    get_reference_type(): RefType;
    get_shorthand(): string | null;
    get_symbolic_target(): string | null;
    get_target(): OId | null;
    has_log(): boolean;
    is_branch(): boolean;
    is_note(): boolean;
    is_remote(): boolean;
    is_tag(): boolean;
    lookup(): Object | null;
    rename(new_name: string, force: boolean, log_message: string): Ref | null;
    resolve(): Ref | null;
    set_symbolic_target(target: string, log_message: string): Ref | null;
    set_target(oid: OId, log_message: string): Ref | null;
    to_string(): string | null;
    static is_valid_name(name: string): boolean;
}
export class Remote extends Native {
    constructor(config?: properties);
    static new_anonymous(repository: Repository, url: string): Remote | null;
    connect(direction: Direction, callbacks: RemoteCallbacks, proxy_options: ProxyOptions | null, custom_headers: string | null): void;
    disconnect(): void;
    download(specs: string[] | null, fetch_options: FetchOptions): boolean;
    get_connected(): boolean;
    get_fetch_specs(): string[] | null;
    get_name(): string | null;
    get_owner(): Repository | null;
    get_push_specs(): string[] | null;
    get_url(): string | null;
    list(): RemoteHead[] | null;
    push(specs: string[] | null, push_options: PushOptions): boolean;
    update_tips(callbacks: RemoteCallbacks, update_fetch_head: boolean, tags_type: RemoteDownloadTagsType, message: string | null): boolean;
    upload(specs: string[] | null, push_options: PushOptions): boolean;
}
export class RemoteCallbacks  {
    constructor(config?: properties);
}
export class Repository  {
    constructor(config?: properties);
    clone_options: CloneOptions;
    readonly head: Ref;
    init: boolean;
    location: Gio.File;
    url: string;
    workdir: Gio.File;
    add_remote_fetch(remote: Remote, refspec: string): void;
    add_remote_push(remote: Remote, refspec: string): void;
    blame_file(file: Gio.File, blame_options: BlameOptions | null): Blame | null;
    checkout_head(options: CheckoutOptions | null): boolean;
    checkout_index(index: Index | null, options: CheckoutOptions | null): boolean;
    checkout_tree(tree: Object | null, options: CheckoutOptions | null): boolean;
    cherry_pick(commit: Commit, options: CherryPickOptions): boolean;
    cherry_pick_commit(commit: Commit, our_commit: Commit, mainline: number, merge_options: MergeOptions | null): Index | null;
    create_blob(): BlobOutputStream | null;
    create_blob_from_buffer(buffer: number[], size: number): OId | null;
    create_blob_from_file(file: Gio.File): OId;
    create_blob_from_path(path: string): OId | null;
    create_branch(branch_name: string, target: Object, flags: CreateFlags): Branch | null;
    create_commit(update_ref: string | null, author: Signature, committer: Signature, message_encoding: string | null, message: string, tree: Tree, parents: Commit[], parent_count: number): OId | null;
    create_commit_from_ids(update_ref: string | null, author: Signature, committer: Signature, message_encoding: string | null, message: string, tree: OId, parents: OId[], parent_count: number): OId | null;
    create_index_entry_for_file(file: Gio.File | null, id: OId | null): IndexEntry | null;
    create_index_entry_for_path(path: string | null, id: OId | null): IndexEntry | null;
    create_note(notes_ref: string | null, author: Signature, committer: Signature, id: OId, note: string, force: boolean): OId | null;
    create_reference(name: string, oid: OId, log_message: string): Ref | null;
    create_remote(name: string, url: string): Remote | null;
    create_symbolic_reference(name: string, target: string, log_message: string): Ref | null;
    create_tag(tag_name: string, target: Object, tagger: Signature, message: string, flags: CreateFlags): OId | null;
    create_tag_annotation(tag_name: string, target: Object, signature: Signature, message: string): OId | null;
    create_tag_from_buffer(tag: string, flags: CreateFlags): OId | null;
    create_tag_lightweight(tag_name: string, target: Object, flags: CreateFlags): OId | null;
    create_tree_builder(): TreeBuilder | null;
    create_tree_builder_from_tree(tree: Tree): TreeBuilder | null;
    delete_tag(name: string): boolean;
    drop_stash(index: number): void;
    enumerate_branches(list_type: BranchType): BranchEnumerator | null;
    file_status(location: Gio.File): StatusFlags;
    file_status_foreach(options: StatusOptions | null, callback: StatusCallback, user_data: object | null): boolean;
    get_ahead_behind(local: OId, upstream: OId): [number,number];
    get_attribute(path: string, name: string, flags: AttributeCheckFlags): string | null;
    get_config(): Config | null;
    get_default_notes_ref(): string | null;
    get_descendant_of(commit: OId, ancestor: OId): boolean;
    get_head(): Ref | null;
    get_index(): Index | null;
    get_location(): Gio.File | null;
    get_submodule_status(name: string, ignore: SubmoduleIgnore): SubmoduleStatus;
    get_workdir(): Gio.File | null;
    is_bare(): boolean;
    is_empty(): boolean;
    is_head_detached(): boolean;
    is_head_unborn(): boolean;
    list_remotes(): string[] | null;
    list_tags(): string[] | null;
    list_tags_match(pattern: string | null): string[] | null;
    lookup(oid: OId, gtype: GType): Object | null;
    lookup_blob(oid: OId): Blob | null;
    lookup_branch(branch_name: string, branch_type: BranchType): Branch | null;
    lookup_commit(oid: OId): Commit | null;
    lookup_reference(name: string): Ref | null;
    lookup_reference_dwim(short_name: string): Ref | null;
    lookup_remote(name: string): Remote | null;
    lookup_submodule(name: string): Submodule | null;
    lookup_tag(oid: OId): Tag | null;
    lookup_tree(oid: OId): Tree | null;
    merge(their_heads: AnnotatedCommit[], their_heads_length: number, merge_opts: MergeOptions, checkout_opts: CheckoutOptions): void;
    merge_base(oid_one: OId, oid_two: OId): OId | null;
    merge_commits(our_commit: Commit, their_commit: Commit, merge_options: MergeOptions): Index | null;
    merge_trees(ancestor_tree: Tree, our_tree: Tree, their_tree: Tree, merge_options: MergeOptions): Index | null;
    note_foreach(notes_ref: string | null, callback: NoteCallback, user_data: object | null): boolean;
    path_is_ignored(path: string): boolean;
    read_note(notes_ref: string | null, id: OId): Note | null;
    rebase_init(branch: AnnotatedCommit | null, upstream: AnnotatedCommit | null, onto: AnnotatedCommit | null, options: RebaseOptions): Rebase | null;
    rebase_open(options: RebaseOptions): Rebase | null;
    references_foreach(callback: ReferencesCallback, user_data: object | null): boolean;
    references_foreach_name(callback: ReferencesNameCallback, user_data: object | null): boolean;
    remove_note(notes_ref: string | null, author: Signature, committer: Signature, id: OId): boolean;
    reset(target: Object, reset_type: ResetType, checkout_options: CheckoutOptions): void;
    reset_default(target: Object | null, pathspecs: string[]): void;
    revert(commit: Commit, options: RevertOptions): boolean;
    revparse(spec: string): Object | null;
    save_stash(stasher: Signature, message: string, flags: StashFlags): OId | null;
    set_head(ref_name: string): boolean;
    set_submodule_fetch_recurse(name: string, fetch_recurse_submodules: SubmoduleRecurse): void;
    set_submodule_ignore(name: string, ignore: SubmoduleIgnore): void;
    set_submodule_update(name: string, update: SubmoduleUpdate): void;
    set_submodule_url(name: string, url: string): void;
    set_workdir(workdir: Gio.File, update_gitlink: boolean): void;
    stash_foreach(callback: StashCallback, user_data: object | null): boolean;
    submodule_foreach(callback: SubmoduleCallback, user_data: object | null): boolean;
    tag_foreach(callback: TagCallback, user_data: object | null): boolean;
    static clone(url: string, location: Gio.File, options: CloneOptions | null): Repository | null;
    static discover(location: Gio.File): Gio.File | null;
    static discover_full(location: Gio.File, across_fs: boolean, ceiling_dirs: string[] | null): Gio.File | null;
    static init_repository(location: Gio.File, is_bare: boolean): Repository | null;
    static open(location: Gio.File): Repository | null;
}
export class RevisionWalker extends Native {
    constructor(config?: properties);
    repository: Repository;
    get_repository(): Repository | null;
    hide(oid: OId): void;
    hide_glob(item: string): void;
    hide_head(): void;
    hide_ref(item: string): void;
    next(): OId | null;
    push(oid: OId): void;
    push_glob(item: string): void;
    push_head(): void;
    push_range(range: string): void;
    push_ref(item: string): void;
    reset(): void;
    set_sort_mode(sort_mode: SortMode): void;
}
export class Signature extends Native {
    constructor(config?: properties);
    encoding: string;static new_now(name: string, email: string): Signature | null;
    copy(): Signature | null;
    get_email(): string | null;
    get_name(): string | null;
    get_time(): GLib.DateTime | null;
    get_time_zone(): GLib.TimeZone | null;
}
export class SubmoduleUpdateOptions extends GObject.Object {
    constructor(config?: properties);
    checkout_options: CheckoutOptions;
    fetch_options: FetchOptions;
    get_checkout_options(): CheckoutOptions | null;
    get_fetch_options(): FetchOptions;
    set_checkout_options(checkout_options: CheckoutOptions | null): void;
    set_fetch_options(fetch_options: FetchOptions | null): void;
}
export class Tag  {
    constructor(config?: properties);
    get_message(): string | null;
    get_name(): string | null;
    get_tagger(): Signature | null;
    get_target(): Object | null;
    get_target_id(): OId | null;
    get_target_type(): GType;
    peel(): Object | null;
}
export class Tree  {
    constructor(config?: properties);
    get(i: number): TreeEntry | null;
    get_by_name(name: string): TreeEntry | null;
    get_by_path(path: string): TreeEntry | null;
    get_id(): OId | null;
    size(): number;
    walk(mode: TreeWalkMode, callback: TreeWalkCallback, user_data: object | null): void;
}
export class TreeBuilder  {
    constructor(config?: properties);
    clear(): void;
    get_entry(path: string): TreeEntry | null;
    insert(filename: string, oid: OId, file_mode: FileMode): TreeEntry | null;
    remove(path: string): void;
    write(): OId | null;
}
export class AnnotatedCommit  {
    constructor(config?: properties);
    static new_from_ref(repository: Repository, ref: Ref): AnnotatedCommit;
    get_id(): OId | null;
    ref(): AnnotatedCommit | null;
    unref(): void;
}
export class BlameHunk  {
    constructor(config?: properties);
    get_final_commit_id(): OId | null;
    get_final_signature(): Signature | null;
    get_final_start_line_number(): number;
    get_lines_in_hunk(): number;
    get_orig_commit_id(): OId | null;
    get_orig_path(): string | null;
    get_orig_signature(): Signature | null;
    get_orig_start_line_number(): number;
    is_boundary(): boolean;
    ref(): BlameHunk | null;
    unref(): void;
}
export class BlameOptions  {
    constructor(config?: properties);
    copy(): BlameOptions | null;
    free(): void;
    get_maximum_line(): number;
    get_minimum_line(): number;
    get_minimum_match_characters(): number;
    get_newest_commit(): OId | null;
    get_oldest_commit(): OId | null;
    set_maximum_line(line: number): void;
    set_minimum_line(line: number): void;
    set_minimum_match_characters(characters: number): void;
    set_newest_commit(oid: OId | null): void;
    set_oldest_commit(oid: OId | null): void;
}
export class BranchEnumerator  {
    constructor(config?: properties);
    get(): Ref | null;
    iterator(): BranchEnumerator | null;
    next(): boolean;
    ref(): BranchEnumerator | null;
    unref(): void;
}
export class ConfigEntry  {
    constructor(config?: properties);
    get_level(): ConfigLevel;
    get_name(): string | null;
    get_value(): string | null;
    ref(): ConfigEntry | null;
    unref(): void;
}
export class CredSshInteractivePrompt  {
    constructor(config?: properties);
    get_instruction(): string;
    get_name(): string;
    get_response(): string;
    get_text(): string;
    is_masked(): boolean;
    ref(): CredSshInteractivePrompt;
    set_response(response: string): void;
    unref(): void;
}
export class DiffBinary  {
    constructor(config?: properties);
    get_new_file(): DiffBinaryFile | null;
    get_old_file(): DiffBinaryFile | null;
    ref(): DiffBinary | null;
    unref(): void;
}
export class DiffBinaryFile  {
    constructor(config?: properties);
    get_binary_type(): DiffBinaryType;
    get_data(size: number | null): number;
    get_inflated_size(): number;
    ref(): DiffBinaryFile;
    unref(): void;
}
export class DiffDelta  {
    constructor(config?: properties);
    get_flags(): DiffFlag;
    get_new_file(): DiffFile | null;
    get_old_file(): DiffFile | null;
    get_similarity(): number;
    get_status(): DeltaType;
    ref(): DiffDelta | null;
    unref(): void;
}
export class DiffFile  {
    constructor(config?: properties);
    get_flags(): DiffFlag;
    get_mode(): number;
    get_oid(): OId | null;
    get_path(): string | null;
    get_size(): number;
    ref(): DiffFile | null;
    unref(): void;
}
export class DiffHunk  {
    constructor(config?: properties);
    get_header(): string;
    get_new_lines(): number;
    get_new_start(): number;
    get_old_lines(): number;
    get_old_start(): number;
    ref(): DiffHunk | null;
    unref(): void;
}
export class DiffLine  {
    constructor(config?: properties);
    get_content(): [number[], number];
    get_content_offset(): number;
    get_new_lineno(): number;
    get_old_lineno(): number;
    get_origin(): DiffLineType;
    get_text(): string | null;
    ref(): DiffLine | null;
    unref(): void;
}
export class DiffSimilarityMetric  {
    constructor(config?: properties);
    copy(): DiffSimilarityMetric | null;
    free(): void;
}
export class FetchOptions  {
    constructor(config?: properties);
    copy(): FetchOptions | null;
    free(): void;
    get_download_tags(): RemoteDownloadTagsType;
    get_remote_callbacks(): RemoteCallbacks | null;
    set_download_tags(download_tags: RemoteDownloadTagsType): void;
    set_remote_callbacks(callbacks: RemoteCallbacks | null): void;
}
export class IndexEntries  {
    constructor(config?: properties);
    get_by_index(idx: number): IndexEntry | null;
    get_by_path(file: Gio.File, stage: number): IndexEntry | null;
    ref(): IndexEntries | null;
    size(): number;
    unref(): void;
}
export class IndexEntriesResolveUndo  {
    constructor(config?: properties);
    get(idx: number): IndexEntryResolveUndo | null;
    get_by_file(file: Gio.File): IndexEntryResolveUndo | null;
    ref(): IndexEntriesResolveUndo | null;
    size(): number;
    unref(): void;
}
export class IndexEntry  {
    constructor(config?: properties);
    get_dev(): number;
    get_file_size(): number;
    get_flags(): number;
    get_flags_extended(): number;
    get_gid(): number;
    get_id(): OId | null;
    get_ino(): number;
    get_mode(): number;
    get_path(): string;
    get_uid(): number;
    is_conflict(): boolean;
    ref(): IndexEntry | null;
    set_commit(commit: Commit): void;
    set_dev(dev: number): void;
    set_file_size(file_size: number): void;
    set_flags(flags: number): void;
    set_flags_extended(flags_extended: number): void;
    set_gid(gid: number): void;
    set_id(id: OId | null): void;
    set_ino(ino: number): void;
    set_mode(mode: number): void;
    set_path(path: string | null): void;
    set_uid(uid: number): void;
    stat(file: Gio.File): boolean;
    unref(): void;
}
export class IndexEntryResolveUndo  {
    constructor(config?: properties);
    get_file(): Gio.File | null;
    get_id(stage: number): OId | null;
    get_mode(stage: number): number;
    ref(): IndexEntryResolveUndo | null;
    unref(): void;
}
export class MergeOptions  {
    constructor(config?: properties);
    copy(): MergeOptions | null;
    free(): void;
    get_file_favor(): MergeFileFavor;
    get_file_flags(): MergeFileFlags;
    get_flags(): MergeFlags;
    get_rename_threshold(): number;
    get_similarity_metric(): DiffSimilarityMetric | null;
    get_target_limit(): number;
    set_file_favor(file_favor: MergeFileFavor): void;
    set_file_flags(file_flags: MergeFileFlags): void;
    set_flags(flags: MergeFlags): void;
    set_rename_threshold(rename_threshold: number): void;
    set_similarity_metric(metric: DiffSimilarityMetric): void;
    set_target_limit(target_limit: number): void;
}
export class Note  {
    constructor(config?: properties);
    get_id(): OId | null;
    get_message(): string | null;
    ref(): Note | null;
    unref(): void;
}
export class OId  {
    constructor(config?: properties);
    static new_from_raw(raw: number[]): OId | null;
    static new_from_string(str: string): OId | null;
    compare(b: OId): number;
    copy(): OId | null;
    equal(b: OId): boolean;
    free(): void;
    has_prefix(prefix: string): boolean;
    hash(): number;
    is_zero(): boolean;
    to_string(): string | null;
}
export class Patch  {
    constructor(config?: properties);
    static new_from_blobs(old_blob: Blob | null, old_as_path: string | null, new_blob: Blob | null, new_as_path: string | null, diff_options: DiffOptions | null): Patch | null;
    static new_from_diff(diff: Diff, idx: number): Patch | null;
    get_delta(): DiffDelta | null;
    get_hunk(idx: number): DiffHunk | null;
    get_line_stats(): [boolean, number | null,number | null,number | null];
    get_num_hunks(): number;
    get_num_lines_in_hunk(hunk: number): number;
    ref(): Patch | null;
    to_stream(stream: Gio.OutputStream): boolean;
    to_string(): string | null;
    unref(): void;
}
export class RebaseOperation  {
    constructor(config?: properties);
    get_exec(): string | null;
    get_id(): OId | null;
    get_operation_type(): RebaseOperationType;
    ref(): RebaseOperation | null;
    unref(): void;
}
export class RebaseOptions  {
    constructor(config?: properties);
    copy(): RebaseOptions | null;
    free(): void;
    get_checkout_options(): CheckoutOptions | null;
    get_quiet(): boolean;
    get_rewrite_notes_ref(): string | null;
    set_checkout_options(checkout_options: CheckoutOptions): void;
    set_quiet(quiet: boolean): void;
    set_rewrite_notes_ref(rewrite_notes_ref: string): void;
}
export class RefSpec  {
    constructor(config?: properties);
    get_destination(): string | null;
    get_source(): string | null;
    is_forced(): boolean;
    ref(): RefSpec | null;
    unref(): void;
}
export class Reflog  {
    constructor(config?: properties);
    append(oid: OId, committer: Signature, message: string): boolean;
    get_entry_count(): number;
    get_entry_from_index(idx: number): ReflogEntry | null;
    ref(): Reflog | null;
    rename(new_name: string): boolean;
    unref(): void;
    write(): boolean;
}
export class ReflogEntry  {
    constructor(config?: properties);
    get_committer(): Signature | null;
    get_message(): string | null;
    get_new_id(): OId | null;
    get_old_id(): OId | null;
    ref(): ReflogEntry | null;
    unref(): void;
}
export class RemoteHead  {
    constructor(config?: properties);
    get_local_oid(): OId | null;
    get_name(): string | null;
    get_oid(): OId | null;
    is_local(): boolean;
    ref(): RemoteHead;
    unref(): void;
}
export class RevertOptions  {
    constructor(config?: properties);
    copy(): RevertOptions | null;
    free(): void;
}
export class StatusOptions  {
    constructor(config?: properties);
    copy(): StatusOptions | null;
    free(): void;
}
export class Submodule  {
    constructor(config?: properties);
    get_fetch_recurse(): boolean;
    get_head_id(): OId;
    get_ignore(): SubmoduleIgnore;
    get_index_id(): OId | null;
    get_name(): string | null;
    get_owner(): Repository | null;
    get_path(): string | null;
    get_update(): SubmoduleUpdate;
    get_url(): string | null;
    get_workdir_id(): OId | null;
    init(overwrite: boolean): void;
    open(): Repository | null;
    ref(): Submodule | null;
    reload(force: boolean): void;
    sync(): void;
    unref(): void;
    update(init: boolean, options: SubmoduleUpdateOptions): void;
}
export class TransferProgress  {
    constructor(config?: properties);
    copy(): TransferProgress | null;
    free(): void;
    get_indexed_objects(): number;
    get_received_bytes(): number;
    get_received_objects(): number;
    get_total_objects(): number;
}
export class TreeEntry  {
    constructor(config?: properties);
    get_file_mode(): FileMode;
    get_id(): OId | null;
    get_name(): string | null;
    get_object_type(): GType;
    ref(): TreeEntry | null;
    unref(): void;
}