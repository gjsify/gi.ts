import * as React from 'react';
import { ClassMethod, Constructor } from '../types/nodes.js';

import Parameter from './Parameter.js';
import List from './List.js';

import Doc from './Doc.js';

import Metadata from './Metadata.js';
import { NodeKind, PropertiesConstructorJson } from '@gi.ts/lib/generators/json.js';

export interface ConstructorProps {
  node: Constructor | PropertiesConstructorJson | ClassMethod;
  isMain?: boolean;
}

const ConstructorElement: React.FC<ConstructorProps> = ({ node, isMain = false }) => {
  if (node.kind === NodeKind.propertiesConstructor) {
    return (
      <div className="constructor">
        constructor(
        <List
          className="constructor-param-list"
          container="div"
          separator={() => (
            <>
              <span>{', '}</span>
              <div />
            </>
          )}
        >
          {node.properties?.map((p, n) => <Parameter key={n} node={p} />) ?? []}
        </List>
        )
        <div className="documentation">
          {node.metadata && <Metadata metadata={node.metadata} />}
          {node.doc && <Doc noContainer doc={node.doc} />}
        </div>
      </div>
    );
  }

  return (
    <div>
      {isMain ? 'constructor' : node.name}(
      <List separator=", ">{node.parameters?.map((p, n) => <Parameter key={n} node={p} />) ?? []}</List>)
      <div className="documentation">
        {node.metadata && <Metadata metadata={node.metadata} />}
        {node.doc && <Doc noContainer doc={node.doc} />}
      </div>
    </div>
  );
};

export default ConstructorElement;
