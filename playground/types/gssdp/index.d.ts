
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Soup from "soup";
import * as GSSDP from "gssdp";
/**
 * gssdp.d.ts
 */
type properties = { [key: string]: any };
export const ALL_RESOURCES: string;
/**
 * 
 */
export function error_quark(): GLib.Quark;
export enum Error {
    NO_IP_ADDRESS = 0,
    FAILED = 1,
}
export enum UDAVersion {
    VERSION_UNSPECIFIED = 0,
    VERSION_1_0 = 1,
    VERSION_1_1 = 2,
}
export class Client extends GObject.Object {constructor(config?: properties);
active: boolean;
address_family: Gio.SocketFamily;
boot_id: number;
config_id: number;
host_ip: string;
host_mask: Gio.InetAddressMask;
_interface: string;
msearch_port: number;
network: string;
server_id: string;
socket_ttl: number;
uda_version: UDAVersion;static new_with_port(iface: string | null, msearch_port: number): Client;
add_cache_entry(ip_address: string, user_agent: string): void;
append_header(name: string, value: string): void;
clear_headers(): void;
get_active(): boolean;
get_address(): Gio.InetAddress;
get_family(): Gio.SocketFamily;
get_host_ip(): string;
get_index(): number;
get_interface(): string;
get_network(): string;
get_server_id(): string;
get_uda_version(): UDAVersion;
guess_user_agent(ip_address: string): string;
remove_header(name: string): void;
set_boot_id(boot_id: number): void;
set_config_id(config_id: number): void;
set_network(network: string): void;
set_server_id(server_id: string): void;
}
export class ResourceBrowser extends GObject.Object {constructor(config?: properties);
active: boolean;
client: Client;
mx: number;
target: string;
get_active(): boolean;
get_client(): Client;
get_mx(): number;
get_target(): string;
rescan(): boolean;
set_active(active: boolean): void;
set_mx(mx: number): void;
set_target(target: string): void;
vfunc_resource_available(usn: string, locations: GLib.List): void;
vfunc_resource_unavailable(usn: string): void;
vfunc_resource_update(usn: string, boot_id: number, next_boot_id: number): void;
}
export class ResourceGroup extends GObject.Object {constructor(config?: properties);
available: boolean;
client: Client;
max_age: number;
message_delay: number;
add_resource(target: string, usn: string, locations: GLib.List): number;
add_resource_simple(target: string, usn: string, location: string): number;
get_available(): boolean;
get_client(): Client;
get_max_age(): number;
get_message_delay(): number;
remove_resource(resource_id: number): void;
set_available(available: boolean): void;
set_max_age(max_age: number): void;
set_message_delay(message_delay: number): void;
update(new_boot_id: number): void;
}
export class ClientClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _gssdp_reserved1: unknown;
readonly _gssdp_reserved2: unknown;
readonly _gssdp_reserved3: unknown;
readonly _gssdp_reserved4: unknown;
}
export class ResourceBrowserClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly resource_available: unknown;
readonly resource_update: unknown;
readonly resource_unavailable: unknown;
readonly _gssdp_reserved1: unknown;
readonly _gssdp_reserved2: unknown;
readonly _gssdp_reserved3: unknown;
readonly _gssdp_reserved4: unknown;
}
export class ResourceGroupClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _gssdp_reserved1: unknown;
readonly _gssdp_reserved2: unknown;
readonly _gssdp_reserved3: unknown;
readonly _gssdp_reserved4: unknown;
}