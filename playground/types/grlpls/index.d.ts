
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Grl from "grl";
import * as GrlPls from "grlpls";
/**
 * grlpls.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type FilterFunc = (source: Grl.Source, media: Grl.Media, user_data: object | null) => Grl.Media;
/**
 * Browse into a playlist. The playlist entries are
 * returned via the @callback function as GrlMedia objects.
 * This function imitates the API and way of working of
 * #grl_source_browse.
 * The @playlist provided could be of any GrlMedia class,
 * as long as its URI points to a valid playlist file.
 * This function is asynchronous.
 * See #grl_source_browse() function for additional information
 * and sample code.
 */
export function browse(source: Grl.Source, playlist: Grl.Media, keys: GLib.List, options: Grl.OperationOptions, filter_func: FilterFunc | null, callback: Grl.SourceResultCb, user_data: object | null): number;
/**
 * Browse into a playlist. The playlist entries are
 * returned via the bs->callback function as GrlMedia objects.
 * This function is more suitable to be called from plugins, which by
 * design get the GrlSourceBrowseSpec already filled in.
 * The bs->playlist provided could be of any GrlMedia class,
 * as long as its URI points to a valid playlist file.
 * This function is asynchronous.
 * See #grl_pls_browse() and #grl_source_browse() function for additional
 * information and sample code.
 */
export function browse_by_spec(source: Grl.Source, filter_func: FilterFunc | null, bs: Grl.SourceBrowseSpec): void;
/**
 * Browse into a playlist. The playlist entries are
 * returned via the @callback function as GrlMedia objects.
 * This function imitates the API and way of working of
 * #grl_source_browse_sync.
 * The filter function @filter_func will be used for plugins
 * or applications to be able to refuse particular entries from
 * being listed.
 * If a %NULL filter function is passed, the media will be added
 * with only the metadata coming from the playlist included.
 * This function is synchronous.
 * See #grl_source_browse_sync() function for additional information
 * and sample code.
 */
export function browse_sync(source: Grl.Source, playlist: Grl.Media, keys: GLib.List, options: Grl.OperationOptions, filter_func: FilterFunc | null): GLib.List;
/**
 * This function will update (if @content is non-%NULL) or create a
 * GrlMedia and populate it with information from @info.
 * If @info is %NULL, a call to g_file_query_info() will be made.
 * This function is useful for plugins that browse the local filesystem
 * and want to easily create GrlMedia from filesystem information.
 */
export function file_to_media(content: Grl.Media, file: Gio.File, info: Gio.FileInfo, handle_pls: boolean, options: Grl.OperationOptions): Grl.Media;
/**
 * Returns the list of attributes to pass to
 * g_file_query_info() to make it possible to
 * populate a GrlMedia using grl_pls_file_to_media().
 * Do not free the result of this function.
 */
export function get_file_attributes(): string;
/**
 * Check if a file identified by GrlMedia object is a playlist or not.
 * This function does blocking I/O.
 */
export function media_is_playlist(media: Grl.Media): boolean;