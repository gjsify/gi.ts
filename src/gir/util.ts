import { GirNSRegistry, GirNamespace } from "./namespace";
import { ClassMethodParameter, Direction, AliasElement } from "../xml";
import {
  TypeIdentifier,
  ThisType,
  ArrayType,
  ClosureType,
  GTypeType,
  BinaryType,
  ObjectType,
  OrType,
  NativeType,
  NullableType,
  TypeExpression,
  StringType,
  NumberType,
  BooleanType,
  Uint8ArrayType,
  AnyType,
  UnknownType,
  NeverType,
  VoidType
} from "../gir";

const reservedWords = [
  // For now, at least, the typescript compiler doesn't throw on numerical types like int, float, etc.
  "abstract",
  "arguments",
  "await",
  "boolean",
  "break",
  "byte",
  "case",
  "catch",
  "char",
  "class",
  "const",
  "continue",
  "constructor", // This isn't technically reserved, but it's problematic.
  "debugger",
  "default",
  "delete",
  "do",
  // "double",
  "else",
  "enum",
  "eval",
  "export",
  "extends",
  "false",
  "final",
  "finally",
  // "float",
  "for",
  "function",
  "goto",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  // "int",
  "interface",
  "let",
  // "long",
  "native",
  "new",
  "null",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "short",
  "static",
  "super",
  "switch",
  "synchronized",
  "this",
  "throw",
  "throws",
  "transient",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "volatile",
  "while",
  "with",
  "yield"
];

export function getAliasType(modName: string, _ns: GirNamespace, param: AliasElement): TypeExpression {
  let parameter = param as AliasElement;
  let name: string = parameter.type[0].$["name"] || "unknown";

  let x = name.split(" ");

  if (x.length === 1) {
    name = x[0];
  } else {
    name = x[1];
  }

  const baseType = parseTypeString(name);

  if (!baseType) {
    throw new Error(`Un-parsable type: ${name}`);
  }

  if (baseType.namespace) {
    return baseType;
  } else {
    const primitiveType = resolvePrimitiveType(name);

    if (primitiveType !== null) {
      return primitiveType;
    } else {
      return new TypeIdentifier(baseType.name, modName);
    }
  }
}

/* Decode the type */
export function getType(modName: string, _ns: GirNamespace, param: any): TypeExpression {
  let name = "";
  let arrayDepth: number | null = null;
  let length: number | null = null;

  let parameter = param as ClassMethodParameter;
  if (parameter.array && parameter.array[0]) {
    arrayDepth = 1;

    const [array] = parameter.array;

    if (array.$ && array.$.length != null) {
      length = Number.parseInt(array.$.length, 10);

      if (Number.isNaN(length)) {
        throw new Error(`Error parsing array length: ${array.$.length}`);
      }
    }

    if (array.type && array.type[0].$ && array.type[0].$["name"]) {
      name = array.type[0].$["name"];
    } else if (array.array) {
      let arr = array;
      let depth = 1;

      while (Array.isArray(arr.array)) {
        arr = arr.array[0];
        depth++;
      }

      name = arr.type[0].$["name"] || "unknown";
      arrayDepth = depth;
    } else {
      name = "unknown";
    }
  } else if (parameter.type && parameter.type[0] && parameter.type[0].$) {
    name = parameter.type[0].$["name"] || "unknown";
    // todo one sec
  } else if (parameter.varargs || (parameter.$ && parameter.$.name === "...")) {
    arrayDepth = 1;
    name = "any";
  } else {
    name = "unknown";
    console.log("Unknown type: ", JSON.stringify(parameter.$, null, 4), "\nMarking as unknown!");
  }

  let closure = null as null | number;

  if (parameter.$ && parameter.$.closure) {
    closure = Number.parseInt(parameter.$.closure, 10);

    if (Number.isNaN(closure)) {
      throw new Error(`Error parsing closure data position: ${parameter.$.closure}`);
    }
  }

  const nullable = parameter.$ && (parameter.$["allow-none"] === "1" || parameter.$["nullable"] === "1");

  let x = name.split(" ");
  if (x.length === 1) {
    name = x[0];
  } else {
    name = x[1];
  }

  const baseType = parseTypeString(name);

  if (!baseType) {
    throw new Error(`Un-parsable type: ${name}`);
  }

  let variableType: TypeExpression;

  if (baseType.namespace) {
    variableType = baseType;
  } else {
    const primitiveType = resolvePrimitiveType(name);

    if (primitiveType !== null) {
      variableType = primitiveType;
    } else {
      variableType = new TypeIdentifier(baseType.name, modName);
    }
  }

  if (arrayDepth != null) {
    const primitiveArrayType = resolvePrimitiveArrayType(name, arrayDepth);

    if (primitiveArrayType) {
      const [primitiveName, primitiveArrayDepth] = primitiveArrayType;

      variableType = ArrayType.new({
        type: primitiveName,
        arrayDepth: primitiveArrayDepth,
        length
      });
    } else {
      variableType = ArrayType.new({ type: variableType, arrayDepth, length });
    }
  } else if (closure != null) {
    variableType = ClosureType.new({ type: variableType, user_data: closure });
  }

  if (nullable) {
    return new NullableType(variableType);
  }

  return variableType;
}

