
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gst from "gst";
import * as Farstream from "farstream";
/**
 * farstream.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const CODEC_FORMAT: string;
export const CODEC_ID_ANY: number;
export const CODEC_ID_DISABLE: number;
export const RTP_HEADER_EXTENSION_FORMAT: string;
/**
 * Copies a GList of #FsCandidate and its contents
 */
export function candidate_list_copy(candidate_list: GLib.List): GLib.List;
/**
 * Verifies if two glist of fscodecs are identical
 */
export function codec_list_are_equal(list1: GLib.List | null, list2: GLib.List | null): boolean;
/**
 * Copies a list of #FsCodec structures.
 */
export function codec_list_copy(codec_list: GLib.List): GLib.List;
/**
 * Reads the content of a #GKeyFile of the following format into
 * a #GList of #FsCodec structures.
 * Example:
 * |[
 * [audio/codec1]
 * clock-rate=8000
 * [audio/codec1:1]
 * clock-rate=16000
 * [audio/codec2]
 * one_param=QCIF
 * another_param=WOW
 * [video/codec3]
 * wierd_param=42
 * feedback:nack/pli=1
 * feedback:tfrc=
 * ]|
 */
export function codec_list_from_keyfile(filename: string): GLib.List;
/**
 * 
 */
export function error_quark(): GLib.Quark;
/**
 * Gives a user-printable string representing the media type
 */
export function media_type_to_string(media_type: MediaType): string;
/**
 * Parses a "farstream-farstream" message and checks if it matches
 * the @object parameters.
 */
export function parse_error(object: GObject.Object, message: Gst.Message): [boolean, Error,string];
/**
 * Does a deep copy of a #GList of #FsRtpHeaderExtension
 */
export function rtp_header_extension_list_copy(extensions: GLib.List): GLib.List;
/**
 * Reads the content of a #GKeyFile of the following format into a
 * #GList of #FsRtpHeaderExtension structures.
 * The groups have a format "rtp-hdrext:audio:XXX" or
 * "rtp-hdrext:video:XXX" where XXX is a unique string (per media type).
 * The valid keys are:
 * <itemizedlist>
 *  <listitem>id: a int between in the 1-255 and 4096-4351 ranges</listit
 * em>
 *  <listitem>uri: a URI describing the RTP Header Extension</listitem>
 *  <listitem>direction (optional): To only send or receive a RTP Header
 *      Extension, possible values are "send", "receive", "none" or "both
 * ".
 *      Defaults to "both"</listitem>
 * </itemizedlist>
 * Example:
 * |[
 * [rtp-hdrext:audio:a]
 * id=1
 * uri=urn:ietf:params:rtp-hdrext:toffset
 * [rtp-hdrext:audio:abc]
 * id=3
 * uri=urn:ietf:params:rtp-hdrext:ntp-64
 * direction=receive
 * ]|
 */
export function rtp_header_extension_list_from_keyfile(filename: string, media_type: MediaType): GLib.List;
/**
 * These default codec preferences should work with the elements that are
 * available in the main GStreamer element repositories.
 * They should be suitable for standards based protocols like SIP or XMPP
 * .
 */
export function utils_get_default_codec_preferences(element: Gst.Element): GLib.List;
/**
 * These default rtp header extension preferences should work with the el
 * ements
 * that are available in the main GStreamer element repositories.
 * They should be suitable for standards based protocols like SIP or XMPP
 * .
 */
export function utils_get_default_rtp_header_extension_preferences(element: Gst.Element, media_type: MediaType): GLib.List;
/**
 * This allows setting the bitrate on all elements that have a "bitrate"
 * property without having to know the type or of the unit used by that e
 * lement.
 * This will be obsolete in 0.11 (when all elements use bit/sec for the
 * "bitrate" property.
 */
export function utils_set_bitrate(element: Gst.Element, bitrate: number): void;
/**
 * This is for the bindings benefit. Works around the limitations of GObj
 * ect
 * introspection.
 */
