
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gst from "gst";
import * as GstBase from "gstbase";
import * as GstTag from "gsttag";
/**
 * gsttag.d.ts
 */
type properties = { [key: string]: any };
export const TAG_CAPTURING_CONTRAST: string;
export const TAG_CAPTURING_DIGITAL_ZOOM_RATIO: string;
export const TAG_CAPTURING_EXPOSURE_COMPENSATION: string;
export const TAG_CAPTURING_EXPOSURE_MODE: string;
export const TAG_CAPTURING_EXPOSURE_PROGRAM: string;
export const TAG_CAPTURING_FLASH_FIRED: string;
export const TAG_CAPTURING_FLASH_MODE: string;
export const TAG_CAPTURING_FOCAL_LENGTH: string;
export const TAG_CAPTURING_FOCAL_LENGTH_35_MM: string;
export const TAG_CAPTURING_FOCAL_RATIO: string;
export const TAG_CAPTURING_GAIN_ADJUSTMENT: string;
export const TAG_CAPTURING_ISO_SPEED: string;
export const TAG_CAPTURING_METERING_MODE: string;
export const TAG_CAPTURING_SATURATION: string;
export const TAG_CAPTURING_SCENE_CAPTURE_TYPE: string;
export const TAG_CAPTURING_SHARPNESS: string;
export const TAG_CAPTURING_SHUTTER_SPEED: string;
export const TAG_CAPTURING_SOURCE: string;
export const TAG_CAPTURING_WHITE_BALANCE: string;
export const TAG_CDDA_CDDB_DISCID: string;
export const TAG_CDDA_CDDB_DISCID_FULL: string;
export const TAG_CDDA_MUSICBRAINZ_DISCID: string;
export const TAG_CDDA_MUSICBRAINZ_DISCID_FULL: string;
export const TAG_CMML_CLIP: string;
export const TAG_CMML_HEAD: string;
export const TAG_CMML_STREAM: string;
export const TAG_ID3V2_HEADER_SIZE: number;
export const TAG_IMAGE_HORIZONTAL_PPI: string;
export const TAG_IMAGE_VERTICAL_PPI: string;
export const TAG_MUSICAL_KEY: string;
export const TAG_MUSICBRAINZ_ALBUMARTISTID: string;
export const TAG_MUSICBRAINZ_ALBUMID: string;
export const TAG_MUSICBRAINZ_ARTISTID: string;
export const TAG_MUSICBRAINZ_TRACKID: string;
export const TAG_MUSICBRAINZ_TRMID: string;
/**
 * Check if a given string contains a known ISO 639 language code.
 * This is useful in situations where it's not clear whether a given
 * string is a language code (which should be put into a #GST_TAG_LANGUAG
 * E_CODE
 * tag) or a free-form language name descriptor (which should be put into
 *  a
 * #GST_TAG_LANGUAGE_NAME tag instead).
 */
export function tag_check_language_code(lang_code: string): boolean;
/**
 * Convenience function to read a string with unknown character encoding.
 *  If
 * the string is already in UTF-8 encoding, it will be returned right awa
 * y.
 * If not it tries to detect byte-order-mark for UTF-16/32 cases and use 
 * that.
 * Otherwise, the environment will be searched for a number of environmen
 * t
 * variables (whose names are specified in the NULL-terminated string arr
 * ay
 * @env_vars) containing a list of character encodings to try/use. If non
 * e
 * are specified, the current locale will be tried. If that also doesn't 
 * work,
 * WINDOWS-1252/ISO-8859-1 is assumed (which will almost always succeed).
 */
export function tag_freeform_string_to_utf8(data: number[], size: number, env_vars: string[]): string;
/**
 * Looks up the GStreamer tag for a ID3v2 tag.
 */
export function tag_from_id3_tag(id3_tag: string): string;
/**
 * Looks up the GStreamer tag for an ID3v2 user tag (e.g. description in
 * TXXX frame or owner in UFID frame).
 */
export function tag_from_id3_user_tag(type: string, id3_user_tag: string): string;
/**
 * Looks up the GStreamer tag for a vorbiscomment tag.
 */
export function tag_from_vorbis_tag(vorbis_tag: string): string;
/**
 * Determines size of an ID3v2 tag on buffer containing at least ID3v2 he
 * ader,
 * i.e. at least #GST_TAG_ID3V2_HEADER_SIZE (10) bytes;
 */
