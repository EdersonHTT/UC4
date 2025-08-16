import read from "readline-sync";
import { Personagem } from "./Personagem";
import { Monstro } from "./Monstro";

console.clear()
console.log(`
==============> Jogo RPG <==============

- Seja bem vindo ao game

`);

read.question("Enter para continuar!");

const jogador: Personagem = new Personagem(read.question("Seu nome: "), read.question("Sua classe: "))

const monstros: string[] = ["Goblin", "Hobgoblin", "Ryu"]

const monstro: Monstro = new Monstro(monstros[Math.floor(Math.random()*monstros.length)])

console.clear()
let escolha: string;
let rodadaCura:number = 0;
do {
    console.clear()
    if (rodadaCura > 0) {
        rodadaCura--;
    }

    console.log(`
==============> Lutando <==============

[1] - Atacar
[2] - Curar
[3] - Sair

`);
    escolha = read.question("Escolha: ");

    switch (escolha) {
        case "1": 
            console.clear()
            jogador.atacar(monstro);
            if (monstro.getVida() > 0){
                jogador.dano(monstro);
            } else {
                console.clear();
                console.log("Monstro perdeu!");
                read.question("Enter para terminar o jogo... ");
                escolha = "3";
                break;
            }

            if (jogador.getVida() <= 0){
                console.clear();
                console.log("Voce perdeu!");
                read.question("Enter para terminar o jogo... ");
                escolha = "3";
                break;
            }

            read.question("Enter para continuar!");
        break;
        case "2":
            jogador.curar(rodadaCura)
            read.question("Enter para continuar!");
            if (jogador.getVida() === jogador.GetVidaMax()) {
                console.log("Vida cheia!");
            } else {
                rodadaCura = 2
            }
        break;
        case "3": 
            console.clear();
            console.log("Saindo...");
        break;
        default:
            console.clear();
            console.log("Valor invalido");
            read.question("Enter para continuar!");
        break;
    }
} while (escolha != "3")