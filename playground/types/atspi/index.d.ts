
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as DBus from "dbus";
import * as Atspi from "atspi";
/**
 * atspi.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type DeviceListenerCB = (stroke: DeviceEvent, user_data: object | null) => boolean;
export type DeviceListenerSimpleCB = (stroke: DeviceEvent) => boolean;
export type EventListenerCB = (event: Event, user_data: object | null) => void;
export type EventListenerSimpleCB = (event: Event) => void;
export const COMPONENTLAYER_COUNT: number;
export const COORD_TYPE_COUNT: number;
export const DBUS_INTERFACE_ACCESSIBLE: string;
export const DBUS_INTERFACE_ACTION: string;
export const DBUS_INTERFACE_APPLICATION: string;
export const DBUS_INTERFACE_CACHE: string;
export const DBUS_INTERFACE_COLLECTION: string;
export const DBUS_INTERFACE_COMPONENT: string;
export const DBUS_INTERFACE_DEC: string;
export const DBUS_INTERFACE_DEVICE_EVENT_LISTENER: string;
export const DBUS_INTERFACE_DOCUMENT: string;
export const DBUS_INTERFACE_EDITABLE_TEXT: string;
export const DBUS_INTERFACE_EVENT_KEYBOARD: string;
export const DBUS_INTERFACE_EVENT_MOUSE: string;
export const DBUS_INTERFACE_EVENT_OBJECT: string;
export const DBUS_INTERFACE_EVENT_SCREEN_READER: string;
export const DBUS_INTERFACE_HYPERLINK: string;
export const DBUS_INTERFACE_HYPERTEXT: string;
export const DBUS_INTERFACE_IMAGE: string;
export const DBUS_INTERFACE_REGISTRY: string;
export const DBUS_INTERFACE_SELECTION: string;
export const DBUS_INTERFACE_SOCKET: string;
export const DBUS_INTERFACE_TABLE: string;
export const DBUS_INTERFACE_TABLE_CELL: string;
export const DBUS_INTERFACE_TEXT: string;
export const DBUS_INTERFACE_VALUE: string;
export const DBUS_NAME_REGISTRY: string;
export const DBUS_PATH_DEC: string;
export const DBUS_PATH_NULL: string;
export const DBUS_PATH_REGISTRY: string;
export const DBUS_PATH_ROOT: string;
export const DBUS_PATH_SCREEN_READER: string;
export const EVENTTYPE_COUNT: number;
export const KEYEVENTTYPE_COUNT: number;
export const KEYSYNTHTYPE_COUNT: number;
export const MATCHTYPES_COUNT: number;
export const MODIFIERTYPE_COUNT: number;
export const RELATIONTYPE_COUNT: number;
export const ROLE_COUNT: number;
export const SCROLLTYPE_COUNT: number;
export const SORTORDER_COUNT: number;
export const STATETYPE_COUNT: number;
export const TEXT_BOUNDARY_TYPE_COUNT: number;
export const TEXT_CLIP_TYPE_COUNT: number;
/**
 * Removes a device event listener from the registry's listener queue,
 *            ceasing notification of events of the specified type.
 */
export function deregister_device_event_listener(listener: DeviceListener, filter: object | null): boolean;
/**
 * Removes a keystroke event listener from the registry's listener queue,
 *            ceasing notification of events with modifiers matching @mod
 * mask.
 */
export function deregister_keystroke_listener(listener: DeviceListener, key_set: KeyDefinition[] | null, modmask: KeyMaskType, event_types: KeyEventMask): boolean;
/**
 * Starts/enters the main event loop for the AT-SPI services.
 * NOTE: This method does not return control; it is exited via a call to
 * #atspi_event_quit from within an event handler.
 */
export function event_main(): void;
/**
 * Quits the last main event loop for the AT-SPI services,
 * See: #atspi_event_main
 */
export function event_quit(): void;
/**
 * Disconnects from #AtspiRegistry instances and releases
 * any floating resources. Call only once at exit.
 */
export function exit(): number;
/**
 * Synthesizes a keyboard event (as if a hardware keyboard event occurred
 *  in the
 * current UI context).
 */
