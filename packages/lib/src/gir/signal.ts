import { GirBase, VoidType, UnknownType, NativeType, TypeExpression, ThisType, NumberType } from "../gir";
import { GirNamespace } from "./namespace";
import { GirClass } from "./class";
import { GirClassFunction, GirFunctionParameter, GirCallback } from "./function";
import { SignalElement, Direction, CallableParamElement } from "@gi.ts/parser";
import { getType, parseDoc, parseMetadata } from "./util";
import { FormatGenerator } from "../generators/generator";
import { LoadOptions } from "../types";
import { GirVisitor } from "../visitor";

export enum GirSignalType {
  CONNECT,
  CONNECT_AFTER,
  EMIT
}

export class GirSignal extends GirBase {
  parameters: GirFunctionParameter[];
  return_type: TypeExpression;
  parent: GirClass;

  constructor({
    name,
    parameters = [],
    return_type = UnknownType,
    parent
  }: {
    name: string;
    parameters?: GirFunctionParameter[];
    return_type?: TypeExpression;
    parent: GirClass;
  }) {
    super(name);

    this.parameters = parameters.map(p => p.copy({ parent: this }));
    this.return_type = return_type;
    this.parent = parent;
  }

  accept(visitor: GirVisitor): GirSignal {
    const node = this.copy({
      parameters: this.parameters.map(p => {
        return p.accept(visitor);
      }),
      returnType: visitor.visitType?.(this.return_type)

    });

    return visitor.visitSignal?.(node) ?? node;
  }

  copy({ parent = this.parent, parameters, returnType }: {
    parent?: GirClass;
    parameters?: GirFunctionParameter[];
    returnType?: TypeExpression;
  } = {}): GirSignal {
    return new GirSignal({
      name: this.name,
      parent,
      parameters: parameters ?? this.parameters,
      return_type: returnType ?? this.return_type
    })._copyBaseProperties(this);
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    options: LoadOptions,
    parent: GirClass,
    sig: SignalElement
  ): GirSignal {
    const signal = new GirSignal({
      name: sig.$.name,
      parent
    });

    if (sig.parameters && sig.parameters[0].parameter) {
      signal.parameters.push(
        ...sig.parameters[0].parameter
          .filter((p): p is CallableParamElement & { $: { name: string } } => !!p.$.name)
          .map(p => GirFunctionParameter.fromXML(modName, ns, options, signal, p))
      );
    }

    signal.return_type = getType(modName, ns, sig["return-value"]?.[0]);

    if (options.loadDocs) {
      signal.doc = parseDoc(sig);
      signal.metadata = parseMetadata(sig);
    }

    return signal;
  }


  asEmit() {
    const emit = this.copy();

    const parent = this.parent;

    const prefix_signal = emit.parameters.some(p => {
      return p.name === "signal";
    });

    const parameters = [
      new GirFunctionParameter({
        name: prefix_signal ? "$signal" : "signal",
        type: NativeType.of(`'${this.name}'`),
        direction: Direction.In
      }),
      ...emit.parameters
    ];

    const return_type = VoidType;

    return new GirClassFunction({
      return_type,
      parameters,
      name: "emit",
      parent
    });
  }

  asConnect(after = false) {
    const connect = this.copy();

    const name = after ? "connect_after" : "connect";

    const parent = this.parent;
    const cb = new GirCallback({
      raw_name: "callback",
      name: "callback",
      output_parameters: [],
      parameters: [
        new GirFunctionParameter({ name: "_source", type: ThisType, direction: Direction.In }),
        ...connect.parameters.map(p => p.copy())
      ],
      return_type: connect.return_type
    });

    const parameters = [
      new GirFunctionParameter({
        name: "signal",
        type: NativeType.of(`'${this.name}'`),
        direction: Direction.In
      }),
      new GirFunctionParameter({
        name: "callback",
        type: cb.asFunctionType(),
        direction: Direction.In
      })
    ];

    const return_type = NumberType;

    return new GirClassFunction({
      return_type,
      parameters,
      name,
      parent
    });
  }

  asString<T extends FormatGenerator<any>>(generator: T, type?: GirSignalType): ReturnType<T["generateProperty"]> {
    return generator.generateSignal(this, type);
  }
}
