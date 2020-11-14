import { GenericType, GenerifiedTypeIdentifier } from "../gir";
import { GirNamespace } from "../gir/namespace";

export default {
    namespace: "St",
    version: "1.0",
    modifier: (namespace: GirNamespace, inferGenerics: boolean) => {
        if (!inferGenerics) {
            return;
        }

        const Bin = namespace.assertClass("Bin");
        const Button = namespace.assertClass("Button");
        const ScrollView = namespace.assertClass("ScrollView");
        const Widget = namespace.assertClass("Widget");
        // TODO: Create a way to propagate this generic to child classes.
        const Viewport = namespace.assertClass("Viewport");
        const StBoxLayout = namespace.assertClass("BoxLayout");

        const Clutter = namespace.assertImport("Clutter");

        const Actor = Clutter.assertClass("Actor");
        const Content = Clutter.assertClass("Content");
        const Container = Clutter.assertClass("Container");
        const LayoutManager = Clutter.assertClass("LayoutManager");
        const ClutterBoxLayout = Clutter.assertClass("BoxLayout");

        Widget.addGeneric({
            deriveFrom: Actor.getType(),
            default: LayoutManager.getType()
        });

        Widget.addGeneric({
            deriveFrom: Actor.getType(),
            default: Content.getType()
        });

        Viewport.addGeneric({
            deriveFrom: Widget.getType(),
            default: LayoutManager.getType()
        });

        Viewport.addGeneric({
            deriveFrom: Widget.getType(),
            default: Content.getType()
        });

        Container.addGeneric({
            default: Actor.getType(),
            constraint: Actor.getType()
        });

        StBoxLayout.addGeneric({
            deriveFrom: Container.getType(),
            default: Actor.getType(),
            constraint: Actor.getType()
        })

        if (StBoxLayout.parent) {
            StBoxLayout.parent = new GenerifiedTypeIdentifier(
                StBoxLayout.parent.name,
                StBoxLayout.parent.namespace, [
                ClutterBoxLayout.getType()
            ]);
        }

        Bin.addGeneric({
            default: Actor.getType(),
            constraint: Actor.getType()
        });

        Button.addGeneric({
            deriveFrom: Bin.getType(),
            default: Actor.getType(),
            constraint: Actor.getType()
        });

        ScrollView.addGeneric({
            deriveFrom: Bin.getType(),
            default: Actor.getType(),
            constraint: Actor.getType()
        });

        Bin.props.filter(p => p.name === 'child').forEach(prop => {
            // TODO Automatically infer such changes.
            prop.type = new GenericType("A")
        });
    }
};
