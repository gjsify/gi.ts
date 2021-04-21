import { GirBase, NullableType, ObjectType, BinaryType, VoidType, PromiseType, BooleanType, TupleType, TypeIdentifier, ClosureType } from "../gir";
import { GirXML, NamespacedElement } from "@gi.ts/parser";
import { isPrimitiveType } from "./util";

import { GirClass, GirInterface, GirRecord, GirBaseClass } from "./class";
import { GirFunction, GirCallback } from "./function";
import { GirEnum, GirError } from "./enum";
import { GirConst } from "./const";
import { GirAlias } from "./alias";

import { LoadOptions } from "../types";
import { GirNSRegistry } from "./registry";
import { GirVisitor } from "../visitor";

export type GirNSMember = GirBaseClass | GirFunction | GirConst | GirEnum | GirAlias;

export const isIntrospectable = (e: NamespacedElement<{}>) => e && e.$ && (!e.$.introspectable || e.$.introspectable === "1");
export const isDeprecated = (e: NamespacedElement<{}>) => e && e.$ && e.$.deprecated === "1";
export const deprecatedVersion = (e: NamespacedElement<{}>) => e?.$?.["deprecated-version"];
export const introducedVersion = (e: NamespacedElement<{}>) => e?.$?.version;

export function promisifyNamespaceFunctions(namespace: GirNamespace) {
  return namespace.members.forEach(node => {
    if (!(node instanceof GirFunction))
      return;

    if (node.parameters.length < 1)
      return;

    const last_param = node.parameters[node.parameters.length - 1];

    if (!last_param)
      return;

    const last_param_unwrapped = last_param.type.unwrap();

    if (!(last_param_unwrapped instanceof ClosureType))
      return;

    const internal = last_param_unwrapped.type;

    if (internal instanceof TypeIdentifier && internal.is("Gio", "AsyncReadyCallback")) {
      let async_res = [
        ...Array.from(namespace.members.values())
          .filter((m): m is GirFunction => m instanceof GirFunction),
      ].find(m => m.name === `${node.name.replace(/_async$/, '')}_finish` || m.name === `${node.name}_finish`);

      if (async_res) {
        const async_parameters = node.parameters.slice(0, -1).map(p => p.copy());
        const sync_parameters = node.parameters.map(p => p.copy({ isOptional: false }))
        const output_parameters = async_res.output_parameters;

        let async_return = new PromiseType(async_res.return());

        if (output_parameters.length > 0) {
          const raw_return = async_res.return();
          if (raw_return.equals(VoidType) || raw_return.equals(BooleanType)) {
            const [output_type, ...output_types] = output_parameters.map(op => op.type);
            async_return = new PromiseType(new TupleType(output_type, ...output_types));
          } else {
            const [...output_types] = output_parameters.map(op => op.type);
            async_return = new PromiseType(new TupleType(raw_return, ...output_types));
          }
        }

        namespace.members.set(node.name, [
          node.copy({
            parameters: async_parameters,
            return_type: async_return
          }),
          node.copy({
            parameters: sync_parameters,
          }),
          node.copy({
            return_type: new BinaryType(async_return, node.return())
          }),
        ]);
      }
    }
  })
}

export class GirNamespace {
  readonly name: string;
  readonly version: string;
  readonly c_prefixes: string[];

  private imports: Map<string, string> = new Map();

  private _default_imports?: Map<string, string>;
  private _members?: Map<string, GirNSMember | GirNSMember[]>;
  private _enum_constants?: Map<string, readonly [string, string]>;

  package_version!: readonly [string, string] | readonly [string, string, string];
  parent!: GirNSRegistry;

  constructor(name: string, version: string, prefixes: string[]) {
    this.name = name;
    this.version = version;
    this.c_prefixes = [...prefixes];
  }

  get members(): Map<string, GirNSMember | GirNSMember[]> {
    if (!this._members) {
      this._members = new Map<string, GirNSMember | GirNSMember[]>();
    }

    return this._members;
  }

  get default_imports(): Map<string, string> {
    if (!this._default_imports) {
      this._default_imports = new Map<string, string>();
    }

    return this._default_imports;
  }

  get enum_constants(): Map<string, readonly [string, string]> {
    if (!this._enum_constants) {
      this._enum_constants = new Map();
    }

    return this._enum_constants;
  }

  accept(visitor: GirVisitor) {
    for (const key of [...this.members.keys()]) {
      const member = this.members.get(key);

      if (!member) continue;

      if (Array.isArray(member)) {
        this.members.set(key, member.map(m => {
          return m.accept(visitor);
        }));
      } else {
        this.members.set(key, member.accept(visitor));
      }
    }
  }

  getImportsForCPrefix(c_prefix: string): GirNamespace[] {
    return this.parent.namespacesForPrefix(c_prefix);
  }

  hasImport(name: string): boolean {
    return this.default_imports.has(name) || this.imports.has(name);
  }

