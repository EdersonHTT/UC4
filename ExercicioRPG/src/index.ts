import read from "readline-sync";
import { Personagem } from "./Personagem";
import { Monstro } from "./Monstro";

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

read.question(" ");

console.clear();

let nome:string = read.question("Seu nome: ")

console.clear();

let classe:string = "";
let vida:number = 0;
let forca:number = 0;
let escolhendo:boolean = false;

do {
    console.clear();
    console.log(`
========> Classes <======== 
[1] - Guerreiro
[2] - Paladino
[3] - Default
`);
    switch(read.question("Escolha: ")) {
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
} while(escolhendo)

const jogador: Personagem = new Personagem(nome, classe, vida, forca);

const monstros: string[] = ["Goblin", "Hobgoblin", "Ryu"];

const monstro: Monstro = new Monstro(monstros[Math.floor(Math.random() * monstros.length)]);

console.clear();
let escolha: string;
let rodadaCura: number = 0;
do {
    console.clear();


    console.log(`
==============> Lutando <==============
${jogador.getNome() + ": " + jogador.getVida()}                 ${monstro.getNome() + ": " + monstro.getVida()}

[1] - Atacar
[2] - Curar
[3] - Sair

`);
    escolha = read.question("Escolha: ");

    switch (escolha) {
        case "1":
            if (rodadaCura > 0) {
                rodadaCura--;
            }

            console.clear();
            jogador.atacar(monstro);
            if (monstro.getVida() > 0) {
                jogador.dano(monstro);
            } else {
                console.clear();
                console.log("Monstro perdeu!");
                read.question("Enter para terminar o jogo... ");
                escolha = "3";
                continue;
            }

            if (jogador.getVida() <= 0) {
                console.clear();
                console.log("Voce perdeu!");
                read.question("Enter para terminar o jogo... ");
                escolha = "3";
                continue;
            }

            read.question("Enter para continuar!");
            break;
        case "2":
            if (jogador.getVida() === jogador.GetVidaMax()) {
                console.clear();
                console.log("Vida cheia!");
                read.question("Enter para continuar!");
                continue;
            }
            
            rodadaCura += jogador.curar(rodadaCura);;
            read.question("Enter para continuar!");

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
} while (escolha != "3");