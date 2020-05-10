import { GirBase, NativeType, VoidType, VariableType, UnknownType, Type } from "../gir";
import { GirNSRegistry, GirNamespace } from "./namespace";
import { GirClass } from "./class";
import { GirClassFunction, GirFunctionParameter, GirCallback } from "./function";
import { ClassGLibSignalElement, Direction } from "../xml";
import { getType } from "./util";

export enum GirSignalType {
  CONNECT,
  CONNECT_AFTER,
  EMIT,
}

export class GirSignal extends GirBase {
  parameters: GirFunctionParameter[];
  return_type: Type;
  parent: GirClass;

  constructor({
    name,
    parameters = [],
    return_type = UnknownType,
    parent,
  }: {
    name: string;
    parameters?: GirFunctionParameter[];
    return_type?: Type;
    parent: GirClass;
  }) {
    super(name);

    this.parameters = parameters;
    this.return_type = return_type;
    this.parent = parent;
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    parent: GirClass,
    sig: ClassGLibSignalElement
  ): GirSignal {
    const signal = new GirSignal({
      name: sig.$.name,
      parent,
    });

    if (sig.parameters && sig.parameters[0].parameter) {
      signal.parameters.push(
        ...sig.parameters[0].parameter.map((p) => GirFunctionParameter.fromXML(modName, ns, signal, p))
      );
    }

    signal.return_type = getType(modName, ns, sig["return-value"][0]);

    return signal;
  }

  copy({ parent = this.parent }: { parent?: GirClass } = {}): GirSignal {
    const fn = new GirSignal({
      name: this.name,
      parent,
    });

    fn.parameters.push(...this.parameters.map((p) => p.copy()));
    fn.return_type = this.return_type.copy();

    return fn;
  }

  asEmit(_modName: string, _registry: GirNSRegistry) {
    const emit = this.copy();

    const parent = this.parent;

    const prefix_signal = emit.parameters.some((p) => {
      return p.name === "signal";
    });

    const parameters = [
      new GirFunctionParameter({
        name: prefix_signal ? "$signal" : "signal",
        type: new NativeType(`'${this.name}'`),
        direction: Direction.In,
      }),
      ...emit.parameters,
    ];

    const return_type = VoidType.copy();

    return new GirClassFunction({
      return_type,
      parameters,
      name: "emit",
      parent,
    });
  }

  asConnect(modName: string, registry: GirNSRegistry, after = false) {
    const connect = this.copy();

    const name = after ? "connect_after" : "connect";

    const parent = this.parent;
    const cb = new GirCallback({
      raw_name: "callback",
      name: "callback",
      output_parameters: [],
      parameters: [
        new GirFunctionParameter({ name: "_source", type: new NativeType("this"), direction: Direction.In }),
        ...connect.parameters.map((p) => p.copy()),
      ],
      return_type: connect.return_type.copy(),
    });

    const parameters = [
      new GirFunctionParameter({
        name: "signal",
        type: new NativeType(`'${this.name}'`),
        direction: Direction.In,
      }),
      new GirFunctionParameter({
        name: "callback",
        type: new NativeType(`${cb.asTypeString(modName, registry)}`),
        direction: Direction.In,
      }),
    ];

    const return_type = new VariableType("number");

    return new GirClassFunction({
      return_type,
      parameters,
      name,
      parent,
    });
  }

  asString(modName: string, registry: GirNSRegistry, type: GirSignalType = GirSignalType.CONNECT): string {
    switch (type) {
      case GirSignalType.CONNECT:
        return this.asConnect(modName, registry, false).asString(modName, registry);
      case GirSignalType.CONNECT_AFTER:
        return this.asConnect(modName, registry, true).asString(modName, registry);
      case GirSignalType.EMIT:
        return this.asEmit(modName, registry).asString(modName, registry);
    }
  }
}
