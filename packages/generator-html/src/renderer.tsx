import * as React from "react";
import { createContext } from "react";
import * as ReactDOMServer from "react-dom/server";

const Link: React.FC<{
  to: string;
  children?: string | React.ReactNode;
}> = ({ to, children = to }) => <a href={to}>{children}</a>;

export type LinkElement = React.FC<{
  to: string;
  children?: string | React.ReactNode;
}>;

export const LinkContext = createContext<LinkElement>(Link);

export function renderElement(elem: React.ReactElement): string {
  return `<!DOCTYPE html>
    <html lang="en-US">

        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        </head>

        <body>
            <div id="root">
                ${ReactDOMServer.renderToStaticMarkup(
                  <LinkContext.Provider value={Link}>{elem}</LinkContext.Provider>
                )}
            </div>
        </body>

    </html>
    `;
}
