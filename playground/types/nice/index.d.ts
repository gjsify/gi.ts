
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Nice from "nice";
/**
 * nice.d.ts
 */
type properties = { [key: string]: any };
export type AgentRecvFunc = (agent: Agent, stream_id: number, component_id: number, len: number, buf: string, user_data: object | null) => void;
export const AGENT_MAX_REMOTE_CANDIDATES: number;
export const CANDIDATE_DIRECTION_MS_PREF_ACTIVE: number;
export const CANDIDATE_DIRECTION_MS_PREF_PASSIVE: number;
export const CANDIDATE_MAX_FOUNDATION: number;
export const CANDIDATE_TRANSPORT_MS_PREF_TCP: number;
export const CANDIDATE_TRANSPORT_MS_PREF_UDP: number;
export const CANDIDATE_TYPE_PREF_HOST: number;
export const CANDIDATE_TYPE_PREF_NAT_ASSISTED: number;
export const CANDIDATE_TYPE_PREF_PEER_REFLEXIVE: number;
export const CANDIDATE_TYPE_PREF_RELAYED: number;
export const CANDIDATE_TYPE_PREF_RELAYED_UDP: number;
export const CANDIDATE_TYPE_PREF_SERVER_REFLEXIVE: number;
/**
 * Returns a string representation of the state, generally to use in debu
 * g
 * messages.
 */
export function component_state_to_string(state: ComponentState): string;
/**
 * Disables libnice debug output to the terminal
 */
export function debug_disable(with_stun: boolean): void;
/**
 * Enables libnice debug output to the terminal. Note that the
 * `G_MESSAGES_DEBUG` and `NICE_DEBUG` environment variables must be set 
 * to the
 * set of logging domains to print, in order for any output to be printed
 * . Set
 * them to `all` to print all debugging messages, or any of the following
 * domains:
 * - `libnice-stun`
 * - `libnice-tests`
 * - `libnice-socket`
 * - `libnice`
 * - `libnice-pseudotcp`
 * - `libnice-pseudotcp-verbose`
 */
export function debug_enable(with_stun: boolean): void;
/**
 * Retrieves the IP address of an interface by its name. If this fails, %
 * NULL
 * is returned.
 */
export function interfaces_get_ip_for_interface(interface_name: string): string | null;
/**
 * Get the list of local interfaces
 */
export function interfaces_get_local_interfaces(): GLib.List;
/**
 * Get a list of local ipv4 interface addresses
 */
export function interfaces_get_local_ips(include_loopback: boolean): GLib.List;
/**
 * Sets the debug level to enable/disable normal/verbose debug messages.
 */
