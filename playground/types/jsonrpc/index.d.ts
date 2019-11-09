
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Json from "json";
import * as Jsonrpc from "jsonrpc";
/**
 * jsonrpc.d.ts
 */
type properties = { [key: string]: any };
export type ServerHandler = (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant, user_data: object | null) => void;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION_S: string;
/**
 * 
 */
export function message_new(first_param: object | null, ___: unknown[]): GLib.Variant;
/**
 * 
 */
export function message_new_array(first_param: object | null, ___: unknown[]): GLib.Variant;
/**
 * 
 */
export function message_parse(message: GLib.Variant, ___: unknown[]): boolean;
/**
 * 
 */
export function message_parse_array(iter: GLib.VariantIter, ___: unknown[]): boolean;
export enum ClientError {
    PARSE_ERROR = -32700,
    INVALID_REQUEST = -32600,
    METHOD_NOT_FOUND = -32601,
    INVALID_PARAMS = -32602,
    INTERNAL_ERROR = -32603,
}
export class Client extends GObject.Object {constructor(config?: properties);
io_stream: Gio.IOStream;
use_gvariant: boolean;
call(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];
call_async(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
call_finish(result: Gio.AsyncResult): [boolean, GLib.Variant | null];
call_with_id_async(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): [GLib.Variant | null];
close(cancellable: Gio.Cancellable | null): boolean;
close_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
close_finish(result: Gio.AsyncResult): boolean;
get_use_gvariant(): boolean;
reply(id: GLib.Variant, result: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;
reply_async(id: GLib.Variant, result: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
reply_error_async(id: GLib.Variant, code: number, message: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
reply_error_finish(result: Gio.AsyncResult): boolean;
reply_finish(result: Gio.AsyncResult): boolean;
send_notification(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;
send_notification_async(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
send_notification_finish(result: Gio.AsyncResult): boolean;
set_use_gvariant(use_gvariant: boolean): void;
start_listening(): void;
vfunc_failed(): void;
vfunc_handle_call(method: string, id: GLib.Variant, params: GLib.Variant): boolean;
vfunc_notification(method_name: string, params: GLib.Variant): void;
static error_quark(): GLib.Quark;
}
export class InputStream extends Gio.DataInputStream {constructor(config?: properties);
read_message(cancellable: Gio.Cancellable | null, message: GLib.Variant): boolean;
read_message_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
read_message_finish(result: Gio.AsyncResult, message: GLib.Variant): boolean;
}
export class OutputStream extends Gio.DataOutputStream {constructor(config?: properties);
use_gvariant: boolean;
get_use_gvariant(): boolean;
set_use_gvariant(use_gvariant: boolean): void;
write_message(message: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;
write_message_async(message: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
write_message_finish(result: Gio.AsyncResult): boolean;
}
export class Server extends GObject.Object {constructor(config?: properties);
accept_io_stream(io_stream: Gio.IOStream): void;
add_handler(method: string, handler: ServerHandler, handler_data: object | null, handler_data_destroy: GLib.DestroyNotify): number;
foreach(foreach_func: GLib.Func, user_data: object | null): void;
remove_handler(handler_id: number): void;
vfunc_client_accepted(client: Client): void;
vfunc_client_closed(client: Client): void;
vfunc_handle_call(client: Client, method: string, id: GLib.Variant, params: GLib.Variant): boolean;
vfunc_notification(client: Client, method: string, params: GLib.Variant): void;
}
export class ClientClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly notification: unknown;
readonly handle_call: unknown;
readonly failed: unknown;
readonly _reserved2: object;
readonly _reserved3: object;
readonly _reserved4: object;
readonly _reserved5: object;
readonly _reserved6: object;
readonly _reserved7: object;
readonly _reserved8: object;
}
export class InputStreamClass  {constructor(config?: properties);
readonly parent_class: Gio.DataInputStreamClass;
readonly _reserved1: object;
readonly _reserved2: object;
readonly _reserved3: object;
readonly _reserved4: object;
readonly _reserved5: object;
readonly _reserved6: object;
readonly _reserved7: object;
readonly _reserved8: object;
}
export class MessageAny  {constructor(config?: properties);
magic: MessageMagic;
}
export class MessageGetBoolean  {constructor(config?: properties);
magic: MessageMagic;
valptr: boolean;
}
export class MessageGetDict  {constructor(config?: properties);
magic: MessageMagic;
dictptr: GLib.VariantDict;
}
export class MessageGetDouble  {constructor(config?: properties);
magic: MessageMagic;
valptr: number;
}
export class MessageGetInt32  {constructor(config?: properties);
magic: MessageMagic;
valptr: number;
}
export class MessageGetInt64  {constructor(config?: properties);
magic: MessageMagic;
valptr: number;
}
export class MessageGetIter  {constructor(config?: properties);
magic: MessageMagic;
iterptr: GLib.VariantIter;
}
export class MessageGetString  {constructor(config?: properties);
magic: MessageMagic;
valptr: string;
}
export class MessageGetStrv  {constructor(config?: properties);
magic: MessageMagic;
valptr: string;
}
export class MessageGetVariant  {constructor(config?: properties);
magic: MessageMagic;
variantptr: GLib.Variant;
}
export class MessageMagic  {constructor(config?: properties);
bytes: number[];
}
export class MessagePutBoolean  {constructor(config?: properties);
magic: MessageMagic;
val: boolean;
}
export class MessagePutDouble  {constructor(config?: properties);
magic: MessageMagic;
val: number;
}
export class MessagePutInt32  {constructor(config?: properties);
magic: MessageMagic;
val: number;
}
export class MessagePutInt64  {constructor(config?: properties);
magic: MessageMagic;
val: number;
}
export class MessagePutString  {constructor(config?: properties);
magic: MessageMagic;
val: string;
}
export class MessagePutStrv  {constructor(config?: properties);
magic: MessageMagic;
val: string;
}
export class OutputStreamClass  {constructor(config?: properties);
readonly parent_class: Gio.DataOutputStreamClass;
readonly _reserved1: object;
readonly _reserved2: object;
readonly _reserved3: object;
readonly _reserved4: object;
readonly _reserved5: object;
readonly _reserved6: object;
readonly _reserved7: object;
readonly _reserved8: object;
readonly _reserved9: object;
readonly _reserved10: object;
readonly _reserved11: object;
readonly _reserved12: object;
}
export class ServerClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly handle_call: unknown;
readonly notification: unknown;
readonly client_accepted: unknown;
readonly client_closed: unknown;
readonly _reserved1: object;
readonly _reserved2: object;
readonly _reserved3: object;
readonly _reserved4: object;
readonly _reserved5: object;
readonly _reserved6: object;
}