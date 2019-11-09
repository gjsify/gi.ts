
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Soup from "soup";
/**
 * grlnet.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export enum WcError {
    UNAVAILABLE = 1,
    PROTOCOL_ERROR = 2,
    AUTHENTICATION_REQUIRED = 3,
    NOT_FOUND = 4,
    CONFLICT = 5,
    FORBIDDEN = 6,
    NETWORK_ERROR = 7,
    PROXY_ERROR = 8,
    CANCELLED = 9,
}
export class Wc extends GObject.Object {
    constructor(config?: properties);
    cache: boolean;
    cache_size: number;
    loglevel: number;
    throttling: number;
    user_agent: string;
    flush_delayed_requests(): void;
    request_async(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    request_finish(result: Gio.AsyncResult): [boolean, number[] | null,number | null];
    request_with_headers_hash_async(uri: string, headers: GLib.HashTable | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    set_cache(use_cache: boolean): void;
    set_cache_size(cache_size: number): void;
    set_log_level(log_level: number): void;
    set_throttling(throttling: number): void;
    static error_quark(): GLib.Quark;
}
export class WcPrivate  {
    constructor(config?: properties);
}