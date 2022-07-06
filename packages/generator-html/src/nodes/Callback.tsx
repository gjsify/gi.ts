import * as React from 'react';

import CallbackDeclaration from '../components/CallbackDeclaration.js';
import Doc from '../components/Doc.js';
import Metadata from '../components/Metadata.js';
import { Callback } from '../types/nodes.js';

export interface CallbackProps {
  node: Callback;
}

const CallbackNode: React.FC<CallbackProps> = ({ node }) => {
  return (
    <div>
      <CallbackDeclaration node={{ ...node }} />

      {node.metadata && <Metadata metadata={node.metadata} />}
      {node.doc && <Doc doc={node.doc} />}
    </div>
  );
};

export default CallbackNode;
