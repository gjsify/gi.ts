
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Soup from "soup";
/**
 * soup.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type AddressCallback = (addr: Address, status: number, user_data: object | null) => void;
export type AuthDomainBasicAuthCallback = (domain: AuthDomainBasic, msg: Message, username: string, password: string, user_data: object | null) => boolean;
export type AuthDomainDigestAuthCallback = (domain: AuthDomainDigest, msg: Message, username: string, user_data: object | null) => string | null;
export type AuthDomainFilter = (domain: AuthDomain, msg: Message, user_data: object | null) => boolean;
export type AuthDomainGenericAuthCallback = (domain: AuthDomain, msg: Message, username: string, user_data: object | null) => boolean;
export type ChunkAllocator = (msg: Message, max_len: number, user_data: object | null) => Buffer | null;
export type LoggerFilter = (logger: Logger, msg: Message, user_data: object | null) => LoggerLogLevel;
export type LoggerPrinter = (logger: Logger, level: LoggerLogLevel, direction: number, data: string, user_data: object | null) => void;
export type MessageHeadersForeachFunc = (name: string, value: string, user_data: object | null) => void;
export type PasswordManagerCallback = (password_manager: PasswordManager, msg: Message, auth: Auth, retrying: boolean, user_data: object | null) => void;
export type ProxyResolverCallback = (proxy_resolver: ProxyResolver, msg: Message, arg: number, addr: Address, user_data: object | null) => void;
export type ProxyURIResolverCallback = (resolver: ProxyURIResolver, status: number, proxy_uri: URI, user_data: object | null) => void;
export type ServerCallback = (server: Server, msg: Message, path: string, query: GLib.HashTable | null, client: ClientContext, user_data: object | null) => void;
export type ServerWebsocketCallback = (server: Server, connection: WebsocketConnection, path: string, client: ClientContext, user_data: object | null) => void;
export type SessionCallback = (session: Session, msg: Message, user_data: object | null) => void;
export type SessionConnectProgressCallback = (session: Session, event: Gio.SocketClientEvent, connection: Gio.IOStream, user_data: object | null) => void;
export type SocketCallback = (sock: Socket, status: number, user_data: object | null) => void;
export const ADDRESS_ANY_PORT: number;
export const ADDRESS_FAMILY: string;
export const ADDRESS_NAME: string;
export const ADDRESS_PHYSICAL: string;
export const ADDRESS_PORT: string;
export const ADDRESS_PROTOCOL: string;
export const ADDRESS_SOCKADDR: string;
export const AUTH_DOMAIN_ADD_PATH: string;
export const AUTH_DOMAIN_BASIC_AUTH_CALLBACK: string;
export const AUTH_DOMAIN_BASIC_AUTH_DATA: string;
export const AUTH_DOMAIN_DIGEST_AUTH_CALLBACK: string;
export const AUTH_DOMAIN_DIGEST_AUTH_DATA: string;
export const AUTH_DOMAIN_FILTER: string;
export const AUTH_DOMAIN_FILTER_DATA: string;
export const AUTH_DOMAIN_GENERIC_AUTH_CALLBACK: string;
export const AUTH_DOMAIN_GENERIC_AUTH_DATA: string;
export const AUTH_DOMAIN_PROXY: string;
export const AUTH_DOMAIN_REALM: string;
export const AUTH_DOMAIN_REMOVE_PATH: string;
export const AUTH_HOST: string;
export const AUTH_IS_AUTHENTICATED: string;
export const AUTH_IS_FOR_PROXY: string;
export const AUTH_REALM: string;
export const AUTH_SCHEME_NAME: string;
export const CHAR_HTTP_CTL: number;
export const CHAR_HTTP_SEPARATOR: number;
export const CHAR_URI_GEN_DELIMS: number;
export const CHAR_URI_PERCENT_ENCODED: number;
export const CHAR_URI_SUB_DELIMS: number;
export const COOKIE_JAR_ACCEPT_POLICY: string;
export const COOKIE_JAR_DB_FILENAME: string;
export const COOKIE_JAR_READ_ONLY: string;
export const COOKIE_JAR_TEXT_FILENAME: string;
export const COOKIE_MAX_AGE_ONE_DAY: number;
export const COOKIE_MAX_AGE_ONE_HOUR: number;
export const COOKIE_MAX_AGE_ONE_WEEK: number;
export const COOKIE_MAX_AGE_ONE_YEAR: number;
export const FORM_MIME_TYPE_MULTIPART: string;
export const FORM_MIME_TYPE_URLENCODED: string;
export const HSTS_ENFORCER_DB_FILENAME: string;
export const HSTS_POLICY_MAX_AGE_PAST: number;
export const LOGGER_LEVEL: string;
export const LOGGER_MAX_BODY_SIZE: string;
export const MAJOR_VERSION: number;
export const MESSAGE_FIRST_PARTY: string;
export const MESSAGE_FLAGS: string;
export const MESSAGE_HTTP_VERSION: string;
export const MESSAGE_METHOD: string;
export const MESSAGE_PRIORITY: string;
export const MESSAGE_REASON_PHRASE: string;
export const MESSAGE_REQUEST_BODY: string;
export const MESSAGE_REQUEST_BODY_DATA: string;
export const MESSAGE_REQUEST_HEADERS: string;
export const MESSAGE_RESPONSE_BODY: string;
export const MESSAGE_RESPONSE_BODY_DATA: string;
export const MESSAGE_RESPONSE_HEADERS: string;
export const MESSAGE_SERVER_SIDE: string;
export const MESSAGE_STATUS_CODE: string;
export const MESSAGE_TLS_CERTIFICATE: string;
export const MESSAGE_TLS_ERRORS: string;
export const MESSAGE_URI: string;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const REQUEST_SESSION: string;
export const REQUEST_URI: string;
export const SERVER_ASYNC_CONTEXT: string;
export const SERVER_HTTPS_ALIASES: string;
export const SERVER_HTTP_ALIASES: string;
export const SERVER_INTERFACE: string;
export const SERVER_PORT: string;
export const SERVER_RAW_PATHS: string;
export const SERVER_SERVER_HEADER: string;
export const SERVER_SSL_CERT_FILE: string;
export const SERVER_SSL_KEY_FILE: string;
export const SERVER_TLS_CERTIFICATE: string;
export const SESSION_ACCEPT_LANGUAGE: string;
export const SESSION_ACCEPT_LANGUAGE_AUTO: string;
export const SESSION_ASYNC_CONTEXT: string;
export const SESSION_HTTPS_ALIASES: string;
export const SESSION_HTTP_ALIASES: string;
export const SESSION_IDLE_TIMEOUT: string;
export const SESSION_LOCAL_ADDRESS: string;
export const SESSION_MAX_CONNS: string;
export const SESSION_MAX_CONNS_PER_HOST: string;
export const SESSION_PROXY_RESOLVER: string;
export const SESSION_PROXY_URI: string;
export const SESSION_SSL_CA_FILE: string;
export const SESSION_SSL_STRICT: string;
export const SESSION_SSL_USE_SYSTEM_CA_FILE: string;
export const SESSION_TIMEOUT: string;
export const SESSION_TLS_DATABASE: string;
export const SESSION_TLS_INTERACTION: string;
export const SESSION_USER_AGENT: string;
export const SESSION_USE_NTLM: string;
export const SESSION_USE_THREAD_CONTEXT: string;
export const SOCKET_ASYNC_CONTEXT: string;
export const SOCKET_FLAG_NONBLOCKING: string;
export const SOCKET_IS_SERVER: string;
export const SOCKET_LOCAL_ADDRESS: string;
export const SOCKET_REMOTE_ADDRESS: string;
export const SOCKET_SSL_CREDENTIALS: string;
export const SOCKET_SSL_FALLBACK: string;
export const SOCKET_SSL_STRICT: string;
export const SOCKET_TIMEOUT: string;
export const SOCKET_TLS_CERTIFICATE: string;
export const SOCKET_TLS_ERRORS: string;
export const SOCKET_TRUSTED_CERTIFICATE: string;
export const SOCKET_USE_THREAD_CONTEXT: string;
export const VERSION_MIN_REQUIRED: number;
/**
 * Like SOUP_CHECK_VERSION, but the check for soup_check_version is
 * at runtime instead of compile time. This is useful for compiling
 * against older versions of libsoup, but using features from newer
 * versions.
 */
export function check_version(major: number, minor: number, micro: number): boolean;
/**
 * Parses @header and returns a #SoupCookie. (If @header contains
 * multiple cookies, only the first one will be parsed.)
 * If @header does not have "path" or "domain" attributes, they will
 * be defaulted from @origin. If @origin is %NULL, path will default
 * to "/", but domain will be left as %NULL. Note that this is not a
 * valid state for a #SoupCookie, and you will need to fill in some
 * appropriate string for the domain if you want to actually make use
 * of the cookie.
 */
export function cookie_parse(header: string, origin: URI): Cookie | null;
/**
 * Parses @msg's Cookie request header and returns a #GSList of
 * #SoupCookie<!-- -->s. As the "Cookie" header, unlike "Set-Cookie",
 * only contains cookie names and values, none of the other
 * #SoupCookie fields will be filled in. (Thus, you can't generally
 * pass a cookie returned from this method directly to
 * soup_cookies_to_response().)
 */
