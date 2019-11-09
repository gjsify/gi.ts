
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GMenu from "gmenu";
/**
 * gmenu.d.ts
 */
type properties = { [key: string]: any };
export enum TreeItemType {
    INVALID = 0,
    DIRECTORY = 1,
    ENTRY = 2,
    SEPARATOR = 3,
    HEADER = 4,
    ALIAS = 5,
}
export enum TreeFlags {
    NONE = 0,
    INCLUDE_EXCLUDED = 1,
    SHOW_EMPTY = 256,
    INCLUDE_NODISPLAY = 2,
    SHOW_ALL_SEPARATORS = 512,
    SORT_DISPLAY_NAME = 65536,
    INCLUDE_UNALLOCATED = 4,
}
export class Tree extends GObject.Object {constructor(config?: properties);
flags: TreeFlags;
menu_basename: string;
menu_path: string;static new_for_path(menu_path: string, flags: TreeFlags): Tree;
get_canonical_menu_path(): string;
get_directory_from_path(path: string): TreeDirectory;
get_entry_by_id(id: string): TreeEntry;
get_root_directory(): TreeDirectory;
load_sync(): boolean;
static item_ref(item: object | null): object | null;
static item_unref(item: object | null): void;
}
export class TreeAlias  {constructor(config?: properties);
get_aliased_directory(): TreeDirectory;
get_aliased_entry(): TreeEntry;
get_aliased_item_type(): TreeItemType;
get_directory(): TreeDirectory;
get_parent(): TreeDirectory;
get_tree(): Tree;
}
export class TreeClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class TreeDirectory  {constructor(config?: properties);
get_comment(): string;
get_desktop_file_path(): string;
get_generic_name(): string;
get_icon(): Gio.Icon;
get_is_nodisplay(): boolean;
get_menu_id(): string;
get_name(): string;
get_parent(): TreeDirectory;
get_tree(): Tree;
iter(): TreeIter;
make_path(entry: TreeEntry): string;
}
export class TreeEntry  {constructor(config?: properties);
get_app_info(): Gio.DesktopAppInfo;
get_desktop_file_id(): string;
get_desktop_file_path(): string;
get_is_excluded(): boolean;
get_is_nodisplay_recurse(): boolean;
get_is_unallocated(): boolean;
get_parent(): TreeDirectory;
get_tree(): Tree;
}
export class TreeHeader  {constructor(config?: properties);
get_directory(): TreeDirectory;
get_parent(): TreeDirectory;
get_tree(): Tree;
}
export class TreeIter  {constructor(config?: properties);
get_alias(): TreeAlias;
get_directory(): TreeDirectory;
get_entry(): TreeEntry;
get_header(): TreeHeader;
get_separator(): TreeSeparator;
next(): TreeItemType;
ref(): TreeIter;
unref(): void;
}
export class TreeSeparator  {constructor(config?: properties);
get_parent(): TreeDirectory;
get_tree(): Tree;
}