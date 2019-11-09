
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Clutter from "clutter";
import * as xlib from "xlib";
import * as ClutterX11 from "clutterx11";
/**
 * clutterx11.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type FilterFunc = (xev: xlib.XEvent, cev: Clutter.Event, data: object | null) => FilterReturn;
/**
 * Disables the internal polling of X11 events in the main loop.
 * Libraries or applications calling this function will be responsible of
 * polling all X11 events.
 * You also must call clutter_x11_handle_event() to let Clutter process
 * events and maintain its internal state.
 * This function can only be called before calling clutter_init().
 * Even with event handling disabled, Clutter will still select
 * all the events required to maintain its internal state on the stage
 * Window; compositors using Clutter and input regions to pass events
 * through to application windows should not rely on an empty input
 * region, and should instead clear it themselves explicitly using the
 * XFixes extension.
 * This function should not be normally used by applications.
 */
export function disable_event_retrieval(): void;
/**
 * Enables the use of the XInput extension if present on connected
 * XServer and support built into Clutter. XInput allows for multiple
 * pointing devices to be used.
 * This function must be called before clutter_init().
 * Since XInput might not be supported by the X server, you might
 * want to use clutter_x11_has_xinput() to see if support was enabled.
 */
export function enable_xinput(): void;
/**
 * Retrieves the group for the modifiers set in @event
 */
export function event_get_key_group(event: Clutter.Event): number;
/**
 * Retrieves the touch detail froma #ClutterEventSequence.
 */
export function event_sequence_get_touch_detail(sequence: Clutter.EventSequence): number;
/**
 * Retrieves the pointer to the default display.
 */
export function get_default_display(): xlib.Display;
/**
 * Gets the number of the default X Screen object.
 */
export function get_default_screen(): number;
/**
 * Retrieves a pointer to the list of input devices
 */
export function get_input_devices(): string[];
/**
 * Gets the stage for a particular X window.
 */
export function get_stage_from_window(win: xlib.Window): Clutter.Stage;
/**
 * Retrieves whether the Clutter X11 backend is using ARGB visuals by def
 * ault
 */
export function get_use_argb_visual(): boolean;
/**
 * Retrieves whether the Clutter X11 backend will create stereo
 * stages if possible.
 */
export function get_use_stereo_stage(): boolean;
/**
 * This function processes a single X event; it can be used to hook
 * into external X11 event processing (for example, a GDK filter
 * function).
 * If clutter_x11_disable_event_retrieval() has been called, you must
 * let this function process events to update Clutter's internal state.
 */
export function handle_event(xevent: xlib.XEvent): FilterReturn;
/**
 * Retrieves whether Clutter is running on an X11 server with the
 * XComposite extension
 */
export function has_composite_extension(): boolean;
/**
 * Queries the X11 backend to check if event collection has been disabled
 * .
 */
export function has_event_retrieval(): boolean;
/**
 * Gets whether Clutter has XInput support.
 */
export function has_xinput(): boolean;
/**
 * Sets the display connection Clutter should use; must be called
 * before clutter_init(), clutter_init_with_args() or other functions
 * pertaining Clutter's initialization process.
 * If you are parsing the command line arguments by retrieving Clutter's
 * #GOptionGroup with clutter_get_option_group() and calling
 * g_option_context_parse() yourself, you should also call
 * clutter_x11_set_display() before g_option_context_parse().
 */
export function set_display(xdpy: xlib.Display): void;
/**
 * Target the #ClutterStage to use an existing external X Window
 */
export function set_stage_foreign(stage: Clutter.Stage, xwindow: xlib.Window): boolean;
/**
 * Sets whether the Clutter X11 backend should request ARGB visuals by de
 * fault
 * or not.
 * By default, Clutter requests RGB visuals.
 * If no ARGB visuals are found, the X11 backend will fall back to
 * requesting a RGB visual instead.
 * ARGB visuals are required for the #ClutterStage:use-alpha property to 
 * work.
 * This function can only be called once, and before clutter_init() is
 * called.
 */
export function set_use_argb_visual(use_argb: boolean): void;
/**
 * Sets whether the backend object for Clutter stages, will,
 * if possible, be created with the ability to support stereo drawing
 * (drawing separate images for the left and right eyes).
 * This function must be called before clutter_init() is called.
 * During paint callbacks, cogl_framebuffer_is_stereo() can be called
 * on the framebuffer retrieved by cogl_get_draw_framebuffer() to
 * determine if stereo support was successfully enabled, and
 * cogl_framebuffer_set_stereo_mode() to determine which buffers
 * will be drawn to.
 * Note that this function *does not* cause the stage to be drawn
 * multiple times with different perspective transformations and thus
 * appear in 3D, it simply enables individual ClutterActors to paint
 * different images for the left and and right eye.
 */
export function set_use_stereo_stage(use_stereo: boolean): void;
/**
 * Traps every X error until clutter_x11_untrap_x_errors() is called.
 */
export function trap_x_errors(): void;
/**
 * Removes the X error trap and returns the current status.
 */
export function untrap_x_errors(): number;
export enum FilterReturn {
    CONTINUE = 0,
    TRANSLATE = 1,
    REMOVE = 2,
}
export class TexturePixmap extends Clutter.Texture {
    constructor(config?: properties);
    automatic_updates: boolean;
    readonly destroyed: boolean;
    pixmap: number;
    readonly pixmap_depth: number;
    readonly pixmap_height: number;
    readonly pixmap_width: number;
    window: number;
    readonly window_mapped: boolean;
    readonly window_override_redirect: boolean;
    window_redirect_automatic: boolean;
    readonly window_x: number;
    readonly window_y: number;static new_with_pixmap(pixmap: xlib.Pixmap): Clutter.Actor;
    static new_with_window(window: xlib.Window): Clutter.Actor;
    set_automatic(setting: boolean): void;
    set_pixmap(pixmap: xlib.Pixmap): void;
    set_window(window: xlib.Window, automatic: boolean): void;
    sync_window(): void;
    update_area(x: number, y: number, width: number, height: number): void;
    vfunc_update_area(x: number, y: number, width: number, height: number): void;
}
export class TexturePixmapPrivate  {
    constructor(config?: properties);
}
export class XInputDevice  {
    constructor(config?: properties);
}