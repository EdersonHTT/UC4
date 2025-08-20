import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {
    constructor(saldo:number) {
        super(saldo);
    }

    aplicarJuros(taxa:number):void {
        this.atualizarSaldo(this.saldo * (taxa / 100));
    }
}