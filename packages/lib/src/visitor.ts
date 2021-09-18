import { TypeExpression } from "./gir";
import { GirAlias } from "./gir/alias";
import { GirRecord, GirInterface, GirClass } from "./gir/class";
import { GirConst } from "./gir/const";
import { GirEnumMember, GirError, GirEnum } from "./gir/enum";
import {
  GirCallback,
  GirConstructor,
  GirFunctionParameter,
  GirFunction,
  GirClassFunction,
  GirStaticClassFunction,
  GirVirtualClassFunction
} from "./gir/function";
import { GirNamespace } from "./gir/namespace";
import { GirProperty, GirField } from "./gir/property";
import { GirSignal, GirSignalType } from "./gir/signal";

export abstract class GirVisitor {
  visitType?: (node: TypeExpression) => TypeExpression;
  visitCallback?: (node: GirCallback) => GirCallback;
  visitAlias?: (node: GirAlias) => GirAlias;
  visitConstructor?: (node: GirConstructor) => GirConstructor;
  visitConstructorFunction?: (node: GirConstructor) => GirConstructor;
  visitRecord?: (node: GirRecord) => GirRecord;
  visitInterface?: (node: GirInterface) => GirInterface;
  visitEnumMember?: (node: GirEnumMember) => GirEnumMember;
  visitError?: (node: GirError) => GirError;
  visitEnum?: (node: GirEnum) => GirEnum;
  visitConst?: (node: GirConst) => GirConst;
  visitClass?: (node: GirClass) => GirClass;
  visitParameter?: (node: GirFunctionParameter) => GirFunctionParameter;
  visitProperty?: (node: GirProperty) => GirProperty;
  visitField?: (node: GirField) => GirField;
  visitSignal?: (node: GirSignal, type?: GirSignalType) => GirSignal;
  visitFunction?: (node: GirFunction) => GirFunction;
  visitClassFunction?: (node: GirClassFunction) => GirClassFunction;
  visitStaticClassFunction?: (node: GirStaticClassFunction) => GirStaticClassFunction;
  visitVirtualClassFunction?: (node: GirVirtualClassFunction) => GirVirtualClassFunction;
}

export function visit(namespace: GirNamespace, visitor: GirVisitor) {
  namespace.accept(visitor);
}
