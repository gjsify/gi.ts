
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as Handy from "handy";
import * as Gdk from "gdk";
import * as Pango from "pango";
/**
 * handy.d.ts
 */
type properties = { [key: string]: any };
export type ComboRowGetEnumValueNameFunc = (value: EnumValueObject, user_data: object | null) => string;
export type ComboRowGetNameFunc = (item: GObject.Object, user_data: object | null) => string;
/**
 * Computes the ease out for @t.
 */
export function ease_out_cubic(t: number): number;
/**
 * This is a default implementation of #HdyComboRowGetEnumValueNameFunc t
 * o be
 * used with hdy_combo_row_set_for_enum(). If the enumeration has a nickn
 * ame, it
 * will return it, otherwise it will return its name.
 */
export function enum_value_row_name(value: EnumValueObject, user_data: object | null): string;
/**
 * Returns whether animations are enabled for that widget. This should be
 *  used
 * when implementing an animated widget to know whether to animate it or 
 * not.
 */
export function get_enable_animations(widget: Gtk.Widget): boolean;
/**
 * Call this function before using any other Handy functions in your
 * GUI applications. If libhandy has already been initialized, the functi
 * on will
 * simply return without processing the new arguments.
 */
export function init(argc: number | null, argv: string[] | null): [boolean, number,string[] | null];
/**
 * Separates rows by using #GtkSeparator as headers. The first row doesn'
 * t have
 * a separator as there is no row above it.
 */
export function list_box_separator_header(row: Gtk.ListBoxRow, before: Gtk.ListBoxRow | null, unused_user_data: object | null): void;
/**
 * Computes the length of the string in utf-8 characters. See #g_utf8_str
 * len.
 */
export function string_utf8_len(string: GLib.String): number;
/**
 * Cut of the end of the string @string so that @len utf8 characters rema
 * in
 */
