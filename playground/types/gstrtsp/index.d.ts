
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gst from "gst";
import * as GstBase from "gstbase";
import * as GstSdp from "gstsdp";
import * as GstRtsp from "gstrtsp";
/**
 * gstrtsp.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type RTSPConnectionAcceptCertificateFunc = (conn: Gio.TlsConnection, peer_cert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags, user_data: object | null) => boolean;
export const RTSP_DEFAULT_PORT: number;
/**
 * Free a %NULL-terminated array of credentials returned from
 * gst_rtsp_message_parse_auth_credentials().
 */
export function rtsp_auth_credentials_free(credentials: RTSPAuthCredential): void;
/**
 * Accept a new connection on @socket and create a new #GstRTSPConnection
 *  for
 * handling communication on new socket.
 */
export function rtsp_connection_accept(socket: Gio.Socket, cancellable: Gio.Cancellable | null): [RTSPResult, RTSPConnection];
/**
 * Create a newly allocated #GstRTSPConnection from @url and store it in 
 * @conn.
 * The connection will not yet attempt to connect to @url, use
 * gst_rtsp_connection_connect().
 * A copy of @url will be made.
 */
export function rtsp_connection_create(url: RTSPUrl): [RTSPResult, RTSPConnection];
/**
 * Create a new #GstRTSPConnection for handling communication on the exis
 * ting
 * socket @socket. The @initial_buffer contains zero terminated data alre
 * ady
 * read from @socket which should be used before starting to read new dat
 * a.
 */
export function rtsp_connection_create_from_socket(socket: Gio.Socket, ip: string, port: number, initial_buffer: string): [RTSPResult, RTSPConnection];
/**
 * Convert @header to a #GstRTSPHeaderField.
 */
export function rtsp_find_header_field(header: string): RTSPHeaderField;
/**
 * Convert @method to a #GstRTSPMethod.
 */
export function rtsp_find_method(method: string): RTSPMethod;
/**
 * Calculates the digest auth response from the values given by the serve
 * r and
 * the username and password. See RFC2069 for details.
 * Currently only supported algorithm "md5".
 */
export function rtsp_generate_digest_auth_response(algorithm: string | null, method: string, realm: string, username: string, password: string, uri: string, nonce: string): string;
/**
 * Calculates the digest auth response from the values given by the serve
 * r and
 * the md5sum. See RFC2069 for details.
 * This function is useful when the passwords are not stored in clear tex
 * t,
 * but instead in the same format as the .htdigest file.
 * Currently only supported algorithm "md5".
 */
export function rtsp_generate_digest_auth_response_from_md5(algorithm: string | null, method: string, md5: string, uri: string, nonce: string): string;
/**
 * Check whether @field may appear multiple times in a message.
 */
export function rtsp_header_allow_multiple(field: RTSPHeaderField): boolean;
/**
 * Convert @field to a string.
 */
export function rtsp_header_as_text(field: RTSPHeaderField): string;
/**
 * Create a new initialized #GstRTSPMessage. Free with gst_rtsp_message_f
 * ree().
 */
export function rtsp_message_new(): [RTSPResult, RTSPMessage];
/**
 * Create a new data #GstRTSPMessage with @channel and store the
 * result message in @msg. Free with gst_rtsp_message_free().
 */
export function rtsp_message_new_data(channel: number): [RTSPResult, RTSPMessage];
/**
 * Create a new #GstRTSPMessage with @method and @uri and store the resul
 * t
 * request message in @msg. Free with gst_rtsp_message_free().
 */
export function rtsp_message_new_request(method: RTSPMethod, uri: string): [RTSPResult, RTSPMessage];
/**
 * Create a new response #GstRTSPMessage with @code and @reason and store
 *  the
 * result message in @msg. Free with gst_rtsp_message_free().
 * When @reason is %NULL, the default reason for @code will be used.
 * When @request is not %NULL, the relevant headers will be copied to the
 *  new
 * response message.
 */
