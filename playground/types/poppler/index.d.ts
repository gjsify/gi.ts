
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as cairo from "cairo";
import * as Poppler from "poppler";
/**
 * poppler.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type AttachmentSaveFunc = (buf: number[], count: number, data: object | null) => boolean;
export type MediaSaveFunc = (buf: number[], count: number, data: object | null) => boolean;
export const ANNOT_TEXT_ICON_CIRCLE: string;
export const ANNOT_TEXT_ICON_COMMENT: string;
export const ANNOT_TEXT_ICON_CROSS: string;
export const ANNOT_TEXT_ICON_HELP: string;
export const ANNOT_TEXT_ICON_INSERT: string;
export const ANNOT_TEXT_ICON_KEY: string;
export const ANNOT_TEXT_ICON_NEW_PARAGRAPH: string;
export const ANNOT_TEXT_ICON_NOTE: string;
export const ANNOT_TEXT_ICON_PARAGRAPH: string;
export const HAS_CAIRO: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
/**
 * Parses a PDF format date string and converts it to a #time_t. Returns 
 * #FALSE
 * if the parsing fails or the input string is not a valid PDF format dat
 * e string
 */
export function date_parse(date: string, timet: number): boolean;
/**
 * 
 */
export function error_quark(): GLib.Quark;
/**
 * Returns the backend compiled into the poppler library.
 */
export function get_backend(): Backend;
/**
 * Returns the version of poppler in use.  This result is not to be freed
 * .
 */
export function get_version(): string;
/**
 * Converts a bytestring into a zero-terminated string suitable to
 * pass to poppler_document_find_dest().
 * Note that the returned string has no defined encoding and is not
 * suitable for display to the user.
 * The returned data must be freed using g_free().
 */
export function named_dest_from_bytestring(data: number[], length: number): string;
/**
 * Converts a named dest string (e.g. from #PopplerDest.named_dest) into 
 * a
 * bytestring, inverting the transformation of
 * poppler_named_dest_from_bytestring().
 * Note that the returned data is not zero terminated and may also
 * contains embedded NUL bytes.
 * If @name is not a valid named dest string, returns %NULL.
 * The returned data must be freed using g_free().
 */
