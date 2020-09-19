import { GirBase, TypeExpression } from "../gir";
import { AliasElement } from "../xml";
import { GirNamespace } from "./namespace";
import { sanitizeIdentifierName, getAliasType } from "./util";
import { FormatGenerator, GenericDescriptor } from "../generators/generator";
import { LoadOptions } from "../main";

export class GirAlias extends GirBase {
  readonly type: TypeExpression;
  readonly generics: GenericDescriptor[];

  constructor({
    name,
    type,
    generics = []
  }: {
    name: string;
    type: TypeExpression;
    generics?: GenericDescriptor[];
  }) {
    super(name);

    this.type = type;
    this.generics = generics;
  }

  copy(): GirAlias {
    const { name, type } = this;

    return new GirAlias({ name, type });
  }

  asString<T = string>(generator: FormatGenerator<T>): T | null {
    return generator.generateAlias(this);
  }

  static fromXML(modName: string, ns: GirNamespace, _options: LoadOptions,  _parent, m: AliasElement): GirAlias | null {
    if (!m.$.name) {
      console.error(`Alias in ${modName} lacks name.`);
      return null;
    }

    const alias = new GirAlias({
      name: sanitizeIdentifierName(ns.name, m.$.name),
      type: getAliasType(modName, ns, m)
    });

    return alias;
  }
}
