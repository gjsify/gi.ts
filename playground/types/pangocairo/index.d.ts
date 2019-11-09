
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Pango from "pango";
import * as cairo from "cairo";
import * as PangoCairo from "pangocairo";
/**
 * pangocairo.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type ShapeRendererFunc = (cr: cairo.Context, attr: Pango.AttrShape, do_path: boolean, data: object | null) => void;
/**
 * Retrieves any font rendering options previously set with
 * pango_cairo_context_set_font_options(). This function does not report 
 * options
 * that are derived from the target surface by pango_cairo_update_context
 * ()
 */
export function context_get_font_options(context: Pango.Context): cairo.FontOptions | null;
/**
 * Gets the resolution for the context. See pango_cairo_context_set_resol
 * ution()
 */
export function context_get_resolution(context: Pango.Context): number;
/**
 * Sets the font options used when rendering text with this context.
 * These options override any options that pango_cairo_update_context()
 * derives from the target surface.
 */
export function context_set_font_options(context: Pango.Context, options: cairo.FontOptions | null): void;
/**
 * Sets the resolution for the context. This is a scale factor between
 * points specified in a #PangoFontDescription and Cairo units. The
 * default value is 96, meaning that a 10 point font will be 13
 * units high. (10 * 96. / 72. = 13.3).
 */
export function context_set_resolution(context: Pango.Context, dpi: number): void;
/**
 * Sets callback function for context to use for rendering attributes
 * of type %PANGO_ATTR_SHAPE.  See #PangoCairoShapeRendererFunc for
 * details.
 */
export function context_set_shape_renderer(context: Pango.Context, func: ShapeRendererFunc | null, data: object | null, dnotify: GLib.DestroyNotify): void;
/**
 * Creates a context object set up to match the current transformation
 * and target surface of the Cairo context.  This context can then be
 * used to create a layout using pango_layout_new().
 * This function is a convenience function that creates a context using
 * the default font map, then updates it to @cr.  If you just need to
 * create a layout for use with @cr and do not need to access #PangoConte
 * xt
 * directly, you can use pango_cairo_create_layout() instead.
 */
export function create_context(cr: cairo.Context): Pango.Context;
/**
 * Creates a layout object set up to match the current transformation
 * and target surface of the Cairo context.  This layout can then be
 * used for text measurement with functions like
 * pango_layout_get_size() or drawing with functions like
 * pango_cairo_show_layout(). If you change the transformation
 * or target surface for @cr, you need to call pango_cairo_update_layout(
 * )
 * This function is the most convenient way to use Cairo with Pango,
 * however it is slightly inefficient since it creates a separate
 * #PangoContext object for each layout. This might matter in an
 * application that was laying out large amounts of text.
 */
export function create_layout(cr: cairo.Context): Pango.Layout;
/**
 * Add a squiggly line to the current path in the specified cairo context
 *  that
 * approximately covers the given rectangle in the style of an underline 
 * used
 * to indicate a spelling error.  (The width of the underline is rounded 
 * to an
 * integer number of up/down segments and the resulting rectangle is cent
 * ered
 * in the original rectangle)
 */
