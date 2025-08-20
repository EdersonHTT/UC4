export class ContaBancaria {
    protected saldo: number;

    constructor(saldo:number) {
        this.saldo = saldo;
    }

    protected atualizarSaldo(acrecimo:number) {
        this.saldo += acrecimo;
    }

    getSaldo():number {
        return this.saldo;
    }
}
// hello :)git