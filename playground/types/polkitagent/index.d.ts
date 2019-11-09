
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Polkit from "polkit";
import * as PolkitAgent from "polkitagent";
/**
 * polkitagent.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
/**
 * (deprecated)
 */
export function register_listener(listener: Listener, subject: Polkit.Subject, object_path: string): boolean;
export enum RegisterFlags {
    NONE = 0,
    RUN_IN_THREAD = 1,
}
export class Listener  {
    constructor(config?: properties);
    initiate_authentication(action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: GLib.List, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    initiate_authentication_finish(res: Gio.AsyncResult): boolean;
    register(flags: RegisterFlags, subject: Polkit.Subject, object_path: string, cancellable: Gio.Cancellable | null): object | null;
    register_with_options(flags: RegisterFlags, subject: Polkit.Subject, object_path: string, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): object | null;
    static unregister(registration_handle: object | null): void;
}
export class Session extends GObject.Object {
    constructor(config?: properties);
    cookie: string;
    identity: Polkit.Identity;
    cancel(): void;
    initiate(): void;
    response(response: string): void;
}
export class TextListener extends Listener {
    constructor(config?: properties);
}