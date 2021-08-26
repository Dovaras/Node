let m = [
    [
    [1, 2, 3, 4, 5, 6],
    [74, 23, 5, 7, 4],
    [67, 4, 7, 3, 7, 9, 3]
    ],
    [
    [6, 34, 67, 8, 4, 8],
    [7, 4, 5],
    [3, 6, 8, 0, 3, 89],
    [3, 6, 2, 5, 7, 6, 3, 1]
    ],
    [
    [1, 1, 1, 1, 4],
    [2, 2, 2, 12],
    [23],
    [7, 4, 7, 5, 32, 8, 3]
    ]
   ];
   /*
   atspausdinti visu nelyginiu skaiciu suma ir vidurki
   */
let d = 0;
let suma = 0;

for (let a = 0; a < m.length; a++)
    for (let b = 0; b < m[a].length; b++)
        for (let c = 0; c < m[a][b].length; c++)
            if (m[a][b][c] % 2 != 0) {
                suma += m[a][b][c];
                d++;
            }
console.log("Suma: ", suma);
console.log("Vidurkis: ", suma / d, " ");