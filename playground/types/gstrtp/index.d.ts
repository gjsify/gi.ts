
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gst from "gst";
import * as GstBase from "gstbase";
import * as GstRtp from "gstrtp";
/**
 * gstrtp.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const RTCP_MAX_BYE_SSRC_COUNT: number;
export const RTCP_MAX_RB_COUNT: number;
export const RTCP_MAX_SDES: number;
export const RTCP_MAX_SDES_ITEM_COUNT: number;
export const RTCP_REDUCED_SIZE_VALID_MASK: number;
export const RTCP_VALID_MASK: number;
export const RTCP_VALID_VALUE: number;
export const RTCP_VERSION: number;
export const RTP_HDREXT_BASE: string;
export const RTP_HDREXT_NTP_56: string;
export const RTP_HDREXT_NTP_56_SIZE: number;
export const RTP_HDREXT_NTP_64: string;
export const RTP_HDREXT_NTP_64_SIZE: number;
export const RTP_PAYLOAD_1016_STRING: string;
export const RTP_PAYLOAD_CELLB_STRING: string;
export const RTP_PAYLOAD_CN_STRING: string;
export const RTP_PAYLOAD_DVI4_11025_STRING: string;
export const RTP_PAYLOAD_DVI4_16000_STRING: string;
export const RTP_PAYLOAD_DVI4_22050_STRING: string;
export const RTP_PAYLOAD_DVI4_8000_STRING: string;
export const RTP_PAYLOAD_DYNAMIC_STRING: string;
export const RTP_PAYLOAD_G721_STRING: string;
export const RTP_PAYLOAD_G722_STRING: string;
export const RTP_PAYLOAD_G723_53: number;
export const RTP_PAYLOAD_G723_53_STRING: string;
export const RTP_PAYLOAD_G723_63: number;
export const RTP_PAYLOAD_G723_63_STRING: string;
export const RTP_PAYLOAD_G723_STRING: string;
export const RTP_PAYLOAD_G728_STRING: string;
export const RTP_PAYLOAD_G729_STRING: string;
export const RTP_PAYLOAD_GSM_STRING: string;
export const RTP_PAYLOAD_H261_STRING: string;
export const RTP_PAYLOAD_H263_STRING: string;
export const RTP_PAYLOAD_JPEG_STRING: string;
export const RTP_PAYLOAD_L16_MONO_STRING: string;
export const RTP_PAYLOAD_L16_STEREO_STRING: string;
export const RTP_PAYLOAD_LPC_STRING: string;
export const RTP_PAYLOAD_MP2T_STRING: string;
export const RTP_PAYLOAD_MPA_STRING: string;
export const RTP_PAYLOAD_MPV_STRING: string;
export const RTP_PAYLOAD_NV_STRING: string;
export const RTP_PAYLOAD_PCMA_STRING: string;
export const RTP_PAYLOAD_PCMU_STRING: string;
export const RTP_PAYLOAD_QCELP_STRING: string;
export const RTP_PAYLOAD_TS41: number;
export const RTP_PAYLOAD_TS41_STRING: string;
export const RTP_PAYLOAD_TS48: number;
export const RTP_PAYLOAD_TS48_STRING: string;
export const RTP_SOURCE_META_MAX_CSRC_COUNT: number;
export const RTP_VERSION: number;
/**
 * Attaches RTP source information to @buffer.
 */
export function buffer_add_rtp_source_meta(buffer: Gst.Buffer, ssrc: number | null, csrc: number | null, csrc_count: number): RTPSourceMeta;
/**
 * Find the #GstRTPSourceMeta on @buffer.
 */
export function buffer_get_rtp_source_meta(buffer: Gst.Buffer): RTPSourceMeta;
/**
 * Open @buffer for reading or writing, depending on @flags. The resultin
 * g RTCP
 * buffer state is stored in @rtcp.
 */