export function rtsp_message_new_response(code: RTSPStatusCode, reason: string | null, request: RTSPMessage | null): [RTSPResult, RTSPMessage];
/**
 * Convert @method to a string.
 */
export function rtsp_method_as_text(method: RTSPMethod): string;
/**
 * Convert @options to a string.
 */
export function rtsp_options_as_text(options: RTSPMethod): string;
/**
 * Convert the comma separated list @options to a #GstRTSPMethod bitwise 
 * or
 * of methods. This functions is the reverse of gst_rtsp_options_as_text(
 * ).
 */
export function rtsp_options_from_text(options: string): RTSPMethod;
/**
 * Converts the range in-place between different types of units.
 * Ranges containing the special value #GST_RTSP_TIME_NOW can not be
 * converted as these are only valid for #GST_RTSP_RANGE_NPT.
 */
export function rtsp_range_convert_units(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean;
/**
 * Free the memory allocated by @range.
 */
export function rtsp_range_free(range: RTSPTimeRange): void;
/**
 * Retrieve the minimum and maximum values from @range converted to
 * #GstClockTime in @min and @max.
 * A value of %GST_CLOCK_TIME_NONE will be used to signal #GST_RTSP_TIME_
 * NOW
 * and #GST_RTSP_TIME_END for @min and @max respectively.
 * UTC times will be converted to nanoseconds since 1900.
 */
export function rtsp_range_get_times(range: RTSPTimeRange): [boolean, Gst.ClockTime,Gst.ClockTime];
/**
 * Parse @rangestr to a #GstRTSPTimeRange.
 */
export function rtsp_range_parse(rangestr: string): [RTSPResult, RTSPTimeRange];
/**
 * Convert @range into a string representation.
 */
export function rtsp_range_to_string(range: RTSPTimeRange): string;
/**
 * Convert @code to a string.
 */
export function rtsp_status_as_text(code: RTSPStatusCode): string;
/**
 * Convert @result in a human readable string.
 */
export function rtsp_strresult(result: RTSPResult): string;
/**
 * Get the #GstElement that can handle the buffers transported over @tran
 * s.
 * It is possible that there are several managers available, use @option 
 * to
 * selected one.
 * @manager will contain an element name or %NULL when no manager is
 * needed/available for @trans.
 */
export function rtsp_transport_get_manager(trans: RTSPTransMode, option: number): [RTSPResult, string | null];
/**
 * Get the mime type of the transport mode @trans. This mime type is typi
 * cally
 * used to generate #GstCaps events.
 */
export function rtsp_transport_get_mime(trans: RTSPTransMode, mime: string): RTSPResult;
/**
 * Allocate a new initialized #GstRTSPTransport. Use gst_rtsp_transport_f
 * ree()
 * after usage.
 */
export function rtsp_transport_new(transport: RTSPTransport): RTSPResult;
/**
 * Parse the RTSP transport string @str into @transport.
 */
export function rtsp_transport_parse(str: string, transport: RTSPTransport): RTSPResult;
/**
 * Parse the RTSP @urlstr into a newly allocated #GstRTSPUrl. Free after 
 * usage
 * with gst_rtsp_url_free().
 */
export function rtsp_url_parse(urlstr: string): [RTSPResult, RTSPUrl];
/**
 * Convert @version to a string.
 */
export function rtsp_version_as_text(version: RTSPVersion): string;
export enum RTSPAuthMethod {
    NONE = 0,
    BASIC = 1,
    DIGEST = 2,
}
export enum RTSPFamily {
    NONE = 0,
    INET = 1,
    INET6 = 2,
}
export enum RTSPHeaderField {
    INVALID = 0,
    ACCEPT = 1,
    ACCEPT_ENCODING = 2,
    ACCEPT_LANGUAGE = 3,
    ALLOW = 4,
    AUTHORIZATION = 5,
    BANDWIDTH = 6,
    BLOCKSIZE = 7,
    CACHE_CONTROL = 8,
    CONFERENCE = 9,
    CONNECTION = 10,
    CONTENT_BASE = 11,
    CONTENT_ENCODING = 12,
    CONTENT_LANGUAGE = 13,
    CONTENT_LENGTH = 14,
    CONTENT_LOCATION = 15,
    CONTENT_TYPE = 16,
    CSEQ = 17,
    DATE = 18,
    EXPIRES = 19,
    FROM = 20,
    IF_MODIFIED_SINCE = 21,
    LAST_MODIFIED = 22,
    PROXY_AUTHENTICATE = 23,
    PROXY_REQUIRE = 24,
    PUBLIC = 25,
    RANGE = 26,
    REFERER = 27,
    REQUIRE = 28,
    RETRY_AFTER = 29,
    RTP_INFO = 30,
    SCALE = 31,
    SESSION = 32,
    SERVER = 33,
    SPEED = 34,
    TRANSPORT = 35,
    UNSUPPORTED = 36,
    USER_AGENT = 37,
    VIA = 38,
    WWW_AUTHENTICATE = 39,
    CLIENT_CHALLENGE = 40,
    REAL_CHALLENGE1 = 41,
    REAL_CHALLENGE2 = 42,
    REAL_CHALLENGE3 = 43,
    SUBSCRIBE = 44,
    ALERT = 45,
    CLIENT_ID = 46,
    COMPANY_ID = 47,
    GUID = 48,
    REGION_DATA = 49,
    MAX_ASM_WIDTH = 50,
    LANGUAGE = 51,
    PLAYER_START_TIME = 52,
    LOCATION = 53,
    ETAG = 54,
    IF_MATCH = 55,
    ACCEPT_CHARSET = 56,
    SUPPORTED = 57,
    VARY = 58,
    X_ACCELERATE_STREAMING = 59,
    X_ACCEPT_AUTHENT = 60,
    X_ACCEPT_PROXY_AUTHENT = 61,
    X_BROADCAST_ID = 62,
    X_BURST_STREAMING = 63,
    X_NOTICE = 64,
    X_PLAYER_LAG_TIME = 65,
    X_PLAYLIST = 66,
    X_PLAYLIST_CHANGE_NOTICE = 67,
    X_PLAYLIST_GEN_ID = 68,
    X_PLAYLIST_SEEK_ID = 69,
    X_PROXY_CLIENT_AGENT = 70,
    X_PROXY_CLIENT_VERB = 71,
    X_RECEDING_PLAYLISTCHANGE = 72,
    X_RTP_INFO = 73,
    X_STARTUPPROFILE = 74,
    TIMESTAMP = 75,
    AUTHENTICATION_INFO = 76,
    HOST = 77,
    PRAGMA = 78,
    X_SERVER_IP_ADDRESS = 79,
    X_SESSIONCOOKIE = 80,
    RTCP_INTERVAL = 81,
    KEYMGMT = 82,
    PIPELINED_REQUESTS = 83,
    MEDIA_PROPERTIES = 84,
    SEEK_STYLE = 85,
    ACCEPT_RANGES = 86,
    FRAMES = 87,
    RATE_CONTROL = 88,
    LAST = 89,
}
export enum RTSPMsgType {
    INVALID = 0,
    REQUEST = 1,
    RESPONSE = 2,
    HTTP_REQUEST = 3,
    HTTP_RESPONSE = 4,
    DATA = 5,
}
export enum RTSPRangeUnit {
    SMPTE = 0,
    SMPTE_30_DROP = 1,
    SMPTE_25 = 2,
    NPT = 3,
    CLOCK = 4,
}
export enum RTSPResult {
    OK = 0,
    ERROR = -1,
    EINVAL = -2,
    EINTR = -3,
    ENOMEM = -4,
    ERESOLV = -5,
    ENOTIMPL = -6,
    ESYS = -7,
    EPARSE = -8,
    EWSASTART = -9,
    EWSAVERSION = -10,
    EEOF = -11,
    ENET = -12,
    ENOTIP = -13,
    ETIMEOUT = -14,
    ETGET = -15,
    ETPOST = -16,
    ELAST = -17,
}
export enum RTSPState {
    INVALID = 0,
    INIT = 1,
    READY = 2,
    SEEKING = 3,
    PLAYING = 4,
    RECORDING = 5,
}
export enum RTSPStatusCode {
    INVALID = 0,
    CONTINUE = 100,
    OK = 200,
    CREATED = 201,
    LOW_ON_STORAGE = 250,
    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY = 301,
    MOVE_TEMPORARILY = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    USE_PROXY = 305,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTH_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    REQUEST_ENTITY_TOO_LARGE = 413,
    REQUEST_URI_TOO_LARGE = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    PARAMETER_NOT_UNDERSTOOD = 451,
    CONFERENCE_NOT_FOUND = 452,
    NOT_ENOUGH_BANDWIDTH = 453,
    SESSION_NOT_FOUND = 454,
    METHOD_NOT_VALID_IN_THIS_STATE = 455,
    HEADER_FIELD_NOT_VALID_FOR_RESOURCE = 456,
    INVALID_RANGE = 457,
    PARAMETER_IS_READONLY = 458,
    AGGREGATE_OPERATION_NOT_ALLOWED = 459,
    ONLY_AGGREGATE_OPERATION_ALLOWED = 460,
    UNSUPPORTED_TRANSPORT = 461,
    DESTINATION_UNREACHABLE = 462,
    KEY_MANAGEMENT_FAILURE = 463,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    RTSP_VERSION_NOT_SUPPORTED = 505,
    OPTION_NOT_SUPPORTED = 551,
}
export enum RTSPTimeType {
    SECONDS = 0,
    NOW = 1,
    END = 2,
    FRAMES = 3,
    UTC = 4,
}
export enum RTSPVersion {
    INVALID = 0,
    Gjs_1_0 = 16,
    Gjs_1_1 = 17,
    Gjs_2_0 = 32,
}
export enum RTSPEvent {
    READ = 1,
    WRITE = 2,
}
export enum RTSPLowerTrans {
    UNKNOWN = 0,
    UDP = 1,
    UDP_MCAST = 2,
    TCP = 4,
    HTTP = 16,
    TLS = 32,
}
export enum RTSPMethod {
    INVALID = 0,
    DESCRIBE = 1,
    ANNOUNCE = 2,
    GET_PARAMETER = 4,
    OPTIONS = 8,
    PAUSE = 16,
    PLAY = 32,
    RECORD = 64,
    REDIRECT = 128,
    SETUP = 256,
    SET_PARAMETER = 512,
    TEARDOWN = 1024,
    GET = 2048,
    POST = 4096,
}
export enum RTSPProfile {
    UNKNOWN = 0,
    AVP = 1,
    SAVP = 2,
    AVPF = 4,
    SAVPF = 8,
}
export enum RTSPTransMode {
    UNKNOWN = 0,
    RTP = 1,
    RDT = 2,
}
export class RTSPAuthCredential  {
    constructor(config?: properties);
    scheme: RTSPAuthMethod;
    params: RTSPAuthParam;
    authorization: string;
}
export class RTSPAuthParam  {
    constructor(config?: properties);
    name: string;
    value: string;
    copy(): RTSPAuthParam;
    free(): void;
}
export class RTSPConnection  {
    constructor(config?: properties);
    clear_auth_params(): void;
    close(): RTSPResult;
    connect(timeout: GLib.TimeVal): RTSPResult;
    connect_with_response(timeout: GLib.TimeVal, response: RTSPMessage): RTSPResult;
    do_tunnel(conn2: RTSPConnection): RTSPResult;
    flush(flush: boolean): RTSPResult;
    free(): RTSPResult;
    get_ip(): string;
    get_read_socket(): Gio.Socket;
    get_remember_session_id(): boolean;
    get_tls(): Gio.TlsConnection;
    get_tls_database(): Gio.TlsDatabase;
    get_tls_interaction(): Gio.TlsInteraction;
    get_tls_validation_flags(): Gio.TlsCertificateFlags;
    get_tunnelid(): string;
    get_url(): RTSPUrl;
    get_write_socket(): Gio.Socket;
    is_tunneled(): boolean;
    next_timeout(timeout: GLib.TimeVal): RTSPResult;
    poll(events: RTSPEvent, revents: RTSPEvent, timeout: GLib.TimeVal): RTSPResult;
    read(data: number, size: number, timeout: GLib.TimeVal): RTSPResult;
    receive(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult;
    reset_timeout(): RTSPResult;
    send(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult;
    send_messages(messages: RTSPMessage[], n_messages: number, timeout: GLib.TimeVal): RTSPResult;
    set_accept_certificate_func(func: RTSPConnectionAcceptCertificateFunc, user_data: object | null, destroy_notify: GLib.DestroyNotify): void;
    set_auth(method: RTSPAuthMethod, user: string, pass: string): RTSPResult;
    set_auth_param(param: string, value: string): void;
    set_http_mode(enable: boolean): void;
    set_ip(ip: string): void;
    set_proxy(host: string, port: number): RTSPResult;
    set_qos_dscp(qos_dscp: number): RTSPResult;
    set_remember_session_id(remember: boolean): void;
    set_tls_database(database: Gio.TlsDatabase): void;
    set_tls_interaction(interaction: Gio.TlsInteraction): void;
    set_tls_validation_flags(flags: Gio.TlsCertificateFlags): boolean;
    set_tunneled(tunneled: boolean): void;
    write(data: number, size: number, timeout: GLib.TimeVal): RTSPResult;
    static accept(socket: Gio.Socket, cancellable: Gio.Cancellable | null): [RTSPResult, RTSPConnection];
    static create(url: RTSPUrl): [RTSPResult, RTSPConnection];
    static create_from_socket(socket: Gio.Socket, ip: string, port: number, initial_buffer: string): [RTSPResult, RTSPConnection];
}
export class RTSPMessage  {
    constructor(config?: properties);
    type: RTSPMsgType;
    readonly hdr_fields: object[];
    readonly body: number;
    readonly body_size: number;
    readonly body_buffer: Gst.Buffer;
    add_header(field: RTSPHeaderField, value: string): RTSPResult;
    add_header_by_name(header: string, value: string): RTSPResult;
    append_headers(str: GLib.String): RTSPResult;
    copy(): [RTSPResult, RTSPMessage];
    dump(): RTSPResult;
    free(): RTSPResult;
    get_body(): [RTSPResult, number[],number];
    get_body_buffer(): [RTSPResult, Gst.Buffer];
    get_header(field: RTSPHeaderField, indx: number): [RTSPResult, string];
    get_header_by_name(header: string, index: number): [RTSPResult, string];
    get_type(): RTSPMsgType;
    has_body_buffer(): boolean;
    init(): RTSPResult;
    init_data(channel: number): RTSPResult;
    init_request(method: RTSPMethod, uri: string): RTSPResult;
    init_response(code: RTSPStatusCode, reason: string | null, request: RTSPMessage | null): RTSPResult;
    parse_auth_credentials(field: RTSPHeaderField): RTSPAuthCredential[];
    parse_data(): [RTSPResult, number];
    parse_request(): [RTSPResult, RTSPMethod | null,string | null,RTSPVersion | null];
    parse_response(): [RTSPResult, RTSPStatusCode | null,string | null,RTSPVersion | null];
    remove_header(field: RTSPHeaderField, indx: number): RTSPResult;
    remove_header_by_name(header: string, index: number): RTSPResult;
    set_body(data: number[], size: number): RTSPResult;
    set_body_buffer(buffer: Gst.Buffer): RTSPResult;
    steal_body(): [RTSPResult, number[],number];
    steal_body_buffer(): [RTSPResult, Gst.Buffer];
    take_body(data: number[], size: number): RTSPResult;
    take_body_buffer(buffer: Gst.Buffer): RTSPResult;
    take_header(field: RTSPHeaderField, value: string): RTSPResult;
    take_header_by_name(header: string, value: string): RTSPResult;
    unset(): RTSPResult;
}
export class RTSPRange  {
    constructor(config?: properties);
    min: number;
    max: number;
    static convert_units(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean;
    static free(range: RTSPTimeRange): void;
    static get_times(range: RTSPTimeRange): [boolean, Gst.ClockTime,Gst.ClockTime];
    static parse(rangestr: string): [RTSPResult, RTSPTimeRange];
    static to_string(range: RTSPTimeRange): string;
}
export class RTSPTime  {
    constructor(config?: properties);
    type: RTSPTimeType;
    seconds: number;
}
export class RTSPTime2  {
    constructor(config?: properties);
    frames: number;
    year: number;
    month: number;
    day: number;
}
export class RTSPTimeRange  {
    constructor(config?: properties);
    unit: RTSPRangeUnit;
    min: RTSPTime;
    max: RTSPTime;
    min2: RTSPTime2;
    max2: RTSPTime2;
}
export class RTSPTransport  {
    constructor(config?: properties);
    trans: RTSPTransMode;
    profile: RTSPProfile;
    lower_transport: RTSPLowerTrans;
    destination: string;
    source: string;
    layers: number;
    mode_play: boolean;
    mode_record: boolean;
    append: boolean;
    interleaved: RTSPRange;
    ttl: number;
    port: RTSPRange;
    client_port: RTSPRange;
    server_port: RTSPRange;
    ssrc: number;
    as_text(): string;
    free(): RTSPResult;
    get_media_type(): [RTSPResult, string];
    init(): RTSPResult;
    static get_manager(trans: RTSPTransMode, option: number): [RTSPResult, string | null];
    static get_mime(trans: RTSPTransMode, mime: string): RTSPResult;
    static _new(transport: RTSPTransport): RTSPResult;
    static parse(str: string, transport: RTSPTransport): RTSPResult;
}
export class RTSPUrl  {
    constructor(config?: properties);
    transports: RTSPLowerTrans;
    family: RTSPFamily;
    user: string;
    passwd: string;
    host: string;
    port: number;
    abspath: string;
    query: string;
    copy(): RTSPUrl;
    decode_path_components(): string[];
    free(): void;
    get_port(): [RTSPResult, number];
    get_request_uri(): string;
    set_port(port: number): RTSPResult;
    static parse(urlstr: string): [RTSPResult, RTSPUrl];
}
export class RTSPWatch  {
    constructor(config?: properties);
    attach(context: GLib.MainContext): number;
    get_send_backlog(): [number | null,number | null];
    reset(): void;
    send_message(message: RTSPMessage): [RTSPResult, number | null];
    send_messages(messages: RTSPMessage[], n_messages: number): [RTSPResult, number | null];
    set_flushing(flushing: boolean): void;
    set_send_backlog(bytes: number, messages: number): void;
    unref(): void;
    wait_backlog(timeout: GLib.TimeVal): RTSPResult;
    write_data(data: number[], size: number): [RTSPResult, number | null];
}
export class RTSPWatchFuncs  {
    constructor(config?: properties);
}
export interface RTSPExtension  {
    after_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;
    before_send(req: RTSPMessage): RTSPResult;
    configure_stream(caps: Gst.Caps): boolean;
    detect_server(resp: RTSPMessage): boolean;
    get_transports(protocols: RTSPLowerTrans, transport: string): RTSPResult;
    parse_sdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult;
    receive_request(req: RTSPMessage): RTSPResult;
    send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;
    setup_media(media: GstSdp.SDPMedia): RTSPResult;
    stream_select(url: RTSPUrl): RTSPResult;
}