export function cookies_from_request(msg: Message): string[];
/**
 * Parses @msg's Set-Cookie response headers and returns a #GSList of
 * #SoupCookie<!-- -->s. Cookies that do not specify "path" or
 * "domain" attributes will have their values defaulted from @msg.
 */
export function cookies_from_response(msg: Message): string[];
/**
 * Serializes a #GSList of #SoupCookie into a string suitable for
 * setting as the value of the "Cookie" header.
 */
export function cookies_to_cookie_header(cookies: string[]): string;
/**
 * Adds the name and value of each cookie in @cookies to @msg's
 * "Cookie" request. (If @msg already has a "Cookie" request header,
 * these cookies will be appended to the cookies already present. Be
 * careful that you do not append the same cookies twice, eg, when
 * requeuing a message.)
 */
export function cookies_to_request(cookies: string[], msg: Message): void;
/**
 * Appends a "Set-Cookie" response header to @msg for each cookie in
 * @cookies. (This is in addition to any other "Set-Cookie" headers
 * @msg may already have.)
 */
export function cookies_to_response(cookies: string[], msg: Message): void;
/**
 * Decodes @form, which is an urlencoded dataset as defined in the
 * HTML 4.01 spec.
 */
export function form_decode(encoded_form: string): GLib.HashTable;
/**
 * Decodes the "multipart/form-data" request in @msg; this is a
 * convenience method for the case when you have a single file upload
 * control in a form. (Or when you don't have any file upload
 * controls, but are still using "multipart/form-data" anyway.) Pass
 * the name of the file upload control in @file_control_name, and
 * soup_form_decode_multipart() will extract the uploaded file data
 * into @filename, @content_type, and @file. All of the other form
 * control data will be returned (as strings, as with
 * soup_form_decode()) in the returned #GHashTable.
 * You may pass %NULL for @filename, @content_type and/or @file if you do
 *  not
 * care about those fields. soup_form_decode_multipart() may also
 * return %NULL in those fields if the client did not provide that
 * information. You must free the returned filename and content-type
 * with g_free(), and the returned file data with soup_buffer_free().
 * If you have a form with more than one file upload control, you will
 * need to decode it manually, using soup_multipart_new_from_message()
 * and soup_multipart_get_part().
 */
export function form_decode_multipart(msg: Message, file_control_name: string | null): [GLib.HashTable | null, string | null,string | null,Buffer | null];
/**
 * Encodes @form_data_set into a value of type
 * "application/x-www-form-urlencoded", as defined in the HTML 4.01
 * spec. Unlike soup_form_encode_hash(), this preserves the ordering
 * of the form elements, which may be required in some situations.
 */
export function form_encode_datalist(form_data_set: GLib.Data): string;
/**
 * Encodes @form_data_set into a value of type
 * "application/x-www-form-urlencoded", as defined in the HTML 4.01
 * spec.
 * Note that the HTML spec states that "The control names/values are
 * listed in the order they appear in the document." Since this method
 * takes a hash table, it cannot enforce that; if you care about the
 * ordering of the form fields, use soup_form_encode_datalist().
 */
export function form_encode_hash(form_data_set: GLib.HashTable): string;
/**
 * Creates a new %SoupMessage and sets it up to send @form_data_set to
 * @uri via @method, as with soup_form_request_new().
 */
export function form_request_new_from_datalist(method: string, uri: string, form_data_set: GLib.Data): Message;
/**
 * Creates a new %SoupMessage and sets it up to send @form_data_set to
 * @uri via @method, as with soup_form_request_new().
 */
export function form_request_new_from_hash(method: string, uri: string, form_data_set: GLib.HashTable): Message;
/**
 * Creates a new %SoupMessage and sets it up to send @multipart to
 * @uri via POST.
 * To send a <literal>"multipart/form-data"</literal> POST, first
 * create a #SoupMultipart, using %SOUP_FORM_MIME_TYPE_MULTIPART as
 * the MIME type. Then use soup_multipart_append_form_string() and
 * soup_multipart_append_form_file() to add the value of each form
 * control to the multipart. (These are just convenience methods, and
 * you can use soup_multipart_append_part() if you need greater
 * control over the part headers.) Finally, call
 * soup_form_request_new_from_multipart() to serialize the multipart
 * structure and create a #SoupMessage.
 */
export function form_request_new_from_multipart(uri: string, multipart: Multipart): Message;
/**
 * Returns the major version number of the libsoup library.
 * (e.g. in libsoup version 2.42.0 this is 2.)
 * This function is in the library, so it represents the libsoup library
 * your code is running against. Contrast with the #SOUP_MAJOR_VERSION
 * macro, which represents the major version of the libsoup headers you
 * have included when compiling your code.
 */
export function get_major_version(): number;
/**
 * Returns the micro version number of the libsoup library.
 * (e.g. in libsoup version 2.42.0 this is 0.)
 * This function is in the library, so it represents the libsoup library
 * your code is running against. Contrast with the #SOUP_MICRO_VERSION
 * macro, which represents the micro version of the libsoup headers you
 * have included when compiling your code.
 */
export function get_micro_version(): number;
/**
 * Returns the minor version number of the libsoup library.
 * (e.g. in libsoup version 2.42.0 this is 42.)
 * This function is in the library, so it represents the libsoup library
 * your code is running against. Contrast with the #SOUP_MINOR_VERSION
 * macro, which represents the minor version of the libsoup headers you
 * have included when compiling your code.
 */
export function get_minor_version(): number;
/**
 * Parses @header to see if it contains the token @token (matched
 * case-insensitively). Note that this can't be used with lists
 * that have qvalues.
 */
export function header_contains(header: string, token: string): boolean;
/**
 * Frees @param_list.
 */
export function header_free_param_list(param_list: GLib.HashTable): void;
/**
 * Appends something like <literal>@name=@value</literal> to @string,
 * taking care to quote @value if needed, and if so, to escape any
 * quotes or backslashes in @value.
 * Alternatively, if @value is a non-ASCII UTF-8 string, it will be
 * appended using RFC5987 syntax. Although in theory this is supposed
 * to work anywhere in HTTP that uses this style of parameter, in
 * reality, it can only be used portably with the Content-Disposition
 * "filename" parameter.
 * If @value is %NULL, this will just append @name to @string.
 */
export function header_g_string_append_param(string: GLib.String, name: string, value: string): void;
/**
 * Appends something like <literal>@name="@value"</literal> to
 * @string, taking care to escape any quotes or backslashes in @value.
 * If @value is (non-ASCII) UTF-8, this will instead use RFC 5987
 * encoding, just like soup_header_g_string_append_param().
 */
export function header_g_string_append_param_quoted(string: GLib.String, name: string, value: string): void;
/**
 * Parses a header whose content is described by RFC2616 as
 * "#something", where "something" does not itself contain commas,
 * except as part of quoted-strings.
 */
export function header_parse_list(header: string): string[];
/**
 * Parses a header which is a comma-delimited list of something like:
 * <literal>token [ "=" ( token | quoted-string ) ]</literal>.
 * Tokens that don't have an associated value will still be added to
 * the resulting hash table, but with a %NULL value.
 * This also handles RFC5987 encoding (which in HTTP is mostly used
 * for giving UTF8-encoded filenames in the Content-Disposition
 * header).
 */
export function header_parse_param_list(header: string): GLib.HashTable;
/**
 * A strict version of soup_header_parse_param_list()
 * that bails out if there are duplicate parameters.
 * Note that this function will treat RFC5987-encoded
 * parameters as duplicated if an ASCII version is also
 * present. For header fields that might contain
 * RFC5987-encoded parameters, use
 * soup_header_parse_param_list() instead.
 */
export function header_parse_param_list_strict(header: string): GLib.HashTable | null;
/**
 * Parses a header whose content is a list of items with optional
 * "qvalue"s (eg, Accept, Accept-Charset, Accept-Encoding,
 * Accept-Language, TE).
 * If @unacceptable is not %NULL, then on return, it will contain the
 * items with qvalue 0. Either way, those items will be removed from
 * the main list.
 */
export function header_parse_quality_list(header: string): [string[], string[]];
/**
 * Parses a header which is a semicolon-delimited list of something
 * like: <literal>token [ "=" ( token | quoted-string ) ]</literal>.
 * Tokens that don't have an associated value will still be added to
 * the resulting hash table, but with a %NULL value.
 * This also handles RFC5987 encoding (which in HTTP is mostly used
 * for giving UTF8-encoded filenames in the Content-Disposition
 * header).
 */
export function header_parse_semi_param_list(header: string): GLib.HashTable;
/**
 * A strict version of soup_header_parse_semi_param_list()
 * that bails out if there are duplicate parameters.
 * Note that this function will treat RFC5987-encoded
 * parameters as duplicated if an ASCII version is also
 * present. For header fields that might contain
 * RFC5987-encoded parameters, use
 * soup_header_parse_semi_param_list() instead.
 */
export function header_parse_semi_param_list_strict(header: string): GLib.HashTable | null;
/**
 * Parses the headers of an HTTP request or response in @str and
 * stores the results in @dest. Beware that @dest may be modified even
 * on failure.
 * This is a low-level method; normally you would use
 * soup_headers_parse_request() or soup_headers_parse_response().
 */
