
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as TelepathyGLib from "telepathyglib";
/**
 * telepathyglib.d.ts
 */
type properties = { [key: string]: any };
export type AccountChannelRequestDelegatedChannelCb = (request: AccountChannelRequest, channel: Channel, user_data: object | null) => void;
export type BaseClientClassAddDispatchOperationImpl = (client: BaseClient, account: Account, connection: Connection, channels: GLib.List, dispatch_operation: ChannelDispatchOperation, context: AddDispatchOperationContext) => void;
export type BaseClientClassHandleChannelsImpl = (client: BaseClient, account: Account, connection: Connection, channels: GLib.List, requests_satisfied: GLib.List, user_action_time: number, context: HandleChannelsContext) => void;
export type BaseClientClassObserveChannelsImpl = (client: BaseClient, account: Account, connection: Connection, channels: GLib.List, dispatch_operation: ChannelDispatchOperation | null, requests: GLib.List, context: ObserveChannelsContext) => void;
export type BaseClientDelegatedChannelsCb = (client: BaseClient, channels: Channel[], user_data: object | null) => void;
export type BaseConnectionCreateChannelFactoriesImpl = (self: BaseConnection) => object[];
export type BaseConnectionCreateChannelManagersImpl = (self: BaseConnection) => object[];
export type BaseConnectionCreateHandleReposImpl = (self: BaseConnection, repos: HandleRepoIface) => void;
export type BaseConnectionGetInterfacesImpl = (self: BaseConnection) => object[];
export type BaseConnectionGetUniqueConnectionNameImpl = (self: BaseConnection) => string;
export type BaseConnectionProc = (self: BaseConnection) => void;
export type BaseConnectionStartConnectingImpl = (self: BaseConnection) => boolean;
export type ChannelWhenReadyCb = (channel: Channel, error: GLib.Error, user_data: object | null) => void;
export type ConnectionContactsByHandleCb = (connection: Connection, n_contacts: number, contacts: Contact[], n_failed: number, failed: Handle[], error: GLib.Error, user_data: object | null, weak_object: GObject.Object) => void;
export type ConnectionContactsByIdCb = (connection: Connection, n_contacts: number, contacts: Contact[], requested_ids: string[], failed_id_errors: GLib.HashTable, error: GLib.Error, user_data: object | null, weak_object: GObject.Object) => void;
export type ConnectionHoldHandlesCb = (connection: Connection, handle_type: HandleType, n_handles: number, handles: Handle, error: GLib.Error, user_data: object | null, weak_object: GObject.Object) => void;
export type ConnectionManagerListCb = (cms: ConnectionManager[], n_cms: number, error: GLib.Error, user_data: object | null, weak_object: GObject.Object) => void;
export type ConnectionManagerWhenReadyCb = (cm: ConnectionManager, error: GLib.Error, user_data: object | null, weak_object: GObject.Object) => void;
export type ConnectionNameListCb = (names: string[], n: number, cms: string[], protocols: string[], error: GLib.Error, user_data: object | null, weak_object: GObject.Object) => void;
export type ConnectionRequestHandlesCb = (connection: Connection, handle_type: HandleType, n_handles: number, handles: number[], ids: string[], error: GLib.Error, user_data: object | null, weak_object: GObject.Object) => void;
export type ConnectionUpgradeContactsCb = (connection: Connection, n_contacts: number, contacts: Contact[], error: GLib.Error, user_data: object | null, weak_object: GObject.Object) => void;
export type ConnectionWhenReadyCb = (connection: Connection, error: GLib.Error, user_data: object | null) => void;
export type ContactsMixinFillContactAttributesFunc = (obj: GObject.Object, contacts: object[], attributes_hash: GLib.HashTable) => void;
export type DBusDaemonListNamesCb = (bus_daemon: DBusDaemon, names: string, error: GLib.Error, user_data: object | null, weak_object: GObject.Object) => void;
export type DBusDaemonNameOwnerChangedCb = (bus_daemon: DBusDaemon, name: string, new_owner: string, user_data: object | null) => void;
export type DBusPropertiesMixinGetter = (object: GObject.Object, iface: GLib.Quark, name: GLib.Quark, value: GObject.Value, getter_data: object | null) => void;
export type DBusPropertiesMixinSetter = (object: GObject.Object, iface: GLib.Quark, name: GLib.Quark, value: GObject.Value, setter_data: object | null) => boolean;
export type GroupMixinAddMemberFunc = (obj: GObject.Object, handle: Handle, message: string) => boolean;
export type GroupMixinRemMemberFunc = (obj: GObject.Object, handle: Handle, message: string) => boolean;
export type GroupMixinRemMemberWithReasonFunc = (obj: GObject.Object, handle: Handle, message: string, reason: number) => boolean;
export type HandleSetMemberFunc = (set: HandleSet, handle: Handle, userdata: object | null) => void;
export type IntFunc = (i: number, userdata: object | null) => void;
export type PresenceMixinGetContactStatusesFunc = (obj: GObject.Object, contacts: object[]) => GLib.HashTable;
export type PresenceMixinGetMaximumStatusMessageLengthFunc = (obj: GObject.Object) => number;
export type PresenceMixinSetOwnStatusFunc = (obj: GObject.Object, status: PresenceStatus) => boolean;
export type PresenceMixinStatusAvailableFunc = (obj: GObject.Object, which: number) => boolean;
export type ProxyPrepareAsync = (proxy: Proxy, feature: ProxyFeature, callback: Gio.AsyncReadyCallback | null, user_data: object | null) => void;
export type SimpleApproverAddDispatchOperationImpl = (approver: SimpleApprover, account: Account, connection: Connection, channels: GLib.List, dispatch_operation: ChannelDispatchOperation | null, context: AddDispatchOperationContext, user_data: object | null) => void;
export type SimpleHandlerHandleChannelsImpl = (handler: SimpleHandler, account: Account, connection: Connection, channels: GLib.List, requests_satisfied: GLib.List, user_action_time: number, context: HandleChannelsContext, user_data: object | null) => void;
export type SimpleObserverObserveChannelsImpl = (observer: SimpleObserver, account: Account, connection: Connection, channels: GLib.List, dispatch_operation: ChannelDispatchOperation | null, requests: GLib.List, context: ObserveChannelsContext, user_data: object | null) => void;
export const ACCOUNT_MANAGER_BUS_NAME: string;
export const ACCOUNT_MANAGER_OBJECT_PATH: string;
export const ACCOUNT_OBJECT_PATH_BASE: string;
export const CHANNEL_DISPATCHER_BUS_NAME: string;
export const CHANNEL_DISPATCHER_OBJECT_PATH: string;
export const CLIENT_BUS_NAME_BASE: string;
export const CLIENT_OBJECT_PATH_BASE: string;
export const CM_BUS_NAME_BASE: string;
export const CM_OBJECT_PATH_BASE: string;
export const CONN_BUS_NAME_BASE: string;
export const CONN_OBJECT_PATH_BASE: string;
export const CONTACT_FEATURE_INVALID: ContactFeature;
export const DEBUG_OBJECT_PATH: string;
export const ERROR_PREFIX: string;
export const IFACE_ACCOUNT: string;
export const IFACE_ACCOUNT_INTERFACE_ADDRESSING: string;
export const IFACE_ACCOUNT_INTERFACE_AVATAR: string;
export const IFACE_ACCOUNT_INTERFACE_STORAGE: string;
export const IFACE_ACCOUNT_MANAGER: string;
export const IFACE_AUTHENTICATION_TLS_CERTIFICATE: string;
export const IFACE_CALL_CONTENT: string;
export const IFACE_CALL_CONTENT_INTERFACE_AUDIO_CONTROL: string;
export const IFACE_CALL_CONTENT_INTERFACE_DTMF: string;
export const IFACE_CALL_CONTENT_INTERFACE_MEDIA: string;
export const IFACE_CALL_CONTENT_INTERFACE_VIDEO_CONTROL: string;
export const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION: string;
export const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS: string;
export const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_FEEDBACK: string;
export const IFACE_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTP_HEADER_EXTENSIONS: string;
export const IFACE_CALL_STREAM: string;
export const IFACE_CALL_STREAM_ENDPOINT: string;
export const IFACE_CALL_STREAM_INTERFACE_MEDIA: string;
export const IFACE_CHANNEL: string;
export const IFACE_CHANNEL_DISPATCHER: string;
export const IFACE_CHANNEL_DISPATCHER_INTERFACE_MESSAGES1: string;
export const IFACE_CHANNEL_DISPATCHER_INTERFACE_OPERATION_LIST: string;
export const IFACE_CHANNEL_DISPATCH_OPERATION: string;
export const IFACE_CHANNEL_INTERFACE_ANONYMITY: string;
export const IFACE_CHANNEL_INTERFACE_CALL_STATE: string;
export const IFACE_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION: string;
export const IFACE_CHANNEL_INTERFACE_CHAT_STATE: string;
export const IFACE_CHANNEL_INTERFACE_CONFERENCE: string;
export const IFACE_CHANNEL_INTERFACE_DESTROYABLE: string;
export const IFACE_CHANNEL_INTERFACE_DTMF: string;
export const IFACE_CHANNEL_INTERFACE_FILE_TRANSFER_METADATA: string;
export const IFACE_CHANNEL_INTERFACE_GROUP: string;
export const IFACE_CHANNEL_INTERFACE_HOLD: string;
export const IFACE_CHANNEL_INTERFACE_MEDIA_SIGNALLING: string;
export const IFACE_CHANNEL_INTERFACE_MESSAGES: string;
export const IFACE_CHANNEL_INTERFACE_PASSWORD: string;
export const IFACE_CHANNEL_INTERFACE_ROOM: string;
export const IFACE_CHANNEL_INTERFACE_ROOM_CONFIG: string;
export const IFACE_CHANNEL_INTERFACE_SASL_AUTHENTICATION: string;
export const IFACE_CHANNEL_INTERFACE_SECURABLE: string;
export const IFACE_CHANNEL_INTERFACE_SERVICE_POINT: string;
export const IFACE_CHANNEL_INTERFACE_SMS: string;
export const IFACE_CHANNEL_INTERFACE_SUBJECT: string;
export const IFACE_CHANNEL_INTERFACE_TUBE: string;
export const IFACE_CHANNEL_REQUEST: string;
export const IFACE_CHANNEL_TYPE_CALL: string;
export const IFACE_CHANNEL_TYPE_CONTACT_LIST: string;
export const IFACE_CHANNEL_TYPE_CONTACT_SEARCH: string;
export const IFACE_CHANNEL_TYPE_DBUS_TUBE: string;
export const IFACE_CHANNEL_TYPE_FILE_TRANSFER: string;
export const IFACE_CHANNEL_TYPE_ROOM_LIST: string;
export const IFACE_CHANNEL_TYPE_SERVER_AUTHENTICATION: string;
export const IFACE_CHANNEL_TYPE_SERVER_TLS_CONNECTION: string;
export const IFACE_CHANNEL_TYPE_STREAMED_MEDIA: string;
export const IFACE_CHANNEL_TYPE_STREAM_TUBE: string;
export const IFACE_CHANNEL_TYPE_TEXT: string;
export const IFACE_CHANNEL_TYPE_TUBES: string;
export const IFACE_CLIENT: string;
export const IFACE_CLIENT_APPROVER: string;
export const IFACE_CLIENT_HANDLER: string;
export const IFACE_CLIENT_INTERFACE_REQUESTS: string;
export const IFACE_CLIENT_OBSERVER: string;
export const IFACE_CONNECTION: string;
export const IFACE_CONNECTION_INTERFACE_ADDRESSING: string;
export const IFACE_CONNECTION_INTERFACE_ALIASING: string;
export const IFACE_CONNECTION_INTERFACE_ANONYMITY: string;
export const IFACE_CONNECTION_INTERFACE_AVATARS: string;
export const IFACE_CONNECTION_INTERFACE_BALANCE: string;
export const IFACE_CONNECTION_INTERFACE_CAPABILITIES: string;
export const IFACE_CONNECTION_INTERFACE_CELLULAR: string;
export const IFACE_CONNECTION_INTERFACE_CLIENT_TYPES: string;
export const IFACE_CONNECTION_INTERFACE_CONTACTS: string;
export const IFACE_CONNECTION_INTERFACE_CONTACT_BLOCKING: string;
export const IFACE_CONNECTION_INTERFACE_CONTACT_CAPABILITIES: string;
export const IFACE_CONNECTION_INTERFACE_CONTACT_GROUPS: string;
export const IFACE_CONNECTION_INTERFACE_CONTACT_INFO: string;
export const IFACE_CONNECTION_INTERFACE_CONTACT_LIST: string;
export const IFACE_CONNECTION_INTERFACE_LOCATION: string;
export const IFACE_CONNECTION_INTERFACE_MAIL_NOTIFICATION: string;
export const IFACE_CONNECTION_INTERFACE_POWER_SAVING: string;
export const IFACE_CONNECTION_INTERFACE_PRESENCE: string;
export const IFACE_CONNECTION_INTERFACE_RENAMING: string;
export const IFACE_CONNECTION_INTERFACE_REQUESTS: string;
export const IFACE_CONNECTION_INTERFACE_SERVICE_POINT: string;
export const IFACE_CONNECTION_INTERFACE_SIDECARS1: string;
export const IFACE_CONNECTION_INTERFACE_SIMPLE_PRESENCE: string;
export const IFACE_CONNECTION_MANAGER: string;
export const IFACE_DBUS_DAEMON: string;
export const IFACE_DBUS_INTROSPECTABLE: string;
export const IFACE_DBUS_PEER: string;
export const IFACE_DBUS_PROPERTIES: string;
export const IFACE_DEBUG: string;
export const IFACE_MEDIA_SESSION_HANDLER: string;
export const IFACE_MEDIA_STREAM_HANDLER: string;
export const IFACE_PROPERTIES_INTERFACE: string;
export const IFACE_PROTOCOL: string;
export const IFACE_PROTOCOL_INTERFACE_ADDRESSING: string;
export const IFACE_PROTOCOL_INTERFACE_AVATARS: string;
export const IFACE_PROTOCOL_INTERFACE_PRESENCE: string;
export const INTERNAL_CONNECTION_STATUS_NEW: ConnectionStatus;
export const NUM_ACCESS_CONTROL_TYPES: number;
export const NUM_CALL_CONTENT_DISPOSITIONS: number;
export const NUM_CALL_CONTENT_PACKETIZATION_TYPES: number;
export const NUM_CALL_STATES: number;
export const NUM_CALL_STATE_CHANGE_REASONS: number;
export const NUM_CALL_STREAM_CANDIDATE_TYPES: number;
export const NUM_CAPTCHA_CANCEL_REASONS: number;
export const NUM_CAPTCHA_STATUSES: number;
export const NUM_CHANNEL_CHAT_STATES: number;
export const NUM_CHANNEL_CONTACT_SEARCH_STATES: number;
export const NUM_CHANNEL_GROUP_CHANGE_REASONS: number;
export const NUM_CHANNEL_TEXT_MESSAGE_TYPES: number;
export const NUM_CHANNEL_TEXT_SEND_ERRORS: number;
export const NUM_CONNECTION_PRESENCE_TYPES: number;
export const NUM_CONNECTION_STATUSES: number;
export const NUM_CONNECTION_STATUS_REASONS: number;
export const NUM_CONTACT_FEATURES: number;
export const NUM_CONTACT_LIST_STATES: number;
export const NUM_CONTACT_METADATA_STORAGE_TYPES: number;
export const NUM_DBUS_ERRORS: number;
export const NUM_DEBUG_LEVELS: number;
export const NUM_DELIVERY_STATUSES: number;
export const NUM_DTMF_EVENTS: number;
export const NUM_FILE_HASH_TYPES: number;
export const NUM_FILE_TRANSFER_STATES: number;
export const NUM_FILE_TRANSFER_STATE_CHANGE_REASONS: number;
export const NUM_HANDLE_TYPES: number;
export const NUM_HTTP_METHODS: number;
export const NUM_LOCAL_HOLD_STATES: number;
export const NUM_LOCAL_HOLD_STATE_REASONS: number;
export const NUM_MEDIA_STREAM_BASE_PROTOS: number;
export const NUM_MEDIA_STREAM_DIRECTIONS: number;
export const NUM_MEDIA_STREAM_ERRORS: number;
export const NUM_MEDIA_STREAM_STATES: number;
export const NUM_MEDIA_STREAM_TRANSPORT_TYPES: number;
export const NUM_MEDIA_STREAM_TYPES: number;
export const NUM_RCPT_XR_RTT_MODES: number;
export const NUM_RICH_PRESENCE_ACCESS_CONTROL_TYPES: number;
export const NUM_SASL_ABORT_REASONS: number;
export const NUM_SASL_STATUSES: number;
export const NUM_SENDING_STATES: number;
export const NUM_SERVICE_POINT_TYPES: number;
export const NUM_SOCKET_ACCESS_CONTROLS: number;
export const NUM_SOCKET_ADDRESS_TYPES: number;
export const NUM_STREAM_COMPONENTS: number;
export const NUM_STREAM_ENDPOINT_STATES: number;
export const NUM_STREAM_FLOW_STATES: number;
export const NUM_STREAM_TRANSPORT_TYPES: number;
export const NUM_SUBSCRIPTION_STATES: number;
export const NUM_TLS_CERTIFICATE_REJECT_REASONS: number;
export const NUM_TLS_CERTIFICATE_STATES: number;
export const NUM_TUBE_CHANNEL_STATES: number;
export const NUM_TUBE_STATES: number;
export const NUM_TUBE_TYPES: number;
export const PROP_ACCOUNT_AUTOMATIC_PRESENCE: string;
export const PROP_ACCOUNT_CHANGING_PRESENCE: string;
export const PROP_ACCOUNT_CONNECTION: string;
export const PROP_ACCOUNT_CONNECTION_ERROR: string;
export const PROP_ACCOUNT_CONNECTION_ERROR_DETAILS: string;
export const PROP_ACCOUNT_CONNECTION_STATUS: string;
export const PROP_ACCOUNT_CONNECTION_STATUS_REASON: string;
export const PROP_ACCOUNT_CONNECT_AUTOMATICALLY: string;
export const PROP_ACCOUNT_CURRENT_PRESENCE: string;
export const PROP_ACCOUNT_DISPLAY_NAME: string;
export const PROP_ACCOUNT_ENABLED: string;
export const PROP_ACCOUNT_HAS_BEEN_ONLINE: string;
export const PROP_ACCOUNT_ICON: string;
export const PROP_ACCOUNT_INTERFACES: string;
export const PROP_ACCOUNT_INTERFACE_ADDRESSING_URI_SCHEMES: string;
export const PROP_ACCOUNT_INTERFACE_AVATAR_AVATAR: string;
export const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_IDENTIFIER: string;
export const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_PROVIDER: string;
export const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_RESTRICTIONS: string;
export const PROP_ACCOUNT_INTERFACE_STORAGE_STORAGE_SPECIFIC_INFORMATION: string;
export const PROP_ACCOUNT_MANAGER_INTERFACES: string;
export const PROP_ACCOUNT_MANAGER_INVALID_ACCOUNTS: string;
export const PROP_ACCOUNT_MANAGER_SUPPORTED_ACCOUNT_PROPERTIES: string;
export const PROP_ACCOUNT_MANAGER_VALID_ACCOUNTS: string;
export const PROP_ACCOUNT_NICKNAME: string;
export const PROP_ACCOUNT_NORMALIZED_NAME: string;
export const PROP_ACCOUNT_PARAMETERS: string;
export const PROP_ACCOUNT_REQUESTED_PRESENCE: string;
export const PROP_ACCOUNT_SERVICE: string;
export const PROP_ACCOUNT_SUPERSEDES: string;
export const PROP_ACCOUNT_VALID: string;
export const PROP_AUTHENTICATION_TLS_CERTIFICATE_CERTIFICATE_CHAIN_DATA: string;
export const PROP_AUTHENTICATION_TLS_CERTIFICATE_CERTIFICATE_TYPE: string;
export const PROP_AUTHENTICATION_TLS_CERTIFICATE_REJECTIONS: string;
export const PROP_AUTHENTICATION_TLS_CERTIFICATE_STATE: string;
export const PROP_CALL_CONTENT_DISPOSITION: string;
export const PROP_CALL_CONTENT_INTERFACES: string;
export const PROP_CALL_CONTENT_INTERFACE_AUDIO_CONTROL_REQUESTED_INPUT_VOLUME: string;
export const PROP_CALL_CONTENT_INTERFACE_AUDIO_CONTROL_REQUESTED_OUTPUT_VOLUME: string;
export const PROP_CALL_CONTENT_INTERFACE_DTMF_CURRENTLY_SENDING_TONES: string;
export const PROP_CALL_CONTENT_INTERFACE_DTMF_DEFERRED_TONES: string;
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_CURRENT_DTMF_EVENT: string;
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_CURRENT_DTMF_STATE: string;
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_LOCAL_MEDIA_DESCRIPTIONS: string;
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_MEDIA_DESCRIPTION_OFFER: string;
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_PACKETIZATION: string;
export const PROP_CALL_CONTENT_INTERFACE_MEDIA_REMOTE_MEDIA_DESCRIPTIONS: string;
export const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_BITRATE: string;
export const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_FRAMERATE: string;
export const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_MANUAL_KEY_FRAMES: string;
export const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_MTU: string;
export const PROP_CALL_CONTENT_INTERFACE_VIDEO_CONTROL_VIDEO_RESOLUTION: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_CODECS: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_FURTHER_NEGOTIATION_REQUIRED: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_HAS_REMOTE_INFORMATION: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACES: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_DLRR_MAX_SIZE: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_DUPLICATE_RLE_MAX_SIZE: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_ENABLE_METRICS: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_LOSS_RLE_MAX_SIZE: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_PACKET_RECEIPT_TIMES_MAX_SIZE: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_RTT_MODE: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_EXTENDED_REPORTS_STATISTICS_FLAGS: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_FEEDBACK_DOES_AVPF: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTCP_FEEDBACK_FEEDBACK_MESSAGES: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_INTERFACE_RTP_HEADER_EXTENSIONS_HEADER_EXTENSIONS: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_REMOTE_CONTACT: string;
export const PROP_CALL_CONTENT_MEDIA_DESCRIPTION_SSRCS: string;
export const PROP_CALL_CONTENT_NAME: string;
export const PROP_CALL_CONTENT_STREAMS: string;
export const PROP_CALL_CONTENT_TYPE: string;
export const PROP_CALL_STREAM_CAN_REQUEST_RECEIVING: string;
export const PROP_CALL_STREAM_ENDPOINT_CONTROLLING: string;
export const PROP_CALL_STREAM_ENDPOINT_ENDPOINT_STATE: string;
export const PROP_CALL_STREAM_ENDPOINT_IS_ICE_LITE: string;
export const PROP_CALL_STREAM_ENDPOINT_REMOTE_CANDIDATES: string;
export const PROP_CALL_STREAM_ENDPOINT_REMOTE_CREDENTIALS: string;
export const PROP_CALL_STREAM_ENDPOINT_SELECTED_CANDIDATE_PAIRS: string;
export const PROP_CALL_STREAM_ENDPOINT_TRANSPORT: string;
export const PROP_CALL_STREAM_INTERFACES: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_ENDPOINTS: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_HAS_SERVER_INFO: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_ICE_RESTART_PENDING: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_LOCAL_CANDIDATES: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_LOCAL_CREDENTIALS: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_RECEIVING_STATE: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_RELAY_INFO: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_SENDING_STATE: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_STUN_SERVERS: string;
export const PROP_CALL_STREAM_INTERFACE_MEDIA_TRANSPORT: string;
export const PROP_CALL_STREAM_LOCAL_SENDING_STATE: string;
export const PROP_CALL_STREAM_REMOTE_MEMBERS: string;
export const PROP_CALL_STREAM_REMOTE_MEMBER_IDENTIFIERS: string;
export const PROP_CHANNEL_CHANNEL_TYPE: string;
export const PROP_CHANNEL_DISPATCHER_INTERFACES: string;
export const PROP_CHANNEL_DISPATCHER_INTERFACE_OPERATION_LIST_DISPATCH_OPERATIONS: string;
export const PROP_CHANNEL_DISPATCHER_SUPPORTS_REQUEST_HINTS: string;
export const PROP_CHANNEL_DISPATCH_OPERATION_ACCOUNT: string;
export const PROP_CHANNEL_DISPATCH_OPERATION_CHANNELS: string;
export const PROP_CHANNEL_DISPATCH_OPERATION_CONNECTION: string;
export const PROP_CHANNEL_DISPATCH_OPERATION_INTERFACES: string;
export const PROP_CHANNEL_DISPATCH_OPERATION_POSSIBLE_HANDLERS: string;
export const PROP_CHANNEL_INITIATOR_HANDLE: string;
export const PROP_CHANNEL_INITIATOR_ID: string;
export const PROP_CHANNEL_INTERFACES: string;
export const PROP_CHANNEL_INTERFACE_ANONYMITY_ANONYMITY_MANDATORY: string;
export const PROP_CHANNEL_INTERFACE_ANONYMITY_ANONYMITY_MODES: string;
export const PROP_CHANNEL_INTERFACE_ANONYMITY_ANONYMOUS_ID: string;
export const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAN_RETRY_CAPTCHA: string;
export const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAPTCHA_ERROR: string;
export const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAPTCHA_ERROR_DETAILS: string;
export const PROP_CHANNEL_INTERFACE_CAPTCHA_AUTHENTICATION_CAPTCHA_STATUS: string;
export const PROP_CHANNEL_INTERFACE_CHAT_STATE_CHAT_STATES: string;
export const PROP_CHANNEL_INTERFACE_CONFERENCE_CHANNELS: string;
export const PROP_CHANNEL_INTERFACE_CONFERENCE_INITIAL_CHANNELS: string;
export const PROP_CHANNEL_INTERFACE_CONFERENCE_INITIAL_INVITEE_HANDLES: string;
export const PROP_CHANNEL_INTERFACE_CONFERENCE_INITIAL_INVITEE_IDS: string;
export const PROP_CHANNEL_INTERFACE_CONFERENCE_INVITATION_MESSAGE: string;
export const PROP_CHANNEL_INTERFACE_CONFERENCE_ORIGINAL_CHANNELS: string;
export const PROP_CHANNEL_INTERFACE_DTMF_CURRENTLY_SENDING_TONES: string;
export const PROP_CHANNEL_INTERFACE_DTMF_DEFERRED_TONES: string;
export const PROP_CHANNEL_INTERFACE_DTMF_INITIAL_TONES: string;
export const PROP_CHANNEL_INTERFACE_FILE_TRANSFER_METADATA_METADATA: string;
export const PROP_CHANNEL_INTERFACE_FILE_TRANSFER_METADATA_SERVICE_NAME: string;
export const PROP_CHANNEL_INTERFACE_GROUP_GROUP_FLAGS: string;
export const PROP_CHANNEL_INTERFACE_GROUP_HANDLE_OWNERS: string;
export const PROP_CHANNEL_INTERFACE_GROUP_LOCAL_PENDING_MEMBERS: string;
export const PROP_CHANNEL_INTERFACE_GROUP_MEMBERS: string;
export const PROP_CHANNEL_INTERFACE_GROUP_MEMBER_IDENTIFIERS: string;
export const PROP_CHANNEL_INTERFACE_GROUP_REMOTE_PENDING_MEMBERS: string;
export const PROP_CHANNEL_INTERFACE_GROUP_SELF_HANDLE: string;
export const PROP_CHANNEL_INTERFACE_MESSAGES_DELIVERY_REPORTING_SUPPORT: string;
export const PROP_CHANNEL_INTERFACE_MESSAGES_MESSAGE_PART_SUPPORT_FLAGS: string;
export const PROP_CHANNEL_INTERFACE_MESSAGES_MESSAGE_TYPES: string;
export const PROP_CHANNEL_INTERFACE_MESSAGES_PENDING_MESSAGES: string;
export const PROP_CHANNEL_INTERFACE_MESSAGES_SUPPORTED_CONTENT_TYPES: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_ANONYMOUS: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_CAN_UPDATE_CONFIGURATION: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_CONFIGURATION_RETRIEVED: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_DESCRIPTION: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_INVITEONLY: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_LIMIT: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_MODERATED: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_MUTABLE_PROPERTIES: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PASSWORD: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PASSWORD_HINT: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PASSWORD_PROTECTED: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PERSISTENT: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_PRIVATE: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CONFIG_TITLE: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CREATION_TIMESTAMP: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CREATOR: string;
export const PROP_CHANNEL_INTERFACE_ROOM_CREATOR_HANDLE: string;
export const PROP_CHANNEL_INTERFACE_ROOM_ROOM_NAME: string;
export const PROP_CHANNEL_INTERFACE_ROOM_SERVER: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_AUTHORIZATION_IDENTITY: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_AVAILABLE_MECHANISMS: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_CAN_TRY_AGAIN: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_DEFAULT_REALM: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_DEFAULT_USERNAME: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_HAS_INITIAL_DATA: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_MAY_SAVE_RESPONSE: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_SASL_ERROR: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_SASL_ERROR_DETAILS: string;
export const PROP_CHANNEL_INTERFACE_SASL_AUTHENTICATION_SASL_STATUS: string;
export const PROP_CHANNEL_INTERFACE_SECURABLE_ENCRYPTED: string;
export const PROP_CHANNEL_INTERFACE_SECURABLE_VERIFIED: string;
export const PROP_CHANNEL_INTERFACE_SERVICE_POINT_CURRENT_SERVICE_POINT: string;
export const PROP_CHANNEL_INTERFACE_SERVICE_POINT_INITIAL_SERVICE_POINT: string;
export const PROP_CHANNEL_INTERFACE_SMS_FLASH: string;
export const PROP_CHANNEL_INTERFACE_SMS_SMS_CHANNEL: string;
export const PROP_CHANNEL_INTERFACE_SUBJECT_ACTOR: string;
export const PROP_CHANNEL_INTERFACE_SUBJECT_ACTOR_HANDLE: string;
export const PROP_CHANNEL_INTERFACE_SUBJECT_CAN_SET: string;
export const PROP_CHANNEL_INTERFACE_SUBJECT_SUBJECT: string;
export const PROP_CHANNEL_INTERFACE_SUBJECT_TIMESTAMP: string;
export const PROP_CHANNEL_INTERFACE_TUBE_PARAMETERS: string;
export const PROP_CHANNEL_INTERFACE_TUBE_STATE: string;
export const PROP_CHANNEL_REQUESTED: string;
export const PROP_CHANNEL_REQUEST_ACCOUNT: string;
export const PROP_CHANNEL_REQUEST_HINTS: string;
export const PROP_CHANNEL_REQUEST_INTERFACES: string;
export const PROP_CHANNEL_REQUEST_PREFERRED_HANDLER: string;
export const PROP_CHANNEL_REQUEST_REQUESTS: string;
export const PROP_CHANNEL_REQUEST_USER_ACTION_TIME: string;
export const PROP_CHANNEL_TARGET_HANDLE: string;
export const PROP_CHANNEL_TARGET_HANDLE_TYPE: string;
export const PROP_CHANNEL_TARGET_ID: string;
export const PROP_CHANNEL_TYPE_CALL_CALL_FLAGS: string;
export const PROP_CHANNEL_TYPE_CALL_CALL_MEMBERS: string;
export const PROP_CHANNEL_TYPE_CALL_CALL_STATE: string;
export const PROP_CHANNEL_TYPE_CALL_CALL_STATE_DETAILS: string;
export const PROP_CHANNEL_TYPE_CALL_CALL_STATE_REASON: string;
export const PROP_CHANNEL_TYPE_CALL_CONTENTS: string;
export const PROP_CHANNEL_TYPE_CALL_HARDWARE_STREAMING: string;
export const PROP_CHANNEL_TYPE_CALL_INITIAL_AUDIO: string;
export const PROP_CHANNEL_TYPE_CALL_INITIAL_AUDIO_NAME: string;
export const PROP_CHANNEL_TYPE_CALL_INITIAL_TRANSPORT: string;
export const PROP_CHANNEL_TYPE_CALL_INITIAL_VIDEO: string;
export const PROP_CHANNEL_TYPE_CALL_INITIAL_VIDEO_NAME: string;
export const PROP_CHANNEL_TYPE_CALL_MEMBER_IDENTIFIERS: string;
export const PROP_CHANNEL_TYPE_CALL_MUTABLE_CONTENTS: string;
export const PROP_CHANNEL_TYPE_CONTACT_SEARCH_AVAILABLE_SEARCH_KEYS: string;
export const PROP_CHANNEL_TYPE_CONTACT_SEARCH_LIMIT: string;
export const PROP_CHANNEL_TYPE_CONTACT_SEARCH_SEARCH_STATE: string;
export const PROP_CHANNEL_TYPE_CONTACT_SEARCH_SERVER: string;
export const PROP_CHANNEL_TYPE_DBUS_TUBE_DBUS_NAMES: string;
export const PROP_CHANNEL_TYPE_DBUS_TUBE_SERVICE_NAME: string;
export const PROP_CHANNEL_TYPE_DBUS_TUBE_SUPPORTED_ACCESS_CONTROLS: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_AVAILABLE_SOCKET_TYPES: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_CONTENT_HASH: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_CONTENT_HASH_TYPE: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_CONTENT_TYPE: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_DATE: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_DESCRIPTION: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_FILENAME: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_FILE_COLLECTION: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_INITIAL_OFFSET: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_SIZE: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_STATE: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_TRANSFERRED_BYTES: string;
export const PROP_CHANNEL_TYPE_FILE_TRANSFER_URI: string;
export const PROP_CHANNEL_TYPE_ROOM_LIST_SERVER: string;
export const PROP_CHANNEL_TYPE_SERVER_AUTHENTICATION_AUTHENTICATION_METHOD: string;
export const PROP_CHANNEL_TYPE_SERVER_TLS_CONNECTION_HOSTNAME: string;
export const PROP_CHANNEL_TYPE_SERVER_TLS_CONNECTION_REFERENCE_IDENTITIES: string;
export const PROP_CHANNEL_TYPE_SERVER_TLS_CONNECTION_SERVER_CERTIFICATE: string;
export const PROP_CHANNEL_TYPE_STREAMED_MEDIA_IMMUTABLE_STREAMS: string;
export const PROP_CHANNEL_TYPE_STREAMED_MEDIA_INITIAL_AUDIO: string;
export const PROP_CHANNEL_TYPE_STREAMED_MEDIA_INITIAL_VIDEO: string;
export const PROP_CHANNEL_TYPE_STREAM_TUBE_SERVICE: string;
export const PROP_CHANNEL_TYPE_STREAM_TUBE_SUPPORTED_SOCKET_TYPES: string;
export const PROP_CLIENT_APPROVER_APPROVER_CHANNEL_FILTER: string;
export const PROP_CLIENT_HANDLER_BYPASS_APPROVAL: string;
export const PROP_CLIENT_HANDLER_CAPABILITIES: string;
export const PROP_CLIENT_HANDLER_HANDLED_CHANNELS: string;
export const PROP_CLIENT_HANDLER_HANDLER_CHANNEL_FILTER: string;
export const PROP_CLIENT_INTERFACES: string;
export const PROP_CLIENT_OBSERVER_DELAY_APPROVERS: string;
export const PROP_CLIENT_OBSERVER_OBSERVER_CHANNEL_FILTER: string;
export const PROP_CLIENT_OBSERVER_RECOVER: string;
export const PROP_CONNECTION_HAS_IMMORTAL_HANDLES: string;
export const PROP_CONNECTION_INTERFACES: string;
export const PROP_CONNECTION_INTERFACE_ANONYMITY_ANONYMITY_MANDATORY: string;
export const PROP_CONNECTION_INTERFACE_ANONYMITY_ANONYMITY_MODES: string;
export const PROP_CONNECTION_INTERFACE_ANONYMITY_SUPPORTED_ANONYMITY_MODES: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_MAXIMUM_AVATAR_BYTES: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_MAXIMUM_AVATAR_HEIGHT: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_MAXIMUM_AVATAR_WIDTH: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_MINIMUM_AVATAR_HEIGHT: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_MINIMUM_AVATAR_WIDTH: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_RECOMMENDED_AVATAR_HEIGHT: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_RECOMMENDED_AVATAR_WIDTH: string;
export const PROP_CONNECTION_INTERFACE_AVATARS_SUPPORTED_AVATAR_MIME_TYPES: string;
export const PROP_CONNECTION_INTERFACE_BALANCE_ACCOUNT_BALANCE: string;
export const PROP_CONNECTION_INTERFACE_BALANCE_MANAGE_CREDIT_URI: string;
export const PROP_CONNECTION_INTERFACE_CELLULAR_IMSI: string;
export const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_NATIONAL_CHARACTER_SET: string;
export const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_REDUCED_CHARACTER_SET: string;
export const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_SERVICE_CENTRE: string;
export const PROP_CONNECTION_INTERFACE_CELLULAR_MESSAGE_VALIDITY_PERIOD: string;
export const PROP_CONNECTION_INTERFACE_CELLULAR_OVERRIDE_MESSAGE_SERVICE_CENTRE: string;
export const PROP_CONNECTION_INTERFACE_CONTACTS_CONTACT_ATTRIBUTE_INTERFACES: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_BLOCKING_CONTACT_BLOCKING_CAPABILITIES: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_GROUPS_DISJOINT_GROUPS: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_GROUPS_GROUPS: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_GROUPS_GROUP_STORAGE: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_INFO_CONTACT_INFO_FLAGS: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_INFO_SUPPORTED_FIELDS: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_LIST_CAN_CHANGE_CONTACT_LIST: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_LIST_CONTACT_LIST_PERSISTS: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_LIST_CONTACT_LIST_STATE: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_LIST_DOWNLOAD_AT_CONNECTION: string;
export const PROP_CONNECTION_INTERFACE_CONTACT_LIST_REQUEST_USES_MESSAGE: string;
export const PROP_CONNECTION_INTERFACE_LOCATION_LOCATION_ACCESS_CONTROL: string;
export const PROP_CONNECTION_INTERFACE_LOCATION_LOCATION_ACCESS_CONTROL_TYPES: string;
export const PROP_CONNECTION_INTERFACE_LOCATION_SUPPORTED_LOCATION_FEATURES: string;
export const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_MAIL_ADDRESS: string;
export const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_MAIL_NOTIFICATION_FLAGS: string;
export const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_UNREAD_MAILS: string;
export const PROP_CONNECTION_INTERFACE_MAIL_NOTIFICATION_UNREAD_MAIL_COUNT: string;
export const PROP_CONNECTION_INTERFACE_POWER_SAVING_POWER_SAVING_ACTIVE: string;
export const PROP_CONNECTION_INTERFACE_REQUESTS_CHANNELS: string;
export const PROP_CONNECTION_INTERFACE_REQUESTS_REQUESTABLE_CHANNEL_CLASSES: string;
export const PROP_CONNECTION_INTERFACE_SERVICE_POINT_KNOWN_SERVICE_POINTS: string;
export const PROP_CONNECTION_INTERFACE_SIMPLE_PRESENCE_MAXIMUM_STATUS_MESSAGE_LENGTH: string;
export const PROP_CONNECTION_INTERFACE_SIMPLE_PRESENCE_STATUSES: string;
export const PROP_CONNECTION_MANAGER_INTERFACES: string;
export const PROP_CONNECTION_MANAGER_PROTOCOLS: string;
export const PROP_CONNECTION_SELF_HANDLE: string;
export const PROP_CONNECTION_SELF_ID: string;
export const PROP_CONNECTION_STATUS: string;
export const PROP_DEBUG_ENABLED: string;
export const PROP_MEDIA_STREAM_HANDLER_CREATED_LOCALLY: string;
export const PROP_MEDIA_STREAM_HANDLER_NAT_TRAVERSAL: string;
export const PROP_MEDIA_STREAM_HANDLER_RELAY_INFO: string;
export const PROP_MEDIA_STREAM_HANDLER_STUN_SERVERS: string;
export const PROP_PROTOCOL_AUTHENTICATION_TYPES: string;
export const PROP_PROTOCOL_CONNECTION_INTERFACES: string;
export const PROP_PROTOCOL_ENGLISH_NAME: string;
export const PROP_PROTOCOL_ICON: string;
export const PROP_PROTOCOL_INTERFACES: string;
export const PROP_PROTOCOL_INTERFACE_ADDRESSING_ADDRESSABLE_URI_SCHEMES: string;
export const PROP_PROTOCOL_INTERFACE_ADDRESSING_ADDRESSABLE_VCARD_FIELDS: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_MAXIMUM_AVATAR_BYTES: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_MAXIMUM_AVATAR_HEIGHT: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_MAXIMUM_AVATAR_WIDTH: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_MINIMUM_AVATAR_HEIGHT: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_MINIMUM_AVATAR_WIDTH: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_RECOMMENDED_AVATAR_HEIGHT: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_RECOMMENDED_AVATAR_WIDTH: string;
export const PROP_PROTOCOL_INTERFACE_AVATARS_SUPPORTED_AVATAR_MIME_TYPES: string;
export const PROP_PROTOCOL_INTERFACE_PRESENCE_STATUSES: string;
export const PROP_PROTOCOL_PARAMETERS: string;
export const PROP_PROTOCOL_REQUESTABLE_CHANNEL_CLASSES: string;
export const PROP_PROTOCOL_VCARD_FIELD: string;
export const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_GTALK_P2P: string;
export const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_ICE_UDP: string;
export const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_WLM_2009: string;
export const TOKEN_CHANNEL_INTERFACE_MEDIA_SIGNALLING_WLM_8_5: string;
export const TOKEN_CHANNEL_TYPE_CALL_AUDIO: string;
export const TOKEN_CHANNEL_TYPE_CALL_GTALK_P2P: string;
export const TOKEN_CHANNEL_TYPE_CALL_ICE: string;
export const TOKEN_CHANNEL_TYPE_CALL_SHM: string;
export const TOKEN_CHANNEL_TYPE_CALL_VIDEO: string;
export const TOKEN_CHANNEL_TYPE_CALL_WLM_2009: string;
export const TOKEN_CONNECTION_CONTACT_ID: string;
export const TOKEN_CONNECTION_INTERFACE_ADDRESSING_ADDRESSES: string;
export const TOKEN_CONNECTION_INTERFACE_ADDRESSING_URIS: string;
export const TOKEN_CONNECTION_INTERFACE_ALIASING_ALIAS: string;
export const TOKEN_CONNECTION_INTERFACE_AVATARS_TOKEN: string;
export const TOKEN_CONNECTION_INTERFACE_CAPABILITIES_CAPS: string;
export const TOKEN_CONNECTION_INTERFACE_CLIENT_TYPES_CLIENT_TYPES: string;
export const TOKEN_CONNECTION_INTERFACE_CONTACT_BLOCKING_BLOCKED: string;
export const TOKEN_CONNECTION_INTERFACE_CONTACT_CAPABILITIES_CAPABILITIES: string;
export const TOKEN_CONNECTION_INTERFACE_CONTACT_GROUPS_GROUPS: string;
export const TOKEN_CONNECTION_INTERFACE_CONTACT_INFO_INFO: string;
export const TOKEN_CONNECTION_INTERFACE_CONTACT_LIST_PUBLISH: string;
export const TOKEN_CONNECTION_INTERFACE_CONTACT_LIST_PUBLISH_REQUEST: string;
export const TOKEN_CONNECTION_INTERFACE_CONTACT_LIST_SUBSCRIBE: string;
export const TOKEN_CONNECTION_INTERFACE_LOCATION_LOCATION: string;
export const TOKEN_CONNECTION_INTERFACE_SIMPLE_PRESENCE_PRESENCE: string;
export const UNKNOWN_CONNECTION_STATUS: ConnectionStatus;
export const UNKNOWN_HANDLE_TYPE: HandleType;
export const USER_ACTION_TIME_NOT_USER_ACTION: number;
/**
 * Dumps the a{sv} map to the debugging console.
 * The purpose of this function is give the programmer the ability to eas
 * ily
 * inspect the contents of an a{sv} map for debugging purposes.
 */
