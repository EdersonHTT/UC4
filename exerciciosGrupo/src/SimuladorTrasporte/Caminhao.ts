import { Carga } from "./Carga";
import { Veiculo } from "./Veiculo";

export class Caminhao extends Veiculo{
    trasportar<T>(carga: Carga<T>): void {
        if(carga.peso > this.capacidade){
            console.log("A Carga esta muito alta! ")
        }else{
            console.log("A carga esta dentro do limite. ")
        }
    }
    
}
// 