import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { join as buildPath } from "path";
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

type PropertyCase = "both" | "camel" | "underscore";

export interface GenerationOptions {
  resolveTypeConflicts: boolean;
  inferGenerics: boolean;
  promisify: boolean;
  propertyCase: PropertyCase;
  withDocs: boolean;
  format: "dts" | "json";
  versionedOutput: boolean;
}

export interface LoadOptions {
  loadDocs: boolean;
  propertyCase: PropertyCase;
}

export async function generate() {
  // Default Options

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

  let propertyCase: PropertyCase = "both";
  let format: "dts" | "json" = "dts" as const;
  let file_extension = "d.ts";
  let default_directory = "./types";

  if (process.argv.length > 2) {
    try {
      for (const argn of process.argv.slice(2)) {
        const [arg, value = null] = argn.split("=");
        switch (arg) {
          case "--versionedOutput":
            if (value !== "true" && value !== "false") {
              throw new Error(`--versionedOutput accepts either 'true' or 'false'`);
            }
            versionedOutput = value === "true";
            break;
          case "--resolveTypeConflicts":
            if (value !== "true" && value !== "false") {
              throw new Error(`--resolveTypeConflicts accepts either 'true' or 'false'`);
            }
            resolveTypeConflicts = value === "true";
            break;
          case "--inferGenerics":
            if (value !== "true" && value !== "false") {
              throw new Error(`--inferGenerics accepts either 'true' or 'false'`);
            }

            inferGenerics = value === "true";
            break;
          case "--promisify":
            if (value !== "true" && value !== "false") {
              throw new Error(`--promisify accepts either 'true' or 'false'`);
            }

            promisify = value === "true";
            break;
          case "--propertyCase":
            function isValid(value: string): value is PropertyCase {
              return ["both", "camel", "underscore"].includes(value);
            }

            if (typeof value !== "string" || !isValid(value)) {
              throw new Error(`--propertyCase accepts either 'both', 'camel' or 'underscore' for property casing.`);
            }

            propertyCase = value;
            break;
          case "--out":
            if (!value) {
              throw new Error(`No output directory specified!`);
            }

            default_directory = value;
            break;
          case "--withDocs":
            withDocs = true;
            loadDocs = true;
            break;
          case "--format":
            if (value && (["dts", "json"].includes as (v: string) => v is "dts" | "json")(value)) {
              format = value;

              switch (format) {
                case "json":
                  file_extension = "json";
                  default_directory = "./json";
                  break;
              }
            } else {
              throw new Error(`Unknown format: ${value}`);
            }
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

  const output_base = default_directory;
  const overrides_base = buildPath(__dirname, "../overrides");
  const overrides_local_base = "./overrides";

  console.log("Loading docs.json...");
  const docs: { libraries?: { [lib: string]: string | string[] } } = JSON.parse(
    readFileSync(buildPath(process.cwd(), "docs.json"), { encoding: "utf-8" })
  );

  const registry = new GirNSRegistry();

  function generateModule(name: string, version: string) {
    const ns = registry.namespace(name, version);

    if (ns) {
      const generator = new DtsGenerator(name, ns, {
        format,
        inferGenerics,
        promisify,
        propertyCase,
        resolveTypeConflicts,
        withDocs,
        versionedOutput
      });

      return generator.generateNamespace(ns);
    }

    return "";
  }

  function generateJson(name: string, version: string) {
    const ns = registry.namespace(name, version);

    if (ns) {
      const generator = new JsonGenerator(name, ns, {
        format,
        inferGenerics,
        propertyCase,
        promisify,
        resolveTypeConflicts,
        withDocs,
        versionedOutput
      });

      return generator.generateNamespace(ns);
    }

    return "";
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
      for (const [version, xml] of Object.entries(docs)) {
        let contents: string | null = null;

        switch (format) {
          case "json":
            contents = generateJson(name, version);
            break;
          case "dts":
            contents = generateModule(name, version);
            break;
          default:
            throw new Error("Unknown format!");
        }

        const output = name as string;
        const dir = buildPath(output_base);
        const file = buildPath(output_base, `${output.toLowerCase()}${versionedOutput ? version.toLowerCase().split('.')[0] : ''}.${file_extension}`);

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