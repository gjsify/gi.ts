
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as GtkSpell from "gtkspell";
/**
 * gtkspell.d.ts
 */
type properties = { [key: string]: any };
/**
 * 
 */
export function error_quark(): GLib.Quark;
export enum Error {
    BACKEND = 0,
}
export class Checker extends GObject.InitiallyUnowned {constructor(config?: properties);
decode_language_codes: boolean;
add_to_dictionary(word: string): void;
attach(view: Gtk.TextView): boolean;
check_word(word: string): boolean;
detach(): void;
get_language(): string;
get_suggestions(word: string): GLib.List;
get_suggestions_menu(iter: Gtk.TextIter): Gtk.Widget;
ignore_word(word: string): void;
recheck_all(): void;
set_language(lang: string | null): boolean;
vfunc_language_changed(new_lang: string): void;
static decode_language_code(lang: string): string;
static get_from_text_view(view: Gtk.TextView): Checker;
static get_language_list(): GLib.List;
}
export class CheckerClass  {constructor(config?: properties);
readonly parent_class: GObject.InitiallyUnownedClass;
readonly language_changed: unknown;
}
export class CheckerPrivate  {constructor(config?: properties);
}