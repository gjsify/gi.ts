
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Secret from "secret";
/**
 * secret.d.ts
 */
type properties = { [key: string]: any };
export const COLLECTION_DEFAULT: string;
export const COLLECTION_SESSION: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
/**
 * Build up a hash table of attribute values.
 * The variable argument list should contain pairs of a) The attribute na
 * me as
 * a null-terminated string, followed by b) attribute value, either a cha
 * racter
 * string, an int number, or a gboolean value, as defined in the password
 * @schema. The list of attribtues should be terminated with a %NULL.
 */
export function attributes_build(schema: Schema, ___: unknown[]): GLib.HashTable;
/**
 * Build up a hash table of attribute values.
 * The variable argument list should contain pairs of a) The attribute na
 * me as
 * a null-terminated string, followed by b) attribute value, either a cha
 * racter
 * string, an int number, or a gboolean value, as defined in the password
 * @schema. The list of attribtues should be terminated with a %NULL.
 */
export function attributes_buildv(schema: Schema, va: any): GLib.HashTable;
/**
 * 
 */
export function error_get_quark(): GLib.Quark;
/**
 * Get a secret storage schema of the given @type.
 * C code may access the schemas (such as %SECRET_SCHEMA_NOTE) directly, 
 * but
 * language bindings cannot, and must use this accessor.
 */
export function get_schema(type: SchemaType): Schema;
/**
 * Clear unlocked matching passwords from the secret service.
 * The variable argument list should contain pairs of a) The attribute na
 * me as
 * a null-terminated string, followed by b) attribute value, either a cha
 * racter
 * string, an int number, or a gboolean value, as defined in the password
 * @schema. The list of attribtues should be terminated with a %NULL.
 * All unlocked items that match the attributes will be deleted.
 * This method will return immediately and complete asynchronously.
 */
export function password_clear(schema: Schema, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null, ___: unknown[]): void;
/**
 * Finish an asynchronous operation to remove passwords from the secret
 * service.
 */
export function password_clear_finish(result: Gio.AsyncResult): boolean;
/**
 * Remove unlocked matching passwords from the secret service.
 * The variable argument list should contain pairs of a) The attribute na
 * me as
 * a null-terminated string, followed by b) attribute value, either a cha
 * racter
 * string, an int number, or a gboolean value, as defined in the password
 * @schema. The list of attribtues should be terminated with a %NULL.
 * All unlocked items that match the attributes will be deleted.
 * This method may block indefinitely and should not be used in user inte
 * rface
 * threads.
 */
export function password_clear_sync(schema: Schema, cancellable: Gio.Cancellable | null, error: GLib.Error, ___: unknown[]): boolean;
/**
 * Remove unlocked matching passwords from the secret service.
 * The @attributes should be a set of key and value string pairs.
 * All unlocked items that match the attributes will be deleted.
 * This method will return immediately and complete asynchronously.
 */
