import * as React from 'react';
import { useContext } from 'react';

import { ClassDeclaration, RecordDeclaration, ErrorDeclaration } from '../types/nodes.js';

import List from './List.js';
import Type from './Type.js';

import { LinkContext } from '../path.js';
import { NamespaceContext } from '../path.js';

export interface ClassProps {
  node: ClassDeclaration | RecordDeclaration | ErrorDeclaration;
  as?: 'p' | 'h1' | 'h2' | 'h3';
}

const ClassDeclarationNode: React.FC<ClassProps> = ({ node, as = 'p' }) => {
  const Link = useContext(LinkContext);

  const { getPath } = useContext(NamespaceContext);
  const path = getPath(node);

  const interfaces = 'implements' in node ? node.implements?.filter(i => i != null) ?? [] : [];
  const Element = as;

  return (
    <div className="class-declaration" id={node.name}>
      <Element>
        <span className="keyword">class </span>
        <Link to={path}>{node.name}</Link>

        {node.extends ? (
          <>
            <span className="keyword"> extends </span>
            <span>
              <Type type={node.extends}></Type>
            </span>
          </>
        ) : (
          <></>
        )}

        {interfaces.length > 0 ? (
          <>
            <span className="keyword"> implements </span>
            <span>
              <List separator=", ">
                {interfaces.map((i, n) => (
                  <Type key={n} type={i}></Type>
                ))}
              </List>
            </span>
          </>
        ) : (
          <></>
        )}
      </Element>
    </div>
  );
};

export default ClassDeclarationNode;
