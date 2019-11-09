
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GModule from "gmodule";
import * as Gst from "gst";
import * as GstBase from "gstbase";
import * as GstAudio from "gstaudio";
/**
 * gstaudio.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type AudioBaseSinkCustomSlavingCallback = (sink: AudioBaseSink, etime: Gst.ClockTime, itime: Gst.ClockTime, requested_skew: Gst.ClockTimeDiff, discont_reason: AudioBaseSinkDiscontReason, user_data: object | null) => void;
export type AudioClockGetTimeFunc = (clock: Gst.Clock, user_data: object | null) => Gst.ClockTime;
export type AudioFormatPack = (info: AudioFormatInfo, flags: AudioPackFlags, src: number[], data: number[], length: number) => void;
export type AudioFormatUnpack = (info: AudioFormatInfo, flags: AudioPackFlags, dest: number[], data: number[], length: number) => void;
export type AudioRingBufferCallback = (rbuf: AudioRingBuffer, data: number[], len: number, user_data: object | null) => void;
export const AUDIO_CHANNELS_RANGE: string;
export const AUDIO_CONVERTER_OPT_DITHER_METHOD: string;
export const AUDIO_CONVERTER_OPT_MIX_MATRIX: string;
export const AUDIO_CONVERTER_OPT_NOISE_SHAPING_METHOD: string;
export const AUDIO_CONVERTER_OPT_QUANTIZATION: string;
export const AUDIO_CONVERTER_OPT_RESAMPLER_METHOD: string;
export const AUDIO_DECODER_MAX_ERRORS: number;
export const AUDIO_DECODER_SINK_NAME: string;
export const AUDIO_DECODER_SRC_NAME: string;
export const AUDIO_DEF_CHANNELS: number;
export const AUDIO_DEF_FORMAT: string;
export const AUDIO_DEF_RATE: number;
export const AUDIO_ENCODER_SINK_NAME: string;
export const AUDIO_ENCODER_SRC_NAME: string;
export const AUDIO_FORMATS_ALL: string;
export const AUDIO_RATE_RANGE: string;
export const AUDIO_RESAMPLER_OPT_CUBIC_B: string;
export const AUDIO_RESAMPLER_OPT_CUBIC_C: string;
export const AUDIO_RESAMPLER_OPT_CUTOFF: string;
export const AUDIO_RESAMPLER_OPT_FILTER_INTERPOLATION: string;
export const AUDIO_RESAMPLER_OPT_FILTER_MODE: string;
export const AUDIO_RESAMPLER_OPT_FILTER_MODE_THRESHOLD: string;
export const AUDIO_RESAMPLER_OPT_FILTER_OVERSAMPLE: string;
export const AUDIO_RESAMPLER_OPT_MAX_PHASE_ERROR: string;
export const AUDIO_RESAMPLER_OPT_N_TAPS: string;
export const AUDIO_RESAMPLER_OPT_STOP_ATTENUATION: string;
export const AUDIO_RESAMPLER_OPT_TRANSITION_BANDWIDTH: string;
export const AUDIO_RESAMPLER_QUALITY_DEFAULT: number;
export const AUDIO_RESAMPLER_QUALITY_MAX: number;
export const AUDIO_RESAMPLER_QUALITY_MIN: number;
export const META_TAG_AUDIO_CHANNELS_STR: string;
export const META_TAG_AUDIO_RATE_STR: string;
export const META_TAG_AUDIO_STR: string;
/**
 * Clip the buffer to the given %GstSegment.
 * After calling this function the caller does not own a reference to
 * @buffer anymore.
 */
export function audio_buffer_clip(buffer: Gst.Buffer, segment: Gst.Segment, rate: number, bpf: number): Gst.Buffer;
/**
 * Reorders @buffer from the channel positions @from to the channel
 * positions @to. @from and @to must contain the same number of
 * positions and the same positions, only in a different order.
 * @buffer must be writable.
 */
export function audio_buffer_reorder_channels(buffer: Gst.Buffer, format: AudioFormat, channels: number, from: AudioChannelPosition[], to: AudioChannelPosition[]): boolean;
/**
 * Truncate the buffer to finally have @samples number of samples, removi
 * ng
 * the necessary amount of samples from the end and @trim number of sampl
 * es
 * from the beginning.
 * After calling this function the caller does not own a reference to
 * @buffer anymore.
 */
