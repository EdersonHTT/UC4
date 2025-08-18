export class Pacote {
    private destino: string;
    private peso: number;

    constructor(destino:string, peso: number) {
        this.destino = destino;
        this.peso = peso;
    }

    setDestino(destino:string):void {
        this.destino = destino;
    }

    getDestino():string {
        return this.destino;
    }

    setPeso(peso:number):void {
        this.peso = peso;
    }

    getPeso():number {
        return this.peso
    }
}