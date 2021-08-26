"use strict";

function Puodukas (spalva, maxTuris) {
    this.spalva = spalva;
    this.kiekis = 0;
    this.maxTuris = maxTuris;
}

Puodukas.prototype.ipilk = function (kiek) {
    if (kiek <= 0) {
        console.log("Ar zinai, ka darai?");
        return;
    }
    this.kiekis += kiek;
    if (this.kiekis > this.maxTuris) {
        console.log("Ant kelniu issipyle " + (this.kiekis - this.maxTuris));
        this.kiekis = this.maxTuris;
    } else {
        console.log("Sekmingai ipylem " + kiek + ". Liko laisvos vietos: " + (this.maxTuris - this.kiekis));
    }
}

Puodukas.prototype.isgerk = function (kiek) {
    if (kiek < 0) {
        console.log("Nespjaudyk i puoduka");
        return;
    }
    if (kiek === 0) {
        console.log("Tai gersim, ar akis vartysim?");
        return;
    }
    this.kiekis -= kiek;
    if (this.kiekis < 0) {
        console.log("Isgerem tik " + (this.kiekis + kiek));
        this.kiekis = 0;
    } else {
        console.log("Sekmingai isgerem " + kiek + ". Liko gerimo: " + this.kiekis);
    }
}

function Termosas(spalva, maxTuris) {
    Puodukas.apply(this, arguments);
    this.temp = 20;
}

Termosas.prototype = Object.create(Puodukas.prototype);
Termosas.prototype.constructor = Termosas;

Termosas.prototype.pasildyk = function(kiek) {
    this.temp += kiek;
}

Termosas.prototype.atvesink = function(kiek) {
    this.temp -= kiek;
}


const t1 = new Termosas("Zalias", 1000);

t1.ipilk(500);
t1.pasildyk(50);
console.log(t1);

