
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GModule from "gmodule";
import * as Gst from "gst";
import * as GstBase from "gstbase";
/**
 * gstbase.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type CollectDataDestroyNotify = (data: CollectData) => void;
export type CollectPadsBufferFunction = (pads: CollectPads, data: CollectData, buffer: Gst.Buffer, user_data: object | null) => Gst.FlowReturn;
export type CollectPadsClipFunction = (pads: CollectPads, data: CollectData, inbuffer: Gst.Buffer, user_data: object | null) => Gst.FlowReturn;
export type CollectPadsCompareFunction = (pads: CollectPads, data1: CollectData, timestamp1: Gst.ClockTime, data2: CollectData, timestamp2: Gst.ClockTime, user_data: object | null) => number;
export type CollectPadsEventFunction = (pads: CollectPads, pad: CollectData, event: Gst.Event, user_data: object | null) => boolean;
export type CollectPadsFlushFunction = (pads: CollectPads, user_data: object | null) => void;
export type CollectPadsFunction = (pads: CollectPads, user_data: object | null) => Gst.FlowReturn;
export type CollectPadsQueryFunction = (pads: CollectPads, pad: CollectData, query: Gst.Query, user_data: object | null) => boolean;
export type DataQueueEmptyCallback = (queue: DataQueue, checkdata: object | null) => void;
export type DataQueueFullCallback = (queue: DataQueue, checkdata: object | null) => void;
export type TypeFindHelperGetRangeFunction = (obj: Gst.Object, parent: Gst.Object | null, offset: number, length: number) => Gst.FlowReturn;
export const BASE_PARSE_FLAG_DRAINING: number;
export const BASE_PARSE_FLAG_LOST_SYNC: number;
export const BASE_TRANSFORM_SINK_NAME: string;
export const BASE_TRANSFORM_SRC_NAME: string;
/**
 * Tries to find what type of data is flowing from the given source #GstP
 * ad.
 * Free-function: gst_caps_unref
 */
export function type_find_helper(src: Gst.Pad, size: number): Gst.Caps | null;
/**
 * Tries to find what type of data is contained in the given #GstBuffer, 
 * the
 * assumption being that the buffer represents the beginning of the strea
 * m or
 * file.
 * All available typefinders will be called on the data in order of rank.
 *  If
 * a typefinding function returns a probability of %GST_TYPE_FIND_MAXIMUM
 * ,
 * typefinding is stopped immediately and the found caps will be returned
 * right away. Otherwise, all available typefind functions will the tried
 * ,
 * and the caps with the highest probability will be returned, or %NULL i
 * f
 * the content of the buffer could not be identified.
 * Free-function: gst_caps_unref
 */
export function type_find_helper_for_buffer(obj: Gst.Object | null, buf: Gst.Buffer): [Gst.Caps | null, Gst.TypeFindProbability | null];
/**
 * Tries to find what type of data is contained in the given #GstBuffer, 
 * the
 * assumption being that the buffer represents the beginning of the strea
 * m or
 * file.
 * All available typefinders will be called on the data in order of rank.
 *  If
 * a typefinding function returns a probability of %GST_TYPE_FIND_MAXIMUM
 * ,
 * typefinding is stopped immediately and the found caps will be returned
 * right away. Otherwise, all available typefind functions will the tried
 * ,
 * and the caps with the highest probability will be returned, or %NULL i
 * f
 * the content of the buffer could not be identified.
 * When @extension is not %NULL, this function will first try the typefin
 * d
 * functions for the given extension, which might speed up the typefindin
 * g
 * in many cases.
 * Free-function: gst_caps_unref
 */
