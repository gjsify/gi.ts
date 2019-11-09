
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gdk from "gdk";
import * as GdkPixbuf from "gdkpixbuf";
import * as Pango from "pango";
import * as cairo from "cairo";
import * as xlib from "xlib";
import * as GdkX11 from "gdkx11";
/**
 * gdkx11.d.ts
 */
type properties = { [key: string]: any };
/**
 * Converts from a #GdkAtom to the X atom for the default GDK display
 * with the same string value.
 */
export function x11_atom_to_xatom(atom: Gdk.Atom): xlib.Atom;
/**
 * Converts from a #GdkAtom to the X atom for a #GdkDisplay
 * with the same string value. The special value %GDK_NONE
 * is converted to %None.
 */
export function x11_atom_to_xatom_for_display(display: X11Display, atom: Gdk.Atom): xlib.Atom;
/**
 * Returns the device ID as seen by XInput2.
 * > If gdk_disable_multidevice() has been called, this function
 * > will respectively return 2/3 for the core pointer and keyboard,
 * > (matching the IDs for the Virtual Core Pointer and Keyboard in
 * > XInput 2), but calling this function on any slave devices (i.e.
 * > those managed via XInput 1.x), will return 0.
 */
export function x11_device_get_id(device: X11DeviceCore): number;
/**
 * Returns the #GdkDevice that wraps the given device ID.
 */
export function x11_device_manager_lookup(device_manager: X11DeviceManagerCore, device_id: number): X11DeviceCore | null;
/**
 * Frees the data returned from gdk_x11_display_string_to_compound_text()
 * .
 */
export function x11_free_compound_text(ctext: number): void;
/**
 * Frees the array of strings created by
 * gdk_x11_display_text_property_to_text_list().
 */
export function x11_free_text_list(list: string): void;
/**
 * Gets the root window of the default screen
 * (see gdk_x11_get_default_screen()).
 */
export function x11_get_default_root_xwindow(): xlib.Window;
/**
 * Gets the default GTK+ screen number.
 */
export function x11_get_default_screen(): number;
/**
 * Gets the default GTK+ display.
 */
export function x11_get_default_xdisplay(): xlib.Display;
/**
 * Used with gdk_window_set_background_pattern() to inherit background fr
 * om
 * parent window. Useful for imitating transparency when compositing is n
 * ot
 * available. Otherwise behaves like a transparent pattern.
 */
export function x11_get_parent_relative_pattern(): cairo.Pattern;
/**
 * Routine to get the current X server time stamp.
 */
export function x11_get_server_time(window: X11Window): number;
/**
 * Returns the X atom for GDK’s default display corresponding to @atom_na
 * me.
 * This function caches the result, so if called repeatedly it is much
 * faster than XInternAtom(), which is a round trip to the server each ti
 * me.
 */
export function x11_get_xatom_by_name(atom_name: string): xlib.Atom;
/**
 * Returns the X atom for a #GdkDisplay corresponding to @atom_name.
 * This function caches the result, so if called repeatedly it is much
 * faster than XInternAtom(), which is a round trip to the server each ti
 * me.
 */
export function x11_get_xatom_by_name_for_display(display: X11Display, atom_name: string): xlib.Atom;
/**
 * Returns the name of an X atom for GDK’s default display. This
 * function is meant mainly for debugging, so for convenience, unlike
 * XAtomName() and gdk_atom_name(), the result
 * doesn’t need to be freed. Also, this function will never return %NULL,
 * even if @xatom is invalid.
 */
export function x11_get_xatom_name(xatom: xlib.Atom): string;
/**
 * Returns the name of an X atom for its display. This
 * function is meant mainly for debugging, so for convenience, unlike
 * XAtomName() and gdk_atom_name(), the result doesn’t need to
 * be freed.
 */
export function x11_get_xatom_name_for_display(display: X11Display, xatom: xlib.Atom): string;
/**
 * Call gdk_x11_display_grab() on the default display.
 * To ungrab the server again, use gdk_x11_ungrab_server().
 * gdk_x11_grab_server()/gdk_x11_ungrab_server() calls can be nested.
 */
export function x11_grab_server(): void;
/**
 * Find the #GdkDisplay corresponding to @xdisplay, if any exists.
 */
export function x11_lookup_xdisplay(xdisplay: xlib.Display): X11Display;
/**
 * Registers interest in receiving extension events with type codes
 * between @event_base and `event_base + n_events - 1`.
 * The registered events must have the window field in the same place
 * as core X events (this is not the case for e.g. XKB extension events).
 * If an event type is registered, events of this type will go through
 * global and window-specific filters (see gdk_window_add_filter()).
 * Unregistered events will only go through global filters.
 * GDK may register the events of some X extensions on its own.
 * This function should only be needed in unusual circumstances, e.g.
 * when filtering XInput extension events on the root window.
 */
