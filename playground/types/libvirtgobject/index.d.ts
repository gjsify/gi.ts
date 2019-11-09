
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as LibvirtGConfig from "libvirtgconfig";
import * as LibvirtGLib from "libvirtglib";
import * as LibvirtGObject from "libvirtgobject";
/**
 * libvirtgobject.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type StreamIOFunc = (stream: Stream, cond: StreamIOCondition, opaque: object | null) => boolean;
export type StreamSinkFunc = (stream: Stream, user_data: object | null) => number;
export type StreamSourceFunc = (stream: Stream, user_data: object | null) => number;
/**
 * 
 */
export function init_object(argc: number, argv: string[] | null): [number,string[] | null];
/**
 * 
 */
export function init_object_check(argc: number, argv: string[] | null): [boolean, number,string[] | null];
export enum DomainDeleteFlags {
    NONE = 0,
    SAVED_STATE = 1,
    SNAPSHOTS_METADATA = 2,
}
export enum DomainRebootFlags {
    NONE = 0,
    ACPI_POWER_BTN = 1,
    GUEST_AGENT = 2,
}
export enum DomainShutdownFlags {
    NONE = 0,
    ACPI_POWER_BTN = 1,
    GUEST_AGENT = 2,
}
export enum DomainSnapshotCreateFlags {
    NONE = 0,
    REDEFINE = 1,
    CURRENT = 2,
    NO_METADATA = 4,
    HALT = 8,
    DISK_ONLY = 16,
    REUSE_EXT = 32,
    QUIESCE = 64,
    ATOMIC = 128,
}
export enum DomainSnapshotDeleteFlags {
    CHILDREN = 1,
    METADATA_ONLY = 2,
    CHILDREN_ONLY = 4,
}
export enum DomainSnapshotListFlags {
    ALL = 0,
    DESCENDANTS = 1,
    ROOTS = 1,
    METADATA = 2,
    LEAVES = 4,
    NO_LEAVES = 8,
    NO_METADATA = 16,
    INACTIVE = 32,
    ACTIVE = 64,
    DISK_ONLY = 128,
    INTERNAL = 256,
    EXTERNAL = 512,
}
export enum DomainSnapshotRevertFlags {
    RUNNING = 1,
    PAUSED = 2,
    FORCE = 4,
}
export enum DomainState {
    NONE = 0,
    RUNNING = 1,
    BLOCKED = 2,
    PAUSED = 3,
    SHUTDOWN = 4,
    SHUTOFF = 5,
    CRASHED = 6,
    PMSUSPENDED = 7,
}
export enum DomainUpdateDeviceFlags {
    CURRENT = 0,
    LIVE = 1,
    CONFIG = 2,
}
export enum DomainXMLFlags {
    NONE = 0,
    SECURE = 1,
    INACTIVE = 2,
    UPDATE_CPU = 4,
}
export enum IPAddrType {
    IPV4 = 0,
    IPV6 = 1,
}
export enum StoragePoolState {
    INACTIVE = 0,
    BUILDING = 1,
    RUNNING = 2,
    DEGRADED = 3,
    INACCESSIBLE = 4,
}
export enum StorageVolResizeFlags {
    NONE = 0,
    ALLOCATE = 1,
    DELTA = 2,
    SHRINK = 4,
}
export enum StorageVolType {
    FILE = 0,
    BLOCK = 1,
    DIR = 2,
}
export type ConnectionHandle = object;
export type DomainHandle = object;
export type DomainSnapshotHandle = object;
export type InterfaceHandle = object;
export type NetworkFilterHandle = object;
export type NetworkHandle = object;
export type NodeDeviceHandle = object;
export type SecretHandle = object;
export type StoragePoolHandle = object;
export type StorageVolHandle = object;
export type StreamHandle = object;
export enum DomainStartFlags {
    NONE = 0,
    PAUSED = 1,
    AUTODESTROY = 2,
    BYPASS_CACHE = 4,
    FORCE_BOOT = 8,
}
export enum StreamIOCondition {
    READABLE = 1,
    WRITABLE = 2,
    HANGUP = 4,
    ERROR = 8,
}
export class Connection extends GObject.Object {
    constructor(config?: properties);
    handle: ConnectionHandle;
    uri: string;
    close(): void;
    create_domain(conf: LibvirtGConfig.Domain): Domain;
    create_storage_pool(conf: LibvirtGConfig.StoragePool, flags: number): StoragePool;
    fetch_domains(cancellable: Gio.Cancellable | null): boolean;
    fetch_domains_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    fetch_domains_finish(result: Gio.AsyncResult): boolean;
    fetch_interfaces(cancellable: Gio.Cancellable | null): boolean;
    fetch_interfaces_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    fetch_interfaces_finish(result: Gio.AsyncResult): boolean;
    fetch_networks(cancellable: Gio.Cancellable | null): boolean;
    fetch_networks_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    fetch_networks_finish(result: Gio.AsyncResult): boolean;
    fetch_storage_pools(cancellable: Gio.Cancellable | null): boolean;
    fetch_storage_pools_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    fetch_storage_pools_finish(result: Gio.AsyncResult): boolean;
    find_domain_by_id(id: number): Domain;
    find_domain_by_name(name: string): Domain;
    find_interface_by_mac(macaddr: string): Interface;
    find_network_by_name(name: string): Network;
    find_storage_pool_by_name(name: string): StoragePool;
    get_capabilities(): LibvirtGConfig.Capabilities;
    get_capabilities_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_capabilities_finish(result: Gio.AsyncResult): LibvirtGConfig.Capabilities;
    get_domain(uuid: string): Domain;
    get_domains(): GLib.List;
    get_hypervisor_name(): string;
    get_interface(name: string): Interface;
    get_interfaces(): GLib.List;
    get_network(uuid: string): Network;
    get_networks(): GLib.List;
    get_node_info(): NodeInfo;
    get_storage_pool(uuid: string): StoragePool;
    get_storage_pools(): GLib.List;
    get_stream(flags: number): Stream;
    get_uri(): string;
    get_version(): number;
    is_open(): boolean;
    is_read_only(): boolean;
    open(cancellable: Gio.Cancellable | null): boolean;
    open_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    open_finish(result: Gio.AsyncResult): boolean;
    open_read_only(cancellable: Gio.Cancellable | null): boolean;
    open_read_only_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    open_read_only_finish(result: Gio.AsyncResult): boolean;
    restore_domain_from_file(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number): boolean;
    restore_domain_from_file_async(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    restore_domain_from_file_finish(result: Gio.AsyncResult): boolean;
    start_domain(conf: LibvirtGConfig.Domain, flags: number): Domain;
    vfunc_connection_closed(): void;
    vfunc_connection_opened(): void;
    vfunc_domain_added(dom: Domain): void;
    vfunc_domain_removed(dom: Domain): void;
}
export class Domain  {
    constructor(config?: properties);
    handle: DomainHandle;
    readonly persistent: boolean;
    readonly priv: DomainPrivate;
    create_snapshot(custom_conf: LibvirtGConfig.DomainSnapshot | null, flags: number): DomainSnapshot;
    create_snapshot_async(custom_conf: LibvirtGConfig.DomainSnapshot | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    create_snapshot_finish(result: Gio.AsyncResult): DomainSnapshot;
    _delete(flags: number): boolean;
    fetch_snapshots(list_flags: number, cancellable: Gio.Cancellable | null): boolean;
    fetch_snapshots_async(list_flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    fetch_snapshots_finish(res: Gio.AsyncResult): boolean;
    get_config(flags: number): LibvirtGConfig.Domain;
    get_devices(): GLib.List;
    get_has_current_snapshot(flags: number): [boolean, boolean];
    get_id(): number;
    get_info(): DomainInfo;
    get_info_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_info_finish(result: Gio.AsyncResult): DomainInfo;
    get_name(): string;
    get_persistent(): boolean;
    get_saved(): boolean;
    get_snapshots(): GLib.List;
    get_uuid(): string;
    open_console(stream: Stream, devname: string | null, flags: number): boolean;
    open_graphics(idx: number, fd: number, flags: number): boolean;
    open_graphics_fd(idx: number, flags: number): number;
    reboot(flags: number): boolean;
    resume(): boolean;
    resume_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    resume_finish(result: Gio.AsyncResult): boolean;
    save(flags: number): boolean;
    save_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    save_finish(result: Gio.AsyncResult): boolean;
    save_to_file(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number): boolean;
    save_to_file_async(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    save_to_file_finish(result: Gio.AsyncResult): boolean;
    screenshot(stream: Stream, monitor_id: number, flags: number): string;
    set_config(conf: LibvirtGConfig.Domain): boolean;
    set_time(date_time: GLib.DateTime | null, flags: number): boolean;
    set_time_async(date_time: GLib.DateTime | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    set_time_finish(result: Gio.AsyncResult): boolean;
    shutdown(flags: number): boolean;
    start(flags: number): boolean;
    start_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    start_finish(result: Gio.AsyncResult): boolean;
    stop(flags: number): boolean;
    suspend(): boolean;
    update_device(device: LibvirtGConfig.DomainDevice, flags: number): boolean;
    wakeup(flags: number): boolean;
    wakeup_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    wakeup_finish(result: Gio.AsyncResult): boolean;
}
export class DomainDevice  {
    constructor(config?: properties);
    config: LibvirtGConfig.DomainDevice;
    domain: Domain;
    readonly priv: DomainDevicePrivate;
    get_config(): LibvirtGConfig.DomainDevice;
    get_domain(): Domain;
}
export class DomainDisk  {
    constructor(config?: properties);
    readonly priv: DomainDiskPrivate;
    get_stats(): DomainDiskStats;
    resize(size: number, flags: number): boolean;
}
export class DomainInterface  {
    constructor(config?: properties);
    readonly priv: DomainInterfacePrivate;
    get_stats(): DomainInterfaceStats;
}
export class DomainSnapshot  {
    constructor(config?: properties);
    handle: DomainSnapshotHandle;
    readonly priv: DomainSnapshotPrivate;
    _delete(flags: number): boolean;
    delete_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    delete_finish(res: Gio.AsyncResult): boolean;
    get_config(flags: number): LibvirtGConfig.DomainSnapshot;
    get_is_current(flags: number): [boolean, boolean];
    get_name(): string;
    revert_to(flags: number): boolean;
    revert_to_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    revert_to_finish(result: Gio.AsyncResult): boolean;
    set_config(conf: LibvirtGConfig.DomainSnapshot): boolean;
}
export class Interface  {
    constructor(config?: properties);
    handle: InterfaceHandle;
    readonly priv: InterfacePrivate;
    get_config(flags: number): LibvirtGConfig.Interface;
    get_mac(): string;
    get_name(): string;
}
export class Manager extends GObject.Object {
    constructor(config?: properties);
    add_connection(conn: Connection): void;
    find_connection_by_uri(uri: string): Connection | null;
    get_connections(): GLib.List;
    remove_connection(conn: Connection): void;
    vfunc_connection_added(conn: Connection): void;
    vfunc_connection_removed(conn: Connection): void;
}
export class Network  {
    constructor(config?: properties);
    handle: NetworkHandle;
    readonly priv: NetworkPrivate;
    get_config(flags: number): LibvirtGConfig.Network;
    get_dhcp_leases(mac: string | null, flags: number): GLib.List;
    get_name(): string;
    get_uuid(): string;
}
export class NetworkDHCPLease  {
    constructor(config?: properties);
    handle: object;
    readonly priv: NetworkDHCPLeasePrivate;
    get_client_id(): string;
    get_expiry_time(): number;
    get_hostname(): string;
    get_iaid(): string;
    get_iface(): string;
    get_ip(): string;
    get_ip_type(): number;
    get_mac(): string;
    get_prefix(): number;
}
export class NetworkFilter  {
    constructor(config?: properties);
    handle: NetworkFilterHandle;
    readonly priv: NetworkFilterPrivate;
    get_config(flags: number): LibvirtGConfig.NetworkFilter;
    get_name(): string;
    get_uuid(): string;
}
export class NodeDevice  {
    constructor(config?: properties);
    handle: NodeDeviceHandle;
    readonly priv: NodeDevicePrivate;
    get_config(flags: number): LibvirtGConfig.NodeDevice;
    get_name(): string;
}
export class Secret  {
    constructor(config?: properties);
    handle: SecretHandle;
    readonly priv: SecretPrivate;
    get_config(flags: number): LibvirtGConfig.Secret;
    get_name(): string;
    get_uuid(): string;
}
export class StoragePool  {
    constructor(config?: properties);
    handle: StoragePoolHandle;
    readonly priv: StoragePoolPrivate;
    build(flags: number): boolean;
    build_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    build_finish(result: Gio.AsyncResult): boolean;
    create_volume(conf: LibvirtGConfig.StorageVol): StorageVol;
    _delete(flags: number): boolean;
    delete_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    delete_finish(result: Gio.AsyncResult): boolean;
    get_active(): boolean;
    get_autostart(): boolean;
    get_config(flags: number): LibvirtGConfig.StoragePool;
    get_info(): StoragePoolInfo;
    get_name(): string;
    get_persistent(): boolean;
    get_uuid(): string;
    get_volume(name: string): StorageVol;
    get_volumes(): GLib.List;
    refresh(cancellable: Gio.Cancellable | null): boolean;
    refresh_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    refresh_finish(result: Gio.AsyncResult): boolean;
    set_autostart(autostart: boolean): boolean;
    start(flags: number): boolean;
    start_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    start_finish(result: Gio.AsyncResult): boolean;
    stop(): boolean;
    stop_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    stop_finish(result: Gio.AsyncResult): boolean;
    undefine(): boolean;
    undefine_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    undefine_finish(result: Gio.AsyncResult): boolean;
}
export class StorageVol  {
    constructor(config?: properties);
    handle: StorageVolHandle;
    pool: StoragePool;
    readonly priv: StorageVolPrivate;
    _delete(flags: number): boolean;
    download(stream: Stream, offset: number, length: number, flags: number): boolean;
    get_config(flags: number): LibvirtGConfig.StorageVol;
    get_info(): StorageVolInfo;
    get_name(): string;
    get_path(): string;
    resize(capacity: number, flags: StorageVolResizeFlags): boolean;
    upload(stream: Stream, offset: number, length: number, flags: number): boolean;
}
export class Stream  {
    constructor(config?: properties);
    handle: StreamHandle;
    readonly priv: StreamPrivate;
    add_watch_full(priority: number, cond: StreamIOCondition, func: StreamIOFunc, opaque: object | null, notify: GLib.DestroyNotify): number;
    receive(buffer: number[], size: number, cancellable: Gio.Cancellable | null): number;
    receive_all(cancellable: Gio.Cancellable | null, func: StreamSinkFunc, user_data: object | null): number;
    send(buffer: string, size: number, cancellable: Gio.Cancellable | null): number;
    send_all(cancellable: Gio.Cancellable | null, func: StreamSourceFunc, user_data: object | null): number;
}
export class ConnectionPrivate  {
    constructor(config?: properties);
}
export class DomainDevicePrivate  {
    constructor(config?: properties);
}
export class DomainDiskPrivate  {
    constructor(config?: properties);
}
export class DomainDiskStats  {
    constructor(config?: properties);
    rd_req: number;
    rd_bytes: number;
    wr_req: number;
    wr_bytes: number;
    errs: number;
}
export class DomainInfo  {
    constructor(config?: properties);
    state: DomainState;
    maxMem: number;
    memory: number;
    nrVirtCpu: number;
    cpuTime: number;
}
export class DomainInterfacePrivate  {
    constructor(config?: properties);
}
export class DomainInterfaceStats  {
    constructor(config?: properties);
    rx_bytes: number;
    rx_packets: number;
    rx_errs: number;
    rx_drop: number;
    tx_bytes: number;
    tx_packets: number;
    tx_errs: number;
    tx_drop: number;
}
export class DomainPrivate  {
    constructor(config?: properties);
}
export class DomainSnapshotPrivate  {
    constructor(config?: properties);
}
export class InterfacePrivate  {
    constructor(config?: properties);
}
export class ManagerPrivate  {
    constructor(config?: properties);
}
export class NetworkDHCPLeasePrivate  {
    constructor(config?: properties);
}
export class NetworkFilterPrivate  {
    constructor(config?: properties);
}
export class NetworkPrivate  {
    constructor(config?: properties);
}
export class NodeDevicePrivate  {
    constructor(config?: properties);
}
export class NodeInfo  {
    constructor(config?: properties);
    model: number[];
    memory: number;
    cpus: number;
    mhz: number;
    nodes: number;
    sockets: number;
    cores: number;
    threads: number;
}
export class SecretPrivate  {
    constructor(config?: properties);
}
export class StoragePoolInfo  {
    constructor(config?: properties);
    state: StoragePoolState;
    capacity: number;
    allocation: number;
    available: number;
}
export class StoragePoolPrivate  {
    constructor(config?: properties);
}
export class StorageVolInfo  {
    constructor(config?: properties);
    type: StorageVolType;
    capacity: number;
    allocation: number;
}
export class StorageVolPrivate  {
    constructor(config?: properties);
}
export class StreamPrivate  {
    constructor(config?: properties);
}