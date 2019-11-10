
/**
 * girepository
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
/**
 * 
 */
type properties = { [key: string]: any };
type GType = object;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const TYPE_TAG_N_TYPES: number;
/**
 * Obtain the index of the user data argument. This is only valid
 * for arguments which are callbacks.
 */
export function arg_info_get_closure(info: ArgInfo): number;
/**
 * Obtains the index of the #GDestroyNotify argument. This is only valid
 * for arguments which are callbacks.
 */
export function arg_info_get_destroy(info: ArgInfo): number;
/**
 * Obtain the direction of the argument. Check #GIDirection for possible
 * direction values.
 */
export function arg_info_get_direction(info: ArgInfo): Direction;
/**
 * Obtain the ownership transfer for this argument.
 * #GITransfer contains a list of possible values.
 */
export function arg_info_get_ownership_transfer(info: ArgInfo): Transfer;
/**
 * Obtain the scope type for this argument. The scope type explains
 * how a callback is going to be invoked, most importantly when
 * the resources required to invoke it can be freed.
 * #GIScopeType contains a list of possible values.
 */
export function arg_info_get_scope(info: ArgInfo): ScopeType;
/**
 * Obtain the type information for @info.
 */
export function arg_info_get_type(info: ArgInfo): TypeInfo;
/**
 * Obtain if the argument is a pointer to a struct or object that will
 * receive an output of a function.  The default assumption for
 * %GI_DIRECTION_OUT arguments which have allocation is that the
 * callee allocates; if this is %TRUE, then the caller must allocate.
 */
export function arg_info_is_caller_allocates(info: ArgInfo): boolean;
/**
 * Obtain if the argument is optional.  For 'out' arguments this means
 * that you can pass %NULL in order to ignore the result.
 */
export function arg_info_is_optional(info: ArgInfo): boolean;
/**
 * Obtain if the argument is a return value. It can either be a
 * parameter or a return value.
 */
export function arg_info_is_return_value(info: ArgInfo): boolean;
/**
 * Obtain if an argument is only useful in C.
 */
export function arg_info_is_skip(info: ArgInfo): boolean;
/**
 * Obtain information about a the type of given argument @info; this
 * function is a variant of g_arg_info_get_type() designed for stack
 * allocation.
 * The initialized @type must not be referenced after @info is deallocate
 * d.
 */
export function arg_info_load_type(info: ArgInfo): [TypeInfo];
/**
 * Obtain if the type of the argument includes the possibility of %NULL.
 * For 'in' values this means that %NULL is a valid value.  For 'out'
 * values, this means that %NULL may be returned.
 * See also g_arg_info_is_optional().
 */
export function arg_info_may_be_null(info: ArgInfo): boolean;
/**
 * TODO
 */
export function callable_info_can_throw_gerror(info: CallableInfo): boolean;
/**
 * Obtain information about a particular argument of this callable.
 */
export function callable_info_get_arg(info: CallableInfo, n: number): ArgInfo;
/**
 * See whether the caller owns the return value of this callable.
 * #GITransfer contains a list of possible transfer values.
 */
export function callable_info_get_caller_owns(info: CallableInfo): Transfer;
/**
 * Obtains the ownership transfer for the instance argument.
 * #GITransfer contains a list of possible transfer values.
 */
export function callable_info_get_instance_ownership_transfer(info: CallableInfo): Transfer;
/**
 * Obtain the number of arguments (both IN and OUT) for this callable.
 */
export function callable_info_get_n_args(info: CallableInfo): number;
/**
 * Retrieve an arbitrary attribute associated with the return value.
 */
export function callable_info_get_return_attribute(info: CallableInfo, name: string): string;
/**
 * Obtain the return type of a callable item as a #GITypeInfo.
 */
export function callable_info_get_return_type(info: CallableInfo): TypeInfo;
/**
 * TODO
 */
