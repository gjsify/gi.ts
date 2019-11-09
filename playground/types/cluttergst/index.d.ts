
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Clutter from "clutter";
import * as Cogl from "cogl";
import * as GdkPixbuf from "gdkpixbuf";
import * as Gst from "gst";
import * as GstAudio from "gstaudio";
import * as GstBase from "gstbase";
import * as GstPbutils from "gstpbutils";
import * as GstVideo from "gstvideo";
import * as ClutterGst from "cluttergst";
/**
 * cluttergst.d.ts
 */
type properties = { [key: string]: any };
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION: number;
export const VERSION_HEX: number;
export const VERSION_S: string;
/**
 * Creates a new #ClutterGstVideoSink initialized with Clutter's Cogl con
 * text.
 */
export function create_video_sink(): Gst.Element;
/**
 * Utility function to initialize both Clutter and GStreamer.
 * This function should be called before calling any other GLib functions
 * . If
 * this is not an option, your program must initialise the GLib thread sy
 * stem
 * using g_thread_init() before any other GLib functions are called.
 */
export function init(argc: number, argv: string[] | null): [Clutter.InitError, number,string[] | null];
/**
 * This function does the same work as clutter_gst_init(). Additionally, 
 * it
 * allows you to add your own command line options, and it automatically
 * generates nicely formatted --help output. Clutter's and GStreamer's
 * #GOptionGroup<!-- -->s are added to the set of available options.
 * Your program must initialise the GLib thread system using g_thread_ini
 * t()
 * before any other GLib functions are called.
 */
