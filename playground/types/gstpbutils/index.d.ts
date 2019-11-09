
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gst from "gst";
import * as GstAudio from "gstaudio";
import * as GstBase from "gstbase";
import * as GstVideo from "gstvideo";
import * as GstPbutils from "gstpbutils";
/**
 * gstpbutils.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type AudioVisualizerShaderFunc = (scope: AudioVisualizer, s: GstVideo.VideoFrame, d: GstVideo.VideoFrame) => void;
export type InstallPluginsResultFunc = (result: InstallPluginsReturn, user_data: object | null) => void;
export const ENCODING_CATEGORY_CAPTURE: string;
export const ENCODING_CATEGORY_DEVICE: string;
export const ENCODING_CATEGORY_FILE_EXTENSION: string;
export const ENCODING_CATEGORY_ONLINE_SERVICE: string;
export const ENCODING_CATEGORY_STORAGE_EDITING: string;
export const PLUGINS_BASE_VERSION_MAJOR: number;
export const PLUGINS_BASE_VERSION_MICRO: number;
export const PLUGINS_BASE_VERSION_MINOR: number;
export const PLUGINS_BASE_VERSION_NANO: number;
/**
 * Sets the level and profile on @caps if it can be determined from
 * @audio_config. See gst_codec_utils_aac_get_level() and
 * gst_codec_utils_aac_get_profile() for more details on the parameters.
 * @caps must be audio/mpeg caps with an "mpegversion" field of either 2 
 * or 4.
 * If mpegversion is 4, the "base-profile" field is also set in @caps.
 */
export function codec_utils_aac_caps_set_level_and_profile(caps: Gst.Caps, audio_config: number[], len: number): boolean;
/**
 * Returns the channels of the given AAC stream.
 */
export function codec_utils_aac_get_channels(audio_config: number[], len: number): number;
/**
 * Translates the sample rate to the index corresponding to it in AAC spe
 * c.
 */
export function codec_utils_aac_get_index_from_sample_rate(rate: number): number;
/**
 * Determines the level of a stream as defined in ISO/IEC 14496-3. For AA
 * C LC
 * streams, the constraints from the AAC audio profile are applied. For A
 * AC
 * Main, LTP, SSR and others, the Main profile is used.
 * The @audio_config parameter follows the following format, starting fro
 * m the
 * most significant bit of the first byte:
 *   * Bit 0:4 contains the AudioObjectType (if this is 0x5, then the
 *     real AudioObjectType is carried after the rate and channel data)
 *   * Bit 5:8 contains the sample frequency index (if this is 0xf, then 
 * the
 *     next 24 bits define the actual sample frequency, and subsequent
 *     fields are appropriately shifted).
 *   * Bit 9:12 contains the channel configuration
 */
export function codec_utils_aac_get_level(audio_config: number[], len: number): string;
/**
 * Returns the profile of the given AAC stream as a string. The profile i
 * s
 * normally determined using the AudioObjectType field which is in the fi
 * rst
 * 5 bits of @audio_config
 */
export function codec_utils_aac_get_profile(audio_config: number[], len: number): string;
/**
 * Translates the sample rate index found in AAC headers to the actual sa
 * mple
 * rate.
 */
export function codec_utils_aac_get_sample_rate(audio_config: number[], len: number): number;
/**
 * Translates the sample rate index found in AAC headers to the actual sa
 * mple
 * rate.
 */
export function codec_utils_aac_get_sample_rate_from_index(sr_idx: number): number;
/**
 * Sets the level and profile in @caps if it can be determined from @sps.
 *  See
 * gst_codec_utils_h264_get_level() and gst_codec_utils_h264_get_profile(
 * )
 * for more details on the parameters.
 */
export function codec_utils_h264_caps_set_level_and_profile(caps: Gst.Caps, sps: number[], len: number): boolean;
/**
 * Converts the level indication (level_idc) in the stream's
 * sequence parameter set into a string. The SPS is expected to have the
 * same format as for gst_codec_utils_h264_get_profile().
 */
