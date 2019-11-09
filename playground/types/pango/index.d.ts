
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as cairo from "cairo";
import * as Pango from "pango";
/**
 * pango.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type AttrDataCopyFunc = (user_data: object | null) => object | null;
export type AttrFilterFunc = (attribute: Attribute, user_data: object | null) => boolean;
export type FontsetForeachFunc = (fontset: Fontset, font: Font, user_data: object | null) => boolean;
export const ANALYSIS_FLAG_CENTERED_BASELINE: number;
export const ANALYSIS_FLAG_IS_ELLIPSIS: number;
export const ANALYSIS_FLAG_NEED_HYPHEN: number;
export const ATTR_INDEX_FROM_TEXT_BEGINNING: number;
export const ENGINE_TYPE_LANG: string;
export const ENGINE_TYPE_SHAPE: string;
export const GLYPH_EMPTY: Glyph;
export const GLYPH_INVALID_INPUT: Glyph;
export const GLYPH_UNKNOWN_FLAG: Glyph;
export const RENDER_TYPE_NONE: string;
export const SCALE: number;
export const UNKNOWN_GLYPH_HEIGHT: number;
export const UNKNOWN_GLYPH_WIDTH: number;
export const VERSION_MIN_REQUIRED: number;
/**
 * Create a new allow-breaks attribute.
 * If breaks are disabled, the range will be kept in a
 * single run, as far as possible.
 */
export function attr_allow_breaks_new(allow_breaks: boolean): Attribute;
/**
 * Create a new background alpha attribute.
 */
export function attr_background_alpha_new(alpha: number): Attribute;
/**
 * Create a new background color attribute.
 */
export function attr_background_new(red: number, green: number, blue: number): Attribute;
/**
 * Create a new font fallback attribute.
 * If fallback is disabled, characters will only be used from the
 * closest matching font on the system. No fallback will be done to
 * other fonts on the system that might contain the characters in the
 * text.
 */
export function attr_fallback_new(enable_fallback: boolean): Attribute;
/**
 * Create a new font family attribute.
 */
export function attr_family_new(family: string): Attribute;
/**
 * Create a new font description attribute. This attribute
 * allows setting family, style, weight, variant, stretch,
 * and size simultaneously.
 */
export function attr_font_desc_new(desc: FontDescription): Attribute;
/**
 * Create a new font features tag attribute.
 */
export function attr_font_features_new(features: string): Attribute;
/**
 * Create a new foreground alpha attribute.
 */
export function attr_foreground_alpha_new(alpha: number): Attribute;
/**
 * Create a new foreground color attribute.
 */
export function attr_foreground_new(red: number, green: number, blue: number): Attribute;
/**
 * Create a new gravity hint attribute.
 */
export function attr_gravity_hint_new(hint: GravityHint): Attribute;
/**
 * Create a new gravity attribute.
 */
export function attr_gravity_new(gravity: Gravity): Attribute;
/**
 * Create a new insert-hyphens attribute.
 * Pango will insert hyphens when breaking lines in the middle
 * of a word. This attribute can be used to suppress the hyphen.
 */
export function attr_insert_hyphens_new(insert_hyphens: boolean): Attribute;
/**
 * Create a new language tag attribute.
 */
export function attr_language_new(language: Language): Attribute;
/**
 * Create a new letter-spacing attribute.
 */
export function attr_letter_spacing_new(letter_spacing: number): Attribute;
/**
 * Create a new baseline displacement attribute.
 */
export function attr_rise_new(rise: number): Attribute;
/**
 * Create a new font size scale attribute. The base font for the
 * affected text will have its size multiplied by @scale_factor.
 */
export function attr_scale_new(scale_factor: number): Attribute;
/**
 * Create a new shape attribute. A shape is used to impose a
 * particular ink and logical rectangle on the result of shaping a
 * particular glyph. This might be used, for instance, for
 * embedding a picture or a widget inside a #PangoLayout.
 */
export function attr_shape_new(ink_rect: Rectangle, logical_rect: Rectangle): Attribute;
/**
 * Like pango_attr_shape_new(), but a user data pointer is also
 * provided; this pointer can be accessed when later
 * rendering the glyph.
 */
export function attr_shape_new_with_data(ink_rect: Rectangle, logical_rect: Rectangle, data: object | null, copy_func: AttrDataCopyFunc | null, destroy_func: GLib.DestroyNotify | null): Attribute;
/**
 * Create a new attribute that influences how invisible
 * characters are rendered.
 */
export function attr_show_new(flags: ShowFlags): Attribute;
/**
 * Create a new font-size attribute in fractional points.
 */
export function attr_size_new(size: number): Attribute;
/**
 * Create a new font-size attribute in device units.
 */
export function attr_size_new_absolute(size: number): Attribute;
/**
 * Create a new font stretch attribute
 */
export function attr_stretch_new(stretch: Stretch): Attribute;
/**
 * Create a new strikethrough color attribute. This attribute
 * modifies the color of strikethrough lines. If not set, strikethrough
 * lines will use the foreground color.
 */
export function attr_strikethrough_color_new(red: number, green: number, blue: number): Attribute;
/**
 * Create a new strike-through attribute.
 */
export function attr_strikethrough_new(strikethrough: boolean): Attribute;
/**
 * Create a new font slant style attribute.
 */
export function attr_style_new(style: Style): Attribute;
/**
 * Fetches the attribute type name passed in when registering the type us
 * ing
 * pango_attr_type_register().
 * The returned value is an interned string (see g_intern_string() for wh
 * at
 * that means) that should not be modified or freed.
 */
export function attr_type_get_name(type: AttrType): string | null;
/**
 * Allocate a new attribute type ID.  The attribute type name can be acce
 * ssed
 * later by using pango_attr_type_get_name().
 */
export function attr_type_register(name: string): AttrType;
/**
 * Create a new underline color attribute. This attribute
 * modifies the color of underlines. If not set, underlines
 * will use the foreground color.
 */
export function attr_underline_color_new(red: number, green: number, blue: number): Attribute;
/**
 * Create a new underline-style attribute.
 */
export function attr_underline_new(underline: Underline): Attribute;
/**
 * Create a new font variant attribute (normal or small caps)
 */
export function attr_variant_new(variant: Variant): Attribute;
/**
 * Create a new font weight attribute.
 */
export function attr_weight_new(weight: Weight): Attribute;
/**
 * Determines the normative bidirectional character type of a
 * character, as specified in the Unicode Character Database.
 * A simplified version of this function is available as
 * pango_unichar_direction().
 */
export function bidi_type_for_unichar(ch: number): BidiType;
/**
 * Determines possible line, word, and character breaks
 * for a string of Unicode text with a single analysis.
 * For most purposes you may want to use pango_get_log_attrs().
 */
export function _break(text: string, length: number, analysis: Analysis, attrs: LogAttr[], attrs_len: number): void;
/**
 * This is the default break algorithm. It applies Unicode
 * rules without language-specific tailoring, therefore
 * the @analyis argument is unused and can be %NULL.
 * See pango_tailor_break() for language-specific breaks.
 */
