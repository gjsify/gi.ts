
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gst from "gst";
import * as GstBase from "gstbase";
import * as GstVideo from "gstvideo";
import * as GstGL from "gstgl";
/**
 * gstgl.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type EGLImageDestroyNotify = (image: EGLImage, data: object | null) => void;
export type GLAllocationParamsCopyFunc = (src: GLAllocationParams, dest: GLAllocationParams) => void;
export type GLAllocationParamsFreeFunc = (params: object | null) => void;
export type GLAsyncDebugLogGetMessage = (user_data: object | null) => string;
export type GLBaseMemoryAllocatorAllocFunction = (allocator: GLBaseMemoryAllocator, params: GLAllocationParams) => GLBaseMemory;
export type GLBaseMemoryAllocatorCopyFunction = (mem: GLBaseMemory, offset: number, size: number) => GLBaseMemory;
export type GLBaseMemoryAllocatorCreateFunction = (mem: GLBaseMemory) => boolean;
export type GLBaseMemoryAllocatorDestroyFunction = (mem: GLBaseMemory) => void;
export type GLBaseMemoryAllocatorMapFunction = (mem: GLBaseMemory, info: Gst.MapInfo, maxsize: number) => object | null;
export type GLBaseMemoryAllocatorUnmapFunction = (mem: GLBaseMemory, info: Gst.MapInfo) => void;
export type GLContextThreadFunc = (context: GLContext, data: object | null) => void;
export type GLFilterRenderFunc = (filter: GLFilter, in_tex: GLMemory, user_data: object | null) => boolean;
export type GLFramebufferFunc = (stuff: object | null) => boolean;
export type GLWindowCB = (data: object | null) => void;
export type GLWindowResizeCB = (data: object | null, width: number, height: number) => void;
export const BUFFER_POOL_OPTION_GL_SYNC_META: string;
export const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_2D: string;
export const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_EXTERNAL_OES: string;
export const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_RECTANGLE: string;
export const CAPS_FEATURE_MEMORY_GL_BUFFER: string;
export const CAPS_FEATURE_MEMORY_GL_MEMORY: string;
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_ALLOC: number;
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_BUFFER: number;
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_USER: number;
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_VIDEO: number;
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_GPU_HANDLE: number;
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_SYSMEM: number;
export const GL_API_GLES1_NAME: string;
export const GL_API_GLES2_NAME: string;
export const GL_API_OPENGL3_NAME: string;
export const GL_API_OPENGL_NAME: string;
export const GL_BASE_MEMORY_ALLOCATOR_NAME: string;
export const GL_BUFFER_ALLOCATOR_NAME: string;
export const GL_COLOR_CONVERT_FORMATS: string;
export const GL_COLOR_CONVERT_VIDEO_CAPS: string;
export const GL_CONTEXT_TYPE_CGL: string;
export const GL_CONTEXT_TYPE_EAGL: string;
export const GL_CONTEXT_TYPE_EGL: string;
export const GL_CONTEXT_TYPE_GLX: string;
export const GL_CONTEXT_TYPE_WGL: string;
export const GL_DISPLAY_CONTEXT_TYPE: string;
export const GL_DISPLAY_EGL_NAME: string;
export const GL_MEMORY_ALLOCATOR_NAME: string;
export const GL_MEMORY_EGL_ALLOCATOR_NAME: string;
export const GL_MEMORY_PBO_ALLOCATOR_NAME: string;
export const GL_MEMORY_VIDEO_FORMATS_STR: string;
export const GL_RENDERBUFFER_ALLOCATOR_NAME: string;
export const GL_TEXTURE_TARGET_2D_STR: string;
export const GL_TEXTURE_TARGET_EXTERNAL_OES_STR: string;
export const GL_TEXTURE_TARGET_RECTANGLE_STR: string;
export const MAP_GL: number;
/**
 * 
 */
export function buffer_add_gl_sync_meta(context: GLContext, buffer: Gst.Buffer): GLSyncMeta;
/**
 * 
 */
export function buffer_add_gl_sync_meta_full(context: GLContext, buffer: Gst.Buffer, data: object | null): GLSyncMeta;
/**
 * 
 */
export function buffer_pool_config_get_gl_allocation_params(config: Gst.Structure): GLAllocationParams;
/**
 * Sets @params on @config
 */
export function buffer_pool_config_set_gl_allocation_params(config: Gst.Structure, params: GLAllocationParams): void;
/**
 * 
 */
export function context_get_gl_display(context: Gst.Context): [boolean, GLDisplay];
/**
 * Sets @display on @context
 */
export function context_set_gl_display(context: Gst.Context, display: GLDisplay): void;
/**
 * Creates an EGL image that imports the dmabuf FD. The dmabuf data
 * is passed as RGBA data. Shaders later take this "RGBA" data and
 * convert it from its true format (described by in_info) to actual
 * RGBA output. For example, with I420, three EGL images are created,
 * one for each plane, each EGL image with a single-channel R format.
 * With NV12, two EGL images are created, one with R format, one
 * with RG format etc.
 */
