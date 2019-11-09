
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GConf from "gconf";
/**
 * gconf.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type ChangeSetForeachFunc = (cs: ChangeSet, key: string, value: Value, user_data: object | null) => void;
export type ClientErrorHandlerFunc = (client: Client, error: GLib.Error) => void;
export type ClientNotifyFunc = (client: Client, cnxn_id: number, entry: Entry, user_data: object | null) => void;
export type ListenersCallback = (listeners: unknown, all_above_key: string, cnxn_id: number, listener_data: object | null, user_data: object | null) => void;
export type ListenersForeach = (location: string, cnxn_id: number, listener_data: object | null, user_data: object | null) => void;
export type ListenersPredicate = (location: string, cnxn_id: number, listener_data: object | null, user_data: object | null) => boolean;
export type NotifyFunc = (conf: unknown, cnxn_id: number, entry: Entry, user_data: object | null) => void;
/**
 * 
 */
export function concat_dir_and_key(dir: string, key: string): string;
/**
 * Detach from the config server and release
 * all related resources
 */
export function debug_shutdown(): number;
/**
 * 
 */
export function enum_to_string(lookup_table: EnumStringPair, enum_value: number): string;
/**
 * 
 */
export function error_quark(): GLib.Quark;
/**
 * Escape @arbitrary_text such that it's a valid key element (i.e. one
 * part of the key path). The escaped key won't pass gconf_valid_key()
 * because it isn't a whole key (i.e. it doesn't have a preceding
 * slash), but prepending a slash to the escaped text should always
 * result in a valid key.
 */
export function escape_key(arbitrary_text: string, len: number): string;
/**
 * 
 */
export function init(argc: number, argv: string): boolean;
/**
 * 
 */
export function is_initialized(): boolean;
/**
 * 
 */
export function key_is_below(above: string, below: string): boolean;
/**
 * 
 */
export function postinit(app: object | null, mod_info: object | null): void;
/**
 * 
 */
export function preinit(app: object | null, mod_info: object | null): void;
/**
 * 
 */
export function string_to_enum(lookup_table: EnumStringPair, str: string, enum_value_retloc: number): boolean;
/**
 * Converts a string escaped with gconf_escape_key() back into its origin
 * al
 * form.
 */
export function unescape_key(escaped_key: string, len: number): string;
/**
 * 
 */
export function unique_key(): string;
/**
 * 
 */
export function valid_key(key: string, why_invalid: string): boolean;
/**
 * 
 */
