
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GModule from "gmodule";
import * as Grl from "grl";
/**
 * grl.d.ts
 */
type properties = { [key: string]: any };
export type PluginDeinitFunc = (plugin: Plugin) => void;
export type PluginInitFunc = (registry: Registry, plugin: Plugin, configs: GLib.List) => boolean;
export type PluginRegisterKeysFunc = (registry: Registry, plugin: Plugin) => void;
export type SourceRemoveCb = (source: Source, media: Media, user_data: object | null, error: GLib.Error | null) => void;
export type SourceResolveCb = (source: Source, operation_id: number, media: Media, user_data: object | null, error: GLib.Error | null) => void;
export type SourceResultCb = (source: Source, operation_id: number, media: Media | null, remaining: number, user_data: object | null, error: GLib.Error | null) => void;
export type SourceStoreCb = (source: Source, media: Media, failed_keys: GLib.List, user_data: object | null, error: GLib.Error | null) => void;
export const CONFIG_KEY_APIKEY: string;
export const CONFIG_KEY_APIKEY_BLOB: string;
export const CONFIG_KEY_APISECRET: string;
export const CONFIG_KEY_APITOKEN: string;
export const CONFIG_KEY_APITOKEN_SECRET: string;
export const CONFIG_KEY_PASSWORD: string;
export const CONFIG_KEY_PLUGIN: string;
export const CONFIG_KEY_SOURCE: string;
export const CONFIG_KEY_USERNAME: string;
export const COUNT_INFINITY: number;
export const KEYID_FORMAT: string;
export const METADATA_KEY_ALBUM: number;
export const METADATA_KEY_ALBUM_ARTIST: number;
export const METADATA_KEY_ALBUM_DISC_NUMBER: number;
export const METADATA_KEY_ARTIST: number;
export const METADATA_KEY_AUDIO_TRACK: number;
export const METADATA_KEY_AUTHOR: number;
export const METADATA_KEY_BITRATE: number;
export const METADATA_KEY_CAMERA_MODEL: number;
export const METADATA_KEY_CERTIFICATE: number;
export const METADATA_KEY_CHILDCOUNT: number;
export const METADATA_KEY_CHILDCOUNT_UNKNOWN: number;
export const METADATA_KEY_COMPOSER: number;
export const METADATA_KEY_CREATION_DATE: number;
export const METADATA_KEY_DESCRIPTION: number;
export const METADATA_KEY_DIRECTOR: number;
export const METADATA_KEY_DURATION: number;
export const METADATA_KEY_EPISODE: number;
export const METADATA_KEY_EPISODE_TITLE: number;
export const METADATA_KEY_EXPOSURE_TIME: number;
export const METADATA_KEY_EXTERNAL_PLAYER: number;
export const METADATA_KEY_EXTERNAL_URL: number;
export const METADATA_KEY_FAVOURITE: number;
export const METADATA_KEY_FLASH_USED: number;
export const METADATA_KEY_FRAMERATE: number;
export const METADATA_KEY_GENRE: number;
export const METADATA_KEY_HEIGHT: number;
export const METADATA_KEY_ID: number;
export const METADATA_KEY_INVALID: number;
export const METADATA_KEY_ISO_SPEED: number;
export const METADATA_KEY_KEYWORD: number;
export const METADATA_KEY_LAST_PLAYED: number;
export const METADATA_KEY_LAST_POSITION: number;
export const METADATA_KEY_LICENSE: number;
export const METADATA_KEY_LYRICS: number;
export const METADATA_KEY_MB_ALBUM_ID: number;
export const METADATA_KEY_MB_ARTIST_ID: number;
export const METADATA_KEY_MB_RECORDING_ID: number;
export const METADATA_KEY_MB_RELEASE_GROUP_ID: number;
export const METADATA_KEY_MB_RELEASE_ID: number;
export const METADATA_KEY_MB_TRACK_ID: number;
export const METADATA_KEY_MIME: number;
export const METADATA_KEY_MODIFICATION_DATE: number;
export const METADATA_KEY_ORIENTATION: number;
export const METADATA_KEY_ORIGINAL_TITLE: number;
export const METADATA_KEY_PERFORMER: number;
export const METADATA_KEY_PLAY_COUNT: number;
export const METADATA_KEY_PRODUCER: number;
export const METADATA_KEY_PUBLICATION_DATE: number;
export const METADATA_KEY_RATING: number;
export const METADATA_KEY_REGION: number;
export const METADATA_KEY_SEASON: number;
export const METADATA_KEY_SHOW: number;
export const METADATA_KEY_SITE: number;
export const METADATA_KEY_SIZE: number;
export const METADATA_KEY_SOURCE: number;
export const METADATA_KEY_START_TIME: number;
export const METADATA_KEY_STUDIO: number;
export const METADATA_KEY_THUMBNAIL: number;
export const METADATA_KEY_THUMBNAIL_BINARY: number;
export const METADATA_KEY_TITLE: number;
export const METADATA_KEY_TITLE_FROM_FILENAME: number;
export const METADATA_KEY_TRACK_NUMBER: number;
export const METADATA_KEY_URL: number;
export const METADATA_KEY_WIDTH: number;
export const PADDING: number;
export const PADDING_SMALL: number;
export const PLUGIN_AUTHOR: string;
export const PLUGIN_DESCRIPTION: string;
export const PLUGIN_LICENSE: string;
export const PLUGIN_LIST_VAR: string;
export const PLUGIN_NAME: string;
export const PLUGIN_PATH_VAR: string;
export const PLUGIN_RANKS_VAR: string;
export const PLUGIN_SITE: string;
export const PLUGIN_VERSION: string;
export const SOURCE_REMAINING_UNKNOWN: number;
/**
 * 
 */
