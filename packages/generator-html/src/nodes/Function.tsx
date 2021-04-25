import * as React from "react";
import { Function } from "../types/nodes";

import Parameter from "../components/Parameter";
import List from "../components/List";
import Type from "../components/Type";

import Doc from "../components/Doc";

import Metadata from "../components/Metadata";

export interface FunctionProps {
  node: Function;
}

const FunctionNode: React.FC<FunctionProps> = ({ node }) => {
  if (!node) {
    return <span>...</span>;
  }

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
      {node.name}(
      <List separator=", ">{node.parameters?.map((p, n) => <Parameter key={n} node={p} />) ?? []}</List>
      ): {ReturnType}
      <div className="documentation">
        {node.metadata && <Metadata metadata={node.metadata} />}
        {node.doc && <Doc doc={node.doc} />}
      </div>
    </div>
  );
};

export default FunctionNode;
