import { Personagem } from "./Personagem";


export class Heroi extends Personagem {
    private honra: number;

    constructor(nome: string, nivel: number) {
        super(nome, nivel)
        this.honra = 0;
    }

    public status(): void {
        console.log(`Heroi: ${this.nome}`)
        console.log(`Nivel: ${this.nivel}`)
        console.log(`Honra: ${this.honra}`)
    }

    getHonra(): number {
        return this.honra;
    }

    setHonra(honra: number): void {
        this.honra = honra
    }
}
