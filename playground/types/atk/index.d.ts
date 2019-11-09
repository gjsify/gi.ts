
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Atk from "atk";
/**
 * atk.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type EventListener = (obj: Object) => void;
export type EventListenerInit = () => void;
export type FocusHandler = (object: Object, focus_in: boolean) => void;
export type Function = (user_data: object | null) => boolean;
export type KeySnoopFunc = (event: KeyEventStruct, user_data: object | null) => number;
export type PropertyChangeHandler = (obj: Object, vals: PropertyValues) => void;
export const BINARY_AGE: number;
export const INTERFACE_AGE: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION_MIN_REQUIRED: number;
/**
 * Frees the memory used by an #AtkAttributeSet, including all its
 * #AtkAttributes.
 */
export function attribute_set_free(attrib_set: AttributeSet): void;
/**
 * Cause the focus tracker functions which have been specified to be
 * executed for the object.
 */
export function focus_tracker_notify(object: Object): void;
/**
 * Returns the binary age as passed to libtool when building the ATK
 * library the process is running against.
 */
export function get_binary_age(): number;
/**
 * Gets a default implementation of the #AtkObjectFactory/type
 * registry.
 * Note: For most toolkit maintainers, this will be the correct
 * registry for registering new #AtkObject factories. Following
 * a call to this function, maintainers may call atk_registry_set_factory
 * _type()
 * to associate an #AtkObjectFactory subclass with the GType of objects
 * for whom accessibility information will be provided.
 */
export function get_default_registry(): Registry;
/**
 * Gets the currently focused object.
 */
export function get_focus_object(): Object;
/**
 * Returns the interface age as passed to libtool when building the
 * ATK library the process is running against.
 */
export function get_interface_age(): number;
/**
 * Returns the major version number of the ATK library.  (e.g. in ATK
 * version 2.7.4 this is 2.)
 * This function is in the library, so it represents the ATK library
 * your code is running against. In contrast, the #ATK_MAJOR_VERSION
 * macro represents the major version of the ATK headers you have
 * included when compiling your code.
 */
export function get_major_version(): number;
/**
 * Returns the micro version number of the ATK library.  (e.g. in ATK
 * version 2.7.4 this is 4.)
 * This function is in the library, so it represents the ATK library
 * your code is are running against. In contrast, the
 * #ATK_MICRO_VERSION macro represents the micro version of the ATK
 * headers you have included when compiling your code.
 */
export function get_micro_version(): number;
/**
 * Returns the minor version number of the ATK library.  (e.g. in ATK
 * version 2.7.4 this is 7.)
 * This function is in the library, so it represents the ATK library
 * your code is are running against. In contrast, the
 * #ATK_MINOR_VERSION macro represents the minor version of the ATK
 * headers you have included when compiling your code.
 */
export function get_minor_version(): number;
/**
 * Gets the root accessible container for the current application.
 */
export function get_root(): Object;
/**
 * Gets name string for the GUI toolkit implementing ATK for this applica
 * tion.
 */
export function get_toolkit_name(): string;
/**
 * Gets version string for the GUI toolkit implementing ATK for this appl
 * ication.
 */
export function get_toolkit_version(): string;
/**
 * Gets the current version for ATK.
 */
export function get_version(): string;
/**
 * Get the #AtkRelationType type corresponding to a relation name.
 */
export function relation_type_for_name(name: string): RelationType;
/**
 * Gets the description string describing the #AtkRelationType @type.
 */
export function relation_type_get_name(type: RelationType): string;
/**
 * Associate @name with a new #AtkRelationType
 */
export function relation_type_register(name: string): RelationType;
/**
 * Removes the specified focus tracker from the list of functions
 * to be called when any object receives focus.
 */
export function remove_focus_tracker(tracker_id: number): void;
/**
 * @listener_id is the value returned by #atk_add_global_event_listener
 * when you registered that event listener.
 * Toolkit implementor note: ATK provides a default implementation for
 * this virtual method. ATK implementors are discouraged from
 * reimplementing this method.
 * Toolkit implementor note: this method is not intended to be used by
 * ATK implementors but by ATK consumers.
 * Removes the specified event listener
 */
export function remove_global_event_listener(listener_id: number): void;
/**
 * @listener_id is the value returned by #atk_add_key_event_listener
 * when you registered that event listener.
 * Removes the specified event listener.
 */
export function remove_key_event_listener(listener_id: number): void;
/**
 * Get the #AtkRole type corresponding to a rolew name.
 */
