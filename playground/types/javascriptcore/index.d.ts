
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as JavaScriptCore from "javascriptcore";
/**
 * javascriptcore.d.ts
 */
type properties = { [key: string]: any };
export type ClassDeletePropertyFunction = (jsc_class: Class, context: Context, instance: object | null, name: string) => boolean;
export type ClassEnumeratePropertiesFunction = (jsc_class: Class, context: Context, instance: object | null) => string[] | null;
export type ClassGetPropertyFunction = (jsc_class: Class, context: Context, instance: object | null, name: string) => Value | null;
export type ClassHasPropertyFunction = (jsc_class: Class, context: Context, instance: object | null, name: string) => boolean;
export type ClassSetPropertyFunction = (jsc_class: Class, context: Context, instance: object | null, name: string, value: Value) => boolean;
export type ExceptionHandler = (context: Context, exception: Exception, user_data: object | null) => void;
export type OptionsFunc = (option: string, type: OptionType, description: string | null, user_data: object | null) => boolean;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const OPTIONS_USE_DFG: string;
export const OPTIONS_USE_FTL: string;
export const OPTIONS_USE_JIT: string;
export const OPTIONS_USE_LLINT: string;
/**
 * Returns the major version number of the JavaScriptCore library.
 * (e.g. in JavaScriptCore version 1.8.3 this is 1.)
 * This function is in the library, so it represents the JavaScriptCore l
 * ibrary
 * your code is running against. Contrast with the #JSC_MAJOR_VERSION
 * macro, which represents the major version of the JavaScriptCore header
 * s you
 * have included when compiling your code.
 */
export function get_major_version(): number;
/**
 * Returns the micro version number of the JavaScriptCore library.
 * (e.g. in JavaScriptCore version 1.8.3 this is 3.)
 * This function is in the library, so it represents the JavaScriptCore l
 * ibrary
 * your code is running against. Contrast with the #JSC_MICRO_VERSION
 * macro, which represents the micro version of the JavaScriptCore header
 * s you
 * have included when compiling your code.
 */
export function get_micro_version(): number;
/**
 * Returns the minor version number of the JavaScriptCore library.
 * (e.g. in JavaScriptCore version 1.8.3 this is 8.)
 * This function is in the library, so it represents the JavaScriptCore l
 * ibrary
 * your code is running against. Contrast with the #JSC_MINOR_VERSION
 * macro, which represents the minor version of the JavaScriptCore header
 * s you
 * have included when compiling your code.
 */
export function get_minor_version(): number;
/**
 * Iterates all available options calling @function for each one. Iterati
 * on can
 * stop early if @function returns %FALSE.
 */
export function options_foreach(_function: OptionsFunc, user_data: object | null): void;
/**
 * Get @option as a #gboolean value.
 */
export function options_get_boolean(option: string): [boolean, boolean];
/**
 * Get @option as a #gdouble value.
 */
export function options_get_double(option: string): [boolean, number];
/**
 * Get @option as a #gint value.
 */
export function options_get_int(option: string): [boolean, number];
/**
 * Create a #GOptionGroup to handle JSCOptions as command line arguments.
 * The options will be exposed as command line arguments with the form
 * <emphasis>--jsc-&lt;option&gt;=&lt;value&gt;</emphasis>.
 * Each entry in the returned #GOptionGroup is configured to apply the
 * corresponding option during command line parsing. Applications only ne
 * ed to
 * pass the returned group to g_option_context_add_group(), and the rest 
 * will
 * be taken care for automatically.
 */
export function options_get_option_group(): GLib.OptionGroup;
/**
 * Get @option as a range string. The string must be in the
 * format <emphasis>[!]&lt;low&gt;[:&lt;high&gt;]</emphasis> where low an
 * d high are #guint values.
 * Values between low and high (both included) will be considered in
 * the range, unless <emphasis>!</emphasis> is used to invert the range.
 */
export function options_get_range_string(option: string): [boolean, string];
/**
 * Get @option as a #gsize value.
 */
export function options_get_size(option: string): [boolean, number];
/**
 * Get @option as a string.
 */
export function options_get_string(option: string): [boolean, string];
/**
 * Get @option as a #guint value.
 */
export function options_get_uint(option: string): [boolean, number];
/**
 * Set @option as a #gboolean value.
 */
export function options_set_boolean(option: string, value: boolean): boolean;
/**
 * Set @option as a #gdouble value.
 */
export function options_set_double(option: string, value: number): boolean;
/**
 * Set @option as a #gint value.
 */
export function options_set_int(option: string, value: number): boolean;
/**
 * Set @option as a range string. The string must be in the
 * format <emphasis>[!]&lt;low&gt;[:&lt;high&gt;]</emphasis> where low an
 * d high are #guint values.
 * Values between low and high (both included) will be considered in
 * the range, unless <emphasis>!</emphasis> is used to invert the range.
 */