export function password_clearv(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Remove unlocked matching passwords from the secret service.
 * The @attributes should be a set of key and value string pairs.
 * All unlocked items that match the attributes will be deleted.
 * This method may block indefinitely and should not be used in user inte
 * rface
 * threads.
 */
export function password_clearv_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean;
/**
 * Clear the memory used by a password, and then free it.
 * This function must be used to free nonpageable memory returned by
 * secret_password_lookup_nonpageable_finish(),
 * secret_password_lookup_nonpageable_sync() or
 * secret_password_lookupv_nonpageable_sync().
 */
export function password_free(password: string | null): void;
/**
 * Lookup a password in the secret service.
 * The variable argument list should contain pairs of a) The attribute na
 * me as
 * a null-terminated string, followed by b) attribute value, either a cha
 * racter
 * string, an int number, or a gboolean value, as defined in the password
 * @schema. The list of attribtues should be terminated with a %NULL.
 * If no secret is found then %NULL is returned.
 * This method will return immediately and complete asynchronously.
 */
export function password_lookup(schema: Schema, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null, ___: unknown[]): void;
/**
 * Finish an asynchronous operation to lookup a password in the secret se
 * rvice.
 */
export function password_lookup_binary_finish(result: Gio.AsyncResult): Value;
/**
 * Lookup a password in the secret service.
 * This is similar to secret_password_lookup_sync(), but returns a
 * #SecretValue instead of a null-terminated password.
 * This method may block indefinitely and should not be used in user inte
 * rface
 * threads.
 */
export function password_lookup_binary_sync(schema: Schema, cancellable: Gio.Cancellable | null, error: GLib.Error, ___: unknown[]): Value;
/**
 * Finish an asynchronous operation to lookup a password in the secret se
 * rvice.
 */
export function password_lookup_finish(result: Gio.AsyncResult): string;
/**
 * Finish an asynchronous operation to lookup a password in the secret se
 * rvice.
 */
export function password_lookup_nonpageable_finish(result: Gio.AsyncResult): string;
/**
 * Lookup a password in the secret service.
 * The variable argument list should contain pairs of a) The attribute na
 * me as
 * a null-terminated string, followed by b) attribute value, either a cha
 * racter
 * string, an int number, or a gboolean value, as defined in the password
 * @schema. The list of attribtues should be terminated with a %NULL.
 * If no secret is found then %NULL is returned.
 * This method may block indefinitely and should not be used in user inte
 * rface
 * threads.
 */
export function password_lookup_nonpageable_sync(schema: Schema, cancellable: Gio.Cancellable | null, error: GLib.Error, ___: unknown[]): string;
/**
 * Lookup a password in the secret service.
 * The variable argument list should contain pairs of a) The attribute na
 * me as
 * a null-terminated string, followed by b) attribute value, either a cha
 * racter
 * string, an int number, or a gboolean value, as defined in the password
 * @schema. The list of attributes should be terminated with a %NULL.
 * If no secret is found then %NULL is returned.
 * This method may block indefinitely and should not be used in user inte
 * rface
 * threads.
 */
export function password_lookup_sync(schema: Schema, cancellable: Gio.Cancellable | null, error: GLib.Error, ___: unknown[]): string;
/**
 * Lookup a password in the secret service.
 * The @attributes should be a set of key and value string pairs.
 * If no secret is found then %NULL is returned.
 * This method will return immediately and complete asynchronously.
 */
export function password_lookupv(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Lookup a password in the secret service.
 * This is similar to secret_password_lookupv_sync(), but returns a
 * #SecretValue instead of a null-terminated password.
 * This method may block indefinitely and should not be used in user inte
 * rface
 * threads.
 */
export function password_lookupv_binary_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): Value;
/**
 * Lookup a password in the secret service.
 * The @attributes should be a set of key and value string pairs.
 * If no secret is found then %NULL is returned.
 * This method may block indefinitely and should not be used in user inte
 * rface
 * threads.
 */
export function password_lookupv_nonpageable_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): string;
/**
 * Lookup a password in the secret service.
 * The @attributes should be a set of key and value string pairs.
 * If no secret is found then %NULL is returned.
 * This method may block indefinitely and should not be used in user inte
 * rface
 * threads.
 */
export function password_lookupv_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): string;
/**
 * Search for items in the secret service.
 * The variable argument list should contain pairs of a) The attribute na
 * me as
 * a null-terminated string, followed by b) attribute value, either a cha
 * racter
 * string, an int number, or a gboolean value, as defined in the password
 * @schema. The list of attribtues should be terminated with a %NULL.
 * This method will return immediately and complete asynchronously.
 */
export function password_search(schema: Schema, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null, ___: unknown[]): void;
/**
 * Finish an asynchronous operation to search for items in the secret ser
 * vice.
 */
export function password_search_finish(result: Gio.AsyncResult): GLib.List;
/**
 * Search for items in the secret service.
 * The variable argument list should contain pairs of a) The attribute na
 * me as
 * a null-terminated string, followed by b) attribute value, either a cha
 * racter
 * string, an int number, or a gboolean value, as defined in the password
 * @schema. The list of attributes should be terminated with a %NULL.
 * If no secret is found then %NULL is returned.
 * This method may block indefinitely and should not be used in user inte
 * rface
 * threads.
 */
export function password_search_sync(schema: Schema, flags: SearchFlags, cancellable: Gio.Cancellable | null, error: GLib.Error, ___: unknown[]): GLib.List;
/**
 * Search for items in the secret service.
 * The @attributes should be a set of key and value string pairs.
 * This method will return immediately and complete asynchronously.
 */