export function codec_utils_h264_get_level(sps: number[], len: number): string;
/**
 * Transform a level string from the caps into the level_idc
 */
export function codec_utils_h264_get_level_idc(level: string): number;
/**
 * Converts the profile indication (profile_idc) in the stream's
 * sequence parameter set into a string. The SPS is expected to have the
 * following format, as defined in the H.264 specification. The SPS is vi
 * ewed
 * as a bitstream here, with bit 0 being the most significant bit of the 
 * first
 * byte.
 * * Bit 0:7   - Profile indication
 * * Bit 8     - constraint_set0_flag
 * * Bit 9     - constraint_set1_flag
 * * Bit 10    - constraint_set2_flag
 * * Bit 11    - constraint_set3_flag
 * * Bit 12    - constraint_set3_flag
 * * Bit 13:15 - Reserved
 * * Bit 16:24 - Level indication
 */
export function codec_utils_h264_get_profile(sps: number[], len: number): string;
/**
 * Sets the level, tier and profile in @caps if it can be determined from
 * @profile_tier_level. See gst_codec_utils_h265_get_level(),
 * gst_codec_utils_h265_get_tier() and gst_codec_utils_h265_get_profile()
 * for more details on the parameters.
 */
export function codec_utils_h265_caps_set_level_tier_and_profile(caps: Gst.Caps, profile_tier_level: number[], len: number): boolean;
/**
 * Converts the level indication (general_level_idc) in the stream's
 * profile_tier_level structure into a string. The profiel_tier_level is
 * expected to have the same format as for gst_codec_utils_h264_get_profi
 * le().
 */
export function codec_utils_h265_get_level(profile_tier_level: number[], len: number): string;
/**
 * Transform a level string from the caps into the level_idc
 */
export function codec_utils_h265_get_level_idc(level: string): number;
/**
 * Converts the profile indication (general_profile_idc) in the stream's
 * profile_level_tier structure into a string. The profile_tier_level is
 * expected to have the following format, as defined in the H.265
 * specification. The profile_tier_level is viewed as a bitstream here,
 * with bit 0 being the most significant bit of the first byte.
 * * Bit 0:1   - general_profile_space
 * * Bit 2     - general_tier_flag
 * * Bit 3:7   - general_profile_idc
 * * Bit 8:39  - gernal_profile_compatibility_flags
 * * Bit 40    - general_progressive_source_flag
 * * Bit 41    - general_interlaced_source_flag
 * * Bit 42    - general_non_packed_constraint_flag
 * * Bit 43    - general_frame_only_constraint_flag
 * * Bit 44:87 - general_reserved_zero_44bits
 * * Bit 88:95 - general_level_idc
 */
export function codec_utils_h265_get_profile(profile_tier_level: number[], len: number): string;
/**
 * Converts the tier indication (general_tier_flag) in the stream's
 * profile_tier_level structure into a string. The profile_tier_level
 * is expected to have the same format as for gst_codec_utils_h264_get_pr
 * ofile().
 */
export function codec_utils_h265_get_tier(profile_tier_level: number[], len: number): string;
/**
 * Sets the level and profile in @caps if it can be determined from
 * @vis_obj_seq. See gst_codec_utils_mpeg4video_get_level() and
 * gst_codec_utils_mpeg4video_get_profile() for more details on the
 * parameters.
 */
export function codec_utils_mpeg4video_caps_set_level_and_profile(caps: Gst.Caps, vis_obj_seq: number[], len: number): boolean;
/**
 * Converts the level indication in the stream's visual object sequence i
 * nto
 * a string. @vis_obj_seq is expected to be the data following the visual
 * object sequence start code. Only the first byte
 * (profile_and_level_indication) is used.
 */
