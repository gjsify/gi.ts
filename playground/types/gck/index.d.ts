
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gck from "gck";
/**
 * gck.d.ts
 */
type properties = { [key: string]: any };
export type Allocator = (data: object | null, length: number) => object | null;
export const INVALID: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const URI_FOR_MODULE_WITH_VERSION: number;
export const URI_FOR_OBJECT_ON_TOKEN: number;
export const URI_FOR_OBJECT_ON_TOKEN_AND_MODULE: number;
export const VENDOR_CODE: number;
/**
 * Unreferences a builder. If this was the last reference then the builde
 * r
 * is freed.
 * It is an error to use this function on builders that were allocated on
 *  the
 * stack.
 */
export function builder_unref(builder: object | null): void;
/**
 * 
 */
export function error_get_quark(): GLib.Quark;
/**
 * 
 */
export function list_get_boxed_type(): unknown;
/**
 * Copy a list of GObject based pointers. All objects
 * in the list will be reffed and the list will be copied.
 */
export function list_ref_copy(reflist: GLib.List): GLib.List;
/**
 * Free a list of GObject based pointers. All objects in the list
 * will be unreffed and then the list itself will be freed.
 */
export function list_unref_free(reflist: GLib.List): void;
/**
 * Check whether all the mechanism types are in the list.
 * The arguments should be a list of CKM_XXX mechanism types. The last ar
 * gument
 * should be GCK_INVALID.
 */
export function mechanisms_check(mechanisms: number[], ___: unknown[]): boolean;
/**
 * Get a message for a PKCS\#11 return value or error code. Do not
 * pass CKR_OK or other such non errors to this function.
 */
export function message_from_rv(rv: number): string;
/**
 * Setup an enumerator for listing matching objects on the modules.
 * This call will not block but will return an enumerator immediately.
 * If the @attrs #GckAttributes is floating, it is consumed.
 */
export function modules_enumerate_objects(modules: GLib.List, attrs: Attributes, session_options: SessionOptions): Enumerator;
/**
 * Enumerate objects that match a URI.
 * This call will not block. Use the #GckEnumerator functions in order to
 * get at the actual objects that match.
 */
export function modules_enumerate_uri(modules: GLib.List, uri: string, session_options: SessionOptions): Enumerator;
/**
 * Get a list of slots for across all of the modules.
 */
export function modules_get_slots(modules: GLib.List, token_present: boolean): GLib.List;
/**
 * Load and initialize all the registered modules.
 */
export function modules_initialize_registered(cancellable: Gio.Cancellable | null): GLib.List;
/**
 * Load and initialize all the registered modules asynchronously.
 */
export function modules_initialize_registered_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Finishes the asynchronous operation to initialize the registered
 * PKCS\#11 modules.
 */
export function modules_initialize_registered_finish(result: Gio.AsyncResult): GLib.List;
/**
 * Find an object that matches a URI.
 * This call can block. Use gck_modules_enumerate_uri() for a non-blockin
 * g
 * version.
 */
export function modules_object_for_uri(modules: GLib.List, uri: string, session_options: SessionOptions): Object | null;
/**
 * Find objects that match a URI.
 * This call can block. Use gck_modules_enumerate_uri() for a non-blockin
 * g
 * version.
 */
export function modules_objects_for_uri(modules: GLib.List, uri: string, session_options: SessionOptions): GLib.List;
/**
 * Lookup a token that matches the URI.
 */
export function modules_token_for_uri(modules: GLib.List, uri: string): Slot;
/**
 * Lookup a token that matches the URI.
 */
export function modules_tokens_for_uri(modules: GLib.List, uri: string): GLib.List;
/**
 * Initialize a list of GckObject from raw PKCS\#11 handles. The handles 
 * argument must contain
 * contiguous CK_OBJECT_HANDLE handles in an array.
 */
export function objects_from_handle_array(session: Session, object_handles: number[], n_object_handles: number): GLib.List;
/**
 * Setup an enumerator for listing matching objects on the slots.
 * If the @match #GckAttributes is floating, it is consumed.
 * This call will not block but will return an enumerator immediately.
 */
