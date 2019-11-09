
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GUPnPDLNA from "gupnpdlna";
/**
 * gupnpdlna.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export enum ValueState {
    SET = 0,
    UNSET = 1,
    UNSUPPORTED = 2,
}
export class AudioInformation  {
    constructor(config?: properties);
    readonly priv: AudioInformationPrivate;
}
export class ContainerInformation  {
    constructor(config?: properties);
    readonly priv: ContainerInformationPrivate;
}
export class ImageInformation  {
    constructor(config?: properties);
    readonly priv: ImageInformationPrivate;
}
export class Information  {
    constructor(config?: properties);
    readonly audio_information: AudioInformation;
    readonly container_information: ContainerInformation;
    readonly image_information: ImageInformation;
    uri: string;
    readonly video_information: VideoInformation;
    readonly priv: InformationPrivate;
    get_audio_information(): AudioInformation;
    get_container_information(): ContainerInformation;
    get_image_information(): ImageInformation;
    get_profile_name(): string;
    get_uri(): string;
    get_video_information(): VideoInformation;
}
export class Profile  {
    constructor(config?: properties);
    audio_restrictions: object;
    container_restrictions: object;
    extended: boolean;
    image_restrictions: object;
    mime: string;
    name: string;
    video_restrictions: object;
    readonly priv: ProfilePrivate;
    get_audio_restrictions(): GLib.List;
    get_container_restrictions(): GLib.List;
    get_extended(): boolean;
    get_image_restrictions(): GLib.List;
    get_mime(): string;
    get_name(): string;
    get_video_restrictions(): GLib.List;
}
export class ProfileGuesser extends GObject.Object {
    constructor(config?: properties);
    extended_mode: boolean;
    relaxed_mode: boolean;
    get_extended_mode(): boolean;
    get_profile(name: string): Profile;
    get_relaxed_mode(): boolean;
    guess_profile_async(uri: string, timeout_in_ms: number): boolean;
    guess_profile_from_info(info: Information): Profile;
    guess_profile_sync(uri: string, timeout_in_ms: number): [Profile, Information | null];
    list_profiles(): GLib.List;
    static cleanup(): void;
}
export class VideoInformation  {
    constructor(config?: properties);
    readonly priv: VideoInformationPrivate;
}
export class AudioInformationPrivate  {
    constructor(config?: properties);
}
export class BoolValue  {
    constructor(config?: properties);
    value: boolean;
    state: ValueState;
}
export class ContainerInformationPrivate  {
    constructor(config?: properties);
}
export class Fraction  {
    constructor(config?: properties);
    copy(): Fraction;
    free(): void;
    get_denominator(): number;
    get_numerator(): number;
}
export class FractionRange  {
    constructor(config?: properties);
    copy(): FractionRange;
    free(): void;
    get_max(): Fraction;
    get_min(): Fraction;
}
export class FractionValue  {
    constructor(config?: properties);
    numerator: number;
    denominator: number;
    state: ValueState;
}
export class ImageInformationPrivate  {
    constructor(config?: properties);
}
export class InformationPrivate  {
    constructor(config?: properties);
}
export class IntRange  {
    constructor(config?: properties);
    copy(): IntRange;
    free(): void;
    get_max(): number;
    get_min(): number;
}
export class IntValue  {
    constructor(config?: properties);
    value: number;
    state: ValueState;
}
export class ProfileGuesserPrivate  {
    constructor(config?: properties);
}
export class ProfilePrivate  {
    constructor(config?: properties);
}
export class Restriction  {
    constructor(config?: properties);
    copy(): Restriction;
    free(): void;
    get_entries(): GLib.HashTable;
    get_mime(): string;
    is_empty(): boolean;
    to_string(): string;
}
export class StringValue  {
    constructor(config?: properties);
    value: string;
    state: ValueState;
}
export class ValueList  {
    constructor(config?: properties);
    copy(): ValueList;
    free(): void;
    get_g_values(): GLib.List;
    is_empty(): boolean;
    to_string(): string;
}
export class VideoInformationPrivate  {
    constructor(config?: properties);
}