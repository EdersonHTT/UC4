import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    mover(): void {
        console.log("O carro esta andando")
    }
}