
import * as Gio from "gio";
import * as GLib from "glib";
import * as GObject from "gobject";
/**
 * gobject.d.ts
 */
type properties = { [key: string]: any };
export type BaseFinalizeFunc = (g_class: TypeClass) => void;
export type BaseInitFunc = (g_class: TypeClass) => void;
export type BindingTransformFunc = (binding: Binding, from_value: Value, to_value: Value, user_data: object | null) => boolean;
export type BoxedCopyFunc = (boxed: object) => object;
export type BoxedFreeFunc = (boxed: object) => void;
export type Callback = () => void;
export type ClassFinalizeFunc = (g_class: TypeClass, class_data: object | null) => void;
export type ClassInitFunc = (g_class: TypeClass, class_data: object | null) => void;
export type ClosureMarshal = (closure: Closure, return_value: Value | null, n_param_values: number, param_values: Value[], invocation_hint: object | null, marshal_data: object | null) => void;
export type ClosureNotify = (data: object | null, closure: Closure) => void;
export type InstanceInitFunc = (instance: TypeInstance, g_class: TypeClass) => void;
export type InterfaceFinalizeFunc = (g_iface: TypeInterface, iface_data: object | null) => void;
export type InterfaceInitFunc = (g_iface: TypeInterface, iface_data: object | null) => void;
export type ObjectFinalizeFunc = (object: Object) => void;
export type ObjectGetPropertyFunc = (object: Object, property_id: number, value: Value, pspec: ParamSpec) => void;
export type ObjectSetPropertyFunc = (object: Object, property_id: number, value: Value, pspec: ParamSpec) => void;
export type SignalAccumulator = (ihint: SignalInvocationHint, return_accu: Value, handler_return: Value, data: object | null) => boolean;
export type SignalEmissionHook = (ihint: SignalInvocationHint, n_param_values: number, param_values: Value[], data: object | null) => boolean;
export type ToggleNotify = (data: object | null, object: Object, is_last_ref: boolean) => void;
export type TypeClassCacheFunc = (cache_data: object | null, g_class: TypeClass) => boolean;
export type TypeInterfaceCheckFunc = (check_data: object | null, g_iface: TypeInterface) => void;
export type TypePluginCompleteInterfaceInfo = (plugin: TypePlugin, instance_type: unknown, interface_type: unknown, info: InterfaceInfo) => void;
export type TypePluginCompleteTypeInfo = (plugin: TypePlugin, g_type: unknown, info: TypeInfo, value_table: TypeValueTable) => void;
export type TypePluginUnuse = (plugin: TypePlugin) => void;
export type TypePluginUse = (plugin: TypePlugin) => void;
export type VaClosureMarshal = (closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]) => void;
export type ValueTransform = (src_value: Value, dest_value: Value) => void;
export type WeakNotify = (data: object | null, where_the_object_was: Object) => void;
export const PARAM_MASK: number;
export const PARAM_STATIC_STRINGS: number;
export const PARAM_USER_SHIFT: number;
export const SIGNAL_FLAGS_MASK: number;
export const SIGNAL_MATCH_MASK: number;
export const TYPE_FLAG_RESERVED_ID_BIT: GLib.Type;
export const TYPE_FUNDAMENTAL_MAX: number;
export const TYPE_FUNDAMENTAL_SHIFT: number;
export const TYPE_RESERVED_BSE_FIRST: number;
export const TYPE_RESERVED_BSE_LAST: number;
export const TYPE_RESERVED_GLIB_FIRST: number;
export const TYPE_RESERVED_GLIB_LAST: number;
export const TYPE_RESERVED_USER_FIRST: number;
export const VALUE_NOCOPY_CONTENTS: number;
/**
 * Provide a copy of a boxed structure @src_boxed which is of type @boxed
 * _type.
 */
export function boxed_copy(boxed_type: unknown, src_boxed: object): object;
/**
 * Free the boxed structure @boxed which is of type @boxed_type.
 */
export function boxed_free(boxed_type: unknown, boxed: object): void;
/**
 * This function creates a new %G_TYPE_BOXED derived type id for a new
 * boxed type with name @name. Boxed type handling functions have to be
 * provided to copy and free opaque boxed structures of this type.
 */
export function boxed_type_register_static(name: string, boxed_copy: BoxedCopyFunc, boxed_free: BoxedFreeFunc): unknown;
/**
 * A #GClosureMarshal function for use with signals with handlers that
 * take two boxed pointers as arguments and return a boolean.  If you
 * have such a signal, you will probably also need to use an
 * accumulator, such as g_signal_accumulator_true_handled().
 */
export function cclosure_marshal_BOOLEAN__BOXED_BOXED(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `gboolean (*callback) (gpointer instance, gint arg1, gpointer user_dat
 * a)` where the #gint parameter
 * denotes a flags type.
 */
export function cclosure_marshal_BOOLEAN__FLAGS(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `gchar* (*callback) (gpointer instance, GObject *arg1, gpointer arg2, 
 * gpointer user_data)`.
 */
export function cclosure_marshal_STRING__OBJECT_POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, gboolean arg1, gpointer user_dat
 * a)`.
 */
export function cclosure_marshal_VOID__BOOLEAN(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, GBoxed *arg1, gpointer user_data
 * )`.
 */
export function cclosure_marshal_VOID__BOXED(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, gchar arg1, gpointer user_data)`
 * .
 */
export function cclosure_marshal_VOID__CHAR(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, gdouble arg1, gpointer user_data
 * )`.
 */
export function cclosure_marshal_VOID__DOUBLE(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)` 
 * where the #gint parameter denotes an enumeration type..
 */
export function cclosure_marshal_VOID__ENUM(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)` 
 * where the #gint parameter denotes a flags type.
 */
export function cclosure_marshal_VOID__FLAGS(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, gfloat arg1, gpointer user_data)
 * `.
 */
export function cclosure_marshal_VOID__FLOAT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, gint arg1, gpointer user_data)`.
 */
export function cclosure_marshal_VOID__INT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, glong arg1, gpointer user_data)`
 * .
 */
export function cclosure_marshal_VOID__LONG(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, GObject *arg1, gpointer user_dat
 * a)`.
 */
export function cclosure_marshal_VOID__OBJECT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, GParamSpec *arg1, gpointer user_
 * data)`.
 */
export function cclosure_marshal_VOID__PARAM(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, gpointer arg1, gpointer user_dat
 * a)`.
 */
export function cclosure_marshal_VOID__POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, const gchar *arg1, gpointer user
 * _data)`.
 */
export function cclosure_marshal_VOID__STRING(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, guchar arg1, gpointer user_data)
 * `.
 */
export function cclosure_marshal_VOID__UCHAR(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, guint arg1, gpointer user_data)`
 * .
 */
export function cclosure_marshal_VOID__UINT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, guint arg1, gpointer arg2, gpoin
 * ter user_data)`.
 */
export function cclosure_marshal_VOID__UINT_POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, gulong arg1, gpointer user_data)
 * `.
 */
export function cclosure_marshal_VOID__ULONG(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, GVariant *arg1, gpointer user_da
 * ta)`.
 */
export function cclosure_marshal_VOID__VARIANT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A marshaller for a #GCClosure with a callback of type
 * `void (*callback) (gpointer instance, gpointer user_data)`.
 */
