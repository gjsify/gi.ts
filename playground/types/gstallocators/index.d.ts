
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gst from "gst";
import * as GstAllocators from "gstallocators";
/**
 * gstallocators.d.ts
 */
type properties = { [key: string]: any };
export const ALLOCATOR_DMABUF: string;
export const ALLOCATOR_FD: string;
export const CAPS_FEATURE_MEMORY_DMABUF: string;
/**
 * Return the file descriptor associated with @mem.
 */
export function dmabuf_memory_get_fd(mem: Gst.Memory): number;
/**
 * Get the fd from @mem. Call gst_is_fd_memory() to check if @mem has
 * an fd.
 */
export function fd_memory_get_fd(mem: Gst.Memory): number;
/**
 * Check if @mem is dmabuf memory.
 */
export function is_dmabuf_memory(mem: Gst.Memory): boolean;
/**
 * Check if @mem is memory backed by an fd
 */
export function is_fd_memory(mem: Gst.Memory): boolean;
/**
 * 
 */
export function is_phys_memory(mem: Gst.Memory): boolean;
/**
 * 
 */
export function phys_memory_get_phys_addr(mem: Gst.Memory): unknown;
export enum FdMemoryFlags {
    NONE = 0,
    KEEP_MAPPED = 1,
    MAP_PRIVATE = 2,
    DONT_CLOSE = 4,
}
export class DmaBufAllocator extends FdAllocator {constructor(config?: properties);
static alloc(allocator: Gst.Allocator, fd: number, size: number): Gst.Memory;
alloc(...args: never[]): never;
static alloc_with_flags(allocator: Gst.Allocator, fd: number, size: number, flags: FdMemoryFlags): Gst.Memory;
}
export class FdAllocator extends Gst.Allocator {constructor(config?: properties);
static alloc(allocator: Gst.Allocator, fd: number, size: number, flags: FdMemoryFlags): Gst.Memory;
alloc(...args: never[]): never;
}
export class DmaBufAllocatorClass  {constructor(config?: properties);
readonly parent_class: FdAllocatorClass;
readonly _gst_reserved: object[];
}
export class FdAllocatorClass  {constructor(config?: properties);
readonly parent_class: Gst.AllocatorClass;
}
export class PhysMemoryAllocatorInterface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_phys_addr: unknown;
}
export interface PhysMemoryAllocator  {
}