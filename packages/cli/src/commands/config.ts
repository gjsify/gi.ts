import { Command, flags } from '@oclif/command';

import * as fs from 'fs';

import { generate, generateAll, GirInfo } from '@gi.ts/node-loader';
import { loadDocsConfig } from './generate';

export default class Config extends Command {
  static description = 'create docs configurations';

  static examples = [`$ gi-ts config --lock`];

  static flags = {
    help: flags.help(),
    lock: flags.boolean()
  };

  static args = [{ name: 'file' }];

  async getInfo(file?: string) {
    const docs = loadDocsConfig(this.log.bind(this), file);
    const searchPath = typeof docs.searchPath === 'string' ? [docs.searchPath] : docs.searchPath ?? [];

    const res = await Promise.all(generateAll([...searchPath]).map(l => generate(l)));
    return res.filter((a): a is GirInfo => a != null);
  }

  generateLockFile(compiled: GirInfo[]) {
    const generate = async () => {
      fs.writeFileSync('./docs-lock.json', JSON.stringify(compiled, null, 4));
    };

    return generate();
  }

  async run() {
    const { args, flags } = this.parse(Config);

    const compiled = await this.getInfo(args['file']);

    const map: { [lib: string]: string[] } = {};

    for (const info of compiled) {
      if (info) {
        let versions = map[info.name] ?? [];

        if (!versions.includes(info.api_version)) {
          versions.push(info.api_version);
        }

        map[info.name] = versions.sort();
      }
    }

    if (flags.lock) {
      this.log('Generating local lock file for configuration...');

      await this.generateLockFile(compiled);
    } else {
      this.log('Configuration generated...');

      this.log(JSON.stringify(map, null, 4));
    }
  }
}