export const SanitizedIdentifiers = new Map();

export function sanitizeIdentifierName(namespace: string | null, name: string): string {
  // This is a unique case where the name is "empty".
  if (name === "") {
    return `''`;
  }

  let sanitized_name = name.replace(/[^A-z0-9_]/gi, "_");

  if (reservedWords.includes(sanitized_name)) {
    sanitized_name = `__${sanitized_name}`;
  }

  if (sanitized_name.match(/^[^A-z_]/) != null) {
    sanitized_name = `__${sanitized_name}`;
  }

  if (namespace && sanitized_name !== name) {
    SanitizedIdentifiers.set(`${namespace}.${name}`, `${namespace}.${sanitized_name}`);
  }

  return sanitized_name;
}

export function sanitizeMemberName(name: string): string {
  // This is a unique case where the name is "empty".
  if (name === "") {
    return `''`;
  }

  return name.replace(/[^A-z0-9_]/gi, "_");
}

export function isInvalid(name: string): boolean {
  if (reservedWords.includes(name)) {
    return true;
  }

  const sanitized = sanitizeMemberName(name);

  if (sanitized.match(/^[^A-z_]/) != null) {
    return true;
  }

  return false;
}

export function parseTypeString(type: string): TypeIdentifier {
  if (type.includes(".")) {
    const parts = type.split(".");

    if (parts.length > 2) {
      throw new Error(`Invalid type string ${type} passed.`);
    }

    const [namespace, name] = parts;

    return new TypeIdentifier(name, namespace);
  } else {
    return new TypeIdentifier(type, null);
  }
}

export function resolvePrimitiveArrayType(name: string, arrayDepth: number): [NativeType, number] | null {
  if (arrayDepth > 0) {
    switch (name) {
      case "gint8":
      case "guint8":
        return [Uint8ArrayType, arrayDepth - 1];
    }
  }

  const resolvedName = resolvePrimitiveType(name);

  if (resolvedName) {
    return [resolvedName, arrayDepth];
  } else {
    return null;
  }
}

export function isPrimitiveType(name: string): boolean {
  return resolvePrimitiveType(name) !== null;
}

export function resolvePrimitiveType(name: string): NativeType | null {
  switch (name) {
    case "":
      console.error("Resolving '' to any on " + name);
      return AnyType;
    case "filename":
      return StringType;
    // Pass this through
    case "GType":
      return GTypeType;
    case "utf8":
      return StringType;
    case "void": // Support TS "void"
    case "none":
      return VoidType;
    // TODO Some libraries are bad and don't use g-prefixed numerical types
    case "uint32":
    case "int32":
    case "double":
    // Most libraries will use these though:
    case "gshort":
    case "guint32":
    case "guint16":
    case "gint16":
    case "gunichar":
    case "gint8":
    case "gint32":
    case "gushort":
    case "gfloat":
    case "gchar":
    case "guint":
    case "glong":
    case "gulong":
    case "gint":
    case "guint8":
    case "guint64":
    case "gint64":
    case "gdouble":
    case "gssize":
    case "gsize":
    case "long":
      return NumberType;
    case "gboolean":
      return BooleanType;
    case "gpointer": // This is typically used in callbacks to pass data, so we'll allow anything.
      return AnyType;
    case "object":
      return ObjectType;
    case "va_list":
      return AnyType;
    case "guintptr": // You can't use pointers in GJS! (at least that I'm aware of)
      return NeverType;
    case "never": // Support TS "never"
      return NeverType;
    case "unknown": // Support TS "unknown"
      return UnknownType;
    case "any": // Support TS "any"
      return AnyType;
    case "this": // Support TS "this"
      return ThisType;
    case "number": // Support TS "number"
      return NumberType;
    case "string": // Support TS "string"
      return StringType;
    case "boolean": // Support TS "boolean"
      return BooleanType;
    case "object": // Support TS "object"
      return ObjectType;
  }

  return null;
}

