import { run } from '@oclif/core';

export default async function runCli(...args) {
  return run(args, import.meta.url);
}
