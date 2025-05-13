<?php

// passar por valor

function calc($x, $y){
    $x = $x + 2;
    $y = $y + 2;

    return $x + $y;
}
$x = 20;
$y = 10;

echo calc($x, $y);
echo "\n" . $x . " " . $y;

// passar por referencia

popen("cls", "w");



function mudarLista(&$lista_1){

    $lista_1[0] = 666;

}
$lista = [1,2,3,4,5,6];
mudarLista($lista);

echo join(" - ", $lista);

// Loop/lista

popen("cls", "w");

function check(&$listas){

    for ($i=0; $i < count($listas); $i++) { 
        
        if($listas[$i] == 3){
            echo "gay";
        }

    }

}

$list = [0,1,2,3,6,8];

check($list);

// Lista nomes

popen("cls", "w");

function checkNome(&$lista, $nome){

    for ($i=0; $i < count($lista); $i++) { 
        
        if($lista[$i] == $nome){
            return "Nome encontrado!";
        }

    }

}

$listNomes = ["Afonso", "Beatriz", "Carlos", "Daniela", "Eduardo", "Fernanda", "Guilherme", "Isabela", "João", "Luísa", "Ederson"];

echo checkNome($listNomes, readline("Um nome: "));