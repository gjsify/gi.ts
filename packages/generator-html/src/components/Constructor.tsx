import * as React from "react";
import { ClassMethod, Constructor } from "../types/nodes";

import Parameter from "./Parameter";
import List from "./List";

import Doc from "./Doc";

import Metadata from "./Metadata";

export interface ConstructorProps {
  node: Constructor | ClassMethod;
  isMain?: boolean;
}

const ConstructorElement: React.FC<ConstructorProps> = ({ node, isMain = false }) => {
  return (
    <div>
      {isMain ? "constructor" : node.name}(
      <List separator=", ">{node.parameters?.map((p, n) => <Parameter key={n} node={p} />) ?? []}</List>)
      <div className="documentation">
        {node.metadata && <Metadata metadata={node.metadata} />}
        {node.doc && <Doc doc={node.doc} />}
      </div>
    </div>
  );
};

export default ConstructorElement;