export function generate_keyboard_event(keyval: number, keystring: string | null, synth_type: KeySynthType): boolean;
/**
 * Synthesizes a mouse event at a specific screen coordinate.
 * Most AT clients should use the #AccessibleAction interface when
 * tempted to generate mouse events, rather than this method.
 * Event names: b1p = button 1 press; b2r = button 2 release;
 *              b3c = button 3 click; b2d = button 2 double-click;
 *              abs = absolute motion; rel = relative motion.
 */
export function generate_mouse_event(x: number, y: number, name: string): boolean;
/**
 * Gets the virtual desktop indicated by index @i.
 * NOTE: currently multiple virtual desktops are not implemented;
 * as a consequence, any @i value different from 0 will not return a
 * virtual desktop - instead it will return NULL.
 */
export function get_desktop(i: number): Accessible;
/**
 * Gets the number of virtual desktops.
 * NOTE: multiple virtual desktops are not implemented yet; as a
 * consequence, this function always returns 1.
 */
export function get_desktop_count(): number;
/**
 * Gets the list of virtual desktops.  On return, @list will point
 *     to a newly-created, NULL terminated array of virtual desktop
 *     pointers.
 *     It is the responsibility of the caller to free this array when
 *     it is no longer needed.
 * NOTE: currently multiple virtual desktops are not implemented;
 * this implementation always returns a #Garray with a single
 * #AtspiAccessible desktop.
 */
export function get_desktop_list(): Accessible[];
/**
 * Connects to the accessibility registry and initializes the SPI.
 */
export function init(): number;
/**
 * Indicates whether AT-SPI has been initialized.
 */
export function is_initialized(): boolean;
/**
 * Registers a listener for device events, for instance button events.
 */
export function register_device_event_listener(listener: DeviceListener, event_types: DeviceEventMask, filter: object | null): boolean;
/**
 * Registers a listener for keystroke events, either pre-emptively for
 *             all windows (%ATSPI_KEYLISTENER_ALL_WINDOWS),
 *             non-preemptively (%ATSPI_KEYLISTENER_NOSYNC), or
 *             pre-emptively at the toolkit level (%ATSPI_KEYLISTENER_CAN
 * CONSUME).
 *             If ALL_WINDOWS or CANCONSUME are used, the event is consum
 * ed
 *             upon receipt if one of @listener's callbacks returns %TRUE
 *             (other sync_type values may be available in the future).
 */
export function register_keystroke_listener(listener: DeviceListener, key_set: KeyDefinition[] | null, modmask: KeyMaskType, event_types: KeyEventMask, sync_type: KeyListenerSyncType): boolean;
/**
 * Gets a localizable string that indicates the name of an #AtspiRole.
 * <em>DEPRECATED.</em>
 */
export function role_get_name(role: Role): string;
/**
 * Sets the main loop context that AT-SPI should assume is in use when
 * setting an idle callback.
 * This function should be called by application-side implementors (ie,
 * at-spi2-atk) when it is desirable to re-enter the main loop.
 */
export function set_main_context(cnx: GLib.MainContext): void;
/**
 * Sets the reference window that will be used when atspi_generate_mouse_
 * event
 * is called. Coordinates will be assumed to be relative to this window. 
 * This
 * is needed because, due to Wayland's security model, it is not currentl
 * y
 * possible to retrieve global coordinates.
 * If NULL is passed, then AT-SPI will use the window that has focus at t
 * he
 * time that atspi_generate_mouse_event is called.
 */
export function set_reference_window(accessible: Accessible): void;
/**
 * Set the timeout used for method calls. If this is not set explicitly,
 * a default of 0.8 ms is used.
 * Note that at-spi2-registryd currently uses a timeout of 3 seconds when
 * sending a keyboard event notification. This means that, if an AT makes
 * a call in response to the keyboard notification and the application
 * being called does not respond before the timeout is reached,
 * at-spi2-registryd will time out on the keyboard event notification and
 * pass the key onto the application (ie, reply to indicate that the key
 * was not consumed), so this may make it undesirable to set a timeout
 * larger than 3 seconds.
 * By default, the normal timeout is set to 800 ms, and the application s
 * tartup
 * timeout is set to 15 seconds.
 */
