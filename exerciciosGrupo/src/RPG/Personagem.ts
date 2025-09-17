import { Missao } from "./Missao";

export abstract class Personagem {
    protected nome: string;
    protected nivel: number = 1;
    protected vida: number = 100;
    protected dano: number = 10;
    private missoes: Missao[] = [];

    constructor(nome: string, nivel: number) {
        this.nome = nome;
        this.nivel = nivel;
    }

    aceitarMissao(missao: Missao): void {
        if (missao.getDificuldade() <= this.nivel) {
            console.log(`===Missao ${missao} aceita!`)
        } else {
            console.log(`===> Voce não pode aceitar esta missao ainda <===
-> Seu nível ${this.nivel} é menor que a 
dificuladade da missao: ${missao.getDificuldade()}
-> Voce deve ter o mesmo nível ou vaior que a missão
`)
        }

        this.missoes.push(missao);
    };

    concluirMissao(missao: Missao): void {
        this.missoes.forEach(missaoAceitas => {
            if (missao.getTitulo() === missaoAceitas.getTitulo()) {
                console.log(`
    ===> Missao: ${missao.getTitulo()} Concluida! <===
                `)
            return;
            }
        })

    };

    abstract status(): void;

    getDano(): number {
        return this.dano;
    }

    getLevel(): number {
        return this.nivel;
    }

    setLevel(nivel: number): void {
        this.nivel = nivel;
    }

    getViIda(): number {
        return this.vida;
    }

    setViIda(vida: number): void {
        this.vida = vida;
    }
}
