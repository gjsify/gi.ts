
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as AccountsService from "accountsservice";
/**
 * accountsservice.d.ts
 */
type properties = { [key: string]: any };
/**
 * 
 */
export function user_manager_error_quark(): GLib.Quark;
export enum UserAccountType {
    STANDARD = 0,
    ADMINISTRATOR = 1,
}
export enum UserManagerError {
    FAILED = 0,
    USER_EXISTS = 1,
    USER_DOES_NOT_EXIST = 2,
    PERMISSION_DENIED = 3,
    NOT_SUPPORTED = 4,
}
export enum UserPasswordMode {
    REGULAR = 0,
    SET_AT_LOGIN = 1,
    NONE = 2,
}
export class User  {constructor(config?: properties);
readonly account_type: number;
readonly automatic_login: boolean;
readonly email: string;
readonly home_directory: string;
readonly icon_file: string;
readonly language: string;
readonly local_account: boolean;
readonly location: string;
readonly locked: boolean;
readonly login_frequency: number;
readonly login_history: GLib.Variant;
readonly login_time: number;
readonly nonexistent: boolean;
readonly password_hint: string;
readonly password_mode: number;
readonly real_name: string;
readonly shell: string;
readonly system_account: boolean;
readonly uid: number;
readonly user_name: string;
readonly x_session: string;
collate(user2: User): number;
get_account_type(): UserAccountType;
get_automatic_login(): boolean;
get_email(): string;
get_home_dir(): string;
get_icon_file(): string;
get_language(): string;
get_location(): string;
get_locked(): boolean;
get_login_frequency(): number;
get_login_history(): GLib.Variant;
get_login_time(): number;
get_num_sessions(): number;
get_num_sessions_anywhere(): number;
get_object_path(): string;
get_password_expiration_policy(expiration_time: number, last_change_time: number, min_days_between_changes: number, max_days_between_changes: number, days_to_warn: number, days_after_expiration_until_lock: number): void;
get_password_hint(): string;
get_password_mode(): UserPasswordMode;
get_primary_session_id(): string;
get_real_name(): string;
get_saved(): boolean;
get_session(): string;
get_session_type(): string;
get_shell(): string;
get_uid(): number;
get_user_name(): string;
get_x_session(): string;
is_loaded(): boolean;
is_local_account(): boolean;
is_logged_in(): boolean;
is_logged_in_anywhere(): boolean;
is_nonexistent(): boolean;
is_system_account(): boolean;
set_account_type(account_type: UserAccountType): void;
set_automatic_login(enabled: boolean): void;
set_email(email: string): void;
set_icon_file(icon_file: string): void;
set_language(language: string): void;
set_location(location: string): void;
set_locked(locked: boolean): void;
set_password(password: string, hint: string): void;
set_password_hint(hint: string): void;
set_password_mode(password_mode: UserPasswordMode): void;
set_real_name(real_name: string): void;
set_session(session: string): void;
set_session_type(session_type: string): void;
set_user_name(user_name: string): void;
set_x_session(x_session: string): void;
}
export class UserManager  {constructor(config?: properties);
exclude_usernames_list: object;
has_multiple_users: boolean;
include_usernames_list: object;
readonly is_loaded: boolean;
readonly deprecated: object;
activate_user_session(user: User): boolean;
cache_user(username: string): User;
cache_user_async(username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
cache_user_finish(result: Gio.AsyncResult): User;
can_switch(): boolean;
create_user(username: string, fullname: string, accounttype: UserAccountType): User;
create_user_async(username: string, fullname: string, accounttype: UserAccountType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
create_user_finish(result: Gio.AsyncResult): User;
delete_user(user: User, remove_files: boolean): boolean;
delete_user_async(user: User, remove_files: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
delete_user_finish(result: Gio.AsyncResult): boolean;
get_user(username: string): User;
get_user_by_id(id: number): User;
goto_login_session(): boolean;
list_users(): string[];
no_service(): boolean;
uncache_user(username: string): boolean;
uncache_user_async(username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
uncache_user_finish(result: Gio.AsyncResult): boolean;
static get_default(): UserManager;
}
export class UserClass  {constructor(config?: properties);
}
export class UserManagerClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly user_added: unknown;
readonly user_removed: unknown;
readonly user_is_logged_in_changed: unknown;
readonly user_changed: unknown;
}