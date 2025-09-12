export class Estoque<T> {
    private itens:T[] = [];

    adicionar(item:T): void {
        this.itens.push(item);
    }

    listar():T[] {
        return this.itens
    }

    remover(indice: number): void { 
        this.itens.splice(indice, 1); 
    }

    buscar(condicao: (item: T) => boolean): T[] {
        const filtrado:T[] = [];
        this.itens.forEach(item => {
            if(condicao(item)) {
                filtrado.push(item);
            }
        })
        return filtrado;
    }
}