export function value_set_candidate_list(value: GObject.Value, candidates: GLib.List | null): void;
export enum CandidateType {
    HOST = 0,
    SRFLX = 1,
    PRFLX = 2,
    RELAY = 3,
    MULTICAST = 4,
}
export enum ComponentType {
    NONE = 0,
    RTP = 1,
    RTCP = 2,
}
export enum DTMFEvent {
    "0" = 0,
    "1" = 1,
    "2" = 2,
    "3" = 3,
    "4" = 4,
    "5" = 5,
    "6" = 6,
    "7" = 7,
    "8" = 8,
    "9" = 9,
    STAR = 10,
    POUND = 11,
    A = 12,
    B = 13,
    C = 14,
    D = 15,
}
export enum DTMFMethod {
    RTP_RFC4733 = 1,
    SOUND = 2,
}
export enum Error {
    CONSTRUCTION = 1,
    INTERNAL = 2,
    INVALID_ARGUMENTS = 100,
    NETWORK = 101,
    NOT_IMPLEMENTED = 102,
    NEGOTIATION_FAILED = 103,
    UNKNOWN_CODEC = 104,
    NO_CODECS = 105,
    NO_CODECS_LEFT = 106,
    CONNECTION_FAILED = 107,
    DISPOSED = 108,
    ALREADY_EXISTS = 109,
}
export enum MediaType {
    AUDIO = 0,
    VIDEO = 1,
    APPLICATION = 2,
    LAST = 2,
}
export enum NetworkProtocol {
    UDP = 0,
    TCP = 1,
    TCP_PASSIVE = 1,
    TCP_ACTIVE = 2,
    TCP_SO = 3,
}
export enum StreamState {
    FAILED = 0,
    DISCONNECTED = 1,
    GATHERING = 2,
    CONNECTING = 3,
    CONNECTED = 4,
    READY = 5,
}
export type CandidateList = object;
export type CodecGList = object;
export type RtpHeaderExtensionGList = object;
export enum StreamDirection {
    NONE = 0,
    SEND = 1,
    RECV = 2,
    BOTH = 3,
}
export class Conference  {
    constructor(config?: properties);
    new_participant(): Participant;
    new_session(media_type: MediaType): Session;
}
export class ElementAddedNotifier extends GObject.Object {
    constructor(config?: properties);
    add(bin: Gst.Bin): void;
    remove(bin: Gst.Bin): boolean;
    set_default_properties(element: Gst.Element): number;
    set_properties_from_file(filename: string): boolean;
    set_properties_from_keyfile(keyfile: GLib.KeyFile): number;
}
export class Participant  {
    constructor(config?: properties);
    readonly mutex: GLib.Mutex;
    readonly priv: ParticipantPrivate;
}
export class Plugin  {
    constructor(config?: properties);
    readonly type: GType;
    readonly name: string;
    readonly priv: PluginPrivate;
    readonly unused: object[];
    static list_available(type_suffix: string): string[];
    static register_static(name: string, type_suffix: string, type: GType): void;
}
export class Session  {
    constructor(config?: properties);
    readonly allowed_sink_caps: Gst.Caps;
    readonly allowed_src_caps: Gst.Caps;
    readonly codec_preferences: GLib.List;
    readonly codecs: GLib.List;
    readonly codecs_without_config: GLib.List;
    conference: Conference;
    readonly current_send_codec: Codec;
    readonly encryption_parameters: Gst.Structure;
    id: number;
    media_type: MediaType;
    readonly sink_pad: Gst.Pad;
    tos: number;
    readonly priv: SessionPrivate;
    codecs_need_resend(old_codecs: GLib.List | null, new_codecs: GLib.List | null): GLib.List;
    destroy(): void;
    emit_error(error_no: number, error_msg: string): void;
    get_stream_transmitter_type(transmitter: string): GType;
    list_transmitters(): string[];
    new_stream(participant: Participant, direction: StreamDirection): Stream;
    parse_codecs_changed(message: Gst.Message): boolean;
    parse_send_codec_changed(message: Gst.Message): [boolean, Codec,GLib.List];
    parse_telephony_event_started(message: Gst.Message): [boolean, DTMFMethod,DTMFEvent,number];
    parse_telephony_event_stopped(message: Gst.Message): [boolean, DTMFMethod];
    set_allowed_caps(sink_caps: Gst.Caps | null, src_caps: Gst.Caps | null): boolean;
    set_codec_preferences(codec_preferences: GLib.List | null): boolean;
    set_encryption_parameters(parameters: Gst.Structure | null): boolean;
    set_send_codec(send_codec: Codec): boolean;
    start_telephony_event(event: number, volume: number): boolean;
    stop_telephony_event(): boolean;
}
export class Stream  {
    constructor(config?: properties);
    readonly current_recv_codecs: GLib.List;
    readonly decryption_parameters: Gst.Structure;
    direction: StreamDirection;
    readonly negotiated_codecs: GLib.List;
    participant: Participant;
    readonly remote_codecs: GLib.List;
    require_encryption: boolean;
    session: Session;
    readonly priv: StreamPrivate;
    add_id(id: number): void;
    add_remote_candidates(candidates: GLib.List): boolean;
    destroy(): void;
    emit_error(error_no: number, error_msg: string): void;
    emit_src_pad_added(pad: Gst.Pad, codec: Codec): void;
    force_remote_candidates(remote_candidates: GLib.List): boolean;
    iterate_src_pads(): Gst.Iterator;
    parse_component_state_changed(message: Gst.Message): [boolean, number,StreamState];
    parse_local_candidates_prepared(message: Gst.Message): boolean;
    parse_new_active_candidate_pair(message: Gst.Message): [boolean, Candidate,Candidate];
    parse_new_local_candidate(message: Gst.Message): [boolean, Candidate];
    parse_recv_codecs_changed(message: Gst.Message): [boolean, GLib.List];
    set_decryption_parameters(parameters: Gst.Structure): boolean;
    set_remote_codecs(remote_codecs: GLib.List): boolean;
    set_transmitter(transmitter: string, stream_transmitter_parameters: GObject.Parameter[] | null, stream_transmitter_n_parameters: number): boolean;
    set_transmitter_ht(transmitter: string, stream_transmitter_parameters: GLib.HashTable | null): boolean;
}
export class StreamTransmitter  {
    constructor(config?: properties);
    associate_on_source: boolean;
    preferred_local_candidates: CandidateList;
    sending: boolean;
    readonly priv: StreamTransmitterPrivate;
    add_remote_candidates(candidates: GLib.List): boolean;
    emit_error(error_no: number, error_msg: string): void;
    force_remote_candidates(remote_candidates: GLib.List): boolean;
    gather_local_candidates(): boolean;
    stop(): void;
}
export class Transmitter extends GObject.Object {
    constructor(config?: properties);
    components: number;
    do_timestamp: boolean;
    readonly gst_sink: Gst.Element;
    readonly gst_src: Gst.Element;
    tos: number;
    emit_error(error_no: number, error_msg: string): void;
    get_stream_transmitter_type(): GType;
    new_stream_transmitter(participant: Participant, n_parameters: number, parameters: GObject.Parameter): StreamTransmitter;
    vfunc_get_stream_transmitter_type(): GType;
    vfunc_new_stream_transmitter(participant: Participant, n_parameters: number, parameters: GObject.Parameter): StreamTransmitter;
    static list_available(): string[];
}
export class Candidate  {
    constructor(config?: properties);
    static new_full(foundation: string, component_id: number, ip: string | null, port: number, base_ip: string | null, base_port: number, proto: NetworkProtocol, priority: number, type: CandidateType, username: string | null, password: string | null, ttl: number): Candidate;
    copy(): Candidate;
}
export class Codec  {
    constructor(config?: properties);
    add_feedback_parameter(type: string, subtype: string, extra_params: string): void;
    add_optional_parameter(name: string, value: string): void;
    are_equal(codec2: Codec): boolean;
    copy(): Codec;
    get_feedback_parameter(type: string | null, subtype: string | null, extra_params: string | null): FeedbackParameter;
    get_optional_parameter(name: string, value: string | null): CodecParameter;
    remove_feedback_parameter(item: GLib.List): void;
    remove_optional_parameter(param: CodecParameter): void;
    to_string(): string;
}
export class CodecParameter  {
    constructor(config?: properties);
    name: string;
    value: string;
    copy(): CodecParameter;
    free(): void;
}
export class ElementAddedNotifierPrivate  {
    constructor(config?: properties);
}
export class FeedbackParameter  {
    constructor(config?: properties);
    type: string;
    subtype: string;
    extra_params: string;
    copy(): FeedbackParameter;
    free(): void;
}
export class ParticipantPrivate  {
    constructor(config?: properties);
}
export class PluginPrivate  {
    constructor(config?: properties);
}
export class RtpHeaderExtension  {
    constructor(config?: properties);
    are_equal(extension2: RtpHeaderExtension): boolean;
}
export class SessionPrivate  {
    constructor(config?: properties);
}
export class StreamPrivate  {
    constructor(config?: properties);
}
export class StreamTransmitterPrivate  {
    constructor(config?: properties);
}
export class TransmitterPrivate  {
    constructor(config?: properties);
}