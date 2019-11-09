
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as NM from "nm";
/**
 * nm.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type SecretAgentOldDeleteSecretsFunc = (agent: SecretAgentOld, connection: Connection, error: GLib.Error, user_data: object | null) => void;
export type SecretAgentOldGetSecretsFunc = (agent: SecretAgentOld, connection: Connection, secrets: GLib.Variant, error: GLib.Error, user_data: object | null) => void;
export type SecretAgentOldSaveSecretsFunc = (agent: SecretAgentOld, connection: Connection, error: GLib.Error, user_data: object | null) => void;
export type SettingClearSecretsWithFlagsFn = (setting: Setting, secret: string, flags: SettingSecretFlags, user_data: object | null) => boolean;
export type SettingValueIterFn = (setting: Setting, key: string, value: GObject.Value, flags: GObject.ParamFlags, user_data: object | null) => void;
export type UtilsCheckFilePredicate = (filename: string, stat: object | null, user_data: object | null) => boolean;
export type UtilsFileSearchInPathsPredicate = (filename: string, user_data: object | null) => boolean;
export type VpnIterFunc = (key: string, value: string, user_data: object | null) => void;
export type _ConnectionForEachSecretFunc = (flags: SettingSecretFlags, user_data: object | null) => boolean;
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
export const ACTIVE_CONNECTION_SPECIFIC_OBJECT_PATH: string;
export const ACTIVE_CONNECTION_STATE: string;
export const ACTIVE_CONNECTION_STATE_FLAGS: string;
export const ACTIVE_CONNECTION_TYPE: string;
export const ACTIVE_CONNECTION_UUID: string;
export const ACTIVE_CONNECTION_VPN: string;
export const BRIDGE_VLAN_VID_MAX: number;
export const BRIDGE_VLAN_VID_MIN: number;
export const CHECKPOINT_CREATED: string;
export const CHECKPOINT_DEVICES: string;
export const CHECKPOINT_ROLLBACK_TIMEOUT: string;
export const CLIENT_ACTIVATING_CONNECTION: string;
export const CLIENT_ACTIVE_CONNECTIONS: string;
export const CLIENT_ACTIVE_CONNECTION_ADDED: string;
export const CLIENT_ACTIVE_CONNECTION_REMOVED: string;
export const CLIENT_ALL_DEVICES: string;
export const CLIENT_ANY_DEVICE_ADDED: string;
export const CLIENT_ANY_DEVICE_REMOVED: string;
export const CLIENT_CAN_MODIFY: string;
export const CLIENT_CONNECTIONS: string;
export const CLIENT_CONNECTION_ADDED: string;
export const CLIENT_CONNECTION_REMOVED: string;
export const CLIENT_CONNECTIVITY: string;
export const CLIENT_CONNECTIVITY_CHECK_AVAILABLE: string;
export const CLIENT_CONNECTIVITY_CHECK_ENABLED: string;
export const CLIENT_DEVICES: string;
export const CLIENT_DEVICE_ADDED: string;
export const CLIENT_DEVICE_REMOVED: string;
export const CLIENT_DNS_CONFIGURATION: string;
export const CLIENT_DNS_MODE: string;
export const CLIENT_DNS_RC_MANAGER: string;
export const CLIENT_HOSTNAME: string;
export const CLIENT_METERED: string;
export const CLIENT_NETWORKING_ENABLED: string;
export const CLIENT_NM_RUNNING: string;
export const CLIENT_PERMISSION_CHANGED: string;
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
export const CONNECTION_CHANGED: string;
export const CONNECTION_NORMALIZE_PARAM_IP6_CONFIG_METHOD: string;
export const CONNECTION_SECRETS_CLEARED: string;
export const CONNECTION_SECRETS_UPDATED: string;
export const DBUS_INTERFACE: string;
export const DBUS_INTERFACE_DNS_MANAGER: string;
export const DBUS_INTERFACE_SETTINGS: string;
export const DBUS_INTERFACE_SETTINGS_CONNECTION: string;
export const DBUS_INTERFACE_SETTINGS_CONNECTION_SECRETS: string;
export const DBUS_INTERFACE_VPN: string;
export const DBUS_INTERFACE_VPN_CONNECTION: string;
export const DBUS_INVALID_VPN_CONNECTION: string;
export const DBUS_NO_ACTIVE_VPN_CONNECTION: string;
export const DBUS_NO_VPN_CONNECTIONS: string;
export const DBUS_PATH: string;
export const DBUS_PATH_AGENT_MANAGER: string;
export const DBUS_PATH_DNS_MANAGER: string;
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
export const DEVICE_6LOWPAN_HW_ADDRESS: string;
export const DEVICE_6LOWPAN_PARENT: string;
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
export const DEVICE_DUMMY_HW_ADDRESS: string;
export const DEVICE_ETHERNET_CARRIER: string;
export const DEVICE_ETHERNET_HW_ADDRESS: string;
export const DEVICE_ETHERNET_PERMANENT_HW_ADDRESS: string;
export const DEVICE_ETHERNET_S390_SUBCHANNELS: string;
export const DEVICE_ETHERNET_SPEED: string;
export const DEVICE_FIRMWARE_MISSING: string;
export const DEVICE_FIRMWARE_VERSION: string;
export const DEVICE_GENERIC_HW_ADDRESS: string;
export const DEVICE_GENERIC_TYPE_DESCRIPTION: string;
export const DEVICE_INFINIBAND_CARRIER: string;
export const DEVICE_INFINIBAND_HW_ADDRESS: string;
export const DEVICE_INTERFACE: string;
export const DEVICE_IP4_CONFIG: string;
export const DEVICE_IP4_CONNECTIVITY: string;
export const DEVICE_IP6_CONFIG: string;
export const DEVICE_IP6_CONNECTIVITY: string;
export const DEVICE_IP_INTERFACE: string;
export const DEVICE_IP_TUNNEL_ENCAPSULATION_LIMIT: string;
export const DEVICE_IP_TUNNEL_FLAGS: string;
export const DEVICE_IP_TUNNEL_FLOW_LABEL: string;
export const DEVICE_IP_TUNNEL_INPUT_KEY: string;
export const DEVICE_IP_TUNNEL_LOCAL: string;
export const DEVICE_IP_TUNNEL_MODE: string;
export const DEVICE_IP_TUNNEL_OUTPUT_KEY: string;
export const DEVICE_IP_TUNNEL_PARENT: string;
export const DEVICE_IP_TUNNEL_PATH_MTU_DISCOVERY: string;
export const DEVICE_IP_TUNNEL_REMOTE: string;
export const DEVICE_IP_TUNNEL_TOS: string;
export const DEVICE_IP_TUNNEL_TTL: string;
export const DEVICE_LLDP_NEIGHBORS: string;
export const DEVICE_MACSEC_CIPHER_SUITE: string;
export const DEVICE_MACSEC_ENCODING_SA: string;
export const DEVICE_MACSEC_ENCRYPT: string;
export const DEVICE_MACSEC_ES: string;
export const DEVICE_MACSEC_HW_ADDRESS: string;
export const DEVICE_MACSEC_ICV_LENGTH: string;
export const DEVICE_MACSEC_INCLUDE_SCI: string;
export const DEVICE_MACSEC_PARENT: string;
export const DEVICE_MACSEC_PROTECT: string;
export const DEVICE_MACSEC_REPLAY_PROTECT: string;
export const DEVICE_MACSEC_SCB: string;
export const DEVICE_MACSEC_SCI: string;
export const DEVICE_MACSEC_VALIDATION: string;
export const DEVICE_MACSEC_WINDOW: string;
export const DEVICE_MACVLAN_HW_ADDRESS: string;
export const DEVICE_MACVLAN_MODE: string;
export const DEVICE_MACVLAN_NO_PROMISC: string;
export const DEVICE_MACVLAN_PARENT: string;
export const DEVICE_MACVLAN_TAP: string;
export const DEVICE_MANAGED: string;
export const DEVICE_METERED: string;
export const DEVICE_MODEM_APN: string;
export const DEVICE_MODEM_CURRENT_CAPABILITIES: string;
export const DEVICE_MODEM_DEVICE_ID: string;
export const DEVICE_MODEM_MODEM_CAPABILITIES: string;
export const DEVICE_MODEM_OPERATOR_CODE: string;
export const DEVICE_MTU: string;
export const DEVICE_NM_PLUGIN_MISSING: string;
export const DEVICE_OLPC_MESH_ACTIVE_CHANNEL: string;
export const DEVICE_OLPC_MESH_COMPANION: string;
export const DEVICE_OLPC_MESH_HW_ADDRESS: string;
export const DEVICE_OVS_BRIDGE_SLAVES: string;
export const DEVICE_OVS_PORT_SLAVES: string;
export const DEVICE_PHYSICAL_PORT_ID: string;
export const DEVICE_PRODUCT: string;
export const DEVICE_REAL: string;
export const DEVICE_STATE: string;
export const DEVICE_STATE_REASON: string;
export const DEVICE_TEAM_CARRIER: string;
export const DEVICE_TEAM_CONFIG: string;
export const DEVICE_TEAM_HW_ADDRESS: string;
export const DEVICE_TEAM_SLAVES: string;
export const DEVICE_TUN_GROUP: string;
export const DEVICE_TUN_HW_ADDRESS: string;
export const DEVICE_TUN_MODE: string;
export const DEVICE_TUN_MULTI_QUEUE: string;
export const DEVICE_TUN_NO_PI: string;
export const DEVICE_TUN_OWNER: string;
export const DEVICE_TUN_VNET_HDR: string;
export const DEVICE_UDI: string;
export const DEVICE_VENDOR: string;
export const DEVICE_VLAN_CARRIER: string;
export const DEVICE_VLAN_HW_ADDRESS: string;
export const DEVICE_VLAN_PARENT: string;
export const DEVICE_VLAN_VLAN_ID: string;
export const DEVICE_VXLAN_AGEING: string;
export const DEVICE_VXLAN_CARRIER: string;
export const DEVICE_VXLAN_DST_PORT: string;
export const DEVICE_VXLAN_GROUP: string;
export const DEVICE_VXLAN_HW_ADDRESS: string;
export const DEVICE_VXLAN_ID: string;
export const DEVICE_VXLAN_L2MISS: string;
export const DEVICE_VXLAN_L3MISS: string;
export const DEVICE_VXLAN_LEARNING: string;
export const DEVICE_VXLAN_LIMIT: string;
export const DEVICE_VXLAN_LOCAL: string;
export const DEVICE_VXLAN_PARENT: string;
export const DEVICE_VXLAN_PROXY: string;
export const DEVICE_VXLAN_RSC: string;
export const DEVICE_VXLAN_SRC_PORT_MAX: string;
export const DEVICE_VXLAN_SRC_PORT_MIN: string;
export const DEVICE_VXLAN_TOS: string;
export const DEVICE_VXLAN_TTL: string;
export const DEVICE_WIFI_ACCESS_POINTS: string;
export const DEVICE_WIFI_ACTIVE_ACCESS_POINT: string;
export const DEVICE_WIFI_BITRATE: string;
export const DEVICE_WIFI_CAPABILITIES: string;
export const DEVICE_WIFI_HW_ADDRESS: string;
export const DEVICE_WIFI_LAST_SCAN: string;
export const DEVICE_WIFI_MODE: string;
export const DEVICE_WIFI_P2P_HW_ADDRESS: string;
export const DEVICE_WIFI_P2P_PEERS: string;
export const DEVICE_WIFI_P2P_WFDIES: string;
export const DEVICE_WIFI_PERMANENT_HW_ADDRESS: string;
export const DEVICE_WIMAX_ACTIVE_NSP: string;
export const DEVICE_WIMAX_BSID: string;
export const DEVICE_WIMAX_CENTER_FREQUENCY: string;
export const DEVICE_WIMAX_CINR: string;
export const DEVICE_WIMAX_HW_ADDRESS: string;
export const DEVICE_WIMAX_NSPS: string;
export const DEVICE_WIMAX_RSSI: string;
export const DEVICE_WIMAX_TX_POWER: string;
export const DEVICE_WIREGUARD_FWMARK: string;
export const DEVICE_WIREGUARD_LISTEN_PORT: string;
export const DEVICE_WIREGUARD_PUBLIC_KEY: string;
export const DEVICE_WPAN_HW_ADDRESS: string;
export const DHCP_CONFIG_FAMILY: string;
export const DHCP_CONFIG_OPTIONS: string;
export const ETHTOOL_OPTNAME_FEATURE_ESP_HW_OFFLOAD: string;
export const ETHTOOL_OPTNAME_FEATURE_ESP_TX_CSUM_HW_OFFLOAD: string;
export const ETHTOOL_OPTNAME_FEATURE_FCOE_MTU: string;
export const ETHTOOL_OPTNAME_FEATURE_GRO: string;
export const ETHTOOL_OPTNAME_FEATURE_GSO: string;
export const ETHTOOL_OPTNAME_FEATURE_HIGHDMA: string;
export const ETHTOOL_OPTNAME_FEATURE_HW_TC_OFFLOAD: string;
export const ETHTOOL_OPTNAME_FEATURE_L2_FWD_OFFLOAD: string;
export const ETHTOOL_OPTNAME_FEATURE_LOOPBACK: string;
export const ETHTOOL_OPTNAME_FEATURE_LRO: string;
export const ETHTOOL_OPTNAME_FEATURE_NTUPLE: string;
export const ETHTOOL_OPTNAME_FEATURE_RX: string;
export const ETHTOOL_OPTNAME_FEATURE_RXHASH: string;
export const ETHTOOL_OPTNAME_FEATURE_RXVLAN: string;
export const ETHTOOL_OPTNAME_FEATURE_RX_ALL: string;
export const ETHTOOL_OPTNAME_FEATURE_RX_FCS: string;
export const ETHTOOL_OPTNAME_FEATURE_RX_GRO_HW: string;
export const ETHTOOL_OPTNAME_FEATURE_RX_UDP_TUNNEL_PORT_OFFLOAD: string;
export const ETHTOOL_OPTNAME_FEATURE_RX_VLAN_FILTER: string;
export const ETHTOOL_OPTNAME_FEATURE_RX_VLAN_STAG_FILTER: string;
export const ETHTOOL_OPTNAME_FEATURE_RX_VLAN_STAG_HW_PARSE: string;
export const ETHTOOL_OPTNAME_FEATURE_SG: string;
export const ETHTOOL_OPTNAME_FEATURE_TLS_HW_RECORD: string;
export const ETHTOOL_OPTNAME_FEATURE_TLS_HW_TX_OFFLOAD: string;
export const ETHTOOL_OPTNAME_FEATURE_TSO: string;
export const ETHTOOL_OPTNAME_FEATURE_TX: string;
export const ETHTOOL_OPTNAME_FEATURE_TXVLAN: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_FCOE_CRC: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_IPV4: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_IPV6: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_IP_GENERIC: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_SCTP: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_ESP_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_FCOE_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_GRE_CSUM_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_GRE_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_GSO_PARTIAL: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_GSO_ROBUST: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_IPXIP4_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_IPXIP6_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_NOCACHE_COPY: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_SCATTER_GATHER: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_SCATTER_GATHER_FRAGLIST: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_SCTP_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_TCP6_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_TCP_ECN_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_TCP_MANGLEID_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_TCP_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_UDP_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_UDP_TNL_CSUM_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_UDP_TNL_SEGMENTATION: string;
export const ETHTOOL_OPTNAME_FEATURE_TX_VLAN_STAG_HW_INSERT: string;
export const IP_ADDRESS_ATTRIBUTE_LABEL: string;
export const IP_CONFIG_ADDRESSES: string;
export const IP_CONFIG_DOMAINS: string;
export const IP_CONFIG_FAMILY: string;
export const IP_CONFIG_GATEWAY: string;
export const IP_CONFIG_NAMESERVERS: string;
export const IP_CONFIG_ROUTES: string;
export const IP_CONFIG_SEARCHES: string;
export const IP_CONFIG_WINS_SERVERS: string;
export const IP_ROUTE_ATTRIBUTE_CWND: string;
export const IP_ROUTE_ATTRIBUTE_FROM: string;
export const IP_ROUTE_ATTRIBUTE_INITCWND: string;
export const IP_ROUTE_ATTRIBUTE_INITRWND: string;
export const IP_ROUTE_ATTRIBUTE_LOCK_CWND: string;
export const IP_ROUTE_ATTRIBUTE_LOCK_INITCWND: string;
export const IP_ROUTE_ATTRIBUTE_LOCK_INITRWND: string;
export const IP_ROUTE_ATTRIBUTE_LOCK_MTU: string;
export const IP_ROUTE_ATTRIBUTE_LOCK_WINDOW: string;
export const IP_ROUTE_ATTRIBUTE_MTU: string;
export const IP_ROUTE_ATTRIBUTE_ONLINK: string;
export const IP_ROUTE_ATTRIBUTE_SRC: string;
export const IP_ROUTE_ATTRIBUTE_TABLE: string;
export const IP_ROUTE_ATTRIBUTE_TOS: string;
export const IP_ROUTE_ATTRIBUTE_WINDOW: string;
export const LLDP_ATTR_CHASSIS_ID: string;
export const LLDP_ATTR_CHASSIS_ID_TYPE: string;
export const LLDP_ATTR_DESTINATION: string;
export const LLDP_ATTR_IEEE_802_1_PPVID: string;
export const LLDP_ATTR_IEEE_802_1_PPVIDS: string;
export const LLDP_ATTR_IEEE_802_1_PPVID_FLAGS: string;
export const LLDP_ATTR_IEEE_802_1_PVID: string;
export const LLDP_ATTR_IEEE_802_1_VID: string;
export const LLDP_ATTR_IEEE_802_1_VLANS: string;
export const LLDP_ATTR_IEEE_802_1_VLAN_NAME: string;
export const LLDP_ATTR_IEEE_802_3_MAC_PHY_CONF: string;
export const LLDP_ATTR_IEEE_802_3_MAX_FRAME_SIZE: string;
export const LLDP_ATTR_IEEE_802_3_POWER_VIA_MDI: string;
export const LLDP_ATTR_MANAGEMENT_ADDRESSES: string;
export const LLDP_ATTR_PORT_DESCRIPTION: string;
export const LLDP_ATTR_PORT_ID: string;
export const LLDP_ATTR_PORT_ID_TYPE: string;
export const LLDP_ATTR_SYSTEM_CAPABILITIES: string;
export const LLDP_ATTR_SYSTEM_DESCRIPTION: string;
export const LLDP_ATTR_SYSTEM_NAME: string;
export const LLDP_DEST_NEAREST_BRIDGE: string;
export const LLDP_DEST_NEAREST_CUSTOMER_BRIDGE: string;
export const LLDP_DEST_NEAREST_NON_TPMR_BRIDGE: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const OBJECT_DBUS_CONNECTION: string;
export const OBJECT_DBUS_OBJECT: string;
export const OBJECT_DBUS_OBJECT_MANAGER: string;
export const OBJECT_PATH: string;
export const REMOTE_CONNECTION_DBUS_CONNECTION: string;
export const REMOTE_CONNECTION_FILENAME: string;
export const REMOTE_CONNECTION_FLAGS: string;
export const REMOTE_CONNECTION_PATH: string;
export const REMOTE_CONNECTION_UNSAVED: string;
export const REMOTE_CONNECTION_VISIBLE: string;
export const SECRET_AGENT_OLD_AUTO_REGISTER: string;
export const SECRET_AGENT_OLD_CAPABILITIES: string;
export const SECRET_AGENT_OLD_IDENTIFIER: string;
export const SECRET_AGENT_OLD_REGISTERED: string;
export const SETTING_6LOWPAN_PARENT: string;
export const SETTING_6LOWPAN_SETTING_NAME: string;
export const SETTING_802_1X_ALTSUBJECT_MATCHES: string;
export const SETTING_802_1X_ANONYMOUS_IDENTITY: string;
export const SETTING_802_1X_AUTH_TIMEOUT: string;
export const SETTING_802_1X_CA_CERT: string;
export const SETTING_802_1X_CA_CERT_PASSWORD: string;
export const SETTING_802_1X_CA_CERT_PASSWORD_FLAGS: string;
export const SETTING_802_1X_CA_PATH: string;
export const SETTING_802_1X_CERT_SCHEME_PREFIX_PATH: string;
export const SETTING_802_1X_CERT_SCHEME_PREFIX_PKCS11: string;
export const SETTING_802_1X_CLIENT_CERT: string;
export const SETTING_802_1X_CLIENT_CERT_PASSWORD: string;
export const SETTING_802_1X_CLIENT_CERT_PASSWORD_FLAGS: string;
export const SETTING_802_1X_DOMAIN_SUFFIX_MATCH: string;
export const SETTING_802_1X_EAP: string;
export const SETTING_802_1X_IDENTITY: string;
export const SETTING_802_1X_PAC_FILE: string;
export const SETTING_802_1X_PASSWORD: string;
export const SETTING_802_1X_PASSWORD_FLAGS: string;
export const SETTING_802_1X_PASSWORD_RAW: string;
export const SETTING_802_1X_PASSWORD_RAW_FLAGS: string;
export const SETTING_802_1X_PHASE1_AUTH_FLAGS: string;
export const SETTING_802_1X_PHASE1_FAST_PROVISIONING: string;
export const SETTING_802_1X_PHASE1_PEAPLABEL: string;
export const SETTING_802_1X_PHASE1_PEAPVER: string;
export const SETTING_802_1X_PHASE2_ALTSUBJECT_MATCHES: string;
export const SETTING_802_1X_PHASE2_AUTH: string;
export const SETTING_802_1X_PHASE2_AUTHEAP: string;
export const SETTING_802_1X_PHASE2_CA_CERT: string;
export const SETTING_802_1X_PHASE2_CA_CERT_PASSWORD: string;
export const SETTING_802_1X_PHASE2_CA_CERT_PASSWORD_FLAGS: string;
export const SETTING_802_1X_PHASE2_CA_PATH: string;
export const SETTING_802_1X_PHASE2_CLIENT_CERT: string;
export const SETTING_802_1X_PHASE2_CLIENT_CERT_PASSWORD: string;
export const SETTING_802_1X_PHASE2_CLIENT_CERT_PASSWORD_FLAGS: string;
export const SETTING_802_1X_PHASE2_DOMAIN_SUFFIX_MATCH: string;
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
export const SETTING_BLUETOOTH_TYPE_NAP: string;
export const SETTING_BLUETOOTH_TYPE_PANU: string;
export const SETTING_BOND_OPTIONS: string;
export const SETTING_BOND_OPTION_ACTIVE_SLAVE: string;
export const SETTING_BOND_OPTION_AD_ACTOR_SYSTEM: string;
export const SETTING_BOND_OPTION_AD_ACTOR_SYS_PRIO: string;
export const SETTING_BOND_OPTION_AD_SELECT: string;
export const SETTING_BOND_OPTION_AD_USER_PORT_KEY: string;
export const SETTING_BOND_OPTION_ALL_SLAVES_ACTIVE: string;
export const SETTING_BOND_OPTION_ARP_ALL_TARGETS: string;
export const SETTING_BOND_OPTION_ARP_INTERVAL: string;
export const SETTING_BOND_OPTION_ARP_IP_TARGET: string;
export const SETTING_BOND_OPTION_ARP_VALIDATE: string;
export const SETTING_BOND_OPTION_DOWNDELAY: string;
export const SETTING_BOND_OPTION_FAIL_OVER_MAC: string;
export const SETTING_BOND_OPTION_LACP_RATE: string;
export const SETTING_BOND_OPTION_LP_INTERVAL: string;
export const SETTING_BOND_OPTION_MIIMON: string;
export const SETTING_BOND_OPTION_MIN_LINKS: string;
export const SETTING_BOND_OPTION_MODE: string;
export const SETTING_BOND_OPTION_NUM_GRAT_ARP: string;
export const SETTING_BOND_OPTION_NUM_UNSOL_NA: string;
export const SETTING_BOND_OPTION_PACKETS_PER_SLAVE: string;
export const SETTING_BOND_OPTION_PRIMARY: string;
export const SETTING_BOND_OPTION_PRIMARY_RESELECT: string;
export const SETTING_BOND_OPTION_RESEND_IGMP: string;
export const SETTING_BOND_OPTION_TLB_DYNAMIC_LB: string;
export const SETTING_BOND_OPTION_UPDELAY: string;
export const SETTING_BOND_OPTION_USE_CARRIER: string;
export const SETTING_BOND_OPTION_XMIT_HASH_POLICY: string;
export const SETTING_BOND_SETTING_NAME: string;
export const SETTING_BRIDGE_AGEING_TIME: string;
export const SETTING_BRIDGE_FORWARD_DELAY: string;
export const SETTING_BRIDGE_GROUP_FORWARD_MASK: string;
export const SETTING_BRIDGE_HELLO_TIME: string;
export const SETTING_BRIDGE_MAC_ADDRESS: string;
export const SETTING_BRIDGE_MAX_AGE: string;
export const SETTING_BRIDGE_MULTICAST_SNOOPING: string;
export const SETTING_BRIDGE_PORT_HAIRPIN_MODE: string;
export const SETTING_BRIDGE_PORT_PATH_COST: string;
export const SETTING_BRIDGE_PORT_PRIORITY: string;
export const SETTING_BRIDGE_PORT_SETTING_NAME: string;
export const SETTING_BRIDGE_PORT_VLANS: string;
export const SETTING_BRIDGE_PRIORITY: string;
export const SETTING_BRIDGE_SETTING_NAME: string;
export const SETTING_BRIDGE_STP: string;
export const SETTING_BRIDGE_VLANS: string;
export const SETTING_BRIDGE_VLAN_DEFAULT_PVID: string;
export const SETTING_BRIDGE_VLAN_FILTERING: string;
export const SETTING_CDMA_MTU: string;
export const SETTING_CDMA_NUMBER: string;
export const SETTING_CDMA_PASSWORD: string;
export const SETTING_CDMA_PASSWORD_FLAGS: string;
export const SETTING_CDMA_SETTING_NAME: string;
export const SETTING_CDMA_USERNAME: string;
export const SETTING_CONNECTION_AUTH_RETRIES: string;
export const SETTING_CONNECTION_AUTOCONNECT: string;
export const SETTING_CONNECTION_AUTOCONNECT_PRIORITY: string;
export const SETTING_CONNECTION_AUTOCONNECT_PRIORITY_DEFAULT: number;
export const SETTING_CONNECTION_AUTOCONNECT_PRIORITY_MAX: number;
export const SETTING_CONNECTION_AUTOCONNECT_PRIORITY_MIN: number;
export const SETTING_CONNECTION_AUTOCONNECT_RETRIES: string;
export const SETTING_CONNECTION_AUTOCONNECT_SLAVES: string;
export const SETTING_CONNECTION_GATEWAY_PING_TIMEOUT: string;
export const SETTING_CONNECTION_ID: string;
export const SETTING_CONNECTION_INTERFACE_NAME: string;
export const SETTING_CONNECTION_LLDP: string;
export const SETTING_CONNECTION_LLMNR: string;
export const SETTING_CONNECTION_MASTER: string;
export const SETTING_CONNECTION_MDNS: string;
export const SETTING_CONNECTION_METERED: string;
export const SETTING_CONNECTION_MULTI_CONNECT: string;
export const SETTING_CONNECTION_PERMISSIONS: string;
export const SETTING_CONNECTION_READ_ONLY: string;
export const SETTING_CONNECTION_SECONDARIES: string;
export const SETTING_CONNECTION_SETTING_NAME: string;
export const SETTING_CONNECTION_SLAVE_TYPE: string;
export const SETTING_CONNECTION_STABLE_ID: string;
export const SETTING_CONNECTION_TIMESTAMP: string;
export const SETTING_CONNECTION_TYPE: string;
export const SETTING_CONNECTION_UUID: string;
export const SETTING_CONNECTION_WAIT_DEVICE_TIMEOUT: string;
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
export const SETTING_DNS_OPTION_ATTEMPTS: string;
export const SETTING_DNS_OPTION_DEBUG: string;
export const SETTING_DNS_OPTION_EDNS0: string;
export const SETTING_DNS_OPTION_INET6: string;
export const SETTING_DNS_OPTION_IP6_BYTESTRING: string;
export const SETTING_DNS_OPTION_IP6_DOTINT: string;
export const SETTING_DNS_OPTION_NDOTS: string;
export const SETTING_DNS_OPTION_NO_CHECK_NAMES: string;
export const SETTING_DNS_OPTION_NO_IP6_DOTINT: string;
export const SETTING_DNS_OPTION_NO_TLD_QUERY: string;
export const SETTING_DNS_OPTION_ROTATE: string;
export const SETTING_DNS_OPTION_SINGLE_REQUEST: string;
export const SETTING_DNS_OPTION_SINGLE_REQUEST_REOPEN: string;
export const SETTING_DNS_OPTION_TIMEOUT: string;
export const SETTING_DNS_OPTION_USE_VC: string;
export const SETTING_DUMMY_SETTING_NAME: string;
export const SETTING_ETHTOOL_SETTING_NAME: string;
export const SETTING_GENERIC_SETTING_NAME: string;
export const SETTING_GSM_APN: string;
export const SETTING_GSM_DEVICE_ID: string;
export const SETTING_GSM_HOME_ONLY: string;
export const SETTING_GSM_MTU: string;
export const SETTING_GSM_NETWORK_ID: string;
export const SETTING_GSM_NUMBER: string;
export const SETTING_GSM_PASSWORD: string;
export const SETTING_GSM_PASSWORD_FLAGS: string;
export const SETTING_GSM_PIN: string;
export const SETTING_GSM_PIN_FLAGS: string;
export const SETTING_GSM_SETTING_NAME: string;
export const SETTING_GSM_SIM_ID: string;
export const SETTING_GSM_SIM_OPERATOR_ID: string;
export const SETTING_GSM_USERNAME: string;
export const SETTING_INFINIBAND_MAC_ADDRESS: string;
export const SETTING_INFINIBAND_MTU: string;
export const SETTING_INFINIBAND_PARENT: string;
export const SETTING_INFINIBAND_P_KEY: string;
export const SETTING_INFINIBAND_SETTING_NAME: string;
export const SETTING_INFINIBAND_TRANSPORT_MODE: string;
export const SETTING_IP4_CONFIG_DHCP_CLIENT_ID: string;
export const SETTING_IP4_CONFIG_DHCP_FQDN: string;
export const SETTING_IP4_CONFIG_METHOD_AUTO: string;
export const SETTING_IP4_CONFIG_METHOD_DISABLED: string;
export const SETTING_IP4_CONFIG_METHOD_LINK_LOCAL: string;
export const SETTING_IP4_CONFIG_METHOD_MANUAL: string;
export const SETTING_IP4_CONFIG_METHOD_SHARED: string;
export const SETTING_IP4_CONFIG_SETTING_NAME: string;
export const SETTING_IP6_CONFIG_ADDR_GEN_MODE: string;
export const SETTING_IP6_CONFIG_DHCP_DUID: string;
export const SETTING_IP6_CONFIG_IP6_PRIVACY: string;
export const SETTING_IP6_CONFIG_METHOD_AUTO: string;
export const SETTING_IP6_CONFIG_METHOD_DHCP: string;
export const SETTING_IP6_CONFIG_METHOD_DISABLED: string;
export const SETTING_IP6_CONFIG_METHOD_IGNORE: string;
export const SETTING_IP6_CONFIG_METHOD_LINK_LOCAL: string;
export const SETTING_IP6_CONFIG_METHOD_MANUAL: string;
export const SETTING_IP6_CONFIG_METHOD_SHARED: string;
export const SETTING_IP6_CONFIG_SETTING_NAME: string;
export const SETTING_IP6_CONFIG_TOKEN: string;
export const SETTING_IP_CONFIG_ADDRESSES: string;
export const SETTING_IP_CONFIG_DAD_TIMEOUT: string;
export const SETTING_IP_CONFIG_DAD_TIMEOUT_MAX: number;
export const SETTING_IP_CONFIG_DHCP_HOSTNAME: string;
export const SETTING_IP_CONFIG_DHCP_SEND_HOSTNAME: string;
export const SETTING_IP_CONFIG_DHCP_TIMEOUT: string;
export const SETTING_IP_CONFIG_DNS: string;
export const SETTING_IP_CONFIG_DNS_OPTIONS: string;
export const SETTING_IP_CONFIG_DNS_PRIORITY: string;
export const SETTING_IP_CONFIG_DNS_SEARCH: string;
export const SETTING_IP_CONFIG_GATEWAY: string;
export const SETTING_IP_CONFIG_IGNORE_AUTO_DNS: string;
export const SETTING_IP_CONFIG_IGNORE_AUTO_ROUTES: string;
export const SETTING_IP_CONFIG_MAY_FAIL: string;
export const SETTING_IP_CONFIG_METHOD: string;
export const SETTING_IP_CONFIG_NEVER_DEFAULT: string;
export const SETTING_IP_CONFIG_ROUTES: string;
export const SETTING_IP_CONFIG_ROUTE_METRIC: string;
export const SETTING_IP_CONFIG_ROUTE_TABLE: string;
export const SETTING_IP_CONFIG_ROUTING_RULES: string;
export const SETTING_IP_TUNNEL_ENCAPSULATION_LIMIT: string;
export const SETTING_IP_TUNNEL_FLAGS: string;
export const SETTING_IP_TUNNEL_FLOW_LABEL: string;
export const SETTING_IP_TUNNEL_INPUT_KEY: string;
export const SETTING_IP_TUNNEL_LOCAL: string;
export const SETTING_IP_TUNNEL_MODE: string;
export const SETTING_IP_TUNNEL_MTU: string;
export const SETTING_IP_TUNNEL_OUTPUT_KEY: string;
export const SETTING_IP_TUNNEL_PARENT: string;
export const SETTING_IP_TUNNEL_PATH_MTU_DISCOVERY: string;
export const SETTING_IP_TUNNEL_REMOTE: string;
export const SETTING_IP_TUNNEL_SETTING_NAME: string;
export const SETTING_IP_TUNNEL_TOS: string;
export const SETTING_IP_TUNNEL_TTL: string;
export const SETTING_MACSEC_ENCRYPT: string;
export const SETTING_MACSEC_MKA_CAK: string;
export const SETTING_MACSEC_MKA_CAK_FLAGS: string;
export const SETTING_MACSEC_MKA_CAK_LENGTH: number;
export const SETTING_MACSEC_MKA_CKN: string;
export const SETTING_MACSEC_MKA_CKN_LENGTH: number;
export const SETTING_MACSEC_MODE: string;
export const SETTING_MACSEC_PARENT: string;
export const SETTING_MACSEC_PORT: string;
export const SETTING_MACSEC_SEND_SCI: string;
export const SETTING_MACSEC_SETTING_NAME: string;
export const SETTING_MACSEC_VALIDATION: string;
export const SETTING_MACVLAN_MODE: string;
export const SETTING_MACVLAN_PARENT: string;
export const SETTING_MACVLAN_PROMISCUOUS: string;
export const SETTING_MACVLAN_SETTING_NAME: string;
export const SETTING_MACVLAN_TAP: string;
export const SETTING_MATCH_INTERFACE_NAME: string;
export const SETTING_MATCH_SETTING_NAME: string;
export const SETTING_NAME: string;
export const SETTING_OLPC_MESH_CHANNEL: string;
export const SETTING_OLPC_MESH_DHCP_ANYCAST_ADDRESS: string;
export const SETTING_OLPC_MESH_SETTING_NAME: string;
export const SETTING_OLPC_MESH_SSID: string;
export const SETTING_OVS_BRIDGE_DATAPATH_TYPE: string;
export const SETTING_OVS_BRIDGE_FAIL_MODE: string;
export const SETTING_OVS_BRIDGE_MCAST_SNOOPING_ENABLE: string;
export const SETTING_OVS_BRIDGE_RSTP_ENABLE: string;
export const SETTING_OVS_BRIDGE_SETTING_NAME: string;
export const SETTING_OVS_BRIDGE_STP_ENABLE: string;
export const SETTING_OVS_DPDK_DEVARGS: string;
export const SETTING_OVS_DPDK_SETTING_NAME: string;
export const SETTING_OVS_INTERFACE_SETTING_NAME: string;
export const SETTING_OVS_INTERFACE_TYPE: string;
export const SETTING_OVS_PATCH_PEER: string;
export const SETTING_OVS_PATCH_SETTING_NAME: string;
export const SETTING_OVS_PORT_BOND_DOWNDELAY: string;
export const SETTING_OVS_PORT_BOND_MODE: string;
export const SETTING_OVS_PORT_BOND_UPDELAY: string;
export const SETTING_OVS_PORT_LACP: string;
export const SETTING_OVS_PORT_SETTING_NAME: string;
export const SETTING_OVS_PORT_TAG: string;
export const SETTING_OVS_PORT_VLAN_MODE: string;
export const SETTING_PARAM_FUZZY_IGNORE: number;
export const SETTING_PARAM_REQUIRED: number;
export const SETTING_PARAM_SECRET: number;
export const SETTING_PPPOE_PARENT: string;
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
export const SETTING_PROXY_BROWSER_ONLY: string;
export const SETTING_PROXY_METHOD: string;
export const SETTING_PROXY_PAC_SCRIPT: string;
export const SETTING_PROXY_PAC_URL: string;
export const SETTING_PROXY_SETTING_NAME: string;
export const SETTING_SERIAL_BAUD: string;
export const SETTING_SERIAL_BITS: string;
export const SETTING_SERIAL_PARITY: string;
export const SETTING_SERIAL_SEND_DELAY: string;
export const SETTING_SERIAL_SETTING_NAME: string;
export const SETTING_SERIAL_STOPBITS: string;
export const SETTING_SRIOV_AUTOPROBE_DRIVERS: string;
export const SETTING_SRIOV_SETTING_NAME: string;
export const SETTING_SRIOV_TOTAL_VFS: string;
export const SETTING_SRIOV_VFS: string;
export const SETTING_TC_CONFIG_QDISCS: string;
export const SETTING_TC_CONFIG_SETTING_NAME: string;
export const SETTING_TC_CONFIG_TFILTERS: string;
export const SETTING_TEAM_CONFIG: string;
export const SETTING_TEAM_LINK_WATCHERS: string;
export const SETTING_TEAM_MCAST_REJOIN_COUNT: string;
export const SETTING_TEAM_MCAST_REJOIN_INTERVAL: string;
export const SETTING_TEAM_NOTIFY_MCAST_COUNT_ACTIVEBACKUP_DEFAULT: number;
export const SETTING_TEAM_NOTIFY_PEERS_COUNT: string;
export const SETTING_TEAM_NOTIFY_PEERS_COUNT_ACTIVEBACKUP_DEFAULT: number;
export const SETTING_TEAM_NOTIFY_PEERS_INTERVAL: string;
export const SETTING_TEAM_PORT_CONFIG: string;
export const SETTING_TEAM_PORT_LACP_KEY: string;
export const SETTING_TEAM_PORT_LACP_PRIO: string;
export const SETTING_TEAM_PORT_LACP_PRIO_DEFAULT: number;
export const SETTING_TEAM_PORT_LINK_WATCHERS: string;
export const SETTING_TEAM_PORT_PRIO: string;
export const SETTING_TEAM_PORT_QUEUE_ID: string;
export const SETTING_TEAM_PORT_QUEUE_ID_DEFAULT: number;
export const SETTING_TEAM_PORT_SETTING_NAME: string;
export const SETTING_TEAM_PORT_STICKY: string;
export const SETTING_TEAM_RUNNER: string;
export const SETTING_TEAM_RUNNER_ACTIVE: string;
export const SETTING_TEAM_RUNNER_ACTIVEBACKUP: string;
export const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY: string;
export const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_BANDWIDTH: string;
export const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_COUNT: string;
export const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_LACP_PRIO: string;
export const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_LACP_PRIO_STABLE: string;
export const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_PORT_CONFIG: string;
export const SETTING_TEAM_RUNNER_BROADCAST: string;
export const SETTING_TEAM_RUNNER_FAST_RATE: string;
export const SETTING_TEAM_RUNNER_HWADDR_POLICY: string;
export const SETTING_TEAM_RUNNER_HWADDR_POLICY_BY_ACTIVE: string;
export const SETTING_TEAM_RUNNER_HWADDR_POLICY_ONLY_ACTIVE: string;
export const SETTING_TEAM_RUNNER_HWADDR_POLICY_SAME_ALL: string;
export const SETTING_TEAM_RUNNER_LACP: string;
export const SETTING_TEAM_RUNNER_LOADBALANCE: string;
export const SETTING_TEAM_RUNNER_MIN_PORTS: string;
export const SETTING_TEAM_RUNNER_RANDOM: string;
export const SETTING_TEAM_RUNNER_ROUNDROBIN: string;
export const SETTING_TEAM_RUNNER_SYS_PRIO: string;
export const SETTING_TEAM_RUNNER_SYS_PRIO_DEFAULT: number;
export const SETTING_TEAM_RUNNER_TX_BALANCER: string;
export const SETTING_TEAM_RUNNER_TX_BALANCER_INTERVAL: string;
export const SETTING_TEAM_RUNNER_TX_BALANCER_INTERVAL_DEFAULT: number;
export const SETTING_TEAM_RUNNER_TX_HASH: string;
export const SETTING_TEAM_SETTING_NAME: string;
export const SETTING_TUN_GROUP: string;
export const SETTING_TUN_MODE: string;
export const SETTING_TUN_MULTI_QUEUE: string;
export const SETTING_TUN_OWNER: string;
export const SETTING_TUN_PI: string;
export const SETTING_TUN_SETTING_NAME: string;
export const SETTING_TUN_VNET_HDR: string;
export const SETTING_USER_DATA: string;
export const SETTING_USER_SETTING_NAME: string;
export const SETTING_VLAN_EGRESS_PRIORITY_MAP: string;
export const SETTING_VLAN_FLAGS: string;
export const SETTING_VLAN_ID: string;
export const SETTING_VLAN_INGRESS_PRIORITY_MAP: string;
export const SETTING_VLAN_PARENT: string;
export const SETTING_VLAN_SETTING_NAME: string;
export const SETTING_VPN_DATA: string;
export const SETTING_VPN_PERSISTENT: string;
export const SETTING_VPN_SECRETS: string;
export const SETTING_VPN_SERVICE_TYPE: string;
export const SETTING_VPN_SETTING_NAME: string;
export const SETTING_VPN_TIMEOUT: string;
export const SETTING_VPN_USER_NAME: string;
export const SETTING_VXLAN_AGEING: string;
export const SETTING_VXLAN_DESTINATION_PORT: string;
export const SETTING_VXLAN_ID: string;
export const SETTING_VXLAN_L2_MISS: string;
export const SETTING_VXLAN_L3_MISS: string;
export const SETTING_VXLAN_LEARNING: string;
export const SETTING_VXLAN_LIMIT: string;
export const SETTING_VXLAN_LOCAL: string;
export const SETTING_VXLAN_PARENT: string;
export const SETTING_VXLAN_PROXY: string;
export const SETTING_VXLAN_REMOTE: string;
export const SETTING_VXLAN_RSC: string;
export const SETTING_VXLAN_SETTING_NAME: string;
export const SETTING_VXLAN_SOURCE_PORT_MAX: string;
export const SETTING_VXLAN_SOURCE_PORT_MIN: string;
export const SETTING_VXLAN_TOS: string;
export const SETTING_VXLAN_TTL: string;
export const SETTING_WIFI_P2P_PEER: string;
export const SETTING_WIFI_P2P_SETTING_NAME: string;
export const SETTING_WIFI_P2P_WFD_IES: string;
export const SETTING_WIFI_P2P_WPS_METHOD: string;
export const SETTING_WIMAX_MAC_ADDRESS: string;
export const SETTING_WIMAX_NETWORK_NAME: string;
export const SETTING_WIMAX_SETTING_NAME: string;
export const SETTING_WIRED_AUTO_NEGOTIATE: string;
export const SETTING_WIRED_CLONED_MAC_ADDRESS: string;
export const SETTING_WIRED_DUPLEX: string;
export const SETTING_WIRED_GENERATE_MAC_ADDRESS_MASK: string;
export const SETTING_WIRED_MAC_ADDRESS: string;
export const SETTING_WIRED_MAC_ADDRESS_BLACKLIST: string;
export const SETTING_WIRED_MTU: string;
export const SETTING_WIRED_PORT: string;
export const SETTING_WIRED_S390_NETTYPE: string;
export const SETTING_WIRED_S390_OPTIONS: string;
export const SETTING_WIRED_S390_SUBCHANNELS: string;
export const SETTING_WIRED_SETTING_NAME: string;
export const SETTING_WIRED_SPEED: string;
export const SETTING_WIRED_WAKE_ON_LAN: string;
export const SETTING_WIRED_WAKE_ON_LAN_PASSWORD: string;
export const SETTING_WIREGUARD_FWMARK: string;
export const SETTING_WIREGUARD_IP4_AUTO_DEFAULT_ROUTE: string;
export const SETTING_WIREGUARD_IP6_AUTO_DEFAULT_ROUTE: string;
export const SETTING_WIREGUARD_LISTEN_PORT: string;
export const SETTING_WIREGUARD_MTU: string;
export const SETTING_WIREGUARD_PEERS: string;
export const SETTING_WIREGUARD_PEER_ROUTES: string;
export const SETTING_WIREGUARD_PRIVATE_KEY: string;
export const SETTING_WIREGUARD_PRIVATE_KEY_FLAGS: string;
export const SETTING_WIREGUARD_SETTING_NAME: string;
export const SETTING_WIRELESS_BAND: string;
export const SETTING_WIRELESS_BSSID: string;
export const SETTING_WIRELESS_CHANNEL: string;
export const SETTING_WIRELESS_CLONED_MAC_ADDRESS: string;
export const SETTING_WIRELESS_GENERATE_MAC_ADDRESS_MASK: string;
export const SETTING_WIRELESS_HIDDEN: string;
export const SETTING_WIRELESS_MAC_ADDRESS: string;
export const SETTING_WIRELESS_MAC_ADDRESS_BLACKLIST: string;
export const SETTING_WIRELESS_MAC_ADDRESS_RANDOMIZATION: string;
export const SETTING_WIRELESS_MODE: string;
export const SETTING_WIRELESS_MODE_ADHOC: string;
export const SETTING_WIRELESS_MODE_AP: string;
export const SETTING_WIRELESS_MODE_INFRA: string;
export const SETTING_WIRELESS_MODE_MESH: string;
export const SETTING_WIRELESS_MTU: string;
export const SETTING_WIRELESS_POWERSAVE: string;
export const SETTING_WIRELESS_RATE: string;
export const SETTING_WIRELESS_SECURITY_AUTH_ALG: string;
export const SETTING_WIRELESS_SECURITY_FILS: string;
export const SETTING_WIRELESS_SECURITY_GROUP: string;
export const SETTING_WIRELESS_SECURITY_KEY_MGMT: string;
export const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD: string;
export const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD_FLAGS: string;
export const SETTING_WIRELESS_SECURITY_LEAP_USERNAME: string;
export const SETTING_WIRELESS_SECURITY_PAIRWISE: string;
export const SETTING_WIRELESS_SECURITY_PMF: string;
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
export const SETTING_WIRELESS_SECURITY_WPS_METHOD: string;
export const SETTING_WIRELESS_SEEN_BSSIDS: string;
export const SETTING_WIRELESS_SETTING_NAME: string;
export const SETTING_WIRELESS_SSID: string;
export const SETTING_WIRELESS_TX_POWER: string;
export const SETTING_WIRELESS_WAKE_ON_WLAN: string;
export const SETTING_WPAN_CHANNEL: string;
export const SETTING_WPAN_CHANNEL_DEFAULT: number;
export const SETTING_WPAN_MAC_ADDRESS: string;
export const SETTING_WPAN_PAGE: string;
export const SETTING_WPAN_PAGE_DEFAULT: number;
export const SETTING_WPAN_PAN_ID: string;
export const SETTING_WPAN_SETTING_NAME: string;
export const SETTING_WPAN_SHORT_ADDRESS: string;
export const SRIOV_VF_ATTRIBUTE_MAC: string;
export const SRIOV_VF_ATTRIBUTE_MAX_TX_RATE: string;
export const SRIOV_VF_ATTRIBUTE_MIN_TX_RATE: string;
export const SRIOV_VF_ATTRIBUTE_SPOOF_CHECK: string;
export const SRIOV_VF_ATTRIBUTE_TRUST: string;
export const TEAM_LINK_WATCHER_ARP_PING: string;
export const TEAM_LINK_WATCHER_ETHTOOL: string;
export const TEAM_LINK_WATCHER_NSNA_PING: string;
export const UTILS_HWADDR_LEN_MAX: number;
export const VLAN_FLAGS_ALL: number;
export const VPN_CONNECTION_BANNER: string;
export const VPN_CONNECTION_VPN_STATE: string;
export const VPN_DBUS_PLUGIN_INTERFACE: string;
export const VPN_DBUS_PLUGIN_PATH: string;
export const VPN_EDITOR_PLUGIN_DESCRIPTION: string;
export const VPN_EDITOR_PLUGIN_NAME: string;
export const VPN_EDITOR_PLUGIN_SERVICE: string;
export const VPN_PLUGIN_CAN_PERSIST: string;
export const VPN_PLUGIN_CONFIG_BANNER: string;
export const VPN_PLUGIN_CONFIG_EXT_GATEWAY: string;
export const VPN_PLUGIN_CONFIG_HAS_IP4: string;
export const VPN_PLUGIN_CONFIG_HAS_IP6: string;
export const VPN_PLUGIN_CONFIG_MTU: string;
export const VPN_PLUGIN_CONFIG_PROXY_PAC: string;
export const VPN_PLUGIN_CONFIG_TUNDEV: string;
export const VPN_PLUGIN_INFO_FILENAME: string;
export const VPN_PLUGIN_INFO_KEYFILE: string;
export const VPN_PLUGIN_INFO_KF_GROUP_CONNECTION: string;
export const VPN_PLUGIN_INFO_KF_GROUP_GNOME: string;
export const VPN_PLUGIN_INFO_KF_GROUP_LIBNM: string;
export const VPN_PLUGIN_INFO_NAME: string;
export const VPN_PLUGIN_IP4_CONFIG_ADDRESS: string;
export const VPN_PLUGIN_IP4_CONFIG_DNS: string;
export const VPN_PLUGIN_IP4_CONFIG_DOMAIN: string;
export const VPN_PLUGIN_IP4_CONFIG_DOMAINS: string;
export const VPN_PLUGIN_IP4_CONFIG_INT_GATEWAY: string;
export const VPN_PLUGIN_IP4_CONFIG_MSS: string;
export const VPN_PLUGIN_IP4_CONFIG_NBNS: string;
export const VPN_PLUGIN_IP4_CONFIG_NEVER_DEFAULT: string;
export const VPN_PLUGIN_IP4_CONFIG_PREFIX: string;
export const VPN_PLUGIN_IP4_CONFIG_PRESERVE_ROUTES: string;
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
export const VPN_PLUGIN_IP6_CONFIG_PRESERVE_ROUTES: string;
export const VPN_PLUGIN_IP6_CONFIG_PTP: string;
export const VPN_PLUGIN_IP6_CONFIG_ROUTES: string;
export const VPN_PLUGIN_OLD_DBUS_SERVICE_NAME: string;
export const VPN_PLUGIN_OLD_STATE: string;
export const VPN_SERVICE_PLUGIN_DBUS_SERVICE_NAME: string;
export const VPN_SERVICE_PLUGIN_DBUS_WATCH_PEER: string;
export const VPN_SERVICE_PLUGIN_STATE: string;
export const WIFI_P2P_PEER_FLAGS: string;
export const WIFI_P2P_PEER_HW_ADDRESS: string;
export const WIFI_P2P_PEER_LAST_SEEN: string;
export const WIFI_P2P_PEER_MANUFACTURER: string;
export const WIFI_P2P_PEER_MODEL: string;
export const WIFI_P2P_PEER_MODEL_NUMBER: string;
export const WIFI_P2P_PEER_NAME: string;
export const WIFI_P2P_PEER_SERIAL: string;
export const WIFI_P2P_PEER_STRENGTH: string;
export const WIFI_P2P_PEER_WFD_IES: string;
export const WIMAX_NSP_NAME: string;
export const WIMAX_NSP_NETWORK_TYPE: string;
export const WIMAX_NSP_SIGNAL_QUALITY: string;
export const WIREGUARD_PEER_ATTR_ALLOWED_IPS: string;
export const WIREGUARD_PEER_ATTR_ENDPOINT: string;
export const WIREGUARD_PEER_ATTR_PERSISTENT_KEEPALIVE: string;
export const WIREGUARD_PEER_ATTR_PRESHARED_KEY: string;
export const WIREGUARD_PEER_ATTR_PRESHARED_KEY_FLAGS: string;
export const WIREGUARD_PEER_ATTR_PUBLIC_KEY: string;
export const WIREGUARD_PUBLIC_KEY_LEN: number;
export const WIREGUARD_SYMMETRIC_KEY_LEN: number;
/**
 * 
 */
