
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gst from "gst";
import * as GstInsertBin from "gstinsertbin";
/**
 * gstinsertbin.d.ts
 */
type properties = { [key: string]: any };
export type InsertBinCallback = (insertbin: InsertBin, element: Gst.Element, success: boolean, user_data: object | null) => void;
export class InsertBin extends Gst.Bin {constructor(config?: properties);
append(element: Gst.Element, callback: InsertBinCallback, user_data: object | null): void;
insert_after(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback, user_data: object | null): void;
insert_before(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback, user_data: object | null): void;
prepend(element: Gst.Element, callback: InsertBinCallback, user_data: object | null): void;
remove(element: Gst.Element, callback: InsertBinCallback, user_data: object | null): void;
remove(...args: never[]): never;
}
export class InsertBinClass  {constructor(config?: properties);
readonly parent_class: Gst.BinClass;
}
export class InsertBinPrivate  {constructor(config?: properties);
}