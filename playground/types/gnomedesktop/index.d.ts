
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GDesktopEnums from "gdesktopenums";
import * as Gtk from "gtk";
import * as GnomeDesktop from "gnomedesktop";
import * as GdkPixbuf from "gdkpixbuf";
import * as Gdk from "gdk";
import * as cairo from "cairo";
/**
 * gnomedesktop.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type IdleMonitorWatchFunc = (monitor: IdleMonitor, id: number, user_data: object | null) => void;
export const RR_CONNECTOR_TYPE_PANEL: string;
/**
 * Returns whether the thumbnail has the correct uri and mtime embedded i
 * n the
 * png options. This function is threadsafe and does no blocking I/O.
 */
export function desktop_thumbnail_is_valid(pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: number): boolean;
/**
 * Returns the filename that a thumbnail of size @size for @uri would hav
 * e.
 * This function is threadsafe and does no blocking I/O.
 */
export function desktop_thumbnail_path_for_uri(uri: string, size: DesktopThumbnailSize): string;
/**
 * Gets all locales.
 */
export function get_all_locales(): string[];
/**
 * Gets the country name for @code. If @translation is provided the
 * returned string is translated accordingly.
 */
export function get_country_from_code(code: string, translation: string | null): string;
/**
 * Gets the country description for @locale. If @translation is
 * provided the returned string is translated accordingly.
 */
export function get_country_from_locale(locale: string, translation: string | null): string;
/**
 * Gets the default input source's type and identifier for a given
 * locale.
 */
export function get_input_source_from_locale(locale: string): [boolean, string,string];
/**
 * Gets the language name for @code. If @translation is provided the
 * returned string is translated accordingly.
 */
export function get_language_from_code(code: string, translation: string | null): string;
/**
 * Gets the language description for @locale. If @translation is
 * provided the returned string is translated accordingly.
 */
export function get_language_from_locale(locale: string, translation: string | null): string;
/**
 * Gets a translation of the raw @modifier string. If @translation
 * is provided the returned string is translated accordingly.
 */
export function get_translated_modifier(modifier: string, translation: string | null): string;
/**
 * Returns %TRUE if there are translations for language @code.
 */
export function language_has_translations(code: string): boolean;
/**
 * Gets the normalized locale string in the form
 * [language[_country][.codeset][@modifier]] for @name.
 */
export function normalize_locale(locale: string): string;
/**
 * Extracts the various components of a locale string of the form
 * [language[_country][.codeset][@modifier]]. See
 * http://en.wikipedia.org/wiki/Locale.
 */
export function parse_locale(locale: string): [boolean, string | null,string | null,string | null,string | null];
/**
 * Returns the #GQuark that will be used for #GError values returned by t
 * he
 * GnomeRR API.
 */
