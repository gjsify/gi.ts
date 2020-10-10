import { Command, flags } from '@oclif/command';

import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";

import { dirname, join as buildPath } from "path";

import { SanitizedIdentifiers } from "@gi.ts/lib/dist/gir/util";

import { GirXML, parser } from "@gi.ts/parser";


import { resolveLibraries } from "../util";

import * as lib from "@gi.ts/lib";

import { PropertyCase } from '@gi.ts/lib';
import { GirNSRegistry } from '@gi.ts/lib/dist/gir/registry';

export interface DocDescription {
  name: string;
  api_version: string;
  c_prefix?: string;
  path: string;
  id: string;
  slug: string;
  version: string;
}



type Unknown<T> = { [key in keyof T]?: unknown };


type OutputFormat = "file" | "folder";
type Format = "dts" | "json";

export interface GenerationOptions {
  resolveTypeConflicts: boolean;
  inferGenerics: boolean;
  promisify: boolean;
  propertyCase: PropertyCase;
  withDocs: boolean;
  outputFormat: OutputFormat;
  format: Format;
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

class ConfigurationError extends Error {

}



export default class Generate extends Command {
  static description = 'generate documentation files'

  static examples = [
    `$ gi-ts generate
`,
  ]

  static flags = {
    help: flags.help(),
    out: flags.string({}),
    format: flags.enum<Format | undefined>({ options: ["dts", "json"] }),
    inferGenerics: flags.boolean({}),
    promisify: flags.boolean({}),
    propertyCase: flags.enum<PropertyCase | undefined>({ options: ["both", "underscore", "camel"] }),
    outputFormat: flags.enum<OutputFormat | undefined>({ options: ["file", "folder"] }),
    resolveTypeConflicts: flags.boolean({}),
    withDocs: flags.boolean({}),
    versionedOutput: flags.boolean({}),
    versionedImports: flags.boolean({}),
    importPrefix: flags.string({}),
    emitMetadata: flags.boolean({}),
    verbose: flags.boolean({ char: "v", description: "prints detailed per-member generation info " })
  };

  static args = [{ name: 'file' }];

  async run() {
    const { args, flags } = this.parse(Generate);

    let docsPath = "docs.json";

    if (args['file']) {
      docsPath = args['file'];
      this.log(`Loading docs.json from ${docsPath}...`);
    } else {
      this.log("Loading docs.json...");
    }

    const docs: {
      libraries?: { [lib: string]: string | string[] }
      options?: Unknown<CLIOptions>
    } = JSON.parse(
      readFileSync(buildPath(process.cwd(), docsPath), { encoding: "utf-8" })
    );

    // Default options

    // --verbose, -v
    let verbose = false;

    // --outputFormat=file
    let outputFormat: OutputFormat = "file" as const;

    // --loadDocs
    let loadDocs = false;
    let withDocs = false;

    // --resolveTypeConflicts
    let resolveTypeConflicts = true;

    // --inferGenerics
    let inferGenerics = true;

    // --promisify
    let promisify = false;

    // --versionedOutput
    let versionedOutput = false;
    // --versionedOutput
    let versionedImports = false;

    // --importPrefox=@gi.ts/
    let importPrefix = "" as string;

    // --emitMetadata
    let emitMetadata = false;

    let propertyCase: PropertyCase = "both";
    let format: "dts" | "json" = "dts" as const;
    let file_extension = "d.ts";
    let default_directory = "./types";
    let output_directory: string | null = null;

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

        throw new ConfigurationError(`${flag} expects either true or false.`);
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

        throw new ConfigurationError(`${flag} expects a string.`);
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

        throw new ConfigurationError(`${flag} expects one of ${types.join(', ')}.`);
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

    emitMetadata ||= flags.emitMetadata;
    versionedOutput ||= flags.versionedOutput;
    versionedImports ||= flags.versionedImports;
    resolveTypeConflicts ||= flags.resolveTypeConflicts;
    inferGenerics ||= flags.inferGenerics;
    promisify ||= flags.promisify;
    withDocs ||= flags.withDocs;

    // Verbose isn't allowed as a configuration option.
    verbose = flags.verbose;

    if (flags.importPrefix) {
      importPrefix = flags.importPrefix;
    }

    if (flags.format) {
      setFormat(flags.format);
    }

    if (flags.propertyCase) {
      propertyCase = flags.propertyCase;
    }

    if (flags.outputFormat) {
      outputFormat = flags.outputFormat;
    }

    if (flags.out) {
      output_directory = flags.out;
    }

    const output_base = output_directory ?? default_directory;
    const overrides_base = buildPath(__dirname, "../overrides");
    const overrides_local_base = "./overrides";

    const registry = new GirNSRegistry();

    type GirMap = Map<string, {
      [version: string]: GirXML
    }>;

    const build = (gir: GirMap) => {
      // Load all the docs
      for (let [, docs] of gir.entries()) {
        for (const [, xml] of Object.entries(docs)) {
          registry.load(xml, {
            loadDocs,
            propertyCase,
            verbose
          });
        }
      }

      registry.transform({
        inferGenerics,
        verbose
      });

      // Generate the content
      for (let [name, docs] of gir.entries()) {
        for (const [version] of Object.entries(docs)) {
          let generated: [string, lib.Metadata] | null = null;

          switch (format) {
            case "json":
              generated = lib.generateJson({
                format,
                propertyCase,
                promisify,
                resolveTypeConflicts,
                withDocs,
                versionedOutput,
                versionedImports,
                importPrefix,
                emitMetadata,
                verbose
              }, registry, name, version);
              break;
            case "dts":
              generated = lib.generateModule({
                format,
                propertyCase,
                promisify,
                resolveTypeConflicts,
                withDocs,
                versionedOutput,
                versionedImports,
                importPrefix,
                emitMetadata,
                verbose
              }, registry, name, version);
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
              this.log(`Adding overrides to ${output} from ${overrides_file}...`);
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

    this.log("Loading GIR files...");

    await Promise.all(
      Object.keys(docs?.libraries ?? {}).map(async (name, i) => {
        const library = girs.get(name);

        if (library) {
          for (const version of Object.keys(library)) {
            const doc = library[version];

            const src = readFileSync(doc.path, { encoding: "utf8" });

            const result = await parser.parseGir(src);

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

    this.log("Generated!");
  }
}
