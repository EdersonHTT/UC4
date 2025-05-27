<?php

class Pessoa {
    public $nome;
    public $idade;
    public $cpf;

    public function __construct(string $nome = null, int $idade = 0, int $cpf = null) {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->cpf = $cpf;
    }

    public function __toString() {
        return "\n===============\nNome: ". $this->nome . "\nIdade: " . $this->idade . "\nCPF: " . $this->cpf . "\n===============\n";
    }
}

function por(&$lista, $pessoa){

    array_push($lista, strval($pessoa));

}

function ver($lista){
    popen("cls", "w");

    echo "===============> Lista:\n\n";
    echo join("\n", $lista)."\n";
    readline("Enter to continue ");
}

$lista = [];

while(true){
    popen("cls", "w");
    
    echo "
[1] - adicionar
[2] - mostrar lista
    \n\n";

    $fazer = readline("Uma acao: ");

    if($fazer == "2") {
        ver($lista);
    } else if($fazer == "1"){
        $pessoa = new Pessoa(readline("Nome: "),(int)readline("idade: "), (int)readline("cpf: "));
        por($lista, $pessoa);
    }

    if(!(count($lista) <= 4)){
        break;
    }

}