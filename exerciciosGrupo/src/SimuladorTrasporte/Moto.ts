import { Carga } from "./Carga";
import { Veiculo } from "./Veiculo";

export class Moto extends Veiculo{

    constructor() {
        super(30)
    }

    trasportar<T>(carga: Carga<T>): void {
        if(carga.peso <= this.capacidade) {
            console.log("Carga abaixo de 30kg, pode ser trasportado!")
        } else {
            console.log("Carga acima de 30kg")
        }
    }
}