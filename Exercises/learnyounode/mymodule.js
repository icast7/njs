module.exports = mymodule;

var fs = require('fs');
var path = require('path');

function mymodule (dir, ext, callback) {
	fs.readdir(dir, function(err, list){
		var arr = [];
		if (err) {
			return callback(err);
		}
		
		list.forEach(function(file){
			if (path.extname(file) == '.' + ext)
			{
				arr.push(file);		
			}
		});
		return callback(null, arr);
	});
};