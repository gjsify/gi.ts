imports.searchPath.push("./");

const { GLib, Gio } = imports.gi;

class fs {
    static mkdirSync(path) {
        const file = Gio.File.new_for_path(path);
        return file.make_directory(null);
    }
    static readdirSync(path, opts = {}) {
        const file = Gio.File.new_for_path(path);
        /**
         * @param {string} file
         * @returns {Generator<string, string, string>}
         */
        function* fileIterator(file) {
            const enumerator = file.enumerate_children(Gio.FILE_ATTRIBUTE_STANDARD_NAME, Gio.FileQueryInfoFlags.NONE, null);
            let next_file = enumerator.next_file(null);
            while (next_file != null) {
                /** @type {string} */
                yield (next_file.get_name());
                next_file = enumerator.next_file(null);
            }
        };
        if (file.query_exists(null)) {
            return Array.from(fileIterator(file));
        } else {
            return [];
        }
    }
    static readFileSync(path) {
        const file = Gio.File.new_for_path(path);
        return imports.byteArray.toString(file.load_contents(null)[1]);
    }

    static writeFileSync(path, content) {
        const file = Gio.File.new_for_path(path);
        file.replace_contents(content, null, false, 0, null);
    }

    static existsSync(path) {
        const file = Gio.File.new_for_path(path);

        return file.query_exists(null);
    }
}

const path = {
    join(...args) {
        return `${GLib.build_filenamev(args)}`;
    },
    isAbsolute(path) {
        return path[0] === '/';
    },
    resolve(...paths) {
        let base = paths[0];
        const resolvees = [...paths].slice(1);

        if (base.startsWith('.')) {
            base = process.cwd();
        }

        const file = resolvees.reduce((prev, next) => {
            if (!prev || !prev.query_exists(null)) {
                return null;
            }

            return prev.resolve_relative_path(next);
        }, Gio.File.new_for_path(base));

        if (file) {
            return `${file.get_path()}`;
        }

        return null;
    }
}

const events = imports.nodejs.events.EventEmitter;

function assert(bool) {
    if (!bool) {
        throw new Error("Assertion failed!");
    }
}

const util = imports.nodejs.util.module.exports;

const wrappers = new Map();

wrappers.set('fs', fs);
wrappers.set('path', path);
wrappers.set('events', events);
wrappers.set('assert', assert);
wrappers.set('util', util);

const $_async_hooks = {}; wrappers.set('async_hooks', $_async_hooks);
const $_buffer = {}; wrappers.set('buffer', $_buffer);
const $_child_process = {}; wrappers.set('child_process', $_child_process);
const $_cluster = {}; wrappers.set('cluster', $_cluster);
const $_console = {}; wrappers.set('console', $_console);
const $_constants = {}; wrappers.set('constants', $_constants);
const $_crypto = {}; wrappers.set('crypto', $_crypto);
const $_dgram = {}; wrappers.set('dgram', $_dgram);
const $_dns = {}; wrappers.set('dns', $_dns);
const $_domain = {}; wrappers.set('domain', $_domain);
const $_http = {}; wrappers.set('http', $_http);
const $_http2 = {}; wrappers.set('http2', $_http2);
const $_https = {}; wrappers.set('https', $_https);
const $_inspector = {}; wrappers.set('inspector', $_inspector);
const $_module = {}; wrappers.set('module', $_module);
const $_net = {}; wrappers.set('net', $_net);
const $_os = { EOL: '\n' }; wrappers.set('os', $_os);
const $_perf_hooks = {}; wrappers.set('perf_hooks', $_perf_hooks);
const $_punycode = {}; wrappers.set('punycode', $_punycode);
const $_querystring = {}; wrappers.set('querystring', $_querystring);
const $_readline = {}; wrappers.set('readline', $_readline);
const $_repl = {}; wrappers.set('repl', $_repl);
const $_stream = { Stream: class Stream { } };
wrappers.set('stream', $_stream);
const $_string_decoder = {}; wrappers.set('string_decoder', $_string_decoder);
const $_timers = {}; wrappers.set('timers', $_timers);
const $_tls = {}; wrappers.set('tls', $_tls);
const $_trace_events = {}; wrappers.set('trace_events', $_trace_events);
const $_tty = {}; wrappers.set('tty', $_tty);
const $_url = {}; wrappers.set('url', $_url);
const $_v8 = {}; wrappers.set('v8', $_v8);
const $_vm = {}; wrappers.set('vm', $_vm);
const $_zlib = {}; wrappers.set('zlib', $_zlib);

window.process = {
    version: 'v8',
    platform: 'gjs',
    argv: ARGV,
    cwd() {
        return Gio.File.new_for_path(imports.system.programInvocationName).get_parent().get_path();
    }
}

Object.defineProperty(window, "global", {
    get() {
        console.debug("accessing global...");
        return window;
    }
});

wrappers.set('process', window.process);

Object.defineProperties(window.process, {
    env: {
        configurable: true,
        get() {
            return GLib.get_environ().map(v => v.split('=')).reduce((prev, [k, v]) => {
                return Object.assign(prev, { [k]: v });
            }, {});
        }
    }
});

window.console = {
    log: (...args) => {
        log(args.join(', '));
    },
    debug: a => a,
    error: logError
}

const imported = new Map();

