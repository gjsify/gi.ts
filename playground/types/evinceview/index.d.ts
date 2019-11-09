
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as EvinceDocument from "evincedocument";
import * as Gdk from "gdk";
import * as GdkPixbuf from "gdkpixbuf";
import * as Gtk from "gtk";
import * as EvinceView from "evinceview";
import * as cairo from "cairo";
/**
 * evinceview.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export const STOCK_ANNOT_SQUIGGLY: string;
export const STOCK_ANNOT_TEXT: string;
export const STOCK_ATTACHMENT: string;
export const STOCK_CLOSE: string;
export const STOCK_FIND_UNSUPPORTED: string;
export const STOCK_INVERTED_COLORS: string;
export const STOCK_OUTLINE: string;
export const STOCK_RESIZE_SE: string;
export const STOCK_RESIZE_SW: string;
export const STOCK_ROTATE_LEFT: string;
export const STOCK_ROTATE_RIGHT: string;
export const STOCK_RUN_PRESENTATION: string;
export const STOCK_SEND_TO: string;
export const STOCK_VIEW_CONTINUOUS: string;
export const STOCK_VIEW_DUAL: string;
export const STOCK_VIEW_SIDEBAR: string;
export const STOCK_VISIBLE: string;
export const STOCK_ZOOM: string;
export const STOCK_ZOOM_PAGE: string;
export const STOCK_ZOOM_WIDTH: string;
/**
 * Creates a new icon factory, adding the base stock icons to it.
 */
export function stock_icons_init(): void;
/**
 * 
 */
export function stock_icons_set_screen(screen: Gdk.Screen): void;
/**
 * 
 */
