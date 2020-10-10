import { GirNamespace } from "../gir/namespace";

export default {
  namespace: "Gio",
  version: "2.0",
  modifier: (namespace: GirNamespace) => {
    const AsyncInitable = namespace.getClass("AsyncInitable");

    if (!AsyncInitable) {
      throw new Error("Gio.AsyncInitable not found.");
    }

    AsyncInitable.addGenericParemeter({
      default: "GObject.Object"
    });

    const ListModel = namespace.getClass("ListModel");

    if (!ListModel) {
      throw new Error("Gio.ListModel not found.");
    }

    ListModel.addGenericParemeter({
      default: "GObject.Object"
    });

    const ListStore = namespace.getClass("ListStore");

    if (!ListStore) {
      throw new Error("Gio.ListStore not found.");
    }

    ListStore.addGenericParemeter({
      deriveFrom: "ListModel",
      default: "GObject.Object"
    });
  }
};
