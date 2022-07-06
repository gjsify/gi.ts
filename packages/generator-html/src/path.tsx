import React, { createContext } from 'react';

import { NodeKind } from '@gi.ts/lib/generators/json.js';
import { NamespaceMetadata } from './types/meta.js';

export type NamedNode = { kind: NodeKind; name: string };

export enum PathFormat {
  SLUG_MAJOR = 'slug',
  SLUG_MAJOR_MINOR = 'slug-major-minor',
  NAME_VERSION = 'name-version'
}

export const Link: React.FC<{
  to: string;
}> = ({ to, children = to }) => <a href={to}>{children}</a>;

export type LinkElement = React.FC<{ to: string; }>;

export const LinkContext = createContext<LinkElement>(Link);

export const NamespaceContext = createContext<{
  getNamespaceVersion(namespace: string): string | null;
  getPath<T extends NamedNode>(node: T): string;
  meta: NamespaceMetadata;
  pathFormat: PathFormat;
}>({
  getPath: () => '#',
  getNamespaceVersion: () => null,
  meta: {
    namespace: 'No Namespace Found',
    version: '0',
    imports: {}
  },
  pathFormat: PathFormat.SLUG_MAJOR
});