export function audio_buffer_truncate(buffer: Gst.Buffer, bpf: number, trim: number, samples: number): Gst.Buffer;
/**
 * Get the fallback channel-mask for the given number of channels.
 * This function returns a reasonable fallback channel-mask and should be
 * called as a last resort when the specific channel map is unknown.
 */
export function audio_channel_get_fallback_mask(channels: number): number;
/**
 * Convert the @channels present in @channel_mask to a @position array
 * (which should have at least @channels entries ensured by caller).
 * If @channel_mask is set to 0, it is considered as 'not present' for pu
 * rpose
 * of conversion.
 * A partially valid @channel_mask with less bits set than the number
 * of channels is considered valid.
 */
export function audio_channel_positions_from_mask(channels: number, channel_mask: number, position: AudioChannelPosition[]): boolean;
/**
 * Convert the @position array of @channels channels to a bitmask.
 * If @force_order is %TRUE it additionally checks if the channels are
 * in the order required by GStreamer.
 */
export function audio_channel_positions_to_mask(position: AudioChannelPosition[], channels: number, force_order: boolean): [boolean, number];
/**
 * Converts @position to a human-readable string representation for
 * debugging purposes.
 */
export function audio_channel_positions_to_string(position: AudioChannelPosition[], channels: number): string;
/**
 * Reorders the channel positions in @position from any order to
 * the GStreamer channel order.
 */
export function audio_channel_positions_to_valid_order(position: AudioChannelPosition[], channels: number): boolean;
/**
 * Checks if @position contains valid channel positions for
 * @channels channels. If @force_order is %TRUE it additionally
 * checks if the channels are in the order required by GStreamer.
 */
export function audio_check_valid_channel_positions(position: AudioChannelPosition[], channels: number, force_order: boolean): boolean;
/**
 * 
 */
export function audio_clipping_meta_api_get_type(): GType;
/**
 * 
 */
export function audio_clipping_meta_get_info(): Gst.MetaInfo;
/**
 * 
 */
export function audio_downmix_meta_api_get_type(): GType;
/**
 * 
 */
export function audio_downmix_meta_get_info(): Gst.MetaInfo;
/**
 * Construct a #GstAudioFormat with given parameters.
 */
export function audio_format_build_integer(sign: boolean, endianness: number, width: number, depth: number): AudioFormat;
/**
 * Fill @length bytes in @dest with silence samples for @info.
 */
export function audio_format_fill_silence(info: AudioFormatInfo, dest: number[], length: number): void;
/**
 * Convert the @format string to its #GstAudioFormat.
 */
export function audio_format_from_string(format: string): AudioFormat;
/**
 * Get the #GstAudioFormatInfo for @format
 */
export function audio_format_get_info(format: AudioFormat): AudioFormatInfo;
/**
 * 
 */
export function audio_format_info_get_type(): GType;
/**
 * 
 */
export function audio_format_to_string(format: AudioFormat): string;
/**
 * Returns a reorder map for @from to @to that can be used in
 * custom channel reordering code, e.g. to convert from or to the
 * GStreamer channel order. @from and @to must contain the same
 * number of positions and the same positions, only in a
 * different order.
 * The resulting @reorder_map can be used for reordering by assigning
 * channel i of the input to channel reorder_map[i] of the output.
 */
export function audio_get_channel_reorder_map(channels: number, from: AudioChannelPosition[], to: AudioChannelPosition[], reorder_map: number[]): boolean;
/**
 * Calculated the size of the buffer expected by gst_audio_iec61937_paylo
 * ad() for
 * payloading type from @spec.
 */
export function audio_iec61937_frame_size(spec: AudioRingBufferSpec): number;
/**
 * Payloads @src in the form specified by IEC 61937 for the type from @sp
 * ec and
 * stores the result in @dst. @src must contain exactly one frame of data
 *  and
 * the frame is not checked for errors.
 */
export function audio_iec61937_payload(src: number[], src_n: number, dst: number[], dst_n: number, spec: AudioRingBufferSpec, endianness: number): boolean;
/**
 * 
 */
export function audio_meta_api_get_type(): GType;
/**
 * 
 */
export function audio_meta_get_info(): Gst.MetaInfo;
/**
 * Reorders @data from the channel positions @from to the channel
 * positions @to. @from and @to must contain the same number of
 * positions and the same positions, only in a different order.
 * Note: this function assumes the audio data is in interleaved layout
 */
