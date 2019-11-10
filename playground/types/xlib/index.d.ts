
/**
 * xlib
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
/**
 * 
 */
type properties = { [key: string]: any };
type GType = object;
/**
 * 
 */
export function open_display(): void;
export type Atom = number;
export type Colormap = number;
export type Cursor = number;
export type Drawable = number;
export type GC = object;
export type KeyCode = number;
export type KeySym = number;
export type Picture = number;
export type Time = number;
export type VisualID = number;
export type Window = number;
export type XID = number;
export type Pixmap = number;
export class Display  {
    constructor(config?: properties);
}
export class Screen  {
    constructor(config?: properties);
}
export class Visual  {
    constructor(config?: properties);
}
export class XConfigureEvent  {
    constructor(config?: properties);
}
export class XImage  {
    constructor(config?: properties);
}
export class XFontStruct  {
    constructor(config?: properties);
}
export class XTrapezoid  {
    constructor(config?: properties);
}
export class XVisualInfo  {
    constructor(config?: properties);
}
export class XWindowAttributes  {
    constructor(config?: properties);
}
export class XEvent  {
    constructor(config?: properties);
}