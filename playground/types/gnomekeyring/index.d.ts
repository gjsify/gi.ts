
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GnomeKeyring from "gnomekeyring";
/**
 * gnomekeyring.d.ts
 */
type properties = { [key: string]: any };
export type OperationDoneCallback = (result: Result, user_data: object | null) => void;
export type OperationGetAttributesCallback = (result: Result, attributes: AttributeList, user_data: object | null) => void;
export type OperationGetIntCallback = (result: Result, val: number, user_data: object | null) => void;
export type OperationGetItemInfoCallback = (result: Result, info: ItemInfo, user_data: object | null) => void;
export type OperationGetKeyringInfoCallback = (result: Result, info: Info, user_data: object | null) => void;
export type OperationGetListCallback = (result: Result, list: GLib.List, user_data: object | null) => void;
export type OperationGetStringCallback = (result: Result, string: string | null, user_data: object | null) => void;
export const ITEM_APPLICATION_SECRET: number;
export const ITEM_INFO_ALL: number;
export const ITEM_TYPE_MASK: number;
export const SESSION: string;
/**
 * Copy an access control list.
 */
export function acl_copy(list: GLib.List): GLib.List;
/**
 * Free an access control list.
 */
export function acl_free(acl: GLib.List): void;
/**
 * Store a key-value-pair with a string value in @attributes.
 */
export function attribute_list_append_string(attributes: AttributeList, name: string, value: string): void;
/**
 * Store a key-value-pair with an unsigned 32bit number value in @attribu
 * tes.
 */
export function attribute_list_append_uint32(attributes: AttributeList, name: string, value: number): void;
/**
 * Copy a list of item attributes.
 */
export function attribute_list_copy(attributes: AttributeList): AttributeList;
/**
 * Free the memory used by @attributes.
 * If a %NULL pointer is passed, it is ignored.
 */
export function attribute_list_free(attributes: AttributeList): void;
/**
 * 
 */
export function attribute_list_get_type(): unknown;
/**
 * Create a new #GnomeKeyringAttributeList.
 */
export function attribute_list_new(): AttributeList;
/**
 * Create #GList of #GnomeKeyringAttribute pointers from @attributes. Thi
 * s is
 * mostly useful in language bindings which cannot directly use a #GArray
 * .
 */
export function attribute_list_to_glist(attributes: AttributeList): GLib.List;
/**
 * Cancel an asynchronous request.
 * If a callback was registered when making the asynchronous request, tha
 * t callback
 * function will be called with a result of %GNOME_KEYRING_RESULT_CANCELL
 * ED
 */
export function cancel_request(request: object | null): void;
/**
 * Change the password for a @keyring. In most cases you would specify %N
 * ULL for
 * both the @original and @password arguments and allow the user to type 
 * the
 * correct passwords.
 * For a synchronous version of this function see gnome_keyring_change_pa
 * ssword_sync().
 */
