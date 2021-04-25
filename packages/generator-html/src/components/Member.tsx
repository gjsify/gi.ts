import * as React from "react";
import { Method } from "../types/nodes";

import Parameter from "./Parameter";
import List from "./List";
import Type from "./Type";
import Doc from "./Doc";
import Metadata from "./Metadata";

export interface MemberProps {
  node: Method;
}

const MemberNode: React.FC<MemberProps> = ({ node }) => {
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
    <div id={node.name}>
      <div id={`method-${node.name}`}>
        {node.name}(
        <List separator=", ">{node.parameters?.map(p => <Parameter key={p.name} node={p} />) ?? []}</List>
        ): {ReturnType}
      </div>
      <div className="documentation">
        {node.parameters && node.parameters.length > 0 && (
          <dl className="parameters">
            <dt>Parameters:</dt>
            <dd>
              <ul>
                {node.parameters.map(p => (
                  <li key={p.name}>
                    <strong>{p.name}</strong>({<Type type={p.type} />})
                    {p.doc && (
                      <>
                        {" — "} <Doc noContainer flattenParagraphs doc={p.doc}></Doc>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        )}
        {node.metadata && <Metadata metadata={node.metadata} />}
        {node.doc && <Doc doc={node.doc} />}
      </div>
    </div>
  );
};

export default MemberNode;
