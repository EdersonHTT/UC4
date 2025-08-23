import { Veiculo } from "./Veiculo";

export class Biciclata extends Veiculo {
    mover(): void {
        console.log("A biciclata esta andando");
    }
}