export function agent_manager_error_quark(): GLib.Quark;
/**
 * Parses the string representation of the queueing
 * discipline to a %NMBridgeVlan instance.
 */
export function bridge_vlan_from_str(str: string): BridgeVlan;
/**
 * Registers an error quark for #NMClient if necessary.
 */
export function client_error_quark(): GLib.Quark;
/**
 * 
 */
export function connection_error_quark(): GLib.Quark;
/**
 * 
 */
export function crypto_error_quark(): GLib.Quark;
/**
 * 
 */
export function device_error_quark(): GLib.Quark;
/**
 * Checks whether @optname is a valid option name for an offload feature.
 * %Returns: %TRUE, if @optname is valid
 */
export function ethtool_optname_is_feature(optname: string | null): boolean;
/**
 * Validates a route attribute, i.e. checks that the attribute is a known
 *  one
 * and the value is of the correct type and well-formed.
 */
export function ip_route_attribute_validate(name: string, value: GLib.Variant, family: number): [boolean, boolean];
/**
 * 
 */
export function ip_route_get_variant_attribute_spec(): VariantAttributeSpec;
/**
 * 
 */
export function ip_routing_rule_from_string(str: string, to_string_flags: IPRoutingRuleAsStringFlags, extra_args: GLib.HashTable | null): IPRoutingRule;
/**
 * 
 */
