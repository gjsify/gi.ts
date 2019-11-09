
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as cairo from "cairo";
import * as GXPS from "gxps";
/**
 * gxps.d.ts
 */
type properties = { [key: string]: any };
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION_STRING: string;
/**
 * 
 */
export function error_quark(): GLib.Quark;
export enum Error {
    SOURCE_NOT_FOUND = 0,
    FONT = 1,
    IMAGE = 2,
}
export enum FileError {
    FILE_ERROR_INVALID = 0,
}
export enum PageError {
    INVALID = 0,
    RENDER = 1,
    INVALID_ANCHOR = 2,
}
export class CoreProperties  {constructor(config?: properties);
archive: unknown;
source: string;
readonly priv: CorePropertiesPrivate;
get_category(): string;
get_content_status(): string;
get_content_type(): string;
get_created(): number;
get_creator(): string;
get_description(): string;
get_identifier(): string;
get_keywords(): string;
get_language(): string;
get_last_modified_by(): string;
get_last_printed(): number;
get_modified(): number;
get_revision(): string;
get_subject(): string;
get_title(): string;
get_version(): string;
}
export class Document  {constructor(config?: properties);
archive: unknown;
source: string;
readonly priv: DocumentPrivate;
get_n_pages(): number;
get_page(n_page: number): Page;
get_page_for_anchor(anchor: string): number;
get_page_size(n_page: number): [boolean, number | null,number | null];
get_structure(): DocumentStructure;
}
export class DocumentStructure  {constructor(config?: properties);
archive: unknown;
source: string;
readonly priv: DocumentStructurePrivate;
has_outline(): boolean;
static outline_iter_init(iter: OutlineIter, structure: DocumentStructure): boolean;
}
export class File extends GObject.Object {constructor(config?: properties);
file: Gio.File;
get_core_properties(): CoreProperties;
get_document(n_doc: number): Document;
get_document_for_link_target(target: LinkTarget): number;
get_n_documents(): number;
static error_quark(): GLib.Quark;
}
export class Page  {constructor(config?: properties);
archive: unknown;
source: string;
readonly priv: PagePrivate;
get_anchor_destination(anchor: string): [boolean, unknown];
get_links(): GLib.List;
get_size(): [number | null,number | null];
render(cr: cairo.Context): boolean;
static error_quark(): GLib.Quark;
}
export class CorePropertiesClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class CorePropertiesPrivate  {constructor(config?: properties);
}
export class DocumentClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class DocumentPrivate  {constructor(config?: properties);
}
export class DocumentStructureClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class DocumentStructurePrivate  {constructor(config?: properties);
}
export class FileClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class FilePrivate  {constructor(config?: properties);
}
export class Link  {constructor(config?: properties);
copy(): Link;
free(): void;
get_area(): [unknown];
get_target(): LinkTarget;
}
export class LinkTarget  {constructor(config?: properties);
copy(): LinkTarget;
free(): void;
get_anchor(): string;
get_uri(): string;
is_internal(): boolean;
}
export class OutlineIter  {constructor(config?: properties);
readonly dummy1: object;
readonly dummy2: object;
children(parent: OutlineIter): boolean;
get_description(): string;
get_target(): LinkTarget;
next(): boolean;
}
export class PageClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class PagePrivate  {constructor(config?: properties);
}