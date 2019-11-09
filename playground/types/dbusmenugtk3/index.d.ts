
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Dbusmenu from "dbusmenu";
import * as Gtk from "gtk";
import * as GdkPixbuf from "gdkpixbuf";
import * as Gdk from "gdk";
import * as DbusmenuGtk3 from "dbusmenugtk3";
/**
 * dbusmenugtk3.d.ts
 */
type properties = { [key: string]: any };
export const GTK_MENUITEM_H__: number;
/**
 * The Dbusmenu GTK parser adds cached items on the various
 * menu items throughout the tree.  Sometimes it can be useful
 * to get that cached item to use directly.  This function
 * will retrieve it for you.
 */
export function gtk_parse_get_cached_item(widget: Gtk.Widget): Dbusmenu.Menuitem;
/**
 * Goes through the GTK structures and turns them into the appropraite
 * Dbusmenu structures along with setting up all the relationships
 * between the objects.  It also stores the dbusmenu items as a cache
 * on the GTK items so that they'll be reused if necissary.
 */
export function gtk_parse_menu_structure(widget: Gtk.Widget): Dbusmenu.Menuitem;
/**
 * This function looks on the menu item for a property by the
 * name of @property.  If one exists it tries to turn it into
 * a #GdkPixbuf.  It assumes that the property is a base64 encoded
 * PNG file like the one created by #dbusmenu_menuite_property_set_image.
 */
export function menuitem_property_get_image(menuitem: Dbusmenu.Menuitem, property: string): GdkPixbuf.Pixbuf;
/**
 * This function gets a GTK shortcut as a key and a mask
 * for use to set the accelerators.
 */
export function menuitem_property_get_shortcut(menuitem: Dbusmenu.Menuitem): [number,Gdk.ModifierType];
/**
 * This function takes the pixbuf that is stored in @data and
 * turns it into a base64 encoded PNG so that it can be placed
 * onto a standard #DbusmenuMenuitem property.
 */
export function menuitem_property_set_image(menuitem: Dbusmenu.Menuitem, property: string, data: GdkPixbuf.Pixbuf): boolean;
/**
 * Takes the modifer described by @key and @modifier and places that into
 * the format sending across Dbus for shortcuts.
 */
export function menuitem_property_set_shortcut(menuitem: Dbusmenu.Menuitem, key: number, modifier: Gdk.ModifierType): boolean;
/**
 * Takes the shortcut that is installed on a menu item and calls
 * #dbusmenu_menuitem_property_set_shortcut with it.  It also sets
 * up listeners to watch it change.
 */
export function menuitem_property_set_shortcut_menuitem(menuitem: Dbusmenu.Menuitem, gmi: Gtk.MenuItem): boolean;
/**
 * This function takes a GTK shortcut string as defined in
 * #gtk_accelerator_parse and turns that into the information
 * required to send it over DBusmenu.
 */
export function menuitem_property_set_shortcut_string(menuitem: Dbusmenu.Menuitem, shortcut: string): boolean;
export class Client extends Dbusmenu.Client {constructor(config?: properties);
get_accel_group(): Gtk.AccelGroup;
menuitem_get(item: Dbusmenu.Menuitem): Gtk.MenuItem;
menuitem_get_submenu(item: Dbusmenu.Menuitem): Gtk.Menu;
newitem_base(item: Dbusmenu.Menuitem, gmi: Gtk.MenuItem, parent: Dbusmenu.Menuitem): void;
set_accel_group(agroup: Gtk.AccelGroup): void;
}
export class Menu extends Gtk.Menu {constructor(config?: properties);
dbus_name: string;
dbus_object: string;
get_client(): Client;
}
export class ClientClass  {constructor(config?: properties);
readonly parent_class: Dbusmenu.ClientClass;
readonly root_changed: unknown;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
}
export class ClientPrivate  {constructor(config?: properties);
}
export class MenuClass  {constructor(config?: properties);
readonly parent_class: Gtk.MenuClass;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
}
export class MenuPrivate  {constructor(config?: properties);
}