export function tag_get_id3v2_tag_size(buffer: Gst.Buffer): number;
/**
 * Returns two-letter ISO-639-1 language code given a three-letter ISO-63
 * 9-2
 * language code or two-letter ISO-639-1 language code (both are accepted
 *  for
 * convenience).
 * Language codes are case-sensitive and expected to be lower case.
 */
export function tag_get_language_code_iso_639_1(lang_code: string): string;
/**
 * Returns three-letter ISO-639-2 "bibliographic" language code given a
 * two-letter ISO-639-1 language code or a three-letter ISO-639-2 languag
 * e
 * code (both are accepted for convenience).
 * The "bibliographic" code is derived from the English name of the langu
 * age
 * (e.g. "ger" for German instead of "de" or "deu"). In most scenarios, t
 * he
 * "terminological" codes are prefered.
 * Language codes are case-sensitive and expected to be lower case.
 */
export function tag_get_language_code_iso_639_2B(lang_code: string): string;
/**
 * Returns three-letter ISO-639-2 "terminological" language code given a
 * two-letter ISO-639-1 language code or a three-letter ISO-639-2 languag
 * e
 * code (both are accepted for convenience).
 * The "terminological" code is derived from the local name of the langua
 * ge
 * (e.g. "deu" for German instead of "ger"). In most scenarios, the
 * "terminological" codes are prefered over the "bibliographic" ones.
 * Language codes are case-sensitive and expected to be lower case.
 */
export function tag_get_language_code_iso_639_2T(lang_code: string): string;
/**
 * Returns a list of known language codes (in form of two-letter ISO-639-
 * 1
 * codes). This is useful for UIs to build a list of available languages 
 * for
 * tagging purposes (e.g. to tag an audio track appropriately in a video 
 * or
 * audio editor).
 */
export function tag_get_language_codes(): string[];
/**
 * Returns the name of the language given an ISO-639 language code as
 * found in a GST_TAG_LANGUAGE_CODE tag. The name will be translated
 * according to the current locale (if the library was built against the
 * iso-codes package, otherwise the English name will be returned).
 * Language codes are case-sensitive and expected to be lower case.
 */
export function tag_get_language_name(language_code: string): string;
/**
 * Get the description of a license, which is a translated description
 * of the license's main features.
 */
export function tag_get_license_description(license_ref: string): string;
/**
 * Get the flags of a license, which describe most of the features of
 * a license in their most general form.
 */
export function tag_get_license_flags(license_ref: string): TagLicenseFlags;
/**
 * Get the jurisdiction code of a license. This is usually a two-letter
 * ISO 3166-1 alpha-2 code, but there is also the special case of Scotlan
 * d,
 * for which no code exists and which is thus represented as "scotland".
 * Known jurisdictions: ar, at, au, be, bg, br, ca, ch, cl, cn, co, de,
 * dk, es, fi, fr, hr, hu, il, in, it, jp, kr, mk, mt, mx, my, nl, pe, pl
 * ,
 * pt, scotland, se, si, tw, uk, us, za.
 */
export function tag_get_license_jurisdiction(license_ref: string): string;
/**
 * Get the nick name of a license, which is a short (untranslated) string
 * such as e.g. "CC BY-NC-ND 2.0 UK".
 */
export function tag_get_license_nick(license_ref: string): string;
/**
 * Get the title of a license, which is a short translated description
 * of the license's features (generally not very pretty though).
 */
export function tag_get_license_title(license_ref: string): string;
/**
 * Get the version of a license.
 */
export function tag_get_license_version(license_ref: string): string;
/**
 * Returns a list of known license references (in form of URIs). This is
 * useful for UIs to build a list of available licenses for tagging purpo
 * ses
 * (e.g. to tag an audio track appropriately in a video or audio editor, 
 * or
 * an image in a camera application).
 */
export function tag_get_licenses(): string[];
/**
 * Gets the number of ID3v1 genres that can be identified. Winamp genres 
 * are
 * included.
 */
export function tag_id3_genre_count(): number;
/**
 * Gets the ID3v1 genre name for a given ID.
 */
