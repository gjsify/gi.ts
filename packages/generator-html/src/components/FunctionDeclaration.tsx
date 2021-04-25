import * as React from "react";
import { useContext } from "react";
import { FunctionDeclaration } from "../types/nodes";

import Parameter from "./Parameter";
import List from "./List";
import Type from "./Type";

import { LinkContext } from "../renderer";
import { NamespaceContext } from "../path";

export interface FunctionProps {
  node: FunctionDeclaration;
}

// function func(param1: boolean, param2: string): ReturnType;

const FunctionDeclaration: React.FC<FunctionProps> = ({ node }) => {
  const Link = useContext(LinkContext);

  const { getPath } = useContext(NamespaceContext);
  const path = getPath(node);

  const parameters = node.parameters?.filter(p => p != null) ?? [];
  const ReturnType = Array.isArray(node.returnType) ? (
    <List separator=", ">
      {node.returnType.map((r, i) => (
        <Type key={i} type={r} />
      ))}
    </List>
  ) : (
    <Type type={node.returnType} />
  );

  return (
    <div>
      <Link to={path}>{node.name}</Link>
      <span>(</span>
      <List separator=", ">
        {parameters.map((p, n) => (
          <Parameter key={n} node={p} />
        ))}
      </List>
      <span>): </span>
      {ReturnType}
    </div>
  );
};

export default FunctionDeclaration;
