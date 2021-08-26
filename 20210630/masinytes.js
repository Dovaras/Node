"use strict";
/*
dvi masinos turi buti sportines

sportine masina turi tureti spoileri (pradzioj nuleistas)

jei spoileris yra pakeltas - sportine masina stabdo 2x greiciau (gazuoja standartiskai)
jei spoileris yra nuleistas - sportine masina gazuoja 2x greiciau (stabdo standartiskai)

lenktyniu metu kieviena sportine masina su 50% tikimybe pakeicia spoilerio pozicija


yra 8 masinos

pavadinimas
greitis: 0
kelias: 0

masinos lenktyniauja (ciklas)

kiekvienos iteracijos metu:
visos masinos gali pakeisti savo greiti
    random skaicius
    jei random < 0.2 - masina stabdo (t.y. mazeja masinos greitis 1..5 (random))
    jei random < 0.7 - masina gazuoja (t.y. dideja masinos greitis 1..10 (random))
    priesingu atveju masinos greitis nesikeicia
visos masinos pavaziuoja: per tiek, koks yra jos greitis

lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km

reikia surusiuoti masinas pagal nuvaziuota kelia,
    jei dvieju masinu kelias vienodas - pirmesne yra tu, kurios didesnis greitis

atspausdinti turnyrine lentele

*) kas 100 km spausdinti lyderi

*/

class Masina {
    constructor(pavadinimas) {
        this.pavadinimas = pavadinimas;
        this.kelias = 0;
        this.greitis = 0;
    }

    gazas(kiek) {
        this.greitis += kiek;
        if (this.greitis > this.max) {
            this.greitis = this.max;
        }
    }

    stabdis(kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        }
    }

    vaziuojam() {
        this.kelias += this.greitis;
    }

    asLyderis(kitaMasina) {
        if (this.kelias > kitaMasina.kelias) {
            return true;
        } else if (this.kelias === kitaMasina.kelias && this.greitis > kitaMasina.greitis) {
            return true;
        }
        return false;
    }
}

class SportineMasina extends Masina {
    constructor(pavadinimas) {
        super(pavadinimas);
        this.max = 200;
    }

    gazas(kiek) {
        super.gazas(kiek * 2);
    }

}

// function Masina(pavadinimas) {
//     this.pavadinimas = pavadinimas;
//     this.kelias = 0;
//     this.greitis = 0;
//     this.gazas = function(kiek) {
//         this.greitis += kiek;
//     };
//     this.stabdis = function(kiek) {
//         this.greitis -= kiek;
//         if (this.greitis < 0) {
//             this.greitis = 0;
//         }
//     };
//     this.vaziuojam = function() {
//         this.kelias += this.greitis;
//     };
//     this.asLyderis = function(kitaMasina) {
//         if (this.kelias > kitaMasina.kelias) {
//             return true;
//         } else if (this.kelias === kitaMasina.kelias && this.greitis > kitaMasina.greitis) {
//             return true;
//         }
//         return false;
//     }
// }

const masinos = [
    new Masina("pirma"),
    new Masina("antra"),
    new Masina("trecia"),
    new Masina("kevirta"),
    new Masina("penkta"),
    new Masina("sesta"),
    new Masina("septinta"),
    new SportineMasina("astunta")
];

let checkPoint = 100;
let lyderis;
do {
    // keiciam greiti ir vaziuojam
    for (let i = 0; i < masinos.length; i++) {
        // 
        let keiciamGreiti = Math.random();
        if (keiciamGreiti < 0.2) {
            masinos[i].stabdis(Math.floor(Math.random() * 5 + 1));
        } else if (keiciamGreiti < 0.7) {
            masinos[i].gazas(Math.floor(Math.random() * 10 + 1));
        }
        masinos[i].vaziuojam();
    }
    // nustatom, kuris dabar pirmauja
    lyderis = 0;
    for (let i = 1; i < masinos.length; i++) {
        if (masinos[i].asLyderis(masinos[lyderis])) {
            lyderis = i;
        }
    }
    // jei kirto check point'a - pranesam
    if (masinos[lyderis].kelias > checkPoint) {
        console.log("Po " + checkPoint + " km. pirmauja:");
        console.log(masinos[lyderis]);
        checkPoint += 100;
    }
} while (masinos[lyderis].kelias < 1000);

// rusiuojam
for (let i = 0; i < masinos.length - 1; i++) {
    for (let j = i + 1; j < masinos.length; j++) {
        if (
            !masinos[i].asLyderis(masinos[j])
        ) {
            let tmp = masinos[i];
            masinos[i] = masinos[j];
            masinos[j] = tmp;
        }
    }
}
console.log(masinos);
