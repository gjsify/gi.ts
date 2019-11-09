
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as GL from "gl";
import * as Cogl from "cogl";
/**
 * cogl.d.ts
 */
type properties = { [key: string]: any };
export type DebugObjectForeachTypeCallback = (info: DebugObjectTypeInfo, user_data: object | null) => void;
export type FeatureCallback = (feature: FeatureID, user_data: object | null) => void;
export type FenceCallback = (fence: Fence, user_data: object | null) => void;
export type FrameCallback = (onscreen: Onscreen, event: FrameEvent, info: FrameInfo, user_data: object | null) => void;
export type FuncPtr = () => void;
export type MetaTextureCallback = (sub_texture: Texture, sub_texture_coords: number, meta_coords: number, user_data: object | null) => void;
export type OnscreenDirtyCallback = (onscreen: Onscreen, info: OnscreenDirtyInfo, user_data: object | null) => void;
export type OnscreenResizeCallback = (onscreen: Onscreen, width: number, height: number, user_data: object | null) => void;
export type OnscreenX11MaskCallback = (onscreen: Onscreen, event_mask: number, user_data: object | null) => void;
export type OutputCallback = (output: Output, user_data: object | null) => void;
export type PipelineLayerCallback = (pipeline: Pipeline, layer_index: number, user_data: object | null) => Bool;
export type PrimitiveAttributeCallback = (primitive: Primitive, attribute: Attribute, user_data: object | null) => Bool;
export type SwapBuffersNotify = (framebuffer: Framebuffer, user_data: object | null) => void;
export const AFIRST_BIT: number;
export const A_BIT: number;
export const BGR_BIT: number;
export const DEPTH_BIT: number;
export const PREMULT_BIT: number;
export const STENCIL_BIT: number;
export const TEXTURE_MAX_WASTE: number;
export const VERSION_COMPONENT_BITS: number;
export const VERSION_MAX_COMPONENT_VALUE: number;
/**
 * 
 */
export function bitmap_error_quark(): number;
/**
 * 
 */
export function blend_string_error_quark(): number;
/**
 * Retrieves the size of buffer
 */
export function buffer_get_size(buffer: Buffer): number;
/**
 * Retrieves the update hints set using cogl_buffer_set_update_hint()
 */
export function buffer_get_update_hint(buffer: Buffer): BufferUpdateHint;
/**
 * Maps the buffer into the application address space for direct
 * access. This is equivalent to calling cogl_buffer_map_range() with
 * zero as the offset and the size of the entire buffer as the size.
 * It is strongly recommended that you pass
 * %COGL_BUFFER_MAP_HINT_DISCARD as a hint if you are going to replace
 * all the buffer's data. This way if the buffer is currently being
 * used by the GPU then the driver won't have to stall the CPU and
 * wait for the hardware to finish because it can instead allocate a
 * new buffer to map.
 * The behaviour is undefined if you access the buffer in a way
 * conflicting with the @access mask you pass. It is also an error to
 * release your last reference while the buffer is mapped.
 */
export function buffer_map(buffer: Buffer, access: BufferAccess, hints: BufferMapHint): object | null;
/**
 * Maps a sub-region of the buffer into the application's address space
 * for direct access.
 * It is strongly recommended that you pass
 * %COGL_BUFFER_MAP_HINT_DISCARD as a hint if you are going to replace
 * all the buffer's data. This way if the buffer is currently being
 * used by the GPU then the driver won't have to stall the CPU and
 * wait for the hardware to finish because it can instead allocate a
 * new buffer to map. You can pass
 * %COGL_BUFFER_MAP_HINT_DISCARD_RANGE instead if you want the
 * regions outside of the mapping to be retained.
 * The behaviour is undefined if you access the buffer in a way
 * conflicting with the @access mask you pass. It is also an error to
 * release your last reference while the buffer is mapped.
 */
export function buffer_map_range(buffer: Buffer, offset: number, size: number, access: BufferAccess, hints: BufferMapHint): object | null;
/**
 * Updates part of the buffer with new data from @data. Where to put this
 *  new
 * data is controlled by @offset and @offset + @data should be less than 
 * the
 * buffer size.
 */
export function buffer_set_data(buffer: Buffer, offset: number, data: object | null, size: number): Bool;
/**
 * Sets the update hint on a buffer. See #CoglBufferUpdateHint for a desc
 * ription
 * of the available hints.
 */
export function buffer_set_update_hint(buffer: Buffer, hint: BufferUpdateHint): void;
/**
 * Unmaps a buffer previously mapped by cogl_buffer_map().
 */
export function buffer_unmap(buffer: Buffer): void;
/**
 * Compares two #CoglColor<!-- -->s and checks if they are the same.
 * This function can be passed to g_hash_table_new() as the @key_equal_fu
 * nc
 * parameter, when using #CoglColor<!-- -->s as keys in a #GHashTable.
 */
export function color_equal(v1: object | null, v2: object | null): Bool;
/**
 * Converts a color expressed in HLS (hue, luminance and saturation)
 * values into a #CoglColor.
 */
export function color_init_from_hsl(hue: number, saturation: number, luminance: number): [Color];
/**
 * Allows visualizing the operations that build up the given @entry
 * for debugging purposes by printing to stdout.
 */
export function debug_matrix_entry_print(entry: MatrixEntry): void;
/**
 * Prints the contents of a #CoglMatrix to stdout.
 */
export function debug_matrix_print(matrix: Matrix): void;
/**
 * Invokes @func once for each type of object that Cogl uses and
 * passes a count of the number of objects for that type. This is
 * intended to be used solely for debugging purposes to track down
 * issues with objects leaking.
 */
export function debug_object_foreach_type(func: DebugObjectForeachTypeCallback, user_data: object | null): void;
/**
 * Prints a list of all the object types that Cogl uses along with the
 * number of objects of that type that are currently in use. This is
 * intended to be used solely for debugging purposes to track down
 * issues with objects leaking.
 */
export function debug_object_print_instances(): void;
/**
 * If you have done a runtime check to determine that Cogl is using
 * EGL internally then this API can be used to retrieve the EGLContext
 * handle that was setup internally. The result is undefined if Cogl
 * is not using EGL.
 * Note: The current window system backend can be checked using
 * cogl_renderer_get_winsys_id().
 */
export function egl_context_get_egl_context(context: Context): unknown;
/**
 * If you have done a runtime check to determine that Cogl is using
 * EGL internally then this API can be used to retrieve the EGLDisplay
 * handle that was setup internally. The result is undefined if Cogl
 * is not using EGL.
 * Note: The current window system backend can be checked using
 * cogl_renderer_get_winsys_id().
 */
export function egl_context_get_egl_display(context: Context): unknown;
/**
 * Makes a copy of @error which can later be freed using
 * cogl_error_free().
 */
export function error_copy(error: GLib.Error): GLib.Error;
/**
 * Frees a #CoglError and associated resources.
 */
export function error_free(error: GLib.Error): void;
/**
 * Returns %TRUE if error matches @domain and @code, %FALSE otherwise.
 * In particular, when error is %NULL, FALSE will be returned.
 */
export function error_matches(error: GLib.Error, domain: number, code: number): Bool;
/**
 * Compares the two given euler angles @v1 and @v1 and it they are
 * equal returns %TRUE else %FALSE.
 * <note>This function only checks that all three components rotations
 * are numerically equal, it does not consider that some rotations
 * can be represented with different component rotations</note>
 */
export function euler_equal(v1: object | null, v2: object | null): Bool;
/**
 * Iterates through all the context level features currently supported
 * for a given @context and for each feature @callback is called.
 */
export function foreach_feature(context: Context, callback: FeatureCallback, user_data: object | null): void;
/**
 * 
 */
export function framebuffer_error_quark(): number;
/**
 * Returns the current time value from Cogl's internal clock. This
 * clock is used for measuring times such as the presentation time
 * in a #CoglFrameInfo.
 * This method is meant for converting timestamps retrieved from Cogl
 * to other time systems, and is not meant to be used as a standalone
 * timing system. For that reason, if this function is called without
 * having retrieved a valid (non-zero) timestamp from Cogl first, it
 * may return 0 to indicate that Cogl has no active internal clock.
 */
export function get_clock_time(context: Context): number;
/**
 * Gets the current #CoglFramebuffer as set using
 * cogl_push_framebuffer()
 */
export function get_draw_framebuffer(): Framebuffer;
/**
 * 
 */
export function get_rectangle_indices(context: Context, n_rectangles: number): Indices;
/**
 * Returns a pointer to a singleton quaternion constant describing the
 * canonical identity [1 (0, 0, 0)] which represents no rotation.
 * If you multiply a quaternion with the identity quaternion you will
 * get back the same value as the original quaternion.
 */
export function get_static_identity_quaternion(): Quaternion;
/**
 * 
 */
export function get_static_zero_quaternion(): Quaternion;
/**
 * Returns the OpenGL ES 2.0 api vtable for the currently pushed
 * #CoglGLES2Context (last pushed with cogl_push_gles2_context()) or
 * %NULL if no #CoglGLES2Context has been pushed.
 */
export function gles2_get_current_vtable(): GLES2Vtable;
/**
 * Creates a #CoglTexture2D from an OpenGL ES 2.0 texture handle that
 * was created within the given @gles2_ctx via glGenTextures(). The
 * texture needs to have been associated with the GL_TEXTURE_2D target.
 * <note>This interface is only intended for sharing textures to read
 * from.  The behaviour is undefined if the texture is modified using
 * the Cogl api.</note>
 * <note>Applications should only pass this function handles that were
 * created via a #CoglGLES2Vtable or via libcogl-gles2 and not pass
 * handles created directly using the system's native libGLESv2
 * api.</note>
 */
