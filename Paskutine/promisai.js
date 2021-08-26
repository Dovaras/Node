let p = new Promise((resolve, reject) => { // (patvirtink, atmesk)
    console.log("start promise function");
    // setTimeout(() => {
    if (Math.random() < 1.5) { //resolvina visada
        console.log("resolving promise");
        resolve("resolve value"); //patvirtink
    } else {
        console.log("rejecting promise");
        reject("reject value"); //atmesk
    }
    // }, 10);
    console.log("finish promise function");
});

p.then(
    value => { //reiksme
        console.log("promise was resolved with value " + value); //reiksme
    },
    reason => { //klaida
        console.log("promise was rejected with value " + reason); //klaida
    }
);
console.log("program finished");

// .catch tai .then su pirmu parametru null,








let p = new Promise((resolve, reject) => {
    console.log("start promise function");
    setTimeout(() => {
        if (Math.random() < -1.5) {
            console.log("resolving promise");
            resolve("resolve value");
        } else {
            console.log("rejecting promise");
            reject("reject value");
        }
    }, 10);
    console.log("finish promise function");
});

const p1 = p.then(
    value => {
        console.log("promise was resolved with value " + value);
        return "new resolve value";
    }
);

const p2 = p1.then(
    v => {
        console.log("p2 resolved with: " + v);
    }
);

const p3 = p2.catch(
    reason => {
        console.log("promise was rejected with value " + reason);
        return "new reject value"
    }
);



console.log("program finished");







