
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Polkit from "polkit";
/**
 * polkit.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
/**
 * 
 */
export function error_quark(): GLib.Quark;
/**
 * Creates an object from @str that implements the #PolkitIdentity
 * interface.
 */
export function identity_from_string(str: string): Identity | null;
/**
 * 
 */
export function implicit_authorization_from_string(string: string, out_implicit_authorization: ImplicitAuthorization): boolean;
/**
 * 
 */
export function implicit_authorization_to_string(implicit_authorization: ImplicitAuthorization): string;
/**
 * Creates an object from @str that implements the #PolkitSubject
 * interface.
 */
export function subject_from_string(str: string): Subject;
export enum Error {
    FAILED = 0,
    CANCELLED = 1,
    NOT_SUPPORTED = 2,
    NOT_AUTHORIZED = 3,
}
export enum ImplicitAuthorization {
    UNKNOWN = -1,
    NOT_AUTHORIZED = 0,
    AUTHENTICATION_REQUIRED = 1,
    ADMINISTRATOR_AUTHENTICATION_REQUIRED = 2,
    AUTHENTICATION_REQUIRED_RETAINED = 3,
    ADMINISTRATOR_AUTHENTICATION_REQUIRED_RETAINED = 4,
    AUTHORIZED = 5,
}
export enum AuthorityFeatures {
    NONE = 0,
    TEMPORARY_AUTHORIZATION = 1,
}
export enum CheckAuthorizationFlags {
    NONE = 0,
    ALLOW_USER_INTERACTION = 1,
}
export class ActionDescription  {
    constructor(config?: properties);
    get_action_id(): string;
    get_annotation(key: string): string | null;
    get_annotation_keys(): string[];
    get_description(): string;
    get_icon_name(): string;
    get_implicit_active(): ImplicitAuthorization;
    get_implicit_any(): ImplicitAuthorization;
    get_implicit_inactive(): ImplicitAuthorization;
    get_message(): string;
    get_vendor_name(): string;
    get_vendor_url(): string;
}
export class Authority  {
    constructor(config?: properties);
    readonly backend_features: AuthorityFeatures;
    readonly backend_name: string;
    readonly backend_version: string;
    readonly owner: string;
    authentication_agent_response(cookie: string, identity: Identity, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    authentication_agent_response_finish(res: Gio.AsyncResult): boolean;
    authentication_agent_response_sync(cookie: string, identity: Identity, cancellable: Gio.Cancellable | null): boolean;
    check_authorization(subject: Subject, action_id: string, details: Details | null, flags: CheckAuthorizationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    check_authorization_finish(res: Gio.AsyncResult): AuthorizationResult;
    check_authorization_sync(subject: Subject, action_id: string, details: Details | null, flags: CheckAuthorizationFlags, cancellable: Gio.Cancellable | null): AuthorizationResult;
    enumerate_actions(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    enumerate_actions_finish(res: Gio.AsyncResult): GLib.List;
    enumerate_actions_sync(cancellable: Gio.Cancellable | null): GLib.List;
    enumerate_temporary_authorizations(subject: Subject, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    enumerate_temporary_authorizations_finish(res: Gio.AsyncResult): GLib.List;
    enumerate_temporary_authorizations_sync(subject: Subject, cancellable: Gio.Cancellable | null): GLib.List;
    get_backend_features(): AuthorityFeatures;
    get_backend_name(): string;
    get_backend_version(): string;
    get_owner(): string | null;
    register_authentication_agent(subject: Subject, locale: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    register_authentication_agent_finish(res: Gio.AsyncResult): boolean;
    register_authentication_agent_sync(subject: Subject, locale: string, object_path: string, cancellable: Gio.Cancellable | null): boolean;
    register_authentication_agent_with_options(subject: Subject, locale: string, object_path: string, options: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    register_authentication_agent_with_options_finish(res: Gio.AsyncResult): boolean;
    register_authentication_agent_with_options_sync(subject: Subject, locale: string, object_path: string, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;
    revoke_temporary_authorization_by_id(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    revoke_temporary_authorization_by_id_finish(res: Gio.AsyncResult): boolean;
    revoke_temporary_authorization_by_id_sync(id: string, cancellable: Gio.Cancellable | null): boolean;
    revoke_temporary_authorizations(subject: Subject, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    revoke_temporary_authorizations_finish(res: Gio.AsyncResult): boolean;
    revoke_temporary_authorizations_sync(subject: Subject, cancellable: Gio.Cancellable | null): boolean;
    unregister_authentication_agent(subject: Subject, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    unregister_authentication_agent_finish(res: Gio.AsyncResult): boolean;
    unregister_authentication_agent_sync(subject: Subject, object_path: string, cancellable: Gio.Cancellable | null): boolean;
    static get(): Authority;
    static get_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    static get_finish(res: Gio.AsyncResult): Authority;
    static get_sync(cancellable: Gio.Cancellable | null): Authority;
}
export class AuthorizationResult extends GObject.Object {
    constructor(config?: properties);
    get_details(): Details | null;
    get_dismissed(): boolean;
    get_is_authorized(): boolean;
    get_is_challenge(): boolean;
    get_retains_authorization(): boolean;
    get_temporary_authorization_id(): string | null;
}
export class Details extends GObject.Object {
    constructor(config?: properties);
    get_keys(): string[] | null;
    insert(key: string, value: string | null): void;
    lookup(key: string): string | null;
}
export class Permission extends Gio.Permission {
    constructor(config?: properties);
    action_id: string;
    subject: Subject;static new_finish(res: Gio.AsyncResult): Gio.Permission;
    static new_sync(action_id: string, subject: Subject | null, cancellable: Gio.Cancellable | null): Gio.Permission;
    get_action_id(): string;
    get_subject(): Subject;
    static _new(action_id: string, subject: Subject | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class SystemBusName  {
    constructor(config?: properties);
    name: string;
    get_name(): string;
    get_process_sync(cancellable: Gio.Cancellable | null): Subject | null;
    get_user_sync(cancellable: Gio.Cancellable | null): UnixUser | null;
    set_name(name: string): void;
    static _new(name: string): Subject;
}
export class TemporaryAuthorization  {
    constructor(config?: properties);
    get_action_id(): string;
    get_id(): string;
    get_subject(): Subject;
    get_time_expires(): number;
    get_time_obtained(): number;
}
export class UnixGroup  {
    constructor(config?: properties);
    gid: number;
    get_gid(): number;
    set_gid(gid: number): void;
    static _new(gid: number): Identity;
    static new_for_name(name: string): Identity;
}
export class UnixNetgroup  {
    constructor(config?: properties);
    name: string;
    get_name(): string;
    set_name(name: string): void;
    static _new(name: string): Identity;
}
export class UnixProcess  {
    constructor(config?: properties);
    pid: number;
    start_time: number;
    uid: number;
    get_owner(): number;
    get_pid(): number;
    get_start_time(): number;
    get_uid(): number;
    set_pid(pid: number): void;
    set_start_time(start_time: number): void;
    set_uid(uid: number): void;
    static _new(pid: number): Subject;
    static new_for_owner(pid: number, start_time: number, uid: number): Subject;
    static new_full(pid: number, start_time: number): Subject;
}
export class UnixSession  {
    constructor(config?: properties);
    pid: number;
    session_id: string;
    get_session_id(): string;
    set_session_id(session_id: string): void;
    static _new(session_id: string): Subject;
    static new_for_process(pid: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    static new_for_process_finish(res: Gio.AsyncResult): Subject | null;
    static new_for_process_sync(pid: number, cancellable: Gio.Cancellable | null): Subject | null;
}
export class UnixUser  {
    constructor(config?: properties);
    uid: number;
    get_name(): string | null;
    get_uid(): number;
    set_uid(uid: number): void;
    static _new(uid: number): Identity;
    static new_for_name(name: string): Identity | null;
}
export interface Identity  {
    equal(b: Identity): boolean;
    hash(): number;
    to_string(): string;
}
export interface Subject  {
    equal(b: Subject): boolean;
    exists(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    exists_finish(res: Gio.AsyncResult): boolean;
    exists_sync(cancellable: Gio.Cancellable | null): boolean;
    hash(): number;
    to_string(): string;
}