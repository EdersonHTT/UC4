"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Personagem_1 = require("./Personagem");
const Monstro_1 = require("./Monstro");
console.clear();
console.log(`
==============> Jogo RPG <==============

- Seja bem vindo ao game

`);
readline_sync_1.default.question("Enter para continuar!");
const jogador = new Personagem_1.Personagem(readline_sync_1.default.question("Seu nome: "), readline_sync_1.default.question("Sua classe: "));
const monstros = ["Goblin", "Hobgoblin", "Ryu"];
const monstro = new Monstro_1.Monstro(monstros[Math.floor(Math.random() * monstros.length)]);
console.clear();
let escolha;
let rodadaCura = 0;
do {
    console.clear();
    if (rodadaCura > 0) {
        rodadaCura--;
    }
    console.log(`
==============> Lutando <==============

[1] - Atacar
[2] - Curar
[3] - Sair

`);
    escolha = readline_sync_1.default.question("Escolha: ");
    switch (escolha) {
        case "1":
            console.clear();
            jogador.atacar(monstro);
            if (monstro.getVida() > 0) {
                jogador.dano(monstro);
            }
            else {
                console.clear();
                console.log("Monstro perdeu!");
                readline_sync_1.default.question("Enter para terminar o jogo... ");
                escolha = "3";
                break;
            }
            if (jogador.getVida() <= 0) {
                console.clear();
                console.log("Voce perdeu!");
                readline_sync_1.default.question("Enter para terminar o jogo... ");
                escolha = "3";
                break;
            }
            readline_sync_1.default.question("Enter para continuar!");
            break;
        case "2":
            jogador.curar(rodadaCura);
            readline_sync_1.default.question("Enter para continuar!");
            if (jogador.getVida() === jogador.GetVidaMax()) {
                console.log("Vida cheia!");
            }
            else {
                rodadaCura = 2;
            }
            break;
        case "3":
            console.clear();
            console.log("Saindo...");
            break;
        default:
            console.clear();
            console.log("Valor invalido");
            readline_sync_1.default.question("Enter para continuar!");
            break;
    }
} while (escolha != "3");
