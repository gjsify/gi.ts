import { GirNamespace } from "../../gir/namespace";

export function override(_node: GirNamespace) {
    return `
    export function _promisify(klass: any, function_name: string, finish_function_name: string);
    export interface _LocalFilePrototype extends FilePrototype {}
    export const _LocalFilePrototype: _LocalFilePrototype;
    `;
}
