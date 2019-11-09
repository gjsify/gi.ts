
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as GWeather from "gweather";
import * as GdkPixbuf from "gdkpixbuf";
/**
 * gweather.d.ts
 */
type properties = { [key: string]: any };
export type FilterFunc = (location: Location, user_data: object | null) => boolean;
export const LOCATION_ENTRY_H: number;
export const TIMEZONE_MENU_H: number;
/**
 * 
 */
export function location_detect_nearest_city_finish(result: Gio.AsyncResult): Location;
/**
 * Obtains the shared #GWeatherLocation of type %GWEATHER_LOCATION_WORLD,
 * representing a hierarchy containing all of the locations from
 * Locations.xml.
 */
export function location_get_world(): Location | null;
/**
 * Returns the location level as a string, useful for debugging
 * purposes.
 */
export function location_level_to_string(level: LocationLevel): string;
/**
 * 
 */
export function sky_to_string(sky: Sky): string;
/**
 * 
 */
export function sky_to_string_full(sky: Sky, options: FormatOptions): string;
/**
 * Resolve @unit into a real temperature unit, potentially considering
 * locale defaults.
 */
export function temperature_unit_to_real(unit: TemperatureUnit): TemperatureUnit;
/**
 * Get the #GWeatherTimezone for @tzid.
 */
export function timezone_get_by_tzid(tzid: string): Timezone;
/**
 * Gets the UTC timezone.
 */
export function timezone_get_utc(): Timezone;
/**
 * 
 */
export function wind_direction_to_string(wind: WindDirection): string;
/**
 * 
 */
