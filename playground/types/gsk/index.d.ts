
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gdk from "gdk";
import * as Graphene from "graphene";
import * as Gsk from "gsk";
import * as cairo from "cairo";
import * as Pango from "pango";
/**
 * gsk.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
export type ParseErrorFunc = (section: unknown, error: GLib.Error, user_data: object | null) => void;
/**
 * 
 */
export function blend_node_get_blend_mode(node: RenderNode): BlendMode;
/**
 * 
 */
export function blend_node_get_bottom_child(node: RenderNode): RenderNode;
/**
 * 
 */
export function blend_node_get_top_child(node: RenderNode): RenderNode;
/**
 * Creates a #GskRenderNode that will use @blend_mode to blend the @top
 * node onto the @bottom node.
 */
export function blend_node_new(bottom: RenderNode, top: RenderNode, blend_mode: BlendMode): RenderNode;
/**
 * 
 */
export function blur_node_get_child(node: RenderNode): RenderNode;
/**
 * 
 */
export function blur_node_get_radius(node: RenderNode): number;
/**
 * Creates a render node that blurs the child.
 */
export function blur_node_new(child: RenderNode, radius: number): RenderNode;
/**
 * Creates a #GskRenderNode that will stroke a border rectangle inside th
 * e
 * given @outline. The 4 sides of the border can have different widths an
 * d
 * colors.
 */
export function border_node_new(outline: RoundedRect, border_width: number[], border_color: Gdk.RGBA[]): RenderNode;
/**
 * 
 */
export function border_node_peek_colors(node: RenderNode): Gdk.RGBA;
/**
 * 
 */
export function border_node_peek_outline(node: RenderNode): RoundedRect;
/**
 * 
 */
export function border_node_peek_widths(node: RenderNode): number;
/**
 * Creates a Cairo context for drawing using the surface associated
 * to the render node.
 * If no surface exists yet, a surface will be created optimized for
 * rendering to @renderer.
 */
export function cairo_node_get_draw_context(node: RenderNode): cairo.Context;
/**
 * Creates a #GskRenderNode that will render a cairo surface
 * into the area given by @bounds. You can draw to the cairo
 * surface using gsk_cairo_node_get_draw_context()
 */
export function cairo_node_new(bounds: Graphene.Rect): RenderNode;
/**
 * 
 */
export function cairo_node_peek_surface(node: RenderNode): cairo.Surface;
/**
 * Gets the child node that is getting clipped by the given @node.
 */
export function clip_node_get_child(node: RenderNode): RenderNode;
/**
 * Creates a #GskRenderNode that will clip the @child to the area
 * given by @clip.
 */
export function clip_node_new(child: RenderNode, clip: Graphene.Rect): RenderNode;
/**
 * 
 */
export function clip_node_peek_clip(node: RenderNode): Graphene.Rect;
/**
 * Gets the child node that is getting its colors modified by the given @
 * node.
 */
export function color_matrix_node_get_child(node: RenderNode): RenderNode;
/**
 * Creates a #GskRenderNode that will drawn the @child with reduced
 * @color_matrix.
 * In particular, the node will transform the operation
 *   pixel = color_matrix * pixel + color_offset
 * for every pixel.
 */
export function color_matrix_node_new(child: RenderNode, color_matrix: Graphene.Matrix, color_offset: Graphene.Vec4): RenderNode;
/**
 * 
 */
export function color_matrix_node_peek_color_matrix(node: RenderNode): Graphene.Matrix;
/**
 * 
 */
export function color_matrix_node_peek_color_offset(node: RenderNode): Graphene.Vec4;
/**
 * Creates a #GskRenderNode that will render the color specified by @rgba
 *  into
 * the area given by @bounds.
 */
export function color_node_new(rgba: Gdk.RGBA, bounds: Graphene.Rect): RenderNode;
/**
 * 
 */
export function color_node_peek_color(node: RenderNode): Gdk.RGBA;
/**
 * Gets one of the children of @container.
 */
export function container_node_get_child(node: RenderNode, idx: number): RenderNode;
/**
 * Retrieves the number of direct children of @node.
 */
export function container_node_get_n_children(node: RenderNode): number;
/**
 * Creates a new #GskRenderNode instance for holding the given @children.
 * The new node will acquire a reference to each of the children.
 */
export function container_node_new(children: RenderNode[], n_children: number): RenderNode;
/**
 * 
 */