export function type_find_helper_for_buffer_with_extension(obj: Gst.Object | null, buf: Gst.Buffer, extension: string | null): [Gst.Caps | null, Gst.TypeFindProbability | null];
/**
 * Tries to find what type of data is contained in the given @data, the
 * assumption being that the data represents the beginning of the stream 
 * or
 * file.
 * All available typefinders will be called on the data in order of rank.
 *  If
 * a typefinding function returns a probability of %GST_TYPE_FIND_MAXIMUM
 * ,
 * typefinding is stopped immediately and the found caps will be returned
 * right away. Otherwise, all available typefind functions will the tried
 * ,
 * and the caps with the highest probability will be returned, or %NULL i
 * f
 * the content of @data could not be identified.
 * Free-function: gst_caps_unref
 */
export function type_find_helper_for_data(obj: Gst.Object | null, data: number[], size: number): [Gst.Caps | null, Gst.TypeFindProbability | null];
/**
 * Tries to find what type of data is contained in the given @data, the
 * assumption being that the data represents the beginning of the stream 
 * or
 * file.
 * All available typefinders will be called on the data in order of rank.
 *  If
 * a typefinding function returns a probability of %GST_TYPE_FIND_MAXIMUM
 * ,
 * typefinding is stopped immediately and the found caps will be returned
 * right away. Otherwise, all available typefind functions will the tried
 * ,
 * and the caps with the highest probability will be returned, or %NULL i
 * f
 * the content of @data could not be identified.
 * When @extension is not %NULL, this function will first try the typefin
 * d
 * functions for the given extension, which might speed up the typefindin
 * g
 * in many cases.
 * Free-function: gst_caps_unref
 */
export function type_find_helper_for_data_with_extension(obj: Gst.Object | null, data: number[], size: number, extension: string | null): [Gst.Caps | null, Gst.TypeFindProbability | null];
/**
 * Tries to find the best #GstCaps associated with @extension.
 * All available typefinders will be checked against the extension in ord
 * er
 * of rank. The caps of the first typefinder that can handle @extension w
 * ill be
 * returned.
 * Free-function: gst_caps_unref
 */
export function type_find_helper_for_extension(obj: Gst.Object | null, extension: string): Gst.Caps | null;
/**
 * Utility function to do pull-based typefinding. Unlike gst_type_find_he
 * lper()
 * however, this function will use the specified function @func to obtain
 *  the
 * data needed by the typefind functions, rather than operating on a give
 * n
 * source pad. This is useful mostly for elements like tag demuxers which
 * strip off data at the beginning and/or end of a file and want to typef
 * ind
 * the stripped data stream before adding their own source pad (the speci
 * fied
 * callback can then call the upstream peer pad with offsets adjusted for
 *  the
 * tag size, for example).
 * When @extension is not %NULL, this function will first try the typefin
 * d
 * functions for the given extension, which might speed up the typefindin
 * g
 * in many cases.
 * Free-function: gst_caps_unref
 */
export function type_find_helper_get_range(obj: Gst.Object, parent: Gst.Object | null, func: TypeFindHelperGetRangeFunction, size: number, extension: string | null): [Gst.Caps | null, Gst.TypeFindProbability | null];
/**
 * Utility function to do pull-based typefinding. Unlike gst_type_find_he
 * lper()
 * however, this function will use the specified function @func to obtain
 *  the
 * data needed by the typefind functions, rather than operating on a give
 * n
 * source pad. This is useful mostly for elements like tag demuxers which
 * strip off data at the beginning and/or end of a file and want to typef
 * ind
 * the stripped data stream before adding their own source pad (the speci
 * fied
 * callback can then call the upstream peer pad with offsets adjusted for
 *  the
 * tag size, for example).
 * When @extension is not %NULL, this function will first try the typefin
 * d
 * functions for the given extension, which might speed up the typefindin
 * g
 * in many cases.
 */
