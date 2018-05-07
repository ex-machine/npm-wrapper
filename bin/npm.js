#!/usr/bin/env node

'use strict';

var spawn = require('child_process').spawn;
var npm = require.resolve('npm/cli');

spawn(process.execPath, [npm].concat(process.argv.slice(2)), { stdio: 'inherit' })
.on('exit', function (code) {
	process.exit(code);
});
