
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as WebKit2 from "webkit2";
import * as Devhelp from "devhelp";
/**
 * devhelp.d.ts
 */
type properties = { [key: string]: any };
/**
 * Binds @sidebar and @notebook:
 * - When the #DhSidebar::link-selected signal is emitted, open the URI i
 * n the
 *   active #DhWebView.
 * - On #GtkNotebook::switch-page or when the user clicks on a link, call
 * s
 *   dh_sidebar_select_uri() with the new active URI.
 * You need to call this function when the #DhNotebook is empty, i.e. bef
 * ore
 * adding the first #DhTab.
 * Note that this function doesn't take a “self” window parameter, to be 
 * more
 * flexible: it is possible to have several pairs of #DhSidebar/#DhNotebo
 * ok per
 * window, to show different #DhProfile's.
 */
export function application_window_bind_sidebar_and_notebook(sidebar: Sidebar, notebook: Notebook): void;
/**
 * Free the resources allocated by Devhelp. For example it unrefs the sin
 * gleton
 * objects.
 * It is not mandatory to call this function, it's just to be friendlier 
 * to
 * memory debugging tools. This function is meant to be called at the end
 *  of
 * main(). It can be called several times.
 */
export function finalize(): void;
/**
 * Initializes the Devhelp library (e.g. for the internationalization).
 * This function can be called several times, but is meant to be called a
 * t the
 * beginning of main(), before any other Devhelp function call.
 */
export function init(): void;
/**
 * 
 */
