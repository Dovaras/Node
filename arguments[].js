function suma(a, b) {
    return a + b;
}

function sandauga(sk1, sk2) {
    return sk1 * sk2;
}

function atimtis(s1, s2) {
    return s1 - s2;
}

function skaiciuotuvas(pirmas, antras, veiksmas) {
    if (typeof veiksmas === "function")
        return veiksmas(pirmas, antras);
    else console.log("nezinomas veiksmas");
    return undefined;
}
//suma = atimtis;

let dalyba = function (a, b) {
    return a / b;
};

console.log(skaiciuotuvas(2, 3, suma));
console.log(skaiciuotuvas(2, 3, sandauga));
console.log(skaiciuotuvas(2, 3, atimtis));
console.log(skaiciuotuvas(2, 3, dalyba));



let undef;
let sk = 10;
let o = {};
let f = function() {};
let str = "tekstas";
let b = false;
let n = null;

console.log(typeof undef);
console.log(typeof sk);
console.log(typeof o);
console.log(typeof f);
console.log(typeof str);
console.log(typeof b);
console.log(typeof n);

/*
undefined
number
string
object
function
boolean
*/
function labas(vardas, pavarde) {
    if (typeof vardas !== 'undefined' && typeof pavarde != 'undefined')
        console.log("labas", " ", vardas, " ", pavarde);
    else if (typeof vardas != 'undefined')
        console.log("labas", " ", vardas);
        else console.log("labas nezinomas zmogau");
}
labas();



//typeof;

function sm(a, b, c) {
    let s = 0;
    if (typeof a === "number")
        s += a;
    if (typeof a === "number")
        s += b;
    if (typeof a === "number")
        s += c;    
    return s;
}
console.log(sm(1, 2, 3));





function suma() {
    let s = 0;
    for (let i = 0; i < arguments.length; i++)
        if (typeof arguments[i] === "number")
            s += arguments[i];
}


function pasisveikinimas (vardas, pavarde = "bepavardis"/*default'tine reiksme, bet arguments[] reiksme yra undefined, t. y. be defaultiniu reiksmiu.*/) {
    console.log(arguments);
    console.log("labas " + vardas + " " + pavarde);
}
pasisveikinimas("Jonas", undefined, "Imperatorius");


function pasisveikinimas (zmogus) {
    console.log("labas" + " " + zmogus.vardas + " " + zmogus.pavarde);
    zmogus.jauPasveikintas = true;
}

pasisveikinimas({
    vardas: "Jonas",
    pavarde: "Jonaitis"
});

let z = {
    vardas: "Jonas",
    pavarde: "Jonaitis"
};

pasisveikinimas (z);
console.log(z);