export function codec_utils_mpeg4video_get_level(vis_obj_seq: number[], len: number): string;
/**
 * Converts the profile indication in the stream's visual object sequence
 *  into
 * a string. @vis_obj_seq is expected to be the data following the visual
 * object sequence start code. Only the first byte
 * (profile_and_level_indication) is used.
 */
export function codec_utils_mpeg4video_get_profile(vis_obj_seq: number[], len: number): string;
/**
 * Creates Opus caps from the given parameters.
 */
export function codec_utils_opus_create_caps(rate: number, channels: number, channel_mapping_family: number, stream_count: number, coupled_count: number, channel_mapping: number[] | null): Gst.Caps;
/**
 * Creates Opus caps from the given OpusHead @header and comment header
 * @comments.
 */
export function codec_utils_opus_create_caps_from_header(header: Gst.Buffer, comments: Gst.Buffer | null): Gst.Caps;
/**
 * Creates OpusHead header from the given parameters.
 */
export function codec_utils_opus_create_header(rate: number, channels: number, channel_mapping_family: number, stream_count: number, coupled_count: number, channel_mapping: number[] | null, pre_skip: number, output_gain: number): Gst.Buffer;
/**
 * Parses Opus caps and fills the different fields with defaults if possi
 * ble.
 */
export function codec_utils_opus_parse_caps(caps: Gst.Caps): [boolean, number,number,number,number,number,number[]];
/**
 * Parses the OpusHead header.
 */
export function codec_utils_opus_parse_header(header: Gst.Buffer): [boolean, number,number,number,number,number,number[],number,number];
/**
 * List all available #GstEncodingTarget for the specified category, or a
 * ll categories
 * if @categoryname is %NULL.
 */
export function encoding_list_all_targets(categoryname: string | null): GLib.List;
/**
 * Lists all #GstEncodingTarget categories present on disk.
 */
export function encoding_list_available_categories(): GLib.List;
/**
 * Requests plugin installation without blocking. Once the plugins have b
 * een
 * installed or installation has failed, @func will be called with the re
 * sult
 * of the installation and your provided @user_data pointer.
 * This function requires a running GLib/Gtk main loop. If you are not
 * running a GLib/Gtk main loop, make sure to regularly call
 * g_main_context_iteration(NULL,FALSE).
 * The installer strings that make up @detail are typically obtained by
 * calling gst_missing_plugin_message_get_installer_detail() on missing-p
 * lugin
 * messages that have been caught on a pipeline's bus or created by the
 * application via the provided API, such as gst_missing_element_message_
 * new().
 * It is possible to request the installation of multiple missing plugins
 *  in
 * one go (as might be required if there is a demuxer for a certain forma
 * t
 * installed but no suitable video decoder and no suitable audio decoder)
 * .
 */
export function install_plugins_async(details: string[], ctx: InstallPluginsContext | null, func: InstallPluginsResultFunc, user_data: object | null): InstallPluginsReturn;
/**
 * Checks whether plugin installation (initiated by this application only
 * )
 * is currently in progress.
 */
export function install_plugins_installation_in_progress(): boolean;
/**
 * Convenience function to return the descriptive string associated
 * with a status code.  This function returns English strings and
 * should not be used for user messages. It is here only to assist
 * in debugging.
 */
export function install_plugins_return_get_name(ret: InstallPluginsReturn): string;
/**
 * Checks whether plugin installation is likely to be supported by the
 * current environment. This currently only checks whether the helper scr
 * ipt
 * that is to be provided by the distribution or operating system vendor
 * exists.
 */
export function install_plugins_supported(): boolean;
/**
 * Requests plugin installation and block until the plugins have been
 * installed or installation has failed.
 * This function should almost never be used, it only exists for cases wh
 * ere
 * a non-GLib main loop is running and the user wants to run it in a sepa
 * rate
 * thread and marshal the result back asynchronously into the main thread
 * using the other non-GLib main loop. You should almost always use
 * gst_install_plugins_async() instead of this function.
 */
