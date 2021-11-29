#!/usr/bin/env node

const path = require("path");
const { ArgumentParser } = require('argparse');

var appBuilder = require('../lib/app.js');

const parser = new ArgumentParser({
description: 'Argparse example',

});
const version = () => {
    var pkg = require(__dirname, "../package.json");
    return pkg.version
}

parser.add_argument('-v', '--version', { action: 'version', version });
parser.add_argument('-s', '--slides', { help: 'Slides directory to use', default: "./" });

const args = parser.parse_args();
const cwd = path.resolve("./");
appBuilder.build(cwd, args["slides"]).run()