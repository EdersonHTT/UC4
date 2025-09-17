import { Publicacao } from "./Publicacao";

export class Revista extends Publicacao {
    constructor(
        titulo:string,
        ano:number, 
        public edicao:string
        ){
    super(titulo, ano);
    }

    exibir(): void {
        console.log(`Revista: ${this.titulo} (${this.ano}) - Edição: ${this.edicao}`);
    }
}