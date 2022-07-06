import * as React from 'react';

import { Namespace } from '../types/nodes.js';

import CallbackDeclaration from '../components/CallbackDeclaration.js';
import ClassDeclaration from '../components/ClassDeclaration.js';
import ConstantDeclaration from '../components/ConstantDeclaration.js';
import FunctionDeclaration from '../components/FunctionDeclaration.js';
import EnumDeclaration from '../components/EnumDeclaration.js';
import InterfaceDeclaration from '../components/InterfaceDeclaration.js';
import List from '../components/List.js';
import { namespacePath } from '../util.js';
import { LinkContext } from '../path.js';

export interface NamespaceProps {
  node: Namespace;
}

/**
 * Ensures nodes are non-null and not marked
 * as private.
 *
 * @param json a json node
 * @returns
 */
function shouldGenerate(json: { private?: boolean } | null) {
  return json != null && !json.private;
}

const NamespaceNode: React.FC<NamespaceProps> = ({ node: namespace }) => {
  const constants = namespace.constants?.filter(shouldGenerate) ?? [];
  const classes = namespace.classes?.filter(shouldGenerate) ?? [];
  const enums = namespace.enums?.filter(shouldGenerate) ?? [];
  const errors = namespace.errors?.filter(shouldGenerate) ?? [];
  const functions = namespace.functions?.filter(shouldGenerate) ?? [];
  const interfaces = namespace.interfaces?.filter(shouldGenerate) ?? [];
  const callbacks = namespace.callbacks?.filter(shouldGenerate) ?? [];
  const records = namespace.records?.filter(shouldGenerate) ?? [];
  const imports = Object.entries(namespace.imports);

  const Link = React.useContext(LinkContext);
  const path = namespacePath();

  return (
    <div className="namespace">
      <h1>{namespace.name}</h1>
      {imports.length > 0 ? (
        <>
          <span>Imports </span>
          <List separator=", ">
            {imports.map(([namespace, version]) => (
              <Link to={`/${path(namespace, version)}/`} key={`import-${namespace.toLowerCase()}`}>
                <span>{namespace}</span>
              </Link>
            ))}
          </List>
        </>
      ) : null}

      {functions.length > 0 ? (
        <div id="function-list" className="section">
          <h2>Functions</h2>
          {functions.map(func => {
            return <FunctionDeclaration key={`function-${func.name}`} node={func} />;
          })}
        </div>
      ) : null}

      {callbacks.length > 0 ? (
        <div id="callback-list" className="section">
          <h2>Callbacks</h2>
          {callbacks.map(callback => {
            return <CallbackDeclaration key={`callback-${callback.name}`} node={callback} />;
          })}
        </div>
      ) : null}

      {classes.length > 0 ? (
        <div id="class-list" className="section">
          <h2>Classes</h2>
          {classes.map(clazz => (
            <ClassDeclaration key={`class-${clazz.name}`} node={clazz} />
          ))}
        </div>
      ) : null}

      {interfaces.length > 0 ? (
        <div id="interface-list" className="section">
          <h2>Interfaces</h2>
          {interfaces.map(iface => (
            <InterfaceDeclaration key={`interface-${iface.name}`} node={iface} />
          ))}
        </div>
      ) : null}

      {records.length > 0 ? (
        <div id="record-list" className="section">
          <h2>Boxed Types</h2>
          {records.map(record => (
            <ClassDeclaration key={`record-${record.name}`} node={record} />
          ))}
        </div>
      ) : null}

      {enums.length > 0 ? (
        <div id="enum-list" className="section">
          <h2>Enums</h2>
          {enums.map(clazz => (
            <EnumDeclaration key={`enum-${clazz.name}`} node={clazz} />
          ))}
        </div>
      ) : null}

      {constants.length > 0 ? (
        <div id="constant-list" className="section">
          <h2>Constants</h2>
          {constants.map(constant => (
            <ConstantDeclaration key={`constant-${constant.name}`} node={constant} link={true} />
          ))}
        </div>
      ) : null}

      {errors.length > 0 ? (
        <div id="error-list" className="section">
          <h2>Errors</h2>
          {errors.map(clazz => (
            <ClassDeclaration key={`error-${clazz.name}`} node={clazz} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NamespaceNode;
