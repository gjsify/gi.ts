
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
export type CollectDataDestroyNotify = (data: CollectData) => void;
export type CollectPadsBufferFunction = (pads: CollectPads, data: CollectData, buffer: Gst.Buffer, user_data: object | null) => Gst.FlowReturn;
export type CollectPadsClipFunction = (pads: CollectPads, data: CollectData, inbuffer: Gst.Buffer, user_data: object | null) => Gst.FlowReturn;
export type CollectPadsCompareFunction = (pads: CollectPads, data1: CollectData, timestamp1: Gst.ClockTime, data2: CollectData, timestamp2: Gst.ClockTime, user_data: object | null) => number;
export type CollectPadsEventFunction = (pads: CollectPads, pad: CollectData, event: Gst.Event, user_data: object | null) => boolean;
export type CollectPadsFlushFunction = (pads: CollectPads, user_data: object | null) => void;
export type CollectPadsFunction = (pads: CollectPads, user_data: object | null) => Gst.FlowReturn;
export type CollectPadsQueryFunction = (pads: CollectPads, pad: CollectData, query: Gst.Query, user_data: object | null) => boolean;
export type DataQueueCheckFullFunction = (queue: DataQueue, visible: number, bytes: number, time: number, checkdata: object | null) => boolean;
export type DataQueueEmptyCallback = (queue: DataQueue, checkdata: object | null) => void;
export type DataQueueFullCallback = (queue: DataQueue, checkdata: object | null) => void;
export type TypeFindHelperGetRangeFunction = (obj: Gst.Object, parent: Gst.Object | null, offset: number, length: number) => Gst.FlowReturn;
export const BASE_PARSE_FLAG_DRAINING: number;
export const BASE_PARSE_FLAG_LOST_SYNC: number;
export const BASE_TRANSFORM_SINK_NAME: string;
export const BASE_TRANSFORM_SRC_NAME: string;
/**
 * Create a new #GstBitReader instance, which will read from @data.
 * Free-function: gst_bit_reader_free
 */
export function bit_reader_new(data: number[], size: number): BitReader;
/**
 * Creates a new, empty #GstBitWriter instance.
 * Free-function: gst_bit_writer_free
 */
export function bit_writer_new(): BitWriter;
/**
 * Creates a new #GstBitWriter instance with the given memory area. If
 * @initialized is %TRUE it is possible to read @size bits from the
 * #GstBitWriter from the beginnig.
 * Free-function: gst_bit_writer_free
 */
export function bit_writer_new_with_data(data: number, size: number, initialized: boolean): BitWriter;
/**
 * Creates a #GstBitWriter instance with the given initial data size.
 * Free-function: gst_bit_writer_free
 */
export function bit_writer_new_with_size(size: number, fixed: boolean): BitWriter;
/**
 * Create a new #GstByteReader instance, which will read from @data.
 * Free-function: gst_byte_reader_free
 */
export function byte_reader_new(data: number[], size: number): ByteReader;
/**
 * Creates a new, empty #GstByteWriter instance
 * Free-function: gst_byte_writer_free
 */
export function byte_writer_new(): ByteWriter;
/**
 * Creates a new #GstByteWriter instance with the given
 * memory area. If @initialized is %TRUE it is possible to
 * read @size bytes from the #GstByteWriter from the beginning.
 * Free-function: gst_byte_writer_free
 */
export function byte_writer_new_with_data(data: number, size: number, initialized: boolean): ByteWriter;
/**
 * Creates a new #GstByteWriter instance with the given
 * initial data size.
 * Free-function: gst_byte_writer_free
 */
export function byte_writer_new_with_size(size: number, fixed: boolean): ByteWriter;
/**
 * Allocates a new #GstQueueArray object with an initial
 * queue size of @initial_size.
 */
export function queue_array_new(initial_size: number): QueueArray;
/**
 * Allocates a new #GstQueueArray object for elements (e.g. structures)
 * of size @struct_size, with an initial queue size of @initial_size.
 */
