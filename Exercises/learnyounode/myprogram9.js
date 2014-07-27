var bl = require('bl');
var http = require('http');

var results = [];
var count = 0;

function printResults(){
	for (var i=0; i < 3; i++)
		console.log(results[i]);
}

function httpGet(index){
	http.get(process.argv[2+index], function(response){
		response.pipe(bl(function(err, data){
			if (err){
				return console.error(data);
			}
			results[index]=data.toString();
			count++;
			
			if (count == 3){
				printResults();
			}
		}));
	});
}
	
for (var i=0; i<3; i++)
	httpGet(i);



/*
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var ips = new Array(url1,url2,url3);

    for (ip in ips) {
    	//console.log("INDX:"+ip);
        //console.log("URL:"+ips[ip]);
        var curIp =  ips[ip];
        comp ='';
        comp0 ='';
        comp1 ='';
		comp2 ='';

	        (	function(curIp, ip){
	        		var result = new Array('','','');
		            http.get(
		            	curIp,
		                function (res) {
		                    res.on('data', function (chunk) {
		                    	//console.log("ip::"+ip);
		                    	result[ip] += chunk.toString();
		                    });
		                    res.on('end', function () {
		                        // Want to parse data for each ip, but
		                        // curIp is always the last ip in the list
		                    	if (ip==="0"){
		                    		comp0 = result[ip];
		                    	}
	                    	   	if (ip==="1"){
		                    		comp1 = result[ip];
		                    	}
	                    	   	if (ip==="2"){
		                    		comp2 = result[ip];
		                    	}

		                        comp += 'a';                    
		                        if(comp == 'aaa'){
		                        	console.log(comp0);
		                        	console.log(comp1);
		                        	console.log(comp2);
		                    	}


		                    });
		                    res.on('error', console.error);
		                }
		            );
		            
				}
			)
           	(
           		curIp, ip
           	);         
     };*/