export function error_underline_path(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
/**
 * Gets a default #PangoCairoFontMap to use with Cairo.
 * Note that the type of the returned object will depend
 * on the particular font backend Cairo was compiled to use;
 * You generally should only use the #PangoFontMap and
 * #PangoCairoFontMap interfaces on the returned object.
 * The default Cairo fontmap can be changed by using
 * pango_cairo_font_map_set_default().  This can be used to
 * change the Cairo font backend that the default fontmap
 * uses for example.
 * Note that since Pango 1.32.6, the default fontmap is per-thread.
 * Each thread gets its own default fontmap.  In this way,
 * PangoCairo can be used safely from multiple threads.
 */
export function font_map_get_default(): Pango.FontMap;
/**
 * Creates a new #PangoCairoFontMap object; a fontmap is used
 * to cache information about available fonts, and holds
 * certain global parameters such as the resolution.
 * In most cases, you can use pango_cairo_font_map_get_default()
 * instead.
 * Note that the type of the returned object will depend
 * on the particular font backend Cairo was compiled to use;
 * You generally should only use the #PangoFontMap and
 * #PangoCairoFontMap interfaces on the returned object.
 * You can override the type of backend returned by using an
 * environment variable %PANGOCAIRO_BACKEND.  Supported types,
 * based on your build, are fc (fontconfig), win32, and coretext.
 * If requested type is not available, NULL is returned. Ie.
 * this is only useful for testing, when at least two backends
 * are compiled in.
 */
export function font_map_new(): Pango.FontMap;
/**
 * Creates a new #PangoCairoFontMap object of the type suitable
 * to be used with cairo font backend of type @fonttype.
 * In most cases one should simply use @pango_cairo_font_map_new(),
 * or in fact in most of those cases, just use
 * @pango_cairo_font_map_get_default().
 */
export function font_map_new_for_font_type(fonttype: cairo.FontType): Pango.FontMap | null;
/**
 * Adds the glyphs in @glyphs to the current path in the specified
 * cairo context. The origin of the glyphs (the left edge of the baseline
 * )
 * will be at the current point of the cairo context.
 */
export function glyph_string_path(cr: cairo.Context, font: Pango.Font, glyphs: Pango.GlyphString): void;
/**
 * Adds the text in #PangoLayoutLine to the current path in the
 * specified cairo context.  The origin of the glyphs (the left edge
 * of the line) will be at the current point of the cairo context.
 */
export function layout_line_path(cr: cairo.Context, line: Pango.LayoutLine): void;
/**
 * Adds the text in a #PangoLayout to the current path in the
 * specified cairo context.  The top-left corner of the #PangoLayout
 * will be at the current point of the cairo context.
 */
export function layout_path(cr: cairo.Context, layout: Pango.Layout): void;
/**
 * Draw a squiggly line in the specified cairo context that approximately
 * covers the given rectangle in the style of an underline used to indica
 * te a
 * spelling error.  (The width of the underline is rounded to an integer
 * number of up/down segments and the resulting rectangle is centered in 
 * the
 * original rectangle)
 */
export function show_error_underline(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
/**
 * Draws the glyphs in @glyph_item in the specified cairo context,
 * embedding the text associated with the glyphs in the output if the
 * output format supports it (PDF for example), otherwise it acts
 * similar to pango_cairo_show_glyph_string().
 * The origin of the glyphs (the left edge of the baseline) will
 * be drawn at the current point of the cairo context.
 * Note that @text is the start of the text for layout, which is then
 * indexed by <literal>@glyph_item->item->offset</literal>.
 */
export function show_glyph_item(cr: cairo.Context, text: string, glyph_item: Pango.GlyphItem): void;
/**
 * Draws the glyphs in @glyphs in the specified cairo context.
 * The origin of the glyphs (the left edge of the baseline) will
 * be drawn at the current point of the cairo context.
 */
export function show_glyph_string(cr: cairo.Context, font: Pango.Font, glyphs: Pango.GlyphString): void;
/**
 * Draws a #PangoLayout in the specified cairo context.
 * The top-left corner of the #PangoLayout will be drawn
 * at the current point of the cairo context.
 */
export function show_layout(cr: cairo.Context, layout: Pango.Layout): void;
/**
 * Draws a #PangoLayoutLine in the specified cairo context.
 * The origin of the glyphs (the left edge of the line) will
 * be drawn at the current point of the cairo context.
 */
export function show_layout_line(cr: cairo.Context, line: Pango.LayoutLine): void;
/**
 * Updates a #PangoContext previously created for use with Cairo to
 * match the current transformation and target surface of a Cairo
 * context. If any layouts have been created for the context,
 * it's necessary to call pango_layout_context_changed() on those
 * layouts.
 */
export function update_context(cr: cairo.Context, context: Pango.Context): void;
/**
 * Updates the private #PangoContext of a #PangoLayout created with
 * pango_cairo_create_layout() to match the current transformation
 * and target surface of a Cairo context.
 */
export function update_layout(cr: cairo.Context, layout: Pango.Layout): void;
export interface Font  {
    get_scaled_font(): cairo.ScaledFont | null;
}
export interface FontMap  {
    get_font_type(): cairo.FontType;
    get_resolution(): number;
    set_default(): void;
    set_resolution(dpi: number): void;
}