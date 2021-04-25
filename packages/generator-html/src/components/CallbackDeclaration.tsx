import * as React from "react";
import { useContext } from "react";
import Parameter from "./Parameter";
import List from "./List";
import Type from "./Type";

import { CallbackDeclaration } from "../types/nodes";
import { LinkContext } from "../renderer";
import { NamespaceContext } from "../path";

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
