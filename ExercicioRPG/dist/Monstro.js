"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = void 0;
class Monstro {
    constructor(nome) {
        this.vida = 105;
        this.forca = 15;
        this.nome = nome;
    }
    setVida(vida) {
        this.vida = vida;
    }
    getVida() {
        return this.vida;
    }
    getNome() {
        return this.nome;
    }
    getForca() {
        return this.forca;
    }
}
exports.Monstro = Monstro;
