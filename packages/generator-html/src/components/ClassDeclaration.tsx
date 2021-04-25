import * as React from "react";
import { useContext } from "react";

import { ClassDeclaration, RecordDeclaration } from "../types/nodes";

import List from "./List";
import Type from "./Type";

import { LinkContext } from "../renderer";
import { NamespaceContext } from "../path";

export interface ClassProps {
  node: ClassDeclaration | RecordDeclaration;
  as?: "p" | "h1" | "h2" | "h3";
}

const ClassDeclarationNode: React.FC<ClassProps> = ({ node, as = "p" }) => {
  const Link = useContext(LinkContext);

  const { getPath } = useContext(NamespaceContext);
  const path = getPath(node);

  const interfaces = node.implements?.filter(i => i != null) ?? [];
  const Element = as;

  return (
    <div className="class-declaration" id={node.name}>
      <Element>
        <span className="keyword">class </span>
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

        {interfaces.length > 0 ? (
          <>
            <span className="keyword"> implements </span>
            <span>
              <List separator=", ">
                {interfaces.map((i, n) => (
                  <Type key={n} type={i}></Type>
                ))}
              </List>
            </span>
          </>
        ) : (
          <></>
        )}
      </Element>
    </div>
  );
};

export default ClassDeclarationNode;