export function default_break(text: string, length: number, analysis: Analysis | null, attrs: LogAttr, attrs_len: number): void;
/**
 * Converts extents from Pango units to device units, dividing by the
 * %PANGO_SCALE factor and performing rounding.
 * The @inclusive rectangle is converted by flooring the x/y coordinates 
 * and extending
 * width/height, such that the final rectangle completely includes the or
 * iginal
 * rectangle.
 * The @nearest rectangle is converted by rounding the coordinates
 * of the rectangle to the nearest device unit (pixel).
 * The rule to which argument to use is: if you want the resulting device
 * -space
 * rectangle to completely contain the original rectangle, pass it in as 
 * @inclusive.
 * If you want two touching-but-not-overlapping rectangles stay
 * touching-but-not-overlapping after rounding to device units, pass them
 *  in
 * as @nearest.
 */
export function extents_to_pixels(inclusive: Rectangle | null, nearest: Rectangle | null): void;
/**
 * Searches a string the first character that has a strong
 * direction, according to the Unicode bidirectional algorithm.
 */
export function find_base_dir(text: string, length: number): Direction;
/**
 * Locates a paragraph boundary in @text. A boundary is caused by
 * delimiter characters, such as a newline, carriage return, carriage
 * return-newline pair, or Unicode paragraph separator character.  The
 * index of the run of delimiters is returned in
 * @paragraph_delimiter_index. The index of the start of the paragraph
 * (index after all delimiters) is stored in @next_paragraph_start.
 * If no delimiters are found, both @paragraph_delimiter_index and
 * @next_paragraph_start are filled with the length of @text (an index on
 * e
 * off the end).
 */
export function find_paragraph_boundary(text: string, length: number): [number,number];
/**
 * Creates a new font description from a string representation in the
 * form
 * "\[FAMILY-LIST] \[STYLE-OPTIONS] \[SIZE] \[VARIATIONS]",
 * where FAMILY-LIST is a comma-separated list of families optionally
 * terminated by a comma, STYLE_OPTIONS is a whitespace-separated list
 * of words where each word describes one of style, variant, weight,
 * stretch, or gravity, and SIZE is a decimal number (size in points)
 * or optionally followed by the unit modifier "px" for absolute size.
 * VARIATIONS is a comma-separated list of font variation
 * specifications of the form "\@axis=value" (the = sign is optional).
 * The following words are understood as styles:
 * "Normal", "Roman", "Oblique", "Italic".
 * The following words are understood as variants:
 * "Small-Caps".
 * The following words are understood as weights:
 * "Thin", "Ultra-Light", "Extra-Light", "Light", "Semi-Light",
 * "Demi-Light", "Book", "Regular", "Medium", "Semi-Bold", "Demi-Bold",
 * "Bold", "Ultra-Bold", "Extra-Bold", "Heavy", "Black", "Ultra-Black",
 * "Extra-Black".
 * The following words are understood as stretch values:
 * "Ultra-Condensed", "Extra-Condensed", "Condensed", "Semi-Condensed",
 * "Semi-Expanded", "Expanded", "Extra-Expanded", "Ultra-Expanded".
 * The following words are understood as gravity values:
 * "Not-Rotated", "South", "Upside-Down", "North", "Rotated-Left",
 * "East", "Rotated-Right", "West".
 * Any one of the options may be absent. If FAMILY-LIST is absent, then
 * the family_name field of the resulting font description will be
 * initialized to %NULL. If STYLE-OPTIONS is missing, then all style
 * options will be set to the default values. If SIZE is missing, the
 * size in the resulting font description will be set to 0.
 * A typical example:
 * "Cantarell Italic Light 15 \@wght=200"
 */
export function font_description_from_string(str: string): FontDescription;
/**
 * Computes a #PangoLogAttr for each character in @text. The @log_attrs
 * array must have one #PangoLogAttr for each position in @text; if
 * @text contains N characters, it has N+1 positions, including the
 * last position at the end of the text. @text should be an entire
 * paragraph; logical attributes can't be computed without context
 * (for example you need to see spaces on either side of a word to know
 * the word is a word).
 */
export function get_log_attrs(text: string, length: number, level: number, language: Language, log_attrs: LogAttr[], attrs_len: number): void;
/**
 * If @ch has the Unicode mirrored property and there is another Unicode
 * character that typically has a glyph that is the mirror image of @ch's
 * glyph, puts that character in the address pointed to by @mirrored_ch.
 * Use g_unichar_get_mirror_char() instead; the docs for that function
 * provide full details.
 */
export function get_mirror_char(ch: number, mirrored_ch: number): boolean;
/**
 * Finds the gravity that best matches the rotation component
 * in a #PangoMatrix.
 */
export function gravity_get_for_matrix(matrix: Matrix | null): Gravity;
/**
 * Based on the script, base gravity, and hint, returns actual gravity
 * to use in laying out a single #PangoItem.
 * If @base_gravity is %PANGO_GRAVITY_AUTO, it is first replaced with the
 * preferred gravity of @script.  To get the preferred gravity of a scrip
 * t,
 * pass %PANGO_GRAVITY_AUTO and %PANGO_GRAVITY_HINT_STRONG in.
 */
export function gravity_get_for_script(script: Script, base_gravity: Gravity, hint: GravityHint): Gravity;
/**
 * Based on the script, East Asian width, base gravity, and hint,
 * returns actual gravity to use in laying out a single character
 * or #PangoItem.
 * This function is similar to pango_gravity_get_for_script() except
 * that this function makes a distinction between narrow/half-width and
 * wide/full-width characters also.  Wide/full-width characters always
 * stand <emphasis>upright</emphasis>, that is, they always take the base
 *  gravity,
 * whereas narrow/full-width characters are always rotated in vertical
 * context.
 * If @base_gravity is %PANGO_GRAVITY_AUTO, it is first replaced with the
 * preferred gravity of @script.
 */
export function gravity_get_for_script_and_width(script: Script, wide: boolean, base_gravity: Gravity, hint: GravityHint): Gravity;
/**
 * Converts a #PangoGravity value to its natural rotation in radians.
 * @gravity should not be %PANGO_GRAVITY_AUTO.
 * Note that pango_matrix_rotate() takes angle in degrees, not radians.
 * So, to call pango_matrix_rotate() with the output of this function
 * you should multiply it by (180. / G_PI).
 */
export function gravity_to_rotation(gravity: Gravity): number;
/**
 * Checks @ch to see if it is a character that should not be
 * normally rendered on the screen.  This includes all Unicode characters
 * with "ZERO WIDTH" in their name, as well as <firstterm>bidi</firstterm
 * > formatting characters, and
 * a few other ones.  This is totally different from g_unichar_iszerowidt
 * h()
 * and is at best misnamed.
 */
