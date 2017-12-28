// Consuming promises
var p = new Promise((resolve, reject)=> resolve(5));
p.then((val) => console.log(val));

p.then((val) => console.log("fulfilled:", val),
    (err) => console.log("rejected:", err));

p.then((val) => console.log("fulfilled:", val))
.catch((err) => console.log("rejected:", err));

p.then((val) => console.log("fulfilled:", val))
.then(null, (err) => console.log("rejected:", err));


