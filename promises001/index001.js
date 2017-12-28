// an immediately resolved promise
var p2 = Promise.resolve("Immediatly resvolved promise.");

// can get it after the fact, unlike events
p2.then((res) => console.log(res));

// Can't change promise just the value
var p =  new Promise(function(resolve, reject){
    setTimeout(() => resolve(4), 2000);
});

p.then((res) => {
    res += 2;
    console.log(res);
});

p.then((res) => console.log(res));