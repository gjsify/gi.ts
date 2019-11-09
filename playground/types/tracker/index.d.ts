
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Tracker from "tracker";
/**
 * tracker.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const DBUS_SERVICE: string;
export const DBUS_INTERFACE_RESOURCES: string;
export const DBUS_OBJECT_RESOURCES: string;
export const DBUS_INTERFACE_STATISTICS: string;
export const DBUS_OBJECT_STATISTICS: string;
export const DBUS_INTERFACE_STATUS: string;
export const DBUS_OBJECT_STATUS: string;
export const DBUS_INTERFACE_STEROIDS: string;
export const DBUS_OBJECT_STEROIDS: string;
/**
 * Checks that the Tracker library in use is compatible with the
 * given version. Generally you would pass in the constants
 * #TRACKER_MAJOR_VERSION, #TRACKER_MINOR_VERSION, #TRACKER_MICRO_VERSION
 * as the three arguments to this function; that produces
 * a check that the library in use is compatible with
 * the version of Tracker the application or module was compiled
 * against.
 * Compatibility is defined by two things: first the version
 * of the running library is newer than the version
 * @required_major.required_minor.@required_micro. Second
 * the running library must be binary compatible with the
 * version @required_major.required_minor.@required_micro
 * (same major version.)
 */
export function check_version(required_major: number, required_minor: number, required_micro: number): string;
/**
 * 
 */
export function sparql_escape_uri(uri: string): string;
/**
 * 
 */
export function sparql_escape_string(literal: string): string;
/**
 * 
 */