export function callable_info_invoke(info: CallableInfo, _function: object | null, in_args: Argument[], n_in_args: number, out_args: Argument[], n_out_args: number, return_value: Argument, is_method: boolean, _throws: boolean): boolean;
/**
 * Determines if the callable info is a method. For #GIVFuncInfo<!-- -->s
 * ,
 * #GICallbackInfo<!-- -->s, and #GISignalInfo<!-- -->s,
 * this is always true. Otherwise, this looks at the %GI_FUNCTION_IS_METH
 * OD
 * flag on the #GIFunctionInfo.
 * Concretely, this function returns whether g_callable_info_get_n_args()
 * matches the number of arguments in the raw C method. For methods, ther
 * e
 * is one more C argument than is exposed by introspection: the "self"
 * or "this" object.
 */
export function callable_info_is_method(info: CallableInfo): boolean;
/**
 * Iterate over all attributes associated with the return value.  The
 * iterator structure is typically stack allocated, and must have its
 * first member initialized to %NULL.
 * Both the @name and @value should be treated as constants
 * and must not be freed.
 * See g_base_info_iterate_attributes() for an example of how to use a
 * similar API.
 */
export function callable_info_iterate_return_attributes(info: CallableInfo, iterator: AttributeIter): [boolean, AttributeIter,string,string];
/**
 * Obtain information about a particular argument of this callable; this
 * function is a variant of g_callable_info_get_arg() designed for stack
 * allocation.
 * The initialized @arg must not be referenced after @info is deallocated
 * .
 */
export function callable_info_load_arg(info: CallableInfo, n: number): [ArgInfo];
/**
 * Obtain information about a return value of callable; this
 * function is a variant of g_callable_info_get_return_type() designed fo
 * r stack
 * allocation.
 * The initialized @type must not be referenced after @info is deallocate
 * d.
 */
export function callable_info_load_return_type(info: CallableInfo): [TypeInfo];
/**
 * See if a callable could return %NULL.
 */
export function callable_info_may_return_null(info: CallableInfo): boolean;
/**
 * See if a callable's return value is only useful in C.
 */
export function callable_info_skip_return(info: CallableInfo): boolean;
/**
 * 
 */
export function cclosure_marshal_generic(closure: GObject.Closure, return_gvalue: GObject.Value, n_param_values: number, param_values: GObject.Value, invocation_hint: object | null, marshal_data: object | null): void;
/**
 * Obtain the type of the constant as a #GITypeInfo.
 */
export function constant_info_get_type(info: ConstantInfo): TypeInfo;
/**
 * Obtain the string form of the quark for the error domain associated wi
 * th
 * this enum, if any.
 */
export function enum_info_get_error_domain(info: EnumInfo): string;
/**
 * Obtain an enum type method at index @n.
 */
export function enum_info_get_method(info: EnumInfo, n: number): FunctionInfo;
/**
 * Obtain the number of methods that this enum type has.
 */
export function enum_info_get_n_methods(info: EnumInfo): number;
/**
 * Obtain the number of values this enumeration contains.
 */
export function enum_info_get_n_values(info: EnumInfo): number;
/**
 * Obtain the tag of the type used for the enum in the C ABI. This will
 * will be a signed or unsigned integral type.
 * Note that in the current implementation the width of the type is
 * computed correctly, but the signed or unsigned nature of the type
 * may not match the sign of the type used by the C compiler.
 */
export function enum_info_get_storage_type(info: EnumInfo): TypeTag;
/**
 * Obtain a value for this enumeration.
 */
export function enum_info_get_value(info: EnumInfo, n: number): ValueInfo;
/**
 * Obtain the flags for this #GIFieldInfo. See #GIFieldInfoFlags for poss
 * ible
 * flag values.
 */
export function field_info_get_flags(info: FieldInfo): FieldInfoFlags;
/**
 * Obtain the offset in bytes of the field member, this is relative
 * to the beginning of the struct or union.
 */
export function field_info_get_offset(info: FieldInfo): number;
/**
 * Obtain the size in bits of the field member, this is how
 * much space you need to allocate to store the field.
 */
export function field_info_get_size(info: FieldInfo): number;
/**
 * Obtain the type of a field as a #GITypeInfo.
 */
export function field_info_get_type(info: FieldInfo): TypeInfo;
/**
 * Obtain the #GIFunctionInfoFlags for the @info.
 */
export function function_info_get_flags(info: FunctionInfo): FunctionInfoFlags;
/**
 * Obtain the property associated with this #GIFunctionInfo.
 * Only #GIFunctionInfo with the flag %GI_FUNCTION_IS_GETTER or
 * %GI_FUNCTION_IS_SETTER have a property set. For other cases,
 * %NULL will be returned.
 */
