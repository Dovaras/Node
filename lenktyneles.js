//Masinu inicializavimas:
let lenktynininkas = [8];
for (let i = 0; i < 8; i++) {
    lenktynininkas[i] = {
        pavadinimas: "Formule-" + (i + 1),
        kelias: 0,
        greitis: 0
    }
};

function surusiuoti(bolidasSort) {
    // Surusiuoti pagal nuvaziuota atstuma:
    for (let i = 0; i < bolidasSort.length - 1; i++)
        if (bolidasSort[i].kelias < bolidasSort[i + 1].kelias) {
            let tmp = bolidasSort[i];
            bolidasSort[i] = bolidasSort[i + 1];
            bolidasSort[i + 1] = tmp;
        }// Jei nuvaziuotas atstumas sutampa:
        else if (bolidasSort[i].kelias === bolidasSort[i + 1].kelias)
            if (bolidasSort[i].greitis < bolidasSort[i + 1].greitis) {
                let tmp = bolidasSort[i];
                bolidasSort[i] = bolidasSort[i + 1];
                bolidasSort[i + 1] = tmp;
            }
    return bolidasSort;
}
// Cia visom rungtynem ratas ir ratai inicijuojami, o kinta tik kiekvienam rate greitis ir nuvaziuotas kelias
let ratai;
let ratas;
//Ratu skaicius ir vieno rato ilgis km:
do {
    ratai = Math.floor(Math.random() * 1000 + 1);
    ratas = Math.floor(1000 / ratai);
} while (1000 % ratai !== 0 && ratas * ratai % 100 !== 0);
console.log("Ratai:", ratai, "Ratas:", ratas);

for (let r = 1; r <= ratai; r++) {// Ciklo iteratoriaus problema...
    for (let i = 0; i < lenktynininkas.length; i++) {//Po kiekvieno rato pakeiciu bolidu greicius
        let atsitiktinis = Math.random();
        if (atsitiktinis < 0.2) {
            lenktynininkas[i].greitis -= Math.floor(atsitiktinis * 5 + 1);
            lenktynininkas[i].kelias -= lenktynininkas[i].greitis;
        }
        else if (atsitiktinis < 0.7) {
            lenktynininkas[i].greitis += Math.floor(atsitiktinis * 10 + 1);
            lenktynininkas[i].kelias += lenktynininkas[i].greitis;
        }
    }

    // Truksta kodo kazkokio... //Ar kirto finiso linija?

    lenktynininkas = surusiuoti(lenktynininkas);
    console.log("Lyderis", lenktynininkas[0].pavadinimas);

    //if ((ratas * r) % 100 === 0) {

    for (let x = 0; x <= 10; x++) {
        for (let i = 0; i < 8; i++) {
            if (lenktynininkas[i].kelias === 100 * i) {
                console.log(lenktynininkas[i]);
            }
        }
    }
}