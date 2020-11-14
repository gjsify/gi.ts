import { GenericType } from "../gir";
import { GirNamespace } from "../gir/namespace";

export default {
    namespace: "Clutter",
    modifier: (namespace: GirNamespace, inferGenerics: boolean) => {
        if (!inferGenerics) {
            return;
        }

        const Actor = namespace.assertClass("Actor");
        const Content = namespace.assertClass("Content");
        const LayoutManager = namespace.assertClass("LayoutManager");

        Actor.addGeneric({
            default: LayoutManager.getType()
        });

        Actor.addGeneric({
            default: Content.getType()
        });

        Actor.props.filter(p => p.name === 'layout_manager' || p.name === 'layoutManager').forEach(prop => {
            // TODO Automatically infer such changes.
            prop.type = new GenericType("A")
        });

        Actor.props.filter(p => p.name === 'content').forEach(prop => {
            // TODO Automatically infer such changes.
            prop.type = new GenericType("B")
        });

        const Clone = namespace.assertClass("Clone");

        Clone.addGeneric({
            default: Actor.getType(),
            constraint: Actor.getType()
        });

        Clone.props.filter(p => p.name === 'source').forEach(prop => {
            // TODO Automatically infer such changes.
            prop.type = new GenericType("A")
        });
    }
};