export function is_zero_width(ch: number): boolean;
/**
 * Breaks a piece of text into segments with consistent
 * directional level and shaping engine. Each byte of @text will
 * be contained in exactly one of the items in the returned list;
 * the generated list of items will be in logical order (the start
 * offsets of the items are ascending).
 * @cached_iter should be an iterator over @attrs currently positioned at
 *  a
 * range before or containing @start_index; @cached_iter will be advanced
 *  to
 * the range covering the position just after @start_index + @length.
 * (i.e. if itemizing in a loop, just keep passing in the same @cached_it
 * er).
 */
export function itemize(context: Context, text: string, start_index: number, length: number, attrs: AttrList, cached_iter: AttrIterator | null): GLib.List;
/**
 * Like pango_itemize(), but the base direction to use when
 * computing bidirectional levels (see pango_context_set_base_dir ()),
 * is specified explicitly rather than gotten from the #PangoContext.
 */
export function itemize_with_base_dir(context: Context, base_dir: Direction, text: string, start_index: number, length: number, attrs: AttrList, cached_iter: AttrIterator | null): GLib.List;
/**
 * Take a RFC-3066 format language tag as a string and convert it to a
 * #PangoLanguage pointer that can be efficiently copied (copy the
 * pointer) and compared with other language tags (compare the
 * pointer.)
 * This function first canonicalizes the string by converting it to
 * lowercase, mapping '_' to '-', and stripping all characters other
 * than letters and '-'.
 * Use pango_language_get_default() if you want to get the #PangoLanguage
 *  for
 * the current locale of the process.
 */
export function language_from_string(language: string | null): Language | null;
/**
 * Returns the #PangoLanguage for the current locale of the process.
 * Note that this can change over the life of an application.
 * On Unix systems, this is the return value is derived from
 * <literal>setlocale(LC_CTYPE, NULL)</literal>, and the user can
 * affect this through the environment variables LC_ALL, LC_CTYPE or
 * LANG (checked in that order). The locale string typically is in
 * the form lang_COUNTRY, where lang is an ISO-639 language code, and
 * COUNTRY is an ISO-3166 country code. For instance, sv_FI for
 * Swedish as written in Finland or pt_BR for Portuguese as written in
 * Brazil.
 * On Windows, the C library does not use any such environment
 * variables, and setting them won't affect the behavior of functions
 * like ctime(). The user sets the locale through the Regional Options
 * in the Control Panel. The C library (in the setlocale() function)
 * does not use country and language codes, but country and language
 * names spelled out in English.
 * However, this function does check the above environment
 * variables, and does return a Unix-style locale string based on
 * either said environment variables or the thread's current locale.
 * Your application should call <literal>setlocale(LC_ALL, "");</literal>
 * for the user settings to take effect.  Gtk+ does this in its initializ
 * ation
 * functions automatically (by calling gtk_set_locale()).
 * See <literal>man setlocale</literal> for more details.
 */
export function language_get_default(): Language;
/**
 * This will return the bidirectional embedding levels of the input parag
 * raph
 * as defined by the Unicode Bidirectional Algorithm available at:
 *   http://www.unicode.org/reports/tr9/
 * If the input base direction is a weak direction, the direction of the
 * characters in the text will determine the final resolved direction.
 */
export function log2vis_get_embedding_levels(text: string, length: number, pbase_dir: Direction): number;
/**
 * After feeding a pango markup parser some data with g_markup_parse_cont
 * ext_parse(),
 * use this function to get the list of pango attributes and text out of 
 * the
 * markup. This function will not free @context, use g_markup_parse_conte
 * xt_free()
 * to do so.
 */
export function markup_parser_finish(context: GLib.MarkupParseContext): [boolean, AttrList | null,string | null,number | null];
/**
 * Parses marked-up text (see
 * <link linkend="PangoMarkupFormat">markup format</link>) to create
 * a plain-text string and an attribute list.
 * If @accel_marker is nonzero, the given character will mark the
 * character following it as an accelerator. For example, @accel_marker
 * might be an ampersand or underscore. All characters marked
 * as an accelerator will receive a %PANGO_UNDERLINE_LOW attribute,
 * and the first character so marked will be returned in @accel_char,
 * when calling finish(). Two @accel_marker characters following each
 * other produce a single literal @accel_marker character.
 * To feed markup to the parser, use g_markup_parse_context_parse()
 * on the returned #GMarkupParseContext. When done with feeding markup
 * to the parser, use pango_markup_parser_finish() to get the data out
 * of it, and then use g_markup_parse_context_free() to free it.
 * This function is designed for applications that read pango markup
 * from streams. To simply parse a string containing pango markup,
 * the simpler pango_parse_markup() API is recommended instead.
 */
export function markup_parser_new(accel_marker: number): GLib.MarkupParseContext;
/**
 * Parses an enum type and stores the result in @value.
 * If @str does not match the nick name of any of the possible values for
 *  the
 * enum and is not an integer, %FALSE is returned, a warning is issued
 * if @warn is %TRUE, and a
 * string representing the list of possible values is stored in
 * @possible_values.  The list is slash-separated, eg.
 * "none/start/middle/end".  If failed and @possible_values is not %NULL,
 * returned string should be freed using g_free().
 */
export function parse_enum(type: GType, str: string | null, warn: boolean): [boolean, number | null,string | null];
/**
 * Parses marked-up text (see
 * <link linkend="PangoMarkupFormat">markup format</link>) to create
 * a plain-text string and an attribute list.
 * If @accel_marker is nonzero, the given character will mark the
 * character following it as an accelerator. For example, @accel_marker
 * might be an ampersand or underscore. All characters marked
 * as an accelerator will receive a %PANGO_UNDERLINE_LOW attribute,
 * and the first character so marked will be returned in @accel_char.
 * Two @accel_marker characters following each other produce a single
 * literal @accel_marker character.
 * To parse a stream of pango markup incrementally, use pango_markup_pars
 * er_new().
 * If any error happens, none of the output arguments are touched except
 * for @error.
 */
export function parse_markup(markup_text: string, length: number, accel_marker: number): [boolean, AttrList | null,string | null,number | null];
/**
 * Parses a font stretch. The allowed values are
 * "ultra_condensed", "extra_condensed", "condensed",
 * "semi_condensed", "normal", "semi_expanded", "expanded",
 * "extra_expanded" and "ultra_expanded". Case variations are
 * ignored and the '_' characters may be omitted.
 */
export function parse_stretch(str: string, warn: boolean): [boolean, Stretch];
/**
 * Parses a font style. The allowed values are "normal",
 * "italic" and "oblique", case variations being
 * ignored.
 */
export function parse_style(str: string, warn: boolean): [boolean, Style];
/**
 * Parses a font variant. The allowed values are "normal"
 * and "smallcaps" or "small_caps", case variations being
 * ignored.
 */
export function parse_variant(str: string, warn: boolean): [boolean, Variant];
/**
 * Parses a font weight. The allowed values are "heavy",
 * "ultrabold", "bold", "normal", "light", "ultraleight"
 * and integers. Case variations are ignored.
 */
