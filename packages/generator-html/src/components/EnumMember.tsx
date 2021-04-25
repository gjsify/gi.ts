import * as React from "react";

import { EnumMember } from "../types/nodes";

export interface EnumMemberProps {
  node: EnumMember;
}

const EnumMemberElement: React.FC<EnumMemberProps> = ({ node }) => {
  return (
    <li>
      <code>
        <span id={`default-${node.name.toLowerCase()}`} className="entry">
          {node.name}
        </span>
        {node.value ? ` = ${node.value}` : ""}
      </code>
      {" — "}
      <span>{node.doc}</span>
    </li>
  );
};

export default EnumMemberElement;
