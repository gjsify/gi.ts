
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GModule from "gmodule";
import * as Gst from "gst";
/**
 * gst.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type BufferForeachMetaFunc = (buffer: Buffer, user_data: object | null) => boolean;
export type BufferListFunc = (idx: number, user_data: object | null) => boolean;
export type BusFunc = (bus: Bus, message: Message, user_data: object | null) => boolean;
export type BusSyncHandler = (bus: Bus, message: Message, user_data: object | null) => BusSyncReply;
export type CapsFilterMapFunc = (features: CapsFeatures, structure: Structure, user_data: object | null) => boolean;
export type CapsForeachFunc = (features: CapsFeatures, structure: Structure, user_data: object | null) => boolean;
export type CapsMapFunc = (features: CapsFeatures, structure: Structure, user_data: object | null) => boolean;
export type ClockCallback = (clock: Clock, time: ClockTime, id: ClockID, user_data: object | null) => boolean;
export type ControlBindingConvert = (binding: ControlBinding, src_value: number, dest_value: GObject.Value) => void;
export type ControlSourceGetValue = (self: ControlSource, timestamp: ClockTime, value: number) => boolean;
export type ControlSourceGetValueArray = (self: ControlSource, timestamp: ClockTime, interval: ClockTime, n_values: number, values: number) => boolean;
export type DebugFuncPtr = () => void;
export type ElementCallAsyncFunc = (element: Element, user_data: object | null) => void;
export type ElementForeachPadFunc = (element: Element, pad: Pad, user_data: object | null) => boolean;
export type IteratorCopyFunction = (it: Iterator, copy: Iterator) => void;
export type IteratorFoldFunction = (item: GObject.Value, ret: GObject.Value, user_data: object | null) => boolean;
export type IteratorForeachFunction = (item: GObject.Value, user_data: object | null) => void;
export type IteratorFreeFunction = (it: Iterator) => void;
export type IteratorItemFunction = (it: Iterator, item: GObject.Value) => IteratorItem;
export type IteratorNextFunction = (it: Iterator, result: GObject.Value) => IteratorResult;
export type IteratorResyncFunction = (it: Iterator) => void;
export type LogFunction = (category: DebugCategory, level: DebugLevel, file: string, _function: string, line: number, object: GObject.Object, message: DebugMessage, user_data: object | null) => void;
export type MemoryCopyFunction = (mem: Memory, offset: number, size: number) => Memory;
export type MemoryIsSpanFunction = (mem1: Memory, mem2: Memory, offset: number) => boolean;
export type MemoryMapFullFunction = (mem: Memory, info: MapInfo, maxsize: number) => object | null;
export type MemoryMapFunction = (mem: Memory, maxsize: number, flags: MapFlags) => object | null;
export type MemoryShareFunction = (mem: Memory, offset: number, size: number) => Memory;
export type MemoryUnmapFullFunction = (mem: Memory, info: MapInfo) => void;
export type MemoryUnmapFunction = (mem: Memory) => void;
export type MetaFreeFunction = (meta: Meta, buffer: Buffer) => void;
export type MetaInitFunction = (meta: Meta, params: object | null, buffer: Buffer) => boolean;
export type MetaTransformFunction = (transbuf: Buffer, meta: Meta, buffer: Buffer, type: GLib.Quark, data: object | null) => boolean;
export type MiniObjectDisposeFunction = (obj: MiniObject) => boolean;
export type MiniObjectFreeFunction = (obj: MiniObject) => void;
export type MiniObjectNotify = (user_data: object | null, obj: MiniObject) => void;
export type PadActivateFunction = (pad: Pad, parent: Object) => boolean;
export type PadActivateModeFunction = (pad: Pad, parent: Object, mode: PadMode, active: boolean) => boolean;
export type PadChainFunction = (pad: Pad, parent: Object | null, buffer: Buffer) => FlowReturn;
export type PadChainListFunction = (pad: Pad, parent: Object | null, list: BufferList) => FlowReturn;
export type PadEventFullFunction = (pad: Pad, parent: Object | null, event: Event) => FlowReturn;
export type PadEventFunction = (pad: Pad, parent: Object | null, event: Event) => boolean;
export type PadForwardFunction = (pad: Pad, user_data: object | null) => boolean;
export type PadGetRangeFunction = (pad: Pad, parent: Object | null, offset: number, length: number, buffer: Buffer) => FlowReturn;
export type PadIterIntLinkFunction = (pad: Pad, parent: Object | null) => Iterator;
export type PadLinkFunction = (pad: Pad, parent: Object | null, peer: Pad) => PadLinkReturn;
export type PadProbeCallback = (pad: Pad, info: PadProbeInfo, user_data: object | null) => PadProbeReturn;
export type PadQueryFunction = (pad: Pad, parent: Object | null, query: Query) => boolean;
export type PadStickyEventsForeachFunction = (pad: Pad, event: Event | null, user_data: object | null) => boolean;
export type PadUnlinkFunction = (pad: Pad, parent: Object | null) => void;
export type PluginFeatureFilter = (feature: PluginFeature, user_data: object | null) => boolean;
export type PluginFilter = (plugin: Plugin, user_data: object | null) => boolean;
export type PluginInitFullFunc = (plugin: Plugin, user_data: object | null) => boolean;
export type PluginInitFunc = (plugin: Plugin) => boolean;
export type PromiseChangeFunc = (promise: Promise, user_data: object | null) => void;
export type StructureFilterMapFunc = (field_id: GLib.Quark, value: GObject.Value, user_data: object | null) => boolean;
export type StructureForeachFunc = (field_id: GLib.Quark, value: GObject.Value, user_data: object | null) => boolean;
export type StructureMapFunc = (field_id: GLib.Quark, value: GObject.Value, user_data: object | null) => boolean;
export type TagForeachFunc = (list: TagList, tag: string, user_data: object | null) => void;
export type TagMergeFunc = (dest: GObject.Value, src: GObject.Value) => void;
export type TaskFunction = (user_data: object | null) => void;
export type TaskPoolFunction = (user_data: object | null) => void;
export type TaskThreadFunc = (task: Task, thread: GLib.Thread, user_data: object | null) => void;
export type TypeFindFunction = (find: TypeFind, user_data: object | null) => void;
export type ValueCompareFunc = (value1: GObject.Value, value2: GObject.Value) => number;
export type ValueDeserializeFunc = (dest: GObject.Value, s: string) => boolean;
export type ValueSerializeFunc = (value1: GObject.Value) => string;
export const ALLOCATOR_SYSMEM: string;
export const BUFFER_COPY_ALL: BufferCopyFlags;
export const BUFFER_COPY_METADATA: BufferCopyFlags;
export const BUFFER_OFFSET_NONE: number;
export const CAN_INLINE: number;
export const CAPS_FEATURE_MEMORY_SYSTEM_MEMORY: string;
export const CLOCK_TIME_NONE: ClockTime;
export const DEBUG_BG_MASK: number;
export const DEBUG_FG_MASK: number;
export const DEBUG_FORMAT_MASK: number;
export const ELEMENT_FACTORY_KLASS_DECODER: string;
export const ELEMENT_FACTORY_KLASS_DECRYPTOR: string;
export const ELEMENT_FACTORY_KLASS_DEMUXER: string;
export const ELEMENT_FACTORY_KLASS_DEPAYLOADER: string;
export const ELEMENT_FACTORY_KLASS_ENCODER: string;
export const ELEMENT_FACTORY_KLASS_ENCRYPTOR: string;
export const ELEMENT_FACTORY_KLASS_FORMATTER: string;
export const ELEMENT_FACTORY_KLASS_HARDWARE: string;
export const ELEMENT_FACTORY_KLASS_MEDIA_AUDIO: string;
export const ELEMENT_FACTORY_KLASS_MEDIA_IMAGE: string;
export const ELEMENT_FACTORY_KLASS_MEDIA_METADATA: string;
export const ELEMENT_FACTORY_KLASS_MEDIA_SUBTITLE: string;
export const ELEMENT_FACTORY_KLASS_MEDIA_VIDEO: string;
export const ELEMENT_FACTORY_KLASS_MUXER: string;
export const ELEMENT_FACTORY_KLASS_PARSER: string;
export const ELEMENT_FACTORY_KLASS_PAYLOADER: string;
export const ELEMENT_FACTORY_KLASS_SINK: string;
export const ELEMENT_FACTORY_KLASS_SRC: string;
export const ELEMENT_FACTORY_TYPE_ANY: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_AUDIOVIDEO_SINKS: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_AUDIO_ENCODER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_DECODABLE: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_DECODER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_DECRYPTOR: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_DEMUXER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_DEPAYLOADER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_ENCODER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_ENCRYPTOR: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_FORMATTER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MAX_ELEMENTS: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MEDIA_ANY: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MEDIA_AUDIO: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MEDIA_IMAGE: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MEDIA_METADATA: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MEDIA_SUBTITLE: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MEDIA_VIDEO: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_MUXER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_PARSER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_PAYLOADER: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_SINK: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_SRC: ElementFactoryListType;
export const ELEMENT_FACTORY_TYPE_VIDEO_ENCODER: ElementFactoryListType;
export const ELEMENT_METADATA_AUTHOR: string;
export const ELEMENT_METADATA_DESCRIPTION: string;
export const ELEMENT_METADATA_DOC_URI: string;
export const ELEMENT_METADATA_ICON_NAME: string;
export const ELEMENT_METADATA_KLASS: string;
export const ELEMENT_METADATA_LONGNAME: string;
export const EVENT_NUM_SHIFT: number;
export const EVENT_TYPE_BOTH: EventTypeFlags;
export const FLAG_SET_MASK_EXACT: number;
export const FORMAT_PERCENT_MAX: number;
export const FORMAT_PERCENT_SCALE: number;
export const GROUP_ID_INVALID: number;
export const LICENSE_UNKNOWN: string;
export const LOCK_FLAG_READWRITE: LockFlags;
export const MAP_READWRITE: MapFlags;
export const META_TAG_MEMORY_STR: string;
export const MSECOND: ClockTimeDiff;
export const NSECOND: ClockTimeDiff;
export const PARAM_CONTROLLABLE: number;
export const PARAM_MUTABLE_PAUSED: number;
export const PARAM_MUTABLE_PLAYING: number;
export const PARAM_MUTABLE_READY: number;
export const PARAM_USER_SHIFT: number;
export const PROTECTION_SYSTEM_ID_CAPS_FIELD: string;
export const PROTECTION_UNSPECIFIED_SYSTEM_ID: string;
export const QUERY_NUM_SHIFT: number;
export const QUERY_TYPE_BOTH: QueryTypeFlags;
export const SECOND: ClockTimeDiff;
export const SEQNUM_INVALID: number;
export const TAG_ALBUM: string;
export const TAG_ALBUM_ARTIST: string;
export const TAG_ALBUM_ARTIST_SORTNAME: string;
export const TAG_ALBUM_GAIN: string;
export const TAG_ALBUM_PEAK: string;
export const TAG_ALBUM_SORTNAME: string;
export const TAG_ALBUM_VOLUME_COUNT: string;
export const TAG_ALBUM_VOLUME_NUMBER: string;
export const TAG_APPLICATION_DATA: string;
export const TAG_APPLICATION_NAME: string;
export const TAG_ARTIST: string;
export const TAG_ARTIST_SORTNAME: string;
export const TAG_ATTACHMENT: string;
export const TAG_AUDIO_CODEC: string;
export const TAG_BEATS_PER_MINUTE: string;
export const TAG_BITRATE: string;
export const TAG_CODEC: string;
export const TAG_COMMENT: string;
export const TAG_COMPOSER: string;
export const TAG_COMPOSER_SORTNAME: string;
export const TAG_CONDUCTOR: string;
export const TAG_CONTACT: string;
export const TAG_CONTAINER_FORMAT: string;
export const TAG_COPYRIGHT: string;
export const TAG_COPYRIGHT_URI: string;
export const TAG_DATE: string;
export const TAG_DATE_TIME: string;
export const TAG_DESCRIPTION: string;
export const TAG_DEVICE_MANUFACTURER: string;
export const TAG_DEVICE_MODEL: string;
export const TAG_DURATION: string;
export const TAG_ENCODED_BY: string;
export const TAG_ENCODER: string;
export const TAG_ENCODER_VERSION: string;
export const TAG_EXTENDED_COMMENT: string;
export const TAG_GENRE: string;
export const TAG_GEO_LOCATION_CAPTURE_DIRECTION: string;
export const TAG_GEO_LOCATION_CITY: string;
export const TAG_GEO_LOCATION_COUNTRY: string;
export const TAG_GEO_LOCATION_ELEVATION: string;
export const TAG_GEO_LOCATION_HORIZONTAL_ERROR: string;
export const TAG_GEO_LOCATION_LATITUDE: string;
export const TAG_GEO_LOCATION_LONGITUDE: string;
export const TAG_GEO_LOCATION_MOVEMENT_DIRECTION: string;
export const TAG_GEO_LOCATION_MOVEMENT_SPEED: string;
export const TAG_GEO_LOCATION_NAME: string;
export const TAG_GEO_LOCATION_SUBLOCATION: string;
export const TAG_GROUPING: string;
export const TAG_HOMEPAGE: string;
export const TAG_IMAGE: string;
export const TAG_IMAGE_ORIENTATION: string;
export const TAG_INTERPRETED_BY: string;
export const TAG_ISRC: string;
export const TAG_KEYWORDS: string;
export const TAG_LANGUAGE_CODE: string;
export const TAG_LANGUAGE_NAME: string;
export const TAG_LICENSE: string;
export const TAG_LICENSE_URI: string;
export const TAG_LOCATION: string;
export const TAG_LYRICS: string;
export const TAG_MAXIMUM_BITRATE: string;
export const TAG_MIDI_BASE_NOTE: string;
export const TAG_MINIMUM_BITRATE: string;
export const TAG_NOMINAL_BITRATE: string;
export const TAG_ORGANIZATION: string;
export const TAG_PERFORMER: string;
export const TAG_PREVIEW_IMAGE: string;
export const TAG_PRIVATE_DATA: string;
export const TAG_PUBLISHER: string;
export const TAG_REFERENCE_LEVEL: string;
export const TAG_SERIAL: string;
export const TAG_SHOW_EPISODE_NUMBER: string;
export const TAG_SHOW_NAME: string;
export const TAG_SHOW_SEASON_NUMBER: string;
export const TAG_SHOW_SORTNAME: string;
export const TAG_SUBTITLE_CODEC: string;
export const TAG_TITLE: string;
export const TAG_TITLE_SORTNAME: string;
export const TAG_TRACK_COUNT: string;
export const TAG_TRACK_GAIN: string;
export const TAG_TRACK_NUMBER: string;
export const TAG_TRACK_PEAK: string;
export const TAG_USER_RATING: string;
export const TAG_VERSION: string;
export const TAG_VIDEO_CODEC: string;
export const TOC_REPEAT_COUNT_INFINITE: number;
export const URI_NO_PORT: number;
export const USECOND: ClockTimeDiff;
export const VALUE_EQUAL: number;
export const VALUE_GREATER_THAN: number;
export const VALUE_LESS_THAN: number;
export const VALUE_UNORDERED: number;
export const VERSION_MAJOR: number;
export const VERSION_MICRO: number;
export const VERSION_MINOR: number;
export const VERSION_NANO: number;
/**
 * Get the maximum amount of memory blocks that a buffer can hold. This i
 * s a
 * compile time constant that can be queried with the function.
 * When more memory blocks are added, existing memory blocks will be merg
 * ed
 * together to make room for the new block.
 */
export function buffer_get_max_memory(): number;
/**
 * Creates a #GstCapsFeatures from a string representation.
 * Free-function: gst_caps_features_free
 */
export function caps_features_from_string(features: string): CapsFeatures | null;
/**
 * Converts @caps from a string representation.
 * The current implementation of serialization will lead to unexpected re
 * sults
 * when there are nested #GstCaps / #GstStructure deeper than one level.
 */
export function caps_from_string(string: string): Caps | null;
/**
 * 
 */
export function core_error_quark(): GLib.Quark;
/**
 * Adds the logging function to the list of logging functions.
 * Be sure to use #G_GNUC_NO_INSTRUMENT on that function, it is needed.
 */
export function debug_add_log_function(func: LogFunction, user_data: object | null, notify: GLib.DestroyNotify): void;
/**
 * Adds a memory ringbuffer based debug logger that stores up to
 * @max_size_per_thread bytes of logs per thread and times out threads af
 * ter
 * @thread_timeout seconds of inactivity.
 * Logs can be fetched with gst_debug_ring_buffer_logger_get_logs() and t
 * he
 * logger can be removed again with gst_debug_remove_ring_buffer_logger()
 * .
 * Only one logger at a time is possible.
 */
export function debug_add_ring_buffer_logger(max_size_per_thread: number, thread_timeout: number): void;
/**
 * To aid debugging applications one can use this method to obtain the wh
 * ole
 * network of gstreamer elements that form the pipeline into an dot file.
 * This data can be processed with graphviz to get an image.
 */
export function debug_bin_to_dot_data(bin: Bin, details: DebugGraphDetails): string;
/**
 * To aid debugging applications one can use this method to write out the
 *  whole
 * network of gstreamer elements that form the pipeline into an dot file.
 * This file can be processed with graphviz to get an image.
 * <informalexample><programlisting>
 *  dot -Tpng -oimage.png graph_lowlevel.dot
 * </programlisting></informalexample>
 */
export function debug_bin_to_dot_file(bin: Bin, details: DebugGraphDetails, file_name: string): void;
/**
 * This works like gst_debug_bin_to_dot_file(), but adds the current time
 * stamp
 * to the filename, so that it can be used to take multiple snapshots.
 */
export function debug_bin_to_dot_file_with_ts(bin: Bin, details: DebugGraphDetails, file_name: string): void;
/**
 * Constructs a string that can be used for getting the desired color in 
 * color
 * terminals.
 * You need to free the string after use.
 */
export function debug_construct_term_color(colorinfo: number): string;
/**
 * Constructs an integer that can be used for getting the desired color i
 * n
 * windows' terminals (cmd.exe). As there is no mean to underline, we sim
 * ply
 * ignore this attribute.
 * This function returns 0 on non-windows machines.
 */
export function debug_construct_win_color(colorinfo: number): number;
/**
 * Returns a snapshot of a all categories that are currently in use . Thi
 * s list
 * may change anytime.
 * The caller has to free the list after use.
 */
export function debug_get_all_categories(): string[];
/**
 * Changes the coloring mode for debug output.
 */
export function debug_get_color_mode(): DebugColorMode;
/**
 * Returns the default threshold that is used for new categories.
 */
export function debug_get_default_threshold(): DebugLevel;
/**
 * 
 */
