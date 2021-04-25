import { createContext } from "react";

import { NodeKind } from "@gi.ts/lib/dist/generators/json";
import { NamespaceMetadata } from "./types/meta";

export type NamedNode = { kind: NodeKind; name: string };

export enum PathFormat {
  SLUG_MAJOR = "slug",
  SLUG_MAJOR_MINOR = "slug-major-minor",
  NAME_VERSION = "name-version"
}

export const NamespaceContext = createContext<{
  getNamespaceVersion(namespace: string): string | null;
  getPath<T extends NamedNode>(node: T): string;
  meta: NamespaceMetadata;
  pathFormat: PathFormat;
}>({
  getPath: () => "#",
  getNamespaceVersion: () => null,
  meta: {
    namespace: "No Namespace Found",
    version: "0",
    imports: {}
  },
  pathFormat: PathFormat.SLUG_MAJOR
});