export function sparql_get_uuid_urn(): string;
export enum NotifierEventType {
    CREATE = 0,
    DELETE = 1,
    UPDATE = 2,
}
export enum SparqlConnectionFlags {
    NONE = 0,
    READONLY = (null),
}
export enum SparqlValueType {
    UNBOUND = 0,
    URI = 1,
    STRING = 2,
    INTEGER = 3,
    DOUBLE = 4,
    DATETIME = 5,
    BLANK_NODE = 6,
    BOOLEAN = 7,
}
export enum Error {
    PARSE = 0,
    UNKNOWN_CLASS = 1,
    UNKNOWN_PROPERTY = 2,
    TYPE = 3,
    CONSTRAINT = 4,
    NO_SPACE = 5,
    INTERNAL = 6,
    UNSUPPORTED = 7,
}
export enum SparqlBuilderState {
    UPDATE = 0,
    INSERT = 1,
    DELETE = 2,
    SUBJECT = 3,
    PREDICATE = 4,
    OBJECT = 5,
    BLANK = 6,
    WHERE = 7,
    EMBEDDED_INSERT = 8,
    GRAPH = 9,
}
export enum NotifierFlags {
    NONE = 0,
    QUERY_URN = 2,
    QUERY_LOCATION = 4,
    NOTIFY_UNEXTRACTED = 8,
}
export class NamespaceManager extends GObject.Object {
    constructor(config?: properties);
    add_prefix(prefix: string, ns: string): void;
    expand_uri(compact_uri: string): string;
    foreach(func: GLib.HFunc, user_data: object | null): void;
    has_prefix(prefix: string): boolean;
    lookup_prefix(prefix: string): string;
    print_turtle(): string;
    static get_default(): NamespaceManager;
}
export class Notifier extends GObject.Object {
    constructor(config?: properties);
    classes: string[];
}
export class Resource extends GObject.Object {
    constructor(config?: properties);
    identifier: string;
    add_boolean(property_uri: string, value: boolean): void;
    add_double(property_uri: string, value: number): void;
    add_gvalue(property_uri: string, value: GObject.Value): void;
    add_int(property_uri: string, value: number): void;
    add_int64(property_uri: string, value: number): void;
    add_relation(property_uri: string, resource: Resource): void;
    add_string(property_uri: string, value: string): void;
    add_uri(property_uri: string, value: string): void;
    get_first_boolean(property_uri: string): boolean;
    get_first_double(property_uri: string): number;
    get_first_int(property_uri: string): number;
    get_first_int64(property_uri: string): number;
    get_first_relation(property_uri: string): Resource;
    get_first_string(property_uri: string): string;
    get_first_uri(property_uri: string): string;
    get_identifier(): string;
    get_values(property_uri: string): GLib.List;
    identifier_compare_func(identifier: string): number;
    print_jsonld(namespaces: NamespaceManager | null): string;
    print_sparql_update(namespaces: NamespaceManager | null, graph_id: string | null): string;
    print_turtle(namespaces: NamespaceManager | null): string;
    set_boolean(property_uri: string, value: boolean): void;
    set_double(property_uri: string, value: number): void;
    set_gvalue(property_uri: string, value: GObject.Value): void;
    set_identifier(identifier: string | null): void;
    set_int(property_uri: string, value: number): void;
    set_int64(property_uri: string, value: number): void;
    set_relation(property_uri: string, resource: Resource): void;
    set_string(property_uri: string, value: string): void;
    set_uri(property_uri: string, value: string): void;
}
export class SparqlBuilder extends GObject.Object {
    constructor(config?: properties);
    readonly result: string;
    length: number;
    readonly state: SparqlBuilderState;static update(): SparqlBuilder;
    static embedded_insert(): SparqlBuilder;
    insert_open(graph: string | null): void;
    insert_silent_open(graph: string | null): void;
    insert_close(): void;
    delete_open(graph: string | null): void;
    delete_close(): void;
    graph_open(graph: string): void;
    graph_close(): void;
    where_open(): void;
    where_close(): void;
    subject_variable(var_name: string): void;
    object_variable(var_name: string): void;
    subject_iri(iri: string): void;
    subject(s: string): void;
    predicate_iri(iri: string): void;
    predicate(s: string): void;
    object_iri(iri: string): void;
    object(s: string): void;
    object_string(literal: string): void;
    object_unvalidated(value: string): void;
    object_boolean(literal: boolean): void;
    object_int64(literal: number): void;
    object_date(literal: number): [number];
    object_double(literal: number): void;
    object_blank_open(): void;
    object_blank_close(): void;
    prepend(raw: string): void;
    append(raw: string): void;
    get_result(): string;
    get_length(): number;
    get_state(): SparqlBuilderState;
}
export class SparqlConnection  {
    constructor(config?: properties);
    readonly priv: SparqlConnectionPrivate;
    query(sparql: string, cancellable: Gio.Cancellable | null): SparqlCursor;
    query_async(sparql: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    query_finish(_res_: Gio.AsyncResult): SparqlCursor;
    update(sparql: string, priority: number, cancellable: Gio.Cancellable | null): void;
    update_async(sparql: string, priority: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    update_finish(_res_: Gio.AsyncResult): void;
    update_array_async(sparql: string[], sparql_length1: number, priority: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    update_array_finish(_res_: Gio.AsyncResult): Error[] | null;
    update_blank(sparql: string, priority: number, cancellable: Gio.Cancellable | null): GLib.Variant | null;
    update_blank_async(sparql: string, priority: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant | null;
    load(file: Gio.File, cancellable: Gio.Cancellable | null): void;
    load_async(file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    load_finish(_res_: Gio.AsyncResult): void;
    statistics(cancellable: Gio.Cancellable | null): SparqlCursor | null;
    statistics_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    statistics_finish(_res_: Gio.AsyncResult): SparqlCursor | null;
    get_namespace_manager(): NamespaceManager | null;
    query_statement(sparql: string, cancellable: Gio.Cancellable | null): SparqlStatement | null;
    static get_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    static get_finish(_res_: Gio.AsyncResult): SparqlConnection;
    static get(cancellable: Gio.Cancellable | null): SparqlConnection;
    static remote_new(uri_base: string): SparqlConnection;
    static local_new(flags: SparqlConnectionFlags, store: Gio.File, journal: Gio.File | null, ontology: Gio.File | null, cancellable: Gio.Cancellable | null): SparqlConnection;
    static local_new_async(flags: SparqlConnectionFlags, store: Gio.File, journal: Gio.File | null, ontology: Gio.File | null, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    static local_new_finish(_res_: Gio.AsyncResult): SparqlConnection;
    static set_domain(domain: string | null): void;
    static get_domain(): string | null;
    static set_dbus_connection(dbus_connection: Gio.DBusConnection): void;
    static get_dbus_connection(): Gio.DBusConnection | null;
}
export class SparqlCursor  {
    constructor(config?: properties);
    connection: SparqlConnection;
    readonly n_columns: number;
    readonly priv: SparqlCursorPrivate;
    get_value_type(column: number): SparqlValueType;
    get_variable_name(column: number): string | null;
    get_string(column: number): [string | null, number];
    next(cancellable: Gio.Cancellable | null): boolean;
    next_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    next_finish(_res_: Gio.AsyncResult): boolean;
    rewind(): void;
    close(): void;
    get_integer(column: number): number;
    get_double(column: number): number;
    get_boolean(column: number): boolean;
    is_bound(column: number): boolean;
    get_connection(): SparqlConnection;
    set_connection(value: SparqlConnection): void;
    get_n_columns(): number;
}
export class SparqlStatement  {
    constructor(config?: properties);
    sparql: string;
    connection: SparqlConnection;
    readonly priv: SparqlStatementPrivate;
    bind_int(name: string, value: number): void;
    bind_boolean(name: string, value: boolean): void;
    bind_string(name: string, value: string): void;
    bind_double(name: string, value: number): void;
    execute(cancellable: Gio.Cancellable | null): SparqlCursor;
    execute_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    execute_finish(_res_: Gio.AsyncResult): SparqlCursor;
    get_sparql(): string;
    set_sparql(value: string): void;
    get_connection(): SparqlConnection;
    set_connection(value: SparqlConnection): void;
}
export class NotifierEvent  {
    constructor(config?: properties);
    get_event_type(): NotifierEventType;
    get_id(): number;
    get_location(): string | null;
    get_type(): string;
    get_urn(): string;
}
export class SparqlBuilderPrivate  {
    constructor(config?: properties);
}
export class SparqlConnectionPrivate  {
    constructor(config?: properties);
}
export class SparqlCursorPrivate  {
    constructor(config?: properties);
}
export class SparqlStatementPrivate  {
    constructor(config?: properties);
}