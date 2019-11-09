
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as DBusGLib from "dbusglib";
import * as NetworkManager from "networkmanager";
import * as NMClient from "nmclient";
/**
 * nmclient.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type ClientActivateFn = (client: Client, active_connection: ActiveConnection, error: GLib.Error, user_data: object | null) => void;
export type ClientAddActivateFn = (client: Client, connection: ActiveConnection, new_connection_path: string, error: GLib.Error, user_data: object | null) => void;
export type DeviceCallbackFn = (device: Device, error: GLib.Error, user_data: object | null) => void;
export type DeviceDeactivateFn = (device: Device, error: GLib.Error, user_data: object | null) => void;
export type DeviceWifiRequestScanFn = (device: DeviceWifi, error: GLib.Error, user_data: object | null) => void;
export type RemoteConnectionGetSecretsFunc = (connection: RemoteConnection, secrets: GLib.HashTable, error: GLib.Error, user_data: object | null) => void;
export type RemoteConnectionResultFunc = (connection: RemoteConnection, error: GLib.Error, user_data: object | null) => void;
export type RemoteSettingsAddConnectionFunc = (settings: RemoteSettings, connection: RemoteConnection, error: GLib.Error, user_data: object | null) => void;
export type RemoteSettingsLoadConnectionsFunc = (settings: RemoteSettings, failures: string, error: GLib.Error, user_data: object | null) => void;
export type RemoteSettingsSaveHostnameFunc = (settings: RemoteSettings, error: GLib.Error, user_data: object | null) => void;
export type SecretAgentDeleteSecretsFunc = (agent: SecretAgent, connection: NetworkManager.Connection, error: GLib.Error, user_data: object | null) => void;
export type SecretAgentGetSecretsFunc = (agent: SecretAgent, connection: NetworkManager.Connection, secrets: GLib.HashTable, error: GLib.Error, user_data: object | null) => void;
export type SecretAgentSaveSecretsFunc = (agent: SecretAgent, connection: NetworkManager.Connection, error: GLib.Error, user_data: object | null) => void;
export const ACCESS_POINT_BSSID: string;
export const ACCESS_POINT_FLAGS: string;
export const ACCESS_POINT_FREQUENCY: string;
export const ACCESS_POINT_HW_ADDRESS: string;
export const ACCESS_POINT_LAST_SEEN: string;
export const ACCESS_POINT_MAX_BITRATE: string;
export const ACCESS_POINT_MODE: string;
export const ACCESS_POINT_RSN_FLAGS: string;
export const ACCESS_POINT_SSID: string;
export const ACCESS_POINT_STRENGTH: string;
export const ACCESS_POINT_WPA_FLAGS: string;
export const ACTIVE_CONNECTION_CONNECTION: string;
export const ACTIVE_CONNECTION_DEFAULT: string;
export const ACTIVE_CONNECTION_DEFAULT6: string;
export const ACTIVE_CONNECTION_DEVICES: string;
export const ACTIVE_CONNECTION_DHCP4_CONFIG: string;
export const ACTIVE_CONNECTION_DHCP6_CONFIG: string;
export const ACTIVE_CONNECTION_ID: string;
export const ACTIVE_CONNECTION_IP4_CONFIG: string;
export const ACTIVE_CONNECTION_IP6_CONFIG: string;
export const ACTIVE_CONNECTION_MASTER: string;
export const ACTIVE_CONNECTION_SPECIFIC_OBJECT: string;
export const ACTIVE_CONNECTION_STATE: string;
export const ACTIVE_CONNECTION_TYPE: string;
export const ACTIVE_CONNECTION_UUID: string;
export const ACTIVE_CONNECTION_VPN: string;
export const CLIENT_ACTIVATING_CONNECTION: string;
export const CLIENT_ACTIVE_CONNECTIONS: string;
export const CLIENT_ALL_DEVICES: string;
export const CLIENT_CONNECTIVITY: string;
export const CLIENT_DEVICES: string;
export const CLIENT_MANAGER_RUNNING: string;
export const CLIENT_NETWORKING_ENABLED: string;
export const CLIENT_PRIMARY_CONNECTION: string;
export const CLIENT_STARTUP: string;
export const CLIENT_STATE: string;
export const CLIENT_VERSION: string;
export const CLIENT_WIMAX_ENABLED: string;
export const CLIENT_WIMAX_HARDWARE_ENABLED: string;
export const CLIENT_WIRELESS_ENABLED: string;
export const CLIENT_WIRELESS_HARDWARE_ENABLED: string;
export const CLIENT_WWAN_ENABLED: string;
export const CLIENT_WWAN_HARDWARE_ENABLED: string;
export const DEVICE_ACTIVE_CONNECTION: string;
export const DEVICE_ADSL_CARRIER: string;
export const DEVICE_AUTOCONNECT: string;
export const DEVICE_AVAILABLE_CONNECTIONS: string;
export const DEVICE_BOND_CARRIER: string;
export const DEVICE_BOND_HW_ADDRESS: string;
export const DEVICE_BOND_SLAVES: string;
export const DEVICE_BRIDGE_CARRIER: string;
export const DEVICE_BRIDGE_HW_ADDRESS: string;
export const DEVICE_BRIDGE_SLAVES: string;
export const DEVICE_BT_CAPABILITIES: string;
export const DEVICE_BT_HW_ADDRESS: string;
export const DEVICE_BT_NAME: string;
export const DEVICE_CAPABILITIES: string;
export const DEVICE_DEVICE_TYPE: string;
export const DEVICE_DHCP4_CONFIG: string;
export const DEVICE_DHCP6_CONFIG: string;
export const DEVICE_DRIVER: string;
export const DEVICE_DRIVER_VERSION: string;
export const DEVICE_ETHERNET_CARRIER: string;
export const DEVICE_ETHERNET_HW_ADDRESS: string;
export const DEVICE_ETHERNET_PERMANENT_HW_ADDRESS: string;
export const DEVICE_ETHERNET_SPEED: string;
export const DEVICE_FIRMWARE_MISSING: string;
export const DEVICE_FIRMWARE_VERSION: string;
export const DEVICE_GENERIC_HW_ADDRESS: string;
export const DEVICE_GENERIC_TYPE_DESCRIPTION: string;
export const DEVICE_INFINIBAND_CARRIER: string;
export const DEVICE_INFINIBAND_HW_ADDRESS: string;
export const DEVICE_INTERFACE: string;
export const DEVICE_IP4_CONFIG: string;
export const DEVICE_IP6_CONFIG: string;
export const DEVICE_IP_INTERFACE: string;
export const DEVICE_MANAGED: string;
export const DEVICE_MODEM_CURRENT_CAPABILITIES: string;
export const DEVICE_MODEM_MODEM_CAPABILITIES: string;
export const DEVICE_MTU: string;
export const DEVICE_OLPC_MESH_ACTIVE_CHANNEL: string;
export const DEVICE_OLPC_MESH_COMPANION: string;
export const DEVICE_OLPC_MESH_HW_ADDRESS: string;
export const DEVICE_PHYSICAL_PORT_ID: string;
export const DEVICE_PRODUCT: string;
export const DEVICE_REAL: string;
export const DEVICE_STATE: string;
export const DEVICE_STATE_REASON: string;
export const DEVICE_TEAM_CARRIER: string;
export const DEVICE_TEAM_HW_ADDRESS: string;
export const DEVICE_TEAM_SLAVES: string;
export const DEVICE_UDI: string;
export const DEVICE_VENDOR: string;
export const DEVICE_VLAN_CARRIER: string;
export const DEVICE_VLAN_HW_ADDRESS: string;
export const DEVICE_VLAN_PARENT: string;
export const DEVICE_VLAN_VLAN_ID: string;
export const DEVICE_WIFI_ACCESS_POINTS: string;
export const DEVICE_WIFI_ACTIVE_ACCESS_POINT: string;
export const DEVICE_WIFI_BITRATE: string;
export const DEVICE_WIFI_CAPABILITIES: string;
export const DEVICE_WIFI_HW_ADDRESS: string;
export const DEVICE_WIFI_MODE: string;
export const DEVICE_WIFI_PERMANENT_HW_ADDRESS: string;
export const DEVICE_WIMAX_ACTIVE_NSP: string;
export const DEVICE_WIMAX_BSID: string;
export const DEVICE_WIMAX_CENTER_FREQUENCY: string;
export const DEVICE_WIMAX_CINR: string;
export const DEVICE_WIMAX_HW_ADDRESS: string;
export const DEVICE_WIMAX_NSPS: string;
export const DEVICE_WIMAX_RSSI: string;
export const DEVICE_WIMAX_TX_POWER: string;
export const DHCP4_CONFIG_OPTIONS: string;
export const DHCP6_CONFIG_OPTIONS: string;
export const IP4_CONFIG_ADDRESSES: string;
export const IP4_CONFIG_DOMAINS: string;
export const IP4_CONFIG_GATEWAY: string;
export const IP4_CONFIG_NAMESERVERS: string;
export const IP4_CONFIG_ROUTES: string;
export const IP4_CONFIG_SEARCHES: string;
export const IP4_CONFIG_WINS_SERVERS: string;
export const IP6_CONFIG_ADDRESSES: string;
export const IP6_CONFIG_DOMAINS: string;
export const IP6_CONFIG_GATEWAY: string;
export const IP6_CONFIG_NAMESERVERS: string;
export const IP6_CONFIG_ROUTES: string;
export const IP6_CONFIG_SEARCHES: string;
export const OBJECT_DBUS_CONNECTION: string;
export const OBJECT_DBUS_PATH: string;
export const REMOTE_CONNECTION_REMOVED: string;
export const REMOTE_CONNECTION_UNSAVED: string;
export const REMOTE_CONNECTION_UPDATED: string;
export const REMOTE_SETTINGS_BUS: string;
export const REMOTE_SETTINGS_CAN_MODIFY: string;
export const REMOTE_SETTINGS_CONNECTIONS_READ: string;
export const REMOTE_SETTINGS_HOSTNAME: string;
export const REMOTE_SETTINGS_NEW_CONNECTION: string;
export const REMOTE_SETTINGS_SERVICE_RUNNING: string;
export const SECRET_AGENT_AUTO_REGISTER: string;
export const SECRET_AGENT_CAPABILITIES: string;
export const SECRET_AGENT_IDENTIFIER: string;
export const SECRET_AGENT_REGISTERED: string;
export const SECRET_AGENT_REGISTRATION_RESULT: string;
export const VPN_CONNECTION_BANNER: string;
export const VPN_CONNECTION_VPN_STATE: string;
export const WIMAX_NSP_NAME: string;
export const WIMAX_NSP_NETWORK_TYPE: string;
export const WIMAX_NSP_SIGNAL_QUALITY: string;
/**
 * Registers an error quark for #NMClient if necessary.
 */