export function asv_dump(asv: GLib.HashTable): void;
/**
 * If a value for @key in @asv is present and boolean, return it,
 * and set *@valid to %TRUE if @valid is not %NULL.
 * Otherwise return %FALSE, and set *@valid to %FALSE if @valid is not %N
 * ULL.
 */
export function asv_get_boolean(asv: GLib.HashTable, key: string): [boolean, boolean];
/**
 * If a value for @key in @asv is present and is of the desired type,
 * return it.
 * Otherwise return %NULL.
 * The returned value is not copied, and is only valid as long as the val
 * ue
 * for @key in @asv is not removed or altered. Copy it, for instance with
 * g_boxed_copy(), if you need to keep it for longer.
 */
export function asv_get_boxed(asv: GLib.HashTable, key: string, type: unknown): object | null;
/**
 * If a value for @key in @asv is present and is an array of bytes
 * (its GType is %DBUS_TYPE_G_UCHAR_ARRAY), return it.
 * Otherwise return %NULL.
 * The returned value is not copied, and is only valid as long as the val
 * ue
 * for @key in @asv is not removed or altered. Copy it with
 * g_boxed_copy (DBUS_TYPE_G_UCHAR_ARRAY, ...) if you need to keep
 * it for longer.
 */
export function asv_get_bytes(asv: GLib.HashTable, key: string): number[] | null;
/**
 * If a value for @key in @asv is present and has any numeric type used b
 * y
 * dbus-glib (guchar, gint, guint, gint64, guint64 or gdouble),
 * return it as a double, and if @valid is not %NULL, set *@valid to %TRU
 * E.
 * Otherwise, return 0.0, and if @valid is not %NULL, set *@valid to %FAL
 * SE.
 */
export function asv_get_double(asv: GLib.HashTable, key: string): [number, boolean];
/**
 * If a value for @key in @asv is present, has an integer type used by
 * dbus-glib (guchar, gint, guint, gint64 or guint64) and fits in the
 * range of a gint32, return it, and if @valid is not %NULL, set *@valid 
 * to
 * %TRUE.
 * Otherwise, return 0, and if @valid is not %NULL, set *@valid to %FALSE
 * .
 */
export function asv_get_int32(asv: GLib.HashTable, key: string): [number, boolean];
/**
 * If a value for @key in @asv is present, has an integer type used by
 * dbus-glib (guchar, gint, guint, gint64 or guint64) and fits in the
 * range of a gint64, return it, and if @valid is not %NULL, set *@valid 
 * to
 * %TRUE.
 * Otherwise, return 0, and if @valid is not %NULL, set *@valid to %FALSE
 * .
 */
export function asv_get_int64(asv: GLib.HashTable, key: string): [number, boolean];
/**
 * If a value for @key in @asv is present and is an object path, return i
 * t.
 * Otherwise return %NULL.
 * The returned value is not copied, and is only valid as long as the val
 * ue
 * for @key in @asv is not removed or altered. Copy it with g_strdup() if
 *  you
 * need to keep it for longer.
 */
export function asv_get_object_path(asv: GLib.HashTable, key: string): string | null;
/**
 * If a value for @key in @asv is present and is a string, return it.
 * Otherwise return %NULL.
 * The returned value is not copied, and is only valid as long as the val
 * ue
 * for @key in @asv is not removed or altered. Copy it with g_strdup() if
 *  you
 * need to keep it for longer.
 */
export function asv_get_string(asv: GLib.HashTable, key: string): string | null;
/**
 * If a value for @key in @asv is present and is an array of strings (str
 * v),
 * return it.
 * Otherwise return %NULL.
 * The returned value is not copied, and is only valid as long as the val
 * ue
 * for @key in @asv is not removed or altered. Copy it with g_strdupv() i
 * f you
 * need to keep it for longer.
 */
export function asv_get_strv(asv: GLib.HashTable, key: string): string[] | null;
/**
 * If a value for @key in @asv is present, has an integer type used by
 * dbus-glib (guchar, gint, guint, gint64 or guint64) and fits in the
 * range of a guint32, return it, and if @valid is not %NULL, set *@valid
 *  to
 * %TRUE.
 * Otherwise, return 0, and if @valid is not %NULL, set *@valid to %FALSE
 * .
 */
export function asv_get_uint32(asv: GLib.HashTable, key: string): [number, boolean];
/**
 * If a value for @key in @asv is present, has an integer type used by
 * dbus-glib (guchar, gint, guint, gint64 or guint64) and is non-negative
 * ,
 * return it, and if @valid is not %NULL, set *@valid to %TRUE.
 * Otherwise, return 0, and if @valid is not %NULL, set *@valid to %FALSE
 * .
 */
export function asv_get_uint64(asv: GLib.HashTable, key: string): [number, boolean];
/**
 * If a value for @key in @asv is present, return it. Otherwise return %N
 * ULL.
 * The returned value is not copied, and is only valid as long as the val
 * ue
 * for @key in @asv is not removed or altered. Copy it with (for instance
 * )
 * g_value_copy() if you need to keep it for longer.
 */
