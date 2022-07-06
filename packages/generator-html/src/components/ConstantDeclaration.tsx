import * as React from 'react';
import { useContext } from 'react';

import { ConstantDeclaration } from '../types/nodes.js';

import Type from './Type.js';
import { LinkContext } from '../path.js';
import { NamespaceContext } from '../path.js';

export interface ConstantProps {
  node: ConstantDeclaration;
  link: boolean;
}

const ConstantDeclarationNode: React.FC<ConstantProps> = ({ node, link }) => {
  const Link = useContext(LinkContext);

  const { getPath } = useContext(NamespaceContext);
  const path = getPath(node);

  return (
    <div className="constant-declaration">
      <span className="keyword">const</span>
      {link ? <Link to={path}> {node.name}</Link> : <span> {node.name}</span>}
      <span className="operator">: </span>
      <Type type={node.type} />;
    </div>
  );
};

export default ConstantDeclarationNode;