function scoped_eval(code, path, locations) {
    'use strict';
    const previous_base = window.module_base;
    window.module_base = `${path}`;
    var module = { exports: {} };
    const __og_exports = module.exports;
    var exports = module.exports;
    const mod = {};
    locations.forEach(location => void imported.set(location, mod));

    Object.defineProperty(mod, "exported", {
        get() {
            return module.exports;
        },
        set(x) {
            module.exports = x;
        }
    })

    try {
        eval(code);
    } catch (err) {
        window.module_base = previous_base;
        console.error(err);
        throw new Error('Failed to eval: ' + locations.join(' a.k.a. '));
    }
    window.module_base = previous_base;

    if (exports !== __og_exports) {
        console.debug("returning exports intead... because it was reassigned");
        mod.exported = exports;
        return mod;
    } else {
        return mod;
    }
}

const multihits = new Map();

window.require = function require(name) {
    console.debug("requiring " + name + " from " + window.module_base + " with " + Object.getOwnPropertyNames(eval('module.exports')));
    const base = window.module_base;

    if (wrappers.has(name)) {
        console.debug(`Importing ${name} from wrapper...`);
        return wrappers.get(name);
    }

    const guessed = [base].map(sp => {
        let f = Gio.File.new_for_path(sp).resolve_relative_path(name);

        console.debug("Searching..." + f.get_path());
        if (!f.query_exists(null)) {
            f = Gio.File.new_for_path(sp).resolve_relative_path(name + ".js");
        } else {
            console.debug("Found search..." + f.get_path());
            return f.get_path();
        }
        console.debug("Searching..." + f.get_path());
        if (!f.query_exists(null)) {
            f = null;
        } else {
            console.debug("Found search..." + f.get_path());
            return f.get_path();
        }
        return null;
    }).find(f => f != null);

    if (guessed) {
        const possibleNames = [guessed, guessed.replace(/\.js$/, ''), `${guessed}.js`];
        let key;
        if (key = possibleNames.find(i => {
            return imported.has(i)
        })) {
            console.debug(`Cache: Found ${name} from ${guessed} with key ${key}!`);
            const found = imported.get(key);

            if (found.exported)
                return found.exported;
            else {
                console.debug(Object.getOwnPropertyNames(found));
                throw new Error("Could not find imports for " + name + " from " + guessed)
            }
        }
    }

    if (!guessed && imported.has(name)) {
        console.debug(`Found ${name} from imports!`);
        return imported.get(name).exported;
    }

    if (!multihits.has(name)) {
        multihits.set(name, 1);
    } else {
        const amt = multihits.get(name);
        multihits.set(name, + 1);
        console.debug("multiple hits for " + name + " from of " + amt + " for " + base);
    }

    console.debug(`Begin importing ${name}...`);

    const end = name.replace(/\.js$/, '');

    if (end.startsWith("./") || end.includes("/")) {
        let base_file;
        if (end.includes("/") && !end.startsWith("./")) {
            base_file = Gio.File.new_for_path('./node_modules/');
        } else {
            base_file = Gio.File.new_for_path(base);
        }

        console.debug(`Importing relative path ${end}...`);

        const entry_file = base_file.resolve_relative_path(`${end}.js`);
        /** @type [any, string] */
        let [, contents] = (entry_file.load_contents(null));
        contents = imports.byteArray.toString(contents);
        contents = contents.split('\n');
        contents[0] = contents[0].replace(/("|'|`)(use strict)("|'|`)(;)*/, `// use strict`);
        contents = contents.join('\n');
        const str = `${contents}`;

        const exports_found = scoped_eval(str, entry_file.get_parent().get_path(), [entry_file.get_path()]);

        console.debug("found: " + Object.getOwnPropertyNames(exports_found.exported) + " in " + entry_file.get_path());

        return exports_found.exported;
    } else {
        console.debug(`Attempting direct import...`);
    }
    console.debug(`Searching for node module ${name}...`);

    const base_file = Gio.File.new_for_path(`./node_modules/${name}/`);
    const file = Gio.File.new_for_path(`./node_modules/${name}/package.json`);
    if (file.query_exists(null)) {
        console.debug(`Found package.json for node module ${name}...`);
        try {
            const [, rawJSON] = file.load_contents(null);
            const obj = JSON.parse(imports.byteArray.toString(rawJSON));
            let main = obj.main || "index.js";
            const end = main.replace(/\.js$/, '');
            const entry = `${end}.js`
            console.debug(`Entry point for ${name} is ${entry}`);


            let entry_file = base_file.resolve_relative_path(entry);

            if (!entry_file.query_exists(null)) {
                entry_file = base_file.resolve_relative_path(`${end}/index.js`);
            }

            let [, contents] = (entry_file.load_contents(null));
            contents = imports.byteArray.toString(contents);
            contents = contents.split('\n');
            contents[0] = contents[0].replace(/("|'|`)(use strict)("|'|`)(;)*/, `// use strict`);
            contents = contents.join('\n');
            const str = `
                    ${contents}`;
            console.debug("evaling from path: " + entry_file.get_path());
            const evaluated = scoped_eval(str, entry_file.get_parent().get_path(), [name, entry_file.get_path()]);

            console.debug("found: " + Object.getOwnPropertyNames(evaluated.exported));

            return evaluated.exported;
        } catch (err1) {
            console.error(err1);

            console.debug(`Failed to import: ${name}`);
        }
    } else {
        throw new Error(`Could not import: ${name}`);
    }
}


var module = { exports: {} };
window.module_base = './'
