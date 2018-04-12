var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var mysql = require('mysql');


// Initialize Express App
var app = express();

app.use(cors())
app.options('*', cors())

// Use Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Origin", "http://localhost:4200");
	next();
});

// Set Static Path
app.use('/', express.static(__dirname));

// Import API Routes
app.use(require('./api/ssh_api'));

port = process.env.PORT || '7777';

app.listen(port, async function () {
	console.log("ssh API ready on :" + port);
})