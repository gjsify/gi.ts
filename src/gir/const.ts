import { GirBase, TypeExpression } from "../gir";
import { ConstantElement } from "../xml";

import { GirNamespace, GirNSRegistry } from "./namespace";
import { getType, sanitizeIdentifierName } from "./util";

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

  static fromXML(modName: string, ns: GirNamespace, _parent, constant: ConstantElement): GirConst {
    return new GirConst({
      name: sanitizeIdentifierName(ns.name, constant.$.name),
      type: getType(modName, ns, constant)
    });
  }

  asString(modName: string, registry: GirNSRegistry): string {
    return `export const ${this.name}: ${this.type.resolve(modName, registry)};`;
  }
}