export function function_info_get_property(info: FunctionInfo): PropertyInfo;
/**
 * Obtain the symbol of the function. The symbol is the name of the
 * exported function, suitable to be used as an argument to
 * g_module_symbol().
 */
export function function_info_get_symbol(info: FunctionInfo): string;
/**
 * Obtain the virtual function associated with this #GIFunctionInfo.
 * Only #GIFunctionInfo with the flag %GI_FUNCTION_WRAPS_VFUNC has
 * a virtual function set. For other cases, %NULL will be returned.
 */
export function function_info_get_vfunc(info: FunctionInfo): VFuncInfo;
/**
 * Returns the major version number of the girepository library.
 * (e.g. in version 1.58.2 this is 1.)
 */
export function get_major_version(): number;
/**
 * Returns the micro version number of the girepository library.
 * (e.g. in version 1.58.2 this is 2.)
 */
export function get_micro_version(): number;
/**
 * Returns the minor version number of the girepository library.
 * (e.g. in version 1.58.2 this is 58.)
 */
export function get_minor_version(): number;
/**
 * TODO
 */
export function info_new(type: InfoType, container: BaseInfo, typelib: Typelib, offset: number): BaseInfo;
/**
 * Obtain a string representation of @type
 */
export function info_type_to_string(type: InfoType): string;
/**
 * Obtain a method of the interface type given a @name. %NULL will be
 * returned if there's no method available with that name.
 */
export function interface_info_find_method(info: InterfaceInfo, name: string): FunctionInfo;
/**
 * TODO
 */
export function interface_info_find_signal(info: InterfaceInfo, name: string): SignalInfo;
/**
 * Locate a virtual function slot with name @name. See the documentation
 * for g_object_info_find_vfunc() for more information on virtuals.
 */
export function interface_info_find_vfunc(info: InterfaceInfo, name: string): VFuncInfo;
/**
 * Obtain an interface type constant at index @n.
 */
export function interface_info_get_constant(info: InterfaceInfo, n: number): ConstantInfo;
/**
 * Returns the layout C structure associated with this #GInterface.
 */
export function interface_info_get_iface_struct(info: InterfaceInfo): StructInfo;
/**
 * Obtain an interface type method at index @n.
 */
export function interface_info_get_method(info: InterfaceInfo, n: number): FunctionInfo;
/**
 * Obtain the number of constants that this interface type has.
 */
export function interface_info_get_n_constants(info: InterfaceInfo): number;
/**
 * Obtain the number of methods that this interface type has.
 */
export function interface_info_get_n_methods(info: InterfaceInfo): number;
/**
 * Obtain the number of prerequisites for this interface type.
 * A prerequisites is another interface that needs to be implemented for
 * interface, similar to an base class for GObjects.
 */
export function interface_info_get_n_prerequisites(info: InterfaceInfo): number;
/**
 * Obtain the number of properties that this interface type has.
 */
export function interface_info_get_n_properties(info: InterfaceInfo): number;
/**
 * Obtain the number of signals that this interface type has.
 */
export function interface_info_get_n_signals(info: InterfaceInfo): number;
/**
 * Obtain the number of virtual functions that this interface type has.
 */
export function interface_info_get_n_vfuncs(info: InterfaceInfo): number;
/**
 * Obtain an interface type prerequisites index @n.
 */
export function interface_info_get_prerequisite(info: InterfaceInfo, n: number): BaseInfo;
/**
 * Obtain an interface type property at index @n.
 */
export function interface_info_get_property(info: InterfaceInfo, n: number): PropertyInfo;
/**
 * Obtain an interface type signal at index @n.
 */
export function interface_info_get_signal(info: InterfaceInfo, n: number): SignalInfo;
/**
 * Obtain an interface type virtual function at index @n.
 */
export function interface_info_get_vfunc(info: InterfaceInfo, n: number): VFuncInfo;
/**
 * TODO
 */
export function invoke_error_quark(): GLib.Quark;
/**
 * Obtain a method of the object type given a @name. %NULL will be
 * returned if there's no method available with that name.
 */
