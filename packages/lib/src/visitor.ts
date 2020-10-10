import { TypeExpression } from "./gir";
import { GirAlias } from "./gir/alias";
import { GirRecord, GirInterface, GirClass } from "./gir/class";
import { GirConst } from "./gir/const";
import { GirEnumMember, GirError, GirEnum } from "./gir/enum";
import { GirCallback, GirConstructor, GirFunctionParameter, GirFunction, GirClassFunction, GirStaticClassFunction, GirVirtualClassFunction } from "./gir/function";
import { GirNamespace } from "./gir/namespace";
import { GirProperty, GirField } from "./gir/property";
import { GirSignal, GirSignalType } from "./gir/signal";

export abstract class GirVisitor {
    abstract visitType(node: TypeExpression): TypeExpression;
    abstract visitCallback(node: GirCallback): GirCallback;
    abstract visitAlias(node: GirAlias): GirAlias;
    abstract visitConstructor(node: GirConstructor): GirConstructor;
    abstract visitConstructorFunction(node: GirConstructor): GirConstructor;
    abstract visitRecord(node: GirRecord): GirRecord;
    abstract visitInterface(node: GirInterface): GirInterface;
    abstract visitEnumMember(node: GirEnumMember): GirEnumMember;
    abstract visitError(node: GirError): GirError;
    abstract visitEnum(node: GirEnum): GirEnum;
    abstract visitConst(node: GirConst): GirConst;
    abstract visitClass(node: GirClass): GirClass;
    abstract visitParameter(node: GirFunctionParameter): GirFunctionParameter;
    abstract visitProperty(node: GirProperty): GirProperty;
    abstract visitField(node: GirField): GirField;
    abstract visitSignal(node: GirSignal, type?: GirSignalType): GirSignal;
    abstract visitFunction(node: GirFunction): GirFunction;
    abstract visitClassFunction(node: GirClassFunction): GirClassFunction;
    abstract visitStaticClassFunction(node: GirStaticClassFunction): GirStaticClassFunction;
    abstract visitVirtualClassFunction(node: GirVirtualClassFunction): GirVirtualClassFunction;
}

export function visit(namespace: GirNamespace, visitor: GirVisitor) {
    namespace.accept(visitor);
}
