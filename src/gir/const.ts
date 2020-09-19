import { GirBase, TypeExpression } from "../gir";
import { ConstantElement } from "../xml";

import { GirNamespace } from "./namespace";
import { getType, sanitizeIdentifierName } from "./util";
import { FormatGenerator } from "../generators/generator";
import { LoadOptions } from "../main";

export class GirConst extends GirBase {
  type: TypeExpression;

  constructor({ name, type }: { name: string; type: TypeExpression }) {
    super(name);

    this.type = type;
  }

  copy(): GirConst {
    const { type, name } = this;

    return new GirConst({
      name,
      type
    });
  }

  static fromXML(modName: string, ns: GirNamespace, options: LoadOptions,  _parent, constant: ConstantElement): GirConst {
    const c = new GirConst({
      name: sanitizeIdentifierName(ns.name, constant.$.name),
      type: getType(modName, ns, constant)
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
