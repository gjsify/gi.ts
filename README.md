gi.ts
=====

## Rough Overview

This project converts GObject Introspection XML files into highly accurate TypeScript definition files (.d.ts)!

## Structure

nodejs/common.js - A Node.js polyfill for GJS (allows this project to run on top of GJS)
nodejs/**        - Assorted library code from Node.js to polyfill GJS (not MIT licensed)

playground/src/  - An area to test the definitions!
playground/types/ - A host of generated files!

src/config.ts - Generates docs.json (list of all GIR files)
src/gir.ts    - Has classes which translate the XML files to TypeScript
src/main.ts   - Main CLI for generating the .d.ts files.
src/xml.ts    - Has definitions for the XML format

## Usage 
`npm i`
`npm run init` (`gjs config.js`)
`npm run generate` (`gjs generate.js playground/types`)