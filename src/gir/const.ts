import { GirBase, Type } from "../gir";
import { ConstantElement } from "../xml";

import { GirNamespace, GirNSRegistry } from "./namespace";
import { getType, resolveType, sanitizeIdentifierName } from "./util";

export class GirConst extends GirBase {
  type: Type;

  constructor({ name, type }: { name: string; type: Type }) {
    super(name);

    this.type = type;
  }

  copy(): GirConst {
    const { type, name } = this;

    return new GirConst({
      name,
      type: type.copy()
    });
  }

  static fromXML(modName: string, ns: GirNamespace, _parent, constant: ConstantElement): GirConst {
    return new GirConst({ name: sanitizeIdentifierName(ns.name, constant.$.name), type: getType(modName, ns, constant) });
  }

  asString(modName: string, registry: GirNSRegistry): string {
    return `export const ${this.name}: ${resolveType(modName, registry, this.type)};`;
  }
}
