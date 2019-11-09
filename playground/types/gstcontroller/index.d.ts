
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GModule from "gmodule";
import * as Gst from "gst";
import * as GstController from "gstcontroller";
/**
 * gstcontroller.d.ts
 */
type properties = { [key: string]: any };
export type DirectControlBindingConvertGValue = (self: DirectControlBinding, src_value: number, dest_value: GObject.Value) => void;
export type DirectControlBindingConvertValue = (self: DirectControlBinding, src_value: number, dest_value: object | null) => void;
/**
 * Reset the controlled value cache.
 */
export function timed_value_control_invalidate_cache(self: TimedValueControlSource): void;
export enum InterpolationMode {
    NONE = 0,
    LINEAR = 1,
    CUBIC = 2,
    CUBIC_MONOTONIC = 3,
}
export enum LFOWaveform {
    SINE = 0,
    SQUARE = 1,
    SAW = 2,
    REVERSE_SAW = 3,
    TRIANGLE = 4,
}
export class ARGBControlBinding extends Gst.ControlBinding {constructor(config?: properties);
control_source_a: Gst.ControlSource;
control_source_b: Gst.ControlSource;
control_source_g: Gst.ControlSource;
control_source_r: Gst.ControlSource;
}
export class DirectControlBinding extends Gst.ControlBinding {constructor(config?: properties);
absolute: boolean;
control_source: Gst.ControlSource;static new_absolute(object: Gst.Object, property_name: string, cs: Gst.ControlSource): Gst.ControlBinding;
}
export class InterpolationControlSource extends TimedValueControlSource {constructor(config?: properties);
mode: InterpolationMode;
}
export class LFOControlSource extends Gst.ControlSource {constructor(config?: properties);
amplitude: number;
frequency: number;
offset: number;
timeshift: number;
waveform: LFOWaveform;
}
export class ProxyControlBinding extends Gst.ControlBinding {constructor(config?: properties);
}
export class TimedValueControlSource  {constructor(config?: properties);
readonly lock: GLib.Mutex;
readonly values: GLib.Sequence;
readonly nvalues: number;
readonly valid_cache: boolean;
readonly priv: TimedValueControlSourcePrivate;
readonly _gst_reserved: object[];
find_control_point_iter(timestamp: Gst.ClockTime): GLib.SequenceIter;
get_all(): GLib.List;
get_count(): number;
set(timestamp: Gst.ClockTime, value: number): boolean;
set_from_list(timedvalues: string[]): boolean;
unset(timestamp: Gst.ClockTime): boolean;
unset_all(): void;
}
export class TriggerControlSource extends TimedValueControlSource {constructor(config?: properties);
tolerance: number;
}
export class ARGBControlBindingClass  {constructor(config?: properties);
readonly parent_class: Gst.ControlBindingClass;
readonly _gst_reserved: object[];
}
export class ControlPoint  {constructor(config?: properties);
timestamp: Gst.ClockTime;
value: number;
copy(): ControlPoint;
free(): void;
}
export class DirectControlBindingClass  {constructor(config?: properties);
readonly parent_class: Gst.ControlBindingClass;
readonly _gst_reserved: object[];
}
export class InterpolationControlSourceClass  {constructor(config?: properties);
readonly parent_class: TimedValueControlSourceClass;
readonly _gst_reserved: object[];
}
export class InterpolationControlSourcePrivate  {constructor(config?: properties);
}
export class LFOControlSourceClass  {constructor(config?: properties);
readonly parent_class: Gst.ControlSourceClass;
readonly _gst_reserved: object[];
}
export class LFOControlSourcePrivate  {constructor(config?: properties);
}
export class ProxyControlBindingClass  {constructor(config?: properties);
readonly parent_class: Gst.ControlBindingClass;
readonly _padding: object[];
}
export class TimedValueControlSourceClass  {constructor(config?: properties);
readonly parent_class: Gst.ControlSourceClass;
readonly _gst_reserved: object[];
}
export class TimedValueControlSourcePrivate  {constructor(config?: properties);
}
export class TriggerControlSourceClass  {constructor(config?: properties);
readonly parent_class: TimedValueControlSourceClass;
readonly _gst_reserved: object[];
}
export class TriggerControlSourcePrivate  {constructor(config?: properties);
}