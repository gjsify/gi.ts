
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Goa from "goa";
/**
 * goa.d.ts
 */
type properties = { [key: string]: any };
export const ERROR_NUM_ENTRIES: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAcco
 * unts.Account</link> D-Bus interface.
 */
export function account_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaAccount interface for a c
 * oncrete class.
 * The properties are overridden in the order they are defined.
 */
export function account_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAcc
 * ounts.Calendar</link> D-Bus interface.
 */
export function calendar_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaCalendar interface for a 
 * concrete class.
 * The properties are overridden in the order they are defined.
 */
export function calendar_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccount
 * s.Chat</link> D-Bus interface.
 */
export function chat_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaChat interface for a conc
 * rete class.
 * The properties are overridden in the order they are defined.
 */
export function chat_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Checks that the GOA library in use is compatible with the
 * given version. Generally you would pass in the constants
 * #GOA_MAJOR_VERSION, #GOA_MINOR_VERSION, #GOA_MICRO_VERSION
 * as the three arguments to this function; that produces
 * a check that the library in use is compatible with
 * the version of GOA the application or module was compiled
 * against.
 * Compatibility is defined by two things: first the version
 * of the running library is newer than the version
 * @required_major.@required_minor.@required_micro. Second
 * the running library must be binary compatible with the
 * version @required_major.@required_minor.@required_micro
 * (same major and minor version).
 */
export function check_version(required_major: number, required_minor: number, required_micro: number): string;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAcc
 * ounts.Contacts</link> D-Bus interface.
 */
export function contacts_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaContacts interface for a 
 * concrete class.
 * The properties are overridden in the order they are defined.
 */
export function contacts_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAc
 * counts.Documents</link> D-Bus interface.
 */
export function documents_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaDocuments interface for a
 *  concrete class.
 * The properties are overridden in the order they are defined.
 */
export function documents_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * 
 */
export function error_quark(): GLib.Quark;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAcc
 * ounts.Exchange</link> D-Bus interface.
 */
export function exchange_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaExchange interface for a 
 * concrete class.
 * The properties are overridden in the order they are defined.
 */
export function exchange_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccoun
 * ts.Files</link> D-Bus interface.
 */
export function files_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaFiles interface for a con
 * crete class.
 * The properties are overridden in the order they are defined.
 */
export function files_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccount
 * s.Mail</link> D-Bus interface.
 */
export function mail_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaMail interface for a conc
 * rete class.
 * The properties are overridden in the order they are defined.
 */
export function mail_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAcco
 * unts.Manager</link> D-Bus interface.
 */
export function manager_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaManager interface for a c
 * oncrete class.
 * The properties are overridden in the order they are defined.
 */
export function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccount
 * s.Maps</link> D-Bus interface.
 */
export function maps_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaMaps interface for a conc
 * rete class.
 * The properties are overridden in the order they are defined.
 */
export function maps_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.Online
 * Accounts.MediaServer</link> D-Bus interface.
 */
export function media_server_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaMediaServer interface for
 *  a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function media_server_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccoun
 * ts.Music</link> D-Bus interface.
 */
export function music_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaMusic interface for a con
 * crete class.
 * The properties are overridden in the order they are defined.
 */
export function music_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.Online
 * Accounts.OAuth2Based</link> D-Bus interface.
 */
export function oauth2_based_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaOAuth2Based interface for
 *  a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function oauth2_based_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineA
 * ccounts.OAuthBased</link> D-Bus interface.
 */
export function oauth_based_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaOAuthBased interface for 
 * a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function oauth_based_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.Onli
 * neAccounts.PasswordBased</link> D-Bus interface.
 */
export function password_based_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaPasswordBased interface f
 * or a concrete class.
 * The properties are overridden in the order they are defined.
 */
export function password_based_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccou
 * nts.Photos</link> D-Bus interface.
 */
export function photos_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaPhotos interface for a co
 * ncrete class.
 * The properties are overridden in the order they are defined.
 */
export function photos_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAcc
 * ounts.Printers</link> D-Bus interface.
 */
export function printers_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaPrinters interface for a 
 * concrete class.
 * The properties are overridden in the order they are defined.
 */
export function printers_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAc
 * counts.ReadLater</link> D-Bus interface.
 */
export function read_later_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaReadLater interface for a
 *  concrete class.
 * The properties are overridden in the order they are defined.
 */
