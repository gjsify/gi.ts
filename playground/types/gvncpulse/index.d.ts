
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GVnc from "gvnc";
/**
 * gvncpulse.d.ts
 */
type properties = { [key: string]: any };
export class AudioPulse extends GVnc.BaseAudio {constructor(config?: properties);
}
export class AudioPulseClass  {constructor(config?: properties);
readonly parent_class: GVnc.BaseAudioClass;
}
export class AudioPulsePrivate  {constructor(config?: properties);
}