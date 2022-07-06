import * as React from "react";
import { Method } from "../types/nodes.js";

import Parameter from "./Parameter.js";
import List from "./List.js";
import Type from "./Type.js";
import Doc from "./Doc.js";
import Metadata from "./Metadata.js";

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
    <div id={node.name} className="class-member">
      <div id={`method-${node.name}`} className="method-definition">
        {node.name}(
        <List separator=", ">{node.parameters?.map(p => <Parameter key={p.name} node={p} />) ?? []}</List>
        ): {ReturnType}
      </div>
      <div className="method-documentation">
        {node.parameters && node.parameters.length > 0 && (
          <dl className="parameters">
            <dt>Parameters</dt>
            <dd>
              <ul>
                {node.parameters.map(p => (
                  <li key={p.name}>
                    <strong>{p.name}</strong>({<Type type={p.type} />})
                    {p.doc && (
                      <>
                        {" — "} <Doc flattenParagraphs doc={p.doc}></Doc>
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
