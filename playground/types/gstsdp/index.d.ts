
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gst from "gst";
import * as GstSdp from "gstsdp";
/**
 * gstsdp.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const MIKEY_VERSION: number;
export const SDP_BWTYPE_AS: string;
export const SDP_BWTYPE_CT: string;
export const SDP_BWTYPE_EXT_PREFIX: string;
export const SDP_BWTYPE_RR: string;
export const SDP_BWTYPE_RS: string;
export const SDP_BWTYPE_TIAS: string;
/**
 * Check if the given @addr is a multicast address.
 */
export function sdp_address_is_multicast(nettype: string, addrtype: string, addr: string): boolean;
/**
 * Makes key management data
 */
export function sdp_make_keymgmt(uri: string, base64: string): string;
/**
 * Allocate a new GstSDPMedia and store the result in @media.
 */
export function sdp_media_new(): [SDPResult, SDPMedia];
/**
 * Mapping of caps to SDP fields:
 * a=rtpmap:(payload) (encoding_name) or (clock_rate)[or (encoding_params
 * )]
 * a=framesize:(payload) (width)-(height)
 * a=fmtp:(payload) (param)[=(value)];...
 * a=rtcp-fb:(payload) (param1) [param2]...
 */
export function sdp_media_set_media_from_caps(caps: Gst.Caps, media: SDPMedia): SDPResult;
/**
 * Creates a uri from @msg with the given @scheme. The uri has the format
 * :
 *  \@scheme:///[#type=value *[&type=value]]
 *  Where each value is url encoded.
 */
export function sdp_message_as_uri(scheme: string, msg: SDPMessage): string;
/**
 * Allocate a new GstSDPMessage and store the result in @msg.
 */
export function sdp_message_new(): [SDPResult, SDPMessage];
/**
 * Parse @text and create a new SDPMessage from these.
 */
export function sdp_message_new_from_text(text: string): [SDPResult, SDPMessage];
/**
 * Parse the contents of @size bytes pointed to by @data and store the re
 * sult in
 * @msg.
 */
export function sdp_message_parse_buffer(data: number[], size: number, msg: SDPMessage): SDPResult;
/**
 * Parse the null-terminated @uri and store the result in @msg.
 * The uri should be of the form:
 *  scheme://[address[:ttl=ttl][:noa=noa]]/[sessionname]
 *               [#type=value *[&type=value]]
 *  where value is url encoded. This looslely resembles
 *  http://tools.ietf.org/html/draft-fujikawa-sdp-url-01
 */
