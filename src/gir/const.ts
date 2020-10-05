import { GirBase, TypeExpression } from "../gir";
import { ConstantElement } from "../xml";

import { GirNamespace } from "./namespace";
import { getType, sanitizeIdentifierName } from "./util";
import { FormatGenerator } from "../generators/generator";
import { LoadOptions } from "../cli/commands/generate";

export class GirConst extends GirBase {
  type: TypeExpression;
  value: string | null;

  constructor({ name, type, value }: { name: string; type: TypeExpression; value: string | null; }) {
    super(name);

    this.type = type;
    this.value = value;
  }

  copy(): GirConst {
    const { type, name, value } = this;

    return new GirConst({
      name,
      type,
      value
    });
  }

  static fromXML(modName: string, ns: GirNamespace, options: LoadOptions,  _parent, constant: ConstantElement): GirConst {
    const c = new GirConst({
      name: sanitizeIdentifierName(ns.name, constant.$.name),
      type: getType(modName, ns, constant),
      value: constant.$.value ?? null
    });

    if (options.loadDocs) {
      c.doc = constant.doc?.[0]?._ ?? "";
    }

    return c;
  }

  asString<T = string>(generator: FormatGenerator<T>): T {
    return generator.generateConst(this);
  }
}
