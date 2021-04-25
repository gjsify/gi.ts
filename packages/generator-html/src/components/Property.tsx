import * as React from "react";

import { Prop, Field } from "../types/nodes";

import Type from "./Type";

export interface PropertyProps {
  node: Prop | Field;
}

const PropertyElement: React.FC<PropertyProps> = ({ node }) => {
  return (
    <div id={node.name}>
      {node.name}: <Type type={node.type} />
    </div>
  );
};

export default PropertyElement;
