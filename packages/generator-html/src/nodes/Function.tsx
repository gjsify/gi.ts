import * as React from 'react';
import { Function } from '../types/nodes.js';

import Parameter from '../components/Parameter.js';
import List from '../components/List.js';
import Type from '../components/Type.js';

import Doc from '../components/Doc.js';

import Metadata from '../components/Metadata.js';

export interface FunctionProps {
  node: Function;
}

const FunctionNode: React.FC<FunctionProps> = ({ node }) => {
  if (!node) {
    return <span>...</span>;
  }

  const ReturnType = Array.isArray(node.returnType) ? (
    <List separator=", ">
      {node.returnType.map((r, i) => (
        <Type key={i} type={r} />
      ))}
    </List>
  ) : (
    <Type type={node.returnType} />
  );

  return (
    <div>
      {node.name}(
      <List separator=", ">{node.parameters?.map((p, n) => <Parameter key={n} node={p} />) ?? []}</List>
      ): {ReturnType}
      <div className="documentation">
        {node.metadata && <Metadata metadata={node.metadata} />}
        {node.doc && <Doc noContainer doc={node.doc} />}
      </div>
    </div>
  );
};

export default FunctionNode;
