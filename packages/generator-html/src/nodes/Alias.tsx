import * as React from 'react';

import Type from '../components/Type.js';

import { Alias } from '../types/nodes.js';

export interface AliasProps {
  node: Alias;
}

const AliasNode: React.FC<AliasProps> = ({ node }) => {
  return (
    <div id={node.name.toLowerCase()} className="alias">
      <span className="keyword">type </span>
      <span>{node.name}</span>
      <span> = </span>
      <span>
        <Type type={node.type}></Type>
      </span>
      ;
    </div>
  );
};

export default AliasNode;
