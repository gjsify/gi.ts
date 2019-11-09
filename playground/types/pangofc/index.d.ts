
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
export type DecoderFindFunc = (pattern: fontconfig.Pattern, user_data: object | null) => Decoder;
export const FONT_FEATURES: string;
export const FONT_VARIATIONS: string;
export const GRAVITY: string;
export const PRGNAME: string;
export const VERSION: string;
export class Decoder  {constructor(config?: properties);
get_charset(fcfont: Font): fontconfig.CharSet;
get_glyph(fcfont: Font, wc: number): Pango.Glyph;
}
export class Font  {constructor(config?: properties);
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
lock_face(): unknown;
unlock_face(): void;
static description_from_pattern(pattern: fontconfig.Pattern, include_size: boolean): Pango.FontDescription;
}
export class FontMap  {constructor(config?: properties);
add_decoder_find_func(findfunc: DecoderFindFunc, user_data: object | null, dnotify: GLib.DestroyNotify): void;
cache_clear(): void;
config_changed(): void;
create_context(): Pango.Context;
find_decoder(pattern: fontconfig.Pattern): Decoder | null;
get_config(): unknown | null;
get_hb_face(fcfont: Font): unknown;
set_config(fcconfig: unknown | null): void;
shutdown(): void;
}
export class DecoderClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly get_charset: unknown;
readonly get_glyph: unknown;
readonly _pango_reserved1: unknown;
readonly _pango_reserved2: unknown;
readonly _pango_reserved3: unknown;
readonly _pango_reserved4: unknown;
}
export class FontClass  {constructor(config?: properties);
}
export class FontMapClass  {constructor(config?: properties);
}
export class FontMapPrivate  {constructor(config?: properties);
}