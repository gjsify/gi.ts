
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gst from "gst";
import * as GstSdp from "gstsdp";
import * as GstWebRTC from "gstwebrtc";
/**
 * gstwebrtc.d.ts
 */
type properties = { [key: string]: any };
/**
 * 
 */
export function webrtc_sdp_type_to_string(type: WebRTCSDPType): string;
export enum WebRTCBundlePolicy {
    NONE = 0,
    BALANCED = 1,
    MAX_COMPAT = 2,
    MAX_BUNDLE = 3,
}
export enum WebRTCDTLSSetup {
    NONE = 0,
    ACTPASS = 1,
    ACTIVE = 2,
    PASSIVE = 3,
}
export enum WebRTCDTLSTransportState {
    NEW = 0,
    CLOSED = 1,
    FAILED = 2,
    CONNECTING = 3,
    CONNECTED = 4,
}
export enum WebRTCDataChannelState {
    NEW = 0,
    CONNECTING = 1,
    OPEN = 2,
    CLOSING = 3,
    CLOSED = 4,
}
export enum WebRTCFECType {
    NONE = 0,
    ULP_RED = 1,
}
export enum WebRTCICEComponent {
    RTP = 0,
    RTCP = 1,
}
export enum WebRTCICEConnectionState {
    NEW = 0,
    CHECKING = 1,
    CONNECTED = 2,
    COMPLETED = 3,
    FAILED = 4,
    DISCONNECTED = 5,
    CLOSED = 6,
}
export enum WebRTCICEGatheringState {
    NEW = 0,
    GATHERING = 1,
    COMPLETE = 2,
}
export enum WebRTCICERole {
    CONTROLLED = 0,
    CONTROLLING = 1,
}
export enum WebRTCICETransportPolicy {
    ALL = 0,
    RELAY = 1,
}
export enum WebRTCPeerConnectionState {
    NEW = 0,
    CONNECTING = 1,
    CONNECTED = 2,
    DISCONNECTED = 3,
    FAILED = 4,
    CLOSED = 5,
}
export enum WebRTCPriorityType {
    VERY_LOW = 1,
    LOW = 2,
    MEDIUM = 3,
    HIGH = 4,
}
export enum WebRTCRTPTransceiverDirection {
    NONE = 0,
    INACTIVE = 1,
    SENDONLY = 2,
    RECVONLY = 3,
    SENDRECV = 4,
}
export enum WebRTCSCTPTransportState {
    NEW = 0,
    CONNECTING = 1,
    CONNECTED = 2,
    CLOSED = 3,
}
export enum WebRTCSDPType {
    OFFER = 1,
    PRANSWER = 2,
    ANSWER = 3,
    ROLLBACK = 4,
}
export enum WebRTCSignalingState {
    STABLE = 0,
    CLOSED = 1,
    HAVE_LOCAL_OFFER = 2,
    HAVE_REMOTE_OFFER = 3,
    HAVE_LOCAL_PRANSWER = 4,
    HAVE_REMOTE_PRANSWER = 5,
}
export enum WebRTCStatsType {
    CODEC = 1,
    INBOUND_RTP = 2,
    OUTBOUND_RTP = 3,
    REMOTE_INBOUND_RTP = 4,
    REMOTE_OUTBOUND_RTP = 5,
    CSRC = 6,
    PEER_CONNECTION = 7,
    DATA_CHANNEL = 8,
    STREAM = 9,
    TRANSPORT = 10,
    CANDIDATE_PAIR = 11,
    LOCAL_CANDIDATE = 12,
    REMOTE_CANDIDATE = 13,
    CERTIFICATE = 14,
}
export class WebRTCDTLSTransport extends Gst.Object {constructor(config?: properties);
certificate: string;
client: boolean;
readonly remote_certificate: string;
rtcp: boolean;
session_id: number;
readonly state: WebRTCDTLSTransportState;
readonly transport: WebRTCICETransport;
set_transport(ice: WebRTCICETransport): void;
}
export class WebRTCICETransport  {constructor(config?: properties);
component: WebRTCICEComponent;
readonly gathering_state: WebRTCICEGatheringState;
readonly state: WebRTCICEConnectionState;
readonly role: WebRTCICERole;
readonly src: Gst.Element;
readonly sink: Gst.Element;
readonly _padding: object[];
connection_state_change(new_state: WebRTCICEConnectionState): void;
gathering_state_change(new_state: WebRTCICEGatheringState): void;
new_candidate(stream_id: number, component: WebRTCICEComponent, attr: string): void;
selected_pair_change(): void;
}
export class WebRTCRTPReceiver extends Gst.Object {constructor(config?: properties);
set_rtcp_transport(transport: WebRTCDTLSTransport): void;
set_transport(transport: WebRTCDTLSTransport): void;
}
export class WebRTCRTPSender extends Gst.Object {constructor(config?: properties);
set_rtcp_transport(transport: WebRTCDTLSTransport): void;
set_transport(transport: WebRTCDTLSTransport): void;
}
export class WebRTCRTPTransceiver  {constructor(config?: properties);
mlineindex: number;
receiver: WebRTCRTPReceiver;
sender: WebRTCRTPSender;
readonly mline: number;
readonly mid: string;
readonly stopped: boolean;
readonly direction: WebRTCRTPTransceiverDirection;
readonly current_direction: WebRTCRTPTransceiverDirection;
readonly codec_preferences: Gst.Caps;
readonly _padding: object[];
}
export class WebRTCDTLSTransportClass  {constructor(config?: properties);
readonly parent_class: Gst.ObjectClass;
readonly _padding: object[];
}
export class WebRTCICETransportClass  {constructor(config?: properties);
readonly parent_class: Gst.ObjectClass;
readonly gather_candidates: unknown;
readonly _padding: object[];
}
export class WebRTCRTPReceiverClass  {constructor(config?: properties);
readonly parent_class: Gst.ObjectClass;
readonly _padding: object[];
}
export class WebRTCRTPSenderClass  {constructor(config?: properties);
readonly parent_class: Gst.ObjectClass;
readonly _padding: object[];
}
export class WebRTCRTPTransceiverClass  {constructor(config?: properties);
readonly parent_class: Gst.ObjectClass;
readonly _padding: object[];
}
export class WebRTCSessionDescription  {constructor(config?: properties);
copy(): WebRTCSessionDescription;
free(): void;
}