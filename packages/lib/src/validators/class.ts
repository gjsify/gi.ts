import { GirBaseClass } from "../gir/class";
import { GirVisitor } from "../visitor";

const fixMissingParent = <T extends GirBaseClass>(node: T): T => {
    const { namespace } = node;

    if (node.parent == null) {
        const {interface_parents, class_parents} = node.resolveParents();
        const resolved_parents = [...class_parents, ...interface_parents];

        const isGObject = resolved_parents.some(([, p]) => p.namespace.name === "GObject" && p.name === "Object");

        if (isGObject) {
            node.parent = namespace.assertInstalledImport("GObject").assertClass("Object").getType();
        }
    }

    return node;
};

export class ClassVisitor extends GirVisitor {
    visitClass = fixMissingParent.bind(this);
    visitRecord = fixMissingParent.bind(this);
}