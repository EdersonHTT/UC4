"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(nome, classe) {
        this.vida = 100;
        this.vidaMax = 100;
        this.forca = 10;
        this.nome = nome;
        this.classe = classe;
    }
    atacar(oponente) {
        let dano;
        do {
            dano = Math.floor(Math.random() * this.forca);
        } while (dano < 5);
        oponente.setVida(oponente.getVida() - dano);
        console.log("Jogador " + this.nome + " Atacou!\nDeu: " + dano);
    }
    dano(oponente) {
        let dano;
        do {
            dano = Math.floor(Math.random() * oponente.getForca());
        } while (dano < 5);
        this.setVida(this.vida - dano);
        console.log(oponente.getNome() + " Atacou!\nDeu: " + dano);
    }
    curar(usoRodada) {
        if (usoRodada > 0) {
            console.log("Ainda não pode curar");
            return;
        }
        else if (this.vida === this.vidaMax) {
            console.log("Vida cheia!");
            return;
        }
        let cura = (this.vidaMax - this.vida) - 10;
        if (cura <= 0) {
            this.setVida(this.vida + 10);
            console.clear();
            console.log("Curou " + 10 + " de vida!" + cura);
            return;
        }
        this.setVida(this.vida + cura);
        console.clear();
        console.log("Curou " + cura + " de vida! \nVida 100%");
    }
    setVida(vida) {
        this.vida = vida;
    }
    getVida() {
        return this.vida;
    }
    GetVidaMax() {
        return this.vidaMax;
    }
    getNome() {
        return this.nome;
    }
}
exports.Personagem = Personagem;
