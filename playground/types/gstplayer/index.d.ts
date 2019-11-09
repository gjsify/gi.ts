
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gst from "gst";
import * as GstAudio from "gstaudio";
import * as GstBase from "gstbase";
import * as GstPbutils from "gstpbutils";
import * as GstTag from "gsttag";
import * as GstVideo from "gstvideo";
import * as GstPlayer from "gstplayer";
/**
 * gstplayer.d.ts
 */
type properties = { [key: string]: any };
export type PlayerSignalDispatcherFunc = (data: object | null) => void;
/**
 * Gets a string representing the given color balance type.
 */
export function player_color_balance_type_get_name(type: PlayerColorBalanceType): string;
/**
 * Gets a string representing the given error.
 */
export function player_error_get_name(error: PlayerError): string;
/**
 * 
 */
export function player_error_quark(): GLib.Quark;
/**
 * Gets a string representing the given state.
 */
export function player_state_get_name(state: PlayerState): string;
export enum PlayerColorBalanceType {
    HUE = 3,
    BRIGHTNESS = 0,
    SATURATION = 2,
    CONTRAST = 1,
}
export enum PlayerError {
    FAILED = 0,
}
export enum PlayerSnapshotFormat {
    RAW_NATIVE = 0,
    RAW_XRGB = 1,
    RAW_BGRX = 2,
    JPG = 3,
    PNG = 4,
}
export enum PlayerState {
    STOPPED = 0,
    BUFFERING = 1,
    PAUSED = 2,
    PLAYING = 3,
}
export class Player extends Gst.Object {constructor(config?: properties);
audio_video_offset: number;
readonly current_audio_track: PlayerAudioInfo;
readonly current_subtitle_track: PlayerSubtitleInfo;
readonly current_video_track: PlayerVideoInfo;
readonly duration: number;
readonly media_info: PlayerMediaInfo;
mute: boolean;
readonly pipeline: Gst.Element;
readonly position: number;
rate: number;
signal_dispatcher: PlayerSignalDispatcher;
subtitle_video_offset: number;
suburi: string;
uri: string;
video_multiview_flags: GstVideo.VideoMultiviewFlags;
video_multiview_mode: GstVideo.VideoMultiviewFramePacking;
video_renderer: PlayerVideoRenderer;
volume: number;
get_audio_video_offset(): number;
get_color_balance(type: PlayerColorBalanceType): number;
get_config(): Gst.Structure;
get_current_audio_track(): PlayerAudioInfo;
get_current_subtitle_track(): PlayerSubtitleInfo;
get_current_video_track(): PlayerVideoInfo;
get_current_visualization(): string;
get_duration(): Gst.ClockTime;
get_media_info(): PlayerMediaInfo;
get_multiview_flags(): GstVideo.VideoMultiviewFlags;
get_multiview_mode(): GstVideo.VideoMultiviewFramePacking;
get_mute(): boolean;
get_pipeline(): Gst.Element;
get_position(): Gst.ClockTime;
get_rate(): number;
get_subtitle_uri(): string;
get_subtitle_video_offset(): number;
get_uri(): string;
get_video_snapshot(format: PlayerSnapshotFormat, config: Gst.Structure | null): Gst.Sample;
get_volume(): number;
has_color_balance(): boolean;
pause(): void;
play(): void;
seek(position: Gst.ClockTime): void;
set_audio_track(stream_index: number): boolean;
set_audio_track_enabled(enabled: boolean): void;
set_audio_video_offset(offset: number): void;
set_color_balance(type: PlayerColorBalanceType, value: number): void;
set_config(config: Gst.Structure): boolean;
set_multiview_flags(flags: GstVideo.VideoMultiviewFlags): void;
set_multiview_mode(mode: GstVideo.VideoMultiviewFramePacking): void;
set_mute(val: boolean): void;
set_rate(rate: number): void;
set_subtitle_track(stream_index: number): boolean;
set_subtitle_track_enabled(enabled: boolean): void;
set_subtitle_uri(uri: string): void;
set_subtitle_video_offset(offset: number): void;
set_uri(uri: string): void;
set_video_track(stream_index: number): boolean;
set_video_track_enabled(enabled: boolean): void;
set_visualization(name: string): boolean;
set_visualization_enabled(enabled: boolean): void;
set_volume(val: number): void;
stop(): void;
static config_get_position_update_interval(config: Gst.Structure): number;
static config_get_seek_accurate(config: Gst.Structure): boolean;
static config_get_user_agent(config: Gst.Structure): string;
static config_set_position_update_interval(config: Gst.Structure, interval: number): void;
static config_set_seek_accurate(config: Gst.Structure, accurate: boolean): void;
static config_set_user_agent(config: Gst.Structure, agent: string): void;
static get_audio_streams(info: PlayerMediaInfo): GLib.List;
static get_subtitle_streams(info: PlayerMediaInfo): GLib.List;
static get_video_streams(info: PlayerMediaInfo): GLib.List;
static visualizations_free(viss: PlayerVisualization): void;
static visualizations_get(): PlayerVisualization[];
}
export class PlayerAudioInfo  {constructor(config?: properties);
get_bitrate(): number;
get_channels(): number;
get_language(): string;
get_max_bitrate(): number;
get_sample_rate(): number;
}
export class PlayerGMainContextSignalDispatcher  {constructor(config?: properties);
application_context: GLib.MainContext;
static _new(application_context: GLib.MainContext | null): PlayerSignalDispatcher;
}
export class PlayerMediaInfo  {constructor(config?: properties);
get_audio_streams(): GLib.List;
get_container_format(): string;
get_duration(): Gst.ClockTime;
get_image_sample(): Gst.Sample;
get_number_of_audio_streams(): number;
get_number_of_streams(): number;
get_number_of_subtitle_streams(): number;
get_number_of_video_streams(): number;
get_stream_list(): GLib.List;
get_subtitle_streams(): GLib.List;
get_tags(): Gst.TagList;
get_title(): string;
get_uri(): string;
get_video_streams(): GLib.List;
is_live(): boolean;
is_seekable(): boolean;
}
export class PlayerStreamInfo  {constructor(config?: properties);
get_caps(): Gst.Caps;
get_codec(): string;
get_index(): number;
get_stream_type(): string;
get_tags(): Gst.TagList;
}
export class PlayerSubtitleInfo  {constructor(config?: properties);
get_language(): string;
}
export class PlayerVideoInfo  {constructor(config?: properties);
get_bitrate(): number;
get_framerate(): [number,number];
get_height(): number;
get_max_bitrate(): number;
get_pixel_aspect_ratio(): [number,number];
get_width(): number;
}
export class PlayerVideoOverlayVideoRenderer  {constructor(config?: properties);
video_sink: Gst.Element;
window_handle: object;
expose(): void;
get_render_rectangle(): [number | null,number | null,number | null,number | null];
get_window_handle(): object | null;
set_render_rectangle(x: number, y: number, width: number, height: number): void;
set_window_handle(window_handle: object | null): void;
static _new(window_handle: object | null): PlayerVideoRenderer;
static new_with_sink(window_handle: object | null, video_sink: Gst.Element): PlayerVideoRenderer;
}
export class PlayerAudioInfoClass  {constructor(config?: properties);
}
export class PlayerClass  {constructor(config?: properties);
}
export class PlayerGMainContextSignalDispatcherClass  {constructor(config?: properties);
}
export class PlayerMediaInfoClass  {constructor(config?: properties);
}
export class PlayerSignalDispatcherInterface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly dispatch: unknown;
}
export class PlayerStreamInfoClass  {constructor(config?: properties);
}
export class PlayerSubtitleInfoClass  {constructor(config?: properties);
}
export class PlayerVideoInfoClass  {constructor(config?: properties);
}
export class PlayerVideoOverlayVideoRendererClass  {constructor(config?: properties);
}
export class PlayerVideoRendererInterface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly create_video_sink: unknown;
}
export class PlayerVisualization  {constructor(config?: properties);
name: string;
description: string;
copy(): PlayerVisualization;
free(): void;
}
export interface PlayerSignalDispatcher  {
}
export interface PlayerVideoRenderer  {
}