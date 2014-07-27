var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (req, res){
	res.writeHead(200,{"content-type":"text/plain"});
	fs.createReadStream(file).pipe(res);
});
server.listen(Number(port));

/*
console.log(port);
console.log(file);

var server = http.createServer(function(req, res){
	var src =  fs.createReadStream(file);

	res.writeHead(200,{'Content-Type':'text/plain'});
	

	src.on('open', function(){
		src.pipe(res);
	});

	src.on('error', function(err){
		res.end(err);
	})
})

server.listen(Number(port));*/