export function object_info_find_method(info: ObjectInfo, name: string): FunctionInfo;
/**
 * Obtain a method of the object given a @name, searching both the
 * object @info and any interfaces it implements.  %NULL will be
 * returned if there's no method available with that name.
 * Note that this function does *not* search parent classes; you will hav
 * e
 * to chain up if that's desired.
 */
export function object_info_find_method_using_interfaces(info: ObjectInfo, name: string): [FunctionInfo, ObjectInfo];
/**
 * TODO
 */
export function object_info_find_signal(info: ObjectInfo, name: string): SignalInfo;
/**
 * Locate a virtual function slot with name @name. Note that the namespac
 * e
 * for virtuals is distinct from that of methods; there may or may not be
 * a concrete method associated for a virtual. If there is one, it may
 * be retrieved using g_vfunc_info_get_invoker(), otherwise %NULL will be
 * returned.
 * See the documentation for g_vfunc_info_get_invoker() for more
 * information on invoking virtuals.
 */
export function object_info_find_vfunc(info: ObjectInfo, name: string): VFuncInfo;
/**
 * Locate a virtual function slot with name @name, searching both the obj
 * ect
 * @info and any interfaces it implements.  Note that the namespace for
 * virtuals is distinct from that of methods; there may or may not be a
 * concrete method associated for a virtual. If there is one, it may be
 * retrieved using g_vfunc_info_get_invoker(), otherwise %NULL will be
 * returned.
 * Note that this function does *not* search parent classes; you will hav
 * e
 * to chain up if that's desired.
 */
export function object_info_find_vfunc_using_interfaces(info: ObjectInfo, name: string): [VFuncInfo, ObjectInfo];
/**
 * Obtain if the object type is an abstract type, eg if it cannot be
 * instantiated
 */
export function object_info_get_abstract(info: ObjectInfo): boolean;
/**
 * Every #GObject has two structures; an instance structure and a class
 * structure.  This function returns the metadata for the class structure
 * .
 */
export function object_info_get_class_struct(info: ObjectInfo): StructInfo;
/**
 * Obtain an object type constant at index @n.
 */
export function object_info_get_constant(info: ObjectInfo, n: number): ConstantInfo;
/**
 * Obtain an object type field at index @n.
 */
export function object_info_get_field(info: ObjectInfo, n: number): FieldInfo;
/**
 * Obtain if the object type is of a fundamental type which is not
 * G_TYPE_OBJECT. This is mostly for supporting GstMiniObject.
 */
export function object_info_get_fundamental(info: ObjectInfo): boolean;
/**
 * Obtain the symbol name of the function that should be called to conver
 * t
 * an object instance pointer of this object type to a GValue.
 * I's mainly used fundamental types. The type signature for the symbol
 * is %GIObjectInfoGetValueFunction, to fetch the function pointer
 * see g_object_info_get_get_value_function().
 */
export function object_info_get_get_value_function(info: ObjectInfo): string;
/**
 * Obtain an object type interface at index @n.
 */
export function object_info_get_interface(info: ObjectInfo, n: number): InterfaceInfo;
/**
 * Obtain an object type method at index @n.
 */
export function object_info_get_method(info: ObjectInfo, n: number): FunctionInfo;
/**
 * Obtain the number of constants that this object type has.
 */
export function object_info_get_n_constants(info: ObjectInfo): number;
/**
 * Obtain the number of fields that this object type has.
 */
export function object_info_get_n_fields(info: ObjectInfo): number;
/**
 * Obtain the number of interfaces that this object type has.
 */
export function object_info_get_n_interfaces(info: ObjectInfo): number;
/**
 * Obtain the number of methods that this object type has.
 */
export function object_info_get_n_methods(info: ObjectInfo): number;
/**
 * Obtain the number of properties that this object type has.
 */
export function object_info_get_n_properties(info: ObjectInfo): number;
/**
 * Obtain the number of signals that this object type has.
 */
export function object_info_get_n_signals(info: ObjectInfo): number;
/**
 * Obtain the number of virtual functions that this object type has.
 */
export function object_info_get_n_vfuncs(info: ObjectInfo): number;
/**
 * Obtain the parent of the object type.
 */
