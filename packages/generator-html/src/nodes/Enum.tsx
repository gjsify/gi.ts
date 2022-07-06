import * as React from 'react';

import Doc from '../components/Doc.js';
import Metadata from '../components/Metadata.js';

import { EnumJson } from '@gi.ts/lib/generators/json.js';

export interface EnumProps {
  node: EnumJson;
}

const EnumNode: React.FC<EnumProps> = ({ node, children }) => {
  return (
    <div id={node.name.toLowerCase()} className="enum">
      <h2>
        <span className="keyword">enum </span>
        <span>{node.name}</span>
      </h2>
      {node.metadata && <Metadata metadata={node.metadata} />}
      {node.doc && <Doc doc={node.doc} />}
      {node.members ? (
        <div>
          <h3>Members</h3>
          <ul className="members">{children}</ul>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default EnumNode;