export function asv_lookup(asv: GLib.HashTable, key: string): GObject.Value;
/**
 * Creates a new #GHashTable for use with a{sv} maps, containing the valu
 * es
 * passed in as parameters.
 * The #GHashTable is synonymous with:
 * <informalexample><programlisting>
 * GHashTable *asv = g_hash_table_new_full (g_str_hash, g_str_equal,
 *    NULL, (GDestroyNotify) tp_g_value_slice_free);
 * </programlisting></informalexample>
 * Followed by manual insertion of each of the parameters.
 * Parameters are stored in slice-allocated GValues and should be set usi
 * ng
 * tp_asv_set_*() and retrieved using tp_asv_get_*().
 * tp_g_value_slice_new() and tp_g_value_slice_dup() may also be used to 
 * insert
 * into the map if required.
 * <informalexample><programlisting>
 * g_hash_table_insert (parameters, "account",
 *    tp_g_value_slice_new_string ("bob@mcbadgers.com"));
 * </programlisting></informalexample>
 * <example>
 *  <title>Using tp_asv_new()</title>
 *  <programlisting>
 * GHashTable *parameters = tp_asv_new (
 *    "answer", G_TYPE_INT, 42,
 *    "question", G_TYPE_STRING, "We just don't know",
 *    NULL);</programlisting>
 * </example>
 * Allocated values will be automatically free'd when overwritten, remove
 * d or
 * the hash table destroyed with g_hash_table_unref().
 */
export function asv_new(first_key: string, ___: unknown[]): GLib.HashTable;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_boolean(), tp_g_value_slice_new_boo
 * lean()
 */
export function asv_set_boolean(asv: GLib.HashTable, key: string, value: boolean): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_boxed(), tp_g_value_slice_new_boxed
 * ()
 */
export function asv_set_boxed(asv: GLib.HashTable, key: string, type: unknown, value: object | null): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_bytes(), tp_g_value_slice_new_bytes
 * ()
 */
export function asv_set_bytes(asv: GLib.HashTable, key: string, length: number, bytes: object | null): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_double(), tp_g_value_slice_new_doub
 * le()
 */
export function asv_set_double(asv: GLib.HashTable, key: string, value: number): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_int32(), tp_g_value_slice_new_int()
 */
export function asv_set_int32(asv: GLib.HashTable, key: string, value: number): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_int64(), tp_g_value_slice_new_int64
 * ()
 */
export function asv_set_int64(asv: GLib.HashTable, key: string, value: number): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_object_path(),
 * tp_g_value_slice_new_object_path()
 */
export function asv_set_object_path(asv: GLib.HashTable, key: string, value: string): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_boxed(),
 * tp_g_value_slice_new_static_boxed()
 */
export function asv_set_static_boxed(asv: GLib.HashTable, key: string, type: unknown, value: object | null): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_object_path(),
 * tp_g_value_slice_new_static_object_path()
 */
export function asv_set_static_object_path(asv: GLib.HashTable, key: string, value: string): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_string(),
 * tp_g_value_slice_new_static_string()
 */
export function asv_set_static_string(asv: GLib.HashTable, key: string, value: string): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_string(), tp_g_value_slice_new_stri
 * ng()
 */
export function asv_set_string(asv: GLib.HashTable, key: string, value: string): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_strv()
 */
export function asv_set_strv(asv: GLib.HashTable, key: string, value: string): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_uint32(), tp_g_value_slice_new_uint
 * ()
 */
export function asv_set_uint32(asv: GLib.HashTable, key: string, value: number): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_uint64(), tp_g_value_slice_new_uint
 * 64()
 */
export function asv_set_uint64(asv: GLib.HashTable, key: string, value: number): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_boxed(), tp_g_value_slice_new_take_
 * boxed()
 */
export function asv_take_boxed(asv: GLib.HashTable, key: string, type: unknown, value: object | null): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_bytes(), tp_g_value_slice_new_take_
 * bytes()
 */
export function asv_take_bytes(asv: GLib.HashTable, key: string, value: object[]): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_object_path(),
 * tp_g_value_slice_new_take_object_path()
 */
export function asv_take_object_path(asv: GLib.HashTable, key: string, value: string): void;
/**
 * Stores the value in the map.
 * The value is stored as a slice-allocated GValue.
 * See Also: tp_asv_new(), tp_asv_get_string(),
 * tp_g_value_slice_new_take_string()
 */
export function asv_take_string(asv: GLib.HashTable, key: string, value: string): void;
/**
 * <!--Returns: says it all-->
 */
export function contact_info_list_copy(list: GLib.List): GLib.List;
/**
 * Free all memory used by the #GList and its elements.
 */
export function contact_info_list_free(list: GLib.List): void;
/**
 * <!--Returns: says it all-->
 */
export function contact_info_spec_list_copy(list: GLib.List): GLib.List;
/**
 * Free all memory used by the #GList and its elements.
 */
export function contact_info_spec_list_free(list: GLib.List): void;
/**
 * Declare that the given interface has contact attributes which can be a
 * dded
 * to the attributes hash using the filler function. All the handles in t
 * he
 * handle array passed to the filler function are guaranteed to be valid 
 * and
 * referenced.
 */
export function contacts_mixin_add_contact_attributes_iface(obj: GObject.Object, _interface: string, fill_contact_attributes: ContactsMixinFillContactAttributesFunc): void;
/**
 * <!--no documentation beyond Returns: needed-->
 */
export function contacts_mixin_class_get_offset_quark(): GLib.Quark;
/**
 * Initialize the contacts mixin. Should be called from the implementatio
 * n's
 * class_init function like so:
 * <informalexample><programlisting>
 * tp_contacts_mixin_class_init ((GObjectClass *) klass,
 *                          G_STRUCT_OFFSET (SomeObjectClass, contacts_mi
 * xin));
 * </programlisting></informalexample>
 */
export function contacts_mixin_class_init(obj_cls: GObject.ObjectClass, offset: number): void;
/**
 * Free resources held by the contacts mixin.
 */
export function contacts_mixin_finalize(obj: GObject.Object): void;
/**
 * Get contact attributes for the given contacts. Provide attributes for 
 * all requested
 * interfaces. If contact attributes are not immediately known, the behav
 * iour is defined
 * by the interface; the attribute should either be omitted from the resu
 * lt or replaced
 * with a default value.
 */
export function contacts_mixin_get_contact_attributes(obj: GObject.Object, handles: object[], interfaces: string, assumed_interfaces: string, sender: string): GLib.HashTable;
/**
 * <!--no documentation beyond Returns: needed-->
 */
export function contacts_mixin_get_offset_quark(): GLib.Quark;
/**
 * Fill in the vtable entries needed to implement the contacts interface
 * using this mixin. This function should usually be called via
 * G_IMPLEMENT_INTERFACE.
 */
export function contacts_mixin_iface_init(g_iface: object | null, iface_data: object | null): void;
/**
 * Initialize the contacts mixin. Should be called from the implementatio
 * n's
 * instance init function like so:
 * <informalexample><programlisting>
 * tp_contacts_mixin_init ((GObject *) self,
 *                     G_STRUCT_OFFSET (SomeObject, contacts_mixin));
 * </programlisting></informalexample>
 */
export function contacts_mixin_init(obj: GObject.Object, offset: number): void;
/**
 * Utility function to set attribute for handle to value in the attribute
 * s hash
 * as passed to a TpContactsMixinFillContactAttributesFunc.
 */
export function contacts_mixin_set_contact_attribute(contact_attributes: GLib.HashTable, handle: Handle, attribute: string, value: GObject.Value): void;
/**
 * Check that the given string is a valid D-Bus bus name of an appropriat
 * e
 * type.
 */
export function dbus_check_valid_bus_name(name: string, allow_types: DBusNameType): boolean;
/**
 * Check that the given string is a valid D-Bus interface name. This is
 * also appropriate to use to check for valid error names.
 * Since GIO 2.26, g_dbus_is_interface_name() should always return the sa
 * me
 * thing, although the GLib function does not raise an error explaining w
 * hy
 * the interface name is incorrect.
 */
export function dbus_check_valid_interface_name(name: string): boolean;
/**
 * Check that the given string is a valid D-Bus member (method or signal)
 *  name.
 * Since GIO 2.26, g_dbus_is_member_name() should always return the same
 * thing, although the GLib function does not raise an error explaining w
 * hy
 * the interface name is incorrect.
 */
export function dbus_check_valid_member_name(name: string): boolean;
/**
 * Check that the given string is a valid D-Bus object path. Since GLib 2
 * .24,
 * g_variant_is_object_path() should always return the same thing as this
 * function, although it doesn't provide an error explaining why the obje
 * ct
 * path is invalid.
 */
export function dbus_check_valid_object_path(path: string): boolean;
/**
 * 
 */
export function dbus_errors_quark(): GLib.Quark;
/**
 * Return the Telepathy error NotImplemented from the method invocation
 * given by @context.
 */
export function dbus_g_method_return_not_implemented(context: unknown): void;
/**
 * Initialize the class @cls to use the D-Bus Properties mixin.
 * The given struct member, of size sizeof(TpDBusPropertiesMixinClass),
 * will be used to store property implementation information.
 * Each property and each interface must have been declared as a member o
 * f
 * a GInterface implemented by @cls, using
 * tp_svc_interface_set_dbus_properties_info().
 * Before calling this function, the array @interfaces must have been
 * placed in the #TpDBusPropertiesMixinClass structure; if it would be em
 * pty,
 * it may instead be %NULL.
 * This function should be called from the class_init callback in such a 
 * way
 * that it will only be called once, even if the class is subclassed.
 * Changed in 0.7.9: TpDBusPropertiesMixinClass::interfaces may now be %N
 * ULL,
 * which means that only interfaces whose properties are set up using
 * tp_dbus_properties_mixin_implement_interface() will be used.
 * Changed in 0.7.15: @offset may now be 0, in which case the
 * #TpDBusPropertiesMixinClass can be omitted from @cls.  It is treated a
 * s if
 * it were present, but with all fields (including
 * TpDBusPropertiesMixinClass::interfaces) being %NULL, so only interface
 * s
 * whose properties are set using
 * tp_dbus_properties_mixin_implement_interface() will be used.
 */
export function dbus_properties_mixin_class_init(cls: GObject.ObjectClass, offset: number): void;
/**
 * Get all the properties of a particular interface. This implementation
 * never returns an error: it will return an empty map if the interface
 * is unknown.
 */
export function dbus_properties_mixin_dup_all(self: GObject.Object, interface_name: string): GLib.HashTable;
/**
 * Emits the PropertiesChanged signal for the provided properties. Depend
 * ing on
 * the EmitsChangedSignal annotations in the introspection XML, either th
 * e new
 * value of the property will be included in the signal, or merely the fa
 * ct
 * that the property has changed.
 * For example, the MPRIS specification defines a TrackList interface wit
 * h two
 * properties, one of which is annotated with EmitsChangedSignal=true and
 *  one
 * annotated with EmitsChangedSignal=invalidates. The following call woul
 * d
 * include the new value of CanEditTracks and list Tracks as invalidated:
 * |[
 *    const gchar *properties[] = { "CanEditTracks", "Tracks", NULL };
 *    tp_dbus_properties_mixin_emit_properties_changed (G_OBJECT (self),
 *        "org.mpris.MediaPlayer2.TrackList", properties);
 * ]|
 * It is an error to pass a property to this
 * function if the property is annotated with EmitsChangedSignal=false, o
 * r is
 * unannotated.
 */
export function dbus_properties_mixin_emit_properties_changed(object: GObject.Object, interface_name: string, properties: string | null): void;
/**
 * A shortcut for calling tp_dbus_properties_mixin_emit_properties_change
 * d().
 */
export function dbus_properties_mixin_emit_properties_changed_varargs(object: GObject.Object, interface_name: string, ___: unknown[]): void;
/**
 * Retrieves the values of several D-Bus properties from an object, and a
 * dds
 * them to a hash mapping the fully-qualified name of the property to its
 * value. This is equivalent to calling tp_dbus_properties_mixin_get() fo
 * r
 * each property and adding it to the table yourself, with the proviso th
 * at
 * this function will g_assert() if retrieving a property fails (for inst
 * ance,
 * because it does not exist).
 * Note that in particular, @table does not have the same memory-allocati
 * on
 * model as the hash tables required by tp_asv_set_string() and similar
 * functions.
 */
export function dbus_properties_mixin_fill_properties_hash(object: GObject.Object, table: GLib.HashTable, first_interface: string, first_property: string, ___: unknown[]): void;
/**
 * Initialize @value with the type of the property @property_name on
 * @interface_name, and write the value of that property into it as if
 * by calling the D-Bus method org.freedesktop.DBus.Properties.Get.
 * If Get would return a D-Bus error, @value remains unset and @error
 * is filled in instead.
 */
export function dbus_properties_mixin_get(self: GObject.Object, interface_name: string, property_name: string, value: GObject.Value): boolean;
/**
 * An implementation of #TpDBusPropertiesMixinGetter which assumes that
 * the @getter_data is the name of a readable #GObject property of an
 * appropriate type, and uses it for the value of the D-Bus property.
 */
export function dbus_properties_mixin_getter_gobject_properties(object: GObject.Object, iface: GLib.Quark, name: GLib.Quark, value: GObject.Value, getter_data: object | null): void;
/**
 * Declare that the DBus.Properties interface represented by @g_iface
 * is implemented using this mixin.
 */
export function dbus_properties_mixin_iface_init(g_iface: object | null, iface_data: object | null): void;
/**
 * Declare that, in addition to any interfaces set in
 * tp_dbus_properties_mixin_class_init(), the given class (and its subcla
 * sses)
 * will implement the properties of the interface @iface using the callba
 * cks
 * @getter and @setter and the properties given by @props.
 * This function should be called from the class_init callback in such a 
 * way
 * that it will only be called once, even if the class is subclassed.
 * Typically, the static array @interfaces in the #TpDBusPropertiesMixinC
 * lass
 * should be used for interfaces whose properties are implemented directl
 * y by
 * the class @cls, and this function should be used for interfaces whose
 * properties are implemented by mixins.
 * It is an error for the same interface to appear in the array @interfac
 * es
 * in the #TpDBusPropertiesMixinClass, and also be set up by this functio
 * n.
 * If a class C and a subclass S both implement the properties of the sam
 * e
 * interface, only the implementations from the subclass S will be used,
 * regardless of whether the implementations in C and/or S were set up by
 * this function or via the array @interfaces in the
 * #TpDBusPropertiesMixinClass.
 */
export function dbus_properties_mixin_implement_interface(cls: GObject.ObjectClass, iface: GLib.Quark, getter: DBusPropertiesMixinGetter, setter: DBusPropertiesMixinSetter, props: DBusPropertiesMixinPropImpl): void;
/**
 * Retrieves the values of several D-Bus properties from an object, and b
 * uilds
 * a hash mapping the fully-qualified name of the property to its value. 
 *  This
 * is equivalent to calling tp_dbus_properties_mixin_get() for each prope
 * rty
 * and building the table yourself, with the proviso that this function w
 * ill
 * g_assert() if retrieving a property fails (for instance, because it do
 * es not
 * exist).
 * Additional keys and values can be inserted into the returned hash tabl
 * e;
 * if this is done, the inserted keys and values will be freed when the
 * hash table is destroyed. The keys must be allocated with g_strdup() or
 * equivalent, and the values must be slice-allocated (for instance with
 * tp_g_value_slice_new_string() or a similar function).
 * Note that in particular, tp_asv_set_string() and similar functions sho
 * uld
 * not be used with this hash table.
 */
export function dbus_properties_mixin_make_properties_hash(object: GObject.Object, first_interface: string, first_property: string, ___: unknown[]): GLib.HashTable;
/**
 * Sets a property to the value specified by @value, as if by
 * calling the D-Bus method org.freedesktop.DBus.Properties.Set.
 * If Set would return a D-Bus error, sets @error and returns %FALSE
 */
export function dbus_properties_mixin_set(self: GObject.Object, interface_name: string, property_name: string, value: GObject.Value): boolean;
/**
 * An implementation of #TpDBusPropertiesMixinSetter which assumes that t
 * he
 * @setter_data is the name of a writable #GObject property of an appropr
 * iate
 * type, and sets that property to the given value.
 */
export function dbus_properties_mixin_setter_gobject_properties(object: GObject.Object, iface: GLib.Quark, name: GLib.Quark, value: GObject.Value, setter_data: object | null): boolean;
/**
 * Open the given file for writing and duplicate its file descriptor to
 * be used for stdout and stderr. This has the effect of closing the prev
 * ious
 * stdout and stderr, and sending all messages that would have gone there
 * to the given file instead.
 * By default the file is truncated and hence overwritten each time the
 * process is executed.
 * Since version 0.7.14, if the filename is prefixed with '+' then the
 * file is not truncated and output is added at the end of the file.
 * Passing %NULL to this function is guaranteed to have no effect. This i
 * s
 * so you can call it with the recommended usage
 * <literal>tp_debug_divert_messages (g_getenv ("MYAPP_LOGFILE"))</litera
 * l>
 * and it won't do anything if the environment variable is not set.
 * This function still works if telepathy-glib was compiled without debug
 * support.
 */
export function debug_divert_messages(filename: string): void;
/**
 * Activate all possible debug modes. This also activates persistent mode
 * ,
 * which should have been orthogonal.
 */
export function debug_set_all_flags(): void;
/**
 * Set the debug flags indicated by @flags_string, in addition to any alr
 * eady
 * set.
 * The parsing matches that of g_parse_debug_string().
 * If telepathy-glib was compiled with --disable-debug (not recommended),
 * this function has no practical effect, since the debug messages it wou
 * ld
 * enable were removed at compile time.
 */
export function debug_set_flags(flags_string: string): void;
/**
 * Equivalent to
 * <literal>tp_debug_set_flags_from_string (g_getenv (var))</literal>,
 * and has the same problem with persistence being included in "all".
 */
export function debug_set_flags_from_env(_var: string): void;
/**
 * Set the debug flags indicated by @flags_string, in addition to any alr
 * eady
 * set. Unlike tp_debug_set_flags(), this enables persistence like
 * tp_debug_set_persistent() if the "persist" flag is present or the stri
 * ng
 * is "all" - this turns out to be unhelpful, as persistence should be
 * orthogonal.
 * The parsing matches that of g_parse_debug_string().
 */
export function debug_set_flags_from_string(flags_string: string): void;
/**
 * Used to enable persistent operation of the connection manager process 
 * for
 * debugging purposes.
 */
export function debug_set_persistent(persistent: boolean): void;
/**
 * A #GLogFunc that prepends the UTC time (currently in ISO 8601 format,
 * with microsecond resolution) to the message, then calls
 * g_log_default_handler.
 * Intended usage is:
 * <informalexample><programlisting>if (g_getenv ("MYPROG_TIMING") != NUL
 * L)
 *   g_log_set_default_handler (tp_debug_timestamped_log_handler, NULL);
 * </programlisting></informalexample>
 * If telepathy-glib was compiled with --disable-debug (not recommended),
 * this function is equivalent to g_log_default_handler().
 * Changed in 0.9.0: timestamps are now printed in UTC, in
 * RFC-3339 format. Previously, they were printed in local time, in a
 * format similar to RFC-3339.
 */
export function debug_timestamped_log_handler(log_domain: string, log_level: GLib.LogLevelFlags, message: string, ignored: object | null): void;
/**
 * <!-- -->
 */
export function error_get_dbus_name(error: Error): string;
/**
 * Return the error domain quark for #TpError.
 */
export function error_quark(): GLib.Quark;
/**
 * 
 */
export function errors_disconnected_quark(): GLib.Quark;
/**
 * <!-- -->
 */
export function errors_quark(): GLib.Quark;
/**
 * 
 */
export function errors_removed_from_group_quark(): GLib.Quark;
/**
 * Escape an arbitrary string so it follows the rules for a C identifier,
 * and hence an object path component, interface element component,
 * bus name component or member name in D-Bus.
 * Unlike g_strcanon this is a reversible encoding, so it preserves
 * distinctness.
 * The escaping consists of replacing all non-alphanumerics, and the firs
 * t
 * character if it's a digit, with an underscore and two lower-case hex
 * digits:
 *    "0123abc_xyz\x01\xff" -> _30123abc_5fxyz_01_ff
 * i.e. similar to URI encoding, but with _ taking the role of %, and a
 * smaller allowed set. As a special case, "" is escaped to "_" (just for
 * completeness, really).
 */
export function escape_as_identifier(name: string): string;
/**
 * Remove the external group mixin. This function should usually be calle
 * d
 * in the dispose or finalize function.
 */
export function external_group_mixin_finalize(obj: GObject.Object): void;
/**
 * An implementation of #TpDBusPropertiesMixinGetter which assumes that t
 * he
 * @object has the external group mixin. It can only be used for the Grou
 * p
 * interface.
 */
export function external_group_mixin_get_dbus_property(object: GObject.Object, _interface: GLib.Quark, name: GLib.Quark, value: GObject.Value, unused: object | null): void;
/**
 * Fill in the vtable entries needed to implement the group interface usi
 * ng
 * the group mixin of another object. This function should usually be cal
 * led
 * via G_IMPLEMENT_INTERFACE.
 */
export function external_group_mixin_iface_init(g_iface: object | null, iface_data: object | null): void;
/**
 * Fill in the qdata needed to implement the group interface using
 * the group mixin of another object. This function should usually be cal
 * led
 * in the instance constructor.
 */
export function external_group_mixin_init(obj: GObject.Object, obj_with_mixin: GObject.Object): void;
/**
 * Set up #TpDBusPropertiesMixinClass to use this mixin's implementation 
 * of
 * the Group interface's properties.
 * This uses tp_group_mixin_get_dbus_property() as the property getter an
 * d
 * sets up a list of the supported properties for it.  Having called this
 * , you
 * should add #TP_CHANNEL_GROUP_FLAG_PROPERTIES to channels containing th
 * e
 * mixin used by this class with tp_group_mixin_change_flags() to indicat
 * e that
 * the DBus properties are available.
 */
export function external_group_mixin_init_dbus_properties(cls: GObject.ObjectClass): void;
/**
 * Add each item in @source to @target, replacing any existing item with 
 * the
 * same key. @key_dup and @value_dup are used to duplicate the items; in
 * principle they could also be used to convert between types.
 */
export function g_hash_table_update(target: GLib.HashTable, source: GLib.HashTable, key_dup: GObject.BoxedCopyFunc, value_dup: GObject.BoxedCopyFunc): void;
/**
 * Returns the value associated with @key under @group_name as a signed
 * 64-bit integer. This is similar to g_key_file_get_integer() but can re
 * turn
 * 64-bit results without truncation.
 */
export function g_key_file_get_int64(key_file: GLib.KeyFile, group_name: string, key: string): number;
/**
 * Returns the value associated with @key under @group_name as an unsigne
 * d
 * 64-bit integer. This is similar to g_key_file_get_integer() but can re
 * turn
 * large positive results without truncation.
 */
export function g_key_file_get_uint64(key_file: GLib.KeyFile, group_name: string, key: string): number;
/**
 * <!--no further documentation needed-->
 */
export function g_ptr_array_contains(haystack: object[], needle: object | null): boolean;
/**
 * Appends all elements of @source to @target. Note that this only copies
 *  the
 * pointers from @source; any duplication or reference-incrementing must 
 * be
 * performed by the caller.
 * After this function has been called, it is safe to call
 * g_ptr_array_free() on @source and also free the actual pointer array,
 * as long as doing so does not free the data pointed to by the new
 * items in @target.
 */
export function g_ptr_array_extend(target: object[], source: object[]): void;
/**
 * Set the error NotImplemented for an invalid handle type,
 * with an appropriate message.
 * Changed in version 0.7.23: previously, the error was
 * InvalidArgument.
 */
export function g_set_error_invalid_handle_type(type: number): void;
/**
 * Set the error NotImplemented for a handle type which is valid but is n
 * ot
 * supported by this connection manager, with an appropriate message.
 * Changed in version 0.7.23: previously, the error was
 * InvalidArgument.
 */
export function g_set_error_unsupported_handle_type(type: number): void;
/**
 * Connects a #GCallback function to a signal for a particular object, as
 *  if
 * with g_signal_connect(). Additionally, arranges for the signal handler
 *  to be
 * disconnected if @gobject is destroyed.
 * This is similar to g_signal_connect_data(), but uses a closure which
 * ensures that the @gobject stays alive during the call to @c_handler
 * by temporarily adding a reference count to @gobject.
 * This is similar to g_signal_connect_object(), but doesn't have the
 * documented bug that everyone is too scared to fix. Also, it does not a
 * llow
 * you to pass in NULL as @gobject
 * This is intended to be a convenient way for objects to use themselves 
 * as
 * user_data for callbacks without having to explicitly disconnect all th
 * e
 * handlers in their finalizers.
 * Changed in 0.10.4 and 0.11.3: %G_CONNECT_AFTER is now respected.
 */
export function g_signal_connect_object(instance: object | null, detailed_signal: string, c_handler: GObject.Callback, gobject: object | null, connect_flags: GObject.ConnectFlags): number;
/**
 * <!-- 'Returns' says it all -->
 */
export function g_value_slice_dup(value: GObject.Value): GObject.Value;
/**
 * Unset and free a slice-allocated GValue.
 * <literal>(GDestroyNotify) tp_g_value_slice_free</literal> can be used
 * as a destructor for values in a #GHashTable, for example.
 */
