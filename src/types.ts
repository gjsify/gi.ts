export type PropertyCase = "both" | "camel" | "underscore";
export type Format = "dts" | "json";

export interface Options {
    verbose: boolean;
}

export interface LoadOptions extends Options {
    loadDocs: boolean;
    propertyCase: PropertyCase; 
}

export interface TransformOptions extends Options {
    inferGenerics: boolean;
}

export interface GenerationOptions extends Options {
    promisify: boolean;
    withDocs: boolean;
    format: Format;
    versionedOutput: boolean;
    versionedImports: boolean;
    importPrefix: string;
    emitMetadata: boolean;
    noAdvancedVariants: boolean;
}

export interface Metadata {
    name: string;
    package_version: string;
    api_version: string;
    imports: { [lib: string]: string };
}