export function date_time_from_iso8601(date: string): GLib.DateTime;
/**
 * Deinitializes the Grilo library.
 * Call this function after finalizing using Grilo, in order to free and 
 * clean
 * up all the resources created.
 */
export function deinit(): void;
/**
 * 
 */
export function g_value_dup(value: GObject.Value): GObject.Value;
/**
 * 
 */
export function g_value_free(value: GObject.Value): void;
/**
 * 
 */
export function g_value_hashtable_new(): GLib.HashTable;
/**
 * 
 */
export function g_value_hashtable_new_direct(): GLib.HashTable;
/**
 * 
 */
export function g_value_new(g_type: unknown): GObject.Value;
/**
 * Initializes the Grilo library
 */
export function init(argc: number | null, argv: string[] | null): [number | null,string[] | null];
/**
 * Returns a #GOptionGroup with Grilo's argument specifications.
 * This function is useful if you want to integrate Grilo with other
 * libraries that use the GOption commandline parser
 * (see g_option_context_add_group() ).
 */
export function init_get_option_group(): GLib.OptionGroup;
/**
 * Returns a #GList containing the va_list pointers. Use @NULL to finaliz
 * e them,
 */
export function list_from_va(p: object | null, ___: unknown[]): GLib.List;
/**
 * Send a log message.
 */
export function log(domain: LogDomain, level: LogLevel, strloc: string, format: string, ___: unknown[]): void;
/**
 * Configure a set of log domains. The default configuration is to displa
 * y
 * warning and error messages only for all the log domains.
 * The configuration string follows the following grammar:
 * |[
 *   config-list: config | config ',' config-list
 *   config: domain ':' level
 *   domain: '*' | [a-zA-Z0-9]+
 *   level: '*' | '-' | named-level | num-level
 *   named-level: "none" | "error" | "warning" | "message" | "info" | "de
 * bug"
 *   num-level: [0-5]
 * ]|
 * examples:
 * <itemizedlist>
 *   <listitem><para>"*:*": maximum verbosity for all the log domains</pa
 * ra>
 *   </listitem>
 *   <listitem><para>"*:-": don't print any message</para></listitem>
 *   <listitem><para>"media-source:debug,metadata-source:debug": prints d
 * ebug,
 *   info, message warning and error messages for the media-source and
 *   metadata-source log domains</para></listitem>
 * </itemizedlist>
 * <note>It's possible to override the log configuration at runtime by
 * defining the GRL_DEBUG environment variable to a configuration string
 * as described above</note>
 */
export function log_configure(config: string): void;
/**
 * 
 */
export function log_domain_new(name: string): LogDomain;
/**
 * Retrieves the description associated with the key
 */
export function metadata_key_get_desc(key: KeyID): string;
/**
 * Retrieves the name associated with the key
 */
export function metadata_key_get_name(key: KeyID): string;
/**
 * Retrieves the expected type for values associated with this key
 */
export function metadata_key_get_type(key: KeyID): unknown;
/**
 * Returns a #GList containing the va_list keys. Use #GRL_METADATA_KEY_IN
 * VALID
 * to finalize them.
 */