export function manager_error_quark(): GLib.Quark;
/**
 * 
 */
export function secret_agent_error_quark(): GLib.Quark;
/**
 * 
 */
export function settings_error_quark(): GLib.Quark;
/**
 * Validates a VF attribute, i.e. checks that the attribute is a known on
 * e,
 * the value is of the correct type and well-formed.
 */
export function sriov_vf_attribute_validate(name: string, value: GLib.Variant): [boolean, boolean];
/**
 * Given a set of device capabilities, and a desired security type to che
 * ck
 * against, determines whether the combination of device capabilities and
 * desired security type are valid for AP/Hotspot connections.
 */
export function utils_ap_mode_security_valid(type: UtilsSecurityType, wifi_caps: DeviceWifiCapabilities): boolean;
/**
 * 
 */
export function utils_base64secret_decode(base64_key: string, required_key_len: number, out_key: number | null): boolean;
/**
 * Converts the byte array @src into a hexadecimal string. If @final_len 
 * is
 * greater than -1, the returned string is terminated at that index
 * (returned_string[final_len] == '\0'),
 */
export function utils_bin2hexstr(src: number[], len: number, final_len: number): string;
/**
 * Convert bonding mode from integer value to descriptive name.
 * See https://www.kernel.org/doc/Documentation/networking/bonding.txt fo
 * r
 * available modes.
 */
export function utils_bond_mode_int_to_string(mode: number): string;
/**
 * Convert bonding mode from string representation to numeric value.
 * See https://www.kernel.org/doc/Documentation/networking/bonding.txt fo
 * r
 * available modes.
 * The @mode string can be either a descriptive name or a number (as stri
 * ng).
 */
export function utils_bond_mode_string_to_int(mode: string): number;
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
export function utils_check_virtual_device_compatibility(virtual_type: GType, other_type: GType): boolean;
/**
 * Converts a string to the matching enum value.
 * If the enum is a %G_TYPE_FLAGS the function returns the logical OR of 
 * values
 * matching the comma-separated tokens in the string; if an unknown token
 *  is found
 * the function returns %FALSE and stores a pointer to a newly allocated 
 * string
 * containing the unrecognized token in @err_token.
 */
export function utils_enum_from_str(type: GType, str: string): [boolean, number | null,string | null];
/**
 * Returns the list of possible values for a given enum.
 */
export function utils_enum_get_values(type: GType, from: number, to: number): string[];
/**
 * Converts an enum value to its string representation. If the enum is a
 * %G_TYPE_FLAGS the function returns a comma-separated list of matching 
 * values.
 * If the value has no corresponding string representation, it is convert
 * ed
 * to a number. For enums it is converted to a decimal number, for flags
 * to an (unsigned) hex number.
 */
export function utils_enum_to_str(type: GType, value: number): string;
/**
 * This function does a quick printable character conversion of the SSID,
 *  simply
 * replacing embedded NULLs and non-printable characters with the hexadec
 * imal
 * representation of that character.  Intended for debugging only, should
 *  not
 * be used for display of SSIDs.
 */
export function utils_escape_ssid(ssid: number[], len: number): string;
/**
 * Tests if @filename has a valid extension for an X.509 certificate file
 * (".cer", ".crt", ".der", or ".pem"), and contains a certificate in a f
 * ormat
 * recognized by NetworkManager.
 */
export function utils_file_is_certificate(filename: string): boolean;
/**
 * Tests if @filename is a PKCS#<!-- -->12 file.
 */
export function utils_file_is_pkcs12(filename: string): boolean;
/**
 * Tests if @filename has a valid extension for an X.509 private key file
 * (".der", ".key", ".pem", or ".p12"), and contains a private key in a f
 * ormat
 * recognized by NetworkManager.
 */
export function utils_file_is_private_key(filename: string): [boolean, boolean];
/**
 * Searches for a @progname file in a list of search @paths.
 */
export function utils_file_search_in_paths(progname: string, try_first: string | null, paths: string | null, file_test_flags: GLib.FileTest, predicate: UtilsFileSearchInPathsPredicate, user_data: object | null): string;
/**
 * 
 */
export function utils_format_variant_attributes(attributes: GLib.HashTable, attr_separator: number, key_value_separator: number): string;
/**
 * 
 */
export function utils_get_timestamp_msec(): number;
/**
 * Converts a hexadecimal string @hex into an array of bytes.  The option
 * al
 * separator ':' may be used between single or pairs of hexadecimal chara
 * cters,
 * eg "00:11" or "0:1".  Any "0x" at the beginning of @hex is ignored.  @
 * hex
 * may not start or end with ':'.
 */
export function utils_hexstr2bin(hex: string): GLib.Bytes;
/**
 * Parses @asc and converts it to binary form in a #GByteArray. See
 * nm_utils_hwaddr_aton() if you don't want a #GByteArray.
 */
export function utils_hwaddr_atoba(asc: string, length: number): number[];
/**
 * Parses @asc and converts it to binary form in @buffer.
 * Bytes in @asc can be sepatared by colons (:), or hyphens (-), but not 
 * mixed.
 */
export function utils_hwaddr_aton(asc: string, buffer: number[], length: number): number;
/**
 * Parses @asc to see if it is a valid hardware address of the given
 * length, and if so, returns it in canonical form (uppercase, with
 * leading 0s as needed, and with colons rather than hyphens).
 */
export function utils_hwaddr_canonical(asc: string, length: number): string;
/**
 * Returns the length in octets of a hardware address of type @type.
 * It is an error to call this function with any value other than
 * <literal>ARPHRD_ETHER</literal> or <literal>ARPHRD_INFINIBAND</literal
 * >.
 */
