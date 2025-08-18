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
======================================================================================

        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⡿⣿⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣧⣽⢼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⣬⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡿⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⢹⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⣹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣴⡶⠞⠷⠟⣻⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠛⢶⣿⣭⢽⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣯⡳⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡇⠑⣌⠻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣶⣌⣷⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣬⡓⢾⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣇⠉⠛⣷⣤⠀⠀⠀⠀⠀⠀⠀⣼⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡄⢲⣾⣿⠀⠀⠀⠀⠀⠀⢸⢻⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠘⣖⢿⠀⠀⠀⠀⠀⠀⣏⢸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⢿⠻⡄⠀⠀⠀⠀⠀⢿⡀⠹⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡆⠘⣶⣿⠀⠀⠀⠀⠀⠈⢣⡀⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⣿⡾⡆⠀⠀⠀⠀⠀⠈⢳⣶⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡀⢸⡿⣧⠀⠀⠀⢠⡄⢀⣾⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⣿⢿⠀⠀⠀⢸⣇⣸⠛⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡀⢸⣿⣇⠀⢀⡜⢹⣧⡆⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡏⢘⣿⣿⢰⠏⢀⣹⣿⡇⡿⢰⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⠃⠀⠀⣷⣿⣾⣿⣿⣿⠂⣸⡟⢘⡿⠁⣼⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣻⠀⠀⣴⠋⣀⣿⣿⣿⣿⢠⠿⠁⢸⡀⠀⣯⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡝⣿⠳⡄⠏⠀⣿⣿⢿⢿⠃⠀⡀⠀⠈⠷⡄⣿⠈⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣿⣧⣸⠃⠙⠀⡀⠛⠁⠘⠀⢤⣶⣿⣿⡛⠀⠙⡇⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⠃⠀⣠⠞⢧⠀⠀⠀⠀⢠⣿⣿⡟⠃⠀⠀⣿⠀⢈⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⠎⠀⣠⠞⠁⡀⠀⠳⣄⠀⣠⣿⣿⣋⠙⠁⠀⠀⠉⣤⡛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⠀⡞⠁⣠⠞⠁⢀⡴⡇⠀⠀⢀⡴⠋⠻⠏⠀⠀⠀⢀⣀⣋⣀⠙⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡆⡇⠈⣡⣄⡠⠎⠁⠹⠶⠶⢾⣥⠀⠀⣠⡖⣃⣰⡾⣫⠟⠁⢠⠆⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣶⣿⣧⡞⠉⠉⢀⣠⡴⣲⡄⠀⠟⡏⠠⠾⢟⣋⣉⣴⡶⠋⠀⡰⣿⠀⠀⢳⣤⡤⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣻⠿⢿⡿⠃⠀⣰⡿⠃⠀⡿⡷⠟⠁⠁⢠⣶⣿⣿⣿⣯⠀⢀⠞⢱⠃⠀⠀⠀⢵⡄⣀⠀⣷⡄⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⢀⣤⣞⣿⣯⡀⣤⢶⠂⠐⠚⠹⠁⣠⠜⠁⠀⠀⠀⠀⠘⣿⣿⡿⠋⢹⡄⣸⠀⣿⠀⣄⠀⠀⠀⠹⣯⡉⠉⠳⣴⡄⠀⠀⠀⠀
        ⠀⠀⠀⠀⣠⡴⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⠢⢤⣤⣴⠾⢿⡤⠀⠀⠀⣼⣷⣿⡤⠀⡇⠙⣶⣿⠶⠿⢿⣿⣦⣤⣼⣬⡧⠀⠀⢿⣀⠀⠀⠀
        ⠀⢀⣴⣻⣷⣿⣏⣛⠛⢿⣿⣦⡀⠀⠈⠉⠻⣿⣿⣮⣿⣷⣾⣿⡀⢀⣾⣿⣿⠾⠛⣶⣿⠛⠛⠀⠀⠀⣿⣿⡿⢿⣽⠟⠁⠀⠀⠀⠙⢦⡀⠀
        ⠀⣼⠟⣡⠚⣉⣉⣽⣿⣦⡙⢦⣹⠆⢀⣶⣆⣼⣿⣿⣟⠋⣽⣁⣿⣿⣾⣿⣿⣿⣿⠿⢿⣿⣿⣿⡿⠿⢿⣿⣿⣿⢧⣄⠀⢀⣠⣶⣤⣬⣧⠀
        ⢸⢷⡾⠷⠾⠿⠿⡿⠿⣟⠛⠛⢀⢠⠾⠾⡟⠉⡉⡑⠿⠾⠓⠒⡾⣿⠻⠿⠟⠛⢋⢰⡾⡿⣶⠶⠿⠿⣿⢩⡿⡟⡳⢾⠿⠟⣛⣚⣿⠷⡶⠄


                                    █▄▄▄▄ █ ▄▄    ▄▀  
                                    █  ▄▀ █   █ ▄▀    
                                    █▀▀▌  █▀▀▀  █ ▀▄  
                                    █  █  █     █   █ 
                                      █    █     ███  
                                     ▀      ▀         
======================================================================================

                                    Enter Para Jogar

======================================================================================
`);
readline_sync_1.default.question(" ");
console.clear();
let nome = readline_sync_1.default.question("Seu nome: ");
console.clear();
let classe = "";
let vida = 0;
let forca = 0;
let escolhendo = false;
do {
    console.clear();
    console.log(`
========> Classes <======== 
[1] - Guerreiro
[2] - Paladino
[3] - Default
`);
    switch (readline_sync_1.default.question("Escolha: ")) {
        case "1":
            classe = "Guerreiro";
            vida = 100;
            forca = 30;
            escolhendo = false;
            break;
        case "2":
            classe = "Paladino";
            vida = 120;
            forca = 20;
            escolhendo = false;
            break;
        case "3":
            classe = "Default";
            vida = 100;
            forca = 20;
            escolhendo = false;
            break;
        default:
            escolhendo = true;
            break;
    }
} while (escolhendo);
const jogador = new Personagem_1.Personagem(nome, classe, vida, forca);
const monstros = ["Goblin", "Hobgoblin", "Ryu"];
const monstro = new Monstro_1.Monstro(monstros[Math.floor(Math.random() * monstros.length)]);
console.clear();
let escolha;
let rodadaCura = 0;
do {
    console.clear();
    console.log(`
==============> Lutando <==============
${jogador.getNome() + ": " + jogador.getVida()}                 ${monstro.getNome() + ": " + monstro.getVida()}

[1] - Atacar
[2] - Curar
[3] - Sair

`);
    escolha = readline_sync_1.default.question("Escolha: ");
    switch (escolha) {
        case "1":
            if (rodadaCura > 0) {
                rodadaCura--;
            }
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
                continue;
            }
            if (jogador.getVida() <= 0) {
                console.clear();
                console.log("Voce perdeu!");
                readline_sync_1.default.question("Enter para terminar o jogo... ");
                escolha = "3";
                continue;
            }
            readline_sync_1.default.question("Enter para continuar!");
            break;
        case "2":
            if (jogador.getVida() === jogador.GetVidaMax()) {
                console.clear();
                console.log("Vida cheia!");
                readline_sync_1.default.question("Enter para continuar!");
                continue;
            }
            rodadaCura += jogador.curar(rodadaCura);
            ;
            readline_sync_1.default.question("Enter para continuar!");
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