export function queue_array_new_for_struct(struct_size: number, initial_size: number): QueueArray;
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
export class Adapter extends GObject.Object {constructor(config?: properties);
available(): number;
available_fast(): number;
clear(): void;
copy(offset: number): [number[],number];
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
export class Aggregator  {constructor(config?: properties);
latency: number;
min_upstream_latency: number;
start_time: number;
start_time_selection: unknown;
readonly srcpad: Gst.Pad;
readonly priv: AggregatorPrivate;
readonly _gst_reserved: object[];
finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
get_allocator(): [Gst.Allocator | null,Gst.AllocationParams | null];
get_buffer_pool(): Gst.BufferPool;
get_latency(): Gst.ClockTime;
set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
set_src_caps(caps: Gst.Caps): void;
simple_get_next_time(): Gst.ClockTime;
}
export class AggregatorPad  {constructor(config?: properties);
emit_signals: boolean;
readonly segment: Gst.Segment;
readonly priv: AggregatorPadPrivate;
readonly _gst_reserved: object[];
drop_buffer(): boolean;
has_buffer(): boolean;
is_eos(): boolean;
peek_buffer(): Gst.Buffer;
pop_buffer(): Gst.Buffer;
}
export class BaseParse  {constructor(config?: properties);
disable_passthrough: boolean;
readonly element: Gst.Element;
readonly sinkpad: Gst.Pad;
readonly srcpad: Gst.Pad;
readonly flags: number;
readonly segment: Gst.Segment;
readonly _gst_reserved: object[];
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
export class BaseSink  {constructor(config?: properties);
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
readonly _gst_reserved: object[];
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
export class BaseSrc  {constructor(config?: properties);
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
readonly _gst_reserved: object[];
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
export class BaseTransform  {constructor(config?: properties);
qos: boolean;
readonly element: Gst.Element;
readonly sinkpad: Gst.Pad;
readonly srcpad: Gst.Pad;
readonly have_segment: boolean;
readonly segment: Gst.Segment;
readonly queued_buf: Gst.Buffer;
readonly priv: BaseTransformPrivate;
readonly _gst_reserved: object[];
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
export class CollectPads extends Gst.Object {constructor(config?: properties);
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
export class DataQueue extends GObject.Object {constructor(config?: properties);
readonly current_level_bytes: number;
readonly current_level_time: number;
readonly current_level_visible: number;
drop_head(type: unknown): boolean;
flush(): void;
get_level(): [DataQueueSize];
is_empty(): boolean;
is_full(): boolean;
limits_changed(): void;
peek(): [boolean, DataQueueItem];
pop(): [boolean, DataQueueItem];
push(item: DataQueueItem): boolean;
push_force(item: DataQueueItem): boolean;
set_flushing(flushing: boolean): void;
vfunc_empty(): void;
vfunc_full(): void;
}
export class PushSrc  {constructor(config?: properties);
readonly _gst_reserved: object[];
}
export class AdapterClass  {constructor(config?: properties);
}
export class AggregatorClass  {constructor(config?: properties);
readonly parent_class: Gst.ElementClass;
readonly flush: unknown;
readonly clip: unknown;
readonly finish_buffer: unknown;
readonly sink_event: unknown;
readonly sink_query: unknown;
readonly src_event: unknown;
readonly src_query: unknown;
readonly src_activate: unknown;
readonly aggregate: unknown;
readonly stop: unknown;
readonly start: unknown;
readonly get_next_time: unknown;
readonly create_new_pad: unknown;
readonly update_src_caps: unknown;
readonly fixate_src_caps: unknown;
readonly negotiated_src_caps: unknown;
readonly decide_allocation: unknown;
readonly propose_allocation: unknown;
readonly _gst_reserved: object[];
}
export class AggregatorPadClass  {constructor(config?: properties);
readonly parent_class: Gst.PadClass;
readonly flush: unknown;
readonly skip_buffer: unknown;
readonly _gst_reserved: object[];
}
export class AggregatorPadPrivate  {constructor(config?: properties);
}
export class AggregatorPrivate  {constructor(config?: properties);
}
export class BaseParseClass  {constructor(config?: properties);
readonly parent_class: Gst.ElementClass;
readonly start: unknown;
readonly stop: unknown;
readonly set_sink_caps: unknown;
readonly handle_frame: unknown;
readonly pre_push_frame: unknown;
readonly convert: unknown;
readonly sink_event: unknown;
readonly src_event: unknown;
readonly get_sink_caps: unknown;
readonly detect: unknown;
readonly sink_query: unknown;
readonly src_query: unknown;
readonly _gst_reserved: object[];
}
export class BaseParseFrame  {constructor(config?: properties);
copy(): BaseParseFrame;
free(): void;
init(): void;
}
export class BaseParsePrivate  {constructor(config?: properties);
}
export class BaseSinkClass  {constructor(config?: properties);
readonly parent_class: Gst.ElementClass;
readonly get_caps: unknown;
readonly set_caps: unknown;
readonly fixate: unknown;
readonly activate_pull: unknown;
readonly get_times: unknown;
readonly propose_allocation: unknown;
readonly start: unknown;
readonly stop: unknown;
readonly unlock: unknown;
readonly unlock_stop: unknown;
readonly query: unknown;
readonly event: unknown;
readonly wait_event: unknown;
readonly prepare: unknown;
readonly prepare_list: unknown;
readonly preroll: unknown;
readonly render: unknown;
readonly render_list: unknown;
readonly _gst_reserved: object[];
}
export class BaseSinkPrivate  {constructor(config?: properties);
}
export class BaseSrcClass  {constructor(config?: properties);
readonly parent_class: Gst.ElementClass;
readonly get_caps: unknown;
readonly negotiate: unknown;
readonly fixate: unknown;
readonly set_caps: unknown;
readonly decide_allocation: unknown;
readonly start: unknown;
readonly stop: unknown;
readonly get_times: unknown;
readonly get_size: unknown;
readonly is_seekable: unknown;
readonly prepare_seek_segment: unknown;
readonly do_seek: unknown;
readonly unlock: unknown;
readonly unlock_stop: unknown;
readonly query: unknown;
readonly event: unknown;
readonly create: unknown;
readonly alloc: unknown;
readonly fill: unknown;
readonly _gst_reserved: object[];
}
export class BaseSrcPrivate  {constructor(config?: properties);
}
export class BaseTransformClass  {constructor(config?: properties);
readonly parent_class: Gst.ElementClass;
readonly passthrough_on_same_caps: boolean;
readonly transform_ip_on_passthrough: boolean;
readonly transform_caps: unknown;
readonly fixate_caps: unknown;
readonly accept_caps: unknown;
readonly set_caps: unknown;
readonly query: unknown;
readonly decide_allocation: unknown;
readonly filter_meta: unknown;
readonly propose_allocation: unknown;
readonly transform_size: unknown;
readonly get_unit_size: unknown;
readonly start: unknown;
readonly stop: unknown;
readonly sink_event: unknown;
readonly src_event: unknown;
readonly prepare_output_buffer: unknown;
readonly copy_metadata: unknown;
readonly transform_meta: unknown;
readonly before_transform: unknown;
readonly transform: unknown;
readonly transform_ip: unknown;
readonly submit_input_buffer: unknown;
readonly generate_output: unknown;
readonly _gst_reserved: object[];
}
export class BaseTransformPrivate  {constructor(config?: properties);
}
export class BitReader  {constructor(config?: properties);
data: number[];
size: number;
_byte: number;
bit: number;
readonly _gst_reserved: object[];
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
static _new(data: number[], size: number): BitReader;
}
export class BitWriter  {constructor(config?: properties);
data: number;
bit_size: number;
readonly bit_capacity: number;
readonly auto_grow: boolean;
readonly owned: boolean;
readonly _gst_reserved: object[];
align_bytes(trailing_bit: number): boolean;
free(): void;
free_and_get_buffer(): Gst.Buffer;
free_and_get_data(): number[];
get_data(): number;
get_remaining(): number;
get_size(): number;
init(): void;
init_with_data(data: number[], size: number, initialized: boolean): void;
init_with_size(size: number, fixed: boolean): void;
put_bits_uint16(value: number, nbits: number): boolean;
put_bits_uint32(value: number, nbits: number): boolean;
put_bits_uint64(value: number, nbits: number): boolean;
put_bits_uint8(value: number, nbits: number): boolean;
put_bytes(data: number, nbytes: number): boolean;
reset(): void;
reset_and_get_buffer(): Gst.Buffer;
reset_and_get_data(): number[];
set_pos(pos: number): boolean;
static _new(): BitWriter;
static new_with_data(data: number, size: number, initialized: boolean): BitWriter;
static new_with_size(size: number, fixed: boolean): BitWriter;
}
export class ByteReader  {constructor(config?: properties);
data: number[];
size: number;
_byte: number;
readonly _gst_reserved: object[];
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
get_sub_reader(sub_reader: ByteReader, size: number): boolean;
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
peek_sub_reader(sub_reader: ByteReader, size: number): boolean;
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
static _new(data: number[], size: number): ByteReader;
}
export class ByteWriter  {constructor(config?: properties);
alloc_size: number;
fixed: boolean;
owned: boolean;
readonly _gst_reserved: object[];
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
static _new(): ByteWriter;
static new_with_data(data: number, size: number, initialized: boolean): ByteWriter;
static new_with_size(size: number, fixed: boolean): ByteWriter;
}
export class CollectData  {constructor(config?: properties);
collect: CollectPads;
pad: Gst.Pad;
buffer: Gst.Buffer;
pos: number;
segment: Gst.Segment;
readonly state: CollectPadsStateFlags;
readonly priv: CollectDataPrivate;
}
export class CollectDataPrivate  {constructor(config?: properties);
}
export class CollectPadsClass  {constructor(config?: properties);
readonly parent_class: Gst.ObjectClass;
readonly _gst_reserved: object[];
}
export class CollectPadsPrivate  {constructor(config?: properties);
}
export class DataQueueClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly empty: unknown;
readonly full: unknown;
readonly _gst_reserved: object[];
}
export class DataQueueItem  {constructor(config?: properties);
object: Gst.MiniObject;
size: number;
duration: number;
visible: boolean;
destroy: GLib.DestroyNotify;
readonly _gst_reserved: object[];
}
export class DataQueuePrivate  {constructor(config?: properties);
}
export class DataQueueSize  {constructor(config?: properties);
visible: number;
bytes: number;
time: number;
}
export class FlowCombiner  {constructor(config?: properties);
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
export class PushSrcClass  {constructor(config?: properties);
readonly parent_class: BaseSrcClass;
readonly create: unknown;
readonly alloc: unknown;
readonly fill: unknown;
readonly _gst_reserved: object[];
}
export class QueueArray  {constructor(config?: properties);
clear(): void;
drop_element(idx: number): object | null;
drop_struct(idx: number, p_struct: object | null): boolean;
find(func: GLib.CompareFunc | null, data: object | null): number;
free(): void;
get_length(): number;
is_empty(): boolean;
peek_head(): object | null;
peek_head_struct(): object | null;
peek_nth(idx: number): object | null;
peek_nth_struct(idx: number): object | null;
peek_tail(): object | null;
peek_tail_struct(): object | null;
pop_head(): object | null;
pop_head_struct(): object | null;
pop_tail(): object | null;
pop_tail_struct(): object | null;
push_tail(data: object | null): void;
push_tail_struct(p_struct: object | null): void;
set_clear_func(clear_func: GLib.DestroyNotify): void;
static _new(initial_size: number): QueueArray;
static new_for_struct(struct_size: number, initial_size: number): QueueArray;
}