
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as Xkl from "xkl";
import * as xlib from "xlib";
import * as Gdk from "gdk";
import * as Gkbd from "gkbd";
import * as cairo from "cairo";
import * as Pango from "pango";
/**
 * gkbd.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const DESKTOP_SCHEMA: string;
export const KEYBOARD_DRAWING_H: number;
export const KEYBOARD_SCHEMA: string;
/**
 * 
 */
export function install_glib_log_appender(): void;
/**
 * 
 */
export function keyboard_config_add_default_switch_option_if_necessary(layouts_list: string, options_list: string, was_appended: boolean): string[];
/**
 * 
 */
export function keyboard_config_format_full_description(layout_descr: string, variant_descr: string): string;
/**
 * 
 */
export function keyboard_config_get_descriptions(config_registry: Xkl.ConfigRegistry, name: string, layout_short_descr: string, layout_descr: string, variant_short_descr: string, variant_descr: string): boolean;
/**
 * 
 */
export function keyboard_config_merge_items(parent: string, child: string): string;
/**
 * 
 */
export function keyboard_config_split_items(merged: string, parent: string, child: string): boolean;
/**
 * 
 */
export function preview_load_position(): Gdk.Rectangle;
/**
 * 
 */
export function preview_save_position(rect: Gdk.Rectangle): void;
/**
 * 
 */
export function strv_append(arr: string, element: string): string[];
/**
 * 
 */
export function strv_behead(arr: string): void;
/**
 * 
 */
