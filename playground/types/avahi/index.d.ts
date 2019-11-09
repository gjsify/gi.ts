
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as AvahiCore from "avahicore";
import * as Avahi from "avahi";
/**
 * avahi.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
/**
 * 
 */
export function error_quark(): GLib.Quark;
export enum BrowserEvent {
    GA_BROWSER_NEW = 0,
    GA_BROWSER_REMOVE = 1,
    GA_BROWSER_CACHE_EXHAUSTED = 2,
    GA_BROWSER_ALL_FOR_NOW = 3,
    GA_BROWSER_FAILURE = 4,
}
export enum ClientFlags {
    GA_CLIENT_FLAG_NO_FLAGS = 0,
    GA_CLIENT_FLAG_IGNORE_USER_CONFIG = 1,
    GA_CLIENT_FLAG_NO_FAIL = 2,
}
export enum ClientState {
    GA_CLIENT_STATE_NOT_STARTED = -1,
    GA_CLIENT_STATE_S_REGISTERING = 1,
    GA_CLIENT_STATE_S_RUNNING = 2,
    GA_CLIENT_STATE_S_COLLISION = 3,
    GA_CLIENT_STATE_FAILURE = 100,
    GA_CLIENT_STATE_CONNECTING = 101,
}
export enum EntryGroupState {
    GA_ENTRY_GROUP_STATE_UNCOMMITED = 0,
    GA_ENTRY_GROUP_STATE_REGISTERING = 1,
    GA_ENTRY_GROUP_STATE_ESTABLISHED = 2,
    GA_ENTRY_GROUP_STATE_COLLISTION = 3,
    GA_ENTRY_GROUP_STATE_FAILURE = 4,
}
export enum LookupFlags {
    GA_LOOKUP_NO_FLAGS = 0,
    GA_LOOKUP_USE_WIDE_AREA = 1,
    GA_LOOKUP_USE_MULTICAST = 2,
    GA_LOOKUP_NO_TXT = 4,
    GA_LOOKUP_NO_ADDRESS = 8,
}
export enum LookupResultFlags {
    GA_LOOKUP_RESULT_CACHED = 1,
    GA_LOOKUP_RESULT_WIDE_AREA = 2,
    GA_LOOKUP_RESULT_MULTICAST = 4,
    GA_LOOKUP_RESULT_LOCAL = 8,
    GA_LOOKUP_RESULT_OUR_OWN = 16,
    GA_LOOKUP_RESULT_STATIC = 32,
}
export enum Protocol {
    GA_PROTOCOL_INET = 0,
    GA_PROTOCOL_INET6 = 1,
    GA_PROTOCOL_UNSPEC = -1,
}
export enum ResolverEvent {
    GA_RESOLVER_FOUND = 0,
    GA_RESOLVER_FAILURE = 1,
}
export class Client extends GObject.Object {
    constructor(config?: properties);
    flags: ClientFlags;
    readonly state: ClientState;
    start(): boolean;
    start_in_context(context: GLib.MainContext): boolean;
}
export class EntryGroup extends GObject.Object {
    constructor(config?: properties);
    readonly state: EntryGroupState;
    add_record(flags: AvahiCore.PublishFlags, name: string, type: number, ttl: number, rdata: object | null, size: number): boolean;
    add_record_full(_interface: AvahiCore.IfIndex, protocol: AvahiCore.Protocol, flags: AvahiCore.PublishFlags, name: string, clazz: number, type: number, ttl: number, rdata: object | null, size: number): boolean;
    attach(client: Client): boolean;
    commit(): boolean;
    reset(): boolean;
}
export class RecordBrowser extends GObject.Object {
    constructor(config?: properties);
    "class": number;
    flags: LookupFlags;
    "interface": number;
    name: string;
    protocol: Protocol;
    type: number;static new_full(_interface: AvahiCore.IfIndex, protocol: AvahiCore.Protocol, name: string, clazz: number, type: number, flags: LookupFlags): RecordBrowser;
    attach(client: Client): boolean;
}
export class ServiceBrowser extends GObject.Object {
    constructor(config?: properties);
    domain: string;
    flags: LookupFlags;
    "interface": number;
    protocol: Protocol;
    type: string;static new_full(_interface: AvahiCore.IfIndex, protocol: AvahiCore.Protocol, type: string, domain: string, flags: LookupFlags): ServiceBrowser;
    attach(client: Client): boolean;
}
export class ServiceResolver extends GObject.Object {
    constructor(config?: properties);
    aprotocol: Protocol;
    domain: string;
    flags: LookupFlags;
    "interface": number;
    name: string;
    protocol: Protocol;
    type: string;
    attach(client: Client): boolean;
    get_address(address: AvahiCore.Address, port: number): boolean;
}
export class EntryGroupService  {
    constructor(config?: properties);
    "interface": AvahiCore.IfIndex;
    protocol: AvahiCore.Protocol;
    flags: AvahiCore.PublishFlags;
    name: string;
    type: string;
    domain: string;
    host: string;
    port: number;
    freeze(): void;
    remove_key(key: string): boolean;
    set(key: string, value: string): boolean;
    set_arbitrary(key: string, value: number, size: number): boolean;
    thaw(): boolean;
}