export function sdp_message_parse_uri(uri: string, msg: SDPMessage): SDPResult;
export enum MIKEYCacheType {
    NONE = 0,
    ALWAYS = 1,
    FOR_CSB = 2,
}
export enum MIKEYEncAlg {
    NULL = 0,
    AES_CM_128 = 1,
    AES_KW_128 = 2,
    AES_GCM_128 = 6,
}
export enum MIKEYKVType {
    NULL = 0,
    SPI = 1,
    INTERVAL = 2,
}
export enum MIKEYKeyDataType {
    TGK = 0,
    TEK = 2,
}
export enum MIKEYMacAlg {
    NULL = 0,
    HMAC_SHA_1_160 = 1,
}
export enum MIKEYMapType {
    MIKEY_MAP_TYPE_SRTP = 0,
}
export enum MIKEYPRFFunc {
    MIKEY_PRF_MIKEY_1 = 0,
}
export enum MIKEYPayloadType {
    LAST = 0,
    KEMAC = 1,
    PKE = 2,
    DH = 3,
    SIGN = 4,
    T = 5,
    ID = 6,
    CERT = 7,
    CHASH = 8,
    V = 9,
    SP = 10,
    RAND = 11,
    ERR = 12,
    KEY_DATA = 20,
    GEN_EXT = 21,
}
export enum MIKEYSecProto {
    MIKEY_SEC_PROTO_SRTP = 0,
}
export enum MIKEYSecSRTP {
    ENC_ALG = 0,
    ENC_KEY_LEN = 1,
    AUTH_ALG = 2,
    AUTH_KEY_LEN = 3,
    SALT_KEY_LEN = 4,
    PRF = 5,
    KEY_DERIV_RATE = 6,
    SRTP_ENC = 7,
    SRTCP_ENC = 8,
    FEC_ORDER = 9,
    SRTP_AUTH = 10,
    AUTH_TAG_LEN = 11,
    SRTP_PREFIX_LEN = 12,
    AEAD_AUTH_TAG_LEN = 20,
}
export enum MIKEYTSType {
    NTP_UTC = 0,
    NTP = 1,
    COUNTER = 2,
}
export enum MIKEYType {
    INVALID = -1,
    PSK_INIT = 0,
    PSK_VERIFY = 1,
    PK_INIT = 2,
    PK_VERIFY = 3,
    DH_INIT = 4,
    DH_RESP = 5,
    ERROR = 6,
}
export enum SDPResult {
    OK = 0,
    EINVAL = -1,
}
export class MIKEYDecryptInfo  {
    constructor(config?: properties);
}
export class MIKEYEncryptInfo  {
    constructor(config?: properties);
}
export class MIKEYMapSRTP  {
    constructor(config?: properties);
    policy: number;
    ssrc: number;
    roc: number;
}
export class MIKEYMessage  {
    constructor(config?: properties);
    static new_from_bytes(bytes: GLib.Bytes, info: MIKEYDecryptInfo): MIKEYMessage;
    static new_from_caps(caps: Gst.Caps): MIKEYMessage;
    static new_from_data(data: number[], size: number, info: MIKEYDecryptInfo): MIKEYMessage;
    add_cs_srtp(policy: number, ssrc: number, roc: number): boolean;
    add_payload(payload: MIKEYPayload): boolean;
    add_pke(C: MIKEYCacheType, data_len: number, data: number[]): boolean;
    add_rand(len: number, rand: number[]): boolean;
    add_rand_len(len: number): boolean;
    add_t(type: MIKEYTSType, ts_value: number[]): boolean;
    add_t_now_ntp_utc(): boolean;
    base64_encode(): string;
    find_payload(type: MIKEYPayloadType, nth: number): MIKEYPayload;
    get_cs_srtp(idx: number): MIKEYMapSRTP;
    get_n_cs(): number;
    get_n_payloads(): number;
    get_payload(idx: number): MIKEYPayload;
    insert_cs_srtp(idx: number, map: MIKEYMapSRTP): boolean;
    insert_payload(idx: number, payload: MIKEYPayload): boolean;
    remove_cs_srtp(idx: number): boolean;
    remove_payload(idx: number): boolean;
    replace_cs_srtp(idx: number, map: MIKEYMapSRTP): boolean;
    replace_payload(idx: number, payload: MIKEYPayload): boolean;
    set_info(version: number, type: MIKEYType, V: boolean, prf_func: MIKEYPRFFunc, CSB_id: number, map_type: MIKEYMapType): boolean;
    to_bytes(info: MIKEYEncryptInfo): GLib.Bytes;
    to_caps(caps: Gst.Caps): boolean;
}
export class MIKEYPayload  {
    constructor(config?: properties);
    kemac_add_sub(newpay: MIKEYPayload): boolean;
    kemac_get_n_sub(): number;
    kemac_get_sub(idx: number): MIKEYPayload;
    kemac_remove_sub(idx: number): boolean;
    kemac_set(enc_alg: MIKEYEncAlg, mac_alg: MIKEYMacAlg): boolean;
    key_data_set_interval(vf_len: number, vf_data: number[], vt_len: number, vt_data: number[]): boolean;
    key_data_set_key(key_type: MIKEYKeyDataType, key_len: number, key_data: number[]): boolean;
    key_data_set_salt(salt_len: number, salt_data: number[] | null): boolean;
    key_data_set_spi(spi_len: number, spi_data: number[]): boolean;
    pke_set(C: MIKEYCacheType, data_len: number, data: number[]): boolean;
    rand_set(len: number, rand: number[]): boolean;
    sp_add_param(type: number, len: number, val: number[]): boolean;
    sp_get_n_params(): number;
    sp_get_param(idx: number): MIKEYPayloadSPParam;
    sp_remove_param(idx: number): boolean;
    sp_set(policy: number, proto: MIKEYSecProto): boolean;
    t_set(type: MIKEYTSType, ts_value: number[]): boolean;
}
export class MIKEYPayloadKEMAC  {
    constructor(config?: properties);
    pt: MIKEYPayload;
    enc_alg: MIKEYEncAlg;
    mac_alg: MIKEYMacAlg;
    subpayloads: object[];
}
export class MIKEYPayloadKeyData  {
    constructor(config?: properties);
    pt: MIKEYPayload;
    key_type: MIKEYKeyDataType;
    key_len: number;
    key_data: number;
    salt_len: number;
    salt_data: number;
    kv_type: MIKEYKVType;
    kv_len: number[];
    kv_data: number[];
}
export class MIKEYPayloadPKE  {
    constructor(config?: properties);
    pt: MIKEYPayload;
    C: MIKEYCacheType;
    data_len: number;
    data: number;
}
export class MIKEYPayloadRAND  {
    constructor(config?: properties);
    pt: MIKEYPayload;
    len: number;
    rand: number;
}
export class MIKEYPayloadSP  {
    constructor(config?: properties);
    pt: MIKEYPayload;
    policy: number;
    proto: MIKEYSecProto;
    params: object[];
}
export class MIKEYPayloadSPParam  {
    constructor(config?: properties);
    type: number;
    len: number;
    val: number;
}
export class MIKEYPayloadT  {
    constructor(config?: properties);
    pt: MIKEYPayload;
    type: MIKEYTSType;
    ts_value: number;
}
export class SDPAttribute  {
    constructor(config?: properties);
    key: string;
    value: string;
    clear(): SDPResult;
    set(key: string, value: string | null): SDPResult;
}
export class SDPBandwidth  {
    constructor(config?: properties);
    bwtype: string;
    bandwidth: number;
    clear(): SDPResult;
    set(bwtype: string, bandwidth: number): SDPResult;
}
export class SDPConnection  {
    constructor(config?: properties);
    nettype: string;
    addrtype: string;
    address: string;
    ttl: number;
    addr_number: number;
    clear(): SDPResult;
    set(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult;
}
export class SDPKey  {
    constructor(config?: properties);
    type: string;
    data: string;
}
export class SDPMedia  {
    constructor(config?: properties);
    media: string;
    port: number;
    num_ports: number;
    proto: string;
    fmts: object[];
    information: string;
    connections: object[];
    bandwidths: object[];
    key: SDPKey;
    attributes: object[];
    add_attribute(key: string, value: string | null): SDPResult;
    add_bandwidth(bwtype: string, bandwidth: number): SDPResult;
    add_connection(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult;
    add_format(format: string): SDPResult;
    as_text(): string;
    attributes_len(): number;
    attributes_to_caps(caps: Gst.Caps): SDPResult;
    bandwidths_len(): number;
    connections_len(): number;
    copy(): [SDPResult, SDPMedia];
    formats_len(): number;
    free(): SDPResult;
    get_attribute(idx: number): SDPAttribute;
    get_attribute_val(key: string): string;
    get_attribute_val_n(key: string, nth: number): string;
    get_bandwidth(idx: number): SDPBandwidth;
    get_caps_from_media(pt: number): Gst.Caps;
    get_connection(idx: number): SDPConnection;
    get_format(idx: number): string;
    get_information(): string;
    get_key(): SDPKey;
    get_media(): string;
    get_num_ports(): number;
    get_port(): number;
    get_proto(): string;
    init(): SDPResult;
    insert_attribute(idx: number, attr: SDPAttribute): SDPResult;
    insert_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
    insert_connection(idx: number, conn: SDPConnection): SDPResult;
    insert_format(idx: number, format: string): SDPResult;
    parse_keymgmt(): [SDPResult, MIKEYMessage];
    remove_attribute(idx: number): SDPResult;
    remove_bandwidth(idx: number): SDPResult;
    remove_connection(idx: number): SDPResult;
    remove_format(idx: number): SDPResult;
    replace_attribute(idx: number, attr: SDPAttribute): SDPResult;
    replace_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
    replace_connection(idx: number, conn: SDPConnection): SDPResult;
    replace_format(idx: number, format: string): SDPResult;
    set_information(information: string): SDPResult;
    set_key(type: string, data: string): SDPResult;
    set_media(med: string): SDPResult;
    set_port_info(port: number, num_ports: number): SDPResult;
    set_proto(proto: string): SDPResult;
    uninit(): SDPResult;
    static _new(): [SDPResult, SDPMedia];
    static set_media_from_caps(caps: Gst.Caps, media: SDPMedia): SDPResult;
}
export class SDPMessage  {
    constructor(config?: properties);
    version: string;
    origin: SDPOrigin;
    session_name: string;
    information: string;
    uri: string;
    emails: object[];
    phones: object[];
    connection: SDPConnection;
    bandwidths: object[];
    times: object[];
    zones: object[];
    key: SDPKey;
    attributes: object[];
    medias: object[];
    add_attribute(key: string, value: string | null): SDPResult;
    add_bandwidth(bwtype: string, bandwidth: number): SDPResult;
    add_email(email: string): SDPResult;
    add_media(media: SDPMedia): SDPResult;
    add_phone(phone: string): SDPResult;
    add_time(start: string, stop: string, repeat: string[]): SDPResult;
    add_zone(adj_time: string, typed_time: string): SDPResult;
    as_text(): string;
    attributes_len(): number;
    attributes_to_caps(caps: Gst.Caps): SDPResult;
    bandwidths_len(): number;
    copy(): [SDPResult, SDPMessage];
    dump(): SDPResult;
    emails_len(): number;
    free(): SDPResult;
    get_attribute(idx: number): SDPAttribute;
    get_attribute_val(key: string): string;
    get_attribute_val_n(key: string, nth: number): string;
    get_bandwidth(idx: number): SDPBandwidth;
    get_connection(): SDPConnection;
    get_email(idx: number): string;
    get_information(): string;
    get_key(): SDPKey;
    get_media(idx: number): SDPMedia;
    get_origin(): SDPOrigin;
    get_phone(idx: number): string;
    get_session_name(): string;
    get_time(idx: number): SDPTime;
    get_uri(): string;
    get_version(): string;
    get_zone(idx: number): SDPZone;
    init(): SDPResult;
    insert_attribute(idx: number, attr: SDPAttribute): SDPResult;
    insert_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
    insert_email(idx: number, email: string): SDPResult;
    insert_phone(idx: number, phone: string): SDPResult;
    insert_time(idx: number, t: SDPTime): SDPResult;
    insert_zone(idx: number, zone: SDPZone): SDPResult;
    medias_len(): number;
    parse_keymgmt(): [SDPResult, MIKEYMessage];
    phones_len(): number;
    remove_attribute(idx: number): SDPResult;
    remove_bandwidth(idx: number): SDPResult;
    remove_email(idx: number): SDPResult;
    remove_phone(idx: number): SDPResult;
    remove_time(idx: number): SDPResult;
    remove_zone(idx: number): SDPResult;
    replace_attribute(idx: number, attr: SDPAttribute): SDPResult;
    replace_bandwidth(idx: number, bw: SDPBandwidth): SDPResult;
    replace_email(idx: number, email: string): SDPResult;
    replace_phone(idx: number, phone: string): SDPResult;
    replace_time(idx: number, t: SDPTime): SDPResult;
    replace_zone(idx: number, zone: SDPZone): SDPResult;
    set_connection(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult;
    set_information(information: string): SDPResult;
    set_key(type: string, data: string): SDPResult;
    set_origin(username: string, sess_id: string, sess_version: string, nettype: string, addrtype: string, addr: string): SDPResult;
    set_session_name(session_name: string): SDPResult;
    set_uri(uri: string): SDPResult;
    set_version(version: string): SDPResult;
    times_len(): number;
    uninit(): SDPResult;
    zones_len(): number;
    static as_uri(scheme: string, msg: SDPMessage): string;
    static _new(): [SDPResult, SDPMessage];
    static new_from_text(text: string): [SDPResult, SDPMessage];
    static parse_buffer(data: number[], size: number, msg: SDPMessage): SDPResult;
    static parse_uri(uri: string, msg: SDPMessage): SDPResult;
}
export class SDPOrigin  {
    constructor(config?: properties);
    username: string;
    sess_id: string;
    sess_version: string;
    nettype: string;
    addrtype: string;
    addr: string;
}
export class SDPTime  {
    constructor(config?: properties);
    start: string;
    stop: string;
    repeat: object[];
    clear(): SDPResult;
    set(start: string, stop: string, repeat: string[]): SDPResult;
}
export class SDPZone  {
    constructor(config?: properties);
    time: string;
    typed_time: string;
    clear(): SDPResult;
    set(adj_time: string, typed_time: string): SDPResult;
}