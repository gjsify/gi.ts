
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gdk from "gdk";
import * as GdkPixbuf from "gdkpixbuf";
import * as Gtk from "gtk";
import * as EvinceDocument from "evincedocument";
import * as cairo from "cairo";
import * as Pango from "pango";
/**
 * evincedocument.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
/**
 * 
 */
export function backends_manager_get_document(mime_type: string): Document;
/**
 * 
 */
export function backends_manager_get_document_module_name(document: Document): string;
/**
 * 
 */
export function document_error_quark(): GLib.Quark;
/**
 * Compresses the file at @uri.
 *  
 * If @type is %EV_COMPRESSION_NONE, it does nothing and returns %NULL.
 * Otherwise, it returns the filename of a
 * temporary file containing the compressed data from the file at @uri.
 * On error it returns %NULL and fills in @error.
 * It is the caller's responsibility to unlink the temp file after use.
 */
export function file_compress(uri: string, type: CompressionType): string;
/**
 * Performs a g_file_copy_attributes() with %G_FILE_COPY_ALL_METADATA
 * from @from to @to.
 */
export function file_copy_metadata(from: string, to: string): boolean;
/**
 * 
 */
export function file_get_mime_type(uri: string, fast: boolean): string;
/**
 * 
 */
export function file_is_temp(file: Gio.File): boolean;
/**
 * Uncompresses the file at @uri.
 * If @type is %EV_COMPRESSION_NONE, it does nothing and returns %NULL.
 * Otherwise, it returns the filename of a
 * temporary file containing the decompressed data from the file at @uri.
 * On error it returns %NULL and fills in @error.
 * It is the caller's responsibility to unlink the temp file after use.
 */
export function file_uncompress(uri: string, type: CompressionType): string;
/**
 * 
 */
export function get_locale_dir(): string;
/**
 * Initializes the evince document library, and binds the evince
 * gettext domain.
 * You must call this before calling any other function in the evince
 * document library.
 */
export function init(): boolean;
/**
 * Creates a temp directory in the evince temp directory.
 */
export function mkdtemp(tmpl: string): string;
/**
 * Creates a temp file in the evince temp directory.
 */
export function mkstemp(tmpl: string, file_name: string): number;
/**
 * Creates a temp #GFile in the evince temp directory. See ev_mkstemp() f
 * or more information.
 */
export function mkstemp_file(tmpl: string): Gio.File;
/**
 * 
 */
export function rect_cmp(a: Rectangle, b: Rectangle): number;
/**
 * Shuts the evince document library down.
 */
export function shutdown(): void;
/**
 * 
 */
export function tmp_file_unlink(file: Gio.File): void;
/**
 * 
 */
export function tmp_filename_unlink(filename: string): void;
/**
 * 
 */
export function tmp_uri_unlink(uri: string): void;
/**
 * Performs a g_file_copy() from @from to @to.
 */