export function metadata_key_list_new(first_key: KeyID, ___: unknown[]): GLib.List;
/**
 * Goes though all available media sources until it finds one capable of
 * constructing a GrlMedia object representing the media resource exposed
 * by @uri.
 * This method is asynchronous.
 */
export function multiple_get_media_from_uri(uri: string, keys: GLib.List, options: OperationOptions, callback: SourceResolveCb, user_data: object | null): void;
/**
 * Search for @text in all the sources specified in @sources.
 * If @text is @NULL then NULL-text searchs will be used for each searcha
 * ble
 * plugin (see #grl_source_search for more details).
 * This method is asynchronous.
 */
export function multiple_search(sources: GLib.List | null, text: string, keys: GLib.List, options: OperationOptions, callback: SourceResultCb, user_data: object | null): number;
/**
 * Search for @text in all the sources specified in @sources.
 * This method is synchronous.
 */
export function multiple_search_sync(sources: GLib.List | null, text: string, keys: GLib.List, options: OperationOptions): GLib.List;
/**
 * Cancel an operation.
 */
export function operation_cancel(operation_id: number): void;
/**
 * Obtains the previously attached data
 */
export function operation_get_data(operation_id: number): object | null;
/**
 * Attach a pointer to the specific operation.
 */
export function operation_set_data(operation_id: number, user_data: object | null): void;
/**
 * Attach a pointer to the specific operation.
 * Note that the @destroy_func callback is not called if @user_data is %N
 * ULL.
 */
export function operation_set_data_full(operation_id: number, user_data: object | null, destroy_func: GLib.DestroyNotify | null): void;
/**
 * Grilo browsing implements a paging mechanism through @skip and @count 
 * values.
 * But there are some services (like Jamendo or Flickr) where paging is d
 * one
 * through a page number and page size: user request all elements in a pa
 * ge,
 * specifying in most cases what is the page size.
 * This function is a helper for this task, computing from @skip and @cou
 * nt what
 * is the optimal value of page size (limited by @max_page_size), which p
 * age
 * should the user request, and where requested data start inside the pag
 * e.
 * By optimal we mean that it computes those values so only one page is r
 * equired
 * to satisfy the data, using the smallest page size. If user is limiting
 *  page
 * size, then more requests to services might be needed. But still page s
 * ize
 * will be an optimal value.
 * If @page_size is @NULL, then page size will be @max_page_size. If the 
 * later
 * is also 0, then page size will be #G_MAXUINT.
 */
export function paging_translate(skip: number, count: number, max_page_size: number, page_size: number, page_number: number, internal_offset: number): void;
/**
 * 
 */
export function range_value_hashtable_insert(hash_table: GLib.HashTable, key: object | null, min: GObject.Value, max: GObject.Value): void;
/**
 * 
 */
