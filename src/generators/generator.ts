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

export abstract class FormatGenerator {
  abstract generateCallbackType(node: GirCallback, generics: boolean): [string, string];
  abstract generateCallback(node: GirCallback): string;
  abstract generateAlias(node: GirAlias): string;
  abstract generateConstructor(node: GirConstructor): string;
  abstract generateConstructorFunction(node: GirConstructor): string;
  abstract generateRecord(node: GirRecord): string;
  abstract generateInterface(node: GirInterface): string;
  abstract generateEnumMember(node: GirEnumMember): string;
  abstract generateNamespace(node: GirNamespace): string | null;
  abstract generateError(node: GirError): string;
  abstract generateEnum(node: GirEnum): string | null;
  abstract generateConst(node: GirConst): string;
  abstract generateClass(node: GirClass): string;
  abstract generateParameter(arg0: GirFunctionParameter): string;
  abstract generateProperty(node: GirProperty, construct?: boolean): string;
  abstract generateField(node: GirField): string;
  abstract generateSignal(node: GirSignal, type?: GirSignalType): string;
  abstract generateFunction(node: GirFunction): string;
  abstract generateClassFunction(node: GirClassFunction): string;
  abstract generateStaticClassFunction(node: GirStaticClassFunction): string;
  abstract generateVirtualClassFunction(node: GirVirtualClassFunction): string;
}
