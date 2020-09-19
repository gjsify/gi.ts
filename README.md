gi.ts
=====

> Checkout the demo repository [here](https://gitlab.gnome.org/ewlsh/playground.gi.ts/)!

## Overview

This project converts GObject Introspection XML files into highly accurate TypeScript definition files (.d.ts)!

## Structure

- src/config.ts - Generates docs.json (list of all GIR files)
- src/gir.ts    - Has base classes which translate the XML files to TypeScript
- src/main.ts   - Main CLI for generating the .d.ts files.
- src/xml.ts    - Has definitions for the XML format

## Usage 

#### Build:

1. `npm i` (download dependencies)
2. `npm run build` (build the project)
3. `npm link` (make cli available)

#### Generate type definitions:

##### In your project:

1. `npm link gi.ts`
2. `gi-ts config` (generate docs.json)
3. `gi-ts generate` (generate files)

##### In gi.ts:

1. `gi-ts config` (generate docs.json)
2. `gi-ts generate` (generate files)

### Selecting Versions

In `sample-versions.json` you can find an example of how to select which versions `gi.ts` generates for a given library. Rename this file to `versions.json` in your generation directory for `gi.ts` to use it.

### Options

* `--resolveTypeConflicts=true|false`

When resolve type conflicts is `true` gi.ts will force some properties to be typed as `any` and insert `never` types into function definitions when a GObject-based library violates the rules of TypeScript's inheritance structure (e.g. a child class has a property which is type incompatible with the parent).

This should only be disabled for "pretty" outputs (e.g. documentation)

* `--inferGenerics=true|false`

When infer generics is `true` gi.ts attempts to add generic typing based on heuristics (primarily if a class or function is typed with `GObject.Object`). If this is false all type conversions that would need to occur in C will likely also need to be made in TypeScript. This particularly impacts callback functions which offer an instance or self parameter.

* `--out=./dir`

The directory to store the output in.

* `--withDocs`

Whether to include the documentation strings alongside the output. **WARNING: the resulting type definitions will potentially then inherit the license of the original codebase**

* `--format=dts|json`

The JSON output format is meant to be used for documentation generators, `dts` is the default and primary output format for gi.ts.
