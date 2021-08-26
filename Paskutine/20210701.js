const fs = require("fs");

function perskaiciau(err, data) {
    console.log("" + data);
}//Vienas variantas:
const perskaiciau = function (err, data) {
    console.log("" + data);
}//Identiskas variantas:
const perskaiciau = (err, data) => {
    console.log("" + data);
}

fs.readFile("a.txt", (err, data) => {
    console.log("" + data);
});
fs.readFile("b.txt", (err, data) => {
    console.log("" + data);
});
fs.readFile("c.txt", (err, data) => {
    console.log("" + data);
});

// Eiliskumas funkciju vykdymo:
fs.readFile("a.txt", (err, data) => {
    console.log("" + data);
    fs.readFile("b.txt", (err, data) => {
        console.log("" + data);
        fs.readFile("c.txt", (err, data) => {
            console.log("" + data);
        });
    });
});

const suma = (a, b) => {
    return a + b;
}
const suma = (a, b) => a + b;
const suma = function (a, b) {
    return a + b;
}






//Cia visur yra funkcijos, kurias galima iskviesti

const suma = (a, b) => {
    return a + b;
};
const suma1 = (a, b) => a + b;

const kvadratas = (a) => a * a;
const kvadratas1 = a => a * a;

const atstitiktinis = () => {
    let sk = Math.random() * 10 + 1;
    sk = Math.floor(sk);
    return sk;
};

const labas = (vardas, pavarde) => {
    console.log("Labas,");
    console.log(vardas);
    console.log(pavarde);
    console.log("Kaip tau sekasi?");
};

console.log(suma(2, 3));
console.log(suma1(2, 3));
console.log(kvadratas(5));
console.log(kvadratas1(5));
console.log(atstitiktinis());

labas("Jonas", "Jonaitis");

(() => {
    console.log("Labas pasauli");
})();






/*
susikurti 5 failus:
1.txt
2.txt
3.txt
4.txt
5.txt
 
perskaityti failus tokia tvarka: 4, 3, 1 ; rezultatus sudeti i viena string'a
ta stringa suskaldyti zodziais (per tarpa); atspausdinti kiekviena zodi ilgejimo tvarka;
PO TO perskaityti failus: 5, 2 ; atspausdinti ju turini




const fs = require("fs");
 
fs.readFile("a.txt", (err, data) => {
 data = "" + data;
 fs.readFile("b.txt", (err, data) => {
 data = "" + data;
 fs.readFile("c.txt", (err, data) => {
 data = "" + data;
 });
 });
});
*/

// TOMO PVZ:
const fs = require("fs");
let s = "";
fs.readFile("4.txt", (err, data) => {
    s += data;
    fs.readFile("3.txt", (err, data) => {
        s += " " + data;
        fs.readFile("1.txt", (err, data) => {
            s += " " + data;
            let m = s.split(" ");
            m.sort((e1, e2) => e1.length - e2.length);
            console.log(m);
            fs.readFile("5.txt", (err, data) => {
                console.log("" + data);
                fs.readFile("2.txt", (err, data) => {
                    console.log("" + data);
                });
            });
        });
    });
});


// TOMO PVZ perdirbimas pagal destytoja su PROMISES:
const fs = require("fs/promises");

let s = "";
fs.readFile("4.txt")
    .then(data => {
        s += data;
        return fs.readFile("3.txt");
    })
    .then(data => {
        s += " " + data;
        return fs.readFile("1.txt");
    })
    .then(data => {
        s += " " + data;
        let m = s.split(" ");
        m.sort((e1, e2) => e1.length - e2.length);
        console.log(m);
        return fs.readFile("5.txt");
    })
    .then((data) => {
        console.log("" + data);
        return fs.readFile("2.txt");
    })
    .then(data => {
        console.log("" + data);
    })
    .catch(err => {
        console.log("Ivyko klaida", err);
    });


