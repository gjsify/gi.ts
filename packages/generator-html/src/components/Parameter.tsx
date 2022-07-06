import * as React from "react";
import { Parameter } from "../types/nodes.js";

import Type from "./Type.js";

export interface ParameterProps {
  node: Parameter;
}

const ParameterElement: React.FC<ParameterProps> = ({ node }) => {
  return (
    <span className="param">
      {node.name}: <Type type={node.type} />
    </span>
  );
};

export default ParameterElement;
