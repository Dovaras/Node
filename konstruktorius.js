const masinos = [
    {
        pavadinimas: "pirma",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "antra",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "trecia",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "kevirta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "penkta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "sesta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "septinta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "astunta",
        kelias: 0,
        greitis: 0
    }
];

let lenktyniaujam = true;
let checkPoint = 100;
do {
    // keiciam greiti
    for (let i = 0; i < masinos.length; i++) {
        let keiciamGreiti = Math.random();
        if (keiciamGreiti < 0.2) {
            masinos[i].greitis -= Math.floor(Math.random() * 5 + 1);
            if (masinos[i].greitis < 0) {
                masinos[i].greitis = 0;
            }
        } else if (keiciamGreiti < 0.7) {
            masinos[i].greitis += Math.floor(Math.random() * 10 + 1);
        }
    }
    // vaziuojam
    for (let i = 0; i < masinos.length; i++) {
        masinos[i].kelias += masinos[i].greitis;
    }
    // nustatom, kuris dabar pirmauja
    let lyderis = 0;
    for (let i = 1; i < masinos.length; i++) {
        if (
            (masinos[i].kelias > masinos[lyderis].kelias) ||
            (masinos[i].kelias === masinos[lyderis].kelias &&
                masinos[i].greitis > masinos[lyderis].greitis)
        ) {
            lyderis = i;
        }
    }
    // jei kirto check point'a - pranesam
    if (masinos[lyderis].kelias > checkPoint) {
        console.log("Po " + checkPoint + " km. pirmauja:");
        console.log(masinos[lyderis]);
        checkPoint += 100;
    }
    // tikrinam ar kas kirto finiso linija
    for (let i = 0; i < masinos.length; i++) {
        if (masinos[i].kelias >= 1000) {
            lenktyniaujam = false;
        }
    }
} while (lenktyniaujam);

// rusiuojam
for (let i = 0; i < masinos.length - 1; i++) {
    for (let j = i + 1; j < masinos.length; j++) {
        if (
            (masinos[i].kelias < masinos[j].kelias) ||
            (masinos[i].kelias === masinos[j].kelias &&
                masinos[i].greitis < masinos[j].greitis)
        ) {
            let tmp = masinos[i];
            masinos[i] = masinos[j];
            masinos[j] = tmp;
        }
    }
}
console.log(masinos);


// Pakoreguotas kodas:

const masinos = [
    {
        pavadinimas: "pirma",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "antra",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "trecia",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "kevirta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "penkta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "sesta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "septinta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "astunta",
        kelias: 0,
        greitis: 0
    }
];

let checkPoint = 100;
let lyderis;
do {
    // keiciam greiti ir vaziuojam
    for (let i = 0; i < masinos.length; i++) {
        let keiciamGreiti = Math.random();
        if (keiciamGreiti < 0.2) {
            masinos[i].greitis -= Math.floor(Math.random() * 5 + 1);
            if (masinos[i].greitis < 0) {
                masinos[i].greitis = 0;
            }
        } else if (keiciamGreiti < 0.7) {
            masinos[i].greitis += Math.floor(Math.random() * 10 + 1);
        }
        masinos[i].kelias += masinos[i].greitis;
    }
    // nustatom, kuris dabar pirmauja
    lyderis = 0;
    for (let i = 1; i < masinos.length; i++) {
        if (
            (masinos[i].kelias > masinos[lyderis].kelias) ||
            (masinos[i].kelias === masinos[lyderis].kelias &&
                masinos[i].greitis > masinos[lyderis].greitis)
        ) {
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
            (masinos[i].kelias < masinos[j].kelias) ||
            (masinos[i].kelias === masinos[j].kelias &&
                masinos[i].greitis < masinos[j].greitis)
        ) {
            let tmp = masinos[i];
            masinos[i] = masinos[j];
            masinos[j] = tmp;
        }
    }
}
console.log(masinos);


// Pakoreguotas kodas:

"use strict";

let masina1 = {
    pavadinimas: "pirma",
    kelias: 0,
    greitis: 0,
    gazas: function (kiek) {
        this.greitis += kiek;
    },
    stabdis: function (kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        }
    }
};

let masina2 = {
    pavadinimas: "antra",
    kelias: 0,
    greitis: 0,
    gazas: function (kiek) {
        this.greitis += kiek;
    },
    stabdis: function (kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        }
    }
};

console.log(masina1);
console.log(masina2);

masina1.gazas(15);
masina2.gazas(3);

console.log(masina1);
console.log(masina2);


// Masinos kodas:



"use strict";

function Masina(pavadinimas) {
    this.pavadinimas = pavadinimas; // this grazina i masina1 per viena taska kairen pusen.
    this.kelias = 0;
    this.greitis = 0;
    this.gazas = function (kiek) {
        this.greitis += kiek;
    };
    this.stabdis = function (kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        }
    };
}

let masina1 = new Masina("pirma");
let masina2 = new Masina("antra");

console.log(masina1);
console.log(masina2);

masina1.gazas(15);
masina2.gazas(3);

console.log(masina1);
console.log(masina2);


// kitas variantas

function Masina(pavadinimas) {
    this.pavadinimas = pavadinimas;
    this.kelias = 0;
    this.greitis = 0;
    this.gazas = function (kiek) {
        this.greitis += kiek;
    };
    this.stabdis = function (kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        }
    };
    this.vaziuojam = function () {
        this.kelias += this.greitis;
    };
    this.asLyderis = function (kitaMasina) {
        if (this.kelias > kitaMasina.kelias) {
            return true;
        } else if (this.kelias === kitaMasina.kelias && this.greitis > kitaMasina.greitis) {
            return true;
        }
        return false;
    }
}

const masinos = [
    new Masina("pirma"),
    new Masina("antra"),
    new Masina("trecia"),
    new Masina("kevirta"),
    new Masina("penkta"),
    new Masina("sesta"),
    new Masina("septinta"),
    new Masina("astunta")
];

let checkPoint = 100;
let lyderis;
do {
    // keiciam greiti ir vaziuojam
    for (let i = 0; i < masinos.length; i++) {
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



// --proto--: rodo i masinos prototype (funkcijas - funkcionalumus, o ne i savybes)
// Prototype:



function Masina(pavadinimas) {
    this.pavadinimas = pavadinimas;
    this.kelias = 0;
    this.greitis = 0;
}
Masina.prototype.gazas = function (kiek) {
    this.greitis += kiek;
};
Masina.prototype.stabdis = function (kiek) {
    this.greitis -= kiek;
    if (this.greitis < 0) {
        this.greitis = 0;
    }
};
console.log(Masina.prototype);

let masina1 = new Masina("pirma");
let masina2 = new Masina("antra");

console.log(masina1);
console.log(masina2);

masina1.gazas(15);
masina2.gazas(3);

console.log(masina1);
console.log(masina2);




/*
sukurti puoduko konstruktoriu
 
kiekvienas puodukas turi tureti spalva, kieki ir max turi
 
puodukai turi moketi:
isgerti(kiek) - negalima isgerti daugiau negu yra puoduke
ipilti(kiek) - negalima, kad puoduke butu daugiau negu telpa
 
sukurti kelis puodukus
ir ipilti, isgerti ir paziureti, kaip tai veikia
*/