
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as HarfBuzz from "harfbuzz";
/**
 * harfbuzz.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type buffer_message_func_t = (buffer: buffer_t, font: font_t, message: string, user_data: object | null) => bool_t;
export type destroy_func_t = (user_data: object | null) => void;
export type font_get_font_extents_func_t = (font: font_t, font_data: object | null, extents: font_extents_t, user_data: object | null) => bool_t;
export type font_get_glyph_advance_func_t = (font: font_t, font_data: object | null, glyph: codepoint_t, user_data: object | null) => position_t;
export type font_get_glyph_advances_func_t = (font: font_t, font_data: object | null, count: number, first_glyph: codepoint_t, glyph_stride: number, first_advance: position_t, advance_stride: number, user_data: object | null) => void;
export type font_get_glyph_contour_point_func_t = (font: font_t, font_data: object | null, glyph: codepoint_t, point_index: number, x: position_t, y: position_t, user_data: object | null) => bool_t;
export type font_get_glyph_extents_func_t = (font: font_t, font_data: object | null, glyph: codepoint_t, extents: glyph_extents_t, user_data: object | null) => bool_t;
export type font_get_glyph_from_name_func_t = (font: font_t, font_data: object | null, name: string, len: number, glyph: codepoint_t, user_data: object | null) => bool_t;
export type font_get_glyph_func_t = (font: font_t, font_data: object | null, unicode: codepoint_t, variation_selector: codepoint_t, glyph: codepoint_t, user_data: object | null) => bool_t;
export type font_get_glyph_kerning_func_t = (font: font_t, font_data: object | null, first_glyph: codepoint_t, second_glyph: codepoint_t, user_data: object | null) => position_t;
export type font_get_glyph_name_func_t = (font: font_t, font_data: object | null, glyph: codepoint_t, name: string, size: number, user_data: object | null) => bool_t;
export type font_get_glyph_origin_func_t = (font: font_t, font_data: object | null, glyph: codepoint_t, x: position_t, y: position_t, user_data: object | null) => bool_t;
export type font_get_nominal_glyph_func_t = (font: font_t, font_data: object | null, unicode: codepoint_t, glyph: codepoint_t, user_data: object | null) => bool_t;
export type font_get_nominal_glyphs_func_t = (font: font_t, font_data: object | null, count: number, first_unicode: codepoint_t, unicode_stride: number, first_glyph: codepoint_t, glyph_stride: number, user_data: object | null) => number;
export type font_get_variation_glyph_func_t = (font: font_t, font_data: object | null, unicode: codepoint_t, variation_selector: codepoint_t, glyph: codepoint_t, user_data: object | null) => bool_t;
export type reference_table_func_t = (face: face_t, tag: tag_t, user_data: object | null) => blob_t;
export type unicode_combining_class_func_t = (ufuncs: unicode_funcs_t, unicode: codepoint_t, user_data: object | null) => unicode_combining_class_t;
export type unicode_compose_func_t = (ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t, ab: codepoint_t, user_data: object | null) => bool_t;
export type unicode_decompose_compatibility_func_t = (ufuncs: unicode_funcs_t, u: codepoint_t, decomposed: codepoint_t, user_data: object | null) => number;
export type unicode_decompose_func_t = (ufuncs: unicode_funcs_t, ab: codepoint_t, a: codepoint_t, b: codepoint_t, user_data: object | null) => bool_t;
export type unicode_eastasian_width_func_t = (ufuncs: unicode_funcs_t, unicode: codepoint_t, user_data: object | null) => number;
export type unicode_general_category_func_t = (ufuncs: unicode_funcs_t, unicode: codepoint_t, user_data: object | null) => unicode_general_category_t;
export type unicode_mirroring_func_t = (ufuncs: unicode_funcs_t, unicode: codepoint_t, user_data: object | null) => codepoint_t;
export type unicode_script_func_t = (ufuncs: unicode_funcs_t, unicode: codepoint_t, user_data: object | null) => script_t;
export const AAT_LAYOUT_NO_SELECTOR_INDEX: number;
export const BUFFER_REPLACEMENT_CODEPOINT_DEFAULT: number;
export const FEATURE_GLOBAL_START: number;
export const LANGUAGE_INVALID: language_t;
export const MAP_VALUE_INVALID: codepoint_t;
export const OT_LAYOUT_DEFAULT_LANGUAGE_INDEX: number;
export const OT_LAYOUT_NO_FEATURE_INDEX: number;
export const OT_LAYOUT_NO_SCRIPT_INDEX: number;
export const OT_LAYOUT_NO_VARIATIONS_INDEX: number;
export const OT_MAX_TAGS_PER_LANGUAGE: number;
export const OT_MAX_TAGS_PER_SCRIPT: number;
export const OT_VAR_NO_AXIS_INDEX: number;
export const SET_VALUE_INVALID: codepoint_t;
export const UNICODE_MAX: number;
export const UNICODE_MAX_DECOMPOSITION_LEN: number;
export const VERSION_MAJOR: number;
export const VERSION_MICRO: number;
export const VERSION_MINOR: number;
export const VERSION_STRING: string;
/**
 * Makes a writable copy of @blob.
 */
export function blob_copy_writable_or_fail(blob: blob_t): blob_t;
/**
 * 
 */
export function blob_create_from_file(file_name: string): blob_t;
/**
 * Returns a blob that represents a range of bytes in @parent.  The new
 * blob is always created with %HB_MEMORY_MODE_READONLY, meaning that it
 * will never modify data in the parent blob.  The parent data is not
 * expected to be modified, and will result in undefined behavior if it
 * is.
 * Makes @parent immutable.
 */
export function blob_create_sub_blob(parent: blob_t, offset: number, length: number): blob_t;
/**
 * 
 */
export function blob_get_data(blob: blob_t): [string[], number];
/**
 * Tries to make blob data writable (possibly copying it) and
 * return pointer to data.
 * Fails if blob has been made immutable, or if memory allocation
 * fails.
 */
export function blob_get_data_writable(blob: blob_t): [string[], number];
/**
 * Returns the singleton empty blob.
 * See TODO:link object types for more information.
 */
export function blob_get_empty(): blob_t;
/**
 * 
 */
export function blob_get_length(blob: blob_t): number;
/**
 * 
 */
export function blob_is_immutable(blob: blob_t): bool_t;
/**
 * 
 */
export function blob_make_immutable(blob: blob_t): void;
/**
 * Appends a character with the Unicode value of @codepoint to @buffer, a
 * nd
 * gives it the initial cluster value of @cluster. Clusters can be any th
 * ing
 * the client wants, they are usually used to refer to the index of the
 * character in the input text stream and are output in
 * #hb_glyph_info_t.cluster field.
 * This function does not check the validity of @codepoint, it is up to t
 * he
 * caller to ensure it is a valid Unicode code point.
 */
export function buffer_add(buffer: buffer_t, codepoint: codepoint_t, cluster: number): void;
/**
 * Appends characters from @text array to @buffer. The @item_offset is th
 * e
 * position of the first character from @text that will be appended, and
 * @item_length is the number of character. When shaping part of a larger
 *  text
 * (e.g. a run of text from a paragraph), instead of passing just the sub
 * string
 * corresponding to the run, it is preferable to pass the whole
 * paragraph and specify the run start and length as @item_offset and
 * @item_length, respectively, to give HarfBuzz the full context to be ab
 * le,
 * for example, to do cross-run Arabic shaping or properly handle combini
 * ng
 * marks at stat of run.
 * This function does not check the validity of @text, it is up to the ca
 * ller
 * to ensure it contains a valid Unicode code points.
 */
export function buffer_add_codepoints(buffer: buffer_t, text: codepoint_t[], text_length: number, item_offset: number, item_length: number): void;
/**
 * Similar to hb_buffer_add_codepoints(), but allows only access to first
 *  256
 * Unicode code points that can fit in 8-bit strings.
 * <note>Has nothing to do with non-Unicode Latin-1 encoding.</note>
 */
export function buffer_add_latin1(buffer: buffer_t, text: number[], text_length: number, item_offset: number, item_length: number): void;
/**
 * See hb_buffer_add_codepoints().
 * Replaces invalid UTF-16 characters with the @buffer replacement code p
 * oint,
 * see hb_buffer_set_replacement_codepoint().
 */
export function buffer_add_utf16(buffer: buffer_t, text: number[], text_length: number, item_offset: number, item_length: number): void;
/**
 * See hb_buffer_add_codepoints().
 * Replaces invalid UTF-32 characters with the @buffer replacement code p
 * oint,
 * see hb_buffer_set_replacement_codepoint().
 */
export function buffer_add_utf32(buffer: buffer_t, text: number[], text_length: number, item_offset: number, item_length: number): void;
/**
 * See hb_buffer_add_codepoints().
 * Replaces invalid UTF-8 characters with the @buffer replacement code po
 * int,
 * see hb_buffer_set_replacement_codepoint().
 */
export function buffer_add_utf8(buffer: buffer_t, text: number[], text_length: number, item_offset: number, item_length: number): void;
/**
 * Check if allocating memory for the buffer succeeded.
 */
export function buffer_allocation_successful(buffer: buffer_t): bool_t;
/**
 * Append (part of) contents of another buffer to this buffer.
 */
export function buffer_append(buffer: buffer_t, source: buffer_t, start: number, end: number): void;
/**
 * Similar to hb_buffer_reset(), but does not clear the Unicode functions
 *  and
 * the replacement code point.
 */
export function buffer_clear_contents(buffer: buffer_t): void;
/**
 * Creates a new #hb_buffer_t with all properties to defaults.
 */
export function buffer_create(): buffer_t;
/**
 * 
 */
export function buffer_deserialize_glyphs(buffer: buffer_t, buf: string[], buf_len: number, font: font_t, format: buffer_serialize_format_t): [bool_t, string];
/**
 * If dottedcircle_glyph is (hb_codepoint_t) -1 then %HB_BUFFER_DIFF_FLAG
 * _DOTTED_CIRCLE_PRESENT
 * and %HB_BUFFER_DIFF_FLAG_NOTDEF_PRESENT are never returned.  This shou
 * ld be used by most
 * callers if just comparing two buffers is needed.
 */
export function buffer_diff(buffer: buffer_t, reference: buffer_t, dottedcircle_glyph: codepoint_t, position_fuzz: number): buffer_diff_flags_t;
/**
 * 
 */
export function buffer_get_cluster_level(buffer: buffer_t): buffer_cluster_level_t;
/**
 * see hb_buffer_set_content_type().
 */
export function buffer_get_content_type(buffer: buffer_t): buffer_content_type_t;
/**
 * See hb_buffer_set_direction()
 */
export function buffer_get_direction(buffer: buffer_t): direction_t;
/**
 * 
 */
export function buffer_get_empty(): buffer_t;
/**
 * See hb_buffer_set_flags().
 */
export function buffer_get_flags(buffer: buffer_t): buffer_flags_t;
/**
 * Returns @buffer glyph information array.  Returned pointer
 * is valid as long as @buffer contents are not modified.
 */
export function buffer_get_glyph_infos(buffer: buffer_t): [glyph_info_t[], number];
/**
 * Returns @buffer glyph position array.  Returned pointer
 * is valid as long as @buffer contents are not modified.
 */
export function buffer_get_glyph_positions(buffer: buffer_t): [glyph_position_t[], number];
/**
 * See hb_buffer_set_invisible_glyph().
 */
export function buffer_get_invisible_glyph(buffer: buffer_t): codepoint_t;
/**
 * See hb_buffer_set_language().
 */
export function buffer_get_language(buffer: buffer_t): language_t;
/**
 * Returns the number of items in the buffer.
 */
export function buffer_get_length(buffer: buffer_t): number;
/**
 * See hb_buffer_set_replacement_codepoint().
 */
export function buffer_get_replacement_codepoint(buffer: buffer_t): codepoint_t;
/**
 * See hb_buffer_set_script().
 */
export function buffer_get_script(buffer: buffer_t): script_t;
/**
 * Sets @props to the #hb_segment_properties_t of @buffer.
 */
export function buffer_get_segment_properties(buffer: buffer_t): [segment_properties_t];
/**
 * 
 */
export function buffer_get_unicode_funcs(buffer: buffer_t): unicode_funcs_t;
/**
 * Sets unset buffer segment properties based on buffer Unicode
 * contents.  If buffer is not empty, it must have content type
 * %HB_BUFFER_CONTENT_TYPE_UNICODE.
 * If buffer script is not set (ie. is %HB_SCRIPT_INVALID), it
 * will be set to the Unicode script of the first character in
 * the buffer that has a script other than %HB_SCRIPT_COMMON,
 * %HB_SCRIPT_INHERITED, and %HB_SCRIPT_UNKNOWN.
 * Next, if buffer direction is not set (ie. is %HB_DIRECTION_INVALID),
 * it will be set to the natural horizontal direction of the
 * buffer script as returned by hb_script_get_horizontal_direction().
 * If hb_script_get_horizontal_direction() returns %HB_DIRECTION_INVALID,
 * then %HB_DIRECTION_LTR is used.
 * Finally, if buffer language is not set (ie. is %HB_LANGUAGE_INVALID),
 * it will be set to the process's default language as returned by
 * hb_language_get_default().  This may change in the future by
 * taking buffer script into consideration when choosing a language.
 * Note that hb_language_get_default() is NOT threadsafe the first time
 * it is called.  See documentation for that function for details.
 */
