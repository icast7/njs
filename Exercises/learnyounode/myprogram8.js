var bl = require('bl');
var http = require('http');
var url = process.argv[2];

http.get(url, function(resp){
	resp.pipe(bl(function(err, data){
		if (err)
			return console.error(err)
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
});



/*
var d = '';
http.get(url, function(response){
	response.setEncoding('utf8');
		response.on('data',  function(c){
			d = d+c;
	});
	response.on('end', function(e){
		console.log(d.length)
		console.log(d);
	})
	response.on('error', console.error);
});

*/