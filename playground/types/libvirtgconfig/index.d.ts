
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as LibvirtGConfig from "libvirtgconfig";
/**
 * libvirtgconfig.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
/**
 * 
 */
export function init(argc: number, argv: string[] | null): [number,string[] | null];
/**
 * 
 */
export function init_check(argc: number, argv: string[] | null): [boolean, number,string[] | null];
export enum DomainChannelTargetType {
    GUESTFWD = 0,
    VIRTIO = 1,
    SPICEPORT = 2,
}
export enum DomainClockOffset {
    UTC = 0,
    LOCALTIME = 1,
    TIMEZONE = 2,
    VARIABLE = 3,
}
export enum DomainConsoleTargetType {
    XEN = 0,
    SERIAL = 1,
    UML = 2,
    VIRTIO = 3,
    LXC = 4,
    OPENVZ = 5,
}
export enum DomainControllerUsbModel {
    PIIX3_UHCI = 0,
    PIIX4_UHCI = 1,
    EHCI = 2,
    ICH9_EHCI1 = 3,
    ICH9_UHCI1 = 4,
    ICH9_UHCI2 = 5,
    ICH9_UHCI3 = 6,
    VT82C686B_UHCI = 7,
    PCI_OHCI = 8,
}
export enum DomainCpuFeaturePolicy {
    FORCE = 0,
    REQUIRE = 1,
    OPTIONAL = 2,
    DISABLE = 3,
    FORBID = 4,
}
export enum DomainCpuMatchPolicy {
    MINIMUM = 0,
    EXACT = 1,
    STRICT = 2,
}
export enum DomainCpuMode {
    CUSTOM = 0,
    HOST_MODEL = 1,
    HOST_PASSTHROUGH = 2,
}
export enum DomainDiskBus {
    IDE = 0,
    FDC = 1,
    SCSI = 2,
    VIRTIO = 3,
    XEN = 4,
    USB = 5,
    UML = 6,
    SATA = 7,
}
export enum DomainDiskCacheType {
    DEFAULT = 0,
    NONE = 1,
    WRITETHROUGH = 2,
    WRITEBACK = 3,
    DIRECTSYNC = 4,
    UNSAFE = 5,
}
export enum DomainDiskDriverDiscard {
    UNMAP = 0,
    IGNORE = 1,
}
export enum DomainDiskDriverErrorPolicy {
    STOP = 0,
    REPORT = 1,
    IGNORE = 2,
    ENOSPACE = 3,
}
export enum DomainDiskDriverIoPolicy {
    THREADS = 0,
    NATIVE = 1,
}
export enum DomainDiskFormat {
    RAW = 0,
    DIR = 1,
    BOCHS = 2,
    CLOOP = 3,
    COW = 4,
    DMG = 5,
    ISO = 6,
    QCOW = 7,
    QCOW2 = 8,
    QED = 9,
    VMDK = 10,
    VPC = 11,
    FAT = 12,
    VHD = 13,
}
export enum DomainDiskGuestDeviceType {
    DISK = 0,
    FLOPPY = 1,
    CDROM = 2,
}
export enum DomainDiskSnapshotType {
    NO = 0,
    INTERNAL = 1,
    EXTERNAL = 2,
}
export enum DomainDiskStartupPolicy {
    MANDATORY = 0,
    REQUISITE = 1,
    OPTIONAL = 2,
}
export enum DomainDiskType {
    FILE = 0,
    BLOCK = 1,
    DIR = 2,
    NETWORK = 3,
}
export enum DomainFilesysAccessType {
    PASSTHROUGH = 0,
    MAPPED = 1,
    SQUASH = 2,
}
export enum DomainFilesysDriverType {
    DEFAULT = 0,
    PATH = 1,
    HANDLE = 2,
    LOOP = 3,
    NBD = 4,
    PLOOP = 5,
}
export enum DomainFilesysType {
    MOUNT = 0,
    BLOCK = 1,
    FILE = 2,
    TEMPLATE = 3,
    RAM = 4,
    BIND = 5,
}
export enum DomainGraphicsSpiceImageCompression {
    AUTO_GLZ = 0,
    AUTO_LZ = 1,
    QUIC = 2,
    GLZ = 3,
    LZ = 4,
    OFF = 5,
}
export enum DomainInputBus {
    PS2 = 0,
    USB = 1,
    XEN = 2,
}
export enum DomainInputDeviceType {
    MOUSE = 0,
    TABLET = 1,
    KEYBOARD = 2,
}
export enum DomainInterfaceLinkState {
    DEFAULT = 0,
    UP = 1,
    DOWN = 2,
}
export enum DomainLifecycleAction {
    DESTROY = 0,
    RESTART = 1,
    PRESERVE = 2,
    RENAME_RESTART = 3,
    COREDUMP_DESTROY = 4,
    COREDUMP_RESTART = 5,
}
export enum DomainLifecycleEvent {
    ON_POWEROFF = 0,
    ON_REBOOT = 1,
    ON_CRASH = 2,
}
export enum DomainMemballoonModel {
    NONE = 0,
    VIRTIO = 1,
}
export enum DomainOsBootDevice {
    FD = 0,
    HD = 1,
    CDROM = 2,
    NETWORK = 3,
}
export enum DomainOsSmBiosMode {
    EMULATE = 0,
    HOST = 1,
    SYSINFO = 2,
}
export enum DomainOsType {
    HVM = 0,
    LINUX = 1,
    EXE = 2,
    XEN = 3,
    UML = 4,
}
export enum DomainRedirdevBus {
    USB = 0,
}
export enum DomainSeclabelType {
    DYNAMIC = 0,
    STATIC = 1,
}
export enum DomainSnapshotDomainState {
    NOSTATE = 0,
    RUNNING = 1,
    BLOCKED = 2,
    PAUSED = 3,
    SHUTDOWN = 4,
    SHUTOFF = 5,
    CRASHED = 6,
    PMSUSPENDED = 7,
    DISK_SNAPSHOT = 100,
}
export enum DomainSnapshotMemoryState {
    NONE = 0,
    INTERNAL = 1,
    EXTERNAL = 2,
}
export enum DomainSoundModel {
    SB16 = 0,
    ES1370 = 1,
    PCSPK = 2,
    AC97 = 3,
    ICH6 = 4,
    ICH9 = 5,
}
export enum DomainTimerTickPolicy {
    DELAY = 0,
    CATCHUP = 1,
    MERGE = 2,
    DISCARD = 3,
}
export enum DomainVideoModel {
    VGA = 0,
    CIRRUS = 1,
    VMVGA = 2,
    XEN = 3,
    VBOX = 4,
    QXL = 5,
    VIRTIO = 6,
}
export enum DomainVirtType {
    QEMU = 0,
    KQEMU = 1,
    KVM = 2,
    XEN = 3,
    LXC = 4,
    UML = 5,
    OPENVZ = 6,
    VSERVER = 7,
    LDOM = 8,
    TEST = 9,
    VMWARE = 10,
    HYPERV = 11,
    VBOX = 12,
    ONE = 13,
    PHYP = 14,
}
export enum StoragePoolType {
    DIR = 0,
    FS = 1,
    NETFS = 2,
    LOGICAL = 3,
    DISK = 4,
    ISCSI = 5,
    SCSI = 6,
    MPATH = 7,
}
export class Capabilities extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): Capabilities;
    static new_from_xml(...args: never[]): Capabilities;
    get_guests(): GLib.List;
    get_host(): CapabilitiesHost;
}
export class CapabilitiesCpu  {
    constructor(config?: properties);
    readonly priv: CapabilitiesCpuPrivate;
    add_feature(feature: CapabilitiesCpuFeature): void;
    get_arch(): string;
    get_features(): GLib.List;
    get_model(): CapabilitiesCpuModel;
    get_topology(): CapabilitiesCpuTopology;
    set_topology(topology: CapabilitiesCpuTopology): void;
}
export class CapabilitiesCpuFeature  {
    constructor(config?: properties);
    readonly priv: CapabilitiesCpuFeaturePrivate;
    get_name(): string;
    set_name(name: string): void;
}
export class CapabilitiesCpuModel extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): CapabilitiesCpuModel;
    static new_from_xml(...args: never[]): CapabilitiesCpuModel;
    get_name(): string;
    set_name(name: string): void;
}
export class CapabilitiesCpuTopology extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): CapabilitiesCpuTopology;
    static new_from_xml(...args: never[]): CapabilitiesCpuTopology;
    get_cores(): number;
    get_sockets(): number;
    get_threads(): number;
    set_cores(cores: number): void;
    set_sockets(sockets: number): void;
    set_threads(threads: number): void;
}
export class CapabilitiesGuest  {
    constructor(config?: properties);
    readonly priv: CapabilitiesGuestPrivate;
    get_arch(): CapabilitiesGuestArch;
    get_features(): GLib.List;
    get_os_type(): DomainOsType;
}
export class CapabilitiesGuestArch  {
    constructor(config?: properties);
    readonly priv: CapabilitiesGuestArchPrivate;
    get_domains(): GLib.List;
    get_emulator(): string;
    get_name(): string;
}
export class CapabilitiesGuestDomain  {
    constructor(config?: properties);
    readonly priv: CapabilitiesGuestDomainPrivate;
    get_emulator(): string;
    get_virt_type(): DomainVirtType;
}
export class CapabilitiesGuestFeature  {
    constructor(config?: properties);
    readonly priv: CapabilitiesGuestFeaturePrivate;
    get_name(): string;
}
export class CapabilitiesHost  {
    constructor(config?: properties);
    readonly priv: CapabilitiesHostPrivate;
    get_cpu(): CapabilitiesCpu;
    get_secmodels(): GLib.List;
    get_uuid(): string;
}
export class CapabilitiesHostSecModel  {
    constructor(config?: properties);
    readonly priv: CapabilitiesHostSecModelPrivate;
    get_doi(): string;
    get_model(): string;
}
export class Domain extends Object {
    constructor(config?: properties);
    current_memory: number;
    description: string;
    features: string[];
    memory: number;
    name: string;
    title: string;
    uuid: string;
    vcpu: number;static new_from_xml(xml: string): Domain;
    static new_from_xml(...args: never[]): Domain;
    add_device(device: DomainDevice): void;
    get_clock(): DomainClock;
    get_cpu(): DomainCpu;
    get_current_memory(): number;
    get_custom_xml(ns_uri: string): string;
    get_description(): string;
    get_devices(): GLib.List;
    get_features(): string[];
    get_memory(): number;
    get_name(): string;
    get_os(): DomainOs;
    get_title(): string;
    get_uuid(): string;
    get_vcpus(): number;
    get_virt_type(): DomainVirtType;
    set_clock(klock: DomainClock | null): void;
    set_cpu(cpu: DomainCpu | null): void;
    set_current_memory(memory: number): void;
    set_custom_xml(xml: string, ns: string, ns_uri: string): boolean;
    set_custom_xml_ns_children(xml: string, ns: string, ns_uri: string): boolean;
    set_description(description: string | null): void;
    set_devices(devices: GLib.List): void;
    set_features(features: string[]): void;
    set_lifecycle(event: DomainLifecycleEvent, action: DomainLifecycleAction): void;
    set_memory(memory: number): void;
    set_name(name: string | null): void;
    set_os(os: DomainOs | null): void;
    set_power_management(pm: DomainPowerManagement | null): void;
    set_seclabel(seclabel: DomainSeclabel | null): void;
    set_title(title: string | null): void;
    set_uuid(uuid: string | null): void;
    set_vcpus(vcpu_count: number): void;
    set_virt_type(type: DomainVirtType): void;
}
export class DomainAddress  {
    constructor(config?: properties);
    readonly priv: DomainAddressPrivate;
}
export class DomainAddressPci extends DomainAddress {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainAddressPci;
    get_bus(): number;
    get_domain(): number;
    get_function(): number;
    get_multifunction(): boolean;
    get_slot(): number;
    set_bus(bus: number): void;
    set_domain(pci_domain: number): void;
    set_function(_function: number): void;
    set_multifunction(multifunction: boolean): void;
    set_slot(slot: number): void;
}
export class DomainAddressUsb extends DomainAddress {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainAddressUsb;
    set_bus(bus: number): void;
    set_port(port: string): void;
}
export class DomainChannel extends DomainChardev {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainChannel;
    get_target_name(): string;
    get_target_type(): DomainChannelTargetType;
    set_target_name(name: string): void;
    set_target_type(type: DomainChannelTargetType): void;
}
export class DomainChardev  {
    constructor(config?: properties);
    readonly priv: DomainChardevPrivate;
    get_source(): DomainChardevSource;
    set_source(source: DomainChardevSource): void;
}
export class DomainChardevSource  {
    constructor(config?: properties);
    readonly priv: DomainChardevSourcePrivate;
}
export class DomainChardevSourcePty extends DomainChardevSource {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainChardevSourcePty;
    get_path(): string;
    set_path(path: string): void;
}
export class DomainChardevSourceSpicePort extends DomainChardevSource {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainChardevSourceSpicePort;
    get_channel(): string;
    set_channel(channel: string): void;
}
export class DomainChardevSourceSpiceVmc extends DomainChardevSource {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainChardevSourceSpiceVmc;
}
export class DomainChardevSourceUnix extends DomainChardevSource {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainChardevSourceUnix;
}
export class DomainClock extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainClock;
    static new_from_xml(...args: never[]): DomainClock;
    add_timer(timer: DomainTimer): void;
    get_offset(): DomainClockOffset;
    get_timezone(): string;
    get_variable_offset(): number;
    set_offset(offset: DomainClockOffset): void;
    set_timezone(tz: string): void;
    set_variable_offset(seconds: number): void;
}
export class DomainConsole extends DomainChardev {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainConsole;
    set_target_type(type: DomainConsoleTargetType): void;
}
export class DomainController  {
    constructor(config?: properties);
    readonly priv: DomainControllerPrivate;
    get_index(): number;
    set_address(address: DomainAddress | null): void;
    set_index(index: number): void;
}
export class DomainControllerUsb extends DomainController {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainControllerUsb;
    set_master(master: DomainControllerUsb, startport: number): void;
    set_model(model: DomainControllerUsbModel): void;
}
export class DomainCpu extends CapabilitiesCpu {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainCpu;
    get_match_policy(): DomainCpuMatchPolicy;
    get_mode(): DomainCpuMode;
    set_match_policy(policy: DomainCpuMatchPolicy): void;
    set_mode(mode: DomainCpuMode): void;
    set_model(model: DomainCpuModel): void;
}
export class DomainCpuFeature extends CapabilitiesCpuFeature {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainCpuFeature;
    get_policy(): DomainCpuFeaturePolicy;
    set_policy(policy: DomainCpuFeaturePolicy): void;
}
export class DomainCpuModel extends CapabilitiesCpuModel {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainCpuModel;
    static new_from_xml(...args: never[]): DomainCpuModel;
}
export class DomainDevice  {
    constructor(config?: properties);
    readonly priv: DomainDevicePrivate;
    get_alias(): string;
}
export class DomainDisk extends DomainDevice {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainDisk;
    get_disk_type(): DomainDiskType;
    get_driver(): DomainDiskDriver;
    get_driver_cache(): DomainDiskCacheType;
    get_driver_format(): DomainDiskFormat;
    get_driver_name(): string;
    get_driver_type(): string;
    get_guest_device_type(): DomainDiskGuestDeviceType;
    get_snapshot_type(): DomainDiskSnapshotType;
    get_source(): string;
    get_startup_policy(): DomainDiskStartupPolicy;
    get_target_bus(): DomainDiskBus;
    get_target_dev(): string;
    set_driver(driver: DomainDiskDriver | null): void;
    set_driver_cache(cache_type: DomainDiskCacheType): void;
    set_driver_format(format: DomainDiskFormat): void;
    set_driver_name(driver_name: string): void;
    set_driver_type(driver_type: string): void;
    set_guest_device_type(type: DomainDiskGuestDeviceType): void;
    set_readonly(readonly: boolean): void;
    set_snapshot_type(type: DomainDiskSnapshotType): void;
    set_source(source: string): void;
    set_startup_policy(policy: DomainDiskStartupPolicy): void;
    set_target_bus(bus: DomainDiskBus): void;
    set_target_dev(dev: string): void;
    set_type(type: DomainDiskType): void;
}
export class DomainDiskDriver extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainDiskDriver;
    static new_from_xml(...args: never[]): DomainDiskDriver;
    get_cache(): DomainDiskCacheType;
    get_copy_on_read(): boolean;
    get_discard(): DomainDiskDriverDiscard;
    get_error_policy(): DomainDiskDriverErrorPolicy;
    get_format(): DomainDiskFormat;
    get_io_policy(): DomainDiskDriverIoPolicy;
    get_name(): string;
    set_cache(cache_type: DomainDiskCacheType): void;
    set_copy_on_read(copy_on_read: boolean): void;
    set_discard(discard: DomainDiskDriverDiscard): void;
    set_error_policy(policy: DomainDiskDriverErrorPolicy): void;
    set_format(format: DomainDiskFormat): void;
    set_io_policy(policy: DomainDiskDriverIoPolicy): void;
    set_name(name: string): void;
}
export class DomainFilesys extends DomainDevice {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainFilesys;
    set_access_type(type: DomainFilesysAccessType): void;
    set_driver_format(format: DomainDiskFormat): void;
    set_driver_type(type: DomainFilesysDriverType): void;
    set_ram_usage(bytes: number): void;
    set_readonly(readonly: boolean): void;
    set_source(source: string): void;
    set_target(target: string): void;
    set_type(type: DomainFilesysType): void;
}
export class DomainGraphics  {
    constructor(config?: properties);
    readonly priv: DomainGraphicsPrivate;
}
export class DomainGraphicsDesktop extends DomainGraphics {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainGraphicsDesktop;
    get_display(): string;
    get_fullscreen(): boolean;
    set_display(disp: string): void;
    set_fullscreen(fullscreen: boolean): void;
}
export class DomainGraphicsRdp extends DomainGraphics {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainGraphicsRdp;
    get_multi_user(): boolean;
    get_port(): number;
    get_replace_user(): boolean;
    set_autoport(autoport: boolean): void;
    set_multi_user(multi_user: boolean): void;
    set_port(port: number): void;
    set_replace_user(replace_user: boolean): void;
}
export class DomainGraphicsSdl extends DomainGraphics {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainGraphicsSdl;
    set_display(disp: string): void;
    set_fullscreen(fullscreen: boolean): void;
    set_xauthority(path: string): void;
}
export class DomainGraphicsSpice extends DomainGraphics {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainGraphicsSpice;
    get_image_compression(): DomainGraphicsSpiceImageCompression;
    get_port(): number;
    set_autoport(autoport: boolean): void;
    set_gl(gl: boolean): void;
    set_image_compression(compression: DomainGraphicsSpiceImageCompression): void;
    set_password(password: string): void;
    set_port(port: number): void;
    set_tls_port(port: number): void;
}
export class DomainGraphicsVnc extends DomainGraphics {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainGraphicsVnc;
    get_port(): number;
    get_socket(): string;
    set_autoport(autoport: boolean): void;
    set_password(password: string): void;
    set_port(port: number): void;
    set_socket(socket: string): void;
}
export class DomainHostdev  {
    constructor(config?: properties);
    readonly priv: DomainHostdevPrivate;
    get_boot_order(): number;
    get_readonly(): boolean;
    get_shareable(): boolean;
    set_boot_order(order: number): void;
    set_readonly(readonly: boolean): void;
    set_shareable(shareable: boolean): void;
}
export class DomainHostdevPci extends DomainHostdev {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainHostdevPci;
    get_address(): DomainAddressPci;
    get_managed(): boolean;
    get_rom_bar(): boolean;
    get_rom_file(): string;
    set_address(address: DomainAddressPci): void;
    set_managed(managed: boolean): void;
    set_rom_bar(bar: boolean): void;
    set_rom_file(file: string): void;
}
export class DomainInput extends DomainDevice {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainInput;
    get_bus(): DomainInputBus;
    get_device_type(): DomainInputDeviceType;
    set_bus(bus: DomainInputBus): void;
    set_device_type(type: DomainInputDeviceType): void;
}
export class DomainInterface  {
    constructor(config?: properties);
    readonly priv: DomainInterfacePrivate;
    get_filterref(): DomainInterfaceFilterref;
    get_ifname(): string;
    get_link_state(): DomainInterfaceLinkState;
    get_mac(): string;
    get_model(): string;
    set_filterref(filterref: DomainInterfaceFilterref | null): void;
    set_ifname(ifname: string): void;
    set_link_state(state: DomainInterfaceLinkState): void;
    set_mac(mac_address: string): void;
    set_model(model: string): void;
}
export class DomainInterfaceBridge extends DomainInterface {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainInterfaceBridge;
    set_source(brname: string): void;
}
export class DomainInterfaceFilterref extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainInterfaceFilterref;
    static new_from_xml(...args: never[]): DomainInterfaceFilterref;
    add_parameter(parameter: DomainInterfaceFilterrefParameter): void;
    get_name(): string;
    get_parameters(): GLib.List;
    set_name(filter: string): void;
}
export class DomainInterfaceFilterrefParameter extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainInterfaceFilterrefParameter;
    static new_from_xml(...args: never[]): DomainInterfaceFilterrefParameter;
    get_name(): string;
    get_value(): string;
    set_name(name: string): void;
    set_value(value: string): void;
}
export class DomainInterfaceNetwork extends DomainInterface {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainInterfaceNetwork;
    set_source(source: string): void;
}
export class DomainInterfaceUser extends DomainInterface {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainInterfaceUser;
}
export class DomainMemballoon extends DomainDevice {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainMemballoon;
    set_model(model: DomainMemballoonModel): void;
}
export class DomainOs extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainOs;
    static new_from_xml(...args: never[]): DomainOs;
    bios_enable_serial(enable: boolean): void;
    enable_boot_menu(enable: boolean): void;
    get_arch(): string;
    get_boot_devices(): GLib.List;
    get_machine(): string;
    get_os_type(): DomainOsType;
    set_arch(arch: string): void;
    set_boot_devices(boot_devices: GLib.List): void;
    set_cmdline(cmdline: string | null): void;
    set_init(init: string | null): void;
    set_kernel(kernel: string | null): void;
    set_loader(loader: string | null): void;
    set_machine(machine: string): void;
    set_os_type(type: DomainOsType): void;
    set_ramdisk(ramdisk: string | null): void;
    set_smbios_mode(mode: DomainOsSmBiosMode): void;
}
export class DomainParallel extends DomainChardev {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainParallel;
}
export class DomainPowerManagement extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainPowerManagement;
    static new_from_xml(...args: never[]): DomainPowerManagement;
    set_disk_suspend_enabled(enabled: boolean): void;
    set_mem_suspend_enabled(enabled: boolean): void;
}
export class DomainRedirdev extends DomainChardev {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainRedirdev;
    set_address(address: DomainAddress | null): void;
    set_bus(bus: DomainRedirdevBus): void;
}
export class DomainSeclabel extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainSeclabel;
    static new_from_xml(...args: never[]): DomainSeclabel;
    set_baselabel(label: string | null): void;
    set_label(label: string | null): void;
    set_model(model: string): void;
    set_type(type: DomainSeclabelType): void;
}
export class DomainSerial extends DomainChardev {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainSerial;
}
export class DomainSmartcard  {
    constructor(config?: properties);
    readonly priv: DomainSmartcardPrivate;
    static set_address(redirdev: DomainRedirdev, address: DomainAddress | null): void;
}
export class DomainSmartcardHost extends DomainSmartcard {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainSmartcardHost;
}
export class DomainSmartcardHostCertificates extends DomainSmartcard {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainSmartcardHostCertificates;
    set_certificates(cert1: string | null, cert2: string | null, cert3: string | null): void;
    set_database(path: string | null): void;
}
export class DomainSmartcardPassthrough extends DomainSmartcard {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainSmartcardPassthrough;
    set_source(source: DomainChardevSource): void;
}
export class DomainSnapshot extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainSnapshot;
    static new_from_xml(...args: never[]): DomainSnapshot;
    add_disk(disk: DomainSnapshotDisk): void;
    get_creation_time(): number;
    get_description(): string;
    get_disks(): GLib.List;
    get_domain(): Domain;
    get_memory_file(): string;
    get_memory_state(): DomainSnapshotMemoryState;
    get_name(): string;
    get_parent(): string;
    get_state(): DomainSnapshotDomainState;
    set_description(description: string): void;
    set_disks(disks: GLib.List): void;
    set_memory_file(filename: string): void;
    set_memory_state(state: DomainSnapshotMemoryState): void;
    set_name(name: string): void;
}
export class DomainSnapshotDisk extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainSnapshotDisk;
    static new_from_xml(...args: never[]): DomainSnapshotDisk;
    get_driver_format(): DomainDiskFormat;
    get_name(): string;
    get_snapshot_type(): DomainDiskSnapshotType;
    get_source_file(): string;
    set_driver_format(format: DomainDiskFormat): void;
    set_name(name: string): void;
    set_snapshot_type(type: DomainDiskSnapshotType): void;
    set_source_file(filename: string): void;
}
export class DomainSound extends DomainDevice {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainSound;
    set_model(model: DomainSoundModel): void;
}
export class DomainTimer  {
    constructor(config?: properties);
    readonly priv: DomainTimerPrivate;
    get_present(): boolean;
    get_tick_policy(): DomainTimerTickPolicy;
    set_present(present: boolean): void;
    set_tick_policy(policy: DomainTimerTickPolicy): void;
}
export class DomainTimerHpet extends DomainTimer {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainTimerHpet;
}
export class DomainTimerPit extends DomainTimer {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainTimerPit;
}
export class DomainTimerRtc extends DomainTimer {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainTimerRtc;
}
export class DomainVideo extends DomainDevice {
    constructor(config?: properties);
    static new_from_xml(xml: string): DomainVideo;
    get_model(): DomainVideoModel;
    set_accel3d(accel3d: boolean): void;
    set_heads(head_count: number): void;
    set_model(model: DomainVideoModel): void;
    set_ram(kbytes: number): void;
    set_vgamem(kbytes: number): void;
    set_vram(kbytes: number): void;
}
export class Interface extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): Interface;
    static new_from_xml(...args: never[]): Interface;
}
export class Network extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): Network;
    static new_from_xml(...args: never[]): Network;
}
export class NetworkFilter extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): NetworkFilter;
    static new_from_xml(...args: never[]): NetworkFilter;
}
export class NodeDevice extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): NodeDevice;
    static new_from_xml(...args: never[]): NodeDevice;
}
export class Object extends GObject.Object {
    constructor(config?: properties);
    node: object;
    schema: string;static new_from_xml(type: GType, root_name: string, schema: string, xml: string): Object;
    get_schema(): string;
    to_xml(): string;
    validate(): void;
    static error_quark(): GLib.Quark;
}
export class Secret extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): Secret;
    static new_from_xml(...args: never[]): Secret;
}
export class StoragePermissions extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): StoragePermissions;
    static new_from_xml(...args: never[]): StoragePermissions;
    get_group(): number;
    get_label(): string;
    get_mode(): number;
    get_owner(): number;
    set_group(group: number): void;
    set_label(label: string | null): void;
    set_mode(mode: number): void;
    set_owner(owner: number): void;
}
export class StoragePool extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): StoragePool;
    static new_from_xml(...args: never[]): StoragePool;
    get_allocation(): number;
    get_available(): number;
    get_capacity(): number;
    get_name(): string;
    get_pool_type(): StoragePoolType;
    get_source(): StoragePoolSource;
    get_target(): StoragePoolTarget;
    get_uuid(): string;
    set_allocation(allocation: number): void;
    set_available(available: number): void;
    set_capacity(capacity: number): void;
    set_name(name: string | null): void;
    set_pool_type(type: StoragePoolType): void;
    set_source(source: StoragePoolSource | null): void;
    set_target(target: StoragePoolTarget | null): void;
    set_uuid(uuid: string | null): void;
}
export class StoragePoolSource extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): StoragePoolSource;
    static new_from_xml(...args: never[]): StoragePoolSource;
    get_adapter(): string;
    get_device_path(): string;
    get_directory(): string;
    get_format(): string;
    get_host(): string;
    get_name(): string;
    get_product(): string;
    get_vendor(): string;
    set_adapter(adapter: string): void;
    set_device_path(device_path: string): void;
    set_directory(directory: string): void;
    set_format(format: string): void;
    set_host(host: string): void;
    set_name(name: string | null): void;
    set_product(product: string): void;
    set_vendor(vendor: string): void;
}
export class StoragePoolTarget extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): StoragePoolTarget;
    static new_from_xml(...args: never[]): StoragePoolTarget;
    get_path(): string;
    get_permissions(): StoragePermissions;
    set_path(path: string | null): void;
    set_permissions(perms: StoragePermissions): void;
}
export class StorageVol extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): StorageVol;
    static new_from_xml(...args: never[]): StorageVol;
    set_allocation(allocation: number): void;
    set_backing_store(backing_store: StorageVolBackingStore | null): void;
    set_capacity(capacity: number): void;
    set_name(name: string | null): void;
    set_target(target: StorageVolTarget | null): void;
}
export class StorageVolBackingStore extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): StorageVolBackingStore;
    static new_from_xml(...args: never[]): StorageVolBackingStore;
    set_format(format: string): void;
    set_path(path: string | null): void;
}
export class StorageVolTarget extends Object {
    constructor(config?: properties);
    static new_from_xml(xml: string): StorageVolTarget;
    static new_from_xml(...args: never[]): StorageVolTarget;
    set_compat(compat: string | null): void;
    set_format(format: string): void;
    set_permissions(perms: StoragePermissions | null): void;
}
export class CapabilitiesCpuFeaturePrivate  {
    constructor(config?: properties);
}
export class CapabilitiesCpuModelPrivate  {
    constructor(config?: properties);
}
export class CapabilitiesCpuPrivate  {
    constructor(config?: properties);
}
export class CapabilitiesCpuTopologyPrivate  {
    constructor(config?: properties);
}
export class CapabilitiesGuestArchPrivate  {
    constructor(config?: properties);
}
export class CapabilitiesGuestDomainPrivate  {
    constructor(config?: properties);
}
export class CapabilitiesGuestFeaturePrivate  {
    constructor(config?: properties);
}
export class CapabilitiesGuestPrivate  {
    constructor(config?: properties);
}
export class CapabilitiesHostPrivate  {
    constructor(config?: properties);
}
export class CapabilitiesHostSecModelPrivate  {
    constructor(config?: properties);
}
export class CapabilitiesPrivate  {
    constructor(config?: properties);
}
export class DomainAddressPciPrivate  {
    constructor(config?: properties);
}
export class DomainAddressPrivate  {
    constructor(config?: properties);
}
export class DomainAddressUsbPrivate  {
    constructor(config?: properties);
}
export class DomainChannelPrivate  {
    constructor(config?: properties);
}
export class DomainChardevPrivate  {
    constructor(config?: properties);
}
export class DomainChardevSourcePrivate  {
    constructor(config?: properties);
}
export class DomainChardevSourcePtyPrivate  {
    constructor(config?: properties);
}
export class DomainChardevSourceSpicePortPrivate  {
    constructor(config?: properties);
}
export class DomainChardevSourceSpiceVmcPrivate  {
    constructor(config?: properties);
}
export class DomainChardevSourceUnixPrivate  {
    constructor(config?: properties);
}
export class DomainClockPrivate  {
    constructor(config?: properties);
}
export class DomainConsolePrivate  {
    constructor(config?: properties);
}
export class DomainControllerPrivate  {
    constructor(config?: properties);
}
export class DomainControllerUsbPrivate  {
    constructor(config?: properties);
}
export class DomainCpuFeaturePrivate  {
    constructor(config?: properties);
}
export class DomainCpuModelPrivate  {
    constructor(config?: properties);
}
export class DomainCpuPrivate  {
    constructor(config?: properties);
}
export class DomainDevicePrivate  {
    constructor(config?: properties);
}
export class DomainDiskDriverPrivate  {
    constructor(config?: properties);
}
export class DomainDiskPrivate  {
    constructor(config?: properties);
}
export class DomainFilesysPrivate  {
    constructor(config?: properties);
}
export class DomainGraphicsDesktopPrivate  {
    constructor(config?: properties);
}
export class DomainGraphicsPrivate  {
    constructor(config?: properties);
}
export class DomainGraphicsRdpPrivate  {
    constructor(config?: properties);
}
export class DomainGraphicsSdlPrivate  {
    constructor(config?: properties);
}
export class DomainGraphicsSpicePrivate  {
    constructor(config?: properties);
}
export class DomainGraphicsVncPrivate  {
    constructor(config?: properties);
}
export class DomainHostdevPciPrivate  {
    constructor(config?: properties);
}
export class DomainHostdevPrivate  {
    constructor(config?: properties);
}
export class DomainInputPrivate  {
    constructor(config?: properties);
}
export class DomainInterfaceBridgePrivate  {
    constructor(config?: properties);
}
export class DomainInterfaceFilterrefParameterPrivate  {
    constructor(config?: properties);
}
export class DomainInterfaceFilterrefPrivate  {
    constructor(config?: properties);
}
export class DomainInterfaceNetworkPrivate  {
    constructor(config?: properties);
}
export class DomainInterfacePrivate  {
    constructor(config?: properties);
}
export class DomainInterfaceUserPrivate  {
    constructor(config?: properties);
}
export class DomainMemballoonPrivate  {
    constructor(config?: properties);
}
export class DomainOsPrivate  {
    constructor(config?: properties);
}
export class DomainParallelPrivate  {
    constructor(config?: properties);
}
export class DomainPowerManagementPrivate  {
    constructor(config?: properties);
}
export class DomainPrivate  {
    constructor(config?: properties);
}
export class DomainRedirdevPrivate  {
    constructor(config?: properties);
}
export class DomainSeclabelPrivate  {
    constructor(config?: properties);
}
export class DomainSerialPrivate  {
    constructor(config?: properties);
}
export class DomainSmartcardHostCertificatesPrivate  {
    constructor(config?: properties);
}
export class DomainSmartcardHostPrivate  {
    constructor(config?: properties);
}
export class DomainSmartcardPassthroughPrivate  {
    constructor(config?: properties);
}
export class DomainSmartcardPrivate  {
    constructor(config?: properties);
}
export class DomainSnapshotDiskPrivate  {
    constructor(config?: properties);
}
export class DomainSnapshotPrivate  {
    constructor(config?: properties);
}
export class DomainSoundPrivate  {
    constructor(config?: properties);
}
export class DomainTimerHpetPrivate  {
    constructor(config?: properties);
}
export class DomainTimerPitPrivate  {
    constructor(config?: properties);
}
export class DomainTimerPrivate  {
    constructor(config?: properties);
}
export class DomainTimerRtcPrivate  {
    constructor(config?: properties);
}
export class DomainVideoPrivate  {
    constructor(config?: properties);
}
export class InterfacePrivate  {
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
export class ObjectPrivate  {
    constructor(config?: properties);
}
export class SecretPrivate  {
    constructor(config?: properties);
}
export class StoragePermissionsPrivate  {
    constructor(config?: properties);
}
export class StoragePoolPrivate  {
    constructor(config?: properties);
}
export class StoragePoolSourcePrivate  {
    constructor(config?: properties);
}
export class StoragePoolTargetPrivate  {
    constructor(config?: properties);
}
export class StorageVolBackingStorePrivate  {
    constructor(config?: properties);
}
export class StorageVolPrivate  {
    constructor(config?: properties);
}
export class StorageVolTargetPrivate  {
    constructor(config?: properties);
}