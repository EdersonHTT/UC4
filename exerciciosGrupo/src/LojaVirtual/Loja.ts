import { Produto } from "./IProduto"

export class Loja<T extends Produto> {
    produtos: T[] = []

    listar(): T[]{
        return this.produtos;
    }

    calcularTotal(): number{

    }
}