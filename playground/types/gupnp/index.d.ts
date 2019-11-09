
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GSSDP from "gssdp";
import * as Soup from "soup";
import * as libxml2 from "libxml2";
import * as GUPnP from "gupnp";
/**
 * gupnp.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type ServiceIntrospectionCallback = (info: ServiceInfo, introspection: ServiceIntrospection, error: GLib.Error, user_data: object | null) => void;
export type ServiceProxyActionCallback = (proxy: ServiceProxy, action: ServiceProxyAction, user_data: object | null) => void;
export type ServiceProxyNotifyCallback = (proxy: ServiceProxy, variable: string, value: GObject.Value, user_data: object | null) => void;
/**
 * 
 */
export function control_error_quark(): GLib.Quark;
/**
 * 
 */
export function eventing_error_quark(): GLib.Quark;
/**
 * Generate and return a new UUID.
 */
export function get_uuid(): string;
/**
 * 
 */
export function rootdevice_error_quark(): GLib.Quark;
/**
 * 
 */
export function server_error_quark(): GLib.Quark;
/**
 * 
 */
export function xml_error_quark(): GLib.Quark;
export enum ControlError {
    INVALID_ACTION = 401,
    INVALID_ARGS = 402,
    OUT_OF_SYNC = 403,
    ACTION_FAILED = 501,
}
export enum EventingError {
    SUBSCRIPTION_FAILED = 0,
    SUBSCRIPTION_LOST = 1,
    NOTIFY_FAILED = 2,
}
export enum RootdeviceError {
    NO_CONTEXT = 0,
    NO_DESCRIPTION_PATH = 1,
    NO_DESCRIPTION_FOLDER = 2,
    NO_NETWORK = 3,
    FAIL = 4,
}
export enum ServerError {
    INTERNAL_SERVER_ERROR = 0,
    NOT_FOUND = 1,
    NOT_IMPLEMENTED = 2,
    INVALID_RESPONSE = 3,
    INVALID_URL = 4,
    OTHER = 5,
}
export enum ServiceActionArgDirection {
    IN = 0,
    OUT = 1,
}
export enum XMLError {
    PARSE = 0,
    NO_NODE = 1,
    EMPTY_NODE = 2,
    INVALID_ATTRIBUTE = 3,
    OTHER = 4,
}
export type BinBase64 = object;
export type BinHex = object;
export type Date = object;
export type DateTime = object;
export type DateTimeTZ = object;
export type Time = object;
export type TimeTZ = object;
export type URI = object;
export type UUID = object;
export class Context extends GSSDP.Client {
    constructor(config?: properties);
    acl: Acl;
    default_language: string;
    port: number;
    readonly server: Soup.Server;
    readonly session: Soup.Session;
    subscription_timeout: number;
    add_server_handler(use_acl: boolean, path: string, callback: Soup.ServerCallback, user_data: object | null, destroy: GLib.DestroyNotify | null): void;
    get_acl(): Acl;
    get_default_language(): string;
    get_port(): number;
    get_server(): Soup.Server;
    get_session(): Soup.Session;
    get_subscription_timeout(): number;
    host_path(local_path: string, server_path: string): void;
    host_path_for_agent(local_path: string, server_path: string, user_agent: GLib.Regex): boolean;
    remove_server_handler(path: string): void;
    rewrite_uri(uri: string): string;
    set_acl(acl: Acl | null): void;
    set_default_language(language: string): void;
    set_subscription_timeout(timeout: number): void;
    unhost_path(server_path: string): void;
}
export class ContextManager  {
    constructor(config?: properties);
    family: Gio.SocketFamily;
    port: number;
    uda_version: GSSDP.UDAVersion;
    readonly white_list: WhiteList;
    get_port(): number;
    get_socket_family(): Gio.SocketFamily;
    get_uda_version(): GSSDP.UDAVersion;
    get_white_list(): WhiteList;
    manage_control_point(control_point: ControlPoint): void;
    manage_root_device(root_device: RootDevice): void;
    rescan_control_points(): void;
    static create(port: number): ContextManager;
    static create_full(uda_version: GSSDP.UDAVersion, family: Gio.SocketFamily, port: number): ContextManager;
}
export class ControlPoint extends GSSDP.ResourceBrowser {
    constructor(config?: properties);
    resource_factory: ResourceFactory;static new_full(context: Context, factory: ResourceFactory, target: string): ControlPoint;
    get_context(): Context;
    get_resource_factory(): ResourceFactory;
    list_device_proxies(): GLib.List;
    list_service_proxies(): GLib.List;
    vfunc_device_proxy_available(proxy: DeviceProxy): void;
    vfunc_device_proxy_unavailable(proxy: DeviceProxy): void;
    vfunc_service_proxy_available(proxy: ServiceProxy): void;
    vfunc_service_proxy_unavailable(proxy: ServiceProxy): void;
}
export class Device  {
    constructor(config?: properties);
    root_device: RootDevice;
}
export class DeviceInfo  {
    constructor(config?: properties);
    context: Context;
    device_type: string;
    document: XMLDoc;
    element: object;
    location: string;
    resource_factory: ResourceFactory;
    udn: string;
    url_base: Soup.URI;
    get_context(): Context;
    get_description_value(element: string): string;
    get_device(type: string): DeviceInfo | null;
    get_device_type(): string;
    get_friendly_name(): string;
    get_icon_url(requested_mime_type: string | null, requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean): [string, string | null,number | null,number | null,number | null];
    get_location(): string;
    get_manufacturer(): string;
    get_manufacturer_url(): string;
    get_model_description(): string;
    get_model_name(): string;
    get_model_number(): string;
    get_model_url(): string;
    get_presentation_url(): string;
    get_resource_factory(): ResourceFactory;
    get_serial_number(): string;
    get_service(type: string): ServiceInfo;
    get_udn(): string;
    get_upc(): string;
    get_url_base(): Soup.URI;
    list_device_types(): GLib.List;
    list_devices(): GLib.List;
    list_dlna_capabilities(): GLib.List;
    list_dlna_device_class_identifier(): GLib.List;
    list_service_types(): GLib.List;
    list_services(): GLib.List;
}
export class DeviceProxy  {
    constructor(config?: properties);
}
export class ResourceFactory extends GObject.Object {
    constructor(config?: properties);
    register_resource_proxy_type(upnp_type: string, type: GType): void;
    register_resource_type(upnp_type: string, type: GType): void;
    unregister_resource_proxy_type(upnp_type: string): boolean;
    unregister_resource_type(upnp_type: string): boolean;
    static get_default(): ResourceFactory;
}
export class RootDevice extends Device {
    constructor(config?: properties);
    available: boolean;
    description_dir: string;
    description_doc: XMLDoc;
    description_path: string;static new_full(context: Context, factory: ResourceFactory, description_doc: XMLDoc, description_path: string, description_dir: string): RootDevice;
    get_available(): boolean;
    get_description_dir(): string;
    get_description_path(): string;
    get_relative_location(): string;
    get_ssdp_resource_group(): GSSDP.ResourceGroup;
    set_available(available: boolean): void;
}
export class Service  {
    constructor(config?: properties);
    root_device: RootDevice;
    freeze_notify(): void;
    notify_value(variable: string, value: GObject.Value): void;
    signals_autoconnect(user_data: object | null): void;
    thaw_notify(): void;
}
export class ServiceInfo  {
    constructor(config?: properties);
    context: Context;
    document: XMLDoc;
    element: object;
    location: string;
    service_type: string;
    udn: string;
    url_base: Soup.URI;
    get_context(): Context;
    get_control_url(): string;
    get_event_subscription_url(): string;
    get_id(): string;
    get_introspection_async(callback: ServiceIntrospectionCallback, user_data: object | null): void;
    get_introspection_async_full(callback: ServiceIntrospectionCallback, cancellable: Gio.Cancellable | null, user_data: object | null): void;
    get_location(): string;
    get_scpd_url(): string;
    get_service_type(): string;
    get_udn(): string;
    get_url_base(): Soup.URI;
}
export class ServiceIntrospection  {
    constructor(config?: properties);
    scpd: object;
    get_action(action_name: string): ServiceActionInfo;
    get_state_variable(variable_name: string): ServiceStateVariableInfo;
    list_action_names(): GLib.List;
    list_actions(): GLib.List;
    list_state_variable_names(): GLib.List;
    list_state_variables(): GLib.List;
}
export class ServiceProxy  {
    constructor(config?: properties);
    subscribed: boolean;
    add_notify_full(variable: string, type: GType, callback: ServiceProxyNotifyCallback, user_data: object | null, notify: GLib.DestroyNotify | null): boolean;
    add_raw_notify(callback: ServiceProxyNotifyCallback, user_data: object | null, notify: GLib.DestroyNotify | null): boolean;
    begin_action_list(action: string, in_names: GLib.List, in_values: GLib.List, callback: ServiceProxyActionCallback, user_data: object | null): ServiceProxyAction;
    call_action(action: ServiceProxyAction, cancellable: Gio.Cancellable | null): ServiceProxyAction;
    call_action_async(action: ServiceProxyAction, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_action_finish(result: Gio.AsyncResult): ServiceProxyAction;
    cancel_action(action: ServiceProxyAction): void;
    end_action_hash(action: ServiceProxyAction, hash: GLib.HashTable): [boolean, GLib.HashTable];
    end_action_list(action: ServiceProxyAction, out_names: GLib.List, out_types: GLib.List): [boolean, GLib.List];
    get_subscribed(): boolean;
    remove_notify(variable: string, callback: ServiceProxyNotifyCallback, user_data: object | null): boolean;
    remove_raw_notify(callback: ServiceProxyNotifyCallback, user_data: object | null): boolean;
    send_action_list(action: string, in_names: GLib.List, in_values: GLib.List, out_names: GLib.List, out_types: GLib.List): [boolean, GLib.List];
    set_subscribed(subscribed: boolean): void;
}
export class WhiteList extends GObject.Object {
    constructor(config?: properties);
    enabled: boolean;
    entries: GLib.List;
    add_entry(entry: string): boolean;
    add_entryv(entries: string[]): void;
    check_context(context: Context): boolean;
    clear(): void;
    get_enabled(): boolean;
    get_entries(): GLib.List;
    is_empty(): boolean;
    remove_entry(entry: string): boolean;
    set_enabled(enable: boolean): void;
}
export class XMLDoc extends GObject.Object {
    constructor(config?: properties);
    static new_from_path(path: string): XMLDoc;
    get_doc(): libxml2.Doc;
}
export class ServiceAction  {
    constructor(config?: properties);
    get_argument_count(): number;
    get_gvalue(argument: string, type: GType): GObject.Value;
    get_locales(): GLib.List;
    get_message(): Soup.Message;
    get_name(): string;
    get_values(arg_names: GLib.List, arg_types: GLib.List): GLib.List;
    _return(): void;
    return_error(error_code: number, error_description: string): void;
    set_value(argument: string, value: GObject.Value): void;
    set_values(arg_names: GLib.List, arg_values: GLib.List): void;
}
export class ServiceActionArgInfo  {
    constructor(config?: properties);
    name: string;
    direction: ServiceActionArgDirection;
    related_state_variable: string;
    retval: boolean;
}
export class ServiceActionInfo  {
    constructor(config?: properties);
    name: string;
    "arguments": GLib.List;
}
export class ServiceProxyAction  {
    constructor(config?: properties);
    static new_from_list(action: string, in_names: GLib.List, in_values: GLib.List): ServiceProxyAction;
    get_result_hash(out_hash: GLib.HashTable): [boolean, GLib.HashTable];
    get_result_list(out_names: GLib.List, out_types: GLib.List): [boolean, GLib.List];
    ref(): ServiceProxyAction;
    unref(): void;
}
export class ServiceStateVariableInfo  {
    constructor(config?: properties);
    name: string;
    send_events: boolean;
    is_numeric: boolean;
    type: GType;
    default_value: GObject.Value;
    minimum: GObject.Value;
    maximum: GObject.Value;
    step: GObject.Value;
    allowed_values: GLib.List;
}
export interface Acl  {
    can_sync(): boolean;
    is_allowed(device: object | null, service: object | null, path: string, address: string, agent: string | null): boolean;
    is_allowed_async(device: object | null, service: object | null, path: string, address: string, agent: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    is_allowed_finish(res: Gio.AsyncResult): boolean;
}