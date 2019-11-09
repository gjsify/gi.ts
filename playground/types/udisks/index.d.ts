
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as UDisks from "udisks";
/**
 * udisks.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const ERROR_NUM_ENTRIES: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2
 * .Block</link> D-Bus interface.
 */
export function block_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #UDisksBlock interface for a 
 * concrete class.
 * The properties are overridden in the order they are defined.
 */
export function block_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDi
 * sks2.Drive.Ata</link> D-Bus interface.
 */
export function drive_ata_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #UDisksDriveAta interface for
 *  a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function drive_ata_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2
 * .Drive</link> D-Bus interface.
 */
export function drive_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #UDisksDrive interface for a 
 * concrete class.
 * The properties are overridden in the order they are defined.
 */
export function drive_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDi
 * sks2.Encrypted</link> D-Bus interface.
 */
export function encrypted_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #UDisksEncrypted interface fo
 * r a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function encrypted_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * 
 */
export function error_quark(): GLib.Quark;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UD
 * isks2.Filesystem</link> D-Bus interface.
 */
export function filesystem_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #UDisksFilesystem interface f
 * or a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function filesystem_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.J
 * ob</link> D-Bus interface.
 */
export function job_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #UDisksJob interface for a co
 * ncrete class.
 * The properties are overridden in the order they are defined.
 */
export function job_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.
 * Loop</link> D-Bus interface.
 */
export function loop_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #UDisksLoop interface for a c
 * oncrete class.
 * The properties are overridden in the order they are defined.
 */
export function loop_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisk
 * s2.Manager</link> D-Bus interface.
 */
export function manager_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #UDisksManager interface for 
 * a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks
 * 2.MDRaid</link> D-Bus interface.
 */
export function mdraid_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #UDisksMDRaid interface for a
 *  concrete class.
 * The properties are overridden in the order they are defined.
 */
export function mdraid_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDi
 * sks2.Partition</link> D-Bus interface.
 */
export function partition_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #UDisksPartition interface fo
 * r a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function partition_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedeskto
 * p.UDisks2.PartitionTable</link> D-Bus interface.
 */
export function partition_table_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #UDisksPartitionTable interfa
 * ce for a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function partition_table_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDi
 * sks2.Swapspace</link> D-Bus interface.
 */
export function swapspace_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #UDisksSwapspace interface fo
 * r a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function swapspace_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