export function buffer_guess_segment_properties(buffer: buffer_t): void;
/**
 * Reorders a glyph buffer to have canonical in-cluster glyph order / pos
 * ition.
 * The resulting clusters should behave identical to pre-reordering clust
 * ers.
 * <note>This has nothing to do with Unicode normalization.</note>
 */
export function buffer_normalize_glyphs(buffer: buffer_t): void;
/**
 * Pre allocates memory for @buffer to fit at least @size number of items
 * .
 */
export function buffer_pre_allocate(buffer: buffer_t, size: number): bool_t;
/**
 * Resets the buffer to its initial status, as if it was just newly creat
 * ed
 * with hb_buffer_create().
 */
export function buffer_reset(buffer: buffer_t): void;
/**
 * Reverses buffer contents.
 */
export function buffer_reverse(buffer: buffer_t): void;
/**
 * Reverses buffer clusters.  That is, the buffer contents are
 * reversed, then each cluster (consecutive items having the
 * same cluster number) are reversed again.
 */
export function buffer_reverse_clusters(buffer: buffer_t): void;
/**
 * Reverses buffer contents between start to end.
 */
export function buffer_reverse_range(buffer: buffer_t, start: number, end: number): void;
/**
 * Parses a string into an #hb_buffer_serialize_format_t. Does not check 
 * if
 * @str is a valid buffer serialization format, use
 * hb_buffer_serialize_list_formats() to get the list of supported format
 * s.
 */
export function buffer_serialize_format_from_string(str: number[], len: number): buffer_serialize_format_t;
/**
 * Converts @format to the string corresponding it, or %NULL if it is not
 *  a valid
 * #hb_buffer_serialize_format_t.
 */
export function buffer_serialize_format_to_string(format: buffer_serialize_format_t): string;
/**
 * Serializes @buffer into a textual representation of its glyph content,
 * useful for showing the contents of the buffer, for example during debu
 * gging.
 * There are currently two supported serialization formats:
 * ## text
 * A human-readable, plain text format.
 * The serialized glyphs will look something like:
 * ```
 * [uni0651=0@518,0+0|uni0628=0+1897]
 * ```
 * - The serialized glyphs are delimited with `[` and `]`.
 * - Glyphs are separated with `|`
 * - Each glyph starts with glyph name, or glyph index if
 *   #HB_BUFFER_SERIALIZE_FLAG_NO_GLYPH_NAMES flag is set. Then,
 *   - If #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set, `=` then #hb_
 * glyph_info_t.cluster.
 *   - If #HB_BUFFER_SERIALIZE_FLAG_NO_POSITIONS is not set, the #hb_glyp
 * h_position_t in the format:
 *     - If both #hb_glyph_position_t.x_offset and #hb_glyph_position_t.y
 * _offset are not 0, `@x_offset,y_offset`. Then,
 *     - `+x_advance`, then `,y_advance` if #hb_glyph_position_t.y_advanc
 * e is not 0. Then,
 *   - If #HB_BUFFER_SERIALIZE_FLAG_GLYPH_EXTENTS is set, the
 *     #hb_glyph_extents_t in the format
 *     `&lt;x_bearing,y_bearing,width,height&gt;`
 * ## json
 * TODO.
 */
