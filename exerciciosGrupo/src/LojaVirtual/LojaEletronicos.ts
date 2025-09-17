import { Produto } from "./IProduto";
import { Loja } from "./Loja";

export class LojaEletronicos<T extends Produto> extends Loja<T> {

    listar(): T[] {
        
        return  this.listar();
    }
}