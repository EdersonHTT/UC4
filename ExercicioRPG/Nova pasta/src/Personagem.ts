import { Monstro } from "./Monstro";

export class Personagem {
    private nome: string;
    private classe: string;
    private vida: number = 100;
    private vidaMax: number = 100;
    private forca: number = 10;

    constructor(nome: string, classe: string) {
        this.nome = nome;
        this.classe = classe;
    }

    atacar(oponente: Monstro): void {
        let dano;
        do {
            dano = Math.floor(Math.random() * this.forca);

        } while (dano < 5);

        oponente.setVida(oponente.getVida() - dano);
        console.log("Jogador "+this.nome+" Atacou!\nDeu: " + dano);
    }

    dano(oponente: Monstro): void {
        let dano: number;
        do {
            dano = Math.floor(Math.random() * oponente.getForca());

        } while (dano < 5);

        this.setVida(this.vida - dano);
        console.log(oponente.getNome() +" Atacou!\nDeu: " + dano);
    }

    curar(usoRodada: number): void {
        if (usoRodada > 0) {
            console.log("Ainda não pode curar");
            return;
        } else if (this.vida === this.vidaMax) {
            console.log("Vida cheia!");
            return;
        }

        let cura = (this.vidaMax - this.vida) - 10;
        if (cura <= 0) {
            this.setVida(this.vida + 10);
            console.clear();
            console.log("Curou " + 10 + " de vida!" + cura);
            return
        }

        this.setVida(this.vida + cura);
        console.clear();
        console.log("Curou " + cura + " de vida! \nVida 100%");
    }

    setVida(vida: number): void {
        this.vida = vida;
    }

    getVida(): number {
        return this.vida;
    }

    GetVidaMax(): number {
        return this.vidaMax;
    }

    getNome(): string {
        return this.nome;
    }
}