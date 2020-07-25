import { GirNamespace, GirNSRegistry } from "../gir/namespace";
import { GirFunctionParameter, GirClassFunction, GirFunction, GirStaticClassFunction } from "../gir/function";
import {
  NativeType,
  AnyType,
  StringType,
  GTypeType,
  BinaryType,
  NullType,
  VoidType,
  NumberType,
  TypeIdentifier,
  ObjectType,
  NullableType,
  TupleType
} from "../gir";
import { Direction } from "../xml";
import { GirField } from "../gir/property";
import { GirAlias } from "../gir/alias";

function anyParam(name: string) {
  return new GirFunctionParameter({
    name,
    direction: Direction.In,
    type: AnyType
  });
}

export default {
  namespace: "GObject",
  modifier(namespace: GirNamespace, _registry: GirNSRegistry) {
    {
      const ParamSpec = namespace.assertClass("ParamSpec");

      function generateParamSpec(
        name: string,
        minMax = false,
        type: string | null = null,
        defaultValue = false
      ) {
        return new GirStaticClassFunction({
          name,
          parameters: [
            anyParam("name"),
            anyParam("nick"),
            anyParam("blurb"),
            anyParam("flags"),
            ...(minMax ? [anyParam("minimum"), anyParam("maximum")] : []),
            ...(type ? [anyParam(`${type}Type`)] : []),
            ...(defaultValue ? [anyParam("defaultValue")] : [])
          ],
          parent: ParamSpec,
          return_type: ParamSpec.getType()
        });
      }

      ParamSpec.fields.push(
        new GirField({
          name: "override",
          isStatic: true,
          type: AnyType,
          writable: true
        })
      );

      ParamSpec.members.push(
        //   "char": "static char(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("char", true, null, true),
        //   "uchar": "static uchar(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any):ParamSpec;",
        generateParamSpec("uchar", true, null, true),
        //   "int": "static int(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("int", true, null, true),
        //   "uint": "static uint(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("uint", true, null, true),
        //   "long": "static long(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("long", true, null, true),
        //   "ulong": "static ulong(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("ulong", true, null, true),
        //   "int64": "static int64(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("int64", true, null, true),
        //   "uint64": "static uint64(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("uint64", true, null, true),
        //   "float": "static float(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("float", true, null, true),
        //   "boolean": "static boolean(name: any, nick: any, blurb: any, flags: any, defaultValue: any): ParamSpec;",
        generateParamSpec("boolean", false, null, true),
        //   "flags": "static flags(name: any, nick: any, blurb: any, flags: any, flagsType: any, defaultValue: any): ParamSpec;",
        generateParamSpec("flags", false, "flags", true),
        //   "enum": "static enum(name: any, nick: any, blurb: any, flags: any, enumType: any, defaultValue: any): ParamSpec;",
        generateParamSpec("enum", false, "enum", true),
        //   "double": "static double(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("double", true, null, true),
        //   "string": "static string(name: any, nick: any, blurb: any, flags: any, defaultValue: any): ParamSpec;",
        generateParamSpec("string", false, null, true),
        //   "boxed": "static boxed(name: any, nick: any, blurb: any, flags: any, boxedType: any): ParamSpec;",
        generateParamSpec("boxed", false, "boxed", false),
        //   "object": "static object(name: any, nick: any, blurb: any, flags: any, objectType: any): ParamSpec;",
        generateParamSpec("object", false, "object", false),
        //   "param": "static param(name: any, nick: any, blurb: any, flags: any, paramType: any): ParamSpec;",
        generateParamSpec("param", false, "param", false)
      );
    }

    {
      namespace.members.delete("Closure");

      namespace.members.set(
        "Closure",
        new GirAlias({
          name: "Closure",
          type: NativeType.of("(...args: P[]) => R"),
          generics: [
            {
              name: "R",
              type: AnyType
            },
            {
              name: "P",
              type: AnyType
            }
          ]
        })
      );
    }

    {
      const Object = namespace.assertClass("Object");

      Object.fields.push(
        new GirField({
          name: "$gtype",
          isStatic: true,
          type: GTypeType,
          writable: false
        })
      );

      const get_property = Object.members.findIndex(m => m.name === "get_property");
      const set_property = Object.members.findIndex(m => m.name === "set_property");

      Object.members[get_property] = new GirClassFunction({
        name: "get_property",
        parent: Object,
        parameters: [
          new GirFunctionParameter({
            name: "property_name",
            type: StringType,
            direction: Direction.In
          }),
          new GirFunctionParameter({
            name: "value",
            type: new BinaryType(namespace.assertClass("Value").getType(), NullType),
            direction: Direction.In
          })
        ],
        return_type: AnyType
      });

      Object.members[set_property] = new GirClassFunction({
        name: "set_property",
        parent: Object,
        parameters: [
          new GirFunctionParameter({
            name: "property_name",
            type: StringType,
            direction: Direction.In
          }),
          new GirFunctionParameter({
            name: "value",
            type: AnyType,
            direction: Direction.In
          })
        ],
        return_type: VoidType
      });

      Object.members.push(
        new GirStaticClassFunction({
          name: "_classInit",
          parent: Object,
          parameters: [
            new GirFunctionParameter({
              name: "klass",
              type: AnyType,
              direction: Direction.In
            })
          ],
          return_type: AnyType
        }),
        // new GirClassFunction({
        //   name: "connect",
        //   parent: Object,
        //   parameters: [
        //     new GirFunctionParameter({
        //       name: "id",
        //       type: StringType,
        //       direction: Direction.In
        //     }),
        //     new GirFunctionParameter({
        //       name: "callback",
        //       type: NativeType.of("(...args: any[]) => any"),
        //       direction: Direction.In
        //     })
        //   ],
        //   return_type: NumberType
        // }),
        // new GirClassFunction({
        //   name: "connect_after",
        //   parent: Object,
        //   parameters: [
        //     new GirFunctionParameter({
        //       name: "id",
        //       type: StringType,
        //       direction: Direction.In
        //     }),
        //     new GirFunctionParameter({
        //       name: "callback",
        //       type: NativeType.of("(...args: any[]) => any"),
        //       direction: Direction.In
        //     })
        //   ],
        //   return_type: NumberType
        // }),
        // new GirClassFunction({
        //   name: "emit",
        //   parent: Object,
        //   parameters: [
        //     new GirFunctionParameter({
        //       name: "id",
        //       type: StringType,
        //       direction: Direction.In
        //     }),
        //     new GirFunctionParameter({
        //       name: "args",
        //       isVarArgs: true,
        //       type: new ArrayType(AnyType),
        //       direction: Direction.In
        //     })
        //   ],
        //   return_type: VoidType
        // }),
        new GirClassFunction({
          name: "block_signal_handler",
          parent: Object,
          parameters: [
            new GirFunctionParameter({
              name: "id",
              type: NumberType,
              direction: Direction.In
            })
          ],
          return_type: AnyType
        }),
        new GirClassFunction({
          name: "unblock_signal_handler",
          parent: Object,
          parameters: [
            new GirFunctionParameter({
              name: "id",
              type: NumberType,
              direction: Direction.In
            })
          ],
          return_type: AnyType
        }),
        new GirClassFunction({
          name: "stop_emission_by_name",
          parent: Object,
          parameters: [
            new GirFunctionParameter({
              name: "detailedName",
              type: StringType,
              direction: Direction.In
            })
          ],
          return_type: AnyType
        })
      );

      function replaceFunction(name: string, ...functions: GirFunction[]) {
        namespace.members.delete(name);

        namespace.members.set(name, functions);
      }

      // export function signal_handlers_block_by_func(instance: Object, func: Function);

      replaceFunction(
        "signal_handlers_block_by_func",
        new GirFunction({
          name: "signal_handlers_block_by_func",
          raw_name: "signal_handlers_block_by_func",
          parameters: [
            new GirFunctionParameter({
              name: "instance",
              type: Object.getType(),
              direction: Direction.In
            }),
            new GirFunctionParameter({
              name: "func",
              type: NativeType.of("Function"),
              direction: Direction.In
            })
          ],
          return_type: VoidType
        })
      );

      // export function signal_handlers_unblock_by_func  (instance: Object, func: Function);

      replaceFunction(
        "signal_handlers_unblock_by_func",
        new GirFunction({
          name: "signal_handlers_unblock_by_func",
          raw_name: "signal_handlers_unblock_by_func",
          parameters: [
            new GirFunctionParameter({
              name: "instance",
              type: Object.getType(),
              direction: Direction.In
            }),
            new GirFunctionParameter({
              name: "func",
              type: NativeType.of("Function"),
              direction: Direction.In
            })
          ],
          return_type: VoidType
        })
      );

      // export function signal_handlers_disconnect_by_func(instance: Object, func: Function);

      replaceFunction(
        "signal_handlers_disconnect_by_func",
        new GirFunction({
          name: "signal_handlers_disconnect_by_func",
          raw_name: "signal_handlers_disconnect_by_func",
          parameters: [
            new GirFunctionParameter({
              name: "instance",
              type: Object.getType(),
              direction: Direction.In
            }),
            new GirFunctionParameter({
              name: "func",
              type: NativeType.of("Function"),
              direction: Direction.In
            })
          ],
          return_type: VoidType
        })
      );

      // signal_handler_find

      const args = new GirFunctionParameter({
        name: "args",
        direction: Direction.In,
        isVarArgs: true,
        type: new BinaryType(
          new TupleType(Object.getType(), NativeType.of("SignalMatch")),
          new TupleType(
            Object.getType(),
            new TypeIdentifier("SignalMatchType", "GObject"),
            NumberType,
            new TypeIdentifier("Quark", "GLib"),
            new NullableType(new TypeIdentifier("Closure", "GObject")),
            new NullableType(ObjectType),
            new NullableType(ObjectType)
          )
        )
      });

      const modifiedArgs = [
        new GirFunctionParameter({
          name: "instance",
          direction: Direction.In,

          type: Object.getType()
        }),
        new GirFunctionParameter({
          name: "match",
          direction: Direction.In,
          type: NativeType.of("SignalMatch")
        })
      ];

      const originalArgs = [
        new GirFunctionParameter({
          name: "instance",
          direction: Direction.In,

          type: Object.getType()
        }),
        new GirFunctionParameter({
          name: "match",
          direction: Direction.In,
          type: new TypeIdentifier("SignalMatchType", "GObject")
        }),
        new GirFunctionParameter({
          name: "signal_id",
          direction: Direction.In,
          type: NumberType
        }),
        new GirFunctionParameter({
          name: "detail",
          type: new TypeIdentifier("Quark", "GLib"),
          direction: Direction.In
        }),
        new GirFunctionParameter({
          name: "closure",
          type: new NullableType(new TypeIdentifier("Closure", "GObject")),
          direction: Direction.In
        }),
        new GirFunctionParameter({
          name: "func",
          type: new NullableType(ObjectType),
          direction: Direction.In
        }),
        new GirFunctionParameter({
          name: "object",
          type: new NullableType(ObjectType),
          direction: Direction.In
        })
      ];

      function originalFunc(name: string) {
        return new GirFunction({
          name,
          raw_name: name,
          return_type: NumberType,
          parameters: originalArgs.map(a => a.copy())
        });
      }

      function func(name: string) {
        replaceFunction(
          name,
          // [name](...args: [Object, SignalMatch] | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]): number;
          new GirFunction({
            name,
            raw_name: name,
            return_type: NumberType,
            parameters: [args]
          }),
          // export function [name](instance: Object, match: SignalMatch): number;
          new GirFunction({
            name,
            raw_name: name,
            return_type: NumberType,
            parameters: modifiedArgs.map(a => a.copy())
          }),
          // export function [name](instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number
          originalFunc(name),
          // export function [`_real_${name}`](instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object | null, data: object | null): number
          originalFunc(`_real_${name}`)
        );
      }

      func("signal_handler_find");
      func("signal_handler_block_matched");
      func("signal_handler_block_disconnect_matched");
      func("signal_handler_block_unblock_matched");
    }
  }
};
