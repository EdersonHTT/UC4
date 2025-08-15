import { Monstro } from "./Monstro";

export class Personagem {
    private nome: string;
    private classe: string;
    private vida: number;
    private forca: number;

    constructor(nome:string, classe:string, vida:number, forca:number) {
        this.nome = nome;
        this.classe = classe;
        this.vida = vida;
        this.forca = forca;
    }

    atacar(monstro:Monstro):void {
        monstro.setVida(monstro.getVida() - this.forca);
    }

    dano(monstro:Monstro):void {
        this.vida -= monstro.getForca();
    }
}