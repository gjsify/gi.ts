
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as UPowerGlib from "upowerglib";
/**
 * upowerglib.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export enum DeviceKind {
    UNKNOWN = 0,
    LINE_POWER = 1,
    BATTERY = 2,
    UPS = 3,
    MONITOR = 4,
    MOUSE = 5,
    KEYBOARD = 6,
    PDA = 7,
    PHONE = 8,
    MEDIA_PLAYER = 9,
    TABLET = 10,
    COMPUTER = 11,
    GAMING_INPUT = 12,
    LAST = 13,
}
export enum DeviceLevel {
    UNKNOWN = 0,
    NONE = 1,
    DISCHARGING = 2,
    LOW = 3,
    CRITICAL = 4,
    ACTION = 5,
    NORMAL = 6,
    HIGH = 7,
    FULL = 8,
    LAST = 9,
}
export enum DeviceState {
    UNKNOWN = 0,
    CHARGING = 1,
    DISCHARGING = 2,
    EMPTY = 3,
    FULLY_CHARGED = 4,
    PENDING_CHARGE = 5,
    PENDING_DISCHARGE = 6,
    LAST = 7,
}
export enum DeviceTechnology {
    UNKNOWN = 0,
    LITHIUM_ION = 1,
    LITHIUM_POLYMER = 2,
    LITHIUM_IRON_PHOSPHATE = 3,
    LEAD_ACID = 4,
    NICKEL_CADMIUM = 5,
    NICKEL_METAL_HYDRIDE = 6,
    LAST = 7,
}
export class Client extends GObject.Object {
    constructor(config?: properties);
    readonly daemon_version: string;
    readonly lid_is_closed: boolean;
    readonly lid_is_present: boolean;
    readonly on_battery: boolean;static new_full(cancellable: Gio.Cancellable | null): Client;
    get_critical_action(): string;
    get_daemon_version(): string;
    get_devices(): Device[];
    get_devices2(): Device[];
    get_display_device(): Device;
    get_lid_is_closed(): boolean;
    get_lid_is_present(): boolean;
    get_on_battery(): boolean;
    vfunc_device_added(device: Device): void;
    vfunc_device_removed(object_path: string): void;
}
export class Device extends GObject.Object {
    constructor(config?: properties);
    battery_level: number;
    capacity: number;
    energy: number;
    energy_empty: number;
    energy_full: number;
    energy_full_design: number;
    energy_rate: number;
    has_history: boolean;
    has_statistics: boolean;
    icon_name: string;
    is_present: boolean;
    is_rechargeable: boolean;
    kind: number;
    luminosity: number;
    model: string;
    native_path: string;
    online: boolean;
    percentage: number;
    power_supply: boolean;
    serial: string;
    state: number;
    technology: number;
    temperature: number;
    time_to_empty: number;
    time_to_full: number;
    update_time: number;
    vendor: string;
    voltage: number;
    warning_level: number;
    get_history_sync(type: string, timespec: number, resolution: number, cancellable: Gio.Cancellable | null): HistoryItem[];
    get_object_path(): string;
    get_statistics_sync(type: string, cancellable: Gio.Cancellable | null): StatsItem[];
    refresh_sync(cancellable: Gio.Cancellable | null): boolean;
    set_object_path_sync(object_path: string, cancellable: Gio.Cancellable | null): boolean;
    to_text(): string;
    static kind_from_string(type: string): DeviceKind;
    static kind_to_string(type_enum: DeviceKind): string;
    static level_from_string(level: string): DeviceLevel;
    static level_to_string(level_enum: DeviceLevel): string;
    static state_from_string(state: string): DeviceState;
    static state_to_string(state_enum: DeviceState): string;
    static technology_from_string(technology: string): DeviceTechnology;
    static technology_to_string(technology_enum: DeviceTechnology): string;
}
export class HistoryItem extends GObject.Object {
    constructor(config?: properties);
    state: number;
    time: number;
    value: number;
    get_state(): DeviceState;
    get_time(): number;
    get_value(): number;
    set_from_string(text: string): boolean;
    set_state(state: DeviceState): void;
    set_time(time: number): void;
    set_time_to_present(): void;
    set_value(value: number): void;
    to_string(): string;
}
export class StatsItem extends GObject.Object {
    constructor(config?: properties);
    accuracy: number;
    value: number;
    get_accuracy(): number;
    get_value(): number;
    set_accuracy(accuracy: number): void;
    set_value(value: number): void;
}
export class WakeupItem extends GObject.Object {
    constructor(config?: properties);
    cmdline: string;
    details: string;
    id: number;
    is_userspace: boolean;
    old: number;
    value: number;
    get_cmdline(): string;
    get_details(): string;
    get_id(): number;
    get_is_userspace(): boolean;
    get_old(): number;
    get_value(): number;
    set_cmdline(cmdline: string): void;
    set_details(details: string): void;
    set_id(id: number): void;
    set_is_userspace(is_userspace: boolean): void;
    set_old(old: number): void;
    set_value(value: number): void;
}
export class Wakeups extends GObject.Object {
    constructor(config?: properties);
    get_data_sync(cancellable: Gio.Cancellable | null): WakeupItem[];
    get_has_capability(): boolean;
    get_properties_sync(cancellable: Gio.Cancellable | null): boolean;
    get_total_sync(cancellable: Gio.Cancellable | null): number;
    vfunc_data_changed(): void;
    vfunc_total_changed(value: number): void;
}
export class ClientPrivate  {
    constructor(config?: properties);
}
export class DevicePrivate  {
    constructor(config?: properties);
}
export class HistoryItemPrivate  {
    constructor(config?: properties);
}
export class StatsItemPrivate  {
    constructor(config?: properties);
}
export class WakeupItemPrivate  {
    constructor(config?: properties);
}
export class WakeupsPrivate  {
    constructor(config?: properties);
}