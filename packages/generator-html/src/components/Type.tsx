import * as React from "react";

import List from "./List";

import { namespaceReference } from "../util";

import { Type } from "../types/nodes";
import { LinkContext } from "../renderer";
import { NamespaceContext } from "../path";

/**
 * Translate a primitive type into a MDN link.
 * @param type
 */
function getPrimitiveLink(type: Type): string | null {
  if (
    type.kind === TypeKind.native &&
    ["Uint8Array", "boolean", "number", "string", "null"].includes(type.type) &&
    type.type
  ) {
    return `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/${type.type.toLowerCase()}`;
  } else {
    return null;
  }
}

const TypeKind = {
  or: "or",
  tuple: "tuple",
  identifier: "identifier",
  native: "native",
  array: "array",
  nulled: "null",
  closure: "closure"
} as const;

export interface TypeProps {
  type: Type | undefined;
}

/**
 * A recursive type renderer.
 *
 * Handles:
 * - Union/Or Types
 * - Tuple Types
 * - Identifiers
 * - Native Types (e.g. string, number)
 * - Array Types
 * - Nullables
 * - Closures
 *
 * The render will stop recursively rendering types at 50 depth.
 */
const TypeElement: React.FC<TypeProps> = ({ type }) => {
  const Link = React.useContext(LinkContext);
  const { meta } = React.useContext(NamespaceContext);

  const ref = namespaceReference();

  if (!type) {
    return <span className="missing-type"></span>;
  }

  function parseType(type: Type, depth = 0): JSX.Element {
    if (depth > 50) {
      return <span className="overly-deep-type">...</span>;
    }

    const parseChildType = (type: Type) => parseType(type, depth + 1);

    switch (type.kind) {
      case TypeKind.tuple:
        return (
          <List separator=", ">
            {type.types
              .map(t => parseChildType(t))
              .map((t, i) => (
                <span key={i}>{t}</span>
              ))}
          </List>
        );
      case TypeKind.or:
        return (
          <List separator=" | ">
            {type.types
              .map(t => parseChildType(t))
              .map((t, i) => (
                <span key={i}>{t}</span>
              ))}
          </List>
        );
      case TypeKind.identifier:
        return meta.namespace !== type.namespace ? (
          <Link to={`/${ref(type.namespace, meta)}/${type.name}`}>
            <span>
              {type.namespace}.{type.name}
            </span>
          </Link>
        ) : (
          <Link to={`/${ref(type.namespace, meta)}/${type.name}`}>
            <span>{type.name}</span>
          </Link>
        );
      case TypeKind.native:
        const primitive = getPrimitiveLink(type);

        if (primitive) {
          return (
            <a href={primitive}>
              <span>{type.type}</span>
            </a>
          );
        } else {
          return <span>{type.type}</span>;
        }
      case TypeKind.closure:
        return parseChildType(type.type);
      case TypeKind.nulled:
        return <span>{parseChildType(type.type)} | null</span>;
      case TypeKind.array:
        return (
          <span>
            {parseChildType(type.type)}
            {"".padEnd(type.depth * 2, "[]")}
          </span>
        );
      default:
        return <span>{`${JSON.stringify(type)}`}</span>;
    }
  }

  if (Array.isArray(type)) {
    return (
      <>
        <span>[</span>
        <List separator=", ">
          {type
            .map(t => parseType(t))
            .map((t, i) => (
              <span key={i}>{t}</span>
            ))}
        </List>
        <span>]</span>
      </>
    );
  }

  return parseType(type);
};

export default TypeElement;
