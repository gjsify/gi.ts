import * as React from "react";

import { Namespace } from "../types/nodes";

import CallbackDeclaration from "../components/CallbackDeclaration";
import ClassDeclaration from "../components/ClassDeclaration";
import ConstantDeclaration from "../components/ConstantDeclaration";
import FunctionDeclaration from "../components/FunctionDeclaration";
import EnumDeclaration from "../components/EnumDeclaration";
import InterfaceDeclaration from "../components/InterfaceDeclaration";
import List from "../components/List";

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
  const functions = namespace.functions?.filter(shouldGenerate) ?? [];
  const interfaces = namespace.interfaces?.filter(shouldGenerate) ?? [];
  const callbacks = namespace.callbacks?.filter(shouldGenerate) ?? [];
  const records = namespace.records?.filter(shouldGenerate) ?? [];

  return (
    <div v-if="namespace">
      <h1>{namespace.name}</h1>
      <span>Imports </span>
      <List separator=", ">
        {Object.keys(namespace.imports).map(m => (
          <span key={`import-${m}`}>{m}</span>
        ))}
      </List>

      <div id="function-list" className="section">
        <h2>Functions</h2>
        {functions.map(func => {
          return <FunctionDeclaration key={`function-${func.name}`} node={func} />;
        })}
      </div>

      <div id="callback-list" className="section">
        <h2>Callbacks</h2>
        {callbacks.map(callback => {
          return <CallbackDeclaration key={`callback-${callback.name}`} node={callback} />;
        })}
      </div>

      <div id="class-list" className="section">
        <h2>Classes</h2>
        {classes.map(clazz => (
          <ClassDeclaration key={`class-${clazz.name}`} node={clazz} />
        ))}
      </div>

      <div id="interface-list" className="section">
        <h2>Interfaces</h2>
        {interfaces.map(iface => (
          <InterfaceDeclaration key={`interface-${iface.name}`} node={iface} />
        ))}
      </div>

      <div id="record-list" className="section">
        <h2>Boxed Types</h2>
        {records.map(record => (
          <ClassDeclaration key={`record-${record.name}`} node={record} />
        ))}
      </div>

      <div id="enum-list" className="section">
        <h2>Enums</h2>
        {enums.map(clazz => (
          <EnumDeclaration key={`enum-${clazz.name}`} node={clazz} />
        ))}
      </div>

      <div id="constant-list" className="section">
        <h2>Constants</h2>
        {constants.map(constant => (
          <ConstantDeclaration key={`constant-${constant.name}`} node={constant} link={true} />
        ))}
      </div>
    </div>
  );
};

export default NamespaceNode;