export function xfer_uri_simple(from: string, to: string): boolean;
export enum AnnotationTextIcon {
    NOTE = 0,
    COMMENT = 1,
    KEY = 2,
    HELP = 3,
    NEW_PARAGRAPH = 4,
    PARAGRAPH = 5,
    INSERT = 6,
    CROSS = 7,
    CIRCLE = 8,
    UNKNOWN = 9,
}
export enum AnnotationTextMarkupType {
    HIGHLIGHT = 0,
    STRIKE_OUT = 1,
    UNDERLINE = 2,
    SQUIGGLY = 3,
}
export enum AnnotationType {
    UNKNOWN = 0,
    TEXT = 1,
    ATTACHMENT = 2,
    TEXT_MARKUP = 3,
}
export enum CompressionType {
    NONE = 0,
    BZIP2 = 1,
    GZIP = 2,
    LZMA = 3,
}
export enum DocumentError {
    INVALID = 0,
    UNSUPPORTED_CONTENT = 1,
    ENCRYPTED = 2,
}
export enum DocumentLayout {
    SINGLE_PAGE = 0,
    ONE_COLUMN = 1,
    TWO_COLUMN_LEFT = 2,
    TWO_COLUMN_RIGHT = 3,
    TWO_PAGE_LEFT = 4,
    TWO_PAGE_RIGHT = 5,
}
export enum DocumentMode {
    NONE = 0,
    USE_OC = 1,
    USE_THUMBS = 2,
    FULL_SCREEN = 3,
    USE_ATTACHMENTS = 4,
    PRESENTATION = 3,
}
export enum FileExporterFormat {
    UNKNOWN = 0,
    PS = 1,
    PDF = 2,
}
export enum FormFieldButtonType {
    PUSH = 0,
    CHECK = 1,
    RADIO = 2,
}
export enum FormFieldChoiceType {
    COMBO = 0,
    LIST = 1,
}
export enum FormFieldTextType {
    NORMAL = 0,
    MULTILINE = 1,
    FILE_SELECT = 2,
}
export enum LinkActionType {
    GOTO_DEST = 0,
    GOTO_REMOTE = 1,
    EXTERNAL_URI = 2,
    LAUNCH = 3,
    NAMED = 4,
    LAYERS_STATE = 5,
}
export enum LinkDestType {
    PAGE = 0,
    XYZ = 1,
    FIT = 2,
    FITH = 3,
    FITV = 4,
    FITR = 5,
    NAMED = 6,
    PAGE_LABEL = 7,
    UNKNOWN = 8,
}
export enum SelectionStyle {
    GLYPH = 0,
    WORD = 1,
    LINE = 2,
}
export enum TransitionEffectAlignment {
    HORIZONTAL = 0,
    VERTICAL = 1,
}
export enum TransitionEffectDirection {
    INWARD = 0,
    OUTWARD = 1,
}
export enum TransitionEffectType {
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
export type BackendPage = object;
export type BackendPageDestroyFunc = GLib.DestroyNotify;
export enum AnnotationsSaveMask {
    NONE = 0,
    CONTENTS = 1,
    COLOR = 2,
    AREA = 4,
    LABEL = 8,
    OPACITY = 16,
    POPUP_RECT = 32,
    POPUP_IS_OPEN = 64,
    TEXT_IS_OPEN = 128,
    TEXT_ICON = 256,
    ATTACHMENT = 512,
    TEXT_MARKUP_TYPE = 1024,
    ALL = 2047,
}
export enum DocumentInfoFields {
    TITLE = 1,
    FORMAT = 2,
    AUTHOR = 4,
    SUBJECT = 8,
    KEYWORDS = 16,
    LAYOUT = 32,
    CREATOR = 64,
    PRODUCER = 128,
    CREATION_DATE = 256,
    MOD_DATE = 512,
    LINEARIZED = 1024,
    START_MODE = 2048,
    UI_HINTS = 4096,
    PERMISSIONS = 8192,
    N_PAGES = 16384,
    SECURITY = 32768,
    PAPER_SIZE = 65536,
    LICENSE = 131072,
}
export enum DocumentLoadFlags {
    NONE = 0,
    NO_CACHE = 1,
}
export enum DocumentPermissions {
    OK_TO_PRINT = 1,
    OK_TO_MODIFY = 2,
    OK_TO_COPY = 4,
    OK_TO_ADD_NOTES = 8,
    FULL = 15,
}
export enum DocumentUIHints {
    HIDE_TOOLBAR = 1,
    HIDE_MENUBAR = 2,
    HIDE_WINDOWUI = 4,
    FIT_WINDOW = 8,
    CENTER_WINDOW = 16,
    DISPLAY_DOC_TITLE = 32,
    DIRECTION_RTL = 64,
}
export enum FileExporterCapabilities {
    PAGE_SET = 1,
    COPIES = 2,
    COLLATE = 4,
    REVERSE = 8,
    SCALE = 16,
    GENERATE_PDF = 32,
    GENERATE_PS = 64,
    PREVIEW = 128,
    NUMBER_UP = 256,
}
export enum FindOptions {
    DEFAULT = 0,
    CASE_SENSITIVE = 1,
    WHOLE_WORDS_ONLY = 2,
}
export class Annotation  {
    constructor(config?: properties);
    area: Rectangle;
    color: object;
    contents: string;
    modified: string;
    name: string;
    page: Page;
    rgba: Gdk.RGBA;
    equal(other: Annotation): boolean;
    get_annotation_type(): AnnotationType;
    get_area(area: Rectangle): void;
    get_color(): [Gdk.Color];
    get_contents(): string;
    get_modified(): string;
    get_name(): string;
    get_page(): Page;
    get_page_index(): number;
    get_rgba(): [Gdk.RGBA];
    set_area(area: Rectangle): boolean;
    set_color(color: Gdk.Color): boolean;
    set_contents(contents: string): boolean;
    set_modified(modified: string): boolean;
    set_modified_from_time(utime: GLib.Time): boolean;
    set_name(name: string): boolean;
    set_rgba(rgba: Gdk.RGBA): boolean;
}
export class AnnotationAttachment extends Annotation {
    constructor(config?: properties);
    attachment: Attachment;
    get_attachment(): Attachment;
    set_attachment(attachment: Attachment): boolean;
}
export class AnnotationText extends Annotation {
    constructor(config?: properties);
    icon: AnnotationTextIcon;
    is_open: boolean;
    get_icon(): AnnotationTextIcon;
    get_is_open(): boolean;
    set_icon(icon: AnnotationTextIcon): boolean;
    set_is_open(is_open: boolean): boolean;
}
export class AnnotationTextMarkup extends Annotation {
    constructor(config?: properties);
    type: AnnotationTextMarkupType;static highlight_new(page: Page): Annotation;
    static squiggly_new(page: Page): Annotation;
    static strike_out_new(page: Page): Annotation;
    static underline_new(page: Page): Annotation;
    get_markup_type(): AnnotationTextMarkupType;
    set_markup_type(markup_type: AnnotationTextMarkupType): boolean;
}
export class Attachment extends GObject.Object {
    constructor(config?: properties);
    ctime: number;
    data: object;
    description: string;
    mtime: number;
    name: string;
    size: number;
    get_creation_date(): GLib.Time;
    get_description(): string;
    get_mime_type(): string;
    get_modification_date(): GLib.Time;
    get_name(): string;
    open(screen: Gdk.Screen, timestamp: number): boolean;
    save(file: Gio.File): boolean;
    static error_quark(): GLib.Quark;
}
export class Document  {
    constructor(config?: properties);
    modified: boolean;
    readonly base: GObject.Object;
    readonly priv: DocumentPrivate;
    check_dimensions(): boolean;
    find_page_by_label(page_label: string, page_index: number): boolean;
    get_backend_info(info: DocumentBackendInfo): boolean;
    get_info(): DocumentInfo;
    get_max_label_len(): number;
    get_max_page_size(width: number, height: number): void;
    get_min_page_size(width: number, height: number): void;
    get_modified(): boolean;
    get_n_pages(): number;
    get_page(index: number): Page;
    get_page_label(page_index: number): string;
    get_page_size(page_index: number): [number | null,number | null];
    get_size(): number;
    get_thumbnail(rc: RenderContext): GdkPixbuf.Pixbuf;
    get_thumbnail_surface(rc: RenderContext): cairo.Surface;
    get_title(): string;
    get_uri(): string;
    has_synctex(): boolean;
    has_text_page_labels(): boolean;
    is_page_size_uniform(): boolean;
    load(uri: string): boolean;
    load_full(uri: string, flags: DocumentLoadFlags): boolean;
    load_gfile(file: Gio.File, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean;
    load_stream(stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean;
    render(rc: RenderContext): cairo.Surface;
    save(uri: string): boolean;
    set_modified(modified: boolean): void;
    synctex_backward_search(page_index: number, x: number, y: number): SourceLink;
    static doc_mutex_lock(): void;
    static doc_mutex_trylock(): boolean;
    static doc_mutex_unlock(): void;
    static factory_add_filters(chooser: Gtk.Widget, document: Document): void;
    static factory_get_document(uri: string): Document;
    static factory_get_document_for_gfile(file: Gio.File, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): Document;
    static factory_get_document_for_stream(stream: Gio.InputStream, mime_type: string | null, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): Document;
    static factory_get_document_full(uri: string, flags: DocumentLoadFlags): Document;
    static fc_mutex_lock(): void;
    static fc_mutex_trylock(): boolean;
    static fc_mutex_unlock(): void;
    static misc_format_date(utime: GLib.Time): string;
    static misc_get_loading_thumbnail(width: number, height: number, inverted_colors: boolean): GdkPixbuf.Pixbuf;
    static misc_get_page_border_size(page_width: number, page_height: number, border: Gtk.Border): void;
    static misc_get_pointer_position(widget: Gtk.Widget, x: number, y: number): void;
    static misc_get_screen_dpi(screen: Gdk.Screen): number;
    static misc_get_thumbnail_frame(width: number, height: number, source_pixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf;
    static misc_invert_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    static misc_invert_surface(surface: cairo.Surface): void;
    static misc_paint_one_page(cr: cairo.Context, widget: Gtk.Widget, area: Gdk.Rectangle, border: Gtk.Border, highlight: boolean, inverted_colors: boolean): void;
    static misc_pixbuf_from_surface(surface: cairo.Surface): GdkPixbuf.Pixbuf;
    static misc_render_loading_thumbnail(widget: Gtk.Widget, width: number, height: number, inverted_colors: boolean): GdkPixbuf.Pixbuf;
    static misc_render_loading_thumbnail_surface(widget: Gtk.Widget, width: number, height: number, inverted_colors: boolean): cairo.Surface;
    static misc_render_thumbnail_surface_with_frame(widget: Gtk.Widget, source_surface: cairo.Surface, width: number, height: number): cairo.Surface;
    static misc_render_thumbnail_with_frame(widget: Gtk.Widget, source_pixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf;
    static misc_surface_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): cairo.Surface;
    static misc_surface_rotate_and_scale(surface: cairo.Surface, dest_width: number, dest_height: number, dest_rotation: number): cairo.Surface;
}
export class FormField  {
    constructor(config?: properties);
    readonly id: number;
    readonly is_read_only: boolean;
    readonly font_size: number;
    readonly activation_link: Link;
    readonly page: Page;
    readonly changed: boolean;
}
export class FormFieldButton extends FormField {
    constructor(config?: properties);
}
export class FormFieldChoice extends FormField {
    constructor(config?: properties);
}
export class FormFieldSignature extends FormField {
    constructor(config?: properties);
}
export class FormFieldText extends FormField {
    constructor(config?: properties);
}
export class Image extends GObject.Object {
    constructor(config?: properties);
    static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Image;
    get_id(): number;
    get_page(): number;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_tmp_uri(): string;
    save_tmp(pixbuf: GdkPixbuf.Pixbuf): string;
}
export class Layer extends GObject.Object {
    constructor(config?: properties);
    get_rb_group(): number;
    is_parent(): boolean;
}
export class Link extends GObject.Object {
    constructor(config?: properties);
    action: LinkAction;
    title: string;
    get_action(): LinkAction;
    get_title(): string;
}
export class LinkAction extends GObject.Object {
    constructor(config?: properties);
    dest: LinkDest;
    filename: string;
    hide_list: object;
    name: string;
    params: string;
    show_list: object;
    toggle_list: object;
    type: LinkActionType;
    uri: string;static new_dest(dest: LinkDest): LinkAction;
    static new_external_uri(uri: string): LinkAction;
    static new_launch(filename: string, params: string): LinkAction;
    static new_layers_state(show_list: GLib.List, hide_list: GLib.List, toggle_list: GLib.List): LinkAction;
    static new_named(name: string): LinkAction;
    static new_remote(dest: LinkDest, filename: string): LinkAction;
    equal(b: LinkAction): boolean;
    get_action_type(): LinkActionType;
    get_dest(): LinkDest;
    get_filename(): string;
    get_hide_list(): GLib.List;
    get_name(): string;
    get_params(): string;
    get_show_list(): GLib.List;
    get_toggle_list(): GLib.List;
    get_uri(): string;
}
export class LinkDest extends GObject.Object {
    constructor(config?: properties);
    bottom: number;
    change: number;
    left: number;
    named: string;
    page: number;
    page_label: string;
    right: number;
    top: number;
    type: LinkDestType;
    zoom: number;static new_fit(page: number): LinkDest;
    static new_fith(page: number, top: number, change_top: boolean): LinkDest;
    static new_fitr(page: number, left: number, bottom: number, right: number, top: number): LinkDest;
    static new_fitv(page: number, left: number, change_left: boolean): LinkDest;
    static new_named(named_dest: string): LinkDest;
    static new_page(page: number): LinkDest;
    static new_page_label(page_label: string): LinkDest;
    static new_xyz(page: number, left: number, top: number, zoom: number, change_left: boolean, change_top: boolean, change_zoom: boolean): LinkDest;
    equal(b: LinkDest): boolean;
    get_bottom(): number;
    get_dest_type(): LinkDestType;
    get_left(change_left: boolean): number;
    get_named_dest(): string;
    get_page(): number;
    get_page_label(): string;
    get_right(): number;
    get_top(change_top: boolean): number;
    get_zoom(change_zoom: boolean): number;
}
export class Media extends GObject.Object {
    constructor(config?: properties);
    static new_for_uri(page: Page, uri: string): Media;
    get_page_index(): number;
    get_show_controls(): boolean;
    get_uri(): string;
    set_show_controls(show_controls: boolean): void;
}
export class Page extends GObject.Object {
    constructor(config?: properties);
}
export class RenderContext extends GObject.Object {
    constructor(config?: properties);
    compute_scaled_size(width_points: number, height_points: number, scaled_width: number, scaled_height: number): void;
    compute_scales(width_points: number, height_points: number, scale_x: number, scale_y: number): void;
    compute_transformed_size(width_points: number, height_points: number, transformed_width: number, transformed_height: number): void;
    set_page(page: Page): void;
    set_rotation(rotation: number): void;
    set_scale(scale: number): void;
    set_target_size(target_width: number, target_height: number): void;
}
export class TransitionEffect extends GObject.Object {
    constructor(config?: properties);
    alignment: TransitionEffectAlignment;
    angle: number;
    direction: TransitionEffectDirection;
    duration: number;
    rectangular: boolean;
    scale: number;
    type: TransitionEffectType;
}
export class DocumentBackendInfo  {
    constructor(config?: properties);
    name: string;
    version: string;
}
export class DocumentInfo  {
    constructor(config?: properties);
    title: string;
    format: string;
    author: string;
    subject: string;
    keywords: string;
    creator: string;
    producer: string;
    linearized: string;
    security: string;
    creation_date: GLib.Time;
    modified_date: GLib.Time;
    layout: DocumentLayout;
    mode: DocumentMode;
    ui_hints: number;
    permissions: number;
    n_pages: number;
    paper_height: number;
    paper_width: number;
    license: DocumentLicense;
    fields_mask: number;
    copy(): DocumentInfo;
    free(): void;
}
export class DocumentLicense  {
    constructor(config?: properties);
    copy(): DocumentLicense;
    free(): void;
    get_text(): string;
    get_uri(): string;
    get_web_statement(): string;
}
export class DocumentPrivate  {
    constructor(config?: properties);
}
export class FileExporterContext  {
    constructor(config?: properties);
    format: FileExporterFormat;
    filename: string;
    first_page: number;
    last_page: number;
    paper_width: number;
    paper_height: number;
    duplex: boolean;
    pages_per_sheet: number;
}
export class ImagePrivate  {
    constructor(config?: properties);
}
export class LayerPrivate  {
    constructor(config?: properties);
}
export class LinkActionPrivate  {
    constructor(config?: properties);
}
export class LinkDestPrivate  {
    constructor(config?: properties);
}
export class LinkPrivate  {
    constructor(config?: properties);
}
export class Mapping  {
    constructor(config?: properties);
    area: Rectangle;
    data: object;
}
export class MappingList  {
    constructor(config?: properties);
    find(data: object | null): Mapping;
    find_custom(data: object | null, func: GLib.CompareFunc): Mapping;
    get(x: number, y: number): Mapping;
    get_data(x: number, y: number): object | null;
    get_list(): GLib.List;
    get_page(): number;
    length(): number;
    nth(n: number): Mapping;
    ref(): MappingList;
    remove(mapping: Mapping): void;
    unref(): void;
}
export class MediaPrivate  {
    constructor(config?: properties);
}
export class Point  {
    constructor(config?: properties);
    x: number;
    y: number;
}
export class Rectangle  {
    constructor(config?: properties);
    copy(): Rectangle;
    free(): void;
}
export class SourceLink  {
    constructor(config?: properties);
    copy(): SourceLink;
    free(): void;
}
export class TypeInfo  {
    constructor(config?: properties);
    desc: string;
    mime_types: string;
}
export interface AnnotationMarkup  {
    label: string;
    opacity: number;
    popup_is_open: boolean;
    rectangle: Rectangle;
    can_have_popup(): boolean;
    get_label(): string;
    get_opacity(): number;
    get_popup_is_open(): boolean;
    get_rectangle(ev_rect: Rectangle): void;
    has_popup(): boolean;
    set_has_popup(has_popup: boolean): boolean;
    set_label(label: string): boolean;
    set_opacity(opacity: number): boolean;
    set_popup_is_open(is_open: boolean): boolean;
    set_rectangle(ev_rect: Rectangle): boolean;
}
export interface AsyncRenderer  {
    render_pixbuf(page: number, scale: number, rotation: number): void;
}
export interface DocumentAnnotations  {
    add_annotation(annot: Annotation, rect: Rectangle): void;
    can_add_annotation(): boolean;
    can_remove_annotation(): boolean;
    document_is_modified(): boolean;
    get_annotations(page: Page): MappingList;
    remove_annotation(annot: Annotation): void;
    save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void;
}
export interface DocumentAttachments  {
    get_attachments(): GLib.List;
    has_attachments(): boolean;
}
export interface DocumentFind  {
    find_text(page: Page, text: string, case_sensitive: boolean): GLib.List;
    find_text_with_options(page: Page, text: string, options: FindOptions): GLib.List;
    get_supported_options(): FindOptions;
}
export interface DocumentFonts  {
    fill_model(model: Gtk.TreeModel): void;
    get_fonts_summary(): string;
    get_progress(): number;
    scan(n_pages: number): boolean;
}
export interface DocumentForms  {
    document_is_modified(): boolean;
    form_field_button_get_state(field: FormField): boolean;
    form_field_button_set_state(field: FormField, state: boolean): void;
    form_field_choice_get_item(field: FormField, index: number): string;
    form_field_choice_get_n_items(field: FormField): number;
    form_field_choice_get_text(field: FormField): string;
    form_field_choice_is_item_selected(field: FormField, index: number): boolean;
    form_field_choice_select_item(field: FormField, index: number): void;
    form_field_choice_set_text(field: FormField, text: string): void;
    form_field_choice_toggle_item(field: FormField, index: number): void;
    form_field_choice_unselect_all(field: FormField): void;
    form_field_text_get_text(field: FormField): string;
    form_field_text_set_text(field: FormField, text: string): void;
    get_form_fields(page: Page): MappingList;
}
export interface DocumentImages  {
    get_image(image: Image): GdkPixbuf.Pixbuf;
    get_image_mapping(page: Page): MappingList;
}
export interface DocumentLayers  {
    get_layers(): Gtk.TreeModel;
    has_layers(): boolean;
    hide_layer(layer: Layer): void;
    layer_is_visible(layer: Layer): boolean;
    show_layer(layer: Layer): void;
}
export interface DocumentLinks  {
    find_link_dest(link_name: string): LinkDest;
    find_link_page(link_name: string): number;
    get_dest_page(dest: LinkDest): number;
    get_dest_page_label(dest: LinkDest): string;
    get_link_page(link: Link): number;
    get_link_page_label(link: Link): string;
    get_links(page: Page): MappingList;
    get_links_model(): Gtk.TreeModel;
    has_document_links(): boolean;
}
export interface DocumentMedia  {
    get_media_mapping(page: Page): MappingList;
}
export interface DocumentPrint  {
    print_page(page: Page, cr: cairo.Context): void;
}
export interface DocumentSecurity  {
    has_document_security(): boolean;
    set_password(password: string): void;
}
export interface DocumentText  {
    get_text(page: Page): string;
    get_text_attrs(page: Page): Pango.AttrList;
    get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean;
    get_text_mapping(page: Page): cairo.Region;
}
export interface DocumentTransition  {
    get_effect(page: number): TransitionEffect;
    get_page_duration(page: number): number;
}
export interface FileExporter  {
    begin(fc: FileExporterContext): void;
    begin_page(): void;
    do_page(rc: RenderContext): void;
    end(): void;
    end_page(): void;
    get_capabilities(): FileExporterCapabilities;
}
export interface Selection  {
    get_selected_text(page: Page, style: SelectionStyle, points: Rectangle): string;
    get_selection_region(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region;
    render_selection(rc: RenderContext, surface: cairo.Surface, points: Rectangle, old_points: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color): void;
}