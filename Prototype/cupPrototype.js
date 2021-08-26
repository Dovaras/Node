/*
sukurti puoduko konstruktoriu
 
kiekvienas puodukas turi tureti spalva, kieki ir max turi
 
puodukai turi moketi:
isgerti(kiek) - negalima isgerti daugiau negu yra puoduke
ipilti(kiek) - negalima, kad puoduke butu daugiau negu telpa
 
sukurti kelis puodukus
ir ipilti, isgerti ir paziureti, kaip tai veikia
*/
spalvos = ["balta","juoda","raudona","geltona","melyna"];

function Puodukas(kiekis) { // KONSTRUKTORIUS
    this.kiekis = kiekis;
    this.maxTuris = Math.floor(Math.random() * 10 + 1);
    this.spalva = spalvos[Math.floor(Math.random() * 5)];
};
Puodukas.prototype.isgerti = function (kiek) {
    this.kiekis -= kiek;
    if (this.kiekis < 0) {
        console.log("Puodukas tuscias!");
        this.kiekis = 0;
    } else console.log("Puodukas geriamas!");
};   
Puodukas.prototype.ipilti = function (kiek) {
    this.kiekis += kiek;
    if (this.kiekis > this.maxTuris) {
        console.log("Puodukas perpiltas!");
        this.kiekis = this.maxTuris;
    } else console.log("Puodukas geriamas!");
};

//console.log(Puodukas.prototype);
let puodukai = [2]; console.log(puodukai.length);
for (let i = 0; i < 3; i++) {
    puodukai[i] = new Puodukas(Math.floor(Math.random() * 15 + 1));
    puodukai[i].ipilti(Math.floor(Math.random() * 15 + 1));
    puodukai[i].isgerti(Math.floor(Math.random() * 15 + 1));
    console.log(puodukai);
}
/*
Puoduka papildyti i Termosa:
Termosas.prototype.pasildyk = funktion(kiek) {...}
Termosas.prototype.atvesink = funktion(kiek) {...}








let puodukas2 = new Puodukas(Math.floor(Math.random() * 15 + 1));
puodukas2.ipilti(Math.floor(Math.random() * 15 + 1));
puodukas2.isgerti(Math.floor(Math.random() * 15 + 1));
console.log(puodukas2);

/*
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
 
const puodukas1 = new Puodukas("Rudas", 300);
const puodukas2 = new Puodukas("Baltas", 200);
 
puodukas1.ipilk(250);
puodukas1.ipilk(250);
puodukas1.ipilk(-10);
puodukas1.isgerk(-10);
puodukas1.isgerk(0);
puodukas1.isgerk(100);
puodukas1.isgerk(555);
puodukas1.isgerk(100);















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
*/