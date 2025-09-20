import { IProduto } from "./IProduto";
import { Loja } from "./Loja";

interface ProdutoEletronico extends IProduto {
    garantia: string;
}

export class LojaEletronicos<T extends ProdutoEletronico = ProdutoEletronico> extends Loja<T>{
    listar(): T[] {
        return this.produtos;
    }
}