export function cross_fade_node_get_end_child(node: RenderNode): RenderNode;
/**
 * 
 */
export function cross_fade_node_get_progress(node: RenderNode): number;
/**
 * 
 */
export function cross_fade_node_get_start_child(node: RenderNode): RenderNode;
/**
 * Creates a #GskRenderNode that will do a cross-fade between @start and 
 * @end.
 */
export function cross_fade_node_new(start: RenderNode, end: RenderNode, progress: number): RenderNode;
/**
 * Gets the child node that is getting debug by the given @node.
 */
export function debug_node_get_child(node: RenderNode): RenderNode;
/**
 * Gets the debug message that was set on this node
 */
export function debug_node_get_message(node: RenderNode): string;
/**
 * Creates a #GskRenderNode that will add debug information about
 * the given @child.
 * Adding this node has no visual effect.
 */
export function debug_node_new(child: RenderNode, message: string): RenderNode;
/**
 * 
 */
export function inset_shadow_node_get_blur_radius(node: RenderNode): number;
/**
 * 
 */
export function inset_shadow_node_get_dx(node: RenderNode): number;
/**
 * 
 */
export function inset_shadow_node_get_dy(node: RenderNode): number;
/**
 * 
 */
export function inset_shadow_node_get_spread(node: RenderNode): number;
/**
 * Creates a #GskRenderNode that will render an inset shadow
 * into the box given by @outline.
 */
export function inset_shadow_node_new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): RenderNode;
/**
 * 
 */
export function inset_shadow_node_peek_color(node: RenderNode): Gdk.RGBA;
/**
 * 
 */
export function inset_shadow_node_peek_outline(node: RenderNode): RoundedRect;
/**
 * 
 */
export function linear_gradient_node_get_n_color_stops(node: RenderNode): number;
/**
 * Creates a #GskRenderNode that will create a linear gradient from the g
 * iven
 * points and color stops, and render that into the area given by @bounds
 * .
 */
export function linear_gradient_node_new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[], n_color_stops: number): RenderNode;
/**
 * 
 */
export function linear_gradient_node_peek_color_stops(node: RenderNode): ColorStop;
/**
 * 
 */
export function linear_gradient_node_peek_end(node: RenderNode): Graphene.Point;
/**
 * 
 */
export function linear_gradient_node_peek_start(node: RenderNode): Graphene.Point;
/**
 * Gets the child node that is getting opacityed by the given @node.
 */
export function opacity_node_get_child(node: RenderNode): RenderNode;
/**
 * 
 */
export function opacity_node_get_opacity(node: RenderNode): number;
/**
 * Creates a #GskRenderNode that will drawn the @child with reduced
 * @opacity.
 */
export function opacity_node_new(child: RenderNode, opacity: number): RenderNode;
/**
 * 
 */
export function outset_shadow_node_get_blur_radius(node: RenderNode): number;
/**
 * 
 */
export function outset_shadow_node_get_dx(node: RenderNode): number;
/**
 * 
 */
export function outset_shadow_node_get_dy(node: RenderNode): number;
/**
 * 
 */
export function outset_shadow_node_get_spread(node: RenderNode): number;
/**
 * Creates a #GskRenderNode that will render an outset shadow
 * around the box given by @outline.
 */
export function outset_shadow_node_new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): RenderNode;
/**
 * 
 */
export function outset_shadow_node_peek_color(node: RenderNode): Gdk.RGBA;
/**
 * 
 */
export function outset_shadow_node_peek_outline(node: RenderNode): RoundedRect;
/**
 * 
 */
export function repeat_node_get_child(node: RenderNode): RenderNode;
/**
 * Creates a #GskRenderNode that will repeat the drawing of @child across
 * the given @bounds.
 */
export function repeat_node_new(bounds: Graphene.Rect, child: RenderNode, child_bounds: Graphene.Rect | null): RenderNode;
/**
 * 
 */
export function repeat_node_peek_child_bounds(node: RenderNode): Graphene.Rect;
/**
 * Creates a #GskRenderNode that will create a repeating linear gradient
 * from the given points and color stops, and render that into the area
 * given by @bounds.
 */
export function repeating_linear_gradient_node_new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[], n_color_stops: number): RenderNode;
/**
 * Gets the child node that is getting clipped by the given @node.
 */
export function rounded_clip_node_get_child(node: RenderNode): RenderNode;
/**
 * Creates a #GskRenderNode that will clip the @child to the area
 * given by @clip.
 */
