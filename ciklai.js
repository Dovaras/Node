/*
1. Suskaičiuoti visų skaičių nuo 1 iki 100, kurie dalinasi iš 3 sumą.
*/

console.log(new Date().getTime());

var sum = 0;
for (var i = 1; i <= 100; i++){
    if (i % 3 === 0) {
        sum += i;
    }
}
console.log(sum);

/*
Jei skaičiaus skaitmenų suma dalinasi iš 3, tai ir pats skaičius dalinasi iš 3.
*/

console.log(new Date().getTime());

var suma = 0
for (var i = 1; i <= 100; i++) {
    var sk = i;
    var skSuma = 0;
    do {
        skSuma += sk % 10;
        sk = (sk - sk % 10) / 10;
    } while (sk > 0);
    if (skSuma % 3 === 0) {
        suma += i;
    }
}
console.log(suma);

console.log(new Date().getTime());

/*
2. Atspausdinti visus pirminius skaičius intervale nuo 2 iki 100.
*/

for (var i = 2; i <= 100; i++) {
    var arPirminis = true;
    for (var j = 2; j < i; j++)
        if (i % j === 0) arPirminis = false;
    if (arPirminis) console.log(i);
}

/*
var i = 2;
 
while (i <= 10000) {
 var arPirminis = true;
 var atgal = i - 1;
 while (atgal >= 2 && arPirminis) {
 if (i % atgal === 0) {
 arPirminis = false;
 }
 atgal = atgal - 1;
 }
 if (arPirminis) {
 console.log(i);
 }
 i = i + 1;
}
*/

