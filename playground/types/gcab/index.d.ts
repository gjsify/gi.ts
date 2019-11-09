
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GCab from "gcab";
/**
 * gcab.d.ts
 */
type properties = { [key: string]: any };
export type FileCallback = (file: File, user_data: object | null) => boolean;
/**
 * 
 */
export function error_quark(): GLib.Quark;
export enum Compression {
    NONE = 0,
    MSZIP = 1,
    QUANTUM = 2,
    LZX = 3,
    MASK = 15,
}
export enum Error {
    FORMAT = 0,
    FAILED = 1,
    NOT_SUPPORTED = 2,
    INVALID_DATA = 3,
}
export enum FileAttribute {
    RDONLY = 1,
    HIDDEN = 2,
    SYSTEM = 4,
    ARCH = 32,
    EXEC = 64,
    NAME_IS_UTF = 128,
}
export class Cabinet extends GObject.Object {constructor(config?: properties);
reserved: number[];
signature: number[];
add_folder(folder: Folder): boolean;
extract(path: Gio.File | null, file_callback: FileCallback | null, progress_callback: Gio.FileProgressCallback | null, user_data: object | null, cancellable: Gio.Cancellable | null): boolean;
extract_simple(path: Gio.File, file_callback: FileCallback | null, user_data: object | null, cancellable: Gio.Cancellable | null): boolean;
get_folders(): Folder[];
get_signature(cancellable: Gio.Cancellable | null): number[];
get_size(): number;
load(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean;
write(stream: Gio.OutputStream, file_callback: FileCallback | null, progress_callback: Gio.FileProgressCallback | null, user_data: object | null, cancellable: Gio.Cancellable | null): boolean;
write_simple(stream: Gio.OutputStream, file_callback: FileCallback | null, user_data: object | null, cancellable: Gio.Cancellable | null): boolean;
}
export class File extends GObject.Object {constructor(config?: properties);
bytes: GLib.Bytes;
file: Gio.File;
name: string;static new_with_bytes(name: string, bytes: GLib.Bytes): File;
static new_with_file(name: string, file: Gio.File): File;
get_attributes(): number;
get_bytes(): GLib.Bytes;
get_date(result: GLib.TimeVal): boolean;
get_extract_name(): string | null;
get_file(): Gio.File;
get_name(): string;
get_size(): number;
set_attributes(attr: number): void;
set_date(tv: GLib.TimeVal): void;
set_extract_name(name: string | null): void;
}
export class Folder extends GObject.Object {constructor(config?: properties);
readonly compression: Compression;
comptype: number;
reserved: number[];
add_file(cabfile: File, recurse: boolean, cancellable: Gio.Cancellable | null): boolean;
get_comptype(): number;
get_file_by_name(name: string): File;
get_files(): string[];
get_nfiles(): number;
}
export class CabinetClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class FileClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class FolderClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}