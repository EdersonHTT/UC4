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

echo // checkNome($listNomes, readline("Um nome: "));

// Lista nomes

popen("cls", "w");

function menor($lista){

    for($i = 0; $i < count($lista); $i++){
        for($p = 0; $p < count($lista); $p++){
            if($lista[$i] < $lista[$p]){

                $troca = $lista[$i];
                $lista[$i] = $lista[$p];
                $lista[$p] = $troca;

            }
        }
    }

    return $lista;
}

function maior($lista){

    for($i = 0; $i < count($lista); $i++){
        for($p = 0; $p < count($lista); $p++){
            if($lista[$i] > $lista[$p]){

                $troca = $lista[$i];
                $lista[$i] = $lista[$p];
                $lista[$p] = $troca;

            }
        }
    }

    return join(" - ", $lista);
}

function encontrar($nu, $lista){
    
    $metade = 0;

    if($nu < $lista[round((count($lista))/2)]){

        $metade = array_splice($lista, 0, (round((count($lista))/2)));

    } else if($nu > $lista[round((count($lista))/2)]){

        $metade = array_splice($lista, (round((count($lista))/2)));

    } else {
        return "Numero encontrado: " . $lista[round((count($lista))/2)];
    }


    for($i = 0; $i < count($metade); $i++){
        if($nu === $metade[$i]){

            return "Numero encontrado: " . $metade[$i];

        }
    }

}

$list = [5, 1, 7, 2, 9, 3, 4, 8, 10];

// echo join(" - ", menor($list)) . "\n";
// echo maior($list) . "\n";
// echo encontrar((int) readline("Um numero: "), menor($list)) . "\n";

// filas

popen("cls", "w");

function tirarDaFila($fila, $filaP) {

    $filas = [$fila, $filaP];
    $count = 0;

    for($i = 0; $i < $filas[$count]; $i++){

        echo join(" - ",$filas[$count]);
        echo"\n";
        array_shift($filas[$count]);

        if(count($filas[$count]) === 0 && $count < count($filas)){
            $count++;
            $i = 0;
        } else if($count === count($filas)){
            return "Fila normal: " . count($filas[0]) . " " . "Fila Prioritaria: " . count($filas[0]);
        }
    }
}

$fila1 = ["João", "Maria", "Pedro", "Bernardo", "Cíntia", "Davi"];
$filaP = ["Ana", "Bruno", "Carlos", "Daniela"];

echo tirarDaFila($fila1, $filaP);

// Pilha

popen("cls", "w");

function voltar(&$pilhaVoltar, &$pilhaAvancar){

    if(count($pilhaAvancar) > 0){

        array_push($pilhaVoltar, $pilhaAvancar[count($pilhaAvancar)-1]);
        array_pop($pilhaAvancar);

    } else {

        popen("cls", "w");
        echo "Nao da para voltar!";
        sleep(2);

    }

}

function avancar(&$pilhaVoltar, &$pilhaAvancar){

    if(count($pilhaVoltar) > 0){

        array_push($pilhaAvancar, $pilhaVoltar[count($pilhaVoltar)-1]);
        array_pop($pilhaVoltar);
    
    } else {

        popen("cls", "w");
        echo "Nao da para avancar!";
        sleep(2);

    }
}

$pilhaVoltar = ["site-1", "site-2", "site-3", "site-4"];
$pilhaAvancar = [];
$continuar = true;


// while($continuar){
//     popen("cls", "w");

//     echo "Voltar: " . join(" - ", $pilhaVoltar);
//     echo "\n";
//     echo "Avancar: " . join(" - ", $pilhaAvancar);

//     echo "\n\n[1] - Voltar\n[2] - Avancar\n[3] - Sair\n\n";
//     //$action = readline("Escolha: ");


//     if($action === "1"){

//         voltar($pilhaVoltar, $pilhaAvancar);
//     } else if($action === "2"){

//         avancar($pilhaVoltar, $pilhaAvancar);
//     } else if($action === "3"){
        
//         $continuar = false;
//         popen("cls", "w");

//     } else {

//         popen("cls", "w");
//         echo "Valor invalido!";
//         sleep(2);

//     }

// }

// Musicas

popen("cls", "w");

$musicas = ["晩餐歌 (Bansanka)", "愛の賞味期限 (Ai no Shōmi Kigen)", "M-30", "Quiero Que Vuelvas", "Con ser tú (Acústico)"];
$trocando = true;
$index = 0;

while($trocando){
    popen("cls", "w");

    echo "Tocando: " . $musicas[$index];
    echo "\n\n[1] - Trocar\n[2] - Voltar\n[3] - Sair\n\n";
    $resposta = readline("Escolha: ");

    if($resposta === "1"){

        if($index < count($musicas)-1){

            $index++;
        } else {

            $index = 0;
        }
    } else if($resposta === "2"){

        if($index > 0){

            $index--;
        } else {

            $index = count($musicas)-1;
        }
    } else if($resposta === "3"){
        
        $trocando = false;
        popen("cls", "w");

    } else {

        popen("cls", "w");
        echo "Valor invalido!";
        sleep(2);

    }
}