export function headers_parse(str: string, len: number, dest: MessageHeaders): boolean;
/**
 * Parses the headers of an HTTP request in @str and stores the
 * results in @req_method, @req_path, @ver, and @req_headers.
 * Beware that @req_headers may be modified even on failure.
 */
export function headers_parse_request(str: string, len: number, req_headers: MessageHeaders): [number, string | null,string | null,HTTPVersion | null];
/**
 * Parses the headers of an HTTP response in @str and stores the
 * results in @ver, @status_code, @reason_phrase, and @headers.
 * Beware that @headers may be modified even on failure.
 */
export function headers_parse_response(str: string, len: number, headers: MessageHeaders): [boolean, HTTPVersion | null,number | null,string | null];
/**
 * Parses the HTTP Status-Line string in @status_line into @ver,
 * @status_code, and @reason_phrase. @status_line must be terminated by
 * either "\0" or "\r\n".
 */
export function headers_parse_status_line(status_line: string): [boolean, HTTPVersion | null,number | null,string | null];
/**
 * 
 */
export function http_error_quark(): GLib.Quark;
/**
 * Initializes @iter for iterating @hdrs.
 */
export function message_headers_iter_init(hdrs: MessageHeaders): [MessageHeadersIter];
/**
 * 
 */
export function request_error_quark(): GLib.Quark;
/**
 * 
 */
export function requester_error_quark(): GLib.Quark;
/**
 * Looks up the stock HTTP description of @status_code. This is used
 * by soup_message_set_status() to get the correct text to go with a
 * given status code.
 * <emphasis>There is no reason for you to ever use this
 * function.</emphasis> If you wanted the textual description for the
 * #SoupMessage:status_code of a given #SoupMessage, you should just
 * look at the message's #SoupMessage:reason_phrase. However, you
 * should only do that for use in debugging messages; HTTP reason
 * phrases are not localized, and are not generally very descriptive
 * anyway, and so they should never be presented to the user directly.
 * Instead, you should create you own error messages based on the
 * status code, and on what you were trying to do.
 */
export function status_get_phrase(status_code: number): string;
/**
 * Turns %SOUP_STATUS_CANT_RESOLVE into
 * %SOUP_STATUS_CANT_RESOLVE_PROXY and %SOUP_STATUS_CANT_CONNECT into
 * %SOUP_STATUS_CANT_CONNECT_PROXY. Other status codes are passed
 * through unchanged.
 */
export function status_proxify(status_code: number): number;
/**
 * Compares @v1 and @v2 in a case-insensitive manner
 */
export function str_case_equal(v1: object | null, v2: object | null): boolean;
/**
 * Hashes @key in a case-insensitive manner.
 */
export function str_case_hash(key: object | null): number;
/**
 * Looks whether the @domain passed as argument is a public domain
 * suffix (.org, .com, .co.uk, etc) or not.
 * Prior to libsoup 2.46, this function required that @domain be in
 * UTF-8 if it was an IDN. From 2.46 on, the name can be in either
 * UTF-8 or ASCII format.
 */
export function tld_domain_is_public_suffix(domain: string): boolean;
/**
 * 
 */
export function tld_error_quark(): GLib.Quark;
/**
 * Finds the base domain for a given @hostname. The base domain is
 * composed by the top level domain (such as .org, .com, .co.uk, etc)
 * plus the second level domain, for example for myhost.mydomain.com
 * it will return mydomain.com.
 * Note that %NULL will be returned for private URLs (those not ending
 * with any well known TLD) because choosing a base domain for them
 * would be totally arbitrary.
 * Prior to libsoup 2.46, this function required that @hostname be in
 * UTF-8 if it was an IDN. From 2.46 on, the name can be in either
 * UTF-8 or ASCII format (and the return value will be in the same
 * format).
 */
export function tld_get_base_domain(hostname: string): string;
/**
 * Fully %<!-- -->-decodes @part.
 * In the past, this would return %NULL if @part contained invalid
 * percent-encoding, but now it just ignores the problem (as
 * soup_uri_new() already did).
 */
export function uri_decode(part: string): string;
/**
 * This %<!-- -->-encodes the given URI part and returns the escaped
 * version in allocated memory, which the caller must free when it is
 * done.
 */
export function uri_encode(part: string, escape_extra: string | null): string;
/**
 * %<!-- -->-decodes any "unreserved" characters (or characters in
 * @unescape_extra) in @part, and %<!-- -->-encodes any non-ASCII
 * characters, spaces, and non-printing characters in @part.
 * "Unreserved" characters are those that are not allowed to be used
 * for punctuation according to the URI spec. For example, letters are
 * unreserved, so soup_uri_normalize() will turn
 * <literal>http://example.com/foo/b%<!-- -->61r</literal> into
 * <literal>http://example.com/foo/bar</literal>, which is guaranteed
 * to mean the same thing. However, "/" is "reserved", so
 * <literal>http://example.com/foo%<!-- -->2Fbar</literal> would not
 * be changed, because it might mean something different to the
 * server.
 * In the past, this would return %NULL if @part contained invalid
 * percent-encoding, but now it just ignores the problem (as
 * soup_uri_new() already did).
 */
export function uri_normalize(part: string, unescape_extra: string | null): string;
/**
 * Creates a new %GValueArray. (This is just a wrapper around
 * g_value_array_new(), for naming consistency purposes.)
 */
export function value_array_new(): GObject.ValueArray;
/**
 * Inserts @value into @hash. (Unlike with g_hash_table_insert(), both
 * the key and the value are copied).
 */
export function value_hash_insert_value(hash: GLib.HashTable, key: string, value: GObject.Value): void;
/**
 * Creates a #GHashTable whose keys are strings and whose values
 * are #GValue.
 */
export function value_hash_new(): GLib.HashTable;
/**
 * Adds the necessary headers to @msg to request a WebSocket
 * handshake. The message body and non-WebSocket-related headers are
 * not modified.
 * Use soup_websocket_client_prepare_handshake_with_extensions() if you
 * want to include "Sec-WebSocket-Extensions" header in the request.
 * This is a low-level function; if you use
 * soup_session_websocket_connect_async() to create a WebSocket
 * connection, it will call this for you.
 */
export function websocket_client_prepare_handshake(msg: Message, origin: string | null, protocols: string[] | null): void;
/**
 * Adds the necessary headers to @msg to request a WebSocket
 * handshake including supported WebSocket extensions.
 * The message body and non-WebSocket-related headers are
 * not modified.
 * This is a low-level function; if you use
 * soup_session_websocket_connect_async() to create a WebSocket
 * connection, it will call this for you.
 */
export function websocket_client_prepare_handshake_with_extensions(msg: Message, origin: string | null, protocols: string[] | null, supported_extensions: GObject.TypeClass[] | null): void;
/**
 * Looks at the response status code and headers in @msg and
 * determines if they contain a valid WebSocket handshake response
 * (given the handshake request in @msg's request headers).
 * If the response contains the "Sec-WebSocket-Extensions" header,
 * the handshake will be considered invalid. You need to use
 * soup_websocket_client_verify_handshake_with_extensions() to handle
 * responses with extensions.
 * This is a low-level function; if you use
 * soup_session_websocket_connect_async() to create a WebSocket
 * connection, it will call this for you.
 */
export function websocket_client_verify_handshake(msg: Message): boolean;
/**
 * Looks at the response status code and headers in @msg and
 * determines if they contain a valid WebSocket handshake response
 * (given the handshake request in @msg's request headers).
 * If @supported_extensions is non-%NULL, extensions included in the
 * response "Sec-WebSocket-Extensions" are verified too. Accepted
 * extensions are returned in @accepted_extensions parameter if non-%NULL
 * .
 * This is a low-level function; if you use
 * soup_session_websocket_connect_async() to create a WebSocket
 * connection, it will call this for you.
 */
export function websocket_client_verify_handshake_with_extensions(msg: Message, supported_extensions: GObject.TypeClass[] | null): [boolean, GLib.List | null];
/**
 * 
 */
export function websocket_error_get_quark(): GLib.Quark;
/**
 * Examines the method and request headers in @msg and determines
 * whether @msg contains a valid handshake request.
 * If @origin is non-%NULL, then only requests containing a matching
 * "Origin" header will be accepted. If @protocols is non-%NULL, then
 * only requests containing a compatible "Sec-WebSocket-Protocols"
 * header will be accepted.
 * Requests containing "Sec-WebSocket-Extensions" header will be
 * accepted even if the header is not valid. To check a request
 * with extensions you need to use
 * soup_websocket_server_check_handshake_with_extensions() and provide
 * the list of supported extension types.
 * Normally soup_websocket_server_process_handshake() will take care
 * of this for you, and if you use soup_server_add_websocket_handler()
 * to handle accepting WebSocket connections, it will call that for
 * you. However, this function may be useful if you need to perform
 * more complicated validation; eg, accepting multiple different Origins,
 * or handling different protocols depending on the path.
 */
export function websocket_server_check_handshake(msg: Message, origin: string | null, protocols: string[] | null): boolean;
/**
 * Examines the method and request headers in @msg and determines
 * whether @msg contains a valid handshake request.
 * If @origin is non-%NULL, then only requests containing a matching
 * "Origin" header will be accepted. If @protocols is non-%NULL, then
 * only requests containing a compatible "Sec-WebSocket-Protocols"
 * header will be accepted. If @supported_extensions is non-%NULL, then
 * only requests containing valid supported extensions in
 * "Sec-WebSocket-Extensions" header will be accepted.
 * Normally soup_websocket_server_process_handshake_with_extensioins()
 * will take care of this for you, and if you use
 * soup_server_add_websocket_handler() to handle accepting WebSocket
 * connections, it will call that for you. However, this function may
 * be useful if you need to perform more complicated validation; eg,
 * accepting multiple different Origins, or handling different protocols
 * depending on the path.
 */
