
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Soup from "soup";
import * as DMAP from "dmap";
/**
 * dmap.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type ConnectionCallback = (connection: Connection, result: boolean, reason: string, user_data: object | null) => boolean;
export type ResponseHandler = (connection: Connection, status: number, structure: GLib.Node, user_data: object | null) => void;
export const HASH_SIZE: number;
export const STATUS_OK: number;
/**
 * 
 */
export function content_code_dmap_type(code: ContentCode): Type;
/**
 * 
 */
export function content_code_name(code: ContentCode): string;
/**
 * 
 */
export function content_code_read_from_buffer(buf: string): ContentCode;
/**
 * 
 */
export function content_code_string(code: ContentCode): string;
/**
 * 
 */
export function content_code_string_as_int32(str: string): number;
/**
 * 
 */
export function content_codes(number: number): ContentCodeDefinition;
/**
 * 
 */
export function hash_generate(version_major: number, url: number, hash_select: number, out: number, request_id: number): void;
/**
 * 
 */
export function hash_progressive_final(context: HashContext, digest: number): void;
/**
 * 
 */
export function hash_progressive_init(context: HashContext): void;
/**
 * 
 */
export function hash_progressive_to_string(digest: number, string: string): void;
/**
 * 
 */
export function hash_progressive_update(context: HashContext, buffer: number, length: number): void;
/**
 * 
 */
export function mdns_browser_error_quark(): GLib.Quark;
/**
 * 
 */
export function mdns_publisher_error_quark(): GLib.Quark;
/**
 * 
 */
export function mime_to_format(transcode_mimetype: string): string;
/**
 * 
 */
export function structure_destroy(structure: GLib.Node): void;
/**
 * 
 */
export function structure_get_size(structure: GLib.Node): number;
/**
 * 
 */
export function structure_increase_by_predicted_size(structure: GLib.Node, size: number): void;
/**
 * 
 */
export function structure_print(structure: GLib.Node): void;
/**
 * 
 */