export function gles2_texture_2d_new_from_handle(ctx: Context, gles2_ctx: GLES2Context, handle: number, width: number, height: number, format: PixelFormat): Texture2D;
/**
 * Gets an OpenGL ES 2.0 texture handle for a #CoglTexture that can
 * then be referenced by a #CoglGLES2Context. As well as returning
 * a texture handle the texture's target (such as GL_TEXTURE_2D) is
 * also returned.
 * If the #CoglTexture can not be shared with a #CoglGLES2Context then
 * this function will return %FALSE.
 * This api does not affect the lifetime of the CoglTexture and you
 * must take care not to reference the returned handle after the
 * original texture has been freed.
 * <note>This interface is only intended for sharing textures to read
 * from.  The behaviour is undefined if the texture is modified by a
 * GLES2 context.</note>
 * <note>This function will only return %TRUE for low-level
 * #CoglTexture<!-- -->s such as #CoglTexture2D or #CoglTexture3D but
 * not for high level meta textures such as
 * #CoglTexture2DSliced</note>
 * <note>The handle returned should not be passed directly to a system
 * OpenGL ES 2.0 library, the handle is only intended to be used via
 * a #CoglGLES2Vtable or via libcogl-gles2.</note>
 */
export function gles2_texture_get_handle(texture: Texture, handle: number, target: number): Bool;
/**
 * Creates a #GSource which handles Cogl's internal system event
 * processing. This can be used as a convenience instead of
 * cogl_poll_renderer_get_info() and cogl_poll_renderer_dispatch() in
 * applications that are already using the GLib main loop. After this
 * is called the #GSource should be attached to the main loop using
 * g_source_attach().
 */
export function glib_renderer_source_new(renderer: Renderer, priority: number): GLib.Source;
/**
 * Creates a #GSource which handles Cogl's internal system event
 * processing. This can be used as a convenience instead of
 * cogl_poll_renderer_get_info() and cogl_poll_renderer_dispatch() in
 * applications that are already using the GLib main loop. After this
 * is called the #GSource should be attached to the main loop using
 * g_source_attach().
 * Applications that manually connect to a #CoglRenderer before they
 * create a #CoglContext should instead use
 * cogl_glib_renderer_source_new() so that events may be dispatched
 * before a context has been created. In that case you don't need to
 * use this api in addition later, it is simply enough to use
 * cogl_glib_renderer_source_new() instead.
 * <note>This api is actually just a thin convenience wrapper around
 * cogl_glib_renderer_source_new()</note>
 */
export function glib_source_new(context: Context, priority: number): GLib.Source;
/**
 * If you have done a runtime check to determine that Cogl is using
 * GLX internally then this API can be used to retrieve the GLXContext
 * handle that was setup internally. The result is undefined if Cogl
 * is not using GLX.
 */
export function glx_context_get_glx_context(context: Context): unknown;
/**
 * 
 */
export function gtype_matrix_get_type(): unknown;
/**
 * 
 */
export function handle_get_type(): unknown;
/**
 * Increases the reference count of @handle by 1
 */
export function handle_ref(handle: Handle): Handle;
/**
 * Drecreases the reference count of @handle by 1; if the reference
 * count reaches 0, the resources allocated by @handle will be freed
 */
export function handle_unref(handle: Handle): void;
/**
 * Checks if a given @feature is currently available
 * Cogl does not aim to be a lowest common denominator API, it aims to
 * expose all the interesting features of GPUs to application which
 * means applications have some responsibility to explicitly check
 * that certain features are available before depending on them.
 */
export function has_feature(context: Context, feature: FeatureID): Bool;
/**
 * Checks if a list of features are all currently available.
 * This checks all of the listed features using cogl_has_feature() and
 * returns %TRUE if all the features are available or %FALSE
 * otherwise.
 */
export function has_features(context: Context, ___: unknown[]): Bool;
/**
 * Checks whether the given object references a #CoglAtlasTexture
 */
export function is_atlas_texture(object: object | null): Bool;
/**
 * Gets whether the given object references a #CoglAttribute.
 */
export function is_attribute(object: object | null): Bool;
/**
 * Gets whether the given object references a #CoglAttributeBuffer.
 */
export function is_attribute_buffer(object: object | null): Bool;
/**
 * Checks whether @object is a #CoglBitmap
 */
export function is_bitmap(object: object | null): Bool;
/**
 * Checks whether @buffer is a buffer object.
 */
export function is_buffer(object: object | null): Bool;
/**
 * Gets whether the given object references an existing context object.
 */
export function is_context(object: object | null): Bool;
/**
 * Gets whether the given object references a #CoglDisplay.
 */
export function is_display(object: object | null): Bool;
/**
 * Gets whether the given object references a #CoglFrameInfo.
 */
export function is_frame_info(object: object | null): Bool;
/**
 * Gets whether the given object references a #CoglFramebuffer.
 */
export function is_framebuffer(object: object | null): Bool;
/**
 * Gets whether the given object references a #CoglGLES2Context.
 */
export function is_gles2_context(object: object | null): Bool;
/**
 * Gets whether the given object references a #CoglIndexBuffer.
 */
export function is_index_buffer(object: object | null): Bool;
/**
 * Gets whether the given object references a #CoglIndices.
 */
export function is_indices(object: object | null): Bool;
/**
 * Determines if the given #CoglObject refers to a #CoglMatrixStack.
 */
export function is_matrix_stack(object: object | null): Bool;
/**
 * Gets whether the given object references a #CoglOnscreen.
 */
export function is_onscreen(object: object | null): Bool;
/**
 * Gets whether the given object references a #CoglOnscreenTemplate.
 */
export function is_onscreen_template(object: object | null): Bool;
/**
 * Gets whether the given object references a #CoglOutput.
 */
export function is_output(object: object | null): Bool;
/**
 * Gets whether the given @object references an existing pipeline object.
 */
export function is_pipeline(object: object | null): Bool;
/**
 * Checks whether @object is a pixel buffer.
 */
export function is_pixel_buffer(object: object | null): Bool;
/**
 * Gets whether the given object references a #CoglPrimitive.
 */
export function is_primitive(object: object | null): Bool;
/**
 * Gets whether the given object references a primitive texture object.
 */
export function is_primitive_texture(object: object | null): Bool;
/**
 * Determines if the given @object is a #CoglRenderer
 */
export function is_renderer(object: object | null): Bool;
/**
 * Gets whether the given @object references an existing snippet object.
 */
export function is_snippet(object: object | null): Bool;
/**
 * Checks whether @object is a #CoglSubTexture.
 */
export function is_sub_texture(object: object | null): Bool;
/**
 * 
 */
export function is_swap_chain(object: object | null): Bool;
/**
 * Gets whether the given object references a texture object.
 */
export function is_texture(object: object | null): Bool;
/**
 * Gets whether the given object references an existing #CoglTexture2D
 * object.
 */
export function is_texture_2d(object: object | null): Bool;
/**
 * Gets whether the given object references a #CoglTexture2DSliced.
 */
export function is_texture_2d_sliced(object: object | null): Bool;
/**
 * Checks whether the given object references a #CoglTexture3D
 */
export function is_texture_3d(object: object | null): Bool;
/**
 * Checks whether @object points to a #CoglTexturePixmapX11 instance.
 */
export function is_texture_pixmap_x11(object: object | null): Bool;
/**
 * Gets whether the given object references an existing
 * #CoglTextureRectangle object.
 */
export function is_texture_rectangle(object: object | null): Bool;
/**
 * Asks Cogl to explicitly reset the crtc output modes at the next
 * #CoglOnscreen swap_buffers request. For applications that support
 * VT switching they may want to re-assert the output modes when
 * switching back to the applications VT since the modes are often not
 * correctly restored automatically.
 * <note>The @display must have been either explicitly setup via
 * cogl_display_setup() or implicitily setup by having created a
 * context using the @display</note>
 */
export function kms_display_queue_modes_reset(display: Display): void;
/**
 * Tells cogl to ignore (or stop ignoring) a ctrc which means
 * it never flips buffers at this crtc.
 */
export function kms_display_set_ignore_crtc(display: Display, id: number, ignore: Bool): void;
/**
 * Configures @display to use a framebuffer sized @width x @height, cover
 * ing
 * the CRTCS in @crtcs.
 * @width and @height must be within the driver framebuffer limits, and @
 * crtcs
 * must be valid KMS API IDs.
 * Calling this function overrides the automatic mode setting done by Cog
 * l,
 * and for this reason must be called before the first call to cogl_onscr
 * een_swap_buffers().
 * If you want to restore the default behaviour, you can call this functi
 * on
 * with @width and @height set to -1.
 */
export function kms_display_set_layout(display: Display, width: number, height: number, crtcs: KmsCrtc, n_crtcs: number): Bool;
/**
 * 
 */
export function kms_renderer_get_gbm(renderer: Renderer): object | null;
/**
 * Queries the file descriptor Cogl is using internally for
 * communicating with the kms driver.
 */
export function kms_renderer_get_kms_fd(renderer: Renderer): number;
/**
 * Sets the file descriptor Cogl should use to communicate
 * to the kms driver. If -1 (the default), then Cogl will
 * open its own FD by trying to open "/dev/dri/card0".
 */
export function kms_renderer_set_kms_fd(renderer: Renderer, fd: number): void;
/**
 * Compares two matrices to see if they represent the same
 * transformation. Although internally the matrices may have different
 * annotations associated with them and may potentially have a cached
 * inverse matrix these are not considered in the comparison.
 */
export function matrix_equal(v1: object | null, v2: object | null): Bool;
/**
 * Allows you to manually iterate the low-level textures that define a
 * given region of a high-level #CoglMetaTexture.
 * For example cogl_texture_2d_sliced_new_with_size() can be used to
 * create a meta texture that may slice a large image into multiple,
 * smaller power-of-two sized textures. These high level textures are
 * not directly understood by a GPU and so this API must be used to
 * manually resolve the underlying textures for drawing.
 * All high level textures (#CoglAtlasTexture, #CoglSubTexture,
 * #CoglTexturePixmapX11, and #CoglTexture2DSliced) can be handled
 * consistently using this interface which greately simplifies
 * implementing primitives that support all texture types.
 * For example if you use the cogl_rectangle() API then Cogl will
 * internally use this API to resolve the low level textures of any
 * meta textures you have associated with CoglPipeline layers.
 * <note>The low level drawing APIs such as cogl_primitive_draw()
 * don't understand the #CoglMetaTexture interface and so it is your
 * responsibility to use this API to resolve all CoglPipeline textures
 * into low-level textures before drawing.</note>
 * For each low-level texture that makes up part of the given region
 * of the @meta_texture, @callback is called specifying how the
 * low-level texture maps to the original region.
 */
