import { Pagamento } from "./Pagamento";

export class Boleto extends Pagamento{
    pagar(valor: number): void {
        this.valor -= valor
        if(this.valor <= 0) {
            console.log("Valor de " + valor + " Pago em até 3 dias uteis!")
        } else {
            console.log("Ainda falta pagar " + this.valor + " em até 3 dias uteis!")
        }
    }
    
}