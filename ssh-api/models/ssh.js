var fs = require('fs')
var path = require('path')
var node_ssh = require('node-ssh')
const config = require('../config.json');


function execCommand(command) {
	return new Promise((resolve, reject) => {
		global.ssh.execCommand(command, {
			onStdout(chunk) {
				console.log('stdoutChunk', chunk.toString('utf8'))
				resolve(chunk.toString('utf8'))
			},
			onStderr(chunk) {
				console.log('stderrChunk', chunk.toString('utf8'))
				reject(chunk.toString('utf8'))
			},
		})
	})
}

async function uptime() {
	await instanciate();
	return execCommand('uptime')
}

async function instanciate() {
	var ssh = new node_ssh()
	await ssh.connect(config);
	global.ssh = ssh;
}

module.exports = {
	uptime,
	instanciate,
	execCommand
}
