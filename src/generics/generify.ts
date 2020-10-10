import gio from "./gio";

import { GirNamespace } from "../gir/namespace";
import { GirNSRegistry } from "../gir/registry";
import { GenericVisitor } from "./visitor";

function generifyDefinitions(registry: GirNSRegistry) {
  return (definition: { namespace: string; version: string; modifier: (namespace: GirNamespace) => void }) => {
    const ns = registry.namespace(definition.namespace, definition.version);

    if (ns) {
      definition.modifier(ns);
    } else {
      console.error(`Failed to generify ${definition.namespace}`);
    }
  };
}

export function generify(registry: GirNSRegistry) {
  const $ = generifyDefinitions(registry);

  $(gio);

  const visitor = new GenericVisitor(registry);

  registry.forEach(namespace => {
    namespace.accept(visitor);
  });
}