export function cclosure_marshal_VOID__VOID(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * A generic marshaller function implemented via
 * [libffi](http://sourceware.org/libffi/).
 * Normally this function is not passed explicitly to g_signal_new(),
 * but used automatically by GLib when specifying a %NULL marshaller.
 */
export function cclosure_marshal_generic(closure: Closure, return_gvalue: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * Creates a new closure which invokes @callback_func with @user_data as
 * the last parameter.
 * @destroy_data will be called as a finalize notifier on the #GClosure.
 */
export function cclosure_new(callback_func: Callback | null, user_data: object | null, destroy_data: ClosureNotify): Closure;
/**
 * A variant of g_cclosure_new() which uses @object as @user_data and
 * calls g_object_watch_closure() on @object and the created
 * closure. This function is useful when you have a callback closely
 * associated with a #GObject, and want the callback to no longer run
 * after the object is is freed.
 */
export function cclosure_new_object(callback_func: Callback, object: Object): Closure;
/**
 * A variant of g_cclosure_new_swap() which uses @object as @user_data
 * and calls g_object_watch_closure() on @object and the created
 * closure. This function is useful when you have a callback closely
 * associated with a #GObject, and want the callback to no longer run
 * after the object is is freed.
 */
export function cclosure_new_object_swap(callback_func: Callback, object: Object): Closure;
/**
 * Creates a new closure which invokes @callback_func with @user_data as
 * the first parameter.
 * @destroy_data will be called as a finalize notifier on the #GClosure.
 */
export function cclosure_new_swap(callback_func: Callback | null, user_data: object | null, destroy_data: ClosureNotify): Closure;
/**
 * Clears a reference to a #GObject.
 * @object_ptr must not be %NULL.
 * If the reference is %NULL then this function does nothing.
 * Otherwise, the reference count of the object is decreased and the
 * pointer is set to %NULL.
 * A macro is also included that allows this function to be used without
 * pointer casts.
 */
export function clear_object(object_ptr: Object): void;
/**
 * This function is meant to be called from the `complete_type_info`
 * function of a #GTypePlugin implementation, as in the following
 * example:
 * |[<!-- language="C" -->
 * static void
 * my_enum_complete_type_info (GTypePlugin     *plugin,
 *                             GType            g_type,
 *                             GTypeInfo       *info,
 *                             GTypeValueTable *value_table)
 * {
 *   static const GEnumValue values[] = {
 *     { MY_ENUM_FOO, "MY_ENUM_FOO", "foo" },
 *     { MY_ENUM_BAR, "MY_ENUM_BAR", "bar" },
 *     { 0, NULL, NULL }
 *   };
 *   g_enum_complete_type_info (type, info, values);
 * }
 * ]|
 */
export function enum_complete_type_info(g_enum_type: unknown, const_values: EnumValue): [TypeInfo];
/**
 * Returns the #GEnumValue for a value.
 */
export function enum_get_value(enum_class: EnumClass, value: number): EnumValue;
/**
 * Looks up a #GEnumValue by name.
 */
export function enum_get_value_by_name(enum_class: EnumClass, name: string): EnumValue;
/**
 * Looks up a #GEnumValue by nickname.
 */
export function enum_get_value_by_nick(enum_class: EnumClass, nick: string): EnumValue;
/**
 * Registers a new static enumeration type with the name @name.
 * It is normally more convenient to let [glib-mkenums][glib-mkenums],
 * generate a my_enum_get_type() function from a usual C enumeration
 * definition  than to write one yourself using g_enum_register_static().
 */
export function enum_register_static(name: string, const_static_values: EnumValue): unknown;
/**
 * Pretty-prints @value in the form of the enum’s name.
 * This is intended to be used for debugging purposes. The format of the 
 * output
 * may change in the future.
 */
export function enum_to_string(g_enum_type: unknown, value: number): string;
/**
 * This function is meant to be called from the complete_type_info()
 * function of a #GTypePlugin implementation, see the example for
 * g_enum_complete_type_info() above.
 */
export function flags_complete_type_info(g_flags_type: unknown, const_values: FlagsValue): [TypeInfo];
/**
 * Returns the first #GFlagsValue which is set in @value.
 */
export function flags_get_first_value(flags_class: FlagsClass, value: number): FlagsValue;
/**
 * Looks up a #GFlagsValue by name.
 */
export function flags_get_value_by_name(flags_class: FlagsClass, name: string): FlagsValue;
/**
 * Looks up a #GFlagsValue by nickname.
 */
export function flags_get_value_by_nick(flags_class: FlagsClass, nick: string): FlagsValue;
/**
 * Registers a new static flags type with the name @name.
 * It is normally more convenient to let [glib-mkenums][glib-mkenums]
 * generate a my_flags_get_type() function from a usual C enumeration
 * definition than to write one yourself using g_flags_register_static().
 */
export function flags_register_static(name: string, const_static_values: FlagsValue): unknown;
/**
 * Pretty-prints @value in the form of the flag names separated by ` | ` 
 * and
 * sorted. Any extra bits will be shown at the end as a hexadecimal numbe
 * r.
 * This is intended to be used for debugging purposes. The format of the 
 * output
 * may change in the future.
 */
export function flags_to_string(flags_type: unknown, value: number): string;
/**
 * 
 */
export function gtype_get_type(): unknown;
/**
 * Creates a new #GParamSpecBoolean instance specifying a %G_TYPE_BOOLEAN
 * property. In many cases, it may be more appropriate to use an enum wit
 * h
 * g_param_spec_enum(), both to improve code clarity by using explicitly 
 * named
 * values, and to allow for more values to be added in future without bre
 * aking
 * API.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_boolean(name: string, nick: string, blurb: string, default_value: boolean, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecBoxed instance specifying a %G_TYPE_BOXED
 * derived property.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_boxed(name: string, nick: string, blurb: string, boxed_type: unknown, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecChar instance specifying a %G_TYPE_CHAR prope
 * rty.
 */
export function param_spec_char(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecDouble instance specifying a %G_TYPE_DOUBLE
 * property.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_double(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecEnum instance specifying a %G_TYPE_ENUM
 * property.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_enum(name: string, nick: string, blurb: string, enum_type: unknown, default_value: number, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecFlags instance specifying a %G_TYPE_FLAGS
 * property.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_flags(name: string, nick: string, blurb: string, flags_type: unknown, default_value: number, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecFloat instance specifying a %G_TYPE_FLOAT pro
 * perty.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_float(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecGType instance specifying a
 * %G_TYPE_GTYPE property.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_gtype(name: string, nick: string, blurb: string, is_a_type: unknown, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecInt instance specifying a %G_TYPE_INT propert
 * y.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_int(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecInt64 instance specifying a %G_TYPE_INT64 pro
 * perty.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_int64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecLong instance specifying a %G_TYPE_LONG prope
 * rty.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_long(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecBoxed instance specifying a %G_TYPE_OBJECT
 * derived property.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_object(name: string, nick: string, blurb: string, object_type: unknown, flags: ParamFlags): ParamSpec;
/**
 * Creates a new property of type #GParamSpecOverride. This is used
 * to direct operations to another paramspec, and will not be directly
 * useful unless you are implementing a new base type similar to GObject.
 */
export function param_spec_override(name: string, overridden: ParamSpec): ParamSpec;
/**
 * Creates a new #GParamSpecParam instance specifying a %G_TYPE_PARAM
 * property.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_param(name: string, nick: string, blurb: string, param_type: unknown, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecPointer instance specifying a pointer propert
 * y.
 * Where possible, it is better to use g_param_spec_object() or
 * g_param_spec_boxed() to expose memory management information.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_pointer(name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecPool.
 * If @type_prefixing is %TRUE, lookups in the newly created pool will
 * allow to specify the owner as a colon-separated prefix of the
 * property name, like "GtkContainer:border-width". This feature is
 * deprecated, so you should always set @type_prefixing to %FALSE.
 */
export function param_spec_pool_new(type_prefixing: boolean): ParamSpecPool;
/**
 * Creates a new #GParamSpecString instance.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_string(name: string, nick: string, blurb: string, default_value: string | null, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecUChar instance specifying a %G_TYPE_UCHAR pro
 * perty.
 */
export function param_spec_uchar(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecUInt instance specifying a %G_TYPE_UINT prope
 * rty.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_uint(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecUInt64 instance specifying a %G_TYPE_UINT64
 * property.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_uint64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecULong instance specifying a %G_TYPE_ULONG
 * property.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_ulong(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecUnichar instance specifying a %G_TYPE_UINT
 * property. #GValue structures for this property can be accessed with
 * g_value_set_uint() and g_value_get_uint().
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_unichar(name: string, nick: string, blurb: string, default_value: number, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecValueArray instance specifying a
 * %G_TYPE_VALUE_ARRAY property. %G_TYPE_VALUE_ARRAY is a
 * %G_TYPE_BOXED type, as such, #GValue structures for this property
 * can be accessed with g_value_set_boxed() and g_value_get_boxed().
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_value_array(name: string, nick: string, blurb: string, element_spec: ParamSpec, flags: ParamFlags): ParamSpec;
/**
 * Creates a new #GParamSpecVariant instance specifying a #GVariant
 * property.
 * If @default_value is floating, it is consumed.
 * See g_param_spec_internal() for details on property names.
 */
export function param_spec_variant(name: string, nick: string, blurb: string, type: GLib.VariantType, default_value: GLib.Variant | null, flags: ParamFlags): ParamSpec;
/**
 * Registers @name as the name of a new static type derived from
 * #G_TYPE_PARAM. The type system uses the information contained in
 * the #GParamSpecTypeInfo structure pointed to by @info to manage the
 * #GParamSpec type and its instances.
 */
export function param_type_register_static(name: string, pspec_info: ParamSpecTypeInfo): unknown;
/**
 * Transforms @src_value into @dest_value if possible, and then
 * validates @dest_value, in order for it to conform to @pspec.  If
 * @strict_validation is %TRUE this function will only succeed if the
 * transformed @dest_value complied to @pspec without modifications.
 * See also g_value_type_transformable(), g_value_transform() and
 * g_param_value_validate().
 */
export function param_value_convert(pspec: ParamSpec, src_value: Value, dest_value: Value, strict_validation: boolean): boolean;
/**
 * Checks whether @value contains the default value as specified in @pspe
 * c.
 */
export function param_value_defaults(pspec: ParamSpec, value: Value): boolean;
/**
 * Sets @value to its default value as specified in @pspec.
 */
export function param_value_set_default(pspec: ParamSpec, value: Value): void;
/**
 * Ensures that the contents of @value comply with the specifications
 * set out by @pspec. For example, a #GParamSpecInt might require
 * that integers stored in @value may not be smaller than -42 and not be
 * greater than +42. If @value contains an integer outside of this range,
 * it is modified accordingly, so the resulting value will fit into the
 * range -42 .. +42.
 */
export function param_value_validate(pspec: ParamSpec, value: Value): boolean;
/**
 * Compares @value1 with @value2 according to @pspec, and return -1, 0 or
 *  +1,
 * if @value1 is found to be less than, equal to or greater than @value2,
 * respectively.
 */
export function param_values_cmp(pspec: ParamSpec, value1: Value, value2: Value): number;
/**
 * Creates a new %G_TYPE_POINTER derived type id for a new
 * pointer type with name @name.
 */
export function pointer_type_register_static(name: string): unknown;
/**
 * A predefined #GSignalAccumulator for signals intended to be used as a
 * hook for application code to provide a particular value.  Usually
 * only one such value is desired and multiple handlers for the same
 * signal don't make much sense (except for the case of the default
 * handler defined in the class structure, in which case you will
 * usually want the signal connection to override the class handler).
 * This accumulator will use the return value from the first signal
 * handler that is run as the return value for the signal and not run
 * any further handlers (ie: the first handler "wins").
 */
export function signal_accumulator_first_wins(ihint: SignalInvocationHint, return_accu: Value, handler_return: Value, dummy: object | null): boolean;
/**
 * A predefined #GSignalAccumulator for signals that return a
 * boolean values. The behavior that this accumulator gives is
 * that a return of %TRUE stops the signal emission: no further
 * callbacks will be invoked, while a return of %FALSE allows
 * the emission to continue. The idea here is that a %TRUE return
 * indicates that the callback handled the signal, and no further
 * handling is needed.
 */
export function signal_accumulator_true_handled(ihint: SignalInvocationHint, return_accu: Value, handler_return: Value, dummy: object | null): boolean;
/**
 * Adds an emission hook for a signal, which will get called for any emis
 * sion
 * of that signal, independent of the instance. This is possible only
 * for signals which don't have #G_SIGNAL_NO_HOOKS flag set.
 */
export function signal_add_emission_hook(signal_id: number, detail: GLib.Quark, hook_func: SignalEmissionHook, hook_data: object | null, data_destroy: GLib.DestroyNotify): number;
/**
 * Calls the original class closure of a signal. This function should onl
 * y
 * be called from an overridden class closure; see
 * g_signal_override_class_closure() and
 * g_signal_override_class_handler().
 */
export function signal_chain_from_overridden(instance_and_params: Value[], return_value: Value): void;
/**
 * Calls the original class closure of a signal. This function should
 * only be called from an overridden class closure; see
 * g_signal_override_class_closure() and
 * g_signal_override_class_handler().
 */
export function signal_chain_from_overridden_handler(instance: TypeInstance, ___: unknown[]): void;
/**
 * Connects a closure to a signal for a particular object.
 */
export function signal_connect_closure(instance: Object, detailed_signal: string, closure: Closure, after: boolean): number;
/**
 * Connects a closure to a signal for a particular object.
 */
export function signal_connect_closure_by_id(instance: Object, signal_id: number, detail: GLib.Quark, closure: Closure, after: boolean): number;
/**
 * Connects a #GCallback function to a signal for a particular object. Si
 * milar
 * to g_signal_connect(), but allows to provide a #GClosureNotify for the
 *  data
 * which will be called when the signal handler is disconnected and no lo
 * nger
 * used. Specify @connect_flags if you need `..._after()` or
 * `..._swapped()` variants of this function.
 */
export function signal_connect_data(instance: Object, detailed_signal: string, c_handler: Callback, data: object | null, destroy_data: ClosureNotify, connect_flags: ConnectFlags): number;
/**
 * This is similar to g_signal_connect_data(), but uses a closure which
 * ensures that the @gobject stays alive during the call to @c_handler
 * by temporarily adding a reference count to @gobject.
 * When the @gobject is destroyed the signal handler will be automaticall
 * y
 * disconnected.  Note that this is not currently threadsafe (ie:
 * emitting a signal while @gobject is being destroyed in another thread
 * is not safe).
 */
export function signal_connect_object(instance: TypeInstance, detailed_signal: string, c_handler: Callback, gobject: Object | null, connect_flags: ConnectFlags): number;
/**
 * Emits a signal.
 * Note that g_signal_emit() resets the return value to the default
 * if no handlers are connected, in contrast to g_signal_emitv().
 */
export function signal_emit(instance: Object, signal_id: number, detail: GLib.Quark, ___: unknown[]): void;
/**
 * Emits a signal.
 * Note that g_signal_emit_by_name() resets the return value to the defau
 * lt
 * if no handlers are connected, in contrast to g_signal_emitv().
 */
export function signal_emit_by_name(instance: Object, detailed_signal: string, ___: unknown[]): void;
/**
 * Emits a signal.
 * Note that g_signal_emit_valist() resets the return value to the defaul
 * t
 * if no handlers are connected, in contrast to g_signal_emitv().
 */
export function signal_emit_valist(instance: TypeInstance, signal_id: number, detail: GLib.Quark, var_args: any): void;
/**
 * Emits a signal.
 * Note that g_signal_emitv() doesn't change @return_value if no handlers
 *  are
 * connected, in contrast to g_signal_emit() and g_signal_emit_valist().
 */
export function signal_emitv(instance_and_params: Value[], signal_id: number, detail: GLib.Quark, return_value: Value | null): [Value];
/**
 * Returns the invocation hint of the innermost signal emission of instan
 * ce.
 */
export function signal_get_invocation_hint(instance: Object): SignalInvocationHint;
/**
 * Blocks a handler of an instance so it will not be called during any
 * signal emissions unless it is unblocked again. Thus "blocking" a
 * signal handler means to temporarily deactive it, a signal handler
 * has to be unblocked exactly the same amount of times it has been
 * blocked before to become active again.
 * The @handler_id has to be a valid signal handler id, connected to a
 * signal of @instance.
 */
export function signal_handler_block(instance: Object, handler_id: number): void;
/**
 * Disconnects a handler from an instance so it will not be called during
 * any future or currently ongoing emissions of the signal it has been
 * connected to. The @handler_id becomes invalid and may be reused.
 * The @handler_id has to be a valid signal handler id, connected to a
 * signal of @instance.
 */
export function signal_handler_disconnect(instance: Object, handler_id: number): void;
/**
 * Finds the first signal handler that matches certain selection criteria
 * .
 * The criteria mask is passed as an OR-ed combination of #GSignalMatchTy
 * pe
 * flags, and the criteria values are passed as arguments.
 * The match @mask has to be non-0 for successful matches.
 * If no handler was found, 0 is returned.
 */
export function signal_handler_find(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number;
/**
 * Returns whether @handler_id is the ID of a handler connected to @insta
 * nce.
 */
export function signal_handler_is_connected(instance: Object, handler_id: number): boolean;
/**
 * Undoes the effect of a previous g_signal_handler_block() call.  A
 * blocked handler is skipped during signal emissions and will not be
 * invoked, unblocking it (for exactly the amount of times it has been
 * blocked before) reverts its "blocked" state, so the handler will be
 * recognized by the signal system and is called upon future or
 * currently ongoing signal emissions (since the order in which
 * handlers are called during signal emissions is deterministic,
 * whether the unblocked handler in question is called as part of a
 * currently ongoing emission depends on how far that emission has
 * proceeded yet).
 * The @handler_id has to be a valid id of a signal handler that is
 * connected to a signal of @instance and is currently blocked.
 */
export function signal_handler_unblock(instance: Object, handler_id: number): void;
/**
 * Blocks all handlers on an instance that match a certain selection crit
 * eria.
 * The criteria mask is passed as an OR-ed combination of #GSignalMatchTy
 * pe
 * flags, and the criteria values are passed as arguments.
 * Passing at least one of the %G_SIGNAL_MATCH_CLOSURE, %G_SIGNAL_MATCH_F
 * UNC
 * or %G_SIGNAL_MATCH_DATA match flags is required for successful matches
 * .
 * If no handlers were found, 0 is returned, the number of blocked handle
 * rs
 * otherwise.
 */
export function signal_handlers_block_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number;
/**
 * Destroy all signal handlers of a type instance. This function is
 * an implementation detail of the #GObject dispose implementation,
 * and should not be used outside of the type system.
 */
export function signal_handlers_destroy(instance: Object): void;
/**
 * Disconnects all handlers on an instance that match a certain
 * selection criteria. The criteria mask is passed as an OR-ed
 * combination of #GSignalMatchType flags, and the criteria values are
 * passed as arguments.  Passing at least one of the
 * %G_SIGNAL_MATCH_CLOSURE, %G_SIGNAL_MATCH_FUNC or
 * %G_SIGNAL_MATCH_DATA match flags is required for successful
 * matches.  If no handlers were found, 0 is returned, the number of
 * disconnected handlers otherwise.
 */
export function signal_handlers_disconnect_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number;
/**
 * Unblocks all handlers on an instance that match a certain selection
 * criteria. The criteria mask is passed as an OR-ed combination of
 * #GSignalMatchType flags, and the criteria values are passed as argumen
 * ts.
 * Passing at least one of the %G_SIGNAL_MATCH_CLOSURE, %G_SIGNAL_MATCH_F
 * UNC
 * or %G_SIGNAL_MATCH_DATA match flags is required for successful matches
 * .
 * If no handlers were found, 0 is returned, the number of unblocked hand
 * lers
 * otherwise. The match criteria should not apply to any handlers that ar
 * e
 * not currently blocked.
 */
export function signal_handlers_unblock_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number;
/**
 * Returns whether there are any handlers connected to @instance for the
 * given signal id and detail.
 * If @detail is 0 then it will only match handlers that were connected
 * without detail.  If @detail is non-zero then it will match handlers
 * connected both without detail and with the given detail.  This is
 * consistent with how a signal emitted with @detail would be delivered
 * to those handlers.
 * Since 2.46 this also checks for a non-default class closure being
 * installed, as this is basically always what you want.
 * One example of when you might use this is when the arguments to the
 * signal are difficult to compute. A class implementor may opt to not
 * emit the signal if no one is attached anyway, thus saving the cost
 * of building the arguments.
 */
export function signal_has_handler_pending(instance: Object, signal_id: number, detail: GLib.Quark, may_be_blocked: boolean): boolean;
/**
 * Lists the signals by id that a certain instance or interface type
 * created. Further information about the signals can be acquired through
 * g_signal_query().
 */
export function signal_list_ids(itype: unknown): [number[], number];
/**
 * Given the name of the signal and the type of object it connects to, ge
 * ts
 * the signal's identifying integer. Emitting the signal by number is
 * somewhat faster than using the name each time.
 * Also tries the ancestors of the given type.
 * See g_signal_new() for details on allowed signal names.
 */
export function signal_lookup(name: string, itype: unknown): number;
/**
 * Given the signal's identifier, finds its name.
 * Two different signals may have the same name, if they have differing t
 * ypes.
 */
export function signal_name(signal_id: number): string;
/**
 * Creates a new signal. (This is usually done in the class initializer.)
 * A signal name consists of segments consisting of ASCII letters and
 * digits, separated by either the '-' or '_' character. The first
 * character of a signal name must be a letter. Names which violate these
 * rules lead to undefined behaviour of the GSignal system.
 * When registering a signal and looking up a signal, either separator ca
 * n
 * be used, but they cannot be mixed.
 * If 0 is used for @class_offset subclasses cannot override the class ha
 * ndler
 * in their class_init method by doing super_class->signal_handler = my_s
 * ignal_handler.
 * Instead they will have to use g_signal_override_class_handler().
 * If c_marshaller is %NULL, g_cclosure_marshal_generic() will be used as
 * the marshaller for this signal.
 */
export function signal_new(signal_name: string, itype: unknown, signal_flags: SignalFlags, class_offset: number, accumulator: SignalAccumulator, accu_data: object | null, c_marshaller: SignalCMarshaller | null, return_type: unknown, n_params: number, ___: unknown[]): number;
/**
 * Creates a new signal. (This is usually done in the class initializer.)
 * This is a variant of g_signal_new() that takes a C callback instead
 * of a class offset for the signal's class handler. This function
 * doesn't need a function pointer exposed in the class structure of
 * an object definition, instead the function pointer is passed
 * directly and can be overriden by derived classes with
 * g_signal_override_class_closure() or
 * g_signal_override_class_handler()and chained to with
 * g_signal_chain_from_overridden() or
 * g_signal_chain_from_overridden_handler().
 * See g_signal_new() for information about signal names.
 * If c_marshaller is %NULL, g_cclosure_marshal_generic() will be used as
 * the marshaller for this signal.
 */
export function signal_new_class_handler(signal_name: string, itype: unknown, signal_flags: SignalFlags, class_handler: Callback, accumulator: SignalAccumulator, accu_data: object | null, c_marshaller: SignalCMarshaller | null, return_type: unknown, n_params: number, ___: unknown[]): number;
/**
 * Creates a new signal. (This is usually done in the class initializer.)
 * See g_signal_new() for details on allowed signal names.
 * If c_marshaller is %NULL, g_cclosure_marshal_generic() will be used as
 * the marshaller for this signal.
 */
export function signal_new_valist(signal_name: string, itype: unknown, signal_flags: SignalFlags, class_closure: Closure, accumulator: SignalAccumulator, accu_data: object | null, c_marshaller: SignalCMarshaller | null, return_type: unknown, n_params: number, args: any): number;
/**
 * Creates a new signal. (This is usually done in the class initializer.)
 * See g_signal_new() for details on allowed signal names.
 * If c_marshaller is %NULL, g_cclosure_marshal_generic() will be used as
 * the marshaller for this signal.
 */
export function signal_newv(signal_name: string, itype: unknown, signal_flags: SignalFlags, class_closure: Closure | null, accumulator: SignalAccumulator | null, accu_data: object | null, c_marshaller: SignalCMarshaller | null, return_type: unknown, n_params: number, param_types: unknown[]): number;
/**
 * Overrides the class closure (i.e. the default handler) for the given s
 * ignal
 * for emissions on instances of @instance_type. @instance_type must be d
 * erived
 * from the type to which the signal belongs.
 * See g_signal_chain_from_overridden() and
 * g_signal_chain_from_overridden_handler() for how to chain up to the
 * parent class closure from inside the overridden one.
 */
export function signal_override_class_closure(signal_id: number, instance_type: unknown, class_closure: Closure): void;
/**
 * Overrides the class closure (i.e. the default handler) for the
 * given signal for emissions on instances of @instance_type with
 * callback @class_handler. @instance_type must be derived from the
 * type to which the signal belongs.
 * See g_signal_chain_from_overridden() and
 * g_signal_chain_from_overridden_handler() for how to chain up to the
 * parent class closure from inside the overridden one.
 */
export function signal_override_class_handler(signal_name: string, instance_type: unknown, class_handler: Callback): void;
/**
 * Internal function to parse a signal name into its @signal_id
 * and @detail quark.
 */
export function signal_parse_name(detailed_signal: string, itype: unknown, force_detail_quark: boolean): [boolean, number,GLib.Quark];
/**
 * Queries the signal system for in-depth information about a
 * specific signal. This function will fill in a user-provided
 * structure to hold signal-specific information. If an invalid
 * signal id is passed in, the @signal_id member of the #GSignalQuery
 * is 0. All members filled into the #GSignalQuery structure should
 * be considered constant and have to be left untouched.
 */
export function signal_query(signal_id: number): [SignalQuery];
/**
 * Deletes an emission hook.
 */
export function signal_remove_emission_hook(signal_id: number, hook_id: number): void;
/**
 * Change the #GSignalCVaMarshaller used for a given signal.  This is a
 * specialised form of the marshaller that can often be used for the
 * common case of a single connected signal handler and avoids the
 * overhead of #GValue.  Its use is optional.
 */
export function signal_set_va_marshaller(signal_id: number, instance_type: unknown, va_marshaller: SignalCVaMarshaller): void;
/**
 * Stops a signal's current emission.
 * This will prevent the default method from running, if the signal was
 * %G_SIGNAL_RUN_LAST and you connected normally (i.e. without the "after
 * "
 * flag).
 * Prints a warning if used on a signal which isn't being emitted.
 */
export function signal_stop_emission(instance: Object, signal_id: number, detail: GLib.Quark): void;
/**
 * Stops a signal's current emission.
 * This is just like g_signal_stop_emission() except it will look up the
 * signal id for you.
 */
export function signal_stop_emission_by_name(instance: Object, detailed_signal: string): void;
/**
 * Creates a new closure which invokes the function found at the offset
 * @struct_offset in the class structure of the interface or classed type
 * identified by @itype.
 */
export function signal_type_cclosure_new(itype: unknown, struct_offset: number): Closure;
/**
 * Set the callback for a source as a #GClosure.
 * If the source is not one of the standard GLib types, the @closure_call
 * back
 * and @closure_marshal fields of the #GSourceFuncs structure must have b
 * een
 * filled in with pointers to appropriate functions.
 */
export function source_set_closure(source: GLib.Source, closure: Closure): void;
/**
 * Sets a dummy callback for @source. The callback will do nothing, and
 * if the source expects a #gboolean return value, it will return %TRUE.
 * (If the source expects any other type of return value, it will return
 * a 0/%NULL value; whatever g_value_init() initializes a #GValue to for
 * that type.)
 * If the source is not one of the standard GLib types, the
 * @closure_callback and @closure_marshal fields of the #GSourceFuncs
 * structure must have been filled in with pointers to appropriate
 * functions.
 */
export function source_set_dummy_callback(source: GLib.Source): void;
/**
 * Return a newly allocated string, which describes the contents of a
 * #GValue.  The main purpose of this function is to describe #GValue
 * contents for debugging output, the way in which the contents are
 * described may change between different GLib versions.
 */
export function strdup_value_contents(value: Value): string;
/**
 * Adds a #GTypeClassCacheFunc to be called before the reference count of
 *  a
 * class goes from one to zero. This can be used to prevent premature cla
 * ss
 * destruction. All installed #GTypeClassCacheFunc functions will be chai
 * ned
 * until one of them returns %TRUE. The functions have to check the class
 *  id
 * passed in to figure whether they actually want to cache the class of t
 * his
 * type, since all classes are routed through the same #GTypeClassCacheFu
 * nc
 * chain.
 */
export function type_add_class_cache_func(cache_data: object | null, cache_func: TypeClassCacheFunc): void;
/**
 * Registers a private class structure for a classed type;
 * when the class is allocated, the private structures for
 * the class and all of its parent types are allocated
 * sequentially in the same memory block as the public
 * structures, and are zero-filled.
 * This function should be called in the
 * type's get_type() function after the type is registered.
 * The private structure can be retrieved using the
 * G_TYPE_CLASS_GET_PRIVATE() macro.
 */
export function type_add_class_private(class_type: unknown, private_size: number): void;
/**
 * 
 */
export function type_add_instance_private(class_type: unknown, private_size: number): number;
/**
 * Adds a function to be called after an interface vtable is
 * initialized for any class (i.e. after the @interface_init
 * member of #GInterfaceInfo has been called).
 * This function is useful when you want to check an invariant
 * that depends on the interfaces of a class. For instance, the
 * implementation of #GObject uses this facility to check that an
 * object implements all of the properties that are defined on its
 * interfaces.
 */
export function type_add_interface_check(check_data: object | null, check_func: TypeInterfaceCheckFunc): void;
/**
 * Adds the dynamic @interface_type to @instantiable_type. The informatio
 * n
 * contained in the #GTypePlugin structure pointed to by @plugin
 * is used to manage the relationship.
 */
export function type_add_interface_dynamic(instance_type: unknown, interface_type: unknown, plugin: TypePlugin): void;
/**
 * Adds the static @interface_type to @instantiable_type.
 * The information contained in the #GInterfaceInfo structure
 * pointed to by @info is used to manage the relationship.
 */
export function type_add_interface_static(instance_type: unknown, interface_type: unknown, info: InterfaceInfo): void;
/**
 * 
 */
export function type_check_class_cast(g_class: TypeClass, is_a_type: unknown): TypeClass;
/**
 * 
 */
export function type_check_class_is_a(g_class: TypeClass, is_a_type: unknown): boolean;
/**
 * Private helper function to aid implementation of the
 * G_TYPE_CHECK_INSTANCE() macro.
 */
export function type_check_instance(instance: TypeInstance): boolean;
/**
 * 
 */
export function type_check_instance_cast(instance: TypeInstance, iface_type: unknown): TypeInstance;
/**
 * 
 */
export function type_check_instance_is_a(instance: TypeInstance, iface_type: unknown): boolean;
/**
 * 
 */
export function type_check_instance_is_fundamentally_a(instance: TypeInstance, fundamental_type: unknown): boolean;
/**
 * 
 */
export function type_check_is_value_type(type: unknown): boolean;
/**
 * 
 */
export function type_check_value(value: Value): boolean;
/**
 * 
 */
export function type_check_value_holds(value: Value, type: unknown): boolean;
/**
 * Return a newly allocated and 0-terminated array of type IDs, listing
 * the child types of @type.
 */
export function type_children(type: unknown): [unknown[], number | null];
/**
 * 
 */
export function type_class_adjust_private_offset(g_class: object | null, private_size_or_offset: number): void;
/**
 * This function is essentially the same as g_type_class_ref(),
 * except that the classes reference count isn't incremented.
 * As a consequence, this function may return %NULL if the class
 * of the type passed in does not currently exist (hasn't been
 * referenced before).
 */
export function type_class_peek(type: unknown): TypeClass;
/**
 * A more efficient version of g_type_class_peek() which works only for
 * static types.
 */
export function type_class_peek_static(type: unknown): TypeClass;
/**
 * Increments the reference count of the class structure belonging to
 * @type. This function will demand-create the class if it doesn't
 * exist already.
 */
export function type_class_ref(type: unknown): TypeClass;
/**
 * Creates and initializes an instance of @type if @type is valid and
 * can be instantiated. The type system only performs basic allocation
 * and structure setups for instances: actual instance creation should
 * happen through functions supplied by the type's fundamental type
 * implementation.  So use of g_type_create_instance() is reserved for
 * implementators of fundamental types only. E.g. instances of the
 * #GObject hierarchy should be created via g_object_new() and never
 * directly through g_type_create_instance() which doesn't handle things
 * like singleton objects or object construction.
 * The extended members of the returned instance are guaranteed to be fil
 * led
 * with zeros.
 * Note: Do not use this function, unless you're implementing a
 * fundamental type. Also language bindings should not use this
 * function, but g_object_new() instead.
 */
export function type_create_instance(type: unknown): TypeInstance;
/**
 * If the interface type @g_type is currently in use, returns its
 * default interface vtable.
 */
export function type_default_interface_peek(g_type: unknown): TypeInterface;
/**
 * Increments the reference count for the interface type @g_type,
 * and returns the default interface vtable for the type.
 * If the type is not currently in use, then the default vtable
 * for the type will be created and initalized by calling
 * the base interface init and default vtable init functions for
 * the type (the @base_init and @class_init members of #GTypeInfo).
 * Calling g_type_default_interface_ref() is useful when you
 * want to make sure that signals and properties for an interface
 * have been installed.
 */
export function type_default_interface_ref(g_type: unknown): TypeInterface;
/**
 * Decrements the reference count for the type corresponding to the
 * interface default vtable @g_iface. If the type is dynamic, then
 * when no one is using the interface and all references have
 * been released, the finalize function for the interface's default
 * vtable (the @class_finalize member of #GTypeInfo) will be called.
 */
export function type_default_interface_unref(g_iface: TypeInterface): void;
/**
 * Returns the length of the ancestry of the passed in type. This
 * includes the type itself, so that e.g. a fundamental type has depth 1.
 */
export function type_depth(type: unknown): number;
/**
 * Ensures that the indicated @type has been registered with the
 * type system, and its _class_init() method has been run.
 * In theory, simply calling the type's _get_type() method (or using
 * the corresponding macro) is supposed take care of this. However,
 * _get_type() methods are often marked %G_GNUC_CONST for performance
 * reasons, even though this is technically incorrect (since
 * %G_GNUC_CONST requires that the function not have side effects,
 * which _get_type() methods do on the first call). As a result, if
 * you write a bare call to a _get_type() macro, it may get optimized
 * out by the compiler. Using g_type_ensure() guarantees that the
 * type's _get_type() method is called.
 */
export function type_ensure(type: unknown): void;
/**
 * Frees an instance of a type, returning it to the instance pool for
 * the type, if there is one.
 * Like g_type_create_instance(), this function is reserved for
 * implementors of fundamental types.
 */
export function type_free_instance(instance: TypeInstance): void;
/**
 * Lookup the type ID from a given type name, returning 0 if no type
 * has been registered under this name (this is the preferred method
 * to find out by name whether a specific type has been registered
 * yet).
 */
export function type_from_name(name: string): unknown;
/**
 * Internal function, used to extract the fundamental type ID portion.
 * Use G_TYPE_FUNDAMENTAL() instead.
 */
export function type_fundamental(type_id: unknown): unknown;
/**
 * Returns the next free fundamental type id which can be used to
 * register a new fundamental type with g_type_register_fundamental().
 * The returned type ID represents the highest currently registered
 * fundamental type identifier.
 */
export function type_fundamental_next(): unknown;
/**
 * Returns the number of instances allocated of the particular type;
 * this is only available if GLib is built with debugging support and
 * the instance_count debug flag is set (by setting the GOBJECT_DEBUG
 * variable to include instance-count).
 */
export function type_get_instance_count(type: unknown): number;
/**
 * Returns the #GTypePlugin structure for @type.
 */
export function type_get_plugin(type: unknown): TypePlugin;
/**
 * Obtains data which has previously been attached to @type
 * with g_type_set_qdata().
 * Note that this does not take subtyping into account; data
 * attached to one type with g_type_set_qdata() cannot
 * be retrieved from a subtype using g_type_get_qdata().
 */
export function type_get_qdata(type: unknown, quark: GLib.Quark): object | null;
/**
 * Returns an opaque serial number that represents the state of the set
 * of registered types. Any time a type is registered this serial changes
 * ,
 * which means you can cache information based on type lookups (such as
 * g_type_from_name()) and know if the cache is still valid at a later
 * time by comparing the current serial with the one at the type lookup.
 */
export function type_get_type_registration_serial(): number;
/**
 * This function used to initialise the type system.  Since GLib 2.36,
 * the type system is initialised automatically and this function does
 * nothing.
 */
export function type_init(): void;
/**
 * This function used to initialise the type system with debugging
 * flags.  Since GLib 2.36, the type system is initialised automatically
 * and this function does nothing.
 * If you need to enable debugging features, use the GOBJECT_DEBUG
 * environment variable.
 */
export function type_init_with_debug_flags(debug_flags: TypeDebugFlags): void;
/**
 * Adds @prerequisite_type to the list of prerequisites of @interface_typ
 * e.
 * This means that any type implementing @interface_type must also implem
 * ent
 * @prerequisite_type. Prerequisites can be thought of as an alternative 
 * to
 * interface derivation (which GType doesn't support). An interface can h
 * ave
 * at most one instantiatable prerequisite type.
 */
export function type_interface_add_prerequisite(interface_type: unknown, prerequisite_type: unknown): void;
/**
 * Returns the #GTypePlugin structure for the dynamic interface
 * @interface_type which has been added to @instance_type, or %NULL
 * if @interface_type has not been added to @instance_type or does
 * not have a #GTypePlugin structure. See g_type_add_interface_dynamic().
 */
export function type_interface_get_plugin(instance_type: unknown, interface_type: unknown): TypePlugin;
/**
 * Returns the #GTypeInterface structure of an interface to which the
 * passed in class conforms.
 */
export function type_interface_peek(instance_class: TypeClass, iface_type: unknown): TypeInterface;
/**
 * Returns the prerequisites of an interfaces type.
 */
export function type_interface_prerequisites(interface_type: unknown): [unknown[], number | null];
/**
 * Return a newly allocated and 0-terminated array of type IDs, listing
 * the interface types that @type conforms to.
 */
export function type_interfaces(type: unknown): [unknown[], number | null];
/**
 * If @is_a_type is a derivable type, check whether @type is a
 * descendant of @is_a_type. If @is_a_type is an interface, check
 * whether @type conforms to it.
 */
export function type_is_a(type: unknown, is_a_type: unknown): boolean;
/**
 * Get the unique name that is assigned to a type ID.  Note that this
 * function (like all other GType API) cannot cope with invalid type
 * IDs. %G_TYPE_INVALID may be passed to this function, as may be any
 * other validly registered type ID, but randomized type IDs should
 * not be passed in and will most likely lead to a crash.
 */
export function type_name(type: unknown): string;
/**
 * 
 */
export function type_name_from_class(g_class: TypeClass): string;
/**
 * 
 */
export function type_name_from_instance(instance: TypeInstance): string;
/**
 * Given a @leaf_type and a @root_type which is contained in its
 * anchestry, return the type that @root_type is the immediate parent
 * of. In other words, this function determines the type that is
 * derived directly from @root_type which is also a base class of
 * @leaf_type.  Given a root type and a leaf type, this function can
 * be used to determine the types and order in which the leaf type is
 * descended from the root type.
 */
export function type_next_base(leaf_type: unknown, root_type: unknown): unknown;
/**
 * Return the direct parent type of the passed in type. If the passed
 * in type has no parent, i.e. is a fundamental type, 0 is returned.
 */
export function type_parent(type: unknown): unknown;
/**
 * Get the corresponding quark of the type IDs name.
 */
export function type_qname(type: unknown): GLib.Quark;
/**
 * Queries the type system for information about a specific type.
 * This function will fill in a user-provided structure to hold
 * type-specific information. If an invalid #GType is passed in, the
 * @type member of the #GTypeQuery is 0. All members filled into the
 * #GTypeQuery structure should be considered constant and have to be
 * left untouched.
 */
export function type_query(type: unknown): [TypeQuery];
/**
 * Registers @type_name as the name of a new dynamic type derived from
 * @parent_type.  The type system uses the information contained in the
 * #GTypePlugin structure pointed to by @plugin to manage the type and it
 * s
 * instances (if not abstract).  The value of @flags determines the natur
 * e
 * (e.g. abstract or not) of the type.
 */
export function type_register_dynamic(parent_type: unknown, type_name: string, plugin: TypePlugin, flags: TypeFlags): unknown;
/**
 * Registers @type_id as the predefined identifier and @type_name as the
 * name of a fundamental type. If @type_id is already registered, or a
 * type named @type_name is already registered, the behaviour is undefine
 * d.
 * The type system uses the information contained in the #GTypeInfo struc
 * ture
 * pointed to by @info and the #GTypeFundamentalInfo structure pointed to
 *  by
 * @finfo to manage the type and its instances. The value of @flags deter
 * mines
 * additional characteristics of the fundamental type.
 */
export function type_register_fundamental(type_id: unknown, type_name: string, info: TypeInfo, finfo: TypeFundamentalInfo, flags: TypeFlags): unknown;
/**
 * Registers @type_name as the name of a new static type derived from
 * @parent_type. The type system uses the information contained in the
 * #GTypeInfo structure pointed to by @info to manage the type and its
 * instances (if not abstract). The value of @flags determines the nature
 * (e.g. abstract or not) of the type.
 */
export function type_register_static(parent_type: unknown, type_name: string, info: TypeInfo, flags: TypeFlags): unknown;
/**
 * Registers @type_name as the name of a new static type derived from
 * @parent_type.  The value of @flags determines the nature (e.g.
 * abstract or not) of the type. It works by filling a #GTypeInfo
 * struct and calling g_type_register_static().
 */
export function type_register_static_simple(parent_type: unknown, type_name: string, class_size: number, class_init: ClassInitFunc, instance_size: number, instance_init: InstanceInitFunc, flags: TypeFlags): unknown;
/**
 * Removes a previously installed #GTypeClassCacheFunc. The cache
 * maintained by @cache_func has to be empty when calling
 * g_type_remove_class_cache_func() to avoid leaks.
 */
export function type_remove_class_cache_func(cache_data: object | null, cache_func: TypeClassCacheFunc): void;
/**
 * Removes an interface check function added with
 * g_type_add_interface_check().
 */
export function type_remove_interface_check(check_data: object | null, check_func: TypeInterfaceCheckFunc): void;
/**
 * Attaches arbitrary data to a type.
 */
export function type_set_qdata(type: unknown, quark: GLib.Quark, data: object | null): void;
/**
 * 
 */
export function type_test_flags(type: unknown, flags: number): boolean;
/**
 * Returns the location of the #GTypeValueTable associated with @type.
 * Note that this function should only be used from source code
 * that implements or has internal knowledge of the implementation of
 * @type.
 */
export function type_value_table_peek(type: unknown): TypeValueTable;
/**
 * Registers a value transformation function for use in g_value_transform
 * ().
 * A previously registered transformation function for @src_type and @des
 * t_type
 * will be replaced.
 */
export function value_register_transform_func(src_type: unknown, dest_type: unknown, transform_func: ValueTransform): void;
/**
 * Returns whether a #GValue of type @src_type can be copied into
 * a #GValue of type @dest_type.
 */
export function value_type_compatible(src_type: unknown, dest_type: unknown): boolean;
/**
 * Check whether g_value_transform() is able to transform values
 * of type @src_type into values of type @dest_type. Note that for
 * the types to be transformable, they must be compatible or a
 * transformation function must be registered.
 */
export function value_type_transformable(src_type: unknown, dest_type: unknown): boolean;
export type SignalCMarshaller = ClosureMarshal;
export type SignalCVaMarshaller = VaClosureMarshal;
export type Type = number;
export enum BindingFlags {
    DEFAULT = 0,
    BIDIRECTIONAL = 1,
    SYNC_CREATE = 2,
    INVERT_BOOLEAN = 4,
}
export enum ConnectFlags {
    AFTER = 1,
    SWAPPED = 2,
}
export enum ParamFlags {
    READABLE = 1,
    WRITABLE = 2,
    READWRITE = 3,
    CONSTRUCT = 4,
    CONSTRUCT_ONLY = 8,
    LAX_VALIDATION = 16,
    STATIC_NAME = 32,
    PRIVATE = 32,
    STATIC_NICK = 64,
    STATIC_BLURB = 128,
    EXPLICIT_NOTIFY = 1073741824,
    DEPRECATED = 2147483648,
}
export enum SignalFlags {
    RUN_FIRST = 1,
    RUN_LAST = 2,
    RUN_CLEANUP = 4,
    NO_RECURSE = 8,
    DETAILED = 16,
    ACTION = 32,
    NO_HOOKS = 64,
    MUST_COLLECT = 128,
    DEPRECATED = 256,
}
export enum SignalMatchType {
    ID = 1,
    DETAIL = 2,
    CLOSURE = 4,
    FUNC = 8,
    DATA = 16,
    UNBLOCKED = 32,
}
export enum TypeDebugFlags {
    NONE = 0,
    OBJECTS = 1,
    SIGNALS = 2,
    INSTANCE_COUNT = 4,
    MASK = 7,
}
export enum TypeFlags {
    ABSTRACT = 16,
    VALUE_ABSTRACT = 32,
}
export enum TypeFundamentalFlags {
    CLASSED = 1,
    INSTANTIATABLE = 2,
    DERIVABLE = 4,
    DEEP_DERIVABLE = 8,
}
export class Binding  {constructor(config?: properties);
flags: BindingFlags;
source: Object;
source_property: string;
target: Object;
target_property: string;
get_flags(): BindingFlags;
get_source(): Object;
get_source_property(): string;
get_target(): Object;
get_target_property(): string;
unbind(): void;
}
export class InitiallyUnowned  {constructor(config?: properties);
readonly g_type_instance: TypeInstance;
readonly ref_count: number;
readonly qdata: GLib.Data;
}
export class Object  {constructor(config?: properties);
static new_valist(object_type: unknown, first_property_name: string, var_args: any): Object;
static new_with_properties(object_type: unknown, n_properties: number, names: string[], values: Value[]): Object;
static newv(object_type: unknown, n_parameters: number, parameters: Parameter[]): Object;
add_toggle_ref(notify: ToggleNotify, data: object | null): void;
add_weak_pointer(weak_pointer_location: object): [object];
bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding;
bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: BindingTransformFunc | null, transform_from: BindingTransformFunc | null, user_data: object | null, notify: GLib.DestroyNotify | null): Binding;
bind_property_with_closures(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure): Binding;
connect(signal_spec: string, ___: unknown[]): Object;
disconnect(signal_spec: string, ___: unknown[]): void;
dup_data(key: string, dup_func: GLib.DuplicateFunc | null, user_data: object | null): object | null;
dup_qdata(quark: GLib.Quark, dup_func: GLib.DuplicateFunc | null, user_data: object | null): object | null;
force_floating(): void;
freeze_notify(): void;
get(first_property_name: string, ___: unknown[]): void;
get_data(key: string): object | null;
get_property(property_name: string, value: Value): void;
get_qdata(quark: GLib.Quark): object | null;
get_valist(first_property_name: string, var_args: any): void;
getv(n_properties: number, names: string[], values: Value[]): void;
is_floating(): boolean;
notify(property_name: string): void;
notify_by_pspec(pspec: ParamSpec): void;
ref(): Object;
ref_sink(): Object;
remove_toggle_ref(notify: ToggleNotify, data: object | null): void;
remove_weak_pointer(weak_pointer_location: object): [object];
replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null): [boolean, GLib.DestroyNotify | null];
replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null): [boolean, GLib.DestroyNotify | null];
run_dispose(): void;
set(first_property_name: string, ___: unknown[]): void;
set_data(key: string, data: object | null): void;
set_data_full(key: string, data: object | null, destroy: GLib.DestroyNotify | null): void;
set_property(property_name: string, value: Value): void;
set_qdata(quark: GLib.Quark, data: object | null): void;
set_qdata_full(quark: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify | null): void;
set_valist(first_property_name: string, var_args: any): void;
setv(n_properties: number, names: string[], values: Value[]): void;
steal_data(key: string): object | null;
steal_qdata(quark: GLib.Quark): object | null;
thaw_notify(): void;
unref(): void;
watch_closure(closure: Closure): void;
weak_ref(notify: WeakNotify, data: object | null): void;
weak_unref(notify: WeakNotify, data: object | null): void;
vfunc_constructed(): void;
vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void;
vfunc_dispose(): void;
vfunc_finalize(): void;
vfunc_get_property(property_id: number, value: Value, pspec: ParamSpec): void;
vfunc_notify(pspec: ParamSpec): void;
vfunc_set_property(property_id: number, value: Value, pspec: ParamSpec): void;
static compat_control(what: number, data: object | null): number;
static interface_find_property(g_iface: TypeInterface, property_name: string): ParamSpec;
static interface_install_property(g_iface: TypeInterface, pspec: ParamSpec): void;
static interface_list_properties(g_iface: TypeInterface): [ParamSpec[], number];
}
export class ParamSpec  {constructor(config?: properties);
readonly g_type_instance: TypeInstance;
readonly name: string;
readonly flags: ParamFlags;
readonly value_type: unknown;
readonly owner_type: unknown;
readonly _nick: string;
readonly _blurb: string;
readonly qdata: GLib.Data;
readonly ref_count: number;
readonly param_id: number;
get_blurb(): string;
get_default_value(): Value;
get_name(): string;
get_name_quark(): GLib.Quark;
get_nick(): string;
get_qdata(quark: GLib.Quark): object | null;
get_redirect_target(): ParamSpec;
ref(): ParamSpec;
ref_sink(): ParamSpec;
set_qdata(quark: GLib.Quark, data: object | null): void;
set_qdata_full(quark: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify): void;
sink(): void;
steal_qdata(quark: GLib.Quark): object | null;
unref(): void;
static internal(param_type: unknown, name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpec;
}
export class ParamSpecBoolean  {constructor(config?: properties);
readonly default_value: boolean;
}
export class ParamSpecBoxed  {constructor(config?: properties);
}
export class ParamSpecChar  {constructor(config?: properties);
readonly minimum: number;
readonly maximum: number;
readonly default_value: number;
}
export class ParamSpecDouble  {constructor(config?: properties);
readonly minimum: number;
readonly maximum: number;
readonly default_value: number;
readonly epsilon: number;
}
export class ParamSpecEnum  {constructor(config?: properties);
readonly enum_class: EnumClass;
readonly default_value: number;
}
export class ParamSpecFlags  {constructor(config?: properties);
readonly flags_class: FlagsClass;
readonly default_value: number;
}
export class ParamSpecFloat  {constructor(config?: properties);
readonly minimum: number;
readonly maximum: number;
readonly default_value: number;
readonly epsilon: number;
}
export class ParamSpecGType  {constructor(config?: properties);
readonly is_a_type: unknown;
}
export class ParamSpecInt  {constructor(config?: properties);
readonly minimum: number;
readonly maximum: number;
readonly default_value: number;
}
export class ParamSpecInt64  {constructor(config?: properties);
readonly minimum: number;
readonly maximum: number;
readonly default_value: number;
}
export class ParamSpecLong  {constructor(config?: properties);
readonly minimum: number;
readonly maximum: number;
readonly default_value: number;
}
export class ParamSpecObject  {constructor(config?: properties);
}
export class ParamSpecOverride  {constructor(config?: properties);
readonly overridden: ParamSpec;
}
export class ParamSpecParam  {constructor(config?: properties);
}
export class ParamSpecPointer  {constructor(config?: properties);
}
export class ParamSpecString  {constructor(config?: properties);
readonly default_value: string;
readonly cset_first: string;
readonly cset_nth: string;
readonly substitutor: number;
readonly null_fold_if_empty: number;
readonly ensure_non_null: number;
}
export class ParamSpecUChar  {constructor(config?: properties);
readonly minimum: number;
readonly maximum: number;
readonly default_value: number;
}
export class ParamSpecUInt  {constructor(config?: properties);
readonly minimum: number;
readonly maximum: number;
readonly default_value: number;
}
export class ParamSpecUInt64  {constructor(config?: properties);
readonly minimum: number;
readonly maximum: number;
readonly default_value: number;
}
export class ParamSpecULong  {constructor(config?: properties);
readonly minimum: number;
readonly maximum: number;
readonly default_value: number;
}
export class ParamSpecUnichar  {constructor(config?: properties);
readonly default_value: number;
}
export class ParamSpecValueArray  {constructor(config?: properties);
readonly element_spec: ParamSpec;
readonly fixed_n_elements: number;
}
export class ParamSpecVariant  {constructor(config?: properties);
readonly type: GLib.VariantType;
readonly default_value: GLib.Variant;
readonly padding: object[];
}
export class TypeModule  {constructor(config?: properties);
readonly use_count: number;
readonly type_infos: string[];
readonly interface_infos: string[];
readonly name: string;
add_interface(instance_type: unknown, interface_type: unknown, interface_info: InterfaceInfo): void;
register_enum(name: string, const_static_values: EnumValue): unknown;
register_flags(name: string, const_static_values: FlagsValue): unknown;
register_type(parent_type: unknown, type_name: string, type_info: TypeInfo, flags: TypeFlags): unknown;
set_name(name: string): void;
unuse(): void;
use(): boolean;
}
export class CClosure  {constructor(config?: properties);
closure: Closure;
callback: object;
static marshal_BOOLEAN__BOXED_BOXED(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_BOOLEAN__BOXED_BOXEDv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_BOOLEAN__FLAGS(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_BOOLEAN__FLAGSv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_STRING__OBJECT_POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_STRING__OBJECT_POINTERv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__BOOLEAN(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__BOOLEANv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__BOXED(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__BOXEDv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__CHAR(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__CHARv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__DOUBLE(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__DOUBLEv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__ENUM(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__ENUMv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__FLAGS(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__FLAGSv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__FLOAT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__FLOATv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__INT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__INTv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__LONG(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__LONGv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__OBJECT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__OBJECTv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__PARAM(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__PARAMv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__POINTERv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__STRING(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__STRINGv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__UCHAR(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__UCHARv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__UINT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__UINT_POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__UINT_POINTERv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__UINTv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__ULONG(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__ULONGv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__VARIANT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__VARIANTv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_VOID__VOID(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_VOID__VOIDv(closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static marshal_generic(closure: Closure, return_gvalue: Value, n_param_values: number, param_values: Value, invocation_hint: object | null, marshal_data: object | null): void;
static marshal_generic_va(closure: Closure, return_value: Value | null, instance: TypeInstance, args_list: any, marshal_data: object | null, n_params: number, param_types: unknown[]): void;
static _new(callback_func: Callback | null, user_data: object | null, destroy_data: ClosureNotify): Closure;
static new_object(callback_func: Callback, object: Object): Closure;
static new_object_swap(callback_func: Callback, object: Object): Closure;
static new_swap(callback_func: Callback | null, user_data: object | null, destroy_data: ClosureNotify): Closure;
}
export class Closure  {constructor(config?: properties);
static new_object(sizeof_closure: number, object: Object): Closure;
static new_simple(sizeof_closure: number, data: object | null): Closure;
add_finalize_notifier(notify_data: object | null, notify_func: ClosureNotify | null): void;
add_invalidate_notifier(notify_data: object | null, notify_func: ClosureNotify | null): void;
add_marshal_guards(pre_marshal_data: object | null, pre_marshal_notify: ClosureNotify | null, post_marshal_data: object | null, post_marshal_notify: ClosureNotify | null): void;
invalidate(): void;
invoke(n_param_values: number, param_values: Value[], invocation_hint: object | null): [Value | null];
ref(): Closure;
remove_finalize_notifier(notify_data: object | null, notify_func: ClosureNotify): void;
remove_invalidate_notifier(notify_data: object | null, notify_func: ClosureNotify): void;
set_marshal(marshal: ClosureMarshal): void;
set_meta_marshal(marshal_data: object | null, meta_marshal: ClosureMarshal | null): void;
sink(): void;
unref(): void;
}
export class ClosureNotifyData  {constructor(config?: properties);
data: object;
notify: ClosureNotify;
}
export class EnumClass  {constructor(config?: properties);
g_type_class: TypeClass;
minimum: number;
maximum: number;
n_values: number;
values: EnumValue;
}
export class EnumValue  {constructor(config?: properties);
value: number;
value_name: string;
value_nick: string;
}
export class FlagsClass  {constructor(config?: properties);
g_type_class: TypeClass;
mask: number;
n_values: number;
values: FlagsValue;
}
export class FlagsValue  {constructor(config?: properties);
value: number;
value_name: string;
value_nick: string;
}
export class InitiallyUnownedClass  {constructor(config?: properties);
readonly g_type_class: TypeClass;
readonly construct_properties: string[];
readonly _constructor: unknown;
readonly set_property: unknown;
readonly get_property: unknown;
readonly dispose: unknown;
readonly finalize: unknown;
readonly dispatch_properties_changed: unknown;
readonly notify: unknown;
readonly constructed: unknown;
readonly flags: number;
readonly pdummy: object[];
}
export class InterfaceInfo  {constructor(config?: properties);
interface_init: InterfaceInitFunc;
interface_finalize: InterfaceFinalizeFunc;
interface_data: object;
}
export class ObjectClass  {constructor(config?: properties);
readonly g_type_class: TypeClass;
readonly construct_properties: string[];
readonly _constructor: unknown;
readonly set_property: unknown;
readonly get_property: unknown;
readonly dispose: unknown;
readonly finalize: unknown;
readonly dispatch_properties_changed: unknown;
readonly notify: unknown;
readonly constructed: unknown;
readonly flags: number;
readonly pdummy: object[];
find_property(property_name: string): ParamSpec;
install_properties(n_pspecs: number, pspecs: ParamSpec[]): void;
install_property(property_id: number, pspec: ParamSpec): void;
list_properties(): [ParamSpec[], number];
override_property(property_id: number, name: string): void;
}
export class ObjectConstructParam  {constructor(config?: properties);
pspec: ParamSpec;
value: Value;
}
export class ParamSpecClass  {constructor(config?: properties);
readonly g_type_class: TypeClass;
readonly value_type: unknown;
readonly finalize: unknown;
readonly value_set_default: unknown;
readonly value_validate: unknown;
readonly values_cmp: unknown;
readonly dummy: object[];
}
export class ParamSpecPool  {constructor(config?: properties);
insert(pspec: ParamSpec, owner_type: unknown): void;
list(owner_type: unknown): [ParamSpec[], number];
list_owned(owner_type: unknown): GLib.List;
lookup(param_name: string, owner_type: unknown, walk_ancestors: boolean): ParamSpec;
remove(pspec: ParamSpec): void;
static _new(type_prefixing: boolean): ParamSpecPool;
}
export class ParamSpecTypeInfo  {constructor(config?: properties);
instance_size: number;
n_preallocs: number;
readonly instance_init: unknown;
value_type: unknown;
readonly finalize: unknown;
readonly value_set_default: unknown;
readonly value_validate: unknown;
readonly values_cmp: unknown;
}
export class Parameter  {constructor(config?: properties);
name: string;
value: Value;
}
export class SignalInvocationHint  {constructor(config?: properties);
signal_id: number;
detail: GLib.Quark;
run_type: SignalFlags;
}
export class SignalQuery  {constructor(config?: properties);
signal_id: number;
signal_name: string;
itype: unknown;
signal_flags: SignalFlags;
return_type: unknown;
n_params: number;
param_types: unknown[];
}
export class TypeClass  {constructor(config?: properties);
readonly g_type: unknown;
add_private(private_size: number): void;
get_instance_private_offset(): number;
get_private(private_type: unknown): object | null;
peek_parent(): TypeClass;
unref(): void;
unref_uncached(): void;
static adjust_private_offset(g_class: object | null, private_size_or_offset: number): void;
static peek(type: unknown): TypeClass;
static peek_static(type: unknown): TypeClass;
static ref(type: unknown): TypeClass;
}
export class TypeFundamentalInfo  {constructor(config?: properties);
type_flags: TypeFundamentalFlags;
}
export class TypeInfo  {constructor(config?: properties);
class_size: number;
base_init: BaseInitFunc;
base_finalize: BaseFinalizeFunc;
class_init: ClassInitFunc;
class_finalize: ClassFinalizeFunc;
class_data: object;
instance_size: number;
n_preallocs: number;
instance_init: InstanceInitFunc;
value_table: TypeValueTable;
}
export class TypeInstance  {constructor(config?: properties);
readonly g_class: TypeClass;
get_private(private_type: unknown): object | null;
}
export class TypeInterface  {constructor(config?: properties);
readonly g_type: unknown;
readonly g_instance_type: unknown;
peek_parent(): TypeInterface;
static add_prerequisite(interface_type: unknown, prerequisite_type: unknown): void;
static get_plugin(instance_type: unknown, interface_type: unknown): TypePlugin;
static peek(instance_class: TypeClass, iface_type: unknown): TypeInterface;
static prerequisites(interface_type: unknown): [unknown[], number | null];
}
export class TypeModuleClass  {constructor(config?: properties);
readonly parent_class: ObjectClass;
readonly load: unknown;
readonly unload: unknown;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
}
export class TypePluginClass  {constructor(config?: properties);
readonly base_iface: TypeInterface;
use_plugin: TypePluginUse;
unuse_plugin: TypePluginUnuse;
complete_type_info: TypePluginCompleteTypeInfo;
complete_interface_info: TypePluginCompleteInterfaceInfo;
}
export class TypeQuery  {constructor(config?: properties);
type: unknown;
type_name: string;
class_size: number;
instance_size: number;
}
export class TypeValueTable  {constructor(config?: properties);
readonly value_init: unknown;
readonly value_free: unknown;
readonly value_copy: unknown;
readonly value_peek_pointer: unknown;
collect_format: string;
readonly collect_value: unknown;
lcopy_format: string;
readonly lcopy_value: unknown;
static peek(type: unknown): TypeValueTable;
}
export class Value  {constructor(config?: properties);
readonly g_type: unknown;
data: _Value__data__union[];
copy(dest_value: Value): void;
dup_boxed(): object | null;
dup_object(): Object;
dup_param(): ParamSpec;
dup_string(): string;
dup_variant(): GLib.Variant | null;
fits_pointer(): boolean;
get_boolean(): boolean;
get_boxed(): object | null;
get_char(): number;
get_double(): number;
get_enum(): number;
get_flags(): number;
get_float(): number;
get_gtype(): unknown;
get_int(): number;
get_int64(): number;
get_long(): number;
get_object(): Object;
get_param(): ParamSpec;
get_pointer(): object | null;
get_schar(): number;
get_string(): string;
get_uchar(): number;
get_uint(): number;
get_uint64(): number;
get_ulong(): number;
get_variant(): GLib.Variant | null;
init(g_type: unknown): Value;
init_from_instance(instance: TypeInstance): void;
peek_pointer(): object | null;
reset(): Value;
set_boolean(v_boolean: boolean): void;
set_boxed(v_boxed: object | null): void;
set_boxed_take_ownership(v_boxed: object | null): void;
set_char(v_char: number): void;
set_double(v_double: number): void;
set_enum(v_enum: number): void;
set_flags(v_flags: number): void;
set_float(v_float: number): void;
set_gtype(v_gtype: unknown): void;
set_instance(instance: object | null): void;
set_int(v_int: number): void;
set_int64(v_int64: number): void;
set_long(v_long: number): void;
set_object(v_object: Object | null): void;
set_object_take_ownership(v_object: object | null): void;
set_param(param: ParamSpec | null): void;
set_param_take_ownership(param: ParamSpec | null): void;
set_pointer(v_pointer: object | null): void;
set_schar(v_char: number): void;
set_static_boxed(v_boxed: object | null): void;
set_static_string(v_string: string | null): void;
set_string(v_string: string | null): void;
set_string_take_ownership(v_string: string | null): void;
set_uchar(v_uchar: number): void;
set_uint(v_uint: number): void;
set_uint64(v_uint64: number): void;
set_ulong(v_ulong: number): void;
set_variant(variant: GLib.Variant | null): void;
take_boxed(v_boxed: object | null): void;
take_object(v_object: object | null): void;
take_param(param: ParamSpec | null): void;
take_string(v_string: string | null): void;
take_variant(variant: GLib.Variant | null): void;
transform(dest_value: Value): boolean;
unset(): void;
static register_transform_func(src_type: unknown, dest_type: unknown, transform_func: ValueTransform): void;
static type_compatible(src_type: unknown, dest_type: unknown): boolean;
static type_transformable(src_type: unknown, dest_type: unknown): boolean;
}
export class ValueArray  {constructor(config?: properties);
append(value: Value | null): ValueArray;
copy(): ValueArray;
free(): void;
get_nth(index_: number): Value;
insert(index_: number, value: Value | null): ValueArray;
prepend(value: Value | null): ValueArray;
remove(index_: number): ValueArray;
sort(compare_func: GLib.CompareFunc): ValueArray;
sort_with_data(compare_func: GLib.CompareDataFunc, user_data: object | null): ValueArray;
}
export class WeakRef  {constructor(config?: properties);
clear(): void;
get(): Object;
init(object: Object | null): void;
set(object: Object | null): void;
}
export class TypeCValue  {constructor(config?: properties);
}
export class _Value__data__union  {constructor(config?: properties);
v_int: number;
v_uint: number;
v_long: number;
v_ulong: number;
v_int64: number;
v_uint64: number;
v_float: number;
v_double: number;
v_pointer: object;
}
export interface TypePlugin  {
complete_interface_info(instance_type: unknown, interface_type: unknown, info: InterfaceInfo): void;
complete_type_info(g_type: unknown, info: TypeInfo, value_table: TypeValueTable): void;
unuse(): void;
use(): void;
}