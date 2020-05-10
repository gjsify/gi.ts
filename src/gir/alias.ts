import { GirBase, Type } from "../gir";
import { AliasElement } from "../xml";
import { GirNSRegistry, GirNamespace } from "./namespace";
import { resolveType, getType, sanitizeIdentifierName } from "./util";

export class GirAlias extends GirBase {
  private readonly type: Type;

  constructor({ name, type }: { name: string; type: Type }) {
    super(name);

    this.type = type;
  }

  copy(): GirAlias {
    const { name, type } = this;

    return new GirAlias({ name, type: type.copy() });
  }

  asString(modName: string, registry: GirNSRegistry): string | null {
    try {
      const type = resolveType(modName, registry, this.type);
      return `export type ${this.name} = ${type};`;
    } catch (e) {
      console.error(`Failed to resolve alias: ${this.name} to type ${this.type.name}`);
      console.error(e);
      return null;
    }
  }

  static fromXML(modName: string, ns: GirNamespace, _parent, m: AliasElement): GirAlias | null {
    if (!m.$.name) {
      console.error(`Alias in ${modName} lacks name.`);
      return null;
    }
    const alias = new GirAlias({ name: sanitizeIdentifierName(ns.name, m.$.name), type: getType(modName, ns, m) });

    return alias;
  }
}