export function type_find_helper_get_range_full(obj: Gst.Object, parent: Gst.Object | null, func: TypeFindHelperGetRangeFunction, size: number, extension: string | null): [Gst.FlowReturn, Gst.Caps,Gst.TypeFindProbability | null];
export enum BaseParseFrameFlags {
    NONE = 0,
    NEW_FRAME = 1,
    NO_FRAME = 2,
    CLIP = 4,
    DROP = 8,
    QUEUE = 16,
}
export enum BaseSrcFlags {
    STARTING = 16384,
    STARTED = 32768,
    LAST = 1048576,
}
export enum CollectPadsStateFlags {
    EOS = 1,
    FLUSHING = 2,
    NEW_SEGMENT = 4,
    WAITING = 8,
    LOCKED = 16,
}
export class Adapter extends GObject.Object {
    constructor(config?: properties);
    available(): number;
    available_fast(): number;
    clear(): void;
    copy_bytes(offset: number, size: number): GLib.Bytes;
    distance_from_discont(): number;
    dts_at_discont(): Gst.ClockTime;
    flush(flush: number): void;
    get_buffer(nbytes: number): Gst.Buffer | null;
    get_buffer_fast(nbytes: number): Gst.Buffer | null;
    get_buffer_list(nbytes: number): Gst.BufferList | null;
    get_list(nbytes: number): GLib.List | null;
    map(): [number[] | null, number];
    masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number;
    masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [number, number | null];
    offset_at_discont(): number;
    prev_dts(): [Gst.ClockTime, number | null];
    prev_dts_at_offset(offset: number): [Gst.ClockTime, number | null];
    prev_offset(): [number, number | null];
    prev_pts(): [Gst.ClockTime, number | null];
    prev_pts_at_offset(offset: number): [Gst.ClockTime, number | null];
    pts_at_discont(): Gst.ClockTime;
    push(buf: Gst.Buffer): void;
    take(): [number[] | null, number];
    take_buffer(nbytes: number): Gst.Buffer | null;
    take_buffer_fast(nbytes: number): Gst.Buffer | null;
    take_buffer_list(nbytes: number): Gst.BufferList | null;
    take_list(nbytes: number): GLib.List | null;
    unmap(): void;
}
export class Aggregator  {
    constructor(config?: properties);
    latency: number;
    min_upstream_latency: number;
    start_time: number;
    readonly srcpad: Gst.Pad;
    readonly priv: AggregatorPrivate;
    finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
    get_allocator(): [Gst.Allocator | null,Gst.AllocationParams | null];
    get_buffer_pool(): Gst.BufferPool;
    get_latency(): Gst.ClockTime;
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
    set_src_caps(caps: Gst.Caps): void;
    simple_get_next_time(): Gst.ClockTime;
}
export class AggregatorPad  {
    constructor(config?: properties);
    emit_signals: boolean;
    readonly segment: Gst.Segment;
    readonly priv: AggregatorPadPrivate;
    drop_buffer(): boolean;
    has_buffer(): boolean;
    is_eos(): boolean;
    peek_buffer(): Gst.Buffer;
    pop_buffer(): Gst.Buffer;
}
export class BaseParse  {
    constructor(config?: properties);
    disable_passthrough: boolean;
    readonly element: Gst.Element;
    readonly sinkpad: Gst.Pad;
    readonly srcpad: Gst.Pad;
    readonly flags: number;
    readonly segment: Gst.Segment;
    readonly priv: BaseParsePrivate;
    add_index_entry(offset: number, ts: Gst.ClockTime, key: boolean, force: boolean): boolean;
    convert_default(src_format: Gst.Format, src_value: number, dest_format: Gst.Format): [boolean, number];
    drain(): void;
    finish_frame(frame: BaseParseFrame, size: number): Gst.FlowReturn;
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
    push_frame(frame: BaseParseFrame): Gst.FlowReturn;
    set_average_bitrate(bitrate: number): void;
    set_duration(fmt: Gst.Format, duration: number, interval: number): void;
    set_frame_rate(fps_num: number, fps_den: number, lead_in: number, lead_out: number): void;
    set_has_timing_info(has_timing: boolean): void;
    set_infer_ts(infer_ts: boolean): void;
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
    set_min_frame_size(min_size: number): void;
    set_passthrough(passthrough: boolean): void;
    set_pts_interpolation(pts_interpolate: boolean): void;
    set_syncable(syncable: boolean): void;
    set_ts_at_offset(offset: number): void;
}
export class BaseSink  {
    constructor(config?: properties);
    async: boolean;
    blocksize: number;
    enable_last_sample: boolean;
    readonly last_sample: Gst.Sample;
    max_bitrate: number;
    max_lateness: number;
    processing_deadline: number;
    qos: boolean;
    render_delay: number;
    sync: boolean;
    throttle_time: number;
    ts_offset: number;
    readonly element: Gst.Element;
    readonly sinkpad: Gst.Pad;
    readonly pad_mode: Gst.PadMode;
    readonly offset: number;
    readonly can_activate_pull: boolean;
    readonly can_activate_push: boolean;
    readonly preroll_lock: GLib.Mutex;
    readonly preroll_cond: GLib.Cond;
    readonly eos: boolean;
    readonly need_preroll: boolean;
    readonly have_preroll: boolean;
    readonly playing_async: boolean;
    readonly have_newsegment: boolean;
    readonly segment: Gst.Segment;
    readonly clock_id: Gst.ClockID;
    readonly flushing: boolean;
    readonly running: boolean;
    readonly priv: BaseSinkPrivate;
    do_preroll(obj: Gst.MiniObject): Gst.FlowReturn;
    get_blocksize(): number;
    get_drop_out_of_segment(): boolean;
    get_last_sample(): Gst.Sample | null;
    get_latency(): Gst.ClockTime;
    get_max_bitrate(): number;
    get_max_lateness(): number;
    get_processing_deadline(): Gst.ClockTime;
    get_render_delay(): Gst.ClockTime;
    get_sync(): boolean;
    get_throttle_time(): number;
    get_ts_offset(): Gst.ClockTimeDiff;
    is_async_enabled(): boolean;
    is_last_sample_enabled(): boolean;
    is_qos_enabled(): boolean;
    query_latency(): [boolean, boolean | null,boolean | null,Gst.ClockTime | null,Gst.ClockTime | null];
    set_async_enabled(enabled: boolean): void;
    set_blocksize(blocksize: number): void;
    set_drop_out_of_segment(drop_out_of_segment: boolean): void;
    set_last_sample_enabled(enabled: boolean): void;
    set_max_bitrate(max_bitrate: number): void;
    set_max_lateness(max_lateness: number): void;
    set_processing_deadline(processing_deadline: Gst.ClockTime): void;
    set_qos_enabled(enabled: boolean): void;
    set_render_delay(delay: Gst.ClockTime): void;
    set_sync(sync: boolean): void;
    set_throttle_time(throttle: number): void;
    set_ts_offset(offset: Gst.ClockTimeDiff): void;
    wait(time: Gst.ClockTime): [Gst.FlowReturn, Gst.ClockTimeDiff | null];
    wait_clock(time: Gst.ClockTime): [Gst.ClockReturn, Gst.ClockTimeDiff | null];
    wait_preroll(): Gst.FlowReturn;
}
export class BaseSrc  {
    constructor(config?: properties);
    blocksize: number;
    do_timestamp: boolean;
    num_buffers: number;
    typefind: boolean;
    readonly element: Gst.Element;
    readonly srcpad: Gst.Pad;
    readonly live_lock: GLib.Mutex;
    readonly live_cond: GLib.Cond;
    readonly live_running: boolean;
    readonly can_activate_push: boolean;
    readonly random_access: boolean;
    readonly clock_id: Gst.ClockID;
    readonly segment: Gst.Segment;
    readonly need_newsegment: boolean;
    readonly num_buffers_left: number;
    readonly running: boolean;
    readonly pending_seek: Gst.Event;
    readonly priv: BaseSrcPrivate;
    get_allocator(): [Gst.Allocator | null,Gst.AllocationParams | null];
    get_blocksize(): number;
    get_buffer_pool(): Gst.BufferPool;
    get_do_timestamp(): boolean;
    is_async(): boolean;
    is_live(): boolean;
    new_seamless_segment(start: number, stop: number, time: number): boolean;
    query_latency(): [boolean, boolean | null,Gst.ClockTime | null,Gst.ClockTime | null];
    set_async(async: boolean): void;
    set_automatic_eos(automatic_eos: boolean): void;
    set_blocksize(blocksize: number): void;
    set_caps(caps: Gst.Caps): boolean;
    set_do_timestamp(timestamp: boolean): void;
    set_dynamic_size(dynamic: boolean): void;
    set_format(format: Gst.Format): void;
    set_live(live: boolean): void;
    start_complete(ret: Gst.FlowReturn): void;
    start_wait(): Gst.FlowReturn;
    submit_buffer_list(buffer_list: Gst.BufferList): void;
    wait_playing(): Gst.FlowReturn;
}
export class BaseTransform  {
    constructor(config?: properties);
    qos: boolean;
    readonly element: Gst.Element;
    readonly sinkpad: Gst.Pad;
    readonly srcpad: Gst.Pad;
    readonly have_segment: boolean;
    readonly segment: Gst.Segment;
    readonly queued_buf: Gst.Buffer;
    readonly priv: BaseTransformPrivate;
    get_allocator(): [Gst.Allocator | null,Gst.AllocationParams | null];
    get_buffer_pool(): Gst.BufferPool;
    is_in_place(): boolean;
    is_passthrough(): boolean;
    is_qos_enabled(): boolean;
    reconfigure_sink(): void;
    reconfigure_src(): void;
    set_gap_aware(gap_aware: boolean): void;
    set_in_place(in_place: boolean): void;
    set_passthrough(passthrough: boolean): void;
    set_prefer_passthrough(prefer_passthrough: boolean): void;
    set_qos_enabled(enabled: boolean): void;
    update_qos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void;
    update_src_caps(updated_caps: Gst.Caps): boolean;
}
export class CollectPads extends Gst.Object {
    constructor(config?: properties);
    add_pad(pad: Gst.Pad, size: number, destroy_notify: CollectDataDestroyNotify, lock: boolean): CollectData | null;
    available(): number;
    clip_running_time(cdata: CollectData, buf: Gst.Buffer, user_data: object | null): [Gst.FlowReturn, Gst.Buffer | null];
    event_default(data: CollectData, event: Gst.Event, discard: boolean): boolean;
    flush(data: CollectData, size: number): number;
    peek(data: CollectData): Gst.Buffer | null;
    pop(data: CollectData): Gst.Buffer | null;
    query_default(data: CollectData, query: Gst.Query, discard: boolean): boolean;
    read_buffer(data: CollectData, size: number): Gst.Buffer | null;
    remove_pad(pad: Gst.Pad): boolean;
    set_buffer_function(func: CollectPadsBufferFunction, user_data: object | null): void;
    set_clip_function(clipfunc: CollectPadsClipFunction, user_data: object | null): void;
    set_compare_function(func: CollectPadsCompareFunction, user_data: object | null): void;
    set_event_function(func: CollectPadsEventFunction, user_data: object | null): void;
    set_flush_function(func: CollectPadsFlushFunction, user_data: object | null): void;
    set_flushing(flushing: boolean): void;
    set_function(func: CollectPadsFunction, user_data: object | null): void;
    set_query_function(func: CollectPadsQueryFunction, user_data: object | null): void;
    set_waiting(data: CollectData, waiting: boolean): void;
    src_event_default(pad: Gst.Pad, event: Gst.Event): boolean;
    start(): void;
    stop(): void;
    take_buffer(data: CollectData, size: number): Gst.Buffer | null;
}
export class DataQueue extends GObject.Object {
    constructor(config?: properties);
    readonly current_level_bytes: number;
    readonly current_level_time: number;
    readonly current_level_visible: number;
    vfunc_empty(): void;
    vfunc_full(): void;
}
export class PushSrc  {
    constructor(config?: properties);
}
export class AggregatorPadPrivate  {
    constructor(config?: properties);
}
export class AggregatorPrivate  {
    constructor(config?: properties);
}
export class BaseParseFrame  {
    constructor(config?: properties);
    copy(): BaseParseFrame;
    free(): void;
    init(): void;
}
export class BaseParsePrivate  {
    constructor(config?: properties);
}
export class BaseSinkPrivate  {
    constructor(config?: properties);
}
export class BaseSrcPrivate  {
    constructor(config?: properties);
}
export class BaseTransformPrivate  {
    constructor(config?: properties);
}
export class BitReader  {
    constructor(config?: properties);
    data: number[];
    size: number;
    "byte": number;
    bit: number;
    free(): void;
    get_bits_uint16(nbits: number): [boolean, number];
    get_bits_uint32(nbits: number): [boolean, number];
    get_bits_uint64(nbits: number): [boolean, number];
    get_bits_uint8(nbits: number): [boolean, number];
    get_pos(): number;
    get_remaining(): number;
    get_size(): number;
    init(data: number[], size: number): void;
    peek_bits_uint16(nbits: number): [boolean, number];
    peek_bits_uint32(nbits: number): [boolean, number];
    peek_bits_uint64(nbits: number): [boolean, number];
    peek_bits_uint8(nbits: number): [boolean, number];
    set_pos(pos: number): boolean;
    skip(nbits: number): boolean;
    skip_to_byte(): boolean;
}
export class BitWriter  {
    constructor(config?: properties);
    data: number;
    bit_size: number;
    readonly bit_capacity: number;
    readonly auto_grow: boolean;
    readonly owned: boolean;
    align_bytes(trailing_bit: number): boolean;
    free(): void;
    free_and_get_buffer(): Gst.Buffer;
    free_and_get_data(): number[];
    get_data(): number;
    get_remaining(): number;
    get_size(): number;
    put_bits_uint16(value: number, nbits: number): boolean;
    put_bits_uint32(value: number, nbits: number): boolean;
    put_bits_uint64(value: number, nbits: number): boolean;
    put_bits_uint8(value: number, nbits: number): boolean;
    put_bytes(data: number, nbytes: number): boolean;
    reset(): void;
    reset_and_get_buffer(): Gst.Buffer;
    reset_and_get_data(): number[];
    set_pos(pos: number): boolean;
}
export class ByteReader  {
    constructor(config?: properties);
    data: number[];
    size: number;
    "byte": number;
    dup_data(): [boolean, number,number[]];
    dup_string_utf16(): [boolean, number[]];
    dup_string_utf32(): [boolean, number[]];
    dup_string_utf8(): [boolean, string[]];
    free(): void;
    get_data(): [boolean, number,number[]];
    get_float32_be(): [boolean, number];
    get_float32_le(): [boolean, number];
    get_float64_be(): [boolean, number];
    get_float64_le(): [boolean, number];
    get_int16_be(): [boolean, number];
    get_int16_le(): [boolean, number];
    get_int24_be(): [boolean, number];
    get_int24_le(): [boolean, number];
    get_int32_be(): [boolean, number];
    get_int32_le(): [boolean, number];
    get_int64_be(): [boolean, number];
    get_int64_le(): [boolean, number];
    get_int8(): [boolean, number];
    get_pos(): number;
    get_remaining(): number;
    get_size(): number;
    get_string_utf8(): [boolean, string[]];
    get_uint16_be(): [boolean, number];
    get_uint16_le(): [boolean, number];
    get_uint24_be(): [boolean, number];
    get_uint24_le(): [boolean, number];
    get_uint32_be(): [boolean, number];
    get_uint32_le(): [boolean, number];
    get_uint64_be(): [boolean, number];
    get_uint64_le(): [boolean, number];
    get_uint8(): [boolean, number];
    init(data: number[], size: number): void;
    masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number;
    masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [number, number];
    peek_data(): [boolean, number,number[]];
    peek_float32_be(): [boolean, number];
    peek_float32_le(): [boolean, number];
    peek_float64_be(): [boolean, number];
    peek_float64_le(): [boolean, number];
    peek_int16_be(): [boolean, number];
    peek_int16_le(): [boolean, number];
    peek_int24_be(): [boolean, number];
    peek_int24_le(): [boolean, number];
    peek_int32_be(): [boolean, number];
    peek_int32_le(): [boolean, number];
    peek_int64_be(): [boolean, number];
    peek_int64_le(): [boolean, number];
    peek_int8(): [boolean, number];
    peek_string_utf8(): [boolean, string[]];
    peek_uint16_be(): [boolean, number];
    peek_uint16_le(): [boolean, number];
    peek_uint24_be(): [boolean, number];
    peek_uint24_le(): [boolean, number];
    peek_uint32_be(): [boolean, number];
    peek_uint32_le(): [boolean, number];
    peek_uint64_be(): [boolean, number];
    peek_uint64_le(): [boolean, number];
    peek_uint8(): [boolean, number];
    set_pos(pos: number): boolean;
    skip(nbytes: number): boolean;
    skip_string_utf16(): boolean;
    skip_string_utf32(): boolean;
    skip_string_utf8(): boolean;
}
export class ByteWriter  {
    constructor(config?: properties);
    alloc_size: number;
    fixed: boolean;
    owned: boolean;
    ensure_free_space(size: number): boolean;
    fill(value: number, size: number): boolean;
    free(): void;
    free_and_get_buffer(): Gst.Buffer;
    free_and_get_data(): number;
    get_remaining(): number;
    init(): void;
    init_with_data(data: number[], size: number, initialized: boolean): void;
    init_with_size(size: number, fixed: boolean): void;
    put_buffer(buffer: Gst.Buffer, offset: number, size: number): boolean;
    put_data(data: number[], size: number): boolean;
    put_float32_be(val: number): boolean;
    put_float32_le(val: number): boolean;
    put_float64_be(val: number): boolean;
    put_float64_le(val: number): boolean;
    put_int16_be(val: number): boolean;
    put_int16_le(val: number): boolean;
    put_int24_be(val: number): boolean;
    put_int24_le(val: number): boolean;
    put_int32_be(val: number): boolean;
    put_int32_le(val: number): boolean;
    put_int64_be(val: number): boolean;
    put_int64_le(val: number): boolean;
    put_int8(val: number): boolean;
    put_string_utf16(data: number[]): boolean;
    put_string_utf32(data: number[]): boolean;
    put_string_utf8(data: string): boolean;
    put_uint16_be(val: number): boolean;
    put_uint16_le(val: number): boolean;
    put_uint24_be(val: number): boolean;
    put_uint24_le(val: number): boolean;
    put_uint32_be(val: number): boolean;
    put_uint32_le(val: number): boolean;
    put_uint64_be(val: number): boolean;
    put_uint64_le(val: number): boolean;
    put_uint8(val: number): boolean;
    reset(): void;
    reset_and_get_buffer(): Gst.Buffer;
    reset_and_get_data(): number[];
}
export class CollectData  {
    constructor(config?: properties);
    collect: CollectPads;
    pad: Gst.Pad;
    buffer: Gst.Buffer;
    pos: number;
    segment: Gst.Segment;
    readonly state: CollectPadsStateFlags;
    readonly priv: CollectDataPrivate;
}
export class CollectDataPrivate  {
    constructor(config?: properties);
}
export class CollectPadsPrivate  {
    constructor(config?: properties);
}
export class DataQueuePrivate  {
    constructor(config?: properties);
}
export class FlowCombiner  {
    constructor(config?: properties);
    add_pad(pad: Gst.Pad): void;
    clear(): void;
    free(): void;
    ref(): FlowCombiner;
    remove_pad(pad: Gst.Pad): void;
    reset(): void;
    unref(): void;
    update_flow(fret: Gst.FlowReturn): Gst.FlowReturn;
    update_pad_flow(pad: Gst.Pad, fret: Gst.FlowReturn): Gst.FlowReturn;
}