var mymodule = function test(args){
	foo(function(err, data){
		if(err)
			return callback(err)
		callback(null, data)
	})
console.log("FUNCTION");

};

module.exports.mymodule = mymodule;