export function buffer_serialize_glyphs(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [number, number[],number,number | null];
/**
 * Returns a list of supported buffer serialization formats.
 */
export function buffer_serialize_list_formats(): string[];
/**
 * 
 */
export function buffer_set_cluster_level(buffer: buffer_t, cluster_level: buffer_cluster_level_t): void;
/**
 * Sets the type of @buffer contents, buffers are either empty, contain
 * characters (before shaping) or glyphs (the result of shaping).
 */
export function buffer_set_content_type(buffer: buffer_t, content_type: buffer_content_type_t): void;
/**
 * Set the text flow direction of the buffer. No shaping can happen witho
 * ut
 * setting @buffer direction, and it controls the visual direction for th
 * e
 * output glyphs; for RTL direction the glyphs will be reversed. Many lay
 * out
 * features depend on the proper setting of the direction, for example,
 * reversing RTL text before shaping, then shaping with LTR direction is 
 * not
 * the same as keeping the text in logical order and shaping with RTL
 * direction.
 */
export function buffer_set_direction(buffer: buffer_t, direction: direction_t): void;
/**
 * Sets @buffer flags to @flags. See #hb_buffer_flags_t.
 */
export function buffer_set_flags(buffer: buffer_t, flags: buffer_flags_t): void;
/**
 * Sets the #hb_codepoint_t that replaces invisible characters in
 * the shaping result.  If set to zero (default), the glyph for the
 * U+0020 SPACE character is used.  Otherwise, this value is used
 * verbatim.
 */
export function buffer_set_invisible_glyph(buffer: buffer_t, invisible: codepoint_t): void;
/**
 * Sets the language of @buffer to @language.
 * Languages are crucial for selecting which OpenType feature to apply to
 *  the
 * buffer which can result in applying language-specific behaviour. Langu
 * ages
 * are orthogonal to the scripts, and though they are related, they are
 * different concepts and should not be confused with each other.
 * Use hb_language_from_string() to convert from BCP 47 language tags to
 * #hb_language_t.
 */
export function buffer_set_language(buffer: buffer_t, language: language_t): void;
/**
 * Similar to hb_buffer_pre_allocate(), but clears any new items added at
 *  the
 * end.
 */
export function buffer_set_length(buffer: buffer_t, length: number): bool_t;
/**
 * 
 */
export function buffer_set_message_func(buffer: buffer_t, func: buffer_message_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * Sets the #hb_codepoint_t that replaces invalid entries for a given enc
 * oding
 * when adding text to @buffer.
 * Default is %HB_BUFFER_REPLACEMENT_CODEPOINT_DEFAULT.
 */
export function buffer_set_replacement_codepoint(buffer: buffer_t, replacement: codepoint_t): void;
/**
 * Sets the script of @buffer to @script.
 * Script is crucial for choosing the proper shaping behaviour for script
 * s that
 * require it (e.g. Arabic) and the which OpenType features defined in th
 * e font
 * to be applied.
 * You can pass one of the predefined #hb_script_t values, or use
 * hb_script_from_string() or hb_script_from_iso15924_tag() to get the
 * corresponding script from an ISO 15924 script tag.
 */
export function buffer_set_script(buffer: buffer_t, script: script_t): void;
/**
 * Sets the segment properties of the buffer, a shortcut for calling
 * hb_buffer_set_direction(), hb_buffer_set_script() and
 * hb_buffer_set_language() individually.
 */
export function buffer_set_segment_properties(buffer: buffer_t, props: segment_properties_t): void;
/**
 * 
 */
export function buffer_set_unicode_funcs(buffer: buffer_t, unicode_funcs: unicode_funcs_t): void;
/**
 * color: a #hb_color_t we are interested in its channels.
 */
export function color_get_alpha(color: color_t): number;
/**
 * color: a #hb_color_t we are interested in its channels.
 */
export function color_get_blue(color: color_t): number;
/**
 * color: a #hb_color_t we are interested in its channels.
 */
export function color_get_green(color: color_t): number;
/**
 * color: a #hb_color_t we are interested in its channels.
 */
export function color_get_red(color: color_t): number;
/**
 * 
 */
export function direction_from_string(str: number[], len: number): direction_t;
/**
 * 
 */
export function direction_to_string(direction: direction_t): string;
/**
 * Add table for @tag with data provided by @blob to the face.  @face mus
 * t
 * be created using hb_face_builder_create().
 */
export function face_builder_add_table(face: face_t, tag: tag_t, blob: blob_t): bool_t;
/**
 * Creates a #hb_face_t that can be used with hb_face_builder_add_table()
 * .
 * After tables are added to the face, it can be compiled to a binary
 * font file by calling hb_face_reference_blob().
 */
export function face_builder_create(): face_t;
/**
 * 
 */
export function face_collect_unicodes(face: face_t, out: set_t): void;
/**
 * 
 */
export function face_collect_variation_selectors(face: face_t, out: set_t): void;
/**
 * 
 */
export function face_collect_variation_unicodes(face: face_t, variation_selector: codepoint_t, out: set_t): void;
/**
 * Get number of faces in a blob.
 */
export function face_count(blob: blob_t): number;
/**
 * 
 */
export function face_create(blob: blob_t, index: number): face_t;
/**
 * 
 */
export function face_create_for_tables(reference_table_func: reference_table_func_t, user_data: object | null, destroy: destroy_func_t): face_t;
/**
 * 
 */
export function face_get_empty(): face_t;
/**
 * 
 */
export function face_get_glyph_count(face: face_t): number;
/**
 * 
 */
export function face_get_index(face: face_t): number;
/**
 * Retrieves table tags for a face, if possible.
 */
export function face_get_table_tags(face: face_t, start_offset: number, table_count: number, table_tags: tag_t): number;
/**
 * 
 */
export function face_get_upem(face: face_t): number;
/**
 * 
 */
export function face_is_immutable(face: face_t): bool_t;
/**
 * 
 */
export function face_make_immutable(face: face_t): void;
/**
 * 
 */
export function face_reference_blob(face: face_t): blob_t;
/**
 * 
 */
export function face_reference_table(face: face_t, tag: tag_t): blob_t;
/**
 * 
 */
export function face_set_glyph_count(face: face_t, glyph_count: number): void;
/**
 * 
 */
export function face_set_index(face: face_t, index: number): void;
/**
 * 
 */
export function face_set_upem(face: face_t, upem: number): void;
/**
 * Parses a string into a #hb_feature_t.
 * The format for specifying feature strings follows. All valid CSS
 * font-feature-settings values other than 'normal' and the global values
 *  are
 * also accepted, though not documented below. CSS string escapes are not
 * supported.
 * The range indices refer to the positions between Unicode characters. T
 * he
 * position before the first character is always 0.
 * The format is Python-esque.  Here is how it all works:
 * <informaltable pgwide='1' align='left' frame='none'>
 * <tgroup cols='5'>
 * <thead>
 * <row><entry>Syntax</entry>    <entry>Value</entry> <entry>Start</entry
 * > <entry>End</entry></row>
 * </thead>
 * <tbody>
 * <row><entry>Setting value:</entry></row>
 * <row><entry>kern</entry>      <entry>1</entry>     <entry>0</entry>   
 *    <entry>∞</entry>   <entry>Turn feature on</entry></row>
 * <row><entry>+kern</entry>     <entry>1</entry>     <entry>0</entry>   
 *    <entry>∞</entry>   <entry>Turn feature on</entry></row>
 * <row><entry>-kern</entry>     <entry>0</entry>     <entry>0</entry>   
 *    <entry>∞</entry>   <entry>Turn feature off</entry></row>
 * <row><entry>kern=0</entry>    <entry>0</entry>     <entry>0</entry>   
 *    <entry>∞</entry>   <entry>Turn feature off</entry></row>
 * <row><entry>kern=1</entry>    <entry>1</entry>     <entry>0</entry>   
 *    <entry>∞</entry>   <entry>Turn feature on</entry></row>
 * <row><entry>aalt=2</entry>    <entry>2</entry>     <entry>0</entry>   
 *    <entry>∞</entry>   <entry>Choose 2nd alternate</entry></row>
 * <row><entry>Setting index:</entry></row>
 * <row><entry>kern[]</entry>    <entry>1</entry>     <entry>0</entry>   
 *    <entry>∞</entry>   <entry>Turn feature on</entry></row>
 * <row><entry>kern[:]</entry>   <entry>1</entry>     <entry>0</entry>   
 *    <entry>∞</entry>   <entry>Turn feature on</entry></row>
 * <row><entry>kern[5:]</entry>  <entry>1</entry>     <entry>5</entry>   
 *    <entry>∞</entry>   <entry>Turn feature on, partial</entry></row>
 * <row><entry>kern[:5]</entry>  <entry>1</entry>     <entry>0</entry>   
 *    <entry>5</entry>   <entry>Turn feature on, partial</entry></row>
 * <row><entry>kern[3:5]</entry> <entry>1</entry>     <entry>3</entry>   
 *    <entry>5</entry>   <entry>Turn feature on, range</entry></row>
 * <row><entry>kern[3]</entry>   <entry>1</entry>     <entry>3</entry>   
 *    <entry>3+1</entry> <entry>Turn feature on, single char</entry></row
 * >
 * <row><entry>Mixing it all:</entry></row>
 * <row><entry>aalt[3:5]=2</entry> <entry>2</entry>   <entry>3</entry>   
 *    <entry>5</entry>   <entry>Turn 2nd alternate on for range</entry></
 * row>
 * </tbody>
 * </tgroup>
 * </informaltable>
 */
export function feature_from_string(str: number[], len: number): [bool_t, feature_t];
/**
 * Converts a #hb_feature_t into a %NULL-terminated string in the format
 * understood by hb_feature_from_string(). The client in responsible for
 * allocating big enough size for @buf, 128 bytes is more than enough.
 */
export function feature_to_string(feature: feature_t): [string[],number];
/**
 * 
 */
export function font_add_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [position_t,position_t];
/**
 * 
 */
export function font_create(face: face_t): font_t;
/**
 * 
 */
export function font_create_sub_font(parent: font_t): font_t;
/**
 * 
 */
export function font_funcs_create(): font_funcs_t;
/**
 * 
 */
export function font_funcs_get_empty(): font_funcs_t;
/**
 * 
 */
export function font_funcs_is_immutable(ffuncs: font_funcs_t): bool_t;
/**
 * 
 */
export function font_funcs_make_immutable(ffuncs: font_funcs_t): void;
/**
 * 
 */
export function font_funcs_set_font_h_extents_func(ffuncs: font_funcs_t, func: font_get_font_h_extents_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_font_v_extents_func(ffuncs: font_funcs_t, func: font_get_font_v_extents_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_glyph_contour_point_func(ffuncs: font_funcs_t, func: font_get_glyph_contour_point_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_glyph_extents_func(ffuncs: font_funcs_t, func: font_get_glyph_extents_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_glyph_from_name_func(ffuncs: font_funcs_t, func: font_get_glyph_from_name_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * Deprecated.  Use hb_font_funcs_set_nominal_glyph_func() and
 * hb_font_funcs_set_variation_glyph_func() instead.
 */
export function font_funcs_set_glyph_func(ffuncs: font_funcs_t, func: font_get_glyph_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_glyph_h_advance_func(ffuncs: font_funcs_t, func: font_get_glyph_h_advance_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_glyph_h_advances_func(ffuncs: font_funcs_t, func: font_get_glyph_h_advances_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_glyph_h_kerning_func(ffuncs: font_funcs_t, func: font_get_glyph_h_kerning_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_glyph_h_origin_func(ffuncs: font_funcs_t, func: font_get_glyph_h_origin_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_glyph_name_func(ffuncs: font_funcs_t, func: font_get_glyph_name_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_glyph_v_advance_func(ffuncs: font_funcs_t, func: font_get_glyph_v_advance_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_glyph_v_advances_func(ffuncs: font_funcs_t, func: font_get_glyph_v_advances_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_glyph_v_kerning_func(ffuncs: font_funcs_t, func: font_get_glyph_v_kerning_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_glyph_v_origin_func(ffuncs: font_funcs_t, func: font_get_glyph_v_origin_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_nominal_glyph_func(ffuncs: font_funcs_t, func: font_get_nominal_glyph_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_nominal_glyphs_func(ffuncs: font_funcs_t, func: font_get_nominal_glyphs_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_funcs_set_variation_glyph_func(ffuncs: font_funcs_t, func: font_get_variation_glyph_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_get_empty(): font_t;
/**
 * 
 */
export function font_get_extents_for_direction(font: font_t, direction: direction_t): [font_extents_t];
/**
 * 
 */
export function font_get_face(font: font_t): face_t;
/**
 * 
 */
export function font_get_glyph(font: font_t, unicode: codepoint_t, variation_selector: codepoint_t): [bool_t, codepoint_t];
/**
 * 
 */
export function font_get_glyph_advance_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [position_t,position_t];
/**
 * 
 */
export function font_get_glyph_advances_for_direction(font: font_t, direction: direction_t, count: number, first_glyph: codepoint_t, glyph_stride: number, first_advance: position_t, advance_stride: number): void;
/**
 * 
 */
export function font_get_glyph_contour_point(font: font_t, glyph: codepoint_t, point_index: number): [bool_t, position_t,position_t];
/**
 * 
 */
export function font_get_glyph_contour_point_for_origin(font: font_t, glyph: codepoint_t, point_index: number, direction: direction_t): [bool_t, position_t,position_t];
/**
 * 
 */
export function font_get_glyph_extents(font: font_t, glyph: codepoint_t): [bool_t, glyph_extents_t];
/**
 * 
 */
export function font_get_glyph_extents_for_origin(font: font_t, glyph: codepoint_t, direction: direction_t): [bool_t, glyph_extents_t];
/**
 * 
 */
export function font_get_glyph_from_name(font: font_t, name: string[], len: number): [bool_t, codepoint_t];
/**
 * 
 */
export function font_get_glyph_h_advance(font: font_t, glyph: codepoint_t): position_t;
/**
 * 
 */
export function font_get_glyph_h_advances(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number, first_advance: position_t, advance_stride: number): void;
/**
 * 
 */
export function font_get_glyph_h_kerning(font: font_t, left_glyph: codepoint_t, right_glyph: codepoint_t): position_t;
/**
 * 
 */
export function font_get_glyph_h_origin(font: font_t, glyph: codepoint_t): [bool_t, position_t,position_t];
/**
 * 
 */
export function font_get_glyph_kerning_for_direction(font: font_t, first_glyph: codepoint_t, second_glyph: codepoint_t, direction: direction_t): [position_t,position_t];
/**
 * 
 */
export function font_get_glyph_name(font: font_t, glyph: codepoint_t, name: string[], size: number): bool_t;
/**
 * 
 */
export function font_get_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [position_t,position_t];
/**
 * 
 */
export function font_get_glyph_v_advance(font: font_t, glyph: codepoint_t): position_t;
/**
 * 
 */
export function font_get_glyph_v_advances(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number, first_advance: position_t, advance_stride: number): void;
/**
 * 
 */
export function font_get_glyph_v_kerning(font: font_t, top_glyph: codepoint_t, bottom_glyph: codepoint_t): position_t;
/**
 * 
 */
export function font_get_glyph_v_origin(font: font_t, glyph: codepoint_t): [bool_t, position_t,position_t];
/**
 * 
 */
export function font_get_h_extents(font: font_t): [bool_t, font_extents_t];
/**
 * 
 */
export function font_get_nominal_glyph(font: font_t, unicode: codepoint_t): [bool_t, codepoint_t];
/**
 * 
 */
export function font_get_parent(font: font_t): font_t;
/**
 * 
 */
export function font_get_ppem(font: font_t): [number,number];
/**
 * Gets the "point size" of the font.  A value of 0 means unset.
 */
export function font_get_ptem(font: font_t): number;
/**
 * 
 */
export function font_get_scale(font: font_t): [number,number];
/**
 * 
 */
export function font_get_v_extents(font: font_t): [bool_t, font_extents_t];
/**
 * Return value is valid as long as variation coordinates of the font
 * are not modified.
 */
export function font_get_var_coords_normalized(font: font_t, length: number): number;
/**
 * 
 */
export function font_get_variation_glyph(font: font_t, unicode: codepoint_t, variation_selector: codepoint_t): [bool_t, codepoint_t];
/**
 * 
 */
export function font_glyph_from_string(font: font_t, s: number[], len: number): [bool_t, codepoint_t];
/**
 * 
 */
export function font_glyph_to_string(font: font_t, glyph: codepoint_t, s: string[], size: number): void;
/**
 * 
 */
export function font_is_immutable(font: font_t): bool_t;
/**
 * 
 */
export function font_make_immutable(font: font_t): void;
/**
 * Sets font-face of @font.
 */
export function font_set_face(font: font_t, face: face_t): void;
/**
 * 
 */
export function font_set_funcs(font: font_t, klass: font_funcs_t, font_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function font_set_funcs_data(font: font_t, font_data: object | null, destroy: destroy_func_t): void;
/**
 * Sets parent font of @font.
 */
export function font_set_parent(font: font_t, parent: font_t): void;
/**
 * 
 */
export function font_set_ppem(font: font_t, x_ppem: number, y_ppem: number): void;
/**
 * Sets "point size" of the font.  Set to 0 to unset.
 * There are 72 points in an inch.
 */
export function font_set_ptem(font: font_t, ptem: number): void;
/**
 * 
 */
export function font_set_scale(font: font_t, x_scale: number, y_scale: number): void;
/**
 * 
 */
export function font_set_var_coords_design(font: font_t, coords: number, coords_length: number): void;
/**
 * 
 */
export function font_set_var_coords_normalized(font: font_t, coords: number, coords_length: number): void;
/**
 * Sets design coords of a font from a named instance index.
 */
export function font_set_var_named_instance(font: font_t, instance_index: number): void;
/**
 * 
 */
export function font_set_variations(font: font_t, variations: variation_t, variations_length: number): void;
/**
 * 
 */
export function font_subtract_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [position_t,position_t];
/**
 * 
 */
export function ft_font_changed(font: font_t): void;
/**
 * 
 */
export function ft_font_get_load_flags(font: font_t): number;
/**
 * 
 */
export function ft_font_set_funcs(font: font_t): void;
/**
 * 
 */
export function ft_font_set_load_flags(font: font_t, load_flags: number): void;
/**
 * 
 */
export function glib_blob_create(gbytes: GLib.Bytes): blob_t;
/**
 * 
 */
export function glib_get_unicode_funcs(): unicode_funcs_t;
/**
 * 
 */
export function glib_script_from_script(script: script_t): GLib.UnicodeScript;
/**
 * 
 */
export function glib_script_to_script(script: GLib.UnicodeScript): script_t;
/**
 * Returns glyph flags encoded within a #hb_glyph_info_t.
 */
export function glyph_info_get_glyph_flags(info: glyph_info_t): glyph_flags_t;
/**
 * Converts @str representing a BCP 47 language tag to the corresponding
 * #hb_language_t.
 */
export function language_from_string(str: number[], len: number): language_t;
/**
 * Get default language from current locale.
 * Note that the first time this function is called, it calls
 * "setlocale (LC_CTYPE, nullptr)" to fetch current locale.  The underlyi
 * ng
 * setlocale function is, in many implementations, NOT threadsafe.  To av
 * oid
 * problems, call this function once before multiple threads can call it.
 * This function is only used from hb_buffer_guess_segment_properties() b
 * y
 * HarfBuzz itself.
 */
export function language_get_default(): language_t;
/**
 * See hb_language_from_string().
 */
export function language_to_string(language: language_t): string;
/**
 * 
 */
export function map_allocation_successful(map: map_t): bool_t;
/**
 * 
 */
export function map_clear(map: map_t): void;
/**
 * 
 */
export function map_create(): map_t;
/**
 * 
 */
export function map_del(map: map_t, key: codepoint_t): void;
/**
 * 
 */
export function map_get(map: map_t, key: codepoint_t): codepoint_t;
/**
 * 
 */
export function map_get_empty(): map_t;
/**
 * 
 */
export function map_get_population(map: map_t): number;
/**
 * 
 */
export function map_has(map: map_t, key: codepoint_t): bool_t;
/**
 * 
 */
export function map_is_empty(map: map_t): bool_t;
/**
 * 
 */
export function map_set(map: map_t, key: codepoint_t, value: codepoint_t): void;
/**
 * Fetches a list of all color layers for the specified glyph index in th
 * e specified
 * face. The list returned will begin at the offset provided.
 */
export function ot_color_glyph_get_layers(face: face_t, glyph: codepoint_t, start_offset: number): [number, number | null,ot_color_layer_t[] | null];
/**
 * Fetches the PNG image for a glyph. This function takes a font object, 
 * not a face object,
 * as input. To get an optimally sized PNG blob, the UPEM value must be s
 * et on the @font
 * object. If UPEM is unset, the blob returned will be the largest PNG av
 * ailable.
 */
export function ot_color_glyph_reference_png(font: font_t, glyph: codepoint_t): blob_t;
/**
 * Fetches the SVG document for a glyph. The blob may be either plain tex
 * t or gzip-encoded.
 */
export function ot_color_glyph_reference_svg(face: face_t, glyph: codepoint_t): blob_t;
/**
 * Tests whether a face includes any `COLR` color layers.
 */
export function ot_color_has_layers(face: face_t): bool_t;
/**
 * Tests whether a face includes a `CPAL` color-palette table.
 */
export function ot_color_has_palettes(face: face_t): bool_t;
/**
 * Tests whether a face has PNG glyph images (either in `CBDT` or `sbix` 
 * tables).
 */
export function ot_color_has_png(face: face_t): bool_t;
/**
 * Tests whether a face includes any `SVG` glyph images.
 */
export function ot_color_has_svg(face: face_t): bool_t;
/**
 * Fetches the `name` table Name ID that provides display names for
 * the specificed color in a face's `CPAL` color palette.
 * Display names can be generic (e.g., "Background") or specific
 * (e.g., "Eye color").
 */
export function ot_color_palette_color_get_name_id(face: face_t, color_index: number): ot_name_id_t;
/**
 * Fetches a list of the colors in a color palette.
 * After calling this function, @colors will be filled with the palette
 * colors. If @colors is NULL, the function will just return the number
 * of total colors without storing any actual colors; this can be used
 * for allocating a buffer of suitable size before calling
 * hb_ot_color_palette_get_colors() a second time.
 */
export function ot_color_palette_get_colors(face: face_t, palette_index: number, start_offset: number): [number, number | null,color_t[] | null];
/**
 * Fetches the number of color palettes in a face.
 */
export function ot_color_palette_get_count(face: face_t): number;
/**
 * Fetches the flags defined for a color palette.
 */
export function ot_color_palette_get_flags(face: face_t, palette_index: number): ot_color_palette_flags_t;
/**
 * Fetches the `name` table Name ID that provides display names for
 * a `CPAL` color palette.
 * Palette display names can be generic (e.g., "Default") or provide
 * specific, themed names (e.g., "Spring", "Summer", "Fall", and "Winter"
 * ).
 */
export function ot_color_palette_get_name_id(face: face_t, palette_index: number): ot_name_id_t;
/**
 * 
 */
export function ot_font_set_funcs(font: font_t): void;
/**
 * Fetches a list of all feature indexes in the specified face's GSUB tab
 * le
 * or GPOS table, underneath the specified scripts, languages, and featur
 * es.
 * If no list of scripts is provided, all scripts will be queried. If no 
 * list
 * of languages is provided, all languages will be queried. If no list of
 * features is provided, all features will be queried.
 */
export function ot_layout_collect_features(face: face_t, table_tag: tag_t, scripts: tag_t, languages: tag_t, features: tag_t): [set_t];
/**
 * Fetches a list of all feature-lookup indexes in the specified face's G
 * SUB
 * table or GPOS table, underneath the specified scripts, languages, and
 * features. If no list of scripts is provided, all scripts will be queri
 * ed.
 * If no list of languages is provided, all languages will be queried. If
 *  no
 * list of features is provided, all features will be queried.
 */
export function ot_layout_collect_lookups(face: face_t, table_tag: tag_t, scripts: tag_t, languages: tag_t, features: tag_t): [set_t];
/**
 * Fetches a list of the characters defined as having a variant under the
 *  specified
 * "Character Variant" ("cvXX") feature tag.
 * <note>Note: If the char_count output value is equal to its input value
 * , then there
 *       is a chance there were more characters defined under the feature
 *  tag than were
 *       returned. This function can be called with incrementally larger 
 * start_offset
 *       until the char_count output value is lower than its input value,
 *  or the size
 *       of the characters array can be increased.</note>
 */
export function ot_layout_feature_get_characters(face: face_t, table_tag: tag_t, feature_index: number, start_offset: number): [number, number | null,codepoint_t[]];
/**
 * Fetches a list of all lookups enumerated for the specified feature, in
 * the specified face's GSUB table or GPOS table. The list returned will
 * begin at the offset provided.
 */
export function ot_layout_feature_get_lookups(face: face_t, table_tag: tag_t, feature_index: number, start_offset: number): [number, number | null,number[]];
/**
 * Fetches name indices from feature parameters for "Stylistic Set" ('ssX
 * X') or
 * "Character Variant" ('cvXX') features.
 */
export function ot_layout_feature_get_name_ids(face: face_t, table_tag: tag_t, feature_index: number): [bool_t, ot_name_id_t | null,ot_name_id_t | null,ot_name_id_t | null,number | null,ot_name_id_t | null];
/**
 * Fetches a list of all lookups enumerated for the specified feature, in
 * the specified face's GSUB table or GPOS table, enabled at the specifie
 * d
 * variations index. The list returned will begin at the offset provided.
 */
export function ot_layout_feature_with_variations_get_lookups(face: face_t, table_tag: tag_t, feature_index: number, variations_index: number, start_offset: number): [number, number | null,number[]];
/**
 * Fetches a list of all attachment points for the specified glyph in the
 *  GDEF
 * table of the face. The list returned will begin at the offset provided
 * .
 * Useful if the client program wishes to cache the list.
 */
export function ot_layout_get_attach_points(face: face_t, glyph: codepoint_t, start_offset: number): [number, number | null,number[]];
/**
 * Fetches a baseline value from the face.
 */
export function ot_layout_get_baseline(font: font_t, baseline_tag: ot_layout_baseline_tag_t, direction: direction_t, script_tag: tag_t, language_tag: tag_t): [bool_t, position_t];
/**
 * Fetches the GDEF class of the requested glyph in the specified face.
 */
export function ot_layout_get_glyph_class(face: face_t, glyph: codepoint_t): ot_layout_glyph_class_t;
/**
 * Retrieves the set of all glyphs from the face that belong to the reque
 * sted
 * glyph class in the face's GDEF table.
 */
export function ot_layout_get_glyphs_in_class(face: face_t, klass: ot_layout_glyph_class_t): [set_t];
/**
 * Fetches a list of the caret positions defined for a ligature glyph in 
 * the GDEF
 * table of the font. The list returned will begin at the offset provided
 * .
 */
export function ot_layout_get_ligature_carets(font: font_t, direction: direction_t, glyph: codepoint_t, start_offset: number): [number, number | null,position_t[]];
/**
 * Fetches optical-size feature data (i.e., the `size` feature from GPOS)
 * . Note that
 * the subfamily_id and the subfamily name string (accessible via the sub
 * family_name_id)
 * as used here are defined as pertaining only to fonts within a font fam
 * ily that differ
 * specifically in their respective size ranges; other ways to differenti
 * ate fonts within
 * a subfamily are not covered by the `size` feature.
 * For more information on this distinction, see the `size` documentation
 *  at
 * https://docs.microsoft.com/en-us/typography/opentype/spec/features_pt#
 * tag-39size39
 */
export function ot_layout_get_size_params(face: face_t): [bool_t, number,number,ot_name_id_t,number,number];
/**
 * Tests whether a face has any glyph classes defined in its GDEF table.
 */
export function ot_layout_has_glyph_classes(face: face_t): bool_t;
/**
 * 
 */
export function ot_layout_has_positioning(face: face_t): bool_t;
/**
 * Tests whether the specified face includes any GSUB substitutions.
 */
export function ot_layout_has_substitution(face: face_t): bool_t;
/**
 * Fetches the index of a given feature tag in the specified face's GSUB 
 * table
 * or GPOS table, underneath the specified script and language.
 */
export function ot_layout_language_find_feature(face: face_t, table_tag: tag_t, script_index: number, language_index: number, feature_tag: tag_t): [bool_t, number];
/**
 * Fetches a list of all features in the specified face's GSUB table
 * or GPOS table, underneath the specified script and language. The list
 * returned will begin at the offset provided.
 */
export function ot_layout_language_get_feature_indexes(face: face_t, table_tag: tag_t, script_index: number, language_index: number, start_offset: number): [number, number | null,number[]];
/**
 * Fetches a list of all features in the specified face's GSUB table
 * or GPOS table, underneath the specified script and language. The list
 * returned will begin at the offset provided.
 */
export function ot_layout_language_get_feature_tags(face: face_t, table_tag: tag_t, script_index: number, language_index: number, start_offset: number): [number, number | null,tag_t[]];
/**
 * Fetches the tag of a requested feature index in the given face's GSUB 
 * or GPOS table,
 * underneath the specified script and language.
 */
export function ot_layout_language_get_required_feature(face: face_t, table_tag: tag_t, script_index: number, language_index: number, feature_index: number): [bool_t, tag_t];
/**
 * Fetches the index of a requested feature in the given face's GSUB or G
 * POS table,
 * underneath the specified script and language.
 */
export function ot_layout_language_get_required_feature_index(face: face_t, table_tag: tag_t, script_index: number, language_index: number): [bool_t, number];
/**
 * Fetches a list of all glyphs affected by the specified lookup in the
 * specified face's GSUB table or GPOS table.
 */
export function ot_layout_lookup_collect_glyphs(face: face_t, table_tag: tag_t, lookup_index: number): [set_t,set_t,set_t,set_t];
/**
 * Compute the transitive closure of glyphs needed for a
 * specified lookup.
 */
export function ot_layout_lookup_substitute_closure(face: face_t, lookup_index: number): [set_t];
/**
 * Tests whether a specified lookup in the specified face would
 * trigger a substitution on the given glyph sequence.
 */
export function ot_layout_lookup_would_substitute(face: face_t, lookup_index: number, glyphs: codepoint_t, glyphs_length: number, zero_context: bool_t): bool_t;
/**
 * Compute the transitive closure of glyphs needed for all of the
 * provided lookups.
 */
export function ot_layout_lookups_substitute_closure(face: face_t, lookups: set_t): [set_t];
/**
 * Fetches the index of a given language tag in the specified face's GSUB
 *  table
 * or GPOS table, underneath the specified script tag.
 */
export function ot_layout_script_find_language(face: face_t, table_tag: tag_t, script_index: number, language_tag: tag_t, language_index: number): bool_t;
/**
 * Fetches a list of language tags in the given face's GSUB or GPOS table
 * , underneath
 * the specified script index. The list returned will begin at the offset
 *  provided.
 */
export function ot_layout_script_get_language_tags(face: face_t, table_tag: tag_t, script_index: number, start_offset: number): [number, number | null,tag_t[]];
/**
 * Fetches the index of a given language tag in the specified face's GSUB
 *  table
 * or GPOS table, underneath the specified script index.
 */
export function ot_layout_script_select_language(face: face_t, table_tag: tag_t, script_index: number, language_count: number, language_tags: tag_t): [bool_t, number];
/**
 * Deprecated since 2.0.0
 */
export function ot_layout_table_choose_script(face: face_t, table_tag: tag_t, script_tags: tag_t): [bool_t, number,tag_t];
/**
 * Fetches a list of feature variations in the specified face's GSUB tabl
 * e
 * or GPOS table, at the specified variation coordinates.
 */
export function ot_layout_table_find_feature_variations(face: face_t, table_tag: tag_t, coords: number, num_coords: number): [bool_t, number];
/**
 * Fetches the index if a given script tag in the specified face's GSUB t
 * able
 * or GPOS table.
 */
export function ot_layout_table_find_script(face: face_t, table_tag: tag_t, script_tag: tag_t): [bool_t, number];
/**
 * Fetches a list of all feature tags in the given face's GSUB or GPOS ta
 * ble.
 */
export function ot_layout_table_get_feature_tags(face: face_t, table_tag: tag_t, start_offset: number): [number, number | null,tag_t[]];
/**
 * Fetches the total number of lookups enumerated in the specified
 * face's GSUB table or GPOS table.
 */
export function ot_layout_table_get_lookup_count(face: face_t, table_tag: tag_t): number;
/**
 * Fetches a list of all scripts enumerated in the specified face's GSUB 
 * table
 * or GPOS table. The list returned will begin at the offset provided.
 */
export function ot_layout_table_get_script_tags(face: face_t, table_tag: tag_t, start_offset: number): [number, number | null,tag_t[]];
/**
 * 
 */
export function ot_layout_table_select_script(face: face_t, table_tag: tag_t, script_count: number, script_tags: tag_t): [bool_t, number,tag_t];
/**
 * Fetches the specified math constant. For most constants, the value ret
 * urned
 * is an #hb_position_t.
 * However, if the requested constant is #HB_OT_MATH_CONSTANT_SCRIPT_PERC
 * ENT_SCALE_DOWN,
 * #HB_OT_MATH_CONSTANT_SCRIPT_SCRIPT_PERCENT_SCALE_DOWN or
 * #HB_OT_MATH_CONSTANT_SCRIPT_PERCENT_SCALE_DOWN, then the return value 
 * is
 * an integer between 0 and 100 representing that percentage.
 */
export function ot_math_get_constant(font: font_t, constant: ot_math_constant_t): position_t;
/**
 * Fetches the GlyphAssembly for the specified font, glyph index, and dir
 * ection.
 * Returned are a list of #hb_ot_math_glyph_part_t glyph parts that can b
 * e
 * used to draw the glyph and an italics-correction value (if one is defi
 * ned
 * in the font).
 * <note>The @direction parameter is only used to select between horizont
 * al
 * or vertical directions for the construction. Even though all #hb_direc
 * tion_t
 * values are accepted, only the result of #HB_DIRECTION_IS_HORIZONTAL is
 * considered.</note>
 */
export function ot_math_get_glyph_assembly(font: font_t, glyph: codepoint_t, direction: direction_t, start_offset: number): [number, number,ot_math_glyph_part_t[],position_t];
/**
 * Fetches an italics-correction value (if one exists) for the specified
 * glyph index.
 */
export function ot_math_get_glyph_italics_correction(font: font_t, glyph: codepoint_t): position_t;
/**
 * Fetches the math kerning (cut-ins) value for the specified font, glyph
 *  index, and
 * @kern.
 * If the MathKern table is found, the function examines it to find a hei
 * ght
 * value that is greater or equal to @correction_height. If such a height
 * value is found, corresponding kerning value from the table is returned
 * . If
 * no such height value is found, the last kerning value is returned.
 */
export function ot_math_get_glyph_kerning(font: font_t, glyph: codepoint_t, kern: ot_math_kern_t, correction_height: position_t): position_t;
/**
 * Fetches a top-accent-attachment value (if one exists) for the specifie
 * d
 * glyph index.
 * For any glyph that does not have a top-accent-attachment value - that 
 * is,
 * a glyph not covered by the `MathTopAccentAttachment` table (or, when
 * @font has no `MathTopAccentAttachment` table or no `MATH` table, any
 * glyph) - the function synthesizes a value, returning the position at
 * one-half the glyph's advance width.
 */
export function ot_math_get_glyph_top_accent_attachment(font: font_t, glyph: codepoint_t): position_t;
/**
 * Fetches the MathGlyphConstruction for the specified font, glyph index,
 *  and
 * direction. The corresponding list of size variants is returned as a li
 * st of
 * #hb_ot_math_glyph_variant_t structs.
 * <note>The @direction parameter is only used to select between horizont
 * al
 * or vertical directions for the construction. Even though all #hb_direc
 * tion_t
 * values are accepted, only the result of #HB_DIRECTION_IS_HORIZONTAL is
 * considered.</note>
 */
export function ot_math_get_glyph_variants(font: font_t, glyph: codepoint_t, direction: direction_t, start_offset: number): [number, number,ot_math_glyph_variant_t[]];
/**
 * Fetches the MathVariants table for the specified font and returns the
 * minimum overlap of connecting glyphs that are required to draw a glyph
 * assembly in the specified direction.
 * <note>The @direction parameter is only used to select between horizont
 * al
 * or vertical directions for the construction. Even though all #hb_direc
 * tion_t
 * values are accepted, only the result of #HB_DIRECTION_IS_HORIZONTAL is
 * considered.</note>
 */
export function ot_math_get_min_connector_overlap(font: font_t, direction: direction_t): position_t;
/**
 * Tests whether a face has a `MATH` table.
 */
export function ot_math_has_data(face: face_t): bool_t;
/**
 * Tests whether the given glyph index is an extended shape in the face.
 */
export function ot_math_is_glyph_extended_shape(face: face_t, glyph: codepoint_t): bool_t;
/**
 * 
 */
export function ot_meta_get_entry_tags(face: face_t, start_offset: number, entries_count: number, entries: ot_meta_tag_t): number;
/**
 * It fetches metadata entry of a given tag from a font.
 */
export function ot_meta_reference_entry(face: face_t, meta_tag: ot_meta_tag_t): blob_t;
/**
 * It fetches metrics value corresponding to a given tag from a font.
 */
export function ot_metrics_get_position(font: font_t, metrics_tag: ot_metrics_tag_t): [bool_t, position_t | null];
/**
 * 
 */
export function ot_metrics_get_variation(font: font_t, metrics_tag: ot_metrics_tag_t): number;
/**
 * 
 */
export function ot_metrics_get_x_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t;
/**
 * 
 */
export function ot_metrics_get_y_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t;
/**
 * Fetches a font name from the OpenType 'name' table.
 * If @language is #HB_LANGUAGE_INVALID, English ("en") is assumed.
 * Returns string in UTF-16 encoding.
 */
export function ot_name_get_utf16(face: face_t, name_id: ot_name_id_t, language: language_t): [number, number | null,number[]];
/**
 * Fetches a font name from the OpenType 'name' table.
 * If @language is #HB_LANGUAGE_INVALID, English ("en") is assumed.
 * Returns string in UTF-32 encoding.
 */
export function ot_name_get_utf32(face: face_t, name_id: ot_name_id_t, language: language_t): [number, number | null,number[]];
/**
 * Fetches a font name from the OpenType 'name' table.
 * If @language is #HB_LANGUAGE_INVALID, English ("en") is assumed.
 * Returns string in UTF-8 encoding.
 */
export function ot_name_get_utf8(face: face_t, name_id: ot_name_id_t, language: language_t): [number, number | null,string[]];
/**
 * Enumerates all available name IDs and language combinations. Returned
 * array is owned by the @face and should not be modified.  It can be
 * used as long as @face is alive.
 */
export function ot_name_list_names(face: face_t): [ot_name_entry_t[], number | null];
/**
 * 
 */
export function ot_shape_glyphs_closure(font: font_t, buffer: buffer_t, features: feature_t, num_features: number, glyphs: set_t): void;
/**
 * 
 */
export function ot_tag_from_language(language: language_t): tag_t;
/**
 * 
 */
export function ot_tag_to_language(tag: tag_t): language_t;
/**
 * 
 */
export function ot_tag_to_script(tag: tag_t): script_t;
/**
 * 
 */
export function ot_tags_from_script(script: script_t, script_tag_1: tag_t, script_tag_2: tag_t): void;
/**
 * Converts an #hb_script_t and an #hb_language_t to script and language 
 * tags.
 */
export function ot_tags_from_script_and_language(script: script_t, language: language_t, script_count: number | null, language_count: number | null): [tag_t | null,tag_t | null];
/**
 * Converts a script tag and a language tag to an #hb_script_t and an
 * #hb_language_t.
 */
export function ot_tags_to_script_and_language(script_tag: tag_t, language_tag: tag_t, script: script_t | null, language: language_t | null): void;
/**
 * 
 */
export function ot_var_find_axis(face: face_t, axis_tag: tag_t, axis_index: number, axis_info: ot_var_axis_t): bool_t;
/**
 * 
 */
export function ot_var_find_axis_info(face: face_t, axis_tag: tag_t, axis_info: ot_var_axis_info_t): bool_t;
/**
 * 
 */
export function ot_var_get_axes(face: face_t, start_offset: number, axes_count: number, axes_array: ot_var_axis_t): number;
/**
 * 
 */
export function ot_var_get_axis_count(face: face_t): number;
/**
 * 
 */
export function ot_var_get_axis_infos(face: face_t, start_offset: number, axes_count: number, axes_array: ot_var_axis_info_t): number;
/**
 * 
 */
export function ot_var_get_named_instance_count(face: face_t): number;
/**
 * This function allows to verify the presence of OpenType variation data
 *  on the face.
 */
export function ot_var_has_data(face: face_t): bool_t;
/**
 * 
 */
export function ot_var_named_instance_get_design_coords(face: face_t, instance_index: number, coords_length: number, coords: number): number;
/**
 * 
 */
export function ot_var_named_instance_get_postscript_name_id(face: face_t, instance_index: number): ot_name_id_t;
/**
 * 
 */
export function ot_var_named_instance_get_subfamily_name_id(face: face_t, instance_index: number): ot_name_id_t;
/**
 * 
 */
export function ot_var_normalize_coords(face: face_t, coords_length: number, design_coords: number, normalized_coords: number): void;
/**
 * 
 */
export function ot_var_normalize_variations(face: face_t, variations: variation_t, variations_length: number, coords: number, coords_length: number): void;
/**
 * Converts an ISO 15924 script tag to a corresponding #hb_script_t.
 */
export function script_from_iso15924_tag(tag: tag_t): script_t;
/**
 * Converts a string @str representing an ISO 15924 script tag to a
 * corresponding #hb_script_t. Shorthand for hb_tag_from_string() then
 * hb_script_from_iso15924_tag().
 */
export function script_from_string(str: number[], len: number): script_t;
/**
 * 
 */
export function script_get_horizontal_direction(script: script_t): direction_t;
/**
 * See hb_script_from_iso15924_tag().
 */
export function script_to_iso15924_tag(script: script_t): tag_t;
/**
 * Checks the equality of two #hb_segment_properties_t's.
 */
export function segment_properties_equal(a: segment_properties_t, b: segment_properties_t): bool_t;
/**
 * Creates a hash representing @p.
 */
export function segment_properties_hash(p: segment_properties_t): number;
/**
 * 
 */
export function set_add(set: set_t, codepoint: codepoint_t): void;
/**
 * 
 */
export function set_add_range(set: set_t, first: codepoint_t, last: codepoint_t): void;
/**
 * 
 */
export function set_allocation_successful(set: set_t): bool_t;
/**
 * 
 */
export function set_clear(set: set_t): void;
/**
 * 
 */
export function set_create(): set_t;
/**
 * 
 */
export function set_del(set: set_t, codepoint: codepoint_t): void;
/**
 * 
 */
export function set_del_range(set: set_t, first: codepoint_t, last: codepoint_t): void;
/**
 * 
 */
export function set_get_empty(): set_t;
/**
 * Finds the maximum number in the set.
 */
export function set_get_max(set: set_t): codepoint_t;
/**
 * Finds the minimum number in the set.
 */
export function set_get_min(set: set_t): codepoint_t;
/**
 * Returns the number of numbers in the set.
 */
export function set_get_population(set: set_t): number;
/**
 * 
 */
export function set_has(set: set_t, codepoint: codepoint_t): bool_t;
/**
 * 
 */
export function set_intersect(set: set_t, other: set_t): void;
/**
 * 
 */
export function set_invert(set: set_t): void;
/**
 * 
 */
export function set_is_empty(set: set_t): bool_t;
/**
 * 
 */
export function set_is_equal(set: set_t, other: set_t): bool_t;
/**
 * 
 */
export function set_is_subset(set: set_t, larger_set: set_t): bool_t;
/**
 * Gets the next number in @set that is greater than current value of @co
 * depoint.
 * Set @codepoint to %HB_SET_VALUE_INVALID to get started.
 */
export function set_next(set: set_t, codepoint: codepoint_t): [bool_t, codepoint_t];
/**
 * Gets the next consecutive range of numbers in @set that
 * are greater than current value of @last.
 * Set @last to %HB_SET_VALUE_INVALID to get started.
 */
export function set_next_range(set: set_t, last: codepoint_t): [bool_t, codepoint_t,codepoint_t];
/**
 * Gets the previous number in @set that is lower than current value of @
 * codepoint.
 * Set @codepoint to %HB_SET_VALUE_INVALID to get started.
 */
export function set_previous(set: set_t, codepoint: codepoint_t): [bool_t, codepoint_t];
/**
 * Gets the previous consecutive range of numbers in @set that
 * are less than current value of @first.
 * Set @first to %HB_SET_VALUE_INVALID to get started.
 */
export function set_previous_range(set: set_t, first: codepoint_t): [bool_t, codepoint_t,codepoint_t];
/**
 * 
 */
export function set_set(set: set_t, other: set_t): void;
/**
 * 
 */
export function set_subtract(set: set_t, other: set_t): void;
/**
 * 
 */
export function set_symmetric_difference(set: set_t, other: set_t): void;
/**
 * 
 */
export function set_union(set: set_t, other: set_t): void;
/**
 * Shapes @buffer using @font turning its Unicode characters content to
 * positioned glyphs. If @features is not %NULL, it will be used to contr
 * ol the
 * features applied during shaping.
 */
export function shape(font: font_t, buffer: buffer_t, features: feature_t[] | null, num_features: number): void;
/**
 * See hb_shape() for details. If @shaper_list is not %NULL, the specifie
 * d
 * shapers will be used in the given order, otherwise the default shapers
 *  list
 * will be used.
 */
export function shape_full(font: font_t, buffer: buffer_t, features: feature_t[] | null, num_features: number, shaper_list: string[] | null): bool_t;
/**
 * Retrieves the list of shapers supported by HarfBuzz.
 */
export function shape_list_shapers(): string[];
/**
 * 
 */
export function shape_plan_create(face: face_t, props: segment_properties_t, user_features: feature_t[], num_user_features: number, shaper_list: string[]): shape_plan_t;
/**
 * 
 */
export function shape_plan_create2(face: face_t, props: segment_properties_t, user_features: feature_t, num_user_features: number, coords: number, num_coords: number, shaper_list: string): shape_plan_t;
/**
 * 
 */
export function shape_plan_create_cached(face: face_t, props: segment_properties_t, user_features: feature_t[], num_user_features: number, shaper_list: string[]): shape_plan_t;
/**
 * 
 */
export function shape_plan_create_cached2(face: face_t, props: segment_properties_t, user_features: feature_t, num_user_features: number, coords: number, num_coords: number, shaper_list: string): shape_plan_t;
/**
 * 
 */
export function shape_plan_execute(shape_plan: shape_plan_t, font: font_t, buffer: buffer_t, features: feature_t[], num_features: number): bool_t;
/**
 * 
 */
export function shape_plan_get_empty(): shape_plan_t;
/**
 * 
 */
export function shape_plan_get_shaper(shape_plan: shape_plan_t): string;
/**
 * 
 */
export function tag_from_string(str: number[], len: number): tag_t;
/**
 * 
 */
export function tag_to_string(tag: tag_t): [number[]];
/**
 * 
 */
export function unicode_combining_class(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t;
/**
 * 
 */
export function unicode_compose(ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): [bool_t, codepoint_t];
/**
 * 
 */
export function unicode_decompose(ufuncs: unicode_funcs_t, ab: codepoint_t): [bool_t, codepoint_t,codepoint_t];
/**
 * 
 */
export function unicode_decompose_compatibility(ufuncs: unicode_funcs_t, u: codepoint_t): [number, codepoint_t];
/**
 * 
 */
export function unicode_eastasian_width(ufuncs: unicode_funcs_t, unicode: codepoint_t): number;
/**
 * 
 */
export function unicode_funcs_create(parent: unicode_funcs_t | null): unicode_funcs_t;
/**
 * 
 */
export function unicode_funcs_get_default(): unicode_funcs_t;
/**
 * 
 */
export function unicode_funcs_get_empty(): unicode_funcs_t;
/**
 * 
 */
export function unicode_funcs_get_parent(ufuncs: unicode_funcs_t): unicode_funcs_t;
/**
 * 
 */
export function unicode_funcs_is_immutable(ufuncs: unicode_funcs_t): bool_t;
/**
 * 
 */
export function unicode_funcs_make_immutable(ufuncs: unicode_funcs_t): void;
/**
 * 
 */
export function unicode_funcs_set_combining_class_func(ufuncs: unicode_funcs_t, func: unicode_combining_class_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function unicode_funcs_set_compose_func(ufuncs: unicode_funcs_t, func: unicode_compose_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function unicode_funcs_set_decompose_compatibility_func(ufuncs: unicode_funcs_t, func: unicode_decompose_compatibility_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function unicode_funcs_set_decompose_func(ufuncs: unicode_funcs_t, func: unicode_decompose_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function unicode_funcs_set_eastasian_width_func(ufuncs: unicode_funcs_t, func: unicode_eastasian_width_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function unicode_funcs_set_general_category_func(ufuncs: unicode_funcs_t, func: unicode_general_category_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function unicode_funcs_set_mirroring_func(ufuncs: unicode_funcs_t, func: unicode_mirroring_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function unicode_funcs_set_script_func(ufuncs: unicode_funcs_t, func: unicode_script_func_t, user_data: object | null, destroy: destroy_func_t): void;
/**
 * 
 */
export function unicode_general_category(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t;
/**
 * 
 */
export function unicode_mirroring(ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t;
/**
 * 
 */
export function unicode_script(ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t;
/**
 * 
 */
export function variation_from_string(str: string, len: number, variation: variation_t): bool_t;
/**
 * 
 */
export function variation_to_string(variation: variation_t, buf: string, size: number): void;
/**
 * Returns library version as three integer components.
 */
export function version(): [number,number,number];
/**
 * 
 */
export function version_atleast(major: number, minor: number, micro: number): bool_t;
/**
 * Returns library version as a string with three components.
 */
export function version_string(): string;
export enum aat_layout_feature_selector_t {
    INVALID = 65535,
    ALL_TYPE_FEATURES_ON = 0,
    ALL_TYPE_FEATURES_OFF = 1,
    REQUIRED_LIGATURES_ON = 0,
    REQUIRED_LIGATURES_OFF = 1,
    COMMON_LIGATURES_ON = 2,
    COMMON_LIGATURES_OFF = 3,
    RARE_LIGATURES_ON = 4,
    RARE_LIGATURES_OFF = 5,
    LOGOS_ON = 6,
    LOGOS_OFF = 7,
    REBUS_PICTURES_ON = 8,
    REBUS_PICTURES_OFF = 9,
    DIPHTHONG_LIGATURES_ON = 10,
    DIPHTHONG_LIGATURES_OFF = 11,
    SQUARED_LIGATURES_ON = 12,
    SQUARED_LIGATURES_OFF = 13,
    ABBREV_SQUARED_LIGATURES_ON = 14,
    ABBREV_SQUARED_LIGATURES_OFF = 15,
    SYMBOL_LIGATURES_ON = 16,
    SYMBOL_LIGATURES_OFF = 17,
    CONTEXTUAL_LIGATURES_ON = 18,
    CONTEXTUAL_LIGATURES_OFF = 19,
    HISTORICAL_LIGATURES_ON = 20,
    HISTORICAL_LIGATURES_OFF = 21,
    UNCONNECTED = 0,
    PARTIALLY_CONNECTED = 1,
    CURSIVE = 2,
    UPPER_AND_LOWER_CASE = 0,
    ALL_CAPS = 1,
    ALL_LOWER_CASE = 2,
    SMALL_CAPS = 3,
    INITIAL_CAPS = 4,
    INITIAL_CAPS_AND_SMALL_CAPS = 5,
    SUBSTITUTE_VERTICAL_FORMS_ON = 0,
    SUBSTITUTE_VERTICAL_FORMS_OFF = 1,
    LINGUISTIC_REARRANGEMENT_ON = 0,
    LINGUISTIC_REARRANGEMENT_OFF = 1,
    MONOSPACED_NUMBERS = 0,
    PROPORTIONAL_NUMBERS = 1,
    THIRD_WIDTH_NUMBERS = 2,
    QUARTER_WIDTH_NUMBERS = 3,
    WORD_INITIAL_SWASHES_ON = 0,
    WORD_INITIAL_SWASHES_OFF = 1,
    WORD_FINAL_SWASHES_ON = 2,
    WORD_FINAL_SWASHES_OFF = 3,
    LINE_INITIAL_SWASHES_ON = 4,
    LINE_INITIAL_SWASHES_OFF = 5,
    LINE_FINAL_SWASHES_ON = 6,
    LINE_FINAL_SWASHES_OFF = 7,
    NON_FINAL_SWASHES_ON = 8,
    NON_FINAL_SWASHES_OFF = 9,
    SHOW_DIACRITICS = 0,
    HIDE_DIACRITICS = 1,
    DECOMPOSE_DIACRITICS = 2,
    NORMAL_POSITION = 0,
    SUPERIORS = 1,
    INFERIORS = 2,
    ORDINALS = 3,
    SCIENTIFIC_INFERIORS = 4,
    NO_FRACTIONS = 0,
    VERTICAL_FRACTIONS = 1,
    DIAGONAL_FRACTIONS = 2,
    PREVENT_OVERLAP_ON = 0,
    PREVENT_OVERLAP_OFF = 1,
    HYPHENS_TO_EM_DASH_ON = 0,
    HYPHENS_TO_EM_DASH_OFF = 1,
    HYPHEN_TO_EN_DASH_ON = 2,
    HYPHEN_TO_EN_DASH_OFF = 3,
    SLASHED_ZERO_ON = 4,
    SLASHED_ZERO_OFF = 5,
    FORM_INTERROBANG_ON = 6,
    FORM_INTERROBANG_OFF = 7,
    SMART_QUOTES_ON = 8,
    SMART_QUOTES_OFF = 9,
    PERIODS_TO_ELLIPSIS_ON = 10,
    PERIODS_TO_ELLIPSIS_OFF = 11,
    HYPHEN_TO_MINUS_ON = 0,
    HYPHEN_TO_MINUS_OFF = 1,
    ASTERISK_TO_MULTIPLY_ON = 2,
    ASTERISK_TO_MULTIPLY_OFF = 3,
    SLASH_TO_DIVIDE_ON = 4,
    SLASH_TO_DIVIDE_OFF = 5,
    INEQUALITY_LIGATURES_ON = 6,
    INEQUALITY_LIGATURES_OFF = 7,
    EXPONENTS_ON = 8,
    EXPONENTS_OFF = 9,
    MATHEMATICAL_GREEK_ON = 10,
    MATHEMATICAL_GREEK_OFF = 11,
    NO_ORNAMENTS = 0,
    DINGBATS = 1,
    PI_CHARACTERS = 2,
    FLEURONS = 3,
    DECORATIVE_BORDERS = 4,
    INTERNATIONAL_SYMBOLS = 5,
    MATH_SYMBOLS = 6,
    NO_ALTERNATES = 0,
    DESIGN_LEVEL1 = 0,
    DESIGN_LEVEL2 = 1,
    DESIGN_LEVEL3 = 2,
    DESIGN_LEVEL4 = 3,
    DESIGN_LEVEL5 = 4,
    NO_STYLE_OPTIONS = 0,
    DISPLAY_TEXT = 1,
    ENGRAVED_TEXT = 2,
    ILLUMINATED_CAPS = 3,
    TITLING_CAPS = 4,
    TALL_CAPS = 5,
    TRADITIONAL_CHARACTERS = 0,
    SIMPLIFIED_CHARACTERS = 1,
    JIS1978_CHARACTERS = 2,
    JIS1983_CHARACTERS = 3,
    JIS1990_CHARACTERS = 4,
    TRADITIONAL_ALT_ONE = 5,
    TRADITIONAL_ALT_TWO = 6,
    TRADITIONAL_ALT_THREE = 7,
    TRADITIONAL_ALT_FOUR = 8,
    TRADITIONAL_ALT_FIVE = 9,
    EXPERT_CHARACTERS = 10,
    JIS2004_CHARACTERS = 11,
    HOJO_CHARACTERS = 12,
    NLCCHARACTERS = 13,
    TRADITIONAL_NAMES_CHARACTERS = 14,
    LOWER_CASE_NUMBERS = 0,
    UPPER_CASE_NUMBERS = 1,
    PROPORTIONAL_TEXT = 0,
    MONOSPACED_TEXT = 1,
    HALF_WIDTH_TEXT = 2,
    THIRD_WIDTH_TEXT = 3,
    QUARTER_WIDTH_TEXT = 4,
    ALT_PROPORTIONAL_TEXT = 5,
    ALT_HALF_WIDTH_TEXT = 6,
    NO_TRANSLITERATION = 0,
    HANJA_TO_HANGUL = 1,
    HIRAGANA_TO_KATAKANA = 2,
    KATAKANA_TO_HIRAGANA = 3,
    KANA_TO_ROMANIZATION = 4,
    ROMANIZATION_TO_HIRAGANA = 5,
    ROMANIZATION_TO_KATAKANA = 6,
    HANJA_TO_HANGUL_ALT_ONE = 7,
    HANJA_TO_HANGUL_ALT_TWO = 8,
    HANJA_TO_HANGUL_ALT_THREE = 9,
    NO_ANNOTATION = 0,
    BOX_ANNOTATION = 1,
    ROUNDED_BOX_ANNOTATION = 2,
    CIRCLE_ANNOTATION = 3,
    INVERTED_CIRCLE_ANNOTATION = 4,
    PARENTHESIS_ANNOTATION = 5,
    PERIOD_ANNOTATION = 6,
    ROMAN_NUMERAL_ANNOTATION = 7,
    DIAMOND_ANNOTATION = 8,
    INVERTED_BOX_ANNOTATION = 9,
    INVERTED_ROUNDED_BOX_ANNOTATION = 10,
    FULL_WIDTH_KANA = 0,
    PROPORTIONAL_KANA = 1,
    FULL_WIDTH_IDEOGRAPHS = 0,
    PROPORTIONAL_IDEOGRAPHS = 1,
    HALF_WIDTH_IDEOGRAPHS = 2,
    CANONICAL_COMPOSITION_ON = 0,
    CANONICAL_COMPOSITION_OFF = 1,
    COMPATIBILITY_COMPOSITION_ON = 2,
    COMPATIBILITY_COMPOSITION_OFF = 3,
    TRANSCODING_COMPOSITION_ON = 4,
    TRANSCODING_COMPOSITION_OFF = 5,
    NO_RUBY_KANA = 0,
    RUBY_KANA = 1,
    RUBY_KANA_ON = 2,
    RUBY_KANA_OFF = 3,
    NO_CJK_SYMBOL_ALTERNATIVES = 0,
    CJK_SYMBOL_ALT_ONE = 1,
    CJK_SYMBOL_ALT_TWO = 2,
    CJK_SYMBOL_ALT_THREE = 3,
    CJK_SYMBOL_ALT_FOUR = 4,
    CJK_SYMBOL_ALT_FIVE = 5,
    NO_IDEOGRAPHIC_ALTERNATIVES = 0,
    IDEOGRAPHIC_ALT_ONE = 1,
    IDEOGRAPHIC_ALT_TWO = 2,
    IDEOGRAPHIC_ALT_THREE = 3,
    IDEOGRAPHIC_ALT_FOUR = 4,
    IDEOGRAPHIC_ALT_FIVE = 5,
    CJK_VERTICAL_ROMAN_CENTERED = 0,
    CJK_VERTICAL_ROMAN_HBASELINE = 1,
    NO_CJK_ITALIC_ROMAN = 0,
    CJK_ITALIC_ROMAN = 1,
    CJK_ITALIC_ROMAN_ON = 2,
    CJK_ITALIC_ROMAN_OFF = 3,
    CASE_SENSITIVE_LAYOUT_ON = 0,
    CASE_SENSITIVE_LAYOUT_OFF = 1,
    CASE_SENSITIVE_SPACING_ON = 2,
    CASE_SENSITIVE_SPACING_OFF = 3,
    ALTERNATE_HORIZ_KANA_ON = 0,
    ALTERNATE_HORIZ_KANA_OFF = 1,
    ALTERNATE_VERT_KANA_ON = 2,
    ALTERNATE_VERT_KANA_OFF = 3,
    NO_STYLISTIC_ALTERNATES = 0,
    STYLISTIC_ALT_ONE_ON = 2,
    STYLISTIC_ALT_ONE_OFF = 3,
    STYLISTIC_ALT_TWO_ON = 4,
    STYLISTIC_ALT_TWO_OFF = 5,
    STYLISTIC_ALT_THREE_ON = 6,
    STYLISTIC_ALT_THREE_OFF = 7,
    STYLISTIC_ALT_FOUR_ON = 8,
    STYLISTIC_ALT_FOUR_OFF = 9,
    STYLISTIC_ALT_FIVE_ON = 10,
    STYLISTIC_ALT_FIVE_OFF = 11,
    STYLISTIC_ALT_SIX_ON = 12,
    STYLISTIC_ALT_SIX_OFF = 13,
    STYLISTIC_ALT_SEVEN_ON = 14,
    STYLISTIC_ALT_SEVEN_OFF = 15,
    STYLISTIC_ALT_EIGHT_ON = 16,
    STYLISTIC_ALT_EIGHT_OFF = 17,
    STYLISTIC_ALT_NINE_ON = 18,
    STYLISTIC_ALT_NINE_OFF = 19,
    STYLISTIC_ALT_TEN_ON = 20,
    STYLISTIC_ALT_TEN_OFF = 21,
    STYLISTIC_ALT_ELEVEN_ON = 22,
    STYLISTIC_ALT_ELEVEN_OFF = 23,
    STYLISTIC_ALT_TWELVE_ON = 24,
    STYLISTIC_ALT_TWELVE_OFF = 25,
    STYLISTIC_ALT_THIRTEEN_ON = 26,
    STYLISTIC_ALT_THIRTEEN_OFF = 27,
    STYLISTIC_ALT_FOURTEEN_ON = 28,
    STYLISTIC_ALT_FOURTEEN_OFF = 29,
    STYLISTIC_ALT_FIFTEEN_ON = 30,
    STYLISTIC_ALT_FIFTEEN_OFF = 31,
    STYLISTIC_ALT_SIXTEEN_ON = 32,
    STYLISTIC_ALT_SIXTEEN_OFF = 33,
    STYLISTIC_ALT_SEVENTEEN_ON = 34,
    STYLISTIC_ALT_SEVENTEEN_OFF = 35,
    STYLISTIC_ALT_EIGHTEEN_ON = 36,
    STYLISTIC_ALT_EIGHTEEN_OFF = 37,
    STYLISTIC_ALT_NINETEEN_ON = 38,
    STYLISTIC_ALT_NINETEEN_OFF = 39,
    STYLISTIC_ALT_TWENTY_ON = 40,
    STYLISTIC_ALT_TWENTY_OFF = 41,
    CONTEXTUAL_ALTERNATES_ON = 0,
    CONTEXTUAL_ALTERNATES_OFF = 1,
    SWASH_ALTERNATES_ON = 2,
    SWASH_ALTERNATES_OFF = 3,
    CONTEXTUAL_SWASH_ALTERNATES_ON = 4,
    CONTEXTUAL_SWASH_ALTERNATES_OFF = 5,
    DEFAULT_LOWER_CASE = 0,
    LOWER_CASE_SMALL_CAPS = 1,
    LOWER_CASE_PETITE_CAPS = 2,
    DEFAULT_UPPER_CASE = 0,
    UPPER_CASE_SMALL_CAPS = 1,
    UPPER_CASE_PETITE_CAPS = 2,
    HALF_WIDTH_CJK_ROMAN = 0,
    PROPORTIONAL_CJK_ROMAN = 1,
    DEFAULT_CJK_ROMAN = 2,
    FULL_WIDTH_CJK_ROMAN = 3,
}
export enum aat_layout_feature_type_t {
    INVALID = 65535,
    ALL_TYPOGRAPHIC = 0,
    LIGATURES = 1,
    CURISVE_CONNECTION = 2,
    LETTER_CASE = 3,
    VERTICAL_SUBSTITUTION = 4,
    LINGUISTIC_REARRANGEMENT = 5,
    NUMBER_SPACING = 6,
    SMART_SWASH_TYPE = 8,
    DIACRITICS_TYPE = 9,
    VERTICAL_POSITION = 10,
    FRACTIONS = 11,
    OVERLAPPING_CHARACTERS_TYPE = 13,
    TYPOGRAPHIC_EXTRAS = 14,
    MATHEMATICAL_EXTRAS = 15,
    ORNAMENT_SETS_TYPE = 16,
    CHARACTER_ALTERNATIVES = 17,
    DESIGN_COMPLEXITY_TYPE = 18,
    STYLE_OPTIONS = 19,
    CHARACTER_SHAPE = 20,
    NUMBER_CASE = 21,
    TEXT_SPACING = 22,
    TRANSLITERATION = 23,
    ANNOTATION_TYPE = 24,
    KANA_SPACING_TYPE = 25,
    IDEOGRAPHIC_SPACING_TYPE = 26,
    UNICODE_DECOMPOSITION_TYPE = 27,
    RUBY_KANA = 28,
    CJK_SYMBOL_ALTERNATIVES_TYPE = 29,
    IDEOGRAPHIC_ALTERNATIVES_TYPE = 30,
    CJK_VERTICAL_ROMAN_PLACEMENT_TYPE = 31,
    ITALIC_CJK_ROMAN = 32,
    CASE_SENSITIVE_LAYOUT = 33,
    ALTERNATE_KANA = 34,
    STYLISTIC_ALTERNATIVES = 35,
    CONTEXTUAL_ALTERNATIVES = 36,
    LOWER_CASE = 37,
    UPPER_CASE = 38,
    LANGUAGE_TAG_TYPE = 39,
    CJK_ROMAN_SPACING_TYPE = 103,
}
export enum buffer_cluster_level_t {
    MONOTONE_GRAPHEMES = 0,
    MONOTONE_CHARACTERS = 1,
    CHARACTERS = 2,
    DEFAULT = 0,
}
export enum buffer_content_type_t {
    INVALID = 0,
    UNICODE = 1,
    GLYPHS = 2,
}
export enum buffer_serialize_format_t {
    TEXT = 1413830740,
    JSON = 1246973774,
    INVALID = 0,
}
export enum direction_t {
    INVALID = 0,
    LTR = 4,
    RTL = 5,
    TTB = 6,
    BTT = 7,
}
export enum memory_mode_t {
    DUPLICATE = 0,
    READONLY = 1,
    WRITABLE = 2,
    READONLY_MAY_MAKE_WRITABLE = 3,
}
export enum ot_layout_baseline_tag_t {
    ROMAN = 1919905134,
    HANGING = 1751215719,
    IDEO_FACE_BOTTOM_OR_LEFT = 1768121954,
    IDEO_FACE_TOP_OR_RIGHT = 1768121972,
    IDEO_EMBOX_BOTTOM_OR_LEFT = 1768187247,
    IDEO_EMBOX_TOP_OR_RIGHT = 1768191088,
    MATH = 1835103336,
}
export enum ot_layout_glyph_class_t {
    UNCLASSIFIED = 0,
    BASE_GLYPH = 1,
    LIGATURE = 2,
    MARK = 3,
    COMPONENT = 4,
}
export enum ot_math_constant_t {
    SCRIPT_PERCENT_SCALE_DOWN = 0,
    SCRIPT_SCRIPT_PERCENT_SCALE_DOWN = 1,
    DELIMITED_SUB_FORMULA_MIN_HEIGHT = 2,
    DISPLAY_OPERATOR_MIN_HEIGHT = 3,
    MATH_LEADING = 4,
    AXIS_HEIGHT = 5,
    ACCENT_BASE_HEIGHT = 6,
    FLATTENED_ACCENT_BASE_HEIGHT = 7,
    SUBSCRIPT_SHIFT_DOWN = 8,
    SUBSCRIPT_TOP_MAX = 9,
    SUBSCRIPT_BASELINE_DROP_MIN = 10,
    SUPERSCRIPT_SHIFT_UP = 11,
    SUPERSCRIPT_SHIFT_UP_CRAMPED = 12,
    SUPERSCRIPT_BOTTOM_MIN = 13,
    SUPERSCRIPT_BASELINE_DROP_MAX = 14,
    SUB_SUPERSCRIPT_GAP_MIN = 15,
    SUPERSCRIPT_BOTTOM_MAX_WITH_SUBSCRIPT = 16,
    SPACE_AFTER_SCRIPT = 17,
    UPPER_LIMIT_GAP_MIN = 18,
    UPPER_LIMIT_BASELINE_RISE_MIN = 19,
    LOWER_LIMIT_GAP_MIN = 20,
    LOWER_LIMIT_BASELINE_DROP_MIN = 21,
    STACK_TOP_SHIFT_UP = 22,
    STACK_TOP_DISPLAY_STYLE_SHIFT_UP = 23,
    STACK_BOTTOM_SHIFT_DOWN = 24,
    STACK_BOTTOM_DISPLAY_STYLE_SHIFT_DOWN = 25,
    STACK_GAP_MIN = 26,
    STACK_DISPLAY_STYLE_GAP_MIN = 27,
    STRETCH_STACK_TOP_SHIFT_UP = 28,
    STRETCH_STACK_BOTTOM_SHIFT_DOWN = 29,
    STRETCH_STACK_GAP_ABOVE_MIN = 30,
    STRETCH_STACK_GAP_BELOW_MIN = 31,
    FRACTION_NUMERATOR_SHIFT_UP = 32,
    FRACTION_NUMERATOR_DISPLAY_STYLE_SHIFT_UP = 33,
    FRACTION_DENOMINATOR_SHIFT_DOWN = 34,
    FRACTION_DENOMINATOR_DISPLAY_STYLE_SHIFT_DOWN = 35,
    FRACTION_NUMERATOR_GAP_MIN = 36,
    FRACTION_NUM_DISPLAY_STYLE_GAP_MIN = 37,
    FRACTION_RULE_THICKNESS = 38,
    FRACTION_DENOMINATOR_GAP_MIN = 39,
    FRACTION_DENOM_DISPLAY_STYLE_GAP_MIN = 40,
    SKEWED_FRACTION_HORIZONTAL_GAP = 41,
    SKEWED_FRACTION_VERTICAL_GAP = 42,
    OVERBAR_VERTICAL_GAP = 43,
    OVERBAR_RULE_THICKNESS = 44,
    OVERBAR_EXTRA_ASCENDER = 45,
    UNDERBAR_VERTICAL_GAP = 46,
    UNDERBAR_RULE_THICKNESS = 47,
    UNDERBAR_EXTRA_DESCENDER = 48,
    RADICAL_VERTICAL_GAP = 49,
    RADICAL_DISPLAY_STYLE_VERTICAL_GAP = 50,
    RADICAL_RULE_THICKNESS = 51,
    RADICAL_EXTRA_ASCENDER = 52,
    RADICAL_KERN_BEFORE_DEGREE = 53,
    RADICAL_KERN_AFTER_DEGREE = 54,
    RADICAL_DEGREE_BOTTOM_RAISE_PERCENT = 55,
}
export enum ot_math_kern_t {
    TOP_RIGHT = 0,
    TOP_LEFT = 1,
    BOTTOM_RIGHT = 2,
    BOTTOM_LEFT = 3,
}
export enum ot_meta_tag_t {
    DESIGN_LANGUAGES = 1684827751,
    SUPPORTED_LANGUAGES = 1936485991,
}
export enum ot_metrics_tag_t {
    HORIZONTAL_ASCENDER = 1751216995,
    HORIZONTAL_DESCENDER = 1751413603,
    HORIZONTAL_LINE_GAP = 1751934832,
    HORIZONTAL_CLIPPING_ASCENT = 1751346273,
    HORIZONTAL_CLIPPING_DESCENT = 1751346276,
    VERTICAL_ASCENDER = 1986098019,
    VERTICAL_DESCENDER = 1986294627,
    VERTICAL_LINE_GAP = 1986815856,
    HORIZONTAL_CARET_RISE = 1751347827,
    HORIZONTAL_CARET_RUN = 1751347822,
    HORIZONTAL_CARET_OFFSET = 1751347046,
    VERTICAL_CARET_RISE = 1986228851,
    VERTICAL_CARET_RUN = 1986228846,
    VERTICAL_CARET_OFFSET = 1986228070,
    X_HEIGHT = 2020108148,
    CAP_HEIGHT = 1668311156,
    SUBSCRIPT_EM_X_SIZE = 1935833203,
    SUBSCRIPT_EM_Y_SIZE = 1935833459,
    SUBSCRIPT_EM_X_OFFSET = 1935833199,
    SUBSCRIPT_EM_Y_OFFSET = 1935833455,
    SUPERSCRIPT_EM_X_SIZE = 1936750707,
    SUPERSCRIPT_EM_Y_SIZE = 1936750963,
    SUPERSCRIPT_EM_X_OFFSET = 1936750703,
    SUPERSCRIPT_EM_Y_OFFSET = 1936750959,
    STRIKEOUT_SIZE = 1937011315,
    STRIKEOUT_OFFSET = 1937011311,
    UNDERLINE_SIZE = 1970168947,
    UNDERLINE_OFFSET = 1970168943,
}
export enum script_t {
    COMMON = 1517910393,
    INHERITED = 1516858984,
    UNKNOWN = 1517976186,
    ARABIC = 1098015074,
    ARMENIAN = 1098018158,
    BENGALI = 1113943655,
    CYRILLIC = 1132032620,
    DEVANAGARI = 1147500129,
    GEORGIAN = 1197830002,
    GREEK = 1198679403,
    GUJARATI = 1198877298,
    GURMUKHI = 1198879349,
    HANGUL = 1214344807,
    HAN = 1214344809,
    HEBREW = 1214603890,
    HIRAGANA = 1214870113,
    KANNADA = 1265525857,
    KATAKANA = 1264676449,
    LAO = 1281453935,
    LATIN = 1281455214,
    MALAYALAM = 1298954605,
    ORIYA = 1332902241,
    TAMIL = 1415671148,
    TELUGU = 1415933045,
    THAI = 1416126825,
    TIBETAN = 1416192628,
    BOPOMOFO = 1114599535,
    BRAILLE = 1114792297,
    CANADIAN_SYLLABICS = 1130458739,
    CHEROKEE = 1130915186,
    ETHIOPIC = 1165256809,
    KHMER = 1265134962,
    MONGOLIAN = 1299148391,
    MYANMAR = 1299803506,
    OGHAM = 1332175213,
    RUNIC = 1383427698,
    SINHALA = 1399418472,
    SYRIAC = 1400468067,
    THAANA = 1416126817,
    YI = 1500080489,
    DESERET = 1148416628,
    GOTHIC = 1198486632,
    OLD_ITALIC = 1232363884,
    BUHID = 1114990692,
    HANUNOO = 1214344815,
    TAGALOG = 1416064103,
    TAGBANWA = 1415669602,
    CYPRIOT = 1131442804,
    LIMBU = 1281977698,
    LINEAR_B = 1281977954,
    OSMANYA = 1332964705,
    SHAVIAN = 1399349623,
    TAI_LE = 1415670885,
    UGARITIC = 1432838514,
    BUGINESE = 1114990441,
    COPTIC = 1131376756,
    GLAGOLITIC = 1198285159,
    KHAROSHTHI = 1265131890,
    NEW_TAI_LUE = 1415670901,
    OLD_PERSIAN = 1483761007,
    SYLOTI_NAGRI = 1400466543,
    TIFINAGH = 1415999079,
    BALINESE = 1113681001,
    CUNEIFORM = 1483961720,
    NKO = 1315663727,
    PHAGS_PA = 1349017959,
    PHOENICIAN = 1349021304,
    CARIAN = 1130459753,
    CHAM = 1130914157,
    KAYAH_LI = 1264675945,
    LEPCHA = 1281716323,
    LYCIAN = 1283023721,
    LYDIAN = 1283023977,
    OL_CHIKI = 1332503403,
    REJANG = 1382706791,
    SAURASHTRA = 1398895986,
    SUNDANESE = 1400204900,
    VAI = 1449224553,
    AVESTAN = 1098281844,
    BAMUM = 1113681269,
    EGYPTIAN_HIEROGLYPHS = 1164409200,
    IMPERIAL_ARAMAIC = 1098018153,
    INSCRIPTIONAL_PAHLAVI = 1349020777,
    INSCRIPTIONAL_PARTHIAN = 1349678185,
    JAVANESE = 1247901281,
    KAITHI = 1265920105,
    LISU = 1281979253,
    MEETEI_MAYEK = 1299473769,
    OLD_SOUTH_ARABIAN = 1398895202,
    OLD_TURKIC = 1332898664,
    SAMARITAN = 1398893938,
    TAI_THAM = 1281453665,
    TAI_VIET = 1415673460,
    BATAK = 1113683051,
    BRAHMI = 1114792296,
    MANDAIC = 1298230884,
    CHAKMA = 1130457965,
    MEROITIC_CURSIVE = 1298494051,
    MEROITIC_HIEROGLYPHS = 1298494063,
    MIAO = 1349284452,
    SHARADA = 1399353956,
    SORA_SOMPENG = 1399812705,
    TAKRI = 1415670642,
    BASSA_VAH = 1113682803,
    CAUCASIAN_ALBANIAN = 1097295970,
    DUPLOYAN = 1148547180,
    ELBASAN = 1164730977,
    GRANTHA = 1198678382,
    KHOJKI = 1265135466,
    KHUDAWADI = 1399418468,
    LINEAR_A = 1281977953,
    MAHAJANI = 1298229354,
    MANICHAEAN = 1298230889,
    MENDE_KIKAKUI = 1298493028,
    MODI = 1299145833,
    MRO = 1299345263,
    NABATAEAN = 1315070324,
    OLD_NORTH_ARABIAN = 1315009122,
    OLD_PERMIC = 1348825709,
    PAHAWH_HMONG = 1215131239,
    PALMYRENE = 1348562029,
    PAU_CIN_HAU = 1348564323,
    PSALTER_PAHLAVI = 1349020784,
    SIDDHAM = 1399415908,
    TIRHUTA = 1416196712,
    WARANG_CITI = 1466004065,
    AHOM = 1097363309,
    ANATOLIAN_HIEROGLYPHS = 1215067511,
    HATRAN = 1214346354,
    MULTANI = 1299541108,
    OLD_HUNGARIAN = 1215655527,
    SIGNWRITING = 1399287415,
    ADLAM = 1097100397,
    BHAIKSUKI = 1114139507,
    MARCHEN = 1298231907,
    OSAGE = 1332963173,
    TANGUT = 1415671399,
    NEWA = 1315272545,
    MASARAM_GONDI = 1198485101,
    NUSHU = 1316186229,
    SOYOMBO = 1399814511,
    ZANABAZAR_SQUARE = 1516334690,
    DOGRA = 1148151666,
    GUNJALA_GONDI = 1198485095,
    HANIFI_ROHINGYA = 1383032935,
    MAKASAR = 1298230113,
    MEDEFAIDRIN = 1298490470,
    OLD_SOGDIAN = 1399809903,
    SOGDIAN = 1399809892,
    ELYMAIC = 1164736877,
    NANDINAGARI = 1315008100,
    NYIAKENG_PUACHUE_HMONG = 1215131248,
    WANCHO = 1466132591,
    INVALID = 0,
}
export enum unicode_combining_class_t {
    NOT_REORDERED = 0,
    OVERLAY = 1,
    NUKTA = 7,
    KANA_VOICING = 8,
    VIRAMA = 9,
    CCC10 = 10,
    CCC11 = 11,
    CCC12 = 12,
    CCC13 = 13,
    CCC14 = 14,
    CCC15 = 15,
    CCC16 = 16,
    CCC17 = 17,
    CCC18 = 18,
    CCC19 = 19,
    CCC20 = 20,
    CCC21 = 21,
    CCC22 = 22,
    CCC23 = 23,
    CCC24 = 24,
    CCC25 = 25,
    CCC26 = 26,
    CCC27 = 27,
    CCC28 = 28,
    CCC29 = 29,
    CCC30 = 30,
    CCC31 = 31,
    CCC32 = 32,
    CCC33 = 33,
    CCC34 = 34,
    CCC35 = 35,
    CCC36 = 36,
    CCC84 = 84,
    CCC91 = 91,
    CCC103 = 103,
    CCC107 = 107,
    CCC118 = 118,
    CCC122 = 122,
    CCC129 = 129,
    CCC130 = 130,
    CCC133 = 132,
    ATTACHED_BELOW_LEFT = 200,
    ATTACHED_BELOW = 202,
    ATTACHED_ABOVE = 214,
    ATTACHED_ABOVE_RIGHT = 216,
    BELOW_LEFT = 218,
    BELOW = 220,
    BELOW_RIGHT = 222,
    LEFT = 224,
    RIGHT = 226,
    ABOVE_LEFT = 228,
    ABOVE = 230,
    ABOVE_RIGHT = 232,
    DOUBLE_BELOW = 233,
    DOUBLE_ABOVE = 234,
    IOTA_SUBSCRIPT = 240,
    INVALID = 255,
}
export enum unicode_general_category_t {
    CONTROL = 0,
    FORMAT = 1,
    UNASSIGNED = 2,
    PRIVATE_USE = 3,
    SURROGATE = 4,
    LOWERCASE_LETTER = 5,
    MODIFIER_LETTER = 6,
    OTHER_LETTER = 7,
    TITLECASE_LETTER = 8,
    UPPERCASE_LETTER = 9,
    SPACING_MARK = 10,
    ENCLOSING_MARK = 11,
    NON_SPACING_MARK = 12,
    DECIMAL_NUMBER = 13,
    LETTER_NUMBER = 14,
    OTHER_NUMBER = 15,
    CONNECT_PUNCTUATION = 16,
    DASH_PUNCTUATION = 17,
    CLOSE_PUNCTUATION = 18,
    FINAL_PUNCTUATION = 19,
    INITIAL_PUNCTUATION = 20,
    OTHER_PUNCTUATION = 21,
    OPEN_PUNCTUATION = 22,
    CURRENCY_SYMBOL = 23,
    MODIFIER_SYMBOL = 24,
    MATH_SYMBOL = 25,
    OTHER_SYMBOL = 26,
    LINE_SEPARATOR = 27,
    PARAGRAPH_SEPARATOR = 28,
    SPACE_SEPARATOR = 29,
}
export type bool_t = number;
export type codepoint_t = number;
export type color_t = number;
export type font_get_font_h_extents_func_t = font_get_font_extents_func_t;
export type font_get_font_v_extents_func_t = font_get_font_extents_func_t;
export type font_get_glyph_h_advance_func_t = font_get_glyph_advance_func_t;
export type font_get_glyph_h_advances_func_t = font_get_glyph_advances_func_t;
export type font_get_glyph_h_kerning_func_t = font_get_glyph_kerning_func_t;
export type font_get_glyph_h_origin_func_t = font_get_glyph_origin_func_t;
export type font_get_glyph_v_advance_func_t = font_get_glyph_advance_func_t;
export type font_get_glyph_v_advances_func_t = font_get_glyph_advances_func_t;
export type font_get_glyph_v_kerning_func_t = font_get_glyph_kerning_func_t;
export type font_get_glyph_v_origin_func_t = font_get_glyph_origin_func_t;
export type mask_t = number;
export type ot_name_id_t = number;
export type position_t = number;
export type tag_t = number;
export enum buffer_diff_flags_t {
    EQUAL = 0,
    CONTENT_TYPE_MISMATCH = 1,
    LENGTH_MISMATCH = 2,
    NOTDEF_PRESENT = 4,
    DOTTED_CIRCLE_PRESENT = 8,
    CODEPOINT_MISMATCH = 16,
    CLUSTER_MISMATCH = 32,
    GLYPH_FLAGS_MISMATCH = 64,
    POSITION_MISMATCH = 128,
}
export enum buffer_flags_t {
    DEFAULT = 0,
    BOT = 1,
    EOT = 2,
    PRESERVE_DEFAULT_IGNORABLES = 4,
    REMOVE_DEFAULT_IGNORABLES = 8,
    DO_NOT_INSERT_DOTTED_CIRCLE = 16,
}
export enum buffer_serialize_flags_t {
    DEFAULT = 0,
    NO_CLUSTERS = 1,
    NO_POSITIONS = 2,
    NO_GLYPH_NAMES = 4,
    GLYPH_EXTENTS = 8,
    GLYPH_FLAGS = 16,
    NO_ADVANCES = 32,
}
export enum glyph_flags_t {
    UNSAFE_TO_BREAK = 1,
    DEFINED = 1,
}
export enum ot_color_palette_flags_t {
    DEFAULT = 0,
    USABLE_WITH_LIGHT_BACKGROUND = 1,
    USABLE_WITH_DARK_BACKGROUND = 2,
}
export enum ot_math_glyph_part_flags_t {
    EXTENDER = 1,
}
export enum ot_var_axis_flags_t {
    HIDDEN = 1,
}
export class blob_t  {
    constructor(config?: properties);
}
export class buffer_t  {
    constructor(config?: properties);
}
export class face_t  {
    constructor(config?: properties);
}
export class feature_t  {
    constructor(config?: properties);
    tag: tag_t;
    value: number;
    start: number;
    end: number;
    _string(): [string[],number];
}
export class font_extents_t  {
    constructor(config?: properties);
    ascender: position_t;
    descender: position_t;
    line_gap: position_t;
    readonly reserved9: position_t;
    readonly reserved8: position_t;
    readonly reserved7: position_t;
    readonly reserved6: position_t;
    readonly reserved5: position_t;
    readonly reserved4: position_t;
    readonly reserved3: position_t;
    readonly reserved2: position_t;
    readonly reserved1: position_t;
}
export class font_funcs_t  {
    constructor(config?: properties);
}
export class font_t  {
    constructor(config?: properties);
}
export class glyph_extents_t  {
    constructor(config?: properties);
    x_bearing: position_t;
    y_bearing: position_t;
    width: position_t;
    height: position_t;
}
export class glyph_info_t  {
    constructor(config?: properties);
    codepoint: codepoint_t;
    readonly mask: mask_t;
    cluster: number;
    readonly var1: var_int_t;
    readonly var2: var_int_t;
}
export class glyph_position_t  {
    constructor(config?: properties);
    x_advance: position_t;
    y_advance: position_t;
    x_offset: position_t;
    y_offset: position_t;
    readonly "var": var_int_t;
}
export class language_t  {
    constructor(config?: properties);
    _string(): string;
}
export class map_t  {
    constructor(config?: properties);
}
export class ot_color_layer_t  {
    constructor(config?: properties);
    glyph: codepoint_t;
    color_index: number;
}
export class ot_math_glyph_part_t  {
    constructor(config?: properties);
    glyph: codepoint_t;
    start_connector_length: position_t;
    end_connector_length: position_t;
    full_advance: position_t;
    flags: ot_math_glyph_part_flags_t;
}
export class ot_math_glyph_variant_t  {
    constructor(config?: properties);
    glyph: codepoint_t;
    advance: position_t;
}
export class ot_name_entry_t  {
    constructor(config?: properties);
    name_id: ot_name_id_t;
    readonly "var": var_int_t;
    language: language_t;
}
export class ot_var_axis_info_t  {
    constructor(config?: properties);
    axis_index: number;
    tag: tag_t;
    name_id: ot_name_id_t;
    flags: ot_var_axis_flags_t;
    min_value: number;
    default_value: number;
    max_value: number;
    readonly reserved: number;
}
export class ot_var_axis_t  {
    constructor(config?: properties);
    tag: tag_t;
    name_id: ot_name_id_t;
    min_value: number;
    default_value: number;
    max_value: number;
}
export class segment_properties_t  {
    constructor(config?: properties);
    direction: direction_t;
    script: script_t;
    language: language_t;
    readonly reserved1: object;
    readonly reserved2: object;
}
export class set_t  {
    constructor(config?: properties);
}
export class shape_plan_t  {
    constructor(config?: properties);
}
export class unicode_funcs_t  {
    constructor(config?: properties);
}
export class user_data_key_t  {
    constructor(config?: properties);
    readonly unused: number;
}
export class variation_t  {
    constructor(config?: properties);
    tag: tag_t;
    value: number;
    _string(buf: string, size: number): void;
}
export class var_int_t  {
    constructor(config?: properties);
    u32: number;
    i32: number;
    u16: number[];
    i16: number[];
    u8: number[];
    i8: number[];
}