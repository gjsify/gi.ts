
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GModule from "gmodule";
import * as Gst from "gst";
import * as GstNet from "gstnet";
/**
 * gstnet.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type PtpStatisticsCallback = (domain: number, stats: Gst.Structure, user_data: object | null) => boolean;
export const NET_TIME_PACKET_SIZE: number;
export const PTP_CLOCK_ID_NONE: number;
export const PTP_STATISTICS_BEST_MASTER_CLOCK_SELECTED: string;
export const PTP_STATISTICS_NEW_DOMAIN_FOUND: string;
export const PTP_STATISTICS_PATH_DELAY_MEASURED: string;
export const PTP_STATISTICS_TIME_UPDATED: string;
/**
 * Attaches @addr as metadata in a #GstNetAddressMeta to @buffer.
 */
export function buffer_add_net_address_meta(buffer: Gst.Buffer, addr: Gio.SocketAddress): NetAddressMeta;
/**
 * Attaches @message as metadata in a #GstNetControlMessageMeta to @buffe
 * r.
 */
export function buffer_add_net_control_message_meta(buffer: Gst.Buffer, message: Gio.SocketControlMessage): NetControlMessageMeta;
/**
 * Find the #GstNetAddressMeta on @buffer.
 */
export function buffer_get_net_address_meta(buffer: Gst.Buffer): NetAddressMeta;
/**
 * 
 */
export function net_address_meta_api_get_type(): GType;
/**
 * 
 */
export function net_address_meta_get_info(): Gst.MetaInfo;
/**
 * 
 */
export function net_control_message_meta_api_get_type(): GType;
/**
 * 
 */
export function net_control_message_meta_get_info(): Gst.MetaInfo;
/**
 * Receives a #GstNetTimePacket over a socket. Handles interrupted system
 * calls, but otherwise returns NULL on error.
 */
export function net_time_packet_receive(socket: Gio.Socket): [NetTimePacket, Gio.SocketAddress];
/**
 * Deinitialize the GStreamer PTP subsystem and stop the PTP clock. If th
 * ere
 * are any remaining GstPtpClock instances, they won't be further synchro
 * nized
 * to the PTP network clock.
 */
export function ptp_deinit(): void;
/**
 * Initialize the GStreamer PTP subsystem and create a PTP ordinary clock
 *  in
 * slave-only mode for all domains on the given @interfaces with the
 * given @clock_id.
 * If @clock_id is %GST_PTP_CLOCK_ID_NONE, a clock id is automatically
 * generated from the MAC address of the first network interface.
 * This function is automatically called by gst_ptp_clock_new() with defa
 * ult
 * parameters if it wasn't called before.
 */
export function ptp_init(clock_id: number, interfaces: string[] | null): boolean;
/**
 * Check if the GStreamer PTP clock subsystem is initialized.
 */
export function ptp_is_initialized(): boolean;
/**
 * Check if PTP clocks are generally supported on this system, and if pre
 * vious
 * initializations did not fail.
 */
export function ptp_is_supported(): boolean;
/**
 * Installs a new statistics callback for gathering PTP statistics. See
 * GstPtpStatisticsCallback for a list of statistics that are provided.
 */
export function ptp_statistics_callback_add(callback: PtpStatisticsCallback, user_data: object | null, destroy_data: GLib.DestroyNotify): number;
/**
 * Removes a PTP statistics callback that was previously added with
 * gst_ptp_statistics_callback_add().
 */
export function ptp_statistics_callback_remove(id: number): void;
export class NetClientClock extends Gst.SystemClock {
    constructor(config?: properties);
    address: string;
    base_time: number;
    bus: Gst.Bus;
    readonly internal_clock: Gst.Clock;
    minimum_update_interval: number;
    port: number;
    qos_dscp: number;
    round_trip_limit: number;
}
export class NetTimeProvider extends Gst.Object {
    constructor(config?: properties);
    active: boolean;
    address: string;
    clock: Gst.Clock;
    port: number;
    qos_dscp: number;
}
export class NtpClock extends NetClientClock {
    constructor(config?: properties);
}
export class PtpClock extends Gst.SystemClock {
    constructor(config?: properties);
    domain: number;
    readonly grandmaster_clock_id: number;
    readonly internal_clock: Gst.Clock;
    readonly master_clock_id: number;
}
export class NetAddressMeta  {
    constructor(config?: properties);
    meta: Gst.Meta;
    addr: Gio.SocketAddress;
    static get_info(): Gst.MetaInfo;
}
export class NetClientClockPrivate  {
    constructor(config?: properties);
}
export class NetControlMessageMeta  {
    constructor(config?: properties);
    meta: Gst.Meta;
    message: Gio.SocketControlMessage;
    static get_info(): Gst.MetaInfo;
}
export class NetTimePacket  {
    constructor(config?: properties);
    copy(): NetTimePacket;
    free(): void;
    send(socket: Gio.Socket, dest_address: Gio.SocketAddress): boolean;
    serialize(): number;
    static receive(socket: Gio.Socket): [NetTimePacket, Gio.SocketAddress];
}
export class NetTimeProviderPrivate  {
    constructor(config?: properties);
}
export class PtpClockPrivate  {
    constructor(config?: properties);
}