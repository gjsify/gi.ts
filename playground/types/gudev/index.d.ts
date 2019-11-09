
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GUdev from "gudev";
/**
 * gudev.d.ts
 */
type properties = { [key: string]: any };
export enum DeviceType {
    NONE = 0,
    BLOCK = 98,
    CHAR = 99,
}
export type DeviceNumber = number;
export class Client extends GObject.Object {constructor(config?: properties);
subsystems: string[];
query_by_device_file(device_file: string): Device | null;
query_by_device_number(type: DeviceType, number: DeviceNumber): Device | null;
query_by_subsystem(subsystem: string | null): GLib.List | null;
query_by_subsystem_and_name(subsystem: string, name: string): Device | null;
query_by_sysfs_path(sysfs_path: string): Device | null;
vfunc_uevent(action: string, device: Device): void;
}
export class Device  {constructor(config?: properties);
readonly priv: DevicePrivate;
get_action(): string;
get_device_file(): string | null;
get_device_file_symlinks(): string[];
get_device_number(): DeviceNumber;
get_device_type(): DeviceType;
get_devtype(): string;
get_driver(): string | null;
get_is_initialized(): boolean;
get_name(): string;
get_number(): string;
get_parent(): Device | null;
get_parent_with_subsystem(subsystem: string, devtype: string | null): Device | null;
get_property(key: string): string | null;
get_property_as_boolean(key: string): boolean;
get_property_as_double(key: string): number;
get_property_as_int(key: string): number;
get_property_as_strv(key: string): string[] | null;
get_property_as_uint64(key: string): number;
get_property_keys(): string[];
get_seqnum(): number;
get_subsystem(): string;
get_sysfs_attr(name: string): string | null;
get_sysfs_attr_as_boolean(name: string): boolean;
get_sysfs_attr_as_double(name: string): number;
get_sysfs_attr_as_int(name: string): number;
get_sysfs_attr_as_strv(name: string): string[] | null;
get_sysfs_attr_as_uint64(name: string): number;
get_sysfs_attr_keys(): string[];
get_sysfs_path(): string;
get_tags(): string[];
get_usec_since_initialized(): number;
has_property(key: string): boolean;
has_sysfs_attr(key: string): boolean;
}
export class Enumerator extends GObject.Object {constructor(config?: properties);
client: Client;
add_match_is_initialized(): Enumerator;
add_match_name(name: string): Enumerator;
add_match_property(name: string, value: string): Enumerator;
add_match_subsystem(subsystem: string): Enumerator;
add_match_sysfs_attr(name: string, value: string): Enumerator;
add_match_tag(tag: string): Enumerator;
add_nomatch_subsystem(subsystem: string): Enumerator;
add_nomatch_sysfs_attr(name: string, value: string): Enumerator;
add_sysfs_path(sysfs_path: string): Enumerator;
execute(): GLib.List;
}
export class ClientClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly uevent: unknown;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
readonly reserved7: unknown;
readonly reserved8: unknown;
}
export class ClientPrivate  {constructor(config?: properties);
}
export class DeviceClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
readonly reserved7: unknown;
readonly reserved8: unknown;
}
export class DevicePrivate  {constructor(config?: properties);
}
export class EnumeratorClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
readonly reserved7: unknown;
readonly reserved8: unknown;
}
export class EnumeratorPrivate  {constructor(config?: properties);
}