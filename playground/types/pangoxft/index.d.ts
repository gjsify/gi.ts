
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Pango from "pango";
import * as PangoFT2 from "pangoft2";
import * as PangoOT from "pangoot";
import * as xft from "xft";
import * as xlib from "xlib";
import * as fontconfig from "fontconfig";
import * as PangoXft from "pangoxft";
import * as freetype2 from "freetype2";
/**
 * pangoxft.d.ts
 */
type properties = { [key: string]: any };
export type SubstituteFunc = (pattern: fontconfig.Pattern, data: object | null) => void;
/**
 * Retrieves a #PangoContext appropriate for rendering with
 * Xft fonts on the given screen of the given display.
 */
export function get_context(display: xlib.Display, screen: number): Pango.Context;
/**
 * Returns the #PangoXftFontMap for the given display and screen.
 * The fontmap is owned by Pango and will be valid until
 * the display is closed.
 */
export function get_font_map(display: xlib.Display, screen: number): Pango.FontMap;
/**
 * Renders a #PangoGlyphString onto an Xrender <type>Picture</type> objec
 * t.
 */
export function picture_render(display: xlib.Display, src_picture: xlib.Picture, dest_picture: xlib.Picture, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;
/**
 * Renders a #PangoGlyphString onto an <type>XftDraw</type> object wrappi
 * ng an X drawable.
 */
export function render(draw: xft.Draw, color: xft.Color, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;
/**
 * Render a #PangoLayout onto a #XftDraw
 */
export function render_layout(draw: xft.Draw, color: xft.Color, layout: Pango.Layout, x: number, y: number): void;
/**
 * Render a #PangoLayoutLine onto a #XftDraw
 */
export function render_layout_line(draw: xft.Draw, color: xft.Color, line: Pango.LayoutLine, x: number, y: number): void;
/**
 * Renders a #PangoGlyphString onto a #XftDraw, possibly
 * transforming the layed-out coordinates through a transformation
 * matrix. Note that the transformation matrix for @font is not
 * changed, so to produce correct rendering results, the @font
 * must have been loaded using a #PangoContext with an identical
 * transformation matrix to that passed in to this function.
 */
export function render_transformed(draw: xft.Draw, color: xft.Color, matrix: Pango.Matrix | null, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;
/**
 * Sets a function that will be called to do final configuration
 * substitution on a #FcPattern before it is used to load
 * the font. This function can be used to do things like set
 * hinting and antialiasing options.
 */
export function set_default_substitute(display: xlib.Display, screen: number, func: SubstituteFunc, data: object | null, notify: GLib.DestroyNotify): void;
/**
 * Release any resources that have been cached for the
 * combination of @display and @screen. Note that when the
 * X display is closed, resources are released automatically,
 * without needing to call this function.
 */
export function shutdown_display(display: xlib.Display, screen: number): void;
/**
 * Call this function any time the results of the
 * default substitution function set with
 * pango_xft_set_default_substitute() change.
 * That is, if your substitution function will return different
 * results for the same input pattern, you must call this function.
 */
export function substitute_changed(display: xlib.Display, screen: number): void;
export class Font  {constructor(config?: properties);
static get_display(font: Pango.Font): xlib.Display;
static get_font(font: Pango.Font | null): xft.Font | null;
static get_glyph(font: Pango.Font, wc: number): number;
static get_unknown_glyph(font: Pango.Font, wc: number): Pango.Glyph;
static has_char(font: Pango.Font, wc: number): boolean;
static lock_face(font: Pango.Font): freetype2.Face;
static unlock_face(font: Pango.Font): void;
}
export class FontMap  {constructor(config?: properties);
}
export class Renderer extends Pango.Renderer {constructor(config?: properties);
display: object;
screen: number;
set_default_color(default_color: Pango.Color): void;
set_draw(draw: xft.Draw): void;
vfunc_composite_glyphs(xft_font: xft.Font, glyphs: xft.GlyphSpec, n_glyphs: number): void;
vfunc_composite_trapezoids(part: Pango.RenderPart, trapezoids: xlib.XTrapezoid, n_trapezoids: number): void;
}
export class RendererClass  {constructor(config?: properties);
readonly parent_class: Pango.RendererClass;
readonly composite_trapezoids: unknown;
readonly composite_glyphs: unknown;
}
export class RendererPrivate  {constructor(config?: properties);
}