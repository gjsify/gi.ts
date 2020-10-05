import { config } from "./commands/config";
import { generate } from "./commands/generate";

function parseCommand() {
    const [cmd] = process.argv.splice(2, 1);

    if (cmd === 'config') {
        return config();
    } else if (cmd === 'generate') {
        return generate();
    } else {
        console.log('Unknown command. Use either config of generate');
    }

    return Promise.resolve();
}

parseCommand().then(() => { }).catch(err => {
    console.error(err);
});