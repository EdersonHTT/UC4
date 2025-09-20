import { Loja } from "./Loja";
import { IProduto } from "./IProduto";

interface ProdutoRoupa extends IProduto {
    tamanho: number;
}

export class LojaDeRoupas<T extends ProdutoRoupa = ProdutoRoupa> extends Loja<T> {
    listar(): T[] {
        return this.produtos
    }
}