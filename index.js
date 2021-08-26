"use strict";

console.log("Hello hell!!!");
var sk1;
var sk2;

sk1 = 5;
sk2 = 7;

var sk3;// = 2;
var rez;
rez = (sk1 + sk2) / sk3;

console.log(sk3);
console.log(sk1 + sk2 / sk3 * sk1);
console.log('cia \\\\ y\tra \"specia \u4EFC lus\" tek\rstukas'); // \r\n - go back and jump to new line

var s1 = "15";
var s2 = "5";
console.log("" + sk1 + sk2 + s1 + s2);
console.log(s1 + s2 + sk1 + sk2);

var b = true;
var b1 = false;

if (b) console.log("didelis");

console.log(sk1 > 5);

var x = 0;
if ((x < 10) ^ (x >= 0))
    console.log(true);

console.log(("_____________________________________________"));
// CIKLAI
var suma = 0;
var sk = 1;
while (sk < 5) {
    suma+= sk++;
};
console.log(suma);


do {
    suma+= sk++;
} while (sk > 10 && sk < 13)
console.log(suma);

suma = 0;
for (sk = 1; sk < 10; sk++) {
    suma+= sk;
}
console.log(suma);


for (var i = 1; i <= 100; i++){
    if (/*(i % 2 == 0) ||*/ (i % 5 == 0))
        console.log(i);
}

console.log(("_____________________________________________"));

for (i = 2; i <= 4; i++)
    for (var j = 2; j < 4; j++){
        console.log(i * j);
    }

/*
undefined
number
string
boolean

0000 0 0
0001 1 1
0010 2 2
0011 3 3
0100 4 4
0101 5 5
0110 6 6
0111 7 7
1000 8 -8
1001 9 -7
1010 10 -6
1011 11 -5
1100 12 -4
1101 13 -3
1110 14 -2
1111 15 -1

2^10 - kilo
2^20 = 2^10 * 2^10 - mega
2^30 = 2^10 * 2^10 * 2^10 - giga


1. Suskaičiuoti visų skaičių nuo 1 iki 100, kurie dalinasi iš 3 sumą.
2. Atspausdinti visus pirminius skaičius intervale nuo 2 iki 100.

*/