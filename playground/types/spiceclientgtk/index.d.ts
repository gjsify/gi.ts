
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as SpiceClientGLib from "spiceclientglib";
import * as SpiceClientGtk from "spiceclientgtk";
import * as GdkPixbuf from "gdkpixbuf";
/**
 * spiceclientgtk.d.ts
 */
type properties = { [key: string]: any };
export enum DisplayKeyEvent {
    PRESS = 1,
    RELEASE = 2,
    CLICK = 3,
}
export class Display extends Gtk.EventBox {constructor(config?: properties);
channel_id: number;
disable_inputs: boolean;
grab_keyboard: boolean;
grab_mouse: boolean;
keypress_delay: number;
monitor_id: number;
only_downscale: boolean;
readonly ready: boolean;
resize_guest: boolean;
scaling: boolean;
session: SpiceClientGLib.Session;
zoom_level: number;static new_with_monitor(session: SpiceClientGLib.Session, channel_id: number, monitor_id: number): Display;
get_grab_keys(): GrabSequence;
get_pixbuf(): GdkPixbuf.Pixbuf;
mouse_ungrab(): void;
send_keys(keyvals: number[], nkeyvals: number, kind: DisplayKeyEvent): void;
set_grab_keys(seq: GrabSequence): void;
}
export class GtkSession  {constructor(config?: properties);
auto_clipboard: boolean;
auto_usbredir: boolean;
readonly pointer_grabbed: boolean;
session: SpiceClientGLib.Session;
sync_modifiers: boolean;
copy_to_guest(): void;
paste_from_guest(): void;
static get(session: SpiceClientGLib.Session): GtkSession;
}
export class UsbDeviceWidget extends Gtk.Box {constructor(config?: properties);
device_format_string: string;
session: SpiceClientGLib.Session;
}
export class DisplayClass  {constructor(config?: properties);
}
export class GrabSequence  {constructor(config?: properties);
static new_from_string(str: string): GrabSequence;
as_string(): string;
copy(): GrabSequence;
free(): void;
}
export class GtkSessionClass  {constructor(config?: properties);
}
export class UsbDeviceWidgetClass  {constructor(config?: properties);
}
export class UsbDeviceWidgetPrivate  {constructor(config?: properties);
}