export function parse_weight(str: string, warn: boolean): [boolean, Weight];
/**
 * Quantizes the thickness and position of a line, typically an
 * underline or strikethrough, to whole device pixels, that is integer
 * multiples of %PANGO_SCALE. The purpose of this function is to avoid
 * such lines looking blurry.
 * Care is taken to make sure @thickness is at least one pixel when this
 * function returns, but returned @position may become zero as a result
 * of rounding.
 */
export function quantize_line_geometry(thickness: number, position: number): [number,number];
/**
 * Reads an entire line from a file into a buffer. Lines may
 * be delimited with '\n', '\r', '\n\r', or '\r\n'. The delimiter
 * is not written into the buffer. Text after a '#' character is treated 
 * as
 * a comment and skipped. '\' can be used to escape a # character.
 * '\' proceeding a line delimiter combines adjacent lines. A '\' proceed
 * ing
 * any other character is ignored and written into the output buffer
 * unmodified.
 */
export function read_line(stream: object | null, str: GLib.String): number;
/**
 * From a list of items in logical order and the associated
 * directional levels, produce a list in visual order.
 * The original list is unmodified.
 */
export function reorder_items(logical_items: GLib.List): GLib.List;
/**
 * Scans an integer.
 * Leading white space is skipped.
 */
export function scan_int(pos: string): [boolean, string,number];
/**
 * Scans a string into a #GString buffer. The string may either
 * be a sequence of non-white-space characters, or a quoted
 * string with '"'. Instead a quoted string, '\"' represents
 * a literal quote. Leading white space outside of quotes is skipped.
 */
export function scan_string(pos: string, out: GLib.String): [boolean, string];
/**
 * Scans a word into a #GString buffer. A word consists
 * of [A-Za-z_] followed by zero or more [A-Za-z_0-9]
 * Leading white space is skipped.
 */
export function scan_word(pos: string, out: GLib.String): [boolean, string];
/**
 * Looks up the script for a particular character (as defined by
 * Unicode Standard Annex \#24). No check is made for @ch being a
 * valid Unicode character; if you pass in invalid character, the
 * result is undefined.
 * Note that while the return type of this function is declared
 * as PangoScript, as of Pango 1.18, this function simply returns
 * the return value of g_unichar_get_script(). Callers must be
 * prepared to handle unknown values.
 */
export function script_for_unichar(ch: number): Script;
/**
 * Given a script, finds a language tag that is reasonably
 * representative of that script. This will usually be the
 * most widely spoken or used language written in that script:
 * for instance, the sample language for %PANGO_SCRIPT_CYRILLIC
 * is <literal>ru</literal> (Russian), the sample language
 * for %PANGO_SCRIPT_ARABIC is <literal>ar</literal>.
 * For some
 * scripts, no sample language will be returned because there
 * is no language that is sufficiently representative. The best
 * example of this is %PANGO_SCRIPT_HAN, where various different
 * variants of written Chinese, Japanese, and Korean all use
 * significantly different sets of Han characters and forms
 * of shared characters. No sample language can be provided
 * for many historical scripts as well.
 * As of 1.18, this function checks the environment variables
 * PANGO_LANGUAGE and LANGUAGE (checked in that order) first.
 * If one of them is set, it is parsed as a list of language tags
 * separated by colons or other separators.  This function
 * will return the first language in the parsed list that Pango
 * believes may use @script for writing.  This last predicate
 * is tested using pango_language_includes_script().  This can
 * be used to control Pango's font selection for non-primary
 * languages.  For example, a PANGO_LANGUAGE enviroment variable
 * set to "en:fa" makes Pango choose fonts suitable for Persian (fa)
 * instead of Arabic (ar) when a segment of Arabic text is found
 * in an otherwise non-Arabic text.  The same trick can be used to
 * choose a default language for %PANGO_SCRIPT_HAN when setting
 * context language is not feasible.
 */
export function script_get_sample_language(script: Script): Language | null;
/**
 * Given a segment of text and the corresponding
 * #PangoAnalysis structure returned from pango_itemize(),
 * convert the characters into glyphs. You may also pass
 * in only a substring of the item from pango_itemize().
 * It is recommended that you use pango_shape_full() instead, since
 * that API allows for shaping interaction happening across text item
 * boundaries.
 */
export function shape(text: string, length: number, analysis: Analysis, glyphs: GlyphString): void;
/**
 * Given a segment of text and the corresponding
 * #PangoAnalysis structure returned from pango_itemize(),
 * convert the characters into glyphs. You may also pass
 * in only a substring of the item from pango_itemize().
 * This is similar to pango_shape(), except it also can optionally take
 * the full paragraph text as input, which will then be used to perform
 * certain cross-item shaping interactions.  If you have access to the br
 * oader
 * text of which @item_text is part of, provide the broader text as
 * @paragraph_text.  If @paragraph_text is %NULL, item text is used inste
 * ad.
 */
export function shape_full(item_text: string, item_length: number, paragraph_text: string | null, paragraph_length: number, analysis: Analysis, glyphs: GlyphString): void;
/**
 * Given a segment of text and the corresponding
 * #PangoAnalysis structure returned from pango_itemize(),
 * convert the characters into glyphs. You may also pass
 * in only a substring of the item from pango_itemize().
 * This is similar to pango_shape_full(), except it also takes
 * flags that can influence the shaping process.
 */
export function shape_with_flags(item_text: string, item_length: number, paragraph_text: string | null, paragraph_length: number, analysis: Analysis, glyphs: GlyphString, flags: ShapeFlags): void;
/**
 * Skips 0 or more characters of white space.
 */
export function skip_space(pos: string): [boolean, string];
/**
 * Splits a %G_SEARCHPATH_SEPARATOR-separated list of files, stripping
 * white space and substituting ~/ with $HOME/.
 */
export function split_file_list(str: string): string[];
/**
 * Apply language-specific tailoring to the breaks in
 * @log_attrs, which are assumed to have been produced
 * by pango_default_break().
 * If @offset is not -1, it is used to apply attributes
 * from @analysis that are relevant to line breaking.
 */
export function tailor_break(text: string, length: number, analysis: Analysis, offset: number, log_attrs: LogAttr[], log_attrs_len: number): void;
/**
 * Trims leading and trailing whitespace from a string.
 */
export function trim_string(str: string): string;
/**
 * Determines the inherent direction of a character; either
 * %PANGO_DIRECTION_LTR, %PANGO_DIRECTION_RTL, or
 * %PANGO_DIRECTION_NEUTRAL.
 * This function is useful to categorize characters into left-to-right
 * letters, right-to-left letters, and everything else.  If full
 * Unicode bidirectional type of a character is needed,
 * pango_bidi_type_for_unichar() can be used instead.
 */
export function unichar_direction(ch: number): Direction;
/**
 * Converts a floating-point number to Pango units: multiplies
 * it by %PANGO_SCALE and rounds to nearest integer.
 */
export function units_from_double(d: number): number;
/**
 * Converts a number in Pango units to floating-point: divides
 * it by %PANGO_SCALE.
 */
export function units_to_double(i: number): number;
/**
 * This is similar to the macro %PANGO_VERSION except that
 * it returns the encoded version of Pango available at run-time,
 * as opposed to the version available at compile-time.
 * A version number can be encoded into an integer using
 * PANGO_VERSION_ENCODE().
 */
