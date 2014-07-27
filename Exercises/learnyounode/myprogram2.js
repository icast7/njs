//process.argv.forEach(function(val, index, array) {
// if (index > 2)
//	{
//		 console.log(val);
//console.log(Number(val));
//	}
//});

//var x =0;
//for (var i=2;i<(process.argv.length);i++)
//{
//	x = x + Number(process.argv[i]);
//}
//console.log(x);


var result = 0;
for (var i = 2; i < (process.argv.length); i++)
{	
	result = result + Number(process.argv[i]);
}	
console.log(result);
