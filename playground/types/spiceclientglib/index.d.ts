
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GstBase from "gstbase";
import * as SpiceClientGLib from "spiceclientglib";
/**
 * spiceclientglib.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type msg_handler = (channel: Channel, _in: MsgIn) => void;
export const GTK_MAJOR_VERSION: number;
export const GTK_MICRO_VERSION: number;
export const GTK_MINOR_VERSION: number;
/**
 * Gets a #GQuark representing the string "spice-client-error-quark"
 */
export function client_error_quark(): GLib.Quark;
/**
 * Tells the spice server to change the preferred image compression
 * for the @channel.
 */
export function display_change_preferred_compression(channel: Channel, compression: number): void;
/**
 * Tells the spice server to change the preferred video codec type for
 * streaming in @channel. Application can set only one preferred video co
 * dec per
 * display channel.
 */
export function display_change_preferred_video_codec_type(channel: Channel, codec_type: number): void;
/**
 * Retrieves the GL scanout if available
 */
export function display_get_gl_scanout(channel: DisplayChannel): GlScanout;
/**
 * Retrieve primary display surface @surface_id.
 */
export function display_get_primary(channel: Channel, surface_id: number, primary: DisplayPrimary): boolean;
/**
 * After a SpiceDisplayChannel::gl-draw is emitted, the client should
 * draw the current display with the current GL scanout, and must
 * release the GL resource with a call to spice_display_gl_draw_done()
 * (failing to do so for each gl-draw may result in a frozen display).
 */
export function display_gl_draw_done(channel: DisplayChannel): void;
/**
 * Gets commandline options.
 * Bindings for other languages are available since 0.32
 */
export function get_option_group(): GLib.OptionGroup;
/**
 * Press a mouse button.
 */
export function inputs_button_press(channel: InputsChannel, button: number, button_state: number): void;
/**
 * Release a button.
 */
export function inputs_button_release(channel: InputsChannel, button: number, button_state: number): void;
/**
 * Press a key.
 */
export function inputs_key_press(channel: InputsChannel, scancode: number): void;
/**
 * Press and release a key event atomically (in the same message).
 */
export function inputs_key_press_and_release(channel: InputsChannel, scancode: number): void;
/**
 * Release a key.
 */
export function inputs_key_release(channel: InputsChannel, scancode: number): void;
/**
 * Change mouse position (used in SPICE_MOUSE_MODE_SERVER).
 */
export function inputs_motion(channel: InputsChannel, dx: number, dy: number, button_state: number): void;
/**
 * Change mouse position (used in SPICE_MOUSE_MODE_CLIENT).
 */
export function inputs_position(channel: InputsChannel, x: number, y: number, display: number, button_state: number): void;
/**
 * Set the keyboard locks on the guest (Caps, Num, Scroll..)
 */
export function inputs_set_key_locks(channel: InputsChannel, locks: number): void;
/**
 * Test capability of a remote agent.
 */
export function main_agent_test_capability(channel: MainChannel, cap: number): boolean;
/**
 * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD @types.
 */
export function main_clipboard_grab(channel: MainChannel, types: number, ntypes: number): void;
/**
 * Send the clipboard data to the guest.
 */
export function main_clipboard_notify(channel: MainChannel, type: number, data: number, size: number): void;
/**
 * Release the clipboard (for example, when the client loses the
 * clipboard grab): Inform the guest no clipboard data is available.
 */
export function main_clipboard_release(channel: MainChannel): void;
/**
 * Request clipboard data of @type from the guest. The reply is sent
 * through the #SpiceMainChannel::main-clipboard signal.
 */
export function main_clipboard_request(channel: MainChannel, type: number): void;
/**
 * Grab the guest clipboard, with #VD_AGENT_CLIPBOARD @types.
 */
export function main_clipboard_selection_grab(channel: MainChannel, selection: number, types: number, ntypes: number): void;
/**
 * Send the clipboard data to the guest.
 */
export function main_clipboard_selection_notify(channel: MainChannel, selection: number, type: number, data: number, size: number): void;
/**
 * Release the clipboard (for example, when the client loses the
 * clipboard grab): Inform the guest no clipboard data is available.
 */
