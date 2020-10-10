// Depends on fs.realpath, inflight, inherits, minimatch, once, path-is-absolute
import { sync as Dirglob } from "glob";

import * as fs from "fs";

// Depends on: sax, xmlbuilder, util.promisify
import { Parser as XMLParser } from "xml2js";

const parser = new XMLParser();

function read_gir(path) {
    const data = fs.readFileSync(path);

    return new Promise((res, rej) => parser.parseString(data, (err, result) => (err ? rej(err) : res(result))));
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

export async function generate(gir_path): Promise<GirInfo | null> {
    if (typeof gir_path === "object") return gir_path;

    let gir;

    try {
        console.log(`Found ${gir_path}...`);
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

let force = false;

export function generate_all(gir_dir?: string): string[] {
    const { XDG_DATA_DIRS } = process.env;

    if (fs.existsSync("./docs-lock.json")) {
        if (force) {
            fs.unlinkSync("./docs-lock.json");
        } else {
            console.log("Using cached docs-lock.json");
            return JSON.parse(fs.readFileSync("./docs-lock.json").toString());
        }
    }

    let glob: string[];

    if (gir_dir) {
        glob = Dirglob(`${gir_dir}/gir-1.0/*.gir`);
    } else if (XDG_DATA_DIRS) {
        glob = XDG_DATA_DIRS.split(":")
            .map(dir => {
                return [`${dir}/*.gir`, `${dir}/gir-1.0/*.gir`];
            })
            .reduce((prev, [dir, girdir]) => [...prev, ...Dirglob(dir), ...Dirglob(girdir)], []);
    } else {
        throw new Error(`No directory passed and XDG_DATA_DIRS is undefined.`);
    }

    return glob;
}

export async function resolveLibraries(libraries: { [key: string]: string | string[] }): Promise<Map<string, {
    [version: string]: GirInfo
}>> {
    let allLibraries = (
        await Promise.all(
            generate_all().map(l => generate(l))
        )
    ).filter((l): l is GirInfo => l != null);

    const libraryMap = new Map<string, { [key: string]: GirInfo }>();

    for (const library of allLibraries) {
        const versions = libraries[library.name];

        if (!(library.name in libraries) || (
            // { Gtk: '3.0' }
            typeof versions === 'string' && library.api_version === libraries[library.name] ||
            // { Gtk: ['3.0', '4.0'] }
            Array.isArray(versions) && versions.includes(library.api_version)
        )) {
            const map = libraryMap.get(library.name) ?? {};

            map[library.api_version] = library;

            libraryMap.set(library.name, map);
        }
    }

    const unversionedLibraries = Object.entries(libraries).map(([key]) => ([key, libraryMap.get(key) ?? null]) as const);

    const missingLibraries = unversionedLibraries.filter(([, l]) => l === null);

    if (missingLibraries.length > 0) {
        throw Error(`Missing Libraries!\n.The following libraries were not found: ${missingLibraries.map(([l]) => l).join(', ')}.`);
    }

    const fullfilledLibraries = unversionedLibraries.filter((pair): pair is [string, { [key: string]: GirInfo }] => pair[1] !== null);
    const incorrectLibraries = fullfilledLibraries.map(([name, l]) => {
        const versions = libraries[name];
        if (typeof versions !== 'string') {
            return [name, versions.filter(v => !Object.keys(l).includes(v))] as const;
        }

        return [name, [] as string[]] as const;
    }).filter(([, missingVersions]) => missingVersions.length > 0);

    for (const [name, missingVersions] of incorrectLibraries) {
        console.error(`Library ${name} is missing versions: ${missingVersions.join(', ')}.`)
    }

    if (incorrectLibraries.length > 0) {
        throw new Error(`Missing library versions!`);
    }

    return libraryMap;
}