export function set_timeout(val: number, startup_time: number): void;
export enum CollectionMatchType {
    INVALID = 0,
    ALL = 1,
    ANY = 2,
    NONE = 3,
    EMPTY = 4,
    LAST_DEFINED = 5,
}
export enum CollectionSortOrder {
    INVALID = 0,
    CANONICAL = 1,
    FLOW = 2,
    TAB = 3,
    REVERSE_CANONICAL = 4,
    REVERSE_FLOW = 5,
    REVERSE_TAB = 6,
    LAST_DEFINED = 7,
}
export enum CollectionTreeTraversalType {
    RESTRICT_CHILDREN = 0,
    RESTRICT_SIBLING = 1,
    INORDER = 2,
    LAST_DEFINED = 3,
}
export enum ComponentLayer {
    INVALID = 0,
    BACKGROUND = 1,
    CANVAS = 2,
    WIDGET = 3,
    MDI = 4,
    POPUP = 5,
    OVERLAY = 6,
    WINDOW = 7,
    LAST_DEFINED = 8,
}
export enum CoordType {
    SCREEN = 0,
    WINDOW = 1,
    PARENT = 2,
}
export enum EventType {
    KEY_PRESSED_EVENT = 0,
    KEY_RELEASED_EVENT = 1,
    BUTTON_PRESSED_EVENT = 2,
    BUTTON_RELEASED_EVENT = 3,
}
export enum KeyEventType {
    PRESSED = 0,
    RELEASED = 1,
}
export enum KeySynthType {
    PRESS = 0,
    RELEASE = 1,
    PRESSRELEASE = 2,
    SYM = 3,
    STRING = 4,
    LOCKMODIFIERS = 5,
    UNLOCKMODIFIERS = 6,
}
export enum LocaleType {
    MESSAGES = 0,
    COLLATE = 1,
    CTYPE = 2,
    MONETARY = 3,
    NUMERIC = 4,
    TIME = 5,
}
export enum ModifierType {
    SHIFT = 0,
    SHIFTLOCK = 1,
    CONTROL = 2,
    ALT = 3,
    META = 4,
    META2 = 5,
    META3 = 6,
    NUMLOCK = 14,
}
export enum RelationType {
    NULL = 0,
    LABEL_FOR = 1,
    LABELLED_BY = 2,
    CONTROLLER_FOR = 3,
    CONTROLLED_BY = 4,
    MEMBER_OF = 5,
    TOOLTIP_FOR = 6,
    NODE_CHILD_OF = 7,
    NODE_PARENT_OF = 8,
    EXTENDED = 9,
    FLOWS_TO = 10,
    FLOWS_FROM = 11,
    SUBWINDOW_OF = 12,
    EMBEDS = 13,
    EMBEDDED_BY = 14,
    POPUP_FOR = 15,
    PARENT_WINDOW_OF = 16,
    DESCRIPTION_FOR = 17,
    DESCRIBED_BY = 18,
    DETAILS = 19,
    DETAILS_FOR = 20,
    ERROR_MESSAGE = 21,
    ERROR_FOR = 22,
    LAST_DEFINED = 23,
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
    FOCUS_TRAVERSABLE = 21,
    FONT_CHOOSER = 22,
    FRAME = 23,
    GLASS_PANE = 24,
    HTML_CONTAINER = 25,
    ICON = 26,
    IMAGE = 27,
    INTERNAL_FRAME = 28,
    LABEL = 29,
    LAYERED_PANE = 30,
    LIST = 31,
    LIST_ITEM = 32,
    MENU = 33,
    MENU_BAR = 34,
    MENU_ITEM = 35,
    OPTION_PANE = 36,
    PAGE_TAB = 37,
    PAGE_TAB_LIST = 38,
    PANEL = 39,
    PASSWORD_TEXT = 40,
    POPUP_MENU = 41,
    PROGRESS_BAR = 42,
    PUSH_BUTTON = 43,
    RADIO_BUTTON = 44,
    RADIO_MENU_ITEM = 45,
    ROOT_PANE = 46,
    ROW_HEADER = 47,
    SCROLL_BAR = 48,
    SCROLL_PANE = 49,
    SEPARATOR = 50,
    SLIDER = 51,
    SPIN_BUTTON = 52,
    SPLIT_PANE = 53,
    STATUS_BAR = 54,
    TABLE = 55,
    TABLE_CELL = 56,
    TABLE_COLUMN_HEADER = 57,
    TABLE_ROW_HEADER = 58,
    TEAROFF_MENU_ITEM = 59,
    TERMINAL = 60,
    TEXT = 61,
    TOGGLE_BUTTON = 62,
    TOOL_BAR = 63,
    TOOL_TIP = 64,
    TREE = 65,
    TREE_TABLE = 66,
    UNKNOWN = 67,
    VIEWPORT = 68,
    WINDOW = 69,
    EXTENDED = 70,
    HEADER = 71,
    FOOTER = 72,
    PARAGRAPH = 73,
    RULER = 74,
    APPLICATION = 75,
    AUTOCOMPLETE = 76,
    EDITBAR = 77,
    EMBEDDED = 78,
    ENTRY = 79,
    CHART = 80,
    CAPTION = 81,
    DOCUMENT_FRAME = 82,
    HEADING = 83,
    PAGE = 84,
    SECTION = 85,
    REDUNDANT_OBJECT = 86,
    FORM = 87,
    LINK = 88,
    INPUT_METHOD_WINDOW = 89,
    TABLE_ROW = 90,
    TREE_ITEM = 91,
    DOCUMENT_SPREADSHEET = 92,
    DOCUMENT_PRESENTATION = 93,
    DOCUMENT_TEXT = 94,
    DOCUMENT_WEB = 95,
    DOCUMENT_EMAIL = 96,
    COMMENT = 97,
    LIST_BOX = 98,
    GROUPING = 99,
    IMAGE_MAP = 100,
    NOTIFICATION = 101,
    INFO_BAR = 102,
    LEVEL_BAR = 103,
    TITLE_BAR = 104,
    BLOCK_QUOTE = 105,
    AUDIO = 106,
    VIDEO = 107,
    DEFINITION = 108,
    ARTICLE = 109,
    LANDMARK = 110,
    LOG = 111,
    MARQUEE = 112,
    MATH = 113,
    RATING = 114,
    TIMER = 115,
    STATIC = 116,
    MATH_FRACTION = 117,
    MATH_ROOT = 118,
    SUBSCRIPT = 119,
    SUPERSCRIPT = 120,
    DESCRIPTION_LIST = 121,
    DESCRIPTION_TERM = 122,
    DESCRIPTION_VALUE = 123,
    FOOTNOTE = 124,
    CONTENT_DELETION = 125,
    CONTENT_INSERTION = 126,
    LAST_DEFINED = 127,
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
    COLLAPSED = 5,
    DEFUNCT = 6,
    EDITABLE = 7,
    ENABLED = 8,
    EXPANDABLE = 9,
    EXPANDED = 10,
    FOCUSABLE = 11,
    FOCUSED = 12,
    HAS_TOOLTIP = 13,
    HORIZONTAL = 14,
    ICONIFIED = 15,
    MODAL = 16,
    MULTI_LINE = 17,
    MULTISELECTABLE = 18,
    OPAQUE = 19,
    PRESSED = 20,
    RESIZABLE = 21,
    SELECTABLE = 22,
    SELECTED = 23,
    SENSITIVE = 24,
    SHOWING = 25,
    SINGLE_LINE = 26,
    STALE = 27,
    TRANSIENT = 28,
    VERTICAL = 29,
    VISIBLE = 30,
    MANAGES_DESCENDANTS = 31,
    INDETERMINATE = 32,
    REQUIRED = 33,
    TRUNCATED = 34,
    ANIMATED = 35,
    INVALID_ENTRY = 36,
    SUPPORTS_AUTOCOMPLETION = 37,
    SELECTABLE_TEXT = 38,
    IS_DEFAULT = 39,
    VISITED = 40,
    CHECKABLE = 41,
    HAS_POPUP = 42,
    READ_ONLY = 43,
    LAST_DEFINED = 44,
}
export enum TextBoundaryType {
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
export type ControllerEventMask = number;
export type DeviceEventMask = number;
export type KeyEventMask = number;
export type KeyMaskType = number;
export type KeystrokeListener = void;
export enum Cache {
    NONE = 0,
    PARENT = 1,
    CHILDREN = 2,
    NAME = 4,
    DESCRIPTION = 8,
    STATES = 16,
    ROLE = 32,
    INTERFACES = 64,
    ATTRIBUTES = 128,
    ALL = 1073741823,
    DEFAULT = 127,
    UNDEFINED = 1073741824,
}
export enum KeyListenerSyncType {
    NOSYNC = 0,
    SYNCHRONOUS = 1,
    CANCONSUME = 2,
    ALL_WINDOWS = 4,
}
export class Accessible  {
    constructor(config?: properties);
    readonly accessible_parent: Accessible;
    readonly children: object[];
    readonly role: Role;
    readonly interfaces: number;
    readonly name: string;
    readonly description: string;
    readonly states: StateSet;
    readonly attributes: GLib.HashTable;
    readonly cached_properties: number;
    readonly priv: AccessiblePrivate;
    clear_cache(): void;
    get_accessible_id(): string;
    get_action(): Action;
    get_action_iface(): Action;
    get_application(): Accessible;
    get_atspi_version(): string;
    get_attributes(): GLib.HashTable;
    get_attributes_as_array(): string[];
    get_child_at_index(child_index: number): Accessible;
    get_child_count(): number;
    get_collection(): Collection;
    get_collection_iface(): Collection;
    get_component(): Component;
    get_component_iface(): Component;
    get_description(): string;
    get_document(): Document;
    get_document_iface(): Document;
    get_editable_text(): EditableText;
    get_editable_text_iface(): EditableText;
    get_hyperlink(): Hyperlink;
    get_hypertext(): Hypertext;
    get_hypertext_iface(): Hypertext;
    get_id(): number;
    get_image(): Image;
    get_image_iface(): Image;
    get_index_in_parent(): number;
    get_interfaces(): string[];
    get_localized_role_name(): string;
    get_name(): string;
    get_object_locale(): string;
    get_parent(): Accessible | null;
    get_process_id(): number;
    get_relation_set(): Relation[];
    get_role(): Role;
    get_role_name(): string;
    get_selection(): Selection;
    get_selection_iface(): Selection;
    get_state_set(): StateSet;
    get_table(): Table;
    get_table_cell(): TableCell;
    get_table_iface(): Table;
    get_text(): Text;
    get_text_iface(): Text;
    get_toolkit_name(): string;
    get_toolkit_version(): string;
    get_value(): Value;
    get_value_iface(): Value;
    set_cache_mask(mask: Cache): void;
}
export class Application  {
    constructor(config?: properties);
    readonly hash: GLib.HashTable;
    readonly bus_name: string;
    readonly bus: DBus.Connection;
    readonly root: object;
    readonly cache: Cache;
    readonly toolkit_name: string;
    readonly toolkit_version: string;
    readonly atspi_version: string;
    readonly time_added: object;
}
export class DeviceListener extends GObject.Object {
    constructor(config?: properties);
    static new_simple(callback: DeviceListenerSimpleCB, callback_destroyed: GLib.DestroyNotify): DeviceListener;
    add_callback(callback: DeviceListenerCB, callback_destroyed: GLib.DestroyNotify, user_data: object | null): void;
    remove_callback(callback: DeviceListenerCB): void;
    vfunc_device_event(event: DeviceEvent): boolean;
}
export class EventListener extends GObject.Object {
    constructor(config?: properties);
    static new_simple(callback: EventListenerSimpleCB, callback_destroyed: GLib.DestroyNotify): EventListener;
    deregister(event_type: string): boolean;
    register(event_type: string): boolean;
    register_full(event_type: string, properties: string[] | null): boolean;
    static deregister_from_callback(callback: EventListenerCB, user_data: object | null, event_type: string): boolean;
    static register_from_callback(callback: EventListenerCB, user_data: object | null, callback_destroyed: GLib.DestroyNotify, event_type: string): boolean;
    static register_from_callback_full(callback: EventListenerCB | null, user_data: object | null, callback_destroyed: GLib.DestroyNotify, event_type: string, properties: string[]): boolean;
}
export class Hyperlink  {
    constructor(config?: properties);
    get_end_index(): number;
    get_index_range(): Range;
    get_n_anchors(): number;
    get_object(i: number): Accessible;
    get_start_index(): number;
    get_uri(i: number): string;
    is_valid(): boolean;
}
export class MatchRule extends GObject.Object {
    constructor(config?: properties);
}
export class Object  {
    constructor(config?: properties);
    readonly app: Application;
    readonly path: string;
}
export class Relation  {
    constructor(config?: properties);
    readonly relation_type: RelationType;
    readonly targets: object[];
    get_n_targets(): number;
    get_relation_type(): RelationType;
    get_target(i: number): Accessible;
}
export class StateSet extends GObject.Object {
    constructor(config?: properties);
    add(state: StateType): void;
    compare(set2: StateSet): StateSet;
    contains(state: StateType): boolean;
    equals(set2: StateSet): boolean;
    get_states(): StateType[];
    is_empty(): boolean;
    remove(state: StateType): void;
    set_by_name(name: string, enabled: boolean): void;
}
export class AccessiblePrivate  {
    constructor(config?: properties);
}
export class DeviceEvent  {
    constructor(config?: properties);
    type: EventType;
    id: number;
    hw_code: number;
    modifiers: number;
    timestamp: number;
    event_string: string;
    is_text: boolean;
}
export class Event  {
    constructor(config?: properties);
    type: string;
    source: Accessible;
    detail1: number;
    detail2: number;
    any_data: GObject.Value;
    sender: Accessible;
    static main(): void;
    static quit(): void;
}
export class EventListenerMode  {
    constructor(config?: properties);
    synchronous: boolean;
    preemptive: boolean;
    global: boolean;
}
export class KeyDefinition  {
    constructor(config?: properties);
    keycode: number;
    keysym: number;
    keystring: string;
    unused: number;
}
export class KeySet  {
    constructor(config?: properties);
    keysyms: number;
    keycodes: number;
    keystrings: string;
    len: number;
}
export class Point  {
    constructor(config?: properties);
    x: number;
    y: number;
    copy(): Point;
}
export class Range  {
    constructor(config?: properties);
    start_offset: number;
    end_offset: number;
    copy(): Range;
}
export class Rect  {
    constructor(config?: properties);
    x: number;
    y: number;
    width: number;
    height: number;
    copy(): Rect;
}
export class TextRange  {
    constructor(config?: properties);
    start_offset: number;
    end_offset: number;
    content: string;
}
export interface Action  {
    do_action(i: number): boolean;
    get_action_description(i: number): string;
    get_action_name(i: number): string;
    get_description(i: number): string;
    get_key_binding(i: number): string;
    get_localized_name(i: number): string;
    get_n_actions(): number;
    get_name(i: number): string;
}
export interface Collection  {
    get_active_descendant(): Accessible;
    get_matches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[];
    get_matches_from(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, count: number, traverse: boolean): Accessible[];
    get_matches_to(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, limit_scope: boolean, count: number, traverse: boolean): Accessible[];
    is_ancestor_of(test: Accessible): boolean;
}
export interface Component  {
    contains(x: number, y: number, ctype: CoordType): boolean;
    get_accessible_at_point(x: number, y: number, ctype: CoordType): Accessible | null;
    get_alpha(): number;
    get_extents(ctype: CoordType): Rect;
    get_layer(): ComponentLayer;
    get_mdi_z_order(): number;
    get_position(ctype: CoordType): Point;
    get_size(): Point;
    grab_focus(): boolean;
    scroll_to(type: ScrollType): boolean;
    scroll_to_point(coords: CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean;
    set_position(x: number, y: number, ctype: CoordType): boolean;
    set_size(width: number, height: number): boolean;
}
export interface Document  {
    get_attribute_value(attribute: string): string;
    get_attributes(): GLib.HashTable;
    get_current_page_number(): number;
    get_document_attribute_value(attribute: string): string;
    get_document_attributes(): GLib.HashTable;
    get_locale(): string;
    get_page_count(): number;
}
export interface EditableText  {
    copy_text(start_pos: number, end_pos: number): boolean;
    cut_text(start_pos: number, end_pos: number): boolean;
    delete_text(start_pos: number, end_pos: number): boolean;
    insert_text(position: number, text: string, length: number): boolean;
    paste_text(position: number): boolean;
    set_text_contents(new_contents: string): boolean;
}
export interface Hypertext  {
    get_link(link_index: number): Hyperlink | null;
    get_link_index(character_offset: number): number;
    get_n_links(): number;
}
export interface Image  {
    get_image_description(): string;
    get_image_extents(ctype: CoordType): Rect;
    get_image_locale(): string;
    get_image_position(ctype: CoordType): Point;
    get_image_size(): Point;
}
export interface Selection  {
    clear_selection(): boolean;
    deselect_child(child_index: number): boolean;
    deselect_selected_child(selected_child_index: number): boolean;
    get_n_selected_children(): number;
    get_selected_child(selected_child_index: number): Accessible;
    is_child_selected(child_index: number): boolean;
    select_all(): boolean;
    select_child(child_index: number): boolean;
}
export interface Table  {
    add_column_selection(column: number): boolean;
    add_row_selection(row: number): boolean;
    get_accessible_at(row: number, column: number): Accessible;
    get_caption(): Accessible;
    get_column_at_index(index: number): number;
    get_column_description(column: number): string;
    get_column_extent_at(row: number, column: number): number;
    get_column_header(column: number): Accessible;
    get_index_at(row: number, column: number): number;
    get_n_columns(): number;
    get_n_rows(): number;
    get_n_selected_columns(): number;
    get_n_selected_rows(): number;
    get_row_at_index(index: number): number;
    get_row_column_extents_at_index(index: number): [boolean, number,number,number,number,boolean];
    get_row_description(row: number): string;
    get_row_extent_at(row: number, column: number): number;
    get_row_header(row: number): Accessible;
    get_selected_columns(): number[];
    get_selected_rows(): number[];
    get_summary(): Accessible;
    is_column_selected(column: number): boolean;
    is_row_selected(row: number): boolean;
    is_selected(row: number, column: number): boolean;
    remove_column_selection(column: number): boolean;
    remove_row_selection(row: number): boolean;
}
export interface TableCell  {
    get_column_header_cells(): Accessible[];
    get_column_index(): number;
    get_column_span(): number;
    get_position(): [number, number,number];
    get_row_column_span(): [number,number,number,number];
    get_row_header_cells(): Accessible[];
    get_row_span(): number;
    get_table(): Accessible;
}
export interface Text  {
    add_selection(start_offset: number, end_offset: number): boolean;
    get_attribute_run(offset: number, include_defaults: boolean): [GLib.HashTable, number,number];
    get_attribute_value(offset: number, attribute_name: string): string | null;
    get_attributes(offset: number): [GLib.HashTable, number,number];
    get_bounded_ranges(x: number, y: number, width: number, height: number, type: CoordType, clipTypeX: TextClipType, clipTypeY: TextClipType): TextRange[];
    get_caret_offset(): number;
    get_character_at_offset(offset: number): number;
    get_character_count(): number;
    get_character_extents(offset: number, type: CoordType): Rect;
    get_default_attributes(): GLib.HashTable;
    get_n_selections(): number;
    get_offset_at_point(x: number, y: number, type: CoordType): number;
    get_range_extents(start_offset: number, end_offset: number, type: CoordType): Rect;
    get_selection(selection_num: number): Range;
    get_string_at_offset(offset: number, granularity: TextGranularity): TextRange;
    get_text(start_offset: number, end_offset: number): string;
    get_text_after_offset(offset: number, type: TextBoundaryType): TextRange;
    get_text_at_offset(offset: number, type: TextBoundaryType): TextRange;
    get_text_attribute_value(offset: number, attribute_name: string): string | null;
    get_text_attributes(offset: number): [GLib.HashTable, number,number];
    get_text_before_offset(offset: number, type: TextBoundaryType): TextRange;
    remove_selection(selection_num: number): boolean;
    scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
    scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean;
    set_caret_offset(new_offset: number): boolean;
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
}
export interface Value  {
    get_current_value(): number;
    get_maximum_value(): number;
    get_minimum_increment(): number;
    get_minimum_value(): number;
    set_current_value(new_value: number): boolean;
}