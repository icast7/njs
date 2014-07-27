var mymodule = require('./mymodule.js')
var dir = process.argv[2];
var ext = process.argv[3];

var cba = function test (err, pdata){
	if(err){
		console.log("ERROR MSG:"+err);
	}
	for (var i = 0; i < pdata.length; i++) {
    	console.log(pdata[i]);
	}
}


mymodule (dir,ext,cba);