export function strv_remove(arr: string, element: string): boolean;
export enum KeyboardDrawingGroupLevelPosition {
    TOPLEFT = 0,
    TOPRIGHT = 1,
    BOTTOMLEFT = 2,
    BOTTOMRIGHT = 3,
    TOTAL = 4,
    FIRST = 0,
    LAST = 3,
}
export enum KeyboardDrawingItemType {
    INVALID = 0,
    KEY = 1,
    KEY_EXTRA = 2,
    DOODAD = 3,
}
export class Configuration  {
    constructor(config?: properties);
    readonly priv: ConfigurationPrivate;
    append_object(obj: GObject.Object): void;
    extract_layout_name(group: number): string;
    free_images(images: string[]): void;
    get_all_objects(): string[];
    get_caps_lock_state(): boolean;
    get_current_group(): number;
    get_current_tooltip(): string;
    get_group_name(group: number): string;
    get_group_names(): string[];
    get_image_filename(group: number): string;
    get_indicator_config(): IndicatorConfig;
    get_keyboard_config(): KeyboardConfig;
    get_num_lock_state(): boolean;
    get_scroll_lock_state(): boolean;
    get_short_group_names(): string[];
    get_xkl_engine(): Xkl.Engine;
    if_any_object_exists(): boolean;
    if_flags_shown(): boolean;
    load_images(): string[];
    lock_group(group: number): void;
    lock_next_group(): void;
    remove_object(obj: GObject.Object): void;
    start_listen(): void;
    stop_listen(): void;
    static create_label_title(group: number, ln2cnt_map: GLib.HashTable, layout_name: string): string;
    static get(): Configuration;
}
export class Indicator extends Gtk.Notebook {
    constructor(config?: properties);
    reinit_ui(): void;
    set_angle(angle: number): void;
    set_parent_tooltips(ifset: boolean): void;
    vfunc_reinit_ui(): void;
    static get_group_names(): string[];
    static get_image_filename(group: number): string;
    static get_max_width_height_ratio(): number;
    static get_xkl_engine(): Xkl.Engine;
}
export class KeyboardDrawing extends Gtk.DrawingArea {
    constructor(config?: properties);
    static dialog_new(): Gtk.Widget;
    get_compat(): string;
    get_geometry(): string;
    get_keycodes(): string;
    get_symbols(): string;
    get_types(): string;
    print(parent_window: Gtk.Window, description: string): void;
    render(cr: cairo.Context, layout: Pango.Layout, x: number, y: number, width: number, height: number, dpi_x: number, dpi_y: number): boolean;
    set_groups_levels(groupLevels: KeyboardDrawingGroupLevel): void;
    set_layout(id: string): void;
    set_track_config(enable: boolean): void;
    set_track_modifiers(enable: boolean): void;
    vfunc_bad_keycode(keycode: number): void;
    static dialog_set_group(dialog: Gtk.Widget, registry: Xkl.ConfigRegistry, group: number): void;
    static dialog_set_layout(dialog: Gtk.Widget, registry: Xkl.ConfigRegistry, layout: string): void;
}
export class Status extends Gtk.StatusIcon {
    constructor(config?: properties);
    reinit_ui(): void;
    static get_group_names(): string[];
    static get_image_filename(group: number): string;
    static get_xkl_engine(): Xkl.Engine;
}
export class ConfigurationPrivate  {
    constructor(config?: properties);
}
export class DesktopConfig  {
    constructor(config?: properties);
    default_group: number;
    group_per_app: boolean;
    handle_indicators: boolean;
    layout_names_as_group_names: boolean;
    load_extra_items: boolean;
    settings: Gio.Settings;
    config_listener_id: number;
    engine: Xkl.Engine;
    activate(): boolean;
    init(engine: Xkl.Engine): void;
    load(): void;
    load_group_descriptions(registry: Xkl.ConfigRegistry, layout_ids: string, variant_ids: string, short_group_names: string, full_group_names: string): boolean;
    lock_next_group(): void;
    lock_prev_group(): void;
    restore_group(): void;
    save(): void;
    start_listen(func: GObject.Callback, user_data: object | null): void;
    stop_listen(): void;
    term(): void;
}
export class IndicatorConfig  {
    constructor(config?: properties);
    secondary_groups_mask: number;
    show_flags: boolean;
    font_family: string;
    font_size: number;
    foreground_color: string;
    background_color: string;
    settings: Gio.Settings;
    image_filenames: string[];
    icon_theme: Gtk.IconTheme;
    config_listener_id: number;
    engine: Xkl.Engine;
    activate(): void;
    free_image_filenames(): void;
    get_fg_color_for_widget(widget: Gtk.Widget): string;
    get_font_for_widget(widget: Gtk.Widget, font_family: string, font_size: number): void;
    get_images_file(kbd_config: KeyboardConfig, group: number): string;
    init(engine: Xkl.Engine): void;
    load(): void;
    load_image_filenames(kbd_config: KeyboardConfig): void;
    refresh_style(): void;
    save(): void;
    start_listen(func: GObject.Callback, user_data: object | null): void;
    stop_listen(): void;
    term(): void;
}
export class IndicatorPrivate  {
    constructor(config?: properties);
}
export class KeyboardConfig  {
    constructor(config?: properties);
    model: string;
    layouts_variants: string;
    options: string;
    settings: Gio.Settings;
    config_listener_id: number;
    engine: Xkl.Engine;
    activate(): boolean;
    equals(kbd_config2: KeyboardConfig): boolean;
    init(engine: Xkl.Engine): void;
    load(kbd_config_default: KeyboardConfig): void;
    load_from_x_current(buf: Xkl.ConfigRec): void;
    load_from_x_initial(buf: Xkl.ConfigRec): void;
    save(): void;
    start_listen(func: GObject.Callback, user_data: object | null): void;
    stop_listen(): void;
    term(): void;
    to_string(): string;
    static add_default_switch_option_if_necessary(layouts_list: string, options_list: string, was_appended: boolean): string[];
    static format_full_description(layout_descr: string, variant_descr: string): string;
    static get_descriptions(config_registry: Xkl.ConfigRegistry, name: string, layout_short_descr: string, layout_descr: string, variant_short_descr: string, variant_descr: string): boolean;
    static merge_items(parent: string, child: string): string;
    static split_items(merged: string, parent: string, child: string): boolean;
}
export class KeyboardDrawingDoodad  {
    constructor(config?: properties);
    readonly type: KeyboardDrawingItemType;
    readonly origin_x: number;
    readonly origin_y: number;
    readonly angle: number;
    readonly priority: number;
    readonly on: boolean;
}
export class KeyboardDrawingGroupLevel  {
    constructor(config?: properties);
    group: number;
    level: number;
}
export class KeyboardDrawingItem  {
    constructor(config?: properties);
    readonly type: KeyboardDrawingItemType;
    readonly origin_x: number;
    readonly origin_y: number;
    readonly angle: number;
    readonly priority: number;
}
export class KeyboardDrawingKey  {
    constructor(config?: properties);
    readonly type: KeyboardDrawingItemType;
    readonly origin_x: number;
    readonly origin_y: number;
    readonly angle: number;
    readonly priority: number;
    readonly pressed: boolean;
    readonly keycode: number;
}
export class KeyboardDrawingRenderContext  {
    constructor(config?: properties);
    cr: cairo.Context;
    angle: number;
    layout: Pango.Layout;
    font_desc: Pango.FontDescription;
    scale_numerator: number;
    scale_denominator: number;
    dark_color: Gdk.RGBA;
}
export class StatusPrivate  {
    constructor(config?: properties);
}