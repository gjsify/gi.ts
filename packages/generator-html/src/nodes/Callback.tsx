import * as React from "react";

import CallbackDeclaration from "../components/CallbackDeclaration";
import Doc from "../components/Doc";
import Metadata from "../components/Metadata";
import { Callback } from "../types/nodes";

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