export function rounded_clip_node_new(child: RenderNode, clip: RoundedRect): RenderNode;
/**
 * 
 */
export function rounded_clip_node_peek_clip(node: RenderNode): RoundedRect;
/**
 * 
 */
export function serialization_error_quark(): GLib.Quark;
/**
 * 
 */
export function shadow_node_get_child(node: RenderNode): RenderNode;
/**
 * 
 */
export function shadow_node_get_n_shadows(node: RenderNode): number;
/**
 * Creates a #GskRenderNode that will draw a @child with the given
 * @shadows below it.
 */
export function shadow_node_new(child: RenderNode, shadows: Shadow[], n_shadows: number): RenderNode;
/**
 * 
 */
export function shadow_node_peek_shadow(node: RenderNode, i: number): Shadow;
/**
 * 
 */
export function text_node_get_num_glyphs(node: RenderNode): number;
/**
 * 
 */
export function text_node_get_x(node: RenderNode): number;
/**
 * 
 */
export function text_node_get_y(node: RenderNode): number;
/**
 * Creates a render node that renders the given glyphs,
 * Note that @color may not be used if the font contains
 * color glyphs.
 */
export function text_node_new(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, x: number, y: number): RenderNode | null;
/**
 * 
 */
export function text_node_peek_color(node: RenderNode): Gdk.RGBA;
/**
 * 
 */
export function text_node_peek_font(node: RenderNode): Pango.Font;
/**
 * 
 */
export function text_node_peek_glyphs(node: RenderNode): Pango.GlyphInfo;
/**
 * 
 */
export function texture_node_get_texture(node: RenderNode): Gdk.Texture;
/**
 * Creates a #GskRenderNode that will render the given
 * @texture into the area given by @bounds.
 */
export function texture_node_new(texture: Gdk.Texture, bounds: Graphene.Rect): RenderNode;
/**
 * Gets the child node that is getting transformed by the given @node.
 */
export function transform_node_get_child(node: RenderNode): RenderNode;
/**
 * 
 */
export function transform_node_get_transform(node: RenderNode): Transform;
/**
 * Creates a #GskRenderNode that will transform the given @child
 * with the given @transform.
 */
export function transform_node_new(child: RenderNode, transform: Transform): RenderNode;
/**
 * Parses the given @string into a transform and puts it in
 * @out_transform. Strings printed via gsk_transform_to_string()
 * can be read in again successfully using this function.
 * If @string does not describe a valid transform, %FALSE is
 * returned and %NULL is put in @out_transform.
 */
