import * as React from "react";
import { useContext } from "react";

import { EnumDeclaration } from "../types/nodes";

import { LinkContext } from "../renderer";
import { NamespaceContext } from "../path";

export interface EnumProps {
  node: EnumDeclaration;
  as?: "p" | "h1" | "h2" | "h3";
}

const EnumDeclaration: React.FC<EnumProps> = ({ node, as = "p" }) => {
  const Link = useContext(LinkContext);

  const { getPath } = useContext(NamespaceContext);
  const path = getPath(node);

  const Element = as;

  return (
    <div className="enum-declaration" id={node.name}>
      <Element>
        <span className="keyword">enum </span>
        <Link to={path}>{node.name}</Link>
      </Element>
    </div>
  );
};

export default EnumDeclaration;