export function object_info_get_parent(info: ObjectInfo): ObjectInfo;
/**
 * Obtain an object type property at index @n.
 */
export function object_info_get_property(info: ObjectInfo, n: number): PropertyInfo;
/**
 * Obtain the symbol name of the function that should be called to ref th
 * is
 * object type. It's mainly used fundamental types. The type signature fo
 * r
 * the symbol is %GIObjectInfoRefFunction, to fetch the function pointer
 * see g_object_info_get_ref_function().
 */
export function object_info_get_ref_function(info: ObjectInfo): string;
/**
 * Obtain the symbol name of the function that should be called to conver
 * t
 * set a GValue giving an object instance pointer of this object type.
 * I's mainly used fundamental types. The type signature for the symbol
 * is %GIObjectInfoSetValueFunction, to fetch the function pointer
 * see g_object_info_get_set_value_function().
 */
export function object_info_get_set_value_function(info: ObjectInfo): string;
/**
 * Obtain an object type signal at index @n.
 */
export function object_info_get_signal(info: ObjectInfo, n: number): SignalInfo;
/**
 * Obtain the function which when called will return the GType
 * function for which this object type is registered.
 */
export function object_info_get_type_init(info: ObjectInfo): string;
/**
 * Obtain the name of the objects class/type.
 */
export function object_info_get_type_name(info: ObjectInfo): string;
/**
 * Obtain the symbol name of the function that should be called to unref 
 * this
 * object type. It's mainly used fundamental types. The type signature fo
 * r
 * the symbol is %GIObjectInfoUnrefFunction, to fetch the function pointe
 * r
 * see g_object_info_get_unref_function().
 */
export function object_info_get_unref_function(info: ObjectInfo): string;
/**
 * Obtain an object type virtual function at index @n.
 */
export function object_info_get_vfunc(info: ObjectInfo, n: number): VFuncInfo;
/**
 * Obtain the flags for this property info. See #GParamFlags for
 * more information about possible flag values.
 */
export function property_info_get_flags(info: PropertyInfo): GObject.ParamFlags;
/**
 * Obtain the ownership transfer for this property. See #GITransfer for m
 * ore
 * information about transfer values.
 */
export function property_info_get_ownership_transfer(info: PropertyInfo): Transfer;
/**
 * Obtain the type information for the property @info.
 */
export function property_info_get_type(info: PropertyInfo): TypeInfo;
/**
 * Obtain the #GType for this registered type or G_TYPE_NONE which a spec
 * ial meaning.
 * It means that either there is no type information associated with this
 *  @info or
 * that the shared library which provides the type_init function for this
 * @info cannot be called.
 */
export function registered_type_info_get_g_type(info: RegisteredTypeInfo): GType;
/**
 * Obtain the type init function for @info. The type init function is the
 * function which will register the GType within the GObject type system.
 * Usually this is not called by langauge bindings or applications, use
 * g_registered_type_info_get_g_type() directly instead.
 */
export function registered_type_info_get_type_init(info: RegisteredTypeInfo): string;
/**
 * Obtain the type name of the struct within the GObject type system.
 * This type can be passed to g_type_name() to get a #GType.
 */
export function registered_type_info_get_type_name(info: RegisteredTypeInfo): string;
/**
 * Obtain the class closure for this signal if one is set. The class
 * closure is a virtual function on the type that the signal belongs to.
 * If the signal lacks a closure %NULL will be returned.
 */
export function signal_info_get_class_closure(info: SignalInfo): VFuncInfo;
/**
 * Obtain the flags for this signal info. See #GSignalFlags for
 * more information about possible flag values.
 */
export function signal_info_get_flags(info: SignalInfo): GObject.SignalFlags;
/**
 * Obtain if the returning true in the signal handler will
 * stop the emission of the signal.
 */
export function signal_info_true_stops_emit(info: SignalInfo): boolean;
/**
 * Obtain the type information for field named @name.
 */
export function struct_info_find_field(info: StructInfo, name: string): FieldInfo;
/**
 * Obtain the type information for method named @name.
 */
export function struct_info_find_method(info: StructInfo, name: string): FunctionInfo;
/**
 * Obtain the required alignment of the structure.
 */
export function struct_info_get_alignment(info: StructInfo): number;
/**
 * Obtain the type information for field with specified index.
 */
