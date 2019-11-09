
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Template from "template";
/**
 * template.d.ts
 */
type properties = { [key: string]: any };
export type ScopeResolver = (scope: Scope, name: string, symbol: Symbol, user_data: object | null) => boolean;
export const ENABLE_TRACE: number;
export const LOG_LEVEL_TRACE: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION_S: string;
/**
 * 
 */
export function error_quark(): GLib.Quark;
/**
 * 
 */
export function expr_from_string(str: string): Expr;
export enum Error {
    INVALID_STATE = 1,
    TEMPLATE_NOT_FOUND = 2,
    CIRCULAR_INCLUDE = 3,
    SYNTAX_ERROR = 4,
    LEXER_FAILURE = 5,
    TYPE_MISMATCH = 6,
    INVALID_OP_CODE = 7,
    DIVIDE_BY_ZERO = 8,
    MISSING_SYMBOL = 9,
    SYMBOL_REDEFINED = 10,
    NOT_AN_OBJECT = 11,
    NULL_POINTER = 12,
    NO_SUCH_PROPERTY = 13,
    GI_FAILURE = 14,
    RUNTIME_ERROR = 15,
    NOT_IMPLEMENTED = 16,
    NOT_A_VALUE = 17,
    NOT_A_FUNCTION = 18,
}
export enum ExprBuiltin {
    ABS = 0,
    CEIL = 1,
    FLOOR = 2,
    HEX = 3,
    LOG = 4,
    PRINT = 5,
    REPR = 6,
    SQRT = 7,
    TYPEOF = 8,
}
export enum ExprType {
    ADD = 1,
    SUB = 2,
    MUL = 3,
    DIV = 4,
    BOOLEAN = 5,
    NUMBER = 6,
    STRING = 7,
    GT = 8,
    LT = 9,
    NE = 10,
    EQ = 11,
    GTE = 12,
    LTE = 13,
    UNARY_MINUS = 14,
    STMT_LIST = 15,
    IF = 16,
    WHILE = 17,
    SYMBOL_REF = 18,
    SYMBOL_ASSIGN = 19,
    FN_CALL = 20,
    USER_FN_CALL = 21,
    GETATTR = 22,
    SETATTR = 23,
    GI_CALL = 24,
    REQUIRE = 25,
    AND = 26,
    OR = 27,
    INVERT_BOOLEAN = 28,
}
export enum SymbolType {
    EXPR = 0,
    VALUE = 1,
}
export class Template extends GObject.Object {constructor(config?: properties);
locator: TemplateLocator;
expand(stream: Gio.OutputStream, scope: Scope | null, cancellable: Gio.Cancellable | null): boolean;
expand_string(scope: Scope | null): string;
get_locator(): TemplateLocator;
parse(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean;
parse_file(file: Gio.File, cancellable: Gio.Cancellable | null): boolean;
parse_path(path: string, cancellable: Gio.Cancellable | null): boolean;
parse_resource(path: string, cancellable: Gio.Cancellable | null): boolean;
parse_string(input: string): boolean;
set_locator(locator: TemplateLocator): void;
}
export class TemplateLocator extends GObject.Object {constructor(config?: properties);
append_search_path(path: string): void;
get_search_path(): string[];
locate(path: string): Gio.InputStream;
prepend_search_path(path: string): void;
vfunc_locate(path: string): Gio.InputStream;
}
export class Scope  {constructor(config?: properties);
get(name: string): Symbol;
new_with_parent(): Scope;
peek(name: string): Symbol | null;
ref(): Scope;
set(name: string, symbol: Symbol | null): void;
set_boolean(name: string, value: boolean): void;
set_double(name: string, value: number): void;
set_object(name: string, value: GObject.Object | null): void;
set_resolver(resolver: ScopeResolver, user_data: object | null, destroy: GLib.DestroyNotify): void;
set_string(name: string, value: string | null): void;
set_strv(name: string, value: string[] | null): void;
set_value(name: string, value: GObject.Value | null): void;
set_variant(name: string, value: GLib.Variant | null): void;
take(name: string, symbol: Symbol | null): void;
unref(): void;
}
export class Symbol  {constructor(config?: properties);
assign_boolean(v_bool: boolean): void;
assign_double(v_double: number): void;
assign_expr(expr: Expr | null, args: string[]): void;
assign_object(v_object: GObject.Object | null): void;
assign_string(v_string: string): void;
assign_strv(strv: string[] | null): void;
assign_value(value: GObject.Value): void;
assign_variant(v_variant: GLib.Variant | null): void;
get_expr(): [Expr, string[] | null];
get_symbol_type(): SymbolType;
get_value(value: GObject.Value): void;
ref(): Symbol;
unref(): void;
}
export class TemplateClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class TemplateLocatorClass  {constructor(config?: properties);
readonly locate: unknown;
}
export class Expr  {constructor(config?: properties);
static new_boolean(value: boolean): Expr;
static new_flow(type: ExprType, condition: Expr, primary: Expr, secondary: Expr): Expr;
static new_fn_call(builtin: ExprBuiltin, param: Expr): Expr;
static new_number(value: number): Expr;
static new_require(typelib: string, version: string): Expr;
static new_simple(type: ExprType, left: Expr, right: Expr): Expr;
static new_string(value: string, length: number): Expr;
static new_symbol_assign(symbol: string, right: Expr): Expr;
static new_symbol_ref(symbol: string): Expr;
static new_user_fn_call(name: string, param: Expr): Expr;
_eval(scope: Scope, return_value: GObject.Value): boolean;
new_getattr(attr: string): Expr;
new_gi_call(name: string, params: Expr): Expr;
new_invert_boolean(): Expr;
new_setattr(attr: string, right: Expr): Expr;
ref(): Expr;
unref(): void;
static from_string(str: string): Expr;
}