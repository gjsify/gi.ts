
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as NM from "nm";
import * as NMA from "nma";
import * as cairo from "cairo";
/**
 * nma.d.ts
 */
type properties = { [key: string]: any };
export type MobileWizardCallback = (self: MobileWizard, canceled: boolean, method: MobileWizardAccessMethod, user_data: object | null) => void;
export const BAR_CODE_SIZE: string;
export const BAR_CODE_TEXT: string;
export const BAR_CODE_WIDGET_CONNECTION: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
/**
 * Splits the input MCCMNC string into separate MCC and MNC strings.
 */
export function mobile_providers_split_3gpp_mcc_mnc(mccmnc: string): [boolean, string,string];
/**
 * Returns secret flags corresponding to the selected password storage me
 * nu
 * in the attached icon
 */
export function utils_menu_to_secret_flags(passwd_entry: Gtk.Widget): NM.SettingSecretFlags;
/**
 * Adds a secondary icon and creates a popup menu for password entry.
 * The active menu item is set up according to initial_flags, or
 * from @setting/@password_flags_name (if they are not NULL).
 * If the @setting/@password_flags_name are not NULL, secret flags will
 * be automatically updated in the setting when menu is changed.
 */
export function utils_setup_password_storage(passwd_entry: Gtk.Widget, initial_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string, with_not_required: boolean, ask_mode: boolean): void;
/**
 * Updates secret flags in the password storage popup menu and also
 * in the @setting (if @setting and @password_flags_name are not NULL).
 */
export function utils_update_password_storage(passwd_entry: Gtk.Widget, secret_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string): void;
export enum CertChooserFlags {
    NONE = 0,
    CERT = 1,
    PASSWORDS = 2,
    PEM = 4,
}
export enum MobileFamily {
    UNKNOWN = 0,
    Gjs_3GPP = 1,
    CDMA = 2,
}
export class BarCode extends GObject.Object {constructor(config?: properties);
readonly size: number;
text: string;
draw(cr: cairo.Context): void;
get_size(): number;
set_text(text: string): void;
}
export class BarCodeWidget extends Gtk.Box {constructor(config?: properties);
connection: NM.Connection;
}
export class CertChooser extends Gtk.Grid {constructor(config?: properties);
flags: number;
title: string;
add_to_size_group(group: Gtk.SizeGroup): void;
get_cert(): [string | null, NM.Setting8021xCKScheme];
get_cert_password(): string;
get_cert_password_flags(): NM.SettingSecretFlags;
get_cert_uri(): string | null;
get_key(): [string | null, NM.Setting8021xCKScheme];
get_key_password(): string;
get_key_password_flags(): NM.SettingSecretFlags;
get_key_uri(): string | null;
set_cert(value: string, scheme: NM.Setting8021xCKScheme): void;
set_cert_password(password: string): void;
set_cert_uri(uri: string): void;
set_key(value: string, scheme: NM.Setting8021xCKScheme): void;
set_key_password(password: string): void;
set_key_uri(uri: string): void;
setup_cert_password_storage(initial_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string, with_not_required: boolean, ask_mode: boolean): void;
setup_key_password_storage(initial_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string, with_not_required: boolean, ask_mode: boolean): void;
update_cert_password_storage(secret_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string): void;
update_key_password_storage(secret_flags: NM.SettingSecretFlags, setting: NM.Setting, password_flags_name: string): void;
validate(): boolean;
}
export class MobileProvidersDatabase extends GObject.Object {constructor(config?: properties);
country_codes: string;
service_providers: string;static new_finish(res: Gio.AsyncResult): MobileProvidersDatabase;
static new_sync(country_codes: string | null, service_providers: string | null, cancellable: Gio.Cancellable | null): MobileProvidersDatabase;
dump(): void;
get_countries(): GLib.HashTable;
lookup_3gpp_mcc_mnc(mccmnc: string): MobileProvider;
lookup_cdma_sid(sid: number): MobileProvider;
lookup_country(country_code: string): CountryInfo;
static _new(country_codes: string | null, service_providers: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class MobileWizard extends Gtk.Assistant {constructor(config?: properties);
destroy(): void;
present(): void;
}
export class VpnPasswordDialog extends Gtk.Dialog {constructor(config?: properties);
focus_password(): void;
focus_password_secondary(): void;
focus_password_ternary(): void;
get_password(): string;
get_password_secondary(): string;
get_password_ternary(): string;
run_and_block(): boolean;
set_password(password: string): void;
set_password_label(label: string): void;
set_password_secondary(password_secondary: string): void;
set_password_secondary_label(label: string): void;
set_password_ternary(password_ternary: string): void;
set_password_ternary_label(label: string): void;
set_show_password(show: boolean): void;
set_show_password_secondary(show: boolean): void;
set_show_password_ternary(show: boolean): void;
}
export class WifiDialog extends Gtk.Dialog {constructor(config?: properties);
static new_for_create(client: NM.Client): Gtk.Widget;
static new_for_hidden(client: NM.Client): Gtk.Widget;
static new_for_other(client: NM.Client): Gtk.Widget;
static new_for_secrets(client: NM.Client, connection: NM.Connection, secrets_setting_name: string, secrets_hints: string): Gtk.Widget;
get_connection(): [NM.Connection, NM.Device,NM.AccessPoint];
get_nag_ignored(): boolean;
nag_user(): Gtk.Widget;
set_nag_ignored(ignored: boolean): void;
}
export class BarCodeClass  {constructor(config?: properties);
}
export class BarCodeWidgetClass  {constructor(config?: properties);
}
export class CertChooserClass  {constructor(config?: properties);
}
export class CountryInfo  {constructor(config?: properties);
get_country_code(): string;
get_country_name(): string;
get_providers(): string[];
ref(): CountryInfo;
unref(): void;
}
export class MobileAccessMethod  {constructor(config?: properties);
get_3gpp_apn(): string;
get_dns(): string[];
get_family(): MobileFamily;
get_gateway(): string;
get_name(): string;
get_password(): string;
get_username(): string;
ref(): MobileAccessMethod;
unref(): void;
}
export class MobileProvider  {constructor(config?: properties);
get_3gpp_mcc_mnc(): string[];
get_cdma_sid(): number[];
get_methods(): string[];
get_name(): string;
ref(): MobileProvider;
unref(): void;
}
export class MobileProvidersDatabaseClass  {constructor(config?: properties);
}
export class MobileProvidersDatabasePrivate  {constructor(config?: properties);
}
export class MobileWizardAccessMethod  {constructor(config?: properties);
provider_name: string;
plan_name: string;
devtype: NM.DeviceModemCapabilities;
username: string;
password: string;
gsm_apn: string;
}
export class MobileWizardClass  {constructor(config?: properties);
}
export class VpnPasswordDialogClass  {constructor(config?: properties);
readonly parent_class: Gtk.DialogClass;
}
export class WifiDialogClass  {constructor(config?: properties);
}