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

// function conversor($moeOri, $moeDes, $valor){
//     popen("cls", "w");
//     if ($moeOri === "usd" && $moeDes === "brl"){
//         return "USD -> BRL: " . ($valor * 5.15);
//     } else if ($moeOri === "eur" && $moeDes === "brl"){
//         return "EUR -> BRL: " . ($valor * 5.60);
//     } else if ($moeOri === "usd" && $moeDes === "eur"){
//         return "USD -> EUR: " . ($valor * 1.45);
//     } 
//     return "Erro no convertor!";
// }

// echo "Escolha o que converter:\n\nUSD -> BRL\nEUR -> BRL\nUSD -> EUR\n\n";
// echo conversor(strtolower(readline("Escreva a moeda que ira converter: ")), strtolower(readline("Escreva a moeda de destino: ")), (float) readline("Escreva a moeda que ira converter: "));

//////////////////////////////////////////////////////////////////////////////

// function calculoFreteNormal($km){
//     return $km * 0.50;
// }

// function calculoFreteExpresso($km){
//     if($km > 100){
//         return $km * 1; 
//     } else {
//         return $km * 0.75;
//     }
// }

// function calculoFreteSuper($km){
//     if($km > 100){
//         return $km * 2; 
//     } else {
//         return $km * 1;
//     }
// }

// function calculoFreteHiper($km){
//     if($km > 100){
//         return $km * 5; 
//     } else {
//         return $km * 2;
//     }
// }

// $km = (float)readline("Km: ");
// $tipoEntrega = strtolower(readline("Qual O tipo de entrega: "));

// if($tipoEntrega === "normal"){
//     echo "Frete: " . calculoFreteNormal($km);
// } else if ($tipoEntrega === "expresso"){
//     echo "Frete: " . calculoFreteExpresso($km);
// } else if ($tipoEntrega === "super"){
//     echo "Frete: " . calculoFreteSuper($km);
// } else if ($tipoEntrega === "hiper"){
//     echo "Frete: " . calculoFreteHiper($km);
// } else {
//     echo "Tipo invalido!";
// }

/////////////////////////////////////////////////////////////////////

// function subtrair($nu1, $nu2){
//     return $nu1 - $nu2;
// }

// function somar($nu1, $nu2){
//     return $nu1 + $nu2;
// }

// function multiplicar($nu1, $nu2){
//     return $nu1 * $nu2;
// }

// function dividir($nu1, $nu2){
//     return $nu1 / $nu2;
// }

// $nu1 = (int)readline("Um numero");
// $nu2 = (int)readline("Um numero");

// switch(strtolower(readline("Qual qualculo: "))){
//     case "subitrair":
//         echo subtrair($nu1, $nu2);
//     break;
//     case "somar":
//         echo somar($nu1, $nu2);
//     break;
//     case "multiplicar":
//         echo multiplicar($nu1, $nu2);
//     break;
//     case "dividir":
//         echo dividir($nu1, $nu2);
//     break;
// }

///////////////////////////////////////////////////////

// function desconto($valor, $desc){
//     return $valor - (($valor * $desc)/100);
// }

// if(true) echo desconto(readline("valor: "), readline("desconto em %: "));

//////////////////////////////////////////////////////////

// function potencia($x, $y){
//     return pow($x, $y);
// }

// function quadrado($x){
//     return sqrt($x);
// }

// $numero = (int) readline("Um numero: ");
// $expo = (int) readline("O expoente: ");

// $potencia = potencia($numero, $expo);

// echo("A potencia de ". $numero . " por " . $expo . " é $potencia e sua raiz é " . quadrado($potencia));

/////////////////////////////////////////

// function calcIdade($idade){
//     return [($idade/2)+7, 2*($idade - 7)];
// }

// $idades = calcIdade((int) readline("idade: "));
// echo "Idade maxima é " . $idades[1] . "\nE a minima: " . $idades[0];

///////////////////////////////////////////

// function calcArea($a){
//     return $a * $a;
// }

// function valorArea($te, $local){
//     if($local === "centro"){
//         return $te * 14;
//     }
//     return $te * 7;
// }

// $terreno = calcArea((int)readline("Lado: "));
// $valor = valorArea($terreno, readline("Localidade: "));

// echo "Area: $terreno\nValor Terreno: $valor";