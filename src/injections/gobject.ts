import { GirNamespace } from "../gir/namespace";
import { GirFunctionParameter, GirClassFunction, GirFunction, GirStaticClassFunction } from "../gir/function";
import {
  NativeType,
  AnyType,
  StringType,
  BinaryType,
  VoidType,
  NumberType,
  TypeIdentifier,
  ObjectType,
  NullableType,
  TupleType,
  UnknownType,
  NeverType,
  AnyFunctionType,
  Generic,
  GenericType
} from "../gir";
import { Direction } from "@gi.ts/parser";
import { GirField, GirProperty } from "../gir/property";
import { GirAlias } from "../gir/alias";
import { GirBaseClass, GirInterface } from "../gir/class";
import { GirNSRegistry } from "../gir/registry";

function anyParam(name: string) {
  return new GirFunctionParameter({
    name,
    direction: Direction.In,
    type: AnyType
  });
}

export default {
  namespace: "GObject",
  version: "2.0",
  modifier(namespace: GirNamespace, _registry: GirNSRegistry) {
    {
      const SignalMatch =  new GirInterface({
        name: "SignalMatch",
        namespace,
        props: [
          new GirProperty({
            name: "signalId",
            type: StringType,
            isStatic: false,
            writable: true,
            constructOnly: false
          }),
          new GirProperty({
            name: "detail",
            type: StringType,
            isStatic: false,
            writable: true,
            constructOnly: false
          }),
          new GirProperty({
            name: "func",
            type: AnyFunctionType,
            isStatic: false,
            writable: true,
            constructOnly: false
          })
        ]
      });

      // TODO: Devise a better way to represent pure TypeScript types.
      SignalMatch.noParent = true;

      namespace.members.set("SignalMatch", SignalMatch);

      namespace.members.set("GType", new GirAlias({
        name: "GType",
        type: new NativeType("{ __type__(arg: never): T }"),
        generics: [
          {
            name: 'T',
            type: UnknownType
          }
        ]
      }))

      const ParamSpec = namespace.assertClass("ParamSpec");

      function generateParamSpec(
        name: string,
        returnType: GirBaseClass = ParamSpec,
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
          return_type: returnType.getType()
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

      const ParamSpecBoolean = namespace.assertClass("ParamSpecBoolean");
      const ParamSpecBoxed = namespace.assertClass("ParamSpecBoxed");
      const ParamSpecChar = namespace.assertClass("ParamSpecChar");
      const ParamSpecDouble = namespace.assertClass("ParamSpecDouble");
      const ParamSpecEnum = namespace.assertClass("ParamSpecEnum");
      const ParamSpecFlags = namespace.assertClass("ParamSpecFlags");
      const ParamSpecFloat = namespace.assertClass("ParamSpecFloat");
      const ParamSpecInt = namespace.assertClass("ParamSpecInt");
      const ParamSpecInt64 = namespace.assertClass("ParamSpecInt64");
      const ParamSpecLong = namespace.assertClass("ParamSpecLong");
      const ParamSpecObject = namespace.assertClass("ParamSpecObject");

      const type_function = new GirClassFunction({
        name: "__type__",
        parent: ParamSpecObject,
        parameters: [
          new GirFunctionParameter({
            "name": "arg",
            type: NeverType,
            direction: Direction.In
          })
        ],
        return_type: new NativeType("A"),
        // TODO: Add support for generic native type replacement.
        // return_type: UnknownType
      });

      ParamSpecObject.members.push(type_function.copy());

      ParamSpecObject.addGeneric({
        default: UnknownType
      });

      ParamSpecBoxed.members.push(type_function.copy());

      ParamSpecBoxed.addGeneric({
        default: UnknownType
      });

      ParamSpecEnum.members.push(type_function.copy());

      ParamSpecEnum.addGeneric({
        default: UnknownType
      });

      const ParamSpecParam = namespace.assertClass("ParamSpecParam");
      const ParamSpecString = namespace.assertClass("ParamSpecString");
      const ParamSpecUChar = namespace.assertClass("ParamSpecUChar");
      const ParamSpecUInt = namespace.assertClass("ParamSpecUInt");
      const ParamSpecUInt64 = namespace.assertClass("ParamSpecUInt64");
      const ParamSpecULong = namespace.assertClass("ParamSpecULong");

      const object = new GirStaticClassFunction({
        name: "object",
        parameters: [
          anyParam("name"),
          anyParam("nick"),
          anyParam("blurb"),
          anyParam("flags"),
          new GirFunctionParameter({
            name: `objectType`,
            direction: Direction.In,
            type: new NativeType("GType<T>")
          })
        ],
        parent: ParamSpec,
        return_type: new NativeType("ParamSpecObject<T>")
      });

      object.generics.push(new Generic(new GenericType("T")));

      ParamSpec.members.push(
        //   "char": "static char(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("char", ParamSpecChar, true, null, true),
        //   "uchar": "static uchar(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any):ParamSpec;",
        generateParamSpec("uchar", ParamSpecUChar, true, null, true),
        //   "int": "static int(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("int", ParamSpecInt, true, null, true),
        //   "uint": "static uint(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("uint", ParamSpecUInt, true, null, true),
        //   "long": "static long(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("long", ParamSpecLong, true, null, true),
        //   "ulong": "static ulong(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("ulong", ParamSpecULong, true, null, true),
        //   "int64": "static int64(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("int64", ParamSpecInt64, true, null, true),
        //   "uint64": "static uint64(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("uint64", ParamSpecUInt64, true, null, true),
        //   "float": "static float(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("float", ParamSpecFloat, true, null, true),
        //   "boolean": "static boolean(name: any, nick: any, blurb: any, flags: any, defaultValue: any): ParamSpec;",
        generateParamSpec("boolean", ParamSpecBoolean, false, null, true),
        //   "flags": "static flags(name: any, nick: any, blurb: any, flags: any, flagsType: any, defaultValue: any): ParamSpec;",
        generateParamSpec("flags", ParamSpecFlags, false, "flags", true),
        //   "enum": "static enum(name: any, nick: any, blurb: any, flags: any, enumType: any, defaultValue: any): ParamSpec;",
        generateParamSpec("enum", ParamSpecEnum, false, "enum", true),
        //   "double": "static double(name: any, nick: any, blurb: any, flags: any, minimum: any, maximum: any, defaultValue: any): ParamSpec;",
        generateParamSpec("double", ParamSpecDouble, true, null, true),
        //   "string": "static string(name: any, nick: any, blurb: any, flags: any, defaultValue: any): ParamSpec;",
        generateParamSpec("string", ParamSpecString, false, null, true),
        //   "boxed": "static boxed(name: any, nick: any, blurb: any, flags: any, boxedType: any): ParamSpec;",
        generateParamSpec("boxed", ParamSpecBoxed, false, "boxed", false),
        //   "object": "static object(name: any, nick: any, blurb: any, flags: any, objectType: any): ParamSpec;",
        object,
        //   "param": "static param(name: any, nick: any, blurb: any, flags: any, paramType: any): ParamSpec;",
        generateParamSpec("param", ParamSpecParam, false, "param", false)
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

      // TODO: We replace GObject.Value with any for parameters and unknown
      // for return types. Nested types aren't currently replaced, though
      // so let's override the class for now with an alias to any.
      namespace.members.set(
        "Value",
        new GirAlias({
          name: "Value",
          type: AnyType,
        })
      );
    }

    {
      const Object = namespace.assertClass("Object");

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
        new GirClassFunction({
          name: "disconnect",
          parent: Object,
          parameters: [
            new GirFunctionParameter({
              name: "id",
              type: NumberType,
              direction: Direction.In
            })
          ],
          return_type: VoidType
        }),
        // TODO: Add per-class set type checking.
        new GirClassFunction({
          name: "set",
          parent: Object,
          parameters: [
            new GirFunctionParameter({
              name: "properties",
              type: new NativeType("{ [key: string]: any }"),
              direction: Direction.In
            }),
          ],
          return_type: VoidType
        }),
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
              type: AnyFunctionType,
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
              type: AnyFunctionType,
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
              type: AnyFunctionType,
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