export function role_for_name(name: string): Role;
/**
 * Gets the localized description string describing the #AtkRole @role.
 */
export function role_get_localized_name(role: Role): string;
/**
 * Gets the description string describing the #AtkRole @role.
 */
export function role_get_name(role: Role): string;
/**
 * Registers the role specified by @name. @name must be a meaningful
 * name. So it should not be empty, or consisting on whitespaces.
 */
export function role_register(name: string): Role;
/**
 * Gets the #AtkStateType corresponding to the description string @name.
 */
export function state_type_for_name(name: string): StateType;
/**
 * Gets the description string describing the #AtkStateType @type.
 */
export function state_type_get_name(type: StateType): string;
/**
 * Register a new object state.
 */
export function state_type_register(name: string): StateType;
/**
 * Get the #AtkTextAttribute type corresponding to a text attribute name.
 */
export function text_attribute_for_name(name: string): TextAttribute;
/**
 * Gets the name corresponding to the #AtkTextAttribute
 */
export function text_attribute_get_name(attr: TextAttribute): string;
/**
 * Gets the value for the index of the #AtkTextAttribute
 */
export function text_attribute_get_value(attr: TextAttribute, index_: number): string | null;
/**
 * Associate @name with a new #AtkTextAttribute
 */
export function text_attribute_register(name: string): TextAttribute;
/**
 * Frees the memory associated with an array of AtkTextRange. It is assum
 * ed
 * that the array was returned by the function atk_text_get_bounded_range
 * s
 * and is NULL terminated.
 */
export function text_free_ranges(ranges: TextRange[]): void;
/**
 * Gets the localized description string describing the #AtkValueType @va
 * lue_type.
 */
export function value_type_get_localized_name(value_type: ValueType): string;
/**
 * Gets the description string describing the #AtkValueType @value_type.
 */
