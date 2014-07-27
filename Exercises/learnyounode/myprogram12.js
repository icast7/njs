var map = require('through2-map');
var http = require('http');
var port = process.argv[2];

var server = http.createServer(function(req, res){
	if (req.method != 'POST')
		return res.end('Send me a POST\n');

	var x = req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	}));
	x.pipe(res);
});

server.listen(Number(port));

/*
var server = http.createServer(function(req, res){
	var oso = req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	}));
	oso.pipe(res);
});

server.listen(port);*/