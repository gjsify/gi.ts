import { GirBase, TypeExpression } from "../gir";
import { AliasElement } from "@gi.ts/parser";
import { GirNamespace } from "./namespace";
import { sanitizeIdentifierName, getAliasType } from "./util";
import { FormatGenerator, GenericDescriptor } from "../generators/generator";
import { LoadOptions } from "../types";
import { GirVisitor } from "../visitor";

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

  accept(visitor: GirVisitor): GirAlias {
    const node = this.copy({
      type: visitor.visitType?.(this.type)
    });

    return visitor.visitAlias?.(node) ?? node;
  }

  copy(options?: { parent?: undefined; type?: TypeExpression }): GirAlias {
    const { name, type  } = this;

    return new GirAlias({ name, type: options?.type ?? type })._copyBaseProperties(this);
  }

  asString<T = string>(generator: FormatGenerator<T>): T | null {
    return generator.generateAlias(this);
  }

  static fromXML(modName: string, ns: GirNamespace, _options: LoadOptions, _parent, m: AliasElement): GirAlias | null {
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
