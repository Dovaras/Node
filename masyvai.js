"use strict";

let suma = 0;
let m = [5, 87, -5, 3, -4];
for (let i = 0; i < m.length; i++)
    suma += m[i];    
//console.log(suma);

let max = m[0];
let min = m[0];

for (let i = 1; i <= m.length; i++) {
    if (m[i] > max)
        max = m[i];
    if (m[i] < min)
        min = m[i];
}
console.log(min, " ", max);

let st0 = [
    [1, 2, 3],
    [4, 5, 6, 10, 11, 12],
    [7, 8, 9]
   ];

for (let i = 0; i < 3; i++)
   for (let y = 0; y < st0[i].length; y++) {
       console.log(st0[i][y]);
   }