export function wind_direction_to_string_full(wind: WindDirection, options: FormatOptions): string;
export enum ConditionPhenomenon {
    INVALID = -1,
    NONE = 0,
    DRIZZLE = 1,
    RAIN = 2,
    SNOW = 3,
    SNOW_GRAINS = 4,
    ICE_CRYSTALS = 5,
    ICE_PELLETS = 6,
    HAIL = 7,
    SMALL_HAIL = 8,
    UNKNOWN_PRECIPITATION = 9,
    MIST = 10,
    FOG = 11,
    SMOKE = 12,
    VOLCANIC_ASH = 13,
    SAND = 14,
    HAZE = 15,
    SPRAY = 16,
    DUST = 17,
    SQUALL = 18,
    SANDSTORM = 19,
    DUSTSTORM = 20,
    FUNNEL_CLOUD = 21,
    TORNADO = 22,
    DUST_WHIRLS = 23,
    LAST = 24,
}
export enum ConditionQualifier {
    INVALID = -1,
    NONE = 0,
    VICINITY = 1,
    LIGHT = 2,
    MODERATE = 3,
    HEAVY = 4,
    SHALLOW = 5,
    PATCHES = 6,
    PARTIAL = 7,
    THUNDERSTORM = 8,
    BLOWING = 9,
    SHOWERS = 10,
    DRIFTING = 11,
    FREEZING = 12,
    LAST = 13,
}
export enum DistanceUnit {
    INVALID = 0,
    DEFAULT = 1,
    METERS = 2,
    KM = 3,
    MILES = 4,
}
export enum LocationLevel {
    WORLD = 0,
    REGION = 1,
    COUNTRY = 2,
    ADM1 = 3,
    CITY = 4,
    WEATHER_STATION = 5,
    DETACHED = 6,
    NAMED_TIMEZONE = 7,
}
export enum PressureUnit {
    INVALID = 0,
    DEFAULT = 1,
    KPA = 2,
    HPA = 3,
    MB = 4,
    MM_HG = 5,
    INCH_HG = 6,
    ATM = 7,
}
export enum Sky {
    INVALID = -1,
    CLEAR = 0,
    BROKEN = 1,
    SCATTERED = 2,
    FEW = 3,
    OVERCAST = 4,
    LAST = 5,
}
export enum SpeedUnit {
    INVALID = 0,
    DEFAULT = 1,
    MS = 2,
    KPH = 3,
    MPH = 4,
    KNOTS = 5,
    BFT = 6,
}
export enum TemperatureUnit {
    INVALID = 0,
    DEFAULT = 1,
    KELVIN = 2,
    CENTIGRADE = 3,
    FAHRENHEIT = 4,
}
export enum WindDirection {
    INVALID = -1,
    VARIABLE = 0,
    N = 1,
    NNE = 2,
    NE = 3,
    ENE = 4,
    E = 5,
    ESE = 6,
    SE = 7,
    SSE = 8,
    S = 9,
    SSW = 10,
    SW = 11,
    WSW = 12,
    W = 13,
    WNW = 14,
    NW = 15,
    NNW = 16,
    LAST = 17,
}
export type MoonLatitude = number;
export type MoonPhase = number;
export enum FormatOptions {
    DEFAULT = 0,
    SENTENCE_CAPITALIZATION = 1,
    NO_CAPITALIZATION = 2,
}
export enum Provider {
    NONE = 0,
    METAR = 1,
    IWIN = 4,
    YAHOO = 8,
    YR_NO = 16,
    OWM = 32,
    ALL = 31,
}
export class Info extends GObject.Object {constructor(config?: properties);
enabled_providers: Provider;
location: Location;
abort(): void;
get_apparent(): string;
get_attribution(): string;
get_conditions(): string;
get_dew(): string;
get_enabled_providers(): Provider;
get_forecast_list(): string[];
get_humidity(): string;
get_icon_name(): string;
get_location(): Location;
get_location_name(): string;
get_pressure(): string;
get_radar(): GdkPixbuf.PixbufAnimation;
get_sky(): string;
get_sunrise(): string;
get_sunset(): string;
get_symbolic_icon_name(): string;
get_temp(): string;
get_temp_max(): string;
get_temp_min(): string;
get_temp_summary(): string;
get_upcoming_moonphases(): [boolean, number[]];
get_update(): string;
get_value_apparent(unit: TemperatureUnit): [boolean, number];
get_value_conditions(): [boolean, ConditionPhenomenon,ConditionQualifier];
get_value_dew(unit: TemperatureUnit): [boolean, number];
get_value_moonphase(): [boolean, MoonPhase,MoonLatitude];
get_value_pressure(unit: PressureUnit): [boolean, number];
get_value_sky(): [boolean, Sky];
get_value_sunrise(): [boolean, number];
get_value_sunset(): [boolean, number];
get_value_temp(unit: TemperatureUnit): [boolean, number];
get_value_temp_max(unit: TemperatureUnit): [boolean, number];
get_value_temp_min(unit: TemperatureUnit): [boolean, number];
get_value_update(): [boolean, number];
get_value_visibility(unit: DistanceUnit): [boolean, number];
get_value_wind(unit: SpeedUnit): [boolean, number,WindDirection];
get_visibility(): string;
get_weather_summary(): string;
get_wind(): string;
is_daytime(): boolean;
is_valid(): boolean;
network_error(): boolean;
next_sun_event(): number;
set_enabled_providers(providers: Provider): void;
set_location(location: Location | null): void;
update(): void;
vfunc_updated(): void;
static store_cache(): void;
}
export class LocationEntry extends Gtk.SearchEntry {constructor(config?: properties);
location: Location;
show_named_timezones: boolean;
top: Location;
get_location(): Location | null;
has_custom_text(): boolean;
set_city(city_name: string | null, code: string): boolean;
set_location(loc: Location | null): void;
}
export class TimezoneMenu extends Gtk.ComboBox {constructor(config?: properties);
top: Location;
tzid: string;
get_tzid(): string | null;
set_tzid(tzid: string | null): void;
}
export class Conditions  {constructor(config?: properties);
significant: boolean;
phenomenon: ConditionPhenomenon;
qualifier: ConditionQualifier;
to_string(): string;
to_string_full(options: FormatOptions): string;
}
export class InfoClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly updated: unknown;
}
export class InfoPrivate  {constructor(config?: properties);
}
export class Location  {constructor(config?: properties);
static new_detached(name: string, icao: string | null, latitude: number, longitude: number): Location;
deserialize(serialized: GLib.Variant): Location;
detect_nearest_city(lat: number, lon: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
equal(two: Location): boolean;
find_by_country_code(country_code: string): Location;
find_by_station_code(station_code: string): Location;
find_nearest_city(lat: number, lon: number): Location;
find_nearest_city_full(lat: number, lon: number, func: FilterFunc | null, user_data: object | null, destroy: GLib.DestroyNotify): Location;
free_timezones(zones: Timezone): void;
get_children(): Location[];
get_city_name(): string | null;
get_code(): string | null;
get_coords(): [number,number];
get_country(): string | null;
get_country_name(): string | null;
get_distance(loc2: Location): number;
get_level(): LocationLevel;
get_name(): string;
get_parent(): Location | null;
get_sort_name(): string;
get_timezone(): Timezone | null;
get_timezone_str(): string | null;
get_timezones(): Timezone[];
has_coords(): boolean;
ref(): Location;
serialize(): GLib.Variant;
unref(): void;
static detect_nearest_city_finish(result: Gio.AsyncResult): Location;
static get_world(): Location | null;
}
export class LocationEntryClass  {constructor(config?: properties);
readonly parent_class: Gtk.SearchEntryClass;
}
export class LocationEntryPrivate  {constructor(config?: properties);
}
export class Timezone  {constructor(config?: properties);
get_dst_offset(): number;
get_name(): string;
get_offset(): number;
get_tzid(): string;
has_dst(): boolean;
ref(): Timezone;
unref(): void;
static get_by_tzid(tzid: string): Timezone;
static get_utc(): Timezone;
}
export class TimezoneMenuClass  {constructor(config?: properties);
readonly parent_class: Gtk.ComboBoxClass;
}