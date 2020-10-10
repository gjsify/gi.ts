import { GirNamespace } from "../gir/namespace";
import { GirClass, GirRecord, GirInterface } from "../gir/class";
import { GirConst } from "../gir/const";
import { GirEnum, GirError, GirEnumMember } from "../gir/enum";
import { GirProperty, GirField } from "../gir/property";
import { GirSignal, GirSignalType } from "../gir/signal";
import { GirFunction, GirFunctionParameter, GirConstructor, GirCallback } from "../gir/function";
import { GirClassFunction } from "../gir/function";
import { GirStaticClassFunction } from "../gir/function";
import { GirVirtualClassFunction } from "../gir/function";
import { GirAlias } from "../gir/alias";
import { TypeExpression } from "../gir";

export interface GenericDescriptor {
  type: TypeExpression;
  name: string;
}

export abstract class FormatGenerator<T = string> {
  abstract generateNamespace(node: GirNamespace): string | null;

  abstract generateCallbackType(node: GirCallback, generics: boolean): [T, T];
  abstract generateCallback(node: GirCallback): T;
  abstract generateAlias(node: GirAlias): T;
  abstract generateConstructor(node: GirConstructor): T;
  abstract generateConstructorFunction(node: GirConstructor): T;
  abstract generateRecord(node: GirRecord): T;
  abstract generateInterface(node: GirInterface): T;
  abstract generateEnumMember(node: GirEnumMember): T;
  abstract generateError(node: GirError): T;
  abstract generateEnum(node: GirEnum): T | null;
  abstract generateConst(node: GirConst): T;
  abstract generateClass(node: GirClass): T;
  abstract generateParameter(arg0: GirFunctionParameter): T;
  abstract generateProperty(node: GirProperty, construct?: boolean): T;
  abstract generateField(node: GirField): T;
  abstract generateSignal(node: GirSignal, type?: GirSignalType): T;
  abstract generateFunction(node: GirFunction): T;
  abstract generateClassFunction(node: GirClassFunction): T;
  abstract generateStaticClassFunction(node: GirStaticClassFunction): T;
  abstract generateVirtualClassFunction(node: GirVirtualClassFunction): T;
}