export function egl_image_from_dmabuf(context: GLContext, dmabuf: number, in_info: GstVideo.VideoInfo, plane: number, offset: number): EGLImage;
/**
 * Creates an EGL image that imports the dmabuf FD. The dmabuf data
 * is passed directly as the format described in in_info. This is
 * useful if the hardware is capable of performing color space conversion
 * s
 * internally. The appropriate DRM format is picked, and the EGL image
 * is created with this DRM format.
 * Another notable difference to gst_egl_image_from_dmabuf()
 * is that this function creates one EGL image for all planes, not one fo
 * r
 * a single plane.
 */
export function egl_image_from_dmabuf_direct(context: GLContext, fd: number, offset: number, in_info: GstVideo.VideoInfo): EGLImage;
/**
 * 
 */
export function egl_image_from_texture(context: GLContext, gl_mem: GLMemory, attribs: never): EGLImage;
/**
 * 
 */
export function gl_api_from_string(api_s: string): GLAPI;
/**
 * 
 */
export function gl_api_to_string(api: GLAPI): string;
/**
 * 
 */
export function gl_base_memory_alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory;
/**
 * 
 */
export function gl_base_memory_error_quark(): GLib.Quark;
/**
 * Initializes the GL Base Memory allocator. It is safe to call this func
 * tion
 * multiple times.  This must be called before any other GstGLBaseMemory 
 * operation.
 */
export function gl_base_memory_init_once(): void;
/**
 * Initializes the GL Buffer allocator. It is safe to call this function
 * multiple times.  This must be called before any other #GstGLBuffer ope
 * ration.
 */
export function gl_buffer_init_once(): void;
/**
 * 
 */
export function gl_check_extension(name: string, ext: string): boolean;
/**
 * 
 */
export function gl_context_error_quark(): GLib.Quark;
/**
 * 
 */
export function gl_element_propagate_display_context(element: Gst.Element, display: GLDisplay): void;
/**
 * Perform the steps necessary for retrieving a #GstGLDisplay and (option
 * ally)
 * an application provided #GstGLContext from the surrounding elements or
 *  from
 * the application using the #GstContext mechanism.
 * If the contents of @display_ptr or @other_context_ptr are not %NULL, t
 * hen no
 * #GstContext query is necessary for #GstGLDisplay or #GstGLContext retr
 * ieval
 * or is performed.
 * This performs #GstContext queries (if necessary) for a winsys display
 * connection with %GST_GL_DISPLAY_CONTEXT_TYPE, "gst.x11.display.handle"
 * , and
 * "GstWaylandDisplayHandleContextType" stopping after the first successf
 * ul
 * retrieval.
 * This also performs a #GstContext query (if necessary) for an optional
 * application provided #GstGLContext using the name "gst.gl.app_context"
 * .
 * The returned #GstGLContext will be shared with a GStreamer created Ope
 * nGL context.
 */
export function gl_ensure_element_data(element: object | null, display_ptr: GLDisplay, other_context_ptr: GLContext): [boolean, GLDisplay,GLContext];
/**
 * 
 */
export function gl_format_from_video_info(context: GLContext, vinfo: GstVideo.VideoInfo, plane: number): GLFormat;
/**
 * 
 */
export function gl_format_is_supported(context: GLContext, format: GLFormat): boolean;
/**
 * Get the unsized format and type from @format for usage in glReadPixels
 * ,
 * glTex{Sub}Image*, glTexImage* and similar functions.
 */
export function gl_format_type_from_sized_gl_format(format: GLFormat): [GLFormat,number];
/**
 * 
 */
export function gl_format_type_n_bytes(format: number, type: number): number;
/**
 * Retrieve the size in bytes of a video plane of data with a certain ali
 * gnment
 */
export function gl_get_plane_data_size(info: GstVideo.VideoInfo, align: GstVideo.VideoAlignment, plane: number): number;
/**
 * 
 */
export function gl_get_plane_start(info: GstVideo.VideoInfo, valign: GstVideo.VideoAlignment, plane: number): number;
/**
 * 
 */
export function gl_handle_context_query(element: Gst.Element, query: Gst.Query, display: GLDisplay | null, context: GLContext | null, other_context: GLContext | null): boolean;
/**
 * Helper function for implementing #GstElementClass.set_context() in
 * OpenGL capable elements.
 * Retrieve's the #GstGLDisplay or #GstGLContext in @context and places t
 * he
 * result in @display or @other_context respectively.
 */
