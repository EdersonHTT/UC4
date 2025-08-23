import { Pagamento } from "./Pagamento";

export class CartaoCredito extends Pagamento {
    processar(): void {
        console.log("Processando cartao")
    }
}