export function client_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMDeviceAdsl if necessary.
 */
export function device_adsl_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMDeviceBond if necessary.
 */
export function device_bond_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMDeviceBridge if necessary.
 */
export function device_bridge_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMDeviceBt if necessary.
 */
export function device_bt_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMDevice if necessary.
 */
export function device_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMDeviceEthernet if necessary.
 */
export function device_ethernet_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMDeviceGeneric if necessary.
 */
export function device_generic_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMDeviceInfiniband if necessary.
 */
export function device_infiniband_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMDeviceModem if necessary.
 */
export function device_modem_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMDeviceOlpcMesh if necessary.
 */
export function device_olpc_mesh_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMDeviceTeam if necessary.
 */
export function device_team_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMDeviceVlan if necessary.
 */
export function device_vlan_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMDeviceWifi if necessary.
 */
export function device_wifi_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMDeviceWimax if necessary.
 */
export function device_wimax_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMObject if necessary.
 */
export function object_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMRemoteConnection if necessary.
 */
export function remote_connection_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMRemoteSettings if necessary.
 */
export function remote_settings_error_quark(): GLib.Quark;
/**
 * 
 */
export function secret_agent_error_quark(): GLib.Quark;
export enum ClientError {
    UNKNOWNERROR = 0,
    MANAGERNOTRUNNING = 1,
}
export enum ClientPermission {
    NONE = 0,
    ENABLE_DISABLE_NETWORK = 1,
    ENABLE_DISABLE_WIFI = 2,
    ENABLE_DISABLE_WWAN = 3,
    ENABLE_DISABLE_WIMAX = 4,
    SLEEP_WAKE = 5,
    NETWORK_CONTROL = 6,
    WIFI_SHARE_PROTECTED = 7,
    WIFI_SHARE_OPEN = 8,
    SETTINGS_MODIFY_SYSTEM = 9,
    SETTINGS_MODIFY_OWN = 10,
    SETTINGS_MODIFY_HOSTNAME = 11,
    SETTINGS_MODIFY_GLOBAL_DNS = 12,
    RELOAD = 13,
    CHECKPOINT_ROLLBACK = 14,
    ENABLE_DISABLE_STATISTICS = 15,
    LAST = 15,
}
export enum ClientPermissionResult {
    UNKNOWN = 0,
    YES = 1,
    AUTH = 2,
    NO = 3,
}
export enum DeviceAdslError {
    UNKNOWNERROR = 0,
    NOTADSLCONNECTION = 1,
    INVALIDADSLCONNECTION = 2,
}
export enum DeviceBondError {
    UNKNOWNERROR = 0,
    NOTBONDCONNECTION = 1,
    INVALIDBONDCONNECTION = 2,
    INTERFACEMISMATCH = 3,
}
export enum DeviceBridgeError {
    UNKNOWNERROR = 0,
    NOTBRIDGECONNECTION = 1,
    INVALIDBRIDGECONNECTION = 2,
    INTERFACEMISMATCH = 3,
}
export enum DeviceBtError {
    UNKNOWNERROR = 0,
    NOTBTCONNECTION = 1,
    INVALIDBTCONNECTION = 2,
    INVALIDDEVICEMAC = 3,
    MACMISMATCH = 4,
    MISSINGDEVICECAPS = 5,
}
export enum DeviceError {
    UNKNOWNERROR = 0,
    INTERFACEMISMATCH = 1,
}
export enum DeviceEthernetError {
    UNKNOWNERROR = 0,
    NOTETHERNETCONNECTION = 1,
    INVALIDETHERNETCONNECTION = 2,
    INVALIDDEVICEMAC = 3,
    MACMISMATCH = 4,
}
export enum DeviceGenericError {
    UNKNOWNERROR = 0,
    NOTGENERICCONNECTION = 1,
    MISSINGINTERFACENAME = 2,
}
export enum DeviceInfinibandError {
    UNKNOWNERROR = 0,
    NOTINFINIBANDCONNECTION = 1,
    INVALIDINFINIBANDCONNECTION = 2,
    INVALIDDEVICEMAC = 3,
    MACMISMATCH = 4,
}
export enum DeviceModemError {
    UNKNOWNERROR = 0,
    NOTMODEMCONNECTION = 1,
    INVALIDMODEMCONNECTION = 2,
    MISSINGDEVICECAPS = 3,
}
export enum DeviceOlpcMeshError {
    UNKNOWNERROR = 0,
    NOTOLPCMESHCONNECTION = 1,
    INVALIDOLPCMESHCONNECTION = 2,
}
export enum DeviceTeamError {
    UNKNOWNERROR = 0,
    NOTTEAMCONNECTION = 1,
    INVALIDTEAMCONNECTION = 2,
    INTERFACEMISMATCH = 3,
}
export enum DeviceVlanError {
    UNKNOWNERROR = 0,
    NOTVLANCONNECTION = 1,
    INVALIDVLANCONNECTION = 2,
    IDMISMATCH = 3,
    INTERFACEMISMATCH = 4,
    MACMISMATCH = 5,
}
export enum DeviceWifiError {
    UNKNOWNERROR = 0,
    NOTWIFICONNECTION = 1,
    INVALIDWIFICONNECTION = 2,
    INVALIDDEVICEMAC = 3,
    MACMISMATCH = 4,
    MISSINGDEVICEWPACAPS = 5,
    MISSINGDEVICERSNCAPS = 6,
}
export enum DeviceWimaxError {
    UNKNOWNERROR = 0,
    NOTWIMAXCONNECTION = 1,
    INVALIDWIMAXCONNECTION = 2,
    INVALIDDEVICEMAC = 3,
    MACMISMATCH = 4,
}
export enum ObjectError {
    UNKNOWN = 0,
    OBJECT_CREATION_FAILURE = 1,
}
export enum RemoteConnectionError {
    UNKNOWNERROR = 0,
    DISCONNECTED = 1,
}
export enum RemoteSettingsError {
    UNKNOWNERROR = 0,
    CONNECTIONREMOVED = 1,
    CONNECTIONUNAVAILABLE = 2,
    SERVICEUNAVAILABLE = 3,
}
export enum SecretAgentError {
    NOTAUTHORIZED = 0,
    INVALIDCONNECTION = 1,
    USERCANCELED = 2,
    AGENTCANCELED = 3,
    INTERNALERROR = 4,
    NOSECRETS = 5,
}
export enum WimaxNspNetworkType {
    UNKNOWN = 0,
    HOME = 1,
    PARTNER = 2,
    ROAMING_PARTNER = 3,
}
export type RemoteConnectionCommitFunc = RemoteConnectionResultFunc;
export type RemoteConnectionDeleteFunc = RemoteConnectionResultFunc;
export enum SecretAgentCapabilities {
    NONE = 0,
    VPN_HINTS = 1,
    LAST = 1,
}
export enum SecretAgentGetSecretsFlags {
    NONE = 0,
    ALLOW_INTERACTION = 1,
    REQUEST_NEW = 2,
    USER_REQUESTED = 4,
}
export class AccessPoint extends Object {
    constructor(config?: properties);
    readonly bssid: string;
    readonly flags: number;
    readonly frequency: number;
    readonly hw_address: string;
    readonly last_seen: number;
    readonly max_bitrate: number;
    readonly mode: number;
    readonly rsn_flags: number;
    readonly ssid: unknown;
    readonly strength: number;
    readonly wpa_flags: number;
    connection_valid(connection: NetworkManager.Connection): boolean;
    filter_connections(connections: string[]): string[];
    get_bssid(): string;
    get_flags(): NetworkManager.Gjs_80211ApFlags;
    get_frequency(): number;
    get_hw_address(): string;
    get_last_seen(): number;
    get_max_bitrate(): number;
    get_mode(): NetworkManager.Gjs_80211Mode;
    get_rsn_flags(): NetworkManager.Gjs_80211ApSecurityFlags;
    get_ssid(): number[];
    get_strength(): number;
    get_wpa_flags(): NetworkManager.Gjs_80211ApSecurityFlags;
}
export class ActiveConnection extends Object {
    constructor(config?: properties);
    readonly connection: string;
    readonly _default: boolean;
    readonly default6: boolean;
    readonly devices: unknown;
    readonly dhcp4_config: DHCP4Config;
    readonly dhcp6_config: DHCP6Config;
    readonly id: string;
    readonly ip4_config: IP4Config;
    readonly ip6_config: IP6Config;
    readonly master: string;
    readonly specific_object: string;
    readonly state: number;
    readonly type: string;
    readonly uuid: string;
    readonly vpn: boolean;
    get_connection(): string;
    get_connection(...args: never[]): never;
    get_connection_type(): string;
    get_default(): boolean;
    get_default6(): boolean;
    get_devices(): Device[];
    get_dhcp4_config(): DHCP4Config;
    get_dhcp6_config(): DHCP6Config;
    get_id(): string;
    get_ip4_config(): IP4Config;
    get_ip6_config(): IP6Config;
    get_master(): string;
    get_specific_object(): string;
    get_state(): NetworkManager.ActiveConnectionState;
    get_uuid(): string;
    get_vpn(): boolean;
}
export class Client extends Object {
    constructor(config?: properties);
    readonly activating_connection: ActiveConnection;
    readonly active_connections: object[];
    readonly all_devices: unknown;
    readonly connectivity: number;
    readonly devices: unknown;
    readonly manager_running: boolean;
    networking_enabled: boolean;
    readonly primary_connection: ActiveConnection;
    readonly startup: boolean;
    readonly state: number;
    readonly version: string;
    wimax_enabled: boolean;
    readonly wimax_hardware_enabled: boolean;
    wireless_enabled: boolean;
    readonly wireless_hardware_enabled: boolean;
    wwan_enabled: boolean;
    readonly wwan_hardware_enabled: boolean;static new_finish(result: Gio.AsyncResult): Client;
    activate_connection(connection: NetworkManager.Connection | null, device: Device | null, specific_object: string | null, callback: ClientActivateFn | null, user_data: object | null): void;
    add_and_activate_connection(partial: NetworkManager.Connection | null, device: Device, specific_object: string | null, callback: ClientAddActivateFn | null, user_data: object | null): void;
    check_connectivity(cancellable: Gio.Cancellable | null): NetworkManager.ConnectivityState;
    check_connectivity_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    check_connectivity_finish(result: Gio.AsyncResult): NetworkManager.ConnectivityState;
    deactivate_connection(active: ActiveConnection): void;
    get_activating_connection(): ActiveConnection;
    get_active_connections(): ActiveConnection[];
    get_all_devices(): Device[];
    get_connectivity(): NetworkManager.ConnectivityState;
    get_device_by_iface(iface: string): Device;
    get_device_by_path(object_path: string): Device;
    get_devices(): Device[];
    get_logging(level: string | null, domains: string | null): boolean;
    get_manager_running(): boolean;
    get_permission_result(permission: ClientPermission): ClientPermissionResult;
    get_primary_connection(): ActiveConnection;
    get_startup(): boolean;
    get_state(): NetworkManager.State;
    get_version(): string;
    networking_get_enabled(): boolean;
    networking_set_enabled(enabled: boolean): void;
    set_logging(level: string | null, domains: string | null): boolean;
    sleep(sleep_: boolean): void;
    wimax_get_enabled(): boolean;
    wimax_hardware_get_enabled(): boolean;
    wimax_set_enabled(enabled: boolean): void;
    wireless_get_enabled(): boolean;
    wireless_hardware_get_enabled(): boolean;
    wireless_set_enabled(enabled: boolean): void;
    wwan_get_enabled(): boolean;
    wwan_hardware_get_enabled(): boolean;
    wwan_set_enabled(enabled: boolean): void;
    vfunc_device_added(device: Device): void;
    vfunc_device_removed(device: Device): void;
    vfunc_permission_changed(permission: ClientPermission, result: ClientPermissionResult): void;
    static new_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class DHCP4Config extends Object {
    constructor(config?: properties);
    readonly options: GLib.HashTable;
    get_one_option(option: string): string;
    get_options(): GLib.HashTable;
}
export class DHCP6Config extends Object {
    constructor(config?: properties);
    readonly options: GLib.HashTable;
    get_one_option(option: string): string;
    get_options(): GLib.HashTable;
}
export class Device extends Object {
    constructor(config?: properties);
    readonly active_connection: ActiveConnection;
    autoconnect: boolean;
    readonly available_connections: unknown;
    readonly capabilities: number;
    readonly device_type: number;
    readonly dhcp4_config: DHCP4Config;
    readonly dhcp6_config: DHCP6Config;
    readonly driver: string;
    readonly driver_version: string;
    readonly firmware_missing: boolean;
    readonly firmware_version: string;
    readonly _interface: string;
    readonly ip_interface: string;
    readonly ip4_config: IP4Config;
    readonly ip6_config: IP6Config;
    readonly managed: boolean;
    readonly mtu: number;
    readonly physical_port_id: string;
    readonly product: string;
    readonly real: boolean;
    readonly state: number;
    readonly udi: string;
    readonly vendor: string;
    connection_compatible(connection: NetworkManager.Connection): boolean;
    connection_valid(connection: NetworkManager.Connection): boolean;
    _delete(callback: DeviceCallbackFn | null, user_data: object | null): void;
    disconnect(callback: DeviceCallbackFn | null, user_data: object | null): void;
    filter_connections(connections: string[]): string[];
    get_active_connection(): ActiveConnection;
    get_autoconnect(): boolean;
    get_available_connections(): RemoteConnection[];
    get_capabilities(): NetworkManager.DeviceCapabilities;
    get_description(): string;
    get_device_type(): NetworkManager.DeviceType;
    get_dhcp4_config(): DHCP4Config;
    get_dhcp6_config(): DHCP6Config;
    get_driver(): string;
    get_driver_version(): string;
    get_firmware_missing(): boolean;
    get_firmware_version(): string;
    get_hw_address(): string;
    get_iface(): string;
    get_ip4_config(): IP4Config;
    get_ip6_config(): IP6Config;
    get_ip_iface(): string;
    get_managed(): boolean;
    get_mtu(): number;
    get_physical_port_id(): string;
    get_product(): string;
    get_setting_type(): GType;
    get_state(): NetworkManager.DeviceState;
    get_state_reason(): [NetworkManager.DeviceState, NetworkManager.DeviceStateReason | null];
    get_type_description(): string;
    get_udi(): string;
    get_vendor(): string;
    is_real(): boolean;
    is_software(): boolean;
    set_autoconnect(autoconnect: boolean): void;
    set_managed(managed: boolean): void;
    vfunc_connection_compatible(connection: NetworkManager.Connection): boolean;
    vfunc_get_hw_address(): string;
    vfunc_get_setting_type(): GType;
    vfunc_get_type_description(): string;
    vfunc_state_changed(new_state: NetworkManager.DeviceState, old_state: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void;
    static disambiguate_names(devices: Device[], num_devices: number): string[];
}
export class DeviceAdsl extends Device {
    constructor(config?: properties);
    readonly carrier: boolean;
    get_carrier(): boolean;
}
export class DeviceBond extends Device {
    constructor(config?: properties);
    readonly carrier: boolean;
    readonly hw_address: string;
    readonly slaves: unknown;
    get_carrier(): boolean;
    get_hw_address(): string;
    get_slaves(): Device[];
}
export class DeviceBridge extends Device {
    constructor(config?: properties);
    readonly carrier: boolean;
    readonly hw_address: string;
    readonly slaves: unknown;
    get_carrier(): boolean;
    get_hw_address(): string;
    get_slaves(): Device[];
}
export class DeviceBt extends Device {
    constructor(config?: properties);
    readonly bt_capabilities: number;
    readonly hw_address: string;
    readonly name: string;
    get_capabilities(): NetworkManager.BluetoothCapabilities;
    get_capabilities(...args: never[]): never;
    get_hw_address(): string;
    get_name(): string;
}
export class DeviceEthernet extends Device {
    constructor(config?: properties);
    readonly carrier: boolean;
    readonly hw_address: string;
    readonly perm_hw_address: string;
    readonly speed: number;
    get_carrier(): boolean;
    get_hw_address(): string;
    get_permanent_hw_address(): string;
    get_speed(): number;
}
export class DeviceGeneric extends Device {
    constructor(config?: properties);
    readonly hw_address: string;
    readonly type_description: string;
    get_hw_address(): string;
}
export class DeviceInfiniband extends Device {
    constructor(config?: properties);
    readonly carrier: boolean;
    readonly hw_address: string;
    get_carrier(): boolean;
    get_hw_address(): string;
}
export class DeviceModem  {
    constructor(config?: properties);
    readonly current_capabilities: number;
    readonly modem_capabilities: number;
    get_current_capabilities(): NetworkManager.DeviceModemCapabilities;
    get_modem_capabilities(): NetworkManager.DeviceModemCapabilities;
}
export class DeviceOlpcMesh extends Device {
    constructor(config?: properties);
    readonly active_channel: number;
    readonly companion: DeviceWifi;
    readonly hw_address: string;
    get_active_channel(): number;
    get_companion(): DeviceWifi;
    get_hw_address(): string;
}
export class DeviceTeam extends Device {
    constructor(config?: properties);
    readonly carrier: boolean;
    readonly hw_address: string;
    readonly slaves: unknown;
    get_carrier(): boolean;
    get_hw_address(): string;
    get_slaves(): Device[];
}
export class DeviceVlan extends Device {
    constructor(config?: properties);
    readonly carrier: boolean;
    readonly hw_address: string;
    readonly vlan_id: number;
    get_carrier(): boolean;
    get_hw_address(): string;
    get_parent(): Device;
    get_vlan_id(): number;
}
export class DeviceWifi extends Device {
    constructor(config?: properties);
    readonly access_points: unknown;
    readonly active_access_point: AccessPoint;
    readonly bitrate: number;
    readonly hw_address: string;
    readonly mode: number;
    readonly perm_hw_address: string;
    readonly wireless_capabilities: number;
    get_access_point_by_path(path: string): AccessPoint;
    get_access_points(): AccessPoint[];
    get_active_access_point(): AccessPoint;
    get_bitrate(): number;
    get_capabilities(): NetworkManager.DeviceWifiCapabilities;
    get_capabilities(...args: never[]): never;
    get_hw_address(): string;
    get_mode(): NetworkManager.Gjs_80211Mode;
    get_permanent_hw_address(): string;
    request_scan_simple(callback: DeviceWifiRequestScanFn | null, user_data: object | null): void;
    vfunc_access_point_added(ap: AccessPoint): void;
    vfunc_access_point_removed(ap: AccessPoint): void;
}
export class DeviceWimax extends Device {
    constructor(config?: properties);
    readonly active_nsp: WimaxNsp;
    readonly bsid: string;
    readonly center_frequency: number;
    readonly cinr: number;
    readonly hw_address: string;
    readonly nsps: unknown;
    readonly rssi: number;
    readonly tx_power: number;
    get_active_nsp(): WimaxNsp;
    get_bsid(): string;
    get_center_frequency(): number;
    get_cinr(): number;
    get_hw_address(): string;
    get_nsp_by_path(path: string): WimaxNsp;
    get_nsps(): WimaxNsp[];
    get_rssi(): number;
    get_tx_power(): number;
    vfunc_nsp_added(nsp: WimaxNsp): void;
    vfunc_nsp_removed(nsp: WimaxNsp): void;
}
export class IP4Config extends Object {
    constructor(config?: properties);
    readonly addresses: object;
    readonly domains: unknown;
    readonly gateway: string;
    readonly nameservers: unknown;
    readonly routes: object;
    readonly searches: unknown;
    readonly wins_servers: unknown;
    get_addresses(): string[];
    get_domains(): string[];
    get_gateway(): string;
    get_nameservers(): number[];
    get_routes(): string[];
    get_searches(): string[];
    get_wins_servers(): number[];
}
export class IP6Config extends Object {
    constructor(config?: properties);
    readonly addresses: unknown;
    readonly domains: unknown;
    readonly gateway: string;
    readonly nameservers: unknown;
    readonly routes: unknown;
    readonly searches: unknown;
    get_addresses(): string[];
    get_domains(): string[];
    get_gateway(): string;
    get_nameserver(idx: number): number[];
    get_num_nameservers(): number;
    get_routes(): string[];
    get_searches(): string[];
}
export class Object  {
    constructor(config?: properties);
    dbus_path: string;
    get_connection(): DBusGLib.Connection;
    get_path(): string;
}
export class RemoteConnection extends NetworkManager.Connection {
    constructor(config?: properties);
    dbus_path: string;
    readonly unsaved: boolean;
    commit_changes(callback: RemoteConnectionResultFunc | null, user_data: object | null): void;
    commit_changes_unsaved(callback: RemoteConnectionResultFunc | null, user_data: object | null): void;
    _delete(callback: RemoteConnectionResultFunc | null, user_data: object | null): void;
    get_secrets(setting_name: string, callback: RemoteConnectionGetSecretsFunc, user_data: object | null): void;
    get_unsaved(): boolean;
    save(callback: RemoteConnectionResultFunc | null, user_data: object | null): void;
    vfunc_removed(): void;
    vfunc_updated(new_settings: GLib.HashTable): void;
}
export class RemoteSettings extends GObject.Object {
    constructor(config?: properties);
    readonly can_modify: boolean;
    readonly hostname: string;
    readonly service_running: boolean;static new_finish(result: Gio.AsyncResult): RemoteSettings;
    add_connection(connection: NetworkManager.Connection, callback: RemoteSettingsAddConnectionFunc, user_data: object | null): boolean;
    add_connection_unsaved(connection: NetworkManager.Connection, callback: RemoteSettingsAddConnectionFunc, user_data: object | null): boolean;
    get_connection_by_id(id: string): RemoteConnection;
    get_connection_by_path(path: string): RemoteConnection;
    get_connection_by_uuid(uuid: string): RemoteConnection;
    list_connections(): string[];
    load_connections(filenames: string): [boolean, string];
    reload_connections(): boolean;
    save_hostname(hostname: string, callback: RemoteSettingsSaveHostnameFunc | null, user_data: object | null): boolean;
    vfunc_connections_read(): void;
    vfunc_new_connection(connection: RemoteConnection): void;
    static new_async(bus: DBusGLib.Connection | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class SecretAgent  {
    constructor(config?: properties);
    auto_register: boolean;
    capabilities: SecretAgentCapabilities;
    identifier: string;
    readonly registered: boolean;
    delete_secrets(connection: NetworkManager.Connection, callback: SecretAgentDeleteSecretsFunc, user_data: object | null): void;
    get_registered(): boolean;
    get_secrets(connection: NetworkManager.Connection, setting_name: string, hints: string[], flags: SecretAgentGetSecretsFlags, callback: SecretAgentGetSecretsFunc, user_data: object | null): void;
    register(): boolean;
    save_secrets(connection: NetworkManager.Connection, callback: SecretAgentSaveSecretsFunc, user_data: object | null): void;
    unregister(): boolean;
}
export class VPNConnection extends ActiveConnection {
    constructor(config?: properties);
    readonly banner: string;
    readonly vpn_state: number;
    get_banner(): string;
    get_vpn_state(): NetworkManager.VPNConnectionState;
    vfunc_vpn_state_changed(state: NetworkManager.VPNConnectionState, reason: NetworkManager.VPNConnectionStateReason): void;
}
export class WimaxNsp extends Object {
    constructor(config?: properties);
    readonly name: string;
    readonly network_type: number;
    readonly signal_quality: number;
    connection_valid(connection: NetworkManager.Connection): boolean;
    filter_connections(connections: string[]): string[];
    get_name(): string;
    get_network_type(): WimaxNspNetworkType;
    get_signal_quality(): number;
}