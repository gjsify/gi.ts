import glib from "./glib";
import gobject from "./gobject";
import gio from "./gio";

import { GirNSRegistry, GirNamespace } from "../gir/namespace";

export type NamespaceInjection = (namespace: GirNamespace, registry: GirNSRegistry) => void;

function injectDefinitions(registry: GirNSRegistry) {
  return (definition: { namespace: string; version: string; modifier: NamespaceInjection }) => {
    const ns = registry.assertNamespace(definition.namespace, definition.version);

    definition.modifier(ns, registry);
  };
}

export function inject(registry: GirNSRegistry) {
  const $ = injectDefinitions(registry);

  $(glib);
  $(gobject);
  $(gio);
}
