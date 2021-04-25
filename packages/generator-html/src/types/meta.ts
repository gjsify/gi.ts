import { Imports } from "./nodes";

export interface NamespaceMetadata {
  imports: Imports;
  namespace: string;
  version: string;
}
