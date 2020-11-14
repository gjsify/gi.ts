import gio from "./gio";
import glib from "./glib";
import clutter from "./clutter";
import st from "./st";

import { GirNamespace } from "../gir/namespace";
import { GirNSRegistry } from "../gir/registry";
import { GenericVisitor } from "./visitor";

type NamespaceModifier = (namespace: GirNamespace, inferGenerics: boolean) => void;

function generifyDefinitions(registry: GirNSRegistry, inferGenerics: boolean, required: boolean = true) {
  return (definition: { namespace: string; version?: string; modifier: NamespaceModifier }) => {
    const version = definition?.version ?? registry.defaultVersionOf(definition.namespace);

    if (version) {
      const ns = registry.namespace(definition.namespace, version);

      if (ns) {
        definition.modifier(ns, inferGenerics);
        return;
      }
    }

    if (required) {
      console.error(`Failed to generify ${definition.namespace}`);
    }
  };
}

export function generify(registry: GirNSRegistry, inferGenerics: boolean) {
  const $ = generifyDefinitions(registry, inferGenerics);

  $(gio);
  $(glib);

  const $_ = generifyDefinitions(registry, inferGenerics, false);

  $_(clutter);
  $_(st);

  const visitor = new GenericVisitor(registry, inferGenerics);

  registry.forEach(namespace => {
    namespace.accept(visitor);
  });
}
