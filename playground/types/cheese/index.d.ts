
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Clutter from "clutter";
import * as GdkPixbuf from "gdkpixbuf";
import * as Gst from "gst";
import * as Cheese from "cheese";
/**
 * cheese.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const PHOTO_NAME_SUFFIX: string;
export const VIDEO_NAME_SUFFIX: string;
export enum CameraError {
    UNKNOWN = 0,
    ELEMENT_NOT_FOUND = 1,
    NO_DEVICE = 2,
}
export enum MediaMode {
    PHOTO = 0,
    VIDEO = 1,
    BURST = 2,
}
export class Camera extends GObject.Object {
    constructor(config?: properties);
    device: CameraDevice;
    format: VideoFormat;
    readonly num_camera_devices: number;
    video_texture: object;
    connect_effect_texture(effect: Effect, texture: Clutter.Actor): void;
    get_balance_property_range(property: string): [boolean, number,number,number];
    get_camera_devices(): CameraDevice[];
    get_current_video_format(): VideoFormat;
    get_recorded_time(): string;
    get_selected_device(): CameraDevice;
    get_video_formats(): GLib.List;
    play(): void;
    set_balance_property(property: string, value: number): void;
    set_device(device: CameraDevice): void;
    set_effect(effect: Effect): void;
    set_video_format(format: VideoFormat): void;
    setup(device: CameraDevice | null): void;
    start_video_recording(filename: string): void;
    stop(): void;
    stop_video_recording(): void;
    switch_camera_device(): void;
    take_photo(filename: string): boolean;
    take_photo_pixbuf(): boolean;
    toggle_effects_pipeline(active: boolean): void;
    vfunc_photo_saved(): void;
    vfunc_photo_taken(pixbuf: GdkPixbuf.Pixbuf): void;
    vfunc_state_flags_changed(new_state: Gst.State): void;
    vfunc_video_saved(): void;
}
export class CameraDevice extends GObject.Object {
    constructor(config?: properties);
    device: Gst.Device;
    name: string;
    get_best_format(): VideoFormat;
    get_caps_for_format(format: VideoFormat): Gst.Caps;
    get_format_list(): GLib.List;
    get_name(): string;
    get_src(): Gst.Element;
}
export class CameraDeviceMonitor extends GObject.Object {
    constructor(config?: properties);
    static new_finish(result: Gio.AsyncResult): CameraDeviceMonitor;
    coldplug(): void;
    vfunc_added(device: CameraDevice): void;
    vfunc_removed(device: CameraDevice): void;
    static new_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class Effect extends GObject.Object {
    constructor(config?: properties);
    control_valve: Gst.Element;
    name: string;
    pipeline_desc: string;
    disable_preview(): void;
    enable_preview(): void;
    get_name(): string;
    get_pipeline_desc(): string;
    is_preview_connected(): boolean;
    static load_effects(): GLib.List;
    static load_from_file(filename: string): Effect;
}
export class FileUtil extends GObject.Object {
    constructor(config?: properties);
    get_new_media_filename(mode: MediaMode): string;
    get_photo_path(): string;
    get_video_path(): string;
    reset_burst(): void;
}
export class CameraDeviceMonitorPrivate  {
    constructor(config?: properties);
}
export class CameraPrivate  {
    constructor(config?: properties);
}
export class VideoFormat  {
    constructor(config?: properties);
    width: number;
    height: number;
}