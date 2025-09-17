import { Publicacao } from "./Publicacao"

export class Livro extends Publicacao {
    autor: string
    constructor(autor: string, titulo: string, ano: number) {
        super(titulo, ano);
        this.autor = autor
    }

    exibir(): void {
        console.log(`
        ==> Livro
        Titulo: ${this.titulo}
        Ano de Publucação: ${this.ano}
        Autor: ${this.autor}
            `)
    }
}