export function password_searchv(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Search for items in the secret service.
 * The @attributes should be a set of key and value string pairs.
 * If no secret is found then %NULL is returned.
 * This method may block indefinitely and should not be used in user inte
 * rface
 * threads.
 */
export function password_searchv_sync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null): GLib.List;
/**
 * Store a password in the secret service.
 * The variable argument list should contain pairs of a) The attribute na
 * me as
 * a null-terminated string, followed by b) attribute value, either a cha
 * racter
 * string, an int number, or a gboolean value, as defined in the @schema.
 * The list of attribtues should be terminated with a %NULL.
 * If the attributes match a secret item already stored in the collection
 * , then
 * the item will be updated with these new values.
 * If @collection is %NULL, then the default collection will be
 * used. Use #SECRET_COLLECTION_SESSION to store the password in the sess
 * ion
 * collection, which doesn't get stored across login sessions.
 * This method will return immediately and complete asynchronously.
 */
export function password_store(schema: Schema, collection: string | null, label: string, password: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null, ___: unknown[]): void;
/**
 * Store a password in the secret service.
 * This is similar to secret_password_store(), but takes a
 * #SecretValue as the argument instead of a null-terminated password.
 * This method will return immediately and complete asynchronously.
 */
export function password_store_binary(schema: Schema, collection: string | null, label: string, value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null, ___: unknown[]): void;
/**
 * Store a password in the secret service.
 * This is similar to secret_password_store_sync(), but takes a
 * #SecretValue as the argument instead of a null terminated password.
 * This method may block indefinitely and should not be used in user inte
 * rface
 * threads.
 */
export function password_store_binary_sync(schema: Schema, collection: string | null, label: string, value: Value, cancellable: Gio.Cancellable | null, error: GLib.Error, ___: unknown[]): boolean;
/**
 * Finish asynchronous operation to store a password in the secret servic
 * e.
 */
export function password_store_finish(result: Gio.AsyncResult): boolean;
/**
 * Store a password in the secret service.
 * The variable argument list should contain pairs of a) The attribute na
 * me as
 * a null-terminated string, followed by b) attribute value, either a cha
 * racter
 * string, an int number, or a gboolean value, as defined in the @schema.
 * The list of attribtues should be terminated with a %NULL.
 * If the attributes match a secret item already stored in the collection
 * , then
 * the item will be updated with these new values.
 * If @collection is %NULL, then the default collection will be
 * used. Use #SECRET_COLLECTION_SESSION to store the password in the sess
 * ion
 * collection, which doesn't get stored across login sessions.
 * This method may block indefinitely and should not be used in user inte
 * rface
 * threads.
 */
export function password_store_sync(schema: Schema, collection: string | null, label: string, password: string, cancellable: Gio.Cancellable | null, error: GLib.Error, ___: unknown[]): boolean;
/**
 * Store a password in the secret service.
 * The @attributes should be a set of key and value string pairs.
 * If the attributes match a secret item already stored in the collection
 * , then
 * the item will be updated with these new values.
 * If @collection is %NULL, then the default collection will be
 * used. Use #SECRET_COLLECTION_SESSION to store the password in the sess
 * ion
 * collection, which doesn't get stored across login sessions.
 * This method will return immediately and complete asynchronously.
 */
export function password_storev(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, password: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Store a password in the secret service.
 * This is similar to secret_password_storev(), but takes a
 * #SecretValue as the argument instead of a null-terminated password.
 * This method will return immediately and complete asynchronously.
 */
export function password_storev_binary(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Store a password in the secret service.
 * This is similar to secret_password_storev_sync(), but takes a
 * #SecretValue as the argument instead of a null-terminated passwords.
 * This method may block indefinitely and should not be used in user inte
 * rface
 * threads.
 */
export function password_storev_binary_sync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable: Gio.Cancellable | null): boolean;
/**
 * Store a password in the secret service.
 * The @attributes should be a set of key and value string pairs.
 * If the attributes match a secret item already stored in the collection
 * , then
 * the item will be updated with these new values.
 * If @collection is %NULL, then the default collection will be
 * used. Use #SECRET_COLLECTION_SESSION to store the password in the sess
 * ion
 * collection, which doesn't get stored across login sessions.
 * This method may block indefinitely and should not be used in user inte
 * rface
 * threads.
 */
export function password_storev_sync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, password: string, cancellable: Gio.Cancellable | null): boolean;
/**
 * Clear the memory used by a password.
 */
