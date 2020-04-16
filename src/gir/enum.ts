import { EOL } from "os";

import { GirBase, VariableType, ClassType, NativeType } from "../gir";
import { MemberElement, Enumeration, BitfieldElement, Direction } from "../xml";

import { GirClass, GirRecord } from "./class";
import { GirProperty } from "./property";
import { GirClassFunction, GirConstructor, GirFunctionParameter } from "./function";
import { GirNSRegistry, GirNamespace } from "./namespace";
import { isInvalid, sanitizeIdentifierName, sanitizeMemberName } from "./util";

export class GirEnum extends GirBase {
  members = new Map<string, GirEnumMember>();
  ns: string;

  constructor(name: string, ns: string) {
    super(sanitizeIdentifierName(ns, name));
    this.ns = ns;
  }

  copy(): GirEnum {
    const { members, ns, name } = this;

    const en = new GirEnum(name, ns);

    for (const [key, member] of members.entries()) {
      en.members.set(key, member.copy());
    }

    return en;
  }

  asString(modName: string, registry: GirNSRegistry): string | null {
    try {
      const isInvalidEnum = Array.from(this.members.keys()).some(
        name => !Number.isNaN(Number.parseFloat(name)) || name === "NaN" || name === "Infinity"
      );
      if (isInvalidEnum) {
        return this.asClass().asString(modName, registry);
      }

      return `export enum ${this.name} {
  ${Array.from(this.members.values())
    .map(member => `${member.asString(modName, registry)}`)
    .join(EOL)}
  }`;
    } catch (e) {
      console.error(`Failed to generate enum: ${this.name}.`);
      console.error(e);
      return null;
    }
  }

  asClass(): GirRecord {
    const clazz = GirRecord.foreign(this.name, this.ns);

    clazz.props.push(
      ...Array.from(this.members.values()).map(m => {
        return new GirProperty({
          name: m.name,
          type: new VariableType("number"),
          writable: true,
          isStatic: true,
          constructOnly: false
        });
      })
    );
    clazz.members = [];
    return clazz;
  }

  static fromXML(modName: string, ns: GirNamespace, _parent, m: Enumeration | BitfieldElement): GirEnum {
    const em = new GirEnum(sanitizeMemberName(m.$.name), ns.name);

    if (m.$["glib:type-name"]) {
      em.resolve_names.push(m.$["glib:type-name"]);
    }

    if (m.$["c:type"]) {
      em.resolve_names.push(m.$["c:type"]);
    }

    if (!m.member) {
      return em;
    }

    m.member.forEach(m => {
      const member = GirEnumMember.fromXML(modName, ns, em, m);
      em.members.set(member.name, member);
    });

    return em;
  }
}

export class GirEnumMember extends GirBase {
  value: string;

  constructor(name: string, value: string) {
    super(name);
    this.value = value;
  }

  copy(): GirEnumMember {
    const { value, name } = this;

    return new GirEnumMember(name, value);
  }

  static fromXML(_: string, _ns: GirNamespace, _parent, m: MemberElement): GirEnumMember {
    const upper = m.$.name.toUpperCase();

    return new GirEnumMember(upper, m.$.value);
  }

  asString(_: string, __: GirNSRegistry): string {
    const invalid = isInvalid(this.name);
    if (
      this.value != null &&
      !Number.isNaN(Number.parseInt(this.value, 10)) &&
      Number.isNaN(Number.parseInt(this.name, 10)) &&
      this.name !== "NaN"
    ) {
      return invalid ? `"${this.name}" = ${this.value},` : `${this.name} = ${this.value},`;
    } else {
      return invalid ? `"${this.name}",` : `${this.name},`;
    }
  }
}

function isEnumeration(e: unknown): e is Enumeration {
  return typeof e === "object" && e != null && "function" in e;
}

export class GirError extends GirEnum {
  functions: Map<string, GirClassFunction> = new Map();

  asString(modName: string, registry: GirNSRegistry): string {
    const clazz = super.asClass();

    clazz.members = [];
    clazz.members.push(...Array.from(this.functions.values()));

    const GLib = registry.namespace("GLib");

    if (!GLib) {
      throw new Error(`Attempted to generate a subclass of GLib.Error without GLib loaded!`);
    }

    const GLibError = GLib.getClass("Error");

    if (!GLibError) {
      throw new Error(`GLib.Error is not defined. This should not occur.`);
    }

    clazz.parent = GLibError.getType();

    // Manually construct a GLib.Error constructor.
    clazz.mainConstructor = new GirConstructor({
      name: "new",
      parameters: [
        new GirFunctionParameter({
          name: "options",
          type: new NativeType("{ message: string, code: number}"),
          direction: Direction.In
        })
      ],
      return_type: clazz.getType()
    });

    return clazz.asString(modName, registry);
  }

  static fromXML(modName: string, ns: GirNamespace, parent, m: Enumeration | BitfieldElement): GirEnum {
    const err = new GirError(sanitizeMemberName(m.$.name), ns.name);

    if (m.$["glib:type-name"]) {
      err.resolve_names.push(m.$["glib:type-name"]);
    }

    if (m.$["c:type"]) {
      err.resolve_names.push(m.$["c:type"]);
    }

    if (m.member) {
      m.member.forEach(m => {
        const member = GirEnumMember.fromXML(modName, ns, parent, m);
        err.members.set(member.name, member);
      });
    }

    if (isEnumeration(m) && m.function) {
      m.function.forEach(f => {
        const func = GirClassFunction.fromXML(modName, ns, err, f);
        err.functions.set(func.name, func);
      });
    }

    return err;
  }
}
