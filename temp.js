var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
	let estilo;

	//Crie sua condição aqui
	let cookieValue = req.cookieParser;
	if (cookieValue.estilo != undefined) {
		estilo = cookieValue;
		return estilo;
	} else {
		return estilo = "default"
	}

	res.render('/', {estilo: estilo});
	console.log(estilo)
}

index()