export function main_clipboard_selection_release(channel: MainChannel, selection: number): void;
/**
 * Request clipboard data of @type from the guest. The reply is sent
 * through the #SpiceMainChannel::main-clipboard-selection signal.
 */
export function main_clipboard_selection_request(channel: MainChannel, selection: number, type: number): void;
/**
 * See: spice_main_channel_file_copy_async()
 */
export function main_file_copy_async(channel: MainChannel, sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, progress_callback_data: object | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Finishes copying the file started with
 * spice_main_file_copy_async().
 */
export function main_file_copy_finish(channel: MainChannel, result: Gio.AsyncResult): boolean;
/**
 * Request a mouse mode to the server. The server may not be able to
 * change the mouse mode, but spice-gtk will try to request it
 * when possible.
 */
export function main_request_mouse_mode(channel: MainChannel, mode: number): void;
/**
 * Send monitors configuration previously set with
 * spice_main_set_display() and spice_main_set_display_enabled()
 */
export function main_send_monitor_config(channel: MainChannel): boolean;
/**
 * Notify the guest of screen resolution change. The notification is
 * sent 1 second later, if no further changes happen.
 */
export function main_set_display(channel: MainChannel, id: number, x: number, y: number, width: number, height: number): void;
/**
 * When sending monitor configuration to agent guest, don't set
 * display @id, which the agent translates to disabling the display
 * id. Note: this will take effect next time the monitor
 * configuration is sent.
 */
export function main_set_display_enabled(channel: MainChannel, id: number, enabled: boolean): void;
/**
 * Update the display @id resolution.
 * If @update is %TRUE, the remote configuration will be updated too
 * after 1 second without further changes. You can send when you want
 * without delay the new configuration to the remote with
 * spice_main_send_monitor_config()
 */
export function main_update_display(channel: MainChannel, id: number, x: number, y: number, width: number, height: number, update: boolean): void;
/**
 * When sending monitor configuration to agent guest, if @enabled is %FAL
 * SE,
 * don't set display @id, which the agent translates to disabling the dis
 * play
 * id. If @enabled is %TRUE, the monitor will be included in the next mon
 * itor
 * update. Note: this will take effect next time the monitor configuratio
 * n is
 * sent.
 * If @update is %FALSE, no server update will be triggered by this call,
 *  but
 * the value will be saved and used in the next configuration update.
 */
export function main_update_display_enabled(channel: MainChannel, id: number, enabled: boolean, update: boolean): void;
/**
 * Send an event to the port.
 * Note: The values SPICE_PORT_EVENT_CLOSED and
 * SPICE_PORT_EVENT_OPENED are managed by the channel connection
 * state.
 */
export function port_event(port: PortChannel, event: number): void;
/**
 * Request an asynchronous write of count bytes from @buffer into the
 * @port. When the operation is finished @callback will be called. You
 * can then call spice_port_write_finish() to get the result of
 * the operation.
 */
export function port_write_async(port: PortChannel, buffer: number[], count: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
/**
 * Finishes a port write operation.
 */
export function port_write_finish(port: PortChannel, result: Gio.AsyncResult): number;
/**
 * Send recorded PCM data to the guest.
 */
export function record_send_data(channel: RecordChannel, data: object | null, bytes: number, time: number): void;
/**
 * Set various properties on @session, according to the commandline
 * arguments given to spice_get_option_group() option group.
 */
export function set_session_option(session: Session): void;
/**
 * 
 */
export function util_get_debug(): boolean;
/**
 * Gets the version string
 */
export function util_get_version_string(): string;
/**
 * Enable or disable Spice-GTK debugging messages.
 */
export function util_set_debug(enabled: boolean): void;
/**
 * Creates a string representation of @uuid, of the form
 * "06e023d5-86d8-420e-8103-383e4566087a"
 */
export function uuid_to_string(uuid: number): string;
export enum ChannelEvent {
    NONE = 0,
    OPENED = 10,
    SWITCHING = 11,
    CLOSED = 12,
    ERROR_CONNECT = 20,
    ERROR_TLS = 21,
    ERROR_LINK = 22,
    ERROR_AUTH = 23,
    ERROR_IO = 24,
}
export enum ClientError {
    FAILED = 0,
    USB_DEVICE_REJECTED = 1,
    USB_DEVICE_LOST = 2,
    AUTH_NEEDS_PASSWORD = 3,
    AUTH_NEEDS_USERNAME = 4,
    AUTH_NEEDS_PASSWORD_AND_USERNAME = 5,
    USB_SERVICE = 6,
}
export enum QmpPortVmAction {
    QUIT = 0,
    RESET = 1,
    POWER_DOWN = 2,
    PAUSE = 3,
    CONTINUE = 4,
    LAST = 5,
}
export enum SessionMigration {
    NONE = 0,
    SWITCHING = 1,
    MIGRATING = 2,
    CONNECTING = 3,
}
export enum InputsLock {
    SCROLL_LOCK = 1,
    NUM_LOCK = 2,
    CAPS_LOCK = 4,
}
export enum SessionVerify {
    PUBKEY = 1,
    HOSTNAME = 2,
    SUBJECT = 4,
}
export class Audio extends GObject.Object {
    constructor(config?: properties);
    main_context: GLib.MainContext;
    session: Session;
    vfunc_connect_channel(channel: Channel): boolean;
    vfunc_get_playback_volume_info_async(cancellable: Gio.Cancellable | null, main_channel: MainChannel, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    vfunc_get_playback_volume_info_finish(res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number): boolean;
    vfunc_get_record_volume_info_async(cancellable: Gio.Cancellable | null, main_channel: MainChannel, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    vfunc_get_record_volume_info_finish(res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number): boolean;
    static get(session: Session, context: GLib.MainContext | null): Audio;
}
export class Channel extends GObject.Object {
    constructor(config?: properties);
    channel_id: number;
    channel_type: number;
    readonly socket: Gio.Socket;
    spice_session: Session;
    readonly total_read_bytes: number;
    connect(): boolean;
    destroy(): void;
    disconnect(reason: ChannelEvent): void;
    flush_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    flush_finish(result: Gio.AsyncResult): boolean;
    get_error(): GLib.Error;
    open_fd(fd: number): boolean;
    set_capability(cap: number): void;
    test_capability(cap: number): boolean;
    test_common_capability(cap: number): boolean;
    vfunc_channel_event(event: ChannelEvent): void;
    vfunc_channel_reset(migrating: boolean): void;
    vfunc_channel_send_migration_handshake(): void;
    vfunc_channel_up(): void;
    vfunc_handle_msg(msg: MsgIn): void;
    vfunc_iterate_read(): void;
    vfunc_iterate_write(): void;
    vfunc_open_fd(with_tls: number): void;
    static string_to_type(str: string): number;
    static type_to_string(type: number): string;
}
export class CursorChannel  {
    constructor(config?: properties);
    readonly cursor: CursorShape;
    readonly priv: CursorChannelPrivate;
}
export class DisplayChannel  {
    constructor(config?: properties);
    readonly gl_scanout: GlScanout;
    readonly height: number;
    readonly monitors: object[];
    readonly monitors_max: number;
    readonly width: number;
    readonly priv: DisplayChannelPrivate;
    get_gl_scanout(): GlScanout;
    gl_draw_done(): void;
    static change_preferred_compression(channel: Channel, compression: number): void;
    static change_preferred_video_codec_type(channel: Channel, codec_type: number): void;
    static get_primary(channel: Channel, surface_id: number, primary: DisplayPrimary): boolean;
}
export class FileTransferTask  {
    constructor(config?: properties);
    cancellable: Gio.Cancellable;
    channel: MainChannel;
    file: Gio.File;
    id: number;
    readonly progress: number;
    readonly total_bytes: number;
    readonly transferred_bytes: number;
    cancel(): void;
    get_filename(): string;
    get_progress(): number;
    get_total_bytes(): number;
    get_transferred_bytes(): number;
}
export class InputsChannel  {
    constructor(config?: properties);
    readonly key_modifiers: number;
    readonly priv: InputsChannelPrivate;
    button_press(button: number, button_state: number): void;
    button_release(button: number, button_state: number): void;
    key_press(scancode: number): void;
    key_press_and_release(scancode: number): void;
    key_release(scancode: number): void;
    motion(dx: number, dy: number, button_state: number): void;
    position(x: number, y: number, display: number, button_state: number): void;
    set_key_locks(locks: number): void;
}
export class MainChannel  {
    constructor(config?: properties);
    readonly agent_caps_0: number;
    readonly agent_connected: boolean;
    color_depth: number;
    disable_animation: boolean;
    disable_display_align: boolean;
    disable_display_position: boolean;
    disable_font_smooth: boolean;
    disable_wallpaper: boolean;
    max_clipboard: number;
    readonly mouse_mode: number;
    readonly priv: MainChannelPrivate;
    agent_test_capability(cap: number): boolean;
    clipboard_selection_grab(selection: number, types: number, ntypes: number): void;
    clipboard_selection_notify(selection: number, type: number, data: number, size: number): void;
    clipboard_selection_release(selection: number): void;
    clipboard_selection_request(selection: number, type: number): void;
    file_copy_async(sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, progress_callback_data: object | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    file_copy_finish(result: Gio.AsyncResult): boolean;
    request_mouse_mode(mode: number): void;
    send_monitor_config(): boolean;
    update_display(id: number, x: number, y: number, width: number, height: number, update: boolean): void;
    update_display_enabled(id: number, enabled: boolean, update: boolean): void;
}
export class PlaybackChannel  {
    constructor(config?: properties);
    min_latency: number;
    mute: boolean;
    nchannels: number;
    volume: object;
    readonly priv: PlaybackChannelPrivate;
    set_delay(delay_ms: number): void;
}
export class PortChannel  {
    constructor(config?: properties);
    readonly port_name: string;
    readonly port_opened: boolean;
    readonly priv: PortChannelPrivate;
    event(event: number): void;
    write_async(buffer: number[], count: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    write_finish(result: Gio.AsyncResult): number;
}
export class QmpPort  {
    constructor(config?: properties);
    channel: PortChannel;
    readonly ready: boolean;
    query_status_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    query_status_finish(result: Gio.AsyncResult): QmpStatus;
    vm_action_async(action: QmpPortVmAction, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    vm_action_finish(result: Gio.AsyncResult): boolean;
    static get(channel: PortChannel): QmpPort;
}
export class RecordChannel  {
    constructor(config?: properties);
    mute: boolean;
    nchannels: number;
    volume: object;
    readonly priv: RecordChannelPrivate;
    send_data(data: object | null, bytes: number, time: number): void;
}
export class Session extends GObject.Object {
    constructor(config?: properties);
    ca: number[];
    ca_file: string;
    cache_size: number;
    cert_subject: string;
    ciphers: string;
    client_sockets: boolean;
    color_depth: number;
    disable_effects: string[];
    enable_audio: boolean;
    enable_smartcard: boolean;
    enable_usbredir: boolean;
    gl_scanout: boolean;
    glz_window_size: number;
    host: string;
    inhibit_keyboard_grab: boolean;
    readonly migration_state: SessionMigration;
    readonly name: string;
    password: string;
    port: string;
    protocol: number;
    proxy: string;
    pubkey: number[];
    read_only: boolean;
    secure_channels: string[];
    share_dir_ro: boolean;
    shared_dir: string;
    smartcard_certificates: string[];
    smartcard_db: string;
    tls_port: string;
    unix_path: string;
    uri: string;
    username: string;
    readonly uuid: object;
    verify: SessionVerify;
    connect(): boolean;
    disconnect(): void;
    get_channels(): GLib.List;
    get_proxy_uri(): URI;
    get_read_only(): boolean;
    has_channel_type(type: number): boolean;
    is_for_migration(): boolean;
    open_fd(fd: number): boolean;
    vfunc_channel_destroy(channel: Channel): void;
    vfunc_channel_new(channel: Channel): void;
}
export class SmartcardChannel  {
    constructor(config?: properties);
    readonly priv: SmartcardChannelPrivate;
}
export class SmartcardManager  {
    constructor(config?: properties);
    readonly priv: SmartcardManagerPrivate;
    get_readers(): GLib.List;
    insert_card(): boolean;
    remove_card(): boolean;
    static get(): SmartcardManager;
}
export class URI  {
    constructor(config?: properties);
    hostname: string;
    password: string;
    port: number;
    scheme: string;
    user: string;
    get_hostname(): string;
    get_password(): string;
    get_port(): number;
    get_scheme(): string;
    get_user(): string;
    set_hostname(hostname: string): void;
    set_password(password: string): void;
    set_port(port: number): void;
    set_scheme(scheme: string): void;
    set_user(user: string): void;
    to_string(): string;
}
export class UsbDeviceManager  {
    constructor(config?: properties);
    auto_connect: boolean;
    auto_connect_filter: string;
    readonly free_channels: number;
    redirect_on_connect: string;
    session: Session;
    readonly priv: UsbDeviceManagerPrivate;
    can_redirect_device(device: UsbDevice): boolean;
    connect_device_async(device: UsbDevice, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    connect_device_finish(res: Gio.AsyncResult): boolean;
    disconnect_device(device: UsbDevice): void;
    disconnect_device_async(device: UsbDevice, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
    disconnect_device_finish(res: Gio.AsyncResult): boolean;
    get_devices(): UsbDevice[];
    get_devices_with_filter(filter: string | null): UsbDevice[];
    is_device_connected(device: UsbDevice): boolean;
    is_redirecting(): boolean;
    static get(session: Session): UsbDeviceManager;
}
export class UsbredirChannel  {
    constructor(config?: properties);
    readonly priv: UsbredirChannelPrivate;
}
export class WebdavChannel  {
    constructor(config?: properties);
    readonly priv: WebdavChannelPrivate;
}
export class AudioPrivate  {
    constructor(config?: properties);
}
export class ChannelClassPrivate  {
    constructor(config?: properties);
}
export class ChannelPrivate  {
    constructor(config?: properties);
}
export class CursorChannelPrivate  {
    constructor(config?: properties);
}
export class CursorShape  {
    constructor(config?: properties);
    width: number;
    height: number;
    hot_spot_x: number;
    hot_spot_y: number;
    data: object;
}
export class DisplayChannelPrivate  {
    constructor(config?: properties);
}
export class DisplayMonitorConfig  {
    constructor(config?: properties);
    id: number;
    surface_id: number;
    x: number;
    y: number;
    width: number;
    height: number;
}
export class DisplayPrimary  {
    constructor(config?: properties);
    format: object;
    width: number;
    height: number;
    stride: number;
    shmid: number;
    data: number;
    marked: boolean;
}
export class GlScanout  {
    constructor(config?: properties);
    fd: number;
    width: number;
    height: number;
    stride: number;
    format: number;
    y0top: boolean;
    free(): void;
}
export class InputsChannelPrivate  {
    constructor(config?: properties);
}
export class MainChannelPrivate  {
    constructor(config?: properties);
}
export class MsgIn  {
    constructor(config?: properties);
}
export class MsgOut  {
    constructor(config?: properties);
}
export class PlaybackChannelPrivate  {
    constructor(config?: properties);
}
export class PortChannelPrivate  {
    constructor(config?: properties);
}
export class QmpStatus  {
    constructor(config?: properties);
    version: number;
    running: boolean;
    singlestep: boolean;
    status: string;
    ref(): QmpStatus;
    unref(): void;
}
export class RecordChannelPrivate  {
    constructor(config?: properties);
}
export class SessionPrivate  {
    constructor(config?: properties);
}
export class SmartcardChannelPrivate  {
    constructor(config?: properties);
}
export class SmartcardManagerPrivate  {
    constructor(config?: properties);
}
export class SmartcardReader  {
    constructor(config?: properties);
    insert_card(): boolean;
    is_software(): boolean;
    remove_card(): boolean;
}
export class URIPrivate  {
    constructor(config?: properties);
}
export class UsbDevice  {
    constructor(config?: properties);
    get_description(format: string | null): string;
    get_libusb_device(): object | null;
}
export class UsbDeviceManagerPrivate  {
    constructor(config?: properties);
}
export class UsbredirChannelPrivate  {
    constructor(config?: properties);
}
export class WebdavChannelPrivate  {
    constructor(config?: properties);
}