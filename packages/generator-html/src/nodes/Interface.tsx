import * as React from 'react';

import Member from '../components/Member.js';
import Doc from '../components/Doc.js';

import { Interface } from '../types/nodes.js';

import InterfaceDeclaration from '../components/InterfaceDeclaration.js';
import ClassIndex from '../components/ClassIndex.js';
import Metadata from '../components/Metadata.js';

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
        {staticMembers.length > 0 ? (
          <>
            <h3>Static Members</h3>
            <div className="members">
              {staticMembers.map((m, i) => (
                <Member key={i} node={m} />
              ))}
            </div>
          </>
        ) : null}
        {classMembers.length > 0 ? (
          <>
            <h3>Members</h3>
            <div className="members">
              {classMembers.map((m, i) => (
                <Member key={i} node={m} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default InterfaceNode;