function jsifyType(_modName: string, type: TypeIdentifier): TypeExpression | null {
  if (type.is("GLib", "List")) {
    return new ArrayType(AnyType);
  }

  if (type.is("GLib", "SList")) {
    return new ArrayType(StringType);
  }

  return null;
}
export function resolveDirectedType(type: TypeExpression, direction: Direction): TypeExpression | null {
  if (type instanceof ArrayType) {
    if (
      (direction === Direction.In || direction === Direction.Inout) &&
      type.type.equals(Uint8ArrayType) &&
      type.arrayDepth === 0
    ) {
      return new BinaryType(type, StringType);
    }
  } else if (type instanceof TypeIdentifier) {
    if ((direction === Direction.In || direction === Direction.Inout) && type.is("GLib", "Bytes")) {
      return new BinaryType(type, Uint8ArrayType);
    } else if ((direction === Direction.In || direction === Direction.Inout) && type.is("GObject", "Value")) {
      return new OrType(type, StringType, BooleanType, NumberType);
    }
  }

  return null;
}

// Inspired by gir2dts' resolveType
export function resolveType(modName: string, rns: GirNSRegistry, type: TypeExpression): string {
  if (type instanceof NativeType) {
    return type.expression;
  }

  if (!(type instanceof TypeIdentifier)) {
    throw new Error(`Unknown type expression: ${type.constructor.name}`);
  }

  const jsified = jsifyType(modName, type);

  if (jsified) {
    return jsified.resolve(modName, rns);
  }

  let name: string = sanitizeIdentifierName(null, type.name);
  let typeName: string;

  if (type.namespace === null) {
    typeName = type.name;
  } else {
    let ns_name = type.namespace || modName;

    let current_rns = rns.namespace(modName);
    let ns = rns.namespace(ns_name);

    if (ns && (ns.hasSymbol(name) || ns.hasSymbol(`${ns_name}.${name}`))) {
      if (current_rns) {
        current_rns.addImport(ns_name);
      }

      if (modName === ns_name) {
        typeName = `${name}`;
      } else {
        typeName = `${ns_name}.${name}`;
      }
    } else if (ns) {
      // Handle "class callback" types (they're in a definition-merged module)
      let [cb, corrected_name] = ns.findClassCallback(name);
      let resolved_name: string | null = null;

      if (!cb) {
        resolved_name = ns.resolveSymbolFromTypeName(name);
      }

      let c_resolved_name: string | null = null;

      if (!c_resolved_name) {
        c_resolved_name = ns.resolveSymbolFromTypeName(`${ns_name}${name}`);
      }

      if (!cb && !resolved_name && !c_resolved_name) {
        // Don't warn if a missing import is at fault, this will be dealt with later.
        if (modName === ns_name) {
          console.error(`Attempting to fall back on c:type inference for ${ns_name}.${name}.`);
        }

        [cb, corrected_name] = ns.findClassCallback(`${ns_name}${name}`);

        if (cb) {
          console.error(
            `Falling back on c:type inference for ${ns_name}.${name} and found ${ns_name}.${corrected_name}.`
          );
        }
      }

      if (cb) {
        console.log(`Callback found: ${cb}.${corrected_name}`);
        typeName = `${cb}.${corrected_name}`;
      } else if (resolved_name) {
        if (modName === ns_name) {
          typeName = `${resolved_name}`;
        } else {
          typeName = `${ns_name}.${resolved_name}`;
        }
      } else if (c_resolved_name) {
        console.error(
          `Fell back on c:type inference for ${ns_name}.${name} and found ${ns_name}.${corrected_name}.`
        );
        if (modName === ns_name) {
          typeName = `${c_resolved_name}`;
        } else {
          typeName = `${ns_name}.${c_resolved_name}`;
        }
      } else if (modName === ns_name) {
        throw new Error(`Unable to resolve type ${type.name} in same namespace ${ns_name}!`);
      } else {
        if (current_rns) {
          current_rns.addImport(ns_name);
        } else {
          console.log("Failed to add implicit import for current namespace.");
        }

        typeName = `any`;
      }
    } else {
      typeName = `any`;
    }
  }

  return `${typeName}`;
}