export function debug_get_stack_trace(flags: StackTraceFlags): string | null;
/**
 * Checks if debugging output is activated.
 */
export function debug_is_active(): boolean;
/**
 * Checks if the debugging output should be colored.
 */
export function debug_is_colored(): boolean;
/**
 * Get the string representation of a debugging level
 */
export function debug_level_get_name(level: DebugLevel): string;
/**
 * The default logging handler used by GStreamer. Logging functions get c
 * alled
 * whenever a macro like GST_DEBUG or similar is used. By default this fu
 * nction
 * is setup to output the message and additional info to stderr (or the l
 * og file
 * specified via the GST_DEBUG_FILE environment variable) as received via
 * @user_data.
 * You can add other handlers by using gst_debug_add_log_function().
 * And you can remove this handler by calling
 * gst_debug_remove_log_function(gst_debug_log_default);
 */
export function debug_log_default(category: DebugCategory, level: DebugLevel, file: string, _function: string, line: number, object: GObject.Object | null, message: DebugMessage, user_data: object | null): void;
/**
 * If libunwind, glibc backtrace or DbgHelp are present
 * a stack trace is printed.
 */
export function debug_print_stack_trace(): void;
/**
 * Removes all registered instances of the given logging functions.
 */
export function debug_remove_log_function(func: LogFunction | null): number;
/**
 * Removes all registered instances of log functions with the given user 
 * data.
 */
export function debug_remove_log_function_by_data(data: object | null): number;
/**
 * Removes any previously added ring buffer logger with
 * gst_debug_add_ring_buffer_logger().
 */
export function debug_remove_ring_buffer_logger(): void;
/**
 * Fetches the current logs per thread from the ring buffer logger. See
 * gst_debug_add_ring_buffer_logger() for details.
 */
export function debug_ring_buffer_logger_get_logs(): string[];
/**
 * If activated, debugging messages are sent to the debugging
 * handlers.
 * It makes sense to deactivate it for speed issues.
 * > This function is not threadsafe. It makes sense to only call it
 * during initialization.
 */
export function debug_set_active(active: boolean): void;
/**
 * Changes the coloring mode for debug output.
 * This function may be called before gst_init().
 */
export function debug_set_color_mode(mode: DebugColorMode): void;
/**
 * Changes the coloring mode for debug output.
 * This function may be called before gst_init().
 */
export function debug_set_color_mode_from_string(mode: string): void;
/**
 * Sets or unsets the use of coloured debugging output.
 * Same as gst_debug_set_color_mode () with the argument being
 * being GST_DEBUG_COLOR_MODE_ON or GST_DEBUG_COLOR_MODE_OFF.
 * This function may be called before gst_init().
 */
export function debug_set_colored(colored: boolean): void;
/**
 * Sets the default threshold to the given level and updates all categori
 * es to
 * use this threshold.
 * This function may be called before gst_init().
 */
export function debug_set_default_threshold(level: DebugLevel): void;
/**
 * Sets all categories which match the given glob style pattern to the gi
 * ven
 * level.
 */
export function debug_set_threshold_for_name(name: string, level: DebugLevel): void;
/**
 * Sets the debug logging wanted in the same form as with the GST_DEBUG
 * environment variable. You can use wildcards such as '*', but note that
 * the order matters when you use wild cards, e.g. "foosrc:6,*src:3,*:2" 
 * sets
 * everything to log level 2.
 */
export function debug_set_threshold_from_string(list: string, reset: boolean): void;
/**
 * Resets all categories with the given name back to the default level.
 */
export function debug_unset_threshold_for_name(name: string): void;
/**
 * Clean up any resources created by GStreamer in gst_init().
 * It is normally not needed to call this function in a normal applicatio
 * n
 * as the resources will automatically be freed when the program terminat
 * es.
 * This function is therefore mostly used by testsuites and other memory
 * profiling tools.
 * After this call GStreamer (including this method) should not be used a
 * nymore.
 */
export function deinit(): void;
/**
 * 
 */
export function dynamic_type_register(plugin: Plugin, type: GType): boolean;
/**
 * Get a string describing the error message in the current locale.
 */
export function error_get_message(domain: GLib.Quark, code: number): string;
/**
 * Gets the #GstEventTypeFlags associated with @type.
 */
export function event_type_get_flags(type: EventType): EventTypeFlags;
/**
 * Get a printable name for the given event type. Do not modify or free.
 */
export function event_type_get_name(type: EventType): string;
/**
 * Get the unique quark for the given event type.
 */
export function event_type_to_quark(type: EventType): GLib.Quark;
/**
 * Similar to g_filename_to_uri(), but attempts to handle relative file p
 * aths
 * as well. Before converting @filename into an URI, it will be prefixed 
 * by
 * the current working directory if it is a relative path, and then the p
 * ath
 * will be canonicalised so that it doesn't contain any './' or '../' seg
 * ments.
 * On Windows #filename should be in UTF-8 encoding.
 */
export function filename_to_uri(filename: string): string;
/**
 * Gets a string representing the given flow return.
 */
export function flow_get_name(ret: FlowReturn): string;
/**
 * Get the unique quark for the given GstFlowReturn.
 */
export function flow_to_quark(ret: FlowReturn): GLib.Quark;
/**
 * Return the format registered with the given nick.
 */
export function format_get_by_nick(nick: string): Format;
/**
 * Get details about the given format.
 */
export function format_get_details(format: Format): FormatDefinition | null;
/**
 * Get a printable name for the given format. Do not modify or free.
 */
export function format_get_name(format: Format): string | null;
/**
 * Iterate all the registered formats. The format definition is read
 * only.
 */
export function format_iterate_definitions(): Iterator;
/**
 * Create a new GstFormat based on the nick or return an
 * already registered format with that nick.
 */
export function format_register(nick: string, description: string): Format;
/**
 * Get the unique quark for the given format.
 */
export function format_to_quark(format: Format): GLib.Quark;
/**
 * See if the given format is inside the format array.
 */
export function formats_contains(formats: Format[], format: Format): boolean;
/**
 * This helper is mostly helpful for plugins that need to
 * inspect the folder of the main executable to determine
 * their set of features.
 * When a plugin is initialized from the gst-plugin-scanner
 * external process, the returned path will be the same as from the
 * parent process.
 */
export function get_main_executable_path(): string | null;
/**
 * Initializes the GStreamer library, setting up internal path lists,
 * registering built-in elements, and loading standard plugins.
 * Unless the plugin registry is disabled at compile time, the registry w
 * ill be
 * loaded. By default this will also check if the registry cache needs to
 *  be
 * updated and rescan all plugins if needed. See gst_update_registry() fo
 * r
 * details and section
 * <link linkend="gst-running">Running GStreamer Applications</link>
 * for how to disable automatic registry updates.
 * > This function will terminate your program if it was unable to initia
 * lize
 * > GStreamer for some reason.  If you want your program to fall back,
 * > use gst_init_check() instead.
 * WARNING: This function does not work in the same way as corresponding
 * functions in other glib-style libraries, such as gtk_init\(\). In
 * particular, unknown command line options cause this function to
 * abort program execution.
 */
export function init(argc: number | null, argv: string[] | null): [number | null,string[] | null];
/**
 * Initializes the GStreamer library, setting up internal path lists,
 * registering built-in elements, and loading standard plugins.
 * This function will return %FALSE if GStreamer could not be initialized
 * for some reason.  If you want your program to fail fatally,
 * use gst_init() instead.
 */
export function init_check(argc: number | null, argv: string[] | null): [boolean, number | null,string[] | null];
/**
 * 
 */
export function is_caps_features(obj: object | null): boolean;
/**
 * Use this function to check if GStreamer has been initialized with gst_
 * init()
 * or gst_init_check().
 */
export function is_initialized(): boolean;
/**
 * 
 */
export function library_error_quark(): GLib.Quark;
/**
 * Get a printable name for the given message type. Do not modify or free
 * .
 */
export function message_type_get_name(type: MessageType): string;
/**
 * Get the unique quark for the given message type.
 */
export function message_type_to_quark(type: MessageType): GLib.Quark;
/**
 * 
 */
export function meta_api_type_get_tags(api: GType): string[];
/**
 * Check if @api was registered with @tag.
 */
export function meta_api_type_has_tag(api: GType, tag: GLib.Quark): boolean;
/**
 * Register and return a GType for the @api and associate it with
 * @tags.
 */
export function meta_api_type_register(api: string, tags: string[]): GType;
/**
 * Lookup a previously registered meta info structure by its implementati
 * on name
 * @impl.
 */
export function meta_get_info(impl: string): MetaInfo | null;
/**
 * Register a new #GstMeta implementation.
 * The same @info can be retrieved later with gst_meta_get_info() by usin
 * g
 * @impl as the key.
 */
export function meta_register(api: GType, impl: string, size: number, init_func: MetaInitFunction, free_func: MetaFreeFunction, transform_func: MetaTransformFunction): MetaInfo | null;
/**
 * Atomically modifies a pointer to point to a new mini-object.
 * The reference count of @olddata is decreased and the reference count o
 * f
 * @newdata is increased.
 * Either @newdata and the value pointed to by @olddata may be %NULL.
 */
export function mini_object_replace(olddata: MiniObject | null, newdata: MiniObject | null): [boolean, MiniObject | null];
/**
 * Modifies a pointer to point to a new mini-object. The modification
 * is done atomically. This version is similar to gst_mini_object_replace
 * ()
 * except that it does not increase the refcount of @newdata and thus
 * takes ownership of @newdata.
 * Either @newdata and the value pointed to by @olddata may be %NULL.
 */
export function mini_object_take(olddata: MiniObject, newdata: MiniObject): [boolean, MiniObject];
/**
 * Return the name of a pad mode, for use in debug messages mostly.
 */
export function pad_mode_get_name(mode: PadMode): string;
/**
 * This function creates a GstArray GParamSpec for use by objects/element
 * s
 * that want to expose properties of GstArray type. This function is
 * typically * used in connection with g_object_class_install_property() 
 * in a
 * GObjects's instance_init function.
 */
export function param_spec_array(name: string, nick: string, blurb: string, element_spec: GObject.ParamSpec, flags: GObject.ParamFlags): GObject.ParamSpec;
/**
 * This function creates a fraction GParamSpec for use by objects/element
 * s
 * that want to expose properties of fraction type. This function is typi
 * cally
 * used in connection with g_object_class_install_property() in a GObject
 * s's
 * instance_init function.
 */
export function param_spec_fraction(name: string, nick: string, blurb: string, min_num: number, min_denom: number, max_num: number, max_denom: number, default_num: number, default_denom: number, flags: GObject.ParamFlags): GObject.ParamSpec | null;
/**
 * 
 */
export function parent_buffer_meta_api_get_type(): GType;
/**
 * Get the global #GstMetaInfo describing  the #GstParentBufferMeta meta.
 */
export function parent_buffer_meta_get_info(): MetaInfo;
/**
 * This is a convenience wrapper around gst_parse_launch() to create a
 * #GstBin from a gst-launch-style pipeline description. See
 * gst_parse_launch() and the gst-launch man page for details about the
 * syntax. Ghost pads on the bin for unlinked source or sink pads
 * within the bin can automatically be created (but only a maximum of
 * one ghost pad for each direction will be created; if you expect
 * multiple unlinked source pads or multiple unlinked sink pads
 * and want them all ghosted, you will have to create the ghost pads
 * yourself).
 */
export function parse_bin_from_description(bin_description: string, ghost_unlinked_pads: boolean): Bin | null;
/**
 * This is a convenience wrapper around gst_parse_launch() to create a
 * #GstBin from a gst-launch-style pipeline description. See
 * gst_parse_launch() and the gst-launch man page for details about the
 * syntax. Ghost pads on the bin for unlinked source or sink pads
 * within the bin can automatically be created (but only a maximum of
 * one ghost pad for each direction will be created; if you expect
 * multiple unlinked source pads or multiple unlinked sink pads
 * and want them all ghosted, you will have to create the ghost pads
 * yourself).
 */
export function parse_bin_from_description_full(bin_description: string, ghost_unlinked_pads: boolean, context: ParseContext | null, flags: ParseFlags): Element | null;
/**
 * Get the error quark used by the parsing subsystem.
 */
export function parse_error_quark(): GLib.Quark;
/**
 * Create a new pipeline based on command line syntax.
 * Please note that you might get a return value that is not %NULL even t
 * hough
 * the @error is set. In this case there was a recoverable parsing error 
 * and you
 * can try to play the pipeline.
 */
export function parse_launch(pipeline_description: string): Element | null;
/**
 * Create a new pipeline based on command line syntax.
 * Please note that you might get a return value that is not %NULL even t
 * hough
 * the @error is set. In this case there was a recoverable parsing error 
 * and you
 * can try to play the pipeline.
 */
export function parse_launch_full(pipeline_description: string, context: ParseContext | null, flags: ParseFlags): Element | null;
/**
 * Create a new element based on command line syntax.
 * @error will contain an error message if an erroneous pipeline is speci
 * fied.
 * An error does not mean that the pipeline could not be constructed.
 */
export function parse_launchv(argv: string[]): Element | null;
/**
 * Create a new element based on command line syntax.
 * @error will contain an error message if an erroneous pipeline is speci
 * fied.
 * An error does not mean that the pipeline could not be constructed.
 */
export function parse_launchv_full(argv: string[], context: ParseContext | null, flags: ParseFlags): Element | null;
/**
 * Get the error quark.
 */
export function plugin_error_quark(): GLib.Quark;
/**
 * Gets the directory for application specific presets if set by the
 * application.
 */
export function preset_get_app_dir(): string | null;
/**
 * Sets an extra directory as an absolute path that should be considered 
 * when
 * looking for presets. Any presets in the application dir will shadow th
 * e
 * system presets.
 */
export function preset_set_app_dir(app_dir: string): boolean;
/**
 * Iterates the supplied list of UUIDs and checks the GstRegistry for
 * all the decryptors supporting one of the supplied UUIDs.
 */
export function protection_filter_systems_by_available_decryptors(system_identifiers: string[]): string[] | null;
/**
 * 
 */
export function protection_meta_api_get_type(): GType;
/**
 * 
 */
export function protection_meta_get_info(): MetaInfo;
/**
 * Iterates the supplied list of UUIDs and checks the GstRegistry for
 * an element that supports one of the supplied UUIDs. If more than one
 * element matches, the system ID of the highest ranked element is select
 * ed.
 */
export function protection_select_system(system_identifiers: string[]): string | null;
/**
 * Gets the #GstQueryTypeFlags associated with @type.
 */
export function query_type_get_flags(type: QueryType): QueryTypeFlags;
/**
 * Get a printable name for the given query type. Do not modify or free.
 */
export function query_type_get_name(type: QueryType): string;
/**
 * Get the unique quark for the given query type.
 */
export function query_type_to_quark(type: QueryType): GLib.Quark;
/**
 * 
 */
export function reference_timestamp_meta_api_get_type(): GType;
/**
 * Get the global #GstMetaInfo describing  the #GstReferenceTimestampMeta
 *  meta.
 */
export function reference_timestamp_meta_get_info(): MetaInfo;
/**
 * 
 */
export function resource_error_quark(): GLib.Quark;
/**
 * Some functions in the GStreamer core might install a custom SIGSEGV ha
 * ndler
 * to better catch and report errors to the application. Currently this f
 * eature
 * is enabled by default when loading plugins.
 * Applications might want to disable this behaviour with the
 * gst_segtrap_set_enabled() function. This is typically done if the appl
 * ication
 * wants to install its own handler without GStreamer interfering.
 */
export function segtrap_is_enabled(): boolean;
/**
 * Applications might want to disable/enable the SIGSEGV handling of
 * the GStreamer core. See gst_segtrap_is_enabled() for more information.
 */
export function segtrap_set_enabled(enabled: boolean): void;
/**
 * Gets a string representing the given state transition.
 */
export function state_change_get_name(transition: StateChange): string;
/**
 * 
 */
export function static_caps_get_type(): GType;
/**
 * 
 */
export function static_pad_template_get_type(): GType;
/**
 * 
 */
export function stream_error_quark(): GLib.Quark;
/**
 * Get a descriptive string for a given #GstStreamType
 */
export function stream_type_get_name(stype: StreamType): string | null;
/**
 * Creates a #GstStructure from a string representation.
 * If end is not %NULL, a pointer to the place inside the given string
 * where parsing ended will be returned.
 * Free-function: gst_structure_free
 */
export function structure_from_string(string: string): [Structure | null, string | null];
/**
 * Checks if the given type is already registered.
 */
export function tag_exists(tag: string): boolean;
/**
 * Returns the human-readable description of this tag, You must not chang
 * e or
 * free this string.
 */
export function tag_get_description(tag: string): string | null;
/**
 * Gets the flag of @tag.
 */
export function tag_get_flag(tag: string): TagFlag;
/**
 * Returns the human-readable name of this tag, You must not change or fr
 * ee
 * this string.
 */
export function tag_get_nick(tag: string): string | null;
/**
 * Gets the #GType used for this tag.
 */
export function tag_get_type(tag: string): GType;
/**
 * Checks if the given tag is fixed. A fixed tag can only contain one val
 * ue.
 * Unfixed tags can contain lists of values.
 */
export function tag_is_fixed(tag: string): boolean;
/**
 * Copies the contents for the given tag into the value,
 * merging multiple values into one if multiple values are associated
 * with the tag.
 * You must g_value_unset() the value after use.
 */
export function tag_list_copy_value(list: TagList, tag: string): [boolean, GObject.Value];
/**
 * This is a convenience function for the func argument of gst_tag_regist
 * er().
 * It concatenates all given strings using a comma. The tag must be regis
 * tered
 * as a G_TYPE_STRING or this function will fail.
 */
export function tag_merge_strings_with_comma(src: GObject.Value): [GObject.Value];
/**
 * This is a convenience function for the func argument of gst_tag_regist
 * er().
 * It creates a copy of the first value from the list.
 */
export function tag_merge_use_first(src: GObject.Value): [GObject.Value];
/**
 * Converts @type to a string representation.
 */
export function toc_entry_type_get_nick(type: TocEntryType): string;
/**
 * 
 */
export function type_find_get_type(): GType;
/**
 * Registers a new typefind function to be used for typefinding. After
 * registering this function will be available for typefinding.
 * This function is typically called during an element's plugin initializ
 * ation.
 */
