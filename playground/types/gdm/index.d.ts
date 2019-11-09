
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gdm from "gdm";
/**
 * gdm.d.ts
 */
type properties = { [key: string]: any };
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-DisplayManager-Chooser.top_of_page">org.gnome.DisplayMan
 * ager.Chooser</link> D-Bus interface.
 */
export function chooser_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GdmChooser interface for a c
 * oncrete class.
 * The properties are overridden in the order they are defined.
 */
export function chooser_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Reads /usr/share/xsessions and other relevant places for possible sess
 * ions
 * to log into and returns the complete list.
 */
export function get_session_ids(): string[];
/**
 * Takes an xsession id and returns the name and comment about it.
 */
export function get_session_name_and_description(id: string): [string, string];
/**
 * 
 */
export function goto_login_session_sync(cancellable: Gio.Cancellable | null): boolean;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-DisplayManager-Greeter.top_of_page">org.gnome.DisplayMan
 * ager.Greeter</link> D-Bus interface.
 */
export function greeter_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GdmGreeter interface for a c
 * oncrete class.
 * The properties are overridden in the order they are defined.
 */
export function greeter_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-DisplayManager-Manager.top_of_page">org.gnome.DisplayMan
 * ager.Manager</link> D-Bus interface.
 */
export function manager_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GdmManager interface for a c
 * oncrete class.
 * The properties are overridden in the order they are defined.
 */
export function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-DisplayManager-RemoteGreeter.top_of_page">org.gnome.Disp
 * layManager.RemoteGreeter</link> D-Bus interface.
 */
export function remote_greeter_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GdmRemoteGreeter interface f
 * or a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function remote_greeter_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-DisplayManager-UserVerifier-ChoiceList.top_of_page">org.
 * gnome.DisplayManager.UserVerifier.ChoiceList</link> D-Bus interface.
 */
export function user_verifier_choice_list_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GdmUserVerifierChoiceList in
 * terface for a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function user_verifier_choice_list_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-DisplayManager-UserVerifier.top_of_page">org.gnome.Displ
 * ayManager.UserVerifier</link> D-Bus interface.
 */
export function user_verifier_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GdmUserVerifier interface fo
 * r a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function user_verifier_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-DisplayManager-WorkerManager.top_of_page">org.gnome.Disp
 * layManager.WorkerManager</link> D-Bus interface.
 */
export function worker_manager_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GdmWorkerManager interface f
 * or a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function worker_manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
