
/**
 * dbusglib
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
/**
 * 
 */
type properties = { [key: string]: any };
type GType = object;
export class Proxy  {
    constructor(config?: properties);
}
export class Connection  {
    constructor(config?: properties);
}
export class MethodInvocation  {
    constructor(config?: properties);
}
export class ProxyClass  {
    constructor(config?: properties);
}