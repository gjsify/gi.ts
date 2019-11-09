
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GUsb from "gusb";
/**
 * gusb.d.ts
 */
type properties = { [key: string]: any };
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
/**
 * 
 */
export function source_error_quark(): GLib.Quark;
/**
 * 
 */
export function strerror(error_code: number): string;
export enum ContextError {
    CONTEXT_ERROR_INTERNAL = 0,
}
export enum DeviceClassCode {
    INTERFACE_DESC = 0,
    AUDIO = 1,
    COMMUNICATIONS = 2,
    HID = 3,
    PHYSICAL = 5,
    IMAGE = 6,
    PRINTER = 7,
    MASS_STORAGE = 8,
    HUB = 9,
    CDC_DATA = 10,
    SMART_CARD = 11,
    CONTENT_SECURITY = 13,
    VIDEO = 14,
    PERSONAL_HEALTHCARE = 15,
    AUDIO_VIDEO = 16,
    BILLBOARD = 17,
    DIAGNOSTIC = 220,
    WIRELESS_CONTROLLER = 224,
    MISCELLANEOUS = 239,
    APPLICATION_SPECIFIC = 254,
    VENDOR_SPECIFIC = 255,
}
export enum DeviceDirection {
    DEVICE_TO_HOST = 0,
    HOST_TO_DEVICE = 1,
}
export enum DeviceError {
    INTERNAL = 0,
    IO = 1,
    TIMED_OUT = 2,
    NOT_SUPPORTED = 3,
    NO_DEVICE = 4,
    NOT_OPEN = 5,
    ALREADY_OPEN = 6,
    CANCELLED = 7,
    FAILED = 8,
    PERMISSION_DENIED = 9,
    LAST = 10,
}
export enum DeviceRecipient {
    DEVICE = 0,
    INTERFACE = 1,
    ENDPOINT = 2,
    OTHER = 3,
}
export enum DeviceRequestType {
    STANDARD = 0,
    CLASS = 1,
    VENDOR = 2,
    RESERVED = 3,
}
export enum SourceError {
    SOURCE_ERROR_INTERNAL = 0,
}
export enum ContextFlags {
    NONE = 0,
    AUTO_OPEN_DEVICES = 1,
}
export enum DeviceClaimInterfaceFlags {
    DEVICE_CLAIM_INTERFACE_BIND_KERNEL_DRIVER = 1,
}
export class Context extends GObject.Object {constructor(config?: properties);
debug_level: number;
readonly libusb_context: object;
enumerate(): void;
find_by_bus_address(bus: number, address: number): Device;
find_by_platform_id(platform_id: string): Device;
find_by_vid_pid(vid: number, pid: number): Device;
get_devices(): Device[];
get_flags(): ContextFlags;
get_main_context(): GLib.MainContext;
get_source(main_ctx: GLib.MainContext): Source;
set_debug(flags: GLib.LogLevelFlags): void;
set_flags(flags: ContextFlags): void;
set_main_context(main_ctx: GLib.MainContext): void;
wait_for_replug(device: Device, timeout_ms: number): Device;
vfunc_device_added(device: Device): void;
vfunc_device_removed(device: Device): void;
static error_quark(): GLib.Quark;
}
export class Device  {constructor(config?: properties);
context: Context;
libusb_device: object;
platform_id: string;
readonly priv: DevicePrivate;
bulk_transfer(endpoint: number, data: number[], length: number, actual_length: number, timeout: number, cancellable: Gio.Cancellable | null): boolean;
bulk_transfer_async(endpoint: number, data: number[], length: number, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
bulk_transfer_finish(res: Gio.AsyncResult): number;
claim_interface(_interface: number, flags: DeviceClaimInterfaceFlags): boolean;
close(): boolean;
control_transfer(direction: DeviceDirection, request_type: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: number[], length: number, actual_length: number, timeout: number, cancellable: Gio.Cancellable | null): boolean;
control_transfer_async(direction: DeviceDirection, request_type: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: number[], length: number, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
control_transfer_finish(res: Gio.AsyncResult): number;
get_address(): number;
get_bus(): number;
get_children(): Device[];
get_configuration(): number;
get_custom_index(class_id: number, subclass_id: number, protocol_id: number): number;
get_device_class(): number;
get_device_protocol(): number;
get_device_subclass(): number;
get_interface(class_id: number, subclass_id: number, protocol_id: number): Interface;
get_interfaces(): Interface[];
get_manufacturer_index(): number;
get_parent(): Device;
get_pid(): number;
get_pid_as_str(): string;
get_platform_id(): string;
get_port_number(): number;
get_product_index(): number;
get_release(): number;
get_serial_number_index(): number;
get_string_descriptor(desc_index: number): string;
get_vid(): number;
get_vid_as_str(): string;
interrupt_transfer(endpoint: number, data: number[], length: number, actual_length: number, timeout: number, cancellable: Gio.Cancellable | null): boolean;
interrupt_transfer_async(endpoint: number, data: number[], length: number, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
interrupt_transfer_finish(res: Gio.AsyncResult): number;
open(): boolean;
release_interface(_interface: number, flags: DeviceClaimInterfaceFlags): boolean;
reset(): boolean;
set_configuration(configuration: number): boolean;
set_interface_alt(_interface: number, alt: number): boolean;
static error_quark(): GLib.Quark;
}
export class DeviceList extends GObject.Object {constructor(config?: properties);
context: Context;
coldplug(): void;
find_by_bus_address(bus: number, address: number): Device;
find_by_vid_pid(vid: number, pid: number): Device;
get_devices(): Device[];
vfunc_device_added(device: Device): void;
vfunc_device_removed(device: Device): void;
}
export class Interface  {constructor(config?: properties);
get_alternate(): number;
get_class(): number;
get_extra(): GLib.Bytes;
get_index(): number;
get_kind(): number;
get_length(): number;
get_number(): number;
get_protocol(): number;
get_subclass(): number;
}
export class ContextClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly device_added: unknown;
readonly device_removed: unknown;
readonly _gusb_reserved: number[];
}
export class ContextPrivate  {constructor(config?: properties);
}
export class DeviceClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _gusb_reserved: number[];
}
export class DeviceListClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly device_added: unknown;
readonly device_removed: unknown;
readonly _gusb_reserved: number[];
}
export class DeviceListPrivate  {constructor(config?: properties);
}
export class DevicePrivate  {constructor(config?: properties);
}
export class InterfaceClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class Source  {constructor(config?: properties);
set_callback(func: GLib.SourceFunc, data: object | null, notify: GLib.DestroyNotify): void;
static error_quark(): GLib.Quark;
}