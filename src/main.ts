import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { join as buildPath } from "path";
import { parseString, convertableToString } from "xml2js";
import { promisify as $ } from "util";

import { GirXML } from "./xml";
import { GirNSRegistry } from "./gir";

export interface DocDescription {
  name: string;
  api_version: string;
  c_prefix?: string;
  path: string;
  id: string;
  slug: string;
  version: string;
}

// Promisify xml2js' parseString
const parseStringAsync = async <T>(str) =>
  await $<convertableToString, T>(parseString)(str);

// Todo fix this in node/common.js (the ARGV doesn't include the first two arguments!)
const output_base = process.argv[2] || process.argv[0];

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
        console.log(
          `${i} ${name}: Not generating ${doc.id} as another API version was already generated.`
        );

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
  .then(cfg => build(cfg.filter(c => c !== null), gir))
  .catch(err => console.error(err));

const registry = new GirNSRegistry();

function generateModule(name) {
  const x = registry.namespace(name);
  return x ? x.asString(name, registry) : "";
}

function build(docs, gir) {
  // Load all the docs
  for (let doc of docs) {
    const { name } = doc;
    registry.load(name, gir.get(name));
  }

  // Generate the content
  for (let doc of docs) {
    const { name } = doc;

    const contents = generateModule(name);

    const output = doc.name as string;
    const dir = buildPath(output_base, output.toLowerCase());
    const file = buildPath(dir, "index.d.ts");

    if (!existsSync(dir)) {
      mkdirSync(dir);
    }

    writeFileSync(file, contents);

    const jsAdapter = buildPath(dir, "index.js");

    writeFileSync(
      jsAdapter,
      `/** @type {import('${name}')} */\nexport default ({});`
    );
  }
}