export function tag_id3_genre_get(id: number): string;
/**
 * Helper function for tag-reading plugins to create a #GstSample suitabl
 * e to
 * add to a #GstTagList as an image tag (such as #GST_TAG_IMAGE or
 * #GST_TAG_PREVIEW_IMAGE) from the encoded image data and an (optional) 
 * image
 * type.
 * Background: cover art and other images in tags are usually stored as a
 * blob of binary image data, often accompanied by a MIME type or some ot
 * her
 * content type string (e.g. 'png', 'jpeg', 'jpg'). Sometimes there is al
 * so an
 * 'image type' to indicate what kind of image this is (e.g. front cover,
 * back cover, artist, etc.). The image data may also be an URI to the im
 * age
 * rather than the image itself.
 * In GStreamer, image tags are #GstSample<!-- -->s containing the raw im
 * age
 * data, with the sample caps describing the content type of the image
 * (e.g. image/jpeg, image/png, text/uri-list). The sample info may conta
 * in
 * an additional 'image-type' field of #GST_TYPE_TAG_IMAGE_TYPE to descri
 * be
 * the type of image (front cover, back cover etc.). #GST_TAG_PREVIEW_IMA
 * GE
 * tags should not carry an image type, their type is already indicated v
 * ia
 * the special tag name.
 * This function will do various checks and typefind the encoded image
 * data (we can't trust the declared mime type).
 */
export function tag_image_data_to_image_sample(image_data: number[], image_data_len: number, image_type: TagImageType): Gst.Sample;
/**
 * Adds an image from an ID3 APIC frame (or similar, such as used in FLAC
 * )
 * to the given tag list. Also see gst_tag_image_data_to_image_sample() f
 * or
 * more information on image tags in GStreamer.
 */
export function tag_list_add_id3_image(tag_list: Gst.TagList, image_data: number[], image_data_len: number, id3_picture_type: number): boolean;
/**
 * Parses the IFD and IFD tags data contained in the buffer and puts it
 * on a taglist. The base_offset is used to subtract from the offset in
 * the tag entries and be able to get the offset relative to the buffer
 * start
 */
export function tag_list_from_exif_buffer(buffer: Gst.Buffer, byte_order: number, base_offset: number): Gst.TagList;
/**
 * Parses the exif tags starting with a tiff header structure.
 */
export function tag_list_from_exif_buffer_with_tiff_header(buffer: Gst.Buffer): Gst.TagList;
/**
 * Creates a new tag list that contains the information parsed out of a
 * ID3 tag.
 */
export function tag_list_from_id3v2_tag(buffer: Gst.Buffer): Gst.TagList;
/**
 * Creates a new tag list that contains the information parsed out of a
 * vorbiscomment packet.
 */
export function tag_list_from_vorbiscomment(data: number[], size: number, id_data: number[], id_data_length: number): [Gst.TagList, string | null];
/**
 * Creates a new tag list that contains the information parsed out of a
 * vorbiscomment packet.
 */
export function tag_list_from_vorbiscomment_buffer(buffer: Gst.Buffer, id_data: number[], id_data_length: number): [Gst.TagList, string | null];
/**
 * Parse a xmp packet into a taglist.
 */
export function tag_list_from_xmp_buffer(buffer: Gst.Buffer): Gst.TagList;
/**
 * Parses the data containing an ID3v1 tag and returns a #GstTagList from
 *  the
 * parsed data.
 */
export function tag_list_new_from_id3v1(data: number[]): Gst.TagList;
/**
 * Formats the tags in taglist on exif format. The resulting buffer conta
 * ins
 * the tags IFD and is followed by the data pointed by the tag entries.
 */
export function tag_list_to_exif_buffer(taglist: Gst.TagList, byte_order: number, base_offset: number): Gst.Buffer;
/**
 * Formats the tags in taglist into exif structure, a tiff header
 * is put in the beginning of the buffer.
 */
export function tag_list_to_exif_buffer_with_tiff_header(taglist: Gst.TagList): Gst.Buffer;
/**
 * Creates a new vorbiscomment buffer from a tag list.
 */
export function tag_list_to_vorbiscomment_buffer(list: Gst.TagList, id_data: number[], id_data_length: number, vendor_string: string | null): Gst.Buffer;
/**
 * Formats a taglist as a xmp packet using only the selected
 * schemas. An empty list (%NULL) means that all schemas should
 * be used
 */
export function tag_list_to_xmp_buffer(list: Gst.TagList, read_only: boolean, schemas: string[]): Gst.Buffer;
/**
 * Convenience function to parse a GST_TAG_EXTENDED_COMMENT string and
 * separate it into its components.
 * If successful, @key, @lang and/or @value will be set to newly allocate
 * d
 * strings that you need to free with g_free() when done. @key and @lang
 * may also be set to NULL by this function if there is no key or no lang
 * uage
 * code in the extended comment string.
 */
