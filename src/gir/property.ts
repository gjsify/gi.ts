import { GirBase, TypeExpression } from "../gir";
import { ClassField, ClassProperty } from "../xml";

import { getType } from "./util";
import { GirNamespace } from "./namespace";
import { FormatGenerator } from "../generators/generator";
import { LoadOptions } from "../main";

export class GirField extends GirBase {
  readonly type: TypeExpression;
  optional: boolean = false;
  computed: boolean;
  isStatic: boolean;
  writable: boolean;

  copy(options?: { parent?: GirBase; type?: TypeExpression }): GirField {
    const { type, name, optional, computed, isStatic, writable } = this;

    return new GirField({
      name,
      type: options?.type ?? type,
      optional,
      computed,
      isStatic,
      writable
    });
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

  asString<T = string>(generator: FormatGenerator<T>): T {
    return generator.generateField(this);
  }

  static fromXML(namespace: string, ns: GirNamespace, options: LoadOptions, _parent, field: ClassField): GirField {
    let name = field.$["name"];
    let _name = name.replace(/[-]/g, "_");
    const f = new GirField({ name: _name, type: getType(namespace, ns, field) });

    return f;
  }
}

export class GirProperty extends GirBase {
  readonly writable: boolean = false;
  readonly type: TypeExpression;
  readonly isStatic: boolean = false;
  constructOnly: boolean;

  copy(options?: { name?: string; parent?: GirBase; type?: TypeExpression }): GirProperty {
    const { name, writable, type, isStatic, constructOnly } = this;

    return new GirProperty({
      name: options?.name ?? name,
      writable,
      type: options?.type ?? type,
      isStatic,
      constructOnly
    });
  }

  constructor({
    name,
    isStatic,
    type,
    writable,
    constructOnly
  }: {
    name: string;
    isStatic: boolean;
    type: TypeExpression;
    writable: boolean;
    constructOnly: boolean;
  }) {
    super(name);

    this.isStatic = isStatic;
    this.type = type;
    this.writable = writable;
    this.constructOnly = constructOnly;
  }

  asString<T = string>(generator: FormatGenerator<T>): T {
    return generator.generateProperty(this);
  }

  toCamelCase() {
    const [part, ...parts] = this.name.split('_');

    if (parts.length === 0) {
      return this.copy({
        name: part
      });
    }

    const camelCase = `${part}${parts.map(s => `${s[0].toUpperCase()}${s.slice(1)}`).join('')}`

    return this.copy({
      name: camelCase
    });
  }

  static fromXML(namespace: string, ns: GirNamespace, options: LoadOptions, _parent, prop: ClassProperty): GirProperty {
    let name = prop.$["name"];
    let _name = name.replace(/[-]/g, "_");
    const property = new GirProperty({
      name: _name,
      writable: !("writable" in prop.$) || prop.$["writable"] === "1",
      constructOnly: !("construct-only" in prop.$) || prop.$["construct-only"] === "1",
      type: getType(namespace, ns, prop),
      isStatic: false
    });

    return property;
  }
}
