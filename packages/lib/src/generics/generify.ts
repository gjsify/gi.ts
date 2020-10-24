import gio from "./gio";
import glib from "./glib";

import { GirNamespace } from "../gir/namespace";
import { GirNSRegistry } from "../gir/registry";
import { GenericVisitor } from "./visitor";

type NamespaceModifier = (namespace: GirNamespace, inferGenerics: boolean) => void;

function generifyDefinitions(registry: GirNSRegistry, inferGenerics: boolean) {
  return (definition: { namespace: string; version: string; modifier: NamespaceModifier }) => {
    const ns = registry.namespace(definition.namespace, definition.version);

    if (ns) {
      definition.modifier(ns, inferGenerics);
    } else {
      console.error(`Failed to generify ${definition.namespace}`);
    }
  };
}

export function generify(registry: GirNSRegistry, inferGenerics: boolean) {
  const $ = generifyDefinitions(registry, inferGenerics);

  $(gio);
  $(glib);

  const visitor = new GenericVisitor(registry, inferGenerics);

  registry.forEach(namespace => {
    namespace.accept(visitor);
  });
}