export function gl_handle_set_context(element: Gst.Element, context: Gst.Context, display: GLDisplay, other_context: GLContext): [boolean, GLDisplay,GLContext];
/**
 * Initializes the GL Memory allocator. It is safe to call this function
 * multiple times.  This must be called before any other GstGLMemoryEGL o
 * peration.
 */
export function gl_memory_egl_init_once(): void;
/**
 * Initializes the GL Base Texture allocator. It is safe to call this fun
 * ction
 * multiple times.  This must be called before any other GstGLMemory oper
 * ation.
 */
export function gl_memory_init_once(): void;
/**
 * 
 */
export function gl_memory_pbo_init_once(): void;
/**
 * 
 */
export function gl_platform_from_string(platform_s: string): GLPlatform;
/**
 * 
 */
export function gl_platform_to_string(platform: GLPlatform): string;
/**
 * Performs a GST_QUERY_CONTEXT query of type "gst.gl.local_context" on a
 * ll
 * #GstPads in @element of @direction for the local OpenGL context used b
 * y
 * GStreamer elements.
 */
export function gl_query_local_gl_context(element: Gst.Element, direction: Gst.PadDirection, context_ptr: GLContext): [boolean, GLContext];
/**
 * Initializes the GL Base Texture allocator. It is safe to call this fun
 * ction
 * multiple times.  This must be called before any other GstGLRenderbuffe
 * r operation.
 */
export function gl_renderbuffer_init_once(): void;
/**
 * 
 */
export function gl_sized_gl_format_from_gl_format_type(context: GLContext, format: number, type: number): number;
/**
 * 
 */
export function gl_stereo_downmix_mode_get_type(): GType;
/**
 * 
 */
export function gl_sync_meta_api_get_type(): GType;
/**
 * 
 */
export function gl_sync_meta_get_info(): Gst.MetaInfo;
/**
 * 
 */
export function gl_texture_target_from_gl(target: number): GLTextureTarget;
/**
 * 
 */
export function gl_texture_target_from_string(str: string): GLTextureTarget;
/**
 * 
 */
export function gl_texture_target_to_buffer_pool_option(target: GLTextureTarget): string;
/**
 * 
 */
export function gl_texture_target_to_gl(target: GLTextureTarget): number;
/**
 * 
 */
export function gl_texture_target_to_string(target: GLTextureTarget): string;
/**
 * See gst_gl_value_set_texture_target_from_mask() for what entails a mas
 * k
 */
export function gl_value_get_texture_target_mask(value: GObject.Value): GLTextureTarget;
/**
 * 
 */
export function gl_value_set_texture_target(value: GObject.Value, target: GLTextureTarget): boolean;
/**
 * A mask is a bitwise OR of (1 << target) where target is a valid
 * #GstGLTextureTarget
 */
export function gl_value_set_texture_target_from_mask(value: GObject.Value, target_mask: GLTextureTarget): boolean;
/**
 * 
 */
export function gl_version_to_glsl_version(gl_api: GLAPI, maj: number, min: number): GLSLVersion;
/**
 * 
 */
export function gl_window_error_quark(): GLib.Quark;
/**
 * 
 */
export function glsl_error_quark(): GLib.Quark;
/**
 * 
 */
export function glsl_profile_from_string(string: string): GLSLProfile;
/**
 * 
 */
export function glsl_profile_to_string(profile: GLSLProfile): string | null;
/**
 * Note: this function first searches the first 1 kilobytes for a #versio
 * n
 * preprocessor directive and then executes gst_glsl_version_profile_from
 * _string().
 */
export function glsl_string_get_version_profile(s: string): [boolean, GLSLVersion,GLSLProfile];
/**
 * 
 */
export function glsl_version_from_string(string: string): GLSLVersion;
/**
 * Note: this function expects either a #version GLSL preprocesser direct
 * ive
 * or a valid GLSL version and/or profile.
 */
export function glsl_version_profile_from_string(string: string): [boolean, GLSLVersion,GLSLProfile];
/**
 * 
 */
export function glsl_version_profile_to_string(version: GLSLVersion, profile: GLSLProfile): string;
/**
 * 
 */
export function glsl_version_to_string(version: GLSLVersion): string | null;
/**
 * 
 */
export function is_gl_base_memory(mem: Gst.Memory): boolean;
/**
 * 
 */
export function is_gl_buffer(mem: Gst.Memory): boolean;
/**
 * 
 */
export function is_gl_memory(mem: Gst.Memory): boolean;
/**
 * 
 */
export function is_gl_memory_egl(mem: Gst.Memory): boolean;
/**
 * 
 */
export function is_gl_memory_pbo(mem: Gst.Memory): boolean;
/**
 * 
 */
