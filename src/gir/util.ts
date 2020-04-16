import { GirNSRegistry, GirNamespace } from "./namespace";
import { ClassMethodParameter } from "../xml";
import { VariableType, Type, ClassType, ArrayVariableType, NativeType } from "../gir";

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

/* Decode the type */
export function getType(modName: string, _ns: GirNamespace, param: any): VariableType | ArrayVariableType {
  let name = "";
  let arrayDepth: number | null = null;
  let length: number | null = null;

  let parameter = param as ClassMethodParameter;
  if (parameter.array && parameter.array[0]) {
    arrayDepth = 1;

    const [array] = parameter.array;

    if (array.$.length != null) {
      try {
        length = Number.parseInt(array.$.length);
      } catch (err) {
        console.error(`Error parsing array length: ${array.$.length}`);
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
  } else if (parameter.varargs || (parameter.$ && parameter.$.name === "...")) {
    arrayDepth = 1;
    name = "any";
  } else {
    name = "unknown";
    console.log("Unknown type: ", JSON.stringify(parameter.$, null, 4), "\nMarking as unknown!");
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

  let variableType: VariableType;

  if (baseType.namespace) {
    variableType = VariableType.new({ ...baseType, nullable });
  } else {
    if (resolvePrimitiveType(name)) {
      variableType = VariableType.new({ name: baseType.name, nullable });
    } else {
      variableType = VariableType.new({
        name: baseType.name,
        namespace: modName,
        nullable
      });
    }
  }

  if (arrayDepth != null) {
    return ArrayVariableType.new({ ...variableType, arrayDepth, length });
  } else {
    return variableType;
  }
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

export function parseTypeString(type: string): ClassType {
  if (type.includes(".")) {
    const parts = type.split(".");

    if (parts.length > 2) {
      throw new Error(`Invalid type string ${type} passed.`);
    }

    const [namespace, name] = parts;

    return new ClassType(name, namespace);
  } else {
    return new ClassType(type, null);
  }
}

export function resolvePrimitiveType(name: string): string | null {
  let typeName: string | null = null;

  switch (name) {
    case "":
      console.error("Resolving '' to any on " + name);
      typeName = "any";
      break;
    case "filename":
      typeName = "string";
      break;
    // Pass this through
    case "GType":
      return "GType";
    case "utf8":
      typeName = "string";
      break;
    case "void": // Support TS "void"
    case "none":
      typeName = "void";
      break;
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
      typeName = "number";
      break;
    case "gboolean":
      typeName = "boolean";
      break;
    case "gpointer": // This is typically used in callbacks to pass data, so we'll allow anything.
      typeName = "any";
      break;
    case "object":
      typeName = "object";
      break;
    case "va_list":
      typeName = "any";
      break;
    case "guintptr": // You can't use pointers in GJS! (at least that I'm aware of)
      typeName = "never";
      break;
    case "never": // Support TS "never"
      typeName = "never";
      break;
    case "unknown": // Support TS "unknown"
      typeName = "unknown";
      break;
    case "any": // Support TS "any"
      typeName = "any";
      break;
    case "this": // Support TS "this"
      typeName = "this";
      break;
    case "number": // Support TS "number"
      typeName = "number";
      break;
    case "string": // Support TS "string"
      typeName = "string";
      break;
    case "boolean": // Support TS "boolean"
      typeName = "boolean";
      break;
    case "object": // Support TS "object"
      typeName = "object";
      break;
    case "GLib.SList":
      // GJS translates GLib lists to JS arrays
      typeName = "string[]";
      break;
    // TODO Support struct-for directives
    case "GObject.ObjectClass":
      typeName = "any";
      break;
  }
  return typeName;
}

// Inspired by gir2dts' resolveType
export function resolveType(modName: string, rns: GirNSRegistry, type: Type) {
  let ns_name = modName;
  let name: string = sanitizeIdentifierName(null, type.name);

  if (type instanceof NativeType) {
    return type.name;
  }

  if (type.namespace) {
    ns_name = type.namespace;
  }

  let current_rns = rns.namespace(modName);
  let ns = rns.namespace(ns_name);

  let typeSuffix: string = "";

  if (type instanceof ArrayVariableType) {
    if (type.arrayDepth === 1) {
      typeSuffix = "[]";
    } else {
      typeSuffix = "".padStart(2 * type.arrayDepth, "[]");
    }
  }

  if (type instanceof VariableType) {
    if (type.anyified) {
      typeSuffix += " | any";
    }

    // TODO Check that this doesn't mean the array type itself can be null.
    typeSuffix = type.nullable ? typeSuffix + " | null" : typeSuffix;
  }

  let typeName: string;

  // Some "primitives" are converted from namespaced types (e.g. GLib.SList)
  const primitive = resolvePrimitiveType(type.name) || resolvePrimitiveType(`${ns_name}.${name}`);

  // Handle primitive overrides (w/ namespace)
  if (primitive != null) {
    typeName = primitive;
  } else {
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

  return `${typeName}${typeSuffix}`;
}
