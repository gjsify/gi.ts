import { GirBase, VariableType } from "../gir";
import { ClassField, ClassProperty } from "../xml";

import { resolveType, getType, isInvalid } from "./util";
import { GirNSRegistry, GirNamespace } from "./namespace";

export class GirField extends GirBase {
  readonly type: VariableType;
  optional: boolean = false;

  copy(): GirField {
    const { type, name, optional } = this;

    return new GirField({
      name,
      type: type.copy(),
      optional,
    });
  }

  constructor({ name, type, optional = false }: { name: string; type: VariableType; optional?: boolean }) {
    super(name);

    this.type = type;
    this.optional = optional;
  }

  asString(namespace: string, registry: GirNSRegistry): string {
    const invalid = isInvalid(this.name);

    return `${invalid ? `"${this.name}"` : this.name}${this.optional ? "?" : ""}: ${
      resolveType(namespace, registry, this.type) || "any"
    };`;
  }

  static fromXML(namespace: string, ns: GirNamespace, _parent, field: ClassField): GirField {
    let name = field.$["name"];
    let _name = name.replace(/[-]/g, "_");
    const f = new GirField({ name: _name, type: getType(namespace, ns, field) });

    return f;
  }
}

export class GirProperty extends GirBase {
  readonly writable: boolean = false;
  readonly type: VariableType;
  readonly isStatic: boolean = false;
  constructOnly: boolean;

  copy(): GirProperty {
    const { writable, type, isStatic, name, constructOnly } = this;

    return new GirProperty({
      name,
      writable,
      type: type.copy(),
      isStatic,
      constructOnly,
    });
  }

  constructor({
    name,
    isStatic,
    type,
    writable,
    constructOnly,
  }: {
    name: string;
    isStatic: boolean;
    type: VariableType;
    writable: boolean;
    constructOnly: boolean;
  }) {
    super(name);

    this.isStatic = isStatic;
    this.type = type;
    this.writable = writable;
    this.constructOnly = constructOnly;
  }

  asString(namespace: string, registry: GirNSRegistry, construct = false): string {
    const invalid = isInvalid(this.name);
    const Static = this.isStatic ? "static" : "";
    const ReadOnly = this.writable || construct ? "" : "readonly";

    const Modifier = [Static, ReadOnly].filter((a) => a !== "").join(" ");

    const Name = invalid ? `"${this.name}"` : this.name;

    let Type = resolveType(namespace, registry, this.type) || "any";

    return `${Modifier} ${Name}: ${Type};`;
  }

  static fromXML(namespace: string, ns: GirNamespace, _parent, prop: ClassProperty): GirProperty {
    let name = prop.$["name"];
    let _name = name.replace(/[-]/g, "_");
    const property = new GirProperty({
      name: _name,
      writable: !("writable" in prop.$) || prop.$["writable"] === "1",
      constructOnly: !("construct-only" in prop.$) || prop.$["construct-only"] === "1",
      type: getType(namespace, ns, prop),
      isStatic: false,
    });

    return property;
  }
}
