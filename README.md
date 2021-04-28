gi.ts
=====

> Checkout the demo repository [here](https://gitlab.gnome.org/ewlsh/playground.gi.ts/)!

## Overview

This project converts GObject Introspection XML files into highly accurate TypeScript definition files (.d.ts)!

## Packages

All packages are located under `packages/`

Core Packages:
- @gi.ts/lib - Type generation and inference
- @gi.ts/parser - GIR Parser
- @gi.ts/cli - CLI

Node-Specific Utilities:
- @gi.ts/node-loader - File loading

Other:
- @gi.ts/generator-html - An experimental generator for .html documentation

## Usage 

#### Build:

In the root folder:

1. `yarn` (download dependencies)

2. In `packages/parser`, run `yarn build`

3. In `packages/node-loader`, run `yarn build`

3. In `packages/lib`, run `yarn build`

4. In `packages/cli`, run `yarn prepack` and `yarn link`.

For HTML...

5. In `packages/generator-html`, run `yarn build` and `yarn link`.

#### Generate type definitions:

##### In your project:

1. `yarn link @gi.ts/cli`
2. `gi-ts config` (list potential packages)
3. `gi-ts generate [--all]` (generate files)

For HTML output...

4. `yarn link @gi.ts/generator-html`

##### In gi.ts:

1. `gi-ts config` (list potential packages)
2. `gi-ts config --lock` (cache your local packages)
3. `gi-ts generate [--all]` (generate files)

### Selecting Versions

In `sample/docs.json` you can find an example of how to select which versions `gi.ts` generates for a given library. Move this file to to your generation directory for `gi.ts` to use it.

### Options

Complete documentation is available in [the CLI documentation](https://gitlab.gnome.org/ewlsh/gi.ts/-/tree/master/packages/cli).

* `--inferGenerics`

When infer generics is passed gi.ts attempts to add generic typing based on heuristics (primarily if a class or function is typed with `GObject.Object`). If this is false all type conversions that would need to occur in C will likely also need to be made in TypeScript. This particularly impacts callback functions which offer an instance or self parameter.

* `--promisify`

When promisification is enabled, GJS will add type definitions for any async functions it can identify. You still need to ensure Gio._promisify is called on the relevant functions, because it will type correctly regardless.

* `--out=./dir`

The directory to store the output in.

* `--withDocs`

Whether to include the documentation strings alongside the output. **WARNING: the resulting type definitions will potentially then inherit the license of the original codebase**

* `--format=dts|json`

The JSON output format is meant to be used for documentation generators, `dts` is the default and primary output format for gi.ts.

* `--noAdvancedVariants`

Only impacts TypeScript output. For TypeScript outputs we "inject" a hand-written GLib.Variant definition which utilizes TypeScript's literal types to enforce Variant string signature typing.
