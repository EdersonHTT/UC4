<?php

///////////////////////// Lista

$cores = [];

$cores[] = "yellow";
$cores[] = "red";
$cores[] = "black";

array_push($cores, "blue");
array_push($cores, "green");

array_pop($cores);
array_shift($cores);

array_unshift($cores,"purple");

array_splice($cores, 2, 0, "white");

foreach($cores as $k => $i){
    echo "$k => $i\n";
}

/////////////////////////////// Fila -> First in First out (FIFO)

popen("cls", "w");

$lista = [];

$lista[] = 0;
$lista[] = 1;
$lista[] = 2;
$lista[] = 3;

array_shift($lista);

foreach($lista as $i => $v){
    echo "$i => $v\n";
}

/////////////////////////////////////////// Pilha -> Last in First out (LIFO)

popen("cls", "w");

$pilha = [];

$pilha[] = 0;
$pilha[] = 1;
$pilha[] = 2;
$pilha[] = 3;

array_pop($pilha);

foreach($pilha as $i => $v){
    echo "$i => $v\n";
}