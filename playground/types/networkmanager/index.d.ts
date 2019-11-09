
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as DBusGLib from "dbusglib";
import * as NetworkManager from "networkmanager";
/**
 * networkmanager.d.ts
 */
type properties = { [key: string]: any };
export type SettingClearSecretsWithFlagsFn = (setting: Setting, secret: string, flags: SettingSecretFlags, user_data: object | null) => boolean;
export type SettingValueIterFn = (setting: Setting, key: string, value: GObject.Value, flags: GObject.ParamFlags, user_data: object | null) => void;
export type UtilsFileSearchInPathsPredicate = (filename: string, user_data: object | null) => boolean;
export type VPNIterFunc = (key: string, value: string, user_data: object | null) => void;
export const CONNECTION_CHANGED: string;
export const CONNECTION_NORMALIZE_PARAM_IP6_CONFIG_METHOD: string;
export const CONNECTION_PATH: string;
export const CONNECTION_SECRETS_CLEARED: string;
export const CONNECTION_SECRETS_UPDATED: string;
export const DBUS_IFACE_SETTINGS: string;
export const DBUS_IFACE_SETTINGS_CONNECTION: string;
export const DBUS_IFACE_SETTINGS_CONNECTION_SECRETS: string;
export const DBUS_INTERFACE: string;
export const DBUS_INTERFACE_VPN: string;
export const DBUS_INTERFACE_VPN_CONNECTION: string;
export const DBUS_INVALID_VPN_CONNECTION: string;
export const DBUS_NO_ACTIVE_VPN_CONNECTION: string;
export const DBUS_NO_VPN_CONNECTIONS: string;
export const DBUS_PATH: string;
export const DBUS_PATH_AGENT_MANAGER: string;
export const DBUS_PATH_SECRET_AGENT: string;
export const DBUS_PATH_SETTINGS: string;
export const DBUS_PATH_SETTINGS_CONNECTION: string;
export const DBUS_PATH_VPN: string;
export const DBUS_PATH_VPN_CONNECTION: string;
export const DBUS_SERVICE: string;
export const DBUS_VPN_ALREADY_STARTED: string;
export const DBUS_VPN_ALREADY_STOPPED: string;
export const DBUS_VPN_BAD_ARGUMENTS: string;
export const DBUS_VPN_ERROR_PREFIX: string;
export const DBUS_VPN_INTERACTIVE_NOT_SUPPORTED: string;
export const DBUS_VPN_SIGNAL_CONNECT_FAILED: string;
export const DBUS_VPN_SIGNAL_IP4_CONFIG: string;
export const DBUS_VPN_SIGNAL_IP_CONFIG_BAD: string;
export const DBUS_VPN_SIGNAL_LAUNCH_FAILED: string;
export const DBUS_VPN_SIGNAL_LOGIN_BANNER: string;
export const DBUS_VPN_SIGNAL_LOGIN_FAILED: string;
export const DBUS_VPN_SIGNAL_STATE_CHANGE: string;
export const DBUS_VPN_SIGNAL_VPN_CONFIG_BAD: string;
export const DBUS_VPN_STARTING_IN_PROGRESS: string;
export const DBUS_VPN_STOPPING_IN_PROGRESS: string;
export const DBUS_VPN_WRONG_STATE: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const SETTING_802_1X_ALTSUBJECT_MATCHES: string;
export const SETTING_802_1X_ANONYMOUS_IDENTITY: string;
export const SETTING_802_1X_CA_CERT: string;
export const SETTING_802_1X_CA_PATH: string;
export const SETTING_802_1X_CLIENT_CERT: string;
export const SETTING_802_1X_EAP: string;
export const SETTING_802_1X_IDENTITY: string;
export const SETTING_802_1X_PAC_FILE: string;
export const SETTING_802_1X_PASSWORD: string;
export const SETTING_802_1X_PASSWORD_FLAGS: string;
export const SETTING_802_1X_PASSWORD_RAW: string;
export const SETTING_802_1X_PASSWORD_RAW_FLAGS: string;
export const SETTING_802_1X_PHASE1_FAST_PROVISIONING: string;
export const SETTING_802_1X_PHASE1_PEAPLABEL: string;
export const SETTING_802_1X_PHASE1_PEAPVER: string;
export const SETTING_802_1X_PHASE2_ALTSUBJECT_MATCHES: string;
export const SETTING_802_1X_PHASE2_AUTH: string;
export const SETTING_802_1X_PHASE2_AUTHEAP: string;
export const SETTING_802_1X_PHASE2_CA_CERT: string;
export const SETTING_802_1X_PHASE2_CA_PATH: string;
export const SETTING_802_1X_PHASE2_CLIENT_CERT: string;
export const SETTING_802_1X_PHASE2_PRIVATE_KEY: string;
export const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD: string;
export const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD_FLAGS: string;
export const SETTING_802_1X_PHASE2_SUBJECT_MATCH: string;
export const SETTING_802_1X_PIN: string;
export const SETTING_802_1X_PIN_FLAGS: string;
export const SETTING_802_1X_PRIVATE_KEY: string;
export const SETTING_802_1X_PRIVATE_KEY_PASSWORD: string;
export const SETTING_802_1X_PRIVATE_KEY_PASSWORD_FLAGS: string;
export const SETTING_802_1X_SETTING_NAME: string;
export const SETTING_802_1X_SUBJECT_MATCH: string;
export const SETTING_802_1X_SYSTEM_CA_CERTS: string;
export const SETTING_ADSL_ENCAPSULATION: string;
export const SETTING_ADSL_ENCAPSULATION_LLC: string;
export const SETTING_ADSL_ENCAPSULATION_VCMUX: string;
export const SETTING_ADSL_PASSWORD: string;
export const SETTING_ADSL_PASSWORD_FLAGS: string;
export const SETTING_ADSL_PROTOCOL: string;
export const SETTING_ADSL_PROTOCOL_IPOATM: string;
export const SETTING_ADSL_PROTOCOL_PPPOA: string;
export const SETTING_ADSL_PROTOCOL_PPPOE: string;
export const SETTING_ADSL_SETTING_NAME: string;
export const SETTING_ADSL_USERNAME: string;
export const SETTING_ADSL_VCI: string;
export const SETTING_ADSL_VPI: string;
export const SETTING_BLUETOOTH_BDADDR: string;
export const SETTING_BLUETOOTH_SETTING_NAME: string;
export const SETTING_BLUETOOTH_TYPE: string;
export const SETTING_BLUETOOTH_TYPE_DUN: string;
export const SETTING_BLUETOOTH_TYPE_PANU: string;
export const SETTING_BOND_INTERFACE_NAME: string;
export const SETTING_BOND_OPTIONS: string;
export const SETTING_BOND_OPTION_AD_SELECT: string;
export const SETTING_BOND_OPTION_ARP_INTERVAL: string;
export const SETTING_BOND_OPTION_ARP_IP_TARGET: string;
export const SETTING_BOND_OPTION_ARP_VALIDATE: string;
export const SETTING_BOND_OPTION_DOWNDELAY: string;
export const SETTING_BOND_OPTION_FAIL_OVER_MAC: string;
export const SETTING_BOND_OPTION_LACP_RATE: string;
export const SETTING_BOND_OPTION_MIIMON: string;
export const SETTING_BOND_OPTION_MODE: string;
export const SETTING_BOND_OPTION_PRIMARY: string;
export const SETTING_BOND_OPTION_PRIMARY_RESELECT: string;
export const SETTING_BOND_OPTION_RESEND_IGMP: string;
export const SETTING_BOND_OPTION_UPDELAY: string;
export const SETTING_BOND_OPTION_USE_CARRIER: string;
export const SETTING_BOND_OPTION_XMIT_HASH_POLICY: string;
export const SETTING_BOND_SETTING_NAME: string;
export const SETTING_BRIDGE_AGEING_TIME: string;
export const SETTING_BRIDGE_FORWARD_DELAY: string;
export const SETTING_BRIDGE_HELLO_TIME: string;
export const SETTING_BRIDGE_INTERFACE_NAME: string;
export const SETTING_BRIDGE_MAC_ADDRESS: string;
export const SETTING_BRIDGE_MAX_AGE: string;
export const SETTING_BRIDGE_PORT_HAIRPIN_MODE: string;
export const SETTING_BRIDGE_PORT_PATH_COST: string;
export const SETTING_BRIDGE_PORT_PRIORITY: string;
export const SETTING_BRIDGE_PORT_SETTING_NAME: string;
export const SETTING_BRIDGE_PRIORITY: string;
export const SETTING_BRIDGE_SETTING_NAME: string;
export const SETTING_BRIDGE_STP: string;
export const SETTING_CDMA_NUMBER: string;
export const SETTING_CDMA_PASSWORD: string;
export const SETTING_CDMA_PASSWORD_FLAGS: string;
export const SETTING_CDMA_SETTING_NAME: string;
export const SETTING_CDMA_USERNAME: string;
export const SETTING_CONNECTION_AUTOCONNECT: string;
export const SETTING_CONNECTION_GATEWAY_PING_TIMEOUT: string;
export const SETTING_CONNECTION_ID: string;
export const SETTING_CONNECTION_INTERFACE_NAME: string;
export const SETTING_CONNECTION_MASTER: string;
export const SETTING_CONNECTION_PERMISSIONS: string;
export const SETTING_CONNECTION_READ_ONLY: string;
export const SETTING_CONNECTION_SECONDARIES: string;
export const SETTING_CONNECTION_SETTING_NAME: string;
export const SETTING_CONNECTION_SLAVE_TYPE: string;
export const SETTING_CONNECTION_TIMESTAMP: string;
export const SETTING_CONNECTION_TYPE: string;
export const SETTING_CONNECTION_UUID: string;
export const SETTING_CONNECTION_ZONE: string;
export const SETTING_DCB_APP_FCOE_FLAGS: string;
export const SETTING_DCB_APP_FCOE_MODE: string;
export const SETTING_DCB_APP_FCOE_PRIORITY: string;
export const SETTING_DCB_APP_FIP_FLAGS: string;
export const SETTING_DCB_APP_FIP_PRIORITY: string;
export const SETTING_DCB_APP_ISCSI_FLAGS: string;
export const SETTING_DCB_APP_ISCSI_PRIORITY: string;
export const SETTING_DCB_FCOE_MODE_FABRIC: string;
export const SETTING_DCB_FCOE_MODE_VN2VN: string;
export const SETTING_DCB_PRIORITY_BANDWIDTH: string;
export const SETTING_DCB_PRIORITY_FLOW_CONTROL: string;
export const SETTING_DCB_PRIORITY_FLOW_CONTROL_FLAGS: string;
export const SETTING_DCB_PRIORITY_GROUP_BANDWIDTH: string;
export const SETTING_DCB_PRIORITY_GROUP_FLAGS: string;
export const SETTING_DCB_PRIORITY_GROUP_ID: string;
export const SETTING_DCB_PRIORITY_STRICT_BANDWIDTH: string;
export const SETTING_DCB_PRIORITY_TRAFFIC_CLASS: string;
export const SETTING_DCB_SETTING_NAME: string;
export const SETTING_GENERIC_SETTING_NAME: string;
export const SETTING_GSM_ALLOWED_BANDS: string;
export const SETTING_GSM_APN: string;
export const SETTING_GSM_BANDS_MAX: number;
export const SETTING_GSM_HOME_ONLY: string;
export const SETTING_GSM_NETWORK_ID: string;
export const SETTING_GSM_NETWORK_TYPE: string;
export const SETTING_GSM_NUMBER: string;
export const SETTING_GSM_PASSWORD: string;
export const SETTING_GSM_PASSWORD_FLAGS: string;
export const SETTING_GSM_PIN: string;
export const SETTING_GSM_PIN_FLAGS: string;
export const SETTING_GSM_SETTING_NAME: string;
export const SETTING_GSM_USERNAME: string;
export const SETTING_INFINIBAND_MAC_ADDRESS: string;
export const SETTING_INFINIBAND_MTU: string;
export const SETTING_INFINIBAND_PARENT: string;
export const SETTING_INFINIBAND_P_KEY: string;
export const SETTING_INFINIBAND_SETTING_NAME: string;
export const SETTING_INFINIBAND_TRANSPORT_MODE: string;
export const SETTING_IP4_CONFIG_ADDRESSES: string;
export const SETTING_IP4_CONFIG_DHCP_CLIENT_ID: string;
export const SETTING_IP4_CONFIG_DHCP_HOSTNAME: string;
export const SETTING_IP4_CONFIG_DHCP_SEND_HOSTNAME: string;
export const SETTING_IP4_CONFIG_DHCP_TIMEOUT: string;
export const SETTING_IP4_CONFIG_DNS: string;
export const SETTING_IP4_CONFIG_DNS_SEARCH: string;
export const SETTING_IP4_CONFIG_IGNORE_AUTO_DNS: string;
export const SETTING_IP4_CONFIG_IGNORE_AUTO_ROUTES: string;
export const SETTING_IP4_CONFIG_MAY_FAIL: string;
export const SETTING_IP4_CONFIG_METHOD: string;
export const SETTING_IP4_CONFIG_METHOD_AUTO: string;
export const SETTING_IP4_CONFIG_METHOD_DISABLED: string;
export const SETTING_IP4_CONFIG_METHOD_LINK_LOCAL: string;
export const SETTING_IP4_CONFIG_METHOD_MANUAL: string;
export const SETTING_IP4_CONFIG_METHOD_SHARED: string;
export const SETTING_IP4_CONFIG_NEVER_DEFAULT: string;
export const SETTING_IP4_CONFIG_ROUTES: string;
export const SETTING_IP4_CONFIG_ROUTE_METRIC: string;
export const SETTING_IP4_CONFIG_SETTING_NAME: string;
export const SETTING_IP6_CONFIG_ADDRESSES: string;
export const SETTING_IP6_CONFIG_DHCP_HOSTNAME: string;
export const SETTING_IP6_CONFIG_DNS: string;
export const SETTING_IP6_CONFIG_DNS_SEARCH: string;
export const SETTING_IP6_CONFIG_IGNORE_AUTO_DNS: string;
export const SETTING_IP6_CONFIG_IGNORE_AUTO_ROUTES: string;
export const SETTING_IP6_CONFIG_IP6_PRIVACY: string;
export const SETTING_IP6_CONFIG_MAY_FAIL: string;
export const SETTING_IP6_CONFIG_METHOD: string;
export const SETTING_IP6_CONFIG_METHOD_AUTO: string;
export const SETTING_IP6_CONFIG_METHOD_DHCP: string;
export const SETTING_IP6_CONFIG_METHOD_IGNORE: string;
export const SETTING_IP6_CONFIG_METHOD_LINK_LOCAL: string;
export const SETTING_IP6_CONFIG_METHOD_MANUAL: string;
export const SETTING_IP6_CONFIG_METHOD_SHARED: string;
export const SETTING_IP6_CONFIG_NEVER_DEFAULT: string;
export const SETTING_IP6_CONFIG_ROUTES: string;
export const SETTING_IP6_CONFIG_ROUTE_METRIC: string;
export const SETTING_IP6_CONFIG_SETTING_NAME: string;
export const SETTING_NAME: string;
export const SETTING_OLPC_MESH_CHANNEL: string;
export const SETTING_OLPC_MESH_DHCP_ANYCAST_ADDRESS: string;
export const SETTING_OLPC_MESH_SETTING_NAME: string;
export const SETTING_OLPC_MESH_SSID: string;
export const SETTING_PARAM_FUZZY_IGNORE: number;
export const SETTING_PARAM_REQUIRED: number;
export const SETTING_PARAM_SECRET: number;
export const SETTING_PARAM_SERIALIZE: number;
export const SETTING_PPPOE_PASSWORD: string;
export const SETTING_PPPOE_PASSWORD_FLAGS: string;
export const SETTING_PPPOE_SERVICE: string;
export const SETTING_PPPOE_SETTING_NAME: string;
export const SETTING_PPPOE_USERNAME: string;
export const SETTING_PPP_BAUD: string;
export const SETTING_PPP_CRTSCTS: string;
export const SETTING_PPP_LCP_ECHO_FAILURE: string;
export const SETTING_PPP_LCP_ECHO_INTERVAL: string;
export const SETTING_PPP_MPPE_STATEFUL: string;
export const SETTING_PPP_MRU: string;
export const SETTING_PPP_MTU: string;
export const SETTING_PPP_NOAUTH: string;
export const SETTING_PPP_NOBSDCOMP: string;
export const SETTING_PPP_NODEFLATE: string;
export const SETTING_PPP_NO_VJ_COMP: string;
export const SETTING_PPP_REFUSE_CHAP: string;
export const SETTING_PPP_REFUSE_EAP: string;
export const SETTING_PPP_REFUSE_MSCHAP: string;
export const SETTING_PPP_REFUSE_MSCHAPV2: string;
export const SETTING_PPP_REFUSE_PAP: string;
export const SETTING_PPP_REQUIRE_MPPE: string;
export const SETTING_PPP_REQUIRE_MPPE_128: string;
export const SETTING_PPP_SETTING_NAME: string;
export const SETTING_SERIAL_BAUD: string;
export const SETTING_SERIAL_BITS: string;
export const SETTING_SERIAL_PARITY: string;
export const SETTING_SERIAL_SEND_DELAY: string;
export const SETTING_SERIAL_SETTING_NAME: string;
export const SETTING_SERIAL_STOPBITS: string;
export const SETTING_TEAM_CONFIG: string;
export const SETTING_TEAM_INTERFACE_NAME: string;
export const SETTING_TEAM_PORT_CONFIG: string;
export const SETTING_TEAM_PORT_SETTING_NAME: string;
export const SETTING_TEAM_SETTING_NAME: string;
export const SETTING_VLAN_EGRESS_PRIORITY_MAP: string;
export const SETTING_VLAN_FLAGS: string;
export const SETTING_VLAN_ID: string;
export const SETTING_VLAN_INGRESS_PRIORITY_MAP: string;
export const SETTING_VLAN_INTERFACE_NAME: string;
export const SETTING_VLAN_PARENT: string;
export const SETTING_VLAN_SETTING_NAME: string;
export const SETTING_VPN_DATA: string;
export const SETTING_VPN_PERSISTENT: string;
export const SETTING_VPN_SECRETS: string;
export const SETTING_VPN_SERVICE_TYPE: string;
export const SETTING_VPN_SETTING_NAME: string;
export const SETTING_VPN_USER_NAME: string;
export const SETTING_WIMAX_MAC_ADDRESS: string;
export const SETTING_WIMAX_NETWORK_NAME: string;
export const SETTING_WIMAX_SETTING_NAME: string;
export const SETTING_WIRED_AUTO_NEGOTIATE: string;
export const SETTING_WIRED_CLONED_MAC_ADDRESS: string;
export const SETTING_WIRED_DUPLEX: string;
export const SETTING_WIRED_MAC_ADDRESS: string;
export const SETTING_WIRED_MAC_ADDRESS_BLACKLIST: string;
export const SETTING_WIRED_MTU: string;
export const SETTING_WIRED_PORT: string;
export const SETTING_WIRED_S390_NETTYPE: string;
export const SETTING_WIRED_S390_OPTIONS: string;
export const SETTING_WIRED_S390_SUBCHANNELS: string;
export const SETTING_WIRED_SETTING_NAME: string;
export const SETTING_WIRED_SPEED: string;
export const SETTING_WIRELESS_BAND: string;
export const SETTING_WIRELESS_BSSID: string;
export const SETTING_WIRELESS_CHANNEL: string;
export const SETTING_WIRELESS_CLONED_MAC_ADDRESS: string;
export const SETTING_WIRELESS_HIDDEN: string;
export const SETTING_WIRELESS_MAC_ADDRESS: string;
export const SETTING_WIRELESS_MAC_ADDRESS_BLACKLIST: string;
export const SETTING_WIRELESS_MODE: string;
export const SETTING_WIRELESS_MODE_ADHOC: string;
export const SETTING_WIRELESS_MODE_AP: string;
export const SETTING_WIRELESS_MODE_INFRA: string;
export const SETTING_WIRELESS_MTU: string;
export const SETTING_WIRELESS_POWERSAVE: string;
export const SETTING_WIRELESS_RATE: string;
export const SETTING_WIRELESS_SEC: string;
export const SETTING_WIRELESS_SECURITY_AUTH_ALG: string;
export const SETTING_WIRELESS_SECURITY_GROUP: string;
export const SETTING_WIRELESS_SECURITY_KEY_MGMT: string;
export const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD: string;
export const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD_FLAGS: string;
export const SETTING_WIRELESS_SECURITY_LEAP_USERNAME: string;
export const SETTING_WIRELESS_SECURITY_PAIRWISE: string;
export const SETTING_WIRELESS_SECURITY_PROTO: string;
export const SETTING_WIRELESS_SECURITY_PSK: string;
export const SETTING_WIRELESS_SECURITY_PSK_FLAGS: string;
export const SETTING_WIRELESS_SECURITY_SETTING_NAME: string;
export const SETTING_WIRELESS_SECURITY_WEP_KEY0: string;
export const SETTING_WIRELESS_SECURITY_WEP_KEY1: string;
export const SETTING_WIRELESS_SECURITY_WEP_KEY2: string;
export const SETTING_WIRELESS_SECURITY_WEP_KEY3: string;
export const SETTING_WIRELESS_SECURITY_WEP_KEY_FLAGS: string;
export const SETTING_WIRELESS_SECURITY_WEP_KEY_TYPE: string;
export const SETTING_WIRELESS_SECURITY_WEP_TX_KEYIDX: string;
export const SETTING_WIRELESS_SEEN_BSSIDS: string;
export const SETTING_WIRELESS_SETTING_NAME: string;
export const SETTING_WIRELESS_SSID: string;
export const SETTING_WIRELESS_TX_POWER: string;
export const UTILS_HWADDR_LEN_MAX: number;
export const VLAN_FLAGS_ALL: number;
export const VPN_DBUS_PLUGIN_INTERFACE: string;
export const VPN_DBUS_PLUGIN_PATH: string;
export const VPN_PLUGIN_CAN_PERSIST: string;
export const VPN_PLUGIN_CONFIG_BANNER: string;
export const VPN_PLUGIN_CONFIG_EXT_GATEWAY: string;
export const VPN_PLUGIN_CONFIG_HAS_IP4: string;
export const VPN_PLUGIN_CONFIG_HAS_IP6: string;
export const VPN_PLUGIN_CONFIG_MTU: string;
export const VPN_PLUGIN_CONFIG_TUNDEV: string;
export const VPN_PLUGIN_IP4_CONFIG_ADDRESS: string;
export const VPN_PLUGIN_IP4_CONFIG_DNS: string;
export const VPN_PLUGIN_IP4_CONFIG_DOMAIN: string;
export const VPN_PLUGIN_IP4_CONFIG_DOMAINS: string;
export const VPN_PLUGIN_IP4_CONFIG_INT_GATEWAY: string;
export const VPN_PLUGIN_IP4_CONFIG_MSS: string;
export const VPN_PLUGIN_IP4_CONFIG_NBNS: string;
export const VPN_PLUGIN_IP4_CONFIG_NEVER_DEFAULT: string;
export const VPN_PLUGIN_IP4_CONFIG_PREFIX: string;
export const VPN_PLUGIN_IP4_CONFIG_PTP: string;
export const VPN_PLUGIN_IP4_CONFIG_ROUTES: string;
export const VPN_PLUGIN_IP6_CONFIG_ADDRESS: string;
export const VPN_PLUGIN_IP6_CONFIG_DNS: string;
export const VPN_PLUGIN_IP6_CONFIG_DOMAIN: string;
export const VPN_PLUGIN_IP6_CONFIG_DOMAINS: string;
export const VPN_PLUGIN_IP6_CONFIG_INT_GATEWAY: string;
export const VPN_PLUGIN_IP6_CONFIG_MSS: string;
export const VPN_PLUGIN_IP6_CONFIG_NEVER_DEFAULT: string;
export const VPN_PLUGIN_IP6_CONFIG_PREFIX: string;
export const VPN_PLUGIN_IP6_CONFIG_PTP: string;
export const VPN_PLUGIN_IP6_CONFIG_ROUTES: string;
/**
 * Registers an error quark for #NMConnection if necessary.
 */
