export type PropertyCase = "both" | "camel" | "underscore";
export type Format = "dts" | "json";

export interface LoadOptions {
    loadDocs: boolean;
    propertyCase: PropertyCase;
}

export interface GenerationOptions {
    resolveTypeConflicts: boolean;
    inferGenerics: boolean;
    promisify: boolean;
    propertyCase: PropertyCase;
    withDocs: boolean;
    format: Format;
    versionedOutput: boolean;
    versionedImports: boolean;
    importPrefix: string;
    emitMetadata: boolean;
}

export interface Metadata {
    name: string;
    package_version: string;
    api_version: string;
    imports: { [lib: string]: string };
}