export function rtcp_buffer_map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean;
/**
 * Create a new buffer for constructing RTCP packets. The packet will hav
 * e a
 * maximum size of @mtu.
 */
export function rtcp_buffer_new(mtu: number): Gst.Buffer;
/**
 * Create a new buffer and set the data to a copy of @len
 * bytes of @data and the size to @len. The data will be freed when the b
 * uffer
 * is freed.
 */
export function rtcp_buffer_new_copy_data(data: number[], len: number): Gst.Buffer;
/**
 * Create a new buffer and set the data and size of the buffer to @data a
 * nd @len
 * respectively. @data will be freed when the buffer is unreffed, so this
 * function transfers ownership of @data to the new buffer.
 */
export function rtcp_buffer_new_take_data(data: number[], len: number): Gst.Buffer;
/**
 * Check if the data pointed to by @buffer is a valid RTCP packet using
 * gst_rtcp_buffer_validate_data().
 */
export function rtcp_buffer_validate(buffer: Gst.Buffer): boolean;
/**
 * Check if the @data and @size point to the data of a valid compound,
 * non-reduced size RTCP packet.
 * Use this function to validate a packet before using the other function
 * s in
 * this module.
 */
export function rtcp_buffer_validate_data(data: number[], len: number): boolean;
/**
 * Check if the @data and @size point to the data of a valid RTCP packet.
 * Use this function to validate a packet before using the other function
 * s in
 * this module.
 * This function is updated to support reduced size rtcp packets accordin
 * g to
 * RFC 5506 and will validate full compound RTCP packets as well as reduc
 * ed
 * size RTCP packets.
 */
export function rtcp_buffer_validate_data_reduced(data: number[], len: number): boolean;
/**
 * Check if the data pointed to by @buffer is a valid RTCP packet using
 * gst_rtcp_buffer_validate_reduced().
 */
export function rtcp_buffer_validate_reduced(buffer: Gst.Buffer): boolean;
/**
 * Converts an NTP time to UNIX nanoseconds. @ntptime can typically be
 * the NTP time of an SR RTCP message and contains, in the upper 32 bits,
 *  the
 * number of seconds since 1900 and, in the lower 32 bits, the fractional
 * seconds. The resulting value will be the number of nanoseconds since 1
 * 970.
 */
export function rtcp_ntp_to_unix(ntptime: number): number;
/**
 * Convert @name into a @GstRTCPSDESType. @name is typically a key in a
 * #GstStructure containing SDES items.
 */
export function rtcp_sdes_name_to_type(name: string): RTCPSDESType;
/**
 * Converts @type to the string equivalent. The string is typically used 
 * as a
 * key in a #GstStructure containing SDES items.
 */
export function rtcp_sdes_type_to_name(type: RTCPSDESType): string;
/**
 * Converts a UNIX timestamp in nanoseconds to an NTP time. The caller sh
 * ould
 * pass a value with nanoseconds since 1970. The NTP time will, in the up
 * per
 * 32 bits, contain the number of seconds since 1900 and, in the lower 32
 * bits, the fractional seconds. The resulting value can be used as an nt
 * ptime
 * for constructing SR RTCP packets.
 */
export function rtcp_unix_to_ntp(unixtime: number): number;
/**
 * Allocate enough data in @buffer to hold an RTP packet with @csrc_count
 *  CSRCs,
 * a payload length of @payload_len and padding of @pad_len.
 * @buffer must be writable and all previous memory in @buffer will be fr
 * eed.
 * If @pad_len is >0, the padding bit will be set. All other RTP header f
 * ields
 * will be set to 0/FALSE.
 */
export function rtp_buffer_allocate_data(buffer: Gst.Buffer, payload_len: number, pad_len: number, csrc_count: number): void;
/**
 * Calculate the header length of an RTP packet with @csrc_count CSRC ent
 * ries.
 * An RTP packet can have at most 15 CSRC entries.
 */