export function rr_error_quark(): GLib.Quark;
export enum DesktopThumbnailSize {
    NORMAL = 0,
    LARGE = 1,
}
export enum RRDpmsMode {
    ON = 0,
    STANDBY = 1,
    SUSPEND = 2,
    OFF = 3,
    UNKNOWN = 4,
}
export enum RRDpmsModeType {
    ON = 0,
    STANDBY = 1,
    SUSPEND = 2,
    OFF = 3,
    UNKNOWN = 4,
}
export enum RRError {
    UNKNOWN = 0,
    NO_RANDR_EXTENSION = 1,
    RANDR_ERROR = 2,
    BOUNDS_ERROR = 3,
    CRTC_ASSIGNMENT = 4,
    NO_MATCHING_CONFIG = 5,
    NO_DPMS_EXTENSION = 6,
}
export enum RRRotation {
    ROTATION_NEXT = 0,
    ROTATION_0 = 1,
    ROTATION_90 = 2,
    ROTATION_180 = 4,
    ROTATION_270 = 8,
    REFLECT_X = 16,
    REFLECT_Y = 32,
}
export class BG extends GObject.Object {
    constructor(config?: properties);
    changes_with_time(): boolean;
    create_frame_thumbnail(factory: DesktopThumbnailFactory, screen: Gdk.Screen, dest_width: number, dest_height: number, frame_num: number): GdkPixbuf.Pixbuf;
    create_surface(window: Gdk.Window, width: number, height: number, root: boolean): cairo.Surface;
    create_thumbnail(factory: DesktopThumbnailFactory, screen: Gdk.Screen, dest_width: number, dest_height: number): GdkPixbuf.Pixbuf;
    draw(dest: GdkPixbuf.Pixbuf, screen: Gdk.Screen, is_root: boolean): void;
    get_filename(): string;
    get_image_size(factory: DesktopThumbnailFactory, best_width: number, best_height: number, width: number, height: number): boolean;
    get_placement(): GDesktopEnums.BackgroundStyle;
    get_rgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void;
    has_multiple_sizes(): boolean;
    is_dark(dest_width: number, dest_height: number): boolean;
    load_from_preferences(settings: Gio.Settings): void;
    save_to_preferences(settings: Gio.Settings): void;
    set_filename(filename: string): void;
    set_placement(placement: GDesktopEnums.BackgroundStyle): void;
    set_rgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void;
    static get_surface_from_root(screen: Gdk.Screen): cairo.Surface;
    static set_surface_as_root(screen: Gdk.Screen, surface: cairo.Surface): void;
    static set_surface_as_root_with_crossfade(screen: Gdk.Screen, surface: cairo.Surface): BGCrossfade;
}
export class BGCrossfade extends GObject.Object {
    constructor(config?: properties);
    height: number;
    width: number;
    is_started(): boolean;
    set_end_surface(surface: cairo.Surface): boolean;
    set_start_surface(surface: cairo.Surface): boolean;
    start(window: Gdk.Window): void;
    stop(): void;
    vfunc_finished(window: Gdk.Window): void;
}
export class BGSlideShow extends GObject.Object {
    constructor(config?: properties);
    file: Gio.File;
    readonly has_multiple_sizes: boolean;
    readonly start_time: number;
    readonly total_duration: number;
    get_current_slide(width: number, height: number): [number | null,number | null,boolean | null,string | null,string | null];
    get_has_multiple_sizes(): boolean;
    get_num_slides(): number;
    get_slide(frame_number: number, width: number, height: number): [boolean, number | null,number | null,boolean | null,string | null,string | null];
    get_start_time(): number;
    get_total_duration(): number;
    load(): boolean;
    load_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class DesktopThumbnailFactory extends GObject.Object {
    constructor(config?: properties);
    can_thumbnail(uri: string, mime_type: string, mtime: number): boolean;
    create_failed_thumbnail(uri: string, mtime: number): void;
    generate_thumbnail(uri: string, mime_type: string): GdkPixbuf.Pixbuf;
    has_valid_failed_thumbnail(uri: string, mtime: number): boolean;
    lookup(uri: string, mtime: number): string;
    save_thumbnail(thumbnail: GdkPixbuf.Pixbuf, uri: string, original_mtime: number): void;
}
export class IdleMonitor extends GObject.Object {
    constructor(config?: properties);
    device: Gdk.Device;static new_for_device(device: Gdk.Device): IdleMonitor;
    add_idle_watch(interval_msec: number, callback: IdleMonitorWatchFunc | null, user_data: object | null, notify: GLib.DestroyNotify): number;
    add_user_active_watch(callback: IdleMonitorWatchFunc | null, user_data: object | null, notify: GLib.DestroyNotify): number;
    get_idletime(): number;
    remove_watch(id: number): void;
}
export class PnpIds extends GObject.Object {
    constructor(config?: properties);
    get_pnp_id(pnp_id: string): string;
}
export class RRConfig extends GObject.Object {
    constructor(config?: properties);
    screen: RRScreen;static new_current(screen: RRScreen): RRConfig;
    applicable(screen: RRScreen): boolean;
    apply(screen: RRScreen): boolean;
    apply_persistent(screen: RRScreen): boolean;
    ensure_primary(): boolean;
    equal(config2: RRConfig): boolean;
    get_clone(): boolean;
    get_outputs(): RROutputInfo[];
    load_current(): boolean;
    match(config2: RRConfig): boolean;
    sanitize(): void;
    set_clone(clone: boolean): void;
}
export class RROutputInfo  {
    constructor(config?: properties);
    readonly priv: RROutputInfoPrivate;
    get_aspect_ratio(): number;
    get_display_name(): string;
    get_geometry(): [number | null,number | null,number | null,number | null];
    get_name(): string;
    get_preferred_height(): number;
    get_preferred_width(): number;
    get_primary(): boolean;
    get_product(): string;
    get_refresh_rate(): number;
    get_rotation(): RRRotation;
    get_serial(): string;
    get_underscanning(): boolean;
    get_vendor(): string;
    is_active(): boolean;
    is_connected(): boolean;
    is_primary_tile(): boolean;
    set_active(active: boolean): void;
    set_geometry(x: number, y: number, width: number, height: number): void;
    set_primary(primary: boolean): void;
    set_refresh_rate(rate: number): void;
    set_rotation(rotation: RRRotation): void;
    set_underscanning(underscanning: boolean): void;
    supports_rotation(rotation: RRRotation): boolean;
}
export class RRScreen extends GObject.Object {
    constructor(config?: properties);
    dpms_mode: RRDpmsModeType;
    gdk_screen: Gdk.Screen;static new_finish(result: Gio.AsyncResult): RRScreen;
    get_crtc_by_id(id: number): RRCrtc;
    get_dpms_mode(): [boolean, RRDpmsMode];
    get_output_by_id(id: number): RROutput;
    get_output_by_name(name: string): RROutput;
    get_ranges(): [number,number,number,number];
    list_clone_modes(): RRMode[];
    list_crtcs(): RRCrtc[];
    list_modes(): RRMode[];
    list_outputs(): RROutput[];
    refresh(): boolean;
    set_dpms_mode(mode: RRDpmsMode): boolean;
    vfunc_changed(): void;
    vfunc_output_connected(output: RROutput): void;
    vfunc_output_disconnected(output: RROutput): void;
    static new_async(screen: Gdk.Screen, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class WallClock extends GObject.Object {
    constructor(config?: properties);
    readonly clock: string;
    time_only: boolean;
    readonly timezone: GLib.TimeZone;
    get_clock(): string;
    get_timezone(): GLib.TimeZone;
    string_for_datetime(now: GLib.DateTime, clock_format: GDesktopEnums.ClockFormat, show_weekday: boolean, show_full_date: boolean, show_seconds: boolean): string;
}
export class XkbInfo extends GObject.Object {
    constructor(config?: properties);
    description_for_group(group_id: string): string;
    description_for_option(group_id: string, id: string): string;
    get_all_layouts(): GLib.List;
    get_all_option_groups(): GLib.List;
    get_languages_for_layout(layout_id: string): GLib.List;
    get_layout_info(id: string): [boolean, string | null,string | null,string | null,string | null];
    get_layouts_for_country(country_code: string): GLib.List;
    get_layouts_for_language(language_code: string): GLib.List;
    get_options_for_group(group_id: string): GLib.List;
}
export class BGCrossfadePrivate  {
    constructor(config?: properties);
}
export class BGSlideShowPrivate  {
    constructor(config?: properties);
}
export class DesktopThumbnailFactoryPrivate  {
    constructor(config?: properties);
}
export class IdleMonitorPrivate  {
    constructor(config?: properties);
}
export class PnpIdsPrivate  {
    constructor(config?: properties);
}
export class RRConfigPrivate  {
    constructor(config?: properties);
}
export class RRCrtc  {
    constructor(config?: properties);
    can_drive_output(output: RROutput): boolean;
    get_current_mode(): RRMode;
    get_current_rotation(): RRRotation;
    get_gamma(size: number): [boolean, number,number,number];
    get_id(): number;
    get_position(): [number | null,number | null];
    get_rotations(): RRRotation;
    set_gamma(size: number, red: number, green: number, blue: number): boolean;
    supports_rotation(rotation: RRRotation): boolean;
}
export class RRMode  {
    constructor(config?: properties);
    get_freq(): number;
    get_freq_f(): number;
    get_height(): number;
    get_id(): number;
    get_is_interlaced(): boolean;
    get_is_tiled(): boolean;
    get_width(): number;
}
export class RROutput  {
    constructor(config?: properties);
    can_clone(clone: RROutput): boolean;
    get_backlight(): number;
    get_crtc(): RRCrtc;
    get_current_mode(): RRMode;
    get_display_name(): string;
    get_edid_data(size: number): number;
    get_id(): number;
    get_ids_from_edid(): [string | null,string | null,string | null];
    get_is_primary(): boolean;
    get_is_underscanning(): boolean;
    get_min_backlight_step(): number;
    get_name(): string;
    get_physical_size(): [number | null,number | null];
    get_position(): [number | null,number | null];
    get_possible_crtcs(): RRCrtc[];
    get_preferred_mode(): RRMode;
    is_builtin_display(): boolean;
    list_modes(): RRMode[];
    set_backlight(value: number): boolean;
    supports_mode(mode: RRMode): boolean;
    supports_underscanning(): boolean;
}
export class RROutputInfoPrivate  {
    constructor(config?: properties);
}
export class RRScreenPrivate  {
    constructor(config?: properties);
}
export class WallClockPrivate  {
    constructor(config?: properties);
}
export class XkbInfoPrivate  {
    constructor(config?: properties);
}