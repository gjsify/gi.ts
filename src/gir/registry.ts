import { GirXML } from "@gi.ts/parser";
import { generify } from "../generics/generify";
import { inject } from "../injections/inject";
import { LoadOptions, TransformOptions } from "../types";
import { TwoKeyMap } from "../util";
import { GirNamespace } from "./namespace";

export class GirNSRegistry {
    mapping: TwoKeyMap<string, string, GirNamespace> = new TwoKeyMap();
    c_mapping: Map<string, GirNamespace[]> = new Map();

    forEach(op: (namespace: GirNamespace) => void) {
        this.mapping.forEach(op);
    }

    namespace(name: string, version: string): GirNamespace | null {
        return this.mapping.get(name, version) || null;
    }

    namespacesForPrefix(c_prefix): GirNamespace[] {
        return this.c_mapping.get(c_prefix) ?? [];
    }

    transform(options: TransformOptions) {
        if (options.inferGenerics) {
            console.log("Adding generics...");
            generify(this);
        }

        console.log("Injecting overrides...");
        inject(this);
    }

    defaultVersionOf(name: string): string | null {
        const meta = this.mapping.getIfOnly(name);

        if (meta) {
            return meta[0];
        }

        return null;
    }

    assertNamespace(name: string, version: string): GirNamespace {
        const namespace = this.mapping.get(name, version);

        if (!namespace) {
            throw new Error(`Namespace '${name}' not found.`);
        }

        return namespace;
    }

    load(gir: GirXML, options: LoadOptions) {
        const namespace = GirNamespace.fromXML(gir, options, this);

        this.mapping.set(namespace.name, namespace.version, namespace);

        let c_map = this.c_mapping.get(namespace.c_prefix) || [];

        c_map.push(namespace);

        this.c_mapping.set(namespace.c_prefix, c_map);
    }
}