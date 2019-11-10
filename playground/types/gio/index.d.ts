
/**
 * gio
 */
import * as GObject from "gobject";
import * as GLib from "glib";
/**
 * 
 */
type properties = { [key: string]: any };
type GType = object;
export const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME: string;
export const DRIVE_IDENTIFIER_KIND_UNIX_DEVICE: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_DELETE: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_EXECUTE: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_READ: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_RENAME: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_TRASH: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_WRITE: string;
export const FILE_ATTRIBUTE_DOS_IS_ARCHIVE: string;
export const FILE_ATTRIBUTE_DOS_IS_MOUNTPOINT: string;
export const FILE_ATTRIBUTE_DOS_IS_SYSTEM: string;
export const FILE_ATTRIBUTE_DOS_REPARSE_POINT_TAG: string;
export const FILE_ATTRIBUTE_ETAG_VALUE: string;
export const FILE_ATTRIBUTE_FILESYSTEM_FREE: string;
export const FILE_ATTRIBUTE_FILESYSTEM_READONLY: string;
export const FILE_ATTRIBUTE_FILESYSTEM_REMOTE: string;
export const FILE_ATTRIBUTE_FILESYSTEM_SIZE: string;
export const FILE_ATTRIBUTE_FILESYSTEM_TYPE: string;
export const FILE_ATTRIBUTE_FILESYSTEM_USED: string;
export const FILE_ATTRIBUTE_FILESYSTEM_USE_PREVIEW: string;
export const FILE_ATTRIBUTE_GVFS_BACKEND: string;
export const FILE_ATTRIBUTE_ID_FILE: string;
export const FILE_ATTRIBUTE_ID_FILESYSTEM: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_EJECT: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_MOUNT: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_POLL: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_START: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_START_DEGRADED: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_STOP: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_UNMOUNT: string;
export const FILE_ATTRIBUTE_MOUNTABLE_HAL_UDI: string;
export const FILE_ATTRIBUTE_MOUNTABLE_IS_MEDIA_CHECK_AUTOMATIC: string;
export const FILE_ATTRIBUTE_MOUNTABLE_START_STOP_TYPE: string;
export const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE: string;
export const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE_FILE: string;
export const FILE_ATTRIBUTE_OWNER_GROUP: string;
export const FILE_ATTRIBUTE_OWNER_USER: string;
export const FILE_ATTRIBUTE_OWNER_USER_REAL: string;
export const FILE_ATTRIBUTE_PREVIEW_ICON: string;
export const FILE_ATTRIBUTE_RECENT_MODIFIED: string;
export const FILE_ATTRIBUTE_SELINUX_CONTEXT: string;
export const FILE_ATTRIBUTE_STANDARD_ALLOCATED_SIZE: string;
export const FILE_ATTRIBUTE_STANDARD_CONTENT_TYPE: string;
export const FILE_ATTRIBUTE_STANDARD_COPY_NAME: string;
export const FILE_ATTRIBUTE_STANDARD_DESCRIPTION: string;
export const FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME: string;
export const FILE_ATTRIBUTE_STANDARD_EDIT_NAME: string;
export const FILE_ATTRIBUTE_STANDARD_FAST_CONTENT_TYPE: string;
export const FILE_ATTRIBUTE_STANDARD_ICON: string;
export const FILE_ATTRIBUTE_STANDARD_IS_BACKUP: string;
export const FILE_ATTRIBUTE_STANDARD_IS_HIDDEN: string;
export const FILE_ATTRIBUTE_STANDARD_IS_SYMLINK: string;
export const FILE_ATTRIBUTE_STANDARD_IS_VIRTUAL: string;
export const FILE_ATTRIBUTE_STANDARD_IS_VOLATILE: string;
export const FILE_ATTRIBUTE_STANDARD_NAME: string;
export const FILE_ATTRIBUTE_STANDARD_SIZE: string;
export const FILE_ATTRIBUTE_STANDARD_SORT_ORDER: string;
export const FILE_ATTRIBUTE_STANDARD_SYMBOLIC_ICON: string;
export const FILE_ATTRIBUTE_STANDARD_SYMLINK_TARGET: string;
export const FILE_ATTRIBUTE_STANDARD_TARGET_URI: string;
export const FILE_ATTRIBUTE_STANDARD_TYPE: string;
export const FILE_ATTRIBUTE_THUMBNAILING_FAILED: string;
export const FILE_ATTRIBUTE_THUMBNAIL_IS_VALID: string;
export const FILE_ATTRIBUTE_THUMBNAIL_PATH: string;
export const FILE_ATTRIBUTE_TIME_ACCESS: string;
export const FILE_ATTRIBUTE_TIME_ACCESS_USEC: string;
export const FILE_ATTRIBUTE_TIME_CHANGED: string;
export const FILE_ATTRIBUTE_TIME_CHANGED_USEC: string;
export const FILE_ATTRIBUTE_TIME_CREATED: string;
export const FILE_ATTRIBUTE_TIME_CREATED_USEC: string;
export const FILE_ATTRIBUTE_TIME_MODIFIED: string;
export const FILE_ATTRIBUTE_TIME_MODIFIED_USEC: string;
export const FILE_ATTRIBUTE_TRASH_DELETION_DATE: string;
export const FILE_ATTRIBUTE_TRASH_ITEM_COUNT: string;
export const FILE_ATTRIBUTE_TRASH_ORIG_PATH: string;
export const FILE_ATTRIBUTE_UNIX_BLOCKS: string;
export const FILE_ATTRIBUTE_UNIX_BLOCK_SIZE: string;
export const FILE_ATTRIBUTE_UNIX_DEVICE: string;
export const FILE_ATTRIBUTE_UNIX_GID: string;
export const FILE_ATTRIBUTE_UNIX_INODE: string;
export const FILE_ATTRIBUTE_UNIX_IS_MOUNTPOINT: string;
export const FILE_ATTRIBUTE_UNIX_MODE: string;
export const FILE_ATTRIBUTE_UNIX_NLINK: string;
export const FILE_ATTRIBUTE_UNIX_RDEV: string;
export const FILE_ATTRIBUTE_UNIX_UID: string;
export const MENU_ATTRIBUTE_ACTION: string;
export const MENU_ATTRIBUTE_ACTION_NAMESPACE: string;
export const MENU_ATTRIBUTE_ICON: string;
export const MENU_ATTRIBUTE_LABEL: string;
export const MENU_ATTRIBUTE_TARGET: string;
export const MENU_LINK_SECTION: string;
export const MENU_LINK_SUBMENU: string;
export const NATIVE_VOLUME_MONITOR_EXTENSION_POINT_NAME: string;
export const NETWORK_MONITOR_EXTENSION_POINT_NAME: string;
export const PROXY_EXTENSION_POINT_NAME: string;
export const PROXY_RESOLVER_EXTENSION_POINT_NAME: string;
export const SETTINGS_BACKEND_EXTENSION_POINT_NAME: string;
export const TLS_BACKEND_EXTENSION_POINT_NAME: string;
export const TLS_DATABASE_PURPOSE_AUTHENTICATE_CLIENT: string;
export const TLS_DATABASE_PURPOSE_AUTHENTICATE_SERVER: string;
export const VFS_EXTENSION_POINT_NAME: string;
export const VOLUME_IDENTIFIER_KIND_CLASS: string;
export const VOLUME_IDENTIFIER_KIND_HAL_UDI: string;
export const VOLUME_IDENTIFIER_KIND_LABEL: string;
export const VOLUME_IDENTIFIER_KIND_NFS_MOUNT: string;
export const VOLUME_IDENTIFIER_KIND_UNIX_DEVICE: string;
export const VOLUME_IDENTIFIER_KIND_UUID: string;
export const VOLUME_MONITOR_EXTENSION_POINT_NAME: string;
/**
 * Checks if @action_name is valid.
 * @action_name is valid if it consists only of alphanumeric characters,
 * plus '-' and '.'.  The empty string is not a valid action name.
 * It is an error to call this function with a non-utf8 @action_name.
 * @action_name must not be %NULL.
 */
export function action_name_is_valid(action_name: string): boolean;
/**
 * Parses a detailed action name into its separate name and target
 * components.
 * Detailed action names can have three formats.
 * The first format is used to represent an action name with no target
 * value and consists of just an action name containing no whitespace
 * nor the characters ':', '(' or ')'.  For example: "app.action".
 * The second format is used to represent an action with a target value
 * that is a non-empty string consisting only of alphanumerics, plus '-'
 * and '.'.  In that case, the action name and target value are
 * separated by a double colon ("::").  For example:
 * "app.action::target".
 * The third format is used to represent an action with any type of
 * target value, including strings.  The target value follows the action
 * name, surrounded in parens.  For example: "app.action(42)".  The
 * target value is parsed using g_variant_parse().  If a tuple-typed
 * value is desired, it must be specified in the same way, resulting in
 * two sets of parens, for example: "app.action((1,2,3))".  A string
 * target can be specified this way as well: "app.action('target')".
 * For strings, this third format must be used if * target value is
 * empty or contains characters other than alphanumerics, '-' and '.'.
 */
export function action_parse_detailed_name(detailed_name: string): [boolean, string,GLib.Variant];
/**
 * Formats a detailed action name from @action_name and @target_value.
 * It is an error to call this function with an invalid action name.
 * This function is the opposite of g_action_parse_detailed_name().
 * It will produce a string that can be parsed back to the @action_name
 * and @target_value by that function.
 * See that function for the types of strings that will be printed by
 * this function.
 */
export function action_print_detailed_name(action_name: string, target_value: GLib.Variant | null): string;
/**
 * Creates a new #GAppInfo from the given information.
 * Note that for @commandline, the quoting rules of the Exec key of the
 * [freedesktop.org Desktop Entry Specification](http://freedesktop.org/S
 * tandards/desktop-entry-spec)
 * are applied. For example, if the @commandline contains
 * percent-encoded URIs, the percent-character must be doubled in order t
 * o prevent it from
 * being swallowed by Exec key unquoting. See the specification for exact
 *  quoting rules.
 */
export function app_info_create_from_commandline(commandline: string, application_name: string | null, flags: AppInfoCreateFlags): AppInfo;
/**
 * Gets a list of all of the applications currently registered
 * on this system.
 * For desktop files, this includes applications that have
 * `NoDisplay=true` set or are excluded from display by means
 * of `OnlyShowIn` or `NotShowIn`. See g_app_info_should_show().
 * The returned list does not include applications which have
 * the `Hidden` key set.
 */
export function app_info_get_all(): GLib.List;
/**
 * Gets a list of all #GAppInfos for a given content type,
 * including the recommended and fallback #GAppInfos. See
 * g_app_info_get_recommended_for_type() and
 * g_app_info_get_fallback_for_type().
 */
export function app_info_get_all_for_type(content_type: string): GLib.List;
/**
 * Gets the default #GAppInfo for a given content type.
 */
export function app_info_get_default_for_type(content_type: string, must_support_uris: boolean): AppInfo;
/**
 * Gets the default application for handling URIs with
 * the given URI scheme. A URI scheme is the initial part
 * of the URI, up to but not including the ':', e.g. "http",
 * "ftp" or "sip".
 */
export function app_info_get_default_for_uri_scheme(uri_scheme: string): AppInfo;
/**
 * Gets a list of fallback #GAppInfos for a given content type, i.e.
 * those applications which claim to support the given content type
 * by MIME type subclassing and not directly.
 */
export function app_info_get_fallback_for_type(content_type: string): GLib.List;
/**
 * Gets a list of recommended #GAppInfos for a given content type, i.e.
 * those applications which claim to support the given content type exact
 * ly,
 * and not by MIME type subclassing.
 * Note that the first application of the list is the last used one, i.e.
 * the last one for which g_app_info_set_as_last_used_for_type() has been
 * called.
 */
export function app_info_get_recommended_for_type(content_type: string): GLib.List;
/**
 * Utility function that launches the default application
 * registered to handle the specified uri. Synchronous I/O
 * is done on the uri to detect the type of the file if
 * required.
 * The D-Bus–activated applications don't have to be started if your appl
 * ication
 * terminates too soon after this function. To prevent this, use
 * g_app_info_launch_default_for_uri() instead.
 */
export function app_info_launch_default_for_uri(uri: string, context: AppLaunchContext | null): boolean;
/**
 * Async version of g_app_info_launch_default_for_uri().
 * This version is useful if you are interested in receiving
 * error information in the case where the application is
 * sandboxed and the portal may present an application chooser
 * dialog to the user.
 * This is also useful if you want to be sure that the D-Bus–activated
 * applications are really started before termination and if you are inte
 * rested
 * in receiving error information from their activation.
 */
