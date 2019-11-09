
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as PangoFc from "pangofc";
import * as freetype2 from "freetype2";
import * as fontconfig from "fontconfig";
import * as Pango from "pango";
import * as PangoFT2 from "pangoft2";
/**
 * pangoft2.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type SubstituteFunc = (pattern: fontconfig.Pattern, data: object | null) => void;
/**
 * Gets the #PangoCoverage for a <type>PangoFT2Font</type>. Use
 * pango_font_get_coverage() instead.
 */
export function font_get_coverage(font: Pango.Font, language: Pango.Language): Pango.Coverage;
/**
 * Retrieves kerning information for a combination of two glyphs.
 * Use pango_fc_font_kern_glyphs() instead.
 */
export function font_get_kerning(font: Pango.Font, left: Pango.Glyph, right: Pango.Glyph): number;
/**
 * Return the index of a glyph suitable for drawing unknown characters wi
 * th
 * @font, or %PANGO_GLYPH_EMPTY if no suitable glyph found.
 * If you want to draw an unknown-box for a character that is not covered
 * by the font,
 * use PANGO_GET_UNKNOWN_GLYPH() instead.
 */
export function get_unknown_glyph(font: Pango.Font): Pango.Glyph;
/**
 * Renders a #PangoGlyphString onto a FreeType2 bitmap.
 */
export function render(bitmap: freetype2.Bitmap, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;
/**
 * Render a #PangoLayout onto a FreeType2 bitmap
 */
export function render_layout(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void;
/**
 * Render a #PangoLayoutLine onto a FreeType2 bitmap
 */
export function render_layout_line(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void;
/**
 * Render a #PangoLayoutLine onto a FreeType2 bitmap, with he
 * location specified in fixed-point Pango units rather than
 * pixels. (Using this will avoid extra inaccuracies from
 * rounding to integer pixels multiple times, even if the
 * final glyph positions are integers.)
 */
export function render_layout_line_subpixel(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void;
/**
 * Render a #PangoLayout onto a FreeType2 bitmap, with he
 * location specified in fixed-point Pango units rather than
 * pixels. (Using this will avoid extra inaccuracies from
 * rounding to integer pixels multiple times, even if the
 * final glyph positions are integers.)
 */
export function render_layout_subpixel(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void;
/**
 * Renders a #PangoGlyphString onto a FreeType2 bitmap, possibly
 * transforming the layed-out coordinates through a transformation
 * matrix. Note that the transformation matrix for @font is not
 * changed, so to produce correct rendering results, the @font
 * must have been loaded using a #PangoContext with an identical
 * transformation matrix to that passed in to this function.
 */
export function render_transformed(bitmap: freetype2.Bitmap, matrix: Pango.Matrix | null, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;
/**
 * Free the global fontmap. (See pango_ft2_font_map_for_display())
 * Use of the global PangoFT2 fontmap is deprecated.
 */
export function shutdown_display(): void;
export class FontMap extends PangoFc.FontMap {
    constructor(config?: properties);
    set_default_substitute(func: SubstituteFunc, data: object | null, notify: GLib.DestroyNotify): void;
    set_resolution(dpi_x: number, dpi_y: number): void;
    substitute_changed(): void;
}