  private _getImport(name: string): GirNamespace | null {
    let version = this.default_imports.get(name) ?? this.imports.get(name);

    if (name === this.name) {
      return this;
    }

    if (!version) {
      version = this.parent.assertDefaultVersionOf(name);
    }

    const namespace = this.parent.namespace(name, version);

    if (namespace) {
      if (!this.imports.has(namespace.name)) {
        this.imports.set(namespace.name, namespace.version);
      }
    }

    return namespace;
  }

  getInstalledImport(name: string): GirNamespace | null {
    let version = this.default_imports.get(name) ?? this.imports.get(name);

    if (name === this.name) {
      return this;
    }

    if (!version) {
      version = this.parent.defaultVersionOf(name) ?? undefined;
    }

    if (!version) {
      return null;
    }

    const namespace = this.parent.namespace(name, version);

    if (namespace) {
      if (!this.imports.has(namespace.name)) {
        this.imports.set(namespace.name, namespace.version);
      }
    }

    return namespace;
  }

  assertInstalledImport(name: string): GirNamespace {
    let namespace = this._getImport(name);

    if (!namespace) {
      throw new Error(`Failed to import ${name} in ${this.name}, not installed or accessible.`);
    }

    return namespace;
  }

  getImports(): [string, string][] {
    return [...this.imports.entries()].sort(([[a], [b]]) => a.localeCompare(b));
  }

  addImport(ns_name: string, version?: string) {
    if (ns_name !== this.name && !this.imports.has(ns_name)) {
      if (!version) {
        version = this.parent.assertDefaultVersionOf(ns_name) ?? undefined;
      }

      this.imports.set(ns_name, version);
    }
  }

  getMembers(name: string): GirBase[] {
    const members = this.members.get(name);

    if (Array.isArray(members)) {
      return [...members];
    }
    return members ? [members] : [];
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

  static fromXML(repo: GirXML, options: LoadOptions, registry: GirNSRegistry): GirNamespace {
    const ns = repo.repository[0].namespace[0];

    const modName = ns.$["name"];
    const version = ns.$["version"];
    const c_prefix = ns.$?.["c:symbol-prefixes"]?.split(",") ?? [];

    if (options.verbose) {
      console.debug(`Parsing ${modName}...`);
    }

    const building = new GirNamespace(modName, version, c_prefix);
    building.parent = registry;
    const includes = repo.repository[0].include || [];

    includes.map(i => [i.$.name, i.$.version] as const)
      .forEach(
        ([name, version]) => {
          building.default_imports.set(name, version)
        }
      );

    const importConflicts = (el: GirConst | GirBaseClass | GirFunction) => {
      return !building.hasImport(el.name);
    };

    // Constants
    if (ns.constant) {
      ns.constant
        .filter(isIntrospectable)
        .map(constant => GirConst.fromXML(modName, building, options, null, constant))
        .filter(importConflicts)
        .forEach(c => building.members.set(c.name, c));
    }

    // Get the requested functions
    if (ns.function) {
      ns.function
        .filter(isIntrospectable)
        .map(func => GirFunction.fromXML(modName, building, options, null, func))
        .filter(importConflicts)
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.callback) {
      ns.callback
        .filter(isIntrospectable)
        .map(callback => GirCallback.fromXML(modName, building, options, null, callback))
        .filter(importConflicts)
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
        .map(field => GirEnum.fromXML(modName, building, options, building, field, true))
        .forEach(c => building.members.set(c.name, c));
    }

    // The `enum_constants` map maps the C identifiers (GTK_BUTTON_TYPE_Y)
    // to the name of the enum (Button) to resolve references (Gtk.Button.Y)
    Array.from(building.members.values())
      .filter((m): m is GirEnum => m instanceof GirEnum)
      .forEach(m => {
        m.members.forEach(member => {
          building.enum_constants.set(member.c_identifier, [m.name, member.name] as const);
        })
      });

    // Get the requested classes
    if (ns.class) {
      ns.class
        .filter(isIntrospectable)
        .map(klass => GirClass.fromXML(modName, building, options, building, klass))
        .filter(importConflicts)
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
        .filter(importConflicts)
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.union) {
      ns.union
        .filter(isIntrospectable)
        .map(union => GirRecord.fromXML(modName, building, options, union))
        .filter(importConflicts)
        .forEach(c => building.members.set(c.name, c));
    }

    if (ns.interface) {
      ns.interface
        .map(inter => GirInterface.fromXML(modName, building, options, inter))
        .filter(importConflicts)
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

    const [major = null] = building.getMembers("MAJOR_VERSION");
    const [minor = null] = building.getMembers("MINOR_VERSION");
    const [micro = null] = building.getMembers("MICRO_VERSION");

    if (major instanceof GirConst && minor instanceof GirConst && major.value && minor.value) {
      if (micro instanceof GirConst && micro.value) {
        building.package_version = [major.value, minor.value, micro.value] as const;
      } else {
        building.package_version = [major.value, minor.value] as const;
      }
    } else {
      const [major = '', minor = '0', micro] = building.version.split('.').filter(v => v != '');

      if (micro) {
        building.package_version = [major, minor, micro];
      } else {
        building.package_version = [major, minor];
      }
    }

    return building;
  }
}