export function struct_info_get_field(info: StructInfo, n: number): FieldInfo;
/**
 * Obtain the type information for method with specified index.
 */
export function struct_info_get_method(info: StructInfo, n: number): FunctionInfo;
/**
 * Obtain the number of fields this structure has.
 */
export function struct_info_get_n_fields(info: StructInfo): number;
/**
 * Obtain the number of methods this structure has.
 */
export function struct_info_get_n_methods(info: StructInfo): number;
/**
 * Obtain the total size of the structure.
 */
export function struct_info_get_size(info: StructInfo): number;
/**
 * TODO
 */
export function struct_info_is_foreign(info: StructInfo): boolean;
/**
 * Return true if this structure represents the "class structure" for som
 * e
 * #GObject or #GInterface.  This function is mainly useful to hide this 
 * kind of structure
 * from generated public APIs.
 */
export function struct_info_is_gtype_struct(info: StructInfo): boolean;
/**
 * Obtain the fixed array size of the type. The type tag must be a
 * #GI_TYPE_TAG_ARRAY or -1 will returned.
 */
export function type_info_get_array_fixed_size(info: TypeInfo): number;
/**
 * Obtain the array length of the type. The type tag must be a
 * #GI_TYPE_TAG_ARRAY or -1 will returned.
 */
export function type_info_get_array_length(info: TypeInfo): number;
/**
 * Obtain the array type for this type. See #GIArrayType for a list of
 * possible values. If the type tag of this type is not array, -1 will be
 * returned.
 */
export function type_info_get_array_type(info: TypeInfo): ArrayType;
/**
 * For types which have #GI_TYPE_TAG_INTERFACE such as GObjects and boxed
 *  values,
 * this function returns full information about the referenced type.  You
 *  can then
 * inspect the type of the returned #GIBaseInfo to further query whether 
 * it is
 * a concrete GObject, a GInterface, a structure, etc. using g_base_info_
 * get_type().
 */
export function type_info_get_interface(info: TypeInfo): BaseInfo;
/**
 * Obtain the parameter type @n.
 */
export function type_info_get_param_type(info: TypeInfo, n: number): TypeInfo;
/**
 * Obtain the type tag for the type. See #GITypeTag for a list
 * of type tags.
 */
export function type_info_get_tag(info: TypeInfo): TypeTag;
/**
 * Obtain if the type is passed as a reference.
 * Note that the types of %GI_DIRECTION_OUT and %GI_DIRECTION_INOUT param
 * eters
 * will only be pointers if the underlying type being transferred is a po
 * inter
 * (i.e. only if the type of the C function’s formal parameter is a point
 * er to a
 * pointer).
 */
export function type_info_is_pointer(info: TypeInfo): boolean;
/**
 * Obtain if the last element of the array is %NULL. The type tag must be
 *  a
 * #GI_TYPE_TAG_ARRAY or %FALSE will returned.
 */
export function type_info_is_zero_terminated(info: TypeInfo): boolean;
/**
 * Obtain a string representation of @type
 */
export function type_tag_to_string(type: TypeTag): string;
/**
 * Obtain the type information for method named @name.
 */
export function union_info_find_method(info: UnionInfo, name: string): FunctionInfo;
/**
 * Obtain the required alignment of the union.
 */
export function union_info_get_alignment(info: UnionInfo): number;
/**
 * Obtain discriminator value assigned for n-th union field, i.e. n-th
 * union field is the active one if discriminator contains this
 * constant.
 */
export function union_info_get_discriminator(info: UnionInfo, n: number): ConstantInfo;
/**
 * Returns offset of the discriminator field in the structure.
 */
export function union_info_get_discriminator_offset(info: UnionInfo): number;
/**
 * Obtain the type information of the union discriminator.
 */
export function union_info_get_discriminator_type(info: UnionInfo): TypeInfo;
/**
 * Obtain the type information for field with specified index.
 */
export function union_info_get_field(info: UnionInfo, n: number): FieldInfo;
/**
 * Obtain the type information for method with specified index.
 */
export function union_info_get_method(info: UnionInfo, n: number): FunctionInfo;
/**
 * Obtain the number of fields this union has.
 */
