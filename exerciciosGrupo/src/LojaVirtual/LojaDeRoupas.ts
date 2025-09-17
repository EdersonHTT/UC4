import { Loja } from "./Loja";
import { Produto } from "./IProduto";


export class LojaDeRoupas<T extends Produto> extends Loja<T> {
    override listar(): void {
        this.produtos.forEach(p => {
            console.log(`Camisa: ${p.nome} - R$: ${p.preco} - Tamanho: ${p.tamanho}`)
        });
    }
}