export function transform_parse(string: string): [boolean, Transform];
export enum BlendMode {
    DEFAULT = 0,
    MULTIPLY = 1,
    SCREEN = 2,
    OVERLAY = 3,
    DARKEN = 4,
    LIGHTEN = 5,
    COLOR_DODGE = 6,
    COLOR_BURN = 7,
    HARD_LIGHT = 8,
    SOFT_LIGHT = 9,
    DIFFERENCE = 10,
    EXCLUSION = 11,
    COLOR = 12,
    HUE = 13,
    SATURATION = 14,
    LUMINOSITY = 15,
}
export enum Corner {
    TOP_LEFT = 0,
    TOP_RIGHT = 1,
    BOTTOM_RIGHT = 2,
    BOTTOM_LEFT = 3,
}
export enum RenderNodeType {
    NOT_A_RENDER_NODE = 0,
    CONTAINER_NODE = 1,
    CAIRO_NODE = 2,
    COLOR_NODE = 3,
    LINEAR_GRADIENT_NODE = 4,
    REPEATING_LINEAR_GRADIENT_NODE = 5,
    BORDER_NODE = 6,
    TEXTURE_NODE = 7,
    INSET_SHADOW_NODE = 8,
    OUTSET_SHADOW_NODE = 9,
    TRANSFORM_NODE = 10,
    OPACITY_NODE = 11,
    COLOR_MATRIX_NODE = 12,
    REPEAT_NODE = 13,
    CLIP_NODE = 14,
    ROUNDED_CLIP_NODE = 15,
    SHADOW_NODE = 16,
    BLEND_NODE = 17,
    CROSS_FADE_NODE = 18,
    TEXT_NODE = 19,
    BLUR_NODE = 20,
    DEBUG_NODE = 21,
}
export enum ScalingFilter {
    LINEAR = 0,
    NEAREST = 1,
    TRILINEAR = 2,
}
export enum SerializationError {
    UNSUPPORTED_FORMAT = 0,
    UNSUPPORTED_VERSION = 1,
    INVALID_DATA = 2,
}
export enum TransformCategory {
    UNKNOWN = 0,
    ANY = 1,
    Gjs_3D = 2,
    Gjs_2D = 3,
    Gjs_2D_AFFINE = 4,
    Gjs_2D_TRANSLATE = 5,
    IDENTITY = 6,
}
export class BroadwayRenderer extends Renderer {
    constructor(config?: properties);
}
export class CairoRenderer extends Renderer {
    constructor(config?: properties);
}
export class GLRenderer extends Renderer {
    constructor(config?: properties);
}
export class Renderer extends GObject.Object {
    constructor(config?: properties);
    readonly realized: boolean;
    readonly surface: Gdk.Surface;static new_for_surface(surface: Gdk.Surface): Renderer | null;
    get_surface(): Gdk.Surface | null;
    is_realized(): boolean;
    realize(surface: Gdk.Surface): boolean;
    render(root: RenderNode, region: cairo.Region | null): void;
    render_texture(root: RenderNode, viewport: Graphene.Rect | null): Gdk.Texture;
    unrealize(): void;
}
export class VulkanRenderer extends Renderer {
    constructor(config?: properties);
}
export class ColorStop  {
    constructor(config?: properties);
    offset: number;
    color: Gdk.RGBA;
}
export class RenderNode  {
    constructor(config?: properties);
    draw(cr: cairo.Context): void;
    get_bounds(): [Graphene.Rect];
    get_node_type(): RenderNodeType;
    ref(): RenderNode;
    serialize(): GLib.Bytes;
    unref(): void;
    write_to_file(filename: string): boolean;
}
export class RoundedRect  {
    constructor(config?: properties);
    bounds: Graphene.Rect;
    corner: Graphene.Size[];
    contains_point(point: Graphene.Point): boolean;
    contains_rect(rect: Graphene.Rect): boolean;
    init(bounds: Graphene.Rect, top_left: Graphene.Size, top_right: Graphene.Size, bottom_right: Graphene.Size, bottom_left: Graphene.Size): RoundedRect;
    init_copy(src: RoundedRect): RoundedRect;
    init_from_rect(bounds: Graphene.Rect, radius: number): RoundedRect;
    intersects_rect(rect: Graphene.Rect): boolean;
    is_rectilinear(): boolean;
    normalize(): RoundedRect;
    offset(dx: number, dy: number): RoundedRect;
    shrink(top: number, right: number, bottom: number, left: number): RoundedRect;
}
export class Shadow  {
    constructor(config?: properties);
    color: Gdk.RGBA;
    dx: number;
    dy: number;
    radius: number;
    static node_get_child(node: RenderNode): RenderNode;
    static node_get_n_shadows(node: RenderNode): number;
    static node_new(child: RenderNode, shadows: Shadow[], n_shadows: number): RenderNode;
    static node_peek_shadow(node: RenderNode, i: number): Shadow;
}
export class Transform  {
    constructor(config?: properties);
    equal(second: Transform): boolean;
    get_category(): TransformCategory;
    invert(): Transform;
    matrix(matrix: Graphene.Matrix): Transform;
    perspective(depth: number): Transform;
    print(string: GLib.String): void;
    ref(): Transform;
    rotate(angle: number): Transform;
    rotate_3d(angle: number, axis: Graphene.Vec3): Transform;
    scale(factor_x: number, factor_y: number): Transform;
    scale_3d(factor_x: number, factor_y: number, factor_z: number): Transform;
    to_2d(): [number,number,number,number,number,number];
    to_affine(): [number,number,number,number];
    to_matrix(): [Graphene.Matrix];
    to_string(): string;
    to_translate(): [number,number];
    transform(other: Transform | null): Transform;
    transform_bounds(rect: Graphene.Rect): [Graphene.Rect];
    translate(point: Graphene.Point): Transform;
    translate_3d(point: Graphene.Point3D): Transform;
    unref(): void;
    static node_get_child(node: RenderNode): RenderNode;
    static node_get_transform(node: RenderNode): Transform;
    static node_new(child: RenderNode, transform: Transform): RenderNode;
    static parse(string: string): [boolean, Transform];
}