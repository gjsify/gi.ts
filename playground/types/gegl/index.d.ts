
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gegl from "gegl";
/**
 * gegl.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type LookupFunction = (value: number, data: object | null) => number;
export type NodeFunction = (node: PathItem, user_data: object | null) => void;
export type ParallelDistributeAreaFunc = (area: Rectangle, user_data: object | null) => void;
export type ParallelDistributeFunc = (i: number, n: number, user_data: object | null) => void;
export type ParallelDistributeRangeFunc = (offset: number, size: number, user_data: object | null) => void;
export type SamplerGetFun = (self: Sampler, x: number, y: number, scale: BufferMatrix2, output: object | null, repeat_mode: AbyssPolicy) => void;
export type TileCallback = (tile: Tile, user_data: object | null) => void;
export type TileSourceCommand = (gegl_tile_source: TileSource, command: TileCommand, x: number, y: number, z: number, data: object | null) => object | null;
export const AUTO_ROWSTRIDE: number;
export const CH_BACK_CENTER: number;
export const CH_BACK_LEFT: number;
export const CH_BACK_RIGHT: number;
export const CH_FRONT_CENTER: number;
export const CH_FRONT_LEFT: number;
export const CH_FRONT_LEFT_OF_CENTER: number;
export const CH_FRONT_RIGHT: number;
export const CH_FRONT_RIGHT_OF_CENTER: number;
export const CH_LAYOUT_2POINT1: number;
export const CH_LAYOUT_2_1: number;
export const CH_LAYOUT_2_2: number;
export const CH_LAYOUT_3POINT1: number;
export const CH_LAYOUT_4POINT0: number;
export const CH_LAYOUT_4POINT1: number;
export const CH_LAYOUT_5POINT0: number;
export const CH_LAYOUT_5POINT0_BACK: number;
export const CH_LAYOUT_5POINT1: number;
export const CH_LAYOUT_5POINT1_BACK: number;
export const CH_LAYOUT_6POINT0: number;
export const CH_LAYOUT_6POINT0_FRONT: number;
export const CH_LAYOUT_6POINT1: number;
export const CH_LAYOUT_6POINT1_BACK: number;
export const CH_LAYOUT_6POINT1_FRONT: number;
export const CH_LAYOUT_7POINT0: number;
export const CH_LAYOUT_7POINT0_FRONT: number;
export const CH_LAYOUT_7POINT1: number;
export const CH_LAYOUT_7POINT1_WIDE: number;
export const CH_LAYOUT_7POINT1_WIDE_BACK: number;
export const CH_LAYOUT_HEXADECAGONAL: number;
export const CH_LAYOUT_HEXAGONAL: number;
export const CH_LAYOUT_NATIVE: number;
export const CH_LAYOUT_OCTAGONAL: number;
export const CH_LAYOUT_QUAD: number;
export const CH_LAYOUT_STEREO: number;
export const CH_LAYOUT_STEREO_DOWNMIX: number;
export const CH_LAYOUT_SURROUND: number;
export const CH_LOW_FREQUENCY: number;
export const CH_LOW_FREQUENCY_2: number;
export const CH_SIDE_LEFT: number;
export const CH_SIDE_RIGHT: number;
export const CH_STEREO_LEFT: number;
export const CH_STEREO_RIGHT: number;
export const CH_SURROUND_DIRECT_LEFT: number;
export const CH_SURROUND_DIRECT_RIGHT: number;
export const CH_TOP_BACK_CENTER: number;
export const CH_TOP_BACK_LEFT: number;
export const CH_TOP_BACK_RIGHT: number;
export const CH_TOP_CENTER: number;
export const CH_TOP_FRONT_CENTER: number;
export const CH_TOP_FRONT_LEFT: number;
export const CH_TOP_FRONT_RIGHT: number;
export const CH_WIDE_LEFT: number;
export const CH_WIDE_RIGHT: number;
export const FLOAT_EPSILON: number;
export const LOOKUP_MAX_ENTRIES: number;
export const MAJOR_VERSION: number;
export const MAX_AUDIO_CHANNELS: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const PARAM_NO_VALIDATE: number;
/**
 * Disable OpenCL
 */