export function is_gl_renderbuffer(mem: Gst.Memory): boolean;
export enum GLBaseMemoryError {
    FAILED = 0,
    OLD_LIBS = 1,
    RESOURCE_UNAVAILABLE = 2,
}
export enum GLContextError {
    FAILED = 0,
    WRONG_CONFIG = 1,
    WRONG_API = 2,
    OLD_LIBS = 3,
    CREATE_CONTEXT = 4,
    RESOURCE_UNAVAILABLE = 5,
}
export enum GLFormat {
    LUMINANCE = 6409,
    ALPHA = 6406,
    LUMINANCE_ALPHA = 6410,
    RED = 6403,
    R8 = 33321,
    RG = 33319,
    RG8 = 33323,
    RGB = 6407,
    RGB8 = 32849,
    RGB565 = 36194,
    RGB16 = 32852,
    RGBA = 6408,
    RGBA8 = 32856,
    RGBA16 = 32859,
    DEPTH_COMPONENT16 = 33189,
    DEPTH24_STENCIL8 = 35056,
}
export enum GLQueryType {
    NONE = 0,
    TIME_ELAPSED = 1,
    TIMESTAMP = 2,
}
export enum GLSLError {
    COMPILE = 0,
    LINK = 1,
    PROGRAM = 2,
}
export enum GLSLVersion {
    NONE = 0,
    "100" = 100,
    "110" = 110,
    "120" = 120,
    "130" = 130,
    "140" = 140,
    "150" = 150,
    "300" = 300,
    "310" = 310,
    "320" = 320,
    "330" = 330,
    "400" = 400,
    "410" = 410,
    "420" = 420,
    "430" = 430,
    "440" = 440,
    "450" = 450,
}
export enum GLStereoDownmix {
    GREEN_MAGENTA_DUBOIS = 0,
    RED_CYAN_DUBOIS = 1,
    AMBER_BLUE_DUBOIS = 2,
}
export enum GLTextureTarget {
    NONE = 0,
    "2D" = 1,
    RECTANGLE = 2,
    EXTERNAL_OES = 3,
}
export enum GLUploadReturn {
    DONE = 1,
    ERROR = -1,
    UNSUPPORTED = -2,
    RECONFIGURE = -3,
    UNSHARED_GL_CONTEXT = -100,
}
export enum GLWindowError {
    FAILED = 0,
    OLD_LIBS = 1,
    RESOURCE_UNAVAILABLE = 2,
}
export enum GLAPI {
    NONE = 0,
    OPENGL = 1,
    OPENGL3 = 2,
    GLES1 = 32768,
    GLES2 = 65536,
    ANY = 4294967295,
}
export enum GLBaseMemoryTransfer {
    DOWNLOAD = 1048576,
    UPLOAD = 2097152,
}
export enum GLDisplayType {
    NONE = 0,
    X11 = 1,
    WAYLAND = 2,
    COCOA = 4,
    WIN32 = 8,
    DISPMANX = 16,
    EGL = 32,
    VIV_FB = 64,
    GBM = 128,
    ANY = 4294967295,
}
export enum GLPlatform {
    NONE = 0,
    EGL = 1,
    GLX = 2,
    WGL = 4,
    CGL = 8,
    EAGL = 16,
    ANY = 4294967295,
}
export enum GLSLProfile {
    NONE = 0,
    ES = 1,
    CORE = 2,
    COMPATIBILITY = 4,
    ANY = 4294967295,
}
export class GLBaseFilter  {
    constructor(config?: properties);
    readonly context: GLContext;
    readonly display: GLDisplay;
    readonly in_caps: Gst.Caps;
    readonly out_caps: Gst.Caps;
    readonly priv: GLBaseFilterPrivate;
    find_gl_context(): boolean;
}
export class GLBaseMemoryAllocator  {
    constructor(config?: properties);
    readonly fallback_mem_copy: Gst.MemoryCopyFunction;
}
export class GLBufferAllocator  {
    constructor(config?: properties);
}
export class GLBufferPool extends Gst.BufferPool {
    constructor(config?: properties);
}
export class GLColorConvert extends Gst.Object {
    constructor(config?: properties);
    decide_allocation(query: Gst.Query): boolean;
    perform(inbuf: Gst.Buffer): Gst.Buffer;
    set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean;
    static fixate_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, other: Gst.Caps): Gst.Caps;
    static transform_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps;
}
export class GLContext extends Gst.Object {
    constructor(config?: properties);
    static new_wrapped(display: GLDisplay, handle: never, context_type: GLPlatform, available_apis: GLAPI): GLContext;
    activate(activate: boolean): boolean;
    can_share(other_context: GLContext): boolean;
    check_feature(feature: string): boolean;
    check_framebuffer_status(fbo_target: number): boolean;
    check_gl_version(api: GLAPI, maj: number, min: number): boolean;
    clear_framebuffer(): void;
    clear_shader(): void;
    create(other_context: GLContext | null): boolean;
    destroy(): void;
    fill_info(): boolean;
    get_display(): GLDisplay;
    get_gl_api(): GLAPI;
    get_gl_context(): never;
    get_gl_platform(): GLPlatform;
    get_gl_platform_version(): [number,number];
    get_gl_version(): [number,number];
    get_proc_address(name: string): object | null;
    get_thread(): GLib.Thread;
    get_window(): GLWindow | null;
    is_shared(): boolean;
    set_shared_with(share: GLContext): void;
    set_window(window: GLWindow): boolean;
    supports_glsl_profile_version(version: GLSLVersion, profile: GLSLProfile): boolean;
    supports_precision(version: GLSLVersion, profile: GLSLProfile): boolean;
    supports_precision_highp(version: GLSLVersion, profile: GLSLProfile): boolean;
    swap_buffers(): void;
    thread_add(func: GLContextThreadFunc, data: object | null): void;
    vfunc_activate(activate: boolean): boolean;
    vfunc_check_feature(feature: string): boolean;
    vfunc_choose_format(): boolean;
    vfunc_create_context(gl_api: GLAPI, other_context: GLContext): boolean;
    vfunc_destroy_context(): void;
    vfunc_get_gl_api(): GLAPI;
    vfunc_get_gl_context(): never;
    vfunc_get_gl_platform(): GLPlatform;
    vfunc_get_gl_platform_version(): [number,number];
    vfunc_swap_buffers(): void;
    static default_get_proc_address(gl_api: GLAPI, name: string): object | null;
    static get_current(): GLContext;
    static get_current_gl_api(platform: GLPlatform): [GLAPI, number | null,number | null];
    static get_current_gl_context(context_type: GLPlatform): never;
    static get_proc_address_with_platform(context_type: GLPlatform, gl_api: GLAPI, name: string): object | null;
}
export class GLDisplay extends Gst.Object {
    constructor(config?: properties);
    add_context(context: GLContext): boolean;
    create_context(other_context: GLContext): [boolean, GLContext];
    create_window(): GLWindow;
    egl_from_gl_display(): GLDisplayEGL;
    filter_gl_api(gl_api: GLAPI): void;
    find_window(data: object | null, compare_func: GLib.CompareFunc): GLWindow;
    get_gl_api(): GLAPI;
    get_gl_api_unlocked(): GLAPI;
    get_gl_context_for_thread(thread: GLib.Thread): GLContext;
    get_handle(): never;
    get_handle_type(): GLDisplayType;
    remove_window(window: GLWindow): boolean;
    vfunc_create_window(): GLWindow;
    vfunc_get_handle(): never;
}
export class GLDisplayEGL extends GLDisplay {
    constructor(config?: properties);
    static new_with_egl_display(display: object | null): GLDisplayEGL;
    static get_from_native(type: GLDisplayType, display: never): object | null;
}
export class GLDisplayWayland extends GLDisplay {
    constructor(config?: properties);
    static new_with_display(display: object | null): GLDisplayWayland;
}
export class GLDisplayX11 extends GLDisplay {
    constructor(config?: properties);
}
export class GLFilter  {
    constructor(config?: properties);
    readonly in_info: GstVideo.VideoInfo;
    readonly out_info: GstVideo.VideoInfo;
    readonly in_texture_target: GLTextureTarget;
    readonly out_texture_target: GLTextureTarget;
    readonly out_caps: Gst.Caps;
    readonly fbo: GLFramebuffer;
    readonly gl_result: boolean;
    readonly inbuf: Gst.Buffer;
    readonly outbuf: Gst.Buffer;
    readonly default_shader: GLShader;
    readonly valid_attributes: boolean;
    readonly vao: number;
    readonly vbo_indices: number;
    readonly vertex_buffer: number;
    readonly draw_attr_position_loc: number;
    readonly draw_attr_texture_loc: number;
    draw_fullscreen_quad(): void;
    filter_texture(inbuf: Gst.Buffer, outbuf: Gst.Buffer): boolean;
    render_to_target(input: GLMemory, output: GLMemory, func: GLFilterRenderFunc, data: object | null): boolean;
    render_to_target_with_shader(input: GLMemory, output: GLMemory, shader: GLShader): void;
    static add_rgba_pad_templates(klass: unknown): void;
}
export class GLFramebuffer extends Gst.Object {
    constructor(config?: properties);
    static new_with_default_depth(context: GLContext, width: number, height: number): GLFramebuffer;
    attach(attachment_point: number, mem: GLBaseMemory): void;
    bind(): void;
    draw_to_texture(mem: GLMemory, func: GLFramebufferFunc, user_data: object | null): boolean;
    get_effective_dimensions(): [number | null,number | null];
    get_id(): number;
}
export class GLMemoryAllocator  {
    constructor(config?: properties);
    static get_default(context: GLContext): GLMemoryAllocator;
}
export class GLMemoryEGLAllocator  {
    constructor(config?: properties);
}
export class GLMemoryPBOAllocator  {
    constructor(config?: properties);
}
export class GLOverlayCompositor extends Gst.Object {
    constructor(config?: properties);
    yinvert: boolean;
    draw_overlays(): void;
    free_overlays(): void;
    upload_overlays(buf: Gst.Buffer): void;
    static add_caps(caps: Gst.Caps): Gst.Caps;
}
export class GLRenderbufferAllocator  {
    constructor(config?: properties);
}
export class GLSLStage extends Gst.Object {
    constructor(config?: properties);
    static new_default_fragment(context: GLContext): GLSLStage;
    static new_default_vertex(context: GLContext): GLSLStage;
    static new_with_string(context: GLContext, type: number, version: GLSLVersion, profile: GLSLProfile, str: string): GLSLStage;
    static new_with_strings(context: GLContext, type: number, version: GLSLVersion, profile: GLSLProfile, n_strings: number, str: string[]): GLSLStage;
    compile(): boolean;
    get_handle(): number;
    get_profile(): GLSLProfile;
    get_shader_type(): number;
    get_version(): GLSLVersion;
    set_strings(version: GLSLVersion, profile: GLSLProfile, n_strings: number, str: string[]): boolean;
}
export class GLShader extends Gst.Object {
    constructor(config?: properties);
    readonly linked: boolean;static new_default(context: GLContext): GLShader;
    attach(stage: GLSLStage): boolean;
    attach_unlocked(stage: GLSLStage): boolean;
    bind_attribute_location(index: number, name: string): void;
    bind_frag_data_location(index: number, name: string): void;
    compile_attach_stage(stage: GLSLStage): boolean;
    detach(stage: GLSLStage): void;
    detach_unlocked(stage: GLSLStage): void;
    get_attribute_location(name: string): number;
    get_program_handle(): number;
    is_linked(): boolean;
    link(): boolean;
    release(): void;
    release_unlocked(): void;
    set_uniform_1f(name: string, value: number): void;
    set_uniform_1fv(name: string, count: number, value: number[]): void;
    set_uniform_1i(name: string, value: number): void;
    set_uniform_1iv(name: string, count: number, value: number[]): void;
    set_uniform_2f(name: string, v0: number, v1: number): void;
    set_uniform_2fv(name: string, count: number, value: number[]): void;
    set_uniform_2i(name: string, v0: number, v1: number): void;
    set_uniform_2iv(name: string, count: number, value: number[]): void;
    set_uniform_3f(name: string, v0: number, v1: number, v2: number): void;
    set_uniform_3fv(name: string, count: number, value: number[]): void;
    set_uniform_3i(name: string, v0: number, v1: number, v2: number): void;
    set_uniform_3iv(name: string, count: number, value: number[]): void;
    set_uniform_4f(name: string, v0: number, v1: number, v2: number, v3: number): void;
    set_uniform_4fv(name: string, count: number, value: number[]): void;
    set_uniform_4i(name: string, v0: number, v1: number, v2: number, v3: number): void;
    set_uniform_4iv(name: string, count: number, value: number[]): void;
    set_uniform_matrix_2fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_2x3fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_2x4fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_3fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_3x2fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_3x4fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_4fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_4x2fv(name: string, count: number, transpose: boolean, value: number): void;
    set_uniform_matrix_4x3fv(name: string, count: number, transpose: boolean, value: number): void;
    use(): void;
    static string_fragment_external_oes_get_default(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string;
    static string_fragment_get_default(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string;
    static string_get_highest_precision(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string;
}
export class GLUpload extends Gst.Object {
    constructor(config?: properties);
    get_caps(): [Gst.Caps | null,Gst.Caps | null];
    perform_with_buffer(buffer: Gst.Buffer): [GLUploadReturn, Gst.Buffer];
    propose_allocation(decide_query: Gst.Query | null, query: Gst.Query): void;
    set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean;
    set_context(context: GLContext): void;
    transform_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps;
    static get_input_template_caps(): Gst.Caps;
}
export class GLViewConvert extends Gst.Object {
    constructor(config?: properties);
    downmix_mode: GLStereoDownmix;
    input_flags_override: GstVideo.VideoMultiviewFlags;
    input_mode_override: GstVideo.VideoMultiviewMode;
    output_flags_override: GstVideo.VideoMultiviewFlags;
    output_mode_override: GstVideo.VideoMultiviewMode;
    fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps;
    get_output(): [Gst.FlowReturn, Gst.Buffer];
    perform(inbuf: Gst.Buffer): Gst.Buffer;
    reset(): void;
    set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean;
    set_context(context: GLContext): void;
    submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn;
    transform_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps;
}
export class GLWindow extends Gst.Object {
    constructor(config?: properties);
    controls_viewport(): boolean;
    draw(): void;
    get_context(): GLContext;
    get_display(): never;
    get_surface_dimensions(): [number,number];
    get_window_handle(): never;
    handle_events(handle_events: boolean): void;
    queue_resize(): void;
    quit(): void;
    resize(width: number, height: number): void;
    run(): void;
    send_key_event(event_type: string, key_str: string): void;
    send_message(callback: GLWindowCB, data: object | null): void;
    send_message_async(callback: GLWindowCB, data: object | null, destroy: GLib.DestroyNotify): void;
    send_mouse_event(event_type: string, button: number, posx: number, posy: number): void;
    set_close_callback(callback: GLWindowCB, data: object | null, destroy_notify: GLib.DestroyNotify): void;
    set_draw_callback(callback: GLWindowCB, data: object | null, destroy_notify: GLib.DestroyNotify): void;
    set_preferred_size(width: number, height: number): void;
    set_render_rectangle(x: number, y: number, width: number, height: number): boolean;
    set_resize_callback(callback: GLWindowResizeCB, data: object | null, destroy_notify: GLib.DestroyNotify): void;
    set_window_handle(handle: never): void;
    show(): void;
    vfunc_close(): void;
    vfunc_controls_viewport(): boolean;
    vfunc_draw(): void;
    vfunc_get_display(): never;
    vfunc_get_window_handle(): never;
    vfunc_handle_events(handle_events: boolean): void;
    vfunc_open(): boolean;
    vfunc_queue_resize(): void;
    vfunc_quit(): void;
    vfunc_run(): void;
    vfunc_send_message(callback: GLWindowCB, data: object | null): void;
    vfunc_send_message_async(callback: GLWindowCB, data: object | null, destroy: GLib.DestroyNotify): void;
    vfunc_set_preferred_size(width: number, height: number): void;
    vfunc_set_render_rectangle(x: number, y: number, width: number, height: number): boolean;
    vfunc_set_window_handle(handle: never): void;
    vfunc_show(): void;
}
export class EGLImage  {
    constructor(config?: properties);
    static new_wrapped(context: GLContext, image: object | null, format: GLFormat, user_data: object | null, user_data_destroy: EGLImageDestroyNotify): EGLImage;
    export_dmabuf(fd: number, stride: number, offset: number): boolean;
    get_image(): object | null;
    static from_dmabuf(context: GLContext, dmabuf: number, in_info: GstVideo.VideoInfo, plane: number, offset: number): EGLImage;
    static from_dmabuf_direct(context: GLContext, fd: number, offset: number, in_info: GstVideo.VideoInfo): EGLImage;
    static from_texture(context: GLContext, gl_mem: GLMemory, attribs: never): EGLImage;
}
export class GLAllocationParams  {
    constructor(config?: properties);
    struct_size: number;
    alloc_flags: number;
    alloc_size: number;
    alloc_params: Gst.AllocationParams;
    context: GLContext;
    notify: GLib.DestroyNotify;
    user_data: object;
    wrapped_data: object;
    gl_handle: object;
    copy(): GLAllocationParams;
    copy_data(dest: GLAllocationParams): void;
    free(): void;
    free_data(): void;
}
export class GLAsyncDebug  {
    constructor(config?: properties);
    readonly state_flags: number;
    readonly cat: Gst.DebugCategory;
    readonly level: Gst.DebugLevel;
    readonly file: string;
    readonly "function": string;
    readonly line: number;
    readonly object: GObject.Object;
    readonly debug_msg: string;
    readonly callback: GLAsyncDebugLogGetMessage;
    readonly user_data: object;
    readonly notify: GLib.DestroyNotify;
    free(): void;
    freeze(): void;
    init(): void;
    output_log_msg(): void;
    thaw(): void;
    unset(): void;
}
export class GLBaseFilterPrivate  {
    constructor(config?: properties);
}
export class GLBaseMemory  {
    constructor(config?: properties);
    mem: Gst.Memory;
    context: GLContext;
    lock: GLib.Mutex;
    map_flags: Gst.MapFlags;
    map_count: number;
    gl_map_count: number;
    data: object;
    query: GLQuery;
    readonly alloc_size: number;
    readonly notify: GLib.DestroyNotify;
    readonly user_data: object;
    alloc_data(): boolean;
    init(allocator: Gst.Allocator, parent: Gst.Memory | null, context: GLContext, params: Gst.AllocationParams | null, size: number, user_data: object | null, notify: GLib.DestroyNotify | null): void;
    memcpy(dest: GLBaseMemory, offset: number, size: number): boolean;
    static alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory;
    static init_once(): void;
}
export class GLBuffer  {
    constructor(config?: properties);
    mem: GLBaseMemory;
    id: number;
    target: number;
    usage_hints: number;
    static init_once(): void;
}
export class GLBufferAllocationParams  {
    constructor(config?: properties);
}
export class GLBufferPoolPrivate  {
    constructor(config?: properties);
}
export class GLColorConvertPrivate  {
    constructor(config?: properties);
}
export class GLContextPrivate  {
    constructor(config?: properties);
}
export class GLDisplayPrivate  {
    constructor(config?: properties);
}
export class GLFramebufferPrivate  {
    constructor(config?: properties);
}
export class GLFuncs  {
    constructor(config?: properties);
}
export class GLMemory  {
    constructor(config?: properties);
    mem: GLBaseMemory;
    tex_id: number;
    tex_target: GLTextureTarget;
    tex_format: GLFormat;
    info: GstVideo.VideoInfo;
    valign: GstVideo.VideoAlignment;
    plane: number;
    tex_scaling: number[];
    texture_wrapped: boolean;
    unpack_length: number;
    tex_width: number;
    copy_into(tex_id: number, target: GLTextureTarget, tex_format: GLFormat, width: number, height: number): boolean;
    copy_teximage(tex_id: number, out_target: GLTextureTarget, out_tex_format: GLFormat, out_width: number, out_height: number): boolean;
    get_texture_format(): GLFormat;
    get_texture_height(): number;
    get_texture_id(): number;
    get_texture_target(): GLTextureTarget;
    get_texture_width(): number;
    init(allocator: Gst.Allocator, parent: Gst.Memory | null, context: GLContext, target: GLTextureTarget, tex_format: GLFormat, params: Gst.AllocationParams | null, info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, user_data: object | null, notify: GLib.DestroyNotify | null): void;
    read_pixels(read_pointer: object | null): boolean;
    texsubimage(read_pointer: object | null): void;
    static init_once(): void;
}
export class GLMemoryEGL  {
    constructor(config?: properties);
    readonly mem: GLMemory;
    readonly image: EGLImage;
    get_display(): object | null;
    get_image(): object | null;
    static init_once(): void;
}
export class GLMemoryPBO  {
    constructor(config?: properties);
    readonly mem: GLMemory;
    readonly pbo: GLBuffer;
    copy_into_texture(tex_id: number, target: GLTextureTarget, tex_format: GLFormat, width: number, height: number, stride: number, respecify: boolean): boolean;
    download_transfer(): void;
    upload_transfer(): void;
    static init_once(): void;
}
export class GLQuery  {
    constructor(config?: properties);
    readonly context: GLContext;
    readonly query_type: number;
    readonly query_id: number;
    readonly supported: boolean;
    readonly start_called: boolean;
    readonly debug: GLAsyncDebug;
    counter(): void;
    end(): void;
    free(): void;
    init(context: GLContext, query_type: GLQueryType): void;
    result(): number;
    start(): void;
    unset(): void;
    static local_gl_context(element: Gst.Element, direction: Gst.PadDirection, context_ptr: GLContext): [boolean, GLContext];
}
export class GLRenderbuffer  {
    constructor(config?: properties);
    readonly mem: GLBaseMemory;
    renderbuffer_id: number;
    renderbuffer_format: GLFormat;
    width: number;
    height: number;
    renderbuffer_wrapped: boolean;
    get_format(): GLFormat;
    get_height(): number;
    get_id(): number;
    get_width(): number;
    static init_once(): void;
}
export class GLRenderbufferAllocationParams  {
    constructor(config?: properties);
    static new_wrapped(context: GLContext, alloc_params: Gst.AllocationParams | null, renderbuffer_format: GLFormat, width: number, height: number, gl_handle: object | null, user_data: object | null, notify: GLib.DestroyNotify | null): GLRenderbufferAllocationParams;
}
export class GLSLStagePrivate  {
    constructor(config?: properties);
}
export class GLShaderPrivate  {
    constructor(config?: properties);
}
export class GLSyncMeta  {
    constructor(config?: properties);
    context: GLContext;
    data: object;
    set_sync_point(context: GLContext): void;
    wait(context: GLContext): void;
    wait_cpu(context: GLContext): void;
    static get_info(): Gst.MetaInfo;
}
export class GLUploadPrivate  {
    constructor(config?: properties);
}
export class GLVideoAllocationParams  {
    constructor(config?: properties);
    static new_wrapped_data(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat, wrapped_data: object | null, user_data: object | null, notify: GLib.DestroyNotify | null): GLVideoAllocationParams;
    static new_wrapped_gl_handle(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat, gl_handle: object | null, user_data: object | null, notify: GLib.DestroyNotify | null): GLVideoAllocationParams;
    static new_wrapped_texture(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat, tex_id: number, user_data: object | null, notify: GLib.DestroyNotify | null): GLVideoAllocationParams;
    copy_data(dest_vid: GLVideoAllocationParams): void;
    free_data(): void;
}
export class GLViewConvertPrivate  {
    constructor(config?: properties);
}
export class GLWindowPrivate  {
    constructor(config?: properties);
}