
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GVnc from "gvnc";
/**
 * gvncpulse.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export class AudioPulse extends GVnc.BaseAudio {
    constructor(config?: properties);
}
export class AudioPulsePrivate  {
    constructor(config?: properties);
}