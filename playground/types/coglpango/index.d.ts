
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Cogl from "cogl";
import * as Pango from "pango";
import * as PangoCairo from "pangocairo";
import * as CoglPango from "coglpango";
/**
 * coglpango.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
/**
 * This updates any internal glyph cache textures as necessary to be
 * able to render the given @layout.
 * This api should be used to avoid mid-scene modifications of
 * glyph-cache textures which can lead to undefined rendering results.
 */
export function ensure_glyph_cache_for_layout(layout: Pango.Layout): void;
/**
 * Clears the glyph cache for @font_map.
 */
export function font_map_clear_glyph_cache(font_map: FontMap): void;
/**
 * Create a #PangoContext for the given @font_map.
 */
export function font_map_create_context(font_map: FontMap): Pango.Context;
/**
 * Retrieves the #CoglPangoRenderer for the passed @font_map.
 */
export function font_map_get_renderer(font_map: FontMap): Pango.Renderer;
/**
 * Retrieves whether the #CoglPangoRenderer used by @font_map will use
 * mipmapping when rendering the glyphs.
 */
export function font_map_get_use_mipmapping(font_map: FontMap): Cogl.Bool;
/**
 * Creates a new font map.
 */
export function font_map_new(): Pango.FontMap;
/**
 * Sets the resolution for the @font_map. This is a scale factor
 * between points specified in a #PangoFontDescription and Cogl units.
 * The default value is %96, meaning that a 10 point font will be 13
 * units high. (10 * 96. / 72. = 13.3).
 */
export function font_map_set_resolution(font_map: FontMap, dpi: number): void;
/**
 * Sets whether the renderer for the passed font map should use
 * mipmapping when rendering a #PangoLayout.
 */
export function font_map_set_use_mipmapping(font_map: FontMap, value: Cogl.Bool): void;
/**
 * Draws a solidly coloured @layout on the given @framebuffer at (@x,
 * @y) within the @framebuffer<!-- -->'s current model-view coordinate
 * space.
 */
export function render_layout(layout: Pango.Layout, x: number, y: number, color: Cogl.Color, flags: number): void;
/**
 * Renders @line at the given coordinates using the given color.
 */
export function render_layout_line(line: Pango.LayoutLine, x: number, y: number, color: Cogl.Color): void;
/**
 * Draws a solidly coloured @layout on the given @framebuffer at (@x,
 * @y) within the @framebuffer<!-- -->'s current model-view coordinate
 * space.
 */
export function render_layout_subpixel(layout: Pango.Layout, x: number, y: number, color: Cogl.Color, flags: number): void;
/**
 * Draws a solidly coloured @layout on the given @framebuffer at (@x,
 * @y) within the @framebuffer<!-- -->'s current model-view coordinate
 * space.
 */
export function show_layout(framebuffer: Cogl.Framebuffer, layout: Pango.Layout, x: number, y: number, color: Cogl.Color): void;
/**
 * Draws a solidly coloured @line on the given @framebuffer at (@x,
 * @y) within the @framebuffer<!-- -->'s current model-view coordinate
 * space.
 */
export function show_layout_line(framebuffer: Cogl.Framebuffer, line: Pango.LayoutLine, x: number, y: number, color: Cogl.Color): void;
export type FontMap = PangoCairo.FontMap;
export class Renderer  {
    constructor(config?: properties);
    context: object;
}