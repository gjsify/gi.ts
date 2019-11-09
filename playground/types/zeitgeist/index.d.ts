
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Zeitgeist from "zeitgeist";
/**
 * zeitgeist.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const SIG_DATASOURCES: string;
export const SECOND: number;
export const MINUTE: number;
export const HOUR: number;
export const DAY: number;
export const WEEK: number;
export const YEAR: number;
export const ALARM: string;
export const ATTACHMENT: string;
export const CALENDAR: string;
export const CALENDAR_DATA_OBJECT: string;
export const EVENT: string;
export const FREEBUSY: string;
export const JOURNAL: string;
export const TIMEZONE: string;
export const TODO: string;
export const CONTACT: string;
export const CONTACT_GROUP: string;
export const CONTACT_LIST: string;
export const CONTACT_LIST_DATA_OBJECT: string;
export const ORGANIZATION_CONTACT: string;
export const PERSON_CONTACT: string;
export const APPLICATION: string;
export const ARCHIVE: string;
export const ARCHIVE_ITEM: string;
export const ATTACHMENT: string;
export const AUDIO: string;
export const BOOKMARK: string;
export const BOOKMARK_FOLDER: string;
export const CURSOR: string;
export const DATA_CONTAINER: string;
export const DELETED_RESOURCE: string;
export const DOCUMENT: string;
export const EMBEDDED_FILE_DATA_OBJECT: string;
export const EXECUTABLE: string;
export const FILESYSTEM: string;
export const FILESYSTEM_IMAGE: string;
export const FILE_DATA_OBJECT: string;
export const FOLDER: string;
export const FONT: string;
export const HARD_DISK_PARTITION: string;
export const HTML_DOCUMENT: string;
export const ICON: string;
export const IMAGE: string;
export const MEDIA: string;
export const MEDIA_LIST: string;
export const MEDIA_STREAM: string;
export const MIND_MAP: string;
export const OPERATING_SYSTEM: string;
export const PAGINATED_TEXT_DOCUMENT: string;
export const PLAIN_TEXT_DOCUMENT: string;
export const PRESENTATION: string;
export const RASTER_IMAGE: string;
export const REMOTE_DATA_OBJECT: string;
export const REMOTE_PORT_ADDRESS: string;
export const SOFTWARE: string;
export const SOFTWARE_ITEM: string;
export const SOFTWARE_SERVICE: string;
export const SOURCE_CODE: string;
export const SPREADSHEET: string;
export const TEXT_DOCUMENT: string;
export const TRASH: string;
export const VECTOR_IMAGE: string;
export const VIDEO: string;
export const VISUAL: string;
export const WEBSITE: string;
export const WEB_DATA_OBJECT: string;
export const DATA_OBJECT: string;
export const INFORMATION_ELEMENT: string;
export const MOVIE: string;
export const MUSIC_ALBUM: string;
export const MUSIC_PIECE: string;
export const TVSERIES: string;
export const TVSHOW: string;
export const EMAIL: string;
export const IMMESSAGE: string;
export const MAILBOX: string;
export const MAILBOX_DATA_OBJECT: string;
export const MESSAGE: string;
export const MIME_ENTITY: string;
export const ACCEPT_EVENT: string;
export const ACCESS_EVENT: string;
export const APPLICATION_ACTION: string;
export const CREATE_EVENT: string;
export const DELETE_EVENT: string;
export const DENY_EVENT: string;
export const EVENT_INTERPRETATION: string;
export const EVENT_MANIFESTATION: string;
export const EXPIRE_EVENT: string;
export const HEURISTIC_ACTIVITY: string;
export const LEAVE_EVENT: string;
export const MODIFY_EVENT: string;
export const MOVE_EVENT: string;
export const RECEIVE_EVENT: string;
export const SCHEDULED_ACTIVITY: string;
export const SEND_EVENT: string;
export const SYSTEM_NOTIFICATION: string;
export const USER_ACTIVITY: string;
export const WORLD_ACTIVITY: string;
export const ENGINE_DBUS_NAME: string;
export const ENGINE_DBUS_PATH: string;
export const SIG_EVENT: string;
export const MAX_DBUS_RESULT_SIZE: number;
export const CACHE_SIZE: number;
/**
 * 
 */
export function data_sources_from_variant(sources_variant: GLib.Variant): DataSource[];
/**
 * 
 */
export function data_sources_to_variant(sources: GLib.HashTable): GLib.Variant;
/**
 * 
 */
export function events_from_variant(vevents: GLib.Variant): Event[];
/**
 * 
 */
export function events_to_variant(events: Event[]): GLib.Variant;
/**
 * 
 */
