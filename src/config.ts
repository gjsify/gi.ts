/**
 */
// Depends on fs.realpath, inflight, inherits, minimatch, once, path-is-absolute
import { sync as Dirglob } from "glob";

import * as fs from "fs";
// Depends on: sax, xmlbuilder, util.promisify
import { Parser as XMLParser } from "xml2js";

const parser = new XMLParser();

function read_gir(path) {
  const data = fs.readFileSync(path);

  return new Promise((res, rej) =>
    parser.parseString(data, (err, result) => (err ? rej(err) : res(result)))
  );
}

interface Namespace {
  name: string;
  api_version: string;
  c_prefix: string;
}

function process_namespace(namespace): Namespace {
  // adapt the xml2js api
  namespace.attributes = namespace[0]["$"];

  return {
    name: namespace.attributes["name"],
    api_version: namespace.attributes["version"],
    c_prefix: namespace.attributes["c:symbol-prefixes"]
  };
}

function generate_slug(scraper_info) {
  return `${scraper_info.name}${scraper_info.api_version}`
    .toLowerCase()
    .trim()
    .replace(/[^\w-]/g, "");
}

function scraper_code(info) {
  return `${info.name}-${info.api_version}.gir`;
}

type GirInfo = Namespace & {
  path: string;
  id: string;
  slug: string;
};

async function generate(gir_path): Promise<(GirInfo) | null> {
  if (typeof gir_path === "object") return gir_path;

  let gir;

  try {
    console.log("Prepping " + gir_path);
    gir = await read_gir(gir_path);
  } catch (err) {
    console.error(err);
    console.log("Failed for " + gir_path);
    return null;
  }

  const namespace = gir.repository.namespace;

  const ns_info = {
    ...process_namespace(namespace)
  };

  const scraper_info = {
    ...ns_info,
    path: gir_path,
    id: scraper_code(ns_info),
    slug: generate_slug(ns_info)
  };

  return scraper_info;
}

function generate_all(gir_dir?: string): string[] {
  const { XDG_DATA_DIRS } = process.env;

  if (fs.existsSync("./docs.json")) {
    console.log("Using cached docs.json");
    return JSON.parse(fs.readFileSync("./docs.json").toString());
  }

  let glob: string[];

  if (gir_dir) {
    glob = Dirglob(`${gir_dir}/gir-1.0/*.gir`);
  } else {
    glob = XDG_DATA_DIRS.split(":")
      .map(dir => {
        return dir + "gir-1.0/*.gir"
      })
      .reduce((prev, dir) => [...prev, ...Dirglob(dir)], []);
  }

  console.log(glob);

  return glob;
}

Promise.all(generate_all().map(l => generate(l)))
  .then(res => {
    const x = async () => {
      const compiled = res.filter(a => a != null);

      fs.writeFileSync("./docs.json", JSON.stringify(compiled, null, 4));
    };

    return x();
  })
  .then(_ => {
    console.log("Rendered");
  })
  .catch(err => console.error(err));
