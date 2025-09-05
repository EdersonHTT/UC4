export abstract class Cla {
    protected nomeCla:string;
    protected lider:string;

    constructor(nome:string, lider:string) {
        this.nomeCla = nome;
        this.lider = lider;
    }

    abstract habilidadeEspecial():void;

    exibirDetalhes():void{
        console.log(`Nome Clã: ${this.nomeCla} \nLider: ${this.lider}`);
    };
}