export function meta_texture_foreach_in_region(meta_texture: MetaTexture, tx_1: number, ty_1: number, tx_2: number, ty_2: number, wrap_s: PipelineWrapMode, wrap_t: PipelineWrapMode, callback: MetaTextureCallback, user_data: object | null): void;
/**
 * This should be called whenever an application is woken up from
 * going idle in its main loop. The @poll_fds array should contain a
 * list of file descriptors matched with the events that occurred in
 * revents. The events field is ignored. It is safe to pass in extra
 * file descriptors that Cogl didn't request when calling
 * cogl_poll_renderer_get_info() or a shorter array missing some file
 * descriptors that Cogl requested.
 * <note>If your application didn't originally create a #CoglRenderer
 * manually then you can easily get a #CoglRenderer pointer by calling
 * cogl_get_renderer().</note>
 */
export function poll_renderer_dispatch(renderer: Renderer, poll_fds: PollFD, n_poll_fds: number): void;
/**
 * Is used to integrate Cogl with an application mainloop that is based
 * on the unix poll(2) api (or select() or something equivalent). This
 * api should be called whenever an application is about to go idle so
 * that Cogl has a chance to describe what file descriptor events it
 * needs to be woken up for.
 * <note>If your application is using the Glib mainloop then you
 * should jump to the cogl_glib_source_new() api as a more convenient
 * way of integrating Cogl with the mainloop.</note>
 * After the function is called *@poll_fds will contain a pointer to
 * an array of #CoglPollFD structs describing the file descriptors
 * that Cogl expects. The fd and events members will be updated
 * accordingly. After the application has completed its idle it is
 * expected to either update the revents members directly in this
 * array or to create a copy of the array and update them
 * there.
 * When the application mainloop returns from calling poll(2) (or its
 * equivalent) then it should call cogl_poll_renderer_dispatch()
 * passing a pointer the array of CoglPollFD<!-- -->s with updated
 * revent values.
 * When using the %COGL_WINSYS_ID_WGL winsys (where file descriptors
 * don't make any sense) or %COGL_WINSYS_ID_SDL (where the event
 * handling functions of SDL don't allow blocking on a file
 * descriptor) *n_poll_fds is guaranteed to be zero.
 * @timeout will contain a maximum amount of time to wait in
 * microseconds before the application should wake up or -1 if the
 * application should wait indefinitely. This can also be 0 if
 * Cogl needs to be woken up immediately.
 */
export function poll_renderer_get_info(renderer: Renderer, poll_fds: PollFD, n_poll_fds: number, timeout: number): number;
/**
 * Restores the previously active #CoglGLES2Context if there
 * were nested calls to cogl_push_gles2_context() or otherwise
 * restores the ability to render with the Cogl api instead
 * of OpenGLES 2.0.
 * The behaviour is undefined if calls to cogl_pop_gles2_context()
 * are not balenced with the number of corresponding calls to
 * cogl_push_gles2_context().
 */
export function pop_gles2_context(ctx: Context): void;
/**
 * Pushes the given @gles2_ctx onto a stack associated with @ctx so
 * that the OpenGLES 2.0 api can be used instead of the Cogl
 * rendering apis to read and write to the specified framebuffers.
 * Usage of the api available through a #CoglGLES2Vtable is only
 * allowed between cogl_push_gles2_context() and
 * cogl_pop_gles2_context() calls.
 * If there is a runtime problem with switching over to the given
 * @gles2_ctx then this function will return %FALSE and return
 * an error through @error.
 */
export function push_gles2_context(ctx: Context, gles2_ctx: GLES2Context, read_buffer: Framebuffer, write_buffer: Framebuffer): Bool;
/**
 * Compares that all the components of quaternions @a and @b are
 * equal.
 * An epsilon value is not used to compare the float components, but
 * the == operator is at least used so that 0 and -0 are considered
 * equal.
 */
export function quaternion_equal(v1: object | null, v2: object | null): Bool;
/**
 * 
 */
export function renderer_error_quark(): number;
/**
 * 
 */
export function texture_error_quark(): number;
/**
 * Adds each of the corresponding components in vectors @a and @b
 * storing the results in @result.
 */
export function vector3_add(result: number, a: number, b: number): void;
/**
 * Allocates a new 3 component float vector on the heap initializing
 * the components from the given @vector and returns a pointer to the
 * newly allocated vector. You should free the memory using
 * cogl_vector3_free()
 */
export function vector3_copy(vector: number): number;
/**
 * Calculates the cross product between the two vectors @u and @v.
 * The cross product is a vector perpendicular to both @u and @v. This
 * can be useful for calculating the normal of a polygon by creating
 * two vectors in its plane using the polygons vertices and taking
 * their cross product.
 * If the two vectors are parallel then the cross product is 0.
 * You can use a right hand rule to determine which direction the
 * perpendicular vector will point: If you place the two vectors tail,
 * to tail and imagine grabbing the perpendicular line that extends
 * through the common tail with your right hand such that you fingers
 * rotate in the direction from @u to @v then the resulting vector
 * points along your extended thumb.
 */
export function vector3_cross_product(result: number, u: number, v: number): void;
/**
 * If you consider the two given vectors as (x,y,z) points instead
 * then this will compute the distance between those two points.
 */
export function vector3_distance(a: number, b: number): number;
/**
 * Divides each of the @vector components by the given scalar.
 */
export function vector3_divide_scalar(vector: number, scalar: number): void;
/**
 * Calculates the dot product of the two 3 component vectors. This
 * can be used to determine the magnitude of one vector projected onto
 * another. (for example a surface normal)
 * For example if you have a polygon with a given normal vector and
 * some other point for which you want to calculate its distance from
 * the polygon, you can create a vector between one of the polygon
 * vertices and that point and use the dot product to calculate the
 * magnitude for that vector but projected onto the normal of the
 * polygon. This way you don't just get the distance from the point to
 * the edge of the polygon you get the distance from the point to the
 * nearest part of the polygon.
 * <note>If you don't use a unit length normal in the above example
 * then you would then also have to divide the result by the magnitude
 * of the normal</note>
 * The dot product is calculated as:
 * |[
 *  (a->x * b->x + a->y * b->y + a->z * b->z)
 * ]|
 * For reference, the dot product can also be calculated from the
 * angle between two vectors as:
 * |[
 *  |a||b|cos𝜃
 * ]|
 */
export function vector3_dot_product(a: number, b: number): number;
/**
 * Compares the components of two vectors and returns TRUE if they are
 * the same.
 * The comparison of the components is done with the '==' operator
 * such that -0 is considered equal to 0, but otherwise there is no
 * fuzziness such as an epsilon to consider vectors that are
 * essentially identical except for some minor precision error
 * differences due to the way they have been manipulated.
 */
export function vector3_equal(v1: object | null, v2: object | null): Bool;
/**
 * Compares the components of two vectors using the given epsilon and
 * returns TRUE if they are the same, using an internal epsilon for
 * comparing the floats.
 * Each component is compared against the epsilon value in this way:
 * |[
 *   if (fabsf (vector0->x - vector1->x) < epsilon)
 * ]|
 */
export function vector3_equal_with_epsilon(vector0: number, vector1: number, epsilon: number): Bool;
/**
 * Frees a 3 component vector that was previously allocated with
 * cogl_vector3_copy()
 */
export function vector3_free(vector: number): void;
/**
 * Initializes a 3 component, single precision float vector which can
 * then be manipulated with the cogl_vector convenience APIs. Vectors
 * can also be used in places where a "point" is often desired.
 */
export function vector3_init(vector: number, x: number, y: number, z: number): void;
/**
 * Initializes a 3 component, single precision float vector with zero
 * for each component.
 */
export function vector3_init_zero(vector: number): void;
/**
 * Inverts/negates all the components of the given @vector.
 */
export function vector3_invert(vector: number): void;
/**
 * Calculates the scalar magnitude or length of @vector.
 */
export function vector3_magnitude(vector: number): number;
/**
 * Multiplies each of the @vector components by the given scalar.
 */
export function vector3_multiply_scalar(vector: number, scalar: number): void;
/**
 * Updates the vector so it is a "unit vector" such that the
 * @vector<!-- -->s magnitude or length is equal to 1.
 * <note>It's safe to use this function with the [0, 0, 0] vector, it wil
 * l not
 * try to divide components by 0 (its norm) and will leave the vector
 * untouched.</note>
 */
export function vector3_normalize(vector: number): void;
/**
 * Subtracts each of the corresponding components in vector @b from
 * @a storing the results in @result.
 */
export function vector3_subtract(result: number, a: number, b: number): void;
/**
 * Informs Cogl of a compositor's Wayland display pointer. This
 * enables Cogl to register private wayland extensions required to
 * pass buffers between the clients and compositor.
 */
export function wayland_display_set_compositor_display(display: Display, wayland_display: object | null): void;
/**
 * 
 */
export function wayland_onscreen_get_shell_surface(onscreen: Onscreen): object | null;
/**
 * 
 */
export function wayland_onscreen_get_surface(onscreen: Onscreen): object | null;
/**
 * Resizes the backbuffer of the given @onscreen framebuffer to the
 * given size. Since a buffer is usually conceptually scaled with a
 * center point the @offset_x and @offset_y arguments allow the newly
 * allocated buffer to be positioned relative to the old buffer size.
 * For example a buffer that is being resized by moving the bottom right
 * corner, and the top left corner is remaining static would use x and y
 * offsets of (0, 0) since the top-left of the new buffer should have the
 *  same
 * position as the old buffer. If the center of the old buffer is being z
 * oomed
 * into then all the corners of the new buffer move out from the center a
 * nd the x
 * and y offsets would be (-half_x_size_increase, -half_y_size_increase) 
 * where
 * x/y_size_increase is how many pixels bigger the buffer is on the x and
 *  y
 * axis.
 * Note that if some drawing commands have been applied to the
 * framebuffer since the last swap buffers then the resize will be
 * queued and will only take effect in the next swap buffers.
 * If multiple calls to cogl_wayland_onscreen_resize() get queued
 * before the next swap buffers request then the relative x and y
 * offsets accumulate instead of being replaced. The @width and
 * @height values superseed the old values.
 */