export function install_plugins_sync(details: string[], ctx: InstallPluginsContext | null): InstallPluginsReturn;
/**
 * Checks whether @msg is a missing plugins message.
 */
export function is_missing_plugin_message(msg: Gst.Message): boolean;
/**
 * Returns an opaque string containing all the details about the missing
 * element to be passed to an external installer called via
 * gst_install_plugins_async() or gst_install_plugins_sync().
 * This function is mainly for applications that call external plugin
 * installation mechanisms using one of the two above-mentioned functions
 *  in
 * the case where the application knows exactly what kind of plugin it is
 * missing.
 */
export function missing_decoder_installer_detail_new(decode_caps: Gst.Caps): string;
/**
 * Creates a missing-plugin message for @element to notify the applicatio
 * n
 * that a decoder element for a particular set of (fixed) caps is missing
 * .
 * This function is mainly for use in plugins.
 */
export function missing_decoder_message_new(element: Gst.Element, decode_caps: Gst.Caps): Gst.Message;
/**
 * Returns an opaque string containing all the details about the missing
 * element to be passed to an external installer called via
 * gst_install_plugins_async() or gst_install_plugins_sync().
 * This function is mainly for applications that call external plugin
 * installation mechanisms using one of the two above-mentioned functions
 *  in
 * the case where the application knows exactly what kind of plugin it is
 * missing.
 */
export function missing_element_installer_detail_new(factory_name: string): string;
/**
 * Creates a missing-plugin message for @element to notify the applicatio
 * n
 * that a certain required element is missing. This function is mainly fo
 * r
 * use in plugins.
 */
export function missing_element_message_new(element: Gst.Element, factory_name: string): Gst.Message;
/**
 * Returns an opaque string containing all the details about the missing
 * element to be passed to an external installer called via
 * gst_install_plugins_async() or gst_install_plugins_sync().
 * This function is mainly for applications that call external plugin
 * installation mechanisms using one of the two above-mentioned functions
 *  in
 * the case where the application knows exactly what kind of plugin it is
 * missing.
 */
export function missing_encoder_installer_detail_new(encode_caps: Gst.Caps): string;
/**
 * Creates a missing-plugin message for @element to notify the applicatio
 * n
 * that an encoder element for a particular set of (fixed) caps is missin
 * g.
 * This function is mainly for use in plugins.
 */
export function missing_encoder_message_new(element: Gst.Element, encode_caps: Gst.Caps): Gst.Message;
/**
 * Returns a localised string describing the missing feature, for use in
 * error dialogs and the like. Should never return NULL unless @msg is no
 * t
 * a valid missing-plugin message.
 * This function is mainly for applications that need a human-readable st
 * ring
 * describing a missing plugin, given a previously collected missing-plug
 * in
 * message
 */
export function missing_plugin_message_get_description(msg: Gst.Message): string;
/**
 * Returns an opaque string containing all the details about the missing
 * element to be passed to an external installer called via
 * gst_install_plugins_async() or gst_install_plugins_sync().
 * This function is mainly for applications that call external plugin
 * installation mechanisms using one of the two above-mentioned functions
 * .
 */
export function missing_plugin_message_get_installer_detail(msg: Gst.Message): string;
/**
 * Returns an opaque string containing all the details about the missing
 * element to be passed to an external installer called via
 * gst_install_plugins_async() or gst_install_plugins_sync().
 * This function is mainly for applications that call external plugin
 * installation mechanisms using one of the two above-mentioned functions
 *  in
 * the case where the application knows exactly what kind of plugin it is
 * missing.
 */
export function missing_uri_sink_installer_detail_new(protocol: string): string;
/**
 * Creates a missing-plugin message for @element to notify the applicatio
 * n
 * that a sink element for a particular URI protocol is missing. This
 * function is mainly for use in plugins.
 */