export function g_value_slice_free(value: GObject.Value): void;
/**
 * Returns a connection to the D-Bus daemon on which this process was
 * activated if it was launched by D-Bus service activation, or the sessi
 * on
 * bus otherwise.
 * If dbus_g_bus_get() fails, exit with error code 1.
 * Note that this function is not suitable for use in applications which 
 * can
 * be useful even in the absence of D-Bus - it is designed for use in
 * connection managers, which are not at all useful without a D-Bus
 * connection. See &lt;https://bugs.freedesktop.org/show_bug.cgi?id=18832
 * &gt;.
 * Most processes should use tp_dbus_daemon_dup() instead.
 */
export function get_bus(): unknown;
/**
 * Return a #DBusGProxy for the bus daemon object. The same caveats as fo
 * r
 * tp_get_bus() apply.
 */
export function get_bus_proxy(): unknown;
/**
 * Note that the given local handle is an alias within this group
 * for the given globally-valid handle. It will be returned from subseque
 * nt
 * GetHandleOwner queries where appropriate.
 * Changed in 0.7.10: The @owner_handle may be 0. To comply with telepath
 * y-spec
 *  0.17.6, before adding any channel-specific handle to the members,
 *  local-pending members or remote-pending members, you must call either
 *  this function or tp_group_mixin_add_handle_owners().
 */
export function group_mixin_add_handle_owner(obj: GObject.Object, local_handle: Handle, owner_handle: Handle): void;
/**
 * Note that the given local handles are aliases within this group
 * for the given globally-valid handles.
 * To comply with telepathy-spec 0.17.6, before adding any channel-specif
 * ic
 * handle to the members, local-pending members or remote-pending members
 * , you
 * must call either this function or tp_group_mixin_add_handle_owner().
 */
export function group_mixin_add_handle_owners(obj: GObject.Object, local_to_owner_handle: GLib.HashTable): void;
/**
 * Request that the given contacts be added to the group as if in respons
 * e
 * to user action. If the group's flags prohibit this, raise
 * PermissionDenied. If any of the handles is invalid, raise InvalidHandl
 * e.
 * Otherwise attempt to add the contacts by calling the callbacks provide
 * d
 * by the channel implementation.
 */
export function group_mixin_add_members(obj: GObject.Object, contacts: object[], message: string): boolean;
/**
 * Request a change to be made to the flags. If any flags were actually
 * set or cleared, emits the GroupFlagsChanged signal with the changes.
 * It is an error to set any of the same bits in both @add and @del.
 * Changed in 0.7.7: the signal is not emitted if adding @add and
 *  removing @del had no effect on the existing group flags.
 */
export function group_mixin_change_flags(obj: GObject.Object, add: ChannelGroupFlags, del: ChannelGroupFlags): void;
/**
 * Change the sets of members as given by the arguments, and emit the
 * MembersChanged and MembersChangedDetailed signals if the changes were 
 * not a
 * no-op.
 * This function must be called in response to events on the underlying
 * IM protocol, and must not be called in direct response to user input;
 * it does not respect the permissions flags, but changes the group direc
 * tly.
 * If any two of add, del, add_local_pending and add_remote_pending have
 * a non-empty intersection, the result is undefined. Don't do that.
 * Each of the TpIntset arguments may be %NULL, which is treated as
 * equivalent to an empty set.
 */
export function group_mixin_change_members(obj: GObject.Object, message: string, add: Intset, del: Intset, add_local_pending: Intset, add_remote_pending: Intset, actor: Handle, reason: ChannelGroupChangeReason): boolean;
/**
 * Change the sets of members as given by the arguments, and emit the
 * MembersChanged and MembersChangedDetailed signals if the changes were 
 * not a
 * no-op.
 * This function must be called in response to events on the underlying
 * IM protocol, and must not be called in direct response to user input;
 * it does not respect the permissions flags, but changes the group direc
 * tly.
 * If any two of add, del, add_local_pending and add_remote_pending have
 * a non-empty intersection, the result is undefined. Don't do that.
 * Each of the TpIntset arguments may be %NULL, which is treated as
 * equivalent to an empty set.
 * details may contain, among other entries, the well-known
 * keys (and corresponding type, wrapped in a GValue) defined by the
 * Group.MembersChangedDetailed signal's specification; these include "ac
 * tor"
 * (a handle as G_TYPE_UINT), "change-reason" (an element of
 * #TpChannelGroupChangeReason as G_TYPE_UINT), "message" (G_TYPE_STRING)
 * ,
 * "error" (G_TYPE_STRING), "debug-message" (G_TYPE_STRING).
 * If all of the information in details could be passed to
 * tp_group_mixin_change_members() then calling this function instead pro
 * vides
 * no benefit. Calling this function without setting
 * #TP_CHANNEL_GROUP_FLAG_MEMBERS_CHANGED_DETAILED with
 * tp_group_mixin_change_members() first is not very useful, as clients w
 * ill
 * not know to listen for MembersChangedDetailed and thus will miss the
 * details.
 */
export function group_mixin_change_members_detailed(obj: GObject.Object, add: Intset, del: Intset, add_local_pending: Intset, add_remote_pending: Intset, details: GLib.HashTable): boolean;
/**
 * Change the self-handle for this group to the given value.
 */
export function group_mixin_change_self_handle(obj: GObject.Object, new_self_handle: Handle): void;
/**
 * Configure the mixin to allow attempts to remove the SelfHandle from th
 * is
 * Group, even if the group flags would otherwise disallow this. The
 * channel's #TpGroupMixinRemMemberFunc or
 * #TpGroupMixinRemMemberWithReasonFunc will be called as usual for such
 * attempts, and may make them fail with %TP_ERROR_PERMISSION_DENIED if
 * required.
 * This function should be called from the GObject @class_init callback,
 * after calling tp_group_mixin_class_init().
 * (Recent telepathy-spec changes make it valid to try to remove the
 * self-handle at all times, regardless of group flags. However, if this 
 * was
 * implemented automatically in TpGroupMixin, this would risk crashing
 * connection manager implementations that assume that TpGroupMixin will
 * enforce the group flags strictly. As a result, connection managers sho
 * uld
 * call this function to indicate to the TpGroupMixin that it may call th
 * eir
 * removal callback with the self-handle regardless of flag settings.)
 */
export function group_mixin_class_allow_self_removal(obj_cls: GObject.ObjectClass): void;
/**
 * <!--Returns: says it all-->
 */
export function group_mixin_class_get_offset_quark(): GLib.Quark;
/**
 * Configure the mixin for use with the given class.
 */
export function group_mixin_class_init(obj_cls: GObject.ObjectClass, offset: number, add_func: GroupMixinAddMemberFunc, rem_func: GroupMixinRemMemberFunc): void;
/**
 * Set a callback to be used to implement RemoveMembers() and
 * RemoveMembersWithReason(). If this function is called during class
 * initialization, the given callback will be used instead of the remove
 * callback passed to tp_group_mixin_class_init() (which must be %NULL
 * in this case).
 */
export function group_mixin_class_set_remove_with_reason_func(cls: GObject.ObjectClass, func: GroupMixinRemMemberWithReasonFunc): void;
/**
 * Unreference handles and free resources used by this mixin.
 */
export function group_mixin_finalize(obj: GObject.Object): void;
/**
 * Get the group's current and pending members.
 */
export function group_mixin_get_all_members(obj: GObject.Object, members: object[], local_pending: object[], remote_pending: object[]): boolean;
/**
 * An implementation of #TpDBusPropertiesMixinGetter which assumes that t
 * he
 * @object has the group mixin. It can only be used for the Group interfa
 * ce.
 */
export function group_mixin_get_dbus_property(object: GObject.Object, _interface: GLib.Quark, name: GLib.Quark, value: GObject.Value, unused: object | null): void;
/**
 * Set the guint pointed to by ret to this group's flags, to be
 * interpreted according to TpChannelGroupFlags.
 */
export function group_mixin_get_group_flags(obj: GObject.Object, ret: number): boolean;
/**
 * If the mixin has the flag %TP_CHANNEL_GROUP_FLAG_CHANNEL_SPECIFIC_HAND
 * LES,
 * return the global owners of the given local handles, or 0 where
 * unavailable.
 */
export function group_mixin_get_handle_owners(obj: GObject.Object, handles: object[], ret: object[]): boolean;
/**
 * Get the group's local-pending members.
 */
export function group_mixin_get_local_pending_members(obj: GObject.Object, ret: object[]): boolean;
/**
 * Get the group's local-pending members and information about their
 * requests to join the channel.
 */
export function group_mixin_get_local_pending_members_with_info(obj: GObject.Object, ret: object[]): boolean;
/**
 * Get the group's current members
 */
export function group_mixin_get_members(obj: GObject.Object, ret: object[]): boolean;
/**
 * <!--Returns: says it all-->
 */
export function group_mixin_get_offset_quark(): GLib.Quark;
/**
 * Get the group's remote-pending members.
 */
export function group_mixin_get_remote_pending_members(obj: GObject.Object, ret: object[]): boolean;
/**
 * Set the guint pointed to by ret to the local user's handle in this
 * group, or to 0 if the local user is not present in this group.
 */
export function group_mixin_get_self_handle(obj: GObject.Object, ret: number): boolean;
/**
 * Fill in the vtable entries needed to implement the group interface usi
 * ng
 * this mixin. This function should usually be called via
 * G_IMPLEMENT_INTERFACE.
 */
export function group_mixin_iface_init(g_iface: object | null, iface_data: object | null): void;
/**
 * Initialize the mixin.
 */
export function group_mixin_init(obj: GObject.Object, offset: number, handle_repo: HandleRepoIface, self_handle: Handle): void;
/**
 * Set up #TpDBusPropertiesMixinClass to use this mixin's implementation 
 * of
 * the Group interface's properties.
 * This uses tp_group_mixin_get_dbus_property() as the property getter an
 * d
 * sets up a list of the supported properties for it.  Having called this
 * , you
 * should add #TP_CHANNEL_GROUP_FLAG_PROPERTIES to any channels of this c
 * lass
 * with tp_group_mixin_change_flags() to indicate that the DBus propertie
 * s are
 * available.
 */
export function group_mixin_init_dbus_properties(cls: GObject.ObjectClass): void;
/**
 * Request that the given contacts be removed from the group as if in res
 * ponse
 * to user action. If the group's flags prohibit this, raise
 * PermissionDenied. If any of the handles is invalid, raise InvalidHandl
 * e.
 * If any of the handles is absent from the group, raise NotAvailable.
 * Otherwise attempt to remove the contacts by calling the callbacks prov
 * ided
 * by the channel implementation.
 */
export function group_mixin_remove_members(obj: GObject.Object, contacts: object[], message: string): boolean;
/**
 * Request that the given contacts be removed from the group as if in res
 * ponse
 * to user action. If the group's flags prohibit this, raise
 * PermissionDenied. If any of the handles is invalid, raise InvalidHandl
 * e.
 * If any of the handles is absent from the group, raise NotAvailable.
 * Otherwise attempt to remove the contacts by calling the callbacks prov
 * ided
 * by the channel implementation.
 */
export function group_mixin_remove_members_with_reason(obj: GObject.Object, contacts: object[], message: string, reason: number): boolean;
/**
 * Do nothing. Since version 0.13.8, handles always last as long as
 * the connection; previously, this function provided refcounting for han
 * dles.
 */
export function handle_client_hold(self: HandleRepoIface, client: string, handle: Handle): boolean;
/**
 * Do nothing. Since version 0.13.8, handles always last as long as
 * the connection; previously, this function provided refcounting for han
 * dles.
 */
export function handle_client_release(self: HandleRepoIface, client: string, handle: Handle): boolean;
/**
 * Return a handle for the given string, creating one if necessary. The s
 * tring
 * is normalized, if possible.
 */
export function handle_ensure(self: HandleRepoIface, id: string, context: object | null): Handle;
/**
 * Asyncronously normalize an identifier and create an handle for it. Thi
 * s could
 * involve a server round-trip. This should be used instead of
 * tp_handle_ensure() for user provided contact identifiers, but it is no
 * t
 * necessary for identifiers from the server.
 */