export function init_with_args(argc: number, argv: string[] | null, parameter_string: string, entries: GLib.OptionEntry, translation_domain: string): [Clutter.InitError, number,string[] | null];
export enum BufferingMode {
    STREAM = 0,
    DOWNLOAD = 1,
}
export enum SeekFlags {
    NONE = 0,
    ACCURATE = 1,
}
export class Aspectratio  {constructor(config?: properties);
fill_allocation: boolean;
paint_borders: boolean;
readonly priv: AspectratioPrivate;
static _new(): Clutter.Content;
}
export class Camera extends GObject.Object {constructor(config?: properties);
device: CameraDevice;
get_brightness(cur_value: number): boolean;
get_brightness_range(min_value: number, max_value: number, default_value: number): boolean;
get_camera_device(): CameraDevice;
get_color_balance_property(property: string, cur_value: number): boolean;
get_color_balance_property_range(property: string, min_value: number, max_value: number, default_value: number): boolean;
get_contrast(cur_value: number): boolean;
get_contrast_range(min_value: number, max_value: number, default_value: number): boolean;
get_filter(): Gst.Element;
get_gamma(cur_value: number): boolean;
get_gamma_range(min_value: number, max_value: number, default_value: number): boolean;
get_hue(cur_value: number): boolean;
get_hue_range(min_value: number, max_value: number, default_value: number): boolean;
get_saturation(cur_value: number): boolean;
get_saturation_range(min_value: number, max_value: number, default_value: number): boolean;
is_ready_for_capture(): boolean;
is_recording_video(): boolean;
remove_filter(): boolean;
set_brightness(value: number): boolean;
set_camera_device(device: CameraDevice): boolean;
set_color_balance_property(property: string, value: number): boolean;
set_contrast(value: number): boolean;
set_filter(filter: Gst.Element): boolean;
set_gamma(value: number): boolean;
set_hue(value: number): boolean;
set_photo_profile(profile: GstPbutils.EncodingProfile): void;
set_saturation(value: number): boolean;
set_video_profile(profile: GstPbutils.EncodingProfile): void;
start_video_recording(filename: unknown): boolean;
stop_video_recording(): void;
supports_color_balance(): boolean;
supports_gamma_correction(): boolean;
take_photo(filename: unknown): boolean;
take_photo_pixbuf(): boolean;
vfunc_photo_saved(): void;
vfunc_photo_taken(pixbuf: GdkPixbuf.Pixbuf): void;
vfunc_ready_for_capture(ready: boolean): void;
vfunc_video_saved(): void;
}
export class CameraDevice  {constructor(config?: properties);
element_factory: Gst.ElementFactory;
name: string;
node: string;
readonly priv: CameraDevicePrivate;
get_capture_resolution(): [number,number];
get_name(): string;
get_node(): string;
get_supported_resolutions(): VideoResolution[];
set_capture_resolution(width: number, height: number): void;
}
export class CameraManager  {constructor(config?: properties);
readonly priv: CameraManagerPrivate;
get_camera_devices(): CameraDevice[];
static get_default(): CameraManager;
}
export class Content  {constructor(config?: properties);
frame: Frame;
paint_frame: boolean;
paint_overlays: boolean;
player: GObject.Object;
sink: VideoSink;
readonly priv: ContentPrivate;
get_frame(): Frame;
get_overlays(): Overlays;
get_player(): Player;
get_sink(): VideoSink;
set_frame(frame: Frame): void;
set_player(player: Player): void;
set_sink(sink: VideoSink): void;
static _new(): Clutter.Content;
static new_with_sink(sink: VideoSink): Clutter.Content;
}
export class Crop extends Content {constructor(config?: properties);
cull_backface: boolean;
input_region: Box;
output_region: Box;
paint_borders: boolean;
}
export class Playback extends GObject.Object {constructor(config?: properties);
audio_stream: number;
readonly audio_streams: object;
readonly buffer_fill: number;
readonly can_seek: boolean;
readonly duration: number;
readonly in_seek: boolean;
progress: number;
seek_flags: SeekFlags;
subtitle_font_name: string;
subtitle_track: number;
readonly subtitle_tracks: object;
subtitle_uri: string;
uri: string;
user_agent: string;
get_audio_stream(): number;
get_audio_streams(): GLib.List;
get_buffer_duration(): number;
get_buffer_fill(): number;
get_buffer_size(): number;
get_buffering_mode(): BufferingMode;
get_duration(): number;
get_in_seek(): boolean;
get_position(): number;
get_progress(): number;
get_seek_flags(): SeekFlags;
get_subtitle_font_name(): string;
get_subtitle_track(): number;
get_subtitle_tracks(): GLib.List;
get_subtitle_uri(): string;
get_uri(): string;
get_user_agent(): string;
is_live_media(): boolean;
set_audio_stream(index_: number): void;
set_buffer_duration(duration: number): void;
set_buffer_size(size: number): void;
set_buffering_mode(mode: BufferingMode): void;
set_filename(filename: string): void;
set_progress(progress: number): void;
set_seek_flags(flags: SeekFlags): void;
set_subtitle_font_name(font_name: string): void;
set_subtitle_track(index_: number): void;
set_subtitle_uri(uri: string): void;
set_uri(uri: string): void;
set_user_agent(user_agent: string): void;
vfunc_should_buffer(query: Gst.Query): boolean;
}
export class VideoSink extends GstVideo.VideoSink {constructor(config?: properties);
update_priority: number;
get_frame(): Frame;
get_overlays(): Overlays;
get_pipeline(): unknown;
is_ready(): boolean;
setup_pipeline(pipeline: unknown): void;
vfunc_new_frame(): void;
vfunc_new_overlays(): void;
vfunc_pipeline_ready(): void;
}
export class AspectratioClass  {constructor(config?: properties);
readonly parent_class: ContentClass;
readonly _padding_dummy: object[];
}
export class AspectratioPrivate  {constructor(config?: properties);
}
export class Box  {constructor(config?: properties);
x1: number;
y1: number;
x2: number;
y2: number;
get_height(): number;
get_width(): number;
}
export class CameraClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly ready_for_capture: unknown;
readonly photo_saved: unknown;
readonly photo_taken: unknown;
readonly video_saved: unknown;
readonly _clutter_reserved1: unknown;
readonly _clutter_reserved2: unknown;
readonly _clutter_reserved3: unknown;
readonly _clutter_reserved4: unknown;
readonly _clutter_reserved5: unknown;
readonly _clutter_reserved6: unknown;
}
export class CameraDeviceClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly capture_resolution_changed: unknown;
readonly _clutter_reserved1: unknown;
readonly _clutter_reserved2: unknown;
readonly _clutter_reserved3: unknown;
readonly _clutter_reserved4: unknown;
readonly _clutter_reserved5: unknown;
readonly _clutter_reserved6: unknown;
}
export class CameraDevicePrivate  {constructor(config?: properties);
}
export class CameraManagerClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class CameraManagerPrivate  {constructor(config?: properties);
}
export class CameraPrivate  {constructor(config?: properties);
}
export class ContentClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly has_painting_content: unknown;
readonly _padding_dummy: object[];
}
export class ContentPrivate  {constructor(config?: properties);
}
export class CropClass  {constructor(config?: properties);
readonly parent_class: ContentClass;
readonly _padding_dummy: object[];
}
export class CropPrivate  {constructor(config?: properties);
}
export class Frame  {constructor(config?: properties);
resolution: VideoResolution;
pipeline: unknown;
}
export class Overlay  {constructor(config?: properties);
position: Box;
pipeline: unknown;
}
export class Overlays  {constructor(config?: properties);
overlays: object[];
}
export class PlaybackClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly should_buffer: unknown;
}
export class PlaybackPrivate  {constructor(config?: properties);
}
export class PlayerIface  {constructor(config?: properties);
readonly base_iface: GObject.TypeInterface;
readonly priv: PlayerIfacePrivate;
readonly get_frame: unknown;
readonly get_pipeline: unknown;
readonly get_video_sink: unknown;
readonly get_idle: unknown;
readonly get_audio_volume: unknown;
readonly set_audio_volume: unknown;
readonly get_playing: unknown;
readonly set_playing: unknown;
readonly _padding_vfuncs: object[];
readonly new_frame: unknown;
readonly ready: unknown;
readonly eos: unknown;
readonly error: unknown;
readonly size_change: unknown;
readonly _padding_signals: object[];
}
export class PlayerIfacePrivate  {constructor(config?: properties);
}
export class VideoResolution  {constructor(config?: properties);
width: number;
height: number;
par_n: number;
par_d: number;
}
export class VideoSinkClass  {constructor(config?: properties);
readonly parent_class: GstVideo.VideoSinkClass;
readonly new_frame: unknown;
readonly pipeline_ready: unknown;
readonly new_overlays: unknown;
readonly _padding_dummy: object[];
}
export class VideoSinkPrivate  {constructor(config?: properties);
}
export interface Player  {
audio_volume: number;
readonly idle: boolean;
playing: boolean;
get_audio_volume(): number;
get_frame(): Frame;
get_idle(): boolean;
get_pipeline(): Gst.Element;
get_playing(): boolean;
get_video_sink(): VideoSink;
set_audio_volume(volume: number): void;
set_playing(playing: boolean): void;
}