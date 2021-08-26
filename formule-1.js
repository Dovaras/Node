//Masinu inicializavimas:
let lenktynininkas = [8];
for (let i = 0; i < lenktynininkas.length; i++)
    lenktynininkas[i] = {
        pavadinimas: "Formule-" + (i + 1),
        gazas: function(kiek) {
            this.greitis += kiek;
        },
        stabdis: function(kiek) {
            this.greitis -= kiek;
            if (this.greitis > 0) // GAL < turi buti
                this.greitis = 0;
        },
        vaziuojam: function() {
            kelias += gretis;
        },
        kelias: 0,
        //laikas: 0 ===> sudetingesniam variantui
    };

//Rato ilgis km:
let ratai;
do {
    ratai = Math.floor(Math.random() * 1000 + 1);
} while (1000 % ratai !== 0);
let ratas = 1000 / ratai;

let tmpRatai = ratai;

function surusiuoti(bolidasSort) {
    // Surusiuoti pagal nuvaziuota atstuma:
    for (let i = 0; i < ibolidasSort.length - 1; i++)
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
/*
function lentele(i, bolidas) {
    console.log("Bolidas:", bolidas[i].pavadinimas,
        "Greitis:", bolidas[i].greitis,
        "Kelias:", bolidas[i].kelias, "Laikas:", bolidas[i].laikas);
}
*/
while (0 < ratai--) {
    let laikas;
    let i;
    for (i = 0; i < lenktyninkas.length; i++) {//Po kiekvieno rato pakeiciu bolidu greicius
        let atsitiktinis = Math.random();
        if (atsitiktinis < 0.2)
            lenktynininkas[i].greitis -= Math.floor(atsitiktinis * 5 + 1);
        else if (atsitiktinis < 0.7)
            lenktynininkas[i].greitis += Math.floor(atsitiktinis * 10 + 1);

        laikas = ratas / lenktynininkas[i].greitis; //Kiek laiko uztruko nuvaziuoti 1 rata
        if (lenktynininkas[i].greitis > 0)
            lenktynininkas[i].laikas += laikas;
        else if (lenktynininkas[i].greitis < 0)
            lenktynininkas[i].laikas = 0; //Math.abs(laikas);

        lenktynininkas[i].kelias += laikas * lenktynininkas[i].greitis; // Kelio ilgis km paraciui//---BE LAIKO
    }
    lenktynininkas = surusiuoti(lenktynininkas);
    //console.log("Lyderis po", tmpRatai - ratai, "rato buvo", lenktynininkas[0].pavadinimas);

    if ((lenktynininkas[0].kelias <= 1000) && (lenktynininkas[0].kelias % 100 === 0))
        console.log("Nuvaziuota ratu: ", tmpRatai - ratai, "\nKelias:", lenktynininkas[0].kelias);
}
/*
for (let i = 0; i < lenktynininkas.length; i++)
    lentele(i, lenktynininkas);
*/

//Planas: pakeiciam greiti; pavaziuojam: kelias += greitis; tikrinam ar kas kirto finiso linija.