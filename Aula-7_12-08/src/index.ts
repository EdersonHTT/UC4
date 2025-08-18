import { Calculadora } from "./Calculadora/Calculadora";

import read from "readline-sync";

// // Para podermos criar um objeto da nossa classe "cachorro", primeiro criamos uma variável que deve ser do tipo Cachorro

// import { Cachorro } from "./Cachorro/Cachorrro";

// // Depois, atribuimos valor a esta variável usamos a palavra reservada "new" seguido do nome da classe junto de parênteses. Assim chamamos o constructor da classe e devemos, dentro dos parênteses, passar TODOS os valores
// const meuCachorro:Cachorro = new Cachorro("Inu", 9, "Shiba Inu");
// const meuCachorro2:Cachorro = new Cachorro("Kuro", 6, "Shiba Inu");

// meuCachorro.latir;
// meuCachorro2.latir;

// meuCachorro.correr

// console.log(meuCachorro.name)
// console.log(meuCachorro2.name)

let rodando: boolean = true
do {
    console.clear()
    console.log(`
====== CALCULADORA ======
1 - Somar
2 - Subtrair
3 - Multiplicar
4 - Dividir
5 - Sair

    `)

    switch (read.question("fazer: ")) {
        case "1":
            let minhaCalculadora: Calculadora = new Calculadora(1, 2)

            console.clear()
            let somado = minhaCalculadora.soma();
            console.log("A soma fica: " + somado);
            read.question("Enter para continuar... ")
            break;
        case "2":
            console.clear()
            let subtraido = minhaCalculadora.subtracao();
            console.log("A subtracao fica: " + subtraido);
            read.question("Enter para continuar... ")
            break;
        case "3":
            console.clear()
            let multiplicado = minhaCalculadora.multiplicacao();
            console.log("A multiplicacao fica: " + multiplicado);
            read.question("Enter para continuar... ")
            break;
        case "4":
            console.clear()
            let divisao = minhaCalculadora.dividir();
            if (divisao != -1) {
                console.log("A divisao fica: " + divisao);
            } else {
                console.log("Divisao invalida!")
            }
            read.question("Enter para continuar... ")
            break;
        case "5":
            console.clear()
            console.log("Saindo... ")
            rodando = false;
            break;
        default:
            console.clear();
            console.log("Valor invalido!");
            read.question("Enter para continuar...");
            break;
    }
} while (rodando)