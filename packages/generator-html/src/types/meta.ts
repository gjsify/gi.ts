import { Imports } from './nodes.js';

export interface NamespaceMetadata {
  imports: Imports;
  namespace: string;
  version: string;
}
