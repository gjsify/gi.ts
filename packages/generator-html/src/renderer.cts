const ReactDOMServer = require('react-dom/server');

export function renderElement(elem: React.ReactElement): string {
  return `<!DOCTYPE html>
    <html lang="en-US">

        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        </head>

        <body>
            <div id="root">
                ${ReactDOMServer.renderToStaticMarkup(elem)}
            </div>
        </body>

    </html>
    `;
}
