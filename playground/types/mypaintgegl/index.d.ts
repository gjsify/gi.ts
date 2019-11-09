
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gegl from "gegl";
import * as MyPaint from "mypaint";
/**
 * mypaintgegl.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export class TiledSurface  {
    constructor(config?: properties);
    get_buffer(): Gegl.Buffer;
    set_buffer(buffer: Gegl.Buffer): void;
}