
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Clutter from "clutter";
import * as Cally from "cally";
import * as Atk from "atk";
/**
 * cally.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type ActionCallback = (cally_actor: Actor, user_data: object | null) => void;
export type ActionFunc = (cally_actor: Actor) => void;
/**
 * Initializes the accessibility support.
 */
export function accessibility_init(): boolean;
/**
 * Returns if the accessibility support using cally is enabled.
 */
export function get_cally_initialized(): boolean;
export class Actor extends Atk.GObjectAccessible {
    constructor(config?: properties);
    add_action_full(action_name: string, action_description: string, action_keybinding: string, callback: ActionCallback, user_data: object | null, notify: GLib.DestroyNotify): number;
    remove_action(action_id: number): boolean;
    remove_action_by_name(action_name: string): boolean;
}
export class Clone extends Actor {
    constructor(config?: properties);
}
export class Group extends Actor {
    constructor(config?: properties);
}
export class Rectangle extends Actor {
    constructor(config?: properties);
}
export class Root extends Atk.GObjectAccessible {
    constructor(config?: properties);
}
export class Stage extends Group {
    constructor(config?: properties);
}
export class Text extends Actor {
    constructor(config?: properties);
}
export class Texture extends Actor {
    constructor(config?: properties);
}
export class Util  {
    constructor(config?: properties);
    readonly priv: UtilPrivate;
}
export class ActorPrivate  {
    constructor(config?: properties);
}
export class ClonePrivate  {
    constructor(config?: properties);
}
export class GroupPrivate  {
    constructor(config?: properties);
}
export class RectanglePrivate  {
    constructor(config?: properties);
}
export class RootPrivate  {
    constructor(config?: properties);
}
export class StagePrivate  {
    constructor(config?: properties);
}
export class TextPrivate  {
    constructor(config?: properties);
}
export class TexturePrivate  {
    constructor(config?: properties);
}
export class UtilPrivate  {
    constructor(config?: properties);
}