export function string_utf8_truncate(string: GLib.String, len: number): GLib.String;
export enum ArrowsDirection {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3,
}
export enum CenteringPolicy {
    LOOSE = 0,
    STRICT = 1,
}
export enum Fold {
    UNFOLDED = 0,
    FOLDED = 1,
}
export enum LeafletChildTransitionType {
    NONE = 0,
    CROSSFADE = 1,
    SLIDE = 2,
    OVER = 3,
    UNDER = 4,
}
export enum LeafletModeTransitionType {
    NONE = 0,
    SLIDE = 1,
}
export enum PaginatorIndicatorStyle {
    NONE = 0,
    DOTS = 1,
    LINES = 2,
}
export enum SqueezerTransitionType {
    NONE = 0,
    CROSSFADE = 1,
}
export enum ViewSwitcherPolicy {
    AUTO = 0,
    NARROW = 1,
    WIDE = 2,
}
export class ActionRow extends PreferencesRow {constructor(config?: properties);
activatable_widget: Gtk.Widget;
icon_name: string;
subtitle: string;
title: string;
use_underline: boolean;
activate(): void;
add_action(widget: Gtk.Widget | null): void;
add_prefix(widget: Gtk.Widget | null): void;
get_activatable_widget(): Gtk.Widget | null;
get_icon_name(): string;
get_subtitle(): string;
get_title(): string;
get_use_underline(): boolean;
set_activatable_widget(widget: Gtk.Widget | null): void;
set_icon_name(icon_name: string): void;
set_subtitle(subtitle: string): void;
set_title(title: string): void;
set_use_underline(use_underline: boolean): void;
vfunc_activate(): void;
}
export class Arrows extends Gtk.DrawingArea {constructor(config?: properties);
count: number;
direction: ArrowsDirection;
duration: number;
animate(): void;
get_count(): number;
get_direction(): ArrowsDirection;
get_duration(): number;
set_count(count: number): void;
set_direction(direction: ArrowsDirection): void;
set_duration(duration: number): void;
}
export class Column extends Gtk.Bin {constructor(config?: properties);
linear_growth_width: number;
maximum_width: number;
get_linear_growth_width(): number;
get_maximum_width(): number;
set_linear_growth_width(linear_growth_width: number): void;
set_maximum_width(maximum_width: number): void;
}
export class ComboRow extends ActionRow {constructor(config?: properties);
selected_index: number;
use_subtitle: boolean;
bind_model(model: Gio.ListModel | null, create_list_widget_func: Gtk.ListBoxCreateWidgetFunc | null, create_current_widget_func: Gtk.ListBoxCreateWidgetFunc | null, user_data: object | null, user_data_free_func: GLib.DestroyNotify): void;
bind_name_model(model: Gio.ListModel | null, get_name_func: ComboRowGetNameFunc | null, user_data: object | null, user_data_free_func: GLib.DestroyNotify): void;
get_model(): Gio.ListModel | null;
get_selected_index(): number;
get_use_subtitle(): boolean;
set_for_enum(enum_type: unknown, get_name_func: ComboRowGetEnumValueNameFunc | null, user_data: object | null, user_data_free_func: GLib.DestroyNotify): void;
set_get_name_func(get_name_func: ComboRowGetNameFunc | null, user_data: object | null, user_data_free_func: GLib.DestroyNotify): void;
set_selected_index(selected_index: number): void;
set_use_subtitle(use_subtitle: boolean): void;
}
export class Dialer extends Gtk.Bin {constructor(config?: properties);
column_spacing: number;
number: string;
relief: Gtk.ReliefStyle;
row_spacing: number;
show_action_buttons: boolean;
clear_number(): void;
get_number(): string;
get_relief(): Gtk.ReliefStyle;
get_show_action_buttons(): boolean;
set_number(number: string): void;
set_relief(relief: Gtk.ReliefStyle): void;
set_show_action_buttons(show: boolean): void;
vfunc_submitted(number: string): void;
}
export class DialerButton extends Gtk.Button {constructor(config?: properties);
readonly digit: number;
symbols: string;
get_digit(): number;
get_symbols(): string;
}
export class DialerCycleButton extends DialerButton {constructor(config?: properties);
cycle_timeout: number;
get_current_symbol(): number;
get_cycle_timeout(): number;
is_cycling(): boolean;
set_cycle_timeout(timeout: number): void;
stop_cycle(): void;
vfunc_cycle_end(): void;
vfunc_cycle_start(): void;
}
export class Dialog extends Gtk.Dialog {constructor(config?: properties);
readonly narrow: boolean;
get_narrow(): boolean;
}
export class EnumValueObject extends GObject.Object {constructor(config?: properties);
get_name(): string;
get_nick(): string;
get_value(): number;
}
export class ExpanderRow extends ActionRow {constructor(config?: properties);
enable_expansion: boolean;
expanded: boolean;
show_enable_switch: boolean;
get_enable_expansion(): boolean;
get_expanded(): boolean;
get_show_enable_switch(): boolean;
set_enable_expansion(enable_expansion: boolean): void;
set_expanded(expanded: boolean): void;
set_show_enable_switch(show_enable_switch: boolean): void;
}
export class HeaderBar extends Gtk.Container {constructor(config?: properties);
centering_policy: CenteringPolicy;
custom_title: Gtk.Widget;
decoration_layout: string;
decoration_layout_set: boolean;
has_subtitle: boolean;
interpolate_size: boolean;
show_close_button: boolean;
spacing: number;
subtitle: string;
title: string;
transition_duration: number;
readonly transition_running: boolean;
get_centering_policy(): CenteringPolicy;
get_custom_title(): Gtk.Widget | null;
get_decoration_layout(): string;
get_has_subtitle(): boolean;
get_interpolate_size(): boolean;
get_show_close_button(): boolean;
get_subtitle(): string | null;
get_title(): string | null;
get_transition_duration(): number;
get_transition_running(): boolean;
pack_end(child: Gtk.Widget): void;
pack_start(child: Gtk.Widget): void;
set_centering_policy(centering_policy: CenteringPolicy): void;
set_custom_title(title_widget: Gtk.Widget | null): void;
set_decoration_layout(layout: string | null): void;
set_has_subtitle(setting: boolean): void;
set_interpolate_size(interpolate_size: boolean): void;
set_show_close_button(setting: boolean): void;
set_subtitle(subtitle: string | null): void;
set_title(title: string | null): void;
set_transition_duration(duration: number): void;
}
export class HeaderGroup extends GObject.Object {constructor(config?: properties);
focus: Gtk.HeaderBar;
add_header_bar(header_bar: Gtk.HeaderBar): void;
get_focus(): Gtk.HeaderBar | null;
get_header_bars(): string[];
remove_header_bar(header_bar: Gtk.HeaderBar): void;
set_focus(header_bar: Gtk.HeaderBar | null): void;
}
export class Leaflet extends Gtk.Container {constructor(config?: properties);
child_transition_duration: number;
readonly child_transition_running: boolean;
child_transition_type: LeafletChildTransitionType;
readonly fold: Fold;
readonly folded: boolean;
hhomogeneous_folded: boolean;
hhomogeneous_unfolded: boolean;
interpolate_size: boolean;
mode_transition_duration: number;
mode_transition_type: LeafletModeTransitionType;
vhomogeneous_folded: boolean;
vhomogeneous_unfolded: boolean;
visible_child: Gtk.Widget;
visible_child_name: string;
get_child_transition_duration(): number;
get_child_transition_running(): boolean;
get_child_transition_type(): LeafletChildTransitionType;
get_fold(): Fold;
get_homogeneous(fold: Fold, orientation: Gtk.Orientation): boolean;
get_interpolate_size(): boolean;
get_mode_transition_duration(): number;
get_mode_transition_type(): LeafletModeTransitionType;
get_visible_child(): Gtk.Widget;
get_visible_child_name(): string;
set_child_transition_duration(duration: number): void;
set_child_transition_type(transition: LeafletChildTransitionType): void;
set_homogeneous(fold: Fold, orientation: Gtk.Orientation, homogeneous: boolean): void;
set_interpolate_size(interpolate_size: boolean): void;
set_mode_transition_duration(duration: number): void;
set_mode_transition_type(transition: LeafletModeTransitionType): void;
set_visible_child(visible_child: Gtk.Widget): void;
set_visible_child_name(name: string): void;
vfunc_todo(): void;
}
export class Paginator extends Gtk.EventBox {constructor(config?: properties);
animation_duration: number;
center_content: boolean;
indicator_spacing: number;
indicator_style: PaginatorIndicatorStyle;
interactive: boolean;
readonly n_pages: number;
readonly position: number;
spacing: number;
get_animation_duration(): number;
get_center_content(): boolean;
get_indicator_spacing(): number;
get_indicator_style(): PaginatorIndicatorStyle;
get_interactive(): boolean;
get_n_pages(): number;
get_position(): number;
get_spacing(): number;
insert(child: Gtk.Widget, position: number): void;
prepend(child: Gtk.Widget): void;
reorder(child: Gtk.Widget, position: number): void;
scroll_to(widget: Gtk.Widget): void;
scroll_to_full(widget: Gtk.Widget, duration: number): void;
set_animation_duration(duration: number): void;
set_center_content(center_content: boolean): void;
set_indicator_spacing(spacing: number): void;
set_indicator_style(style: PaginatorIndicatorStyle): void;
set_interactive(interactive: boolean): void;
set_spacing(spacing: number): void;
}
export class PreferencesGroup extends Gtk.Box {constructor(config?: properties);
description: string;
title: string;
get_description(): string;
get_title(): string;
set_description(description: string): void;
set_title(title: string): void;
}
export class PreferencesPage extends Gtk.ScrolledWindow {constructor(config?: properties);
icon_name: string;
title: string;
get_icon_name(): string | null;
get_title(): string | null;
set_icon_name(icon_name: string | null): void;
set_title(title: string | null): void;
}
export class PreferencesRow extends Gtk.ListBoxRow {constructor(config?: properties);
title: string;
use_underline: boolean;
get_title(): string | null;
get_use_underline(): boolean;
set_title(title: string | null): void;
set_use_underline(use_underline: boolean): void;
}
export class PreferencesWindow extends Gtk.Window {constructor(config?: properties);
}
export class SearchBar extends Gtk.Bin {constructor(config?: properties);
search_mode_enabled: boolean;
show_close_button: boolean;
connect_entry(entry: Gtk.Entry): void;
get_search_mode(): boolean;
get_show_close_button(): boolean;
handle_event(event: Gdk.Event): boolean;
set_search_mode(search_mode: boolean): void;
set_show_close_button(visible: boolean): void;
}
export class Squeezer extends Gtk.Container {constructor(config?: properties);
homogeneous: boolean;
interpolate_size: boolean;
transition_duration: number;
readonly transition_running: boolean;
transition_type: SqueezerTransitionType;
readonly visible_child: Gtk.Widget;
get_child_enabled(child: Gtk.Widget): boolean;
get_homogeneous(): boolean;
get_interpolate_size(): boolean;
get_transition_duration(): number;
get_transition_running(): boolean;
get_transition_type(): SqueezerTransitionType;
get_visible_child(): Gtk.Widget | null;
set_child_enabled(child: Gtk.Widget, enabled: boolean): void;
set_homogeneous(homogeneous: boolean): void;
set_interpolate_size(interpolate_size: boolean): void;
set_transition_duration(duration: number): void;
set_transition_type(transition: SqueezerTransitionType): void;
}
export class TitleBar extends Gtk.Bin {constructor(config?: properties);
selection_mode: boolean;
get_selection_mode(): boolean;
set_selection_mode(selection_mode: boolean): void;
}
export class ValueObject extends GObject.Object {constructor(config?: properties);
value: GObject.Value;static new_collect(type: unknown, ___: unknown[]): ValueObject;
static new_string(string: string): ValueObject;
static new_take_string(string: string): ValueObject;
copy_value(dest: GObject.Value): void;
dup_string(): string;
get_string(): string;
get_value(): GObject.Value;
}
export class ViewSwitcher extends Gtk.Box {constructor(config?: properties);
icon_size: number;
narrow_ellipsize: Pango.EllipsizeMode;
policy: ViewSwitcherPolicy;
stack: Gtk.Stack;
get_icon_size(): Gtk.IconSize;
get_narrow_ellipsize(): Pango.EllipsizeMode;
get_policy(): ViewSwitcherPolicy;
get_stack(): Gtk.Stack | null;
set_icon_size(icon_size: Gtk.IconSize): void;
set_narrow_ellipsize(mode: Pango.EllipsizeMode): void;
set_policy(policy: ViewSwitcherPolicy): void;
set_stack(stack: Gtk.Stack | null): void;
}
export class ViewSwitcherBar extends Gtk.Bin {constructor(config?: properties);
icon_size: number;
policy: ViewSwitcherPolicy;
reveal: boolean;
stack: Gtk.Stack;
get_icon_size(): Gtk.IconSize;
get_policy(): ViewSwitcherPolicy;
get_reveal(): boolean;
get_stack(): Gtk.Stack | null;
set_icon_size(icon_size: Gtk.IconSize): void;
set_policy(policy: ViewSwitcherPolicy): void;
set_reveal(reveal: boolean): void;
set_stack(stack: Gtk.Stack | null): void;
}
export class ActionRowClass  {constructor(config?: properties);
readonly parent_class: Gtk.ListBoxRowClass;
readonly activate: unknown;
}
export class ArrowsClass  {constructor(config?: properties);
readonly parent_class: Gtk.DrawingAreaClass;
}
export class ColumnClass  {constructor(config?: properties);
readonly parent_class: Gtk.BinClass;
}
export class ComboRowClass  {constructor(config?: properties);
readonly parent_class: ActionRowClass;
}
export class DialerButtonClass  {constructor(config?: properties);
readonly parent_class: Gtk.ButtonClass;
}
export class DialerClass  {constructor(config?: properties);
readonly parent_class: Gtk.BinClass;
readonly submitted: unknown;
}
export class DialerCycleButtonClass  {constructor(config?: properties);
readonly parent_class: DialerButtonClass;
readonly cycle_start: unknown;
readonly cycle_end: unknown;
}
export class DialogClass  {constructor(config?: properties);
readonly parent_class: Gtk.DialogClass;
}
export class EnumValueObjectClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class ExpanderRowClass  {constructor(config?: properties);
readonly parent_class: ActionRowClass;
}
export class HeaderBarClass  {constructor(config?: properties);
readonly parent_class: Gtk.ContainerClass;
}
export class HeaderGroupClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class LeafletClass  {constructor(config?: properties);
readonly parent_class: Gtk.ContainerClass;
readonly todo: unknown;
}
export class PaginatorClass  {constructor(config?: properties);
readonly parent_class: Gtk.EventBoxClass;
}
export class PreferencesGroupClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
}
export class PreferencesPageClass  {constructor(config?: properties);
readonly parent_class: Gtk.ScrolledWindowClass;
}
export class PreferencesRowClass  {constructor(config?: properties);
readonly parent_class: Gtk.ListBoxRowClass;
}
export class PreferencesWindowClass  {constructor(config?: properties);
readonly parent_class: Gtk.WindowClass;
}
export class SearchBarClass  {constructor(config?: properties);
readonly parent_class: Gtk.BinClass;
}
export class SqueezerClass  {constructor(config?: properties);
readonly parent_class: Gtk.ContainerClass;
}
export class TitleBarClass  {constructor(config?: properties);
readonly parent_class: Gtk.BinClass;
}
export class ValueObjectClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class ViewSwitcherBarClass  {constructor(config?: properties);
readonly parent_class: Gtk.BinClass;
}
export class ViewSwitcherClass  {constructor(config?: properties);
readonly parent_class: Gtk.BoxClass;
}