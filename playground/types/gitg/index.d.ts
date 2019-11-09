
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as GdkPixbuf from "gdkpixbuf";
import * as Ggit from "ggit";
import * as Gdk from "gdk";
import * as Gee from "gee";
import * as Pango from "pango";
import * as cairo from "cairo";
import * as Gitg from "gitg";
/**
 * gitg.d.ts
 */
type properties = { [key: string]: any };
/**
 * 
 */
export function commit_model_columns_type(): unknown;
/**
 * 
 */
export function init(): void;
export enum AuthenticationLifeTime {
    FORGET = 0,
    SESSION = 1,
    FOREVER = 2,
}
export enum CommitModelColumns {
    SHA1 = 0,
    SUBJECT = 1,
    MESSAGE = 2,
    AUTHOR = 3,
    AUTHOR_NAME = 4,
    AUTHOR_EMAIL = 5,
    AUTHOR_DATE = 6,
    COMMITTER = 7,
    COMMITTER_NAME = 8,
    COMMITTER_EMAIL = 9,
    COMMITTER_DATE = 10,
    COMMIT = 11,
    NUM = 12,
}
export enum RefType {
    NONE = 0,
    BRANCH = 1,
    REMOTE = 2,
    TAG = 3,
    STASH = 4,
}
export enum RefState {
    NONE = 0,
    SELECTED = 1,
    PRELIGHT = 2,
}
export enum RemoteState {
    DISCONNECTED = 0,
    CONNECTING = 1,
    CONNECTED = 2,
    TRANSFERRING = 3,
}
export enum SelectionMode {
    NORMAL = 0,
    SELECTION = 1,
}
export enum SidebarHint {
    NONE = 0,
    HEADER = 1,
    SEPARATOR = 2,
    DUMMY = 3,
}
export enum SidebarColumn {
    HINT = 0,
    SECTION = 1,
    ITEM = 2,
}
export enum CredentialsError {
    CANCELLED = 0,
}
export enum DateError {
    INVALID_FORMAT = 0,
}
export enum InitError {
    THREADS_UNSAFE = 0,
}
export enum RemoteError {
    ALREADY_CONNECTED = 0,
    ALREADY_CONNECTING = 1,
    ALREADY_DISCONNECTED = 2,
    STILL_CONNECTING = 3,
}
export enum StageError {
    PRE_COMMIT_HOOK_FAILED = 0,
    COMMIT_MSG_HOOK_FAILED = 1,
    NOTHING_TO_COMMIT = 2,
    INDEX_ENTRY_NOT_FOUND = 3,
}
export enum PatchSetType {
    ADD = a,
    REMOVE = r,
}
export enum LaneTag {
    NONE = 0,
    START = (null),
    END = (null),
    SIGN_STASH = (null),
    SIGN_STAGED = (null),
    SIGN_UNSTAGED = (null),
    HIDDEN = (null),
}
export enum StageCommitOptions {
    NONE = 0,
    SIGN_OFF = (null),
    AMEND = (null),
    SKIP_HOOKS = (null),
}
export class Async  {constructor(config?: properties);
static thread(func: unknown, func_target: object | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
static thread_finish(_res_: Gio.AsyncResult): void;
static thread_try(func: unknown, func_target: object | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
static thread_try_finish(_res_: Gio.AsyncResult): void;
}
export class AuthenticationDialog extends Gtk.Dialog {constructor(config?: properties);
readonly username: string;
readonly password: string;
readonly life_time: AuthenticationLifeTime;
get_username(): string;
get_password(): string;
get_life_time(): AuthenticationLifeTime;
}
export class AvatarCache  {constructor(config?: properties);
readonly priv: AvatarCachePrivate;
load(email: string, size: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
load_finish(_res_: Gio.AsyncResult): GdkPixbuf.Pixbuf | null;
static _default(): AvatarCache;
}
export class BranchBase extends Ggit.Branch {constructor(config?: properties);
}
export class CellRendererLanes extends Gtk.CellRendererText {constructor(config?: properties);
commit: Commit;
next_commit: Commit;
lane_width: number;
dot_width: number;
labels: string[];
get_ref_at_pos(widget: Gtk.Widget, x: number, cell_w: number): [Ref | null, number];
get_commit(): Commit | null;
set_commit(value: Commit | null): void;
get_next_commit(): Commit | null;
set_next_commit(value: Commit | null): void;
get_lane_width(): number;
set_lane_width(value: number): void;
get_dot_width(): number;
set_dot_width(value: number): void;
get_labels(): string[];
set_labels(value: string[]): void;
}
export class Color extends GObject.Object {constructor(config?: properties);
readonly r: number;
readonly g: number;
readonly b: number;
components(): [number,number,number];
next_index(): Color;
copy(): Color;
get_r(): number;
get_g(): number;
get_b(): number;
static reset(): void;
static next(): Color;
}
export class CommitListView extends Gtk.TreeView {constructor(config?: properties);
static for_repository(repository: Repository): CommitListView;
find_cell_at_pos(column: Gtk.TreeViewColumn, path: Gtk.TreePath, x: number): [Gtk.CellRenderer | null, number];
}
export class CommitModel extends GObject.Object {constructor(config?: properties);
limit: number;
sort_mode: Ggit.SortMode;
repository: Repository;
get_permanent_lanes(): [Ggit.OId[], number];
set_permanent_lanes(value: Ggit.OId[], value_length1: number): void;
reload(): void;
size(): number;
get(idx: number): Commit | null;
get(...args: never[]): never;
set_include(ids: Ggit.OId[], ids_length1: number): void;
get_include(): [Ggit.OId[], number];
set_exclude(ids: Ggit.OId[], ids_length1: number): void;
commit_from_iter(iter: Gtk.TreeIter): Commit | null;
path_from_commit(commit: Commit): Gtk.TreePath | null;
commit_from_path(path: Gtk.TreePath): Commit | null;
get_limit(): number;
set_limit(value: number): void;
get_sort_mode(): Ggit.SortMode;
set_sort_mode(value: Ggit.SortMode): void;
get_repository(): Repository;
set_repository(value: Repository): void;
}
export class Commit extends Ggit.Commit {constructor(config?: properties);
tag: LaneTag;
mylane: number;
readonly lane: Lane;
readonly format_patch_name: string;
readonly committer_date_for_display: string;
readonly author_date_for_display: string;
get_lanes(): string[];
insert_lane(lane: Lane, idx: number): string[];
remove_lane(lane: Lane): string[];
update_lanes(lanes: string[], mylane: number): void;
get_diff(options: Ggit.DiffOptions | null, parent: number): Ggit.Diff;
get_note(): Ggit.Note;
get_tag(): LaneTag;
set_tag(value: LaneTag): void;
get_mylane(): number;
set_mylane(value: number): void;
get_lane(): Lane;
get_format_patch_name(): string;
get_committer_date_for_display(): string;
get_author_date_for_display(): string;
}
export class CredentialsManager  {constructor(config?: properties);
credentials(url: string, username: string | null, allowed_types: Ggit.Credtype): Ggit.Cred | null;
}
export class Date extends GObject.Object {constructor(config?: properties);
date_string: string;
readonly date: GLib.DateTime;static for_date_time(dt: GLib.DateTime): Date;
for_display(): string;
get_date_string(): string;
set_date_string(value: string): void;
get_date(): GLib.DateTime;
static parse(date: string): GLib.DateTime;
}
export class DiffStat extends Gtk.DrawingArea {constructor(config?: properties);
added: number;
removed: number;
get_added(): number;
set_added(value: number): void;
get_removed(): number;
set_removed(value: number): void;
}
export class DiffViewOptions extends Gtk.Toolbar {constructor(config?: properties);
context_lines: number;
view: DiffView;
get_context_lines(): number;
set_context_lines(value: number): void;
get_view(): DiffView | null;
set_view(value: DiffView | null): void;
}
export class DiffView extends Gtk.Grid {constructor(config?: properties);
readonly options: Ggit.DiffOptions;
has_selection: boolean;
diff: Ggit.Diff;
commit: Commit;
wrap_lines: boolean;
staged: boolean;
unstaged: boolean;
show_parents: boolean;
default_collapse_all: boolean;
use_gravatar: boolean;
tab_width: number;
handle_selection: boolean;
highlight: boolean;
repository: Repository;
new_is_workdir: boolean;
ignore_whitespace: boolean;
changes_inline: boolean;
context_lines: number;
apply_link_tags(buffer: Gtk.TextBuffer, regex: GLib.Regex, replacement: string | null, custom_color_link: Gdk.RGBA, is_custom_color: boolean, is_custom_link: boolean): void;
follow_if_link(texview: Gtk.Widget, iter: Gtk.TextIter): void;
get_selection(): [PatchSet[], number];
get_options(): Ggit.DiffOptions;
get_has_selection(): boolean;
get_diff(): Ggit.Diff | null;
set_diff(value: Ggit.Diff | null): void;
get_commit(): Commit | null;
set_commit(value: Commit | null): void;
get_wrap_lines(): boolean;
set_wrap_lines(value: boolean): void;
get_staged(): boolean;
set_staged(value: boolean): void;
get_unstaged(): boolean;
set_unstaged(value: boolean): void;
get_show_parents(): boolean;
set_show_parents(value: boolean): void;
get_default_collapse_all(): boolean;
set_default_collapse_all(value: boolean): void;
get_use_gravatar(): boolean;
set_use_gravatar(value: boolean): void;
get_tab_width(): number;
set_tab_width(value: number): void;
get_handle_selection(): boolean;
set_handle_selection(value: boolean): void;
get_highlight(): boolean;
set_highlight(value: boolean): void;
get_repository(): Repository | null;
set_repository(value: Repository | null): void;
get_new_is_workdir(): boolean;
set_new_is_workdir(value: boolean): void;
get_ignore_whitespace(): boolean;
set_ignore_whitespace(value: boolean): void;
get_changes_inline(): boolean;
set_changes_inline(value: boolean): void;
get_context_lines(): number;
set_context_lines(value: number): void;
}
export class Hook extends GObject.Object {constructor(config?: properties);
environment: Gee.HashMap;
name: string;
working_directory: Gio.File;
readonly output: string[];
add_argument(arg: string): void;
exists_in(repository: Ggit.Repository): boolean;
run_sync(repository: Ggit.Repository): number;
run(repository: Ggit.Repository, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
run_finish(_res_: Gio.AsyncResult): number;
get_environment(): Gee.HashMap;
set_environment(value: Gee.HashMap): void;
get_name(): string;
set_name(value: string): void;
get_working_directory(): Gio.File | null;
set_working_directory(value: Gio.File | null): void;
get_output(): [string[], number];
}
export class LabelRenderer  {constructor(config?: properties);
static width(widget: Gtk.Widget, font: object | null, labels: string[]): number;
static draw(widget: Gtk.Widget, font: Pango.FontDescription, context: cairo.Context, labels: string[], area: Gdk.Rectangle): void;
static get_ref_at_pos(widget: Gtk.Widget, font: Pango.FontDescription, labels: string[], x: number): [Ref | null, number];
static render_ref(widget: Gtk.Widget, font: Pango.FontDescription, r: Ref, height: number, minwidth: number): GdkPixbuf.Pixbuf;
}
export class Lanes extends GObject.Object {constructor(config?: properties);
inactive_max: number;
inactive_collapse: number;
inactive_gap: number;
inactive_enabled: boolean;
miss_commits: Gee.LinkedList;
reset(reserved: Ggit.OId[] | null, reserved_length1: number, roots: Gee.HashSet | null): void;
next(next: Commit, save_miss: boolean): [boolean, string[],number];
get_inactive_max(): number;
set_inactive_max(value: number): void;
get_inactive_collapse(): number;
set_inactive_collapse(value: number): void;
get_inactive_gap(): number;
set_inactive_gap(value: number): void;
get_inactive_enabled(): boolean;
set_inactive_enabled(value: boolean): void;
get_miss_commits(): Gee.LinkedList;
set_miss_commits(value: Gee.LinkedList): void;
}
export class Lane extends GObject.Object {constructor(config?: properties);
static with_color(color: Color | null): Lane;
copy(): Lane;
dup(): Lane;
}
export class ProgressBin extends Gtk.Bin {constructor(config?: properties);
fraction: number;
get_fraction(): number;
set_fraction(value: number): void;
}
export class RefBase extends Ggit.Ref {constructor(config?: properties);
}
export class ParsedRefName extends GObject.Object {constructor(config?: properties);
rtype: RefType;
readonly name: string;
readonly shortname: string;
readonly remote_name: string;
readonly remote_branch: string;
readonly prefix: string;
get_rtype(): RefType;
get_name(): string;
get_shortname(): string;
get_remote_name(): string | null;
get_remote_branch(): string | null;
get_prefix(): string | null;
}
export class Remote extends Ggit.Remote {constructor(config?: properties);
readonly transfer_progress: number;
state: RemoteState;
fetch_specs: string[];
push_specs: string[];
credentials_provider: CredentialsProvider;
connect(direction: Ggit.Direction, callbacks: Ggit.RemoteCallbacks | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
connect(...args: never[]): never;
connect_finish(_res_: Gio.AsyncResult): void;
disconnect(_callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
disconnect(...args: never[]): never;
disconnect_finish(_res_: Gio.AsyncResult): void;
download(callbacks: Ggit.RemoteCallbacks | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
download(...args: never[]): never;
download_finish(_res_: Gio.AsyncResult): void;
push(branch: string, callbacks: Ggit.RemoteCallbacks | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
push(...args: never[]): never;
push_finish(_res_: Gio.AsyncResult): void;
fetch(message: string | null, callbacks: Ggit.RemoteCallbacks | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
fetch_finish(_res_: Gio.AsyncResult): void;
get_transfer_progress(): number;
get_state(): RemoteState;
get_fetch_specs(): [string[] | null, number];
set_fetch_specs(value: string[] | null, value_length1: number): void;
get_push_specs(): [string[] | null, number];
set_push_specs(value: string[] | null, value_length1: number): void;
get_credentials_provider(): CredentialsProvider | null;
set_credentials_provider(value: CredentialsProvider | null): void;
}
export class RepositoryListBox extends Gtk.ListBox {constructor(config?: properties);
mode: SelectionMode;
bookmarks_from_recent_files: boolean;
location: Gio.File;
readonly has_selection: boolean;
populate_bookmarks(): void;
end_cloning(row: RepositoryListBoxRow, repository: Repository | null): void;
begin_cloning(location: Gio.File): RepositoryListBoxRow | null;
add_repository(repository: Repository, visited: GLib.DateTime | null): RepositoryListBoxRow | null;
get_selection(): [RepositoryListBoxRow[], number];
filter_text(text: string | null): void;
get_mode(): SelectionMode;
set_mode(value: SelectionMode): void;
get_bookmarks_from_recent_files(): boolean;
set_bookmarks_from_recent_files(value: boolean): void;
get_location(): Gio.File | null;
set_location(value: Gio.File | null): void;
get_has_selection(): boolean;
}
export class RepositoryListBoxRow extends Gtk.ListBoxRow {constructor(config?: properties);
mode: SelectionMode;
selected: boolean;
repository: Repository;
can_remove: boolean;
time: GLib.DateTime;
fraction: number;
repository_name: string;
dirname: string;
branch_name: string;
loading: boolean;
get_mode(): SelectionMode;
set_mode(value: SelectionMode): void;
get_selected(): boolean;
set_selected(value: boolean): void;
get_repository(): Repository | null;
set_repository(value: Repository | null): void;
get_can_remove(): boolean;
set_can_remove(value: boolean): void;
get_time(): GLib.DateTime;
set_time(value: GLib.DateTime): void;
set_fraction(value: number): void;
get_repository_name(): string | null;
set_repository_name(value: string | null): void;
get_dirname(): string | null;
set_dirname(value: string | null): void;
get_branch_name(): string | null;
set_branch_name(value: string | null): void;
get_loading(): boolean;
set_loading(value: boolean): void;
}
export class Repository extends Ggit.Repository {constructor(config?: properties);
readonly name: string;
readonly stage: Stage;
clear_refs_cache(): void;
refs_for_id(id: Ggit.OId): string[];
lookup(t_type: unknown, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, id: Ggit.OId): object | null;
lookup(...args: never[]): never;
lookup_reference(name: string): Ref;
lookup_reference(...args: never[]): never;
lookup_reference_dwim(short_name: string): Ref;
lookup_reference_dwim(...args: never[]): never;
create_branch(name: string, obj: Ggit.Object, flags: Ggit.CreateFlags): Branch;
create_branch(...args: never[]): never;
create_reference(name: string, oid: Ggit.OId, message: string): Ref;
create_reference(...args: never[]): never;
create_symbolic_reference(name: string, target: string, message: string): Ref;
create_symbolic_reference(...args: never[]): never;
get_head(): Ref;
get_head(...args: never[]): never;
get_signature_with_environment(env: Gee.Map, envname: string): Ggit.Signature;
get_name(): string | null;
get_stage(): Stage;
static init_repository(location: Gio.File, is_bare: boolean): Repository;
init_repository(...args: never[]): never;
}
export class Resource  {constructor(config?: properties);
static load_css(id: string): Gtk.CssProvider | null;
}
export class SidebarStore extends Gtk.TreeStore {constructor(config?: properties);
readonly clearing: boolean;
append_dummy(text: string): SidebarStore;
append(item: SidebarItem): SidebarStore;
append(...args: never[]): never;
begin_header(text: string, id: number): SidebarStoreSidebarHeader;
end_header(): SidebarStore;
begin_section(): number;
end_section(): void;
clear(): void;
item_for_iter(iter: Gtk.TreeIter): SidebarItem;
activate(iter: Gtk.TreeIter, numclick: number): void;
get_clearing(): boolean;
}
export class SidebarStoreSidebarText extends GObject.Object {constructor(config?: properties);
}
export class SidebarStoreSidebarHeader extends SidebarStoreSidebarText {constructor(config?: properties);
readonly id: number;
get_id(): number;
}
export class Sidebar extends Gtk.TreeView {constructor(config?: properties);
model: SidebarStore;
readonly model: never;
select_function(sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean): boolean;
selection_changed(sel: Gtk.TreeSelection): void;
get_selected_iter(): [boolean, Gtk.TreeIter];
get_selected_item(t_type: unknown, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify): object | null;
get_selected_items(t_type: unknown, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify): [object[], number];
select(item: SidebarItem): void;
is_selected(item: SidebarItem): boolean;
get_model(): SidebarStore;
get_model(...args: never[]): never;
set_model(value: SidebarStore): void;
set_model(...args: never[]): never;
vfunc_select_function(sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean): boolean;
vfunc_selection_changed(sel: Gtk.TreeSelection): void;
}
export class StageStatusFile extends GObject.Object {constructor(config?: properties);
readonly flags: Ggit.StatusFlags;
get_flags(): Ggit.StatusFlags;
}
export class StageStatusSubmodule extends GObject.Object {constructor(config?: properties);
readonly submodule: Ggit.Submodule;
readonly is_dirty: boolean;
readonly flags: Ggit.SubmoduleStatus;
get_submodule(): Ggit.Submodule;
get_is_dirty(): boolean;
get_flags(): Ggit.SubmoduleStatus;
}
export class StageStatusEnumerator  {constructor(config?: properties);
readonly priv: StageStatusEnumeratorPrivate;
cancel(): void;
next_items(num: number, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
next_items_finish(_res_: Gio.AsyncResult): [StageStatusItem[], number];
}
export class PatchSet  {constructor(config?: properties);
reversed(): PatchSet;
}
export class Stage  {constructor(config?: properties);
readonly priv: StagePrivate;
refresh(_callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
refresh_finish(_res_: Gio.AsyncResult): void;
get_head_tree(_callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
get_head_tree_finish(_res_: Gio.AsyncResult): Ggit.Tree | null;
file_status(options: Ggit.StatusOptions | null): StageStatusEnumerator;
pre_commit_hook(author: Ggit.Signature, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
pre_commit_hook_finish(_res_: Gio.AsyncResult): void;
commit_index(index: Ggit.Index, reference: Ggit.Ref, message: string, author: Ggit.Signature, committer: Ggit.Signature, parents: Ggit.OId[] | null, parents_length1: number, options: StageCommitOptions, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
commit_index_finish(_res_: Gio.AsyncResult): Ggit.OId | null;
commit_tree(treeoid: Ggit.OId, reference: Ggit.Ref, message: string, author: Ggit.Signature, committer: Ggit.Signature, parents: Ggit.OId[] | null, parents_length1: number, options: StageCommitOptions, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
commit_tree_finish(_res_: Gio.AsyncResult): Ggit.OId | null;
commit(message: string, author: Ggit.Signature, committer: Ggit.Signature, options: StageCommitOptions, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
commit_finish(_res_: Gio.AsyncResult): Ggit.OId | null;
revert(file: Gio.File, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
revert_finish(_res_: Gio.AsyncResult): void;
revert_path(path: string, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
revert_path_finish(_res_: Gio.AsyncResult): void;
revert_patch(patch: PatchSet, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
revert_patch_finish(_res_: Gio.AsyncResult): void;
_delete(file: Gio.File, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
delete_finish(_res_: Gio.AsyncResult): void;
delete_path(path: string, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
delete_path_finish(_res_: Gio.AsyncResult): void;
stage(file: Gio.File, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
stage_finish(_res_: Gio.AsyncResult): void;
stage_path(path: string, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
stage_path_finish(_res_: Gio.AsyncResult): void;
stage_commit(path: string, commit: Ggit.Commit, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
stage_commit_finish(_res_: Gio.AsyncResult): void;
stage_patch(patch: PatchSet, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
stage_patch_finish(_res_: Gio.AsyncResult): void;
unstage(file: Gio.File, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
unstage_finish(_res_: Gio.AsyncResult): void;
unstage_path(path: string, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
unstage_path_finish(_res_: Gio.AsyncResult): void;
unstage_patch(patch: PatchSet, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
unstage_patch_finish(_res_: Gio.AsyncResult): void;
diff_index_all(files: StageStatusItem[] | null, files_length1: number, defopts: Ggit.DiffOptions | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
diff_index_all_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;
diff_index(f: StageStatusItem, defopts: Ggit.DiffOptions | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
diff_index_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;
diff_workdir_all(files: StageStatusItem[], files_length1: number, defopts: Ggit.DiffOptions | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
diff_workdir_all_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;
diff_workdir(f: StageStatusItem, defopts: Ggit.DiffOptions | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
diff_workdir_finish(_res_: Gio.AsyncResult): Ggit.Diff | null;
}
export class Theme extends Gtk.Widget {constructor(config?: properties);
is_theme_dark(): boolean;
static instance(): Theme;
}
export class Utils  {constructor(config?: properties);
static replace_home_dir_with_tilde(file: Gio.File): string;
static expand_home_dir(path: string): string;
}
export class WhenMapped  {constructor(config?: properties);
update(mapped: unknown, mapped_target: object | null, mapped_target_destroy_notify: GLib.DestroyNotify, lifetime: GObject.Object | null): void;
}
export class AsyncClass  {constructor(config?: properties);
readonly parent_class: GObject.TypeClass;
}
export class AsyncPrivate  {constructor(config?: properties);
}
export class AuthenticationDialogClass  {constructor(config?: properties);
readonly parent_class: Gtk.DialogClass;
}
export class AuthenticationDialogPrivate  {constructor(config?: properties);
}
export class AvatarCacheClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class AvatarCachePrivate  {constructor(config?: properties);
}
export class BranchBaseClass  {constructor(config?: properties);
readonly parent_class: Ggit.BranchClass;
}
export class BranchBasePrivate  {constructor(config?: properties);
}
export class CellRendererLanesClass  {constructor(config?: properties);
readonly parent_class: Gtk.CellRendererTextClass;
}
export class CellRendererLanesPrivate  {constructor(config?: properties);
}
export class ColorClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class ColorPrivate  {constructor(config?: properties);
}
export class CommitListViewClass  {constructor(config?: properties);
readonly parent_class: Gtk.TreeViewClass;
}
export class CommitListViewPrivate  {constructor(config?: properties);
}
export class CommitModelClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class CommitModelPrivate  {constructor(config?: properties);
}
export class CommitClass  {constructor(config?: properties);
readonly parent_class: Ggit.CommitClass;
}
export class CommitPrivate  {constructor(config?: properties);
}
export class CredentialsManagerClass  {constructor(config?: properties);
readonly parent_class: GObject.TypeClass;
}
export class CredentialsManagerPrivate  {constructor(config?: properties);
}
export class DateClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class DatePrivate  {constructor(config?: properties);
}
export class DiffStatClass  {constructor(config?: properties);
readonly parent_class: Gtk.DrawingAreaClass;
}
export class DiffStatPrivate  {constructor(config?: properties);
}
export class DiffViewOptionsClass  {constructor(config?: properties);
readonly parent_class: Gtk.ToolbarClass;
}
export class DiffViewOptionsPrivate  {constructor(config?: properties);
}
export class DiffViewClass  {constructor(config?: properties);
readonly parent_class: Gtk.GridClass;
readonly options_changed: unknown;
}
export class DiffViewPrivate  {constructor(config?: properties);
}
export class HookClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class HookPrivate  {constructor(config?: properties);
}
export class LabelRendererClass  {constructor(config?: properties);
readonly parent_class: GObject.TypeClass;
}
export class LabelRendererPrivate  {constructor(config?: properties);
}
export class LanesClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class LanesPrivate  {constructor(config?: properties);
}
export class LaneClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class LanePrivate  {constructor(config?: properties);
}
export class ProgressBinClass  {constructor(config?: properties);
readonly parent_class: Gtk.BinClass;
}
export class ProgressBinPrivate  {constructor(config?: properties);
}
export class RefBaseClass  {constructor(config?: properties);
readonly parent_class: Ggit.RefClass;
}
export class RefBasePrivate  {constructor(config?: properties);
}
export class ParsedRefNameClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class ParsedRefNamePrivate  {constructor(config?: properties);
}
export class RemoteClass  {constructor(config?: properties);
readonly parent_class: Ggit.RemoteClass;
}
export class RemotePrivate  {constructor(config?: properties);
}
export class RepositoryListBoxClass  {constructor(config?: properties);
readonly parent_class: Gtk.ListBoxClass;
}
export class RepositoryListBoxPrivate  {constructor(config?: properties);
}
export class RepositoryListBoxRowClass  {constructor(config?: properties);
readonly parent_class: Gtk.ListBoxRowClass;
}
export class RepositoryListBoxRowPrivate  {constructor(config?: properties);
}
export class RepositoryClass  {constructor(config?: properties);
readonly parent_class: Ggit.RepositoryClass;
}
export class RepositoryPrivate  {constructor(config?: properties);
}
export class ResourceClass  {constructor(config?: properties);
readonly parent_class: GObject.TypeClass;
}
export class ResourcePrivate  {constructor(config?: properties);
}
export class SidebarStoreClass  {constructor(config?: properties);
readonly parent_class: Gtk.TreeStoreClass;
}
export class SidebarStorePrivate  {constructor(config?: properties);
}
export class SidebarStoreSidebarTextClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class SidebarStoreSidebarTextPrivate  {constructor(config?: properties);
}
export class SidebarStoreSidebarHeaderClass  {constructor(config?: properties);
readonly parent_class: SidebarStoreSidebarTextClass;
}
export class SidebarStoreSidebarHeaderPrivate  {constructor(config?: properties);
}
export class SidebarClass  {constructor(config?: properties);
readonly parent_class: Gtk.TreeViewClass;
readonly select_function: unknown;
readonly selection_changed: unknown;
}
export class SidebarPrivate  {constructor(config?: properties);
}
export class StageStatusFileClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class StageStatusFilePrivate  {constructor(config?: properties);
}
export class StageStatusSubmoduleClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class StageStatusSubmodulePrivate  {constructor(config?: properties);
}
export class StageStatusEnumeratorClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class StageStatusEnumeratorPrivate  {constructor(config?: properties);
}
export class PatchSetClass  {constructor(config?: properties);
readonly parent_class: GObject.TypeClass;
}
export class PatchSetPrivate  {constructor(config?: properties);
}
export class PatchSetPatch  {constructor(config?: properties);
readonly type: PatchSetType;
readonly old_offset: number;
readonly new_offset: number;
readonly length: number;
}
export class StageClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class StagePrivate  {constructor(config?: properties);
}
export class ThemeClass  {constructor(config?: properties);
readonly parent_class: Gtk.WidgetClass;
}
export class ThemePrivate  {constructor(config?: properties);
}
export class UtilsClass  {constructor(config?: properties);
readonly parent_class: GObject.TypeClass;
}
export class UtilsPrivate  {constructor(config?: properties);
}
export class WhenMappedClass  {constructor(config?: properties);
readonly parent_class: GObject.TypeClass;
}
export class WhenMappedPrivate  {constructor(config?: properties);
}
export class BranchIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_upstream: unknown;
}
export class RefIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_owner: unknown;
readonly get_d_parsed_name: unknown;
readonly set_d_parsed_name: unknown;
readonly get_d_pushes: unknown;
readonly set_d_pushes: unknown;
readonly get_state: unknown;
readonly set_state: unknown;
readonly get_working: unknown;
readonly set_working: unknown;
}
export class CredentialsProviderIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly credentials: unknown;
}
export class SidebarItemIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly activate: unknown;
readonly get_text: unknown;
readonly get_icon_name: unknown;
}
export class StageStatusItemIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_path: unknown;
readonly get_is_staged: unknown;
readonly get_is_unstaged: unknown;
readonly get_is_untracked: unknown;
readonly get_icon_name: unknown;
}
export interface Branch  {
get_upstream(): Ref;
}
export interface Ref  {
d_parsed_name: ParsedRefName;
d_pushes: GLib.List;
state: RefState;
working: boolean;
get_owner(): Repository;
get_d_parsed_name(): ParsedRefName;
set_d_parsed_name(value: ParsedRefName): void;
get_d_pushes(): GLib.List | null;
set_d_pushes(value: GLib.List | null): void;
get_state(): RefState;
set_state(value: RefState): void;
get_working(): boolean;
set_working(value: boolean): void;
get_parsed_name(): ParsedRefName;
get_pushes(): GLib.List;
}
export interface CredentialsProvider  {
credentials(url: string, username_from_url: string | null, allowed_types: Ggit.Credtype): Ggit.Cred | null;
}
export interface SidebarItem  {
readonly text: string;
readonly icon_name: string;
activate(numclick: number): void;
get_text(): string;
get_icon_name(): string | null;
}
export interface StageStatusItem  {
readonly path: string;
readonly is_staged: boolean;
readonly is_unstaged: boolean;
readonly is_untracked: boolean;
readonly icon_name: string;
get_path(): string;
get_is_staged(): boolean;
get_is_unstaged(): boolean;
get_is_untracked(): boolean;
get_icon_name(): string | null;
}