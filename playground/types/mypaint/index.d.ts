
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as MyPaint from "mypaint";
/**
 * mypaint.d.ts
 */
type properties = { [key: string]: any };
export type SurfaceBeginAtomicFunction = (self: Surface) => void;
export type SurfaceDestroyFunction = (self: Surface) => void;
export type SurfaceDrawDabFunction = (self: Surface, x: number, y: number, radius: number, color_r: number, color_g: number, color_b: number, opaque: number, hardness: number, alpha_eraser: number, aspect_ratio: number, angle: number, lock_alpha: number, colorize: number) => number;
export type SurfaceEndAtomicFunction = (self: Surface, roi: Rectangle) => void;
export type SurfaceGetColorFunction = (self: Surface, x: number, y: number, radius: number, color_r: number, color_g: number, color_b: number, color_a: number) => void;
export type SurfaceSavePngFunction = (self: Surface, path: string, x: number, y: number, width: number, height: number) => void;
export type TileRequestEndFunction = (self: TiledSurface, request: TileRequest) => void;
export type TileRequestStartFunction = (self: TiledSurface, request: TileRequest) => void;
export type TiledSurfaceAreaChanged = (self: TiledSurface, bb_x: number, bb_y: number, bb_w: number, bb_h: number) => void;
/**
 * 
 */
export function brush_input_from_cname(cname: string): BrushInput;
/**
 * 
 */
export function brush_input_info(id: BrushInput): BrushInputInfo;
/**
 * 
 */
export function brush_setting_from_cname(cname: string): BrushSetting;
/**
 * 
 */
