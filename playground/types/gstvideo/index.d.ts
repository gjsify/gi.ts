
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gst from "gst";
import * as GstBase from "gstbase";
import * as GstVideo from "gstvideo";
/**
 * gstvideo.d.ts
 */
type properties = { [key: string]: any };
export type VideoAffineTransformationGetMatrix = (meta: VideoAffineTransformationMeta, matrix: number) => boolean;
export type VideoConvertSampleCallback = (sample: Gst.Sample, error: GLib.Error, user_data: object | null) => void;
export type VideoFormatPack = (info: VideoFormatInfo, flags: VideoPackFlags, src: object | null, sstride: number, data: object | null, stride: number, chroma_site: VideoChromaSite, y: number, width: number) => void;
export type VideoFormatUnpack = (info: VideoFormatInfo, flags: VideoPackFlags, dest: object | null, data: object | null, stride: number, x: number, y: number, width: number) => void;
export type VideoGLTextureUpload = (meta: VideoGLTextureUploadMeta, texture_id: number) => boolean;
export const BUFFER_POOL_OPTION_VIDEO_AFFINE_TRANSFORMATION_META: string;
export const BUFFER_POOL_OPTION_VIDEO_ALIGNMENT: string;
export const BUFFER_POOL_OPTION_VIDEO_GL_TEXTURE_UPLOAD_META: string;
export const BUFFER_POOL_OPTION_VIDEO_META: string;
export const CAPS_FEATURE_FORMAT_INTERLACED: string;
export const CAPS_FEATURE_META_GST_VIDEO_AFFINE_TRANSFORMATION_META: string;
export const CAPS_FEATURE_META_GST_VIDEO_GL_TEXTURE_UPLOAD_META: string;
export const CAPS_FEATURE_META_GST_VIDEO_META: string;
export const CAPS_FEATURE_META_GST_VIDEO_OVERLAY_COMPOSITION: string;
export const META_TAG_VIDEO_COLORSPACE_STR: string;
export const META_TAG_VIDEO_ORIENTATION_STR: string;
export const META_TAG_VIDEO_SIZE_STR: string;
export const META_TAG_VIDEO_STR: string;
export const VIDEO_COLORIMETRY_BT2020: string;
export const VIDEO_COLORIMETRY_BT601: string;
export const VIDEO_COLORIMETRY_BT709: string;
export const VIDEO_COLORIMETRY_SMPTE240M: string;
export const VIDEO_COLORIMETRY_SRGB: string;
export const VIDEO_COMP_A: number;
export const VIDEO_COMP_B: number;
export const VIDEO_COMP_G: number;
export const VIDEO_COMP_INDEX: number;
export const VIDEO_COMP_PALETTE: number;
export const VIDEO_COMP_R: number;
export const VIDEO_COMP_U: number;
export const VIDEO_COMP_V: number;
export const VIDEO_COMP_Y: number;
export const VIDEO_CONVERTER_OPT_ALPHA_MODE: string;
export const VIDEO_CONVERTER_OPT_ALPHA_VALUE: string;
export const VIDEO_CONVERTER_OPT_BORDER_ARGB: string;
export const VIDEO_CONVERTER_OPT_CHROMA_MODE: string;
export const VIDEO_CONVERTER_OPT_CHROMA_RESAMPLER_METHOD: string;
export const VIDEO_CONVERTER_OPT_DEST_HEIGHT: string;
export const VIDEO_CONVERTER_OPT_DEST_WIDTH: string;
export const VIDEO_CONVERTER_OPT_DEST_X: string;
export const VIDEO_CONVERTER_OPT_DEST_Y: string;
export const VIDEO_CONVERTER_OPT_DITHER_METHOD: string;
export const VIDEO_CONVERTER_OPT_DITHER_QUANTIZATION: string;
export const VIDEO_CONVERTER_OPT_FILL_BORDER: string;
export const VIDEO_CONVERTER_OPT_GAMMA_MODE: string;
export const VIDEO_CONVERTER_OPT_MATRIX_MODE: string;
export const VIDEO_CONVERTER_OPT_PRIMARIES_MODE: string;
export const VIDEO_CONVERTER_OPT_RESAMPLER_METHOD: string;
export const VIDEO_CONVERTER_OPT_RESAMPLER_TAPS: string;
export const VIDEO_CONVERTER_OPT_SRC_HEIGHT: string;
export const VIDEO_CONVERTER_OPT_SRC_WIDTH: string;
export const VIDEO_CONVERTER_OPT_SRC_X: string;
export const VIDEO_CONVERTER_OPT_SRC_Y: string;
export const VIDEO_CONVERTER_OPT_THREADS: string;
export const VIDEO_DECODER_MAX_ERRORS: number;
export const VIDEO_DECODER_SINK_NAME: string;
export const VIDEO_DECODER_SRC_NAME: string;
export const VIDEO_ENCODER_SINK_NAME: string;
export const VIDEO_ENCODER_SRC_NAME: string;
export const VIDEO_FORMATS_ALL: string;
export const VIDEO_FPS_RANGE: string;
export const VIDEO_MAX_COMPONENTS: number;
export const VIDEO_MAX_PLANES: number;
export const VIDEO_OVERLAY_COMPOSITION_BLEND_FORMATS: string;
export const VIDEO_RESAMPLER_OPT_CUBIC_B: string;
export const VIDEO_RESAMPLER_OPT_CUBIC_C: string;
export const VIDEO_RESAMPLER_OPT_ENVELOPE: string;
export const VIDEO_RESAMPLER_OPT_MAX_TAPS: string;
export const VIDEO_RESAMPLER_OPT_SHARPEN: string;
export const VIDEO_RESAMPLER_OPT_SHARPNESS: string;
export const VIDEO_SCALER_OPT_DITHER_METHOD: string;
export const VIDEO_SIZE_RANGE: string;
export const VIDEO_TILE_TYPE_MASK: number;
export const VIDEO_TILE_TYPE_SHIFT: number;
export const VIDEO_TILE_X_TILES_MASK: number;
export const VIDEO_TILE_Y_TILES_SHIFT: number;
/**
 * Attaches GstVideoAffineTransformationMeta metadata to @buffer with
 * the given parameters.
 */
export function buffer_add_video_affine_transformation_meta(buffer: Gst.Buffer): VideoAffineTransformationMeta;
/**
 * Attaches #GstVideoCaptionMeta metadata to @buffer with the given
 * parameters.
 */
export function buffer_add_video_caption_meta(buffer: Gst.Buffer, caption_type: VideoCaptionType, data: number[], size: number): VideoCaptionMeta;
/**
 * Attaches GstVideoGLTextureUploadMeta metadata to @buffer with the give
 * n
 * parameters.
 */
export function buffer_add_video_gl_texture_upload_meta(buffer: Gst.Buffer, texture_orientation: VideoGLTextureOrientation, n_textures: number, texture_type: VideoGLTextureType, upload: VideoGLTextureUpload, user_data: object | null, user_data_copy: GObject.BoxedCopyFunc, user_data_free: GObject.BoxedFreeFunc): VideoGLTextureUploadMeta;
/**
 * Attaches GstVideoMeta metadata to @buffer with the given parameters an
 * d the
 * default offsets and strides for @format and @width x @height.
 * This function calculates the default offsets and strides and then call
 * s
 * gst_buffer_add_video_meta_full() with them.
 */
export function buffer_add_video_meta(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number): VideoMeta;
/**
 * Attaches GstVideoMeta metadata to @buffer with the given parameters.
 */
export function buffer_add_video_meta_full(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number, n_planes: number, offset: number[], stride: number[]): VideoMeta;
/**
 * Sets an overlay composition on a buffer. The buffer will obtain its ow
 * n
 * reference to the composition, meaning this function does not take owne
 * rship
 * of @comp.
 */
export function buffer_add_video_overlay_composition_meta(buf: Gst.Buffer, comp: VideoOverlayComposition | null): VideoOverlayCompositionMeta;
/**
 * Attaches #GstVideoRegionOfInterestMeta metadata to @buffer with the gi
 * ven
 * parameters.
 */
