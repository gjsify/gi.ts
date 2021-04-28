import { Command, flags } from '@oclif/command';

import prettier from 'prettier';

import * as fs from "fs";
import { promisify as $ } from "util";

const readFile = $(fs.readFile);
const mkdir = $(fs.mkdir);
const writeFile = $(fs.writeFile);

import { dirname, join as buildPath, resolve as resolvePath } from "path";

import { GirXML, parser } from "@gi.ts/parser";

import { resolveLibraries } from "@gi.ts/node-loader";

import * as lib from "@gi.ts/lib";

import { PropertyCase } from '@gi.ts/lib';

class TypeScriptFormatter extends lib.Formatter {
  format(input: string): string {
    try {
      return prettier.format(input, {
        parser: 'typescript',
        printWidth: 120,
        tabWidth: 4
      });
    } catch (error) {
      console.error("Failed to format output...");
      console.error(input);
      throw error;
    }
  }
}

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
type Format = "dts" | "json" | string;

export interface GenerationOptions {
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
  noAdvancedVariants: boolean;
  noPrettyPrint: boolean;
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
    all: flags.boolean({ description: "Generate all found libraries" }),
    help: flags.help(),
    out: flags.string({}),
    format: flags.string({ description: "'dts' or 'json' are bundled, 'html' is available via @gi.ts/generator-html." }),
    inferGenerics: flags.boolean({}),
    promisify: flags.boolean({}),
    propertyCase: flags.enum<PropertyCase | undefined>({ options: ["both", "underscore", "camel"] }),
    outputFormat: flags.enum<OutputFormat | undefined>({ options: ["file", "folder"] }),
    noPrettyPrint: flags.boolean({
      description: "Disables the pretty-printer. For .d.ts files this will significantly speed up generation.",
    }),
    withDocs: flags.boolean({}),
    versionedOutput: flags.boolean({}),
    versionedImports: flags.boolean({}),
    importPrefix: flags.string({}),
    emitMetadata: flags.boolean({}),
    noAdvancedVariants: flags.boolean({}),
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

    let content: string | null = null;

    try {
      content =  fs.readFileSync(buildPath(process.cwd(), docsPath), { encoding: "utf-8" });
    } catch (error) {
      console.error("No docs.json found.");
    }
  
    const docs: {
      libraries?: { [lib: string]: string | string[] },
      dependencies?: { [lib: string]: string | string[] },
      options?: Unknown<CLIOptions>
    } = content ? JSON.parse(content) : {};

    // Default options

    // --all
    let all = false;

    // --verbose, -v
    let verbose = false;

    // --outputFormat=file
    let outputFormat: OutputFormat = "file" as const;

    // --withDocs
    let withDocs = false;

    // --inferGenerics
    let inferGenerics = true;

    // --promisify
    let promisify = false;

    // --versionedOutput
    let versionedOutput = false;
    // --versionedOutput
    let versionedImports = false;

    // --importPrefix=@gi.ts/
    let importPrefix = "" as string;

    // --emitMetadata
    let emitMetadata = false;

    // --noAdvancedVariants
    let noAdvancedVariants = false;

    // --noPrettyPrint
    let noPrettyPrint = false;

    let propertyCase: PropertyCase = "both";
    let format: "dts" | "json" | string = "dts" as const;
    let file_extension = "d.ts";
    let default_directory = "./types";
    let output_directory: string | null = null;

