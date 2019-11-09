
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gee from "gee";
/**
 * gee.d.ts
 */
type properties = { [key: string]: any };
export type HashDataFunc = (t_type: unknown, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, v: object | null, user_data: object) => number;
export type EqualDataFunc = (t_type: unknown, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, a: object | null, b: object | null, user_data: object) => boolean;
export type LazyFunc = (g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, user_data: object) => object | null;
export type FoldMapFunc = (a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, k_type: unknown, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: unknown, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, k: object | null, v: object | null, a: object | null, user_data: object) => object | null;
export type ForallMapFunc = (k_type: unknown, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: unknown, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, k: object | null, v: object | null, user_data: object) => boolean;
export type Task = (g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, user_data: object) => object | null;
export type FoldFunc = (a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null, a: object | null, user_data: object) => object | null;
export type ForallFunc = (g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null, user_data: object) => boolean;
export type UnfoldFunc = (a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, user_data: object) => Lazy | null;
export type StreamFunc = (g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, state: TraversableStream, g: Lazy | null, user_data: object) => TraversableStream;
export type MapFunc = (a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null, user_data: object) => object | null;
export type Predicate = (g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null, user_data: object) => boolean;
export type FlatMapFunc = (a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null, user_data: object) => Iterator;
/**
 * 
 */
export function functions_get_equal_func_for(t: unknown): [EqualDataFunc, object | null,GLib.DestroyNotify];
/**
 * 
 */
export function functions_get_hash_func_for(t: unknown): [HashDataFunc, object | null,GLib.DestroyNotify];
/**
 * 
 */
export function functions_get_compare_func_for(t: unknown): [GLib.CompareDataFunc, object | null,GLib.DestroyNotify];
/**
 * 
 */
export function hazard_pointer_policy_is_concrete(): boolean;
/**
 * 
 */
export function hazard_pointer_policy_is_blocking(): boolean;
/**
 * 
 */
export function hazard_pointer_policy_is_safe(): boolean;
/**
 * 
 */
export function hazard_pointer_policy_to_concrete(): HazardPointerPolicy;
/**
 * 
 */
export function task(g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, task: Task, task_target: object | null): Future;
/**
 * 
 */
