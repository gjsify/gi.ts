import { GirBase, VoidType, UnknownType, NativeType, TypeExpression, ThisType } from "../gir";
import { GirNamespace } from "./namespace";
import { GirClass } from "./class";
import { GirClassFunction, GirFunctionParameter, GirCallback } from "./function";
import { ClassGLibSignalElement, Direction } from "../xml";
import { getType } from "./util";
import { FormatGenerator } from "../generators/generator";
import { LoadOptions } from "../main";

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

    this.parameters = parameters;
    this.return_type = return_type;
    this.parent = parent;
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    options: LoadOptions,
    parent: GirClass,
    sig: ClassGLibSignalElement
  ): GirSignal {
    const signal = new GirSignal({
      name: sig.$.name,
      parent
    });

    if (sig.parameters && sig.parameters[0].parameter) {
      signal.parameters.push(
        ...sig.parameters[0].parameter.map(p => GirFunctionParameter.fromXML(modName, ns, options, signal, p))
      );
    }

    signal.return_type = getType(modName, ns, sig["return-value"][0]);

    if (options.loadDocs) {
      signal.doc = sig.doc?.[0]._ ?? "";
    }

    return signal;
  }

  copy({ parent = this.parent }: { parent?: GirClass } = {}): GirSignal {
    const fn = new GirSignal({
      name: this.name,
      parent
    });

    fn.parameters.push(...this.parameters.map(p => p.copy()));
    fn.return_type = this.return_type;

    return fn;
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

  asConnect<T = string>(generator: FormatGenerator<T>, after = false) {
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
        type: NativeType.of(`${generator.generateCallbackType(cb, false)[1]}`),
        direction: Direction.In
      })
    ];

    const return_type = NativeType.of("number");

    return new GirClassFunction({
      return_type,
      parameters,
      name,
      parent
    });
  }

  asString<T = string>(generator: FormatGenerator<T>, type?: GirSignalType): T {
    return generator.generateSignal(this, type);
  }
}
