"use strict";

//Vietoj Class uses Function

function Masina(pavadinimas) {
    this.pavadinimas = pavadinimas;
    this.kelias = 0;
    this.greitis = 0;
    this.gazas = function(kiek) {
        this.greitis += kiek;
    };
    this.stabdis = function(kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        }
    };
    this.vaziuojam = function() {
        this.kelias += this.greitis;
    };
    this.asLyderis = function(kitaMasina) {
        if (this.kelias > kitaMasina.kelias) {
            return true;
        } else if (this.kelias === kitaMasina.kelias && this.greitis > kitaMasina.greitis) {
            return true;
        }
        return false;
    }
}
function SportineMasina() {
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