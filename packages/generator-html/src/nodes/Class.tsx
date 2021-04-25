import * as React from "react";

import Property from "../components/Property";
import Member from "../components/Member";
import Doc from "../components/Doc";
import Constructor from "../components/Constructor";
import ClassDeclaration from "../components/ClassDeclaration";
import ClassIndex from "../components/ClassIndex";

import Metadata from "../components/Metadata";

import { ClassJson, RecordJson } from "@gi.ts/lib/dist/generators/json";

export interface ClassProps {
  node: ClassJson | RecordJson;
}

const ClassNode: React.FC<ClassProps> = ({ node }) => {
  const {
    constructors = [],
    props: properties = [],
    methods = [],
    staticMethods = [],
    virtualMethods = [],
    fields = [],
    mainConstructor = null
  } = node;

  return (
    <div className="class">
      <ClassDeclaration node={{ ...node }}></ClassDeclaration>

      <ClassIndex node={node} />

      {node.metadata && <Metadata metadata={node.metadata} />}
      {node.doc && <Doc doc={node.doc} />}

      <div className="body">
        <h2>Details</h2>

        {mainConstructor && <Constructor node={mainConstructor} isMain={true} />}

        {constructors.length > 0 ? (
          <>
            <h3>Constructors</h3>
            <div className="constructors">
              {constructors.map(c => (
                <Constructor key={`constr-${c.name}`} node={c} />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}

        {properties.length > 0 ? (
          <>
            <h3>Properties</h3>
            <div className="properties">
              {properties.map(p => (
                <Property key={`property-${p.name}`} node={p} />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}

        {fields.length > 0 ? (
          <>
            <h3>Fields</h3>
            <div className="fields">
              {fields.map(f => (
                <Property key={`field-${f.name}`} node={f} />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}

        {staticMethods.length > 0 ? (
          <>
            <h3>Static Methods</h3>
            <div className="static-methods">
              {methods.map(m => (
                <Member key={`method-${m.name}`} node={m} />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}

        {methods.length > 0 ? (
          <>
            <h3>Methods</h3>
            <div className="members">
              {methods.map(m => (
                <Member key={`method-${m.name}`} node={m} />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}

        {virtualMethods.length > 0 ? (
          <>
            <h3>Virtual Methods</h3>
            <div className="virtual-methods">
              {virtualMethods.map(m => (
                <Member key={`method-${m.name}`} node={m} />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ClassNode;
