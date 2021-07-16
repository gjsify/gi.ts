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
$ gi-ts (-v|--version|version)
@gi.ts/cli/1.5.5 linux-x64 node-v12.18.3
$ gi-ts --help [COMMAND]
USAGE
  $ gi-ts COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gi-ts config`](#gi-ts-config)
* [`gi-ts generate [FILE]`](#gi-ts-generate-file)
* [`gi-ts help [COMMAND]`](#gi-ts-help-command)

## `gi-ts config`

create docs configurations

```
USAGE
  $ gi-ts config

OPTIONS
  --help  show CLI help
  --lock

EXAMPLE
  $ gi-ts config --lock
```

## `gi-ts generate [FILE]`

generate documentation files

```
USAGE
  $ gi-ts generate [FILE]

OPTIONS
  -v, --verbose                           prints detailed per-member generation info
  --all                                   Generate all found libraries
  --emitMetadata
  --format=format                         'dts' or 'json' are bundled, 'html' is available via @gi.ts/generator-html.
  --help                                  show CLI help
  --importPrefix=importPrefix
  --inferGenerics
  --noAdvancedVariants
  --noInitTypes                           Disables strict typing for _init() functions in TypeScript files.

  --noPrettyPrint                         Disables the pretty-printer. For .d.ts files this will significantly speed up
                                          generation.

  --out=out

  --outputFormat=(file|folder)

  --promisify

  --propertyCase=(both|underscore|camel)

  --versionedImports

  --versionedOutput

  --withDocs

EXAMPLE
  $ gi-ts generate
```

## `gi-ts help [COMMAND]`

display help for gi-ts

```
USAGE
  $ gi-ts help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
