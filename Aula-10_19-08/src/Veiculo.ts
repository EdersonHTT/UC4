export class Veiculo {
    protected velocidade: number;

    constructor(velociade:number) {
        this.velocidade = velociade;
    }

    getVelociade():number {
        return this.velocidade;
    }
}