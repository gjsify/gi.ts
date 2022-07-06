import * as React from 'react';

import { Constant } from '../types/nodes.js';

import ConstantDeclaration from '../components/ConstantDeclaration.js';
import Doc from '../components/Doc.js';
import Metadata from '../components/Metadata.js';

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
