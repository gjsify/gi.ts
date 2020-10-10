import { DtsGenerator } from "./generators/dts";
import { JsonGenerator } from "./generators/json";
import { GirNSRegistry } from "./gir/namespace";
import { GenerationOptions, Metadata } from "./types";

export * as dts from "./generators/dts";

export * as json from "./generators/json";

export * from "./generators/generator";

export * from "./types";

export function generateModule(options: GenerationOptions, registry: GirNSRegistry, name: string, version: string): [string, Metadata] | null {
    const ns = registry.namespace(name, version);

    if (ns) {
        const generator = new DtsGenerator(name, ns, options);

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

export function generateJson(options: GenerationOptions, registry: GirNSRegistry, name: string, version: string): [string, Metadata] | null {
    const ns = registry.namespace(name, version);

    if (ns) {
        const generator = new JsonGenerator(name, ns, options);

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