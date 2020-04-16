import { EOL } from "os";

import { GirBase, VariableType } from "../gir";
import { GirXML, Element } from "../xml";
import { resolvePrimitiveType } from "./util";

import { GirClass, GirInterface, GirRecord, GirBaseClass } from "./class";
import { GirFunction, GirCallback } from "./function";
import { GirEnum, GirError } from "./enum";
import { GirConst } from "./const";
import { GirAlias } from "./alias";

import Gio from "../injections/gio.json";
import GLib from "../injections/glib.json";
import GObject from "../injections/gobject.json";

type ArrayInjection = string[];
type StringInjection = string;
export interface ClassInjection {
  _constructor?: { [key: string]: ArrayInjection | StringInjection };
  member?: { [key: string]: ArrayInjection | StringInjection };
  prop?: { [key: string]: StringInjection };
  field?: { [key: string]: StringInjection };
  mainConstructor?: string;
}
type Injection = { [key: string]: ClassInjection | StringInjection | ArrayInjection };

const injections: { [key: string]: Injection } = { GLib, Gio, GObject };

export type GirNSMember = GirBaseClass | GirFunction | GirConst | GirEnum | GirAlias;

export class GirNSRegistry {
  mapping: Map<string, GirNamespace> = new Map();

  namespace(name: string): GirNamespace | null {
    return this.mapping.get(name) || null;
  }

  load(name: string, gir: GirXML) {
    this.mapping.set(name, GirNamespace.fromXML(name, gir));
  }
}

const isIntrospectable = (e: Element<{}>) => !e.$.introspectable || e.$.introspectable === "1";

export class GirNamespace {
  readonly name: string;
  readonly imports: string[] = [];
  readonly members: Map<string, GirNSMember> = new Map<string, GirNSMember>();

  constructor(name: string) {
    this.name = name;
  }

  addImport(ns_name: string) {
    if (ns_name !== this.name && !this.imports.includes(ns_name)) {
      this.imports.push(ns_name);
    }
  }

