
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GModule from "gmodule";
import * as Gst from "gst";
import * as GstCheck from "gstcheck";
/**
 * gstcheck.d.ts
 */
type properties = { [key: string]: any };
export type CheckLogFilterFunc = (log_domain: string, log_level: GLib.LogLevelFlags, message: string, user_data: object | null) => boolean;
export type HarnessPrepareBufferFunc = (h: Harness, data: object | null) => Gst.Buffer;
export type HarnessPrepareEventFunc = (h: Harness, data: object | null) => Gst.Event;
/**
 * Get one buffer from @pad. Implemented via buffer probes. This function
 *  will
 * block until the pipeline passes a buffer over @pad, so for robust beha
 * vior
 * in unit tests, you need to use check's timeout to fail out in the case
 *  that a
 * buffer never arrives.
 * You must have previously called gst_buffer_straw_start_pipeline() on
 * @pipeline and @pad.
 */
export function buffer_straw_get_buffer(bin: Gst.Element, pad: Gst.Pad): Gst.Buffer;
/**
 * Sets up a pipeline for buffer sucking. This will allow you to call
 * gst_buffer_straw_get_buffer() to access buffers as they pass over @pad
 * .
 * This function is normally used in unit tests that want to verify that 
 * a
 * particular element is outputting correct buffers. For example, you wou
 * ld make
 * a pipeline via gst_parse_launch(), pull out the pad you want to monito
 * r, then
 * call gst_buffer_straw_get_buffer() to get the buffers that pass throug
 * h @pad.
 * The pipeline will block until you have sucked off the buffers.
 * This function will set the state of @bin to PLAYING; to clean up, be s
 * ure to
 * call gst_buffer_straw_stop_pipeline().
 * Note that you may not start two buffer straws at the same time. This f
 * unction
 * is intended for unit tests, not general API use. In fact it calls fail
 * _if
 * from libcheck, so you cannot use it outside unit tests.
 */
export function buffer_straw_start_pipeline(bin: Gst.Element, pad: Gst.Pad): void;
/**
 * Set @bin to #GST_STATE_NULL and release resource allocated in
 * gst_buffer_straw_start_pipeline().
 * You must have previously called gst_buffer_straw_start_pipeline() on
 * @pipeline and @pad.
 */
export function buffer_straw_stop_pipeline(bin: Gst.Element, pad: Gst.Pad): void;
/**
 * 
 */
export function check_abi_list(list: CheckABIStruct, have_abi_sizes: boolean): void;
/**
 * Add a callback @func to be called for all log messages that matches
 * @log_domain, @log_level and @regex. If @func is NULL the
 * matching logs will be silently discarded by GstCheck.
 * MT safe.
 */
export function check_add_log_filter(log_domain: string, log_level: GLib.LogLevelFlags, regex: GLib.Regex, func: CheckLogFilterFunc, user_data: object | null, destroy_data: GLib.DestroyNotify): CheckLogFilter;
/**
 * Compare the buffer contents with @data and @size.
 */
export function check_buffer_data(buffer: Gst.Buffer, data: object | null, size: number): void;
/**
 * Compare two caps with gst_caps_is_equal and fail unless they are
 * equal.
 */
export function check_caps_equal(caps1: Gst.Caps, caps2: Gst.Caps): void;
/**
 * 
 */
export function check_chain_func(pad: Gst.Pad, parent: Gst.Object, buffer: Gst.Buffer): Gst.FlowReturn;
/**
 * Clear all filters added by @gst_check_add_log_filter.
 * MT safe.
 */
export function check_clear_log_filter(): void;
/**
 * Unref and remove all buffers that are in the global @buffers GList,
 * emptying the list.
 */
export function check_drop_buffers(): void;
/**
 * Create an element using the factory providing the @element_name and
 * push the @buffer_in to this element. The element should create one buf
 * fer
 * and this will be compared with @buffer_out. We only check the caps
 * and the data of the buffers. This function unrefs the buffers.
 */
