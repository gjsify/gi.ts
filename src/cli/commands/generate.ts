import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";

import { dirname, join as buildPath } from "path";
import { parseString, convertableToString } from "xml2js";
import { promisify as $ } from "util";

import { SanitizedIdentifiers } from "../../gir/util";

import { GirXML } from "../../xml";
import { GirNSRegistry } from "../../gir/namespace";

import { DtsGenerator } from "../../generators/dts";

import { generify } from "../../generics/generify";
import { inject } from "../../injections/inject";
import { JsonGenerator } from "../../generators/json";
import { resolveLibraries } from "../util";

export interface DocDescription {
  name: string;
  api_version: string;
  c_prefix?: string;
  path: string;
  id: string;
  slug: string;
  version: string;
}

export interface Metadata {
  name: string;
  package_version: string;
  api_version: string;
  imports: { [lib: string]: string };
}

type PropertyCase = "both" | "camel" | "underscore";
type OutputFormat = "file" | "folder";

type Unknown<T> = { [key in keyof T]?: unknown };

export interface GenerationOptions {
  resolveTypeConflicts: boolean;
  inferGenerics: boolean;
  promisify: boolean;
  propertyCase: PropertyCase;
  withDocs: boolean;
  outputFormat: OutputFormat;
  format: "dts" | "json";
  versionedOutput: boolean;
  versionedImports: boolean;
  importPrefix: string;
  emitMetadata: boolean;
}

export interface CLIOptions extends GenerationOptions {
  out: string;
}

export interface LoadOptions {
  loadDocs: boolean;
  propertyCase: PropertyCase;
}