export function connection_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSetting8021x if necessary.
 */
export function setting_802_1x_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingAdsl if necessary.
 */
export function setting_adsl_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingBluetooth if necessary.
 */
export function setting_bluetooth_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingBond if necessary.
 */
export function setting_bond_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingBridge if necessary.
 */
export function setting_bridge_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingBridgePort if necessary.
 */
export function setting_bridge_port_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingCdma if necessary.
 */
export function setting_cdma_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingConnection if necessary.
 */
export function setting_connection_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingDcb if necessary.
 */
export function setting_dcb_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSetting if necessary.
 */
export function setting_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingGeneric if necessary.
 */
export function setting_generic_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingGsm if necessary.
 */
export function setting_gsm_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingInfiniband if necessary.
 */
export function setting_infiniband_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingIP4Config if necessary.
 */
export function setting_ip4_config_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingIP6Config if necessary.
 */
export function setting_ip6_config_error_quark(): GLib.Quark;
/**
 * 
 */
export function setting_olpc_mesh_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingPPP if necessary.
 */
export function setting_ppp_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingPPPOE if necessary.
 */
export function setting_pppoe_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingSerial if necessary.
 */
export function setting_serial_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingTeam if necessary.
 */
export function setting_team_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingTeamPort if necessary.
 */