export function websocket_server_check_handshake_with_extensions(msg: Message, origin: string | null, protocols: string[] | null, supported_extensions: GObject.TypeClass[] | null): boolean;
/**
 * Examines the method and request headers in @msg and (assuming @msg
 * contains a valid handshake request), fills in the handshake
 * response.
 * If @expected_origin is non-%NULL, then only requests containing a matc
 * hing
 * "Origin" header will be accepted. If @protocols is non-%NULL, then
 * only requests containing a compatible "Sec-WebSocket-Protocols"
 * header will be accepted.
 * Requests containing "Sec-WebSocket-Extensions" header will be
 * accepted even if the header is not valid. To process a request
 * with extensions you need to use
 * soup_websocket_server_process_handshake_with_extensions() and provide
 * the list of supported extension types.
 * This is a low-level function; if you use
 * soup_server_add_websocket_handler() to handle accepting WebSocket
 * connections, it will call this for you.
 */
export function websocket_server_process_handshake(msg: Message, expected_origin: string | null, protocols: string[] | null): boolean;
/**
 * Examines the method and request headers in @msg and (assuming @msg
 * contains a valid handshake request), fills in the handshake
 * response.
 * If @expected_origin is non-%NULL, then only requests containing a matc
 * hing
 * "Origin" header will be accepted. If @protocols is non-%NULL, then
 * only requests containing a compatible "Sec-WebSocket-Protocols"
 * header will be accepted. If @supported_extensions is non-%NULL, then
 * only requests containing valid supported extensions in
 * "Sec-WebSocket-Extensions" header will be accepted. The accepted exten
 * sions
 * will be returned in @accepted_extensions parameter if non-%NULL.
 * This is a low-level function; if you use
 * soup_server_add_websocket_handler() to handle accepting WebSocket
 * connections, it will call this for you.
 */
export function websocket_server_process_handshake_with_extensions(msg: Message, expected_origin: string | null, protocols: string[] | null, supported_extensions: GObject.TypeClass[] | null): [boolean, GLib.List | null];
/**
 * This creates an XML-RPC methodCall and returns it as a string.
 * This is the low-level method that soup_xmlrpc_request_new() is
 * built on.
 * @params is an array of #GValue representing the parameters to
 * @method. (It is *not* a #GValueArray, although if you have a
 * #GValueArray, you can just pass its <literal>values</literal>f and
 * <literal>n_values</literal> fields.)
 * The correspondence between glib types and XML-RPC types is:
 *   int: #int (%G_TYPE_INT)
 *   boolean: #gboolean (%G_TYPE_BOOLEAN)
 *   string: #char* (%G_TYPE_STRING)
 *   double: #double (%G_TYPE_DOUBLE)
 *   datetime.iso8601: #SoupDate (%SOUP_TYPE_DATE)
 *   base64: #GByteArray (%SOUP_TYPE_BYTE_ARRAY)
 *   struct: #GHashTable (%G_TYPE_HASH_TABLE)
 *   array: #GValueArray (%G_TYPE_VALUE_ARRAY)
 * For structs, use a #GHashTable that maps strings to #GValue;
 * soup_value_hash_new() and related methods can help with this.
 */
export function xmlrpc_build_method_call(method_name: string, params: GObject.Value[], n_params: number): string | null;
/**
 * This creates a (successful) XML-RPC methodResponse and returns it
 * as a string. To create a fault response, use
 * soup_xmlrpc_build_fault().
 * The glib type to XML-RPC type mapping is as with
 * soup_xmlrpc_build_method_call(), qv.
 */
export function xmlrpc_build_method_response(value: GObject.Value): string | null;
/**
 * This creates an XML-RPC methodCall and returns it as a string.
 * This is the low-level method that soup_xmlrpc_message_new() is
 * built on.
 * @params is a #GVariant tuple representing the method parameters.
 * Serialization details:
 *  - "a{s*}" and "{s*}" are serialized as &lt;struct&gt;
 *  - "ay" is serialized as &lt;base64&gt;
 *  - Other arrays and tuples are serialized as &lt;array&gt;
 *  - booleans are serialized as &lt;boolean&gt;
 *  - byte, int16, uint16 and int32 are serialized as &lt;int&gt;
 *  - uint32 and int64 are serialized as the nonstandard &lt;i8&gt; type
 *  - doubles are serialized as &lt;double&gt;
 *  - Strings are serialized as &lt;string&gt;
 *  - Variants (i.e. "v" type) are unwrapped and their child is serialize
 * d.
 *  - #GVariants created by soup_xmlrpc_variant_new_datetime() are serial
 * ized as
 *    &lt;dateTime.iso8601&gt;
 *  - Other types are not supported and will return %NULL and set @error.
 *    This notably includes: object-paths, signatures, uint64, handles, m
 * aybes
 *    and dictionaries with non-string keys.
 * If @params is floating, it is consumed.
 */
export function xmlrpc_build_request(method_name: string, params: GLib.Variant): string;
/**
 * This creates a (successful) XML-RPC methodResponse and returns it
 * as a string. To create a fault response, use soup_xmlrpc_build_fault()
 * . This
 * is the low-level method that soup_xmlrpc_message_set_response() is bui
 * lt on.
 * See soup_xmlrpc_build_request() for serialization details, but note
 * that since a method can only have a single return value, @value
 * should not be a tuple here (unless the return value is an array).
 * If @value is floating, it is consumed.
 */
export function xmlrpc_build_response(value: GLib.Variant): string;
/**
 * 
 */
export function xmlrpc_error_quark(): GLib.Quark;
/**
 * 
 */
export function xmlrpc_fault_quark(): GLib.Quark;
/**
 * Creates an XML-RPC methodCall and returns a #SoupMessage, ready
 * to send, for that method call.
 * See soup_xmlrpc_build_request() for serialization details.
 * If @params is floating, it is consumed.
 */
export function xmlrpc_message_new(uri: string, method_name: string, params: GLib.Variant): Message;
/**
 * Sets the status code and response body of @msg to indicate a
 * successful XML-RPC call, with a return value given by @value. To set a
 * fault response, use soup_xmlrpc_message_set_fault().
 * See soup_xmlrpc_build_request() for serialization details.
 * If @value is floating, it is consumed.
 */
export function xmlrpc_message_set_response(msg: Message, value: GLib.Variant): boolean;
/**
 * Parses @method_call to get the name and parameters, and returns the
 * parameter values in a #GValueArray; see also
 * soup_xmlrpc_extract_method_call(), which is more convenient if you
 * know in advance what the types of the parameters will be.
 */
export function xmlrpc_parse_method_call(method_call: string, length: number): [boolean, string,GObject.ValueArray];
/**
 * Parses @method_response and returns the return value in @value. If
 * @method_response is a fault, @value will be unchanged, and @error
 * will be set to an error of type %SOUP_XMLRPC_FAULT, with the error
 * #code containing the fault code, and the error #message containing
 * the fault string. (If @method_response cannot be parsed at all,
 * soup_xmlrpc_parse_method_response() will return %FALSE, but @error
 * will be unset.)
 */
export function xmlrpc_parse_method_response(method_response: string, length: number): [boolean, GObject.Value];
/**
 * Parses @method_call and return the method name. Method parameters can 
 * be
 * parsed later using soup_xmlrpc_params_parse().
 */
export function xmlrpc_parse_request(method_call: string, length: number): [string, XMLRPCParams];
/**
 * Parses @method_response and returns the return value. If
 * @method_response is a fault, %NULL is returned, and @error
 * will be set to an error in the %SOUP_XMLRPC_FAULT domain, with the err
 * or
 * code containing the fault code, and the error message containing
 * the fault string. If @method_response cannot be parsed, %NULL is retur
 * ned,
 * and @error will be set to an error in the %SOUP_XMLRPC_ERROR domain.
 * See soup_xmlrpc_params_parse() for deserialization details.
 */
export function xmlrpc_parse_response(method_response: string, length: number, signature: string | null): GLib.Variant;
/**
 * Get the #SoupDate from special #GVariant created by
 * soup_xmlrpc_variant_new_datetime() or by parsing a &lt;dateTime.iso860
 * 1&gt;
 * node. See soup_xmlrpc_params_parse().
 * If @variant does not contain a datetime it will return an error but it
 *  is not
 * considered a programmer error because it generally means parameters re
 * ceived
 * are not in the expected type.
 */
export function xmlrpc_variant_get_datetime(variant: GLib.Variant): Date;
/**
 * Construct a special #GVariant used to serialize a &lt;dateTime.iso8601
 * &gt;
 * node. See soup_xmlrpc_build_request().
 * The actual type of the returned #GVariant is unspecified and "v" or "*
 * "
 * should be used in variant format strings. For example:
 * <informalexample><programlisting>
 * args = g_variant_new ("(v)", soup_xmlrpc_variant_new_datetime (date));
 * </programlisting></informalexample>
 */
