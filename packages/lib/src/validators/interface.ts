import { GirInterface } from "../gir/class";
import { GirVisitor } from "../visitor";

export class InterfaceVisitor extends GirVisitor {
    visitInterface = (node: GirInterface): GirInterface => {
        // If an interface does not list a prerequisite type, we fill it with GObject.Object
        if (!node.noParent && node.parent == null) {
            const gobject = node.namespace.getImport("GObject");

            // TODO Optimize GObject.Object
            if (!gobject) {
                throw new Error("GObject not generated, all interfaces extend from GObject.Object!");
            }

            const GObject = gobject.getClass("Object");

            if (!GObject) {
                throw new Error(`GObject.Object could not be found while generating ${node.namespace.name}.${node.name}`);
            }

            node.parent = GObject.getType();
        }

        return node;
    }
}