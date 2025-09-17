import { Publicacao } from "./Publicacao";

export class Artigo extends Publicacao {
    DOI:string
    
    constructor(titulo:string, ano:number, DOI:string){
        super(titulo, ano)
        this.DOI = DOI
    }

    exibir(): void {
       console.log(`
       ==> Artigo
       Titulo: ${this.titulo}
       Ano de publicação: ${this.ano}
       DOI: ${this.DOI}
       `)
    }
    
}