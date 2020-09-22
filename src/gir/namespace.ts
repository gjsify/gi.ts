import { GirBase, NullableType, ObjectType } from "../gir";
import { GirXML, Element } from "../xml";
import { isPrimitiveType } from "./util";

import { GirClass, GirInterface, GirRecord, GirBaseClass } from "./class";
import { GirFunction, GirCallback } from "./function";
import { GirEnum, GirError } from "./enum";
import { GirConst } from "./const";
import { GirAlias } from "./alias";

import { LoadOptions } from "../main";

export type GirNSMember = GirBaseClass | GirFunction | GirConst | GirEnum | GirAlias;

export class GirNSRegistry {
  mapping: Map<string, GirNamespace> = new Map();

  namespace(name: string): GirNamespace | null {
    return this.mapping.get(name) || null;
  }

  assertNamespace(name: string): GirNamespace {
    const namespace = this.mapping.get(name);

    if (!namespace) {
      throw new Error(`Namespace '${name}' not found.`);
    }

    return namespace;
  }

  load(name: string, gir: GirXML, options: LoadOptions) {
    this.mapping.set(name, GirNamespace.fromXML(name, gir, options));
  }
}

const isIntrospectable = (e: Element<{}>) => e && e.$ && (!e.$.introspectable || e.$.introspectable === "1");

export class GirNamespace {
  readonly name: string;
  readonly imports: string[] = [];
  readonly members: Map<string, GirNSMember | GirNSMember[]> = new Map<string, GirNSMember | GirNSMember[]>();
  readonly version: string;

  constructor(name: string, version: string) {
    this.name = name;
    this.version = version;
  }

  addImport(ns_name: string) {
    if (ns_name !== this.name && !this.imports.includes(ns_name)) {
      this.imports.push(ns_name);
    }
  }

  getMember(name: string): GirBase | GirBase[] | null {
    return this.members.get(name) || null;
  }

  assertClass(name: string): GirBaseClass {
    const clazz = this.getClass(name);

    if (!clazz) {
      throw new Error(`Class ${name} does not exist in namespace ${this.name}.`);
    }

    return clazz;
  }

  getClass(name: string): GirBaseClass | null {
    if (this.members.has(name)) {
      const member = this.members.get(name);

      if (member instanceof GirBaseClass) {
        return member;
      } else {
        return null;
      }
    } else {
      // TODO Optimize this with a map.
      for (const member of this.members.values()) {
        if (member instanceof GirBaseClass && member.resolve_names.includes(name)) {
          return member;
        }
      }

      return null;
    }
  }

  getEnum(name: string): GirEnum | null {
    if (this.members.has(name)) {
      const member = this.members.get(name);

      return (member instanceof GirEnum && member) || null;
    } else {
      // TODO Optimize this with a map.
      for (const member of this.members.values()) {
        if (member instanceof GirEnum && member.resolve_names.includes(name)) {
          return member;
        }
      }

      return null;
    }
  }

  hasSymbol(name: string) {
    return this.members.has(name);
  }

  resolveSymbolFromTypeName(name: string): string | null {
    for (const member of this.members.values()) {
      if (member instanceof GirBase) {
        if (member.resolve_names.includes(name)) {
          return member.name;
        }
      }
    }

    return null;
  }

  findClassCallback(name: string): [string | null, string] {
    const clazzes = Array.from(this.members.values()).filter(
      (m): m is GirBaseClass => m instanceof GirBaseClass
    );
    const res = clazzes
      .map<[GirBaseClass, GirCallback | undefined]>(m => [
        m,
        m.callbacks.find(c => c.name === name || c.resolve_names.includes(name))
      ])
      .find((r): r is [GirBaseClass, GirCallback] => r[1] != null);

    if (res) {
      return [res[0].name, res[1].name];
    } else {
      return [null, name];
    }
  }

  static fromXML(modName: string, repo: GirXML, options: LoadOptions): GirNamespace {
    console.log(`Parsing ${modName}...`);
    const defaultImports = ["GObject", "Gio", "GLib"].filter(a => a !== modName);

    const includes = repo.repository.include || [];
    const ns = repo.repository.namespace[0];

    const building = new GirNamespace(modName, ns?.$?.version ?? "unknown version");

    building.imports.push(...defaultImports);

    building.imports.push(
      ...includes.map(i => i.$.name).filter(name => !defaultImports.includes(name) && modName !== name)
    );

    // Constants
    if (ns.constant) {
      ns.constant
        .filter(isIntrospectable)
        .map(constant => GirConst.fromXML(modName, building, options, null, constant))
        .forEach(c => building.members.set(c.name, c));
    }

    // Get the requested functions
    if (ns.function) {
      ns.function
        .filter(isIntrospectable)
        .map(func => GirFunction.fromXML(modName, building, options, null, func))
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.callback) {
      ns.callback
        .filter(isIntrospectable)
        .map(callback => GirCallback.fromXML(modName, building, options, null, callback))
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns["glib:boxed"]) {
      ns["glib:boxed"]
        .filter(isIntrospectable)
        .map(boxed => new GirAlias({ name: boxed.$["glib:name"], type: new NullableType(ObjectType) }))
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.enumeration) {
      // Get the requested enums
      ns.enumeration
        .map(enumeration => {
          if (enumeration.$["glib:error-domain"]) {
            return GirError.fromXML(modName, building, options, null, enumeration);
          } else {
            return GirEnum.fromXML(modName, building, options, null, enumeration);
          }
        })
        .forEach(c => building.members.set(c.name, c));
    }

    // Bitfield is a type of enum
    if (ns.bitfield) {
      ns.bitfield
        .filter(isIntrospectable)
        .map(field => GirEnum.fromXML(modName, building, options, this, field, true))
        .forEach(c => building.members.set(c.name, c));
    }

    // Get the requested classes
    if (ns.class) {
      ns.class
        .filter(isIntrospectable)
        .map(klass => GirClass.fromXML(modName, building, options, this, klass))
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.record) {
      ns.record
        .filter(isIntrospectable)
        // _ marks these records as private.
        .filter(b => !b.$.name.startsWith("_"))
        // Don't generate records for structs
        .filter(b => typeof b.$["glib:is-gtype-struct-for"] !== "string")
        .map(record => GirRecord.fromXML(modName, building, options, record))
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.union) {
      ns.union
        .filter(isIntrospectable)
        .map(union => GirRecord.fromXML(modName, building, options, union))
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.interface) {
      ns.interface
        .map(inter => GirInterface.fromXML(modName, building, options, inter))
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.alias) {
      type NamedAlias = { $: { name: string } };

      ns.alias
        .filter(isIntrospectable)
        // Avoid attempting to alias non-introspectable symbols.
        .map(b => {
          b.type = b.type
            .filter((t): t is NamedAlias => !!(t && t.$.name))
            .map(t => {
              if (!building.hasSymbol(t.$.name) && !isPrimitiveType(t.$.name) && !t.$.name.includes(".")) {
                return { $: { name: "unknown", "c:type": "unknown" } };
              }

              return t;
            });

          return b;
        })
        .map(alias => GirAlias.fromXML(modName, building, options, null, alias))
        .filter((alias): alias is GirAlias => alias != null)
        .forEach(c => building.members.set(c.name, c));
    }

    return building;
  }
}
