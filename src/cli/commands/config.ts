import * as fs from "fs";

import { generate, generate_all } from "../util";


export function generateLockFile() {
  return Promise.all(
    generate_all().map(l => generate(l))
  )
    .then(res => {
      const x = async () => {
        const compiled = res.filter(a => a != null);

        fs.writeFileSync("./docs-lock.json", JSON.stringify(compiled, null, 4));
      };

      return x();
    });
}

export async function config() {
  if (process.argv.length === 3) {
    try {
      for (const argn of process.argv.slice(2)) {
        const [arg, value = null] = argn.split("=");

        switch (arg) {
          case "--lock":
            if (value !== null) {
              throw new Error(`--lock does not take any arguments.`);
            }

            await generateLockFile();

            console.log(`Lock file generated!`);
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
      } else {
        console.error(error);
      }
    }
  } else {
    console.log("Usage: gi-ts config --lock");
  }
}
