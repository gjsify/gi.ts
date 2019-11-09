
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
/**
 * avahicore.d.ts
 */
type properties = { [key: string]: any };
/**
 * 
 */
export function server_get_host_name(): string;
export enum Protocol {
    INET = 0,
    INET6 = 1,
    UNSPEC = -1,
}
export type IfIndex = number;
export enum PublishFlags {
    UNIQUE = 1,
    NO_PROBE = 2,
    NO_ANNOUNCE = 4,
    ALLOW_MULTIPLE = 8,
    NO_REVERSE = 16,
    NO_COOKIE = 32,
    UPDATE = 64,
    USE_WIDE_AREA = 128,
    USE_MULTICAST = 256,
}
export class StringList  {constructor(config?: properties);
}
export class Address  {constructor(config?: properties);
}
export class Client  {constructor(config?: properties);
}