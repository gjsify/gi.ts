
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gee from "gee";
import * as Gtk from "gtk";
import * as Ggit from "ggit";
import * as Gitg from "gitg";
import * as GitgExt from "gitgext";
/**
 * gitgext.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type ForeachCommitSelectionFunc = (object: Ggit.Commit, user_data: object) => boolean;
export type MessageCallback = (message: Message, user_data: object) => void;
export type RefNameEditingDone = (new_name: string, cancelled: boolean, user_data: object) => void;
export enum SelectionMode {
    NORMAL = 0,
    SELECTION = 1,
}
export enum ExternalChangeHint {
    NONE = 0,
    REFS = (null),
    INDEX = (null),
}
export class CommandLines extends GObject.Object {
    constructor(config?: properties);
    get_for(t_type: GType, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify): object | null;
    parse_finished(): void;
    apply(application: Application): void;
}
export class MessageBus extends GObject.Object {
    constructor(config?: properties);
    lookup(id: MessageId): GType;
    register(message_type: GType, id: MessageId): void;
    unregister(id: MessageId): void;
    unregister_all(object_path: string): void;
    is_registered(id: MessageId): boolean;
    connect(id: MessageId, callback: MessageCallback, callback_target: object | null, callback_target_destroy_notify: GLib.DestroyNotify): number;
    disconnect(id: number): void;
    block(id: number): void;
    unblock(id: number): void;
    send_message(message: Message): Message;
    static get_default(): MessageBus;
}
export class MessageId extends GObject.Object {
    constructor(config?: properties);
    object_path: string;
    method: string;
    readonly id: string;
    hash(): number;
    equal(other: MessageId): boolean;
    copy(): MessageId;
    get_object_path(): string;
    set_object_path(value: string): void;
    get_method(): string;
    set_method(value: string): void;
    get_id(): string;
    static valid_object_path(path: string): boolean;
}
export class Message  {
    constructor(config?: properties);
    id: MessageId;
    readonly priv: MessagePrivate;
    has(propname: string): boolean;
    get_id(): MessageId;
    set_id(value: MessageId): void;
    static type_has(type: GType, propname: string): boolean;
    static type_check(type: GType, propname: string, value_type: GType): boolean;
}
export class UI  {
    constructor(config?: properties);
}
export class UserQueryResponse extends GObject.Object {
    constructor(config?: properties);
}
export class UserQuery extends GObject.Object {
    constructor(config?: properties);
    title: string;
    message: string;
    message_type: Gtk.MessageType;
    default_response: Gtk.ResponseType;
    default_is_destructive: boolean;
    message_use_markup: boolean;static full(title: string, message: string, message_type: Gtk.MessageType, ___: any): UserQuery;
    get_responses(): [UserQueryResponse[], number];
    set_responses(value: UserQueryResponse[], value_length1: number): void;
    get_title(): string;
    set_title(value: string): void;
    get_message(): string;
    set_message(value: string): void;
    get_message_type(): Gtk.MessageType;
    set_message_type(value: Gtk.MessageType): void;
    get_default_response(): Gtk.ResponseType;
    set_default_response(value: Gtk.ResponseType): void;
    get_default_is_destructive(): boolean;
    set_default_is_destructive(value: boolean): void;
    get_message_use_markup(): boolean;
    set_message_use_markup(value: boolean): void;
}
export class CommandLinesPrivate  {
    constructor(config?: properties);
}
export class MessageBusPrivate  {
    constructor(config?: properties);
}
export class MessageIdPrivate  {
    constructor(config?: properties);
}
export class MessagePrivate  {
    constructor(config?: properties);
}
export class UIPrivate  {
    constructor(config?: properties);
}
export class UserQueryResponsePrivate  {
    constructor(config?: properties);
}
export class UserQueryPrivate  {
    constructor(config?: properties);
}
export interface Action  {
    populate_menu(menu: Gtk.Menu): void;
}
export interface Activity  {
    is_default_for(action: string): boolean;
}
export interface Application  {
    repository: Gitg.Repository;
    readonly message_bus: MessageBus;
    readonly current_activity: Activity;
    readonly environment: Gee.Map;
    readonly notifications: Notifications;
    busy: boolean;
    readonly remote_lookup: RemoteLookup;
    get_verified_committer(): Ggit.Signature | null;
    get_activity_by_id(id: string): Activity | null;
    set_activity_by_id(id: string): Activity | null;
    user_query(query: UserQuery): void;
    user_query_async(query: UserQuery, _callback_: Gio.AsyncReadyCallback | null, _callback__target: object | null): void;
    user_query_finish(_res_: Gio.AsyncResult): Gtk.ResponseType;
    show_infobar(primary_msg: string, secondary_msg: string, type: Gtk.MessageType): void;
    open_new(repository: Ggit.Repository, hint: string | null): Application;
    open_repository(path: Gio.File): void;
    get_repository(): Gitg.Repository | null;
    set_repository(value: Gitg.Repository | null): void;
    get_message_bus(): MessageBus;
    get_current_activity(): Activity | null;
    get_environment(): Gee.Map;
    get_notifications(): Notifications;
    get_busy(): boolean;
    set_busy(value: boolean): void;
    get_remote_lookup(): RemoteLookup;
}
export interface CommandLine  {
    get_option_group(): GLib.OptionGroup;
    parse_finished(): void;
    apply(application: Application): void;
}
export interface CommitAction  {
    action_interface: RefActionInterface;
    commit: Gitg.Commit;
    get_action_interface(): RefActionInterface;
    set_action_interface(value: RefActionInterface): void;
    get_commit(): Gitg.Commit;
    set_commit(value: Gitg.Commit): void;
}
export interface HistoryPanel  {
    history: History;
    get_history(): History | null;
    set_history(value: History | null): void;
}
export interface History  {
    foreach_selected(func: ForeachCommitSelectionFunc, func_target: object | null): void;
    select(commit: Gitg.Commit): void;
}
export interface Notification  {
    readonly widget: Gtk.Widget;
    get_widget(): Gtk.Widget | null;
}
export interface Notifications  {
    add(notification: Notification): void;
    remove(notification: Notification, delay: number): void;
}
export interface Preferences  {
    readonly id: string;
    readonly display_name: string;
    readonly widget: Gtk.Widget;
    get_id(): string;
    get_display_name(): string;
    get_widget(): Gtk.Widget;
}
export interface RefActionInterface  {
    application: Application;
    readonly references: Gee.List;
    add_ref(reference: Gitg.Ref): void;
    remove_ref(reference: Gitg.Ref): void;
    replace_ref(old_ref: Gitg.Ref, new_ref: Gitg.Ref): void;
    set_busy(reference: Gitg.Ref, busy: boolean): void;
    edit_ref_name(reference: Gitg.Ref, callback: RefNameEditingDone, callback_target: object | null, callback_target_destroy_notify: GLib.DestroyNotify): void;
    refresh(): void;
    get_application(): Application;
    set_application(value: Application): void;
    get_references(): Gee.List;
}
export interface RefAction  {
    action_interface: RefActionInterface;
    reference: Gitg.Ref;
    get_action_interface(): RefActionInterface;
    set_action_interface(value: RefActionInterface): void;
    get_reference(): Gitg.Ref;
    set_reference(value: Gitg.Ref): void;
}
export interface RemoteLookup  {
    lookup(name: string): Gitg.Remote | null;
}
export interface Searchable  {
    search_text: string;
    search_visible: boolean;
    readonly search_available: boolean;
    search_entry: Gtk.Entry;
    get_search_text(): string;
    set_search_text(value: string): void;
    get_search_visible(): boolean;
    set_search_visible(value: boolean): void;
    get_search_available(): boolean;
    set_search_entry(value: Gtk.Entry | null): void;
}
export interface Selectable  {
    selectable_mode: SelectionMode;
    readonly selectable_available: boolean;
    readonly selectable_mode_tooltip: string;
    readonly action_widget: Gtk.Widget;
    get_selectable_mode(): SelectionMode;
    set_selectable_mode(value: SelectionMode): void;
    get_selectable_available(): boolean;
    get_selectable_mode_tooltip(): string;
    get_action_widget(): Gtk.Widget | null;
}
export interface UIElement  {
    application: Application;
    readonly id: string;
    readonly display_name: string;
    readonly description: string;
    negotiate_order(other: UIElement): number;
    get_application(): Application | null;
    set_application(value: Application | null): void;
    get_id(): string;
    get_display_name(): string;
    get_description(): string;
    get_icon(): string | null;
    get_widget(): Gtk.Widget | null;
    get_available(): boolean;
    get_enabled(): boolean;
}