import { Publicacao } from "./Publicacao";

export class Biblioteca {
    publicacao:Publicacao[] = [];

    adicionar(publicacaoNovo: Publicacao) {
        this.publicacao.push(publicacaoNovo);
    }

    buscarPorTitulo(titulo: string): Publicacao[] {
        const filtrar: Publicacao[] = [];
        this.publicacao.forEach(itens => {
            if(titulo === itens.titulo) {
                filtrar.push(itens)
            };
        });

        return filtrar;
    }
}