export function structure_serialize(structure: GLib.Node, length: number): string;
export enum ConnectionState {
    GET_INFO = 0,
    LOGIN = 1,
    GET_REVISION_NUMBER = 2,
    GET_DB_INFO = 3,
    GET_SONGS = 4,
    GET_PLAYLISTS = 5,
    GET_PLAYLIST_ENTRIES = 6,
    LOGOUT = 7,
    DONE = 8,
}
export enum ContentCode {
    CC_INVALID = 0,
    RAW = 1,
    CC_MDCL = 2,
    CC_MSTT = 3,
    CC_MIID = 4,
    CC_MINM = 5,
    CC_MIKD = 6,
    CC_MPER = 7,
    CC_MCON = 8,
    CC_MCTI = 9,
    CC_MPCO = 10,
    CC_MSTS = 11,
    CC_MIMC = 12,
    CC_MCTC = 13,
    CC_MRCO = 14,
    CC_MTCO = 15,
    CC_MLCL = 16,
    CC_MLIT = 17,
    CC_MBCL = 18,
    CC_MSRV = 19,
    CC_MSAU = 20,
    CC_MSLR = 21,
    CC_MPRO = 22,
    CC_MSAL = 23,
    CC_MSUP = 24,
    CC_MSPI = 25,
    CC_MSEX = 26,
    CC_MSBR = 27,
    CC_MSQY = 28,
    CC_MSIX = 29,
    CC_MSRS = 30,
    CC_MSTM = 31,
    CC_MSDC = 32,
    CC_MCCR = 33,
    CC_MCNM = 34,
    CC_MCNA = 35,
    CC_MCTY = 36,
    CC_MLOG = 37,
    CC_MLID = 38,
    CC_MUPD = 39,
    CC_MUSR = 40,
    CC_MUTY = 41,
    CC_MUDL = 42,
    CC_MSMA = 43,
    CC_FQUESCH = 44,
    CC_APRO = 45,
    CC_AVDB = 46,
    CC_ABRO = 47,
    CC_ABAL = 48,
    CC_ABAR = 49,
    CC_ABCP = 50,
    CC_ABGN = 51,
    CC_ADBS = 52,
    CC_ASAL = 53,
    CC_ASAI = 54,
    CC_ASAA = 55,
    CC_ASAR = 56,
    CC_ASBT = 57,
    CC_ASBR = 58,
    CC_ASCM = 59,
    CC_ASCO = 60,
    CC_ASDA = 61,
    CC_ASDM = 62,
    CC_ASDC = 63,
    CC_ASDN = 64,
    CC_ASDB = 65,
    CC_ASEQ = 66,
    CC_ASFM = 67,
    CC_ASGN = 68,
    CC_ASDT = 69,
    CC_ASRV = 70,
    CC_ASSR = 71,
    CC_ASSZ = 72,
    CC_ASST = 73,
    CC_ASSP = 74,
    CC_ASTM = 75,
    CC_ASTC = 76,
    CC_ASTN = 77,
    CC_ASUR = 78,
    CC_ASYR = 79,
    CC_ASDK = 80,
    CC_ASUL = 81,
    CC_ASSU = 82,
    CC_ASSA = 83,
    CC_APLY = 84,
    CC_ABPL = 85,
    CC_APSO = 86,
    CC_PRSV = 87,
    CC_ARIF = 88,
    CC_MSAS = 89,
    CC_AGRP = 90,
    CC_AGAL = 91,
    CC_ASCP = 92,
    CC_PPRO = 93,
    CC_PASP = 94,
    CC_PFDT = 95,
    CC_PICD = 96,
    CC_PIMF = 97,
    CC_PFMT = 98,
    CC_PIFS = 99,
    CC_PLSZ = 100,
    CC_PHGT = 101,
    CC_PWTH = 102,
    CC_PRAT = 103,
    CC_PCMT = 104,
    CC_PRET = 105,
    CC_AESV = 106,
    CC_AEHV = 107,
    CC_AESP = 108,
    CC_AEPP = 109,
    CC_AEPS = 110,
    CC_AESG = 111,
    CC_AEMK = 112,
    CC_AEFP = 113,
    CC_CMPA = 114,
    CC_CMNM = 115,
    CC_CMTY = 116,
    CC_CMPG = 117,
    CC_CACI = 118,
    CC_CAPS = 119,
    CC_CASH = 120,
    CC_CARP = 121,
    CC_CAAS = 122,
    CC_CAAR = 123,
    CC_CAIA = 124,
    CC_CANP = 125,
    CC_CANN = 126,
    CC_CANA = 127,
    CC_CANL = 128,
    CC_CANG = 129,
    CC_CANT = 130,
    CC_CASP = 131,
    CC_CASS = 132,
    CC_CAST = 133,
    CC_CASU = 134,
    CC_CASG = 135,
    CC_CACR = 136,
    CC_CMCP = 137,
    CC_CMGT = 138,
    CC_CMIK = 139,
    CC_CMSP = 140,
    CC_CMST = 141,
    CC_CMSV = 142,
    CC_CMSR = 143,
    CC_CMMK = 144,
    CC_CMVO = 145,
    CC_CMPR = 146,
    CC_CAPR = 147,
    CC_AEFR = 148,
    CC_CAOV = 149,
    CC_CMRL = 150,
    CC_CAHP = 151,
    CC_CAIV = 152,
    CC_CAVC = 153,
}
export enum MdnsBrowserError {
    NOT_RUNNING = 0,
    FAILED = 1,
}
export enum MdnsBrowserServiceType {
    INVALID = 0,
    DAAP = 1,
    DPAP = 2,
    DACP = 3,
    RAOP = 4,
    LAST = 4,
}
export enum MdnsBrowserTransportProtocol {
    TCP = 0,
    UDP = 1,
    LAST = 1,
}
export enum MdnsPublisherError {
    NOT_RUNNING = 0,
    FAILED = 1,
}
export enum MediaKind {
    MUSIC = 1,
    MOVIE = 2,
    PODCAST = 32,
    TV_SHOW = 64,
}
export enum Type {
    BYTE = 1,
    SIGNED_INT = 2,
    SHORT = 3,
    INT = 5,
    INT64 = 7,
    STRING = 9,
    DATE = 10,
    VERSION = 11,
    CONTAINER = 12,
    POINTER = 42,
}
export class Connection  {
    constructor(config?: properties);
    base_uri: object;
    database_id: number;
    db: object;
    dmap_version: number;
    factory: object;
    host: string;
    name: string;
    password: string;
    port: number;
    revision_number: number;
    session_id: number;
    username: string;
    readonly priv: ConnectionPrivate;
    authenticate_message(session: Soup.Session, message: Soup.Message, auth: Soup.Auth, password: string): void;
    get_headers(uri: string): Soup.MessageHeaders;
    is_connected(): boolean;
    setup(): void;
}
export class GstInputStream extends Gio.InputStream {
    constructor(config?: properties);
    vfunc_kill_pipeline(): void;
}
export class MdnsBrowser extends GObject.Object {
    constructor(config?: properties);
    get_service_type(): MdnsBrowserServiceType;
    start(): boolean;
    stop(): boolean;
    vfunc_service_added(service: MdnsBrowserService): void;
    vfunc_service_removed(service: MdnsBrowserService): void;
}
export class MdnsPublisher extends GObject.Object {
    constructor(config?: properties);
    publish(name: string, port: number, type_of_service: string, password_required: boolean, txt_records: string): boolean;
    rename_at_port(port: number, name: string): boolean;
    withdraw(port: number): boolean;
    vfunc_name_collision(name: string): void;
    vfunc_published(name: string): void;
}
export class Share  {
    constructor(config?: properties);
    auth_method: number;
    container_db: object;
    db: object;
    name: string;
    password: string;
    revision_number: number;
    readonly server: Soup.Server;
    transcode_mimetype: string;
    txt_records: string[];
    readonly priv: SharePrivate;
}
export class ConnectionPrivate  {
    constructor(config?: properties);
}
export class ContentCodeDefinition  {
    constructor(config?: properties);
    code: ContentCode;
    int_code: number;
    name: string;
    string: string;
    type: Type;
}
export class DbFilterDefinition  {
    constructor(config?: properties);
    key: string;
    value: string;
    negate: boolean;
}
export class GstInputStreamPrivate  {
    constructor(config?: properties);
}
export class HashContext  {
    constructor(config?: properties);
    buf: number[];
    bits: number[];
    "in": number[];
    version: number;
}
export class MdnsBrowserPrivate  {
    constructor(config?: properties);
}
export class MdnsBrowserService  {
    constructor(config?: properties);
    service_name: string;
    name: string;
    host: string;
    port: number;
    password_protected: boolean;
    pair: string;
    transport_protocol: MdnsBrowserTransportProtocol;
}
export class MdnsPublisherPrivate  {
    constructor(config?: properties);
}
export class MetaDataMap  {
    constructor(config?: properties);
    tag: string;
    md: number;
}
export class Playlist  {
    constructor(config?: properties);
    name: string;
    id: number;
    uris: GLib.List;
}
export class SharePrivate  {
    constructor(config?: properties);
}
export class StructureItem  {
    constructor(config?: properties);
    content_code: ContentCode;
    content: GObject.Value;
    size: number;
}
export interface ContainerDb  {
    add(record: ContainerRecord): void;
    count(): number;
}
export interface ContainerRecord  {
    name: string;
    add_entry(record: Record, id: number): void;
    get_entry_count(): number;
    get_id(): number;
}
export interface Db  {
    add(record: Record): number;
    add_path(path: string): number;
    add_with_id(record: Record, id: number): number;
    count(): number;
    lookup_id_by_location(location: string): number;
}
export interface Record  {
    set_from_blob(blob: number[]): boolean;
}
export interface RecordFactory  {
}