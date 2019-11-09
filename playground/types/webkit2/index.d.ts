
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as JavaScriptCore from "javascriptcore";
import * as Soup from "soup";
import * as WebKit2 from "webkit2";
import * as Gdk from "gdk";
import * as cairo from "cairo";
/**
 * webkit2.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type URISchemeRequestCallback = (request: URISchemeRequest, user_data: object | null) => void;
export const EDITING_COMMAND_COPY: string;
export const EDITING_COMMAND_CREATE_LINK: string;
export const EDITING_COMMAND_CUT: string;
export const EDITING_COMMAND_INSERT_IMAGE: string;
export const EDITING_COMMAND_PASTE: string;
export const EDITING_COMMAND_REDO: string;
export const EDITING_COMMAND_SELECT_ALL: string;
export const EDITING_COMMAND_UNDO: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
/**
 * 
 */
export function download_error_quark(): GLib.Quark;
/**
 * 
 */
export function favicon_database_error_quark(): GLib.Quark;
/**
 * Returns the major version number of the WebKit library.
 * (e.g. in WebKit version 1.8.3 this is 1.)
 * This function is in the library, so it represents the WebKit library
 * your code is running against. Contrast with the #WEBKIT_MAJOR_VERSION
 * macro, which represents the major version of the WebKit headers you
 * have included when compiling your code.
 */
export function get_major_version(): number;
/**
 * Returns the micro version number of the WebKit library.
 * (e.g. in WebKit version 1.8.3 this is 3.)
 * This function is in the library, so it represents the WebKit library
 * your code is running against. Contrast with the #WEBKIT_MICRO_VERSION
 * macro, which represents the micro version of the WebKit headers you
 * have included when compiling your code.
 */
export function get_micro_version(): number;
/**
 * Returns the minor version number of the WebKit library.
 * (e.g. in WebKit version 1.8.3 this is 8.)
 * This function is in the library, so it represents the WebKit library
 * your code is running against. Contrast with the #WEBKIT_MINOR_VERSION
 * macro, which represents the minor version of the WebKit headers you
 * have included when compiling your code.
 */
export function get_minor_version(): number;
/**
 * 
 */
export function javascript_error_quark(): GLib.Quark;
/**
 * 
 */
export function network_error_quark(): GLib.Quark;
/**
 * 
 */
export function plugin_error_quark(): GLib.Quark;
/**
 * 
 */
export function policy_error_quark(): GLib.Quark;
/**
 * 
 */
export function print_error_quark(): GLib.Quark;
/**
 * 
 */
export function snapshot_error_quark(): GLib.Quark;
/**
 * Use this function to format a URI for display. The URIs used internall
 * y by
 * WebKit may contain percent-encoded characters or Punycode, which are n
 * ot
 * generally suitable to display to users. This function provides protect
 * ion
 * against IDN homograph attacks, so in some cases the host part of the r
 * eturned
 * URI may be in Punycode if the safety check fails.
 */
export function uri_for_display(uri: string): string | null;
/**
 * 
 */
export function user_content_filter_error_quark(): GLib.Quark;
/**
 * 
 */
export function user_media_permission_is_for_audio_device(request: UserMediaPermissionRequest): boolean;
/**
 * 
 */
