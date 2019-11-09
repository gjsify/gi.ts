import { EOL } from "os";
import {
  ConstantElement,
  NamespaceFunction,
  ClassMethodParameter,
  Direction,
  Enumeration,
  MemberElement,
  GirXML,
  BitfieldElement,
  ClassElement,
  RecordElement,
  Interface,
  ClassFunction,
  Alias,
  AliasElement,
  Constructor,
  ClassConstructor,
  ClassProperty,
  ClassVirtualMethod,
  Callback,
  NamespaceCallback,
  ClassField
} from "./xml";

export abstract class GirBase {
  name: string;

  constructor(name) {
    this.name = name;
  }

  static fromXML(_modName: string, _ns: GirNamespace, _gir: object): GirBase {
    throw new Error("GirBase cannot be instantiated");
  }

  abstract asString(modName: string, registry: GirNSRegistry): string;
}

// TODO Fix upstream bugs! (and add support for C type resolution maybe?)
const patches = {
  "Gee.FutureMapFunc": "Gee.MapFunc",
  "Gee.FutureLightMapFunc": "Gee.LightMapFunc",
  "Gee.FutureFlatMapFunc": "Gee.FlatMapFunc",
  "Gee.FutureZipFunc": "Gee.ZipFunc",
  "Granite.WidgetsSourceListVisibleFunc": "Granite.VisibleFunc",
  "Gitg.AsyncThreadFunc": "Gitg.ThreadFunc",
  "Gitg.WhenMappedOnMapped": "Gitg.OnMapped",
  "Tracker.SparqlError": "Tracker.Error"
};

// Inspired by gir2dts' resolveType
function resolveType(modName: string, rns: GirNSRegistry, type: Type) {
  let ns_name = modName;
  let name: string = type.raw_type || type.name;

  // Handle type overrides (w/ namespace)
  switch (name) {
    case "GLib.SList":
      // GJS translates GLib lists to JS arrays
      return "string[]";
    case "GObject.ObjectClass":
      return "any";
  }

  if (name in patches) {
    name = patches[name];
  }

  const parts = name.split(".");
  if (parts.length > 1) {
    ns_name = parts[0];
    name = parts.slice(1).join(".");
  }

  name = getName(name);

  let current_rns = rns.namespace(modName);
  let ns = rns.namespace(ns_name);

  let isArray: string;

  if (typeof type.isArray === "boolean") {
    isArray = type.isArray ? "[]" : "";
  } else {
    isArray = "".padStart(2 * type.isArray, "[]");
  }

  // TODO Check that this doesn't mean the array type itself can be null.
  isArray = type.nullable ? isArray + " | null" : isArray;

  // Handle primitive overrides (w/ namespace)
  switch (name) {
    case "":
      return "any" + isArray;
    case "filename":
      return "string" + isArray;
    // Pass this through
    case "GType":
      return "GType";
    case "utf8":
      return "string" + isArray;
    case "none":
      return "void" + isArray;
    case "double":
      return "number" + isArray;
    case "gshort":
      return "number" + isArray;
    case "guint32":
      return "number" + isArray;
    case "guint16":
      return "number" + isArray;
    case "gint16":
      return "number" + isArray;
    case "gunichar":
      return "number" + isArray;
    case "gint8":
      return "number" + isArray;
    case "gint32":
      return "number" + isArray;
    case "gushort":
      return "number" + isArray;
    case "gfloat":
      return "number" + isArray;
    case "gboolean":
      return "boolean" + isArray;
    case "gpointer":
      return "object" + isArray;
    case "gchar":
      return "number" + isArray;
    case "guint":
      return "number" + isArray;
    case "glong":
      return "number" + isArray;
    case "gulong":
      return "number" + isArray;
    case "gint":
      return "number" + isArray;
    case "guint8":
      return "number" + isArray;
    case "guint64":
      return "number" + isArray;
    case "gint64":
      return "number" + isArray;
    case "gdouble":
      return "number" + isArray;
    case "gssize":
      return "number" + isArray;
    case "gsize":
      return "number" + isArray;
    case "long":
      return "number" + isArray;
    case "object":
      return "object" + isArray;
    case "va_list":
      return "any" + isArray;
    case "never": // Support TS "never"
      return "never";
    case "guintptr": // You can't use pointers in GJS! (at least that I'm aware of)
      return "never";
    case "any": // Support TS "any"
      return "any";
    case "object": // Support TS "object"
      return "object";
    default:
      if (ns && (ns.hasSymbol(name) || ns.hasSymbol(`${ns_name}.${name}`))) {
        if (current_rns) {
          current_rns.addImport(ns_name);
        }

        if (modName === ns_name) {
          return `${name}${isArray}`;
        } else {
          return `${ns_name}.${name}${isArray}`;
        }
      } else {
        // Handle "class callback" types (they're in a definition-merged module)
        const [cb, corrected_name] = ns.findClassCallback(name);

        if (cb) {
          console.log(`Callback found: ${cb}.${corrected_name}${isArray}`);
          return `${cb}.${corrected_name}${isArray}`;
        }

        if (modName === ns_name) {
          return `unknown${isArray}`;
        } else {
          if (current_rns) {
            current_rns.addImport(ns_name);
          } else {
            console.log("Failed to add import for current namespace.");
          }
          return `any${isArray}`;
        }
      }
  }
}

