
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
/**
 * Returns a #GOptionGroup for the command line arguments recognized
 * by Clutter. You should add this group to your #GOptionContext with
 * g_option_context_add_group(), if you are using g_option_context_parse(
 * )
 * to parse your commandline arguments instead of using gtk_clutter_init(
 * )
 * or gtk_clutter_init_with_args().
 * You should add this option group to your #GOptionContext after
 * the GTK option group created with gtk_get_option_group(), and after
 * the clutter option group obtained from clutter_get_option_group_withou
 * t_init().
 * You should not use clutter_get_option_group() together with this funct
 * ion.
 * You must pass %TRUE to gtk_get_option_group() since gtk-clutter's opti
 * on
 * group relies on it.
 * Parsing options using g_option_context_parse() with a #GOptionContext
 * containing the returned #GOptionGroupwith will result in Clutter's and
 * GTK-Clutter's initialisation.  That is, the following code:
 * |[
 *   g_option_context_add_group (context, gtk_get_option_group (TRUE));
 *   g_option_context_add_group (context, cogl_get_option_group ());
 *   g_option_context_add_group (context, clutter_get_option_group_withou
 * t_init ());
 *   g_option_context_add_group (context, gtk_clutter_get_option_group ()
 * );
 *   res = g_option_context_parse (context, &amp;argc, &amp;argc, NULL);
 * ]|
 * is functionally equivalent to:
 * |[
 *   gtk_clutter_init (&amp;argc, &amp;argv);
 * ]|
 * After g_option_context_parse() on a #GOptionContext containing the
 * the returned #GOptionGroup has returned %TRUE, Clutter and GTK-Clutter
 *  are
 * guaranteed to be initialized.
 */
export function get_option_group(): GLib.OptionGroup;
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
export class Actor extends Clutter.Actor {constructor(config?: properties);
contents: Gtk.Widget;static new_with_contents(contents: Gtk.Widget): Clutter.Actor;
get_contents(): Gtk.Widget;
get_widget(): Gtk.Widget;
}
export class Embed extends Gtk.Container {constructor(config?: properties);
use_layout_size: boolean;
get_stage(): Clutter.Actor;
get_use_layout_size(): boolean;
set_use_layout_size(use_layout_size: boolean): void;
}
export class Texture extends Clutter.Texture {constructor(config?: properties);
set_from_icon_name(widget: Gtk.Widget | null, icon_name: string, icon_size: Gtk.IconSize): boolean;
set_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): boolean;
set_from_stock(widget: Gtk.Widget, stock_id: string, icon_size: Gtk.IconSize): boolean;
static error_quark(): GLib.Quark;
}
export class Window extends Gtk.Window {constructor(config?: properties);
get_stage(): Clutter.Actor;
}
export class ActorClass  {constructor(config?: properties);
readonly parent_class: Clutter.ActorClass;
readonly _clutter_gtk_reserved1: unknown;
readonly _clutter_gtk_reserved2: unknown;
readonly _clutter_gtk_reserved3: unknown;
readonly _clutter_gtk_reserved4: unknown;
readonly _clutter_gtk_reserved5: unknown;
readonly _clutter_gtk_reserved6: unknown;
}
export class ActorPrivate  {constructor(config?: properties);
}
export class EmbedClass  {constructor(config?: properties);
readonly parent_class: Gtk.ContainerClass;
readonly _clutter_gtk_reserved1: unknown;
readonly _clutter_gtk_reserved2: unknown;
readonly _clutter_gtk_reserved3: unknown;
readonly _clutter_gtk_reserved4: unknown;
readonly _clutter_gtk_reserved5: unknown;
readonly _clutter_gtk_reserved6: unknown;
}
export class EmbedPrivate  {constructor(config?: properties);
}
export class TextureClass  {constructor(config?: properties);
readonly parent_class: Clutter.TextureClass;
}
export class WindowClass  {constructor(config?: properties);
readonly parent_class: Gtk.WindowClass;
readonly _clutter_gtk_reserved1: unknown;
readonly _clutter_gtk_reserved2: unknown;
readonly _clutter_gtk_reserved3: unknown;
readonly _clutter_gtk_reserved4: unknown;
readonly _clutter_gtk_reserved5: unknown;
readonly _clutter_gtk_reserved6: unknown;
}
export class WindowPrivate  {constructor(config?: properties);
}