import { Pagamento } from "./Pagamento";

export class Cartao extends Pagamento {
    pagar(valor:number): void;
    pagar(valor:number, parcelas: number): void;

    pagar(valor: number, parcelas?:number): void {
        this.valor -= valor
        if(parcelas) {
            parcelas--;
            console.log("Pagamento de "+ valor +" da parcela feito! \nFaltam " + parcelas + "Parcelas à serem pagas.")
        } else {
            if(this.valor <= 0) {
                console.log("Pagamento de "+ valor +" à vista efetuado com sucesso!")
            } else {
                console.log("Ainda falta pagar " + this.valor + " a serem pagos")
            }
        }
    }

}