export function cl_disable(): void;
/**
 * Initialize and enable OpenCL, calling this function again
 * will re-enable OpenCL if it has been disabled.
 */
export function cl_init(): boolean;
/**
 * Check if OpenCL is enabled.
 */
export function cl_is_accelerated(): boolean;
/**
 * Returns a GeglConfig object with properties that can be manipulated to
 *  control
 * GEGLs behavior.
 */
export function config(): Config;
/**
 * Create a node chain from an unparsed commandline string.
 */
export function create_chain(ops: string, op_start: Node, op_end: Node, time: number, rel_dim: number, path_root: string): void;
/**
 * Create a node chain from argv style list of op data.
 */
export function create_chain_argv(ops: string, op_start: Node, op_end: Node, time: number, rel_dim: number, path_root: string): void;
/**
 * Call this function when you're done using GEGL. It will clean up
 * caches and write/dump debug information if the correct debug flags
 * are set.
 */
export function exit(): void;
/**
 * Returns a value sutable to pass to the GeglBuffer constructor
 * or any other property that expects a Babl format.
 */
export function format(format_name: string): GObject.Value | null;
/**
 * 
 */
export function format_get_name(format: GObject.Value): string | null;
/**
 * This function fetches the version of the GEGL library being used by
 * the running process.
 */
export function get_version(): [number,number,number];
/**
 * Dump the bounds and format of each node in the graph to stdout.
 */
export function graph_dump_outputs(node: Node): void;
/**
 * Dump the region that will be rendered for each node to fulfill
 * the request.
 */
export function graph_dump_request(node: Node, roi: Rectangle): void;
/**
 * 
 */
export function has_operation(operation_type: string): boolean;
/**
 * Call this function before using any other GEGL functions. It will
 * initialize everything needed to operate GEGL and parses some
 * standard command line options.  @argc and @argv are adjusted
 * accordingly so your own code will never see those standard
 * arguments.
 * Note that there is an alternative way to initialize GEGL: if you
 * are calling g_option_context_parse() with the option group returned
 * by #gegl_get_option_group(), you don't have to call #gegl_init().
 */
export function init(argc: number, argv: string[] | null): [number,string[] | null];
/**
 * 
 */
export function is_main_thread(): boolean;
/**
 * 
 */
export function list_operations(): [string[], number];
/**
 * Load all gegl modules found in the given directory.
 */
export function load_module_directory(path: string): void;
/**
 * Distributes the execution of a function across multiple threads,
 * by calling it with a different index on each thread.
 */
export function parallel_distribute(max_n: number, func: ParallelDistributeFunc, user_data: object | null): void;
/**
 * Distributes the processing of a planar data-structure across
 * multiple threads, by calling the given function with different
 * sub-areas on different threads.
 */
export function parallel_distribute_area(area: Rectangle, thread_cost: number, split_strategy: SplitStrategy, func: ParallelDistributeAreaFunc, user_data: object | null): void;
/**
 * Distributes the processing of a linear data-structure across
 * multiple threads, by calling the given function with different
 * sub-ranges on different threads.
 */
export function parallel_distribute_range(size: number, thread_cost: number, func: ParallelDistributeRangeFunc, user_data: object | null): void;
/**
 * Creates a new #GParamSpec instance specifying a #GeglAudioFragment pro
 * perty.
 */
