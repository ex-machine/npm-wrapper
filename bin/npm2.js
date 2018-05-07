#!/usr/bin/env node

'use strict';

var spawn = require('child_process').spawn;
var npmPath = require.resolve('npm/bin/npm-cli');

spawn(process.execPath, [npmPath].concat(process.argv.slice(2)), { stdio: 'inherit' })
.on('exit', function (code) {
	process.exit(code);
});
