
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gtk from "gtk";
import * as Gspell from "gspell";
/**
 * gspell.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
/**
 * 
 */
export function checker_error_quark(): GLib.Quark;
/**
 * 
 */
export function language_get_available(): GLib.List;
/**
 * Finds the best available language based on the current locale.
 */
export function language_get_default(): Language | null;
/**
 * 
 */
export function language_lookup(language_code: string): Language | null;
export enum CheckerError {
    DICTIONARY = 0,
    NO_LANGUAGE_SET = 1,
}
export class Checker extends GObject.Object {
    constructor(config?: properties);
    language: Language;
    add_word_to_personal(word: string, word_length: number): void;
    add_word_to_session(word: string, word_length: number): void;
    check_word(word: string, word_length: number): boolean;
    clear_session(): void;
    get_language(): Language | null;
    get_suggestions(word: string, word_length: number): string[];
    set_correction(word: string, word_length: number, replacement: string, replacement_length: number): void;
    set_language(language: Language | null): void;
    vfunc_session_cleared(): void;
    vfunc_word_added_to_personal(word: string): void;
    vfunc_word_added_to_session(word: string): void;
}
export class CheckerDialog extends Gtk.Dialog {
    constructor(config?: properties);
    spell_navigator: Navigator;
    get_spell_navigator(): Navigator;
}
export class Entry  {
    constructor(config?: properties);
    entry: Gtk.Entry;
    inline_spell_checking: boolean;
    basic_setup(): void;
    get_entry(): Gtk.Entry;
    get_inline_spell_checking(): boolean;
    set_inline_spell_checking(enable: boolean): void;
    static get_from_gtk_entry(gtk_entry: Gtk.Entry): Entry;
}
export class EntryBuffer  {
    constructor(config?: properties);
    buffer: Gtk.EntryBuffer;
    spell_checker: Checker;
    get_buffer(): Gtk.EntryBuffer;
    get_spell_checker(): Checker | null;
    set_spell_checker(spell_checker: Checker | null): void;
    static get_from_gtk_entry_buffer(gtk_buffer: Gtk.EntryBuffer): EntryBuffer;
}
export class LanguageChooserButton extends Gtk.Button {
    constructor(config?: properties);
}
export class LanguageChooserDialog extends Gtk.Dialog {
    constructor(config?: properties);
}
export class NavigatorTextView  {
    constructor(config?: properties);
    view: Gtk.TextView;
    get_view(): Gtk.TextView;
    static _new(view: Gtk.TextView): Navigator;
}
export class TextBuffer  {
    constructor(config?: properties);
    buffer: Gtk.TextBuffer;
    spell_checker: Checker;
    get_buffer(): Gtk.TextBuffer;
    get_spell_checker(): Checker | null;
    set_spell_checker(spell_checker: Checker | null): void;
    static get_from_gtk_text_buffer(gtk_buffer: Gtk.TextBuffer): TextBuffer;
}
export class TextView  {
    constructor(config?: properties);
    enable_language_menu: boolean;
    inline_spell_checking: boolean;
    view: Gtk.TextView;
    basic_setup(): void;
    get_enable_language_menu(): boolean;
    get_inline_spell_checking(): boolean;
    get_view(): Gtk.TextView;
    set_enable_language_menu(enable_language_menu: boolean): void;
    set_inline_spell_checking(enable: boolean): void;
    static get_from_gtk_text_view(gtk_view: Gtk.TextView): TextView;
}
export class Language  {
    constructor(config?: properties);
    compare(language_b: Language): number;
    copy(): Language;
    free(): void;
    get_code(): string;
    get_name(): string;
    static get_available(): GLib.List;
    static get_default(): Language | null;
    static lookup(language_code: string): Language | null;
}
export interface LanguageChooser  {
    language: Language;
    language_code: string;
    get_language(): Language | null;
    get_language_code(): string;
    set_language(language: Language | null): void;
    set_language_code(language_code: string | null): void;
}
export interface Navigator  {
    change(word: string, change_to: string): void;
    change_all(word: string, change_to: string): void;
    goto_next(): [boolean, string | null,Checker | null];
}