export function options_set_range_string(option: string, value: string): boolean;
/**
 * Set @option as a #gsize value.
 */
export function options_set_size(option: string, value: number): boolean;
/**
 * Set @option as a string.
 */
export function options_set_string(option: string, value: string): boolean;
/**
 * Set @option as a #guint value.
 */
export function options_set_uint(option: string, value: number): boolean;
export enum CheckSyntaxMode {
    SCRIPT = 0,
    MODULE = 1,
}
export enum CheckSyntaxResult {
    SUCCESS = 0,
    RECOVERABLE_ERROR = 1,
    IRRECOVERABLE_ERROR = 2,
    UNTERMINATED_LITERAL_ERROR = 3,
    OUT_OF_MEMORY_ERROR = 4,
    STACK_OVERFLOW_ERROR = 5,
}
export enum OptionType {
    BOOLEAN = 0,
    INT = 1,
    UINT = 2,
    SIZE = 3,
    DOUBLE = 4,
    STRING = 5,
    RANGE_STRING = 6,
}
export enum ValuePropertyFlags {
    CONFIGURABLE = 1,
    ENUMERABLE = 2,
    WRITABLE = 4,
}
export class Class  {constructor(config?: properties);
context: Context;
name: string;
add_constructor(name: string | null, callback: GObject.Callback, user_data: object | null, destroy_notify: GLib.DestroyNotify | null, return_type: unknown, n_params: number, ___: unknown[]): Value;
add_constructor_variadic(name: string | null, callback: GObject.Callback, user_data: object | null, destroy_notify: GLib.DestroyNotify | null, return_type: unknown): Value;
add_constructorv(name: string | null, callback: GObject.Callback, user_data: object | null, destroy_notify: GLib.DestroyNotify | null, return_type: unknown, n_parameters: number, parameter_types: unknown[] | null): Value;
add_method(name: string, callback: GObject.Callback, user_data: object | null, destroy_notify: GLib.DestroyNotify | null, return_type: unknown, n_params: number, ___: unknown[]): void;
add_method_variadic(name: string, callback: GObject.Callback, user_data: object | null, destroy_notify: GLib.DestroyNotify | null, return_type: unknown): void;
add_methodv(name: string, callback: GObject.Callback, user_data: object | null, destroy_notify: GLib.DestroyNotify | null, return_type: unknown, n_parameters: number, parameter_types: unknown[] | null): void;
add_property(name: string, property_type: unknown, getter: GObject.Callback | null, setter: GObject.Callback | null, user_data: object | null, destroy_notify: GLib.DestroyNotify | null): void;
get_name(): string;
get_parent(): Class;
}
export class Context extends GObject.Object {constructor(config?: properties);
virtual_machine: VirtualMachine;static new_with_virtual_machine(vm: VirtualMachine): Context;
check_syntax(code: string, length: number, mode: CheckSyntaxMode, uri: string, line_number: number): [CheckSyntaxResult, Exception | null];
clear_exception(): void;
evaluate(code: string, length: number): Value;
evaluate_in_object(code: string, length: number, object_instance: object | null, object_class: Class | null, uri: string, line_number: number): [Value, Value];
evaluate_with_source_uri(code: string, length: number, uri: string, line_number: number): Value;
get_exception(): Exception | null;
get_global_object(): Value;
get_value(name: string): Value;
get_virtual_machine(): VirtualMachine;
pop_exception_handler(): void;
push_exception_handler(handler: ExceptionHandler, user_data: object | null, destroy_notify: GLib.DestroyNotify | null): void;
register_class(name: string, parent_class: Class | null, vtable: ClassVTable | null, destroy_notify: GLib.DestroyNotify | null): Class;
set_value(name: string, value: Value): void;
_throw(error_message: string): void;
throw_exception(exception: Exception): void;
throw_printf(format: string, ___: unknown[]): void;
throw_with_name(error_name: string, error_message: string): void;
throw_with_name_printf(error_name: string, format: string, ___: unknown[]): void;
static get_current(): Context | null;
}
export class Exception extends GObject.Object {constructor(config?: properties);
static new_printf(context: Context, format: string, ___: unknown[]): Exception;
static new_vprintf(context: Context, format: string, args: any): Exception;
static new_with_name(context: Context, name: string, message: string): Exception;
static new_with_name_printf(context: Context, name: string, format: string, ___: unknown[]): Exception;
static new_with_name_vprintf(context: Context, name: string, format: string, args: any): Exception;
get_backtrace_string(): string | null;
get_column_number(): number;
get_line_number(): number;
get_message(): string;
get_name(): string;
get_source_uri(): string | null;
report(): string;
to_string(): string;
}
export class Value extends GObject.Object {constructor(config?: properties);
context: Context;static new_array(context: Context, first_item_type: unknown, ___: unknown[]): Value;
static new_array_from_garray(context: Context, array: Value[] | null): Value;
static new_array_from_strv(context: Context, strv: string[]): Value;
static new_boolean(context: Context, value: boolean): Value;
static new_function(context: Context, name: string | null, callback: GObject.Callback, user_data: object | null, destroy_notify: GLib.DestroyNotify | null, return_type: unknown, n_params: number, ___: unknown[]): Value;
static new_function_variadic(context: Context, name: string | null, callback: GObject.Callback, user_data: object | null, destroy_notify: GLib.DestroyNotify | null, return_type: unknown): Value;
static new_functionv(context: Context, name: string | null, callback: GObject.Callback, user_data: object | null, destroy_notify: GLib.DestroyNotify | null, return_type: unknown, n_parameters: number, parameter_types: unknown[] | null): Value;
static new_null(context: Context): Value;
static new_number(context: Context, number: number): Value;
static new_object(context: Context, instance: object | null, jsc_class: Class | null): Value;
static new_string(context: Context, string: string | null): Value;
static new_string_from_bytes(context: Context, bytes: GLib.Bytes | null): Value;
static new_undefined(context: Context): Value;
constructor_call(first_parameter_type: unknown, ___: unknown[]): Value;
constructor_callv(n_parameters: number, parameters: Value[] | null): Value;
function_call(first_parameter_type: unknown, ___: unknown[]): Value;
function_callv(n_parameters: number, parameters: Value[] | null): Value;
get_context(): Context;
is_array(): boolean;
is_boolean(): boolean;
is_constructor(): boolean;
is_function(): boolean;
is_null(): boolean;
is_number(): boolean;
is_object(): boolean;
is_string(): boolean;
is_undefined(): boolean;
object_define_property_accessor(property_name: string, flags: ValuePropertyFlags, property_type: unknown, getter: GObject.Callback | null, setter: GObject.Callback | null, user_data: object | null, destroy_notify: GLib.DestroyNotify | null): void;
object_define_property_data(property_name: string, flags: ValuePropertyFlags, property_value: Value | null): void;
object_delete_property(name: string): boolean;
object_enumerate_properties(): string[] | null;
object_get_property(name: string): Value;
object_get_property_at_index(index: number): Value;
object_has_property(name: string): boolean;
object_invoke_method(name: string, first_parameter_type: unknown, ___: unknown[]): Value;
object_invoke_methodv(name: string, n_parameters: number, parameters: Value[] | null): Value;
object_is_instance_of(name: string): boolean;
object_set_property(name: string, property: Value): void;
object_set_property_at_index(index: number, property: Value): void;
to_boolean(): boolean;
to_double(): number;
to_int32(): number;
to_string(): string;
to_string_as_bytes(): GLib.Bytes;
}
export class VirtualMachine extends GObject.Object {constructor(config?: properties);
}
export class WeakValue extends GObject.Object {constructor(config?: properties);
value: Value;
get_value(): Value;
}
export class ClassClass  {constructor(config?: properties);
}
export class ClassVTable  {constructor(config?: properties);
get_property: ClassGetPropertyFunction;
set_property: ClassSetPropertyFunction;
has_property: ClassHasPropertyFunction;
delete_property: ClassDeletePropertyFunction;
enumerate_properties: ClassEnumeratePropertiesFunction;
readonly _jsc_reserved0: unknown;
readonly _jsc_reserved1: unknown;
readonly _jsc_reserved2: unknown;
readonly _jsc_reserved3: unknown;
}
export class ContextClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _jsc_reserved0: unknown;
readonly _jsc_reserved1: unknown;
readonly _jsc_reserved2: unknown;
readonly _jsc_reserved3: unknown;
}
export class ContextPrivate  {constructor(config?: properties);
}
export class ExceptionClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _jsc_reserved0: unknown;
readonly _jsc_reserved1: unknown;
readonly _jsc_reserved2: unknown;
readonly _jsc_reserved3: unknown;
}
export class ExceptionPrivate  {constructor(config?: properties);
}
export class ValueClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _jsc_reserved0: unknown;
readonly _jsc_reserved1: unknown;
readonly _jsc_reserved2: unknown;
readonly _jsc_reserved3: unknown;
}
export class ValuePrivate  {constructor(config?: properties);
}
export class VirtualMachineClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _jsc_reserved0: unknown;
readonly _jsc_reserved1: unknown;
readonly _jsc_reserved2: unknown;
readonly _jsc_reserved3: unknown;
}
export class VirtualMachinePrivate  {constructor(config?: properties);
}
export class WeakValueClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _jsc_reserved0: unknown;
readonly _jsc_reserved1: unknown;
readonly _jsc_reserved2: unknown;
readonly _jsc_reserved3: unknown;
}
export class WeakValuePrivate  {constructor(config?: properties);
}