import * as React from "react";

import Doc from "../components/Doc";
import Metadata from "../components/Metadata";

import { EnumJson } from "@gi.ts/lib/dist/generators/json";

export interface EnumProps {
  node: EnumJson;
}

const EnumNode: React.FC<EnumProps> = ({ node, children }) => {
  return (
    <div id={node.name.toLowerCase()} className="enum">
      <h2>
        <span className="keyword">enum </span>
        <span>{node.name}</span>
      </h2>
      {node.metadata && <Metadata metadata={node.metadata} />}
      <div className="documentation">{node.doc && <Doc doc={node.doc} />}</div>
      {node.members ? (
        <div>
          <h3>Members</h3>
          <ul className="members">{children}</ul>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default EnumNode;
