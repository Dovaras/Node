//Masinu inicializavimas:
let lenktynininkas = [8];
for (let i = 0; i < 8; i++)
    lenktynininkas[i] = {
        pavadinimas: "masina-" + (i + 1),
        greitis: 0,
        kelias: 0,
        laikas: 0
    }

//Rato ilgis km:
let ratas;
let ratai;
do {
    ratai = Math.floor(Math.random() * 1000 + 1);
} while (1000 % ratai !== 0);
ratas = 1000 / ratai;

//visos masinos pavaziuoja: per tiek, koks yra jos greitis:
let nuvaziuotaViso = 0;
while (nuvaziuotaViso < 1000) {
    let nuvaziuotaRatoKM = 0;
    while (ratai > 0) { 
        for (let i = 0; i < 8; i++) { 
            let atsitiktinis = Math.random();
            if (atsitiktinis < 0.2)
                lenktynininkas[i].greitis -= Math.floor(atsitiktinis * 5 + 1);
            else if (atsitiktinis < 0.7)
                lenktynininkas[i].greitis += Math.floor(atsitiktinis * 10 + 1);
            
            lenktynininkas[i].laikas = Math.floor(ratas / lenktynininkas[i].greitis);
            lenktynininkas[i].kelias = lenktynininkas[i].laikas * lenktynininkas[i].greitis;

            //console.log(Math.floor(ratas / lenktynininkas[i].greitis));
        }
        for (let i = 0; i < 7; i++)
            if (lenktynininkas[i].kelias < lenktynininkas[i + 1].kelias) {
                let tmp = lenktynininkas[i];
                lenktynininkas[i] = lenktynininkas[i + 1]
                lenktynininkas[i + 1]= tmp;
            }
        nuvaziuotaRatoKM += lenktynininkas[0].kelias; 
        if (nuvaziuotaRatoKM >= ratas)            
            ratai--;
    }        
    nuvaziuotaViso += nuvaziuotaRatoKM;
}

//for (let i = 0; i < 8; i++)
//   console.log(lenktynininkas[i]);


    /*
yra 8 masinos su savybemis:

pavadinimas
greitis: 0
kelias: 0

masinos lenktyniauja (ciklas)

kiekvienos iteracijos metu:
visos masinos gali pakeisti savo greiti
    random skaicius
    jei random < 0.2 - masina stabdo (t.y. mazeja masinos greitis 1..5 (random))
    jei random < 0.7 - masina gazuoja (t.y. dideja masinos greitis 1..10 (random))
    priesingu atveju masinos greitis nesikeicia
visos masinos pavaziuoja: per tiek, koks yra jos greitis

lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km

reikia surusiuoti masinas pagal nuvaziuota kelia,
jei dvieju masinu kelias vienodas - pirmesne yra ta, kurios didesnis greitis

atspausdinti turnyrine lentele

* kas 100 km spausdinti lyderi


/*
let atsitiktinis = Math.random();
console.log(Math.floor(atsitiktinis * 5 + 1));



yra 8 masinos
 
pavadinimas
greitis: 0
kelias: 0
 
masinos lenktyniauja (ciklas)
 
kiekvienos iteracijos metu:
visos masinos gali pakeisti savo greiti
 random skaicius
 jei random < 0.2 - masina stabdo (t.y. mazeja masinos greitis 1..5 (random))
 jei random < 0.7 - masina gazuoja (t.y. dideja masinos greitis 1..10 (random))
 priesingu atveju masinos greitis nesikeicia
visos masinos pavaziuoja: per tiek, koks yra jos greitis
 
lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km
 
reikia surusiuoti masinas pagal nuvaziuota kelia,
 jei dvieju masinu kelias vienodas - pirmesne yra tu, kurios didesnis greitis
 
atspausdinti turnyrine lentele
 
*) kas 100 km spausdinti lyderi
*/