
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as TrackerMiner from "trackerminer";
/**
 * trackerminer.d.ts
 */
type properties = { [key: string]: any };
export const MINER_DBUS_INTERFACE: string;
export const MINER_DBUS_NAME_PREFIX: string;
export const MINER_DBUS_PATH_PREFIX: string;
export const MINER_ERROR_DOMAIN: string;
export enum DecoratorError {
    EMPTY = 0,
    PAUSED = 1,
}
export enum FilterPolicy {
    DENY = 0,
    ACCEPT = 1,
}
export enum FilterType {
    FILE = 0,
    DIRECTORY = 1,
    PARENT_DIRECTORY = 2,
}
export enum MinerError {
    NAME_MISSING = 0,
    NAME_UNAVAILABLE = 1,
    PAUSED = 2,
    PAUSED_ALREADY = 3,
    INVALID_COOKIE = 4,
}
export enum MinerFSError {
    MINER_FS_ERROR_INIT = 0,
}
export enum MinerFSEventType {
    CREATED = 0,
    UPDATED = 1,
    DELETED = 2,
    MOVED = 3,
}
export enum NetworkType {
    NONE = 0,
    UNKNOWN = 1,
    GPRS = 2,
    EDGE = 3,
    Gjs_3G = 4,
    LAN = 5,
}
export enum DirectoryFlags {
    NONE = 0,
    RECURSE = 2,
    CHECK_MTIME = 4,
    MONITOR = 8,
    IGNORE = 16,
    PRESERVE = 32,
    PRIORITY = 64,
    NO_STAT = 128,
    CHECK_DELETED = 256,
}
export class Decorator  {constructor(config?: properties);
class_names: string[];
commit_batch_size: number;
data_source: string;
priority_rdf_types: string[];
readonly priv: object;
delete_id(id: number): void;
get_class_names(): string[];
get_data_source(): string;
get_n_items(): number;
next(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
next_finish(result: Gio.AsyncResult): DecoratorInfo;
prepend_id(id: number, class_name_id: number): void;
set_priority_rdf_types(rdf_types: string): void;
static error_quark(): GLib.Quark;
}
export class DecoratorFS  {constructor(config?: properties);
readonly priv: object;
prepend_file(file: Gio.File): number;
}
export class IndexingTree extends GObject.Object {constructor(config?: properties);
filter_hidden: boolean;
root: Gio.File;static new_with_root(root: Gio.File): IndexingTree;
add(directory: Gio.File, flags: DirectoryFlags): void;
add_filter(filter: FilterType, glob_string: string): void;
clear_filters(type: FilterType): void;
file_is_indexable(file: Gio.File, file_type: Gio.FileType): boolean;
file_is_root(file: Gio.File): boolean;
file_matches_filter(type: FilterType, file: Gio.File): boolean;
get_default_policy(filter: FilterType): FilterPolicy;
get_filter_hidden(): boolean;
get_master_root(): Gio.File;
get_root(file: Gio.File): [Gio.File, DirectoryFlags];
list_roots(): GLib.List;
notify_update(file: Gio.File, recursive: boolean): boolean;
parent_is_indexable(parent: Gio.File, children: GLib.List): boolean;
remove(directory: Gio.File): void;
set_default_policy(filter: FilterType, policy: FilterPolicy): void;
set_filter_hidden(filter_hidden: boolean): void;
vfunc_child_updated(root: Gio.File, child: Gio.File): void;
vfunc_directory_added(directory: Gio.File): void;
vfunc_directory_removed(directory: Gio.File): void;
vfunc_directory_updated(directory: Gio.File): void;
}
export class Miner  {constructor(config?: properties);
connection: unknown;
progress: number;
remaining_time: number;
status: string;
readonly priv: MinerPrivate;
get_connection(): unknown;
is_paused(): boolean;
is_started(): boolean;
pause(): void;
resume(): boolean;
start(): void;
stop(): void;
static error_quark(): GLib.Quark;
}
export class MinerFS  {constructor(config?: properties);
data_provider: DataProvider;
processing_pool_ready_limit: number;
processing_pool_wait_limit: number;
root: Gio.File;
throttle: number;
readonly priv: MinerFSPrivate;
check_file(file: Gio.File, priority: number, check_parents: boolean): void;
get_data_provider(): DataProvider;
get_indexing_tree(): IndexingTree;
get_throttle(): number;
get_urn(file: Gio.File): string | null;
has_items_to_process(): boolean;
notify_finish(task: Gio.Task, sparql: string | null, error: GLib.Error): void;
query_urn(file: Gio.File): string;
set_throttle(throttle: number): void;
static error_quark(): GLib.Quark;
}
export class MinerOnline  {constructor(config?: properties);
readonly network_type: unknown;
get_network_type(): NetworkType;
}
export class MinerProxy extends GObject.Object {constructor(config?: properties);
dbus_connection: Gio.DBusConnection;
dbus_path: string;
miner: Miner;
}
export class DataProviderIface  {constructor(config?: properties);
readonly g_iface: GObject.TypeInterface;
readonly begin: unknown;
readonly begin_async: unknown;
readonly begin_finish: unknown;
readonly padding: object[];
}
export class DecoratorClass  {constructor(config?: properties);
readonly parent_class: MinerClass;
readonly items_available: unknown;
readonly finished: unknown;
readonly padding: object[];
}
export class DecoratorFSClass  {constructor(config?: properties);
readonly parent_class: DecoratorClass;
readonly padding: object[];
}
export class DecoratorInfo  {constructor(config?: properties);
complete(sparql: string): void;
complete_error(error: GLib.Error): void;
get_mimetype(): string;
get_task(): Gio.Task;
get_url(): string;
get_urn(): string;
ref(): DecoratorInfo;
unref(): void;
}
export class IndexingTreeClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly directory_added: unknown;
readonly directory_removed: unknown;
readonly directory_updated: unknown;
readonly child_updated: unknown;
readonly padding: object[];
}
export class MinerClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly started: unknown;
readonly stopped: unknown;
readonly paused: unknown;
readonly resumed: unknown;
readonly progress: unknown;
readonly padding: object[];
}
export class MinerFSClass  {constructor(config?: properties);
readonly process_file: unknown;
readonly finished: unknown;
readonly process_file_attributes: unknown;
readonly finished_root: unknown;
readonly remove_file: unknown;
readonly remove_children: unknown;
readonly move_file: unknown;
readonly filter_event: unknown;
readonly padding: object[];
}
export class MinerFSPrivate  {constructor(config?: properties);
}
export class MinerOnlineClass  {constructor(config?: properties);
readonly parent_class: MinerClass;
readonly connected: unknown;
readonly disconnected: unknown;
readonly padding: object[];
}
export class MinerPrivate  {constructor(config?: properties);
}
export class MinerProxyClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly padding: object[];
}
export interface DataProvider  {
begin(url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable: Gio.Cancellable | null): Gio.FileEnumerator;
begin_async(url: Gio.File, attributes: string, flags: DirectoryFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
begin_finish(result: Gio.AsyncResult): Gio.FileEnumerator;
}