export function audio_reorder_channels(data: number[], size: number, format: AudioFormat, channels: number, from: AudioChannelPosition[], to: AudioChannelPosition[]): boolean;
/**
 * Make a new resampler.
 */
export function audio_resampler_new(method: AudioResamplerMethod, flags: AudioResamplerFlags, format: AudioFormat, channels: number, in_rate: number, out_rate: number, options: Gst.Structure): AudioResampler;
/**
 * Set the parameters for resampling from @in_rate to @out_rate using @me
 * thod
 * for @quality in @options.
 */
export function audio_resampler_options_set_quality(method: AudioResamplerMethod, quality: number, in_rate: number, out_rate: number, options: Gst.Structure): void;
/**
 * Attaches #GstAudioClippingMeta metadata to @buffer with the given para
 * meters.
 */
export function buffer_add_audio_clipping_meta(buffer: Gst.Buffer, format: Gst.Format, start: number, end: number): AudioClippingMeta;
/**
 * Attaches #GstAudioDownmixMeta metadata to @buffer with the given param
 * eters.
 * @matrix is an two-dimensional array of @to_channels times @from_channe
 * ls
 * coefficients, i.e. the i-th output channels is constructed by multipli
 * cating
 * the input channels with the coefficients in @matrix[i] and taking the 
 * sum
 * of the results.
 */
export function buffer_add_audio_downmix_meta(buffer: Gst.Buffer, from_position: AudioChannelPosition[], from_channels: number, to_position: AudioChannelPosition[], to_channels: number, matrix: number): AudioDownmixMeta;
/**
 * Allocates and attaches a #GstAudioMeta on @buffer, which must be writa
 * ble
 * for that purpose. The fields of the #GstAudioMeta are directly populat
 * ed
 * from the arguments of this function.
 * When @info->layout is %GST_AUDIO_LAYOUT_NON_INTERLEAVED and @offsets i
 * s
 * %NULL, the offsets are calculated with a formula that assumes the plan
 * es are
 * tightly packed and in sequence:
 * offsets[channel] = channel * @samples * sample_stride
 * It is not allowed for channels to overlap in memory,
 * i.e. for each i in [0, channels), the range
 * [@offsets[i], @offsets[i] + @samples * sample_stride) must not overlap
 * with any other such range. This function will assert if the parameters
 * specified cause this restriction to be violated.
 * It is, obviously, also not allowed to specify parameters that would ca
 * use
 * out-of-bounds memory access on @buffer. This is also checked, which me
 * ans
 * that you must add enough memory on the @buffer before adding this meta
 * .
 */
export function buffer_add_audio_meta(buffer: Gst.Buffer, info: AudioInfo, samples: number, offsets: number | null): AudioMeta;
/**
 * Find the #GstAudioDownmixMeta on @buffer for the given destination
 * channel positions.
 */
export function buffer_get_audio_downmix_meta_for_channels(buffer: Gst.Buffer, to_position: AudioChannelPosition[], to_channels: number): AudioDownmixMeta;
/**
 * 
 */
