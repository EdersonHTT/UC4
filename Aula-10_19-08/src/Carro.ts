import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    constructor(velociadade:number) {
        super(velociadade);
    }

    acelerar(acrecimo: number):void {
        this.velocidade += acrecimo;
    }
}