export function setting_team_port_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingVlan if necessary.
 */
export function setting_vlan_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingVPN if necessary.
 */
export function setting_vpn_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingWimax if necessary.
 */
export function setting_wimax_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingWired if necessary.
 */
export function setting_wired_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingWireless if necessary.
 */
export function setting_wireless_error_quark(): GLib.Quark;
/**
 * Registers an error quark for #NMSettingWired if necessary.
 */
export function setting_wireless_security_error_quark(): GLib.Quark;
/**
 * Given a set of device capabilities, and a desired security type to che
 * ck
 * against, determines whether the combination of device capabilities and
 * desired security type are valid for AP/Hotspot connections.
 */
export function utils_ap_mode_security_valid(type: UtilsSecurityType, wifi_caps: DeviceWifiCapabilities): boolean;
/**
 * Converts a byte-array @bytes into a hexadecimal string.
 * If @final_len is greater than -1, the returned string is terminated at
 * that index (returned_string[final_len] == '\0'),
 */
export function utils_bin2hexstr(bytes: string, len: number, final_len: number): string;
/**
 * Determines if a connection of type @virtual_type can (in the
 * general case) work with connections of type @other_type.
 * If @virtual_type is %NM_TYPE_SETTING_VLAN, then this checks if
 * @other_type is a valid type for the parent of a VLAN.
 * If @virtual_type is a "master" type (eg, %NM_TYPE_SETTING_BRIDGE),
 * then this checks if @other_type is a valid type for a slave of that
 * master.
 * Note that even if this returns %TRUE it is not guaranteed that
 * <emphasis>every</emphasis> connection of type @other_type is
 * compatible with @virtual_type; it may depend on the exact
 * configuration of the two connections, or on the capabilities of an
 * underlying device driver.
 */
export function utils_check_virtual_device_compatibility(virtual_type: unknown, other_type: unknown): boolean;
/**
 * No-op. Although this function still exists for ABI compatibility reaso
 * ns, it
 * does not have any effect, and does not ever need to be called.
 */
export function utils_deinit(): void;
/**
 * This function does a quick printable character conversion of the SSID,
 *  simply
 * replacing embedded NULLs and non-printable characters with the hexadec
 * imal
 * representation of that character.  Intended for debugging only, should
 *  not
 * be used for display of SSIDs.
 */
export function utils_escape_ssid(ssid: number, len: number): string;
/**
 * Utility function to find out if the @filename is in PKCS#<!-- -->12 fo
 * rmat.
 */
export function utils_file_is_pkcs12(filename: string): boolean;
/**
 * Searches for a @progname file in a list of search @paths.
 */
export function utils_file_search_in_paths(progname: string, try_first: string | null, paths: string | null, file_test_flags: GLib.FileTest, predicate: UtilsFileSearchInPathsPredicate, user_data: object | null): string;
/**
 * Utility function to duplicate a hash table of #GValues.
 */
export function utils_gvalue_hash_dup(hash: GLib.HashTable): GLib.HashTable;
/**
 * Converts a hex string (2 characters) into its byte representation.
 */
export function utils_hex2byte(hex: string): number;
/**
 * Converts a hexadecimal string @hex into a byte-array. The returned arr
 * ay
 * length is @len/2.
 */
export function utils_hexstr2bin(hex: string, len: number): string;
/**
 * Parses @asc and converts it to binary form in a #GByteArray. See
 * nm_utils_hwaddr_aton() if you don't want a #GByteArray.
 */
export function utils_hwaddr_atoba(asc: string, type: number): number[];
/**
 * Parses @asc and converts it to binary form in @buffer. See
 * nm_utils_hwaddr_atoba() if you'd rather have the result in a
 * #GByteArray.
 * See also nm_utils_hwaddr_aton_len(), which takes an output length
 * instead of a type.
 */
export function utils_hwaddr_aton(asc: string, type: number, buffer: object | null): number;
/**
 * Parses @asc and converts it to binary form in @buffer.
 * Bytes in @asc can be sepatared by colons (:), or hyphens (-), but not 
 * mixed.
 */
export function utils_hwaddr_aton_len(asc: string, buffer: object | null, length: number): number;
/**
 * Returns the length in octets of a hardware address of type @type.
 */
export function utils_hwaddr_len(type: number): number;
/**
 * Converts @addr to textual form.
 * See also nm_utils_hwaddr_ntoa_len(), which takes a length instead of
 * a type.
 */
export function utils_hwaddr_ntoa(addr: object | null, type: number): string;
/**
 * Converts @addr to textual form.
 */
export function utils_hwaddr_ntoa_len(addr: object | null, length: number): string;
/**
 * Returns the type (either <literal>ARPHRD_ETHER</literal> or
 * <literal>ARPHRD_INFINIBAND</literal>) of the raw address given its len
 * gth.
 */
export function utils_hwaddr_type(len: number): number;
/**
 * Parses @asc to see if it is a valid hardware address of some type.
 */
export function utils_hwaddr_valid(asc: string): boolean;
/**
 * This function is a 1:1 copy of the kernel's interface validation
 * function in net/core/dev.c.
 */