export function buffer_add_video_region_of_interest_meta(buffer: Gst.Buffer, roi_type: string, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta;
/**
 * Attaches #GstVideoRegionOfInterestMeta metadata to @buffer with the gi
 * ven
 * parameters.
 */
export function buffer_add_video_region_of_interest_meta_id(buffer: Gst.Buffer, roi_type: GLib.Quark, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta;
/**
 * Attaches #GstVideoTimeCodeMeta metadata to @buffer with the given
 * parameters.
 */
export function buffer_add_video_time_code_meta(buffer: Gst.Buffer, tc: VideoTimeCode): VideoTimeCodeMeta | null;
/**
 * Attaches #GstVideoTimeCodeMeta metadata to @buffer with the given
 * parameters.
 */
export function buffer_add_video_time_code_meta_full(buffer: Gst.Buffer, fps_n: number, fps_d: number, latest_daily_jam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, field_count: number): VideoTimeCodeMeta;
/**
 * Find the #GstVideoMeta on @buffer with the lowest @id.
 * Buffers can contain multiple #GstVideoMeta metadata items when dealing
 *  with
 * multiview buffers.
 */
export function buffer_get_video_meta(buffer: Gst.Buffer): VideoMeta;
/**
 * Find the #GstVideoMeta on @buffer with the given @id.
 * Buffers can contain multiple #GstVideoMeta metadata items when dealing
 *  with
 * multiview buffers.
 */
export function buffer_get_video_meta_id(buffer: Gst.Buffer, id: number): VideoMeta;
/**
 * Find the #GstVideoRegionOfInterestMeta on @buffer with the given @id.
 * Buffers can contain multiple #GstVideoRegionOfInterestMeta metadata it
 * ems if
 * multiple regions of interests are marked on a frame.
 */
export function buffer_get_video_region_of_interest_meta_id(buffer: Gst.Buffer, id: number): VideoRegionOfInterestMeta;
/**
 * Get the video alignment from the bufferpool configuration @config in
 * in @align
 */
export function buffer_pool_config_get_video_alignment(config: Gst.Structure, align: VideoAlignment): boolean;
/**
 * Set the video alignment in @align to the bufferpool configuration
 * @config
 */
export function buffer_pool_config_set_video_alignment(config: Gst.Structure, align: VideoAlignment): void;
/**
 * Convenience function to check if the given message is a
 * "prepare-window-handle" message from a #GstVideoOverlay.
 */
export function is_video_overlay_prepare_window_handle_message(msg: Gst.Message): boolean;
/**
 * Inspect a #GstEvent and return the #GstNavigationEventType of the even
 * t, or
 * #GST_NAVIGATION_EVENT_INVALID if the event is not a #GstNavigation eve
 * nt.
 */
export function navigation_event_get_type(event: Gst.Event): NavigationEventType;
/**
 * Inspect a #GstNavigation command event and retrieve the enum value of 
 * the
 * associated command.
 */
export function navigation_event_parse_command(event: Gst.Event): [boolean, NavigationCommand | null];
/**
 * 
 */
export function navigation_event_parse_key_event(event: Gst.Event): [boolean, string | null];
/**
 * Retrieve the details of either a #GstNavigation mouse button press eve
 * nt or
 * a mouse button release event. Determine which type the event is using
 * gst_navigation_event_get_type() to retrieve the #GstNavigationEventTyp
 * e.
 */
export function navigation_event_parse_mouse_button_event(event: Gst.Event): [boolean, number | null,number | null,number | null];
/**
 * Inspect a #GstNavigation mouse movement event and extract the coordina
 * tes
 * of the event.
 */
export function navigation_event_parse_mouse_move_event(event: Gst.Event): [boolean, number | null,number | null];
/**
 * Check a bus message to see if it is a #GstNavigation event, and return
 * the #GstNavigationMessageType identifying the type of the message if s
 * o.
 */
export function navigation_message_get_type(message: Gst.Message): NavigationMessageType;
/**
 * Creates a new #GstNavigation message with type
 * #GST_NAVIGATION_MESSAGE_ANGLES_CHANGED for notifying an application
 * that the current angle, or current number of angles available in a
 * multiangle video has changed.
 */
export function navigation_message_new_angles_changed(src: Gst.Object, cur_angle: number, n_angles: number): Gst.Message;
/**
 * Creates a new #GstNavigation message with type
 * #GST_NAVIGATION_MESSAGE_COMMANDS_CHANGED
 */
export function navigation_message_new_commands_changed(src: Gst.Object): Gst.Message;
/**
 * Creates a new #GstNavigation message with type
 * #GST_NAVIGATION_MESSAGE_EVENT.
 */
export function navigation_message_new_event(src: Gst.Object, event: Gst.Event): Gst.Message;
/**
 * Creates a new #GstNavigation message with type
 * #GST_NAVIGATION_MESSAGE_MOUSE_OVER.
 */
export function navigation_message_new_mouse_over(src: Gst.Object, active: boolean): Gst.Message;
/**
 * Parse a #GstNavigation message of type GST_NAVIGATION_MESSAGE_ANGLES_C
 * HANGED
 * and extract the @cur_angle and @n_angles parameters.
 */
export function navigation_message_parse_angles_changed(message: Gst.Message): [boolean, number | null,number | null];
/**
 * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_EVENT
 * and extract contained #GstEvent. The caller must unref the @event when
 *  done
 * with it.
 */
export function navigation_message_parse_event(message: Gst.Message): [boolean, Gst.Event | null];
/**
 * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_MOUSE_O
 * VER
 * and extract the active/inactive flag. If the mouse over event is marke
 * d
 * active, it indicates that the mouse is over a clickable area.
 */
export function navigation_message_parse_mouse_over(message: Gst.Message): [boolean, boolean | null];
/**
 * Inspect a #GstQuery and return the #GstNavigationQueryType associated 
 * with
 * it if it is a #GstNavigation query.
 */
export function navigation_query_get_type(query: Gst.Query): NavigationQueryType;
/**
 * Create a new #GstNavigation angles query. When executed, it will
 * query the pipeline for the set of currently available angles, which ma
 * y be
 * greater than one in a multiangle video.
 */
export function navigation_query_new_angles(): Gst.Query;
/**
 * Create a new #GstNavigation commands query. When executed, it will
 * query the pipeline for the set of currently available commands.
 */
export function navigation_query_new_commands(): Gst.Query;
/**
 * Parse the current angle number in the #GstNavigation angles @query int
 * o the
 * #guint pointed to by the @cur_angle variable, and the number of availa
 * ble
 * angles into the #guint pointed to by the @n_angles variable.
 */
export function navigation_query_parse_angles(query: Gst.Query): [boolean, number | null,number | null];
/**
 * Parse the number of commands in the #GstNavigation commands @query.
 */
export function navigation_query_parse_commands_length(query: Gst.Query): [boolean, number | null];
/**
 * Parse the #GstNavigation command query and retrieve the @nth command f
 * rom
 * it into @cmd. If the list contains less elements than @nth, @cmd will 
 * be
 * set to #GST_NAVIGATION_COMMAND_INVALID.
 */
export function navigation_query_parse_commands_nth(query: Gst.Query, nth: number): [boolean, NavigationCommand | null];
/**
 * Set the #GstNavigation angles query result field in @query.
 */
export function navigation_query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void;
/**
 * Set the #GstNavigation command query result fields in @query. The numb
 * er
 * of commands passed must be equal to @n_commands.
 */
export function navigation_query_set_commandsv(query: Gst.Query, n_cmds: number, cmds: NavigationCommand[]): void;
/**
 * 
 */
export function video_affine_transformation_meta_api_get_type(): unknown;
/**
 * 
 */
export function video_affine_transformation_meta_get_info(): Gst.MetaInfo;
/**
 * Lets you blend the @src image into the @dest image
 */
export function video_blend(dest: VideoFrame, src: VideoFrame, x: number, y: number, global_alpha: number): boolean;
/**
 * Scales a buffer containing RGBA (or AYUV) video. This is an internal
 * helper function which is used to scale subtitle overlays, and may be
 * deprecated in the near future. Use #GstVideoScaler to scale video buff
 * ers
 * instead.
 */
export function video_blend_scale_linear_RGBA(src: VideoInfo, src_buffer: Gst.Buffer, dest_height: number, dest_width: number): [VideoInfo,Gst.Buffer];
/**
 * Given the Pixel Aspect Ratio and size of an input video frame, and the
 * pixel aspect ratio of the intended display device, calculates the actu
 * al
 * display ratio the video will be rendered with.
 */
export function video_calculate_display_ratio(video_width: number, video_height: number, video_par_n: number, video_par_d: number, display_par_n: number, display_par_d: number): [boolean, number,number];
/**
 * 
 */
export function video_caption_meta_api_get_type(): unknown;
/**
 * 
 */
export function video_caption_meta_get_info(): Gst.MetaInfo;
/**
 * Parses fixed Closed Caption #GstCaps and returns the corresponding cap
 * tion
 * type, or %GST_VIDEO_CAPTION_TYPE_UNKNOWN.
 */
export function video_caption_type_from_caps(caps: Gst.Caps): VideoCaptionType;
/**
 * Creates new caps corresponding to @type.
 */
export function video_caption_type_to_caps(type: VideoCaptionType): Gst.Caps;
/**
 * Convert @s to a #GstVideoChromaSite
 */
export function video_chroma_from_string(s: string): VideoChromaSite;
/**
 * Perform resampling of @width chroma pixels in @lines.
 */
export function video_chroma_resample(resample: VideoChromaResample, lines: object | null, width: number): void;
/**
 * Create a new resampler object for the given parameters. When @h_factor
 *  or
 * @v_factor is > 0, upsampling will be used, otherwise subsampling is
 * performed.
 */
export function video_chroma_resample_new(method: VideoChromaMethod, site: VideoChromaSite, flags: VideoChromaFlags, format: VideoFormat, h_factor: number, v_factor: number): VideoChromaResample;
/**
 * Converts @site to its string representation.
 */
export function video_chroma_to_string(site: VideoChromaSite): string;
/**
 * Get the coefficients used to convert between Y'PbPr and R'G'B' using @
 * matrix.
 * When:
 * |[
 *   0.0 <= [Y',R',G',B'] <= 1.0)
 *   (-0.5 <= [Pb,Pr] <= 0.5)
 * ]|
 * the general conversion is given by:
 * |[
 *   Y' = Kr*R' + (1-Kr-Kb)*G' + Kb*B'
 *   Pb = (B'-Y')/(2*(1-Kb))
 *   Pr = (R'-Y')/(2*(1-Kr))
 * ]|
 * and the other way around:
 * |[
 *   R' = Y' + Cr*2*(1-Kr)
 *   G' = Y' - Cb*2*(1-Kb)*Kb/(1-Kr-Kb) - Cr*2*(1-Kr)*Kr/(1-Kr-Kb)
 *   B' = Y' + Cb*2*(1-Kb)
 * ]|
 */
export function video_color_matrix_get_Kr_Kb(matrix: VideoColorMatrix): [boolean, number,number];
/**
 * Get information about the chromaticity coordinates of @primaries.
 */
export function video_color_primaries_get_info(primaries: VideoColorPrimaries): VideoColorPrimariesInfo;
/**
 * Compute the offset and scale values for each component of @info. For e
 * ach
 * component, (c[i] - offset[i]) / scale[i] will scale the component c[i]
 *  to the
 * range [0.0 .. 1.0].
 * The reverse operation (c[i] * scale[i]) + offset[i] can be used to con
 * vert
 * the component values in range [0.0 .. 1.0] back to their representatio
 * n in
 * @info and @range.
 */
export function video_color_range_offsets(range: VideoColorRange, info: VideoFormatInfo): [number[],number[]];
/**
 * Convert @val to its gamma decoded value. This is the inverse operation
 *  of
 * @gst_video_color_transfer_encode().
 * For a non-linear value L' in the range [0..1], conversion to the linea
 * r
 * L is in general performed with a power function like:
 * |[
 *    L = L' ^ gamma
 * ]|
 * Depending on @func, different formulas might be applied. Some formulas
 * encode a linear segment in the lower range.
 */
export function video_color_transfer_decode(func: VideoTransferFunction, val: number): number;
/**
 * Convert @val to its gamma encoded value.
 * For a linear value L in the range [0..1], conversion to the non-linear
 * (gamma encoded) L' is in general performed with a power function like:
 * |[
 *    L' = L ^ (1 / gamma)
 * ]|
 * Depending on @func, different formulas might be applied. Some formulas
 * encode a linear segment in the lower range.
 */
export function video_color_transfer_encode(func: VideoTransferFunction, val: number): number;
/**
 * Converts a raw video buffer into the specified output caps.
 * The output caps can be any raw video formats or any image formats (jpe
 * g, png, ...).
 * The width, height and pixel-aspect-ratio can also be specified in the 
 * output caps.
 */
export function video_convert_sample(sample: Gst.Sample, to_caps: Gst.Caps, timeout: Gst.ClockTime): Gst.Sample;
/**
 * Converts a raw video buffer into the specified output caps.
 * The output caps can be any raw video formats or any image formats (jpe
 * g, png, ...).
 * The width, height and pixel-aspect-ratio can also be specified in the 
 * output caps.
 * @callback will be called after conversion, when an error occured or if
 *  conversion didn't
 * finish after @timeout. @callback will always be called from the thread
 *  default
 * %GMainContext, see g_main_context_get_thread_default(). If GLib before
 *  2.22 is used,
 * this will always be the global default main context.
 * @destroy_notify will be called after the callback was called and @user
 * _data is not needed
 * anymore.
 */
export function video_convert_sample_async(sample: Gst.Sample, to_caps: Gst.Caps, timeout: Gst.ClockTime, callback: VideoConvertSampleCallback, user_data: object | null, destroy_notify: GLib.DestroyNotify): void;
/**
 * Create a new converter object to convert between @in_info and @out_inf
 * o
 * with @config.
 */
export function video_converter_new(in_info: VideoInfo, out_info: VideoInfo, config: Gst.Structure): VideoConverter;
/**
 * 
 */
export function video_crop_meta_api_get_type(): unknown;
/**
 * 
 */
export function video_crop_meta_get_info(): Gst.MetaInfo;
/**
 * Make a new dither object for dithering lines of @format using the
 * algorithm described by @method.
 * Each component will be quantized to a multiple of @quantizer. Better
 * performance is achived when @quantizer is a power of 2.
 * @width is the width of the lines that this ditherer will handle.
 */
export function video_dither_new(method: VideoDitherMethod, flags: VideoDitherFlags, format: VideoFormat, quantizer: number, width: number): VideoDither;
/**
 * Checks if an event is a force key unit event. Returns true for both up
 * stream
 * and downstream force key unit events.
 */
export function video_event_is_force_key_unit(event: Gst.Event): boolean;
/**
 * Creates a new downstream force key unit event. A downstream force key 
 * unit
 * event can be sent down the pipeline to request downstream elements to 
 * produce
 * a key unit. A downstream force key unit event must also be sent when h
 * andling
 * an upstream force key unit event to notify downstream that the latter 
 * has been
 * handled.
 * To parse an event created by gst_video_event_new_downstream_force_key_
 * unit() use
 * gst_video_event_parse_downstream_force_key_unit().
 */
export function video_event_new_downstream_force_key_unit(timestamp: Gst.ClockTime, stream_time: Gst.ClockTime, running_time: Gst.ClockTime, all_headers: boolean, count: number): Gst.Event;
/**
 * Creates a new Still Frame event. If @in_still is %TRUE, then the event
 * represents the start of a still frame sequence. If it is %FALSE, then
 * the event ends a still frame sequence.
 * To parse an event created by gst_video_event_new_still_frame() use
 * gst_video_event_parse_still_frame().
 */
export function video_event_new_still_frame(in_still: boolean): Gst.Event;
/**
 * Creates a new upstream force key unit event. An upstream force key uni
 * t event
 * can be sent to request upstream elements to produce a key unit.
 * @running_time can be set to request a new key unit at a specific
 * running_time. If set to GST_CLOCK_TIME_NONE, upstream elements will pr
 * oduce a
 * new key unit as soon as possible.
 * To parse an event created by gst_video_event_new_downstream_force_key_
 * unit() use
 * gst_video_event_parse_downstream_force_key_unit().
 */
export function video_event_new_upstream_force_key_unit(running_time: Gst.ClockTime, all_headers: boolean, count: number): Gst.Event;
/**
 * Get timestamp, stream-time, running-time, all-headers and count in the
 *  force
 * key unit event. See gst_video_event_new_downstream_force_key_unit() fo
 * r a
 * full description of the downstream force key unit event.
 * @running_time will be adjusted for any pad offsets of pads it was pass
 * ing through.
 */
export function video_event_parse_downstream_force_key_unit(event: Gst.Event): [boolean, Gst.ClockTime,Gst.ClockTime,Gst.ClockTime,boolean,number];
/**
 * Parse a #GstEvent, identify if it is a Still Frame event, and
 * return the still-frame state from the event if it is.
 * If the event represents the start of a still frame, the in_still
 * variable will be set to TRUE, otherwise FALSE. It is OK to pass NULL f
 * or the
 * in_still variable order to just check whether the event is a valid sti
 * ll-frame
 * event.
 * Create a still frame event using gst_video_event_new_still_frame()
 */
export function video_event_parse_still_frame(event: Gst.Event): [boolean, boolean];
/**
 * Get running-time, all-headers and count in the force key unit event. S
 * ee
 * gst_video_event_new_upstream_force_key_unit() for a full description o
 * f the
 * upstream force key unit event.
 * Create an upstream force key unit event using  gst_video_event_new_ups
 * tream_force_key_unit()
 * @running_time will be adjusted for any pad offsets of pads it was pass
 * ing through.
 */
export function video_event_parse_upstream_force_key_unit(event: Gst.Event): [boolean, Gst.ClockTime,boolean,number];
/**
 * Convert @order to a #GstVideoFieldOrder
 */
export function video_field_order_from_string(order: string): VideoFieldOrder;
/**
 * Convert @order to its string representation.
 */
export function video_field_order_to_string(order: VideoFieldOrder): string;
/**
 * Converts a FOURCC value into the corresponding #GstVideoFormat.
 * If the FOURCC cannot be represented by #GstVideoFormat,
 * #GST_VIDEO_FORMAT_UNKNOWN is returned.
 */
export function video_format_from_fourcc(fourcc: number): VideoFormat;
/**
 * Find the #GstVideoFormat for the given parameters.
 */
export function video_format_from_masks(depth: number, bpp: number, endianness: number, red_mask: number, green_mask: number, blue_mask: number, alpha_mask: number): VideoFormat;
/**
 * Convert the @format string to its #GstVideoFormat.
 */
export function video_format_from_string(format: string): VideoFormat;
/**
 * Get the #GstVideoFormatInfo for @format
 */
export function video_format_get_info(format: VideoFormat): VideoFormatInfo;
/**
 * Get the default palette of @format. This the palette used in the pack
 * function for paletted formats.
 */
export function video_format_get_palette(format: VideoFormat): [object | null, number];
/**
 * Converts a #GstVideoFormat value into the corresponding FOURCC.  Only
 * a few YUV formats have corresponding FOURCC values.  If @format has
 * no corresponding FOURCC value, 0 is returned.
 */
export function video_format_to_fourcc(format: VideoFormat): number;
/**
 * Returns a string containing a descriptive name for
 * the #GstVideoFormat if there is one, or NULL otherwise.
 */
export function video_format_to_string(format: VideoFormat): string;
/**
 * 
 */
export function video_gl_texture_upload_meta_api_get_type(): unknown;
/**
 * 
 */
export function video_gl_texture_upload_meta_get_info(): Gst.MetaInfo;
/**
 * Given the nominal duration of one video frame,
 * this function will check some standard framerates for
 * a close match (within 0.1%) and return one if possible,
 * It will calculate an arbitrary framerate if no close
 * match was found, and return %FALSE.
 * It returns %FALSE if a duration of 0 is passed.
 */
export function video_guess_framerate(duration: Gst.ClockTime): [boolean, number | null,number | null];
/**
 * Convert @mode to a #GstVideoInterlaceMode
 */
export function video_interlace_mode_from_string(mode: string): VideoInterlaceMode;
/**
 * Convert @mode to its string representation.
 */
export function video_interlace_mode_to_string(mode: VideoInterlaceMode): string;
/**
 * 
 */
export function video_meta_api_get_type(): unknown;
/**
 * 
 */
export function video_meta_get_info(): Gst.MetaInfo;
/**
 * Get the #GQuark for the "gst-video-scale" metadata transform operation
 * .
 */
export function video_meta_transform_scale_get_quark(): GLib.Quark;
/**
 * 
 */
export function video_multiview_get_doubled_height_modes(): GObject.Value;
/**
 * 
 */
export function video_multiview_get_doubled_size_modes(): GObject.Value;
/**
 * 
 */
export function video_multiview_get_doubled_width_modes(): GObject.Value;
/**
 * 
 */
export function video_multiview_get_mono_modes(): GObject.Value;
/**
 * 
 */
export function video_multiview_get_unpacked_modes(): GObject.Value;
/**
 * 
 */
export function video_multiview_guess_half_aspect(mv_mode: VideoMultiviewMode, width: number, height: number, par_n: number, par_d: number): boolean;
/**
 * 
 */
export function video_multiview_mode_from_caps_string(caps_mview_mode: string): VideoMultiviewMode;
/**
 * 
 */
export function video_multiview_mode_to_caps_string(mview_mode: VideoMultiviewMode): string;
/**
 * Utility function that transforms the width/height/PAR
 * and multiview mode and flags of a #GstVideoInfo into
 * the requested mode.
 */
export function video_multiview_video_info_change_mode(info: VideoInfo, out_mview_mode: VideoMultiviewMode, out_mview_flags: VideoMultiviewFlags): void;
/**
 * 
 */
export function video_overlay_composition_meta_api_get_type(): unknown;
/**
 * 
 */
export function video_overlay_composition_meta_get_info(): Gst.MetaInfo;
/**
 * This helper shall be used by classes implementing the #GstVideoOverlay
 * interface that want the render rectangle to be controllable using
 * properties. This helper will install "render-rectangle" property into 
 * the
 * class.
 */
export function video_overlay_install_properties(oclass: GObject.ObjectClass, last_prop_id: number): void;
/**
 * This helper shall be used by classes implementing the #GstVideoOverlay
 * interface that want the render rectangle to be controllable using
 * properties. This helper will parse and set the render rectangle callin
 * g
 * gst_video_overlay_set_render_rectangle().
 */
export function video_overlay_set_property(object: GObject.Object, last_prop_id: number, property_id: number, value: GObject.Value): boolean;
/**
 * 
 */
export function video_region_of_interest_meta_api_get_type(): unknown;
/**
 * 
 */
export function video_region_of_interest_meta_get_info(): Gst.MetaInfo;
/**
 * Make a new @method video scaler. @in_size source lines/pixels will
 * be scaled to @out_size destination lines/pixels.
 * @n_taps specifies the amount of pixels to use from the source for one 
 * output
 * pixel. If n_taps is 0, this function chooses a good value automaticall
 * y based
 * on the @method and @in_size/@out_size.
 */
export function video_scaler_new(method: VideoResamplerMethod, flags: VideoScalerFlags, n_taps: number, in_size: number, out_size: number, options: Gst.Structure | null): VideoScaler;
/**
 * Get the tile index of the tile at coordinates @x and @y in the tiled
 * image of @x_tiles by @y_tiles.
 * Use this method when @mode is of type %GST_VIDEO_TILE_TYPE_INDEXED.
 */
export function video_tile_get_index(mode: VideoTileMode, x: number, y: number, x_tiles: number, y_tiles: number): number;
/**
 * 
 */
export function video_time_code_meta_api_get_type(): unknown;
/**
 * 
 */
export function video_time_code_meta_get_info(): Gst.MetaInfo;
export enum ColorBalanceType {
    HARDWARE = 0,
    SOFTWARE = 1,
}
export enum NavigationCommand {
    INVALID = 0,
    MENU1 = 1,
    MENU2 = 2,
    MENU3 = 3,
    MENU4 = 4,
    MENU5 = 5,
    MENU6 = 6,
    MENU7 = 7,
    LEFT = 20,
    RIGHT = 21,
    UP = 22,
    DOWN = 23,
    ACTIVATE = 24,
    PREV_ANGLE = 30,
    NEXT_ANGLE = 31,
}
export enum NavigationEventType {
    INVALID = 0,
    KEY_PRESS = 1,
    KEY_RELEASE = 2,
    MOUSE_BUTTON_PRESS = 3,
    MOUSE_BUTTON_RELEASE = 4,
    MOUSE_MOVE = 5,
    COMMAND = 6,
}
export enum NavigationMessageType {
    INVALID = 0,
    MOUSE_OVER = 1,
    COMMANDS_CHANGED = 2,
    ANGLES_CHANGED = 3,
    EVENT = 4,
}
export enum NavigationQueryType {
    INVALID = 0,
    COMMANDS = 1,
    ANGLES = 2,
}
export enum VideoAlphaMode {
    COPY = 0,
    SET = 1,
    MULT = 2,
}
export enum VideoAncillaryDID {
    UNDEFINED = 0,
    DELETION = 128,
    HANC_3G_AUDIO_DATA_FIRST = 160,
    HANC_3G_AUDIO_DATA_LAST = 167,
    HANC_HDTV_AUDIO_DATA_FIRST = 224,
    HANC_HDTV_AUDIO_DATA_LAST = 231,
    HANC_SDTV_AUDIO_DATA_1_FIRST = 236,
    HANC_SDTV_AUDIO_DATA_1_LAST = 239,
    CAMERA_POSITION = 240,
    HANC_ERROR_DETECTION = 244,
    HANC_SDTV_AUDIO_DATA_2_FIRST = 248,
    HANC_SDTV_AUDIO_DATA_2_LAST = 255,
}
export enum VideoAncillaryDID16 {
    S334_EIA_708 = 24833,
    S334_EIA_608 = 24834,
    S2016_3_AFD_BAR = 16645,
}
export enum VideoCaptionType {
    UNKNOWN = 0,
    CEA608_RAW = 1,
    CEA608_S334_1A = 2,
    CEA708_RAW = 3,
    CEA708_CDP = 4,
}
export enum VideoChromaMethod {
    NEAREST = 0,
    LINEAR = 1,
}
export enum VideoChromaMode {
    FULL = 0,
    UPSAMPLE_ONLY = 1,
    DOWNSAMPLE_ONLY = 2,
    NONE = 3,
}
export enum VideoColorMatrix {
    UNKNOWN = 0,
    RGB = 1,
    FCC = 2,
    BT709 = 3,
    BT601 = 4,
    SMPTE240M = 5,
    BT2020 = 6,
}
export enum VideoColorPrimaries {
    UNKNOWN = 0,
    BT709 = 1,
    BT470M = 2,
    BT470BG = 3,
    SMPTE170M = 4,
    SMPTE240M = 5,
    FILM = 6,
    BT2020 = 7,
    ADOBERGB = 8,
    SMPTEST428 = 9,
    SMPTERP431 = 10,
    SMPTEEG432 = 11,
    EBU3213 = 12,
}
export enum VideoColorRange {
    UNKNOWN = 0,
    Gjs_0_255 = 1,
    Gjs_16_235 = 2,
}
export enum VideoDitherMethod {
    NONE = 0,
    VERTERR = 1,
    FLOYD_STEINBERG = 2,
    SIERRA_LITE = 3,
    BAYER = 4,
}
export enum VideoFieldOrder {
    UNKNOWN = 0,
    TOP_FIELD_FIRST = 1,
    BOTTOM_FIELD_FIRST = 2,
}
export enum VideoFormat {
    UNKNOWN = 0,
    ENCODED = 1,
    I420 = 2,
    YV12 = 3,
    YUY2 = 4,
    UYVY = 5,
    AYUV = 6,
    RGBX = 7,
    BGRX = 8,
    XRGB = 9,
    XBGR = 10,
    RGBA = 11,
    BGRA = 12,
    ARGB = 13,
    ABGR = 14,
    RGB = 15,
    BGR = 16,
    Y41B = 17,
    Y42B = 18,
    YVYU = 19,
    Y444 = 20,
    V210 = 21,
    V216 = 22,
    NV12 = 23,
    NV21 = 24,
    GRAY8 = 25,
    GRAY16_BE = 26,
    GRAY16_LE = 27,
    V308 = 28,
    RGB16 = 29,
    BGR16 = 30,
    RGB15 = 31,
    BGR15 = 32,
    UYVP = 33,
    A420 = 34,
    RGB8P = 35,
    YUV9 = 36,
    YVU9 = 37,
    IYU1 = 38,
    ARGB64 = 39,
    AYUV64 = 40,
    R210 = 41,
    I420_10BE = 42,
    I420_10LE = 43,
    I422_10BE = 44,
    I422_10LE = 45,
    Y444_10BE = 46,
    Y444_10LE = 47,
    GBR = 48,
    GBR_10BE = 49,
    GBR_10LE = 50,
    NV16 = 51,
    NV24 = 52,
    NV12_64Z32 = 53,
    A420_10BE = 54,
    A420_10LE = 55,
    A422_10BE = 56,
    A422_10LE = 57,
    A444_10BE = 58,
    A444_10LE = 59,
    NV61 = 60,
    P010_10BE = 61,
    P010_10LE = 62,
    IYU2 = 63,
    VYUY = 64,
    GBRA = 65,
    GBRA_10BE = 66,
    GBRA_10LE = 67,
    GBR_12BE = 68,
    GBR_12LE = 69,
    GBRA_12BE = 70,
    GBRA_12LE = 71,
    I420_12BE = 72,
    I420_12LE = 73,
    I422_12BE = 74,
    I422_12LE = 75,
    Y444_12BE = 76,
    Y444_12LE = 77,
    GRAY10_LE32 = 78,
    NV12_10LE32 = 79,
    NV16_10LE32 = 80,
    NV12_10LE40 = 81,
    Y210 = 82,
    Y410 = 83,
    VUYA = 84,
    BGR10A2_LE = 85,
}
export enum VideoGLTextureOrientation {
    NORMAL_Y_NORMAL = 0,
    NORMAL_Y_FLIP = 1,
    FLIP_Y_NORMAL = 2,
    FLIP_Y_FLIP = 3,
}
export enum VideoGLTextureType {
    LUMINANCE = 0,
    LUMINANCE_ALPHA = 1,
    RGB16 = 2,
    RGB = 3,
    RGBA = 4,
    R = 5,
    RG = 6,
}
export enum VideoGammaMode {
    NONE = 0,
    REMAP = 1,
}
export enum VideoInterlaceMode {
    PROGRESSIVE = 0,
    INTERLEAVED = 1,
    MIXED = 2,
    FIELDS = 3,
    ALTERNATE = 4,
}
export enum VideoMatrixMode {
    FULL = 0,
    INPUT_ONLY = 1,
    OUTPUT_ONLY = 2,
    NONE = 3,
}
export enum VideoMultiviewFramePacking {
    NONE = -1,
    MONO = 0,
    LEFT = 1,
    RIGHT = 2,
    SIDE_BY_SIDE = 3,
    SIDE_BY_SIDE_QUINCUNX = 4,
    COLUMN_INTERLEAVED = 5,
    ROW_INTERLEAVED = 6,
    TOP_BOTTOM = 7,
    CHECKERBOARD = 8,
}
export enum VideoMultiviewMode {
    NONE = -1,
    MONO = 0,
    LEFT = 1,
    RIGHT = 2,
    SIDE_BY_SIDE = 3,
    SIDE_BY_SIDE_QUINCUNX = 4,
    COLUMN_INTERLEAVED = 5,
    ROW_INTERLEAVED = 6,
    TOP_BOTTOM = 7,
    CHECKERBOARD = 8,
    FRAME_BY_FRAME = 32,
    MULTIVIEW_FRAME_BY_FRAME = 33,
    SEPARATED = 34,
}
export enum VideoOrientationMethod {
    IDENTITY = 0,
    Gjs_90R = 1,
    Gjs_180 = 2,
    Gjs_90L = 3,
    HORIZ = 4,
    VERT = 5,
    UL_LR = 6,
    UR_LL = 7,
    AUTO = 8,
    CUSTOM = 9,
}
export enum VideoPrimariesMode {
    NONE = 0,
    MERGE_ONLY = 1,
    FAST = 2,
}
export enum VideoResamplerMethod {
    NEAREST = 0,
    LINEAR = 1,
    CUBIC = 2,
    SINC = 3,
    LANCZOS = 4,
}
export enum VideoTileMode {
    UNKNOWN = 0,
    ZFLIPZ_2X2 = 65536,
}
export enum VideoTileType {
    INDEXED = 0,
}
export enum VideoTransferFunction {
    UNKNOWN = 0,
    GAMMA10 = 1,
    GAMMA18 = 2,
    GAMMA20 = 3,
    GAMMA22 = 4,
    BT709 = 5,
    SMPTE240M = 6,
    SRGB = 7,
    GAMMA28 = 8,
    LOG100 = 9,
    LOG316 = 10,
    BT2020_12 = 11,
    ADOBERGB = 12,
}
export enum VideoVBIParserResult {
    DONE = 0,
    OK = 1,
    ERROR = 2,
}
export enum VideoBufferFlags {
    INTERLACED = 1048576,
    TFF = 2097152,
    RFF = 4194304,
    ONEFIELD = 8388608,
    MULTIPLE_VIEW = 16777216,
    FIRST_IN_BUNDLE = 33554432,
    TOP_FIELD = 10485760,
    ONEFIELD = 8388608,
    BOTTOM_FIELD = 8388608,
    LAST = 268435456,
}
export enum VideoChromaFlags {
    NONE = 0,
    INTERLACED = 1,
}
export enum VideoChromaSite {
    UNKNOWN = 0,
    NONE = 1,
    H_COSITED = 2,
    V_COSITED = 4,
    ALT_LINE = 8,
    COSITED = 6,
    JPEG = 1,
    MPEG2 = 2,
    DV = 14,
}
export enum VideoCodecFrameFlags {
    DECODE_ONLY = 1,
    SYNC_POINT = 2,
    FORCE_KEYFRAME = 4,
    FORCE_KEYFRAME_HEADERS = 8,
}
export enum VideoDitherFlags {
    NONE = 0,
    INTERLACED = 1,
    QUANTIZE = 2,
}
export enum VideoFlags {
    NONE = 0,
    VARIABLE_FPS = 1,
    PREMULTIPLIED_ALPHA = 2,
}
export enum VideoFormatFlags {
    YUV = 1,
    RGB = 2,
    GRAY = 4,
    ALPHA = 8,
    LE = 16,
    PALETTE = 32,
    COMPLEX = 64,
    UNPACK = 128,
    TILED = 256,
}
export enum VideoFrameFlags {
    NONE = 0,
    INTERLACED = 1,
    TFF = 2,
    RFF = 4,
    ONEFIELD = 8,
    MULTIPLE_VIEW = 16,
    FIRST_IN_BUNDLE = 32,
    TOP_FIELD = 10,
    ONEFIELD = 8,
    BOTTOM_FIELD = 8,
}
export enum VideoFrameMapFlags {
    NO_REF = 65536,
    LAST = 16777216,
}
export enum VideoMultiviewFlags {
    NONE = 0,
    RIGHT_VIEW_FIRST = 1,
    LEFT_FLIPPED = 2,
    LEFT_FLOPPED = 4,
    RIGHT_FLIPPED = 8,
    RIGHT_FLOPPED = 16,
    HALF_ASPECT = 16384,
    MIXED_MONO = 32768,
}
export enum VideoOverlayFormatFlags {
    NONE = 0,
    PREMULTIPLIED_ALPHA = 1,
    GLOBAL_ALPHA = 2,
}
export enum VideoPackFlags {
    NONE = 0,
    TRUNCATE_RANGE = 1,
    INTERLACED = 2,
}
export enum VideoResamplerFlags {
    NONE = 0,
    HALF_TAPS = 1,
}
export enum VideoScalerFlags {
    NONE = 0,
    INTERLACED = 1,
}
export enum VideoTimeCodeFlags {
    NONE = 0,
    DROP_FRAME = 1,
    INTERLACED = 2,
}
export class ColorBalanceChannel  {constructor(config?: properties);
readonly label: string;
readonly min_value: number;
readonly max_value: number;
readonly _gst_reserved: object[];
}
export class VideoAggregator  {constructor(config?: properties);
readonly aggregator: GstBase.Aggregator;
readonly info: VideoInfo;
readonly priv: VideoAggregatorPrivate;
readonly _gst_reserved: object[];
}
export class VideoAggregatorConvertPad  {constructor(config?: properties);
converter_config: Gst.Structure;
readonly priv: VideoAggregatorConvertPadPrivate;
readonly _gst_reserved: object[];
update_conversion_info(): void;
}
export class VideoAggregatorPad  {constructor(config?: properties);
repeat_after_eos: boolean;
zorder: number;
readonly info: VideoInfo;
readonly priv: VideoAggregatorPadPrivate;
readonly _gst_reserved: object[];
get_current_buffer(): Gst.Buffer;
get_prepared_frame(): VideoFrame;
has_current_buffer(): boolean;
set_needs_alpha(needs_alpha: boolean): void;
}
export class VideoBufferPool extends Gst.BufferPool {constructor(config?: properties);
}
export class VideoDecoder  {constructor(config?: properties);
readonly element: Gst.Element;
readonly sinkpad: Gst.Pad;
readonly srcpad: Gst.Pad;
readonly stream_lock: GLib.RecMutex;
readonly input_segment: Gst.Segment;
readonly output_segment: Gst.Segment;
readonly priv: VideoDecoderPrivate;
readonly padding: object[];
add_to_frame(n_bytes: number): void;
allocate_output_buffer(): Gst.Buffer;
allocate_output_frame(frame: VideoCodecFrame): Gst.FlowReturn;
allocate_output_frame_with_params(frame: VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn;
drop_frame(frame: VideoCodecFrame): Gst.FlowReturn;
finish_frame(frame: VideoCodecFrame): Gst.FlowReturn;
get_allocator(): [Gst.Allocator | null,Gst.AllocationParams | null];
get_buffer_pool(): Gst.BufferPool;
get_estimate_rate(): number;
get_frame(frame_number: number): VideoCodecFrame;
get_frames(): GLib.List;
get_latency(): [Gst.ClockTime | null,Gst.ClockTime | null];
get_max_decode_time(frame: VideoCodecFrame): Gst.ClockTimeDiff;
get_max_errors(): number;
get_needs_format(): boolean;
get_oldest_frame(): VideoCodecFrame;
get_output_state(): VideoCodecState;
get_packetized(): boolean;
get_pending_frame_size(): number;
get_qos_proportion(): number;
have_frame(): Gst.FlowReturn;
merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
negotiate(): boolean;
proxy_getcaps(caps: Gst.Caps | null, filter: Gst.Caps | null): Gst.Caps;
release_frame(frame: VideoCodecFrame): void;
set_estimate_rate(enabled: boolean): void;
set_interlaced_output_state(fmt: VideoFormat, mode: VideoInterlaceMode, width: number, height: number, reference: VideoCodecState | null): VideoCodecState;
set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
set_max_errors(num: number): void;
set_needs_format(enabled: boolean): void;
set_output_state(fmt: VideoFormat, width: number, height: number, reference: VideoCodecState | null): VideoCodecState;
set_packetized(packetized: boolean): void;
set_use_default_pad_acceptcaps(use: boolean): void;
}
export class VideoEncoder  {constructor(config?: properties);
qos: boolean;
readonly element: Gst.Element;
readonly sinkpad: Gst.Pad;
readonly srcpad: Gst.Pad;
readonly stream_lock: GLib.RecMutex;
readonly input_segment: Gst.Segment;
readonly output_segment: Gst.Segment;
readonly priv: VideoEncoderPrivate;
readonly padding: object[];
allocate_output_buffer(size: number): Gst.Buffer;
allocate_output_frame(frame: VideoCodecFrame, size: number): Gst.FlowReturn;
finish_frame(frame: VideoCodecFrame): Gst.FlowReturn;
get_allocator(): [Gst.Allocator | null,Gst.AllocationParams | null];
get_frame(frame_number: number): VideoCodecFrame;
get_frames(): GLib.List;
get_latency(): [Gst.ClockTime | null,Gst.ClockTime | null];
get_max_encode_time(frame: VideoCodecFrame): Gst.ClockTimeDiff;
get_oldest_frame(): VideoCodecFrame;
get_output_state(): VideoCodecState;
is_qos_enabled(): boolean;
merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
negotiate(): boolean;
proxy_getcaps(caps: Gst.Caps | null, filter: Gst.Caps | null): Gst.Caps;
set_headers(headers: GLib.List): void;
set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
set_min_pts(min_pts: Gst.ClockTime): void;
set_output_state(caps: Gst.Caps, reference: VideoCodecState | null): VideoCodecState;
set_qos_enabled(enabled: boolean): void;
}
export class VideoFilter  {constructor(config?: properties);
readonly element: GstBase.BaseTransform;
readonly negotiated: boolean;
readonly in_info: VideoInfo;
readonly out_info: VideoInfo;
readonly _gst_reserved: object[];
}
export class VideoMultiviewFlagsSet  {constructor(config?: properties);
}
export class VideoSink  {constructor(config?: properties);
show_preroll_frame: boolean;
readonly element: GstBase.BaseSink;
readonly width: number;
readonly height: number;
readonly priv: VideoSinkPrivate;
readonly _gst_reserved: object[];
static center_rect(src: VideoRectangle, dst: VideoRectangle, result: VideoRectangle, scaling: boolean): void;
}
export class ColorBalanceChannelClass  {constructor(config?: properties);
readonly value_changed: unknown;
readonly _gst_reserved: object[];
}
export class ColorBalanceInterface  {constructor(config?: properties);
readonly iface: GObject.TypeInterface;
readonly list_channels: unknown;
readonly set_value: unknown;
readonly get_value: unknown;
readonly get_balance_type: unknown;
readonly value_changed: unknown;
readonly _gst_reserved: object[];
}
export class NavigationInterface  {constructor(config?: properties);
readonly iface: GObject.TypeInterface;
readonly send_event: unknown;
}
export class VideoAffineTransformationMeta  {constructor(config?: properties);
meta: Gst.Meta;
matrix: number[];
apply_matrix(matrix: number[]): void;
static get_info(): Gst.MetaInfo;
}
export class VideoAggregatorClass  {constructor(config?: properties);
readonly parent_class: GstBase.AggregatorClass;
readonly update_caps: unknown;
readonly aggregate_frames: unknown;
readonly create_output_buffer: unknown;
readonly find_best_format: unknown;
readonly _gst_reserved: object[];
}
export class VideoAggregatorConvertPadClass  {constructor(config?: properties);
readonly parent_class: VideoAggregatorPadClass;
readonly create_conversion_info: unknown;
readonly _gst_reserved: object[];
}
export class VideoAggregatorConvertPadPrivate  {constructor(config?: properties);
}
export class VideoAggregatorPadClass  {constructor(config?: properties);
readonly parent_class: GstBase.AggregatorPadClass;
readonly update_conversion_info: unknown;
readonly prepare_frame: unknown;
readonly clean_frame: unknown;
readonly _gst_reserved: object[];
}
export class VideoAggregatorPadPrivate  {constructor(config?: properties);
}
export class VideoAggregatorPrivate  {constructor(config?: properties);
}
export class VideoAlignment  {constructor(config?: properties);
padding_top: number;
padding_bottom: number;
padding_left: number;
padding_right: number;
stride_align: number[];
reset(): void;
}
export class VideoAncillary  {constructor(config?: properties);
DID: number;
SDID_block_number: number;
data_count: number;
data: number[];
readonly _gst_reserved: object[];
}
export class VideoBufferPoolClass  {constructor(config?: properties);
readonly parent_class: Gst.BufferPoolClass;
}
export class VideoBufferPoolPrivate  {constructor(config?: properties);
}
export class VideoCaptionMeta  {constructor(config?: properties);
meta: Gst.Meta;
caption_type: VideoCaptionType;
data: number[];
size: number;
static get_info(): Gst.MetaInfo;
}
export class VideoChromaResample  {constructor(config?: properties);
free(): void;
get_info(n_lines: number, offset: number): void;
static _new(method: VideoChromaMethod, site: VideoChromaSite, flags: VideoChromaFlags, format: VideoFormat, h_factor: number, v_factor: number): VideoChromaResample;
}
export class VideoCodecFrame  {constructor(config?: properties);
readonly ref_count: number;
readonly flags: number;
system_frame_number: number;
readonly decode_frame_number: number;
readonly presentation_frame_number: number;
dts: Gst.ClockTime;
pts: Gst.ClockTime;
duration: Gst.ClockTime;
distance_from_sync: number;
input_buffer: Gst.Buffer;
output_buffer: Gst.Buffer;
deadline: Gst.ClockTime;
readonly events: GLib.List;
readonly user_data: object;
readonly user_data_destroy_notify: GLib.DestroyNotify;
get_user_data(): object | null;
ref(): VideoCodecFrame;
set_user_data(user_data: object | null, notify: GLib.DestroyNotify): void;
unref(): void;
}
export class VideoCodecState  {constructor(config?: properties);
readonly ref_count: number;
info: VideoInfo;
caps: Gst.Caps;
codec_data: Gst.Buffer;
allocation_caps: Gst.Caps;
readonly padding: object[];
ref(): VideoCodecState;
unref(): void;
}
export class VideoColorPrimariesInfo  {constructor(config?: properties);
primaries: VideoColorPrimaries;
Wx: number;
Wy: number;
Rx: number;
Ry: number;
Gx: number;
Gy: number;
Bx: number;
By: number;
}
export class VideoColorimetry  {constructor(config?: properties);
range: VideoColorRange;
matrix: VideoColorMatrix;
transfer: VideoTransferFunction;
primaries: VideoColorPrimaries;
from_string(color: string): boolean;
is_equal(other: VideoColorimetry): boolean;
matches(color: string): boolean;
to_string(): string;
}
export class VideoConverter  {constructor(config?: properties);
frame(src: VideoFrame, dest: VideoFrame): void;
free(): void;
get_config(): Gst.Structure;
set_config(config: Gst.Structure): boolean;
static _new(in_info: VideoInfo, out_info: VideoInfo, config: Gst.Structure): VideoConverter;
}
export class VideoCropMeta  {constructor(config?: properties);
meta: Gst.Meta;
x: number;
y: number;
width: number;
height: number;
static get_info(): Gst.MetaInfo;
}
export class VideoDecoderClass  {constructor(config?: properties);
readonly element_class: Gst.ElementClass;
readonly open: unknown;
readonly close: unknown;
readonly start: unknown;
readonly stop: unknown;
readonly parse: unknown;
readonly set_format: unknown;
readonly reset: unknown;
readonly finish: unknown;
readonly handle_frame: unknown;
readonly sink_event: unknown;
readonly src_event: unknown;
readonly negotiate: unknown;
readonly decide_allocation: unknown;
readonly propose_allocation: unknown;
readonly flush: unknown;
readonly sink_query: unknown;
readonly src_query: unknown;
readonly getcaps: unknown;
readonly drain: unknown;
readonly transform_meta: unknown;
readonly padding: object[];
}
export class VideoDecoderPrivate  {constructor(config?: properties);
}
export class VideoDirectionInterface  {constructor(config?: properties);
readonly iface: GObject.TypeInterface;
}
export class VideoDither  {constructor(config?: properties);
free(): void;
line(line: object | null, x: number, y: number, width: number): void;
static _new(method: VideoDitherMethod, flags: VideoDitherFlags, format: VideoFormat, quantizer: number, width: number): VideoDither;
}
export class VideoEncoderClass  {constructor(config?: properties);
readonly element_class: Gst.ElementClass;
readonly open: unknown;
readonly close: unknown;
readonly start: unknown;
readonly stop: unknown;
readonly set_format: unknown;
readonly handle_frame: unknown;
readonly reset: unknown;
readonly finish: unknown;
readonly pre_push: unknown;
readonly getcaps: unknown;
readonly sink_event: unknown;
readonly src_event: unknown;
readonly negotiate: unknown;
readonly decide_allocation: unknown;
readonly propose_allocation: unknown;
readonly flush: unknown;
readonly sink_query: unknown;
readonly src_query: unknown;
readonly transform_meta: unknown;
readonly _gst_reserved: object[];
}
export class VideoEncoderPrivate  {constructor(config?: properties);
}
export class VideoFilterClass  {constructor(config?: properties);
readonly parent_class: GstBase.BaseTransformClass;
readonly set_info: unknown;
readonly transform_frame: unknown;
readonly transform_frame_ip: unknown;
readonly _gst_reserved: object[];
}
export class VideoFormatInfo  {constructor(config?: properties);
format: VideoFormat;
name: string;
description: string;
flags: VideoFormatFlags;
bits: number;
n_components: number;
shift: number[];
depth: number[];
pixel_stride: number[];
n_planes: number;
plane: number[];
poffset: number[];
w_sub: number[];
h_sub: number[];
unpack_format: VideoFormat;
unpack_func: VideoFormatUnpack;
pack_lines: number;
pack_func: VideoFormatPack;
tile_mode: VideoTileMode;
tile_ws: number;
tile_hs: number;
readonly _gst_reserved: object[];
}
export class VideoFrame  {constructor(config?: properties);
info: VideoInfo;
flags: VideoFrameFlags;
buffer: Gst.Buffer;
meta: object;
id: number;
data: object[];
readonly _gst_reserved: object[];
copy(src: VideoFrame): boolean;
copy_plane(src: VideoFrame, plane: number): boolean;
map(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): boolean;
map_id(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): boolean;
unmap(): void;
}
export class VideoGLTextureUploadMeta  {constructor(config?: properties);
meta: Gst.Meta;
texture_orientation: VideoGLTextureOrientation;
n_textures: number;
texture_type: VideoGLTextureType[];
readonly buffer: Gst.Buffer;
readonly user_data: object;
readonly user_data_copy: GObject.BoxedCopyFunc;
readonly user_data_free: GObject.BoxedFreeFunc;
upload(texture_id: number): boolean;
static get_info(): Gst.MetaInfo;
}
export class VideoInfo  {constructor(config?: properties);
align(align: VideoAlignment): boolean;
convert(src_format: Gst.Format, src_value: number, dest_format: Gst.Format): [boolean, number];
copy(): VideoInfo;
free(): void;
from_caps(caps: Gst.Caps): boolean;
init(): void;
is_equal(other: VideoInfo): boolean;
set_format(format: VideoFormat, width: number, height: number): boolean;
set_interlaced_format(format: VideoFormat, mode: VideoInterlaceMode, width: number, height: number): boolean;
to_caps(): Gst.Caps;
}
export class VideoMeta  {constructor(config?: properties);
meta: Gst.Meta;
buffer: Gst.Buffer;
flags: VideoFrameFlags;
format: VideoFormat;
id: number;
width: number;
height: number;
n_planes: number;
offset: number[];
stride: number[];
map(plane: number, info: Gst.MapInfo, flags: Gst.MapFlags): [boolean, object | null,number];
unmap(plane: number, info: Gst.MapInfo): boolean;
static get_info(): Gst.MetaInfo;
}
export class VideoMetaTransform  {constructor(config?: properties);
in_info: VideoInfo;
out_info: VideoInfo;
static scale_get_quark(): GLib.Quark;
}
export class VideoOrientationInterface  {constructor(config?: properties);
readonly iface: GObject.TypeInterface;
readonly get_hflip: unknown;
readonly get_vflip: unknown;
readonly get_hcenter: unknown;
readonly get_vcenter: unknown;
readonly set_hflip: unknown;
readonly set_vflip: unknown;
readonly set_hcenter: unknown;
readonly set_vcenter: unknown;
}
export class VideoOverlayComposition  {constructor(config?: properties);
add_rectangle(rectangle: VideoOverlayRectangle): void;
blend(video_buf: VideoFrame): boolean;
copy(): VideoOverlayComposition;
get_rectangle(n: number): VideoOverlayRectangle;
get_seqnum(): number;
make_writable(): VideoOverlayComposition;
n_rectangles(): number;
}
export class VideoOverlayCompositionMeta  {constructor(config?: properties);
meta: Gst.Meta;
overlay: VideoOverlayComposition;
static get_info(): Gst.MetaInfo;
}
export class VideoOverlayInterface  {constructor(config?: properties);
readonly iface: GObject.TypeInterface;
readonly expose: unknown;
readonly handle_events: unknown;
readonly set_render_rectangle: unknown;
readonly set_window_handle: unknown;
}
export class VideoOverlayRectangle  {constructor(config?: properties);
static new_raw(pixels: Gst.Buffer, render_x: number, render_y: number, render_width: number, render_height: number, flags: VideoOverlayFormatFlags): VideoOverlayRectangle;
copy(): VideoOverlayRectangle;
get_flags(): VideoOverlayFormatFlags;
get_global_alpha(): number;
get_pixels_argb(flags: VideoOverlayFormatFlags): Gst.Buffer;
get_pixels_ayuv(flags: VideoOverlayFormatFlags): Gst.Buffer;
get_pixels_raw(flags: VideoOverlayFormatFlags): Gst.Buffer;
get_pixels_unscaled_argb(flags: VideoOverlayFormatFlags): Gst.Buffer;
get_pixels_unscaled_ayuv(flags: VideoOverlayFormatFlags): Gst.Buffer;
get_pixels_unscaled_raw(flags: VideoOverlayFormatFlags): Gst.Buffer;
get_render_rectangle(): [boolean, number | null,number | null,number | null,number | null];
get_seqnum(): number;
set_global_alpha(global_alpha: number): void;
set_render_rectangle(render_x: number, render_y: number, render_width: number, render_height: number): void;
}
export class VideoRectangle  {constructor(config?: properties);
x: number;
y: number;
w: number;
h: number;
}
export class VideoRegionOfInterestMeta  {constructor(config?: properties);
meta: Gst.Meta;
roi_type: GLib.Quark;
id: number;
parent_id: number;
x: number;
y: number;
w: number;
h: number;
params: GLib.List;
add_param(s: Gst.Structure): void;
get_param(name: string): Gst.Structure | null;
static get_info(): Gst.MetaInfo;
}
export class VideoResampler  {constructor(config?: properties);
in_size: number;
out_size: number;
max_taps: number;
n_phases: number;
offset: number;
phase: number;
n_taps: number;
taps: number;
readonly _gst_reserved: object[];
clear(): void;
init(method: VideoResamplerMethod, flags: VideoResamplerFlags, n_phases: number, n_taps: number, shift: number, in_size: number, out_size: number, options: Gst.Structure): boolean;
}
export class VideoScaler  {constructor(config?: properties);
Gjs_2d(vscale: VideoScaler, format: VideoFormat, src: object | null, src_stride: number, dest: object | null, dest_stride: number, x: number, y: number, width: number, height: number): void;
combine_packed_YUV(uv_scale: VideoScaler, in_format: VideoFormat, out_format: VideoFormat): VideoScaler;
free(): void;
get_coeff(out_offset: number, in_offset: number, n_taps: number): number;
get_max_taps(): number;
horizontal(format: VideoFormat, src: object | null, dest: object | null, dest_offset: number, width: number): void;
vertical(format: VideoFormat, src_lines: object | null, dest: object | null, dest_offset: number, width: number): void;
static _new(method: VideoResamplerMethod, flags: VideoScalerFlags, n_taps: number, in_size: number, out_size: number, options: Gst.Structure | null): VideoScaler;
}
export class VideoSinkClass  {constructor(config?: properties);
readonly parent_class: GstBase.BaseSinkClass;
readonly show_frame: unknown;
readonly _gst_reserved: object[];
}
export class VideoSinkPrivate  {constructor(config?: properties);
}
export class VideoTimeCode  {constructor(config?: properties);
static new_empty(): VideoTimeCode;
static new_from_date_time(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): VideoTimeCode;
static new_from_date_time_full(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): VideoTimeCode;
static new_from_string(tc_str: string): VideoTimeCode | null;
add_frames(frames: number): void;
add_interval(tc_inter: VideoTimeCodeInterval): VideoTimeCode | null;
clear(): void;
compare(tc2: VideoTimeCode): number;
copy(): VideoTimeCode;
frames_since_daily_jam(): number;
free(): void;
increment_frame(): void;
init(fps_n: number, fps_d: number, latest_daily_jam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, field_count: number): void;
init_from_date_time(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): void;
init_from_date_time_full(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): boolean;
is_valid(): boolean;
nsec_since_daily_jam(): number;
to_date_time(): GLib.DateTime | null;
to_string(): string;
}
export class VideoTimeCodeConfig  {constructor(config?: properties);
fps_n: number;
fps_d: number;
flags: VideoTimeCodeFlags;
latest_daily_jam: GLib.DateTime;
}
export class VideoTimeCodeInterval  {constructor(config?: properties);
static new_from_string(tc_inter_str: string): VideoTimeCodeInterval | null;
clear(): void;
copy(): VideoTimeCodeInterval;
free(): void;
init(hours: number, minutes: number, seconds: number, frames: number): void;
}
export class VideoTimeCodeMeta  {constructor(config?: properties);
meta: Gst.Meta;
tc: VideoTimeCode;
static get_info(): Gst.MetaInfo;
}
export class VideoVBIEncoder  {constructor(config?: properties);
add_ancillary(composite: boolean, DID: number, SDID_block_number: number, data: number[], data_count: number): boolean;
copy(): VideoVBIEncoder;
free(): void;
write_line(data: number): void;
}
export class VideoVBIParser  {constructor(config?: properties);
add_line(data: number[]): void;
copy(): VideoVBIParser;
free(): void;
get_ancillary(): [VideoVBIParserResult, VideoAncillary];
}
export interface ColorBalance  {
get_balance_type(): ColorBalanceType;
get_value(channel: ColorBalanceChannel): number;
list_channels(): GLib.List;
set_value(channel: ColorBalanceChannel, value: number): void;
value_changed(channel: ColorBalanceChannel, value: number): void;
}
export interface Navigation  {
send_command(command: NavigationCommand): void;
send_event(structure: Gst.Structure): void;
send_key_event(event: string, key: string): void;
send_mouse_event(event: string, button: number, x: number, y: number): void;
}
export interface VideoDirection  {
video_direction: VideoOrientationMethod;
}
export interface VideoOrientation  {
get_hcenter(): [boolean, number];
get_hflip(): [boolean, boolean];
get_vcenter(): [boolean, number];
get_vflip(): [boolean, boolean];
set_hcenter(center: number): boolean;
set_hflip(flip: boolean): boolean;
set_vcenter(center: number): boolean;
set_vflip(flip: boolean): boolean;
}
export interface VideoOverlay  {
expose(): void;
got_window_handle(handle: unknown): void;
handle_events(handle_events: boolean): void;
prepare_window_handle(): void;
set_render_rectangle(x: number, y: number, width: number, height: number): boolean;
set_window_handle(handle: unknown): void;
}