function resolveParent(
  modName: string,
  rns: GirNSRegistry,
  parent: string
): GirClass | null {
  const parts = parent.split(".");
  const ns = parts.length > 1 ? parts[0] : modName;
  const name = parts.length > 1 ? parts.slice(1).join(".") : parent;

  const resolved_ns = rns.namespace(ns);

  if (resolved_ns) {
    const pclass = resolved_ns.getClass(name);
    if (pclass) {
      return pclass;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

interface Type {
  isArray: boolean | number;
  name: string;
  raw_type: string;
  nullable: boolean;
}

/* Decode the type */
function getType(_modName, _ns: GirNamespace, param: any): Type {
  let name = "";
  let isArray: boolean | number = false;

  let parameter = param as ClassMethodParameter;
  if (parameter.array) {
    isArray = true;
    if (parameter.array[0].type && parameter.array[0].type[0].$) {
      name = parameter.array[0].type[0].$["name"];
    } else if (parameter.array[0].array) {
      let arr = parameter.array[0];
      let depth = 1;

      while (Array.isArray(arr.array)) {
        arr = arr.array[0];
        depth++;
      }

      name = arr.type[0].$["name"] || "unknown";
      isArray = depth;
    } else {
      name = "unknown";
    }
  } else if (parameter.type && parameter.type[0] && parameter.type[0].$) {
    name = parameter.type[0].$["name"] || "unknown";
  } else if (parameter.varargs || (parameter.$ && parameter.$.name === "...")) {
    isArray = true;
    name = "any";
  } else {
    name = "unknown";
    console.log(
      "Unknown type: ",
      JSON.stringify(parameter.$, null, 4),
      "\nMarking as unknown!"
    );
  }

  const nullable =
    parameter.$ &&
    (parameter.$["allow-none"] === "1" || parameter.$["nullable"] === "1");

  let x = name.split(" ");
  if (x.length === 1) {
    name = x[0];
  } else {
    name = x[1];
  }

  return {
    name,
    nullable,
    isArray,
    raw_type: name
  };
}

export type GirClassMember = GirClassFunction;

export class GirFunctionParameter extends GirBase {
  type: Type;
  direction: Direction;
  isVarArgs: boolean = false;
  isOptional: boolean = false;

  constructor(name: string) {
    super(name);
  }

  asString(modName, registry: GirNSRegistry): string {
    const type = resolveType(modName, registry, this.type);
    if (this.isVarArgs) {
      return `...args: ${type}[]`;
    }

    if (this.isOptional) {
      return `${this.name}?: ${type}`;
    } else {
      return `${this.name}: ${type}`;
    }
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    parameter: ClassMethodParameter
  ): GirFunctionParameter {
    let name = getName(parameter.$.name);
    const fp = new GirFunctionParameter(name);
    if (
      !parameter.$.direction ||
      parameter.$.direction === "in" ||
      parameter.$.direction === "inout"
    ) {
      if (name === "...") {
        fp.isVarArgs = true;
        fp.name = "args";
      }

      fp.direction = parameter.$.direction;

      const opt = parameter.$.optional === "1";

      if (opt) {
        fp.isOptional = true;
      }

      fp.type = getType(modName, ns, parameter);
    } else if (
      parameter.$.direction === "out" ||
      parameter.$.direction === "inout"
    ) {
      fp.direction = parameter.$.direction;
      fp.type = getType(modName, ns, parameter);
    } else if (parameter.$.direction) {
      console.log("Unknown parameter direction: ", parameter.$.direction);
    }

    return fp;
  }
}

const VoidType: Type = {
  isArray: false,
  name: "void",
  raw_type: "void",
  nullable: false
};

const UnknownType: Type = {
  isArray: false,
  name: "unknown",
  raw_type: "unknown",
  nullable: false
};

export class GirFunction extends GirBase {
  parameters: GirFunctionParameter[] = [];
  return_type: Type = UnknownType;
  output_parameters: GirFunctionParameter[] = [];
  comment: string = "";
  comment_lines: string[] = [];

  constructor(name: string) {
    super(name);
  }

  params(name, registry): string {
    return this.parameters.map(p => p.asString(name, registry)).join(", ");
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    func: NamespaceFunction
  ): GirFunction {
    let name = getName(func.$.name);
    const fn = new GirFunction(name);
    fn.comment = (func.doc && func.doc[0]._) || "";
    fn.comment_lines = Array.from(fn.comment.match(/.{1,70}/g) || []);

    if (func.parameters) {
      const param = func.parameters[0].parameter;

      if (param) {
        const inputs = param.filter(
          parameter =>
            !parameter.$.direction ||
            parameter.$.direction === Direction.In ||
            parameter.$.direction === Direction.Inout
        );

        fn.parameters.push(
          ...inputs.map(i => GirFunctionParameter.fromXML(modName, ns, i))
        );

        // In TypeScript only the last parameter can be optional.
        fn.parameters.forEach((p, i, a) => {
          if (p.isOptional && i < a.length) {
            p.isOptional = false;
            p.type.nullable = true;
          }
        });

        const outputs = param.filter(
          parameter =>
            parameter.$.direction &&
            (parameter.$.direction === "out" ||
              parameter.$.direction === "inout")
        );

        fn.output_parameters.push(
          ...outputs.map(i => GirFunctionParameter.fromXML(modName, ns, i))
        );
      }
    }
    if (
      "return-value" in func &&
      func["return-value"] &&
      func["return-value"].length > 0
    ) {
      fn.return_type = getType(modName, ns, func["return-value"][0]);
    } else {
      fn.return_type = VoidType;
    }

    return fn;
  }

  return(name: string, registry: GirNSRegistry) {
    const type = resolveType(name, registry, this.return_type);
    if (this.output_parameters.length > 0) {
      const exclude_first = type === "void" || type === "";
      const returns = [
        ...(exclude_first ? [] : [`${type}`]),
        this.output_parameters.map(op => resolveType(name, registry, op.type))
      ];
      return `[${returns.join(", ")}]`;
    }

    return type;
  }

  asString(modName: string, registry: GirNSRegistry): string {
    return `/**
 * ${this.comment_lines.join("\n * ")}
 */
export function ${this.name}(${this.params(modName, registry)}): ${this.return(
      modName,
      registry
    )};`;
  }
}

export class GirCallback extends GirFunction {
  resolve_names: string[] = [];

  static fromXML(
    modName: string,
    ns: GirNamespace,
    func: NamespaceCallback
  ): GirCallback {
    const fn = GirFunction.fromXML(modName, ns, func);

    const {
      comment,
      comment_lines,
      name,
      output_parameters,
      parameters,
      return_type
    } = fn;

    const cb = new GirCallback(name);

    cb.resolve_names = [func.$.name];

    if (func.$["glib:type-name"]) {
      cb.resolve_names.push(func.$["glib:type-name"]);
    }

    Object.assign(cb, {
      comment,
      comment_lines,
      output_parameters,
      parameters,
      return_type
    });

    return cb;
  }

  asString(modName: string, registry: GirNSRegistry): string {
    return `
export type ${this.name} = (${this.params(modName, registry)}) => ${resolveType(
      modName,
      registry,
      this.return_type
    )};`;
  }
}

export class GirClass extends GirBase {
  parent: Type = null;
  interfaces: GirClass[] = [];
  members: GirClassMember[] = [];
  constructors: GirConstructor[] = [];
  _isInterface: boolean = false;
  _isForeign: boolean = false;
  props: GirProperty[] = [];
  violates_parent = [];
  callbacks: GirCallback[] = [];
  resolve_names: string[] = [];

  isInterface(): this is Interface {
    return this._isInterface;
  }

  isForeign(): boolean {
    return this._isForeign;
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    klass: ClassElement | RecordElement | Interface
  ): GirClass {
    console.log(
      `  >> Parsing definition ${klass.$.name} (${getName(klass.$.name)})...`
    );

    const clazz = new this(getName(klass.$.name));
    clazz.resolve_names = [klass.$.name];

    if (klass.$["glib:type-name"]) {
      clazz.resolve_names.push(klass.$["glib:type-name"]);
    }

    // TODO Fix this is_interface check.
    const is_interface: (k: typeof klass) => k is Interface = (
      k
    ): k is Interface => clazz.isInterface();

    const has_props: (k: typeof klass) => k is Interface | ClassElement = (
      k
    ): k is Interface | ClassElement => "property" in k;

    const has_constructor: (k: typeof klass) => k is ClassElement = (
      k
    ): k is ClassElement =>
      Object.getOwnPropertyNames(k).includes("constructor") &&
      Array.isArray(k.constructor);

    const has_field: (k: typeof klass) => k is ClassElement | RecordElement = (
      k
    ): k is ClassElement | RecordElement => "field" in k;

    try {
      // Setup parent type if this is an interface or class.
      if ((has_constructor(klass) || is_interface(klass)) && klass.$.parent) {
        clazz.parent = {
          raw_type: klass.$.parent,
          name: klass.$.parent,
          nullable: false,
          isArray: false
        };
      }

      if (has_constructor(klass) && Array.isArray(klass.constructor)) {
        for (let constructor of klass.constructor) {
          if (!constructor || !constructor.$) continue;

          if (constructor.$["name"] === "new") {
            continue;
          }

          if (
            constructor.$.introspectable &&
            constructor.$.introspectable === "0"
          ) {
            continue;
          }

          clazz.constructors.push(
            GirConstructor.fromXML(modName, ns, constructor)
          );
        }
      }

      // Instance Methods
      if (klass.method) {
        for (let method of klass.method) {
          if (method.$.introspectable && method.$.introspectable === "0") {
            continue;
          }

          clazz.members.push(
            GirClassFunction.fromXML(modName, ns, method as ClassFunction)
          );
        }
      }

      // Callback Types
      if (has_constructor(klass) && klass.callback) {
        for (let callback of klass.callback) {
          if (callback.$.introspectable && callback.$.introspectable === "0") {
            continue;
          }

          clazz.callbacks.push(GirCallback.fromXML(modName, ns, callback));
        }
      }

      // Virtual Methods
      if (has_constructor(klass) && klass["virtual-method"]) {
        for (let method of klass["virtual-method"]) {
          if (method.$.introspectable && method.$.introspectable === "0") {
            continue;
          }

          clazz.members.push(
            GirVirtualClassFunction.fromXML(modName, ns, method)
          );
        }
      }

      // Static methods (functions)
      if (!is_interface(klass) && klass.function) {
        for (let func of klass.function) {
          if (func.$.introspectable && func.$.introspectable === "0") {
            continue;
          }

          if (func.$["name"] === "newv") continue; // TODO
          clazz.members.push(
            GirStaticClassFunction.fromXML(modName, ns, func as ClassFunction)
          );
        }
      }

      const protected_names = [
        "draw",
        "show_all",
        "parent_instance",
        "parent",
        "parent_class",
        "object_class"
      ];

      // Properties
      if (has_props(klass) && klass.property) {
        for (let prop of klass.property) {
          if (prop.$.introspectable && prop.$.introspectable === "0") {
            continue;
          }

          const property = GirProperty.fromXML(modName, ns, prop);
          if (
            !clazz.members.some(n => n.name === property.name) &&
            !protected_names.includes(property.name)
          ) {
            clazz.props.push(property);
          }
        }
      }

      // Is this a foreign type? (don't allow construction if foreign)
      if (!has_constructor(klass)) {
        const kl = klass as RecordElement;
        clazz._isForeign = kl.$.foreign && kl.$.foreign === "1";
      } else {
        clazz._isForeign = false;
      }

      // Fields (for "non-class" records)
      if (!has_constructor(klass) && has_field(klass) && klass.field) {
        for (let field of klass.field) {
          if (field.$.introspectable && field.$.introspectable === "0") {
            continue;
          }

          // TODO investigate these field callbacks.
          if (field.callback) {
            continue;
          }

          if (field.$.name.startsWith("_")) {
            continue;
          }

          const property = GirProperty.fromXML(modName, ns, field);
          if (
            !clazz.members.some(n => n.name === property.name) &&
            !clazz.props.some(n => n.name === property.name) &&
            !protected_names.includes(property.name)
          ) {
            clazz.props.push(property);
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
    return clazz;
  }

  protected implements() {
    if (this.interfaces.length > 0) {
      return `implements ${this.interfaces.map(i => i.name).join(", ")}`;
    }
    return "";
  }

  protected extends(modName, ns) {
    if (this.parent) {
      return `extends ${resolveType(modName, ns, this.parent)}`;
    }

    return "";
  }

  asString(modName: string, registry: GirNSRegistry): string {
    let resolved_parents: GirClass[] = [];

    {
      const resolve_type =
        (this.parent && resolveType(modName, registry, this.parent)) || null;
      let resolved_parent =
        (resolve_type && resolveParent(modName, registry, resolve_type)) ||
        null;

      let inheritanceLevel = 0;
      while (resolved_parent != null) {
        if (inheritanceLevel > 100) {
          console.log(
            `Detected infinite inheritance in ${modName}... breaking at 100.`
          );
          break;
        }

        resolved_parents.push(resolved_parent);
        resolved_parent =
          (resolved_parent.parent &&
            resolved_parent.parent.name &&
            resolveParent(modName, registry, resolved_parent.parent.name)) ||
          null;
        inheritanceLevel++;
      }
    }

    const name = this.name;

    return `${
      this.callbacks.length > 0
        ? `export module ${name} {
          ${this.callbacks.map(c => c.asString(modName, registry)).join(EOL)}
}
`
        : ``
    }export ${
      this.isInterface() ? "interface" : "class"
    } ${name} ${this.extends(modName, registry)}${this.implements()} {${
      this.isInterface() || this.isForeign()
        ? ""
        : "\nconstructor(config?: properties);\n"
    }
${this.props
  .filter(p => p.name)
  .reduce(
    (prev, next) => {
      const conflicts = resolved_parents.some(p =>
        p.props.some(
          p =>
            p.name &&
            (p.name == next.name &&
              p.typeName.raw_type !== next.typeName.raw_type)
        )
      );
      if (conflicts) {
        const never = new GirProperty(next.name);
        never.typeName = {
          name: "never",
          raw_type: "never",
          isArray: false,
          nullable: false
        };
        prev.push(next, never);
      } else {
        prev.push(next);
      }
      return prev;
    },
    [] as Array<GirProperty>
  )
  .map(p => p.asString(modName, registry))
  .join(EOL)}${this.constructors
      .filter(p => p.name)
      .reduce(
        (prev, next) => {
          // TODO This should catch most of them.
          // TODO Cleanup the conflicts code (its very messy)
          // Essentially, this loops through the each of the constructors of each parent
          // searching for a conflicting name. If it finds one, it inserts a duplicate
          // constructor with the "never" type. This overloads the child constructor
          // and makes it compatible with the parent but because you can never
          // use a never type, when a user tries to use the constructor it
          // defaults to the correct one.
          const conflicts = resolved_parents.some(resolved_parent =>
            resolved_parent.constructors.some(
              p =>
                p.name &&
                (p.name == next.name &&
                  (p.parameters.length !== next.parameters.length ||
                    next.parameters.some(
                      (np, i) =>
                        p.parameters[i].type.raw_type !== np.type.raw_type
                    )))
            )
          );
          if (conflicts) {
            const never = new GirConstructor(next.name);
            const never_param = new GirFunctionParameter("args");
            never_param.isVarArgs = true;
            never_param.type = {
              name: "never",
              raw_type: "never",
              nullable: false,
              isArray: false
            };
            never.parameters = [never_param];
            never.return_value = next.return_value;
            prev.push(next, never);
          } else {
            prev.push(next);
          }
          return prev;
        },
        [] as Array<GirConstructor>
      )
      .map(p => p.asString(modName, registry))
      .join(EOL)}
${this.members
  .filter(m => m.name)
  .reduce(
    (prev, next) => {
      // TODO This should catch most of them.
      const conflicts = resolved_parents.some(resolved_parent =>
        resolved_parent.members.some(
          p =>
            p.name &&
            (p.name == next.name &&
              (p.parameters.length !== next.parameters.length ||
                p.return_type.raw_type !== next.return_type.raw_type ||
                next.parameters.some(
                  (np, i) => p.parameters[i].type.raw_type !== np.type.raw_type
                )))
        )
      );
      if (conflicts) {
        const never = new GirClassFunction(next.name);
        const never_param = new GirFunctionParameter("args");
        never_param.direction = Direction.In;
        never_param.isVarArgs = true;
        never_param.type = {
          name: "never",
          raw_type: "never",
          nullable: false,
          isArray: false
        };
        never.parameters = [never_param];
        never.return_type = {
          name: "never",
          raw_type: "never",
          nullable: false,
          isArray: true
        };
        prev.push(next, never);
      } else {
        prev.push(next);
      }
      return prev;
    },
    [] as Array<GirClassFunction>
  )
  .map(m => m.asString(modName, registry))
  .join(EOL)}
}`;
  }
}

export class GirInterface extends GirClass {
  isInterface(): this is Interface {
    return true;
  }
}

export class GirProperty extends GirBase {
  writable: boolean = false;
  typeName: Type;

  asString(modName: string, registry: GirNSRegistry): string {
    const ns = registry.namespace(modName);
    const invalid = this.name !== getName(this.name);
    if (this.writable) {
      return `${invalid ? `"${this.name}"` : this.name}: ${resolveType(
        modName,
        registry,
        this.typeName
      ) || "any"};`;
    } else {
      return `readonly ${invalid ? `"${this.name}"` : this.name}: ${resolveType(
        modName,
        registry,
        this.typeName
      ) || "any"};`;
    }
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    prop: ClassProperty | ClassField
  ): GirProperty {
    let name = prop.$["name"];
    let _name = name.replace(/[-]/g, "_");
    const property = new GirProperty(_name);
    property.writable = prop.$["writable"] === "1";
    property.typeName = getType(modName, ns, prop);
    return property;
  }
}

export class GirClassFunction extends GirBase {
  parameters: GirFunctionParameter[] = [];
  return_type: Type = UnknownType;
  output_parameters: GirFunctionParameter[] = [];

  static fromXML(
    modName: string,
    ns: GirNamespace,
    m: ClassFunction
  ): GirClassFunction {
    const func = new this(getName(m.$.name));
    const fn = GirFunction.fromXML(
      modName,
      ns,
      (m as unknown) as NamespaceFunction
    );
    func.output_parameters = fn.output_parameters;
    func.parameters = fn.parameters;
    func.return_type = fn.return_type;
    func.name = fn.name;
    return func;
  }

  asString(modName: string, registry: GirNSRegistry) {
    return `${this.name}(${GirFunction.prototype.params.call(
      this,
      modName,
      registry
    )}): ${GirFunction.prototype.return.call(this, modName, registry)};`;
  }
}

export class GirVirtualClassFunction extends GirClassFunction {
  asString(modName: string, registry: GirNSRegistry) {
    return `vfunc_${this.name}(${GirFunction.prototype.params.call(
      this,
      modName,
      registry
    )}): ${GirFunction.prototype.return.call(this, modName, registry)};`;
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    m: ClassVirtualMethod
  ): GirVirtualClassFunction {
    return GirClassFunction.fromXML.call(this, modName, ns, m);
  }
}

export class GirStaticClassFunction extends GirClassFunction {
  asString(modName: string, registry: GirNSRegistry) {
    return `static ${this.name}(${GirFunction.prototype.params.call(
      this,
      modName,
      registry
    )}): ${GirFunction.prototype.return.call(this, modName, registry)};`;
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    m: ClassFunction
  ): GirStaticClassFunction {
    return GirClassFunction.fromXML.call(this, modName, ns, m);
  }
}

export class GirConstructor extends GirBase {
  output_parameters: GirFunctionParameter[] = [];
  parameters: GirFunctionParameter[] = [];
  return_value: Type = UnknownType;

  static fromXML(
    modName: string,
    ns: GirNamespace,
    m: ClassConstructor
  ): GirConstructor {
    const constr = new GirConstructor(getName(m.$.name));
    const fn = GirFunction.fromXML(
      modName,
      ns,
      (m as unknown) as NamespaceFunction
    );
    constr.return_value = fn.return_type;
    constr.output_parameters = fn.output_parameters;
    constr.parameters = fn.parameters;
    constr.name = fn.name;
    return constr;
  }

  asString(modName: string, registry: GirNSRegistry) {
    return `static ${this.name}(${GirFunction.prototype.params.call(
      this,
      modName,
      registry
    )}): ${resolveType(modName, registry, this.return_value)};`;
  }
}

export class GirEnumMember extends GirBase {
  value: string;

  static fromXML(
    _: string,
    _ns: GirNamespace,
    m: MemberElement
  ): GirEnumMember {
    const upper = m.$.name.toUpperCase();
    const em = new GirEnumMember(upper);
    em.value = m.$.value;
    return em;
  }

  asString(_: string, __: GirNSRegistry): string {
    const sanitized = getName(this.name);
    const invalid = sanitized !== this.name;
    if (this.value != null) {
      return invalid
        ? `"${this.name}" = ${this.value},`
        : `${this.name} = ${this.value},`;
    } else {
      return invalid ? `"${this.name}",` : `${this.name},`;
    }
  }
}

export class GirEnum extends GirBase {
  members: GirEnumMember[] = [];
  asString(modName: string, registry: GirNSRegistry): string {
    try {
      return `export enum ${this.name} {
${this.members.map(member => `${member.asString(modName, registry)}`).join(EOL)}
}`;
    } catch (e) {
      console.error(e);
    }
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    m: Enumeration | BitfieldElement
  ): GirEnum {
    const em = new GirEnum(getName(m.$.name));
    em.members.push(
      ...m.member.map(m => GirEnumMember.fromXML(modName, ns, m))
    );
    return em;
  }
}

export class GirAlias extends GirBase {
  type: Type;

  asString(modName: string, registry: GirNSRegistry): string {
    try {
      const type = resolveType(modName, registry, this.type);
      return `export type ${this.name} = ${type};`;
    } catch (e) {
      console.error(e);
    }
  }

  static fromXML(modName: string, ns: GirNamespace, m: AliasElement): GirAlias {
    if (!m.$.name) {
      console.error(`Alias in ${modName} lacks name.`);
      return null;
    }
    const alias = new GirAlias(getName(m.$.name));
    alias.type = getType(modName, ns, m);
    return alias;
  }
}

export class GirConst extends GirBase {
  type: Type;

  constructor(name: string) {
    super(name);
  }

  static fromXML(
    modName: string,
    ns: GirNamespace,
    constant: ConstantElement
  ): GirConst {
    const x = new GirConst(getName(constant.$.name));
    x.type = getType(modName, ns, constant);
    return x;
  }

  asString(modName: string, registry: GirNSRegistry): string {
    return `export const ${this.name}: ${resolveType(
      modName,
      registry,
      this.type
    )};`;
  }
}

export type GirNSMember = GirClass | GirFunction | GirConst | GirEnum;

export class GirNSRegistry {
  mapping: Map<string, GirNamespace> = new Map();

  namespace(name: string): GirNamespace | null {
    return this.mapping.get(name) || null;
  }

  load(name: string, gir: GirXML) {
    this.mapping.set(name, GirNamespace.fromXML(name, null, gir));
  }
}

export class GirNamespace extends GirBase {
  name: string;
  imports: string[] = [];
  members: GirNSMember[] = [];

  addImport(ns_name: string) {
    if (!this.imports.includes(ns_name)) {
      this.imports.push(ns_name);
    }
  }

  getClass(name: string) {
    return this.members.find(
      (m): m is GirClass => m.name === name && m instanceof GirClass
    );
  }

  hasSymbol(name: string) {
    return this.members.some(
      m => m.name === name
      // TODO Support better lookups here (we do for class callbacks)
      // (m instanceof GirClass && m.resolve_names.includes(name))
    );
  }

  findClassCallback(name: string): [string | null, string] {
    const clazzes = this.members.filter(
      (m): m is GirClass => m instanceof GirClass
    );
    const res = clazzes
      .map<[GirClass, GirCallback]>(m => [
        m,
        m.callbacks.find(c => c.name === name || c.resolve_names.includes(name))
      ])
      .find(([_, m]) => m != null);

    if (res) {
      return [res[0].name, res[1].name];
    } else {
      return [null, name];
    }
  }

  asString(modName: string, registry: GirNSRegistry) {
    console.log(`Resolving the types of ${modName}...`);
    const name = this.name;
    const base = `
/**
 * ${name.toLowerCase()}.d.ts
 */
type properties = { [key: string]: any };
type GType = object;
${this.members.map(m => `${m.asString(modName, registry)}`).join(`${EOL}`)}`;

    // Resolve imports after we stringify everything else, sometimes we have to ad-hoc add an import.
    const imports = `${this.imports
      .map(i => `import * as ${i} from "${i.toLowerCase()}";`)
      .join(`${EOL}`)}`;

    const raw_output = [imports, base].join("\n");

    // Cleanup and indent the output
    const [, output] = raw_output.split("\n").reduce(
      (prev, next) => {
        const trimmed = next.trim();

        if (trimmed === "") {
          return prev;
        }

        let [indent, str] = prev;

        if (!trimmed.startsWith("*") && trimmed.endsWith("}")) {
          indent--;
        }

        const indented = next.padStart(next.length + indent * 4, " ");

        if (!trimmed.startsWith("*") && trimmed.endsWith("{")) {
          indent++;
        }

        return [indent, `${str}\n${indented}`];
      },
      [0, ""] as [number, string]
    );

    console.log(`Printing ${modName}...`);

    return output;
  }

  static fromXML(modName: string, _: GirNamespace, repo: GirXML): GirNamespace {
    console.log(`Parsing ${modName}...`);
    const defaultImports = ["GObject", "Gio", "GLib"].filter(
      a => a !== modName
    );

    const building = new GirNamespace(modName);
    const includes = repo.repository.include || [];
    const ns = repo.repository.namespace[0];

    building.imports.push(...defaultImports);

    building.imports.push(
      ...includes
        .map(i => i.$.name)
        .filter(name => !defaultImports.includes(name))
    );

    if (ns.callback)
      building.members.push(
        ...ns.callback
          .filter(b => !b.$.introspectable || b.$.introspectable !== "0")
          .map(callback => GirCallback.fromXML(modName, building, callback))
      );

    // Constants
    if (ns.constant)
      building.members.push(
        ...ns.constant
          .filter(b => !b.$.introspectable || b.$.introspectable !== "0")
          .map(constant => GirConst.fromXML(modName, building, constant))
      );

    // Get the requested functions
    if (ns.function)
      building.members.push(
        ...ns.function
          .filter(b => !b.$.introspectable || b.$.introspectable !== "0")
          .map(func => GirFunction.fromXML(modName, building, func))
      );

    if (ns.enumeration)
      // Get the requested enums
      building.members.push(
        ...ns.enumeration.map(enumeration =>
          GirEnum.fromXML(modName, building, enumeration)
        )
      );

    if (ns.alias) {
      building.members.push(
        ...ns.alias
          .filter(b => !b.$.introspectable || b.$.introspectable !== "0")
          .map(alias => GirAlias.fromXML(modName, building, alias))
      );
    }

    if (ns["glib:boxed"]) {
      building.members.push(
        ...ns["glib:boxed"]
          .filter(b => !b.$.introspectable || b.$.introspectable !== "0")
          .map(boxed => {
            let alias = new GirAlias(boxed.$["glib:name"]);
            alias.type = {
              name: "object",
              raw_type: "object",
              isArray: false,
              nullable: false
            };
            return alias;
          })
      );
    }

    // Bitfield is a type of enum
    if (ns.bitfield)
      building.members.push(
        ...ns.bitfield
          .filter(b => !b.$.introspectable || b.$.introspectable !== "0")
          .map(field => GirEnum.fromXML(modName, building, field))
      );

    // Get the requested classes
    if (ns.class)
      building.members.push(
        ...ns.class
          .filter(b => !b.$.introspectable || b.$.introspectable !== "0")
          .map(klass => GirClass.fromXML(modName, building, klass))
      );

    if (ns.record)
      building.members.push(
        ...ns.record
          .filter(b => !b.$.introspectable || b.$.introspectable !== "0")
          // _ marks these records as private.
          .filter(b => !b.$.name.startsWith("_"))
          // Don't generate records for structs
          .filter(b => typeof b.$["glib:is-gtype-struct-for"] !== "string")
          .map(record => GirClass.fromXML(modName, building, record))
      );

    if (ns.union) {
      building.members.push(
        ...ns.union
          .filter(b => !b.$.introspectable || b.$.introspectable !== "0")
          .map(union => GirClass.fromXML(modName, building, union))
      );
    }

    if (ns.interface)
      building.members.push(
        ...ns.interface.map(inter =>
          GirInterface.fromXML(modName, building, inter)
        )
      );

    return building;
  }
}

const reservedWords = [
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
  "double",
  "else",
  "enum",
  "eval",
  "export",
  "extends",
  "false",
  "final",
  "finally",
  "float",
  "for",
  "function",
  "goto",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "int",
  "interface",
  "let",
  "long",
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

// TODO Prevent reserved keywords from being used in identifiers
function getName(name) {
  if (name === "") {
    return `""`;
  }

  if (reservedWords.includes(name)) {
    return `_${name}`;
  }

  const sanitize = (s: string) => s.replace(/[^A-z0-9_]/gi, "_");
  let sanitized = sanitize(name);

  if (sanitized.match(/^[^A-z_]/) != null) {
    // TODO How does GJS handle things that start with numbers...
    sanitized = `Gjs_${name}`;
  }

  return sanitized;
}