export function union_info_get_n_fields(info: UnionInfo): number;
/**
 * Obtain the number of methods this union has.
 */
export function union_info_get_n_methods(info: UnionInfo): number;
/**
 * Obtain the total size of the union.
 */
export function union_info_get_size(info: UnionInfo): number;
/**
 * Return true if this union contains discriminator field.
 */
export function union_info_is_discriminated(info: UnionInfo): boolean;
/**
 * Obtain the enumeration value of the #GIValueInfo.
 */
export function value_info_get_value(info: ValueInfo): number;
/**
 * This method will look up where inside the type struct of @implementor_
 * gtype
 * is the implementation for @info.
 */
export function vfunc_info_get_address(info: VFuncInfo, implementor_gtype: GType): object | null;
/**
 * Obtain the flags for this virtual function info. See #GIVFuncInfoFlags
 *  for
 * more information about possible flag values.
 */
export function vfunc_info_get_flags(info: VFuncInfo): VFuncInfoFlags;
/**
 * If this virtual function has an associated invoker method, this
 * method will return it.  An invoker method is a C entry point.
 * Not all virtuals will have invokers.
 */
export function vfunc_info_get_invoker(info: VFuncInfo): FunctionInfo;
/**
 * Obtain the offset of the function pointer in the class struct. The val
 * ue
 * 0xFFFF indicates that the struct offset is unknown.
 */
export function vfunc_info_get_offset(info: VFuncInfo): number;
/**
 * Obtain the signal for the virtual function if one is set.
 * The signal comes from the object or interface to which
 * this virtual function belongs.
 */
