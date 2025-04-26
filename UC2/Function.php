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

// function vog ($vo){
//     if(preg_match('/[a|e|i|o|u]/', $vo)){
//         return "vogal: sim";
//     } else {
//         return "vogal: no";
//     }
// }

// echo vog(readline("Uma letra: "));

/////////////////////////////////////////////////////////////////

// function check($idade, $ensino){
//     if($idade >= 18){
//         if(strpos($ensino, "s") !== false){
//             return true;
//         }
//     }
//     return false;
// }

// if(check(readline("idade: "), readline("Tem ensino medio completo: "))){
//     echo "Pode votar!";
// } else {
//     echo "Não pode votar!";
// }

//////////////////////////////////////////////////////////////////////////////

// function calculoFrete($dis){
//     if($dis === 0.50){
//         return $dis * 0.50;
//     } else if ($dis >= 0.75){
//         return $dis * 1;
//     } else {
//         return "Erro ao calcular o frete";
//     }
// }

// echo "frete: " . calculoFrete((float) readline("bote a distancia em km: "));

////////////////////////////////////////////////////////////////////////

function conversor($moeOri, $moeDes, $valor){
    popen("cls", "w");
    if ($moeOri === "usd" && $moeDes === "brl"){
        return "USD -> BRL: " . ($valor * 5.15);
    } else if ($moeOri === "eur" && $moeDes === "brl"){
        return "EUR -> BRL: " . ($valor * 5.60);
    } else if ($moeOri === "usd" && $moeDes === "eur"){
        return "USD -> EUR: " . ($valor * 1.45);
    } 
    return "Erro no convertor!";
}

echo "Escolha o que converter:\n\nUSD -> BRL\nEUR -> BRL\nUSD -> EUR\n\n";
echo conversor(strtolower(readline("Escreva a moeda que ira converter: ")), strtolower(readline("Escreva a moeda de destino: ")), (float) readline("Escreva a moeda que ira converter: "));