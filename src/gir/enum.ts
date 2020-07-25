import { GirBase, NumberType, TypeIdentifier } from "../gir";
import { MemberElement, Enumeration, BitfieldElement } from "../xml";

import { GirRecord } from "./class";
import { GirProperty } from "./property";
import { GirClassFunction } from "./function";
import { GirNamespace } from "./namespace";
import { sanitizeIdentifierName, sanitizeMemberName } from "./util";
import { FormatGenerator } from "../generators/generator";

export class GirEnum extends GirBase {
  members = new Map<string, GirEnumMember>();
  flags: boolean = false;
  ns: string;

  constructor(name: string, ns: string) {
    super(sanitizeIdentifierName(ns, name));
    this.ns = ns;
  }

  getType(): TypeIdentifier {
    return new TypeIdentifier(this.name, this.ns);
  }

  copy(): GirEnum {
    const { members, ns, name, flags } = this;

    const en = new GirEnum(name, ns);

    for (const [key, member] of members.entries()) {
      en.members.set(key, member.copy());
    }

    en.flags = flags;

    return en;
  }

  asString(generator: FormatGenerator): string | null {
    return generator.generateEnum(this);
  }

  asClass(): GirRecord {
    const clazz = GirRecord.foreign(this.name, this.ns);

    clazz.props.push(
      ...Array.from(this.members.values()).map(m => {
        return new GirProperty({
          name: m.name,
          type: NumberType,
          writable: true,
          isStatic: true,
          constructOnly: false
        });
      })
    );
    clazz.members = [];
    return clazz;
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    _parent,
    m: Enumeration | BitfieldElement,
    flags = false
  ): GirEnum {
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

    em.flags = flags;

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

  asString(generator: FormatGenerator): string {
    return generator.generateEnumMember(this);
  }
}

function isEnumeration(e: unknown): e is Enumeration {
  return typeof e === "object" && e != null && "function" in e;
}

export class GirError extends GirEnum {
  functions: Map<string, GirClassFunction> = new Map();

  asString(generator: FormatGenerator): string {
    return generator.generateError(this);
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
