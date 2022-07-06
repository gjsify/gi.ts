import * as React from "react";

import { NodeMetadata } from "../types/nodes.js";

import Doc from "../components/Doc.js";

interface MetadataProps {
  metadata: NodeMetadata;
}

export const Metadata: React.FC<MetadataProps> = ({ metadata }) => {
  return (
    <>
      {metadata.introducedVersion ? (
        <p className="since-note"> New in version {metadata.introducedVersion}. </p>
      ) : null}
      {metadata.deprecatedVersion || metadata.deprecatedDoc ? (
        <p className="deprecated-note">
          {metadata.deprecatedVersion ? `Deprecated since ${metadata.deprecatedVersion}.` : ""}
          {metadata.deprecatedDoc ? <Doc noContainer flattenParagraphs doc={metadata.deprecatedDoc} /> : null}
        </p>
      ) : null}
    </>
  );
};

export default Metadata;
