import { GirNamespace, GirNSRegistry } from "../gir/namespace";
import { GirConstructor, GirFunctionParameter, GirClassFunction, GirFunction } from "../gir/function";
import { NativeType, AnyType, BooleanType, Uint8ArrayType, StringType } from "../gir";
import { Direction } from "../xml";

export default {
  namespace: "GLib",
  modifier(namespace: GirNamespace, registry: GirNSRegistry) {
    // export function log_structured(logDomain, logLevel, stringFields);

    namespace.members.set(
      "log_structured",
      new GirFunction({
        name: "log_structured",
        raw_name: "log_structured",
        parameters: [
          new GirFunctionParameter({
            name: "logDomain",
            type: AnyType,
            direction: Direction.In
          }),
          new GirFunctionParameter({
            name: "logLevel",
            type: AnyType,
            direction: Direction.In
          }),
          new GirFunctionParameter({
            name: "stringFields",
            type: AnyType,
            direction: Direction.In
          })
        ],
        return_type: AnyType
      })
    );

    // export function strstrip(str: string): string;

    namespace.members.set(
      "strstrip",
      new GirFunction({
        name: "strstrip",
        raw_name: "strstrip",
        parameters: [
          new GirFunctionParameter({
            name: "str",
            type: StringType,
            direction: Direction.In
          })
        ],
        return_type: StringType
      })
    );

    // GLib.Error

    {
      const Error = namespace.assertClass("Error");

      Error.mainConstructor = new GirConstructor({
        name: "new",
        parameters: [
          new GirFunctionParameter({
            name: "options",
            type: NativeType.of("{ message: string, code: number }"),
            direction: Direction.In
          })
        ],
        return_type: Error.getType()
      });
    }

    // GLib.Variant

    {
      const Variant = namespace.assertClass("Variant");

      const VariantParams = [
        new GirFunctionParameter({
          name: "sig",
          type: AnyType,
          direction: Direction.In
        }),
        new GirFunctionParameter({
          name: "value",
          type: AnyType,
          direction: Direction.In
        })
      ];
      const VariantConstructor = new GirConstructor({
        name: "new",
        parameters: VariantParams.map(vp => vp.copy()),
        return_type: Variant.getType()
      });

      Variant.mainConstructor = VariantConstructor.copy();

      Variant.constructors.unshift(
        // static new: (sig: any, value: any) => Variant;
        VariantConstructor.copy(),
        // static _new_internal: (sig: any, value: any) => any;,
        new GirConstructor({
          name: "_new_internal",
          parameters: VariantParams.map(vp => vp.copy()),
          return_type: AnyType
        })
      );

      const GObject_Object = registry.assertNamespace("GObject").assertClass("Object").getType();

      Variant.members.push(
        // unpack<T= any>(): T;
        new GirClassFunction({
          name: "unpack",
          return_type: GObject_Object,
          parent: Variant
        }),
        // deepUnpack<T = any>(): T;
        new GirClassFunction({
          name: "deepUnpack",
          return_type: GObject_Object,
          parent: Variant
        }),
        // deep_unpack: any;
        new GirClassFunction({
          name: "deep_unpack",
          return_type: GObject_Object,
          parent: Variant
        }),
        // recursiveUnpack: () => any;
        new GirClassFunction({
          name: "recursiveUnpack",
          return_type: AnyType,
          parent: Variant
        }),
        // _init(sig: any, value: any): Variant;
        new GirClassFunction({
          name: "_init",
          return_type: Variant.getType(),
          parent: Variant,
          parameters: VariantParams.map(vp => vp.copy())
        })
      );
    }

    // GLib.VariantDict

    {
      const VariantDict = namespace.assertClass("VariantDict");

      VariantDict.members.push(
        // lookup(key: any, variantType?: any, deep?: any): any;
        new GirClassFunction({
          name: "lookup",
          return_type: AnyType,
          parent: VariantDict,
          parameters: [
            new GirFunctionParameter({
              name: "key",
              direction: Direction.In,
              type: AnyType
            }),
            new GirFunctionParameter({
              name: "variantType",
              direction: Direction.In,
              type: AnyType,
              isOptional: true
            }),
            new GirFunctionParameter({
              name: "deep",
              direction: Direction.In,
              type: BooleanType,
              isOptional: true
            })
          ]
        })
      );
    }

    // GLib.Bytes

    {
      const Bytes = namespace.assertClass("Bytes");

      Bytes.members.push(
        // toArray(): Uint8Array;
        new GirClassFunction({
          name: "toArray",
          return_type: Uint8ArrayType,
          parent: Bytes,
          parameters: []
        })
      );
    }
  }
};
