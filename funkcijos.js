"use strict" // 2021-06-21d. 01:20:00 Paskaitos... kamuoliuku turiu apskaiciavimas ir rusiavimas.
/*
let m = [3, 5.4, 2.3, 4.9, 0.1, 0, 0.23];
// Atspausdinimas siaipsau:
for (let i = 0; i < m.length - 1; i++) {
    console.log(turis(m[i]));
}
// Rusiavimas:
for (let i = 0; i < m.length - 1; i++) {
    for (let j = i + 1; j < m.length; j++) {
        if (turis(m[i]) > turis(m[j])) {
            let tmp = m[i];
            m[i] = m[j];
            m[j] = tmp;
        }
    }
}
// Funkcija:
function turis(r) { // spindulys
    return 4 * 3.14 * r * r * r / 3; // (4/3 * 3.14 * r^3)
}

// Surasti didziausia kiekvienos eilutes reiksme, naudojant funkcija:
 let m1 = [1, 2, 3, 4, 5];
 let m2 = [65, 78, -2, 4, 7];
 
function didesnisSk(arr) {
    let ans = arr[0];
    for (let i = 0; i < arr.length - 1; i++)
        if (ans < arr[i + 1])
            ans = arr[i + 1];
    return ans;
}
//console.log(ans(m1));


let mmm = [1, 2, 3, 4, 5];
 
console.log(vid(mmm));//didesnisSk(m1));
 
let bubu = [65, 78, -2, 4, 7];
 
console.log(vid(bubu));
 
let meme = [165, 8, 2, -4, 17];
 
console.log(vid(meme));
 
let oj = [65, 45, 11];
 
console.log(vid(oj));
 
let ah = [0.1, 0.2, -1.2];
 
console.log(vid(ah));
*/
//visu penkiu masyvu skaiciu vidurki
//kiekvieno atskirai

function vid(a) {
    let suma = 0;
    for (let i = 0; i < a.length; i++) {
        suma += a[i];
    }
    return suma / a.length;
}

let mmm = [1, 2, 3, 4, 5];;
let bubu = [65, 78, -2, 4, 7]; 
let meme = [165, 8, 2, -4, 17]; 
let oj = [65, 45, 11];
let ah = [0.1, 0.2, -1.2];
let vidurkis = vid(mmm) + vid(bubu) + vid(meme) + vid(oj) + vid(ah) / 5;
console.log(vidurkis);







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
    return veiksmas(pirmas, antras);
}
suma = atimtis;

let dalyba = function (a, b) {
    return a / b;
};

console.log(skaiciuotuvas(2, 3, suma));
console.log(skaiciuotuvas(2, 3, sandauga));
console.log(skaiciuotuvas(2, 3, atimtis));
console.log(skaiciuotuvas(2, 3, dalyba));