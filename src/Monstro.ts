export class Monstro {
    private nome:string;
    private vida:number = 105;
    private forca:number = 15;

    constructor(nome:string) {
        this.nome = nome;
    }

    setVida(vida:number):void {
        this.vida = vida;
    }

    getVida():number {
        return this.vida;
    }

    getNome():string {
        return this.nome;
    }

    getForca():number {
        return this.forca;
    }
}