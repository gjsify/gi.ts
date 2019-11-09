
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as ModemManager from "modemmanager";
/**
 * modemmanager.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type UnlockRetriesForeachCb = (lock: ModemLock, count: number, user_data: object | null) => void;
export const BEARER_METHOD_CONNECT: string;
export const BEARER_METHOD_DISCONNECT: string;
export const BEARER_PROPERTY_BEARERTYPE: string;
export const BEARER_PROPERTY_CONNECTED: string;
export const BEARER_PROPERTY_INTERFACE: string;
export const BEARER_PROPERTY_IP4CONFIG: string;
export const BEARER_PROPERTY_IP6CONFIG: string;
export const BEARER_PROPERTY_IPTIMEOUT: string;
export const BEARER_PROPERTY_PROPERTIES: string;
export const BEARER_PROPERTY_STATS: string;
export const BEARER_PROPERTY_SUSPENDED: string;
export const CALL_METHOD_ACCEPT: string;
export const CALL_METHOD_HANGUP: string;
export const CALL_METHOD_SENDDTMF: string;
export const CALL_METHOD_START: string;
export const CALL_PROPERTY_AUDIOFORMAT: string;
export const CALL_PROPERTY_AUDIOPORT: string;
export const CALL_PROPERTY_DIRECTION: string;
export const CALL_PROPERTY_NUMBER: string;
export const CALL_PROPERTY_STATE: string;
export const CALL_PROPERTY_STATEREASON: string;
export const CALL_SIGNAL_DTMFRECEIVED: string;
export const CALL_SIGNAL_STATECHANGED: string;
export const DBUS_ERROR_PREFIX: string;
export const DBUS_INTERFACE: string;
export const DBUS_INTERFACE_BEARER: string;
export const DBUS_INTERFACE_CALL: string;
export const DBUS_INTERFACE_MODEM: string;
export const DBUS_INTERFACE_MODEM_FIRMWARE: string;
export const DBUS_INTERFACE_MODEM_LOCATION: string;
export const DBUS_INTERFACE_MODEM_MESSAGING: string;
export const DBUS_INTERFACE_MODEM_MODEM3GPP: string;
export const DBUS_INTERFACE_MODEM_MODEM3GPP_USSD: string;
export const DBUS_INTERFACE_MODEM_MODEMCDMA: string;
export const DBUS_INTERFACE_MODEM_OMA: string;
export const DBUS_INTERFACE_MODEM_SIGNAL: string;
export const DBUS_INTERFACE_MODEM_TIME: string;
export const DBUS_INTERFACE_MODEM_VOICE: string;
export const DBUS_INTERFACE_SIM: string;
export const DBUS_INTERFACE_SMS: string;
export const DBUS_PATH: string;
export const DBUS_SERVICE: string;
export const MAJOR_VERSION: number;
export const MANAGER_METHOD_INHIBITDEVICE: string;
export const MANAGER_METHOD_REPORTKERNELEVENT: string;
export const MANAGER_METHOD_SCANDEVICES: string;
export const MANAGER_METHOD_SETLOGGING: string;
export const MANAGER_PROPERTY_VERSION: string;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const MODEM_CDMA_NID_UNKNOWN: number;
export const MODEM_CDMA_SID_UNKNOWN: number;
export const MODEM_FIRMWARE_METHOD_LIST: string;
export const MODEM_FIRMWARE_METHOD_SELECT: string;
export const MODEM_FIRMWARE_PROPERTY_UPDATESETTINGS: string;
export const MODEM_LOCATION_METHOD_GETLOCATION: string;
export const MODEM_LOCATION_METHOD_INJECTASSISTANCEDATA: string;
export const MODEM_LOCATION_METHOD_SETGPSREFRESHRATE: string;
export const MODEM_LOCATION_METHOD_SETSUPLSERVER: string;
export const MODEM_LOCATION_METHOD_SETUP: string;
export const MODEM_LOCATION_PROPERTY_ASSISTANCEDATASERVERS: string;
export const MODEM_LOCATION_PROPERTY_CAPABILITIES: string;
export const MODEM_LOCATION_PROPERTY_ENABLED: string;
export const MODEM_LOCATION_PROPERTY_GPSREFRESHRATE: string;
export const MODEM_LOCATION_PROPERTY_LOCATION: string;
export const MODEM_LOCATION_PROPERTY_SIGNALSLOCATION: string;
export const MODEM_LOCATION_PROPERTY_SUPLSERVER: string;
export const MODEM_LOCATION_PROPERTY_SUPPORTEDASSISTANCEDATA: string;
export const MODEM_MESSAGING_METHOD_CREATE: string;
export const MODEM_MESSAGING_METHOD_DELETE: string;
export const MODEM_MESSAGING_METHOD_LIST: string;
export const MODEM_MESSAGING_PROPERTY_DEFAULTSTORAGE: string;
export const MODEM_MESSAGING_PROPERTY_MESSAGES: string;
export const MODEM_MESSAGING_PROPERTY_SUPPORTEDSTORAGES: string;
export const MODEM_MESSAGING_SIGNAL_ADDED: string;
export const MODEM_MESSAGING_SIGNAL_DELETED: string;
export const MODEM_METHOD_COMMAND: string;
export const MODEM_METHOD_CREATEBEARER: string;
export const MODEM_METHOD_DELETEBEARER: string;
export const MODEM_METHOD_ENABLE: string;
export const MODEM_METHOD_FACTORYRESET: string;
export const MODEM_METHOD_LISTBEARERS: string;
export const MODEM_METHOD_RESET: string;
export const MODEM_METHOD_SETCURRENTBANDS: string;
export const MODEM_METHOD_SETCURRENTCAPABILITIES: string;
export const MODEM_METHOD_SETCURRENTMODES: string;
export const MODEM_METHOD_SETPOWERSTATE: string;
export const MODEM_MODEM3GPP_METHOD_REGISTER: string;
export const MODEM_MODEM3GPP_METHOD_SCAN: string;
export const MODEM_MODEM3GPP_METHOD_SETEPSUEMODEOPERATION: string;
export const MODEM_MODEM3GPP_METHOD_SETINITIALEPSBEARERSETTINGS: string;
export const MODEM_MODEM3GPP_PROPERTY_ENABLEDFACILITYLOCKS: string;
export const MODEM_MODEM3GPP_PROPERTY_EPSUEMODEOPERATION: string;
export const MODEM_MODEM3GPP_PROPERTY_IMEI: string;
export const MODEM_MODEM3GPP_PROPERTY_INITIALEPSBEARER: string;
export const MODEM_MODEM3GPP_PROPERTY_INITIALEPSBEARERSETTINGS: string;
export const MODEM_MODEM3GPP_PROPERTY_OPERATORCODE: string;
export const MODEM_MODEM3GPP_PROPERTY_OPERATORNAME: string;
export const MODEM_MODEM3GPP_PROPERTY_PCO: string;
export const MODEM_MODEM3GPP_PROPERTY_REGISTRATIONSTATE: string;
export const MODEM_MODEM3GPP_PROPERTY_SUBSCRIPTIONSTATE: string;
export const MODEM_MODEM3GPP_USSD_METHOD_CANCEL: string;
export const MODEM_MODEM3GPP_USSD_METHOD_INITIATE: string;
export const MODEM_MODEM3GPP_USSD_METHOD_RESPOND: string;
export const MODEM_MODEM3GPP_USSD_PROPERTY_NETWORKNOTIFICATION: string;
export const MODEM_MODEM3GPP_USSD_PROPERTY_NETWORKREQUEST: string;
export const MODEM_MODEM3GPP_USSD_PROPERTY_STATE: string;
export const MODEM_MODEMCDMA_METHOD_ACTIVATE: string;
export const MODEM_MODEMCDMA_METHOD_ACTIVATEMANUAL: string;
export const MODEM_MODEMCDMA_PROPERTY_ACTIVATIONSTATE: string;
export const MODEM_MODEMCDMA_PROPERTY_CDMA1XREGISTRATIONSTATE: string;
export const MODEM_MODEMCDMA_PROPERTY_ESN: string;
export const MODEM_MODEMCDMA_PROPERTY_EVDOREGISTRATIONSTATE: string;
export const MODEM_MODEMCDMA_PROPERTY_MEID: string;
export const MODEM_MODEMCDMA_PROPERTY_NID: string;
export const MODEM_MODEMCDMA_PROPERTY_SID: string;
export const MODEM_MODEMCDMA_SIGNAL_ACTIVATIONSTATECHANGED: string;
export const MODEM_OMA_METHOD_ACCEPTNETWORKINITIATEDSESSION: string;
export const MODEM_OMA_METHOD_CANCELSESSION: string;
export const MODEM_OMA_METHOD_SETUP: string;
export const MODEM_OMA_METHOD_STARTCLIENTINITIATEDSESSION: string;
export const MODEM_OMA_PROPERTY_FEATURES: string;
export const MODEM_OMA_PROPERTY_PENDINGNETWORKINITIATEDSESSIONS: string;
export const MODEM_OMA_PROPERTY_SESSIONSTATE: string;
export const MODEM_OMA_PROPERTY_SESSIONTYPE: string;
export const MODEM_OMA_SIGNAL_SESSIONSTATECHANGED: string;
export const MODEM_PROPERTY_ACCESSTECHNOLOGIES: string;
export const MODEM_PROPERTY_BEARERS: string;
export const MODEM_PROPERTY_CARRIERCONFIGURATION: string;
export const MODEM_PROPERTY_CARRIERCONFIGURATIONREVISION: string;
export const MODEM_PROPERTY_CURRENTBANDS: string;
export const MODEM_PROPERTY_CURRENTCAPABILITIES: string;
export const MODEM_PROPERTY_CURRENTMODES: string;
export const MODEM_PROPERTY_DEVICE: string;
export const MODEM_PROPERTY_DEVICEIDENTIFIER: string;
export const MODEM_PROPERTY_DRIVERS: string;
export const MODEM_PROPERTY_EQUIPMENTIDENTIFIER: string;
export const MODEM_PROPERTY_HARDWAREREVISION: string;
export const MODEM_PROPERTY_MANUFACTURER: string;
export const MODEM_PROPERTY_MAXACTIVEBEARERS: string;
export const MODEM_PROPERTY_MAXBEARERS: string;
export const MODEM_PROPERTY_MODEL: string;
export const MODEM_PROPERTY_OWNNUMBERS: string;
export const MODEM_PROPERTY_PLUGIN: string;
export const MODEM_PROPERTY_PORTS: string;
export const MODEM_PROPERTY_POWERSTATE: string;
export const MODEM_PROPERTY_PRIMARYPORT: string;
export const MODEM_PROPERTY_REVISION: string;
export const MODEM_PROPERTY_SIGNALQUALITY: string;
export const MODEM_PROPERTY_SIM: string;
export const MODEM_PROPERTY_STATE: string;
export const MODEM_PROPERTY_STATEFAILEDREASON: string;
export const MODEM_PROPERTY_SUPPORTEDBANDS: string;
export const MODEM_PROPERTY_SUPPORTEDCAPABILITIES: string;
export const MODEM_PROPERTY_SUPPORTEDIPFAMILIES: string;
export const MODEM_PROPERTY_SUPPORTEDMODES: string;
export const MODEM_PROPERTY_UNLOCKREQUIRED: string;
export const MODEM_PROPERTY_UNLOCKRETRIES: string;
export const MODEM_SIGNAL_METHOD_SETUP: string;
export const MODEM_SIGNAL_PROPERTY_CDMA: string;
export const MODEM_SIGNAL_PROPERTY_EVDO: string;
export const MODEM_SIGNAL_PROPERTY_GSM: string;
export const MODEM_SIGNAL_PROPERTY_LTE: string;
export const MODEM_SIGNAL_PROPERTY_RATE: string;
export const MODEM_SIGNAL_PROPERTY_UMTS: string;
export const MODEM_SIGNAL_STATECHANGED: string;
export const MODEM_TIME_METHOD_GETNETWORKTIME: string;
export const MODEM_TIME_PROPERTY_NETWORKTIMEZONE: string;
export const MODEM_TIME_SIGNAL_NETWORKTIMECHANGED: string;
export const MODEM_VOICE_METHOD_CREATECALL: string;
export const MODEM_VOICE_METHOD_DELETECALL: string;
export const MODEM_VOICE_METHOD_LISTCALLS: string;
export const MODEM_VOICE_PROPERTY_CALLS: string;
export const MODEM_VOICE_SIGNAL_CALLADDED: string;
export const MODEM_VOICE_SIGNAL_CALLDELETED: string;
export const SIMPLE_PROPERTY_3GPP_OPERATOR_CODE: string;
export const SIMPLE_PROPERTY_3GPP_OPERATOR_NAME: string;
export const SIMPLE_PROPERTY_3GPP_REGISTRATION_STATE: string;
export const SIMPLE_PROPERTY_3GPP_SUBSCRIPTION_STATE: string;
export const SIMPLE_PROPERTY_ACCESS_TECHNOLOGIES: string;
export const SIMPLE_PROPERTY_CDMA_CDMA1X_REGISTRATION_STATE: string;
export const SIMPLE_PROPERTY_CDMA_EVDO_REGISTRATION_STATE: string;
export const SIMPLE_PROPERTY_CDMA_NID: string;
export const SIMPLE_PROPERTY_CDMA_SID: string;
export const SIMPLE_PROPERTY_CURRENT_BANDS: string;
export const SIMPLE_PROPERTY_SIGNAL_QUALITY: string;
export const SIMPLE_PROPERTY_STATE: string;
export const SIM_METHOD_CHANGEPIN: string;
export const SIM_METHOD_ENABLEPIN: string;
export const SIM_METHOD_SENDPIN: string;
export const SIM_METHOD_SENDPUK: string;
export const SIM_PROPERTY_IMSI: string;
export const SIM_PROPERTY_OPERATORIDENTIFIER: string;
export const SIM_PROPERTY_OPERATORNAME: string;
export const SIM_PROPERTY_SIMIDENTIFIER: string;
export const SMS_METHOD_SEND: string;
export const SMS_METHOD_STORE: string;
export const SMS_PROPERTY_CLASS: string;
export const SMS_PROPERTY_DATA: string;
export const SMS_PROPERTY_DELIVERYREPORTREQUEST: string;
export const SMS_PROPERTY_DELIVERYSTATE: string;
export const SMS_PROPERTY_DISCHARGETIMESTAMP: string;
export const SMS_PROPERTY_MESSAGEREFERENCE: string;
export const SMS_PROPERTY_NUMBER: string;
export const SMS_PROPERTY_PDUTYPE: string;
export const SMS_PROPERTY_SERVICECATEGORY: string;
export const SMS_PROPERTY_SMSC: string;
export const SMS_PROPERTY_STATE: string;
export const SMS_PROPERTY_STORAGE: string;
export const SMS_PROPERTY_TELESERVICEID: string;
export const SMS_PROPERTY_TEXT: string;
export const SMS_PROPERTY_TIMESTAMP: string;
export const SMS_PROPERTY_VALIDITY: string;
export const UNLOCK_RETRIES_UNKNOWN: number;
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MMBearerAllowedAuth in @mask.
 */
export function bearer_allowed_auth_build_string_from_mask(mask: BearerAllowedAuth): string;
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MMBearerIpFamily in @mask.
 */
export function bearer_ip_family_build_string_from_mask(mask: BearerIpFamily): string;
/**
 * Gets the nickname string for the #MMBearerIpMethod specified at @val.
 */
export function bearer_ip_method_get_string(val: BearerIpMethod): string;
/**
 * Gets the nickname string for the #MMBearerType specified at @val.
 */