export function named_dest_to_bytestring(named_dest: string): [number[] | null, number];
export enum ActionLayerAction {
    ON = 0,
    OFF = 1,
    TOGGLE = 2,
}
export enum ActionMovieOperation {
    PLAY = 0,
    PAUSE = 1,
    RESUME = 2,
    STOP = 3,
}
export enum ActionType {
    UNKNOWN = 0,
    NONE = 1,
    GOTO_DEST = 2,
    GOTO_REMOTE = 3,
    LAUNCH = 4,
    URI = 5,
    NAMED = 6,
    MOVIE = 7,
    RENDITION = 8,
    OCG_STATE = 9,
    JAVASCRIPT = 10,
}
export enum AdditionalActionType {
    FIELD_MODIFIED = 0,
    FORMAT_FIELD = 1,
    VALIDATE_FIELD = 2,
    CALCULATE_FIELD = 3,
}
export enum AnnotExternalDataType {
    "3D" = 0,
    UNKNOWN = 1,
}
export enum AnnotFreeTextQuadding {
    LEFT_JUSTIFIED = 0,
    CENTERED = 1,
    RIGHT_JUSTIFIED = 2,
}
export enum AnnotMarkupReplyType {
    R = 0,
    GROUP = 1,
}
export enum AnnotTextState {
    MARKED = 0,
    UNMARKED = 1,
    ACCEPTED = 2,
    REJECTED = 3,
    CANCELLED = 4,
    COMPLETED = 5,
    NONE = 6,
    UNKNOWN = 7,
}
export enum AnnotType {
    UNKNOWN = 0,
    TEXT = 1,
    LINK = 2,
    FREE_TEXT = 3,
    LINE = 4,
    SQUARE = 5,
    CIRCLE = 6,
    POLYGON = 7,
    POLY_LINE = 8,
    HIGHLIGHT = 9,
    UNDERLINE = 10,
    SQUIGGLY = 11,
    STRIKE_OUT = 12,
    STAMP = 13,
    CARET = 14,
    INK = 15,
    POPUP = 16,
    FILE_ATTACHMENT = 17,
    SOUND = 18,
    MOVIE = 19,
    WIDGET = 20,
    SCREEN = 21,
    PRINTER_MARK = 22,
    TRAP_NET = 23,
    WATERMARK = 24,
    "3D" = 25,
}
export enum Backend {
    UNKNOWN = 0,
    SPLASH = 1,
    CAIRO = 2,
}
export enum DestType {
    UNKNOWN = 0,
    XYZ = 1,
    FIT = 2,
    FITH = 3,
    FITV = 4,
    FITR = 5,
    FITB = 6,
    FITBH = 7,
    FITBV = 8,
    NAMED = 9,
}
export enum Error {
    INVALID = 0,
    ENCRYPTED = 1,
    OPEN_FILE = 2,
    BAD_CATALOG = 3,
    DAMAGED = 4,
}
export enum FontType {
    UNKNOWN = 0,
    TYPE1 = 1,
    TYPE1C = 2,
    TYPE1COT = 3,
    TYPE3 = 4,
    TRUETYPE = 5,
    TRUETYPEOT = 6,
    CID_TYPE0 = 7,
    CID_TYPE0C = 8,
    CID_TYPE0COT = 9,
    CID_TYPE2 = 10,
    CID_TYPE2OT = 11,
}
export enum FormButtonType {
    PUSH = 0,
    CHECK = 1,
    RADIO = 2,
}
export enum FormChoiceType {
    COMBO = 0,
    LIST = 1,
}
export enum FormFieldType {
    UNKNOWN = 0,
    BUTTON = 1,
    TEXT = 2,
    CHOICE = 3,
    SIGNATURE = 4,
}
export enum FormTextType {
    NORMAL = 0,
    MULTILINE = 1,
    FILE_SELECT = 2,
}
export enum MoviePlayMode {
    ONCE = 0,
    OPEN = 1,
    REPEAT = 2,
    PALINDROME = 3,
}
export enum PDFConformance {
    UNSET = 0,
    A = 1,
    B = 2,
    G = 3,
    N = 4,
    P = 5,
    PG = 6,
    U = 7,
    NONE = 8,
}
export enum PDFPart {
    UNSET = 0,
    "1" = 1,
    "2" = 2,
    "3" = 3,
    "4" = 4,
    "5" = 5,
    "6" = 6,
    "7" = 7,
    "8" = 8,
    NONE = 9,
}
export enum PDFSubtype {
    UNSET = 0,
    PDF_A = 1,
    PDF_E = 2,
    PDF_UA = 3,
    PDF_VT = 4,
    PDF_X = 5,
    NONE = 6,
}
export enum PageLayout {
    UNSET = 0,
    SINGLE_PAGE = 1,
    ONE_COLUMN = 2,
    TWO_COLUMN_LEFT = 3,
    TWO_COLUMN_RIGHT = 4,
    TWO_PAGE_LEFT = 5,
    TWO_PAGE_RIGHT = 6,
}
export enum PageMode {
    UNSET = 0,
    NONE = 1,
    USE_OUTLINES = 2,
    USE_THUMBS = 3,
    FULL_SCREEN = 4,
    USE_OC = 5,
    USE_ATTACHMENTS = 6,
}
export enum PageTransitionAlignment {
    HORIZONTAL = 0,
    VERTICAL = 1,
}
export enum PageTransitionDirection {
    INWARD = 0,
    OUTWARD = 1,
}
export enum PageTransitionType {
    REPLACE = 0,
    SPLIT = 1,
    BLINDS = 2,
    BOX = 3,
    WIPE = 4,
    DISSOLVE = 5,
    GLITTER = 6,
    FLY = 7,
    PUSH = 8,
    COVER = 9,
    UNCOVER = 10,
    FADE = 11,
}
export enum PrintDuplex {
    NONE = 0,
    SIMPLEX = 1,
    DUPLEX_FLIP_SHORT_EDGE = 2,
    DUPLEX_FLIP_LONG_EDGE = 3,
}
export enum PrintScaling {
    APP_DEFAULT = 0,
    NONE = 1,
}
export enum SelectionStyle {
    GLYPH = 0,
    WORD = 1,
    LINE = 2,
}
export enum StructureBlockAlign {
    BEFORE = 0,
    MIDDLE = 1,
    AFTER = 2,
    JUSTIFY = 3,
}
export enum StructureBorderStyle {
    NONE = 0,
    HIDDEN = 1,
    DOTTED = 2,
    DASHED = 3,
    SOLID = 4,
    DOUBLE = 5,
    GROOVE = 6,
    INSET = 7,
    OUTSET = 8,
}
export enum StructureElementKind {
    CONTENT = 0,
    OBJECT_REFERENCE = 1,
    DOCUMENT = 2,
    PART = 3,
    ARTICLE = 4,
    SECTION = 5,
    DIV = 6,
    SPAN = 7,
    QUOTE = 8,
    NOTE = 9,
    REFERENCE = 10,
    BIBENTRY = 11,
    CODE = 12,
    LINK = 13,
    ANNOT = 14,
    BLOCKQUOTE = 15,
    CAPTION = 16,
    NONSTRUCT = 17,
    TOC = 18,
    TOC_ITEM = 19,
    INDEX = 20,
    PRIVATE = 21,
    PARAGRAPH = 22,
    HEADING = 23,
    HEADING_1 = 24,
    HEADING_2 = 25,
    HEADING_3 = 26,
    HEADING_4 = 27,
    HEADING_5 = 28,
    HEADING_6 = 29,
    LIST = 30,
    LIST_ITEM = 31,
    LIST_LABEL = 32,
    LIST_BODY = 33,
    TABLE = 34,
    TABLE_ROW = 35,
    TABLE_HEADING = 36,
    TABLE_DATA = 37,
    TABLE_HEADER = 38,
    TABLE_FOOTER = 39,
    TABLE_BODY = 40,
    RUBY = 41,
    RUBY_BASE_TEXT = 42,
    RUBY_ANNOT_TEXT = 43,
    RUBY_PUNCTUATION = 44,
    WARICHU = 45,
    WARICHU_TEXT = 46,
    WARICHU_PUNCTUATION = 47,
    FIGURE = 48,
    FORMULA = 49,
    FORM = 50,
}
export enum StructureFormRole {
    UNDEFINED = 0,
    RADIO_BUTTON = 1,
    PUSH_BUTTON = 2,
    TEXT_VALUE = 3,
    CHECKBOX = 4,
}
export enum StructureFormState {
    ON = 0,
    OFF = 1,
    NEUTRAL = 2,
}
export enum StructureGlyphOrientation {
    AUTO = 0,
    "0" = 0,
    "90" = 1,
    "180" = 2,
    "270" = 3,
}
export enum StructureInlineAlign {
    START = 0,
    CENTER = 1,
    END = 2,
}
export enum StructureListNumbering {
    NONE = 0,
    DISC = 1,
    CIRCLE = 2,
    SQUARE = 3,
    DECIMAL = 4,
    UPPER_ROMAN = 5,
    LOWER_ROMAN = 6,
    UPPER_ALPHA = 7,
    LOWER_ALPHA = 8,
}
export enum StructurePlacement {
    BLOCK = 0,
    INLINE = 1,
    BEFORE = 2,
    START = 3,
    END = 4,
}
export enum StructureRubyAlign {
    START = 0,
    CENTER = 1,
    END = 2,
    JUSTIFY = 3,
    DISTRIBUTE = 4,
}
export enum StructureRubyPosition {
    BEFORE = 0,
    AFTER = 1,
    WARICHU = 2,
    INLINE = 3,
}
export enum StructureTableScope {
    ROW = 0,
    COLUMN = 1,
    BOTH = 2,
}
export enum StructureTextAlign {
    START = 0,
    CENTER = 1,
    END = 2,
    JUSTIFY = 3,
}
export enum StructureTextDecoration {
    NONE = 0,
    UNDERLINE = 1,
    OVERLINE = 2,
    LINETHROUGH = 3,
}
export enum StructureWritingMode {
    LR_TB = 0,
    RL_TB = 1,
    TB_RL = 2,
}
export enum AnnotFlag {
    UNKNOWN = 0,
    INVISIBLE = 1,
    HIDDEN = 2,
    PRINT = 4,
    NO_ZOOM = 8,
    NO_ROTATE = 16,
    NO_VIEW = 32,
    READ_ONLY = 64,
    LOCKED = 128,
    TOGGLE_NO_VIEW = 256,
    LOCKED_CONTENTS = 512,
}
export enum FindFlags {
    DEFAULT = 0,
    CASE_SENSITIVE = 1,
    BACKWARDS = 2,
    WHOLE_WORDS_ONLY = 4,
    IGNORE_DIACRITICS = 8,
}
export enum Permissions {
    OK_TO_PRINT = 1,
    OK_TO_MODIFY = 2,
    OK_TO_COPY = 4,
    OK_TO_ADD_NOTES = 8,
    OK_TO_FILL_FORM = 16,
    OK_TO_EXTRACT_CONTENTS = 32,
    OK_TO_ASSEMBLE = 64,
    OK_TO_PRINT_HIGH_RESOLUTION = 128,
    FULL = 255,
}
export enum PrintFlags {
    DOCUMENT = 0,
    MARKUP_ANNOTS = 1,
    STAMP_ANNOTS_ONLY = 2,
    ALL = 1,
}
export enum StructureGetTextFlags {
    NONE = 0,
    RECURSIVE = 1,
}
export enum ViewerPreferences {
    UNSET = 0,
    HIDE_TOOLBAR = 1,
    HIDE_MENUBAR = 2,
    HIDE_WINDOWUI = 4,
    FIT_WINDOW = 8,
    CENTER_WINDOW = 16,
    DISPLAY_DOC_TITLE = 32,
    DIRECTION_RTL = 64,
}
export class Annot  {
    constructor(config?: properties);
    get_annot_type(): AnnotType;
    get_color(): Color;
    get_contents(): string;
    get_flags(): AnnotFlag;
    get_modified(): string;
    get_name(): string;
    get_page_index(): number;
    get_rectangle(): [Rectangle];
    set_color(poppler_color: Color | null): void;
    set_contents(contents: string): void;
    set_flags(flags: AnnotFlag): void;
    set_rectangle(poppler_rect: Rectangle): void;
}
export class AnnotCircle extends AnnotMarkup {
    constructor(config?: properties);
    get_interior_color(): Color;
    set_interior_color(poppler_color: Color | null): void;
}
export class AnnotFileAttachment  {
    constructor(config?: properties);
    get_attachment(): Attachment;
    get_name(): string;
}
export class AnnotFreeText  {
    constructor(config?: properties);
    get_callout_line(): AnnotCalloutLine;
    get_quadding(): AnnotFreeTextQuadding;
}
export class AnnotLine extends AnnotMarkup {
    constructor(config?: properties);
    set_vertices(start: Point, end: Point): void;
}
export class AnnotMarkup  {
    constructor(config?: properties);
    get_date(): GLib.Date;
    get_external_data(): AnnotExternalDataType;
    get_label(): string;
    get_opacity(): number;
    get_popup_is_open(): boolean;
    get_popup_rectangle(): [boolean, Rectangle];
    get_reply_to(): AnnotMarkupReplyType;
    get_subject(): string;
    has_popup(): boolean;
    set_label(label: string | null): void;
    set_opacity(opacity: number): void;
    set_popup(popup_rect: Rectangle): void;
    set_popup_is_open(is_open: boolean): void;
    set_popup_rectangle(poppler_rect: Rectangle): void;
}
export class AnnotMovie  {
    constructor(config?: properties);
    get_movie(): Movie;
    get_title(): string;
}
export class AnnotScreen  {
    constructor(config?: properties);
    get_action(): Action;
}
export class AnnotSquare extends AnnotMarkup {
    constructor(config?: properties);
    get_interior_color(): Color;
    set_interior_color(poppler_color: Color | null): void;
}
export class AnnotText extends AnnotMarkup {
    constructor(config?: properties);
    get_icon(): string;
    get_is_open(): boolean;
    get_state(): AnnotTextState;
    set_icon(icon: string): void;
    set_is_open(is_open: boolean): void;
}
export class AnnotTextMarkup extends AnnotMarkup {
    constructor(config?: properties);
    static new_highlight(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): Annot;
    static new_squiggly(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): Annot;
    static new_strikeout(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): Annot;
    static new_underline(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): Annot;
    get_quadrilaterals(): Quadrilateral[];
    set_quadrilaterals(quadrilaterals: Quadrilateral[]): void;
}
export class Attachment  {
    constructor(config?: properties);
    readonly name: string;
    readonly description: string;
    readonly size: number;
    readonly mtime: GLib.Time;
    readonly ctime: GLib.Time;
    readonly checksum: GLib.String;
    save(filename: string): boolean;
    save_to_callback(save_func: AttachmentSaveFunc, user_data: object | null): boolean;
}
export class Document extends GObject.Object {
    constructor(config?: properties);
    author: string;
    creation_date: number;
    creator: string;
    readonly format: string;
    readonly format_major: number;
    readonly format_minor: number;
    keywords: string;
    readonly linearized: boolean;
    readonly metadata: string;
    mod_date: number;
    readonly page_layout: PageLayout;
    readonly page_mode: PageMode;
    readonly permissions: Permissions;
    readonly print_duplex: PrintDuplex;
    readonly print_n_copies: number;
    readonly print_scaling: PrintScaling;
    producer: string;
    subject: string;
    readonly subtype: PDFSubtype;
    readonly subtype_conformance: PDFConformance;
    readonly subtype_part: PDFPart;
    readonly subtype_string: string;
    title: string;
    readonly viewer_preferences: ViewerPreferences;static new_from_data(data: number[], length: number, password: string | null): Document;
    static new_from_file(uri: string, password: string | null): Document;
    static new_from_gfile(file: Gio.File, password: string | null, cancellable: Gio.Cancellable | null): Document;
    static new_from_stream(stream: Gio.InputStream, length: number, password: string | null, cancellable: Gio.Cancellable | null): Document;
    find_dest(link_name: string): Dest;
    get_attachments(): GLib.List;
    get_author(): string;
    get_creation_date(): number;
    get_creator(): string;
    get_form_field(id: number): FormField;
    get_id(): [boolean, string | null,string | null];
    get_keywords(): string;
    get_metadata(): string;
    get_modification_date(): number;
    get_n_attachments(): number;
    get_n_pages(): number;
    get_page(index: number): Page;
    get_page_by_label(label: string): Page;
    get_page_layout(): PageLayout;
    get_page_mode(): PageMode;
    get_pdf_conformance(): PDFConformance;
    get_pdf_part(): PDFPart;
    get_pdf_subtype(): PDFSubtype;
    get_pdf_subtype_string(): string | null;
    get_pdf_version(): [number | null,number | null];
    get_pdf_version_string(): string;
    get_permissions(): Permissions;
    get_print_duplex(): PrintDuplex;
    get_print_n_copies(): number;
    get_print_page_ranges(): [PageRange[], number];
    get_print_scaling(): PrintScaling;
    get_producer(): string;
    get_subject(): string;
    get_title(): string;
    has_attachments(): boolean;
    is_linearized(): boolean;
    save(uri: string): boolean;
    save_a_copy(uri: string): boolean;
    set_author(author: string): void;
    set_creation_date(creation_date: number): void;
    set_creator(creator: string): void;
    set_keywords(keywords: string): void;
    set_modification_date(modification_date: number): void;
    set_producer(producer: string): void;
    set_subject(subject: string): void;
    set_title(title: string): void;
}
export class FontInfo extends GObject.Object {
    constructor(config?: properties);
    free(): void;
    scan(n_pages: number): [boolean, FontsIter];
}
export class FormField  {
    constructor(config?: properties);
    button_get_button_type(): FormButtonType;
    button_get_state(): boolean;
    button_set_state(state: boolean): void;
    choice_can_select_multiple(): boolean;
    choice_commit_on_change(): boolean;
    choice_do_spell_check(): boolean;
    choice_get_choice_type(): FormChoiceType;
    choice_get_item(index: number): string;
    choice_get_n_items(): number;
    choice_get_text(): string;
    choice_is_editable(): boolean;
    choice_is_item_selected(index: number): boolean;
    choice_select_item(index: number): void;
    choice_set_text(text: string): void;
    choice_toggle_item(index: number): void;
    choice_unselect_all(): void;
    get_action(): Action;
    get_additional_action(type: AdditionalActionType): Action;
    get_field_type(): FormFieldType;
    get_font_size(): number;
    get_id(): number;
    get_mapping_name(): string;
    get_name(): string;
    get_partial_name(): string;
    is_read_only(): boolean;
    text_do_scroll(): boolean;
    text_do_spell_check(): boolean;
    text_get_max_len(): number;
    text_get_text(): string;
    text_get_text_type(): FormTextType;
    text_is_password(): boolean;
    text_is_rich_text(): boolean;
    text_set_text(text: string): void;
}
export class Layer  {
    constructor(config?: properties);
    get_radio_button_group_id(): number;
    get_title(): string;
    hide(): void;
    is_parent(): boolean;
    is_visible(): boolean;
    show(): void;
}
export class Media  {
    constructor(config?: properties);
    get_filename(): string;
    get_mime_type(): string;
    is_embedded(): boolean;
    save(filename: string): boolean;
    save_to_callback(save_func: MediaSaveFunc, user_data: object | null): boolean;
}
export class Movie  {
    constructor(config?: properties);
    get_duration(): number;
    get_filename(): string;
    get_play_mode(): MoviePlayMode;
    get_rate(): number;
    get_rotation_angle(): number;
    get_start(): number;
    get_volume(): number;
    is_synchronous(): boolean;
    need_poster(): boolean;
    show_controls(): boolean;
}
export class PSFile extends GObject.Object {
    constructor(config?: properties);
    free(): void;
    set_duplex(duplex: boolean): void;
    set_paper_size(width: number, height: number): void;
}
export class Page  {
    constructor(config?: properties);
    readonly label: string;
    add_annot(annot: Annot): void;
    find_text(text: string): GLib.List;
    find_text_with_options(text: string, options: FindFlags): GLib.List;
    get_annot_mapping(): GLib.List;
    get_crop_box(): [Rectangle];
    get_duration(): number;
    get_form_field_mapping(): GLib.List;
    get_image(image_id: number): cairo.Surface;
    get_image_mapping(): GLib.List;
    get_index(): number;
    get_label(): string;
    get_link_mapping(): GLib.List;
    get_selected_region(scale: number, style: SelectionStyle, selection: Rectangle): cairo.Region;
    get_selected_text(style: SelectionStyle, selection: Rectangle): string;
    get_selection_region(scale: number, style: SelectionStyle, selection: Rectangle): GLib.List;
    get_size(): [number | null,number | null];
    get_text(): string;
    get_text_attributes(): GLib.List;
    get_text_attributes_for_area(area: Rectangle): GLib.List;
    get_text_for_area(area: Rectangle): string;
    get_text_layout(): [boolean, Rectangle[],number];
    get_text_layout_for_area(area: Rectangle): [boolean, Rectangle[],number];
    get_thumbnail(): cairo.Surface;
    get_thumbnail_size(): [boolean, number,number];
    get_transition(): PageTransition;
    remove_annot(annot: Annot): void;
    render(cairo: cairo.Context): void;
    render_for_printing(cairo: cairo.Context): void;
    render_for_printing_with_options(cairo: cairo.Context, options: PrintFlags): void;
    render_selection(cairo: cairo.Context, selection: Rectangle, old_selection: Rectangle, style: SelectionStyle, glyph_color: Color, background_color: Color): void;
    render_to_ps(ps_file: PSFile): void;
    static free_annot_mapping(list: GLib.List): void;
    static free_form_field_mapping(list: GLib.List): void;
    static free_image_mapping(list: GLib.List): void;
    static free_link_mapping(list: GLib.List): void;
    static free_text_attributes(list: GLib.List): void;
    static selection_region_free(region: GLib.List): void;
}
export class StructureElement  {
    constructor(config?: properties);
    get_abbreviation(): string;
    get_actual_text(): string;
    get_alt_text(): string;
    get_background_color(): [boolean, Color];
    get_baseline_shift(): number;
    get_block_align(): StructureBlockAlign;
    get_border_color(): [boolean, Color[]];
    get_border_style(): [StructureBorderStyle[]];
    get_border_thickness(): [boolean, number[]];
    get_bounding_box(): [boolean, Rectangle];
    get_color(): [boolean, Color];
    get_column_count(): number;
    get_column_gaps(): [number[], number];
    get_column_widths(): [number[], number];
    get_end_indent(): number;
    get_form_description(): string;
    get_form_role(): StructureFormRole;
    get_form_state(): StructureFormState;
    get_glyph_orientation(): StructureGlyphOrientation;
    get_height(): number;
    get_id(): string;
    get_inline_align(): StructureInlineAlign;
    get_kind(): StructureElementKind;
    get_language(): string;
    get_line_height(): number;
    get_list_numbering(): StructureListNumbering;
    get_padding(): [number[]];
    get_page(): number;
    get_placement(): StructurePlacement;
    get_ruby_align(): StructureRubyAlign;
    get_ruby_position(): StructureRubyPosition;
    get_space_after(): number;
    get_space_before(): number;
    get_start_indent(): number;
    get_table_border_style(): [StructureBorderStyle[]];
    get_table_column_span(): number;
    get_table_headers(): string[];
    get_table_padding(): [number[]];
    get_table_row_span(): number;
    get_table_scope(): StructureTableScope;
    get_table_summary(): string;
    get_text(flags: StructureGetTextFlags): string;
    get_text_align(): StructureTextAlign;
    get_text_decoration_color(): [boolean, Color];
    get_text_decoration_thickness(): number;
    get_text_decoration_type(): StructureTextDecoration;
    get_text_indent(): number;
    get_text_spans(): [TextSpan[], number];
    get_title(): string;
    get_width(): number;
    get_writing_mode(): StructureWritingMode;
    is_block(): boolean;
    is_content(): boolean;
    is_grouping(): boolean;
    is_inline(): boolean;
}
export class ActionAny  {
    constructor(config?: properties);
    type: ActionType;
    title: string;
}
export class ActionGotoDest  {
    constructor(config?: properties);
    type: ActionType;
    title: string;
    dest: Dest;
}
export class ActionGotoRemote  {
    constructor(config?: properties);
    type: ActionType;
    title: string;
    file_name: string;
    dest: Dest;
}
export class ActionJavascript  {
    constructor(config?: properties);
    type: ActionType;
    title: string;
    script: string;
}
export class ActionLaunch  {
    constructor(config?: properties);
    type: ActionType;
    title: string;
    file_name: string;
    params: string;
}
export class ActionLayer  {
    constructor(config?: properties);
    action: ActionLayerAction;
    layers: GLib.List;
}
export class ActionMovie  {
    constructor(config?: properties);
    type: ActionType;
    title: string;
    operation: ActionMovieOperation;
    movie: Movie;
}
export class ActionNamed  {
    constructor(config?: properties);
    type: ActionType;
    title: string;
    named_dest: string;
}
export class ActionOCGState  {
    constructor(config?: properties);
    type: ActionType;
    title: string;
    state_list: GLib.List;
}
export class ActionRendition  {
    constructor(config?: properties);
    type: ActionType;
    title: string;
    op: number;
    media: Media;
}
export class ActionUri  {
    constructor(config?: properties);
    type: ActionType;
    title: string;
    uri: string;
}
export class AnnotCalloutLine  {
    constructor(config?: properties);
    copy(): AnnotCalloutLine;
    free(): void;
}
export class AnnotMapping  {
    constructor(config?: properties);
    copy(): AnnotMapping;
    free(): void;
}
export class Color  {
    constructor(config?: properties);
    copy(): Color;
    free(): void;
}
export class Dest  {
    constructor(config?: properties);
    type: DestType;
    page_num: number;
    left: number;
    bottom: number;
    right: number;
    top: number;
    zoom: number;
    named_dest: string;
    change_left: number;
    change_top: number;
    change_zoom: number;
    copy(): Dest;
    free(): void;
}
export class FontsIter  {
    constructor(config?: properties);
    copy(): FontsIter;
    free(): void;
    get_encoding(): string;
    get_file_name(): string;
    get_font_type(): FontType;
    get_full_name(): string;
    get_name(): string;
    get_substitute_name(): string;
    is_embedded(): boolean;
    is_subset(): boolean;
    next(): boolean;
}
export class FormFieldMapping  {
    constructor(config?: properties);
    copy(): FormFieldMapping;
    free(): void;
}
export class ImageMapping  {
    constructor(config?: properties);
    copy(): ImageMapping;
    free(): void;
}
export class IndexIter  {
    constructor(config?: properties);
    copy(): IndexIter;
    free(): void;
    get_action(): Action;
    get_child(): IndexIter;
    is_open(): boolean;
    next(): boolean;
}
export class LayersIter  {
    constructor(config?: properties);
    copy(): LayersIter;
    free(): void;
    get_child(): LayersIter;
    get_layer(): Layer;
    get_title(): string;
    next(): boolean;
}
export class LinkMapping  {
    constructor(config?: properties);
    copy(): LinkMapping;
    free(): void;
}
export class PageRange  {
    constructor(config?: properties);
    start_page: number;
    end_page: number;
}
export class PageTransition  {
    constructor(config?: properties);
    copy(): PageTransition;
    free(): void;
}
export class Point  {
    constructor(config?: properties);
    copy(): Point;
    free(): void;
}
export class Quadrilateral  {
    constructor(config?: properties);
    copy(): Quadrilateral;
    free(): void;
}
export class Rectangle  {
    constructor(config?: properties);
    copy(): Rectangle;
    free(): void;
}
export class StructureElementIter  {
    constructor(config?: properties);
    copy(): StructureElementIter;
    free(): void;
    get_child(): StructureElementIter;
    get_element(): StructureElement;
    next(): boolean;
}
export class TextAttributes  {
    constructor(config?: properties);
    copy(): TextAttributes;
    free(): void;
}
export class TextSpan  {
    constructor(config?: properties);
    copy(): TextSpan;
    free(): void;
    get_color(): [Color];
    get_font_name(): string;
    get_text(): string;
    is_bold_font(): boolean;
    is_fixed_width_font(): boolean;
    is_serif_font(): boolean;
}
export class Action  {
    constructor(config?: properties);
    type: ActionType;
    any: ActionAny;
    goto_dest: ActionGotoDest;
    goto_remote: ActionGotoRemote;
    launch: ActionLaunch;
    uri: ActionUri;
    named: ActionNamed;
    movie: ActionMovie;
    rendition: ActionRendition;
    ocg_state: ActionOCGState;
    javascript: ActionJavascript;
    copy(): Action;
    free(): void;
}