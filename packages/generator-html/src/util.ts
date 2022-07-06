import { useCallback, useContext } from 'react';
import { NamespaceContext } from './path.js';
import { NamespaceMetadata } from './types/meta.js';

export const namespacePath = () => {
  const namespaces = useContext(NamespaceContext);

  const path = useCallback(
    (namespace: string, version: string) => {
      switch (namespaces.pathFormat) {
        case 'slug':
          return `${namespace.toLowerCase()}${version.split('.')[0]}`;
        case 'slug-major-minor':
          return `${namespace.toLowerCase()}${version.split('.').slice(0, 2).join('')}`;
        case 'name-version':
          return `${namespace.toLowerCase()}-${version}`;
      }
    },
    [namespaces]
  );

  return path;
};

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

  const path = namespacePath();

  const ref = useCallback(
    (namespace: string, meta: NamespaceMetadata) => {
      const version = getVersion(namespace, meta);

      return path(namespace, version);
    },
    [path, getVersion]
  );

  return ref;
};
