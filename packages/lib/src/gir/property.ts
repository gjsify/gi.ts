import { GirBase, TypeExpression } from "../gir";
import { FieldElement, PropertyElement } from "@gi.ts/parser";

import { getType } from "./util";
import { GirNamespace } from "./namespace";
import { FormatGenerator } from "../generators/generator";
import { LoadOptions } from "../types";
import { GirVisitor } from "../visitor";
import { GirBaseClass } from "./class";
import { GirEnum } from "./enum";

export class GirField extends GirBase {
  type: TypeExpression;

  // TODO: Make these properties readonly
  optional: boolean = false;
  computed: boolean;
  isStatic: boolean;
  writable: boolean;
  isNative: boolean = false;

  copy(options?: { parent?: GirBase; type?: TypeExpression; isStatic?: boolean }): GirField {
    const { type, name, optional, computed, isStatic, writable } = this;

    return new GirField({
      name,
      type: options?.type ?? type,
      optional,
      computed,
      isStatic: options?.isStatic ?? isStatic,
      writable
    })._copyBaseProperties(this);
  }

  constructor({
    name,
    type,
    computed = false,
    optional = false,
    isStatic = false,
    writable = true
  }: {
    name: string;
    type: TypeExpression;
    computed?: boolean;
    optional?: boolean;
    isStatic?: boolean;
    writable?: boolean;
  }) {
    super(name);

    this.type = type;
    this.computed = computed;
    this.optional = optional;

    this.isStatic = isStatic;
    this.writable = writable;
  }

  asString<T extends FormatGenerator<any>>(generator: T): ReturnType<T["generateField"]> {
    return generator.generateField(this);
  }

  accept(visitor: GirVisitor): GirField {
    const node = this.copy({
      type: visitor.visitType?.(this.type) ?? this.type
    });

    return visitor.visitField?.(node) ?? node;
  }

  static fromXML(
    namespace: string,
    ns: GirNamespace,
    _options: LoadOptions,
    _parent,
    field: FieldElement
  ): GirField {
    let name = field.$["name"];
    let _name = name.replace(/[-]/g, "_");
    const f = new GirField({ name: _name, type: getType(namespace, ns, field) });

    return f;
  }
}

export class JSField extends GirField {
  isNative = true;
}

export class GirProperty extends GirBase {
  type: TypeExpression;

  readonly writable: boolean = false;
  readonly readable: boolean = true;
  readonly constructOnly: boolean;

  parent: GirBaseClass | GirEnum;

  copy(options?: { name?: string; parent?: GirBaseClass | GirEnum; type?: TypeExpression }): GirProperty {
    const { name, writable, readable, type, constructOnly, parent } = this;

    return new GirProperty({
      name: options?.name ?? name,
      writable,
      readable,
      type: options?.type ?? type,
      constructOnly,
      parent: options?.parent ?? parent
    })._copyBaseProperties(this);
  }

  accept(visitor: GirVisitor): GirProperty {
    const node = this.copy({
      parent: this.parent,
      type: visitor.visitType?.(this.type) ?? this.type
    });

    return visitor.visitProperty?.(node) ?? node;
  }

  constructor({
    name,
    type,
    writable,
    readable,
    constructOnly,
    parent
  }: {
    name: string;
    type: TypeExpression;
    writable: boolean;
    readable: boolean;
    constructOnly: boolean;
    parent: GirBaseClass | GirEnum;
  }) {
    super(name);

    this.type = type;
    this.writable = writable;
    this.readable = readable;
    this.constructOnly = constructOnly;
    this.parent = parent;
  }

  asString<T extends FormatGenerator<any>>(
    generator: T,
    construct?: boolean
  ): ReturnType<T["generateProperty"]> {
    return generator.generateProperty(this, construct);
  }

  toCamelCase() {
    const [part, ...parts] = this.name.split("_");

    if (parts.length === 0) {
      return this.copy({
        name: part,
        parent: this.parent
      });
    }

    const camelCase = `${part}${parts.map(s => `${s[0].toUpperCase()}${s.slice(1)}`).join("")}`;

    return this.copy({
      name: camelCase,
      parent: this.parent
    });
  }

  static fromXML(
    namespace: string,
    ns: GirNamespace,
    options: LoadOptions,
    parent: GirBaseClass | GirEnum,
    prop: PropertyElement
  ): GirProperty {
    let name = prop.$["name"];
    let _name = name.replace(/[-]/g, "_");
    const property = new GirProperty({
      name: _name,
      writable: prop.$?.writable === "1",
      readable: prop.$?.readable !== "0",
      constructOnly: prop.$?.["construct-only"] === "1",
      type: getType(namespace, ns, prop),
      parent
    });

    return property;
  }
}