export function type_find_register(plugin: Plugin | null, name: string, rank: number, func: TypeFindFunction, extensions: string | null, possible_caps: Caps, data: object | null, data_notify: GLib.DestroyNotify): boolean;
/**
 * Forces GStreamer to re-scan its plugin paths and update the default
 * plugin registry.
 * Applications will almost never need to call this function, it is only
 * useful if the application knows new plugins have been installed (or ol
 * d
 * ones removed) since the start of the application (or, to be precise, t
 * he
 * first call to gst_init()) and the application wants to make use of any
 * newly-installed plugins without restarting the application.
 * Applications should assume that the registry update is neither atomic 
 * nor
 * thread-safe and should therefore not have any dynamic pipelines runnin
 * g
 * (including the playbin and decodebin elements) and should also not cre
 * ate
 * any elements or access the GStreamer registry while the update is in
 * progress.
 * Note that this function may block for a significant amount of time.
 */
export function update_registry(): boolean;
/**
 * Constructs a URI for a given valid protocol and location.
 * Free-function: g_free
 */
export function uri_construct(protocol: string, location: string): string;
/**
 * 
 */
export function uri_error_quark(): GLib.Quark;
/**
 * Parses a URI string into a new #GstUri object. Will return NULL if the
 *  URI
 * cannot be parsed.
 */
export function uri_from_string(uri: string): Uri | null;
/**
 * Extracts the location out of a given valid URI, ie. the protocol and "
 * ://"
 * are stripped from the URI, which means that the location returned incl
 * udes
 * the hostname if one is specified. The returned string must be freed us
 * ing
 * g_free().
 * Free-function: g_free
 */
export function uri_get_location(uri: string): string | null;
/**
 * Extracts the protocol out of a given valid URI. The returned string mu
 * st be
 * freed using g_free().
 */
export function uri_get_protocol(uri: string): string | null;
/**
 * Checks if the protocol of a given valid URI matches @protocol.
 */
export function uri_has_protocol(uri: string, protocol: string): boolean;
/**
 * Tests if the given string is a valid URI identifier. URIs start with a
 *  valid
 * scheme followed by ":" and maybe a string identifying the location.
 */
export function uri_is_valid(uri: string): boolean;
/**
 * This is a convenience function to join two URI strings and return the 
 * result.
 * The returned string should be g_free()'d after use.
 */
export function uri_join_strings(base_uri: string, ref_uri: string): string;
/**
 * Checks if an element exists that supports the given URI protocol. Note
 * that a positive return value does not imply that a subsequent call to
 * gst_element_make_from_uri() is guaranteed to work.
 */
export function uri_protocol_is_supported(type: URIType, protocol: string): boolean;
/**
 * Tests if the given string is a valid protocol identifier. Protocols
 * must consist of alphanumeric characters, '+', '-' and '.' and must
 * start with a alphabetic character. See RFC 3986 Section 3.1.
 */
export function uri_protocol_is_valid(protocol: string): boolean;
/**
 * Searches inside @array for @search_data by using the comparison functi
 * on
 * @search_func. @array must be sorted ascending.
 * As @search_data is always passed as second argument to @search_func it
 * 's
 * not required that @search_data has the same type as the array elements
 * .
 * The complexity of this search function is O(log (num_elements)).
 */
export function util_array_binary_search(array: object | null, num_elements: number, element_size: number, search_func: GLib.CompareDataFunc, mode: SearchMode, search_data: object | null, user_data: object | null): object | null;
/**
 * Transforms a #gdouble to a fraction and simplifies
 * the result.
 */
export function util_double_to_fraction(src: number): [number,number];
/**
 * Dumps the buffer memory into a hex representation. Useful for debuggin
 * g.
 */
export function util_dump_buffer(buf: Buffer): void;
/**
 * Dumps the memory block into a hex representation. Useful for debugging
 * .
 */
export function util_dump_mem(mem: number[], size: number): void;
/**
 * Adds the fractions @a_n/@a_d and @b_n/@b_d and stores
 * the result in @res_n and @res_d.
 */
export function util_fraction_add(a_n: number, a_d: number, b_n: number, b_d: number): [boolean, number,number];
/**
 * Compares the fractions @a_n/@a_d and @b_n/@b_d and returns
 * -1 if a < b, 0 if a = b and 1 if a > b.
 */
export function util_fraction_compare(a_n: number, a_d: number, b_n: number, b_d: number): number;
/**
 * Multiplies the fractions @a_n/@a_d and @b_n/@b_d and stores
 * the result in @res_n and @res_d.
 */
export function util_fraction_multiply(a_n: number, a_d: number, b_n: number, b_d: number): [boolean, number,number];
/**
 * Transforms a fraction to a #gdouble.
 */
export function util_fraction_to_double(src_n: number, src_d: number): [number];
/**
 * 
 */
export function util_gdouble_to_guint64(value: number): number;
/**
 * Get a property of type %GST_TYPE_ARRAY and transform it into a
 * #GValueArray. This allow language bindings to get GST_TYPE_ARRAY
 * properties which are otherwise not an accessible type.
 */
export function util_get_object_array(object: GObject.Object, name: string): [boolean, GObject.ValueArray];
/**
 * Get a timestamp as GstClockTime to be used for interval measurements.
 * The timestamp should not be interpreted in any other way.
 */
export function util_get_timestamp(): ClockTime;
/**
 * Calculates the greatest common divisor of @a
 * and @b.
 */
export function util_greatest_common_divisor(a: number, b: number): number;
/**
 * Calculates the greatest common divisor of @a
 * and @b.
 */
export function util_greatest_common_divisor_int64(a: number, b: number): number;
/**
 * Return a constantly incrementing group id.
 * This function is used to generate a new group-id for the
 * stream-start event.
 * This function never returns %GST_GROUP_ID_INVALID (which is 0)
 */
export function util_group_id_next(): number;
/**
 * 
 */
export function util_guint64_to_gdouble(value: number): number;
/**
 * Compare two sequence numbers, handling wraparound.
 * The current implementation just returns (gint32)(@s1 - @s2).
 */
export function util_seqnum_compare(s1: number, s2: number): number;
/**
 * Return a constantly incrementing sequence number.
 * This function is used internally to GStreamer to be able to determine 
 * which
 * events and messages are "the same". For example, elements may set the 
 * seqnum
 * on a segment-done message to be the same as that of the last seek even
 * t, to
 * indicate that event and the message correspond to the same segment.
 * This function never returns %GST_SEQNUM_INVALID (which is 0).
 */
export function util_seqnum_next(): number;
/**
 * Converts the string value to the type of the objects argument and
 * sets the argument with it.
 * Note that this function silently returns if @object has no property na
 * med
 * @name or when @value cannot be converted to the type of the property.
 */
export function util_set_object_arg(object: GObject.Object, name: string, value: string): void;
/**
 * Transfer a #GValueArray to %GST_TYPE_ARRAY and set this value on the
 * specified property name. This allow language bindings to set GST_TYPE_
 * ARRAY
 * properties which are otherwise not an accessible type.
 */
export function util_set_object_array(object: GObject.Object, name: string, array: GObject.ValueArray): boolean;
/**
 * Converts the string to the type of the value and
 * sets the value with it.
 * Note that this function is dangerous as it does not return any indicat
 * ion
 * if the conversion worked or not.
 */
export function util_set_value_from_string(value_str: string): [GObject.Value];
/**
 * Scale @val by the rational number @num / @denom, avoiding overflows an
 * d
 * underflows and without loss of precision.
 * This function can potentially be very slow if val and num are both
 * greater than G_MAXUINT32.
 */
export function util_uint64_scale(val: number, num: number, denom: number): number;
/**
 * Scale @val by the rational number @num / @denom, avoiding overflows an
 * d
 * underflows and without loss of precision.
 * This function can potentially be very slow if val and num are both
 * greater than G_MAXUINT32.
 */
export function util_uint64_scale_ceil(val: number, num: number, denom: number): number;
/**
 * Scale @val by the rational number @num / @denom, avoiding overflows an
 * d
 * underflows and without loss of precision.  @num must be non-negative a
 * nd
 * @denom must be positive.
 */
export function util_uint64_scale_int(val: number, num: number, denom: number): number;
/**
 * Scale @val by the rational number @num / @denom, avoiding overflows an
 * d
 * underflows and without loss of precision.  @num must be non-negative a
 * nd
 * @denom must be positive.
 */
export function util_uint64_scale_int_ceil(val: number, num: number, denom: number): number;
/**
 * Scale @val by the rational number @num / @denom, avoiding overflows an
 * d
 * underflows and without loss of precision.  @num must be non-negative a
 * nd
 * @denom must be positive.
 */
export function util_uint64_scale_int_round(val: number, num: number, denom: number): number;
/**
 * Scale @val by the rational number @num / @denom, avoiding overflows an
 * d
 * underflows and without loss of precision.
 * This function can potentially be very slow if val and num are both
 * greater than G_MAXUINT32.
 */
export function util_uint64_scale_round(val: number, num: number, denom: number): number;
/**
 * Determines if @value1 and @value2 can be compared.
 */
export function value_can_compare(value1: GObject.Value, value2: GObject.Value): boolean;
/**
 * Determines if intersecting two values will produce a valid result.
 * Two values will produce a valid intersection if they have the same
 * type.
 */
export function value_can_intersect(value1: GObject.Value, value2: GObject.Value): boolean;
/**
 * Checks if it's possible to subtract @subtrahend from @minuend.
 */
export function value_can_subtract(minuend: GObject.Value, subtrahend: GObject.Value): boolean;
/**
 * Determines if @value1 and @value2 can be non-trivially unioned.
 * Any two values can be trivially unioned by adding both of them
 * to a GstValueList.  However, certain types have the possibility
 * to be unioned in a simpler way.  For example, an integer range
 * and an integer can be unioned if the integer is a subset of the
 * integer range.  If there is the possibility that two values can
 * be unioned, this function returns %TRUE.
 */
export function value_can_union(value1: GObject.Value, value2: GObject.Value): boolean;
/**
 * Compares @value1 and @value2.  If @value1 and @value2 cannot be
 * compared, the function returns GST_VALUE_UNORDERED.  Otherwise,
 * if @value1 is greater than @value2, GST_VALUE_GREATER_THAN is returned
 * .
 * If @value1 is less than @value2, GST_VALUE_LESS_THAN is returned.
 * If the values are equal, GST_VALUE_EQUAL is returned.
 */
export function value_compare(value1: GObject.Value, value2: GObject.Value): number;
/**
 * Tries to deserialize a string into the type specified by the given GVa
 * lue.
 * If the operation succeeds, %TRUE is returned, %FALSE otherwise.
 */
export function value_deserialize(src: string): [boolean, GObject.Value];
/**
 * Fixate @src into a new value @dest.
 * For ranges, the first element is taken. For lists and arrays, the
 * first item is fixated and returned.
 * If @src is already fixed, this function returns %FALSE.
 */
export function value_fixate(dest: GObject.Value, src: GObject.Value): boolean;
/**
 * Multiplies the two #GValue items containing a #GST_TYPE_FRACTION and s
 * ets
 * @product to the product of the two fractions.
 */
export function value_fraction_multiply(product: GObject.Value, factor1: GObject.Value, factor2: GObject.Value): boolean;
/**
 * Subtracts the @subtrahend from the @minuend and sets @dest to the resu
 * lt.
 */
export function value_fraction_subtract(dest: GObject.Value, minuend: GObject.Value, subtrahend: GObject.Value): boolean;
/**
 * Gets the bitmask specified by @value.
 */
export function value_get_bitmask(value: GObject.Value): number;
/**
 * Gets the contents of @value. The reference count of the returned
 * #GstCaps will not be modified, therefore the caller must take one
 * before getting rid of the @value.
 */
export function value_get_caps(value: GObject.Value): Caps;
/**
 * Gets the contents of @value.
 */
export function value_get_caps_features(value: GObject.Value): CapsFeatures;
/**
 * Gets the maximum of the range specified by @value.
 */
export function value_get_double_range_max(value: GObject.Value): number;
/**
 * Gets the minimum of the range specified by @value.
 */
export function value_get_double_range_min(value: GObject.Value): number;
/**
 * Retrieve the flags field of a GstFlagSet @value.
 */
export function value_get_flagset_flags(value: GObject.Value): number;
/**
 * Retrieve the mask field of a GstFlagSet @value.
 */
export function value_get_flagset_mask(value: GObject.Value): number;
/**
 * Gets the denominator of the fraction specified by @value.
 */
export function value_get_fraction_denominator(value: GObject.Value): number;
/**
 * Gets the numerator of the fraction specified by @value.
 */
export function value_get_fraction_numerator(value: GObject.Value): number;
/**
 * Gets the maximum of the range specified by @value.
 */
export function value_get_fraction_range_max(value: GObject.Value): GObject.Value | null;
/**
 * Gets the minimum of the range specified by @value.
 */
export function value_get_fraction_range_min(value: GObject.Value): GObject.Value | null;
/**
 * Gets the maximum of the range specified by @value.
 */
export function value_get_int64_range_max(value: GObject.Value): number;
/**
 * Gets the minimum of the range specified by @value.
 */
export function value_get_int64_range_min(value: GObject.Value): number;
/**
 * Gets the step of the range specified by @value.
 */
export function value_get_int64_range_step(value: GObject.Value): number;
/**
 * Gets the maximum of the range specified by @value.
 */
export function value_get_int_range_max(value: GObject.Value): number;
/**
 * Gets the minimum of the range specified by @value.
 */
export function value_get_int_range_min(value: GObject.Value): number;
/**
 * Gets the step of the range specified by @value.
 */
export function value_get_int_range_step(value: GObject.Value): number;
/**
 * Gets the contents of @value.
 */
export function value_get_structure(value: GObject.Value): Structure;
/**
 * Initialises the target value to be of the same type as source and then
 *  copies
 * the contents from source to target.
 */
export function value_init_and_copy(src: GObject.Value): [GObject.Value];
/**
 * Calculates the intersection of two values.  If the values have
 * a non-empty intersection, the value representing the intersection
 * is placed in @dest, unless %NULL.  If the intersection is non-empty,
 * @dest is not modified.
 */
export function value_intersect(value1: GObject.Value, value2: GObject.Value): [boolean, GObject.Value | null];
/**
 * Tests if the given GValue, if available in a GstStructure (or any othe
 * r
 * container) contains a "fixed" (which means: one value) or an "unfixed"
 * (which means: multiple possible values, such as data lists or data
 * ranges) value.
 */
export function value_is_fixed(value: GObject.Value): boolean;
/**
 * Check that @value1 is a subset of @value2.
 */
export function value_is_subset(value1: GObject.Value, value2: GObject.Value): boolean;
/**
 * Registers functions to perform calculations on #GValue items of a give
 * n
 * type. Each type can only be added once.
 */
export function value_register(table: ValueTable): void;
/**
 * tries to transform the given @value into a string representation that 
 * allows
 * getting back this string later on using gst_value_deserialize().
 * Free-function: g_free
 */
export function value_serialize(value: GObject.Value): string | null;
/**
 * Sets @value to the bitmask specified by @bitmask.
 */
export function value_set_bitmask(value: GObject.Value, bitmask: number): void;
/**
 * Sets the contents of @value to @caps. A reference to the
 * provided @caps will be taken by the @value.
 */
export function value_set_caps(value: GObject.Value, caps: Caps): void;
/**
 * Sets the contents of @value to @features.
 */
export function value_set_caps_features(value: GObject.Value, features: CapsFeatures): void;
/**
 * Sets @value to the range specified by @start and @end.
 */
export function value_set_double_range(value: GObject.Value, start: number, end: number): void;
/**
 * Sets @value to the flags and mask values provided in @flags and @mask.
 * The @flags value indicates the values of flags, the @mask represents
 * which bits in the flag value have been set, and which are "don't care"
 */
export function value_set_flagset(value: GObject.Value, flags: number, mask: number): void;
/**
 * Sets @value to the fraction specified by @numerator over @denominator.
 * The fraction gets reduced to the smallest numerator and denominator,
 * and if necessary the sign is moved to the numerator.
 */
export function value_set_fraction(value: GObject.Value, numerator: number, denominator: number): void;
/**
 * Sets @value to the range specified by @start and @end.
 */
export function value_set_fraction_range(value: GObject.Value, start: GObject.Value, end: GObject.Value): void;
/**
 * Sets @value to the range specified by @numerator_start/@denominator_st
 * art
 * and @numerator_end/@denominator_end.
 */
export function value_set_fraction_range_full(value: GObject.Value, numerator_start: number, denominator_start: number, numerator_end: number, denominator_end: number): void;
/**
 * Sets @value to the range specified by @start and @end.
 */
export function value_set_int64_range(value: GObject.Value, start: number, end: number): void;
/**
 * Sets @value to the range specified by @start, @end and @step.
 */
export function value_set_int64_range_step(value: GObject.Value, start: number, end: number, step: number): void;
/**
 * Sets @value to the range specified by @start and @end.
 */
export function value_set_int_range(value: GObject.Value, start: number, end: number): void;
/**
 * Sets @value to the range specified by @start, @end and @step.
 */
export function value_set_int_range_step(value: GObject.Value, start: number, end: number, step: number): void;
/**
 * Sets the contents of @value to @structure.
 */
export function value_set_structure(value: GObject.Value, structure: Structure): void;
/**
 * Subtracts @subtrahend from @minuend and stores the result in @dest.
 * Note that this means subtraction as in sets, not as in mathematics.
 */
export function value_subtract(minuend: GObject.Value, subtrahend: GObject.Value): [boolean, GObject.Value | null];
/**
 * Creates a GValue corresponding to the union of @value1 and @value2.
 */
export function value_union(value1: GObject.Value, value2: GObject.Value): [boolean, GObject.Value];
/**
 * Gets the version number of the GStreamer library.
 */
export function version(): [number,number,number,number];
/**
 * This function returns a string that is useful for describing this vers
 * ion
 * of GStreamer to the outside world: user agent strings, logging, ...
 */
