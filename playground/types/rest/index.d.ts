
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Soup from "soup";
import * as Rest from "rest";
/**
 * rest.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type OAuthProxyAuthCallback = (proxy: OAuthProxy, error: GLib.Error, weak_object: GObject.Object, userdata: object | null) => void;
export type ProxyCallAsyncCallback = (call: ProxyCall, error: GLib.Error, weak_object: GObject.Object, userdata: object | null) => void;
export type ProxyCallContinuousCallback = (call: ProxyCall, buf: string, len: number, error: GLib.Error, weak_object: GObject.Object, userdata: object | null) => void;
export type ProxyCallUploadCallback = (call: ProxyCall, total: number, uploaded: number, error: GLib.Error, weak_object: GObject.Object, userdata: object | null) => void;
/**
 * 
 */
export function hmac_sha1(key: string, message: string): string;
/**
 * 
 */
export function proxy_call_error_quark(): GLib.Quark;
/**
 * 
 */
export function proxy_error_quark(): GLib.Quark;
export enum MemoryUse {
    STATIC = 0,
    TAKE = 1,
    COPY = 2,
}
export enum OAuthSignatureMethod {
    PLAINTEXT = 0,
    HMAC_SHA1 = 1,
}
export enum ProxyCallError {
    FAILED = 0,
}
export enum ProxyError {
    CANCELLED = 1,
    RESOLUTION = 2,
    CONNECTION = 3,
    SSL = 4,
    IO = 5,
    FAILED = 6,
    HTTP_MULTIPLE_CHOICES = 300,
    HTTP_MOVED_PERMANENTLY = 301,
    HTTP_FOUND = 302,
    HTTP_SEE_OTHER = 303,
    HTTP_NOT_MODIFIED = 304,
    HTTP_USE_PROXY = 305,
    HTTP_THREEOHSIX = 306,
    HTTP_TEMPORARY_REDIRECT = 307,
    HTTP_BAD_REQUEST = 400,
    HTTP_UNAUTHORIZED = 401,
    HTTP_FOUROHTWO = 402,
    HTTP_FORBIDDEN = 403,
    HTTP_NOT_FOUND = 404,
    HTTP_METHOD_NOT_ALLOWED = 405,
    HTTP_NOT_ACCEPTABLE = 406,
    HTTP_PROXY_AUTHENTICATION_REQUIRED = 407,
    HTTP_REQUEST_TIMEOUT = 408,
    HTTP_CONFLICT = 409,
    HTTP_GONE = 410,
    HTTP_LENGTH_REQUIRED = 411,
    HTTP_PRECONDITION_FAILED = 412,
    HTTP_REQUEST_ENTITY_TOO_LARGE = 413,
    HTTP_REQUEST_URI_TOO_LONG = 414,
    HTTP_UNSUPPORTED_MEDIA_TYPE = 415,
    HTTP_REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    HTTP_EXPECTATION_FAILED = 417,
    HTTP_INTERNAL_SERVER_ERROR = 500,
    HTTP_NOT_IMPLEMENTED = 501,
    HTTP_BAD_GATEWAY = 502,
    HTTP_SERVICE_UNAVAILABLE = 503,
    HTTP_GATEWAY_TIMEOUT = 504,
    HTTP_HTTP_VERSION_NOT_SUPPORTED = 505,
}
export class OAuth2Proxy extends Proxy {
    constructor(config?: properties);
    access_token: string;
    auth_endpoint: string;
    client_id: string;static new_with_token(client_id: string, access_token: string, auth_endpoint: string, url_format: string, binding_required: boolean): Proxy;
    build_login_url(redirect_uri: string): string;
    build_login_url_full(redirect_uri: string, extra_params: GLib.HashTable): string;
    get_access_token(): string;
    set_access_token(access_token: string): void;
    static extract_access_token(url: string): string;
}
export class OAuth2ProxyCall  {
    constructor(config?: properties);
}
export class OAuthProxy extends Proxy {
    constructor(config?: properties);
    consumer_key: string;
    consumer_secret: string;
    signature_host: string;
    signature_method: OAuthSignatureMethod;
    token: string;
    token_secret: string;static new_with_token(consumer_key: string, consumer_secret: string, token: string, token_secret: string, url_format: string, binding_required: boolean): Proxy;
    access_token(_function: string, verifier: string): boolean;
    access_token_async(_function: string, verifier: string, callback: OAuthProxyAuthCallback, weak_object: GObject.Object, user_data: object | null): boolean;
    auth_step(_function: string): boolean;
    auth_step_async(_function: string, callback: OAuthProxyAuthCallback, weak_object: GObject.Object, user_data: object | null): boolean;
    get_signature_host(): string;
    get_token(): string;
    get_token_secret(): string;
    is_oauth10a(): boolean;
    new_echo_proxy(service_url: string, url_format: string, binding_required: boolean): Proxy;
    request_token(_function: string, callback_uri: string): boolean;
    request_token_async(_function: string, callback_uri: string, callback: OAuthProxyAuthCallback, weak_object: GObject.Object, user_data: object | null): boolean;
    set_signature_host(signature_host: string): void;
    set_token(token: string): void;
    set_token_secret(token_secret: string): void;
}
export class OAuthProxyCall  {
    constructor(config?: properties);
    parse_token_reponse(): void;
    parse_token_response(): void;
}
export class Proxy extends GObject.Object {
    constructor(config?: properties);
    binding_required: boolean;
    disable_cookies: boolean;
    password: string;
    ssl_ca_file: string;
    ssl_strict: boolean;
    url_format: string;
    user_agent: string;
    username: string;static new_with_authentication(url_format: string, binding_required: boolean, username: string, password: string): Proxy;
    add_soup_feature(feature: Soup.SessionFeature): void;
    get_user_agent(): string;
    new_call(): ProxyCall;
    set_user_agent(user_agent: string): void;
    vfunc_authenticate(auth: ProxyAuth, retrying: boolean): boolean;
    vfunc_new_call(): ProxyCall;
}
export class ProxyAuth  {
    constructor(config?: properties);
    readonly priv: ProxyAuthPrivate;
    cancel(): void;
    pause(): void;
    unpause(): void;
}
export class ProxyCall  {
    constructor(config?: properties);
    proxy: Proxy;
    readonly priv: ProxyCallPrivate;
    add_header(header: string, value: string): void;
    add_param(name: string, value: string): void;
    add_param_full(param: Param): void;
    get_function(): string;
    get_method(): string;
    get_params(): Params;
    get_payload(): string;
    get_payload_length(): number;
    get_response_headers(): GLib.HashTable;
    get_status_code(): number;
    get_status_message(): string;
    invoke_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    invoke_finish(result: Gio.AsyncResult): boolean;
    lookup_header(header: string): string;
    lookup_param(name: string): Param;
    lookup_response_header(header: string): string;
    remove_header(header: string): void;
    remove_param(name: string): void;
    run(loop: GLib.MainLoop): boolean;
    serialize_params(): [boolean, string,string,number];
    set_function(_function: string): void;
    set_method(method: string): void;
    sync(): boolean;
    upload(callback: ProxyCallUploadCallback, weak_object: GObject.Object, userdata: object | null): boolean;
}
export class XmlParser extends GObject.Object {
    constructor(config?: properties);
    parse_from_data(data: string, len: number): XmlNode;
}
export class OAuth2ProxyPrivate  {
    constructor(config?: properties);
}
export class Param  {
    constructor(config?: properties);
    static new_full(name: string, use: MemoryUse, data: number[], length: number, content_type: string, filename: string): Param;
    static new_string(name: string, use: MemoryUse, string: string): Param;
    static new_with_owner(name: string, data: number[], length: number, content_type: string, filename: string | null, owner: object | null, owner_dnotify: GLib.DestroyNotify | null): Param;
    get_content(): object | null;
    get_content_length(): number;
    get_content_type(): string;
    get_file_name(): string;
    get_name(): string;
    is_string(): boolean;
    ref(): Param;
    unref(): void;
}
export class Params  {
    constructor(config?: properties);
    add(param: Param): void;
    are_strings(): boolean;
    as_string_hash_table(): GLib.HashTable;
    free(): void;
    get(name: string): Param;
    remove(name: string): void;
}
export class ParamsIter  {
    constructor(config?: properties);
    init(params: Params): void;
    next(name: string, param: Param): boolean;
}
export class ProxyAuthPrivate  {
    constructor(config?: properties);
}
export class ProxyCallPrivate  {
    constructor(config?: properties);
}
export class XmlNode  {
    constructor(config?: properties);
    readonly ref_count: number;
    name: string;
    content: string;
    children: GLib.HashTable;
    attrs: GLib.HashTable;
    next: XmlNode;
    add_attr(attribute: string, value: string): void;
    add_child(tag: string): XmlNode;
    find(tag: string): XmlNode;
    free(): void;
    get_attr(attr_name: string): string;
    print(): string;
    set_content(value: string): void;
}