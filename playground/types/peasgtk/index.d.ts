
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as Peas from "peas";
import * as PeasGtk from "peasgtk";
/**
 * peasgtk.d.ts
 */
type properties = { [key: string]: any };
export class PluginManager extends Gtk.Box {constructor(config?: properties);
engine: Peas.Engine;
view: PluginManagerView;
get_view(): Gtk.Widget;
}
export class PluginManagerView extends Gtk.TreeView {constructor(config?: properties);
engine: Peas.Engine;
show_builtin: boolean;
get_selected_plugin(): Peas.PluginInfo;
get_show_builtin(): boolean;
set_selected_plugin(info: Peas.PluginInfo): void;
set_show_builtin(show_builtin: boolean): void;
vfunc_populate_popup(menu: Gtk.Menu): void;
}
export class ConfigurableInterface  {constructor(config?: properties);
readonly g_iface: GObject.TypeInterface;
readonly create_configure_widget: unknown;
}
export class PluginManagerClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
readonly padding: object[];
}
export class PluginManagerPrivate  {constructor(config?: properties);
}
export class PluginManagerViewClass  {constructor(config?: properties);
readonly parent_class: Gtk.TreeViewClass;
readonly populate_popup: unknown;
readonly padding: object[];
}
export class PluginManagerViewPrivate  {constructor(config?: properties);
}
export interface Configurable  {
create_configure_widget(): Gtk.Widget;
}