export function check_element_push_buffer(element_name: string, buffer_in: Gst.Buffer, caps_in: Gst.Caps, buffer_out: Gst.Buffer, caps_out: Gst.Caps): void;
/**
 * Create an element using the factory providing the @element_name and pu
 * sh the
 * buffers in @buffer_in to this element. The element should create the b
 * uffers
 * equal to the buffers in @buffer_out. We only check the size and the da
 * ta of
 * the buffers. This function unrefs the buffers in the two lists.
 * The last_flow_return parameter indicates the expected flow return valu
 * e from
 * pushing the final buffer in the list.
 * This can be used to set up a test which pushes some buffers and then a
 * n
 * invalid buffer, when the final buffer is expected to fail, for example
 * .
 */
export function check_element_push_buffer_list(element_name: string, buffer_in: GLib.List, caps_in: Gst.Caps, buffer_out: GLib.List, caps_out: Gst.Caps, last_flow_return: Gst.FlowReturn): void;
/**
 * 
 */
export function check_init(argc: number, argv: string): void;
/**
 * 
 */
export function check_message_error(message: Gst.Message, type: Gst.MessageType, domain: GLib.Quark, code: number): void;
/**
 * Unrefs @object_to_unref and checks that is has properly been
 * destroyed.
 */
export function check_object_destroyed_on_unref(object_to_unref: object | null): void;
/**
 * Unrefs @object_to_unref and checks that is has properly been
 * destroyed, also checks that the other objects passed in
 * parametter have been destroyed as a concequence of
 * unrefing @object_to_unref. Last variable argument should be NULL.
 */
export function check_objects_destroyed_on_unref(object_to_unref: object | null, first_object: object | null, ___: unknown[]): void;
/**
 * Remove a filter that has been added by @gst_check_add_log_filter.
 * MT safe.
 */
export function check_remove_log_filter(filter: CheckLogFilter): void;
/**
 * 
 */
export function check_run_suite(suite: unknown, name: string, fname: string): number;
/**
 * setup an element for a filter test with mysrcpad and mysinkpad
 */
export function check_setup_element(factory: string): Gst.Element;
/**
 * Push stream-start, caps and segment event, which consist of the minimu
 * m
 * required events to allow streaming. Caps is optional to allow raw src
 * testing. If @element has more than one src or sink pad, use
 * gst_check_setup_events_with_stream_id() instead.
 */
export function check_setup_events(srcpad: Gst.Pad, element: Gst.Element, caps: Gst.Caps | null, format: Gst.Format): void;
/**
 * Push stream-start, caps and segment event, which consist of the minimu
 * m
 * required events to allow streaming. Caps is optional to allow raw src
 * testing.
 */
export function check_setup_events_with_stream_id(srcpad: Gst.Pad, element: Gst.Element, caps: Gst.Caps | null, format: Gst.Format, stream_id: string): void;
/**
 * Does the same as #gst_check_setup_sink_pad_by_name with the <emphasis>
 *  name </emphasis> parameter equal to "src".
 */
export function check_setup_sink_pad(element: Gst.Element, tmpl: Gst.StaticPadTemplate): Gst.Pad;
/**
 * Creates a new sink pad (based on the given @tmpl) and links it to the 
 * given @element src pad
 * (the pad that matches the given @name).
 * You can set event/chain/query functions on this pad to check the outpu
 * t of the @element.
 */
export function check_setup_sink_pad_by_name(element: Gst.Element, tmpl: Gst.StaticPadTemplate, name: string): Gst.Pad;
/**
 * 
 */
export function check_setup_sink_pad_by_name_from_template(element: Gst.Element, tmpl: Gst.PadTemplate, name: string): Gst.Pad;
/**
 * 
 */
export function check_setup_sink_pad_from_template(element: Gst.Element, tmpl: Gst.PadTemplate): Gst.Pad;
/**
 * Does the same as #gst_check_setup_src_pad_by_name with the <emphasis> 
 * name </emphasis> parameter equal to "sink".
 */
