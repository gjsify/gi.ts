
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GUPnPIgd from "gupnpigd";
/**
 * gupnpigd.d.ts
 */
type properties = { [key: string]: any };
/**
 * 
 */
export function simple_igd_error_quark(): GLib.Quark;
export enum SimpleIgdError {
    ADDRESS = 0,
}
export class SimpleIgd extends GObject.Object {constructor(config?: properties);
readonly main_context: object;
add_port(protocol: string, external_port: number, local_ip: string, local_port: number, lease_duration: number, description: string): void;
delete_all_mappings(): boolean;
remove_port(protocol: string, external_port: number): void;
remove_port_local(protocol: string, local_ip: string, local_port: number): void;
vfunc_add_port(protocol: string, external_port: number, local_ip: string, local_port: number, lease_duration: number, description: string): void;
vfunc_remove_port(protocol: string, external_port: number): void;
vfunc_remove_port_local(protocol: string, local_ip: string, local_port: number): void;
}
export class SimpleIgdThread extends SimpleIgd {constructor(config?: properties);
}
export class SimpleIgdClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly add_port: unknown;
readonly remove_port: unknown;
readonly remove_port_local: unknown;
}
export class SimpleIgdPrivate  {constructor(config?: properties);
}
export class SimpleIgdThreadClass  {constructor(config?: properties);
}
export class SimpleIgdThreadPrivate  {constructor(config?: properties);
}