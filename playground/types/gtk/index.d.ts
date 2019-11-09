
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Atk from "atk";
import * as Gdk from "gdk";
import * as xlib from "xlib";
import * as Gtk from "gtk";
import * as GdkPixbuf from "gdkpixbuf";
import * as Pango from "pango";
import * as cairo from "cairo";
/**
 * gtk.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type AccelGroupActivate = (accel_group: AccelGroup, acceleratable: GObject.Object, keyval: number, modifier: Gdk.ModifierType) => boolean;
export type AccelGroupFindFunc = (key: AccelKey, closure: GObject.Closure, data: object | null) => boolean;
export type AccelMapForeach = (data: object | null, accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType, changed: boolean) => void;
export type AssistantPageFunc = (current_page: number, data: object | null) => number;
export type BuilderConnectFunc = (builder: Builder, object: GObject.Object, signal_name: string, handler_name: string, connect_object: GObject.Object | null, flags: GObject.ConnectFlags, user_data: object | null) => void;
export type CalendarDetailFunc = (calendar: Calendar, year: number, month: number, day: number, user_data: object | null) => string | null;
export type Callback = (widget: Widget, data: object | null) => void;
export type CellAllocCallback = (renderer: CellRenderer, cell_area: Gdk.Rectangle, cell_background: Gdk.Rectangle, data: object | null) => boolean;
export type CellCallback = (renderer: CellRenderer, data: object | null) => boolean;
export type CellLayoutDataFunc = (cell_layout: CellLayout, cell: CellRenderer, tree_model: TreeModel, iter: TreeIter, data: object | null) => void;
export type ClipboardClearFunc = (clipboard: Clipboard, user_data_or_owner: object | null) => void;
export type ClipboardGetFunc = (clipboard: Clipboard, selection_data: SelectionData, info: number, user_data_or_owner: object | null) => void;
export type ClipboardImageReceivedFunc = (clipboard: Clipboard, pixbuf: GdkPixbuf.Pixbuf, data: object | null) => void;
export type ClipboardReceivedFunc = (clipboard: Clipboard, selection_data: SelectionData, data: object | null) => void;
export type ClipboardRichTextReceivedFunc = (clipboard: Clipboard, format: Gdk.Atom, text: string | null, length: number, data: object | null) => void;
export type ClipboardTargetsReceivedFunc = (clipboard: Clipboard, atoms: Gdk.Atom[] | null, n_atoms: number, data: object | null) => void;
export type ClipboardTextReceivedFunc = (clipboard: Clipboard, text: string | null, data: object | null) => void;
export type ClipboardURIReceivedFunc = (clipboard: Clipboard, uris: string[], data: object | null) => void;
export type ColorSelectionChangePaletteFunc = (colors: Gdk.Color[], n_colors: number) => void;
export type ColorSelectionChangePaletteWithScreenFunc = (screen: Gdk.Screen, colors: Gdk.Color[], n_colors: number) => void;
export type EntryCompletionMatchFunc = (completion: EntryCompletion, key: string, iter: TreeIter, user_data: object | null) => boolean;
export type FileFilterFunc = (filter_info: FileFilterInfo, data: object | null) => boolean;
export type FlowBoxCreateWidgetFunc = (item: GObject.Object, user_data: object | null) => Widget;
export type FlowBoxFilterFunc = (child: FlowBoxChild, user_data: object | null) => boolean;
export type FlowBoxForeachFunc = (box: FlowBox, child: FlowBoxChild, user_data: object | null) => void;
export type FlowBoxSortFunc = (child1: FlowBoxChild, child2: FlowBoxChild, user_data: object | null) => number;
export type FontFilterFunc = (family: Pango.FontFamily, face: Pango.FontFace, data: object | null) => boolean;
export type IconViewForeachFunc = (icon_view: IconView, path: TreePath, data: object | null) => void;
export type KeySnoopFunc = (grab_widget: Widget, event: Gdk.EventKey, func_data: object | null) => number;
export type ListBoxCreateWidgetFunc = (item: GObject.Object, user_data: object | null) => Widget;
export type ListBoxFilterFunc = (row: ListBoxRow, user_data: object | null) => boolean;
export type ListBoxForeachFunc = (box: ListBox, row: ListBoxRow, user_data: object | null) => void;
export type ListBoxSortFunc = (row1: ListBoxRow, row2: ListBoxRow, user_data: object | null) => number;
export type ListBoxUpdateHeaderFunc = (row: ListBoxRow, before: ListBoxRow | null, user_data: object | null) => void;
export type MenuDetachFunc = (attach_widget: Widget, menu: Menu) => void;
export type MenuPositionFunc = (menu: Menu, x: number, y: number, user_data: object | null) => void;
export type ModuleDisplayInitFunc = (display: Gdk.Display) => void;
export type ModuleInitFunc = (argc: number | null, argv: string[] | null) => void;
export type PageSetupDoneFunc = (page_setup: PageSetup, data: object | null) => void;
export type PrintSettingsFunc = (key: string, value: string, user_data: object | null) => void;
export type RcPropertyParser = (pspec: GObject.ParamSpec, rc_string: GLib.String, property_value: GObject.Value) => boolean;
export type RecentFilterFunc = (filter_info: RecentFilterInfo, user_data: object | null) => boolean;
export type RecentSortFunc = (a: RecentInfo, b: RecentInfo, user_data: object | null) => number;
export type StylePropertyParser = (string: string, value: GObject.Value) => boolean;
export type TextBufferDeserializeFunc = (register_buffer: TextBuffer, content_buffer: TextBuffer, iter: TextIter, data: number[], length: number, create_tags: boolean, user_data: object | null) => boolean;
export type TextBufferSerializeFunc = (register_buffer: TextBuffer, content_buffer: TextBuffer, start: TextIter, end: TextIter, length: number, user_data: object | null) => number | null;
export type TextCharPredicate = (ch: number, user_data: object | null) => boolean;
export type TextTagTableForeach = (tag: TextTag, data: object | null) => void;
export type TickCallback = (widget: Widget, frame_clock: Gdk.FrameClock, user_data: object | null) => boolean;
export type TranslateFunc = (path: string, func_data: object | null) => string;
export type TreeCellDataFunc = (tree_column: TreeViewColumn, cell: CellRenderer, tree_model: TreeModel, iter: TreeIter, data: object | null) => void;
export type TreeDestroyCountFunc = (tree_view: TreeView, path: TreePath, children: number, user_data: object | null) => void;
export type TreeIterCompareFunc = (model: TreeModel, a: TreeIter, b: TreeIter, user_data: object | null) => number;
export type TreeModelFilterModifyFunc = (model: TreeModel, iter: TreeIter, column: number, data: object | null) => void;
export type TreeModelFilterVisibleFunc = (model: TreeModel, iter: TreeIter, data: object | null) => boolean;
export type TreeModelForeachFunc = (model: TreeModel, path: TreePath, iter: TreeIter, data: object | null) => boolean;
export type TreeSelectionForeachFunc = (model: TreeModel, path: TreePath, iter: TreeIter, data: object | null) => void;
export type TreeSelectionFunc = (selection: TreeSelection, model: TreeModel, path: TreePath, path_currently_selected: boolean, data: object | null) => boolean;
export type TreeViewColumnDropFunc = (tree_view: TreeView, column: TreeViewColumn, prev_column: TreeViewColumn, next_column: TreeViewColumn, data: object | null) => boolean;
export type TreeViewMappingFunc = (tree_view: TreeView, path: TreePath, user_data: object | null) => void;
export type TreeViewRowSeparatorFunc = (model: TreeModel, iter: TreeIter, data: object | null) => boolean;
export type TreeViewSearchEqualFunc = (model: TreeModel, column: number, key: string, iter: TreeIter, search_data: object | null) => boolean;
export type TreeViewSearchPositionFunc = (tree_view: TreeView, search_dialog: Widget, user_data: object | null) => void;
export const BINARY_AGE: number;
export const INPUT_ERROR: number;
export const INTERFACE_AGE: number;
export const LEVEL_BAR_OFFSET_FULL: string;
export const LEVEL_BAR_OFFSET_HIGH: string;
export const LEVEL_BAR_OFFSET_LOW: string;
export const MAJOR_VERSION: number;
export const MAX_COMPOSE_LEN: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const PAPER_NAME_A3: string;
export const PAPER_NAME_A4: string;
export const PAPER_NAME_A5: string;
export const PAPER_NAME_B5: string;
export const PAPER_NAME_EXECUTIVE: string;
export const PAPER_NAME_LEGAL: string;
export const PAPER_NAME_LETTER: string;
export const PATH_PRIO_MASK: number;
export const PRINT_SETTINGS_COLLATE: string;
export const PRINT_SETTINGS_DEFAULT_SOURCE: string;
export const PRINT_SETTINGS_DITHER: string;
export const PRINT_SETTINGS_DUPLEX: string;
export const PRINT_SETTINGS_FINISHINGS: string;
export const PRINT_SETTINGS_MEDIA_TYPE: string;
export const PRINT_SETTINGS_NUMBER_UP: string;
export const PRINT_SETTINGS_NUMBER_UP_LAYOUT: string;
export const PRINT_SETTINGS_N_COPIES: string;
export const PRINT_SETTINGS_ORIENTATION: string;
export const PRINT_SETTINGS_OUTPUT_BASENAME: string;
export const PRINT_SETTINGS_OUTPUT_BIN: string;
export const PRINT_SETTINGS_OUTPUT_DIR: string;
export const PRINT_SETTINGS_OUTPUT_FILE_FORMAT: string;
export const PRINT_SETTINGS_OUTPUT_URI: string;
export const PRINT_SETTINGS_PAGE_RANGES: string;
export const PRINT_SETTINGS_PAGE_SET: string;
export const PRINT_SETTINGS_PAPER_FORMAT: string;
export const PRINT_SETTINGS_PAPER_HEIGHT: string;
export const PRINT_SETTINGS_PAPER_WIDTH: string;
export const PRINT_SETTINGS_PRINTER: string;
export const PRINT_SETTINGS_PRINTER_LPI: string;
export const PRINT_SETTINGS_PRINT_PAGES: string;
export const PRINT_SETTINGS_QUALITY: string;
export const PRINT_SETTINGS_RESOLUTION: string;
export const PRINT_SETTINGS_RESOLUTION_X: string;
export const PRINT_SETTINGS_RESOLUTION_Y: string;
export const PRINT_SETTINGS_REVERSE: string;
export const PRINT_SETTINGS_SCALE: string;
export const PRINT_SETTINGS_USE_COLOR: string;
export const PRINT_SETTINGS_WIN32_DRIVER_EXTRA: string;
export const PRINT_SETTINGS_WIN32_DRIVER_VERSION: string;
export const PRIORITY_RESIZE: number;
export const STOCK_ABOUT: string;
export const STOCK_ADD: string;
export const STOCK_APPLY: string;
export const STOCK_BOLD: string;
export const STOCK_CANCEL: string;
export const STOCK_CAPS_LOCK_WARNING: string;
export const STOCK_CDROM: string;
export const STOCK_CLEAR: string;
export const STOCK_CLOSE: string;
export const STOCK_COLOR_PICKER: string;
export const STOCK_CONNECT: string;
export const STOCK_CONVERT: string;
export const STOCK_COPY: string;
export const STOCK_CUT: string;
export const STOCK_DELETE: string;
export const STOCK_DIALOG_AUTHENTICATION: string;
export const STOCK_DIALOG_ERROR: string;
export const STOCK_DIALOG_INFO: string;
export const STOCK_DIALOG_QUESTION: string;
export const STOCK_DIALOG_WARNING: string;
export const STOCK_DIRECTORY: string;
export const STOCK_DISCARD: string;
export const STOCK_DISCONNECT: string;
export const STOCK_DND: string;
export const STOCK_DND_MULTIPLE: string;
export const STOCK_EDIT: string;
export const STOCK_EXECUTE: string;
export const STOCK_FILE: string;
export const STOCK_FIND: string;
export const STOCK_FIND_AND_REPLACE: string;
export const STOCK_FLOPPY: string;
export const STOCK_FULLSCREEN: string;
export const STOCK_GOTO_BOTTOM: string;
export const STOCK_GOTO_FIRST: string;
export const STOCK_GOTO_LAST: string;
export const STOCK_GOTO_TOP: string;
export const STOCK_GO_BACK: string;
export const STOCK_GO_DOWN: string;
export const STOCK_GO_FORWARD: string;
export const STOCK_GO_UP: string;
export const STOCK_HARDDISK: string;
export const STOCK_HELP: string;
export const STOCK_HOME: string;
export const STOCK_INDENT: string;
export const STOCK_INDEX: string;
export const STOCK_INFO: string;
export const STOCK_ITALIC: string;
export const STOCK_JUMP_TO: string;
export const STOCK_JUSTIFY_CENTER: string;
export const STOCK_JUSTIFY_FILL: string;
export const STOCK_JUSTIFY_LEFT: string;
export const STOCK_JUSTIFY_RIGHT: string;
export const STOCK_LEAVE_FULLSCREEN: string;
export const STOCK_MEDIA_FORWARD: string;
export const STOCK_MEDIA_NEXT: string;
export const STOCK_MEDIA_PAUSE: string;
export const STOCK_MEDIA_PLAY: string;
export const STOCK_MEDIA_PREVIOUS: string;
export const STOCK_MEDIA_RECORD: string;
export const STOCK_MEDIA_REWIND: string;
export const STOCK_MEDIA_STOP: string;
export const STOCK_MISSING_IMAGE: string;
export const STOCK_NETWORK: string;
export const STOCK_NEW: string;
export const STOCK_NO: string;
export const STOCK_OK: string;
export const STOCK_OPEN: string;
export const STOCK_ORIENTATION_LANDSCAPE: string;
export const STOCK_ORIENTATION_PORTRAIT: string;
export const STOCK_ORIENTATION_REVERSE_LANDSCAPE: string;
export const STOCK_ORIENTATION_REVERSE_PORTRAIT: string;
export const STOCK_PAGE_SETUP: string;
export const STOCK_PASTE: string;
export const STOCK_PREFERENCES: string;
export const STOCK_PRINT: string;
export const STOCK_PRINT_ERROR: string;
export const STOCK_PRINT_PAUSED: string;
export const STOCK_PRINT_PREVIEW: string;
export const STOCK_PRINT_REPORT: string;
export const STOCK_PRINT_WARNING: string;
export const STOCK_PROPERTIES: string;
export const STOCK_QUIT: string;
export const STOCK_REDO: string;
export const STOCK_REFRESH: string;
export const STOCK_REMOVE: string;
export const STOCK_REVERT_TO_SAVED: string;
export const STOCK_SAVE: string;
export const STOCK_SAVE_AS: string;
export const STOCK_SELECT_ALL: string;
export const STOCK_SELECT_COLOR: string;
export const STOCK_SELECT_FONT: string;
export const STOCK_SORT_ASCENDING: string;
export const STOCK_SORT_DESCENDING: string;
export const STOCK_SPELL_CHECK: string;
export const STOCK_STOP: string;
export const STOCK_STRIKETHROUGH: string;
export const STOCK_UNDELETE: string;
export const STOCK_UNDERLINE: string;
export const STOCK_UNDO: string;
export const STOCK_UNINDENT: string;
export const STOCK_YES: string;
export const STOCK_ZOOM_100: string;
export const STOCK_ZOOM_FIT: string;
export const STOCK_ZOOM_IN: string;
export const STOCK_ZOOM_OUT: string;
export const STYLE_CLASS_ACCELERATOR: string;
export const STYLE_CLASS_ARROW: string;
export const STYLE_CLASS_BACKGROUND: string;
export const STYLE_CLASS_BOTTOM: string;
export const STYLE_CLASS_BUTTON: string;
export const STYLE_CLASS_CALENDAR: string;
export const STYLE_CLASS_CELL: string;
export const STYLE_CLASS_CHECK: string;
export const STYLE_CLASS_COMBOBOX_ENTRY: string;
export const STYLE_CLASS_CONTEXT_MENU: string;
export const STYLE_CLASS_CSD: string;
export const STYLE_CLASS_CURSOR_HANDLE: string;
export const STYLE_CLASS_DEFAULT: string;
export const STYLE_CLASS_DESTRUCTIVE_ACTION: string;
export const STYLE_CLASS_DIM_LABEL: string;
export const STYLE_CLASS_DND: string;
export const STYLE_CLASS_DOCK: string;
export const STYLE_CLASS_ENTRY: string;
export const STYLE_CLASS_ERROR: string;
export const STYLE_CLASS_EXPANDER: string;
export const STYLE_CLASS_FLAT: string;
export const STYLE_CLASS_FRAME: string;
export const STYLE_CLASS_GRIP: string;
export const STYLE_CLASS_HEADER: string;
export const STYLE_CLASS_HIGHLIGHT: string;
export const STYLE_CLASS_HORIZONTAL: string;
export const STYLE_CLASS_IMAGE: string;
export const STYLE_CLASS_INFO: string;
export const STYLE_CLASS_INLINE_TOOLBAR: string;
export const STYLE_CLASS_INSERTION_CURSOR: string;
export const STYLE_CLASS_LABEL: string;
export const STYLE_CLASS_LEFT: string;
export const STYLE_CLASS_LEVEL_BAR: string;
export const STYLE_CLASS_LINKED: string;
export const STYLE_CLASS_LIST: string;
export const STYLE_CLASS_LIST_ROW: string;
export const STYLE_CLASS_MARK: string;
export const STYLE_CLASS_MENU: string;
export const STYLE_CLASS_MENUBAR: string;
export const STYLE_CLASS_MENUITEM: string;
export const STYLE_CLASS_MESSAGE_DIALOG: string;
export const STYLE_CLASS_MONOSPACE: string;
export const STYLE_CLASS_NEEDS_ATTENTION: string;
export const STYLE_CLASS_NOTEBOOK: string;
export const STYLE_CLASS_OSD: string;
export const STYLE_CLASS_OVERSHOOT: string;
export const STYLE_CLASS_PANE_SEPARATOR: string;
export const STYLE_CLASS_PAPER: string;
export const STYLE_CLASS_POPOVER: string;
export const STYLE_CLASS_POPUP: string;
export const STYLE_CLASS_PRIMARY_TOOLBAR: string;
export const STYLE_CLASS_PROGRESSBAR: string;
export const STYLE_CLASS_PULSE: string;
export const STYLE_CLASS_QUESTION: string;
export const STYLE_CLASS_RADIO: string;
export const STYLE_CLASS_RAISED: string;
export const STYLE_CLASS_READ_ONLY: string;
export const STYLE_CLASS_RIGHT: string;
export const STYLE_CLASS_RUBBERBAND: string;
export const STYLE_CLASS_SCALE: string;
export const STYLE_CLASS_SCALE_HAS_MARKS_ABOVE: string;
export const STYLE_CLASS_SCALE_HAS_MARKS_BELOW: string;
export const STYLE_CLASS_SCROLLBAR: string;
export const STYLE_CLASS_SCROLLBARS_JUNCTION: string;
export const STYLE_CLASS_SEPARATOR: string;
export const STYLE_CLASS_SIDEBAR: string;
export const STYLE_CLASS_SLIDER: string;
export const STYLE_CLASS_SPINBUTTON: string;
export const STYLE_CLASS_SPINNER: string;
export const STYLE_CLASS_STATUSBAR: string;
export const STYLE_CLASS_SUBTITLE: string;
export const STYLE_CLASS_SUGGESTED_ACTION: string;
export const STYLE_CLASS_TITLE: string;
export const STYLE_CLASS_TITLEBAR: string;
export const STYLE_CLASS_TOOLBAR: string;
export const STYLE_CLASS_TOOLTIP: string;
export const STYLE_CLASS_TOP: string;
export const STYLE_CLASS_TOUCH_SELECTION: string;
export const STYLE_CLASS_TROUGH: string;
export const STYLE_CLASS_UNDERSHOOT: string;
export const STYLE_CLASS_VERTICAL: string;
export const STYLE_CLASS_VIEW: string;
export const STYLE_CLASS_WARNING: string;
export const STYLE_CLASS_WIDE: string;
export const STYLE_PROPERTY_BACKGROUND_COLOR: string;
export const STYLE_PROPERTY_BACKGROUND_IMAGE: string;
export const STYLE_PROPERTY_BORDER_COLOR: string;
export const STYLE_PROPERTY_BORDER_RADIUS: string;
export const STYLE_PROPERTY_BORDER_STYLE: string;
export const STYLE_PROPERTY_BORDER_WIDTH: string;
export const STYLE_PROPERTY_COLOR: string;
export const STYLE_PROPERTY_FONT: string;
export const STYLE_PROPERTY_MARGIN: string;
export const STYLE_PROPERTY_PADDING: string;
export const STYLE_PROVIDER_PRIORITY_APPLICATION: number;
export const STYLE_PROVIDER_PRIORITY_FALLBACK: number;
export const STYLE_PROVIDER_PRIORITY_SETTINGS: number;
export const STYLE_PROVIDER_PRIORITY_THEME: number;
export const STYLE_PROVIDER_PRIORITY_USER: number;
export const STYLE_REGION_COLUMN: string;
export const STYLE_REGION_COLUMN_HEADER: string;
export const STYLE_REGION_ROW: string;
export const STYLE_REGION_TAB: string;
export const TEXT_VIEW_PRIORITY_VALIDATE: number;
export const TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID: number;
export const TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID: number;
/**
 * Finds the first accelerator in any #GtkAccelGroup attached
 * to @object that matches @accel_key and @accel_mods, and
 * activates that accelerator.
 */
export function accel_groups_activate(object: GObject.Object, accel_key: number, accel_mods: Gdk.ModifierType): boolean;
/**
 * Gets a list of all accel groups which are attached to @object.
 */
export function accel_groups_from_object(object: GObject.Object): string[];
/**
 * Gets the modifier mask.
 * The modifier mask determines which modifiers are considered significan
 * t
 * for keyboard accelerators. See gtk_accelerator_set_default_mod_mask().
 */
export function accelerator_get_default_mod_mask(): Gdk.ModifierType;
/**
 * Converts an accelerator keyval and modifier mask into a string
 * which can be used to represent the accelerator to the user.
 */
export function accelerator_get_label(accelerator_key: number, accelerator_mods: Gdk.ModifierType): string;
/**
 * Converts an accelerator keyval and modifier mask
 * into a (possibly translated) string that can be displayed to
 * a user, similarly to gtk_accelerator_get_label(), but handling
 * keycodes.
 * This is only useful for system-level components, applications
 * should use gtk_accelerator_parse() instead.
 */
export function accelerator_get_label_with_keycode(display: Gdk.Display | null, accelerator_key: number, keycode: number, accelerator_mods: Gdk.ModifierType): string;
/**
 * Converts an accelerator keyval and modifier mask into a string
 * parseable by gtk_accelerator_parse(). For example, if you pass in
 * #GDK_KEY_q and #GDK_CONTROL_MASK, this function returns “<Control>q”.
 * If you need to display accelerators in the user interface,
 * see gtk_accelerator_get_label().
 */
export function accelerator_name(accelerator_key: number, accelerator_mods: Gdk.ModifierType): string;
/**
 * Converts an accelerator keyval and modifier mask
 * into a string parseable by gtk_accelerator_parse_with_keycode(),
 * similarly to gtk_accelerator_name() but handling keycodes.
 * This is only useful for system-level components, applications
 * should use gtk_accelerator_parse() instead.
 */
export function accelerator_name_with_keycode(display: Gdk.Display | null, accelerator_key: number, keycode: number, accelerator_mods: Gdk.ModifierType): string;
/**
 * Parses a string representing an accelerator. The format looks like
 * “<Control>a” or “<Shift><Alt>F1” or “<Release>z” (the last one is
 * for key release).
 * The parser is fairly liberal and allows lower or upper case, and also
 * abbreviations such as “<Ctl>” and “<Ctrl>”. Key names are parsed using
 * gdk_keyval_from_name(). For character keys the name is not the symbol,
 * but the lowercase name, e.g. one would use “<Ctrl>minus” instead of
 * “<Ctrl>-”.
 * If the parse fails, @accelerator_key and @accelerator_mods will
 * be set to 0 (zero).
 */
export function accelerator_parse(accelerator: string): [number | null,Gdk.ModifierType | null];
/**
 * Parses a string representing an accelerator, similarly to
 * gtk_accelerator_parse() but handles keycodes as well. This is only
 * useful for system-level components, applications should use
 * gtk_accelerator_parse() instead.
 * If @accelerator_codes is given and the result stored in it is non-%NUL
 * L,
 * the result must be freed with g_free().
 * If a keycode is present in the accelerator and no @accelerator_codes
 * is given, the parse will fail.
 * If the parse fails, @accelerator_key, @accelerator_mods and
 * @accelerator_codes will be set to 0 (zero).
 */
export function accelerator_parse_with_keycode(accelerator: string): [number | null,number[] | null,Gdk.ModifierType | null];
/**
 * Sets the modifiers that will be considered significant for keyboard
 * accelerators. The default mod mask depends on the GDK backend in use,
 * but will typically include #GDK_CONTROL_MASK | #GDK_SHIFT_MASK |
 * #GDK_MOD1_MASK | #GDK_SUPER_MASK | #GDK_HYPER_MASK | #GDK_META_MASK.
 * In other words, Control, Shift, Alt, Super, Hyper and Meta. Other
 * modifiers will by default be ignored by #GtkAccelGroup.
 * You must include at least the three modifiers Control, Shift
 * and Alt in any value you pass to this function.
 * The default mod mask should be changed on application startup,
 * before using any accelerator groups.
 */
export function accelerator_set_default_mod_mask(default_mod_mask: Gdk.ModifierType): void;
/**
 * Determines whether a given keyval and modifier mask constitute
 * a valid keyboard accelerator. For example, the #GDK_KEY_a keyval
 * plus #GDK_CONTROL_MASK is valid - this is a “Ctrl+a” accelerator.
 * But, you can't, for instance, use the #GDK_KEY_Control_L keyval
 * as an accelerator.
 */
export function accelerator_valid(keyval: number, modifiers: Gdk.ModifierType): boolean;
/**
 * Returns %TRUE if dialogs are expected to use an alternative
 * button order on the screen @screen. See
 * gtk_dialog_set_alternative_button_order() for more details
 * about alternative button order.
 * If you need to use this function, you should probably connect
 * to the ::notify:gtk-alternative-button-order signal on the
 * #GtkSettings object associated to @screen, in order to be
 * notified if the button order setting changes.
 */
export function alternative_dialog_button_order(screen: Gdk.Screen | null): boolean;
/**
 * Parses a signal description from @signal_desc and incorporates
 * it into @binding_set.
 * Signal descriptions may either bind a key combination to
 * one or more signals:
 * |[
 *   bind "key" {
 *     "signalname" (param, ...)
 *     ...
 *   }
 * ]|
 * Or they may also unbind a key combination:
 * |[
 *   unbind "key"
 * ]|
 * Key combinations must be in a format that can be parsed by
 * gtk_accelerator_parse().
 */
export function binding_entry_add_signal_from_string(binding_set: BindingSet, signal_desc: string): GLib.TokenType;
/**
 * Override or install a new key binding for @keyval with @modifiers on
 * @binding_set.
 */
export function binding_entry_add_signall(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType, signal_name: string, binding_args: string[]): void;
/**
 * Remove a binding previously installed via
 * gtk_binding_entry_add_signal() on @binding_set.
 */
export function binding_entry_remove(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
/**
 * Install a binding on @binding_set which causes key lookups
 * to be aborted, to prevent bindings from lower priority sets
 * to be activated.
 */
export function binding_entry_skip(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
/**
 * Find a binding set by its globally unique name.
 * The @set_name can either be a name used for gtk_binding_set_new()
 * or the type name of a class used in gtk_binding_set_by_class().
 */
export function binding_set_find(set_name: string): BindingSet | null;
/**
 * Find a key binding matching @keyval and @modifiers and activate the
 * binding on @object.
 */
export function bindings_activate(object: GObject.Object, keyval: number, modifiers: Gdk.ModifierType): boolean;
/**
 * Looks up key bindings for @object to find one matching
 * @event, and if one was found, activate it.
 */
export function bindings_activate_event(object: GObject.Object, event: Gdk.EventKey): boolean;
/**
 * 
 */
export function builder_error_quark(): GLib.Quark;
/**
 * This function is supposed to be called in #GtkWidget::draw
 * implementations for widgets that support multiple windows.
 * @cr must be untransformed from invoking of the draw function.
 * This function will return %TRUE if the contents of the given
 * @window are supposed to be drawn and %FALSE otherwise. Note
 * that when the drawing was not initiated by the windowing
 * system this function will return %TRUE for all windows, so
 * you need to draw the bottommost window first. Also, do not
 * use “else if” statements to check which window should be drawn.
 */
export function cairo_should_draw_window(cr: cairo.Context, window: Gdk.Window): boolean;
/**
 * Transforms the given cairo context @cr that from @widget-relative
 * coordinates to @window-relative coordinates.
 * If the @widget’s window is not an ancestor of @window, no
 * modification will be applied.
 * This is the inverse to the transformation GTK applies when
 * preparing an expose event to be emitted with the #GtkWidget::draw
 * signal. It is intended to help porting multiwindow widgets from
 * GTK+ 2 to the rendering architecture of GTK+ 3.
 */
export function cairo_transform_to_window(cr: cairo.Context, widget: Widget, window: Gdk.Window): void;
/**
 * Checks that the GTK+ library in use is compatible with the
 * given version. Generally you would pass in the constants
 * #GTK_MAJOR_VERSION, #GTK_MINOR_VERSION, #GTK_MICRO_VERSION
 * as the three arguments to this function; that produces
 * a check that the library in use is compatible with
 * the version of GTK+ the application or module was compiled
 * against.
 * Compatibility is defined by two things: first the version
 * of the running library is newer than the version
 * @required_major.required_minor.@required_micro. Second
 * the running library must be binary compatible with the
 * version @required_major.required_minor.@required_micro
 * (same major version.)
 * This function is primarily for GTK+ modules; the module
 * can call this function to check that it wasn’t loaded
 * into an incompatible version of GTK+. However, such a
 * check isn’t completely reliable, since the module may be
 * linked against an old version of GTK+ and calling the
 * old version of gtk_check_version(), but still get loaded
 * into an application using a newer version of GTK+.
 */
export function check_version(required_major: number, required_minor: number, required_micro: number): string | null;
/**
 * 
 */
export function css_provider_error_quark(): GLib.Quark;
/**
 * Adds a GTK+ grab on @device, so all the events on @device and its
 * associated pointer or keyboard (if any) are delivered to @widget.
 * If the @block_others parameter is %TRUE, any other devices will be
 * unable to interact with @widget during the grab.
 */
export function device_grab_add(widget: Widget, device: Gdk.Device, block_others: boolean): void;
/**
 * Removes a device grab from the given widget.
 * You have to pair calls to gtk_device_grab_add() and
 * gtk_device_grab_remove().
 */
export function device_grab_remove(widget: Widget, device: Gdk.Device): void;
/**
 * Prevents gtk_init(), gtk_init_check(), gtk_init_with_args() and
 * gtk_parse_args() from automatically
 * calling `setlocale (LC_ALL, "")`. You would
 * want to use this function if you wanted to set the locale for
 * your program to something other than the user’s locale, or if
 * you wanted to set different values for different locale categories.
 * Most programs should not need to call this function.
 */
export function disable_setlocale(): void;
/**
 * Distributes @extra_space to child @sizes by bringing smaller
 * children up to natural size first.
 * The remaining space will be added to the @minimum_size member of the
 * GtkRequestedSize struct. If all sizes reach their natural size then
 * the remaining space is returned.
 */
export function distribute_natural_allocation(extra_space: number, n_requested_sizes: number, sizes: RequestedSize): number;
/**
 * Cancels an ongoing drag operation on the source side.
 * If you want to be able to cancel a drag operation in this way,
 * you need to keep a pointer to the drag context, either from an
 * explicit call to gtk_drag_begin_with_coordinates(), or by
 * connecting to #GtkWidget::drag-begin.
 * If @context does not refer to an ongoing drag operation, this
 * function does nothing.
 * If a drag is cancelled in this way, the @result argument of
 * #GtkWidget::drag-failed is set to @GTK_DRAG_RESULT_ERROR.
 */
export function drag_cancel(context: Gdk.DragContext): void;
/**
 * Informs the drag source that the drop is finished, and
 * that the data of the drag will no longer be required.
 */
export function drag_finish(context: Gdk.DragContext, success: boolean, del: boolean, time_: number): void;
/**
 * Determines the source widget for a drag.
 */
export function drag_get_source_widget(context: Gdk.DragContext): Widget | null;
/**
 * Sets the icon for a particular drag to the default
 * icon.
 */
export function drag_set_icon_default(context: Gdk.DragContext): void;
/**
 * Sets the icon for a given drag from the given @icon.
 * See the documentation for gtk_drag_set_icon_name()
 * for more details about using icons in drag and drop.
 */
export function drag_set_icon_gicon(context: Gdk.DragContext, icon: Gio.Icon, hot_x: number, hot_y: number): void;
/**
 * Sets the icon for a given drag from a named themed icon. See
 * the docs for #GtkIconTheme for more details. Note that the
 * size of the icon depends on the icon theme (the icon is
 * loaded at the symbolic size #GTK_ICON_SIZE_DND), thus
 * @hot_x and @hot_y have to be used with care.
 */
export function drag_set_icon_name(context: Gdk.DragContext, icon_name: string, hot_x: number, hot_y: number): void;
/**
 * Sets @pixbuf as the icon for a given drag.
 */
export function drag_set_icon_pixbuf(context: Gdk.DragContext, pixbuf: GdkPixbuf.Pixbuf, hot_x: number, hot_y: number): void;
/**
 * Sets the icon for a given drag from a stock ID.
 */
export function drag_set_icon_stock(context: Gdk.DragContext, stock_id: string, hot_x: number, hot_y: number): void;
/**
 * Sets @surface as the icon for a given drag. GTK+ retains
 * references for the arguments, and will release them when
 * they are no longer needed.
 * To position the surface relative to the mouse, use
 * cairo_surface_set_device_offset() on @surface. The mouse
 * cursor will be positioned at the (0,0) coordinate of the
 * surface.
 */
export function drag_set_icon_surface(context: Gdk.DragContext, surface: cairo.Surface): void;
/**
 * Changes the icon for drag operation to a given widget.
 * GTK+ will not destroy the widget, so if you don’t want
 * it to persist, you should connect to the “drag-end”
 * signal and destroy it yourself.
 */
export function drag_set_icon_widget(context: Gdk.DragContext, widget: Widget, hot_x: number, hot_y: number): void;
/**
 * Draws a text caret on @cr at @location. This is not a style function
 * but merely a convenience function for drawing the standard cursor shap
 * e.
 */
export function draw_insertion_cursor(widget: Widget, cr: cairo.Context, location: Gdk.Rectangle, is_primary: boolean, direction: TextDirection, draw_arrow: boolean): void;
/**
 * Checks if any events are pending.
 * This can be used to update the UI and invoke timeouts etc.
 * while doing some time intensive computation.
 * ## Updating the UI during a long computation
 * |[<!-- language="C" -->
 *  // computation going on...
 *  while (gtk_events_pending ())
 *    gtk_main_iteration ();
 *  // ...computation continued
 * ]|
 */
export function events_pending(): boolean;
/**
 * Analogical to gtk_true(), this function does nothing
 * but always returns %FALSE.
 */
export function _false(): boolean;
/**
 * Registers an error quark for #GtkFileChooser if necessary.
 */
export function file_chooser_error_quark(): GLib.Quark;
/**
 * Returns the binary age as passed to `libtool`
 * when building the GTK+ library the process is running against.
 * If `libtool` means nothing to you, don't
 * worry about it.
 */
export function get_binary_age(): number;
/**
 * Obtains a copy of the event currently being processed by GTK+.
 * For example, if you are handling a #GtkButton::clicked signal,
 * the current event will be the #GdkEventButton that triggered
 * the ::clicked signal.
 */
export function get_current_event(): Gdk.Event | null;
/**
 * If there is a current event and it has a device, return that
 * device, otherwise return %NULL.
 */
export function get_current_event_device(): Gdk.Device | null;
/**
 * If there is a current event and it has a state field, place
 * that state field in @state and return %TRUE, otherwise return
 * %FALSE.
 */
export function get_current_event_state(): [boolean, Gdk.ModifierType];
/**
 * If there is a current event and it has a timestamp,
 * return that timestamp, otherwise return %GDK_CURRENT_TIME.
 */
export function get_current_event_time(): number;
/**
 * Returns the GTK+ debug flags.
 * This function is intended for GTK+ modules that want
 * to adjust their debug output based on GTK+ debug flags.
 */
export function get_debug_flags(): number;
/**
 * Returns the #PangoLanguage for the default language currently in
 * effect. (Note that this can change over the life of an
 * application.) The default language is derived from the current
 * locale. It determines, for example, whether GTK+ uses the
 * right-to-left or left-to-right text direction.
 * This function is equivalent to pango_language_get_default().
 * See that function for details.
 */
export function get_default_language(): Pango.Language;
/**
 * If @event is %NULL or the event was not associated with any widget,
 * returns %NULL, otherwise returns the widget that received the event
 * originally.
 */
export function get_event_widget(event: Gdk.Event): Widget | null;
/**
 * Returns the interface age as passed to `libtool`
 * when building the GTK+ library the process is running against.
 * If `libtool` means nothing to you, don't
 * worry about it.
 */
export function get_interface_age(): number;
/**
 * Get the direction of the current locale. This is the expected
 * reading direction for text and UI.
 * This function depends on the current locale being set with
 * setlocale() and will default to setting the %GTK_TEXT_DIR_LTR
 * direction otherwise. %GTK_TEXT_DIR_NONE will never be returned.
 * GTK+ sets the default text direction according to the locale
 * during gtk_init(), and you should normally use
 * gtk_widget_get_direction() or gtk_widget_get_default_direction()
 * to obtain the current direcion.
 * This function is only needed rare cases when the locale is
 * changed after GTK+ has already been initialized. In this case,
 * you can use it to update the default text direction as follows:
 * |[<!-- language="C" -->
 * setlocale (LC_ALL, new_locale);
 * direction = gtk_get_locale_direction ();
 * gtk_widget_set_default_direction (direction);
 * ]|
 */
export function get_locale_direction(): TextDirection;
/**
 * Returns the major version number of the GTK+ library.
 * (e.g. in GTK+ version 3.1.5 this is 3.)
 * This function is in the library, so it represents the GTK+ library
 * your code is running against. Contrast with the #GTK_MAJOR_VERSION
 * macro, which represents the major version of the GTK+ headers you
 * have included when compiling your code.
 */
export function get_major_version(): number;
/**
 * Returns the micro version number of the GTK+ library.
 * (e.g. in GTK+ version 3.1.5 this is 5.)
 * This function is in the library, so it represents the GTK+ library
 * your code is are running against. Contrast with the
 * #GTK_MICRO_VERSION macro, which represents the micro version of the
 * GTK+ headers you have included when compiling your code.
 */
export function get_micro_version(): number;
/**
 * Returns the minor version number of the GTK+ library.
 * (e.g. in GTK+ version 3.1.5 this is 1.)
 * This function is in the library, so it represents the GTK+ library
 * your code is are running against. Contrast with the
 * #GTK_MINOR_VERSION macro, which represents the minor version of the
 * GTK+ headers you have included when compiling your code.
 */
export function get_minor_version(): number;
/**
 * Returns a #GOptionGroup for the commandline arguments recognized
 * by GTK+ and GDK.
 * You should add this group to your #GOptionContext
 * with g_option_context_add_group(), if you are using
 * g_option_context_parse() to parse your commandline arguments.
 */
export function get_option_group(open_default_display: boolean): GLib.OptionGroup;
/**
 * Queries the current grab of the default window group.
 */
export function grab_get_current(): Widget | null;
/**
 * Looks up the icon size associated with @name.
 */
export function icon_size_from_name(name: string): number;
/**
 * Gets the canonical name of the given icon size. The returned string
 * is statically allocated and should not be freed.
 */
export function icon_size_get_name(size: number): string;
/**
 * Obtains the pixel size of a semantic icon size @size:
 * #GTK_ICON_SIZE_MENU, #GTK_ICON_SIZE_BUTTON, etc.  This function
 * isn’t normally needed, gtk_icon_theme_load_icon() is the usual
 * way to get an icon for rendering, then just look at the size of
 * the rendered pixbuf. The rendered pixbuf may not even correspond to
 * the width/height returned by gtk_icon_size_lookup(), because themes
 * are free to render the pixbuf however they like, including changing
 * the usual size.
 */
export function icon_size_lookup(size: number): [boolean, number | null,number | null];
/**
 * Obtains the pixel size of a semantic icon size, possibly
 * modified by user preferences for a particular
 * #GtkSettings. Normally @size would be
 * #GTK_ICON_SIZE_MENU, #GTK_ICON_SIZE_BUTTON, etc.  This function
 * isn’t normally needed, gtk_widget_render_icon_pixbuf() is the usual
 * way to get an icon for rendering, then just look at the size of
 * the rendered pixbuf. The rendered pixbuf may not even correspond to
 * the width/height returned by gtk_icon_size_lookup(), because themes
 * are free to render the pixbuf however they like, including changing
 * the usual size.
 */
export function icon_size_lookup_for_settings(settings: Settings, size: number): [boolean, number | null,number | null];
/**
 * Registers a new icon size, along the same lines as #GTK_ICON_SIZE_MENU
 * ,
 * etc. Returns the integer value for the size.
 */
export function icon_size_register(name: string, width: number, height: number): number;
/**
 * Registers @alias as another name for @target.
 * So calling gtk_icon_size_from_name() with @alias as argument
 * will return @target.
 */
export function icon_size_register_alias(alias: string, target: number): void;
/**
 * 
 */
export function icon_theme_error_quark(): GLib.Quark;
/**
 * Call this function before using any other GTK+ functions in your GUI
 * applications.  It will initialize everything needed to operate the
 * toolkit and parses some standard command line options.
 * Although you are expected to pass the @argc, @argv parameters from mai
 * n() to
 * this function, it is possible to pass %NULL if @argv is not available 
 * or
 * commandline handling is not required.
 * @argc and @argv are adjusted accordingly so your own code will
 * never see those standard arguments.
 * Note that there are some alternative ways to initialize GTK+:
 * if you are calling gtk_parse_args(), gtk_init_check(),
 * gtk_init_with_args() or g_option_context_parse() with
 * the option group returned by gtk_get_option_group(),
 * you don’t have to call gtk_init().
 * And if you are using #GtkApplication, you don't have to call any of th
 * e
 * initialization functions either; the #GtkApplication::startup handler
 * does it for you.
 * This function will terminate your program if it was unable to
 * initialize the windowing system for some reason. If you want
 * your program to fall back to a textual interface you want to
 * call gtk_init_check() instead.
 * Since 2.18, GTK+ calls `signal (SIGPIPE, SIG_IGN)`
 * during initialization, to ignore SIGPIPE signals, since these are
 * almost never wanted in graphical applications. If you do need to
 * handle SIGPIPE for some reason, reset the handler after gtk_init(),
 * but notice that other libraries (e.g. libdbus or gvfs) might do
 * similar things.
 */
export function init(argc: number, argv: string[] | null): [number,string[] | null];
/**
 * This function does the same work as gtk_init() with only a single
 * change: It does not terminate the program if the commandline
 * arguments couldn’t be parsed or the windowing system can’t be
 * initialized. Instead it returns %FALSE on failure.
 * This way the application can fall back to some other means of
 * communication with the user - for example a curses or command line
 * interface.
 */
export function init_check(argc: number, argv: string[] | null): [boolean, number,string[] | null];
/**
 * This function does the same work as gtk_init_check().
 * Additionally, it allows you to add your own commandline options,
 * and it automatically generates nicely formatted
 * `--help` output. Note that your program will
 * be terminated after writing out the help output.
 */
export function init_with_args(argc: number, argv: string[] | null, parameter_string: string | null, entries: GLib.OptionEntry[], translation_domain: string | null): [boolean, number,string[] | null];
/**
 * Removes the key snooper function with the given id.
 */
export function key_snooper_remove(snooper_handler_id: number): void;
/**
 * Runs the main loop until gtk_main_quit() is called.
 * You can nest calls to gtk_main(). In that case gtk_main_quit()
 * will make the innermost invocation of the main loop return.
 */
export function main(): void;
/**
 * Processes a single GDK event.
 * This is public only to allow filtering of events between GDK and GTK+.
 * You will not usually need to call this function directly.
 * While you should not call this function directly, you might want to
 * know how exactly events are handled. So here is what this function
 * does with the event:
 * 1. Compress enter/leave notify events. If the event passed build an
 *    enter/leave pair together with the next event (peeked from GDK), bo
 * th
 *    events are thrown away. This is to avoid a backlog of (de-)highligh
 * ting
 *    widgets crossed by the pointer.
 * 2. Find the widget which got the event. If the widget can’t be determi
 * ned
 *    the event is thrown away unless it belongs to a INCR transaction.
 * 3. Then the event is pushed onto a stack so you can query the currentl
 * y
 *    handled event with gtk_get_current_event().
 * 4. The event is sent to a widget. If a grab is active all events for w
 * idgets
 *    that are not in the contained in the grab widget are sent to the la
 * tter
 *    with a few exceptions:
 *    - Deletion and destruction events are still sent to the event widge
 * t for
 *      obvious reasons.
 *    - Events which directly relate to the visual representation of the 
 * event
 *      widget.
 *    - Leave events are delivered to the event widget if there was an en
 * ter
 *      event delivered to it before without the paired leave event.
 *    - Drag events are not redirected because it is unclear what the sem
 * antics
 *      of that would be.
 *    Another point of interest might be that all key events are first pa
 * ssed
 *    through the key snooper functions if there are any. Read the descri
 * ption
 *    of gtk_key_snooper_install() if you need this feature.
 * 5. After finishing the delivery the event is popped from the event sta
 * ck.
 */
export function main_do_event(event: Gdk.Event): void;
/**
 * Runs a single iteration of the mainloop.
 * If no events are waiting to be processed GTK+ will block
 * until the next event is noticed. If you don’t want to block
 * look at gtk_main_iteration_do() or check if any events are
 * pending with gtk_events_pending() first.
 */
export function main_iteration(): boolean;
/**
 * Runs a single iteration of the mainloop.
 * If no events are available either return or block depending on
 * the value of @blocking.
 */
export function main_iteration_do(blocking: boolean): boolean;
/**
 * Asks for the current nesting level of the main loop.
 */
export function main_level(): number;
/**
 * Makes the innermost invocation of the main loop return
 * when it regains control.
 */
export function main_quit(): void;
/**
 * Draws an arrow in the given rectangle on @cr using the given
 * parameters. @arrow_type determines the direction of the arrow.
 */
export function paint_arrow(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, arrow_type: ArrowType, fill: boolean, x: number, y: number, width: number, height: number): void;
/**
 * Draws a box on @cr with the given parameters.
 */
export function paint_box(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
 * Draws a box in @cr using the given style and state and shadow type,
 * leaving a gap in one side.
 */
export function paint_box_gap(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number): void;
/**
 * Draws a check button indicator in the given rectangle on @cr with
 * the given parameters.
 */
export function paint_check(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
 * Draws a diamond in the given rectangle on @window using the given
 * parameters.
 */
export function paint_diamond(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
 * Draws an expander as used in #GtkTreeView. @x and @y specify the
 * center the expander. The size of the expander is determined by the
 * “expander-size” style property of @widget.  (If widget is not
 * specified or doesn’t have an “expander-size” property, an
 * unspecified default size will be used, since the caller doesn't
 * have sufficient information to position the expander, this is
 * likely not useful.) The expander is expander_size pixels tall
 * in the collapsed position and expander_size pixels wide in the
 * expanded position.
 */
export function paint_expander(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, x: number, y: number, expander_style: ExpanderStyle): void;
/**
 * Draws an extension, i.e. a notebook tab.
 */
export function paint_extension(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number, gap_side: PositionType): void;
/**
 * Draws a flat box on @cr with the given parameters.
 */
export function paint_flat_box(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
 * Draws a focus indicator around the given rectangle on @cr using the
 * given style.
 */
export function paint_focus(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
 * Draws a handle as used in #GtkHandleBox and #GtkPaned.
 */
export function paint_handle(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number, orientation: Orientation): void;
/**
 * Draws a horizontal line from (@x1, @y) to (@x2, @y) in @cr
 * using the given style and state.
 */
export function paint_hline(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, x1: number, x2: number, y: number): void;
/**
 * Draws a layout on @cr using the given parameters.
 */
export function paint_layout(style: Style, cr: cairo.Context, state_type: StateType, use_text: boolean, widget: Widget | null, detail: string | null, x: number, y: number, layout: Pango.Layout): void;
/**
 * Draws a radio button indicator in the given rectangle on @cr with
 * the given parameters.
 */
export function paint_option(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
 * Draws a resize grip in the given rectangle on @cr using the given
 * parameters.
 */
export function paint_resize_grip(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, edge: Gdk.WindowEdge, x: number, y: number, width: number, height: number): void;
/**
 * Draws a shadow around the given rectangle in @cr
 * using the given style and state and shadow type.
 */
export function paint_shadow(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
 * Draws a shadow around the given rectangle in @cr
 * using the given style and state and shadow type, leaving a
 * gap in one side.
 */
export function paint_shadow_gap(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number): void;
/**
 * Draws a slider in the given rectangle on @cr using the
 * given style and orientation.
 */
export function paint_slider(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number, orientation: Orientation): void;
/**
 * Draws a spinner on @window using the given parameters.
 */
export function paint_spinner(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, step: number, x: number, y: number, width: number, height: number): void;
/**
 * Draws an option menu tab (i.e. the up and down pointing arrows)
 * in the given rectangle on @cr using the given parameters.
 */
export function paint_tab(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
/**
 * Draws a vertical line from (@x, @y1_) to (@x, @y2_) in @cr
 * using the given style and state.
 */
export function paint_vline(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, y1_: number, y2_: number, x: number): void;
/**
 * Returns the name of the default paper size, which
 * depends on the current locale.
 */
export function paper_size_get_default(): string;
/**
 * Creates a list of known paper sizes.
 */
export function paper_size_get_paper_sizes(include_custom: boolean): GLib.List;
/**
 * Parses command line arguments, and initializes global
 * attributes of GTK+, but does not actually open a connection
 * to a display. (See gdk_display_open(), gdk_get_display_arg_name())
 * Any arguments used by GTK+ or GDK are removed from the array and
 * @argc and @argv are updated accordingly.
 * There is no need to call this function explicitly if you are using
 * gtk_init(), or gtk_init_check().
 * Note that many aspects of GTK+ require a display connection to
 * function, so this way of initializing GTK+ is really only useful
 * for specialized use cases.
 */
export function parse_args(argc: number, argv: string[]): [boolean, number,string[]];
/**
 * Registers an error quark for #GtkPrintOperation if necessary.
 */
export function print_error_quark(): GLib.Quark;
/**
 * Runs a page setup dialog, letting the user modify the values from
 * @page_setup. If the user cancels the dialog, the returned #GtkPageSetu
 * p
 * is identical to the passed in @page_setup, otherwise it contains the
 * modifications done in the dialog.
 * Note that this function may use a recursive mainloop to show the page
 * setup dialog. See gtk_print_run_page_setup_dialog_async() if this is
 * a problem.
 */
export function print_run_page_setup_dialog(parent: Window | null, page_setup: PageSetup | null, settings: PrintSettings): PageSetup;
/**
 * Runs a page setup dialog, letting the user modify the values from @pag
 * e_setup.
 * In contrast to gtk_print_run_page_setup_dialog(), this function  retur
 * ns after
 * showing the page setup dialog on platforms that support this, and call
 * s @done_cb
 * from a signal handler for the ::response signal of the dialog.
 */
export function print_run_page_setup_dialog_async(parent: Window | null, page_setup: PageSetup | null, settings: PrintSettings, done_cb: PageSetupDoneFunc, data: object | null): void;
/**
 * Sends an event to a widget, propagating the event to parent widgets
 * if the event remains unhandled.
 * Events received by GTK+ from GDK normally begin in gtk_main_do_event()
 * .
 * Depending on the type of event, existence of modal dialogs, grabs, etc
 * .,
 * the event may be propagated; if so, this function is used.
 * gtk_propagate_event() calls gtk_widget_event() on each widget it
 * decides to send the event to. So gtk_widget_event() is the lowest-leve
 * l
 * function; it simply emits the #GtkWidget::event and possibly an
 * event-specific signal on a widget. gtk_propagate_event() is a bit
 * higher-level, and gtk_main_do_event() is the highest level.
 * All that said, you most likely don’t want to use any of these
 * functions; synthesizing events is rarely needed. There are almost
 * certainly better ways to achieve your goals. For example, use
 * gdk_window_invalidate_rect() or gtk_widget_queue_draw() instead
 * of making up expose events.
 */
export function propagate_event(widget: Widget, event: Gdk.Event): void;
/**
 * Adds a file to the list of files to be parsed at the
 * end of gtk_init().
 */
export function rc_add_default_file(filename: string): void;
/**
 * Searches for a theme engine in the GTK+ search path. This function
 * is not useful for applications and should not be used.
 */
export function rc_find_module_in_path(module_file: string): string;
/**
 * Looks up a file in pixmap path for the specified #GtkSettings.
 * If the file is not found, it outputs a warning message using
 * g_warning() and returns %NULL.
 */
export function rc_find_pixmap_in_path(settings: Settings, scanner: GLib.Scanner, pixmap_file: string): string;
/**
 * Retrieves the current list of RC files that will be parsed
 * at the end of gtk_init().
 */
export function rc_get_default_files(): string[];
/**
 * Obtains the path to the IM modules file. See the documentation
 * of the `GTK_IM_MODULE_FILE`
 * environment variable for more details.
 */
export function rc_get_im_module_file(): string;
/**
 * Obtains the path in which to look for IM modules. See the documentatio
 * n
 * of the `GTK_PATH`
 * environment variable for more details about looking up modules. This
 * function is useful solely for utilities supplied with GTK+ and should
 * not be used by applications under normal circumstances.
 */
export function rc_get_im_module_path(): string;
/**
 * Returns a directory in which GTK+ looks for theme engines.
 * For full information about the search for theme engines,
 * see the docs for `GTK_PATH` in [Running GTK+ Applications][gtk-running
 * ].
 */
export function rc_get_module_dir(): string;
/**
 * Finds all matching RC styles for a given widget,
 * composites them together, and then creates a
 * #GtkStyle representing the composite appearance.
 * (GTK+ actually keeps a cache of previously
 * created styles, so a new style may not be
 * created.)
 */
export function rc_get_style(widget: Widget): Style;
/**
 * Creates up a #GtkStyle from styles defined in a RC file by providing
 * the raw components used in matching. This function may be useful
 * when creating pseudo-widgets that should be themed like widgets but
 * don’t actually have corresponding GTK+ widgets. An example of this
 * would be items inside a GNOME canvas widget.
 * The action of gtk_rc_get_style() is similar to:
 * |[<!-- language="C" -->
 *  gtk_widget_path (widget, NULL, &path, NULL);
 *  gtk_widget_class_path (widget, NULL, &class_path, NULL);
 *  gtk_rc_get_style_by_paths (gtk_widget_get_settings (widget),
 *                             path, class_path,
 *                             G_OBJECT_TYPE (widget));
 * ]|
 */
export function rc_get_style_by_paths(settings: Settings, widget_path: string | null, class_path: string | null, type: GType): Style | null;
/**
 * Returns the standard directory in which themes should
 * be installed. (GTK+ does not actually use this directory
 * itself.)
 */
export function rc_get_theme_dir(): string;
/**
 * Parses a given resource file.
 */
export function rc_parse(filename: string): void;
/**
 * Parses a color in the format expected
 * in a RC file.
 * Note that theme engines should use gtk_rc_parse_color_full() in
 * order to support symbolic colors.
 */
export function rc_parse_color(scanner: GLib.Scanner): [number, Gdk.Color];
/**
 * Parses a color in the format expected
 * in a RC file. If @style is not %NULL, it will be consulted to resolve
 * references to symbolic colors.
 */
export function rc_parse_color_full(scanner: GLib.Scanner, style: RcStyle | null): [number, Gdk.Color];
/**
 * Parses a #GtkPathPriorityType variable from the format expected
 * in a RC file.
 */
export function rc_parse_priority(scanner: GLib.Scanner, priority: PathPriorityType): number;
/**
 * Parses a #GtkStateType variable from the format expected
 * in a RC file.
 */
export function rc_parse_state(scanner: GLib.Scanner): [number, StateType];
/**
 * Parses resource information directly from a string.
 */
export function rc_parse_string(rc_string: string): void;
/**
 * A #GtkRcPropertyParser for use with gtk_settings_install_property_pars
 * er()
 * or gtk_widget_class_install_style_property_parser() which parses
 * borders in the form
 * `"{ left, right, top, bottom }"` for integers
 * left, right, top and bottom.
 */
export function rc_property_parse_border(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
/**
 * A #GtkRcPropertyParser for use with gtk_settings_install_property_pars
 * er()
 * or gtk_widget_class_install_style_property_parser() which parses a
 * color given either by its name or in the form
 * `{ red, green, blue }` where red, green and
 * blue are integers between 0 and 65535 or floating-point numbers
 * between 0 and 1.
 */
export function rc_property_parse_color(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
/**
 * A #GtkRcPropertyParser for use with gtk_settings_install_property_pars
 * er()
 * or gtk_widget_class_install_style_property_parser() which parses a sin
 * gle
 * enumeration value.
 * The enumeration value can be specified by its name, its nickname or
 * its numeric value. For consistency with flags parsing, the value
 * may be surrounded by parentheses.
 */
export function rc_property_parse_enum(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
/**
 * A #GtkRcPropertyParser for use with gtk_settings_install_property_pars
 * er()
 * or gtk_widget_class_install_style_property_parser() which parses flags
 * .
 * Flags can be specified by their name, their nickname or
 * numerically. Multiple flags can be specified in the form
 * `"( flag1 | flag2 | ... )"`.
 */
export function rc_property_parse_flags(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
/**
 * A #GtkRcPropertyParser for use with gtk_settings_install_property_pars
 * er()
 * or gtk_widget_class_install_style_property_parser() which parses a
 * requisition in the form
 * `"{ width, height }"` for integers %width and %height.
 */
export function rc_property_parse_requisition(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
/**
 * If the modification time on any previously read file for the
 * default #GtkSettings has changed, discard all style information
 * and then reread all previously read RC files.
 */
export function rc_reparse_all(): boolean;
/**
 * If the modification time on any previously read file
 * for the given #GtkSettings has changed, discard all style information
 * and then reread all previously read RC files.
 */
export function rc_reparse_all_for_settings(settings: Settings, force_load: boolean): boolean;
/**
 * This function recomputes the styles for all widgets that use a
 * particular #GtkSettings object. (There is one #GtkSettings object
 * per #GdkScreen, see gtk_settings_get_for_screen()); It is useful
 * when some global parameter has changed that affects the appearance
 * of all widgets, because when a widget gets a new style, it will
 * both redraw and recompute any cached information about its
 * appearance. As an example, it is used when the default font size
 * set by the operating system changes. Note that this function
 * doesn’t affect widgets that have a style set explicitly on them
 * with gtk_widget_set_style().
 */
export function rc_reset_styles(settings: Settings): void;
/**
 * Sets the list of files that GTK+ will read at the
 * end of gtk_init().
 */
export function rc_set_default_files(filenames: string[]): void;
/**
 * 
 */
export function recent_chooser_error_quark(): GLib.Quark;
/**
 * 
 */
export function recent_manager_error_quark(): GLib.Quark;
/**
 * Renders an activity indicator (such as in #GtkSpinner).
 * The state %GTK_STATE_FLAG_CHECKED determines whether there is
 * activity going on.
 */
export function render_activity(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
/**
 * Renders an arrow pointing to @angle.
 * Typical arrow rendering at 0, 1⁄2 π;, π; and 3⁄2 π:
 * ![](arrows.png)
 */
export function render_arrow(context: StyleContext, cr: cairo.Context, angle: number, x: number, y: number, size: number): void;
/**
 * Renders the background of an element.
 * Typical background rendering, showing the effect of
 * `background-image`, `border-width` and `border-radius`:
 * ![](background.png)
 */
export function render_background(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
/**
 * Returns the area that will be affected (i.e. drawn to) when
 * calling gtk_render_background() for the given @context and
 * rectangle.
 */
export function render_background_get_clip(context: StyleContext, x: number, y: number, width: number, height: number): [Gdk.Rectangle];
/**
 * Renders a checkmark (as in a #GtkCheckButton).
 * The %GTK_STATE_FLAG_CHECKED state determines whether the check is
 * on or off, and %GTK_STATE_FLAG_INCONSISTENT determines whether it
 * should be marked as undefined.
 * Typical checkmark rendering:
 * ![](checks.png)
 */
export function render_check(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
/**
 * Renders an expander (as used in #GtkTreeView and #GtkExpander) in the 
 * area
 * defined by @x, @y, @width, @height. The state %GTK_STATE_FLAG_CHECKED
 * determines whether the expander is collapsed or expanded.
 * Typical expander rendering:
 * ![](expanders.png)
 */
export function render_expander(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
/**
 * Renders a extension (as in a #GtkNotebook tab) in the rectangle
 * defined by @x, @y, @width, @height. The side where the extension
 * connects to is defined by @gap_side.
 * Typical extension rendering:
 * ![](extensions.png)
 */
export function render_extension(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number, gap_side: PositionType): void;
/**
 * Renders a focus indicator on the rectangle determined by @x, @y, @widt
 * h, @height.
 * Typical focus rendering:
 * ![](focus.png)
 */
export function render_focus(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
/**
 * Renders a frame around the rectangle defined by @x, @y, @width, @heigh
 * t.
 * Examples of frame rendering, showing the effect of `border-image`,
 * `border-color`, `border-width`, `border-radius` and junctions:
 * ![](frames.png)
 */
export function render_frame(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
/**
 * Renders a frame around the rectangle defined by (@x, @y, @width, @heig
 * ht),
 * leaving a gap on one side. @xy0_gap and @xy1_gap will mean X coordinat
 * es
 * for %GTK_POS_TOP and %GTK_POS_BOTTOM gap sides, and Y coordinates for
 * %GTK_POS_LEFT and %GTK_POS_RIGHT.
 * Typical rendering of a frame with a gap:
 * ![](frame-gap.png)
 */
export function render_frame_gap(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number, gap_side: PositionType, xy0_gap: number, xy1_gap: number): void;
/**
 * Renders a handle (as in #GtkHandleBox, #GtkPaned and
 * #GtkWindow’s resize grip), in the rectangle
 * determined by @x, @y, @width, @height.
 * Handles rendered for the paned and grip classes:
 * ![](handles.png)
 */
export function render_handle(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
/**
 * Renders the icon in @pixbuf at the specified @x and @y coordinates.
 * This function will render the icon in @pixbuf at exactly its size,
 * regardless of scaling factors, which may not be appropriate when
 * drawing on displays with high pixel densities.
 * You probably want to use gtk_render_icon_surface() instead, if you
 * already have a Cairo surface.
 */
export function render_icon(context: StyleContext, cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number): void;
/**
 * Renders the icon specified by @source at the given @size, returning th
 * e result
 * in a pixbuf.
 */
export function render_icon_pixbuf(context: StyleContext, source: IconSource, size: number): GdkPixbuf.Pixbuf;
/**
 * Renders the icon in @surface at the specified @x and @y coordinates.
 */
export function render_icon_surface(context: StyleContext, cr: cairo.Context, surface: cairo.Surface, x: number, y: number): void;
/**
 * Draws a text caret on @cr at the specified index of @layout.
 */
export function render_insertion_cursor(context: StyleContext, cr: cairo.Context, x: number, y: number, layout: Pango.Layout, index: number, direction: Pango.Direction): void;
/**
 * Renders @layout on the coordinates @x, @y
 */
export function render_layout(context: StyleContext, cr: cairo.Context, x: number, y: number, layout: Pango.Layout): void;
/**
 * Renders a line from (x0, y0) to (x1, y1).
 */
export function render_line(context: StyleContext, cr: cairo.Context, x0: number, y0: number, x1: number, y1: number): void;
/**
 * Renders an option mark (as in a #GtkRadioButton), the %GTK_STATE_FLAG_
 * CHECKED
 * state will determine whether the option is on or off, and
 * %GTK_STATE_FLAG_INCONSISTENT whether it should be marked as undefined.
 * Typical option mark rendering:
 * ![](options.png)
 */
export function render_option(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
/**
 * Renders a slider (as in #GtkScale) in the rectangle defined by @x, @y,
 * @width, @height. @orientation defines whether the slider is vertical
 * or horizontal.
 * Typical slider rendering:
 * ![](sliders.png)
 */
export function render_slider(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number, orientation: Orientation): void;
/**
 * Converts a color from RGB space to HSV.
 * Input values must be in the [0.0, 1.0] range;
 * output values will be in the same range.
 */
export function rgb_to_hsv(r: number, g: number, b: number): [number,number,number];
/**
 * Appends a specified target to the list of supported targets for a
 * given widget and selection.
 */
export function selection_add_target(widget: Widget, selection: Gdk.Atom, target: Gdk.Atom, info: number): void;
/**
 * Prepends a table of targets to the list of supported targets
 * for a given widget and selection.
 */
export function selection_add_targets(widget: Widget, selection: Gdk.Atom, targets: TargetEntry[], ntargets: number): void;
/**
 * Remove all targets registered for the given selection for the
 * widget.
 */
export function selection_clear_targets(widget: Widget, selection: Gdk.Atom): void;
/**
 * Requests the contents of a selection. When received,
 * a “selection-received” signal will be generated.
 */
export function selection_convert(widget: Widget, selection: Gdk.Atom, target: Gdk.Atom, time_: number): boolean;
/**
 * Claims ownership of a given selection for a particular widget,
 * or, if @widget is %NULL, release ownership of the selection.
 */
export function selection_owner_set(widget: Widget | null, selection: Gdk.Atom, time_: number): boolean;
/**
 * Claim ownership of a given selection for a particular widget, or,
 * if @widget is %NULL, release ownership of the selection.
 */
export function selection_owner_set_for_display(display: Gdk.Display, widget: Widget | null, selection: Gdk.Atom, time_: number): boolean;
/**
 * Removes all handlers and unsets ownership of all
 * selections for a widget. Called when widget is being
 * destroyed. This function will not generally be
 * called by applications.
 */
export function selection_remove_all(widget: Widget): void;
/**
 * Sets the GTK+ debug flags.
 */
export function set_debug_flags(flags: number): void;
/**
 * A convenience function for launching the default application
 * to show the uri. Like gtk_show_uri_on_window(), but takes a screen
 * as transient parent instead of a window.
 * Note that this function is deprecated as it does not pass the necessar
 * y
 * information for helpers to parent their dialog properly, when run from
 * sandboxed applications for example.
 */
export function show_uri(screen: Gdk.Screen | null, uri: string, timestamp: number): boolean;
/**
 * This is a convenience function for launching the default application
 * to show the uri. The uri must be of a form understood by GIO (i.e. you
 * need to install gvfs to get support for uri schemes such as http://
 * or ftp://, as only local files are handled by GIO itself).
 * Typical examples are
 * - `file:///home/gnome/pict.jpg`
 * - `http://www.gnome.org`
 * - `mailto:me@gnome.org`
 * Ideally the timestamp is taken from the event triggering
 * the gtk_show_uri() call. If timestamp is not known you can take
 * %GDK_CURRENT_TIME.
 * This is the recommended call to be used as it passes information
 * necessary for sandbox helpers to parent their dialogs properly.
 */
export function show_uri_on_window(parent: Window | null, uri: string, timestamp: number): boolean;
/**
 * Registers each of the stock items in @items. If an item already
 * exists with the same stock ID as one of the @items, the old item
 * gets replaced. The stock items are copied, so GTK+ does not hold
 * any pointer into @items and @items can be freed. Use
 * gtk_stock_add_static() if @items is persistent and GTK+ need not
 * copy the array.
 */
export function stock_add(items: StockItem[], n_items: number): void;
/**
 * Same as gtk_stock_add(), but doesn’t copy @items, so
 * @items must persist until application exit.
 */
export function stock_add_static(items: StockItem[], n_items: number): void;
/**
 * Retrieves a list of all known stock IDs added to a #GtkIconFactory
 * or registered with gtk_stock_add(). The list must be freed with g_slis
 * t_free(),
 * and each string in the list must be freed with g_free().
 */
export function stock_list_ids(): string[];
/**
 * Fills @item with the registered values for @stock_id, returning %TRUE
 * if @stock_id was known.
 */
export function stock_lookup(stock_id: string): [boolean, StockItem];
/**
 * Sets a function to be used for translating the @label of
 * a stock item.
 * If no function is registered for a translation domain,
 * g_dgettext() is used.
 * The function is used for all stock items whose
 * @translation_domain matches @domain. Note that it is possible
 * to use strings different from the actual gettext translation domain
 * of your application for this, as long as your #GtkTranslateFunc uses
 * the correct domain when calling dgettext(). This can be useful, e.g.
 * when dealing with message contexts:
 * |[<!-- language="C" -->
 * GtkStockItem items[] = {
 *  { MY_ITEM1, NC_("odd items", "Item 1"), 0, 0, "odd-item-domain" },
 *  { MY_ITEM2, NC_("even items", "Item 2"), 0, 0, "even-item-domain" },
 * };
 * gchar *
 * my_translate_func (const gchar *msgid,
 *                    gpointer     data)
 * {
 *   gchar *msgctxt = data;
 *   return (gchar*)g_dpgettext2 (GETTEXT_PACKAGE, msgctxt, msgid);
 * }
 * ...
 * gtk_stock_add (items, G_N_ELEMENTS (items));
 * gtk_stock_set_translate_func ("odd-item-domain", my_translate_func, "o
 * dd items");
 * gtk_stock_set_translate_func ("even-item-domain", my_translate_func, "
 * even items");
 * ]|
 */
export function stock_set_translate_func(domain: string, func: TranslateFunc, data: object | null, notify: GLib.DestroyNotify): void;
/**
 * This function frees a target table as returned by
 * gtk_target_table_new_from_list()
 */
export function target_table_free(targets: TargetEntry[], n_targets: number): void;
/**
 * This function creates an #GtkTargetEntry array that contains the
 * same targets as the passed %list. The returned table is newly
 * allocated and should be freed using gtk_target_table_free() when no
 * longer needed.
 */
export function target_table_new_from_list(list: TargetList): [TargetEntry[], number];
/**
 * Determines if any of the targets in @targets can be used to
 * provide a #GdkPixbuf.
 */
export function targets_include_image(targets: Gdk.Atom[], n_targets: number, writable: boolean): boolean;
/**
 * Determines if any of the targets in @targets can be used to
 * provide rich text.
 */
export function targets_include_rich_text(targets: Gdk.Atom[], n_targets: number, buffer: TextBuffer): boolean;
/**
 * Determines if any of the targets in @targets can be used to
 * provide text.
 */
export function targets_include_text(targets: Gdk.Atom[], n_targets: number): boolean;
/**
 * Determines if any of the targets in @targets can be used to
 * provide an uri list.
 */
export function targets_include_uri(targets: Gdk.Atom[], n_targets: number): boolean;
/**
 * Create a simple window with window title @window_title and
 * text contents @dialog_text.
 * The window will quit any running gtk_main()-loop when destroyed, and i
 * t
 * will automatically be destroyed upon test function teardown.
 */
export function test_create_simple_window(window_title: string, dialog_text: string): Widget;
/**
 * This function will search @widget and all its descendants for a GtkLab
 * el
 * widget with a text string matching @label_pattern.
 * The @label_pattern may contain asterisks “*” and question marks “?” as
 * placeholders, g_pattern_match() is used for the matching.
 * Note that locales other than "C“ tend to alter (translate” label strin
 * gs,
 * so this function is genrally only useful in test programs with
 * predetermined locales, see gtk_test_init() for more details.
 */
export function test_find_label(widget: Widget, label_pattern: string): Widget;
/**
 * This function will search siblings of @base_widget and siblings of its
 * ancestors for all widgets matching @widget_type.
 * Of the matching widgets, the one that is geometrically closest to
 * @base_widget will be returned.
 * The general purpose of this function is to find the most likely “actio
 * n”
 * widget, relative to another labeling widget. Such as finding a
 * button or text entry widget, given its corresponding label widget.
 */
export function test_find_sibling(base_widget: Widget, widget_type: GType): Widget;
/**
 * This function will search the descendants of @widget for a widget
 * of type @widget_type that has a label matching @label_pattern next
 * to it. This is most useful for automated GUI testing, e.g. to find
 * the “OK” button in a dialog and synthesize clicks on it.
 * However see gtk_test_find_label(), gtk_test_find_sibling() and
 * gtk_test_widget_click() for possible caveats involving the search of
 * such widgets and synthesizing widget events.
 */
export function test_find_widget(widget: Widget, label_pattern: string, widget_type: GType): Widget | null;
/**
 * Return the type ids that have been registered after
 * calling gtk_test_register_all_types().
 */
export function test_list_all_types(): [GType, number];
/**
 * Force registration of all core Gtk+ and Gdk object types.
 * This allowes to refer to any of those object types via
 * g_type_from_name() after calling this function.
 */
export function test_register_all_types(): void;
/**
 * Retrive the literal adjustment value for GtkRange based
 * widgets and spin buttons. Note that the value returned by
 * this function is anything between the lower and upper bounds
 * of the adjustment belonging to @widget, and is not a percentage
 * as passed in to gtk_test_slider_set_perc().
 */
export function test_slider_get_value(widget: Widget): number;
/**
 * This function will adjust the slider position of all GtkRange
 * based widgets, such as scrollbars or scales, it’ll also adjust
 * spin buttons. The adjustment value of these widgets is set to
 * a value between the lower and upper limits, according to the
 * @percentage argument.
 */
export function test_slider_set_perc(widget: Widget, percentage: number): void;
/**
 * This function will generate a @button click in the upwards or downward
 * s
 * spin button arrow areas, usually leading to an increase or decrease of
 * spin button’s value.
 */
export function test_spin_button_click(spinner: SpinButton, button: number, upwards: boolean): boolean;
/**
 * Retrive the text string of @widget if it is a GtkLabel,
 * GtkEditable (entry and text widgets) or GtkTextView.
 */
export function test_text_get(widget: Widget): string;
/**
 * Set the text string of @widget to @string if it is a GtkLabel,
 * GtkEditable (entry and text widgets) or GtkTextView.
 */
export function test_text_set(widget: Widget, string: string): void;
/**
 * This function will generate a @button click (button press and button
 * release event) in the middle of the first GdkWindow found that belongs
 * to @widget.
 * For windowless widgets like #GtkButton (which returns %FALSE from
 * gtk_widget_get_has_window()), this will often be an
 * input-only event window. For other widgets, this is usually widget->wi
 * ndow.
 * Certain caveats should be considered when using this function, in
 * particular because the mouse pointer is warped to the button click
 * location, see gdk_test_simulate_button() for details.
 */
export function test_widget_click(widget: Widget, button: number, modifiers: Gdk.ModifierType): boolean;
/**
 * This function will generate keyboard press and release events in
 * the middle of the first GdkWindow found that belongs to @widget.
 * For windowless widgets like #GtkButton (which returns %FALSE from
 * gtk_widget_get_has_window()), this will often be an
 * input-only event window. For other widgets, this is usually widget->wi
 * ndow.
 * Certain caveats should be considered when using this function, in
 * particular because the mouse pointer is warped to the key press
 * location, see gdk_test_simulate_key() for details.
 */
export function test_widget_send_key(widget: Widget, keyval: number, modifiers: Gdk.ModifierType): boolean;
/**
 * Enters the main loop and waits for @widget to be “drawn”. In this
 * context that means it waits for the frame clock of @widget to have
 * run a full styling, layout and drawing cycle.
 * This function is intended to be used for syncing with actions that
 * depend on @widget relayouting or on interaction with the display
 * server.
 */
export function test_widget_wait_for_draw(widget: Widget): void;
/**
 * Obtains a @tree_model and @path from selection data of target type
 * %GTK_TREE_MODEL_ROW. Normally called from a drag_data_received handler
 * .
 * This function can only be used if @selection_data originates from the 
 * same
 * process that’s calling this function, because a pointer to the tree mo
 * del
 * is being passed around. If you aren’t in the same process, then you'll
 * get memory corruption. In the #GtkTreeDragDest drag_data_received hand
 * ler,
 * you can assume that selection data of type %GTK_TREE_MODEL_ROW is
 * in from the current process. The returned path must be freed with
 * gtk_tree_path_free().
 */
export function tree_get_row_drag_data(selection_data: SelectionData): [boolean, TreeModel | null,TreePath | null];
/**
 * Lets a set of row reference created by
 * gtk_tree_row_reference_new_proxy() know that the
 * model emitted the #GtkTreeModel::row-deleted signal.
 */
export function tree_row_reference_deleted(proxy: GObject.Object, path: TreePath): void;
/**
 * Lets a set of row reference created by
 * gtk_tree_row_reference_new_proxy() know that the
 * model emitted the #GtkTreeModel::row-inserted signal.
 */
export function tree_row_reference_inserted(proxy: GObject.Object, path: TreePath): void;
/**
 * Sets selection data of target type %GTK_TREE_MODEL_ROW. Normally used
 * in a drag_data_get handler.
 */
export function tree_set_row_drag_data(selection_data: SelectionData, tree_model: TreeModel, path: TreePath): boolean;
/**
 * All this function does it to return %TRUE.
 * This can be useful for example if you want to inhibit the deletion
 * of a window. Of course you should not do this as the user expects
 * a reaction from clicking the close icon of the window...
 * ## A persistent window
 * |[<!-- language="C" -->
 * #include <gtk/gtk.h>
 * int
 * main (int argc, char **argv)
 * {
 *   GtkWidget *win, *but;
 *   const char *text = "Close yourself. I mean it!";
 *   gtk_init (&argc, &argv);
 *   win = gtk_window_new (GTK_WINDOW_TOPLEVEL);
 *   g_signal_connect (win,
 *                     "delete-event",
 *                     G_CALLBACK (gtk_true),
 *                     NULL);
 *   g_signal_connect (win, "destroy",
 *                     G_CALLBACK (gtk_main_quit),
 *                     NULL);
 *   but = gtk_button_new_with_label (text);
 *   g_signal_connect_swapped (but, "clicked",
 *                             G_CALLBACK (gtk_object_destroy),
 *                             win);
 *   gtk_container_add (GTK_CONTAINER (win), but);
 *   gtk_widget_show_all (win);
 *   gtk_main ();
 *   return 0;
 * }
 * ]|
 */
export function _true(): boolean;
export enum Align {
    FILL = 0,
    START = 1,
    END = 2,
    CENTER = 3,
    BASELINE = 4,
}
export enum ArrowPlacement {
    BOTH = 0,
    START = 1,
    END = 2,
}
export enum ArrowType {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3,
    NONE = 4,
}
export enum AssistantPageType {
    CONTENT = 0,
    INTRO = 1,
    CONFIRM = 2,
    SUMMARY = 3,
    PROGRESS = 4,
    CUSTOM = 5,
}
export enum BaselinePosition {
    TOP = 0,
    CENTER = 1,
    BOTTOM = 2,
}
export enum BorderStyle {
    NONE = 0,
    SOLID = 1,
    INSET = 2,
    OUTSET = 3,
    HIDDEN = 4,
    DOTTED = 5,
    DASHED = 6,
    DOUBLE = 7,
    GROOVE = 8,
    RIDGE = 9,
}
export enum BuilderError {
    INVALID_TYPE_FUNCTION = 0,
    UNHANDLED_TAG = 1,
    MISSING_ATTRIBUTE = 2,
    INVALID_ATTRIBUTE = 3,
    INVALID_TAG = 4,
    MISSING_PROPERTY_VALUE = 5,
    INVALID_VALUE = 6,
    VERSION_MISMATCH = 7,
    DUPLICATE_ID = 8,
    OBJECT_TYPE_REFUSED = 9,
    TEMPLATE_MISMATCH = 10,
    INVALID_PROPERTY = 11,
    INVALID_SIGNAL = 12,
    INVALID_ID = 13,
}
export enum ButtonBoxStyle {
    SPREAD = 1,
    EDGE = 2,
    START = 3,
    END = 4,
    CENTER = 5,
    EXPAND = 6,
}
export enum ButtonRole {
    NORMAL = 0,
    CHECK = 1,
    RADIO = 2,
}
export enum ButtonsType {
    NONE = 0,
    OK = 1,
    CLOSE = 2,
    CANCEL = 3,
    YES_NO = 4,
    OK_CANCEL = 5,
}
export enum CellRendererAccelMode {
    GTK = 0,
    OTHER = 1,
}
export enum CellRendererMode {
    INERT = 0,
    ACTIVATABLE = 1,
    EDITABLE = 2,
}
export enum CornerType {
    TOP_LEFT = 0,
    BOTTOM_LEFT = 1,
    TOP_RIGHT = 2,
    BOTTOM_RIGHT = 3,
}
export enum CssProviderError {
    FAILED = 0,
    SYNTAX = 1,
    IMPORT = 2,
    NAME = 3,
    DEPRECATED = 4,
    UNKNOWN_VALUE = 5,
}
export enum CssSectionType {
    DOCUMENT = 0,
    IMPORT = 1,
    COLOR_DEFINITION = 2,
    BINDING_SET = 3,
    RULESET = 4,
    SELECTOR = 5,
    DECLARATION = 6,
    VALUE = 7,
    KEYFRAMES = 8,
}
export enum DeleteType {
    CHARS = 0,
    WORD_ENDS = 1,
    WORDS = 2,
    DISPLAY_LINES = 3,
    DISPLAY_LINE_ENDS = 4,
    PARAGRAPH_ENDS = 5,
    PARAGRAPHS = 6,
    WHITESPACE = 7,
}
export enum DirectionType {
    TAB_FORWARD = 0,
    TAB_BACKWARD = 1,
    UP = 2,
    DOWN = 3,
    LEFT = 4,
    RIGHT = 5,
}
export enum DragResult {
    SUCCESS = 0,
    NO_TARGET = 1,
    USER_CANCELLED = 2,
    TIMEOUT_EXPIRED = 3,
    GRAB_BROKEN = 4,
    ERROR = 5,
}
export enum EntryIconPosition {
    PRIMARY = 0,
    SECONDARY = 1,
}
export enum EventSequenceState {
    NONE = 0,
    CLAIMED = 1,
    DENIED = 2,
}
export enum ExpanderStyle {
    COLLAPSED = 0,
    SEMI_COLLAPSED = 1,
    SEMI_EXPANDED = 2,
    EXPANDED = 3,
}
export enum FileChooserAction {
    OPEN = 0,
    SAVE = 1,
    SELECT_FOLDER = 2,
    CREATE_FOLDER = 3,
}
export enum FileChooserConfirmation {
    CONFIRM = 0,
    ACCEPT_FILENAME = 1,
    SELECT_AGAIN = 2,
}
export enum FileChooserError {
    NONEXISTENT = 0,
    BAD_FILENAME = 1,
    ALREADY_EXISTS = 2,
    INCOMPLETE_HOSTNAME = 3,
}
export enum IMPreeditStyle {
    NOTHING = 0,
    CALLBACK = 1,
    NONE = 2,
}
export enum IMStatusStyle {
    NOTHING = 0,
    CALLBACK = 1,
    NONE = 2,
}
export enum IconSize {
    INVALID = 0,
    MENU = 1,
    SMALL_TOOLBAR = 2,
    LARGE_TOOLBAR = 3,
    BUTTON = 4,
    DND = 5,
    DIALOG = 6,
}
export enum IconThemeError {
    NOT_FOUND = 0,
    FAILED = 1,
}
export enum IconViewDropPosition {
    NO_DROP = 0,
    DROP_INTO = 1,
    DROP_LEFT = 2,
    DROP_RIGHT = 3,
    DROP_ABOVE = 4,
    DROP_BELOW = 5,
}
export enum ImageType {
    EMPTY = 0,
    PIXBUF = 1,
    STOCK = 2,
    ICON_SET = 3,
    ANIMATION = 4,
    ICON_NAME = 5,
    GICON = 6,
    SURFACE = 7,
}
export enum InputPurpose {
    FREE_FORM = 0,
    ALPHA = 1,
    DIGITS = 2,
    NUMBER = 3,
    PHONE = 4,
    URL = 5,
    EMAIL = 6,
    NAME = 7,
    PASSWORD = 8,
    PIN = 9,
}
export enum Justification {
    LEFT = 0,
    RIGHT = 1,
    CENTER = 2,
    FILL = 3,
}
export enum LevelBarMode {
    CONTINUOUS = 0,
    DISCRETE = 1,
}
export enum License {
    UNKNOWN = 0,
    CUSTOM = 1,
    GPL_2_0 = 2,
    GPL_3_0 = 3,
    LGPL_2_1 = 4,
    LGPL_3_0 = 5,
    BSD = 6,
    MIT_X11 = 7,
    ARTISTIC = 8,
    GPL_2_0_ONLY = 9,
    GPL_3_0_ONLY = 10,
    LGPL_2_1_ONLY = 11,
    LGPL_3_0_ONLY = 12,
    AGPL_3_0 = 13,
    AGPL_3_0_ONLY = 14,
}
export enum MenuDirectionType {
    PARENT = 0,
    CHILD = 1,
    NEXT = 2,
    PREV = 3,
}
export enum MessageType {
    INFO = 0,
    WARNING = 1,
    QUESTION = 2,
    ERROR = 3,
    OTHER = 4,
}
export enum MovementStep {
    LOGICAL_POSITIONS = 0,
    VISUAL_POSITIONS = 1,
    WORDS = 2,
    DISPLAY_LINES = 3,
    DISPLAY_LINE_ENDS = 4,
    PARAGRAPHS = 5,
    PARAGRAPH_ENDS = 6,
    PAGES = 7,
    BUFFER_ENDS = 8,
    HORIZONTAL_PAGES = 9,
}
export enum NotebookTab {
    FIRST = 0,
    LAST = 1,
}
export enum NumberUpLayout {
    LRTB = 0,
    LRBT = 1,
    RLTB = 2,
    RLBT = 3,
    TBLR = 4,
    TBRL = 5,
    BTLR = 6,
    BTRL = 7,
}
export enum Orientation {
    HORIZONTAL = 0,
    VERTICAL = 1,
}
export enum PackDirection {
    LTR = 0,
    RTL = 1,
    TTB = 2,
    BTT = 3,
}
export enum PackType {
    START = 0,
    END = 1,
}
export enum PadActionType {
    BUTTON = 0,
    RING = 1,
    STRIP = 2,
}
export enum PageOrientation {
    PORTRAIT = 0,
    LANDSCAPE = 1,
    REVERSE_PORTRAIT = 2,
    REVERSE_LANDSCAPE = 3,
}
export enum PageSet {
    ALL = 0,
    EVEN = 1,
    ODD = 2,
}
export enum PanDirection {
    LEFT = 0,
    RIGHT = 1,
    UP = 2,
    DOWN = 3,
}
export enum PathPriorityType {
    LOWEST = 0,
    GTK = 4,
    APPLICATION = 8,
    THEME = 10,
    RC = 12,
    HIGHEST = 15,
}
export enum PathType {
    WIDGET = 0,
    WIDGET_CLASS = 1,
    CLASS = 2,
}
export enum PolicyType {
    ALWAYS = 0,
    AUTOMATIC = 1,
    NEVER = 2,
    EXTERNAL = 3,
}
export enum PopoverConstraint {
    NONE = 0,
    WINDOW = 1,
}
export enum PositionType {
    LEFT = 0,
    RIGHT = 1,
    TOP = 2,
    BOTTOM = 3,
}
export enum PrintDuplex {
    SIMPLEX = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
}
export enum PrintError {
    GENERAL = 0,
    INTERNAL_ERROR = 1,
    NOMEM = 2,
    INVALID_FILE = 3,
}
export enum PrintOperationAction {
    PRINT_DIALOG = 0,
    PRINT = 1,
    PREVIEW = 2,
    EXPORT = 3,
}
export enum PrintOperationResult {
    ERROR = 0,
    APPLY = 1,
    CANCEL = 2,
    IN_PROGRESS = 3,
}
export enum PrintPages {
    ALL = 0,
    CURRENT = 1,
    RANGES = 2,
    SELECTION = 3,
}
export enum PrintQuality {
    LOW = 0,
    NORMAL = 1,
    HIGH = 2,
    DRAFT = 3,
}
export enum PrintStatus {
    INITIAL = 0,
    PREPARING = 1,
    GENERATING_DATA = 2,
    SENDING_DATA = 3,
    PENDING = 4,
    PENDING_ISSUE = 5,
    PRINTING = 6,
    FINISHED = 7,
    FINISHED_ABORTED = 8,
}
export enum PropagationPhase {
    NONE = 0,
    CAPTURE = 1,
    BUBBLE = 2,
    TARGET = 3,
}
export enum RcTokenType {
    INVALID = 270,
    INCLUDE = 271,
    NORMAL = 272,
    ACTIVE = 273,
    PRELIGHT = 274,
    SELECTED = 275,
    INSENSITIVE = 276,
    FG = 277,
    BG = 278,
    TEXT = 279,
    BASE = 280,
    XTHICKNESS = 281,
    YTHICKNESS = 282,
    FONT = 283,
    FONTSET = 284,
    FONT_NAME = 285,
    BG_PIXMAP = 286,
    PIXMAP_PATH = 287,
    STYLE = 288,
    BINDING = 289,
    BIND = 290,
    WIDGET = 291,
    WIDGET_CLASS = 292,
    CLASS = 293,
    LOWEST = 294,
    GTK = 295,
    APPLICATION = 296,
    THEME = 297,
    RC = 298,
    HIGHEST = 299,
    ENGINE = 300,
    MODULE_PATH = 301,
    IM_MODULE_PATH = 302,
    IM_MODULE_FILE = 303,
    STOCK = 304,
    LTR = 305,
    RTL = 306,
    COLOR = 307,
    UNBIND = 308,
    LAST = 309,
}
export enum RecentChooserError {
    NOT_FOUND = 0,
    INVALID_URI = 1,
}
export enum RecentManagerError {
    NOT_FOUND = 0,
    INVALID_URI = 1,
    INVALID_ENCODING = 2,
    NOT_REGISTERED = 3,
    READ = 4,
    WRITE = 5,
    UNKNOWN = 6,
}
export enum RecentSortType {
    NONE = 0,
    MRU = 1,
    LRU = 2,
    CUSTOM = 3,
}
export enum ReliefStyle {
    NORMAL = 0,
    HALF = 1,
    NONE = 2,
}
export enum ResizeMode {
    PARENT = 0,
    QUEUE = 1,
    IMMEDIATE = 2,
}
export enum ResponseType {
    NONE = -1,
    REJECT = -2,
    ACCEPT = -3,
    DELETE_EVENT = -4,
    OK = -5,
    CANCEL = -6,
    CLOSE = -7,
    YES = -8,
    NO = -9,
    APPLY = -10,
    HELP = -11,
}
export enum RevealerTransitionType {
    NONE = 0,
    CROSSFADE = 1,
    SLIDE_RIGHT = 2,
    SLIDE_LEFT = 3,
    SLIDE_UP = 4,
    SLIDE_DOWN = 5,
}
export enum ScrollStep {
    STEPS = 0,
    PAGES = 1,
    ENDS = 2,
    HORIZONTAL_STEPS = 3,
    HORIZONTAL_PAGES = 4,
    HORIZONTAL_ENDS = 5,
}
export enum ScrollType {
    NONE = 0,
    JUMP = 1,
    STEP_BACKWARD = 2,
    STEP_FORWARD = 3,
    PAGE_BACKWARD = 4,
    PAGE_FORWARD = 5,
    STEP_UP = 6,
    STEP_DOWN = 7,
    PAGE_UP = 8,
    PAGE_DOWN = 9,
    STEP_LEFT = 10,
    STEP_RIGHT = 11,
    PAGE_LEFT = 12,
    PAGE_RIGHT = 13,
    START = 14,
    END = 15,
}
export enum ScrollablePolicy {
    MINIMUM = 0,
    NATURAL = 1,
}
export enum SelectionMode {
    NONE = 0,
    SINGLE = 1,
    BROWSE = 2,
    MULTIPLE = 3,
}
export enum SensitivityType {
    AUTO = 0,
    ON = 1,
    OFF = 2,
}
export enum ShadowType {
    NONE = 0,
    IN = 1,
    OUT = 2,
    ETCHED_IN = 3,
    ETCHED_OUT = 4,
}
export enum ShortcutType {
    ACCELERATOR = 0,
    GESTURE_PINCH = 1,
    GESTURE_STRETCH = 2,
    GESTURE_ROTATE_CLOCKWISE = 3,
    GESTURE_ROTATE_COUNTERCLOCKWISE = 4,
    GESTURE_TWO_FINGER_SWIPE_LEFT = 5,
    GESTURE_TWO_FINGER_SWIPE_RIGHT = 6,
    GESTURE = 7,
}
export enum SizeGroupMode {
    NONE = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
    BOTH = 3,
}
export enum SizeRequestMode {
    HEIGHT_FOR_WIDTH = 0,
    WIDTH_FOR_HEIGHT = 1,
    CONSTANT_SIZE = 2,
}
export enum SortType {
    ASCENDING = 0,
    DESCENDING = 1,
}
export enum SpinButtonUpdatePolicy {
    ALWAYS = 0,
    IF_VALID = 1,
}
export enum SpinType {
    STEP_FORWARD = 0,
    STEP_BACKWARD = 1,
    PAGE_FORWARD = 2,
    PAGE_BACKWARD = 3,
    HOME = 4,
    END = 5,
    USER_DEFINED = 6,
}
export enum StackTransitionType {
    NONE = 0,
    CROSSFADE = 1,
    SLIDE_RIGHT = 2,
    SLIDE_LEFT = 3,
    SLIDE_UP = 4,
    SLIDE_DOWN = 5,
    SLIDE_LEFT_RIGHT = 6,
    SLIDE_UP_DOWN = 7,
    OVER_UP = 8,
    OVER_DOWN = 9,
    OVER_LEFT = 10,
    OVER_RIGHT = 11,
    UNDER_UP = 12,
    UNDER_DOWN = 13,
    UNDER_LEFT = 14,
    UNDER_RIGHT = 15,
    OVER_UP_DOWN = 16,
    OVER_DOWN_UP = 17,
    OVER_LEFT_RIGHT = 18,
    OVER_RIGHT_LEFT = 19,
}
export enum StateType {
    NORMAL = 0,
    ACTIVE = 1,
    PRELIGHT = 2,
    SELECTED = 3,
    INSENSITIVE = 4,
    INCONSISTENT = 5,
    FOCUSED = 6,
}
export enum TextBufferTargetInfo {
    BUFFER_CONTENTS = -1,
    RICH_TEXT = -2,
    TEXT = -3,
}
export enum TextDirection {
    NONE = 0,
    LTR = 1,
    RTL = 2,
}
export enum TextExtendSelection {
    WORD = 0,
    LINE = 1,
}
export enum TextViewLayer {
    BELOW = 0,
    ABOVE = 1,
    BELOW_TEXT = 2,
    ABOVE_TEXT = 3,
}
export enum TextWindowType {
    PRIVATE = 0,
    WIDGET = 1,
    TEXT = 2,
    LEFT = 3,
    RIGHT = 4,
    TOP = 5,
    BOTTOM = 6,
}
export enum ToolbarSpaceStyle {
    EMPTY = 0,
    LINE = 1,
}
export enum ToolbarStyle {
    ICONS = 0,
    TEXT = 1,
    BOTH = 2,
    BOTH_HORIZ = 3,
}
export enum TreeViewColumnSizing {
    GROW_ONLY = 0,
    AUTOSIZE = 1,
    FIXED = 2,
}
export enum TreeViewDropPosition {
    BEFORE = 0,
    AFTER = 1,
    INTO_OR_BEFORE = 2,
    INTO_OR_AFTER = 3,
}
export enum TreeViewGridLines {
    NONE = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
    BOTH = 3,
}
export enum Unit {
    NONE = 0,
    POINTS = 1,
    INCH = 2,
    MM = 3,
}
export enum WidgetHelpType {
    TOOLTIP = 0,
    WHATS_THIS = 1,
}
export enum WindowPosition {
    NONE = 0,
    CENTER = 1,
    MOUSE = 2,
    CENTER_ALWAYS = 3,
    CENTER_ON_PARENT = 4,
}
export enum WindowType {
    TOPLEVEL = 0,
    POPUP = 1,
}
export enum WrapMode {
    NONE = 0,
    CHAR = 1,
    WORD = 2,
    WORD_CHAR = 3,
}
export type Allocation = Gdk.Rectangle;
export type Stock = string;
export enum AccelFlags {
    VISIBLE = 1,
    LOCKED = 2,
    MASK = 7,
}
export enum ApplicationInhibitFlags {
    LOGOUT = 1,
    SWITCH = 2,
    SUSPEND = 4,
    IDLE = 8,
}
export enum AttachOptions {
    EXPAND = 1,
    SHRINK = 2,
    FILL = 4,
}
export enum CalendarDisplayOptions {
    SHOW_HEADING = 1,
    SHOW_DAY_NAMES = 2,
    NO_MONTH_CHANGE = 4,
    SHOW_WEEK_NUMBERS = 8,
    SHOW_DETAILS = 32,
}
export enum CellRendererState {
    SELECTED = 1,
    PRELIT = 2,
    INSENSITIVE = 4,
    SORTED = 8,
    FOCUSED = 16,
    EXPANDABLE = 32,
    EXPANDED = 64,
}
export enum DebugFlag {
    MISC = 1,
    PLUGSOCKET = 2,
    TEXT = 4,
    TREE = 8,
    UPDATES = 16,
    KEYBINDINGS = 32,
    MULTIHEAD = 64,
    MODULES = 128,
    GEOMETRY = 256,
    ICONTHEME = 512,
    PRINTING = 1024,
    BUILDER = 2048,
    SIZE_REQUEST = 4096,
    NO_CSS_CACHE = 8192,
    BASELINES = 16384,
    PIXEL_CACHE = 32768,
    NO_PIXEL_CACHE = 65536,
    INTERACTIVE = 131072,
    TOUCHSCREEN = 262144,
    ACTIONS = 524288,
    RESIZE = 1048576,
    LAYOUT = 2097152,
}
export enum DestDefaults {
    MOTION = 1,
    HIGHLIGHT = 2,
    DROP = 4,
    ALL = 7,
}
export enum DialogFlags {
    MODAL = 1,
    DESTROY_WITH_PARENT = 2,
    USE_HEADER_BAR = 4,
}
export enum EventControllerScrollFlags {
    NONE = 0,
    VERTICAL = 1,
    HORIZONTAL = 2,
    DISCRETE = 4,
    KINETIC = 8,
    BOTH_AXES = 3,
}
export enum FileFilterFlags {
    FILENAME = 1,
    URI = 2,
    DISPLAY_NAME = 4,
    MIME_TYPE = 8,
}
export enum FontChooserLevel {
    FAMILY = 0,
    STYLE = 1,
    SIZE = 2,
    VARIATIONS = 4,
    FEATURES = 8,
}
export enum IconLookupFlags {
    NO_SVG = 1,
    FORCE_SVG = 2,
    USE_BUILTIN = 4,
    GENERIC_FALLBACK = 8,
    FORCE_SIZE = 16,
    FORCE_REGULAR = 32,
    FORCE_SYMBOLIC = 64,
    DIR_LTR = 128,
    DIR_RTL = 256,
}
export enum InputHints {
    NONE = 0,
    SPELLCHECK = 1,
    NO_SPELLCHECK = 2,
    WORD_COMPLETION = 4,
    LOWERCASE = 8,
    UPPERCASE_CHARS = 16,
    UPPERCASE_WORDS = 32,
    UPPERCASE_SENTENCES = 64,
    INHIBIT_OSK = 128,
    VERTICAL_WRITING = 256,
    EMOJI = 512,
    NO_EMOJI = 1024,
}
export enum JunctionSides {
    NONE = 0,
    CORNER_TOPLEFT = 1,
    CORNER_TOPRIGHT = 2,
    CORNER_BOTTOMLEFT = 4,
    CORNER_BOTTOMRIGHT = 8,
    TOP = 3,
    BOTTOM = 12,
    LEFT = 5,
    RIGHT = 10,
}
export enum PlacesOpenFlags {
    NORMAL = 1,
    NEW_TAB = 2,
    NEW_WINDOW = 4,
}
export enum RcFlags {
    FG = 1,
    BG = 2,
    TEXT = 4,
    BASE = 8,
}
export enum RecentFilterFlags {
    URI = 1,
    DISPLAY_NAME = 2,
    MIME_TYPE = 4,
    APPLICATION = 8,
    GROUP = 16,
    AGE = 32,
}
export enum RegionFlags {
    EVEN = 1,
    ODD = 2,
    FIRST = 4,
    LAST = 8,
    ONLY = 16,
    SORTED = 32,
}
export enum StateFlags {
    NORMAL = 0,
    ACTIVE = 1,
    PRELIGHT = 2,
    SELECTED = 4,
    INSENSITIVE = 8,
    INCONSISTENT = 16,
    FOCUSED = 32,
    BACKDROP = 64,
    DIR_LTR = 128,
    DIR_RTL = 256,
    LINK = 512,
    VISITED = 1024,
    CHECKED = 2048,
    DROP_ACTIVE = 4096,
}
export enum StyleContextPrintFlags {
    NONE = 0,
    RECURSE = 1,
    SHOW_STYLE = 2,
}
export enum TargetFlags {
    SAME_APP = 1,
    SAME_WIDGET = 2,
    OTHER_APP = 4,
    OTHER_WIDGET = 8,
}
export enum TextSearchFlags {
    VISIBLE_ONLY = 1,
    TEXT_ONLY = 2,
    CASE_INSENSITIVE = 4,
}
export enum ToolPaletteDragTargets {
    ITEMS = 1,
    GROUPS = 2,
}
export enum TreeModelFlags {
    ITERS_PERSIST = 1,
    LIST_ONLY = 2,
}
export enum UIManagerItemType {
    AUTO = 0,
    MENUBAR = 1,
    MENU = 2,
    TOOLBAR = 4,
    PLACEHOLDER = 8,
    POPUP = 16,
    MENUITEM = 32,
    TOOLITEM = 64,
    SEPARATOR = 128,
    ACCELERATOR = 256,
    POPUP_WITH_ACCELS = 512,
}
export class AboutDialog extends Dialog {
    constructor(config?: properties);
    artists: string[];
    authors: string[];
    comments: string;
    copyright: string;
    documenters: string[];
    license: string;
    license_type: License;
    logo: GdkPixbuf.Pixbuf;
    logo_icon_name: string;
    program_name: string;
    translator_credits: string;
    version: string;
    website: string;
    website_label: string;
    wrap_license: boolean;
    add_credit_section(section_name: string, people: string[]): void;
    get_artists(): string[];
    get_authors(): string[];
    get_comments(): string;
    get_copyright(): string;
    get_documenters(): string[];
    get_license(): string;
    get_license_type(): License;
    get_logo(): GdkPixbuf.Pixbuf;
    get_logo_icon_name(): string;
    get_program_name(): string;
    get_translator_credits(): string;
    get_version(): string;
    get_website(): string;
    get_website_label(): string;
    get_wrap_license(): boolean;
    set_artists(artists: string[]): void;
    set_authors(authors: string[]): void;
    set_comments(comments: string | null): void;
    set_copyright(copyright: string | null): void;
    set_documenters(documenters: string[]): void;
    set_license(license: string | null): void;
    set_license_type(license_type: License): void;
    set_logo(logo: GdkPixbuf.Pixbuf | null): void;
    set_logo_icon_name(icon_name: string | null): void;
    set_program_name(name: string): void;
    set_translator_credits(translator_credits: string | null): void;
    set_version(version: string | null): void;
    set_website(website: string | null): void;
    set_website_label(website_label: string): void;
    set_wrap_license(wrap_license: boolean): void;
    vfunc_activate_link(uri: string): boolean;
}
export class AccelGroup extends GObject.Object {
    constructor(config?: properties);
    readonly is_locked: boolean;
    readonly modifier_mask: Gdk.ModifierType;
    activate(accel_quark: GLib.Quark, acceleratable: GObject.Object, accel_key: number, accel_mods: Gdk.ModifierType): boolean;
    connect(accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: AccelFlags, closure: GObject.Closure): void;
    connect_by_path(accel_path: string, closure: GObject.Closure): void;
    disconnect(closure: GObject.Closure | null): boolean;
    disconnect_key(accel_key: number, accel_mods: Gdk.ModifierType): boolean;
    find(find_func: AccelGroupFindFunc, data: object | null): AccelKey;
    get_is_locked(): boolean;
    get_modifier_mask(): Gdk.ModifierType;
    lock(): void;
    query(accel_key: number, accel_mods: Gdk.ModifierType): [AccelGroupEntry[] | null, number | null];
    unlock(): void;
    vfunc_accel_changed(keyval: number, modifier: Gdk.ModifierType, accel_closure: GObject.Closure): void;
    static from_accel_closure(closure: GObject.Closure): AccelGroup | null;
}
export class AccelLabel extends Label {
    constructor(config?: properties);
    accel_closure: GObject.Closure;
    accel_widget: Widget;
    get_accel(): [number,Gdk.ModifierType];
    get_accel_widget(): Widget | null;
    get_accel_width(): number;
    refetch(): boolean;
    set_accel(accelerator_key: number, accelerator_mods: Gdk.ModifierType): void;
    set_accel_closure(accel_closure: GObject.Closure | null): void;
    set_accel_widget(accel_widget: Widget | null): void;
}
export class AccelMap  {
    constructor(config?: properties);
    static add_entry(accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType): void;
    static add_filter(filter_pattern: string): void;
    static change_entry(accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType, replace: boolean): boolean;
    static foreach(data: object | null, foreach_func: AccelMapForeach): void;
    static foreach_unfiltered(data: object | null, foreach_func: AccelMapForeach): void;
    static get(): AccelMap;
    static load(file_name: string): void;
    static load_fd(fd: number): void;
    static load_scanner(scanner: GLib.Scanner): void;
    static lock_path(accel_path: string): void;
    static lookup_entry(accel_path: string): [boolean, AccelKey | null];
    static save(file_name: string): void;
    static save_fd(fd: number): void;
    static unlock_path(accel_path: string): void;
}
export class Accessible  {
    constructor(config?: properties);
    widget: Widget;
    readonly priv: AccessiblePrivate;
    connect_widget_destroyed(): void;
    get_widget(): Widget | null;
    set_widget(widget: Widget | null): void;
}
export class Action extends GObject.Object {
    constructor(config?: properties);
    action_group: ActionGroup;
    always_show_image: boolean;
    gicon: Gio.Icon;
    hide_if_empty: boolean;
    icon_name: string;
    is_important: boolean;
    label: string;
    name: string;
    sensitive: boolean;
    short_label: string;
    stock_id: string;
    tooltip: string;
    visible: boolean;
    visible_horizontal: boolean;
    visible_overflown: boolean;
    visible_vertical: boolean;
    activate(): void;
    block_activate(): void;
    connect_accelerator(): void;
    create_icon(icon_size: number): Widget;
    create_menu(): Widget;
    create_menu_item(): Widget;
    create_tool_item(): Widget;
    disconnect_accelerator(): void;
    get_accel_closure(): GObject.Closure;
    get_accel_path(): string;
    get_always_show_image(): boolean;
    get_gicon(): Gio.Icon;
    get_icon_name(): string;
    get_is_important(): boolean;
    get_label(): string;
    get_name(): string;
    get_proxies(): string[];
    get_sensitive(): boolean;
    get_short_label(): string;
    get_stock_id(): string;
    get_tooltip(): string;
    get_visible(): boolean;
    get_visible_horizontal(): boolean;
    get_visible_vertical(): boolean;
    is_sensitive(): boolean;
    is_visible(): boolean;
    set_accel_group(accel_group: AccelGroup | null): void;
    set_accel_path(accel_path: string): void;
    set_always_show_image(always_show: boolean): void;
    set_gicon(icon: Gio.Icon): void;
    set_icon_name(icon_name: string): void;
    set_is_important(is_important: boolean): void;
    set_label(label: string): void;
    set_sensitive(sensitive: boolean): void;
    set_short_label(short_label: string): void;
    set_stock_id(stock_id: string): void;
    set_tooltip(tooltip: string): void;
    set_visible(visible: boolean): void;
    set_visible_horizontal(visible_horizontal: boolean): void;
    set_visible_vertical(visible_vertical: boolean): void;
    unblock_activate(): void;
    vfunc_activate(): void;
    vfunc_connect_proxy(proxy: Widget): void;
    vfunc_create_menu(): Widget;
    vfunc_create_menu_item(): Widget;
    vfunc_create_tool_item(): Widget;
    vfunc_disconnect_proxy(proxy: Widget): void;
}
export class ActionBar extends Bin {
    constructor(config?: properties);
    get_center_widget(): Widget | null;
    pack_end(child: Widget): void;
    pack_start(child: Widget): void;
    set_center_widget(center_widget: Widget | null): void;
}
export class ActionGroup extends GObject.Object {
    constructor(config?: properties);
    accel_group: AccelGroup;
    name: string;
    sensitive: boolean;
    visible: boolean;
    add_action(action: Action): void;
    add_action_with_accel(action: Action, accelerator: string | null): void;
    get_accel_group(): AccelGroup;
    get_action(action_name: string): Action;
    get_name(): string;
    get_sensitive(): boolean;
    get_visible(): boolean;
    list_actions(): GLib.List;
    remove_action(action: Action): void;
    set_accel_group(accel_group: AccelGroup | null): void;
    set_sensitive(sensitive: boolean): void;
    set_translate_func(func: TranslateFunc, data: object | null, notify: GLib.DestroyNotify): void;
    set_translation_domain(domain: string | null): void;
    set_visible(visible: boolean): void;
    translate_string(string: string): string;
    vfunc_get_action(action_name: string): Action;
}
export class Adjustment extends GObject.InitiallyUnowned {
    constructor(config?: properties);
    lower: number;
    page_increment: number;
    page_size: number;
    step_increment: number;
    upper: number;
    value: number;
    changed(): void;
    clamp_page(lower: number, upper: number): void;
    configure(value: number, lower: number, upper: number, step_increment: number, page_increment: number, page_size: number): void;
    get_lower(): number;
    get_minimum_increment(): number;
    get_page_increment(): number;
    get_page_size(): number;
    get_step_increment(): number;
    get_upper(): number;
    get_value(): number;
    set_lower(lower: number): void;
    set_page_increment(page_increment: number): void;
    set_page_size(page_size: number): void;
    set_step_increment(step_increment: number): void;
    set_upper(upper: number): void;
    set_value(value: number): void;
    value_changed(): void;
    vfunc_changed(): void;
    vfunc_value_changed(): void;
}
export class Alignment extends Bin {
    constructor(config?: properties);
    bottom_padding: number;
    left_padding: number;
    right_padding: number;
    top_padding: number;
    xalign: number;
    xscale: number;
    yalign: number;
    yscale: number;
    get_padding(): [number | null,number | null,number | null,number | null];
    set(xalign: number, yalign: number, xscale: number, yscale: number): void;
    set_padding(padding_top: number, padding_bottom: number, padding_left: number, padding_right: number): void;
}
export class AppChooserButton extends ComboBox {
    constructor(config?: properties);
    heading: string;
    show_default_item: boolean;
    show_dialog_item: boolean;
    append_custom_item(name: string, label: string, icon: Gio.Icon): void;
    append_separator(): void;
    get_heading(): string | null;
    get_show_default_item(): boolean;
    get_show_dialog_item(): boolean;
    set_active_custom_item(name: string): void;
    set_heading(heading: string): void;
    set_show_default_item(setting: boolean): void;
    set_show_dialog_item(setting: boolean): void;
    vfunc_custom_item_activated(item_name: string): void;
}
export class AppChooserDialog extends Dialog {
    constructor(config?: properties);
    gfile: Gio.File;
    heading: string;static new_for_content_type(parent: Window | null, flags: DialogFlags, content_type: string): Widget;
    get_heading(): string | null;
    get_widget(): Widget;
    set_heading(heading: string): void;
}
export class AppChooserWidget extends Box {
    constructor(config?: properties);
    default_text: string;
    show_default: boolean;
    show_fallback: boolean;
    show_other: boolean;
    show_recommended: boolean;
    get_default_text(): string;
    get_show_all(): boolean;
    get_show_default(): boolean;
    get_show_fallback(): boolean;
    get_show_other(): boolean;
    get_show_recommended(): boolean;
    set_default_text(text: string): void;
    set_show_all(setting: boolean): void;
    set_show_default(setting: boolean): void;
    set_show_fallback(setting: boolean): void;
    set_show_other(setting: boolean): void;
    set_show_recommended(setting: boolean): void;
    vfunc_application_activated(app_info: Gio.AppInfo): void;
    vfunc_application_selected(app_info: Gio.AppInfo): void;
    vfunc_populate_popup(menu: Menu, app_info: Gio.AppInfo): void;
}
export class Application extends Gio.Application {
    constructor(config?: properties);
    readonly active_window: Window;
    app_menu: Gio.MenuModel;
    menubar: Gio.MenuModel;
    register_session: boolean;
    readonly screensaver_active: boolean;
    add_accelerator(accelerator: string, action_name: string, parameter: GLib.Variant | null): void;
    add_window(window: Window): void;
    get_accels_for_action(detailed_action_name: string): string[];
    get_actions_for_accel(accel: string): string[];
    get_active_window(): Window | null;
    get_app_menu(): Gio.MenuModel | null;
    get_menu_by_id(id: string): Gio.Menu;
    get_menubar(): Gio.MenuModel;
    get_window_by_id(id: number): Window | null;
    get_windows(): GLib.List;
    inhibit(window: Window | null, flags: ApplicationInhibitFlags, reason: string | null): number;
    is_inhibited(flags: ApplicationInhibitFlags): boolean;
    list_action_descriptions(): string[];
    prefers_app_menu(): boolean;
    remove_accelerator(action_name: string, parameter: GLib.Variant | null): void;
    remove_window(window: Window): void;
    set_accels_for_action(detailed_action_name: string, accels: string[]): void;
    set_app_menu(app_menu: Gio.MenuModel | null): void;
    set_menubar(menubar: Gio.MenuModel | null): void;
    uninhibit(cookie: number): void;
    vfunc_window_added(window: Window): void;
    vfunc_window_removed(window: Window): void;
}
export class ApplicationWindow extends Window {
    constructor(config?: properties);
    show_menubar: boolean;
    get_help_overlay(): ShortcutsWindow | null;
    get_id(): number;
    get_show_menubar(): boolean;
    set_help_overlay(help_overlay: ShortcutsWindow | null): void;
    set_show_menubar(show_menubar: boolean): void;
}
export class Arrow extends Misc {
    constructor(config?: properties);
    arrow_type: ArrowType;
    shadow_type: ShadowType;
    set(arrow_type: ArrowType, shadow_type: ShadowType): void;
}
export class ArrowAccessible  {
    constructor(config?: properties);
    readonly priv: ArrowAccessiblePrivate;
}
export class AspectFrame extends Frame {
    constructor(config?: properties);
    obey_child: boolean;
    ratio: number;
    xalign: number;
    yalign: number;
    set(xalign: number, yalign: number, ratio: number, obey_child: boolean): void;
}
export class Assistant extends Window {
    constructor(config?: properties);
    use_header_bar: number;
    add_action_widget(child: Widget): void;
    append_page(page: Widget): number;
    commit(): void;
    get_current_page(): number;
    get_n_pages(): number;
    get_nth_page(page_num: number): Widget | null;
    get_page_complete(page: Widget): boolean;
    get_page_has_padding(page: Widget): boolean;
    get_page_header_image(page: Widget): GdkPixbuf.Pixbuf;
    get_page_side_image(page: Widget): GdkPixbuf.Pixbuf;
    get_page_title(page: Widget): string;
    get_page_type(page: Widget): AssistantPageType;
    insert_page(page: Widget, position: number): number;
    next_page(): void;
    prepend_page(page: Widget): number;
    previous_page(): void;
    remove_action_widget(child: Widget): void;
    remove_page(page_num: number): void;
    set_current_page(page_num: number): void;
    set_forward_page_func(page_func: AssistantPageFunc | null, data: object | null, destroy: GLib.DestroyNotify): void;
    set_page_complete(page: Widget, complete: boolean): void;
    set_page_has_padding(page: Widget, has_padding: boolean): void;
    set_page_header_image(page: Widget, pixbuf: GdkPixbuf.Pixbuf | null): void;
    set_page_side_image(page: Widget, pixbuf: GdkPixbuf.Pixbuf | null): void;
    set_page_title(page: Widget, title: string): void;
    set_page_type(page: Widget, type: AssistantPageType): void;
    update_buttons_state(): void;
    vfunc_apply(): void;
    vfunc_cancel(): void;
    vfunc_close(): void;
    vfunc_prepare(page: Widget): void;
}
export class Bin  {
    constructor(config?: properties);
    readonly container: Container;
    readonly priv: BinPrivate;
    get_child(): Widget | null;
}
export class BooleanCellAccessible  {
    constructor(config?: properties);
    readonly priv: BooleanCellAccessiblePrivate;
}
export class Box extends Container {
    constructor(config?: properties);
    baseline_position: BaselinePosition;
    homogeneous: boolean;
    spacing: number;
    get_baseline_position(): BaselinePosition;
    get_center_widget(): Widget | null;
    get_homogeneous(): boolean;
    get_spacing(): number;
    pack_end(child: Widget, expand: boolean, fill: boolean, padding: number): void;
    pack_start(child: Widget, expand: boolean, fill: boolean, padding: number): void;
    query_child_packing(child: Widget): [boolean,boolean,number,PackType];
    reorder_child(child: Widget, position: number): void;
    set_baseline_position(position: BaselinePosition): void;
    set_center_widget(widget: Widget | null): void;
    set_child_packing(child: Widget, expand: boolean, fill: boolean, padding: number, pack_type: PackType): void;
    set_homogeneous(homogeneous: boolean): void;
    set_spacing(spacing: number): void;
}
export class Builder extends GObject.Object {
    constructor(config?: properties);
    translation_domain: string;static new_from_file(filename: string): Builder;
    static new_from_resource(resource_path: string): Builder;
    static new_from_string(string: string, length: number): Builder;
    add_callback_symbol(callback_name: string, callback_symbol: GObject.Callback): void;
    add_from_file(filename: string): number;
    add_from_resource(resource_path: string): number;
    add_from_string(buffer: string, length: number): number;
    add_objects_from_file(filename: string, object_ids: string[]): number;
    add_objects_from_resource(resource_path: string, object_ids: string[]): number;
    add_objects_from_string(buffer: string, length: number, object_ids: string[]): number;
    connect_signals(user_data: object | null): void;
    connect_signals_full(func: BuilderConnectFunc, user_data: object | null): void;
    expose_object(name: string, object: GObject.Object): void;
    extend_with_template(widget: Widget, template_type: GType, buffer: string, length: number): number;
    get_application(): Application | null;
    get_object(name: string): GObject.Object | null;
    get_objects(): string[];
    get_translation_domain(): string;
    get_type_from_name(type_name: string): GType;
    set_application(application: Application): void;
    set_translation_domain(domain: string | null): void;
    value_from_string(pspec: GObject.ParamSpec, string: string): [boolean, GObject.Value];
    value_from_string_type(type: GType, string: string): [boolean, GObject.Value];
    vfunc_get_type_from_name(type_name: string): GType;
}
export class Button extends Bin {
    constructor(config?: properties);
    always_show_image: boolean;
    image: Widget;
    image_position: PositionType;
    label: string;
    relief: ReliefStyle;
    use_stock: boolean;
    use_underline: boolean;
    xalign: number;
    yalign: number;static new_from_icon_name(icon_name: string | null, size: number): Widget;
    static new_from_stock(stock_id: string): Widget;
    static new_with_label(label: string): Widget;
    static new_with_mnemonic(label: string): Widget;
    clicked(): void;
    enter(): void;
    get_alignment(): [number,number];
    get_always_show_image(): boolean;
    get_event_window(): Gdk.Window;
    get_focus_on_click(): boolean;
    get_image(): Widget | null;
    get_image_position(): PositionType;
    get_label(): string;
    get_relief(): ReliefStyle;
    get_use_stock(): boolean;
    get_use_underline(): boolean;
    leave(): void;
    pressed(): void;
    released(): void;
    set_alignment(xalign: number, yalign: number): void;
    set_always_show_image(always_show: boolean): void;
    set_focus_on_click(focus_on_click: boolean): void;
    set_image(image: Widget | null): void;
    set_image_position(position: PositionType): void;
    set_label(label: string): void;
    set_relief(relief: ReliefStyle): void;
    set_use_stock(use_stock: boolean): void;
    set_use_underline(use_underline: boolean): void;
    vfunc_activate(): void;
    vfunc_clicked(): void;
    vfunc_enter(): void;
    vfunc_leave(): void;
    vfunc_pressed(): void;
    vfunc_released(): void;
}
export class ButtonAccessible  {
    constructor(config?: properties);
    readonly priv: ButtonAccessiblePrivate;
}
export class ButtonBox extends Box {
    constructor(config?: properties);
    layout_style: ButtonBoxStyle;
    get_child_non_homogeneous(child: Widget): boolean;
    get_child_secondary(child: Widget): boolean;
    get_layout(): ButtonBoxStyle;
    set_child_non_homogeneous(child: Widget, non_homogeneous: boolean): void;
    set_child_secondary(child: Widget, is_secondary: boolean): void;
    set_layout(layout_style: ButtonBoxStyle): void;
}
export class Calendar extends Widget {
    constructor(config?: properties);
    day: number;
    detail_height_rows: number;
    detail_width_chars: number;
    month: number;
    no_month_change: boolean;
    show_day_names: boolean;
    show_details: boolean;
    show_heading: boolean;
    show_week_numbers: boolean;
    year: number;
    clear_marks(): void;
    get_date(): [number | null,number | null,number | null];
    get_day_is_marked(day: number): boolean;
    get_detail_height_rows(): number;
    get_detail_width_chars(): number;
    get_display_options(): CalendarDisplayOptions;
    mark_day(day: number): void;
    select_day(day: number): void;
    select_month(month: number, year: number): void;
    set_detail_func(func: CalendarDetailFunc, data: object | null, destroy: GLib.DestroyNotify): void;
    set_detail_height_rows(rows: number): void;
    set_detail_width_chars(chars: number): void;
    set_display_options(flags: CalendarDisplayOptions): void;
    unmark_day(day: number): void;
    vfunc_day_selected(): void;
    vfunc_day_selected_double_click(): void;
    vfunc_month_changed(): void;
    vfunc_next_month(): void;
    vfunc_next_year(): void;
    vfunc_prev_month(): void;
    vfunc_prev_year(): void;
}
export class CellAccessible  {
    constructor(config?: properties);
    readonly priv: CellAccessiblePrivate;
}
export class CellArea  {
    constructor(config?: properties);
    readonly edit_widget: CellEditable;
    readonly edited_cell: CellRenderer;
    focus_cell: CellRenderer;
    readonly priv: CellAreaPrivate;
    activate(context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, flags: CellRendererState, edit_only: boolean): boolean;
    activate_cell(widget: Widget, renderer: CellRenderer, event: Gdk.Event, cell_area: Gdk.Rectangle, flags: CellRendererState): boolean;
    add(renderer: CellRenderer): void;
    add_focus_sibling(renderer: CellRenderer, sibling: CellRenderer): void;
    apply_attributes(tree_model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean): void;
    attribute_connect(renderer: CellRenderer, attribute: string, column: number): void;
    attribute_disconnect(renderer: CellRenderer, attribute: string): void;
    attribute_get_column(renderer: CellRenderer, attribute: string): number;
    cell_get_property(renderer: CellRenderer, property_name: string, value: GObject.Value): void;
    cell_set_property(renderer: CellRenderer, property_name: string, value: GObject.Value): void;
    copy_context(context: CellAreaContext): CellAreaContext;
    create_context(): CellAreaContext;
    event(context: CellAreaContext, widget: Widget, event: Gdk.Event, cell_area: Gdk.Rectangle, flags: CellRendererState): number;
    focus(direction: DirectionType): boolean;
    foreach(callback: CellCallback, callback_data: object | null): void;
    foreach_alloc(context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, background_area: Gdk.Rectangle, callback: CellAllocCallback, callback_data: object | null): void;
    get_cell_allocation(context: CellAreaContext, widget: Widget, renderer: CellRenderer, cell_area: Gdk.Rectangle): [Gdk.Rectangle];
    get_cell_at_position(context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, x: number, y: number): [CellRenderer, Gdk.Rectangle | null];
    get_current_path_string(): string;
    get_edit_widget(): CellEditable;
    get_edited_cell(): CellRenderer;
    get_focus_cell(): CellRenderer;
    get_focus_from_sibling(renderer: CellRenderer): CellRenderer | null;
    get_focus_siblings(renderer: CellRenderer): GLib.List;
    get_preferred_height(context: CellAreaContext, widget: Widget): [number | null,number | null];
    get_preferred_height_for_width(context: CellAreaContext, widget: Widget, width: number): [number | null,number | null];
    get_preferred_width(context: CellAreaContext, widget: Widget): [number | null,number | null];
    get_preferred_width_for_height(context: CellAreaContext, widget: Widget, height: number): [number | null,number | null];
    get_request_mode(): SizeRequestMode;
    has_renderer(renderer: CellRenderer): boolean;
    inner_cell_area(widget: Widget, cell_area: Gdk.Rectangle): [Gdk.Rectangle];
    is_activatable(): boolean;
    is_focus_sibling(renderer: CellRenderer, sibling: CellRenderer): boolean;
    remove(renderer: CellRenderer): void;
    remove_focus_sibling(renderer: CellRenderer, sibling: CellRenderer): void;
    render(context: CellAreaContext, widget: Widget, cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState, paint_focus: boolean): void;
    request_renderer(renderer: CellRenderer, orientation: Orientation, widget: Widget, for_size: number): [number | null,number | null];
    set_focus_cell(renderer: CellRenderer): void;
    stop_editing(canceled: boolean): void;
}
export class CellAreaBox extends CellArea {
    constructor(config?: properties);
    spacing: number;
    get_spacing(): number;
    pack_end(renderer: CellRenderer, expand: boolean, align: boolean, fixed: boolean): void;
    pack_start(renderer: CellRenderer, expand: boolean, align: boolean, fixed: boolean): void;
    set_spacing(spacing: number): void;
}
export class CellAreaContext  {
    constructor(config?: properties);
    area: CellArea;
    readonly minimum_height: number;
    readonly minimum_width: number;
    readonly natural_height: number;
    readonly natural_width: number;
    readonly priv: CellAreaContextPrivate;
    allocate(width: number, height: number): void;
    get_allocation(): [number | null,number | null];
    get_area(): CellArea;
    get_preferred_height(): [number | null,number | null];
    get_preferred_height_for_width(width: number): [number | null,number | null];
    get_preferred_width(): [number | null,number | null];
    get_preferred_width_for_height(height: number): [number | null,number | null];
    push_preferred_height(minimum_height: number, natural_height: number): void;
    push_preferred_width(minimum_width: number, natural_width: number): void;
    reset(): void;
}
export class CellRenderer  {
    constructor(config?: properties);
    cell_background: string;
    cell_background_gdk: Gdk.Color;
    cell_background_rgba: Gdk.RGBA;
    cell_background_set: boolean;
    readonly editing: boolean;
    height: number;
    is_expanded: boolean;
    is_expander: boolean;
    mode: CellRendererMode;
    sensitive: boolean;
    visible: boolean;
    width: number;
    xalign: number;
    xpad: number;
    yalign: number;
    ypad: number;
    readonly priv: CellRendererPrivate;
    activate(event: Gdk.Event, widget: Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState): boolean;
    get_aligned_area(widget: Widget, flags: CellRendererState, cell_area: Gdk.Rectangle): [Gdk.Rectangle];
    get_alignment(): [number | null,number | null];
    get_fixed_size(): [number | null,number | null];
    get_padding(): [number | null,number | null];
    get_preferred_height(widget: Widget): [number | null,number | null];
    get_preferred_height_for_width(widget: Widget, width: number): [number | null,number | null];
    get_preferred_size(widget: Widget): [Requisition | null,Requisition | null];
    get_preferred_width(widget: Widget): [number | null,number | null];
    get_preferred_width_for_height(widget: Widget, height: number): [number | null,number | null];
    get_request_mode(): SizeRequestMode;
    get_sensitive(): boolean;
    get_size(widget: Widget, cell_area: Gdk.Rectangle | null): [number | null,number | null,number | null,number | null];
    get_state(widget: Widget | null, cell_state: CellRendererState): StateFlags;
    get_visible(): boolean;
    is_activatable(): boolean;
    render(cr: cairo.Context, widget: Widget, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState): void;
    set_alignment(xalign: number, yalign: number): void;
    set_fixed_size(width: number, height: number): void;
    set_padding(xpad: number, ypad: number): void;
    set_sensitive(sensitive: boolean): void;
    set_visible(visible: boolean): void;
    start_editing(event: Gdk.Event | null, widget: Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState): CellEditable | null;
    stop_editing(canceled: boolean): void;
}
export class CellRendererAccel extends CellRendererText {
    constructor(config?: properties);
    accel_key: number;
    accel_mode: CellRendererAccelMode;
    accel_mods: Gdk.ModifierType;
    keycode: number;
    vfunc_accel_cleared(path_string: string): void;
    vfunc_accel_edited(path_string: string, accel_key: number, accel_mods: Gdk.ModifierType, hardware_keycode: number): void;
}
export class CellRendererCombo extends CellRendererText {
    constructor(config?: properties);
    has_entry: boolean;
    model: TreeModel;
    text_column: number;
}
export class CellRendererPixbuf extends CellRenderer {
    constructor(config?: properties);
    follow_state: boolean;
    gicon: Gio.Icon;
    icon_name: string;
    pixbuf: GdkPixbuf.Pixbuf;
    pixbuf_expander_closed: GdkPixbuf.Pixbuf;
    pixbuf_expander_open: GdkPixbuf.Pixbuf;
    stock_detail: string;
    stock_id: string;
    stock_size: number;
    surface: cairo.Surface;
}
export class CellRendererProgress extends CellRenderer {
    constructor(config?: properties);
    inverted: boolean;
    pulse: number;
    text: string;
    text_xalign: number;
    text_yalign: number;
    value: number;
}
export class CellRendererSpin extends CellRendererText {
    constructor(config?: properties);
    adjustment: Adjustment;
    climb_rate: number;
    digits: number;
}
export class CellRendererSpinner extends CellRenderer {
    constructor(config?: properties);
    active: boolean;
    pulse: number;
    size: IconSize;
}
export class CellRendererText extends CellRenderer {
    constructor(config?: properties);
    align_set: boolean;
    alignment: Pango.Alignment;
    attributes: Pango.AttrList;
    background: string;
    background_gdk: Gdk.Color;
    background_rgba: Gdk.RGBA;
    background_set: boolean;
    editable: boolean;
    editable_set: boolean;
    ellipsize: Pango.EllipsizeMode;
    ellipsize_set: boolean;
    family: string;
    family_set: boolean;
    font: string;
    font_desc: Pango.FontDescription;
    foreground: string;
    foreground_gdk: Gdk.Color;
    foreground_rgba: Gdk.RGBA;
    foreground_set: boolean;
    language: string;
    language_set: boolean;
    markup: string;
    max_width_chars: number;
    placeholder_text: string;
    rise: number;
    rise_set: boolean;
    scale: number;
    scale_set: boolean;
    single_paragraph_mode: boolean;
    size: number;
    size_points: number;
    size_set: boolean;
    stretch: Pango.Stretch;
    stretch_set: boolean;
    strikethrough: boolean;
    strikethrough_set: boolean;
    style: Pango.Style;
    style_set: boolean;
    text: string;
    underline: Pango.Underline;
    underline_set: boolean;
    variant: Pango.Variant;
    variant_set: boolean;
    weight: number;
    weight_set: boolean;
    width_chars: number;
    wrap_mode: Pango.WrapMode;
    wrap_width: number;
    set_fixed_height_from_font(number_of_rows: number): void;
    vfunc_edited(path: string, new_text: string): void;
}
export class CellRendererToggle extends CellRenderer {
    constructor(config?: properties);
    activatable: boolean;
    active: boolean;
    inconsistent: boolean;
    indicator_size: number;
    radio: boolean;
    get_activatable(): boolean;
    get_active(): boolean;
    get_radio(): boolean;
    set_activatable(setting: boolean): void;
    set_active(setting: boolean): void;
    set_radio(radio: boolean): void;
    vfunc_toggled(path: string): void;
}
export class CellView extends Widget {
    constructor(config?: properties);
    background: string;
    background_gdk: Gdk.Color;
    background_rgba: Gdk.RGBA;
    background_set: boolean;
    cell_area: CellArea;
    cell_area_context: CellAreaContext;
    draw_sensitive: boolean;
    fit_model: boolean;
    model: TreeModel;static new_with_context(area: CellArea, context: CellAreaContext): Widget;
    static new_with_markup(markup: string): Widget;
    static new_with_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Widget;
    static new_with_text(text: string): Widget;
    get_displayed_row(): TreePath | null;
    get_draw_sensitive(): boolean;
    get_fit_model(): boolean;
    get_model(): TreeModel | null;
    get_size_of_row(path: TreePath): [boolean, Requisition];
    set_background_color(color: Gdk.Color): void;
    set_background_rgba(rgba: Gdk.RGBA): void;
    set_displayed_row(path: TreePath | null): void;
    set_draw_sensitive(draw_sensitive: boolean): void;
    set_fit_model(fit_model: boolean): void;
    set_model(model: TreeModel | null): void;
}
export class CheckButton extends ToggleButton {
    constructor(config?: properties);
    static new_with_label(label: string): Widget;
    static new_with_mnemonic(label: string): Widget;
    vfunc_draw_indicator(cr: cairo.Context): void;
}
export class CheckMenuItem extends MenuItem {
    constructor(config?: properties);
    active: boolean;
    draw_as_radio: boolean;
    inconsistent: boolean;static new_with_label(label: string): Widget;
    static new_with_mnemonic(label: string): Widget;
    get_active(): boolean;
    get_draw_as_radio(): boolean;
    get_inconsistent(): boolean;
    set_active(is_active: boolean): void;
    set_draw_as_radio(draw_as_radio: boolean): void;
    set_inconsistent(setting: boolean): void;
    toggled(): void;
    vfunc_draw_indicator(cr: cairo.Context): void;
    vfunc_toggled(): void;
}
export class CheckMenuItemAccessible  {
    constructor(config?: properties);
    readonly priv: CheckMenuItemAccessiblePrivate;
}
export class Clipboard  {
    constructor(config?: properties);
    clear(): void;
    get_display(): Gdk.Display;
    get_owner(): GObject.Object | null;
    request_contents(target: Gdk.Atom, callback: ClipboardReceivedFunc, user_data: object | null): void;
    request_image(callback: ClipboardImageReceivedFunc, user_data: object | null): void;
    request_rich_text(buffer: TextBuffer, callback: ClipboardRichTextReceivedFunc, user_data: object | null): void;
    request_targets(callback: ClipboardTargetsReceivedFunc, user_data: object | null): void;
    request_text(callback: ClipboardTextReceivedFunc, user_data: object | null): void;
    request_uris(callback: ClipboardURIReceivedFunc, user_data: object | null): void;
    set_can_store(targets: TargetEntry[] | null, n_targets: number): void;
    set_image(pixbuf: GdkPixbuf.Pixbuf): void;
    set_text(text: string, len: number): void;
    store(): void;
    wait_for_contents(target: Gdk.Atom): SelectionData | null;
    wait_for_image(): GdkPixbuf.Pixbuf | null;
    wait_for_rich_text(buffer: TextBuffer): [number[] | null, Gdk.Atom,number];
    wait_for_targets(): [boolean, Gdk.Atom[],number];
    wait_for_text(): string | null;
    wait_for_uris(): string[] | null;
    wait_is_image_available(): boolean;
    wait_is_rich_text_available(buffer: TextBuffer): boolean;
    wait_is_target_available(target: Gdk.Atom): boolean;
    wait_is_text_available(): boolean;
    wait_is_uris_available(): boolean;
    static get(selection: Gdk.Atom): Clipboard;
    static get_default(display: Gdk.Display): Clipboard;
    static get_for_display(display: Gdk.Display, selection: Gdk.Atom): Clipboard;
}
export class ColorButton extends Button {
    constructor(config?: properties);
    alpha: number;
    color: Gdk.Color;
    rgba: Gdk.RGBA;
    show_editor: boolean;
    title: string;
    use_alpha: boolean;static new_with_color(color: Gdk.Color): Widget;
    static new_with_rgba(rgba: Gdk.RGBA): Widget;
    get_alpha(): number;
    get_color(): [Gdk.Color];
    get_title(): string;
    get_use_alpha(): boolean;
    set_alpha(alpha: number): void;
    set_color(color: Gdk.Color): void;
    set_title(title: string): void;
    set_use_alpha(use_alpha: boolean): void;
    vfunc_color_set(): void;
}
export class ColorChooserDialog extends Dialog {
    constructor(config?: properties);
    show_editor: boolean;
}
export class ColorChooserWidget extends Box {
    constructor(config?: properties);
    show_editor: boolean;
}
export class ColorSelection extends Box {
    constructor(config?: properties);
    current_alpha: number;
    current_color: Gdk.Color;
    current_rgba: Gdk.RGBA;
    has_opacity_control: boolean;
    has_palette: boolean;
    get_current_alpha(): number;
    get_current_color(): [Gdk.Color];
    get_current_rgba(): [Gdk.RGBA];
    get_has_opacity_control(): boolean;
    get_has_palette(): boolean;
    get_previous_alpha(): number;
    get_previous_color(): [Gdk.Color];
    get_previous_rgba(): [Gdk.RGBA];
    is_adjusting(): boolean;
    set_current_alpha(alpha: number): void;
    set_current_color(color: Gdk.Color): void;
    set_current_rgba(rgba: Gdk.RGBA): void;
    set_has_opacity_control(has_opacity: boolean): void;
    set_has_palette(has_palette: boolean): void;
    set_previous_alpha(alpha: number): void;
    set_previous_color(color: Gdk.Color): void;
    set_previous_rgba(rgba: Gdk.RGBA): void;
    vfunc_color_changed(): void;
    static palette_from_string(str: string): [boolean, Gdk.Color[],number];
    static palette_to_string(colors: Gdk.Color[], n_colors: number): string;
}
export class ColorSelectionDialog extends Dialog {
    constructor(config?: properties);
    readonly cancel_button: Widget;
    readonly color_selection: Widget;
    readonly help_button: Widget;
    readonly ok_button: Widget;
    get_color_selection(): Widget;
}
export class ComboBox extends Bin {
    constructor(config?: properties);
    active: number;
    active_id: string;
    add_tearoffs: boolean;
    button_sensitivity: SensitivityType;
    cell_area: CellArea;
    column_span_column: number;
    entry_text_column: number;
    has_entry: boolean;
    has_frame: boolean;
    id_column: number;
    model: TreeModel;
    popup_fixed_width: boolean;
    readonly popup_shown: boolean;
    row_span_column: number;
    tearoff_title: string;
    wrap_width: number;static new_with_area(area: CellArea): Widget;
    static new_with_area_and_entry(area: CellArea): Widget;
    static new_with_entry(): Widget;
    static new_with_model(model: TreeModel): Widget;
    static new_with_model_and_entry(model: TreeModel): Widget;
    get_active(): number;
    get_active_id(): string | null;
    get_active_iter(): [boolean, TreeIter];
    get_add_tearoffs(): boolean;
    get_button_sensitivity(): SensitivityType;
    get_column_span_column(): number;
    get_entry_text_column(): number;
    get_focus_on_click(): boolean;
    get_has_entry(): boolean;
    get_id_column(): number;
    get_model(): TreeModel;
    get_popup_accessible(): Atk.Object;
    get_popup_fixed_width(): boolean;
    get_row_span_column(): number;
    get_title(): string;
    get_wrap_width(): number;
    popdown(): void;
    popup(): void;
    popup_for_device(device: Gdk.Device): void;
    set_active(index_: number): void;
    set_active_id(active_id: string | null): boolean;
    set_active_iter(iter: TreeIter | null): void;
    set_add_tearoffs(add_tearoffs: boolean): void;
    set_button_sensitivity(sensitivity: SensitivityType): void;
    set_column_span_column(column_span: number): void;
    set_entry_text_column(text_column: number): void;
    set_focus_on_click(focus_on_click: boolean): void;
    set_id_column(id_column: number): void;
    set_model(model: TreeModel | null): void;
    set_popup_fixed_width(fixed: boolean): void;
    set_row_separator_func(func: TreeViewRowSeparatorFunc, data: object | null, destroy: GLib.DestroyNotify | null): void;
    set_row_span_column(row_span: number): void;
    set_title(title: string): void;
    set_wrap_width(width: number): void;
    vfunc_changed(): void;
    vfunc_format_entry_text(path: string): string;
}
export class ComboBoxAccessible  {
    constructor(config?: properties);
    readonly priv: ComboBoxAccessiblePrivate;
}
export class ComboBoxText extends ComboBox {
    constructor(config?: properties);
    static new_with_entry(): Widget;
    append(id: string | null, text: string): void;
    append_text(text: string): void;
    get_active_text(): string;
    insert(position: number, id: string | null, text: string): void;
    insert_text(position: number, text: string): void;
    prepend(id: string | null, text: string): void;
    prepend_text(text: string): void;
    remove(position: number): void;
    remove_all(): void;
}
export class Container  {
    constructor(config?: properties);
    border_width: number;
    child: Widget;
    resize_mode: ResizeMode;
    readonly widget: Widget;
    readonly priv: ContainerPrivate;
    add(widget: Widget): void;
    check_resize(): void;
    child_get_property(child: Widget, property_name: string, value: GObject.Value): void;
    child_notify(child: Widget, child_property: string): void;
    child_notify_by_pspec(child: Widget, pspec: GObject.ParamSpec): void;
    child_set_property(child: Widget, property_name: string, value: GObject.Value): void;
    child_type(): GType;
    forall(callback: Callback, callback_data: object | null): void;
    foreach(callback: Callback, callback_data: object | null): void;
    get_border_width(): number;
    get_children(): GLib.List;
    get_focus_chain(): [boolean, GLib.List];
    get_focus_child(): Widget | null;
    get_focus_hadjustment(): Adjustment | null;
    get_focus_vadjustment(): Adjustment | null;
    get_path_for_child(child: Widget): WidgetPath;
    get_resize_mode(): ResizeMode;
    propagate_draw(child: Widget, cr: cairo.Context): void;
    remove(widget: Widget): void;
    resize_children(): void;
    set_border_width(border_width: number): void;
    set_focus_chain(focusable_widgets: GLib.List): void;
    set_focus_child(child: Widget | null): void;
    set_focus_hadjustment(adjustment: Adjustment): void;
    set_focus_vadjustment(adjustment: Adjustment): void;
    set_reallocate_redraws(needs_redraws: boolean): void;
    set_resize_mode(resize_mode: ResizeMode): void;
    unset_focus_chain(): void;
}
export class ContainerAccessible  {
    constructor(config?: properties);
    readonly priv: ContainerAccessiblePrivate;
}
export class ContainerCellAccessible extends CellAccessible {
    constructor(config?: properties);
    add_child(child: CellAccessible): void;
    get_children(): GLib.List;
    remove_child(child: CellAccessible): void;
}
export class CssProvider extends GObject.Object {
    constructor(config?: properties);
    load_from_data(data: number[], length: number): boolean;
    load_from_file(file: Gio.File): boolean;
    load_from_path(path: string): boolean;
    load_from_resource(resource_path: string): void;
    to_string(): string;
    vfunc_parsing_error(section: CssSection, error: GLib.Error): void;
    static get_default(): CssProvider;
    static get_named(name: string, variant: string | null): CssProvider;
}
export class Dialog extends Window {
    constructor(config?: properties);
    use_header_bar: number;
    add_action_widget(child: Widget, response_id: number): void;
    add_button(button_text: string, response_id: number): Widget;
    get_action_area(): Widget;
    get_content_area(): Box;
    get_header_bar(): Widget;
    get_response_for_widget(widget: Widget): number;
    get_widget_for_response(response_id: number): Widget | null;
    response(response_id: number): void;
    run(): number;
    set_alternative_button_order_from_array(n_params: number, new_order: number[]): void;
    set_default_response(response_id: number): void;
    set_response_sensitive(response_id: number, setting: boolean): void;
    vfunc_close(): void;
    vfunc_response(response_id: number): void;
}
export class DrawingArea extends Widget {
    constructor(config?: properties);
}
export class Entry extends Widget {
    constructor(config?: properties);
    activates_default: boolean;
    attributes: Pango.AttrList;
    buffer: EntryBuffer;
    caps_lock_warning: boolean;
    completion: EntryCompletion;
    readonly cursor_position: number;
    editable: boolean;
    enable_emoji_completion: boolean;
    has_frame: boolean;
    im_module: string;
    inner_border: Border;
    input_hints: InputHints;
    input_purpose: InputPurpose;
    invisible_char: number;
    invisible_char_set: boolean;
    max_length: number;
    max_width_chars: number;
    overwrite_mode: boolean;
    placeholder_text: string;
    populate_all: boolean;
    primary_icon_activatable: boolean;
    primary_icon_gicon: Gio.Icon;
    primary_icon_name: string;
    primary_icon_pixbuf: GdkPixbuf.Pixbuf;
    primary_icon_sensitive: boolean;
    primary_icon_stock: string;
    readonly primary_icon_storage_type: ImageType;
    primary_icon_tooltip_markup: string;
    primary_icon_tooltip_text: string;
    progress_fraction: number;
    progress_pulse_step: number;
    readonly scroll_offset: number;
    secondary_icon_activatable: boolean;
    secondary_icon_gicon: Gio.Icon;
    secondary_icon_name: string;
    secondary_icon_pixbuf: GdkPixbuf.Pixbuf;
    secondary_icon_sensitive: boolean;
    secondary_icon_stock: string;
    readonly secondary_icon_storage_type: ImageType;
    secondary_icon_tooltip_markup: string;
    secondary_icon_tooltip_text: string;
    readonly selection_bound: number;
    shadow_type: ShadowType;
    show_emoji_icon: boolean;
    tabs: Pango.TabArray;
    text: string;
    readonly text_length: number;
    truncate_multiline: boolean;
    visibility: boolean;
    width_chars: number;
    xalign: number;static new_with_buffer(buffer: EntryBuffer): Widget;
    get_activates_default(): boolean;
    get_alignment(): number;
    get_attributes(): Pango.AttrList | null;
    get_buffer(): EntryBuffer;
    get_completion(): EntryCompletion;
    get_current_icon_drag_source(): number;
    get_cursor_hadjustment(): Adjustment | null;
    get_has_frame(): boolean;
    get_icon_activatable(icon_pos: EntryIconPosition): boolean;
    get_icon_area(icon_pos: EntryIconPosition): [Gdk.Rectangle];
    get_icon_at_pos(x: number, y: number): number;
    get_icon_gicon(icon_pos: EntryIconPosition): Gio.Icon | null;
    get_icon_name(icon_pos: EntryIconPosition): string | null;
    get_icon_pixbuf(icon_pos: EntryIconPosition): GdkPixbuf.Pixbuf | null;
    get_icon_sensitive(icon_pos: EntryIconPosition): boolean;
    get_icon_stock(icon_pos: EntryIconPosition): string;
    get_icon_storage_type(icon_pos: EntryIconPosition): ImageType;
    get_icon_tooltip_markup(icon_pos: EntryIconPosition): string | null;
    get_icon_tooltip_text(icon_pos: EntryIconPosition): string | null;
    get_inner_border(): Border | null;
    get_input_hints(): InputHints;
    get_input_purpose(): InputPurpose;
    get_invisible_char(): number;
    get_layout(): Pango.Layout;
    get_layout_offsets(): [number | null,number | null];
    get_max_length(): number;
    get_max_width_chars(): number;
    get_overwrite_mode(): boolean;
    get_placeholder_text(): string;
    get_progress_fraction(): number;
    get_progress_pulse_step(): number;
    get_tabs(): Pango.TabArray | null;
    get_text(): string;
    get_text_area(): [Gdk.Rectangle];
    get_text_length(): number;
    get_visibility(): boolean;
    get_width_chars(): number;
    grab_focus_without_selecting(): void;
    im_context_filter_keypress(event: Gdk.EventKey): boolean;
    layout_index_to_text_index(layout_index: number): number;
    progress_pulse(): void;
    reset_im_context(): void;
    set_activates_default(setting: boolean): void;
    set_alignment(xalign: number): void;
    set_attributes(attrs: Pango.AttrList): void;
    set_buffer(buffer: EntryBuffer): void;
    set_completion(completion: EntryCompletion | null): void;
    set_cursor_hadjustment(adjustment: Adjustment | null): void;
    set_has_frame(setting: boolean): void;
    set_icon_activatable(icon_pos: EntryIconPosition, activatable: boolean): void;
    set_icon_drag_source(icon_pos: EntryIconPosition, target_list: TargetList, actions: Gdk.DragAction): void;
    set_icon_from_gicon(icon_pos: EntryIconPosition, icon: Gio.Icon | null): void;
    set_icon_from_icon_name(icon_pos: EntryIconPosition, icon_name: string | null): void;
    set_icon_from_pixbuf(icon_pos: EntryIconPosition, pixbuf: GdkPixbuf.Pixbuf | null): void;
    set_icon_from_stock(icon_pos: EntryIconPosition, stock_id: string | null): void;
    set_icon_sensitive(icon_pos: EntryIconPosition, sensitive: boolean): void;
    set_icon_tooltip_markup(icon_pos: EntryIconPosition, tooltip: string | null): void;
    set_icon_tooltip_text(icon_pos: EntryIconPosition, tooltip: string | null): void;
    set_inner_border(border: Border | null): void;
    set_input_hints(hints: InputHints): void;
    set_input_purpose(purpose: InputPurpose): void;
    set_invisible_char(ch: number): void;
    set_max_length(max: number): void;
    set_max_width_chars(n_chars: number): void;
    set_overwrite_mode(overwrite: boolean): void;
    set_placeholder_text(text: string | null): void;
    set_progress_fraction(fraction: number): void;
    set_progress_pulse_step(fraction: number): void;
    set_tabs(tabs: Pango.TabArray): void;
    set_text(text: string): void;
    set_visibility(visible: boolean): void;
    set_width_chars(n_chars: number): void;
    text_index_to_layout_index(text_index: number): number;
    unset_invisible_char(): void;
    vfunc_activate(): void;
    activate(...args: never[]): never;
    vfunc_backspace(): void;
    vfunc_copy_clipboard(): void;
    vfunc_cut_clipboard(): void;
    vfunc_delete_from_cursor(type: DeleteType, count: number): void;
    vfunc_get_frame_size(x: number, y: number, width: number, height: number): void;
    vfunc_get_text_area_size(x: number, y: number, width: number, height: number): void;
    vfunc_insert_at_cursor(str: string): void;
    vfunc_insert_emoji(): void;
    vfunc_move_cursor(step: MovementStep, count: number, extend_selection: boolean): void;
    vfunc_paste_clipboard(): void;
    vfunc_populate_popup(popup: Widget): void;
    vfunc_toggle_overwrite(): void;
}
export class EntryAccessible  {
    constructor(config?: properties);
    readonly priv: EntryAccessiblePrivate;
}
export class EntryBuffer extends GObject.Object {
    constructor(config?: properties);
    readonly length: number;
    max_length: number;
    text: string;
    delete_text(position: number, n_chars: number): number;
    emit_deleted_text(position: number, n_chars: number): void;
    emit_inserted_text(position: number, chars: string, n_chars: number): void;
    get_bytes(): number;
    get_length(): number;
    get_max_length(): number;
    get_text(): string;
    insert_text(position: number, chars: string, n_chars: number): number;
    set_max_length(max_length: number): void;
    set_text(chars: string, n_chars: number): void;
    vfunc_delete_text(position: number, n_chars: number): number;
    vfunc_deleted_text(position: number, n_chars: number): void;
    vfunc_get_length(): number;
    vfunc_get_text(n_bytes: number): string;
    vfunc_insert_text(position: number, chars: string, n_chars: number): number;
    vfunc_inserted_text(position: number, chars: string, n_chars: number): void;
}
export class EntryCompletion extends GObject.Object {
    constructor(config?: properties);
    cell_area: CellArea;
    inline_completion: boolean;
    inline_selection: boolean;
    minimum_key_length: number;
    model: TreeModel;
    popup_completion: boolean;
    popup_set_width: boolean;
    popup_single_match: boolean;
    text_column: number;static new_with_area(area: CellArea): EntryCompletion;
    complete(): void;
    compute_prefix(key: string): string | null;
    delete_action(index_: number): void;
    get_completion_prefix(): string;
    get_entry(): Widget;
    get_inline_completion(): boolean;
    get_inline_selection(): boolean;
    get_minimum_key_length(): number;
    get_model(): TreeModel | null;
    get_popup_completion(): boolean;
    get_popup_set_width(): boolean;
    get_popup_single_match(): boolean;
    get_text_column(): number;
    insert_action_markup(index_: number, markup: string): void;
    insert_action_text(index_: number, text: string): void;
    insert_prefix(): void;
    set_inline_completion(inline_completion: boolean): void;
    set_inline_selection(inline_selection: boolean): void;
    set_match_func(func: EntryCompletionMatchFunc, func_data: object | null, func_notify: GLib.DestroyNotify): void;
    set_minimum_key_length(length: number): void;
    set_model(model: TreeModel | null): void;
    set_popup_completion(popup_completion: boolean): void;
    set_popup_set_width(popup_set_width: boolean): void;
    set_popup_single_match(popup_single_match: boolean): void;
    set_text_column(column: number): void;
    vfunc_action_activated(index_: number): void;
    vfunc_cursor_on_match(model: TreeModel, iter: TreeIter): boolean;
    vfunc_insert_prefix(prefix: string): boolean;
    vfunc_match_selected(model: TreeModel, iter: TreeIter): boolean;
    vfunc_no_matches(): void;
}
export class EntryIconAccessible  {
    constructor(config?: properties);
}
export class EventBox extends Bin {
    constructor(config?: properties);
    above_child: boolean;
    visible_window: boolean;
    get_above_child(): boolean;
    get_visible_window(): boolean;
    set_above_child(above_child: boolean): void;
    set_visible_window(visible_window: boolean): void;
}
export class EventController  {
    constructor(config?: properties);
    propagation_phase: PropagationPhase;
    widget: Widget;
    get_propagation_phase(): PropagationPhase;
    get_widget(): Widget;
    handle_event(event: Gdk.Event): boolean;
    reset(): void;
    set_propagation_phase(phase: PropagationPhase): void;
}
export class EventControllerKey extends EventController {
    constructor(config?: properties);
    forward(widget: Widget): boolean;
    get_group(): number;
    get_im_context(): IMContext;
    set_im_context(im_context: IMContext): void;
}
export class EventControllerMotion extends EventController {
    constructor(config?: properties);
}
export class EventControllerScroll extends EventController {
    constructor(config?: properties);
    flags: EventControllerScrollFlags;
    get_flags(): EventControllerScrollFlags;
    set_flags(flags: EventControllerScrollFlags): void;
}
export class Expander extends Bin {
    constructor(config?: properties);
    expanded: boolean;
    label: string;
    label_fill: boolean;
    label_widget: Widget;
    resize_toplevel: boolean;
    spacing: number;
    use_markup: boolean;
    use_underline: boolean;static new_with_mnemonic(label: string | null): Widget;
    get_expanded(): boolean;
    get_label(): string | null;
    get_label_fill(): boolean;
    get_label_widget(): Widget | null;
    get_resize_toplevel(): boolean;
    get_spacing(): number;
    get_use_markup(): boolean;
    get_use_underline(): boolean;
    set_expanded(expanded: boolean): void;
    set_label(label: string | null): void;
    set_label_fill(label_fill: boolean): void;
    set_label_widget(label_widget: Widget | null): void;
    set_resize_toplevel(resize_toplevel: boolean): void;
    set_spacing(spacing: number): void;
    set_use_markup(use_markup: boolean): void;
    set_use_underline(use_underline: boolean): void;
    vfunc_activate(): void;
}
export class ExpanderAccessible  {
    constructor(config?: properties);
    readonly priv: ExpanderAccessiblePrivate;
}
export class FileChooserButton extends Box {
    constructor(config?: properties);
    dialog: FileChooser;
    title: string;
    width_chars: number;static new_with_dialog(dialog: Dialog): Widget;
    get_focus_on_click(): boolean;
    get_title(): string;
    get_width_chars(): number;
    set_focus_on_click(focus_on_click: boolean): void;
    set_title(title: string): void;
    set_width_chars(n_chars: number): void;
    vfunc_file_set(): void;
}
export class FileChooserDialog extends Dialog {
    constructor(config?: properties);
}
export class FileChooserNative extends NativeDialog {
    constructor(config?: properties);
    accept_label: string;
    cancel_label: string;
    get_accept_label(): string | null;
    get_cancel_label(): string | null;
    set_accept_label(accept_label: string | null): void;
    set_cancel_label(cancel_label: string | null): void;
}
export class FileChooserWidget extends Box {
    constructor(config?: properties);
    search_mode: boolean;
    readonly subtitle: string;
}
export class FileFilter extends GObject.InitiallyUnowned {
    constructor(config?: properties);
    static new_from_gvariant(variant: GLib.Variant): FileFilter;
    add_custom(needed: FileFilterFlags, func: FileFilterFunc, data: object | null, notify: GLib.DestroyNotify): void;
    add_mime_type(mime_type: string): void;
    add_pattern(pattern: string): void;
    add_pixbuf_formats(): void;
    filter(filter_info: FileFilterInfo): boolean;
    get_name(): string | null;
    get_needed(): FileFilterFlags;
    set_name(name: string | null): void;
    to_gvariant(): GLib.Variant;
}
export class Fixed extends Container {
    constructor(config?: properties);
    move(widget: Widget, x: number, y: number): void;
    put(widget: Widget, x: number, y: number): void;
}
export class FlowBox extends Container {
    constructor(config?: properties);
    activate_on_single_click: boolean;
    column_spacing: number;
    homogeneous: boolean;
    max_children_per_line: number;
    min_children_per_line: number;
    row_spacing: number;
    selection_mode: SelectionMode;
    bind_model(model: Gio.ListModel | null, create_widget_func: FlowBoxCreateWidgetFunc, user_data: object | null, user_data_free_func: GLib.DestroyNotify): void;
    get_activate_on_single_click(): boolean;
    get_child_at_index(idx: number): FlowBoxChild | null;
    get_child_at_pos(x: number, y: number): FlowBoxChild | null;
    get_column_spacing(): number;
    get_homogeneous(): boolean;
    get_max_children_per_line(): number;
    get_min_children_per_line(): number;
    get_row_spacing(): number;
    get_selected_children(): GLib.List;
    get_selection_mode(): SelectionMode;
    insert(widget: Widget, position: number): void;
    invalidate_filter(): void;
    invalidate_sort(): void;
    select_all(): void;
    select_child(child: FlowBoxChild): void;
    selected_foreach(func: FlowBoxForeachFunc, data: object | null): void;
    set_activate_on_single_click(single: boolean): void;
    set_column_spacing(spacing: number): void;
    set_filter_func(filter_func: FlowBoxFilterFunc | null, user_data: object | null, destroy: GLib.DestroyNotify): void;
    set_hadjustment(adjustment: Adjustment): void;
    set_homogeneous(homogeneous: boolean): void;
    set_max_children_per_line(n_children: number): void;
    set_min_children_per_line(n_children: number): void;
    set_row_spacing(spacing: number): void;
    set_selection_mode(mode: SelectionMode): void;
    set_sort_func(sort_func: FlowBoxSortFunc | null, user_data: object | null, destroy: GLib.DestroyNotify): void;
    set_vadjustment(adjustment: Adjustment): void;
    unselect_all(): void;
    unselect_child(child: FlowBoxChild): void;
    vfunc_activate_cursor_child(): void;
    vfunc_child_activated(child: FlowBoxChild): void;
    vfunc_move_cursor(step: MovementStep, count: number): boolean;
    vfunc_select_all(): void;
    vfunc_selected_children_changed(): void;
    vfunc_toggle_cursor_child(): void;
    vfunc_unselect_all(): void;
}
export class FlowBoxAccessible  {
    constructor(config?: properties);
    readonly priv: FlowBoxAccessiblePrivate;
}
export class FlowBoxChild extends Bin {
    constructor(config?: properties);
    changed(): void;
    get_index(): number;
    is_selected(): boolean;
    vfunc_activate(): void;
}
export class FlowBoxChildAccessible  {
    constructor(config?: properties);
}
export class FontButton extends Button {
    constructor(config?: properties);
    font_name: string;
    show_size: boolean;
    show_style: boolean;
    title: string;
    use_font: boolean;
    use_size: boolean;static new_with_font(fontname: string): Widget;
    get_font_name(): string;
    get_show_size(): boolean;
    get_show_style(): boolean;
    get_title(): string;
    get_use_font(): boolean;
    get_use_size(): boolean;
    set_font_name(fontname: string): boolean;
    set_show_size(show_size: boolean): void;
    set_show_style(show_style: boolean): void;
    set_title(title: string): void;
    set_use_font(use_font: boolean): void;
    set_use_size(use_size: boolean): void;
    vfunc_font_set(): void;
}
export class FontChooserDialog extends Dialog {
    constructor(config?: properties);
}
export class FontChooserWidget extends Box {
    constructor(config?: properties);
    readonly tweak_action: Gio.Action;
}
export class FontSelection extends Box {
    constructor(config?: properties);
    font_name: string;
    preview_text: string;
    get_face(): Pango.FontFace;
    get_face_list(): Widget;
    get_family(): Pango.FontFamily;
    get_family_list(): Widget;
    get_font_name(): string;
    get_preview_entry(): Widget;
    get_preview_text(): string;
    get_size(): number;
    get_size_entry(): Widget;
    get_size_list(): Widget;
    set_font_name(fontname: string): boolean;
    set_preview_text(text: string): void;
}
export class FontSelectionDialog extends Dialog {
    constructor(config?: properties);
    get_cancel_button(): Widget;
    get_font_name(): string;
    get_font_selection(): Widget;
    get_ok_button(): Widget;
    get_preview_text(): string;
    set_font_name(fontname: string): boolean;
    set_preview_text(text: string): void;
}
export class Frame extends Bin {
    constructor(config?: properties);
    label: string;
    label_widget: Widget;
    label_xalign: number;
    label_yalign: number;
    shadow_type: ShadowType;
    get_label(): string | null;
    get_label_align(): [number | null,number | null];
    get_label_widget(): Widget | null;
    get_shadow_type(): ShadowType;
    set_label(label: string | null): void;
    set_label_align(xalign: number, yalign: number): void;
    set_label_widget(label_widget: Widget | null): void;
    set_shadow_type(type: ShadowType): void;
    vfunc_compute_child_allocation(allocation: Allocation): void;
}
export class FrameAccessible  {
    constructor(config?: properties);
    readonly priv: FrameAccessiblePrivate;
}
export class GLArea extends Widget {
    constructor(config?: properties);
    auto_render: boolean;
    readonly context: Gdk.GLContext;
    has_alpha: boolean;
    has_depth_buffer: boolean;
    has_stencil_buffer: boolean;
    use_es: boolean;
    attach_buffers(): void;
    get_auto_render(): boolean;
    get_context(): Gdk.GLContext;
    get_error(): GLib.Error | null;
    get_has_alpha(): boolean;
    get_has_depth_buffer(): boolean;
    get_has_stencil_buffer(): boolean;
    get_required_version(): [number,number];
    get_use_es(): boolean;
    make_current(): void;
    queue_render(): void;
    set_auto_render(auto_render: boolean): void;
    set_error(error: GLib.Error | null): void;
    set_has_alpha(has_alpha: boolean): void;
    set_has_depth_buffer(has_depth_buffer: boolean): void;
    set_has_stencil_buffer(has_stencil_buffer: boolean): void;
    set_required_version(major: number, minor: number): void;
    set_use_es(use_es: boolean): void;
    vfunc_render(context: Gdk.GLContext): boolean;
    vfunc_resize(width: number, height: number): void;
}
export class Gesture  {
    constructor(config?: properties);
    n_points: number;
    window: Gdk.Window;
    get_bounding_box(): [boolean, Gdk.Rectangle];
    get_bounding_box_center(): [boolean, number,number];
    get_device(): Gdk.Device | null;
    get_group(): GLib.List;
    get_last_event(sequence: Gdk.EventSequence | null): Gdk.Event | null;
    get_last_updated_sequence(): Gdk.EventSequence | null;
    get_point(sequence: Gdk.EventSequence | null): [boolean, number | null,number | null];
    get_sequence_state(sequence: Gdk.EventSequence): EventSequenceState;
    get_sequences(): GLib.List;
    get_window(): Gdk.Window | null;
    group(gesture: Gesture): void;
    handles_sequence(sequence: Gdk.EventSequence | null): boolean;
    is_active(): boolean;
    is_grouped_with(other: Gesture): boolean;
    is_recognized(): boolean;
    set_sequence_state(sequence: Gdk.EventSequence, state: EventSequenceState): boolean;
    set_state(state: EventSequenceState): boolean;
    set_window(window: Gdk.Window | null): void;
    ungroup(): void;
}
export class GestureDrag extends GestureSingle {
    constructor(config?: properties);
    get_offset(): [boolean, number | null,number | null];
    get_start_point(): [boolean, number | null,number | null];
}
export class GestureLongPress extends GestureSingle {
    constructor(config?: properties);
    delay_factor: number;
}
export class GestureMultiPress extends GestureSingle {
    constructor(config?: properties);
    get_area(): [boolean, Gdk.Rectangle];
    set_area(rect: Gdk.Rectangle | null): void;
}
export class GesturePan extends GestureDrag {
    constructor(config?: properties);
    orientation: Orientation;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export class GestureRotate extends Gesture {
    constructor(config?: properties);
    get_angle_delta(): number;
}
export class GestureSingle  {
    constructor(config?: properties);
    button: number;
    exclusive: boolean;
    touch_only: boolean;
    get_button(): number;
    get_current_button(): number;
    get_current_sequence(): Gdk.EventSequence | null;
    get_exclusive(): boolean;
    get_touch_only(): boolean;
    set_button(button: number): void;
    set_exclusive(exclusive: boolean): void;
    set_touch_only(touch_only: boolean): void;
}
export class GestureStylus extends GestureSingle {
    constructor(config?: properties);
    get_axes(axes: Gdk.AxisUse[]): [boolean, number[]];
    get_axis(axis: Gdk.AxisUse): [boolean, number];
    get_device_tool(): Gdk.DeviceTool | null;
}
export class GestureSwipe extends GestureSingle {
    constructor(config?: properties);
    get_velocity(): [boolean, number,number];
}
export class GestureZoom extends Gesture {
    constructor(config?: properties);
    get_scale_delta(): number;
}
export class Grid extends Container {
    constructor(config?: properties);
    baseline_row: number;
    column_homogeneous: boolean;
    column_spacing: number;
    row_homogeneous: boolean;
    row_spacing: number;
    attach(child: Widget, left: number, top: number, width: number, height: number): void;
    attach_next_to(child: Widget, sibling: Widget | null, side: PositionType, width: number, height: number): void;
    get_baseline_row(): number;
    get_child_at(left: number, top: number): Widget | null;
    get_column_homogeneous(): boolean;
    get_column_spacing(): number;
    get_row_baseline_position(row: number): BaselinePosition;
    get_row_homogeneous(): boolean;
    get_row_spacing(): number;
    insert_column(position: number): void;
    insert_next_to(sibling: Widget, side: PositionType): void;
    insert_row(position: number): void;
    remove_column(position: number): void;
    remove_row(position: number): void;
    set_baseline_row(row: number): void;
    set_column_homogeneous(homogeneous: boolean): void;
    set_column_spacing(spacing: number): void;
    set_row_baseline_position(row: number, pos: BaselinePosition): void;
    set_row_homogeneous(homogeneous: boolean): void;
    set_row_spacing(spacing: number): void;
}
export class HBox extends Box {
    constructor(config?: properties);
}
export class HButtonBox extends ButtonBox {
    constructor(config?: properties);
}
export class HPaned extends Paned {
    constructor(config?: properties);
}
export class HSV extends Widget {
    constructor(config?: properties);
    get_color(): [number,number,number];
    get_metrics(): [number,number];
    is_adjusting(): boolean;
    set_color(h: number, s: number, v: number): void;
    set_metrics(size: number, ring_width: number): void;
    vfunc_changed(): void;
    vfunc_move(type: DirectionType): void;
    static to_rgb(h: number, s: number, v: number): [number,number,number];
}
export class HScale extends Scale {
    constructor(config?: properties);
    static new_with_range(min: number, max: number, step: number): Widget;
    static new_with_range(...args: never[]): Widget;
}
export class HScrollbar extends Scrollbar {
    constructor(config?: properties);
}
export class HSeparator extends Separator {
    constructor(config?: properties);
}
export class HandleBox extends Bin {
    constructor(config?: properties);
    handle_position: PositionType;
    shadow_type: ShadowType;
    snap_edge: PositionType;
    snap_edge_set: boolean;
    get_child_detached(): boolean;
    get_handle_position(): PositionType;
    get_shadow_type(): ShadowType;
    get_snap_edge(): PositionType;
    set_handle_position(position: PositionType): void;
    set_shadow_type(type: ShadowType): void;
    set_snap_edge(edge: PositionType): void;
    vfunc_child_attached(child: Widget): void;
    vfunc_child_detached(child: Widget): void;
}
export class HeaderBar extends Container {
    constructor(config?: properties);
    custom_title: Widget;
    decoration_layout: string;
    decoration_layout_set: boolean;
    has_subtitle: boolean;
    show_close_button: boolean;
    spacing: number;
    subtitle: string;
    title: string;
    get_custom_title(): Widget | null;
    get_decoration_layout(): string;
    get_has_subtitle(): boolean;
    get_show_close_button(): boolean;
    get_subtitle(): string | null;
    get_title(): string | null;
    pack_end(child: Widget): void;
    pack_start(child: Widget): void;
    set_custom_title(title_widget: Widget | null): void;
    set_decoration_layout(layout: string | null): void;
    set_has_subtitle(setting: boolean): void;
    set_show_close_button(setting: boolean): void;
    set_subtitle(subtitle: string | null): void;
    set_title(title: string | null): void;
}
export class HeaderBarAccessible  {
    constructor(config?: properties);
}
export class IMContext  {
    constructor(config?: properties);
    input_hints: InputHints;
    input_purpose: InputPurpose;
    delete_surrounding(offset: number, n_chars: number): boolean;
    filter_keypress(event: Gdk.EventKey): boolean;
    focus_in(): void;
    focus_out(): void;
    get_preedit_string(): [string,Pango.AttrList,number];
    get_surrounding(): [boolean, string,number];
    reset(): void;
    set_client_window(window: Gdk.Window | null): void;
    set_cursor_location(area: Gdk.Rectangle): void;
    set_surrounding(text: string, len: number, cursor_index: number): void;
    set_use_preedit(use_preedit: boolean): void;
}
export class IMContextSimple extends IMContext {
    constructor(config?: properties);
    add_compose_file(compose_file: string): void;
}
export class IMMulticontext extends IMContext {
    constructor(config?: properties);
    append_menuitems(menushell: MenuShell): void;
    get_context_id(): string;
    set_context_id(context_id: string): void;
}
export class IconFactory extends GObject.Object {
    constructor(config?: properties);
    add(stock_id: string, icon_set: IconSet): void;
    add_default(): void;
    lookup(stock_id: string): IconSet;
    remove_default(): void;
    static lookup_default(stock_id: string): IconSet;
}
export class IconInfo extends GObject.Object {
    constructor(config?: properties);
    static new_for_pixbuf(icon_theme: IconTheme, pixbuf: GdkPixbuf.Pixbuf): IconInfo;
    get_attach_points(): [boolean, Gdk.Point[] | null,number | null];
    get_base_scale(): number;
    get_base_size(): number;
    get_builtin_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_display_name(): string;
    get_embedded_rect(): [boolean, Gdk.Rectangle];
    get_filename(): string | null;
    is_symbolic(): boolean;
    load_icon(): GdkPixbuf.Pixbuf;
    load_icon_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    load_icon_finish(res: Gio.AsyncResult): GdkPixbuf.Pixbuf;
    load_surface(for_window: Gdk.Window | null): cairo.Surface;
    load_symbolic(fg: Gdk.RGBA, success_color: Gdk.RGBA | null, warning_color: Gdk.RGBA | null, error_color: Gdk.RGBA | null): [GdkPixbuf.Pixbuf, boolean | null];
    load_symbolic_async(fg: Gdk.RGBA, success_color: Gdk.RGBA | null, warning_color: Gdk.RGBA | null, error_color: Gdk.RGBA | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    load_symbolic_finish(res: Gio.AsyncResult): [GdkPixbuf.Pixbuf, boolean | null];
    load_symbolic_for_context(context: StyleContext): [GdkPixbuf.Pixbuf, boolean | null];
    load_symbolic_for_context_async(context: StyleContext, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    load_symbolic_for_context_finish(res: Gio.AsyncResult): [GdkPixbuf.Pixbuf, boolean | null];
    load_symbolic_for_style(style: Style, state: StateType): [GdkPixbuf.Pixbuf, boolean | null];
    set_raw_coordinates(raw_coordinates: boolean): void;
}
export class IconTheme extends GObject.Object {
    constructor(config?: properties);
    add_resource_path(path: string): void;
    append_search_path(path: string): void;
    choose_icon(icon_names: string[], size: number, flags: IconLookupFlags): IconInfo | null;
    choose_icon_for_scale(icon_names: string[], size: number, scale: number, flags: IconLookupFlags): IconInfo | null;
    get_example_icon_name(): string | null;
    get_icon_sizes(icon_name: string): number[];
    get_search_path(): [string[] | null,number];
    has_icon(icon_name: string): boolean;
    list_contexts(): GLib.List;
    list_icons(context: string | null): GLib.List;
    load_icon(icon_name: string, size: number, flags: IconLookupFlags): GdkPixbuf.Pixbuf | null;
    load_icon_for_scale(icon_name: string, size: number, scale: number, flags: IconLookupFlags): GdkPixbuf.Pixbuf | null;
    load_surface(icon_name: string, size: number, scale: number, for_window: Gdk.Window | null, flags: IconLookupFlags): cairo.Surface | null;
    lookup_by_gicon(icon: Gio.Icon, size: number, flags: IconLookupFlags): IconInfo | null;
    lookup_by_gicon_for_scale(icon: Gio.Icon, size: number, scale: number, flags: IconLookupFlags): IconInfo | null;
    lookup_icon(icon_name: string, size: number, flags: IconLookupFlags): IconInfo | null;
    lookup_icon_for_scale(icon_name: string, size: number, scale: number, flags: IconLookupFlags): IconInfo | null;
    prepend_search_path(path: string): void;
    rescan_if_needed(): boolean;
    set_custom_theme(theme_name: string | null): void;
    set_screen(screen: Gdk.Screen): void;
    set_search_path(path: string[], n_elements: number): void;
    vfunc_changed(): void;
    static add_builtin_icon(icon_name: string, size: number, pixbuf: GdkPixbuf.Pixbuf): void;
    static get_default(): IconTheme;
    static get_for_screen(screen: Gdk.Screen): IconTheme;
}
export class IconView extends Container {
    constructor(config?: properties);
    activate_on_single_click: boolean;
    cell_area: CellArea;
    column_spacing: number;
    columns: number;
    item_orientation: Orientation;
    item_padding: number;
    item_width: number;
    margin: number;
    markup_column: number;
    model: TreeModel;
    pixbuf_column: number;
    reorderable: boolean;
    row_spacing: number;
    selection_mode: SelectionMode;
    spacing: number;
    text_column: number;
    tooltip_column: number;static new_with_area(area: CellArea): Widget;
    static new_with_model(model: TreeModel): Widget;
    convert_widget_to_bin_window_coords(wx: number, wy: number): [number,number];
    create_drag_icon(path: TreePath): cairo.Surface;
    enable_model_drag_dest(targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction): void;
    enable_model_drag_source(start_button_mask: Gdk.ModifierType, targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction): void;
    get_activate_on_single_click(): boolean;
    get_cell_rect(path: TreePath, cell: CellRenderer | null): [boolean, Gdk.Rectangle];
    get_column_spacing(): number;
    get_columns(): number;
    get_cursor(): [boolean, TreePath | null,CellRenderer | null];
    get_dest_item_at_pos(drag_x: number, drag_y: number): [boolean, TreePath | null,IconViewDropPosition | null];
    get_drag_dest_item(): [TreePath | null,IconViewDropPosition | null];
    get_item_at_pos(x: number, y: number): [boolean, TreePath | null,CellRenderer | null];
    get_item_column(path: TreePath): number;
    get_item_orientation(): Orientation;
    get_item_padding(): number;
    get_item_row(path: TreePath): number;
    get_item_width(): number;
    get_margin(): number;
    get_markup_column(): number;
    get_model(): TreeModel | null;
    get_path_at_pos(x: number, y: number): TreePath | null;
    get_pixbuf_column(): number;
    get_reorderable(): boolean;
    get_row_spacing(): number;
    get_selected_items(): GLib.List;
    get_selection_mode(): SelectionMode;
    get_spacing(): number;
    get_text_column(): number;
    get_tooltip_column(): number;
    get_tooltip_context(x: number, y: number, keyboard_tip: boolean): [boolean, number,number,TreeModel | null,TreePath | null,TreeIter | null];
    get_visible_range(): [boolean, TreePath | null,TreePath | null];
    item_activated(path: TreePath): void;
    path_is_selected(path: TreePath): boolean;
    scroll_to_path(path: TreePath, use_align: boolean, row_align: number, col_align: number): void;
    select_all(): void;
    select_path(path: TreePath): void;
    selected_foreach(func: IconViewForeachFunc, data: object | null): void;
    set_activate_on_single_click(single: boolean): void;
    set_column_spacing(column_spacing: number): void;
    set_columns(columns: number): void;
    set_cursor(path: TreePath, cell: CellRenderer | null, start_editing: boolean): void;
    set_drag_dest_item(path: TreePath | null, pos: IconViewDropPosition): void;
    set_item_orientation(orientation: Orientation): void;
    set_item_padding(item_padding: number): void;
    set_item_width(item_width: number): void;
    set_margin(margin: number): void;
    set_markup_column(column: number): void;
    set_model(model: TreeModel | null): void;
    set_pixbuf_column(column: number): void;
    set_reorderable(reorderable: boolean): void;
    set_row_spacing(row_spacing: number): void;
    set_selection_mode(mode: SelectionMode): void;
    set_spacing(spacing: number): void;
    set_text_column(column: number): void;
    set_tooltip_cell(tooltip: Tooltip, path: TreePath, cell: CellRenderer | null): void;
    set_tooltip_column(column: number): void;
    set_tooltip_item(tooltip: Tooltip, path: TreePath): void;
    unselect_all(): void;
    unselect_path(path: TreePath): void;
    unset_model_drag_dest(): void;
    unset_model_drag_source(): void;
    vfunc_activate_cursor_item(): boolean;
    vfunc_item_activated(path: TreePath): void;
    vfunc_move_cursor(step: MovementStep, count: number): boolean;
    vfunc_select_all(): void;
    vfunc_select_cursor_item(): void;
    vfunc_selection_changed(): void;
    vfunc_toggle_cursor_item(): void;
    vfunc_unselect_all(): void;
}
export class IconViewAccessible  {
    constructor(config?: properties);
    readonly priv: IconViewAccessiblePrivate;
}
export class Image extends Misc {
    constructor(config?: properties);
    file: string;
    gicon: Gio.Icon;
    icon_name: string;
    icon_set: IconSet;
    icon_size: number;
    pixbuf: GdkPixbuf.Pixbuf;
    pixbuf_animation: GdkPixbuf.PixbufAnimation;
    pixel_size: number;
    resource: string;
    stock: string;
    readonly storage_type: ImageType;
    surface: cairo.Surface;
    use_fallback: boolean;static new_from_animation(animation: GdkPixbuf.PixbufAnimation): Widget;
    static new_from_file(filename: string): Widget;
    static new_from_gicon(icon: Gio.Icon, size: number): Widget;
    static new_from_icon_name(icon_name: string | null, size: number): Widget;
    static new_from_icon_set(icon_set: IconSet, size: number): Widget;
    static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null): Widget;
    static new_from_resource(resource_path: string): Widget;
    static new_from_stock(stock_id: string, size: number): Widget;
    static new_from_surface(surface: cairo.Surface | null): Widget;
    clear(): void;
    get_animation(): GdkPixbuf.PixbufAnimation | null;
    get_gicon(): [Gio.Icon | null,number | null];
    get_icon_name(): [string | null,number | null];
    get_icon_set(): [IconSet | null,number | null];
    get_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_pixel_size(): number;
    get_stock(): [string | null,number | null];
    get_storage_type(): ImageType;
    set_from_animation(animation: GdkPixbuf.PixbufAnimation): void;
    set_from_file(filename: string | null): void;
    set_from_gicon(icon: Gio.Icon, size: number): void;
    set_from_icon_name(icon_name: string | null, size: number): void;
    set_from_icon_set(icon_set: IconSet, size: number): void;
    set_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null): void;
    set_from_resource(resource_path: string | null): void;
    set_from_stock(stock_id: string, size: number): void;
    set_from_surface(surface: cairo.Surface | null): void;
    set_pixel_size(pixel_size: number): void;
}
export class ImageAccessible  {
    constructor(config?: properties);
    readonly priv: ImageAccessiblePrivate;
}
export class ImageCellAccessible  {
    constructor(config?: properties);
    readonly priv: ImageCellAccessiblePrivate;
}
export class ImageMenuItem extends MenuItem {
    constructor(config?: properties);
    accel_group: AccelGroup;
    always_show_image: boolean;
    image: Widget;
    use_stock: boolean;static new_from_stock(stock_id: string, accel_group: AccelGroup | null): Widget;
    static new_with_label(label: string): Widget;
    static new_with_mnemonic(label: string): Widget;
    get_always_show_image(): boolean;
    get_image(): Widget;
    get_use_stock(): boolean;
    set_accel_group(accel_group: AccelGroup): void;
    set_always_show_image(always_show: boolean): void;
    set_image(image: Widget | null): void;
    set_use_stock(use_stock: boolean): void;
}
export class InfoBar extends Box {
    constructor(config?: properties);
    message_type: MessageType;
    revealed: boolean;
    show_close_button: boolean;
    add_action_widget(child: Widget, response_id: number): void;
    add_button(button_text: string, response_id: number): Button;
    get_action_area(): Widget;
    get_content_area(): Widget;
    get_message_type(): MessageType;
    get_revealed(): boolean;
    get_show_close_button(): boolean;
    response(response_id: number): void;
    set_default_response(response_id: number): void;
    set_message_type(message_type: MessageType): void;
    set_response_sensitive(response_id: number, setting: boolean): void;
    set_revealed(revealed: boolean): void;
    set_show_close_button(setting: boolean): void;
    vfunc_close(): void;
    vfunc_response(response_id: number): void;
}
export class Invisible extends Widget {
    constructor(config?: properties);
    screen: Gdk.Screen;static new_for_screen(screen: Gdk.Screen): Widget;
    get_screen(): Gdk.Screen;
    set_screen(screen: Gdk.Screen): void;
}
export class Label extends Misc {
    constructor(config?: properties);
    angle: number;
    attributes: Pango.AttrList;
    readonly cursor_position: number;
    ellipsize: Pango.EllipsizeMode;
    justify: Justification;
    label: string;
    lines: number;
    max_width_chars: number;
    readonly mnemonic_keyval: number;
    mnemonic_widget: Widget;
    pattern: string;
    selectable: boolean;
    readonly selection_bound: number;
    single_line_mode: boolean;
    track_visited_links: boolean;
    use_markup: boolean;
    use_underline: boolean;
    width_chars: number;
    wrap: boolean;
    wrap_mode: Pango.WrapMode;
    xalign: number;
    yalign: number;static new_with_mnemonic(str: string | null): Widget;
    get_angle(): number;
    get_attributes(): Pango.AttrList | null;
    get_current_uri(): string;
    get_ellipsize(): Pango.EllipsizeMode;
    get_justify(): Justification;
    get_label(): string;
    get_layout(): Pango.Layout;
    get_layout_offsets(): [number | null,number | null];
    get_line_wrap(): boolean;
    get_line_wrap_mode(): Pango.WrapMode;
    get_lines(): number;
    get_max_width_chars(): number;
    get_mnemonic_keyval(): number;
    get_mnemonic_widget(): Widget | null;
    get_selectable(): boolean;
    get_selection_bounds(): [boolean, number,number];
    get_single_line_mode(): boolean;
    get_text(): string;
    get_track_visited_links(): boolean;
    get_use_markup(): boolean;
    get_use_underline(): boolean;
    get_width_chars(): number;
    get_xalign(): number;
    get_yalign(): number;
    select_region(start_offset: number, end_offset: number): void;
    set_angle(angle: number): void;
    set_attributes(attrs: Pango.AttrList | null): void;
    set_ellipsize(mode: Pango.EllipsizeMode): void;
    set_justify(jtype: Justification): void;
    set_label(str: string): void;
    set_line_wrap(wrap: boolean): void;
    set_line_wrap_mode(wrap_mode: Pango.WrapMode): void;
    set_lines(lines: number): void;
    set_markup(str: string): void;
    set_markup_with_mnemonic(str: string): void;
    set_max_width_chars(n_chars: number): void;
    set_mnemonic_widget(widget: Widget | null): void;
    set_pattern(pattern: string): void;
    set_selectable(setting: boolean): void;
    set_single_line_mode(single_line_mode: boolean): void;
    set_text(str: string): void;
    set_text_with_mnemonic(str: string): void;
    set_track_visited_links(track_links: boolean): void;
    set_use_markup(setting: boolean): void;
    set_use_underline(setting: boolean): void;
    set_width_chars(n_chars: number): void;
    set_xalign(xalign: number): void;
    set_yalign(yalign: number): void;
    vfunc_activate_link(uri: string): boolean;
    vfunc_copy_clipboard(): void;
    vfunc_move_cursor(step: MovementStep, count: number, extend_selection: boolean): void;
    vfunc_populate_popup(menu: Menu): void;
}
export class LabelAccessible  {
    constructor(config?: properties);
    readonly priv: LabelAccessiblePrivate;
}
export class Layout extends Container {
    constructor(config?: properties);
    height: number;
    width: number;
    get_bin_window(): Gdk.Window;
    get_hadjustment(): Adjustment;
    get_size(): [number | null,number | null];
    get_vadjustment(): Adjustment;
    move(child_widget: Widget, x: number, y: number): void;
    put(child_widget: Widget, x: number, y: number): void;
    set_hadjustment(adjustment: Adjustment | null): void;
    set_size(width: number, height: number): void;
    set_vadjustment(adjustment: Adjustment | null): void;
}
export class LevelBar extends Widget {
    constructor(config?: properties);
    inverted: boolean;
    max_value: number;
    min_value: number;
    mode: LevelBarMode;
    value: number;static new_for_interval(min_value: number, max_value: number): Widget;
    add_offset_value(name: string, value: number): void;
    get_inverted(): boolean;
    get_max_value(): number;
    get_min_value(): number;
    get_mode(): LevelBarMode;
    get_offset_value(name: string | null): [boolean, number];
    get_value(): number;
    remove_offset_value(name: string | null): void;
    set_inverted(inverted: boolean): void;
    set_max_value(value: number): void;
    set_min_value(value: number): void;
    set_mode(mode: LevelBarMode): void;
    set_value(value: number): void;
    vfunc_offset_changed(name: string): void;
}
export class LevelBarAccessible  {
    constructor(config?: properties);
    readonly priv: LevelBarAccessiblePrivate;
}
export class LinkButton extends Button {
    constructor(config?: properties);
    uri: string;
    visited: boolean;static new_with_label(uri: string, label: string | null): Widget;
    static new_with_label(...args: never[]): Widget;
    get_uri(): string;
    get_visited(): boolean;
    set_uri(uri: string): void;
    set_visited(visited: boolean): void;
    vfunc_activate_link(): boolean;
}
export class LinkButtonAccessible  {
    constructor(config?: properties);
    readonly priv: LinkButtonAccessiblePrivate;
}
export class ListBox extends Container {
    constructor(config?: properties);
    activate_on_single_click: boolean;
    selection_mode: SelectionMode;
    bind_model(model: Gio.ListModel | null, create_widget_func: ListBoxCreateWidgetFunc | null, user_data: object | null, user_data_free_func: GLib.DestroyNotify): void;
    drag_highlight_row(row: ListBoxRow): void;
    drag_unhighlight_row(): void;
    get_activate_on_single_click(): boolean;
    get_adjustment(): Adjustment;
    get_row_at_index(index_: number): ListBoxRow | null;
    get_row_at_y(y: number): ListBoxRow | null;
    get_selected_row(): ListBoxRow;
    get_selected_rows(): GLib.List;
    get_selection_mode(): SelectionMode;
    insert(child: Widget, position: number): void;
    invalidate_filter(): void;
    invalidate_headers(): void;
    invalidate_sort(): void;
    prepend(child: Widget): void;
    select_all(): void;
    select_row(row: ListBoxRow | null): void;
    selected_foreach(func: ListBoxForeachFunc, data: object | null): void;
    set_activate_on_single_click(single: boolean): void;
    set_adjustment(adjustment: Adjustment | null): void;
    set_filter_func(filter_func: ListBoxFilterFunc | null, user_data: object | null, destroy: GLib.DestroyNotify): void;
    set_header_func(update_header: ListBoxUpdateHeaderFunc | null, user_data: object | null, destroy: GLib.DestroyNotify): void;
    set_placeholder(placeholder: Widget | null): void;
    set_selection_mode(mode: SelectionMode): void;
    set_sort_func(sort_func: ListBoxSortFunc | null, user_data: object | null, destroy: GLib.DestroyNotify): void;
    unselect_all(): void;
    unselect_row(row: ListBoxRow): void;
    vfunc_activate_cursor_row(): void;
    vfunc_move_cursor(step: MovementStep, count: number): void;
    vfunc_row_activated(row: ListBoxRow): void;
    vfunc_row_selected(row: ListBoxRow): void;
    vfunc_select_all(): void;
    vfunc_selected_rows_changed(): void;
    vfunc_toggle_cursor_row(): void;
    vfunc_unselect_all(): void;
}
export class ListBoxAccessible  {
    constructor(config?: properties);
    readonly priv: ListBoxAccessiblePrivate;
}
export class ListBoxRow extends Bin {
    constructor(config?: properties);
    activatable: boolean;
    selectable: boolean;
    changed(): void;
    get_activatable(): boolean;
    get_header(): Widget | null;
    get_index(): number;
    get_selectable(): boolean;
    is_selected(): boolean;
    set_activatable(activatable: boolean): void;
    set_header(header: Widget | null): void;
    set_selectable(selectable: boolean): void;
    vfunc_activate(): void;
}
export class ListBoxRowAccessible  {
    constructor(config?: properties);
}
export class ListStore extends GObject.Object {
    constructor(config?: properties);
    static newv(n_columns: number, types: GType): ListStore;
    static newv(...args: never[]): ListStore;
    append(): [TreeIter];
    clear(): void;
    insert(position: number): [TreeIter];
    insert_after(sibling: TreeIter | null): [TreeIter];
    insert_before(sibling: TreeIter | null): [TreeIter];
    insert_with_valuesv(position: number, columns: number[], values: GObject.Value[], n_values: number): [TreeIter | null];
    iter_is_valid(iter: TreeIter): boolean;
    move_after(iter: TreeIter, position: TreeIter | null): void;
    move_before(iter: TreeIter, position: TreeIter | null): void;
    prepend(): [TreeIter];
    remove(iter: TreeIter): boolean;
    reorder(new_order: number[]): void;
    set_column_types(n_columns: number, types: GType): void;
    set_value(iter: TreeIter, column: number, value: GObject.Value): void;
    set_valuesv(iter: TreeIter, columns: number[], values: GObject.Value[], n_values: number): void;
    swap(a: TreeIter, b: TreeIter): void;
}
export class LockButton extends Button {
    constructor(config?: properties);
    permission: Gio.Permission;
    text_lock: string;
    text_unlock: string;
    tooltip_lock: string;
    tooltip_not_authorized: string;
    tooltip_unlock: string;
    get_permission(): Gio.Permission;
    set_permission(permission: Gio.Permission | null): void;
}
export class LockButtonAccessible  {
    constructor(config?: properties);
    readonly priv: LockButtonAccessiblePrivate;
}
export class Menu extends MenuShell {
    constructor(config?: properties);
    accel_group: AccelGroup;
    accel_path: string;
    active: number;
    anchor_hints: Gdk.AnchorHints;
    attach_widget: Widget;
    menu_type_hint: Gdk.WindowTypeHint;
    monitor: number;
    rect_anchor_dx: number;
    rect_anchor_dy: number;
    reserve_toggle_size: boolean;
    tearoff_state: boolean;
    tearoff_title: string;static new_from_model(model: Gio.MenuModel): Widget;
    attach(child: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number): void;
    attach_to_widget(attach_widget: Widget, detacher: MenuDetachFunc | null): void;
    detach(): void;
    get_accel_group(): AccelGroup;
    get_accel_path(): string;
    get_active(): Widget;
    get_attach_widget(): Widget;
    get_monitor(): number;
    get_reserve_toggle_size(): boolean;
    get_tearoff_state(): boolean;
    get_title(): string;
    place_on_monitor(monitor: Gdk.Monitor): void;
    popdown(): void;
    popup(parent_menu_shell: Widget | null, parent_menu_item: Widget | null, func: MenuPositionFunc | null, data: object | null, button: number, activate_time: number): void;
    popup_at_pointer(trigger_event: Gdk.Event | null): void;
    popup_at_rect(rect_window: Gdk.Window, rect: Gdk.Rectangle, rect_anchor: Gdk.Gravity, menu_anchor: Gdk.Gravity, trigger_event: Gdk.Event | null): void;
    popup_at_widget(widget: Widget, widget_anchor: Gdk.Gravity, menu_anchor: Gdk.Gravity, trigger_event: Gdk.Event | null): void;
    popup_for_device(device: Gdk.Device | null, parent_menu_shell: Widget | null, parent_menu_item: Widget | null, func: MenuPositionFunc | null, data: object | null, destroy: GLib.DestroyNotify | null, button: number, activate_time: number): void;
    reorder_child(child: Widget, position: number): void;
    reposition(): void;
    set_accel_group(accel_group: AccelGroup | null): void;
    set_accel_path(accel_path: string | null): void;
    set_active(index: number): void;
    set_monitor(monitor_num: number): void;
    set_reserve_toggle_size(reserve_toggle_size: boolean): void;
    set_screen(screen: Gdk.Screen | null): void;
    set_tearoff_state(torn_off: boolean): void;
    set_title(title: string | null): void;
    static get_for_attach_widget(widget: Widget): GLib.List;
}
export class MenuAccessible  {
    constructor(config?: properties);
    readonly priv: MenuAccessiblePrivate;
}
export class MenuBar extends MenuShell {
    constructor(config?: properties);
    child_pack_direction: PackDirection;
    pack_direction: PackDirection;static new_from_model(model: Gio.MenuModel): Widget;
    get_child_pack_direction(): PackDirection;
    get_pack_direction(): PackDirection;
    set_child_pack_direction(child_pack_dir: PackDirection): void;
    set_pack_direction(pack_dir: PackDirection): void;
}
export class MenuButton extends ToggleButton {
    constructor(config?: properties);
    align_widget: Container;
    direction: ArrowType;
    menu_model: Gio.MenuModel;
    popover: Popover;
    popup: Menu;
    use_popover: boolean;
    get_align_widget(): Widget | null;
    get_direction(): ArrowType;
    get_menu_model(): Gio.MenuModel | null;
    get_popover(): Popover | null;
    get_popup(): Menu | null;
    get_use_popover(): boolean;
    set_align_widget(align_widget: Widget | null): void;
    set_direction(direction: ArrowType): void;
    set_menu_model(menu_model: Gio.MenuModel | null): void;
    set_popover(popover: Widget | null): void;
    set_popup(menu: Widget | null): void;
    set_use_popover(use_popover: boolean): void;
}
export class MenuButtonAccessible  {
    constructor(config?: properties);
    readonly priv: MenuButtonAccessiblePrivate;
}
export class MenuItem extends Bin {
    constructor(config?: properties);
    accel_path: string;
    label: string;
    right_justified: boolean;
    submenu: Menu;
    use_underline: boolean;static new_with_label(label: string): Widget;
    static new_with_mnemonic(label: string): Widget;
    activate(): void;
    deselect(): void;
    get_accel_path(): string | null;
    get_label(): string;
    get_reserve_indicator(): boolean;
    get_right_justified(): boolean;
    get_submenu(): Widget | null;
    get_use_underline(): boolean;
    select(): void;
    set_accel_path(accel_path: string | null): void;
    set_label(label: string): void;
    set_reserve_indicator(reserve: boolean): void;
    set_right_justified(right_justified: boolean): void;
    set_submenu(submenu: Menu | null): void;
    set_use_underline(setting: boolean): void;
    toggle_size_allocate(allocation: number): void;
    toggle_size_request(requisition: number): [number];
    vfunc_activate(): void;
    vfunc_activate_item(): void;
    vfunc_deselect(): void;
    vfunc_get_label(): string;
    vfunc_select(): void;
    vfunc_set_label(label: string): void;
    vfunc_toggle_size_allocate(allocation: number): void;
    vfunc_toggle_size_request(requisition: number): [number];
}
export class MenuItemAccessible  {
    constructor(config?: properties);
    readonly priv: MenuItemAccessiblePrivate;
}
export class MenuShell  {
    constructor(config?: properties);
    take_focus: boolean;
    readonly container: Container;
    readonly priv: MenuShellPrivate;
    activate_item(menu_item: Widget, force_deactivate: boolean): void;
    append(child: MenuItem): void;
    bind_model(model: Gio.MenuModel | null, action_namespace: string | null, with_separators: boolean): void;
    cancel(): void;
    deactivate(): void;
    deselect(): void;
    get_parent_shell(): Widget;
    get_selected_item(): Widget;
    get_take_focus(): boolean;
    insert(child: Widget, position: number): void;
    prepend(child: Widget): void;
    select_first(search_sensitive: boolean): void;
    select_item(menu_item: Widget): void;
    set_take_focus(take_focus: boolean): void;
}
export class MenuShellAccessible  {
    constructor(config?: properties);
    readonly priv: MenuShellAccessiblePrivate;
}
export class MenuToolButton extends ToolButton {
    constructor(config?: properties);
    menu: Menu;static new_from_stock(stock_id: string): ToolItem;
    get_menu(): Widget;
    set_arrow_tooltip_markup(markup: string): void;
    set_arrow_tooltip_text(text: string): void;
    set_menu(menu: Widget): void;
    vfunc_show_menu(): void;
}
export class MessageDialog extends Dialog {
    constructor(config?: properties);
    buttons: ButtonsType;
    image: Widget;
    readonly message_area: Widget;
    message_type: MessageType;
    secondary_text: string;
    secondary_use_markup: boolean;
    text: string;
    use_markup: boolean;
    get_image(): Widget;
    get_message_area(): Widget;
    set_image(image: Widget): void;
    set_markup(str: string): void;
}
export class Misc  {
    constructor(config?: properties);
    xalign: number;
    xpad: number;
    yalign: number;
    ypad: number;
    readonly widget: Widget;
    readonly priv: MiscPrivate;
    get_alignment(): [number | null,number | null];
    get_padding(): [number | null,number | null];
    set_alignment(xalign: number, yalign: number): void;
    set_padding(xpad: number, ypad: number): void;
}
export class ModelButton extends Button {
    constructor(config?: properties);
    active: boolean;
    centered: boolean;
    icon: Gio.Icon;
    iconic: boolean;
    inverted: boolean;
    menu_name: string;
    role: ButtonRole;
    text: string;
    use_markup: boolean;
}
export class MountOperation extends Gio.MountOperation {
    constructor(config?: properties);
    screen: Gdk.Screen;
    get_parent(): Window;
    get_screen(): Gdk.Screen;
    is_showing(): boolean;
    set_parent(parent: Window | null): void;
    set_screen(screen: Gdk.Screen): void;
}
export class NativeDialog  {
    constructor(config?: properties);
    modal: boolean;
    title: string;
    transient_for: Window;
    visible: boolean;
    destroy(): void;
    get_modal(): boolean;
    get_title(): string | null;
    get_transient_for(): Window | null;
    get_visible(): boolean;
    hide(): void;
    run(): number;
    set_modal(modal: boolean): void;
    set_title(title: string): void;
    set_transient_for(parent: Window | null): void;
    show(): void;
}
export class Notebook extends Container {
    constructor(config?: properties);
    enable_popup: boolean;
    group_name: string;
    page: number;
    scrollable: boolean;
    show_border: boolean;
    show_tabs: boolean;
    tab_pos: PositionType;
    append_page(child: Widget, tab_label: Widget | null): number;
    append_page_menu(child: Widget, tab_label: Widget | null, menu_label: Widget | null): number;
    detach_tab(child: Widget): void;
    get_action_widget(pack_type: PackType): Widget | null;
    get_current_page(): number;
    get_group_name(): string | null;
    get_menu_label(child: Widget): Widget | null;
    get_menu_label_text(child: Widget): string | null;
    get_n_pages(): number;
    get_nth_page(page_num: number): Widget | null;
    get_scrollable(): boolean;
    get_show_border(): boolean;
    get_show_tabs(): boolean;
    get_tab_detachable(child: Widget): boolean;
    get_tab_hborder(): number;
    get_tab_label(child: Widget): Widget | null;
    get_tab_label_text(child: Widget): string | null;
    get_tab_pos(): PositionType;
    get_tab_reorderable(child: Widget): boolean;
    get_tab_vborder(): number;
    insert_page(child: Widget, tab_label: Widget | null, position: number): number;
    insert_page_menu(child: Widget, tab_label: Widget | null, menu_label: Widget | null, position: number): number;
    next_page(): void;
    page_num(child: Widget): number;
    popup_disable(): void;
    popup_enable(): void;
    prepend_page(child: Widget, tab_label: Widget | null): number;
    prepend_page_menu(child: Widget, tab_label: Widget | null, menu_label: Widget | null): number;
    prev_page(): void;
    remove_page(page_num: number): void;
    reorder_child(child: Widget, position: number): void;
    set_action_widget(widget: Widget, pack_type: PackType): void;
    set_current_page(page_num: number): void;
    set_group_name(group_name: string | null): void;
    set_menu_label(child: Widget, menu_label: Widget | null): void;
    set_menu_label_text(child: Widget, menu_text: string): void;
    set_scrollable(scrollable: boolean): void;
    set_show_border(show_border: boolean): void;
    set_show_tabs(show_tabs: boolean): void;
    set_tab_detachable(child: Widget, detachable: boolean): void;
    set_tab_label(child: Widget, tab_label: Widget | null): void;
    set_tab_label_text(child: Widget, tab_text: string): void;
    set_tab_pos(pos: PositionType): void;
    set_tab_reorderable(child: Widget, reorderable: boolean): void;
    vfunc_change_current_page(offset: number): boolean;
    vfunc_focus_tab(type: NotebookTab): boolean;
    vfunc_insert_page(child: Widget, tab_label: Widget, menu_label: Widget, position: number): number;
    vfunc_move_focus_out(direction: DirectionType): void;
    vfunc_page_added(child: Widget, page_num: number): void;
    vfunc_page_removed(child: Widget, page_num: number): void;
    vfunc_page_reordered(child: Widget, page_num: number): void;
    vfunc_reorder_tab(direction: DirectionType, move_to_last: boolean): boolean;
    vfunc_select_page(move_focus: boolean): boolean;
    vfunc_switch_page(page: Widget, page_num: number): void;
}
export class NotebookAccessible  {
    constructor(config?: properties);
    readonly priv: NotebookAccessiblePrivate;
}
export class NotebookPageAccessible extends Atk.Object {
    constructor(config?: properties);
    invalidate(): void;
}
export class NumerableIcon  {
    constructor(config?: properties);
    background_icon: Gio.Icon;
    background_icon_name: string;
    count: number;
    label: string;
    style_context: StyleContext;
    readonly priv: NumerableIconPrivate;
    get_background_gicon(): Gio.Icon | null;
    get_background_icon_name(): string | null;
    get_count(): number;
    get_label(): string | null;
    get_style_context(): StyleContext | null;
    set_background_gicon(icon: Gio.Icon | null): void;
    set_background_icon_name(icon_name: string | null): void;
    set_count(count: number): void;
    set_label(label: string | null): void;
    set_style_context(style: StyleContext): void;
    static _new(base_icon: Gio.Icon): Gio.Icon;
    static new_with_style_context(base_icon: Gio.Icon, context: StyleContext): Gio.Icon;
}
export class OffscreenWindow extends Window {
    constructor(config?: properties);
    get_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_surface(): cairo.Surface | null;
}
export class Overlay extends Bin {
    constructor(config?: properties);
    add_overlay(widget: Widget): void;
    get_overlay_pass_through(widget: Widget): boolean;
    reorder_overlay(child: Widget, index_: number): void;
    set_overlay_pass_through(widget: Widget, pass_through: boolean): void;
    vfunc_get_child_position(widget: Widget, allocation: Allocation): boolean;
}
export class PadController extends EventController {
    constructor(config?: properties);
    action_group: Gio.ActionGroup;
    pad: Gdk.Device;
    set_action(type: PadActionType, index: number, mode: number, label: string, action_name: string): void;
    set_action_entries(entries: PadActionEntry[], n_entries: number): void;
}
export class PageSetup extends GObject.Object {
    constructor(config?: properties);
    static new_from_file(file_name: string): PageSetup;
    static new_from_gvariant(variant: GLib.Variant): PageSetup;
    static new_from_key_file(key_file: GLib.KeyFile, group_name: string | null): PageSetup;
    copy(): PageSetup;
    get_bottom_margin(unit: Unit): number;
    get_left_margin(unit: Unit): number;
    get_orientation(): PageOrientation;
    get_page_height(unit: Unit): number;
    get_page_width(unit: Unit): number;
    get_paper_height(unit: Unit): number;
    get_paper_size(): PaperSize;
    get_paper_width(unit: Unit): number;
    get_right_margin(unit: Unit): number;
    get_top_margin(unit: Unit): number;
    load_file(file_name: string): boolean;
    load_key_file(key_file: GLib.KeyFile, group_name: string | null): boolean;
    set_bottom_margin(margin: number, unit: Unit): void;
    set_left_margin(margin: number, unit: Unit): void;
    set_orientation(orientation: PageOrientation): void;
    set_paper_size(size: PaperSize): void;
    set_paper_size_and_default_margins(size: PaperSize): void;
    set_right_margin(margin: number, unit: Unit): void;
    set_top_margin(margin: number, unit: Unit): void;
    to_file(file_name: string): boolean;
    to_gvariant(): GLib.Variant;
    to_key_file(key_file: GLib.KeyFile, group_name: string | null): void;
}
export class Paned extends Container {
    constructor(config?: properties);
    readonly max_position: number;
    readonly min_position: number;
    position: number;
    position_set: boolean;
    wide_handle: boolean;
    add1(child: Widget): void;
    add2(child: Widget): void;
    get_child1(): Widget | null;
    get_child2(): Widget | null;
    get_handle_window(): Gdk.Window;
    get_position(): number;
    get_wide_handle(): boolean;
    pack1(child: Widget, resize: boolean, shrink: boolean): void;
    pack2(child: Widget, resize: boolean, shrink: boolean): void;
    set_position(position: number): void;
    set_wide_handle(wide: boolean): void;
    vfunc_accept_position(): boolean;
    vfunc_cancel_position(): boolean;
    vfunc_cycle_child_focus(reverse: boolean): boolean;
    vfunc_cycle_handle_focus(reverse: boolean): boolean;
    vfunc_move_handle(scroll: ScrollType): boolean;
    vfunc_toggle_handle_focus(): boolean;
}
export class PanedAccessible  {
    constructor(config?: properties);
    readonly priv: PanedAccessiblePrivate;
}
export class PlacesSidebar extends ScrolledWindow {
    constructor(config?: properties);
    local_only: boolean;
    location: Gio.File;
    open_flags: PlacesOpenFlags;
    populate_all: boolean;
    show_connect_to_server: boolean;
    show_desktop: boolean;
    show_enter_location: boolean;
    show_other_locations: boolean;
    show_recent: boolean;
    show_starred_location: boolean;
    show_trash: boolean;
    add_shortcut(location: Gio.File): void;
    get_local_only(): boolean;
    get_location(): Gio.File | null;
    get_nth_bookmark(n: number): Gio.File | null;
    get_open_flags(): PlacesOpenFlags;
    get_show_connect_to_server(): boolean;
    get_show_desktop(): boolean;
    get_show_enter_location(): boolean;
    get_show_other_locations(): boolean;
    get_show_recent(): boolean;
    get_show_starred_location(): boolean;
    get_show_trash(): boolean;
    list_shortcuts(): string[];
    remove_shortcut(location: Gio.File): void;
    set_drop_targets_visible(visible: boolean, context: Gdk.DragContext): void;
    set_local_only(local_only: boolean): void;
    set_location(location: Gio.File | null): void;
    set_open_flags(flags: PlacesOpenFlags): void;
    set_show_connect_to_server(show_connect_to_server: boolean): void;
    set_show_desktop(show_desktop: boolean): void;
    set_show_enter_location(show_enter_location: boolean): void;
    set_show_other_locations(show_other_locations: boolean): void;
    set_show_recent(show_recent: boolean): void;
    set_show_starred_location(show_starred_location: boolean): void;
    set_show_trash(show_trash: boolean): void;
}
export class Plug extends Window {
    constructor(config?: properties);
    readonly socket_window: Gdk.Window;static new_for_display(display: Gdk.Display, socket_id: xlib.Window): Widget;
    construct(socket_id: xlib.Window): void;
    construct_for_display(display: Gdk.Display, socket_id: xlib.Window): void;
    get_embedded(): boolean;
    get_id(): xlib.Window;
    get_socket_window(): Gdk.Window | null;
    vfunc_embedded(): void;
}
export class Popover extends Bin {
    constructor(config?: properties);
    constrain_to: PopoverConstraint;
    modal: boolean;
    pointing_to: Gdk.Rectangle;
    position: PositionType;
    relative_to: Widget;
    transitions_enabled: boolean;static new_from_model(relative_to: Widget | null, model: Gio.MenuModel): Widget;
    bind_model(model: Gio.MenuModel | null, action_namespace: string | null): void;
    get_constrain_to(): PopoverConstraint;
    get_default_widget(): Widget | null;
    get_modal(): boolean;
    get_pointing_to(): [boolean, Gdk.Rectangle];
    get_position(): PositionType;
    get_relative_to(): Widget;
    get_transitions_enabled(): boolean;
    popdown(): void;
    popup(): void;
    set_constrain_to(constraint: PopoverConstraint): void;
    set_default_widget(widget: Widget | null): void;
    set_modal(modal: boolean): void;
    set_pointing_to(rect: Gdk.Rectangle): void;
    set_position(position: PositionType): void;
    set_relative_to(relative_to: Widget | null): void;
    set_transitions_enabled(transitions_enabled: boolean): void;
    vfunc_closed(): void;
}
export class PopoverAccessible  {
    constructor(config?: properties);
}
export class PopoverMenu extends Popover {
    constructor(config?: properties);
    visible_submenu: string;
    open_submenu(name: string): void;
}
export class PrintContext  {
    constructor(config?: properties);
    create_pango_context(): Pango.Context;
    create_pango_layout(): Pango.Layout;
    get_cairo_context(): cairo.Context;
    get_dpi_x(): number;
    get_dpi_y(): number;
    get_hard_margins(): [boolean, number,number,number,number];
    get_height(): number;
    get_page_setup(): PageSetup;
    get_pango_fontmap(): Pango.FontMap;
    get_width(): number;
    set_cairo_context(cr: cairo.Context, dpi_x: number, dpi_y: number): void;
}
export class PrintOperation extends GObject.Object {
    constructor(config?: properties);
    allow_async: boolean;
    current_page: number;
    custom_tab_label: string;
    default_page_setup: PageSetup;
    embed_page_setup: boolean;
    export_filename: string;
    has_selection: boolean;
    job_name: string;
    n_pages: number;
    readonly n_pages_to_print: number;
    print_settings: PrintSettings;
    show_progress: boolean;
    readonly status: PrintStatus;
    readonly status_string: string;
    support_selection: boolean;
    track_print_status: boolean;
    unit: Unit;
    use_full_page: boolean;
    cancel(): void;
    draw_page_finish(): void;
    get_default_page_setup(): PageSetup;
    get_embed_page_setup(): boolean;
    get_error(): void;
    get_has_selection(): boolean;
    get_n_pages_to_print(): number;
    get_print_settings(): PrintSettings;
    get_status(): PrintStatus;
    get_status_string(): string;
    get_support_selection(): boolean;
    is_finished(): boolean;
    run(action: PrintOperationAction, parent: Window | null): PrintOperationResult;
    set_allow_async(allow_async: boolean): void;
    set_current_page(current_page: number): void;
    set_custom_tab_label(label: string | null): void;
    set_default_page_setup(default_page_setup: PageSetup | null): void;
    set_defer_drawing(): void;
    set_embed_page_setup(embed: boolean): void;
    set_export_filename(filename: string): void;
    set_has_selection(has_selection: boolean): void;
    set_job_name(job_name: string): void;
    set_n_pages(n_pages: number): void;
    set_print_settings(print_settings: PrintSettings | null): void;
    set_show_progress(show_progress: boolean): void;
    set_support_selection(support_selection: boolean): void;
    set_track_print_status(track_status: boolean): void;
    set_unit(unit: Unit): void;
    set_use_full_page(full_page: boolean): void;
    vfunc_begin_print(context: PrintContext): void;
    vfunc_custom_widget_apply(widget: Widget): void;
    vfunc_done(result: PrintOperationResult): void;
    vfunc_draw_page(context: PrintContext, page_nr: number): void;
    vfunc_end_print(context: PrintContext): void;
    vfunc_paginate(context: PrintContext): boolean;
    vfunc_preview(preview: PrintOperationPreview, context: PrintContext, parent: Window): boolean;
    vfunc_request_page_setup(context: PrintContext, page_nr: number, setup: PageSetup): void;
    vfunc_status_changed(): void;
    vfunc_update_custom_widget(widget: Widget, setup: PageSetup, settings: PrintSettings): void;
}
export class PrintSettings extends GObject.Object {
    constructor(config?: properties);
    static new_from_file(file_name: string): PrintSettings;
    static new_from_gvariant(variant: GLib.Variant): PrintSettings;
    static new_from_key_file(key_file: GLib.KeyFile, group_name: string | null): PrintSettings;
    copy(): PrintSettings;
    foreach(func: PrintSettingsFunc, user_data: object | null): void;
    get(key: string): string;
    get_bool(key: string): boolean;
    get_collate(): boolean;
    get_default_source(): string;
    get_dither(): string;
    get_double(key: string): number;
    get_double_with_default(key: string, def: number): number;
    get_duplex(): PrintDuplex;
    get_finishings(): string;
    get_int(key: string): number;
    get_int_with_default(key: string, def: number): number;
    get_length(key: string, unit: Unit): number;
    get_media_type(): string;
    get_n_copies(): number;
    get_number_up(): number;
    get_number_up_layout(): NumberUpLayout;
    get_orientation(): PageOrientation;
    get_output_bin(): string;
    get_page_ranges(): [PageRange[], number];
    get_page_set(): PageSet;
    get_paper_height(unit: Unit): number;
    get_paper_size(): PaperSize;
    get_paper_width(unit: Unit): number;
    get_print_pages(): PrintPages;
    get_printer(): string;
    get_printer_lpi(): number;
    get_quality(): PrintQuality;
    get_resolution(): number;
    get_resolution_x(): number;
    get_resolution_y(): number;
    get_reverse(): boolean;
    get_scale(): number;
    get_use_color(): boolean;
    has_key(key: string): boolean;
    load_file(file_name: string): boolean;
    load_key_file(key_file: GLib.KeyFile, group_name: string | null): boolean;
    set(key: string, value: string | null): void;
    set_bool(key: string, value: boolean): void;
    set_collate(collate: boolean): void;
    set_default_source(default_source: string): void;
    set_dither(dither: string): void;
    set_double(key: string, value: number): void;
    set_duplex(duplex: PrintDuplex): void;
    set_finishings(finishings: string): void;
    set_int(key: string, value: number): void;
    set_length(key: string, value: number, unit: Unit): void;
    set_media_type(media_type: string): void;
    set_n_copies(num_copies: number): void;
    set_number_up(number_up: number): void;
    set_number_up_layout(number_up_layout: NumberUpLayout): void;
    set_orientation(orientation: PageOrientation): void;
    set_output_bin(output_bin: string): void;
    set_page_ranges(page_ranges: PageRange[], num_ranges: number): void;
    set_page_set(page_set: PageSet): void;
    set_paper_height(height: number, unit: Unit): void;
    set_paper_size(paper_size: PaperSize): void;
    set_paper_width(width: number, unit: Unit): void;
    set_print_pages(pages: PrintPages): void;
    set_printer(printer: string): void;
    set_printer_lpi(lpi: number): void;
    set_quality(quality: PrintQuality): void;
    set_resolution(resolution: number): void;
    set_resolution_xy(resolution_x: number, resolution_y: number): void;
    set_reverse(reverse: boolean): void;
    set_scale(scale: number): void;
    set_use_color(use_color: boolean): void;
    to_file(file_name: string): boolean;
    to_gvariant(): GLib.Variant;
    to_key_file(key_file: GLib.KeyFile, group_name: string | null): void;
    unset(key: string): void;
}
export class ProgressBar extends Widget {
    constructor(config?: properties);
    ellipsize: Pango.EllipsizeMode;
    fraction: number;
    inverted: boolean;
    pulse_step: number;
    show_text: boolean;
    text: string;
    get_ellipsize(): Pango.EllipsizeMode;
    get_fraction(): number;
    get_inverted(): boolean;
    get_pulse_step(): number;
    get_show_text(): boolean;
    get_text(): string | null;
    pulse(): void;
    set_ellipsize(mode: Pango.EllipsizeMode): void;
    set_fraction(fraction: number): void;
    set_inverted(inverted: boolean): void;
    set_pulse_step(fraction: number): void;
    set_show_text(show_text: boolean): void;
    set_text(text: string | null): void;
}
export class ProgressBarAccessible  {
    constructor(config?: properties);
    readonly priv: ProgressBarAccessiblePrivate;
}
export class RadioAction extends ToggleAction {
    constructor(config?: properties);
    current_value: number;
    group: RadioAction;
    value: number;
    get_current_value(): number;
    get_group(): string[];
    join_group(group_source: RadioAction | null): void;
    set_current_value(current_value: number): void;
    set_group(group: string[]): void;
    vfunc_changed(current: RadioAction): void;
}
export class RadioButton extends CheckButton {
    constructor(config?: properties);
    group: RadioButton;static new_from_widget(radio_group_member: RadioButton | null): Widget;
    static new_with_label(group: string[], label: string): Widget;
    static new_with_label(...args: never[]): Widget;
    static new_with_label_from_widget(radio_group_member: RadioButton | null, label: string): Widget;
    static new_with_mnemonic(group: string[], label: string): Widget;
    static new_with_mnemonic(...args: never[]): Widget;
    static new_with_mnemonic_from_widget(radio_group_member: RadioButton | null, label: string): Widget;
    get_group(): string[];
    join_group(group_source: RadioButton | null): void;
    set_group(group: string[]): void;
    vfunc_group_changed(): void;
}
export class RadioButtonAccessible  {
    constructor(config?: properties);
    readonly priv: RadioButtonAccessiblePrivate;
}
export class RadioMenuItem extends CheckMenuItem {
    constructor(config?: properties);
    group: RadioMenuItem;static new_from_widget(group: RadioMenuItem | null): Widget;
    static new_with_label(group: string[], label: string): Widget;
    static new_with_label(...args: never[]): Widget;
    static new_with_label_from_widget(group: RadioMenuItem | null, label: string | null): Widget;
    static new_with_mnemonic(group: string[], label: string): Widget;
    static new_with_mnemonic(...args: never[]): Widget;
    static new_with_mnemonic_from_widget(group: RadioMenuItem | null, label: string | null): Widget;
    get_group(): string[];
    join_group(group_source: RadioMenuItem | null): void;
    set_group(group: string[]): void;
    vfunc_group_changed(): void;
}
export class RadioMenuItemAccessible  {
    constructor(config?: properties);
    readonly priv: RadioMenuItemAccessiblePrivate;
}
export class RadioToolButton extends ToggleToolButton {
    constructor(config?: properties);
    group: RadioToolButton;static new_from_stock(group: string[], stock_id: string): ToolItem;
    static new_from_stock(...args: never[]): ToolItem;
    static new_from_widget(group: RadioToolButton | null): ToolItem;
    static new_with_stock_from_widget(group: RadioToolButton | null, stock_id: string): ToolItem;
    get_group(): string[];
    set_group(group: string[]): void;
}
export class Range  {
    constructor(config?: properties);
    adjustment: Adjustment;
    fill_level: number;
    inverted: boolean;
    lower_stepper_sensitivity: SensitivityType;
    restrict_to_fill_level: boolean;
    round_digits: number;
    show_fill_level: boolean;
    upper_stepper_sensitivity: SensitivityType;
    readonly widget: Widget;
    readonly priv: RangePrivate;
    get_adjustment(): Adjustment;
    get_fill_level(): number;
    get_flippable(): boolean;
    get_inverted(): boolean;
    get_lower_stepper_sensitivity(): SensitivityType;
    get_min_slider_size(): number;
    get_range_rect(): [Gdk.Rectangle];
    get_restrict_to_fill_level(): boolean;
    get_round_digits(): number;
    get_show_fill_level(): boolean;
    get_slider_range(): [number | null,number | null];
    get_slider_size_fixed(): boolean;
    get_upper_stepper_sensitivity(): SensitivityType;
    get_value(): number;
    set_adjustment(adjustment: Adjustment): void;
    set_fill_level(fill_level: number): void;
    set_flippable(flippable: boolean): void;
    set_increments(step: number, page: number): void;
    set_inverted(setting: boolean): void;
    set_lower_stepper_sensitivity(sensitivity: SensitivityType): void;
    set_min_slider_size(min_size: number): void;
    set_range(min: number, max: number): void;
    set_restrict_to_fill_level(restrict_to_fill_level: boolean): void;
    set_round_digits(round_digits: number): void;
    set_show_fill_level(show_fill_level: boolean): void;
    set_slider_size_fixed(size_fixed: boolean): void;
    set_upper_stepper_sensitivity(sensitivity: SensitivityType): void;
    set_value(value: number): void;
}
export class RangeAccessible  {
    constructor(config?: properties);
    readonly priv: RangeAccessiblePrivate;
}
export class RcStyle extends GObject.Object {
    constructor(config?: properties);
    copy(): RcStyle;
    vfunc_merge(src: RcStyle): void;
    vfunc_parse(settings: Settings, scanner: GLib.Scanner): number;
}
export class RecentAction extends Action {
    constructor(config?: properties);
    show_numbers: boolean;static new_for_manager(name: string, label: string | null, tooltip: string | null, stock_id: string | null, manager: RecentManager | null): Action;
    get_show_numbers(): boolean;
    set_show_numbers(show_numbers: boolean): void;
}
export class RecentChooserDialog extends Dialog {
    constructor(config?: properties);
}
export class RecentChooserMenu extends Menu {
    constructor(config?: properties);
    show_numbers: boolean;static new_for_manager(manager: RecentManager): Widget;
    get_show_numbers(): boolean;
    set_show_numbers(show_numbers: boolean): void;
}
export class RecentChooserWidget extends Box {
    constructor(config?: properties);
    static new_for_manager(manager: RecentManager): Widget;
}
export class RecentFilter extends GObject.InitiallyUnowned {
    constructor(config?: properties);
    add_age(days: number): void;
    add_application(application: string): void;
    add_custom(needed: RecentFilterFlags, func: RecentFilterFunc, data: object | null, data_destroy: GLib.DestroyNotify): void;
    add_group(group: string): void;
    add_mime_type(mime_type: string): void;
    add_pattern(pattern: string): void;
    add_pixbuf_formats(): void;
    filter(filter_info: RecentFilterInfo): boolean;
    get_name(): string | null;
    get_needed(): RecentFilterFlags;
    set_name(name: string): void;
}
export class RecentManager extends GObject.Object {
    constructor(config?: properties);
    filename: string;
    readonly size: number;
    add_full(uri: string, recent_data: RecentData): boolean;
    add_item(uri: string): boolean;
    get_items(): GLib.List;
    has_item(uri: string): boolean;
    lookup_item(uri: string): RecentInfo | null;
    move_item(uri: string, new_uri: string | null): boolean;
    purge_items(): number;
    remove_item(uri: string): boolean;
    vfunc_changed(): void;
    static get_default(): RecentManager;
}
export class RendererCellAccessible extends CellAccessible {
    constructor(config?: properties);
    renderer: CellRenderer;
}
export class Revealer extends Bin {
    constructor(config?: properties);
    readonly child_revealed: boolean;
    reveal_child: boolean;
    transition_duration: number;
    transition_type: RevealerTransitionType;
    get_child_revealed(): boolean;
    get_reveal_child(): boolean;
    get_transition_duration(): number;
    get_transition_type(): RevealerTransitionType;
    set_reveal_child(reveal_child: boolean): void;
    set_transition_duration(duration: number): void;
    set_transition_type(transition: RevealerTransitionType): void;
}
export class Scale extends Range {
    constructor(config?: properties);
    digits: number;
    has_origin: boolean;
    value_pos: PositionType;static new_with_range(orientation: Orientation, min: number, max: number, step: number): Widget;
    add_mark(value: number, position: PositionType, markup: string | null): void;
    clear_marks(): void;
    get_digits(): number;
    get_draw_value(): boolean;
    get_has_origin(): boolean;
    get_layout(): Pango.Layout | null;
    get_layout_offsets(): [number | null,number | null];
    get_value_pos(): PositionType;
    set_digits(digits: number): void;
    set_draw_value(draw_value: boolean): void;
    set_has_origin(has_origin: boolean): void;
    set_value_pos(pos: PositionType): void;
    vfunc_draw_value(): void;
    vfunc_format_value(value: number): string;
    vfunc_get_layout_offsets(): [number | null,number | null];
}
export class ScaleAccessible  {
    constructor(config?: properties);
    readonly priv: ScaleAccessiblePrivate;
}
export class ScaleButton extends Button {
    constructor(config?: properties);
    adjustment: Adjustment;
    icons: string[];
    size: IconSize;
    value: number;
    get_adjustment(): Adjustment;
    get_minus_button(): Button;
    get_plus_button(): Button;
    get_popup(): Widget;
    get_value(): number;
    set_adjustment(adjustment: Adjustment): void;
    set_icons(icons: string[]): void;
    set_value(value: number): void;
    vfunc_value_changed(value: number): void;
}
export class ScaleButtonAccessible  {
    constructor(config?: properties);
    readonly priv: ScaleButtonAccessiblePrivate;
}
export class Scrollbar extends Range {
    constructor(config?: properties);
}
export class ScrolledWindow extends Bin {
    constructor(config?: properties);
    hadjustment: Adjustment;
    hscrollbar_policy: PolicyType;
    kinetic_scrolling: boolean;
    max_content_height: number;
    max_content_width: number;
    min_content_height: number;
    min_content_width: number;
    overlay_scrolling: boolean;
    propagate_natural_height: boolean;
    propagate_natural_width: boolean;
    shadow_type: ShadowType;
    vadjustment: Adjustment;
    vscrollbar_policy: PolicyType;
    window_placement: CornerType;
    window_placement_set: boolean;
    add_with_viewport(child: Widget): void;
    get_capture_button_press(): boolean;
    get_hadjustment(): Adjustment;
    get_hscrollbar(): Widget;
    get_kinetic_scrolling(): boolean;
    get_max_content_height(): number;
    get_max_content_width(): number;
    get_min_content_height(): number;
    get_min_content_width(): number;
    get_overlay_scrolling(): boolean;
    get_placement(): CornerType;
    get_policy(): [PolicyType | null,PolicyType | null];
    get_propagate_natural_height(): boolean;
    get_propagate_natural_width(): boolean;
    get_shadow_type(): ShadowType;
    get_vadjustment(): Adjustment;
    get_vscrollbar(): Widget;
    set_capture_button_press(capture_button_press: boolean): void;
    set_hadjustment(hadjustment: Adjustment | null): void;
    set_kinetic_scrolling(kinetic_scrolling: boolean): void;
    set_max_content_height(height: number): void;
    set_max_content_width(width: number): void;
    set_min_content_height(height: number): void;
    set_min_content_width(width: number): void;
    set_overlay_scrolling(overlay_scrolling: boolean): void;
    set_placement(window_placement: CornerType): void;
    set_policy(hscrollbar_policy: PolicyType, vscrollbar_policy: PolicyType): void;
    set_propagate_natural_height(propagate: boolean): void;
    set_propagate_natural_width(propagate: boolean): void;
    set_shadow_type(type: ShadowType): void;
    set_vadjustment(vadjustment: Adjustment | null): void;
    unset_placement(): void;
    vfunc_move_focus_out(direction: DirectionType): void;
    vfunc_scroll_child(scroll: ScrollType, horizontal: boolean): boolean;
}
export class ScrolledWindowAccessible  {
    constructor(config?: properties);
    readonly priv: ScrolledWindowAccessiblePrivate;
}
export class SearchBar extends Bin {
    constructor(config?: properties);
    search_mode_enabled: boolean;
    show_close_button: boolean;
    connect_entry(entry: Entry): void;
    get_search_mode(): boolean;
    get_show_close_button(): boolean;
    handle_event(event: Gdk.Event): boolean;
    set_search_mode(search_mode: boolean): void;
    set_show_close_button(visible: boolean): void;
}
export class SearchEntry extends Entry {
    constructor(config?: properties);
    handle_event(event: Gdk.Event): boolean;
    vfunc_next_match(): void;
    vfunc_previous_match(): void;
    vfunc_search_changed(): void;
    vfunc_stop_search(): void;
}
export class Separator extends Widget {
    constructor(config?: properties);
}
export class SeparatorMenuItem extends MenuItem {
    constructor(config?: properties);
}
export class SeparatorToolItem extends ToolItem {
    constructor(config?: properties);
    get_draw(): boolean;
    set_draw(draw: boolean): void;
}
export class Settings  {
    constructor(config?: properties);
    readonly color_hash: GLib.HashTable;
    gtk_alternative_button_order: boolean;
    gtk_alternative_sort_arrows: boolean;
    gtk_application_prefer_dark_theme: boolean;
    gtk_auto_mnemonics: boolean;
    gtk_button_images: boolean;
    gtk_can_change_accels: boolean;
    gtk_color_palette: string;
    gtk_color_scheme: string;
    gtk_cursor_blink: boolean;
    gtk_cursor_blink_time: number;
    gtk_cursor_blink_timeout: number;
    gtk_cursor_theme_name: string;
    gtk_cursor_theme_size: number;
    gtk_decoration_layout: string;
    gtk_dialogs_use_header: boolean;
    gtk_dnd_drag_threshold: number;
    gtk_double_click_distance: number;
    gtk_double_click_time: number;
    gtk_enable_accels: boolean;
    gtk_enable_animations: boolean;
    gtk_enable_event_sounds: boolean;
    gtk_enable_input_feedback_sounds: boolean;
    gtk_enable_mnemonics: boolean;
    gtk_enable_primary_paste: boolean;
    gtk_enable_tooltips: boolean;
    gtk_entry_password_hint_timeout: number;
    gtk_entry_select_on_focus: boolean;
    gtk_error_bell: boolean;
    gtk_fallback_icon_theme: string;
    gtk_file_chooser_backend: string;
    gtk_font_name: string;
    gtk_fontconfig_timestamp: number;
    gtk_icon_sizes: string;
    gtk_icon_theme_name: string;
    gtk_im_module: string;
    gtk_im_preedit_style: IMPreeditStyle;
    gtk_im_status_style: IMStatusStyle;
    gtk_key_theme_name: string;
    gtk_keynav_cursor_only: boolean;
    gtk_keynav_use_caret: boolean;
    gtk_keynav_wrap_around: boolean;
    gtk_label_select_on_focus: boolean;
    gtk_long_press_time: number;
    gtk_menu_bar_accel: string;
    gtk_menu_bar_popup_delay: number;
    gtk_menu_images: boolean;
    gtk_menu_popdown_delay: number;
    gtk_menu_popup_delay: number;
    gtk_modules: string;
    gtk_overlay_scrolling: boolean;
    gtk_primary_button_warps_slider: boolean;
    gtk_print_backends: string;
    gtk_print_preview_command: string;
    gtk_recent_files_enabled: boolean;
    gtk_recent_files_limit: number;
    gtk_recent_files_max_age: number;
    gtk_scrolled_window_placement: CornerType;
    gtk_shell_shows_app_menu: boolean;
    gtk_shell_shows_desktop: boolean;
    gtk_shell_shows_menubar: boolean;
    gtk_show_input_method_menu: boolean;
    gtk_show_unicode_menu: boolean;
    gtk_sound_theme_name: string;
    gtk_split_cursor: boolean;
    gtk_theme_name: string;
    gtk_timeout_expand: number;
    gtk_timeout_initial: number;
    gtk_timeout_repeat: number;
    gtk_titlebar_double_click: string;
    gtk_titlebar_middle_click: string;
    gtk_titlebar_right_click: string;
    gtk_toolbar_icon_size: IconSize;
    gtk_toolbar_style: ToolbarStyle;
    gtk_tooltip_browse_mode_timeout: number;
    gtk_tooltip_browse_timeout: number;
    gtk_tooltip_timeout: number;
    gtk_touchscreen_mode: boolean;
    gtk_visible_focus: PolicyType;
    gtk_xft_antialias: number;
    gtk_xft_dpi: number;
    gtk_xft_hinting: number;
    gtk_xft_hintstyle: string;
    gtk_xft_rgba: string;
    readonly priv: SettingsPrivate;
    reset_property(name: string): void;
    set_double_property(name: string, v_double: number, origin: string): void;
    set_long_property(name: string, v_long: number, origin: string): void;
    set_property_value(name: string, svalue: SettingsValue): void;
    set_string_property(name: string, v_string: string, origin: string): void;
    static get_default(): Settings | null;
    static get_for_screen(screen: Gdk.Screen): Settings;
    static install_property(pspec: GObject.ParamSpec): void;
    static install_property_parser(pspec: GObject.ParamSpec, parser: RcPropertyParser): void;
}
export class ShortcutLabel extends Box {
    constructor(config?: properties);
    accelerator: string;
    disabled_text: string;
    get_accelerator(): string | null;
    get_disabled_text(): string | null;
    set_accelerator(accelerator: string): void;
    set_disabled_text(disabled_text: string): void;
}
export class ShortcutsGroup  {
    constructor(config?: properties);
    accel_size_group: SizeGroup;
    readonly height: number;
    title: string;
    title_size_group: SizeGroup;
    view: string;
}
export class ShortcutsSection  {
    constructor(config?: properties);
    max_height: number;
    section_name: string;
    title: string;
    view_name: string;
}
export class ShortcutsShortcut  {
    constructor(config?: properties);
    accel_size_group: SizeGroup;
    accelerator: string;
    action_name: string;
    direction: TextDirection;
    icon: Gio.Icon;
    icon_set: boolean;
    shortcut_type: ShortcutType;
    subtitle: string;
    subtitle_set: boolean;
    title: string;
    title_size_group: SizeGroup;
}
export class ShortcutsWindow  {
    constructor(config?: properties);
    section_name: string;
    view_name: string;
    readonly window: Window;
}
export class SizeGroup extends GObject.Object {
    constructor(config?: properties);
    ignore_hidden: boolean;
    mode: SizeGroupMode;
    add_widget(widget: Widget): void;
    get_ignore_hidden(): boolean;
    get_mode(): SizeGroupMode;
    get_widgets(): string[];
    remove_widget(widget: Widget): void;
    set_ignore_hidden(ignore_hidden: boolean): void;
    set_mode(mode: SizeGroupMode): void;
}
export class Socket extends Container {
    constructor(config?: properties);
    add_id(window: xlib.Window): void;
    get_id(): xlib.Window;
    get_plug_window(): Gdk.Window | null;
    vfunc_plug_added(): void;
    vfunc_plug_removed(): boolean;
}
export class SpinButton extends Entry {
    constructor(config?: properties);
    adjustment: Adjustment;
    climb_rate: number;
    digits: number;
    numeric: boolean;
    snap_to_ticks: boolean;
    update_policy: SpinButtonUpdatePolicy;
    value: number;
    wrap: boolean;static new_with_range(min: number, max: number, step: number): Widget;
    configure(adjustment: Adjustment | null, climb_rate: number, digits: number): void;
    get_adjustment(): Adjustment;
    get_digits(): number;
    get_increments(): [number | null,number | null];
    get_numeric(): boolean;
    get_range(): [number | null,number | null];
    get_snap_to_ticks(): boolean;
    get_update_policy(): SpinButtonUpdatePolicy;
    get_value(): number;
    get_value_as_int(): number;
    get_wrap(): boolean;
    set_adjustment(adjustment: Adjustment): void;
    set_digits(digits: number): void;
    set_increments(step: number, page: number): void;
    set_numeric(numeric: boolean): void;
    set_range(min: number, max: number): void;
    set_snap_to_ticks(snap_to_ticks: boolean): void;
    set_update_policy(policy: SpinButtonUpdatePolicy): void;
    set_value(value: number): void;
    set_wrap(wrap: boolean): void;
    spin(direction: SpinType, increment: number): void;
    update(): void;
    vfunc_change_value(scroll: ScrollType): void;
    vfunc_input(new_value: number): number;
    vfunc_output(): number;
    vfunc_value_changed(): void;
    vfunc_wrapped(): void;
}
export class SpinButtonAccessible  {
    constructor(config?: properties);
    readonly priv: SpinButtonAccessiblePrivate;
}
export class Spinner extends Widget {
    constructor(config?: properties);
    active: boolean;
    start(): void;
    stop(): void;
}
export class SpinnerAccessible  {
    constructor(config?: properties);
    readonly priv: SpinnerAccessiblePrivate;
}
export class Stack extends Container {
    constructor(config?: properties);
    hhomogeneous: boolean;
    homogeneous: boolean;
    interpolate_size: boolean;
    transition_duration: number;
    readonly transition_running: boolean;
    transition_type: StackTransitionType;
    vhomogeneous: boolean;
    visible_child: Widget;
    visible_child_name: string;
    add_named(child: Widget, name: string): void;
    add_titled(child: Widget, name: string, title: string): void;
    get_child_by_name(name: string): Widget | null;
    get_hhomogeneous(): boolean;
    get_homogeneous(): boolean;
    get_interpolate_size(): boolean;
    get_transition_duration(): number;
    get_transition_running(): boolean;
    get_transition_type(): StackTransitionType;
    get_vhomogeneous(): boolean;
    get_visible_child(): Widget | null;
    get_visible_child_name(): string | null;
    set_hhomogeneous(hhomogeneous: boolean): void;
    set_homogeneous(homogeneous: boolean): void;
    set_interpolate_size(interpolate_size: boolean): void;
    set_transition_duration(duration: number): void;
    set_transition_type(transition: StackTransitionType): void;
    set_vhomogeneous(vhomogeneous: boolean): void;
    set_visible_child(child: Widget): void;
    set_visible_child_full(name: string, transition: StackTransitionType): void;
    set_visible_child_name(name: string): void;
}
export class StackAccessible  {
    constructor(config?: properties);
}
export class StackSidebar extends Bin {
    constructor(config?: properties);
    stack: Stack;
    get_stack(): Stack | null;
    set_stack(stack: Stack): void;
}
export class StackSwitcher extends Box {
    constructor(config?: properties);
    icon_size: number;
    stack: Stack;
    get_stack(): Stack | null;
    set_stack(stack: Stack | null): void;
}
export class StatusIcon extends GObject.Object {
    constructor(config?: properties);
    readonly embedded: boolean;
    file: string;
    gicon: Gio.Icon;
    has_tooltip: boolean;
    icon_name: string;
    readonly orientation: Orientation;
    pixbuf: GdkPixbuf.Pixbuf;
    screen: Gdk.Screen;
    readonly size: number;
    stock: string;
    readonly storage_type: ImageType;
    title: string;
    tooltip_markup: string;
    tooltip_text: string;
    visible: boolean;static new_from_file(filename: string): StatusIcon;
    static new_from_gicon(icon: Gio.Icon): StatusIcon;
    static new_from_icon_name(icon_name: string): StatusIcon;
    static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): StatusIcon;
    static new_from_stock(stock_id: string): StatusIcon;
    get_geometry(): [boolean, Gdk.Screen | null,Gdk.Rectangle | null,Orientation | null];
    get_gicon(): Gio.Icon | null;
    get_has_tooltip(): boolean;
    get_icon_name(): string | null;
    get_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_screen(): Gdk.Screen;
    get_size(): number;
    get_stock(): string | null;
    get_storage_type(): ImageType;
    get_title(): string;
    get_tooltip_markup(): string | null;
    get_tooltip_text(): string | null;
    get_visible(): boolean;
    get_x11_window_id(): number;
    is_embedded(): boolean;
    set_from_file(filename: string): void;
    set_from_gicon(icon: Gio.Icon): void;
    set_from_icon_name(icon_name: string): void;
    set_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null): void;
    set_from_stock(stock_id: string): void;
    set_has_tooltip(has_tooltip: boolean): void;
    set_name(name: string): void;
    set_screen(screen: Gdk.Screen): void;
    set_title(title: string): void;
    set_tooltip_markup(markup: string | null): void;
    set_tooltip_text(text: string): void;
    set_visible(visible: boolean): void;
    vfunc_activate(): void;
    vfunc_button_press_event(event: Gdk.EventButton): boolean;
    vfunc_button_release_event(event: Gdk.EventButton): boolean;
    vfunc_popup_menu(button: number, activate_time: number): void;
    vfunc_query_tooltip(x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip): boolean;
    vfunc_scroll_event(event: Gdk.EventScroll): boolean;
    vfunc_size_changed(size: number): boolean;
    static position_menu(menu: Menu, x: number, y: number, user_data: StatusIcon): [number,number,boolean];
}
export class Statusbar extends Box {
    constructor(config?: properties);
    get_context_id(context_description: string): number;
    get_message_area(): Box;
    pop(context_id: number): void;
    push(context_id: number, text: string): number;
    remove(context_id: number, message_id: number): void;
    remove(...args: never[]): never;
    remove_all(context_id: number): void;
    vfunc_text_popped(context_id: number, text: string): void;
    vfunc_text_pushed(context_id: number, text: string): void;
}
export class StatusbarAccessible  {
    constructor(config?: properties);
    readonly priv: StatusbarAccessiblePrivate;
}
export class Style extends GObject.Object {
    constructor(config?: properties);
    context: StyleContext;
    apply_default_background(cr: cairo.Context, window: Gdk.Window, state_type: StateType, x: number, y: number, width: number, height: number): void;
    copy(): Style;
    detach(): void;
    get_style_property(widget_type: GType, property_name: string): [GObject.Value];
    has_context(): boolean;
    lookup_color(color_name: string): [boolean, Gdk.Color];
    lookup_icon_set(stock_id: string): IconSet;
    render_icon(source: IconSource, direction: TextDirection, state: StateType, size: number, widget: Widget | null, detail: string | null): GdkPixbuf.Pixbuf;
    set_background(window: Gdk.Window, state_type: StateType): void;
    vfunc_copy(src: Style): void;
    vfunc_draw_arrow(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, arrow_type: ArrowType, fill: boolean, x: number, y: number, width: number, height: number): void;
    vfunc_draw_box(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_box_gap(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number): void;
    vfunc_draw_check(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_diamond(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_expander(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, x: number, y: number, expander_style: ExpanderStyle): void;
    vfunc_draw_extension(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType): void;
    vfunc_draw_flat_box(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_focus(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_handle(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, orientation: Orientation): void;
    vfunc_draw_hline(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, x1: number, x2: number, y: number): void;
    vfunc_draw_layout(cr: cairo.Context, state_type: StateType, use_text: boolean, widget: Widget, detail: string, x: number, y: number, layout: Pango.Layout): void;
    vfunc_draw_option(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_resize_grip(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, edge: Gdk.WindowEdge, x: number, y: number, width: number, height: number): void;
    vfunc_draw_shadow(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_shadow_gap(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number): void;
    vfunc_draw_slider(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, orientation: Orientation): void;
    vfunc_draw_spinner(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, step: number, x: number, y: number, width: number, height: number): void;
    vfunc_draw_tab(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
    vfunc_draw_vline(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, y1_: number, y2_: number, x: number): void;
    vfunc_init_from_rc(rc_style: RcStyle): void;
    vfunc_realize(): void;
    vfunc_render_icon(source: IconSource, direction: TextDirection, state: StateType, size: number, widget: Widget | null, detail: string | null): GdkPixbuf.Pixbuf;
    vfunc_set_background(window: Gdk.Window, state_type: StateType): void;
    vfunc_unrealize(): void;
}
export class StyleContext extends GObject.Object {
    constructor(config?: properties);
    direction: TextDirection;
    paint_clock: Gdk.FrameClock;
    screen: Gdk.Screen;
    add_class(class_name: string): void;
    add_provider(provider: StyleProvider, priority: number): void;
    add_region(region_name: string, flags: RegionFlags): void;
    cancel_animations(region_id: object | null): void;
    get_background_color(state: StateFlags): [Gdk.RGBA];
    get_border(state: StateFlags): [Border];
    get_border_color(state: StateFlags): [Gdk.RGBA];
    get_color(state: StateFlags): [Gdk.RGBA];
    get_direction(): TextDirection;
    get_font(state: StateFlags): Pango.FontDescription;
    get_frame_clock(): Gdk.FrameClock | null;
    get_junction_sides(): JunctionSides;
    get_margin(state: StateFlags): [Border];
    get_padding(state: StateFlags): [Border];
    get_parent(): StyleContext | null;
    get_path(): WidgetPath;
    get_property(property: string, state: StateFlags): [GObject.Value];
    get_property(...args: never[]): never;
    get_scale(): number;
    get_screen(): Gdk.Screen;
    get_section(property: string): CssSection | null;
    get_state(): StateFlags;
    get_style_property(property_name: string, value: GObject.Value): void;
    has_class(class_name: string): boolean;
    has_region(region_name: string): [boolean, RegionFlags | null];
    invalidate(): void;
    list_classes(): GLib.List;
    list_regions(): GLib.List;
    lookup_color(color_name: string): [boolean, Gdk.RGBA];
    lookup_icon_set(stock_id: string): IconSet | null;
    notify_state_change(window: Gdk.Window, region_id: object | null, state: StateType, state_value: boolean): void;
    pop_animatable_region(): void;
    push_animatable_region(region_id: object | null): void;
    remove_class(class_name: string): void;
    remove_provider(provider: StyleProvider): void;
    remove_region(region_name: string): void;
    restore(): void;
    save(): void;
    scroll_animations(window: Gdk.Window, dx: number, dy: number): void;
    set_background(window: Gdk.Window): void;
    set_direction(direction: TextDirection): void;
    set_frame_clock(frame_clock: Gdk.FrameClock): void;
    set_junction_sides(sides: JunctionSides): void;
    set_parent(parent: StyleContext | null): void;
    set_path(path: WidgetPath): void;
    set_scale(scale: number): void;
    set_screen(screen: Gdk.Screen): void;
    set_state(flags: StateFlags): void;
    state_is_running(state: StateType): [boolean, number];
    to_string(flags: StyleContextPrintFlags): string;
    vfunc_changed(): void;
    static add_provider_for_screen(screen: Gdk.Screen, provider: StyleProvider, priority: number): void;
    static remove_provider_for_screen(screen: Gdk.Screen, provider: StyleProvider): void;
    static reset_widgets(screen: Gdk.Screen): void;
}
export class StyleProperties extends GObject.Object {
    constructor(config?: properties);
    clear(): void;
    get_property(property: string, state: StateFlags): [boolean, GObject.Value];
    get_property(...args: never[]): never;
    lookup_color(name: string): SymbolicColor;
    map_color(name: string, color: SymbolicColor): void;
    merge(props_to_merge: StyleProperties, replace: boolean): void;
    set_property(property: string, state: StateFlags, value: GObject.Value): void;
    set_property(...args: never[]): never;
    unset_property(property: string, state: StateFlags): void;
}
export class Switch extends Widget {
    constructor(config?: properties);
    active: boolean;
    state: boolean;
    get_active(): boolean;
    get_state(): boolean;
    get_state(...args: never[]): never;
    set_active(is_active: boolean): void;
    set_state(state: boolean): void;
    set_state(...args: never[]): never;
    vfunc_activate(): void;
    activate(...args: never[]): never;
    vfunc_state_set(state: boolean): boolean;
}
export class SwitchAccessible  {
    constructor(config?: properties);
    readonly priv: SwitchAccessiblePrivate;
}
export class Table extends Container {
    constructor(config?: properties);
    column_spacing: number;
    homogeneous: boolean;
    n_columns: number;
    n_rows: number;
    row_spacing: number;
    attach(child: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number, xoptions: AttachOptions, yoptions: AttachOptions, xpadding: number, ypadding: number): void;
    attach_defaults(widget: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number): void;
    get_col_spacing(column: number): number;
    get_default_col_spacing(): number;
    get_default_row_spacing(): number;
    get_homogeneous(): boolean;
    get_row_spacing(row: number): number;
    get_size(): [number | null,number | null];
    resize(rows: number, columns: number): void;
    set_col_spacing(column: number, spacing: number): void;
    set_col_spacings(spacing: number): void;
    set_homogeneous(homogeneous: boolean): void;
    set_row_spacing(row: number, spacing: number): void;
    set_row_spacings(spacing: number): void;
}
export class TearoffMenuItem extends MenuItem {
    constructor(config?: properties);
}
export class TextBuffer extends GObject.Object {
    constructor(config?: properties);
    readonly copy_target_list: TargetList;
    readonly cursor_position: number;
    readonly has_selection: boolean;
    readonly paste_target_list: TargetList;
    tag_table: TextTagTable;
    text: string;
    add_mark(mark: TextMark, where: TextIter): void;
    add_selection_clipboard(clipboard: Clipboard): void;
    apply_tag(tag: TextTag, start: TextIter, end: TextIter): void;
    apply_tag_by_name(name: string, start: TextIter, end: TextIter): void;
    backspace(iter: TextIter, interactive: boolean, default_editable: boolean): boolean;
    begin_user_action(): void;
    copy_clipboard(clipboard: Clipboard): void;
    create_child_anchor(iter: TextIter): TextChildAnchor;
    create_mark(mark_name: string | null, where: TextIter, left_gravity: boolean): TextMark;
    cut_clipboard(clipboard: Clipboard, default_editable: boolean): void;
    _delete(start: TextIter, end: TextIter): void;
    delete_interactive(start_iter: TextIter, end_iter: TextIter, default_editable: boolean): boolean;
    delete_mark(mark: TextMark): void;
    delete_mark_by_name(name: string): void;
    delete_selection(interactive: boolean, default_editable: boolean): boolean;
    deserialize(content_buffer: TextBuffer, format: Gdk.Atom, iter: TextIter, data: number[], length: number): boolean;
    deserialize_get_can_create_tags(format: Gdk.Atom): boolean;
    deserialize_set_can_create_tags(format: Gdk.Atom, can_create_tags: boolean): void;
    end_user_action(): void;
    get_bounds(): [TextIter,TextIter];
    get_char_count(): number;
    get_copy_target_list(): TargetList;
    get_deserialize_formats(): [Gdk.Atom[], number];
    get_end_iter(): [TextIter];
    get_has_selection(): boolean;
    get_insert(): TextMark;
    get_iter_at_child_anchor(anchor: TextChildAnchor): [TextIter];
    get_iter_at_line(line_number: number): [TextIter];
    get_iter_at_line_index(line_number: number, byte_index: number): [TextIter];
    get_iter_at_line_offset(line_number: number, char_offset: number): [TextIter];
    get_iter_at_mark(mark: TextMark): [TextIter];
    get_iter_at_offset(char_offset: number): [TextIter];
    get_line_count(): number;
    get_mark(name: string): TextMark | null;
    get_modified(): boolean;
    get_paste_target_list(): TargetList;
    get_selection_bound(): TextMark;
    get_selection_bounds(): [boolean, TextIter,TextIter];
    get_serialize_formats(): [Gdk.Atom[], number];
    get_slice(start: TextIter, end: TextIter, include_hidden_chars: boolean): string;
    get_start_iter(): [TextIter];
    get_tag_table(): TextTagTable;
    get_text(start: TextIter, end: TextIter, include_hidden_chars: boolean): string;
    insert(iter: TextIter, text: string, len: number): void;
    insert_at_cursor(text: string, len: number): void;
    insert_child_anchor(iter: TextIter, anchor: TextChildAnchor): void;
    insert_interactive(iter: TextIter, text: string, len: number, default_editable: boolean): boolean;
    insert_interactive_at_cursor(text: string, len: number, default_editable: boolean): boolean;
    insert_markup(iter: TextIter, markup: string, len: number): void;
    insert_pixbuf(iter: TextIter, pixbuf: GdkPixbuf.Pixbuf): void;
    insert_range(iter: TextIter, start: TextIter, end: TextIter): void;
    insert_range_interactive(iter: TextIter, start: TextIter, end: TextIter, default_editable: boolean): boolean;
    move_mark(mark: TextMark, where: TextIter): void;
    move_mark_by_name(name: string, where: TextIter): void;
    paste_clipboard(clipboard: Clipboard, override_location: TextIter | null, default_editable: boolean): void;
    place_cursor(where: TextIter): void;
    register_deserialize_format(mime_type: string, _function: TextBufferDeserializeFunc, user_data: object | null, user_data_destroy: GLib.DestroyNotify): Gdk.Atom;
    register_deserialize_tagset(tagset_name: string | null): Gdk.Atom;
    register_serialize_format(mime_type: string, _function: TextBufferSerializeFunc, user_data: object | null, user_data_destroy: GLib.DestroyNotify): Gdk.Atom;
    register_serialize_tagset(tagset_name: string | null): Gdk.Atom;
    remove_all_tags(start: TextIter, end: TextIter): void;
    remove_selection_clipboard(clipboard: Clipboard): void;
    remove_tag(tag: TextTag, start: TextIter, end: TextIter): void;
    remove_tag_by_name(name: string, start: TextIter, end: TextIter): void;
    select_range(ins: TextIter, bound: TextIter): void;
    serialize(content_buffer: TextBuffer, format: Gdk.Atom, start: TextIter, end: TextIter): [number[], number];
    set_modified(setting: boolean): void;
    set_text(text: string, len: number): void;
    unregister_deserialize_format(format: Gdk.Atom): void;
    unregister_serialize_format(format: Gdk.Atom): void;
    vfunc_apply_tag(tag: TextTag, start: TextIter, end: TextIter): void;
    vfunc_begin_user_action(): void;
    vfunc_changed(): void;
    vfunc_delete_range(start: TextIter, end: TextIter): void;
    vfunc_end_user_action(): void;
    vfunc_insert_child_anchor(iter: TextIter, anchor: TextChildAnchor): void;
    vfunc_insert_pixbuf(iter: TextIter, pixbuf: GdkPixbuf.Pixbuf): void;
    vfunc_insert_text(pos: TextIter, new_text: string, new_text_length: number): void;
    vfunc_mark_deleted(mark: TextMark): void;
    vfunc_mark_set(location: TextIter, mark: TextMark): void;
    vfunc_modified_changed(): void;
    vfunc_paste_done(clipboard: Clipboard): void;
    vfunc_remove_tag(tag: TextTag, start: TextIter, end: TextIter): void;
}
export class TextCellAccessible  {
    constructor(config?: properties);
    readonly priv: TextCellAccessiblePrivate;
}
export class TextChildAnchor extends GObject.Object {
    constructor(config?: properties);
    get_deleted(): boolean;
    get_widgets(): GLib.List;
}
export class TextMark extends GObject.Object {
    constructor(config?: properties);
    left_gravity: boolean;
    name: string;
    get_buffer(): TextBuffer;
    get_deleted(): boolean;
    get_left_gravity(): boolean;
    get_name(): string | null;
    get_visible(): boolean;
    set_visible(setting: boolean): void;
}
export class TextTag extends GObject.Object {
    constructor(config?: properties);
    accumulative_margin: boolean;
    background: string;
    background_full_height: boolean;
    background_full_height_set: boolean;
    background_gdk: Gdk.Color;
    background_rgba: Gdk.RGBA;
    background_set: boolean;
    direction: TextDirection;
    editable: boolean;
    editable_set: boolean;
    fallback: boolean;
    fallback_set: boolean;
    family: string;
    family_set: boolean;
    font: string;
    font_desc: Pango.FontDescription;
    font_features: string;
    font_features_set: boolean;
    foreground: string;
    foreground_gdk: Gdk.Color;
    foreground_rgba: Gdk.RGBA;
    foreground_set: boolean;
    indent: number;
    indent_set: boolean;
    invisible: boolean;
    invisible_set: boolean;
    justification: Justification;
    justification_set: boolean;
    language: string;
    language_set: boolean;
    left_margin: number;
    left_margin_set: boolean;
    letter_spacing: number;
    letter_spacing_set: boolean;
    name: string;
    paragraph_background: string;
    paragraph_background_gdk: Gdk.Color;
    paragraph_background_rgba: Gdk.RGBA;
    paragraph_background_set: boolean;
    pixels_above_lines: number;
    pixels_above_lines_set: boolean;
    pixels_below_lines: number;
    pixels_below_lines_set: boolean;
    pixels_inside_wrap: number;
    pixels_inside_wrap_set: boolean;
    right_margin: number;
    right_margin_set: boolean;
    rise: number;
    rise_set: boolean;
    scale: number;
    scale_set: boolean;
    size: number;
    size_points: number;
    size_set: boolean;
    stretch: Pango.Stretch;
    stretch_set: boolean;
    strikethrough: boolean;
    strikethrough_rgba: Gdk.RGBA;
    strikethrough_rgba_set: boolean;
    strikethrough_set: boolean;
    style: Pango.Style;
    style_set: boolean;
    tabs: Pango.TabArray;
    tabs_set: boolean;
    underline: Pango.Underline;
    underline_rgba: Gdk.RGBA;
    underline_rgba_set: boolean;
    underline_set: boolean;
    variant: Pango.Variant;
    variant_set: boolean;
    weight: number;
    weight_set: boolean;
    wrap_mode: WrapMode;
    wrap_mode_set: boolean;
    changed(size_changed: boolean): void;
    event(event_object: GObject.Object, event: Gdk.Event, iter: TextIter): boolean;
    get_priority(): number;
    set_priority(priority: number): void;
    vfunc_event(event_object: GObject.Object, event: Gdk.Event, iter: TextIter): boolean;
}
export class TextTagTable extends GObject.Object {
    constructor(config?: properties);
    add(tag: TextTag): boolean;
    foreach(func: TextTagTableForeach, data: object | null): void;
    get_size(): number;
    lookup(name: string): TextTag | null;
    remove(tag: TextTag): void;
    vfunc_tag_added(tag: TextTag): void;
    vfunc_tag_changed(tag: TextTag, size_changed: boolean): void;
    vfunc_tag_removed(tag: TextTag): void;
}
export class TextView extends Container {
    constructor(config?: properties);
    accepts_tab: boolean;
    bottom_margin: number;
    buffer: TextBuffer;
    cursor_visible: boolean;
    editable: boolean;
    im_module: string;
    indent: number;
    input_hints: InputHints;
    input_purpose: InputPurpose;
    justification: Justification;
    left_margin: number;
    monospace: boolean;
    overwrite: boolean;
    pixels_above_lines: number;
    pixels_below_lines: number;
    pixels_inside_wrap: number;
    populate_all: boolean;
    right_margin: number;
    tabs: Pango.TabArray;
    top_margin: number;
    wrap_mode: WrapMode;static new_with_buffer(buffer: TextBuffer): Widget;
    add_child_at_anchor(child: Widget, anchor: TextChildAnchor): void;
    add_child_in_window(child: Widget, which_window: TextWindowType, xpos: number, ypos: number): void;
    backward_display_line(iter: TextIter): boolean;
    backward_display_line_start(iter: TextIter): boolean;
    buffer_to_window_coords(win: TextWindowType, buffer_x: number, buffer_y: number): [number | null,number | null];
    forward_display_line(iter: TextIter): boolean;
    forward_display_line_end(iter: TextIter): boolean;
    get_accepts_tab(): boolean;
    get_border_window_size(type: TextWindowType): number;
    get_bottom_margin(): number;
    get_buffer(): TextBuffer;
    get_cursor_locations(iter: TextIter | null): [Gdk.Rectangle | null,Gdk.Rectangle | null];
    get_cursor_visible(): boolean;
    get_default_attributes(): TextAttributes;
    get_editable(): boolean;
    get_hadjustment(): Adjustment;
    get_indent(): number;
    get_input_hints(): InputHints;
    get_input_purpose(): InputPurpose;
    get_iter_at_location(x: number, y: number): [boolean, TextIter];
    get_iter_at_position(x: number, y: number): [boolean, TextIter,number | null];
    get_iter_location(iter: TextIter): [Gdk.Rectangle];
    get_justification(): Justification;
    get_left_margin(): number;
    get_line_at_y(y: number): [TextIter,number];
    get_line_yrange(iter: TextIter): [number,number];
    get_monospace(): boolean;
    get_overwrite(): boolean;
    get_pixels_above_lines(): number;
    get_pixels_below_lines(): number;
    get_pixels_inside_wrap(): number;
    get_right_margin(): number;
    get_tabs(): Pango.TabArray | null;
    get_top_margin(): number;
    get_vadjustment(): Adjustment;
    get_visible_rect(): [Gdk.Rectangle];
    get_window(win: TextWindowType): Gdk.Window | null;
    get_window_type(window: Gdk.Window): TextWindowType;
    get_wrap_mode(): WrapMode;
    im_context_filter_keypress(event: Gdk.EventKey): boolean;
    move_child(child: Widget, xpos: number, ypos: number): void;
    move_mark_onscreen(mark: TextMark): boolean;
    move_visually(iter: TextIter, count: number): boolean;
    place_cursor_onscreen(): boolean;
    reset_cursor_blink(): void;
    reset_im_context(): void;
    scroll_mark_onscreen(mark: TextMark): void;
    scroll_to_iter(iter: TextIter, within_margin: number, use_align: boolean, xalign: number, yalign: number): boolean;
    scroll_to_mark(mark: TextMark, within_margin: number, use_align: boolean, xalign: number, yalign: number): void;
    set_accepts_tab(accepts_tab: boolean): void;
    set_border_window_size(type: TextWindowType, size: number): void;
    set_bottom_margin(bottom_margin: number): void;
    set_buffer(buffer: TextBuffer | null): void;
    set_cursor_visible(setting: boolean): void;
    set_editable(setting: boolean): void;
    set_indent(indent: number): void;
    set_input_hints(hints: InputHints): void;
    set_input_purpose(purpose: InputPurpose): void;
    set_justification(justification: Justification): void;
    set_left_margin(left_margin: number): void;
    set_monospace(monospace: boolean): void;
    set_overwrite(overwrite: boolean): void;
    set_pixels_above_lines(pixels_above_lines: number): void;
    set_pixels_below_lines(pixels_below_lines: number): void;
    set_pixels_inside_wrap(pixels_inside_wrap: number): void;
    set_right_margin(right_margin: number): void;
    set_tabs(tabs: Pango.TabArray): void;
    set_top_margin(top_margin: number): void;
    set_wrap_mode(wrap_mode: WrapMode): void;
    starts_display_line(iter: TextIter): boolean;
    window_to_buffer_coords(win: TextWindowType, window_x: number, window_y: number): [number | null,number | null];
    vfunc_backspace(): void;
    vfunc_copy_clipboard(): void;
    vfunc_cut_clipboard(): void;
    vfunc_delete_from_cursor(type: DeleteType, count: number): void;
    vfunc_draw_layer(layer: TextViewLayer, cr: cairo.Context): void;
    vfunc_extend_selection(granularity: TextExtendSelection, location: TextIter, start: TextIter, end: TextIter): boolean;
    vfunc_insert_at_cursor(str: string): void;
    vfunc_insert_emoji(): void;
    vfunc_move_cursor(step: MovementStep, count: number, extend_selection: boolean): void;
    vfunc_paste_clipboard(): void;
    vfunc_populate_popup(popup: Widget): void;
    vfunc_set_anchor(): void;
    vfunc_toggle_overwrite(): void;
}
export class TextViewAccessible  {
    constructor(config?: properties);
    readonly priv: TextViewAccessiblePrivate;
}
export class ThemingEngine  {
    constructor(config?: properties);
    name: string;
    readonly parent_object: GObject.Object;
    readonly priv: ThemingEnginePrivate;
    get_background_color(state: StateFlags): [Gdk.RGBA];
    get_border(state: StateFlags): [Border];
    get_border_color(state: StateFlags): [Gdk.RGBA];
    get_color(state: StateFlags): [Gdk.RGBA];
    get_direction(): TextDirection;
    get_font(state: StateFlags): Pango.FontDescription;
    get_junction_sides(): JunctionSides;
    get_margin(state: StateFlags): [Border];
    get_padding(state: StateFlags): [Border];
    get_path(): WidgetPath;
    get_property(property: string, state: StateFlags): [GObject.Value];
    get_screen(): Gdk.Screen | null;
    get_state(): StateFlags;
    get_style_property(property_name: string): [GObject.Value];
    has_class(style_class: string): boolean;
    has_region(style_region: string): [boolean, RegionFlags | null];
    lookup_color(color_name: string): [boolean, Gdk.RGBA];
    state_is_running(state: StateType): [boolean, number];
    static load(name: string): ThemingEngine | null;
}
export class ToggleAction extends Action {
    constructor(config?: properties);
    active: boolean;
    draw_as_radio: boolean;
    get_active(): boolean;
    get_draw_as_radio(): boolean;
    set_active(is_active: boolean): void;
    set_draw_as_radio(draw_as_radio: boolean): void;
    toggled(): void;
    vfunc_toggled(): void;
}
export class ToggleButton extends Button {
    constructor(config?: properties);
    active: boolean;
    draw_indicator: boolean;
    inconsistent: boolean;static new_with_label(label: string): Widget;
    static new_with_mnemonic(label: string): Widget;
    get_active(): boolean;
    get_inconsistent(): boolean;
    get_mode(): boolean;
    set_active(is_active: boolean): void;
    set_inconsistent(setting: boolean): void;
    set_mode(draw_indicator: boolean): void;
    toggled(): void;
    vfunc_toggled(): void;
}
export class ToggleButtonAccessible  {
    constructor(config?: properties);
    readonly priv: ToggleButtonAccessiblePrivate;
}
export class ToggleToolButton extends ToolButton {
    constructor(config?: properties);
    active: boolean;static new_from_stock(stock_id: string): ToolItem;
    get_active(): boolean;
    set_active(is_active: boolean): void;
    vfunc_toggled(): void;
}
export class ToolButton extends ToolItem {
    constructor(config?: properties);
    icon_name: string;
    icon_widget: Widget;
    label: string;
    label_widget: Widget;
    stock_id: string;
    use_underline: boolean;static new_from_stock(stock_id: string): ToolItem;
    get_icon_name(): string | null;
    get_icon_widget(): Widget | null;
    get_label(): string | null;
    get_label_widget(): Widget | null;
    get_stock_id(): string;
    get_use_underline(): boolean;
    set_icon_name(icon_name: string | null): void;
    set_icon_widget(icon_widget: Widget | null): void;
    set_label(label: string | null): void;
    set_label_widget(label_widget: Widget | null): void;
    set_stock_id(stock_id: string | null): void;
    set_use_underline(use_underline: boolean): void;
    vfunc_clicked(): void;
}
export class ToolItem extends Bin {
    constructor(config?: properties);
    is_important: boolean;
    visible_horizontal: boolean;
    visible_vertical: boolean;
    get_ellipsize_mode(): Pango.EllipsizeMode;
    get_expand(): boolean;
    get_homogeneous(): boolean;
    get_icon_size(): number;
    get_is_important(): boolean;
    get_orientation(): Orientation;
    get_proxy_menu_item(menu_item_id: string): Widget | null;
    get_relief_style(): ReliefStyle;
    get_text_alignment(): number;
    get_text_orientation(): Orientation;
    get_text_size_group(): SizeGroup;
    get_toolbar_style(): ToolbarStyle;
    get_use_drag_window(): boolean;
    get_visible_horizontal(): boolean;
    get_visible_vertical(): boolean;
    rebuild_menu(): void;
    retrieve_proxy_menu_item(): Widget;
    set_expand(expand: boolean): void;
    set_homogeneous(homogeneous: boolean): void;
    set_is_important(is_important: boolean): void;
    set_proxy_menu_item(menu_item_id: string, menu_item: Widget | null): void;
    set_tooltip_markup(markup: string): void;
    set_tooltip_text(text: string): void;
    set_use_drag_window(use_drag_window: boolean): void;
    set_visible_horizontal(visible_horizontal: boolean): void;
    set_visible_vertical(visible_vertical: boolean): void;
    toolbar_reconfigured(): void;
    vfunc_create_menu_proxy(): boolean;
    vfunc_toolbar_reconfigured(): void;
}
export class ToolItemGroup extends Container {
    constructor(config?: properties);
    collapsed: boolean;
    ellipsize: Pango.EllipsizeMode;
    header_relief: ReliefStyle;
    label: string;
    label_widget: Widget;
    get_collapsed(): boolean;
    get_drop_item(x: number, y: number): ToolItem;
    get_ellipsize(): Pango.EllipsizeMode;
    get_header_relief(): ReliefStyle;
    get_item_position(item: ToolItem): number;
    get_label(): string;
    get_label_widget(): Widget;
    get_n_items(): number;
    get_nth_item(index: number): ToolItem;
    insert(item: ToolItem, position: number): void;
    set_collapsed(collapsed: boolean): void;
    set_ellipsize(ellipsize: Pango.EllipsizeMode): void;
    set_header_relief(style: ReliefStyle): void;
    set_item_position(item: ToolItem, position: number): void;
    set_label(label: string): void;
    set_label_widget(label_widget: Widget): void;
}
export class ToolPalette extends Container {
    constructor(config?: properties);
    icon_size: IconSize;
    icon_size_set: boolean;
    toolbar_style: ToolbarStyle;
    add_drag_dest(widget: Widget, flags: DestDefaults, targets: ToolPaletteDragTargets, actions: Gdk.DragAction): void;
    get_drag_item(selection: SelectionData): Widget;
    get_drop_group(x: number, y: number): ToolItemGroup | null;
    get_drop_item(x: number, y: number): ToolItem | null;
    get_exclusive(group: ToolItemGroup): boolean;
    get_expand(group: ToolItemGroup): boolean;
    get_group_position(group: ToolItemGroup): number;
    get_hadjustment(): Adjustment;
    get_icon_size(): number;
    get_style(): ToolbarStyle;
    get_vadjustment(): Adjustment;
    set_drag_source(targets: ToolPaletteDragTargets): void;
    set_exclusive(group: ToolItemGroup, exclusive: boolean): void;
    set_expand(group: ToolItemGroup, expand: boolean): void;
    set_group_position(group: ToolItemGroup, position: number): void;
    set_icon_size(icon_size: number): void;
    set_style(style: ToolbarStyle): void;
    unset_icon_size(): void;
    unset_style(): void;
    static get_drag_target_group(): TargetEntry;
    static get_drag_target_item(): TargetEntry;
}
export class Toolbar extends Container {
    constructor(config?: properties);
    icon_size: IconSize;
    icon_size_set: boolean;
    show_arrow: boolean;
    toolbar_style: ToolbarStyle;
    get_drop_index(x: number, y: number): number;
    get_icon_size(): IconSize;
    get_item_index(item: ToolItem): number;
    get_n_items(): number;
    get_nth_item(n: number): ToolItem | null;
    get_relief_style(): ReliefStyle;
    get_show_arrow(): boolean;
    get_style(): ToolbarStyle;
    insert(item: ToolItem, pos: number): void;
    set_drop_highlight_item(tool_item: ToolItem | null, index_: number): void;
    set_icon_size(icon_size: IconSize): void;
    set_show_arrow(show_arrow: boolean): void;
    set_style(style: ToolbarStyle): void;
    unset_icon_size(): void;
    unset_style(): void;
    vfunc_orientation_changed(orientation: Orientation): void;
    vfunc_popup_context_menu(x: number, y: number, button_number: number): boolean;
    vfunc_style_changed(style: ToolbarStyle): void;
}
export class Tooltip  {
    constructor(config?: properties);
    set_custom(custom_widget: Widget | null): void;
    set_icon(pixbuf: GdkPixbuf.Pixbuf | null): void;
    set_icon_from_gicon(gicon: Gio.Icon | null, size: number): void;
    set_icon_from_icon_name(icon_name: string | null, size: number): void;
    set_icon_from_stock(stock_id: string | null, size: number): void;
    set_markup(markup: string | null): void;
    set_text(text: string | null): void;
    set_tip_area(rect: Gdk.Rectangle): void;
    static trigger_tooltip_query(display: Gdk.Display): void;
}
export class ToplevelAccessible  {
    constructor(config?: properties);
    readonly priv: ToplevelAccessiblePrivate;
    get_children(): GLib.List;
}
export class TreeModelFilter  {
    constructor(config?: properties);
    child_model: TreeModel;
    virtual_root: TreePath;
    readonly priv: TreeModelFilterPrivate;
    clear_cache(): void;
    convert_child_iter_to_iter(child_iter: TreeIter): [boolean, TreeIter];
    convert_child_path_to_path(child_path: TreePath): TreePath | null;
    convert_iter_to_child_iter(filter_iter: TreeIter): [TreeIter];
    convert_path_to_child_path(filter_path: TreePath): TreePath | null;
    get_model(): TreeModel;
    refilter(): void;
    set_modify_func(n_columns: number, types: GType, func: TreeModelFilterModifyFunc, data: object | null, destroy: GLib.DestroyNotify | null): void;
    set_visible_column(column: number): void;
    set_visible_func(func: TreeModelFilterVisibleFunc, data: object | null, destroy: GLib.DestroyNotify | null): void;
}
export class TreeModelSort  {
    constructor(config?: properties);
    model: TreeModel;
    readonly priv: TreeModelSortPrivate;
    clear_cache(): void;
    convert_child_iter_to_iter(child_iter: TreeIter): [boolean, TreeIter];
    convert_child_path_to_path(child_path: TreePath): TreePath | null;
    convert_iter_to_child_iter(sorted_iter: TreeIter): [TreeIter];
    convert_path_to_child_path(sorted_path: TreePath): TreePath | null;
    get_model(): TreeModel;
    iter_is_valid(iter: TreeIter): boolean;
    reset_default_sort_func(): void;
}
export class TreeSelection  {
    constructor(config?: properties);
    mode: SelectionMode;
    readonly priv: TreeSelectionPrivate;
    count_selected_rows(): number;
    get_mode(): SelectionMode;
    get_selected(): [boolean, TreeModel | null,TreeIter | null];
    get_selected_rows(): [GLib.List, TreeModel | null];
    get_tree_view(): TreeView;
    iter_is_selected(iter: TreeIter): boolean;
    path_is_selected(path: TreePath): boolean;
    select_all(): void;
    select_iter(iter: TreeIter): void;
    select_path(path: TreePath): void;
    select_range(start_path: TreePath, end_path: TreePath): void;
    selected_foreach(func: TreeSelectionForeachFunc, data: object | null): void;
    set_mode(type: SelectionMode): void;
    set_select_function(func: TreeSelectionFunc | null, data: object | null, destroy: GLib.DestroyNotify): void;
    unselect_all(): void;
    unselect_iter(iter: TreeIter): void;
    unselect_path(path: TreePath): void;
    unselect_range(start_path: TreePath, end_path: TreePath): void;
}
export class TreeStore extends GObject.Object {
    constructor(config?: properties);
    static newv(n_columns: number, types: GType): TreeStore;
    static newv(...args: never[]): TreeStore;
    append(parent: TreeIter | null): [TreeIter];
    clear(): void;
    insert(parent: TreeIter | null, position: number): [TreeIter];
    insert_after(parent: TreeIter | null, sibling: TreeIter | null): [TreeIter];
    insert_before(parent: TreeIter | null, sibling: TreeIter | null): [TreeIter];
    insert_with_valuesv(parent: TreeIter | null, position: number, columns: number[], values: GObject.Value[], n_values: number): [TreeIter | null];
    is_ancestor(iter: TreeIter, descendant: TreeIter): boolean;
    iter_depth(iter: TreeIter): number;
    iter_is_valid(iter: TreeIter): boolean;
    move_after(iter: TreeIter, position: TreeIter | null): void;
    move_before(iter: TreeIter, position: TreeIter | null): void;
    prepend(parent: TreeIter | null): [TreeIter];
    remove(iter: TreeIter): boolean;
    set_column_types(n_columns: number, types: GType): void;
    set_value(iter: TreeIter, column: number, value: GObject.Value): void;
    set_valuesv(iter: TreeIter, columns: number[], values: GObject.Value[], n_values: number): void;
    swap(a: TreeIter, b: TreeIter): void;
}
export class TreeView extends Container {
    constructor(config?: properties);
    activate_on_single_click: boolean;
    enable_grid_lines: TreeViewGridLines;
    enable_search: boolean;
    enable_tree_lines: boolean;
    expander_column: TreeViewColumn;
    fixed_height_mode: boolean;
    headers_clickable: boolean;
    headers_visible: boolean;
    hover_expand: boolean;
    hover_selection: boolean;
    level_indentation: number;
    model: TreeModel;
    reorderable: boolean;
    rubber_banding: boolean;
    rules_hint: boolean;
    search_column: number;
    show_expanders: boolean;
    tooltip_column: number;static new_with_model(model: TreeModel): Widget;
    append_column(column: TreeViewColumn): number;
    collapse_all(): void;
    collapse_row(path: TreePath): boolean;
    columns_autosize(): void;
    convert_bin_window_to_tree_coords(bx: number, by: number): [number,number];
    convert_bin_window_to_widget_coords(bx: number, by: number): [number,number];
    convert_tree_to_bin_window_coords(tx: number, ty: number): [number,number];
    convert_tree_to_widget_coords(tx: number, ty: number): [number,number];
    convert_widget_to_bin_window_coords(wx: number, wy: number): [number,number];
    convert_widget_to_tree_coords(wx: number, wy: number): [number,number];
    create_row_drag_icon(path: TreePath): cairo.Surface;
    enable_model_drag_dest(targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction): void;
    enable_model_drag_source(start_button_mask: Gdk.ModifierType, targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction): void;
    expand_all(): void;
    expand_row(path: TreePath, open_all: boolean): boolean;
    expand_to_path(path: TreePath): void;
    get_activate_on_single_click(): boolean;
    get_background_area(path: TreePath | null, column: TreeViewColumn | null): [Gdk.Rectangle];
    get_bin_window(): Gdk.Window | null;
    get_cell_area(path: TreePath | null, column: TreeViewColumn | null): [Gdk.Rectangle];
    get_column(n: number): TreeViewColumn | null;
    get_columns(): GLib.List;
    get_cursor(): [TreePath | null,TreeViewColumn | null];
    get_dest_row_at_pos(drag_x: number, drag_y: number): [boolean, TreePath | null,TreeViewDropPosition | null];
    get_drag_dest_row(): [TreePath | null,TreeViewDropPosition | null];
    get_enable_search(): boolean;
    get_enable_tree_lines(): boolean;
    get_expander_column(): TreeViewColumn;
    get_fixed_height_mode(): boolean;
    get_grid_lines(): TreeViewGridLines;
    get_hadjustment(): Adjustment;
    get_headers_clickable(): boolean;
    get_headers_visible(): boolean;
    get_hover_expand(): boolean;
    get_hover_selection(): boolean;
    get_level_indentation(): number;
    get_model(): TreeModel | null;
    get_n_columns(): number;
    get_path_at_pos(x: number, y: number): [boolean, TreePath | null,TreeViewColumn | null,number | null,number | null];
    get_reorderable(): boolean;
    get_rubber_banding(): boolean;
    get_rules_hint(): boolean;
    get_search_column(): number;
    get_search_entry(): Entry;
    get_selection(): TreeSelection;
    get_show_expanders(): boolean;
    get_tooltip_column(): number;
    get_tooltip_context(x: number, y: number, keyboard_tip: boolean): [boolean, number,number,TreeModel | null,TreePath | null,TreeIter | null];
    get_vadjustment(): Adjustment;
    get_visible_range(): [boolean, TreePath | null,TreePath | null];
    get_visible_rect(): [Gdk.Rectangle];
    insert_column(column: TreeViewColumn, position: number): number;
    insert_column_with_data_func(position: number, title: string, cell: CellRenderer, func: TreeCellDataFunc, data: object | null, dnotify: GLib.DestroyNotify): number;
    is_blank_at_pos(x: number, y: number): [boolean, TreePath | null,TreeViewColumn | null,number | null,number | null];
    is_rubber_banding_active(): boolean;
    map_expanded_rows(func: TreeViewMappingFunc, data: object | null): void;
    move_column_after(column: TreeViewColumn, base_column: TreeViewColumn | null): void;
    remove_column(column: TreeViewColumn): number;
    row_activated(path: TreePath, column: TreeViewColumn): void;
    row_expanded(path: TreePath): boolean;
    scroll_to_cell(path: TreePath | null, column: TreeViewColumn | null, use_align: boolean, row_align: number, col_align: number): void;
    scroll_to_point(tree_x: number, tree_y: number): void;
    set_activate_on_single_click(single: boolean): void;
    set_column_drag_function(func: TreeViewColumnDropFunc | null, user_data: object | null, destroy: GLib.DestroyNotify | null): void;
    set_cursor(path: TreePath, focus_column: TreeViewColumn | null, start_editing: boolean): void;
    set_cursor_on_cell(path: TreePath, focus_column: TreeViewColumn | null, focus_cell: CellRenderer | null, start_editing: boolean): void;
    set_destroy_count_func(func: TreeDestroyCountFunc | null, data: object | null, destroy: GLib.DestroyNotify | null): void;
    set_drag_dest_row(path: TreePath | null, pos: TreeViewDropPosition): void;
    set_enable_search(enable_search: boolean): void;
    set_enable_tree_lines(enabled: boolean): void;
    set_expander_column(column: TreeViewColumn | null): void;
    set_fixed_height_mode(enable: boolean): void;
    set_grid_lines(grid_lines: TreeViewGridLines): void;
    set_hadjustment(adjustment: Adjustment | null): void;
    set_headers_clickable(setting: boolean): void;
    set_headers_visible(headers_visible: boolean): void;
    set_hover_expand(expand: boolean): void;
    set_hover_selection(hover: boolean): void;
    set_level_indentation(indentation: number): void;
    set_model(model: TreeModel | null): void;
    set_reorderable(reorderable: boolean): void;
    set_row_separator_func(func: TreeViewRowSeparatorFunc | null, data: object | null, destroy: GLib.DestroyNotify | null): void;
    set_rubber_banding(enable: boolean): void;
    set_rules_hint(setting: boolean): void;
    set_search_column(column: number): void;
    set_search_entry(entry: Entry | null): void;
    set_search_equal_func(search_equal_func: TreeViewSearchEqualFunc, search_user_data: object | null, search_destroy: GLib.DestroyNotify | null): void;
    set_search_position_func(func: TreeViewSearchPositionFunc | null, data: object | null, destroy: GLib.DestroyNotify | null): void;
    set_show_expanders(enabled: boolean): void;
    set_tooltip_cell(tooltip: Tooltip, path: TreePath | null, column: TreeViewColumn | null, cell: CellRenderer | null): void;
    set_tooltip_column(column: number): void;
    set_tooltip_row(tooltip: Tooltip, path: TreePath): void;
    set_vadjustment(adjustment: Adjustment | null): void;
    unset_rows_drag_dest(): void;
    unset_rows_drag_source(): void;
    vfunc_columns_changed(): void;
    vfunc_cursor_changed(): void;
    vfunc_expand_collapse_cursor_row(logical: boolean, expand: boolean, open_all: boolean): boolean;
    vfunc_move_cursor(step: MovementStep, count: number): boolean;
    vfunc_row_activated(path: TreePath, column: TreeViewColumn): void;
    vfunc_row_collapsed(iter: TreeIter, path: TreePath): void;
    vfunc_row_expanded(iter: TreeIter, path: TreePath): void;
    vfunc_select_all(): boolean;
    vfunc_select_cursor_parent(): boolean;
    vfunc_select_cursor_row(start_editing: boolean): boolean;
    vfunc_start_interactive_search(): boolean;
    vfunc_test_collapse_row(iter: TreeIter, path: TreePath): boolean;
    vfunc_test_expand_row(iter: TreeIter, path: TreePath): boolean;
    vfunc_toggle_cursor_row(): boolean;
    vfunc_unselect_all(): boolean;
}
export class TreeViewAccessible  {
    constructor(config?: properties);
    readonly priv: TreeViewAccessiblePrivate;
}
export class TreeViewColumn extends GObject.InitiallyUnowned {
    constructor(config?: properties);
    alignment: number;
    cell_area: CellArea;
    clickable: boolean;
    expand: boolean;
    fixed_width: number;
    max_width: number;
    min_width: number;
    reorderable: boolean;
    resizable: boolean;
    sizing: TreeViewColumnSizing;
    sort_column_id: number;
    sort_indicator: boolean;
    sort_order: SortType;
    spacing: number;
    title: string;
    visible: boolean;
    widget: Widget;
    readonly width: number;
    readonly x_offset: number;static new_with_area(area: CellArea): TreeViewColumn;
    add_attribute(cell_renderer: CellRenderer, attribute: string, column: number): void;
    cell_get_position(cell_renderer: CellRenderer): [boolean, number | null,number | null];
    cell_get_size(cell_area: Gdk.Rectangle | null): [number | null,number | null,number | null,number | null];
    cell_is_visible(): boolean;
    cell_set_cell_data(tree_model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean): void;
    clear(): void;
    clear_attributes(cell_renderer: CellRenderer): void;
    clicked(): void;
    focus_cell(cell: CellRenderer): void;
    get_alignment(): number;
    get_button(): Widget;
    get_clickable(): boolean;
    get_expand(): boolean;
    get_fixed_width(): number;
    get_max_width(): number;
    get_min_width(): number;
    get_reorderable(): boolean;
    get_resizable(): boolean;
    get_sizing(): TreeViewColumnSizing;
    get_sort_column_id(): number;
    get_sort_indicator(): boolean;
    get_sort_order(): SortType;
    get_spacing(): number;
    get_title(): string;
    get_tree_view(): Widget | null;
    get_visible(): boolean;
    get_widget(): Widget | null;
    get_width(): number;
    get_x_offset(): number;
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    queue_resize(): void;
    set_alignment(xalign: number): void;
    set_cell_data_func(cell_renderer: CellRenderer, func: TreeCellDataFunc | null, func_data: object | null, destroy: GLib.DestroyNotify): void;
    set_clickable(clickable: boolean): void;
    set_expand(expand: boolean): void;
    set_fixed_width(fixed_width: number): void;
    set_max_width(max_width: number): void;
    set_min_width(min_width: number): void;
    set_reorderable(reorderable: boolean): void;
    set_resizable(resizable: boolean): void;
    set_sizing(type: TreeViewColumnSizing): void;
    set_sort_column_id(sort_column_id: number): void;
    set_sort_indicator(setting: boolean): void;
    set_sort_order(order: SortType): void;
    set_spacing(spacing: number): void;
    set_title(title: string): void;
    set_visible(visible: boolean): void;
    set_widget(widget: Widget | null): void;
    vfunc_clicked(): void;
}
export class UIManager extends GObject.Object {
    constructor(config?: properties);
    add_tearoffs: boolean;
    readonly ui: string;
    add_ui(merge_id: number, path: string, name: string, action: string | null, type: UIManagerItemType, top: boolean): void;
    add_ui_from_file(filename: string): number;
    add_ui_from_resource(resource_path: string): number;
    add_ui_from_string(buffer: string, length: number): number;
    ensure_update(): void;
    get_accel_group(): AccelGroup;
    get_action(path: string): Action;
    get_action_groups(): GLib.List;
    get_add_tearoffs(): boolean;
    get_toplevels(types: UIManagerItemType): string[];
    get_ui(): string;
    get_widget(path: string): Widget;
    insert_action_group(action_group: ActionGroup, pos: number): void;
    new_merge_id(): number;
    remove_action_group(action_group: ActionGroup): void;
    remove_ui(merge_id: number): void;
    set_add_tearoffs(add_tearoffs: boolean): void;
    vfunc_actions_changed(): void;
    vfunc_add_widget(widget: Widget): void;
    vfunc_connect_proxy(action: Action, proxy: Widget): void;
    vfunc_disconnect_proxy(action: Action, proxy: Widget): void;
    vfunc_get_action(path: string): Action;
    vfunc_get_widget(path: string): Widget;
    vfunc_post_activate(action: Action): void;
    vfunc_pre_activate(action: Action): void;
}
export class VBox extends Box {
    constructor(config?: properties);
}
export class VButtonBox extends ButtonBox {
    constructor(config?: properties);
}
export class VPaned extends Paned {
    constructor(config?: properties);
}
export class VScale extends Scale {
    constructor(config?: properties);
    static new_with_range(min: number, max: number, step: number): Widget;
    static new_with_range(...args: never[]): Widget;
}
export class VScrollbar extends Scrollbar {
    constructor(config?: properties);
}
export class VSeparator extends Separator {
    constructor(config?: properties);
}
export class Viewport extends Bin {
    constructor(config?: properties);
    shadow_type: ShadowType;
    get_bin_window(): Gdk.Window;
    get_hadjustment(): Adjustment;
    get_shadow_type(): ShadowType;
    get_vadjustment(): Adjustment;
    get_view_window(): Gdk.Window;
    set_hadjustment(adjustment: Adjustment | null): void;
    set_shadow_type(type: ShadowType): void;
    set_vadjustment(adjustment: Adjustment | null): void;
}
export class VolumeButton extends ScaleButton {
    constructor(config?: properties);
    use_symbolic: boolean;
}
export class Widget extends GObject.InitiallyUnowned {
    constructor(config?: properties);
    app_paintable: boolean;
    can_default: boolean;
    can_focus: boolean;
    readonly composite_child: boolean;
    double_buffered: boolean;
    events: Gdk.EventMask;
    expand: boolean;
    focus_on_click: boolean;
    halign: Align;
    has_tooltip: boolean;
    height_request: number;
    hexpand: boolean;
    hexpand_set: boolean;
    margin: number;
    margin_bottom: number;
    margin_end: number;
    margin_left: number;
    margin_right: number;
    margin_start: number;
    margin_top: number;
    name: string;
    no_show_all: boolean;
    opacity: number;
    receives_default: boolean;
    readonly scale_factor: number;
    sensitive: boolean;
    style: Style;
    tooltip_markup: string;
    tooltip_text: string;
    valign: Align;
    vexpand: boolean;
    vexpand_set: boolean;
    visible: boolean;
    width_request: number;
    readonly window: Gdk.Window;
    activate(): boolean;
    add_accelerator(accel_signal: string, accel_group: AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: AccelFlags): void;
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void;
    add_events(events: number): void;
    add_mnemonic_label(label: Widget): void;
    add_tick_callback(callback: TickCallback, user_data: object | null, notify: GLib.DestroyNotify): number;
    can_activate_accel(signal_id: number): boolean;
    child_focus(direction: DirectionType): boolean;
    child_notify(child_property: string): void;
    class_path(): [number | null,string | null,string | null];
    compute_expand(orientation: Orientation): boolean;
    create_pango_context(): Pango.Context;
    create_pango_layout(text: string | null): Pango.Layout;
    destroy(): void;
    destroyed(widget_pointer: Widget): [Widget];
    device_is_shadowed(device: Gdk.Device): boolean;
    drag_begin(targets: TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null): Gdk.DragContext;
    drag_begin_with_coordinates(targets: TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext;
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
    drag_dest_add_image_targets(): void;
    drag_dest_add_text_targets(): void;
    drag_dest_add_uri_targets(): void;
    drag_dest_find_target(context: Gdk.DragContext, target_list: TargetList | null): Gdk.Atom;
    drag_dest_get_target_list(): TargetList | null;
    drag_dest_get_track_motion(): boolean;
    drag_dest_set(flags: DestDefaults, targets: TargetEntry[] | null, n_targets: number, actions: Gdk.DragAction): void;
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void;
    drag_dest_set_target_list(target_list: TargetList | null): void;
    drag_dest_set_track_motion(track_motion: boolean): void;
    drag_dest_unset(): void;
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void;
    drag_highlight(): void;
    drag_source_add_image_targets(): void;
    drag_source_add_text_targets(): void;
    drag_source_add_uri_targets(): void;
    drag_source_get_target_list(): TargetList | null;
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: TargetEntry[] | null, n_targets: number, actions: Gdk.DragAction): void;
    drag_source_set_icon_gicon(icon: Gio.Icon): void;
    drag_source_set_icon_name(icon_name: string): void;
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    drag_source_set_icon_stock(stock_id: string): void;
    drag_source_set_target_list(target_list: TargetList | null): void;
    drag_source_unset(): void;
    drag_unhighlight(): void;
    draw(cr: cairo.Context): void;
    ensure_style(): void;
    error_bell(): void;
    event(event: Gdk.Event): boolean;
    freeze_child_notify(): void;
    get_accessible(): Atk.Object;
    get_action_group(prefix: string): Gio.ActionGroup | null;
    get_allocated_baseline(): number;
    get_allocated_height(): number;
    get_allocated_size(): [Allocation,number | null];
    get_allocated_width(): number;
    get_allocation(): [Allocation];
    get_ancestor(widget_type: GType): Widget | null;
    get_app_paintable(): boolean;
    get_can_default(): boolean;
    get_can_focus(): boolean;
    get_child_requisition(): [Requisition];
    get_child_visible(): boolean;
    get_clip(): [Allocation];
    get_clipboard(selection: Gdk.Atom): Clipboard;
    get_composite_name(): string;
    get_device_enabled(device: Gdk.Device): boolean;
    get_device_events(device: Gdk.Device): Gdk.EventMask;
    get_direction(): TextDirection;
    get_display(): Gdk.Display;
    get_double_buffered(): boolean;
    get_events(): number;
    get_focus_on_click(): boolean;
    get_font_map(): Pango.FontMap | null;
    get_font_options(): cairo.FontOptions | null;
    get_frame_clock(): Gdk.FrameClock | null;
    get_halign(): Align;
    get_has_tooltip(): boolean;
    get_has_window(): boolean;
    get_hexpand(): boolean;
    get_hexpand_set(): boolean;
    get_mapped(): boolean;
    get_margin_bottom(): number;
    get_margin_end(): number;
    get_margin_left(): number;
    get_margin_right(): number;
    get_margin_start(): number;
    get_margin_top(): number;
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType;
    get_modifier_style(): RcStyle;
    get_name(): string;
    get_no_show_all(): boolean;
    get_opacity(): number;
    get_pango_context(): Pango.Context;
    get_parent(): Widget | null;
    get_parent_window(): Gdk.Window | null;
    get_path(): WidgetPath;
    get_pointer(): [number | null,number | null];
    get_preferred_height(): [number | null,number | null];
    get_preferred_height_and_baseline_for_width(width: number): [number | null,number | null,number | null,number | null];
    get_preferred_height_for_width(width: number): [number | null,number | null];
    get_preferred_size(): [Requisition | null,Requisition | null];
    get_preferred_width(): [number | null,number | null];
    get_preferred_width_for_height(height: number): [number | null,number | null];
    get_realized(): boolean;
    get_receives_default(): boolean;
    get_request_mode(): SizeRequestMode;
    get_requisition(): [Requisition];
    get_root_window(): Gdk.Window;
    get_scale_factor(): number;
    get_screen(): Gdk.Screen;
    get_sensitive(): boolean;
    get_settings(): Settings;
    get_size_request(): [number | null,number | null];
    get_state(): StateType;
    get_state_flags(): StateFlags;
    get_style(): Style;
    get_style_context(): StyleContext;
    get_support_multidevice(): boolean;
    get_template_child(widget_type: GType, name: string): GObject.Object;
    get_tooltip_markup(): string | null;
    get_tooltip_text(): string | null;
    get_tooltip_window(): Window;
    get_toplevel(): Widget;
    get_valign(): Align;
    get_valign_with_baseline(): Align;
    get_vexpand(): boolean;
    get_vexpand_set(): boolean;
    get_visible(): boolean;
    get_visual(): Gdk.Visual;
    get_window(): Gdk.Window | null;
    grab_add(): void;
    grab_default(): void;
    grab_focus(): void;
    grab_remove(): void;
    has_default(): boolean;
    has_focus(): boolean;
    has_grab(): boolean;
    has_rc_style(): boolean;
    has_screen(): boolean;
    has_visible_focus(): boolean;
    hide(): void;
    hide_on_delete(): boolean;
    in_destruction(): boolean;
    init_template(): void;
    input_shape_combine_region(region: cairo.Region | null): void;
    insert_action_group(name: string, group: Gio.ActionGroup | null): void;
    intersect(area: Gdk.Rectangle): [boolean, Gdk.Rectangle | null];
    is_ancestor(ancestor: Widget): boolean;
    is_composited(): boolean;
    is_drawable(): boolean;
    is_focus(): boolean;
    is_sensitive(): boolean;
    is_toplevel(): boolean;
    is_visible(): boolean;
    keynav_failed(direction: DirectionType): boolean;
    list_accel_closures(): GLib.List;
    list_action_prefixes(): string[];
    list_mnemonic_labels(): GLib.List;
    map(): void;
    mnemonic_activate(group_cycling: boolean): boolean;
    modify_base(state: StateType, color: Gdk.Color | null): void;
    modify_bg(state: StateType, color: Gdk.Color | null): void;
    modify_cursor(primary: Gdk.Color | null, secondary: Gdk.Color | null): void;
    modify_fg(state: StateType, color: Gdk.Color | null): void;
    modify_font(font_desc: Pango.FontDescription | null): void;
    modify_style(style: RcStyle): void;
    modify_text(state: StateType, color: Gdk.Color | null): void;
    override_background_color(state: StateFlags, color: Gdk.RGBA | null): void;
    override_color(state: StateFlags, color: Gdk.RGBA | null): void;
    override_cursor(cursor: Gdk.RGBA | null, secondary_cursor: Gdk.RGBA | null): void;
    override_font(font_desc: Pango.FontDescription | null): void;
    override_symbolic_color(name: string, color: Gdk.RGBA | null): void;
    path(): [number | null,string | null,string | null];
    queue_allocate(): void;
    queue_compute_expand(): void;
    queue_draw(): void;
    queue_draw_area(x: number, y: number, width: number, height: number): void;
    queue_draw_region(region: cairo.Region): void;
    queue_resize(): void;
    queue_resize_no_redraw(): void;
    realize(): void;
    region_intersect(region: cairo.Region): cairo.Region;
    register_window(window: Gdk.Window): void;
    remove_accelerator(accel_group: AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean;
    remove_mnemonic_label(label: Widget): void;
    remove_tick_callback(id: number): void;
    render_icon(stock_id: string, size: number, detail: string | null): GdkPixbuf.Pixbuf | null;
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null;
    reparent(new_parent: Widget): void;
    reset_rc_styles(): void;
    reset_style(): void;
    send_expose(event: Gdk.Event): number;
    send_focus_change(event: Gdk.Event): boolean;
    set_accel_path(accel_path: string | null, accel_group: AccelGroup | null): void;
    set_allocation(allocation: Allocation): void;
    set_app_paintable(app_paintable: boolean): void;
    set_can_default(can_default: boolean): void;
    set_can_focus(can_focus: boolean): void;
    set_child_visible(is_visible: boolean): void;
    set_clip(clip: Allocation): void;
    set_composite_name(name: string): void;
    set_device_enabled(device: Gdk.Device, enabled: boolean): void;
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void;
    set_direction(dir: TextDirection): void;
    set_double_buffered(double_buffered: boolean): void;
    set_events(events: number): void;
    set_focus_on_click(focus_on_click: boolean): void;
    set_font_map(font_map: Pango.FontMap | null): void;
    set_font_options(options: cairo.FontOptions | null): void;
    set_halign(align: Align): void;
    set_has_tooltip(has_tooltip: boolean): void;
    set_has_window(has_window: boolean): void;
    set_hexpand(expand: boolean): void;
    set_hexpand_set(set: boolean): void;
    set_mapped(mapped: boolean): void;
    set_margin_bottom(margin: number): void;
    set_margin_end(margin: number): void;
    set_margin_left(margin: number): void;
    set_margin_right(margin: number): void;
    set_margin_start(margin: number): void;
    set_margin_top(margin: number): void;
    set_name(name: string): void;
    set_no_show_all(no_show_all: boolean): void;
    set_opacity(opacity: number): void;
    set_parent(parent: Widget): void;
    set_parent_window(parent_window: Gdk.Window): void;
    set_realized(realized: boolean): void;
    set_receives_default(receives_default: boolean): void;
    set_redraw_on_allocate(redraw_on_allocate: boolean): void;
    set_sensitive(sensitive: boolean): void;
    set_size_request(width: number, height: number): void;
    set_state(state: StateType): void;
    set_state_flags(flags: StateFlags, clear: boolean): void;
    set_style(style: Style | null): void;
    set_support_multidevice(support_multidevice: boolean): void;
    set_tooltip_markup(markup: string | null): void;
    set_tooltip_text(text: string | null): void;
    set_tooltip_window(custom_window: Window | null): void;
    set_valign(align: Align): void;
    set_vexpand(expand: boolean): void;
    set_vexpand_set(set: boolean): void;
    set_visible(visible: boolean): void;
    set_visual(visual: Gdk.Visual | null): void;
    set_window(window: Gdk.Window): void;
    shape_combine_region(region: cairo.Region | null): void;
    show(): void;
    show_all(): void;
    show_now(): void;
    size_allocate(allocation: Allocation): void;
    size_allocate_with_baseline(allocation: Allocation, baseline: number): void;
    size_request(): [Requisition];
    style_attach(): void;
    style_get_property(property_name: string, value: GObject.Value): void;
    thaw_child_notify(): void;
    translate_coordinates(dest_widget: Widget, src_x: number, src_y: number): [boolean, number | null,number | null];
    trigger_tooltip_query(): void;
    unmap(): void;
    unparent(): void;
    unrealize(): void;
    unregister_window(window: Gdk.Window): void;
    unset_state_flags(flags: StateFlags): void;
    vfunc_adjust_baseline_allocation(baseline: number): void;
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void;
    vfunc_adjust_size_allocation(orientation: Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void;
    vfunc_adjust_size_request(orientation: Orientation, minimum_size: number, natural_size: number): void;
    vfunc_button_press_event(event: Gdk.EventButton): boolean;
    vfunc_button_release_event(event: Gdk.EventButton): boolean;
    vfunc_can_activate_accel(signal_id: number): boolean;
    vfunc_child_notify(child_property: GObject.ParamSpec): void;
    vfunc_composited_changed(): void;
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
    vfunc_configure_event(event: Gdk.EventConfigure): boolean;
    vfunc_damage_event(event: Gdk.EventExpose): boolean;
    vfunc_delete_event(event: Gdk.EventAny): boolean;
    vfunc_destroy(): void;
    vfunc_destroy_event(event: Gdk.EventAny): boolean;
    vfunc_direction_changed(previous_direction: TextDirection): void;
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
    vfunc_drag_begin(context: Gdk.DragContext): void;
    vfunc_drag_data_delete(context: Gdk.DragContext): void;
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: SelectionData, info: number, time_: number): void;
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: SelectionData, info: number, time_: number): void;
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
    vfunc_drag_end(context: Gdk.DragContext): void;
    vfunc_drag_failed(context: Gdk.DragContext, result: DragResult): boolean;
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void;
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
    vfunc_draw(cr: cairo.Context): boolean;
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean;
    vfunc_event(event: Gdk.Event): boolean;
    vfunc_focus(direction: DirectionType): boolean;
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean;
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean;
    vfunc_get_accessible(): Atk.Object;
    vfunc_get_preferred_height(): [number | null,number | null];
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [number | null,number | null,number | null,number | null];
    vfunc_get_preferred_height_for_width(width: number): [number | null,number | null];
    vfunc_get_preferred_width(): [number | null,number | null];
    vfunc_get_preferred_width_for_height(height: number): [number | null,number | null];
    vfunc_get_request_mode(): SizeRequestMode;
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean;
    vfunc_grab_focus(): void;
    vfunc_grab_notify(was_grabbed: boolean): void;
    vfunc_hide(): void;
    vfunc_hierarchy_changed(previous_toplevel: Widget): void;
    vfunc_key_press_event(event: Gdk.EventKey): boolean;
    vfunc_key_release_event(event: Gdk.EventKey): boolean;
    vfunc_keynav_failed(direction: DirectionType): boolean;
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean;
    vfunc_map(): void;
    vfunc_map_event(event: Gdk.EventAny): boolean;
    vfunc_mnemonic_activate(group_cycling: boolean): boolean;
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean;
    vfunc_move_focus(direction: DirectionType): void;
    vfunc_parent_set(previous_parent: Widget): void;
    vfunc_popup_menu(): boolean;
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean;
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean;
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean;
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Tooltip): boolean;
    vfunc_queue_draw_region(region: cairo.Region): void;
    vfunc_realize(): void;
    vfunc_screen_changed(previous_screen: Gdk.Screen): void;
    vfunc_scroll_event(event: Gdk.EventScroll): boolean;
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean;
    vfunc_selection_get(selection_data: SelectionData, info: number, time_: number): void;
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean;
    vfunc_selection_received(selection_data: SelectionData, time_: number): void;
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean;
    vfunc_show(): void;
    vfunc_show_all(): void;
    vfunc_show_help(help_type: WidgetHelpType): boolean;
    vfunc_size_allocate(allocation: Allocation): void;
    vfunc_state_changed(previous_state: StateType): void;
    vfunc_state_flags_changed(previous_state_flags: StateFlags): void;
    vfunc_style_set(previous_style: Style): void;
    vfunc_style_updated(): void;
    vfunc_touch_event(event: Gdk.EventTouch): boolean;
    vfunc_unmap(): void;
    vfunc_unmap_event(event: Gdk.EventAny): boolean;
    vfunc_unrealize(): void;
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean;
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean;
    static get_default_direction(): TextDirection;
    static get_default_style(): Style;
    static pop_composite_child(): void;
    static push_composite_child(): void;
    static set_default_direction(dir: TextDirection): void;
}
export class WidgetAccessible  {
    constructor(config?: properties);
    readonly priv: WidgetAccessiblePrivate;
}
export class Window extends Bin {
    constructor(config?: properties);
    accept_focus: boolean;
    application: Application;
    attached_to: Widget;
    decorated: boolean;
    default_height: number;
    default_width: number;
    deletable: boolean;
    destroy_with_parent: boolean;
    focus_on_map: boolean;
    focus_visible: boolean;
    gravity: Gdk.Gravity;
    has_resize_grip: boolean;
    hide_titlebar_when_maximized: boolean;
    icon: GdkPixbuf.Pixbuf;
    icon_name: string;
    mnemonics_visible: boolean;
    modal: boolean;
    resizable: boolean;
    readonly resize_grip_visible: boolean;
    role: string;
    screen: Gdk.Screen;
    skip_pager_hint: boolean;
    skip_taskbar_hint: boolean;
    startup_id: string;
    title: string;
    transient_for: Window;
    type: WindowType;
    type_hint: Gdk.WindowTypeHint;
    urgency_hint: boolean;
    window_position: WindowPosition;
    activate_default(): boolean;
    activate_focus(): boolean;
    activate_key(event: Gdk.EventKey): boolean;
    add_accel_group(accel_group: AccelGroup): void;
    add_mnemonic(keyval: number, target: Widget): void;
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void;
    begin_resize_drag(edge: Gdk.WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void;
    close(): void;
    deiconify(): void;
    fullscreen(): void;
    fullscreen_on_monitor(screen: Gdk.Screen, monitor: number): void;
    get_accept_focus(): boolean;
    get_application(): Application | null;
    get_attached_to(): Widget | null;
    get_decorated(): boolean;
    get_default_size(): [number | null,number | null];
    get_default_widget(): Widget | null;
    get_deletable(): boolean;
    get_destroy_with_parent(): boolean;
    get_focus(): Widget | null;
    get_focus_on_map(): boolean;
    get_focus_visible(): boolean;
    get_gravity(): Gdk.Gravity;
    get_group(): WindowGroup;
    get_has_resize_grip(): boolean;
    get_hide_titlebar_when_maximized(): boolean;
    get_icon(): GdkPixbuf.Pixbuf | null;
    get_icon_list(): GLib.List;
    get_icon_name(): string | null;
    get_mnemonic_modifier(): Gdk.ModifierType;
    get_mnemonics_visible(): boolean;
    get_modal(): boolean;
    get_opacity(): number;
    get_position(): [number | null,number | null];
    get_resizable(): boolean;
    get_resize_grip_area(): [boolean, Gdk.Rectangle];
    get_role(): string | null;
    get_screen(): Gdk.Screen;
    get_size(): [number | null,number | null];
    get_skip_pager_hint(): boolean;
    get_skip_taskbar_hint(): boolean;
    get_title(): string | null;
    get_titlebar(): Widget | null;
    get_transient_for(): Window | null;
    get_type_hint(): Gdk.WindowTypeHint;
    get_urgency_hint(): boolean;
    get_window_type(): WindowType;
    has_group(): boolean;
    has_toplevel_focus(): boolean;
    iconify(): void;
    is_active(): boolean;
    is_maximized(): boolean;
    maximize(): void;
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean;
    move(x: number, y: number): void;
    parse_geometry(geometry: string): boolean;
    present(): void;
    present_with_time(timestamp: number): void;
    propagate_key_event(event: Gdk.EventKey): boolean;
    remove_accel_group(accel_group: AccelGroup): void;
    remove_mnemonic(keyval: number, target: Widget): void;
    reshow_with_initial_size(): void;
    resize(width: number, height: number): void;
    resize_grip_is_visible(): boolean;
    resize_to_geometry(width: number, height: number): void;
    set_accept_focus(setting: boolean): void;
    set_application(application: Application | null): void;
    set_attached_to(attach_widget: Widget | null): void;
    set_decorated(setting: boolean): void;
    set_default(default_widget: Widget | null): void;
    set_default_geometry(width: number, height: number): void;
    set_default_size(width: number, height: number): void;
    set_deletable(setting: boolean): void;
    set_destroy_with_parent(setting: boolean): void;
    set_focus(focus: Widget | null): void;
    set_focus_on_map(setting: boolean): void;
    set_focus_visible(setting: boolean): void;
    set_geometry_hints(geometry_widget: Widget | null, geometry: Gdk.Geometry | null, geom_mask: Gdk.WindowHints): void;
    set_gravity(gravity: Gdk.Gravity): void;
    set_has_resize_grip(value: boolean): void;
    set_has_user_ref_count(setting: boolean): void;
    set_hide_titlebar_when_maximized(setting: boolean): void;
    set_icon(icon: GdkPixbuf.Pixbuf | null): void;
    set_icon_from_file(filename: string): boolean;
    set_icon_list(list: GLib.List): void;
    set_icon_name(name: string | null): void;
    set_keep_above(setting: boolean): void;
    set_keep_below(setting: boolean): void;
    set_mnemonic_modifier(modifier: Gdk.ModifierType): void;
    set_mnemonics_visible(setting: boolean): void;
    set_modal(modal: boolean): void;
    set_opacity(opacity: number): void;
    set_position(position: WindowPosition): void;
    set_resizable(resizable: boolean): void;
    set_role(role: string): void;
    set_screen(screen: Gdk.Screen): void;
    set_skip_pager_hint(setting: boolean): void;
    set_skip_taskbar_hint(setting: boolean): void;
    set_startup_id(startup_id: string): void;
    set_title(title: string): void;
    set_titlebar(titlebar: Widget | null): void;
    set_transient_for(parent: Window | null): void;
    set_type_hint(hint: Gdk.WindowTypeHint): void;
    set_urgency_hint(setting: boolean): void;
    set_wmclass(wmclass_name: string, wmclass_class: string): void;
    stick(): void;
    unfullscreen(): void;
    unmaximize(): void;
    unstick(): void;
    vfunc_activate_default(): void;
    vfunc_activate_focus(): void;
    vfunc_enable_debugging(toggle: boolean): boolean;
    vfunc_keys_changed(): void;
    vfunc_set_focus(focus: Widget | null): void;
    static get_default_icon_list(): GLib.List;
    static get_default_icon_name(): string;
    static list_toplevels(): GLib.List;
    static set_auto_startup_notification(setting: boolean): void;
    static set_default_icon(icon: GdkPixbuf.Pixbuf): void;
    static set_default_icon_from_file(filename: string): boolean;
    static set_default_icon_list(list: GLib.List): void;
    static set_default_icon_name(name: string): void;
    static set_interactive_debugging(enable: boolean): void;
}
export class WindowAccessible  {
    constructor(config?: properties);
    readonly priv: WindowAccessiblePrivate;
}
export class WindowGroup extends GObject.Object {
    constructor(config?: properties);
    add_window(window: Window): void;
    get_current_device_grab(device: Gdk.Device): Widget | null;
    get_current_grab(): Widget;
    list_windows(): GLib.List;
    remove_window(window: Window): void;
}
export class AboutDialogPrivate  {
    constructor(config?: properties);
}
export class AccelGroupEntry  {
    constructor(config?: properties);
    key: AccelKey;
    closure: GObject.Closure;
    accel_path_quark: GLib.Quark;
}
export class AccelGroupPrivate  {
    constructor(config?: properties);
}
export class AccelKey  {
    constructor(config?: properties);
    accel_key: number;
    accel_mods: Gdk.ModifierType;
    accel_flags: number;
}
export class AccelLabelPrivate  {
    constructor(config?: properties);
}
export class AccessiblePrivate  {
    constructor(config?: properties);
}
export class ActionBarPrivate  {
    constructor(config?: properties);
}
export class ActionEntry  {
    constructor(config?: properties);
    name: string;
    stock_id: string;
    label: string;
    accelerator: string;
    tooltip: string;
    callback: GObject.Callback;
}
export class ActionGroupPrivate  {
    constructor(config?: properties);
}
export class ActionPrivate  {
    constructor(config?: properties);
}
export class AdjustmentPrivate  {
    constructor(config?: properties);
}
export class AlignmentPrivate  {
    constructor(config?: properties);
}
export class AppChooserButtonPrivate  {
    constructor(config?: properties);
}
export class AppChooserDialogPrivate  {
    constructor(config?: properties);
}
export class AppChooserWidgetPrivate  {
    constructor(config?: properties);
}
export class ApplicationPrivate  {
    constructor(config?: properties);
}
export class ApplicationWindowPrivate  {
    constructor(config?: properties);
}
export class ArrowAccessiblePrivate  {
    constructor(config?: properties);
}
export class ArrowPrivate  {
    constructor(config?: properties);
}
export class AspectFramePrivate  {
    constructor(config?: properties);
}
export class AssistantPrivate  {
    constructor(config?: properties);
}
export class BinPrivate  {
    constructor(config?: properties);
}
export class BindingArg  {
    constructor(config?: properties);
    arg_type: GType;
}
export class BindingEntry  {
    constructor(config?: properties);
    keyval: number;
    modifiers: Gdk.ModifierType;
    binding_set: BindingSet;
    destroyed: number;
    in_emission: number;
    marks_unbound: number;
    set_next: BindingEntry;
    hash_next: BindingEntry;
    signals: BindingSignal;
    static add_signal_from_string(binding_set: BindingSet, signal_desc: string): GLib.TokenType;
    static add_signall(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType, signal_name: string, binding_args: string[]): void;
    static remove(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
    static skip(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
}
export class BindingSet  {
    constructor(config?: properties);
    set_name: string;
    priority: number;
    widget_path_pspecs: string[];
    widget_class_pspecs: string[];
    class_branch_pspecs: string[];
    entries: BindingEntry;
    current: BindingEntry;
    parsed: number;
    activate(keyval: number, modifiers: Gdk.ModifierType, object: GObject.Object): boolean;
    add_path(path_type: PathType, path_pattern: string, priority: PathPriorityType): void;
    static find(set_name: string): BindingSet | null;
}
export class BindingSignal  {
    constructor(config?: properties);
    next: BindingSignal;
    signal_name: string;
    n_args: number;
    args: BindingArg[];
}
export class BooleanCellAccessiblePrivate  {
    constructor(config?: properties);
}
export class Border  {
    constructor(config?: properties);
    copy(): Border;
    free(): void;
}
export class BoxPrivate  {
    constructor(config?: properties);
}
export class BuilderPrivate  {
    constructor(config?: properties);
}
export class ButtonAccessiblePrivate  {
    constructor(config?: properties);
}
export class ButtonBoxPrivate  {
    constructor(config?: properties);
}
export class ButtonPrivate  {
    constructor(config?: properties);
}
export class CalendarPrivate  {
    constructor(config?: properties);
}
export class CellAccessiblePrivate  {
    constructor(config?: properties);
}
export class CellAreaBoxPrivate  {
    constructor(config?: properties);
}
export class CellAreaContextPrivate  {
    constructor(config?: properties);
}
export class CellAreaPrivate  {
    constructor(config?: properties);
}
export class CellRendererAccelPrivate  {
    constructor(config?: properties);
}
export class CellRendererClassPrivate  {
    constructor(config?: properties);
}
export class CellRendererComboPrivate  {
    constructor(config?: properties);
}
export class CellRendererPixbufPrivate  {
    constructor(config?: properties);
}
export class CellRendererPrivate  {
    constructor(config?: properties);
}
export class CellRendererProgressPrivate  {
    constructor(config?: properties);
}
export class CellRendererSpinPrivate  {
    constructor(config?: properties);
}
export class CellRendererSpinnerPrivate  {
    constructor(config?: properties);
}
export class CellRendererTextPrivate  {
    constructor(config?: properties);
}
export class CellRendererTogglePrivate  {
    constructor(config?: properties);
}
export class CellViewPrivate  {
    constructor(config?: properties);
}
export class CheckMenuItemAccessiblePrivate  {
    constructor(config?: properties);
}
export class CheckMenuItemPrivate  {
    constructor(config?: properties);
}
export class ColorButtonPrivate  {
    constructor(config?: properties);
}
export class ColorChooserDialogPrivate  {
    constructor(config?: properties);
}
export class ColorChooserWidgetPrivate  {
    constructor(config?: properties);
}
export class ColorSelectionDialogPrivate  {
    constructor(config?: properties);
}
export class ColorSelectionPrivate  {
    constructor(config?: properties);
}
export class ComboBoxAccessiblePrivate  {
    constructor(config?: properties);
}
export class ComboBoxPrivate  {
    constructor(config?: properties);
}
export class ComboBoxTextPrivate  {
    constructor(config?: properties);
}
export class ContainerAccessiblePrivate  {
    constructor(config?: properties);
}
export class ContainerCellAccessiblePrivate  {
    constructor(config?: properties);
}
export class ContainerPrivate  {
    constructor(config?: properties);
}
export class CssProviderPrivate  {
    constructor(config?: properties);
}
export class CssSection  {
    constructor(config?: properties);
    get_end_line(): number;
    get_end_position(): number;
    get_file(): Gio.File;
    get_parent(): CssSection | null;
    get_section_type(): CssSectionType;
    get_start_line(): number;
    get_start_position(): number;
    ref(): CssSection;
    unref(): void;
}
export class DialogPrivate  {
    constructor(config?: properties);
}
export class EntryAccessiblePrivate  {
    constructor(config?: properties);
}
export class EntryBufferPrivate  {
    constructor(config?: properties);
}
export class EntryCompletionPrivate  {
    constructor(config?: properties);
}
export class EntryPrivate  {
    constructor(config?: properties);
}
export class EventBoxPrivate  {
    constructor(config?: properties);
}
export class ExpanderAccessiblePrivate  {
    constructor(config?: properties);
}
export class ExpanderPrivate  {
    constructor(config?: properties);
}
export class FileChooserButtonPrivate  {
    constructor(config?: properties);
}
export class FileChooserDialogPrivate  {
    constructor(config?: properties);
}
export class FileChooserWidgetPrivate  {
    constructor(config?: properties);
}
export class FileFilterInfo  {
    constructor(config?: properties);
    contains: FileFilterFlags;
    filename: string;
    uri: string;
    display_name: string;
    mime_type: string;
}
export class FixedChild  {
    constructor(config?: properties);
    widget: Widget;
    x: number;
    y: number;
}
export class FixedPrivate  {
    constructor(config?: properties);
}
export class FlowBoxAccessiblePrivate  {
    constructor(config?: properties);
}
export class FontButtonPrivate  {
    constructor(config?: properties);
}
export class FontChooserDialogPrivate  {
    constructor(config?: properties);
}
export class FontChooserWidgetPrivate  {
    constructor(config?: properties);
}
export class FontSelectionDialogPrivate  {
    constructor(config?: properties);
}
export class FontSelectionPrivate  {
    constructor(config?: properties);
}
export class FrameAccessiblePrivate  {
    constructor(config?: properties);
}
export class FramePrivate  {
    constructor(config?: properties);
}
export class Gradient  {
    constructor(config?: properties);
    static new_linear(x0: number, y0: number, x1: number, y1: number): Gradient;
    static new_radial(x0: number, y0: number, radius0: number, x1: number, y1: number, radius1: number): Gradient;
    add_color_stop(offset: number, color: SymbolicColor): void;
    ref(): Gradient;
    resolve(props: StyleProperties): [boolean, cairo.Pattern];
    resolve_for_context(context: StyleContext): cairo.Pattern;
    to_string(): string;
    unref(): void;
}
export class GridPrivate  {
    constructor(config?: properties);
}
export class HSVPrivate  {
    constructor(config?: properties);
}
export class HandleBoxPrivate  {
    constructor(config?: properties);
}
export class HeaderBarAccessiblePrivate  {
    constructor(config?: properties);
}
export class HeaderBarPrivate  {
    constructor(config?: properties);
}
export class IMContextInfo  {
    constructor(config?: properties);
    context_id: string;
    context_name: string;
    domain: string;
    domain_dirname: string;
    default_locales: string;
}
export class IMContextSimplePrivate  {
    constructor(config?: properties);
}
export class IMMulticontextPrivate  {
    constructor(config?: properties);
}
export class IconFactoryPrivate  {
    constructor(config?: properties);
}
export class IconSet  {
    constructor(config?: properties);
    static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): IconSet;
    add_source(source: IconSource): void;
    copy(): IconSet;
    get_sizes(): [number[],number];
    ref(): IconSet;
    render_icon(style: Style | null, direction: TextDirection, state: StateType, size: number, widget: Widget | null, detail: string | null): GdkPixbuf.Pixbuf;
    render_icon_pixbuf(context: StyleContext, size: number): GdkPixbuf.Pixbuf;
    render_icon_surface(context: StyleContext, size: number, scale: number, for_window: Gdk.Window | null): cairo.Surface;
    unref(): void;
}
export class IconSource  {
    constructor(config?: properties);
    copy(): IconSource;
    free(): void;
    get_direction(): TextDirection;
    get_direction_wildcarded(): boolean;
    get_filename(): string;
    get_icon_name(): string;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_size(): number;
    get_size_wildcarded(): boolean;
    get_state(): StateType;
    get_state_wildcarded(): boolean;
    set_direction(direction: TextDirection): void;
    set_direction_wildcarded(setting: boolean): void;
    set_filename(filename: string): void;
    set_icon_name(icon_name: string | null): void;
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    set_size(size: number): void;
    set_size_wildcarded(setting: boolean): void;
    set_state(state: StateType): void;
    set_state_wildcarded(setting: boolean): void;
}
export class IconThemePrivate  {
    constructor(config?: properties);
}
export class IconViewAccessiblePrivate  {
    constructor(config?: properties);
}
export class IconViewPrivate  {
    constructor(config?: properties);
}
export class ImageAccessiblePrivate  {
    constructor(config?: properties);
}
export class ImageCellAccessiblePrivate  {
    constructor(config?: properties);
}
export class ImageMenuItemPrivate  {
    constructor(config?: properties);
}
export class ImagePrivate  {
    constructor(config?: properties);
}
export class InfoBarPrivate  {
    constructor(config?: properties);
}
export class InvisiblePrivate  {
    constructor(config?: properties);
}
export class LabelAccessiblePrivate  {
    constructor(config?: properties);
}
export class LabelPrivate  {
    constructor(config?: properties);
}
export class LabelSelectionInfo  {
    constructor(config?: properties);
}
export class LayoutPrivate  {
    constructor(config?: properties);
}
export class LevelBarAccessiblePrivate  {
    constructor(config?: properties);
}
export class LevelBarPrivate  {
    constructor(config?: properties);
}
export class LinkButtonAccessiblePrivate  {
    constructor(config?: properties);
}
export class LinkButtonPrivate  {
    constructor(config?: properties);
}
export class ListBoxAccessiblePrivate  {
    constructor(config?: properties);
}
export class ListStorePrivate  {
    constructor(config?: properties);
}
export class LockButtonAccessiblePrivate  {
    constructor(config?: properties);
}
export class LockButtonPrivate  {
    constructor(config?: properties);
}
export class MenuAccessiblePrivate  {
    constructor(config?: properties);
}
export class MenuBarPrivate  {
    constructor(config?: properties);
}
export class MenuButtonAccessiblePrivate  {
    constructor(config?: properties);
}
export class MenuButtonPrivate  {
    constructor(config?: properties);
}
export class MenuItemAccessiblePrivate  {
    constructor(config?: properties);
}
export class MenuItemPrivate  {
    constructor(config?: properties);
}
export class MenuPrivate  {
    constructor(config?: properties);
}
export class MenuShellAccessiblePrivate  {
    constructor(config?: properties);
}
export class MenuShellPrivate  {
    constructor(config?: properties);
}
export class MenuToolButtonPrivate  {
    constructor(config?: properties);
}
export class MessageDialogPrivate  {
    constructor(config?: properties);
}
export class MiscPrivate  {
    constructor(config?: properties);
}
export class MountOperationPrivate  {
    constructor(config?: properties);
}
export class NotebookAccessiblePrivate  {
    constructor(config?: properties);
}
export class NotebookPageAccessiblePrivate  {
    constructor(config?: properties);
}
export class NotebookPrivate  {
    constructor(config?: properties);
}
export class NumerableIconPrivate  {
    constructor(config?: properties);
}
export class OverlayPrivate  {
    constructor(config?: properties);
}
export class PadActionEntry  {
    constructor(config?: properties);
    type: PadActionType;
    index: number;
    mode: number;
    label: string;
    action_name: string;
}
export class PageRange  {
    constructor(config?: properties);
    start: number;
    end: number;
}
export class PanedAccessiblePrivate  {
    constructor(config?: properties);
}
export class PanedPrivate  {
    constructor(config?: properties);
}
export class PaperSize  {
    constructor(config?: properties);
    static new_custom(name: string, display_name: string, width: number, height: number, unit: Unit): PaperSize;
    static new_from_gvariant(variant: GLib.Variant): PaperSize;
    static new_from_ipp(ipp_name: string, width: number, height: number): PaperSize;
    static new_from_key_file(key_file: GLib.KeyFile, group_name: string | null): PaperSize;
    static new_from_ppd(ppd_name: string, ppd_display_name: string, width: number, height: number): PaperSize;
    copy(): PaperSize;
    free(): void;
    get_default_bottom_margin(unit: Unit): number;
    get_default_left_margin(unit: Unit): number;
    get_default_right_margin(unit: Unit): number;
    get_default_top_margin(unit: Unit): number;
    get_display_name(): string;
    get_height(unit: Unit): number;
    get_name(): string;
    get_ppd_name(): string;
    get_width(unit: Unit): number;
    is_custom(): boolean;
    is_equal(size2: PaperSize): boolean;
    is_ipp(): boolean;
    set_size(width: number, height: number, unit: Unit): void;
    to_gvariant(): GLib.Variant;
    to_key_file(key_file: GLib.KeyFile, group_name: string): void;
    static get_default(): string;
    static get_paper_sizes(include_custom: boolean): GLib.List;
}
export class PlugPrivate  {
    constructor(config?: properties);
}
export class PopoverPrivate  {
    constructor(config?: properties);
}
export class PrintOperationPrivate  {
    constructor(config?: properties);
}
export class ProgressBarAccessiblePrivate  {
    constructor(config?: properties);
}
export class ProgressBarPrivate  {
    constructor(config?: properties);
}
export class RadioActionEntry  {
    constructor(config?: properties);
    name: string;
    stock_id: string;
    label: string;
    accelerator: string;
    tooltip: string;
    value: number;
}
export class RadioActionPrivate  {
    constructor(config?: properties);
}
export class RadioButtonAccessiblePrivate  {
    constructor(config?: properties);
}
export class RadioButtonPrivate  {
    constructor(config?: properties);
}
export class RadioMenuItemAccessiblePrivate  {
    constructor(config?: properties);
}
export class RadioMenuItemPrivate  {
    constructor(config?: properties);
}
export class RangeAccessiblePrivate  {
    constructor(config?: properties);
}
export class RangePrivate  {
    constructor(config?: properties);
}
export class RcContext  {
    constructor(config?: properties);
}
export class RcProperty  {
    constructor(config?: properties);
    type_name: GLib.Quark;
    property_name: GLib.Quark;
    origin: string;
    value: GObject.Value;
    static parse_border(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
    static parse_color(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
    static parse_enum(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
    static parse_flags(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
    static parse_requisition(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
}
export class RecentActionPrivate  {
    constructor(config?: properties);
}
export class RecentChooserDialogPrivate  {
    constructor(config?: properties);
}
export class RecentChooserMenuPrivate  {
    constructor(config?: properties);
}
export class RecentChooserWidgetPrivate  {
    constructor(config?: properties);
}
export class RecentData  {
    constructor(config?: properties);
    display_name: string;
    description: string;
    mime_type: string;
    app_name: string;
    app_exec: string;
    groups: string[];
    is_private: boolean;
}
export class RecentFilterInfo  {
    constructor(config?: properties);
    contains: RecentFilterFlags;
    uri: string;
    display_name: string;
    mime_type: string;
    applications: string[];
    groups: string[];
    age: number;
}
export class RecentInfo  {
    constructor(config?: properties);
    create_app_info(app_name: string | null): Gio.AppInfo | null;
    exists(): boolean;
    get_added(): number;
    get_age(): number;
    get_application_info(app_name: string): [boolean, string,number,number];
    get_applications(): [string[], number | null];
    get_description(): string;
    get_display_name(): string;
    get_gicon(): Gio.Icon | null;
    get_groups(): [string[], number | null];
    get_icon(size: number): GdkPixbuf.Pixbuf | null;
    get_mime_type(): string;
    get_modified(): number;
    get_private_hint(): boolean;
    get_short_name(): string;
    get_uri(): string;
    get_uri_display(): string | null;
    get_visited(): number;
    has_application(app_name: string): boolean;
    has_group(group_name: string): boolean;
    is_local(): boolean;
    last_application(): string;
    match(info_b: RecentInfo): boolean;
    ref(): RecentInfo;
    unref(): void;
}
export class RecentManagerPrivate  {
    constructor(config?: properties);
}
export class RendererCellAccessiblePrivate  {
    constructor(config?: properties);
}
export class RequestedSize  {
    constructor(config?: properties);
    data: object;
    minimum_size: number;
    natural_size: number;
}
export class Requisition  {
    constructor(config?: properties);
    copy(): Requisition;
    free(): void;
}
export class ScaleAccessiblePrivate  {
    constructor(config?: properties);
}
export class ScaleButtonAccessiblePrivate  {
    constructor(config?: properties);
}
export class ScaleButtonPrivate  {
    constructor(config?: properties);
}
export class ScalePrivate  {
    constructor(config?: properties);
}
export class ScrolledWindowAccessiblePrivate  {
    constructor(config?: properties);
}
export class ScrolledWindowPrivate  {
    constructor(config?: properties);
}
export class SelectionData  {
    constructor(config?: properties);
    copy(): SelectionData;
    free(): void;
    get_data_type(): Gdk.Atom;
    get_data_with_length(): [number[], number];
    get_display(): Gdk.Display;
    get_format(): number;
    get_length(): number;
    get_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_selection(): Gdk.Atom;
    get_target(): Gdk.Atom;
    get_targets(): [boolean, Gdk.Atom[],number];
    get_text(): string | null;
    get_uris(): string[];
    set(type: Gdk.Atom, format: number, data: number[], length: number): void;
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): boolean;
    set_text(str: string, len: number): boolean;
    set_uris(uris: string[]): boolean;
    targets_include_image(writable: boolean): boolean;
    targets_include_rich_text(buffer: TextBuffer): boolean;
    targets_include_text(): boolean;
    targets_include_uri(): boolean;
}
export class SeparatorPrivate  {
    constructor(config?: properties);
}
export class SeparatorToolItemPrivate  {
    constructor(config?: properties);
}
export class SettingsPrivate  {
    constructor(config?: properties);
}
export class SettingsValue  {
    constructor(config?: properties);
    origin: string;
    value: GObject.Value;
}
export class SizeGroupPrivate  {
    constructor(config?: properties);
}
export class SocketPrivate  {
    constructor(config?: properties);
}
export class SpinButtonAccessiblePrivate  {
    constructor(config?: properties);
}
export class SpinButtonPrivate  {
    constructor(config?: properties);
}
export class SpinnerAccessiblePrivate  {
    constructor(config?: properties);
}
export class SpinnerPrivate  {
    constructor(config?: properties);
}
export class StackSidebarPrivate  {
    constructor(config?: properties);
}
export class StatusIconPrivate  {
    constructor(config?: properties);
}
export class StatusbarAccessiblePrivate  {
    constructor(config?: properties);
}
export class StatusbarPrivate  {
    constructor(config?: properties);
}
export class StockItem  {
    constructor(config?: properties);
    stock_id: string;
    label: string;
    modifier: Gdk.ModifierType;
    keyval: number;
    translation_domain: string;
    free(): void;
}
export class StyleContextPrivate  {
    constructor(config?: properties);
}
export class StylePropertiesPrivate  {
    constructor(config?: properties);
}
export class SwitchAccessiblePrivate  {
    constructor(config?: properties);
}
export class SwitchPrivate  {
    constructor(config?: properties);
}
export class SymbolicColor  {
    constructor(config?: properties);
    static new_alpha(color: SymbolicColor, factor: number): SymbolicColor;
    static new_literal(color: Gdk.RGBA): SymbolicColor;
    static new_mix(color1: SymbolicColor, color2: SymbolicColor, factor: number): SymbolicColor;
    static new_name(name: string): SymbolicColor;
    static new_shade(color: SymbolicColor, factor: number): SymbolicColor;
    static new_win32(theme_class: string, id: number): SymbolicColor;
    ref(): SymbolicColor;
    resolve(props: StyleProperties | null): [boolean, Gdk.RGBA];
    to_string(): string;
    unref(): void;
}
export class TableChild  {
    constructor(config?: properties);
    widget: Widget;
    left_attach: number;
    right_attach: number;
    top_attach: number;
    bottom_attach: number;
    xpadding: number;
    ypadding: number;
    xexpand: number;
    yexpand: number;
    xshrink: number;
    yshrink: number;
    xfill: number;
    yfill: number;
}
export class TablePrivate  {
    constructor(config?: properties);
}
export class TableRowCol  {
    constructor(config?: properties);
    requisition: number;
    allocation: number;
    spacing: number;
    need_expand: number;
    need_shrink: number;
    expand: number;
    shrink: number;
    empty: number;
}
export class TargetEntry  {
    constructor(config?: properties);
    copy(): TargetEntry;
    free(): void;
}
export class TargetList  {
    constructor(config?: properties);
    add(target: Gdk.Atom, flags: number, info: number): void;
    add_image_targets(info: number, writable: boolean): void;
    add_rich_text_targets(info: number, deserializable: boolean, buffer: TextBuffer): void;
    add_table(targets: TargetEntry[], ntargets: number): void;
    add_text_targets(info: number): void;
    add_uri_targets(info: number): void;
    find(target: Gdk.Atom): [boolean, number | null];
    ref(): TargetList;
    remove(target: Gdk.Atom): void;
    unref(): void;
}
export class TargetPair  {
    constructor(config?: properties);
    target: Gdk.Atom;
    flags: number;
    info: number;
}
export class TearoffMenuItemPrivate  {
    constructor(config?: properties);
}
export class TextAppearance  {
    constructor(config?: properties);
    bg_color: Gdk.Color;
    fg_color: Gdk.Color;
    rise: number;
    underline: number;
    strikethrough: number;
    draw_bg: number;
    inside_selection: number;
    is_text: number;
}
export class TextAttributes  {
    constructor(config?: properties);
    copy(): TextAttributes;
    copy_values(dest: TextAttributes): void;
    ref(): TextAttributes;
    unref(): void;
}
export class TextBTree  {
    constructor(config?: properties);
}
export class TextBufferPrivate  {
    constructor(config?: properties);
}
export class TextCellAccessiblePrivate  {
    constructor(config?: properties);
}
export class TextIter  {
    constructor(config?: properties);
    readonly dummy1: object;
    readonly dummy2: object;
    readonly dummy3: number;
    readonly dummy4: number;
    readonly dummy5: number;
    readonly dummy6: number;
    readonly dummy7: number;
    readonly dummy8: number;
    readonly dummy9: object;
    readonly dummy10: object;
    readonly dummy11: number;
    readonly dummy12: number;
    readonly dummy13: number;
    readonly dummy14: object;
    assign(other: TextIter): void;
    backward_char(): boolean;
    backward_chars(count: number): boolean;
    backward_cursor_position(): boolean;
    backward_cursor_positions(count: number): boolean;
    backward_find_char(pred: TextCharPredicate, user_data: object | null, limit: TextIter | null): boolean;
    backward_line(): boolean;
    backward_lines(count: number): boolean;
    backward_search(str: string, flags: TextSearchFlags, limit: TextIter | null): [boolean, TextIter | null,TextIter | null];
    backward_sentence_start(): boolean;
    backward_sentence_starts(count: number): boolean;
    backward_to_tag_toggle(tag: TextTag | null): boolean;
    backward_visible_cursor_position(): boolean;
    backward_visible_cursor_positions(count: number): boolean;
    backward_visible_line(): boolean;
    backward_visible_lines(count: number): boolean;
    backward_visible_word_start(): boolean;
    backward_visible_word_starts(count: number): boolean;
    backward_word_start(): boolean;
    backward_word_starts(count: number): boolean;
    begins_tag(tag: TextTag | null): boolean;
    can_insert(default_editability: boolean): boolean;
    compare(rhs: TextIter): number;
    copy(): TextIter;
    editable(default_setting: boolean): boolean;
    ends_line(): boolean;
    ends_sentence(): boolean;
    ends_tag(tag: TextTag | null): boolean;
    ends_word(): boolean;
    equal(rhs: TextIter): boolean;
    forward_char(): boolean;
    forward_chars(count: number): boolean;
    forward_cursor_position(): boolean;
    forward_cursor_positions(count: number): boolean;
    forward_find_char(pred: TextCharPredicate, user_data: object | null, limit: TextIter | null): boolean;
    forward_line(): boolean;
    forward_lines(count: number): boolean;
    forward_search(str: string, flags: TextSearchFlags, limit: TextIter | null): [boolean, TextIter | null,TextIter | null];
    forward_sentence_end(): boolean;
    forward_sentence_ends(count: number): boolean;
    forward_to_end(): void;
    forward_to_line_end(): boolean;
    forward_to_tag_toggle(tag: TextTag | null): boolean;
    forward_visible_cursor_position(): boolean;
    forward_visible_cursor_positions(count: number): boolean;
    forward_visible_line(): boolean;
    forward_visible_lines(count: number): boolean;
    forward_visible_word_end(): boolean;
    forward_visible_word_ends(count: number): boolean;
    forward_word_end(): boolean;
    forward_word_ends(count: number): boolean;
    free(): void;
    get_attributes(): [boolean, TextAttributes];
    get_buffer(): TextBuffer;
    get_bytes_in_line(): number;
    get_char(): number;
    get_chars_in_line(): number;
    get_child_anchor(): TextChildAnchor;
    get_language(): Pango.Language;
    get_line(): number;
    get_line_index(): number;
    get_line_offset(): number;
    get_marks(): string[];
    get_offset(): number;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_slice(end: TextIter): string;
    get_tags(): string[];
    get_text(end: TextIter): string;
    get_toggled_tags(toggled_on: boolean): string[];
    get_visible_line_index(): number;
    get_visible_line_offset(): number;
    get_visible_slice(end: TextIter): string;
    get_visible_text(end: TextIter): string;
    has_tag(tag: TextTag): boolean;
    in_range(start: TextIter, end: TextIter): boolean;
    inside_sentence(): boolean;
    inside_word(): boolean;
    is_cursor_position(): boolean;
    is_end(): boolean;
    is_start(): boolean;
    order(second: TextIter): void;
    set_line(line_number: number): void;
    set_line_index(byte_on_line: number): void;
    set_line_offset(char_on_line: number): void;
    set_offset(char_offset: number): void;
    set_visible_line_index(byte_on_line: number): void;
    set_visible_line_offset(char_on_line: number): void;
    starts_line(): boolean;
    starts_sentence(): boolean;
    starts_tag(tag: TextTag | null): boolean;
    starts_word(): boolean;
    toggles_tag(tag: TextTag | null): boolean;
}
export class TextTagPrivate  {
    constructor(config?: properties);
}
export class TextTagTablePrivate  {
    constructor(config?: properties);
}
export class TextViewAccessiblePrivate  {
    constructor(config?: properties);
}
export class TextViewPrivate  {
    constructor(config?: properties);
}
export class ThemeEngine  {
    constructor(config?: properties);
}
export class ThemingEnginePrivate  {
    constructor(config?: properties);
}
export class ToggleActionEntry  {
    constructor(config?: properties);
    name: string;
    stock_id: string;
    label: string;
    accelerator: string;
    tooltip: string;
    callback: GObject.Callback;
    is_active: boolean;
}
export class ToggleActionPrivate  {
    constructor(config?: properties);
}
export class ToggleButtonAccessiblePrivate  {
    constructor(config?: properties);
}
export class ToggleButtonPrivate  {
    constructor(config?: properties);
}
export class ToggleToolButtonPrivate  {
    constructor(config?: properties);
}
export class ToolButtonPrivate  {
    constructor(config?: properties);
}
export class ToolItemGroupPrivate  {
    constructor(config?: properties);
}
export class ToolItemPrivate  {
    constructor(config?: properties);
}
export class ToolPalettePrivate  {
    constructor(config?: properties);
}
export class ToolbarPrivate  {
    constructor(config?: properties);
}
export class ToplevelAccessiblePrivate  {
    constructor(config?: properties);
}
export class TreeIter  {
    constructor(config?: properties);
    stamp: number;
    user_data: object;
    user_data2: object;
    user_data3: object;
    copy(): TreeIter;
    free(): void;
}
export class TreeModelFilterPrivate  {
    constructor(config?: properties);
}
export class TreeModelSortPrivate  {
    constructor(config?: properties);
}
export class TreePath  {
    constructor(config?: properties);
    static new_first(): TreePath;
    static new_from_indicesv(indices: number[], length: number): TreePath;
    static new_from_string(path: string): TreePath;
    append_index(index_: number): void;
    compare(b: TreePath): number;
    copy(): TreePath;
    down(): void;
    free(): void;
    get_depth(): number;
    get_indices_with_depth(): [number[], number | null];
    is_ancestor(descendant: TreePath): boolean;
    is_descendant(ancestor: TreePath): boolean;
    next(): void;
    prepend_index(index_: number): void;
    prev(): boolean;
    to_string(): string;
    up(): boolean;
}
export class TreeRowReference  {
    constructor(config?: properties);
    static new_proxy(proxy: GObject.Object, model: TreeModel, path: TreePath): TreeRowReference;
    copy(): TreeRowReference;
    free(): void;
    get_model(): TreeModel;
    get_path(): TreePath | null;
    valid(): boolean;
    static deleted(proxy: GObject.Object, path: TreePath): void;
    static inserted(proxy: GObject.Object, path: TreePath): void;
}
export class TreeSelectionPrivate  {
    constructor(config?: properties);
}
export class TreeStorePrivate  {
    constructor(config?: properties);
}
export class TreeViewAccessiblePrivate  {
    constructor(config?: properties);
}
export class TreeViewColumnPrivate  {
    constructor(config?: properties);
}
export class TreeViewPrivate  {
    constructor(config?: properties);
}
export class UIManagerPrivate  {
    constructor(config?: properties);
}
export class ViewportPrivate  {
    constructor(config?: properties);
}
export class WidgetAccessiblePrivate  {
    constructor(config?: properties);
}
export class WidgetClassPrivate  {
    constructor(config?: properties);
}
export class WidgetPath  {
    constructor(config?: properties);
    append_for_widget(widget: Widget): number;
    append_type(type: GType): number;
    append_with_siblings(siblings: WidgetPath, sibling_index: number): number;
    copy(): WidgetPath;
    free(): void;
    get_object_type(): GType;
    has_parent(type: GType): boolean;
    is_type(type: GType): boolean;
    iter_add_class(pos: number, name: string): void;
    iter_add_region(pos: number, name: string, flags: RegionFlags): void;
    iter_clear_classes(pos: number): void;
    iter_clear_regions(pos: number): void;
    iter_get_name(pos: number): string | null;
    iter_get_object_name(pos: number): string | null;
    iter_get_object_type(pos: number): GType;
    iter_get_sibling_index(pos: number): number;
    iter_get_siblings(pos: number): WidgetPath;
    iter_get_state(pos: number): StateFlags;
    iter_has_class(pos: number, name: string): boolean;
    iter_has_name(pos: number, name: string): boolean;
    iter_has_qclass(pos: number, qname: GLib.Quark): boolean;
    iter_has_qname(pos: number, qname: GLib.Quark): boolean;
    iter_has_qregion(pos: number, qname: GLib.Quark): [boolean, RegionFlags];
    iter_has_region(pos: number, name: string): [boolean, RegionFlags];
    iter_list_classes(pos: number): string[];
    iter_list_regions(pos: number): string[];
    iter_remove_class(pos: number, name: string): void;
    iter_remove_region(pos: number, name: string): void;
    iter_set_name(pos: number, name: string): void;
    iter_set_object_name(pos: number, name: string | null): void;
    iter_set_object_type(pos: number, type: GType): void;
    iter_set_state(pos: number, state: StateFlags): void;
    length(): number;
    prepend_type(type: GType): void;
    ref(): WidgetPath;
    to_string(): string;
    unref(): void;
}
export class WidgetPrivate  {
    constructor(config?: properties);
}
export class WindowAccessiblePrivate  {
    constructor(config?: properties);
}
export class WindowGeometryInfo  {
    constructor(config?: properties);
}
export class WindowGroupPrivate  {
    constructor(config?: properties);
}
export class WindowPrivate  {
    constructor(config?: properties);
}
export interface Actionable  {
    action_name: string;
    action_target: GLib.Variant;
    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name: string | null): void;
    set_action_target_value(target_value: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
}
export interface Activatable  {
    related_action: Action;
    use_action_appearance: boolean;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action: Action | null): void;
}
export interface AppChooser  {
    content_type: string;
    get_app_info(): Gio.AppInfo | null;
    get_content_type(): string;
    refresh(): void;
}
export interface Buildable  {
    add_child(builder: Builder, child: GObject.Object, type: string | null): void;
    construct_child(builder: Builder, name: string): GObject.Object;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data: object | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data: object | null): void;
    custom_tag_start(builder: Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser,object | null];
    get_internal_child(builder: Builder, childname: string): GObject.Object;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value): void;
    set_name(name: string): void;
}
export interface CellAccessibleParent  {
    activate(cell: CellAccessible): void;
    edit(cell: CellAccessible): void;
    expand_collapse(cell: CellAccessible): void;
    get_cell_area(cell: CellAccessible): [Gdk.Rectangle];
    get_cell_extents(cell: CellAccessible, coord_type: Atk.CoordType): [number,number,number,number];
    get_cell_position(cell: CellAccessible): [number,number];
    get_child_index(cell: CellAccessible): number;
    get_column_header_cells(cell: CellAccessible): Atk.Object[];
    get_renderer_state(cell: CellAccessible): CellRendererState;
    get_row_header_cells(cell: CellAccessible): Atk.Object[];
    grab_focus(cell: CellAccessible): boolean;
    update_relationset(cell: CellAccessible, relationset: Atk.RelationSet): void;
}
export interface CellEditable  {
    editing_canceled: boolean;
    editing_done(): void;
    remove_widget(): void;
    start_editing(event: Gdk.Event | null): void;
}
export interface CellLayout  {
    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): GLib.List;
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func: CellLayoutDataFunc | null, func_data: object | null, destroy: GLib.DestroyNotify): void;
}
export interface ColorChooser  {
    rgba: Gdk.RGBA;
    use_alpha: boolean;
    add_palette(orientation: Orientation, colors_per_line: number, n_colors: number, colors: Gdk.RGBA[] | null): void;
    get_rgba(): [Gdk.RGBA];
    get_use_alpha(): boolean;
    set_rgba(color: Gdk.RGBA): void;
    set_use_alpha(use_alpha: boolean): void;
}
export interface Editable  {
    copy_clipboard(): void;
    cut_clipboard(): void;
    delete_selection(): void;
    delete_text(start_pos: number, end_pos: number): void;
    get_chars(start_pos: number, end_pos: number): string;
    get_editable(): boolean;
    get_position(): number;
    get_selection_bounds(): [boolean, number | null,number | null];
    insert_text(new_text: string, new_text_length: number, position: number): [number];
    paste_clipboard(): void;
    select_region(start_pos: number, end_pos: number): void;
    set_editable(is_editable: boolean): void;
    set_position(position: number): void;
}
export interface FileChooser  {
    action: FileChooserAction;
    create_folders: boolean;
    do_overwrite_confirmation: boolean;
    extra_widget: Widget;
    filter: FileFilter;
    local_only: boolean;
    preview_widget: Widget;
    preview_widget_active: boolean;
    select_multiple: boolean;
    show_hidden: boolean;
    use_preview_label: boolean;
    add_choice(id: string, label: string, options: string[] | null, option_labels: string[] | null): void;
    add_filter(filter: FileFilter): void;
    add_shortcut_folder(folder: string): boolean;
    add_shortcut_folder_uri(uri: string): boolean;
    get_action(): FileChooserAction;
    get_choice(id: string): string;
    get_create_folders(): boolean;
    get_current_folder(): string | null;
    get_current_folder_file(): Gio.File;
    get_current_folder_uri(): string | null;
    get_current_name(): string;
    get_do_overwrite_confirmation(): boolean;
    get_extra_widget(): Widget | null;
    get_file(): Gio.File;
    get_filename(): string | null;
    get_filenames(): string[];
    get_files(): string[];
    get_filter(): FileFilter | null;
    get_local_only(): boolean;
    get_preview_file(): Gio.File | null;
    get_preview_filename(): string | null;
    get_preview_uri(): string | null;
    get_preview_widget(): Widget | null;
    get_preview_widget_active(): boolean;
    get_select_multiple(): boolean;
    get_show_hidden(): boolean;
    get_uri(): string | null;
    get_uris(): string[];
    get_use_preview_label(): boolean;
    list_filters(): string[];
    list_shortcut_folder_uris(): string[];
    list_shortcut_folders(): string[];
    remove_choice(id: string): void;
    remove_filter(filter: FileFilter): void;
    remove_shortcut_folder(folder: string): boolean;
    remove_shortcut_folder_uri(uri: string): boolean;
    select_all(): void;
    select_file(file: Gio.File): boolean;
    select_filename(filename: string): boolean;
    select_uri(uri: string): boolean;
    set_action(action: FileChooserAction): void;
    set_choice(id: string, option: string): void;
    set_create_folders(create_folders: boolean): void;
    set_current_folder(filename: string): boolean;
    set_current_folder_file(file: Gio.File): boolean;
    set_current_folder_uri(uri: string): boolean;
    set_current_name(name: string): void;
    set_do_overwrite_confirmation(do_overwrite_confirmation: boolean): void;
    set_extra_widget(extra_widget: Widget): void;
    set_file(file: Gio.File): boolean;
    set_filename(filename: string): boolean;
    set_filter(filter: FileFilter): void;
    set_local_only(local_only: boolean): void;
    set_preview_widget(preview_widget: Widget): void;
    set_preview_widget_active(active: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_hidden(show_hidden: boolean): void;
    set_uri(uri: string): boolean;
    set_use_preview_label(use_label: boolean): void;
    unselect_all(): void;
    unselect_file(file: Gio.File): void;
    unselect_filename(filename: string): void;
    unselect_uri(uri: string): void;
}
export interface FontChooser  {
    font: string;
    font_desc: Pango.FontDescription;
    readonly font_features: string;
    language: string;
    level: FontChooserLevel;
    preview_text: string;
    show_preview_entry: boolean;
    get_font(): string | null;
    get_font_desc(): Pango.FontDescription | null;
    get_font_face(): Pango.FontFace | null;
    get_font_family(): Pango.FontFamily | null;
    get_font_features(): string;
    get_font_map(): Pango.FontMap | null;
    get_font_size(): number;
    get_language(): string;
    get_level(): FontChooserLevel;
    get_preview_text(): string;
    get_show_preview_entry(): boolean;
    set_filter_func(filter: FontFilterFunc | null, user_data: object | null, destroy: GLib.DestroyNotify): void;
    set_font(fontname: string): void;
    set_font_desc(font_desc: Pango.FontDescription): void;
    set_font_map(fontmap: Pango.FontMap | null): void;
    set_language(language: string): void;
    set_level(level: FontChooserLevel): void;
    set_preview_text(text: string): void;
    set_show_preview_entry(show_preview_entry: boolean): void;
}
export interface Orientable  {
    orientation: Orientation;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export interface PrintOperationPreview  {
    end_preview(): void;
    is_selected(page_nr: number): boolean;
    render_page(page_nr: number): void;
}
export interface RecentChooser  {
    filter: RecentFilter;
    limit: number;
    local_only: boolean;
    recent_manager: RecentManager;
    select_multiple: boolean;
    show_icons: boolean;
    show_not_found: boolean;
    show_private: boolean;
    show_tips: boolean;
    sort_type: RecentSortType;
    add_filter(filter: RecentFilter): void;
    get_current_item(): RecentInfo;
    get_current_uri(): string;
    get_filter(): RecentFilter;
    get_items(): GLib.List;
    get_limit(): number;
    get_local_only(): boolean;
    get_select_multiple(): boolean;
    get_show_icons(): boolean;
    get_show_not_found(): boolean;
    get_show_private(): boolean;
    get_show_tips(): boolean;
    get_sort_type(): RecentSortType;
    get_uris(): [string[], number | null];
    list_filters(): string[];
    remove_filter(filter: RecentFilter): void;
    select_all(): void;
    select_uri(uri: string): boolean;
    set_current_uri(uri: string): boolean;
    set_filter(filter: RecentFilter | null): void;
    set_limit(limit: number): void;
    set_local_only(local_only: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_icons(show_icons: boolean): void;
    set_show_not_found(show_not_found: boolean): void;
    set_show_private(show_private: boolean): void;
    set_show_tips(show_tips: boolean): void;
    set_sort_func(sort_func: RecentSortFunc, sort_data: object | null, data_destroy: GLib.DestroyNotify | null): void;
    set_sort_type(sort_type: RecentSortType): void;
    unselect_all(): void;
    unselect_uri(uri: string): void;
}
export interface Scrollable  {
    hadjustment: Adjustment;
    hscroll_policy: ScrollablePolicy;
    vadjustment: Adjustment;
    vscroll_policy: ScrollablePolicy;
    get_border(): [boolean, Border];
    get_hadjustment(): Adjustment;
    get_hscroll_policy(): ScrollablePolicy;
    get_vadjustment(): Adjustment;
    get_vscroll_policy(): ScrollablePolicy;
    set_hadjustment(hadjustment: Adjustment | null): void;
    set_hscroll_policy(policy: ScrollablePolicy): void;
    set_vadjustment(vadjustment: Adjustment | null): void;
    set_vscroll_policy(policy: ScrollablePolicy): void;
}
export interface StyleProvider  {
    get_icon_factory(path: WidgetPath): IconFactory | null;
    get_style(path: WidgetPath): StyleProperties | null;
    get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, GObject.Value];
}
export interface ToolShell  {
    get_ellipsize_mode(): Pango.EllipsizeMode;
    get_icon_size(): number;
    get_orientation(): Orientation;
    get_relief_style(): ReliefStyle;
    get_style(): ToolbarStyle;
    get_text_alignment(): number;
    get_text_orientation(): Orientation;
    get_text_size_group(): SizeGroup;
    rebuild_menu(): void;
}
export interface TreeDragDest  {
    drag_data_received(dest: TreePath, selection_data: SelectionData): boolean;
    row_drop_possible(dest_path: TreePath, selection_data: SelectionData): boolean;
}
export interface TreeDragSource  {
    drag_data_delete(path: TreePath): boolean;
    drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    row_draggable(path: TreePath): boolean;
}
export interface TreeModel  {
    filter_new(root: TreePath | null): TreeModel;
    foreach(func: TreeModelForeachFunc, user_data: object | null): void;
    get_column_type(index_: number): GType;
    get_flags(): TreeModelFlags;
    get_iter(path: TreePath): [boolean, TreeIter];
    get_iter_first(): [boolean, TreeIter];
    get_iter_from_string(path_string: string): [boolean, TreeIter];
    get_n_columns(): number;
    get_path(iter: TreeIter): TreePath;
    get_string_from_iter(iter: TreeIter): string;
    get_value(iter: TreeIter, column: number): [GObject.Value];
    iter_children(parent: TreeIter | null): [boolean, TreeIter];
    iter_has_child(iter: TreeIter): boolean;
    iter_n_children(iter: TreeIter | null): number;
    iter_next(iter: TreeIter): boolean;
    iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    iter_parent(child: TreeIter): [boolean, TreeIter];
    iter_previous(iter: TreeIter): boolean;
    ref_node(iter: TreeIter): void;
    row_changed(path: TreePath, iter: TreeIter): void;
    row_deleted(path: TreePath): void;
    row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    row_inserted(path: TreePath, iter: TreeIter): void;
    rows_reordered_with_length(path: TreePath, iter: TreeIter | null, new_order: number[], length: number): void;
    sort_new_with_model(): TreeModel;
    unref_node(iter: TreeIter): void;
}
export interface TreeSortable  {
    get_sort_column_id(): [boolean, number,SortType];
    has_default_sort_func(): boolean;
    set_default_sort_func(sort_func: TreeIterCompareFunc, user_data: object | null, destroy: GLib.DestroyNotify | null): void;
    set_sort_column_id(sort_column_id: number, order: SortType): void;
    set_sort_func(sort_column_id: number, sort_func: TreeIterCompareFunc, user_data: object | null, destroy: GLib.DestroyNotify | null): void;
    sort_column_changed(): void;
}