export function app_info_launch_default_for_uri_async(uri: string, context: AppLaunchContext | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Finishes an asynchronous launch-default-for-uri operation.
 */
export function app_info_launch_default_for_uri_finish(result: AsyncResult): boolean;
/**
 * Removes all changes to the type associations done by
 * g_app_info_set_as_default_for_type(),
 * g_app_info_set_as_default_for_extension(),
 * g_app_info_add_supports_type() or
 * g_app_info_remove_supports_type().
 */
export function app_info_reset_type_associations(content_type: string): void;
/**
 * Helper function for constructing #GAsyncInitable object. This is
 * similar to g_object_newv() but also initializes the object asynchronou
 * sly.
 * When the initialization is finished, @callback will be called. You can
 * then call g_async_initable_new_finish() to get the new object and chec
 * k
 * for any errors.
 */
export function async_initable_newv_async(object_type: GType, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Asynchronously connects to the message bus specified by @bus_type.
 * When the operation is finished, @callback will be invoked. You can
 * then call g_bus_get_finish() to get the result of the operation.
 * This is a asynchronous failable function. See g_bus_get_sync() for
 * the synchronous version.
 */
export function bus_get(bus_type: BusType, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Finishes an operation started with g_bus_get().
 * The returned object is a singleton, that is, shared with other
 * callers of g_bus_get() and g_bus_get_sync() for @bus_type. In the
 * event that you need a private message bus connection, use
 * g_dbus_address_get_for_bus_sync() and
 * g_dbus_connection_new_for_address().
 * Note that the returned #GDBusConnection object will (usually) have
 * the #GDBusConnection:exit-on-close property set to %TRUE.
 */
export function bus_get_finish(res: AsyncResult): DBusConnection;
/**
 * Synchronously connects to the message bus specified by @bus_type.
 * Note that the returned object may shared with other callers,
 * e.g. if two separate parts of a process calls this function with
 * the same @bus_type, they will share the same object.
 * This is a synchronous failable function. See g_bus_get() and
 * g_bus_get_finish() for the asynchronous version.
 * The returned object is a singleton, that is, shared with other
 * callers of g_bus_get() and g_bus_get_sync() for @bus_type. In the
 * event that you need a private message bus connection, use
 * g_dbus_address_get_for_bus_sync() and
 * g_dbus_connection_new_for_address().
 * Note that the returned #GDBusConnection object will (usually) have
 * the #GDBusConnection:exit-on-close property set to %TRUE.
 */
export function bus_get_sync(bus_type: BusType, cancellable: Cancellable | null): DBusConnection;
/**
 * Version of g_bus_own_name_on_connection() using closures instead of
 * callbacks for easier binding in other languages.
 */
export function bus_own_name_on_connection_with_closures(connection: DBusConnection, name: string, flags: BusNameOwnerFlags, name_acquired_closure: GObject.Closure | null, name_lost_closure: GObject.Closure | null): number;
/**
 * Version of g_bus_own_name() using closures instead of callbacks for
 * easier binding in other languages.
 */
export function bus_own_name_with_closures(bus_type: BusType, name: string, flags: BusNameOwnerFlags, bus_acquired_closure: GObject.Closure | null, name_acquired_closure: GObject.Closure | null, name_lost_closure: GObject.Closure | null): number;
/**
 * Stops owning a name.
 */
export function bus_unown_name(owner_id: number): void;
/**
 * Stops watching a name.
 */
export function bus_unwatch_name(watcher_id: number): void;
/**
 * Version of g_bus_watch_name_on_connection() using closures instead of 
 * callbacks for
 * easier binding in other languages.
 */
export function bus_watch_name_on_connection_with_closures(connection: DBusConnection, name: string, flags: BusNameWatcherFlags, name_appeared_closure: GObject.Closure | null, name_vanished_closure: GObject.Closure | null): number;
/**
 * Version of g_bus_watch_name() using closures instead of callbacks for
 * easier binding in other languages.
 */
export function bus_watch_name_with_closures(bus_type: BusType, name: string, flags: BusNameWatcherFlags, name_appeared_closure: GObject.Closure | null, name_vanished_closure: GObject.Closure | null): number;
/**
 * Checks if a content type can be executable. Note that for instance
 * things like text files can be executables (i.e. scripts and batch file
 * s).
 */
export function content_type_can_be_executable(type: string): boolean;
/**
 * Compares two content types for equality.
 */
export function content_type_equals(type1: string, type2: string): boolean;
/**
 * Tries to find a content type based on the mime type name.
 */
export function content_type_from_mime_type(mime_type: string): string | null;
/**
 * Gets the human readable description of the content type.
 */
export function content_type_get_description(type: string): string;
/**
 * Gets the generic icon name for a content type.
 * See the
 * [shared-mime-info](http://www.freedesktop.org/wiki/Specifications/shar
 * ed-mime-info-spec)
 * specification for more on the generic icon name.
 */
export function content_type_get_generic_icon_name(type: string): string | null;
/**
 * Gets the icon for a content type.
 */
export function content_type_get_icon(type: string): Icon;
/**
 * Get the list of directories which MIME data is loaded from. See
 * g_content_type_set_mime_dirs() for details.
 */
export function content_type_get_mime_dirs(): string[];
/**
 * Gets the mime type for the content type, if one is registered.
 */
export function content_type_get_mime_type(type: string): string | null;
/**
 * Gets the symbolic icon for a content type.
 */
export function content_type_get_symbolic_icon(type: string): Icon;
/**
 * Guesses the content type based on example data. If the function is
 * uncertain, @result_uncertain will be set to %TRUE. Either @filename
 * or @data may be %NULL, in which case the guess will be based solely
 * on the other argument.
 */
export function content_type_guess(filename: string | null, data: number[] | null, data_size: number): [string, boolean | null];
/**
 * Tries to guess the type of the tree with root @root, by
 * looking at the files it contains. The result is an array
 * of content types, with the best guess coming first.
 * The types returned all have the form x-content/foo, e.g.
 * x-content/audio-cdda (for audio CDs) or x-content/image-dcf
 * (for a camera memory card). See the
 * [shared-mime-info](http://www.freedesktop.org/wiki/Specifications/shar
 * ed-mime-info-spec)
 * specification for more on x-content types.
 * This function is useful in the implementation of
 * g_mount_guess_content_type().
 */
export function content_type_guess_for_tree(root: File): string[];
/**
 * Determines if @type is a subset of @supertype.
 */
export function content_type_is_a(type: string, supertype: string): boolean;
/**
 * Determines if @type is a subset of @mime_type.
 * Convenience wrapper around g_content_type_is_a().
 */
export function content_type_is_mime_type(type: string, mime_type: string): boolean;
/**
 * Checks if the content type is the generic "unknown" type.
 * On UNIX this is the "application/octet-stream" mimetype,
 * while on win32 it is "*" and on OSX it is a dynamic type
 * or octet-stream.
 */
export function content_type_is_unknown(type: string): boolean;
/**
 * Set the list of directories used by GIO to load the MIME database.
 * If @dirs is %NULL, the directories used are the default:
 *  - the `mime` subdirectory of the directory in `$XDG_DATA_HOME`
 *  - the `mime` subdirectory of every directory in `$XDG_DATA_DIRS`
 * This function is intended to be used when writing tests that depend on
 * information stored in the MIME database, in order to control the data.
 * Typically, in case your tests use %G_TEST_OPTION_ISOLATE_DIRS, but the
 * y
 * depend on the system’s MIME database, you should call this function
 * with @dirs set to %NULL before calling g_test_init(), for instance:
 * |[<!-- language="C" -->
 *   // Load MIME data from the system
 *   g_content_type_set_mime_dirs (NULL);
 *   // Isolate the environment
 *   g_test_init (&argc, &argv, G_TEST_OPTION_ISOLATE_DIRS, NULL);
 *   …
 *   return g_test_run ();
 * ]|
 */
export function content_type_set_mime_dirs(dirs: string[] | null): void;
/**
 * Gets a list of strings containing all the registered content types
 * known to the system. The list and its data should be freed using
 * `g_list_free_full (list, g_free)`.
 */
export function content_types_get_registered(): GLib.List;
/**
 * Escape @string so it can appear in a D-Bus address as the value
 * part of a key-value pair.
 * For instance, if @string is `/run/bus-for-:0`,
 * this function would return `/run/bus-for-%3A0`,
 * which could be used in a D-Bus address like
 * `unix:nonce-tcp:host=127.0.0.1,port=42,noncefile=/run/bus-for-%3A0`.
 */
export function dbus_address_escape_value(string: string): string;
/**
 * Synchronously looks up the D-Bus address for the well-known message
 * bus instance specified by @bus_type. This may involve using various
 * platform specific mechanisms.
 * The returned address will be in the
 * [D-Bus address format](https://dbus.freedesktop.org/doc/dbus-specifica
 * tion.html#addresses).
 */
export function dbus_address_get_for_bus_sync(bus_type: BusType, cancellable: Cancellable | null): string;
/**
 * Asynchronously connects to an endpoint specified by @address and
 * sets up the connection so it is in a state to run the client-side
 * of the D-Bus authentication conversation. @address must be in the
 * [D-Bus address format](https://dbus.freedesktop.org/doc/dbus-specifica
 * tion.html#addresses).
 * When the operation is finished, @callback will be invoked. You can
 * then call g_dbus_address_get_stream_finish() to get the result of
 * the operation.
 * This is an asynchronous failable function. See
 * g_dbus_address_get_stream_sync() for the synchronous version.
 */
export function dbus_address_get_stream(address: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Finishes an operation started with g_dbus_address_get_stream().
 */
export function dbus_address_get_stream_finish(res: AsyncResult): [IOStream, string | null];
/**
 * Synchronously connects to an endpoint specified by @address and
 * sets up the connection so it is in a state to run the client-side
 * of the D-Bus authentication conversation. @address must be in the
 * [D-Bus address format](https://dbus.freedesktop.org/doc/dbus-specifica
 * tion.html#addresses).
 * This is a synchronous failable function. See
 * g_dbus_address_get_stream() for the asynchronous version.
 */
export function dbus_address_get_stream_sync(address: string, cancellable: Cancellable | null): [IOStream, string | null];
/**
 * Looks up the value of an annotation.
 * The cost of this function is O(n) in number of annotations.
 */
export function dbus_annotation_info_lookup(annotations: DBusAnnotationInfo[] | null, name: string): string;
/**
 * Creates a D-Bus error name to use for @error. If @error matches
 * a registered error (cf. g_dbus_error_register_error()), the correspond
 * ing
 * D-Bus error name will be returned.
 * Otherwise the a name of the form
 * `org.gtk.GDBus.UnmappedGError.Quark._ESCAPED_QUARK_NAME.Code_ERROR_COD
 * E`
 * will be used. This allows other GDBus applications to map the error
 * on the wire back to a #GError using g_dbus_error_new_for_dbus_error().
 * This function is typically only used in object mappings to put a
 * #GError on the wire. Regular applications should not use it.
 */
export function dbus_error_encode_gerror(error: GLib.Error): string;
/**
 * Gets the D-Bus error name used for @error, if any.
 * This function is guaranteed to return a D-Bus error name for all
 * #GErrors returned from functions handling remote method calls
 * (e.g. g_dbus_connection_call_finish()) unless
 * g_dbus_error_strip_remote_error() has been used on @error.
 */
export function dbus_error_get_remote_error(error: GLib.Error): string;
/**
 * Checks if @error represents an error received via D-Bus from a remote 
 * peer. If so,
 * use g_dbus_error_get_remote_error() to get the name of the error.
 */
export function dbus_error_is_remote_error(error: GLib.Error): boolean;
/**
 * Creates a #GError based on the contents of @dbus_error_name and
 * @dbus_error_message.
 * Errors registered with g_dbus_error_register_error() will be looked
 * up using @dbus_error_name and if a match is found, the error domain
 * and code is used. Applications can use g_dbus_error_get_remote_error()
 * to recover @dbus_error_name.
 * If a match against a registered error is not found and the D-Bus
 * error name is in a form as returned by g_dbus_error_encode_gerror()
 * the error domain and code encoded in the name is used to
 * create the #GError. Also, @dbus_error_name is added to the error messa
 * ge
 * such that it can be recovered with g_dbus_error_get_remote_error().
 * Otherwise, a #GError with the error code %G_IO_ERROR_DBUS_ERROR
 * in the #G_IO_ERROR error domain is returned. Also, @dbus_error_name is
 * added to the error message such that it can be recovered with
 * g_dbus_error_get_remote_error().
 * In all three cases, @dbus_error_name can always be recovered from the
 * returned #GError using the g_dbus_error_get_remote_error() function
 * (unless g_dbus_error_strip_remote_error() hasn't been used on the retu
 * rned error).
 * This function is typically only used in object mappings to prepare
 * #GError instances for applications. Regular applications should not us
 * e
 * it.
 */
export function dbus_error_new_for_dbus_error(dbus_error_name: string, dbus_error_message: string): GLib.Error;
/**
 * 
 */
export function dbus_error_quark(): GLib.Quark;
/**
 * Creates an association to map between @dbus_error_name and
 * #GErrors specified by @error_domain and @error_code.
 * This is typically done in the routine that returns the #GQuark for
 * an error domain.
 */
export function dbus_error_register_error(error_domain: GLib.Quark, error_code: number, dbus_error_name: string): boolean;
/**
 * Helper function for associating a #GError error domain with D-Bus erro
 * r names.
 */
export function dbus_error_register_error_domain(error_domain_quark_name: string, quark_volatile: number, entries: DBusErrorEntry[], num_entries: number): void;
/**
 * Looks for extra information in the error message used to recover
 * the D-Bus error name and strips it if found. If stripped, the
 * message field in @error will correspond exactly to what was
 * received on the wire.
 * This is typically used when presenting errors to the end user.
 */
export function dbus_error_strip_remote_error(error: GLib.Error): boolean;
/**
 * Destroys an association previously set up with g_dbus_error_register_e
 * rror().
 */
export function dbus_error_unregister_error(error_domain: GLib.Quark, error_code: number, dbus_error_name: string): boolean;
/**
 * Generate a D-Bus GUID that can be used with
 * e.g. g_dbus_connection_new().
 * See the D-Bus specification regarding what strings are valid D-Bus
 * GUID (for example, D-Bus GUIDs are not RFC-4122 compliant).
 */
export function dbus_generate_guid(): string;
/**
 * Converts a #GValue to a #GVariant of the type indicated by the @type
 * parameter.
 * The conversion is using the following rules:
 * - #G_TYPE_STRING: 's', 'o', 'g' or 'ay'
 * - #G_TYPE_STRV: 'as', 'ao' or 'aay'
 * - #G_TYPE_BOOLEAN: 'b'
 * - #G_TYPE_UCHAR: 'y'
 * - #G_TYPE_INT: 'i', 'n'
 * - #G_TYPE_UINT: 'u', 'q'
 * - #G_TYPE_INT64 'x'
 * - #G_TYPE_UINT64: 't'
 * - #G_TYPE_DOUBLE: 'd'
 * - #G_TYPE_VARIANT: Any #GVariantType
 * This can fail if e.g. @gvalue is of type #G_TYPE_STRING and @type
 * is ['i'][G-VARIANT-TYPE-INT32:CAPS]. It will also fail for any #GType
 * (including e.g. #G_TYPE_OBJECT and #G_TYPE_BOXED derived-types) not
 * in the table above.
 * Note that if @gvalue is of type #G_TYPE_VARIANT and its value is
 * %NULL, the empty #GVariant instance (never %NULL) for @type is
 * returned (e.g. 0 for scalar types, the empty string for string types,
 * '/' for object path types, the empty array for any array type and so o
 * n).
 * See the g_dbus_gvariant_to_gvalue() function for how to convert a
 * #GVariant to a #GValue.
 */
export function dbus_gvalue_to_gvariant(gvalue: GObject.Value, type: GLib.VariantType): GLib.Variant;
/**
 * Converts a #GVariant to a #GValue. If @value is floating, it is consum
 * ed.
 * The rules specified in the g_dbus_gvalue_to_gvariant() function are
 * used - this function is essentially its reverse form. So, a #GVariant
 * containing any basic or string array type will be converted to a #GVal
 * ue
 * containing a basic value or string array. Any other #GVariant (handle,
 * variant, tuple, dict entry) will be converted to a #GValue containing 
 * that
 * #GVariant.
 * The conversion never fails - a valid #GValue is always returned in
 * @out_gvalue.
 */
export function dbus_gvariant_to_gvalue(value: GLib.Variant): [GObject.Value];
/**
 * Checks if @string is a
 * [D-Bus address](https://dbus.freedesktop.org/doc/dbus-specification.ht
 * ml#addresses).
 * This doesn't check if @string is actually supported by #GDBusServer
 * or #GDBusConnection - use g_dbus_is_supported_address() to do more
 * checks.
 */
export function dbus_is_address(string: string): boolean;
/**
 * Checks if @string is a D-Bus GUID.
 * See the D-Bus specification regarding what strings are valid D-Bus
 * GUID (for example, D-Bus GUIDs are not RFC-4122 compliant).
 */
export function dbus_is_guid(string: string): boolean;
/**
 * Checks if @string is a valid D-Bus interface name.
 */
export function dbus_is_interface_name(string: string): boolean;
/**
 * Checks if @string is a valid D-Bus member (e.g. signal or method) name
 * .
 */
export function dbus_is_member_name(string: string): boolean;
/**
 * Checks if @string is a valid D-Bus bus name (either unique or well-kno
 * wn).
 */
export function dbus_is_name(string: string): boolean;
/**
 * Like g_dbus_is_address() but also checks if the library supports the
 * transports in @string and that key/value pairs for each transport
 * are valid. See the specification of the
 * [D-Bus address format](https://dbus.freedesktop.org/doc/dbus-specifica
 * tion.html#addresses).
 */
export function dbus_is_supported_address(string: string): boolean;
/**
 * Checks if @string is a valid D-Bus unique bus name.
 */
export function dbus_is_unique_name(string: string): boolean;
/**
 * Creates a new #GDtlsClientConnection wrapping @base_socket which is
 * assumed to communicate with the server identified by @server_identity.
 */
export function dtls_client_connection_new(base_socket: DatagramBased, server_identity: SocketConnectable | null): DtlsClientConnection;
/**
 * Creates a new #GDtlsServerConnection wrapping @base_socket.
 */
export function dtls_server_connection_new(base_socket: DatagramBased, certificate: TlsCertificate | null): DtlsServerConnection;
/**
 * Creates a #GFile with the given argument from the command line.
 * The value of @arg can be either a URI, an absolute path or a
 * relative path resolved relative to the current working directory.
 * This operation never fails, but the returned object might not
 * support any I/O operation if @arg points to a malformed path.
 * Note that on Windows, this function expects its argument to be in
 * UTF-8 -- not the system code page.  This means that you
 * should not use this function with string from argv as it is passed
 * to main().  g_win32_get_command_line() will return a UTF-8 version of
 * the commandline.  #GApplication also uses UTF-8 but
 * g_application_command_line_create_file_for_arg() may be more useful
 * for you there.  It is also always possible to use this function with
 * #GOptionContext arguments of type %G_OPTION_ARG_FILENAME.
 */
export function file_new_for_commandline_arg(arg: string): File;
/**
 * Creates a #GFile with the given argument from the command line.
 * This function is similar to g_file_new_for_commandline_arg() except
 * that it allows for passing the current working directory as an
 * argument instead of using the current working directory of the
 * process.
 * This is useful if the commandline argument was given in a context
 * other than the invocation of the current process.
 * See also g_application_command_line_create_file_for_arg().
 */
export function file_new_for_commandline_arg_and_cwd(arg: string, cwd: string): File;
/**
 * Constructs a #GFile for a given path. This operation never
 * fails, but the returned object might not support any I/O
 * operation if @path is malformed.
 */
export function file_new_for_path(path: string): File;
/**
 * Constructs a #GFile for a given URI. This operation never
 * fails, but the returned object might not support any I/O
 * operation if @uri is malformed or if the uri type is
 * not supported.
 */
export function file_new_for_uri(uri: string): File;
/**
 * Opens a file in the preferred directory for temporary files (as
 * returned by g_get_tmp_dir()) and returns a #GFile and
 * #GFileIOStream pointing to it.
 * @tmpl should be a string in the GLib file name encoding
 * containing a sequence of six 'X' characters, and containing no
 * directory components. If it is %NULL, a default template is used.
 * Unlike the other #GFile constructors, this will return %NULL if
 * a temporary file could not be created.
 */
export function file_new_tmp(tmpl: string | null): [File, FileIOStream];
/**
 * Constructs a #GFile with the given @parse_name (i.e. something
 * given by g_file_get_parse_name()). This operation never fails,
 * but the returned object might not support any I/O operation if
 * the @parse_name cannot be parsed.
 */
export function file_parse_name(parse_name: string): File;
/**
 * Deserializes a #GIcon previously serialized using g_icon_serialize().
 */
export function icon_deserialize(value: GLib.Variant): Icon;
/**
 * Gets a hash for an icon.
 */
export function icon_hash(icon: object): number;
/**
 * Generate a #GIcon instance from @str. This function can fail if
 * @str is not valid - see g_icon_to_string() for discussion.
 * If your application or library provides one or more #GIcon
 * implementations you need to ensure that each #GType is registered
 * with the type system prior to calling g_icon_new_for_string().
 */
export function icon_new_for_string(str: string): Icon;
/**
 * Helper function for constructing #GInitable object. This is
 * similar to g_object_newv() but also initializes the object
 * and returns %NULL, setting an error on failure.
 */
export function initable_newv(object_type: GType, n_parameters: number, parameters: GObject.Parameter[], cancellable: Cancellable | null): GObject.Object;
/**
 * Converts errno.h error codes into GIO error codes. The fallback
 * value %G_IO_ERROR_FAILED is returned for error codes not currently
 * handled (but note that future GLib releases may return a more
 * specific value instead).
 * As %errno is global and may be modified by intermediate function
 * calls, you should save its value as soon as the call which sets it
 */
export function io_error_from_errno(err_no: number): IOErrorEnum;
/**
 * Gets the GIO Error Quark.
 */
export function io_error_quark(): GLib.Quark;
/**
 * Registers @type as extension for the extension point with name
 * @extension_point_name.
 * If @type has already been registered as an extension for this
 * extension point, the existing #GIOExtension object is returned.
 */
export function io_extension_point_implement(extension_point_name: string, type: GType, extension_name: string, priority: number): IOExtension;
/**
 * Looks up an existing extension point.
 */
export function io_extension_point_lookup(name: string): IOExtensionPoint;
/**
 * Registers an extension point.
 */
export function io_extension_point_register(name: string): IOExtensionPoint;
/**
 * Loads all the modules in the specified directory.
 * If don't require all modules to be initialized (and thus registering
 * all gtypes) then you can use g_io_modules_scan_all_in_directory()
 * which allows delayed/lazy loading of modules.
 */
export function io_modules_load_all_in_directory(dirname: string): GLib.List;
/**
 * Loads all the modules in the specified directory.
 * If don't require all modules to be initialized (and thus registering
 * all gtypes) then you can use g_io_modules_scan_all_in_directory()
 * which allows delayed/lazy loading of modules.
 */
export function io_modules_load_all_in_directory_with_scope(dirname: string, scope: IOModuleScope): GLib.List;
/**
 * Scans all the modules in the specified directory, ensuring that
 * any extension point implemented by a module is registered.
 * This may not actually load and initialize all the types in each
 * module, some modules may be lazily loaded and initialized when
 * an extension point it implementes is used with e.g.
 * g_io_extension_point_get_extensions() or
 * g_io_extension_point_get_extension_by_name().
 * If you need to guarantee that all types are loaded in all the modules,
 * use g_io_modules_load_all_in_directory().
 */
export function io_modules_scan_all_in_directory(dirname: string): void;
/**
 * Scans all the modules in the specified directory, ensuring that
 * any extension point implemented by a module is registered.
 * This may not actually load and initialize all the types in each
 * module, some modules may be lazily loaded and initialized when
 * an extension point it implementes is used with e.g.
 * g_io_extension_point_get_extensions() or
 * g_io_extension_point_get_extension_by_name().
 * If you need to guarantee that all types are loaded in all the modules,
 * use g_io_modules_load_all_in_directory().
 */
export function io_modules_scan_all_in_directory_with_scope(dirname: string, scope: IOModuleScope): void;
/**
 * Cancels all cancellable I/O jobs.
 * A job is cancellable if a #GCancellable was passed into
 * g_io_scheduler_push_job().
 */
export function io_scheduler_cancel_all_jobs(): void;
/**
 * Schedules the I/O job to run in another thread.
 * @notify will be called on @user_data after @job_func has returned,
 * regardless whether the job was cancelled or has run to completion.
 * If @cancellable is not %NULL, it can be used to cancel the I/O job
 * by calling g_cancellable_cancel() or by calling
 * g_io_scheduler_cancel_all_jobs().
 */
export function io_scheduler_push_job(job_func: IOSchedulerJobFunc, user_data: object | null, notify: GLib.DestroyNotify | null, io_priority: number, cancellable: Cancellable | null): void;
/**
 * Creates a keyfile-backed #GSettingsBackend.
 * The filename of the keyfile to use is given by @filename.
 * All settings read to or written from the backend must fall under the
 * path given in @root_path (which must start and end with a slash and
 * not contain two consecutive slashes).  @root_path may be "/".
 * If @root_group is non-%NULL then it specifies the name of the keyfile
 * group used for keys that are written directly below @root_path.  For
 * example, if @root_path is "/apps/example/" and @root_group is
 * "toplevel", then settings the key "/apps/example/enabled" to a value
 * of %TRUE will cause the following to appear in the keyfile:
 * |[
 *   [toplevel]
 *   enabled=true
 * ]|
 * If @root_group is %NULL then it is not permitted to store keys
 * directly below the @root_path.
 * For keys not stored directly below @root_path (ie: in a sub-path),
 * the name of the subpath (with the final slash stripped) is used as
 * the name of the keyfile group.  To continue the example, if
 * "/apps/example/profiles/default/font-size" were set to
 * 12 then the following would appear in the keyfile:
 * |[
 *   [profiles/default]
 *   font-size=12
 * ]|
 * The backend will refuse writes (and return writability as being
 * %FALSE) for keys outside of @root_path and, in the event that
 * @root_group is %NULL, also for keys directly under @root_path.
 * Writes will also be refused if the backend detects that it has the
 * inability to rewrite the keyfile (ie: the containing directory is not
 * writable).
 * There is no checking done for your key namespace clashing with the
 * syntax of the key file format.  For example, if you have '[' or ']'
 * characters in your path names or '=' in your key names you may be in
 * trouble.
 * The backend reads default values from a keyfile called `defaults` in
 * the directory specified by the #GKeyfileSettingsBackend:defaults-dir p
 * roperty,
 * and a list of locked keys from a text file with the name `locks` in
 * the same location.
 */
export function keyfile_settings_backend_new(filename: string, root_path: string, root_group: string | null): SettingsBackend;
/**
 * Creates a memory-backed #GSettingsBackend.
 * This backend allows changes to settings, but does not write them
 * to any backing storage, so the next time you run your application,
 * the memory backend will start out with the default values again.
 */
export function memory_settings_backend_new(): SettingsBackend;
/**
 * Gets the default #GNetworkMonitor for the system.
 */
export function network_monitor_get_default(): NetworkMonitor;
/**
 * Initializes the platform networking libraries (eg, on Windows, this
 * calls WSAStartup()). GLib will call this itself if it is needed, so
 * you only need to call it if you directly call system networking
 * functions (without calling any GLib networking functions first).
 */
export function networking_init(): void;
/**
 * Creates a readonly #GSettingsBackend.
 * This backend does not allow changes to settings, so all settings
 * will always have their default values.
 */
export function null_settings_backend_new(): SettingsBackend;
/**
 * Utility method for #GPollableInputStream and #GPollableOutputStream
 * implementations. Creates a new #GSource that expects a callback of
 * type #GPollableSourceFunc. The new source does not actually do
 * anything on its own; use g_source_add_child_source() to add other
 * sources to it to cause it to trigger.
 */
export function pollable_source_new(pollable_stream: GObject.Object): GLib.Source;
/**
 * Utility method for #GPollableInputStream and #GPollableOutputStream
 * implementations. Creates a new #GSource, as with
 * g_pollable_source_new(), but also attaching @child_source (with a
 * dummy callback), and @cancellable, if they are non-%NULL.
 */
export function pollable_source_new_full(pollable_stream: GObject.Object, child_source: GLib.Source | null, cancellable: Cancellable | null): GLib.Source;
/**
 * Tries to read from @stream, as with g_input_stream_read() (if
 * @blocking is %TRUE) or g_pollable_input_stream_read_nonblocking()
 * (if @blocking is %FALSE). This can be used to more easily share
 * code between blocking and non-blocking implementations of a method.
 * If @blocking is %FALSE, then @stream must be a
 * #GPollableInputStream for which g_pollable_input_stream_can_poll()
 * returns %TRUE, or else the behavior is undefined. If @blocking is
 * %TRUE, then @stream does not need to be a #GPollableInputStream.
 */
export function pollable_stream_read(stream: InputStream, buffer: number[], count: number, blocking: boolean, cancellable: Cancellable | null): number;
/**
 * Tries to write to @stream, as with g_output_stream_write() (if
 * @blocking is %TRUE) or g_pollable_output_stream_write_nonblocking()
 * (if @blocking is %FALSE). This can be used to more easily share
 * code between blocking and non-blocking implementations of a method.
 * If @blocking is %FALSE, then @stream must be a
 * #GPollableOutputStream for which
 * g_pollable_output_stream_can_poll() returns %TRUE or else the
 * behavior is undefined. If @blocking is %TRUE, then @stream does not
 * need to be a #GPollableOutputStream.
 */
export function pollable_stream_write(stream: OutputStream, buffer: number[], count: number, blocking: boolean, cancellable: Cancellable | null): number;
/**
 * Tries to write @count bytes to @stream, as with
 * g_output_stream_write_all(), but using g_pollable_stream_write()
 * rather than g_output_stream_write().
 * On a successful write of @count bytes, %TRUE is returned, and
 * @bytes_written is set to @count.
 * If there is an error during the operation (including
 * %G_IO_ERROR_WOULD_BLOCK in the non-blocking case), %FALSE is
 * returned and @error is set to indicate the error status,
 * @bytes_written is updated to contain the number of bytes written
 * into the stream before the error occurred.
 * As with g_pollable_stream_write(), if @blocking is %FALSE, then
 * @stream must be a #GPollableOutputStream for which
 * g_pollable_output_stream_can_poll() returns %TRUE or else the
 * behavior is undefined. If @blocking is %TRUE, then @stream does not
 * need to be a #GPollableOutputStream.
 */
export function pollable_stream_write_all(stream: OutputStream, buffer: number[], count: number, blocking: boolean, cancellable: Cancellable | null): [boolean, number];
/**
 * Lookup "gio-proxy" extension point for a proxy implementation that sup
 * ports
 * specified protocol.
 */
export function proxy_get_default_for_protocol(protocol: string): Proxy;
/**
 * Gets the default #GProxyResolver for the system.
 */
export function proxy_resolver_get_default(): ProxyResolver;
/**
 * Gets the #GResolver Error Quark.
 */
export function resolver_error_quark(): GLib.Quark;
/**
 * Gets the #GResource Error Quark.
 */
export function resource_error_quark(): GLib.Quark;
/**
 * Loads a binary resource bundle and creates a #GResource representation
 *  of it, allowing
 * you to query it for data.
 * If you want to use this resource in the global resource namespace you 
 * need
 * to register it with g_resources_register().
 * If @filename is empty or the data in it is corrupt,
 * %G_RESOURCE_ERROR_INTERNAL will be returned. If @filename doesn’t exis
 * t, or
 * there is an error in reading it, an error from g_mapped_file_new() wil
 * l be
 * returned.
 */
export function resource_load(filename: string): Resource;
/**
 * Returns all the names of children at the specified @path in the set of
 * globally registered resources.
 * The return result is a %NULL terminated list of strings which should
 * be released with g_strfreev().
 * @lookup_flags controls the behaviour of the lookup.
 */
export function resources_enumerate_children(path: string, lookup_flags: ResourceLookupFlags): string[];
/**
 * Looks for a file at the specified @path in the set of
 * globally registered resources and if found returns information about i
 * t.
 * @lookup_flags controls the behaviour of the lookup.
 */
export function resources_get_info(path: string, lookup_flags: ResourceLookupFlags): [boolean, number | null,number | null];
/**
 * Looks for a file at the specified @path in the set of
 * globally registered resources and returns a #GBytes that
 * lets you directly access the data in memory.
 * The data is always followed by a zero byte, so you
 * can safely use the data as a C string. However, that byte
 * is not included in the size of the GBytes.
 * For uncompressed resource files this is a pointer directly into
 * the resource bundle, which is typically in some readonly data section
 * in the program binary. For compressed files we allocate memory on
 * the heap and automatically uncompress the data.
 * @lookup_flags controls the behaviour of the lookup.
 */
export function resources_lookup_data(path: string, lookup_flags: ResourceLookupFlags): GLib.Bytes;
/**
 * Looks for a file at the specified @path in the set of
 * globally registered resources and returns a #GInputStream
 * that lets you read the data.
 * @lookup_flags controls the behaviour of the lookup.
 */
export function resources_open_stream(path: string, lookup_flags: ResourceLookupFlags): InputStream;
/**
 * Registers the resource with the process-global set of resources.
 * Once a resource is registered the files in it can be accessed
 * with the global resource lookup functions like g_resources_lookup_data
 * ().
 */
export function resources_register(resource: Resource): void;
/**
 * Unregisters the resource from the process-global set of resources.
 */
export function resources_unregister(resource: Resource): void;
/**
 * Gets the default system schema source.
 * This function is not required for normal uses of #GSettings but it
 * may be useful to authors of plugin management systems or to those who
 * want to introspect the content of schemas.
 * If no schemas are installed, %NULL will be returned.
 * The returned source may actually consist of multiple schema sources
 * from different directories, depending on which directories were given
 * in `XDG_DATA_DIRS` and `GSETTINGS_SCHEMA_DIR`. For this reason, all
 * lookups performed against the default source should probably be done
 * recursively.
 */
export function settings_schema_source_get_default(): SettingsSchemaSource | null;
/**
 * Reports an error in an idle function. Similar to
 * g_simple_async_report_error_in_idle(), but takes a #GError rather
 * than building a new one.
 */
export function simple_async_report_gerror_in_idle(object: GObject.Object | null, callback: AsyncReadyCallback | null, user_data: object | null, error: GLib.Error): void;
/**
 * Gets the default #GTlsBackend for the system.
 */
export function tls_backend_get_default(): TlsBackend;
/**
 * Creates a new #GTlsClientConnection wrapping @base_io_stream (which
 * must have pollable input and output streams) which is assumed to
 * communicate with the server identified by @server_identity.
 * See the documentation for #GTlsConnection:base-io-stream for restricti
 * ons
 * on when application code can run operations on the @base_io_stream aft
 * er
 * this function has returned.
 */
export function tls_client_connection_new(base_io_stream: IOStream, server_identity: SocketConnectable | null): TlsClientConnection;
/**
 * Gets the TLS error quark.
 */
export function tls_error_quark(): GLib.Quark;
/**
 * Creates a new #GTlsFileDatabase which uses anchor certificate authorit
 * ies
 * in @anchors to verify certificate chains.
 * The certificates in @anchors must be PEM encoded.
 */
export function tls_file_database_new(anchors: string): TlsFileDatabase;
/**
 * Creates a new #GTlsServerConnection wrapping @base_io_stream (which
 * must have pollable input and output streams).
 * See the documentation for #GTlsConnection:base-io-stream for restricti
 * ons
 * on when application code can run operations on the @base_io_stream aft
 * er
 * this function has returned.
 */
export function tls_server_connection_new(base_io_stream: IOStream, certificate: TlsCertificate | null): TlsServerConnection;
/**
 * Determines if @mount_path is considered an implementation of the
 * OS. This is primarily used for hiding mountable and mounted volumes
 * that only are used in the OS and has little to no relevance to the
 * casual user.
 */
export function unix_is_mount_path_system_internal(mount_path: string): boolean;
/**
 * Determines if @device_path is considered a block device path which is 
 * only
 * used in implementation of the OS. This is primarily used for hiding
 * mounted volumes that are intended as APIs for programs to read, and sy
 * stem
 * administrators at a shell; rather than something that should, for exam
 * ple,
 * appear in a GUI. For example, the Linux `/proc` filesystem.
 * The list of device paths considered ‘system’ ones may change over time
 * .
 */
export function unix_is_system_device_path(device_path: string): boolean;
/**
 * Determines if @fs_type is considered a type of file system which is on
 * ly
 * used in implementation of the OS. This is primarily used for hiding
 * mounted volumes that are intended as APIs for programs to read, and sy
 * stem
 * administrators at a shell; rather than something that should, for exam
 * ple,
 * appear in a GUI. For example, the Linux `/proc` filesystem.
 * The list of file system types considered ‘system’ ones may change over
 *  time.
 */
export function unix_is_system_fs_type(fs_type: string): boolean;
/**
 * Gets a #GUnixMountEntry for a given mount path. If @time_read
 * is set, it will be filled with a unix timestamp for checking
 * if the mounts have changed since with g_unix_mounts_changed_since().
 */
export function unix_mount_at(mount_path: string): [UnixMountEntry, number | null];
/**
 * Compares two unix mounts.
 */
export function unix_mount_compare(mount1: UnixMountEntry, mount2: UnixMountEntry): number;
/**
 * Makes a copy of @mount_entry.
 */
export function unix_mount_copy(mount_entry: UnixMountEntry): UnixMountEntry;
/**
 * Gets a #GUnixMountEntry for a given file path. If @time_read
 * is set, it will be filled with a unix timestamp for checking
 * if the mounts have changed since with g_unix_mounts_changed_since().
 */
export function unix_mount_for(file_path: string): [UnixMountEntry, number | null];
/**
 * Frees a unix mount.
 */
export function unix_mount_free(mount_entry: UnixMountEntry): void;
/**
 * Gets the device path for a unix mount.
 */
export function unix_mount_get_device_path(mount_entry: UnixMountEntry): string;
/**
 * Gets the filesystem type for the unix mount.
 */
export function unix_mount_get_fs_type(mount_entry: UnixMountEntry): string;
/**
 * Gets the mount path for a unix mount.
 */
export function unix_mount_get_mount_path(mount_entry: UnixMountEntry): string;
/**
 * Gets a comma-separated list of mount options for the unix mount. For e
 * xample,
 * `rw,relatime,seclabel,data=ordered`.
 * This is similar to g_unix_mount_point_get_options(), but it takes
 * a #GUnixMountEntry as an argument.
 */
export function unix_mount_get_options(mount_entry: UnixMountEntry): string | null;
/**
 * Gets the root of the mount within the filesystem. This is useful e.g. 
 * for
 * mounts created by bind operation, or btrfs subvolumes.
 * For example, the root path is equal to "/" for mount created by
 * "mount /dev/sda1 /mnt/foo" and "/bar" for
 * "mount --bind /mnt/foo/bar /mnt/bar".
 */
export function unix_mount_get_root_path(mount_entry: UnixMountEntry): string | null;
/**
 * Guesses whether a Unix mount can be ejected.
 */
export function unix_mount_guess_can_eject(mount_entry: UnixMountEntry): boolean;
/**
 * Guesses the icon of a Unix mount.
 */
export function unix_mount_guess_icon(mount_entry: UnixMountEntry): Icon;
/**
 * Guesses the name of a Unix mount.
 * The result is a translated string.
 */
export function unix_mount_guess_name(mount_entry: UnixMountEntry): string;
/**
 * Guesses whether a Unix mount should be displayed in the UI.
 */
export function unix_mount_guess_should_display(mount_entry: UnixMountEntry): boolean;
/**
 * Guesses the symbolic icon of a Unix mount.
 */
export function unix_mount_guess_symbolic_icon(mount_entry: UnixMountEntry): Icon;
/**
 * Checks if a unix mount is mounted read only.
 */
export function unix_mount_is_readonly(mount_entry: UnixMountEntry): boolean;
/**
 * Checks if a Unix mount is a system mount. This is the Boolean OR of
 * g_unix_is_system_fs_type(), g_unix_is_system_device_path() and
 * g_unix_is_mount_path_system_internal() on @mount_entry’s properties.
 * The definition of what a ‘system’ mount entry is may change over time 
 * as new
 * file system types and device paths are ignored.
 */
export function unix_mount_is_system_internal(mount_entry: UnixMountEntry): boolean;
/**
 * Checks if the unix mount points have changed since a given unix time.
 */
export function unix_mount_points_changed_since(time: number): boolean;
/**
 * Gets a #GList of #GUnixMountPoint containing the unix mount points.
 * If @time_read is set, it will be filled with the mount timestamp,
 * allowing for checking if the mounts have changed with
 * g_unix_mount_points_changed_since().
 */
export function unix_mount_points_get(): [GLib.List, number | null];
/**
 * Checks if the unix mounts have changed since a given unix time.
 */
export function unix_mounts_changed_since(time: number): boolean;
/**
 * Gets a #GList of #GUnixMountEntry containing the unix mounts.
 * If @time_read is set, it will be filled with the mount
 * timestamp, allowing for checking if the mounts have changed
 * with g_unix_mounts_changed_since().
 */
export function unix_mounts_get(): [GLib.List, number | null];
export type AsyncReadyCallback = (source_object: GObject.Object | null, res: AsyncResult, user_data: object | null) => void;
export type BusAcquiredCallback = (connection: DBusConnection, name: string, user_data: object | null) => void;
export type BusNameAcquiredCallback = (connection: DBusConnection, name: string, user_data: object | null) => void;
export type BusNameAppearedCallback = (connection: DBusConnection, name: string, name_owner: string, user_data: object | null) => void;
export type BusNameLostCallback = (connection: DBusConnection, name: string, user_data: object | null) => void;
export type BusNameVanishedCallback = (connection: DBusConnection, name: string, user_data: object | null) => void;
export type CancellableSourceFunc = (cancellable: Cancellable | null, user_data: object | null) => boolean;
export type DBusInterfaceGetPropertyFunc = (connection: DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, error: GLib.Error, user_data: object | null) => GLib.Variant;
export type DBusInterfaceMethodCallFunc = (connection: DBusConnection, sender: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, invocation: DBusMethodInvocation, user_data: object | null) => void;
export type DBusInterfaceSetPropertyFunc = (connection: DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, value: GLib.Variant, error: GLib.Error, user_data: object | null) => boolean;
export type DBusMessageFilterFunction = (connection: DBusConnection, message: DBusMessage, incoming: boolean, user_data: object | null) => DBusMessage | null;
export type DBusProxyTypeFunc = (manager: DBusObjectManagerClient, object_path: string, interface_name: string | null, user_data: object | null) => GType;
export type DBusSignalCallback = (connection: DBusConnection, sender_name: string, object_path: string, interface_name: string, signal_name: string, parameters: GLib.Variant, user_data: object | null) => void;
export type DBusSubtreeDispatchFunc = (connection: DBusConnection, sender: string, object_path: string, interface_name: string, node: string, out_user_data: object, user_data: object | null) => DBusInterfaceVTable;
export type DBusSubtreeIntrospectFunc = (connection: DBusConnection, sender: string, object_path: string, node: string, user_data: object | null) => DBusInterfaceInfo;
export type DatagramBasedSourceFunc = (datagram_based: DatagramBased, condition: GLib.IOCondition, user_data: object | null) => boolean;
export type DesktopAppLaunchCallback = (appinfo: DesktopAppInfo, pid: GLib.Pid, user_data: object | null) => void;
export type FileMeasureProgressCallback = (reporting: boolean, current_size: number, num_dirs: number, num_files: number, user_data: object | null) => void;
export type FileProgressCallback = (current_num_bytes: number, total_num_bytes: number, user_data: object | null) => void;
export type FileReadMoreCallback = (file_contents: string, file_size: number, callback_data: object | null) => boolean;
export type IOSchedulerJobFunc = (job: IOSchedulerJob, cancellable: Cancellable | null, user_data: object | null) => boolean;
export type PollableSourceFunc = (pollable_stream: GObject.Object, user_data: object | null) => boolean;
export type ReallocFunc = (data: object | null, size: number) => object | null;
export type SettingsBindGetMapping = (value: GObject.Value, variant: GLib.Variant, user_data: object | null) => boolean;
export type SettingsBindSetMapping = (value: GObject.Value, expected_type: GLib.VariantType, user_data: object | null) => GLib.Variant;
export type SettingsGetMapping = (value: GLib.Variant, user_data: object | null) => boolean;
export type SimpleAsyncThreadFunc = (res: SimpleAsyncResult, object: GObject.Object, cancellable: Cancellable | null) => void;
export type SocketSourceFunc = (socket: Socket, condition: GLib.IOCondition, user_data: object | null) => boolean;
export type TaskThreadFunc = (task: Task, source_object: GObject.Object, task_data: object | null, cancellable: Cancellable | null) => void;
export type VfsFileLookupFunc = (vfs: Vfs, identifier: string, user_data: object | null) => File;
export enum BusType {
    STARTER = -1,
    NONE = 0,
    SYSTEM = 1,
    SESSION = 2,
}
export enum ConverterResult {
    ERROR = 0,
    CONVERTED = 1,
    FINISHED = 2,
    FLUSHED = 3,
}
export enum CredentialsType {
    INVALID = 0,
    LINUX_UCRED = 1,
    FREEBSD_CMSGCRED = 2,
    OPENBSD_SOCKPEERCRED = 3,
    SOLARIS_UCRED = 4,
    NETBSD_UNPCBID = 5,
}
export enum DBusError {
    FAILED = 0,
    NO_MEMORY = 1,
    SERVICE_UNKNOWN = 2,
    NAME_HAS_NO_OWNER = 3,
    NO_REPLY = 4,
    IO_ERROR = 5,
    BAD_ADDRESS = 6,
    NOT_SUPPORTED = 7,
    LIMITS_EXCEEDED = 8,
    ACCESS_DENIED = 9,
    AUTH_FAILED = 10,
    NO_SERVER = 11,
    TIMEOUT = 12,
    NO_NETWORK = 13,
    ADDRESS_IN_USE = 14,
    DISCONNECTED = 15,
    INVALID_ARGS = 16,
    FILE_NOT_FOUND = 17,
    FILE_EXISTS = 18,
    UNKNOWN_METHOD = 19,
    TIMED_OUT = 20,
    MATCH_RULE_NOT_FOUND = 21,
    MATCH_RULE_INVALID = 22,
    SPAWN_EXEC_FAILED = 23,
    SPAWN_FORK_FAILED = 24,
    SPAWN_CHILD_EXITED = 25,
    SPAWN_CHILD_SIGNALED = 26,
    SPAWN_FAILED = 27,
    SPAWN_SETUP_FAILED = 28,
    SPAWN_CONFIG_INVALID = 29,
    SPAWN_SERVICE_INVALID = 30,
    SPAWN_SERVICE_NOT_FOUND = 31,
    SPAWN_PERMISSIONS_INVALID = 32,
    SPAWN_FILE_INVALID = 33,
    SPAWN_NO_MEMORY = 34,
    UNIX_PROCESS_ID_UNKNOWN = 35,
    INVALID_SIGNATURE = 36,
    INVALID_FILE_CONTENT = 37,
    SELINUX_SECURITY_CONTEXT_UNKNOWN = 38,
    ADT_AUDIT_DATA_UNKNOWN = 39,
    OBJECT_PATH_IN_USE = 40,
    UNKNOWN_OBJECT = 41,
    UNKNOWN_INTERFACE = 42,
    UNKNOWN_PROPERTY = 43,
    PROPERTY_READ_ONLY = 44,
}
export enum DBusMessageByteOrder {
    BIG_ENDIAN = 66,
    LITTLE_ENDIAN = 108,
}
export enum DBusMessageHeaderField {
    INVALID = 0,
    PATH = 1,
    INTERFACE = 2,
    MEMBER = 3,
    ERROR_NAME = 4,
    REPLY_SERIAL = 5,
    DESTINATION = 6,
    SENDER = 7,
    SIGNATURE = 8,
    NUM_UNIX_FDS = 9,
}
export enum DBusMessageType {
    INVALID = 0,
    METHOD_CALL = 1,
    METHOD_RETURN = 2,
    ERROR = 3,
    SIGNAL = 4,
}
export enum DataStreamByteOrder {
    BIG_ENDIAN = 0,
    LITTLE_ENDIAN = 1,
    HOST_ENDIAN = 2,
}
export enum DataStreamNewlineType {
    LF = 0,
    CR = 1,
    CR_LF = 2,
    ANY = 3,
}
export enum DriveStartStopType {
    UNKNOWN = 0,
    SHUTDOWN = 1,
    NETWORK = 2,
    MULTIDISK = 3,
    PASSWORD = 4,
}
export enum EmblemOrigin {
    UNKNOWN = 0,
    DEVICE = 1,
    LIVEMETADATA = 2,
    TAG = 3,
}
export enum FileAttributeStatus {
    UNSET = 0,
    SET = 1,
    ERROR_SETTING = 2,
}
export enum FileAttributeType {
    INVALID = 0,
    STRING = 1,
    BYTE_STRING = 2,
    BOOLEAN = 3,
    UINT32 = 4,
    INT32 = 5,
    UINT64 = 6,
    INT64 = 7,
    OBJECT = 8,
    STRINGV = 9,
}
export enum FileMonitorEvent {
    CHANGED = 0,
    CHANGES_DONE_HINT = 1,
    DELETED = 2,
    CREATED = 3,
    ATTRIBUTE_CHANGED = 4,
    PRE_UNMOUNT = 5,
    UNMOUNTED = 6,
    MOVED = 7,
    RENAMED = 8,
    MOVED_IN = 9,
    MOVED_OUT = 10,
}
export enum FileType {
    UNKNOWN = 0,
    REGULAR = 1,
    DIRECTORY = 2,
    SYMBOLIC_LINK = 3,
    SPECIAL = 4,
    SHORTCUT = 5,
    MOUNTABLE = 6,
}
export enum FilesystemPreviewType {
    IF_ALWAYS = 0,
    IF_LOCAL = 1,
    NEVER = 2,
}
export enum IOErrorEnum {
    FAILED = 0,
    NOT_FOUND = 1,
    EXISTS = 2,
    IS_DIRECTORY = 3,
    NOT_DIRECTORY = 4,
    NOT_EMPTY = 5,
    NOT_REGULAR_FILE = 6,
    NOT_SYMBOLIC_LINK = 7,
    NOT_MOUNTABLE_FILE = 8,
    FILENAME_TOO_LONG = 9,
    INVALID_FILENAME = 10,
    TOO_MANY_LINKS = 11,
    NO_SPACE = 12,
    INVALID_ARGUMENT = 13,
    PERMISSION_DENIED = 14,
    NOT_SUPPORTED = 15,
    NOT_MOUNTED = 16,
    ALREADY_MOUNTED = 17,
    CLOSED = 18,
    CANCELLED = 19,
    PENDING = 20,
    READ_ONLY = 21,
    CANT_CREATE_BACKUP = 22,
    WRONG_ETAG = 23,
    TIMED_OUT = 24,
    WOULD_RECURSE = 25,
    BUSY = 26,
    WOULD_BLOCK = 27,
    HOST_NOT_FOUND = 28,
    WOULD_MERGE = 29,
    FAILED_HANDLED = 30,
    TOO_MANY_OPEN_FILES = 31,
    NOT_INITIALIZED = 32,
    ADDRESS_IN_USE = 33,
    PARTIAL_INPUT = 34,
    INVALID_DATA = 35,
    DBUS_ERROR = 36,
    HOST_UNREACHABLE = 37,
    NETWORK_UNREACHABLE = 38,
    CONNECTION_REFUSED = 39,
    PROXY_FAILED = 40,
    PROXY_AUTH_FAILED = 41,
    PROXY_NEED_AUTH = 42,
    PROXY_NOT_ALLOWED = 43,
    BROKEN_PIPE = 44,
    CONNECTION_CLOSED = 44,
    NOT_CONNECTED = 45,
    MESSAGE_TOO_LARGE = 46,
}
export enum IOModuleScopeFlags {
    NONE = 0,
    BLOCK_DUPLICATES = 1,
}
export enum MountOperationResult {
    HANDLED = 0,
    ABORTED = 1,
    UNHANDLED = 2,
}
export enum NetworkConnectivity {
    LOCAL = 1,
    LIMITED = 2,
    PORTAL = 3,
    FULL = 4,
}
export enum NotificationPriority {
    NORMAL = 0,
    LOW = 1,
    HIGH = 2,
    URGENT = 3,
}
export enum PasswordSave {
    NEVER = 0,
    FOR_SESSION = 1,
    PERMANENTLY = 2,
}
export enum PollableReturn {
    FAILED = 0,
    OK = 1,
    WOULD_BLOCK = -27,
}
export enum ResolverError {
    NOT_FOUND = 0,
    TEMPORARY_FAILURE = 1,
    INTERNAL = 2,
}
export enum ResolverRecordType {
    SRV = 1,
    MX = 2,
    TXT = 3,
    SOA = 4,
    NS = 5,
}
export enum ResourceError {
    NOT_FOUND = 0,
    INTERNAL = 1,
}
export enum SocketClientEvent {
    RESOLVING = 0,
    RESOLVED = 1,
    CONNECTING = 2,
    CONNECTED = 3,
    PROXY_NEGOTIATING = 4,
    PROXY_NEGOTIATED = 5,
    TLS_HANDSHAKING = 6,
    TLS_HANDSHAKED = 7,
    COMPLETE = 8,
}
export enum SocketFamily {
    INVALID = 0,
    UNIX = 1,
    IPV4 = 2,
    IPV6 = 10,
}
export enum SocketListenerEvent {
    BINDING = 0,
    BOUND = 1,
    LISTENING = 2,
    LISTENED = 3,
}
export enum SocketProtocol {
    UNKNOWN = -1,
    DEFAULT = 0,
    TCP = 6,
    UDP = 17,
    SCTP = 132,
}
export enum SocketType {
    INVALID = 0,
    STREAM = 1,
    DATAGRAM = 2,
    SEQPACKET = 3,
}
export enum TlsAuthenticationMode {
    NONE = 0,
    REQUESTED = 1,
    REQUIRED = 2,
}
export enum TlsCertificateRequestFlags {
    NONE = 0,
}
export enum TlsDatabaseLookupFlags {
    NONE = 0,
    KEYPAIR = 1,
}
export enum TlsError {
    UNAVAILABLE = 0,
    MISC = 1,
    BAD_CERTIFICATE = 2,
    NOT_TLS = 3,
    HANDSHAKE = 4,
    CERTIFICATE_REQUIRED = 5,
    EOF = 6,
    INAPPROPRIATE_FALLBACK = 7,
}
export enum TlsInteractionResult {
    UNHANDLED = 0,
    HANDLED = 1,
    FAILED = 2,
}
export enum TlsRehandshakeMode {
    NEVER = 0,
    SAFELY = 1,
    UNSAFELY = 2,
}
export enum UnixSocketAddressType {
    INVALID = 0,
    ANONYMOUS = 1,
    PATH = 2,
    ABSTRACT = 3,
    ABSTRACT_PADDED = 4,
}
export enum ZlibCompressorFormat {
    ZLIB = 0,
    GZIP = 1,
    RAW = 2,
}
export enum AppInfoCreateFlags {
    NONE = 0,
    NEEDS_TERMINAL = 1,
    SUPPORTS_URIS = 2,
    SUPPORTS_STARTUP_NOTIFICATION = 4,
}
export enum ApplicationFlags {
    FLAGS_NONE = 0,
    IS_SERVICE = 1,
    IS_LAUNCHER = 2,
    HANDLES_OPEN = 4,
    HANDLES_COMMAND_LINE = 8,
    SEND_ENVIRONMENT = 16,
    NON_UNIQUE = 32,
    CAN_OVERRIDE_APP_ID = 64,
    ALLOW_REPLACEMENT = 128,
    REPLACE = 256,
}
export enum AskPasswordFlags {
    NEED_PASSWORD = 1,
    NEED_USERNAME = 2,
    NEED_DOMAIN = 4,
    SAVING_SUPPORTED = 8,
    ANONYMOUS_SUPPORTED = 16,
    TCRYPT = 32,
}
export enum BusNameOwnerFlags {
    NONE = 0,
    ALLOW_REPLACEMENT = 1,
    REPLACE = 2,
    DO_NOT_QUEUE = 4,
}
export enum BusNameWatcherFlags {
    NONE = 0,
    AUTO_START = 1,
}
export enum ConverterFlags {
    NONE = 0,
    INPUT_AT_END = 1,
    FLUSH = 2,
}
export enum DBusCallFlags {
    NONE = 0,
    NO_AUTO_START = 1,
    ALLOW_INTERACTIVE_AUTHORIZATION = 2,
}
export enum DBusCapabilityFlags {
    NONE = 0,
    UNIX_FD_PASSING = 1,
}
export enum DBusConnectionFlags {
    NONE = 0,
    AUTHENTICATION_CLIENT = 1,
    AUTHENTICATION_SERVER = 2,
    AUTHENTICATION_ALLOW_ANONYMOUS = 4,
    MESSAGE_BUS_CONNECTION = 8,
    DELAY_MESSAGE_PROCESSING = 16,
}
export enum DBusInterfaceSkeletonFlags {
    NONE = 0,
    HANDLE_METHOD_INVOCATIONS_IN_THREAD = 1,
}
export enum DBusMessageFlags {
    NONE = 0,
    NO_REPLY_EXPECTED = 1,
    NO_AUTO_START = 2,
    ALLOW_INTERACTIVE_AUTHORIZATION = 4,
}
export enum DBusObjectManagerClientFlags {
    NONE = 0,
    DO_NOT_AUTO_START = 1,
}
export enum DBusPropertyInfoFlags {
    NONE = 0,
    READABLE = 1,
    WRITABLE = 2,
}
export enum DBusProxyFlags {
    NONE = 0,
    DO_NOT_LOAD_PROPERTIES = 1,
    DO_NOT_CONNECT_SIGNALS = 2,
    DO_NOT_AUTO_START = 4,
    GET_INVALIDATED_PROPERTIES = 8,
    DO_NOT_AUTO_START_AT_CONSTRUCTION = 16,
}
export enum DBusSendMessageFlags {
    NONE = 0,
    PRESERVE_SERIAL = 1,
}
export enum DBusServerFlags {
    NONE = 0,
    RUN_IN_THREAD = 1,
    AUTHENTICATION_ALLOW_ANONYMOUS = 2,
}
export enum DBusSignalFlags {
    NONE = 0,
    NO_MATCH_RULE = 1,
    MATCH_ARG0_NAMESPACE = 2,
    MATCH_ARG0_PATH = 4,
}
export enum DBusSubtreeFlags {
    NONE = 0,
    DISPATCH_TO_UNENUMERATED_NODES = 1,
}
export enum DriveStartFlags {
    NONE = 0,
}
export enum FileAttributeInfoFlags {
    NONE = 0,
    COPY_WITH_FILE = 1,
    COPY_WHEN_MOVED = 2,
}
export enum FileCopyFlags {
    NONE = 0,
    OVERWRITE = 1,
    BACKUP = 2,
    NOFOLLOW_SYMLINKS = 4,
    ALL_METADATA = 8,
    NO_FALLBACK_FOR_MOVE = 16,
    TARGET_DEFAULT_PERMS = 32,
}
export enum FileCreateFlags {
    NONE = 0,
    PRIVATE = 1,
    REPLACE_DESTINATION = 2,
}
export enum FileMeasureFlags {
    NONE = 0,
    REPORT_ANY_ERROR = 2,
    APPARENT_SIZE = 4,
    NO_XDEV = 8,
}
export enum FileMonitorFlags {
    NONE = 0,
    WATCH_MOUNTS = 1,
    SEND_MOVED = 2,
    WATCH_HARD_LINKS = 4,
    WATCH_MOVES = 8,
}
export enum FileQueryInfoFlags {
    NONE = 0,
    NOFOLLOW_SYMLINKS = 1,
}
export enum IOStreamSpliceFlags {
    NONE = 0,
    CLOSE_STREAM1 = 1,
    CLOSE_STREAM2 = 2,
    WAIT_FOR_BOTH = 4,
}
export enum MountMountFlags {
    NONE = 0,
}
export enum MountUnmountFlags {
    NONE = 0,
    FORCE = 1,
}
export enum OutputStreamSpliceFlags {
    NONE = 0,
    CLOSE_SOURCE = 1,
    CLOSE_TARGET = 2,
}
export enum ResolverNameLookupFlags {
    DEFAULT = 0,
    IPV4_ONLY = 1,
    IPV6_ONLY = 2,
}
export enum ResourceFlags {
    NONE = 0,
    COMPRESSED = 1,
}
export enum ResourceLookupFlags {
    NONE = 0,
}
export enum SettingsBindFlags {
    DEFAULT = 0,
    GET = 1,
    SET = 2,
    NO_SENSITIVITY = 4,
    GET_NO_CHANGES = 8,
    INVERT_BOOLEAN = 16,
}
export enum SocketMsgFlags {
    NONE = 0,
    OOB = 1,
    PEEK = 2,
    DONTROUTE = 4,
}
export enum SubprocessFlags {
    NONE = 0,
    STDIN_PIPE = 1,
    STDIN_INHERIT = 2,
    STDOUT_PIPE = 4,
    STDOUT_SILENCE = 8,
    STDERR_PIPE = 16,
    STDERR_SILENCE = 32,
    STDERR_MERGE = 64,
    INHERIT_FDS = 128,
}
export enum TestDBusFlags {
    NONE = 0,
}
export enum TlsCertificateFlags {
    UNKNOWN_CA = 1,
    BAD_IDENTITY = 2,
    NOT_ACTIVATED = 4,
    EXPIRED = 8,
    REVOKED = 16,
    INSECURE = 32,
    GENERIC_ERROR = 64,
    VALIDATE_ALL = 127,
}
export enum TlsDatabaseVerifyFlags {
    NONE = 0,
}
export enum TlsPasswordFlags {
    NONE = 0,
    RETRY = 2,
    MANY_TRIES = 4,
    FINAL_TRY = 8,
}
export class AppInfoMonitor  {
    constructor(config?: properties);
    static get(): AppInfoMonitor;
}
export class AppLaunchContext extends GObject.Object {
    constructor(config?: properties);
    get_display(info: AppInfo, files: GLib.List): string;
    get_environment(): string[];
    get_startup_notify_id(info: AppInfo, files: GLib.List): string;
    launch_failed(startup_notify_id: string): void;
    setenv(variable: string, value: string): void;
    unsetenv(variable: string): void;
    vfunc_get_display(info: AppInfo, files: GLib.List): string;
    vfunc_get_startup_notify_id(info: AppInfo, files: GLib.List): string;
    vfunc_launch_failed(startup_notify_id: string): void;
    vfunc_launched(info: AppInfo, platform_data: GLib.Variant): void;
}
export class Application extends GObject.Object {
    constructor(config?: properties);
    action_group: ActionGroup;
    application_id: string;
    flags: ApplicationFlags;
    inactivity_timeout: number;
    readonly is_busy: boolean;
    readonly is_registered: boolean;
    readonly is_remote: boolean;
    resource_base_path: string;
    activate(): void;
    add_main_option(long_name: string, short_name: number, flags: GLib.OptionFlags, arg: GLib.OptionArg, description: string, arg_description: string | null): void;
    add_main_option_entries(entries: GLib.OptionEntry[]): void;
    add_option_group(group: GLib.OptionGroup): void;
    bind_busy_property(object: GObject.Object, property: string): void;
    get_application_id(): string;
    get_dbus_connection(): DBusConnection;
    get_dbus_object_path(): string;
    get_flags(): ApplicationFlags;
    get_inactivity_timeout(): number;
    get_is_busy(): boolean;
    get_is_registered(): boolean;
    get_is_remote(): boolean;
    get_resource_base_path(): string | null;
    hold(): void;
    mark_busy(): void;
    open(files: File[], n_files: number, hint: string): void;
    quit(): void;
    register(cancellable: Cancellable | null): boolean;
    release(): void;
    run(argc: number, argv: string[] | null): number;
    send_notification(id: string | null, notification: Notification): void;
    set_action_group(action_group: ActionGroup | null): void;
    set_application_id(application_id: string | null): void;
    set_default(): void;
    set_flags(flags: ApplicationFlags): void;
    set_inactivity_timeout(inactivity_timeout: number): void;
    set_option_context_description(description: string | null): void;
    set_option_context_parameter_string(parameter_string: string | null): void;
    set_option_context_summary(summary: string | null): void;
    set_resource_base_path(resource_path: string | null): void;
    unbind_busy_property(object: GObject.Object, property: string): void;
    unmark_busy(): void;
    withdraw_notification(id: string): void;
    vfunc_activate(): void;
    vfunc_add_platform_data(builder: GLib.VariantBuilder): void;
    vfunc_after_emit(platform_data: GLib.Variant): void;
    vfunc_before_emit(platform_data: GLib.Variant): void;
    vfunc_command_line(command_line: ApplicationCommandLine): number;
    vfunc_dbus_register(connection: DBusConnection, object_path: string): boolean;
    vfunc_dbus_unregister(connection: DBusConnection, object_path: string): void;
    vfunc_handle_local_options(options: GLib.VariantDict): number;
    vfunc_local_command_line(_arguments: string[]): [boolean, string[],number];
    vfunc_name_lost(): boolean;
    vfunc_open(files: File[], n_files: number, hint: string): void;
    vfunc_quit_mainloop(): void;
    vfunc_run_mainloop(): void;
    vfunc_shutdown(): void;
    vfunc_startup(): void;
    static get_default(): Application;
    static id_is_valid(application_id: string): boolean;
}
export class ApplicationCommandLine  {
    constructor(config?: properties);
    "arguments": GLib.Variant;
    readonly is_remote: boolean;
    options: GLib.Variant;
    platform_data: GLib.Variant;
    readonly priv: ApplicationCommandLinePrivate;
    create_file_for_arg(arg: string): File;
    get_arguments(): [string[], number | null];
    get_cwd(): string | null;
    get_environ(): string[];
    get_exit_status(): number;
    get_is_remote(): boolean;
    get_options_dict(): GLib.VariantDict;
    get_platform_data(): GLib.Variant | null;
    get_stdin(): InputStream;
    getenv(name: string): string;
    set_exit_status(exit_status: number): void;
}
export class BufferedInputStream extends FilterInputStream {
    constructor(config?: properties);
    buffer_size: number;static new_sized(base_stream: InputStream, size: number): InputStream;
    fill(count: number, cancellable: Cancellable | null): number;
    fill_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    fill_finish(result: AsyncResult): number;
    get_available(): number;
    get_buffer_size(): number;
    peek(buffer: number[], offset: number, count: number): number;
    peek_buffer(): [number[], number];
    read_byte(cancellable: Cancellable | null): number;
    set_buffer_size(size: number): void;
    vfunc_fill(count: number, cancellable: Cancellable | null): number;
    vfunc_fill_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    vfunc_fill_finish(result: AsyncResult): number;
}
export class BufferedOutputStream extends FilterOutputStream {
    constructor(config?: properties);
    auto_grow: boolean;
    buffer_size: number;static new_sized(base_stream: OutputStream, size: number): OutputStream;
    get_auto_grow(): boolean;
    get_buffer_size(): number;
    set_auto_grow(auto_grow: boolean): void;
    set_buffer_size(size: number): void;
}
export class BytesIcon extends GObject.Object {
    constructor(config?: properties);
    bytes: GLib.Bytes;
    get_bytes(): GLib.Bytes;
}
export class Cancellable extends GObject.Object {
    constructor(config?: properties);
    cancel(): void;
    connect(callback: GObject.Callback, data: object | null, data_destroy_func: GLib.DestroyNotify | null): number;
    disconnect(handler_id: number): void;
    get_fd(): number;
    is_cancelled(): boolean;
    make_pollfd(pollfd: GLib.PollFD): boolean;
    pop_current(): void;
    push_current(): void;
    release_fd(): void;
    reset(): void;
    set_error_if_cancelled(): boolean;
    vfunc_cancelled(): void;
    static get_current(): Cancellable | null;
}
export class CharsetConverter extends GObject.Object {
    constructor(config?: properties);
    from_charset: string;
    to_charset: string;
    use_fallback: boolean;
    get_num_fallbacks(): number;
    get_use_fallback(): boolean;
    set_use_fallback(use_fallback: boolean): void;
}
export class ConverterInputStream extends FilterInputStream {
    constructor(config?: properties);
    converter: Converter;
    get_converter(): Converter;
}
export class ConverterOutputStream extends FilterOutputStream {
    constructor(config?: properties);
    converter: Converter;
    get_converter(): Converter;
}
export class Credentials extends GObject.Object {
    constructor(config?: properties);
    get_unix_pid(): number;
    get_unix_user(): number;
    is_same_user(other_credentials: Credentials): boolean;
    set_native(native_type: CredentialsType, _native: object): void;
    set_unix_user(uid: number): boolean;
    to_string(): string;
}
export class DBusActionGroup  {
    constructor(config?: properties);
    static get(connection: DBusConnection, bus_name: string | null, object_path: string): DBusActionGroup;
}
export class DBusAuthObserver extends GObject.Object {
    constructor(config?: properties);
    allow_mechanism(mechanism: string): boolean;
    authorize_authenticated_peer(stream: IOStream, credentials: Credentials | null): boolean;
}
export class DBusConnection extends GObject.Object {
    constructor(config?: properties);
    address: string;
    authentication_observer: DBusAuthObserver;
    readonly capabilities: DBusCapabilityFlags;
    readonly closed: boolean;
    exit_on_close: boolean;
    flags: DBusConnectionFlags;
    guid: string;
    stream: IOStream;
    readonly unique_name: string;static new_finish(res: AsyncResult): DBusConnection;
    static new_finish(...args: never[]): never;
    static new_for_address_finish(res: AsyncResult): DBusConnection;
    static new_for_address_finish(...args: never[]): never;
    static new_for_address_sync(address: string, flags: DBusConnectionFlags, observer: DBusAuthObserver | null, cancellable: Cancellable | null): DBusConnection;
    static new_for_address_sync(...args: never[]): never;
    static new_sync(stream: IOStream, guid: string | null, flags: DBusConnectionFlags, observer: DBusAuthObserver | null, cancellable: Cancellable | null): DBusConnection;
    static new_sync(...args: never[]): never;
    add_filter(filter_function: DBusMessageFilterFunction, user_data: object | null, user_data_free_func: GLib.DestroyNotify): number;
    call(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    call_finish(res: AsyncResult): GLib.Variant;
    call_sync(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null): GLib.Variant;
    call_with_unix_fd_list(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    call_with_unix_fd_list_finish(res: AsyncResult): [GLib.Variant, UnixFDList | null];
    call_with_unix_fd_list_sync(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, cancellable: Cancellable | null): [GLib.Variant, UnixFDList | null];
    close(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    close_finish(res: AsyncResult): boolean;
    close_sync(cancellable: Cancellable | null): boolean;
    emit_signal(destination_bus_name: string | null, object_path: string, interface_name: string, signal_name: string, parameters: GLib.Variant | null): boolean;
    export_action_group(object_path: string, action_group: ActionGroup): number;
    export_menu_model(object_path: string, menu: MenuModel): number;
    flush(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    flush_finish(res: AsyncResult): boolean;
    flush_sync(cancellable: Cancellable | null): boolean;
    get_capabilities(): DBusCapabilityFlags;
    get_exit_on_close(): boolean;
    get_flags(): DBusConnectionFlags;
    get_guid(): string;
    get_last_serial(): number;
    get_peer_credentials(): Credentials | null;
    get_stream(): IOStream;
    get_unique_name(): string | null;
    is_closed(): boolean;
    register_object(object_path: string, interface_info: DBusInterfaceInfo, vtable: DBusInterfaceVTable | null, user_data: object | null, user_data_free_func: GLib.DestroyNotify): number;
    register_object_with_closures(object_path: string, interface_info: DBusInterfaceInfo, method_call_closure: GObject.Closure | null, get_property_closure: GObject.Closure | null, set_property_closure: GObject.Closure | null): number;
    register_subtree(object_path: string, vtable: DBusSubtreeVTable, flags: DBusSubtreeFlags, user_data: object | null, user_data_free_func: GLib.DestroyNotify): number;
    remove_filter(filter_id: number): void;
    send_message(message: DBusMessage, flags: DBusSendMessageFlags): [boolean, number | null];
    send_message_with_reply(message: DBusMessage, flags: DBusSendMessageFlags, timeout_msec: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): [number | null];
    send_message_with_reply_finish(res: AsyncResult): DBusMessage;
    send_message_with_reply_sync(message: DBusMessage, flags: DBusSendMessageFlags, timeout_msec: number, cancellable: Cancellable | null): [DBusMessage, number | null];
    set_exit_on_close(exit_on_close: boolean): void;
    signal_subscribe(sender: string | null, interface_name: string | null, member: string | null, object_path: string | null, arg0: string | null, flags: DBusSignalFlags, callback: DBusSignalCallback, user_data: object | null, user_data_free_func: GLib.DestroyNotify | null): number;
    signal_unsubscribe(subscription_id: number): void;
    start_message_processing(): void;
    unexport_action_group(export_id: number): void;
    unexport_menu_model(export_id: number): void;
    unregister_object(registration_id: number): boolean;
    unregister_subtree(registration_id: number): boolean;
    static new(stream: IOStream, guid: string | null, flags: DBusConnectionFlags, observer: DBusAuthObserver | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    static new_for_address(address: string, flags: DBusConnectionFlags, observer: DBusAuthObserver | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
}
export class DBusInterfaceSkeleton  {
    constructor(config?: properties);
    g_flags: DBusInterfaceSkeletonFlags;
    readonly priv: DBusInterfaceSkeletonPrivate;
    ["export"](connection: DBusConnection, object_path: string): boolean;
    flush(): void;
    get_connection(): DBusConnection;
    get_connections(): GLib.List;
    get_flags(): DBusInterfaceSkeletonFlags;
    get_info(): DBusInterfaceInfo;
    get_object_path(): string;
    get_properties(): GLib.Variant;
    has_connection(connection: DBusConnection): boolean;
    set_flags(flags: DBusInterfaceSkeletonFlags): void;
    unexport(): void;
    unexport_from_connection(connection: DBusConnection): void;
}
export class DBusMenuModel  {
    constructor(config?: properties);
    static get(connection: DBusConnection, bus_name: string | null, object_path: string): DBusMenuModel;
}
export class DBusMessage extends GObject.Object {
    constructor(config?: properties);
    readonly locked: boolean;static new_from_blob(blob: number[], blob_len: number, capabilities: DBusCapabilityFlags): DBusMessage;
    static new_from_blob(...args: never[]): never;
    static new_method_call(name: string | null, path: string, interface_: string | null, method: string): DBusMessage;
    static new_method_call(...args: never[]): never;
    static new_signal(path: string, interface_: string, signal: string): DBusMessage;
    static new_signal(...args: never[]): never;
    copy(): DBusMessage;
    get_arg0(): string;
    get_body(): GLib.Variant;
    get_byte_order(): DBusMessageByteOrder;
    get_destination(): string;
    get_error_name(): string;
    get_flags(): DBusMessageFlags;
    get_header(header_field: DBusMessageHeaderField): GLib.Variant | null;
    get_header_fields(): number[];
    get_interface(): string;
    get_locked(): boolean;
    get_member(): string;
    get_message_type(): DBusMessageType;
    get_num_unix_fds(): number;
    get_path(): string;
    get_reply_serial(): number;
    get_sender(): string;
    get_serial(): number;
    get_signature(): string;
    get_unix_fd_list(): UnixFDList;
    lock(): void;
    new_method_error_literal(error_name: string, error_message: string): DBusMessage;
    new_method_reply(): DBusMessage;
    print(indent: number): string;
    set_body(body: GLib.Variant): void;
    set_byte_order(byte_order: DBusMessageByteOrder): void;
    set_destination(value: string): void;
    set_error_name(value: string): void;
    set_flags(flags: DBusMessageFlags): void;
    set_header(header_field: DBusMessageHeaderField, value: GLib.Variant | null): void;
    set_interface(value: string): void;
    set_member(value: string): void;
    set_message_type(type: DBusMessageType): void;
    set_num_unix_fds(value: number): void;
    set_path(value: string): void;
    set_reply_serial(value: number): void;
    set_sender(value: string): void;
    set_serial(serial: number): void;
    set_signature(value: string): void;
    set_unix_fd_list(fd_list: UnixFDList | null): void;
    to_blob(capabilities: DBusCapabilityFlags): [number[], number];
    to_gerror(): boolean;
    static bytes_needed(blob: number[], blob_len: number): number;
}
export class DBusMethodInvocation  {
    constructor(config?: properties);
    get_connection(): DBusConnection;
    get_interface_name(): string;
    get_message(): DBusMessage;
    get_method_info(): DBusMethodInfo;
    get_method_name(): string;
    get_object_path(): string;
    get_parameters(): GLib.Variant;
    get_property_info(): DBusPropertyInfo;
    get_sender(): string;
    return_dbus_error(error_name: string, error_message: string): void;
    return_error_literal(domain: GLib.Quark, code: number, message: string): void;
    return_gerror(error: GLib.Error): void;
    return_value(parameters: GLib.Variant | null): void;
    return_value_with_unix_fd_list(parameters: GLib.Variant | null, fd_list: UnixFDList | null): void;
}
export class DBusObjectManagerClient extends GObject.Object {
    constructor(config?: properties);
    bus_type: BusType;
    connection: DBusConnection;
    flags: DBusObjectManagerClientFlags;
    get_proxy_type_destroy_notify: object;
    get_proxy_type_func: object;
    get_proxy_type_user_data: object;
    name: string;
    readonly name_owner: string;
    object_path: string;static new_finish(res: AsyncResult): DBusObjectManagerClient;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: AsyncResult): DBusObjectManagerClient;
    static new_for_bus_finish(...args: never[]): never;
    static new_for_bus_sync(bus_type: BusType, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: DBusProxyTypeFunc | null, get_proxy_type_user_data: object | null, get_proxy_type_destroy_notify: GLib.DestroyNotify | null, cancellable: Cancellable | null): DBusObjectManagerClient;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(connection: DBusConnection, flags: DBusObjectManagerClientFlags, name: string | null, object_path: string, get_proxy_type_func: DBusProxyTypeFunc | null, get_proxy_type_user_data: object | null, get_proxy_type_destroy_notify: GLib.DestroyNotify | null, cancellable: Cancellable | null): DBusObjectManagerClient;
    static new_sync(...args: never[]): never;
    get_connection(): DBusConnection;
    get_flags(): DBusObjectManagerClientFlags;
    get_name(): string;
    get_name_owner(): string | null;
    vfunc_interface_proxy_properties_changed(object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string): void;
    vfunc_interface_proxy_signal(object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void;
    static new(connection: DBusConnection, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: DBusProxyTypeFunc | null, get_proxy_type_user_data: object | null, get_proxy_type_destroy_notify: GLib.DestroyNotify | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    static new_for_bus(bus_type: BusType, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: DBusProxyTypeFunc | null, get_proxy_type_user_data: object | null, get_proxy_type_destroy_notify: GLib.DestroyNotify | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
}
export class DBusObjectManagerServer extends GObject.Object {
    constructor(config?: properties);
    connection: DBusConnection;
    object_path: string;
    ["export"](object: DBusObjectSkeleton): void;
    export_uniquely(object: DBusObjectSkeleton): void;
    get_connection(): DBusConnection;
    is_exported(object: DBusObjectSkeleton): boolean;
    set_connection(connection: DBusConnection | null): void;
    unexport(object_path: string): boolean;
}
export class DBusObjectProxy extends GObject.Object {
    constructor(config?: properties);
    g_connection: DBusConnection;
    g_object_path: string;
    get_connection(): DBusConnection;
}
export class DBusObjectSkeleton extends GObject.Object {
    constructor(config?: properties);
    g_object_path: string;
    add_interface(interface_: DBusInterfaceSkeleton): void;
    flush(): void;
    remove_interface(interface_: DBusInterfaceSkeleton): void;
    remove_interface_by_name(interface_name: string): void;
    set_object_path(object_path: string): void;
    vfunc_authorize_method(interface_: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): boolean;
}
export class DBusProxy extends GObject.Object {
    constructor(config?: properties);
    g_bus_type: BusType;
    g_connection: DBusConnection;
    g_default_timeout: number;
    g_flags: DBusProxyFlags;
    g_interface_info: DBusInterfaceInfo;
    g_interface_name: string;
    g_name: string;
    readonly g_name_owner: string;
    g_object_path: string;static new_finish(res: AsyncResult): DBusProxy;
    static new_finish(...args: never[]): never;
    static new_for_bus_finish(res: AsyncResult): DBusProxy;
    static new_for_bus_finish(...args: never[]): never;
    static new_for_bus_sync(bus_type: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Cancellable | null): DBusProxy;
    static new_for_bus_sync(...args: never[]): never;
    static new_sync(connection: DBusConnection, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Cancellable | null): DBusProxy;
    static new_sync(...args: never[]): never;
    call(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    call_finish(res: AsyncResult): GLib.Variant;
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null): GLib.Variant;
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    call_with_unix_fd_list_finish(res: AsyncResult): [GLib.Variant, UnixFDList | null];
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, cancellable: Cancellable | null): [GLib.Variant, UnixFDList | null];
    get_cached_property(property_name: string): GLib.Variant | null;
    get_cached_property_names(): string[] | null;
    get_connection(): DBusConnection;
    get_default_timeout(): number;
    get_flags(): DBusProxyFlags;
    get_interface_info(): DBusInterfaceInfo | null;
    get_interface_name(): string;
    get_name(): string;
    get_name_owner(): string | null;
    get_object_path(): string;
    set_cached_property(property_name: string, value: GLib.Variant | null): void;
    set_default_timeout(timeout_msec: number): void;
    set_interface_info(info: DBusInterfaceInfo | null): void;
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void;
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void;
    static new(connection: DBusConnection, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    static new_for_bus(bus_type: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
}
export class DBusServer extends GObject.Object {
    constructor(config?: properties);
    readonly active: boolean;
    address: string;
    authentication_observer: DBusAuthObserver;
    readonly client_address: string;
    flags: DBusServerFlags;
    guid: string;static new_sync(address: string, flags: DBusServerFlags, guid: string, observer: DBusAuthObserver | null, cancellable: Cancellable | null): DBusServer;
    static new_sync(...args: never[]): never;
    get_client_address(): string;
    get_flags(): DBusServerFlags;
    get_guid(): string;
    is_active(): boolean;
    start(): void;
    stop(): void;
}
export class DataInputStream extends BufferedInputStream {
    constructor(config?: properties);
    byte_order: DataStreamByteOrder;
    newline_type: DataStreamNewlineType;
    get_byte_order(): DataStreamByteOrder;
    get_newline_type(): DataStreamNewlineType;
    read_byte(cancellable: Cancellable | null): number;
    read_byte(...args: never[]): never;
    read_int16(cancellable: Cancellable | null): number;
    read_int32(cancellable: Cancellable | null): number;
    read_int64(cancellable: Cancellable | null): number;
    read_line(cancellable: Cancellable | null): [number[] | null, number | null];
    read_line_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    read_line_finish(result: AsyncResult): [number[] | null, number | null];
    read_line_finish_utf8(result: AsyncResult): [string | null, number | null];
    read_line_utf8(cancellable: Cancellable | null): [string | null, number | null];
    read_uint16(cancellable: Cancellable | null): number;
    read_uint32(cancellable: Cancellable | null): number;
    read_uint64(cancellable: Cancellable | null): number;
    read_until(stop_chars: string, cancellable: Cancellable | null): [string, number | null];
    read_until_async(stop_chars: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    read_until_finish(result: AsyncResult): [string, number | null];
    read_upto(stop_chars: string, stop_chars_len: number, cancellable: Cancellable | null): [string, number | null];
    read_upto_async(stop_chars: string, stop_chars_len: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    read_upto_finish(result: AsyncResult): [string, number | null];
    set_byte_order(order: DataStreamByteOrder): void;
    set_newline_type(type: DataStreamNewlineType): void;
}
export class DataOutputStream extends FilterOutputStream {
    constructor(config?: properties);
    byte_order: DataStreamByteOrder;
    get_byte_order(): DataStreamByteOrder;
    put_byte(data: number, cancellable: Cancellable | null): boolean;
    put_int16(data: number, cancellable: Cancellable | null): boolean;
    put_int32(data: number, cancellable: Cancellable | null): boolean;
    put_int64(data: number, cancellable: Cancellable | null): boolean;
    put_string(str: string, cancellable: Cancellable | null): boolean;
    put_uint16(data: number, cancellable: Cancellable | null): boolean;
    put_uint32(data: number, cancellable: Cancellable | null): boolean;
    put_uint64(data: number, cancellable: Cancellable | null): boolean;
    set_byte_order(order: DataStreamByteOrder): void;
}
export class DesktopAppInfo extends GObject.Object {
    constructor(config?: properties);
    filename: string;static new_from_filename(filename: string): DesktopAppInfo | null;
    static new_from_filename(...args: never[]): never;
    static new_from_keyfile(key_file: GLib.KeyFile): DesktopAppInfo | null;
    static new_from_keyfile(...args: never[]): never;
    get_action_name(action_name: string): string;
    get_boolean(key: string): boolean;
    get_categories(): string;
    get_filename(): string;
    get_generic_name(): string;
    get_is_hidden(): boolean;
    get_keywords(): string[];
    get_locale_string(key: string): string | null;
    get_nodisplay(): boolean;
    get_show_in(desktop_env: string | null): boolean;
    get_startup_wm_class(): string;
    get_string(key: string): string;
    get_string_list(key: string): [string[], number | null];
    has_key(key: string): boolean;
    launch_action(action_name: string, launch_context: AppLaunchContext | null): void;
    launch_uris_as_manager(uris: GLib.List, launch_context: AppLaunchContext | null, spawn_flags: GLib.SpawnFlags, user_setup: GLib.SpawnChildSetupFunc | null, user_setup_data: object | null, pid_callback: DesktopAppLaunchCallback | null, pid_callback_data: object | null): boolean;
    launch_uris_as_manager_with_fds(uris: GLib.List, launch_context: AppLaunchContext | null, spawn_flags: GLib.SpawnFlags, user_setup: GLib.SpawnChildSetupFunc | null, user_setup_data: object | null, pid_callback: DesktopAppLaunchCallback | null, pid_callback_data: object | null, stdin_fd: number, stdout_fd: number, stderr_fd: number): boolean;
    list_actions(): string[];
    static get_implementations(_interface: string): GLib.List;
    static search(search_string: string): string[][];
    static set_desktop_env(desktop_env: string): void;
}
export class Emblem extends GObject.Object {
    constructor(config?: properties);
    icon: GObject.Object;
    origin: EmblemOrigin;static new_with_origin(icon: Icon, origin: EmblemOrigin): Emblem;
    static new_with_origin(...args: never[]): never;
    get_icon(): Icon;
    get_origin(): EmblemOrigin;
}
export class EmblemedIcon extends GObject.Object {
    constructor(config?: properties);
    gicon: Icon;
    add_emblem(emblem: Emblem): void;
    clear_emblems(): void;
    get_emblems(): GLib.List;
    get_icon(): Icon;
}
export class FileEnumerator  {
    constructor(config?: properties);
    container: File;
    readonly priv: FileEnumeratorPrivate;
    close(cancellable: Cancellable | null): boolean;
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    close_finish(result: AsyncResult): boolean;
    get_child(info: FileInfo): File;
    get_container(): File;
    has_pending(): boolean;
    is_closed(): boolean;
    iterate(cancellable: Cancellable | null): [boolean, FileInfo | null,File | null];
    next_file(cancellable: Cancellable | null): FileInfo | null;
    next_files_async(num_files: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    next_files_finish(result: AsyncResult): GLib.List;
    set_pending(pending: boolean): void;
}
export class FileIOStream  {
    constructor(config?: properties);
    readonly priv: FileIOStreamPrivate;
    get_etag(): string;
    query_info(attributes: string, cancellable: Cancellable | null): FileInfo;
    query_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    query_info_finish(result: AsyncResult): FileInfo;
}
export class FileIcon extends GObject.Object {
    constructor(config?: properties);
    file: File;
    get_file(): File;
}
export class FileInfo extends GObject.Object {
    constructor(config?: properties);
    clear_status(): void;
    copy_into(dest_info: FileInfo): void;
    dup(): FileInfo;
    get_attribute_as_string(attribute: string): string;
    get_attribute_boolean(attribute: string): boolean;
    get_attribute_byte_string(attribute: string): string;
    get_attribute_data(attribute: string): [boolean, FileAttributeType | null,object | null,FileAttributeStatus | null];
    get_attribute_int32(attribute: string): number;
    get_attribute_int64(attribute: string): number;
    get_attribute_object(attribute: string): GObject.Object;
    get_attribute_status(attribute: string): FileAttributeStatus;
    get_attribute_string(attribute: string): string;
    get_attribute_stringv(attribute: string): string[];
    get_attribute_type(attribute: string): FileAttributeType;
    get_attribute_uint32(attribute: string): number;
    get_attribute_uint64(attribute: string): number;
    get_content_type(): string;
    get_deletion_date(): GLib.DateTime;
    get_display_name(): string;
    get_edit_name(): string;
    get_etag(): string;
    get_file_type(): FileType;
    get_icon(): Icon;
    get_is_backup(): boolean;
    get_is_hidden(): boolean;
    get_is_symlink(): boolean;
    get_modification_time(): [GLib.TimeVal];
    get_name(): string;
    get_size(): number;
    get_sort_order(): number;
    get_symbolic_icon(): Icon;
    get_symlink_target(): string;
    has_attribute(attribute: string): boolean;
    has_namespace(name_space: string): boolean;
    list_attributes(name_space: string | null): string[] | null;
    remove_attribute(attribute: string): void;
    set_attribute(attribute: string, type: FileAttributeType, value_p: object): void;
    set_attribute_boolean(attribute: string, attr_value: boolean): void;
    set_attribute_byte_string(attribute: string, attr_value: string): void;
    set_attribute_int32(attribute: string, attr_value: number): void;
    set_attribute_int64(attribute: string, attr_value: number): void;
    set_attribute_mask(mask: FileAttributeMatcher): void;
    set_attribute_object(attribute: string, attr_value: GObject.Object): void;
    set_attribute_status(attribute: string, status: FileAttributeStatus): boolean;
    set_attribute_string(attribute: string, attr_value: string): void;
    set_attribute_stringv(attribute: string, attr_value: string[]): void;
    set_attribute_uint32(attribute: string, attr_value: number): void;
    set_attribute_uint64(attribute: string, attr_value: number): void;
    set_content_type(content_type: string): void;
    set_display_name(display_name: string): void;
    set_edit_name(edit_name: string): void;
    set_file_type(type: FileType): void;
    set_icon(icon: Icon): void;
    set_is_hidden(is_hidden: boolean): void;
    set_is_symlink(is_symlink: boolean): void;
    set_modification_time(mtime: GLib.TimeVal): void;
    set_name(name: string): void;
    set_size(size: number): void;
    set_sort_order(sort_order: number): void;
    set_symbolic_icon(icon: Icon): void;
    set_symlink_target(symlink_target: string): void;
    unset_attribute_mask(): void;
}
export class FileInputStream  {
    constructor(config?: properties);
    readonly priv: FileInputStreamPrivate;
    query_info(attributes: string, cancellable: Cancellable | null): FileInfo;
    query_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    query_info_finish(result: AsyncResult): FileInfo;
}
export class FileMonitor  {
    constructor(config?: properties);
    readonly cancelled: boolean;
    rate_limit: number;
    readonly priv: FileMonitorPrivate;
    cancel(): boolean;
    emit_event(child: File, other_file: File, event_type: FileMonitorEvent): void;
    is_cancelled(): boolean;
    set_rate_limit(limit_msecs: number): void;
}
export class FileOutputStream  {
    constructor(config?: properties);
    readonly priv: FileOutputStreamPrivate;
    get_etag(): string;
    query_info(attributes: string, cancellable: Cancellable | null): FileInfo;
    query_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    query_info_finish(result: AsyncResult): FileInfo;
}
export class FilenameCompleter extends GObject.Object {
    constructor(config?: properties);
    get_completion_suffix(initial_text: string): string;
    get_completions(initial_text: string): string[];
    set_dirs_only(dirs_only: boolean): void;
    vfunc_got_completion_data(): void;
}
export class FilterInputStream  {
    constructor(config?: properties);
    base_stream: InputStream;
    close_base_stream: boolean;
    get_base_stream(): InputStream;
    get_close_base_stream(): boolean;
    set_close_base_stream(close_base: boolean): void;
}
export class FilterOutputStream  {
    constructor(config?: properties);
    base_stream: OutputStream;
    close_base_stream: boolean;
    get_base_stream(): OutputStream;
    get_close_base_stream(): boolean;
    set_close_base_stream(close_base: boolean): void;
}
export class IOModule extends GObject.TypeModule {
    constructor(config?: properties);
    load(): void;
    unload(): void;
    static query(): string[];
}
export class IOStream  {
    constructor(config?: properties);
    readonly closed: boolean;
    readonly input_stream: InputStream;
    readonly output_stream: OutputStream;
    readonly priv: IOStreamPrivate;
    clear_pending(): void;
    close(cancellable: Cancellable | null): boolean;
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    close_finish(result: AsyncResult): boolean;
    get_input_stream(): InputStream;
    get_output_stream(): OutputStream;
    has_pending(): boolean;
    is_closed(): boolean;
    set_pending(): boolean;
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    static splice_finish(result: AsyncResult): boolean;
}
export class InetAddress extends GObject.Object {
    constructor(config?: properties);
    bytes: object;
    family: SocketFamily;
    readonly is_any: boolean;
    readonly is_link_local: boolean;
    readonly is_loopback: boolean;
    readonly is_mc_global: boolean;
    readonly is_mc_link_local: boolean;
    readonly is_mc_node_local: boolean;
    readonly is_mc_org_local: boolean;
    readonly is_mc_site_local: boolean;
    readonly is_multicast: boolean;
    readonly is_site_local: boolean;static new_any(family: SocketFamily): InetAddress;
    static new_any(...args: never[]): never;
    static new_from_bytes(bytes: number[], family: SocketFamily): InetAddress;
    static new_from_bytes(...args: never[]): never;
    static new_from_string(string: string): InetAddress;
    static new_from_string(...args: never[]): never;
    static new_loopback(family: SocketFamily): InetAddress;
    static new_loopback(...args: never[]): never;
    equal(other_address: InetAddress): boolean;
    get_family(): SocketFamily;
    get_is_any(): boolean;
    get_is_link_local(): boolean;
    get_is_loopback(): boolean;
    get_is_mc_global(): boolean;
    get_is_mc_link_local(): boolean;
    get_is_mc_node_local(): boolean;
    get_is_mc_org_local(): boolean;
    get_is_mc_site_local(): boolean;
    get_is_multicast(): boolean;
    get_is_site_local(): boolean;
    get_native_size(): number;
    to_string(): string;
    vfunc_to_string(): string;
}
export class InetAddressMask extends GObject.Object {
    constructor(config?: properties);
    address: InetAddress;
    readonly family: SocketFamily;
    length: number;static new_from_string(mask_string: string): InetAddressMask;
    static new_from_string(...args: never[]): never;
    equal(mask2: InetAddressMask): boolean;
    get_address(): InetAddress;
    get_family(): SocketFamily;
    get_length(): number;
    matches(address: InetAddress): boolean;
    to_string(): string;
}
export class InetSocketAddress extends SocketAddress {
    constructor(config?: properties);
    address: InetAddress;
    flowinfo: number;
    port: number;
    scope_id: number;static new_from_string(address: string, port: number): SocketAddress;
    static new_from_string(...args: never[]): never;
    get_address(): InetAddress;
    get_flowinfo(): number;
    get_port(): number;
    get_scope_id(): number;
}
export class InputStream  {
    constructor(config?: properties);
    readonly priv: InputStreamPrivate;
    clear_pending(): void;
    close(cancellable: Cancellable | null): boolean;
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    close_finish(result: AsyncResult): boolean;
    has_pending(): boolean;
    is_closed(): boolean;
    read(buffer: number[], count: number, cancellable: Cancellable | null): number;
    read_all(buffer: number[], count: number, cancellable: Cancellable | null): [boolean, number];
    read_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    read_all_finish(result: AsyncResult): [boolean, number];
    read_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    read_bytes(count: number, cancellable: Cancellable | null): GLib.Bytes;
    read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    read_bytes_finish(result: AsyncResult): GLib.Bytes;
    read_finish(result: AsyncResult): number;
    set_pending(): boolean;
    skip(count: number, cancellable: Cancellable | null): number;
    skip_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    skip_finish(result: AsyncResult): number;
}
export class ListStore extends GObject.Object {
    constructor(config?: properties);
    item_type: GType;
    append(item: GObject.Object): void;
    insert(position: number, item: GObject.Object): void;
    insert_sorted(item: GObject.Object, compare_func: GLib.CompareDataFunc, user_data: object | null): number;
    remove(position: number): void;
    remove_all(): void;
    sort(compare_func: GLib.CompareDataFunc, user_data: object | null): void;
    splice(position: number, n_removals: number, additions: GObject.Object[], n_additions: number): void;
}
export class MemoryInputStream extends InputStream {
    constructor(config?: properties);
    static new_from_bytes(bytes: GLib.Bytes): InputStream;
    static new_from_bytes(...args: never[]): never;
    static new_from_data(data: number[], len: number, destroy: GLib.DestroyNotify | null): InputStream;
    static new_from_data(...args: never[]): never;
    add_bytes(bytes: GLib.Bytes): void;
    add_data(data: number[], len: number, destroy: GLib.DestroyNotify | null): void;
}
export class MemoryOutputStream extends OutputStream {
    constructor(config?: properties);
    data: object;
    readonly data_size: number;
    size: number;static new_resizable(): OutputStream;
    static new_resizable(...args: never[]): never;
    get_data(): object | null;
    get_data_size(): number;
    get_size(): number;
    steal_as_bytes(): GLib.Bytes;
    steal_data(): object | null;
}
export class Menu extends MenuModel {
    constructor(config?: properties);
    append(label: string | null, detailed_action: string | null): void;
    append_item(item: MenuItem): void;
    append_section(label: string | null, section: MenuModel): void;
    append_submenu(label: string | null, submenu: MenuModel): void;
    freeze(): void;
    insert(position: number, label: string | null, detailed_action: string | null): void;
    insert_item(position: number, item: MenuItem): void;
    insert_section(position: number, label: string | null, section: MenuModel): void;
    insert_submenu(position: number, label: string | null, submenu: MenuModel): void;
    prepend(label: string | null, detailed_action: string | null): void;
    prepend_item(item: MenuItem): void;
    prepend_section(label: string | null, section: MenuModel): void;
    prepend_submenu(label: string | null, submenu: MenuModel): void;
    remove(position: number): void;
    remove_all(): void;
}
export class MenuAttributeIter  {
    constructor(config?: properties);
    readonly priv: MenuAttributeIterPrivate;
    get_name(): string;
    get_next(): [boolean, string | null,GLib.Variant | null];
    get_value(): GLib.Variant;
    next(): boolean;
}
export class MenuItem extends GObject.Object {
    constructor(config?: properties);
    static new_from_model(model: MenuModel, item_index: number): MenuItem;
    static new_from_model(...args: never[]): never;
    static new_section(label: string | null, section: MenuModel): MenuItem;
    static new_section(...args: never[]): never;
    static new_submenu(label: string | null, submenu: MenuModel): MenuItem;
    static new_submenu(...args: never[]): never;
    get_attribute_value(attribute: string, expected_type: GLib.VariantType | null): GLib.Variant;
    get_link(link: string): MenuModel;
    set_action_and_target_value(action: string | null, target_value: GLib.Variant | null): void;
    set_attribute_value(attribute: string, value: GLib.Variant | null): void;
    set_detailed_action(detailed_action: string): void;
    set_icon(icon: Icon): void;
    set_label(label: string | null): void;
    set_link(link: string, model: MenuModel | null): void;
    set_section(section: MenuModel | null): void;
    set_submenu(submenu: MenuModel | null): void;
}
export class MenuLinkIter  {
    constructor(config?: properties);
    readonly priv: MenuLinkIterPrivate;
    get_name(): string;
    get_next(): [boolean, string | null,MenuModel | null];
    get_value(): MenuModel;
    next(): boolean;
}
export class MenuModel  {
    constructor(config?: properties);
    readonly priv: MenuModelPrivate;
    get_item_attribute_value(item_index: number, attribute: string, expected_type: GLib.VariantType | null): GLib.Variant;
    get_item_link(item_index: number, link: string): MenuModel;
    get_n_items(): number;
    is_mutable(): boolean;
    items_changed(position: number, removed: number, added: number): void;
    iterate_item_attributes(item_index: number): MenuAttributeIter;
    iterate_item_links(item_index: number): MenuLinkIter;
}
export class MountOperation extends GObject.Object {
    constructor(config?: properties);
    anonymous: boolean;
    choice: number;
    domain: string;
    is_tcrypt_hidden_volume: boolean;
    is_tcrypt_system_volume: boolean;
    password: string;
    password_save: PasswordSave;
    pim: number;
    username: string;
    get_anonymous(): boolean;
    get_choice(): number;
    get_domain(): string;
    get_is_tcrypt_hidden_volume(): boolean;
    get_is_tcrypt_system_volume(): boolean;
    get_password(): string;
    get_password_save(): PasswordSave;
    get_pim(): number;
    get_username(): string;
    reply(result: MountOperationResult): void;
    set_anonymous(anonymous: boolean): void;
    set_choice(choice: number): void;
    set_domain(domain: string): void;
    set_is_tcrypt_hidden_volume(hidden_volume: boolean): void;
    set_is_tcrypt_system_volume(system_volume: boolean): void;
    set_password(password: string): void;
    set_password_save(save: PasswordSave): void;
    set_pim(pim: number): void;
    set_username(username: string): void;
    vfunc_aborted(): void;
    vfunc_ask_password(message: string, default_user: string, default_domain: string, flags: AskPasswordFlags): void;
    vfunc_ask_question(message: string, choices: string[]): void;
    vfunc_reply(result: MountOperationResult): void;
    vfunc_show_processes(message: string, processes: GLib.Pid[], choices: string[]): void;
    vfunc_show_unmount_progress(message: string, time_left: number, bytes_left: number): void;
}
export class NativeVolumeMonitor  {
    constructor(config?: properties);
}
export class NetworkAddress extends GObject.Object {
    constructor(config?: properties);
    hostname: string;
    port: number;
    scheme: string;static new_loopback(port: number): NetworkAddress;
    static new_loopback(...args: never[]): never;
    get_hostname(): string;
    get_port(): number;
    get_scheme(): string;
    static parse(host_and_port: string, default_port: number): NetworkAddress;
    static parse_uri(uri: string, default_port: number): NetworkAddress;
}
export class NetworkService extends GObject.Object {
    constructor(config?: properties);
    domain: string;
    protocol: string;
    scheme: string;
    service: string;
    get_domain(): string;
    get_protocol(): string;
    get_scheme(): string;
    get_service(): string;
    set_scheme(scheme: string): void;
}
export class Notification extends GObject.Object {
    constructor(config?: properties);
    add_button(label: string, detailed_action: string): void;
    add_button_with_target_value(label: string, action: string, target: GLib.Variant | null): void;
    set_body(body: string | null): void;
    set_default_action(detailed_action: string): void;
    set_default_action_and_target_value(action: string, target: GLib.Variant | null): void;
    set_icon(icon: Icon): void;
    set_priority(priority: NotificationPriority): void;
    set_title(title: string): void;
    set_urgent(urgent: boolean): void;
}
export class OutputStream  {
    constructor(config?: properties);
    readonly priv: OutputStreamPrivate;
    clear_pending(): void;
    close(cancellable: Cancellable | null): boolean;
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    close_finish(result: AsyncResult): boolean;
    flush(cancellable: Cancellable | null): boolean;
    flush_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    flush_finish(result: AsyncResult): boolean;
    has_pending(): boolean;
    is_closed(): boolean;
    is_closing(): boolean;
    set_pending(): boolean;
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null): number;
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    splice_finish(result: AsyncResult): number;
    write(buffer: number[], count: number, cancellable: Cancellable | null): number;
    write_all(buffer: number[], count: number, cancellable: Cancellable | null): [boolean, number | null];
    write_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    write_all_finish(result: AsyncResult): [boolean, number | null];
    write_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    write_bytes(bytes: GLib.Bytes, cancellable: Cancellable | null): number;
    write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    write_bytes_finish(result: AsyncResult): number;
    write_finish(result: AsyncResult): number;
    writev(vectors: OutputVector[], n_vectors: number, cancellable: Cancellable | null): [boolean, number | null];
    writev_all(vectors: OutputVector[], n_vectors: number, cancellable: Cancellable | null): [boolean, number | null];
    writev_all_async(vectors: OutputVector[], n_vectors: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    writev_all_finish(result: AsyncResult): [boolean, number | null];
    writev_async(vectors: OutputVector[], n_vectors: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    writev_finish(result: AsyncResult): [boolean, number | null];
}
export class Permission  {
    constructor(config?: properties);
    readonly allowed: boolean;
    readonly can_acquire: boolean;
    readonly can_release: boolean;
    readonly priv: PermissionPrivate;
    acquire(cancellable: Cancellable | null): boolean;
    acquire_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    acquire_finish(result: AsyncResult): boolean;
    get_allowed(): boolean;
    get_can_acquire(): boolean;
    get_can_release(): boolean;
    impl_update(allowed: boolean, can_acquire: boolean, can_release: boolean): void;
    release(cancellable: Cancellable | null): boolean;
    release_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    release_finish(result: AsyncResult): boolean;
}
export class PropertyAction extends GObject.Object {
    constructor(config?: properties);
    readonly enabled: boolean;
    invert_boolean: boolean;
    name: string;
    object: GObject.Object;
    readonly parameter_type: GLib.VariantType;
    property_name: string;
    readonly state: GLib.Variant;
    readonly state_type: GLib.VariantType;
}
export class ProxyAddress extends InetSocketAddress {
    constructor(config?: properties);
    destination_hostname: string;
    destination_port: number;
    destination_protocol: string;
    password: string;
    protocol: string;
    uri: string;
    username: string;
    get_destination_hostname(): string;
    get_destination_port(): number;
    get_destination_protocol(): string;
    get_password(): string;
    get_protocol(): string;
    get_uri(): string;
    get_username(): string;
}
export class ProxyAddressEnumerator  {
    constructor(config?: properties);
    connectable: SocketConnectable;
    default_port: number;
    proxy_resolver: ProxyResolver;
    uri: string;
    readonly priv: ProxyAddressEnumeratorPrivate;
}
export class Resolver  {
    constructor(config?: properties);
    readonly priv: ResolverPrivate;
    lookup_by_address(address: InetAddress, cancellable: Cancellable | null): string;
    lookup_by_address_async(address: InetAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    lookup_by_address_finish(result: AsyncResult): string;
    lookup_by_name(hostname: string, cancellable: Cancellable | null): GLib.List;
    lookup_by_name_async(hostname: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    lookup_by_name_finish(result: AsyncResult): GLib.List;
    lookup_by_name_with_flags(hostname: string, flags: ResolverNameLookupFlags, cancellable: Cancellable | null): GLib.List;
    lookup_by_name_with_flags_async(hostname: string, flags: ResolverNameLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    lookup_by_name_with_flags_finish(result: AsyncResult): GLib.List;
    lookup_records(rrname: string, record_type: ResolverRecordType, cancellable: Cancellable | null): GLib.List;
    lookup_records_async(rrname: string, record_type: ResolverRecordType, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    lookup_records_finish(result: AsyncResult): GLib.List;
    lookup_service(service: string, protocol: string, domain: string, cancellable: Cancellable | null): GLib.List;
    lookup_service_async(service: string, protocol: string, domain: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    lookup_service_finish(result: AsyncResult): GLib.List;
    set_default(): void;
    static get_default(): Resolver;
}
export class Settings extends GObject.Object {
    constructor(config?: properties);
    backend: SettingsBackend;
    readonly delay_apply: boolean;
    readonly has_unapplied: boolean;
    path: string;
    schema: string;
    schema_id: string;
    settings_schema: SettingsSchema;static new_full(schema: SettingsSchema, backend: SettingsBackend | null, path: string | null): Settings;
    static new_full(...args: never[]): never;
    static new_with_backend(schema_id: string, backend: SettingsBackend): Settings;
    static new_with_backend(...args: never[]): never;
    static new_with_backend_and_path(schema_id: string, backend: SettingsBackend, path: string): Settings;
    static new_with_backend_and_path(...args: never[]): never;
    static new_with_path(schema_id: string, path: string): Settings;
    static new_with_path(...args: never[]): never;
    apply(): void;
    bind(key: string, object: GObject.Object, property: string, flags: SettingsBindFlags): void;
    bind_writable(key: string, object: GObject.Object, property: string, inverted: boolean): void;
    create_action(key: string): Action;
    delay(): void;
    get_boolean(key: string): boolean;
    get_child(name: string): Settings;
    get_default_value(key: string): GLib.Variant | null;
    get_double(key: string): number;
    get_enum(key: string): number;
    get_flags(key: string): number;
    get_has_unapplied(): boolean;
    get_int(key: string): number;
    get_int64(key: string): number;
    get_mapped(key: string, mapping: SettingsGetMapping, user_data: object | null): object | null;
    get_range(key: string): GLib.Variant;
    get_string(key: string): string;
    get_strv(key: string): string[];
    get_uint(key: string): number;
    get_uint64(key: string): number;
    get_user_value(key: string): GLib.Variant | null;
    get_value(key: string): GLib.Variant;
    is_writable(name: string): boolean;
    list_children(): string[];
    list_keys(): string[];
    range_check(key: string, value: GLib.Variant): boolean;
    reset(key: string): void;
    revert(): void;
    set_boolean(key: string, value: boolean): boolean;
    set_double(key: string, value: number): boolean;
    set_enum(key: string, value: number): boolean;
    set_flags(key: string, value: number): boolean;
    set_int(key: string, value: number): boolean;
    set_int64(key: string, value: number): boolean;
    set_string(key: string, value: string): boolean;
    set_strv(key: string, value: string[] | null): boolean;
    set_uint(key: string, value: number): boolean;
    set_uint64(key: string, value: number): boolean;
    set_value(key: string, value: GLib.Variant): boolean;
    vfunc_change_event(keys: GLib.Quark, n_keys: number): boolean;
    vfunc_changed(key: string): void;
    vfunc_writable_change_event(key: GLib.Quark): boolean;
    vfunc_writable_changed(key: string): void;
    static list_relocatable_schemas(): string[];
    static list_schemas(): string[];
    static sync(): void;
    static unbind(object: GObject.Object, property: string): void;
}
export class SettingsBackend  {
    constructor(config?: properties);
    readonly priv: SettingsBackendPrivate;
    changed(key: string, origin_tag: object | null): void;
    changed_tree(tree: GLib.Tree, origin_tag: object | null): void;
    keys_changed(path: string, items: string[], origin_tag: object | null): void;
    path_changed(path: string, origin_tag: object | null): void;
    path_writable_changed(path: string): void;
    writable_changed(key: string): void;
    static flatten_tree(tree: GLib.Tree): [string,string[],GLib.Variant[] | null];
    static get_default(): SettingsBackend;
}
export class SimpleAction extends GObject.Object {
    constructor(config?: properties);
    enabled: boolean;
    name: string;
    parameter_type: GLib.VariantType;
    state: GLib.Variant;
    readonly state_type: GLib.VariantType;static new_stateful(name: string, parameter_type: GLib.VariantType | null, state: GLib.Variant): SimpleAction;
    static new_stateful(...args: never[]): never;
    set_enabled(enabled: boolean): void;
    set_state(value: GLib.Variant): void;
    set_state_hint(state_hint: GLib.Variant | null): void;
}
export class SimpleActionGroup extends GObject.Object {
    constructor(config?: properties);
    add_entries(entries: ActionEntry[], n_entries: number, user_data: object | null): void;
    insert(action: Action): void;
    lookup(action_name: string): Action;
    remove(action_name: string): void;
}
export class SimpleAsyncResult extends GObject.Object {
    constructor(config?: properties);
    static new_from_error(source_object: GObject.Object | null, callback: AsyncReadyCallback | null, user_data: object | null, error: GLib.Error): SimpleAsyncResult;
    static new_from_error(...args: never[]): never;
    complete(): void;
    complete_in_idle(): void;
    get_op_res_gboolean(): boolean;
    get_op_res_gssize(): number;
    propagate_error(): boolean;
    set_check_cancellable(check_cancellable: Cancellable | null): void;
    set_from_error(error: GLib.Error): void;
    set_handle_cancellation(handle_cancellation: boolean): void;
    set_op_res_gboolean(op_res: boolean): void;
    set_op_res_gssize(op_res: number): void;
    static is_valid(result: AsyncResult, source: GObject.Object | null, source_tag: object | null): boolean;
}
export class SimpleIOStream extends IOStream {
    constructor(config?: properties);
    input_stream: InputStream;
    output_stream: OutputStream;
}
export class SimplePermission extends Permission {
    constructor(config?: properties);
}
export class SimpleProxyResolver  {
    constructor(config?: properties);
    default_proxy: string;
    ignore_hosts: string[];
    readonly priv: SimpleProxyResolverPrivate;
    set_default_proxy(default_proxy: string): void;
    set_ignore_hosts(ignore_hosts: string): void;
    set_uri_proxy(uri_scheme: string, proxy: string): void;
    static new(default_proxy: string | null, ignore_hosts: string | null): ProxyResolver;
}
export class Socket extends GObject.Object {
    constructor(config?: properties);
    blocking: boolean;
    broadcast: boolean;
    family: SocketFamily;
    fd: number;
    keepalive: boolean;
    listen_backlog: number;
    readonly local_address: SocketAddress;
    multicast_loopback: boolean;
    multicast_ttl: number;
    protocol: SocketProtocol;
    readonly remote_address: SocketAddress;
    timeout: number;
    ttl: number;
    type: SocketType;static new_from_fd(fd: number): Socket;
    static new_from_fd(...args: never[]): never;
    accept(cancellable: Cancellable | null): Socket;
    bind(address: SocketAddress, allow_reuse: boolean): boolean;
    check_connect_result(): boolean;
    close(): boolean;
    condition_check(condition: GLib.IOCondition): GLib.IOCondition;
    condition_timed_wait(condition: GLib.IOCondition, timeout_us: number, cancellable: Cancellable | null): boolean;
    condition_wait(condition: GLib.IOCondition, cancellable: Cancellable | null): boolean;
    connect(address: SocketAddress, cancellable: Cancellable | null): boolean;
    connection_factory_create_connection(): SocketConnection;
    get_available_bytes(): number;
    get_blocking(): boolean;
    get_broadcast(): boolean;
    get_credentials(): Credentials;
    get_family(): SocketFamily;
    get_fd(): number;
    get_keepalive(): boolean;
    get_listen_backlog(): number;
    get_local_address(): SocketAddress;
    get_multicast_loopback(): boolean;
    get_multicast_ttl(): number;
    get_option(level: number, optname: number): [boolean, number];
    get_protocol(): SocketProtocol;
    get_remote_address(): SocketAddress;
    get_socket_type(): SocketType;
    get_timeout(): number;
    get_ttl(): number;
    is_closed(): boolean;
    is_connected(): boolean;
    join_multicast_group(group: InetAddress, source_specific: boolean, iface: string | null): boolean;
    join_multicast_group_ssm(group: InetAddress, source_specific: InetAddress | null, iface: string | null): boolean;
    leave_multicast_group(group: InetAddress, source_specific: boolean, iface: string | null): boolean;
    leave_multicast_group_ssm(group: InetAddress, source_specific: InetAddress | null, iface: string | null): boolean;
    listen(): boolean;
    receive(buffer: number[], size: number, cancellable: Cancellable | null): number;
    receive_from(buffer: number[], size: number, cancellable: Cancellable | null): [number, SocketAddress | null];
    receive_message(vectors: InputVector[], num_vectors: number, flags: SocketMsgFlags, cancellable: Cancellable | null): [number, SocketAddress | null,SocketControlMessage[] | null,number,SocketMsgFlags];
    receive_messages(messages: InputMessage[], num_messages: number, flags: SocketMsgFlags, cancellable: Cancellable | null): number;
    receive_with_blocking(buffer: number[], size: number, blocking: boolean, cancellable: Cancellable | null): number;
    send(buffer: number[], size: number, cancellable: Cancellable | null): number;
    send_message(address: SocketAddress | null, vectors: OutputVector[], num_vectors: number, messages: SocketControlMessage[] | null, num_messages: number, flags: SocketMsgFlags, cancellable: Cancellable | null): number;
    send_message_with_timeout(address: SocketAddress | null, vectors: OutputVector[], num_vectors: number, messages: SocketControlMessage[] | null, num_messages: number, flags: SocketMsgFlags, timeout_us: number, cancellable: Cancellable | null): [PollableReturn, number | null];
    send_messages(messages: OutputMessage[], num_messages: number, flags: SocketMsgFlags, cancellable: Cancellable | null): number;
    send_to(address: SocketAddress | null, buffer: number[], size: number, cancellable: Cancellable | null): number;
    send_with_blocking(buffer: number[], size: number, blocking: boolean, cancellable: Cancellable | null): number;
    set_blocking(blocking: boolean): void;
    set_broadcast(broadcast: boolean): void;
    set_keepalive(keepalive: boolean): void;
    set_listen_backlog(backlog: number): void;
    set_multicast_loopback(loopback: boolean): void;
    set_multicast_ttl(ttl: number): void;
    set_option(level: number, optname: number, value: number): boolean;
    set_timeout(timeout: number): void;
    set_ttl(ttl: number): void;
    shutdown(shutdown_read: boolean, shutdown_write: boolean): boolean;
    speaks_ipv4(): boolean;
}
export class SocketAddress extends GObject.Object {
    constructor(config?: properties);
    readonly family: SocketFamily;static new_from_native(_native: object, len: number): SocketAddress;
    static new_from_native(...args: never[]): never;
    get_family(): SocketFamily;
    get_native_size(): number;
    to_native(dest: object | null, destlen: number): boolean;
    vfunc_get_family(): SocketFamily;
    vfunc_get_native_size(): number;
    vfunc_to_native(dest: object | null, destlen: number): boolean;
}
export class SocketAddressEnumerator  {
    constructor(config?: properties);
    next(cancellable: Cancellable | null): SocketAddress;
    next_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    next_finish(result: AsyncResult): SocketAddress;
}
export class SocketClient extends GObject.Object {
    constructor(config?: properties);
    enable_proxy: boolean;
    family: SocketFamily;
    local_address: SocketAddress;
    protocol: SocketProtocol;
    proxy_resolver: ProxyResolver;
    timeout: number;
    tls: boolean;
    tls_validation_flags: TlsCertificateFlags;
    type: SocketType;
    add_application_proxy(protocol: string): void;
    connect(connectable: SocketConnectable, cancellable: Cancellable | null): SocketConnection;
    connect_async(connectable: SocketConnectable, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    connect_finish(result: AsyncResult): SocketConnection;
    connect_to_host(host_and_port: string, default_port: number, cancellable: Cancellable | null): SocketConnection;
    connect_to_host_async(host_and_port: string, default_port: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    connect_to_host_finish(result: AsyncResult): SocketConnection;
    connect_to_service(domain: string, service: string, cancellable: Cancellable | null): SocketConnection;
    connect_to_service_async(domain: string, service: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    connect_to_service_finish(result: AsyncResult): SocketConnection;
    connect_to_uri(uri: string, default_port: number, cancellable: Cancellable | null): SocketConnection;
    connect_to_uri_async(uri: string, default_port: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    connect_to_uri_finish(result: AsyncResult): SocketConnection;
    get_enable_proxy(): boolean;
    get_family(): SocketFamily;
    get_local_address(): SocketAddress;
    get_protocol(): SocketProtocol;
    get_proxy_resolver(): ProxyResolver;
    get_socket_type(): SocketType;
    get_timeout(): number;
    get_tls(): boolean;
    get_tls_validation_flags(): TlsCertificateFlags;
    set_enable_proxy(enable: boolean): void;
    set_family(family: SocketFamily): void;
    set_local_address(address: SocketAddress | null): void;
    set_protocol(protocol: SocketProtocol): void;
    set_proxy_resolver(proxy_resolver: ProxyResolver | null): void;
    set_socket_type(type: SocketType): void;
    set_timeout(timeout: number): void;
    set_tls(tls: boolean): void;
    set_tls_validation_flags(flags: TlsCertificateFlags): void;
    vfunc_event(event: SocketClientEvent, connectable: SocketConnectable, connection: IOStream): void;
}
export class SocketConnection  {
    constructor(config?: properties);
    socket: Socket;
    readonly priv: SocketConnectionPrivate;
    connect(address: SocketAddress, cancellable: Cancellable | null): boolean;
    connect_async(address: SocketAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    connect_finish(result: AsyncResult): boolean;
    get_local_address(): SocketAddress;
    get_remote_address(): SocketAddress;
    get_socket(): Socket;
    is_connected(): boolean;
    static factory_lookup_type(family: SocketFamily, type: SocketType, protocol_id: number): GType;
    static factory_register_type(g_type: GType, family: SocketFamily, type: SocketType, protocol: number): void;
}
export class SocketControlMessage  {
    constructor(config?: properties);
    readonly priv: SocketControlMessagePrivate;
    get_level(): number;
    get_msg_type(): number;
    get_size(): number;
    serialize(data: object): void;
    static deserialize(level: number, type: number, size: number, data: number[]): SocketControlMessage;
}
export class SocketListener extends GObject.Object {
    constructor(config?: properties);
    listen_backlog: number;
    accept(cancellable: Cancellable | null): [SocketConnection, GObject.Object | null];
    accept_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    accept_finish(result: AsyncResult): [SocketConnection, GObject.Object | null];
    accept_socket(cancellable: Cancellable | null): [Socket, GObject.Object | null];
    accept_socket_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    accept_socket_finish(result: AsyncResult): [Socket, GObject.Object | null];
    add_address(address: SocketAddress, type: SocketType, protocol: SocketProtocol, source_object: GObject.Object | null): [boolean, SocketAddress | null];
    add_any_inet_port(source_object: GObject.Object | null): number;
    add_inet_port(port: number, source_object: GObject.Object | null): boolean;
    add_socket(socket: Socket, source_object: GObject.Object | null): boolean;
    close(): void;
    set_backlog(listen_backlog: number): void;
    vfunc_changed(): void;
    vfunc_event(event: SocketListenerEvent, socket: Socket): void;
}
export class SocketService extends SocketListener {
    constructor(config?: properties);
    active: boolean;
    is_active(): boolean;
    start(): void;
    stop(): void;
    vfunc_incoming(connection: SocketConnection, source_object: GObject.Object): boolean;
}
export class Subprocess extends GObject.Object {
    constructor(config?: properties);
    argv: string[];
    flags: SubprocessFlags;static newv(argv: string[], flags: SubprocessFlags): Subprocess;
    static newv(...args: never[]): never;
    communicate(stdin_buf: GLib.Bytes | null, cancellable: Cancellable | null): [boolean, GLib.Bytes | null,GLib.Bytes | null];
    communicate_async(stdin_buf: GLib.Bytes | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    communicate_finish(result: AsyncResult): [boolean, GLib.Bytes | null,GLib.Bytes | null];
    communicate_utf8(stdin_buf: string | null, cancellable: Cancellable | null): [boolean, string | null,string | null];
    communicate_utf8_async(stdin_buf: string | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    communicate_utf8_finish(result: AsyncResult): [boolean, string | null,string | null];
    force_exit(): void;
    get_exit_status(): number;
    get_identifier(): string;
    get_if_exited(): boolean;
    get_if_signaled(): boolean;
    get_status(): number;
    get_stderr_pipe(): InputStream;
    get_stdin_pipe(): OutputStream;
    get_stdout_pipe(): InputStream;
    get_successful(): boolean;
    get_term_sig(): number;
    send_signal(signal_num: number): void;
    wait(cancellable: Cancellable | null): boolean;
    wait_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    wait_check(cancellable: Cancellable | null): boolean;
    wait_check_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    wait_check_finish(result: AsyncResult): boolean;
    wait_finish(result: AsyncResult): boolean;
}
export class SubprocessLauncher extends GObject.Object {
    constructor(config?: properties);
    flags: SubprocessFlags;
    getenv(variable: string): string;
    set_cwd(cwd: string): void;
    set_environ(env: string[]): void;
    set_flags(flags: SubprocessFlags): void;
    set_stderr_file_path(path: string | null): void;
    set_stdin_file_path(path: string): void;
    set_stdout_file_path(path: string | null): void;
    setenv(variable: string, value: string, overwrite: boolean): void;
    spawnv(argv: string[]): Subprocess;
    take_fd(source_fd: number, target_fd: number): void;
    take_stderr_fd(fd: number): void;
    take_stdin_fd(fd: number): void;
    take_stdout_fd(fd: number): void;
    unsetenv(variable: string): void;
}
export class Task extends GObject.Object {
    constructor(config?: properties);
    readonly completed: boolean;
    get_cancellable(): Cancellable;
    get_check_cancellable(): boolean;
    get_completed(): boolean;
    get_context(): GLib.MainContext;
    get_name(): string | null;
    get_priority(): number;
    get_return_on_cancel(): boolean;
    get_source_object(): GObject.Object | null;
    get_source_tag(): object | null;
    get_task_data(): object | null;
    had_error(): boolean;
    propagate_boolean(): boolean;
    propagate_int(): number;
    propagate_pointer(): object | null;
    return_boolean(result: boolean): void;
    return_error(error: GLib.Error): void;
    return_error_if_cancelled(): boolean;
    return_int(result: number): void;
    return_pointer(result: object | null, result_destroy: GLib.DestroyNotify | null): void;
    set_check_cancellable(check_cancellable: boolean): void;
    set_name(name: string | null): void;
    set_priority(priority: number): void;
    set_return_on_cancel(return_on_cancel: boolean): boolean;
    set_source_tag(source_tag: object | null): void;
    set_task_data(task_data: object | null, task_data_destroy: GLib.DestroyNotify | null): void;
    static is_valid(result: AsyncResult, source_object: GObject.Object | null): boolean;
    static report_error(source_object: GObject.Object | null, callback: AsyncReadyCallback | null, callback_data: object | null, source_tag: object | null, error: GLib.Error): void;
}
export class TcpConnection  {
    constructor(config?: properties);
    graceful_disconnect: boolean;
    readonly priv: TcpConnectionPrivate;
    get_graceful_disconnect(): boolean;
    set_graceful_disconnect(graceful_disconnect: boolean): void;
}
export class TcpWrapperConnection extends TcpConnection {
    constructor(config?: properties);
    base_io_stream: IOStream;
    get_base_io_stream(): IOStream;
}
export class TestDBus extends GObject.Object {
    constructor(config?: properties);
    flags: TestDBusFlags;
    add_service_dir(path: string): void;
    down(): void;
    get_bus_address(): string | null;
    get_flags(): TestDBusFlags;
    stop(): void;
    up(): void;
    static unset(): void;
}
export class ThemedIcon extends GObject.Object {
    constructor(config?: properties);
    name: string;
    names: string[];
    use_default_fallbacks: boolean;static new_from_names(iconnames: string[], len: number): ThemedIcon;
    static new_from_names(...args: never[]): never;
    static new_with_default_fallbacks(iconname: string): ThemedIcon;
    static new_with_default_fallbacks(...args: never[]): never;
    append_name(iconname: string): void;
    get_names(): string[];
    prepend_name(iconname: string): void;
}
export class ThreadedSocketService extends SocketService {
    constructor(config?: properties);
    max_threads: number;
    vfunc_run(connection: SocketConnection, source_object: GObject.Object): boolean;
}
export class TlsCertificate extends GObject.Object {
    constructor(config?: properties);
    certificate: number[];
    certificate_pem: string;
    issuer: TlsCertificate;
    private_key: number[];
    private_key_pem: string;static new_from_file(file: string): TlsCertificate;
    static new_from_file(...args: never[]): never;
    static new_from_files(cert_file: string, key_file: string): TlsCertificate;
    static new_from_files(...args: never[]): never;
    static new_from_pem(data: string, length: number): TlsCertificate;
    static new_from_pem(...args: never[]): never;
    get_issuer(): TlsCertificate;
    is_same(cert_two: TlsCertificate): boolean;
    verify(identity: SocketConnectable | null, trusted_ca: TlsCertificate | null): TlsCertificateFlags;
    vfunc_verify(identity: SocketConnectable | null, trusted_ca: TlsCertificate | null): TlsCertificateFlags;
    static list_new_from_file(file: string): GLib.List;
}
export class TlsConnection  {
    constructor(config?: properties);
    advertised_protocols: string[];
    base_io_stream: IOStream;
    certificate: TlsCertificate;
    database: TlsDatabase;
    interaction: TlsInteraction;
    readonly negotiated_protocol: string;
    readonly peer_certificate: TlsCertificate;
    readonly peer_certificate_errors: TlsCertificateFlags;
    rehandshake_mode: TlsRehandshakeMode;
    require_close_notify: boolean;
    use_system_certdb: boolean;
    readonly priv: TlsConnectionPrivate;
    emit_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean;
    get_certificate(): TlsCertificate;
    get_database(): TlsDatabase;
    get_interaction(): TlsInteraction;
    get_negotiated_protocol(): string | null;
    get_peer_certificate(): TlsCertificate;
    get_peer_certificate_errors(): TlsCertificateFlags;
    get_rehandshake_mode(): TlsRehandshakeMode;
    get_require_close_notify(): boolean;
    get_use_system_certdb(): boolean;
    handshake(cancellable: Cancellable | null): boolean;
    handshake_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    handshake_finish(result: AsyncResult): boolean;
    set_advertised_protocols(protocols: string[] | null): void;
    set_certificate(certificate: TlsCertificate): void;
    set_database(database: TlsDatabase): void;
    set_interaction(interaction: TlsInteraction | null): void;
    set_rehandshake_mode(mode: TlsRehandshakeMode): void;
    set_require_close_notify(require_close_notify: boolean): void;
    set_use_system_certdb(use_system_certdb: boolean): void;
}
export class TlsDatabase  {
    constructor(config?: properties);
    readonly priv: TlsDatabasePrivate;
    create_certificate_handle(certificate: TlsCertificate): string | null;
    lookup_certificate_for_handle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null): TlsCertificate | null;
    lookup_certificate_for_handle_async(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    lookup_certificate_for_handle_finish(result: AsyncResult): TlsCertificate;
    lookup_certificate_issuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null): TlsCertificate;
    lookup_certificate_issuer_async(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    lookup_certificate_issuer_finish(result: AsyncResult): TlsCertificate;
    lookup_certificates_issued_by(issuer_raw_dn: number[], interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null): GLib.List;
    lookup_certificates_issued_by_async(issuer_raw_dn: number[], interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    lookup_certificates_issued_by_finish(result: AsyncResult): GLib.List;
    verify_chain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable | null): TlsCertificateFlags;
    verify_chain_async(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    verify_chain_finish(result: AsyncResult): TlsCertificateFlags;
}
export class TlsInteraction  {
    constructor(config?: properties);
    readonly priv: TlsInteractionPrivate;
    ask_password(password: TlsPassword, cancellable: Cancellable | null): TlsInteractionResult;
    ask_password_async(password: TlsPassword, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    ask_password_finish(result: AsyncResult): TlsInteractionResult;
    invoke_ask_password(password: TlsPassword, cancellable: Cancellable | null): TlsInteractionResult;
    invoke_request_certificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null): TlsInteractionResult;
    request_certificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null): TlsInteractionResult;
    request_certificate_async(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    request_certificate_finish(result: AsyncResult): TlsInteractionResult;
}
export class TlsPassword extends GObject.Object {
    constructor(config?: properties);
    description: string;
    flags: TlsPasswordFlags;
    warning: string;
    get_description(): string;
    get_flags(): TlsPasswordFlags;
    get_value(length: number | null): number;
    get_warning(): string;
    set_description(description: string): void;
    set_flags(flags: TlsPasswordFlags): void;
    set_value(value: number[], length: number): void;
    set_value_full(value: number[], length: number, destroy: GLib.DestroyNotify | null): void;
    set_warning(warning: string): void;
    vfunc_get_default_warning(): string;
    vfunc_get_value(length: number | null): number;
    vfunc_set_value(value: number[], length: number, destroy: GLib.DestroyNotify | null): void;
}
export class UnixConnection  {
    constructor(config?: properties);
    readonly priv: UnixConnectionPrivate;
    receive_credentials(cancellable: Cancellable | null): Credentials;
    receive_credentials_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    receive_credentials_finish(result: AsyncResult): Credentials;
    receive_fd(cancellable: Cancellable | null): number;
    send_credentials(cancellable: Cancellable | null): boolean;
    send_credentials_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    send_credentials_finish(result: AsyncResult): boolean;
    send_fd(fd: number, cancellable: Cancellable | null): boolean;
}
export class UnixCredentialsMessage extends SocketControlMessage {
    constructor(config?: properties);
    credentials: Credentials;static new_with_credentials(credentials: Credentials): SocketControlMessage;
    get_credentials(): Credentials;
    static is_supported(): boolean;
}
export class UnixFDList extends GObject.Object {
    constructor(config?: properties);
    static new_from_array(fds: number[], n_fds: number): UnixFDList;
    static new_from_array(...args: never[]): never;
    append(fd: number): number;
    get(index_: number): number;
    get_length(): number;
    peek_fds(): [number[], number | null];
    steal_fds(): [number[], number | null];
}
export class UnixFDMessage extends SocketControlMessage {
    constructor(config?: properties);
    fd_list: UnixFDList;static new_with_fd_list(fd_list: UnixFDList): SocketControlMessage;
    append_fd(fd: number): boolean;
    get_fd_list(): UnixFDList;
    steal_fds(): [number[], number | null];
}
export class UnixInputStream extends InputStream {
    constructor(config?: properties);
    close_fd: boolean;
    fd: number;
    get_close_fd(): boolean;
    get_fd(): number;
    set_close_fd(close_fd: boolean): void;
}
export class UnixMountMonitor extends GObject.Object {
    constructor(config?: properties);
    set_rate_limit(limit_msec: number): void;
    static get(): UnixMountMonitor;
}
export class UnixOutputStream extends OutputStream {
    constructor(config?: properties);
    close_fd: boolean;
    fd: number;
    get_close_fd(): boolean;
    get_fd(): number;
    set_close_fd(close_fd: boolean): void;
}
export class UnixSocketAddress extends SocketAddress {
    constructor(config?: properties);
    "abstract": boolean;
    address_type: UnixSocketAddressType;
    path: string;
    path_as_array: number[];static new_abstract(path: number[], path_len: number): SocketAddress;
    static new_abstract(...args: never[]): never;
    static new_with_type(path: number[], path_len: number, type: UnixSocketAddressType): SocketAddress;
    static new_with_type(...args: never[]): never;
    get_address_type(): UnixSocketAddressType;
    get_is_abstract(): boolean;
    get_path(): string;
    get_path_len(): number;
    static abstract_names_supported(): boolean;
}
export class Vfs  {
    constructor(config?: properties);
    get_file_for_path(path: string): File;
    get_file_for_uri(uri: string): File;
    get_supported_uri_schemes(): string[];
    is_active(): boolean;
    parse_name(parse_name: string): File;
    register_uri_scheme(scheme: string, uri_func: VfsFileLookupFunc | null, uri_data: object | null, uri_destroy: GLib.DestroyNotify | null, parse_name_func: VfsFileLookupFunc | null, parse_name_data: object | null, parse_name_destroy: GLib.DestroyNotify | null): boolean;
    unregister_uri_scheme(scheme: string): boolean;
    static get_default(): Vfs;
    static get_local(): Vfs;
}
export class VolumeMonitor  {
    constructor(config?: properties);
    readonly priv: object;
    get_connected_drives(): GLib.List;
    get_mount_for_uuid(uuid: string): Mount;
    get_mounts(): GLib.List;
    get_volume_for_uuid(uuid: string): Volume;
    get_volumes(): GLib.List;
    static adopt_orphan_mount(mount: Mount): Volume;
    static get(): VolumeMonitor;
}
export class ZlibCompressor extends GObject.Object {
    constructor(config?: properties);
    file_info: FileInfo;
    format: ZlibCompressorFormat;
    level: number;
    get_file_info(): FileInfo;
    set_file_info(file_info: FileInfo | null): void;
}
export class ZlibDecompressor extends GObject.Object {
    constructor(config?: properties);
    readonly file_info: FileInfo;
    format: ZlibCompressorFormat;
    get_file_info(): FileInfo;
}
export class ActionEntry  {
    constructor(config?: properties);
    name: string;
    parameter_type: string;
    state: string;
    readonly padding: number[];
}
export class AppLaunchContextPrivate  {
    constructor(config?: properties);
}
export class ApplicationCommandLinePrivate  {
    constructor(config?: properties);
}
export class ApplicationPrivate  {
    constructor(config?: properties);
}
export class BufferedInputStreamPrivate  {
    constructor(config?: properties);
}
export class BufferedOutputStreamPrivate  {
    constructor(config?: properties);
}
export class CancellablePrivate  {
    constructor(config?: properties);
}
export class ConverterInputStreamPrivate  {
    constructor(config?: properties);
}
export class ConverterOutputStreamPrivate  {
    constructor(config?: properties);
}
export class DBusAnnotationInfo  {
    constructor(config?: properties);
    ref_count: number;
    key: string;
    value: string;
    annotations: DBusAnnotationInfo[];
    ref(): DBusAnnotationInfo;
    unref(): void;
    static lookup(annotations: DBusAnnotationInfo[] | null, name: string): string;
}
export class DBusArgInfo  {
    constructor(config?: properties);
    ref_count: number;
    name: string;
    signature: string;
    annotations: DBusAnnotationInfo[];
    ref(): DBusArgInfo;
    unref(): void;
}
export class DBusErrorEntry  {
    constructor(config?: properties);
    error_code: number;
    dbus_error_name: string;
}
export class DBusInterfaceInfo  {
    constructor(config?: properties);
    ref_count: number;
    name: string;
    methods: DBusMethodInfo[];
    signals: DBusSignalInfo[];
    properties: DBusPropertyInfo[];
    annotations: DBusAnnotationInfo[];
    cache_build(): void;
    cache_release(): void;
    generate_xml(indent: number, string_builder: GLib.String): void;
    lookup_method(name: string): DBusMethodInfo;
    lookup_property(name: string): DBusPropertyInfo;
    lookup_signal(name: string): DBusSignalInfo;
    ref(): DBusInterfaceInfo;
    unref(): void;
}
export class DBusInterfaceSkeletonPrivate  {
    constructor(config?: properties);
}
export class DBusInterfaceVTable  {
    constructor(config?: properties);
    method_call: DBusInterfaceMethodCallFunc;
    get_property: DBusInterfaceGetPropertyFunc;
    set_property: DBusInterfaceSetPropertyFunc;
    readonly padding: object[];
}
export class DBusMethodInfo  {
    constructor(config?: properties);
    ref_count: number;
    name: string;
    in_args: DBusArgInfo[];
    out_args: DBusArgInfo[];
    annotations: DBusAnnotationInfo[];
    ref(): DBusMethodInfo;
    unref(): void;
}
export class DBusNodeInfo  {
    constructor(config?: properties);
    static new_for_xml(xml_data: string): DBusNodeInfo;
    generate_xml(indent: number, string_builder: GLib.String): void;
    lookup_interface(name: string): DBusInterfaceInfo;
    ref(): DBusNodeInfo;
    unref(): void;
}
export class DBusObjectManagerClientPrivate  {
    constructor(config?: properties);
}
export class DBusObjectManagerServerPrivate  {
    constructor(config?: properties);
}
export class DBusObjectProxyPrivate  {
    constructor(config?: properties);
}
export class DBusObjectSkeletonPrivate  {
    constructor(config?: properties);
}
export class DBusPropertyInfo  {
    constructor(config?: properties);
    ref_count: number;
    name: string;
    signature: string;
    flags: DBusPropertyInfoFlags;
    annotations: DBusAnnotationInfo[];
    ref(): DBusPropertyInfo;
    unref(): void;
}
export class DBusProxyPrivate  {
    constructor(config?: properties);
}
export class DBusSignalInfo  {
    constructor(config?: properties);
    ref_count: number;
    name: string;
    args: DBusArgInfo[];
    annotations: DBusAnnotationInfo[];
    ref(): DBusSignalInfo;
    unref(): void;
}
export class DBusSubtreeVTable  {
    constructor(config?: properties);
    introspect: DBusSubtreeIntrospectFunc;
    dispatch: DBusSubtreeDispatchFunc;
    readonly padding: object[];
}
export class DataInputStreamPrivate  {
    constructor(config?: properties);
}
export class DataOutputStreamPrivate  {
    constructor(config?: properties);
}
export class EmblemedIconPrivate  {
    constructor(config?: properties);
}
export class FileAttributeInfo  {
    constructor(config?: properties);
    name: string;
    type: FileAttributeType;
    flags: FileAttributeInfoFlags;
}
export class FileAttributeInfoList  {
    constructor(config?: properties);
    add(name: string, type: FileAttributeType, flags: FileAttributeInfoFlags): void;
    dup(): FileAttributeInfoList;
    lookup(name: string): FileAttributeInfo;
    ref(): FileAttributeInfoList;
    unref(): void;
}
export class FileAttributeMatcher  {
    constructor(config?: properties);
    enumerate_namespace(ns: string): boolean;
    enumerate_next(): string;
    matches(attribute: string): boolean;
    matches_only(attribute: string): boolean;
    ref(): FileAttributeMatcher;
    subtract(subtract: FileAttributeMatcher): FileAttributeMatcher;
    to_string(): string;
    unref(): void;
}
export class FileEnumeratorPrivate  {
    constructor(config?: properties);
}
export class FileIOStreamPrivate  {
    constructor(config?: properties);
}
export class FileInputStreamPrivate  {
    constructor(config?: properties);
}
export class FileMonitorPrivate  {
    constructor(config?: properties);
}
export class FileOutputStreamPrivate  {
    constructor(config?: properties);
}
export class IOExtension  {
    constructor(config?: properties);
    get_name(): string;
    get_priority(): number;
    get_type(): GType;
}
export class IOExtensionPoint  {
    constructor(config?: properties);
    get_extension_by_name(name: string): IOExtension;
    get_extensions(): GLib.List;
    get_required_type(): GType;
    set_required_type(type: GType): void;
    static implement(extension_point_name: string, type: GType, extension_name: string, priority: number): IOExtension;
    static lookup(name: string): IOExtensionPoint;
    static register(name: string): IOExtensionPoint;
}
export class IOModuleScope  {
    constructor(config?: properties);
    block(basename: string): void;
    free(): void;
}
export class IOSchedulerJob  {
    constructor(config?: properties);
    send_to_mainloop(func: GLib.SourceFunc, user_data: object | null, notify: GLib.DestroyNotify | null): boolean;
    send_to_mainloop_async(func: GLib.SourceFunc, user_data: object | null, notify: GLib.DestroyNotify | null): void;
}
export class IOStreamAdapter  {
    constructor(config?: properties);
}
export class IOStreamPrivate  {
    constructor(config?: properties);
}
export class InetAddressMaskPrivate  {
    constructor(config?: properties);
}
export class InetAddressPrivate  {
    constructor(config?: properties);
}
export class InetSocketAddressPrivate  {
    constructor(config?: properties);
}
export class InputMessage  {
    constructor(config?: properties);
    address: SocketAddress;
    vectors: InputVector[];
    num_vectors: number;
    bytes_received: number;
    flags: number;
    control_messages: SocketControlMessage[];
    num_control_messages: number;
}
export class InputStreamPrivate  {
    constructor(config?: properties);
}
export class InputVector  {
    constructor(config?: properties);
    buffer: object;
    size: number;
}
export class MemoryInputStreamPrivate  {
    constructor(config?: properties);
}
export class MemoryOutputStreamPrivate  {
    constructor(config?: properties);
}
export class MenuAttributeIterPrivate  {
    constructor(config?: properties);
}
export class MenuLinkIterPrivate  {
    constructor(config?: properties);
}
export class MenuModelPrivate  {
    constructor(config?: properties);
}
export class MountOperationPrivate  {
    constructor(config?: properties);
}
export class NativeSocketAddress  {
    constructor(config?: properties);
}
export class NetworkAddressPrivate  {
    constructor(config?: properties);
}
export class NetworkServicePrivate  {
    constructor(config?: properties);
}
export class OutputMessage  {
    constructor(config?: properties);
    address: SocketAddress;
    vectors: OutputVector;
    num_vectors: number;
    bytes_sent: number;
    control_messages: SocketControlMessage[];
    num_control_messages: number;
}
export class OutputStreamPrivate  {
    constructor(config?: properties);
}
export class OutputVector  {
    constructor(config?: properties);
    buffer: object;
    size: number;
}
export class PermissionPrivate  {
    constructor(config?: properties);
}
export class ProxyAddressEnumeratorPrivate  {
    constructor(config?: properties);
}
export class ProxyAddressPrivate  {
    constructor(config?: properties);
}
export class ResolverPrivate  {
    constructor(config?: properties);
}
export class Resource  {
    constructor(config?: properties);
    static new_from_data(data: GLib.Bytes): Resource;
    _register(): void;
    _unregister(): void;
    enumerate_children(path: string, lookup_flags: ResourceLookupFlags): string[];
    get_info(path: string, lookup_flags: ResourceLookupFlags): [boolean, number | null,number | null];
    lookup_data(path: string, lookup_flags: ResourceLookupFlags): GLib.Bytes;
    open_stream(path: string, lookup_flags: ResourceLookupFlags): InputStream;
    ref(): Resource;
    unref(): void;
    static load(filename: string): Resource;
}
export class SettingsBackendPrivate  {
    constructor(config?: properties);
}
export class SettingsPrivate  {
    constructor(config?: properties);
}
export class SettingsSchema  {
    constructor(config?: properties);
    get_id(): string;
    get_key(name: string): SettingsSchemaKey;
    get_path(): string;
    has_key(name: string): boolean;
    list_children(): string[];
    list_keys(): string[];
    ref(): SettingsSchema;
    unref(): void;
}
export class SettingsSchemaKey  {
    constructor(config?: properties);
    get_default_value(): GLib.Variant;
    get_description(): string;
    get_name(): string;
    get_range(): GLib.Variant;
    get_summary(): string;
    get_value_type(): GLib.VariantType;
    range_check(value: GLib.Variant): boolean;
    ref(): SettingsSchemaKey;
    unref(): void;
}
export class SettingsSchemaSource  {
    constructor(config?: properties);
    static new_from_directory(directory: string, parent: SettingsSchemaSource | null, trusted: boolean): SettingsSchemaSource;
    list_schemas(recursive: boolean): [string[],string[]];
    lookup(schema_id: string, recursive: boolean): SettingsSchema | null;
    ref(): SettingsSchemaSource;
    unref(): void;
    static get_default(): SettingsSchemaSource | null;
}
export class SimpleActionGroupPrivate  {
    constructor(config?: properties);
}
export class SimpleProxyResolverPrivate  {
    constructor(config?: properties);
}
export class SocketClientPrivate  {
    constructor(config?: properties);
}
export class SocketConnectionPrivate  {
    constructor(config?: properties);
}
export class SocketControlMessagePrivate  {
    constructor(config?: properties);
}
export class SocketListenerPrivate  {
    constructor(config?: properties);
}
export class SocketPrivate  {
    constructor(config?: properties);
}
export class SocketServicePrivate  {
    constructor(config?: properties);
}
export class SrvTarget  {
    constructor(config?: properties);
    copy(): SrvTarget;
    free(): void;
    get_hostname(): string;
    get_port(): number;
    get_priority(): number;
    get_weight(): number;
}
export class StaticResource  {
    constructor(config?: properties);
    readonly data: number;
    readonly data_len: number;
    readonly resource: Resource;
    readonly next: StaticResource;
    readonly padding: object;
    fini(): void;
    get_resource(): Resource;
    init(): void;
}
export class TcpConnectionPrivate  {
    constructor(config?: properties);
}
export class TcpWrapperConnectionPrivate  {
    constructor(config?: properties);
}
export class ThreadedSocketServicePrivate  {
    constructor(config?: properties);
}
export class TlsCertificatePrivate  {
    constructor(config?: properties);
}
export class TlsConnectionPrivate  {
    constructor(config?: properties);
}
export class TlsDatabasePrivate  {
    constructor(config?: properties);
}
export class TlsInteractionPrivate  {
    constructor(config?: properties);
}
export class TlsPasswordPrivate  {
    constructor(config?: properties);
}
export class UnixConnectionPrivate  {
    constructor(config?: properties);
}
export class UnixCredentialsMessagePrivate  {
    constructor(config?: properties);
}
export class UnixFDListPrivate  {
    constructor(config?: properties);
}
export class UnixFDMessagePrivate  {
    constructor(config?: properties);
}
export class UnixInputStreamPrivate  {
    constructor(config?: properties);
}
export class UnixMountEntry  {
    constructor(config?: properties);
}
export class UnixMountPoint  {
    constructor(config?: properties);
    compare(mount2: UnixMountPoint): number;
    copy(): UnixMountPoint;
    free(): void;
    get_device_path(): string;
    get_fs_type(): string;
    get_mount_path(): string;
    get_options(): string;
    guess_can_eject(): boolean;
    guess_icon(): Icon;
    guess_name(): string;
    guess_symbolic_icon(): Icon;
    is_loopback(): boolean;
    is_readonly(): boolean;
    is_user_mountable(): boolean;
}
export class UnixOutputStreamPrivate  {
    constructor(config?: properties);
}
export class UnixSocketAddressPrivate  {
    constructor(config?: properties);
}
export interface Action  {
    readonly enabled: boolean;
    readonly name: string;
    readonly parameter_type: GLib.VariantType;
    readonly state: GLib.Variant;
    readonly state_type: GLib.VariantType;
    activate(parameter: GLib.Variant | null): void;
    change_state(value: GLib.Variant): void;
    get_enabled(): boolean;
    get_name(): string;
    get_parameter_type(): GLib.VariantType | null;
    get_state(): GLib.Variant;
    get_state_hint(): GLib.Variant | null;
    get_state_type(): GLib.VariantType | null;
}
export interface ActionGroup  {
    action_added(action_name: string): void;
    action_enabled_changed(action_name: string, enabled: boolean): void;
    action_removed(action_name: string): void;
    action_state_changed(action_name: string, state: GLib.Variant): void;
    activate_action(action_name: string, parameter: GLib.Variant | null): void;
    change_action_state(action_name: string, value: GLib.Variant): void;
    get_action_enabled(action_name: string): boolean;
    get_action_parameter_type(action_name: string): GLib.VariantType | null;
    get_action_state(action_name: string): GLib.Variant | null;
    get_action_state_hint(action_name: string): GLib.Variant | null;
    get_action_state_type(action_name: string): GLib.VariantType | null;
    has_action(action_name: string): boolean;
    list_actions(): string[];
    query_action(action_name: string): [boolean, boolean,GLib.VariantType | null,GLib.VariantType | null,GLib.Variant | null,GLib.Variant | null];
}
export interface ActionMap  {
    add_action(action: Action): void;
    add_action_entries(entries: ActionEntry[], n_entries: number, user_data: object | null): void;
    lookup_action(action_name: string): Action;
    remove_action(action_name: string): void;
}
export interface AppInfo  {
    add_supports_type(content_type: string): boolean;
    can_delete(): boolean;
    can_remove_supports_type(): boolean;
    ["delete"](): boolean;
    dup(): AppInfo;
    equal(appinfo2: AppInfo): boolean;
    get_commandline(): string;
    get_description(): string;
    get_display_name(): string;
    get_executable(): string;
    get_icon(): Icon;
    get_id(): string;
    get_name(): string;
    get_supported_types(): string[];
    launch(files: GLib.List | null, context: AppLaunchContext | null): boolean;
    launch_uris(uris: GLib.List | null, context: AppLaunchContext | null): boolean;
    launch_uris_async(uris: GLib.List | null, context: AppLaunchContext | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    launch_uris_finish(result: AsyncResult): boolean;
    remove_supports_type(content_type: string): boolean;
    set_as_default_for_extension(extension: string): boolean;
    set_as_default_for_type(content_type: string): boolean;
    set_as_last_used_for_type(content_type: string): boolean;
    should_show(): boolean;
    supports_files(): boolean;
    supports_uris(): boolean;
}
export interface AsyncInitable  {
    init_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    init_finish(res: AsyncResult): boolean;
    new_finish(res: AsyncResult): GObject.Object;
}
export interface AsyncResult  {
    get_source_object(): GObject.Object | null;
    get_user_data(): object | null;
    is_tagged(source_tag: object | null): boolean;
    legacy_propagate_error(): boolean;
}
export interface Converter  {
    convert(inbuf: number[], inbuf_size: number, outbuf: number[], outbuf_size: number, flags: ConverterFlags): [ConverterResult, number,number];
    reset(): void;
}
export interface DBusInterface  {
    dup_object(): DBusObject;
    get_info(): DBusInterfaceInfo;
    set_object(object: DBusObject | null): void;
}
export interface DBusObject  {
    get_interface(interface_name: string): DBusInterface;
    get_interfaces(): GLib.List;
    get_object_path(): string;
}
export interface DBusObjectManager  {
    get_interface(object_path: string, interface_name: string): DBusInterface;
    get_object(object_path: string): DBusObject;
    get_object_path(): string;
    get_objects(): GLib.List;
}
export interface DatagramBased  {
    condition_check(condition: GLib.IOCondition): GLib.IOCondition;
    condition_wait(condition: GLib.IOCondition, timeout: number, cancellable: Cancellable | null): boolean;
    create_source(condition: GLib.IOCondition, cancellable: Cancellable | null): GLib.Source;
    receive_messages(messages: InputMessage[], num_messages: number, flags: number, timeout: number, cancellable: Cancellable | null): number;
    send_messages(messages: OutputMessage[], num_messages: number, flags: number, timeout: number, cancellable: Cancellable | null): number;
}
export interface DesktopAppInfoLookup  {
    get_default_for_uri_scheme(uri_scheme: string): AppInfo;
}
export interface Drive  {
    can_eject(): boolean;
    can_poll_for_media(): boolean;
    can_start(): boolean;
    can_start_degraded(): boolean;
    can_stop(): boolean;
    eject(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    eject_finish(result: AsyncResult): boolean;
    eject_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    eject_with_operation_finish(result: AsyncResult): boolean;
    enumerate_identifiers(): string[];
    get_icon(): Icon;
    get_identifier(kind: string): string | null;
    get_name(): string;
    get_sort_key(): string | null;
    get_start_stop_type(): DriveStartStopType;
    get_symbolic_icon(): Icon;
    get_volumes(): GLib.List;
    has_media(): boolean;
    has_volumes(): boolean;
    is_media_check_automatic(): boolean;
    is_media_removable(): boolean;
    is_removable(): boolean;
    poll_for_media(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    poll_for_media_finish(result: AsyncResult): boolean;
    start(flags: DriveStartFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    start_finish(result: AsyncResult): boolean;
    stop(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    stop_finish(result: AsyncResult): boolean;
}
export interface DtlsClientConnection  {
    readonly accepted_cas: GLib.List;
    server_identity: SocketConnectable;
    validation_flags: TlsCertificateFlags;
    get_accepted_cas(): GLib.List;
    get_server_identity(): SocketConnectable;
    get_validation_flags(): TlsCertificateFlags;
    set_server_identity(identity: SocketConnectable): void;
    set_validation_flags(flags: TlsCertificateFlags): void;
}
export interface DtlsConnection  {
    advertised_protocols: string[];
    base_socket: DatagramBased;
    certificate: TlsCertificate;
    database: TlsDatabase;
    interaction: TlsInteraction;
    readonly negotiated_protocol: string;
    readonly peer_certificate: TlsCertificate;
    readonly peer_certificate_errors: TlsCertificateFlags;
    rehandshake_mode: TlsRehandshakeMode;
    require_close_notify: boolean;
    close(cancellable: Cancellable | null): boolean;
    close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    close_finish(result: AsyncResult): boolean;
    emit_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean;
    get_certificate(): TlsCertificate;
    get_database(): TlsDatabase;
    get_interaction(): TlsInteraction;
    get_negotiated_protocol(): string | null;
    get_peer_certificate(): TlsCertificate;
    get_peer_certificate_errors(): TlsCertificateFlags;
    get_rehandshake_mode(): TlsRehandshakeMode;
    get_require_close_notify(): boolean;
    handshake(cancellable: Cancellable | null): boolean;
    handshake_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    handshake_finish(result: AsyncResult): boolean;
    set_advertised_protocols(protocols: string[] | null): void;
    set_certificate(certificate: TlsCertificate): void;
    set_database(database: TlsDatabase): void;
    set_interaction(interaction: TlsInteraction | null): void;
    set_rehandshake_mode(mode: TlsRehandshakeMode): void;
    set_require_close_notify(require_close_notify: boolean): void;
    shutdown(shutdown_read: boolean, shutdown_write: boolean, cancellable: Cancellable | null): boolean;
    shutdown_async(shutdown_read: boolean, shutdown_write: boolean, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    shutdown_finish(result: AsyncResult): boolean;
}
export interface DtlsServerConnection  {
    authentication_mode: TlsAuthenticationMode;
}
export interface File  {
    append_to(flags: FileCreateFlags, cancellable: Cancellable | null): FileOutputStream;
    append_to_async(flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    append_to_finish(res: AsyncResult): FileOutputStream;
    copy(destination: File, flags: FileCopyFlags, cancellable: Cancellable | null, progress_callback: FileProgressCallback | null, progress_callback_data: object | null): boolean;
    copy_async(destination: File, flags: FileCopyFlags, io_priority: number, cancellable: Cancellable | null, progress_callback: FileProgressCallback | null, progress_callback_data: object | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    copy_attributes(destination: File, flags: FileCopyFlags, cancellable: Cancellable | null): boolean;
    copy_finish(res: AsyncResult): boolean;
    create(flags: FileCreateFlags, cancellable: Cancellable | null): FileOutputStream;
    create_async(flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    create_finish(res: AsyncResult): FileOutputStream;
    create_readwrite(flags: FileCreateFlags, cancellable: Cancellable | null): FileIOStream;
    create_readwrite_async(flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    create_readwrite_finish(res: AsyncResult): FileIOStream;
    ["delete"](cancellable: Cancellable | null): boolean;
    delete_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    delete_finish(result: AsyncResult): boolean;
    dup(): File;
    eject_mountable(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    eject_mountable_finish(result: AsyncResult): boolean;
    eject_mountable_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    eject_mountable_with_operation_finish(result: AsyncResult): boolean;
    enumerate_children(attributes: string, flags: FileQueryInfoFlags, cancellable: Cancellable | null): FileEnumerator;
    enumerate_children_async(attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    enumerate_children_finish(res: AsyncResult): FileEnumerator;
    equal(file2: File): boolean;
    find_enclosing_mount(cancellable: Cancellable | null): Mount;
    find_enclosing_mount_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    find_enclosing_mount_finish(res: AsyncResult): Mount;
    get_basename(): string | null;
    get_child(name: string): File;
    get_child_for_display_name(display_name: string): File;
    get_parent(): File | null;
    get_parse_name(): string;
    get_path(): string | null;
    get_relative_path(descendant: File): string | null;
    get_uri(): string;
    get_uri_scheme(): string;
    has_parent(parent: File | null): boolean;
    has_prefix(prefix: File): boolean;
    has_uri_scheme(uri_scheme: string): boolean;
    hash(): number;
    is_native(): boolean;
    load_bytes(cancellable: Cancellable | null): [GLib.Bytes, string | null];
    load_bytes_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    load_bytes_finish(result: AsyncResult): [GLib.Bytes, string | null];
    load_contents(cancellable: Cancellable | null): [boolean, number[],number | null,string | null];
    load_contents_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    load_contents_finish(res: AsyncResult): [boolean, number[],number | null,string | null];
    load_partial_contents_finish(res: AsyncResult): [boolean, number[],number | null,string | null];
    make_directory(cancellable: Cancellable | null): boolean;
    make_directory_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    make_directory_finish(result: AsyncResult): boolean;
    make_directory_with_parents(cancellable: Cancellable | null): boolean;
    make_symbolic_link(symlink_value: string, cancellable: Cancellable | null): boolean;
    measure_disk_usage_finish(result: AsyncResult): [boolean, number | null,number | null,number | null];
    monitor(flags: FileMonitorFlags, cancellable: Cancellable | null): FileMonitor;
    monitor_directory(flags: FileMonitorFlags, cancellable: Cancellable | null): FileMonitor;
    monitor_file(flags: FileMonitorFlags, cancellable: Cancellable | null): FileMonitor;
    mount_enclosing_volume(flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    mount_enclosing_volume_finish(result: AsyncResult): boolean;
    mount_mountable(flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    mount_mountable_finish(result: AsyncResult): File;
    move(destination: File, flags: FileCopyFlags, cancellable: Cancellable | null, progress_callback: FileProgressCallback | null, progress_callback_data: object | null): boolean;
    open_readwrite(cancellable: Cancellable | null): FileIOStream;
    open_readwrite_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    open_readwrite_finish(res: AsyncResult): FileIOStream;
    peek_path(): string | null;
    poll_mountable(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    poll_mountable_finish(result: AsyncResult): boolean;
    query_default_handler(cancellable: Cancellable | null): AppInfo;
    query_default_handler_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    query_default_handler_finish(result: AsyncResult): AppInfo;
    query_exists(cancellable: Cancellable | null): boolean;
    query_file_type(flags: FileQueryInfoFlags, cancellable: Cancellable | null): FileType;
    query_filesystem_info(attributes: string, cancellable: Cancellable | null): FileInfo;
    query_filesystem_info_async(attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    query_filesystem_info_finish(res: AsyncResult): FileInfo;
    query_info(attributes: string, flags: FileQueryInfoFlags, cancellable: Cancellable | null): FileInfo;
    query_info_async(attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    query_info_finish(res: AsyncResult): FileInfo;
    query_settable_attributes(cancellable: Cancellable | null): FileAttributeInfoList;
    query_writable_namespaces(cancellable: Cancellable | null): FileAttributeInfoList;
    read(cancellable: Cancellable | null): FileInputStream;
    read_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    read_finish(res: AsyncResult): FileInputStream;
    replace(etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null): FileOutputStream;
    replace_async(etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    replace_contents(contents: number[], length: number, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null): [boolean, string | null];
    replace_contents_async(contents: number[], length: number, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    replace_contents_bytes_async(contents: GLib.Bytes, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    replace_contents_finish(res: AsyncResult): [boolean, string | null];
    replace_finish(res: AsyncResult): FileOutputStream;
    replace_readwrite(etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null): FileIOStream;
    replace_readwrite_async(etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    replace_readwrite_finish(res: AsyncResult): FileIOStream;
    resolve_relative_path(relative_path: string): File;
    set_attribute(attribute: string, type: FileAttributeType, value_p: object | null, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean;
    set_attribute_byte_string(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean;
    set_attribute_int32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean;
    set_attribute_int64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean;
    set_attribute_string(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean;
    set_attribute_uint32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean;
    set_attribute_uint64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean;
    set_attributes_async(info: FileInfo, flags: FileQueryInfoFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    set_attributes_finish(result: AsyncResult): [boolean, FileInfo];
    set_attributes_from_info(info: FileInfo, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean;
    set_display_name(display_name: string, cancellable: Cancellable | null): File;
    set_display_name_async(display_name: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    set_display_name_finish(res: AsyncResult): File;
    start_mountable(flags: DriveStartFlags, start_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    start_mountable_finish(result: AsyncResult): boolean;
    stop_mountable(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    stop_mountable_finish(result: AsyncResult): boolean;
    supports_thread_contexts(): boolean;
    trash(cancellable: Cancellable | null): boolean;
    trash_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    trash_finish(result: AsyncResult): boolean;
    unmount_mountable(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    unmount_mountable_finish(result: AsyncResult): boolean;
    unmount_mountable_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    unmount_mountable_with_operation_finish(result: AsyncResult): boolean;
}
export interface FileDescriptorBased  {
    get_fd(): number;
}
export interface Icon  {
    equal(icon2: Icon | null): boolean;
    serialize(): GLib.Variant;
    to_string(): string | null;
}
export interface Initable  {
    init(cancellable: Cancellable | null): boolean;
}
export interface ListModel  {
    get_item_type(): GType;
    get_n_items(): number;
    get_object(position: number): GObject.Object | null;
    items_changed(position: number, removed: number, added: number): void;
}
export interface LoadableIcon  {
    load(size: number, cancellable: Cancellable | null): [InputStream, string | null];
    load_async(size: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    load_finish(res: AsyncResult): [InputStream, string | null];
}
export interface Mount  {
    can_eject(): boolean;
    can_unmount(): boolean;
    eject(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    eject_finish(result: AsyncResult): boolean;
    eject_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    eject_with_operation_finish(result: AsyncResult): boolean;
    get_default_location(): File;
    get_drive(): Drive | null;
    get_icon(): Icon;
    get_name(): string;
    get_root(): File;
    get_sort_key(): string | null;
    get_symbolic_icon(): Icon;
    get_uuid(): string | null;
    get_volume(): Volume | null;
    guess_content_type(force_rescan: boolean, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    guess_content_type_finish(result: AsyncResult): string[];
    guess_content_type_sync(force_rescan: boolean, cancellable: Cancellable | null): string[];
    is_shadowed(): boolean;
    remount(flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    remount_finish(result: AsyncResult): boolean;
    shadow(): void;
    unmount(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    unmount_finish(result: AsyncResult): boolean;
    unmount_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    unmount_with_operation_finish(result: AsyncResult): boolean;
    unshadow(): void;
}
export interface NetworkMonitor  {
    readonly connectivity: NetworkConnectivity;
    readonly network_available: boolean;
    readonly network_metered: boolean;
    can_reach(connectable: SocketConnectable, cancellable: Cancellable | null): boolean;
    can_reach_async(connectable: SocketConnectable, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    can_reach_finish(result: AsyncResult): boolean;
    get_connectivity(): NetworkConnectivity;
    get_network_available(): boolean;
    get_network_metered(): boolean;
}
export interface PollableInputStream  {
    can_poll(): boolean;
    create_source(cancellable: Cancellable | null): GLib.Source;
    is_readable(): boolean;
    read_nonblocking(buffer: number[], count: number, cancellable: Cancellable | null): number;
}
export interface PollableOutputStream  {
    can_poll(): boolean;
    create_source(cancellable: Cancellable | null): GLib.Source;
    is_writable(): boolean;
    write_nonblocking(buffer: number[], count: number, cancellable: Cancellable | null): number;
    writev_nonblocking(vectors: OutputVector[], n_vectors: number, cancellable: Cancellable | null): [PollableReturn, number | null];
}
export interface Proxy  {
    connect(connection: IOStream, proxy_address: ProxyAddress, cancellable: Cancellable | null): IOStream;
    connect_async(connection: IOStream, proxy_address: ProxyAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    connect_finish(result: AsyncResult): IOStream;
    supports_hostname(): boolean;
}
export interface ProxyResolver  {
    is_supported(): boolean;
    lookup(uri: string, cancellable: Cancellable | null): string[];
    lookup_async(uri: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    lookup_finish(result: AsyncResult): string[];
}
export interface RemoteActionGroup  {
    activate_action_full(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void;
    change_action_state_full(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void;
}
export interface Seekable  {
    can_seek(): boolean;
    can_truncate(): boolean;
    seek(offset: number, type: GLib.SeekType, cancellable: Cancellable | null): boolean;
    tell(): number;
    truncate(offset: number, cancellable: Cancellable | null): boolean;
}
export interface SocketConnectable  {
    enumerate(): SocketAddressEnumerator;
    proxy_enumerate(): SocketAddressEnumerator;
    to_string(): string;
}
export interface TlsBackend  {
    get_certificate_type(): GType;
    get_client_connection_type(): GType;
    get_default_database(): TlsDatabase;
    get_dtls_client_connection_type(): GType;
    get_dtls_server_connection_type(): GType;
    get_file_database_type(): GType;
    get_server_connection_type(): GType;
    set_default_database(database: TlsDatabase | null): void;
    supports_dtls(): boolean;
    supports_tls(): boolean;
}
export interface TlsClientConnection  {
    readonly accepted_cas: GLib.List;
    server_identity: SocketConnectable;
    use_ssl3: boolean;
    validation_flags: TlsCertificateFlags;
    copy_session_state(source: TlsClientConnection): void;
    get_accepted_cas(): GLib.List;
    get_server_identity(): SocketConnectable;
    get_use_ssl3(): boolean;
    get_validation_flags(): TlsCertificateFlags;
    set_server_identity(identity: SocketConnectable): void;
    set_use_ssl3(use_ssl3: boolean): void;
    set_validation_flags(flags: TlsCertificateFlags): void;
}
export interface TlsFileDatabase  {
    anchors: string;
}
export interface TlsServerConnection  {
    authentication_mode: TlsAuthenticationMode;
}
export interface Volume  {
    can_eject(): boolean;
    can_mount(): boolean;
    eject(flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    eject_finish(result: AsyncResult): boolean;
    eject_with_operation(flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    eject_with_operation_finish(result: AsyncResult): boolean;
    enumerate_identifiers(): string[];
    get_activation_root(): File | null;
    get_drive(): Drive | null;
    get_icon(): Icon;
    get_identifier(kind: string): string | null;
    get_mount(): Mount | null;
    get_name(): string;
    get_sort_key(): string | null;
    get_symbolic_icon(): Icon;
    get_uuid(): string | null;
    mount(flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
    mount_finish(result: AsyncResult): boolean;
    should_automount(): boolean;
}