var express = require('express');
var app = express();

// Import ssh Module
var ssh = require('../models/ssh');

// API Routes
app.post('/test', async function (req, res) {
	var data = req.body;
	console.log('TEST')
	try {
		const rows = await ssh.uptime(data)
		res.send(JSON.stringify(rows));
	} catch (err) {
		console.log(err);
	}
});

module.exports = app;