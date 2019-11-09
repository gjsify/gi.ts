
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gdk from "gdk";
import * as Caribou from "caribou";
/**
 * caribou.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type KeyButtonCallback = (keybuttoncode: number, pressed: boolean, user_data: object) => void;
export enum ModifierState {
    NONE = 0,
    LATCHED = 1,
    LOCKED = 2,
}
export enum ScanGrouping {
    NONE = 0,
    SUBGROUPS = 1,
    ROWS = 2,
    LINEAR = 3,
}
export class DisplayAdapter  {
    constructor(config?: properties);
    display: Gdk.Display;
    readonly priv: DisplayAdapterPrivate;
    keyval_press(keyval: number): void;
    keyval_release(keyval: number): void;
    mod_lock(mask: number): void;
    mod_unlock(mask: number): void;
    mod_latch(mask: number): void;
    mod_unlatch(mask: number): void;
    get_current_group(): [number, string,string];
    get_groups(): [string[],number,string[],number];
    register_key_func(keyval: number, func: KeyButtonCallback | null, func_target: object | null): void;
    register_button_func(button: number, func: KeyButtonCallback | null, func_target: object | null): void;
    get_display(): Gdk.Display;
    static set_default(adapter: DisplayAdapter): boolean;
    static get_default(): DisplayAdapter;
}
export class NullAdapter extends DisplayAdapter {
    constructor(config?: properties);
}
export class XAdapter extends DisplayAdapter {
    constructor(config?: properties);
}
export class KeyboardModel extends GObject.Object {
    constructor(config?: properties);
    active_group: string;
    keyboard_type: string;
    keyboard_file: string;
    get_groups(): [string[], number];
    get_group(group_name: string): GroupModel;
    get_active_group(): string;
    get_keyboard_type(): string;
    get_keyboard_file(): string;
}
export class KeyboardService  {
    constructor(config?: properties);
    readonly priv: KeyboardServicePrivate;
    set_cursor_location(x: number, y: number, w: number, h: number): void;
    set_entry_location(x: number, y: number, w: number, h: number): void;
    show(timestamp: number): void;
    hide(timestamp: number): void;
    register_keyboard(name: string): void;
    name_lost(name: string): void;
}
export class GroupModel extends GObject.Object {
    constructor(config?: properties);
    active_level: string;
    get_levels(): [string[], number];
    get_level(level_name: string): LevelModel;
    get_active_level(): string;
    static create_group_name(group: string, variant: string): string;
}
export class LevelModel extends ScannableGroup {
    constructor(config?: properties);
    mode: string;
    get_rows(): [RowModel[], number];
    get_mode(): string;
}
export class RowModel extends ScannableGroup {
    constructor(config?: properties);
    get_columns(): [ColumnModel[], number];
}
export class KeyModel extends GObject.Object {
    constructor(config?: properties);
    align: string;
    width: number;
    toggle: string;
    repeatable: boolean;
    is_modifier: boolean;
    show_subkeys: boolean;
    name: string;
    keyval: number;
    text: string;
    label: string;
    press(): void;
    release(): void;
    get_extended_keys(): [KeyModel[], number];
    activate(): void;
    get_align(): string;
    set_align(value: string): void;
    get_width(): number;
    set_width(value: number): void;
    get_toggle(): string;
    set_toggle(value: string): void;
    get_repeatable(): boolean;
    set_repeatable(value: boolean): void;
    get_is_modifier(): boolean;
    set_is_modifier(value: boolean): void;
    get_show_subkeys(): boolean;
    get_name(): string;
    get_keyval(): number;
    get_text(): string | null;
    get_label(): string;
    set_label(value: string): void;
}
export class ColumnModel extends ScannableGroup {
    constructor(config?: properties);
    get_key(index: number): KeyModel;
    first_key(): KeyModel;
}
export class Scanner extends GObject.Object {
    constructor(config?: properties);
    bind_settings: boolean;
    scan_grouping: number;
    scan_enabled: boolean;
    step_time: number;
    switch_device: string;
    keyboard_key: string;
    mouse_button: number;
    scan_cycles: number;
    autorestart: boolean;
    inverse_scanning: boolean;
    set_keyboard(keyboard: KeyboardModel): void;
    reset(): void;
    get_bind_settings(): boolean;
    get_scan_grouping(): number;
    set_scan_grouping(value: number): void;
    get_scan_enabled(): boolean;
    set_scan_enabled(value: boolean): void;
    get_step_time(): number;
    set_step_time(value: number): void;
    get_switch_device(): string;
    set_switch_device(value: string): void;
    get_keyboard_key(): string;
    set_keyboard_key(value: string): void;
    get_mouse_button(): number;
    set_mouse_button(value: number): void;
    get_scan_cycles(): number;
    set_scan_cycles(value: number): void;
    get_autorestart(): boolean;
    set_autorestart(value: boolean): void;
    get_inverse_scanning(): boolean;
    set_inverse_scanning(value: boolean): void;
}
export class ScannableGroup  {
    constructor(config?: properties);
    readonly priv: ScannableGroupPrivate;
    get_scan_children(): [IScannableItem[], number];
    child_select(): IScannableItem | null;
}
export class DisplayAdapterPrivate  {
    constructor(config?: properties);
}
export class NullAdapterPrivate  {
    constructor(config?: properties);
}
export class XAdapterPrivate  {
    constructor(config?: properties);
}
export class KeyboardModelPrivate  {
    constructor(config?: properties);
}
export class KeyboardServicePrivate  {
    constructor(config?: properties);
}
export class GroupModelPrivate  {
    constructor(config?: properties);
}
export class LevelModelPrivate  {
    constructor(config?: properties);
}
export class RowModelPrivate  {
    constructor(config?: properties);
}
export class KeyModelPrivate  {
    constructor(config?: properties);
}
export class ColumnModelPrivate  {
    constructor(config?: properties);
}
export class ScannerPrivate  {
    constructor(config?: properties);
}
export class ScannableGroupPrivate  {
    constructor(config?: properties);
}
export interface IScannableItem  {
    scan_stepping: boolean;
    scan_selected: boolean;
    get_scan_stepping(): boolean;
    set_scan_stepping(value: boolean): void;
    get_scan_selected(): boolean;
    set_scan_selected(value: boolean): void;
}
export interface IScannableGroup  {
    scan_grouping: ScanGrouping;
    child_select(): IScannableItem | null;
    scan_reset(): void;
    get_scan_children(): [IScannableItem[], number];
    child_step(cycles: number): IScannableItem | null;
    get_step_path(): [IScannableItem[], number];
    get_selected_path(): [IScannableItem[], number];
    get_scan_grouping(): ScanGrouping;
    set_scan_grouping(value: ScanGrouping): void;
}
export interface IKeyboardObject  {
    get_children(): [IKeyboardObject[], number];
    get_keys(): [KeyModel[], number];
}