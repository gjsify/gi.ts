import * as React from "react";
import { useContext } from "react";
import Type from "./Type";

import { InterfaceDeclaration } from "../types/nodes";

import { LinkContext } from "../renderer";
import { NamespaceContext } from "../path";

export interface InterfaceProps {
  node: InterfaceDeclaration;
  as?: "p" | "h1" | "h2" | "h3";
}

const InterfaceDeclaration: React.FC<InterfaceProps> = ({ node, as = "p" }) => {
  const Link = useContext(LinkContext);
  const { getPath } = useContext(NamespaceContext);
  const path = getPath(node);
  const Element = as;

  return (
    <div className="class-declaration" id={node.name}>
      <Element>
        <span className="keyword">interface </span>
        <Link to={path}>{node.name}</Link>

        {node.extends ? (
          <>
            <span className="keyword"> extends </span>
            <span>
              <Type type={node.extends}></Type>
            </span>
          </>
        ) : (
          <></>
        )}
      </Element>
    </div>
  );
};

export default InterfaceDeclaration;
