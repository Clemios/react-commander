var fs = require('fs')
var path = require('path')
var node_ssh = require('node-ssh')
const config = require('../config.json');


function execCommand(command) {
	return new Promise((resolve, reject) => {
		global.ssh.execCommand(command).then(function(result) {
		if (result.stdout) {
		console.log('STDOUT: ' + result.stdout)
		resolve(result.stdout)
		}
		if (result.stderr) {
			console.log('STDERR: ' + result.stderr)
			resolve(result.stderr)
		}
  })
	})
}

async function uptime() {
	await instanciate();
	return execCommand('uptime')
}

async function minecraftCommand(cmd) {
	await instanciate();
	var fullCmd = '/etc/init.d/minecraft ' + cmd;
	return execCommand(fullCmd)
}

async function instanciate() {
	var ssh = new node_ssh()
	await ssh.connect(config);
	global.ssh = ssh;
}

module.exports = {
	uptime,
	minecraftCommand
}