export function password_wipe(password: string | null): void;
export enum Error {
    PROTOCOL = 1,
    IS_LOCKED = 2,
    NO_SUCH_OBJECT = 3,
    ALREADY_EXISTS = 4,
}
export enum SchemaAttributeType {
    STRING = 0,
    INTEGER = 1,
    BOOLEAN = 2,
}
export enum SchemaType {
    NOTE = 0,
    COMPAT_NETWORK = 1,
}
export enum CollectionCreateFlags {
    NONE = 0,
}
export enum CollectionFlags {
    NONE = 0,
    LOAD_ITEMS = 2,
}
export enum ItemCreateFlags {
    NONE = 0,
    REPLACE = 2,
}
export enum ItemFlags {
    NONE = 0,
    LOAD_SECRET = 2,
}
export enum SchemaFlags {
    NONE = 0,
    DONT_MATCH_NAME = 2,
}
export enum SearchFlags {
    NONE = 0,
    ALL = 2,
    UNLOCK = 4,
    LOAD_SECRETS = 8,
}
export enum ServiceFlags {
    NONE = 0,
    OPEN_SESSION = 2,
    LOAD_COLLECTIONS = 4,
}
export class Collection extends Gio.DBusProxy {constructor(config?: properties);
created: number;
flags: CollectionFlags;
readonly items: unknown;
label: string;
readonly locked: boolean;
modified: number;
service: Service;static new_for_dbus_path_finish(result: Gio.AsyncResult): Collection;
static new_for_dbus_path_sync(service: Service | null, collection_path: string, flags: CollectionFlags, cancellable: Gio.Cancellable | null): Collection;
_delete(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
delete_finish(result: Gio.AsyncResult): boolean;
delete_sync(cancellable: Gio.Cancellable | null): boolean;
get_created(): number;
get_flags(): CollectionFlags;
get_flags(...args: never[]): never;
get_items(): GLib.List;
get_label(): string;
get_locked(): boolean;
get_modified(): number;
get_service(): Service;
load_items(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
load_items_finish(result: Gio.AsyncResult): boolean;
load_items_sync(cancellable: Gio.Cancellable | null): boolean;
refresh(): void;
search(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
search_finish(result: Gio.AsyncResult): GLib.List;
search_for_dbus_paths(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
search_for_dbus_paths_finish(result: Gio.AsyncResult): string[];
search_for_dbus_paths_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): string[];
search_sync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null): GLib.List;
set_label(label: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_label_finish(result: Gio.AsyncResult): boolean;
set_label_sync(label: string, cancellable: Gio.Cancellable | null): boolean;
static create(service: Service | null, label: string, alias: string | null, flags: CollectionCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
static create_finish(result: Gio.AsyncResult): Collection;
static create_sync(service: Service | null, label: string, alias: string | null, flags: CollectionCreateFlags, cancellable: Gio.Cancellable | null): Collection;
static for_alias(service: Service | null, alias: string, flags: CollectionFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
static for_alias_finish(result: Gio.AsyncResult): Collection;
static for_alias_sync(service: Service | null, alias: string, flags: CollectionFlags, cancellable: Gio.Cancellable | null): Collection;
static new_for_dbus_path(service: Service | null, collection_path: string, flags: CollectionFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class Item extends Gio.DBusProxy {constructor(config?: properties);
flags: ItemFlags;
readonly locked: boolean;
service: Service;static new_for_dbus_path_finish(result: Gio.AsyncResult): Item;
static new_for_dbus_path_sync(service: Service | null, item_path: string, flags: ItemFlags, cancellable: Gio.Cancellable | null): Item;
_delete(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
delete_finish(result: Gio.AsyncResult): boolean;
delete_sync(cancellable: Gio.Cancellable | null): boolean;
get_attributes(): GLib.HashTable;
get_created(): number;
get_flags(): ItemFlags;
get_flags(...args: never[]): never;
get_label(): string;
get_locked(): boolean;
get_modified(): number;
get_schema_name(): string | null;
get_secret(): Value | null;
get_service(): Service;
load_secret(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
load_secret_finish(result: Gio.AsyncResult): boolean;
load_secret_sync(cancellable: Gio.Cancellable | null): boolean;
refresh(): void;
set_attributes(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_attributes_finish(result: Gio.AsyncResult): boolean;
set_attributes_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean;
set_label(label: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_label_finish(result: Gio.AsyncResult): boolean;
set_label_sync(label: string, cancellable: Gio.Cancellable | null): boolean;
set_secret(value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_secret_finish(result: Gio.AsyncResult): boolean;
set_secret_sync(value: Value, cancellable: Gio.Cancellable | null): boolean;
static create(collection: Collection, schema: Schema | null, attributes: GLib.HashTable, label: string, value: Value, flags: ItemCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
static create_finish(result: Gio.AsyncResult): Item;
static create_sync(collection: Collection, schema: Schema | null, attributes: GLib.HashTable, label: string, value: Value, flags: ItemCreateFlags, cancellable: Gio.Cancellable | null): Item;
static load_secrets(items: GLib.List, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
static load_secrets_finish(result: Gio.AsyncResult): boolean;
static load_secrets_sync(items: GLib.List, cancellable: Gio.Cancellable | null): boolean;
static new_for_dbus_path(service: Service | null, item_path: string, flags: ItemFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class Prompt  {constructor(config?: properties);
readonly pv: PromptPrivate;
perform(window_id: string | null, return_type: GLib.VariantType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
perform_finish(result: Gio.AsyncResult): GLib.Variant;
perform_sync(window_id: string | null, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant;
run(window_id: string | null, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant;
}
export class Service  {constructor(config?: properties);
readonly collections: unknown;
flags: ServiceFlags;
readonly pv: ServicePrivate;
clear(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
clear_finish(result: Gio.AsyncResult): boolean;
clear_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean;
create_collection_dbus_path(properties: GLib.HashTable, alias: string | null, flags: CollectionCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
create_collection_dbus_path_finish(result: Gio.AsyncResult): string;
create_collection_dbus_path_sync(properties: GLib.HashTable, alias: string | null, flags: CollectionCreateFlags, cancellable: Gio.Cancellable | null): string;
create_item_dbus_path(collection_path: string, properties: GLib.HashTable, value: Value, flags: ItemCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
create_item_dbus_path_finish(result: Gio.AsyncResult): string;
create_item_dbus_path_sync(collection_path: string, properties: GLib.HashTable, value: Value, flags: ItemCreateFlags, cancellable: Gio.Cancellable | null): string;
decode_dbus_secret(value: GLib.Variant): Value;
delete_item_dbus_path(item_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
delete_item_dbus_path_finish(result: Gio.AsyncResult): boolean;
delete_item_dbus_path_sync(item_path: string, cancellable: Gio.Cancellable | null): boolean;
encode_dbus_secret(value: Value): GLib.Variant;
ensure_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
ensure_session_finish(result: Gio.AsyncResult): boolean;
ensure_session_sync(cancellable: Gio.Cancellable | null): boolean;
get_collection_gtype(): unknown;
get_collections(): GLib.List | null;
get_flags(): ServiceFlags;
get_item_gtype(): unknown;
get_secret_for_dbus_path(item_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_secret_for_dbus_path_finish(result: Gio.AsyncResult): Value | null;
get_secret_for_dbus_path_sync(item_path: string, cancellable: Gio.Cancellable | null): Value | null;
get_secrets_for_dbus_paths(item_paths: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_secrets_for_dbus_paths_finish(result: Gio.AsyncResult): GLib.HashTable;
get_secrets_for_dbus_paths_sync(item_paths: string, cancellable: Gio.Cancellable | null): GLib.HashTable;
get_session_algorithms(): string | null;
get_session_dbus_path(): string | null;
load_collections(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
load_collections_finish(result: Gio.AsyncResult): boolean;
load_collections_sync(cancellable: Gio.Cancellable | null): boolean;
lock(objects: GLib.List, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
lock_dbus_paths(paths: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
lock_dbus_paths_finish(result: Gio.AsyncResult): [number, string[] | null];
lock_dbus_paths_sync(paths: string, cancellable: Gio.Cancellable | null): [number, string[] | null];
lock_finish(result: Gio.AsyncResult): [number, GLib.List | null];
lock_sync(objects: GLib.List, cancellable: Gio.Cancellable | null): [number, GLib.List | null];
lookup(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
lookup_finish(result: Gio.AsyncResult): Value;
lookup_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): Value;
prompt(prompt: Prompt, return_type: GLib.VariantType | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
prompt_at_dbus_path(prompt_path: string, return_type: GLib.VariantType | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
prompt_at_dbus_path_finish(result: Gio.AsyncResult): GLib.Variant | null;
prompt_at_dbus_path_sync(prompt_path: string, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType | null): GLib.Variant | null;
prompt_finish(result: Gio.AsyncResult): GLib.Variant;
prompt_sync(prompt: Prompt, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant;
read_alias_dbus_path(alias: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
read_alias_dbus_path_finish(result: Gio.AsyncResult): string | null;
read_alias_dbus_path_sync(alias: string, cancellable: Gio.Cancellable | null): string | null;
search(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
search_finish(result: Gio.AsyncResult): GLib.List;
search_for_dbus_paths(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
search_for_dbus_paths_finish(result: Gio.AsyncResult): [boolean, string[] | null,string[] | null];
search_for_dbus_paths_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): [boolean, string[] | null,string[] | null];
search_sync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null): GLib.List;
set_alias(alias: string, collection: Collection | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_alias_finish(result: Gio.AsyncResult): boolean;
set_alias_sync(alias: string, collection: Collection | null, cancellable: Gio.Cancellable | null): boolean;
set_alias_to_dbus_path(alias: string, collection_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_alias_to_dbus_path_finish(result: Gio.AsyncResult): boolean;
set_alias_to_dbus_path_sync(alias: string, collection_path: string | null, cancellable: Gio.Cancellable | null): boolean;
store(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
store_finish(result: Gio.AsyncResult): boolean;
store_sync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable: Gio.Cancellable | null): boolean;
unlock(objects: GLib.List, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
unlock_dbus_paths(paths: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
unlock_dbus_paths_finish(result: Gio.AsyncResult): [number, string[] | null];
unlock_dbus_paths_sync(paths: string, cancellable: Gio.Cancellable | null): [number, string[] | null];
unlock_finish(result: Gio.AsyncResult): [number, GLib.List | null];
unlock_sync(objects: GLib.List, cancellable: Gio.Cancellable | null): [number, GLib.List | null];
static disconnect(): void;
static get(flags: ServiceFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
static get_finish(result: Gio.AsyncResult): Service;
static get_sync(flags: ServiceFlags, cancellable: Gio.Cancellable | null): Service;
static open(service_gtype: unknown, service_bus_name: string | null, flags: ServiceFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
static open_finish(result: Gio.AsyncResult): Service;
static open_sync(service_gtype: unknown, service_bus_name: string | null, flags: ServiceFlags, cancellable: Gio.Cancellable | null): Service;
}
export class CollectionClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
readonly padding: object[];
}
export class CollectionPrivate  {constructor(config?: properties);
}
export class ItemClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
readonly padding: object[];
}
export class ItemPrivate  {constructor(config?: properties);
}
export class PromptClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
readonly padding: object[];
}
export class PromptPrivate  {constructor(config?: properties);
}
export class RetrievableInterface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly retrieve_secret: unknown;
readonly retrieve_secret_finish: unknown;
}
export class Schema  {constructor(config?: properties);
static newv(name: string, flags: SchemaFlags, attribute_names_and_types: GLib.HashTable): Schema;
ref(): Schema;
unref(): void;
}
export class SchemaAttribute  {constructor(config?: properties);
name: string;
type: SchemaAttributeType;
}
export class ServiceClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
readonly collection_gtype: unknown;
readonly item_gtype: unknown;
readonly prompt_sync: unknown;
readonly prompt_async: unknown;
readonly prompt_finish: unknown;
readonly get_collection_gtype: unknown;
readonly get_item_gtype: unknown;
readonly padding: object[];
}
export class ServicePrivate  {constructor(config?: properties);
}
export class Value  {constructor(config?: properties);
static new_full(secret: string, length: number, content_type: string, destroy: GLib.DestroyNotify): Value;
get(): [number[], number];
get_content_type(): string;
get_text(): string | null;
ref(): Value;
unref(): void;
unref_to_password(length: number): string;
}
export interface Retrievable  {
attributes: GLib.HashTable;
created: number;
label: string;
modified: number;
get_attributes(): GLib.HashTable;
get_created(): number;
get_label(): string;
get_modified(): number;
retrieve_secret(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
retrieve_secret_finish(result: Gio.AsyncResult): Value | null;
retrieve_secret_sync(cancellable: Gio.Cancellable | null): Value | null;
}