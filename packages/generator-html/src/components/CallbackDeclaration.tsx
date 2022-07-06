import * as React from 'react';
import { useContext } from 'react';
import Parameter from './Parameter.js';
import List from './List.js';
import Type from './Type.js';

import { CallbackDeclaration } from '../types/nodes.js';

import { LinkContext, NamespaceContext } from '../path.js';

export interface CallbackProps {
  node: CallbackDeclaration;
}

const CallbackDeclarationNode: React.FC<CallbackProps> = ({ node }) => {
  const parameters = node.parameters?.filter(p => p != null) ?? [];
  const Link = useContext(LinkContext);

  const { getPath } = useContext(NamespaceContext);
  const path = getPath(node);

  return (
    <div className="callback-declaration">
      <span className="keyword">type </span>
      <Link to={path}>{node.name}</Link>
      <span> = (</span>
      <List separator=", ">
        {parameters.map((p, n) => (
          <Parameter key={n} node={p} />
        ))}
      </List>
      <span>) =&gt; </span>
      <Type type={node.returnType} />;
    </div>
  );
};

export default CallbackDeclarationNode;
