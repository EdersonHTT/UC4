export class Caixa<T> {
    conteudo:T;

    constructor(conteudo:T) {
        this.conteudo = conteudo;
    }

    mostraConteudo():T {
        return this.conteudo;
    }
}