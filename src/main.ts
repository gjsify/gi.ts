import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { join as buildPath } from "path";
import { parseString, convertableToString } from "xml2js";
import { promisify as $ } from "util";

import { SanitizedIdentifiers } from "./gir/util";

import { GirXML } from "./xml";
import { GirNSRegistry } from "./gir/namespace";

import { DtsGenerator } from "./generators/dts";

import { generify } from "./generics/generify";
import { inject } from "./injections/inject";
import { JsonGenerator } from "./generators/json";

export interface DocDescription {
  name: string;
  api_version: string;
  c_prefix?: string;
  path: string;
  id: string;
  slug: string;
  version: string;
}

export interface GenerationOptions {
  resolveTypeConflicts: boolean;
  inferGenerics: boolean;
  promisify: boolean;
  withDocs: boolean;
  format: "dts" | "json";
}

export interface LoadOptions {
  loadDocs: boolean;
}

let loadDocs = false;
let withDocs = false;
let resolveTypeConflicts = true;
let inferGenerics = true;
let promisify = false;
let format: "dts" | "json" = "dts" as const;
let file_extension = "d.ts";
let default_directory = "./types";

if (process.argv.length > 2) {
  for (const argn of process.argv.slice(2)) {
    const [arg, value = null] = argn.split("=");
    switch (arg) {
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
}

// Promisify xml2js' parseString
const parseStringAsync = async <T>(str) => await $<convertableToString, T>(parseString)(str);

const output_base = default_directory;
const overrides_base = buildPath(__dirname, "../overrides");
const overrides_local_base = "./overrides";

console.log("Loading docs.json...");
const docs: DocDescription[] = JSON.parse(
  readFileSync(buildPath(process.cwd(), "docs.json"), { encoding: "utf-8" })
);

const gir = new Map<string, GirXML>();

console.log("Loading versions.json...");
let versions = {};

if (existsSync(buildPath(process.cwd(), "versions.json"))) {
  console.log("Found versions.json...");
  versions = JSON.parse(
    readFileSync(buildPath(process.cwd(), "versions.json"), {
      encoding: "utf-8"
    })
  );
} else {
  console.log("No versions.json found!");
}

console.log("Loading GIR files...");
Promise.all(
  docs.map(async (doc, i) => {
    const name = doc.name;
    const src = readFileSync(doc.path, { encoding: "utf8" });

    if (!versions[name] || versions[name] === doc.api_version) {
      const result = await parseStringAsync<GirXML>(src);

      if (gir.has(name)) {
        console.log(`${i} ${name}: Not generating ${doc.id} as another API version was already generated.`);

        return null;
      }
      gir.set(name, result);

      return doc;
    } else {
      console.log(
        `${i} ${name}: Not generating ${doc.id} as its API version is not selected in versions.json.`
      );
      return null;
    }
  })
)
  .then(cfg =>
    build(
      cfg.filter(c => c !== null),
      gir
    )
  )
  .catch(err => console.error(err));

const registry = new GirNSRegistry();

function generateModule(name) {
  const ns = registry.namespace(name);

  const generator = new DtsGenerator(name, registry, {
    format,
    inferGenerics,
    promisify,
    resolveTypeConflicts,
    withDocs
  });

  return ns ? generator.generateNamespace(ns) : "";
}

function generateJson(name) {
  const ns = registry.namespace(name);

  const generator = new JsonGenerator(name, registry, {
    format,
    inferGenerics,
    promisify,
    resolveTypeConflicts,
    withDocs
  });

  return ns ? generator.generateNamespace(ns) : "";
}

function build(docs, gir) {
  // Load all the docs
  for (let doc of docs) {
    const { name } = doc;
    registry.load(name, gir.get(name), {
      loadDocs
    });
  }

  if (inferGenerics) {
    console.log("Adding generics...");
    generify(registry);
  }

  console.log("Injecting overrides...");
  inject(registry);

  // Generate the content
  for (let doc of docs) {
    const { name } = doc;

    let contents: string | null = null;

    switch (format) {
      case "json":
        contents = generateJson(name);
        break;
      case "dts":
        contents = generateModule(name);
        break;
      default:
        throw new Error("Unknown format!");
    }

    const output = doc.name as string;
    const dir = buildPath(output_base);
    const file = buildPath(output_base, `${output.toLowerCase()}.${file_extension}`);

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

  console.error("The following types were prefixed with __ to preserve valid JavaScript identifiers.");
  for (const [sanitized, unsanitized] of SanitizedIdentifiers.entries()) {
    console.error(`${unsanitized} = ${sanitized}`);
  }
}