export function wayland_onscreen_resize(onscreen: Onscreen, width: number, height: number, offset_x: number, offset_y: number): void;
/**
 * Allows you to explicitly notify Cogl of an existing Wayland surface to
 *  use,
 * which prevents Cogl from allocating a surface and shell surface for th
 * e
 * @onscreen. An allocated surface will not be destroyed when the @onscre
 * en is
 * freed.
 * This function must be called before @onscreen is allocated.
 */
export function wayland_onscreen_set_foreign_surface(onscreen: Onscreen, surface: object | null): void;
/**
 * Retrieves the Wayland display that Cogl is using. If a foreign
 * display has been specified using
 * cogl_wayland_renderer_set_foreign_display() then that display will
 * be returned. If no foreign display has been specified then the
 * display that Cogl creates internally will be returned unless the
 * renderer has not yet been connected (either implicitly or explicitly b
 * y
 * calling cogl_renderer_connect()) in which case %NULL is returned.
 */
export function wayland_renderer_get_display(renderer: Renderer): object | null;
/**
 * Sets whether Cogl should handle calling wl_display_dispatch() and
 * wl_display_flush() as part of its main loop integration via
 * cogl_poll_renderer_get_info() and cogl_poll_renderer_dispatch().
 * The default value is %TRUE. When it is enabled the application can
 * register listeners for Wayland interfaces and the callbacks will be
 * invoked during cogl_poll_renderer_dispatch(). If the application
 * wants to integrate with its own code that is already handling
 * reading from the Wayland display socket, it should disable this to
 * avoid having competing code read from the socket.
 */
export function wayland_renderer_set_event_dispatch_enabled(renderer: Renderer, enable: Bool): void;
/**
 * Allows you to explicitly control what Wayland display you want Cogl
 * to work with instead of leaving Cogl to automatically connect to a
 * wayland compositor.
 */
export function wayland_renderer_set_foreign_display(renderer: Renderer, display: object | null): void;
/**
 * Uploads the @buffer referenced by the given Wayland resource to a
 * #CoglTexture2D. The buffer resource may refer to a wl_buffer or a
 * wl_shm_buffer.
 * <note>The results are undefined for passing an invalid @buffer
 * pointer</note>
 * <note>It is undefined if future updates to @buffer outside the
 * control of Cogl will affect the allocated #CoglTexture2D. In some
 * cases the contents of the buffer are copied (such as shm buffers),
 * and in other cases the underlying storage is re-used directly (such
 * as drm buffers)</note>
 */
export function wayland_texture_2d_new_from_buffer(ctx: Context, buffer: object | null): Texture2D;
/**
 * Sets the pixels in a rectangular subregion of @texture from a
 * Wayland SHM buffer. Generally this would be used in response to
 * wl_surface.damage event in a compositor in order to update the
 * texture with the damaged region. This is just a convenience wrapper
 * around getting the SHM buffer pointer and calling
 * cogl_texture_set_region(). See that function for a description of
 * the level parameter.
 * <note>Since the storage for a #CoglTexture is allocated lazily then
 * if the given @texture has not previously been allocated then this
 * api can return %FALSE and throw an exceptional @error if there is
 * not enough memory to allocate storage for @texture.</note>
 */
export function wayland_texture_set_region_from_shm_buffer(texture: Texture, src_x: number, src_y: number, width: number, height: number, shm_buffer: object | null, dst_x: number, dst_y: number, level: number): Bool;
/**
 * 
 */
export function x11_onscreen_get_visual_xid(onscreen: Onscreen): number;
/**
 * Assuming you know the given @onscreen framebuffer is based on an x11 w
 * indow
 * this queries the XID of that window. If
 * cogl_x11_onscreen_set_foreign_window_xid() was previously called then 
 * it
 * will return that same XID otherwise it will be the XID of a window Cog
 * l
 * created internally. If the window has not been allocated yet and a for
 * eign
 * xid has not been set then it's undefined what value will be returned.
 * It's undefined what this function does if called when not using an x11
 *  based
 * renderer.
 */
export function x11_onscreen_get_window_xid(onscreen: Onscreen): number;
/**
 * Ideally we would recommend that you let Cogl be responsible for
 * creating any X window required to back an onscreen framebuffer but
 * if you really need to target a window created manually this
 * function can be called before @onscreen has been allocated to set a
 * foreign XID for your existing X window.
 * Since Cogl needs, for example, to track changes to the size of an X
 * window it requires that certain events be selected for via the core
 * X protocol. This requirement may also be changed asynchronously so
 * you must pass in an @update callback to inform you of Cogl's
 * required event mask.
 * For example if you are using Xlib you could use this API roughly
 * as follows:
 * [{
 * static void
 * my_update_cogl_x11_event_mask (CoglOnscreen *onscreen,
 *                                uint32_t event_mask,
 *                                void *user_data)
 * {
 *   XSetWindowAttributes attrs;
 *   MyData *data = user_data;
 *   attrs.event_mask = event_mask | data->my_event_mask;
 *   XChangeWindowAttributes (data->xdpy,
 *                            data->xwin,
 *                            CWEventMask,
 *                            &attrs);
 * }
 * {
 *   *snip*
 *   cogl_x11_onscreen_set_foreign_window_xid (onscreen,
 *                                             data->xwin,
 *                                             my_update_cogl_x11_event_m
 * ask,
 *                                             data);
 *   *snip*
 * }
 * }]
 */
export function x11_onscreen_set_foreign_window_xid(onscreen: Onscreen, xid: number, update: OnscreenX11MaskCallback, user_data: object | null): void;
/**
 * 
 */
export function xlib_get_display(): unknown;
/**
 * 
 */
export function xlib_handle_event(xevent: unknown): FilterReturn;
/**
 * 
 */