export function version(): number;
/**
 * Checks that the Pango library in use is compatible with the
 * given version. Generally you would pass in the constants
 * %PANGO_VERSION_MAJOR, %PANGO_VERSION_MINOR, %PANGO_VERSION_MICRO
 * as the three arguments to this function; that produces
 * a check that the library in use at run-time is compatible with
 * the version of Pango the application or module was compiled against.
 * Compatibility is defined by two things: first the version
 * of the running library is newer than the version
 * @required_major.required_minor.@required_micro. Second
 * the running library must be binary compatible with the
 * version @required_major.required_minor.@required_micro
 * (same major version.)
 * For compile-time version checking use PANGO_VERSION_CHECK().
 */
export function version_check(required_major: number, required_minor: number, required_micro: number): string | null;
/**
 * This is similar to the macro %PANGO_VERSION_STRING except that
 * it returns the version of Pango available at run-time, as opposed to
 * the version available at compile-time.
 */
export function version_string(): string;
export enum Alignment {
    LEFT = 0,
    CENTER = 1,
    RIGHT = 2,
}
export enum AttrType {
    INVALID = 0,
    LANGUAGE = 1,
    FAMILY = 2,
    STYLE = 3,
    WEIGHT = 4,
    VARIANT = 5,
    STRETCH = 6,
    SIZE = 7,
    FONT_DESC = 8,
    FOREGROUND = 9,
    BACKGROUND = 10,
    UNDERLINE = 11,
    STRIKETHROUGH = 12,
    RISE = 13,
    SHAPE = 14,
    SCALE = 15,
    FALLBACK = 16,
    LETTER_SPACING = 17,
    UNDERLINE_COLOR = 18,
    STRIKETHROUGH_COLOR = 19,
    ABSOLUTE_SIZE = 20,
    GRAVITY = 21,
    GRAVITY_HINT = 22,
    FONT_FEATURES = 23,
    FOREGROUND_ALPHA = 24,
    BACKGROUND_ALPHA = 25,
    ALLOW_BREAKS = 26,
    SHOW = 27,
    INSERT_HYPHENS = 28,
}
export enum BidiType {
    L = 0,
    LRE = 1,
    LRO = 2,
    R = 3,
    AL = 4,
    RLE = 5,
    RLO = 6,
    PDF = 7,
    EN = 8,
    ES = 9,
    ET = 10,
    AN = 11,
    CS = 12,
    NSM = 13,
    BN = 14,
    B = 15,
    S = 16,
    WS = 17,
    ON = 18,
}
export enum CoverageLevel {
    NONE = 0,
    FALLBACK = 1,
    APPROXIMATE = 2,
    EXACT = 3,
}
export enum Direction {
    LTR = 0,
    RTL = 1,
    TTB_LTR = 2,
    TTB_RTL = 3,
    WEAK_LTR = 4,
    WEAK_RTL = 5,
    NEUTRAL = 6,
}
export enum EllipsizeMode {
    NONE = 0,
    START = 1,
    MIDDLE = 2,
    END = 3,
}
export enum Gravity {
    SOUTH = 0,
    EAST = 1,
    NORTH = 2,
    WEST = 3,
    AUTO = 4,
}
export enum GravityHint {
    NATURAL = 0,
    STRONG = 1,
    LINE = 2,
}
export enum RenderPart {
    FOREGROUND = 0,
    BACKGROUND = 1,
    UNDERLINE = 2,
    STRIKETHROUGH = 3,
}
export enum Script {
    INVALID_CODE = -1,
    COMMON = 0,
    INHERITED = 1,
    ARABIC = 2,
    ARMENIAN = 3,
    BENGALI = 4,
    BOPOMOFO = 5,
    CHEROKEE = 6,
    COPTIC = 7,
    CYRILLIC = 8,
    DESERET = 9,
    DEVANAGARI = 10,
    ETHIOPIC = 11,
    GEORGIAN = 12,
    GOTHIC = 13,
    GREEK = 14,
    GUJARATI = 15,
    GURMUKHI = 16,
    HAN = 17,
    HANGUL = 18,
    HEBREW = 19,
    HIRAGANA = 20,
    KANNADA = 21,
    KATAKANA = 22,
    KHMER = 23,
    LAO = 24,
    LATIN = 25,
    MALAYALAM = 26,
    MONGOLIAN = 27,
    MYANMAR = 28,
    OGHAM = 29,
    OLD_ITALIC = 30,
    ORIYA = 31,
    RUNIC = 32,
    SINHALA = 33,
    SYRIAC = 34,
    TAMIL = 35,
    TELUGU = 36,
    THAANA = 37,
    THAI = 38,
    TIBETAN = 39,
    CANADIAN_ABORIGINAL = 40,
    YI = 41,
    TAGALOG = 42,
    HANUNOO = 43,
    BUHID = 44,
    TAGBANWA = 45,
    BRAILLE = 46,
    CYPRIOT = 47,
    LIMBU = 48,
    OSMANYA = 49,
    SHAVIAN = 50,
    LINEAR_B = 51,
    TAI_LE = 52,
    UGARITIC = 53,
    NEW_TAI_LUE = 54,
    BUGINESE = 55,
    GLAGOLITIC = 56,
    TIFINAGH = 57,
    SYLOTI_NAGRI = 58,
    OLD_PERSIAN = 59,
    KHAROSHTHI = 60,
    UNKNOWN = 61,
    BALINESE = 62,
    CUNEIFORM = 63,
    PHOENICIAN = 64,
    PHAGS_PA = 65,
    NKO = 66,
    KAYAH_LI = 67,
    LEPCHA = 68,
    REJANG = 69,
    SUNDANESE = 70,
    SAURASHTRA = 71,
    CHAM = 72,
    OL_CHIKI = 73,
    VAI = 74,
    CARIAN = 75,
    LYCIAN = 76,
    LYDIAN = 77,
    BATAK = 78,
    BRAHMI = 79,
    MANDAIC = 80,
    CHAKMA = 81,
    MEROITIC_CURSIVE = 82,
    MEROITIC_HIEROGLYPHS = 83,
    MIAO = 84,
    SHARADA = 85,
    SORA_SOMPENG = 86,
    TAKRI = 87,
    BASSA_VAH = 88,
    CAUCASIAN_ALBANIAN = 89,
    DUPLOYAN = 90,
    ELBASAN = 91,
    GRANTHA = 92,
    KHOJKI = 93,
    KHUDAWADI = 94,
    LINEAR_A = 95,
    MAHAJANI = 96,
    MANICHAEAN = 97,
    MENDE_KIKAKUI = 98,
    MODI = 99,
    MRO = 100,
    NABATAEAN = 101,
    OLD_NORTH_ARABIAN = 102,
    OLD_PERMIC = 103,
    PAHAWH_HMONG = 104,
    PALMYRENE = 105,
    PAU_CIN_HAU = 106,
    PSALTER_PAHLAVI = 107,
    SIDDHAM = 108,
    TIRHUTA = 109,
    WARANG_CITI = 110,
    AHOM = 111,
    ANATOLIAN_HIEROGLYPHS = 112,
    HATRAN = 113,
    MULTANI = 114,
    OLD_HUNGARIAN = 115,
    SIGNWRITING = 116,
}
export enum Stretch {
    ULTRA_CONDENSED = 0,
    EXTRA_CONDENSED = 1,
    CONDENSED = 2,
    SEMI_CONDENSED = 3,
    NORMAL = 4,
    SEMI_EXPANDED = 5,
    EXPANDED = 6,
    EXTRA_EXPANDED = 7,
    ULTRA_EXPANDED = 8,
}
export enum Style {
    NORMAL = 0,
    OBLIQUE = 1,
    ITALIC = 2,
}
export enum TabAlign {
    LEFT = 0,
}
export enum Underline {
    NONE = 0,
    SINGLE = 1,
    DOUBLE = 2,
    LOW = 3,
    ERROR = 4,
}
export enum Variant {
    NORMAL = 0,
    SMALL_CAPS = 1,
}
export enum Weight {
    THIN = 100,
    ULTRALIGHT = 200,
    LIGHT = 300,
    SEMILIGHT = 350,
    BOOK = 380,
    NORMAL = 400,
    MEDIUM = 500,
    SEMIBOLD = 600,
    BOLD = 700,
    ULTRABOLD = 800,
    HEAVY = 900,
    ULTRAHEAVY = 1000,
}
export enum WrapMode {
    WORD = 0,
    CHAR = 1,
    WORD_CHAR = 2,
}
export type Glyph = number;
export type GlyphUnit = number;
export type LayoutRun = GlyphItem;
export enum FontMask {
    FAMILY = 1,
    STYLE = 2,
    VARIANT = 4,
    WEIGHT = 8,
    STRETCH = 16,
    SIZE = 32,
    GRAVITY = 64,
    VARIATIONS = 128,
}
export enum ShapeFlags {
    NONE = 0,
    ROUND_POSITIONS = 1,
}
export enum ShowFlags {
    NONE = 0,
    SPACES = 1,
    LINE_BREAKS = 2,
    IGNORABLES = 4,
}
export class Context extends GObject.Object {
    constructor(config?: properties);
    changed(): void;
    get_base_dir(): Direction;
    get_base_gravity(): Gravity;
    get_font_description(): FontDescription;
    get_font_map(): FontMap;
    get_gravity(): Gravity;
    get_gravity_hint(): GravityHint;
    get_language(): Language;
    get_matrix(): Matrix | null;
    get_metrics(desc: FontDescription | null, language: Language | null): FontMetrics;
    get_round_glyph_positions(): boolean;
    get_serial(): number;
    list_families(): [FontFamily[],number];
    load_font(desc: FontDescription): Font | null;
    load_fontset(desc: FontDescription, language: Language): Fontset | null;
    set_base_dir(direction: Direction): void;
    set_base_gravity(gravity: Gravity): void;
    set_font_description(desc: FontDescription): void;
    set_font_map(font_map: FontMap): void;
    set_gravity_hint(hint: GravityHint): void;
    set_language(language: Language): void;
    set_matrix(matrix: Matrix | null): void;
    set_round_glyph_positions(round_positions: boolean): void;
}
export class Coverage extends GObject.Object {
    constructor(config?: properties);
    copy(): Coverage;
    get(index_: number): CoverageLevel;
    max(other: Coverage): void;
    ref(): Coverage;
    ref(...args: never[]): never;
    set(index_: number, level: CoverageLevel): void;
    to_bytes(): [number[],number];
    unref(): void;
    static from_bytes(bytes: number[], n_bytes: number): Coverage | null;
}
export class Engine  {
    constructor(config?: properties);
}
export class EngineLang  {
    constructor(config?: properties);
}
export class EngineShape  {
    constructor(config?: properties);
}
export class Font  {
    constructor(config?: properties);
    describe(): FontDescription;
    describe_with_absolute_size(): FontDescription;
    find_shaper(language: Language, ch: number): EngineShape;
    get_coverage(language: Language): Coverage;
    get_font_map(): FontMap | null;
    get_glyph_extents(glyph: Glyph): [Rectangle | null,Rectangle | null];
    get_metrics(language: Language | null): FontMetrics;
    has_char(wc: number): boolean;
    static descriptions_free(descs: FontDescription[] | null, n_descs: number): void;
}
export class FontFace  {
    constructor(config?: properties);
    describe(): FontDescription;
    get_face_name(): string;
    is_synthesized(): boolean;
    list_sizes(): [number[] | null,number];
}
export class FontFamily  {
    constructor(config?: properties);
    get_name(): string;
    is_monospace(): boolean;
    is_variable(): boolean;
    list_faces(): [FontFace[] | null,number];
}
export class FontMap  {
    constructor(config?: properties);
    changed(): void;
    create_context(): Context;
    get_serial(): number;
    list_families(): [FontFamily[],number];
    load_font(context: Context, desc: FontDescription): Font | null;
    load_fontset(context: Context, desc: FontDescription, language: Language): Fontset | null;
}
export class Fontset  {
    constructor(config?: properties);
    foreach(func: FontsetForeachFunc, data: object | null): void;
    get_font(wc: number): Font;
    get_metrics(): FontMetrics;
}
export class FontsetSimple extends Fontset {
    constructor(config?: properties);
    append(font: Font): void;
    size(): number;
}
export class Layout extends GObject.Object {
    constructor(config?: properties);
    context_changed(): void;
    copy(): Layout;
    get_alignment(): Alignment;
    get_attributes(): AttrList;
    get_auto_dir(): boolean;
    get_baseline(): number;
    get_character_count(): number;
    get_context(): Context;
    get_cursor_pos(index_: number): [Rectangle | null,Rectangle | null];
    get_ellipsize(): EllipsizeMode;
    get_extents(): [Rectangle | null,Rectangle | null];
    get_font_description(): FontDescription | null;
    get_height(): number;
    get_indent(): number;
    get_iter(): LayoutIter;
    get_justify(): boolean;
    get_line(line: number): LayoutLine | null;
    get_line_count(): number;
    get_line_readonly(line: number): LayoutLine | null;
    get_line_spacing(): number;
    get_lines(): string[];
    get_lines_readonly(): string[];
    get_log_attrs(): [LogAttr[],number];
    get_log_attrs_readonly(): [LogAttr[], number];
    get_pixel_extents(): [Rectangle | null,Rectangle | null];
    get_pixel_size(): [number | null,number | null];
    get_serial(): number;
    get_single_paragraph_mode(): boolean;
    get_size(): [number | null,number | null];
    get_spacing(): number;
    get_tabs(): TabArray | null;
    get_text(): string;
    get_unknown_glyphs_count(): number;
    get_width(): number;
    get_wrap(): WrapMode;
    index_to_line_x(index_: number, trailing: boolean): [number | null,number | null];
    index_to_pos(index_: number): [Rectangle];
    is_ellipsized(): boolean;
    is_wrapped(): boolean;
    move_cursor_visually(strong: boolean, old_index: number, old_trailing: number, direction: number): [number,number];
    set_alignment(alignment: Alignment): void;
    set_attributes(attrs: AttrList | null): void;
    set_auto_dir(auto_dir: boolean): void;
    set_ellipsize(ellipsize: EllipsizeMode): void;
    set_font_description(desc: FontDescription | null): void;
    set_height(height: number): void;
    set_indent(indent: number): void;
    set_justify(justify: boolean): void;
    set_line_spacing(factor: number): void;
    set_markup(markup: string, length: number): void;
    set_markup_with_accel(markup: string, length: number, accel_marker: number): [number | null];
    set_single_paragraph_mode(setting: boolean): void;
    set_spacing(spacing: number): void;
    set_tabs(tabs: TabArray | null): void;
    set_text(text: string, length: number): void;
    set_width(width: number): void;
    set_wrap(wrap: WrapMode): void;
    xy_to_index(x: number, y: number): [boolean, number,number];
}
export class Renderer  {
    constructor(config?: properties);
    readonly underline: Underline;
    readonly strikethrough: boolean;
    readonly active_count: number;
    readonly matrix: Matrix;
    readonly priv: RendererPrivate;
    activate(): void;
    deactivate(): void;
    draw_error_underline(x: number, y: number, width: number, height: number): void;
    draw_glyph(font: Font, glyph: Glyph, x: number, y: number): void;
    draw_glyph_item(text: string | null, glyph_item: GlyphItem, x: number, y: number): void;
    draw_glyphs(font: Font, glyphs: GlyphString, x: number, y: number): void;
    draw_layout(layout: Layout, x: number, y: number): void;
    draw_layout_line(line: LayoutLine, x: number, y: number): void;
    draw_rectangle(part: RenderPart, x: number, y: number, width: number, height: number): void;
    draw_trapezoid(part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void;
    get_alpha(part: RenderPart): number;
    get_color(part: RenderPart): Color | null;
    get_layout(): Layout | null;
    get_layout_line(): LayoutLine | null;
    get_matrix(): Matrix | null;
    part_changed(part: RenderPart): void;
    set_alpha(part: RenderPart, alpha: number): void;
    set_color(part: RenderPart, color: Color | null): void;
    set_matrix(matrix: Matrix | null): void;
}
export class Analysis  {
    constructor(config?: properties);
    shape_engine: EngineShape;
    lang_engine: EngineLang;
    font: Font;
    level: number;
    gravity: number;
    flags: number;
    script: number;
    language: Language;
    extra_attrs: string[];
}
export class AttrClass  {
    constructor(config?: properties);
    type: AttrType;
}
export class AttrColor  {
    constructor(config?: properties);
    attr: Attribute;
    color: Color;
}
export class AttrFloat  {
    constructor(config?: properties);
    attr: Attribute;
    value: number;
}
export class AttrFontDesc  {
    constructor(config?: properties);
    attr: Attribute;
    desc: FontDescription;
    static _new(desc: FontDescription): Attribute;
}
export class AttrFontFeatures  {
    constructor(config?: properties);
    attr: Attribute;
    features: string;
    static _new(features: string): Attribute;
}
export class AttrInt  {
    constructor(config?: properties);
    attr: Attribute;
    value: number;
}
export class AttrIterator  {
    constructor(config?: properties);
    copy(): AttrIterator;
    destroy(): void;
    get(type: AttrType): Attribute | null;
    get_attrs(): string[];
    get_font(desc: FontDescription, language: Language | null, extra_attrs: string[]): void;
    next(): boolean;
    range(): [number,number];
}
export class AttrLanguage  {
    constructor(config?: properties);
    attr: Attribute;
    value: Language;
    static _new(language: Language): Attribute;
}
export class AttrList  {
    constructor(config?: properties);
    change(attr: Attribute): void;
    copy(): AttrList | null;
    filter(func: AttrFilterFunc, data: object | null): AttrList | null;
    get_attributes(): string[];
    get_iterator(): AttrIterator;
    insert(attr: Attribute): void;
    insert_before(attr: Attribute): void;
    ref(): AttrList;
    splice(other: AttrList, pos: number, len: number): void;
    unref(): void;
    update(pos: number, remove: number, add: number): void;
}
export class AttrShape  {
    constructor(config?: properties);
    attr: Attribute;
    ink_rect: Rectangle;
    logical_rect: Rectangle;
    data: object;
    copy_func: AttrDataCopyFunc;
    destroy_func: GLib.DestroyNotify;
    static _new(ink_rect: Rectangle, logical_rect: Rectangle): Attribute;
    static new_with_data(ink_rect: Rectangle, logical_rect: Rectangle, data: object | null, copy_func: AttrDataCopyFunc | null, destroy_func: GLib.DestroyNotify | null): Attribute;
}
export class AttrSize  {
    constructor(config?: properties);
    attr: Attribute;
    size: number;
    absolute: number;
    static _new(size: number): Attribute;
    static new_absolute(size: number): Attribute;
}
export class AttrString  {
    constructor(config?: properties);
    attr: Attribute;
    value: string;
}
export class Attribute  {
    constructor(config?: properties);
    klass: AttrClass;
    start_index: number;
    end_index: number;
    copy(): Attribute;
    destroy(): void;
    equal(attr2: Attribute): boolean;
    init(klass: AttrClass): void;
}
export class Color  {
    constructor(config?: properties);
    red: number;
    green: number;
    blue: number;
    copy(): Color | null;
    free(): void;
    parse(spec: string): boolean;
    to_string(): string;
}
export class EngineInfo  {
    constructor(config?: properties);
    id: string;
    engine_type: string;
    render_type: string;
    scripts: EngineScriptInfo;
    n_scripts: number;
}
export class EngineScriptInfo  {
    constructor(config?: properties);
    script: Script;
    langs: string;
}
export class FontDescription  {
    constructor(config?: properties);
    better_match(old_match: FontDescription | null, new_match: FontDescription): boolean;
    copy(): FontDescription | null;
    copy_static(): FontDescription | null;
    equal(desc2: FontDescription): boolean;
    free(): void;
    get_family(): string | null;
    get_gravity(): Gravity;
    get_set_fields(): FontMask;
    get_size(): number;
    get_size_is_absolute(): boolean;
    get_stretch(): Stretch;
    get_style(): Style;
    get_variant(): Variant;
    get_variations(): string | null;
    get_weight(): Weight;
    hash(): number;
    merge(desc_to_merge: FontDescription | null, replace_existing: boolean): void;
    merge_static(desc_to_merge: FontDescription, replace_existing: boolean): void;
    set_absolute_size(size: number): void;
    set_family(family: string): void;
    set_family_static(family: string): void;
    set_gravity(gravity: Gravity): void;
    set_size(size: number): void;
    set_stretch(stretch: Stretch): void;
    set_style(style: Style): void;
    set_variant(variant: Variant): void;
    set_variations(variations: string): void;
    set_variations_static(variations: string): void;
    set_weight(weight: Weight): void;
    to_filename(): string;
    to_string(): string;
    unset_fields(to_unset: FontMask): void;
    static from_string(str: string): FontDescription;
}
export class FontMetrics  {
    constructor(config?: properties);
    readonly ref_count: number;
    readonly ascent: number;
    readonly descent: number;
    readonly height: number;
    readonly approximate_char_width: number;
    readonly approximate_digit_width: number;
    readonly underline_position: number;
    readonly underline_thickness: number;
    readonly strikethrough_position: number;
    readonly strikethrough_thickness: number;
    get_approximate_char_width(): number;
    get_approximate_digit_width(): number;
    get_ascent(): number;
    get_descent(): number;
    get_height(): number;
    get_strikethrough_position(): number;
    get_strikethrough_thickness(): number;
    get_underline_position(): number;
    get_underline_thickness(): number;
    ref(): FontMetrics | null;
    unref(): void;
}
export class GlyphGeometry  {
    constructor(config?: properties);
    width: GlyphUnit;
    x_offset: GlyphUnit;
    y_offset: GlyphUnit;
}
export class GlyphInfo  {
    constructor(config?: properties);
    glyph: Glyph;
    geometry: GlyphGeometry;
    attr: GlyphVisAttr;
}
export class GlyphItem  {
    constructor(config?: properties);
    item: Item;
    glyphs: GlyphString;
    apply_attrs(text: string, list: AttrList): string[];
    copy(): GlyphItem | null;
    free(): void;
    get_logical_widths(text: string, logical_widths: number[]): void;
    letter_space(text: string, log_attrs: LogAttr[], letter_spacing: number): void;
    split(text: string, split_index: number): GlyphItem;
}
export class GlyphItemIter  {
    constructor(config?: properties);
    glyph_item: GlyphItem;
    text: string;
    start_glyph: number;
    start_index: number;
    start_char: number;
    end_glyph: number;
    end_index: number;
    end_char: number;
    copy(): GlyphItemIter | null;
    free(): void;
    init_end(glyph_item: GlyphItem, text: string): boolean;
    init_start(glyph_item: GlyphItem, text: string): boolean;
    next_cluster(): boolean;
    prev_cluster(): boolean;
}
export class GlyphString  {
    constructor(config?: properties);
    copy(): GlyphString | null;
    extents(font: Font): [Rectangle | null,Rectangle | null];
    extents_range(start: number, end: number, font: Font): [Rectangle | null,Rectangle | null];
    free(): void;
    get_logical_widths(text: string, length: number, embedding_level: number, logical_widths: number[]): void;
    get_width(): number;
    index_to_x(text: string, length: number, analysis: Analysis, index_: number, trailing: boolean): [number];
    set_size(new_len: number): void;
    x_to_index(text: string, length: number, analysis: Analysis, x_pos: number): [number,number];
}
export class GlyphVisAttr  {
    constructor(config?: properties);
    is_cluster_start: number;
}
export class IncludedModule  {
    constructor(config?: properties);
}
export class Item  {
    constructor(config?: properties);
    apply_attrs(iter: AttrIterator): void;
    copy(): Item | null;
    free(): void;
    split(split_index: number, split_offset: number): Item;
}
export class Language  {
    constructor(config?: properties);
    get_sample_string(): string;
    get_scripts(): [Script[] | null, number | null];
    includes_script(script: Script): boolean;
    matches(range_list: string): boolean;
    to_string(): string;
    static from_string(language: string | null): Language | null;
    static get_default(): Language;
}
export class LayoutIter  {
    constructor(config?: properties);
    at_last_line(): boolean;
    copy(): LayoutIter | null;
    free(): void;
    get_baseline(): number;
    get_char_extents(): [Rectangle];
    get_cluster_extents(): [Rectangle | null,Rectangle | null];
    get_index(): number;
    get_layout(): Layout;
    get_layout_extents(): [Rectangle | null,Rectangle | null];
    get_line(): LayoutLine;
    get_line_extents(): [Rectangle | null,Rectangle | null];
    get_line_readonly(): LayoutLine;
    get_line_yrange(): [number | null,number | null];
    get_run(): LayoutRun | null;
    get_run_extents(): [Rectangle | null,Rectangle | null];
    get_run_readonly(): LayoutRun | null;
    next_char(): boolean;
    next_cluster(): boolean;
    next_line(): boolean;
    next_run(): boolean;
}
export class LayoutLine  {
    constructor(config?: properties);
    layout: Layout;
    start_index: number;
    length: number;
    runs: string[];
    is_paragraph_start: number;
    resolved_dir: number;
    get_extents(): [Rectangle | null,Rectangle | null];
    get_height(): [number | null];
    get_pixel_extents(): [Rectangle | null,Rectangle | null];
    get_x_ranges(start_index: number, end_index: number): [number[],number];
    index_to_x(index_: number, trailing: boolean): [number];
    ref(): LayoutLine;
    unref(): void;
    x_to_index(x_pos: number): [boolean, number,number];
}
export class LogAttr  {
    constructor(config?: properties);
    is_line_break: number;
    is_mandatory_break: number;
    is_char_break: number;
    is_white: number;
    is_cursor_position: number;
    is_word_start: number;
    is_word_end: number;
    is_sentence_boundary: number;
    is_sentence_start: number;
    is_sentence_end: number;
    backspace_deletes_character: number;
    is_expandable_space: number;
    is_word_boundary: number;
}
export class Map  {
    constructor(config?: properties);
}
export class MapEntry  {
    constructor(config?: properties);
}
export class Matrix  {
    constructor(config?: properties);
    xx: number;
    xy: number;
    yx: number;
    yy: number;
    x0: number;
    y0: number;
    concat(new_matrix: Matrix): void;
    copy(): Matrix | null;
    free(): void;
    get_font_scale_factor(): number;
    get_font_scale_factors(): [number | null,number | null];
    rotate(degrees: number): void;
    scale(scale_x: number, scale_y: number): void;
    transform_distance(dx: number, dy: number): [number,number];
    transform_pixel_rectangle(rect: Rectangle | null): [Rectangle | null];
    transform_point(x: number, y: number): [number,number];
    transform_rectangle(rect: Rectangle | null): [Rectangle | null];
    translate(tx: number, ty: number): void;
}
export class Rectangle  {
    constructor(config?: properties);
    x: number;
    y: number;
    width: number;
    height: number;
}
export class RendererPrivate  {
    constructor(config?: properties);
}
export class ScriptIter  {
    constructor(config?: properties);
    free(): void;
    get_range(): [string | null,string | null,Script | null];
    next(): boolean;
}
export class TabArray  {
    constructor(config?: properties);
    copy(): TabArray;
    free(): void;
    get_positions_in_pixels(): boolean;
    get_size(): number;
    get_tab(tab_index: number): [TabAlign | null,number | null];
    get_tabs(): [TabAlign | null,number[] | null];
    resize(new_size: number): void;
    set_tab(tab_index: number, alignment: TabAlign, location: number): void;
}