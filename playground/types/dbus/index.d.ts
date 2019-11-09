
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
/**
 * dbus.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export enum BusType {
    SESSION = 0,
    SYSTEM = 1,
    STARTER = 2,
}
export class Connection  {
    constructor(config?: properties);
}
export class Error  {
    constructor(config?: properties);
}
export class Message  {
    constructor(config?: properties);
}
export class MessageIter  {
    constructor(config?: properties);
}
export class PendingCall  {
    constructor(config?: properties);
}