import { ArrayType, TypeIdentifier } from "../gir";
import { GirBaseClass, GirClass, GirRecord } from "../gir/class";
import { GirError } from "../gir/enum";
import { resolveTypeIdentifier } from "../gir/util";
import { GirVisitor } from "../visitor";

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
        fixMissingParent(node)
    );

    visitRecord = (node: GirRecord) => removeComplexFields(
        fixMissingParent(node)
    );
}