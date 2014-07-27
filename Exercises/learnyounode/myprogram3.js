//var fs =  require('fs');

//var path = process.argv[2];

//var buf = fs.readFileSync(path);
////console.log(buf);

//var str = buf.toString();
////nsole.log(str);

//var strArray = str.split('\n');
//console.log(strArray.length-1);
//
var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);

var lines = contents.toString().split('\n').length - 1;

console.log(lines);