export async function generate() {
  // Default Options

  // --outputFormat=file
  let outputFormat: OutputFormat = "file" as const;

  // --loadDocs=true|false
  let loadDocs = false;
  let withDocs = false;

  // --resolveTypeConflicts=true|false
  let resolveTypeConflicts = true;

  // --inferGenerics=true|false
  let inferGenerics = true;

  // --promisify=true|false
  let promisify = false;

  // --versionedOutput=true|false
  let versionedOutput = false;
  // --versionedOutput=true|false
  let versionedImports = false;

  // --importPrefox=@gi.ts/
  let importPrefix = "" as string;

  // --emitMetadata=true|false
  let emitMetadata = false;

  let propertyCase: PropertyCase = "both";
  let format: "dts" | "json" = "dts" as const;
  let file_extension = "d.ts";
  let default_directory = "./types";
  let output_directory: string | null = null;

  console.log("Loading docs.json...");

  const docs: {
    libraries?: { [lib: string]: string | string[] }
    options?: Unknown<CLIOptions>
  } = JSON.parse(
    readFileSync(buildPath(process.cwd(), "docs.json"), { encoding: "utf-8" })
  );

  function setFormat(format: "dts" | "json") {
    switch (format) {
      case "json":
        file_extension = "json";
        default_directory = "./json";
        break;
      case "dts":
        file_extension = "d.ts";
        default_directory = "./types";
        break;
    }
  }

  // Override default options 

  const { options } = docs;

  function expectsBoolean(flag: string) {
    return (bool: unknown): bool is boolean => {
      if (bool === undefined) {
        return false;
      }

      if (typeof bool === "boolean") {
        return true;
      }

      throw new Error(`${flag} expects either true or false.`);
    }
  }

  function booleanFlag(val: unknown, check: (bool: unknown) => bool is boolean): boolean {
    try {

      let bool = val === "true" ? true : val === "false" ? false : null;

      if (check(bool)) {
        return bool;
      }

      throw "impossible";
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`--${error.message}`);
      }

      throw error;
    }
  }

  function expectsString(flag: string) {
    return (str: unknown): str is string => {
      if (str === undefined) {
        return false;
      }

      if (typeof str === "string") {
        return true;
      }

      throw new Error(`${flag} expects a string.`);
    }
  }

  function expectsStringType<K extends string>(flag: string, types: readonly K[]) {
    return (type: unknown): type is K => {
      if (type === undefined) {
        return false;
      }

      if (types.includes(type as K)) {
        return true;
      }

      throw new Error(`${flag} expects one of ${types.join(', ')}.`);
    };
  }

  const _out = expectsString("out");
  const _format = expectsStringType("format", ["dts", "json"]);
  const _inferGenerics = expectsBoolean("inferGenerics");
  const _promisify = expectsBoolean("promisify");
  const _propertyCase = expectsStringType("propertyCase", ["both", "underscore", "camel"]);
  const _outputFormat = expectsStringType("outputFormat", ["file", "folder"]);
  const _resolveTypeConflicts = expectsBoolean("resolveTypeConflicts");
  const _withDocs = expectsBoolean("withDocs");
  const _versionedOutput = expectsBoolean("versionedOutput");
  const _versionedImports = expectsBoolean("versionedImports");
  const _importPrefix = expectsString("importPrefix");
  const _emitMetadata = expectsBoolean("emitMetadata");

  if (options) {
    if (_out(options.out)) {
      output_directory = options.out;
    }

    if (_format(options.format)) {
      format = options.format;

      setFormat(format);
    }

    if (_inferGenerics(options.inferGenerics)) {
      inferGenerics = options.inferGenerics;
    }

    if (_outputFormat(options.outputFormat)) {
      outputFormat = options.outputFormat;
    }

    if (_promisify(options.promisify)) {
      promisify = options.promisify;
    }

    if (_propertyCase(options.propertyCase)) {
      propertyCase = options.propertyCase;
    }

    if (_resolveTypeConflicts(options.resolveTypeConflicts)) {
      resolveTypeConflicts = options.resolveTypeConflicts;
    }

    if (_withDocs(options.withDocs)) {
      withDocs = options.withDocs;
    }

    if (_versionedOutput(options.versionedOutput)) {
      versionedOutput = options.versionedOutput;
    }

    if (_versionedImports(options.versionedImports)) {
      versionedImports = options.versionedImports;
    }

    if (_importPrefix(options.importPrefix)) {
      importPrefix = options.importPrefix;
    }

    if (_emitMetadata(options.emitMetadata)) {
      emitMetadata = options.emitMetadata;
    }
  }

  if (process.argv.length > 2) {
    try {
      for (const argn of process.argv.slice(2)) {
        const [arg, value = null] = argn.split("=");
        switch (arg) {
          case "--emitMetadata":
            emitMetadata = booleanFlag(value, _emitMetadata);
            break;
          case "--versionedOutput":
            versionedOutput = booleanFlag(value, _versionedOutput);
            break;
          case "--versionedImports":
            versionedImports = booleanFlag(value, _versionedImports);
            break;
          case "--importPrefix":
            if (_importPrefix(value)) {
              importPrefix = value;
            }
            break;
          case "--resolveTypeConflicts":
            resolveTypeConflicts = booleanFlag(value, _resolveTypeConflicts);
            break;
          case "--inferGenerics":
            inferGenerics = booleanFlag(value, _inferGenerics);
            break;
          case "--promisify":
            promisify = booleanFlag(value, _promisify);
            break;
          case "--propertyCase":
            if (_propertyCase(value)) {
              propertyCase = value;
            }
            break;
          case "--outputFormat":
            if (_outputFormat(value)) {
              outputFormat = value;
            }
            break;
          case "--format":
            if (_format(value)) {
              format = value;

              setFormat(format);
            }
            break;
          case "--out":
            if (!value) {
              throw new Error(`No output directory specified!`);
            }
            output_directory = value;
            break;
          case "--withDocs":
            withDocs = true;
            loadDocs = true;
            break;

          default:
            throw new Error(`Unknown argument: ${arg}.`);
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
      } else {
        console.error(error);
      }
    }
  }

  // Promisify xml2js' parseString
  const parseStringAsync = async <T>(str) => await $<convertableToString, T>(parseString)(str);

  const output_base = output_directory ?? default_directory;
  const overrides_base = buildPath(__dirname, "../overrides");
  const overrides_local_base = "./overrides";

  const registry = new GirNSRegistry();

  function generateModule(name: string, version: string): [string, Metadata] | null {
    const ns = registry.namespace(name, version);

    if (ns) {
      const generator = new DtsGenerator(name, ns, {
        format,
        inferGenerics,
        outputFormat,
        promisify,
        propertyCase,
        resolveTypeConflicts,
        withDocs,
        versionedOutput,
        versionedImports,
        importPrefix,
        emitMetadata
      });

      const meta: Metadata = {
        name: ns.name,
        api_version: ns.version,
        package_version: ns.package_version.join('.'),
        imports: Object.fromEntries(ns.imports.entries()),
      };

      const generated = generator.generateNamespace(ns);

      if (!generated) {
        return null;
      }

      return [generated, meta];
    }

    return null;
  }

  function generateJson(name: string, version: string): [string, Metadata] | null {
    const ns = registry.namespace(name, version);

    if (ns) {
      const generator = new JsonGenerator(name, ns, {
        format,
        inferGenerics,
        outputFormat,
        propertyCase,
        promisify,
        resolveTypeConflicts,
        withDocs,
        versionedOutput,
        versionedImports,
        importPrefix,
        emitMetadata
      });

      const meta: Metadata = {
        name: ns.name,
        api_version: ns.version,
        package_version: ns.package_version.join('.'),
        imports: Object.fromEntries(ns.imports.entries()),
      };

      const generated = generator.generateNamespace(ns);

      if (!generated) {
        return null;
      }

      return [generated, meta];
    }

    return null;
  }

  type GirMap = Map<string, {
    [version: string]: GirXML
  }>;

  function build(gir: GirMap) {
    // Load all the docs
    for (let [, docs] of gir.entries()) {
      for (const [, xml] of Object.entries(docs)) {
        registry.load(xml, {
          loadDocs,
          propertyCase
        });
      }
    }

    if (inferGenerics) {
      console.log("Adding generics...");
      generify(registry);
    }

    console.log("Injecting overrides...");
    inject(registry);

    // Generate the content
    for (let [name, docs] of gir.entries()) {
      for (const [version] of Object.entries(docs)) {
        let generated: [string, Metadata] | null = null;

        switch (format) {
          case "json":
            generated = generateJson(name, version);
            break;
          case "dts":
            generated = generateModule(name, version);
            break;
          default:
            throw new Error("Unknown format!");
        }

        if (!generated) {
          console.error(`Failed to generate ${name} ${version}!`);
          continue;
        }

        let [contents, meta] = generated;

        const output = name as string;
        const dir = buildPath(output_base);
        let file: string;

        const output_slug = `${output.toLowerCase()}${versionedOutput ? version.toLowerCase().split('.')[0] : ''}`;

        if (outputFormat === "file") {
          file = buildPath(output_base, `${output_slug}.${file_extension}`);
        } else if (outputFormat === "folder") {
          file = buildPath(output_base, `${output_slug}`, `index.${file_extension}`);
        } else {
          throw new Error(`Unknown output format: ${outputFormat}.`);
        }

        const overrides_files = [
          buildPath(overrides_base, `${output.toLowerCase()}.${file_extension}.in`),
          buildPath(overrides_local_base, `${output.toLowerCase()}.${file_extension}.in`)
        ];

        for (const overrides_file of overrides_files) {
          if (existsSync(overrides_file)) {
            console.log(`Adding overrides to ${output} from ${overrides_file}...`);
            contents += readFileSync(overrides_file, { encoding: "utf-8" });
          }
        }

        if (!existsSync(dir)) {
          mkdirSync(dir, { recursive: true });
        }

        if (outputFormat === "folder") {
          const directory = dirname(file);

          if (!existsSync(directory)) {
            mkdirSync(directory);
          }
        }

        if (emitMetadata) {
          const metaData = JSON.stringify(meta, null, 4);

          if (outputFormat === "folder") {
            const directory = dirname(file);
            const metaPath = buildPath(directory, "doc.json");

            writeFileSync(metaPath, metaData);
          } else {
            const metaPath = buildPath(output_base, `${output_slug}.doc.json`);

            writeFileSync(metaPath, metaData);
          }
        }

        writeFileSync(file, contents);
      }
    }

    console.error("The following types were prefixed with __ to preserve valid JavaScript identifiers.");
    for (const [sanitized, unsanitized] of SanitizedIdentifiers.entries()) {
      console.error(`${unsanitized} = ${sanitized}`);
    }
  }

  const girs = await resolveLibraries(docs.libraries || {})

  const gir: GirMap = new Map();

  console.log("Loading GIR files...");

  await Promise.all(
    Object.keys(docs?.libraries ?? {}).map(async (name, i) => {
      const library = girs.get(name);

      if (library) {
        for (const version of Object.keys(library)) {
          const doc = library[version];

          const src = readFileSync(doc.path, { encoding: "utf8" });

          const result = await parseStringAsync<GirXML>(src);

          gir.set(name, {
            ...gir.get(name) ?? {},
            [version]: result
          });
        }
      } else {
        throw new Error(`Unresolved library: this should never happen.`);
      }
    })
  );

  build(gir);

  console.log("Generated!");
}