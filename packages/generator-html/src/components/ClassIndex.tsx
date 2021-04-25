import * as React from "react";

import { Class, Interface, Method as ClassMember, Record } from "../types/nodes";

export interface ClassIndexProps {
  node: Class | Record | Interface;
}

const ClassIndex: React.FC<ClassIndexProps> = ({ node }) => {
  const staticMembers = node.staticMethods;
  const virtualMembers = node.virtualMethods;
  const classMembers = node.methods;

  const memberIndex = (member: ClassMember) => (
    <td>
      <a href={`#method-${member.name}`}>{member.name}</a>({member.parameters.map(p => p.name).join(", ")})
    </td>
  );

  return (
    <>
      {staticMembers.length > 0 || classMembers.length > 0 ? (
        <>
          <h2 id="index-methods">Methods</h2>
          <table className="index">
            <tbody>
              {staticMembers?.map((member, i) => (
                <tr key={i}>
                  <td>static</td>
                  {memberIndex(member)}
                </tr>
              ))}
              {classMembers?.map((member, i) => (
                <tr key={i}>
                  <td></td>
                  {memberIndex(member)}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <></>
      )}

      {virtualMembers.length > 0 ? (
        <>
          <h2 id="index-vfuncs">Virtual methods</h2>
          <table>
            <tbody>
              {virtualMembers?.map((member, i) => (
                <tr key={i}>{memberIndex(member)}</tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ClassIndex;