export function version_string(): string;
export enum BufferingMode {
    STREAM = 0,
    DOWNLOAD = 1,
    TIMESHIFT = 2,
    LIVE = 3,
}
export enum BusSyncReply {
    DROP = 0,
    PASS = 1,
    ASYNC = 2,
}
export enum CapsIntersectMode {
    ZIG_ZAG = 0,
    FIRST = 1,
}
export enum ClockEntryType {
    SINGLE = 0,
    PERIODIC = 1,
}
export enum ClockReturn {
    OK = 0,
    EARLY = 1,
    UNSCHEDULED = 2,
    BUSY = 3,
    BADTIME = 4,
    ERROR = 5,
    UNSUPPORTED = 6,
    DONE = 7,
}
export enum ClockType {
    REALTIME = 0,
    MONOTONIC = 1,
    OTHER = 2,
}
export enum CoreError {
    FAILED = 1,
    TOO_LAZY = 2,
    NOT_IMPLEMENTED = 3,
    STATE_CHANGE = 4,
    PAD = 5,
    THREAD = 6,
    NEGOTIATION = 7,
    EVENT = 8,
    SEEK = 9,
    CAPS = 10,
    TAG = 11,
    MISSING_PLUGIN = 12,
    CLOCK = 13,
    DISABLED = 14,
    NUM_ERRORS = 15,
}
export enum DebugColorMode {
    OFF = 0,
    ON = 1,
    UNIX = 2,
}
export enum DebugLevel {
    NONE = 0,
    ERROR = 1,
    WARNING = 2,
    FIXME = 3,
    INFO = 4,
    DEBUG = 5,
    LOG = 6,
    TRACE = 7,
    MEMDUMP = 9,
    COUNT = 10,
}
export enum EventType {
    UNKNOWN = 0,
    FLUSH_START = 2563,
    FLUSH_STOP = 5127,
    STREAM_START = 10254,
    CAPS = 12814,
    SEGMENT = 17934,
    STREAM_COLLECTION = 19230,
    TAG = 20510,
    BUFFERSIZE = 23054,
    SINK_MESSAGE = 25630,
    STREAM_GROUP_DONE = 26894,
    EOS = 28174,
    TOC = 30750,
    PROTECTION = 33310,
    SEGMENT_DONE = 38406,
    GAP = 40966,
    QOS = 48641,
    SEEK = 51201,
    NAVIGATION = 53761,
    LATENCY = 56321,
    STEP = 58881,
    RECONFIGURE = 61441,
    TOC_SELECT = 64001,
    SELECT_STREAMS = 66561,
    CUSTOM_UPSTREAM = 69121,
    CUSTOM_DOWNSTREAM = 71686,
    CUSTOM_DOWNSTREAM_OOB = 74242,
    CUSTOM_DOWNSTREAM_STICKY = 76830,
    CUSTOM_BOTH = 79367,
    CUSTOM_BOTH_OOB = 81923,
}
export enum FlowReturn {
    CUSTOM_SUCCESS_2 = 102,
    CUSTOM_SUCCESS_1 = 101,
    CUSTOM_SUCCESS = 100,
    OK = 0,
    NOT_LINKED = -1,
    FLUSHING = -2,
    EOS = -3,
    NOT_NEGOTIATED = -4,
    ERROR = -5,
    NOT_SUPPORTED = -6,
    CUSTOM_ERROR = -100,
    CUSTOM_ERROR_1 = -101,
    CUSTOM_ERROR_2 = -102,
}
export enum Format {
    UNDEFINED = 0,
    DEFAULT = 1,
    BYTES = 2,
    TIME = 3,
    BUFFERS = 4,
    PERCENT = 5,
}
export enum IteratorItem {
    SKIP = 0,
    PASS = 1,
    END = 2,
}
export enum IteratorResult {
    DONE = 0,
    OK = 1,
    RESYNC = 2,
    ERROR = 3,
}
export enum LibraryError {
    FAILED = 1,
    TOO_LAZY = 2,
    INIT = 3,
    SHUTDOWN = 4,
    SETTINGS = 5,
    ENCODE = 6,
    NUM_ERRORS = 7,
}
export enum PadDirection {
    UNKNOWN = 0,
    SRC = 1,
    SINK = 2,
}
export enum PadLinkReturn {
    OK = 0,
    WRONG_HIERARCHY = -1,
    WAS_LINKED = -2,
    WRONG_DIRECTION = -3,
    NOFORMAT = -4,
    NOSCHED = -5,
    REFUSED = -6,
}
export enum PadMode {
    NONE = 0,
    PUSH = 1,
    PULL = 2,
}
export enum PadPresence {
    ALWAYS = 0,
    SOMETIMES = 1,
    REQUEST = 2,
}
export enum PadProbeReturn {
    DROP = 0,
    OK = 1,
    REMOVE = 2,
    PASS = 3,
    HANDLED = 4,
}
export enum ParseError {
    SYNTAX = 0,
    NO_SUCH_ELEMENT = 1,
    NO_SUCH_PROPERTY = 2,
    LINK = 3,
    COULD_NOT_SET_PROPERTY = 4,
    EMPTY_BIN = 5,
    EMPTY = 6,
    DELAYED_LINK = 7,
}
export enum PluginError {
    MODULE = 0,
    DEPENDENCIES = 1,
    NAME_MISMATCH = 2,
}
export enum ProgressType {
    START = 0,
    CONTINUE = 1,
    COMPLETE = 2,
    CANCELED = 3,
    ERROR = 4,
}
export enum PromiseResult {
    PENDING = 0,
    INTERRUPTED = 1,
    REPLIED = 2,
    EXPIRED = 3,
}
export enum QOSType {
    OVERFLOW = 0,
    UNDERFLOW = 1,
    THROTTLE = 2,
}
export enum QueryType {
    UNKNOWN = 0,
    POSITION = 2563,
    DURATION = 5123,
    LATENCY = 7683,
    JITTER = 10243,
    RATE = 12803,
    SEEKING = 15363,
    SEGMENT = 17923,
    CONVERT = 20483,
    FORMATS = 23043,
    BUFFERING = 28163,
    CUSTOM = 30723,
    URI = 33283,
    ALLOCATION = 35846,
    SCHEDULING = 38401,
    ACCEPT_CAPS = 40963,
    CAPS = 43523,
    DRAIN = 46086,
    CONTEXT = 48643,
    BITRATE = 51202,
}
export enum Rank {
    NONE = 0,
    MARGINAL = 64,
    SECONDARY = 128,
    PRIMARY = 256,
}
export enum ResourceError {
    FAILED = 1,
    TOO_LAZY = 2,
    NOT_FOUND = 3,
    BUSY = 4,
    OPEN_READ = 5,
    OPEN_WRITE = 6,
    OPEN_READ_WRITE = 7,
    CLOSE = 8,
    READ = 9,
    WRITE = 10,
    SEEK = 11,
    SYNC = 12,
    SETTINGS = 13,
    NO_SPACE_LEFT = 14,
    NOT_AUTHORIZED = 15,
    NUM_ERRORS = 16,
}
export enum SearchMode {
    EXACT = 0,
    BEFORE = 1,
    AFTER = 2,
}
export enum SeekType {
    NONE = 0,
    SET = 1,
    END = 2,
}
export enum State {
    VOID_PENDING = 0,
    NULL = 1,
    READY = 2,
    PAUSED = 3,
    PLAYING = 4,
}
export enum StateChange {
    NULL_TO_READY = 10,
    READY_TO_PAUSED = 19,
    PAUSED_TO_PLAYING = 28,
    PLAYING_TO_PAUSED = 35,
    PAUSED_TO_READY = 26,
    READY_TO_NULL = 17,
    NULL_TO_NULL = 9,
    READY_TO_READY = 18,
    PAUSED_TO_PAUSED = 27,
    PLAYING_TO_PLAYING = 36,
}
export enum StateChangeReturn {
    FAILURE = 0,
    SUCCESS = 1,
    ASYNC = 2,
    NO_PREROLL = 3,
}
export enum StreamError {
    FAILED = 1,
    TOO_LAZY = 2,
    NOT_IMPLEMENTED = 3,
    TYPE_NOT_FOUND = 4,
    WRONG_TYPE = 5,
    CODEC_NOT_FOUND = 6,
    DECODE = 7,
    ENCODE = 8,
    DEMUX = 9,
    MUX = 10,
    FORMAT = 11,
    DECRYPT = 12,
    DECRYPT_NOKEY = 13,
    NUM_ERRORS = 14,
}
export enum StreamStatusType {
    CREATE = 0,
    ENTER = 1,
    LEAVE = 2,
    DESTROY = 3,
    START = 8,
    PAUSE = 9,
    STOP = 10,
}
export enum StructureChangeType {
    LINK = 0,
    UNLINK = 1,
}
export enum TagFlag {
    UNDEFINED = 0,
    META = 1,
    ENCODED = 2,
    DECODED = 3,
    COUNT = 4,
}
export enum TagMergeMode {
    UNDEFINED = 0,
    REPLACE_ALL = 1,
    REPLACE = 2,
    APPEND = 3,
    PREPEND = 4,
    KEEP = 5,
    KEEP_ALL = 6,
    COUNT = 7,
}
export enum TagScope {
    STREAM = 0,
    GLOBAL = 1,
}
export enum TaskState {
    STARTED = 0,
    STOPPED = 1,
    PAUSED = 2,
}
export enum TocEntryType {
    ANGLE = -3,
    VERSION = -2,
    EDITION = -1,
    INVALID = 0,
    TITLE = 1,
    TRACK = 2,
    CHAPTER = 3,
}
export enum TocLoopType {
    NONE = 0,
    FORWARD = 1,
    REVERSE = 2,
    PING_PONG = 3,
}
export enum TocScope {
    GLOBAL = 1,
    CURRENT = 2,
}
export enum TracerValueScope {
    PROCESS = 0,
    THREAD = 1,
    ELEMENT = 2,
    PAD = 3,
}
export enum TypeFindProbability {
    NONE = 0,
    MINIMUM = 1,
    POSSIBLE = 50,
    LIKELY = 80,
    NEARLY_CERTAIN = 99,
    MAXIMUM = 100,
}
export enum URIError {
    UNSUPPORTED_PROTOCOL = 0,
    BAD_URI = 1,
    BAD_STATE = 2,
    BAD_REFERENCE = 3,
}
export enum URIType {
    UNKNOWN = 0,
    SINK = 1,
    SRC = 2,
}
export type ClockID = object;
export type ClockTime = number;
export type ClockTimeDiff = number;
export type ElementFactoryListType = number;
export enum AllocatorFlags {
    CUSTOM_ALLOC = 16,
    LAST = 1048576,
}
export enum BinFlags {
    NO_RESYNC = 16384,
    STREAMS_AWARE = 32768,
    LAST = 524288,
}
export enum BufferCopyFlags {
    NONE = 0,
    FLAGS = 1,
    TIMESTAMPS = 2,
    META = 4,
    MEMORY = 8,
    MERGE = 16,
    DEEP = 32,
}
export enum BufferFlags {
    LIVE = 16,
    DECODE_ONLY = 32,
    DISCONT = 64,
    RESYNC = 128,
    CORRUPTED = 256,
    MARKER = 512,
    HEADER = 1024,
    GAP = 2048,
    DROPPABLE = 4096,
    DELTA_UNIT = 8192,
    TAG_MEMORY = 16384,
    SYNC_AFTER = 32768,
    NON_DROPPABLE = 65536,
    LAST = 1048576,
}
export enum BufferPoolAcquireFlags {
    NONE = 0,
    KEY_UNIT = 1,
    DONTWAIT = 2,
    DISCONT = 4,
    LAST = 65536,
}
export enum BusFlags {
    FLUSHING = 16,
    FLAG_LAST = 32,
}
export enum CapsFlags {
    ANY = 16,
}
export enum ClockFlags {
    CAN_DO_SINGLE_SYNC = 16,
    CAN_DO_SINGLE_ASYNC = 32,
    CAN_DO_PERIODIC_SYNC = 64,
    CAN_DO_PERIODIC_ASYNC = 128,
    CAN_SET_RESOLUTION = 256,
    CAN_SET_MASTER = 512,
    NEEDS_STARTUP_SYNC = 1024,
    LAST = 4096,
}
export enum DebugColorFlags {
    FG_BLACK = 0,
    FG_RED = 1,
    FG_GREEN = 2,
    FG_YELLOW = 3,
    FG_BLUE = 4,
    FG_MAGENTA = 5,
    FG_CYAN = 6,
    FG_WHITE = 7,
    BG_BLACK = 0,
    BG_RED = 16,
    BG_GREEN = 32,
    BG_YELLOW = 48,
    BG_BLUE = 64,
    BG_MAGENTA = 80,
    BG_CYAN = 96,
    BG_WHITE = 112,
    BOLD = 256,
    UNDERLINE = 512,
}
export enum DebugGraphDetails {
    MEDIA_TYPE = 1,
    CAPS_DETAILS = 2,
    NON_DEFAULT_PARAMS = 4,
    STATES = 8,
    FULL_PARAMS = 16,
    ALL = 15,
    VERBOSE = 4294967295,
}
export enum ElementFlags {
    LOCKED_STATE = 16,
    SINK = 32,
    SOURCE = 64,
    PROVIDE_CLOCK = 128,
    REQUIRE_CLOCK = 256,
    INDEXABLE = 512,
    LAST = 16384,
}
export enum EventTypeFlags {
    UPSTREAM = 1,
    DOWNSTREAM = 2,
    SERIALIZED = 4,
    STICKY = 8,
    STICKY_MULTI = 16,
}
export enum LockFlags {
    READ = 1,
    WRITE = 2,
    EXCLUSIVE = 4,
    LAST = 256,
}
export enum MapFlags {
    READ = 1,
    WRITE = 2,
    FLAG_LAST = 65536,
}
export enum MemoryFlags {
    READONLY = 2,
    NO_SHARE = 16,
    ZERO_PREFIXED = 32,
    ZERO_PADDED = 64,
    PHYSICALLY_CONTIGUOUS = 128,
    NOT_MAPPABLE = 256,
    LAST = 1048576,
}
export enum MessageType {
    UNKNOWN = 0,
    EOS = 1,
    ERROR = 2,
    WARNING = 4,
    INFO = 8,
    TAG = 16,
    BUFFERING = 32,
    STATE_CHANGED = 64,
    STATE_DIRTY = 128,
    STEP_DONE = 256,
    CLOCK_PROVIDE = 512,
    CLOCK_LOST = 1024,
    NEW_CLOCK = 2048,
    STRUCTURE_CHANGE = 4096,
    STREAM_STATUS = 8192,
    APPLICATION = 16384,
    ELEMENT = 32768,
    SEGMENT_START = 65536,
    SEGMENT_DONE = 131072,
    DURATION_CHANGED = 262144,
    LATENCY = 524288,
    ASYNC_START = 1048576,
    ASYNC_DONE = 2097152,
    REQUEST_STATE = 4194304,
    STEP_START = 8388608,
    QOS = 16777216,
    PROGRESS = 33554432,
    TOC = 67108864,
    RESET_TIME = 134217728,
    STREAM_START = 268435456,
    NEED_CONTEXT = 536870912,
    HAVE_CONTEXT = 1073741824,
    EXTENDED = 2147483648,
    DEVICE_ADDED = 2147483649,
    DEVICE_REMOVED = 2147483650,
    PROPERTY_NOTIFY = 2147483651,
    STREAM_COLLECTION = 2147483652,
    STREAMS_SELECTED = 2147483653,
    REDIRECT = 2147483654,
    DEVICE_CHANGED = 2147483655,
    ANY = 4294967295,
}
export enum MetaFlags {
    NONE = 0,
    READONLY = 1,
    POOLED = 2,
    LOCKED = 4,
    LAST = 65536,
}
export enum MiniObjectFlags {
    LOCKABLE = 1,
    LOCK_READONLY = 2,
    MAY_BE_LEAKED = 4,
    LAST = 16,
}
export enum ObjectFlags {
    MAY_BE_LEAKED = 1,
    LAST = 16,
}
export enum PadFlags {
    BLOCKED = 16,
    FLUSHING = 32,
    EOS = 64,
    BLOCKING = 128,
    NEED_PARENT = 256,
    NEED_RECONFIGURE = 512,
    PENDING_EVENTS = 1024,
    FIXED_CAPS = 2048,
    PROXY_CAPS = 4096,
    PROXY_ALLOCATION = 8192,
    PROXY_SCHEDULING = 16384,
    ACCEPT_INTERSECT = 32768,
    ACCEPT_TEMPLATE = 65536,
    LAST = 1048576,
}
export enum PadLinkCheck {
    NOTHING = 0,
    HIERARCHY = 1,
    TEMPLATE_CAPS = 2,
    CAPS = 4,
    NO_RECONFIGURE = 8,
    DEFAULT = 5,
}
export enum PadProbeType {
    INVALID = 0,
    IDLE = 1,
    BLOCK = 2,
    BUFFER = 16,
    BUFFER_LIST = 32,
    EVENT_DOWNSTREAM = 64,
    EVENT_UPSTREAM = 128,
    EVENT_FLUSH = 256,
    QUERY_DOWNSTREAM = 512,
    QUERY_UPSTREAM = 1024,
    PUSH = 4096,
    PULL = 8192,
    BLOCKING = 3,
    DATA_DOWNSTREAM = 112,
    DATA_UPSTREAM = 128,
    DATA_BOTH = 240,
    BLOCK_DOWNSTREAM = 114,
    BLOCK_UPSTREAM = 130,
    EVENT_BOTH = 192,
    QUERY_BOTH = 1536,
    ALL_BOTH = 1776,
    SCHEDULING = 12288,
}
export enum PadTemplateFlags {
    LAST = 256,
}
export enum ParseFlags {
    NONE = 0,
    FATAL_ERRORS = 1,
    NO_SINGLE_ELEMENT_BINS = 2,
    PLACE_IN_BIN = 4,
}
export enum PipelineFlags {
    FIXED_CLOCK = 524288,
    LAST = 8388608,
}
export enum PluginDependencyFlags {
    NONE = 0,
    RECURSE = 1,
    PATHS_ARE_DEFAULT_ONLY = 2,
    FILE_NAME_IS_SUFFIX = 4,
    FILE_NAME_IS_PREFIX = 8,
    PATHS_ARE_RELATIVE_TO_EXE = 16,
}
export enum PluginFlags {
    CACHED = 16,
    BLACKLISTED = 32,
}
export enum QueryTypeFlags {
    UPSTREAM = 1,
    DOWNSTREAM = 2,
    SERIALIZED = 4,
}
export enum SchedulingFlags {
    SEEKABLE = 1,
    SEQUENTIAL = 2,
    BANDWIDTH_LIMITED = 4,
}
export enum SeekFlags {
    NONE = 0,
    FLUSH = 1,
    ACCURATE = 2,
    KEY_UNIT = 4,
    SEGMENT = 8,
    TRICKMODE = 16,
    SKIP = 16,
    SNAP_BEFORE = 32,
    SNAP_AFTER = 64,
    SNAP_NEAREST = 96,
    TRICKMODE_KEY_UNITS = 128,
    TRICKMODE_NO_AUDIO = 256,
}
export enum SegmentFlags {
    NONE = 0,
    RESET = 1,
    TRICKMODE = 16,
    SKIP = 16,
    SEGMENT = 8,
    TRICKMODE_KEY_UNITS = 128,
    TRICKMODE_NO_AUDIO = 256,
}
export enum StackTraceFlags {
    FULL = 1,
}
export enum StreamFlags {
    NONE = 0,
    SPARSE = 1,
    SELECT = 2,
    UNSELECT = 4,
}
export enum StreamType {
    UNKNOWN = 1,
    AUDIO = 2,
    VIDEO = 4,
    CONTAINER = 8,
    TEXT = 16,
}
export enum TracerValueFlags {
    NONE = 0,
    OPTIONAL = 1,
    AGGREGATED = 2,
}
export class Allocator  {
    constructor(config?: properties);
    readonly object: Object;
    readonly mem_type: string;
    readonly mem_map: MemoryMapFunction;
    readonly mem_unmap: MemoryUnmapFunction;
    readonly mem_copy: MemoryCopyFunction;
    readonly mem_share: MemoryShareFunction;
    readonly mem_is_span: MemoryIsSpanFunction;
    readonly mem_map_full: MemoryMapFullFunction;
    readonly mem_unmap_full: MemoryUnmapFullFunction;
    readonly priv: AllocatorPrivate;
    alloc(size: number, params: AllocationParams | null): Memory | null;
    free(memory: Memory): void;
    set_default(): void;
    static find(name: string | null): Allocator | null;
    static register(name: string, allocator: Allocator): void;
}
export class Bin extends Element {
    constructor(config?: properties);
    async_handling: boolean;
    message_forward: boolean;
    add(element: Element): boolean;
    find_unlinked_pad(direction: PadDirection): Pad | null;
    get_by_interface(iface: GType): Element | null;
    get_by_name(name: string): Element | null;
    get_by_name_recurse_up(name: string): Element | null;
    get_suppressed_flags(): ElementFlags;
    iterate_all_by_interface(iface: GType): Iterator | null;
    iterate_elements(): Iterator | null;
    iterate_recurse(): Iterator | null;
    iterate_sinks(): Iterator | null;
    iterate_sorted(): Iterator | null;
    iterate_sources(): Iterator | null;
    recalculate_latency(): boolean;
    remove(element: Element): boolean;
    set_suppressed_flags(flags: ElementFlags): void;
    sync_children_states(): boolean;
    vfunc_add_element(element: Element): boolean;
    vfunc_deep_element_added(sub_bin: Bin, child: Element): void;
    vfunc_deep_element_removed(sub_bin: Bin, child: Element): void;
    vfunc_do_latency(): boolean;
    vfunc_element_added(child: Element): void;
    vfunc_element_removed(child: Element): void;
    vfunc_handle_message(message: Message): void;
    vfunc_remove_element(element: Element): boolean;
}
export class Bitmask  {
    constructor(config?: properties);
}
export class BufferPool extends Object {
    constructor(config?: properties);
    acquire_buffer(params: BufferPoolAcquireParams | null): [FlowReturn, Buffer];
    get_config(): Structure;
    get_options(): string[];
    has_option(option: string): boolean;
    is_active(): boolean;
    release_buffer(buffer: Buffer): void;
    set_active(active: boolean): boolean;
    set_config(config: Structure): boolean;
    set_flushing(flushing: boolean): void;
    vfunc_acquire_buffer(params: BufferPoolAcquireParams | null): [FlowReturn, Buffer];
    vfunc_alloc_buffer(buffer: Buffer, params: BufferPoolAcquireParams): FlowReturn;
    vfunc_flush_start(): void;
    vfunc_flush_stop(): void;
    vfunc_free_buffer(buffer: Buffer): void;
    vfunc_get_options(): string[];
    vfunc_release_buffer(buffer: Buffer): void;
    vfunc_reset_buffer(buffer: Buffer): void;
    vfunc_set_config(config: Structure): boolean;
    vfunc_start(): boolean;
    vfunc_stop(): boolean;
    static config_add_option(config: Structure, option: string): void;
    static config_get_allocator(config: Structure): [boolean, Allocator | null,AllocationParams | null];
    static config_get_option(config: Structure, index: number): string;
    static config_get_params(config: Structure): [boolean, Caps | null,number | null,number | null,number | null];
    static config_has_option(config: Structure, option: string): boolean;
    static config_n_options(config: Structure): number;
    static config_set_allocator(config: Structure, allocator: Allocator | null, params: AllocationParams | null): void;
    static config_set_params(config: Structure, caps: Caps, size: number, min_buffers: number, max_buffers: number): void;
    static config_validate_params(config: Structure, caps: Caps, size: number, min_buffers: number, max_buffers: number): boolean;
}
export class Bus extends Object {
    constructor(config?: properties);
    enable_async: boolean;
    add_signal_watch(): void;
    add_signal_watch_full(priority: number): void;
    add_watch_full(priority: number, func: BusFunc, user_data: object | null, notify: GLib.DestroyNotify): number;
    async_signal_func(message: Message, data: object | null): boolean;
    create_watch(): GLib.Source | null;
    disable_sync_message_emission(): void;
    enable_sync_message_emission(): void;
    get_pollfd(): [GLib.PollFD];
    have_pending(): boolean;
    peek(): Message | null;
    poll(events: MessageType, timeout: ClockTime): Message | null;
    pop(): Message | null;
    pop_filtered(types: MessageType): Message | null;
    post(message: Message): boolean;
    remove_signal_watch(): void;
    remove_watch(): boolean;
    set_flushing(flushing: boolean): void;
    set_sync_handler(func: BusSyncHandler | null, user_data: object | null, notify: GLib.DestroyNotify): void;
    sync_signal_handler(message: Message, data: object | null): BusSyncReply;
    timed_pop(timeout: ClockTime): Message | null;
    timed_pop_filtered(timeout: ClockTime, types: MessageType): Message | null;
    vfunc_message(message: Message): void;
    vfunc_sync_message(message: Message): void;
}
export class Clock  {
    constructor(config?: properties);
    timeout: number;
    window_size: number;
    window_threshold: number;
    readonly object: Object;
    readonly priv: ClockPrivate;
    add_observation(slave: ClockTime, master: ClockTime): [boolean, number];
    add_observation_unapplied(slave: ClockTime, master: ClockTime): [boolean, number,ClockTime | null,ClockTime | null,ClockTime | null,ClockTime | null];
    adjust_unlocked(internal: ClockTime): ClockTime;
    adjust_with_calibration(internal_target: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime;
    get_calibration(): [ClockTime | null,ClockTime | null,ClockTime | null,ClockTime | null];
    get_internal_time(): ClockTime;
    get_master(): Clock | null;
    get_resolution(): ClockTime;
    get_time(): ClockTime;
    get_timeout(): ClockTime;
    is_synced(): boolean;
    new_periodic_id(start_time: ClockTime, interval: ClockTime): ClockID;
    new_single_shot_id(time: ClockTime): ClockID;
    periodic_id_reinit(id: ClockID, start_time: ClockTime, interval: ClockTime): boolean;
    set_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void;
    set_master(master: Clock | null): boolean;
    set_resolution(resolution: ClockTime): ClockTime;
    set_synced(synced: boolean): void;
    set_timeout(timeout: ClockTime): void;
    single_shot_id_reinit(id: ClockID, time: ClockTime): boolean;
    unadjust_unlocked(external: ClockTime): ClockTime;
    unadjust_with_calibration(external_target: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime;
    wait_for_sync(timeout: ClockTime): boolean;
    static id_compare_func(id1: object | null, id2: object | null): number;
    static id_get_clock(id: ClockID): Clock | null;
    static id_get_time(id: ClockID): ClockTime;
    static id_ref(id: ClockID): ClockID;
    static id_unref(id: ClockID): void;
    static id_unschedule(id: ClockID): void;
    static id_uses_clock(id: ClockID, clock: Clock): boolean;
    static id_wait(id: ClockID): [ClockReturn, ClockTimeDiff | null];
    static id_wait_async(id: ClockID, func: ClockCallback, user_data: object | null, destroy_data: GLib.DestroyNotify): ClockReturn;
}
export class ControlBinding  {
    constructor(config?: properties);
    name: string;
    object: Object;
    readonly pspec: GObject.ParamSpec;
    readonly disabled: boolean;
    get_g_value_array(timestamp: ClockTime, interval: ClockTime, n_values: number, values: GObject.Value[]): boolean;
    get_value(timestamp: ClockTime): GObject.Value | null;
    is_disabled(): boolean;
    set_disabled(disabled: boolean): void;
    sync_values(object: Object, timestamp: ClockTime, last_sync: ClockTime): boolean;
}
export class ControlSource  {
    constructor(config?: properties);
    readonly get_value: ControlSourceGetValue;
    readonly get_value_array: ControlSourceGetValueArray;
    control_source_get_value(timestamp: ClockTime): [boolean, number];
    control_source_get_value_array(timestamp: ClockTime, interval: ClockTime, n_values: number, values: number[]): boolean;
}
export class Device  {
    constructor(config?: properties);
    caps: Caps;
    device_class: string;
    display_name: string;
    properties: Structure;
    readonly priv: DevicePrivate;
    create_element(name: string | null): Element | null;
    get_caps(): Caps | null;
    get_device_class(): string;
    get_display_name(): string;
    get_properties(): Structure | null;
    has_classes(classes: string): boolean;
    has_classesv(classes: string[]): boolean;
    reconfigure_element(element: Element): boolean;
}
export class DeviceMonitor extends Object {
    constructor(config?: properties);
    add_filter(classes: string | null, caps: Caps | null): number;
    get_bus(): Bus;
    get_devices(): GLib.List | null;
    get_providers(): string[];
    get_show_all_devices(): boolean;
    remove_filter(filter_id: number): boolean;
    set_show_all_devices(show_all: boolean): void;
    start(): boolean;
    stop(): void;
}
export class DeviceProvider  {
    constructor(config?: properties);
    readonly devices: GLib.List;
    readonly priv: DeviceProviderPrivate;
    can_monitor(): boolean;
    device_add(device: Device): void;
    device_changed(device: Device, changed_device: Device): void;
    device_remove(device: Device): void;
    get_bus(): Bus;
    get_devices(): GLib.List;
    get_factory(): DeviceProviderFactory;
    get_hidden_providers(): string[];
    get_metadata(key: string): string;
    hide_provider(name: string): void;
    start(): boolean;
    stop(): void;
    unhide_provider(name: string): void;
    static register(plugin: Plugin | null, name: string, rank: number, type: GType): boolean;
}
export class DeviceProviderFactory  {
    constructor(config?: properties);
    get(): DeviceProvider | null;
    get_device_provider_type(): GType;
    get_metadata(key: string): string | null;
    get_metadata_keys(): string[] | null;
    has_classes(classes: string | null): boolean;
    has_classesv(classes: string[] | null): boolean;
    static find(name: string): DeviceProviderFactory | null;
    static get_by_name(factoryname: string): DeviceProvider | null;
    static list_get_device_providers(minrank: Rank): GLib.List;
}
export class DoubleRange  {
    constructor(config?: properties);
}
export class DynamicTypeFactory  {
    constructor(config?: properties);
    static load(factoryname: string): GType;
}
export class Element  {
    constructor(config?: properties);
    readonly object: Object;
    readonly state_lock: GLib.RecMutex;
    readonly state_cond: GLib.Cond;
    readonly state_cookie: number;
    readonly target_state: State;
    readonly current_state: State;
    readonly next_state: State;
    readonly pending_state: State;
    readonly last_return: StateChangeReturn;
    readonly bus: Bus;
    readonly clock: Clock;
    readonly base_time: ClockTimeDiff;
    readonly start_time: ClockTime;
    readonly numpads: number;
    readonly pads: GLib.List;
    readonly numsrcpads: number;
    readonly srcpads: GLib.List;
    readonly numsinkpads: number;
    readonly sinkpads: GLib.List;
    readonly pads_cookie: number;
    readonly contexts: GLib.List;
    abort_state(): void;
    add_pad(pad: Pad): boolean;
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number;
    add_property_notify_watch(property_name: string | null, include_value: boolean): number;
    call_async(func: ElementCallAsyncFunc, user_data: object | null, destroy_notify: GLib.DestroyNotify): void;
    change_state(transition: StateChange): StateChangeReturn;
    continue_state(ret: StateChangeReturn): StateChangeReturn;
    create_all_pads(): void;
    foreach_pad(func: ElementForeachPadFunc, user_data: object | null): boolean;
    foreach_sink_pad(func: ElementForeachPadFunc, user_data: object | null): boolean;
    foreach_src_pad(func: ElementForeachPadFunc, user_data: object | null): boolean;
    get_base_time(): ClockTime;
    get_bus(): Bus | null;
    get_clock(): Clock | null;
    get_compatible_pad(pad: Pad, caps: Caps | null): Pad | null;
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate | null;
    get_context(context_type: string): Context;
    get_context_unlocked(context_type: string): Context | null;
    get_contexts(): GLib.List;
    get_factory(): ElementFactory | null;
    get_metadata(key: string): string;
    get_pad_template(name: string): PadTemplate | null;
    get_pad_template_list(): GLib.List;
    get_request_pad(name: string): Pad | null;
    get_start_time(): ClockTime;
    get_state(timeout: ClockTime): [StateChangeReturn, State | null,State | null];
    get_static_pad(name: string): Pad | null;
    is_locked_state(): boolean;
    iterate_pads(): Iterator;
    iterate_sink_pads(): Iterator;
    iterate_src_pads(): Iterator;
    link(dest: Element): boolean;
    link_filtered(dest: Element, filter: Caps | null): boolean;
    link_pads(srcpadname: string | null, dest: Element, destpadname: string | null): boolean;
    link_pads_filtered(srcpadname: string | null, dest: Element, destpadname: string | null, filter: Caps | null): boolean;
    link_pads_full(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean;
    lost_state(): void;
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, _function: string, line: number): void;
    message_full_with_details(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, _function: string, line: number, structure: Structure): void;
    no_more_pads(): void;
    post_message(message: Message): boolean;
    provide_clock(): Clock | null;
    query(query: Query): boolean;
    query_convert(src_format: Format, src_val: number, dest_format: Format): [boolean, number];
    query_duration(format: Format): [boolean, number | null];
    query_position(format: Format): [boolean, number | null];
    release_request_pad(pad: Pad): void;
    remove_pad(pad: Pad): boolean;
    remove_property_notify_watch(watch_id: number): void;
    request_pad(templ: PadTemplate, name: string | null, caps: Caps | null): Pad | null;
    seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): boolean;
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean;
    send_event(event: Event): boolean;
    set_base_time(time: ClockTime): void;
    set_bus(bus: Bus | null): void;
    set_clock(clock: Clock | null): boolean;
    set_context(context: Context): void;
    set_locked_state(locked_state: boolean): boolean;
    set_start_time(time: ClockTime): void;
    set_state(state: State): StateChangeReturn;
    sync_state_with_parent(): boolean;
    unlink(dest: Element): void;
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void;
    static make_from_uri(type: URIType, uri: string, elementname: string | null): Element | null;
    static register(plugin: Plugin | null, name: string, rank: number, type: GType): boolean;
    static state_change_return_get_name(state_ret: StateChangeReturn): string;
    static state_get_name(state: State): string;
}
export class ElementFactory  {
    constructor(config?: properties);
    can_sink_all_caps(caps: Caps): boolean;
    can_sink_any_caps(caps: Caps): boolean;
    can_src_all_caps(caps: Caps): boolean;
    can_src_any_caps(caps: Caps): boolean;
    create(name: string | null): Element | null;
    get_element_type(): GType;
    get_metadata(key: string): string | null;
    get_metadata_keys(): string[] | null;
    get_num_pad_templates(): number;
    get_static_pad_templates(): GLib.List;
    get_uri_protocols(): string[];
    get_uri_type(): URIType;
    has_interface(interfacename: string): boolean;
    list_is_type(type: ElementFactoryListType): boolean;
    static find(name: string): ElementFactory | null;
    static list_filter(list: GLib.List, caps: Caps, direction: PadDirection, subsetonly: boolean): GLib.List;
    static list_get_elements(type: ElementFactoryListType, minrank: Rank): GLib.List;
    static make(factoryname: string, name: string | null): Element | null;
}
export class FlagSet  {
    constructor(config?: properties);
    static register(flags_type: GType): GType;
}
export class Fraction  {
    constructor(config?: properties);
}
export class FractionRange  {
    constructor(config?: properties);
}
export class GhostPad extends ProxyPad {
    constructor(config?: properties);
    static new_from_template(name: string | null, target: Pad, templ: PadTemplate): Pad | null;
    static new_no_target(name: string | null, dir: PadDirection): Pad | null;
    static new_no_target_from_template(name: string | null, templ: PadTemplate): Pad | null;
    construct(): boolean;
    get_target(): Pad | null;
    set_target(newtarget: Pad | null): boolean;
    static activate_mode_default(pad: Pad, parent: Object | null, mode: PadMode, active: boolean): boolean;
    static internal_activate_mode_default(pad: Pad, parent: Object | null, mode: PadMode, active: boolean): boolean;
}
export class Int64Range  {
    constructor(config?: properties);
}
export class IntRange  {
    constructor(config?: properties);
}
export class Object  {
    constructor(config?: properties);
    name: string;
    readonly object: GObject.InitiallyUnowned;
    readonly lock: GLib.Mutex;
    readonly flags: number;
    readonly control_bindings: GLib.List;
    readonly control_rate: number;
    readonly last_sync: number;
    add_control_binding(binding: ControlBinding): boolean;
    default_error(error: GLib.Error, debug: string | null): void;
    get_control_binding(property_name: string): ControlBinding | null;
    get_control_rate(): ClockTime;
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, n_values: number, values: GObject.Value[]): boolean;
    get_name(): string | null;
    get_parent(): Object | null;
    get_path_string(): string;
    get_value(property_name: string, timestamp: ClockTime): GObject.Value | null;
    has_active_control_bindings(): boolean;
    has_ancestor(ancestor: Object): boolean;
    has_as_ancestor(ancestor: Object): boolean;
    has_as_parent(parent: Object): boolean;
    ref(): Object;
    remove_control_binding(binding: ControlBinding): boolean;
    set_control_binding_disabled(property_name: string, disabled: boolean): void;
    set_control_bindings_disabled(disabled: boolean): void;
    set_control_rate(control_rate: ClockTime): void;
    set_name(name: string | null): boolean;
    set_parent(parent: Object): boolean;
    suggest_next_sync(): ClockTime;
    sync_values(timestamp: ClockTime): boolean;
    unparent(): void;
    unref(): void;
    static check_uniqueness(list: GLib.List, name: string): boolean;
    static default_deep_notify(object: GObject.Object, orig: Object, pspec: GObject.ParamSpec, excluded_props: string[] | null): void;
    static replace(oldobj: Object | null, newobj: Object | null): [boolean, Object | null];
}
export class Pad extends Object {
    constructor(config?: properties);
    readonly caps: Caps;
    direction: PadDirection;
    offset: number;
    template: PadTemplate;static new_from_static_template(templ: StaticPadTemplate, name: string): Pad;
    static new_from_template(templ: PadTemplate, name: string | null): Pad;
    activate_mode(mode: PadMode, active: boolean): boolean;
    add_probe(mask: PadProbeType, callback: PadProbeCallback, user_data: object | null, destroy_data: GLib.DestroyNotify): number;
    can_link(sinkpad: Pad): boolean;
    chain(buffer: Buffer): FlowReturn;
    chain_list(list: BufferList): FlowReturn;
    check_reconfigure(): boolean;
    create_stream_id(parent: Element, stream_id: string | null): string;
    event_default(parent: Object | null, event: Event): boolean;
    forward(forward: PadForwardFunction, user_data: object | null): boolean;
    get_allowed_caps(): Caps | null;
    get_current_caps(): Caps | null;
    get_direction(): PadDirection;
    get_element_private(): object | null;
    get_last_flow_return(): FlowReturn;
    get_offset(): number;
    get_pad_template(): PadTemplate | null;
    get_pad_template_caps(): Caps;
    get_parent_element(): Element | null;
    get_peer(): Pad | null;
    get_range(offset: number, size: number): [FlowReturn, Buffer];
    get_sticky_event(event_type: EventType, idx: number): Event | null;
    get_stream(): Stream | null;
    get_stream_id(): string | null;
    get_task_state(): TaskState;
    has_current_caps(): boolean;
    is_active(): boolean;
    is_blocked(): boolean;
    is_blocking(): boolean;
    is_linked(): boolean;
    iterate_internal_links(): Iterator | null;
    iterate_internal_links_default(parent: Object | null): Iterator | null;
    link(sinkpad: Pad): PadLinkReturn;
    link_full(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn;
    link_maybe_ghosting(sink: Pad): boolean;
    link_maybe_ghosting_full(sink: Pad, flags: PadLinkCheck): boolean;
    mark_reconfigure(): void;
    needs_reconfigure(): boolean;
    pause_task(): boolean;
    peer_query(query: Query): boolean;
    peer_query_accept_caps(caps: Caps): boolean;
    peer_query_caps(filter: Caps | null): Caps;
    peer_query_convert(src_format: Format, src_val: number, dest_format: Format): [boolean, number];
    peer_query_duration(format: Format): [boolean, number | null];
    peer_query_position(format: Format): [boolean, number | null];
    proxy_query_accept_caps(query: Query): boolean;
    proxy_query_caps(query: Query): boolean;
    pull_range(offset: number, size: number): [FlowReturn, Buffer];
    push(buffer: Buffer): FlowReturn;
    push_event(event: Event): boolean;
    push_list(list: BufferList): FlowReturn;
    query(query: Query): boolean;
    query_accept_caps(caps: Caps): boolean;
    query_caps(filter: Caps | null): Caps;
    query_convert(src_format: Format, src_val: number, dest_format: Format): [boolean, number];
    query_default(parent: Object | null, query: Query): boolean;
    query_duration(format: Format): [boolean, number | null];
    query_position(format: Format): [boolean, number | null];
    remove_probe(id: number): void;
    send_event(event: Event): boolean;
    set_activate_function_full(activate: PadActivateFunction, user_data: object | null, notify: GLib.DestroyNotify): void;
    set_activatemode_function_full(activatemode: PadActivateModeFunction, user_data: object | null, notify: GLib.DestroyNotify): void;
    set_active(active: boolean): boolean;
    set_chain_function_full(chain: PadChainFunction, user_data: object | null, notify: GLib.DestroyNotify): void;
    set_chain_list_function_full(chainlist: PadChainListFunction, user_data: object | null, notify: GLib.DestroyNotify): void;
    set_element_private(priv: object | null): void;
    set_event_full_function_full(event: PadEventFullFunction, user_data: object | null, notify: GLib.DestroyNotify): void;
    set_event_function_full(event: PadEventFunction, user_data: object | null, notify: GLib.DestroyNotify): void;
    set_getrange_function_full(get: PadGetRangeFunction, user_data: object | null, notify: GLib.DestroyNotify): void;
    set_iterate_internal_links_function_full(iterintlink: PadIterIntLinkFunction, user_data: object | null, notify: GLib.DestroyNotify): void;
    set_link_function_full(link: PadLinkFunction, user_data: object | null, notify: GLib.DestroyNotify): void;
    set_offset(offset: number): void;
    set_query_function_full(query: PadQueryFunction, user_data: object | null, notify: GLib.DestroyNotify): void;
    set_unlink_function_full(unlink: PadUnlinkFunction, user_data: object | null, notify: GLib.DestroyNotify): void;
    start_task(func: TaskFunction, user_data: object | null, notify: GLib.DestroyNotify): boolean;
    sticky_events_foreach(foreach_func: PadStickyEventsForeachFunction, user_data: object | null): void;
    stop_task(): boolean;
    store_sticky_event(event: Event): FlowReturn;
    unlink(sinkpad: Pad): boolean;
    use_fixed_caps(): void;
    vfunc_linked(peer: Pad): void;
    vfunc_unlinked(peer: Pad): void;
    static link_get_name(ret: PadLinkReturn): string;
}
export class PadTemplate extends Object {
    constructor(config?: properties);
    caps: Caps;
    direction: PadDirection;
    gtype: GType;
    name_template: string;
    presence: PadPresence;static new_from_static_pad_template_with_gtype(pad_template: StaticPadTemplate, pad_type: GType): PadTemplate | null;
    static new_with_gtype(name_template: string, direction: PadDirection, presence: PadPresence, caps: Caps, pad_type: GType): PadTemplate | null;
    get_caps(): Caps;
    pad_created(pad: Pad): void;
    vfunc_pad_created(pad: Pad): void;
}
export class ParamArray  {
    constructor(config?: properties);
}
export class ParamFraction  {
    constructor(config?: properties);
}
export class Pipeline extends Bin {
    constructor(config?: properties);
    auto_flush_bus: boolean;
    delay: number;
    latency: number;
    auto_clock(): void;
    get_auto_flush_bus(): boolean;
    get_bus(): Bus;
    get_delay(): ClockTime;
    get_latency(): ClockTime;
    get_pipeline_clock(): Clock;
    set_auto_flush_bus(auto_flush: boolean): void;
    set_delay(delay: ClockTime): void;
    set_latency(latency: ClockTime): void;
    use_clock(clock: Clock | null): void;
}
export class Plugin  {
    constructor(config?: properties);
    add_dependency(env_vars: string[] | null, paths: string[] | null, names: string[] | null, flags: PluginDependencyFlags): void;
    add_dependency_simple(env_vars: string | null, paths: string | null, names: string | null, flags: PluginDependencyFlags): void;
    get_cache_data(): Structure | null;
    get_description(): string;
    get_filename(): string;
    get_license(): string;
    get_name(): string;
    get_origin(): string;
    get_package(): string;
    get_release_date_string(): string | null;
    get_source(): string;
    get_version(): string;
    is_loaded(): boolean;
    load(): Plugin | null;
    set_cache_data(cache_data: Structure): void;
    static list_free(list: GLib.List): void;
    static load_by_name(name: string): Plugin | null;
    static load_file(filename: string): Plugin;
    static register_static(major_version: number, minor_version: number, name: string, description: string, init_func: PluginInitFunc, version: string, license: string, source: string, _package: string, origin: string): boolean;
    static register_static_full(major_version: number, minor_version: number, name: string, description: string, init_full_func: PluginInitFullFunc, version: string, license: string, source: string, _package: string, origin: string, user_data: object | null): boolean;
}
export class PluginFeature  {
    constructor(config?: properties);
    check_version(min_major: number, min_minor: number, min_micro: number): boolean;
    get_plugin(): Plugin | null;
    get_plugin_name(): string | null;
    get_rank(): number;
    load(): PluginFeature | null;
    set_rank(rank: number): void;
    static list_copy(list: GLib.List): GLib.List;
    static list_debug(list: GLib.List): void;
    static list_free(list: GLib.List): void;
    static rank_compare_func(p1: object | null, p2: object | null): number;
}
export class ProxyPad  {
    constructor(config?: properties);
    readonly pad: Pad;
    readonly priv: ProxyPadPrivate;
    get_internal(): ProxyPad | null;
    static chain_default(pad: Pad, parent: Object | null, buffer: Buffer): FlowReturn;
    static chain_list_default(pad: Pad, parent: Object | null, list: BufferList): FlowReturn;
    static getrange_default(pad: Pad, parent: Object, offset: number, size: number): [FlowReturn, Buffer];
    static iterate_internal_links_default(pad: Pad, parent: Object | null): Iterator | null;
}
export class Registry  {
    constructor(config?: properties);
    readonly object: Object;
    readonly priv: RegistryPrivate;
    add_feature(feature: PluginFeature): boolean;
    add_plugin(plugin: Plugin): boolean;
    check_feature_version(feature_name: string, min_major: number, min_minor: number, min_micro: number): boolean;
    feature_filter(filter: PluginFeatureFilter, first: boolean, user_data: object | null): GLib.List;
    find_feature(name: string, type: GType): PluginFeature | null;
    find_plugin(name: string): Plugin | null;
    get_feature_list(type: GType): GLib.List;
    get_feature_list_by_plugin(name: string): GLib.List;
    get_feature_list_cookie(): number;
    get_plugin_list(): GLib.List;
    lookup(filename: string): Plugin | null;
    lookup_feature(name: string): PluginFeature;
    plugin_filter(filter: PluginFilter, first: boolean, user_data: object | null): GLib.List;
    remove_feature(feature: PluginFeature): void;
    remove_plugin(plugin: Plugin): void;
    scan_path(path: string): boolean;
    static fork_is_enabled(): boolean;
    static fork_set_enabled(enabled: boolean): void;
    static get(): Registry;
}
export class Stream extends Object {
    constructor(config?: properties);
    caps: Caps;
    stream_flags: StreamFlags;
    stream_id: string;
    stream_type: StreamType;
    tags: TagList;
    get_caps(): Caps | null;
    get_stream_flags(): StreamFlags;
    get_stream_id(): string | null;
    get_stream_type(): StreamType;
    get_tags(): TagList | null;
    set_caps(caps: Caps | null): void;
    set_stream_flags(flags: StreamFlags): void;
    set_stream_type(stream_type: StreamType): void;
    set_tags(tags: TagList | null): void;
}
export class StreamCollection extends Object {
    constructor(config?: properties);
    upstream_id: string;
    add_stream(stream: Stream): boolean;
    get_size(): number;
    get_stream(index: number): Stream | null;
    get_upstream_id(): string;
    vfunc_stream_notify(stream: Stream, pspec: GObject.ParamSpec): void;
}
export class SystemClock  {
    constructor(config?: properties);
    clock_type: ClockType;
    readonly clock: Clock;
    readonly priv: SystemClockPrivate;
    static obtain(): Clock;
    static set_default(new_clock: Clock | null): void;
}
export class Task extends Object {
    constructor(config?: properties);
    get_pool(): TaskPool;
    get_state(): TaskState;
    join(): boolean;
    pause(): boolean;
    set_enter_callback(enter_func: TaskThreadFunc, user_data: object | null, notify: GLib.DestroyNotify): void;
    set_leave_callback(leave_func: TaskThreadFunc, user_data: object | null, notify: GLib.DestroyNotify): void;
    set_lock(mutex: GLib.RecMutex): void;
    set_pool(pool: TaskPool): void;
    set_state(state: TaskState): boolean;
    start(): boolean;
    stop(): boolean;
    static cleanup_all(): void;
}
export class TaskPool extends Object {
    constructor(config?: properties);
    cleanup(): void;
    join(id: object | null): void;
    prepare(): void;
    push(func: TaskPoolFunction, user_data: object | null): object | null;
    vfunc_cleanup(): void;
    vfunc_join(id: object | null): void;
    vfunc_prepare(): void;
    vfunc_push(func: TaskPoolFunction, user_data: object | null): object | null;
}
export class Tracer  {
    constructor(config?: properties);
    params: string;
    readonly priv: TracerPrivate;
}
export class TracerFactory  {
    constructor(config?: properties);
    get_tracer_type(): GType;
    static get_list(): GLib.List;
}
export class TracerRecord  {
    constructor(config?: properties);
}
export class TypeFindFactory  {
    constructor(config?: properties);
    call_function(find: TypeFind): void;
    get_caps(): Caps;
    get_extensions(): string[] | null;
    has_function(): boolean;
    static get_list(): GLib.List;
}
export class ValueArray  {
    constructor(config?: properties);
    static append_and_take_value(value: GObject.Value, append_value: GObject.Value): void;
    static append_value(value: GObject.Value, append_value: GObject.Value): void;
    static get_size(value: GObject.Value): number;
    static get_value(value: GObject.Value, index: number): GObject.Value;
    static prepend_value(value: GObject.Value, prepend_value: GObject.Value): void;
}
export class ValueList  {
    constructor(config?: properties);
    static append_and_take_value(value: GObject.Value, append_value: GObject.Value): void;
    static append_value(value: GObject.Value, append_value: GObject.Value): void;
    static concat(value1: GObject.Value, value2: GObject.Value): [GObject.Value];
    static get_size(value: GObject.Value): number;
    static get_value(value: GObject.Value, index: number): GObject.Value;
    static merge(value1: GObject.Value, value2: GObject.Value): [GObject.Value];
    static prepend_value(value: GObject.Value, prepend_value: GObject.Value): void;
}
export class AllocationParams  {
    constructor(config?: properties);
    flags: MemoryFlags;
    align: number;
    prefix: number;
    padding: number;
    copy(): AllocationParams | null;
    free(): void;
    init(): void;
}
export class AllocatorPrivate  {
    constructor(config?: properties);
}
export class AtomicQueue  {
    constructor(config?: properties);
    length(): number;
    peek(): object | null;
    pop(): object | null;
    push(data: object | null): void;
    ref(): void;
    unref(): void;
}
export class BinPrivate  {
    constructor(config?: properties);
}
export class Buffer  {
    constructor(config?: properties);
    static new_allocate(allocator: Allocator | null, size: number, params: AllocationParams | null): Buffer | null;
    static new_wrapped(data: number[], size: number): Buffer;
    static new_wrapped_bytes(bytes: GLib.Bytes): Buffer;
    static new_wrapped_full(flags: MemoryFlags, data: number[], maxsize: number, offset: number, size: number, user_data: object | null, notify: GLib.DestroyNotify | null): Buffer;
    add_meta(info: MetaInfo, params: object | null): Meta | null;
    add_parent_buffer_meta(ref: Buffer): ParentBufferMeta | null;
    add_protection_meta(info: Structure): ProtectionMeta;
    add_reference_timestamp_meta(reference: Caps, timestamp: ClockTime, duration: ClockTime): ReferenceTimestampMeta | null;
    append(buf2: Buffer): Buffer;
    append_memory(mem: Memory): void;
    append_region(buf2: Buffer, offset: number, size: number): Buffer;
    copy_deep(): Buffer;
    copy_into(src: Buffer, flags: BufferCopyFlags, offset: number, size: number): boolean;
    copy_region(flags: BufferCopyFlags, offset: number, size: number): Buffer;
    extract(offset: number): [number, number[],number];
    extract_dup(offset: number, size: number): [number[],number];
    fill(offset: number, src: number[], size: number): number;
    find_memory(offset: number, size: number): [boolean, number,number,number];
    foreach_meta(func: BufferForeachMetaFunc, user_data: object | null): boolean;
    get_all_memory(): Memory | null;
    get_flags(): BufferFlags;
    get_memory(idx: number): Memory | null;
    get_memory_range(idx: number, length: number): Memory | null;
    get_meta(api: GType): Meta | null;
    get_n_meta(api_type: GType): number;
    get_reference_timestamp_meta(reference: Caps | null): ReferenceTimestampMeta | null;
    get_size(): number;
    get_sizes(): [number, number | null,number | null];
    get_sizes_range(idx: number, length: number): [number, number | null,number | null];
    has_flags(flags: BufferFlags): boolean;
    insert_memory(idx: number, mem: Memory): void;
    is_all_memory_writable(): boolean;
    is_memory_range_writable(idx: number, length: number): boolean;
    map(flags: MapFlags): [boolean, MapInfo];
    map_range(idx: number, length: number, flags: MapFlags): [boolean, MapInfo];
    memcmp(offset: number, mem: number[], size: number): number;
    memset(offset: number, val: number, size: number): number;
    n_memory(): number;
    peek_memory(idx: number): Memory | null;
    prepend_memory(mem: Memory): void;
    remove_all_memory(): void;
    remove_memory(idx: number): void;
    remove_memory_range(idx: number, length: number): void;
    remove_meta(meta: Meta): boolean;
    replace_all_memory(mem: Memory): void;
    replace_memory(idx: number, mem: Memory): void;
    replace_memory_range(idx: number, length: number, mem: Memory): void;
    resize(offset: number, size: number): void;
    resize_range(idx: number, length: number, offset: number, size: number): boolean;
    set_flags(flags: BufferFlags): boolean;
    set_size(size: number): void;
    unmap(info: MapInfo): void;
    unset_flags(flags: BufferFlags): boolean;
    static get_max_memory(): number;
}
export class BufferList  {
    constructor(config?: properties);
    static new_sized(size: number): BufferList;
    calculate_size(): number;
    copy_deep(): BufferList;
    foreach(func: BufferListFunc, user_data: object | null): boolean;
    get(idx: number): Buffer | null;
    get_writable(idx: number): Buffer | null;
    insert(idx: number, buffer: Buffer): void;
    length(): number;
    remove(idx: number, length: number): void;
}
export class BufferPoolAcquireParams  {
    constructor(config?: properties);
    format: Format;
    start: number;
    stop: number;
    flags: BufferPoolAcquireFlags;
}
export class BufferPoolPrivate  {
    constructor(config?: properties);
}
export class BusPrivate  {
    constructor(config?: properties);
}
export class Caps  {
    constructor(config?: properties);
    static new_any(): Caps;
    static new_empty(): Caps;
    static new_empty_simple(media_type: string): Caps;
    append(caps2: Caps): void;
    append_structure(structure: Structure): void;
    append_structure_full(structure: Structure, features: CapsFeatures | null): void;
    can_intersect(caps2: Caps): boolean;
    copy(): Caps;
    copy_nth(nth: number): Caps;
    filter_and_map_in_place(func: CapsFilterMapFunc, user_data: object | null): void;
    fixate(): Caps;
    foreach(func: CapsForeachFunc, user_data: object | null): boolean;
    get_features(index: number): CapsFeatures | null;
    get_size(): number;
    get_structure(index: number): Structure;
    intersect(caps2: Caps): Caps;
    intersect_full(caps2: Caps, mode: CapsIntersectMode): Caps;
    is_always_compatible(caps2: Caps): boolean;
    is_any(): boolean;
    is_empty(): boolean;
    is_equal(caps2: Caps): boolean;
    is_equal_fixed(caps2: Caps): boolean;
    is_fixed(): boolean;
    is_strictly_equal(caps2: Caps): boolean;
    is_subset(superset: Caps): boolean;
    is_subset_structure(structure: Structure): boolean;
    is_subset_structure_full(structure: Structure, features: CapsFeatures | null): boolean;
    map_in_place(func: CapsMapFunc, user_data: object | null): boolean;
    merge(caps2: Caps): Caps;
    merge_structure(structure: Structure): Caps;
    merge_structure_full(structure: Structure, features: CapsFeatures | null): Caps;
    normalize(): Caps;
    remove_structure(idx: number): void;
    set_features(index: number, features: CapsFeatures | null): void;
    set_features_simple(features: CapsFeatures | null): void;
    set_value(field: string, value: GObject.Value): void;
    simplify(): Caps;
    steal_structure(index: number): Structure | null;
    subtract(subtrahend: Caps): Caps;
    to_string(): string;
    truncate(): Caps;
    static from_string(string: string): Caps | null;
}
export class CapsFeatures  {
    constructor(config?: properties);
    static new_any(): CapsFeatures;
    static new_empty(): CapsFeatures;
    add(feature: string): void;
    add_id(feature: GLib.Quark): void;
    contains(feature: string): boolean;
    contains_id(feature: GLib.Quark): boolean;
    copy(): CapsFeatures;
    free(): void;
    get_nth(i: number): string | null;
    get_nth_id(i: number): GLib.Quark;
    get_size(): number;
    is_any(): boolean;
    is_equal(features2: CapsFeatures): boolean;
    remove(feature: string): void;
    remove_id(feature: GLib.Quark): void;
    set_parent_refcount(refcount: number): boolean;
    to_string(): string;
    static from_string(features: string): CapsFeatures | null;
}
export class ClockEntry  {
    constructor(config?: properties);
    refcount: number;
    clock: Clock;
    type: ClockEntryType;
    time: ClockTime;
    interval: ClockTime;
    status: ClockReturn;
    func: ClockCallback;
    user_data: object;
    destroy_data: GLib.DestroyNotify;
    unscheduled: boolean;
    woken_up: boolean;
}
export class ClockPrivate  {
    constructor(config?: properties);
}
export class Context  {
    constructor(config?: properties);
    get_context_type(): string;
    get_structure(): Structure;
    has_context_type(context_type: string): boolean;
    is_persistent(): boolean;
    writable_structure(): Structure;
}
export class ControlBindingPrivate  {
    constructor(config?: properties);
}
export class DateTime  {
    constructor(config?: properties);
    static new_from_g_date_time(dt: GLib.DateTime): DateTime | null;
    static new_from_iso8601_string(string: string): DateTime | null;
    static new_from_unix_epoch_local_time(secs: number): DateTime;
    static new_from_unix_epoch_utc(secs: number): DateTime;
    static new_local_time(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime;
    static new_now_local_time(): DateTime;
    static new_now_utc(): DateTime;
    static new_y(year: number): DateTime;
    static new_ym(year: number, month: number): DateTime;
    static new_ymd(year: number, month: number, day: number): DateTime;
    get_day(): number;
    get_hour(): number;
    get_microsecond(): number;
    get_minute(): number;
    get_month(): number;
    get_second(): number;
    get_time_zone_offset(): number;
    get_year(): number;
    has_day(): boolean;
    has_month(): boolean;
    has_second(): boolean;
    has_time(): boolean;
    has_year(): boolean;
    ref(): DateTime;
    to_g_date_time(): GLib.DateTime | null;
    to_iso8601_string(): string | null;
    unref(): void;
}
export class DebugCategory  {
    constructor(config?: properties);
    readonly threshold: number;
    readonly color: number;
    readonly name: string;
    readonly description: string;
    free(): void;
    get_color(): number;
    get_description(): string;
    get_name(): string;
    get_threshold(): DebugLevel;
    reset_threshold(): void;
    set_threshold(level: DebugLevel): void;
}
export class DebugMessage  {
    constructor(config?: properties);
    get(): string | null;
}
export class DeviceMonitorPrivate  {
    constructor(config?: properties);
}
export class DevicePrivate  {
    constructor(config?: properties);
}
export class DeviceProviderPrivate  {
    constructor(config?: properties);
}
export class Event  {
    constructor(config?: properties);
    static new_buffer_size(format: Format, minsize: number, maxsize: number, async: boolean): Event;
    static new_caps(caps: Caps): Event | null;
    static new_custom(type: EventType, structure: Structure): Event | null;
    static new_eos(): Event;
    static new_flush_start(): Event;
    static new_flush_stop(reset_time: boolean): Event;
    static new_gap(timestamp: ClockTime, duration: ClockTime): Event;
    static new_latency(latency: ClockTime): Event;
    static new_navigation(structure: Structure): Event;
    static new_protection(system_id: string, data: Buffer, origin: string): Event;
    static new_qos(type: QOSType, proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): Event | null;
    static new_reconfigure(): Event;
    static new_seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): Event | null;
    static new_segment(segment: Segment): Event | null;
    static new_segment_done(format: Format, position: number): Event;
    static new_select_streams(streams: GLib.List): Event;
    static new_sink_message(name: string, msg: Message): Event;
    static new_step(format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Event | null;
    static new_stream_collection(collection: StreamCollection): Event;
    static new_stream_group_done(group_id: number): Event;
    static new_stream_start(stream_id: string): Event;
    static new_tag(taglist: TagList): Event;
    static new_toc(toc: Toc, updated: boolean): Event;
    static new_toc_select(uid: string): Event;
    copy_segment(segment: Segment): void;
    get_running_time_offset(): number;
    get_seqnum(): number;
    get_structure(): Structure | null;
    has_name(name: string): boolean;
    parse_buffer_size(): [Format,number,number,boolean];
    parse_caps(): [Caps];
    parse_flush_stop(): [boolean];
    parse_gap(): [ClockTime | null,ClockTime | null];
    parse_group_id(): [boolean, number];
    parse_latency(): [ClockTime];
    parse_protection(): [string | null,Buffer | null,string | null];
    parse_qos(): [QOSType,number,ClockTimeDiff,ClockTime];
    parse_seek(): [number,Format,SeekFlags,SeekType,number,SeekType,number];
    parse_seek_trickmode_interval(): [ClockTime];
    parse_segment(): [Segment];
    parse_segment_done(): [Format | null,number | null];
    parse_select_streams(): [GLib.List];
    parse_sink_message(): [Message];
    parse_step(): [Format | null,number | null,number | null,boolean | null,boolean | null];
    parse_stream(): [Stream];
    parse_stream_collection(): [StreamCollection];
    parse_stream_flags(): [StreamFlags];
    parse_stream_group_done(): [number];
    parse_stream_start(): [string];
    parse_tag(): [TagList];
    parse_toc(): [Toc,boolean];
    parse_toc_select(): [string | null];
    set_group_id(group_id: number): void;
    set_running_time_offset(offset: number): void;
    set_seek_trickmode_interval(interval: ClockTime): void;
    set_seqnum(seqnum: number): void;
    set_stream(stream: Stream): void;
    set_stream_flags(flags: StreamFlags): void;
    writable_structure(): Structure;
}
export class FormatDefinition  {
    constructor(config?: properties);
    value: Format;
    nick: string;
    description: string;
    quark: GLib.Quark;
}
export class GhostPadPrivate  {
    constructor(config?: properties);
}
export class Iterator  {
    constructor(config?: properties);
    static new_single(type: GType, object: GObject.Value): Iterator;
    copy(): Iterator;
    filter(func: GLib.CompareFunc, user_data: GObject.Value): Iterator;
    find_custom(func: GLib.CompareFunc, user_data: object | null): [boolean, GObject.Value];
    fold(func: IteratorFoldFunction, ret: GObject.Value, user_data: object | null): IteratorResult;
    foreach(func: IteratorForeachFunction, user_data: object | null): IteratorResult;
    free(): void;
    next(): [IteratorResult, GObject.Value];
    push(other: Iterator): void;
    resync(): void;
}
export class MapInfo  {
    constructor(config?: properties);
    memory: Memory;
    flags: MapFlags;
    data: number[];
    size: number;
    maxsize: number;
    user_data: object[];
}
export class Memory  {
    constructor(config?: properties);
    static new_wrapped(flags: MemoryFlags, data: number[], maxsize: number, offset: number, size: number, user_data: object | null, notify: GLib.DestroyNotify | null): Memory | null;
    copy(offset: number, size: number): Memory;
    get_sizes(): [number, number | null,number | null];
    is_span(mem2: Memory): [boolean, number];
    is_type(mem_type: string): boolean;
    make_mapped(flags: MapFlags): [Memory | null, MapInfo];
    map(flags: MapFlags): [boolean, MapInfo];
    resize(offset: number, size: number): void;
    share(offset: number, size: number): Memory;
    unmap(info: MapInfo): void;
}
export class Message  {
    constructor(config?: properties);
    static new_application(src: Object | null, structure: Structure): Message | null;
    static new_async_done(src: Object | null, running_time: ClockTime): Message;
    static new_async_start(src: Object | null): Message;
    static new_buffering(src: Object | null, percent: number): Message | null;
    static new_clock_lost(src: Object | null, clock: Clock): Message;
    static new_clock_provide(src: Object | null, clock: Clock, ready: boolean): Message;
    static new_custom(type: MessageType, src: Object | null, structure: Structure | null): Message | null;
    static new_device_added(src: Object, device: Device): Message;
    static new_device_changed(src: Object, device: Device, changed_device: Device): Message;
    static new_device_removed(src: Object, device: Device): Message;
    static new_duration_changed(src: Object | null): Message;
    static new_element(src: Object | null, structure: Structure): Message | null;
    static new_eos(src: Object | null): Message;
    static new_error(src: Object | null, error: GLib.Error, debug: string): Message;
    static new_error_with_details(src: Object | null, error: GLib.Error, debug: string, details: Structure | null): Message | null;
    static new_have_context(src: Object | null, context: Context): Message;
    static new_info(src: Object | null, error: GLib.Error, debug: string): Message;
    static new_info_with_details(src: Object | null, error: GLib.Error, debug: string, details: Structure | null): Message | null;
    static new_latency(src: Object | null): Message;
    static new_need_context(src: Object | null, context_type: string): Message;
    static new_new_clock(src: Object | null, clock: Clock): Message;
    static new_progress(src: Object, type: ProgressType, code: string, text: string): Message | null;
    static new_property_notify(src: Object, property_name: string, val: GObject.Value | null): Message;
    static new_qos(src: Object, live: boolean, running_time: number, stream_time: number, timestamp: number, duration: number): Message;
    static new_redirect(src: Object, location: string, tag_list: TagList | null, entry_struct: Structure | null): Message;
    static new_request_state(src: Object | null, state: State): Message;
    static new_reset_time(src: Object | null, running_time: ClockTime): Message;
    static new_segment_done(src: Object | null, format: Format, position: number): Message;
    static new_segment_start(src: Object | null, format: Format, position: number): Message;
    static new_state_changed(src: Object | null, oldstate: State, newstate: State, pending: State): Message;
    static new_state_dirty(src: Object | null): Message;
    static new_step_done(src: Object, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean, duration: number, eos: boolean): Message;
    static new_step_start(src: Object, active: boolean, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Message;
    static new_stream_collection(src: Object, collection: StreamCollection): Message;
    static new_stream_start(src: Object | null): Message;
    static new_stream_status(src: Object, type: StreamStatusType, owner: Element): Message;
    static new_streams_selected(src: Object, collection: StreamCollection): Message;
    static new_structure_change(src: Object | null, type: StructureChangeType, owner: Element, busy: boolean): Message;
    static new_tag(src: Object | null, tag_list: TagList): Message;
    static new_toc(src: Object, toc: Toc, updated: boolean): Message;
    static new_warning(src: Object | null, error: GLib.Error, debug: string): Message;
    static new_warning_with_details(src: Object | null, error: GLib.Error, debug: string, details: Structure | null): Message | null;
    add_redirect_entry(location: string, tag_list: TagList | null, entry_struct: Structure | null): void;
    get_num_redirect_entries(): number;
    get_seqnum(): number;
    get_stream_status_object(): GObject.Value | null;
    get_structure(): Structure | null;
    has_name(name: string): boolean;
    parse_async_done(): [ClockTime | null];
    parse_buffering(): [number | null];
    parse_buffering_stats(): [BufferingMode | null,number | null,number | null,number | null];
    parse_clock_lost(): [Clock | null];
    parse_clock_provide(): [Clock | null,boolean | null];
    parse_context_type(): [boolean, string | null];
    parse_device_added(): [Device | null];
    parse_device_changed(): [Device | null,Device | null];
    parse_device_removed(): [Device | null];
    parse_error(): [GLib.Error | null,string | null];
    parse_error_details(): [Structure];
    parse_group_id(): [boolean, number | null];
    parse_have_context(): [Context | null];
    parse_info(): [GLib.Error | null,string | null];
    parse_info_details(): [Structure];
    parse_new_clock(): [Clock | null];
    parse_progress(): [ProgressType | null,string | null,string | null];
    parse_property_notify(): [Object | null,string | null,GObject.Value | null];
    parse_qos(): [boolean | null,number | null,number | null,number | null,number | null];
    parse_qos_stats(): [Format | null,number | null,number | null];
    parse_qos_values(): [number | null,number | null,number | null];
    parse_redirect_entry(entry_index: number): [string | null,TagList | null,Structure | null];
    parse_request_state(): [State | null];
    parse_reset_time(): [ClockTime | null];
    parse_segment_done(): [Format | null,number | null];
    parse_segment_start(): [Format | null,number | null];
    parse_state_changed(): [State | null,State | null,State | null];
    parse_step_done(): [Format | null,number | null,number | null,boolean | null,boolean | null,number | null,boolean | null];
    parse_step_start(): [boolean | null,Format | null,number | null,number | null,boolean | null,boolean | null];
    parse_stream_collection(): [StreamCollection | null];
    parse_stream_status(): [StreamStatusType,Element];
    parse_streams_selected(): [StreamCollection | null];
    parse_structure_change(): [StructureChangeType,Element | null,boolean | null];
    parse_tag(): [TagList];
    parse_toc(): [Toc,boolean];
    parse_warning(): [GLib.Error | null,string | null];
    parse_warning_details(): [Structure];
    set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number): void;
    set_group_id(group_id: number): void;
    set_qos_stats(format: Format, processed: number, dropped: number): void;
    set_qos_values(jitter: number, proportion: number, quality: number): void;
    set_seqnum(seqnum: number): void;
    set_stream_status_object(object: GObject.Value): void;
    streams_selected_add(stream: Stream): void;
    streams_selected_get_size(): number;
    streams_selected_get_stream(idx: number): Stream | null;
    writable_structure(): Structure;
}
export class Meta  {
    constructor(config?: properties);
    flags: MetaFlags;
    info: MetaInfo;
    compare_seqnum(meta2: Meta): number;
    get_seqnum(): number;
    static api_type_get_tags(api: GType): string[];
    static api_type_has_tag(api: GType, tag: GLib.Quark): boolean;
    static api_type_register(api: string, tags: string[]): GType;
    static get_info(impl: string): MetaInfo | null;
    static register(api: GType, impl: string, size: number, init_func: MetaInitFunction, free_func: MetaFreeFunction, transform_func: MetaTransformFunction): MetaInfo | null;
}
export class MetaInfo  {
    constructor(config?: properties);
    api: GType;
    type: GType;
    size: number;
    init_func: MetaInitFunction;
    free_func: MetaFreeFunction;
    transform_func: MetaTransformFunction;
}
export class MetaTransformCopy  {
    constructor(config?: properties);
    region: boolean;
    offset: number;
    size: number;
}
export class MiniObject  {
    constructor(config?: properties);
    type: GType;
    refcount: number;
    lockstate: number;
    flags: number;
    dispose: MiniObjectDisposeFunction;
    free: MiniObjectFreeFunction;
    readonly priv_uint: number;
    readonly priv_pointer: object;
    add_parent(parent: MiniObject): void;
    get_qdata(quark: GLib.Quark): object | null;
    is_writable(): boolean;
    lock(flags: LockFlags): boolean;
    remove_parent(parent: MiniObject): void;
    set_qdata(quark: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify): void;
    steal_qdata(quark: GLib.Quark): object | null;
    unlock(flags: LockFlags): void;
    static replace(olddata: MiniObject | null, newdata: MiniObject | null): [boolean, MiniObject | null];
    static take(olddata: MiniObject, newdata: MiniObject): [boolean, MiniObject];
}
export class PadPrivate  {
    constructor(config?: properties);
}
export class PadProbeInfo  {
    constructor(config?: properties);
    type: PadProbeType;
    id: number;
    data: object;
    offset: number;
    size: number;
    get_buffer(): Buffer | null;
    get_buffer_list(): BufferList | null;
    get_event(): Event | null;
    get_query(): Query | null;
}
export class ParamSpecArray  {
    constructor(config?: properties);
    element_spec: GObject.ParamSpec;
}
export class ParamSpecFraction  {
    constructor(config?: properties);
    min_num: number;
    min_den: number;
    max_num: number;
    max_den: number;
    def_num: number;
    def_den: number;
}
export class ParentBufferMeta  {
    constructor(config?: properties);
    buffer: Buffer;
    static get_info(): MetaInfo;
}
export class ParseContext  {
    constructor(config?: properties);
    copy(): ParseContext | null;
    free(): void;
    get_missing_elements(): string[] | null;
}
export class PipelinePrivate  {
    constructor(config?: properties);
}
export class PluginDesc  {
    constructor(config?: properties);
    major_version: number;
    minor_version: number;
    name: string;
    description: string;
    plugin_init: PluginInitFunc;
    version: string;
    license: string;
    source: string;
    "package": string;
    origin: string;
    release_datetime: string;
}
export class Poll  {
    constructor(config?: properties);
    add_fd(fd: PollFD): boolean;
    fd_can_read(fd: PollFD): boolean;
    fd_can_write(fd: PollFD): boolean;
    fd_ctl_pri(fd: PollFD, active: boolean): boolean;
    fd_ctl_read(fd: PollFD, active: boolean): boolean;
    fd_ctl_write(fd: PollFD, active: boolean): boolean;
    fd_has_closed(fd: PollFD): boolean;
    fd_has_error(fd: PollFD): boolean;
    fd_has_pri(fd: PollFD): boolean;
    fd_ignored(fd: PollFD): void;
    free(): void;
    get_read_gpollfd(fd: GLib.PollFD): void;
    read_control(): boolean;
    remove_fd(fd: PollFD): boolean;
    restart(): void;
    set_controllable(controllable: boolean): boolean;
    set_flushing(flushing: boolean): void;
    wait(timeout: ClockTime): number;
    write_control(): boolean;
}
export class PollFD  {
    constructor(config?: properties);
    fd: number;
    readonly idx: number;
    init(): void;
}
export class Promise  {
    constructor(config?: properties);
    static new_with_change_func(func: PromiseChangeFunc, user_data: object | null, notify: GLib.DestroyNotify): Promise;
    expire(): void;
    get_reply(): Structure;
    interrupt(): void;
    reply(s: Structure): void;
    wait(): PromiseResult;
}
export class ProtectionMeta  {
    constructor(config?: properties);
    meta: Meta;
    info: Structure;
    static get_info(): MetaInfo;
}
export class ProxyPadPrivate  {
    constructor(config?: properties);
}
export class Query  {
    constructor(config?: properties);
    static new_accept_caps(caps: Caps): Query;
    static new_allocation(caps: Caps, need_pool: boolean): Query;
    static new_bitrate(): Query;
    static new_buffering(format: Format): Query;
    static new_caps(filter: Caps): Query;
    static new_context(context_type: string): Query;
    static new_convert(src_format: Format, value: number, dest_format: Format): Query;
    static new_custom(type: QueryType, structure: Structure | null): Query | null;
    static new_drain(): Query;
    static new_duration(format: Format): Query;
    static new_formats(): Query;
    static new_latency(): Query;
    static new_position(format: Format): Query;
    static new_scheduling(): Query;
    static new_seeking(format: Format): Query;
    static new_segment(format: Format): Query;
    static new_uri(): Query;
    add_allocation_meta(api: GType, params: Structure | null): void;
    add_allocation_param(allocator: Allocator | null, params: AllocationParams | null): void;
    add_allocation_pool(pool: BufferPool | null, size: number, min_buffers: number, max_buffers: number): void;
    add_buffering_range(start: number, stop: number): boolean;
    add_scheduling_mode(mode: PadMode): void;
    find_allocation_meta(api: GType): [boolean, number | null];
    get_n_allocation_metas(): number;
    get_n_allocation_params(): number;
    get_n_allocation_pools(): number;
    get_n_buffering_ranges(): number;
    get_n_scheduling_modes(): number;
    get_structure(): Structure | null;
    has_scheduling_mode(mode: PadMode): boolean;
    has_scheduling_mode_with_flags(mode: PadMode, flags: SchedulingFlags): boolean;
    parse_accept_caps(): [Caps];
    parse_accept_caps_result(): [boolean | null];
    parse_allocation(): [Caps | null,boolean | null];
    parse_bitrate(): [number | null];
    parse_buffering_percent(): [boolean | null,number | null];
    parse_buffering_range(): [Format | null,number | null,number | null,number | null];
    parse_buffering_stats(): [BufferingMode | null,number | null,number | null,number | null];
    parse_caps(): [Caps];
    parse_caps_result(): [Caps];
    parse_context(): [Context];
    parse_context_type(): [boolean, string | null];
    parse_convert(): [Format | null,number | null,Format | null,number | null];
    parse_duration(): [Format | null,number | null];
    parse_latency(): [boolean | null,ClockTime | null,ClockTime | null];
    parse_n_formats(): [number | null];
    parse_nth_allocation_meta(index: number): [GType, Structure | null];
    parse_nth_allocation_param(index: number): [Allocator | null,AllocationParams | null];
    parse_nth_allocation_pool(index: number): [BufferPool | null,number | null,number | null,number | null];
    parse_nth_buffering_range(index: number): [boolean, number | null,number | null];
    parse_nth_format(nth: number): [Format | null];
    parse_nth_scheduling_mode(index: number): PadMode;
    parse_position(): [Format | null,number | null];
    parse_scheduling(): [SchedulingFlags | null,number | null,number | null,number | null];
    parse_seeking(): [Format | null,boolean | null,number | null,number | null];
    parse_segment(): [number | null,Format | null,number | null,number | null];
    parse_uri(): [string | null];
    parse_uri_redirection(): [string | null];
    parse_uri_redirection_permanent(): [boolean | null];
    remove_nth_allocation_meta(index: number): void;
    remove_nth_allocation_param(index: number): void;
    remove_nth_allocation_pool(index: number): void;
    set_accept_caps_result(result: boolean): void;
    set_bitrate(nominal_bitrate: number): void;
    set_buffering_percent(busy: boolean, percent: number): void;
    set_buffering_range(format: Format, start: number, stop: number, estimated_total: number): void;
    set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number): void;
    set_caps_result(caps: Caps): void;
    set_context(context: Context): void;
    set_convert(src_format: Format, src_value: number, dest_format: Format, dest_value: number): void;
    set_duration(format: Format, duration: number): void;
    set_formatsv(n_formats: number, formats: Format[]): void;
    set_latency(live: boolean, min_latency: ClockTime, max_latency: ClockTime): void;
    set_nth_allocation_param(index: number, allocator: Allocator | null, params: AllocationParams | null): void;
    set_nth_allocation_pool(index: number, pool: BufferPool | null, size: number, min_buffers: number, max_buffers: number): void;
    set_position(format: Format, cur: number): void;
    set_scheduling(flags: SchedulingFlags, minsize: number, maxsize: number, align: number): void;
    set_seeking(format: Format, seekable: boolean, segment_start: number, segment_end: number): void;
    set_segment(rate: number, format: Format, start_value: number, stop_value: number): void;
    set_uri(uri: string): void;
    set_uri_redirection(uri: string): void;
    set_uri_redirection_permanent(permanent: boolean): void;
    writable_structure(): Structure;
}
export class ReferenceTimestampMeta  {
    constructor(config?: properties);
    reference: Caps;
    timestamp: ClockTime;
    duration: ClockTime;
    static get_info(): MetaInfo;
}
export class RegistryPrivate  {
    constructor(config?: properties);
}
export class Sample  {
    constructor(config?: properties);
    get_buffer(): Buffer | null;
    get_buffer_list(): BufferList | null;
    get_caps(): Caps | null;
    get_info(): Structure | null;
    get_segment(): Segment;
    set_buffer(buffer: Buffer): void;
    set_buffer_list(buffer_list: BufferList): void;
    set_caps(caps: Caps): void;
    set_info(info: Structure): boolean;
    set_segment(segment: Segment): void;
}
export class Segment  {
    constructor(config?: properties);
    clip(format: Format, start: number, stop: number): [boolean, number | null,number | null];
    copy(): Segment;
    copy_into(dest: Segment): void;
    do_seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): [boolean, boolean | null];
    free(): void;
    init(format: Format): void;
    is_equal(s1: Segment): boolean;
    offset_running_time(format: Format, offset: number): boolean;
    position_from_running_time(format: Format, running_time: number): number;
    position_from_running_time_full(format: Format, running_time: number): [number, number];
    position_from_stream_time(format: Format, stream_time: number): number;
    position_from_stream_time_full(format: Format, stream_time: number): [number, number];
    set_running_time(format: Format, running_time: number): boolean;
    to_position(format: Format, running_time: number): number;
    to_running_time(format: Format, position: number): number;
    to_running_time_full(format: Format, position: number): [number, number | null];
    to_stream_time(format: Format, position: number): number;
    to_stream_time_full(format: Format, position: number): [number, number];
}
export class StaticCaps  {
    constructor(config?: properties);
    caps: Caps;
    string: string;
    cleanup(): void;
    get(): Caps | null;
}
export class StaticPadTemplate  {
    constructor(config?: properties);
    name_template: string;
    direction: PadDirection;
    presence: PadPresence;
    static_caps: StaticCaps;
    get(): PadTemplate | null;
    get_caps(): Caps;
}
export class StreamCollectionPrivate  {
    constructor(config?: properties);
}
export class StreamPrivate  {
    constructor(config?: properties);
}
export class Structure  {
    constructor(config?: properties);
    static new_empty(name: string): Structure;
    static new_from_string(string: string): Structure | null;
    static new_id_empty(quark: GLib.Quark): Structure;
    can_intersect(struct2: Structure): boolean;
    copy(): Structure;
    filter_and_map_in_place(func: StructureFilterMapFunc, user_data: object | null): void;
    fixate(): void;
    fixate_field(field_name: string): boolean;
    fixate_field_boolean(field_name: string, target: boolean): boolean;
    fixate_field_nearest_double(field_name: string, target: number): boolean;
    fixate_field_nearest_fraction(field_name: string, target_numerator: number, target_denominator: number): boolean;
    fixate_field_nearest_int(field_name: string, target: number): boolean;
    fixate_field_string(field_name: string, target: string): boolean;
    foreach(func: StructureForeachFunc, user_data: object | null): boolean;
    free(): void;
    get_array(fieldname: string): [boolean, GObject.ValueArray];
    get_boolean(fieldname: string): [boolean, boolean];
    get_clock_time(fieldname: string): [boolean, ClockTime];
    get_date(fieldname: string): [boolean, GLib.Date];
    get_date_time(fieldname: string): [boolean, DateTime];
    get_double(fieldname: string): [boolean, number];
    get_enum(fieldname: string, enumtype: GType): [boolean, number];
    get_field_type(fieldname: string): GType;
    get_flagset(fieldname: string): [boolean, number | null,number | null];
    get_fraction(fieldname: string): [boolean, number,number];
    get_int(fieldname: string): [boolean, number];
    get_int64(fieldname: string): [boolean, number];
    get_list(fieldname: string): [boolean, GObject.ValueArray];
    get_name(): string;
    get_name_id(): GLib.Quark;
    get_string(fieldname: string): string | null;
    get_uint(fieldname: string): [boolean, number];
    get_uint64(fieldname: string): [boolean, number];
    get_value(fieldname: string): GObject.Value | null;
    has_field(fieldname: string): boolean;
    has_field_typed(fieldname: string, type: GType): boolean;
    has_name(name: string): boolean;
    id_get_value(field: GLib.Quark): GObject.Value | null;
    id_has_field(field: GLib.Quark): boolean;
    id_has_field_typed(field: GLib.Quark, type: GType): boolean;
    id_set_value(field: GLib.Quark, value: GObject.Value): void;
    id_take_value(field: GLib.Quark, value: GObject.Value): void;
    intersect(struct2: Structure): Structure | null;
    is_equal(structure2: Structure): boolean;
    is_subset(superset: Structure): boolean;
    map_in_place(func: StructureMapFunc, user_data: object | null): boolean;
    n_fields(): number;
    nth_field_name(index: number): string;
    remove_all_fields(): void;
    remove_field(fieldname: string): void;
    set_array(fieldname: string, array: GObject.ValueArray): void;
    set_list(fieldname: string, array: GObject.ValueArray): void;
    set_name(name: string): void;
    set_parent_refcount(refcount: number): boolean;
    set_value(fieldname: string, value: GObject.Value): void;
    take_value(fieldname: string, value: GObject.Value): void;
    to_string(): string;
    static from_string(string: string): [Structure | null, string | null];
}
export class SystemClockPrivate  {
    constructor(config?: properties);
}
export class TagList  {
    constructor(config?: properties);
    static new_empty(): TagList;
    static new_from_string(str: string): TagList | null;
    add_value(mode: TagMergeMode, tag: string, value: GObject.Value): void;
    foreach(func: TagForeachFunc, user_data: object | null): void;
    get_boolean(tag: string): [boolean, boolean];
    get_boolean_index(tag: string, index: number): [boolean, boolean];
    get_date(tag: string): [boolean, GLib.Date];
    get_date_index(tag: string, index: number): [boolean, GLib.Date];
    get_date_time(tag: string): [boolean, DateTime];
    get_date_time_index(tag: string, index: number): [boolean, DateTime];
    get_double(tag: string): [boolean, number];
    get_double_index(tag: string, index: number): [boolean, number];
    get_float(tag: string): [boolean, number];
    get_float_index(tag: string, index: number): [boolean, number];
    get_int(tag: string): [boolean, number];
    get_int64(tag: string): [boolean, number];
    get_int64_index(tag: string, index: number): [boolean, number];
    get_int_index(tag: string, index: number): [boolean, number];
    get_pointer(tag: string): [boolean, object | null];
    get_pointer_index(tag: string, index: number): [boolean, object | null];
    get_sample(tag: string): [boolean, Sample];
    get_sample_index(tag: string, index: number): [boolean, Sample];
    get_scope(): TagScope;
    get_string(tag: string): [boolean, string];
    get_string_index(tag: string, index: number): [boolean, string];
    get_tag_size(tag: string): number;
    get_uint(tag: string): [boolean, number];
    get_uint64(tag: string): [boolean, number];
    get_uint64_index(tag: string, index: number): [boolean, number];
    get_uint_index(tag: string, index: number): [boolean, number];
    get_value_index(tag: string, index: number): GObject.Value | null;
    insert(from: TagList, mode: TagMergeMode): void;
    is_empty(): boolean;
    is_equal(list2: TagList): boolean;
    merge(list2: TagList | null, mode: TagMergeMode): TagList | null;
    n_tags(): number;
    nth_tag_name(index: number): string;
    peek_string_index(tag: string, index: number): [boolean, string];
    remove_tag(tag: string): void;
    set_scope(scope: TagScope): void;
    to_string(): string | null;
    static copy_value(list: TagList, tag: string): [boolean, GObject.Value];
}
export class TaskPrivate  {
    constructor(config?: properties);
}
export class TimedValue  {
    constructor(config?: properties);
    timestamp: ClockTime;
    value: number;
}
export class Toc  {
    constructor(config?: properties);
    append_entry(entry: TocEntry): void;
    dump(): void;
    find_entry(uid: string): TocEntry | null;
    get_entries(): GLib.List;
    get_scope(): TocScope;
    get_tags(): TagList;
    merge_tags(tags: TagList | null, mode: TagMergeMode): void;
    set_tags(tags: TagList | null): void;
}
export class TocEntry  {
    constructor(config?: properties);
    append_sub_entry(subentry: TocEntry): void;
    get_entry_type(): TocEntryType;
    get_loop(): [boolean, TocLoopType | null,number | null];
    get_parent(): TocEntry | null;
    get_start_stop_times(): [boolean, number | null,number | null];
    get_sub_entries(): GLib.List;
    get_tags(): TagList;
    get_toc(): Toc;
    get_uid(): string;
    is_alternative(): boolean;
    is_sequence(): boolean;
    merge_tags(tags: TagList | null, mode: TagMergeMode): void;
    set_loop(loop_type: TocLoopType, repeat_count: number): void;
    set_start_stop_times(start: number, stop: number): void;
    set_tags(tags: TagList | null): void;
}
export class TracerPrivate  {
    constructor(config?: properties);
}
export class TypeFind  {
    constructor(config?: properties);
    data: object;
    get_length(): number;
    peek(offset: number): [number[] | null, number];
    suggest(probability: number, caps: Caps): void;
    static register(plugin: Plugin | null, name: string, rank: number, func: TypeFindFunction, extensions: string | null, possible_caps: Caps, data: object | null, data_notify: GLib.DestroyNotify): boolean;
}
export class Uri  {
    constructor(config?: properties);
    append_path(relative_path: string): boolean;
    append_path_segment(path_segment: string): boolean;
    equal(second: Uri): boolean;
    from_string_with_base(uri: string): Uri;
    get_fragment(): string | null;
    get_host(): string | null;
    get_media_fragment_table(): GLib.HashTable | null;
    get_path(): string | null;
    get_path_segments(): GLib.List;
    get_path_string(): string | null;
    get_port(): number;
    get_query_keys(): GLib.List;
    get_query_string(): string | null;
    get_query_table(): GLib.HashTable | null;
    get_query_value(query_key: string): string | null;
    get_scheme(): string | null;
    get_userinfo(): string | null;
    is_normalized(): boolean;
    is_writable(): boolean;
    join(ref_uri: Uri | null): Uri | null;
    make_writable(): Uri;
    new_with_base(scheme: string | null, userinfo: string | null, host: string | null, port: number, path: string | null, query: string | null, fragment: string | null): Uri;
    normalize(): boolean;
    query_has_key(query_key: string): boolean;
    remove_query_key(query_key: string): boolean;
    set_fragment(fragment: string | null): boolean;
    set_host(host: string): boolean;
    set_path(path: string): boolean;
    set_path_segments(path_segments: GLib.List | null): boolean;
    set_path_string(path: string): boolean;
    set_port(port: number): boolean;
    set_query_string(query: string): boolean;
    set_query_table(query_table: GLib.HashTable | null): boolean;
    set_query_value(query_key: string, query_value: string | null): boolean;
    set_scheme(scheme: string): boolean;
    set_userinfo(userinfo: string): boolean;
    to_string(): string;
    static construct(protocol: string, location: string): string;
    static from_string(uri: string): Uri | null;
    static get_location(uri: string): string | null;
    static get_protocol(uri: string): string | null;
    static has_protocol(uri: string, protocol: string): boolean;
    static is_valid(uri: string): boolean;
    static join_strings(base_uri: string, ref_uri: string): string;
    static protocol_is_supported(type: URIType, protocol: string): boolean;
    static protocol_is_valid(protocol: string): boolean;
}
export class ValueTable  {
    constructor(config?: properties);
    type: GType;
    compare: ValueCompareFunc;
    serialize: ValueSerializeFunc;
    deserialize: ValueDeserializeFunc;
}
export interface ChildProxy  {
    child_added(child: GObject.Object, name: string): void;
    child_removed(child: GObject.Object, name: string): void;
    get_child_by_index(index: number): GObject.Object | null;
    get_child_by_name(name: string): GObject.Object | null;
    get_children_count(): number;
    get_property(name: string): [GObject.Value];
    lookup(name: string): [boolean, GObject.Object | null,GObject.ParamSpec | null];
    set_property(name: string, value: GObject.Value): void;
}
export interface Preset  {
    delete_preset(name: string): boolean;
    get_meta(name: string, tag: string): [boolean, string];
    get_preset_names(): string[];
    get_property_names(): string[];
    is_editable(): boolean;
    load_preset(name: string): boolean;
    rename_preset(old_name: string, new_name: string): boolean;
    save_preset(name: string): boolean;
    set_meta(name: string, tag: string, value: string | null): boolean;
}
export interface TagSetter  {
    add_tag_value(mode: TagMergeMode, tag: string, value: GObject.Value): void;
    get_tag_list(): TagList | null;
    get_tag_merge_mode(): TagMergeMode;
    merge_tags(list: TagList, mode: TagMergeMode): void;
    reset_tags(): void;
    set_tag_merge_mode(mode: TagMergeMode): void;
}
export interface TocSetter  {
    get_toc(): Toc | null;
    reset(): void;
    set_toc(toc: Toc | null): void;
}
export interface URIHandler  {
    get_protocols(): string[] | null;
    get_uri(): string | null;
    get_uri_type(): URIType;
    set_uri(uri: string): boolean;
}