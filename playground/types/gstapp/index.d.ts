
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gst from "gst";
import * as GstBase from "gstbase";
import * as GstApp from "gstapp";
/**
 * gstapp.d.ts
 */
type properties = { [key: string]: any };
export enum AppStreamType {
    STREAM = 0,
    SEEKABLE = 1,
    RANDOM_ACCESS = 2,
}
export class AppSink  {constructor(config?: properties);
buffer_list: boolean;
caps: Gst.Caps;
drop: boolean;
emit_signals: boolean;
readonly eos: boolean;
max_buffers: number;
wait_on_eos: boolean;
readonly basesink: GstBase.BaseSink;
readonly priv: AppSinkPrivate;
readonly _gst_reserved: object[];
get_buffer_list_support(): boolean;
get_caps(): Gst.Caps;
get_drop(): boolean;
get_emit_signals(): boolean;
get_max_buffers(): number;
get_wait_on_eos(): boolean;
is_eos(): boolean;
pull_preroll(): Gst.Sample;
pull_sample(): Gst.Sample;
set_buffer_list_support(enable_lists: boolean): void;
set_callbacks(callbacks: AppSinkCallbacks, user_data: object | null, notify: GLib.DestroyNotify): void;
set_caps(caps: Gst.Caps): void;
set_drop(drop: boolean): void;
set_emit_signals(emit: boolean): void;
set_max_buffers(max: number): void;
set_wait_on_eos(wait: boolean): void;
try_pull_preroll(timeout: Gst.ClockTime): Gst.Sample;
try_pull_sample(timeout: Gst.ClockTime): Gst.Sample;
}
export class AppSrc  {constructor(config?: properties);
block: boolean;
caps: Gst.Caps;
readonly current_level_bytes: number;
duration: number;
emit_signals: boolean;
format: Gst.Format;
is_live: boolean;
max_bytes: number;
max_latency: number;
min_latency: number;
min_percent: number;
size: number;
stream_type: AppStreamType;
readonly basesrc: GstBase.BaseSrc;
readonly priv: AppSrcPrivate;
readonly _gst_reserved: object[];
end_of_stream(): Gst.FlowReturn;
get_caps(): Gst.Caps;
get_current_level_bytes(): number;
get_duration(): Gst.ClockTime;
get_emit_signals(): boolean;
get_latency(): [number,number];
get_max_bytes(): number;
get_size(): number;
get_stream_type(): AppStreamType;
push_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
push_buffer_list(buffer_list: Gst.BufferList): Gst.FlowReturn;
push_sample(sample: Gst.Sample): Gst.FlowReturn;
set_callbacks(callbacks: AppSrcCallbacks, user_data: object | null, notify: GLib.DestroyNotify): void;
set_caps(caps: Gst.Caps): void;
set_duration(duration: Gst.ClockTime): void;
set_emit_signals(emit: boolean): void;
set_latency(min: number, max: number): void;
set_max_bytes(max: number): void;
set_size(size: number): void;
set_stream_type(type: AppStreamType): void;
}
export class AppSinkCallbacks  {constructor(config?: properties);
readonly eos: unknown;
readonly new_preroll: unknown;
readonly new_sample: unknown;
readonly _gst_reserved: object[];
}
export class AppSinkClass  {constructor(config?: properties);
readonly basesink_class: GstBase.BaseSinkClass;
readonly eos: unknown;
readonly new_preroll: unknown;
readonly new_sample: unknown;
readonly pull_preroll: unknown;
readonly pull_sample: unknown;
readonly try_pull_preroll: unknown;
readonly try_pull_sample: unknown;
readonly _gst_reserved: object[];
}
export class AppSinkPrivate  {constructor(config?: properties);
}
export class AppSrcCallbacks  {constructor(config?: properties);
readonly need_data: unknown;
readonly enough_data: unknown;
readonly seek_data: unknown;
readonly _gst_reserved: object[];
}
export class AppSrcClass  {constructor(config?: properties);
readonly basesrc_class: GstBase.BaseSrcClass;
readonly need_data: unknown;
readonly enough_data: unknown;
readonly seek_data: unknown;
readonly push_buffer: unknown;
readonly end_of_stream: unknown;
readonly push_sample: unknown;
readonly push_buffer_list: unknown;
readonly _gst_reserved: object[];
}
export class AppSrcPrivate  {constructor(config?: properties);
}