export function events_to_variant_with_limit(events: Event[], limit: number): GLib.Variant;
/**
 * 
 */
export function timestamp_from_timeval(timeval: GLib.TimeVal): number;
/**
 * 
 */
export function timestamp_to_timeval(timestamp: number): [GLib.TimeVal];
/**
 * 
 */
export function timestamp_from_now(): number;
/**
 * 
 */
export function timestamp_from_iso8601(datetime: string): number;
/**
 * 
 */
export function timestamp_to_iso8601(timestamp: number): string;
/**
 * 
 */
export function timestamp_from_date(date: GLib.Date): number;
/**
 * 
 */
export function timestamp_from_dmy(day: GLib.DateDay, month: GLib.DateMonth, year: GLib.DateYear): number;
/**
 * 
 */
export function timestamp_to_date(timestamp: number): [GLib.Date];
/**
 * 
 */
export function timestamp_next_midnight(timestamp: number): number;
/**
 * 
 */
export function timestamp_prev_midnight(timestamp: number): number;
/**
 * 
 */
export function symbol_get_display_name(symbol_uri: string): string;
/**
 * 
 */
export function symbol_get_description(symbol_uri: string): string;
/**
 * 
 */
export function symbol_get_all_parents(symbol_uri: string): GLib.List;
/**
 * 
 */
export function symbol_get_all_children(symbol_uri: string): GLib.List;
/**
 * 
 */
export function symbol_get_children(symbol_uri: string): GLib.List;
/**
 * 
 */
export function symbol_get_parents(symbol_uri: string): GLib.List;
/**
 * 
 */
export function symbol_is_a(symbol_uri: string | null, parent_uri: string | null): boolean;
/**
 * 
 */
export function utils_get_data_path(): string;
/**
 * 
 */
export function utils_get_default_data_path(): string;
/**
 * 
 */
export function utils_get_database_file_path(): string;
/**
 * 
 */
export function utils_set_database_file_path(path: string): void;
/**
 * 
 */
export function utils_get_database_file_backup_path(): string;
/**
 * 
 */
export function utils_get_database_file_retire_name(): string;
/**
 * 
 */
export function utils_get_local_extensions_path(): string;
/**
 * 
 */
export function utils_using_in_memory_database(): boolean;
/**
 * 
 */
export function utils_backup_database(): void;
/**
 * 
 */
export function utils_parse_negation(val: string): [boolean, string];
/**
 * 
 */
export function utils_parse_noexpand(val: string): [boolean, string];
/**
 * 
 */
export function utils_parse_wildcard(val: string): [boolean, string];
/**
 * 
 */
export function utils_is_empty_string(s: string | null): boolean;
/**
 * 
 */
export function utils_log_may_read_directly(): boolean;
/**
 * 
 */
export function result_type_is_sort_order_asc(result_type: ResultType): boolean;
/**
 * 
 */
export function register_mimetype(mimetype: string, interpretation_uri: string): void;
/**
 * 
 */
export function register_mimetype_regex(mimetype_regex: string, interpretation_uri: string): void;
/**
 * 
 */
export function interpretation_for_mimetype(mimetype: string | null): string | null;
/**
 * 
 */
export function register_uri_scheme(uri_scheme: string, manifestation_type: string): void;
/**
 * 
 */