export function vfunc_info_get_signal(info: VFuncInfo): SignalInfo;
export type ArgInfo = BaseInfo;
export type CallableInfo = BaseInfo;
export type CallbackInfo = BaseInfo;
export type ConstantInfo = BaseInfo;
export type EnumInfo = BaseInfo;
export type FieldInfo = BaseInfo;
export type FunctionInfo = BaseInfo;
export type InterfaceInfo = BaseInfo;
export type ObjectInfo = BaseInfo;
export type PropertyInfo = BaseInfo;
export type RegisteredTypeInfo = BaseInfo;
export type SignalInfo = BaseInfo;
export type StructInfo = BaseInfo;
export type TypeInfo = BaseInfo;
export type UnionInfo = BaseInfo;
export type VFuncInfo = BaseInfo;
export type ValueInfo = BaseInfo;
export enum ArrayType {
    C = 0,
    ARRAY = 1,
    PTR_ARRAY = 2,
    BYTE_ARRAY = 3,
}
export enum Direction {
    IN = 0,
    OUT = 1,
    INOUT = 2,
}
export enum InfoType {
    INVALID = 0,
    FUNCTION = 1,
    CALLBACK = 2,
    STRUCT = 3,
    BOXED = 4,
    ENUM = 5,
    FLAGS = 6,
    OBJECT = 7,
    INTERFACE = 8,
    CONSTANT = 9,
    INVALID_0 = 10,
    UNION = 11,
    VALUE = 12,
    SIGNAL = 13,
    VFUNC = 14,
    PROPERTY = 15,
    FIELD = 16,
    ARG = 17,
    TYPE = 18,
    UNRESOLVED = 19,
}
export enum RepositoryError {
    TYPELIB_NOT_FOUND = 0,
    NAMESPACE_MISMATCH = 1,
    NAMESPACE_VERSION_CONFLICT = 2,
    LIBRARY_NOT_FOUND = 3,
}
export enum ScopeType {
    INVALID = 0,
    CALL = 1,
    ASYNC = 2,
    NOTIFIED = 3,
}
export enum Transfer {
    NOTHING = 0,
    CONTAINER = 1,
    EVERYTHING = 2,
}
export enum TypeTag {
    VOID = 0,
    BOOLEAN = 1,
    INT8 = 2,
    UINT8 = 3,
    INT16 = 4,
    UINT16 = 5,
    INT32 = 6,
    UINT32 = 7,
    INT64 = 8,
    UINT64 = 9,
    FLOAT = 10,
    DOUBLE = 11,
    GTYPE = 12,
    UTF8 = 13,
    FILENAME = 14,
    ARRAY = 15,
    INTERFACE = 16,
    GLIST = 17,
    GSLIST = 18,
    GHASH = 19,
    ERROR = 20,
    UNICHAR = 21,
}
export enum nvokeError {
    FAILED = 0,
    SYMBOL_NOT_FOUND = 1,
    ARGUMENT_MISMATCH = 2,
}
export enum FieldInfoFlags {
    READABLE = 1,
    WRITABLE = 2,
}
export enum FunctionInfoFlags {
    IS_METHOD = 1,
    IS_CONSTRUCTOR = 2,
    IS_GETTER = 4,
    IS_SETTER = 8,
    WRAPS_VFUNC = 16,
    THROWS = 32,
}
export enum RepositoryLoadFlags {
    IREPOSITORY_LOAD_FLAG_LAZY = 1,
}
export enum VFuncInfoFlags {
    MUST_CHAIN_UP = 1,
    MUST_OVERRIDE = 2,
    MUST_NOT_OVERRIDE = 4,
    THROWS = 8,
}
export class Repository  {
    constructor(config?: properties);
    readonly priv: RepositoryPrivate;
    enumerate_versions(namespace_: string): GLib.List;
    find_by_error_domain(domain: GLib.Quark): EnumInfo;
    find_by_gtype(gtype: GType): BaseInfo;
    find_by_name(namespace_: string, name: string): BaseInfo;
    get_c_prefix(namespace_: string): string;
    get_dependencies(namespace_: string): string[];
    get_immediate_dependencies(namespace_: string): string[];
    get_info(namespace_: string, index: number): BaseInfo;
    get_loaded_namespaces(): string[];
    get_n_infos(namespace_: string): number;
    get_object_gtype_interfaces(gtype: GType): [number,InterfaceInfo[]];
    get_shared_library(namespace_: string): string;
    get_typelib_path(namespace_: string): string;
    get_version(namespace_: string): string;
    is_registered(namespace_: string, version: string | null): boolean;
    load_typelib(typelib: Typelib, flags: RepositoryLoadFlags): string;
    require(namespace_: string, version: string | null, flags: RepositoryLoadFlags): Typelib;
    require_private(typelib_dir: string, namespace_: string, version: string | null, flags: RepositoryLoadFlags): Typelib;
    static dump(arg: string): boolean;
    static error_quark(): GLib.Quark;
    static get_default(): Repository;
    static get_option_group(): GLib.OptionGroup;
    static get_search_path(): string[];
    static prepend_library_path(directory: string): void;
    static prepend_search_path(directory: string): void;
}
export class AttributeIter  {
    constructor(config?: properties);
    readonly data: object;
    readonly data2: object;
    readonly data3: object;
    readonly data4: object;
}
export class BaseInfo  {
    constructor(config?: properties);
    readonly dummy1: number;
    readonly dummy2: number;
    readonly dummy3: object;
    readonly dummy4: object;
    readonly dummy5: object;
    readonly dummy6: number;
    readonly dummy7: number;
    readonly padding: object[];
    equal(info2: BaseInfo): boolean;
    get_attribute(name: string): string;
    get_container(): BaseInfo;
    get_name(): string;
    get_namespace(): string;
    get_type(): InfoType;
    get_typelib(): Typelib;
    is_deprecated(): boolean;
    iterate_attributes(iterator: AttributeIter): [boolean, AttributeIter,string,string];
}
export class RepositoryPrivate  {
    constructor(config?: properties);
}
export class Typelib  {
    constructor(config?: properties);
    free(): void;
    get_namespace(): string;
    symbol(symbol_name: string, symbol: object | null): boolean;
}
export class UnresolvedInfo  {
    constructor(config?: properties);
}
export class Argument  {
    constructor(config?: properties);
    v_boolean: boolean;
    v_int8: number;
    v_uint8: number;
    v_int16: number;
    v_uint16: number;
    v_int32: number;
    v_uint32: number;
    v_int64: number;
    v_uint64: number;
    v_float: number;
    v_double: number;
    v_short: number;
    v_ushort: number;
    v_int: number;
    v_uint: number;
    v_long: number;
    v_ulong: number;
    v_ssize: number;
    v_size: number;
    v_string: string;
    v_pointer: object;
}