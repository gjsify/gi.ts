import { GirNamespace } from "../gir/namespace";
import { GirConstructor, GirFunctionParameter } from "../gir/function";
import { StringType, NativeType } from "../gir";
import { Direction } from "../xml";
import { GirField } from "../gir/property";
import { GenerationOptions } from "../cli/commands/generate";

export default {
  namespace: "Gio",
  version: "2.0",
  modifier(namespace: GirNamespace) {
    {
      const DBusNodeInfo = namespace.assertClass("DBusNodeInfo");

      DBusNodeInfo.constructors.push(
        new GirConstructor({
          name: "new_for_xml",
          parameters: [
            new GirFunctionParameter({
              name: "info",
              type: StringType,
              direction: Direction.In
            })
          ],
          return_type: DBusNodeInfo.getType()
        })
      );
    }

    {
      const DBusInterfaceInfo = namespace.assertClass("DBusInterfaceInfo");

      DBusInterfaceInfo.constructors.push(
        new GirConstructor({
          name: "new_for_xml",
          parameters: [
            new GirFunctionParameter({
              name: "info",
              type: StringType,
              direction: Direction.In
            })
          ],
          return_type: DBusInterfaceInfo.getType()
        })
      );
    }

    {
      const ListStore = namespace.assertClass("ListStore");

      ListStore.fields.push(
        new GirField({
          name: "Symbol.iterator",
          computed: true,
          type: NativeType.withGenerator((options) => {
            if (options?.inferGenerics) {
              return "() => IterableIterator<A>";
            } else {
              return "() => IterableIterator";
            }
          })
        })
      );
    }
  }
};
