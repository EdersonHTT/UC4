import { IProduto } from "./IProduto"

export class Loja<T extends IProduto> {
    produtos: T[] = []

    listar(): T[]{
        return this.produtos;
    }

    adicionar(item:T):void {
        this.produtos.push(item);
    }

    
    calcularTotal(): number{
        let total = 0;
        
        this.produtos.forEach(element => {
            total += element.preco;
        });

        return total;
    }
}