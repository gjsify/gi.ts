
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
/**
 * gdesktopenums.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export enum BackgroundShading {
    SOLID = 0,
    VERTICAL = 1,
    HORIZONTAL = 2,
}
export enum BackgroundStyle {
    NONE = 0,
    WALLPAPER = 1,
    CENTERED = 2,
    SCALED = 3,
    STRETCHED = 4,
    ZOOM = 5,
    SPANNED = 6,
}
export enum ClockFormat {
    Gjs_24H = 0,
    Gjs_12H = 1,
}
export enum DeviceSendEvents {
    ENABLED = 0,
    DISABLED = 1,
    DISABLED_ON_EXTERNAL_MOUSE = 2,
}
export enum FocusMode {
    CLICK = 0,
    SLOPPY = 1,
    MOUSE = 2,
}
export enum FocusNewWindows {
    SMART = 0,
    STRICT = 1,
}
export enum LocationAccuracyLevel {
    COUNTRY = 0,
    CITY = 1,
    NEIGHBORHOOD = 2,
    STREET = 3,
    EXACT = 4,
}
export enum MagnifierCaretTrackingMode {
    NONE = 0,
    CENTERED = 1,
    PROPORTIONAL = 2,
    PUSH = 3,
}
export enum MagnifierFocusTrackingMode {
    NONE = 0,
    CENTERED = 1,
    PROPORTIONAL = 2,
    PUSH = 3,
}
export enum MagnifierMouseTrackingMode {
    NONE = 0,
    CENTERED = 1,
    PROPORTIONAL = 2,
    PUSH = 3,
}
export enum MagnifierScreenPosition {
    NONE = 0,
    FULL_SCREEN = 1,
    TOP_HALF = 2,
    BOTTOM_HALF = 3,
    LEFT_HALF = 4,
    RIGHT_HALF = 5,
}
export enum MouseDwellDirection {
    LEFT = 0,
    RIGHT = 1,
    UP = 2,
    DOWN = 3,
}
export enum MouseDwellMode {
    WINDOW = 0,
    GESTURE = 1,
}
export enum PadButtonAction {
    NONE = 0,
    HELP = 1,
    SWITCH_MONITOR = 2,
    KEYBINDING = 3,
}
export enum PointerAccelProfile {
    DEFAULT = 0,
    FLAT = 1,
    ADAPTIVE = 2,
}
export enum ProxyMode {
    NONE = 0,
    MANUAL = 1,
    AUTO = 2,
}
export enum ScreensaverMode {
    BLANK_ONLY = 0,
    RANDOM = 1,
    SINGLE = 2,
}
export enum StylusButtonAction {
    DEFAULT = 0,
    MIDDLE = 1,
    RIGHT = 2,
    BACK = 3,
    FORWARD = 4,
}
export enum TabletMapping {
    ABSOLUTE = 0,
    RELATIVE = 1,
}
export enum TitlebarAction {
    TOGGLE_SHADE = 0,
    TOGGLE_MAXIMIZE = 1,
    TOGGLE_MAXIMIZE_HORIZONTALLY = 2,
    TOGGLE_MAXIMIZE_VERTICALLY = 3,
    MINIMIZE = 4,
    NONE = 5,
    LOWER = 6,
    MENU = 7,
}
export enum ToolbarIconSize {
    SMALL = 0,
    LARGE = 1,
}
export enum ToolbarStyle {
    BOTH = 0,
    BOTH_HORIZ = 1,
    ICONS = 2,
    TEXT = 3,
}
export enum TouchpadClickMethod {
    DEFAULT = 0,
    NONE = 1,
    AREAS = 2,
    FINGERS = 3,
}
export enum TouchpadHandedness {
    RIGHT = 0,
    LEFT = 1,
    MOUSE = 2,
}
export enum VisualBellType {
    FULLSCREEN_FLASH = 0,
    FRAME_FLASH = 1,
}