export function x11_register_standard_event_type(display: X11Display, event_base: number, n_events: number): void;
/**
 * Sets the `SM_CLIENT_ID` property on the application’s leader window so
 *  that
 * the window manager can save the application’s state using the X11R6 IC
 * CCM
 * session management protocol.
 * See the X Session Management Library documentation for more informatio
 * n on
 * session management and the Inter-Client Communication Conventions Manu
 * al
 */
export function x11_set_sm_client_id(sm_client_id: string | null): void;
/**
 * Ungrab the default display after it has been grabbed with
 * gdk_x11_grab_server().
 */
export function x11_ungrab_server(): void;
/**
 * Convert from an X atom for the default display to the corresponding
 * #GdkAtom.
 */
export function x11_xatom_to_atom(xatom: xlib.Atom): Gdk.Atom;
/**
 * Convert from an X atom for a #GdkDisplay to the corresponding
 * #GdkAtom.
 */
export function x11_xatom_to_atom_for_display(display: X11Display, xatom: xlib.Atom): Gdk.Atom;
export class X11AppLaunchContext  {constructor(config?: properties);
}
export class X11Cursor  {constructor(config?: properties);
get_xcursor(): xlib.Cursor;
get_xdisplay(): xlib.Display;
}
export class X11DeviceCore  {constructor(config?: properties);
}
export class X11DeviceManagerCore  {constructor(config?: properties);
}
export class X11DeviceManagerXI2  {constructor(config?: properties);
major: number;
minor: number;
opcode: number;
}
export class X11DeviceXI2  {constructor(config?: properties);
device_id: number;
}
export class X11Display  {constructor(config?: properties);
broadcast_startup_message(message_type: string, ___: unknown[]): void;
error_trap_pop(): number;
error_trap_pop_ignored(): void;
error_trap_push(): void;
get_startup_notification_id(): string;
get_user_time(): number;
get_xdisplay(): xlib.Display;
grab(): void;
set_cursor_theme(theme: string | null, size: number): void;
set_startup_notification_id(startup_id: string): void;
set_window_scale(scale: number): void;
string_to_compound_text(str: string): [number, Gdk.Atom,number,number[],number];
text_property_to_text_list(encoding: Gdk.Atom, format: number, text: number, length: number, list: string): number;
ungrab(): void;
utf8_to_compound_text(str: string): [boolean, Gdk.Atom,number,number[],number];
static get_glx_version(display: Gdk.Display): [boolean, number,number];
}
export class X11DisplayManager  {constructor(config?: properties);
}
export class X11DragContext  {constructor(config?: properties);
}
export class X11GLContext  {constructor(config?: properties);
}
export class X11Keymap  {constructor(config?: properties);
get_group_for_state(state: number): number;
key_is_modifier(keycode: number): boolean;
}
export class X11Monitor  {constructor(config?: properties);
static get_output(monitor: Gdk.Monitor): xlib.XID;
}
export class X11Screen  {constructor(config?: properties);
get_current_desktop(): number;
get_monitor_output(monitor_num: number): xlib.XID;
get_number_of_desktops(): number;
get_screen_number(): number;
get_window_manager_name(): string;
get_xscreen(): xlib.Screen;
lookup_visual(xvisualid: xlib.VisualID): X11Visual;
supports_net_wm_hint(property: Gdk.Atom): boolean;
}
export class X11Visual  {constructor(config?: properties);
get_xvisual(): xlib.Visual;
}
export class X11Window extends Gdk.Window {constructor(config?: properties);
static foreign_new_for_display(display: X11Display, window: xlib.Window): Gdk.Window;
get_desktop(): number;
get_xid(): xlib.Window;
move_to_current_desktop(): void;
move_to_desktop(desktop: number): void;
set_frame_extents(left: number, right: number, top: number, bottom: number): void;
set_frame_sync_enabled(frame_sync_enabled: boolean): void;
set_hide_titlebar_when_maximized(hide_titlebar_when_maximized: boolean): void;
set_theme_variant(variant: string): void;
set_user_time(timestamp: number): void;
set_utf8_property(name: string, value: string | null): void;
static lookup_for_display(display: X11Display, window: xlib.Window): X11Window;
}
export class X11AppLaunchContextClass  {constructor(config?: properties);
}
export class X11CursorClass  {constructor(config?: properties);
}
export class X11DeviceCoreClass  {constructor(config?: properties);
}
export class X11DeviceManagerCoreClass  {constructor(config?: properties);
}
export class X11DeviceManagerXI2Class  {constructor(config?: properties);
}
export class X11DeviceXI2Class  {constructor(config?: properties);
}
export class X11DisplayClass  {constructor(config?: properties);
}
export class X11DisplayManagerClass  {constructor(config?: properties);
}
export class X11DragContextClass  {constructor(config?: properties);
}
export class X11GLContextClass  {constructor(config?: properties);
}
export class X11KeymapClass  {constructor(config?: properties);
}
export class X11MonitorClass  {constructor(config?: properties);
}
export class X11ScreenClass  {constructor(config?: properties);
}
export class X11VisualClass  {constructor(config?: properties);
}
export class X11WindowClass  {constructor(config?: properties);
}