
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
export class Actor extends Atk.GObjectAccessible {constructor(config?: properties);
add_action(action_name: string, action_description: string, action_keybinding: string, action_func: ActionFunc): number;
add_action_full(action_name: string, action_description: string, action_keybinding: string, callback: ActionCallback, user_data: object | null, notify: GLib.DestroyNotify): number;
remove_action(action_id: number): boolean;
remove_action_by_name(action_name: string): boolean;
}
export class Clone extends Actor {constructor(config?: properties);
}
export class Group extends Actor {constructor(config?: properties);
}
export class Rectangle extends Actor {constructor(config?: properties);
}
export class Root extends Atk.GObjectAccessible {constructor(config?: properties);
}
export class Stage extends Group {constructor(config?: properties);
}
export class Text extends Actor {constructor(config?: properties);
}
export class Texture extends Actor {constructor(config?: properties);
}
export class Util  {constructor(config?: properties);
readonly priv: UtilPrivate;
}
export class ActorClass  {constructor(config?: properties);
readonly parent_class: Atk.GObjectAccessibleClass;
readonly notify_clutter: unknown;
readonly focus_clutter: unknown;
readonly add_actor: unknown;
readonly remove_actor: unknown;
readonly _padding_dummy: object[];
}
export class ActorPrivate  {constructor(config?: properties);
}
export class CloneClass  {constructor(config?: properties);
readonly parent_class: ActorClass;
readonly _padding_dummy: object[];
}
export class ClonePrivate  {constructor(config?: properties);
}
export class GroupClass  {constructor(config?: properties);
readonly parent_class: ActorClass;
readonly _padding_dummy: object[];
}
export class GroupPrivate  {constructor(config?: properties);
}
export class RectangleClass  {constructor(config?: properties);
readonly parent_class: ActorClass;
readonly _padding_dummy: object[];
}
export class RectanglePrivate  {constructor(config?: properties);
}
export class RootClass  {constructor(config?: properties);
readonly parent_class: Atk.GObjectAccessibleClass;
readonly _padding_dummy: object[];
}
export class RootPrivate  {constructor(config?: properties);
}
export class StageClass  {constructor(config?: properties);
readonly parent_class: GroupClass;
readonly _padding_dummy: object[];
}
export class StagePrivate  {constructor(config?: properties);
}
export class TextClass  {constructor(config?: properties);
readonly parent_class: ActorClass;
readonly _padding_dummy: object[];
}
export class TextPrivate  {constructor(config?: properties);
}
export class TextureClass  {constructor(config?: properties);
readonly parent_class: ActorClass;
readonly _padding_dummy: object[];
}
export class TexturePrivate  {constructor(config?: properties);
}
export class UtilClass  {constructor(config?: properties);
readonly parent_class: Atk.UtilClass;
readonly _padding_dummy: object[];
}
export class UtilPrivate  {constructor(config?: properties);
}