export function handle_ensure_async(self: HandleRepoIface, connection: BaseConnection, id: string, context: object | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Finishes tp_handle_ensure_async()
 */
export function handle_ensure_finish(self: HandleRepoIface, result: Gio.AsyncResult): Handle;
/**
 * <!--Returns: says it all-->
 */
export function handle_get_qdata(repo: HandleRepoIface, handle: Handle, key_id: GLib.Quark): object | null;
/**
 * <!--Returns: says it all-->
 */
export function handle_inspect(self: HandleRepoIface, handle: Handle): string;
/**
 * <!--Returns: says it all-->
 */
export function handle_is_valid(self: HandleRepoIface, handle: Handle): boolean;
/**
 * Return the handle for the given string. The string is normalized if
 * possible. If no handle already exists for the string, none is created.
 */
export function handle_lookup(self: HandleRepoIface, id: string, context: object | null): Handle;
/**
 * Do nothing. Since version 0.13.8, handles always last as long as
 * the connection; previously, this function provided refcounting for han
 * dles.
 * Changed in 0.13.6: @handle is now returned; previously,
 * this function didn't return anything.
 */
export function handle_ref(self: HandleRepoIface, handle: Handle): Handle;
/**
 * Associates a blob of data with a given handle and a given key
 * If @destroy is set, then the data is freed when the handle is freed.
 * Since version 0.13.8, handles always last as long as the
 * connection, so @destroy will not be called until the connection
 * disconnects.
 */
export function handle_set_qdata(repo: HandleRepoIface, handle: Handle, key_id: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify): void;
/**
 * If the given handle type is valid, return %TRUE. If not, set @error
 * and return %FALSE.
 */
export function handle_type_is_valid(type: HandleType): boolean;
/**
 * <!---->
 */
export function handle_type_to_string(type: HandleType): string;
/**
 * Do nothing. Since version 0.13.8, handles always last as long as
 * the connection; previously, this function provided refcounting for han
 * dles.
 */
export function handle_unref(self: HandleRepoIface, handle: Handle): void;
/**
 * <!--Returns: says it all-->
 */
export function handles_are_valid(self: HandleRepoIface, handles: object[], allow_zero: boolean): boolean;
/**
 * Do nothing. Since version 0.13.8, handles always last as long as
 * the connection; previously, this function provided refcounting for han
 * dles.
 */
export function handles_client_hold(self: HandleRepoIface, client: string, handles: object[]): boolean;
/**
 * Do nothing. Since version 0.13.8, handles always last as long as
 * the connection; previously, this function provided refcounting for han
 * dles.
 */
export function handles_client_release(self: HandleRepoIface, client: string, handles: object[]): boolean;
/**
 * Do nothing. Since version 0.13.8, handles always last as long as
 * the connection; previously, this function provided refcounting for han
 * dles.
 */
export function handles_ref(self: HandleRepoIface, handles: object[]): void;
/**
 * Return %TRUE if the given handle type is supported (i.e. repos[handle_
 * type]
 * is not %NULL) and the given handles are all valid in that repository.
 * If not, set @error and return %FALSE.
 */
export function handles_supported_and_valid(repos: HandleRepoIface, handle_type: HandleType, handles: object[], allow_zero: boolean): boolean;
/**
 * Do nothing. Since version 0.13.8, handles always last as long as
 * the connection; previously, this function provided refcounting for han
 * dles.
 */
export function handles_unref(self: HandleRepoIface, handles: object[]): void;
/**
 * 
 */
export function iface_quark_account(): GLib.Quark;
/**
 * 
 */
export function iface_quark_account_interface_addressing(): GLib.Quark;
/**
 * 
 */
export function iface_quark_account_interface_avatar(): GLib.Quark;
/**
 * 
 */
export function iface_quark_account_interface_storage(): GLib.Quark;
/**
 * 
 */
export function iface_quark_account_manager(): GLib.Quark;
/**
 * 
 */
export function iface_quark_authentication_tls_certificate(): GLib.Quark;
/**
 * 
 */
export function iface_quark_call_content(): GLib.Quark;
/**
 * 
 */
export function iface_quark_call_content_interface_audio_control(): GLib.Quark;
/**
 * 
 */
export function iface_quark_call_content_interface_dtmf(): GLib.Quark;
/**
 * 
 */
export function iface_quark_call_content_interface_media(): GLib.Quark;
/**
 * 
 */
export function iface_quark_call_content_interface_video_control(): GLib.Quark;
/**
 * 
 */
export function iface_quark_call_content_media_description(): GLib.Quark;
/**
 * 
 */
export function iface_quark_call_content_media_description_interface_rtcp_extended_reports(): GLib.Quark;
/**
 * 
 */
export function iface_quark_call_content_media_description_interface_rtcp_feedback(): GLib.Quark;
/**
 * 
 */
export function iface_quark_call_content_media_description_interface_rtp_header_extensions(): GLib.Quark;
/**
 * 
 */
export function iface_quark_call_stream(): GLib.Quark;
/**
 * 
 */
export function iface_quark_call_stream_endpoint(): GLib.Quark;
/**
 * 
 */
export function iface_quark_call_stream_interface_media(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_dispatch_operation(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_dispatcher(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_dispatcher_interface_messages1(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_dispatcher_interface_operation_list(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_anonymity(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_call_state(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_captcha_authentication(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_chat_state(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_conference(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_destroyable(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_dtmf(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_file_transfer_metadata(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_group(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_hold(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_media_signalling(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_messages(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_password(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_room(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_room_config(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_sasl_authentication(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_securable(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_service_point(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_sms(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_subject(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_interface_tube(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_request(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_type_call(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_type_contact_list(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_type_contact_search(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_type_dbus_tube(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_type_file_transfer(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_type_room_list(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_type_server_authentication(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_type_server_tls_connection(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_type_stream_tube(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_type_streamed_media(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_type_text(): GLib.Quark;
/**
 * 
 */
export function iface_quark_channel_type_tubes(): GLib.Quark;
/**
 * 
 */
export function iface_quark_client(): GLib.Quark;
/**
 * 
 */
export function iface_quark_client_approver(): GLib.Quark;
/**
 * 
 */
export function iface_quark_client_handler(): GLib.Quark;
/**
 * 
 */
export function iface_quark_client_interface_requests(): GLib.Quark;
/**
 * 
 */
export function iface_quark_client_observer(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_addressing(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_aliasing(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_anonymity(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_avatars(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_balance(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_capabilities(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_cellular(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_client_types(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_contact_blocking(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_contact_capabilities(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_contact_groups(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_contact_info(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_contact_list(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_contacts(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_location(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_mail_notification(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_power_saving(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_presence(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_renaming(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_requests(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_service_point(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_sidecars1(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_interface_simple_presence(): GLib.Quark;
/**
 * 
 */
export function iface_quark_connection_manager(): GLib.Quark;
/**
 * 
 */
export function iface_quark_dbus_daemon(): GLib.Quark;
/**
 * 
 */
export function iface_quark_dbus_introspectable(): GLib.Quark;
/**
 * 
 */
export function iface_quark_dbus_peer(): GLib.Quark;
/**
 * 
 */
export function iface_quark_dbus_properties(): GLib.Quark;
/**
 * 
 */
export function iface_quark_debug(): GLib.Quark;
/**
 * 
 */
export function iface_quark_media_session_handler(): GLib.Quark;
/**
 * 
 */
export function iface_quark_media_stream_handler(): GLib.Quark;
/**
 * 
 */
export function iface_quark_properties_interface(): GLib.Quark;
/**
 * 
 */
export function iface_quark_protocol(): GLib.Quark;
/**
 * 
 */
export function iface_quark_protocol_interface_addressing(): GLib.Quark;
/**
 * 
 */
export function iface_quark_protocol_interface_avatars(): GLib.Quark;
/**
 * 
 */
export function iface_quark_protocol_interface_presence(): GLib.Quark;
/**
 * <!--Returns: says it all-->
 */
export function intset_from_array(array: number[]): Intset;
/**
 * List the available (running or installed) connection managers. Call th
 * e
 * callback when done.
 * Since 0.7.26, this function will wait for each #TpConnectionManager
 * to be ready, so all connection managers passed to @callback will have
 * their %TP_CONNECTION_MANAGER_FEATURE_CORE feature prepared, unless an 
 * error
 * occurred while launching that connection manager.
 */
export function list_connection_managers(bus_daemon: DBusDaemon, callback: ConnectionManagerListCb, user_data: object | null, destroy: GLib.DestroyNotify, weak_object: GObject.Object | null): void;
/**
 * List the available (running or installed) connection managers,
 * asynchronously, and wait for their %TP_CONNECTION_MANAGER_FEATURE_CORE
 * feature to be ready.
 */
export function list_connection_managers_async(dbus_daemon: DBusDaemon | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Finish listing the available connection managers.
 * Free the list after use, for instance with
 * <literal>g_list_free_full (list, g_object_unref)</literal>.
 */
export function list_connection_managers_finish(result: Gio.AsyncResult): GLib.List;
/**
 * List the bus names of all the connections that currently exist, togeth
 * er
 * with the connection manager name and the protocol name for each connec
 * tion.
 * Call the callback when done.
 * The bus names passed to the callback can be used to construct #TpConne
 * ction
 * objects for any connections that are of interest.
 */
export function list_connection_names(bus_daemon: DBusDaemon, callback: ConnectionNameListCb, user_data: object | null, destroy: GLib.DestroyNotify, weak_object: GObject.Object | null): void;
/**
 * If the type of @klass, or any of its ancestor types, has had an offset
 * attached using qdata with the given @quark, return that offset; if not
 * ,
 * return 0.
 * In older telepathy-glib versions, calling this function on an instance
 *  that
 * did not have the mixin was considered to be a programming error. Since
 * version 0.13.9, 0 is returned, without error.
 * This is used to implement the telepathy-glib mixin classes.
 */
export function mixin_class_get_offset(klass: object | null, quark: GLib.Quark): number;
/**
 * If the type of @instance, or any of its ancestor types, has had an off
 * set
 * attached using qdata with the given @quark, return that offset. If not
 * ,
 * return 0.
 * In older telepathy-glib versions, calling this function on an instance
 *  that
 * did not have the mixin was considered to be a programming error. Since
 * version 0.13.9, 0 is returned, without error.
 * This is used to implement the telepathy-glib mixin classes.
 */
export function mixin_instance_get_offset(instance: object | null, quark: GLib.Quark): number;
/**
 * Extend a pointer by an offset, provided the offset is not 0.
 * This is used to cast from an object instance to one of the telepathy-g
 * lib
 * mixin classes.
 */
export function mixin_offset_cast(instance: object | null, offset: number): object | null;
/**
 * <!--no documentation beyond Returns: needed-->
 */
export function presence_mixin_class_get_offset_quark(): GLib.Quark;
/**
 * Initialize the presence mixin. Should be called from the implementatio
 * n's
 * class_init function like so:
 * <informalexample><programlisting>
 * tp_presence_mixin_class_init ((GObjectClass *) klass,
 *                               G_STRUCT_OFFSET (SomeObjectClass,
 *                                                presence_mixin));
 * </programlisting></informalexample>
 */
export function presence_mixin_class_init(obj_cls: GObject.ObjectClass, offset: number, status_available: PresenceMixinStatusAvailableFunc, get_contact_statuses: PresenceMixinGetContactStatusesFunc, set_own_status: PresenceMixinSetOwnStatusFunc, statuses: PresenceStatusSpec): void;
/**
 * Emit the PresenceUpdate signal for a single contact. This method is ju
 * st a
 * convenience wrapper around #tp_presence_mixin_emit_presence_update.
 */
export function presence_mixin_emit_one_presence_update(obj: GObject.Object, handle: Handle, status: PresenceStatus): void;
/**
 * Emit the PresenceUpdate signal for multiple contacts. For emitting
 * PresenceUpdate for a single contact, there is a convenience wrapper ca
 * lled
 * #tp_presence_mixin_emit_one_presence_update.
 */
export function presence_mixin_emit_presence_update(obj: GObject.Object, contact_presences: GLib.HashTable): void;
/**
 * Free resources held by the presence mixin.
 */
export function presence_mixin_finalize(obj: GObject.Object): void;
/**
 * <!--no documentation beyond Returns: needed-->
 */
export function presence_mixin_get_offset_quark(): GLib.Quark;
/**
 * Fill in the vtable entries needed to implement the presence interface 
 * using
 * this mixin. This function should usually be called via G_IMPLEMENT_INT
 * ERFACE.
 */
export function presence_mixin_iface_init(g_iface: object | null, iface_data: object | null): void;
/**
 * Initialize the presence mixin. Should be called from the implementatio
 * n's
 * instance init function like so:
 * <informalexample><programlisting>
 * tp_presence_mixin_init ((GObject *) self,
 *                         G_STRUCT_OFFSET (SomeObject, presence_mixin));
 * </programlisting></informalexample>
 */
export function presence_mixin_init(obj: GObject.Object, offset: number): void;
/**
 * Fill in the vtable entries needed to implement the simple presence int
 * erface
 * using this mixin. This function should usually be called via
 * G_IMPLEMENT_INTERFACE.
 */
export function presence_mixin_simple_presence_iface_init(g_iface: object | null, iface_data: object | null): void;
/**
 * Set up #TpDBusPropertiesMixinClass to use this mixin's implementation 
 * of
 * the SimplePresence interface's properties.
 * This automatically sets up a list of the supported properties for the
 * SimplePresence interface.
 */
export function presence_mixin_simple_presence_init_dbus_properties(cls: GObject.ObjectClass): void;
/**
 * Register the SimplePresence interface with the Contacts interface to m
 * ake it
 * inspectable. The Contacts mixin should be initialized before this func
 * tion
 * is called
 */
export function presence_mixin_simple_presence_register_with_contacts_mixin(obj: GObject.Object): void;
/**
 * Construct a presence status structure. You should free the returned
 * structure with #tp_presence_status_free.
 * In modern Telepathy connection managers, the only optional
 * argument should be a %G_TYPE_STRING named "message", on statuses
 * that have an optional human-readable message. All other optional argum
 * ents
 * are deprecated.
 */
export function presence_status_new(which: number, optional_arguments: GLib.HashTable): PresenceStatus;
/**
 * Create a new #GSimpleAsyncResult with no operation result, and call
 * g_simple_async_result_complete_in_idle() on it.
 * This is like a successful version of g_simple_async_report_error_in_id
 * le(),
 * suitable for asynchronous functions that (conceptually) either succeed
 *  and
 * return nothing, or raise an error, such as tp_proxy_prepare_async().
 * The corresponding finish function should not call a function that atte
 * mpts
 * to get a result, such as g_simple_async_result_get_op_res_gpointer().
 */
export function simple_async_report_success_in_idle(source: GObject.Object | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null, source_tag: object | null): void;
/**
 * Return %TRUE if the given strings are different. Unlike #strcmp this
 * function will handle null pointers, treating them as distinct from any
 * string.
 */
export function strdiff(left: string, right: string): boolean;
/**
 * <!-- -->
 */
export function strv_contains(strv: string, str: string): boolean;
/**
 * Retrieves the D-Bus property metadata for the given interface, if any.
 * This function is typically not useful outside telepathy-glib itself, b
 * ut may
 * be useful for domain-specific variations on the theme of SetProperty. 
 * If in
 * doubt, you probably don't need this function.
 */
export function svc_interface_get_dbus_properties_info(g_interface: unknown): DBusPropertiesMixinIfaceInfo;
/**
 * Declare that @g_interface implements the given D-Bus interface, with t
 * he
 * given properties. This may only be called once per GInterface, usually
 *  from
 * a section of its base_init function that only runs once.
 * This is typically only used within generated code; there is normally n
 * o
 * reason to call it manually.
 */
export function svc_interface_set_dbus_properties_info(g_interface: unknown, info: DBusPropertiesMixinIfaceInfo): void;
/**
 * Convert an X11 timestamp into a user action time as used in Telepathy.
 * This also works for the timestamps used by GDK 2, GDK 3 and Clutter 1.
 * 0;
 * it may or may not work with other toolkits or versions.
 */
export function user_action_time_from_x11(x11_time: number): number;
/**
 * Interpret a Telepathy user action time to decide whether a Handler sho
 * uld
 * attempt to gain focus. If %TRUE is returned, it would be appropriate t
 * o
 * call gtk_window_present_with_time() using @x11_time as input, for inst
 * ance.
 * @x11_time is used to return a timestamp in the right format for X11,
 * GDK 2, GDK 3 and Clutter 1.0; it may or may not work with other
 * toolkits or versions.
 */
export function user_action_time_should_present(user_action_time: number): [boolean, number | null];
/**
 * Validate that the provided string is valid UTF8. If not,
 * replace all invalid bytes with unicode replacement
 * character (U+FFFD).
 * This method is a verbatim copy of glib's internal
 * _g_utf8_make_valid<!-- -->() function, and will be deprecated as
 * soon as the glib one becomes public.
 */
export function utf8_make_valid(name: string): string;
/**
 * Creates a new #GValueArray for use with structs, containing the values
 * passed in as parameters. The values are copied or reffed as appropriat
 * e for
 * their type.
 * <example>
 *   <title> using tp_value_array_build</title>
 *    <programlisting>
 * GValueArray *array = tp_value_array_build (2,
 *    G_TYPE_STRING, host,
 *    G_TYPE_UINT, port,
 *    G_TYPE_INVALID);
 *    </programlisting>
 * </example>
 */
export function value_array_build(length: number, type: unknown, ___: unknown[]): GObject.ValueArray;
/**
 * Free @va. This is exactly the same as g_value_array_free(), but does n
 * ot
 * provoke deprecation warnings from GLib when used in conjunction with
 * tp_value_array_build() and tp_value_array_unpack().
 */
export function value_array_free(va: GObject.ValueArray): void;
/**
 * Unpacks a #GValueArray into separate variables.
 * The contents of the values aren't copied into the variables, and so be
 * come
 * invalid when @array is freed.
 * <example>
 *   <title>using tp_value_array_unpack</title>
 *    <programlisting>
 * const gchar *host;
 * guint port;
 * tp_value_array_unpack (array, 2,
 *    &host,
 *    &port);
 *    </programlisting>
 * </example>
 */
export function value_array_unpack(array: GObject.ValueArray, len: number, ___: unknown[]): void;
/**
 * Return a new weak reference wrapper for @object.
 */
export function weak_ref_new(object: GObject.Object, user_data: object | null, destroy: GLib.DestroyNotify): WeakRef;
export enum AccessControlType {
    WHITELIST = 0,
    PUBLISH_LIST = 1,
    GROUP = 2,
    OPEN = 3,
    SUBSCRIBE_OR_PUBLISH_LIST = 4,
    CLOSED = 5,
    NOT_UNDERSTOOD = 6,
}
export enum CMInfoSource {
    NONE = 0,
    FILE = 1,
    LIVE = 2,
}
export enum CallContentDisposition {
    NONE = 0,
    INITIAL = 1,
}
export enum CallContentPacketizationType {
    RTP = 0,
    RAW = 1,
    MSN_WEBCAM = 2,
}
export enum CallState {
    UNKNOWN = 0,
    PENDING_INITIATOR = 1,
    INITIALISING = 2,
    INITIALISED = 3,
    ACCEPTED = 4,
    ACTIVE = 5,
    ENDED = 6,
}
export enum CallStateChangeReason {
    UNKNOWN = 0,
    PROGRESS_MADE = 1,
    USER_REQUESTED = 2,
    FORWARDED = 3,
    REJECTED = 4,
    NO_ANSWER = 5,
    INVALID_CONTACT = 6,
    PERMISSION_DENIED = 7,
    BUSY = 8,
    INTERNAL_ERROR = 9,
    SERVICE_ERROR = 10,
    NETWORK_ERROR = 11,
    MEDIA_ERROR = 12,
    CONNECTIVITY_ERROR = 13,
}
export enum CallStreamCandidateType {
    NONE = 0,
    HOST = 1,
    SERVER_REFLEXIVE = 2,
    PEER_REFLEXIVE = 3,
    RELAY = 4,
    MULTICAST = 5,
}
export enum CaptchaCancelReason {
    USER_CANCELLED = 0,
    NOT_SUPPORTED = 1,
    SERVICE_CONFUSED = 2,
}
export enum CaptchaStatus {
    LOCAL_PENDING = 0,
    REMOTE_PENDING = 1,
    SUCCEEDED = 2,
    TRY_AGAIN = 3,
    FAILED = 4,
}
export enum ChannelChatState {
    GONE = 0,
    INACTIVE = 1,
    ACTIVE = 2,
    PAUSED = 3,
    COMPOSING = 4,
}
export enum ChannelContactSearchState {
    NOT_STARTED = 0,
    IN_PROGRESS = 1,
    MORE_AVAILABLE = 2,
    COMPLETED = 3,
    FAILED = 4,
}
export enum ChannelGroupChangeReason {
    NONE = 0,
    OFFLINE = 1,
    KICKED = 2,
    BUSY = 3,
    INVITED = 4,
    BANNED = 5,
    ERROR = 6,
    INVALID_CONTACT = 7,
    NO_ANSWER = 8,
    RENAMED = 9,
    PERMISSION_DENIED = 10,
    SEPARATED = 11,
}
export enum ChannelTextMessageType {
    NORMAL = 0,
    ACTION = 1,
    NOTICE = 2,
    AUTO_REPLY = 3,
    DELIVERY_REPORT = 4,
}
export enum ChannelTextSendError {
    UNKNOWN = 0,
    OFFLINE = 1,
    INVALID_CONTACT = 2,
    PERMISSION_DENIED = 3,
    TOO_LONG = 4,
    NOT_IMPLEMENTED = 5,
}
export enum ConnectionPresenceType {
    UNSET = 0,
    OFFLINE = 1,
    AVAILABLE = 2,
    AWAY = 3,
    EXTENDED_AWAY = 4,
    HIDDEN = 5,
    BUSY = 6,
    UNKNOWN = 7,
    ERROR = 8,
}
export enum ConnectionStatus {
    CONNECTED = 0,
    CONNECTING = 1,
    DISCONNECTED = 2,
}
export enum ConnectionStatusReason {
    NONE_SPECIFIED = 0,
    REQUESTED = 1,
    NETWORK_ERROR = 2,
    AUTHENTICATION_FAILED = 3,
    ENCRYPTION_ERROR = 4,
    NAME_IN_USE = 5,
    CERT_NOT_PROVIDED = 6,
    CERT_UNTRUSTED = 7,
    CERT_EXPIRED = 8,
    CERT_NOT_ACTIVATED = 9,
    CERT_HOSTNAME_MISMATCH = 10,
    CERT_FINGERPRINT_MISMATCH = 11,
    CERT_SELF_SIGNED = 12,
    CERT_OTHER_ERROR = 13,
    CERT_REVOKED = 14,
    CERT_INSECURE = 15,
    CERT_LIMIT_EXCEEDED = 16,
}
export enum ContactFeature {
    ALIAS = 0,
    AVATAR_TOKEN = 1,
    PRESENCE = 2,
    LOCATION = 3,
    CAPABILITIES = 4,
    AVATAR_DATA = 5,
    CONTACT_INFO = 6,
    CLIENT_TYPES = 7,
    SUBSCRIPTION_STATES = 8,
    CONTACT_GROUPS = 9,
    CONTACT_BLOCKING = 10,
}
export enum ContactListState {
    NONE = 0,
    WAITING = 1,
    FAILURE = 2,
    SUCCESS = 3,
}
export enum ContactMetadataStorageType {
    NONE = 0,
    SUBSCRIBED_OR_PENDING = 1,
    SUBSCRIBED = 2,
    ANYONE = 3,
}
export enum DBusError {
    UNKNOWN_REMOTE_ERROR = 0,
    PROXY_UNREFERENCED = 1,
    NO_INTERFACE = 2,
    NAME_OWNER_LOST = 3,
    INVALID_BUS_NAME = 4,
    INVALID_INTERFACE_NAME = 5,
    INVALID_OBJECT_PATH = 6,
    INVALID_MEMBER_NAME = 7,
    OBJECT_REMOVED = 8,
    CANCELLED = 9,
    INCONSISTENT = 10,
}
export enum DTMFEvent {
    DIGIT_0 = 0,
    DIGIT_1 = 1,
    DIGIT_2 = 2,
    DIGIT_3 = 3,
    DIGIT_4 = 4,
    DIGIT_5 = 5,
    DIGIT_6 = 6,
    DIGIT_7 = 7,
    DIGIT_8 = 8,
    DIGIT_9 = 9,
    ASTERISK = 10,
    HASH = 11,
    LETTER_A = 12,
    LETTER_B = 13,
    LETTER_C = 14,
    LETTER_D = 15,
}
export enum DebugLevel {
    ERROR = 0,
    CRITICAL = 1,
    WARNING = 2,
    MESSAGE = 3,
    INFO = 4,
    DEBUG = 5,
}
export enum DeliveryStatus {
    UNKNOWN = 0,
    DELIVERED = 1,
    TEMPORARILY_FAILED = 2,
    PERMANENTLY_FAILED = 3,
    ACCEPTED = 4,
    READ = 5,
    DELETED = 6,
}
export enum Error {
    NETWORK_ERROR = 0,
    NOT_IMPLEMENTED = 1,
    INVALID_ARGUMENT = 2,
    NOT_AVAILABLE = 3,
    PERMISSION_DENIED = 4,
    DISCONNECTED = 5,
    INVALID_HANDLE = 6,
    CHANNEL_BANNED = 7,
    CHANNEL_FULL = 8,
    CHANNEL_INVITE_ONLY = 9,
    NOT_YOURS = 10,
    CANCELLED = 11,
    AUTHENTICATION_FAILED = 12,
    ENCRYPTION_NOT_AVAILABLE = 13,
    ENCRYPTION_ERROR = 14,
    CERT_NOT_PROVIDED = 15,
    CERT_UNTRUSTED = 16,
    CERT_EXPIRED = 17,
    CERT_NOT_ACTIVATED = 18,
    CERT_FINGERPRINT_MISMATCH = 19,
    CERT_HOSTNAME_MISMATCH = 20,
    CERT_SELF_SIGNED = 21,
    CERT_INVALID = 22,
    NOT_CAPABLE = 23,
    OFFLINE = 24,
    CHANNEL_KICKED = 25,
    BUSY = 26,
    NO_ANSWER = 27,
    DOES_NOT_EXIST = 28,
    TERMINATED = 29,
    CONNECTION_REFUSED = 30,
    CONNECTION_FAILED = 31,
    CONNECTION_LOST = 32,
    ALREADY_CONNECTED = 33,
    CONNECTION_REPLACED = 34,
    REGISTRATION_EXISTS = 35,
    SERVICE_BUSY = 36,
    RESOURCE_UNAVAILABLE = 37,
    WOULD_BREAK_ANONYMITY = 38,
    CERT_REVOKED = 39,
    CERT_INSECURE = 40,
    CERT_LIMIT_EXCEEDED = 41,
    NOT_YET = 42,
    REJECTED = 43,
    PICKED_UP_ELSEWHERE = 44,
    CONFUSED = 45,
    SERVICE_CONFUSED = 46,
    EMERGENCY_CALLS_NOT_SUPPORTED = 47,
    SOFTWARE_UPGRADE_REQUIRED = 48,
    INSUFFICIENT_BALANCE = 49,
    MEDIA_CODECS_INCOMPATIBLE = 50,
    MEDIA_UNSUPPORTED_TYPE = 51,
    MEDIA_STREAMING_ERROR = 52,
    CAPTCHA_NOT_SUPPORTED = 53,
}
export enum FileHashType {
    NONE = 0,
    MD5 = 1,
    SHA1 = 2,
    SHA256 = 3,
}
export enum FileTransferState {
    NONE = 0,
    PENDING = 1,
    ACCEPTED = 2,
    OPEN = 3,
    COMPLETED = 4,
    CANCELLED = 5,
}
export enum FileTransferStateChangeReason {
    NONE = 0,
    REQUESTED = 1,
    LOCAL_STOPPED = 2,
    REMOTE_STOPPED = 3,
    LOCAL_ERROR = 4,
    REMOTE_ERROR = 5,
}
export enum HTTPMethod {
    GET = 0,
    POST = 1,
}
export enum HandleType {
    NONE = 0,
    CONTACT = 1,
    ROOM = 2,
    LIST = 3,
    GROUP = 4,
}
export enum LocalHoldState {
    UNHELD = 0,
    HELD = 1,
    PENDING_HOLD = 2,
    PENDING_UNHOLD = 3,
}
export enum LocalHoldStateReason {
    NONE = 0,
    REQUESTED = 1,
    RESOURCE_NOT_AVAILABLE = 2,
}
export enum MediaStreamBaseProto {
    UDP = 0,
    TCP = 1,
}
export enum MediaStreamDirection {
    NONE = 0,
    SEND = 1,
    RECEIVE = 2,
    BIDIRECTIONAL = 3,
}
export enum MediaStreamError {
    UNKNOWN = 0,
    EOS = 1,
    CODEC_NEGOTIATION_FAILED = 2,
    CONNECTION_FAILED = 3,
    NETWORK_ERROR = 4,
    NO_CODECS = 5,
    INVALID_CM_BEHAVIOR = 6,
    MEDIA_ERROR = 7,
}
export enum MediaStreamState {
    DISCONNECTED = 0,
    CONNECTING = 1,
    CONNECTED = 2,
}
export enum MediaStreamTransportType {
    LOCAL = 0,
    DERIVED = 1,
    RELAY = 2,
}
export enum MediaStreamType {
    AUDIO = 0,
    VIDEO = 1,
}
export enum RCPTXRRTTMode {
    ALL = 0,
    SENDER = 1,
}
export enum RichPresenceAccessControlType {
    WHITELIST = 0,
    PUBLISH_LIST = 1,
    GROUP = 2,
    OPEN = 3,
}
export enum SASLAbortReason {
    INVALID_CHALLENGE = 0,
    USER_ABORT = 1,
}
export enum SASLStatus {
    NOT_STARTED = 0,
    IN_PROGRESS = 1,
    SERVER_SUCCEEDED = 2,
    CLIENT_ACCEPTED = 3,
    SUCCEEDED = 4,
    SERVER_FAILED = 5,
    CLIENT_FAILED = 6,
}
export enum SendingState {
    NONE = 0,
    PENDING_SEND = 1,
    SENDING = 2,
    PENDING_STOP_SENDING = 3,
}
export enum ServicePointType {
    NONE = 0,
    EMERGENCY = 1,
    COUNSELING = 2,
}
export enum SocketAccessControl {
    LOCALHOST = 0,
    PORT = 1,
    NETMASK = 2,
    CREDENTIALS = 3,
}
export enum SocketAddressType {
    UNIX = 0,
    ABSTRACT_UNIX = 1,
    IPV4 = 2,
    IPV6 = 3,
}
export enum StreamComponent {
    UNKNOWN = 0,
    DATA = 1,
    CONTROL = 2,
}
export enum StreamEndpointState {
    CONNECTING = 0,
    PROVISIONALLY_CONNECTED = 1,
    FULLY_CONNECTED = 2,
    EXHAUSTED_CANDIDATES = 3,
    FAILED = 4,
}
export enum StreamFlowState {
    STOPPED = 0,
    PENDING_START = 1,
    PENDING_STOP = 2,
    STARTED = 3,
}
export enum StreamTransportType {
    UNKNOWN = 0,
    RAW_UDP = 1,
    ICE = 2,
    GTALK_P2P = 3,
    WLM_2009 = 4,
    SHM = 5,
    MULTICAST = 6,
}
export enum SubscriptionState {
    UNKNOWN = 0,
    NO = 1,
    REMOVED_REMOTELY = 2,
    ASK = 3,
    YES = 4,
}
export enum TLSCertificateRejectReason {
    UNKNOWN = 0,
    UNTRUSTED = 1,
    EXPIRED = 2,
    NOT_ACTIVATED = 3,
    FINGERPRINT_MISMATCH = 4,
    HOSTNAME_MISMATCH = 5,
    SELF_SIGNED = 6,
    REVOKED = 7,
    INSECURE = 8,
    LIMIT_EXCEEDED = 9,
}
export enum TLSCertificateState {
    PENDING = 0,
    ACCEPTED = 1,
    REJECTED = 2,
}
export enum TubeChannelState {
    LOCAL_PENDING = 0,
    REMOTE_PENDING = 1,
    OPEN = 2,
    NOT_OFFERED = 3,
}
export enum TubeState {
    LOCAL_PENDING = 0,
    REMOTE_PENDING = 1,
    OPEN = 2,
}
export enum TubeType {
    DBUS = 0,
    STREAM = 1,
}
export type Handle = number;
export type IntSet = Intset;
export type IntSetFastIter = IntsetFastIter;
export type IntSetIter = IntsetIter;
export enum AnonymityModeFlags {
    CLIENT_INFO = 1,
    SHOW_CLIENT_INFO = 2,
    NETWORK_INFO = 4,
}
export enum CallFlags {
    LOCALLY_HELD = 1,
    LOCALLY_RINGING = 2,
    LOCALLY_QUEUED = 4,
    FORWARDED = 8,
    CLEARING = 16,
}
export enum CallMemberFlags {
    RINGING = 1,
    HELD = 2,
    CONFERENCE_HOST = 4,
}
export enum CaptchaFlags {
    CAPTCHA_FLAGS_REQUIRED = 1,
}
export enum ChannelCallStateFlags {
    RINGING = 1,
    QUEUED = 2,
    HELD = 4,
    FORWARDED = 8,
    IN_PROGRESS = 16,
    CONFERENCE_HOST = 32,
}
export enum ChannelGroupFlags {
    CAN_ADD = 1,
    CAN_REMOVE = 2,
    CAN_RESCIND = 4,
    MESSAGE_ADD = 8,
    MESSAGE_REMOVE = 16,
    MESSAGE_ACCEPT = 32,
    MESSAGE_REJECT = 64,
    MESSAGE_RESCIND = 128,
    CHANNEL_SPECIFIC_HANDLES = 256,
    ONLY_ONE_GROUP = 512,
    HANDLE_OWNERS_NOT_AVAILABLE = 1024,
    PROPERTIES = 2048,
    MEMBERS_CHANGED_DETAILED = 4096,
    MESSAGE_DEPART = 8192,
}
export enum ChannelMediaCapabilities {
    AUDIO = 1,
    VIDEO = 2,
    NAT_TRAVERSAL_STUN = 4,
    NAT_TRAVERSAL_GTALK_P2P = 8,
    NAT_TRAVERSAL_ICE_UDP = 16,
    IMMUTABLE_STREAMS = 32,
}
export enum ChannelPasswordFlags {
    PROVIDE = 8,
    HINT = 4,
}
export enum ChannelTextMessageFlags {
    TRUNCATED = 1,
    NON_TEXT_CONTENT = 2,
    SCROLLBACK = 4,
    RESCUED = 8,
}
export enum ConnMgrParamFlags {
    REQUIRED = 1,
    REGISTER = 2,
    HAS_DEFAULT = 4,
    SECRET = 8,
    DBUS_PROPERTY = 16,
}
export enum ConnectionAliasFlags {
    CONNECTION_ALIAS_FLAG_USER_SET = 1,
}
export enum ConnectionCapabilityFlags {
    CREATE = 1,
    INVITE = 2,
}
export enum ContactBlockingCapabilities {
    CONTACT_BLOCKING_CAPABILITY_CAN_REPORT_ABUSIVE = 1,
}
export enum ContactInfoFieldFlags {
    PARAMETERS_EXACT = 1,
    OVERWRITTEN_BY_NICKNAME = 2,
}
export enum ContactInfoFlags {
    CAN_SET = 1,
    PUSH = 2,
}
export enum DBusNameType {
    UNIQUE = 1,
    WELL_KNOWN = 2,
    BUS_DAEMON = 4,
    NOT_BUS_DAEMON = 3,
    ANY = 7,
}
export enum DBusPropertiesMixinFlags {
    READ = 1,
    WRITE = 2,
    EMITS_CHANGED = 4,
    EMITS_INVALIDATED = 8,
}
export enum DeliveryReportingSupportFlags {
    FAILURES = 1,
    SUCCESSES = 2,
    READ = 4,
    DELETED = 8,
}
export enum LocationFeatures {
    LOCATION_FEATURE_CAN_SET = 1,
}
export enum MailNotificationFlags {
    SUPPORTS_UNREAD_MAIL_COUNT = 1,
    SUPPORTS_UNREAD_MAILS = 2,
    EMITS_MAILS_RECEIVED = 4,
    SUPPORTS_REQUEST_INBOX_URL = 8,
    SUPPORTS_REQUEST_MAIL_URL = 16,
    THREAD_BASED = 32,
}
export enum MediaStreamPendingSend {
    LOCAL_SEND = 1,
    REMOTE_SEND = 2,
}
export enum MessagePartSupportFlags {
    ONE_ATTACHMENT = 1,
    MULTIPLE_ATTACHMENTS = 2,
}
export enum MessageSendingFlags {
    DELIVERY = 1,
    READ = 2,
    DELETED = 4,
}
export enum PropertyFlags {
    READ = 1,
    WRITE = 2,
}
export enum RTCPXRStatisticsFlags {
    LOSS = 1,
    DUPLICATE = 2,
    JITTER = 4,
    TTL = 8,
    HL = 16,
}
export enum StorageRestrictionFlags {
    PARAMETERS = 1,
    ENABLED = 2,
    PRESENCE = 4,
    SERVICE = 8,
}
export class Account extends Proxy {constructor(config?: properties);
readonly automatic_presence_type: number;
readonly automatic_status: string;
readonly automatic_status_message: string;
readonly changing_presence: boolean;
readonly cm_name: string;
readonly connect_automatically: boolean;
readonly connection: Connection;
readonly connection_error: string;
readonly connection_error_details: GLib.HashTable;
readonly connection_manager: string;
readonly connection_status: number;
readonly connection_status_reason: number;
readonly current_presence_type: number;
readonly current_status: string;
readonly current_status_message: string;
readonly display_name: string;
readonly enabled: boolean;
readonly has_been_online: boolean;
readonly icon_name: string;
readonly nickname: string;
readonly normalized_name: string;
readonly protocol: string;
readonly protocol_name: string;
readonly requested_presence_type: number;
readonly requested_status: string;
readonly requested_status_message: string;
readonly service: string;
readonly storage_identifier: GObject.Value;
readonly storage_identifier_variant: GLib.Variant;
readonly storage_provider: string;
readonly storage_restrictions: number;
readonly supersedes: string[];
readonly uri_schemes: string[];
readonly valid: boolean;
associated_with_uri_scheme(scheme: string): boolean;
bind_connection_status_to_property(target: object | null, target_property: string, invert: boolean): GObject.Binding;
dup_detailed_error_vardict(): [string | null, GLib.Variant | null];
dup_parameters_vardict(): GLib.Variant;
dup_storage_identifier_variant(): GLib.Variant;
dup_storage_specific_information_vardict_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
dup_storage_specific_information_vardict_finish(result: Gio.AsyncResult): GLib.Variant;
ensure_connection(path: string): Connection;
get_automatic_presence(): [ConnectionPresenceType, string,string];
get_avatar_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_avatar_finish(result: Gio.AsyncResult): number[];
get_changing_presence(): boolean;
get_cm_name(): string;
get_connect_automatically(): boolean;
get_connection(): Connection;
get_connection_manager(): string;
get_connection_status(): [ConnectionStatus, ConnectionStatusReason];
get_current_presence(): [ConnectionPresenceType, string,string];
get_detailed_error(): [string | null, GLib.HashTable | null];
get_display_name(): string;
get_has_been_online(): boolean;
get_icon_name(): string;
get_nickname(): string;
get_normalized_name(): string;
get_parameters(): GLib.HashTable;
get_path_suffix(): string;
get_protocol(): string;
get_protocol_name(): string;
get_requested_presence(): [ConnectionPresenceType, string,string];
get_service(): string;
get_storage_identifier(): GObject.Value;
get_storage_provider(): string;
get_storage_restrictions(): StorageRestrictionFlags;
get_storage_specific_information_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_storage_specific_information_finish(result: Gio.AsyncResult): GLib.HashTable;
get_supersedes(): string[];
get_uri_schemes(): string[];
is_enabled(): boolean;
is_prepared(feature: GLib.Quark): boolean;
is_valid(): boolean;
prepare_async(features: GLib.Quark, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
prepare_finish(result: Gio.AsyncResult): boolean;
reconnect_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
reconnect_finish(result: Gio.AsyncResult): boolean;
remove_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
remove_finish(result: Gio.AsyncResult): boolean;
request_presence_async(type: ConnectionPresenceType, status: string, message: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
request_presence_finish(result: Gio.AsyncResult): boolean;
set_automatic_presence_async(type: ConnectionPresenceType, status: string, message: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_automatic_presence_finish(result: Gio.AsyncResult): boolean;
set_avatar_async(avatar: number[] | null, len: number, mime_type: string | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_avatar_finish(result: Gio.AsyncResult): boolean;
set_connect_automatically_async(connect_automatically: boolean, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_connect_automatically_finish(result: Gio.AsyncResult): boolean;
set_display_name_async(display_name: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_display_name_finish(result: Gio.AsyncResult): boolean;
set_enabled_async(enabled: boolean, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_enabled_finish(result: Gio.AsyncResult): boolean;
set_icon_name_async(icon_name: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_icon_name_finish(result: Gio.AsyncResult): boolean;
set_nickname_async(nickname: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_nickname_finish(result: Gio.AsyncResult): boolean;
set_service_async(service: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_service_finish(result: Gio.AsyncResult): boolean;
set_uri_scheme_association_async(scheme: string, associate: boolean, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_uri_scheme_association_finish(result: Gio.AsyncResult): boolean;
update_parameters_async(parameters: GLib.HashTable, unset_parameters: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
update_parameters_finish(result: Gio.AsyncResult): [boolean, string[]];
update_parameters_vardict_async(parameters: GLib.Variant, unset_parameters: string[], callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
update_parameters_vardict_finish(result: Gio.AsyncResult): [boolean, string[]];
static get_feature_quark_addressing(): GLib.Quark;
static get_feature_quark_connection(): GLib.Quark;
static get_feature_quark_core(): GLib.Quark;
static get_feature_quark_storage(): GLib.Quark;
static init_known_interfaces(): void;
static parse_object_path(object_path: string): [boolean, string,string,string];
}
export class AccountChannelRequest extends GObject.Object {constructor(config?: properties);
account: Account;
readonly channel_request: ChannelRequest;
request: unknown;
request_vardict: GLib.Variant;
user_action_time: number;static new_audio_call(account: Account, user_action_time: number): AccountChannelRequest;
static new_audio_video_call(account: Account, user_action_time: number): AccountChannelRequest;
static new_dbus_tube(account: Account, service_name: string, user_action_time: number): AccountChannelRequest;
static new_file_transfer(account: Account, filename: string, mime_type: string | null, size: number, user_action_time: number): AccountChannelRequest;
static new_stream_tube(account: Account, service: string, user_action_time: number): AccountChannelRequest;
static new_text(account: Account, user_action_time: number): AccountChannelRequest;
static new_vardict(account: Account, request: GLib.Variant, user_action_time: number): AccountChannelRequest;
create_and_handle_channel_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
create_and_handle_channel_finish(result: Gio.AsyncResult): [Channel | null, HandleChannelsContext | null];
create_and_observe_channel_async(preferred_handler: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
create_and_observe_channel_finish(result: Gio.AsyncResult): Channel;
create_channel_async(preferred_handler: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
create_channel_finish(result: Gio.AsyncResult): boolean;
dup_request(): GLib.Variant;
ensure_and_handle_channel_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
ensure_and_handle_channel_finish(result: Gio.AsyncResult): [Channel | null, HandleChannelsContext | null];
ensure_and_observe_channel_async(preferred_handler: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
ensure_and_observe_channel_finish(result: Gio.AsyncResult): Channel;
ensure_channel_async(preferred_handler: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
ensure_channel_finish(result: Gio.AsyncResult): boolean;
get_account(): Account;
get_channel_request(): ChannelRequest;
get_request(): GLib.HashTable;
get_user_action_time(): number;
set_channel_factory(factory: ClientChannelFactory): void;
set_conference_initial_channels(channels: string): void;
set_delegate_to_preferred_handler(delegate: boolean): void;
set_delegated_channel_callback(callback: AccountChannelRequestDelegatedChannelCb, user_data: object | null, destroy: GLib.DestroyNotify): void;
set_file_transfer_description(description: string): void;
set_file_transfer_hash(hash_type: FileHashType, hash: string): void;
set_file_transfer_initial_offset(offset: number): void;
set_file_transfer_timestamp(timestamp: number): void;
set_file_transfer_uri(uri: string): void;
set_hint(key: string, value: GLib.Variant): void;
set_hints(hints: GLib.HashTable): void;
set_initial_invitee_ids(ids: string): void;
set_initial_invitees(contacts: Contact[]): void;
set_request_property(name: string, value: GLib.Variant): void;
set_sms_channel(is_sms_channel: boolean): void;
set_target_contact(contact: Contact): void;
set_target_id(handle_type: HandleType, identifier: string): void;
}
export class AccountManager extends Proxy {constructor(config?: properties);
static new_with_factory(factory: SimpleClientFactory): AccountManager;
create_account_async(connection_manager: string, protocol: string, display_name: string, parameters: GLib.HashTable, properties: GLib.HashTable, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
create_account_finish(result: Gio.AsyncResult): Account;
dup_valid_accounts(): GLib.List;
enable_restart(): void;
ensure_account(path: string): Account;
get_most_available_presence(): [ConnectionPresenceType, string,string];
get_valid_accounts(): GLib.List;
is_prepared(feature: GLib.Quark): boolean;
prepare_async(features: GLib.Quark, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
prepare_finish(result: Gio.AsyncResult): boolean;
set_all_requested_presences(type: ConnectionPresenceType, status: string, message: string): void;
set_default(): void;
static can_set_default(): boolean;
static dup(): AccountManager;
static get_feature_quark_core(): GLib.Quark;
static init_known_interfaces(): void;
}
export class AccountRequest extends GObject.Object {constructor(config?: properties);
account_manager: AccountManager;
readonly automatic_presence_type: number;
readonly automatic_status: string;
readonly automatic_status_message: string;
readonly avatar: object[];
readonly avatar_mime_type: string;
readonly connect_automatically: boolean;
connection_manager: string;
display_name: string;
readonly enabled: boolean;
readonly icon_name: string;
readonly nickname: string;
readonly parameters: GLib.Variant;
readonly properties: GLib.Variant;
protocol: string;
readonly requested_presence_type: number;
readonly requested_status: string;
readonly requested_status_message: string;
readonly service: string;
readonly storage_provider: string;
readonly supersedes: string[];static new_from_protocol(account_manager: AccountManager, protocol: Protocol, display_name: string): AccountRequest;
add_supersedes(superseded_path: string): void;
create_account_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
create_account_finish(result: Gio.AsyncResult): Account;
set_automatic_presence(presence: ConnectionPresenceType, status: string, message: string): void;
set_avatar(avatar: number[] | null, len: number, mime_type: string | null): void;
set_connect_automatically(connect_automatically: boolean): void;
set_display_name(name: string): void;
set_enabled(enabled: boolean): void;
set_icon_name(icon: string): void;
set_nickname(nickname: string): void;
set_parameter(key: string, value: GLib.Variant): void;
set_parameter_string(key: string, value: string): void;
set_requested_presence(presence: ConnectionPresenceType, status: string, message: string): void;
set_service(service: string): void;
set_storage_provider(provider: string): void;
unset_parameter(key: string): void;
}
export class AddDispatchOperationContext  {constructor(config?: properties);
account: Account;
channels: object[];
connection: Connection;
dbus_context: object;
dispatch_operation: ChannelDispatchOperation;
accept(): void;
delay(): void;
fail(error: GLib.Error): void;
}
export class AutomaticClientFactory extends SimpleClientFactory {constructor(config?: properties);
}
export class AutomaticProxyFactory extends GObject.Object {constructor(config?: properties);
static dup(): AutomaticProxyFactory;
}
export class BaseClient  {constructor(config?: properties);
account_manager: AccountManager;
channel_factory: GObject.Object;
dbus_daemon: DBusDaemon;
factory: SimpleClientFactory;
name: string;
uniquify_name: boolean;
readonly priv: BaseClientPrivate;
add_account_features(features: GLib.Quark[], n: number): void;
add_account_features_varargs(feature: GLib.Quark, ___: unknown[]): void;
add_approver_filter(filter: GLib.HashTable): void;
add_approver_filter_vardict(filter: GLib.Variant): void;
add_channel_features(features: GLib.Quark[], n: number): void;
add_channel_features_varargs(feature: GLib.Quark, ___: unknown[]): void;
add_connection_features(features: GLib.Quark[], n: number): void;
add_connection_features_varargs(feature: GLib.Quark, ___: unknown[]): void;
add_handler_capabilities(tokens: string[]): void;
add_handler_capabilities_varargs(first_token: string, ___: unknown[]): void;
add_handler_capability(token: string): void;
add_handler_filter(filter: GLib.HashTable): void;
add_handler_filter_vardict(filter: GLib.Variant): void;
add_observer_filter(filter: GLib.HashTable): void;
add_observer_filter_vardict(filter: GLib.Variant): void;
be_a_handler(): void;
delegate_channels_async(channels: GLib.List, user_action_time: number, preferred_handler: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
delegate_channels_finish(result: Gio.AsyncResult): [boolean, Channel[],GLib.HashTable];
dup_handled_channels(): GLib.List;
dup_pending_requests(): GLib.List;
get_account_manager(): AccountManager;
get_bus_name(): string;
get_channel_factory(): ClientChannelFactory;
get_dbus_daemon(): DBusDaemon;
get_handled_channels(): GLib.List;
get_name(): string;
get_object_path(): string;
get_pending_requests(): GLib.List;
get_uniquify_name(): boolean;
is_handling_channel(channel: Channel): boolean;
register(): boolean;
set_channel_factory(factory: ClientChannelFactory): void;
set_delegated_channels_callback(callback: BaseClientDelegatedChannelsCb, user_data: object | null, destroy: GLib.DestroyNotify): void;
set_handler_bypass_approval(bypass_approval: boolean): void;
set_handler_request_notification(): void;
set_observer_delay_approvers(delay: boolean): void;
set_observer_recover(recover: boolean): void;
take_approver_filter(filter: GLib.HashTable): void;
take_handler_filter(filter: GLib.HashTable): void;
take_observer_filter(filter: GLib.HashTable): void;
unregister(): void;
static implement_add_dispatch_operation(klass: BaseClientClass, impl: BaseClientClassAddDispatchOperationImpl): void;
static implement_handle_channels(klass: BaseClientClass, impl: BaseClientClassHandleChannelsImpl): void;
static implement_observe_channels(klass: BaseClientClass, impl: BaseClientClassObserveChannelsImpl): void;
}
export class BaseConnection  {constructor(config?: properties);
account_path_suffix: string;
dbus_daemon: DBusDaemon;
readonly dbus_status: number;
readonly has_immortal_handles: boolean;
readonly interfaces: string[];
protocol: string;
self_handle: number;
readonly self_id: string;
readonly bus_name: string;
readonly object_path: string;
readonly status: ConnectionStatus;
readonly _future1: object;
readonly _future2: object;
readonly _future3: object;
readonly _future4: object;
readonly priv: BaseConnectionPrivate;
add_client_interest(unique_name: string, token: string, only_if_uninterested: boolean): void;
add_interfaces(interfaces: string): void;
add_possible_client_interest(token: GLib.Quark): void;
change_status(status: ConnectionStatus, reason: ConnectionStatusReason): void;
check_connected(): boolean;
disconnect_with_dbus_error(error_name: string, details: GLib.HashTable, reason: ConnectionStatusReason): void;
disconnect_with_dbus_error_vardict(error_name: string, details: GLib.Variant, reason: ConnectionStatusReason): void;
finish_shutdown(): void;
get_account_path_suffix(): string;
get_bus_name(): string | null;
get_dbus_daemon(): DBusDaemon;
get_handles(handle_type: HandleType): HandleRepoIface;
get_object_path(): string | null;
get_self_handle(): Handle;
get_status(): ConnectionStatus;
is_destroyed(): boolean;
register(cm_name: string): [boolean, string,string];
register_with_contacts_mixin(): void;
set_self_handle(self_handle: Handle): void;
static channel_manager_iter_init(iter: ChannelManagerIter, self: BaseConnection): void;
static channel_manager_iter_next(iter: ChannelManagerIter, manager_out: unknown): boolean;
static dbus_request_handles(iface: unknown, handle_type: number, names: string, context: unknown): void;
}
export class BasicProxyFactory extends GObject.Object {constructor(config?: properties);
static dup(): BasicProxyFactory;
}
export class CallChannel  {constructor(config?: properties);
readonly contents: object[];
readonly flags: number;
readonly hardware_streaming: boolean;
readonly hold_state: number;
readonly hold_state_reason: number;
readonly initial_audio: boolean;
readonly initial_audio_name: string;
readonly initial_video: boolean;
readonly initial_video_name: string;
readonly mutable_contents: boolean;
readonly state: number;
readonly state_details: GLib.HashTable;
readonly state_reason: CallStateReason;
readonly priv: CallChannelPrivate;
accept_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
accept_finish(result: Gio.AsyncResult): boolean;
add_content_async(name: string, type: MediaStreamType, initial_direction: MediaStreamDirection, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
add_content_finish(result: Gio.AsyncResult): CallContent;
get_contents(): CallContent[];
get_members(): GLib.HashTable;
get_state(): [CallState, CallFlags | null,GLib.HashTable | null,CallStateReason | null];
hangup_async(reason: CallStateChangeReason, detailed_reason: string, message: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
hangup_finish(result: Gio.AsyncResult): boolean;
has_dtmf(): boolean;
has_hardware_streaming(): boolean;
has_hold(): boolean;
has_initial_audio(): [boolean, string | null];
has_initial_video(): [boolean, string | null];
has_mutable_contents(): boolean;
request_hold_async(hold: boolean, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
request_hold_finish(result: Gio.AsyncResult): boolean;
send_tones_async(tones: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
send_tones_finish(result: Gio.AsyncResult): boolean;
set_queued_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_queued_finish(result: Gio.AsyncResult): boolean;
set_ringing_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_ringing_finish(result: Gio.AsyncResult): boolean;
static get_feature_quark_core(): GLib.Quark;
}
export class CallContent  {constructor(config?: properties);
channel: CallChannel;
connection: Connection;
readonly disposition: number;
readonly media_type: number;
readonly name: string;
readonly streams: object[];
readonly priv: CallContentPrivate;
get_disposition(): CallContentDisposition;
get_media_type(): MediaStreamType;
get_name(): string;
get_streams(): CallStream[];
remove_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
remove_finish(result: Gio.AsyncResult): boolean;
send_tones_async(tones: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
send_tones_finish(result: Gio.AsyncResult): boolean;
static get_feature_quark_core(): GLib.Quark;
static init_known_interfaces(): void;
}
export class CallStream  {constructor(config?: properties);
connection: Connection;
content: CallContent;
readonly local_sending_state: number;
readonly priv: CallStreamPrivate;
can_request_receiving(): boolean;
get_local_sending_state(): SendingState;
get_remote_members(): GLib.HashTable;
request_receiving_async(contact: Contact, receive: boolean, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
request_receiving_finish(result: Gio.AsyncResult): boolean;
set_sending_async(send: boolean, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_sending_finish(result: Gio.AsyncResult): boolean;
static get_feature_quark_core(): GLib.Quark;
static init_known_interfaces(): void;
}
export class Capabilities  {constructor(config?: properties);
channel_classes: unknown;
readonly channel_classes_variant: GLib.Variant;
contact_specific: boolean;
dup_channel_classes_variant(): GLib.Variant;
get_channel_classes(): GLib.HashTable[];
is_specific_to_contact(): boolean;
supports_audio_call(handle_type: HandleType): boolean;
supports_audio_video_call(handle_type: HandleType): boolean;
supports_contact_search(): [boolean, boolean,boolean];
supports_dbus_tubes(handle_type: HandleType, service_name: string): boolean;
supports_file_transfer(): boolean;
supports_file_transfer_description(): boolean;
supports_file_transfer_initial_offset(): boolean;
supports_file_transfer_timestamp(): boolean;
supports_file_transfer_uri(): boolean;
supports_room_list(): [boolean, boolean];
supports_sms(): boolean;
supports_stream_tubes(handle_type: HandleType, service: string): boolean;
supports_text_chatrooms(): boolean;
supports_text_chats(): boolean;
}
export class Channel extends Proxy {constructor(config?: properties);
channel_properties: unknown;
readonly channel_ready: boolean;
connection: Connection;
readonly group_flags: number;
readonly group_self_contact: Contact;
readonly group_self_handle: number;
readonly identifier: string;
readonly initiator_contact: Contact;
readonly initiator_handle: number;
readonly initiator_identifier: string;
readonly requested: boolean;
readonly target_contact: Contact;static new_from_properties(conn: Connection, object_path: string, immutable_properties: GLib.HashTable): Channel;
borrow_connection(): Connection;
borrow_immutable_properties(): GLib.HashTable;
call_when_ready(callback: ChannelWhenReadyCb, user_data: object | null): void;
close_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
close_finish(result: Gio.AsyncResult): boolean;
destroy_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
destroy_finish(result: Gio.AsyncResult): boolean;
dup_immutable_properties(): GLib.Variant;
get_channel_type(): string;
get_channel_type_id(): GLib.Quark;
get_chat_state(contact: Handle): ChannelChatState;
get_connection(): Connection;
get_handle(): [Handle, HandleType];
get_identifier(): string;
get_initiator_contact(): Contact;
get_initiator_handle(): Handle;
get_initiator_identifier(): string;
get_requested(): boolean;
get_target_contact(): Contact;
group_dup_local_pending_contacts(): Contact[];
group_dup_members_contacts(): Contact[];
group_dup_remote_pending_contacts(): Contact[];
group_get_contact_owner(contact: Contact): Contact;
group_get_flags(): ChannelGroupFlags;
group_get_handle_owner(handle: Handle): Handle;
group_get_local_pending(): Intset;
group_get_local_pending_contact_info(local_pending: Contact): [boolean, Contact | null,ChannelGroupChangeReason | null,string | null];
group_get_local_pending_info(local_pending: Handle): [boolean, Handle | null,ChannelGroupChangeReason | null,string | null];
group_get_members(): Intset;
group_get_remote_pending(): Intset;
group_get_self_contact(): Contact;
group_get_self_handle(): Handle;
is_ready(): boolean;
join_async(message: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
join_finish(result: Gio.AsyncResult): boolean;
leave_async(reason: ChannelGroupChangeReason, message: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
leave_finish(result: Gio.AsyncResult): boolean;
password_needed(): boolean;
provide_password_async(password: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
provide_password_finish(result: Gio.AsyncResult): boolean;
run_until_ready(error: GLib.Error, loop: GLib.MainLoop): boolean;
static get_feature_quark_chat_states(): GLib.Quark;
static get_feature_quark_contacts(): GLib.Quark;
static get_feature_quark_core(): GLib.Quark;
static get_feature_quark_group(): GLib.Quark;
static get_feature_quark_password(): GLib.Quark;
static init_known_interfaces(): void;
}
export class ChannelDispatchOperation extends Proxy {constructor(config?: properties);
account: Account;
cdo_properties: unknown;
channels: object[];
connection: Connection;
readonly possible_handlers: string[];
borrow_account(): Account;
borrow_channels(): object[];
borrow_connection(): Connection;
borrow_immutable_properties(): GLib.HashTable;
borrow_possible_handlers(): string[];
claim_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
claim_finish(result: Gio.AsyncResult): boolean;
claim_with_async(client: BaseClient, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
claim_with_finish(result: Gio.AsyncResult): boolean;
close_channels_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
close_channels_finish(result: Gio.AsyncResult): boolean;
destroy_channels_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
destroy_channels_finish(result: Gio.AsyncResult): boolean;
get_account(): Account;
get_channels(): Channel[];
get_connection(): Connection;
get_possible_handlers(): string[];
handle_with_async(handler: string | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
handle_with_finish(result: Gio.AsyncResult): boolean;
handle_with_time_async(handler: string | null, user_action_time: number, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
handle_with_time_finish(result: Gio.AsyncResult): boolean;
leave_channels_async(reason: ChannelGroupChangeReason, message: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
leave_channels_finish(result: Gio.AsyncResult): boolean;
static get_feature_quark_core(): GLib.Quark;
static init_known_interfaces(): void;
}
export class ChannelDispatcher extends Proxy {constructor(config?: properties);
present_channel_async(channel: Channel, user_action_time: number, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
present_channel_finish(result: Gio.AsyncResult): boolean;
static init_known_interfaces(): void;
}
export class ChannelRequest extends Proxy {constructor(config?: properties);
readonly account: Account;
channel_factory: GObject.Object;
readonly hints: unknown;
readonly hints_vardict: GLib.Variant;
immutable_properties: unknown;
readonly immutable_properties_vardict: GLib.Variant;
readonly preferred_handler: string;
readonly user_action_time: number;
dup_hints(): GLib.Variant;
dup_immutable_properties(): GLib.Variant;
get_account(): Account;
get_hints(): GLib.HashTable;
get_immutable_properties(): GLib.HashTable;
get_preferred_handler(): string;
get_user_action_time(): number;
set_channel_factory(factory: ClientChannelFactory): void;
static init_known_interfaces(): void;
}
export class ClientMessage extends Message {constructor(config?: properties);
static new_text(type: ChannelTextMessageType, text: string): Message;
}
export class Connection extends Proxy {constructor(config?: properties);
readonly balance: number;
readonly balance_currency: string;
readonly balance_scale: number;
readonly balance_uri: string;
readonly blocked_contacts: object[];
readonly can_change_contact_list: boolean;
readonly capabilities: Capabilities;
readonly cm_name: string;
readonly connection_manager_name: string;
readonly connection_ready: boolean;
readonly contact_groups: string[];
readonly contact_list_persists: boolean;
readonly contact_list_state: number;
readonly disjoint_groups: boolean;
readonly group_storage: number;
readonly protocol_name: string;
readonly request_uses_message: boolean;
readonly self_contact: Contact;
readonly self_handle: number;
readonly status: number;
readonly status_reason: number;
add_client_interest(interested_in: string): void;
add_client_interest_by_id(interested_in: GLib.Quark): void;
add_to_group_async(group: string, n_contacts: number, contacts: Contact[], callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
add_to_group_finish(result: Gio.AsyncResult): boolean;
authorize_publication_async(n_contacts: number, contacts: Contact[], callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
authorize_publication_finish(result: Gio.AsyncResult): boolean;
bind_connection_status_to_property(target: object | null, target_property: string, invert: boolean): GObject.Binding;
block_contacts_async(n_contacts: number, contacts: Contact[], report_abusive: boolean, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
block_contacts_finish(result: Gio.AsyncResult): boolean;
call_when_ready(callback: ConnectionWhenReadyCb, user_data: object | null): void;
can_report_abusive(): boolean;
can_set_contact_alias(): boolean;
disconnect_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
disconnect_finish(result: Gio.AsyncResult): boolean;
dup_contact_by_id_async(id: string, n_features: number, features: ContactFeature[] | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
dup_contact_by_id_finish(result: Gio.AsyncResult): Contact;
dup_contact_if_possible(handle: Handle, identifier: string): Contact;
dup_contact_info_supported_fields(): GLib.List;
dup_contact_list(): Contact[];
dup_detailed_error_vardict(): [string | null, GLib.Variant | null];
get_account(): Account;
get_avatar_requirements(): AvatarRequirements;
get_balance(): [boolean, number,number,string];
get_balance_uri(): string;
get_blocked_contacts(): Contact[];
get_can_change_contact_list(): boolean;
get_capabilities(): Capabilities;
get_cm_name(): string;
get_connection_manager_name(): string;
get_contact_attributes(timeout_ms: number, n_handles: number, handles: Handle[], interfaces: string, hold: boolean, callback: GObject.Callback, user_data: object | null, destroy: GLib.DestroyNotify, weak_object: GObject.Object): void;
get_contact_groups(): string[];
get_contact_info_flags(): ContactInfoFlags;
get_contact_info_supported_fields(): GLib.List;
get_contact_list_attributes(timeout_ms: number, interfaces: string, hold: boolean, callback: GObject.Callback, user_data: object | null, destroy: GLib.DestroyNotify, weak_object: GObject.Object): void;
get_contact_list_persists(): boolean;
get_contact_list_state(): ContactListState;
get_contacts_by_handle(n_handles: number, handles: number[], n_features: number, features: number[] | null, callback: ConnectionContactsByHandleCb, user_data: object | null, destroy: GLib.DestroyNotify, weak_object: GObject.Object | null): void;
get_contacts_by_id(n_ids: number, ids: string[], n_features: number, features: ContactFeature[] | null, callback: ConnectionContactsByIdCb, user_data: object | null, destroy: GLib.DestroyNotify, weak_object: GObject.Object | null): void;
get_detailed_error(): [string | null, GLib.HashTable | null];
get_disjoint_groups(): boolean;
get_group_storage(): ContactMetadataStorageType;
get_protocol_name(): string;
get_request_uses_message(): boolean;
get_self_contact(): Contact;
get_self_handle(): Handle;
get_status(): [ConnectionStatus, ConnectionStatusReason];
has_immortal_handles(): boolean;
hold_handles(timeout_ms: number, handle_type: HandleType, n_handles: number, handles: Handle[], callback: ConnectionHoldHandlesCb, user_data: object | null, destroy: GLib.DestroyNotify, weak_object: GObject.Object): void;
is_ready(): boolean;
parse_object_path(): [boolean, string,string];
refresh_contact_info(n_contacts: number, contacts: Contact[]): void;
remove_contacts_async(n_contacts: number, contacts: Contact[], callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
remove_contacts_finish(result: Gio.AsyncResult): boolean;
remove_from_group_async(group: string, n_contacts: number, contacts: Contact[], callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
remove_from_group_finish(result: Gio.AsyncResult): boolean;
remove_group_async(group: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
remove_group_finish(result: Gio.AsyncResult): boolean;
rename_group_async(old_name: string, new_name: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
rename_group_finish(result: Gio.AsyncResult): boolean;
request_handles(timeout_ms: number, handle_type: HandleType, ids: string[], callback: ConnectionRequestHandlesCb, user_data: object | null, destroy: GLib.DestroyNotify, weak_object: GObject.Object): void;
request_subscription_async(n_contacts: number, contacts: Contact[], message: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
request_subscription_finish(result: Gio.AsyncResult): boolean;
run_until_ready(connect: boolean, error: GLib.Error, loop: GLib.MainLoop): boolean;
set_contact_info_async(info: GLib.List, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_contact_info_finish(result: Gio.AsyncResult): boolean;
set_group_members_async(group: string, n_contacts: number, contacts: Contact[], callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_group_members_finish(result: Gio.AsyncResult): boolean;
unblock_contacts_async(n_contacts: number, contacts: Contact[], callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
unblock_contacts_finish(result: Gio.AsyncResult): boolean;
unpublish_async(n_contacts: number, contacts: Contact[], callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
unpublish_finish(result: Gio.AsyncResult): boolean;
unref_handles(handle_type: HandleType, n_handles: number, handles: Handle[]): void;
unsubscribe_async(n_contacts: number, contacts: Contact[], callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
unsubscribe_finish(result: Gio.AsyncResult): boolean;
upgrade_contacts(n_contacts: number, contacts: Contact[], n_features: number, features: ContactFeature[], callback: ConnectionUpgradeContactsCb, user_data: object | null, destroy: GLib.DestroyNotify, weak_object: GObject.Object | null): void;
upgrade_contacts_async(n_contacts: number, contacts: Contact[], n_features: number, features: ContactFeature[], callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
upgrade_contacts_finish(result: Gio.AsyncResult): [boolean, Contact[] | null];
static get_feature_quark_aliasing(): GLib.Quark;
static get_feature_quark_avatar_requirements(): GLib.Quark;
static get_feature_quark_balance(): GLib.Quark;
static get_feature_quark_capabilities(): GLib.Quark;
static get_feature_quark_connected(): GLib.Quark;
static get_feature_quark_contact_blocking(): GLib.Quark;
static get_feature_quark_contact_groups(): GLib.Quark;
static get_feature_quark_contact_info(): GLib.Quark;
static get_feature_quark_contact_list(): GLib.Quark;
static get_feature_quark_contact_list_properties(): GLib.Quark;
static get_feature_quark_core(): GLib.Quark;
static init_known_interfaces(): void;
static presence_type_cmp_availability(p1: ConnectionPresenceType, p2: ConnectionPresenceType): number;
}
export class ConnectionManager extends Proxy {constructor(config?: properties);
always_introspect: boolean;
readonly cm_name: string;
readonly connection_manager: string;
readonly info_source: number;
manager_file: string;
activate(): boolean;
call_when_ready(callback: ConnectionManagerWhenReadyCb, user_data: object | null, destroy: GLib.DestroyNotify, weak_object: GObject.Object): void;
dup_protocol_names(): string[];
dup_protocols(): GLib.List;
get_info_source(): CMInfoSource;
get_name(): string;
get_protocol(protocol: string): ConnectionManagerProtocol;
get_protocol_object(protocol: string): Protocol;
has_protocol(protocol: string): boolean;
is_ready(): boolean;
is_running(): boolean;
static check_valid_name(name: string): boolean;
static check_valid_protocol_name(name: string): boolean;
static get_feature_quark_core(): GLib.Quark;
static init_known_interfaces(): void;
}
export class Contact  {constructor(config?: properties);
readonly alias: string;
readonly avatar_file: Gio.File;
readonly avatar_mime_type: string;
readonly avatar_token: string;
readonly capabilities: Capabilities;
readonly client_types: string[];
readonly connection: Connection;
readonly contact_groups: string[];
readonly contact_info: unknown;
readonly handle: number;
readonly identifier: string;
readonly location: unknown;
readonly location_vardict: GLib.Variant;
readonly presence_message: string;
readonly presence_status: string;
readonly presence_type: number;
readonly publish_request: string;
readonly publish_state: number;
readonly subscribe_state: number;
add_to_group_async(group: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
add_to_group_finish(result: Gio.AsyncResult): boolean;
authorize_publication_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
authorize_publication_finish(result: Gio.AsyncResult): boolean;
block_async(report_abusive: boolean, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
block_finish(result: Gio.AsyncResult): boolean;
dup_contact_info(): GLib.List;
dup_location(): GLib.Variant;
get_account(): Account;
get_alias(): string;
get_avatar_file(): Gio.File;
get_avatar_mime_type(): string;
get_avatar_token(): string;
get_capabilities(): Capabilities;
get_client_types(): string[];
get_connection(): Connection;
get_contact_groups(): string[];
get_contact_info(): GLib.List;
get_handle(): Handle;
get_identifier(): string;
get_location(): GLib.HashTable;
get_presence_message(): string;
get_presence_status(): string;
get_presence_type(): ConnectionPresenceType;
get_publish_request(): string;
get_publish_state(): SubscriptionState;
get_subscribe_state(): SubscriptionState;
has_feature(feature: ContactFeature): boolean;
is_blocked(): boolean;
remove_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
remove_finish(result: Gio.AsyncResult): boolean;
remove_from_group_async(group: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
remove_from_group_finish(result: Gio.AsyncResult): boolean;
request_contact_info_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
request_contact_info_finish(result: Gio.AsyncResult): boolean;
request_subscription_async(message: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
request_subscription_finish(result: Gio.AsyncResult): boolean;
set_contact_groups_async(n_groups: number, groups: string[] | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_contact_groups_finish(result: Gio.AsyncResult): boolean;
unblock_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
unblock_finish(result: Gio.AsyncResult): boolean;
unpublish_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
unpublish_finish(result: Gio.AsyncResult): boolean;
unsubscribe_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
unsubscribe_finish(result: Gio.AsyncResult): boolean;
}
export class ContactSearch extends GObject.Object {constructor(config?: properties);
account: Account;
limit: number;
server: string;
readonly state: number;static new_finish(result: Gio.AsyncResult): ContactSearch;
get_account(): Account;
get_limit(): number;
get_search_keys(): string[];
get_server(): string;
reset_async(server: string, limit: number, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
reset_finish(result: Gio.AsyncResult): string[];
start(criteria: GLib.HashTable): void;
static new_async(account: Account, server: string, limit: number, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class ContactSearchResult  {constructor(config?: properties);
identifier: string;
readonly priv: ContactSearchResultPrivate;
dup_fields(): GLib.List;
get_field(field: string): ContactInfoField;
get_fields(): GLib.List;
get_identifier(): string;
}
export class DBusDaemon extends Proxy {constructor(config?: properties);
cancel_name_owner_watch(name: string, callback: DBusDaemonNameOwnerChangedCb, user_data: object | null): boolean;
get_unique_name(): string;
list_activatable_names(timeout_ms: number, callback: DBusDaemonListNamesCb, user_data: object | null, destroy: GLib.DestroyNotify, weak_object: GObject.Object): void;
list_names(timeout_ms: number, callback: DBusDaemonListNamesCb, user_data: object | null, destroy: GLib.DestroyNotify, weak_object: GObject.Object): void;
register_object(object_path: string, object: GObject.Object): void;
release_name(well_known_name: string): boolean;
request_name(well_known_name: string, idempotent: boolean): boolean;
unregister_object(object: GObject.Object): void;
watch_name_owner(name: string, callback: DBusDaemonNameOwnerChangedCb, user_data: object | null, destroy: GLib.DestroyNotify): void;
static dup(): DBusDaemon;
static init_known_interfaces(): void;
}
export class DBusTubeChannel  {constructor(config?: properties);
readonly parameters: unknown;
readonly parameters_vardict: GLib.Variant;
readonly service_name: string;
readonly priv: DBusTubeChannelPrivate;
accept_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
accept_finish(result: Gio.AsyncResult): Gio.DBusConnection;
dup_parameters_vardict(): GLib.Variant;
get_parameters(): GLib.HashTable;
get_service_name(): string;
offer_async(params: GLib.HashTable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
offer_finish(result: Gio.AsyncResult): Gio.DBusConnection;
static feature_quark_core(): GLib.Quark;
}
export class DebugClient extends Proxy {constructor(config?: properties);
readonly enabled: boolean;
get_messages_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_messages_finish(result: Gio.AsyncResult): DebugMessage[];
is_enabled(): boolean;
set_enabled_async(enabled: boolean, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_enabled_finish(result: Gio.AsyncResult): boolean;
static get_feature_quark_core(): GLib.Quark;
static init_known_interfaces(): void;
}
export class DebugMessage  {constructor(config?: properties);
readonly category: string;
readonly domain: string;
readonly level: number;
readonly message: string;
readonly time: GLib.DateTime;
readonly priv: DebugMessagePriv;
get_category(): string;
get_domain(): string;
get_level(): GLib.LogLevelFlags;
get_message(): string;
get_time(): GLib.DateTime;
}
export class FileTransferChannel extends Channel {constructor(config?: properties);
readonly date: GLib.DateTime;
readonly description: string;
readonly file: Gio.File;
readonly filename: string;
readonly initial_offset: number;
readonly metadata: unknown;
readonly mime_type: string;
readonly service_name: string;
readonly size: number;
readonly state: number;
readonly transferred_bytes: number;
accept_file_async(file: Gio.File, offset: number, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
accept_file_finish(result: Gio.AsyncResult): boolean;
get_date(): GLib.DateTime;
get_description(): string;
get_filename(): string;
get_metadata(): GLib.HashTable;
get_mime_type(): string;
get_service_name(): string;
get_size(): number;
get_state(): [FileTransferState, FileTransferStateChangeReason];
get_transferred_bytes(): number;
provide_file_async(file: Gio.File, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
provide_file_finish(result: Gio.AsyncResult): boolean;
static get_feature_quark_core(): GLib.Quark;
}
export class HandleChannelsContext  {constructor(config?: properties);
account: Account;
channels: object[];
connection: Connection;
dbus_context: object;
handler_info: unknown;
requests_satisfied: object[];
user_action_time: number;
accept(): void;
delay(): void;
fail(error: GLib.Error): void;
get_handler_info(): GLib.HashTable;
get_requests(): GLib.List;
}
export class Message  {constructor(config?: properties);
append_part(): number;
count_parts(): number;
delete_key(part: number, key: string): boolean;
delete_part(part: number): void;
destroy(): void;
dup_part(part: number): GLib.Variant;
get_message_type(): ChannelTextMessageType;
get_pending_message_id(): [number, boolean];
get_received_timestamp(): number;
get_sent_timestamp(): number;
get_specific_to_interface(): string;
get_supersedes(): string;
get_token(): string;
is_delivery_report(): boolean;
is_mutable(): boolean;
is_rescued(): boolean;
is_scrollback(): boolean;
peek(part: number): GLib.HashTable;
ref_handle(handle_type: HandleType, handle: Handle): void;
set(part: number, key: string, source: GObject.Value): void;
set_boolean(part: number, key: string, b: boolean): void;
set_bytes(part: number, key: string, len: number, bytes: object | null): void;
set_handle(part: number, key: string, handle_type: HandleType, handle_or_0: Handle): void;
set_int32(part: number, key: string, i: number): void;
set_int64(part: number, key: string, i: number): void;
set_string(part: number, key: string, s: string): void;
set_string_printf(part: number, key: string, fmt: string, ___: unknown[]): void;
set_uint32(part: number, key: string, u: number): void;
set_uint64(part: number, key: string, u: number): void;
set_variant(part: number, key: string, value: GLib.Variant): void;
take_message(part: number, key: string, message: Message): void;
to_text(): [string, ChannelTextMessageFlags];
}
export class ObserveChannelsContext  {constructor(config?: properties);
account: Account;
channels: object[];
connection: Connection;
dbus_context: object;
dispatch_operation: ChannelDispatchOperation;
observer_info: unknown;
requests: object[];
accept(): void;
delay(): void;
fail(error: GLib.Error): void;
get_requests(): GLib.List;
is_recovering(): boolean;
}
export class Protocol extends Proxy {constructor(config?: properties);
readonly addressable_uri_schemes: string[];
readonly addressable_vcard_fields: string[];
readonly authentication_types: string[];
readonly avatar_requirements: object;
readonly capabilities: Capabilities;
cm_name: string;
readonly english_name: string;
readonly icon_name: string;
readonly param_names: string[];
protocol_name: string;
protocol_properties: unknown;
readonly protocol_properties_vardict: GLib.Variant;
readonly vcard_field: string;static new_vardict(dbus: DBusDaemon, cm_name: string, protocol_name: string, immutable_properties: GLib.Variant): Protocol;
borrow_params(): ConnectionManagerParam;
can_register(): boolean;
dup_immutable_properties(): GLib.Variant;
dup_param(param: string): ConnectionManagerParam;
dup_param_names(): string[];
dup_params(): GLib.List;
dup_presence_statuses(): GLib.List;
get_addressable_uri_schemes(): string[];
get_addressable_vcard_fields(): string[];
get_authentication_types(): string[];
get_avatar_requirements(): AvatarRequirements;
get_capabilities(): Capabilities;
get_cm_name(): string;
get_english_name(): string;
get_icon_name(): string;
get_name(): string;
get_param(param: string): ConnectionManagerParam;
get_vcard_field(): string;
has_param(param: string): boolean;
identify_account_async(vardict: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
identify_account_finish(result: Gio.AsyncResult): string;
normalize_contact_async(contact: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
normalize_contact_finish(result: Gio.AsyncResult): string;
normalize_contact_uri_async(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
normalize_contact_uri_finish(result: Gio.AsyncResult): string;
normalize_vcard_address_async(field: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
normalize_vcard_address_finish(result: Gio.AsyncResult): string;
static get_feature_quark_core(): GLib.Quark;
static get_feature_quark_parameters(): GLib.Quark;
static init_known_interfaces(): void;
}
export class Proxy  {constructor(config?: properties);
bus_name: string;
dbus_connection: unknown;
dbus_daemon: DBusDaemon;
factory: SimpleClientFactory;
readonly interfaces: string[];
object_path: string;
readonly invalidated: GLib.Error;
readonly priv: ProxyPrivate;
dbus_error_to_gerror(dbus_error: string, debug_message: string): void;
get_bus_name(): string;
get_dbus_connection(): unknown;
get_dbus_daemon(): DBusDaemon;
get_factory(): SimpleClientFactory;
get_invalidated(): GLib.Error;
get_object_path(): string;
has_interface(iface: string): boolean;
has_interface_by_id(iface: GLib.Quark): boolean;
is_prepared(feature: GLib.Quark): boolean;
prepare_async(features: GLib.Quark[] | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
prepare_finish(result: Gio.AsyncResult): boolean;
}
export class RoomInfo  {constructor(config?: properties);
readonly priv: RoomInfoPriv;
get_channel_type(): string;
get_description(): string;
get_handle(): Handle;
get_handle_name(): string;
get_invite_only(known: boolean): boolean;
get_members_count(known: boolean): number;
get_name(): string;
get_requires_password(known: boolean): boolean;
get_room_id(): string;
get_server(): string;
get_subject(): string;
}
export class RoomList extends GObject.Object {constructor(config?: properties);
account: Account;
readonly listing: boolean;
server: string;static new_finish(result: Gio.AsyncResult): RoomList;
get_account(): Account;
get_server(): string;
is_listing(): boolean;
start(): void;
static new_async(account: Account, server: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class SignalledMessage  {constructor(config?: properties);
sender: Contact;
static get_sender(message: Message): Contact;
}
export class SimpleApprover extends BaseClient {constructor(config?: properties);
callback: object;
destroy: object;
user_data: object;static new_with_am(account_manager: AccountManager, name: string, uniquify: boolean, callback: SimpleApproverAddDispatchOperationImpl, user_data: object | null, destroy: GLib.DestroyNotify): SimpleApprover;
static new_with_factory(factory: SimpleClientFactory, name: string, uniquify: boolean, callback: SimpleApproverAddDispatchOperationImpl, user_data: object | null, destroy: GLib.DestroyNotify): SimpleApprover;
}
export class SimpleClientFactory extends GObject.Object {constructor(config?: properties);
dbus_daemon: DBusDaemon;
add_account_features(features: GLib.Quark[] | null): void;
add_account_features_varargs(feature: GLib.Quark, ___: unknown[]): void;
add_channel_features(features: GLib.Quark[] | null): void;
add_channel_features_varargs(feature: GLib.Quark, ___: unknown[]): void;
add_connection_features(features: GLib.Quark[] | null): void;
add_connection_features_varargs(feature: GLib.Quark, ___: unknown[]): void;
add_contact_features(n_features: number, features: ContactFeature[] | null): void;
add_contact_features_varargs(feature: ContactFeature, ___: unknown[]): void;
dup_account_features(account: Account): GLib.Quark[];
dup_channel_features(channel: Channel): GLib.Quark[];
dup_connection_features(connection: Connection): GLib.Quark[];
dup_contact_features(connection: Connection): ContactFeature[];
ensure_account(object_path: string, immutable_properties: GLib.HashTable): Account;
ensure_channel(connection: Connection, object_path: string, immutable_properties: GLib.HashTable): Channel;
ensure_connection(object_path: string, immutable_properties: GLib.HashTable): Connection;
ensure_contact(connection: Connection, handle: Handle, identifier: string): Contact;
ensure_contact_by_id_async(connection: Connection, identifier: string, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
ensure_contact_by_id_finish(result: Gio.AsyncResult): Contact;
get_dbus_daemon(): DBusDaemon;
upgrade_contacts_async(connection: Connection, n_contacts: number, contacts: Contact[], callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
upgrade_contacts_finish(result: Gio.AsyncResult): [boolean, Contact[] | null];
vfunc_create_account(object_path: string, immutable_properties: GLib.HashTable): Account;
vfunc_create_channel(conn: Connection, object_path: string, immutable_properties: GLib.HashTable): Channel;
vfunc_create_connection(object_path: string, immutable_properties: GLib.HashTable): Connection;
vfunc_create_contact(connection: Connection, handle: Handle, identifier: string): Contact;
vfunc_dup_account_features(account: Account): GLib.Quark[];
vfunc_dup_channel_features(channel: Channel): GLib.Quark[];
vfunc_dup_connection_features(connection: Connection): GLib.Quark[];
vfunc_dup_contact_features(connection: Connection): ContactFeature[];
}
export class SimpleHandler extends BaseClient {constructor(config?: properties);
bypass_approval: boolean;
callback: object;
destroy: object;
requests: boolean;
user_data: object;static new_with_am(account_manager: AccountManager, bypass_approval: boolean, requests: boolean, name: string, uniquify: boolean, callback: SimpleHandlerHandleChannelsImpl, user_data: object | null, destroy: GLib.DestroyNotify): SimpleHandler;
static new_with_factory(factory: SimpleClientFactory, bypass_approval: boolean, requests: boolean, name: string, uniquify: boolean, callback: SimpleHandlerHandleChannelsImpl, user_data: object | null, destroy: GLib.DestroyNotify): SimpleHandler;
}
export class SimpleObserver extends BaseClient {constructor(config?: properties);
callback: object;
destroy: object;
recover: boolean;
user_data: object;static new_with_am(account_manager: AccountManager, recover: boolean, name: string, uniquify: boolean, callback: SimpleObserverObserveChannelsImpl, user_data: object | null, destroy: GLib.DestroyNotify): SimpleObserver;
static new_with_factory(factory: SimpleClientFactory, recover: boolean, name: string, uniquify: boolean, callback: SimpleObserverObserveChannelsImpl, user_data: object | null, destroy: GLib.DestroyNotify): SimpleObserver;
}
export class StreamTubeChannel extends Channel {constructor(config?: properties);
readonly parameters: unknown;
readonly parameters_vardict: GLib.Variant;
readonly service: string;
accept_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
accept_finish(result: Gio.AsyncResult): StreamTubeConnection;
dup_parameters_vardict(): GLib.Variant;
get_parameters(): GLib.HashTable;
get_service(): string;
offer_async(params: GLib.HashTable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
offer_finish(result: Gio.AsyncResult): boolean;
}
export class StreamTubeConnection  {constructor(config?: properties);
channel: StreamTubeChannel;
contact: Contact;
socket_connection: Gio.SocketConnection;
get_channel(): StreamTubeChannel;
get_contact(): Contact;
get_socket_connection(): Gio.SocketConnection;
}
export class TLSCertificate extends Proxy {constructor(config?: properties);
readonly cert_data: object[];
readonly cert_type: string;
readonly state: number;
accept_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
accept_finish(result: Gio.AsyncResult): boolean;
add_rejection(reason: TLSCertificateRejectReason, dbus_error: string, details: GLib.Variant | null): void;
get_cert_data(): GLib.Bytes[];
get_cert_type(): string;
get_nth_rejection(n: number): TLSCertificateRejection | null;
get_rejection(): TLSCertificateRejection | null;
get_state(): TLSCertificateState;
reject_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
reject_finish(result: Gio.AsyncResult): boolean;
static get_feature_quark_core(): GLib.Quark;
static init_known_interfaces(): void;
}
export class TLSCertificateRejection  {constructor(config?: properties);
dbus_error: string;
details: GLib.Variant;
error: GLib.Error;
reason: number;
readonly priv: TLSCertificateRejectionPriv;
get_dbus_error(): string;
get_details(): GLib.Variant;
get_error(): GLib.Error;
get_reason(): TLSCertificateRejectReason;
raise_error(): boolean;
}
export class TextChannel extends Channel {constructor(config?: properties);
readonly delivery_reporting_support: number;
readonly message_part_support_flags: number;
readonly message_types: unknown;
readonly sms_flash: boolean;
readonly supported_content_types: string[];
ack_all_pending_messages_async(callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
ack_all_pending_messages_finish(result: Gio.AsyncResult): boolean;
ack_message_async(message: Message, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
ack_message_finish(result: Gio.AsyncResult): boolean;
ack_messages_async(messages: GLib.List, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
ack_messages_finish(result: Gio.AsyncResult): boolean;
dup_pending_messages(): GLib.List;
get_chat_state(contact: Contact): ChannelChatState;
get_chat_state(...args: never[]): never;
get_delivery_reporting_support(): DeliveryReportingSupportFlags;
get_message_part_support_flags(): MessagePartSupportFlags;
get_message_types(): ChannelTextMessageType[];
get_pending_messages(): GLib.List;
get_sms_flash(): boolean;
get_sms_length_async(message: Message, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_sms_length_finish(result: Gio.AsyncResult): [boolean, number,number,number];
get_supported_content_types(): string[];
is_sms_channel(): boolean;
send_message_async(message: Message, flags: MessageSendingFlags, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
send_message_finish(result: Gio.AsyncResult): [boolean, string];
set_chat_state_async(state: ChannelChatState, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
set_chat_state_finish(result: Gio.AsyncResult): boolean;
supports_message_type(message_type: ChannelTextMessageType): boolean;
static get_feature_quark_chat_states(): GLib.Quark;
static get_feature_quark_incoming_messages(): GLib.Quark;
static get_feature_quark_sms(): GLib.Quark;
}
export class AccountChannelRequestClass  {constructor(config?: properties);
}
export class AccountChannelRequestPrivate  {constructor(config?: properties);
}
export class AccountClass  {constructor(config?: properties);
readonly parent_class: ProxyClass;
readonly _padding: GObject.Callback[];
readonly priv: AccountClassPrivate;
}
export class AccountClassPrivate  {constructor(config?: properties);
}
export class AccountManagerClass  {constructor(config?: properties);
readonly parent_class: ProxyClass;
readonly _padding: GObject.Callback[];
readonly priv: AccountManagerClassPrivate;
}
export class AccountManagerClassPrivate  {constructor(config?: properties);
}
export class AccountManagerPrivate  {constructor(config?: properties);
}
export class AccountPrivate  {constructor(config?: properties);
}
export class AccountRequestClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _padding: GObject.Callback[];
}
export class AccountRequestPrivate  {constructor(config?: properties);
}
export class AddDispatchOperationContextClass  {constructor(config?: properties);
}
export class AddDispatchOperationContextPrivate  {constructor(config?: properties);
}
export class AutomaticClientFactoryClass  {constructor(config?: properties);
readonly parent_class: SimpleClientFactoryClass;
}
export class AutomaticProxyFactoryClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class AvatarRequirements  {constructor(config?: properties);
copy(): AvatarRequirements;
destroy(): void;
}
export class BaseClientClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly observe_channels: BaseClientClassObserveChannelsImpl;
readonly add_dispatch_operation: BaseClientClassAddDispatchOperationImpl;
readonly handle_channels: BaseClientClassHandleChannelsImpl;
readonly _padding: GObject.Callback[];
readonly dbus_properties_class: DBusPropertiesMixinClass;
readonly priv: BaseClientClassPrivate;
}
export class BaseClientClassPrivate  {constructor(config?: properties);
}
export class BaseClientPrivate  {constructor(config?: properties);
}
export class BaseConnectionClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _internal_create_handle_repos: GObject.Callback;
readonly create_channel_factories: BaseConnectionCreateChannelFactoriesImpl;
readonly get_unique_connection_name: BaseConnectionGetUniqueConnectionNameImpl;
readonly connecting: BaseConnectionProc;
readonly connected: BaseConnectionProc;
readonly disconnected: BaseConnectionProc;
readonly shut_down: BaseConnectionProc;
readonly start_connecting: BaseConnectionStartConnectingImpl;
readonly interfaces_always_present: string;
readonly create_channel_managers: BaseConnectionCreateChannelManagersImpl;
readonly get_interfaces_always_present: BaseConnectionGetInterfacesImpl;
readonly _future3: object;
readonly _future4: object;
readonly priv: object;
}
export class BaseConnectionPrivate  {constructor(config?: properties);
}
export class BasicProxyFactoryClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class CallChannelClass  {constructor(config?: properties);
readonly parent_class: ChannelClass;
readonly _padding: GObject.Callback[];
}
export class CallChannelPrivate  {constructor(config?: properties);
}
export class CallContentClass  {constructor(config?: properties);
readonly parent_class: ProxyClass;
readonly _padding: GObject.Callback[];
}
export class CallContentPrivate  {constructor(config?: properties);
}
export class CallStateReason  {constructor(config?: properties);
actor: Handle;
reason: CallStateChangeReason;
dbus_reason: string;
message: string;
readonly ref_count: number;
}
export class CallStreamClass  {constructor(config?: properties);
readonly parent_class: ProxyClass;
readonly _padding: GObject.Callback[];
}
export class CallStreamPrivate  {constructor(config?: properties);
}
export class CapabilitiesClass  {constructor(config?: properties);
}
export class CapabilitiesPrivate  {constructor(config?: properties);
}
export class ChannelClass  {constructor(config?: properties);
readonly parent_class: ProxyClass;
readonly _1: GObject.Callback;
readonly _2: GObject.Callback;
readonly _3: GObject.Callback;
readonly _4: GObject.Callback;
}
export class ChannelDispatchOperationClass  {constructor(config?: properties);
readonly parent_class: ProxyClass;
readonly _padding: GObject.Callback[];
readonly priv: ChannelDispatchOperationClassPrivate;
}
export class ChannelDispatchOperationClassPrivate  {constructor(config?: properties);
}
export class ChannelDispatchOperationPrivate  {constructor(config?: properties);
}
export class ChannelDispatcherClass  {constructor(config?: properties);
readonly parent_class: ProxyClass;
readonly _padding: GObject.Callback[];
readonly priv: ChannelDispatcherClassPrivate;
}
export class ChannelDispatcherClassPrivate  {constructor(config?: properties);
}
export class ChannelDispatcherPrivate  {constructor(config?: properties);
}
export class ChannelManagerIter  {constructor(config?: properties);
readonly self: BaseConnection;
readonly index: number;
readonly _future: object[];
}
export class ChannelPrivate  {constructor(config?: properties);
}
export class ChannelRequestClass  {constructor(config?: properties);
readonly parent_class: ProxyClass;
readonly _padding: GObject.Callback[];
readonly priv: ChannelRequestClassPrivate;
}
export class ChannelRequestClassPrivate  {constructor(config?: properties);
}
export class ChannelRequestPrivate  {constructor(config?: properties);
}
export class ClientChannelFactoryInterface  {constructor(config?: properties);
readonly create_channel: unknown;
readonly dup_channel_features: unknown;
readonly obj_create_channel: unknown;
readonly obj_dup_channel_features: unknown;
}
export class ClientMessageClass  {constructor(config?: properties);
}
export class ConnectionClass  {constructor(config?: properties);
readonly parent_class: ProxyClass;
readonly _1: GObject.Callback;
readonly _2: GObject.Callback;
readonly _3: GObject.Callback;
readonly _4: GObject.Callback;
}
export class ConnectionManagerClass  {constructor(config?: properties);
readonly parent_class: ProxyClass;
readonly priv: object;
}
export class ConnectionManagerParam  {constructor(config?: properties);
readonly name: string;
readonly dbus_signature: string;
readonly default_value: GObject.Value;
readonly flags: number;
readonly priv: object;
copy(): ConnectionManagerParam;
dup_default_variant(): GLib.Variant;
dup_variant_type(): GLib.VariantType;
free(): void;
get_dbus_signature(): string;
get_default(value: GObject.Value): boolean;
get_name(): string;
is_dbus_property(): boolean;
is_required(): boolean;
is_required_for_registration(): boolean;
is_secret(): boolean;
}
export class ConnectionManagerPrivate  {constructor(config?: properties);
}
export class ConnectionManagerProtocol  {constructor(config?: properties);
name: string;
params: ConnectionManagerParam;
readonly priv: object;
can_register(): boolean;
copy(): ConnectionManagerProtocol;
dup_param_names(): string[];
free(): void;
get_param(param: string): ConnectionManagerParam;
has_param(param: string): boolean;
}
export class ConnectionPrivate  {constructor(config?: properties);
}
export class ContactClass  {constructor(config?: properties);
}
export class ContactInfoField  {constructor(config?: properties);
copy(): ContactInfoField;
free(): void;
}
export class ContactInfoFieldSpec  {constructor(config?: properties);
name: string;
parameters: string[];
flags: ContactInfoFieldFlags;
max: number;
readonly priv: object;
copy(): ContactInfoFieldSpec;
free(): void;
}
export class ContactPrivate  {constructor(config?: properties);
}
export class ContactSearchClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _padding: GObject.Callback[];
}
export class ContactSearchPrivate  {constructor(config?: properties);
}
export class ContactSearchResultClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _padding: GObject.Callback[];
}
export class ContactSearchResultPrivate  {constructor(config?: properties);
}
export class ContactsMixin  {constructor(config?: properties);
readonly priv: ContactsMixinPrivate;
static add_contact_attributes_iface(obj: GObject.Object, _interface: string, fill_contact_attributes: ContactsMixinFillContactAttributesFunc): void;
static finalize(obj: GObject.Object): void;
static get_contact_attributes(obj: GObject.Object, handles: object[], interfaces: string, assumed_interfaces: string, sender: string): GLib.HashTable;
static get_offset_quark(): GLib.Quark;
static iface_init(g_iface: object | null, iface_data: object | null): void;
static init(obj: GObject.Object, offset: number): void;
static set_contact_attribute(contact_attributes: GLib.HashTable, handle: Handle, attribute: string, value: GObject.Value): void;
}
export class ContactsMixinClass  {constructor(config?: properties);
readonly priv: ContactsMixinClassPrivate;
static get_offset_quark(): GLib.Quark;
static init(obj_cls: GObject.ObjectClass, offset: number): void;
}
export class ContactsMixinClassPrivate  {constructor(config?: properties);
}
export class ContactsMixinPrivate  {constructor(config?: properties);
}
export class DBusDaemonClass  {constructor(config?: properties);
}
export class DBusDaemonPrivate  {constructor(config?: properties);
}
export class DBusPropertiesMixinClass  {constructor(config?: properties);
interfaces: DBusPropertiesMixinIfaceImpl;
readonly _1: object;
readonly _2: object;
readonly _3: object;
readonly _4: object;
readonly _5: object;
readonly _6: object;
readonly _7: object;
static init(cls: GObject.ObjectClass, offset: number): void;
}
export class DBusPropertiesMixinIfaceImpl  {constructor(config?: properties);
name: string;
getter: DBusPropertiesMixinGetter;
setter: DBusPropertiesMixinSetter;
props: DBusPropertiesMixinPropImpl;
readonly _1: GObject.Callback;
readonly _2: GObject.Callback;
readonly mixin_next: object;
readonly mixin_priv: object;
}
export class DBusPropertiesMixinIfaceInfo  {constructor(config?: properties);
dbus_interface: GLib.Quark;
props: DBusPropertiesMixinPropInfo;
readonly _1: GObject.Callback;
readonly _2: GObject.Callback;
}
export class DBusPropertiesMixinPropImpl  {constructor(config?: properties);
name: string;
getter_data: object;
setter_data: object;
readonly _1: GObject.Callback;
readonly _2: GObject.Callback;
readonly mixin_priv: object;
}
export class DBusPropertiesMixinPropInfo  {constructor(config?: properties);
name: GLib.Quark;
flags: DBusPropertiesMixinFlags;
dbus_signature: string;
type: unknown;
readonly _1: GObject.Callback;
readonly _2: GObject.Callback;
}
export class DBusTubeChannelClass  {constructor(config?: properties);
readonly parent_class: ChannelClass;
readonly _padding: GObject.Callback[];
}
export class DBusTubeChannelPrivate  {constructor(config?: properties);
}
export class DebugClientClass  {constructor(config?: properties);
}
export class DebugClientPrivate  {constructor(config?: properties);
}
export class DebugMessageClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class DebugMessagePriv  {constructor(config?: properties);
}
export class FileTransferChannelClass  {constructor(config?: properties);
readonly parent_class: ChannelClass;
readonly _padding: GObject.Callback[];
}
export class FileTransferChannelPrivate  {constructor(config?: properties);
}
export class GroupMixin  {constructor(config?: properties);
handle_repo: HandleRepoIface;
self_handle: Handle;
group_flags: ChannelGroupFlags;
members: HandleSet;
local_pending: HandleSet;
remote_pending: HandleSet;
priv: GroupMixinPrivate;
static add_handle_owner(obj: GObject.Object, local_handle: Handle, owner_handle: Handle): void;
static add_handle_owners(obj: GObject.Object, local_to_owner_handle: GLib.HashTable): void;
static add_members(obj: GObject.Object, contacts: object[], message: string): boolean;
static change_flags(obj: GObject.Object, add: ChannelGroupFlags, del: ChannelGroupFlags): void;
static change_members(obj: GObject.Object, message: string, add: Intset, del: Intset, add_local_pending: Intset, add_remote_pending: Intset, actor: Handle, reason: ChannelGroupChangeReason): boolean;
static change_members_detailed(obj: GObject.Object, add: Intset, del: Intset, add_local_pending: Intset, add_remote_pending: Intset, details: GLib.HashTable): boolean;
static change_self_handle(obj: GObject.Object, new_self_handle: Handle): void;
static finalize(obj: GObject.Object): void;
static get_all_members(obj: GObject.Object, members: object[], local_pending: object[], remote_pending: object[]): boolean;
static get_dbus_property(object: GObject.Object, _interface: GLib.Quark, name: GLib.Quark, value: GObject.Value, unused: object | null): void;
static get_group_flags(obj: GObject.Object, ret: number): boolean;
static get_handle_owners(obj: GObject.Object, handles: object[], ret: object[]): boolean;
static get_local_pending_members(obj: GObject.Object, ret: object[]): boolean;
static get_local_pending_members_with_info(obj: GObject.Object, ret: object[]): boolean;
static get_members(obj: GObject.Object, ret: object[]): boolean;
static get_offset_quark(): GLib.Quark;
static get_remote_pending_members(obj: GObject.Object, ret: object[]): boolean;
static get_self_handle(obj: GObject.Object, ret: number): boolean;
static iface_init(g_iface: object | null, iface_data: object | null): void;
static init(obj: GObject.Object, offset: number, handle_repo: HandleRepoIface, self_handle: Handle): void;
static init_dbus_properties(cls: GObject.ObjectClass): void;
static remove_members(obj: GObject.Object, contacts: object[], message: string): boolean;
static remove_members_with_reason(obj: GObject.Object, contacts: object[], message: string, reason: number): boolean;
}
export class GroupMixinClass  {constructor(config?: properties);
add_member: GroupMixinAddMemberFunc;
remove_member: GroupMixinRemMemberFunc;
priv: GroupMixinClassPrivate;
static allow_self_removal(obj_cls: GObject.ObjectClass): void;
static get_offset_quark(): GLib.Quark;
static init(obj_cls: GObject.ObjectClass, offset: number, add_func: GroupMixinAddMemberFunc, rem_func: GroupMixinRemMemberFunc): void;
static set_remove_with_reason_func(cls: GObject.ObjectClass, func: GroupMixinRemMemberWithReasonFunc): void;
}
export class GroupMixinClassPrivate  {constructor(config?: properties);
}
export class GroupMixinPrivate  {constructor(config?: properties);
}
export class HandleChannelsContextClass  {constructor(config?: properties);
}
export class HandleChannelsContextPrivate  {constructor(config?: properties);
}
export class HandleRepoIfaceClass  {constructor(config?: properties);
}
export class HandleSet  {constructor(config?: properties);
static new_containing(repo: HandleRepoIface, handle: Handle): HandleSet;
static new_from_array(repo: HandleRepoIface, array: number[]): HandleSet;
static new_from_intset(repo: HandleRepoIface, intset: Intset): HandleSet;
add(handle: Handle): void;
clear(): void;
copy(): HandleSet;
destroy(): void;
difference_update(remove: Intset): Intset;
dump(): string;
foreach(func: HandleSetMemberFunc, user_data: object | null): void;
is_empty(): boolean;
is_member(handle: Handle): boolean;
peek(): Intset;
remove(handle: Handle): boolean;
size(): number;
to_array(): number[];
to_identifier_map(): GLib.HashTable;
update(add: Intset): Intset;
static qdata(repo: HandleRepoIface, handle: Handle, key_id: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify): void;
}
export class Intset  {constructor(config?: properties);
static new_containing(element: number): Intset;
static sized_new(size: number): Intset;
add(element: number): void;
clear(): void;
copy(): Intset;
destroy(): void;
difference(right: Intset): Intset;
difference_update(other: Intset): void;
dump(): string;
foreach(func: IntFunc, userdata: object | null): void;
intersection(right: Intset): Intset;
is_empty(): boolean;
is_equal(right: Intset): boolean;
is_member(element: number): boolean;
remove(element: number): boolean;
size(): number;
symmetric_difference(right: Intset): Intset;
to_array(): number[];
union(right: Intset): Intset;
union_update(other: Intset): void;
static from_array(array: number[]): Intset;
}
export class IntsetFastIter  {constructor(config?: properties);
readonly _dummy: object[];
init(set: Intset): void;
next(output: number): boolean;
}
export class IntsetIter  {constructor(config?: properties);
set: Intset;
element: number;
init(set: Intset): void;
next(): boolean;
reset(): void;
}
export class MessageClass  {constructor(config?: properties);
}
export class ObserveChannelsContextClass  {constructor(config?: properties);
}
export class ObserveChannelsContextPrivate  {constructor(config?: properties);
}
export class PresenceMixin  {constructor(config?: properties);
readonly priv: PresenceMixinPrivate;
static emit_one_presence_update(obj: GObject.Object, handle: Handle, status: PresenceStatus): void;
static emit_presence_update(obj: GObject.Object, contact_presences: GLib.HashTable): void;
static finalize(obj: GObject.Object): void;
static get_offset_quark(): GLib.Quark;
static iface_init(g_iface: object | null, iface_data: object | null): void;
static init(obj: GObject.Object, offset: number): void;
static simple_presence_iface_init(g_iface: object | null, iface_data: object | null): void;
static simple_presence_init_dbus_properties(cls: GObject.ObjectClass): void;
static simple_presence_register_with_contacts_mixin(obj: GObject.Object): void;
}
export class PresenceMixinClass  {constructor(config?: properties);
status_available: PresenceMixinStatusAvailableFunc;
get_contact_statuses: PresenceMixinGetContactStatusesFunc;
set_own_status: PresenceMixinSetOwnStatusFunc;
statuses: PresenceStatusSpec;
readonly priv: PresenceMixinClassPrivate;
get_maximum_status_message_length: PresenceMixinGetMaximumStatusMessageLengthFunc;
readonly _future1: object;
readonly _future2: object;
readonly _future3: object;
static get_offset_quark(): GLib.Quark;
static init(obj_cls: GObject.ObjectClass, offset: number, status_available: PresenceMixinStatusAvailableFunc, get_contact_statuses: PresenceMixinGetContactStatusesFunc, set_own_status: PresenceMixinSetOwnStatusFunc, statuses: PresenceStatusSpec): void;
}
export class PresenceMixinClassPrivate  {constructor(config?: properties);
}
export class PresenceMixinPrivate  {constructor(config?: properties);
}
export class PresenceStatus  {constructor(config?: properties);
index: number;
optional_arguments: GLib.HashTable;
readonly _future1: object;
readonly _future2: object;
free(): void;
static _new(which: number, optional_arguments: GLib.HashTable): PresenceStatus;
}
export class PresenceStatusOptionalArgumentSpec  {constructor(config?: properties);
name: string;
dtype: string;
readonly _future1: object;
readonly _future2: object;
}
export class PresenceStatusSpec  {constructor(config?: properties);
can_set_on_self(): boolean;
copy(): PresenceStatusSpec;
free(): void;
get_name(): string;
get_presence_type(): ConnectionPresenceType;
has_message(): boolean;
}
export class PresenceStatusSpecPrivate  {constructor(config?: properties);
}
export class ProtocolClass  {constructor(config?: properties);
}
export class ProtocolClassPrivate  {constructor(config?: properties);
}
export class ProtocolPrivate  {constructor(config?: properties);
}
export class ProxyClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _interface: GLib.Quark;
readonly must_have_unique_name: number;
readonly _reserved_flags: number;
readonly _internal_list_features: GObject.Callback;
readonly _reserved: GObject.Callback[];
readonly priv: object;
}
export class ProxyFeature  {constructor(config?: properties);
name: GLib.Quark;
core: boolean;
prepare_async: ProxyPrepareAsync;
prepare_before_signalling_connected_async: ProxyPrepareAsync;
interfaces_needed: GLib.Quark;
depends_on: GLib.Quark;
can_retry: boolean;
readonly _reserved: GObject.Callback[];
readonly priv: ProxyFeaturePrivate;
}
export class ProxyFeaturePrivate  {constructor(config?: properties);
}
export class ProxyPendingCall  {constructor(config?: properties);
cancel(): void;
}
export class ProxyPrivate  {constructor(config?: properties);
}
export class ProxySignalConnection  {constructor(config?: properties);
disconnect(): void;
}
export class RoomInfoClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class RoomInfoPriv  {constructor(config?: properties);
}
export class RoomListClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _padding: GObject.Callback[];
}
export class RoomListPrivate  {constructor(config?: properties);
}
export class SignalledMessageClass  {constructor(config?: properties);
}
export class SimpleApproverClass  {constructor(config?: properties);
readonly parent_class: BaseClientClass;
readonly _padding: GObject.Callback[];
}
export class SimpleApproverPrivate  {constructor(config?: properties);
}
export class SimpleClientFactoryClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly create_account: unknown;
readonly dup_account_features: unknown;
readonly create_connection: unknown;
readonly dup_connection_features: unknown;
readonly create_channel: unknown;
readonly dup_channel_features: unknown;
readonly create_contact: unknown;
readonly dup_contact_features: unknown;
readonly padding: GObject.Callback[];
}
export class SimpleClientFactoryPrivate  {constructor(config?: properties);
}
export class SimpleHandlerClass  {constructor(config?: properties);
readonly parent_class: BaseClientClass;
readonly _padding: GObject.Callback[];
}
export class SimpleHandlerPrivate  {constructor(config?: properties);
}
export class SimpleObserverClass  {constructor(config?: properties);
readonly parent_class: BaseClientClass;
readonly _padding: GObject.Callback[];
}
export class SimpleObserverPrivate  {constructor(config?: properties);
}
export class StreamTubeChannelClass  {constructor(config?: properties);
readonly parent_class: ChannelClass;
readonly _padding: GObject.Callback[];
}
export class StreamTubeChannelPrivate  {constructor(config?: properties);
}
export class StreamTubeConnectionClass  {constructor(config?: properties);
}
export class StreamTubeConnectionPrivate  {constructor(config?: properties);
}
export class TLSCertificateClass  {constructor(config?: properties);
readonly parent_class: ProxyClass;
readonly _future: GObject.Callback[];
readonly priv: TLSCertificateClassPrivate;
}
export class TLSCertificateClassPrivate  {constructor(config?: properties);
}
export class TLSCertificatePrivate  {constructor(config?: properties);
}
export class TLSCertificateRejectionClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class TLSCertificateRejectionPriv  {constructor(config?: properties);
}
export class TextChannelClass  {constructor(config?: properties);
readonly parent_class: ChannelClass;
readonly _padding: GObject.Callback[];
}
export class TextChannelPrivate  {constructor(config?: properties);
}
export class WeakRef  {constructor(config?: properties);
destroy(): void;
dup_object(): GObject.Object;
get_user_data(): object | null;
static _new(object: GObject.Object, user_data: object | null, destroy: GLib.DestroyNotify): WeakRef;
}
export interface ClientChannelFactory  {
create_channel(conn: Connection, path: string, properties: GLib.HashTable): Channel;
dup_channel_features(channel: Channel): GLib.Quark[];
}
export interface HandleRepoIface  {
handle_type: number;
}