export function brush_setting_info(id: BrushSetting): BrushSettingInfo;
export enum BrushInput {
    INPUT_PRESSURE = 0,
    INPUT_SPEED1 = 1,
    INPUT_SPEED2 = 2,
    INPUT_RANDOM = 3,
    INPUT_STROKE = 4,
    INPUT_DIRECTION = 5,
    INPUT_DIRECTION_ANGLE = 6,
    INPUT_ATTACK_ANGLE = 7,
    INPUT_TILT_DECLINATION = 8,
    INPUT_TILT_ASCENSION = 9,
    INPUT_GRIDMAP_X = 10,
    INPUT_GRIDMAP_Y = 11,
    INPUT_BRUSH_RADIUS = 12,
    INPUT_CUSTOM = 13,
    INPUTS_COUNT = 14,
}
export enum BrushSetting {
    SETTING_OPAQUE = 0,
    SETTING_OPAQUE_MULTIPLY = 1,
    SETTING_OPAQUE_LINEARIZE = 2,
    SETTING_RADIUS_LOGARITHMIC = 3,
    SETTING_HARDNESS = 4,
    SETTING_ANTI_ALIASING = 5,
    SETTING_DABS_PER_BASIC_RADIUS = 6,
    SETTING_DABS_PER_ACTUAL_RADIUS = 7,
    SETTING_DABS_PER_SECOND = 8,
    SETTING_GRIDMAP_SCALE = 9,
    SETTING_GRIDMAP_SCALE_X = 10,
    SETTING_GRIDMAP_SCALE_Y = 11,
    SETTING_RADIUS_BY_RANDOM = 12,
    SETTING_SPEED1_SLOWNESS = 13,
    SETTING_SPEED2_SLOWNESS = 14,
    SETTING_SPEED1_GAMMA = 15,
    SETTING_SPEED2_GAMMA = 16,
    SETTING_OFFSET_BY_RANDOM = 17,
    SETTING_OFFSET_Y = 18,
    SETTING_OFFSET_X = 19,
    SETTING_OFFSET_ANGLE = 20,
    SETTING_OFFSET_ANGLE_ASC = 21,
    SETTING_OFFSET_ANGLE_2 = 22,
    SETTING_OFFSET_ANGLE_2_ASC = 23,
    SETTING_OFFSET_ANGLE_ADJ = 24,
    SETTING_OFFSET_MULTIPLIER = 25,
    SETTING_OFFSET_BY_SPEED = 26,
    SETTING_OFFSET_BY_SPEED_SLOWNESS = 27,
    SETTING_SLOW_TRACKING = 28,
    SETTING_SLOW_TRACKING_PER_DAB = 29,
    SETTING_TRACKING_NOISE = 30,
    SETTING_COLOR_H = 31,
    SETTING_COLOR_S = 32,
    SETTING_COLOR_V = 33,
    SETTING_RESTORE_COLOR = 34,
    SETTING_CHANGE_COLOR_H = 35,
    SETTING_CHANGE_COLOR_L = 36,
    SETTING_CHANGE_COLOR_HSL_S = 37,
    SETTING_CHANGE_COLOR_V = 38,
    SETTING_CHANGE_COLOR_HSV_S = 39,
    SETTING_SMUDGE = 40,
    SETTING_SMUDGE_LENGTH = 41,
    SETTING_SMUDGE_RADIUS_LOG = 42,
    SETTING_ERASER = 43,
    SETTING_STROKE_THRESHOLD = 44,
    SETTING_STROKE_DURATION_LOGARITHMIC = 45,
    SETTING_STROKE_HOLDTIME = 46,
    SETTING_CUSTOM_INPUT = 47,
    SETTING_CUSTOM_INPUT_SLOWNESS = 48,
    SETTING_ELLIPTICAL_DAB_RATIO = 49,
    SETTING_ELLIPTICAL_DAB_ANGLE = 50,
    SETTING_DIRECTION_FILTER = 51,
    SETTING_LOCK_ALPHA = 52,
    SETTING_COLORIZE = 53,
    SETTING_SNAP_TO_PIXEL = 54,
    SETTING_PRESSURE_GAIN_LOG = 55,
    SETTINGS_COUNT = 56,
}
export enum BrushState {
    STATE_X = 0,
    STATE_Y = 1,
    STATE_PRESSURE = 2,
    STATE_PARTIAL_DABS = 3,
    STATE_ACTUAL_RADIUS = 4,
    STATE_SMUDGE_RA = 5,
    STATE_SMUDGE_GA = 6,
    STATE_SMUDGE_BA = 7,
    STATE_SMUDGE_A = 8,
    STATE_LAST_GETCOLOR_R = 9,
    STATE_LAST_GETCOLOR_G = 10,
    STATE_LAST_GETCOLOR_B = 11,
    STATE_LAST_GETCOLOR_A = 12,
    STATE_LAST_GETCOLOR_RECENTNESS = 13,
    STATE_ACTUAL_X = 14,
    STATE_ACTUAL_Y = 15,
    STATE_NORM_DX_SLOW = 16,
    STATE_NORM_DY_SLOW = 17,
    STATE_NORM_SPEED1_SLOW = 18,
    STATE_NORM_SPEED2_SLOW = 19,
    STATE_STROKE = 20,
    STATE_STROKE_STARTED = 21,
    STATE_CUSTOM_INPUT = 22,
    STATE_RNG_SEED = 23,
    STATE_ACTUAL_ELLIPTICAL_DAB_RATIO = 24,
    STATE_ACTUAL_ELLIPTICAL_DAB_ANGLE = 25,
    STATE_DIRECTION_DX = 26,
    STATE_DIRECTION_DY = 27,
    STATE_DECLINATION = 28,
    STATE_ASCENSION = 29,
    STATE_DIRECTION_ANGLE_DX = 30,
    STATE_DIRECTION_ANGLE_DY = 31,
    STATE_ATTACK_ANGLE = 32,
    STATE_FLIP = 33,
    STATE_GRIDMAP_X = 34,
    STATE_GRIDMAP_Y = 35,
    STATES_COUNT = 36,
}
export class Brush  {constructor(config?: properties);
from_defaults(): void;
from_string(string: string): boolean;
get_base_value(id: BrushSetting): number;
get_inputs_used_n(id: BrushSetting): number;
get_mapping_n(id: BrushSetting, input: BrushInput): number;
get_mapping_point(id: BrushSetting, input: BrushInput, index: number): [number,number];
get_state(i: BrushState): number;
get_total_stroke_painting_time(): number;
is_constant(id: BrushSetting): boolean;
new_stroke(): void;
ref(): void;
reset(): void;
set_base_value(id: BrushSetting, value: number): void;
set_mapping_n(id: BrushSetting, input: BrushInput, n: number): void;
set_mapping_point(id: BrushSetting, input: BrushInput, index: number, x: number, y: number): void;
set_print_inputs(enabled: boolean): void;
set_state(i: BrushState, value: number): void;
stroke_to(surface: Surface, x: number, y: number, pressure: number, xtilt: number, ytilt: number, dtime: number): number;
unref(): void;
static input_from_cname(cname: string): BrushInput;
static _new(): Brush;
static setting_from_cname(cname: string): BrushSetting;
}
export class BrushInputInfo  {constructor(config?: properties);
cname: string;
hard_min: number;
soft_min: number;
normal: number;
soft_max: number;
hard_max: number;
name: string;
tooltip: string;
get_name(): string;
get_tooltip(): string;
}
export class BrushSettingInfo  {constructor(config?: properties);
cname: string;
name: string;
constant: boolean;
min: number;
def: number;
max: number;
tooltip: string;
get_name(): string;
get_tooltip(): string;
}
export class FixedTiledSurface  {constructor(config?: properties);
get_height(): number;
get_width(): number;
_interface(): Surface;
static _new(width: number, height: number): FixedTiledSurface;
}
export class Rectangle  {constructor(config?: properties);
x: number;
y: number;
width: number;
height: number;
copy(): Rectangle;
expand_to_include_point(x: number, y: number): void;
}
export class Surface  {constructor(config?: properties);
destroy: SurfaceDestroyFunction;
refcount: number;
begin_atomic(): void;
draw_dab(x: number, y: number, radius: number, color_r: number, color_g: number, color_b: number, opaque: number, hardness: number, alpha_eraser: number, aspect_ratio: number, angle: number, lock_alpha: number, colorize: number): number;
end_atomic(): [Rectangle | null];
get_alpha(x: number, y: number, radius: number): number;
get_color(x: number, y: number, radius: number, color_r: number, color_g: number, color_b: number, color_a: number): void;
init(): void;
ref(): void;
save_png(path: string, x: number, y: number, width: number, height: number): void;
unref(): void;
}
export class TileRequest  {constructor(config?: properties);
tx: number;
ty: number;
readonly: boolean;
buffer: number;
context: object;
thread_id: number;
mipmap_level: number;
init(level: number, tx: number, ty: number, readonly: boolean): void;
}
export class TiledSurface  {constructor(config?: properties);
surface_do_symmetry: boolean;
surface_center_x: number;
operation_queue: object;
dirty_bbox: Rectangle;
threadsafe_tile_requests: boolean;
tile_size: number;
begin_atomic(): void;
destroy(): void;
end_atomic(roi: Rectangle): void;
get_alpha(x: number, y: number, radius: number): number;
init(tile_request_start: TileRequestStartFunction, tile_request_end: TileRequestEndFunction): void;
set_symmetry_state(active: boolean, center_x: number): void;
tile_request_end(request: TileRequest): void;
tile_request_start(request: TileRequest): void;
}