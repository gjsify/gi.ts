
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Clutter from "clutter";
import * as Gtk from "gtk";
import * as GdkPixbuf from "gdkpixbuf";
/**
 * gtkclutter.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
/**
 * This function should be called instead of clutter_init() and
 * gtk_init().
 */
export function init(argc: number | null, argv: string[] | null): [Clutter.InitError, number | null,string[] | null];
/**
 * This function should be called instead of clutter_init() and
 * gtk_init_with_args().
 */
export function init_with_args(argc: number | null, argv: string[] | null, parameter_string: string | null, entries: GLib.OptionEntry[] | null, translation_domain: string | null): [Clutter.InitError, number | null,string[] | null];
export enum TextureError {
    TEXTURE_ERROR_INVALID_STOCK_ID = 0,
}
export class Actor extends Clutter.Actor {
    constructor(config?: properties);
    contents: Gtk.Widget;static new_with_contents(contents: Gtk.Widget): Clutter.Actor;
    get_contents(): Gtk.Widget;
    get_widget(): Gtk.Widget;
}
export class Embed extends Gtk.Container {
    constructor(config?: properties);
    use_layout_size: boolean;
    get_stage(): Clutter.Actor;
    get_use_layout_size(): boolean;
    set_use_layout_size(use_layout_size: boolean): void;
}
export class Texture extends Clutter.Texture {
    constructor(config?: properties);
    set_from_icon_name(widget: Gtk.Widget | null, icon_name: string, icon_size: Gtk.IconSize): boolean;
    set_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): boolean;
    set_from_stock(widget: Gtk.Widget, stock_id: string, icon_size: Gtk.IconSize): boolean;
    static error_quark(): GLib.Quark;
}
export class Window extends Gtk.Window {
    constructor(config?: properties);
    get_stage(): Clutter.Actor;
}
export class ActorPrivate  {
    constructor(config?: properties);
}
export class EmbedPrivate  {
    constructor(config?: properties);
}
export class WindowPrivate  {
    constructor(config?: properties);
}