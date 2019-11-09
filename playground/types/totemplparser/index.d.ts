
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as TotemPlParser from "totemplparser";
/**
 * totemplparser.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const PARSER_FIELD_ABSTRACT: string;
export const PARSER_FIELD_ALBUM: string;
export const PARSER_FIELD_AUDIO_TRACK: string;
export const PARSER_FIELD_AUTHOR: string;
export const PARSER_FIELD_AUTOPLAY: string;
export const PARSER_FIELD_BASE: string;
export const PARSER_FIELD_CONTACT: string;
export const PARSER_FIELD_CONTENT_TYPE: string;
export const PARSER_FIELD_COPYRIGHT: string;
export const PARSER_FIELD_DESCRIPTION: string;
export const PARSER_FIELD_DOWNLOAD_URI: string;
export const PARSER_FIELD_DURATION: string;
export const PARSER_FIELD_DURATION_MS: string;
export const PARSER_FIELD_ENDTIME: string;
export const PARSER_FIELD_FILESIZE: string;
export const PARSER_FIELD_GENRE: string;
export const PARSER_FIELD_ID: string;
export const PARSER_FIELD_IMAGE_URI: string;
export const PARSER_FIELD_IS_PLAYLIST: string;
export const PARSER_FIELD_LANGUAGE: string;
export const PARSER_FIELD_MOREINFO: string;
export const PARSER_FIELD_PLAYING: string;
export const PARSER_FIELD_PUB_DATE: string;
export const PARSER_FIELD_SCREENSIZE: string;
export const PARSER_FIELD_STARTTIME: string;
export const PARSER_FIELD_SUBTITLE_URI: string;
export const PARSER_FIELD_TITLE: string;
export const PARSER_FIELD_UI_MODE: string;
export const PARSER_FIELD_URI: string;
export const PARSER_FIELD_VOLUME: string;
export const PARSER_VERSION_MAJOR: number;
export const PARSER_VERSION_MICRO: number;
export const PARSER_VERSION_MINOR: number;
/**
 * 
 */
export function parser_error_quark(): GLib.Quark;
/**
 * 
 */
export function parser_metadata_get_type(): GType;
export enum ParserError {
    NO_DISC = 0,
    MOUNT_FAILED = 1,
    EMPTY_PLAYLIST = 2,
}
export enum ParserResult {
    UNHANDLED = 0,
    ERROR = 1,
    SUCCESS = 2,
    IGNORED = 3,
    CANCELLED = 4,
}
export enum ParserType {
    PLS = 0,
    M3U = 1,
    M3U_DOS = 2,
    XSPF = 3,
    IRIVER_PLA = 4,
}
export class Parser extends GObject.Object {
    constructor(config?: properties);
    debug: boolean;
    disable_unsafe: boolean;
    force: boolean;
    recurse: boolean;
    add_ignored_mimetype(mimetype: string): void;
    add_ignored_scheme(scheme: string): void;
    parse(uri: string, fallback: boolean): ParserResult;
    parse_async(uri: string, fallback: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    parse_finish(async_result: Gio.AsyncResult): ParserResult;
    parse_with_base(uri: string, base: string | null, fallback: boolean): ParserResult;
    parse_with_base_async(uri: string, base: string | null, fallback: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    save(playlist: Playlist, dest: Gio.File, title: string, type: ParserType): boolean;
    vfunc_entry_parsed(uri: string, metadata: GLib.HashTable): void;
    vfunc_playlist_ended(uri: string): void;
    vfunc_playlist_started(uri: string, metadata: GLib.HashTable): void;
    static can_parse_from_data(data: string, len: number, debug: boolean): boolean;
    static can_parse_from_filename(filename: string, debug: boolean): boolean;
    static can_parse_from_uri(uri: string, debug: boolean): boolean;
    static parse_date(date_str: string, debug: boolean): number;
    static parse_duration(duration: string, debug: boolean): number;
}
export class Playlist extends GObject.Object {
    constructor(config?: properties);
    append(): [PlaylistIter];
    get_value(iter: PlaylistIter, key: string, value: GObject.Value): boolean;
    insert(position: number): [PlaylistIter];
    iter_first(): [boolean, PlaylistIter];
    iter_next(iter: PlaylistIter): boolean;
    iter_prev(iter: PlaylistIter): boolean;
    prepend(): [PlaylistIter];
    set_value(iter: PlaylistIter, key: string, value: GObject.Value): boolean;
    size(): number;
}
export class ParserPrivate  {
    constructor(config?: properties);
}
export class PlaylistIter  {
    constructor(config?: properties);
    readonly data1: object;
    readonly data2: object;
}