  getClass(name: string) {
    if (this.members.has(name)) {
      const member = this.members.get(name);

      if (member instanceof GirBaseClass) {
        return member;
      } else {
        return null;
      }
    } else {
      for (const member of this.members.values()) {
        if (member instanceof GirBaseClass && member.resolve_names.includes(name)) {
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

  asString(modName: string, registry: GirNSRegistry): string | null {
    console.log(`Resolving the types of ${modName}...`);
    try {
      const name = this.name;
      const injected = [] as string[];
      const ns_injection = name in injections ? injections[this.name] : null;
      const header = `/**
 * ${name}
 */
`;
      const base = `

type GType = object;
${Array.from(this.members.values())
  .map(m => {
    if (ns_injection && m.name in ns_injection) {
      injected.push(m.name);

      const injection = ns_injection[m.name];

      if (typeof injection === "string") {
        return injection;
      } else if (Array.isArray(injection)) {
        return injection.join(`${EOL}`);
      } else if (typeof injection === "object") {
        if (m instanceof GirBaseClass) {
          return `${m.asString(modName, registry, injection)}`;
        } else {
          throw new Error(`Attempted to apply a class injection to a non-class: ${m.name}`);
        }
      } else {
        throw new Error(`Unknown injection type: ${JSON.stringify(injection)}`);
      }
    }

    return `${m.asString(modName, registry)}`;
  })
  .concat(
    Object.entries(ns_injection || {})
      .filter(([l]) => !injected.includes(l))
      .map(([, l]) => {
        if (Array.isArray(l)) {
          return l.join(EOL);
        } else if (typeof l === "string") {
          return l;
        } else {
          throw new Error("Attempted to apply class injection to root namespace.");
        }
      })
  )
  .join(`${EOL}`)}`;

      // Resolve imports after we stringify everything else, sometimes we have to ad-hoc add an import.
      const imports = `${this.imports
        .filter(i => registry.namespace(i) != null)
        .map(i => `import * as ${i} from "${i.toLowerCase()}";`)
        .join(`${EOL}`)}`;

      const raw_output = [header, imports, base].join("\n");

      // Cleanup and indent the output
      const [, output] = raw_output.split("\n").reduce(
        (prev, next) => {
          const trimmed = next.trim();

          if (trimmed === "") {
            return prev;
          }

          let [indent, str] = prev;

          if (!trimmed.startsWith("/*") && !trimmed.startsWith("*") && trimmed.endsWith("}")) {
            indent--;
          }

          const indented = trimmed.padStart(trimmed.length + indent * 4, " ");

          if (!trimmed.startsWith("/*") && !trimmed.startsWith("*") && trimmed.endsWith("{")) {
            indent++;
          }

          if (
            indent < 1 &&
            ((trimmed.startsWith("export") && !str.endsWith("*/")) || trimmed.startsWith("/**"))
          ) {
            return [indent, `${str}\n\n${indented}`];
          }

          const isJSDoc = trimmed.startsWith("*");

          return [indent, `${str}\n${isJSDoc ? " " : ""}${indented}`];
        },
        [0, ""] as [number, string]
      );

      console.log(`Printing ${modName}...`);

      return output;
    } catch (err) {
      console.error(`Failed to generate namespace: ${this.name}`);
      console.error(err);
      return null;
    }
  }

  static fromXML(modName: string, repo: GirXML): GirNamespace {
    console.log(`Parsing ${modName}...`);
    const defaultImports = ["GObject", "Gio", "GLib"].filter(a => a !== modName);

    const building = new GirNamespace(modName);
    const includes = repo.repository.include || [];
    const ns = repo.repository.namespace[0];

    building.imports.push(...defaultImports);

    building.imports.push(
      ...includes.map(i => i.$.name).filter(name => !defaultImports.includes(name) && modName !== name)
    );

    // Constants
    if (ns.constant) {
      ns.constant
        .filter(isIntrospectable)
        .map(constant => GirConst.fromXML(modName, building, null, constant))
        .forEach(c => building.members.set(c.name, c));
    }

    // Get the requested functions
    if (ns.function) {
      ns.function
        .filter(isIntrospectable)
        .map(func => GirFunction.fromXML(modName, building, null, func))
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.callback) {
      ns.callback
        .filter(isIntrospectable)
        .map(callback => GirCallback.fromXML(modName, building, null, callback))
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns["glib:boxed"]) {
      ns["glib:boxed"]
        .filter(isIntrospectable)
        .map(boxed => new GirAlias({ name: boxed.$["glib:name"], type: VariableType.nullable("object") }))
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.enumeration) {
      // Get the requested enums
      ns.enumeration
        .map(enumeration => {
          if (enumeration.$["glib:error-domain"]) {
            return GirError.fromXML(modName, building, null, enumeration);
          } else {
            return GirEnum.fromXML(modName, building, null, enumeration);
          }
        })
        .forEach(c => building.members.set(c.name, c));
    }

    // Bitfield is a type of enum
    if (ns.bitfield) {
      ns.bitfield
        .filter(isIntrospectable)
        .map(field => GirEnum.fromXML(modName, building, this, field))
        .forEach(c => building.members.set(c.name, c));
    }

    // Get the requested classes
    if (ns.class) {
      ns.class
        .filter(isIntrospectable)
        .map(klass => GirClass.fromXML(modName, building, this, klass))
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.record) {
      ns.record
        .filter(isIntrospectable)
        // _ marks these records as private.
        .filter(b => !b.$.name.startsWith("_"))
        // Don't generate records for structs
        .filter(b => typeof b.$["glib:is-gtype-struct-for"] !== "string")
        .map(record => GirRecord.fromXML(modName, building, record))
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.union) {
      ns.union
        .filter(isIntrospectable)
        .map(union => GirRecord.fromXML(modName, building, union))
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.interface) {
      ns.interface
        .map(inter => GirInterface.fromXML(modName, building, inter))
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
              if (
                !building.hasSymbol(t.$.name) &&
                !resolvePrimitiveType(t.$.name) &&
                !t.$.name.includes(".")
              ) {
                return { $: { name: "unknown", "c:type": "unknown" } };
              }

              return t;
            });

          return b;
        })
        .map(alias => GirAlias.fromXML(modName, building, null, alias))
        .filter((alias): alias is GirAlias => alias != null)
        .forEach(c => building.members.set(c.name, c));
    }

    return building;
  }
}