export function value_type_get_name(value_type: ValueType): string;
export enum CoordType {
    SCREEN = 0,
    WINDOW = 1,
    PARENT = 2,
}
export enum KeyEventType {
    PRESS = 0,
    RELEASE = 1,
    LAST_DEFINED = 2,
}
export enum Layer {
    INVALID = 0,
    BACKGROUND = 1,
    CANVAS = 2,
    WIDGET = 3,
    MDI = 4,
    POPUP = 5,
    OVERLAY = 6,
    WINDOW = 7,
}
export enum RelationType {
    NULL = 0,
    CONTROLLED_BY = 1,
    CONTROLLER_FOR = 2,
    LABEL_FOR = 3,
    LABELLED_BY = 4,
    MEMBER_OF = 5,
    NODE_CHILD_OF = 6,
    FLOWS_TO = 7,
    FLOWS_FROM = 8,
    SUBWINDOW_OF = 9,
    EMBEDS = 10,
    EMBEDDED_BY = 11,
    POPUP_FOR = 12,
    PARENT_WINDOW_OF = 13,
    DESCRIBED_BY = 14,
    DESCRIPTION_FOR = 15,
    NODE_PARENT_OF = 16,
    DETAILS = 17,
    DETAILS_FOR = 18,
    ERROR_MESSAGE = 19,
    ERROR_FOR = 20,
    LAST_DEFINED = 21,
}
export enum Role {
    INVALID = 0,
    ACCELERATOR_LABEL = 1,
    ALERT = 2,
    ANIMATION = 3,
    ARROW = 4,
    CALENDAR = 5,
    CANVAS = 6,
    CHECK_BOX = 7,
    CHECK_MENU_ITEM = 8,
    COLOR_CHOOSER = 9,
    COLUMN_HEADER = 10,
    COMBO_BOX = 11,
    DATE_EDITOR = 12,
    DESKTOP_ICON = 13,
    DESKTOP_FRAME = 14,
    DIAL = 15,
    DIALOG = 16,
    DIRECTORY_PANE = 17,
    DRAWING_AREA = 18,
    FILE_CHOOSER = 19,
    FILLER = 20,
    FONT_CHOOSER = 21,
    FRAME = 22,
    GLASS_PANE = 23,
    HTML_CONTAINER = 24,
    ICON = 25,
    IMAGE = 26,
    INTERNAL_FRAME = 27,
    LABEL = 28,
    LAYERED_PANE = 29,
    LIST = 30,
    LIST_ITEM = 31,
    MENU = 32,
    MENU_BAR = 33,
    MENU_ITEM = 34,
    OPTION_PANE = 35,
    PAGE_TAB = 36,
    PAGE_TAB_LIST = 37,
    PANEL = 38,
    PASSWORD_TEXT = 39,
    POPUP_MENU = 40,
    PROGRESS_BAR = 41,
    PUSH_BUTTON = 42,
    RADIO_BUTTON = 43,
    RADIO_MENU_ITEM = 44,
    ROOT_PANE = 45,
    ROW_HEADER = 46,
    SCROLL_BAR = 47,
    SCROLL_PANE = 48,
    SEPARATOR = 49,
    SLIDER = 50,
    SPLIT_PANE = 51,
    SPIN_BUTTON = 52,
    STATUSBAR = 53,
    TABLE = 54,
    TABLE_CELL = 55,
    TABLE_COLUMN_HEADER = 56,
    TABLE_ROW_HEADER = 57,
    TEAR_OFF_MENU_ITEM = 58,
    TERMINAL = 59,
    TEXT = 60,
    TOGGLE_BUTTON = 61,
    TOOL_BAR = 62,
    TOOL_TIP = 63,
    TREE = 64,
    TREE_TABLE = 65,
    UNKNOWN = 66,
    VIEWPORT = 67,
    WINDOW = 68,
    HEADER = 69,
    FOOTER = 70,
    PARAGRAPH = 71,
    RULER = 72,
    APPLICATION = 73,
    AUTOCOMPLETE = 74,
    EDIT_BAR = 75,
    EMBEDDED = 76,
    ENTRY = 77,
    CHART = 78,
    CAPTION = 79,
    DOCUMENT_FRAME = 80,
    HEADING = 81,
    PAGE = 82,
    SECTION = 83,
    REDUNDANT_OBJECT = 84,
    FORM = 85,
    LINK = 86,
    INPUT_METHOD_WINDOW = 87,
    TABLE_ROW = 88,
    TREE_ITEM = 89,
    DOCUMENT_SPREADSHEET = 90,
    DOCUMENT_PRESENTATION = 91,
    DOCUMENT_TEXT = 92,
    DOCUMENT_WEB = 93,
    DOCUMENT_EMAIL = 94,
    COMMENT = 95,
    LIST_BOX = 96,
    GROUPING = 97,
    IMAGE_MAP = 98,
    NOTIFICATION = 99,
    INFO_BAR = 100,
    LEVEL_BAR = 101,
    TITLE_BAR = 102,
    BLOCK_QUOTE = 103,
    AUDIO = 104,
    VIDEO = 105,
    DEFINITION = 106,
    ARTICLE = 107,
    LANDMARK = 108,
    LOG = 109,
    MARQUEE = 110,
    MATH = 111,
    RATING = 112,
    TIMER = 113,
    DESCRIPTION_LIST = 114,
    DESCRIPTION_TERM = 115,
    DESCRIPTION_VALUE = 116,
    STATIC = 117,
    MATH_FRACTION = 118,
    MATH_ROOT = 119,
    SUBSCRIPT = 120,
    SUPERSCRIPT = 121,
    FOOTNOTE = 122,
    CONTENT_DELETION = 123,
    CONTENT_INSERTION = 124,
    LAST_DEFINED = 125,
}
export enum ScrollType {
    TOP_LEFT = 0,
    BOTTOM_RIGHT = 1,
    TOP_EDGE = 2,
    BOTTOM_EDGE = 3,
    LEFT_EDGE = 4,
    RIGHT_EDGE = 5,
    ANYWHERE = 6,
}
export enum StateType {
    INVALID = 0,
    ACTIVE = 1,
    ARMED = 2,
    BUSY = 3,
    CHECKED = 4,
    DEFUNCT = 5,
    EDITABLE = 6,
    ENABLED = 7,
    EXPANDABLE = 8,
    EXPANDED = 9,
    FOCUSABLE = 10,
    FOCUSED = 11,
    HORIZONTAL = 12,
    ICONIFIED = 13,
    MODAL = 14,
    MULTI_LINE = 15,
    MULTISELECTABLE = 16,
    OPAQUE = 17,
    PRESSED = 18,
    RESIZABLE = 19,
    SELECTABLE = 20,
    SELECTED = 21,
    SENSITIVE = 22,
    SHOWING = 23,
    SINGLE_LINE = 24,
    STALE = 25,
    TRANSIENT = 26,
    VERTICAL = 27,
    VISIBLE = 28,
    MANAGES_DESCENDANTS = 29,
    INDETERMINATE = 30,
    TRUNCATED = 31,
    REQUIRED = 32,
    INVALID_ENTRY = 33,
    SUPPORTS_AUTOCOMPLETION = 34,
    SELECTABLE_TEXT = 35,
    DEFAULT = 36,
    ANIMATED = 37,
    VISITED = 38,
    CHECKABLE = 39,
    HAS_POPUP = 40,
    HAS_TOOLTIP = 41,
    READ_ONLY = 42,
    LAST_DEFINED = 43,
}
export enum TextAttribute {
    INVALID = 0,
    LEFT_MARGIN = 1,
    RIGHT_MARGIN = 2,
    INDENT = 3,
    INVISIBLE = 4,
    EDITABLE = 5,
    PIXELS_ABOVE_LINES = 6,
    PIXELS_BELOW_LINES = 7,
    PIXELS_INSIDE_WRAP = 8,
    BG_FULL_HEIGHT = 9,
    RISE = 10,
    UNDERLINE = 11,
    STRIKETHROUGH = 12,
    SIZE = 13,
    SCALE = 14,
    WEIGHT = 15,
    LANGUAGE = 16,
    FAMILY_NAME = 17,
    BG_COLOR = 18,
    FG_COLOR = 19,
    BG_STIPPLE = 20,
    FG_STIPPLE = 21,
    WRAP_MODE = 22,
    DIRECTION = 23,
    JUSTIFICATION = 24,
    STRETCH = 25,
    VARIANT = 26,
    STYLE = 27,
    LAST_DEFINED = 28,
}
export enum TextBoundary {
    CHAR = 0,
    WORD_START = 1,
    WORD_END = 2,
    SENTENCE_START = 3,
    SENTENCE_END = 4,
    LINE_START = 5,
    LINE_END = 6,
}
export enum TextClipType {
    NONE = 0,
    MIN = 1,
    MAX = 2,
    BOTH = 3,
}
export enum TextGranularity {
    CHAR = 0,
    WORD = 1,
    SENTENCE = 2,
    LINE = 3,
    PARAGRAPH = 4,
}
export enum ValueType {
    VERY_WEAK = 0,
    WEAK = 1,
    ACCEPTABLE = 2,
    STRONG = 3,
    VERY_STRONG = 4,
    VERY_LOW = 5,
    LOW = 6,
    MEDIUM = 7,
    HIGH = 8,
    VERY_HIGH = 9,
    VERY_BAD = 10,
    BAD = 11,
    GOOD = 12,
    VERY_GOOD = 13,
    BEST = 14,
    LAST_DEFINED = 15,
}
export type AttributeSet = string[];
export type State = number;
export enum HyperlinkStateFlags {
    INLINE = 1,
}
export class GObjectAccessible  {
    constructor(config?: properties);
    get_object(): GObject.Object;
    static for_object(obj: GObject.Object): Object;
}
export class Hyperlink  {
    constructor(config?: properties);
    readonly end_index: number;
    readonly number_of_anchors: number;
    readonly selected_link: boolean;
    readonly start_index: number;
    get_end_index(): number;
    get_n_anchors(): number;
    get_object(i: number): Object;
    get_start_index(): number;
    get_uri(i: number): string;
    is_inline(): boolean;
    is_selected_link(): boolean;
    is_valid(): boolean;
}
export class Misc  {
    constructor(config?: properties);
    threads_enter(): void;
    threads_leave(): void;
    static get_instance(): Misc;
}
export class NoOpObject extends Object {
    constructor(config?: properties);
}
export class NoOpObjectFactory extends ObjectFactory {
    constructor(config?: properties);
}
export class Object  {
    constructor(config?: properties);
    readonly accessible_component_layer: number;
    readonly accessible_component_mdi_zorder: number;
    accessible_description: string;
    readonly accessible_hypertext_nlinks: number;
    accessible_name: string;
    accessible_parent: Object;
    accessible_role: Role;
    accessible_table_caption: string;
    accessible_table_caption_object: Object;
    accessible_table_column_description: string;
    accessible_table_column_header: Object;
    accessible_table_row_description: string;
    accessible_table_row_header: Object;
    accessible_table_summary: Object;
    accessible_value: number;
    readonly description: string;
    readonly name: string;
    readonly role: Role;
    readonly relation_set: RelationSet;
    readonly layer: Layer;
    add_relationship(relationship: RelationType, target: Object): boolean;
    get_accessible_id(): string;
    get_attributes(): AttributeSet;
    get_description(): string;
    get_index_in_parent(): number;
    get_layer(): Layer;
    get_mdi_zorder(): number;
    get_n_accessible_children(): number;
    get_name(): string;
    get_object_locale(): string;
    get_parent(): Object;
    get_role(): Role;
    initialize(data: object | null): void;
    notify_state_change(state: State, value: boolean): void;
    peek_parent(): Object;
    ref_accessible_child(i: number): Object;
    ref_relation_set(): RelationSet;
    ref_state_set(): StateSet;
    remove_property_change_handler(handler_id: number): void;
    remove_relationship(relationship: RelationType, target: Object): boolean;
    set_accessible_id(name: string): void;
    set_description(description: string): void;
    set_name(name: string): void;
    set_parent(parent: Object): void;
    set_role(role: Role): void;
}
export class ObjectFactory  {
    constructor(config?: properties);
    create_accessible(obj: GObject.Object): Object;
    get_accessible_type(): GType;
    invalidate(): void;
}
export class Plug extends Object {
    constructor(config?: properties);
    get_id(): string;
    vfunc_get_object_id(): string;
}
export class Registry  {
    constructor(config?: properties);
    readonly factory_type_registry: GLib.HashTable;
    readonly factory_singleton_cache: GLib.HashTable;
    get_factory(type: GType): ObjectFactory;
    get_factory_type(type: GType): GType;
    set_factory_type(type: GType, factory_type: GType): void;
}
export class Relation extends GObject.Object {
    constructor(config?: properties);
    relation_type: RelationType;
    target: GObject.ValueArray;
    add_target(target: Object): void;
    get_relation_type(): RelationType;
    get_target(): Object[];
    remove_target(target: Object): boolean;
}
export class RelationSet extends GObject.Object {
    constructor(config?: properties);
    add(relation: Relation): void;
    add_relation_by_type(relationship: RelationType, target: Object): void;
    contains(relationship: RelationType): boolean;
    contains_target(relationship: RelationType, target: Object): boolean;
    get_n_relations(): number;
    get_relation(i: number): Relation;
    get_relation_by_type(relationship: RelationType): Relation;
    remove(relation: Relation): void;
}
export class Socket extends Object {
    constructor(config?: properties);
    embed(plug_id: string): void;
    is_occupied(): boolean;
    vfunc_embed(plug_id: string): void;
}
export class StateSet extends GObject.Object {
    constructor(config?: properties);
    add_state(type: StateType): boolean;
    add_states(types: StateType[], n_types: number): void;
    and_sets(compare_set: StateSet): StateSet;
    clear_states(): void;
    contains_state(type: StateType): boolean;
    contains_states(types: StateType[], n_types: number): boolean;
    is_empty(): boolean;
    or_sets(compare_set: StateSet): StateSet | null;
    remove_state(type: StateType): boolean;
    xor_sets(compare_set: StateSet): StateSet;
}
export class Util  {
    constructor(config?: properties);
}
export class Attribute  {
    constructor(config?: properties);
    name: string;
    value: string;
    static set_free(attrib_set: AttributeSet): void;
}
export class Implementor  {
    constructor(config?: properties);
    ref_accessible(): Object;
}
export class KeyEventStruct  {
    constructor(config?: properties);
    type: number;
    state: number;
    keyval: number;
    length: number;
    string: string;
    keycode: number;
    timestamp: number;
}
export class PropertyValues  {
    constructor(config?: properties);
    property_name: string;
    old_value: GObject.Value;
    new_value: GObject.Value;
}
export class Range  {
    constructor(config?: properties);
    copy(): Range;
    free(): void;
    get_description(): string;
    get_lower_limit(): number;
    get_upper_limit(): number;
}
export class Rectangle  {
    constructor(config?: properties);
    x: number;
    y: number;
    width: number;
    height: number;
}
export class TextRange  {
    constructor(config?: properties);
    bounds: TextRectangle;
    start_offset: number;
    end_offset: number;
    content: string;
}
export class TextRectangle  {
    constructor(config?: properties);
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface Action  {
    do_action(i: number): boolean;
    get_description(i: number): string | null;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    set_description(i: number, desc: string): boolean;
}
export interface Component  {
    contains(x: number, y: number, coord_type: CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: CoordType): [number | null,number | null,number | null,number | null];
    get_layer(): Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: CoordType): [number | null,number | null];
    get_size(): [number | null,number | null];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: ScrollType): boolean;
    scroll_to_point(coords: CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean;
    set_position(x: number, y: number, coord_type: CoordType): boolean;
    set_size(width: number, height: number): boolean;
}
export interface Document  {
    get_attribute_value(attribute_name: string): string | null;
    get_attributes(): AttributeSet;
    get_current_page_number(): number;
    get_document(): object | null;
    get_document_type(): string;
    get_locale(): string;
    get_page_count(): number;
    set_attribute_value(attribute_name: string, attribute_value: string): boolean;
}
export interface EditableText  {
    copy_text(start_pos: number, end_pos: number): void;
    cut_text(start_pos: number, end_pos: number): void;
    delete_text(start_pos: number, end_pos: number): void;
    insert_text(string: string, length: number, position: number): void;
    paste_text(position: number): void;
    set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean;
    set_text_contents(string: string): void;
}
export interface HyperlinkImpl  {
    get_hyperlink(): Hyperlink;
}
export interface Hypertext  {
    get_link(link_index: number): Hyperlink;
    get_link_index(char_index: number): number;
    get_n_links(): number;
}
export interface Image  {
    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: CoordType): [number | null,number | null];
    get_image_size(): [number | null,number | null];
    set_image_description(description: string): boolean;
}
export interface ImplementorIface  {
}
export interface Selection  {
    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
}
export interface StreamableContent  {
    get_mime_type(i: number): string;
    get_n_mime_types(): number;
    get_stream(mime_type: string): GLib.IOChannel;
    get_uri(mime_type: string): string | null;
}
export interface Table  {
    add_column_selection(column: number): boolean;
    add_row_selection(row: number): boolean;
    get_caption(): Object | null;
    get_column_at_index(index_: number): number;
    get_column_description(column: number): string;
    get_column_extent_at(row: number, column: number): number;
    get_column_header(column: number): Object | null;
    get_index_at(row: number, column: number): number;
    get_n_columns(): number;
    get_n_rows(): number;
    get_row_at_index(index_: number): number;
    get_row_description(row: number): string | null;
    get_row_extent_at(row: number, column: number): number;
    get_row_header(row: number): Object | null;
    get_selected_columns(selected: number): number;
    get_selected_rows(selected: number): number;
    get_summary(): Object;
    is_column_selected(column: number): boolean;
    is_row_selected(row: number): boolean;
    is_selected(row: number, column: number): boolean;
    ref_at(row: number, column: number): Object;
    remove_column_selection(column: number): boolean;
    remove_row_selection(row: number): boolean;
    set_caption(caption: Object): void;
    set_column_description(column: number, description: string): void;
    set_column_header(column: number, header: Object): void;
    set_row_description(row: number, description: string): void;
    set_row_header(row: number, header: Object): void;
    set_summary(accessible: Object): void;
}
export interface TableCell  {
    get_column_header_cells(): Object[];
    get_column_span(): number;
    get_position(): [boolean, number,number];
    get_row_column_span(): [boolean, number,number,number,number];
    get_row_header_cells(): Object[];
    get_row_span(): number;
    get_table(): Object;
}
export interface Text  {
    add_selection(start_offset: number, end_offset: number): boolean;
    get_bounded_ranges(rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType): TextRange[];
    get_caret_offset(): number;
    get_character_at_offset(offset: number): number;
    get_character_count(): number;
    get_character_extents(offset: number, coords: CoordType): [number | null,number | null,number | null,number | null];
    get_default_attributes(): AttributeSet;
    get_n_selections(): number;
    get_offset_at_point(x: number, y: number, coords: CoordType): number;
    get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): [TextRectangle];
    get_run_attributes(offset: number): [AttributeSet, number,number];
    get_selection(selection_num: number): [string, number,number];
    get_string_at_offset(offset: number, granularity: TextGranularity): [string | null, number,number];
    get_text(start_offset: number, end_offset: number): string;
    get_text_after_offset(offset: number, boundary_type: TextBoundary): [string, number,number];
    get_text_at_offset(offset: number, boundary_type: TextBoundary): [string, number,number];
    get_text_before_offset(offset: number, boundary_type: TextBoundary): [string, number,number];
    remove_selection(selection_num: number): boolean;
    scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
    scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean;
    set_caret_offset(offset: number): boolean;
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
}
export interface Value  {
    get_current_value(): [GObject.Value];
    get_increment(): number;
    get_maximum_value(): [GObject.Value];
    get_minimum_increment(): [GObject.Value];
    get_minimum_value(): [GObject.Value];
    get_range(): Range | null;
    get_sub_ranges(): string[];
    get_value_and_text(): [number,string | null];
    set_current_value(value: GObject.Value): boolean;
    set_value(new_value: number): void;
}
export interface Window  {
}