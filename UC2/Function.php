<?php

// function fufu ($a, $b) {
//     return $a + $b;
// }

// echo "A soma é: ".fufu(intval(readline("Numero: ")),intval(readline("Numero: ")));

/////////////////////////////////////////////////////


// function maiorzinho ($x, $y){
//     if($x > $y){
//         popen("cls", "w");
//         return $x;
//     } else {
//         popen("cls", "w");
//         return $y;
//     }
// }

// echo "O maior é: ". maiorzinho(intval(readline("Numero: ")),intval(readline("Numero: ")));

/////////////////////////////////////////////////////

// function negaPosiZero ($x){
//     if($x > 0){
//         popen("cls", "w");
//         return "positivo";
//     } else if($x === 0){
//         popen("cls", "w");
//         return "zero";
//     } else {
//         popen("cls", "w");
//         return "negativo";
//     }
// }

// echo "O numero é: ". negaPosiZero(intval(readline("Numero: ")));

/////////////////////////////////////////////////////////////

function vog ($vo){
    if(preg_match('/[a|e|i|o|u]/', $vo)){
        return "vogal: sim";
    } else {
        return "vogal: no";
    }
}

echo vog(readline("Uma letra: "));