export function change_password(keyring: string, original: string | null, password: string | null, callback: OperationDoneCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Change the password for @keyring. In most cases you would specify %NUL
 * L for
 * both the @original and @password arguments and allow the user to type 
 * the
 * correct passwords.
 * For an asynchronous version of this function see gnome_keyring_change_
 * password().
 */
export function change_password_sync(keyring: string, original: string | null, password: string | null): Result;
/**
 * Create a new keyring with the specified name. In most cases %NULL will
 *  be
 * passed as the @password, which will prompt the user to enter a passwor
 * d
 * of their choice.
 * For a synchronous version of this function see gnome_keyring_create_sy
 * nc().
 */
export function create(keyring_name: string, password: string | null, callback: OperationDoneCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Create a new keyring with the specified name. In most cases %NULL will
 *  be
 * passed in as the @password, which will prompt the user to enter a pass
 * word
 * of their choice.
 * For an asynchronous version of this function see gnome_keyring_create(
 * ).
 */
export function create_sync(keyring_name: string, password: string | null): Result;
/**
 * 
 */
export function daemon_prepare_environment_sync(): Result;
/**
 * 
 */
export function daemon_set_display_sync(display: string): Result;
/**
 * Delete @keyring. Once a keyring is deleted there is no mechanism for
 * recovery of its contents.
 * For a synchronous version of this function see gnome_keyring_delete_sy
 * nc().
 */
export function _delete(keyring: string, callback: OperationDoneCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Delete a password that matches a given set of attributes.
 * Attributes which identify this password must be passed as additional
 * arguments. Attributes passed must be defined in the schema.
 * Another more complex way to find items in the keyrings is using
 * gnome_keyring_item_delete().
 */
export function delete_password(schema: PasswordSchema, callback: OperationDoneCallback, data: object | null, destroy_data: GLib.DestroyNotify, ___: unknown[]): object | null;
/**
 * Delete a password that matches a given set of attributes.
 * Attributes which identify this password must be passed as additional
 * arguments. Attributes passed must be defined in the schema.
 * This function may block for an unspecified period. If your application
 *  must
 * remain responsive to the user, then use gnome_keyring_delete_password(
 * ).
 * Another more complex way to find items in the keyrings is using
 * gnome_keyring_item_delete_sync().
 */
export function delete_password_sync(schema: PasswordSchema, ___: unknown[]): Result;
/**
 * Delete @keyring. Once a keyring is deleted there is no mechanism for
 * recovery of its contents.
 * For an asynchronous version of this function see gnome_keyring_delete(
 * ).
 */
export function delete_sync(keyring: string): Result;
/**
 * Searches through all keyrings for items that match the @attributes. Th
 * e matches
 * are for exact equality.
 * A %GList of GnomeKeyringFound structures are passed to the @callback. 
 * The
 * list and structures are freed after the callback returns.
 * The user may have been prompted to unlock necessary keyrings, and user
 *  will
 * have been prompted for access to the items if needed.
 * For a synchronous version of this function see gnome_keyring_find_item
 * s_sync().
 */
export function find_items(type: ItemType, attributes: AttributeList, callback: OperationGetListCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Searches through all keyrings for items that match the @attributes and
 *  @type.
 * The matches are for exact equality.
 * A %GList of GnomeKeyringFound structures is returned in @found. The li
 * st may
 * have zero items if nothing matched the criteria. The list should be fr
 * eed
 * using gnome_keyring_found_list_free().
 * The user may have been prompted to unlock necessary keyrings, and user
 *  will
 * have been prompted for access to the items if needed.
 * For an asynchronous version of this function see gnome_keyring_find_it
 * ems().
 */
export function find_items_sync(type: ItemType, attributes: AttributeList): [Result, GLib.List];
/**
 * Searches through all keyrings for items that match the specified attri
 * butes.
 * The matches are for exact equality.
 * The variable argument list should contain a) The attribute name as a n
 * ull
 * terminated string, followed by b) The attribute type, either
 * %GNOME_KEYRING_ATTRIBUTE_TYPE_STRING or %GNOME_KEYRING_ATTRIBUTE_TYPE_
 * UINT32
 * and then the c) attribute value, either a character string, or 32-bit
 * unsigned int. The list should be terminated with a NULL.
 * A %GList of GnomeKeyringFound structures are passed to the @callback. 
 * The
 * list and structures are freed after the callback returns.
 * The user may have been prompted to unlock necessary keyrings, and user
 *  will
 * have been prompted for access to the items if needed.
 * For a synchronous version of this function see gnome_keyring_find_item
 * sv_sync().
 */
export function find_itemsv(type: ItemType, callback: OperationGetListCallback, data: object | null, destroy_data: GLib.DestroyNotify, ___: unknown[]): object | null;
/**
 * Searches through all keyrings for items that match the @attributes and
 *  @type.
 * The matches are for exact equality.
 * The variable argument list should contain a) The attribute name as a n
 * ull
 * terminated string, followed by b) The attribute type, either
 * %GNOME_KEYRING_ATTRIBUTE_TYPE_STRING or %GNOME_KEYRING_ATTRIBUTE_TYPE_
 * UINT32
 * and then the c) attribute value, either a character string, or 32-bit
 * unsigned int. The list should be terminated with a %NULL.
 * A %GList of GnomeKeyringFound structures is returned in @found. The li
 * st may
 * have zero items if nothing matched the criteria. The list should be fr
 * eed
 * using gnome_keyring_found_list_free().
 * The user may have been prompted to unlock necessary keyrings, and user
 *  will
 * have been prompted for access to the items if needed.
 * For an asynchronous version of this function see gnome_keyring_find_it
 * ems().
 */
export function find_itemsv_sync(type: ItemType, ___: unknown[]): [Result, GLib.List];
/**
 * Find a previously stored network password. Searches all keyrings.
 * A %GList of #GnomeKeyringNetworkPasswordData structures are passed to 
 * the
 * @callback. The list and structures are freed after the callback return
 * s.
 * The user may have been prompted to unlock necessary keyrings, and user
 *  will
 * have been prompted for access to the items if needed.
 * Network passwords are items with the item type %GNOME_KEYRING_ITEM_NET
 * WORK_PASSWORD
 */
export function find_network_password(user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number, callback: OperationGetListCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Find a previously stored network password. Searches all keyrings.
 * A %GList of #GnomeKeyringNetworkPasswordData structures are returned i
 * n the
 * @out_list argument. The list should be freed with gnome_keyring_networ
 * k_password_list_free()
 * The user may have been prompted to unlock necessary keyrings, and user
 *  will
 * have been prompted for access to the items if needed.
 * Network passwords are items with the item type %GNOME_KEYRING_ITEM_NET
 * WORK_PASSWORD
 */
export function find_network_password_sync(user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number): [Result, GLib.List];
/**
 * Find a password that matches a given set of attributes.
 * Attributes which identify this password must be passed as additional
 * arguments. Attributes passed must be defined in the schema.
 * The string that is passed to @callback is automatically freed when the
 * function returns.
 * Another more complex way to find items in the keyrings is using
 * gnome_keyring_find_items().
 */
export function find_password(schema: PasswordSchema, callback: OperationGetStringCallback, data: object | null, destroy_data: GLib.DestroyNotify, ___: unknown[]): object | null;
/**
 * Find a password that matches a given set of attributes.
 * Attributes which identify this password must be passed as additional
 * arguments. Attributes passed must be defined in the schema.
 * This function may block for an unspecified period. If your application
 *  must
 * remain responsive to the user, then use gnome_keyring_find_password().
 * Another more complex way to find items in the keyrings is using
 * gnome_keyring_find_items_sync().
 */
export function find_password_sync(schema: PasswordSchema, ___: unknown[]): [Result, string];
/**
 * Free the memory used by the #GnomeKeyringFound items in @found_list.
 */
export function found_list_free(found_list: GLib.List): void;
/**
 * Clears the memory used by password by filling with '\0' and frees the 
 * memory
 * after doing this. You should use this function instead of g_free() for
 * secret information.
 */
export function free_password(password: string): void;
/**
 * Get the default keyring name, which will be passed to the @callback. I
 * f no
 * default keyring exists, then %NULL will be passed to the @callback. Th
 * e
 * string will be freed after @callback returns.
 * For a synchronous version of this function see gnome_keyring_get_defau
 * lt_keyring_sync().
 */
export function get_default_keyring(callback: OperationGetStringCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Get the default keyring name.
 * The string returned in @keyring must be freed with g_free().
 * For an asynchronous version of this function see gnome_keyring_get_def
 * ault_keyring().
 */
export function get_default_keyring_sync(): [Result, string];
/**
 * Get information about the @keyring. The resulting #GnomeKeyringInfo st
 * ructure
 * will be passed to @callback. The structure is freed after @callback re
 * turns.
 * For a synchronous version of this function see gnome_keyring_get_info_
 * sync().
 */
export function get_info(keyring: string | null, callback: OperationGetKeyringInfoCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Get information about @keyring.
 * The #GnomeKeyringInfo structure returned in @info must be freed with
 * gnome_keyring_info_free().
 * For an asynchronous version of this function see gnome_keyring_get_inf
 * o().
 */
export function get_info_sync(keyring: string | null): [Result, Info];
/**
 * Check whether you can communicate with a gnome-keyring-daemon.
 */
export function is_available(): boolean;
/**
 * Get the application access rights for the access control.
 */
export function item_ac_get_access_type(ac: AccessControl): AccessType;
/**
 * Get the access control application's display name.
 */
export function item_ac_get_display_name(ac: AccessControl): string;
/**
 * Get the access control application's full path name.
 */
export function item_ac_get_path_name(ac: AccessControl): string;
/**
 * Set the application access rights for the access control.
 */
export function item_ac_set_access_type(ac: AccessControl, value: AccessType): void;
/**
 * Set the access control application's display name.
 */
export function item_ac_set_display_name(ac: AccessControl, value: string): void;
/**
 * Set the access control application's full path name.
 */
export function item_ac_set_path_name(ac: AccessControl, value: string): void;
/**
 * Create a new item in a keyring.
 * The @secret must be a null terminated string. It should be allocated u
 * sing secure
 * memory whenever possible. See gnome_keyring_memory_strdup()
 * The user may have been prompted to unlock necessary keyrings. If %NULL
 *  is
 * specified as the @keyring and no default keyring exists, the user will
 *  be
 * prompted to create a new keyring.
 * When @update_if_exists is set to %TRUE, the user may be prompted for a
 * ccess
 * to the previously existing item.
 * Whether a new item is created or not, id of the item will be passed to
 * the @callback.
 * For a synchronous version of this function see gnome_keyring_item_crea
 * te_sync().
 */
export function item_create(keyring: string | null, type: ItemType, display_name: string, attributes: AttributeList, secret: string, update_if_exists: boolean, callback: OperationGetIntCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Create a new item in a keyring.
 * The @secret must be a null terminated string. It should be allocated u
 * sing secure
 * memory whenever possible. See gnome_keyring_memory_strdup()
 * The user may have been prompted to unlock necessary keyrings. If %NULL
 *  is
 * specified as the @keyring and no default keyring exists, the user will
 *  be
 * prompted to create a new keyring.
 * When @update_if_exists is set to %TRUE, the user may be prompted for a
 * ccess
 * to the previously existing item.
 * For an asynchronous version of this function see gnome_keyring_item_cr
 * eate().
 */
export function item_create_sync(keyring: string | null, type: ItemType, display_name: string, attributes: AttributeList, secret: string, update_if_exists: boolean): [Result, number];
/**
 * Delete an item in a keyring.
 * The user may be prompted if the calling application doesn't have neces
 * sary
 * access to delete the item.
 * For an asynchronous version of this function see gnome_keyring_delete(
 * ).
 */
export function item_delete(keyring: string | null, id: number, callback: OperationDoneCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Delete an item in a keyring.
 * The user may be prompted if the calling application doesn't have neces
 * sary
 * access to delete the item.
 * For an asynchronous version of this function see gnome_keyring_item_de
 * lete().
 */
export function item_delete_sync(keyring: string | null, id: number): Result;
/**
 * 
 */
export function item_get_acl(keyring: string | null, id: number, callback: OperationGetListCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * 
 */
export function item_get_acl_sync(keyring: string | null, id: number): [Result, GLib.List];
/**
 * Get all the attributes for an item.
 * A #GnomeKeyringAttributeList will be passed to the @callback. This lis
 * t will
 * be freed after @callback returns.
 * For a synchronous version of this function see gnome_keyring_item_get_
 * attributes_sync().
 */
export function item_get_attributes(keyring: string | null, id: number, callback: OperationGetAttributesCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Get all attributes for an item.
 * A #GnomeKeyringAttributeList will be returned in @attributes. This sho
 * uld be
 * freed using gnome_keyring_attribute_list_free().
 * For an asynchronous version of this function see gnome_keyring_item_ge
 * t_attributes().
 */
export function item_get_attributes_sync(keyring: string | null, id: number, attributes: AttributeList): Result;
/**
 * Get information about an item and its secret.
 * The user may be prompted if the calling application doesn't have neces
 * sary
 * access to read the item with its secret.
 * A #GnomeKeyringItemInfo structure will be passed to the @callback. Thi
 * s structure
 * will be freed after @callback returns.
 * For a synchronous version of this function see gnome_keyring_item_get_
 * info_sync().
 */
export function item_get_info(keyring: string | null, id: number, callback: OperationGetItemInfoCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Get information about an item, optionally retrieving its secret.
 * If @flags includes %GNOME_KEYRING_ITEM_INFO_SECRET then the user may b
 * e
 * prompted if the calling application doesn't have necessary access to r
 * ead
 * the item with its secret.
 * A #GnomeKeyringItemInfo pointer will be passed to the @callback. Certa
 * in fields
 * of this structure may be %NULL or zero if they were not specified in @
 * flags. This
 * structure will be freed after @callback returns.
 * For a synchronous version of this function see gnome_keyring_item_get_
 * info_full_sync().
 */
export function item_get_info_full(keyring: string | null, id: number, flags: number, callback: OperationGetItemInfoCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Get information about an item, optionally retrieving its secret.
 * If @flags includes %GNOME_KEYRING_ITEM_INFO_SECRET then the user may b
 * e
 * prompted if the calling application doesn't have necessary access to r
 * ead
 * the item with its secret.
 * A #GnomeKeyringItemInfo structure will be returned in @info. Certain f
 * ields
 * of this structure may be %NULL or zero if they were not specified in @
 * flags.
 * This must be freed using gnome_keyring_item_info_free().
 * For an asynchronous version of this function see gnome_keyring_item_ge
 * t_info_full().
 */
export function item_get_info_full_sync(keyring: string | null, id: number, flags: number): [Result, ItemInfo];
/**
 * Get information about an item and its secret.
 * The user may be prompted if the calling application doesn't have neces
 * sary
 * access to read the item with its secret.
 * A #GnomeKeyringItemInfo structure will be returned in @info. This must
 *  be
 * freed using gnome_keyring_item_info_free().
 * For an asynchronous version of this function see gnome_keyring_item_ge
 * t_info().
 */
export function item_get_info_sync(keyring: string | null, id: number): [Result, ItemInfo];
/**
 * 
 */
export function item_grant_access_rights(keyring: string | null, display_name: string, full_path: string, id: number, rights: AccessType, callback: OperationDoneCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Will grant the application access rights to the item, provided
 * callee has write access to said item.
 */
export function item_grant_access_rights_sync(keyring: string | null, display_name: string, full_path: string, id: number, rights: AccessType): Result;
/**
 * 
 */
export function item_set_acl(keyring: string | null, id: number, acl: GLib.List, callback: OperationDoneCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * 
 */
export function item_set_acl_sync(keyring: string | null, id: number, acl: GLib.List): Result;
/**
 * Set all the attributes for an item. This will replace any previous att
 * ributes
 * set on the item.
 * For a synchronous version of this function see gnome_keyring_item_set_
 * attributes_sync().
 */
export function item_set_attributes(keyring: string | null, id: number, attributes: AttributeList, callback: OperationDoneCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Set all the attributes for an item. This will replace any previous att
 * ributes
 * set on the item.
 * For an asynchronous version of this function see gnome_keyring_item_se
 * t_attributes().
 */
export function item_set_attributes_sync(keyring: string | null, id: number, attributes: AttributeList): Result;
/**
 * Set information on an item, like its display name, secret etc...
 * Only the fields in the @info pointer that are non-null or non-zero wil
 * l be
 * set on the item.
 * For a synchronous version of this function see gnome_keyring_item_set_
 * info_sync().
 */
export function item_set_info(keyring: string | null, id: number, info: ItemInfo, callback: OperationDoneCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Set information on an item, like its display name, secret etc...
 * Only the fields in the @info pointer that are non-null or non-zero wil
 * l be
 * set on the item.
 * For an asynchronous version of this function see gnome_keyring_item_se
 * t_info().
 */
export function item_set_info_sync(keyring: string | null, id: number, info: ItemInfo): Result;
/**
 * Get a list of all the ids for items in @keyring. These are passed in a
 *  %GList
 * to the @callback. Use GPOINTER_TO_UINT() on the list to access the int
 * eger ids.
 * The list is freed after @callback returns.
 * All items that are not flagged as %GNOME_KEYRING_ITEM_APPLICATION_SECR
 * ET are
 * included in the list. This includes items that the calling application
 *  may not
 * (yet) have access to.
 * For a synchronous version of this function see gnome_keyring_list_item
 * _ids_sync().
 */
export function list_item_ids(keyring: string | null, callback: OperationGetListCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Get a list of all the ids for items in @keyring.
 * Use GPOINTER_TO_UINT() on the list to access the integer ids. The list
 * should be freed with g_list_free().
 * For an asynchronous version of this function see gnome_keyring_list_it
 * em_ids().
 */
export function list_item_ids_sync(keyring: string | null): [Result, GLib.List];
/**
 * Get a list of keyring names.
 * A %GList of null terminated strings will be passed to
 * the @callback. If no keyrings exist then an empty list will be passed 
 * to the
 * @callback. The list is freed after @callback returns.
 * For a synchronous version of this function see gnome_keyring_list_keyr
 * ing_names_sync().
 */
export function list_keyring_names(callback: OperationGetListCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Get a list of keyring names.
 * The list returned in in @keyrings must be freed using
 * gnome_keyring_string_list_free().
 * For an asynchronous version of this function see gnome_keyring_list_ke
 * yring_names().
 */
export function list_keyring_names_sync(): [Result, GLib.List];
/**
 * Lock a @keyring, so that its contents may not be accessed without firs
 * t
 * supplying a password.
 * Most keyring operations involving items require that you first unlock 
 * the
 * keyring. One exception is gnome_keyring_find_items() and related funct
 * ions.
 * For a synchronous version of this function see gnome_keyring_lock_sync
 * ().
 */
export function lock(keyring: string | null, callback: OperationDoneCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Lock all the keyrings, so that their contents may not be accessed with
 * out
 * first unlocking them with a password.
 * For a synchronous version of this function see gnome_keyring_lock_all_
 * sync().
 */
export function lock_all(callback: OperationDoneCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Lock all the keyrings, so that their contents may not eb accessed with
 * out
 * first unlocking them with a password.
 * For an asynchronous version of this function see gnome_keyring_lock_al
 * l().
 */
export function lock_all_sync(): Result;
/**
 * Lock a @keyring, so that its contents may not be accessed without firs
 * t
 * supplying a password.
 * Most keyring opretaions involving items require that you first unlock 
 * the
 * keyring. One exception is gnome_keyring_find_items_sync() and related 
 * functions.
 * For an asynchronous version of this function see gnome_keyring_lock().
 */
export function lock_sync(keyring: string | null): Result;
/**
 * Allocate a block of gnome-keyring non-pageable memory.
 * If non-pageable memory cannot be allocated then normal memory will be
 * returned.
 */
export function memory_alloc(sz: number): object | null;
/**
 * Free a block of gnome-keyring non-pageable memory.
 * Glib memory is also freed correctly when passed to this function. If c
 * alled
 * with a null pointer then no action is taken.
 */
export function memory_free(p: object | null): void;
/**
 * Check if a pointer is in non-pageable memory allocated by gnome-keyrin
 * g.
 */
export function memory_is_secure(p: object | null): boolean;
/**
 * Reallocate a block of gnome-keyring non-pageable memory.
 * Glib memory is also reallocated correctly. If called with a null point
 * er,
 * then a new block of memory is allocated. If called with a zero size,
 * then the block of memory is freed.
 * If non-pageable memory cannot be allocated then normal memory will be
 * returned.
 */
export function memory_realloc(p: object | null, sz: number): object | null;
/**
 * Copy a string into non-pageable memory. If the input string is %NULL, 
 * then
 * %NULL will be returned.
 */
export function memory_strdup(str: string): string;
/**
 * Allocate a block of gnome-keyring non-pageable memory.
 * If non-pageable memory cannot be allocated, then %NULL is returned.
 */
export function memory_try_alloc(sz: number): object | null;
/**
 * Reallocate a block of gnome-keyring non-pageable memory.
 * Glib memory is also reallocated correctly when passed to this function
 * .
 * If called with a null pointer, then a new block of memory is allocated
 * .
 * If called with a zero size, then the block of memory is freed.
 * If memory cannot be allocated, %NULL is returned and the original bloc
 * k
 * of memory remains intact.
 */
export function memory_try_realloc(p: object | null, sz: number): object | null;
/**
 * Free a network password data pointer. If %NULL is passed in,
 * nothing happens.
 */
export function network_password_free(data: NetworkPasswordData | null): void;
/**
 * Free a list of network password data.
 */
export function network_password_list_free(list: GLib.List): void;
/**
 * The #GNOME_KEYRING_RESULT_OK and #GNOME_KEYRING_RESULT_CANCELLED
 * codes will return an empty string.
 * Note that there are some results for which the application will need t
 * o
 * take appropriate action rather than just display an error message to
 * the user.
 */
export function result_to_message(res: Result): string;
/**
 * Change the default keyring.
 * For a synchronous version of this function see gnome_keyring_set_defau
 * lt_keyring_sync().
 */
export function set_default_keyring(keyring: string, callback: OperationDoneCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Change the default keyring.
 * For an asynchronous version of this function see gnome_keyring_set_def
 * ault_keyring().
 */
export function set_default_keyring_sync(keyring: string): Result;
/**
 * Set flags and info for the @keyring. The only fields in @info that are
 *  used
 * are lock_on_idle and lock_timeout.
 * For a synchronous version of this function see gnome_keyring_set_info_
 * sync().
 */
export function set_info(keyring: string | null, info: Info, callback: OperationDoneCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Set flags and info for @keyring. The only fields in @info that are use
 * d
 * are lock_on_idle and lock_timeout.
 * For an asynchronous version of this function see gnome_keyring_set_inf
 * o().
 */
export function set_info_sync(keyring: string | null, info: Info): Result;
/**
 * Store a network password.
 * If an item already exists for with this network info (ie: user, server
 *  etc...)
 * then it will be updated.
 * Whether a new item is created or not, id of the item will be passed to
 * the @callback.
 * Network passwords are items with the item type %GNOME_KEYRING_ITEM_NET
 * WORK_PASSWORD
 */
export function set_network_password(keyring: string | null, user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number, password: string, callback: OperationGetIntCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Store a network password.
 * If an item already exists for with this network info (ie: user, server
 *  etc...)
 * then it will be updated.
 * The created or updated item id will be returned in @item_id.
 * Network passwords are items with the item type %GNOME_KEYRING_ITEM_NET
 * WORK_PASSWORD
 */
export function set_network_password_sync(keyring: string | null, user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number, password: string): [Result, number];
/**
 * Store a password associated with a given set of attributes.
 * Attributes which identify this password must be passed as additional
 * arguments. Attributes passed must be defined in the schema.
 * If a password exists in the keyring that already has all the same argu
 * ments,
 * then the password will be updated.
 * Another more complex way to create a keyring item is using gnome_keyri
 * ng_item_create().
 */
export function store_password(schema: PasswordSchema, keyring: string | null, display_name: string, password: string, callback: OperationDoneCallback, data: object | null, destroy_data: GLib.DestroyNotify, ___: unknown[]): object | null;
/**
 * Store a password associated with a given set of attributes.
 * Attributes which identify this password must be passed as additional
 * arguments. Attributes passed must be defined in the schema.
 * This function may block for an unspecified period. If your application
 *  must
 * remain responsive to the user, then use gnome_keyring_store_password()
 * .
 * If a password exists in the keyring that already has all the same argu
 * ments,
 * then the password will be updated.
 * Another more complex way to create a keyring item is using
 * gnome_keyring_item_create_sync().
 */
export function store_password_sync(schema: PasswordSchema, keyring: string | null, display_name: string, password: string, ___: unknown[]): Result;
/**
 * Free a list of string pointers.
 */
export function string_list_free(strings: GLib.List): void;
/**
 * Unlock a @keyring, so that its contents may be accessed. In most cases
 *  %NULL
 * will be passed as the @password, which will prompt the user to enter t
 * he
 * correct password.
 * Most keyring operations involving items require that you first unlock 
 * the
 * keyring. One exception is gnome_keyring_find_items() and related funct
 * ions.
 * For a synchronous version of this function see gnome_keyring_unlock_sy
 * nc().
 */
export function unlock(keyring: string | null, password: string | null, callback: OperationDoneCallback, data: object | null, destroy_data: GLib.DestroyNotify): object | null;
/**
 * Unlock a @keyring, so that its contents may be accessed. In most cases
 *  %NULL
 * will be passed in as the @password, which will prompt the user to ente
 * r the
 * correct password.
 * Most keyring opretaions involving items require that yo ufirst unlock 
 * the
 * keyring. One exception is gnome_keyring_find_items_sync() and related 
 * functions.
 * For an asynchronous version of this function see gnome_keyring_unlock(
 * ).
 */
export function unlock_sync(keyring: string | null, password: string | null): Result;
export enum AccessRestriction {
    ASK = 0,
    DENY = 1,
    ALLOW = 2,
}
export enum AttributeType {
    STRING = 0,
    UINT32 = 1,
}
export enum ItemType {
    GENERIC_SECRET = 0,
    NETWORK_PASSWORD = 1,
    NOTE = 2,
    CHAINED_KEYRING_PASSWORD = 3,
    ENCRYPTION_KEY_PASSWORD = 4,
    PK_STORAGE = 256,
    LAST_TYPE = 257,
}
export enum Result {
    OK = 0,
    DENIED = 1,
    NO_KEYRING_DAEMON = 2,
    ALREADY_UNLOCKED = 3,
    NO_SUCH_KEYRING = 4,
    BAD_ARGUMENTS = 5,
    IO_ERROR = 6,
    CANCELLED = 7,
    KEYRING_ALREADY_EXISTS = 8,
    NO_MATCH = 9,
}
export type AttributeList = GLib.Array;
export enum AccessType {
    READ = 1,
    WRITE = 2,
    REMOVE = 4,
}
export enum ItemInfoFlags {
    BASICS = 0,
    SECRET = 1,
}
export class AccessControl  {constructor(config?: properties);
copy(): AccessControl;
free(): void;
}
export class ApplicationRef  {constructor(config?: properties);
copy(): ApplicationRef;
free(): void;
}
export class Attribute  {constructor(config?: properties);
name: string;
type: AttributeType;
get_string(): string;
get_uint32(): number;
static list_append_string(attributes: AttributeList, name: string, value: string): void;
static list_append_uint32(attributes: AttributeList, name: string, value: number): void;
static list_copy(attributes: AttributeList): AttributeList;
static list_free(attributes: AttributeList): void;
static list_new(): AttributeList;
static list_to_glist(attributes: AttributeList): GLib.List;
}
export class Found  {constructor(config?: properties);
keyring: string;
item_id: number;
attributes: AttributeList;
secret: string;
copy(): Found;
free(): void;
static list_free(found_list: GLib.List): void;
}
export class Info  {constructor(config?: properties);
copy(): Info;
free(): void;
get_ctime(): number;
get_is_locked(): boolean;
get_lock_on_idle(): boolean;
get_lock_timeout(): number;
get_mtime(): number;
set_lock_on_idle(value: boolean): void;
set_lock_timeout(value: number): void;
}
export class ItemInfo  {constructor(config?: properties);
copy(): ItemInfo;
free(): void;
get_ctime(): number;
get_display_name(): string;
get_mtime(): number;
get_secret(): string;
get_type(): ItemType;
set_display_name(value: string): void;
set_secret(value: string): void;
set_type(type: ItemType): void;
}
export class NetworkPasswordData  {constructor(config?: properties);
keyring: string;
item_id: number;
protocol: string;
server: string;
object: string;
authtype: string;
port: number;
user: string;
domain: string;
password: string;
}
export class PasswordSchema  {constructor(config?: properties);
item_type: ItemType;
attributes: PasswordSchemaAttribute[];
readonly reserved1: object;
readonly reserved2: object;
readonly reserved3: object;
}
export class PasswordSchemaAttribute  {constructor(config?: properties);
name: string;
type: AttributeType;
}