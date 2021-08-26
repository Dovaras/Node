// ND - kiek imanoma optimalus sprendimas:
let m = [1, 2, 3, 4, 5];
let rez = [
 [0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0]
];
/*
// MANO SPRENDIMAS - ar imanomas kitoks sprendimas ???
for (let i = 0; i < rez.length; i++)
    for (let y = 0; y < rez[i].length; y++)
        rez[i][y] = m[i + y];
 
// DIRBAMA TA LINKME:       
for (let i = rez.length - 1; i > 0; i--)
    for (let y = rez[i].length; y > 0; y--) {
        rez[i][y] = m[i - y];
}
console.log(rez);
/*
1 2 3 4 5
2 3 4 5 1
3 4 5 1 2
4 5 1 2 3
5 1 2 3 4
 
1 2 3 4 5
5 1 2 3 4
4 5 1 2 3
3 4 5 1 2
2 3 4 5 1
*/

// Stebuklingas sprendimas:
for (let y = 0; y < rez.length; y++)
    for (let x = 0; x < rez[y].length; x++)
        rez[y][(x + y) % m.length] = m[x];
        //rez[y][x] = m[(x + y) % m.length];
console.log(rez);
