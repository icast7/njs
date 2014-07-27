var dir = process.argv[2];
var ext = process.argv[3];

var fs = require('fs');
var path = require('path');

fs.readdir(dir, function(err, list){
	if (err) throw err;
	list.forEach(function(val, index, array) 
	{
		var extension = path.extname(val);
		///console.log("file == " + val);
		///console.log("extension == "+extension);
		///console.log("ext == "+ext);
		///console.log("compare == " + extension.localeCompare("."+ext));
				
		if (extension.localeCompare("."+ext)==0)
		{
			console.log(val);
		}		
	});	
}); 

//process.argv.forEach(function(val, index, array) {
// if (index > 2)
//	{
//		 console.log(val);
//console.log(Number(val));
//	}
//});
////////////////////////////////////////////////////////////////////////////////

// var fs= require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function(err, list){
// 	list.forEach(function (file) {
// 		if (path.extname(file) === '.'+process.argv[3])
// 			console.log(file)
// 	})
// }