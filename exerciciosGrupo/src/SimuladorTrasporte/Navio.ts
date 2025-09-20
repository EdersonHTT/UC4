import { Carga } from "./Carga";
import { Veiculo } from "./Veiculo";

export class Navio extends Veiculo{

    constructor() {
        super(10000);
    }
    trasportar<T>(carga: Carga<T>): void {
        if(carga.peso <= this.capacidade) {
            console.log("Carga abaixo de 100000kg, pode ser trasportado!")
        } else {
            console.log("Carga acima de 100000kg")
        }
    }
    
}