export function xlib_set_display(display: unknown): void;
export enum AttributeType {
    BYTE = 5120,
    UNSIGNED_BYTE = 5121,
    SHORT = 5122,
    UNSIGNED_SHORT = 5123,
    FLOAT = 5126,
}
export enum BitmapError {
    FAILED = 0,
    UNKNOWN_TYPE = 1,
    CORRUPT_IMAGE = 2,
}
export enum BlendStringError {
    PARSE_ERROR = 0,
    ARGUMENT_PARSE_ERROR = 1,
    INVALID_ERROR = 2,
    GPU_UNSUPPORTED_ERROR = 3,
}
export enum BufferError {
    BUFFER_ERROR_MAP = 0,
}
export enum BufferUpdateHint {
    STATIC = 0,
    DYNAMIC = 1,
    STREAM = 2,
}
export enum DepthTestFunction {
    NEVER = 512,
    LESS = 513,
    EQUAL = 514,
    LEQUAL = 515,
    GREATER = 516,
    NOTEQUAL = 517,
    GEQUAL = 518,
    ALWAYS = 519,
}
export enum Driver {
    ANY = 0,
    NOP = 1,
    GL = 2,
    GL3 = 3,
    GLES1 = 4,
    GLES2 = 5,
    WEBGL = 6,
}
export enum FeatureID {
    OGL_FEATURE_ID_TEXTURE_NPOT_BASIC = 1,
    OGL_FEATURE_ID_TEXTURE_NPOT_MIPMAP = 2,
    OGL_FEATURE_ID_TEXTURE_NPOT_REPEAT = 3,
    OGL_FEATURE_ID_TEXTURE_NPOT = 4,
    OGL_FEATURE_ID_TEXTURE_RECTANGLE = 5,
    OGL_FEATURE_ID_TEXTURE_3D = 6,
    OGL_FEATURE_ID_GLSL = 7,
    OGL_FEATURE_ID_ARBFP = 8,
    OGL_FEATURE_ID_OFFSCREEN = 9,
    OGL_FEATURE_ID_OFFSCREEN_MULTISAMPLE = 10,
    OGL_FEATURE_ID_ONSCREEN_MULTIPLE = 11,
    OGL_FEATURE_ID_UNSIGNED_INT_INDICES = 12,
    OGL_FEATURE_ID_DEPTH_RANGE = 13,
    OGL_FEATURE_ID_POINT_SPRITE = 14,
    OGL_FEATURE_ID_MAP_BUFFER_FOR_READ = 15,
    OGL_FEATURE_ID_MAP_BUFFER_FOR_WRITE = 16,
    OGL_FEATURE_ID_MIRRORED_REPEAT = 17,
    OGL_FEATURE_ID_SWAP_BUFFERS_EVENT = 18,
    OGL_FEATURE_ID_GLES2_CONTEXT = 19,
    OGL_FEATURE_ID_DEPTH_TEXTURE = 20,
    OGL_FEATURE_ID_PRESENTATION_TIME = 21,
    OGL_FEATURE_ID_FENCE = 22,
    OGL_FEATURE_ID_PER_VERTEX_POINT_SIZE = 23,
    OGL_FEATURE_ID_TEXTURE_RG = 24,
    OGL_FEATURE_ID_BUFFER_AGE = 25,
}
export enum FilterReturn {
    CONTINUE = 0,
    REMOVE = 1,
}
export enum FogMode {
    LINEAR = 0,
    EXPONENTIAL = 1,
    EXPONENTIAL_SQUARED = 2,
}
export enum FrameEvent {
    SYNC = 1,
    COMPLETE = 2,
}
export enum FramebufferError {
    FRAMEBUFFER_ERROR_ALLOCATE = 0,
}
export enum GLES2ContextError {
    UNSUPPORTED = 0,
    DRIVER = 1,
}
export enum IndicesType {
    BYTE = 0,
    SHORT = 1,
    INT = 2,
}
export enum MaterialAlphaFunc {
    NEVER = 512,
    LESS = 513,
    EQUAL = 514,
    LEQUAL = 515,
    GREATER = 516,
    NOTEQUAL = 517,
    GEQUAL = 518,
    ALWAYS = 519,
}
export enum MaterialFilter {
    NEAREST = 9728,
    LINEAR = 9729,
    NEAREST_MIPMAP_NEAREST = 9984,
    LINEAR_MIPMAP_NEAREST = 9985,
    NEAREST_MIPMAP_LINEAR = 9986,
    LINEAR_MIPMAP_LINEAR = 9987,
}
export enum MaterialLayerType {
    TEXTURE = 0,
}
export enum MaterialWrapMode {
    REPEAT = 10497,
    CLAMP_TO_EDGE = 33071,
    AUTOMATIC = 519,
}
export enum PipelineAlphaFunc {
    NEVER = 512,
    LESS = 513,
    EQUAL = 514,
    LEQUAL = 515,
    GREATER = 516,
    NOTEQUAL = 517,
    GEQUAL = 518,
    ALWAYS = 519,
}
export enum PipelineCullFaceMode {
    NONE = 0,
    FRONT = 1,
    BACK = 2,
    BOTH = 3,
}
export enum PipelineFilter {
    NEAREST = 9728,
    LINEAR = 9729,
    NEAREST_MIPMAP_NEAREST = 9984,
    LINEAR_MIPMAP_NEAREST = 9985,
    NEAREST_MIPMAP_LINEAR = 9986,
    LINEAR_MIPMAP_LINEAR = 9987,
}
export enum PipelineWrapMode {
    REPEAT = 10497,
    MIRRORED_REPEAT = 33648,
    CLAMP_TO_EDGE = 33071,
    AUTOMATIC = 519,
}
export enum PixelFormat {
    ANY = 0,
    A_8 = 17,
    RGB_565 = 4,
    RGBA_4444 = 21,
    RGBA_5551 = 22,
    YUV = 7,
    G_8 = 8,
    RG_88 = 9,
    RGB_888 = 2,
    BGR_888 = 34,
    RGBA_8888 = 19,
    BGRA_8888 = 51,
    ARGB_8888 = 83,
    ABGR_8888 = 115,
    RGBA_1010102 = 29,
    BGRA_1010102 = 61,
    ARGB_2101010 = 93,
    ABGR_2101010 = 125,
    RGBA_8888_PRE = 147,
    BGRA_8888_PRE = 179,
    ARGB_8888_PRE = 211,
    ABGR_8888_PRE = 243,
    RGBA_4444_PRE = 149,
    RGBA_5551_PRE = 150,
    RGBA_1010102_PRE = 157,
    BGRA_1010102_PRE = 189,
    ARGB_2101010_PRE = 221,
    ABGR_2101010_PRE = 253,
    DEPTH_16 = 265,
    DEPTH_32 = 259,
    DEPTH_24_STENCIL_8 = 771,
}
export enum PollFDEvent {
    IN = 1,
    PRI = 2,
    OUT = 4,
    ERR = 8,
    HUP = 16,
    NVAL = 32,
}
export enum RendererError {
    XLIB_DISPLAY_OPEN = 0,
    BAD_CONSTRAINT = 1,
}
export enum ShaderType {
    VERTEX = 0,
    FRAGMENT = 1,
}
export enum SnippetHook {
    VERTEX = 0,
    VERTEX_TRANSFORM = 1,
    VERTEX_GLOBALS = 2,
    POINT_SIZE = 3,
    FRAGMENT = 2048,
    FRAGMENT_GLOBALS = 2049,
    TEXTURE_COORD_TRANSFORM = 4096,
    LAYER_FRAGMENT = 6144,
    TEXTURE_LOOKUP = 6145,
}
export enum StereoMode {
    BOTH = 0,
    LEFT = 1,
    RIGHT = 2,
}
export enum SubpixelOrder {
    UNKNOWN = 0,
    NONE = 1,
    HORIZONTAL_RGB = 2,
    HORIZONTAL_BGR = 3,
    VERTICAL_RGB = 4,
    VERTICAL_BGR = 5,
}
export enum SystemError {
    COGL_SYSTEM_ERROR_UNSUPPORTED = 0,
    COGL_SYSTEM_ERROR_NO_MEMORY = 1,
}
export enum TextureComponents {
    A = 1,
    RG = 2,
    RGB = 3,
    RGBA = 4,
    DEPTH = 5,
}
export enum TextureError {
    SIZE = 0,
    FORMAT = 1,
    BAD_PARAMETER = 2,
    TYPE = 3,
}
export enum TexturePixmapX11Error {
    TEXTURE_PIXMAP_X11_ERROR_X11 = 0,
}
export enum TexturePixmapX11ReportLevel {
    RAW_RECTANGLES = 0,
    DELTA_RECTANGLES = 1,
    BOUNDING_BOX = 2,
    NON_EMPTY = 3,
}
export enum TextureType {
    Gjs_2D = 0,
    Gjs_3D = 1,
    RECTANGLE = 2,
}
export enum VerticesMode {
    POINTS = 0,
    LINES = 1,
    LINE_LOOP = 2,
    LINE_STRIP = 3,
    TRIANGLES = 4,
    TRIANGLE_STRIP = 5,
    TRIANGLE_FAN = 6,
}
export enum Winding {
    CLOCKWISE = 0,
    COUNTER_CLOCKWISE = 1,
}
export enum WinsysFeature {
    MULTIPLE_ONSCREEN = 0,
    SWAP_THROTTLE = 1,
    VBLANK_COUNTER = 2,
    VBLANK_WAIT = 3,
    TEXTURE_FROM_PIXMAP = 4,
    SWAP_BUFFERS_EVENT = 5,
    SWAP_REGION = 6,
    SWAP_REGION_THROTTLE = 7,
    SWAP_REGION_SYNCHRONIZED = 8,
    BUFFER_AGE = 9,
    SYNC_AND_COMPLETE_EVENT = 10,
    N_FEATURES = 11,
}
export enum WinsysID {
    ANY = 0,
    STUB = 1,
    GLX = 2,
    EGL_XLIB = 3,
    EGL_NULL = 4,
    EGL_GDL = 5,
    EGL_WAYLAND = 6,
    EGL_KMS = 7,
    EGL_ANDROID = 8,
    EGL_MIR = 9,
    WGL = 10,
    SDL = 11,
}
export type Angle = number;
export type Bool = number;
export type Buffer = void;
export type Handle = object;
export type MetaTexture = void;
export type PrimitiveTexture = void;
export type UserDataDestroyCallback = GLib.DestroyNotify;
export enum BufferAccess {
    READ = 1,
    WRITE = 2,
    READ_WRITE = 3,
}
export enum BufferBit {
    COLOR = 1,
    DEPTH = 2,
    STENCIL = 4,
}
export enum BufferMapHint {
     = 1,
    _RANGE = 2,
}
export enum BufferTarget {
    WINDOW_BUFFER = 2,
    OFFSCREEN_BUFFER = 4,
}
export enum ColorMask {
    NONE = 0,
    RED = 1,
    GREEN = 2,
    BLUE = 4,
    ALPHA = 8,
    ALL = 15,
}
export enum FeatureFlags {
    TEXTURE_RECTANGLE = 2,
    TEXTURE_NPOT = 4,
    TEXTURE_YUV = 8,
    TEXTURE_READ_PIXELS = 16,
    SHADERS_GLSL = 32,
    OFFSCREEN = 64,
    OFFSCREEN_MULTISAMPLE = 128,
    OFFSCREEN_BLIT = 256,
    FOUR_CLIP_PLANES = 512,
    STENCIL_BUFFER = 1024,
    VBOS = 2048,
    PBOS = 4096,
    UNSIGNED_INT_INDICES = 8192,
    DEPTH_RANGE = 16384,
    TEXTURE_NPOT_BASIC = 32768,
    TEXTURE_NPOT_MIPMAP = 65536,
    TEXTURE_NPOT_REPEAT = 131072,
    POINT_SPRITE = 262144,
    TEXTURE_3D = 524288,
    SHADERS_ARBFP = 1048576,
    MAP_BUFFER_FOR_READ = 2097152,
    MAP_BUFFER_FOR_WRITE = 4194304,
    ONSCREEN_MULTIPLE = 8388608,
    DEPTH_TEXTURE = 16777216,
}
export enum ReadPixelsFlags {
    COLOR_BUFFER = 1,
}
export enum RendererConstraint {
    USES_X11 = 1,
    USES_XLIB = 2,
    USES_EGL = 4,
    SUPPORTS_COGL_GLES2 = 8,
}
export enum TextureFlags {
    NONE = 0,
    NO_AUTO_MIPMAP = 1,
    NO_SLICING = 2,
    NO_ATLAS = 4,
}
export class AtlasTexture extends Object {constructor(config?: properties);
static new_from_bitmap(bmp: Bitmap): AtlasTexture;
static new_from_data(ctx: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): AtlasTexture;
static new_from_file(ctx: Context, filename: string): AtlasTexture;
static new_with_size(ctx: Context, width: number, height: number): AtlasTexture;
}
export class Attribute extends Object {constructor(config?: properties);
static new_const_1f(context: Context, name: string, value: number): Attribute;
static new_const_2f(context: Context, name: string, component0: number, component1: number): Attribute;
static new_const_2fv(context: Context, name: string, value: number): Attribute;
static new_const_2x2fv(context: Context, name: string, matrix2x2: number, transpose: Bool): Attribute;
static new_const_3f(context: Context, name: string, component0: number, component1: number, component2: number): Attribute;
static new_const_3fv(context: Context, name: string, value: number): Attribute;
static new_const_3x3fv(context: Context, name: string, matrix3x3: number, transpose: Bool): Attribute;
static new_const_4f(context: Context, name: string, component0: number, component1: number, component2: number, component3: number): Attribute;
static new_const_4fv(context: Context, name: string, value: number): Attribute;
static new_const_4x4fv(context: Context, name: string, matrix4x4: number, transpose: Bool): Attribute;
get_buffer(): AttributeBuffer;
get_normalized(): Bool;
set_buffer(attribute_buffer: AttributeBuffer): void;
set_normalized(normalized: Bool): void;
}
export class AttributeBuffer extends Object {constructor(config?: properties);
static new_with_size(context: Context, bytes: number): AttributeBuffer;
}
export class Bitmap extends Object {constructor(config?: properties);
static new_for_data(context: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bitmap;
static new_from_buffer(buffer: Buffer, format: PixelFormat, width: number, height: number, rowstride: number, offset: number): Bitmap;
static new_from_file(filename: string): Bitmap;
static new_with_size(context: Context, width: number, height: number, format: PixelFormat): Bitmap;
get_buffer(): PixelBuffer;
get_format(): PixelFormat;
get_height(): number;
get_rowstride(): number;
get_width(): number;
static get_size_from_file(filename: string): [Bool, number,number];
}
export class Context extends Object {constructor(config?: properties);
get_display(): Display;
get_renderer(): Renderer;
}
export class Display extends Object {constructor(config?: properties);
get_renderer(): Renderer;
set_onscreen_template(onscreen_template: OnscreenTemplate): void;
setup(): Bool;
}
export class Fixed  {constructor(config?: properties);
}
export class FrameInfo  {constructor(config?: properties);
get_frame_counter(): number;
get_output(): Output;
get_presentation_time(): number;
get_refresh_rate(): number;
}
export class GLES2Context extends Object {constructor(config?: properties);
get_vtable(): GLES2Vtable;
}
export class IndexBuffer extends Object {constructor(config?: properties);
}
export class Indices extends Object {constructor(config?: properties);
static new_for_buffer(type: IndicesType, buffer: IndexBuffer, offset: number): Indices;
get_buffer(): IndexBuffer;
get_offset(): number;
get_type(): IndicesType;
set_offset(offset: number): void;
}
export class MatrixStack extends Object {constructor(config?: properties);
frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
get(): [Matrix, Matrix];
get_entry(): MatrixEntry;
get_inverse(): [Bool, Matrix];
load_identity(): void;
multiply(matrix: Matrix): void;
orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
pop(): void;
push(): void;
rotate(angle: number, x: number, y: number, z: number): void;
rotate_euler(euler: Euler): void;
rotate_quaternion(quaternion: Quaternion): void;
scale(x: number, y: number, z: number): void;
set(matrix: Matrix): void;
translate(x: number, y: number, z: number): void;
}
export class Object  {constructor(config?: properties);
get_user_data(key: UserDataKey): object | null;
set_user_data(key: UserDataKey, user_data: object | null, destroy: UserDataDestroyCallback): void;
static ref(object: object | null): object | null;
static unref(object: object | null): void;
static value_get_object(value: GObject.Value): object | null;
static value_set_object(value: GObject.Value, object: object | null): void;
}
export class Onscreen extends Object {constructor(config?: properties);
add_dirty_callback(callback: OnscreenDirtyCallback, user_data: object | null, destroy: UserDataDestroyCallback | null): OnscreenDirtyClosure;
add_frame_callback(callback: FrameCallback, user_data: object | null, destroy: UserDataDestroyCallback | null): FrameClosure;
add_resize_callback(callback: OnscreenResizeCallback, user_data: object | null, destroy: UserDataDestroyCallback | null): OnscreenResizeClosure;
add_swap_buffers_callback(callback: SwapBuffersNotify, user_data: object | null): number;
get_buffer_age(): number;
get_frame_counter(): number;
get_resizable(): Bool;
hide(): void;
remove_dirty_callback(closure: OnscreenDirtyClosure): void;
remove_frame_callback(closure: FrameClosure): void;
remove_resize_callback(closure: OnscreenResizeClosure): void;
remove_swap_buffers_callback(id: number): void;
set_resizable(resizable: Bool): void;
set_swap_throttled(throttled: Bool): void;
show(): void;
swap_buffers(): void;
swap_buffers_with_damage(rectangles: number, n_rectangles: number): void;
swap_region(rectangles: number, n_rectangles: number): void;
}
export class OnscreenTemplate extends Object {constructor(config?: properties);
set_samples_per_pixel(n: number): void;
set_stereo_enabled(enabled: Bool): void;
set_swap_throttled(throttled: Bool): void;
}
export class Output  {constructor(config?: properties);
get_height(): number;
get_mm_height(): number;
get_mm_width(): number;
get_refresh_rate(): number;
get_subpixel_order(): SubpixelOrder;
get_width(): number;
get_x(): number;
get_y(): number;
}
export class Pipeline extends Object {constructor(config?: properties);
add_layer_snippet(layer: number, snippet: Snippet): void;
add_snippet(snippet: Snippet): void;
copy(): Pipeline;
foreach_layer(callback: PipelineLayerCallback, user_data: object | null): void;
get_alpha_test_function(): PipelineAlphaFunc;
get_alpha_test_reference(): number;
get_ambient(ambient: Color): void;
get_color(): [Color];
get_color_mask(): ColorMask;
get_cull_face_mode(): PipelineCullFaceMode;
get_depth_state(): [DepthState];
get_diffuse(diffuse: Color): void;
get_emission(emission: Color): void;
get_front_face_winding(): Winding;
get_layer_mag_filter(layer_index: number): PipelineFilter;
get_layer_min_filter(layer_index: number): PipelineFilter;
get_layer_point_sprite_coords_enabled(layer_index: number): Bool;
get_layer_texture(layer_index: number): Texture;
get_layer_wrap_mode_p(layer_index: number): PipelineWrapMode;
get_layer_wrap_mode_s(layer_index: number): PipelineWrapMode;
get_layer_wrap_mode_t(layer_index: number): PipelineWrapMode;
get_n_layers(): number;
get_per_vertex_point_size(): Bool;
get_point_size(): number;
get_shininess(): number;
get_specular(specular: Color): void;
get_uniform_location(uniform_name: string): number;
get_user_program(): Handle;
remove_layer(layer_index: number): void;
set_alpha_test_function(alpha_func: PipelineAlphaFunc, alpha_reference: number): void;
set_ambient(ambient: Color): void;
set_ambient_and_diffuse(color: Color): void;
set_blend(blend_string: string): Bool;
set_blend_constant(constant_color: Color): void;
set_color(color: Color): void;
set_color4f(red: number, green: number, blue: number, alpha: number): void;
set_color4ub(red: number, green: number, blue: number, alpha: number): void;
set_color_mask(color_mask: ColorMask): void;
set_cull_face_mode(cull_face_mode: PipelineCullFaceMode): void;
set_depth_state(state: DepthState): Bool;
set_diffuse(diffuse: Color): void;
set_emission(emission: Color): void;
set_front_face_winding(front_winding: Winding): void;
set_layer_combine(layer_index: number, blend_string: string): Bool;
set_layer_combine_constant(layer_index: number, constant: Color): void;
set_layer_filters(layer_index: number, min_filter: PipelineFilter, mag_filter: PipelineFilter): void;
set_layer_matrix(layer_index: number, matrix: Matrix): void;
set_layer_null_texture(layer_index: number, texture_type: TextureType): void;
set_layer_point_sprite_coords_enabled(layer_index: number, enable: Bool): Bool;
set_layer_texture(layer_index: number, texture: Texture): void;
set_layer_wrap_mode(layer_index: number, mode: PipelineWrapMode): void;
set_layer_wrap_mode_p(layer_index: number, mode: PipelineWrapMode): void;
set_layer_wrap_mode_s(layer_index: number, mode: PipelineWrapMode): void;
set_layer_wrap_mode_t(layer_index: number, mode: PipelineWrapMode): void;
set_per_vertex_point_size(enable: Bool): Bool;
set_point_size(point_size: number): void;
set_shininess(shininess: number): void;
set_specular(specular: Color): void;
set_uniform_1f(uniform_location: number, value: number): void;
set_uniform_1i(uniform_location: number, value: number): void;
set_uniform_float(uniform_location: number, n_components: number, count: number, value: number): void;
set_uniform_int(uniform_location: number, n_components: number, count: number, value: number): void;
set_uniform_matrix(uniform_location: number, dimensions: number, count: number, transpose: Bool, value: number): void;
set_user_program(program: Handle): void;
}
export class PixelBuffer extends Object {constructor(config?: properties);
}
export class Primitive extends Object {constructor(config?: properties);
static new_p2(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP2[]): Primitive;
static new_p2c4(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP2C4[]): Primitive;
static new_p2t2(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP2T2[]): Primitive;
static new_p2t2c4(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP2T2C4[]): Primitive;
static new_p3(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP3[]): Primitive;
static new_p3c4(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP3C4[]): Primitive;
static new_p3t2(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP3T2[]): Primitive;
static new_p3t2c4(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP3T2C4[]): Primitive;
static new_with_attributes(mode: VerticesMode, n_vertices: number, attributes: Attribute, n_attributes: number): Primitive;
copy(): Primitive;
draw(framebuffer: Framebuffer, pipeline: Pipeline): void;
foreach_attribute(callback: PrimitiveAttributeCallback, user_data: object | null): void;
get_first_vertex(): number;
get_indices(): Indices;
get_mode(): VerticesMode;
get_n_vertices(): number;
set_attributes(attributes: Attribute, n_attributes: number): void;
set_first_vertex(first_vertex: number): void;
set_indices(indices: Indices, n_indices: number): void;
set_mode(mode: VerticesMode): void;
set_n_vertices(n_vertices: number): void;
static texture_set_auto_mipmap(primitive_texture: PrimitiveTexture, value: Bool): void;
}
export class Renderer extends Object {constructor(config?: properties);
add_constraint(constraint: RendererConstraint): void;
check_onscreen_template(onscreen_template: OnscreenTemplate): Bool;
connect(): Bool;
foreach_output(callback: OutputCallback, user_data: object | null): void;
get_driver(): Driver;
get_n_fragment_texture_units(): number;
get_winsys_id(): WinsysID;
remove_constraint(constraint: RendererConstraint): void;
set_driver(driver: Driver): void;
set_winsys_id(winsys_id: WinsysID): void;
}
export class Snippet extends Object {constructor(config?: properties);
get_declarations(): string;
get_hook(): SnippetHook;
get_post(): string;
get_pre(): string;
get_replace(): string;
set_declarations(declarations: string): void;
set_post(post: string): void;
set_pre(pre: string): void;
set_replace(replace: string): void;
}
export class SubTexture extends Object {constructor(config?: properties);
get_parent(): Texture;
}
export class SwapChain extends Object {constructor(config?: properties);
set_has_alpha(has_alpha: Bool): void;
set_length(length: number): void;
}
export class Texture2D extends Object {constructor(config?: properties);
static gl_new_from_foreign(ctx: Context, gl_handle: number, width: number, height: number, format: PixelFormat): Texture2D;
static new_from_bitmap(bitmap: Bitmap): Texture2D;
static new_from_data(ctx: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Texture2D;
static new_from_file(ctx: Context, filename: string): Texture2D;
static new_with_size(ctx: Context, width: number, height: number): Texture2D;
}
export class Texture2DSliced extends Object {constructor(config?: properties);
static new_from_bitmap(bmp: Bitmap, max_waste: number): Texture2DSliced;
static new_from_data(ctx: Context, width: number, height: number, max_waste: number, format: PixelFormat, rowstride: number, data: number): Texture2DSliced;
static new_from_file(ctx: Context, filename: string, max_waste: number): Texture2DSliced;
static new_with_size(ctx: Context, width: number, height: number, max_waste: number): Texture2DSliced;
}
export class Texture3D extends Object {constructor(config?: properties);
static new_from_bitmap(bitmap: Bitmap, height: number, depth: number): Texture3D;
static new_from_data(context: Context, width: number, height: number, depth: number, format: PixelFormat, rowstride: number, image_stride: number, data: number): Texture3D;
static new_with_size(context: Context, width: number, height: number, depth: number): Texture3D;
}
export class TexturePixmapX11 extends Object {constructor(config?: properties);
static new_left(context: Context, pixmap: number, automatic_updates: Bool): TexturePixmapX11;
is_using_tfp_extension(): Bool;
new_right(): TexturePixmapX11;
set_damage_object(damage: number, report_level: TexturePixmapX11ReportLevel): void;
update_area(x: number, y: number, width: number, height: number): void;
static error_quark(): number;
}
export class TextureRectangle extends Object {constructor(config?: properties);
static new_from_bitmap(bitmap: Bitmap): TextureRectangle;
static new_from_foreign(ctx: Context, gl_handle: number, width: number, height: number, format: PixelFormat): TextureRectangle;
static new_with_size(ctx: Context, width: number, height: number): TextureRectangle;
}
export class Color  {constructor(config?: properties);
copy(): Color;
free(): void;
get_alpha(): number;
get_alpha_byte(): number;
get_alpha_float(): number;
get_blue(): number;
get_blue_byte(): number;
get_blue_float(): number;
get_green(): number;
get_green_byte(): number;
get_green_float(): number;
get_red(): number;
get_red_byte(): number;
get_red_float(): number;
init_from_4f(red: number, green: number, blue: number, alpha: number): void;
init_from_4fv(color_array: number): void;
init_from_4ub(red: number, green: number, blue: number, alpha: number): void;
premultiply(): void;
set_alpha(alpha: number): void;
set_alpha_byte(alpha: number): void;
set_alpha_float(alpha: number): void;
set_blue(blue: number): void;
set_blue_byte(blue: number): void;
set_blue_float(blue: number): void;
set_from_4f(red: number, green: number, blue: number, alpha: number): void;
set_from_4ub(red: number, green: number, blue: number, alpha: number): void;
set_green(green: number): void;
set_green_byte(green: number): void;
set_green_float(green: number): void;
set_red(red: number): void;
set_red_byte(red: number): void;
set_red_float(red: number): void;
to_hsl(): [number,number,number];
unpremultiply(): void;
static equal(v1: object | null, v2: object | null): Bool;
static init_from_hsl(hue: number, saturation: number, luminance: number): [Color];
}
export class DebugObjectTypeInfo  {constructor(config?: properties);
name: string;
instance_count: number;
}
export class DepthState  {constructor(config?: properties);
readonly private_member_magic: number;
readonly private_member_test_enabled: Bool;
readonly private_member_test_function: DepthTestFunction;
readonly private_member_write_enabled: Bool;
readonly private_member_range_near: number;
readonly private_member_range_far: number;
readonly private_member_padding0: number;
readonly private_member_padding1: number;
readonly private_member_padding2: number;
readonly private_member_padding3: number;
readonly private_member_padding4: number;
readonly private_member_padding5: number;
readonly private_member_padding6: number;
readonly private_member_padding7: number;
readonly private_member_padding8: number;
readonly private_member_padding9: number;
get_range(near_val: number, far_val: number): void;
get_test_enabled(): Bool;
get_test_function(): DepthTestFunction;
get_write_enabled(): Bool;
init(): void;
set_range(near_val: number, far_val: number): void;
set_test_enabled(enable: Bool): void;
set_test_function(_function: DepthTestFunction): void;
set_write_enabled(enable: Bool): void;
}
export class Euler  {constructor(config?: properties);
heading: number;
pitch: number;
roll: number;
readonly padding0: number;
readonly padding1: number;
readonly padding2: number;
readonly padding3: number;
readonly padding4: number;
copy(): Euler;
free(): void;
init(heading: number, pitch: number, roll: number): void;
init_from_matrix(matrix: Matrix): void;
init_from_quaternion(quaternion: Quaternion): void;
static equal(v1: object | null, v2: object | null): Bool;
}
export class Fence  {constructor(config?: properties);
}
export class FenceClosure  {constructor(config?: properties);
get_user_data(): object | null;
}
export class FrameClosure  {constructor(config?: properties);
}
export class GLES2Vtable  {constructor(config?: properties);
readonly glBindTexture: unknown;
readonly glBlendFunc: unknown;
readonly glClear: unknown;
readonly glClearColor: unknown;
readonly glClearStencil: unknown;
readonly glColorMask: unknown;
readonly glCopyTexSubImage2D: unknown;
readonly glDeleteTextures: unknown;
readonly glDepthFunc: unknown;
readonly glDepthMask: unknown;
readonly glDisable: unknown;
readonly glDrawArrays: unknown;
readonly glDrawElements: unknown;
readonly glEnable: unknown;
readonly glFinish: unknown;
readonly glFlush: unknown;
readonly glFrontFace: unknown;
readonly glCullFace: unknown;
readonly glGenTextures: unknown;
readonly glGetError: unknown;
readonly glGetIntegerv: unknown;
readonly glGetBooleanv: unknown;
readonly glGetFloatv: unknown;
readonly glGetString: unknown;
readonly glHint: unknown;
readonly glIsTexture: unknown;
readonly glPixelStorei: unknown;
readonly glReadPixels: unknown;
readonly glScissor: unknown;
readonly glStencilFunc: unknown;
readonly glStencilMask: unknown;
readonly glStencilOp: unknown;
readonly glTexImage2D: unknown;
readonly glTexParameterf: unknown;
readonly glTexParameterfv: unknown;
readonly glTexParameteri: unknown;
readonly glTexParameteriv: unknown;
readonly glGetTexParameterfv: unknown;
readonly glGetTexParameteriv: unknown;
readonly glTexSubImage2D: unknown;
readonly glCopyTexImage2D: unknown;
readonly glViewport: unknown;
readonly glIsEnabled: unknown;
readonly glLineWidth: unknown;
readonly glPolygonOffset: unknown;
readonly glDepthRangef: unknown;
readonly glClearDepthf: unknown;
readonly glCompressedTexImage2D: unknown;
readonly glCompressedTexSubImage2D: unknown;
readonly glSampleCoverage: unknown;
readonly glGetBufferParameteriv: unknown;
readonly glGenBuffers: unknown;
readonly glBindBuffer: unknown;
readonly glBufferData: unknown;
readonly glBufferSubData: unknown;
readonly glDeleteBuffers: unknown;
readonly glIsBuffer: unknown;
readonly glActiveTexture: unknown;
readonly glGenRenderbuffers: unknown;
readonly glDeleteRenderbuffers: unknown;
readonly glBindRenderbuffer: unknown;
readonly glRenderbufferStorage: unknown;
readonly glGenFramebuffers: unknown;
readonly glBindFramebuffer: unknown;
readonly glFramebufferTexture2D: unknown;
readonly glFramebufferRenderbuffer: unknown;
readonly glIsRenderbuffer: unknown;
readonly glCheckFramebufferStatus: unknown;
readonly glDeleteFramebuffers: unknown;
readonly glGenerateMipmap: unknown;
readonly glGetFramebufferAttachmentParameteriv: unknown;
readonly glGetRenderbufferParameteriv: unknown;
readonly glIsFramebuffer: unknown;
readonly glBlendEquation: unknown;
readonly glBlendColor: unknown;
readonly glBlendFuncSeparate: unknown;
readonly glBlendEquationSeparate: unknown;
readonly glReleaseShaderCompiler: unknown;
readonly glGetShaderPrecisionFormat: unknown;
readonly glShaderBinary: unknown;
readonly glStencilFuncSeparate: unknown;
readonly glStencilMaskSeparate: unknown;
readonly glStencilOpSeparate: unknown;
readonly glCreateProgram: unknown;
readonly glCreateShader: unknown;
readonly glDeleteShader: unknown;
readonly glAttachShader: unknown;
readonly glUseProgram: unknown;
readonly glDeleteProgram: unknown;
readonly glGetShaderInfoLog: unknown;
readonly glGetProgramInfoLog: unknown;
readonly glGetShaderiv: unknown;
readonly glGetProgramiv: unknown;
readonly glDetachShader: unknown;
readonly glGetAttachedShaders: unknown;
readonly glIsShader: unknown;
readonly glIsProgram: unknown;
readonly glShaderSource: unknown;
readonly glCompileShader: unknown;
readonly glLinkProgram: unknown;
readonly glGetUniformLocation: unknown;
readonly glUniform1f: unknown;
readonly glUniform2f: unknown;
readonly glUniform3f: unknown;
readonly glUniform4f: unknown;
readonly glUniform1fv: unknown;
readonly glUniform2fv: unknown;
readonly glUniform3fv: unknown;
readonly glUniform4fv: unknown;
readonly glUniform1i: unknown;
readonly glUniform2i: unknown;
readonly glUniform3i: unknown;
readonly glUniform4i: unknown;
readonly glUniform1iv: unknown;
readonly glUniform2iv: unknown;
readonly glUniform3iv: unknown;
readonly glUniform4iv: unknown;
readonly glUniformMatrix2fv: unknown;
readonly glUniformMatrix3fv: unknown;
readonly glUniformMatrix4fv: unknown;
readonly glGetUniformfv: unknown;
readonly glGetUniformiv: unknown;
readonly glGetActiveUniform: unknown;
readonly glGetShaderSource: unknown;
readonly glValidateProgram: unknown;
readonly glVertexAttribPointer: unknown;
readonly glEnableVertexAttribArray: unknown;
readonly glDisableVertexAttribArray: unknown;
readonly glVertexAttrib1f: unknown;
readonly glVertexAttrib1fv: unknown;
readonly glVertexAttrib2f: unknown;
readonly glVertexAttrib2fv: unknown;
readonly glVertexAttrib3f: unknown;
readonly glVertexAttrib3fv: unknown;
readonly glVertexAttrib4f: unknown;
readonly glVertexAttrib4fv: unknown;
readonly glGetVertexAttribfv: unknown;
readonly glGetVertexAttribiv: unknown;
readonly glGetVertexAttribPointerv: unknown;
readonly glGetAttribLocation: unknown;
readonly glBindAttribLocation: unknown;
readonly glGetActiveAttrib: unknown;
}
export class GtypeClass  {constructor(config?: properties);
base_class: GObject.TypeClass;
dummy: number;
}
export class GtypeObject  {constructor(config?: properties);
dummy: number;
}
export class KmsCrtc  {constructor(config?: properties);
id: number;
x: number;
y: number;
mode: unknown;
connectors: number;
count: number;
ignore: Bool;
}
export class Matrix  {constructor(config?: properties);
xx: number;
yx: number;
zx: number;
wx: number;
xy: number;
yy: number;
zy: number;
wy: number;
xz: number;
yz: number;
zz: number;
wz: number;
xw: number;
yw: number;
zw: number;
ww: number;
readonly private_member_inv: number[];
readonly private_member_type: number;
readonly private_member_flags: number;
readonly private_member__padding3: number;
copy(): Matrix;
free(): void;
frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
get_array(): number;
get_inverse(): [Bool, Matrix];
init_from_array(array: number): void;
init_from_euler(euler: Euler): void;
init_from_quaternion(quaternion: Quaternion): void;
init_identity(): void;
init_translation(tx: number, ty: number, tz: number): void;
is_identity(): Bool;
look_at(eye_position_x: number, eye_position_y: number, eye_position_z: number, object_x: number, object_y: number, object_z: number, world_up_x: number, world_up_y: number, world_up_z: number): void;
multiply(a: Matrix, b: Matrix): void;
ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void;
orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
project_points(n_components: number, stride_in: number, points_in: object | null, stride_out: number, points_out: object | null, n_points: number): void;
rotate(angle: number, x: number, y: number, z: number): void;
rotate_euler(euler: Euler): void;
rotate_quaternion(quaternion: Quaternion): void;
scale(sx: number, sy: number, sz: number): void;
transform_point(x: number, y: number, z: number, w: number): [number,number,number,number];
transform_points(n_components: number, stride_in: number, points_in: object | null, stride_out: number, points_out: object | null, n_points: number): void;
translate(x: number, y: number, z: number): void;
transpose(): void;
view_2d_in_frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_2d: number, width_2d: number, height_2d: number): void;
view_2d_in_perspective(fov_y: number, aspect: number, z_near: number, z_2d: number, width_2d: number, height_2d: number): void;
static equal(v1: object | null, v2: object | null): Bool;
}
export class MatrixEntry  {constructor(config?: properties);
calculate_translation(entry1: MatrixEntry): [Bool, number,number,number];
equal(entry1: MatrixEntry): Bool;
get(): [Matrix, Matrix];
is_identity(): Bool;
ref(): MatrixEntry;
unref(): void;
}
export class OnscreenDirtyClosure  {constructor(config?: properties);
}
export class OnscreenDirtyInfo  {constructor(config?: properties);
x: number;
y: number;
width: number;
height: number;
}
export class OnscreenResizeClosure  {constructor(config?: properties);
}
export class PollFD  {constructor(config?: properties);
fd: number;
events: unknown;
revents: unknown;
}
export class Quaternion  {constructor(config?: properties);
w: number;
x: number;
y: number;
z: number;
readonly padding0: number;
readonly padding1: number;
readonly padding2: number;
readonly padding3: number;
copy(): Quaternion;
dot_product(b: Quaternion): number;
free(): void;
get_rotation_angle(): number;
get_rotation_axis(): [number];
init(angle: number, x: number, y: number, z: number): void;
init_from_angle_vector(angle: number, axis3f: number): void;
init_from_array(array: number): void;
init_from_euler(euler: Euler): void;
init_from_matrix(matrix: Matrix): void;
init_from_quaternion(src: Quaternion): void;
init_from_x_rotation(angle: number): void;
init_from_y_rotation(angle: number): void;
init_from_z_rotation(angle: number): void;
init_identity(): void;
invert(): void;
multiply(left: Quaternion, right: Quaternion): void;
nlerp(a: Quaternion, b: Quaternion, t: number): void;
normalize(): void;
pow(exponent: number): void;
slerp(a: Quaternion, b: Quaternion, t: number): void;
squad(prev: Quaternion, a: Quaternion, b: Quaternion, next: Quaternion, t: number): void;
static equal(v1: object | null, v2: object | null): Bool;
}
export class TextureVertex  {constructor(config?: properties);
x: number;
y: number;
z: number;
tx: number;
ty: number;
color: Color;
}
export class UserDataKey  {constructor(config?: properties);
unused: number;
}
export class VertexP2  {constructor(config?: properties);
x: number;
y: number;
}
export class VertexP2C4  {constructor(config?: properties);
x: number;
y: number;
r: number;
g: number;
b: number;
a: number;
}
export class VertexP2T2  {constructor(config?: properties);
x: number;
y: number;
s: number;
t: number;
}
export class VertexP2T2C4  {constructor(config?: properties);
x: number;
y: number;
s: number;
t: number;
r: number;
g: number;
b: number;
a: number;
}
export class VertexP3  {constructor(config?: properties);
x: number;
y: number;
z: number;
}
export class VertexP3C4  {constructor(config?: properties);
x: number;
y: number;
z: number;
r: number;
g: number;
b: number;
a: number;
}
export class VertexP3T2  {constructor(config?: properties);
x: number;
y: number;
z: number;
s: number;
t: number;
}
export class VertexP3T2C4  {constructor(config?: properties);
x: number;
y: number;
z: number;
s: number;
t: number;
r: number;
g: number;
b: number;
a: number;
}
export class _ColorSizeCheck  {constructor(config?: properties);
compile_time_assert_CoglColor_size: number[];
}
export class _EulerSizeCheck  {constructor(config?: properties);
compile_time_assert_CoglEuler_size: number[];
}
export class _MatrixSizeCheck  {constructor(config?: properties);
compile_time_assert_CoglMatrix_size: number[];
}
export class _QuaternionSizeCheck  {constructor(config?: properties);
compile_time_assert_CoglQuaternion_size: number[];
}
export class _TextureVertexSizeCheck  {constructor(config?: properties);
compile_time_assert_CoglTextureVertex_size: number[];
}
export interface Framebuffer  {
add_fence_callback(callback: FenceCallback, user_data: object | null): FenceClosure;
allocate(): Bool;
cancel_fence_callback(closure: FenceClosure): void;
clear(buffers: number, color: Color): void;
clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void;
discard_buffers(buffers: number): void;
draw_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, attributes: Attribute, n_attributes: number): void;
draw_indexed_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, indices: Indices, attributes: Attribute, n_attributes: number): void;
draw_multitextured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, tex_coords: number[], tex_coords_len: number): void;
draw_primitive(pipeline: Pipeline, primitive: Primitive): void;
draw_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number): void;
draw_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
draw_textured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, s_1: number, t_1: number, s_2: number, t_2: number): void;
draw_textured_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
finish(): void;
frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
get_alpha_bits(): number;
get_blue_bits(): number;
get_color_mask(): ColorMask;
get_context(): Context;
get_depth_bits(): number;
get_depth_texture(): Texture;
get_depth_texture_enabled(): Bool;
get_depth_write_enabled(): Bool;
get_dither_enabled(): Bool;
get_green_bits(): number;
get_height(): number;
get_is_stereo(): Bool;
get_modelview_matrix(): [Matrix];
get_projection_matrix(): [Matrix];
get_red_bits(): number;
get_samples_per_pixel(): number;
get_stereo_mode(): StereoMode;
get_viewport4fv(): [number[]];
get_viewport_height(): number;
get_viewport_width(): number;
get_viewport_x(): number;
get_viewport_y(): number;
get_width(): number;
identity_matrix(): void;
orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
pop_clip(): void;
pop_matrix(): void;
push_matrix(): void;
push_primitive_clip(primitive: Primitive, bounds_x1: number, bounds_y1: number, bounds_x2: number, bounds_y2: number): void;
push_rectangle_clip(x_1: number, y_1: number, x_2: number, y_2: number): void;
push_scissor_clip(x: number, y: number, width: number, height: number): void;
read_pixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): Bool;
read_pixels_into_bitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): Bool;
resolve_samples(): void;
resolve_samples_region(x: number, y: number, width: number, height: number): void;
rotate(angle: number, x: number, y: number, z: number): void;
rotate_euler(euler: Euler): void;
rotate_quaternion(quaternion: Quaternion): void;
scale(x: number, y: number, z: number): void;
set_color_mask(color_mask: ColorMask): void;
set_depth_texture_enabled(enabled: Bool): void;
set_depth_write_enabled(depth_write_enabled: Bool): void;
set_dither_enabled(dither_enabled: Bool): void;
set_modelview_matrix(matrix: Matrix): void;
set_projection_matrix(matrix: Matrix): void;
set_samples_per_pixel(samples_per_pixel: number): void;
set_stereo_mode(stereo_mode: StereoMode): void;
set_viewport(x: number, y: number, width: number, height: number): void;
transform(matrix: Matrix): void;
translate(x: number, y: number, z: number): void;
vdraw_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, ___: unknown[]): void;
vdraw_indexed_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, indices: Indices, ___: unknown[]): void;
}
export interface Texture  {
allocate(): Bool;
get_components(): TextureComponents;
get_data(format: PixelFormat, rowstride: number, data: number): number;
get_gl_texture(): [Bool, number | null,number | null];
get_height(): number;
get_max_waste(): number;
get_premultiplied(): Bool;
get_width(): number;
is_sliced(): Bool;
set_components(components: TextureComponents): void;
set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool;
set_premultiplied(premultiplied: Bool): void;
set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool;
set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool;
}