
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GModule from "gmodule";
import * as Gtk from "gtk";
import * as GnomeBluetooth from "gnomebluetooth";
/**
 * gnomebluetooth.d.ts
 */
type properties = { [key: string]: any };
export const CHOOSER_COMBO_FIRST_DEVICE: string;
export const TYPE_AUDIO: number;
export const TYPE_INPUT: number;
export const UUID_A2DP: number;
export const UUID_A2DP_SINK: number;
export const UUID_A2DP_SOURCE: number;
export const UUID_AVRCP_CONTROL: number;
export const UUID_AVRCP_TARGET: number;
export const UUID_DUN: number;
export const UUID_FTP: number;
export const UUID_GENERIC_AUDIO: number;
export const UUID_GENERIC_NET: number;
export const UUID_HFP_AG: number;
export const UUID_HFP_HF: number;
export const UUID_HID: number;
export const UUID_HSP: number;
export const UUID_HSP_AG: number;
export const UUID_IRMC: number;
export const UUID_OPP: number;
export const UUID_PAN_GN: number;
export const UUID_PAN_NAP: number;
export const UUID_PAN_PANU: number;
export const UUID_PBAP: number;
export const UUID_PNP: number;
export const UUID_SAP: number;
export const UUID_SDP: number;
export const UUID_SPP: number;
export const UUID_VDP_SOURCE: number;
/**
 * Returns the type of device corresponding to the given @appearance valu
 * e,
 * as usually found in the GAP service.
 */
export function appearance_to_type(appearance: number): Type;
/**
 * Returns the type of device corresponding to the given @class value.
 */
export function class_to_type(_class: number): Type;
/**
 * Start a GUI application for transfering files over Bluetooth.
 */
export function send_to_address(address: string, alias: string): void;
/**
 * Returns a human-readable string representation of @type usable for dis
 * play to users,
 * when type filters are displayed. Do not free the return value.
 * The returned string is already translated with gettext().
 */
export function type_to_filter_string(type: number): string;
/**
 * Returns a human-readable string representation of @type usable for dis
 * play to users. Do not free the return value.
 * The returned string is already translated with gettext().
 */
export function type_to_string(type: number): string;
/**
 * Returns a string representing a human-readable (but not usable for dis
 * play to users) version of the @uuid. Do not free the return value.
 */
export function uuid_to_string(uuid: string): string;
/**
 * Returns whether the string is a valid Bluetooth address. This does not
 *  contact the device in any way.
 */
export function verify_address(bdaddr: string): boolean;
export enum Category {
    ALL = 0,
    PAIRED = 1,
    TRUSTED = 2,
    NOT_PAIRED_OR_TRUSTED = 3,
    PAIRED_OR_TRUSTED = 4,
}
export enum Column {
    PROXY = 0,
    PROPERTIES = 1,
    ADDRESS = 2,
    ALIAS = 3,
    NAME = 4,
    TYPE = 5,
    ICON = 6,
    DEFAULT = 7,
    PAIRED = 8,
    TRUSTED = 9,
    CONNECTED = 10,
    DISCOVERABLE = 11,
    DISCOVERING = 12,
    LEGACYPAIRING = 13,
    POWERED = 14,
    SERVICES = 15,
    UUIDS = 16,
}
export enum Status {
    INVALID = 0,
    DISCONNECTED = 1,
    CONNECTED = 2,
    CONNECTING = 3,
    PLAYING = 4,
}
export enum Type {
    ANY = 1,
    PHONE = 2,
    MODEM = 4,
    COMPUTER = 8,
    NETWORK = 16,
    HEADSET = 32,
    HEADPHONES = 64,
    OTHER_AUDIO = 128,
    KEYBOARD = 256,
    MOUSE = 512,
    CAMERA = 1024,
    PRINTER = 2048,
    JOYPAD = 4096,
    TABLET = 8192,
    VIDEO = 16384,
    REMOTE_CONTROL = 32768,
    SCANNER = 65536,
    DISPLAY = 131072,
    WEARABLE = 262144,
    TOY = 524288,
}
export class Chooser extends Gtk.Box {constructor(config?: properties);
device_category_filter: unknown;
device_selected: string;
device_service_filter: string;
device_type_filter: number;
has_internal_device_filter: boolean;
show_connected: boolean;
show_device_category: boolean;
show_device_type: boolean;
show_device_type_column: boolean;
show_pairing: boolean;
show_searching: boolean;
dump_selected_device(): void;
get_scrolled_window(): Gtk.Widget;
get_selected_device(): string;
get_selected_device_icon(): string;
get_selected_device_info(field: string, value: GObject.Value): boolean;
get_selected_device_is_connected(): boolean;
get_selected_device_name(): string;
get_selected_device_type(): Type;
start_discovery(): void;
stop_discovery(): void;
vfunc_selected_device_activated(address: string): void;
vfunc_selected_device_changed(address: string): void;
}
export class ChooserButton extends Gtk.Button {constructor(config?: properties);
device: string;
readonly is_available: boolean;
available(): boolean;
vfunc_chooser_created(chooser: Gtk.Widget): void;
}
export class ChooserCombo extends Gtk.Box {constructor(config?: properties);
readonly chooser: Chooser;
device: string;
vfunc_chooser_created(chooser: Gtk.Widget): void;
}
export class Client extends GObject.Object {constructor(config?: properties);
readonly default_adapter: string;
default_adapter_discoverable: boolean;
default_adapter_discovering: boolean;
readonly default_adapter_name: string;
readonly default_adapter_powered: boolean;
connect_service(path: string, connect: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
connect_service_finish(res: Gio.AsyncResult): boolean;
get_adapter_model(): Gtk.TreeModel;
get_device_model(): Gtk.TreeModel;
get_filter_model(func: Gtk.TreeModelFilterVisibleFunc, data: object | null, destroy: GLib.DestroyNotify): Gtk.TreeModel;
get_model(): Gtk.TreeModel;
}
export class FilterWidget extends Gtk.Box {constructor(config?: properties);
device_category_filter: unknown;
device_service_filter: string;
device_type_filter: number;
show_device_category: boolean;
show_device_type: boolean;
bind_filter(chooser: Chooser): void;
set_title(title: string): void;
}
export class SettingsWidget extends Gtk.Box {constructor(config?: properties);
get_default_adapter_powered(): boolean;
}
export class ChooserButtonClass  {constructor(config?: properties);
readonly parent_class: Gtk.ButtonClass;
readonly chooser_created: unknown;
}
export class ChooserClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
readonly selected_device_changed: unknown;
readonly selected_device_activated: unknown;
}
export class ChooserComboClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
readonly chooser_created: unknown;
}
export class ChooserComboPrivate  {constructor(config?: properties);
}
export class ClientClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class FilterWidgetClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
}
export class SettingsWidgetClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
}