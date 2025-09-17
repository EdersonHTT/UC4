import read from "readline-sync"

import { Personagem } from "./Personagem"
import { Vilao } from "./Vilao"
import { Heroi } from "./Heroi"
import { Missao } from "./Missao"

const vilao:Personagem = new Vilao ("Hades", 0, 1)

const missao1:Missao = new Missao("Derrote o Obama", 1); 
const inimigo1:Vilao = new Vilao("Obama", 2, 3);

const missao2:Missao = new Missao("Derrote o Biden", 2);
const inimigo2:Vilao = new Vilao("Biden", 3, 5);

const missao3:Missao = new Missao("Derrote o Madison", 1);
const inimigo3:Vilao = new Vilao("Madison", 4, 7);

let jogando:boolean = true;

console.log("  ===> Jogo <===")
console.log("-> Crie seu personagem:")
const nome:string = read.question("Nome: ");


const jogador:Heroi = new Heroi(nome, 1);

function batalha (vilao:Vilao, missao:Missao):boolean {
    let batalhando:boolean = true;
    do {
        console.clear();
        console.log("Jogador vida: "+jogador.getViIda())
        console.log("Vilao vida: "+vilao.getViIda())
        console.log(`
    =====> Em batalha
    [1] - Bater
    [2] - Ver status
    [3] - Fugir
        `);

        switch(read.question("opcao: ")){
            case "1": 
                let danoVilao = vilao.getDano() + (vilao.getLevel() * Math.floor(Math.random()*2));
                let danoPersonagem = jogador.getDano() +  (jogador.getLevel()+1 * Math.floor(Math.random()*2));
            
                if( jogador.getViIda() <= 0 ) {
                    console.log("Jogador perdeu");
                    jogador.setViIda(0);
                    return false;
                }

                vilao.setViIda(vilao.getViIda() - danoPersonagem);
                console.log("Jogador deu "+ danoPersonagem + " de dano");

                if( vilao.getViIda() <= 0 ) {
                    jogador.concluirMissao(missao);
                    console.log(`
    Jogador Recebe:
    +1 level
    +1 Honra
    `);
                    jogador.setLevel(jogador.getLevel() + 1);
                    vilao.setViIda(0);
                    jogador.setViIda(100);
                    jogador.setHonra(jogador.getHonra() +1)
                    read.question("Enter para continuar");
                    return true;
                }

                console.log("Vilao vida: "+vilao.getViIda())
                read.question("Enter para continuar...");

                jogador.setViIda(jogador.getViIda() - danoVilao);

                if( jogador.getViIda() <= 0 ) {
                    console.log("Jogador perdeu");
                    jogador.setViIda(0);
                    return false;
                }

                console.log("Vilao deu "+ danoVilao + " de dano");
                console.log("Jogador vida: "+jogador.getViIda())
                read.question("Enter para continuar...");
            break
            
            
            case "2":
                jogador.status()
                read.question("Enter para continuar...");
                break
            case "3":
                return true;
            default:
                console.log("Valor invalido");
            break
        }
        
    } while (batalhando);

    return true;
}

do {
    console.clear();
    console.log(`
    =====> Em batalha
    [1] - Missoes
    [2] - Sair
    `);

    switch(read.question("Opcao: ")){
        case "1":
            console.log("\n=== Missões DIsponiveis ===");
            console.log(` 
            [1] - Missão 1 - Nome: ${missao1.getTitulo()} Dificuldade: ${missao1.getDificuldade()}
            [2] - Missão 2 - Nome: ${missao2.getTitulo()} Dificuldade: ${missao2.getDificuldade()}
            [3] - Missão 3 - Nome: ${missao3.getTitulo()} Dificuldade: ${missao3.getDificuldade()}
            `)
            const opcao = read.question("Escolha uma missão: ")

            switch(opcao) {
                case "1":
                    if(jogador.getLevel() >= missao1.getDificuldade()){
                        jogador.aceitarMissao(missao1);
                        jogando = batalha(inimigo1, missao1);
                    }
                    break;
                case "2":
                    if(jogador.getLevel() >= missao1.getDificuldade()){
                        jogador.aceitarMissao(missao2);
                        jogando = batalha(inimigo2, missao2);
                    }
                    break
                case "3":
                    if(jogador.getLevel() >= missao1.getDificuldade()){
                        jogador.aceitarMissao(missao3);
                        jogando = batalha(inimigo3, missao3);
                    }
                    break
                default:
                    console.clear()
                    console.log("Valor invalido");
                    break;
            }
            break;
        case "2": 
            console.clear();
            jogando = false;
            console.log("Saindo...");
            break
        default:
            console.clear();
            console.log("Valor invalido!");
            break;
    }

} while (jogando)