export function param_spec_audio_fragment(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec;
/**
 * Creates a new #GParamSpec instance specifying a #GeglColor property.
 */
export function param_spec_color(name: string, nick: string, blurb: string, default_color: Color, flags: GObject.ParamFlags): GObject.ParamSpec;
/**
 * Creates a new #GParamSpec instance specifying a #GeglColor property.
 */
export function param_spec_color_from_string(name: string, nick: string, blurb: string, default_color_string: string, flags: GObject.ParamFlags): GObject.ParamSpec;
/**
 * Get the default color value of the param spec
 */
export function param_spec_color_get_default(self: GObject.ParamSpec): Color;
/**
 * Creates a new #GParamSpec instance specifying a #GeglCurve property.
 */
export function param_spec_curve(name: string, nick: string, blurb: string, default_curve: Curve, flags: GObject.ParamFlags): GObject.ParamSpec;
/**
 * Creates a new #GeglParamSpecDouble instance.
 */
export function param_spec_double(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, ui_minimum: number, ui_maximum: number, ui_gamma: number, flags: GObject.ParamFlags): GObject.ParamSpec;
/**
 * Creates a new #GeglParamSpecEnum instance.
 */
export function param_spec_enum(name: string, nick: string, blurb: string, enum_type: GType, default_value: number, flags: GObject.ParamFlags): GObject.ParamSpec;
/**
 * Creates a new #GeglParamSpecFilePath instance.
 */
export function param_spec_file_path(name: string, nick: string, blurb: string, no_validate: boolean, null_ok: boolean, default_value: string, flags: GObject.ParamFlags): GObject.ParamSpec;
/**
 * Creates a new #GeglParamSpecFormat instance specifying a Babl format.
 */
export function param_spec_format(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec;
/**
 * 
 */
export function param_spec_get_property_key(pspec: GObject.ParamSpec, key_name: string): string;
/**
 * Creates a new #GeglParamSpecInt instance.
 */
export function param_spec_int(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, ui_minimum: number, ui_maximum: number, ui_gamma: number, flags: GObject.ParamFlags): GObject.ParamSpec;
/**
 * Creates a new #GParamSpec instance specifying a #GeglPath property.
 */
export function param_spec_path(name: string, nick: string, blurb: string, default_path: Path, flags: GObject.ParamFlags): GObject.ParamSpec;
/**
 * Creates a new #GeglParamSpecSeed instance specifying an integer random
 *  seed.
 */
export function param_spec_seed(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec;
/**
 * 
 */
export function param_spec_set_property_key(pspec: GObject.ParamSpec, key_name: string, value: string): void;
/**
 * Creates a new #GeglParamSpecString instance.
 */
export function param_spec_string(name: string, nick: string, blurb: string, no_validate: boolean, null_ok: boolean, default_value: string, flags: GObject.ParamFlags): GObject.ParamSpec;
/**
 * Creates a new #GeglParamSpecUri instance.
 */
export function param_spec_uri(name: string, nick: string, blurb: string, no_validate: boolean, null_ok: boolean, default_value: string, flags: GObject.ParamFlags): GObject.ParamSpec;
/**
 * Returns a GeglRectangle that represents an infininte plane.
 */
export function rectangle_infinite_plane(): Rectangle;
/**
 * Resets the cumulative data gathered by the #GeglStats object returned
 * by #gegl_stats().
 */
export function reset_stats(): void;
/**
 * 
 */
export function serialize(start: Node, end: Node, basepath: string, serialize_flags: SerializeFlag): string;
/**
 * Returns a GeglStats object with properties that can be read to monitor
 * GEGL statistics.
 */
export function stats(): Stats;
export enum AbyssPolicy {
    NONE = 0,
    CLAMP = 1,
    LOOP = 2,
    BLACK = 3,
    WHITE = 4,
}
export enum BablVariant {
    FLOAT = 0,
    LINEAR = 1,
    NON_LINEAR = 2,
    PERCEPTUAL = 3,
    LINEAR_PREMULTIPLIED = 4,
    PERCEPTUAL_PREMULTIPLIED = 5,
    LINEAR_PREMULTIPLIED_IF_ALPHA = 6,
    PERCEPTUAL_PREMULTIPLIED_IF_ALPHA = 7,
    ADD_ALPHA = 8,
}
export enum CachePolicy {
    AUTO = 0,
    NEVER = 1,
    ALWAYS = 2,
}
export enum DistanceMetric {
    EUCLIDEAN = 0,
    MANHATTAN = 1,
    CHEBYSHEV = 2,
}
export enum DitherMethod {
    NONE = 0,
    FLOYD_STEINBERG = 1,
    BAYER = 2,
    RANDOM = 3,
    RANDOM_COVARIANT = 4,
    ADD = 5,
    ADD_COVARIANT = 6,
    XOR = 7,
    XOR_COVARIANT = 8,
}
export enum Orientation {
    HORIZONTAL = 0,
    VERTICAL = 1,
}
export enum SamplerType {
    NEAREST = 0,
    LINEAR = 1,
    CUBIC = 2,
    NOHALO = 3,
    LOHALO = 4,
}
export enum SplitStrategy {
    AUTO = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
}
export enum TileCommand {
    EGL_TILE_IDLE = 0,
    EGL_TILE_SET = 1,
    EGL_TILE_GET = 2,
    EGL_TILE_IS_CACHED = 3,
    EGL_TILE_EXIST = 4,
    EGL_TILE_VOID = 5,
    EGL_TILE_FLUSH = 6,
    EGL_TILE_REFETCH = 7,
    EGL_TILE_REINIT = 8,
    GEGL_TILE_LAST_0_4_8_COMMAND = 9,
    EGL_TILE_COPY = 9,
    EGL_TILE_LAST_COMMAND = 10,
}
export enum AccessMode {
    READ = 1,
    WRITE = 2,
    READWRITE = 3,
}
export enum BlitFlags {
    DEFAULT = 0,
    CACHE = 1,
    DIRTY = 2,
}
export enum PadType {
    OUTPUT = 256,
    INPUT = 512,
}
export enum SerializeFlag {
    TRIM_DEFAULTS = 1,
    VERSION = 2,
    INDENT = 4,
}
export class AudioFragment extends GObject.Object {
    constructor(config?: properties);
    string: string;
    get_channel_layout(): number;
    get_channels(): number;
    get_max_samples(): number;
    get_pos(): number;
    get_sample_count(): number;
    get_sample_rate(): number;
    set_channel_layout(channel_layout: number): void;
    set_channels(channels: number): void;
    set_max_samples(max_samples: number): void;
    set_pos(pos: number): void;
    set_sample_count(sample_count: number): void;
    set_sample_rate(sample_rate: number): void;
}
export class Buffer extends TileHandler {
    constructor(config?: properties);
    abyss_height: number;
    abyss_width: number;
    abyss_x: number;
    abyss_y: number;
    backend: TileBackend;
    format: object;
    height: number;
    path: string;
    readonly pixels: number;
    readonly px_size: number;
    shift_x: number;
    shift_y: number;
    tile_height: number;
    tile_width: number;
    width: number;
    x: number;
    y: number;static introspectable_new(format_name: string, x: number, y: number, width: number, height: number): Buffer;
    static new_for_backend(extent: Rectangle, backend: TileBackend): Buffer;
    add_handler(handler: object | null): void;
    clear(roi: Rectangle): void;
    copy(src_rect: Rectangle, repeat_mode: AbyssPolicy, dst: Buffer, dst_rect: Rectangle): void;
    create_sub_buffer(extent: Rectangle): Buffer;
    dup(): Buffer;
    flush(): void;
    flush_ext(rect: Rectangle): void;
    freeze_changed(): void;
    get_abyss(): Rectangle;
    get_extent(): Rectangle;
    introspectable_get(rect: Rectangle, scale: number, format_name: string | null, repeat_mode: AbyssPolicy): [number[], number];
    introspectable_set(rect: Rectangle, format_name: string, src: number[], src_length: number): void;
    linear_close(linear: object | null): void;
    remove_handler(handler: object | null): void;
    sample_cleanup(): void;
    save(path: string, roi: Rectangle): void;
    set_abyss(abyss: Rectangle): boolean;
    set_color(rect: Rectangle, color: Color): void;
    set_extent(extent: Rectangle): boolean;
    set_pattern(rect: Rectangle, pattern: Buffer, x_offset: number, y_offset: number): void;
    signal_connect(detailed_signal: string, c_handler: GObject.Callback, data: object | null): number;
    thaw_changed(): void;
    static load(path: string): Buffer;
    static open(path: string): Buffer;
    static swap_create_file(suffix: string | null): string | null;
    static swap_has_file(path: string): boolean;
    static swap_remove_file(path: string): void;
}
export class Color extends GObject.Object {
    constructor(config?: properties);
    string: string;
    duplicate(): Color;
    get_components(format: GObject.Value): [number[], number];
    get_rgba(): [number,number,number,number];
    set_components(format: GObject.Value, components: number[], components_length: number): void;
    set_rgba(red: number, green: number, blue: number, alpha: number): void;
}
export class Config  {
    constructor(config?: properties);
    application_license: string;
    chunk_size: number;
    mipmap_rendering: boolean;
    quality: number;
    queue_size: number;
    swap: string;
    swap_compression: string;
    threads: number;
    tile_cache_size: number;
    tile_height: number;
    tile_width: number;
    use_opencl: boolean;
}
export class Curve extends GObject.Object {
    constructor(config?: properties);
    static new_default(): Curve;
    add_point(x: number, y: number): number;
    calc_value(x: number): number;
    duplicate(): Curve;
    get_point(index: number): [number,number];
    get_y_bounds(): [number,number];
    num_points(): number;
    set_point(index: number, x: number, y: number): void;
}
export class Node extends GObject.Object {
    constructor(config?: properties);
    cache_policy: CachePolicy;
    dont_cache: boolean;
    gegl_operation: Operation;
    name: string;
    operation: string;
    passthrough: boolean;
    use_opencl: boolean;static new_from_file(path: string): Node;
    static new_from_serialized(chaindata: string, path_root: string): Node;
    static new_from_xml(xmldata: string, path_root: string): Node;
    add_child(child: Node): Node;
    blit_buffer(buffer: Buffer | null, roi: Rectangle | null, level: number, abyss_policy: AbyssPolicy): void;
    connect_from(input_pad_name: string, source: Node, output_pad_name: string): boolean;
    connect_to(output_pad_name: string, sink: Node, input_pad_name: string): boolean;
    create_child(operation: string): Node;
    detect(x: number, y: number): Node;
    disconnect(input_pad: string): boolean;
    find_property(property_name: string): GObject.ParamSpec;
    get_children(): string[];
    get_consumers(output_pad: string): [number, Node[] | null,string[] | null];
    get_gegl_operation(): Operation | null;
    get_input_proxy(pad_name: string): Node;
    get_operation(): string;
    get_output_proxy(pad_name: string): Node;
    get_parent(): Node;
    get_passthrough(): boolean;
    get_producer(input_pad_name: string, output_pad_name: string | null): Node;
    has_pad(pad_name: string): boolean;
    introspectable_get_bounding_box(): Rectangle;
    introspectable_get_property(property_name: string): GObject.Value;
    is_graph(): boolean;
    link(sink: Node): void;
    list_input_pads(): string[];
    list_output_pads(): string[];
    new_processor(rectangle: Rectangle): Processor;
    process(): void;
    progress(progress: number, message: string): void;
    remove_child(child: Node): Node;
    set_passthrough(passthrough: boolean): void;
    set_property(property_name: string, value: GObject.Value): void;
    set_property(...args: never[]): never;
    set_time(time: number): void;
    to_xml(path_root: string): string;
    to_xml_full(tail: Node | null, path_root: string): string;
}
export class Operation  {
    constructor(config?: properties);
    static find_property(operation_type: string, property_name: string): GObject.ParamSpec;
    static get_key(operation_type: string, key_name: string): string;
    static get_op_version(op_name: string): string;
    static get_property_key(operation_type: string, property_name: string, property_key_name: string): string;
    static list_keys(operation_type: string): [string[], number];
    static list_properties(operation_type: string): [GObject.ParamSpec[], number];
    static list_property_keys(operation_type: string, property_name: string): [string[], number];
}
export class ParamAudioFragment  {
    constructor(config?: properties);
}
export class ParamColor  {
    constructor(config?: properties);
}
export class ParamCurve  {
    constructor(config?: properties);
}
export class ParamDouble  {
    constructor(config?: properties);
}
export class ParamEnum  {
    constructor(config?: properties);
}
export class ParamFilePath  {
    constructor(config?: properties);
}
export class ParamFormat  {
    constructor(config?: properties);
}
export class ParamInt  {
    constructor(config?: properties);
}
export class ParamPath  {
    constructor(config?: properties);
}
export class ParamSeed  {
    constructor(config?: properties);
}
export class ParamString  {
    constructor(config?: properties);
}
export class ParamUri  {
    constructor(config?: properties);
}
export class Path extends GObject.Object {
    constructor(config?: properties);
    static new_from_string(instructions: string): Path;
    calc(pos: number): [boolean, number,number];
    calc_y_for_x(x: number): [number, number];
    clear(): void;
    closest_point(x: number, y: number): [number, number,number,number];
    dirty(): void;
    foreach(each_item: NodeFunction, user_data: object | null): void;
    foreach_flat(each_item: NodeFunction, user_data: object | null): void;
    freeze(): void;
    get_bounds(): [number,number,number,number];
    get_length(): number;
    get_matrix(): [Matrix3];
    get_n_nodes(): number;
    get_node(index: number): [boolean, PathItem];
    insert_node(pos: number, node: PathItem): void;
    is_empty(): boolean;
    parse_string(instructions: string): void;
    remove_node(pos: number): void;
    replace_node(pos: number, node: PathItem): void;
    set_matrix(matrix: Matrix3): void;
    thaw(): void;
    to_string(): string;
    static add_type(type: number, items: number, description: string): void;
}
export class Processor  {
    constructor(config?: properties);
    chunksize: number;
    node: Node;
    progress: number;
    rectangle: object;
    set_level(level: number): void;
    set_rectangle(rectangle: Rectangle): void;
    set_scale(scale: number): void;
    work(): [boolean, number];
}
export class Stats  {
    constructor(config?: properties);
    readonly scratch_total: number;
    readonly swap_busy: boolean;
    readonly swap_file_size: number;
    readonly swap_queue_full: boolean;
    readonly swap_queue_stalls: number;
    readonly swap_queued_total: number;
    readonly swap_read_total: number;
    readonly swap_reading: boolean;
    readonly swap_total: number;
    readonly swap_total_uncompressed: number;
    readonly swap_write_total: number;
    readonly swap_writing: boolean;
    readonly tile_alloc_total: number;
    readonly tile_cache_hits: number;
    readonly tile_cache_misses: number;
    readonly tile_cache_total: number;
    readonly tile_cache_total_max: number;
    readonly tile_cache_total_uncompressed: number;
    readonly zoom_total: number;
}
export class TileBackend  {
    constructor(config?: properties);
    flush_on_destroy: boolean;
    format: object;
    readonly px_size: number;
    tile_height: number;
    readonly tile_size: number;
    tile_width: number;
    readonly priv: TileBackendPrivate;
    command(command: TileCommand, x: number, y: number, z: number, data: object | null): object | null;
    get_flush_on_destroy(): boolean;
    get_tile_height(): number;
    get_tile_size(): number;
    get_tile_width(): number;
    peek_storage(): TileSource;
    set_extent(rectangle: Rectangle): void;
    set_flush_on_destroy(flush_on_destroy: boolean): void;
    static unlink_swap(path: string): void;
}
export class TileHandler  {
    constructor(config?: properties);
    source: GObject.Object;
    readonly priv: TileHandlerPrivate;
    damage_rect(rect: Rectangle): void;
    damage_tile(x: number, y: number, z: number, damage: number): void;
    set_source(source: TileSource): void;
}
export class TileSource  {
    constructor(config?: properties);
    readonly command: TileSourceCommand;
    readonly padding: object[];
}
export class AudioFragmentPrivate  {
    constructor(config?: properties);
}
export class BufferIterator  {
    constructor(config?: properties);
    length: number;
    priv: BufferIteratorPriv;
    items: BufferIteratorItem[];
}
export class BufferIteratorItem  {
    constructor(config?: properties);
    data: object;
    roi: Rectangle;
}
export class BufferIteratorPriv  {
    constructor(config?: properties);
}
export class BufferMatrix2  {
    constructor(config?: properties);
    coeff: number[];
    determinant(): number;
    is_identity(): boolean;
    is_scale(): boolean;
}
export class ColorPrivate  {
    constructor(config?: properties);
}
export class Lookup  {
    constructor(config?: properties);
    "function": LookupFunction;
    data: object;
    shift: number;
    positive_min: number;
    positive_max: number;
    negative_min: number;
    negative_max: number;
    bitmask: number[];
    table: number[];
}
export class Matrix3  {
    constructor(config?: properties);
    copy(): Matrix3;
    copy_into(src: Matrix3): void;
    determinant(): number;
    equal(matrix2: Matrix3): boolean;
    identity(): void;
    invert(): void;
    is_affine(): boolean;
    is_identity(): boolean;
    is_scale(): boolean;
    is_translate(): boolean;
    multiply(right: Matrix3, product: Matrix3): void;
    originate(x: number, y: number): void;
    parse_string(string: string): void;
    to_string(): string;
    transform_point(x: number, y: number): void;
}
export class OperationContext  {
    constructor(config?: properties);
}
export class ParamSpecDouble  {
    constructor(config?: properties);
    ui_minimum: number;
    ui_maximum: number;
    ui_gamma: number;
    ui_step_small: number;
    ui_step_big: number;
    ui_digits: number;
    set_digits(digits: number): void;
    set_steps(small_step: number, big_step: number): void;
}
export class ParamSpecEnum  {
    constructor(config?: properties);
    excluded_values: string[];
    exclude_value(value: number): void;
}
export class ParamSpecFilePath  {
    constructor(config?: properties);
    no_validate: number;
    null_ok: number;
}
export class ParamSpecFormat  {
    constructor(config?: properties);
}
export class ParamSpecInt  {
    constructor(config?: properties);
    ui_minimum: number;
    ui_maximum: number;
    ui_gamma: number;
    ui_step_small: number;
    ui_step_big: number;
    set_steps(small_step: number, big_step: number): void;
}
export class ParamSpecSeed  {
    constructor(config?: properties);
    ui_minimum: number;
    ui_maximum: number;
}
export class ParamSpecString  {
    constructor(config?: properties);
    no_validate: number;
    null_ok: number;
}
export class ParamSpecUri  {
    constructor(config?: properties);
    no_validate: number;
    null_ok: number;
}
export class PathItem  {
    constructor(config?: properties);
    type: number;
    point: PathPoint[];
}
export class PathList  {
    constructor(config?: properties);
    next: object;
    d: PathItem;
}
export class PathPoint  {
    constructor(config?: properties);
    x: number;
    y: number;
}
export class Random  {
    constructor(config?: properties);
    static new_with_seed(seed: number): Random;
    duplicate(): Random;
    _float(x: number, y: number, z: number, n: number): number;
    float_range(x: number, y: number, z: number, n: number, min: number, max: number): number;
    free(): void;
    _int(x: number, y: number, z: number, n: number): number;
    int_range(x: number, y: number, z: number, n: number, min: number, max: number): number;
    set_seed(seed: number): void;
}
export class Rectangle  {
    constructor(config?: properties);
    bounding_box(source1: Rectangle, source2: Rectangle): void;
    contains(child: Rectangle): boolean;
    copy(source: Rectangle): void;
    dump(): void;
    dup(): Rectangle;
    equal(rectangle2: Rectangle): boolean;
    equal_coords(x: number, y: number, width: number, height: number): boolean;
    intersect(src1: Rectangle, src2: Rectangle): boolean;
    is_empty(): boolean;
    is_infinite_plane(): boolean;
    set(x: number, y: number, width: number, height: number): void;
    subtract_bounding_box(minuend: Rectangle, subtrahend: Rectangle): boolean;
    static infinite_plane(): Rectangle;
}
export class Sampler  {
    constructor(config?: properties);
    get(x: number, y: number, scale: BufferMatrix2, output: object | null, repeat_mode: AbyssPolicy): void;
    get_context_rect(): Rectangle;
}
export class Tile  {
    constructor(config?: properties);
}
export class TileBackendPrivate  {
    constructor(config?: properties);
}
export class TileCopyParams  {
    constructor(config?: properties);
    dst_buffer: Buffer;
    dst_x: number;
    dst_y: number;
    dst_z: number;
}
export class TileHandlerPrivate  {
    constructor(config?: properties);
}