export function utils_hwaddr_len(type: number): number;
/**
 * Generalized hardware address comparison function. Tests if @hwaddr1 an
 * d
 * @hwaddr2 "equal" (or more precisely, "equivalent"), with several advan
 * tages
 * over a simple memcmp():
 *   1. If @hwaddr1_len or @hwaddr2_len is -1, then the corresponding add
 * ress is
 *      assumed to be ASCII rather than binary, and will be converted to 
 * binary
 *      before being compared.
 *   2. If @hwaddr1 or @hwaddr2 is %NULL, it is treated instead as though
 *  it was
 *      a zero-filled buffer @hwaddr1_len or @hwaddr2_len bytes long.
 *   3. If @hwaddr1 and @hwaddr2 are InfiniBand hardware addresses (that 
 * is, if
 *      they are <literal>INFINIBAND_ALEN</literal> bytes long in binary 
 * form)
 *      then only the last 8 bytes are compared, since those are the only
 *  bytes
 *      that actually identify the hardware. (The other 12 bytes will cha
 * nge
 *      depending on the configuration of the InfiniBand fabric that the 
 * device
 *      is connected to.)
 * If a passed-in ASCII hardware address cannot be parsed, or would parse
 *  to an
 * address larger than %NM_UTILS_HWADDR_LEN_MAX, then it will silently fa
 * il to
 * match. (This means that externally-provided address strings do not nee
 * d to be
 * sanity-checked before comparing them against known good addresses; the
 * y are
 * guaranteed to not match if they are invalid.)
 */
export function utils_hwaddr_matches(hwaddr1: object | null, hwaddr1_len: number, hwaddr2: object | null, hwaddr2_len: number): boolean;
/**
 * Converts @addr to textual form.
 */
export function utils_hwaddr_ntoa(addr: number[], length: number): string;
/**
 * Parses @asc to see if it is a valid hardware address of the given
 * length.
 */
export function utils_hwaddr_valid(asc: string, length: number): boolean;
/**
 * Validate the network interface name.
 */
export function utils_iface_valid_name(name: string | null): boolean;
/**
 * Utility function to convert a #GVariant of type 'aau' representing a l
 * ist of
 * NetworkManager IPv4 addresses (which are tuples of address, prefix, an
 * d
 * gateway) into a #GPtrArray of #NMIPAddress objects. The "gateway" fiel
 * d of
 * the first address (if set) will be returned in @out_gateway; the "gate
 * way" fields
 * of the other addresses are ignored.
 */
export function utils_ip4_addresses_from_variant(value: GLib.Variant): [IPAddress[], string | null];
/**
 * Utility function to convert a #GPtrArray of #NMIPAddress objects repre
 * senting
 * IPv4 addresses into a #GVariant of type 'aau' representing an array of
 * NetworkManager IPv4 addresses (which are tuples of address, prefix, an
 * d
 * gateway). The "gateway" field of the first address will get the value 
 * of
 * @gateway (if non-%NULL). In all of the other addresses, that field wil
 * l be 0.
 */
export function utils_ip4_addresses_to_variant(addresses: IPAddress[], gateway: string | null): GLib.Variant;
/**
 * Utility function to convert a #GVariant of type 'au' representing a li
 * st of
 * IPv4 addresses into an array of IP address strings.
 */
export function utils_ip4_dns_from_variant(value: GLib.Variant): string;
/**
 * Utility function to convert an array of IP address strings int a #GVar
 * iant of
 * type 'au' representing an array of IPv4 addresses.
 */
export function utils_ip4_dns_to_variant(dns: string): GLib.Variant;
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
 * Utility function to convert a #GVariant of type 'aau' representing an 
 * array
 * of NetworkManager IPv4 routes (which are tuples of route, prefix, next
 *  hop,
 * and metric) into a #GPtrArray of #NMIPRoute objects.
 */
export function utils_ip4_routes_from_variant(value: GLib.Variant): IPRoute[];
/**
 * Utility function to convert a #GPtrArray of #NMIPRoute objects represe
 * nting
 * IPv4 routes into a #GVariant of type 'aau' representing an array of
 * NetworkManager IPv4 routes (which are tuples of route, prefix, next ho
 * p, and
 * metric).
 */
export function utils_ip4_routes_to_variant(routes: IPRoute[]): GLib.Variant;
/**
 * Utility function to convert a #GVariant of type 'a(ayuay)' representin
 * g a
 * list of NetworkManager IPv6 addresses (which are tuples of address, pr
 * efix,
 * and gateway) into a #GPtrArray of #NMIPAddress objects. The "gateway" 
 * field
 * of the first address (if set) will be returned in @out_gateway; the "g
 * ateway"
 * fields of the other addresses are ignored.
 */
export function utils_ip6_addresses_from_variant(value: GLib.Variant): [IPAddress[], string | null];
/**
 * Utility function to convert a #GPtrArray of #NMIPAddress objects repre
 * senting
 * IPv6 addresses into a #GVariant of type 'a(ayuay)' representing an arr
 * ay of
 * NetworkManager IPv6 addresses (which are tuples of address, prefix, an
 * d
 * gateway).  The "gateway" field of the first address will get the value
 *  of
 * @gateway (if non-%NULL). In all of the other addresses, that field wil
 * l be
 * all 0s.
 */
export function utils_ip6_addresses_to_variant(addresses: IPAddress[], gateway: string | null): GLib.Variant;
/**
 * Utility function to convert a #GVariant of type 'aay' representing a l
 * ist of
 * IPv6 addresses into an array of IP address strings.
 */
export function utils_ip6_dns_from_variant(value: GLib.Variant): string;
/**
 * Utility function to convert an array of IP address strings int a #GVar
 * iant of
 * type 'aay' representing an array of IPv6 addresses.
 */
export function utils_ip6_dns_to_variant(dns: string): GLib.Variant;
/**
 * Utility function to convert a #GVariant of type 'a(ayuayu)' representi
 * ng an
 * array of NetworkManager IPv6 routes (which are tuples of route, prefix
 * , next
 * hop, and metric) into a #GPtrArray of #NMIPRoute objects.
 */
export function utils_ip6_routes_from_variant(value: GLib.Variant): IPRoute[];
/**
 * Utility function to convert a #GPtrArray of #NMIPRoute objects represe
 * nting
 * IPv6 routes into a #GVariant of type 'a(ayuayu)' representing an array
 *  of
 * NetworkManager IPv6 routes (which are tuples of route, prefix, next ho
 * p, and
 * metric).
 */
export function utils_ip6_routes_to_variant(routes: IPRoute[]): GLib.Variant;
/**
 * Utility function to convert a #GVariant representing a list of new-sty
 * le
 * NetworkManager IPv4 or IPv6 addresses (as described in the documentati
 * on for
 * nm_utils_ip_addresses_to_variant()) into a #GPtrArray of #NMIPAddress
 * objects.
 */
export function utils_ip_addresses_from_variant(value: GLib.Variant, family: number): IPAddress[];
/**
 * Utility function to convert a #GPtrArray of #NMIPAddress objects repre
 * senting
 * IPv4 or IPv6 addresses into a #GVariant of type 'aa{sv}' representing 
 * an
 * array of new-style NetworkManager IP addresses. All addresses will inc
 * lude
 * "address" (an IP address string), and "prefix" (a uint). Some addresse
 * s may
 * include additional attributes.
 */
export function utils_ip_addresses_to_variant(addresses: IPAddress[]): GLib.Variant;
/**
 * Utility function to convert a #GVariant representing a list of new-sty
 * le
 * NetworkManager IPv4 or IPv6 addresses (which are tuples of destination
 * ,
 * prefix, next hop, metric, and additional attributes) into a #GPtrArray
 *  of
 * #NMIPRoute objects.
 */
export function utils_ip_routes_from_variant(value: GLib.Variant, family: number): IPRoute[];
/**
 * Utility function to convert a #GPtrArray of #NMIPRoute objects represe
 * nting
 * IPv4 or IPv6 routes into a #GVariant of type 'aa{sv}' representing an 
 * array
 * of new-style NetworkManager IP routes (which are tuples of destination
 * ,
 * prefix, next hop, metric, and additional attributes).
 */
export function utils_ip_routes_to_variant(routes: IPRoute[]): GLib.Variant;
/**
 * Checks if @ip contains a valid IP address of the given family.
 */
export function utils_ipaddr_valid(family: number, ip: string): boolean;
/**
 * Different manufacturers use different mechanisms for not broadcasting 
 * the
 * AP's SSID.  This function attempts to detect blank/empty SSIDs using a
 * number of known SSID-cloaking methods.
 */
export function utils_is_empty_ssid(ssid: number[], len: number): boolean;
/**
 * 
 */
export function utils_is_json_object(str: string): boolean;
/**
 * Checks if @str is a UUID
 */
export function utils_is_uuid(str: string | null): boolean;
/**
 * Validate the network interface name.
 * This function is a 1:1 copy of the kernel's interface validation
 * function in net/core/dev.c.
 */
export function utils_is_valid_iface_name(name: string | null): boolean;
/**
 * Parse attributes from a string.
 */
export function utils_parse_variant_attributes(string: string, attr_separator: number, key_value_separator: number, ignore_unknown: boolean, spec: VariantAttributeSpec): GLib.HashTable;
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
export function utils_same_ssid(ssid1: number[], len1: number, ssid2: number[], len2: number, ignore_trailing_null: boolean): boolean;
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
 * Converts a string to a SR-IOV virtual function object.
 */
export function utils_sriov_vf_from_str(str: string): SriovVF;
/**
 * Converts a SR-IOV virtual function object to its string representation
 * .
 */
export function utils_sriov_vf_to_str(vf: SriovVF, omit_index: boolean): string;
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
export function utils_ssid_to_utf8(ssid: number[], len: number): string;
/**
 * Parses the tc style string action representation of the queueing
 * discipline to a %NMTCAction instance. Supports a subset of the tc lang
 * uage.
 */
export function utils_tc_action_from_str(str: string): TCAction;
/**
 * Turns the %NMTCAction into a tc style string representation of the que
 * ueing
 * discipline.
 */
export function utils_tc_action_to_str(action: TCAction): string;
/**
 * Parses the tc style string qdisc representation of the queueing
 * discipline to a %NMTCQdisc instance. Supports a subset of the tc langu
 * age.
 */
export function utils_tc_qdisc_from_str(str: string): TCQdisc;
/**
 * Turns the %NMTCQdisc into a tc style string representation of the queu
 * eing
 * discipline.
 */
export function utils_tc_qdisc_to_str(qdisc: TCQdisc): string;
/**
 * Parses the tc style string tfilter representation of the queueing
 * discipline to a %NMTCTfilter instance. Supports a subset of the tc lan
 * guage.
 */
export function utils_tc_tfilter_from_str(str: string): TCTfilter;
/**
 * Turns the %NMTCTfilter into a tc style string representation of the qu
 * eueing
 * discipline.
 */
export function utils_tc_tfilter_to_str(tfilter: TCTfilter): string;
/**
 * 
 */
export function utils_uuid_generate(): string;
/**
 * 
 */
export function utils_version(): number;
/**
 * Checks if @key is a valid WEP key
 */
export function utils_wep_key_valid(key: string, wep_type: WepKeyType): boolean;
/**
 * Utility function to return 2.4 GHz Wi-Fi frequencies (802.11bg band).
 */
export function utils_wifi_2ghz_freqs(): number;
/**
 * Utility function to return 5 GHz Wi-Fi frequencies (802.11a band).
 */
export function utils_wifi_5ghz_freqs(): number;
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
 * Converts @strength into a 4-character-wide graphical representation of
 * strength suitable for printing to stdout.
 * Previous versions used to take a guess at the terminal type and possib
 * ly
 * return a wide UTF-8 encoded string. Now it always returns a 7-bit
 * clean strings of one to 0 to 4 asterisks. Users that actually need
 * the functionality are encouraged to make their implementations instead
 * .
 */
export function utils_wifi_strength_bars(strength: number): string;
/**
 * Checks if @psk is a valid WPA PSK
 */
export function utils_wpa_psk_valid(psk: string): boolean;
/**
 * Load the shared library @plugin_name and create a new
 * #NMVpnEditorPlugin instance via the #NMVpnEditorPluginFactory
 * function.
 * This is similar to nm_vpn_editor_plugin_load_from_file(), but
 * it does no validation of the plugin name, instead passes it directly
 * to dlopen(). If you have the full path to a plugin file,
 * nm_vpn_editor_plugin_load_from_file() is preferred.
 */
export function vpn_editor_plugin_load(plugin_name: string, check_service: string): VpnEditorPlugin;
/**
 * Load the shared library @plugin_name and create a new
 * #NMVpnEditorPlugin instance via the #NMVpnEditorPluginFactory
 * function.
 * If @plugin_name is not an absolute path name, it assumes the file
 * is in the plugin directory of NetworkManager. In any case, the call
 * will do certain checks on the file before passing it to dlopen.
 * A consequence for that is, that you cannot omit the ".so" suffix
 * as you could for nm_vpn_editor_plugin_load().
 */
export function vpn_editor_plugin_load_from_file(plugin_name: string, check_service: string, check_owner: number, check_file: UtilsCheckFilePredicate, user_data: object | null): VpnEditorPlugin;
/**
 * 
 */