export function stream_volume_convert_volume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number;
export enum AudioBaseSinkDiscontReason {
    NO_DISCONT = 0,
    NEW_CAPS = 1,
    FLUSH = 2,
    SYNC_LATENCY = 3,
    ALIGNMENT = 4,
    DEVICE_FAILURE = 5,
}
export enum AudioBaseSinkSlaveMethod {
    RESAMPLE = 0,
    SKEW = 1,
    NONE = 2,
    CUSTOM = 3,
}
export enum AudioBaseSrcSlaveMethod {
    RESAMPLE = 0,
    RE_TIMESTAMP = 1,
    SKEW = 2,
    NONE = 3,
}
export enum AudioCdSrcMode {
    NORMAL = 0,
    CONTINUOUS = 1,
}
export enum AudioChannelPosition {
    NONE = -3,
    MONO = -2,
    INVALID = -1,
    FRONT_LEFT = 0,
    FRONT_RIGHT = 1,
    FRONT_CENTER = 2,
    LFE1 = 3,
    REAR_LEFT = 4,
    REAR_RIGHT = 5,
    FRONT_LEFT_OF_CENTER = 6,
    FRONT_RIGHT_OF_CENTER = 7,
    REAR_CENTER = 8,
    LFE2 = 9,
    SIDE_LEFT = 10,
    SIDE_RIGHT = 11,
    TOP_FRONT_LEFT = 12,
    TOP_FRONT_RIGHT = 13,
    TOP_FRONT_CENTER = 14,
    TOP_CENTER = 15,
    TOP_REAR_LEFT = 16,
    TOP_REAR_RIGHT = 17,
    TOP_SIDE_LEFT = 18,
    TOP_SIDE_RIGHT = 19,
    TOP_REAR_CENTER = 20,
    BOTTOM_FRONT_CENTER = 21,
    BOTTOM_FRONT_LEFT = 22,
    BOTTOM_FRONT_RIGHT = 23,
    WIDE_LEFT = 24,
    WIDE_RIGHT = 25,
    SURROUND_LEFT = 26,
    SURROUND_RIGHT = 27,
}
export enum AudioDitherMethod {
    NONE = 0,
    RPDF = 1,
    TPDF = 2,
    TPDF_HF = 3,
}
export enum AudioFormat {
    UNKNOWN = 0,
    ENCODED = 1,
    S8 = 2,
    U8 = 3,
    S16LE = 4,
    S16BE = 5,
    U16LE = 6,
    U16BE = 7,
    S24_32LE = 8,
    S24_32BE = 9,
    U24_32LE = 10,
    U24_32BE = 11,
    S32LE = 12,
    S32BE = 13,
    U32LE = 14,
    U32BE = 15,
    S24LE = 16,
    S24BE = 17,
    U24LE = 18,
    U24BE = 19,
    S20LE = 20,
    S20BE = 21,
    U20LE = 22,
    U20BE = 23,
    S18LE = 24,
    S18BE = 25,
    U18LE = 26,
    U18BE = 27,
    F32LE = 28,
    F32BE = 29,
    F64LE = 30,
    F64BE = 31,
    S16 = 4,
    U16 = 6,
    S24_32 = 8,
    U24_32 = 10,
    S32 = 12,
    U32 = 14,
    S24 = 16,
    U24 = 18,
    S20 = 20,
    U20 = 22,
    S18 = 24,
    U18 = 26,
    F32 = 28,
    F64 = 30,
}
export enum AudioLayout {
    INTERLEAVED = 0,
    NON_INTERLEAVED = 1,
}
export enum AudioNoiseShapingMethod {
    NONE = 0,
    ERROR_FEEDBACK = 1,
    SIMPLE = 2,
    MEDIUM = 3,
    HIGH = 4,
}
export enum AudioResamplerFilterInterpolation {
    NONE = 0,
    LINEAR = 1,
    CUBIC = 2,
}
export enum AudioResamplerFilterMode {
    INTERPOLATED = 0,
    FULL = 1,
    AUTO = 2,
}
export enum AudioResamplerMethod {
    NEAREST = 0,
    LINEAR = 1,
    CUBIC = 2,
    BLACKMAN_NUTTALL = 3,
    KAISER = 4,
}
export enum AudioRingBufferFormatType {
    RAW = 0,
    MU_LAW = 1,
    A_LAW = 2,
    IMA_ADPCM = 3,
    MPEG = 4,
    GSM = 5,
    IEC958 = 6,
    AC3 = 7,
    EAC3 = 8,
    DTS = 9,
    MPEG2_AAC = 10,
    MPEG4_AAC = 11,
    MPEG2_AAC_RAW = 12,
    MPEG4_AAC_RAW = 13,
    FLAC = 14,
}
export enum AudioRingBufferState {
    STOPPED = 0,
    PAUSED = 1,
    STARTED = 2,
    ERROR = 3,
}
export enum StreamVolumeFormat {
    LINEAR = 0,
    CUBIC = 1,
    DB = 2,
}
export enum AudioChannelMixerFlags {
    NONE = 0,
    NON_INTERLEAVED_IN = 1,
    NON_INTERLEAVED_OUT = 2,
    UNPOSITIONED_IN = 4,
    UNPOSITIONED_OUT = 8,
}
export enum AudioConverterFlags {
    NONE = 0,
    IN_WRITABLE = 1,
    VARIABLE_RATE = 2,
}
export enum AudioFlags {
    NONE = 0,
    UNPOSITIONED = 1,
}
export enum AudioFormatFlags {
    INTEGER = 1,
    FLOAT = 2,
    SIGNED = 4,
    COMPLEX = 16,
    UNPACK = 32,
}
export enum AudioPackFlags {
    NONE = 0,
    TRUNCATE_RANGE = 1,
}
export enum AudioQuantizeFlags {
    NONE = 0,
    NON_INTERLEAVED = 1,
}
export enum AudioResamplerFlags {
    NONE = 0,
    NON_INTERLEAVED_IN = 1,
    NON_INTERLEAVED_OUT = 2,
    VARIABLE_RATE = 4,
}
export class AudioAggregator  {
    constructor(config?: properties);
    alignment_threshold: number;
    discont_wait: number;
    output_buffer_duration: number;
    readonly current_caps: Gst.Caps;
    readonly priv: AudioAggregatorPrivate;
    set_sink_caps(pad: AudioAggregatorPad, caps: Gst.Caps): void;
}
export class AudioAggregatorConvertPad  {
    constructor(config?: properties);
    converter_config: Gst.Structure;
    readonly priv: AudioAggregatorConvertPadPrivate;
}
export class AudioAggregatorPad  {
    constructor(config?: properties);
    readonly info: AudioInfo;
    readonly priv: AudioAggregatorPadPrivate;
}
export class AudioBaseSink  {
    constructor(config?: properties);
    alignment_threshold: number;
    buffer_time: number;
    can_activate_pull: boolean;
    discont_wait: number;
    drift_tolerance: number;
    latency_time: number;
    provide_clock: boolean;
    slave_method: AudioBaseSinkSlaveMethod;
    readonly element: GstBase.BaseSink;
    readonly ringbuffer: AudioRingBuffer;
    readonly next_sample: number;
    readonly provided_clock: Gst.Clock;
    readonly eos_rendering: boolean;
    readonly priv: AudioBaseSinkPrivate;
    create_ringbuffer(): AudioRingBuffer;
    get_alignment_threshold(): Gst.ClockTime;
    get_discont_wait(): Gst.ClockTime;
    get_drift_tolerance(): number;
    get_provide_clock(): boolean;
    get_slave_method(): AudioBaseSinkSlaveMethod;
    report_device_failure(): void;
    set_alignment_threshold(alignment_threshold: Gst.ClockTime): void;
    set_custom_slaving_callback(callback: AudioBaseSinkCustomSlavingCallback, user_data: object | null, notify: GLib.DestroyNotify): void;
    set_discont_wait(discont_wait: Gst.ClockTime): void;
    set_drift_tolerance(drift_tolerance: number): void;
    set_provide_clock(provide: boolean): void;
    set_slave_method(method: AudioBaseSinkSlaveMethod): void;
}
export class AudioBaseSrc  {
    constructor(config?: properties);
    readonly actual_buffer_time: number;
    readonly actual_latency_time: number;
    buffer_time: number;
    latency_time: number;
    provide_clock: boolean;
    slave_method: AudioBaseSrcSlaveMethod;
    readonly element: GstBase.PushSrc;
    readonly ringbuffer: AudioRingBuffer;
    readonly next_sample: number;
    readonly clock: Gst.Clock;
    readonly priv: AudioBaseSrcPrivate;
    create_ringbuffer(): AudioRingBuffer;
    get_provide_clock(): boolean;
    get_slave_method(): AudioBaseSrcSlaveMethod;
    set_provide_clock(provide: boolean): void;
    set_slave_method(method: AudioBaseSrcSlaveMethod): void;
}
export class AudioCdSrc  {
    constructor(config?: properties);
    device: string;
    mode: AudioCdSrcMode;
    track: number;
    readonly pushsrc: GstBase.PushSrc;
    readonly tags: Gst.TagList;
    readonly priv: AudioCdSrcPrivate;
    add_track(track: AudioCdSrcTrack): boolean;
}
export class AudioClock extends Gst.SystemClock {
    constructor(config?: properties);
    adjust(time: Gst.ClockTime): Gst.ClockTime;
    get_time(): Gst.ClockTime;
    invalidate(): void;
    reset(time: Gst.ClockTime): void;
}
export class AudioDecoder  {
    constructor(config?: properties);
    min_latency: number;
    plc: boolean;
    tolerance: number;
    readonly element: Gst.Element;
    readonly sinkpad: Gst.Pad;
    readonly srcpad: Gst.Pad;
    readonly stream_lock: GLib.RecMutex;
    readonly input_segment: Gst.Segment;
    readonly output_segment: Gst.Segment;
    readonly priv: AudioDecoderPrivate;
    allocate_output_buffer(size: number): Gst.Buffer;
    finish_frame(buf: Gst.Buffer, frames: number): Gst.FlowReturn;
    finish_subframe(buf: Gst.Buffer): Gst.FlowReturn;
    get_allocator(): [Gst.Allocator | null,Gst.AllocationParams | null];
    get_audio_info(): AudioInfo;
    get_delay(): number;
    get_drainable(): boolean;
    get_estimate_rate(): number;
    get_latency(): [Gst.ClockTime | null,Gst.ClockTime | null];
    get_max_errors(): number;
    get_min_latency(): Gst.ClockTime;
    get_needs_format(): boolean;
    get_parse_state(): [boolean | null,boolean | null];
    get_plc(): boolean;
    get_plc_aware(): number;
    get_tolerance(): Gst.ClockTime;
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
    negotiate(): boolean;
    proxy_getcaps(caps: Gst.Caps | null, filter: Gst.Caps | null): Gst.Caps;
    set_allocation_caps(allocation_caps: Gst.Caps | null): void;
    set_drainable(enabled: boolean): void;
    set_estimate_rate(enabled: boolean): void;
    set_latency(min: Gst.ClockTime, max: Gst.ClockTime): void;
    set_max_errors(num: number): void;
    set_min_latency(num: Gst.ClockTime): void;
    set_needs_format(enabled: boolean): void;
    set_output_caps(caps: Gst.Caps): boolean;
    set_output_format(info: AudioInfo): boolean;
    set_plc(enabled: boolean): void;
    set_plc_aware(plc: boolean): void;
    set_tolerance(tolerance: Gst.ClockTime): void;
    set_use_default_pad_acceptcaps(use: boolean): void;
}
export class AudioEncoder  {
    constructor(config?: properties);
    hard_resync: boolean;
    readonly mark_granule: boolean;
    perfect_timestamp: boolean;
    tolerance: number;
    readonly element: Gst.Element;
    readonly sinkpad: Gst.Pad;
    readonly srcpad: Gst.Pad;
    readonly stream_lock: GLib.RecMutex;
    readonly input_segment: Gst.Segment;
    readonly output_segment: Gst.Segment;
    readonly priv: AudioEncoderPrivate;
    allocate_output_buffer(size: number): Gst.Buffer;
    finish_frame(buffer: Gst.Buffer, samples: number): Gst.FlowReturn;
    get_allocator(): [Gst.Allocator | null,Gst.AllocationParams | null];
    get_audio_info(): AudioInfo;
    get_drainable(): boolean;
    get_frame_max(): number;
    get_frame_samples_max(): number;
    get_frame_samples_min(): number;
    get_hard_min(): boolean;
    get_hard_resync(): boolean;
    get_latency(): [Gst.ClockTime | null,Gst.ClockTime | null];
    get_lookahead(): number;
    get_mark_granule(): boolean;
    get_perfect_timestamp(): boolean;
    get_tolerance(): Gst.ClockTime;
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
    negotiate(): boolean;
    proxy_getcaps(caps: Gst.Caps | null, filter: Gst.Caps | null): Gst.Caps;
    set_allocation_caps(allocation_caps: Gst.Caps | null): void;
    set_drainable(enabled: boolean): void;
    set_frame_max(num: number): void;
    set_frame_samples_max(num: number): void;
    set_frame_samples_min(num: number): void;
    set_hard_min(enabled: boolean): void;
    set_hard_resync(enabled: boolean): void;
    set_headers(headers: GLib.List): void;
    set_latency(min: Gst.ClockTime, max: Gst.ClockTime): void;
    set_lookahead(num: number): void;
    set_mark_granule(enabled: boolean): void;
    set_output_format(caps: Gst.Caps): boolean;
    set_perfect_timestamp(enabled: boolean): void;
    set_tolerance(tolerance: Gst.ClockTime): void;
}
export class AudioFilter  {
    constructor(config?: properties);
    readonly basetransform: GstBase.BaseTransform;
    readonly info: AudioInfo;
}
export class AudioRingBuffer  {
    constructor(config?: properties);
    readonly object: Gst.Object;
    readonly cond: GLib.Cond;
    readonly open: boolean;
    readonly acquired: boolean;
    readonly memory: number;
    readonly size: number;
    readonly timestamps: Gst.ClockTime;
    readonly spec: AudioRingBufferSpec;
    readonly samples_per_seg: number;
    readonly empty_seg: number;
    readonly state: number;
    readonly segdone: number;
    readonly segbase: number;
    readonly waiting: number;
    readonly callback: AudioRingBufferCallback;
    readonly cb_data: object;
    readonly need_reorder: boolean;
    readonly channel_reorder_map: number[];
    readonly flushing: boolean;
    readonly active: boolean;
    readonly cb_data_notify: GLib.DestroyNotify;
    acquire(spec: AudioRingBufferSpec): boolean;
    activate(active: boolean): boolean;
    advance(advance: number): void;
    clear(segment: number): void;
    clear_all(): void;
    close_device(): boolean;
    commit(sample: number, data: number[], in_samples: number, out_samples: number, accum: number): [number, number];
    convert(src_fmt: Gst.Format, src_val: number, dest_fmt: Gst.Format): [boolean, number];
    delay(): number;
    device_is_open(): boolean;
    is_acquired(): boolean;
    is_active(): boolean;
    is_flushing(): boolean;
    may_start(allowed: boolean): void;
    open_device(): boolean;
    pause(): boolean;
    prepare_read(): [boolean, number,number[],number];
    read(sample: number, data: number[], len: number): [number, Gst.ClockTime];
    release(): boolean;
    samples_done(): number;
    set_callback_full(cb: AudioRingBufferCallback | null, user_data: object | null, notify: GLib.DestroyNotify): void;
    set_channel_positions(position: AudioChannelPosition[]): void;
    set_flushing(flushing: boolean): void;
    set_sample(sample: number): void;
    set_timestamp(readseg: number, timestamp: Gst.ClockTime): void;
    start(): boolean;
    stop(): boolean;
    static debug_spec_buff(spec: AudioRingBufferSpec): void;
    static debug_spec_caps(spec: AudioRingBufferSpec): void;
    static parse_caps(spec: AudioRingBufferSpec, caps: Gst.Caps): boolean;
}
export class AudioSink  {
    constructor(config?: properties);
    readonly element: AudioBaseSink;
    readonly thread: GLib.Thread;
}
export class AudioSrc  {
    constructor(config?: properties);
    readonly element: AudioBaseSrc;
    readonly thread: GLib.Thread;
}
export class AudioAggregatorConvertPadPrivate  {
    constructor(config?: properties);
}
export class AudioAggregatorPadPrivate  {
    constructor(config?: properties);
}
export class AudioAggregatorPrivate  {
    constructor(config?: properties);
}
export class AudioBaseSinkPrivate  {
    constructor(config?: properties);
}
export class AudioBaseSrcPrivate  {
    constructor(config?: properties);
}
export class AudioBuffer  {
    constructor(config?: properties);
    info: AudioInfo;
    n_samples: number;
    n_planes: number;
    planes: object;
    buffer: Gst.Buffer;
    readonly map_infos: Gst.MapInfo;
    readonly priv_planes_arr: object[];
    readonly priv_map_infos_arr: Gst.MapInfo[];
    map(info: AudioInfo, gstbuffer: Gst.Buffer, flags: Gst.MapFlags): boolean;
    unmap(): void;
    static clip(buffer: Gst.Buffer, segment: Gst.Segment, rate: number, bpf: number): Gst.Buffer;
    static reorder_channels(buffer: Gst.Buffer, format: AudioFormat, channels: number, from: AudioChannelPosition[], to: AudioChannelPosition[]): boolean;
    static truncate(buffer: Gst.Buffer, bpf: number, trim: number, samples: number): Gst.Buffer;
}
export class AudioCdSrcPrivate  {
    constructor(config?: properties);
}
export class AudioCdSrcTrack  {
    constructor(config?: properties);
    is_audio: boolean;
    num: number;
    start: number;
    end: number;
    tags: Gst.TagList;
}
export class AudioChannelMixer  {
    constructor(config?: properties);
    free(): void;
    is_passthrough(): boolean;
    samples(_in: object | null, out: object | null, samples: number): void;
}
export class AudioClippingMeta  {
    constructor(config?: properties);
    meta: Gst.Meta;
    format: Gst.Format;
    start: number;
    end: number;
    static get_info(): Gst.MetaInfo;
}
export class AudioConverter  {
    constructor(config?: properties);
    convert(flags: AudioConverterFlags, _in: number[], in_size: number): [boolean, number[],number];
    free(): void;
    get_config(): [Gst.Structure, number | null,number | null];
    get_in_frames(out_frames: number): number;
    get_max_latency(): number;
    get_out_frames(in_frames: number): number;
    is_passthrough(): boolean;
    reset(): void;
    samples(flags: AudioConverterFlags, _in: object | null, in_frames: number, out: object | null, out_frames: number): boolean;
    supports_inplace(): boolean;
    update_config(in_rate: number, out_rate: number, config: Gst.Structure | null): boolean;
}
export class AudioDecoderPrivate  {
    constructor(config?: properties);
}
export class AudioDownmixMeta  {
    constructor(config?: properties);
    meta: Gst.Meta;
    from_position: AudioChannelPosition;
    to_position: AudioChannelPosition;
    from_channels: number;
    to_channels: number;
    matrix: number;
    static get_info(): Gst.MetaInfo;
}
export class AudioEncoderPrivate  {
    constructor(config?: properties);
}
export class AudioFormatInfo  {
    constructor(config?: properties);
    format: AudioFormat;
    name: string;
    description: string;
    flags: AudioFormatFlags;
    endianness: number;
    width: number;
    depth: number;
    silence: number[];
    unpack_format: AudioFormat;
    unpack_func: AudioFormatUnpack;
    pack_func: AudioFormatPack;
}
export class AudioInfo  {
    constructor(config?: properties);
    convert(src_fmt: Gst.Format, src_val: number, dest_fmt: Gst.Format): [boolean, number];
    copy(): AudioInfo;
    free(): void;
    from_caps(caps: Gst.Caps): boolean;
    init(): void;
    is_equal(other: AudioInfo): boolean;
    set_format(format: AudioFormat, rate: number, channels: number, position: AudioChannelPosition[] | null): void;
    to_caps(): Gst.Caps;
}
export class AudioMeta  {
    constructor(config?: properties);
    meta: Gst.Meta;
    info: AudioInfo;
    samples: number;
    offsets: number;
    readonly priv_offsets_arr: number[];
    static get_info(): Gst.MetaInfo;
}
export class AudioQuantize  {
    constructor(config?: properties);
    free(): void;
    reset(): void;
    samples(_in: object | null, out: object | null, samples: number): void;
}
export class AudioResampler  {
    constructor(config?: properties);
    free(): void;
    get_in_frames(out_frames: number): number;
    get_max_latency(): number;
    get_out_frames(in_frames: number): number;
    resample(_in: object | null, in_frames: number, out: object | null, out_frames: number): void;
    reset(): void;
    update(in_rate: number, out_rate: number, options: Gst.Structure): boolean;
    static _new(method: AudioResamplerMethod, flags: AudioResamplerFlags, format: AudioFormat, channels: number, in_rate: number, out_rate: number, options: Gst.Structure): AudioResampler;
    static options_set_quality(method: AudioResamplerMethod, quality: number, in_rate: number, out_rate: number, options: Gst.Structure): void;
}
export class AudioRingBufferSpec  {
    constructor(config?: properties);
    caps: Gst.Caps;
    type: AudioRingBufferFormatType;
    info: AudioInfo;
    latency_time: number;
    buffer_time: number;
    segsize: number;
    segtotal: number;
    seglatency: number;
}
export class AudioStreamAlign  {
    constructor(config?: properties);
    copy(): AudioStreamAlign;
    free(): void;
    get_alignment_threshold(): Gst.ClockTime;
    get_discont_wait(): Gst.ClockTime;
    get_rate(): number;
    get_samples_since_discont(): number;
    get_timestamp_at_discont(): Gst.ClockTime;
    mark_discont(): void;
    process(discont: boolean, timestamp: Gst.ClockTime, n_samples: number): [boolean, Gst.ClockTime,Gst.ClockTime,number];
    set_alignment_threshold(alignment_threshold: Gst.ClockTime): void;
    set_discont_wait(discont_wait: Gst.ClockTime): void;
    set_rate(rate: number): void;
}
export interface StreamVolume  {
    mute: boolean;
    volume: number;
    get_mute(): boolean;
    get_volume(format: StreamVolumeFormat): number;
    set_mute(mute: boolean): void;
    set_volume(format: StreamVolumeFormat, val: number): void;
}