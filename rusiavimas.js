
let st = [
    [1, 2, 3, 5, 3, -4, 2],
    [4, 5, 6, 10, 11, 12],
    [7, 8, 9, 2, 6, -3, 67],
    [7, 8, 9, -12, 3, -18]
];

//   Atspausdinti kiekvienos eilutes elementu vidurki:
let y;
for (let i = 0; i < st.length; i++) {
    let lineSum = 0;
    for (y = 0; y < st[i].length; y++) {
        lineSum += st[i][y];
    }
//    console.log(lineSum/st[i].length);
}

//   Atspausdinti visu elementu vidurki:
let allSum = 0;
let divide = 0;
for (let i = 0; i < st.length; i++) {
    for (let y = 0; y < st[i].length; y++) {
        allSum += st[i][y];
    }
    divide += y;
}
//console.log(allSum/divide);

// Vienmacio masyvo rikiavimas didejimo/mazejimo tvarka:
let arr = [1, 2, 3, 5, 3, -4, 2];

// Mano unikalus sprendimas:                                           
//for (let i = 0; 1 < arr.length - i; i++)
//    for (let j = 0; 1 < arr.length - j; j++)
for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++)
        if (arr[i] > arr[j]) { // < mazejimo // > didejimo //
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }

for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
}

// Dvimacio masyvo rikiavimas didejimo/mazejimo tvarka:
let mas = [
    [1, 2, 3, 5, 3, -4, 2],
    [4, 5, 6, 10, 11, 12],
    [7, 8, 9, 2, 6, -3, 67],
    [7, 8, 9, -12, 3, -18]
];

for (let y = 0; y < mas.length; y++)
    for (let i = 0; i < arr.length - 1; i++)
        for (let j = i + 1; j < arr.length; j++)    
            if (mas[y][i] < mas[y][j]) { // < mazejimo // > didejimo //
                let tmp = mas[y][i];
                mas[y][i] = mas[y][j];
                mas[y][j] = tmp;
            }        
for (let i = 0; i < mas.length; i++)
    console.log(mas[i]);




    let m = [5, 87, -5, 3, -4, 107];

    /*
        0   1  2   3   4   5
    m: -5, -4, 3,  5,  87, 107
    m.length: 6
    */
    
    for (let i = 0; i < m.length - 1; i++) {
        for (let j = i + 1; j < m.length; j++) {
            if (m[i] > m[j]) {  // > didejimo < mazejimo
                let tmp = m[i];
                m[i] = m[j];
                m[j] = tmp;
            }
        }
    }
    console.log(m);