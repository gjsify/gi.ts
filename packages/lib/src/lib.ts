import { DtsGenerator } from "./generators/dts";
import { JsonGenerator } from "./generators/json";

import { GirNSRegistry } from "./gir/registry";
import { SanitizedIdentifiers } from "./gir/util";

import { GenerationOptions, Metadata } from "./types";

export * as dts from "./generators/dts";

export * as json from "./generators/json";

export * from "./generators/generator";

export * from "./types";

export { GirNSRegistry } from "./gir/registry";
export { Formatter } from "./formatters/formatter";

export function getSanitizedIdentifiers(): ReadonlyMap<string, string> {
    return SanitizedIdentifiers;
}

export function createRegistry(): GirNSRegistry {
    return new GirNSRegistry();
}

export function generateModule(options: GenerationOptions, registry: GirNSRegistry, name: string, version: string): [string, Metadata] | null {
    const ns = registry.namespace(name, version);

    if (ns) {
        const generator = new DtsGenerator(ns, options);
        const generated = generator.generateNamespace(ns);

        if (!generated) {
            return null;
        }

        const meta: Metadata = {
            name: ns.name,
            api_version: ns.version,
            package_version: ns.package_version.join('.'),
            imports: Object.fromEntries(ns.imports.entries()),
        };

        const formatter = registry.getFormatter('dts');
        const formatted = formatter.format(generated);

        return [formatted, meta];
    }

    return null;
}

export function generateJson(options: GenerationOptions, registry: GirNSRegistry, name: string, version: string): [string, Metadata] | null {
    const ns = registry.namespace(name, version);

    if (ns) {
        const generator = new JsonGenerator(ns, options);

        const generated = generator.generateNamespace(ns);

        if (!generated) {
            return null;
        }

        const meta: Metadata = {
            name: ns.name,
            api_version: ns.version,
            package_version: ns.package_version.join('.'),
            imports: Object.fromEntries(ns.imports.entries()),
        };

        const formatter = registry.getFormatter('json');
        const formatted = formatter.format(generated);

        return [formatted, meta];
    }

    return null;
}