export function link_type_to_string(link_type: LinkType): string;
export enum LinkType {
    BOOK = 0,
    PAGE = 1,
    KEYWORD = 2,
    FUNCTION = 3,
    STRUCT = 4,
    MACRO = 5,
    ENUM = 6,
    TYPEDEF = 7,
    PROPERTY = 8,
    SIGNAL = 9,
}
export enum LinkFlags {
    NONE = 0,
    DEPRECATED = 1,
}
export class AssistantView extends WebKit2.WebView {constructor(config?: properties);
search(str: string): boolean;
set_link(link: Link | null): boolean;
}
export class Book extends GObject.Object {constructor(config?: properties);
cmp_by_id(b: Book): number;
cmp_by_title(b: Book): number;
get_completion(): Completion;
get_id(): string;
get_index_file(): Gio.File;
get_language(): string;
get_links(): GLib.List;
get_title(): string;
get_tree(): GLib.Node;
}
export class BookList extends GObject.Object {constructor(config?: properties);
add_book(book: Book): void;
get_books(): GLib.List;
remove_book(book: Book): void;
vfunc_add_book(book: Book): void;
vfunc_get_books(): GLib.List;
vfunc_remove_book(book: Book): void;
static get_default(): BookList;
}
export class BookListBuilder extends GObject.Object {constructor(config?: properties);
add_default_sub_book_lists(): void;
add_sub_book_list(sub_book_list: BookList): void;
create_object(): BookList;
read_books_disabled_setting(settings: Settings | null): void;
}
export class BookListDirectory extends BookList {constructor(config?: properties);
directory: Gio.File;
get_directory(): Gio.File;
}
export class BookManager extends GObject.Object {constructor(config?: properties);
populate(): void;
}
export class BookTree extends Gtk.TreeView {constructor(config?: properties);
profile: Profile;
get_profile(): Profile;
get_selected_link(): Link | null;
select_uri(uri: string): void;
}
export class Completion extends GObject.Object {constructor(config?: properties);
add_string(str: string): void;
complete(prefix: string): string | null;
sort(): void;
static aggregate_complete(completion_objects: GLib.List | null, prefix: string): string | null;
}
export class KeywordModel extends GObject.Object {constructor(config?: properties);
filter(search_string: string, current_book_id: string | null, profile: Profile | null): Link | null;
}
export class Notebook extends Gtk.Notebook {constructor(config?: properties);
profile: Profile;
get_active_tab(): Tab | null;
get_active_web_view(): WebView | null;
get_all_web_views(): GLib.List;
get_profile(): Profile;
open_new_tab(uri: string | null, switch_focus: boolean): void;
}
export class Profile  {constructor(config?: properties);
readonly priv: ProfilePrivate;
get_book_list(): BookList;
get_settings(): Settings;
static get_default(): Profile;
}
export class ProfileBuilder extends GObject.Object {constructor(config?: properties);
create_object(): Profile;
set_book_list(book_list: BookList): void;
set_settings(settings: Settings): void;
}
export class SearchBar extends Gtk.SearchBar {constructor(config?: properties);
notebook: Notebook;
get_notebook(): Notebook;
}
export class Settings  {constructor(config?: properties);
fixed_font: string;
group_books_by_language: boolean;
use_system_fonts: boolean;
variable_font: string;
readonly priv: SettingsPrivate;
bind_all(): void;
bind_fonts(): void;
bind_group_books_by_language(): void;
freeze_books_disabled_changed(): void;
get_fixed_font(): string;
get_group_books_by_language(): boolean;
get_selected_fonts(): [string,string];
get_use_system_fonts(): boolean;
get_variable_font(): string;
is_book_enabled(book: Book): boolean;
set_book_enabled(book: Book, enabled: boolean): void;
set_fixed_font(fixed_font: string): void;
set_group_books_by_language(group_books_by_language: boolean): void;
set_use_system_fonts(use_system_fonts: boolean): void;
set_variable_font(variable_font: string): void;
thaw_books_disabled_changed(): void;
static get_default(): Settings;
}
export class SettingsBuilder extends GObject.Object {constructor(config?: properties);
create_object(): Settings;
set_contents_path(contents_path: string): void;
set_fonts_path(fonts_path: string): void;
}
export class Sidebar extends Gtk.Grid {constructor(config?: properties);
profile: Profile;
get_profile(): Profile;
get_selected_link(): Link | null;
select_uri(uri: string): void;
set_search_focus(): void;
set_search_string(str: string): void;
vfunc_link_selected(link: Link): void;
static new2(profile: Profile | null): Sidebar;
}
export class Tab extends Gtk.Grid {constructor(config?: properties);
web_view: WebView;
get_web_view(): WebView;
}
export class TabLabel extends Gtk.Grid {constructor(config?: properties);
tab: Tab;
get_tab(): Tab | null;
}
export class WebView extends WebKit2.WebView {constructor(config?: properties);
profile: Profile;
can_reset_zoom(): boolean;
can_zoom_in(): boolean;
can_zoom_out(): boolean;
get_devhelp_title(): string;
get_profile(): Profile;
reset_zoom(): void;
search_next(): void;
search_previous(): void;
set_search_text(search_text: string | null): void;
zoom_in(): void;
zoom_out(): void;
vfunc_open_new_tab(uri: string): void;
}
export class AssistantViewClass  {constructor(config?: properties);
readonly parent_class: WebKit2.WebViewClass;
readonly padding: object[];
}
export class BookClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly padding: object[];
}
export class BookListBuilderClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly padding: object[];
}
export class BookListBuilderPrivate  {constructor(config?: properties);
}
export class BookListClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly add_book: unknown;
readonly remove_book: unknown;
readonly get_books: unknown;
readonly padding: object[];
}
export class BookListDirectoryClass  {constructor(config?: properties);
readonly parent_class: BookListClass;
readonly padding: object[];
}
export class BookListDirectoryPrivate  {constructor(config?: properties);
}
export class BookListPrivate  {constructor(config?: properties);
}
export class BookManagerClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly padding: object[];
}
export class BookTreeClass  {constructor(config?: properties);
readonly parent_class: Gtk.TreeViewClass;
readonly padding: object[];
}
export class CompletionClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly padding: object[];
}
export class CompletionPrivate  {constructor(config?: properties);
}
export class KeywordModelClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly padding: object[];
}
export class Link  {constructor(config?: properties);
static new_book(base_path: string, book_id: string, book_title: string, relative_url: string): Link;
belongs_to_page(page_id: string): boolean;
compare(b: Link): number;
get_book_id(): string;
get_book_title(): string;
get_flags(): LinkFlags;
get_link_type(): LinkType;
get_name(): string;
get_uri(): string | null;
match_relative_url(relative_url: string): boolean;
ref(): Link;
set_flags(flags: LinkFlags): void;
unref(): void;
}
export class NotebookClass  {constructor(config?: properties);
readonly parent_class: Gtk.NotebookClass;
readonly padding: object[];
}
export class NotebookPrivate  {constructor(config?: properties);
}
export class ProfileBuilderClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly padding: object[];
}
export class ProfileBuilderPrivate  {constructor(config?: properties);
}
export class ProfileClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly padding: object[];
}
export class ProfilePrivate  {constructor(config?: properties);
}
export class SearchBarClass  {constructor(config?: properties);
readonly parent_class: Gtk.SearchBarClass;
readonly padding: object[];
}
export class SearchBarPrivate  {constructor(config?: properties);
}
export class SettingsBuilderClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly padding: object[];
}
export class SettingsBuilderPrivate  {constructor(config?: properties);
}
export class SettingsClass  {constructor(config?: properties);
readonly books_disabled_changed: unknown;
readonly fonts_changed: unknown;
readonly padding: object[];
}
export class SettingsPrivate  {constructor(config?: properties);
}
export class SidebarClass  {constructor(config?: properties);
readonly parent_class: Gtk.GridClass;
readonly link_selected: unknown;
readonly padding: object[];
}
export class TabClass  {constructor(config?: properties);
readonly parent_class: Gtk.GridClass;
readonly padding: object[];
}
export class TabLabelClass  {constructor(config?: properties);
readonly parent_class: Gtk.GridClass;
readonly padding: object[];
}
export class TabLabelPrivate  {constructor(config?: properties);
}
export class TabPrivate  {constructor(config?: properties);
}
export class WebViewClass  {constructor(config?: properties);
readonly parent_class: WebKit2.WebViewClass;
readonly open_new_tab: unknown;
readonly padding: object[];
}
export class WebViewPrivate  {constructor(config?: properties);
}