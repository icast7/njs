var through = require('through');
var tr = through(write, end);

function write (data) {
	this.queue(data.toString().toUpperCase());
}

/*
function end () {
	this.queue(null);
}*/

process.stdin.pipe(tr).pipe(process.stdout);


/* MINE

//tr.write('beep\n');
//tr.write('boop\n');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(chunk.toString().toUpperCase());
  }
});

function write (data) {
	//this.queue(data.toString().toUpperCase());
	//this.write(this);
	//process.stdin.pipe(process.stdout);
	//process.stdin.pipe(process.stdout);
	//process.stdin.toString().toUpperCase().pipe(process.stdout);
	process.stdin.pipe(process.stdout);
}

function end () {
	//console.log('__END__');
	this.queue(null);
}

tr.write();
tr.end();
//process.stdout;*/