export enum Error {
    FAILED = 0,
    CANCELLED = 1,
    ALREADY_CANCELLED = 2,
    NOT_AUTHORIZED = 3,
    NOT_AUTHORIZED_CAN_OBTAIN = 4,
    NOT_AUTHORIZED_DISMISSED = 5,
    ALREADY_MOUNTED = 6,
    NOT_MOUNTED = 7,
    OPTION_NOT_PERMITTED = 8,
    MOUNTED_BY_OTHER_USER = 9,
    ALREADY_UNMOUNTING = 10,
    NOT_SUPPORTED = 11,
    TIMED_OUT = 12,
    WOULD_WAKEUP = 13,
    DEVICE_BUSY = 14,
    ISCSI_DAEMON_TRANSPORT_FAILED = 15,
    ISCSI_HOST_NOT_FOUND = 16,
    ISCSI_IDMB = 17,
    ISCSI_LOGIN_FAILED = 18,
    ISCSI_LOGIN_AUTH_FAILED = 19,
    ISCSI_LOGIN_FATAL = 20,
    ISCSI_LOGOUT_FAILED = 21,
    ISCSI_NO_FIRMWARE = 22,
    ISCSI_NO_OBJECTS_FOUND = 23,
    ISCSI_NOT_CONNECTED = 24,
    ISCSI_TRANSPORT_FAILED = 25,
    ISCSI_UNKNOWN_DISCOVERY_TYPE = 26,
}
export enum PartitionTypeInfoFlags {
    NONE = 0,
    SWAP = 1,
    RAID = 2,
    HIDDEN = 4,
    CREATE_ONLY = 8,
    SYSTEM = 16,
}
export class BlockProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): BlockProxy;
    static new_finish(...args: never[]): BlockProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): BlockProxy;
    static new_for_bus_finish(...args: never[]): BlockProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): BlockProxy;
    static new_for_bus_sync(...args: never[]): BlockProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): BlockProxy;
    static new_sync(...args: never[]): BlockProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class BlockSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class Client extends GObject.Object {
    constructor(config?: properties);
    readonly manager: Manager;
    readonly object_manager: Gio.DBusObjectManager;static new_finish(res: Gio.AsyncResult): Client;
    static new_sync(cancellable: Gio.Cancellable | null): Client;
    get_all_blocks_for_mdraid(raid: MDRaid): GLib.List;
    get_block_for_dev(block_device_number: number): Block;
    get_block_for_drive(drive: Drive, get_physical: boolean): Block;
    get_block_for_label(label: string): GLib.List;
    get_block_for_mdraid(raid: MDRaid): Block;
    get_block_for_uuid(uuid: string): GLib.List;
    get_cleartext_block(block: Block): Block;
    get_drive_for_block(block: Block): Drive;
    get_drive_info(drive: Drive): [string | null,string | null,Gio.Icon | null,string | null,Gio.Icon | null];
    get_drive_siblings(drive: Drive): GLib.List;
    get_id_for_display(usage: string, type: string, version: string, long_string: boolean): string;
    get_job_description(job: Job): string;
    get_jobs_for_object(object: Object): GLib.List;
    get_loop_for_block(block: Block): Loop;
    get_manager(): Manager;
    get_mdraid_for_block(block: Block): MDRaid;
    get_media_compat_for_display(media_compat: string): string;
    get_members_for_mdraid(raid: MDRaid): GLib.List;
    get_object(object_path: string): Object;
    get_object_info(object: Object): ObjectInfo;
    get_object_manager(): Gio.DBusObjectManager;
    get_partition_info(partition: Partition): string;
    get_partition_table(partition: Partition): PartitionTable;
    get_partition_table_subtype_for_display(partition_table_type: string, partition_table_subtype: string): string;
    get_partition_table_subtypes(partition_table_type: string): string[];
    get_partition_table_type_for_display(partition_table_type: string): string;
    get_partition_type_and_subtype_for_display(partition_table_type: string, partition_table_subtype: string, partition_type: string): string;
    get_partition_type_for_display(partition_table_type: string, partition_type: string): string;
    get_partition_type_infos(partition_table_type: string, partition_table_subtype: string | null): GLib.List;
    get_partitions(table: PartitionTable): GLib.List;
    get_size_for_display(size: number, use_pow2: boolean, long_string: boolean): string;
    peek_object(object_path: string): Object;
    queue_changed(): void;
    settle(): void;
    static get_job_description_from_operation(operation: string): string;
    static _new(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class DriveAtaProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): DriveAtaProxy;
    static new_finish(...args: never[]): DriveAtaProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): DriveAtaProxy;
    static new_for_bus_finish(...args: never[]): DriveAtaProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): DriveAtaProxy;
    static new_for_bus_sync(...args: never[]): DriveAtaProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): DriveAtaProxy;
    static new_sync(...args: never[]): DriveAtaProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class DriveAtaSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class DriveProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): DriveProxy;
    static new_finish(...args: never[]): DriveProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): DriveProxy;
    static new_for_bus_finish(...args: never[]): DriveProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): DriveProxy;
    static new_for_bus_sync(...args: never[]): DriveProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): DriveProxy;
    static new_sync(...args: never[]): DriveProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class DriveSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class EncryptedProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): EncryptedProxy;
    static new_finish(...args: never[]): EncryptedProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): EncryptedProxy;
    static new_for_bus_finish(...args: never[]): EncryptedProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): EncryptedProxy;
    static new_for_bus_sync(...args: never[]): EncryptedProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): EncryptedProxy;
    static new_sync(...args: never[]): EncryptedProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class EncryptedSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class FilesystemProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): FilesystemProxy;
    static new_finish(...args: never[]): FilesystemProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): FilesystemProxy;
    static new_for_bus_finish(...args: never[]): FilesystemProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): FilesystemProxy;
    static new_for_bus_sync(...args: never[]): FilesystemProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): FilesystemProxy;
    static new_sync(...args: never[]): FilesystemProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class FilesystemSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class JobProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): JobProxy;
    static new_finish(...args: never[]): JobProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): JobProxy;
    static new_for_bus_finish(...args: never[]): JobProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): JobProxy;
    static new_for_bus_sync(...args: never[]): JobProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): JobProxy;
    static new_sync(...args: never[]): JobProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class JobSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class LoopProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): LoopProxy;
    static new_finish(...args: never[]): LoopProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): LoopProxy;
    static new_for_bus_finish(...args: never[]): LoopProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): LoopProxy;
    static new_for_bus_sync(...args: never[]): LoopProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): LoopProxy;
    static new_sync(...args: never[]): LoopProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class LoopSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class MDRaidProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): MDRaidProxy;
    static new_finish(...args: never[]): MDRaidProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): MDRaidProxy;
    static new_for_bus_finish(...args: never[]): MDRaidProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): MDRaidProxy;
    static new_for_bus_sync(...args: never[]): MDRaidProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): MDRaidProxy;
    static new_sync(...args: never[]): MDRaidProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class MDRaidSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class ManagerProxy extends Gio.DBusProxy {
    constructor(config?: properties);
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
export class ManagerSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class ObjectInfo  {
    constructor(config?: properties);
    get_description(): string;
    get_icon(): Gio.Icon;
    get_icon_symbolic(): Gio.Icon;
    get_media_description(): string;
    get_media_icon(): Gio.Icon;
    get_media_icon_symbolic(): Gio.Icon;
    get_name(): string;
    get_object(): Object;
    get_one_liner(): string;
    get_sort_key(): string;
}
export class ObjectManagerClient extends Gio.DBusObjectManagerClient {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): ObjectManagerClient;
    static new_finish(...args: never[]): ObjectManagerClient;
    static new_for_bus_finish(res: Gio.AsyncResult): ObjectManagerClient;
    static new_for_bus_finish(...args: never[]): ObjectManagerClient;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ObjectManagerClient;
    static new_for_bus_sync(...args: never[]): ObjectManagerClient;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ObjectManagerClient;
    static new_sync(...args: never[]): ObjectManagerClient;
    static get_proxy_type(manager: Gio.DBusObjectManagerClient, object_path: string, interface_name: string | null, user_data: object | null): GType;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class ObjectProxy extends Gio.DBusObjectProxy {
    constructor(config?: properties);
}
export class ObjectSkeleton extends Gio.DBusObjectSkeleton {
    constructor(config?: properties);
    set_block(interface_: Block | null): void;
    set_drive(interface_: Drive | null): void;
    set_drive_ata(interface_: DriveAta | null): void;
    set_encrypted(interface_: Encrypted | null): void;
    set_filesystem(interface_: Filesystem | null): void;
    set_job(interface_: Job | null): void;
    set_loop(interface_: Loop | null): void;
    set_manager(interface_: Manager | null): void;
    set_mdraid(interface_: MDRaid | null): void;
    set_partition(interface_: Partition | null): void;
    set_partition_table(interface_: PartitionTable | null): void;
    set_swapspace(interface_: Swapspace | null): void;
}
export class PartitionProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): PartitionProxy;
    static new_finish(...args: never[]): PartitionProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): PartitionProxy;
    static new_for_bus_finish(...args: never[]): PartitionProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): PartitionProxy;
    static new_for_bus_sync(...args: never[]): PartitionProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): PartitionProxy;
    static new_sync(...args: never[]): PartitionProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class PartitionSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class PartitionTableProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): PartitionTableProxy;
    static new_finish(...args: never[]): PartitionTableProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): PartitionTableProxy;
    static new_for_bus_finish(...args: never[]): PartitionTableProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): PartitionTableProxy;
    static new_for_bus_sync(...args: never[]): PartitionTableProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): PartitionTableProxy;
    static new_sync(...args: never[]): PartitionTableProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class PartitionTableSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class SwapspaceProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): SwapspaceProxy;
    static new_finish(...args: never[]): SwapspaceProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): SwapspaceProxy;
    static new_for_bus_finish(...args: never[]): SwapspaceProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): SwapspaceProxy;
    static new_for_bus_sync(...args: never[]): SwapspaceProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): SwapspaceProxy;
    static new_sync(...args: never[]): SwapspaceProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class SwapspaceSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class BlockProxyPrivate  {
    constructor(config?: properties);
}
export class BlockSkeletonPrivate  {
    constructor(config?: properties);
}
export class DriveAtaProxyPrivate  {
    constructor(config?: properties);
}
export class DriveAtaSkeletonPrivate  {
    constructor(config?: properties);
}
export class DriveProxyPrivate  {
    constructor(config?: properties);
}
export class DriveSkeletonPrivate  {
    constructor(config?: properties);
}
export class EncryptedProxyPrivate  {
    constructor(config?: properties);
}
export class EncryptedSkeletonPrivate  {
    constructor(config?: properties);
}
export class FilesystemProxyPrivate  {
    constructor(config?: properties);
}
export class FilesystemSkeletonPrivate  {
    constructor(config?: properties);
}
export class JobProxyPrivate  {
    constructor(config?: properties);
}
export class JobSkeletonPrivate  {
    constructor(config?: properties);
}
export class LoopProxyPrivate  {
    constructor(config?: properties);
}
export class LoopSkeletonPrivate  {
    constructor(config?: properties);
}
export class MDRaidProxyPrivate  {
    constructor(config?: properties);
}
export class MDRaidSkeletonPrivate  {
    constructor(config?: properties);
}
export class ManagerProxyPrivate  {
    constructor(config?: properties);
}
export class ManagerSkeletonPrivate  {
    constructor(config?: properties);
}
export class ObjectManagerClientPrivate  {
    constructor(config?: properties);
}
export class ObjectProxyPrivate  {
    constructor(config?: properties);
}
export class ObjectSkeletonPrivate  {
    constructor(config?: properties);
}
export class PartitionProxyPrivate  {
    constructor(config?: properties);
}
export class PartitionSkeletonPrivate  {
    constructor(config?: properties);
}
export class PartitionTableProxyPrivate  {
    constructor(config?: properties);
}
export class PartitionTableSkeletonPrivate  {
    constructor(config?: properties);
}
export class PartitionTypeInfo  {
    constructor(config?: properties);
    table_type: string;
    table_subtype: string;
    type: string;
    flags: PartitionTypeInfoFlags;
    free(): void;
}
export class SwapspaceProxyPrivate  {
    constructor(config?: properties);
}
export class SwapspaceSkeletonPrivate  {
    constructor(config?: properties);
}
export interface Block  {
    configuration: GLib.Variant;
    crypto_backing_device: string;
    device: string;
    device_number: number;
    drive: string;
    hint_auto: boolean;
    hint_icon_name: string;
    hint_ignore: boolean;
    hint_name: string;
    hint_partitionable: boolean;
    hint_symbolic_icon_name: string;
    hint_system: boolean;
    id: string;
    id_label: string;
    id_type: string;
    id_usage: string;
    id_uuid: string;
    id_version: string;
    mdraid: string;
    mdraid_member: string;
    preferred_device: string;
    read_only: boolean;
    size: number;
    symlinks: string[];
    userspace_mount_options: string[];
    call_add_configuration_item(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_add_configuration_item_finish(res: Gio.AsyncResult): boolean;
    call_add_configuration_item_sync(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_format(arg_type: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_format_finish(res: Gio.AsyncResult): boolean;
    call_format_sync(arg_type: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_get_secret_configuration(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_get_secret_configuration_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_get_secret_configuration_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_open_device(arg_mode: string, arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_open_device_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null,Gio.UnixFDList | null];
    call_open_device_sync(arg_mode: string, arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null,Gio.UnixFDList];
    call_open_for_backup(arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_open_for_backup_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null,Gio.UnixFDList | null];
    call_open_for_backup_sync(arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null,Gio.UnixFDList];
    call_open_for_benchmark(arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_open_for_benchmark_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null,Gio.UnixFDList | null];
    call_open_for_benchmark_sync(arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null,Gio.UnixFDList];
    call_open_for_restore(arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_open_for_restore_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null,Gio.UnixFDList | null];
    call_open_for_restore_sync(arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null,Gio.UnixFDList];
    call_remove_configuration_item(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_remove_configuration_item_finish(res: Gio.AsyncResult): boolean;
    call_remove_configuration_item_sync(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_rescan(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_rescan_finish(res: Gio.AsyncResult): boolean;
    call_rescan_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_update_configuration_item(arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_update_configuration_item_finish(res: Gio.AsyncResult): boolean;
    call_update_configuration_item_sync(arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    complete_add_configuration_item(invocation: Gio.DBusMethodInvocation): void;
    complete_format(invocation: Gio.DBusMethodInvocation): void;
    complete_get_secret_configuration(invocation: Gio.DBusMethodInvocation, configuration: GLib.Variant): void;
    complete_open_device(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void;
    complete_open_for_backup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void;
    complete_open_for_benchmark(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void;
    complete_open_for_restore(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void;
    complete_remove_configuration_item(invocation: Gio.DBusMethodInvocation): void;
    complete_rescan(invocation: Gio.DBusMethodInvocation): void;
    complete_update_configuration_item(invocation: Gio.DBusMethodInvocation): void;
}
export interface Drive  {
    can_power_off: boolean;
    configuration: GLib.Variant;
    connection_bus: string;
    ejectable: boolean;
    id: string;
    media: string;
    media_available: boolean;
    media_change_detected: boolean;
    media_compatibility: string[];
    media_removable: boolean;
    model: string;
    optical: boolean;
    optical_blank: boolean;
    optical_num_audio_tracks: number;
    optical_num_data_tracks: number;
    optical_num_sessions: number;
    optical_num_tracks: number;
    removable: boolean;
    revision: string;
    rotation_rate: number;
    seat: string;
    serial: string;
    sibling_id: string;
    size: number;
    sort_key: string;
    time_detected: number;
    time_media_detected: number;
    vendor: string;
    wwn: string;
    call_eject(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_eject_finish(res: Gio.AsyncResult): boolean;
    call_eject_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_power_off(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_power_off_finish(res: Gio.AsyncResult): boolean;
    call_power_off_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_set_configuration(arg_value: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_configuration_finish(res: Gio.AsyncResult): boolean;
    call_set_configuration_sync(arg_value: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    complete_eject(invocation: Gio.DBusMethodInvocation): void;
    complete_power_off(invocation: Gio.DBusMethodInvocation): void;
    complete_set_configuration(invocation: Gio.DBusMethodInvocation): void;
}
export interface DriveAta  {
    aam_enabled: boolean;
    aam_supported: boolean;
    aam_vendor_recommended_value: number;
    apm_enabled: boolean;
    apm_supported: boolean;
    pm_enabled: boolean;
    pm_supported: boolean;
    read_lookahead_enabled: boolean;
    read_lookahead_supported: boolean;
    security_enhanced_erase_unit_minutes: number;
    security_erase_unit_minutes: number;
    security_frozen: boolean;
    smart_enabled: boolean;
    smart_failing: boolean;
    smart_num_attributes_failed_in_the_past: number;
    smart_num_attributes_failing: number;
    smart_num_bad_sectors: number;
    smart_power_on_seconds: number;
    smart_selftest_percent_remaining: number;
    smart_selftest_status: string;
    smart_supported: boolean;
    smart_temperature: number;
    smart_updated: number;
    write_cache_enabled: boolean;
    write_cache_supported: boolean;
    call_pm_get_state(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_pm_get_state_finish(res: Gio.AsyncResult): [boolean, number | null];
    call_pm_get_state_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, number | null];
    call_pm_standby(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_pm_standby_finish(res: Gio.AsyncResult): boolean;
    call_pm_standby_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_pm_wakeup(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_pm_wakeup_finish(res: Gio.AsyncResult): boolean;
    call_pm_wakeup_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_security_erase_unit(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_security_erase_unit_finish(res: Gio.AsyncResult): boolean;
    call_security_erase_unit_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_smart_get_attributes(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_smart_get_attributes_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_smart_get_attributes_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_smart_selftest_abort(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_smart_selftest_abort_finish(res: Gio.AsyncResult): boolean;
    call_smart_selftest_abort_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_smart_selftest_start(arg_type: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_smart_selftest_start_finish(res: Gio.AsyncResult): boolean;
    call_smart_selftest_start_sync(arg_type: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_smart_set_enabled(arg_value: boolean, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_smart_set_enabled_finish(res: Gio.AsyncResult): boolean;
    call_smart_set_enabled_sync(arg_value: boolean, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_smart_update(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_smart_update_finish(res: Gio.AsyncResult): boolean;
    call_smart_update_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    complete_pm_get_state(invocation: Gio.DBusMethodInvocation, state: number): void;
    complete_pm_standby(invocation: Gio.DBusMethodInvocation): void;
    complete_pm_wakeup(invocation: Gio.DBusMethodInvocation): void;
    complete_security_erase_unit(invocation: Gio.DBusMethodInvocation): void;
    complete_smart_get_attributes(invocation: Gio.DBusMethodInvocation, attributes: GLib.Variant): void;
    complete_smart_selftest_abort(invocation: Gio.DBusMethodInvocation): void;
    complete_smart_selftest_start(invocation: Gio.DBusMethodInvocation): void;
    complete_smart_set_enabled(invocation: Gio.DBusMethodInvocation): void;
    complete_smart_update(invocation: Gio.DBusMethodInvocation): void;
}
export interface Encrypted  {
    child_configuration: GLib.Variant;
    cleartext_device: string;
    hint_encryption_type: string;
    metadata_size: number;
    call_change_passphrase(arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_change_passphrase_finish(res: Gio.AsyncResult): boolean;
    call_change_passphrase_sync(arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_lock(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_lock_finish(res: Gio.AsyncResult): boolean;
    call_lock_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_resize(arg_size: number, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_resize_finish(res: Gio.AsyncResult): boolean;
    call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_unlock(arg_passphrase: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_unlock_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_unlock_sync(arg_passphrase: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string | null];
    complete_change_passphrase(invocation: Gio.DBusMethodInvocation): void;
    complete_lock(invocation: Gio.DBusMethodInvocation): void;
    complete_resize(invocation: Gio.DBusMethodInvocation): void;
    complete_unlock(invocation: Gio.DBusMethodInvocation, cleartext_device: string): void;
}
export interface Filesystem  {
    mount_points: string[];
    size: number;
    call_check(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_check_finish(res: Gio.AsyncResult): [boolean, boolean | null];
    call_check_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, boolean | null];
    call_mount(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_mount_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_mount_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string | null];
    call_repair(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_repair_finish(res: Gio.AsyncResult): [boolean, boolean | null];
    call_repair_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, boolean | null];
    call_resize(arg_size: number, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_resize_finish(res: Gio.AsyncResult): boolean;
    call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_set_label(arg_label: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_label_finish(res: Gio.AsyncResult): boolean;
    call_set_label_sync(arg_label: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_take_ownership(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_take_ownership_finish(res: Gio.AsyncResult): boolean;
    call_take_ownership_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_unmount(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_unmount_finish(res: Gio.AsyncResult): boolean;
    call_unmount_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    complete_check(invocation: Gio.DBusMethodInvocation, consistent: boolean): void;
    complete_mount(invocation: Gio.DBusMethodInvocation, mount_path: string): void;
    complete_repair(invocation: Gio.DBusMethodInvocation, repaired: boolean): void;
    complete_resize(invocation: Gio.DBusMethodInvocation): void;
    complete_set_label(invocation: Gio.DBusMethodInvocation): void;
    complete_take_ownership(invocation: Gio.DBusMethodInvocation): void;
    complete_unmount(invocation: Gio.DBusMethodInvocation): void;
}
export interface Job  {
    bytes: number;
    cancelable: boolean;
    expected_end_time: number;
    objects: string[];
    operation: string;
    progress: number;
    progress_valid: boolean;
    rate: number;
    start_time: number;
    started_by_uid: number;
    call_cancel(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_cancel_finish(res: Gio.AsyncResult): boolean;
    call_cancel_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    complete_cancel(invocation: Gio.DBusMethodInvocation): void;
    emit_completed(arg_success: boolean, arg_message: string): void;
}
export interface Loop  {
    autoclear: boolean;
    backing_file: string;
    setup_by_uid: number;
    call_delete(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_delete_finish(res: Gio.AsyncResult): boolean;
    call_delete_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_set_autoclear(arg_value: boolean, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_autoclear_finish(res: Gio.AsyncResult): boolean;
    call_set_autoclear_sync(arg_value: boolean, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    complete_delete(invocation: Gio.DBusMethodInvocation): void;
    complete_set_autoclear(invocation: Gio.DBusMethodInvocation): void;
}
export interface MDRaid  {
    active_devices: GLib.Variant;
    bitmap_location: string;
    child_configuration: GLib.Variant;
    chunk_size: number;
    degraded: number;
    level: string;
    name: string;
    num_devices: number;
    running: boolean;
    size: number;
    sync_action: string;
    sync_completed: number;
    sync_rate: number;
    sync_remaining_time: number;
    uuid: string;
    call_add_device(arg_device: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_add_device_finish(res: Gio.AsyncResult): boolean;
    call_add_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_delete(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_delete_finish(res: Gio.AsyncResult): boolean;
    call_delete_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_remove_device(arg_device: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_remove_device_finish(res: Gio.AsyncResult): boolean;
    call_remove_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_request_sync_action(arg_sync_action: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_request_sync_action_finish(res: Gio.AsyncResult): boolean;
    call_request_sync_action_sync(arg_sync_action: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_set_bitmap_location(arg_value: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_bitmap_location_finish(res: Gio.AsyncResult): boolean;
    call_set_bitmap_location_sync(arg_value: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_start(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_start_finish(res: Gio.AsyncResult): boolean;
    call_start_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_stop(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_stop_finish(res: Gio.AsyncResult): boolean;
    call_stop_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    complete_add_device(invocation: Gio.DBusMethodInvocation): void;
    complete_delete(invocation: Gio.DBusMethodInvocation): void;
    complete_remove_device(invocation: Gio.DBusMethodInvocation): void;
    complete_request_sync_action(invocation: Gio.DBusMethodInvocation): void;
    complete_set_bitmap_location(invocation: Gio.DBusMethodInvocation): void;
    complete_start(invocation: Gio.DBusMethodInvocation): void;
    complete_stop(invocation: Gio.DBusMethodInvocation): void;
}
export interface Manager  {
    default_encryption_type: string;
    supported_encryption_types: string[];
    supported_filesystems: string[];
    version: string;
    call_can_check(arg_type: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_can_check_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_can_check_sync(arg_type: string, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_can_format(arg_type: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_can_format_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_can_format_sync(arg_type: string, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_can_repair(arg_type: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_can_repair_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_can_repair_sync(arg_type: string, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_can_resize(arg_type: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_can_resize_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_can_resize_sync(arg_type: string, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_enable_modules(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_enable_modules_finish(res: Gio.AsyncResult): boolean;
    call_enable_modules_sync(arg_enable: boolean, cancellable: Gio.Cancellable | null): boolean;
    call_get_block_devices(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_get_block_devices_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_get_block_devices_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string[] | null];
    call_loop_setup(arg_fd: GLib.Variant, arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_loop_setup_finish(res: Gio.AsyncResult): [boolean, string | null,Gio.UnixFDList | null];
    call_loop_setup_sync(arg_fd: GLib.Variant, arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null): [boolean, string | null,Gio.UnixFDList];
    call_mdraid_create(arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_mdraid_create_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_mdraid_create_sync(arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string | null];
    call_resolve_device(arg_devspec: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_resolve_device_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_resolve_device_sync(arg_devspec: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string[] | null];
    complete_can_check(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;
    complete_can_format(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;
    complete_can_repair(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;
    complete_can_resize(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;
    complete_enable_modules(invocation: Gio.DBusMethodInvocation): void;
    complete_get_block_devices(invocation: Gio.DBusMethodInvocation, block_objects: string): void;
    complete_loop_setup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, resulting_device: string): void;
    complete_mdraid_create(invocation: Gio.DBusMethodInvocation, resulting_array: string): void;
    complete_resolve_device(invocation: Gio.DBusMethodInvocation, devices: string): void;
}
export interface Object  {
    block: Block;
    drive: Drive;
    drive_ata: DriveAta;
    encrypted: Encrypted;
    filesystem: Filesystem;
    job: Job;
    loop: Loop;
    manager: Manager;
    mdraid: MDRaid;
    partition: Partition;
    partition_table: PartitionTable;
    swapspace: Swapspace;
    get_block(): Block | null;
    get_drive(): Drive | null;
    get_drive_ata(): DriveAta | null;
    get_encrypted(): Encrypted | null;
    get_filesystem(): Filesystem | null;
    get_job(): Job | null;
    get_loop(): Loop | null;
    get_manager(): Manager | null;
    get_mdraid(): MDRaid | null;
    get_partition(): Partition | null;
    get_partition_table(): PartitionTable | null;
    get_swapspace(): Swapspace | null;
}
export interface Partition  {
    flags: number;
    is_contained: boolean;
    is_container: boolean;
    name: string;
    number: number;
    offset: number;
    size: number;
    table: string;
    type: string;
    uuid: string;
    call_delete(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_delete_finish(res: Gio.AsyncResult): boolean;
    call_delete_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_resize(arg_size: number, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_resize_finish(res: Gio.AsyncResult): boolean;
    call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_set_flags(arg_flags: number, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_flags_finish(res: Gio.AsyncResult): boolean;
    call_set_flags_sync(arg_flags: number, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_set_name(arg_name: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_name_finish(res: Gio.AsyncResult): boolean;
    call_set_name_sync(arg_name: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_set_type(arg_type: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_type_finish(res: Gio.AsyncResult): boolean;
    call_set_type_sync(arg_type: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    complete_delete(invocation: Gio.DBusMethodInvocation): void;
    complete_resize(invocation: Gio.DBusMethodInvocation): void;
    complete_set_flags(invocation: Gio.DBusMethodInvocation): void;
    complete_set_name(invocation: Gio.DBusMethodInvocation): void;
    complete_set_type(invocation: Gio.DBusMethodInvocation): void;
}
export interface PartitionTable  {
    partitions: string[];
    type: string;
    call_create_partition(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_create_partition_and_format(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_create_partition_and_format_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_partition_and_format_sync(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string | null];
    call_create_partition_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_partition_sync(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string | null];
    complete_create_partition(invocation: Gio.DBusMethodInvocation, created_partition: string): void;
    complete_create_partition_and_format(invocation: Gio.DBusMethodInvocation, created_partition: string): void;
}
export interface Swapspace  {
    active: boolean;
    call_set_label(arg_label: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_label_finish(res: Gio.AsyncResult): boolean;
    call_set_label_sync(arg_label: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_start(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_start_finish(res: Gio.AsyncResult): boolean;
    call_start_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_stop(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_stop_finish(res: Gio.AsyncResult): boolean;
    call_stop_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    complete_set_label(invocation: Gio.DBusMethodInvocation): void;
    complete_start(invocation: Gio.DBusMethodInvocation): void;
    complete_stop(invocation: Gio.DBusMethodInvocation): void;
}