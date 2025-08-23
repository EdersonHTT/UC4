import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    constructor(velociadade:number) {
        super(velociadade);
    }

    acelerar():void {
        this.velocidade *= 1.2;
    }
}