
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GnomeAutoar from "gnomeautoar";
import * as Gtk from "gtk";
/**
 * gnomeautoargtk.d.ts
 */
type properties = { [key: string]: any };
/**
 * Gets the selected archive format of the widget created by
 * autoar_gtk_chooser_advanced_new().
 */
export function chooser_advanced_get(advanced: Gtk.Widget, format: number, filter: number): boolean;
/**
 * Create a #GtkGrid with two lists. One list shows all available formats
 * ,
 * and the other list shows all available filters.
 */
export function chooser_advanced_new(default_format: GnomeAutoar.Format, default_filter: GnomeAutoar.Filter): Gtk.Widget;
/**
 * Gets the selected archive format of the widget created by
 * autoar_gtk_chooser_simple_new().
 */
export function chooser_simple_get(simple: Gtk.Widget, format: number, filter: number): boolean;
/**
 * Create a #GtkComboBox with a list of common archive format. There is a
 * lso
 * an option called "Other format…", which will use
 * autoar_gtk_chooser_advanced_new() and
 * autoar_gtk_chooser_advanced_get() to select less common archive
 * format. Arguments @default_format and @default_filter are the default 
 * archive
 * format selected on the returned widget. You may want to get the prefer
 * red
 * format of users using autoar_pref_get_default_format() and
 * autoar_pref_get_default_filter(), or just set them to 1 to select
 * the default archive format.
 */
export function chooser_simple_new(default_format: GnomeAutoar.Format, default_filter: GnomeAutoar.Filter): Gtk.Widget;