export function slots_enumerate_objects(slots: GLib.List, match: Attributes, options: SessionOptions): Enumerator;
/**
 * Create a string from a set of PKCS\#11 characters. This is
 * similar to g_strndup, except for that it also strips trailing
 * spaces. These space padded strings are often used in PKCS\#11
 * structures.
 * If the space padded string is filled with null characters then
 * this function will return %NULL.
 */
export function string_from_chars(data: number, max: number): string;
/**
 * Create a space padded PKCS\#11 string from a null terminated string.
 * The string must be shorter than the buffer or %FALSE will be
 * returned.
 * If a %NULL string is passed, then the space padded string will be
 * set to zero characters.
 */
export function string_to_chars(data: number, max: number, string: string): boolean;
/**
 * Build a PKCS\#11 URI. The various parts relevant to the flags
 * specified will be used to build the URI.
 */
export function uri_build(uri_data: UriData, flags: UriFlags): string;
/**
 * 
 */
export function uri_error_get_quark(): GLib.Quark;
/**
 * Parse a PKCS\#11 URI for use in a given context.
 * The result will contain the fields that are relevant for
 * the given context. See #GckUriData  for more info.
 * Other fields will be set to %NULL.
 */
export function uri_parse(string: string, flags: UriFlags): UriData;
/**
 * Convert CK_BBOOL type memory to a boolean.
 */
export function value_to_boolean(value: number[], length: number, result: boolean): boolean;
/**
 * Convert CK_ULONG type memory to a boolean.
 */