export function utils_iface_valid_name(name: string): boolean;
/**
 * Wrapper for inet_ntop.
 */
export function utils_inet4_ntop(inaddr: unknown, dst: string): string;
/**
 * Wrapper for inet_ntop.
 */
export function utils_inet6_ntop(in6addr: object | null, dst: string): string;
/**
 * Initializes libnm-util; should be called when starting any program tha
 * t
 * uses libnm-util.  This function can be called more than once.
 */
export function utils_init(): boolean;
/**
 * Utility function to convert a #GPtrArray of #GArrays of #guint32s repr
 * esenting
 * a list of NetworkManager IPv4 addresses (which is a tuple of address, 
 * gateway,
 * and prefix) into a #GSList of #NMIP4Address objects.  The specific for
 * mat of
 * this serialization is not guaranteed to be stable and the #GArray may 
 * be
 * extended in the future.
 */
export function utils_ip4_addresses_from_gvalue(value: GObject.Value): string[];
/**
 * Utility function to convert a #GSList of #NMIP4Address objects into a
 * #GPtrArray of #GArrays of #guint32s representing a list of NetworkMana
 * ger IPv4
 * addresses (which is a tuple of address, gateway, and prefix).   The sp
 * ecific
 * format of this serialization is not guaranteed to be stable and may be
 * extended in the future.
 */
export function utils_ip4_addresses_to_gvalue(list: string[], value: GObject.Value): void;
/**
 * When the Internet was originally set up, various ranges of IP addresse
 * s were
 * segmented into three network classes: A, B, and C.  This function will
 *  return
 * a prefix that is associated with the IP address specified defining whe
 * re it
 * falls in the predefined classes.
 */
export function utils_ip4_get_default_prefix(ip: number): number;
/**
 * 
 */
export function utils_ip4_netmask_to_prefix(netmask: number): number;
/**
 * 
 */
export function utils_ip4_prefix_to_netmask(prefix: number): number;
/**
 * Utility function to convert a #GPtrArray of #GArrays of #guint32s repr
 * esenting
 * a list of NetworkManager IPv4 routes (which is a tuple of route, next 
 * hop,
 * prefix, and metric) into a #GSList of #NMIP4Route objects.  The specif
 * ic
 * format of this serialization is not guaranteed to be stable and may be
 * extended in the future.
 */
export function utils_ip4_routes_from_gvalue(value: GObject.Value): string[];
/**
 * Utility function to convert a #GSList of #NMIP4Route objects into a
 * #GPtrArray of #GArrays of #guint32s representing a list of NetworkMana
 * ger IPv4
 * routes (which is a tuple of route, next hop, prefix, and metric).   Th
 * e
 * specific format of this serialization is not guaranteed to be stable a
 * nd may
 * be extended in the future.
 */
export function utils_ip4_routes_to_gvalue(list: string[], value: GObject.Value): void;
/**
 * Utility function to convert a #GPtrArray of #GValueArrays of (#GArray 
 * of guchars) and #guint32
 * representing a list of NetworkManager IPv6 addresses (which is a tuple
 *  of address,
 * prefix, and gateway), into a #GSList of #NMIP6Address objects.  The sp
 * ecific format of
 * this serialization is not guaranteed to be stable and the #GValueArray
 *  may be
 * extended in the future.
 */
export function utils_ip6_addresses_from_gvalue(value: GObject.Value): string[];
/**
 * Utility function to convert a #GSList of #NMIP6Address objects into a
 * #GPtrArray of #GValueArrays representing a list of NetworkManager IPv6
 *  addresses
 * (which is a tuple of address, prefix, and gateway). The specific forma
 * t of
 * this serialization is not guaranteed to be stable and may be extended 
 * in the
 * future.
 */
export function utils_ip6_addresses_to_gvalue(list: string[], value: GObject.Value): void;
/**
 * Converts a #GValue containing a #GPtrArray of IP6 DNS, represented as
 * #GByteArrays into a #GSList of <literal><type>struct in6_addr</type></
 * literal>s.
 */
export function utils_ip6_dns_from_gvalue(value: GObject.Value): string[];
/**
 * Utility function to convert a #GSList of <literal><type>struct
 * in6_addr</type></literal> structs into a #GPtrArray of #GByteArrays
 * representing each server's IPv6 addresses in network byte order.
 * The specific format of this serialization is not guaranteed to be
 * stable and may be extended in the future.
 */
export function utils_ip6_dns_to_gvalue(list: string[], value: GObject.Value): void;
/**
 * Utility function #GPtrArray of #GValueArrays of (#GArray of #guchars),
 *  #guint32,
 * (#GArray of #guchars), and #guint32 representing a list of NetworkMana
 * ger IPv6
 * routes (which is a tuple of destination, prefix, next hop, and metric)
 * into a #GSList of #NMIP6Route objects.  The specific format of this se
 * rialization
 * is not guaranteed to be stable and may be extended in the future.
 */
export function utils_ip6_routes_from_gvalue(value: GObject.Value): string[];
/**
 * Utility function to convert a #GSList of #NMIP6Route objects into a #G
 * PtrArray of
 * #GValueArrays of (#GArray of #guchars), #guint32, (#GArray of #guchars
 * ), and #guint32
 * representing a list of NetworkManager IPv6 routes (which is a tuple of
 *  destination,
 * prefix, next hop, and metric).  The specific format of this serializat
 * ion is not
 * guaranteed to be stable and may be extended in the future.
 */
export function utils_ip6_routes_to_gvalue(list: string[], value: GObject.Value): void;
/**
 * Different manufacturers use different mechanisms for not broadcasting 
 * the
 * AP's SSID.  This function attempts to detect blank/empty SSIDs using a
 * number of known SSID-cloaking methods.
 */
export function utils_is_empty_ssid(ssid: number, len: number): boolean;
/**
 * Checks if @str is a UUID
 */
export function utils_is_uuid(str: string): boolean;
/**
 * Encrypts the given RSA private key data with the given password (or ge
 * nerates
 * a password if no password was given) and converts the data to PEM form
 * at
 * suitable for writing to a file. It uses Triple DES cipher for the encr
 * yption.
 */
export function utils_rsa_key_encrypt(data: number[], in_password: string | null): [number[], string | null];
/**
 * Encrypts the given RSA private key data with the given password (or ge
 * nerates
 * a password if no password was given) and converts the data to PEM form
 * at
 * suitable for writing to a file.  It uses AES cipher for the encryption
 * .
 */
export function utils_rsa_key_encrypt_aes(data: number[], in_password: string | null): [number[], string | null];
/**
 * Earlier versions of the Linux kernel added a NULL byte to the end of t
 * he
 * SSID to enable easy printing of the SSID on the console or in a termin
 * al,
 * but this behavior was problematic (SSIDs are simply byte arrays, not s
 * trings)
 * and thus was changed.  This function compensates for that behavior at 
 * the
 * cost of some compatibility with odd SSIDs that may legitimately have t
 * railing
 * NULLs, even though that is functionally pointless.
 */
export function utils_same_ssid(ssid1: number[], ssid2: number[], ignore_trailing_null: boolean): boolean;
/**
 * Given a set of device capabilities, and a desired security type to che
 * ck
 * against, determines whether the combination of device, desired securit
 * y
 * type, and AP capabilities intersect.
 * NOTE: this function cannot handle checking security for AP/Hotspot mod
 * e;
 * use nm_utils_ap_mode_security_valid() instead.
 */
export function utils_security_valid(type: UtilsSecurityType, wifi_caps: DeviceWifiCapabilities, have_ap: boolean, adhoc: boolean, ap_flags: Gjs_80211ApFlags, ap_wpa: Gjs_80211ApSecurityFlags, ap_rsn: Gjs_80211ApSecurityFlags): boolean;
/**
 * Utility function to free a #GSList.
 */
export function utils_slist_free(list: string[], elem_destroy_fn: GLib.DestroyNotify): void;
/**
 * Wi-Fi SSIDs are byte arrays, they are _not_ strings.  Thus, an SSID ma
 * y
 * contain embedded NULLs and other unprintable characters.  Often it is
 * useful to print the SSID out for debugging purposes, but that should b
 * e the
 * _only_ use of this function.  Do not use this function for any persist
 * ent
 * storage of the SSID, since the printable SSID returned from this funct
 * ion
 * cannot be converted back into the real SSID of the access point.
 * This function does almost everything humanly possible to convert the i
 * nput
 * into a printable UTF-8 string, using roughly the following procedure:
 * 1) if the input data is already UTF-8 safe, no conversion is performed
 * 2) attempts to get the current system language from the LANG environme
 * nt
 *    variable, and depending on the language, uses a table of alternativ
 * e
 *    encodings to try.  For example, if LANG=hu_HU, the table may first 
 * try
 *    the ISO-8859-2 encoding, and if that fails, try the Windows-1250 en
 * coding.
 *    If all fallback encodings fail, replaces non-UTF-8 characters with 
 * '?'.
 * 3) If the system language was unable to be determined, falls back to t
 * he
 *    ISO-8859-1 encoding, then to the Windows-1251 encoding.
 * 4) If step 3 fails, replaces non-UTF-8 characters with '?'.
 * Again, this function should be used for debugging and display purposes
 * _only_.
 */
export function utils_ssid_to_utf8(ssid: number[]): string;
/**
 * 
 */
export function utils_uuid_generate(): string;
/**
 * For a given @s, this function will always return the same UUID.
 */
export function utils_uuid_generate_from_string(s: string): string;
/**
 * Checks if @key is a valid WEP key
 */
export function utils_wep_key_valid(key: string, wep_type: WepKeyType): boolean;
/**
 * Utility function to translate a Wi-Fi channel to its corresponding fre
 * quency.
 */
export function utils_wifi_channel_to_freq(channel: number, band: string): number;
/**
 * Utility function to find out next/previous Wi-Fi channel for a channel
 * .
 */
export function utils_wifi_find_next_channel(channel: number, direction: number, band: string): number;
/**
 * Utility function to translate a Wi-Fi frequency to its corresponding c
 * hannel.
 */
export function utils_wifi_freq_to_channel(freq: number): number;
/**
 * Utility function to verify Wi-Fi channel validity.
 */
