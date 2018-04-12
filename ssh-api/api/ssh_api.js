var express = require('express');
var app = express();

// Import ssh Module
var ssh = require('../models/ssh');

// API Routes
app.post('/uptime', async function (req, res) {
	var data = req.body;
	console.log('Get Uptime')
	try {
		const result = await ssh.uptime()
		res.send(result);
	} catch (err) {
		console.log(err);
	}
});

app.post('/minecraft', async function (req, res) {
	var cmd = req.body.cmd;
	console.log('Send a command to Mineraft server :', cmd)
	try {
		const result = await ssh.minecraftCommand(cmd)
		res.send(result);
	} catch (err) {
		console.log(err);
	}
});

module.exports = app;