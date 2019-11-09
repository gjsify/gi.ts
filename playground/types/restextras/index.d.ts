
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Rest from "rest";
import * as libxml2 from "libxml2";
import * as RestExtras from "restextras";
/**
 * restextras.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type YoutubeProxyUploadCallback = (proxy: YoutubeProxy, payload: string, total: number, uploaded: number, error: GLib.Error, weak_object: GObject.Object, user_data: object | null) => void;
export class FlickrProxy extends Rest.Proxy {
    constructor(config?: properties);
    api_key: string;
    shared_secret: string;
    token: string;static new_with_token(api_key: string, shared_secret: string, token: string): Rest.Proxy;
    build_login_url(frob: string, perms: string): string;
    get_api_key(): string;
    get_shared_secret(): string;
    get_token(): string;
    new_upload(): FlickrProxyCall;
    new_upload_for_file(filename: string): FlickrProxyCall;
    set_token(token: string): void;
    sign(params: GLib.HashTable): string;
    static is_successful(root: Rest.XmlNode): boolean;
}
export class FlickrProxyCall  {
    constructor(config?: properties);
    upload: boolean;
}
export class LastfmProxy extends Rest.Proxy {
    constructor(config?: properties);
    api_key: string;
    secret: string;
    session_key: string;static new_with_session(api_key: string, secret: string, session_key: string): Rest.Proxy;
    build_login_url(token: string): string;
    get_api_key(): string;
    get_secret(): string;
    get_session_key(): string;
    set_session_key(session_key: string): void;
    sign(params: GLib.HashTable): string;
    static is_successful(root: Rest.XmlNode): boolean;
}
export class LastfmProxyCall  {
    constructor(config?: properties);
}
export class YoutubeProxy extends Rest.Proxy {
    constructor(config?: properties);
    developer_key: string;
    user_auth: string;static new_with_auth(developer_key: string, user_auth: string): Rest.Proxy;
    set_user_auth(user_auth: string): void;
    upload_async(filename: string, fields: GLib.HashTable, incomplete: boolean, callback: YoutubeProxyUploadCallback, weak_object: GObject.Object, user_data: object | null): boolean;
}
export class FlickrProxyPrivate  {
    constructor(config?: properties);
}
export class LastfmProxyPrivate  {
    constructor(config?: properties);
}
export class YoutubeProxyPrivate  {
    constructor(config?: properties);
}