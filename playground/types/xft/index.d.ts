
/**
 * xft
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as xlib from "xlib";
/**
 * 
 */
type properties = { [key: string]: any };
type GType = object;
/**
 * 
 */
export function init(): void;
export class Color  {
    constructor(config?: properties);
}
export class Draw  {
    constructor(config?: properties);
}
export class Font  {
    constructor(config?: properties);
}
export class GlyphSpec  {
    constructor(config?: properties);
}