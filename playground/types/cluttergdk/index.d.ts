
/**
 * cluttergdk
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Clutter from "clutter";
import * as Gdk from "gdk";
/**
 * 
 */
type properties = { [key: string]: any };
type GType = object;
/**
 * Disable the event retrieval in Clutter.
 * Callers of this function have to set up an event filter using the
 * GDK API, and call clutter_gdk_handle_event().
 * This function should only be used when embedding Clutter into
 * a GDK based toolkit.
 */
export function disable_event_retrieval(): void;
/**
 * Retrieves the pointer to the default display.
 */
export function get_default_display(): Gdk.Display;
/**
 * Gets the stage for a particular X window.
 */
export function get_stage_from_window(window: Gdk.Window): Clutter.Stage;
/**
 * Gets the stages GdkWindow.
 */
export function get_stage_window(stage: Clutter.Stage): Gdk.Window;
/**
 * Retrieves the #GdkVisual used by Clutter.
 * This function should be used when embedding Clutter inside GDK-based
 * foreign toolkits, to ensure that the visual applied to the #GdkWindow
 * used to render the #ClutterStage is the correct one.
 */
export function get_visual(): Gdk.Visual;
/**
 * This function processes a single GDK event; it can be used to hook
 * into external event processing
 */
export function handle_event(event: Gdk.Event): Gdk.FilterReturn;
/**
 * Sets the display connection Clutter should use; must be called
 * before clutter_init(), clutter_init_with_args() or other functions
 * pertaining Clutter's initialization process.
 * If you are parsing the command line arguments by retrieving Clutter's
 * #GOptionGroup with clutter_get_option_group() and calling
 * g_option_context_parse() yourself, you should also call
 * clutter_gdk_set_display() before g_option_context_parse().
 */
export function set_display(display: Gdk.Display): void;
/**
 * Target the #ClutterStage to use an existing external #GdkWindow
 */
export function set_stage_foreign(stage: Clutter.Stage, window: Gdk.Window): boolean;