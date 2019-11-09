
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Colord from "colord";
import * as Gtk from "gtk";
/**
 * colordgtk.d.ts
 */
type properties = { [key: string]: any };
export const GTK_MAJOR_VERSION: number;
export const GTK_MICRO_VERSION: number;
export const GTK_MINOR_VERSION: number;
export enum WindowError {
    FAILED = 0,
    LAST = 1,
}
export class SampleWidget extends Gtk.DrawingArea {constructor(config?: properties);
color: Colord.ColorRGB;
set_color(color: Colord.ColorRGB): void;
}
export class SampleWindow extends Gtk.Window {constructor(config?: properties);
set_color(color: Colord.ColorRGB): void;
set_fraction(fraction: number): void;
}
export class Window extends GObject.Object {constructor(config?: properties);
readonly Profile: string;
get_last_profile(): Colord.Profile;
get_profile(widget: Gtk.Widget, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
get_profile_finish(res: Gio.AsyncResult): Colord.Profile;
get_profile_sync(widget: Gtk.Widget, cancellable: Gio.Cancellable | null): Colord.Profile;
vfunc_changed(profile: Colord.Profile): void;
static error_quark(): GLib.Quark;
}
export class SampleWidgetClass  {constructor(config?: properties);
readonly parent_class: Gtk.DrawingAreaClass;
}
export class SampleWidgetPrivate  {constructor(config?: properties);
}
export class SampleWindowClass  {constructor(config?: properties);
readonly parent_class: Gtk.WindowClass;
}
export class SampleWindowPrivate  {constructor(config?: properties);
}
export class WindowClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly changed: unknown;
readonly _cd_window_reserved1: unknown;
readonly _cd_window_reserved2: unknown;
readonly _cd_window_reserved3: unknown;
readonly _cd_window_reserved4: unknown;
readonly _cd_window_reserved5: unknown;
readonly _cd_window_reserved6: unknown;
readonly _cd_window_reserved7: unknown;
readonly _cd_window_reserved8: unknown;
}
export class WindowPrivate  {constructor(config?: properties);
}