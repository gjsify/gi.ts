import * as React from "react";

import { namespaceReference } from "../util";

import * as unified from "unified";
import * as parse from "remark-parse";
import * as behead from "remark-behead";
import * as headingId from "remark-heading-id";
import * as remark2rehype from "remark-rehype";
import * as highlight from "rehype-highlight";
import * as rehype2react from "rehype-react";
// TODO: Consider adding breaks support.
// import breaks from 'remark-breaks';

import { NamespaceContext } from "../path";

interface DocProps {
  doc: string;
  flattenParagraphs?: boolean;
  noContainer?: boolean;
}

const NotMarkdown = /^([A-z,.][ ])+$/.compile();

const Span: React.FC<{ className?: string }> = ({ className, children }) => (
  <span className={className}>{children}</span>
);

const Doc: React.FC<DocProps> = ({ doc, flattenParagraphs = false, noContainer = false }) => {
  const { meta } = React.useContext(NamespaceContext);
  const ref = namespaceReference();

  /**
   * Fixes markdown syntax issues and converts # references to links.
   *
   * TODO: Explore turning this into a remark plugin
   * @param doc
   */
  function format(doc: string) {
    try {
      // We bookend the string with spaces to guard against blocks which start or end with code blocks.
      return (
        ` ${doc} `
          // |[ is equivalent to ``` in standard markdown
          .replace(/\|\[/g, "```")
          // ]| is equivalent to ``` in standard markdown
          .replace(/\]\|/g, "```")
          // |[ <!-- language="C" --> is transformed to ```C
          .replace(/&lt;!-- language="(.*)" --&gt;/g, "$1")
          .replace(/```[ ]*&lt;!--(.*)--&gt;/g, "```")
          // To avoid editing content within code blocks we split on ```
          .split("```")
          .map((part, i) => {
            // Even indices are outside a code block
            if (i % 2 === 0) {
              return (
                part
                  // Escapes: <a and similar text.
                  .replace(/<(.)/g, "\\<$1")
                  // Converts %TRUE, %FALSE, and %NULL to true, false, and null
                  .replace(/%(TRUE|FALSE|NULL)/g, (_, value: string) => `\`${value.toLowerCase()}\``)
                  // Converts '## Header ##' to '## Header'
                  .replace(/(#)+[ ]+(.+)[ ]+(#)+/g, "$1 $2")
                  // Removes @ escapes.
                  .replace(/([\w])\\@([\w])/g, "$1@$2")
                  // Transforms Namespace.Class.function() into [Namespace.Class.function()](...link...)
                  .replace(
                    /#{0,1}([A-z]+)\.([A-z]+)\.([a-z_]+)\(\)/g,
                    (_: string, ns: string, clazz: string, func: string) => {
                      return `[${ns}.${clazz}.${func}](/${ref(ns, meta)}/${clazz}#${func})()`;
                    }
                  )
                  // Transforms Namespace.function() into [Namespace.function()](...link...)
                  .replace(/#{0,1}([A-z]+)\.([a-z_]+)\(\)/g, (_: string, ns: string, func: string) => {
                    return `[${ns}.${func}](/${ref(ns, meta)}/${func})()`;
                  })
                  .replace(
                    /(%|#)([A-z]+)(\.([A-z]+)){0,1}\.([A-Z\-_]+(?![a-z]))/g,
                    (
                      _: string,
                      __: string,
                      ns: string,
                      ___: string,
                      name: string | undefined,
                      member: string
                    ) => {
                      if (name) {
                        return `[${ns}.${name}.${member}](/${ref(
                          ns,
                          meta
                        )}/${name}#default-${member.toLowerCase()})`;
                      } else {
                        return `[${ns}.${member}](/${ref(ns, meta)}/${member})`;
                      }
                    }
                  )
                  // Converts # references to links

                  // Transforms #Namespace.Class::signal
                  // Transforms #Namespace.Class:property
                  // Transforms #Namespace.Class
                  .replace(
                    /#[\{]{0,1}([A-z]+)\.([A-z]+)(([:]{1,2})([a-z\-_]+)){0,1}[\}]{0,1}/g,
                    (_, ns: string, name: string, member: string, __: string, member_name: string) => {
                      if (member) {
                        return `[${ns}.${name}${member}](/${ref(ns, meta)}/${name}#${member_name})`;
                      } else {
                        return `[${ns}.${name}](/${ref(ns, meta)}/${name})`;
                      }
                    }
                  )
              );
            }

            // Odd indices are inside a code block
            return part;
          })
          .join("```")
          .slice(1, -1)
      );
    } catch (error) {
      console.log(error);
      console.log(doc);
      return doc;
    }
  }

  const formatted = format(doc);
  // If a doc does not contain markdown syntax we can avoid rendering it.
  const isMarkdown = NotMarkdown.test(formatted);

  let Body: React.ReactElement | string;

  try {
    Body = !isMarkdown
      ? formatted
      : (unified()
          .use(parse)
          .use(headingId)
          // TODO: Debugging remark plugins...
          //  .use(breaks)
          .use(behead, { after: 0, depth: 3 })
          .use(remark2rehype)
          .use(highlight, {
            aliases: {
              plaintext: "plain"
            }
          })
          .use(rehype2react, {
            createElement: React.createElement,
            ...(noContainer ? { Fragment: React.Fragment } : {}),
            ...(flattenParagraphs
              ? {
                  components: {
                    // We override <p> with <span> to "flatten" paragraphs.
                    p: Span
                  }
                }
              : {})
          })
          .processSync(formatted).result as React.ReactElement);
  } catch (error) {
    console.log(error);
    console.log(doc);
    Body = <pre>{doc}</pre>;
  }
  return noContainer ? <>{Body}</> : <div className="documentation">{Body}</div>;
};

export default Doc;
