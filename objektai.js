"use strict";

let puodukas = {
    turis: 300,
    kiekis: 200,
    spalva: "rudas"
};

console.log(puodukas);

puodukas.turis -= 50;
console.log(puodukas.turis);

let taspatspuodukas = puodukas;
taspatspuodukas = {
    turis: 250,
    kiekis: 200,
    spalva: "rudas"
};
console.log(puodukas);
console.log(taspatspuodukas);

if (puodukas === taspatspuodukas) {
    console.log("tas pats objektas");
} else console.log("kitas objektas");

console.log(puodukas.gerimas);
puodukas.gerimas = "kava";
console.log(puodukas.gerimas);

const puodukass = {}; // puodukass reiksme yra adresas i kintamuosius.
puodukass.turis = 300;
puodukass.kiekis = 250;
puodukass.spalva = "rudas";
puodukass.gerimas = "kava";

delete puodukass.spalva;
puodukass["kiekis"] = 20; // puodukass.kiekis = 20;
console.log(puodukass);
let savybe = "turis";
console.log(puodukass[savybe]);


let zmogus = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    adresas: {
        miestas: "Vilnius"
    }
};
let s = "pavarde";
console.log(zmogus[s]);