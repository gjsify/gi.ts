import { ArrayType, TypeIdentifier } from "../gir";
import { GirBaseClass, GirClass, GirRecord } from "../gir/class";
import { GirError } from "../gir/enum";
import { resolveTypeIdentifier } from "../gir/util";
import { GirVisitor } from "../visitor";

/**
 * Subtypes of ParamSpec are not supported (e.g. a subtype of ParamSpecString).
 * 
 * First, we transform the node to use ParamSpec as a parent and then flag it
 * to not emit.
 * 
 * If a generator doesn't follow the emit() standard, the parent type will at least
 * be valid.
 *  
 * @param node 
 * @returns 
 */
const fixParamSpecSubtypes = <T extends GirBaseClass>(node: T): T => {
    if (node.parent?.namespace === "GObject" && node.parent.name.startsWith("ParamSpec")) {
        // We don't assert this import because we don't want to force libraries
        // to unnecessarily import GObject.
        node.parent = new TypeIdentifier("ParamSpec", "GObject");

        node.noEmit();
    }

    return node;
};

/**
 * Checks if a class implements a GObject.Object-based interface
 * If the class is missing a direct parent we inject GObject.Object
 * as a stand-in considering it already indirectly inherits
 * from it. 
 * 
 * @param node 
 */
const fixMissingParent = <T extends GirBaseClass>(node: T): T => {
    const { namespace } = node;

    if (node.parent == null) {
        const isGObject = node.someParent(p => p.getType().is("GObject", "Object"));

        if (isGObject) {
            node.parent = namespace.assertInstalledImport("GObject").assertClass("Object").getType();
        }
    }

    return node;
};

/**
 * Fields cannot be array types, error types,
 * or class-like types in GJS. This strips
 * fields which have these "complex" types.
 * 
 * @param node 
 */
const removeComplexFields = <T extends GirBaseClass>(node: T): T => {
    const { namespace } = node;

    node.fields = node.fields.filter(f => {
        let type = f.type.unwrap();

        if (type instanceof ArrayType) {
            return false;
        } else if (type instanceof TypeIdentifier) {
            if (resolveTypeIdentifier(namespace, type)) {
                return false;
            }

            const en = namespace.assertInstalledImport(type.namespace).getEnum(type.name);
            return !(en instanceof GirError);
        }

        return true;
    });

    return node;
}

export class ClassVisitor extends GirVisitor {
    visitClass = (node: GirClass) => removeComplexFields(
        fixParamSpecSubtypes(
            fixMissingParent(node)
        )
    );

    visitRecord = (node: GirRecord) => removeComplexFields(
        fixParamSpecSubtypes(
            fixMissingParent(node)
        )
    );
}