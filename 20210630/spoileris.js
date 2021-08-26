"use strict";

// Class uses - done

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

const masinos = [
    new Masina("pirma"),
    new SportineMasina("antra"),
    new Masina("trecia"),
    new SportineMasina("ketvirta")
];

let lyderis = 0;
let checkPoint = 100;
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
//console.log(masinos);