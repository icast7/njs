var http =  require('http');
var url  =  require('url');

var port = process.argv[2];

function parsetime (time){
	return {
		hour:time.getHours(),
		minute:time.getMinutes(),
		second:time.getSeconds()
	}
}

function unixtime (time){
	return {unixtime:time.getTime()}
}

var server = http.createServer(function (req, res){
	var parsedUrl = url.parse(req.url, true);
	var time = new Date(parsedUrl.query.iso);
	var result;

	if (/^\/api\/parsetime/.test(req.url)) {
		result = parsetime(time);
	} else if (/^\/api\/unixtime/.test(req.url)) {
		result = unixtime(time);
	}



	if (result){
		res.writeHead(200, {'Content-Type':'application/json'});
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(Number(port));

/*
var server = http.createServer(function(req, res){
	if (req.method!= 'GET')
		return res.end('Send me a GET\n');
	
	res.writeHead(200, {'Content-Type':'application/json'})
	//console.log(url.parse(req.url, true));
	//console.log("------------------------");
	var prsdreq = url.parse(req.url, true)
	var path = prsdreq["path"];
	var cut = path.replace(prsdreq["pathname"]+"?iso=","");
	var newoso = new Date(cut);

	var newtime = {
		"hour":  newoso.getHours(),
		"minute":newoso.getMinutes(),
		"second":newoso.getSeconds()
	};
	//console.log(res.unixtime);

	if (path.indexOf("unix")>-1){
		newtime = {"unixtime":newoso.valueOf()};
		res.end(JSON.stringify(newtime));
	}	
	res.end(JSON.stringify(newtime));
});

server.listen(Number(port));*/