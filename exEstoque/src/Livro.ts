export class Livro {
    descricao: string;
    autor: string;
    preco: number;

    constructor(descricao: string, autor: string, preco: number) {
        this.descricao = descricao;
        this.autor = autor;
        this.preco = preco;
    }
}