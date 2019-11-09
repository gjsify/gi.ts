
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Pango from "pango";
import * as fontconfig from "fontconfig";
import * as PangoFc from "pangofc";
/**
 * pangofc.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type DecoderFindFunc = (pattern: fontconfig.Pattern, user_data: object | null) => Decoder;
export const FONT_FEATURES: string;
export const FONT_VARIATIONS: string;
export const GRAVITY: string;
export const PRGNAME: string;
export const VERSION: string;
export class Decoder  {
    constructor(config?: properties);
    get_charset(fcfont: Font): fontconfig.CharSet;
    get_glyph(fcfont: Font, wc: number): Pango.Glyph;
}
export class Font  {
    constructor(config?: properties);
    fontmap: FontMap;
    pattern: object;
    readonly font_pattern: fontconfig.Pattern;
    readonly priv: object;
    readonly matrix: Pango.Matrix;
    readonly description: Pango.FontDescription;
    readonly metrics_by_lang: string[];
    readonly is_hinted: number;
    readonly is_transformed: number;
    get_glyph(wc: number): number;
    get_unknown_glyph(wc: number): Pango.Glyph;
    has_char(wc: number): boolean;
    kern_glyphs(glyphs: Pango.GlyphString): void;
    unlock_face(): void;
    static description_from_pattern(pattern: fontconfig.Pattern, include_size: boolean): Pango.FontDescription;
}
export class FontMap  {
    constructor(config?: properties);
    cache_clear(): void;
    config_changed(): void;
    find_decoder(pattern: fontconfig.Pattern): Decoder | null;
    shutdown(): void;
}
export class FontMapPrivate  {
    constructor(config?: properties);
}