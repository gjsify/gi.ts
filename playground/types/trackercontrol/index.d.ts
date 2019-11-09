
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as TrackerControl from "trackercontrol";
/**
 * trackercontrol.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export enum MinerManagerError {
    NOT_AVAILABLE = 0,
    NOENT = 1,
}
export class MinerManager extends GObject.Object {
    constructor(config?: properties);
    auto_start: boolean;
    domain_ontology: string;static new_full(auto_start: boolean): MinerManager;
    get_available(): string[];
    get_description(miner: string): string;
    get_display_name(miner: string): string;
    get_running(): string[];
    get_status(miner: string): [boolean, string | null,number | null,number | null];
    index_file(file: Gio.File, cancellable: Gio.Cancellable | null): boolean;
    index_file_async(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    index_file_finish(result: Gio.AsyncResult): boolean;
    index_file_for_process(file: Gio.File, cancellable: Gio.Cancellable | null): boolean;
    index_file_for_process_async(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    index_file_for_process_finish(result: Gio.AsyncResult): boolean;
    is_active(miner: string): boolean;
    is_paused(miner: string): [boolean, string[] | null,string[] | null];
    pause(miner: string, reason: string): [boolean, number | null];
    pause_for_process(miner: string, reason: string): [boolean, number | null];
    reindex_by_mimetype(mimetypes: string[]): boolean;
    resume(miner: string, cookie: number): boolean;
    vfunc_miner_activated(miner_name: string): void;
    vfunc_miner_deactivated(miner_name: string): void;
    vfunc_miner_paused(miner_name: string): void;
    vfunc_miner_progress(miner_name: string, status: string, progress: number): void;
    vfunc_miner_resumed(miner_name: string): void;
    static error_quark(): GLib.Quark;
}