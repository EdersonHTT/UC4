import { Jogo } from "./Jogo";
import read from "readline-sync"

const jogo: Jogo = new Jogo();
let tentativas: number = 0;
let verificar: string = "";

do {
    console.clear()
    console.log(`
    Jogo de adivinhar
    [1] - Chutar numero de 1 a 100
    [2] - Sair
    `)
    switch (read.question("Escolha uma opcao: ")) {
        case "1":
            console.clear()
            verificar = jogo.chutar(parseInt(read.question("Escolha um numero: ")), tentativas);
            console.log(verificar);
            verificar = verificar.slice(0, 1)
            read.question("Enter para continuar...");
            tentativas++;
            break;
        case "2":
            console.clear()
            console.log("Saindo...");
            verificar = "P";
            break;
        default:
            console.clear()
            console.log("Opcao invalida");
            read.question("Enter para continuar...");
            break;
    }
} while (verificar != "P")