export function stock_icons_shutdown(): void;
export enum JobPriority {
    PRIORITY_URGENT = 0,
    PRIORITY_HIGH = 1,
    PRIORITY_LOW = 2,
    PRIORITY_NONE = 3,
    N_PRIORITIES = 4,
}
export enum JobRunMode {
    THREAD = 0,
    MAIN_LOOP = 1,
}
export enum JobThumbnailFormat {
    PIXBUF = 0,
    SURFACE = 1,
}
export enum PageLayout {
    SINGLE = 0,
    DUAL = 1,
    AUTOMATIC = 2,
}
export enum SizingMode {
    FIT_PAGE = 0,
    BEST_FIT = 0,
    FIT_WIDTH = 1,
    FREE = 2,
    AUTOMATIC = 3,
}
export enum JobPageDataFlags {
    NONE = 0,
    LINKS = 1,
    TEXT = 2,
    TEXT_MAPPING = 4,
    TEXT_LAYOUT = 8,
    TEXT_ATTRS = 16,
    TEXT_LOG_ATTRS = 32,
    IMAGES = 64,
    FORMS = 128,
    ANNOTS = 256,
    MEDIA = 512,
    ALL = 1023,
}
export class DocumentModel extends GObject.Object {
    constructor(config?: properties);
    continuous: boolean;
    document: EvinceDocument.Document;
    dual_odd_left: boolean;
    dual_page: boolean;
    fullscreen: boolean;
    inverted_colors: boolean;
    max_scale: number;
    min_scale: number;
    page: number;
    page_layout: PageLayout;
    rotation: number;
    scale: number;
    sizing_mode: SizingMode;static new_with_document(document: EvinceDocument.Document): DocumentModel;
    get_continuous(): boolean;
    get_document(): EvinceDocument.Document;
    get_dual_page(): boolean;
    get_dual_page_odd_pages_left(): boolean;
    get_fullscreen(): boolean;
    get_inverted_colors(): boolean;
    get_max_scale(): number;
    get_min_scale(): number;
    get_page(): number;
    get_page_layout(): PageLayout;
    get_rotation(): number;
    get_scale(): number;
    get_sizing_mode(): SizingMode;
    set_continuous(continuous: boolean): void;
    set_document(document: EvinceDocument.Document): void;
    set_dual_page(dual_page: boolean): void;
    set_dual_page_odd_pages_left(odd_left: boolean): void;
    set_fullscreen(fullscreen: boolean): void;
    set_inverted_colors(inverted_colors: boolean): void;
    set_max_scale(max_scale: number): void;
    set_min_scale(min_scale: number): void;
    set_page(page: number): void;
    set_page_by_label(page_label: string): void;
    set_page_layout(layout: PageLayout): void;
    set_rotation(rotation: number): void;
    set_scale(scale: number): void;
    set_sizing_mode(mode: SizingMode): void;
}
export class Job  {
    constructor(config?: properties);
    readonly document: EvinceDocument.Document;
    readonly run_mode: JobRunMode;
    readonly cancelled: number;
    readonly finished: number;
    readonly failed: number;
    readonly error: GLib.Error;
    readonly cancellable: Gio.Cancellable;
    readonly idle_finished_id: number;
    readonly idle_cancelled_id: number;
    cancel(): void;
    failed_from_error(error: GLib.Error): void;
    get_run_mode(): JobRunMode;
    is_failed(): boolean;
    is_finished(): boolean;
    run(): boolean;
    scheduler_push_job(priority: JobPriority): void;
    scheduler_update_job(priority: JobPriority): void;
    set_run_mode(run_mode: JobRunMode): void;
    succeeded(): void;
    static scheduler_get_running_thread_job(): Job;
}
export class JobAnnots extends Job {
    constructor(config?: properties);
}
export class JobAttachments extends Job {
    constructor(config?: properties);
}
export class JobExport extends Job {
    constructor(config?: properties);
    set_page(page: number): void;
}
export class JobFind extends Job {
    constructor(config?: properties);
    get_n_results(pages: number): number;
    get_options(): EvinceDocument.FindOptions;
    get_progress(): number;
    has_results(): boolean;
    set_options(options: EvinceDocument.FindOptions): void;
    vfunc_updated(page: number): void;
}
export class JobFonts extends Job {
    constructor(config?: properties);
    vfunc_updated(progress: number): void;
}
export class JobLayers extends Job {
    constructor(config?: properties);
}
export class JobLinks extends Job {
    constructor(config?: properties);
    get_model(): Gtk.TreeModel;
}
export class JobLoad extends Job {
    constructor(config?: properties);
    set_password(password: string): void;
    set_uri(uri: string): void;
}
export class JobLoadGFile extends Job {
    constructor(config?: properties);
    set_gfile(gfile: Gio.File): void;
    set_load_flags(flags: EvinceDocument.DocumentLoadFlags): void;
    set_password(password: string): void;
}
export class JobLoadStream extends Job {
    constructor(config?: properties);
    set_load_flags(flags: EvinceDocument.DocumentLoadFlags): void;
    set_password(password: string): void;
    set_stream(stream: Gio.InputStream): void;
}
export class JobPageData extends Job {
    constructor(config?: properties);
}
export class JobPrint extends Job {
    constructor(config?: properties);
    set_cairo(cr: cairo.Context): void;
    set_page(page: number): void;
}
export class JobRender extends Job {
    constructor(config?: properties);
    set_selection_info(selection_points: EvinceDocument.Rectangle, selection_style: EvinceDocument.SelectionStyle, text: Gdk.Color, base: Gdk.Color): void;
}
export class JobSave extends Job {
    constructor(config?: properties);
}
export class JobThumbnail extends Job {
    constructor(config?: properties);
    static new_with_target_size(document: EvinceDocument.Document, page: number, rotation: number, target_width: number, target_height: number): Job;
    set_has_frame(has_frame: boolean): void;
    set_output_format(format: JobThumbnailFormat): void;
}
export class PrintOperation extends GObject.Object {
    constructor(config?: properties);
    document: EvinceDocument.Document;
    cancel(): void;
    get_default_page_setup(): Gtk.PageSetup;
    get_embed_page_setup(): boolean;
    get_error(): void;
    get_job_name(): string;
    get_print_settings(): Gtk.PrintSettings;
    get_progress(): number;
    get_status(): string;
    run(parent: Gtk.Window): void;
    set_current_page(current_page: number): void;
    set_default_page_setup(page_setup: Gtk.PageSetup): void;
    set_embed_page_setup(embed: boolean): void;
    set_job_name(job_name: string): void;
    set_print_settings(print_settings: Gtk.PrintSettings): void;
    static exists_for_document(document: EvinceDocument.Document): boolean;
}
export class View extends Gtk.Container {
    constructor(config?: properties);
    add_text_markup_annotation_for_selected_text(): boolean;
    autoscroll_start(): void;
    autoscroll_stop(): void;
    begin_add_annotation(annot_type: EvinceDocument.AnnotationType): void;
    can_zoom_in(): boolean;
    can_zoom_out(): boolean;
    cancel_add_annotation(): void;
    copy(): void;
    copy_link_address(action: EvinceDocument.LinkAction): void;
    find_cancel(): void;
    find_next(): void;
    find_previous(): void;
    find_restart(page: number): void;
    find_search_changed(): void;
    find_set_highlight_search(value: boolean): void;
    find_set_result(page: number, result: number): void;
    find_started(job: JobFind): void;
    focus_annotation(annot_mapping: EvinceDocument.Mapping): void;
    get_allow_links_change_zoom(): boolean;
    get_enable_spellchecking(): boolean;
    get_has_selection(): boolean;
    get_page_extents(page: number, page_area: Gdk.Rectangle, border: Gtk.Border): boolean;
    get_page_extents_for_border(page: number, border: Gtk.Border, page_area: Gdk.Rectangle): boolean;
    get_selected_text(): string;
    handle_link(link: EvinceDocument.Link): void;
    hide_cursor(): void;
    highlight_forward_search(link: EvinceDocument.SourceLink): void;
    is_caret_navigation_enabled(): boolean;
    is_loading(): boolean;
    next_page(): boolean;
    previous_page(): boolean;
    reload(): void;
    remove_annotation(annot: EvinceDocument.Annotation): void;
    scroll(scroll: Gtk.ScrollType, horizontal: boolean): void;
    select_all(): void;
    set_allow_links_change_zoom(allowed: boolean): void;
    set_caret_cursor_position(page: number, offset: number): void;
    set_caret_navigation_enabled(enabled: boolean): void;
    set_enable_spellchecking(spellcheck: boolean): void;
    set_loading(loading: boolean): void;
    set_model(model: DocumentModel): void;
    set_page_cache_size(cache_size: number): void;
    show_cursor(): void;
    supports_caret_navigation(): boolean;
    zoom_in(): void;
    zoom_out(): void;
}
export class ViewPresentation extends Gtk.Widget {
    constructor(config?: properties);
    current_page: number;
    document: EvinceDocument.Document;
    inverted_colors: boolean;
    rotation: number;
    get_current_page(): number;
    get_rotation(): number;
    next_page(): void;
    previous_page(): void;
    set_rotation(rotation: number): void;
}