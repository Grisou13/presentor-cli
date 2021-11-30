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
parser.add_argument('-t', '--theme', { help: 'Theme to use', default: "default", choices: ["default", "dark"] });
const cwd = path.resolve("./");

module.exports = {
    run: () => {
        const args = parser.parse_args();
        
        appBuilder
        .build(cwd, args["slides"])
        .withTeme(args["theme"])
        .run()
        .openBrowser()
    }
}