export function range_value_hashtable_new(): GLib.HashTable;
export enum CoreError {
    BROWSE_FAILED = 1,
    SEARCH_FAILED = 2,
    SEARCH_NULL_UNSUPPORTED = 3,
    QUERY_FAILED = 4,
    RESOLVE_FAILED = 5,
    MEDIA_NOT_FOUND = 6,
    STORE_FAILED = 7,
    STORE_METADATA_FAILED = 8,
    REMOVE_FAILED = 9,
    MEDIA_FROM_URI_FAILED = 10,
    CONFIG_LOAD_FAILED = 11,
    CONFIG_FAILED = 12,
    UNREGISTER_SOURCE_FAILED = 13,
    LOAD_PLUGIN_FAILED = 14,
    UNLOAD_PLUGIN_FAILED = 15,
    REGISTER_METADATA_KEY_FAILED = 16,
    NOTIFY_CHANGED_FAILED = 17,
    OPERATION_CANCELLED = 18,
    AUTHENTICATION_TOKEN = 19,
}
export enum LogLevel {
    NONE = 0,
    ERROR = 1,
    WARNING = 2,
    MESSAGE = 3,
    INFO = 4,
    DEBUG = 5,
    LAST = 6,
}
export enum MediaSerializeType {
    BASIC = 0,
    PARTIAL = 1,
    FULL = 2,
}
export enum MediaType {
    UNKNOWN = 0,
    AUDIO = 1,
    VIDEO = 2,
    IMAGE = 3,
    CONTAINER = 4,
}
export enum Rank {
    LOWEST = -64,
    LOW = -32,
    DEFAULT = 0,
    HIGH = 32,
    HIGHEST = 64,
}
export enum SourceChangeType {
    CHANGED = 0,
    ADDED = 1,
    REMOVED = 2,
}
export type KeyID = number;
export enum ResolutionFlags {
    NORMAL = 0,
    FULL = 1,
    IDLE_RELAY = 2,
    FAST_ONLY = 4,
}
export enum SupportedMedia {
    NONE = 0,
    AUDIO = 1,
    VIDEO = 2,
    IMAGE = 4,
    ALL = 7,
}
export enum SupportedOps {
    NONE = 0,
    RESOLVE = 1,
    BROWSE = 2,
    SEARCH = 4,
    QUERY = 8,
    STORE = 16,
    STORE_PARENT = 32,
    STORE_METADATA = 64,
    REMOVE = 128,
    MEDIA_FROM_URI = 256,
    NOTIFY_CHANGE = 512,
}
export enum TypeFilter {
    NONE = 0,
    AUDIO = 1,
    VIDEO = 2,
    IMAGE = 4,
    ALL = 7,
}
export enum WriteFlags {
    NORMAL = 0,
    FULL = 1,
}
export class Caps extends GObject.Object {constructor(config?: properties);
get_key_filter(): GLib.List;
get_key_range_filter(): GLib.List;
get_type_filter(): TypeFilter;
is_key_filter(key: KeyID): boolean;
is_key_range_filter(key: KeyID): boolean;
set_key_filter(keys: GLib.List): void;
set_key_range_filter(keys: GLib.List): void;
set_type_filter(filter: TypeFilter): void;
test_option(key: string, value: GObject.Value): boolean;
}
export class Config extends GObject.Object {constructor(config?: properties);
get_api_key(): string;
get_api_key_blob(size: number): number;
get_api_secret(): string;
get_api_token(): string;
get_api_token_secret(): string;
get_binary(param: string, size: number | null): number;
get_boolean(param: string): boolean;
get_float(param: string): number;
get_int(param: string): number;
get_password(): string;
get_plugin(): string;
get_source(): string;
get_string(param: string): string;
get_username(): string;
has_param(param: string): boolean;
set(param: string, value: GObject.Value): void;
set(...args: never[]): never;
set_api_key(key: string): void;
set_api_key_blob(blob: number, size: number): void;
set_api_secret(secret: string): void;
set_api_token(token: string): void;
set_api_token_secret(secret: string): void;
set_binary(param: string, blob: number, size: number): void;
set_boolean(param: string, value: boolean): void;
set_float(param: string, value: number): void;
set_int(param: string, value: number): void;
set_password(password: string): void;
set_plugin(plugin: string): void;
set_source(source: string): void;
set_string(param: string, value: string): void;
set_username(username: string): void;
}
export class Data extends GObject.Object {constructor(config?: properties);
add_binary(key: KeyID, buf: number, size: number): void;
add_boxed(key: KeyID, boxed: object | null): void;
add_float(key: KeyID, floatvalue: number): void;
add_for_id(key_name: string, value: GObject.Value): boolean;
add_int(key: KeyID, intvalue: number): void;
add_int64(key: KeyID, intvalue: number): void;
add_related_keys(relkeys: RelatedKeys): void;
add_string(key: KeyID, strvalue: string): void;
dup(): Data;
get(key: KeyID): GObject.Value;
get(...args: never[]): never;
get_binary(key: KeyID): [number, number];
get_boolean(key: KeyID): boolean;
get_boxed(key: KeyID): object | null;
get_float(key: KeyID): number;
get_int(key: KeyID): number;
get_int64(key: KeyID): number;
get_keys(): GLib.List;
get_related_keys(key: KeyID, index: number): RelatedKeys;
get_single_values_for_key(key: KeyID): GLib.List;
get_single_values_for_key_string(key: KeyID): GLib.List;
get_string(key: KeyID): string;
has_key(key: KeyID): boolean;
length(key: KeyID): number;
remove(key: KeyID): void;
remove_nth(key: KeyID, index: number): void;
set(key: KeyID, value: GObject.Value): void;
set(...args: never[]): never;
set_binary(key: KeyID, buf: number, size: number): void;
set_boolean(key: KeyID, boolvalue: boolean): void;
set_boxed(key: KeyID, boxed: object | null): void;
set_float(key: KeyID, floatvalue: number): void;
set_for_id(key_name: string, value: GObject.Value): boolean;
set_int(key: KeyID, intvalue: number): void;
set_int64(key: KeyID, intvalue: number): void;
set_related_keys(relkeys: RelatedKeys, index: number): void;
set_string(key: KeyID, strvalue: string): void;
}
export class Media extends Data {constructor(config?: properties);
media_type: MediaType;static audio_new(): Media;
static container_new(): Media;
static image_new(): Media;
static video_new(): Media;
add_artist(artist: string): void;
add_author(author: string): void;
add_director(director: string): void;
add_external_player(player: string): void;
add_external_url(url: string): void;
add_genre(genre: string): void;
add_keyword(keyword: string): void;
add_lyrics(lyrics: string): void;
add_mb_artist_id(mb_artist_id: string): void;
add_performer(performer: string): void;
add_producer(producer: string): void;
add_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void;
add_thumbnail(thumbnail: string): void;
add_thumbnail_binary(thumbnail: number, size: number): void;
add_url_data(url: string, mime: string, bitrate: number, framerate: number, width: number, height: number): void;
get_album(): string;
get_album_artist(): string;
get_album_disc_number(): number;
get_artist(): string;
get_artist_nth(index: number): string;
get_author(): string;
get_author_nth(index: number): string;
get_bitrate(): number;
get_camera_model(): string;
get_certificate(): string;
get_childcount(): number;
get_composer(): string;
get_composer_nth(index: number): string;
get_creation_date(): GLib.DateTime;
get_description(): string;
get_director(): string;
get_director_nth(index: number): string;
get_duration(): number;
get_episode(): number;
get_episode_title(): string;
get_exposure_time(): number;
get_external_url(): string;
get_external_url_nth(index: number): string;
get_favourite(): boolean;
get_flash_used(): string;
get_framerate(): number;
get_genre(): string;
get_genre_nth(index: number): string;
get_height(): number;
get_id(): string;
get_iso_speed(): number;
get_keyword(): string;
get_keyword_nth(index: number): string;
get_last_played(): GLib.DateTime;
get_last_position(): number;
get_license(): string;
get_lyrics(): string;
get_lyrics_nth(index: number): string;
get_mb_album_id(): string;
get_mb_artist_id(): string;
get_mb_artist_id_nth(index: number): string;
get_mb_recording_id(): string;
get_mb_release_group_id(): string;
get_mb_release_id(): string;
get_mb_track_id(): string;
get_media_type(): MediaType;
get_mime(): string;
get_modification_date(): GLib.DateTime;
get_orientation(): number;
get_original_title(): string;
get_performer(): string;
get_performer_nth(index: number): string;
get_play_count(): number;
get_player(): string;
get_player_nth(index: number): string;
get_producer(): string;
get_producer_nth(index: number): string;
get_publication_date(): GLib.DateTime;
get_rating(): number;
get_region(): string;
get_region_data(): [string, GLib.DateTime,string];
get_region_data_nth(index: number): [string, GLib.DateTime,string];
get_season(): number;
get_show(): string;
get_site(): string;
get_size(): number;
get_source(): string;
get_start_time(): number;
get_studio(): string;
get_thumbnail(): string;
get_thumbnail_binary(size: number): number;
get_thumbnail_binary_nth(size: number, index: number): number;
get_thumbnail_nth(index: number): string;
get_title(): string;
get_track_number(): number;
get_url(): string;
get_url_data(framerate: number, width: number, height: number): [string, string,number];
get_url_data_nth(index: number, framerate: number, width: number, height: number): [string, string,number];
get_width(): number;
is_audio(): boolean;
is_container(): boolean;
is_image(): boolean;
is_video(): boolean;
serialize(): string;
serialize_extended(serial_type: MediaSerializeType, ___: unknown[]): string;
set_album(album: string): void;
set_album_artist(album_artist: string): void;
set_album_disc_number(disc_number: number): void;
set_artist(artist: string): void;
set_author(author: string): void;
set_bitrate(bitrate: number): void;
set_camera_model(camera_model: string): void;
set_certificate(certificate: string): void;
set_childcount(childcount: number): void;
set_composer(composer: string): void;
set_creation_date(creation_date: GLib.DateTime): void;
set_description(description: string): void;
set_director(director: string): void;
set_duration(duration: number): void;
set_episode(episode: number): void;
set_episode_title(episode_title: string): void;
set_exposure_time(exposure_time: number): void;
set_external_player(player: string): void;
set_external_url(url: string): void;
set_favourite(favourite: boolean): void;
set_flash_used(flash_used: string): void;
set_framerate(framerate: number): void;
set_genre(genre: string): void;
set_height(height: number): void;
set_id(id: string): void;
set_iso_speed(iso_speed: number): void;
set_keyword(keyword: string): void;
set_last_played(last_played: GLib.DateTime): void;
set_last_position(last_position: number): void;
set_license(license: string): void;
set_lyrics(lyrics: string): void;
set_mb_album_id(mb_album_id: string): void;
set_mb_artist_id(mb_artist_id: string): void;
set_mb_recording_id(mb_recording_id: string): void;
set_mb_release_group_id(mb_release_group_id: string): void;
set_mb_release_id(mb_release_id: string): void;
set_mb_track_id(mb_track_id: string): void;
set_mime(mime: string): void;
set_modification_date(modification_date: GLib.DateTime): void;
set_orientation(orientation: number): void;
set_original_title(original_title: string): void;
set_performer(performer: string): void;
set_play_count(play_count: number): void;
set_producer(producer: string): void;
set_publication_date(date: GLib.DateTime): void;
set_rating(rating: number, max: number): void;
set_region(region: string): void;
set_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void;
set_season(season: number): void;
set_show(show: string): void;
set_site(site: string): void;
set_size(size: number): void;
set_source(source: string): void;
set_studio(studio: string): void;
set_thumbnail(thumbnail: string): void;
set_thumbnail_binary(thumbnail: number, size: number): void;
set_title(title: string): void;
set_track_number(track_number: number): void;
set_url(url: string): void;
set_url_data(url: string, mime: string, bitrate: number, framerate: number, width: number, height: number): void;
set_width(width: number): void;
static unserialize(serial: string): Media;
}
export class OperationOptions extends GObject.Object {constructor(config?: properties);
copy(): OperationOptions;
get_count(): number;
get_key_filter(key: KeyID): GObject.Value;
get_key_filter_list(): GLib.List;
get_key_range_filter(key: KeyID): [GObject.Value | null,GObject.Value | null];
get_key_range_filter_list(): GLib.List;
get_resolution_flags(): ResolutionFlags;
get_skip(): number;
get_type_filter(): TypeFilter;
obey_caps(caps: Caps): [boolean, OperationOptions,OperationOptions];
set_count(count: number): boolean;
set_key_filter_dictionary(filters: GLib.HashTable): boolean;
set_key_filter_value(key: KeyID, value: GObject.Value): boolean;
set_key_filters(___: unknown[]): boolean;
set_key_range_filter(___: unknown[]): boolean;
set_key_range_filter_value(key: KeyID, min_value: GObject.Value | null, max_value: GObject.Value | null): boolean;
set_resolution_flags(flags: ResolutionFlags): boolean;
set_skip(skip: number): boolean;
set_type_filter(filter: TypeFilter): boolean;
}
export class Plugin  {constructor(config?: properties);
readonly loaded: boolean;
readonly priv: PluginPrivate;
readonly _grl_reserved: object[];
get_author(): string;
get_description(): string;
get_filename(): string;
get_id(): string;
get_license(): string;
get_module(): GModule.Module;
get_module_name(): string;
get_name(): string;
get_site(): string;
get_sources(): GLib.List;
get_version(): string;
}
export class Registry  {constructor(config?: properties);
readonly priv: RegistryPrivate;
readonly _grl_reserved: object[];
activate_all_plugins(): boolean;
activate_plugin_by_id(plugin_id: string): boolean;
add_config(config: Config): boolean;
add_config_from_file(config_file: string): boolean;
add_config_from_resource(resource_path: string): boolean;
add_directory(path: string): void;
get_metadata_keys(): GLib.List;
get_plugins(only_loaded: boolean): GLib.List;
get_sources(ranked: boolean): GLib.List;
get_sources_by_operations(ops: SupportedOps, ranked: boolean): GLib.List;
load_all_plugins(activate: boolean): boolean;
load_plugin(library_filename: string): boolean;
load_plugin_directory(path: string): boolean;
load_plugin_from_desc(plugin_desc: PluginDescriptor): boolean;
lookup_metadata_key(key_name: string): KeyID;
lookup_metadata_key_desc(key: KeyID): string;
lookup_metadata_key_name(key: KeyID): string;
lookup_metadata_key_relation(key: KeyID): GLib.List;
lookup_metadata_key_type(key: KeyID): unknown;
lookup_plugin(plugin_id: string): Plugin;
lookup_source(source_id: string): Source;
metadata_key_validate(key: KeyID, value: GObject.Value): boolean;
register_metadata_key(param_spec: GObject.ParamSpec, bind_key: KeyID): KeyID;
register_source(plugin: Plugin, source: Source): boolean;
unload_plugin(plugin_id: string): boolean;
unregister_source(source: Source): boolean;
static get_default(): Registry;
}
export class RelatedKeys extends GObject.Object {constructor(config?: properties);
static new_valist(key: KeyID, args: any): RelatedKeys;
static new_valist(...args: never[]): RelatedKeys;
static new_with_keys(key: KeyID, ___: unknown[]): RelatedKeys;
dup(): RelatedKeys;
get(key: KeyID): GObject.Value;
get(...args: never[]): never;
get_binary(key: KeyID): [number, number];
get_boolean(key: KeyID): boolean;
get_boxed(key: KeyID): object | null;
get_float(key: KeyID): number;
get_int(key: KeyID): number;
get_int64(key: KeyID): number;
get_keys(): GLib.List;
get_string(key: KeyID): string;
has_key(key: KeyID): boolean;
remove(key: KeyID): void;
set(key: KeyID, value: GObject.Value): void;
set(...args: never[]): never;
set_binary(key: KeyID, buf: number, size: number): void;
set_boolean(key: KeyID, booleanvalue: boolean): void;
set_boxed(key: KeyID, boxed: object | null): void;
set_float(key: KeyID, floatvalue: number): void;
set_int(key: KeyID, intvalue: number): void;
set_int64(key: KeyID, intvalue: number): void;
set_string(key: KeyID, strvalue: string): void;
}
export class Source  {constructor(config?: properties);
auto_split_threshold: number;
plugin: Plugin;
rank: number;
source_desc: string;
source_icon: Gio.Icon;
source_id: string;
source_name: string;
source_tags: string[];
supported_media: SupportedMedia;
readonly priv: SourcePrivate;
readonly _grl_reserved: object[];
browse(container: Media | null, keys: GLib.List, options: OperationOptions, callback: SourceResultCb, user_data: object | null): number;
browse_sync(container: Media | null, keys: GLib.List, options: OperationOptions): GLib.List;
get_auto_split_threshold(): number;
get_caps(operation: SupportedOps): Caps;
get_description(): string;
get_icon(): Gio.Icon;
get_id(): string;
get_media_from_uri(uri: string, keys: GLib.List, options: OperationOptions, callback: SourceResolveCb, user_data: object | null): number;
get_media_from_uri_sync(uri: string, keys: GLib.List, options: OperationOptions): Media;
get_name(): string;
get_plugin(): Plugin;
get_rank(): number;
get_supported_media(): SupportedMedia;
get_tags(): string[];
may_resolve(media: Media, key_id: KeyID, missing_keys: GLib.List): boolean;
notify_change(media: Media | null, change_type: SourceChangeType, location_unknown: boolean): void;
notify_change_list(changed_medias: Media[], change_type: SourceChangeType, location_unknown: boolean): void;
notify_change_start(): boolean;
notify_change_stop(): boolean;
query(query: string, keys: GLib.List, options: OperationOptions, callback: SourceResultCb, user_data: object | null): number;
query_sync(query: string, keys: GLib.List, options: OperationOptions): GLib.List;
remove(media: Media, callback: SourceRemoveCb, user_data: object | null): void;
remove_sync(media: Media): void;
resolve(media: Media | null, keys: GLib.List, options: OperationOptions, callback: SourceResolveCb, user_data: object | null): number;
resolve_sync(media: Media | null, keys: GLib.List, options: OperationOptions): Media;
search(text: string, keys: GLib.List, options: OperationOptions, callback: SourceResultCb, user_data: object | null): number;
search_sync(text: string, keys: GLib.List, options: OperationOptions): GLib.List;
set_auto_split_threshold(threshold: number): void;
slow_keys(): GLib.List;
store(parent: Media | null, media: Media, flags: WriteFlags, callback: SourceStoreCb, user_data: object | null): void;
store_metadata(media: Media, keys: GLib.List | null, flags: WriteFlags, callback: SourceStoreCb, user_data: object | null): void;
store_metadata_sync(media: Media, keys: GLib.List | null, flags: WriteFlags): GLib.List;
store_sync(parent: Media | null, media: Media, flags: WriteFlags): void;
supported_keys(): GLib.List;
supported_operations(): number;
test_media_from_uri(uri: string): boolean;
writable_keys(): GLib.List;
}
export class CapsClass  {constructor(config?: properties);
readonly _grl_reserved: object[];
}
export class CapsPrivate  {constructor(config?: properties);
}
export class ConfigClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _grl_reserved: object[];
}
export class ConfigPrivate  {constructor(config?: properties);
}
export class DataClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _grl_reserved: object[];
}
export class DataPrivate  {constructor(config?: properties);
}
export class LogDomain  {constructor(config?: properties);
free(): void;
static _new(name: string): LogDomain;
}
export class MediaClass  {constructor(config?: properties);
readonly parent_class: DataClass;
readonly _grl_reserved: object[];
}
export class MediaPrivate  {constructor(config?: properties);
}
export class OperationOptionsClass  {constructor(config?: properties);
readonly _grl_reserved: object[];
}
export class OperationOptionsPrivate  {constructor(config?: properties);
}
export class PluginClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _grl_reserved: object[];
}
export class PluginDescriptor  {constructor(config?: properties);
major_version: number;
minor_version: number;
id: string;
name: string;
description: string;
author: string;
version: string;
license: string;
site: string;
init: PluginInitFunc;
deinit: PluginDeinitFunc;
register_keys: PluginRegisterKeysFunc;
readonly _grl_reserved: object[];
}
export class PluginPrivate  {constructor(config?: properties);
}
export class RangeValue  {constructor(config?: properties);
dup(): RangeValue;
free(): void;
static hashtable_insert(hash_table: GLib.HashTable, key: object | null, min: GObject.Value, max: GObject.Value): void;
static hashtable_new(): GLib.HashTable;
}
export class RegistryClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _grl_reserved: object[];
}
export class RegistryPrivate  {constructor(config?: properties);
}
export class RelatedKeysClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly _grl_reserved: object[];
}
export class RelatedKeysPrivate  {constructor(config?: properties);
}
export class SourceBrowseSpec  {constructor(config?: properties);
source: Source;
operation_id: number;
container: Media;
keys: GLib.List;
options: OperationOptions;
callback: SourceResultCb;
user_data: object;
readonly _grl_reserved: object[];
}
export class SourceClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly supported_operations: unknown;
readonly supported_keys: unknown;
readonly slow_keys: unknown;
readonly writable_keys: unknown;
readonly get_caps: unknown;
readonly resolve: unknown;
readonly may_resolve: unknown;
readonly test_media_from_uri: unknown;
readonly media_from_uri: unknown;
readonly browse: unknown;
readonly search: unknown;
readonly query: unknown;
readonly remove: unknown;
readonly store: unknown;
readonly store_metadata: unknown;
readonly cancel: unknown;
readonly notify_change_start: unknown;
readonly notify_change_stop: unknown;
readonly _grl_reserved: object[];
}
export class SourceMediaFromUriSpec  {constructor(config?: properties);
source: Source;
operation_id: number;
uri: string;
keys: GLib.List;
options: OperationOptions;
callback: SourceResolveCb;
user_data: object;
readonly _grl_reserved: object[];
}
export class SourcePrivate  {constructor(config?: properties);
}
export class SourceQuerySpec  {constructor(config?: properties);
source: Source;
operation_id: number;
query: string;
keys: GLib.List;
options: OperationOptions;
callback: SourceResultCb;
user_data: object;
readonly _grl_reserved: object[];
}
export class SourceRemoveSpec  {constructor(config?: properties);
source: Source;
media_id: string;
media: Media;
callback: SourceRemoveCb;
user_data: object;
readonly _grl_reserved: object[];
}
export class SourceResolveSpec  {constructor(config?: properties);
source: Source;
operation_id: number;
media: Media;
keys: GLib.List;
options: OperationOptions;
callback: SourceResolveCb;
user_data: object;
readonly _grl_reserved: object[];
}
export class SourceSearchSpec  {constructor(config?: properties);
source: Source;
operation_id: number;
text: string;
keys: GLib.List;
options: OperationOptions;
callback: SourceResultCb;
user_data: object;
readonly _grl_reserved: object[];
}
export class SourceStoreMetadataSpec  {constructor(config?: properties);
source: Source;
media: Media;
keys: GLib.List;
flags: WriteFlags;
callback: SourceStoreCb;
user_data: object;
failed_keys: GLib.List;
readonly _grl_reserved: object[];
}
export class SourceStoreSpec  {constructor(config?: properties);
source: Source;
media: Media;
callback: SourceStoreCb;
user_data: object;
readonly _grl_reserved: object[];
}