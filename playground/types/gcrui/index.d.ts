
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gck from "gck";
import * as Gcr from "gcr";
import * as Gtk from "gtk";
import * as GcrUi from "gcrui";
/**
 * gcrui.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
/**
 * Create and initialize a renderer for the given attributes and label. T
 * hese
 * renderers should have been preregistered via gcr_renderer_register().
 */
export function renderer_create(label: string | null, attrs: Gck.Attributes): Renderer | null;
/**
 * Register a renderer to be created when matching attributes are passed 
 * to
 * gcr_renderer_create().
 */
export function renderer_register(renderer_type: GType, attrs: Gck.Attributes): void;
/**
 * Register all the well known renderers for certificates and keys known 
 * to the
 * Gcr library.
 */
export function renderer_register_well_known(): void;
/**
 * Get an implementation of #GcrViewer that supports a view
 * of multiple renderers.
 */
export function viewer_new(): Viewer;
/**
 * Get an implementation of #GcrViewer that supports a scrolled view
 * of multiple renderers.
 */
export function viewer_new_scrolled(): Viewer;
export enum CollectionModelMode {
    LIST = 0,
    TREE = 1,
}
export class CertificateRenderer extends GObject.Object {
    constructor(config?: properties);
    attributes: Gck.Attributes;
    certificate: Gcr.Certificate;
    label: string;static new_for_attributes(label: string | null, attrs: object | null): CertificateRenderer;
    get_certificate(): Gcr.Certificate;
    set_certificate(certificate: Gcr.Certificate | null): void;
}
export class CertificateWidget extends Gtk.Bin {
    constructor(config?: properties);
    attributes: Gck.Attributes;
    certificate: Gcr.Certificate;
    get_certificate(): Gcr.Certificate | null;
    set_certificate(certificate: Gcr.Certificate | null): void;
}
export class CollectionModel extends GObject.Object {
    constructor(config?: properties);
    collection: Gcr.Collection;
    columns: object;static new_full(collection: Gcr.Collection, mode: CollectionModelMode, columns: Gcr.Column): CollectionModel;
    change_selected(iter: Gtk.TreeIter, selected: boolean): void;
    column_for_selected(): number;
    get_collection(): Gcr.Collection;
    get_selected_objects(): GLib.List;
    is_selected(iter: Gtk.TreeIter): boolean;
    iter_for_object(object: GObject.Object, iter: Gtk.TreeIter): boolean;
    object_for_iter(iter: Gtk.TreeIter): GObject.Object;
    set_collection(collection: Gcr.Collection | null): void;
    set_selected_objects(selected: GLib.List): void;
    toggle_selected(iter: Gtk.TreeIter): void;
}
export class ComboSelector extends Gtk.ComboBox {
    constructor(config?: properties);
    collection: Gcr.Collection;
    get_collection(): Gcr.Collection;
    get_selected(): GObject.Object;
    set_selected(selected: GObject.Object | null): void;
}
export class FailureRenderer extends GObject.Object {
    constructor(config?: properties);
    attributes: Gck.Attributes;
    label: string;
    static new_unsupported(label: string): Renderer;
}
export class ImportButton extends Gtk.Button {
    constructor(config?: properties);
    add_parsed(parsed: Gcr.Parsed): void;
    vfunc_imported(importer: Gcr.Importer, error: GLib.Error): void;
    vfunc_importing(importer: Gcr.Importer): void;
}
export class KeyRenderer extends GObject.Object {
    constructor(config?: properties);
    object: Gck.Object;
    get_attributes(): Gck.Attributes | null;
    set_attributes(attrs: Gck.Attributes | null): void;
}
export class KeyWidget extends Gtk.Bin {
    constructor(config?: properties);
    attributes: Gck.Attributes;
    get_attributes(): Gck.Attributes | null;
    set_attributes(attrs: Gck.Attributes | null): void;
}
export class ListSelector extends Gtk.TreeView {
    constructor(config?: properties);
    collection: Gcr.Collection;
    get_collection(): Gcr.Collection;
    get_selected(): GLib.List;
    set_selected(selected: GLib.List): void;
}
export class PromptDialog  {
    constructor(config?: properties);
    readonly choice_visible: boolean;
    readonly confirm_visible: boolean;
    readonly password_visible: boolean;
    readonly warning_visible: boolean;
    readonly pv: PromptDialogPrivate;
}
export class SecureEntryBuffer extends Gtk.EntryBuffer {
    constructor(config?: properties);
}
export class TreeSelector extends Gtk.TreeView {
    constructor(config?: properties);
    collection: Gcr.Collection;
    columns: object;
    get_collection(): Gcr.Collection;
    get_selected(): GLib.List;
    set_selected(selected: GLib.List): void;
}
export class UnlockOptionsWidget extends Gtk.Bin {
    constructor(config?: properties);
    choice: string;
    ttl: number;
    get_choice(): string;
    get_label(option: string): string;
    get_sensitive(option: string): boolean;
    get_ttl(): number;
    set_choice(option: string): void;
    set_label(option: string, text: string): void;
    set_sensitive(option: string, sensitive: boolean, reason: string): void;
    set_ttl(ttl: number): void;
}
export class ViewerWidget extends Gtk.Box {
    constructor(config?: properties);
    display_name: string;
    readonly parser: Gcr.Parser;
    clear_error(): void;
    get_display_name(): string;
    get_parser(): Gcr.Parser;
    get_viewer(): Viewer;
    load_bytes(display_name: string | null, data: GLib.Bytes): void;
    load_data(display_name: string | null, data: number[], n_data: number): void;
    load_file(file: Gio.File): void;
    set_display_name(display_name: string): void;
    show_error(message: string, error: GLib.Error | null): void;
}
export class CertificateRendererPrivate  {
    constructor(config?: properties);
}
export class CertificateWidgetPrivate  {
    constructor(config?: properties);
}
export class CollectionModelPrivate  {
    constructor(config?: properties);
}
export class ComboSelectorPrivate  {
    constructor(config?: properties);
}
export class FailureRendererPrivate  {
    constructor(config?: properties);
}
export class ImportButtonPrivate  {
    constructor(config?: properties);
}
export class KeyRendererPrivate  {
    constructor(config?: properties);
}
export class KeyWidgetPrivate  {
    constructor(config?: properties);
}
export class ListSelectorPrivate  {
    constructor(config?: properties);
}
export class PromptDialogPrivate  {
    constructor(config?: properties);
}
export class SecureEntryBufferPrivate  {
    constructor(config?: properties);
}
export class TreeSelectorPrivate  {
    constructor(config?: properties);
}
export class UnlockOptionsWidgetPrivate  {
    constructor(config?: properties);
}
export interface Renderer  {
    attributes: Gck.Attributes;
    label: string;
    emit_data_changed(): void;
    get_attributes(): Gck.Attributes | null;
    popuplate_popup(viewer: Viewer, menu: Gtk.Menu): void;
    render_view(viewer: Viewer): void;
    set_attributes(attrs: Gck.Attributes | null): void;
}
export interface Viewer  {
    add_renderer(renderer: Renderer): void;
    count_renderers(): number;
    get_renderer(index_: number): Renderer;
    insert_renderer(renderer: Renderer, before: Renderer | null): void;
    remove_renderer(renderer: Renderer): void;
}