export function bearer_type_get_string(val: BearerType): string;
/**
 * Gets the nickname string for the #MMCallDirection specified at @val.
 */
export function call_direction_get_string(val: CallDirection): string;
/**
 * Gets the nickname string for the #MMCallState specified at @val.
 */
export function call_state_get_string(val: CallState): string;
/**
 * Gets the nickname string for the #MMCallStateReason specified at @val.
 */
export function call_state_reason_get_string(val: CallStateReason): string;
/**
 * 
 */
export function cdma_activation_error_quark(): GLib.Quark;
/**
 * 
 */
export function connection_error_quark(): GLib.Quark;
/**
 * 
 */
export function core_error_quark(): GLib.Quark;
/**
 * Gets the nickname string for the #MMFirmwareImageType specified at @va
 * l.
 */
export function firmware_image_type_get_string(val: FirmwareImageType): string;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1-Bearer.top_of_page">org.freedesktop.
 * ModemManager1.Bearer</link> D-Bus interface.
 */
export function gdbus_bearer_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #MmGdbusBearer interface for 
 * a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_bearer_override_properties(klass: any, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1-Modem-Modem3gpp.top_of_page">org.fre
 * edesktop.ModemManager1.Modem.Modem3gpp</link> D-Bus interface.
 */
export function gdbus_modem3gpp_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #MmGdbusModem3gpp interface f
 * or a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_modem3gpp_override_properties(klass: any, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1-Modem-Modem3gpp-Ussd.top_of_page">or
 * g.freedesktop.ModemManager1.Modem.Modem3gpp.Ussd</link> D-Bus interfac
 * e.
 */
export function gdbus_modem3gpp_ussd_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #MmGdbusModem3gppUssd interfa
 * ce for a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_modem3gpp_ussd_override_properties(klass: any, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1-Modem-ModemCdma.top_of_page">org.fre
 * edesktop.ModemManager1.Modem.ModemCdma</link> D-Bus interface.
 */
export function gdbus_modem_cdma_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #MmGdbusModemCdma interface f
 * or a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_modem_cdma_override_properties(klass: any, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1-Modem-Firmware.top_of_page">org.free
 * desktop.ModemManager1.Modem.Firmware</link> D-Bus interface.
 */
export function gdbus_modem_firmware_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #MmGdbusModemFirmware interfa
 * ce for a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_modem_firmware_override_properties(klass: any, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1-Modem.top_of_page">org.freedesktop.M
 * odemManager1.Modem</link> D-Bus interface.
 */
export function gdbus_modem_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1-Modem-Location.top_of_page">org.free
 * desktop.ModemManager1.Modem.Location</link> D-Bus interface.
 */
export function gdbus_modem_location_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #MmGdbusModemLocation interfa
 * ce for a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_modem_location_override_properties(klass: any, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1-Modem-Messaging.top_of_page">org.fre
 * edesktop.ModemManager1.Modem.Messaging</link> D-Bus interface.
 */
export function gdbus_modem_messaging_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #MmGdbusModemMessaging interf
 * ace for a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_modem_messaging_override_properties(klass: any, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1-Modem-Oma.top_of_page">org.freedeskt
 * op.ModemManager1.Modem.Oma</link> D-Bus interface.
 */
export function gdbus_modem_oma_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #MmGdbusModemOma interface fo
 * r a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_modem_oma_override_properties(klass: any, property_id_begin: number): number;
/**
 * Overrides all #GObject properties in the #MmGdbusModem interface for a
 *  concrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_modem_override_properties(klass: any, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1-Modem-Signal.top_of_page">org.freede
 * sktop.ModemManager1.Modem.Signal</link> D-Bus interface.
 */
export function gdbus_modem_signal_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #MmGdbusModemSignal interface
 *  for a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_modem_signal_override_properties(klass: any, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1-Modem-Simple.top_of_page">org.freede
 * sktop.ModemManager1.Modem.Simple</link> D-Bus interface.
 */
export function gdbus_modem_simple_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #MmGdbusModemSimple interface
 *  for a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_modem_simple_override_properties(klass: any, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1-Modem-Time.top_of_page">org.freedesk
 * top.ModemManager1.Modem.Time</link> D-Bus interface.
 */
export function gdbus_modem_time_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #MmGdbusModemTime interface f
 * or a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_modem_time_override_properties(klass: any, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1-Modem-Voice.top_of_page">org.freedes
 * ktop.ModemManager1.Modem.Voice</link> D-Bus interface.
 */
export function gdbus_modem_voice_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #MmGdbusModemVoice interface 
 * for a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_modem_voice_override_properties(klass: any, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1.top_of_page">org.freedesktop.ModemMa
 * nager1</link> D-Bus interface.
 */
export function gdbus_org_freedesktop_modem_manager1_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #MmGdbusOrgFreedesktopModemMa
 * nager1 interface for a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_org_freedesktop_modem_manager1_override_properties(klass: any, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1-Sim.top_of_page">org.freedesktop.Mod
 * emManager1.Sim</link> D-Bus interface.
 */
export function gdbus_sim_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #MmGdbusSim interface for a c
 * oncrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_sim_override_properties(klass: any, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-freedesktop-ModemManager1-Sms.top_of_page">org.freedesktop.Mod
 * emManager1.Sms</link> D-Bus interface.
 */
export function gdbus_sms_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #MmGdbusSms interface for a c
 * oncrete class.
 * The properties are overridden in the order they are defined.
 */
export function gdbus_sms_override_properties(klass: any, property_id_begin: number): number;
/**
 * 
 */
export function message_error_quark(): GLib.Quark;
/**
 * 
 */
export function mobile_equipment_error_quark(): GLib.Quark;
/**
 * Gets the nickname string for the #MMModem3gppEpsUeModeOperation specif
 * ied at @val.
 */
export function modem_3gpp_eps_ue_mode_operation_get_string(val: Modem3gppEpsUeModeOperation): string;
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MMModem3gppFacility in @mask.
 */
export function modem_3gpp_facility_build_string_from_mask(mask: Modem3gppFacility): string;
/**
 * Gets the nickname string for the #MMModem3gppNetworkAvailability speci
 * fied at @val.
 */
export function modem_3gpp_network_availability_get_string(val: Modem3gppNetworkAvailability): string;
/**
 * Gets the nickname string for the #MMModem3gppRegistrationState specifi
 * ed at @val.
 */
export function modem_3gpp_registration_state_get_string(val: Modem3gppRegistrationState): string;
/**
 * Gets the nickname string for the #MMModem3gppSubscriptionState specifi
 * ed at @val.
 */
export function modem_3gpp_subscription_state_get_string(val: Modem3gppSubscriptionState): string;
/**
 * Gets the nickname string for the #MMModem3gppUssdSessionState specifie
 * d at @val.
 */
export function modem_3gpp_ussd_session_state_get_string(val: Modem3gppUssdSessionState): string;
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MMModemAccessTechnology in @mask.
 */
export function modem_access_technology_build_string_from_mask(mask: ModemAccessTechnology): string;
/**
 * Gets the nickname string for the #MMModemBand specified at @val.
 */
export function modem_band_get_string(val: ModemBand): string;
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MMModemCapability in @mask.
 */
export function modem_capability_build_string_from_mask(mask: ModemCapability): string;
/**
 * Gets the nickname string for the #MMModemCdmaActivationState specified
 *  at @val.
 */
export function modem_cdma_activation_state_get_string(val: ModemCdmaActivationState): string;
/**
 * Gets the nickname string for the #MMModemCdmaRegistrationState specifi
 * ed at @val.
 */
export function modem_cdma_registration_state_get_string(val: ModemCdmaRegistrationState): string;
/**
 * Gets the nickname string for the #MMModemCdmaRmProtocol specified at @
 * val.
 */
export function modem_cdma_rm_protocol_get_string(val: ModemCdmaRmProtocol): string;
/**
 * Gets the nickname string for the #MMModemContactsStorage specified at 
 * @val.
 */
export function modem_contacts_storage_get_string(val: ModemContactsStorage): string;
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MMModemFirmwareUpdateMethod in @mask.
 */
export function modem_firmware_update_method_build_string_from_mask(mask: ModemFirmwareUpdateMethod): string;
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MMModemLocationAssistanceDataType in @mask.
 */
export function modem_location_assistance_data_type_build_string_from_mask(mask: ModemLocationAssistanceDataType): string;
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MMModemLocationSource in @mask.
 */
export function modem_location_source_build_string_from_mask(mask: ModemLocationSource): string;
/**
 * Gets the nickname string for the #MMModemLock specified at @val.
 */
export function modem_lock_get_string(val: ModemLock): string;
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MMModemMode in @mask.
 */
export function modem_mode_build_string_from_mask(mask: ModemMode): string;
/**
 * Gets the nickname string for the #MMModemPortType specified at @val.
 */
export function modem_port_type_get_string(val: ModemPortType): string;
/**
 * Gets the nickname string for the #MMModemPowerState specified at @val.
 */
export function modem_power_state_get_string(val: ModemPowerState): string;
/**
 * Gets the nickname string for the #MMModemStateChangeReason specified a
 * t @val.
 */
export function modem_state_change_reason_get_string(val: ModemStateChangeReason): string;
/**
 * Gets the nickname string for the #MMModemStateFailedReason specified a
 * t @val.
 */
export function modem_state_failed_reason_get_string(val: ModemStateFailedReason): string;
/**
 * Gets the nickname string for the #MMModemState specified at @val.
 */
export function modem_state_get_string(val: ModemState): string;
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MMOmaFeature in @mask.
 */
export function oma_feature_build_string_from_mask(mask: OmaFeature): string;
/**
 * Gets the nickname string for the #MMOmaSessionStateFailedReason specif
 * ied at @val.
 */
export function oma_session_state_failed_reason_get_string(val: OmaSessionStateFailedReason): string;
/**
 * Gets the nickname string for the #MMOmaSessionState specified at @val.
 */
export function oma_session_state_get_string(val: OmaSessionState): string;
/**
 * Gets the nickname string for the #MMOmaSessionType specified at @val.
 */
export function oma_session_type_get_string(val: OmaSessionType): string;
/**
 * 
 */
export function serial_error_quark(): GLib.Quark;
/**
 * Gets the nickname string for the #MMSmsCdmaServiceCategory specified a
 * t @val.
 */
export function sms_cdma_service_category_get_string(val: SmsCdmaServiceCategory): string;
/**
 * Gets the nickname string for the #MMSmsCdmaTeleserviceId specified at 
 * @val.
 */
export function sms_cdma_teleservice_id_get_string(val: SmsCdmaTeleserviceId): string;
/**
 * Gets the nickname string for the #MMSmsDeliveryState specified at @val
 * .
 */
export function sms_delivery_state_get_string(val: SmsDeliveryState): string;
/**
 * Gets the nickname string for the #MMSmsPduType specified at @val.
 */
export function sms_pdu_type_get_string(val: SmsPduType): string;
/**
 * Gets the nickname string for the #MMSmsState specified at @val.
 */
export function sms_state_get_string(val: SmsState): string;
/**
 * Gets the nickname string for the #MMSmsStorage specified at @val.
 */
export function sms_storage_get_string(val: SmsStorage): string;
/**
 * Gets the nickname string for the #MMSmsValidityType specified at @val.
 */
export function sms_validity_type_get_string(val: SmsValidityType): string;
export enum BearerIpMethod {
    UNKNOWN = 0,
    PPP = 1,
    STATIC = 2,
    DHCP = 3,
}
export enum BearerType {
    UNKNOWN = 0,
    DEFAULT = 1,
    DEFAULT_ATTACH = 2,
    DEDICATED = 3,
}
export enum CallDirection {
    UNKNOWN = 0,
    INCOMING = 1,
    OUTGOING = 2,
}
export enum CallState {
    UNKNOWN = 0,
    DIALING = 1,
    RINGING_OUT = 2,
    RINGING_IN = 3,
    ACTIVE = 4,
    HELD = 5,
    WAITING = 6,
    TERMINATED = 7,
}
export enum CallStateReason {
    UNKNOWN = 0,
    OUTGOING_STARTED = 1,
    INCOMING_NEW = 2,
    ACCEPTED = 3,
    TERMINATED = 4,
    REFUSED_OR_BUSY = 5,
    ERROR = 6,
    AUDIO_SETUP_FAILED = 7,
}
export enum CdmaActivationError {
    NONE = 0,
    UNKNOWN = 1,
    ROAMING = 2,
    WRONGRADIOINTERFACE = 3,
    COULDNOTCONNECT = 4,
    SECURITYAUTHENTICATIONFAILED = 5,
    PROVISIONINGFAILED = 6,
    NOSIGNAL = 7,
    TIMEDOUT = 8,
    STARTFAILED = 9,
}
export enum ConnectionError {
    UNKNOWN = 0,
    NOCARRIER = 1,
    NODIALTONE = 2,
    BUSY = 3,
    NOANSWER = 4,
}
export enum CoreError {
    FAILED = 0,
    CANCELLED = 1,
    ABORTED = 2,
    UNSUPPORTED = 3,
    NOPLUGINS = 4,
    UNAUTHORIZED = 5,
    INVALIDARGS = 6,
    INPROGRESS = 7,
    WRONGSTATE = 8,
    CONNECTED = 9,
    TOOMANY = 10,
    NOTFOUND = 11,
    RETRY = 12,
    EXISTS = 13,
}
export enum FirmwareImageType {
    UNKNOWN = 0,
    GENERIC = 1,
    GOBI = 2,
}
export enum MessageError {
    MEFAILURE = 300,
    SMSSERVICERESERVED = 301,
    NOTALLOWED = 302,
    NOTSUPPORTED = 303,
    INVALIDPDUPARAMETER = 304,
    INVALIDTEXTPARAMETER = 305,
    SIMNOTINSERTED = 310,
    SIMPIN = 311,
    PHSIMPIN = 312,
    SIMFAILURE = 313,
    SIMBUSY = 314,
    SIMWRONG = 315,
    SIMPUK = 316,
    SIMPIN2 = 317,
    SIMPUK2 = 318,
    MEMORYFAILURE = 320,
    INVALIDINDEX = 321,
    MEMORYFULL = 322,
    SMSCADDRESSUNKNOWN = 330,
    NONETWORK = 331,
    NETWORKTIMEOUT = 332,
    NOCNMAACKEXPECTED = 340,
    UNKNOWN = 500,
}
export enum MobileEquipmentError {
    PHONEFAILURE = 0,
    NOCONNECTION = 1,
    LINKRESERVED = 2,
    NOTALLOWED = 3,
    NOTSUPPORTED = 4,
    PHSIMPIN = 5,
    PHFSIMPIN = 6,
    PHFSIMPUK = 7,
    SIMNOTINSERTED = 10,
    SIMPIN = 11,
    SIMPUK = 12,
    SIMFAILURE = 13,
    SIMBUSY = 14,
    SIMWRONG = 15,
    INCORRECTPASSWORD = 16,
    SIMPIN2 = 17,
    SIMPUK2 = 18,
    MEMORYFULL = 20,
    INVALIDINDEX = 21,
    NOTFOUND = 22,
    MEMORYFAILURE = 23,
    TEXTTOOLONG = 24,
    INVALIDCHARS = 25,
    DIALSTRINGTOOLONG = 26,
    DIALSTRINGINVALID = 27,
    NONETWORK = 30,
    NETWORKTIMEOUT = 31,
    NETWORKNOTALLOWED = 32,
    NETWORKPIN = 40,
    NETWORKPUK = 41,
    NETWORKSUBSETPIN = 42,
    NETWORKSUBSETPUK = 43,
    SERVICEPIN = 44,
    SERVICEPUK = 45,
    CORPPIN = 46,
    CORPPUK = 47,
    HIDDENKEYREQUIRED = 48,
    EAPMETHODNOTSUPPORTED = 49,
    INCORRECTPARAMETERS = 50,
    UNKNOWN = 100,
    GPRSIMSIUNKNOWNINHLR = 102,
    GPRSILLEGALMS = 103,
    GPRSIMSIUNKNOWNINVLR = 104,
    GPRSILLEGALME = 106,
    GPRSSERVICENOTALLOWED = 107,
    GPRSANDNONGPRSSERVICESNOTALLOWED = 108,
    GPRSPLMNNOTALLOWED = 111,
    GPRSLOCATIONNOTALLOWED = 112,
    GPRSROMAINGNOTALLOWED = 113,
    GPRSNOCELLSINLOCATIONAREA = 115,
    GPRSNETWORKFAILURE = 117,
    GPRSCONGESTION = 122,
    NOTAUTHORIZEDFORCSG = 125,
    GPRSINSUFFICIENTRESOURCES = 126,
    GPRSMISSINGORUNKNOWNAPN = 127,
    GPRSUNKNOWNPDPADDRESSORTYPE = 128,
    GPRSUSERAUTHENTICATIONFAILED = 129,
    GPRSACTIVATIONREJECTEDBYGGSNORGW = 130,
    GPRSACTIVATIONREJECTEDUNSPECIFIED = 131,
    GPRSSERVICEOPTIONNOTSUPPORTED = 132,
    GPRSSERVICEOPTIONNOTSUBSCRIBED = 133,
    GPRSSERVICEOPTIONOUTOFORDER = 134,
    GPRSFEATURENOTSUPPORTED = 140,
    GPRSSEMANTICERRORINTFTOPERATION = 141,
    GPRSSYNTACTICALERRORINTFTOPERATION = 142,
    GPRSUNKNOWNPDPCONTEXT = 143,
    GPRSSEMANTICERRORSINPACKETFILTER = 144,
    GPRSSYNTACTICALERRORSINPACKETFILTER = 145,
    GPRSPDPCONTEXTWITHOUTTFTALREADYACTIVATED = 146,
    GPRSUNKNOWN = 148,
    GPRSPDPAUTHFAILURE = 149,
    GPRSINVALIDMOBILECLASS = 150,
    GPRSLASTPDNDISCONNECTIONNOTALLOWED = 171,
    GPRSSEMANTICALLYINCORRECTMESSAGE = 172,
    GPRSMANDATORYIEERROR = 173,
    GPRSIENOTIMPLEMENTED = 174,
    GPRSCONDITIONALIEERROR = 175,
    GPRSUNSPECIFIEDPROTOCOLERROR = 176,
    GPRSOPERATORDETERMINEDBARRING = 177,
    GPRSMAXIMUMNUMBEROFPDPCONTEXTSREACHED = 178,
    GPRSREQUESTEDAPNNOTSUPPORTED = 179,
    GPRSREQUESTREJECTEDBCMVIOLATION = 180,
}
export enum Modem3gppEpsUeModeOperation {
    UNKNOWN = 0,
    PS_1 = 1,
    PS_2 = 2,
    CSPS_1 = 3,
    CSPS_2 = 4,
}
export enum Modem3gppNetworkAvailability {
    UNKNOWN = 0,
    AVAILABLE = 1,
    CURRENT = 2,
    FORBIDDEN = 3,
}
export enum Modem3gppRegistrationState {
    IDLE = 0,
    HOME = 1,
    SEARCHING = 2,
    DENIED = 3,
    UNKNOWN = 4,
    ROAMING = 5,
    HOME_SMS_ONLY = 6,
    ROAMING_SMS_ONLY = 7,
    EMERGENCY_ONLY = 8,
    HOME_CSFB_NOT_PREFERRED = 9,
    ROAMING_CSFB_NOT_PREFERRED = 10,
}
export enum Modem3gppSubscriptionState {
    UNKNOWN = 0,
    UNPROVISIONED = 1,
    PROVISIONED = 2,
    OUT_OF_DATA = 3,
}
export enum Modem3gppUssdSessionState {
    UNKNOWN = 0,
    IDLE = 1,
    ACTIVE = 2,
    USER_RESPONSE = 3,
}
export enum ModemBand {
    UNKNOWN = 0,
    EGSM = 1,
    DCS = 2,
    PCS = 3,
    G850 = 4,
    UTRAN_1 = 5,
    UTRAN_3 = 6,
    UTRAN_4 = 7,
    UTRAN_6 = 8,
    UTRAN_5 = 9,
    UTRAN_8 = 10,
    UTRAN_9 = 11,
    UTRAN_2 = 12,
    UTRAN_7 = 13,
    G450 = 14,
    G480 = 15,
    G750 = 16,
    G380 = 17,
    G410 = 18,
    G710 = 19,
    G810 = 20,
    EUTRAN_1 = 31,
    EUTRAN_2 = 32,
    EUTRAN_3 = 33,
    EUTRAN_4 = 34,
    EUTRAN_5 = 35,
    EUTRAN_6 = 36,
    EUTRAN_7 = 37,
    EUTRAN_8 = 38,
    EUTRAN_9 = 39,
    EUTRAN_10 = 40,
    EUTRAN_11 = 41,
    EUTRAN_12 = 42,
    EUTRAN_13 = 43,
    EUTRAN_14 = 44,
    EUTRAN_17 = 47,
    EUTRAN_18 = 48,
    EUTRAN_19 = 49,
    EUTRAN_20 = 50,
    EUTRAN_21 = 51,
    EUTRAN_22 = 52,
    EUTRAN_23 = 53,
    EUTRAN_24 = 54,
    EUTRAN_25 = 55,
    EUTRAN_26 = 56,
    EUTRAN_27 = 57,
    EUTRAN_28 = 58,
    EUTRAN_29 = 59,
    EUTRAN_30 = 60,
    EUTRAN_31 = 61,
    EUTRAN_32 = 62,
    EUTRAN_33 = 63,
    EUTRAN_34 = 64,
    EUTRAN_35 = 65,
    EUTRAN_36 = 66,
    EUTRAN_37 = 67,
    EUTRAN_38 = 68,
    EUTRAN_39 = 69,
    EUTRAN_40 = 70,
    EUTRAN_41 = 71,
    EUTRAN_42 = 72,
    EUTRAN_43 = 73,
    EUTRAN_44 = 74,
    EUTRAN_45 = 75,
    EUTRAN_46 = 76,
    EUTRAN_47 = 77,
    EUTRAN_48 = 78,
    EUTRAN_49 = 79,
    EUTRAN_50 = 80,
    EUTRAN_51 = 81,
    EUTRAN_52 = 82,
    EUTRAN_53 = 83,
    EUTRAN_54 = 84,
    EUTRAN_55 = 85,
    EUTRAN_56 = 86,
    EUTRAN_57 = 87,
    EUTRAN_58 = 88,
    EUTRAN_59 = 89,
    EUTRAN_60 = 90,
    EUTRAN_61 = 91,
    EUTRAN_62 = 92,
    EUTRAN_63 = 93,
    EUTRAN_64 = 94,
    EUTRAN_65 = 95,
    EUTRAN_66 = 96,
    EUTRAN_67 = 97,
    EUTRAN_68 = 98,
    EUTRAN_69 = 99,
    EUTRAN_70 = 100,
    EUTRAN_71 = 101,
    CDMA_BC0 = 128,
    CDMA_BC1 = 129,
    CDMA_BC2 = 130,
    CDMA_BC3 = 131,
    CDMA_BC4 = 132,
    CDMA_BC5 = 134,
    CDMA_BC6 = 135,
    CDMA_BC7 = 136,
    CDMA_BC8 = 137,
    CDMA_BC9 = 138,
    CDMA_BC10 = 139,
    CDMA_BC11 = 140,
    CDMA_BC12 = 141,
    CDMA_BC13 = 142,
    CDMA_BC14 = 143,
    CDMA_BC15 = 144,
    CDMA_BC16 = 145,
    CDMA_BC17 = 146,
    CDMA_BC18 = 147,
    CDMA_BC19 = 148,
    UTRAN_10 = 210,
    UTRAN_11 = 211,
    UTRAN_12 = 212,
    UTRAN_13 = 213,
    UTRAN_14 = 214,
    UTRAN_19 = 219,
    UTRAN_20 = 220,
    UTRAN_21 = 221,
    UTRAN_22 = 222,
    UTRAN_25 = 225,
    UTRAN_26 = 226,
    UTRAN_32 = 232,
    ANY = 256,
}
export enum ModemCdmaActivationState {
    UNKNOWN = 0,
    NOT_ACTIVATED = 1,
    ACTIVATING = 2,
    PARTIALLY_ACTIVATED = 3,
    ACTIVATED = 4,
}
export enum ModemCdmaRegistrationState {
    UNKNOWN = 0,
    REGISTERED = 1,
    HOME = 2,
    ROAMING = 3,
}
export enum ModemCdmaRmProtocol {
    UNKNOWN = 0,
    ASYNC = 1,
    PACKET_RELAY = 2,
    PACKET_NETWORK_PPP = 3,
    PACKET_NETWORK_SLIP = 4,
    STU_III = 5,
}
export enum ModemContactsStorage {
    UNKNOWN = 0,
    ME = 1,
    SM = 2,
    MT = 3,
}
export enum ModemLock {
    UNKNOWN = 0,
    NONE = 1,
    SIM_PIN = 2,
    SIM_PIN2 = 3,
    SIM_PUK = 4,
    SIM_PUK2 = 5,
    PH_SP_PIN = 6,
    PH_SP_PUK = 7,
    PH_NET_PIN = 8,
    PH_NET_PUK = 9,
    PH_SIM_PIN = 10,
    PH_CORP_PIN = 11,
    PH_CORP_PUK = 12,
    PH_FSIM_PIN = 13,
    PH_FSIM_PUK = 14,
    PH_NETSUB_PIN = 15,
    PH_NETSUB_PUK = 16,
}
export enum ModemPortType {
    UNKNOWN = 1,
    NET = 2,
    AT = 3,
    QCDM = 4,
    GPS = 5,
    QMI = 6,
    MBIM = 7,
}
export enum ModemPowerState {
    UNKNOWN = 0,
    OFF = 1,
    LOW = 2,
    ON = 3,
}
export enum ModemState {
    FAILED = -1,
    UNKNOWN = 0,
    INITIALIZING = 1,
    LOCKED = 2,
    DISABLED = 3,
    DISABLING = 4,
    ENABLING = 5,
    ENABLED = 6,
    SEARCHING = 7,
    REGISTERED = 8,
    DISCONNECTING = 9,
    CONNECTING = 10,
    CONNECTED = 11,
}
export enum ModemStateChangeReason {
    UNKNOWN = 0,
    USER_REQUESTED = 1,
    SUSPEND = 2,
    FAILURE = 3,
}
export enum ModemStateFailedReason {
    NONE = 0,
    UNKNOWN = 1,
    SIM_MISSING = 2,
    SIM_ERROR = 3,
}
export enum OmaSessionState {
    FAILED = -1,
    UNKNOWN = 0,
    STARTED = 1,
    RETRYING = 2,
    CONNECTING = 3,
    CONNECTED = 4,
    AUTHENTICATED = 5,
    MDN_DOWNLOADED = 10,
    MSID_DOWNLOADED = 11,
    PRL_DOWNLOADED = 12,
    MIP_PROFILE_DOWNLOADED = 13,
    COMPLETED = 20,
}
export enum OmaSessionStateFailedReason {
    UNKNOWN = 0,
    NETWORK_UNAVAILABLE = 1,
    SERVER_UNAVAILABLE = 2,
    AUTHENTICATION_FAILED = 3,
    MAX_RETRY_EXCEEDED = 4,
    SESSION_CANCELLED = 5,
}
export enum OmaSessionType {
    UNKNOWN = 0,
    CLIENT_INITIATED_DEVICE_CONFIGURE = 10,
    CLIENT_INITIATED_PRL_UPDATE = 11,
    CLIENT_INITIATED_HANDS_FREE_ACTIVATION = 12,
    NETWORK_INITIATED_DEVICE_CONFIGURE = 20,
    NETWORK_INITIATED_PRL_UPDATE = 21,
    DEVICE_INITIATED_PRL_UPDATE = 30,
    DEVICE_INITIATED_HANDS_FREE_ACTIVATION = 31,
}
export enum SerialError {
    UNKNOWN = 0,
    OPENFAILED = 1,
    SENDFAILED = 2,
    RESPONSETIMEOUT = 3,
    OPENFAILEDNODEVICE = 4,
    FLASHFAILED = 5,
    NOTOPEN = 6,
    PARSEFAILED = 7,
    FRAMENOTFOUND = 8,
}
export enum SmsCdmaServiceCategory {
    UNKNOWN = 0,
    EMERGENCY_BROADCAST = 1,
    ADMINISTRATIVE = 2,
    MAINTENANCE = 3,
    GENERAL_NEWS_LOCAL = 4,
    GENERAL_NEWS_REGIONAL = 5,
    GENERAL_NEWS_NATIONAL = 6,
    GENERAL_NEWS_INTERNATIONAL = 7,
    BUSINESS_NEWS_LOCAL = 8,
    BUSINESS_NEWS_REGIONAL = 9,
    BUSINESS_NEWS_NATIONAL = 10,
    BUSINESS_NEWS_INTERNATIONAL = 11,
    SPORTS_NEWS_LOCAL = 12,
    SPORTS_NEWS_REGIONAL = 13,
    SPORTS_NEWS_NATIONAL = 14,
    SPORTS_NEWS_INTERNATIONAL = 15,
    ENTERTAINMENT_NEWS_LOCAL = 16,
    ENTERTAINMENT_NEWS_REGIONAL = 17,
    ENTERTAINMENT_NEWS_NATIONAL = 18,
    ENTERTAINMENT_NEWS_INTERNATIONAL = 19,
    LOCAL_WEATHER = 20,
    TRAFFIC_REPORT = 21,
    FLIGHT_SCHEDULES = 22,
    RESTAURANTS = 23,
    LODGINGS = 24,
    RETAIL_DIRECTORY = 25,
    ADVERTISEMENTS = 26,
    STOCK_QUOTES = 27,
    EMPLOYMENT = 28,
    HOSPITALS = 29,
    TECHNOLOGY_NEWS = 30,
    MULTICATEGORY = 31,
    CMAS_PRESIDENTIAL_ALERT = 4096,
    CMAS_EXTREME_THREAT = 4097,
    CMAS_SEVERE_THREAT = 4098,
    CMAS_CHILD_ABDUCTION_EMERGENCY = 4099,
    CMAS_TEST = 4100,
}
export enum SmsCdmaTeleserviceId {
    UNKNOWN = 0,
    CMT91 = 4096,
    WPT = 4097,
    WMT = 4098,
    VMN = 4099,
    WAP = 4100,
    WEMT = 4101,
    SCPT = 4102,
    CATPT = 4103,
}
export enum SmsDeliveryState {
    COMPLETED_RECEIVED = 0,
    COMPLETED_FORWARDED_UNCONFIRMED = 1,
    COMPLETED_REPLACED_BY_SC = 2,
    TEMPORARY_ERROR_CONGESTION = 32,
    TEMPORARY_ERROR_SME_BUSY = 33,
    TEMPORARY_ERROR_NO_RESPONSE_FROM_SME = 34,
    TEMPORARY_ERROR_SERVICE_REJECTED = 35,
    TEMPORARY_ERROR_QOS_NOT_AVAILABLE = 36,
    TEMPORARY_ERROR_IN_SME = 37,
    ERROR_REMOTE_PROCEDURE = 64,
    ERROR_INCOMPATIBLE_DESTINATION = 65,
    ERROR_CONNECTION_REJECTED = 66,
    ERROR_NOT_OBTAINABLE = 67,
    ERROR_QOS_NOT_AVAILABLE = 68,
    ERROR_NO_INTERWORKING_AVAILABLE = 69,
    ERROR_VALIDITY_PERIOD_EXPIRED = 70,
    ERROR_DELETED_BY_ORIGINATING_SME = 71,
    ERROR_DELETED_BY_SC_ADMINISTRATION = 72,
    ERROR_MESSAGE_DOES_NOT_EXIST = 73,
    TEMPORARY_FATAL_ERROR_CONGESTION = 96,
    TEMPORARY_FATAL_ERROR_SME_BUSY = 97,
    TEMPORARY_FATAL_ERROR_NO_RESPONSE_FROM_SME = 98,
    TEMPORARY_FATAL_ERROR_SERVICE_REJECTED = 99,
    TEMPORARY_FATAL_ERROR_QOS_NOT_AVAILABLE = 100,
    TEMPORARY_FATAL_ERROR_IN_SME = 101,
    UNKNOWN = 256,
    NETWORK_PROBLEM_ADDRESS_VACANT = 512,
    NETWORK_PROBLEM_ADDRESS_TRANSLATION_FAILURE = 513,
    NETWORK_PROBLEM_NETWORK_RESOURCE_OUTAGE = 514,
    NETWORK_PROBLEM_NETWORK_FAILURE = 515,
    NETWORK_PROBLEM_INVALID_TELESERVICE_ID = 516,
    NETWORK_PROBLEM_OTHER = 517,
    TERMINAL_PROBLEM_NO_PAGE_RESPONSE = 544,
    TERMINAL_PROBLEM_DESTINATION_BUSY = 545,
    TERMINAL_PROBLEM_NO_ACKNOWLEDGMENT = 546,
    TERMINAL_PROBLEM_DESTINATION_RESOURCE_SHORTAGE = 547,
    TERMINAL_PROBLEM_SMS_DELIVERY_POSTPONED = 548,
    TERMINAL_PROBLEM_DESTINATION_OUT_OF_SERVICE = 549,
    TERMINAL_PROBLEM_DESTINATION_NO_LONGER_AT_THIS_ADDRESS = 550,
    TERMINAL_PROBLEM_OTHER = 551,
    RADIO_INTERFACE_PROBLEM_RESOURCE_SHORTAGE = 576,
    RADIO_INTERFACE_PROBLEM_INCOMPATIBILITY = 577,
    RADIO_INTERFACE_PROBLEM_OTHER = 578,
    GENERAL_PROBLEM_ENCODING = 608,
    GENERAL_PROBLEM_SMS_ORIGINATION_DENIED = 609,
    GENERAL_PROBLEM_SMS_TERMINATION_DENIED = 610,
    GENERAL_PROBLEM_SUPPLEMENTARY_SERVICE_NOT_SUPPORTED = 611,
    GENERAL_PROBLEM_SMS_NOT_SUPPORTED = 612,
    GENERAL_PROBLEM_MISSING_EXPECTED_PARAMETER = 614,
    GENERAL_PROBLEM_MISSING_MANDATORY_PARAMETER = 615,
    GENERAL_PROBLEM_UNRECOGNIZED_PARAMETER_VALUE = 616,
    GENERAL_PROBLEM_UNEXPECTED_PARAMETER_VALUE = 617,
    GENERAL_PROBLEM_USER_DATA_SIZE_ERROR = 618,
    GENERAL_PROBLEM_OTHER = 619,
    TEMPORARY_NETWORK_PROBLEM_ADDRESS_VACANT = 768,
    TEMPORARY_NETWORK_PROBLEM_ADDRESS_TRANSLATION_FAILURE = 769,
    TEMPORARY_NETWORK_PROBLEM_NETWORK_RESOURCE_OUTAGE = 770,
    TEMPORARY_NETWORK_PROBLEM_NETWORK_FAILURE = 771,
    TEMPORARY_NETWORK_PROBLEM_INVALID_TELESERVICE_ID = 772,
    TEMPORARY_NETWORK_PROBLEM_OTHER = 773,
    TEMPORARY_TERMINAL_PROBLEM_NO_PAGE_RESPONSE = 800,
    TEMPORARY_TERMINAL_PROBLEM_DESTINATION_BUSY = 801,
    TEMPORARY_TERMINAL_PROBLEM_NO_ACKNOWLEDGMENT = 802,
    TEMPORARY_TERMINAL_PROBLEM_DESTINATION_RESOURCE_SHORTAGE = 803,
    TEMPORARY_TERMINAL_PROBLEM_SMS_DELIVERY_POSTPONED = 804,
    TEMPORARY_TERMINAL_PROBLEM_DESTINATION_OUT_OF_SERVICE = 805,
    TEMPORARY_TERMINAL_PROBLEM_DESTINATION_NO_LONGER_AT_THIS_ADDRESS = 806,
    TEMPORARY_TERMINAL_PROBLEM_OTHER = 807,
    TEMPORARY_RADIO_INTERFACE_PROBLEM_RESOURCE_SHORTAGE = 832,
    TEMPORARY_RADIO_INTERFACE_PROBLEM_INCOMPATIBILITY = 833,
    TEMPORARY_RADIO_INTERFACE_PROBLEM_OTHER = 834,
    TEMPORARY_GENERAL_PROBLEM_ENCODING = 864,
    TEMPORARY_GENERAL_PROBLEM_SMS_ORIGINATION_DENIED = 865,
    TEMPORARY_GENERAL_PROBLEM_SMS_TERMINATION_DENIED = 866,
    TEMPORARY_GENERAL_PROBLEM_SUPPLEMENTARY_SERVICE_NOT_SUPPORTED = 867,
    TEMPORARY_GENERAL_PROBLEM_SMS_NOT_SUPPORTED = 868,
    TEMPORARY_GENERAL_PROBLEM_MISSING_EXPECTED_PARAMETER = 870,
    TEMPORARY_GENERAL_PROBLEM_MISSING_MANDATORY_PARAMETER = 871,
    TEMPORARY_GENERAL_PROBLEM_UNRECOGNIZED_PARAMETER_VALUE = 872,
    TEMPORARY_GENERAL_PROBLEM_UNEXPECTED_PARAMETER_VALUE = 873,
    TEMPORARY_GENERAL_PROBLEM_USER_DATA_SIZE_ERROR = 874,
    TEMPORARY_GENERAL_PROBLEM_OTHER = 875,
}
export enum SmsPduType {
    UNKNOWN = 0,
    DELIVER = 1,
    SUBMIT = 2,
    STATUS_REPORT = 3,
    CDMA_DELIVER = 32,
    CDMA_SUBMIT = 33,
    CDMA_CANCELLATION = 34,
    CDMA_DELIVERY_ACKNOWLEDGEMENT = 35,
    CDMA_USER_ACKNOWLEDGEMENT = 36,
    CDMA_READ_ACKNOWLEDGEMENT = 37,
}
export enum SmsState {
    UNKNOWN = 0,
    STORED = 1,
    RECEIVING = 2,
    RECEIVED = 3,
    SENDING = 4,
    SENT = 5,
}
export enum SmsStorage {
    UNKNOWN = 0,
    SM = 1,
    ME = 2,
    MT = 3,
    SR = 4,
    BM = 5,
    TA = 6,
}
export enum SmsValidityType {
    UNKNOWN = 0,
    RELATIVE = 1,
    ABSOLUTE = 2,
    ENHANCED = 3,
}
export enum BearerAllowedAuth {
    UNKNOWN = 0,
    NONE = 1,
    PAP = 2,
    CHAP = 4,
    MSCHAP = 8,
    MSCHAPV2 = 16,
    EAP = 32,
}
export enum BearerIpFamily {
    NONE = 0,
    IPV4 = 1,
    IPV6 = 2,
    IPV4V6 = 4,
    ANY = 4294967295,
}
export enum Modem3gppFacility {
    NONE = 0,
    SIM = 1,
    FIXED_DIALING = 2,
    PH_SIM = 4,
    PH_FSIM = 8,
    NET_PERS = 16,
    NET_SUB_PERS = 32,
    PROVIDER_PERS = 64,
    CORP_PERS = 128,
}
export enum ModemAccessTechnology {
    UNKNOWN = 0,
    POTS = 1,
    GSM = 2,
    GSM_COMPACT = 4,
    GPRS = 8,
    EDGE = 16,
    UMTS = 32,
    HSDPA = 64,
    HSUPA = 128,
    HSPA = 256,
    HSPA_PLUS = 512,
    "1XRTT" = 1024,
    EVDO0 = 2048,
    EVDOA = 4096,
    EVDOB = 8192,
    LTE = 16384,
    ANY = 4294967295,
}
export enum ModemCapability {
    NONE = 0,
    POTS = 1,
    CDMA_EVDO = 2,
    GSM_UMTS = 4,
    LTE = 8,
    LTE_ADVANCED = 16,
    IRIDIUM = 32,
    ANY = 4294967295,
}
export enum ModemFirmwareUpdateMethod {
    NONE = 0,
    FASTBOOT = 1,
    QMI_PDC = 2,
}
export enum ModemLocationAssistanceDataType {
    NONE = 0,
    XTRA = 1,
}
export enum ModemLocationSource {
    NONE = 0,
    "3GPP_LAC_CI" = 1,
    GPS_RAW = 2,
    GPS_NMEA = 4,
    CDMA_BS = 8,
    GPS_UNMANAGED = 16,
    AGPS = 32,
}
export enum ModemMode {
    NONE = 0,
    CS = 1,
    "2G" = 2,
    "3G" = 4,
    "4G" = 8,
    ANY = 4294967295,
}
export enum OmaFeature {
    NONE = 0,
    DEVICE_PROVISIONING = 1,
    PRL_UPDATE = 2,
    HANDS_FREE_ACTIVATION = 4,
}
export class Bearer  {
    constructor(config?: properties);
    readonly priv: BearerPrivate;
    connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    connect_finish(res: Gio.AsyncResult): boolean;
    connect_sync(cancellable: Gio.Cancellable | null): boolean;
    disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    disconnect_finish(res: Gio.AsyncResult): boolean;
    disconnect_sync(cancellable: Gio.Cancellable | null): boolean;
    dup_interface(): string;
    dup_path(): string;
    get_bearer_type(): BearerType;
    get_connected(): boolean;
    get_interface(): string;
    get_ip_timeout(): number;
    get_ipv4_config(): BearerIpConfig;
    get_ipv6_config(): BearerIpConfig;
    get_path(): string;
    get_properties(): BearerProperties;
    get_stats(): BearerStats;
    get_suspended(): boolean;
    peek_ipv4_config(): BearerIpConfig;
    peek_ipv6_config(): BearerIpConfig;
    peek_properties(): BearerProperties;
    peek_stats(): BearerStats;
}
export class BearerIpConfig extends GObject.Object {
    constructor(config?: properties);
    static new_from_dictionary(dictionary: GLib.Variant): BearerIpConfig;
    dup(): BearerIpConfig;
    get_address(): string;
    get_dictionary(): GLib.Variant;
    get_dns(): string[];
    get_gateway(): string;
    get_method(): BearerIpMethod;
    get_mtu(): number;
    get_prefix(): number;
    set_address(address: string): void;
    set_dns(dns: string): void;
    set_gateway(gateway: string): void;
    set_method(ip_method: BearerIpMethod): void;
    set_mtu(mtu: number): void;
    set_prefix(prefix: number): void;
}
export class BearerProperties extends GObject.Object {
    constructor(config?: properties);
    static new_from_dictionary(dictionary: GLib.Variant): BearerProperties;
    static new_from_string(str: string): BearerProperties;
    cmp(b: BearerProperties): boolean;
    consume_string(key: string, value: string): boolean;
    consume_variant(key: string, value: GLib.Variant): boolean;
    dup(): BearerProperties;
    get_allow_roaming(): boolean;
    get_allowed_auth(): BearerAllowedAuth;
    get_apn(): string;
    get_dictionary(): GLib.Variant;
    get_ip_type(): BearerIpFamily;
    get_number(): string;
    get_password(): string;
    get_rm_protocol(): ModemCdmaRmProtocol;
    get_user(): string;
    set_allow_roaming(allow_roaming: boolean): void;
    set_allowed_auth(allowed_auth: BearerAllowedAuth): void;
    set_apn(apn: string): void;
    set_ip_type(ip_type: BearerIpFamily): void;
    set_number(number: string): void;
    set_password(password: string): void;
    set_rm_protocol(protocol: ModemCdmaRmProtocol): void;
    set_user(user: string): void;
}
export class BearerStats extends GObject.Object {
    constructor(config?: properties);
    static new_from_dictionary(dictionary: GLib.Variant): BearerStats;
    get_dictionary(): GLib.Variant;
    get_duration(): number;
    get_rx_bytes(): number;
    get_tx_bytes(): number;
    set_duration(duration: number): void;
    set_rx_bytes(rx_bytes: number): void;
    set_tx_bytes(tx_bytes: number): void;
}
export class Call  {
    constructor(config?: properties);
    readonly priv: CallPrivate;
    accept(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    accept_finish(res: Gio.AsyncResult): boolean;
    accept_sync(cancellable: Gio.Cancellable | null): boolean;
    dup_audio_port(): string;
    dup_number(): string;
    dup_path(): string;
    get_audio_format(): CallAudioFormat;
    get_audio_port(): string;
    get_direction(): CallDirection;
    get_number(): string;
    get_path(): string;
    get_state(): CallState;
    get_state_reason(): CallStateReason;
    hangup(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    hangup_finish(res: Gio.AsyncResult): boolean;
    hangup_sync(cancellable: Gio.Cancellable | null): boolean;
    peek_audio_format(): CallAudioFormat;
    send_dtmf(dtmf: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    send_dtmf_finish(res: Gio.AsyncResult): boolean;
    send_dtmf_sync(dtmf: string, cancellable: Gio.Cancellable | null): boolean;
    start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    start_finish(res: Gio.AsyncResult): boolean;
    start_sync(cancellable: Gio.Cancellable | null): boolean;
}
export class CallAudioFormat extends GObject.Object {
    constructor(config?: properties);
    static new_from_dictionary(dictionary: GLib.Variant): CallAudioFormat;
    dup(): CallAudioFormat;
    get_dictionary(): GLib.Variant;
    get_encoding(): string;
    get_rate(): number;
    get_resolution(): string;
    set_encoding(encoding: string): void;
    set_rate(rate: number): void;
    set_resolution(resolution: string): void;
}
export class CallProperties extends GObject.Object {
    constructor(config?: properties);
    static new_from_dictionary(dictionary: GLib.Variant): CallProperties;
    static new_from_string(str: string): CallProperties;
    dup(): CallProperties;
    get_dictionary(): GLib.Variant;
    get_direction(): CallDirection;
    get_number(): string;
    get_state(): CallState;
    get_state_reason(): CallStateReason;
    set_direction(direction: CallDirection): void;
    set_number(text: string): void;
    set_state(state: CallState): void;
    set_state_reason(state_reason: CallStateReason): void;
}
export class CdmaManualActivationProperties extends GObject.Object {
    constructor(config?: properties);
    static new_from_dictionary(dictionary: GLib.Variant): CdmaManualActivationProperties;
    static new_from_string(str: string): CdmaManualActivationProperties;
    get_dictionary(): GLib.Variant;
    get_mdn(): string;
    get_min(): string;
    get_mn_aaa_key(): string;
    get_mn_ha_key(): string;
    get_prl(): [number, number];
    get_prl_bytearray(): number[];
    get_sid(): number;
    get_spc(): string;
    peek_prl_bytearray(): number[];
    set_mdn(mdn: string): boolean;
    set_min(min: string): boolean;
    set_mn_aaa_key(mn_aaa_key: string): boolean;
    set_mn_ha_key(mn_ha_key: string): boolean;
    set_prl(prl: number, prl_length: number): boolean;
    set_prl_bytearray(prl: number[]): boolean;
    set_sid(sid: number): void;
    set_spc(spc: string): boolean;
}
export class FirmwareProperties extends GObject.Object {
    constructor(config?: properties);
    static new_from_dictionary(dictionary: GLib.Variant): FirmwareProperties;
    get_dictionary(): GLib.Variant;
    get_gobi_boot_version(): string;
    get_gobi_modem_unique_id(): string;
    get_gobi_pri_info(): string;
    get_gobi_pri_unique_id(): string;
    get_gobi_pri_version(): string;
    get_image_type(): FirmwareImageType;
    get_unique_id(): string;
    set_gobi_boot_version(version: string): void;
    set_gobi_modem_unique_id(id: string): void;
    set_gobi_pri_info(info: string): void;
    set_gobi_pri_unique_id(id: string): void;
    set_gobi_pri_version(version: string): void;
}
export class FirmwareUpdateSettings extends GObject.Object {
    constructor(config?: properties);
    static new_from_variant(variant: GLib.Variant): FirmwareUpdateSettings;
    get_device_ids(): string[];
    get_fastboot_at(): string;
    get_method(): ModemFirmwareUpdateMethod;
    get_variant(): GLib.Variant;
    get_version(): string;
    set_device_ids(device_ids: string): void;
    set_fastboot_at(fastboot_at: string): void;
    set_version(version: string): void;
}
export class GdbusBearerProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusBearerProxy;
    static new_finish(...args: never[]): GdbusBearerProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusBearerProxy;
    static new_for_bus_finish(...args: never[]): GdbusBearerProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusBearerProxy;
    static new_for_bus_sync(...args: never[]): GdbusBearerProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusBearerProxy;
    static new_sync(...args: never[]): GdbusBearerProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusBearerSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class GdbusModem3gppProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusModem3gppProxy;
    static new_finish(...args: never[]): GdbusModem3gppProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModem3gppProxy;
    static new_for_bus_finish(...args: never[]): GdbusModem3gppProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModem3gppProxy;
    static new_for_bus_sync(...args: never[]): GdbusModem3gppProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModem3gppProxy;
    static new_sync(...args: never[]): GdbusModem3gppProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusModem3gppSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class GdbusModem3gppUssdProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusModem3gppUssdProxy;
    static new_finish(...args: never[]): GdbusModem3gppUssdProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModem3gppUssdProxy;
    static new_for_bus_finish(...args: never[]): GdbusModem3gppUssdProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModem3gppUssdProxy;
    static new_for_bus_sync(...args: never[]): GdbusModem3gppUssdProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModem3gppUssdProxy;
    static new_sync(...args: never[]): GdbusModem3gppUssdProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusModem3gppUssdSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class GdbusModemCdmaProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusModemCdmaProxy;
    static new_finish(...args: never[]): GdbusModemCdmaProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemCdmaProxy;
    static new_for_bus_finish(...args: never[]): GdbusModemCdmaProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemCdmaProxy;
    static new_for_bus_sync(...args: never[]): GdbusModemCdmaProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemCdmaProxy;
    static new_sync(...args: never[]): GdbusModemCdmaProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusModemCdmaSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class GdbusModemFirmwareProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusModemFirmwareProxy;
    static new_finish(...args: never[]): GdbusModemFirmwareProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemFirmwareProxy;
    static new_for_bus_finish(...args: never[]): GdbusModemFirmwareProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemFirmwareProxy;
    static new_for_bus_sync(...args: never[]): GdbusModemFirmwareProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemFirmwareProxy;
    static new_sync(...args: never[]): GdbusModemFirmwareProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusModemFirmwareSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class GdbusModemLocationProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusModemLocationProxy;
    static new_finish(...args: never[]): GdbusModemLocationProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemLocationProxy;
    static new_for_bus_finish(...args: never[]): GdbusModemLocationProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemLocationProxy;
    static new_for_bus_sync(...args: never[]): GdbusModemLocationProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemLocationProxy;
    static new_sync(...args: never[]): GdbusModemLocationProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusModemLocationSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class GdbusModemMessagingProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusModemMessagingProxy;
    static new_finish(...args: never[]): GdbusModemMessagingProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemMessagingProxy;
    static new_for_bus_finish(...args: never[]): GdbusModemMessagingProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemMessagingProxy;
    static new_for_bus_sync(...args: never[]): GdbusModemMessagingProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemMessagingProxy;
    static new_sync(...args: never[]): GdbusModemMessagingProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusModemMessagingSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class GdbusModemOmaProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusModemOmaProxy;
    static new_finish(...args: never[]): GdbusModemOmaProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemOmaProxy;
    static new_for_bus_finish(...args: never[]): GdbusModemOmaProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemOmaProxy;
    static new_for_bus_sync(...args: never[]): GdbusModemOmaProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemOmaProxy;
    static new_sync(...args: never[]): GdbusModemOmaProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusModemOmaSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class GdbusModemProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusModemProxy;
    static new_finish(...args: never[]): GdbusModemProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemProxy;
    static new_for_bus_finish(...args: never[]): GdbusModemProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemProxy;
    static new_for_bus_sync(...args: never[]): GdbusModemProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemProxy;
    static new_sync(...args: never[]): GdbusModemProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusModemSignalProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusModemSignalProxy;
    static new_finish(...args: never[]): GdbusModemSignalProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemSignalProxy;
    static new_for_bus_finish(...args: never[]): GdbusModemSignalProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemSignalProxy;
    static new_for_bus_sync(...args: never[]): GdbusModemSignalProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemSignalProxy;
    static new_sync(...args: never[]): GdbusModemSignalProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusModemSignalSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class GdbusModemSimpleProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusModemSimpleProxy;
    static new_finish(...args: never[]): GdbusModemSimpleProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemSimpleProxy;
    static new_for_bus_finish(...args: never[]): GdbusModemSimpleProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemSimpleProxy;
    static new_for_bus_sync(...args: never[]): GdbusModemSimpleProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemSimpleProxy;
    static new_sync(...args: never[]): GdbusModemSimpleProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusModemSimpleSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class GdbusModemSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class GdbusModemTimeProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusModemTimeProxy;
    static new_finish(...args: never[]): GdbusModemTimeProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemTimeProxy;
    static new_for_bus_finish(...args: never[]): GdbusModemTimeProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemTimeProxy;
    static new_for_bus_sync(...args: never[]): GdbusModemTimeProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemTimeProxy;
    static new_sync(...args: never[]): GdbusModemTimeProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusModemTimeSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class GdbusModemVoiceProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusModemVoiceProxy;
    static new_finish(...args: never[]): GdbusModemVoiceProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusModemVoiceProxy;
    static new_for_bus_finish(...args: never[]): GdbusModemVoiceProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemVoiceProxy;
    static new_for_bus_sync(...args: never[]): GdbusModemVoiceProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusModemVoiceProxy;
    static new_sync(...args: never[]): GdbusModemVoiceProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusModemVoiceSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class GdbusObjectManagerClient extends Gio.DBusObjectManagerClient {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusObjectManagerClient;
    static new_finish(...args: never[]): GdbusObjectManagerClient;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusObjectManagerClient;
    static new_for_bus_finish(...args: never[]): GdbusObjectManagerClient;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusObjectManagerClient;
    static new_for_bus_sync(...args: never[]): GdbusObjectManagerClient;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusObjectManagerClient;
    static new_sync(...args: never[]): GdbusObjectManagerClient;
    static get_proxy_type(manager: Gio.DBusObjectManagerClient, object_path: string, interface_name: string | null, user_data: object | null): GType;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusObjectProxy extends Gio.DBusObjectProxy {
    constructor(config?: properties);
}
export class GdbusObjectSkeleton extends Gio.DBusObjectSkeleton {
    constructor(config?: properties);
    set_modem(interface_: GdbusModem | null): void;
    set_modem3gpp(interface_: GdbusModem3gpp | null): void;
    set_modem3gpp_ussd(interface_: GdbusModem3gppUssd | null): void;
    set_modem_cdma(interface_: GdbusModemCdma | null): void;
    set_modem_firmware(interface_: GdbusModemFirmware | null): void;
    set_modem_location(interface_: GdbusModemLocation | null): void;
    set_modem_messaging(interface_: GdbusModemMessaging | null): void;
    set_modem_oma(interface_: GdbusModemOma | null): void;
    set_modem_signal(interface_: GdbusModemSignal | null): void;
    set_modem_simple(interface_: GdbusModemSimple | null): void;
    set_modem_time(interface_: GdbusModemTime | null): void;
    set_modem_voice(interface_: GdbusModemVoice | null): void;
}
export class GdbusOrgFreedesktopModemManager1Proxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusOrgFreedesktopModemManager1Proxy;
    static new_finish(...args: never[]): GdbusOrgFreedesktopModemManager1Proxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusOrgFreedesktopModemManager1Proxy;
    static new_for_bus_finish(...args: never[]): GdbusOrgFreedesktopModemManager1Proxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusOrgFreedesktopModemManager1Proxy;
    static new_for_bus_sync(...args: never[]): GdbusOrgFreedesktopModemManager1Proxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusOrgFreedesktopModemManager1Proxy;
    static new_sync(...args: never[]): GdbusOrgFreedesktopModemManager1Proxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusOrgFreedesktopModemManager1Skeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class GdbusSimProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusSimProxy;
    static new_finish(...args: never[]): GdbusSimProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusSimProxy;
    static new_for_bus_finish(...args: never[]): GdbusSimProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusSimProxy;
    static new_for_bus_sync(...args: never[]): GdbusSimProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusSimProxy;
    static new_sync(...args: never[]): GdbusSimProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusSimSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class GdbusSmsProxy extends Gio.DBusProxy {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): GdbusSmsProxy;
    static new_finish(...args: never[]): GdbusSmsProxy;
    static new_for_bus_finish(res: Gio.AsyncResult): GdbusSmsProxy;
    static new_for_bus_finish(...args: never[]): GdbusSmsProxy;
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): GdbusSmsProxy;
    static new_for_bus_sync(...args: never[]): GdbusSmsProxy;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): GdbusSmsProxy;
    static new_sync(...args: never[]): GdbusSmsProxy;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    new_for_bus(...args: never[]): never;
}
export class GdbusSmsSkeleton extends Gio.DBusInterfaceSkeleton {
    constructor(config?: properties);
}
export class KernelEventProperties extends GObject.Object {
    constructor(config?: properties);
    static new_from_dictionary(dictionary: GLib.Variant): KernelEventProperties;
    static new_from_string(str: string): KernelEventProperties;
    dup(): KernelEventProperties;
    get_action(): string;
    get_dictionary(): GLib.Variant;
    get_name(): string;
    get_subsystem(): string;
    get_uid(): string;
    set_action(action: string): void;
    set_name(name: string): void;
    set_subsystem(subsystem: string): void;
    set_uid(uid: string): void;
}
export class Location3gpp extends GObject.Object {
    constructor(config?: properties);
    static new_from_string_variant(string: GLib.Variant): Location3gpp;
    get_cell_id(): number;
    get_location_area_code(): number;
    get_mobile_country_code(): number;
    get_mobile_network_code(): number;
    get_string_variant(): GLib.Variant;
    get_tracking_area_code(): number;
    reset(): boolean;
    set_cell_id(cell_id: number): boolean;
    set_location_area_code(location_area_code: number): boolean;
    set_mobile_country_code(mobile_country_code: number): boolean;
    set_mobile_network_code(mobile_network_code: number): boolean;
    set_tracking_area_code(tracking_area_code: number): boolean;
}
export class LocationCdmaBs extends GObject.Object {
    constructor(config?: properties);
    static new_from_dictionary(string: GLib.Variant): LocationCdmaBs;
    get_dictionary(): GLib.Variant;
    get_latitude(): number;
    get_longitude(): number;
    set(longitude: number, latitude: number): boolean;
}
export class LocationGpsNmea extends GObject.Object {
    constructor(config?: properties);
    static new_from_string_variant(string: GLib.Variant): LocationGpsNmea;
    add_trace(trace: string): boolean;
    build_full(): string;
    get_string_variant(): GLib.Variant;
    get_trace(trace_type: string): string;
}
export class LocationGpsRaw extends GObject.Object {
    constructor(config?: properties);
    static new_from_dictionary(string: GLib.Variant): LocationGpsRaw;
    add_trace(trace: string): boolean;
    get_altitude(): number;
    get_dictionary(): GLib.Variant;
    get_latitude(): number;
    get_longitude(): number;
    get_utc_time(): string;
}
export class Manager extends GdbusObjectManagerClient {
    constructor(config?: properties);
    static new_finish(res: Gio.AsyncResult): Manager;
    static new_finish(...args: never[]): Manager;
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, cancellable: Gio.Cancellable | null): Manager;
    static new_sync(...args: never[]): Manager;
    get_proxy(): Gio.DBusProxy;
    get_version(): string;
    inhibit_device(uid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    inhibit_device_finish(res: Gio.AsyncResult): boolean;
    inhibit_device_sync(uid: string, cancellable: Gio.Cancellable | null): boolean;
    peek_proxy(): Gio.DBusProxy;
    report_kernel_event(properties: KernelEventProperties, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    report_kernel_event_finish(res: Gio.AsyncResult): boolean;
    report_kernel_event_sync(properties: KernelEventProperties, cancellable: Gio.Cancellable | null): boolean;
    scan_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    scan_devices_finish(res: Gio.AsyncResult): boolean;
    scan_devices_sync(cancellable: Gio.Cancellable | null): boolean;
    set_logging(level: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    set_logging_finish(res: Gio.AsyncResult): boolean;
    set_logging_sync(level: string, cancellable: Gio.Cancellable | null): boolean;
    uninhibit_device(uid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    uninhibit_device_finish(res: Gio.AsyncResult): boolean;
    uninhibit_device_sync(uid: string, cancellable: Gio.Cancellable | null): boolean;
    static _new(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    _new(...args: never[]): never;
}
export class Modem  {
    constructor(config?: properties);
    readonly priv: ModemPrivate;
    command(cmd: string, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    command_finish(res: Gio.AsyncResult): string;
    command_sync(cmd: string, timeout: number, cancellable: Gio.Cancellable | null): string;
    create_bearer(properties: BearerProperties, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    create_bearer_finish(res: Gio.AsyncResult): Bearer;
    create_bearer_sync(properties: BearerProperties, cancellable: Gio.Cancellable | null): Bearer;
    delete_bearer(bearer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    delete_bearer_finish(res: Gio.AsyncResult): boolean;
    delete_bearer_sync(bearer: string, cancellable: Gio.Cancellable | null): boolean;
    disable(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    disable_finish(res: Gio.AsyncResult): boolean;
    disable_sync(cancellable: Gio.Cancellable | null): boolean;
    dup_bearer_paths(): string[];
    dup_carrier_configuration(): string;
    dup_carrier_configuration_revision(): string;
    dup_device(): string;
    dup_device_identifier(): string;
    dup_drivers(): string[];
    dup_equipment_identifier(): string;
    dup_hardware_revision(): string;
    dup_manufacturer(): string;
    dup_model(): string;
    dup_own_numbers(): string[];
    dup_path(): string;
    dup_plugin(): string;
    dup_primary_port(): string;
    dup_revision(): string;
    dup_sim_path(): string;
    enable(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    enable_finish(res: Gio.AsyncResult): boolean;
    enable_sync(cancellable: Gio.Cancellable | null): boolean;
    factory_reset(code: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    factory_reset_finish(res: Gio.AsyncResult): boolean;
    factory_reset_sync(code: string, cancellable: Gio.Cancellable | null): boolean;
    get_access_technologies(): ModemAccessTechnology;
    get_bearer_paths(): string[];
    get_carrier_configuration(): string;
    get_carrier_configuration_revision(): string;
    get_current_bands(): [boolean, ModemBand[],number];
    get_current_capabilities(): ModemCapability;
    get_current_modes(): [boolean, ModemMode,ModemMode];
    get_device(): string;
    get_device_identifier(): string;
    get_drivers(): string[];
    get_equipment_identifier(): string;
    get_hardware_revision(): string;
    get_manufacturer(): string;
    get_max_active_bearers(): number;
    get_max_bearers(): number;
    get_model(): string;
    get_plugin(): string;
    get_ports(): [boolean, ModemPortInfo[],number];
    get_power_state(): ModemPowerState;
    get_primary_port(): string;
    get_revision(): string;
    get_signal_quality(): [number, boolean];
    get_sim(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_sim_finish(res: Gio.AsyncResult): Sim;
    get_sim_sync(cancellable: Gio.Cancellable | null): Sim;
    get_state(): ModemState;
    get_state_failed_reason(): ModemStateFailedReason;
    get_supported_bands(): [boolean, ModemBand[],number];
    get_supported_capabilities(): [boolean, ModemCapability[],number];
    get_supported_ip_families(): BearerIpFamily;
    get_supported_modes(): [boolean, ModemModeCombination[],number];
    get_unlock_required(): ModemLock;
    get_unlock_retries(): UnlockRetries;
    list_bearers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    list_bearers_finish(res: Gio.AsyncResult): GLib.List;
    list_bearers_sync(cancellable: Gio.Cancellable | null): GLib.List;
    peek_current_bands(): [boolean, ModemBand[],number];
    peek_ports(): [boolean, ModemPortInfo[],number];
    peek_supported_bands(): [boolean, ModemBand[],number];
    peek_supported_capabilities(): [boolean, ModemCapability[],number];
    peek_supported_modes(): [boolean, ModemModeCombination[],number];
    peek_unlock_retries(): UnlockRetries;
    reset(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    reset_finish(res: Gio.AsyncResult): boolean;
    reset_sync(cancellable: Gio.Cancellable | null): boolean;
    set_current_bands(bands: ModemBand, n_bands: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    set_current_bands_finish(res: Gio.AsyncResult): boolean;
    set_current_bands_sync(bands: ModemBand, n_bands: number, cancellable: Gio.Cancellable | null): boolean;
    set_current_capabilities(capabilities: ModemCapability, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    set_current_capabilities_finish(res: Gio.AsyncResult): boolean;
    set_current_capabilities_sync(capabilities: ModemCapability, cancellable: Gio.Cancellable | null): boolean;
    set_current_modes(modes: ModemMode, preferred: ModemMode, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    set_current_modes_finish(res: Gio.AsyncResult): boolean;
    set_current_modes_sync(modes: ModemMode, preferred: ModemMode, cancellable: Gio.Cancellable | null): boolean;
    set_power_state(state: ModemPowerState, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    set_power_state_finish(res: Gio.AsyncResult): boolean;
    set_power_state_sync(state: ModemPowerState, cancellable: Gio.Cancellable | null): boolean;
    static get_pending_network_initiated_sessions(self: ModemOma): [boolean, OmaPendingNetworkInitiatedSession[],number];
    static peek_pending_network_initiated_sessions(self: ModemOma): [boolean, OmaPendingNetworkInitiatedSession[],number];
}
export class Modem3gpp  {
    constructor(config?: properties);
    readonly priv: Modem3gppPrivate;
    dup_imei(): string;
    dup_initial_eps_bearer_path(): string;
    dup_operator_code(): string;
    dup_operator_name(): string;
    dup_path(): string;
    get_enabled_facility_locks(): Modem3gppFacility;
    get_eps_ue_mode_operation(): Modem3gppEpsUeModeOperation;
    get_imei(): string;
    get_initial_eps_bearer(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_initial_eps_bearer_finish(res: Gio.AsyncResult): Bearer;
    get_initial_eps_bearer_settings(): BearerProperties;
    get_initial_eps_bearer_sync(cancellable: Gio.Cancellable | null): Bearer;
    get_operator_code(): string;
    get_operator_name(): string;
    get_path(): string;
    get_pco(): GLib.List;
    get_registration_state(): Modem3gppRegistrationState;
    get_subscription_state(): Modem3gppSubscriptionState;
    peek_initial_eps_bearer_settings(): BearerProperties;
    register(network_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    register_finish(res: Gio.AsyncResult): boolean;
    register_sync(network_id: string, cancellable: Gio.Cancellable | null): boolean;
    scan(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    scan_finish(res: Gio.AsyncResult): GLib.List;
    scan_sync(cancellable: Gio.Cancellable | null): GLib.List;
    set_eps_ue_mode_operation(mode: Modem3gppEpsUeModeOperation, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean;
    set_eps_ue_mode_operation_sync(mode: Modem3gppEpsUeModeOperation, cancellable: Gio.Cancellable | null): boolean;
    set_initial_eps_bearer_settings(config: BearerProperties, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean;
    set_initial_eps_bearer_settings_sync(config: BearerProperties, cancellable: Gio.Cancellable | null): boolean;
    static network_free(network: Modem3gppNetwork): void;
    static network_get_access_technology(network: Modem3gppNetwork): ModemAccessTechnology;
    static network_get_availability(network: Modem3gppNetwork): Modem3gppNetworkAvailability;
    static network_get_operator_code(network: Modem3gppNetwork): string;
    static network_get_operator_long(network: Modem3gppNetwork): string;
    static network_get_operator_short(network: Modem3gppNetwork): string;
}
export class Modem3gppUssd  {
    constructor(config?: properties);
    readonly unused: object;
    cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    cancel_finish(res: Gio.AsyncResult): boolean;
    cancel_sync(cancellable: Gio.Cancellable | null): boolean;
    dup_network_notification(): string;
    dup_network_request(): string;
    dup_path(): string;
    get_network_notification(): string;
    get_network_request(): string;
    get_path(): string;
    get_state(): Modem3gppUssdSessionState;
    initiate(command: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    initiate_finish(res: Gio.AsyncResult): string;
    initiate_sync(command: string, cancellable: Gio.Cancellable | null): string;
    respond(response: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    respond_finish(res: Gio.AsyncResult): string;
    respond_sync(response: string, cancellable: Gio.Cancellable | null): string;
}
export class ModemCdma  {
    constructor(config?: properties);
    readonly unused: object;
    activate(carrier: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    activate_finish(res: Gio.AsyncResult): boolean;
    activate_manual(properties: CdmaManualActivationProperties, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    activate_manual_finish(res: Gio.AsyncResult): boolean;
    activate_manual_sync(properties: CdmaManualActivationProperties, cancellable: Gio.Cancellable | null): boolean;
    activate_sync(carrier: string, cancellable: Gio.Cancellable | null): boolean;
    dup_esn(): string;
    dup_meid(): string;
    dup_path(): string;
    get_activation_state(): ModemCdmaActivationState;
    get_cdma1x_registration_state(): ModemCdmaRegistrationState;
    get_esn(): string;
    get_evdo_registration_state(): ModemCdmaRegistrationState;
    get_meid(): string;
    get_nid(): number;
    get_path(): string;
    get_sid(): number;
}
export class ModemFirmware  {
    constructor(config?: properties);
    readonly priv: ModemFirmwarePrivate;
    dup_path(): string;
    get_path(): string;
    get_update_settings(): FirmwareUpdateSettings;
    list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    list_finish(res: Gio.AsyncResult): [boolean, FirmwareProperties | null,GLib.List | null];
    list_sync(cancellable: Gio.Cancellable | null): [boolean, FirmwareProperties | null,GLib.List | null];
    peek_update_settings(): FirmwareUpdateSettings;
    select(unique_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    select_finish(res: Gio.AsyncResult): boolean;
    select_sync(unique_id: string, cancellable: Gio.Cancellable | null): boolean;
}
export class ModemLocation  {
    constructor(config?: properties);
    readonly unused: object;
    dup_assistance_data_servers(): string[];
    dup_path(): string;
    dup_supl_server(): string;
    get_3gpp(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_3gpp_finish(res: Gio.AsyncResult): Location3gpp;
    get_3gpp_sync(cancellable: Gio.Cancellable | null): Location3gpp;
    get_assistance_data_servers(): string[];
    get_capabilities(): ModemLocationSource;
    get_cdma_bs(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_cdma_bs_finish(res: Gio.AsyncResult): LocationCdmaBs;
    get_cdma_bs_sync(cancellable: Gio.Cancellable | null): LocationCdmaBs;
    get_enabled(): ModemLocationSource;
    get_full(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_full_finish(res: Gio.AsyncResult): [boolean, Location3gpp | null,LocationGpsNmea | null,LocationGpsRaw | null,LocationCdmaBs | null];
    get_full_sync(cancellable: Gio.Cancellable | null): [boolean, Location3gpp | null,LocationGpsNmea | null,LocationGpsRaw | null,LocationCdmaBs | null];
    get_gps_nmea(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_gps_nmea_finish(res: Gio.AsyncResult): LocationGpsNmea;
    get_gps_nmea_sync(cancellable: Gio.Cancellable | null): LocationGpsNmea;
    get_gps_raw(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_gps_raw_finish(res: Gio.AsyncResult): LocationGpsRaw;
    get_gps_raw_sync(cancellable: Gio.Cancellable | null): LocationGpsRaw;
    get_gps_refresh_rate(): number;
    get_path(): string;
    get_supl_server(): string;
    get_supported_assistance_data(): ModemLocationAssistanceDataType;
    inject_assistance_data(data: number[], data_size: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    inject_assistance_data_finish(res: Gio.AsyncResult): boolean;
    inject_assistance_data_sync(data: number[], data_size: number, cancellable: Gio.Cancellable | null): boolean;
    set_gps_refresh_rate(rate: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean;
    set_gps_refresh_rate_sync(rate: number, cancellable: Gio.Cancellable | null): boolean;
    set_supl_server(supl: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    set_supl_server_finish(res: Gio.AsyncResult): boolean;
    set_supl_server_sync(supl: string, cancellable: Gio.Cancellable | null): boolean;
    setup(sources: ModemLocationSource, signal_location: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    setup_finish(res: Gio.AsyncResult): boolean;
    setup_sync(sources: ModemLocationSource, signal_location: boolean, cancellable: Gio.Cancellable | null): boolean;
    signals_location(): boolean;
}
export class ModemMessaging  {
    constructor(config?: properties);
    readonly priv: ModemMessagingPrivate;
    create(properties: SmsProperties, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    create_finish(res: Gio.AsyncResult): Sms;
    create_sync(properties: SmsProperties, cancellable: Gio.Cancellable | null): Sms;
    _delete(sms: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    delete_finish(res: Gio.AsyncResult): boolean;
    delete_sync(sms: string, cancellable: Gio.Cancellable | null): boolean;
    dup_path(): string;
    get_default_storage(): SmsStorage;
    get_path(): string;
    get_supported_storages(): [boolean, SmsStorage[],number];
    list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    list_finish(res: Gio.AsyncResult): GLib.List;
    list_sync(cancellable: Gio.Cancellable | null): GLib.List;
    peek_supported_storages(): [boolean, SmsStorage,number];
}
export class ModemOma  {
    constructor(config?: properties);
    readonly priv: ModemOmaPrivate;
    accept_network_initiated_session(session_id: number, accept: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean;
    accept_network_initiated_session_sync(session_id: number, accept: boolean, cancellable: Gio.Cancellable | null): boolean;
    cancel_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    cancel_session_finish(res: Gio.AsyncResult): boolean;
    cancel_session_sync(cancellable: Gio.Cancellable | null): boolean;
    dup_path(): string;
    get_features(): OmaFeature;
    get_path(): string;
    get_session_state(): OmaSessionState;
    get_session_type(): OmaSessionType;
    setup(features: OmaFeature, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    setup_finish(res: Gio.AsyncResult): boolean;
    setup_sync(features: OmaFeature, cancellable: Gio.Cancellable | null): boolean;
    start_client_initiated_session(session_type: OmaSessionType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    start_client_initiated_session_finish(res: Gio.AsyncResult): boolean;
    start_client_initiated_session_sync(session_type: OmaSessionType, cancellable: Gio.Cancellable | null): boolean;
}
export class ModemSignal  {
    constructor(config?: properties);
    readonly priv: ModemSignalPrivate;
    dup_path(): string;
    get_cdma(): Signal;
    get_evdo(): Signal;
    get_gsm(): Signal;
    get_lte(): Signal;
    get_path(): string;
    get_rate(): number;
    get_umts(): Signal;
    peek_cdma(): Signal;
    peek_evdo(): Signal;
    peek_gsm(): Signal;
    peek_lte(): Signal;
    peek_umts(): Signal;
    setup(rate: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    setup_finish(res: Gio.AsyncResult): boolean;
    setup_sync(rate: number, cancellable: Gio.Cancellable | null): boolean;
}
export class ModemSimple  {
    constructor(config?: properties);
    readonly unused: object;
    connect(properties: SimpleConnectProperties, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    connect_finish(res: Gio.AsyncResult): Bearer;
    connect_sync(properties: SimpleConnectProperties, cancellable: Gio.Cancellable | null): Bearer;
    disconnect(bearer: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    disconnect_finish(res: Gio.AsyncResult): boolean;
    disconnect_sync(bearer: string | null, cancellable: Gio.Cancellable | null): boolean;
    dup_path(): string;
    get_path(): string;
    get_status(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_status_finish(res: Gio.AsyncResult): SimpleStatus;
    get_status_sync(cancellable: Gio.Cancellable | null): SimpleStatus;
}
export class ModemTime  {
    constructor(config?: properties);
    readonly priv: ModemTimePrivate;
    dup_path(): string;
    get_network_time(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_network_time_finish(res: Gio.AsyncResult): string;
    get_network_time_sync(cancellable: Gio.Cancellable | null): string;
    get_network_timezone(): NetworkTimezone;
    get_path(): string;
    peek_network_timezone(): NetworkTimezone;
}
export class ModemVoice  {
    constructor(config?: properties);
    readonly priv: ModemVoicePrivate;
    create_call(properties: CallProperties, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    create_call_finish(res: Gio.AsyncResult): Call;
    create_call_sync(properties: CallProperties, cancellable: Gio.Cancellable | null): Call;
    delete_call(call: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    delete_call_finish(res: Gio.AsyncResult): boolean;
    delete_call_sync(call: string, cancellable: Gio.Cancellable | null): boolean;
    dup_path(): string;
    get_path(): string;
    list_calls(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    list_calls_finish(res: Gio.AsyncResult): GLib.List;
    list_calls_sync(cancellable: Gio.Cancellable | null): GLib.List;
}
export class NetworkTimezone extends GObject.Object {
    constructor(config?: properties);
    static new_from_dictionary(dictionary: GLib.Variant): NetworkTimezone;
    get_dictionary(): GLib.Variant;
    get_dst_offset(): number;
    get_leap_seconds(): number;
    get_offset(): number;
    set_dst_offset(dst_offset: number): void;
    set_leap_seconds(leap_seconds: number): void;
    set_offset(offset: number): void;
}
export class Object  {
    constructor(config?: properties);
    readonly unused: object;
    dup_path(): string;
    get_modem(): Modem;
    get_modem_3gpp(): Modem3gpp;
    get_modem_3gpp_ussd(): Modem3gppUssd;
    get_modem_cdma(): ModemCdma;
    get_modem_firmware(): ModemFirmware;
    get_modem_location(): ModemLocation;
    get_modem_messaging(): ModemMessaging;
    get_modem_oma(): ModemOma;
    get_modem_signal(): ModemSignal;
    get_modem_simple(): ModemSimple;
    get_modem_time(): ModemTime;
    get_modem_voice(): ModemVoice;
}
export class Pco extends GObject.Object {
    constructor(config?: properties);
    get_data(): [number, number];
    get_data(...args: never[]): never;
    get_session_id(): number;
    is_complete(): boolean;
    set_complete(is_complete: boolean): void;
    set_data(data: number, data_size: number): void;
    set_data(...args: never[]): never;
    set_session_id(session_id: number): void;
    to_variant(): GLib.Variant;
    static from_variant(variant: GLib.Variant): Pco;
    static list_add(pco_list: GLib.List, pco: Pco): GLib.List;
    static list_free(pco_list: GLib.List): void;
}
export class Signal extends GObject.Object {
    constructor(config?: properties);
    static new_from_dictionary(dictionary: GLib.Variant): Signal;
    get_dictionary(): GLib.Variant;
    get_ecio(): number;
    get_io(): number;
    get_rscp(): number;
    get_rsrp(): number;
    get_rsrq(): number;
    get_rssi(): number;
    get_sinr(): number;
    get_snr(): number;
    set_ecio(value: number): void;
    set_io(value: number): void;
    set_rscp(value: number): void;
    set_rsrp(value: number): void;
    set_rsrq(value: number): void;
    set_rssi(value: number): void;
    set_sinr(value: number): void;
    set_snr(value: number): void;
}
export class Sim  {
    constructor(config?: properties);
    readonly unused: object;
    change_pin(old_pin: string, new_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    change_pin_finish(res: Gio.AsyncResult): boolean;
    change_pin_sync(old_pin: string, new_pin: string, cancellable: Gio.Cancellable | null): boolean;
    disable_pin(pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    disable_pin_finish(res: Gio.AsyncResult): boolean;
    disable_pin_sync(pin: string, cancellable: Gio.Cancellable | null): boolean;
    dup_identifier(): string;
    dup_imsi(): string;
    dup_operator_identifier(): string;
    dup_operator_name(): string;
    dup_path(): string;
    enable_pin(pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    enable_pin_finish(res: Gio.AsyncResult): boolean;
    enable_pin_sync(pin: string, cancellable: Gio.Cancellable | null): boolean;
    get_identifier(): string;
    get_imsi(): string;
    get_operator_identifier(): string;
    get_operator_name(): string;
    get_path(): string;
    send_pin(pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    send_pin_finish(res: Gio.AsyncResult): boolean;
    send_pin_sync(pin: string, cancellable: Gio.Cancellable | null): boolean;
    send_puk(puk: string, pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    send_puk_finish(res: Gio.AsyncResult): boolean;
    send_puk_sync(puk: string, pin: string, cancellable: Gio.Cancellable | null): boolean;
}
export class SimpleConnectProperties extends GObject.Object {
    constructor(config?: properties);
    static new_from_dictionary(dictionary: GLib.Variant): SimpleConnectProperties;
    static new_from_string(str: string): SimpleConnectProperties;
    get_allow_roaming(): boolean;
    get_allowed_auth(): BearerAllowedAuth;
    get_apn(): string;
    get_bearer_properties(): BearerProperties;
    get_dictionary(): GLib.Variant;
    get_ip_type(): BearerIpFamily;
    get_number(): string;
    get_operator_id(): string;
    get_password(): string;
    get_pin(): string;
    get_user(): string;
    set_allow_roaming(allow_roaming: boolean): void;
    set_allowed_auth(allowed_auth: BearerAllowedAuth): void;
    set_apn(apn: string): void;
    set_ip_type(ip_type: BearerIpFamily): void;
    set_number(number: string): void;
    set_operator_id(operator_id: string): void;
    set_password(password: string): void;
    set_pin(pin: string): void;
    set_user(user: string): void;
}
export class SimpleStatus extends GObject.Object {
    constructor(config?: properties);
    access_technologies: ModemAccessTechnology;
    cdma_cdma1x_registration_state: ModemCdmaRegistrationState;
    cdma_evdo_registration_state: ModemCdmaRegistrationState;
    cdma_nid: number;
    cdma_sid: number;
    current_bands: GLib.Variant;
    m3gpp_operator_code: string;
    m3gpp_operator_name: string;
    m3gpp_registration_state: Modem3gppRegistrationState;
    m3gpp_subscription_state: Modem3gppSubscriptionState;
    signal_quality: GLib.Variant;
    state: ModemState;static new_from_dictionary(dictionary: GLib.Variant): SimpleStatus;
    get_3gpp_operator_code(): string;
    get_3gpp_operator_name(): string;
    get_3gpp_registration_state(): Modem3gppRegistrationState;
    get_3gpp_subscription_state(): Modem3gppSubscriptionState;
    get_access_technologies(): ModemAccessTechnology;
    get_cdma_cdma1x_registration_state(): ModemCdmaRegistrationState;
    get_cdma_evdo_registration_state(): ModemCdmaRegistrationState;
    get_cdma_nid(): number;
    get_cdma_sid(): number;
    get_current_bands(): [ModemBand,number];
    get_dictionary(): GLib.Variant;
    get_signal_quality(): [number, boolean | null];
    get_state(): ModemState;
}
export class Sms  {
    constructor(config?: properties);
    readonly unused: object;
    dup_data(): [number[], number];
    dup_discharge_timestamp(): string;
    dup_number(): string;
    dup_path(): string;
    dup_smsc(): string;
    dup_text(): string;
    dup_timestamp(): string;
    get_class(): number;
    get_data(): [number[], number];
    get_delivery_report_request(): boolean;
    get_delivery_state(): number;
    get_discharge_timestamp(): string;
    get_message_reference(): number;
    get_number(): string;
    get_path(): string;
    get_pdu_type(): SmsPduType;
    get_service_category(): SmsCdmaServiceCategory;
    get_smsc(): string;
    get_state(): SmsState;
    get_storage(): SmsStorage;
    get_teleservice_id(): SmsCdmaTeleserviceId;
    get_text(): string;
    get_timestamp(): string;
    get_validity_relative(): number;
    get_validity_type(): SmsValidityType;
    send(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    send_finish(res: Gio.AsyncResult): boolean;
    send_sync(cancellable: Gio.Cancellable | null): boolean;
    store(storage: SmsStorage, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    store_finish(res: Gio.AsyncResult): boolean;
    store_sync(storage: SmsStorage, cancellable: Gio.Cancellable | null): boolean;
}
export class SmsProperties extends GObject.Object {
    constructor(config?: properties);
    static new_from_dictionary(dictionary: GLib.Variant): SmsProperties;
    static new_from_string(str: string): SmsProperties;
    dup(): SmsProperties;
    get_class(): number;
    get_data(): [number, number];
    get_data(...args: never[]): never;
    get_data_bytearray(): number[];
    get_delivery_report_request(): boolean;
    get_dictionary(): GLib.Variant;
    get_number(): string;
    get_service_category(): SmsCdmaServiceCategory;
    get_smsc(): string;
    get_teleservice_id(): SmsCdmaTeleserviceId;
    get_text(): string;
    get_validity_relative(): number;
    get_validity_type(): SmsValidityType;
    peek_data_bytearray(): number[];
    set_class(message_class: number): void;
    set_data(data: number, data_length: number): void;
    set_data(...args: never[]): never;
    set_data_bytearray(data: number[]): void;
    set_delivery_report_request(request: boolean): void;
    set_number(number: string): void;
    set_service_category(service_category: SmsCdmaServiceCategory): void;
    set_smsc(smsc: string): void;
    set_teleservice_id(teleservice_id: SmsCdmaTeleserviceId): void;
    set_text(text: string): void;
    set_validity_relative(validity: number): void;
}
export class UnlockRetries extends GObject.Object {
    constructor(config?: properties);
    static new_from_dictionary(dictionary: GLib.Variant): UnlockRetries;
    build_string(): string;
    cmp(b: UnlockRetries): boolean;
    foreach(callback: UnlockRetriesForeachCb, user_data: object | null): void;
    get(lock: ModemLock): number;
    get_dictionary(): GLib.Variant;
    set(lock: ModemLock, retries: number): void;
    unset(lock: ModemLock): void;
}
export class BearerIpConfigPrivate  {
    constructor(config?: properties);
}
export class BearerPrivate  {
    constructor(config?: properties);
}
export class BearerPropertiesPrivate  {
    constructor(config?: properties);
}
export class BearerStatsPrivate  {
    constructor(config?: properties);
}
export class CallAudioFormatPrivate  {
    constructor(config?: properties);
}
export class CallPrivate  {
    constructor(config?: properties);
}
export class CallPropertiesPrivate  {
    constructor(config?: properties);
}
export class CdmaManualActivationPropertiesPrivate  {
    constructor(config?: properties);
}
export class FirmwarePropertiesPrivate  {
    constructor(config?: properties);
}
export class FirmwareUpdateSettingsPrivate  {
    constructor(config?: properties);
}
export class GdbusBearerProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusBearerSkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusModem3gppProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusModem3gppSkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusModem3gppUssdProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusModem3gppUssdSkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusModemCdmaProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusModemCdmaSkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusModemFirmwareProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusModemFirmwareSkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusModemLocationProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusModemLocationSkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusModemMessagingProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusModemMessagingSkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusModemOmaProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusModemOmaSkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusModemProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusModemSignalProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusModemSignalSkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusModemSimpleProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusModemSimpleSkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusModemSkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusModemTimeProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusModemTimeSkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusModemVoiceProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusModemVoiceSkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusObjectManagerClientPrivate  {
    constructor(config?: properties);
}
export class GdbusObjectProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusObjectSkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusOrgFreedesktopModemManager1ProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusOrgFreedesktopModemManager1SkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusSimProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusSimSkeletonPrivate  {
    constructor(config?: properties);
}
export class GdbusSmsProxyPrivate  {
    constructor(config?: properties);
}
export class GdbusSmsSkeletonPrivate  {
    constructor(config?: properties);
}
export class KernelEventPropertiesPrivate  {
    constructor(config?: properties);
}
export class Location3gppPrivate  {
    constructor(config?: properties);
}
export class LocationCdmaBsPrivate  {
    constructor(config?: properties);
}
export class LocationGpsNmeaPrivate  {
    constructor(config?: properties);
}
export class LocationGpsRawPrivate  {
    constructor(config?: properties);
}
export class ManagerPrivate  {
    constructor(config?: properties);
}
export class Modem3gppNetwork  {
    constructor(config?: properties);
}
export class Modem3gppPrivate  {
    constructor(config?: properties);
}
export class ModemFirmwarePrivate  {
    constructor(config?: properties);
}
export class ModemMessagingPrivate  {
    constructor(config?: properties);
}
export class ModemModeCombination  {
    constructor(config?: properties);
    allowed: ModemMode;
    preferred: ModemMode;
}
export class ModemOmaPrivate  {
    constructor(config?: properties);
}
export class ModemPortInfo  {
    constructor(config?: properties);
    name: string;
    type: ModemPortType;
    array_free(array_size: number): void;
}
export class ModemPrivate  {
    constructor(config?: properties);
}
export class ModemSignalPrivate  {
    constructor(config?: properties);
}
export class ModemTimePrivate  {
    constructor(config?: properties);
}
export class ModemVoicePrivate  {
    constructor(config?: properties);
}
export class NetworkTimezonePrivate  {
    constructor(config?: properties);
}
export class OmaPendingNetworkInitiatedSession  {
    constructor(config?: properties);
    session_type: OmaSessionType;
    session_id: number;
}
export class PcoPrivate  {
    constructor(config?: properties);
}
export class SignalPrivate  {
    constructor(config?: properties);
}
export class SimpleConnectPropertiesPrivate  {
    constructor(config?: properties);
}
export class SimpleStatusPrivate  {
    constructor(config?: properties);
}
export class SmsPropertiesPrivate  {
    constructor(config?: properties);
}
export class UnlockRetriesPrivate  {
    constructor(config?: properties);
}
export interface GdbusBearer  {
    bearer_type: number;
    connected: boolean;
    "interface": string;
    ip_timeout: number;
    ip4_config: GLib.Variant;
    ip6_config: GLib.Variant;
    properties: GLib.Variant;
    stats: GLib.Variant;
    suspended: boolean;
    call_connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_connect_finish(res: Gio.AsyncResult): boolean;
    call_connect_sync(cancellable: Gio.Cancellable | null): boolean;
    call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(cancellable: Gio.Cancellable | null): boolean;
    complete_connect(invocation: Gio.DBusMethodInvocation): void;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
}
export interface GdbusModem  {
    access_technologies: number;
    bearers: string[];
    carrier_configuration: string;
    carrier_configuration_revision: string;
    current_bands: GLib.Variant;
    current_capabilities: number;
    current_modes: GLib.Variant;
    device: string;
    device_identifier: string;
    drivers: string[];
    equipment_identifier: string;
    hardware_revision: string;
    manufacturer: string;
    max_active_bearers: number;
    max_bearers: number;
    model: string;
    own_numbers: string[];
    plugin: string;
    ports: GLib.Variant;
    power_state: number;
    primary_port: string;
    revision: string;
    signal_quality: GLib.Variant;
    sim: string;
    state: number;
    state_failed_reason: number;
    supported_bands: GLib.Variant;
    supported_capabilities: GLib.Variant;
    supported_ip_families: number;
    supported_modes: GLib.Variant;
    unlock_required: number;
    unlock_retries: GLib.Variant;
    call_command(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_command_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_command_sync(arg_cmd: string, arg_timeout: number, cancellable: Gio.Cancellable | null): [boolean, string | null];
    call_create_bearer(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_create_bearer_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_bearer_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string | null];
    call_delete_bearer(arg_bearer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_delete_bearer_finish(res: Gio.AsyncResult): boolean;
    call_delete_bearer_sync(arg_bearer: string, cancellable: Gio.Cancellable | null): boolean;
    call_enable(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_enable_finish(res: Gio.AsyncResult): boolean;
    call_enable_sync(arg_enable: boolean, cancellable: Gio.Cancellable | null): boolean;
    call_factory_reset(arg_code: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_factory_reset_finish(res: Gio.AsyncResult): boolean;
    call_factory_reset_sync(arg_code: string, cancellable: Gio.Cancellable | null): boolean;
    call_list_bearers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_list_bearers_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_list_bearers_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
    call_reset(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_reset_finish(res: Gio.AsyncResult): boolean;
    call_reset_sync(cancellable: Gio.Cancellable | null): boolean;
    call_set_current_bands(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_current_bands_finish(res: Gio.AsyncResult): boolean;
    call_set_current_bands_sync(arg_bands: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_set_current_capabilities(arg_capabilities: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_current_capabilities_finish(res: Gio.AsyncResult): boolean;
    call_set_current_capabilities_sync(arg_capabilities: number, cancellable: Gio.Cancellable | null): boolean;
    call_set_current_modes(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_current_modes_finish(res: Gio.AsyncResult): boolean;
    call_set_current_modes_sync(arg_modes: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_set_power_state(arg_state: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_power_state_finish(res: Gio.AsyncResult): boolean;
    call_set_power_state_sync(arg_state: number, cancellable: Gio.Cancellable | null): boolean;
    complete_command(invocation: Gio.DBusMethodInvocation, response: string): void;
    complete_create_bearer(invocation: Gio.DBusMethodInvocation, path: string): void;
    complete_delete_bearer(invocation: Gio.DBusMethodInvocation): void;
    complete_enable(invocation: Gio.DBusMethodInvocation): void;
    complete_factory_reset(invocation: Gio.DBusMethodInvocation): void;
    complete_list_bearers(invocation: Gio.DBusMethodInvocation, bearers: string): void;
    complete_reset(invocation: Gio.DBusMethodInvocation): void;
    complete_set_current_bands(invocation: Gio.DBusMethodInvocation): void;
    complete_set_current_capabilities(invocation: Gio.DBusMethodInvocation): void;
    complete_set_current_modes(invocation: Gio.DBusMethodInvocation): void;
    complete_set_power_state(invocation: Gio.DBusMethodInvocation): void;
    emit_state_changed(arg_old: number, arg_new: number, arg_reason: number): void;
}
export interface GdbusModem3gpp  {
    enabled_facility_locks: number;
    eps_ue_mode_operation: number;
    imei: string;
    initial_eps_bearer: string;
    initial_eps_bearer_settings: GLib.Variant;
    operator_code: string;
    operator_name: string;
    pco: GLib.Variant;
    registration_state: number;
    subscription_state: number;
    call_register(arg_operator_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_register_finish(res: Gio.AsyncResult): boolean;
    call_register_sync(arg_operator_id: string, cancellable: Gio.Cancellable | null): boolean;
    call_scan(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_scan_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_scan_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_set_eps_ue_mode_operation(arg_mode: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_eps_ue_mode_operation_finish(res: Gio.AsyncResult): boolean;
    call_set_eps_ue_mode_operation_sync(arg_mode: number, cancellable: Gio.Cancellable | null): boolean;
    call_set_initial_eps_bearer_settings(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_initial_eps_bearer_settings_finish(res: Gio.AsyncResult): boolean;
    call_set_initial_eps_bearer_settings_sync(arg_settings: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    complete_register(invocation: Gio.DBusMethodInvocation): void;
    complete_scan(invocation: Gio.DBusMethodInvocation, results: GLib.Variant): void;
    complete_set_eps_ue_mode_operation(invocation: Gio.DBusMethodInvocation): void;
    complete_set_initial_eps_bearer_settings(invocation: Gio.DBusMethodInvocation): void;
}
export interface GdbusModem3gppUssd  {
    network_notification: string;
    network_request: string;
    state: number;
    call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_cancel_finish(res: Gio.AsyncResult): boolean;
    call_cancel_sync(cancellable: Gio.Cancellable | null): boolean;
    call_initiate(arg_command: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_initiate_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_initiate_sync(arg_command: string, cancellable: Gio.Cancellable | null): [boolean, string | null];
    call_respond(arg_response: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_respond_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_respond_sync(arg_response: string, cancellable: Gio.Cancellable | null): [boolean, string | null];
    complete_cancel(invocation: Gio.DBusMethodInvocation): void;
    complete_initiate(invocation: Gio.DBusMethodInvocation, reply: string): void;
    complete_respond(invocation: Gio.DBusMethodInvocation, reply: string): void;
}
export interface GdbusModemCdma  {
    activation_state: number;
    cdma1x_registration_state: number;
    esn: string;
    evdo_registration_state: number;
    meid: string;
    nid: number;
    sid: number;
    call_activate(arg_carrier_code: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_activate_finish(res: Gio.AsyncResult): boolean;
    call_activate_manual(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_activate_manual_finish(res: Gio.AsyncResult): boolean;
    call_activate_manual_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_activate_sync(arg_carrier_code: string, cancellable: Gio.Cancellable | null): boolean;
    complete_activate(invocation: Gio.DBusMethodInvocation): void;
    complete_activate_manual(invocation: Gio.DBusMethodInvocation): void;
    emit_activation_state_changed(arg_activation_state: number, arg_activation_error: number, arg_status_changes: GLib.Variant): void;
}
export interface GdbusModemFirmware  {
    update_settings: GLib.Variant;
    call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_list_finish(res: Gio.AsyncResult): [boolean, string | null,GLib.Variant | null];
    call_list_sync(cancellable: Gio.Cancellable | null): [boolean, string | null,GLib.Variant | null];
    call_select(arg_uniqueid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_select_finish(res: Gio.AsyncResult): boolean;
    call_select_sync(arg_uniqueid: string, cancellable: Gio.Cancellable | null): boolean;
    complete_list(invocation: Gio.DBusMethodInvocation, selected: string, installed: GLib.Variant): void;
    complete_select(invocation: Gio.DBusMethodInvocation): void;
}
export interface GdbusModemLocation  {
    assistance_data_servers: string[];
    capabilities: number;
    enabled: number;
    gps_refresh_rate: number;
    location: GLib.Variant;
    signals_location: boolean;
    supl_server: string;
    supported_assistance_data: number;
    call_get_location(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_get_location_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_get_location_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    call_inject_assistance_data(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_inject_assistance_data_finish(res: Gio.AsyncResult): boolean;
    call_inject_assistance_data_sync(arg_data: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_set_gps_refresh_rate(arg_rate: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_gps_refresh_rate_finish(res: Gio.AsyncResult): boolean;
    call_set_gps_refresh_rate_sync(arg_rate: number, cancellable: Gio.Cancellable | null): boolean;
    call_set_supl_server(arg_supl: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_supl_server_finish(res: Gio.AsyncResult): boolean;
    call_set_supl_server_sync(arg_supl: string, cancellable: Gio.Cancellable | null): boolean;
    call_setup(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_setup_finish(res: Gio.AsyncResult): boolean;
    call_setup_sync(arg_sources: number, arg_signal_location: boolean, cancellable: Gio.Cancellable | null): boolean;
    complete_get_location(invocation: Gio.DBusMethodInvocation, Location: GLib.Variant): void;
    complete_inject_assistance_data(invocation: Gio.DBusMethodInvocation): void;
    complete_set_gps_refresh_rate(invocation: Gio.DBusMethodInvocation): void;
    complete_set_supl_server(invocation: Gio.DBusMethodInvocation): void;
    complete_setup(invocation: Gio.DBusMethodInvocation): void;
}
export interface GdbusModemMessaging  {
    default_storage: number;
    messages: string[];
    supported_storages: GLib.Variant;
    call_create(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_create_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string | null];
    call_delete(arg_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_delete_finish(res: Gio.AsyncResult): boolean;
    call_delete_sync(arg_path: string, cancellable: Gio.Cancellable | null): boolean;
    call_list(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_list_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_list_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
    complete_create(invocation: Gio.DBusMethodInvocation, path: string): void;
    complete_delete(invocation: Gio.DBusMethodInvocation): void;
    complete_list(invocation: Gio.DBusMethodInvocation, result: string): void;
    emit_added(arg_path: string, arg_received: boolean): void;
    emit_deleted(arg_path: string): void;
}
export interface GdbusModemOma  {
    features: number;
    pending_network_initiated_sessions: GLib.Variant;
    session_state: number;
    session_type: number;
    call_accept_network_initiated_session(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_accept_network_initiated_session_finish(res: Gio.AsyncResult): boolean;
    call_accept_network_initiated_session_sync(arg_session_id: number, arg_accept: boolean, cancellable: Gio.Cancellable | null): boolean;
    call_cancel_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_cancel_session_finish(res: Gio.AsyncResult): boolean;
    call_cancel_session_sync(cancellable: Gio.Cancellable | null): boolean;
    call_setup(arg_features: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_setup_finish(res: Gio.AsyncResult): boolean;
    call_setup_sync(arg_features: number, cancellable: Gio.Cancellable | null): boolean;
    call_start_client_initiated_session(arg_session_type: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_start_client_initiated_session_finish(res: Gio.AsyncResult): boolean;
    call_start_client_initiated_session_sync(arg_session_type: number, cancellable: Gio.Cancellable | null): boolean;
    complete_accept_network_initiated_session(invocation: Gio.DBusMethodInvocation): void;
    complete_cancel_session(invocation: Gio.DBusMethodInvocation): void;
    complete_setup(invocation: Gio.DBusMethodInvocation): void;
    complete_start_client_initiated_session(invocation: Gio.DBusMethodInvocation): void;
    emit_session_state_changed(arg_old_session_state: number, arg_new_session_state: number, arg_session_state_failed_reason: number): void;
}
export interface GdbusModemSignal  {
    cdma: GLib.Variant;
    evdo: GLib.Variant;
    gsm: GLib.Variant;
    lte: GLib.Variant;
    rate: number;
    umts: GLib.Variant;
    call_setup(arg_rate: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_setup_finish(res: Gio.AsyncResult): boolean;
    call_setup_sync(arg_rate: number, cancellable: Gio.Cancellable | null): boolean;
    complete_setup(invocation: Gio.DBusMethodInvocation): void;
}
export interface GdbusModemSimple  {
    call_connect(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_connect_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_connect_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string | null];
    call_disconnect(arg_bearer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_disconnect_finish(res: Gio.AsyncResult): boolean;
    call_disconnect_sync(arg_bearer: string, cancellable: Gio.Cancellable | null): boolean;
    call_get_status(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_get_status_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
    call_get_status_sync(cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
    complete_connect(invocation: Gio.DBusMethodInvocation, bearer: string): void;
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    complete_get_status(invocation: Gio.DBusMethodInvocation, properties: GLib.Variant): void;
}
export interface GdbusModemTime  {
    network_timezone: GLib.Variant;
    call_get_network_time(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_get_network_time_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_get_network_time_sync(cancellable: Gio.Cancellable | null): [boolean, string | null];
    complete_get_network_time(invocation: Gio.DBusMethodInvocation, time: string): void;
    emit_network_time_changed(arg_time: string): void;
}
export interface GdbusModemVoice  {
    calls: string[];
    call_create_call(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_create_call_finish(res: Gio.AsyncResult): [boolean, string | null];
    call_create_call_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string | null];
    call_delete_call(arg_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_delete_call_finish(res: Gio.AsyncResult): boolean;
    call_delete_call_sync(arg_path: string, cancellable: Gio.Cancellable | null): boolean;
    call_list_calls(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_list_calls_finish(res: Gio.AsyncResult): [boolean, string[] | null];
    call_list_calls_sync(cancellable: Gio.Cancellable | null): [boolean, string[] | null];
    complete_create_call(invocation: Gio.DBusMethodInvocation, path: string): void;
    complete_delete_call(invocation: Gio.DBusMethodInvocation): void;
    complete_list_calls(invocation: Gio.DBusMethodInvocation, result: string): void;
    emit_call_added(arg_path: string): void;
    emit_call_deleted(arg_path: string): void;
}
export interface GdbusObject  {
    modem: GdbusModem;
    modem_cdma: GdbusModemCdma;
    modem_firmware: GdbusModemFirmware;
    modem_location: GdbusModemLocation;
    modem_messaging: GdbusModemMessaging;
    modem_oma: GdbusModemOma;
    modem_signal: GdbusModemSignal;
    modem_simple: GdbusModemSimple;
    modem_time: GdbusModemTime;
    modem_voice: GdbusModemVoice;
    modem3gpp: GdbusModem3gpp;
    modem3gpp_ussd: GdbusModem3gppUssd;
    get_modem(): GdbusModem | null;
    get_modem3gpp(): GdbusModem3gpp | null;
    get_modem3gpp_ussd(): GdbusModem3gppUssd | null;
    get_modem_cdma(): GdbusModemCdma | null;
    get_modem_firmware(): GdbusModemFirmware | null;
    get_modem_location(): GdbusModemLocation | null;
    get_modem_messaging(): GdbusModemMessaging | null;
    get_modem_oma(): GdbusModemOma | null;
    get_modem_signal(): GdbusModemSignal | null;
    get_modem_simple(): GdbusModemSimple | null;
    get_modem_time(): GdbusModemTime | null;
    get_modem_voice(): GdbusModemVoice | null;
}
export interface GdbusOrgFreedesktopModemManager1  {
    version: string;
    call_inhibit_device(arg_uid: string, arg_inhibit: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_inhibit_device_finish(res: Gio.AsyncResult): boolean;
    call_inhibit_device_sync(arg_uid: string, arg_inhibit: boolean, cancellable: Gio.Cancellable | null): boolean;
    call_report_kernel_event(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_report_kernel_event_finish(res: Gio.AsyncResult): boolean;
    call_report_kernel_event_sync(arg_properties: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
    call_scan_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_scan_devices_finish(res: Gio.AsyncResult): boolean;
    call_scan_devices_sync(cancellable: Gio.Cancellable | null): boolean;
    call_set_logging(arg_level: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_set_logging_finish(res: Gio.AsyncResult): boolean;
    call_set_logging_sync(arg_level: string, cancellable: Gio.Cancellable | null): boolean;
    complete_inhibit_device(invocation: Gio.DBusMethodInvocation): void;
    complete_report_kernel_event(invocation: Gio.DBusMethodInvocation): void;
    complete_scan_devices(invocation: Gio.DBusMethodInvocation): void;
    complete_set_logging(invocation: Gio.DBusMethodInvocation): void;
}
export interface GdbusSim  {
    imsi: string;
    operator_identifier: string;
    operator_name: string;
    sim_identifier: string;
    call_change_pin(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_change_pin_finish(res: Gio.AsyncResult): boolean;
    call_change_pin_sync(arg_old_pin: string, arg_new_pin: string, cancellable: Gio.Cancellable | null): boolean;
    call_enable_pin(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_enable_pin_finish(res: Gio.AsyncResult): boolean;
    call_enable_pin_sync(arg_pin: string, arg_enabled: boolean, cancellable: Gio.Cancellable | null): boolean;
    call_send_pin(arg_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_send_pin_finish(res: Gio.AsyncResult): boolean;
    call_send_pin_sync(arg_pin: string, cancellable: Gio.Cancellable | null): boolean;
    call_send_puk(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_send_puk_finish(res: Gio.AsyncResult): boolean;
    call_send_puk_sync(arg_puk: string, arg_pin: string, cancellable: Gio.Cancellable | null): boolean;
    complete_change_pin(invocation: Gio.DBusMethodInvocation): void;
    complete_enable_pin(invocation: Gio.DBusMethodInvocation): void;
    complete_send_pin(invocation: Gio.DBusMethodInvocation): void;
    complete_send_puk(invocation: Gio.DBusMethodInvocation): void;
}
export interface GdbusSms  {
    "class": number;
    data: GLib.Variant;
    delivery_report_request: boolean;
    delivery_state: number;
    discharge_timestamp: string;
    message_reference: number;
    number: string;
    pdu_type: number;
    service_category: number;
    smsc: string;
    state: number;
    storage: number;
    teleservice_id: number;
    text: string;
    timestamp: string;
    validity: GLib.Variant;
    call_send(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_send_finish(res: Gio.AsyncResult): boolean;
    call_send_sync(cancellable: Gio.Cancellable | null): boolean;
    call_store(arg_storage: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    call_store_finish(res: Gio.AsyncResult): boolean;
    call_store_sync(arg_storage: number, cancellable: Gio.Cancellable | null): boolean;
    complete_send(invocation: Gio.DBusMethodInvocation): void;
    complete_store(invocation: Gio.DBusMethodInvocation): void;
}