
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Gee from "gee";
import * as GCalc from "gcalc";
/**
 * gcalc.d.ts
 */
type properties = { [key: string]: any };
export enum AssigError {
    INVALID_STRUCTURE_ERROR = 0,
}
export enum FunctionError {
    INVALID_PARAMETERS_ERROR = 0,
    INVOCATION_ERROR = 1,
}
export enum ParserError {
    INVALID_TOKEN_ERROR = 0,
    INVALID_EXPRESSION_ERROR = 1,
}
export enum GroupError {
    INVALID_POLYNOMIAL = 0,
    INVALID_INTERNAL_TERM = 1,
}
export enum SolverError {
    EXPRESSION_ERROR = 0,
}
export enum TermError {
    INVALID_OPERATOR = 0,
    EVALUATION_FAIL = 1,
}
export enum VariableError {
    INVALID_PARENT = 0,
    INVALID_EXPRESSION_DEFINITION = 1,
    EVALUATION_FAIL = 2,
}
export enum GParserTokenType {
    NONE = 0,
    EOF = 1,
    IDENTIFIER = 2,
    INTEGER_LITERAL = 3,
    REAL_LITERAL = 4,
    STAR = 5,
    PLUS = 6,
    DIV = 7,
    MINUS = 8,
    ASSIGN = 9,
    OPEN_PARENS = 10,
    CLOSE_PARENS = 11,
    CARRET = 12,
    CLOSE_BRACE = 13,
    CLOSE_BRACKET = 14,
    OPEN_BRACE = 15,
    OPEN_BRACKET = 16,
    STRING_LITERAL = 17,
    OP_AND = 18,
    OP_COALESCING = 19,
    OP_DEC = 20,
    OP_EQ = 21,
    OP_GE = 22,
    OP_GT = 23,
    OP_INC = 24,
    OP_LE = 25,
    OP_LT = 26,
    OP_NE = 27,
    OP_NEG = 28,
    OP_OR = 29,
    OP_PTR = 30,
    OP_SHIFT_LEFT = 31,
    SEMICOLON = 32,
    TILDE = 33,
    COLON = 34,
    COMMA = 35,
    DOUBLE_COLON = 36,
    DOT = 37,
    ELLIPSIS = 38,
    INTERR = 39,
    HASH = 40,
}
export enum GroupLevel {
    ONE = 0,
    TWO = 1,
    THREE = 2,
}
export class ExpressionContainer extends Gee.ArrayList {constructor(config?: properties);
add(exp: Expression): void;
remove_at(index: number): Expression;
remove(exp: Expression): Expression;
get_object(position: number): GObject.Object | null;
find(exp: Expression): Expression | null;
find_named(name: string): Expression | null;
get_parent(): Expression;
set_parent(value: Expression): void;
}
export class ExpressionHashMap extends Gee.HashMap {constructor(config?: properties);
add(exp: Expression): void;
remove(exp: Expression): void;
find_named(name: string): Expression;
get_parent(): Expression;
set_parent(value: Expression): void;
}
export class GFunctionAcos extends GFunction {constructor(config?: properties);
}
export class GFunctionAcosh extends GFunction {constructor(config?: properties);
}
export class GFunctionAsin extends GFunction {constructor(config?: properties);
}
export class GFunctionAsinh extends GFunction {constructor(config?: properties);
}
export class GFunctionAtan extends GFunction {constructor(config?: properties);
}
export class GFunctionAtanh extends GFunction {constructor(config?: properties);
}
export class GFunctionCos extends GFunction {constructor(config?: properties);
}
export class GFunctionCosh extends GFunction {constructor(config?: properties);
}
export class GFunctionExp extends GFunction {constructor(config?: properties);
}
export class GFunctionLog extends GFunction {constructor(config?: properties);
}
export class GFunctionSin extends GFunction {constructor(config?: properties);
}
export class GFunctionSinh extends GFunction {constructor(config?: properties);
}
export class GFunctionSqrt extends GFunction {constructor(config?: properties);
}
export class GFunctionTan extends GFunction {constructor(config?: properties);
}
export class GFunctionTanh extends GFunction {constructor(config?: properties);
}
export class GExpression extends GObject.Object {constructor(config?: properties);
to_string(): string;
solve(): Result;
vfunc_to_string(): string;
vfunc_solve(): Result;
}
export class GErrorExpression extends GExpression {constructor(config?: properties);
}
export class GAssign extends GExpression {constructor(config?: properties);
}
export class GConstant extends GExpression {constructor(config?: properties);
static integer(val: number): GConstant;
static unsigned_integer(val: number): GConstant;
static _double(val: number): GConstant;
static complex(real: number, imag: number): GConstant;
subtract(c: Constant): Constant;
}
export class GDivision extends GExpression {constructor(config?: properties);
}
export class GErrorResult extends GObject.Object {constructor(config?: properties);
}
export class GFunction extends GExpression {constructor(config?: properties);
static with_name(name: string, nparams: number): GFunction;
evaluate(): Expression;
vfunc_evaluate(): Expression;
}
export class GMathEquation extends GExpression {constructor(config?: properties);
}
export class GMathEquationManager extends GObject.Object {constructor(config?: properties);
}
export class GMinus extends GExpression {constructor(config?: properties);
}
export class GMultiply extends GExpression {constructor(config?: properties);
}
export class GParser extends GObject.Object {constructor(config?: properties);
parse(str: string, eqman: MathEquationManager): void;
read_token(): GParserTokenType;
token_to_string(): string;
}
export class GPlus extends GExpression {constructor(config?: properties);
}
export class GPolynomial extends GExpression {constructor(config?: properties);
}
export class GPow extends GExpression {constructor(config?: properties);
}
export class GResult extends GObject.Object {constructor(config?: properties);
}
export class GGroup extends GExpression {constructor(config?: properties);
}
export class GSolver extends GObject.Object {constructor(config?: properties);
}
export class GTerm extends GExpression {constructor(config?: properties);
}
export class GVariable extends GExpression {constructor(config?: properties);
}
export class ExpressionContainerClass  {constructor(config?: properties);
readonly parent_class: Gee.ArrayListClass;
}
export class ExpressionContainerPrivate  {constructor(config?: properties);
}
export class ExpressionHashMapClass  {constructor(config?: properties);
readonly parent_class: Gee.HashMapClass;
}
export class ExpressionHashMapPrivate  {constructor(config?: properties);
}
export class GFunctionAcosClass  {constructor(config?: properties);
readonly parent_class: GFunctionClass;
}
export class GFunctionAcosPrivate  {constructor(config?: properties);
}
export class GFunctionAcoshClass  {constructor(config?: properties);
readonly parent_class: GFunctionClass;
}
export class GFunctionAcoshPrivate  {constructor(config?: properties);
}
export class GFunctionAsinClass  {constructor(config?: properties);
readonly parent_class: GFunctionClass;
}
export class GFunctionAsinPrivate  {constructor(config?: properties);
}
export class GFunctionAsinhClass  {constructor(config?: properties);
readonly parent_class: GFunctionClass;
}
export class GFunctionAsinhPrivate  {constructor(config?: properties);
}
export class GFunctionAtanClass  {constructor(config?: properties);
readonly parent_class: GFunctionClass;
}
export class GFunctionAtanPrivate  {constructor(config?: properties);
}
export class GFunctionAtanhClass  {constructor(config?: properties);
readonly parent_class: GFunctionClass;
}
export class GFunctionAtanhPrivate  {constructor(config?: properties);
}
export class GFunctionCosClass  {constructor(config?: properties);
readonly parent_class: GFunctionClass;
}
export class GFunctionCosPrivate  {constructor(config?: properties);
}
export class GFunctionCoshClass  {constructor(config?: properties);
readonly parent_class: GFunctionClass;
}
export class GFunctionCoshPrivate  {constructor(config?: properties);
}
export class GFunctionExpClass  {constructor(config?: properties);
readonly parent_class: GFunctionClass;
}
export class GFunctionExpPrivate  {constructor(config?: properties);
}
export class GFunctionLogClass  {constructor(config?: properties);
readonly parent_class: GFunctionClass;
}
export class GFunctionLogPrivate  {constructor(config?: properties);
}
export class GFunctionSinClass  {constructor(config?: properties);
readonly parent_class: GFunctionClass;
}
export class GFunctionSinPrivate  {constructor(config?: properties);
}
export class GFunctionSinhClass  {constructor(config?: properties);
readonly parent_class: GFunctionClass;
}
export class GFunctionSinhPrivate  {constructor(config?: properties);
}
export class GFunctionSqrtClass  {constructor(config?: properties);
readonly parent_class: GFunctionClass;
}
export class GFunctionSqrtPrivate  {constructor(config?: properties);
}
export class GFunctionTanClass  {constructor(config?: properties);
readonly parent_class: GFunctionClass;
}
export class GFunctionTanPrivate  {constructor(config?: properties);
}
export class GFunctionTanhClass  {constructor(config?: properties);
readonly parent_class: GFunctionClass;
}
export class GFunctionTanhPrivate  {constructor(config?: properties);
}
export class GExpressionClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
readonly to_string: unknown;
readonly solve: unknown;
}
export class GExpressionPrivate  {constructor(config?: properties);
}
export class GErrorExpressionClass  {constructor(config?: properties);
readonly parent_class: GExpressionClass;
}
export class GErrorExpressionPrivate  {constructor(config?: properties);
}
export class GAssignClass  {constructor(config?: properties);
readonly parent_class: GExpressionClass;
}
export class GAssignPrivate  {constructor(config?: properties);
}
export class GConstantClass  {constructor(config?: properties);
readonly parent_class: GExpressionClass;
}
export class GConstantPrivate  {constructor(config?: properties);
}
export class GDivisionClass  {constructor(config?: properties);
readonly parent_class: GExpressionClass;
}
export class GDivisionPrivate  {constructor(config?: properties);
}
export class GErrorResultClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class GErrorResultPrivate  {constructor(config?: properties);
}
export class GFunctionClass  {constructor(config?: properties);
readonly parent_class: GExpressionClass;
readonly evaluate: unknown;
}
export class GFunctionPrivate  {constructor(config?: properties);
}
export class GMathEquationClass  {constructor(config?: properties);
readonly parent_class: GExpressionClass;
}
export class GMathEquationPrivate  {constructor(config?: properties);
}
export class GMathEquationManagerClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class GMathEquationManagerPrivate  {constructor(config?: properties);
}
export class GMinusClass  {constructor(config?: properties);
readonly parent_class: GExpressionClass;
}
export class GMinusPrivate  {constructor(config?: properties);
}
export class GMultiplyClass  {constructor(config?: properties);
readonly parent_class: GExpressionClass;
}
export class GMultiplyPrivate  {constructor(config?: properties);
}
export class GParserClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class GParserPrivate  {constructor(config?: properties);
}
export class GPlusClass  {constructor(config?: properties);
readonly parent_class: GExpressionClass;
}
export class GPlusPrivate  {constructor(config?: properties);
}
export class GPolynomialClass  {constructor(config?: properties);
readonly parent_class: GExpressionClass;
}
export class GPolynomialPrivate  {constructor(config?: properties);
}
export class GPowClass  {constructor(config?: properties);
readonly parent_class: GExpressionClass;
}
export class GPowPrivate  {constructor(config?: properties);
}
export class GResultClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class GResultPrivate  {constructor(config?: properties);
}
export class GGroupClass  {constructor(config?: properties);
readonly parent_class: GExpressionClass;
}
export class GGroupPrivate  {constructor(config?: properties);
}
export class GSolverClass  {constructor(config?: properties);
readonly parent_class: GObject.ObjectClass;
}
export class GSolverPrivate  {constructor(config?: properties);
}
export class GTermClass  {constructor(config?: properties);
readonly parent_class: GExpressionClass;
}
export class GTermPrivate  {constructor(config?: properties);
}
export class GVariableClass  {constructor(config?: properties);
readonly parent_class: GExpressionClass;
}
export class GVariablePrivate  {constructor(config?: properties);
}
export class AssignIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class BinaryOperatorIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class ConstantIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly real: unknown;
readonly imag: unknown;
readonly zero: unknown;
readonly add: unknown;
readonly multiply: unknown;
readonly divide: unknown;
readonly neg: unknown;
readonly pow: unknown;
}
export class DivisionIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class ExpressionIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly to_string: unknown;
readonly solve: unknown;
readonly get_parent: unknown;
readonly set_parent: unknown;
readonly get_expressions: unknown;
}
export class ErrorExpressionIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class FunctionIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly evaluate: unknown;
readonly verify_params: unknown;
readonly get_param_types: unknown;
readonly get_name: unknown;
readonly set_name: unknown;
readonly get_n_params: unknown;
readonly set_n_params: unknown;
readonly get_closed: unknown;
readonly set_closed: unknown;
}
export class ErrorResultIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_message: unknown;
}
export class GroupIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly evaluate: unknown;
readonly get_level: unknown;
readonly set_level: unknown;
readonly get_closed: unknown;
readonly set_closed: unknown;
}
export class HashableIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly hash: unknown;
}
export class MathEquationIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly get_variables: unknown;
}
export class MathEquationManagerIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly find_variable: unknown;
readonly get_equations: unknown;
readonly get_functions: unknown;
}
export class MinusIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class MultiplyIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class OperatorIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class PlusIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class PolynomialIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly evaluate: unknown;
}
export class PowIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
}
export class ResultIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly to_string: unknown;
readonly get_expression: unknown;
}
export class SolverIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly solve: unknown;
readonly get_equation_manager: unknown;
readonly set_equation_manager: unknown;
}
export class TermIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly add: unknown;
readonly evaluate: unknown;
}
export class VariableIface  {constructor(config?: properties);
readonly parent_iface: GObject.TypeInterface;
readonly evaluate: unknown;
readonly get_name: unknown;
readonly set_name: unknown;
readonly get_value: unknown;
readonly set_value: unknown;
readonly get_bind: unknown;
readonly set_bind: unknown;
readonly get_binded: unknown;
}
export interface Assign  {
evaluate(): Expression;
}
export interface BinaryOperator  {
}
export interface Constant  {
real(): number;
imag(): number;
zero(): void;
add(c: Constant): Constant;
multiply(c: Constant): Constant;
divide(c: Constant): Constant;
neg(): Constant;
pow(c: Constant): Constant;
}
export interface Division  {
}
export interface Expression  {
readonly expressions: ExpressionContainer;
to_string(): string;
solve(): Result;
get_parent(): Expression;
set_parent(value: Expression): void;
get_expressions(): ExpressionContainer;
}
export interface ErrorExpression  {
}
export interface Function  {
readonly param_types: ExpressionContainer;
name: string;
n_params: number;
closed: boolean;
evaluate(): Expression;
verify_params(): boolean;
get_param_types(): ExpressionContainer;
get_name(): string;
set_name(value: string): void;
get_n_params(): number;
set_n_params(value: number): void;
get_closed(): boolean;
set_closed(value: boolean): void;
}
export interface ErrorResult  {
readonly message: string;
get_message(): string;
}
export interface Group  {
level: GroupLevel;
closed: boolean;
evaluate(): Expression;
get_level(): GroupLevel;
set_level(value: GroupLevel): void;
get_closed(): boolean;
set_closed(value: boolean): void;
}
export interface Hashable  {
hash(): number;
}
export interface MathEquation  {
readonly variables: ExpressionHashMap;
get_variables(): ExpressionHashMap;
}
export interface MathEquationManager  {
readonly equations: ExpressionContainer;
readonly functions: ExpressionContainer;
find_variable(name: string): Variable;
get_equations(): ExpressionContainer;
get_functions(): ExpressionContainer;
}
export interface Minus  {
}
export interface Multiply  {
}
export interface Operator  {
}
export interface Plus  {
}
export interface Polynomial  {
evaluate(): Expression;
}
export interface Pow  {
}
export interface Result  {
readonly expression: Expression;
to_string(): string;
get_expression(): Expression;
}
export interface Solver  {
equation_manager: MathEquationManager;
solve(str: string): Result;
get_equation_manager(): MathEquationManager;
set_equation_manager(value: MathEquationManager): void;
}
export interface Term  {
add(t: Term): Expression;
evaluate(): Expression;
}
export interface Variable  {
name: string;
value: Constant;
bind: Variable;
evaluate(): Expression;
get_name(): string;
set_name(value: string): void;
get_value(): Constant;
set_value(value: Constant): void;
get_bind(): Variable;
set_bind(value: Variable): void;
get_binded(): boolean;
}