export function missing_uri_sink_message_new(element: Gst.Element, protocol: string): Gst.Message;
/**
 * Returns an opaque string containing all the details about the missing
 * element to be passed to an external installer called via
 * gst_install_plugins_async() or gst_install_plugins_sync().
 * This function is mainly for applications that call external plugin
 * installation mechanisms using one of the two above-mentioned functions
 *  in
 * the case where the application knows exactly what kind of plugin it is
 * missing.
 */
export function missing_uri_source_installer_detail_new(protocol: string): string;
/**
 * Creates a missing-plugin message for @element to notify the applicatio
 * n
 * that a source element for a particular URI protocol is missing. This
 * function is mainly for use in plugins.
 */
export function missing_uri_source_message_new(element: Gst.Element, protocol: string): Gst.Message;
/**
 * Adds a codec tag describing the format specified by @caps to @taglist.
 */
export function pb_utils_add_codec_description_to_tag_list(taglist: Gst.TagList, codec_tag: string | null, caps: Gst.Caps): boolean;
/**
 * Returns a localised (as far as this is possible) string describing the
 * media format specified in @caps, for use in error dialogs or other mes
 * sages
 * to be seen by the user. Should never return NULL unless @caps is inval
 * id.
 * Also see the convenience function
 * gst_pb_utils_add_codec_description_to_tag_list().
 */
export function pb_utils_get_codec_description(caps: Gst.Caps): string;
/**
 * Returns a localised string describing an decoder for the format specif
 * ied
 * in @caps, for use in error dialogs or other messages to be seen by the
 *  user.
 * Should never return NULL unless @factory_name or @caps are invalid.
 * This function is mainly for internal use, applications would typically
 * use gst_missing_plugin_message_get_description() to get a description 
 * of
 * a missing feature from a missing-plugin message.
 */
export function pb_utils_get_decoder_description(caps: Gst.Caps): string;
/**
 * Returns a localised string describing the given element, for use in
 * error dialogs or other messages to be seen by the user. Should never
 * return NULL unless @factory_name is invalid.
 * This function is mainly for internal use, applications would typically
 * use gst_missing_plugin_message_get_description() to get a description 
 * of
 * a missing feature from a missing-plugin message.
 */
export function pb_utils_get_element_description(factory_name: string): string;
/**
 * Returns a localised string describing an encoder for the format specif
 * ied
 * in @caps, for use in error dialogs or other messages to be seen by the
 *  user.
 * Should never return NULL unless @factory_name or @caps are invalid.
 * This function is mainly for internal use, applications would typically
 * use gst_missing_plugin_message_get_description() to get a description 
 * of
 * a missing feature from a missing-plugin message.
 */
export function pb_utils_get_encoder_description(caps: Gst.Caps): string;
/**
 * Returns a localised string describing a sink element handling the prot
 * ocol
 * specified in @protocol, for use in error dialogs or other messages to 
 * be
 * seen by the user. Should never return NULL unless @protocol is invalid
 * .
 * This function is mainly for internal use, applications would typically
 * use gst_missing_plugin_message_get_description() to get a description 
 * of
 * a missing feature from a missing-plugin message.
 */
export function pb_utils_get_sink_description(protocol: string): string;
/**
 * Returns a localised string describing a source element handling the pr
 * otocol
 * specified in @protocol, for use in error dialogs or other messages to 
 * be
 * seen by the user. Should never return NULL unless @protocol is invalid
 * .
 * This function is mainly for internal use, applications would typically
 * use gst_missing_plugin_message_get_description() to get a description 
 * of
 * a missing feature from a missing-plugin message.
 */
export function pb_utils_get_source_description(protocol: string): string;
/**
 * Initialises the base utils support library. This function is not
 * thread-safe. Applications should call it after calling gst_init(),
 * plugins should call it from their plugin_init function.
 * This function may be called multiple times. It will do nothing if the
 * library has already been initialised.
 */
export function pb_utils_init(): void;
/**
 * Gets the version number of the GStreamer Plugins Base libraries.
 */