export function utils_wifi_is_channel_valid(channel: number, band: string): boolean;
/**
 * Checks if @psk is a valid WPA PSK
 */
export function utils_wpa_psk_valid(psk: string): boolean;
export enum Gjs_80211Mode {
    UNKNOWN = 0,
    ADHOC = 1,
    INFRA = 2,
    AP = 3,
}
export enum ActiveConnectionState {
    UNKNOWN = 0,
    ACTIVATING = 1,
    ACTIVATED = 2,
    DEACTIVATING = 3,
    DEACTIVATED = 4,
}
export enum ConnectionError {
    UNKNOWNERROR = 0,
    CONNECTIONSETTINGNOTFOUND = 1,
    CONNECTIONTYPEINVALID = 2,
    SETTINGNOTFOUND = 3,
    INVALIDSETTING = 4,
}
export enum ConnectivityState {
    UNKNOWN = 0,
    NONE = 1,
    PORTAL = 2,
    LIMITED = 3,
    FULL = 4,
}
export enum DeviceState {
    UNKNOWN = 0,
    UNMANAGED = 10,
    UNAVAILABLE = 20,
    DISCONNECTED = 30,
    PREPARE = 40,
    CONFIG = 50,
    NEED_AUTH = 60,
    IP_CONFIG = 70,
    IP_CHECK = 80,
    SECONDARIES = 90,
    ACTIVATED = 100,
    DEACTIVATING = 110,
    FAILED = 120,
}
export enum DeviceStateReason {
    NONE = 0,
    UNKNOWN = 1,
    NOW_MANAGED = 2,
    NOW_UNMANAGED = 3,
    CONFIG_FAILED = 4,
    IP_CONFIG_UNAVAILABLE = 5,
    IP_CONFIG_EXPIRED = 6,
    NO_SECRETS = 7,
    SUPPLICANT_DISCONNECT = 8,
    SUPPLICANT_CONFIG_FAILED = 9,
    SUPPLICANT_FAILED = 10,
    SUPPLICANT_TIMEOUT = 11,
    PPP_START_FAILED = 12,
    PPP_DISCONNECT = 13,
    PPP_FAILED = 14,
    DHCP_START_FAILED = 15,
    DHCP_ERROR = 16,
    DHCP_FAILED = 17,
    SHARED_START_FAILED = 18,
    SHARED_FAILED = 19,
    AUTOIP_START_FAILED = 20,
    AUTOIP_ERROR = 21,
    AUTOIP_FAILED = 22,
    MODEM_BUSY = 23,
    MODEM_NO_DIAL_TONE = 24,
    MODEM_NO_CARRIER = 25,
    MODEM_DIAL_TIMEOUT = 26,
    MODEM_DIAL_FAILED = 27,
    MODEM_INIT_FAILED = 28,
    GSM_APN_FAILED = 29,
    GSM_REGISTRATION_NOT_SEARCHING = 30,
    GSM_REGISTRATION_DENIED = 31,
    GSM_REGISTRATION_TIMEOUT = 32,
    GSM_REGISTRATION_FAILED = 33,
    GSM_PIN_CHECK_FAILED = 34,
    FIRMWARE_MISSING = 35,
    REMOVED = 36,
    SLEEPING = 37,
    CONNECTION_REMOVED = 38,
    USER_REQUESTED = 39,
    CARRIER = 40,
    CONNECTION_ASSUMED = 41,
    SUPPLICANT_AVAILABLE = 42,
    MODEM_NOT_FOUND = 43,
    BT_FAILED = 44,
    GSM_SIM_NOT_INSERTED = 45,
    GSM_SIM_PIN_REQUIRED = 46,
    GSM_SIM_PUK_REQUIRED = 47,
    GSM_SIM_WRONG = 48,
    INFINIBAND_MODE = 49,
    DEPENDENCY_FAILED = 50,
    BR2684_FAILED = 51,
    MODEM_MANAGER_UNAVAILABLE = 52,
    SSID_NOT_FOUND = 53,
    SECONDARY_CONNECTION_FAILED = 54,
    DCB_FCOE_FAILED = 55,
    TEAMD_CONTROL_FAILED = 56,
    MODEM_FAILED = 57,
    MODEM_AVAILABLE = 58,
    SIM_PIN_INCORRECT = 59,
    NEW_ACTIVATION = 60,
    PARENT_CHANGED = 61,
    PARENT_MANAGED_CHANGED = 62,
    LAST = 65535,
}
export enum DeviceType {
    UNKNOWN = 0,
    ETHERNET = 1,
    WIFI = 2,
    UNUSED1 = 3,
    UNUSED2 = 4,
    BT = 5,
    OLPC_MESH = 6,
    WIMAX = 7,
    MODEM = 8,
    INFINIBAND = 9,
    BOND = 10,
    VLAN = 11,
    ADSL = 12,
    BRIDGE = 13,
    GENERIC = 14,
    TEAM = 15,
    TUN = 16,
    IP_TUNNEL = 17,
    MACVLAN = 18,
    VXLAN = 19,
    VETH = 20,
}
export enum Setting8021xCKFormat {
    UNKNOWN = 0,
    X509 = 1,
    RAW_KEY = 2,
    PKCS12 = 3,
}
export enum Setting8021xCKScheme {
    UNKNOWN = 0,
    BLOB = 1,
    PATH = 2,
}
export enum Setting8021xError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
}
export enum SettingAdslError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
}
export enum SettingBluetoothError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
    TYPESETTINGNOTFOUND = 3,
}
export enum SettingBondError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
    INVALIDOPTION = 3,
    MISSINGOPTION = 4,
}
export enum SettingBridgeError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
}
export enum SettingBridgePortError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
}
export enum SettingCdmaError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
    MISSINGSERIALSETTING = 3,
}
export enum SettingCompareFlags {
    EXACT = 0,
    FUZZY = 1,
    IGNORE_ID = 2,
    IGNORE_SECRETS = 4,
    IGNORE_AGENT_OWNED_SECRETS = 8,
    IGNORE_NOT_SAVED_SECRETS = 16,
    DIFF_RESULT_WITH_DEFAULT = 32,
    DIFF_RESULT_NO_DEFAULT = 64,
}
export enum SettingConnectionError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
    TYPESETTINGNOTFOUND = 3,
    IPCONFIGNOTALLOWED = 4,
}
export enum SettingDcbError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
}
export enum SettingDcbFlags {
    NONE = 0,
    ENABLE = 1,
    ADVERTISE = 2,
    WILLING = 4,
}
export enum SettingDiffResult {
    UNKNOWN = 0,
    IN_A = 1,
    IN_B = 2,
    IN_A_DEFAULT = 4,
    IN_B_DEFAULT = 4,
}
export enum SettingError {
    UNKNOWNERROR = 0,
    PROPERTYNOTFOUND = 1,
    PROPERTYNOTSECRET = 2,
    PROPERTYTYPEMISMATCH = 3,
}
export enum SettingGenericError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
}
export enum SettingGsmError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
    MISSINGSERIALSETTING = 3,
}
export enum SettingGsmNetworkBand {
    UNKNOWN = 0,
    ANY = 1,
    EGSM = 2,
    DCS = 4,
    PCS = 8,
    G850 = 16,
    U2100 = 32,
    U1800 = 64,
    U17IV = 128,
    U800 = 256,
    U850 = 512,
    U900 = 1024,
    U17IX = 2048,
    U1900 = 4096,
    U2600 = 8192,
}
export enum SettingGsmNetworkType {
    ANY = -1,
    UMTS_HSPA = 0,
    GPRS_EDGE = 1,
    PREFER_UMTS_HSPA = 2,
    PREFER_GPRS_EDGE = 3,
    PREFER_4G = 4,
    Gjs_4G = 5,
}
export enum SettingHashFlags {
    ALL = 0,
    NO_SECRETS = 1,
    ONLY_SECRETS = 2,
}
export enum SettingIP4ConfigError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
    NOTALLOWEDFORMETHOD = 3,
}
export enum SettingIP6ConfigError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
    NOTALLOWEDFORMETHOD = 3,
}
export enum SettingIP6ConfigPrivacy {
    UNKNOWN = -1,
    DISABLED = 0,
    PREFER_PUBLIC_ADDR = 1,
    PREFER_TEMP_ADDR = 2,
}
export enum SettingInfinibandError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
}
export enum SettingOlpcMeshError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
}
export enum SettingPPPError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
    REQUIREMPPENOTALLOWED = 3,
}
export enum SettingPPPOEError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
    MISSINGPPPSETTING = 3,
}
export enum SettingSecretFlags {
    NONE = 0,
    AGENT_OWNED = 1,
    NOT_SAVED = 2,
    NOT_REQUIRED = 4,
}
export enum SettingSerialError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
    MISSINGPPPSETTING = 3,
}
export enum SettingTeamError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
}
export enum SettingTeamPortError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
}
export enum SettingVlanError {
    UNKNOWN = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
    INVALIDPARENT = 3,
}
export enum SettingVpnError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
}
export enum SettingWimaxError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
}
export enum SettingWiredError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
}
export enum SettingWirelessError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
    MISSINGSECURITYSETTING = 3,
    CHANNELREQUIRESBAND = 4,
}
export enum SettingWirelessSecurityError {
    UNKNOWNERROR = 0,
    INVALIDPROPERTY = 1,
    MISSINGPROPERTY = 2,
    MISSING8021XSETTING = 3,
    LEAPREQUIRES8021X = 4,
    LEAPREQUIRESUSERNAME = 5,
    SHAREDKEYREQUIRESWEP = 6,
}
export enum State {
    UNKNOWN = 0,
    ASLEEP = 10,
    DISCONNECTED = 20,
    DISCONNECTING = 30,
    CONNECTING = 40,
    CONNECTED_LOCAL = 50,
    CONNECTED_SITE = 60,
    CONNECTED_GLOBAL = 70,
}
export enum UtilsSecurityType {
    INVALID = 0,
    NONE = 1,
    STATIC_WEP = 2,
    LEAP = 3,
    DYNAMIC_WEP = 4,
    WPA_PSK = 5,
    WPA_ENTERPRISE = 6,
    WPA2_PSK = 7,
    WPA2_ENTERPRISE = 8,
}
export enum VPNConnectionState {
    UNKNOWN = 0,
    PREPARE = 1,
    NEED_AUTH = 2,
    CONNECT = 3,
    IP_CONFIG_GET = 4,
    ACTIVATED = 5,
    FAILED = 6,
    DISCONNECTED = 7,
}
export enum VPNConnectionStateReason {
    UNKNOWN = 0,
    NONE = 1,
    USER_DISCONNECTED = 2,
    DEVICE_DISCONNECTED = 3,
    SERVICE_STOPPED = 4,
    IP_CONFIG_INVALID = 5,
    CONNECT_TIMEOUT = 6,
    SERVICE_START_TIMEOUT = 7,
    SERVICE_START_FAILED = 8,
    NO_SECRETS = 9,
    LOGIN_FAILED = 10,
    CONNECTION_REMOVED = 11,
}
export enum VPNPluginFailure {
    LOGIN_FAILED = 0,
    CONNECT_FAILED = 1,
    BAD_IP_CONFIG = 2,
}
export enum VPNServiceState {
    UNKNOWN = 0,
    INIT = 1,
    SHUTDOWN = 2,
    STARTING = 3,
    STARTED = 4,
    STOPPING = 5,
    STOPPED = 6,
}
export enum VlanFlags {
    REORDER_HEADERS = 1,
    GVRP = 2,
    LOOSE_BINDING = 4,
    MVRP = 8,
}
export enum VlanPriorityMap {
    INGRESS_MAP = 0,
    EGRESS_MAP = 1,
}
export enum WepKeyType {
    UNKNOWN = 0,
    KEY = 1,
    PASSPHRASE = 2,
    LAST = 2,
}
export enum Gjs_80211ApFlags {
    NONE = 0,
    PRIVACY = 1,
}
export enum Gjs_80211ApSecurityFlags {
    NONE = 0,
    PAIR_WEP40 = 1,
    PAIR_WEP104 = 2,
    PAIR_TKIP = 4,
    PAIR_CCMP = 8,
    GROUP_WEP40 = 16,
    GROUP_WEP104 = 32,
    GROUP_TKIP = 64,
    GROUP_CCMP = 128,
    KEY_MGMT_PSK = 256,
    KEY_MGMT_802_1X = 512,
}
export enum BluetoothCapabilities {
    NONE = 0,
    DUN = 1,
    NAP = 2,
}
export enum DeviceCapabilities {
    NONE = 0,
    NM_SUPPORTED = 1,
    CARRIER_DETECT = 2,
    IS_SOFTWARE = 4,
}
export enum DeviceModemCapabilities {
    NONE = 0,
    POTS = 1,
    CDMA_EVDO = 2,
    GSM_UMTS = 4,
    LTE = 8,
}
export enum DeviceWifiCapabilities {
    NONE = 0,
    CIPHER_WEP40 = 1,
    CIPHER_WEP104 = 2,
    CIPHER_TKIP = 4,
    CIPHER_CCMP = 8,
    WPA = 16,
    RSN = 32,
    AP = 64,
    ADHOC = 128,
    FREQ_VALID = 256,
    FREQ_2GHZ = 512,
    FREQ_5GHZ = 1024,
}
export class Connection extends GObject.Object {constructor(config?: properties);
path: string;static new_from_hash(hash: GLib.HashTable): Connection;
add_setting(setting: Setting): void;
clear_secrets(): void;
clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn, user_data: object | null): void;
compare(b: Connection, flags: SettingCompareFlags): boolean;
diff(b: Connection, flags: SettingCompareFlags, out_settings: GLib.HashTable): boolean;
dump(): void;
duplicate(): Connection;
for_each_setting_value(func: SettingValueIterFn, user_data: object | null): void;
get_connection_type(): string;
get_id(): string;
get_interface_name(): string;
get_path(): string;
get_setting(setting_type: unknown): Setting;
get_setting_802_1x(): Setting8021x;
get_setting_adsl(): SettingAdsl;
get_setting_bluetooth(): SettingBluetooth;
get_setting_bond(): SettingBond;
get_setting_bridge(): SettingBridge;
get_setting_bridge_port(): SettingBridgePort;
get_setting_by_name(name: string): Setting;
get_setting_cdma(): SettingCdma;
get_setting_connection(): SettingConnection;
get_setting_dcb(): SettingDcb;
get_setting_generic(): SettingGeneric;
get_setting_gsm(): SettingGsm;
get_setting_infiniband(): SettingInfiniband;
get_setting_ip4_config(): SettingIP4Config;
get_setting_ip6_config(): SettingIP6Config;
get_setting_olpc_mesh(): SettingOlpcMesh;
get_setting_ppp(): SettingPPP;
get_setting_pppoe(): SettingPPPOE;
get_setting_serial(): SettingSerial;
get_setting_team(): SettingTeam;
get_setting_team_port(): SettingTeamPort;
get_setting_vlan(): SettingVlan;
get_setting_vpn(): SettingVPN;
get_setting_wimax(): SettingWimax;
get_setting_wired(): SettingWired;
get_setting_wireless(): SettingWireless;
get_setting_wireless_security(): SettingWirelessSecurity;
get_uuid(): string;
get_virtual_device_description(): string;
get_virtual_iface_name(): string;
is_type(type: string): boolean;
need_secrets(): [string, string[] | null];
normalize(parameters: GLib.HashTable | null): [boolean, boolean | null];
remove_setting(setting_type: unknown): void;
replace_settings(new_settings: GLib.HashTable): boolean;
replace_settings_from_connection(new_connection: Connection): boolean;
set_path(path: string): void;
to_hash(flags: SettingHashFlags): GLib.HashTable;
update_secrets(setting_name: string, secrets: GLib.HashTable): boolean;
verify(): boolean;
vfunc_secrets_updated(setting: string): void;
static create_setting(name: string): Setting;
static lookup_setting_type(name: string): unknown;
static lookup_setting_type_by_quark(error_quark: GLib.Quark): unknown;
}
export class Setting extends GObject.Object {constructor(config?: properties);
name: string;static new_from_hash(setting_type: unknown, hash: GLib.HashTable): Setting;
clear_secrets(): void;
clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn, user_data: object | null): void;
compare(b: Setting, flags: SettingCompareFlags): boolean;
diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [boolean, GLib.HashTable];
duplicate(): Setting;
enumerate_values(func: SettingValueIterFn, user_data: object | null): void;
get_name(): string;
get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean;
get_virtual_iface_name(): string;
need_secrets(): string[];
set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean;
to_hash(flags: SettingHashFlags): GLib.HashTable;
to_string(): string;
update_secrets(secrets: GLib.HashTable): boolean;
verify(all_settings: string[]): boolean;
vfunc_clear_secrets_with_flags(pspec: GObject.ParamSpec, func: SettingClearSecretsWithFlagsFn, user_data: object | null): boolean;
vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean;
vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean;
vfunc_get_virtual_iface_name(): string;
vfunc_need_secrets(): string[];
vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean;
vfunc_update_one_secret(key: string, value: GObject.Value): number;
vfunc_verify(all_settings: string[]): number;
}
export class Setting8021x extends Setting {constructor(config?: properties);
altsubject_matches: unknown;
anonymous_identity: string;
ca_cert: unknown;
ca_path: string;
client_cert: unknown;
eap: unknown;
identity: string;
pac_file: string;
password: string;
password_flags: number;
password_raw: unknown;
password_raw_flags: number;
phase1_fast_provisioning: string;
phase1_peaplabel: string;
phase1_peapver: string;
phase2_altsubject_matches: unknown;
phase2_auth: string;
phase2_autheap: string;
phase2_ca_cert: unknown;
phase2_ca_path: string;
phase2_client_cert: unknown;
phase2_private_key: unknown;
phase2_private_key_password: string;
phase2_private_key_password_flags: number;
phase2_subject_match: string;
pin: string;
pin_flags: number;
private_key: unknown;
private_key_password: string;
private_key_password_flags: number;
subject_match: string;
system_ca_certs: boolean;
add_altsubject_match(altsubject_match: string): boolean;
add_eap_method(eap: string): boolean;
add_phase2_altsubject_match(phase2_altsubject_match: string): boolean;
clear_altsubject_matches(): void;
clear_eap_methods(): void;
clear_phase2_altsubject_matches(): void;
get_altsubject_match(i: number): string;
get_anonymous_identity(): string;
get_ca_cert_blob(): number[];
get_ca_cert_path(): string;
get_ca_cert_scheme(): Setting8021xCKScheme;
get_ca_path(): string;
get_client_cert_blob(): number[];
get_client_cert_path(): string;
get_client_cert_scheme(): Setting8021xCKScheme;
get_eap_method(i: number): string;
get_identity(): string;
get_num_altsubject_matches(): number;
get_num_eap_methods(): number;
get_num_phase2_altsubject_matches(): number;
get_pac_file(): string;
get_password(): string;
get_password_flags(): SettingSecretFlags;
get_password_raw(): number[];
get_password_raw_flags(): SettingSecretFlags;
get_phase1_fast_provisioning(): string;
get_phase1_peaplabel(): string;
get_phase1_peapver(): string;
get_phase2_altsubject_match(i: number): string;
get_phase2_auth(): string;
get_phase2_autheap(): string;
get_phase2_ca_cert_blob(): number[];
get_phase2_ca_cert_path(): string;
get_phase2_ca_cert_scheme(): Setting8021xCKScheme;
get_phase2_ca_path(): string;
get_phase2_client_cert_blob(): number[];
get_phase2_client_cert_path(): string;
get_phase2_client_cert_scheme(): Setting8021xCKScheme;
get_phase2_private_key_blob(): number[];
get_phase2_private_key_format(): Setting8021xCKFormat;
get_phase2_private_key_password(): string;
get_phase2_private_key_password_flags(): SettingSecretFlags;
get_phase2_private_key_path(): string;
get_phase2_private_key_scheme(): Setting8021xCKScheme;
get_phase2_subject_match(): string;
get_pin(): string;
get_pin_flags(): SettingSecretFlags;
get_private_key_blob(): number[];
get_private_key_format(): Setting8021xCKFormat;
get_private_key_password(): string;
get_private_key_password_flags(): SettingSecretFlags;
get_private_key_path(): string;
get_private_key_scheme(): Setting8021xCKScheme;
get_subject_match(): string;
get_system_ca_certs(): boolean;
remove_altsubject_match(i: number): void;
remove_altsubject_match_by_value(altsubject_match: string): boolean;
remove_eap_method(i: number): void;
remove_eap_method_by_value(eap: string): boolean;
remove_phase2_altsubject_match(i: number): void;
remove_phase2_altsubject_match_by_value(phase2_altsubject_match: string): boolean;
set_ca_cert(cert_path: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
set_client_cert(cert_path: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
set_phase2_ca_cert(cert_path: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
set_phase2_client_cert(cert_path: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
set_phase2_private_key(key_path: string, password: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
set_private_key(key_path: string, password: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
}
export class SettingAdsl extends Setting {constructor(config?: properties);
encapsulation: string;
password: string;
password_flags: number;
protocol: string;
username: string;
vci: number;
vpi: number;
get_encapsulation(): string;
get_password(): string;
get_password_flags(): SettingSecretFlags;
get_protocol(): string;
get_username(): string;
get_vci(): number;
get_vpi(): number;
}
export class SettingBluetooth extends Setting {constructor(config?: properties);
bdaddr: unknown;
type: string;
get_bdaddr(): number[];
get_connection_type(): string;
}
export class SettingBond extends Setting {constructor(config?: properties);
interface_name: string;
options: unknown;
add_option(name: string, value: string): boolean;
get_interface_name(): string;
get_num_options(): number;
get_option(idx: number): [boolean, string,string];
get_option_by_name(name: string): string;
get_option_default(name: string): string;
get_valid_options(): string[];
remove_option(name: string): boolean;
static validate_option(name: string, value: string): boolean;
}
export class SettingBridge extends Setting {constructor(config?: properties);
ageing_time: number;
forward_delay: number;
hello_time: number;
interface_name: string;
mac_address: unknown;
max_age: number;
priority: number;
stp: boolean;
get_ageing_time(): number;
get_forward_delay(): number;
get_hello_time(): number;
get_interface_name(): string;
get_mac_address(): number[];
get_max_age(): number;
get_priority(): number;
get_stp(): boolean;
}
export class SettingBridgePort extends Setting {constructor(config?: properties);
hairpin_mode: boolean;
path_cost: number;
priority: number;
get_hairpin_mode(): boolean;
get_path_cost(): number;
get_priority(): number;
}
export class SettingCdma extends Setting {constructor(config?: properties);
number: string;
password: string;
password_flags: number;
username: string;
get_number(): string;
get_password(): string;
get_password_flags(): SettingSecretFlags;
get_username(): string;
}
export class SettingConnection extends Setting {constructor(config?: properties);
autoconnect: boolean;
gateway_ping_timeout: number;
id: string;
interface_name: string;
master: string;
permissions: unknown;
read_only: boolean;
secondaries: unknown;
slave_type: string;
timestamp: number;
type: string;
uuid: string;
zone: string;
add_permission(ptype: string, pitem: string, detail: string | null): boolean;
add_secondary(sec_uuid: string): boolean;
get_autoconnect(): boolean;
get_connection_type(): string;
get_gateway_ping_timeout(): number;
get_id(): string;
get_interface_name(): string;
get_master(): string;
get_num_permissions(): number;
get_num_secondaries(): number;
get_permission(idx: number, out_ptype: string, out_pitem: string, out_detail: string): boolean;
get_read_only(): boolean;
get_secondary(idx: number): string;
get_slave_type(): string;
get_timestamp(): number;
get_uuid(): string;
get_zone(): string;
is_slave_type(type: string): boolean;
permissions_user_allowed(uname: string): boolean;
remove_permission(idx: number): void;
remove_permission_by_value(ptype: string, pitem: string, detail: string | null): boolean;
remove_secondary(idx: number): void;
remove_secondary_by_value(sec_uuid: string): boolean;
}
export class SettingDcb extends Setting {constructor(config?: properties);
app_fcoe_flags: number;
app_fcoe_mode: string;
app_fcoe_priority: number;
app_fip_flags: number;
app_fip_priority: number;
app_iscsi_flags: number;
app_iscsi_priority: number;
priority_bandwidth: unknown;
priority_flow_control: unknown;
priority_flow_control_flags: number;
priority_group_bandwidth: unknown;
priority_group_flags: number;
priority_group_id: unknown;
priority_strict_bandwidth: unknown;
priority_traffic_class: unknown;
get_app_fcoe_flags(): SettingDcbFlags;
get_app_fcoe_mode(): string;
get_app_fcoe_priority(): number;
get_app_fip_flags(): SettingDcbFlags;
get_app_fip_priority(): number;
get_app_iscsi_flags(): SettingDcbFlags;
get_app_iscsi_priority(): number;
get_priority_bandwidth(user_priority: number): number;
get_priority_flow_control(user_priority: number): boolean;
get_priority_flow_control_flags(): SettingDcbFlags;
get_priority_group_bandwidth(group_id: number): number;
get_priority_group_flags(): SettingDcbFlags;
get_priority_group_id(user_priority: number): number;
get_priority_strict_bandwidth(user_priority: number): boolean;
get_priority_traffic_class(user_priority: number): number;
set_priority_bandwidth(user_priority: number, bandwidth_percent: number): void;
set_priority_flow_control(user_priority: number, enabled: boolean): void;
set_priority_group_bandwidth(group_id: number, bandwidth_percent: number): void;
set_priority_group_id(user_priority: number, group_id: number): void;
set_priority_strict_bandwidth(user_priority: number, strict: boolean): void;
set_priority_traffic_class(user_priority: number, traffic_class: number): void;
}
export class SettingGeneric extends Setting {constructor(config?: properties);
}
export class SettingGsm extends Setting {constructor(config?: properties);
allowed_bands: number;
apn: string;
home_only: boolean;
network_id: string;
network_type: number;
number: string;
password: string;
password_flags: number;
pin: string;
pin_flags: number;
username: string;
get_allowed_bands(): number;
get_apn(): string;
get_home_only(): boolean;
get_network_id(): string;
get_network_type(): number;
get_number(): string;
get_password(): string;
get_password_flags(): SettingSecretFlags;
get_pin(): string;
get_pin_flags(): SettingSecretFlags;
get_username(): string;
}
export class SettingIP4Config extends Setting {constructor(config?: properties);
addresses: unknown;
dhcp_client_id: string;
dhcp_hostname: string;
dhcp_send_hostname: boolean;
dhcp_timeout: number;
dns: unknown;
dns_search: unknown;
ignore_auto_dns: boolean;
ignore_auto_routes: boolean;
may_fail: boolean;
method: string;
never_default: boolean;
route_metric: number;
routes: unknown;
add_address(address: IP4Address): boolean;
add_dns(dns: number): boolean;
add_dns_search(dns_search: string): boolean;
add_route(route: IP4Route): boolean;
clear_addresses(): void;
clear_dns(): void;
clear_dns_searches(): void;
clear_routes(): void;
get_address(i: number): IP4Address;
get_dhcp_client_id(): string;
get_dhcp_hostname(): string;
get_dhcp_send_hostname(): boolean;
get_dhcp_timeout(): number;
get_dns(i: number): number;
get_dns_search(i: number): string;
get_ignore_auto_dns(): boolean;
get_ignore_auto_routes(): boolean;
get_may_fail(): boolean;
get_method(): string;
get_never_default(): boolean;
get_num_addresses(): number;
get_num_dns(): number;
get_num_dns_searches(): number;
get_num_routes(): number;
get_route(i: number): IP4Route;
get_route_metric(): number;
remove_address(i: number): void;
remove_address_by_value(address: IP4Address): boolean;
remove_dns(i: number): void;
remove_dns_by_value(dns: number): boolean;
remove_dns_search(i: number): void;
remove_dns_search_by_value(dns_search: string): boolean;
remove_route(i: number): void;
remove_route_by_value(route: IP4Route): boolean;
}
export class SettingIP6Config extends Setting {constructor(config?: properties);
addresses: unknown;
dhcp_hostname: string;
dns: unknown;
dns_search: unknown;
ignore_auto_dns: boolean;
ignore_auto_routes: boolean;
ip6_privacy: number;
may_fail: boolean;
method: string;
never_default: boolean;
route_metric: number;
routes: unknown;
add_address(address: IP6Address): boolean;
add_dns(dns: object | null): boolean;
add_dns_search(dns_search: string): boolean;
add_route(route: IP6Route): boolean;
clear_addresses(): void;
clear_dns(): void;
clear_dns_searches(): void;
clear_routes(): void;
get_address(i: number): IP6Address;
get_dhcp_hostname(): string;
get_dns(i: number): object | null;
get_dns_search(i: number): string;
get_ignore_auto_dns(): boolean;
get_ignore_auto_routes(): boolean;
get_ip6_privacy(): SettingIP6ConfigPrivacy;
get_may_fail(): boolean;
get_method(): string;
get_never_default(): boolean;
get_num_addresses(): number;
get_num_dns(): number;
get_num_dns_searches(): number;
get_num_routes(): number;
get_route(i: number): IP6Route;
get_route_metric(): number;
remove_address(i: number): void;
remove_address_by_value(address: IP6Address): boolean;
remove_dns(i: number): void;
remove_dns_by_value(dns: object | null): boolean;
remove_dns_search(i: number): void;
remove_dns_search_by_value(dns_search: string): boolean;
remove_route(i: number): void;
remove_route_by_value(route: IP6Route): boolean;
}
export class SettingInfiniband extends Setting {constructor(config?: properties);
mac_address: unknown;
mtu: number;
p_key: number;
transport_mode: string;
get_mac_address(): number[];
get_mtu(): number;
get_p_key(): number;
get_parent(): string;
get_transport_mode(): string;
}
export class SettingOlpcMesh extends Setting {constructor(config?: properties);
channel: number;
dhcp_anycast_address: unknown;
ssid: unknown;
get_channel(): number;
get_dhcp_anycast_address(): number[];
get_ssid(): number[];
}
export class SettingPPP extends Setting {constructor(config?: properties);
baud: number;
crtscts: boolean;
lcp_echo_failure: number;
lcp_echo_interval: number;
mppe_stateful: boolean;
mru: number;
mtu: number;
no_vj_comp: boolean;
noauth: boolean;
nobsdcomp: boolean;
nodeflate: boolean;
refuse_chap: boolean;
refuse_eap: boolean;
refuse_mschap: boolean;
refuse_mschapv2: boolean;
refuse_pap: boolean;
require_mppe: boolean;
require_mppe_128: boolean;
get_baud(): number;
get_crtscts(): boolean;
get_lcp_echo_failure(): number;
get_lcp_echo_interval(): number;
get_mppe_stateful(): boolean;
get_mru(): number;
get_mtu(): number;
get_no_vj_comp(): boolean;
get_noauth(): boolean;
get_nobsdcomp(): boolean;
get_nodeflate(): boolean;
get_refuse_chap(): boolean;
get_refuse_eap(): boolean;
get_refuse_mschap(): boolean;
get_refuse_mschapv2(): boolean;
get_refuse_pap(): boolean;
get_require_mppe(): boolean;
get_require_mppe_128(): boolean;
}
export class SettingPPPOE extends Setting {constructor(config?: properties);
password: string;
password_flags: number;
service: string;
username: string;
get_password(): string;
get_password_flags(): SettingSecretFlags;
get_service(): string;
get_username(): string;
}
export class SettingSerial extends Setting {constructor(config?: properties);
baud: number;
bits: number;
parity: number;
send_delay: number;
stopbits: number;
get_baud(): number;
get_bits(): number;
get_parity(): number;
get_send_delay(): number;
get_stopbits(): number;
}
export class SettingTeam extends Setting {constructor(config?: properties);
config: string;
interface_name: string;
get_config(): string;
get_interface_name(): string;
}
export class SettingTeamPort extends Setting {constructor(config?: properties);
config: string;
get_config(): string;
}
export class SettingVPN extends Setting {constructor(config?: properties);
data: unknown;
persistent: boolean;
secrets: unknown;
service_type: string;
user_name: string;
add_data_item(key: string, item: string): void;
add_secret(key: string, secret: string): void;
foreach_data_item(func: VPNIterFunc, user_data: object | null): void;
foreach_secret(func: VPNIterFunc, user_data: object | null): void;
get_data_item(key: string): string;
get_num_data_items(): number;
get_num_secrets(): number;
get_persistent(): boolean;
get_secret(key: string): string;
get_service_type(): string;
get_user_name(): string;
remove_data_item(key: string): boolean;
remove_secret(key: string): boolean;
}
export class SettingVlan extends Setting {constructor(config?: properties);
egress_priority_map: unknown;
flags: number;
id: number;
ingress_priority_map: unknown;
interface_name: string;
add_priority(map: VlanPriorityMap, from: number, to: number): boolean;
add_priority_str(map: VlanPriorityMap, str: string): boolean;
clear_priorities(map: VlanPriorityMap): void;
get_flags(): number;
get_id(): number;
get_interface_name(): string;
get_num_priorities(map: VlanPriorityMap): number;
get_parent(): string;
get_priority(map: VlanPriorityMap, idx: number): [boolean, number,number];
remove_priority(map: VlanPriorityMap, idx: number): void;
remove_priority_by_value(map: VlanPriorityMap, from: number, to: number): boolean;
remove_priority_str_by_value(map: VlanPriorityMap, str: string): boolean;
}
export class SettingWimax extends Setting {constructor(config?: properties);
mac_address: unknown;
network_name: string;
get_mac_address(): number[];
get_network_name(): string;
}
export class SettingWired extends Setting {constructor(config?: properties);
auto_negotiate: boolean;
cloned_mac_address: unknown;
duplex: string;
mac_address: unknown;
mac_address_blacklist: unknown;
mtu: number;
port: string;
s390_nettype: string;
s390_options: unknown;
s390_subchannels: unknown;
speed: number;
add_mac_blacklist_item(mac: string): boolean;
add_s390_option(key: string, value: string): boolean;
clear_mac_blacklist_items(): void;
get_auto_negotiate(): boolean;
get_cloned_mac_address(): number[];
get_duplex(): string;
get_mac_address(): number[];
get_mac_address_blacklist(): string[];
get_mac_blacklist_item(idx: number): string;
get_mtu(): number;
get_num_mac_blacklist_items(): number;
get_num_s390_options(): number;
get_port(): string;
get_s390_nettype(): string;
get_s390_option(idx: number): [boolean, string,string];
get_s390_option_by_key(key: string): string;
get_s390_subchannels(): string[];
get_speed(): number;
get_valid_s390_options(): string[];
remove_mac_blacklist_item(idx: number): void;
remove_mac_blacklist_item_by_value(mac: string): boolean;
remove_s390_option(key: string): boolean;
}
export class SettingWireless extends Setting {constructor(config?: properties);
band: string;
bssid: unknown;
channel: number;
cloned_mac_address: unknown;
hidden: boolean;
mac_address: unknown;
mac_address_blacklist: unknown;
mode: string;
mtu: number;
powersave: number;
rate: number;
security: string;
seen_bssids: unknown;
ssid: unknown;
tx_power: number;
add_mac_blacklist_item(mac: string): boolean;
add_seen_bssid(bssid: string): boolean;
ap_security_compatible(s_wireless_sec: SettingWirelessSecurity, ap_flags: Gjs_80211ApFlags, ap_wpa: Gjs_80211ApSecurityFlags, ap_rsn: Gjs_80211ApSecurityFlags, ap_mode: Gjs_80211Mode): boolean;
clear_mac_blacklist_items(): void;
get_band(): string;
get_bssid(): number[];
get_channel(): number;
get_cloned_mac_address(): number[];
get_hidden(): boolean;
get_mac_address(): number[];
get_mac_address_blacklist(): string[];
get_mac_blacklist_item(idx: number): string;
get_mode(): string;
get_mtu(): number;
get_num_mac_blacklist_items(): number;
get_num_seen_bssids(): number;
get_powersave(): number;
get_rate(): number;
get_security(): string;
get_seen_bssid(i: number): string;
get_ssid(): number[];
get_tx_power(): number;
remove_mac_blacklist_item(idx: number): void;
remove_mac_blacklist_item_by_value(mac: string): boolean;
}
export class SettingWirelessSecurity extends Setting {constructor(config?: properties);
auth_alg: string;
group: unknown;
key_mgmt: string;
leap_password: string;
leap_password_flags: number;
leap_username: string;
pairwise: unknown;
proto: unknown;
psk: string;
psk_flags: number;
wep_key_flags: number;
wep_key_type: number;
wep_key0: string;
wep_key1: string;
wep_key2: string;
wep_key3: string;
wep_tx_keyidx: number;
add_group(group: string): boolean;
add_pairwise(pairwise: string): boolean;
add_proto(proto: string): boolean;
clear_groups(): void;
clear_pairwise(): void;
clear_protos(): void;
get_auth_alg(): string;
get_group(i: number): string;
get_key_mgmt(): string;
get_leap_password(): string;
get_leap_password_flags(): SettingSecretFlags;
get_leap_username(): string;
get_num_groups(): number;
get_num_pairwise(): number;
get_num_protos(): number;
get_pairwise(i: number): string;
get_proto(i: number): string;
get_psk(): string;
get_psk_flags(): SettingSecretFlags;
get_wep_key(idx: number): string;
get_wep_key_flags(): SettingSecretFlags;
get_wep_key_type(): WepKeyType;
get_wep_tx_keyidx(): number;
remove_group(i: number): void;
remove_group_by_value(group: string): boolean;
remove_pairwise(i: number): void;
remove_pairwise_by_value(pairwise: string): boolean;
remove_proto(i: number): void;
remove_proto_by_value(proto: string): boolean;
set_wep_key(idx: number, key: string): void;
}
export class ConnectionClass  {constructor(config?: properties);
readonly secrets_updated: unknown;
}
export class IP4Address  {constructor(config?: properties);
compare(other: IP4Address): boolean;
dup(): IP4Address;
get_address(): number;
get_gateway(): number;
get_prefix(): number;
ref(): void;
set_address(addr: number): void;
set_gateway(gateway: number): void;
set_prefix(prefix: number): void;
unref(): void;
}
export class IP4Route  {constructor(config?: properties);
compare(other: IP4Route): boolean;
dup(): IP4Route;
get_dest(): number;
get_metric(): number;
get_next_hop(): number;
get_prefix(): number;
ref(): void;
set_dest(dest: number): void;
set_metric(metric: number): void;
set_next_hop(next_hop: number): void;
set_prefix(prefix: number): void;
unref(): void;
}
export class IP6Address  {constructor(config?: properties);
compare(other: IP6Address): boolean;
dup(): IP6Address;
get_address(): number[];
get_gateway(): number[];
get_prefix(): number;
ref(): void;
set_address(addr: object | null): void;
set_gateway(gateway: object | null): void;
set_prefix(prefix: number): void;
unref(): void;
}
export class IP6Route  {constructor(config?: properties);
compare(other: IP6Route): boolean;
dup(): IP6Route;
get_dest(): number[];
get_metric(): number;
get_next_hop(): number[];
get_prefix(): number;
ref(): void;
set_dest(dest: object | null): void;
set_metric(metric: number): void;
set_next_hop(next_hop: object | null): void;
set_prefix(prefix: number): void;
unref(): void;
}
export class Setting8021xClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingAdslClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingBluetoothClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingBondClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingBridgeClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingBridgePortClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingCdmaClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingClass  {constructor(config?: properties);
readonly verify: unknown;
readonly need_secrets: unknown;
readonly update_one_secret: unknown;
readonly get_secret_flags: unknown;
readonly set_secret_flags: unknown;
readonly compare_property: unknown;
readonly clear_secrets_with_flags: unknown;
readonly get_virtual_iface_name: unknown;
readonly _reserved1: unknown;
}
export class SettingConnectionClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingDcbClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingGenericClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingGsmClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingIP4ConfigClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingIP6ConfigClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingInfinibandClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingOlpcMeshClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingPPPClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingPPPOEClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingSerialClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingTeamClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingTeamPortClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingVPNClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingVlanClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingWimaxClass  {constructor(config?: properties);
}
export class SettingWiredClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingWirelessClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}
export class SettingWirelessSecurityClass  {constructor(config?: properties);
readonly _reserved1: unknown;
readonly _reserved2: unknown;
readonly _reserved3: unknown;
readonly _reserved4: unknown;
}