export function manifestation_for_uri(uri: string): string | null;
export enum ResultType {
    MOST_RECENT_EVENTS = 0,
    LEAST_RECENT_EVENTS = 1,
    MOST_RECENT_SUBJECTS = 2,
    LEAST_RECENT_SUBJECTS = 3,
    MOST_POPULAR_SUBJECTS = 4,
    LEAST_POPULAR_SUBJECTS = 5,
    MOST_POPULAR_ACTOR = 6,
    LEAST_POPULAR_ACTOR = 7,
    MOST_RECENT_ACTOR = 8,
    LEAST_RECENT_ACTOR = 9,
    MOST_RECENT_ORIGIN = 10,
    LEAST_RECENT_ORIGIN = 11,
    MOST_POPULAR_ORIGIN = 12,
    LEAST_POPULAR_ORIGIN = 13,
    OLDEST_ACTOR = 14,
    MOST_RECENT_SUBJECT_INTERPRETATION = 15,
    LEAST_RECENT_SUBJECT_INTERPRETATION = 16,
    MOST_POPULAR_SUBJECT_INTERPRETATION = 17,
    LEAST_POPULAR_SUBJECT_INTERPRETATION = 18,
    MOST_RECENT_MIMETYPE = 19,
    LEAST_RECENT_MIMETYPE = 20,
    MOST_POPULAR_MIMETYPE = 21,
    LEAST_POPULAR_MIMETYPE = 22,
    MOST_RECENT_CURRENT_URI = 23,
    LEAST_RECENT_CURRENT_URI = 24,
    MOST_POPULAR_CURRENT_URI = 25,
    LEAST_POPULAR_CURRENT_URI = 26,
    MOST_RECENT_EVENT_ORIGIN = 27,
    LEAST_RECENT_EVENT_ORIGIN = 28,
    MOST_POPULAR_EVENT_ORIGIN = 29,
    LEAST_POPULAR_EVENT_ORIGIN = 30,
    MOST_RECENT_CURRENT_ORIGIN = 31,
    LEAST_RECENT_CURRENT_ORIGIN = 32,
    MOST_POPULAR_CURRENT_ORIGIN = 33,
    LEAST_POPULAR_CURRENT_ORIGIN = 34,
    RELEVANCY = 100,
}
export enum RelevantResultType {
    RECENT = 0,
    RELATED = 1,
}
export enum StorageState {
    NOT_AVAILABLE = 0,
    AVAILABLE = 1,
    ANY = 2,
}
export enum EngineError {
    BACKUP_FAILED = 0,
    DATABASE_BUSY = 1,
    DATABASE_CANTOPEN = 2,
    DATABASE_CORRUPT = 3,
    DATABASE_ERROR = 4,
    DATABASE_RETIRE_FAILED = 5,
    EXISTING_INSTANCE = 6,
    INVALID_ARGUMENT = 7,
    INVALID_EVENT = 8,
    INVALID_KEY = 9,
}
export enum DataModelError {
    INVALID_SIGNATURE = 0,
    NULL_EVENT = 1,
    TOO_MANY_RESULTS = 2,
}
export class DataSourceRegistry extends QueuedProxyWrapper {
    constructor(config?: properties);
    get_data_sources(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    get_data_sources_finish(_res_: Gio.AsyncResult): DataSource[];
    get_data_source_from_id(unique_id: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    get_data_source_from_id_finish(_res_: Gio.AsyncResult): DataSource;
    register_data_source(data_source: DataSource, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    register_data_source_finish(_res_: Gio.AsyncResult): boolean;
    set_data_source_enabled(unique_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    set_data_source_enabled_finish(_res_: Gio.AsyncResult): void;
}
export class Index extends QueuedProxyWrapper {
    constructor(config?: properties);
    search(query: string, time_range: TimeRange, event_templates: Event[], offset: number, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    search_finish(_res_: Gio.AsyncResult): ResultSet;
    search_with_relevancies(query: string, time_range: TimeRange, event_templates: Event[], storage_state: StorageState, offset: number, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    search_with_relevancies_finish(_res_: Gio.AsyncResult): [ResultSet, number[],number];
}
export class Log extends QueuedProxyWrapper {
    constructor(config?: properties);
    insert_event(event: Event, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    insert_event_finish(_res_: Gio.AsyncResult): number[];
    insert_events(events: Event[], cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    insert_events_finish(_res_: Gio.AsyncResult): number[];
    insert_event_no_reply(event: Event): void;
    insert_events_no_reply(events: Event[]): void;
    find_events(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    find_events_finish(_res_: Gio.AsyncResult): ResultSet;
    find_event_ids(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    find_event_ids_finish(_res_: Gio.AsyncResult): [number[], number];
    get_events(event_ids: number[], cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    get_events_finish(_res_: Gio.AsyncResult): ResultSet;
    find_related_uris(time_range: TimeRange, event_templates: Event[], result_event_templates: Event[], storage_state: StorageState, num_events: number, result_type: RelevantResultType, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    find_related_uris_finish(_res_: Gio.AsyncResult): [string[], number];
    delete_events(event_ids: number[], cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    delete_events_finish(_res_: Gio.AsyncResult): TimeRange;
    quit(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    quit_finish(_res_: Gio.AsyncResult): void;
    install_monitor(monitor: Monitor): void;
    remove_monitor(monitor: Monitor): void;
    get_version(): [number,number,number];
    get_extensions(): [string[], number];
    datapath(): string;
    static get_default(): Log;
}
export class Monitor extends GObject.Object {
    constructor(config?: properties);
    time_range: TimeRange;
    event_templates: Event[];
    get_templates(): Event[];
    get_path(): GLib.ObjectPath;
    get_time_range(): TimeRange;
    set_time_range(value: TimeRange): void;
    get_event_templates(): Event[];
    set_event_templates(value: Event[]): void;
}
export class QueuedProxyWrapper  {
    constructor(config?: properties);
    proxy_created: boolean;
    is_connected: boolean;
    readonly priv: QueuedProxyWrapperPrivate;
    proxy_acquired(proxy: GObject.Object): void;
    proxy_unavailable(err: Gio.IOErrorEnum): void;
    process_queued_methods(): void;
    name_owner_changed(pspec: GObject.ParamSpec): void;
    on_connection_established(): void;
    on_connection_lost(): void;
    wait_for_proxy(_callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    wait_for_proxy_finish(_res_: Gio.AsyncResult): void;
    get_proxy_created(): boolean;
    get_is_connected(): boolean;
}
export class DataSource extends GObject.Object {
    constructor(config?: properties);
    unique_id: string;
    name: string;
    description: string;
    event_templates: Event[];
    enabled: boolean;
    running: boolean;
    timestamp: number;static full(unique_id: string, name: string, description: string, templates: Event[] | null): DataSource;
    static from_variant(variant: GLib.Variant, reset_running: boolean): DataSource;
    to_variant(): GLib.Variant;
    get_unique_id(): string;
    set_unique_id(value: string): void;
    get_name(): string;
    set_name(value: string): void;
    get_description(): string;
    set_description(value: string): void;
    get_event_templates(): Event[] | null;
    set_event_templates(value: Event[] | null): void;
    get_enabled(): boolean;
    set_enabled(value: boolean): void;
    get_running(): boolean;
    set_running(value: boolean): void;
    get_timestamp(): number;
    set_timestamp(value: number): void;
}
export class Event extends GObject.Object {
    constructor(config?: properties);
    id: number;
    timestamp: number;
    origin: string;
    actor: string;
    interpretation: string;
    manifestation: string;
    subjects: Subject[];
    payload: GLib.ByteArray;static full(interpretation: string | null, manifestation: string | null, actor: string | null, origin: string | null, ___: any): Event;
    static from_variant(event_variant: GLib.Variant): Event;
    get_subject(index: number): Subject;
    num_subjects(): number;
    add_subject(subject: Subject): void;
    take_subject(subject: Subject): void;
    set_actor_from_app_info(info: Gio.AppInfo): void;
    to_variant(): GLib.Variant;
    debug_print(): void;
    matches_template(template_event: Event): boolean;
    get_id(): number;
    set_id(value: number): void;
    get_timestamp(): number;
    set_timestamp(value: number): void;
    get_origin(): string | null;
    set_origin(value: string | null): void;
    get_actor(): string | null;
    set_actor(value: string | null): void;
    get_interpretation(): string | null;
    set_interpretation(value: string | null): void;
    get_manifestation(): string | null;
    set_manifestation(value: string | null): void;
    get_subjects(): Subject[];
    set_subjects(value: Subject[]): void;
    get_payload(): GLib.ByteArray | null;
    set_payload(value: GLib.ByteArray | null): void;
}
export class Subject extends GObject.Object {
    constructor(config?: properties);
    uri: string;
    origin: string;
    text: string;
    storage: string;
    current_uri: string;
    current_origin: string;
    mimetype: string;
    interpretation: string;
    manifestation: string;static full(uri: string | null, interpretation: string | null, manifestation: string | null, mimetype: string | null, origin: string | null, text: string | null, storage: string | null): Subject;
    static move_event(source_uri: string | null, source_origin: string | null, destination_uri: string | null, destination_origin: string | null, interpretation: string | null, manifestation: string | null, mimetype: string | null, text: string | null, storage: string | null): Subject;
    static from_variant(subject_variant: GLib.Variant): Subject;
    to_variant(): GLib.Variant;
    matches_template(template_subject: Subject): boolean;
    get_uri(): string | null;
    set_uri(value: string | null): void;
    get_origin(): string | null;
    set_origin(value: string | null): void;
    get_text(): string | null;
    set_text(value: string | null): void;
    get_storage(): string | null;
    set_storage(value: string | null): void;
    get_current_uri(): string | null;
    set_current_uri(value: string | null): void;
    get_current_origin(): string | null;
    set_current_origin(value: string | null): void;
    get_mimetype(): string | null;
    set_mimetype(value: string | null): void;
    get_interpretation(): string | null;
    set_interpretation(value: string | null): void;
    get_manifestation(): string | null;
    set_manifestation(value: string | null): void;
}
export class TimeRange extends GObject.Object {
    constructor(config?: properties);
    start: number;
    end: number;static anytime(): TimeRange;
    static to_now(): TimeRange;
    static from_now(): TimeRange;
    static from_variant(variant: GLib.Variant): TimeRange;
    to_variant(): GLib.Variant;
    intersect(time_range: TimeRange): TimeRange | null;
    get_start(): number;
    get_end(): number;
}
export class SimpleResultSet extends GObject.Object {
    constructor(config?: properties);
    static with_num_matches(events: Event[], matches: number): SimpleResultSet;
}
export class DataSourceRegistryPrivate  {
    constructor(config?: properties);
}
export class IndexPrivate  {
    constructor(config?: properties);
}
export class LogPrivate  {
    constructor(config?: properties);
}
export class MonitorPrivate  {
    constructor(config?: properties);
}
export class QueuedProxyWrapperPrivate  {
    constructor(config?: properties);
}
export class QueuedProxyWrapperQueuedMethod  {
    constructor(config?: properties);
    queued_method: GLib.SourceFunc;
    get_queued_method(): [GLib.SourceFunc, object | null];
}
export class DataSourcePrivate  {
    constructor(config?: properties);
}
export class EventPrivate  {
    constructor(config?: properties);
}
export class SubjectPrivate  {
    constructor(config?: properties);
}
export class TimeRangePrivate  {
    constructor(config?: properties);
}
export class SimpleResultSetPrivate  {
    constructor(config?: properties);
}
export class VersionStruct  {
    constructor(config?: properties);
    readonly major: number;
    readonly minor: number;
    readonly micro: number;
}
export interface RemoteRegistry  {
    get_data_sources(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    get_data_sources_finish(_res_: Gio.AsyncResult): GLib.Variant;
    register_data_source(unique_id: string, name: string, description: string, event_templates: GLib.Variant, cancellable: Gio.Cancellable | null, sender: GLib.BusName | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    register_data_source_finish(_res_: Gio.AsyncResult): boolean;
    set_data_source_enabled(unique_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    set_data_source_enabled_finish(_res_: Gio.AsyncResult): void;
    get_data_source_from_id(unique_id: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    get_data_source_from_id_finish(_res_: Gio.AsyncResult): GLib.Variant;
}
export interface RemoteLog  {
    readonly extensions: string[];
    readonly version: VersionStruct;
    readonly datapath: string;
    delete_events(event_ids: number[], event_ids_length1: number, cancellable: Gio.Cancellable | null, sender: GLib.BusName | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    delete_events_finish(_res_: Gio.AsyncResult): GLib.Variant;
    find_event_ids(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: GLib.BusName | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    find_event_ids_finish(_res_: Gio.AsyncResult): [number[], number];
    find_events(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: GLib.BusName | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    find_events_finish(_res_: Gio.AsyncResult): GLib.Variant;
    find_related_uris(time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: GLib.BusName | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    find_related_uris_finish(_res_: Gio.AsyncResult): [string[], number];
    get_events(event_ids: number[], event_ids_length1: number, cancellable: Gio.Cancellable | null, sender: GLib.BusName | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    get_events_finish(_res_: Gio.AsyncResult): GLib.Variant;
    insert_events(events: GLib.Variant, cancellable: Gio.Cancellable | null, sender: GLib.BusName | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    insert_events_finish(_res_: Gio.AsyncResult): [number[], number];
    install_monitor(monitor_path: GLib.ObjectPath, time_range: GLib.Variant, event_templates: GLib.Variant, owner: GLib.BusName | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    install_monitor_finish(_res_: Gio.AsyncResult): void;
    remove_monitor(monitor_path: GLib.ObjectPath, owner: GLib.BusName | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    remove_monitor_finish(_res_: Gio.AsyncResult): void;
    quit(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    quit_finish(_res_: Gio.AsyncResult): void;
    get_extensions(): [string[], number];
    get_version(): [VersionStruct];
    get_datapath(): string;
}
export interface RemoteMonitor  {
    notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    notify_insert_finish(_res_: Gio.AsyncResult): void;
    notify_delete(time_range: GLib.Variant, event_ids: number[], event_ids_length1: number, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    notify_delete_finish(_res_: Gio.AsyncResult): void;
}
export interface RemoteSimpleIndexer  {
    search(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    search_finish(_res_: Gio.AsyncResult): [GLib.Variant,number];
    search_with_relevancies(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    search_with_relevancies_finish(_res_: Gio.AsyncResult): [GLib.Variant,number[],number,number];
}
export interface NetworkManagerDBus  {
    state(): number;
}
export interface ConnmanManagerDBus  {
    get_state(): string;
}
export interface ResultSet  {
    size(): number;
    estimated_matches(): number;
    next_value(): Event | null;
    has_next(): boolean;
    tell(): number;
    reset(): void;
    iterator(): ResultSet;
}