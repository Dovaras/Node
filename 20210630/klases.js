"use strict";

// Class uses - undone

class Puodukas {

    constructor (spalva, maxTuris) {
        this.spalva = spalva;
        this.kiekis = 0;
        this.maxTuris = maxTuris;
    }

    ipilk(kiek) {
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

    isgerk(kiek) {
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
}

class Sikpuodis extends Puodukas {
    constructor(spalva, maxTuris) {
        super(spalva, maxTuris);
    }

    isgerk(kiek) {
        console.log("FUJ - sudo negeriu!");
    }
}

class Termosas extends Puodukas {

    constructor(spalva, maxTuris) {
        super(spalva, maxTuris);
        this.temp = 20;
    }

    pasildyk(kiek) {
        this.temp += kiek;
    }

    atvesink(kiek) {
        this.temp -= kiek;
    }

    ipilk(kiek) {
        console.log("pilam i termosa");
        super.ipilk(kiek);
        // if (kiek <= 0) {
        //     console.log("Ar zinai, ka darai?");
        //     return;
        // }
        // this.kiekis += kiek;
        // if (this.kiekis > this.maxTuris) {
        //     console.log("Ant kelniu issipyle " + (this.kiekis - this.maxTuris));
        //     this.kiekis = this.maxTuris;
        // } else {
        //     console.log("Sekmingai ipylem " + kiek + ". Liko laisvos vietos: " + (this.maxTuris - this.kiekis));
        // }
        this.temp -= 5;
    }
}



let p = new Puodukas("Baltas", 150);
let t = new Termosas("Zalias", 1000);
let s = new Sikpuodis("Melynas", 1000);

// t.ipilk(555);
// console.log(t);
// t.isgerk(200);
// console.log(t);

// p.ipilk(50);
// console.log(p);

// let o = t;
let o = s;

// o = {
//     spalva: "juodas",
//     kiekis: 20,
//     maxTuris: 500
// };

// let o = new Object();
// o.spalva = "juodas";
// o.kiekis = 20;
// o.maxTuris = 500;

// let o = Object.create(null);



















if (o instanceof Puodukas) {
    o.ipilk(12);
    if (o instanceof Termosas) {
        o.pasildyk(23);
    }
    o.isgerk(10);
}

console.log(o);

if (o instanceof Object) {
    console.log("tai objektas");
}



// class Termosas extends Puodukas {
//     constructor () {                    //paskaitineti:
//         super(spalva, maxTuris);        //identiska
//         super(...arguments);            //identiska
//         Puodukas.apply(this, arguments);//identiska
//         Puodukas.call;                  //identiska
//         this.temp = 20;
//     }
//     atvesink(kiek) {
//         this.temp -= kiek;
//     }
//     pasildyk(kiek) {
//         this.temp += kiek;
//     }
// }

// if (o instanceof Termosas)
//      o.ipilk(12);