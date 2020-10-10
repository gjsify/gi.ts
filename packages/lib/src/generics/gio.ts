import { GirNamespace } from "../gir/namespace";

export default {
  namespace: "Gio",
  version: "2.0",
  modifier: (namespace: GirNamespace) => {
    const AsyncInitable = namespace.getClass("AsyncInitable");

    if (!AsyncInitable) {
      throw new Error("Gio.AsyncInitable not found.");
    }

    const GObject = namespace.assertImport("GObject").assertClass("Object");

    AsyncInitable.addGeneric({
      default: GObject.getType()
    });

    const ListModel = namespace.getClass("ListModel");

    if (!ListModel) {
      throw new Error("Gio.ListModel not found.");
    }

    ListModel.addGeneric({
      default: GObject.getType()
    });

    const ListStore = namespace.getClass("ListStore");

    if (!ListStore) {
      throw new Error("Gio.ListStore not found.");
    }

    ListStore.addGeneric({
      deriveFrom: ListModel.getType(),
      default: GObject.getType()
    });
  }
};