export function tag_parse_extended_comment(ext_comment: string, fail_if_no_key: boolean): [boolean, string | null,string | null,string];
/**
 * Registers additional musicbrainz-specific tags with the GStreamer tag
 * system. Plugins and applications that use these tags should call this
 * function before using them. Can be called multiple times.
 */
export function tag_register_musicbrainz_tags(): void;
/**
 * Looks up the ID3v2 tag for a GStreamer tag.
 */
export function tag_to_id3_tag(gst_tag: string): string;
/**
 * Creates a new tag list that contains the information parsed out of a
 * vorbiscomment packet.
 */
export function tag_to_vorbis_comments(list: Gst.TagList, tag: string): GLib.List;
/**
 * Looks up the vorbiscomment tag for a GStreamer tag.
 */
export function tag_to_vorbis_tag(gst_tag: string): string;
/**
 * Gets the list of supported schemas in the xmp lib
 */
export function tag_xmp_list_schemas(): string[];
/**
 * Convenience function using gst_tag_from_vorbis_tag(), parsing
 * a vorbis comment string into the right type and adding it to the
 * given taglist @list.
 * Unknown vorbiscomment tags will be added to the tag list in form
 * of a #GST_TAG_EXTENDED_COMMENT.
 */
export function vorbis_tag_add(list: Gst.TagList, tag: string, value: string): void;
export enum TagDemuxResult {
    BROKEN_TAG = 0,
    AGAIN = 1,
    OK = 2,
}
export enum TagImageType {
    NONE = -1,
    UNDEFINED = 0,
    FRONT_COVER = 1,
    BACK_COVER = 2,
    LEAFLET_PAGE = 3,
    MEDIUM = 4,
    LEAD_ARTIST = 5,
    ARTIST = 6,
    CONDUCTOR = 7,
    BAND_ORCHESTRA = 8,
    COMPOSER = 9,
    LYRICIST = 10,
    RECORDING_LOCATION = 11,
    DURING_RECORDING = 12,
    DURING_PERFORMANCE = 13,
    VIDEO_CAPTURE = 14,
    FISH = 15,
    ILLUSTRATION = 16,
    BAND_ARTIST_LOGO = 17,
    PUBLISHER_STUDIO_LOGO = 18,
}
export enum TagLicenseFlags {
    PERMITS_REPRODUCTION = 1,
    PERMITS_DISTRIBUTION = 2,
    PERMITS_DERIVATIVE_WORKS = 4,
    PERMITS_SHARING = 8,
    REQUIRES_NOTICE = 256,
    REQUIRES_ATTRIBUTION = 512,
    REQUIRES_SHARE_ALIKE = 1024,
    REQUIRES_SOURCE_CODE = 2048,
    REQUIRES_COPYLEFT = 4096,
    REQUIRES_LESSER_COPYLEFT = 8192,
    PROHIBITS_COMMERCIAL_USE = 65536,
    PROHIBITS_HIGH_INCOME_NATION_USE = 131072,
    CREATIVE_COMMONS_LICENSE = 16777216,
    FREE_SOFTWARE_FOUNDATION_LICENSE = 33554432,
}
export class TagDemux  {constructor(config?: properties);
readonly element: Gst.Element;
readonly priv: TagDemuxPrivate;
readonly reserved: object[];
}
export class TagMux  {constructor(config?: properties);
readonly element: Gst.Element;
readonly priv: TagMuxPrivate;
readonly _gst_reserved: object[];
}
export class TagDemuxClass  {constructor(config?: properties);
readonly parent_class: Gst.ElementClass;
readonly min_start_size: number;
readonly min_end_size: number;
readonly identify_tag: unknown;
readonly parse_tag: unknown;
readonly merge_tags: unknown;
readonly reserved: object[];
}
export class TagDemuxPrivate  {constructor(config?: properties);
}
export class TagMuxClass  {constructor(config?: properties);
readonly parent_class: Gst.ElementClass;
readonly render_start_tag: unknown;
readonly render_end_tag: unknown;
readonly _gst_reserved: object[];
}
export class TagMuxPrivate  {constructor(config?: properties);
}
export class TagXmpWriterInterface  {constructor(config?: properties);
}
export interface TagXmpWriter  {
add_all_schemas(): void;
add_schema(schema: string): void;
has_schema(schema: string): boolean;
remove_all_schemas(): void;
remove_schema(schema: string): void;
tag_list_to_xmp_buffer(taglist: Gst.TagList, read_only: boolean): Gst.Buffer;
}