// import { DiaDaSemana } from "./DiaDaSemana";



// function verificaDia(dia: DiaDaSemana) {
//     if (dia === 1) {
//         console.log("Hoje é dia de UC4!");
//     }else if (dia === 3) {
//         console.log("Hoje é dia de ingles!");
//     }else{
//         console.log("Hoje é dia de PI")
//     }
// }

// verificaDia(1);

// console.log(DiaDaSemana[1]);

// Exercicio pizza
import { SaboresPizza } from "./Exercicio pizza/SaboresPizza";
import { Pizza } from "./Exercicio pizza/Pizza";
import { TamanhoDaPizza } from "./Exercicio pizza/TamanhoDaPizza";
import readlineSync from "readline-sync";

// const pizza1 = new Pizza(SaboresPizza.Calabresa, TamanhoDaPizza.Grande);
// console.log(pizza1.descriçao());

// Criem um menu usando readline-sync
// AS vão ser
// Pedir pizza ==> Defino o sabor ==> Defino o tamanho ==> Mostro o pedido

// Para definir o sabor, voçes podem mostrar na tela os sabores disponiveis, de aordo com o enum   
// Para isso, percorram o enum (como se fosse um array mesmo) usando for e exibam no terminal os sabores de pizza para a pessoa escolher (usando numbers)



import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function menuPizza() {
    console.log("Bem-vindo à Pizzaria!");

    console.log("\nSabores disponíveis:");
    const sabores = Object.values(SaboresPizza); // Obtém os valores do enum
    sabores.forEach((sabor, index) => {
        console.log(`${index + 1} - ${sabor}`);
    });

    rl.question("\nEscolha o sabor (número): ", (escolhaSabor) => {
        const saborIndex = parseInt(escolhaSabor) - 1;
        if (saborIndex < 0 || saborIndex >= sabores.length) {
            console.log("Sabor inválido!");
            rl.close();
            return;
        }

        const saborEscolhido = sabores[saborIndex];

        console.log("\nTamanhos disponíveis:");
        const tamanhos = Object.values(TamanhoDaPizza); // Obtém os valores do enum
        tamanhos.forEach((tamanho, index) => {
            console.log(`${index + 1} - ${tamanho}`);
        });

        rl.question("\nEscolha o tamanho (número): ", (escolhaTamanho) => {
            const tamanhoIndex = parseInt(escolhaTamanho) - 1;
            if (tamanhoIndex < 0 || tamanhoIndex >= tamanhos.length) {
                console.log("Tamanho inválido!");
                rl.close();
                return;
            }

            const tamanhoEscolhido = tamanhos[tamanhoIndex];

            const pizza = new Pizza(saborEscolhido as SaboresPizza, tamanhoEscolhido as TamanhoDaPizza);
            console.log("\nPedido realizado:");
            console.log(pizza.descriçao());

            rl.close();
        });
    });
}

menuPizza();