export function pseudo_tcp_set_debug_level(level: PseudoTcpDebugLevel): void;
export enum CandidateTransport {
    UDP = 0,
    TCP_ACTIVE = 1,
    TCP_PASSIVE = 2,
    TCP_SO = 3,
}
export enum CandidateType {
    HOST = 0,
    SERVER_REFLEXIVE = 1,
    PEER_REFLEXIVE = 2,
    RELAYED = 3,
}
export enum Compatibility {
    RFC5245 = 0,
    DRAFT19 = 0,
    GOOGLE = 1,
    MSN = 2,
    WLM2009 = 3,
    OC2007 = 4,
    OC2007R2 = 5,
    LAST = 5,
}
export enum ComponentState {
    DISCONNECTED = 0,
    GATHERING = 1,
    CONNECTING = 2,
    CONNECTED = 3,
    READY = 4,
    FAILED = 5,
    LAST = 6,
}
export enum ComponentType {
    RTP = 1,
    RTCP = 2,
}
export enum NominationMode {
    REGULAR = 0,
    AGGRESSIVE = 1,
}
export enum ProxyType {
    NONE = 0,
    SOCKS5 = 1,
    HTTP = 2,
    LAST = 2,
}
export enum PseudoTcpDebugLevel {
    NONE = 0,
    NORMAL = 1,
    VERBOSE = 2,
}
export enum PseudoTcpShutdown {
    RD = 0,
    WR = 1,
    RDWR = 2,
}
export enum PseudoTcpState {
    LISTEN = 0,
    SYN_SENT = 1,
    SYN_RECEIVED = 2,
    ESTABLISHED = 3,
    CLOSED = 4,
    FIN_WAIT_1 = 5,
    FIN_WAIT_2 = 6,
    CLOSING = 7,
    TIME_WAIT = 8,
    CLOSE_WAIT = 9,
    LAST_ACK = 10,
}
export enum PseudoTcpWriteResult {
    SUCCESS = 0,
    TOO_LARGE = 1,
    FAIL = 2,
}
export enum RelayType {
    UDP = 0,
    TCP = 1,
    TLS = 2,
}
export enum AgentOption {
    REGULAR_NOMINATION = 1,
    RELIABLE = 2,
    LITE_MODE = 4,
    ICE_TRICKLE = 8,
    SUPPORT_RENOMINATION = 16,
}
export class Agent extends GObject.Object {constructor(config?: properties);
readonly bytestream_tcp: boolean;
compatibility: number;
controlling_mode: boolean;
force_relay: boolean;
full_mode: boolean;
ice_tcp: boolean;
ice_trickle: boolean;
ice_udp: boolean;
keepalive_conncheck: boolean;
main_context: object;
max_connectivity_checks: number;
nomination_mode: unknown;
proxy_ip: string;
proxy_password: string;
proxy_port: number;
proxy_type: number;
proxy_username: string;
reliable: boolean;
stun_initial_timeout: number;
stun_max_retransmissions: number;
stun_pacing_timer: number;
stun_reliable_timeout: number;
stun_server: string;
stun_server_port: number;
support_renomination: boolean;
upnp: boolean;
upnp_timeout: number;static new_full(ctx: GLib.MainContext, compat: Compatibility, flags: AgentOption): Agent;
static new_reliable(ctx: GLib.MainContext, compat: Compatibility): Agent;
add_local_address(addr: Address): boolean;
add_stream(n_components: number): number;
attach_recv(stream_id: number, component_id: number, ctx: GLib.MainContext, func: AgentRecvFunc, data: object | null): boolean;
close_async(callback: Gio.AsyncReadyCallback | null, callback_data: object | null): void;
forget_relays(stream_id: number, component_id: number): boolean;
gather_candidates(stream_id: number): boolean;
generate_local_candidate_sdp(candidate: Candidate): string;
generate_local_sdp(): string;
generate_local_stream_sdp(stream_id: number, include_non_ice: boolean): string;
get_component_state(stream_id: number, component_id: number): ComponentState;
get_default_local_candidate(stream_id: number, component_id: number): Candidate;
get_io_stream(stream_id: number, component_id: number): Gio.IOStream;
get_local_candidates(stream_id: number, component_id: number): string[];
get_local_credentials(stream_id: number): [boolean, string,string];
get_remote_candidates(stream_id: number, component_id: number): string[];
get_selected_pair(stream_id: number, component_id: number, local: Candidate, remote: Candidate): boolean;
get_selected_socket(stream_id: number, component_id: number): Gio.Socket | null;
get_stream_name(stream_id: number): string;
parse_remote_candidate_sdp(stream_id: number, sdp: string): Candidate;
parse_remote_sdp(sdp: string): number;
parse_remote_stream_sdp(stream_id: number, sdp: string, ufrag: string, pwd: string): string[];
peer_candidate_gathering_done(stream_id: number): boolean;
recv(stream_id: number, component_id: number, cancellable: Gio.Cancellable | null): [number, number[],number];
recv_messages(stream_id: number, component_id: number, cancellable: Gio.Cancellable | null): [number, InputMessage[],number];
recv_messages_nonblocking(stream_id: number, component_id: number, cancellable: Gio.Cancellable | null): [number, InputMessage[],number];
recv_nonblocking(stream_id: number, component_id: number, cancellable: Gio.Cancellable | null): [number, number[],number];
remove_stream(stream_id: number): void;
restart(): boolean;
restart_stream(stream_id: number): boolean;
send(stream_id: number, component_id: number, len: number, buf: string): number;
send_messages_nonblocking(stream_id: number, component_id: number, messages: OutputMessage[], n_messages: number, cancellable: Gio.Cancellable | null): number;
set_local_credentials(stream_id: number, ufrag: string, pwd: string): boolean;
set_port_range(stream_id: number, component_id: number, min_port: number, max_port: number): void;
set_relay_info(stream_id: number, component_id: number, server_ip: string, server_port: number, username: string, password: string, type: RelayType): boolean;
set_remote_candidates(stream_id: number, component_id: number, candidates: string[]): number;
set_remote_credentials(stream_id: number, ufrag: string, pwd: string): boolean;
set_selected_pair(stream_id: number, component_id: number, lfoundation: string, rfoundation: string): boolean;
set_selected_remote_candidate(stream_id: number, component_id: number, candidate: Candidate): boolean;
set_software(software: string): void;
set_stream_name(stream_id: number, name: string): boolean;
set_stream_tos(stream_id: number, tos: number): void;
}
export class PseudoTcpSocket extends GObject.Object {constructor(config?: properties);
ack_delay: number;
callbacks: object;
conversation: number;
no_delay: boolean;
rcv_buf: number;
snd_buf: number;
readonly state: number;
support_fin_ack: boolean;
can_send(): boolean;
close(force: boolean): void;
connect(): boolean;
connect(...args: never[]): never;
get_available_bytes(): number;
get_available_send_space(): number;
get_error(): number;
get_next_clock(timeout: number): boolean;
is_closed(): boolean;
is_closed_remotely(): boolean;
notify_clock(): void;
notify_message(message: InputMessage): boolean;
notify_mtu(mtu: number): void;
notify_packet(buffer: string, len: number): boolean;
recv(buffer: string, len: number): number;
send(buffer: string, len: number): number;
set_time(current_time: number): void;
shutdown(how: PseudoTcpShutdown): void;
}
export class Address  {constructor(config?: properties);
copy_to_sockaddr(sin: object | null): void;
dup(): Address;
equal(b: Address): boolean;
equal_no_port(b: Address): boolean;
free(): void;
get_port(): number;
init(): void;
ip_version(): number;
is_private(): boolean;
is_valid(): boolean;
set_from_sockaddr(sin: object | null): void;
set_from_string(str: string): boolean;
set_ipv4(addr_ipv4: number): void;
set_ipv6(addr_ipv6: number): void;
set_port(port: number): void;
to_string(dst: string): void;
static _new(): Address;
}
export class AgentClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class Candidate  {constructor(config?: properties);
copy(): Candidate;
equal_target(candidate2: Candidate): boolean;
free(): void;
}
export class InputMessage  {constructor(config?: properties);
buffers: Gio.InputVector[];
n_buffers: number;
from: Address;
length: number;
}
export class OutputMessage  {constructor(config?: properties);
buffers: Gio.OutputVector[];
n_buffers: number;
}
export class PseudoTcpCallbacks  {constructor(config?: properties);
user_data: object;
readonly PseudoTcpOpened: unknown;
readonly PseudoTcpReadable: unknown;
readonly PseudoTcpWritable: unknown;
readonly PseudoTcpClosed: unknown;
readonly WritePacket: unknown;
}
export class PseudoTcpSocketClass  {constructor(config?: properties);
}
export class TurnServer  {constructor(config?: properties);
ref_count: number;
server: Address;
username: string;
password: string;
type: RelayType;
}