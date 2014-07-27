var bl  = require('bl');
var net = require('net');

var port = process.argv[2];

function zeroFill(i) {
	return (i<10?'0':'')+i;
}

function now(){
	var d = new Date();
	return d.getFullYear()+"-"
	+ zeroFill(d.getMonth()+1) +"-"
	+ zeroFill(d.getDate())+ " "
	+ zeroFill(d.getHours()) + ":"
	+ zeroFill(d.getMinutes());
}

var server = net.createServer(function(socket){
	socket.end(now()+"\n");
});

server.listen(Number(port));



/*
var server = net.createServer(function(socket){
	var d = new Date();

	var y = d.getFullYear().toString();
	var m = (d.getMonth()+1).toString();
	var a = d.getDate().toString();
	var date = y +"-"+(m[1]?m:"0"+m[0])+"-"+(a[1]?a:"0"+a[0]);
	
	var h = d.getHours().toString();
	var i = d.getMinutes().toString();

	var time = h + ":" + (i[1]?i:"0"+i[0]);
	//console.log(date+" "+time);
	
	socket.write(date+" "+time + "\n");
	socket.end();
})
server.listen(port);
*/