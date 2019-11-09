
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Geoclue from "geoclue";
/**
 * geoclue.d.ts
 */
type properties = { [key: string]: any };
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoCl
 * ue2.Client</link> D-Bus interface.
 */
export function client_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GClueClient interface for a 
 * concrete class.
 * The properties are overridden in the order they are defined.
 */
export function client_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.Geo
 * Clue2.Location</link> D-Bus interface.
 */
export function location_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GClueLocation interface for 
 * a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function location_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoC
 * lue2.Manager</link> D-Bus interface.
 */
export function manager_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GClueManager interface for a
 *  concrete class.
 * The properties are overridden in the order they are defined.
 */
export function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
export enum AccuracyLevel {
    NONE = 0,
    COUNTRY = 1,
    CITY = 4,
    NEIGHBORHOOD = 5,
    STREET = 6,
    EXACT = 8,
}
export enum ClientProxyCreateFlags {
    NONE = 0,
    AUTO_DELETE = 1,
}
export class ClientProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): ClientProxy;
static new_finish(...args: never[]): ClientProxy;
static new_for_bus_finish(res: Gio.AsyncResult): ClientProxy;
static new_for_bus_finish(...args: never[]): ClientProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ClientProxy;
static new_for_bus_sync(...args: never[]): ClientProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ClientProxy;
static new_sync(...args: never[]): ClientProxy;
static create(desktop_id: string, accuracy_level: AccuracyLevel, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
static create_finish(result: Gio.AsyncResult): ClientProxy;
static create_full(desktop_id: string, accuracy_level: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
static create_full_finish(result: Gio.AsyncResult): ClientProxy;
static create_full_sync(desktop_id: string, accuracy_level: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable: Gio.Cancellable | null): ClientProxy;
static create_sync(desktop_id: string, accuracy_level: AccuracyLevel, cancellable: Gio.Cancellable | null): ClientProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class ClientSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class LocationProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): LocationProxy;
static new_finish(...args: never[]): LocationProxy;
static new_for_bus_finish(res: Gio.AsyncResult): LocationProxy;
static new_for_bus_finish(...args: never[]): LocationProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): LocationProxy;
static new_for_bus_sync(...args: never[]): LocationProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): LocationProxy;
static new_sync(...args: never[]): LocationProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class LocationSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
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
export class Simple extends GObject.Object {constructor(config?: properties);
accuracy_level: AccuracyLevel;
readonly client: ClientProxy;
desktop_id: string;
readonly location: LocationProxy;static new_finish(result: Gio.AsyncResult): Simple;
static new_sync(desktop_id: string, accuracy_level: AccuracyLevel, cancellable: Gio.Cancellable | null): Simple;
get_client(): ClientProxy;
get_location(): LocationProxy;
static _new(desktop_id: string, accuracy_level: AccuracyLevel, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class ClientIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly handle_start: unknown;
readonly handle_stop: unknown;
readonly get_active: unknown;
readonly get_desktop_id: unknown;
readonly get_distance_threshold: unknown;
readonly get_location: unknown;
readonly get_requested_accuracy_level: unknown;
readonly get_time_threshold: unknown;
readonly location_updated: unknown;
}
export class ClientProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class ClientProxyPrivate  {constructor(config?: properties);
}
export class ClientSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class ClientSkeletonPrivate  {constructor(config?: properties);
}
export class LocationIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_accuracy: unknown;
readonly get_altitude: unknown;
readonly get_description: unknown;
readonly get_heading: unknown;
readonly get_latitude: unknown;
readonly get_longitude: unknown;
readonly get_speed: unknown;
readonly get_timestamp: unknown;
}
export class LocationProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class LocationProxyPrivate  {constructor(config?: properties);
}
export class LocationSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class LocationSkeletonPrivate  {constructor(config?: properties);
}
export class ManagerIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly handle_add_agent: unknown;
readonly handle_create_client: unknown;
readonly handle_delete_client: unknown;
readonly handle_get_client: unknown;
readonly get_available_accuracy_level: unknown;
readonly get_in_use: unknown;
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
export class SimpleClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class SimplePrivate  {constructor(config?: properties);
}
export interface Client  {
active: boolean;
desktop_id: string;
distance_threshold: number;
location: string;
requested_accuracy_level: number;
time_threshold: number;
call_start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_start_finish(res: Gio.AsyncResult): boolean;
call_start_sync(cancellable: Gio.Cancellable | null): boolean;
call_stop(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_stop_finish(res: Gio.AsyncResult): boolean;
call_stop_sync(cancellable: Gio.Cancellable | null): boolean;
complete_start(invocation: Gio.DBusMethodInvocation): void;
complete_stop(invocation: Gio.DBusMethodInvocation): void;
dup_desktop_id(): string | null;
dup_location(): string | null;
emit_location_updated(arg_old: string, arg_new: string): void;
get_active(): boolean;
get_desktop_id(): string | null;
get_distance_threshold(): number;
get_location(): string | null;
get_requested_accuracy_level(): number;
get_time_threshold(): number;
set_active(value: boolean): void;
set_desktop_id(value: string): void;
set_distance_threshold(value: number): void;
set_location(value: string): void;
set_requested_accuracy_level(value: number): void;
set_time_threshold(value: number): void;
}
export interface Location  {
accuracy: number;
altitude: number;
description: string;
heading: number;
latitude: number;
longitude: number;
speed: number;
timestamp: GLib.Variant;
dup_description(): string | null;
dup_timestamp(): GLib.Variant | null;
get_accuracy(): number;
get_altitude(): number;
get_description(): string | null;
get_heading(): number;
get_latitude(): number;
get_longitude(): number;
get_speed(): number;
get_timestamp(): GLib.Variant | null;
set_accuracy(value: number): void;
set_altitude(value: number): void;
set_description(value: string): void;
set_heading(value: number): void;
set_latitude(value: number): void;
set_longitude(value: number): void;
set_speed(value: number): void;
set_timestamp(value: GLib.Variant): void;
}
export interface Manager  {
available_accuracy_level: number;
in_use: boolean;
call_add_agent(arg_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_add_agent_finish(res: Gio.AsyncResult): boolean;
call_add_agent_sync(arg_id: string, cancellable: Gio.Cancellable | null): boolean;
call_create_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_create_client_finish(res: Gio.AsyncResult): [boolean, string | null];
call_create_client_sync(cancellable: Gio.Cancellable | null): [boolean, string | null];
call_delete_client(arg_client: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_delete_client_finish(res: Gio.AsyncResult): boolean;
call_delete_client_sync(arg_client: string, cancellable: Gio.Cancellable | null): boolean;
call_get_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_get_client_finish(res: Gio.AsyncResult): [boolean, string | null];
call_get_client_sync(cancellable: Gio.Cancellable | null): [boolean, string | null];
complete_add_agent(invocation: Gio.DBusMethodInvocation): void;
complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void;
complete_delete_client(invocation: Gio.DBusMethodInvocation): void;
complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void;
get_available_accuracy_level(): number;
get_in_use(): boolean;
set_available_accuracy_level(value: number): void;
set_in_use(value: boolean): void;
}