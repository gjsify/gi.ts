
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Soup from "soup";
/**
 * soupgnome.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const COOKIE_JAR_SQLITE_FILENAME: string;
/**
 * 
 */
export function gnome_features_2_26_get_type(): GType;
export class CookieJarSqlite extends Soup.CookieJarDB {
    constructor(config?: properties);
}
export class PasswordManagerGNOME  {
    constructor(config?: properties);
}
export class ProxyResolverGNOME  {
    constructor(config?: properties);
}