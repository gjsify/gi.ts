import * as React from "react";

import { Prop, Field } from "../types/nodes.js";
import Doc from "./Doc.js";

import Type from "./Type.js";

export interface PropertyProps {
  node: Prop | Field;
}

const PropertyElement: React.FC<PropertyProps> = ({ node }) => {
  return (
    <div className="property" id={node.name}>
      {node.name}: <Type type={node.type} />
      {node.doc && <Doc doc={node.doc} />}
    </div>
  );
};

export default PropertyElement;
