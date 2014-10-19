var concat = require('concat-stream');
var through = require('through');


var writeconcat = concat(function(data){});


process.stdin.pipe(writeconcat).pipe(process.stdout);

/*
var server = http.createServer(
	function (req, res) {
		if (req.method == 'POST'){
			req.pipe(concat(function(body){
				var obj = JSON.parse(body);
				res.end(Object.keys(obj).join('\n'));
			}));
		} 
		else res.end();
	}
);

server.listen(5000); */