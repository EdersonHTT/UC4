export class Carga<T> {
    item: T;
    peso:number;

    constructor(item:T, peso:number) {
        this.item = item;
        this.peso = peso;
    }

    descricao():string {
        return "Item: " + this.item + " | Peso: " + this.peso;
    } 
}