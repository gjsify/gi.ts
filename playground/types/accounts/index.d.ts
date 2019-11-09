
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Accounts from "accounts";
/**
 * accounts.d.ts
 */
type properties = { [key: string]: any };
export type AccountNotifyCb = (account: Account, key: string, user_data: object | null) => void;
export type AccountStoreCb = (account: Account, error: GLib.Error, user_data: object | null) => void;
export const MANAGER_INTERFACE: string;
export const MANAGER_OBJECT_PATH: string;
export const MANAGER_SERVICE_NAME: string;
/**
 * Return the libaccounts-glib error domain.
 */
export function accounts_error_quark(): GLib.Quark;
/**
 * Return the libaccounts-glib error domain.
 */
export function errors_quark(): GLib.Quark;
/**
 * Frees the list @list.
 */
export function provider_list_free(list: GLib.List): void;
/**
 * Frees the list @list.
 */
export function service_list_free(list: GLib.List): void;
/**
 * Frees the list @list.
 */
export function service_type_list_free(list: GLib.List): void;
export enum AccountsError {
    DB = 0,
    DISPOSED = 1,
    DELETED = 2,
    DB_LOCKED = 3,
    ACCOUNT_NOT_FOUND = 4,
    STORE_IN_PROGRESS = 5,
    READONLY = 6,
}
export enum Error {
    DB = 0,
    DISPOSED = 1,
    DELETED = 2,
    DB_LOCKED = 3,
    ACCOUNT_NOT_FOUND = 4,
}
export enum SettingSource {
    NONE = 0,
    ACCOUNT = 1,
    PROFILE = 2,
}
export type AccountId = number;
export class Account  {constructor(config?: properties);
readonly display_name: string;
readonly enabled: boolean;
foreign: boolean;
id: number;
manager: Manager;
provider: string;
readonly priv: AccountPrivate;
_delete(): void;
get_display_name(): string;
get_enabled(): boolean;
get_manager(): Manager;
get_provider_name(): string;
get_selected_service(): Service;
get_settings_iter(key_prefix: string | null): AccountSettingIter;
get_value(key: string, value: GObject.Value): [SettingSource, GObject.Value];
get_variant(key: string): [GLib.Variant, SettingSource | null];
list_enabled_services(): GLib.List;
list_services(): GLib.List;
list_services_by_type(service_type: string): GLib.List;
remove_watch(watch: AccountWatch): void;
select_service(service: Service | null): void;
set_display_name(display_name: string): void;
set_enabled(enabled: boolean): void;
set_value(key: string, value: GObject.Value | null): void;
set_variant(key: string, value: GLib.Variant | null): void;
settings_iter_init(iter: AccountSettingIter, key_prefix: string | null): void;
sign(key: string, token: string): void;
store(callback: AccountStoreCb, user_data: object | null): void;
store_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
store_blocking(): boolean;
store_finish(res: Gio.AsyncResult): boolean;
supports_service(service_type: string): boolean;
verify(key: string, token: string): boolean;
verify_with_tokens(key: string, tokens: string): boolean;
watch_dir(key_prefix: string, callback: AccountNotifyCb, user_data: object | null): AccountWatch;
watch_key(key: string, callback: AccountNotifyCb, user_data: object | null): AccountWatch;
}
export class AccountService extends GObject.Object {constructor(config?: properties);
account: Account;
readonly enabled: boolean;
service: Service;
get_account(): Account;
get_auth_data(): AuthData;
get_changed_fields(): string[];
get_enabled(): boolean;
get_service(): Service;
get_settings_iter(key_prefix: string | null): AccountSettingIter;
get_value(key: string, value: GObject.Value): [SettingSource, GObject.Value];
get_variant(key: string): [GLib.Variant, SettingSource | null];
set_value(key: string, value: GObject.Value | null): void;
set_variant(key: string, value: GLib.Variant | null): void;
settings_iter_init(iter: AccountSettingIter, key_prefix: string | null): void;
static settings_iter_next(iter: AccountSettingIter): [boolean, string,GObject.Value];
}
export class Manager extends GObject.Object {constructor(config?: properties);
abort_on_db_timeout: boolean;
db_timeout: number;
service_type: string;
use_dbus: boolean;static new_for_service_type(service_type: string): Manager;
create_account(provider_name: string): Account;
get_abort_on_db_timeout(): boolean;
get_account(account_id: AccountId): Account;
get_account_services(): GLib.List;
get_application(application_name: string): Application;
get_db_timeout(): number;
get_enabled_account_services(): GLib.List;
get_provider(provider_name: string): Provider;
get_service(service_name: string): Service;
get_service_type(): string;
list(): GLib.List;
list_applications_by_service(service: Service): GLib.List;
list_by_service_type(service_type: string): GLib.List;
list_enabled(): GLib.List;
list_enabled_by_service_type(service_type: string): GLib.List;
list_providers(): GLib.List;
list_service_types(): GLib.List;
list_services(): GLib.List;
list_services_by_application(application: Application): GLib.List;
list_services_by_type(service_type: string): GLib.List;
load_account(account_id: AccountId): Account;
load_service_type(service_type: string): ServiceType;
set_abort_on_db_timeout(abort: boolean): void;
set_db_timeout(timeout_ms: number): void;
vfunc_account_deleted(id: AccountId): void;
static list_free(list: GLib.List): void;
}
export class AccountClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _ag_reserved1: unknown;
readonly _ag_reserved2: unknown;
readonly _ag_reserved3: unknown;
readonly _ag_reserved4: unknown;
readonly _ag_reserved5: unknown;
readonly _ag_reserved6: unknown;
readonly _ag_reserved7: unknown;
}
export class AccountPrivate  {constructor(config?: properties);
}
export class AccountServiceClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _ag_reserved1: unknown;
readonly _ag_reserved2: unknown;
readonly _ag_reserved3: unknown;
readonly _ag_reserved4: unknown;
readonly _ag_reserved5: unknown;
readonly _ag_reserved6: unknown;
readonly _ag_reserved7: unknown;
}
export class AccountServicePrivate  {constructor(config?: properties);
}
export class AccountSettingIter  {constructor(config?: properties);
account: Account;
readonly iter1: GLib.HashTableIter;
readonly ptr1: object;
readonly ptr2: object;
readonly idx1: number;
readonly idx2: number;
free(): void;
get_next(): [boolean, string,GLib.Variant];
next(): [boolean, string,GObject.Value];
}
export class AccountWatch  {constructor(config?: properties);
}
export class Application  {constructor(config?: properties);
get_description(): string;
get_desktop_app_info(): Gio.DesktopAppInfo;
get_i18n_domain(): string;
get_name(): string;
get_service_usage(service: Service): string;
ref(): Application;
supports_service(service: Service): boolean;
unref(): void;
}
export class AuthData  {constructor(config?: properties);
get_credentials_id(): number;
get_login_parameters(extra_parameters: GLib.Variant | null): GLib.Variant;
get_mechanism(): string;
get_method(): string;
get_parameters(): GLib.HashTable;
insert_parameters(parameters: GLib.HashTable): void;
ref(): AuthData;
unref(): void;
}
export class ManagerClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly account_deleted: unknown;
readonly _ag_reserved2: unknown;
readonly _ag_reserved3: unknown;
readonly _ag_reserved4: unknown;
readonly _ag_reserved5: unknown;
readonly _ag_reserved6: unknown;
readonly _ag_reserved7: unknown;
}
export class ManagerPrivate  {constructor(config?: properties);
}
export class Provider  {constructor(config?: properties);
get_description(): string;
get_display_name(): string;
get_domains_regex(): string;
get_file_contents(contents: string): void;
get_i18n_domain(): string;
get_icon_name(): string;
get_name(): string;
get_plugin_name(): string;
get_single_account(): boolean;
match_domain(domain: string): boolean;
ref(): Provider;
unref(): void;
static list_free(list: GLib.List): void;
}
export class Service  {constructor(config?: properties);
get_description(): string;
get_display_name(): string;
get_file_contents(contents: string, data_offset: number): void;
get_i18n_domain(): string;
get_icon_name(): string;
get_name(): string;
get_provider(): string;
get_service_type(): string;
get_tags(): GLib.List;
has_tag(tag: string): boolean;
ref(): Service;
unref(): void;
static list_free(list: GLib.List): void;
}
export class ServiceType  {constructor(config?: properties);
get_description(): string;
get_display_name(): string;
get_file_contents(contents: string, len: number): void;
get_i18n_domain(): string;
get_icon_name(): string;
get_name(): string;
get_tags(): GLib.List;
has_tag(tag: string): boolean;
ref(): ServiceType;
unref(): void;
static list_free(list: GLib.List): void;
}