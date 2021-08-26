/*
Parasyti funkcija labas(vardas, pavarde)
jei paduotas ir vardas ir pavarde - spausdina: labas vardas pavarde
jei paduotas tik vardas - spausdina: labas vardas
jei nieko nepaduota - spausdina: labas nezinomas zmogau
*/

function labas(vardas, pavarde) {
    if (typeof vardas !== 'undefined' && typeof pavarde != 'undefined')
        console.log("labas", " ", vardas, " ", pavarde);
    else if (typeof vardas != 'undefined')
        console.log("labas", " ", vardas);
        else console.log("labas nezinomas zmogau");
}
labas();