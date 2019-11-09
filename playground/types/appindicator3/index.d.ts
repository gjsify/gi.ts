
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as AppIndicator3 from "appindicator3";
import * as Gdk from "gdk";
/**
 * appindicator3.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const INDICATOR_SIGNAL_CONNECTION_CHANGED: string;
export const INDICATOR_SIGNAL_NEW_ATTENTION_ICON: string;
export const INDICATOR_SIGNAL_NEW_ICON: string;
export const INDICATOR_SIGNAL_NEW_ICON_THEME_PATH: string;
export const INDICATOR_SIGNAL_NEW_LABEL: string;
export const INDICATOR_SIGNAL_NEW_STATUS: string;
export const INDICATOR_SIGNAL_SCROLL_EVENT: string;
export enum IndicatorCategory {
    APPLICATION_STATUS = 0,
    COMMUNICATIONS = 1,
    SYSTEM_SERVICES = 2,
    HARDWARE = 3,
    OTHER = 4,
}
export enum IndicatorStatus {
    PASSIVE = 0,
    ACTIVE = 1,
    ATTENTION = 2,
}
export class Indicator extends GObject.Object {
    constructor(config?: properties);
    attention_icon_desc: string;
    attention_icon_name: string;
    category: string;
    readonly connected: boolean;
    icon_desc: string;
    icon_name: string;
    icon_theme_path: string;
    id: string;
    label: string;
    label_guide: string;
    ordering_index: number;
    status: string;
    title: string;static new_with_path(id: string, icon_name: string, category: IndicatorCategory, icon_theme_path: string): Indicator;
    build_menu_from_desktop(desktop_file: string, desktop_profile: string): void;
    get_attention_icon(): string;
    get_attention_icon_desc(): string;
    get_category(): IndicatorCategory;
    get_icon(): string;
    get_icon_desc(): string;
    get_icon_theme_path(): string;
    get_id(): string;
    get_label(): string;
    get_label_guide(): string;
    get_menu(): Gtk.Menu;
    get_ordering_index(): number;
    get_secondary_activate_target(): Gtk.Widget;
    get_status(): IndicatorStatus;
    get_title(): string;
    set_attention_icon(icon_name: string): void;
    set_attention_icon_full(icon_name: string, icon_desc: string): void;
    set_icon(icon_name: string): void;
    set_icon_full(icon_name: string, icon_desc: string): void;
    set_icon_theme_path(icon_theme_path: string): void;
    set_label(label: string, guide: string): void;
    set_menu(menu: Gtk.Menu | null): void;
    set_ordering_index(ordering_index: number): void;
    set_secondary_activate_target(menuitem: Gtk.Widget | null): void;
    set_status(status: IndicatorStatus): void;
    set_title(title: string | null): void;
    vfunc_connection_changed(connected: boolean, user_data: object | null): void;
    vfunc_new_attention_icon(user_data: object | null): void;
    vfunc_new_icon(user_data: object | null): void;
    vfunc_new_icon_theme_path(icon_theme_path: string, user_data: object | null): void;
    vfunc_new_label(label: string, guide: string, user_data: object | null): void;
    vfunc_new_status(status: string, user_data: object | null): void;
    vfunc_scroll_event(delta: number, direction: Gdk.ScrollDirection, user_data: object | null): void;
    vfunc_unfallback(status_icon: Gtk.StatusIcon): void;
}
export class IndicatorPrivate  {
    constructor(config?: properties);
}