export function check_setup_src_pad(element: Gst.Element, tmpl: Gst.StaticPadTemplate): Gst.Pad;
/**
 * Creates a new src pad (based on the given @tmpl) and links it to the g
 * iven @element sink pad (the pad that matches the given @name).
 * Before using the src pad to push data on @element you need to call #gs
 * t_check_setup_events on the created src pad.
 * Example of how to push a buffer on @element:
 * |[<!-- language="C" -->
 * static GstStaticPadTemplate sinktemplate = GST_STATIC_PAD_TEMPLATE ("s
 * ink",
 * GST_PAD_SINK,
 * GST_PAD_ALWAYS,
 * GST_STATIC_CAPS (YOUR_CAPS_TEMPLATE_STRING)
 * );
 * static GstStaticPadTemplate srctemplate = GST_STATIC_PAD_TEMPLATE ("sr
 * c",
 * GST_PAD_SRC,
 * GST_PAD_ALWAYS,
 * GST_STATIC_CAPS (YOUR_CAPS_TEMPLATE_STRING)
 * );
 * GstElement * element = gst_check_setup_element ("element");
 * GstPad * mysrcpad = gst_check_setup_src_pad (element, &srctemplate);
 * GstPad * mysinkpad = gst_check_setup_sink_pad (element, &sinktemplate)
 * ;
 * gst_pad_set_active (mysrcpad, TRUE);
 * gst_pad_set_active (mysinkpad, TRUE);
 * fail_unless (gst_element_set_state (element, GST_STATE_PLAYING) == GST
 * _STATE_CHANGE_SUCCESS, "could not set to playing");
 * GstCaps * caps = gst_caps_from_string (YOUR_DESIRED_SINK_CAPS);
 * gst_check_setup_events (mysrcpad, element, caps, GST_FORMAT_TIME);
 * gst_caps_unref (caps);
 * fail_unless (gst_pad_push (mysrcpad, gst_buffer_new_and_alloc(2)) == G
 * ST_FLOW_OK);
 * ]|
 * For very simple input/output test scenarios checkout #gst_check_elemen
 * t_push_buffer_list and #gst_check_element_push_buffer.
 */
export function check_setup_src_pad_by_name(element: Gst.Element, tmpl: Gst.StaticPadTemplate, name: string): Gst.Pad;
/**
 * 
 */
export function check_setup_src_pad_by_name_from_template(element: Gst.Element, tmpl: Gst.PadTemplate, name: string): Gst.Pad;
/**
 * 
 */
export function check_setup_src_pad_from_template(element: Gst.Element, tmpl: Gst.PadTemplate): Gst.Pad;
/**
 * 
 */
export function check_teardown_element(element: Gst.Element): void;
/**
 * 
 */
export function check_teardown_pad_by_name(element: Gst.Element, name: string): void;
/**
 * 
 */
export function check_teardown_sink_pad(element: Gst.Element): void;
/**
 * 
 */
export function check_teardown_src_pad(element: Gst.Element): void;
/**
 * Sets up a data probe on the given pad which will raise assertions if t
 * he
 * data flow is inconsistent.
 */
export function consistency_checker_add_pad(consist: StreamConsistency, pad: Gst.Pad): boolean;
/**
 * Frees the allocated data and probes associated with @consist.
 */
export function consistency_checker_free(consist: StreamConsistency): void;
/**
 * Sets up a data probe on the given pad which will raise assertions if t
 * he
 * data flow is inconsistent.
 */
export function consistency_checker_new(pad: Gst.Pad): StreamConsistency;
/**
 * Reset the stream checker's internal variables.
 */
export function consistency_checker_reset(consist: StreamConsistency): void;
/**
 * Creates a new harness. Works like gst_harness_new_with_padnames(), exc
 * ept it
 * assumes the #GstElement sinkpad is named "sink" and srcpad is named "s
 * rc"
 * MT safe.
 */
export function harness_new(element_name: string): Harness;
/**
 * Creates a new empty harness. Use gst_harness_add_element_full() to add
 * an #GstElement to it.
 * MT safe.
 */
export function harness_new_empty(): Harness;
/**
 * Creates a new harness.
 * MT safe.
 */
export function harness_new_full(element: Gst.Element, hsrc: Gst.StaticPadTemplate | null, element_sinkpad_name: string | null, hsink: Gst.StaticPadTemplate | null, element_srcpad_name: string | null): Harness;
/**
 * Creates a new harness, parsing the @launchline and putting that in a #
 * GstBin,
 * and then attches the harness to the bin.
 * MT safe.
 */
export function harness_new_parse(launchline: string): Harness;
/**
 * Creates a new harness. Works in the same way as gst_harness_new_full()
 * , only
 * that generic padtemplates are used for the harness src and sinkpads, w
 * hich
 * will be sufficient in most usecases.
 * MT safe.
 */
