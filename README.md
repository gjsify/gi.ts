gi.ts
=====

> Checkout the demo repository [here](https://gitlab.gnome.org/rockon999/playground.gi.ts/)!

## Overview

This project converts GObject Introspection XML files into highly accurate TypeScript definition files (.d.ts)!

## Structure

- src/config.ts - Generates docs.json (list of all GIR files)
- src/gir.ts    - Has base classes which translate the XML files to TypeScript
- src/main.ts   - Main CLI for generating the .d.ts files.
- src/xml.ts    - Has definitions for the XML format

## Usage 

1. `npm i` (download dependencies)
2. `npm link` (make cli available)
2. `gi-ts config` (generate docs.json)
3. `gi-ts generate` (generate files)