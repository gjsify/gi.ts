import { Command, flags } from '@oclif/command'

import * as fs from 'fs'

import { generate, generate_all } from '../util'

export default class Config extends Command {
  static description = 'create docs configurations'

  static examples = [
    `$ gi-ts config --lock`,
  ]

  static flags = {
    help: flags.help(),
    lock: flags.boolean(),
  };

  generateLockFile() {
    return Promise.all(
      generate_all().map(l => generate(l))
    )
      .then(res => {
        const x = async () => {
          const compiled = res.filter(a => a != null);

          fs.writeFileSync('./docs-lock.json', JSON.stringify(compiled, null, 4));
        }

        return x();
      })
  }

  async run() {
    const { flags } = this.parse(Config);

    if (flags.lock) {
      this.generateLockFile();
    }

  }
}

