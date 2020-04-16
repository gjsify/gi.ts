#!/usr/bin/env node

const [cmd] = process.argv.splice(2, 1);

if (cmd === 'config') {
    require('./_build/config.js');
} else if (cmd === 'generate') {
    require('./_build/main.js');
} else {
    console.log('Unknown command. Use either config of generate');
}