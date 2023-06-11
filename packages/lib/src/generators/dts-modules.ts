import { FormatGenerator } from "./generator";
import { GirNamespace, promisifyNamespaceFunctions } from "../gir/namespace";

import {
  GirBaseClass,
  GirRecord,
  GirInterface,
  GirClass,
  filterConflicts,
  filterFunctionConflict,
  FilterBehavior,
  promisifyFunctions
} from "../gir/class";
import { GirConst } from "../gir/const";
import { GirEnum, GirError, GirEnumMember } from "../gir/enum";
import { GirProperty, GirField } from "../gir/property";
import { GirSignal, GirSignalType } from "../gir/signal";
import {
  GirFunction,
  GirConstructor,
  GirFunctionParameter,
  GirCallback,
  GirDirectAllocationConstructor
} from "../gir/function";
import { GirClassFunction, GirStaticClassFunction, GirVirtualClassFunction } from "../gir/function";
import { sanitizeIdentifierName, isInvalid, resolveDirectedType } from "../gir/util";
import {
  TypeExpression,
  TypeIdentifier,
  NativeType,
  AnyType,
  VoidType,
  StringType,
  NumberType,
  ArrayType,
  GirBase,
  AnyFunctionType,
  Generic,
  ConflictType,
  TypeConflict,
  BinaryType
} from "../gir";
import { Direction } from "@gi.ts/parser";
import { GirAlias } from "../gir/alias";
import { GenerationOptions } from "../types";

import { override as overrideGLib } from "./dts/glib";
import { override as overrideGObject } from "./dts/gobject";
import { override as overrideGio } from "./dts/gio";
import { DtsGenerator } from "./dts";

export class DtsModuleGenerator extends DtsGenerator {
  constructor(namespace: GirNamespace, options: GenerationOptions) {
    super(namespace, options);
  }


  async generateNamespace(node: GirNamespace): Promise<string | null> {
    const { namespace, options } = this;

    if (options.verbose) {
      console.debug(`Resolving the types of ${namespace.name}...`);
    }

    let suffix = "";

    if (!options.noAdvancedVariants && node.name === "GLib") {
      suffix = `\n${overrideGLib(node)}\n`;
    } else if (node.name === "GObject") {
      suffix = `\n${overrideGObject(node)}\n`;
    } else if (node.name === "Gio") {
      suffix = `\n${overrideGio(node)}\n`;
    }

    try {
      const { name } = node;

      const header = `
/**
 * ${name} ${node.version}
 * 
 * Generated from ${node.package_version.join(".")}
 */
`;
      const base = `

`;

      if (options.promisify) {
        promisifyNamespaceFunctions(node);
      }

      const content = Array.from(node.members.values())
        .map(m => {
          return `${(Array.isArray(m) ? m : [m])
            .map(m => (m.emit ? (m as GirBase).asString(this) : ""))
            .join(`\n`)}`;
        })
        .join(`\n`);

      const pathSuffix = options.outputFormat === "folder" ? "/index.d.ts" : ".d.ts";
      const referenceType = options.importPrefix.startsWith(".") ? "path" : "types";
      const references = [
        ...(node.__dts__references ?? []),
        ...Array.from(node.getImports()).map(
          ([i, version]) =>
            `/// <reference ${referenceType}="${options.importPrefix}${i.toLowerCase()}${
              options.versionedImports ? version.toLowerCase().split(".")[0] : ""
            }${referenceType === "path" ? pathSuffix : ""}" />`
        )
      ].join(`\n`);

      // Resolve imports after we stringify everything else, sometimes we have to ad-hoc add an import.
      const imports = Array.from(node.getImports())
        .map(
          ([i, version]) =>
            `import * as ${i} from 'gi://${i}${options.versionedImports ? `?version=${version}` : ""}';`
        )
        .join(`\n`);

      const moduleIdentifier = `gi://${name}`;
      const versionedModuleIdentifier = `${moduleIdentifier}?version=${node.version}`;

      const [versionedModuleHeader, versionedModuleSuffix] = [
        `declare module "${versionedModuleIdentifier}" {`,
        "}"
      ];
      const moduleDefinition = `declare module "${moduleIdentifier}" {
        export * from "${versionedModuleIdentifier}";
      }`;

      const output = [
        header,
        references,
        versionedModuleHeader,
        imports,
        base,
        content,
        suffix,
        versionedModuleSuffix,
        moduleDefinition
      ].join(`\n\n`);

      if (options.verbose) {
        console.debug(`Printing ${namespace.name}...`);
      }

      return output;
    } catch (err) {
      console.error(`Failed to generate namespace: ${node.name}`);
      console.error(err);

      return null;
    }
  }

  async stringifyNamespace(node: GirNamespace): Promise<string | null> {
    return this.generateNamespace(node);
  }
}
