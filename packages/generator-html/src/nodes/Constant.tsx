import * as React from "react";

import { Constant } from "../types/nodes";

import ConstantDeclaration from "../components/ConstantDeclaration";
import Doc from "../components/Doc";
import Metadata from "../components/Metadata";

export interface ConstantProps {
  node: Constant;
}

const ConstantNode: React.FC<ConstantProps> = ({ node }) => {
  return (
    <div className="constant">
      <ConstantDeclaration node={{ ...node }} link={false} />

      {node.metadata && <Metadata metadata={node.metadata} />}
      {node.doc && <Doc doc={node.doc} />}
    </div>
  );
};

export default ConstantNode;
