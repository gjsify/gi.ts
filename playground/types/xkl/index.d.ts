
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as xlib from "xlib";
import * as Xkl from "xkl";
/**
 * xkl.d.ts
 */
type properties = { [key: string]: any };
export type ConfigItemProcessFunc = (config: ConfigRegistry, item: ConfigItem, data: object | null) => void;
export type LogAppender = (file: number, _function: number, level: number, format: number, args: any) => void;
export type TwoConfigItemsProcessFunc = (config: ConfigRegistry, item: ConfigItem, subitem: ConfigItem, data: object | null) => void;
export const MAX_CI_DESC_LENGTH: number;
export const MAX_CI_NAME_LENGTH: number;
export const MAX_CI_SHORT_DESC_LENGTH: number;
/**
 * Default log output method. Sends everything to stdout.
 */
export function default_log_appender(file: number, _function: number, level: number, format: number, args: any): void;
/**
 * Get localized country name, from ISO code
 */
export function get_country_name(code: string): string;
/**
 * Get localized language name, from ISO code
 */
export function get_language_name(code: string): string;
/**
 * 
 */
export function get_last_error(): string;
/**
 * Restores XKB from the property saved by xkl_backup_names_prop
 */
export function restore_names_prop(engine: Engine): boolean;
/**
 * Sets maximum debug level.
 * Message of the level more than the one set here - will be ignored
 */
export function set_debug_level(level: number): void;
/**
 * Installs the custom log appender.function
 */
export function set_log_appender(fun: LogAppender): void;
export enum EngineListenModes {
    MANAGE_WINDOW_STATES = 1,
    TRACK_KEYBOARD_STATE = 2,
    MANAGE_LAYOUTS = 4,
}
export enum EngineStateChange {
    GROUP_CHANGED = 0,
    INDICATORS_CHANGED = 1,
}
export enum EngineFeatures {
    CAN_TOGGLE_INDICATORS = 1,
    CAN_OUTPUT_CONFIG_AS_ASCII = 2,
    CAN_OUTPUT_CONFIG_AS_BINARY = 4,
    MULTIPLE_LAYOUTS_SUPPORTED = 8,
    REQUIRES_MANUAL_LAYOUT_MANAGEMENT = 16,
    DEVICE_DISCOVERY = 32,
}
export class ConfigItem extends GObject.Object {constructor(config?: properties);
get_description(): string;
get_name(): string;
get_short_description(): string;
set_description(description: string | null): void;
set_name(name: string | null): void;
set_short_description(short_description: string | null): void;
}
export class ConfigRec extends GObject.Object {constructor(config?: properties);
activate(engine: Engine): boolean;
equals(data2: ConfigRec): boolean;
get_from_backup(engine: Engine): boolean;
get_from_root_window_property(rules_atom_name: xlib.Atom, rules_file_out: string, engine: Engine): boolean;
get_from_server(engine: Engine): boolean;
reset(): void;
set_layouts(new_layouts: string[]): void;
set_model(new_model: string): void;
set_options(new_options: string[]): void;
set_to_root_window_property(rules_atom_name: xlib.Atom, rules_file: string, engine: Engine): boolean;
set_variants(new_variants: string[]): void;
static write_to_file(engine: Engine, file_name: string, data: ConfigRec, binary: boolean): boolean;
}
export class ConfigRegistry  {constructor(config?: properties);
engine: Engine;
readonly priv: ConfigRegistryPrivate;
find_layout(item: ConfigItem): boolean;
find_model(item: ConfigItem): boolean;
find_option(option_group_name: string, item: ConfigItem): boolean;
find_option_group(item: ConfigItem): boolean;
find_variant(layout_name: string, item: ConfigItem): boolean;
foreach_country(func: ConfigItemProcessFunc, data: object | null): void;
foreach_country_variant(country_code: string, func: TwoConfigItemsProcessFunc, data: object | null): void;
foreach_language(func: ConfigItemProcessFunc, data: object | null): void;
foreach_language_variant(language_code: string, func: TwoConfigItemsProcessFunc, data: object | null): void;
foreach_layout(func: ConfigItemProcessFunc, data: object | null): void;
foreach_layout_variant(layout_name: string, func: ConfigItemProcessFunc, data: object | null): void;
foreach_model(func: ConfigItemProcessFunc, data: object | null): void;
foreach_option(option_group_name: string, func: ConfigItemProcessFunc, data: object | null): void;
foreach_option_group(func: ConfigItemProcessFunc, data: object | null): void;
load(if_extras_needed: boolean): boolean;
search_by_pattern(pattern: string, func: TwoConfigItemsProcessFunc, data: object | null): void;
static get_instance(engine: Engine): ConfigRegistry;
}
export class Engine  {constructor(config?: properties);
readonly backendName: string;
readonly default_group: number;
display: object;
readonly features: EngineFeatures;
readonly indicators_handling: boolean;
readonly max_num_groups: number;
readonly num_groups: number;
readonly secondary_groups_mask: number;
readonly priv: EnginePrivate;
allow_one_switch_to_secondary_group(): void;
backup_names_prop(): boolean;
delete_state(win: xlib.Window): void;
filter_events(evt: xlib.XEvent): number;
get_backend_name(): string;
get_current_state(): State;
get_current_window(): xlib.Window;
get_current_window_group(): number;
get_default_group(): number;
get_features(): number;
get_groups_names(): string[];
get_indicators_handling(): boolean;
get_indicators_names(): string[];
get_max_num_groups(): number;
get_next_group(): number;
get_num_groups(): number;
get_prev_group(): number;
get_secondary_groups_mask(): number;
get_state(win: xlib.Window, state_out: State): boolean;
get_window_title(win: xlib.Window): string;
grab_key(keycode: number, modifiers: number): boolean;
is_group_per_toplevel_window(): boolean;
is_window_from_same_toplevel_window(win1: xlib.Window, win2: xlib.Window): boolean;
is_window_transparent(win: xlib.Window): boolean;
lock_group(group: number): void;
pause_listen(): number;
resume_listen(): number;
save_state(win: xlib.Window, state: State): void;
set_default_group(group: number): void;
set_group_per_toplevel_window(is_global: boolean): void;
set_indicators_handling(whether_handle: boolean): void;
set_secondary_groups_mask(mask: number): void;
set_window_transparent(win: xlib.Window, transparent: boolean): void;
start_listen(flags: number): number;
stop_listen(flags: number): number;
ungrab_key(keycode: number, modifiers: number): boolean;
static INT__LONG_LONG(closure: GObject.Closure, return_value: GObject.Value, n_param_values: number, param_values: GObject.Value, invocation_hint: object | null, marshal_data: object | null): void;
static VOID__ENUM_INT_BOOLEAN(closure: GObject.Closure, return_value: GObject.Value, n_param_values: number, param_values: GObject.Value, invocation_hint: object | null, marshal_data: object | null): void;
static get_instance(display: xlib.Display): Engine;
}
export class ConfigItemClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class ConfigRecClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class ConfigRegistryClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class ConfigRegistryPrivate  {constructor(config?: properties);
}
export class EngineClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly config_notify: unknown;
readonly new_window_notify: unknown;
readonly state_notify: unknown;
readonly new_device_notify: unknown;
}
export class EnginePrivate  {constructor(config?: properties);
}
export class State  {constructor(config?: properties);
group: number;
indicators: number;
}