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
*/
const fs = require("fs/promises");
let s = "";

fs.readFile("Paskutine/4.txt")
    .then(data => {
        s += data;
        return fs.readFile("Paskutine/3.txt");
    })
    .then(data => {
        s += " " + data;
        return fs.readFile("Paskutine/1.txt");
    })
    .then(data => {
        s += " " + data;
        let m = s.split(" ");
        m.sort((e1, e2) => e1.length - e2.length);
        console.log(m);
        return fs.readFile("Paskutine/5.txt");
    })
    .then((data) => {
        console.log("" + data);
        return fs.readFile("Paskutine/2.txt");
    })
    .then(data => {
        console.log("" + data);
    })
    .catch(err => {
        console.log("Ivyko klaida", err);
    });