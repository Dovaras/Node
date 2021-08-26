/*
function decTObin(num) {
    var liekana = num % 2;
    num = (num - liekana) / 2;
    if (num > 0) decTObin(num);
    console.log(liekana);
    return 0;
}
decTObin(78);

function faktorialas(sk) {
    if (sk < 0) return "Neigiamas skaicius!";
    if (sk === 0) return 1;
    return sk * faktorialas(sk - 1);
}
console.log(faktorialas(3));
*/
/*
Fibonacci skaiciu seka: 1, 1, 2, 3, 5, 8, 13...
Parasyti rekursine funkcija, kuri spausdintu:
fib (sk1, sk2, max)
fib (1, 1, 20) => 1 1 2 3 5 8 13
*/

function fib(sk1, sk2, max) {
    let sk3 = sk1 + sk2;
    if (sk3 <= max) {
        console.log(sk2);
        fib(sk2, sk3, max);
    } else console.log(sk2);      
}
console.log(1);
fib(1, 1, 20);
/*
// Dėstytojo sprendimo būdas:
function fib(sk1, sk2, max) {
    console.log(sk1);
    let next = sk1 + sk2;
    if (next < max) {
        fib(sk2, next, max);
    }
    else console.log(sk2);
}
fib(1, 1, 10);
*/