export enum ClientError {
    CLIENT_ERROR_GENERIC = 0,
}
export class ChooserProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): ChooserProxy;
static new_finish(...args: never[]): ChooserProxy;
static new_for_bus_finish(res: Gio.AsyncResult): ChooserProxy;
static new_for_bus_finish(...args: never[]): ChooserProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ChooserProxy;
static new_for_bus_sync(...args: never[]): ChooserProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ChooserProxy;
static new_sync(...args: never[]): ChooserProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class ChooserSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class Client extends GObject.Object {constructor(config?: properties);
get_chooser(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_chooser_finish(result: Gio.AsyncResult): Chooser;
get_chooser_sync(cancellable: Gio.Cancellable | null): Chooser;
get_greeter(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_greeter_finish(result: Gio.AsyncResult): Greeter;
get_greeter_sync(cancellable: Gio.Cancellable | null): Greeter;
get_remote_greeter(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_remote_greeter_finish(result: Gio.AsyncResult): RemoteGreeter;
get_remote_greeter_sync(cancellable: Gio.Cancellable | null): RemoteGreeter;
get_user_verifier(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_user_verifier_choice_list(): UserVerifierChoiceList;
get_user_verifier_finish(result: Gio.AsyncResult): UserVerifier;
get_user_verifier_sync(cancellable: Gio.Cancellable | null): UserVerifier;
open_reauthentication_channel(username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
open_reauthentication_channel_finish(result: Gio.AsyncResult): UserVerifier;
open_reauthentication_channel_sync(username: string, cancellable: Gio.Cancellable | null): UserVerifier;
set_enabled_extensions(extensions: string[]): void;
static error_quark(): GLib.Quark;
}
export class GreeterProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): GreeterProxy;
static new_finish(...args: never[]): GreeterProxy;
static new_for_bus_finish(res: Gio.AsyncResult): GreeterProxy;
static new_for_bus_finish(...args: never[]): GreeterProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GreeterProxy;
static new_for_bus_sync(...args: never[]): GreeterProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GreeterProxy;
static new_sync(...args: never[]): GreeterProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class GreeterSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class ManagerProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): ManagerProxy;
static new_finish(...args: never[]): ManagerProxy;
static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy;
static new_for_bus_finish(...args: never[]): ManagerProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ManagerProxy;
static new_for_bus_sync(...args: never[]): ManagerProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ManagerProxy;
static new_sync(...args: never[]): ManagerProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class ManagerSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class RemoteGreeterProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): RemoteGreeterProxy;
static new_finish(...args: never[]): RemoteGreeterProxy;
static new_for_bus_finish(res: Gio.AsyncResult): RemoteGreeterProxy;
static new_for_bus_finish(...args: never[]): RemoteGreeterProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): RemoteGreeterProxy;
static new_for_bus_sync(...args: never[]): RemoteGreeterProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): RemoteGreeterProxy;
static new_sync(...args: never[]): RemoteGreeterProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class RemoteGreeterSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class UserVerifierChoiceListProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): UserVerifierChoiceListProxy;
static new_finish(...args: never[]): UserVerifierChoiceListProxy;
static new_for_bus_finish(res: Gio.AsyncResult): UserVerifierChoiceListProxy;
static new_for_bus_finish(...args: never[]): UserVerifierChoiceListProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): UserVerifierChoiceListProxy;
static new_for_bus_sync(...args: never[]): UserVerifierChoiceListProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): UserVerifierChoiceListProxy;
static new_sync(...args: never[]): UserVerifierChoiceListProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class UserVerifierChoiceListSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class UserVerifierProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): UserVerifierProxy;
static new_finish(...args: never[]): UserVerifierProxy;
static new_for_bus_finish(res: Gio.AsyncResult): UserVerifierProxy;
static new_for_bus_finish(...args: never[]): UserVerifierProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): UserVerifierProxy;
static new_for_bus_sync(...args: never[]): UserVerifierProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): UserVerifierProxy;
static new_sync(...args: never[]): UserVerifierProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class UserVerifierSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class WorkerManagerProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): WorkerManagerProxy;
static new_finish(...args: never[]): WorkerManagerProxy;
static new_for_bus_finish(res: Gio.AsyncResult): WorkerManagerProxy;
static new_for_bus_finish(...args: never[]): WorkerManagerProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): WorkerManagerProxy;
static new_for_bus_sync(...args: never[]): WorkerManagerProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): WorkerManagerProxy;
static new_sync(...args: never[]): WorkerManagerProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class WorkerManagerSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class ChooserIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly handle_disconnect: unknown;
readonly handle_select_hostname: unknown;
}
export class ChooserProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class ChooserProxyPrivate  {constructor(config?: properties);
}
export class ChooserSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class ChooserSkeletonPrivate  {constructor(config?: properties);
}
export class ClientClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class GreeterIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly handle_begin_auto_login: unknown;
readonly handle_get_timed_login_details: unknown;
readonly handle_select_session: unknown;
readonly handle_select_user: unknown;
readonly handle_start_session_when_ready: unknown;
readonly default_language_name_changed: unknown;
readonly default_session_name_changed: unknown;
readonly reauthenticated: unknown;
readonly selected_user_changed: unknown;
readonly session_opened: unknown;
readonly timed_login_requested: unknown;
}
export class GreeterProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class GreeterProxyPrivate  {constructor(config?: properties);
}
export class GreeterSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class GreeterSkeletonPrivate  {constructor(config?: properties);
}
export class ManagerIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly handle_open_reauthentication_channel: unknown;
readonly handle_open_session: unknown;
readonly handle_register_display: unknown;
readonly handle_register_session: unknown;
readonly get_version: unknown;
}
export class ManagerProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class ManagerProxyPrivate  {constructor(config?: properties);
}
export class ManagerSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class ManagerSkeletonPrivate  {constructor(config?: properties);
}
export class RemoteGreeterIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly handle_disconnect: unknown;
}
export class RemoteGreeterProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class RemoteGreeterProxyPrivate  {constructor(config?: properties);
}
export class RemoteGreeterSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class RemoteGreeterSkeletonPrivate  {constructor(config?: properties);
}
export class UserVerifierChoiceListIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly handle_select_choice: unknown;
readonly choice_query: unknown;
}
export class UserVerifierChoiceListProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class UserVerifierChoiceListProxyPrivate  {constructor(config?: properties);
}
export class UserVerifierChoiceListSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class UserVerifierChoiceListSkeletonPrivate  {constructor(config?: properties);
}
export class UserVerifierIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly handle_answer_query: unknown;
readonly handle_begin_verification: unknown;
readonly handle_begin_verification_for_user: unknown;
readonly handle_cancel: unknown;
readonly handle_enable_extensions: unknown;
readonly conversation_started: unknown;
readonly conversation_stopped: unknown;
readonly info: unknown;
readonly info_query: unknown;
readonly problem: unknown;
readonly reauthentication_started: unknown;
readonly reset: unknown;
readonly secret_info_query: unknown;
readonly service_unavailable: unknown;
readonly verification_complete: unknown;
readonly verification_failed: unknown;
}
export class UserVerifierProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class UserVerifierProxyPrivate  {constructor(config?: properties);
}
export class UserVerifierSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class UserVerifierSkeletonPrivate  {constructor(config?: properties);
}
export class WorkerManagerIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly handle_choice_list_query: unknown;
readonly handle_hello: unknown;
readonly handle_info: unknown;
readonly handle_info_query: unknown;
readonly handle_problem: unknown;
readonly handle_secret_info_query: unknown;
}
export class WorkerManagerProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class WorkerManagerProxyPrivate  {constructor(config?: properties);
}
export class WorkerManagerSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class WorkerManagerSkeletonPrivate  {constructor(config?: properties);
}
export interface Chooser  {
call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_disconnect_finish(res: Gio.AsyncResult): boolean;
call_disconnect_sync(cancellable: Gio.Cancellable | null): boolean;
call_select_hostname(arg_hostname: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_select_hostname_finish(res: Gio.AsyncResult): boolean;
call_select_hostname_sync(arg_hostname: string, cancellable: Gio.Cancellable | null): boolean;
complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
complete_select_hostname(invocation: Gio.DBusMethodInvocation): void;
}
export interface Greeter  {
call_begin_auto_login(arg_username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_begin_auto_login_finish(res: Gio.AsyncResult): boolean;
call_begin_auto_login_sync(arg_username: string, cancellable: Gio.Cancellable | null): boolean;
call_get_timed_login_details(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_get_timed_login_details_finish(res: Gio.AsyncResult): [boolean, boolean | null,string | null,number | null];
call_get_timed_login_details_sync(cancellable: Gio.Cancellable | null): [boolean, boolean | null,string | null,number | null];
call_select_session(arg_session: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_select_session_finish(res: Gio.AsyncResult): boolean;
call_select_session_sync(arg_session: string, cancellable: Gio.Cancellable | null): boolean;
call_select_user(arg_username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_select_user_finish(res: Gio.AsyncResult): boolean;
call_select_user_sync(arg_username: string, cancellable: Gio.Cancellable | null): boolean;
call_start_session_when_ready(arg_service_name: string, arg_should_start_session: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_start_session_when_ready_finish(res: Gio.AsyncResult): boolean;
call_start_session_when_ready_sync(arg_service_name: string, arg_should_start_session: boolean, cancellable: Gio.Cancellable | null): boolean;
complete_begin_auto_login(invocation: Gio.DBusMethodInvocation): void;
complete_get_timed_login_details(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string, delay: number): void;
complete_select_session(invocation: Gio.DBusMethodInvocation): void;
complete_select_user(invocation: Gio.DBusMethodInvocation): void;
complete_start_session_when_ready(invocation: Gio.DBusMethodInvocation): void;
emit_default_language_name_changed(arg_language_name: string): void;
emit_default_session_name_changed(arg_session_name: string): void;
emit_reauthenticated(arg_service_name: string): void;
emit_selected_user_changed(arg_username: string): void;
emit_session_opened(arg_service_name: string): void;
emit_timed_login_requested(arg_username: string, arg_delay: number): void;
}
export interface Manager  {
version: string;
call_open_reauthentication_channel(arg_username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_open_reauthentication_channel_finish(res: Gio.AsyncResult): [boolean, string | null];
call_open_reauthentication_channel_sync(arg_username: string, cancellable: Gio.Cancellable | null): [boolean, string | null];
call_open_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_open_session_finish(res: Gio.AsyncResult): [boolean, string | null];
call_open_session_sync(cancellable: Gio.Cancellable | null): [boolean, string | null];
call_register_display(arg_details: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_register_display_finish(res: Gio.AsyncResult): boolean;
call_register_display_sync(arg_details: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
call_register_session(arg_details: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_register_session_finish(res: Gio.AsyncResult): boolean;
call_register_session_sync(arg_details: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void;
complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void;
complete_register_display(invocation: Gio.DBusMethodInvocation): void;
complete_register_session(invocation: Gio.DBusMethodInvocation): void;
dup_version(): string | null;
get_version(): string | null;
set_version(value: string): void;
}
export interface RemoteGreeter  {
call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_disconnect_finish(res: Gio.AsyncResult): boolean;
call_disconnect_sync(cancellable: Gio.Cancellable | null): boolean;
complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
}
export interface UserVerifier  {
call_answer_query(arg_service_name: string, arg_answer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_answer_query_finish(res: Gio.AsyncResult): boolean;
call_answer_query_sync(arg_service_name: string, arg_answer: string, cancellable: Gio.Cancellable | null): boolean;
call_begin_verification(arg_service_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_begin_verification_finish(res: Gio.AsyncResult): boolean;
call_begin_verification_for_user(arg_service_name: string, arg_username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean;
call_begin_verification_for_user_sync(arg_service_name: string, arg_username: string, cancellable: Gio.Cancellable | null): boolean;
call_begin_verification_sync(arg_service_name: string, cancellable: Gio.Cancellable | null): boolean;
call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_cancel_finish(res: Gio.AsyncResult): boolean;
call_cancel_sync(cancellable: Gio.Cancellable | null): boolean;
call_enable_extensions(arg_extensions: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_enable_extensions_finish(res: Gio.AsyncResult): boolean;
call_enable_extensions_sync(arg_extensions: string, cancellable: Gio.Cancellable | null): boolean;
complete_answer_query(invocation: Gio.DBusMethodInvocation): void;
complete_begin_verification(invocation: Gio.DBusMethodInvocation): void;
complete_begin_verification_for_user(invocation: Gio.DBusMethodInvocation): void;
complete_cancel(invocation: Gio.DBusMethodInvocation): void;
complete_enable_extensions(invocation: Gio.DBusMethodInvocation): void;
emit_conversation_started(arg_service_name: string): void;
emit_conversation_stopped(arg_service_name: string): void;
emit_info(arg_service_name: string, arg_info: string): void;
emit_info_query(arg_service_name: string, arg_query: string): void;
emit_problem(arg_service_name: string, arg_problem: string): void;
emit_reauthentication_started(arg_pid_of_caller: number): void;
emit_reset(): void;
emit_secret_info_query(arg_service_name: string, arg_query: string): void;
emit_service_unavailable(arg_service_name: string, arg_message: string): void;
emit_verification_complete(arg_service_name: string): void;
emit_verification_failed(arg_service_name: string): void;
}
export interface UserVerifierChoiceList  {
call_select_choice(arg_service_name: string, arg_choice: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_select_choice_finish(res: Gio.AsyncResult): boolean;
call_select_choice_sync(arg_service_name: string, arg_choice: string, cancellable: Gio.Cancellable | null): boolean;
complete_select_choice(invocation: Gio.DBusMethodInvocation): void;
emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;
}
export interface WorkerManager  {
call_choice_list_query(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_choice_list_query_finish(res: Gio.AsyncResult): [boolean, string | null];
call_choice_list_query_sync(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string | null];
call_hello(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_hello_finish(res: Gio.AsyncResult): boolean;
call_hello_sync(cancellable: Gio.Cancellable | null): boolean;
call_info(arg_service_name: string, arg_info: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_info_finish(res: Gio.AsyncResult): boolean;
call_info_query(arg_service_name: string, arg_query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_info_query_finish(res: Gio.AsyncResult): [boolean, string | null];
call_info_query_sync(arg_service_name: string, arg_query: string, cancellable: Gio.Cancellable | null): [boolean, string | null];
call_info_sync(arg_service_name: string, arg_info: string, cancellable: Gio.Cancellable | null): boolean;
call_problem(arg_service_name: string, arg_problem: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_problem_finish(res: Gio.AsyncResult): boolean;
call_problem_sync(arg_service_name: string, arg_problem: string, cancellable: Gio.Cancellable | null): boolean;
call_secret_info_query(arg_service_name: string, arg_query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_secret_info_query_finish(res: Gio.AsyncResult): [boolean, string | null];
call_secret_info_query_sync(arg_service_name: string, arg_query: string, cancellable: Gio.Cancellable | null): [boolean, string | null];
complete_choice_list_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
complete_hello(invocation: Gio.DBusMethodInvocation): void;
complete_info(invocation: Gio.DBusMethodInvocation): void;
complete_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
complete_problem(invocation: Gio.DBusMethodInvocation): void;
complete_secret_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
}