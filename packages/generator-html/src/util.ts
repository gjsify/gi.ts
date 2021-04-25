import { useCallback, useContext } from "react";
import { NamespaceContext } from "./path";
import { NamespaceMetadata } from "./types/meta";

export const namespaceReference = () => {
  const namespaces = useContext(NamespaceContext);

  const getVersion = useCallback(
    (namespace: string, meta: NamespaceMetadata) => {
      if (namespace === meta.namespace) {
        return meta.version;
      }

      const imported = meta.imports[namespace];

      if (!imported) return namespaces.getNamespaceVersion(namespace) ?? meta.version;

      return imported;
    },
    [namespaces]
  );

  const ref = useCallback(
    (namespace: string, meta: NamespaceMetadata) => {
      const version = getVersion(namespace, meta);

      switch (namespaces.pathFormat) {
        case "slug":
          return `${namespace.toLowerCase()}${version.split(".")[0]}`;
        case "slug-major-minor":
          return `${namespace.toLowerCase()}${version.split(".").slice(0, 2).join("")}`;
        case "name-version":
          return `${namespace.toLowerCase()}-${version}`;
      }
    },
    [getVersion]
  );

  return ref;
};