export function harness_new_with_element(element: Gst.Element, element_sinkpad_name: string | null, element_srcpad_name: string | null): Harness;
/**
 * Creates a new harness. Works like gst_harness_new_with_element(),
 * except you specify the factoryname of the #GstElement
 * MT safe.
 */
export function harness_new_with_padnames(element_name: string, element_sinkpad_name: string | null, element_srcpad_name: string | null): Harness;
/**
 * Creates a new harness, like gst_harness_new_full(), except it
 * assumes the #GstElement sinkpad is named "sink" and srcpad is named "s
 * rc"
 * MT safe.
 */
export function harness_new_with_templates(element_name: string, hsrc: Gst.StaticPadTemplate | null, hsink: Gst.StaticPadTemplate | null): Harness;
/**
 * Stop the running #GstHarnessThread
 * MT safe.
 */
export function harness_stress_thread_stop(t: HarnessThread): number;
export class TestClock extends Gst.Clock {constructor(config?: properties);
clock_type: Gst.ClockType;
start_time: number;static new_with_start_time(start_time: Gst.ClockTime): Gst.Clock;
advance_time(delta: Gst.ClockTimeDiff): void;
crank(): boolean;
get_next_entry_time(): Gst.ClockTime;
has_id(id: Gst.ClockID): boolean;
peek_id_count(): number;
peek_next_pending_id(): [boolean, Gst.ClockID | null];
process_id_list(pending_list: GLib.List | null): number;
process_next_clock_id(): Gst.ClockID;
set_time(new_time: Gst.ClockTime): void;
timed_wait_for_multiple_pending_ids(count: number, timeout_ms: number): [boolean, GLib.List | null];
wait_for_multiple_pending_ids(count: number): [GLib.List | null];
wait_for_next_pending_id(): [Gst.ClockID | null];
wait_for_pending_id_count(count: number): void;
static id_list_get_latest_time(pending_list: GLib.List | null): Gst.ClockTime;
}
export class CheckABIStruct  {constructor(config?: properties);
name: string;
size: number;
abi_size: number;
}
export class CheckLogFilter  {constructor(config?: properties);
}
export class Harness  {constructor(config?: properties);
element: Gst.Element;
srcpad: Gst.Pad;
sinkpad: Gst.Pad;
src_harness: Harness;
sink_harness: Harness;
readonly priv: HarnessPrivate;
add_element_full(element: Gst.Element, hsrc: Gst.StaticPadTemplate | null, element_sinkpad_name: string | null, hsink: Gst.StaticPadTemplate | null, element_srcpad_name: string | null): void;
add_element_sink_pad(sinkpad: Gst.Pad): void;
add_element_src_pad(srcpad: Gst.Pad): void;
add_parse(launchline: string): void;
add_probe(element_name: string, pad_name: string, mask: Gst.PadProbeType, callback: Gst.PadProbeCallback, user_data: object | null, destroy_data: GLib.DestroyNotify): void;
add_propose_allocation_meta(api: unknown, params: Gst.Structure | null): void;
add_sink(sink_element_name: string): void;
add_sink_harness(sink_harness: Harness): void;
add_sink_parse(launchline: string): void;
add_src(src_element_name: string, has_clock_wait: boolean): void;
add_src_harness(src_harness: Harness, has_clock_wait: boolean): void;
add_src_parse(launchline: string, has_clock_wait: boolean): void;
buffers_in_queue(): number;
buffers_received(): number;
crank_multiple_clock_waits(waits: number): boolean;
crank_single_clock_wait(): boolean;
create_buffer(size: number): Gst.Buffer;
dump_to_file(filename: string): void;
events_in_queue(): number;
events_received(): number;
find_element(element_name: string): Gst.Element | null;
get(element_name: string, first_property_name: string, ___: unknown[]): void;
get_allocator(): [Gst.Allocator | null,Gst.AllocationParams | null];
get_last_pushed_timestamp(): Gst.ClockTime;
get_testclock(): TestClock;
play(): void;
pull(): Gst.Buffer;
pull_event(): Gst.Event;
pull_upstream_event(): Gst.Event;
push(buffer: Gst.Buffer): Gst.FlowReturn;
push_and_pull(buffer: Gst.Buffer): Gst.Buffer;
push_event(event: Gst.Event): boolean;
push_from_src(): Gst.FlowReturn;
push_to_sink(): Gst.FlowReturn;
push_upstream_event(event: Gst.Event): boolean;
query_latency(): Gst.ClockTime;
set(element_name: string, first_property_name: string, ___: unknown[]): void;
set_blocking_push_mode(): void;
set_caps(_in: Gst.Caps, out: Gst.Caps): void;
set_caps_str(_in: string, out: string): void;
set_drop_buffers(drop_buffers: boolean): void;
set_forwarding(forwarding: boolean): void;
set_propose_allocator(allocator: Gst.Allocator | null, params: Gst.AllocationParams | null): void;
set_sink_caps(caps: Gst.Caps): void;
set_sink_caps_str(str: string): void;
set_src_caps(caps: Gst.Caps): void;
set_src_caps_str(str: string): void;
set_time(time: Gst.ClockTime): boolean;
set_upstream_latency(latency: Gst.ClockTime): void;
sink_push_many(pushes: number): Gst.FlowReturn;
src_crank_and_push_many(cranks: number, pushes: number): Gst.FlowReturn;
src_push_event(): boolean;
stress_custom_start(init: GLib.Func | null, callback: GLib.Func, data: object | null, sleep: number): HarnessThread;
stress_property_start_full(name: string, value: GObject.Value, sleep: number): HarnessThread;
stress_push_buffer_start_full(caps: Gst.Caps, segment: Gst.Segment, buf: Gst.Buffer, sleep: number): HarnessThread;
stress_push_buffer_with_cb_start_full(caps: Gst.Caps, segment: Gst.Segment, func: HarnessPrepareBufferFunc, data: object | null, notify: GLib.DestroyNotify, sleep: number): HarnessThread;
stress_push_event_start_full(event: Gst.Event, sleep: number): HarnessThread;
stress_push_event_with_cb_start_full(func: HarnessPrepareEventFunc, data: object | null, notify: GLib.DestroyNotify, sleep: number): HarnessThread;
stress_push_upstream_event_start_full(event: Gst.Event, sleep: number): HarnessThread;
stress_push_upstream_event_with_cb_start_full(func: HarnessPrepareEventFunc, data: object | null, notify: GLib.DestroyNotify, sleep: number): HarnessThread;
stress_requestpad_start_full(templ: Gst.PadTemplate, name: string, caps: Gst.Caps, release: boolean, sleep: number): HarnessThread;
stress_statechange_start_full(sleep: number): HarnessThread;
take_all_data(): [number, number];
take_all_data_as_buffer(): Gst.Buffer;
take_all_data_as_bytes(): GLib.Bytes;
teardown(): void;
try_pull(): Gst.Buffer;
try_pull_event(): Gst.Event;
try_pull_upstream_event(): Gst.Event;
upstream_events_in_queue(): number;
upstream_events_received(): number;
use_systemclock(): void;
use_testclock(): void;
wait_for_clock_id_waits(waits: number, timeout: number): boolean;
static _new(element_name: string): Harness;
static new_empty(): Harness;
static new_full(element: Gst.Element, hsrc: Gst.StaticPadTemplate | null, element_sinkpad_name: string | null, hsink: Gst.StaticPadTemplate | null, element_srcpad_name: string | null): Harness;
static new_parse(launchline: string): Harness;
static new_with_element(element: Gst.Element, element_sinkpad_name: string | null, element_srcpad_name: string | null): Harness;
static new_with_padnames(element_name: string, element_sinkpad_name: string | null, element_srcpad_name: string | null): Harness;
static new_with_templates(element_name: string, hsrc: Gst.StaticPadTemplate | null, hsink: Gst.StaticPadTemplate | null): Harness;
static stress_thread_stop(t: HarnessThread): number;
}
export class HarnessPrivate  {constructor(config?: properties);
}
export class HarnessThread  {constructor(config?: properties);
}
export class StreamConsistency  {constructor(config?: properties);
}
export class TestClockClass  {constructor(config?: properties);
readonly parent_class: Gst.ClockClass;
}
export class TestClockPrivate  {constructor(config?: properties);
}