export function vpn_plugin_error_quark(): GLib.Quark;
export enum Gjs_80211Mode {
    UNKNOWN = 0,
    ADHOC = 1,
    INFRA = 2,
    AP = 3,
    MESH = 4,
}
export enum ActiveConnectionState {
    UNKNOWN = 0,
    ACTIVATING = 1,
    ACTIVATED = 2,
    DEACTIVATING = 3,
    DEACTIVATED = 4,
}
export enum ActiveConnectionStateReason {
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
    DEPENDENCY_FAILED = 12,
    DEVICE_REALIZE_FAILED = 13,
    DEVICE_REMOVED = 14,
}
export enum AgentManagerError {
    FAILED = 0,
    PERMISSIONDENIED = 1,
    INVALIDIDENTIFIER = 2,
    NOTREGISTERED = 3,
    NOSECRETS = 4,
    USERCANCELED = 5,
}
export enum Capability {
    TEAM = 1,
}
export enum ClientError {
    FAILED = 0,
    MANAGER_NOT_RUNNING = 1,
    OBJECT_CREATION_FAILED = 2,
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
    ENABLE_DISABLE_CONNECTIVITY_CHECK = 16,
    WIFI_SCAN = 17,
    LAST = 17,
}
export enum ClientPermissionResult {
    UNKNOWN = 0,
    YES = 1,
    AUTH = 2,
    NO = 3,
}
export enum ConnectionError {
    FAILED = 0,
    SETTINGNOTFOUND = 1,
    PROPERTYNOTFOUND = 2,
    PROPERTYNOTSECRET = 3,
    MISSINGSETTING = 4,
    INVALIDSETTING = 5,
    MISSINGPROPERTY = 6,
    INVALIDPROPERTY = 7,
}
export enum ConnectionMultiConnect {
    DEFAULT = 0,
    SINGLE = 1,
    MANUAL_MULTIPLE = 2,
    MULTIPLE = 3,
}
export enum ConnectivityState {
    UNKNOWN = 0,
    NONE = 1,
    PORTAL = 2,
    LIMITED = 3,
    FULL = 4,
}
export enum CryptoError {
    FAILED = 0,
    INVALID_DATA = 1,
    INVALID_PASSWORD = 2,
    UNKNOWN_CIPHER = 3,
    DECRYPTION_FAILED = 4,
    ENCRYPTION_FAILED = 5,
}
export enum DeviceError {
    FAILED = 0,
    CREATIONFAILED = 1,
    INVALIDCONNECTION = 2,
    INCOMPATIBLECONNECTION = 3,
    NOTACTIVE = 4,
    NOTSOFTWARE = 5,
    NOTALLOWED = 6,
    SPECIFICOBJECTNOTFOUND = 7,
    VERSIONIDMISMATCH = 8,
    MISSINGDEPENDENCIES = 9,
    INVALIDARGUMENT = 10,
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
    OVSDB_FAILED = 63,
    IP_ADDRESS_DUPLICATE = 64,
    IP_METHOD_UNSUPPORTED = 65,
    SRIOV_CONFIGURATION_FAILED = 66,
    PEER_NOT_FOUND = 67,
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
    MACSEC = 21,
    DUMMY = 22,
    PPP = 23,
    OVS_INTERFACE = 24,
    OVS_PORT = 25,
    OVS_BRIDGE = 26,
    WPAN = 27,
    "6LOWPAN" = 28,
    WIREGUARD = 29,
    WIFI_P2P = 30,
}
export enum IPTunnelMode {
    UNKNOWN = 0,
    IPIP = 1,
    GRE = 2,
    SIT = 3,
    ISATAP = 4,
    VTI = 5,
    IP6IP6 = 6,
    IPIP6 = 7,
    IP6GRE = 8,
    VTI6 = 9,
    GRETAP = 10,
    IP6GRETAP = 11,
}
export enum ManagerError {
    FAILED = 0,
    PERMISSIONDENIED = 1,
    UNKNOWNCONNECTION = 2,
    UNKNOWNDEVICE = 3,
    CONNECTIONNOTAVAILABLE = 4,
    CONNECTIONNOTACTIVE = 5,
    CONNECTIONALREADYACTIVE = 6,
    DEPENDENCYFAILED = 7,
    ALREADYASLEEPORAWAKE = 8,
    ALREADYENABLEDORDISABLED = 9,
    UNKNOWNLOGLEVEL = 10,
    UNKNOWNLOGDOMAIN = 11,
    INVALIDARGUMENTS = 12,
    MISSINGPLUGIN = 13,
}
export enum Metered {
    UNKNOWN = 0,
    YES = 1,
    NO = 2,
    GUESS_YES = 3,
    GUESS_NO = 4,
}
export enum RollbackResult {
    OK = 0,
    ERR_NO_DEVICE = 1,
    ERR_DEVICE_UNMANAGED = 2,
    ERR_FAILED = 3,
}
export enum SecretAgentError {
    FAILED = 0,
    PERMISSIONDENIED = 1,
    INVALIDCONNECTION = 2,
    USERCANCELED = 3,
    AGENTCANCELED = 4,
    NOSECRETS = 5,
}
export enum Setting8021xAuthFlags {
    NONE = 0,
    TLS_1_0_DISABLE = 1,
    TLS_1_1_DISABLE = 2,
    TLS_1_2_DISABLE = 4,
    ALL = 7,
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
    PKCS11 = 3,
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
    IGNORE_TIMESTAMP = 128,
}
export enum SettingConnectionAutoconnectSlaves {
    DEFAULT = -1,
    NO = 0,
    YES = 1,
}
export enum SettingConnectionLldp {
    DEFAULT = -1,
    DISABLE = 0,
    ENABLE_RX = 1,
}
export enum SettingConnectionLlmnr {
    DEFAULT = -1,
    NO = 0,
    RESOLVE = 1,
    YES = 2,
}
export enum SettingConnectionMdns {
    DEFAULT = -1,
    NO = 0,
    RESOLVE = 1,
    YES = 2,
}
export enum SettingDiffResult {
    UNKNOWN = 0,
    IN_A = 1,
    IN_B = 2,
    IN_A_DEFAULT = 4,
    IN_B_DEFAULT = 8,
}
export enum SettingIP6ConfigAddrGenMode {
    EUI64 = 0,
    STABLE_PRIVACY = 1,
}
export enum SettingIP6ConfigPrivacy {
    UNKNOWN = -1,
    DISABLED = 0,
    PREFER_PUBLIC_ADDR = 1,
    PREFER_TEMP_ADDR = 2,
}
export enum SettingMacRandomization {
    DEFAULT = 0,
    NEVER = 1,
    ALWAYS = 2,
}
export enum SettingMacsecMode {
    PSK = 0,
    EAP = 1,
}
export enum SettingMacsecValidation {
    DISABLE = 0,
    CHECK = 1,
    STRICT = 2,
}
export enum SettingMacvlanMode {
    UNKNOWN = 0,
    VEPA = 1,
    BRIDGE = 2,
    PRIVATE = 3,
    PASSTHRU = 4,
    SOURCE = 5,
}
export enum SettingProxyMethod {
    NONE = 0,
    AUTO = 1,
}
export enum SettingSerialParity {
    NONE = 0,
    EVEN = 1,
    ODD = 2,
}
export enum SettingTunMode {
    UNKNOWN = 0,
    TUN = 1,
    TAP = 2,
}
export enum SettingWirelessPowersave {
    DEFAULT = 0,
    IGNORE = 1,
    DISABLE = 2,
    ENABLE = 3,
}
export enum SettingWirelessSecurityFils {
    DEFAULT = 0,
    DISABLE = 1,
    OPTIONAL = 2,
    REQUIRED = 3,
}
export enum SettingWirelessSecurityPmf {
    DEFAULT = 0,
    DISABLE = 1,
    OPTIONAL = 2,
    REQUIRED = 3,
}
export enum SettingsError {
    FAILED = 0,
    PERMISSIONDENIED = 1,
    NOTSUPPORTED = 2,
    INVALIDCONNECTION = 3,
    READONLYCONNECTION = 4,
    UUIDEXISTS = 5,
    INVALIDHOSTNAME = 6,
    INVALIDARGUMENTS = 7,
}
export enum SriovVFVlanProtocol {
    "1Q" = 0,
    "1AD" = 1,
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
export enum Ternary {
    DEFAULT = -1,
    FALSE = 0,
    TRUE = 1,
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
export enum VlanPriorityMap {
    INGRESS_MAP = 0,
    EGRESS_MAP = 1,
}
export enum VpnConnectionState {
    UNKNOWN = 0,
    PREPARE = 1,
    NEED_AUTH = 2,
    CONNECT = 3,
    IP_CONFIG_GET = 4,
    ACTIVATED = 5,
    FAILED = 6,
    DISCONNECTED = 7,
}
export enum VpnConnectionStateReason {
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
export enum VpnPluginError {
    FAILED = 0,
    STARTINGINPROGRESS = 1,
    ALREADYSTARTED = 2,
    STOPPINGINPROGRESS = 3,
    ALREADYSTOPPED = 4,
    WRONGSTATE = 5,
    BADARGUMENTS = 6,
    LAUNCHFAILED = 7,
    INVALIDCONNECTION = 8,
    INTERACTIVENOTSUPPORTED = 9,
}
export enum VpnPluginFailure {
    LOGIN_FAILED = 0,
    CONNECT_FAILED = 1,
    BAD_IP_CONFIG = 2,
}
export enum VpnServiceState {
    UNKNOWN = 0,
    INIT = 1,
    SHUTDOWN = 2,
    STARTING = 3,
    STARTED = 4,
    STOPPING = 5,
    STOPPED = 6,
}
export enum WepKeyType {
    UNKNOWN = 0,
    KEY = 1,
    PASSPHRASE = 2,
}
export enum WimaxNspNetworkType {
    UNKNOWN = 0,
    HOME = 1,
    PARTNER = 2,
    ROAMING_PARTNER = 3,
}
export enum Gjs_80211ApFlags {
    NONE = 0,
    PRIVACY = 1,
    WPS = 2,
    WPS_PBC = 4,
    WPS_PIN = 8,
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
    KEY_MGMT_SAE = 1024,
}
export enum ActivationStateFlags {
    NONE = 0,
    IS_MASTER = 1,
    IS_SLAVE = 2,
    LAYER2_READY = 4,
    IP4_READY = 8,
    IP6_READY = 16,
    MASTER_HAS_SLAVES = 32,
    LIFETIME_BOUND_TO_PROFILE_VISIBILITY = 64,
}
export enum BluetoothCapabilities {
    NONE = 0,
    DUN = 1,
    NAP = 2,
}
export enum CheckpointCreateFlags {
    NONE = 0,
    DESTROY_ALL = 1,
    DELETE_NEW_CONNECTIONS = 2,
    DISCONNECT_NEW_DEVICES = 4,
    ALLOW_OVERLAPPING = 8,
}
export enum ConnectionSerializationFlags {
    ALL = 0,
    NO_SECRETS = 1,
    ONLY_SECRETS = 2,
    WITH_SECRETS_AGENT_OWNED = 4,
}
export enum DeviceCapabilities {
    NONE = 0,
    NM_SUPPORTED = 1,
    CARRIER_DETECT = 2,
    IS_SOFTWARE = 4,
    SRIOV = 8,
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
    MESH = 4096,
}
export enum IPRoutingRuleAsStringFlags {
    NONE = 0,
    AF_INET = 1,
    AF_INET6 = 2,
    VALIDATE = 4,
}
export enum IPTunnelFlags {
    NONE = 0,
    IP6_IGN_ENCAP_LIMIT = 1,
    IP6_USE_ORIG_TCLASS = 2,
    IP6_USE_ORIG_FLOWLABEL = 4,
    IP6_MIP6_DEV = 8,
    IP6_RCV_DSCP_COPY = 16,
    IP6_USE_ORIG_FWMARK = 32,
}
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
    WPS_PBC_ACTIVE = 8,
    ONLY_SYSTEM = 2147483648,
    NO_ERRORS = 1073741824,
}
export enum SettingDcbFlags {
    NONE = 0,
    ENABLE = 1,
    ADVERTISE = 2,
    WILLING = 4,
}
export enum SettingSecretFlags {
    NONE = 0,
    AGENT_OWNED = 1,
    NOT_SAVED = 2,
    NOT_REQUIRED = 4,
}
export enum SettingWiredWakeOnLan {
    PHY = 2,
    UNICAST = 4,
    MULTICAST = 8,
    BROADCAST = 16,
    ARP = 32,
    MAGIC = 64,
    DEFAULT = 1,
    IGNORE = 32768,
}
export enum SettingWirelessSecurityWpsMethod {
    DEFAULT = 0,
    DISABLED = 1,
    AUTO = 2,
    PBC = 4,
    PIN = 8,
}
export enum SettingWirelessWakeOnWLan {
    ANY = 2,
    DISCONNECT = 4,
    MAGIC = 8,
    GTK_REKEY_FAILURE = 16,
    EAP_IDENTITY_REQUEST = 32,
    "4WAY_HANDSHAKE" = 64,
    RFKILL_RELEASE = 128,
    TCP = 256,
    ALL = 510,
    DEFAULT = 1,
    IGNORE = 32768,
}
export enum SettingsAddConnection2Flags {
    NONE = 0,
    TO_DISK = 1,
    IN_MEMORY = 2,
    BLOCK_AUTOCONNECT = 32,
}
export enum SettingsConnectionFlags {
    NONE = 0,
    UNSAVED = 1,
    NM_GENERATED = 2,
    VOLATILE = 4,
}
export enum SettingsUpdate2Flags {
    NONE = 0,
    TO_DISK = 1,
    IN_MEMORY = 2,
    IN_MEMORY_DETACHED = 4,
    IN_MEMORY_ONLY = 8,
    VOLATILE = 16,
    BLOCK_AUTOCONNECT = 32,
    NO_REAPPLY = 64,
}
export enum TeamLinkWatcherArpPingFlags {
    VALIDATE_ACTIVE = 2,
    VALIDATE_INACTIVE = 4,
    SEND_ALWAYS = 8,
}
export enum VlanFlags {
    REORDER_HEADERS = 1,
    GVRP = 2,
    LOOSE_BINDING = 4,
    MVRP = 8,
}
export enum VpnEditorPluginCapability {
    NONE = 0,
    IMPORT = 1,
    EXPORT = 2,
    IPV6 = 4,
}
export class AccessPoint  {
    constructor(config?: properties);
    readonly bssid: string;
    readonly flags: Gjs_80211ApFlags;
    readonly frequency: number;
    readonly hw_address: string;
    readonly last_seen: number;
    readonly max_bitrate: number;
    readonly mode: Gjs_80211Mode;
    readonly rsn_flags: Gjs_80211ApSecurityFlags;
    readonly ssid: GLib.Bytes;
    readonly strength: number;
    readonly wpa_flags: Gjs_80211ApSecurityFlags;
    connection_valid(connection: Connection): boolean;
    filter_connections(connections: Connection[]): Connection[];
    get_bssid(): string;
    get_flags(): Gjs_80211ApFlags;
    get_frequency(): number;
    get_last_seen(): number;
    get_max_bitrate(): number;
    get_mode(): Gjs_80211Mode;
    get_rsn_flags(): Gjs_80211ApSecurityFlags;
    get_ssid(): GLib.Bytes;
    get_strength(): number;
    get_wpa_flags(): Gjs_80211ApSecurityFlags;
}
export class ActiveConnection  {
    constructor(config?: properties);
    readonly connection: RemoteConnection;
    readonly "default": boolean;
    readonly default6: boolean;
    readonly devices: Device[];
    readonly dhcp4_config: DhcpConfig;
    readonly dhcp6_config: DhcpConfig;
    readonly id: string;
    readonly ip4_config: IPConfig;
    readonly ip6_config: IPConfig;
    readonly master: Device;
    readonly specific_object_path: string;
    readonly state: ActiveConnectionState;
    readonly state_flags: number;
    readonly type: string;
    readonly uuid: string;
    readonly vpn: boolean;
    get_connection(): RemoteConnection;
    get_connection_type(): string;
    get_default(): boolean;
    get_default6(): boolean;
    get_devices(): Device[];
    get_dhcp4_config(): DhcpConfig;
    get_dhcp6_config(): DhcpConfig;
    get_id(): string;
    get_ip4_config(): IPConfig;
    get_ip6_config(): IPConfig;
    get_master(): Device;
    get_specific_object_path(): string;
    get_state(): ActiveConnectionState;
    get_state_flags(): ActivationStateFlags;
    get_state_reason(): ActiveConnectionStateReason;
    get_uuid(): string;
    get_vpn(): boolean;
}
export class Checkpoint  {
    constructor(config?: properties);
    readonly created: number;
    readonly devices: Device[];
    readonly rollback_timeout: number;
    get_created(): number;
    get_devices(): Device[];
    get_rollback_timeout(): number;
}
export class Client extends GObject.Object {
    constructor(config?: properties);
    readonly activating_connection: ActiveConnection;
    readonly active_connections: ActiveConnection[];
    readonly all_devices: Device[];
    readonly can_modify: boolean;
    readonly checkpoints: Checkpoint[];
    readonly connections: RemoteConnection[];
    readonly connectivity: ConnectivityState;
    readonly connectivity_check_available: boolean;
    connectivity_check_enabled: boolean;
    readonly devices: Device[];
    readonly dns_configuration: DnsEntry[];
    readonly dns_mode: string;
    readonly dns_rc_manager: string;
    readonly hostname: string;
    readonly metered: number;
    networking_enabled: boolean;
    readonly nm_running: boolean;
    readonly primary_connection: ActiveConnection;
    readonly startup: boolean;
    readonly state: State;
    readonly version: string;
    wimax_enabled: boolean;
    readonly wimax_hardware_enabled: boolean;
    wireless_enabled: boolean;
    readonly wireless_hardware_enabled: boolean;
    wwan_enabled: boolean;
    readonly wwan_hardware_enabled: boolean;static new_finish(result: Gio.AsyncResult): Client;
    activate_connection_async(connection: Connection | null, device: Device | null, specific_object: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    activate_connection_finish(result: Gio.AsyncResult): ActiveConnection;
    add_and_activate_connection2(partial: Connection | null, device: Device, specific_object: string | null, options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    add_and_activate_connection2_finish(result: Gio.AsyncResult, out_result: GLib.Variant | null): ActiveConnection;
    add_and_activate_connection_async(partial: Connection | null, device: Device, specific_object: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    add_and_activate_connection_finish(result: Gio.AsyncResult): ActiveConnection;
    add_connection2(settings: GLib.Variant, flags: SettingsAddConnection2Flags, args: GLib.Variant | null, ignore_out_result: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    add_connection2_finish(result: Gio.AsyncResult): [RemoteConnection, GLib.Variant | null];
    add_connection_async(connection: Connection, save_to_disk: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    add_connection_finish(result: Gio.AsyncResult): RemoteConnection;
    check_connectivity(cancellable: Gio.Cancellable | null): ConnectivityState;
    check_connectivity_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    check_connectivity_finish(result: Gio.AsyncResult): ConnectivityState;
    checkpoint_adjust_rollback_timeout(checkpoint_path: string, add_timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    checkpoint_adjust_rollback_timeout_finish(result: Gio.AsyncResult): boolean;
    checkpoint_create(devices: Device[], rollback_timeout: number, flags: CheckpointCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    checkpoint_create_finish(result: Gio.AsyncResult): Checkpoint;
    checkpoint_destroy(checkpoint_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    checkpoint_destroy_finish(result: Gio.AsyncResult): boolean;
    checkpoint_rollback(checkpoint_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    checkpoint_rollback_finish(result: Gio.AsyncResult): GLib.HashTable;
    connectivity_check_get_available(): boolean;
    connectivity_check_get_enabled(): boolean;
    connectivity_check_get_uri(): string;
    connectivity_check_set_enabled(enabled: boolean): void;
    deactivate_connection(active: ActiveConnection, cancellable: Gio.Cancellable | null): boolean;
    deactivate_connection_async(active: ActiveConnection, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    deactivate_connection_finish(result: Gio.AsyncResult): boolean;
    get_activating_connection(): ActiveConnection;
    get_active_connections(): ActiveConnection[];
    get_all_devices(): Device[];
    get_checkpoints(): Checkpoint[];
    get_connection_by_id(id: string): RemoteConnection;
    get_connection_by_path(path: string): RemoteConnection;
    get_connection_by_uuid(uuid: string): RemoteConnection;
    get_connections(): RemoteConnection[];
    get_connectivity(): ConnectivityState;
    get_device_by_iface(iface: string): Device;
    get_device_by_path(object_path: string): Device;
    get_devices(): Device[];
    get_dns_configuration(): DnsEntry[];
    get_dns_mode(): string;
    get_dns_rc_manager(): string;
    get_logging(level: string | null, domains: string | null): boolean;
    get_nm_running(): boolean;
    get_permission_result(permission: ClientPermission): ClientPermissionResult;
    get_primary_connection(): ActiveConnection;
    get_startup(): boolean;
    get_state(): State;
    get_version(): string;
    load_connections(filenames: string[], cancellable: Gio.Cancellable | null): [boolean, string];
    load_connections_async(filenames: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    load_connections_finish(result: Gio.AsyncResult): [boolean, string[]];
    networking_get_enabled(): boolean;
    networking_set_enabled(enabled: boolean): boolean;
    reload_connections(cancellable: Gio.Cancellable | null): boolean;
    reload_connections_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    reload_connections_finish(result: Gio.AsyncResult): boolean;
    save_hostname(hostname: string | null, cancellable: Gio.Cancellable | null): boolean;
    save_hostname_async(hostname: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    save_hostname_finish(result: Gio.AsyncResult): boolean;
    set_logging(level: string | null, domains: string | null): boolean;
    wimax_get_enabled(): boolean;
    wimax_hardware_get_enabled(): boolean;
    wimax_set_enabled(enabled: boolean): void;
    wireless_get_enabled(): boolean;
    wireless_hardware_get_enabled(): boolean;
    wireless_set_enabled(enabled: boolean): void;
    wwan_get_enabled(): boolean;
    wwan_hardware_get_enabled(): boolean;
    wwan_set_enabled(enabled: boolean): void;
    vfunc_any_device_added(device: Device): void;
    vfunc_any_device_removed(device: Device): void;
    vfunc_connection_added(connection: RemoteConnection): void;
    vfunc_connection_removed(connection: RemoteConnection): void;
    vfunc_device_added(device: Device): void;
    vfunc_device_removed(device: Device): void;
    vfunc_permission_changed(permission: ClientPermission, result: ClientPermissionResult): void;
    static new_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class Device  {
    constructor(config?: properties);
    readonly active_connection: ActiveConnection;
    autoconnect: boolean;
    readonly available_connections: RemoteConnection[];
    readonly capabilities: DeviceCapabilities;
    readonly device_type: DeviceType;
    readonly dhcp4_config: DhcpConfig;
    readonly dhcp6_config: DhcpConfig;
    readonly driver: string;
    readonly driver_version: string;
    readonly firmware_missing: boolean;
    readonly firmware_version: string;
    readonly "interface": string;
    readonly ip_interface: string;
    readonly ip4_config: IPConfig;
    readonly ip4_connectivity: ConnectivityState;
    readonly ip6_config: IPConfig;
    readonly ip6_connectivity: ConnectivityState;
    readonly lldp_neighbors: object[];
    readonly managed: boolean;
    readonly metered: number;
    readonly mtu: number;
    readonly nm_plugin_missing: boolean;
    readonly physical_port_id: string;
    readonly product: string;
    readonly real: boolean;
    readonly state: DeviceState;
    readonly state_reason: number;
    readonly udi: string;
    readonly vendor: string;
    connection_compatible(connection: Connection): boolean;
    connection_valid(connection: Connection): boolean;
    _delete(cancellable: Gio.Cancellable | null): boolean;
    delete_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    delete_finish(result: Gio.AsyncResult): boolean;
    disconnect(cancellable: Gio.Cancellable | null): boolean;
    disconnect_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    disconnect_finish(result: Gio.AsyncResult): boolean;
    filter_connections(connections: Connection[]): Connection[];
    get_active_connection(): ActiveConnection;
    get_applied_connection(flags: number, cancellable: Gio.Cancellable | null): [Connection, number | null];
    get_applied_connection_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_applied_connection_finish(result: Gio.AsyncResult): [Connection, number | null];
    get_autoconnect(): boolean;
    get_available_connections(): RemoteConnection[];
    get_capabilities(): DeviceCapabilities;
    get_connectivity(addr_family: number): ConnectivityState;
    get_description(): string;
    get_device_type(): DeviceType;
    get_dhcp4_config(): DhcpConfig;
    get_dhcp6_config(): DhcpConfig;
    get_driver(): string;
    get_driver_version(): string;
    get_firmware_missing(): boolean;
    get_firmware_version(): string;
    get_hw_address(): string;
    get_iface(): string;
    get_ip4_config(): IPConfig;
    get_ip6_config(): IPConfig;
    get_ip_iface(): string;
    get_lldp_neighbors(): LldpNeighbor[];
    get_managed(): boolean;
    get_metered(): Metered;
    get_mtu(): number;
    get_nm_plugin_missing(): boolean;
    get_physical_port_id(): string;
    get_product(): string;
    get_setting_type(): GType;
    get_state(): DeviceState;
    get_state_reason(): DeviceStateReason;
    get_type_description(): string;
    get_udi(): string;
    get_vendor(): string;
    is_real(): boolean;
    is_software(): boolean;
    reapply(connection: Connection | null, version_id: number, flags: number, cancellable: Gio.Cancellable | null): boolean;
    reapply_async(connection: Connection | null, version_id: number, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    reapply_finish(result: Gio.AsyncResult): boolean;
    set_autoconnect(autoconnect: boolean): void;
    set_managed(managed: boolean): void;
    static disambiguate_names(devices: Device[], num_devices: number): string[];
}
export class Device6Lowpan  {
    constructor(config?: properties);
    readonly hw_address: string;
    get_hw_address(): string;
    get_parent(): Device;
}
export class DeviceAdsl  {
    constructor(config?: properties);
    readonly carrier: boolean;
    get_carrier(): boolean;
}
export class DeviceBond  {
    constructor(config?: properties);
    readonly carrier: boolean;
    readonly hw_address: string;
    readonly slaves: Device[];
    get_carrier(): boolean;
    get_hw_address(): string;
    get_slaves(): Device[];
}
export class DeviceBridge  {
    constructor(config?: properties);
    readonly carrier: boolean;
    readonly hw_address: string;
    readonly slaves: Device[];
    get_carrier(): boolean;
    get_hw_address(): string;
    get_slaves(): Device[];
}
export class DeviceBt  {
    constructor(config?: properties);
    readonly bt_capabilities: BluetoothCapabilities;
    readonly hw_address: string;
    readonly name: string;
    get_capabilities(): BluetoothCapabilities;
    get_hw_address(): string;
    get_name(): string;
}
export class DeviceDummy  {
    constructor(config?: properties);
    readonly hw_address: string;
    get_hw_address(): string;
}
export class DeviceEthernet  {
    constructor(config?: properties);
    readonly carrier: boolean;
    readonly hw_address: string;
    readonly perm_hw_address: string;
    readonly s390_subchannels: string[];
    readonly speed: number;
    get_carrier(): boolean;
    get_hw_address(): string;
    get_permanent_hw_address(): string;
    get_s390_subchannels(): string[];
    get_speed(): number;
}
export class DeviceGeneric  {
    constructor(config?: properties);
    readonly hw_address: string;
    readonly type_description: string;
    get_hw_address(): string;
}
export class DeviceIPTunnel  {
    constructor(config?: properties);
    readonly encapsulation_limit: number;
    readonly flags: number;
    readonly flow_label: number;
    readonly input_key: string;
    readonly local: string;
    readonly mode: number;
    readonly output_key: string;
    readonly path_mtu_discovery: boolean;
    readonly remote: string;
    readonly tos: number;
    readonly ttl: number;
    get_encapsulation_limit(): number;
    get_flags(): IPTunnelFlags;
    get_flow_label(): number;
    get_input_key(): string;
    get_local(): string;
    get_mode(): IPTunnelMode;
    get_output_key(): string;
    get_parent(): Device;
    get_path_mtu_discovery(): boolean;
    get_remote(): string;
    get_tos(): number;
    get_ttl(): number;
}
export class DeviceInfiniband  {
    constructor(config?: properties);
    readonly carrier: boolean;
    readonly hw_address: string;
    get_carrier(): boolean;
    get_hw_address(): string;
}
export class DeviceMacsec  {
    constructor(config?: properties);
    readonly cipher_suite: number;
    readonly encoding_sa: number;
    readonly encrypt: boolean;
    readonly es: boolean;
    readonly hw_address: string;
    readonly icv_length: number;
    readonly include_sci: boolean;
    readonly protect: boolean;
    readonly replay_protect: boolean;
    readonly scb: boolean;
    readonly sci: number;
    readonly validation: string;
    readonly window: number;
    get_cipher_suite(): number;
    get_encoding_sa(): number;
    get_encrypt(): boolean;
    get_es(): boolean;
    get_hw_address(): string;
    get_icv_length(): number;
    get_include_sci(): boolean;
    get_parent(): Device;
    get_protect(): boolean;
    get_replay_protect(): boolean;
    get_scb(): boolean;
    get_sci(): number;
    get_validation(): string;
    get_window(): number;
}
export class DeviceMacvlan  {
    constructor(config?: properties);
    readonly hw_address: string;
    readonly mode: string;
    readonly no_promisc: boolean;
    readonly tap: boolean;
    get_hw_address(): string;
    get_mode(): string;
    get_no_promisc(): boolean;
    get_parent(): Device;
    get_tap(): boolean;
}
export class DeviceModem  {
    constructor(config?: properties);
    readonly apn: string;
    readonly current_capabilities: DeviceModemCapabilities;
    readonly device_id: string;
    readonly modem_capabilities: DeviceModemCapabilities;
    readonly operator_code: string;
    get_apn(): string;
    get_current_capabilities(): DeviceModemCapabilities;
    get_device_id(): string;
    get_modem_capabilities(): DeviceModemCapabilities;
    get_operator_code(): string;
}
export class DeviceOlpcMesh  {
    constructor(config?: properties);
    readonly active_channel: number;
    readonly companion: DeviceWifi;
    readonly hw_address: string;
    get_active_channel(): number;
    get_companion(): DeviceWifi;
    get_hw_address(): string;
}
export class DeviceOvsBridge  {
    constructor(config?: properties);
    get_slaves(): Device[];
}
export class DeviceOvsInterface  {
    constructor(config?: properties);
}
export class DeviceOvsPort  {
    constructor(config?: properties);
    get_slaves(): Device[];
}
export class DevicePpp  {
    constructor(config?: properties);
}
export class DeviceTeam  {
    constructor(config?: properties);
    readonly carrier: boolean;
    readonly config: string;
    readonly hw_address: string;
    readonly slaves: Device[];
    get_carrier(): boolean;
    get_config(): string;
    get_hw_address(): string;
    get_slaves(): Device[];
}
export class DeviceTun  {
    constructor(config?: properties);
    readonly group: number;
    readonly hw_address: string;
    readonly mode: string;
    readonly multi_queue: boolean;
    readonly no_pi: boolean;
    readonly owner: number;
    readonly vnet_hdr: boolean;
    get_group(): number;
    get_hw_address(): string;
    get_mode(): string;
    get_multi_queue(): boolean;
    get_no_pi(): boolean;
    get_owner(): number;
    get_vnet_hdr(): boolean;
}
export class DeviceVlan  {
    constructor(config?: properties);
    readonly carrier: boolean;
    readonly hw_address: string;
    readonly vlan_id: number;
    get_carrier(): boolean;
    get_hw_address(): string;
    get_parent(): Device;
    get_vlan_id(): number;
}
export class DeviceVxlan  {
    constructor(config?: properties);
    readonly ageing: number;
    readonly carrier: boolean;
    readonly dst_port: number;
    readonly group: string;
    readonly hw_address: string;
    readonly id: number;
    readonly l2miss: boolean;
    readonly l3miss: boolean;
    readonly learning: boolean;
    readonly limit: number;
    readonly local: string;
    readonly proxy: boolean;
    readonly rsc: boolean;
    readonly src_port_max: number;
    readonly src_port_min: number;
    readonly tos: number;
    readonly ttl: number;
    get_ageing(): number;
    get_carrier(): boolean;
    get_dst_port(): number;
    get_group(): string;
    get_hw_address(): string;
    get_id(): number;
    get_l2miss(): boolean;
    get_l3miss(): boolean;
    get_learning(): boolean;
    get_limit(): number;
    get_local(): string;
    get_parent(): Device;
    get_proxy(): boolean;
    get_rsc(): boolean;
    get_src_port_max(): number;
    get_src_port_min(): number;
    get_tos(): number;
    get_ttl(): number;
}
export class DeviceWifi  {
    constructor(config?: properties);
    readonly access_points: AccessPoint[];
    readonly active_access_point: AccessPoint;
    readonly bitrate: number;
    readonly hw_address: string;
    readonly last_scan: number;
    readonly mode: Gjs_80211Mode;
    readonly perm_hw_address: string;
    readonly wireless_capabilities: DeviceWifiCapabilities;
    get_access_point_by_path(path: string): AccessPoint;
    get_access_points(): AccessPoint[];
    get_active_access_point(): AccessPoint;
    get_bitrate(): number;
    get_capabilities(): DeviceWifiCapabilities;
    get_hw_address(): string;
    get_last_scan(): number;
    get_mode(): Gjs_80211Mode;
    get_permanent_hw_address(): string;
    request_scan(cancellable: Gio.Cancellable | null): boolean;
    request_scan_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    request_scan_finish(result: Gio.AsyncResult): boolean;
    request_scan_options(options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    request_scan_options_async(options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class DeviceWifiP2P  {
    constructor(config?: properties);
    readonly hw_address: string;
    readonly peers: WifiP2PPeer[];
    get_hw_address(): string;
    get_peer_by_path(path: string): WifiP2PPeer;
    get_peers(): WifiP2PPeer[];
    start_find(options: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    start_find_finish(result: Gio.AsyncResult): boolean;
    stop_find(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    stop_find_finish(result: Gio.AsyncResult): boolean;
}
export class DeviceWimax  {
    constructor(config?: properties);
    readonly active_nsp: WimaxNsp;
    readonly bsid: string;
    readonly center_frequency: number;
    readonly cinr: number;
    readonly hw_address: string;
    readonly nsps: WimaxNsp[];
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
}
export class DeviceWireGuard  {
    constructor(config?: properties);
    readonly fwmark: number;
    readonly listen_port: number;
    readonly public_key: GLib.Bytes;
    get_fwmark(): number;
    get_listen_port(): number;
    get_public_key(): GLib.Bytes;
}
export class DeviceWpan  {
    constructor(config?: properties);
    readonly hw_address: string;
    get_hw_address(): string;
}
export class DhcpConfig  {
    constructor(config?: properties);
    readonly family: number;
    readonly options: GLib.HashTable;
    get_family(): number;
    get_one_option(option: string): string;
    get_options(): GLib.HashTable;
}
export class IPConfig  {
    constructor(config?: properties);
    readonly addresses: object[];
    readonly domains: string[];
    readonly family: number;
    readonly gateway: string;
    readonly nameservers: string[];
    readonly routes: IPRoute[];
    readonly searches: string[];
    readonly wins_servers: string[];
    get_addresses(): IPAddress[];
    get_domains(): string[];
    get_family(): number;
    get_gateway(): string;
    get_nameservers(): string[];
    get_routes(): IPRoute[];
    get_searches(): string[];
    get_wins_servers(): string[];
}
export class Object  {
    constructor(config?: properties);
    readonly path: string;
    get_path(): string;
}
export class RemoteConnection  {
    constructor(config?: properties);
    readonly filename: string;
    readonly flags: number;
    readonly unsaved: boolean;
    readonly visible: boolean;
    commit_changes(save_to_disk: boolean, cancellable: Gio.Cancellable | null): boolean;
    commit_changes_async(save_to_disk: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    commit_changes_finish(result: Gio.AsyncResult): boolean;
    _delete(cancellable: Gio.Cancellable | null): boolean;
    delete_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    delete_finish(result: Gio.AsyncResult): boolean;
    get_filename(): string;
    get_flags(): SettingsConnectionFlags;
    get_secrets(setting_name: string, cancellable: Gio.Cancellable | null): GLib.Variant;
    get_secrets_async(setting_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_secrets_finish(result: Gio.AsyncResult): GLib.Variant;
    get_unsaved(): boolean;
    get_visible(): boolean;
    save(cancellable: Gio.Cancellable | null): boolean;
    save_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    save_finish(result: Gio.AsyncResult): boolean;
    update2(settings: GLib.Variant | null, flags: SettingsUpdate2Flags, args: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    update2_finish(result: Gio.AsyncResult): GLib.Variant;
}
export class SecretAgentOld  {
    constructor(config?: properties);
    auto_register: boolean;
    capabilities: SecretAgentCapabilities;
    identifier: string;
    readonly registered: boolean;
    delete_secrets(connection: Connection, callback: SecretAgentOldDeleteSecretsFunc, user_data: object | null): void;
    get_registered(): boolean;
    get_secrets(connection: Connection, setting_name: string, hints: string[], flags: SecretAgentGetSecretsFlags, callback: SecretAgentOldGetSecretsFunc, user_data: object | null): void;
    register(cancellable: Gio.Cancellable | null): boolean;
    register_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    register_finish(result: Gio.AsyncResult): boolean;
    save_secrets(connection: Connection, callback: SecretAgentOldSaveSecretsFunc, user_data: object | null): void;
    unregister(cancellable: Gio.Cancellable | null): boolean;
    unregister_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    unregister_finish(result: Gio.AsyncResult): boolean;
}
export class Setting  {
    constructor(config?: properties);
    readonly name: string;
    compare(b: Setting, flags: SettingCompareFlags): boolean;
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [boolean, GLib.HashTable];
    duplicate(): Setting;
    enumerate_values(func: SettingValueIterFn, user_data: object | null): void;
    get_dbus_property_type(property_name: string): GLib.VariantType;
    get_name(): string;
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean;
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean;
    to_string(): string;
    verify(connection: Connection | null): boolean;
    verify_secrets(connection: Connection | null): boolean;
    static lookup_type(name: string): GType;
}
export class Setting6Lowpan extends Setting {
    constructor(config?: properties);
    get_parent(): string;
}
export class Setting8021x extends Setting {
    constructor(config?: properties);
    altsubject_matches: string[];
    anonymous_identity: string;
    auth_timeout: number;
    ca_cert: GLib.Bytes;
    ca_cert_password: string;
    ca_cert_password_flags: SettingSecretFlags;
    ca_path: string;
    client_cert: GLib.Bytes;
    client_cert_password: string;
    client_cert_password_flags: SettingSecretFlags;
    domain_suffix_match: string;
    eap: string[];
    identity: string;
    pac_file: string;
    password: string;
    password_flags: SettingSecretFlags;
    password_raw: GLib.Bytes;
    password_raw_flags: SettingSecretFlags;
    phase1_auth_flags: number;
    phase1_fast_provisioning: string;
    phase1_peaplabel: string;
    phase1_peapver: string;
    phase2_altsubject_matches: string[];
    phase2_auth: string;
    phase2_autheap: string;
    phase2_ca_cert: GLib.Bytes;
    phase2_ca_cert_password: string;
    phase2_ca_cert_password_flags: SettingSecretFlags;
    phase2_ca_path: string;
    phase2_client_cert: GLib.Bytes;
    phase2_client_cert_password: string;
    phase2_client_cert_password_flags: SettingSecretFlags;
    phase2_domain_suffix_match: string;
    phase2_private_key: GLib.Bytes;
    phase2_private_key_password: string;
    phase2_private_key_password_flags: SettingSecretFlags;
    phase2_subject_match: string;
    pin: string;
    pin_flags: SettingSecretFlags;
    private_key: GLib.Bytes;
    private_key_password: string;
    private_key_password_flags: SettingSecretFlags;
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
    get_auth_timeout(): number;
    get_ca_cert_blob(): GLib.Bytes;
    get_ca_cert_password(): string;
    get_ca_cert_password_flags(): SettingSecretFlags;
    get_ca_cert_path(): string;
    get_ca_cert_scheme(): Setting8021xCKScheme;
    get_ca_cert_uri(): string;
    get_ca_path(): string;
    get_client_cert_blob(): GLib.Bytes;
    get_client_cert_password(): string;
    get_client_cert_password_flags(): SettingSecretFlags;
    get_client_cert_path(): string;
    get_client_cert_scheme(): Setting8021xCKScheme;
    get_client_cert_uri(): string;
    get_domain_suffix_match(): string;
    get_eap_method(i: number): string;
    get_identity(): string;
    get_num_altsubject_matches(): number;
    get_num_eap_methods(): number;
    get_num_phase2_altsubject_matches(): number;
    get_pac_file(): string;
    get_password(): string;
    get_password_flags(): SettingSecretFlags;
    get_password_raw(): GLib.Bytes;
    get_password_raw_flags(): SettingSecretFlags;
    get_phase1_auth_flags(): Setting8021xAuthFlags;
    get_phase1_fast_provisioning(): string;
    get_phase1_peaplabel(): string;
    get_phase1_peapver(): string;
    get_phase2_altsubject_match(i: number): string;
    get_phase2_auth(): string;
    get_phase2_autheap(): string;
    get_phase2_ca_cert_blob(): GLib.Bytes;
    get_phase2_ca_cert_password(): string;
    get_phase2_ca_cert_password_flags(): SettingSecretFlags;
    get_phase2_ca_cert_path(): string;
    get_phase2_ca_cert_scheme(): Setting8021xCKScheme;
    get_phase2_ca_cert_uri(): string;
    get_phase2_ca_path(): string;
    get_phase2_client_cert_blob(): GLib.Bytes;
    get_phase2_client_cert_password(): string;
    get_phase2_client_cert_password_flags(): SettingSecretFlags;
    get_phase2_client_cert_path(): string;
    get_phase2_client_cert_scheme(): Setting8021xCKScheme;
    get_phase2_client_cert_uri(): string;
    get_phase2_domain_suffix_match(): string;
    get_phase2_private_key_blob(): GLib.Bytes;
    get_phase2_private_key_format(): Setting8021xCKFormat;
    get_phase2_private_key_password(): string;
    get_phase2_private_key_password_flags(): SettingSecretFlags;
    get_phase2_private_key_path(): string;
    get_phase2_private_key_scheme(): Setting8021xCKScheme;
    get_phase2_private_key_uri(): string;
    get_phase2_subject_match(): string;
    get_pin(): string;
    get_pin_flags(): SettingSecretFlags;
    get_private_key_blob(): GLib.Bytes;
    get_private_key_format(): Setting8021xCKFormat;
    get_private_key_password(): string;
    get_private_key_password_flags(): SettingSecretFlags;
    get_private_key_path(): string;
    get_private_key_scheme(): Setting8021xCKScheme;
    get_private_key_uri(): string;
    get_subject_match(): string;
    get_system_ca_certs(): boolean;
    remove_altsubject_match(i: number): void;
    remove_altsubject_match_by_value(altsubject_match: string): boolean;
    remove_eap_method(i: number): void;
    remove_eap_method_by_value(eap: string): boolean;
    remove_phase2_altsubject_match(i: number): void;
    remove_phase2_altsubject_match_by_value(phase2_altsubject_match: string): boolean;
    set_ca_cert(value: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
    set_client_cert(value: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
    set_phase2_ca_cert(value: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
    set_phase2_client_cert(value: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
    set_phase2_private_key(value: string, password: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
    set_private_key(value: string, password: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean;
    static check_cert_scheme(pdata: object | null, length: number): Setting8021xCKScheme;
}
export class SettingAdsl extends Setting {
    constructor(config?: properties);
    encapsulation: string;
    password: string;
    password_flags: SettingSecretFlags;
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
export class SettingBluetooth extends Setting {
    constructor(config?: properties);
    bdaddr: string;
    type: string;
    get_bdaddr(): string;
    get_connection_type(): string;
}
export class SettingBond extends Setting {
    constructor(config?: properties);
    options: GLib.HashTable;
    add_option(name: string, value: string): boolean;
    get_num_options(): number;
    get_option(idx: number): [boolean, string,string];
    get_option_by_name(name: string): string;
    get_option_default(name: string): string;
    get_valid_options(): string[];
    remove_option(name: string): boolean;
    static validate_option(name: string, value: string): boolean;
}
export class SettingBridge extends Setting {
    constructor(config?: properties);
    ageing_time: number;
    forward_delay: number;
    group_forward_mask: number;
    hello_time: number;
    mac_address: string;
    max_age: number;
    multicast_snooping: boolean;
    priority: number;
    stp: boolean;
    vlan_default_pvid: number;
    vlan_filtering: boolean;
    vlans: BridgeVlan[];
    add_vlan(vlan: BridgeVlan): void;
    clear_vlans(): void;
    get_ageing_time(): number;
    get_forward_delay(): number;
    get_group_forward_mask(): number;
    get_hello_time(): number;
    get_mac_address(): string;
    get_max_age(): number;
    get_multicast_snooping(): boolean;
    get_num_vlans(): number;
    get_priority(): number;
    get_stp(): boolean;
    get_vlan(idx: number): BridgeVlan;
    get_vlan_default_pvid(): number;
    get_vlan_filtering(): boolean;
    remove_vlan(idx: number): void;
    remove_vlan_by_vid(vid_start: number, vid_end: number): boolean;
}
export class SettingBridgePort extends Setting {
    constructor(config?: properties);
    hairpin_mode: boolean;
    path_cost: number;
    priority: number;
    vlans: BridgeVlan[];
    add_vlan(vlan: BridgeVlan): void;
    clear_vlans(): void;
    get_hairpin_mode(): boolean;
    get_num_vlans(): number;
    get_path_cost(): number;
    get_priority(): number;
    get_vlan(idx: number): BridgeVlan;
    remove_vlan(idx: number): void;
    remove_vlan_by_vid(vid_start: number, vid_end: number): boolean;
}
export class SettingCdma extends Setting {
    constructor(config?: properties);
    mtu: number;
    number: string;
    password: string;
    password_flags: SettingSecretFlags;
    username: string;
    get_mtu(): number;
    get_number(): string;
    get_password(): string;
    get_password_flags(): SettingSecretFlags;
    get_username(): string;
}
export class SettingConnection extends Setting {
    constructor(config?: properties);
    auth_retries: number;
    autoconnect: boolean;
    autoconnect_priority: number;
    autoconnect_retries: number;
    autoconnect_slaves: SettingConnectionAutoconnectSlaves;
    gateway_ping_timeout: number;
    id: string;
    interface_name: string;
    lldp: number;
    llmnr: number;
    master: string;
    mdns: number;
    metered: Metered;
    multi_connect: number;
    permissions: string[];
    read_only: boolean;
    secondaries: string[];
    slave_type: string;
    stable_id: string;
    timestamp: number;
    type: string;
    uuid: string;
    wait_device_timeout: number;
    zone: string;
    add_permission(ptype: string, pitem: string, detail: string | null): boolean;
    add_secondary(sec_uuid: string): boolean;
    get_auth_retries(): number;
    get_autoconnect(): boolean;
    get_autoconnect_priority(): number;
    get_autoconnect_retries(): number;
    get_autoconnect_slaves(): SettingConnectionAutoconnectSlaves;
    get_connection_type(): string;
    get_gateway_ping_timeout(): number;
    get_id(): string;
    get_interface_name(): string;
    get_lldp(): SettingConnectionLldp;
    get_llmnr(): SettingConnectionLlmnr;
    get_master(): string;
    get_mdns(): SettingConnectionMdns;
    get_metered(): Metered;
    get_multi_connect(): ConnectionMultiConnect;
    get_num_permissions(): number;
    get_num_secondaries(): number;
    get_permission(idx: number, out_ptype: string, out_pitem: string, out_detail: string): boolean;
    get_read_only(): boolean;
    get_secondary(idx: number): string;
    get_slave_type(): string;
    get_stable_id(): string;
    get_timestamp(): number;
    get_uuid(): string;
    get_wait_device_timeout(): number;
    get_zone(): string;
    is_slave_type(type: string): boolean;
    permissions_user_allowed(uname: string): boolean;
    remove_permission(idx: number): void;
    remove_permission_by_value(ptype: string, pitem: string, detail: string | null): boolean;
    remove_secondary(idx: number): void;
    remove_secondary_by_value(sec_uuid: string): boolean;
}
export class SettingDcb extends Setting {
    constructor(config?: properties);
    app_fcoe_flags: SettingDcbFlags;
    app_fcoe_mode: string;
    app_fcoe_priority: number;
    app_fip_flags: SettingDcbFlags;
    app_fip_priority: number;
    app_iscsi_flags: SettingDcbFlags;
    app_iscsi_priority: number;
    priority_bandwidth: number[];
    priority_flow_control: boolean[];
    priority_flow_control_flags: SettingDcbFlags;
    priority_group_bandwidth: number[];
    priority_group_flags: SettingDcbFlags;
    priority_group_id: number[];
    priority_strict_bandwidth: boolean[];
    priority_traffic_class: number[];
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
export class SettingDummy extends Setting {
    constructor(config?: properties);
}
export class SettingEthtool extends Setting {
    constructor(config?: properties);
    clear_features(): void;
    get_feature(optname: string): Ternary;
    get_optnames(): [string[], number | null];
    set_feature(optname: string, value: Ternary): void;
}
export class SettingGeneric extends Setting {
    constructor(config?: properties);
}
export class SettingGsm extends Setting {
    constructor(config?: properties);
    apn: string;
    device_id: string;
    home_only: boolean;
    mtu: number;
    network_id: string;
    number: string;
    password: string;
    password_flags: SettingSecretFlags;
    pin: string;
    pin_flags: SettingSecretFlags;
    sim_id: string;
    sim_operator_id: string;
    username: string;
    get_apn(): string;
    get_device_id(): string;
    get_home_only(): boolean;
    get_mtu(): number;
    get_network_id(): string;
    get_number(): string;
    get_password(): string;
    get_password_flags(): SettingSecretFlags;
    get_pin(): string;
    get_pin_flags(): SettingSecretFlags;
    get_sim_id(): string;
    get_sim_operator_id(): string;
    get_username(): string;
}
export class SettingIP4Config extends SettingIPConfig {
    constructor(config?: properties);
    dhcp_client_id: string;
    dhcp_fqdn: string;
    get_dhcp_client_id(): string;
    get_dhcp_fqdn(): string;
}
export class SettingIP6Config extends SettingIPConfig {
    constructor(config?: properties);
    addr_gen_mode: number;
    dhcp_duid: string;
    ip6_privacy: SettingIP6ConfigPrivacy;
    token: string;
    get_addr_gen_mode(): SettingIP6ConfigAddrGenMode;
    get_dhcp_duid(): string;
    get_ip6_privacy(): SettingIP6ConfigPrivacy;
    get_token(): string;
}
export class SettingIPConfig  {
    constructor(config?: properties);
    addresses: IPAddress[];
    dad_timeout: number;
    dhcp_hostname: string;
    dhcp_send_hostname: boolean;
    dhcp_timeout: number;
    dns: string[];
    dns_options: string[];
    dns_priority: number;
    dns_search: string[];
    gateway: string;
    ignore_auto_dns: boolean;
    ignore_auto_routes: boolean;
    may_fail: boolean;
    method: string;
    never_default: boolean;
    route_metric: number;
    route_table: number;
    routes: IPRoute[];
    add_address(address: IPAddress): boolean;
    add_dns(dns: string): boolean;
    add_dns_option(dns_option: string): boolean;
    add_dns_search(dns_search: string): boolean;
    add_route(route: IPRoute): boolean;
    add_routing_rule(routing_rule: IPRoutingRule): void;
    clear_addresses(): void;
    clear_dns(): void;
    clear_dns_options(is_set: boolean): void;
    clear_dns_searches(): void;
    clear_routes(): void;
    clear_routing_rules(): void;
    get_address(idx: number): IPAddress;
    get_dad_timeout(): number;
    get_dhcp_hostname(): string;
    get_dhcp_send_hostname(): boolean;
    get_dhcp_timeout(): number;
    get_dns(idx: number): string;
    get_dns_option(idx: number): string;
    get_dns_priority(): number;
    get_dns_search(idx: number): string;
    get_gateway(): string;
    get_ignore_auto_dns(): boolean;
    get_ignore_auto_routes(): boolean;
    get_may_fail(): boolean;
    get_method(): string;
    get_never_default(): boolean;
    get_num_addresses(): number;
    get_num_dns(): number;
    get_num_dns_options(): number;
    get_num_dns_searches(): number;
    get_num_routes(): number;
    get_num_routing_rules(): number;
    get_route(idx: number): IPRoute;
    get_route_metric(): number;
    get_route_table(): number;
    get_routing_rule(idx: number): IPRoutingRule;
    has_dns_options(): boolean;
    next_valid_dns_option(idx: number): number;
    remove_address(idx: number): void;
    remove_address_by_value(address: IPAddress): boolean;
    remove_dns(idx: number): void;
    remove_dns_by_value(dns: string): boolean;
    remove_dns_option(idx: number): void;
    remove_dns_option_by_value(dns_option: string): boolean;
    remove_dns_search(idx: number): void;
    remove_dns_search_by_value(dns_search: string): boolean;
    remove_route(idx: number): void;
    remove_route_by_value(route: IPRoute): boolean;
    remove_routing_rule(idx: number): void;
}
export class SettingIPTunnel extends Setting {
    constructor(config?: properties);
    encapsulation_limit: number;
    flags: number;
    flow_label: number;
    input_key: string;
    local: string;
    mode: number;
    mtu: number;
    output_key: string;
    path_mtu_discovery: boolean;
    remote: string;
    tos: number;
    ttl: number;
    get_encapsulation_limit(): number;
    get_flags(): IPTunnelFlags;
    get_flow_label(): number;
    get_input_key(): string;
    get_local(): string;
    get_mode(): IPTunnelMode;
    get_mtu(): number;
    get_output_key(): string;
    get_parent(): string;
    get_path_mtu_discovery(): boolean;
    get_remote(): string;
    get_tos(): number;
    get_ttl(): number;
}
export class SettingInfiniband extends Setting {
    constructor(config?: properties);
    mac_address: string;
    mtu: number;
    p_key: number;
    transport_mode: string;
    get_mac_address(): string;
    get_mtu(): number;
    get_p_key(): number;
    get_parent(): string;
    get_transport_mode(): string;
    get_virtual_interface_name(): string;
}
export class SettingMacsec extends Setting {
    constructor(config?: properties);
    encrypt: boolean;
    mka_cak: string;
    mka_cak_flags: SettingSecretFlags;
    mka_ckn: string;
    mode: number;
    port: number;
    send_sci: boolean;
    validation: number;
    get_encrypt(): boolean;
    get_mka_cak(): string;
    get_mka_cak_flags(): SettingSecretFlags;
    get_mka_ckn(): string;
    get_mode(): SettingMacsecMode;
    get_parent(): string;
    get_port(): number;
    get_send_sci(): boolean;
    get_validation(): SettingMacsecValidation;
}
export class SettingMacvlan extends Setting {
    constructor(config?: properties);
    mode: number;
    promiscuous: boolean;
    tap: boolean;
    get_mode(): SettingMacvlanMode;
    get_parent(): string;
    get_promiscuous(): boolean;
    get_tap(): boolean;
}
export class SettingMatch extends Setting {
    constructor(config?: properties);
    interface_name: string[];
    add_interface_name(interface_name: string): void;
    clear_interface_names(): void;
    get_interface_name(idx: number): string;
    get_interface_names(length: number): string[];
    get_num_interface_names(): number;
    remove_interface_name(idx: number): void;
    remove_interface_name_by_value(interface_name: string): boolean;
}
export class SettingOlpcMesh extends Setting {
    constructor(config?: properties);
    channel: number;
    dhcp_anycast_address: string;
    ssid: GLib.Bytes;
    get_channel(): number;
    get_dhcp_anycast_address(): string;
    get_ssid(): GLib.Bytes;
}
export class SettingOvsBridge extends Setting {
    constructor(config?: properties);
    datapath_type: string;
    fail_mode: string;
    mcast_snooping_enable: boolean;
    rstp_enable: boolean;
    stp_enable: boolean;
    get_datapath_type(): string;
    get_fail_mode(): string;
    get_mcast_snooping_enable(): boolean;
    get_rstp_enable(): boolean;
    get_stp_enable(): boolean;
}
export class SettingOvsDpdk extends Setting {
    constructor(config?: properties);
    devargs: string;
    get_devargs(): string;
}
export class SettingOvsInterface extends Setting {
    constructor(config?: properties);
    type: string;
    get_interface_type(): string;
}
export class SettingOvsPatch extends Setting {
    constructor(config?: properties);
    peer: string;
    get_peer(): string;
}
export class SettingOvsPort extends Setting {
    constructor(config?: properties);
    bond_downdelay: number;
    bond_mode: string;
    bond_updelay: number;
    lacp: string;
    tag: number;
    vlan_mode: string;
    get_bond_downdelay(): number;
    get_bond_mode(): string;
    get_bond_updelay(): number;
    get_lacp(): string;
    get_tag(): number;
    get_vlan_mode(): string;
}
export class SettingPpp extends Setting {
    constructor(config?: properties);
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
export class SettingPppoe extends Setting {
    constructor(config?: properties);
    password: string;
    password_flags: SettingSecretFlags;
    service: string;
    username: string;
    get_parent(): string;
    get_password(): string;
    get_password_flags(): SettingSecretFlags;
    get_service(): string;
    get_username(): string;
}
export class SettingProxy extends Setting {
    constructor(config?: properties);
    browser_only: boolean;
    method: number;
    pac_script: string;
    pac_url: string;
    get_browser_only(): boolean;
    get_method(): SettingProxyMethod;
    get_pac_script(): string;
    get_pac_url(): string;
}
export class SettingSerial extends Setting {
    constructor(config?: properties);
    baud: number;
    bits: number;
    parity: SettingSerialParity;
    send_delay: number;
    stopbits: number;
    get_baud(): number;
    get_bits(): number;
    get_parity(): SettingSerialParity;
    get_send_delay(): number;
    get_stopbits(): number;
}
export class SettingSriov extends Setting {
    constructor(config?: properties);
    autoprobe_drivers: Ternary;
    total_vfs: number;
    vfs: SriovVF[];
    add_vf(vf: SriovVF): void;
    clear_vfs(): void;
    get_autoprobe_drivers(): Ternary;
    get_num_vfs(): number;
    get_total_vfs(): number;
    get_vf(idx: number): SriovVF;
    remove_vf(idx: number): void;
    remove_vf_by_index(index: number): boolean;
}
export class SettingTCConfig extends Setting {
    constructor(config?: properties);
    qdiscs: TCQdisc[];
    tfilters: TCTfilter[];
    add_qdisc(qdisc: TCQdisc): boolean;
    add_tfilter(tfilter: TCTfilter): boolean;
    clear_qdiscs(): void;
    clear_tfilters(): void;
    get_num_qdiscs(): number;
    get_num_tfilters(): number;
    get_qdisc(idx: number): TCQdisc;
    get_tfilter(idx: number): TCTfilter;
    remove_qdisc(idx: number): void;
    remove_qdisc_by_value(qdisc: TCQdisc): boolean;
    remove_tfilter(idx: number): void;
    remove_tfilter_by_value(tfilter: TCTfilter): boolean;
}
export class SettingTeam extends Setting {
    constructor(config?: properties);
    config: string;
    link_watchers: TeamLinkWatcher[];
    mcast_rejoin_count: number;
    mcast_rejoin_interval: number;
    notify_peers_count: number;
    notify_peers_interval: number;
    runner: string;
    runner_active: boolean;
    runner_agg_select_policy: string;
    runner_fast_rate: boolean;
    runner_hwaddr_policy: string;
    runner_min_ports: number;
    runner_sys_prio: number;
    runner_tx_balancer: string;
    runner_tx_balancer_interval: number;
    runner_tx_hash: string[];
    add_link_watcher(link_watcher: TeamLinkWatcher): boolean;
    add_runner_tx_hash(txhash: string): boolean;
    clear_link_watchers(): void;
    get_config(): string;
    get_link_watcher(idx: number): TeamLinkWatcher;
    get_mcast_rejoin_count(): number;
    get_mcast_rejoin_interval(): number;
    get_notify_peers_count(): number;
    get_notify_peers_interval(): number;
    get_num_link_watchers(): number;
    get_num_runner_tx_hash(): number;
    get_runner(): string;
    get_runner_active(): boolean;
    get_runner_agg_select_policy(): string;
    get_runner_fast_rate(): boolean;
    get_runner_hwaddr_policy(): string;
    get_runner_min_ports(): number;
    get_runner_sys_prio(): number;
    get_runner_tx_balancer(): string;
    get_runner_tx_balancer_interval(): number;
    get_runner_tx_hash(idx: number): string;
    remove_link_watcher(idx: number): void;
    remove_link_watcher_by_value(link_watcher: TeamLinkWatcher): boolean;
    remove_runner_tx_hash(idx: number): void;
    remove_runner_tx_hash_by_value(txhash: string): boolean;
}
export class SettingTeamPort extends Setting {
    constructor(config?: properties);
    config: string;
    lacp_key: number;
    lacp_prio: number;
    link_watchers: TeamLinkWatcher[];
    prio: number;
    queue_id: number;
    sticky: boolean;
    add_link_watcher(link_watcher: TeamLinkWatcher): boolean;
    clear_link_watchers(): void;
    get_config(): string;
    get_lacp_key(): number;
    get_lacp_prio(): number;
    get_link_watcher(idx: number): TeamLinkWatcher;
    get_num_link_watchers(): number;
    get_prio(): number;
    get_queue_id(): number;
    get_sticky(): boolean;
    remove_link_watcher(idx: number): void;
    remove_link_watcher_by_value(link_watcher: TeamLinkWatcher): boolean;
}
export class SettingTun extends Setting {
    constructor(config?: properties);
    group: string;
    mode: number;
    multi_queue: boolean;
    owner: string;
    pi: boolean;
    vnet_hdr: boolean;
    get_group(): string;
    get_mode(): SettingTunMode;
    get_multi_queue(): boolean;
    get_owner(): string;
    get_pi(): boolean;
    get_vnet_hdr(): boolean;
}
export class SettingUser extends Setting {
    constructor(config?: properties);
    data: GLib.HashTable;
    get_data(key: string): string;
    get_keys(): [string[], number];
    set_data(key: string, val: string | null): boolean;
    static check_key(key: string): boolean;
    static check_val(val: string): boolean;
}
export class SettingVlan extends Setting {
    constructor(config?: properties);
    egress_priority_map: string[];
    flags: VlanFlags;
    id: number;
    ingress_priority_map: string[];
    add_priority(map: VlanPriorityMap, from: number, to: number): boolean;
    add_priority_str(map: VlanPriorityMap, str: string): boolean;
    clear_priorities(map: VlanPriorityMap): void;
    get_flags(): number;
    get_id(): number;
    get_num_priorities(map: VlanPriorityMap): number;
    get_parent(): string;
    get_priority(map: VlanPriorityMap, idx: number): [boolean, number | null,number | null];
    remove_priority(map: VlanPriorityMap, idx: number): void;
    remove_priority_by_value(map: VlanPriorityMap, from: number, to: number): boolean;
    remove_priority_str_by_value(map: VlanPriorityMap, str: string): boolean;
}
export class SettingVpn extends Setting {
    constructor(config?: properties);
    data: GLib.HashTable;
    persistent: boolean;
    secrets: GLib.HashTable;
    service_type: string;
    timeout: number;
    user_name: string;
    add_data_item(key: string, item: string): void;
    add_secret(key: string, secret: string): void;
    foreach_data_item(func: VpnIterFunc, user_data: object | null): void;
    foreach_secret(func: VpnIterFunc, user_data: object | null): void;
    get_data_item(key: string): string;
    get_data_keys(): [string[], number | null];
    get_num_data_items(): number;
    get_num_secrets(): number;
    get_persistent(): boolean;
    get_secret(key: string): string;
    get_secret_keys(): [string[], number | null];
    get_service_type(): string;
    get_timeout(): number;
    get_user_name(): string;
    remove_data_item(key: string): boolean;
    remove_secret(key: string): boolean;
}
export class SettingVxlan extends Setting {
    constructor(config?: properties);
    ageing: number;
    destination_port: number;
    id: number;
    l2_miss: boolean;
    l3_miss: boolean;
    learning: boolean;
    limit: number;
    local: string;
    proxy: boolean;
    remote: string;
    rsc: boolean;
    source_port_max: number;
    source_port_min: number;
    tos: number;
    ttl: number;
    get_ageing(): number;
    get_destination_port(): number;
    get_id(): number;
    get_l2_miss(): boolean;
    get_l3_miss(): boolean;
    get_learning(): boolean;
    get_limit(): number;
    get_local(): string;
    get_parent(): string;
    get_proxy(): boolean;
    get_remote(): string;
    get_rsc(): boolean;
    get_source_port_max(): number;
    get_source_port_min(): number;
    get_tos(): number;
    get_ttl(): number;
}
export class SettingWifiP2P extends Setting {
    constructor(config?: properties);
    peer: string;
    wfd_ies: GLib.Bytes;
    wps_method: number;
    get_peer(): string;
    get_wfd_ies(): GLib.Bytes;
    get_wps_method(): SettingWirelessSecurityWpsMethod;
}
export class SettingWimax extends Setting {
    constructor(config?: properties);
    mac_address: string;
    network_name: string;
    get_mac_address(): string;
    get_network_name(): string;
}
export class SettingWireGuard extends Setting {
    constructor(config?: properties);
    fwmark: number;
    ip4_auto_default_route: Ternary;
    ip6_auto_default_route: Ternary;
    listen_port: number;
    mtu: number;
    peer_routes: boolean;
    private_key: string;
    private_key_flags: SettingSecretFlags;
    append_peer(peer: WireGuardPeer): void;
    clear_peers(): number;
    get_fwmark(): number;
    get_ip4_auto_default_route(): Ternary;
    get_ip6_auto_default_route(): Ternary;
    get_listen_port(): number;
    get_mtu(): number;
    get_peer(idx: number): WireGuardPeer;
    get_peer_by_public_key(public_key: string): [WireGuardPeer, number | null];
    get_peer_routes(): boolean;
    get_peers_len(): number;
    get_private_key(): string;
    get_private_key_flags(): SettingSecretFlags;
    remove_peer(idx: number): boolean;
    set_peer(peer: WireGuardPeer, idx: number): void;
}
export class SettingWired extends Setting {
    constructor(config?: properties);
    auto_negotiate: boolean;
    cloned_mac_address: string;
    duplex: string;
    generate_mac_address_mask: string;
    mac_address: string;
    mac_address_blacklist: string[];
    mtu: number;
    port: string;
    s390_nettype: string;
    s390_options: GLib.HashTable;
    s390_subchannels: string[];
    speed: number;
    wake_on_lan: number;
    wake_on_lan_password: string;
    add_mac_blacklist_item(mac: string): boolean;
    add_s390_option(key: string, value: string): boolean;
    clear_mac_blacklist_items(): void;
    get_auto_negotiate(): boolean;
    get_cloned_mac_address(): string;
    get_duplex(): string;
    get_generate_mac_address_mask(): string;
    get_mac_address(): string;
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
    get_wake_on_lan(): SettingWiredWakeOnLan;
    get_wake_on_lan_password(): string;
    remove_mac_blacklist_item(idx: number): void;
    remove_mac_blacklist_item_by_value(mac: string): boolean;
    remove_s390_option(key: string): boolean;
}
export class SettingWireless extends Setting {
    constructor(config?: properties);
    band: string;
    bssid: string;
    channel: number;
    cloned_mac_address: string;
    generate_mac_address_mask: string;
    hidden: boolean;
    mac_address: string;
    mac_address_blacklist: string[];
    mac_address_randomization: number;
    mode: string;
    mtu: number;
    powersave: number;
    rate: number;
    seen_bssids: string[];
    ssid: GLib.Bytes;
    tx_power: number;
    wake_on_wlan: number;
    add_mac_blacklist_item(mac: string): boolean;
    add_seen_bssid(bssid: string): boolean;
    ap_security_compatible(s_wireless_sec: SettingWirelessSecurity, ap_flags: Gjs_80211ApFlags, ap_wpa: Gjs_80211ApSecurityFlags, ap_rsn: Gjs_80211ApSecurityFlags, ap_mode: Gjs_80211Mode): boolean;
    clear_mac_blacklist_items(): void;
    get_band(): string;
    get_bssid(): string;
    get_channel(): number;
    get_cloned_mac_address(): string;
    get_generate_mac_address_mask(): string;
    get_hidden(): boolean;
    get_mac_address(): string;
    get_mac_address_blacklist(): string[];
    get_mac_address_randomization(): SettingMacRandomization;
    get_mac_blacklist_item(idx: number): string;
    get_mode(): string;
    get_mtu(): number;
    get_num_mac_blacklist_items(): number;
    get_num_seen_bssids(): number;
    get_powersave(): number;
    get_rate(): number;
    get_seen_bssid(i: number): string;
    get_ssid(): GLib.Bytes;
    get_tx_power(): number;
    get_wake_on_wlan(): SettingWirelessWakeOnWLan;
    remove_mac_blacklist_item(idx: number): void;
    remove_mac_blacklist_item_by_value(mac: string): boolean;
}
export class SettingWirelessSecurity extends Setting {
    constructor(config?: properties);
    auth_alg: string;
    fils: number;
    group: string[];
    key_mgmt: string;
    leap_password: string;
    leap_password_flags: SettingSecretFlags;
    leap_username: string;
    pairwise: string[];
    pmf: number;
    proto: string[];
    psk: string;
    psk_flags: SettingSecretFlags;
    wep_key_flags: SettingSecretFlags;
    wep_key_type: WepKeyType;
    wep_key0: string;
    wep_key1: string;
    wep_key2: string;
    wep_key3: string;
    wep_tx_keyidx: number;
    wps_method: number;
    add_group(group: string): boolean;
    add_pairwise(pairwise: string): boolean;
    add_proto(proto: string): boolean;
    clear_groups(): void;
    clear_pairwise(): void;
    clear_protos(): void;
    get_auth_alg(): string;
    get_fils(): SettingWirelessSecurityFils;
    get_group(i: number): string;
    get_key_mgmt(): string;
    get_leap_password(): string;
    get_leap_password_flags(): SettingSecretFlags;
    get_leap_username(): string;
    get_num_groups(): number;
    get_num_pairwise(): number;
    get_num_protos(): number;
    get_pairwise(i: number): string;
    get_pmf(): SettingWirelessSecurityPmf;
    get_proto(i: number): string;
    get_psk(): string;
    get_psk_flags(): SettingSecretFlags;
    get_wep_key(idx: number): string;
    get_wep_key_flags(): SettingSecretFlags;
    get_wep_key_type(): WepKeyType;
    get_wep_tx_keyidx(): number;
    get_wps_method(): SettingWirelessSecurityWpsMethod;
    remove_group(i: number): void;
    remove_group_by_value(group: string): boolean;
    remove_pairwise(i: number): void;
    remove_pairwise_by_value(pairwise: string): boolean;
    remove_proto(i: number): void;
    remove_proto_by_value(proto: string): boolean;
    set_wep_key(idx: number, key: string): void;
}
export class SettingWpan extends Setting {
    constructor(config?: properties);
    channel: number;
    mac_address: string;
    page: number;
    pan_id: number;
    short_address: number;
    get_channel(): number;
    get_mac_address(): string;
    get_page(): number;
    get_pan_id(): number;
    get_short_address(): number;
}
export class SimpleConnection  {
    constructor(config?: properties);
    static _new(): Connection;
    static new_clone(connection: Connection): Connection;
    static new_from_dbus(dict: GLib.Variant): Connection;
}
export class VpnConnection  {
    constructor(config?: properties);
    readonly banner: string;
    readonly vpn_state: VpnConnectionState;
    get_banner(): string;
    get_vpn_state(): VpnConnectionState;
}
export class VpnPluginInfo extends GObject.Object {
    constructor(config?: properties);
    filename: string;
    keyfile: GLib.KeyFile;
    readonly name: string;static new_from_file(filename: string): VpnPluginInfo;
    static new_search_file(name: string | null, service: string | null): VpnPluginInfo;
    static new_with_data(filename: string, keyfile: GLib.KeyFile): VpnPluginInfo;
    get_aliases(): string[];
    get_auth_dialog(): string;
    get_editor_plugin(): VpnEditorPlugin;
    get_filename(): string;
    get_name(): string;
    get_plugin(): string;
    get_program(): string;
    get_service(): string;
    load_editor_plugin(): VpnEditorPlugin;
    lookup_property(group: string, key: string): string;
    set_editor_plugin(plugin: VpnEditorPlugin | null): void;
    supports_hints(): boolean;
    supports_multiple(): boolean;
    static list_add(list: string[], plugin_info: VpnPluginInfo): boolean;
    static list_find_by_filename(list: string[], filename: string): VpnPluginInfo;
    static list_find_by_name(list: string[], name: string): VpnPluginInfo;
    static list_find_by_service(list: string[], service: string): VpnPluginInfo;
    static list_find_service_type(list: string[], name: string): string;
    static list_get_service_types(list: string[], only_existing: boolean, with_abbreviations: boolean): string[];
    static list_load(): string[];
    static list_remove(list: string[], plugin_info: VpnPluginInfo): boolean;
    static validate_filename(filename: string): boolean;
}
export class VpnPluginOld  {
    constructor(config?: properties);
    service_name: string;
    state: VpnServiceState;
    disconnect(): boolean;
    failure(reason: VpnPluginFailure): void;
    get_connection(): Gio.DBusConnection;
    get_state(): VpnServiceState;
    secrets_required(message: string, hints: string): void;
    set_config(config: GLib.Variant): void;
    set_ip4_config(ip4_config: GLib.Variant): void;
    set_ip6_config(ip6_config: GLib.Variant): void;
    set_login_banner(banner: string): void;
    set_state(state: VpnServiceState): void;
    static get_secret_flags(data: GLib.HashTable, secret_name: string): [boolean, SettingSecretFlags];
    static read_vpn_details(fd: number): [boolean, GLib.HashTable,GLib.HashTable];
}
export class VpnServicePlugin  {
    constructor(config?: properties);
    service_name: string;
    state: VpnServiceState;
    watch_peer: boolean;
    disconnect(): boolean;
    failure(reason: VpnPluginFailure): void;
    get_connection(): Gio.DBusConnection;
    secrets_required(message: string, hints: string): void;
    set_config(config: GLib.Variant): void;
    set_ip4_config(ip4_config: GLib.Variant): void;
    set_ip6_config(ip6_config: GLib.Variant): void;
    set_login_banner(banner: string): void;
    shutdown(): void;
    static get_secret_flags(data: GLib.HashTable, secret_name: string): [boolean, SettingSecretFlags];
    static read_vpn_details(fd: number): [boolean, GLib.HashTable,GLib.HashTable];
}
export class WifiP2PPeer  {
    constructor(config?: properties);
    readonly flags: Gjs_80211ApFlags;
    readonly hw_address: string;
    readonly last_seen: number;
    readonly manufacturer: string;
    readonly model: string;
    readonly model_number: string;
    readonly name: string;
    readonly serial: string;
    readonly strength: number;
    readonly wfd_ies: GLib.Bytes;
    connection_valid(connection: Connection): boolean;
    filter_connections(connections: Connection[]): Connection[];
    get_flags(): Gjs_80211ApFlags;
    get_hw_address(): string;
    get_last_seen(): number;
    get_manufacturer(): string;
    get_model(): string;
    get_model_number(): string;
    get_name(): string;
    get_serial(): string;
    get_strength(): number;
    get_wfd_ies(): GLib.Bytes;
}
export class WimaxNsp  {
    constructor(config?: properties);
    readonly name: string;
    readonly network_type: WimaxNspNetworkType;
    readonly signal_quality: number;
    connection_valid(connection: Connection): boolean;
    filter_connections(connections: Connection[]): Connection[];
    get_name(): string;
    get_network_type(): WimaxNspNetworkType;
    get_signal_quality(): number;
}
export class BridgeVlan  {
    constructor(config?: properties);
    cmp(b: BridgeVlan): number;
    get_vid_range(vid_start: number, vid_end: number): boolean;
    is_pvid(): boolean;
    is_sealed(): boolean;
    is_untagged(): boolean;
    new_clone(): BridgeVlan;
    ref(): BridgeVlan;
    seal(): void;
    set_pvid(value: boolean): void;
    set_untagged(value: boolean): void;
    to_str(): string;
    unref(): void;
    static from_str(str: string): BridgeVlan;
}
export class DnsEntry  {
    constructor(config?: properties);
    get_domains(): string[];
    get_interface(): string;
    get_nameservers(): string[];
    get_priority(): number;
    get_vpn(): boolean;
    unref(): void;
}
export class IPAddress  {
    constructor(config?: properties);
    static new_binary(family: number, addr: object | null, prefix: number): IPAddress;
    dup(): IPAddress;
    equal(other: IPAddress): boolean;
    get_address(): string;
    get_attribute(name: string): GLib.Variant;
    get_attribute_names(): string[];
    get_family(): number;
    get_prefix(): number;
    ref(): void;
    set_address(addr: string): void;
    set_attribute(name: string, value: GLib.Variant | null): void;
    set_prefix(prefix: number): void;
    unref(): void;
}
export class IPRoute  {
    constructor(config?: properties);
    static new_binary(family: number, dest: object | null, prefix: number, next_hop: object | null, metric: number): IPRoute;
    dup(): IPRoute;
    equal(other: IPRoute): boolean;
    equal_full(other: IPRoute, cmp_flags: number): boolean;
    get_attribute(name: string): GLib.Variant;
    get_attribute_names(): string[];
    get_dest(): string;
    get_family(): number;
    get_metric(): number;
    get_next_hop(): string;
    get_prefix(): number;
    ref(): void;
    set_attribute(name: string, value: GLib.Variant | null): void;
    set_dest(dest: string): void;
    set_metric(metric: number): void;
    set_next_hop(next_hop: string | null): void;
    set_prefix(prefix: number): void;
    unref(): void;
    static attribute_validate(name: string, value: GLib.Variant, family: number): [boolean, boolean];
    static get_variant_attribute_spec(): VariantAttributeSpec;
}
export class IPRoutingRule  {
    constructor(config?: properties);
    cmp(other: IPRoutingRule | null): number;
    get_action(): number;
    get_addr_family(): number;
    get_destination_port_end(): number;
    get_destination_port_start(): number;
    get_from(): string;
    get_from_len(): number;
    get_fwmark(): number;
    get_fwmask(): number;
    get_iifname(): string;
    get_invert(): boolean;
    get_ipproto(): number;
    get_oifname(): string;
    get_priority(): number;
    get_source_port_end(): number;
    get_source_port_start(): number;
    get_suppress_prefixlength(): number;
    get_table(): number;
    get_to(): string;
    get_to_len(): number;
    get_tos(): number;
    is_sealed(): boolean;
    new_clone(): IPRoutingRule;
    ref(): IPRoutingRule;
    seal(): void;
    set_action(action: number): void;
    set_destination_port(start: number, end: number): void;
    set_from(from: string | null, len: number): void;
    set_fwmark(fwmark: number, fwmask: number): void;
    set_iifname(iifname: string | null): void;
    set_invert(invert: boolean): void;
    set_ipproto(ipproto: number): void;
    set_oifname(oifname: string | null): void;
    set_priority(priority: number): void;
    set_source_port(start: number, end: number): void;
    set_suppress_prefixlength(suppress_prefixlength: number): void;
    set_table(table: number): void;
    set_to(to: string | null, len: number): void;
    set_tos(tos: number): void;
    to_string(to_string_flags: IPRoutingRuleAsStringFlags, extra_args: GLib.HashTable | null): string;
    unref(): void;
    validate(): boolean;
    static from_string(str: string, to_string_flags: IPRoutingRuleAsStringFlags, extra_args: GLib.HashTable | null): IPRoutingRule;
}
export class LldpNeighbor  {
    constructor(config?: properties);
    get_attr_names(): string[];
    get_attr_string_value(name: string): [boolean, string | null];
    get_attr_type(name: string): GLib.VariantType;
    get_attr_uint_value(name: string): [boolean, number | null];
    get_attr_value(name: string): GLib.Variant;
    ref(): void;
    unref(): void;
}
export class SriovVF  {
    constructor(config?: properties);
    add_vlan(vlan_id: number): boolean;
    dup(): SriovVF;
    equal(other: SriovVF): boolean;
    get_attribute(name: string): GLib.Variant;
    get_attribute_names(): string[];
    get_index(): number;
    get_vlan_ids(): [number, number | null];
    get_vlan_protocol(vlan_id: number): SriovVFVlanProtocol;
    get_vlan_qos(vlan_id: number): number;
    ref(): void;
    remove_vlan(vlan_id: number): boolean;
    set_attribute(name: string, value: GLib.Variant | null): void;
    set_vlan_protocol(vlan_id: number, protocol: SriovVFVlanProtocol): void;
    set_vlan_qos(vlan_id: number, qos: number): void;
    unref(): void;
    static attribute_validate(name: string, value: GLib.Variant): [boolean, boolean];
}
export class TCAction  {
    constructor(config?: properties);
    dup(): TCAction;
    equal(other: TCAction): boolean;
    get_attribute(name: string): GLib.Variant;
    get_attribute_names(): string[];
    get_kind(): string;
    ref(): void;
    set_attribute(name: string, value: GLib.Variant | null): void;
    unref(): void;
}
export class TCQdisc  {
    constructor(config?: properties);
    dup(): TCQdisc;
    equal(other: TCQdisc): boolean;
    get_attribute(name: string): GLib.Variant;
    get_attribute_names(): string[];
    get_handle(): number;
    get_kind(): string;
    get_parent(): number;
    ref(): void;
    set_attribute(name: string, value: GLib.Variant | null): void;
    set_handle(handle: number): void;
    unref(): void;
}
export class TCTfilter  {
    constructor(config?: properties);
    dup(): TCTfilter;
    equal(other: TCTfilter): boolean;
    get_action(): TCAction;
    get_handle(): number;
    get_kind(): string;
    get_parent(): number;
    ref(): void;
    set_action(action: TCAction): void;
    set_handle(handle: number): void;
    unref(): void;
}
export class TeamLinkWatcher  {
    constructor(config?: properties);
    static new_arp_ping(init_wait: number, interval: number, missed_max: number, target_host: string, source_host: string, flags: TeamLinkWatcherArpPingFlags): TeamLinkWatcher;
    static new_arp_ping2(init_wait: number, interval: number, missed_max: number, vlanid: number, target_host: string, source_host: string, flags: TeamLinkWatcherArpPingFlags): TeamLinkWatcher;
    static new_ethtool(delay_up: number, delay_down: number): TeamLinkWatcher;
    static new_nsna_ping(init_wait: number, interval: number, missed_max: number, target_host: string): TeamLinkWatcher;
    dup(): TeamLinkWatcher;
    equal(other: TeamLinkWatcher): boolean;
    get_delay_down(): number;
    get_delay_up(): number;
    get_flags(): TeamLinkWatcherArpPingFlags;
    get_init_wait(): number;
    get_interval(): number;
    get_missed_max(): number;
    get_name(): string;
    get_source_host(): string;
    get_target_host(): string;
    get_vlanid(): number;
    ref(): void;
    unref(): void;
}
export class VariantAttributeSpec  {
    constructor(config?: properties);
}
export class VpnEditorPluginVT  {
    constructor(config?: properties);
}
export class WireGuardPeer  {
    constructor(config?: properties);
    append_allowed_ip(allowed_ip: string, accept_invalid: boolean): boolean;
    clear_allowed_ips(): void;
    cmp(b: WireGuardPeer | null, compare_flags: SettingCompareFlags): number;
    get_allowed_ip(idx: number, out_is_valid: boolean | null): string;
    get_allowed_ips_len(): number;
    get_endpoint(): string;
    get_persistent_keepalive(): number;
    get_preshared_key(): string;
    get_preshared_key_flags(): SettingSecretFlags;
    get_public_key(): string;
    is_sealed(): boolean;
    is_valid(check_non_secrets: boolean, check_secrets: boolean): boolean;
    new_clone(with_secrets: boolean): WireGuardPeer;
    ref(): WireGuardPeer;
    remove_allowed_ip(idx: number): boolean;
    seal(): void;
    set_endpoint(endpoint: string, allow_invalid: boolean): boolean;
    set_persistent_keepalive(persistent_keepalive: number): void;
    set_preshared_key(preshared_key: string | null, accept_invalid: boolean): boolean;
    set_preshared_key_flags(preshared_key_flags: SettingSecretFlags): void;
    set_public_key(public_key: string | null, accept_invalid: boolean): boolean;
    unref(): void;
}
export interface Connection  {
    add_setting(setting: Setting): void;
    clear_secrets(): void;
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn | null, user_data: object | null): void;
    clear_settings(): void;
    compare(b: Connection, flags: SettingCompareFlags): boolean;
    diff(b: Connection, flags: SettingCompareFlags, out_settings: GLib.HashTable): boolean;
    dump(): void;
    for_each_setting_value(func: SettingValueIterFn, user_data: object | null): void;
    get_connection_type(): string;
    get_id(): string;
    get_interface_name(): string;
    get_path(): string;
    get_setting(setting_type: GType): Setting;
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
    get_setting_dummy(): SettingDummy;
    get_setting_generic(): SettingGeneric;
    get_setting_gsm(): SettingGsm;
    get_setting_infiniband(): SettingInfiniband;
    get_setting_ip4_config(): SettingIP4Config;
    get_setting_ip6_config(): SettingIP6Config;
    get_setting_ip_tunnel(): SettingIPTunnel;
    get_setting_macsec(): SettingMacsec;
    get_setting_macvlan(): SettingMacvlan;
    get_setting_olpc_mesh(): SettingOlpcMesh;
    get_setting_ovs_bridge(): SettingOvsBridge;
    get_setting_ovs_interface(): SettingOvsInterface;
    get_setting_ovs_patch(): SettingOvsPatch;
    get_setting_ovs_port(): SettingOvsPort;
    get_setting_ppp(): SettingPpp;
    get_setting_pppoe(): SettingPppoe;
    get_setting_proxy(): SettingProxy;
    get_setting_serial(): SettingSerial;
    get_setting_tc_config(): SettingTCConfig;
    get_setting_team(): SettingTeam;
    get_setting_team_port(): SettingTeamPort;
    get_setting_tun(): SettingTun;
    get_setting_vlan(): SettingVlan;
    get_setting_vpn(): SettingVpn;
    get_setting_vxlan(): SettingVxlan;
    get_setting_wimax(): SettingWimax;
    get_setting_wired(): SettingWired;
    get_setting_wireless(): SettingWireless;
    get_setting_wireless_security(): SettingWirelessSecurity;
    get_settings(): [Setting[], number | null];
    get_uuid(): string;
    get_virtual_device_description(): string;
    is_type(type: string): boolean;
    is_virtual(): boolean;
    need_secrets(): [string, string[] | null];
    normalize(parameters: GLib.HashTable | null): [boolean, boolean | null];
    remove_setting(setting_type: GType): void;
    replace_settings(new_settings: GLib.Variant): boolean;
    replace_settings_from_connection(new_connection: Connection): void;
    set_path(path: string): void;
    to_dbus(flags: ConnectionSerializationFlags): GLib.Variant;
    update_secrets(setting_name: string, secrets: GLib.Variant): boolean;
    verify(): boolean;
    verify_secrets(): boolean;
}
export interface VpnEditor  {
    get_widget(): GObject.Object;
    update_connection(connection: Connection): boolean;
}
export interface VpnEditorPlugin  {
    readonly description: string;
    readonly name: string;
    readonly service: string;
    _export(path: string, connection: Connection): boolean;
    get_capabilities(): VpnEditorPluginCapability;
    get_editor(connection: Connection): VpnEditor;
    get_plugin_info(): VpnPluginInfo;
    get_suggested_filename(connection: Connection): string;
    get_vt(vt_size: number): [number, VpnEditorPluginVT];
    _import(path: string): Connection;
    set_plugin_info(plugin_info: VpnPluginInfo | null): void;
}