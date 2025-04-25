<?php

// $senha = readline("De uma senha: ");

// if(strlen($senha) >= 8){
//     if(preg_match('/[A-Z]/', $senha)){
//         if(preg_match('/[A-Z]/', $senha)){
//             popen("cls", "w");
//             echo "Senha está ótima";
//             sleep(3);
//             popen("cls","w");
//             sleep(3);
//         }else {
//             echo "senha falta numeros";
//         };
//     } else {
//         echo "senha falta letras maiusculas";
//     };
// } else {
//     echo "senha muito pequena";
// };

/////////////////////////////////////////////////////////////

// popen("cls","w");
// $input = readline("Digite seu nome para logar: ");

// sleep(2);

// for($i = 0; $i < 10; $i++){

// }
// popen("cls","w");
// if($input === "Ederson"){
//     echo "logado";
// } else {
//     echo "Nome Errado!";
// }

//////////////////////////////////////////////

// popen("cls","w");
// $input = readline("Uma nota: ");

// sleep(2);

// $carregando = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
// popen("cls","w");

// for($i = 0; $i < 10; $i++){
//     $carregando[$i] = 'I';
//     echo "[";
//     foreach($carregando as $v){
//         echo $v;
//     }
//     echo "]"; 
//     sleep(1);
//     popen("cls", "w");
// }
// sleep(2);

// popen("cls","w");
// if($input >= 6){
//     echo "aprovado";
// } else {
//     echo "reprovado";
// }

///////////////////////////////////////////////

// $lados = [];

// for($i = 0; $i <= 2; $i++){
//     $lados[] = readline("lados: ");
// }

// if($lados[0] === $lados[1] && $lados[1] === $lados[2]){
//     echo "equilatero";
    
// } else if($lados[0] !== $lados[1] && $lados[1] === $lados[2] || $lados[0] === $lados[1] && $lados[1] !== $lados[2] || $lados[0] !== $lados[1] && $lados[1] !== $lados[2] && $lados[0] === $lados[2]) {
//     popen("cls", "w");
//     echo "isoceles";
// } else if($lados[0] !== $lados[1] && $lados[1] !== $lados[2] && $lados[0] !== $lados[2]) {
//     echo "escaleno";
// }

/////////////////////////////////////////////////////

$usuario = readline("Usuario: ");
$senha = readline("Senha: ");

$carregando = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
popen("cls","w");

for($i = 0; $i < 10; $i++){
    $carregando[$i] = 'I';
    echo "[";
    foreach($carregando as $v){
        echo $v;
    }
    echo "]"; 
    sleep(1);
    popen("cls", "w");
}

if($usuario === "admin" && $senha === "admin123"){
    popen("cls", "w");
    echo "Usuario Admin";
} else if($usuario === "editor" && $senha === "editor123"){
    popen("cls", "w");
    echo "Usuario Editor";
} else if($usuario === "usuario" && $senha === "Usuario123"){
    popen("cls", "w");
    echo "Usuario Comum";
} else {
    popen("cls", "w");
    echo "Usuario Não Encontrado";
}