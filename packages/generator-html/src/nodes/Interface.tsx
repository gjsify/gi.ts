import * as React from "react";

import Member from "../components/Member";
import Doc from "../components/Doc";

import { Interface } from "../types/nodes";

import InterfaceDeclaration from "../components/InterfaceDeclaration";
import ClassIndex from "../components/ClassIndex";
import Metadata from "../components/Metadata";
export interface InterfaceProps {
  node: Interface;
}

const InterfaceNode: React.FC<InterfaceProps> = ({ node }) => {
  const staticMembers = node.staticMethods;
  const classMembers = node.methods;

  return (
    <div className="interface">
      <InterfaceDeclaration node={{ ...node }} />

      <ClassIndex node={node} />

      {node.metadata && <Metadata metadata={node.metadata} />}
      {node.doc && <Doc doc={node.doc} />}

      <div className="body">
        <h3>Members</h3>
        <div className="members">
          {classMembers.map((m, i) => (
            <Member key={i} node={m} />
          ))}
        </div>
        <h3>Static Members</h3>
        <div className="members">
          {staticMembers.map((m, i) => (
            <Member key={i} node={m} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterfaceNode;
