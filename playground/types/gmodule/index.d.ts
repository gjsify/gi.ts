
/**
 * gmodule
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
/**
 * 
 */
type properties = { [key: string]: any };
type GType = object;
/**
 * A portable way to build the filename of a module. The platform-specifi
 * c
 * prefix and suffix are added to the filename, if needed, and the result
 * is added to the directory, using the correct separator character.
 * The directory should specify the directory where the module can be fou
 * nd.
 * It can be %NULL or an empty string to indicate that the module is in a
 * standard platform-specific directory, though this is not recommended
 * since the wrong module may be found.
 * For example, calling g_module_build_path() on a Linux system with a
 * @directory of `/lib` and a @module_name of "mylibrary" will return
 * `/lib/libmylibrary.so`. On a Windows system, using `\Windows` as the
 * directory it will return `\Windows\mylibrary.dll`.
 */
export function module_build_path(directory: string | null, module_name: string): string;
/**
 * Gets a string describing the last module error.
 */
export function module_error(): string;
/**
 * Checks if modules are supported on the current platform.
 */
export function module_supported(): boolean;
export type ModuleCheckInit = (module: Module) => string;
export type ModuleUnload = (module: Module) => void;
export enum ModuleFlags {
    LAZY = 1,
    LOCAL = 2,
    MASK = 3,
}
export class Module  {
    constructor(config?: properties);
    close(): boolean;
    make_resident(): void;
    name(): string;
    symbol(symbol_name: string): [boolean, object | null];
    static build_path(directory: string | null, module_name: string): string;
    static error(): string;
    static supported(): boolean;
}