export function rtp_buffer_calc_header_len(csrc_count: number): number;
/**
 * Calculate the total length of an RTP packet with a payload size of @pa
 * yload_len,
 * a padding of @pad_len and a @csrc_count CSRC entries.
 */
export function rtp_buffer_calc_packet_len(payload_len: number, pad_len: number, csrc_count: number): number;
/**
 * Calculate the length of the payload of an RTP packet with size @packet
 * _len,
 * a padding of @pad_len and a @csrc_count CSRC entries.
 */
export function rtp_buffer_calc_payload_len(packet_len: number, pad_len: number, csrc_count: number): number;
/**
 * Compare two sequence numbers, taking care of wraparounds. This functio
 * n
 * returns the difference between @seqnum1 and @seqnum2.
 */
export function rtp_buffer_compare_seqnum(seqnum1: number, seqnum2: number): number;
/**
 * Get the default clock-rate for the static payload type @payload_type.
 */
export function rtp_buffer_default_clock_rate(payload_type: number): number;
/**
 * Update the @exttimestamp field with the extended timestamp of @timesta
 * mp
 * For the first call of the method, @exttimestamp should point to a loca
 * tion
 * with a value of -1.
 * This function is able to handle both forward and backward timestamps t
 * aking
 * into account:
 *   - timestamp wraparound making sure that the returned value is proper
 * ly increased.
 *   - timestamp unwraparound making sure that the returned value is prop
 * erly decreased.
 */
export function rtp_buffer_ext_timestamp(exttimestamp: number, timestamp: number): [number, number];
/**
 * Map the contents of @buffer into @rtp.
 */
export function rtp_buffer_map(buffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, RTPBuffer];
/**
 * Allocate a new #GstBuffer with enough data to hold an RTP packet with
 * @csrc_count CSRCs, a payload length of @payload_len and padding of @pa
 * d_len.
 * All other RTP header fields will be set to 0/FALSE.
 */
