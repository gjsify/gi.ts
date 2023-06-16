@gi.ts/cli
==========

The command line interface for gi.ts (type checking for GObject Introspection and GJS)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@gi.ts/cli.svg)](https://npmjs.org/package/@gi.ts/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@gi.ts/cli.svg)](https://npmjs.org/package/@gi.ts/cli)
[![License](https://img.shields.io/npm/l/@gi.ts/cli.svg)](https://github.com/ewlsh/gi.ts/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @gi.ts/cli
$ gi-ts COMMAND
running command...
$ gi-ts (--version)
@gi.ts/cli/1.5.10 linux-x64 node-v16.11.0
$ gi-ts --help [COMMAND]
USAGE
  $ gi-ts COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gi-ts config [FILE]`](#gi-ts-config-file)
* [`gi-ts generate [FILE]`](#gi-ts-generate-file)
* [`gi-ts help [COMMANDS]`](#gi-ts-help-commands)

## `gi-ts config [FILE]`

create docs configurations

```
USAGE
  $ gi-ts config [FILE] [--help] [--lock]

FLAGS
  --help  Show CLI help.
  --lock

DESCRIPTION
  create docs configurations

EXAMPLES
  $ gi-ts config --lock
```

## `gi-ts generate [FILE]`

generate documentation files

```
USAGE
  $ gi-ts generate [FILE] [--all] [--help] [--out <value>] [--format <value>] [--inferGenerics] [--promisify]
    [--propertyCase both|underscore|camel] [--outputFormat file|folder] [--noPrettyPrint] [--noInitTypes] [--withDocs]
    [--versionedOutput] [--versionedImports] [--importPrefix <value>] [--emitMetadata] [--noAdvancedVariants] [-v]

FLAGS
  -v, --verbose            prints detailed per-member generation info
  --all                    Generate all found libraries
  --emitMetadata
  --format=<value>         'dts', 'dts-inline', or 'json' are bundled, 'html' is available via @gi.ts/generator-html.
  --help                   Show CLI help.
  --importPrefix=<value>
  --inferGenerics
  --noAdvancedVariants
  --noInitTypes            Disables strict typing for _init() functions in TypeScript files.
  --noPrettyPrint          Disables the pretty-printer. For .d.ts files this will significantly speed up generation.
  --out=<value>
  --outputFormat=<option>  <options: file|folder>
  --promisify
  --propertyCase=<option>  <options: both|underscore|camel>
  --versionedImports
  --versionedOutput
  --withDocs

DESCRIPTION
  generate documentation files

EXAMPLES
  $ gi-ts generate
```

## `gi-ts help [COMMANDS]`

Display help for gi-ts.

```
USAGE
  $ gi-ts help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for gi-ts.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_
<!-- commandsstop -->
