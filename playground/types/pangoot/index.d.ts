
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as PangoFc from "pangofc";
import * as freetype2 from "freetype2";
import * as Pango from "pango";
import * as PangoOT from "pangoot";
/**
 * pangoot.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const ALL_GLYPHS: number;
export const DEFAULT_LANGUAGE: number;
export const NO_FEATURE: number;
export const NO_SCRIPT: number;
/**
 * Finds the OpenType language-system tag best describing @language.
 */
export function tag_from_language(language: Pango.Language | null): Tag;
/**
 * Finds the OpenType script tag corresponding to @script.
 * The %PANGO_SCRIPT_COMMON, %PANGO_SCRIPT_INHERITED, and
 * %PANGO_SCRIPT_UNKNOWN scripts are mapped to the OpenType
 * 'DFLT' script tag that is also defined as
 * %PANGO_OT_TAG_DEFAULT_SCRIPT.
 * Note that multiple #PangoScript values may map to the same
 * OpenType script tag.  In particular, %PANGO_SCRIPT_HIRAGANA
 * and %PANGO_SCRIPT_KATAKANA both map to the OT tag 'kana'.
 */
export function tag_from_script(script: Pango.Script): Tag;
/**
 * Finds a #PangoLanguage corresponding to @language_tag.
 */
export function tag_to_language(language_tag: Tag): Pango.Language;
/**
 * Finds the #PangoScript corresponding to @script_tag.
 * The 'DFLT' script tag is mapped to %PANGO_SCRIPT_COMMON.
 * Note that an OpenType script tag may correspond to multiple
 * #PangoScript values.  In such cases, the #PangoScript value
 * with the smallest value is returned.
 * In particular, %PANGO_SCRIPT_HIRAGANA
 * and %PANGO_SCRIPT_KATAKANA both map to the OT tag 'kana'.
 * This function will return %PANGO_SCRIPT_HIRAGANA for
 * 'kana'.
 */
export function tag_to_script(script_tag: Tag): Pango.Script;
export enum TableType {
    GSUB = 0,
    GPOS = 1,
}
export type Tag = number;
export class Info  {
    constructor(config?: properties);
    find_feature(table_type: TableType, feature_tag: Tag, script_index: number, language_index: number): [boolean, number | null];
    find_language(table_type: TableType, script_index: number, language_tag: Tag): [boolean, number | null,number | null];
    find_script(table_type: TableType, script_tag: Tag): [boolean, number | null];
    list_features(table_type: TableType, tag: Tag, script_index: number, language_index: number): Tag;
    list_languages(table_type: TableType, script_index: number, language_tag: Tag): Tag;
    list_scripts(table_type: TableType): Tag;
    static get(face: freetype2.Face): Info;
}
export class Ruleset extends GObject.Object {
    constructor(config?: properties);
    static new_for(info: Info, script: Pango.Script, language: Pango.Language): Ruleset;
    static new_from_description(info: Info, desc: RulesetDescription): Ruleset;
    add_feature(table_type: TableType, feature_index: number, property_bit: number): void;
    get_feature_count(): [number, number | null,number | null];
    maybe_add_feature(table_type: TableType, feature_tag: Tag, property_bit: number): boolean;
    maybe_add_features(table_type: TableType, features: FeatureMap, n_features: number): number;
    position(buffer: Buffer): void;
    substitute(buffer: Buffer): void;
    static get_for_description(info: Info, desc: RulesetDescription): Ruleset;
}
export class Buffer  {
    constructor(config?: properties);
    add_glyph(glyph: number, properties: number, cluster: number): void;
    clear(): void;
    destroy(): void;
    get_glyphs(): [Glyph[] | null,number | null];
    output(glyphs: Pango.GlyphString): void;
    set_rtl(rtl: boolean): void;
    set_zero_width_marks(zero_width_marks: boolean): void;
}
export class FeatureMap  {
    constructor(config?: properties);
    feature_name: number[];
    property_bit: number;
}
export class Glyph  {
    constructor(config?: properties);
    glyph: number;
    properties: number;
    cluster: number;
    component: number;
    ligID: number;
    internal: number;
}
export class RulesetDescription  {
    constructor(config?: properties);
    script: Pango.Script;
    language: Pango.Language;
    static_gsub_features: FeatureMap;
    n_static_gsub_features: number;
    static_gpos_features: FeatureMap;
    n_static_gpos_features: number;
    other_features: FeatureMap;
    n_other_features: number;
    equal(desc2: RulesetDescription): boolean;
    free(): void;
    hash(): number;
}