export function value_to_ulong(value: number[], length: number, result: number): boolean;
export enum BuilderFlags {
    NONE = 0,
    SECURE_MEMORY = 1,
}
export enum Error {
    PROBLEM = -951891199,
}
export enum UriError {
    BAD_SCHEME = 1,
    BAD_ENCODING = 2,
    BAD_SYNTAX = 3,
    BAD_VERSION = 4,
    NOT_FOUND = 5,
}
export enum SessionOptions {
    READ_ONLY = 0,
    READ_WRITE = 2,
    LOGIN_USER = 4,
    AUTHENTICATE = 8,
}
export enum UriFlags {
    FOR_OBJECT = 2,
    FOR_TOKEN = 4,
    FOR_MODULE = 8,
    WITH_VERSION = 16,
    FOR_ANY = 65535,
}
export class Enumerator  {constructor(config?: properties);
chained: Enumerator;
interaction: Gio.TlsInteraction;
object_type: unknown;
readonly pv: EnumeratorPrivate;
readonly reserved: object[];
get_chained(): Enumerator | null;
get_interaction(): Gio.TlsInteraction | null;
get_object_type(): unknown;
next(cancellable: Gio.Cancellable | null): Object | null;
next_async(max_objects: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
next_finish(result: Gio.AsyncResult): GLib.List;
next_n(max_objects: number, cancellable: Gio.Cancellable | null): GLib.List;
set_chained(chained: Enumerator | null): void;
set_interaction(interaction: Gio.TlsInteraction | null): void;
set_object_type(object_type: unknown): void;
set_object_type_full(object_type: unknown, attr_types: number[], attr_count: number): void;
}
export class Module extends GObject.Object {constructor(config?: properties);
functions: object;
path: string;
equal(module2: Module): boolean;
get_functions(): unknown;
get_info(): ModuleInfo;
get_path(): string;
get_slots(token_present: boolean): GLib.List;
hash(): number;
match(uri: UriData): boolean;
vfunc_authenticate_object(object: Object, label: string, password: string): boolean;
vfunc_authenticate_slot(slot: Slot, label: string, password: string): boolean;
static initialize(path: string, cancellable: Gio.Cancellable | null): Module;
static initialize_async(path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
static initialize_finish(result: Gio.AsyncResult): Module | null;
}
export class Object  {constructor(config?: properties);
handle: number;
module: Module;
session: Session;
readonly pv: ObjectPrivate;
readonly reserved: object[];
cache_lookup(attr_types: number[], n_attr_types: number, cancellable: Gio.Cancellable | null): Attributes;
cache_lookup_async(attr_types: number[], n_attr_types: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
cache_lookup_finish(result: Gio.AsyncResult): Attributes;
destroy(cancellable: Gio.Cancellable | null): boolean;
destroy_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
destroy_finish(result: Gio.AsyncResult): boolean;
equal(object2: Object): boolean;
get(cancellable: Gio.Cancellable | null, error: GLib.Error, ___: unknown[]): Attributes;
get_async(attr_types: number[], n_attr_types: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_data(attr_type: number, cancellable: Gio.Cancellable | null): [number[], number];
get_data_async(attr_type: number, allocator: Allocator, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_data_finish(result: Gio.AsyncResult): [number[], number];
get_data_full(attr_type: number, allocator: Allocator, cancellable: Gio.Cancellable | null): [number[], number];
get_finish(result: Gio.AsyncResult): Attributes;
get_full(attr_types: number[], n_attr_types: number, cancellable: Gio.Cancellable | null): Attributes;
get_handle(): number;
get_module(): Module;
get_session(): Session;
get_template(attr_type: number, cancellable: Gio.Cancellable | null): Attributes;
get_template_async(attr_type: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_template_finish(result: Gio.AsyncResult): Attributes;
hash(): number;
set(attrs: Attributes, cancellable: Gio.Cancellable | null): boolean;
set_async(attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_finish(result: Gio.AsyncResult): boolean;
set_template(attr_type: number, attrs: Attributes, cancellable: Gio.Cancellable | null): boolean;
set_template_async(attr_type: number, attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_template_finish(result: Gio.AsyncResult): boolean;
static from_handle(session: Session, object_handle: number): Object;
}
export class Password  {constructor(config?: properties);
key: Object;
readonly module: Module;
token: Slot;
readonly pv: PasswordPrivate;
readonly reserved: object[];
get_key(): Object;
get_module(): Module;
get_token(): Slot;
}
export class Session  {constructor(config?: properties);
app_data: object;
handle: number;
interaction: Gio.TlsInteraction;
readonly module: Module;
opening_flags: number;
options: SessionOptions;
slot: Slot;
readonly pv: SessionPrivate;
readonly reserved: object[];
create_object(attrs: Attributes, cancellable: Gio.Cancellable | null): Object;
create_object_async(attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
create_object_finish(result: Gio.AsyncResult): Object;
decrypt(key: Object, mech_type: number, input: number[], n_input: number, cancellable: Gio.Cancellable | null): [number[], number];
decrypt_async(key: Object, mechanism: Mechanism, input: number[], n_input: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
decrypt_finish(result: Gio.AsyncResult): [number[], number];
decrypt_full(key: Object, mechanism: Mechanism, input: number[], n_input: number, cancellable: Gio.Cancellable | null): [number[], number];
derive_key(base: Object, mech_type: number, attrs: Attributes, cancellable: Gio.Cancellable | null): Object;
derive_key_async(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
derive_key_finish(result: Gio.AsyncResult): Object;
derive_key_full(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable: Gio.Cancellable | null): Object;
encrypt(key: Object, mech_type: number, input: number[], n_input: number, cancellable: Gio.Cancellable | null): [number[], number];
encrypt_async(key: Object, mechanism: Mechanism, input: number[], n_input: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
encrypt_finish(result: Gio.AsyncResult): [number[], number];
encrypt_full(key: Object, mechanism: Mechanism, input: number[], n_input: number, cancellable: Gio.Cancellable | null): [number[], number];
enumerate_objects(match: Attributes): Enumerator;
find_handles(match: Attributes, cancellable: Gio.Cancellable | null): [number[] | null, number];
find_handles_async(match: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
find_handles_finish(result: Gio.AsyncResult): [number[] | null, number];
find_objects(match: Attributes, cancellable: Gio.Cancellable | null): GLib.List;
find_objects_async(match: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
find_objects_finish(result: Gio.AsyncResult): GLib.List;
generate_key_pair(mech_type: number, public_attrs: Attributes, private_attrs: Attributes, cancellable: Gio.Cancellable | null): [boolean, Object | null,Object | null];
generate_key_pair_async(mechanism: Mechanism, public_attrs: Attributes, private_attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
generate_key_pair_finish(result: Gio.AsyncResult): [boolean, Object | null,Object | null];
generate_key_pair_full(mechanism: Mechanism, public_attrs: Attributes, private_attrs: Attributes, cancellable: Gio.Cancellable | null): [boolean, Object | null,Object | null];
get_handle(): number;
get_info(): SessionInfo;
get_interaction(): Gio.TlsInteraction | null;
get_module(): Module;
get_options(): SessionOptions;
get_slot(): Slot;
get_state(): number;
init_pin(pin: number[] | null, n_pin: number, cancellable: Gio.Cancellable | null): boolean;
init_pin_async(pin: number[] | null, n_pin: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
init_pin_finish(result: Gio.AsyncResult): boolean;
login(user_type: number, pin: number[] | null, n_pin: number, cancellable: Gio.Cancellable | null): boolean;
login_async(user_type: number, pin: number[] | null, n_pin: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
login_finish(result: Gio.AsyncResult): boolean;
login_interactive(user_type: number, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null): boolean;
login_interactive_async(user_type: number, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
login_interactive_finish(result: Gio.AsyncResult): boolean;
logout(cancellable: Gio.Cancellable | null): boolean;
logout_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
logout_finish(result: Gio.AsyncResult): boolean;
set_interaction(interaction: Gio.TlsInteraction | null): void;
set_pin(old_pin: number[] | null, n_old_pin: number, new_pin: number[] | null, n_new_pin: number, cancellable: Gio.Cancellable | null): boolean;
set_pin_async(old_pin: number[] | null, n_old_pin: number, new_pin: number[] | null, n_new_pin: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_pin_finish(result: Gio.AsyncResult): boolean;
sign(key: Object, mech_type: number, input: number[], n_input: number, cancellable: Gio.Cancellable | null): [number[], number];
sign_async(key: Object, mechanism: Mechanism, input: number[], n_input: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
sign_finish(result: Gio.AsyncResult): [number[], number];
sign_full(key: Object, mechanism: Mechanism, input: number[], n_input: number, n_result: number, cancellable: Gio.Cancellable | null): number;
unwrap_key(wrapper: Object, mech_type: number, input: number[], n_input: number, attrs: Attributes, cancellable: Gio.Cancellable | null): Object;
unwrap_key_async(wrapper: Object, mechanism: Mechanism, input: number[], n_input: number, attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
unwrap_key_finish(result: Gio.AsyncResult): Object;
unwrap_key_full(wrapper: Object, mechanism: Mechanism, input: number[], n_input: number, attrs: Attributes, cancellable: Gio.Cancellable | null): Object;
verify(key: Object, mech_type: number, input: number[], n_input: number, signature: number[], n_signature: number, cancellable: Gio.Cancellable | null): boolean;
verify_async(key: Object, mechanism: Mechanism, input: number[], n_input: number, signature: number[], n_signature: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
verify_finish(result: Gio.AsyncResult): boolean;
verify_full(key: Object, mechanism: Mechanism, input: number[], n_input: number, signature: number[], n_signature: number, cancellable: Gio.Cancellable | null): boolean;
wrap_key(wrapper: Object, mech_type: number, wrapped: Object, cancellable: Gio.Cancellable | null): [number[], number];
wrap_key_async(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
wrap_key_finish(result: Gio.AsyncResult): [number[], number];
wrap_key_full(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable: Gio.Cancellable | null): [number[], number];
static from_handle(slot: Slot, session_handle: number, options: SessionOptions): Session;
static open(slot: Slot, options: SessionOptions, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null): Session;
static open_async(slot: Slot, options: SessionOptions, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
static open_finish(result: Gio.AsyncResult): Session;
}
export class Slot  {constructor(config?: properties);
handle: number;
module: Module;
readonly pv: SlotPrivate;
readonly reserved: object[];
enumerate_objects(match: Attributes, options: SessionOptions): Enumerator;
equal(slot2: Slot): boolean;
get_handle(): number;
get_info(): SlotInfo;
get_mechanism_info(mech_type: number): MechanismInfo;
get_mechanisms(): number[];
get_module(): Module;
get_token_info(): TokenInfo;
has_flags(flags: number): boolean;
hash(): number;
match(uri: UriData): boolean;
open_session(options: SessionOptions, cancellable: Gio.Cancellable | null): Session;
open_session_async(options: SessionOptions, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
open_session_finish(result: Gio.AsyncResult): Session;
open_session_full(options: SessionOptions, pkcs11_flags: number, app_data: object | null, notify: unknown, cancellable: Gio.Cancellable | null): Session;
open_session_full_async(options: SessionOptions, pkcs11_flags: number, app_data: object | null, notify: unknown, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
static from_handle(module: Module, slot_id: number): Slot;
}
export class Attribute  {constructor(config?: properties);
static new_boolean(attr_type: number, value: boolean): Attribute;
static new_date(attr_type: number, value: GLib.Date): Attribute;
static new_empty(attr_type: number): Attribute;
static new_invalid(attr_type: number): Attribute;
static new_string(attr_type: number, value: string): Attribute;
static new_ulong(attr_type: number, value: number): Attribute;
clear(): void;
dump(): void;
dup(): Attribute;
equal(attr2: Attribute): boolean;
free(): void;
get_boolean(): boolean;
get_data(): [number[], number];
get_date(value: GLib.Date): void;
get_string(): string | null;
get_ulong(): number;
hash(): number;
init(attr_type: number, value: number[], length: number): void;
init_boolean(attr_type: number, value: boolean): void;
init_copy(src: Attribute): void;
init_date(attr_type: number, value: GLib.Date): void;
init_empty(attr_type: number): void;
init_invalid(attr_type: number): void;
init_string(attr_type: number, value: string): void;
init_ulong(attr_type: number, value: number): void;
is_invalid(): boolean;
}
export class Attributes  {constructor(config?: properties);
static new_empty(first_type: number, ___: unknown[]): Attributes;
at(index: number): Attribute;
contains(match: Attribute): boolean;
count(): number;
dump(): void;
find(attr_type: number): Attribute;
find_boolean(attr_type: number): [boolean, boolean];
find_date(attr_type: number): [boolean, GLib.Date];
find_string(attr_type: number): [boolean, string];
find_ulong(attr_type: number): [boolean, number];
ref(): Attributes;
ref_sink(): Attributes;
to_string(): string;
unref(): void;
}
export class Builder  {constructor(config?: properties);
add_all(attrs: Attributes): void;
add_attribute(attr: Attribute): void;
add_boolean(attr_type: number, value: boolean): void;
add_data(attr_type: number, value: number[] | null, length: number): void;
add_date(attr_type: number, value: GLib.Date): void;
add_empty(attr_type: number): void;
add_except(attrs: Attributes, except_type: number, ___: unknown[]): void;
add_exceptv(attrs: Attributes, except_types: number[], n_except_types: number): void;
add_invalid(attr_type: number): void;
add_only(attrs: Attributes, only_type: number, ___: unknown[]): void;
add_onlyv(attrs: Attributes, only_types: number[], n_only_types: number): void;
add_string(attr_type: number, value: string | null): void;
add_ulong(attr_type: number, value: number): void;
clear(): void;
copy(): Builder;
end(): Attributes;
find(attr_type: number): Attribute;
find_boolean(attr_type: number): [boolean, boolean];
find_date(attr_type: number): [boolean, GLib.Date];
find_string(attr_type: number): [boolean, string];
find_ulong(attr_type: number): [boolean, number];
init(): void;
init_full(flags: BuilderFlags): void;
ref(): Builder;
set_all(attrs: Attributes): void;
set_boolean(attr_type: number, value: boolean): void;
set_data(attr_type: number, value: number[] | null, length: number): void;
set_date(attr_type: number, value: GLib.Date): void;
set_empty(attr_type: number): void;
set_invalid(attr_type: number): void;
set_string(attr_type: number, value: string): void;
set_ulong(attr_type: number, value: number): void;
steal(): Attributes;
take_data(attr_type: number, value: number[] | null, length: number): void;
static unref(builder: object | null): void;
}
export class EnumeratorClass  {constructor(config?: properties);
readonly reserved: object[];
}
export class EnumeratorPrivate  {constructor(config?: properties);
}
export class Mechanism  {constructor(config?: properties);
type: number;
parameter: object;
n_parameter: number;
}
export class MechanismInfo  {constructor(config?: properties);
min_key_size: number;
max_key_size: number;
flags: number;
copy(): MechanismInfo;
free(): void;
}
export class ModuleClass  {constructor(config?: properties);
readonly authenticate_slot: unknown;
readonly authenticate_object: unknown;
readonly reserved: object[];
}
export class ModuleInfo  {constructor(config?: properties);
pkcs11_version_major: number;
pkcs11_version_minor: number;
manufacturer_id: string;
flags: number;
library_description: string;
library_version_major: number;
library_version_minor: number;
copy(): ModuleInfo;
free(): void;
}
export class ModulePrivate  {constructor(config?: properties);
}
export class ObjectCacheIface  {constructor(config?: properties);
readonly _interface: GObject.TypeInterface;
readonly default_types: number[];
readonly n_default_types: number;
readonly fill: unknown;
readonly reserved: object[];
}
export class ObjectClass  {constructor(config?: properties);
readonly reserved: object[];
}
export class ObjectPrivate  {constructor(config?: properties);
}
export class PasswordClass  {constructor(config?: properties);
readonly reserved: object[];
}
export class PasswordPrivate  {constructor(config?: properties);
}
export class SessionClass  {constructor(config?: properties);
readonly discard_handle: unknown;
readonly reserved: object[];
}
export class SessionInfo  {constructor(config?: properties);
slot_id: number;
state: number;
flags: number;
device_error: number;
copy(): SessionInfo;
free(): void;
}
export class SessionPrivate  {constructor(config?: properties);
}
export class SlotClass  {constructor(config?: properties);
readonly reserved: object[];
}
export class SlotInfo  {constructor(config?: properties);
slot_description: string;
manufacturer_id: string;
flags: number;
hardware_version_major: number;
hardware_version_minor: number;
firmware_version_major: number;
firmware_version_minor: number;
copy(): SlotInfo;
free(): void;
}
export class SlotPrivate  {constructor(config?: properties);
}
export class TokenInfo  {constructor(config?: properties);
label: string;
manufacturer_id: string;
model: string;
serial_number: string;
flags: number;
max_session_count: number;
session_count: number;
max_rw_session_count: number;
rw_session_count: number;
max_pin_len: number;
min_pin_len: number;
total_public_memory: number;
free_public_memory: number;
total_private_memory: number;
free_private_memory: number;
hardware_version_major: number;
hardware_version_minor: number;
firmware_version_major: number;
firmware_version_minor: number;
utc_time: number;
copy(): TokenInfo;
free(): void;
}
export class UriData  {constructor(config?: properties);
copy(): UriData;
free(): void;
}
export interface ObjectCache  {
attributes: Attributes;
fill(attrs: Attributes): void;
get_attributes(): Attributes | null;
set_attributes(attrs: Attributes | null): void;
update(attr_types: number[], n_attr_types: number, cancellable: Gio.Cancellable | null): boolean;
update_async(attr_types: number[], n_attr_types: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
update_finish(result: Gio.AsyncResult): boolean;
}