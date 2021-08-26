var nuoX = 8;
var nuoY;
var iki = 7;

while (nuoX <= iki) {  
    nuoY = 1;  
    while (nuoY <= iki) {
        //console.log(nuoX, nuoY, nuoX * nuoY++);
    }
    nuoX++;
}

var sk = 3;
var kitas = 10 - ++sk + sk++ - ++sk; 
//console.log(kitas);

sk = 0;
//while (sk < 3)
//    console.log(sk++);

sk = 3;
//while (sk > 0)
//    console.log(sk--);

for (var i = 1; i < 4; i++) {
    //console.log(i);
}

// daugybos lentele
var nuo = 1;
var iki = 5;

for (var i = nuo; i <= iki; i++)
    for (var y = nuo; y <= iki; y++)
        console.log(i, y, i * y);

// nuo 100 kas 3 atspausdinti
//for (var i = 100; i > 0; i -= 3)
//    console.log(i);



/*
var nuo = 1;
var iki = 4;


1 2 3 4
2 4 6 8
3 6 9 12
4 8 12 16

1
2
3
4
6
3
6
9

*/