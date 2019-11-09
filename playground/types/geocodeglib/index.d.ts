
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Json from "json";
import * as Soup from "soup";
import * as GeocodeGlib from "geocodeglib";
/**
 * geocodeglib.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const LOCATION_ACCURACY_CITY: number;
export const LOCATION_ACCURACY_CONTINENT: number;
export const LOCATION_ACCURACY_COUNTRY: number;
export const LOCATION_ACCURACY_REGION: number;
export const LOCATION_ACCURACY_STREET: number;
export const LOCATION_ACCURACY_UNKNOWN: number;
/**
 * Gets the geocode-glib error quark.
 */
export function error_quark(): GLib.Quark;
export enum Error {
    PARSE = 0,
    NOT_SUPPORTED = 1,
    NO_MATCHES = 2,
    INVALID_ARGUMENTS = 3,
    INTERNAL_SERVER = 4,
}
export enum LocationCRS {
    WGS84 = 0,
}
export enum LocationURIScheme {
    GEO = 0,
}
export enum PlaceOsmType {
    UNKNOWN = 0,
    NODE = 1,
    RELATION = 2,
    WAY = 3,
}
export enum PlaceType {
    UNKNOWN = 0,
    BUILDING = 1,
    STREET = 2,
    TOWN = 3,
    STATE = 4,
    COUNTY = 5,
    LOCAL_ADMINISTRATIVE_AREA = 6,
    POSTAL_CODE = 7,
    COUNTRY = 8,
    ISLAND = 9,
    AIRPORT = 10,
    RAILWAY_STATION = 11,
    BUS_STOP = 12,
    MOTORWAY = 13,
    DRAINAGE = 14,
    LAND_FEATURE = 15,
    MISCELLANEOUS = 16,
    SUPERNAME = 17,
    POINT_OF_INTEREST = 18,
    SUBURB = 19,
    COLLOQUIAL = 20,
    ZONE = 21,
    HISTORICAL_STATE = 22,
    HISTORICAL_COUNTY = 23,
    CONTINENT = 24,
    TIME_ZONE = 25,
    ESTATE = 26,
    HISTORICAL_TOWN = 27,
    OCEAN = 28,
    SEA = 29,
    SCHOOL = 30,
    PLACE_OF_WORSHIP = 31,
    RESTAURANT = 32,
    BAR = 33,
    LIGHT_RAIL_STATION = 34,
}
export class BoundingBox extends GObject.Object {
    constructor(config?: properties);
    bottom: number;
    left: number;
    right: number;
    top: number;
    equal(b: BoundingBox): boolean;
    get_bottom(): number;
    get_left(): number;
    get_right(): number;
    get_top(): number;
}
export class Forward extends GObject.Object {
    constructor(config?: properties);
    answer_count: number;
    bounded: boolean;
    search_area: BoundingBox;static new_for_params(params: GLib.HashTable): Forward;
    static new_for_string(str: string): Forward;
    get_answer_count(): number;
    get_bounded(): boolean;
    get_search_area(): BoundingBox | null;
    search(): GLib.List;
    search_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    search_finish(res: Gio.AsyncResult): GLib.List;
    set_answer_count(count: number): void;
    set_backend(backend: Backend | null): void;
    set_bounded(bounded: boolean): void;
    set_search_area(box: BoundingBox): void;
}
export class Location extends GObject.Object {
    constructor(config?: properties);
    accuracy: number;
    altitude: number;
    crs: LocationCRS;
    description: string;
    latitude: number;
    longitude: number;
    timestamp: number;static new_with_description(latitude: number, longitude: number, accuracy: number, description: string): Location;
    equal(b: Location): boolean;
    get_accuracy(): number;
    get_altitude(): number;
    get_crs(): LocationCRS;
    get_description(): string;
    get_distance_from(locb: Location): number;
    get_latitude(): number;
    get_longitude(): number;
    get_timestamp(): number;
    set_description(description: string): void;
    set_from_uri(uri: string): boolean;
    to_uri(scheme: LocationURIScheme): string;
}
export class MockBackend extends GObject.Object {
    constructor(config?: properties);
    add_forward_result(params: GLib.HashTable, results: GLib.List | null, error: GLib.Error | null): void;
    add_reverse_result(params: GLib.HashTable, results: GLib.List | null, error: GLib.Error | null): void;
    clear(): void;
    get_query_log(): MockBackendQuery[];
}
export class Nominatim extends GObject.Object {
    constructor(config?: properties);
    base_url: string;
    maintainer_email_address: string;
    user_agent: string;
    vfunc_query(uri: string, cancellable: Gio.Cancellable | null): string;
    vfunc_query_async(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    vfunc_query_finish(res: Gio.AsyncResult): string;
    static get_gnome(): Nominatim;
}
export class Place extends GObject.Object {
    constructor(config?: properties);
    administrative_area: string;
    area: string;
    bounding_box: BoundingBox;
    building: string;
    continent: string;
    country: string;
    country_code: string;
    county: string;
    readonly icon: Gio.Icon;
    location: Location;
    name: string;
    osm_id: string;
    osm_type: PlaceOsmType;
    place_type: PlaceType;
    postal_code: string;
    state: string;
    street: string;
    street_address: string;
    town: string;static new_with_location(name: string, place_type: PlaceType, location: Location): Place;
    equal(b: Place): boolean;
    get_administrative_area(): string;
    get_area(): string;
    get_bounding_box(): BoundingBox;
    get_building(): string;
    get_continent(): string;
    get_country(): string;
    get_country_code(): string;
    get_county(): string;
    get_icon(): Gio.Icon;
    get_location(): Location;
    get_name(): string;
    get_osm_id(): string;
    get_osm_type(): PlaceOsmType;
    get_place_type(): PlaceType;
    get_postal_code(): string;
    get_state(): string;
    get_street(): string;
    get_street_address(): string;
    get_town(): string;
    set_administrative_area(admin_area: string): void;
    set_area(area: string): void;
    set_bounding_box(bbox: BoundingBox): void;
    set_building(building: string): void;
    set_continent(continent: string): void;
    set_country(country: string): void;
    set_country_code(country_code: string): void;
    set_county(county: string): void;
    set_location(location: Location): void;
    set_name(name: string): void;
    set_postal_code(postal_code: string): void;
    set_state(state: string): void;
    set_street(street: string): void;
    set_street_address(street_address: string): void;
    set_town(town: string): void;
}
export class Reverse extends GObject.Object {
    constructor(config?: properties);
    static new_for_location(location: Location): Reverse;
    resolve(): Place;
    resolve_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    resolve_finish(res: Gio.AsyncResult): Place;
    set_backend(backend: Backend | null): void;
}
export class BoundingBoxPrivate  {
    constructor(config?: properties);
}
export class ForwardPrivate  {
    constructor(config?: properties);
}
export class LocationPrivate  {
    constructor(config?: properties);
}
export class MockBackendQuery  {
    constructor(config?: properties);
    params: GLib.HashTable;
    is_forward: boolean;
    results: GLib.List;
    error: GLib.Error;
}
export class PlacePrivate  {
    constructor(config?: properties);
}
export class ReversePrivate  {
    constructor(config?: properties);
}
export interface Backend  {
    forward_search(params: GLib.HashTable, cancellable: Gio.Cancellable | null): GLib.List;
    forward_search_async(params: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    forward_search_finish(result: Gio.AsyncResult): GLib.List;
    reverse_resolve(params: GLib.HashTable, cancellable: Gio.Cancellable | null): GLib.List;
    reverse_resolve_async(params: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    reverse_resolve_finish(result: Gio.AsyncResult): GLib.List;
}