export function async_task(_callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
/**
 * 
 */
export function async_task_finish(_res_: Gio.AsyncResult): void;
export enum FutureError {
    ABANDON_PROMISE = 0,
    EXCEPTION = 1,
}
export enum ConcurrentSetRangeType {
    HEAD = 0,
    TAIL = 1,
    BOUNDED = 2,
    EMPTY = 3,
}
export enum HazardPointerPolicy {
    DEFAULT = 0,
    THREAD_EXIT = 1,
    TRY_FREE = 2,
    FREE = 3,
    TRY_RELEASE = 4,
    RELEASE = 5,
}
export enum HazardPointerReleasePolicy {
    HELPER_THREAD = 0,
    MAIN_LOOP = 1,
}
export enum TraversableStream {
    YIELD = 0,
    CONTINUE = 1,
    END = 2,
    WAIT = 3,
}
export class AbstractBidirList  {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
readonly read_only_view: BidirList;
readonly priv: AbstractBidirListPrivate;
bidir_list_iterator(): BidirListIterator;
get_read_only_view(): BidirList;
}
export class AbstractBidirSortedSet  {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
readonly read_only_view: BidirSortedSet;
readonly priv: AbstractBidirSortedSetPrivate;
bidir_iterator(): BidirIterator;
get_read_only_view(): BidirSortedSet;
}
export class AbstractBidirSortedMap  {constructor(config?: properties);
k_type: unknown;
k_dup_func: GObject.BoxedCopyFunc;
k_destroy_func: GLib.DestroyNotify;
v_type: unknown;
v_dup_func: GObject.BoxedCopyFunc;
v_destroy_func: GLib.DestroyNotify;
readonly read_only_view: BidirSortedMap;
readonly priv: AbstractBidirSortedMapPrivate;
bidir_map_iterator(): BidirMapIterator;
get_read_only_view(): BidirSortedMap;
}
export class AbstractCollection  {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
readonly size: number;
readonly read_only: boolean;
readonly read_only_view: Collection;
readonly priv: AbstractCollectionPrivate;
contains(item: object | null): boolean;
add(item: object | null): boolean;
remove(item: object | null): boolean;
clear(): void;
iterator(): Iterator;
foreach(f: ForallFunc, f_target: object | null): boolean;
get_size(): number;
get_read_only(): boolean;
get_read_only_view(): Collection;
}
export class AbstractList  {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
readonly read_only_view: List;
readonly priv: AbstractListPrivate;
list_iterator(): ListIterator;
get(index: number): object | null;
set(index: number, item: object | null): void;
index_of(item: object | null): number;
insert(index: number, item: object | null): void;
remove_at(index: number): object | null;
slice(start: number, stop: number): List | null;
get_read_only_view(): List;
}
export class AbstractMap  {constructor(config?: properties);
k_type: unknown;
k_dup_func: GObject.BoxedCopyFunc;
k_destroy_func: GLib.DestroyNotify;
v_type: unknown;
v_dup_func: GObject.BoxedCopyFunc;
v_destroy_func: GLib.DestroyNotify;
readonly size: number;
readonly read_only: boolean;
readonly keys: Set;
readonly values: Collection;
readonly entries: Set;
readonly read_only_view: Map;
readonly priv: AbstractMapPrivate;
has_key(key: object | null): boolean;
has(key: object | null, value: object | null): boolean;
get(key: object | null): object | null;
set(key: object | null, value: object | null): void;
unset(key: object | null): [boolean, object | null];
map_iterator(): MapIterator;
clear(): void;
foreach(f: ForallFunc, f_target: object | null): boolean;
stream(a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc, f_target: object | null, f_target_destroy_notify: GLib.DestroyNotify): Iterator;
get_size(): number;
get_read_only(): boolean;
get_keys(): Set;
get_values(): Collection;
get_entries(): Set;
get_read_only_view(): Map;
}
export class AbstractMultiMap  {constructor(config?: properties);
k_type: unknown;
k_dup_func: GObject.BoxedCopyFunc;
k_destroy_func: GLib.DestroyNotify;
v_type: unknown;
v_dup_func: GObject.BoxedCopyFunc;
v_destroy_func: GLib.DestroyNotify;
readonly priv: AbstractMultiMapPrivate;
readonly _storage_map: Map;
create_value_storage(): Collection;
create_multi_key_set(): MultiSet;
get_value_equal_func(): [EqualDataFunc, object | null,GLib.DestroyNotify];
get_read_only_view(): MultiMap;
}
export class AbstractMultiSet  {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
readonly priv: AbstractMultiSetPrivate;
readonly _storage_map: Map;
get_read_only_view(): MultiSet;
}
export class AbstractQueue  {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
readonly capacity: number;
readonly remaining_capacity: number;
readonly is_full: boolean;
readonly priv: AbstractQueuePrivate;
peek(): object | null;
poll(): object | null;
get_capacity(): number;
get_remaining_capacity(): number;
get_is_full(): boolean;
}
export class AbstractSet  {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
readonly read_only_view: Set;
readonly priv: AbstractSetPrivate;
get_read_only_view(): Set;
}
export class AbstractSortedMap  {constructor(config?: properties);
k_type: unknown;
k_dup_func: GObject.BoxedCopyFunc;
k_destroy_func: GLib.DestroyNotify;
v_type: unknown;
v_dup_func: GObject.BoxedCopyFunc;
v_destroy_func: GLib.DestroyNotify;
readonly ascending_keys: SortedSet;
readonly ascending_entries: SortedSet;
readonly priv: AbstractSortedMapPrivate;
head_map(before: object | null): SortedMap;
tail_map(after: object | null): SortedMap;
sub_map(before: object | null, after: object | null): SortedMap;
get_ascending_keys(): SortedSet;
get_ascending_entries(): SortedSet;
}
export class AbstractSortedSet  {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
readonly read_only_view: SortedSet;
readonly priv: AbstractSortedSetPrivate;
first(): object | null;
last(): object | null;
iterator_at(element: object | null): Iterator | null;
lower(element: object | null): object | null;
higher(element: object | null): object | null;
floor(element: object | null): object | null;
ceil(element: object | null): object | null;
head_set(before: object | null): SortedSet;
tail_set(after: object | null): SortedSet;
sub_set(from: object | null, to: object | null): SortedSet;
get_read_only_view(): SortedSet;
}
export class ArrayList extends AbstractBidirList {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;static wrap(g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, items: object[], items_length1: number, equal_func: EqualDataFunc | null, equal_func_target: object | null, equal_func_target_destroy_notify: GLib.DestroyNotify): ArrayList;
add_all(collection: Collection): boolean;
get_equal_func(): [EqualDataFunc, object | null];
}
export class ArrayQueue extends AbstractQueue {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
readonly is_empty: boolean;
get_equal_func(): [EqualDataFunc, object | null];
get_is_empty(): boolean;
}
export class ConcurrentList extends AbstractList {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
readonly is_empty: boolean;
get_equal_func(): [EqualDataFunc, object | null];
get_is_empty(): boolean;
}
export class ConcurrentSet extends AbstractSortedSet {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
}
export class HashMap extends AbstractMap {constructor(config?: properties);
k_type: unknown;
k_dup_func: GObject.BoxedCopyFunc;
k_destroy_func: GLib.DestroyNotify;
v_type: unknown;
v_dup_func: GObject.BoxedCopyFunc;
v_destroy_func: GLib.DestroyNotify;
get_key_hash_func(): [HashDataFunc, object | null];
get_key_equal_func(): [EqualDataFunc, object | null];
get_value_equal_func(): [EqualDataFunc, object | null];
}
export class HashMultiMap extends AbstractMultiMap {constructor(config?: properties);
k_type: unknown;
k_dup_func: GObject.BoxedCopyFunc;
k_destroy_func: GLib.DestroyNotify;
v_type: unknown;
v_dup_func: GObject.BoxedCopyFunc;
v_destroy_func: GLib.DestroyNotify;
get_key_hash_func(): [HashDataFunc, object | null];
get_key_equal_func(): [EqualDataFunc, object | null];
get_value_hash_func(): [HashDataFunc, object | null];
get_value_equal_func(): [EqualDataFunc, object | null];
}
export class HashMultiSet extends AbstractMultiSet {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;static broken(g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, hash_func: HashDataFunc | null, hash_func_target: object | null, equal_func: EqualDataFunc | null, equal_func_target: object | null): HashMultiSet;
get_hash_func(): [HashDataFunc, object | null];
get_equal_func(): [EqualDataFunc, object | null];
}
export class HashSet extends AbstractSet {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
get_hash_func(): [HashDataFunc, object | null];
get_equal_func(): [EqualDataFunc, object | null];
}
export class Lazy  {constructor(config?: properties);
static from_value(g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, item: object | null): Lazy;
_eval(): void;
get(): object | null;
get_value(): object | null;
get_future(): Future | null;
}
export class LinkedList extends AbstractBidirList {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
first(): object | null;
last(): object | null;
get_equal_func(): [EqualDataFunc, object | null];
}
export class PriorityQueue extends AbstractQueue {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
offer(element: object | null): boolean;
drain(recipient: Collection, amount: number): number;
get_compare_func(): [GLib.CompareDataFunc, object | null];
}
export class Promise  {constructor(config?: properties);
set_value(value: object | null): void;
set_exception(exception: GLib.Error): void;
get_future(): Future;
}
export class TreeMap extends AbstractBidirSortedMap {constructor(config?: properties);
k_type: unknown;
k_dup_func: GObject.BoxedCopyFunc;
k_destroy_func: GLib.DestroyNotify;
v_type: unknown;
v_dup_func: GObject.BoxedCopyFunc;
v_destroy_func: GLib.DestroyNotify;
get_key_compare_func(): [GLib.CompareDataFunc, object | null];
get_value_equal_func(): [EqualDataFunc, object | null];
}
export class TreeMultiMap extends AbstractMultiMap {constructor(config?: properties);
k_type: unknown;
k_dup_func: GObject.BoxedCopyFunc;
k_destroy_func: GLib.DestroyNotify;
v_type: unknown;
v_dup_func: GObject.BoxedCopyFunc;
v_destroy_func: GLib.DestroyNotify;
get_key_compare_func(): [GLib.CompareDataFunc, object | null];
get_value_compare_func(): [GLib.CompareDataFunc, object | null];
}
export class TreeMultiSet extends AbstractMultiSet {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
get_compare_func(): [GLib.CompareDataFunc, object | null];
}
export class TreeSet extends AbstractBidirSortedSet {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
get_compare_func(): [GLib.CompareDataFunc, object | null];
}
export class UnrolledLinkedList extends AbstractBidirList {constructor(config?: properties);
g_type: unknown;
g_dup_func: GObject.BoxedCopyFunc;
g_destroy_func: GLib.DestroyNotify;
get_equal_func(): [EqualDataFunc, object | null];
}
export class MapEntry  {constructor(config?: properties);
k_type: unknown;
k_dup_func: GObject.BoxedCopyFunc;
k_destroy_func: GLib.DestroyNotify;
v_type: unknown;
v_dup_func: GObject.BoxedCopyFunc;
v_destroy_func: GLib.DestroyNotify;
readonly key: object;
value: object;
readonly read_only: boolean;
readonly priv: MapEntryPrivate;
get_key(): object | null;
get_value(): object | null;
set_value(value: object | null): void;
get_read_only(): boolean;
}
export class AbstractBidirListClass  {constructor(config?: properties);
readonly parent_class: AbstractListClass;
readonly bidir_list_iterator: unknown;
readonly reserved0: unknown;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
readonly reserved7: unknown;
readonly reserved8: unknown;
readonly reserved9: unknown;
}
export class AbstractBidirListPrivate  {constructor(config?: properties);
}
export class AbstractBidirSortedSetClass  {constructor(config?: properties);
readonly parent_class: AbstractSortedSetClass;
readonly bidir_iterator: unknown;
readonly reserved0: unknown;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
readonly reserved7: unknown;
readonly reserved8: unknown;
readonly reserved9: unknown;
}
export class AbstractBidirSortedSetPrivate  {constructor(config?: properties);
}
export class AbstractBidirSortedMapClass  {constructor(config?: properties);
readonly parent_class: AbstractSortedMapClass;
readonly bidir_map_iterator: unknown;
readonly reserved0: unknown;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
readonly reserved7: unknown;
readonly reserved8: unknown;
readonly reserved9: unknown;
}
export class AbstractBidirSortedMapPrivate  {constructor(config?: properties);
}
export class AbstractCollectionClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly contains: unknown;
readonly add: unknown;
readonly remove: unknown;
readonly clear: unknown;
readonly iterator: unknown;
readonly foreach: unknown;
readonly reserved0: unknown;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
readonly reserved7: unknown;
readonly reserved8: unknown;
readonly reserved9: unknown;
}
export class AbstractCollectionPrivate  {constructor(config?: properties);
}
export class AbstractListClass  {constructor(config?: properties);
readonly parent_class: AbstractCollectionClass;
readonly list_iterator: unknown;
readonly get: unknown;
readonly set: unknown;
readonly index_of: unknown;
readonly insert: unknown;
readonly remove_at: unknown;
readonly slice: unknown;
readonly reserved0: unknown;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
readonly reserved7: unknown;
readonly reserved8: unknown;
readonly reserved9: unknown;
}
export class AbstractListPrivate  {constructor(config?: properties);
}
export class AbstractMapClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly has_key: unknown;
readonly has: unknown;
readonly get: unknown;
readonly set: unknown;
readonly unset: unknown;
readonly map_iterator: unknown;
readonly clear: unknown;
readonly foreach: unknown;
readonly stream: unknown;
readonly reserved0: unknown;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
readonly reserved7: unknown;
readonly reserved8: unknown;
readonly reserved9: unknown;
}
export class AbstractMapPrivate  {constructor(config?: properties);
}
export class AbstractMultiMapClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly create_value_storage: unknown;
readonly create_multi_key_set: unknown;
readonly get_value_equal_func: unknown;
readonly reserved0: unknown;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
readonly reserved7: unknown;
readonly reserved8: unknown;
}
export class AbstractMultiMapPrivate  {constructor(config?: properties);
}
export class AbstractMultiSetClass  {constructor(config?: properties);
readonly parent_class: AbstractCollectionClass;
readonly reserved0: unknown;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
readonly reserved7: unknown;
readonly reserved8: unknown;
}
export class AbstractMultiSetPrivate  {constructor(config?: properties);
}
export class AbstractQueueClass  {constructor(config?: properties);
readonly parent_class: AbstractCollectionClass;
readonly peek: unknown;
readonly poll: unknown;
readonly reserved0: unknown;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
readonly reserved7: unknown;
readonly reserved8: unknown;
readonly reserved9: unknown;
}
export class AbstractQueuePrivate  {constructor(config?: properties);
}
export class AbstractSetClass  {constructor(config?: properties);
readonly parent_class: AbstractCollectionClass;
readonly reserved0: unknown;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
readonly reserved7: unknown;
readonly reserved8: unknown;
readonly reserved9: unknown;
}
export class AbstractSetPrivate  {constructor(config?: properties);
}
export class AbstractSortedMapClass  {constructor(config?: properties);
readonly parent_class: AbstractMapClass;
readonly head_map: unknown;
readonly tail_map: unknown;
readonly sub_map: unknown;
readonly reserved0: unknown;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
readonly reserved7: unknown;
readonly reserved8: unknown;
readonly reserved9: unknown;
}
export class AbstractSortedMapPrivate  {constructor(config?: properties);
}
export class AbstractSortedSetClass  {constructor(config?: properties);
readonly parent_class: AbstractSetClass;
readonly first: unknown;
readonly last: unknown;
readonly iterator_at: unknown;
readonly lower: unknown;
readonly higher: unknown;
readonly floor: unknown;
readonly ceil: unknown;
readonly head_set: unknown;
readonly tail_set: unknown;
readonly sub_set: unknown;
readonly reserved0: unknown;
readonly reserved1: unknown;
readonly reserved2: unknown;
readonly reserved3: unknown;
readonly reserved4: unknown;
readonly reserved5: unknown;
readonly reserved6: unknown;
readonly reserved7: unknown;
readonly reserved8: unknown;
readonly reserved9: unknown;
}
export class AbstractSortedSetPrivate  {constructor(config?: properties);
}
export class ArrayListClass  {constructor(config?: properties);
readonly parent_class: AbstractBidirListClass;
}
export class ArrayListPrivate  {constructor(config?: properties);
}
export class ArrayQueueClass  {constructor(config?: properties);
readonly parent_class: AbstractQueueClass;
}
export class ArrayQueuePrivate  {constructor(config?: properties);
}
export class ConcurrentListClass  {constructor(config?: properties);
readonly parent_class: AbstractListClass;
}
export class ConcurrentListPrivate  {constructor(config?: properties);
}
export class ConcurrentSetClass  {constructor(config?: properties);
readonly parent_class: AbstractSortedSetClass;
}
export class ConcurrentSetPrivate  {constructor(config?: properties);
}
export class HashMapClass  {constructor(config?: properties);
readonly parent_class: AbstractMapClass;
}
export class HashMapPrivate  {constructor(config?: properties);
}
export class HashMultiMapClass  {constructor(config?: properties);
readonly parent_class: AbstractMultiMapClass;
}
export class HashMultiMapPrivate  {constructor(config?: properties);
}
export class HashMultiSetClass  {constructor(config?: properties);
readonly parent_class: AbstractMultiSetClass;
}
export class HashMultiSetPrivate  {constructor(config?: properties);
}
export class HashSetClass  {constructor(config?: properties);
readonly parent_class: AbstractSetClass;
}
export class HashSetPrivate  {constructor(config?: properties);
}
export class HazardPointer  {constructor(config?: properties);
get(other_thread: boolean): object | null;
release(notify: GLib.DestroyNotify): void;
static get_hazard_pointer(g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: object | null, mask: number): [HazardPointer | null, number];
static get_pointer(g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: object | null, mask: number): [object | null, number];
static exchange_hazard_pointer(g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: object | null, new_ptr: object | null, mask: number, new_mask: number): [HazardPointer | null, number];
static set_pointer(g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: object | null, new_ptr: object | null, mask: number, new_mask: number): void;
static exchange_pointer(g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: object | null, new_ptr: object | null, mask: number, new_mask: number): [object | null, number];
static compare_and_exchange_pointer(g_type: unknown, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: object | null, old_ptr: object | null, _new_ptr: object | null, mask: number, old_mask: number, new_mask: number): boolean;
static set_default_policy(policy: HazardPointerPolicy): void;
static set_thread_exit_policy(policy: HazardPointerPolicy): void;
static set_release_policy(policy: HazardPointerReleasePolicy): boolean;
}
export class HazardPointerContext  {constructor(config?: properties);
try_free(): void;
free_all(): void;
try_release(): void;
release(): void;
}
export class LazyClass  {constructor(config?: properties);
readonly parent_class: GObject.TypeClass;
}
export class LazyPrivate  {constructor(config?: properties);
}
export class LinkedListClass  {constructor(config?: properties);
readonly parent_class: AbstractBidirListClass;
}
export class LinkedListPrivate  {constructor(config?: properties);
}
export class PriorityQueueClass  {constructor(config?: properties);
readonly parent_class: AbstractQueueClass;
}
export class PriorityQueuePrivate  {constructor(config?: properties);
}
export class PromiseClass  {constructor(config?: properties);
readonly parent_class: GObject.TypeClass;
}
export class PromisePrivate  {constructor(config?: properties);
}
export class TreeMapClass  {constructor(config?: properties);
readonly parent_class: AbstractBidirSortedMapClass;
}
export class TreeMapPrivate  {constructor(config?: properties);
}
export class TreeMultiMapClass  {constructor(config?: properties);
readonly parent_class: AbstractMultiMapClass;
}
export class TreeMultiMapPrivate  {constructor(config?: properties);
}
export class TreeMultiSetClass  {constructor(config?: properties);
readonly parent_class: AbstractMultiSetClass;
}
export class TreeMultiSetPrivate  {constructor(config?: properties);
}
export class TreeSetClass  {constructor(config?: properties);
readonly parent_class: AbstractBidirSortedSetClass;
}
export class TreeSetPrivate  {constructor(config?: properties);
}
export class UnrolledLinkedListClass  {constructor(config?: properties);
readonly parent_class: AbstractBidirListClass;
}
export class UnrolledLinkedListPrivate  {constructor(config?: properties);
}
export class BidirIteratorIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly previous: unknown;
readonly has_previous: unknown;
readonly first: unknown;
readonly last: unknown;
}
export class BidirListIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly bidir_list_iterator: unknown;
readonly get_read_only_view: unknown;
}
export class BidirListIteratorIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly insert: unknown;
}
export class BidirMapIteratorIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly previous: unknown;
readonly has_previous: unknown;
readonly first: unknown;
readonly last: unknown;
}
export class BidirSortedSetIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly bidir_iterator: unknown;
readonly get_read_only_view: unknown;
}
export class BidirSortedMapIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly bidir_map_iterator: unknown;
readonly get_read_only_view: unknown;
}
export class CollectionIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly contains: unknown;
readonly add: unknown;
readonly remove: unknown;
readonly clear: unknown;
readonly add_all: unknown;
readonly contains_all: unknown;
readonly remove_all: unknown;
readonly retain_all: unknown;
readonly to_array: unknown;
readonly add_all_array: unknown;
readonly contains_all_array: unknown;
readonly remove_all_array: unknown;
readonly add_all_iterator: unknown;
readonly contains_all_iterator: unknown;
readonly remove_all_iterator: unknown;
readonly get_size: unknown;
readonly get_is_empty: unknown;
readonly get_read_only: unknown;
readonly get_read_only_view: unknown;
}
export class ComparableIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly compare_to: unknown;
}
export class DequeIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly offer_head: unknown;
readonly peek_head: unknown;
readonly poll_head: unknown;
readonly drain_head: unknown;
readonly offer_tail: unknown;
readonly peek_tail: unknown;
readonly poll_tail: unknown;
readonly drain_tail: unknown;
}
export class FutureIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly wait: unknown;
readonly wait_until: unknown;
readonly wait_async: unknown;
readonly wait_finish: unknown;
readonly map: unknown;
readonly light_map: unknown;
readonly light_map_broken: unknown;
readonly zip: unknown;
readonly flat_map: unknown;
readonly get_value: unknown;
readonly get_ready: unknown;
readonly get_exception: unknown;
}
export class HashableIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly hash: unknown;
readonly equal_to: unknown;
}
export class IterableIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly iterator: unknown;
}
export class IteratorIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly next: unknown;
readonly has_next: unknown;
readonly get: unknown;
readonly remove: unknown;
readonly get_valid: unknown;
readonly get_read_only: unknown;
}
export class ListIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly list_iterator: unknown;
readonly get: unknown;
readonly set: unknown;
readonly index_of: unknown;
readonly insert: unknown;
readonly remove_at: unknown;
readonly slice: unknown;
readonly first: unknown;
readonly last: unknown;
readonly insert_all: unknown;
readonly sort: unknown;
readonly get_read_only_view: unknown;
}
export class ListIteratorIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly set: unknown;
readonly add: unknown;
readonly index: unknown;
}
export class MapIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly has_key: unknown;
readonly has: unknown;
readonly get: unknown;
readonly set: unknown;
readonly unset: unknown;
readonly clear: unknown;
readonly map_iterator: unknown;
readonly set_all: unknown;
readonly unset_all: unknown;
readonly has_all: unknown;
readonly get_size: unknown;
readonly get_is_empty: unknown;
readonly get_read_only: unknown;
readonly get_keys: unknown;
readonly get_values: unknown;
readonly get_entries: unknown;
readonly get_read_only_view: unknown;
}
export class MapEntryClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class MapEntryPrivate  {constructor(config?: properties);
}
export class MapIteratorIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly next: unknown;
readonly has_next: unknown;
readonly get_key: unknown;
readonly get_value: unknown;
readonly set_value: unknown;
readonly unset: unknown;
readonly fold: unknown;
readonly foreach: unknown;
readonly get_valid: unknown;
readonly get_mutable: unknown;
readonly get_read_only: unknown;
}
export class MultiMapIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_keys: unknown;
readonly get_all_keys: unknown;
readonly get_values: unknown;
readonly contains: unknown;
readonly get: unknown;
readonly set: unknown;
readonly remove: unknown;
readonly remove_all: unknown;
readonly clear: unknown;
readonly map_iterator: unknown;
readonly get_size: unknown;
readonly get_read_only: unknown;
readonly get_read_only_view: unknown;
}
export class MultiSetIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly count: unknown;
readonly get_read_only_view: unknown;
}
export class QueueIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly offer: unknown;
readonly peek: unknown;
readonly poll: unknown;
readonly drain: unknown;
readonly get_capacity: unknown;
readonly get_remaining_capacity: unknown;
readonly get_is_full: unknown;
}
export class SetIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_read_only_view: unknown;
}
export class SortedMapIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly head_map: unknown;
readonly tail_map: unknown;
readonly sub_map: unknown;
readonly get_ascending_keys: unknown;
readonly get_ascending_entries: unknown;
readonly get_read_only_view: unknown;
}
export class SortedSetIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly first: unknown;
readonly last: unknown;
readonly iterator_at: unknown;
readonly lower: unknown;
readonly higher: unknown;
readonly floor: unknown;
readonly ceil: unknown;
readonly head_set: unknown;
readonly tail_set: unknown;
readonly sub_set: unknown;
readonly get_read_only_view: unknown;
}
export class TraversableIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly foreach: unknown;
readonly stream: unknown;
readonly fold: unknown;
readonly map: unknown;
readonly scan: unknown;
readonly filter: unknown;
readonly chop: unknown;
readonly flat_map: unknown;
readonly tee: unknown;
readonly first_match: unknown;
readonly any_match: unknown;
readonly all_match: unknown;
readonly max: unknown;
readonly min: unknown;
readonly order_by: unknown;
readonly get_element_type: unknown;
}
export interface BidirIterator  {
previous(): boolean;
has_previous(): boolean;
first(): boolean;
last(): boolean;
}
export interface BidirList  {
readonly read_only_view: BidirList;
bidir_list_iterator(): BidirListIterator;
get_read_only_view(): BidirList;
}
export interface BidirListIterator  {
insert(item: object | null): void;
}
export interface BidirMapIterator  {
previous(): boolean;
has_previous(): boolean;
first(): boolean;
last(): boolean;
}
export interface BidirSortedSet  {
readonly read_only_view: BidirSortedSet;
bidir_iterator(): BidirIterator;
get_read_only_view(): BidirSortedSet;
}
export interface BidirSortedMap  {
readonly read_only_view: BidirSortedMap;
bidir_map_iterator(): BidirMapIterator;
get_read_only_view(): BidirSortedMap;
}
export interface Collection  {
readonly size: number;
readonly read_only: boolean;
readonly read_only_view: Collection;
contains(item: object | null): boolean;
add(item: object | null): boolean;
remove(item: object | null): boolean;
clear(): void;
add_all(collection: Collection): boolean;
contains_all(collection: Collection): boolean;
remove_all(collection: Collection): boolean;
retain_all(collection: Collection): boolean;
to_array(): [object[], number];
add_all_array(array: object[], array_length1: number): boolean;
contains_all_array(array: object[], array_length1: number): boolean;
remove_all_array(array: object[], array_length1: number): boolean;
add_all_iterator(iter: Iterator): boolean;
contains_all_iterator(iter: Iterator): boolean;
remove_all_iterator(iter: Iterator): boolean;
get_size(): number;
get_is_empty(): boolean;
get_read_only(): boolean;
get_read_only_view(): Collection;
}
export interface Comparable  {
compare_to(object: object | null): number;
}
export interface Deque  {
offer_head(element: object | null): boolean;
peek_head(): object | null;
poll_head(): object | null;
drain_head(recipient: Collection, amount: number): number;
offer_tail(element: object | null): boolean;
peek_tail(): object | null;
poll_tail(): object | null;
drain_tail(recipient: Collection, amount: number): number;
}
export interface Future  {
readonly ready: boolean;
readonly exception: GLib.Error_;
wait(): object | null;
wait_until(end_time: number): [boolean, object | null];
wait_async(_callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
wait_finish(_res_: Gio.AsyncResult): object | null;
map(a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: unknown, func_target: object | null, func_target_destroy_notify: GLib.DestroyNotify): Future;
light_map(a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: unknown, func_target: object | null, func_target_destroy_notify: GLib.DestroyNotify): Future;
light_map_broken(a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: unknown, func_target: object | null): Future;
zip(a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: unknown, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: unknown, zip_func_target: object | null, second: Future): Future;
flat_map(a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: unknown, func_target: object | null, func_target_destroy_notify: GLib.DestroyNotify): Future;
get_value(): object | null;
get_ready(): boolean;
get_exception(): GLib.Error_ | null;
}
export interface Hashable  {
hash(): number;
equal_to(object: object | null): boolean;
}
export interface Iterable  {
iterator(): Iterator;
}
export interface Iterator  {
readonly valid: boolean;
readonly read_only: boolean;
next(): boolean;
has_next(): boolean;
get(): object | null;
remove(): void;
get_valid(): boolean;
get_read_only(): boolean;
}
export interface List  {
readonly read_only_view: List;
list_iterator(): ListIterator;
get(index: number): object | null;
set(index: number, item: object | null): void;
index_of(item: object | null): number;
insert(index: number, item: object | null): void;
remove_at(index: number): object | null;
slice(start: number, stop: number): List | null;
first(): object | null;
last(): object | null;
insert_all(index: number, collection: Collection): void;
sort(compare_func: GLib.CompareDataFunc | null, compare_func_target: object | null, compare_func_target_destroy_notify: GLib.DestroyNotify): void;
get_read_only_view(): List;
}
export interface ListIterator  {
set(item: object | null): void;
add(item: object | null): void;
index(): number;
}
export interface Map  {
readonly size: number;
readonly read_only: boolean;
readonly keys: Set;
readonly values: Collection;
readonly entries: Set;
readonly read_only_view: Map;
has_key(key: object | null): boolean;
contains(key: object | null): boolean;
has(key: object | null, value: object | null): boolean;
get(key: object | null): object | null;
set(key: object | null, value: object | null): void;
unset(key: object | null): [boolean, object | null];
remove(key: object | null): [boolean, object | null];
clear(): void;
map_iterator(): MapIterator;
set_all(map: Map): void;
unset_all(map: Map): boolean;
remove_all(map: Map): boolean;
has_all(map: Map): boolean;
contains_all(map: Map): boolean;
get_size(): number;
get_is_empty(): boolean;
get_read_only(): boolean;
get_keys(): Set;
get_values(): Collection;
get_entries(): Set;
get_read_only_view(): Map;
get_key_type(): unknown;
get_value_type(): unknown;
}
export interface MapIterator  {
readonly valid: boolean;
readonly mutable: boolean;
readonly read_only: boolean;
next(): boolean;
has_next(): boolean;
get_key(): object | null;
get_value(): object | null;
set_value(value: object | null): void;
unset(): void;
fold(a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldMapFunc, f_target: object | null, seed: object | null): object | null;
foreach(f: ForallMapFunc, f_target: object | null): boolean;
get_valid(): boolean;
get_mutable(): boolean;
get_read_only(): boolean;
}
export interface MultiMap  {
readonly size: number;
readonly read_only: boolean;
get_keys(): Set;
get_all_keys(): MultiSet;
get_values(): Collection;
contains(key: object | null): boolean;
get(key: object | null): Collection;
set(key: object | null, value: object | null): void;
remove(key: object | null, value: object | null): boolean;
remove_all(key: object | null): boolean;
clear(): void;
map_iterator(): MapIterator;
get_size(): number;
get_read_only(): boolean;
get_key_type(): unknown;
get_value_type(): unknown;
get_read_only_view(): MultiMap;
}
export interface MultiSet  {
count(item: object | null): number;
get_read_only_view(): MultiSet;
}
export interface Queue  {
readonly capacity: number;
readonly remaining_capacity: number;
readonly is_full: boolean;
offer(element: object | null): boolean;
peek(): object | null;
poll(): object | null;
drain(recipient: Collection, amount: number): number;
get_capacity(): number;
get_remaining_capacity(): number;
get_is_full(): boolean;
}
export interface Set  {
readonly read_only_view: Set;
get_read_only_view(): Set;
}
export interface SortedMap  {
readonly ascending_keys: SortedSet;
readonly ascending_entries: SortedSet;
readonly read_only_view: SortedMap;
head_map(before: object | null): SortedMap;
tail_map(after: object | null): SortedMap;
sub_map(before: object | null, after: object | null): SortedMap;
get_ascending_keys(): SortedSet;
get_ascending_entries(): SortedSet;
get_read_only_view(): SortedMap;
}
export interface SortedSet  {
readonly read_only_view: SortedSet;
first(): object | null;
last(): object | null;
iterator_at(element: object | null): Iterator | null;
lower(element: object | null): object | null;
higher(element: object | null): object | null;
floor(element: object | null): object | null;
ceil(element: object | null): object | null;
head_set(before: object | null): SortedSet;
tail_set(after: object | null): SortedSet;
sub_set(from: object | null, to: object | null): SortedSet;
get_read_only_view(): SortedSet;
}
export interface Traversable  {
foreach(f: ForallFunc, f_target: object | null): boolean;
stream(a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc, f_target: object | null, f_target_destroy_notify: GLib.DestroyNotify): Iterator;
fold(a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, f_target: object | null, seed: object | null): object | null;
map(a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc, f_target: object | null): Iterator;
scan(a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, f_target: object | null, seed: object | null): Iterator;
filter(pred: Predicate, pred_target: object | null, pred_target_destroy_notify: GLib.DestroyNotify): Iterator;
chop(offset: number, length: number): Iterator;
flat_map(a_type: unknown, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc, f_target: object | null, f_target_destroy_notify: GLib.DestroyNotify): Iterator;
tee(forks: number): [Iterator[], number];
first_match(pred: Predicate, pred_target: object | null, pred_target_destroy_notify: GLib.DestroyNotify): object | null;
any_match(pred: Predicate, pred_target: object | null, pred_target_destroy_notify: GLib.DestroyNotify): boolean;
all_match(pred: Predicate, pred_target: object | null, pred_target_destroy_notify: GLib.DestroyNotify): boolean;
max(compare: GLib.CompareDataFunc, compare_target: object | null, compare_target_destroy_notify: GLib.DestroyNotify): object | null;
min(compare: GLib.CompareDataFunc, compare_target: object | null, compare_target_destroy_notify: GLib.DestroyNotify): object | null;
order_by(compare: GLib.CompareDataFunc | null, compare_target: object | null, compare_target_destroy_notify: GLib.DestroyNotify): Iterator;
get_element_type(): unknown;
}