export function read_later_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAc
 * counts.Ticketing</link> D-Bus interface.
 */
export function ticketing_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaTicketing interface for a
 *  concrete class.
 * The properties are overridden in the order they are defined.
 */
export function ticketing_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interf
 * ace-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccount
 * s.Todo</link> D-Bus interface.
 */
export function todo_interface_info(): Gio.DBusInterfaceInfo;
/**
 * Overrides all #GObject properties in the #GoaTodo interface for a conc
 * rete class.
 * The properties are overridden in the order they are defined.
 */
export function todo_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
export enum Error {
    FAILED = 0,
    NOT_SUPPORTED = 1,
    DIALOG_DISMISSED = 2,
    ACCOUNT_EXISTS = 3,
    NOT_AUTHORIZED = 4,
    SSL = 5,
}
export class AccountProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): AccountProxy;
static new_finish(...args: never[]): AccountProxy;
static new_for_bus_finish(res: Gio.AsyncResult): AccountProxy;
static new_for_bus_finish(...args: never[]): AccountProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): AccountProxy;
static new_for_bus_sync(...args: never[]): AccountProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): AccountProxy;
static new_sync(...args: never[]): AccountProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class AccountSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class CalendarProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): CalendarProxy;
static new_finish(...args: never[]): CalendarProxy;
static new_for_bus_finish(res: Gio.AsyncResult): CalendarProxy;
static new_for_bus_finish(...args: never[]): CalendarProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): CalendarProxy;
static new_for_bus_sync(...args: never[]): CalendarProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): CalendarProxy;
static new_sync(...args: never[]): CalendarProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class CalendarSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class ChatProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): ChatProxy;
static new_finish(...args: never[]): ChatProxy;
static new_for_bus_finish(res: Gio.AsyncResult): ChatProxy;
static new_for_bus_finish(...args: never[]): ChatProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ChatProxy;
static new_for_bus_sync(...args: never[]): ChatProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ChatProxy;
static new_sync(...args: never[]): ChatProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class ChatSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class Client extends GObject.Object {constructor(config?: properties);
readonly object_manager: Gio.DBusObjectManager;static new_finish(res: Gio.AsyncResult): Client;
static new_sync(cancellable: Gio.Cancellable | null): Client;
get_accounts(): GLib.List;
get_manager(): Manager;
get_object_manager(): Gio.DBusObjectManager;
lookup_by_id(id: string): Object;
static _new(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class ContactsProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): ContactsProxy;
static new_finish(...args: never[]): ContactsProxy;
static new_for_bus_finish(res: Gio.AsyncResult): ContactsProxy;
static new_for_bus_finish(...args: never[]): ContactsProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ContactsProxy;
static new_for_bus_sync(...args: never[]): ContactsProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ContactsProxy;
static new_sync(...args: never[]): ContactsProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class ContactsSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class DocumentsProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): DocumentsProxy;
static new_finish(...args: never[]): DocumentsProxy;
static new_for_bus_finish(res: Gio.AsyncResult): DocumentsProxy;
static new_for_bus_finish(...args: never[]): DocumentsProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): DocumentsProxy;
static new_for_bus_sync(...args: never[]): DocumentsProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): DocumentsProxy;
static new_sync(...args: never[]): DocumentsProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class DocumentsSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class ExchangeProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): ExchangeProxy;
static new_finish(...args: never[]): ExchangeProxy;
static new_for_bus_finish(res: Gio.AsyncResult): ExchangeProxy;
static new_for_bus_finish(...args: never[]): ExchangeProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ExchangeProxy;
static new_for_bus_sync(...args: never[]): ExchangeProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ExchangeProxy;
static new_sync(...args: never[]): ExchangeProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class ExchangeSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class FilesProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): FilesProxy;
static new_finish(...args: never[]): FilesProxy;
static new_for_bus_finish(res: Gio.AsyncResult): FilesProxy;
static new_for_bus_finish(...args: never[]): FilesProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): FilesProxy;
static new_for_bus_sync(...args: never[]): FilesProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): FilesProxy;
static new_sync(...args: never[]): FilesProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class FilesSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class MailProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): MailProxy;
static new_finish(...args: never[]): MailProxy;
static new_for_bus_finish(res: Gio.AsyncResult): MailProxy;
static new_for_bus_finish(...args: never[]): MailProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): MailProxy;
static new_for_bus_sync(...args: never[]): MailProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): MailProxy;
static new_sync(...args: never[]): MailProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class MailSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class ManagerProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): ManagerProxy;
static new_finish(...args: never[]): ManagerProxy;
static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy;
static new_for_bus_finish(...args: never[]): ManagerProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ManagerProxy;
static new_for_bus_sync(...args: never[]): ManagerProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ManagerProxy;
static new_sync(...args: never[]): ManagerProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class ManagerSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class MapsProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): MapsProxy;
static new_finish(...args: never[]): MapsProxy;
static new_for_bus_finish(res: Gio.AsyncResult): MapsProxy;
static new_for_bus_finish(...args: never[]): MapsProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): MapsProxy;
static new_for_bus_sync(...args: never[]): MapsProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): MapsProxy;
static new_sync(...args: never[]): MapsProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class MapsSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class MediaServerProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): MediaServerProxy;
static new_finish(...args: never[]): MediaServerProxy;
static new_for_bus_finish(res: Gio.AsyncResult): MediaServerProxy;
static new_for_bus_finish(...args: never[]): MediaServerProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): MediaServerProxy;
static new_for_bus_sync(...args: never[]): MediaServerProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): MediaServerProxy;
static new_sync(...args: never[]): MediaServerProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class MediaServerSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class MusicProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): MusicProxy;
static new_finish(...args: never[]): MusicProxy;
static new_for_bus_finish(res: Gio.AsyncResult): MusicProxy;
static new_for_bus_finish(...args: never[]): MusicProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): MusicProxy;
static new_for_bus_sync(...args: never[]): MusicProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): MusicProxy;
static new_sync(...args: never[]): MusicProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class MusicSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class OAuth2BasedProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): OAuth2BasedProxy;
static new_finish(...args: never[]): OAuth2BasedProxy;
static new_for_bus_finish(res: Gio.AsyncResult): OAuth2BasedProxy;
static new_for_bus_finish(...args: never[]): OAuth2BasedProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): OAuth2BasedProxy;
static new_for_bus_sync(...args: never[]): OAuth2BasedProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): OAuth2BasedProxy;
static new_sync(...args: never[]): OAuth2BasedProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class OAuth2BasedSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class OAuthBasedProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): OAuthBasedProxy;
static new_finish(...args: never[]): OAuthBasedProxy;
static new_for_bus_finish(res: Gio.AsyncResult): OAuthBasedProxy;
static new_for_bus_finish(...args: never[]): OAuthBasedProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): OAuthBasedProxy;
static new_for_bus_sync(...args: never[]): OAuthBasedProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): OAuthBasedProxy;
static new_sync(...args: never[]): OAuthBasedProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class OAuthBasedSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class ObjectManagerClient extends Gio.DBusObjectManagerClient {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): ObjectManagerClient;
static new_finish(...args: never[]): ObjectManagerClient;
static new_for_bus_finish(res: Gio.AsyncResult): ObjectManagerClient;
static new_for_bus_finish(...args: never[]): ObjectManagerClient;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ObjectManagerClient;
static new_for_bus_sync(...args: never[]): ObjectManagerClient;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ObjectManagerClient;
static new_sync(...args: never[]): ObjectManagerClient;
static get_proxy_type(manager: Gio.DBusObjectManagerClient, object_path: string, interface_name: string | null, user_data: object | null): unknown;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class ObjectProxy extends Gio.DBusObjectProxy {constructor(config?: properties);
}
export class ObjectSkeleton extends Gio.DBusObjectSkeleton {constructor(config?: properties);
set_account(interface_: Account | null): void;
set_calendar(interface_: Calendar | null): void;
set_chat(interface_: Chat | null): void;
set_contacts(interface_: Contacts | null): void;
set_documents(interface_: Documents | null): void;
set_exchange(interface_: Exchange | null): void;
set_files(interface_: Files | null): void;
set_mail(interface_: Mail | null): void;
set_manager(interface_: Manager | null): void;
set_maps(interface_: Maps | null): void;
set_media_server(interface_: MediaServer | null): void;
set_music(interface_: Music | null): void;
set_oauth2_based(interface_: OAuth2Based | null): void;
set_oauth_based(interface_: OAuthBased | null): void;
set_password_based(interface_: PasswordBased | null): void;
set_photos(interface_: Photos | null): void;
set_printers(interface_: Printers | null): void;
set_read_later(interface_: ReadLater | null): void;
set_ticketing(interface_: Ticketing | null): void;
set_todo(interface_: Todo | null): void;
}
export class PasswordBasedProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): PasswordBasedProxy;
static new_finish(...args: never[]): PasswordBasedProxy;
static new_for_bus_finish(res: Gio.AsyncResult): PasswordBasedProxy;
static new_for_bus_finish(...args: never[]): PasswordBasedProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): PasswordBasedProxy;
static new_for_bus_sync(...args: never[]): PasswordBasedProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): PasswordBasedProxy;
static new_sync(...args: never[]): PasswordBasedProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class PasswordBasedSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class PhotosProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): PhotosProxy;
static new_finish(...args: never[]): PhotosProxy;
static new_for_bus_finish(res: Gio.AsyncResult): PhotosProxy;
static new_for_bus_finish(...args: never[]): PhotosProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): PhotosProxy;
static new_for_bus_sync(...args: never[]): PhotosProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): PhotosProxy;
static new_sync(...args: never[]): PhotosProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class PhotosSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class PrintersProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): PrintersProxy;
static new_finish(...args: never[]): PrintersProxy;
static new_for_bus_finish(res: Gio.AsyncResult): PrintersProxy;
static new_for_bus_finish(...args: never[]): PrintersProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): PrintersProxy;
static new_for_bus_sync(...args: never[]): PrintersProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): PrintersProxy;
static new_sync(...args: never[]): PrintersProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class PrintersSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class ReadLaterProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): ReadLaterProxy;
static new_finish(...args: never[]): ReadLaterProxy;
static new_for_bus_finish(res: Gio.AsyncResult): ReadLaterProxy;
static new_for_bus_finish(...args: never[]): ReadLaterProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ReadLaterProxy;
static new_for_bus_sync(...args: never[]): ReadLaterProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ReadLaterProxy;
static new_sync(...args: never[]): ReadLaterProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class ReadLaterSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class TicketingProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): TicketingProxy;
static new_finish(...args: never[]): TicketingProxy;
static new_for_bus_finish(res: Gio.AsyncResult): TicketingProxy;
static new_for_bus_finish(...args: never[]): TicketingProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): TicketingProxy;
static new_for_bus_sync(...args: never[]): TicketingProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): TicketingProxy;
static new_sync(...args: never[]): TicketingProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class TicketingSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class TodoProxy extends Gio.DBusProxy {constructor(config?: properties);
static new_finish(res: Gio.AsyncResult): TodoProxy;
static new_finish(...args: never[]): TodoProxy;
static new_for_bus_finish(res: Gio.AsyncResult): TodoProxy;
static new_for_bus_finish(...args: never[]): TodoProxy;
static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): TodoProxy;
static new_for_bus_sync(...args: never[]): TodoProxy;
static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): TodoProxy;
static new_sync(...args: never[]): TodoProxy;
static _new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
_new(...args: never[]): never;
static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
new_for_bus(...args: never[]): never;
}
export class TodoSkeleton extends Gio.DBusInterfaceSkeleton {constructor(config?: properties);
}
export class AccountIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly handle_ensure_credentials: unknown;
readonly handle_remove: unknown;
readonly get_attention_needed: unknown;
readonly get_calendar_disabled: unknown;
readonly get_chat_disabled: unknown;
readonly get_contacts_disabled: unknown;
readonly get_documents_disabled: unknown;
readonly get_id: unknown;
readonly get_identity: unknown;
readonly get_is_temporary: unknown;
readonly get_mail_disabled: unknown;
readonly get_presentation_identity: unknown;
readonly get_provider_icon: unknown;
readonly get_provider_name: unknown;
readonly get_provider_type: unknown;
readonly get_ticketing_disabled: unknown;
readonly get_files_disabled: unknown;
readonly get_photos_disabled: unknown;
readonly get_printers_disabled: unknown;
readonly get_read_later_disabled: unknown;
readonly get_maps_disabled: unknown;
readonly get_is_locked: unknown;
readonly get_music_disabled: unknown;
readonly get_todo_disabled: unknown;
}
export class AccountProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class AccountProxyPrivate  {constructor(config?: properties);
}
export class AccountSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class AccountSkeletonPrivate  {constructor(config?: properties);
}
export class CalendarIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_accept_ssl_errors: unknown;
readonly get_uri: unknown;
}
export class CalendarProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class CalendarProxyPrivate  {constructor(config?: properties);
}
export class CalendarSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class CalendarSkeletonPrivate  {constructor(config?: properties);
}
export class ChatIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class ChatProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class ChatProxyPrivate  {constructor(config?: properties);
}
export class ChatSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class ChatSkeletonPrivate  {constructor(config?: properties);
}
export class ClientClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class ContactsIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_accept_ssl_errors: unknown;
readonly get_uri: unknown;
}
export class ContactsProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class ContactsProxyPrivate  {constructor(config?: properties);
}
export class ContactsSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class ContactsSkeletonPrivate  {constructor(config?: properties);
}
export class DocumentsIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class DocumentsProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class DocumentsProxyPrivate  {constructor(config?: properties);
}
export class DocumentsSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class DocumentsSkeletonPrivate  {constructor(config?: properties);
}
export class ExchangeIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_host: unknown;
readonly get_accept_ssl_errors: unknown;
}
export class ExchangeProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class ExchangeProxyPrivate  {constructor(config?: properties);
}
export class ExchangeSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class ExchangeSkeletonPrivate  {constructor(config?: properties);
}
export class FilesIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_accept_ssl_errors: unknown;
readonly get_uri: unknown;
}
export class FilesProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class FilesProxyPrivate  {constructor(config?: properties);
}
export class FilesSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class FilesSkeletonPrivate  {constructor(config?: properties);
}
export class MailIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_email_address: unknown;
readonly get_imap_host: unknown;
readonly get_imap_supported: unknown;
readonly get_imap_use_tls: unknown;
readonly get_imap_user_name: unknown;
readonly get_smtp_host: unknown;
readonly get_smtp_supported: unknown;
readonly get_smtp_use_tls: unknown;
readonly get_smtp_user_name: unknown;
readonly get_imap_accept_ssl_errors: unknown;
readonly get_imap_use_ssl: unknown;
readonly get_name: unknown;
readonly get_smtp_accept_ssl_errors: unknown;
readonly get_smtp_use_auth: unknown;
readonly get_smtp_use_ssl: unknown;
readonly get_smtp_auth_login: unknown;
readonly get_smtp_auth_plain: unknown;
readonly get_smtp_auth_xoauth2: unknown;
}
export class MailProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class MailProxyPrivate  {constructor(config?: properties);
}
export class MailSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class MailSkeletonPrivate  {constructor(config?: properties);
}
export class ManagerIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly handle_add_account: unknown;
}
export class ManagerProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class ManagerProxyPrivate  {constructor(config?: properties);
}
export class ManagerSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class ManagerSkeletonPrivate  {constructor(config?: properties);
}
export class MapsIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class MapsProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class MapsProxyPrivate  {constructor(config?: properties);
}
export class MapsSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class MapsSkeletonPrivate  {constructor(config?: properties);
}
export class MediaServerIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_dlna_supported: unknown;
readonly get_udn: unknown;
}
export class MediaServerProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class MediaServerProxyPrivate  {constructor(config?: properties);
}
export class MediaServerSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class MediaServerSkeletonPrivate  {constructor(config?: properties);
}
export class MusicIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class MusicProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class MusicProxyPrivate  {constructor(config?: properties);
}
export class MusicSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class MusicSkeletonPrivate  {constructor(config?: properties);
}
export class OAuth2BasedIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly handle_get_access_token: unknown;
readonly get_client_id: unknown;
readonly get_client_secret: unknown;
}
export class OAuth2BasedProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class OAuth2BasedProxyPrivate  {constructor(config?: properties);
}
export class OAuth2BasedSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class OAuth2BasedSkeletonPrivate  {constructor(config?: properties);
}
export class OAuthBasedIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly handle_get_access_token: unknown;
readonly get_consumer_key: unknown;
readonly get_consumer_secret: unknown;
}
export class OAuthBasedProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class OAuthBasedProxyPrivate  {constructor(config?: properties);
}
export class OAuthBasedSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class OAuthBasedSkeletonPrivate  {constructor(config?: properties);
}
export class ObjectIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class ObjectManagerClientClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusObjectManagerClientClass;
}
export class ObjectManagerClientPrivate  {constructor(config?: properties);
}
export class ObjectProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusObjectProxyClass;
}
export class ObjectProxyPrivate  {constructor(config?: properties);
}
export class ObjectSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusObjectSkeletonClass;
}
export class ObjectSkeletonPrivate  {constructor(config?: properties);
}
export class PasswordBasedIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly handle_get_password: unknown;
}
export class PasswordBasedProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class PasswordBasedProxyPrivate  {constructor(config?: properties);
}
export class PasswordBasedSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class PasswordBasedSkeletonPrivate  {constructor(config?: properties);
}
export class PhotosIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class PhotosProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class PhotosProxyPrivate  {constructor(config?: properties);
}
export class PhotosSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class PhotosSkeletonPrivate  {constructor(config?: properties);
}
export class PrintersIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class PrintersProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class PrintersProxyPrivate  {constructor(config?: properties);
}
export class PrintersSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class PrintersSkeletonPrivate  {constructor(config?: properties);
}
export class ReadLaterIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class ReadLaterProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class ReadLaterProxyPrivate  {constructor(config?: properties);
}
export class ReadLaterSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class ReadLaterSkeletonPrivate  {constructor(config?: properties);
}
export class TicketingIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly handle_get_ticket: unknown;
readonly get_details: unknown;
}
export class TicketingProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class TicketingProxyPrivate  {constructor(config?: properties);
}
export class TicketingSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class TicketingSkeletonPrivate  {constructor(config?: properties);
}
export class TodoIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class TodoProxyClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusProxyClass;
}
export class TodoProxyPrivate  {constructor(config?: properties);
}
export class TodoSkeletonClass  {constructor(config?: properties);
readonly parent_class: Gio.DBusInterfaceSkeletonClass;
}
export class TodoSkeletonPrivate  {constructor(config?: properties);
}
export interface Account  {
attention_needed: boolean;
calendar_disabled: boolean;
chat_disabled: boolean;
contacts_disabled: boolean;
documents_disabled: boolean;
files_disabled: boolean;
id: string;
identity: string;
is_locked: boolean;
is_temporary: boolean;
mail_disabled: boolean;
maps_disabled: boolean;
music_disabled: boolean;
photos_disabled: boolean;
presentation_identity: string;
printers_disabled: boolean;
provider_icon: string;
provider_name: string;
provider_type: string;
read_later_disabled: boolean;
ticketing_disabled: boolean;
todo_disabled: boolean;
call_ensure_credentials(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_ensure_credentials_finish(res: Gio.AsyncResult): [boolean, number | null];
call_ensure_credentials_sync(cancellable: Gio.Cancellable | null): [boolean, number | null];
call_remove(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_remove_finish(res: Gio.AsyncResult): boolean;
call_remove_sync(cancellable: Gio.Cancellable | null): boolean;
complete_ensure_credentials(invocation: Gio.DBusMethodInvocation, expires_in: number): void;
complete_remove(invocation: Gio.DBusMethodInvocation): void;
dup_id(): string | null;
dup_identity(): string | null;
dup_presentation_identity(): string | null;
dup_provider_icon(): string | null;
dup_provider_name(): string | null;
dup_provider_type(): string | null;
get_attention_needed(): boolean;
get_calendar_disabled(): boolean;
get_chat_disabled(): boolean;
get_contacts_disabled(): boolean;
get_documents_disabled(): boolean;
get_files_disabled(): boolean;
get_id(): string | null;
get_identity(): string | null;
get_is_locked(): boolean;
get_is_temporary(): boolean;
get_mail_disabled(): boolean;
get_maps_disabled(): boolean;
get_music_disabled(): boolean;
get_photos_disabled(): boolean;
get_presentation_identity(): string | null;
get_printers_disabled(): boolean;
get_provider_icon(): string | null;
get_provider_name(): string | null;
get_provider_type(): string | null;
get_read_later_disabled(): boolean;
get_ticketing_disabled(): boolean;
get_todo_disabled(): boolean;
set_attention_needed(value: boolean): void;
set_calendar_disabled(value: boolean): void;
set_chat_disabled(value: boolean): void;
set_contacts_disabled(value: boolean): void;
set_documents_disabled(value: boolean): void;
set_files_disabled(value: boolean): void;
set_id(value: string): void;
set_identity(value: string): void;
set_is_locked(value: boolean): void;
set_is_temporary(value: boolean): void;
set_mail_disabled(value: boolean): void;
set_maps_disabled(value: boolean): void;
set_music_disabled(value: boolean): void;
set_photos_disabled(value: boolean): void;
set_presentation_identity(value: string): void;
set_printers_disabled(value: boolean): void;
set_provider_icon(value: string): void;
set_provider_name(value: string): void;
set_provider_type(value: string): void;
set_read_later_disabled(value: boolean): void;
set_ticketing_disabled(value: boolean): void;
set_todo_disabled(value: boolean): void;
}
export interface Calendar  {
accept_ssl_errors: boolean;
uri: string;
dup_uri(): string | null;
get_accept_ssl_errors(): boolean;
get_uri(): string | null;
set_accept_ssl_errors(value: boolean): void;
set_uri(value: string): void;
}
export interface Chat  {
}
export interface Contacts  {
accept_ssl_errors: boolean;
uri: string;
dup_uri(): string | null;
get_accept_ssl_errors(): boolean;
get_uri(): string | null;
set_accept_ssl_errors(value: boolean): void;
set_uri(value: string): void;
}
export interface Documents  {
}
export interface Exchange  {
accept_ssl_errors: boolean;
host: string;
dup_host(): string | null;
get_accept_ssl_errors(): boolean;
get_host(): string | null;
set_accept_ssl_errors(value: boolean): void;
set_host(value: string): void;
}
export interface Files  {
accept_ssl_errors: boolean;
uri: string;
dup_uri(): string | null;
get_accept_ssl_errors(): boolean;
get_uri(): string | null;
set_accept_ssl_errors(value: boolean): void;
set_uri(value: string): void;
}
export interface Mail  {
email_address: string;
imap_accept_ssl_errors: boolean;
imap_host: string;
imap_supported: boolean;
imap_use_ssl: boolean;
imap_use_tls: boolean;
imap_user_name: string;
name: string;
smtp_accept_ssl_errors: boolean;
smtp_auth_login: boolean;
smtp_auth_plain: boolean;
smtp_auth_xoauth2: boolean;
smtp_host: string;
smtp_supported: boolean;
smtp_use_auth: boolean;
smtp_use_ssl: boolean;
smtp_use_tls: boolean;
smtp_user_name: string;
dup_email_address(): string | null;
dup_imap_host(): string | null;
dup_imap_user_name(): string | null;
dup_name(): string | null;
dup_smtp_host(): string | null;
dup_smtp_user_name(): string | null;
get_email_address(): string | null;
get_imap_accept_ssl_errors(): boolean;
get_imap_host(): string | null;
get_imap_supported(): boolean;
get_imap_use_ssl(): boolean;
get_imap_use_tls(): boolean;
get_imap_user_name(): string | null;
get_name(): string | null;
get_smtp_accept_ssl_errors(): boolean;
get_smtp_auth_login(): boolean;
get_smtp_auth_plain(): boolean;
get_smtp_auth_xoauth2(): boolean;
get_smtp_host(): string | null;
get_smtp_supported(): boolean;
get_smtp_use_auth(): boolean;
get_smtp_use_ssl(): boolean;
get_smtp_use_tls(): boolean;
get_smtp_user_name(): string | null;
set_email_address(value: string): void;
set_imap_accept_ssl_errors(value: boolean): void;
set_imap_host(value: string): void;
set_imap_supported(value: boolean): void;
set_imap_use_ssl(value: boolean): void;
set_imap_use_tls(value: boolean): void;
set_imap_user_name(value: string): void;
set_name(value: string): void;
set_smtp_accept_ssl_errors(value: boolean): void;
set_smtp_auth_login(value: boolean): void;
set_smtp_auth_plain(value: boolean): void;
set_smtp_auth_xoauth2(value: boolean): void;
set_smtp_host(value: string): void;
set_smtp_supported(value: boolean): void;
set_smtp_use_auth(value: boolean): void;
set_smtp_use_ssl(value: boolean): void;
set_smtp_use_tls(value: boolean): void;
set_smtp_user_name(value: string): void;
}
export interface Manager  {
call_add_account(arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_add_account_finish(res: Gio.AsyncResult): [boolean, string | null];
call_add_account_sync(arg_provider: string, arg_identity: string, arg_presentation_identity: string, arg_credentials: GLib.Variant, arg_details: GLib.Variant, cancellable: Gio.Cancellable | null): [boolean, string | null];
complete_add_account(invocation: Gio.DBusMethodInvocation, account_object_path: string): void;
}
export interface Maps  {
}
export interface MediaServer  {
dlna_supported: boolean;
udn: string;
dup_udn(): string | null;
get_dlna_supported(): boolean;
get_udn(): string | null;
set_dlna_supported(value: boolean): void;
set_udn(value: string): void;
}
export interface Music  {
}
export interface OAuth2Based  {
client_id: string;
client_secret: string;
call_get_access_token(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_get_access_token_finish(res: Gio.AsyncResult): [boolean, string | null,number | null];
call_get_access_token_sync(cancellable: Gio.Cancellable | null): [boolean, string | null,number | null];
complete_get_access_token(invocation: Gio.DBusMethodInvocation, access_token: string, expires_in: number): void;
dup_client_id(): string | null;
dup_client_secret(): string | null;
get_client_id(): string | null;
get_client_secret(): string | null;
set_client_id(value: string): void;
set_client_secret(value: string): void;
}
export interface OAuthBased  {
consumer_key: string;
consumer_secret: string;
call_get_access_token(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_get_access_token_finish(res: Gio.AsyncResult): [boolean, string | null,string | null,number | null];
call_get_access_token_sync(cancellable: Gio.Cancellable | null): [boolean, string | null,string | null,number | null];
complete_get_access_token(invocation: Gio.DBusMethodInvocation, access_token: string, access_token_secret: string, expires_in: number): void;
dup_consumer_key(): string | null;
dup_consumer_secret(): string | null;
get_consumer_key(): string | null;
get_consumer_secret(): string | null;
set_consumer_key(value: string): void;
set_consumer_secret(value: string): void;
}
export interface Object  {
account: Account;
calendar: Calendar;
chat: Chat;
contacts: Contacts;
documents: Documents;
exchange: Exchange;
files: Files;
mail: Mail;
manager: Manager;
maps: Maps;
media_server: MediaServer;
music: Music;
oauth_based: OAuthBased;
oauth2_based: OAuth2Based;
password_based: PasswordBased;
photos: Photos;
printers: Printers;
read_later: ReadLater;
ticketing: Ticketing;
todo: Todo;
get_account(): Account | null;
get_calendar(): Calendar | null;
get_chat(): Chat | null;
get_contacts(): Contacts | null;
get_documents(): Documents | null;
get_exchange(): Exchange | null;
get_files(): Files | null;
get_mail(): Mail | null;
get_manager(): Manager | null;
get_maps(): Maps | null;
get_media_server(): MediaServer | null;
get_music(): Music | null;
get_oauth2_based(): OAuth2Based | null;
get_oauth_based(): OAuthBased | null;
get_password_based(): PasswordBased | null;
get_photos(): Photos | null;
get_printers(): Printers | null;
get_read_later(): ReadLater | null;
get_ticketing(): Ticketing | null;
get_todo(): Todo | null;
peek_account(): Account | null;
peek_calendar(): Calendar | null;
peek_chat(): Chat | null;
peek_contacts(): Contacts | null;
peek_documents(): Documents | null;
peek_exchange(): Exchange | null;
peek_files(): Files | null;
peek_mail(): Mail | null;
peek_manager(): Manager | null;
peek_maps(): Maps | null;
peek_media_server(): MediaServer | null;
peek_music(): Music | null;
peek_oauth2_based(): OAuth2Based | null;
peek_oauth_based(): OAuthBased | null;
peek_password_based(): PasswordBased | null;
peek_photos(): Photos | null;
peek_printers(): Printers | null;
peek_read_later(): ReadLater | null;
peek_ticketing(): Ticketing | null;
peek_todo(): Todo | null;
}
export interface PasswordBased  {
call_get_password(arg_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_get_password_finish(res: Gio.AsyncResult): [boolean, string | null];
call_get_password_sync(arg_id: string, cancellable: Gio.Cancellable | null): [boolean, string | null];
complete_get_password(invocation: Gio.DBusMethodInvocation, password: string): void;
}
export interface Photos  {
}
export interface Printers  {
}
export interface ReadLater  {
}
export interface Ticketing  {
details: GLib.Variant;
call_get_ticket(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_get_ticket_finish(res: Gio.AsyncResult): boolean;
call_get_ticket_sync(cancellable: Gio.Cancellable | null): boolean;
complete_get_ticket(invocation: Gio.DBusMethodInvocation): void;
dup_details(): GLib.Variant | null;
get_details(): GLib.Variant | null;
set_details(value: GLib.Variant): void;
}
export interface Todo  {
}