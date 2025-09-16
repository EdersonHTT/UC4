import { Missao } from "./Missao";

export abstract class Personagem {
    protected nome: string;
    protected nivel: number = 1;
    private missoes: Missao[] = [];

    constructor(nome: string, nivel: number) {
        this.nome = nome;
        this.nivel = nivel;
    }

    aceitarMissao(missao: Missao):void  {
        if(missao.getDificuldade() <= this.nivel) {
            console.log(`===Missao ${missao} aceita!`)
        } else {
            console.log(`===> Voce não pode aceitar esta missao ainda <===
-> Seu nível ${this.nivel} é menor que a 
dificuladade da missao: ${missao.getDificuldade()}
-> Voce deve ter o mesmo nível ou vaior que a missão
`)
        }
    };

    concluirMissao(missao: Missao): void {
        console.log(`
===> Missao: ${missao.getTitulo} Concluida! <===
            `)
    };
    
    abstract status(): void;
}