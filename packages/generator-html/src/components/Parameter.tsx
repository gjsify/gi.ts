import * as React from "react";
import { Parameter } from "../types/nodes";

import Type from "./Type";

export interface ParameterProps {
  node: Parameter;
}

const ParameterElement: React.FC<ParameterProps> = ({ node }) => {
  return (
    <span>
      {node.name}: <Type type={node.type} />
    </span>
  );
};

export default ParameterElement;