export function user_media_permission_is_for_video_device(request: UserMediaPermissionRequest): boolean;
export enum AuthenticationScheme {
    DEFAULT = 1,
    HTTP_BASIC = 2,
    HTTP_DIGEST = 3,
    HTML_FORM = 4,
    NTLM = 5,
    NEGOTIATE = 6,
    CLIENT_CERTIFICATE_REQUESTED = 7,
    SERVER_TRUST_EVALUATION_REQUESTED = 8,
    UNKNOWN = 100,
}
export enum CacheModel {
    DOCUMENT_VIEWER = 0,
    WEB_BROWSER = 1,
    DOCUMENT_BROWSER = 2,
}
export enum ContextMenuAction {
    NO_ACTION = 0,
    OPEN_LINK = 1,
    OPEN_LINK_IN_NEW_WINDOW = 2,
    DOWNLOAD_LINK_TO_DISK = 3,
    COPY_LINK_TO_CLIPBOARD = 4,
    OPEN_IMAGE_IN_NEW_WINDOW = 5,
    DOWNLOAD_IMAGE_TO_DISK = 6,
    COPY_IMAGE_TO_CLIPBOARD = 7,
    COPY_IMAGE_URL_TO_CLIPBOARD = 8,
    OPEN_FRAME_IN_NEW_WINDOW = 9,
    GO_BACK = 10,
    GO_FORWARD = 11,
    STOP = 12,
    RELOAD = 13,
    COPY = 14,
    CUT = 15,
    PASTE = 16,
    DELETE = 17,
    SELECT_ALL = 18,
    INPUT_METHODS = 19,
    UNICODE = 20,
    SPELLING_GUESS = 21,
    NO_GUESSES_FOUND = 22,
    IGNORE_SPELLING = 23,
    LEARN_SPELLING = 24,
    IGNORE_GRAMMAR = 25,
    FONT_MENU = 26,
    BOLD = 27,
    ITALIC = 28,
    UNDERLINE = 29,
    OUTLINE = 30,
    INSPECT_ELEMENT = 31,
    OPEN_VIDEO_IN_NEW_WINDOW = 32,
    OPEN_AUDIO_IN_NEW_WINDOW = 33,
    COPY_VIDEO_LINK_TO_CLIPBOARD = 34,
    COPY_AUDIO_LINK_TO_CLIPBOARD = 35,
    TOGGLE_MEDIA_CONTROLS = 36,
    TOGGLE_MEDIA_LOOP = 37,
    ENTER_VIDEO_FULLSCREEN = 38,
    MEDIA_PLAY = 39,
    MEDIA_PAUSE = 40,
    MEDIA_MUTE = 41,
    DOWNLOAD_VIDEO_TO_DISK = 42,
    DOWNLOAD_AUDIO_TO_DISK = 43,
    INSERT_EMOJI = 44,
    CUSTOM = 10000,
}
export enum CookieAcceptPolicy {
    ALWAYS = 0,
    NEVER = 1,
    NO_THIRD_PARTY = 2,
}
export enum CookiePersistentStorage {
    TEXT = 0,
    SQLITE = 1,
}
export enum CredentialPersistence {
    NONE = 0,
    FOR_SESSION = 1,
    PERMANENT = 2,
}
export enum DownloadError {
    NETWORK = 499,
    CANCELLED_BY_USER = 400,
    DESTINATION = 401,
}
export enum FaviconDatabaseError {
    NOT_INITIALIZED = 0,
    FAVICON_NOT_FOUND = 1,
    FAVICON_UNKNOWN = 2,
}
export enum HardwareAccelerationPolicy {
    ON_DEMAND = 0,
    ALWAYS = 1,
    NEVER = 2,
}
export enum InsecureContentEvent {
    RUN = 0,
    DISPLAYED = 1,
}
export enum JavascriptError {
    FAILED = 699,
}
export enum LoadEvent {
    STARTED = 0,
    REDIRECTED = 1,
    COMMITTED = 2,
    FINISHED = 3,
}
export enum NavigationType {
    LINK_CLICKED = 0,
    FORM_SUBMITTED = 1,
    BACK_FORWARD = 2,
    RELOAD = 3,
    FORM_RESUBMITTED = 4,
    OTHER = 5,
}
export enum NetworkError {
    FAILED = 399,
    TRANSPORT = 300,
    UNKNOWN_PROTOCOL = 301,
    CANCELLED = 302,
    FILE_DOES_NOT_EXIST = 303,
}
export enum NetworkProxyMode {
    DEFAULT = 0,
    NO_PROXY = 1,
    CUSTOM = 2,
}
export enum PluginError {
    FAILED = 299,
    CANNOT_FIND_PLUGIN = 200,
    CANNOT_LOAD_PLUGIN = 201,
    JAVA_UNAVAILABLE = 202,
    CONNECTION_CANCELLED = 203,
    WILL_HANDLE_LOAD = 204,
}
export enum PolicyDecisionType {
    NAVIGATION_ACTION = 0,
    NEW_WINDOW_ACTION = 1,
    RESPONSE = 2,
}
export enum PolicyError {
    FAILED = 199,
    CANNOT_SHOW_MIME_TYPE = 100,
    CANNOT_SHOW_URI = 101,
    FRAME_LOAD_INTERRUPTED_BY_POLICY_CHANGE = 102,
    CANNOT_USE_RESTRICTED_PORT = 103,
}
export enum PrintError {
    GENERAL = 599,
    PRINTER_NOT_FOUND = 500,
    INVALID_PAGE_RANGE = 501,
}
export enum PrintOperationResponse {
    PRINT = 0,
    CANCEL = 1,
}
export enum ProcessModel {
    SHARED_SECONDARY_PROCESS = 0,
    MULTIPLE_SECONDARY_PROCESSES = 1,
}
export enum SaveMode {
    MHTML = 0,
}
export enum ScriptDialogType {
    ALERT = 0,
    CONFIRM = 1,
    PROMPT = 2,
    BEFORE_UNLOAD_CONFIRM = 3,
}
export enum SnapshotError {
    CREATE = 799,
}
export enum SnapshotRegion {
    VISIBLE = 0,
    FULL_DOCUMENT = 1,
}
export enum TLSErrorsPolicy {
    IGNORE = 0,
    FAIL = 1,
}
export enum UserContentFilterError {
    INVALID_SOURCE = 0,
    NOT_FOUND = 1,
}
export enum UserContentInjectedFrames {
    ALL_FRAMES = 0,
    TOP_FRAME = 1,
}
export enum UserScriptInjectionTime {
    START = 0,
    END = 1,
}
export enum UserStyleLevel {
    USER = 0,
    AUTHOR = 1,
}
export enum WebProcessTerminationReason {
    CRASHED = 0,
    EXCEEDED_MEMORY_LIMIT = 1,
}
export enum EditorTypingAttributes {
    NONE = 2,
    BOLD = 4,
    ITALIC = 8,
    UNDERLINE = 16,
    STRIKETHROUGH = 32,
}
export enum FindOptions {
    NONE = 0,
    CASE_INSENSITIVE = 1,
    AT_WORD_STARTS = 2,
    TREAT_MEDIAL_CAPITAL_AS_WORD_START = 4,
    BACKWARDS = 8,
    WRAP_AROUND = 16,
}
export enum HitTestResultContext {
    DOCUMENT = 2,
    LINK = 4,
    IMAGE = 8,
    MEDIA = 16,
    EDITABLE = 32,
    SCROLLBAR = 64,
    SELECTION = 128,
}
export enum SnapshotOptions {
    NONE = 0,
    INCLUDE_SELECTION_HIGHLIGHTING = 1,
    TRANSPARENT_BACKGROUND = 2,
}
export enum WebsiteDataTypes {
    MEMORY_CACHE = 1,
    DISK_CACHE = 2,
    OFFLINE_APPLICATION_CACHE = 4,
    SESSION_STORAGE = 8,
    LOCAL_STORAGE = 16,
    WEBSQL_DATABASES = 32,
    INDEXEDDB_DATABASES = 64,
    PLUGIN_DATA = 128,
    COOKIES = 256,
    DEVICE_ID_HASH_SALT = 512,
    HSTS_CACHE = 1024,
    ALL = 2047,
}
export class AuthenticationRequest  {
    constructor(config?: properties);
    readonly priv: AuthenticationRequestPrivate;
    authenticate(credential: Credential | null): void;
    can_save_credentials(): boolean;
    cancel(): void;
    get_host(): string;
    get_port(): number;
    get_proposed_credential(): Credential;
    get_realm(): string;
    get_scheme(): AuthenticationScheme;
    is_for_proxy(): boolean;
    is_retry(): boolean;
}
export class AutomationSession  {
    constructor(config?: properties);
    id: string;
    readonly priv: AutomationSessionPrivate;
    get_application_info(): ApplicationInfo;
    get_id(): string;
    set_application_info(info: ApplicationInfo): void;
}
export class BackForwardList  {
    constructor(config?: properties);
    readonly priv: BackForwardListPrivate;
    get_back_item(): BackForwardListItem | null;
    get_back_list(): GLib.List;
    get_back_list_with_limit(limit: number): GLib.List;
    get_current_item(): BackForwardListItem | null;
    get_forward_item(): BackForwardListItem | null;
    get_forward_list(): GLib.List;
    get_forward_list_with_limit(limit: number): GLib.List;
    get_length(): number;
    get_nth_item(index: number): BackForwardListItem | null;
}
export class BackForwardListItem  {
    constructor(config?: properties);
    readonly priv: BackForwardListItemPrivate;
    get_original_uri(): string;
    get_title(): string;
    get_uri(): string;
}
export class ColorChooserRequest  {
    constructor(config?: properties);
    rgba: Gdk.RGBA;
    readonly priv: ColorChooserRequestPrivate;
    cancel(): void;
    finish(): void;
    get_element_rectangle(): [Gdk.Rectangle];
    get_rgba(): [Gdk.RGBA];
    set_rgba(rgba: Gdk.RGBA): void;
}
export class ContextMenu extends GObject.Object {
    constructor(config?: properties);
    static new_with_items(items: GLib.List): ContextMenu;
    append(item: ContextMenuItem): void;
    first(): ContextMenuItem;
    get_item_at_position(position: number): ContextMenuItem;
    get_items(): GLib.List;
    get_n_items(): number;
    get_user_data(): GLib.Variant;
    insert(item: ContextMenuItem, position: number): void;
    last(): ContextMenuItem;
    move_item(item: ContextMenuItem, position: number): void;
    prepend(item: ContextMenuItem): void;
    remove(item: ContextMenuItem): void;
    remove_all(): void;
    set_user_data(user_data: GLib.Variant): void;
}
export class ContextMenuItem extends GObject.InitiallyUnowned {
    constructor(config?: properties);
    static new_from_gaction(action: Gio.Action, label: string, target: GLib.Variant | null): ContextMenuItem;
    static new_from_stock_action(action: ContextMenuAction): ContextMenuItem;
    static new_from_stock_action_with_label(action: ContextMenuAction, label: string): ContextMenuItem;
    static new_separator(): ContextMenuItem;
    static new_with_submenu(label: string, submenu: ContextMenu): ContextMenuItem;
    get_action(): Gtk.Action;
    get_gaction(): Gio.Action;
    get_stock_action(): ContextMenuAction;
    get_submenu(): ContextMenu;
    is_separator(): boolean;
    set_submenu(submenu: ContextMenu | null): void;
}
export class CookieManager  {
    constructor(config?: properties);
    readonly priv: CookieManagerPrivate;
    add_cookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    add_cookie_finish(result: Gio.AsyncResult): boolean;
    delete_all_cookies(): void;
    delete_cookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    delete_cookie_finish(result: Gio.AsyncResult): boolean;
    delete_cookies_for_domain(domain: string): void;
    get_accept_policy(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_accept_policy_finish(result: Gio.AsyncResult): CookieAcceptPolicy;
    get_cookies(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_cookies_finish(result: Gio.AsyncResult): GLib.List;
    get_domains_with_cookies(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_domains_with_cookies_finish(result: Gio.AsyncResult): string[];
    set_accept_policy(policy: CookieAcceptPolicy): void;
    set_persistent_storage(filename: string, storage: CookiePersistentStorage): void;
}
export class DeviceInfoPermissionRequest  {
    constructor(config?: properties);
    readonly priv: DeviceInfoPermissionRequestPrivate;
}
export class Download  {
    constructor(config?: properties);
    allow_overwrite: boolean;
    readonly destination: string;
    readonly estimated_progress: number;
    readonly response: URIResponse;
    readonly priv: DownloadPrivate;
    cancel(): void;
    get_allow_overwrite(): boolean;
    get_destination(): string;
    get_elapsed_time(): number;
    get_estimated_progress(): number;
    get_received_data_length(): number;
    get_request(): URIRequest;
    get_response(): URIResponse;
    get_web_view(): WebView;
    set_allow_overwrite(allowed: boolean): void;
    set_destination(uri: string): void;
}
export class EditorState  {
    constructor(config?: properties);
    readonly typing_attributes: number;
    readonly priv: EditorStatePrivate;
    get_typing_attributes(): number;
    is_copy_available(): boolean;
    is_cut_available(): boolean;
    is_paste_available(): boolean;
    is_redo_available(): boolean;
    is_undo_available(): boolean;
}
export class FaviconDatabase  {
    constructor(config?: properties);
    readonly priv: FaviconDatabasePrivate;
    clear(): void;
    get_favicon(page_uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_favicon_finish(result: Gio.AsyncResult): cairo.Surface;
    get_favicon_uri(page_uri: string): string;
}
export class FileChooserRequest  {
    constructor(config?: properties);
    readonly filter: Gtk.FileFilter;
    readonly mime_types: string[];
    readonly select_multiple: boolean;
    readonly selected_files: string[];
    readonly priv: FileChooserRequestPrivate;
    cancel(): void;
    get_mime_types(): string[];
    get_mime_types_filter(): Gtk.FileFilter;
    get_select_multiple(): boolean;
    get_selected_files(): string[];
    select_files(files: string[]): void;
}
export class FindController  {
    constructor(config?: properties);
    readonly max_match_count: number;
    readonly options: FindOptions;
    readonly text: string;
    web_view: WebView;
    readonly priv: FindControllerPrivate;
    count_matches(search_text: string, find_options: number, max_match_count: number): void;
    get_max_match_count(): number;
    get_options(): number;
    get_search_text(): string;
    get_web_view(): WebView;
    search(search_text: string, find_options: number, max_match_count: number): void;
    search_finish(): void;
    search_next(): void;
    search_previous(): void;
}
export class FormSubmissionRequest  {
    constructor(config?: properties);
    readonly priv: FormSubmissionRequestPrivate;
    get_text_fields(): GLib.HashTable | null;
    list_text_fields(): [boolean, string[] | null,string[] | null];
    submit(): void;
}
export class GeolocationManager  {
    constructor(config?: properties);
    readonly enable_high_accuracy: boolean;
    readonly priv: GeolocationManagerPrivate;
    failed(error_message: string): void;
    get_enable_high_accuracy(): boolean;
    update_position(position: GeolocationPosition): void;
}
export class GeolocationPermissionRequest  {
    constructor(config?: properties);
    readonly priv: GeolocationPermissionRequestPrivate;
}
export class HitTestResult  {
    constructor(config?: properties);
    context: number;
    image_uri: string;
    link_label: string;
    link_title: string;
    link_uri: string;
    media_uri: string;
    readonly priv: HitTestResultPrivate;
    context_is_editable(): boolean;
    context_is_image(): boolean;
    context_is_link(): boolean;
    context_is_media(): boolean;
    context_is_scrollbar(): boolean;
    context_is_selection(): boolean;
    get_context(): number;
    get_image_uri(): string;
    get_link_label(): string;
    get_link_title(): string;
    get_link_uri(): string;
    get_media_uri(): string;
}
export class InstallMissingMediaPluginsPermissionRequest  {
    constructor(config?: properties);
    readonly priv: InstallMissingMediaPluginsPermissionRequestPrivate;
    get_description(): string;
}
export class NavigationPolicyDecision  {
    constructor(config?: properties);
    readonly frame_name: string;
    readonly modifiers: number;
    readonly mouse_button: number;
    readonly navigation_action: NavigationAction;
    readonly navigation_type: NavigationType;
    readonly request: URIRequest;
    readonly priv: NavigationPolicyDecisionPrivate;
    get_frame_name(): string;
    get_modifiers(): number;
    get_mouse_button(): number;
    get_navigation_action(): NavigationAction;
    get_navigation_type(): NavigationType;
    get_request(): URIRequest;
}
export class Notification  {
    constructor(config?: properties);
    readonly body: string;
    readonly id: number;
    readonly tag: string;
    readonly title: string;
    readonly priv: NotificationPrivate;
    clicked(): void;
    close(): void;
    get_body(): string;
    get_id(): number;
    get_tag(): string | null;
    get_title(): string;
}
export class NotificationPermissionRequest  {
    constructor(config?: properties);
    readonly priv: NotificationPermissionRequestPrivate;
}
export class OptionMenu  {
    constructor(config?: properties);
    readonly priv: OptionMenuPrivate;
    activate_item(index: number): void;
    close(): void;
    get_item(index: number): OptionMenuItem;
    get_n_items(): number;
    select_item(index: number): void;
}
export class Plugin  {
    constructor(config?: properties);
    readonly priv: PluginPrivate;
    get_description(): string;
    get_mime_info_list(): GLib.List;
    get_name(): string;
    get_path(): string;
}
export class PolicyDecision  {
    constructor(config?: properties);
    readonly priv: PolicyDecisionPrivate;
    download(): void;
    ignore(): void;
    use(): void;
}
export class PrintCustomWidget extends GObject.Object {
    constructor(config?: properties);
    title: string;
    widget: Gtk.Widget;
    get_title(): string;
    get_widget(): Gtk.Widget;
    vfunc_apply(widget: Gtk.Widget): void;
    vfunc_update(widget: Gtk.Widget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings): void;
}
export class PrintOperation extends GObject.Object {
    constructor(config?: properties);
    page_setup: Gtk.PageSetup;
    print_settings: Gtk.PrintSettings;
    web_view: WebView;
    get_page_setup(): Gtk.PageSetup;
    get_print_settings(): Gtk.PrintSettings;
    print(): void;
    run_dialog(parent: Gtk.Window | null): PrintOperationResponse;
    set_page_setup(page_setup: Gtk.PageSetup): void;
    set_print_settings(print_settings: Gtk.PrintSettings): void;
}
export class ResponsePolicyDecision  {
    constructor(config?: properties);
    readonly request: URIRequest;
    readonly response: URIResponse;
    readonly priv: ResponsePolicyDecisionPrivate;
    get_request(): URIRequest;
    get_response(): URIResponse;
    is_mime_type_supported(): boolean;
}
export class SecurityManager  {
    constructor(config?: properties);
    readonly priv: SecurityManagerPrivate;
    register_uri_scheme_as_cors_enabled(scheme: string): void;
    register_uri_scheme_as_display_isolated(scheme: string): void;
    register_uri_scheme_as_empty_document(scheme: string): void;
    register_uri_scheme_as_local(scheme: string): void;
    register_uri_scheme_as_no_access(scheme: string): void;
    register_uri_scheme_as_secure(scheme: string): void;
    uri_scheme_is_cors_enabled(scheme: string): boolean;
    uri_scheme_is_display_isolated(scheme: string): boolean;
    uri_scheme_is_empty_document(scheme: string): boolean;
    uri_scheme_is_local(scheme: string): boolean;
    uri_scheme_is_no_access(scheme: string): boolean;
    uri_scheme_is_secure(scheme: string): boolean;
}
export class Settings extends GObject.Object {
    constructor(config?: properties);
    allow_file_access_from_file_urls: boolean;
    allow_modal_dialogs: boolean;
    allow_universal_access_from_file_urls: boolean;
    auto_load_images: boolean;
    cursive_font_family: string;
    default_charset: string;
    default_font_family: string;
    default_font_size: number;
    default_monospace_font_size: number;
    draw_compositing_indicators: boolean;
    enable_accelerated_2d_canvas: boolean;
    enable_back_forward_navigation_gestures: boolean;
    enable_caret_browsing: boolean;
    enable_developer_extras: boolean;
    enable_dns_prefetching: boolean;
    enable_encrypted_media: boolean;
    enable_frame_flattening: boolean;
    enable_fullscreen: boolean;
    enable_html5_database: boolean;
    enable_html5_local_storage: boolean;
    enable_hyperlink_auditing: boolean;
    enable_java: boolean;
    enable_javascript: boolean;
    enable_javascript_markup: boolean;
    enable_media: boolean;
    enable_media_capabilities: boolean;
    enable_media_stream: boolean;
    enable_mediasource: boolean;
    enable_mock_capture_devices: boolean;
    enable_offline_web_application_cache: boolean;
    enable_page_cache: boolean;
    enable_plugins: boolean;
    enable_private_browsing: boolean;
    enable_resizable_text_areas: boolean;
    enable_site_specific_quirks: boolean;
    enable_smooth_scrolling: boolean;
    enable_spatial_navigation: boolean;
    enable_tabs_to_links: boolean;
    enable_webaudio: boolean;
    enable_webgl: boolean;
    enable_write_console_messages_to_stdout: boolean;
    enable_xss_auditor: boolean;
    fantasy_font_family: string;
    hardware_acceleration_policy: HardwareAccelerationPolicy;
    javascript_can_access_clipboard: boolean;
    javascript_can_open_windows_automatically: boolean;
    load_icons_ignoring_image_load_setting: boolean;
    media_playback_allows_inline: boolean;
    media_playback_requires_user_gesture: boolean;
    minimum_font_size: number;
    monospace_font_family: string;
    pictograph_font_family: string;
    print_backgrounds: boolean;
    sans_serif_font_family: string;
    serif_font_family: string;
    user_agent: string;
    zoom_text_only: boolean;
    get_allow_file_access_from_file_urls(): boolean;
    get_allow_modal_dialogs(): boolean;
    get_allow_universal_access_from_file_urls(): boolean;
    get_auto_load_images(): boolean;
    get_cursive_font_family(): string;
    get_default_charset(): string;
    get_default_font_family(): string;
    get_default_font_size(): number;
    get_default_monospace_font_size(): number;
    get_draw_compositing_indicators(): boolean;
    get_enable_accelerated_2d_canvas(): boolean;
    get_enable_back_forward_navigation_gestures(): boolean;
    get_enable_caret_browsing(): boolean;
    get_enable_developer_extras(): boolean;
    get_enable_dns_prefetching(): boolean;
    get_enable_encrypted_media(): boolean;
    get_enable_frame_flattening(): boolean;
    get_enable_fullscreen(): boolean;
    get_enable_html5_database(): boolean;
    get_enable_html5_local_storage(): boolean;
    get_enable_hyperlink_auditing(): boolean;
    get_enable_java(): boolean;
    get_enable_javascript(): boolean;
    get_enable_javascript_markup(): boolean;
    get_enable_media(): boolean;
    get_enable_media_capabilities(): boolean;
    get_enable_media_stream(): boolean;
    get_enable_mediasource(): boolean;
    get_enable_mock_capture_devices(): boolean;
    get_enable_offline_web_application_cache(): boolean;
    get_enable_page_cache(): boolean;
    get_enable_plugins(): boolean;
    get_enable_private_browsing(): boolean;
    get_enable_resizable_text_areas(): boolean;
    get_enable_site_specific_quirks(): boolean;
    get_enable_smooth_scrolling(): boolean;
    get_enable_spatial_navigation(): boolean;
    get_enable_tabs_to_links(): boolean;
    get_enable_webaudio(): boolean;
    get_enable_webgl(): boolean;
    get_enable_write_console_messages_to_stdout(): boolean;
    get_enable_xss_auditor(): boolean;
    get_fantasy_font_family(): string;
    get_hardware_acceleration_policy(): HardwareAccelerationPolicy;
    get_javascript_can_access_clipboard(): boolean;
    get_javascript_can_open_windows_automatically(): boolean;
    get_load_icons_ignoring_image_load_setting(): boolean;
    get_media_playback_allows_inline(): boolean;
    get_media_playback_requires_user_gesture(): boolean;
    get_minimum_font_size(): number;
    get_monospace_font_family(): string;
    get_pictograph_font_family(): string;
    get_print_backgrounds(): boolean;
    get_sans_serif_font_family(): string;
    get_serif_font_family(): string;
    get_user_agent(): string;
    get_zoom_text_only(): boolean;
    set_allow_file_access_from_file_urls(allowed: boolean): void;
    set_allow_modal_dialogs(allowed: boolean): void;
    set_allow_universal_access_from_file_urls(allowed: boolean): void;
    set_auto_load_images(enabled: boolean): void;
    set_cursive_font_family(cursive_font_family: string): void;
    set_default_charset(default_charset: string): void;
    set_default_font_family(default_font_family: string): void;
    set_default_font_size(font_size: number): void;
    set_default_monospace_font_size(font_size: number): void;
    set_draw_compositing_indicators(enabled: boolean): void;
    set_enable_accelerated_2d_canvas(enabled: boolean): void;
    set_enable_back_forward_navigation_gestures(enabled: boolean): void;
    set_enable_caret_browsing(enabled: boolean): void;
    set_enable_developer_extras(enabled: boolean): void;
    set_enable_dns_prefetching(enabled: boolean): void;
    set_enable_encrypted_media(enabled: boolean): void;
    set_enable_frame_flattening(enabled: boolean): void;
    set_enable_fullscreen(enabled: boolean): void;
    set_enable_html5_database(enabled: boolean): void;
    set_enable_html5_local_storage(enabled: boolean): void;
    set_enable_hyperlink_auditing(enabled: boolean): void;
    set_enable_java(enabled: boolean): void;
    set_enable_javascript(enabled: boolean): void;
    set_enable_javascript_markup(enabled: boolean): void;
    set_enable_media(enabled: boolean): void;
    set_enable_media_capabilities(enabled: boolean): void;
    set_enable_media_stream(enabled: boolean): void;
    set_enable_mediasource(enabled: boolean): void;
    set_enable_mock_capture_devices(enabled: boolean): void;
    set_enable_offline_web_application_cache(enabled: boolean): void;
    set_enable_page_cache(enabled: boolean): void;
    set_enable_plugins(enabled: boolean): void;
    set_enable_private_browsing(enabled: boolean): void;
    set_enable_resizable_text_areas(enabled: boolean): void;
    set_enable_site_specific_quirks(enabled: boolean): void;
    set_enable_smooth_scrolling(enabled: boolean): void;
    set_enable_spatial_navigation(enabled: boolean): void;
    set_enable_tabs_to_links(enabled: boolean): void;
    set_enable_webaudio(enabled: boolean): void;
    set_enable_webgl(enabled: boolean): void;
    set_enable_write_console_messages_to_stdout(enabled: boolean): void;
    set_enable_xss_auditor(enabled: boolean): void;
    set_fantasy_font_family(fantasy_font_family: string): void;
    set_hardware_acceleration_policy(policy: HardwareAccelerationPolicy): void;
    set_javascript_can_access_clipboard(enabled: boolean): void;
    set_javascript_can_open_windows_automatically(enabled: boolean): void;
    set_load_icons_ignoring_image_load_setting(enabled: boolean): void;
    set_media_playback_allows_inline(enabled: boolean): void;
    set_media_playback_requires_user_gesture(enabled: boolean): void;
    set_minimum_font_size(font_size: number): void;
    set_monospace_font_family(monospace_font_family: string): void;
    set_pictograph_font_family(pictograph_font_family: string): void;
    set_print_backgrounds(print_backgrounds: boolean): void;
    set_sans_serif_font_family(sans_serif_font_family: string): void;
    set_serif_font_family(serif_font_family: string): void;
    set_user_agent(user_agent: string | null): void;
    set_user_agent_with_application_details(application_name: string | null, application_version: string | null): void;
    set_zoom_text_only(zoom_text_only: boolean): void;
    static font_size_to_pixels(points: number): number;
    static font_size_to_points(pixels: number): number;
}
export class URIRequest extends GObject.Object {
    constructor(config?: properties);
    uri: string;
    get_http_headers(): Soup.MessageHeaders;
    get_http_method(): string;
    get_uri(): string;
    set_uri(uri: string): void;
}
export class URIResponse  {
    constructor(config?: properties);
    readonly content_length: number;
    readonly http_headers: Soup.MessageHeaders;
    readonly mime_type: string;
    readonly status_code: number;
    readonly suggested_filename: string;
    readonly uri: string;
    readonly priv: URIResponsePrivate;
    get_content_length(): number;
    get_http_headers(): Soup.MessageHeaders;
    get_mime_type(): string;
    get_status_code(): number;
    get_suggested_filename(): string;
    get_uri(): string;
}
export class URISchemeRequest  {
    constructor(config?: properties);
    readonly priv: URISchemeRequestPrivate;
    finish(stream: Gio.InputStream, stream_length: number, mime_type: string | null): void;
    finish_error(error: GLib.Error): void;
    get_path(): string;
    get_scheme(): string;
    get_uri(): string;
    get_web_view(): WebView;
}
export class UserContentFilterStore extends GObject.Object {
    constructor(config?: properties);
    path: string;
    fetch_identifiers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    fetch_identifiers_finish(result: Gio.AsyncResult): string[];
    get_path(): string;
    load(identifier: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    load_finish(result: Gio.AsyncResult): UserContentFilter;
    remove(identifier: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    remove_finish(result: Gio.AsyncResult): boolean;
    save(identifier: string, source: GLib.Bytes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    save_finish(result: Gio.AsyncResult): UserContentFilter;
    save_from_file(identifier: string, file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    save_from_file_finish(result: Gio.AsyncResult): UserContentFilter;
}
export class UserContentManager extends GObject.Object {
    constructor(config?: properties);
    add_filter(filter: UserContentFilter): void;
    add_script(script: UserScript): void;
    add_style_sheet(stylesheet: UserStyleSheet): void;
    register_script_message_handler(name: string): boolean;
    register_script_message_handler_in_world(name: string, world_name: string): boolean;
    remove_all_filters(): void;
    remove_all_scripts(): void;
    remove_all_style_sheets(): void;
    remove_filter(filter: UserContentFilter): void;
    remove_filter_by_id(filter_id: string): void;
    unregister_script_message_handler(name: string): void;
    unregister_script_message_handler_in_world(name: string, world_name: string): void;
}
export class UserMediaPermissionRequest  {
    constructor(config?: properties);
    readonly is_for_audio_device: boolean;
    readonly is_for_video_device: boolean;
    readonly priv: UserMediaPermissionRequestPrivate;
}
export class WebContext extends GObject.Object {
    constructor(config?: properties);
    local_storage_directory: string;
    website_data_manager: WebsiteDataManager;static new_ephemeral(): WebContext;
    static new_with_website_data_manager(manager: WebsiteDataManager): WebContext;
    add_path_to_sandbox(path: string, read_only: boolean): void;
    allow_tls_certificate_for_host(certificate: Gio.TlsCertificate, host: string): void;
    clear_cache(): void;
    download_uri(uri: string): Download;
    get_cache_model(): CacheModel;
    get_cookie_manager(): CookieManager;
    get_favicon_database(): FaviconDatabase;
    get_favicon_database_directory(): string;
    get_geolocation_manager(): GeolocationManager;
    get_plugins(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_plugins_finish(result: Gio.AsyncResult): GLib.List;
    get_process_model(): ProcessModel;
    get_sandbox_enabled(): boolean;
    get_security_manager(): SecurityManager;
    get_spell_checking_enabled(): boolean;
    get_spell_checking_languages(): string[];
    get_tls_errors_policy(): TLSErrorsPolicy;
    get_web_process_count_limit(): number;
    get_website_data_manager(): WebsiteDataManager;
    initialize_notification_permissions(allowed_origins: GLib.List, disallowed_origins: GLib.List): void;
    is_automation_allowed(): boolean;
    is_ephemeral(): boolean;
    prefetch_dns(hostname: string): void;
    register_uri_scheme(scheme: string, callback: URISchemeRequestCallback, user_data: object | null, user_data_destroy_func: GLib.DestroyNotify): void;
    set_additional_plugins_directory(directory: string): void;
    set_automation_allowed(allowed: boolean): void;
    set_cache_model(cache_model: CacheModel): void;
    set_disk_cache_directory(directory: string): void;
    set_favicon_database_directory(path: string | null): void;
    set_network_proxy_settings(proxy_mode: NetworkProxyMode, proxy_settings: NetworkProxySettings | null): void;
    set_preferred_languages(languages: string[] | null): void;
    set_process_model(process_model: ProcessModel): void;
    set_sandbox_enabled(enabled: boolean): void;
    set_spell_checking_enabled(enabled: boolean): void;
    set_spell_checking_languages(languages: string[]): void;
    set_tls_errors_policy(policy: TLSErrorsPolicy): void;
    set_web_extensions_directory(directory: string): void;
    set_web_extensions_initialization_user_data(user_data: GLib.Variant): void;
    set_web_process_count_limit(limit: number): void;
    vfunc_automation_started(session: AutomationSession): void;
    vfunc_download_started(download: Download): void;
    vfunc_initialize_notification_permissions(): void;
    vfunc_initialize_web_extensions(): void;
    static get_default(): WebContext;
}
export class WebInspector  {
    constructor(config?: properties);
    readonly attached_height: number;
    readonly can_attach: boolean;
    readonly inspected_uri: string;
    readonly priv: WebInspectorPrivate;
    attach(): void;
    close(): void;
    detach(): void;
    get_attached_height(): number;
    get_can_attach(): boolean;
    get_inspected_uri(): string;
    get_web_view(): WebViewBase;
    is_attached(): boolean;
    show(): void;
}
export class WebResource  {
    constructor(config?: properties);
    readonly response: URIResponse;
    readonly uri: string;
    readonly priv: WebResourcePrivate;
    get_data(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_data_finish(result: Gio.AsyncResult): [number[], number | null];
    get_response(): URIResponse;
    get_uri(): string;
}
export class WebView extends WebViewBase {
    constructor(config?: properties);
    editable: boolean;
    readonly estimated_load_progress: number;
    readonly favicon: object;
    related_view: WebView;
    settings: Settings;
    readonly title: string;
    readonly uri: string;
    user_content_manager: UserContentManager;
    web_context: WebContext;
    zoom_level: number;static new_with_context(context: WebContext): Gtk.Widget;
    static new_with_related_view(web_view: WebView): Gtk.Widget;
    static new_with_settings(settings: Settings): Gtk.Widget;
    static new_with_user_content_manager(user_content_manager: UserContentManager): Gtk.Widget;
    can_execute_editing_command(command: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    can_execute_editing_command_finish(result: Gio.AsyncResult): boolean;
    can_go_back(): boolean;
    can_go_forward(): boolean;
    can_show_mime_type(mime_type: string): boolean;
    download_uri(uri: string): Download;
    execute_editing_command(command: string): void;
    execute_editing_command_with_argument(command: string, argument: string): void;
    get_back_forward_list(): BackForwardList;
    get_background_color(): [Gdk.RGBA];
    get_context(): WebContext;
    get_custom_charset(): string;
    get_editor_state(): EditorState;
    get_estimated_load_progress(): number;
    get_favicon(): cairo.Surface;
    get_find_controller(): FindController;
    get_inspector(): WebInspector;
    get_main_resource(): WebResource;
    get_page_id(): number;
    get_session_state(): WebViewSessionState;
    get_settings(): Settings;
    get_snapshot(region: SnapshotRegion, options: SnapshotOptions, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    get_snapshot_finish(result: Gio.AsyncResult): cairo.Surface;
    get_title(): string;
    get_tls_info(): [boolean, Gio.TlsCertificate,Gio.TlsCertificateFlags];
    get_uri(): string;
    get_user_content_manager(): UserContentManager;
    get_website_data_manager(): WebsiteDataManager;
    get_window_properties(): WindowProperties;
    get_zoom_level(): number;
    go_back(): void;
    go_forward(): void;
    go_to_back_forward_list_item(list_item: BackForwardListItem): void;
    is_controlled_by_automation(): boolean;
    is_editable(): boolean;
    is_ephemeral(): boolean;
    is_loading(): boolean;
    is_playing_audio(): boolean;
    load_alternate_html(content: string, content_uri: string, base_uri: string | null): void;
    load_bytes(bytes: GLib.Bytes, mime_type: string | null, encoding: string | null, base_uri: string | null): void;
    load_html(content: string, base_uri: string | null): void;
    load_plain_text(plain_text: string): void;
    load_request(request: URIRequest): void;
    load_uri(uri: string): void;
    reload(): void;
    reload_bypass_cache(): void;
    restore_session_state(state: WebViewSessionState): void;
    run_javascript(script: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    run_javascript_finish(result: Gio.AsyncResult): JavascriptResult;
    run_javascript_from_gresource(resource: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    run_javascript_from_gresource_finish(result: Gio.AsyncResult): JavascriptResult;
    run_javascript_in_world(script: string, world_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    run_javascript_in_world_finish(result: Gio.AsyncResult): JavascriptResult;
    save(save_mode: SaveMode, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    save_finish(result: Gio.AsyncResult): Gio.InputStream;
    save_to_file(file: Gio.File, save_mode: SaveMode, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    save_to_file_finish(result: Gio.AsyncResult): boolean;
    set_background_color(rgba: Gdk.RGBA): void;
    set_custom_charset(charset: string | null): void;
    set_editable(editable: boolean): void;
    set_settings(settings: Settings): void;
    set_zoom_level(zoom_level: number): void;
    stop_loading(): void;
    try_close(): void;
    vfunc_authenticate(request: AuthenticationRequest): boolean;
    vfunc_close(): void;
    vfunc_context_menu(context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult): boolean;
    vfunc_context_menu_dismissed(): void;
    vfunc_decide_policy(decision: PolicyDecision, type: PolicyDecisionType): boolean;
    vfunc_enter_fullscreen(): boolean;
    vfunc_insecure_content_detected(event: InsecureContentEvent): void;
    vfunc_leave_fullscreen(): boolean;
    vfunc_load_changed(load_event: LoadEvent): void;
    vfunc_load_failed(load_event: LoadEvent, failing_uri: string, error: GLib.Error): boolean;
    vfunc_load_failed_with_tls_errors(failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean;
    vfunc_mouse_target_changed(hit_test_result: HitTestResult, modifiers: number): void;
    vfunc_permission_request(permission_request: PermissionRequest): boolean;
    vfunc_print(print_operation: PrintOperation): boolean;
    vfunc_ready_to_show(): void;
    vfunc_resource_load_started(resource: WebResource, request: URIRequest): void;
    vfunc_run_as_modal(): void;
    vfunc_run_color_chooser(request: ColorChooserRequest): boolean;
    vfunc_run_file_chooser(request: FileChooserRequest): boolean;
    vfunc_script_dialog(dialog: ScriptDialog): boolean;
    vfunc_show_notification(notification: Notification): boolean;
    vfunc_show_option_menu(rectangle: Gdk.Rectangle, menu: OptionMenu): boolean;
    vfunc_submit_form(request: FormSubmissionRequest): void;
    vfunc_web_process_crashed(): boolean;
    vfunc_web_process_terminated(reason: WebProcessTerminationReason): void;
}
export class WebViewBase  {
    constructor(config?: properties);
    readonly parentInstance: Gtk.Container;
    readonly priv: WebViewBasePrivate;
}
export class WebsiteDataManager extends GObject.Object {
    constructor(config?: properties);
    base_cache_directory: string;
    base_data_directory: string;
    disk_cache_directory: string;
    hsts_cache_directory: string;
    indexeddb_directory: string;
    local_storage_directory: string;
    offline_application_cache_directory: string;
    websql_directory: string;static new_ephemeral(): WebsiteDataManager;
    clear(types: WebsiteDataTypes, timespan: GLib.TimeSpan, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    clear_finish(result: Gio.AsyncResult): boolean;
    fetch(types: WebsiteDataTypes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    fetch_finish(result: Gio.AsyncResult): GLib.List;
    get_base_cache_directory(): string | null;
    get_base_data_directory(): string | null;
    get_cookie_manager(): CookieManager;
    get_disk_cache_directory(): string | null;
    get_hsts_cache_directory(): string | null;
    get_indexeddb_directory(): string | null;
    get_local_storage_directory(): string | null;
    get_offline_application_cache_directory(): string | null;
    get_websql_directory(): string | null;
    is_ephemeral(): boolean;
    remove(types: WebsiteDataTypes, website_data: GLib.List, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    remove_finish(result: Gio.AsyncResult): boolean;
}
export class WindowProperties  {
    constructor(config?: properties);
    fullscreen: boolean;
    geometry: Gdk.Rectangle;
    locationbar_visible: boolean;
    menubar_visible: boolean;
    resizable: boolean;
    scrollbars_visible: boolean;
    statusbar_visible: boolean;
    toolbar_visible: boolean;
    readonly priv: WindowPropertiesPrivate;
    get_fullscreen(): boolean;
    get_geometry(): [Gdk.Rectangle];
    get_locationbar_visible(): boolean;
    get_menubar_visible(): boolean;
    get_resizable(): boolean;
    get_scrollbars_visible(): boolean;
    get_statusbar_visible(): boolean;
    get_toolbar_visible(): boolean;
}
export class ApplicationInfo  {
    constructor(config?: properties);
    get_name(): string;
    get_version(): [number,number | null,number | null];
    ref(): ApplicationInfo;
    set_name(name: string): void;
    set_version(major: number, minor: number, micro: number): void;
    unref(): void;
}
export class AuthenticationRequestPrivate  {
    constructor(config?: properties);
}
export class AutomationSessionPrivate  {
    constructor(config?: properties);
}
export class BackForwardListItemPrivate  {
    constructor(config?: properties);
}
export class BackForwardListPrivate  {
    constructor(config?: properties);
}
export class ColorChooserRequestPrivate  {
    constructor(config?: properties);
}
export class ContextMenuItemPrivate  {
    constructor(config?: properties);
}
export class ContextMenuPrivate  {
    constructor(config?: properties);
}
export class CookieManagerPrivate  {
    constructor(config?: properties);
}
export class Credential  {
    constructor(config?: properties);
    copy(): Credential;
    free(): void;
    get_password(): string;
    get_persistence(): CredentialPersistence;
    get_username(): string;
    has_password(): boolean;
}
export class DeviceInfoPermissionRequestPrivate  {
    constructor(config?: properties);
}
export class DownloadPrivate  {
    constructor(config?: properties);
}
export class EditorStatePrivate  {
    constructor(config?: properties);
}
export class FaviconDatabasePrivate  {
    constructor(config?: properties);
}
export class FileChooserRequestPrivate  {
    constructor(config?: properties);
}
export class FindControllerPrivate  {
    constructor(config?: properties);
}
export class FormSubmissionRequestPrivate  {
    constructor(config?: properties);
}
export class GeolocationManagerPrivate  {
    constructor(config?: properties);
}
export class GeolocationPermissionRequestPrivate  {
    constructor(config?: properties);
}
export class GeolocationPosition  {
    constructor(config?: properties);
    copy(): GeolocationPosition;
    free(): void;
    set_altitude(altitude: number): void;
    set_altitude_accuracy(altitude_accuracy: number): void;
    set_heading(heading: number): void;
    set_speed(speed: number): void;
    set_timestamp(timestamp: number): void;
}
export class HitTestResultPrivate  {
    constructor(config?: properties);
}
export class InstallMissingMediaPluginsPermissionRequestPrivate  {
    constructor(config?: properties);
}
export class JavascriptResult  {
    constructor(config?: properties);
    get_js_value(): JavaScriptCore.Value;
    ref(): JavascriptResult;
    unref(): void;
}
export class MimeInfo  {
    constructor(config?: properties);
    get_description(): string;
    get_extensions(): string[];
    get_mime_type(): string;
    ref(): MimeInfo;
    unref(): void;
}
export class NavigationAction  {
    constructor(config?: properties);
    copy(): NavigationAction;
    free(): void;
    get_modifiers(): number;
    get_mouse_button(): number;
    get_navigation_type(): NavigationType;
    get_request(): URIRequest;
    is_redirect(): boolean;
    is_user_gesture(): boolean;
}
export class NavigationPolicyDecisionPrivate  {
    constructor(config?: properties);
}
export class NetworkProxySettings  {
    constructor(config?: properties);
    add_proxy_for_scheme(scheme: string, proxy_uri: string): void;
    copy(): NetworkProxySettings;
    free(): void;
}
export class NotificationPermissionRequestPrivate  {
    constructor(config?: properties);
}
export class NotificationPrivate  {
    constructor(config?: properties);
}
export class OptionMenuItem  {
    constructor(config?: properties);
    copy(): OptionMenuItem;
    free(): void;
    get_label(): string;
    get_tooltip(): string;
    is_enabled(): boolean;
    is_group_child(): boolean;
    is_group_label(): boolean;
    is_selected(): boolean;
}
export class OptionMenuPrivate  {
    constructor(config?: properties);
}
export class PluginPrivate  {
    constructor(config?: properties);
}
export class PolicyDecisionPrivate  {
    constructor(config?: properties);
}
export class PrintCustomWidgetPrivate  {
    constructor(config?: properties);
}
export class PrintOperationPrivate  {
    constructor(config?: properties);
}
export class ResponsePolicyDecisionPrivate  {
    constructor(config?: properties);
}
export class ScriptDialog  {
    constructor(config?: properties);
    close(): void;
    confirm_set_confirmed(confirmed: boolean): void;
    get_dialog_type(): ScriptDialogType;
    get_message(): string;
    prompt_get_default_text(): string;
    prompt_set_text(text: string): void;
    ref(): ScriptDialog;
    unref(): void;
}
export class SecurityManagerPrivate  {
    constructor(config?: properties);
}
export class SecurityOrigin  {
    constructor(config?: properties);
    static new_for_uri(uri: string): SecurityOrigin;
    get_host(): string | null;
    get_port(): number;
    get_protocol(): string | null;
    is_opaque(): boolean;
    ref(): SecurityOrigin;
    to_string(): string | null;
    unref(): void;
}
export class SettingsPrivate  {
    constructor(config?: properties);
}
export class URIRequestPrivate  {
    constructor(config?: properties);
}
export class URIResponsePrivate  {
    constructor(config?: properties);
}
export class URISchemeRequestPrivate  {
    constructor(config?: properties);
}
export class UserContentFilter  {
    constructor(config?: properties);
    get_identifier(): string;
    ref(): UserContentFilter;
    unref(): void;
}
export class UserContentFilterStorePrivate  {
    constructor(config?: properties);
}
export class UserContentManagerPrivate  {
    constructor(config?: properties);
}
export class UserMediaPermissionRequestPrivate  {
    constructor(config?: properties);
}
export class UserScript  {
    constructor(config?: properties);
    static new_for_world(source: string, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, world_name: string, whitelist: string[] | null, blacklist: string[] | null): UserScript;
    ref(): UserScript;
    unref(): void;
}
export class UserStyleSheet  {
    constructor(config?: properties);
    static new_for_world(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, world_name: string, whitelist: string[] | null, blacklist: string[] | null): UserStyleSheet;
    ref(): UserStyleSheet;
    unref(): void;
}
export class WebContextPrivate  {
    constructor(config?: properties);
}
export class WebInspectorPrivate  {
    constructor(config?: properties);
}
export class WebResourcePrivate  {
    constructor(config?: properties);
}
export class WebViewBasePrivate  {
    constructor(config?: properties);
}
export class WebViewPrivate  {
    constructor(config?: properties);
}
export class WebViewSessionState  {
    constructor(config?: properties);
    ref(): WebViewSessionState;
    serialize(): GLib.Bytes;
    unref(): void;
}
export class WebsiteData  {
    constructor(config?: properties);
    get_name(): string;
    get_size(types: WebsiteDataTypes): number;
    get_types(): WebsiteDataTypes;
    ref(): WebsiteData;
    unref(): void;
}
export class WebsiteDataManagerPrivate  {
    constructor(config?: properties);
}
export class WindowPropertiesPrivate  {
    constructor(config?: properties);
}
export interface PermissionRequest  {
    allow(): void;
    deny(): void;
}