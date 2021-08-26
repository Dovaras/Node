// var pretekstas "hoistingui"
console.log("pradzia");
 
{
    let sk = 3;
    console.log("komanda bloke", sk);
    {
        let sk = 2;
        let kitas = 5;
        console.log("komanda vidiniam bloke");
        sk = sk * kitas;
        console.log("komanda 2 vidiniam bloke", sk, kitas);
    }
    console.log(sk);
    sk = 17;
    console.log("kita komanda bloke", sk);
}
// Shadowing: let sk = 3; { let sk = 2; }
// Skoupas:  { } kurlibraketai. 
// Ciklai turi savo skoupa, net be kurlibraketu (yra tik viena komanda)...

// komanda bloke 3
// komanda vidiniam bloke
// komanda 2 vidiniam bloke 10 5
// 3
// kita komanda bloke 17