    function setFormat(format: "dts" | "json" | string) {
      switch (format) {
        case "json":
          file_extension = "json";
          default_directory = "./json";
          break;
        case "dts":
          file_extension = "d.ts";
          default_directory = "./types";
          break;
        default:
          file_extension = format;
          default_directory = "./output";
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
    const _format = expectsString("format");
    const _inferGenerics = expectsBoolean("inferGenerics");
    const _promisify = expectsBoolean("promisify");
    const _propertyCase = expectsStringType("propertyCase", ["both", "underscore", "camel"]);
    const _outputFormat = expectsStringType("outputFormat", ["file", "folder"]);
    const _withDocs = expectsBoolean("withDocs");
    const _versionedOutput = expectsBoolean("versionedOutput");
    const _versionedImports = expectsBoolean("versionedImports");
    const _importPrefix = expectsString("importPrefix");
    const _emitMetadata = expectsBoolean("emitMetadata");
    const _noAdvancedVariants = expectsBoolean("noAdvancedVariants");
    const _noPrettyPrint = expectsBoolean("noPrettyPrint");

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

      if (_noAdvancedVariants(options.noAdvancedVariants)) {
        noAdvancedVariants = options.noAdvancedVariants;
      }

      if (_noPrettyPrint(options.noPrettyPrint)) {
        noPrettyPrint = options.noPrettyPrint;
      }
    }

    emitMetadata ||= flags.emitMetadata;
    versionedOutput ||= flags.versionedOutput;
    versionedImports ||= flags.versionedImports;
    inferGenerics ||= flags.inferGenerics;
    promisify ||= flags.promisify;
    withDocs ||= flags.withDocs;
    noAdvancedVariants ||= flags.noAdvancedVariants;
    noPrettyPrint ||= flags.noPrettyPrint;

    // Verbose isn't allowed as a configuration option.
    verbose = flags.verbose;

    // --all isn't allowed as a configuration option.
    all = flags.all;

    if (flags.importPrefix) {
      importPrefix = flags.importPrefix;
    }

    if (flags.format) {
      format = flags.format;

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

    const registry = lib.createRegistry();

    // Register a 'dts' formatter so our output looks decent.
    registry.registerFormatter('dts', new TypeScriptFormatter());

    type GirMap = Map<string, {
      [version: string]: () => GirXML
    }>;

    const girs = await resolveLibraries({
      ...(docs.dependencies || {}),
      ...(docs.libraries || {})
    }, verbose);

    const gir: GirMap = new Map();

    this.log("Loading GIR files...");

    for (const [name, library] of Array.from(girs.entries())) {
      for (const version of Object.keys(library)) {
        const doc = library[version];
        const src = await readFile(doc.path, { encoding: "utf8" });
        const result = () => parser.parseGir(src);

        gir.set(name, {
          ...gir.get(name) ?? {},
          [version]: result
        });
      }
    }

    registry.registerLoader({
      load(namespace, version) {
        if (verbose) {
          console.log(`Loading ${namespace} ${version}...`);
        }

        const xml = gir.get(namespace)?.[version]?.() ?? null;

        return xml;
      },
      loadAll(namespace) {
        if (verbose) {
          console.log(`Loading all versions of ${namespace}...`);
        }

        const xml = gir.get(namespace);

        if (xml) {
          return Object.values(xml).map(x => x());
        }

        return [];
      }
    }, {
      loadDocs: withDocs,
      propertyCase,
      verbose
    });

    registry.transform({
      inferGenerics,
      verbose
    });

    let girsToGenerate: { [lib: string]: string | string[]; };

    if (all) {
      girsToGenerate = Object.fromEntries([...girs.entries()].map(([k, v]) => {
        return [k, Object.keys(v)] as const; 
      }));
    } else if (typeof docs.libraries === 'object') {
      girsToGenerate = docs.libraries;
     
    } else {
      console.error('No libraries selected to generate.');
      return;
    }

    const dir = buildPath(output_base);
    try {
      await mkdir(dir, { recursive: true });
    } catch { }

    // Generate the content
    await Promise.all(Object.entries(girsToGenerate).map(async ([name, versions]) => {
      for (const version of Array.isArray(versions) ? versions : [versions]) {
        let generated: lib.GeneratedModule | null = null;

        const output = name as string;
        const version_suffix = versionedOutput ? version.toLowerCase().split('.')[0] : '';
        const output_slug = `${output.toLowerCase()}${version_suffix}`;

        generated = await lib.generateModule({
          outputPath: resolvePath(buildPath(output_base, output_slug)),
          format,
          promisify,
          withDocs,
          versionedOutput,
          versionedImports,
          noAdvancedVariants,
          importPrefix,
          emitMetadata,
          verbose,
          noPrettyPrint
        }, registry, name, version);

        if (!generated) {
          console.error(`Failed to generate ${name} ${version}!`);
          return;
        }

        let { formattedOutput, meta } = generated;
        let file: string;

        if (outputFormat === "file") {
          file = buildPath(output_base, `${output_slug}.${file_extension}`);
        } else if (outputFormat === "folder") {
          file = buildPath(output_base, `${output_slug}`, `index.${file_extension}`);
        } else {
          throw new Error(`Unknown output format: ${outputFormat}.`);
        }


        if (outputFormat === "folder") {
          const directory = dirname(file);

          try {
            await mkdir(directory);
          } catch { }
        }

        if (emitMetadata) {
          const metaData = JSON.stringify(meta, null, 4);

          if (outputFormat === "folder") {
            const directory = dirname(file);
            const metaPath = buildPath(directory, "doc.json");

            await writeFile(metaPath, metaData);
          } else {
            const metaPath = buildPath(output_base, `${output_slug}.doc.json`);

            await writeFile(metaPath, metaData);
          }
        }

        await writeFile(file, formattedOutput);
      }
    }));

    const identifiers = lib.getSanitizedIdentifiers();

    if (identifiers.size > 0) {
      console.error("The following types were prefixed with __ to preserve valid JavaScript identifiers.");
      for (const [sanitized, unsanitized] of identifiers.entries()) {
        console.error(`${unsanitized} = ${sanitized}`);
      }
    }

    this.log("Generated!");
  }
}
