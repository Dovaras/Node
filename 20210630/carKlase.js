// Mano sprendimo budas

class lenktynininkas {
    constructor(pavadinimas) {
        this.pavadinimas = pavadinimas;
        this.kelias = 0;
        this.greitis = 0;
    }
}
/* ISTESTUOTI
arr.sort((e1, e2) => {
    console.log("Lyginam", e1, e2);
    return e1 - e2; // didejimo tvarka?
}); console.log(arr);

arba
arr.sort((e1, e2) => e2.length - e1.length);
*/
function surusiuoti(bolidas) {
    // Surusiuoti pagal nuvaziuota atstuma:
    for (let i = 0; i < bolidas.length - 1; i++)
        if (bolidas[i].kelias < bolidas[i + 1].kelias) {
            let tmp = bolidas[i];
            bolidas[i] = bolidas[i + 1];
            bolidas[i + 1] = tmp;
        }// Jei nuvaziuotas atstumas sutampa:
        else if (bolidas[i].kelias === bolidas[i + 1].kelias)
            if (bolidas[i].greitis < bolidas[i + 1].greitis) {
                let tmp = bolidas[i];
                bolidas[i] = bolidas[i + 1];
                bolidas[i + 1] = tmp;
            }
    return bolidas;
}

let lenkt = [8];
for (let i = 0; i < 8; i++) {
    lenkt[i] = new lenktynininkas("Formule-" + (i + 1));
}

let ratai;
do {
    ratai = Math.floor(Math.random() * 1000 + 1);
} while (1000 % ratai !== 0);
let ratas = 1000 / ratai;

let kelias = 0;
let y = 0;
let x = 1;
let laimejo = true;
for (let r = 1; r <= ratai; r++) {
    if (laimejo) {
        for (y = 0; y < lenkt.length; y++) {//Po kiekvieno rato pakeiciu bolidu greicius
            let atsitiktinis = Math.random();
            if (atsitiktinis < 0.2) {
                lenkt[y].greitis -= Math.floor(atsitiktinis * 5 + 1);
                lenkt[y].kelias -= lenkt[y].greitis;
            }
            else if (atsitiktinis < 0.7) {
                lenkt[y].greitis += Math.floor(atsitiktinis * 10 + 1);
                lenkt[y].kelias += lenkt[y].greitis;
            }
            lenkt = surusiuoti(lenkt);
        }
// Ties kiekvienu ratu patikrinamas ar nenuvaziuotas tikrasis 100km
        if ((lenkt[0].kelias >= ratas * r) && (lenkt[0].kelias - 100 * x >= 0)) {
            x++;
            console.log(lenkt[0]);

            if (lenkt[0].kelias >= 1000 && laimejo) {
                console.log("Laimejo:");
                console.log("Lyderis", lenkt[0].pavadinimas, "Atstumas:", lenkt[0].kelias);
                laimejo = false;
            }
        }
    }
}