export function plugins_base_version(): [number,number,number,number];
/**
 * This function returns a string that is useful for describing this vers
 * ion
 * of GStreamer's gst-plugins-base libraries to the outside world: user a
 * gent
 * strings, logging, about dialogs ...
 */
export function plugins_base_version_string(): string;
export enum AudioVisualizerShader {
    NONE = 0,
    FADE = 1,
    FADE_AND_MOVE_UP = 2,
    FADE_AND_MOVE_DOWN = 3,
    FADE_AND_MOVE_LEFT = 4,
    FADE_AND_MOVE_RIGHT = 5,
    FADE_AND_MOVE_HORIZ_OUT = 6,
    FADE_AND_MOVE_HORIZ_IN = 7,
    FADE_AND_MOVE_VERT_OUT = 8,
    FADE_AND_MOVE_VERT_IN = 9,
}
export enum DiscovererResult {
    OK = 0,
    URI_INVALID = 1,
    ERROR = 2,
    TIMEOUT = 3,
    BUSY = 4,
    MISSING_PLUGINS = 5,
}
export enum InstallPluginsReturn {
    SUCCESS = 0,
    NOT_FOUND = 1,
    ERROR = 2,
    PARTIAL_SUCCESS = 3,
    USER_ABORT = 4,
    CRASHED = 100,
    INVALID = 101,
    STARTED_OK = 200,
    INTERNAL_FAILURE = 201,
    HELPER_MISSING = 202,
    INSTALL_IN_PROGRESS = 203,
}
export type DiscovererAudioInfoClass = any;
export type DiscovererContainerInfoClass = any;
export type DiscovererInfoClass = any;
export type DiscovererStreamInfoClass = any;
export type DiscovererSubtitleInfoClass = any;
export type DiscovererVideoInfoClass = any;
export type EncodingTargetClass = any;
export enum DiscovererSerializeFlags {
    BASIC = 0,
    CAPS = 1,
    TAGS = 2,
    MISC = 4,
    ALL = 7,
}
export class AudioVisualizer  {
    constructor(config?: properties);
    shade_amount: number;
    shader: AudioVisualizerShader;
    readonly req_spf: number;
    readonly vinfo: GstVideo.VideoInfo;
    readonly ainfo: GstAudio.AudioInfo;
    readonly priv: AudioVisualizerPrivate;
}
export class Discoverer extends GObject.Object {
    constructor(config?: properties);
    timeout: number;
    use_cache: boolean;
    discover_uri(uri: string): DiscovererInfo;
    discover_uri_async(uri: string): boolean;
    start(): void;
    stop(): void;
    vfunc_discovered(info: DiscovererInfo, err: GLib.Error): void;
    vfunc_finished(): void;
    vfunc_source_setup(source: Gst.Element): void;
    vfunc_starting(): void;
}
export class DiscovererAudioInfo  {
    constructor(config?: properties);
    get_bitrate(): number;
    get_channel_mask(): number;
    get_channels(): number;
    get_depth(): number;
    get_language(): string;
    get_max_bitrate(): number;
    get_sample_rate(): number;
}
export class DiscovererContainerInfo  {
    constructor(config?: properties);
    get_streams(): GLib.List;
}
export class DiscovererInfo  {
    constructor(config?: properties);
    copy(): DiscovererInfo;
    get_audio_streams(): GLib.List;
    get_container_streams(): GLib.List;
    get_duration(): Gst.ClockTime;
    get_live(): boolean;
    get_misc(): Gst.Structure;
    get_missing_elements_installer_details(): string[];
    get_result(): DiscovererResult;
    get_seekable(): boolean;
    get_stream_info(): DiscovererStreamInfo;
    get_stream_list(): GLib.List;
    get_streams(streamtype: GType): GLib.List;
    get_subtitle_streams(): GLib.List;
    get_tags(): Gst.TagList;
    get_toc(): Gst.Toc;
    get_uri(): string;
    get_video_streams(): GLib.List;
    to_variant(flags: DiscovererSerializeFlags): GLib.Variant;
    static from_variant(variant: GLib.Variant): DiscovererInfo;
}
export class DiscovererStreamInfo  {
    constructor(config?: properties);
    get_caps(): Gst.Caps;
    get_misc(): Gst.Structure;
    get_next(): DiscovererStreamInfo;
    get_previous(): DiscovererStreamInfo;
    get_stream_id(): string;
    get_stream_type_nick(): string;
    get_tags(): Gst.TagList;
    get_toc(): Gst.Toc;
    static list_free(infos: GLib.List): void;
}
export class DiscovererSubtitleInfo  {
    constructor(config?: properties);
    get_language(): string;
}
export class DiscovererVideoInfo  {
    constructor(config?: properties);
    get_bitrate(): number;
    get_depth(): number;
    get_framerate_denom(): number;
    get_framerate_num(): number;
    get_height(): number;
    get_max_bitrate(): number;
    get_par_denom(): number;
    get_par_num(): number;
    get_width(): number;
    is_image(): boolean;
    is_interlaced(): boolean;
}
export class EncodingAudioProfile extends EncodingProfile {
    constructor(config?: properties);
}
export class EncodingContainerProfile extends EncodingProfile {
    constructor(config?: properties);
    add_profile(profile: EncodingProfile): boolean;
    contains_profile(profile: EncodingProfile): boolean;
    get_profiles(): GLib.List;
}
export class EncodingProfile  {
    constructor(config?: properties);
    restriction_caps: Gst.Caps;
    copy(): EncodingProfile;
    get_allow_dynamic_output(): boolean;
    get_description(): string;
    get_file_extension(): string;
    get_format(): Gst.Caps;
    get_input_caps(): Gst.Caps;
    get_name(): string;
    get_presence(): number;
    get_preset(): string;
    get_preset_name(): string;
    get_restriction(): Gst.Caps;
    get_type_nick(): string;
    is_enabled(): boolean;
    is_equal(b: EncodingProfile): boolean;
    set_allow_dynamic_output(allow_dynamic_output: boolean): void;
    set_description(description: string | null): void;
    set_enabled(enabled: boolean): void;
    set_format(format: Gst.Caps): void;
    set_name(name: string | null): void;
    set_presence(presence: number): void;
    set_preset(preset: string | null): void;
    set_preset_name(preset_name: string | null): void;
    set_restriction(restriction: Gst.Caps | null): void;
    static find(targetname: string, profilename: string | null, category: string | null): EncodingProfile;
    static from_discoverer(info: DiscovererInfo): EncodingProfile;
}
export class EncodingTarget extends GObject.Object {
    constructor(config?: properties);
    add_profile(profile: EncodingProfile): boolean;
    get_category(): string;
    get_description(): string;
    get_name(): string;
    get_profile(name: string): EncodingProfile;
    get_profiles(): GLib.List;
    save(): boolean;
    save_to_file(filepath: string): boolean;
    static load(name: string, category: string | null): EncodingTarget;
    static load_from_file(filepath: string): EncodingTarget;
}
export class EncodingVideoProfile extends EncodingProfile {
    constructor(config?: properties);
    get_pass(): number;
    get_variableframerate(): boolean;
    set_pass(pass: number): void;
    set_variableframerate(variableframerate: boolean): void;
}
export class AudioVisualizerPrivate  {
    constructor(config?: properties);
}
export class DiscovererPrivate  {
    constructor(config?: properties);
}
export class InstallPluginsContext  {
    constructor(config?: properties);
    copy(): InstallPluginsContext;
    free(): void;
    set_confirm_search(confirm_search: boolean): void;
    set_desktop_id(desktop_id: string): void;
    set_startup_notification_id(startup_id: string): void;
    set_xid(xid: number): void;
}