export function value_decode(encoded: string): Value;
export enum ClientErrorHandlingMode {
    HANDLE_NONE = 0,
    HANDLE_UNRETURNED = 1,
    HANDLE_ALL = 2,
}
export enum ClientPreloadType {
    PRELOAD_NONE = 0,
    PRELOAD_ONELEVEL = 1,
    PRELOAD_RECURSIVE = 2,
}
export enum Error {
    SUCCESS = 0,
    FAILED = 1,
    NO_SERVER = 2,
    NO_PERMISSION = 3,
    BAD_ADDRESS = 4,
    BAD_KEY = 5,
    PARSE_ERROR = 6,
    CORRUPT = 7,
    TYPE_MISMATCH = 8,
    IS_DIR = 9,
    IS_KEY = 10,
    OVERRIDDEN = 11,
    OAF_ERROR = 12,
    LOCAL_ENGINE = 13,
    LOCK_FAILED = 14,
    NO_WRITABLE_DATABASE = 15,
    IN_SHUTDOWN = 16,
}
export enum ValueType {
    INVALID = 0,
    STRING = 1,
    INT = 2,
    FLOAT = 3,
    BOOL = 4,
    SCHEMA = 5,
    LIST = 6,
    PAIR = 7,
}
export enum UnsetFlags {
    NAMES = 1,
}
export class Client  {
    constructor(config?: properties);
    readonly object: GObject.Object;
    readonly error_mode: ClientErrorHandlingMode;
    readonly dir_hash: GLib.HashTable;
    readonly cache_hash: GLib.HashTable;
    readonly notify_list: string[];
    readonly notify_handler: number;
    readonly pending_notify_count: number;
    readonly cache_dirs: GLib.HashTable;
    readonly cache_recursive_dirs: GLib.HashTable;
    add_dir(dir: string, preload: ClientPreloadType): void;
    all_dirs(dir: string): string[];
    all_entries(dir: string): string[];
    change_set_from_currentv(keys: string): ChangeSet;
    clear_cache(): void;
    commit_change_set(cs: ChangeSet, remove_committed: boolean): boolean;
    dir_exists(dir: string): boolean;
    error(error: GLib.Error): void;
    get(key: string): Value;
    get_bool(key: string): boolean;
    get_default_from_schema(key: string): Value;
    get_entry(key: string, locale: string, use_schema_default: boolean): Entry;
    get_float(key: string): number;
    get_int(key: string): number;
    get_pair(key: string, car_type: ValueType, cdr_type: ValueType, car_retloc: object | null, cdr_retloc: object | null): boolean;
    get_string(key: string): string;
    get_without_default(key: string): Value;
    key_is_writable(key: string): boolean;
    notify(key: string): void;
    notify_add(namespace_section: string, func: ClientNotifyFunc, user_data: object | null, destroy_notify: GLib.FreeFunc): number;
    notify_remove(cnxn: number): void;
    preload(dirname: string, type: ClientPreloadType): void;
    recursive_unset(key: string, flags: UnsetFlags): boolean;
    remove_dir(dir: string): void;
    reverse_change_set(cs: ChangeSet): ChangeSet;
    set(key: string, val: Value): void;
    set_bool(key: string, val: boolean): boolean;
    set_error_handling(mode: ClientErrorHandlingMode): void;
    set_float(key: string, val: number): boolean;
    set_int(key: string, val: number): boolean;
    set_pair(key: string, car_type: ValueType, cdr_type: ValueType, address_of_car: object | null, address_of_cdr: object | null): boolean;
    set_string(key: string, val: string): boolean;
    suggest_sync(): void;
    unreturned_error(error: GLib.Error): void;
    unset(key: string): boolean;
    value_changed(key: string, value: Value): void;
    static get_default(): Client;
}
export class ChangeSet  {
    constructor(config?: properties);
    check_value(key: string, value_retloc: Value): boolean;
    clear(): void;
    foreach(func: ChangeSetForeachFunc, user_data: object | null): void;
    ref(): ChangeSet;
    remove(key: string): void;
    set(key: string, value: Value): void;
    set_bool(key: string, val: boolean): void;
    set_float(key: string, val: number): void;
    set_int(key: string, val: number): void;
    set_nocopy(key: string, value: Value): void;
    set_pair(key: string, car_type: ValueType, cdr_type: ValueType, address_of_car: object | null, address_of_cdr: object | null): void;
    set_string(key: string, val: string): void;
    size(): number;
    unref(): void;
    unset(key: string): void;
}
export class Entry  {
    constructor(config?: properties);
    static new_nocopy(key: string, val: Value): Entry;
    copy(): Entry;
    equal(b: Entry): boolean;
    free(): void;
    get_is_default(): boolean;
    get_is_writable(): boolean;
    get_key(): string;
    get_schema_name(): string;
    get_value(): Value;
    ref(): Entry;
    set_is_default(is_default: boolean): void;
    set_is_writable(is_writable: boolean): void;
    set_schema_name(name: string): void;
    set_value(val: Value): void;
    set_value_nocopy(val: Value): void;
    steal_value(): Value;
    unref(): void;
}
export class EnumStringPair  {
    constructor(config?: properties);
    enum_value: number;
    str: string;
}
export class Value  {
    constructor(config?: properties);
    static new_from_string(type: ValueType, str: string): Value;
    compare(value_b: Value): number;
    copy(): Value;
    encode(): string;
    free(): void;
    get_bool(): boolean;
    get_car(): Value;
    get_cdr(): Value;
    get_float(): number;
    get_int(): number;
    get_list(): string[];
    get_list_type(): ValueType;
    get_string(): string;
    set_bool(the_bool: boolean): void;
    set_car(car: Value): void;
    set_car_nocopy(car: Value): void;
    set_cdr(cdr: Value): void;
    set_cdr_nocopy(cdr: Value): void;
    set_float(the_float: number): void;
    set_int(the_int: number): void;
    set_list_type(type: ValueType): void;
    set_string(the_str: string): void;
    to_string(): string;
    static decode(encoded: string): Value;
}