export function rtp_buffer_new_allocate(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
/**
 * Create a new #GstBuffer that can hold an RTP packet that is exactly
 * @packet_len long. The length of the payload depends on @pad_len and
 * @csrc_count and can be calculated with gst_rtp_buffer_calc_payload_len
 * ().
 * All RTP header fields will be set to 0/FALSE.
 */
export function rtp_buffer_new_allocate_len(packet_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
/**
 * Create a new buffer and set the data to a copy of @len
 * bytes of @data and the size to @len. The data will be freed when the b
 * uffer
 * is freed.
 */
export function rtp_buffer_new_copy_data(data: number[], len: number): Gst.Buffer;
/**
 * Create a new buffer and set the data and size of the buffer to @data a
 * nd @len
 * respectively. @data will be freed when the buffer is unreffed, so this
 * function transfers ownership of @data to the new buffer.
 */
export function rtp_buffer_new_take_data(data: number[], len: number): Gst.Buffer;
/**
 * Reads the NTP time from the @size NTP-56 extension bytes in @data and 
 * store the
 * result in @ntptime.
 */
export function rtp_hdrext_get_ntp_56(data: number[], size: number): [boolean, number];
/**
 * Reads the NTP time from the @size NTP-64 extension bytes in @data and 
 * store the
 * result in @ntptime.
 */
export function rtp_hdrext_get_ntp_64(data: number[], size: number): [boolean, number];
/**
 * Writes the NTP time in @ntptime to the format required for the NTP-56 
 * header
 * extension. @data must hold at least #GST_RTP_HDREXT_NTP_56_SIZE bytes.
 */
export function rtp_hdrext_set_ntp_56(data: object | null, size: number, ntptime: number): boolean;
/**
 * Writes the NTP time in @ntptime to the format required for the NTP-64 
 * header
 * extension. @data must hold at least #GST_RTP_HDREXT_NTP_64_SIZE bytes.
 */
export function rtp_hdrext_set_ntp_64(data: object | null, size: number, ntptime: number): boolean;
/**
 * Get the #GstRTPPayloadInfo for @media and @encoding_name. This functio
 * n is
 * mostly used to get the default clock-rate and bandwidth for dynamic pa
 * yload
 * types specified with @media and @encoding name.
 * The search for @encoding_name will be performed in a case insensitve w
 * ay.
 */
export function rtp_payload_info_for_name(media: string, encoding_name: string): RTPPayloadInfo;
/**
 * Get the #GstRTPPayloadInfo for @payload_type. This function is
 * mostly used to get the default clock-rate and bandwidth for static pay
 * load
 * types specified with @payload_type.
 */
export function rtp_payload_info_for_pt(payload_type: number): RTPPayloadInfo;
/**
 * 
 */
export function rtp_source_meta_api_get_type(): GType;
/**
 * 
 */
export function rtp_source_meta_get_info(): Gst.MetaInfo;
export enum RTCPFBType {
    FB_TYPE_INVALID = 0,
    RTPFB_TYPE_NACK = 1,
    RTPFB_TYPE_TMMBR = 3,
    RTPFB_TYPE_TMMBN = 4,
    RTPFB_TYPE_RTCP_SR_REQ = 5,
    PSFB_TYPE_PLI = 1,
    PSFB_TYPE_SLI = 2,
    PSFB_TYPE_RPSI = 3,
    PSFB_TYPE_AFB = 15,
    PSFB_TYPE_FIR = 4,
    PSFB_TYPE_TSTR = 5,
    PSFB_TYPE_TSTN = 6,
    PSFB_TYPE_VBCN = 7,
}
export enum RTCPSDESType {
    INVALID = -1,
    END = 0,
    CNAME = 1,
    NAME = 2,
    EMAIL = 3,
    PHONE = 4,
    LOC = 5,
    TOOL = 6,
    NOTE = 7,
    PRIV = 8,
}
export enum RTCPType {
    INVALID = 0,
    SR = 200,
    RR = 201,
    SDES = 202,
    BYE = 203,
    APP = 204,
    RTPFB = 205,
    PSFB = 206,
    XR = 207,
}
export enum RTCPXRType {
    INVALID = -1,
    LRLE = 1,
    DRLE = 2,
    PRT = 3,
    RRT = 4,
    DLRR = 5,
    SSUMM = 6,
    VOIP_METRICS = 7,
}
export enum RTPPayload {
    PCMU = 0,
    "1016" = 1,
    G721 = 2,
    GSM = 3,
    G723 = 4,
    DVI4_8000 = 5,
    DVI4_16000 = 6,
    LPC = 7,
    PCMA = 8,
    G722 = 9,
    L16_STEREO = 10,
    L16_MONO = 11,
    QCELP = 12,
    CN = 13,
    MPA = 14,
    G728 = 15,
    DVI4_11025 = 16,
    DVI4_22050 = 17,
    G729 = 18,
    CELLB = 25,
    JPEG = 26,
    NV = 28,
    H261 = 31,
    MPV = 32,
    MP2T = 33,
    H263 = 34,
}
export enum RTPProfile {
    UNKNOWN = 0,
    AVP = 1,
    SAVP = 2,
    AVPF = 3,
    SAVPF = 4,
}
export enum RTPBufferFlags {
    RETRANSMISSION = 1048576,
    REDUNDANT = 2097152,
    LAST = 268435456,
}
export enum RTPBufferMapFlags {
    SKIP_PADDING = 65536,
    LAST = 16777216,
}
export class RTPBaseAudioPayload  {
    constructor(config?: properties);
    buffer_list: boolean;
    readonly payload: RTPBasePayload;
    readonly priv: RTPBaseAudioPayloadPrivate;
    readonly base_ts: Gst.ClockTime;
    readonly frame_size: number;
    readonly frame_duration: number;
    readonly sample_size: number;
    flush(payload_len: number, timestamp: Gst.ClockTime): Gst.FlowReturn;
    get_adapter(): GstBase.Adapter;
    push(data: number[], payload_len: number, timestamp: Gst.ClockTime): Gst.FlowReturn;
    set_frame_based(): void;
    set_frame_options(frame_duration: number, frame_size: number): void;
    set_sample_based(): void;
    set_sample_options(sample_size: number): void;
    set_samplebits_options(sample_size: number): void;
}
export class RTPBaseDepayload  {
    constructor(config?: properties);
    source_info: boolean;
    readonly stats: Gst.Structure;
    readonly sinkpad: Gst.Pad;
    readonly srcpad: Gst.Pad;
    readonly clock_rate: number;
    readonly segment: Gst.Segment;
    readonly need_newsegment: boolean;
    readonly priv: RTPBaseDepayloadPrivate;
    is_source_info_enabled(): boolean;
    push(out_buf: Gst.Buffer): Gst.FlowReturn;
    push_list(out_list: Gst.BufferList): Gst.FlowReturn;
    set_source_info_enabled(enable: boolean): void;
}
export class RTPBasePayload  {
    constructor(config?: properties);
    max_ptime: number;
    min_ptime: number;
    mtu: number;
    onvif_no_rate_control: boolean;
    perfect_rtptime: boolean;
    pt: number;
    ptime_multiple: number;
    readonly seqnum: number;
    seqnum_offset: number;
    source_info: boolean;
    ssrc: number;
    readonly stats: Gst.Structure;
    readonly timestamp: number;
    timestamp_offset: number;
    readonly element: Gst.Element;
    readonly sinkpad: Gst.Pad;
    readonly srcpad: Gst.Pad;
    readonly ts_base: number;
    readonly seqnum_base: number;
    readonly media: string;
    readonly encoding_name: string;
    readonly dynamic: boolean;
    readonly clock_rate: number;
    readonly ts_offset: number;
    readonly current_ssrc: number;
    readonly segment: Gst.Segment;
    readonly ptime: number;
    readonly priv: RTPBasePayloadPrivate;
    allocate_output_buffer(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
    get_source_count(buffer: Gst.Buffer): number;
    is_filled(size: number, duration: Gst.ClockTime): boolean;
    is_source_info_enabled(): boolean;
    push(buffer: Gst.Buffer): Gst.FlowReturn;
    push_list(list: Gst.BufferList): Gst.FlowReturn;
    set_options(media: string, dynamic: boolean, encoding_name: string, clock_rate: number): void;
    set_source_info_enabled(enable: boolean): void;
}
export class RTCPBuffer  {
    constructor(config?: properties);
    buffer: Gst.Buffer;
    add_packet(type: RTCPType, packet: RTCPPacket): boolean;
    get_first_packet(packet: RTCPPacket): boolean;
    get_packet_count(): number;
    unmap(): boolean;
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean;
    static _new(mtu: number): Gst.Buffer;
    static new_copy_data(data: number[], len: number): Gst.Buffer;
    static new_take_data(data: number[], len: number): Gst.Buffer;
    static validate(buffer: Gst.Buffer): boolean;
    static validate_data(data: number[], len: number): boolean;
    static validate_data_reduced(data: number[], len: number): boolean;
    static validate_reduced(buffer: Gst.Buffer): boolean;
}
export class RTCPPacket  {
    constructor(config?: properties);
    rtcp: RTCPBuffer;
    offset: number;
    readonly padding: boolean;
    readonly count: number;
    readonly type: RTCPType;
    readonly length: number;
    readonly item_offset: number;
    readonly item_count: number;
    readonly entry_offset: number;
    add_profile_specific_ext(data: number[], len: number): boolean;
    add_rb(ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): boolean;
    app_get_data(): number;
    app_get_data_length(): number;
    app_get_name(): string;
    app_get_ssrc(): number;
    app_get_subtype(): number;
    app_set_data_length(wordlen: number): boolean;
    app_set_name(name: string): void;
    app_set_ssrc(ssrc: number): void;
    app_set_subtype(subtype: number): void;
    bye_add_ssrc(ssrc: number): boolean;
    bye_add_ssrcs(ssrc: number[], len: number): boolean;
    bye_get_nth_ssrc(nth: number): number;
    bye_get_reason(): string;
    bye_get_reason_len(): number;
    bye_get_ssrc_count(): number;
    bye_set_reason(reason: string): boolean;
    copy_profile_specific_ext(): [boolean, number[],number];
    fb_get_fci(): number;
    fb_get_fci_length(): number;
    fb_get_media_ssrc(): number;
    fb_get_sender_ssrc(): number;
    fb_get_type(): RTCPFBType;
    fb_set_fci_length(wordlen: number): boolean;
    fb_set_media_ssrc(ssrc: number): void;
    fb_set_sender_ssrc(ssrc: number): void;
    fb_set_type(type: RTCPFBType): void;
    get_count(): number;
    get_length(): number;
    get_padding(): boolean;
    get_profile_specific_ext(): [boolean, number[],number];
    get_profile_specific_ext_length(): number;
    get_rb(nth: number): [number,number,number,number,number,number,number];
    get_rb_count(): number;
    get_type(): RTCPType;
    move_to_next(): boolean;
    remove(): boolean;
    rr_get_ssrc(): number;
    rr_set_ssrc(ssrc: number): void;
    sdes_add_entry(type: RTCPSDESType, len: number, data: number[]): boolean;
    sdes_add_item(ssrc: number): boolean;
    sdes_copy_entry(type: RTCPSDESType): [boolean, number,number[]];
    sdes_first_entry(): boolean;
    sdes_first_item(): boolean;
    sdes_get_entry(type: RTCPSDESType): [boolean, number,number[]];
    sdes_get_item_count(): number;
    sdes_get_ssrc(): number;
    sdes_next_entry(): boolean;
    sdes_next_item(): boolean;
    set_rb(nth: number, ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): void;
    sr_get_sender_info(): [number,number,number,number,number];
    sr_set_sender_info(ssrc: number, ntptime: number, rtptime: number, packet_count: number, octet_count: number): void;
    xr_first_rb(): boolean;
    xr_get_block_length(): number;
    xr_get_block_type(): RTCPXRType;
    xr_get_dlrr_block(nth: number, ssrc: number, last_rr: number, delay: number): boolean;
    xr_get_prt_by_seq(seq: number, receipt_time: number): boolean;
    xr_get_prt_info(ssrc: number, thinning: number, begin_seq: number, end_seq: number): boolean;
    xr_get_rle_info(ssrc: number, thinning: number, begin_seq: number, end_seq: number, chunk_count: number): boolean;
    xr_get_rle_nth_chunk(nth: number, chunk: number): boolean;
    xr_get_rrt(timestamp: number): boolean;
    xr_get_ssrc(): number;
    xr_get_summary_info(ssrc: number, begin_seq: number, end_seq: number): boolean;
    xr_get_summary_jitter(min_jitter: number, max_jitter: number, mean_jitter: number, dev_jitter: number): boolean;
    xr_get_summary_pkt(lost_packets: number, dup_packets: number): boolean;
    xr_get_summary_ttl(is_ipv4: boolean, min_ttl: number, max_ttl: number, mean_ttl: number, dev_ttl: number): boolean;
    xr_get_voip_burst_metrics(burst_density: number, gap_density: number, burst_duration: number, gap_duration: number): boolean;
    xr_get_voip_configuration_params(gmin: number, rx_config: number): boolean;
    xr_get_voip_delay_metrics(roundtrip_delay: number, end_system_delay: number): boolean;
    xr_get_voip_jitter_buffer_params(jb_nominal: number, jb_maximum: number, jb_abs_max: number): boolean;
    xr_get_voip_metrics_ssrc(ssrc: number): boolean;
    xr_get_voip_packet_metrics(loss_rate: number, discard_rate: number): boolean;
    xr_get_voip_quality_metrics(r_factor: number, ext_r_factor: number, mos_lq: number, mos_cq: number): boolean;
    xr_get_voip_signal_metrics(signal_level: number, noise_level: number, rerl: number, gmin: number): boolean;
    xr_next_rb(): boolean;
}
export class RTPBaseAudioPayloadPrivate  {
    constructor(config?: properties);
}
export class RTPBaseDepayloadPrivate  {
    constructor(config?: properties);
}
export class RTPBasePayloadPrivate  {
    constructor(config?: properties);
}
export class RTPBuffer  {
    constructor(config?: properties);
    buffer: Gst.Buffer;
    state: number;
    data: object[];
    size: number[];
    add_extension_onebyte_header(id: number, data: number[], size: number): boolean;
    add_extension_twobytes_header(appbits: number, id: number, data: number[], size: number): boolean;
    get_csrc(idx: number): number;
    get_csrc_count(): number;
    get_extension(): boolean;
    get_extension_bytes(): [GLib.Bytes, number];
    get_extension_onebyte_header(id: number, nth: number): [boolean, number[],number];
    get_extension_twobytes_header(id: number, nth: number): [boolean, number,number[],number];
    get_header_len(): number;
    get_marker(): boolean;
    get_packet_len(): number;
    get_padding(): boolean;
    get_payload_buffer(): Gst.Buffer;
    get_payload_bytes(): GLib.Bytes;
    get_payload_len(): number;
    get_payload_subbuffer(offset: number, len: number): Gst.Buffer;
    get_payload_type(): number;
    get_seq(): number;
    get_ssrc(): number;
    get_timestamp(): number;
    get_version(): number;
    pad_to(len: number): void;
    set_csrc(idx: number, csrc: number): void;
    set_extension(extension: boolean): void;
    set_extension_data(bits: number, length: number): boolean;
    set_marker(marker: boolean): void;
    set_packet_len(len: number): void;
    set_padding(padding: boolean): void;
    set_payload_type(payload_type: number): void;
    set_seq(seq: number): void;
    set_ssrc(ssrc: number): void;
    set_timestamp(timestamp: number): void;
    set_version(version: number): void;
    unmap(): void;
    static allocate_data(buffer: Gst.Buffer, payload_len: number, pad_len: number, csrc_count: number): void;
    static calc_header_len(csrc_count: number): number;
    static calc_packet_len(payload_len: number, pad_len: number, csrc_count: number): number;
    static calc_payload_len(packet_len: number, pad_len: number, csrc_count: number): number;
    static compare_seqnum(seqnum1: number, seqnum2: number): number;
    static default_clock_rate(payload_type: number): number;
    static ext_timestamp(exttimestamp: number, timestamp: number): [number, number];
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags): [boolean, RTPBuffer];
    static new_allocate(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
    static new_allocate_len(packet_len: number, pad_len: number, csrc_count: number): Gst.Buffer;
    static new_copy_data(data: number[], len: number): Gst.Buffer;
    static new_take_data(data: number[], len: number): Gst.Buffer;
}
export class RTPPayloadInfo  {
    constructor(config?: properties);
    payload_type: number;
    media: string;
    encoding_name: string;
    clock_rate: number;
    encoding_parameters: string;
    bitrate: number;
    static for_name(media: string, encoding_name: string): RTPPayloadInfo;
    static for_pt(payload_type: number): RTPPayloadInfo;
}
export class RTPSourceMeta  {
    constructor(config?: properties);
    meta: Gst.Meta;
    ssrc: number;
    ssrc_valid: boolean;
    csrc: number[];
    csrc_count: number;
    append_csrc(csrc: number, csrc_count: number): boolean;
    get_source_count(): number;
    set_ssrc(ssrc: number | null): boolean;
    static get_info(): Gst.MetaInfo;
}