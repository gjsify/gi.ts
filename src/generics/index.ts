import gio from "./gio";

import { GirNSRegistry, GirNamespace } from "../gir/namespace";

function generifyDefinitions(registry: GirNSRegistry) {
  return (definition: { namespace: string; modifier: (namespace: GirNamespace) => void }) => {
    const ns = registry.namespace(definition.namespace);

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
}
