export abstract class Cla {
    nomeCla:string;
    lider:string;

    constructor(nome:string, lider:string) {
        this.nomeCla = nome;
        this.lider = lider;
    }

    abstract habilidadeEspecial():string {
        
    }
}