export function xmlrpc_variant_new_datetime(date: Date): GLib.Variant;
export enum AddressFamily {
    INVALID = -1,
    IPV4 = 2,
    IPV6 = 10,
}
export enum CacheResponse {
    FRESH = 0,
    NEEDS_VALIDATION = 1,
    STALE = 2,
}
export enum CacheType {
    SINGLE_USER = 0,
    SHARED = 1,
}
export enum ConnectionState {
    NEW = 0,
    CONNECTING = 1,
    IDLE = 2,
    IN_USE = 3,
    REMOTE_DISCONNECTED = 4,
    DISCONNECTED = 5,
}
export enum CookieJarAcceptPolicy {
    ALWAYS = 0,
    NEVER = 1,
    NO_THIRD_PARTY = 2,
}
export enum DateFormat {
    HTTP = 1,
    COOKIE = 2,
    RFC2822 = 3,
    ISO8601_COMPACT = 4,
    ISO8601_FULL = 5,
    ISO8601 = 5,
    ISO8601_XMLRPC = 6,
}
export enum Encoding {
    UNRECOGNIZED = 0,
    NONE = 1,
    CONTENT_LENGTH = 2,
    EOF = 3,
    CHUNKED = 4,
    BYTERANGES = 5,
}
export enum HTTPVersion {
    HTTP_1_0 = 0,
    HTTP_1_1 = 1,
}
export enum KnownStatusCode {
    NONE = 0,
    CANCELLED = 1,
    CANT_RESOLVE = 2,
    CANT_RESOLVE_PROXY = 3,
    CANT_CONNECT = 4,
    CANT_CONNECT_PROXY = 5,
    SSL_FAILED = 6,
    IO_ERROR = 7,
    MALFORMED = 8,
    TRY_AGAIN = 9,
    TOO_MANY_REDIRECTS = 10,
    TLS_FAILED = 11,
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    MULTI_STATUS = 207,
    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    MOVED_TEMPORARILY = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    USE_PROXY = 305,
    NOT_APPEARING_IN_THIS_PROTOCOL = 306,
    TEMPORARY_REDIRECT = 307,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    PROXY_UNAUTHORIZED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    REQUEST_ENTITY_TOO_LARGE = 413,
    REQUEST_URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    INVALID_RANGE = 416,
    EXPECTATION_FAILED = 417,
    UNPROCESSABLE_ENTITY = 422,
    LOCKED = 423,
    FAILED_DEPENDENCY = 424,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
    INSUFFICIENT_STORAGE = 507,
    NOT_EXTENDED = 510,
}
export enum LoggerLogLevel {
    NONE = 0,
    MINIMAL = 1,
    HEADERS = 2,
    BODY = 3,
}
export enum MemoryUse {
    STATIC = 0,
    TAKE = 1,
    COPY = 2,
    TEMPORARY = 3,
}
export enum MessageHeadersType {
    REQUEST = 0,
    RESPONSE = 1,
    MULTIPART = 2,
}
export enum MessagePriority {
    VERY_LOW = 0,
    LOW = 1,
    NORMAL = 2,
    HIGH = 3,
    VERY_HIGH = 4,
}
export enum RequestError {
    BAD_URI = 0,
    UNSUPPORTED_URI_SCHEME = 1,
    PARSING = 2,
    ENCODING = 3,
}
export enum RequesterError {
    BAD_URI = 0,
    UNSUPPORTED_URI_SCHEME = 1,
}
export enum SocketIOStatus {
    OK = 0,
    WOULD_BLOCK = 1,
    EOF = 2,
    ERROR = 3,
}
export enum Status {
    NONE = 0,
    CANCELLED = 1,
    CANT_RESOLVE = 2,
    CANT_RESOLVE_PROXY = 3,
    CANT_CONNECT = 4,
    CANT_CONNECT_PROXY = 5,
    SSL_FAILED = 6,
    IO_ERROR = 7,
    MALFORMED = 8,
    TRY_AGAIN = 9,
    TOO_MANY_REDIRECTS = 10,
    TLS_FAILED = 11,
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    MULTI_STATUS = 207,
    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    MOVED_TEMPORARILY = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    USE_PROXY = 305,
    NOT_APPEARING_IN_THIS_PROTOCOL = 306,
    TEMPORARY_REDIRECT = 307,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    PROXY_UNAUTHORIZED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    REQUEST_ENTITY_TOO_LARGE = 413,
    REQUEST_URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    INVALID_RANGE = 416,
    EXPECTATION_FAILED = 417,
    UNPROCESSABLE_ENTITY = 422,
    LOCKED = 423,
    FAILED_DEPENDENCY = 424,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
    INSUFFICIENT_STORAGE = 507,
    NOT_EXTENDED = 510,
}
export enum TLDError {
    INVALID_HOSTNAME = 0,
    IS_IP_ADDRESS = 1,
    NOT_ENOUGH_DOMAINS = 2,
    NO_BASE_DOMAIN = 3,
    NO_PSL_DATA = 4,
}
export enum WebsocketCloseCode {
    NORMAL = 1000,
    GOING_AWAY = 1001,
    PROTOCOL_ERROR = 1002,
    UNSUPPORTED_DATA = 1003,
    NO_STATUS = 1005,
    ABNORMAL = 1006,
    BAD_DATA = 1007,
    POLICY_VIOLATION = 1008,
    TOO_BIG = 1009,
    NO_EXTENSION = 1010,
    SERVER_ERROR = 1011,
    TLS_HANDSHAKE = 1015,
}
export enum WebsocketConnectionType {
    UNKNOWN = 0,
    CLIENT = 1,
    SERVER = 2,
}
export enum WebsocketDataType {
    TEXT = 1,
    BINARY = 2,
}
export enum WebsocketError {
    FAILED = 0,
    NOT_WEBSOCKET = 1,
    BAD_HANDSHAKE = 2,
    BAD_ORIGIN = 3,
}
export enum WebsocketState {
    OPEN = 1,
    CLOSING = 2,
    CLOSED = 3,
}
export enum XMLRPCError {
    ARGUMENTS = 0,
    RETVAL = 1,
}
export enum XMLRPCFault {
    PARSE_ERROR_NOT_WELL_FORMED = -32700,
    PARSE_ERROR_UNSUPPORTED_ENCODING = -32701,
    PARSE_ERROR_INVALID_CHARACTER_FOR_ENCODING = -32702,
    SERVER_ERROR_INVALID_XML_RPC = -32600,
    SERVER_ERROR_REQUESTED_METHOD_NOT_FOUND = -32601,
    SERVER_ERROR_INVALID_METHOD_PARAMETERS = -32602,
    SERVER_ERROR_INTERNAL_XML_RPC_ERROR = -32603,
    APPLICATION_ERROR = -32500,
    SYSTEM_ERROR = -32400,
    TRANSPORT_ERROR = -32300,
}
export type ByteArray = object;
export enum Cacheability {
    CACHEABLE = 1,
    UNCACHEABLE = 2,
    INVALIDATES = 4,
    VALIDATES = 8,
}
export enum Expectation {
    UNRECOGNIZED = 1,
    CONTINUE = 2,
}
export enum MessageFlags {
    NO_REDIRECT = 2,
    CAN_REBUILD = 4,
    OVERWRITE_CHUNKS = 8,
    CONTENT_DECODED = 16,
    CERTIFICATE_TRUSTED = 32,
    NEW_CONNECTION = 64,
    IDEMPOTENT = 128,
    IGNORE_CONNECTION_LIMITS = 256,
    DO_NOT_USE_AUTH_CACHE = 512,
}
export enum ServerListenOptions {
    HTTPS = 1,
    IPV4_ONLY = 2,
    IPV6_ONLY = 4,
}
export class Address extends GObject.Object {
    constructor(config?: properties);
    family: AddressFamily;
    name: string;
    readonly physical: string;
    port: number;
    protocol: string;
    sockaddr: object;static new_any(family: AddressFamily, port: number): Address | null;
    static new_from_sockaddr(sa: object | null, len: number): Address | null;
    equal_by_ip(addr2: Address): boolean;
    equal_by_name(addr2: Address): boolean;
    get_gsockaddr(): Gio.SocketAddress;
    get_name(): string | null;
    get_physical(): string | null;
    get_port(): number;
    get_sockaddr(len: number): object | null;
    hash_by_ip(): number;
    hash_by_name(): number;
    is_resolved(): boolean;
    resolve_async(async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: AddressCallback, user_data: object | null): void;
    resolve_sync(cancellable: Gio.Cancellable | null): number;
}
export class Auth extends GObject.Object {
    constructor(config?: properties);
    host: string;
    realm: string;
    readonly scheme_name: string;
    authenticate(username: string, password: string): void;
    can_authenticate(): boolean;
    get_authorization(msg: Message): string;
    get_host(): string;
    get_info(): string;
    get_protection_space(source_uri: URI): string[];
    get_realm(): string;
    get_saved_password(user: string): string;
    get_saved_users(): string[];
    get_scheme_name(): string;
    has_saved_password(username: string, password: string): void;
    is_authenticated(): boolean;
    is_for_proxy(): boolean;
    is_ready(msg: Message): boolean;
    save_password(username: string, password: string): void;
    update(msg: Message, auth_header: string): boolean;
    vfunc_authenticate(username: string, password: string): void;
    vfunc_can_authenticate(): boolean;
    vfunc_get_authorization(msg: Message): string;
    vfunc_get_protection_space(source_uri: URI): string[];
    vfunc_is_authenticated(): boolean;
    vfunc_is_ready(msg: Message): boolean;
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean;
}
export class AuthBasic  {
    constructor(config?: properties);
}
export class AuthDigest  {
    constructor(config?: properties);
}
export class AuthDomain  {
    constructor(config?: properties);
    filter: AuthDomainFilter;
    filter_data: object;
    generic_auth_callback: AuthDomainGenericAuthCallback;
    generic_auth_data: object;
    proxy: boolean;
    realm: string;
    accepts(msg: Message): string | null;
    add_path(path: string): void;
    challenge(msg: Message): void;
    check_password(msg: Message, username: string, password: string): boolean;
    covers(msg: Message): boolean;
    get_realm(): string;
    remove_path(path: string): void;
    set_filter(filter: AuthDomainFilter, filter_data: object | null, dnotify: GLib.DestroyNotify): void;
    set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback, auth_data: object | null, dnotify: GLib.DestroyNotify): void;
    try_generic_auth_callback(msg: Message, username: string): boolean;
}
export class AuthDomainBasic extends AuthDomain {
    constructor(config?: properties);
    auth_callback: AuthDomainBasicAuthCallback;
    auth_data: object;
    set_auth_callback(callback: AuthDomainBasicAuthCallback, user_data: object | null, dnotify: GLib.DestroyNotify): void;
}
export class AuthDomainDigest extends AuthDomain {
    constructor(config?: properties);
    auth_callback: AuthDomainDigestAuthCallback;
    auth_data: object;
    set_auth_callback(callback: AuthDomainDigestAuthCallback, user_data: object | null, dnotify: GLib.DestroyNotify): void;
    static encode_password(username: string, realm: string, password: string): string;
}
export class AuthManager  {
    constructor(config?: properties);
    readonly priv: AuthManagerPrivate;
    clear_cached_credentials(): void;
    use_auth(uri: URI, auth: Auth): void;
}
export class AuthNTLM  {
    constructor(config?: properties);
}
export class AuthNegotiate  {
    constructor(config?: properties);
    static supported(): boolean;
}
export class Cache extends GObject.Object {
    constructor(config?: properties);
    cache_dir: string;
    cache_type: CacheType;
    clear(): void;
    dump(): void;
    flush(): void;
    get_max_size(): number;
    load(): void;
    set_max_size(max_size: number): void;
    vfunc_get_cacheability(msg: Message): Cacheability;
}
export class ContentDecoder  {
    constructor(config?: properties);
    readonly priv: ContentDecoderPrivate;
}
export class ContentSniffer extends GObject.Object {
    constructor(config?: properties);
    get_buffer_size(): number;
    sniff(msg: Message, buffer: Buffer): [string, GLib.HashTable | null];
    vfunc_get_buffer_size(): number;
    vfunc_sniff(msg: Message, buffer: Buffer): [string, GLib.HashTable | null];
}
export class CookieJar extends GObject.Object {
    constructor(config?: properties);
    accept_policy: CookieJarAcceptPolicy;
    read_only: boolean;
    add_cookie(cookie: Cookie): void;
    add_cookie_full(cookie: Cookie, uri: URI | null, first_party: URI | null): void;
    add_cookie_with_first_party(first_party: URI, cookie: Cookie): void;
    all_cookies(): string[];
    delete_cookie(cookie: Cookie): void;
    get_accept_policy(): CookieJarAcceptPolicy;
    get_cookie_list(uri: URI, for_http: boolean): string[];
    get_cookies(uri: URI, for_http: boolean): string | null;
    is_persistent(): boolean;
    save(): void;
    set_accept_policy(policy: CookieJarAcceptPolicy): void;
    set_cookie(uri: URI, cookie: string): void;
    set_cookie_with_first_party(uri: URI, first_party: URI, cookie: string): void;
    vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void;
    vfunc_is_persistent(): boolean;
    vfunc_save(): void;
}
export class CookieJarDB extends CookieJar {
    constructor(config?: properties);
    filename: string;
}
export class CookieJarText extends CookieJar {
    constructor(config?: properties);
    filename: string;
}
export class HSTSEnforcer extends GObject.Object {
    constructor(config?: properties);
    get_domains(session_policies: boolean): GLib.List;
    get_policies(session_policies: boolean): GLib.List;
    has_valid_policy(domain: string): boolean;
    is_persistent(): boolean;
    set_policy(policy: HSTSPolicy): void;
    set_session_policy(domain: string, include_subdomains: boolean): void;
    vfunc_changed(old_policy: HSTSPolicy, new_policy: HSTSPolicy): void;
    vfunc_has_valid_policy(domain: string): boolean;
    vfunc_hsts_enforced(message: Message): void;
    vfunc_is_persistent(): boolean;
}
export class HSTSEnforcerDB extends HSTSEnforcer {
    constructor(config?: properties);
    filename: string;
}
export class Logger extends GObject.Object {
    constructor(config?: properties);
    level: LoggerLogLevel;
    max_body_size: number;
    attach(session: Session): void;
    detach(session: Session): void;
    set_printer(printer: LoggerPrinter, printer_data: object | null, destroy: GLib.DestroyNotify): void;
    set_request_filter(request_filter: LoggerFilter, filter_data: object | null, destroy: GLib.DestroyNotify): void;
    set_response_filter(response_filter: LoggerFilter, filter_data: object | null, destroy: GLib.DestroyNotify): void;
}
export class Message extends GObject.Object {
    constructor(config?: properties);
    first_party: URI;
    flags: MessageFlags;
    http_version: HTTPVersion;
    method: string;
    priority: MessagePriority;
    reason_phrase: string;
    readonly request_body: MessageBody;
    readonly request_body_data: GLib.Bytes;
    readonly request_headers: MessageHeaders;
    readonly response_body: MessageBody;
    readonly response_body_data: GLib.Bytes;
    readonly response_headers: MessageHeaders;
    server_side: boolean;
    status_code: number;
    tls_certificate: Gio.TlsCertificate;
    tls_errors: Gio.TlsCertificateFlags;
    uri: URI;static new_from_uri(method: string, uri: URI): Message;
    content_sniffed(content_type: string, params: GLib.HashTable): void;
    disable_feature(feature_type: GType): void;
    finished(): void;
    get_address(): Address;
    get_first_party(): URI;
    get_flags(): MessageFlags;
    get_http_version(): HTTPVersion;
    get_https_status(): [boolean, Gio.TlsCertificate,Gio.TlsCertificateFlags];
    get_priority(): MessagePriority;
    get_soup_request(): Request;
    get_uri(): URI;
    got_body(): void;
    got_chunk(chunk: Buffer): void;
    got_headers(): void;
    got_informational(): void;
    is_keepalive(): boolean;
    restarted(): void;
    set_chunk_allocator(allocator: ChunkAllocator, user_data: object | null, destroy_notify: GLib.DestroyNotify): void;
    set_first_party(first_party: URI): void;
    set_flags(flags: MessageFlags): void;
    set_http_version(version: HTTPVersion): void;
    set_priority(priority: MessagePriority): void;
    set_redirect(status_code: number, redirect_uri: string): void;
    set_request(content_type: string | null, req_use: MemoryUse, req_body: number[] | null, req_length: number): void;
    set_response(content_type: string | null, resp_use: MemoryUse, resp_body: number[] | null, resp_length: number): void;
    set_status(status_code: number): void;
    set_status_full(status_code: number, reason_phrase: string): void;
    set_uri(uri: URI): void;
    starting(): void;
    wrote_body(): void;
    wrote_body_data(chunk: Buffer): void;
    wrote_chunk(): void;
    wrote_headers(): void;
    wrote_informational(): void;
    vfunc_finished(): void;
    vfunc_got_body(): void;
    vfunc_got_chunk(chunk: Buffer): void;
    vfunc_got_headers(): void;
    vfunc_got_informational(): void;
    vfunc_restarted(): void;
    vfunc_starting(): void;
    vfunc_wrote_body(): void;
    vfunc_wrote_chunk(): void;
    vfunc_wrote_headers(): void;
    vfunc_wrote_informational(): void;
}
export class MultipartInputStream extends Gio.FilterInputStream {
    constructor(config?: properties);
    message: Message;
    get_headers(): MessageHeaders | null;
    next_part(cancellable: Gio.Cancellable | null): Gio.InputStream | null;
    next_part_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, data: object | null): void;
    next_part_finish(result: Gio.AsyncResult): Gio.InputStream | null;
}
export class ProxyResolverDefault  {
    constructor(config?: properties);
    gproxy_resolver: Gio.ProxyResolver;
}
export class Request  {
    constructor(config?: properties);
    session: Session;
    uri: URI;
    readonly priv: RequestPrivate;
    get_content_length(): number;
    get_content_type(): string | null;
    get_session(): Session;
    get_uri(): URI;
    send(cancellable: Gio.Cancellable | null): Gio.InputStream;
    send_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    send_finish(result: Gio.AsyncResult): Gio.InputStream;
}
export class RequestData  {
    constructor(config?: properties);
    readonly priv: RequestDataPrivate;
}
export class RequestFile  {
    constructor(config?: properties);
    readonly priv: RequestFilePrivate;
    get_file(): Gio.File;
}
export class RequestHTTP  {
    constructor(config?: properties);
    readonly priv: RequestHTTPPrivate;
    get_message(): Message;
}
export class Requester extends GObject.Object {
    constructor(config?: properties);
    request(uri_string: string): Request;
    request_uri(uri: URI): Request;
}
export class Server extends GObject.Object {
    constructor(config?: properties);
    async_context: object;
    http_aliases: string[];
    https_aliases: string[];
    "interface": Address;
    port: number;
    raw_paths: boolean;
    server_header: string;
    ssl_cert_file: string;
    ssl_key_file: string;
    tls_certificate: Gio.TlsCertificate;
    accept_iostream(stream: Gio.IOStream, local_addr: Gio.SocketAddress | null, remote_addr: Gio.SocketAddress | null): boolean;
    add_auth_domain(auth_domain: AuthDomain): void;
    add_early_handler(path: string | null, callback: ServerCallback, user_data: object | null, destroy: GLib.DestroyNotify): void;
    add_handler(path: string | null, callback: ServerCallback, user_data: object | null, destroy: GLib.DestroyNotify): void;
    add_websocket_extension(extension_type: GType): void;
    add_websocket_handler(path: string | null, origin: string | null, protocols: string[] | null, callback: ServerWebsocketCallback, user_data: object | null, destroy: GLib.DestroyNotify): void;
    disconnect(): void;
    get_async_context(): GLib.MainContext | null;
    get_listener(): Socket;
    get_listeners(): string[];
    get_port(): number;
    get_uris(): string[];
    is_https(): boolean;
    listen(address: Gio.SocketAddress, options: ServerListenOptions): boolean;
    listen_all(port: number, options: ServerListenOptions): boolean;
    listen_fd(fd: number, options: ServerListenOptions): boolean;
    listen_local(port: number, options: ServerListenOptions): boolean;
    listen_socket(socket: Gio.Socket, options: ServerListenOptions): boolean;
    pause_message(msg: Message): void;
    quit(): void;
    remove_auth_domain(auth_domain: AuthDomain): void;
    remove_handler(path: string): void;
    remove_websocket_extension(extension_type: GType): void;
    run(): void;
    run_async(): void;
    set_ssl_cert_file(ssl_cert_file: string, ssl_key_file: string): boolean;
    unpause_message(msg: Message): void;
    vfunc_request_aborted(msg: Message, client: ClientContext): void;
    vfunc_request_finished(msg: Message, client: ClientContext): void;
    vfunc_request_read(msg: Message, client: ClientContext): void;
    vfunc_request_started(msg: Message, client: ClientContext): void;
}
export class Session extends GObject.Object {
    constructor(config?: properties);
    accept_language: string;
    accept_language_auto: boolean;
    async_context: object;
    http_aliases: string[];
    https_aliases: string[];
    idle_timeout: number;
    local_address: Address;
    max_conns: number;
    max_conns_per_host: number;
    proxy_resolver: Gio.ProxyResolver;
    proxy_uri: URI;
    ssl_ca_file: string;
    ssl_strict: boolean;
    ssl_use_system_ca_file: boolean;
    timeout: number;
    tls_database: Gio.TlsDatabase;
    tls_interaction: Gio.TlsInteraction;
    use_ntlm: boolean;
    use_thread_context: boolean;
    user_agent: string;
    abort(): void;
    add_feature(feature: SessionFeature): void;
    add_feature_by_type(feature_type: GType): void;
    cancel_message(msg: Message, status_code: number): void;
    connect_async(uri: URI, cancellable: Gio.Cancellable | null, progress_callback: SessionConnectProgressCallback | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    connect_finish(result: Gio.AsyncResult): Gio.IOStream;
    get_async_context(): GLib.MainContext | null;
    get_feature(feature_type: GType): SessionFeature | null;
    get_feature_for_message(feature_type: GType, msg: Message): SessionFeature | null;
    get_features(feature_type: GType): string[];
    has_feature(feature_type: GType): boolean;
    pause_message(msg: Message): void;
    prefetch_dns(hostname: string, cancellable: Gio.Cancellable | null, callback: AddressCallback | null, user_data: object | null): void;
    prepare_for_uri(uri: URI): void;
    queue_message(msg: Message, callback: SessionCallback | null, user_data: object | null): void;
    redirect_message(msg: Message): boolean;
    remove_feature(feature: SessionFeature): void;
    remove_feature_by_type(feature_type: GType): void;
    request(uri_string: string): Request;
    request_http(method: string, uri_string: string): RequestHTTP;
    request_http_uri(method: string, uri: URI): RequestHTTP;
    request_uri(uri: URI): Request;
    requeue_message(msg: Message): void;
    send(msg: Message, cancellable: Gio.Cancellable | null): Gio.InputStream;
    send_async(msg: Message, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    send_finish(result: Gio.AsyncResult): Gio.InputStream;
    send_message(msg: Message): number;
    steal_connection(msg: Message): Gio.IOStream;
    unpause_message(msg: Message): void;
    websocket_connect_async(msg: Message, origin: string | null, protocols: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    websocket_connect_finish(result: Gio.AsyncResult): WebsocketConnection;
    would_redirect(msg: Message): boolean;
    vfunc_auth_required(msg: Message, auth: Auth, retrying: boolean): void;
    vfunc_authenticate(msg: Message, auth: Auth, retrying: boolean): void;
    vfunc_cancel_message(msg: Message, status_code: number): void;
    vfunc_flush_queue(): void;
    vfunc_kick(): void;
    vfunc_queue_message(msg: Message, callback: SessionCallback | null, user_data: object | null): void;
    vfunc_request_started(msg: Message, socket: Socket): void;
    vfunc_requeue_message(msg: Message): void;
    vfunc_send_message(msg: Message): number;
}
export class SessionAsync extends Session {
    constructor(config?: properties);
}
export class SessionSync extends Session {
    constructor(config?: properties);
}
export class Socket extends GObject.Object {
    constructor(config?: properties);
    async_context: object;
    fd: number;
    gsocket: Gio.Socket;
    iostream: Gio.IOStream;
    ipv6_only: boolean;
    readonly is_server: boolean;
    local_address: Address;
    non_blocking: boolean;
    remote_address: Address;
    ssl_creds: object;
    ssl_fallback: boolean;
    ssl_strict: boolean;
    timeout: number;
    readonly tls_certificate: Gio.TlsCertificate;
    readonly tls_errors: Gio.TlsCertificateFlags;
    readonly trusted_certificate: boolean;
    use_thread_context: boolean;
    connect_async(cancellable: Gio.Cancellable | null, callback: SocketCallback, user_data: object | null): void;
    connect_sync(cancellable: Gio.Cancellable | null): number;
    disconnect(): void;
    get_fd(): number;
    get_local_address(): Address;
    get_remote_address(): Address;
    is_connected(): boolean;
    is_ssl(): boolean;
    listen(): boolean;
    read(buffer: number[], len: number, cancellable: Gio.Cancellable | null): [SocketIOStatus, number];
    read_until(buffer: number[], len: number, boundary: object | null, boundary_len: number, got_boundary: boolean, cancellable: Gio.Cancellable | null): [SocketIOStatus, number];
    start_proxy_ssl(ssl_host: string, cancellable: Gio.Cancellable | null): boolean;
    start_ssl(cancellable: Gio.Cancellable | null): boolean;
    write(buffer: number[], len: number, cancellable: Gio.Cancellable | null): [SocketIOStatus, number];
    vfunc_disconnected(): void;
    vfunc_new_connection(new_sock: Socket): void;
    vfunc_readable(): void;
    vfunc_writable(): void;
}
export class WebsocketConnection extends GObject.Object {
    constructor(config?: properties);
    connection_type: WebsocketConnectionType;
    extensions: object;
    io_stream: Gio.IOStream;
    keepalive_interval: number;
    max_incoming_payload_size: number;
    origin: string;
    protocol: string;
    readonly state: WebsocketState;
    uri: URI;static new_with_extensions(stream: Gio.IOStream, uri: URI, type: WebsocketConnectionType, origin: string | null, protocol: string | null, extensions: GLib.List): WebsocketConnection;
    close(code: number, data: string | null): void;
    get_close_code(): number;
    get_close_data(): string;
    get_connection_type(): WebsocketConnectionType;
    get_extensions(): GLib.List;
    get_io_stream(): Gio.IOStream;
    get_keepalive_interval(): number;
    get_max_incoming_payload_size(): number;
    get_origin(): string | null;
    get_protocol(): string | null;
    get_state(): WebsocketState;
    get_uri(): URI;
    send_binary(data: number[] | null, length: number): void;
    send_message(type: WebsocketDataType, message: GLib.Bytes): void;
    send_text(text: string): void;
    set_keepalive_interval(interval: number): void;
    set_max_incoming_payload_size(max_incoming_payload_size: number): void;
    vfunc_closed(): void;
    vfunc_closing(): void;
    vfunc_error(error: GLib.Error): void;
    vfunc_message(type: WebsocketDataType, message: GLib.Bytes): void;
    vfunc_pong(message: GLib.Bytes): void;
}
export class WebsocketExtension  {
    constructor(config?: properties);
    configure(connection_type: WebsocketConnectionType, params: GLib.HashTable | null): boolean;
    get_request_params(): string | null;
    get_response_params(): string | null;
    process_incoming_message(header: number, payload: GLib.Bytes): [GLib.Bytes, number];
    process_outgoing_message(header: number, payload: GLib.Bytes): [GLib.Bytes, number];
}
export class WebsocketExtensionDeflate  {
    constructor(config?: properties);
}
export class WebsocketExtensionManager  {
    constructor(config?: properties);
}
export class AuthManagerPrivate  {
    constructor(config?: properties);
}
export class Buffer  {
    constructor(config?: properties);
    static new_take(data: number[], length: number): Buffer;
    static new_with_owner(data: number[], length: number, owner: object | null, owner_dnotify: GLib.DestroyNotify | null): Buffer;
    copy(): Buffer;
    free(): void;
    get_as_bytes(): GLib.Bytes;
    get_data(): [number[],number];
    get_owner(): object | null;
    new_subbuffer(offset: number, length: number): Buffer;
}
export class CachePrivate  {
    constructor(config?: properties);
}
export class ClientContext  {
    constructor(config?: properties);
    get_address(): Address | null;
    get_auth_domain(): AuthDomain | null;
    get_auth_user(): string | null;
    get_gsocket(): Gio.Socket | null;
    get_host(): string | null;
    get_local_address(): Gio.SocketAddress | null;
    get_remote_address(): Gio.SocketAddress | null;
    get_socket(): Socket;
    steal_connection(): Gio.IOStream;
}
export class Connection  {
    constructor(config?: properties);
}
export class ContentDecoderPrivate  {
    constructor(config?: properties);
}
export class ContentSnifferPrivate  {
    constructor(config?: properties);
}
export class Cookie  {
    constructor(config?: properties);
    applies_to_uri(uri: URI): boolean;
    copy(): Cookie;
    domain_matches(host: string): boolean;
    equal(cookie2: Cookie): boolean;
    free(): void;
    get_domain(): string;
    get_expires(): Date | null;
    get_http_only(): boolean;
    get_name(): string;
    get_path(): string;
    get_secure(): boolean;
    get_value(): string;
    set_domain(domain: string): void;
    set_expires(expires: Date): void;
    set_http_only(http_only: boolean): void;
    set_max_age(max_age: number): void;
    set_name(name: string): void;
    set_path(path: string): void;
    set_secure(secure: boolean): void;
    set_value(value: string): void;
    to_cookie_header(): string;
    to_set_cookie_header(): string;
    static parse(header: string, origin: URI): Cookie | null;
}
export class Date  {
    constructor(config?: properties);
    static new_from_now(offset_seconds: number): Date;
    static new_from_string(date_string: string): Date | null;
    static new_from_time_t(when: number): Date;
    copy(): Date;
    free(): void;
    get_day(): number;
    get_hour(): number;
    get_minute(): number;
    get_month(): number;
    get_offset(): number;
    get_second(): number;
    get_utc(): number;
    get_year(): number;
    is_past(): boolean;
    to_string(format: DateFormat): string;
    to_time_t(): number;
    to_timeval(): [GLib.TimeVal];
}
export class HSTSEnforcerDBPrivate  {
    constructor(config?: properties);
}
export class HSTSEnforcerPrivate  {
    constructor(config?: properties);
}
export class HSTSPolicy  {
    constructor(config?: properties);
    static new_from_response(msg: Message): HSTSPolicy | null;
    static new_full(domain: string, max_age: number, expires: Date, include_subdomains: boolean): HSTSPolicy;
    static new_session_policy(domain: string, include_subdomains: boolean): HSTSPolicy;
    copy(): HSTSPolicy;
    equal(policy2: HSTSPolicy): boolean;
    free(): void;
    get_domain(): string;
    includes_subdomains(): boolean;
    is_expired(): boolean;
    is_session_policy(): boolean;
}
export class MessageBody  {
    constructor(config?: properties);
    append(use: MemoryUse, data: number[], length: number): void;
    append_buffer(buffer: Buffer): void;
    append_take(data: number[], length: number): void;
    complete(): void;
    flatten(): Buffer;
    free(): void;
    get_accumulate(): boolean;
    get_chunk(offset: number): Buffer | null;
    got_chunk(chunk: Buffer): void;
    set_accumulate(accumulate: boolean): void;
    truncate(): void;
    wrote_chunk(chunk: Buffer): void;
}
export class MessageHeaders  {
    constructor(config?: properties);
    append(name: string, value: string): void;
    clean_connection_headers(): void;
    clear(): void;
    foreach(func: MessageHeadersForeachFunc, user_data: object | null): void;
    free(): void;
    free_ranges(ranges: Range): void;
    get(name: string): string | null;
    get_content_disposition(): [boolean, string,GLib.HashTable];
    get_content_length(): number;
    get_content_range(): [boolean, number,number,number | null];
    get_content_type(): [string | null, GLib.HashTable | null];
    get_encoding(): Encoding;
    get_expectations(): Expectation;
    get_headers_type(): MessageHeadersType;
    get_list(name: string): string | null;
    get_one(name: string): string | null;
    get_ranges(total_length: number): [boolean, Range[],number];
    header_contains(name: string, token: string): boolean;
    header_equals(name: string, value: string): boolean;
    remove(name: string): void;
    replace(name: string, value: string): void;
    set_content_disposition(disposition: string, params: GLib.HashTable | null): void;
    set_content_length(content_length: number): void;
    set_content_range(start: number, end: number, total_length: number): void;
    set_content_type(content_type: string, params: GLib.HashTable | null): void;
    set_encoding(encoding: Encoding): void;
    set_expectations(expectations: Expectation): void;
    set_range(start: number, end: number): void;
    set_ranges(ranges: Range, length: number): void;
}
export class MessageHeadersIter  {
    constructor(config?: properties);
    readonly dummy: object[];
    next(): [boolean, string,string];
    static init(hdrs: MessageHeaders): [MessageHeadersIter];
}
export class MessageQueue  {
    constructor(config?: properties);
}
export class MessageQueueItem  {
    constructor(config?: properties);
}
export class Multipart  {
    constructor(config?: properties);
    static new_from_message(headers: MessageHeaders, body: MessageBody): Multipart | null;
    append_form_file(control_name: string, filename: string, content_type: string, body: Buffer): void;
    append_form_string(control_name: string, data: string): void;
    append_part(headers: MessageHeaders, body: Buffer): void;
    free(): void;
    get_length(): number;
    get_part(part: number): [boolean, MessageHeaders,Buffer];
    to_message(dest_headers: MessageHeaders, dest_body: MessageBody): void;
}
export class MultipartInputStreamPrivate  {
    constructor(config?: properties);
}
export class Range  {
    constructor(config?: properties);
    start: number;
    end: number;
}
export class RequestDataPrivate  {
    constructor(config?: properties);
}
export class RequestFilePrivate  {
    constructor(config?: properties);
}
export class RequestHTTPPrivate  {
    constructor(config?: properties);
}
export class RequestPrivate  {
    constructor(config?: properties);
}
export class RequesterPrivate  {
    constructor(config?: properties);
}
export class URI  {
    constructor(config?: properties);
    static new_with_base(base: URI, uri_string: string): URI;
    copy(): URI;
    copy_host(): URI;
    equal(uri2: URI): boolean;
    free(): void;
    get_fragment(): string;
    get_host(): string;
    get_password(): string;
    get_path(): string;
    get_port(): number;
    get_query(): string;
    get_scheme(): string;
    get_user(): string;
    host_equal(v2: URI): boolean;
    host_hash(): number;
    set_fragment(fragment: string | null): void;
    set_host(host: string | null): void;
    set_password(password: string | null): void;
    set_path(path: string): void;
    set_port(port: number): void;
    set_query(query: string | null): void;
    set_query_from_form(form: GLib.HashTable): void;
    set_scheme(scheme: string): void;
    set_user(user: string | null): void;
    to_string(just_path_and_query: boolean): string;
    uses_default_port(): boolean;
    static decode(part: string): string;
    static encode(part: string, escape_extra: string | null): string;
    static normalize(part: string, unescape_extra: string | null): string;
}
export class WebsocketConnectionPrivate  {
    constructor(config?: properties);
}
export class XMLRPCParams  {
    constructor(config?: properties);
    free(): void;
    parse(signature: string | null): GLib.Variant;
}
export interface PasswordManager  {
    get_passwords_async(msg: Message, auth: Auth, retrying: boolean, async_context: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback, user_data: object | null): void;
    get_passwords_sync(msg: Message, auth: Auth, cancellable: Gio.Cancellable | null): void;
}
export interface ProxyResolver  {
    get_proxy_async(msg: Message, async_context: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: ProxyResolverCallback, user_data: object | null): void;
    get_proxy_sync(msg: Message, cancellable: Gio.Cancellable | null): [number, Address];
}
export interface ProxyURIResolver  {
    get_proxy_uri_async(uri: URI, async_context: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback, user_data: object | null): void;
    get_proxy_uri_sync(uri: URI, cancellable: Gio.Cancellable | null): [number, URI];
}
export interface SessionFeature  {
    add_feature(type: GType): boolean;
    attach(session: Session): void;
    detach(session: Session): void;
    has_feature(type: GType): boolean;
    remove_feature(type: GType): boolean;
}