export abstract class Pagamento {
    valor: number 

    constructor(valor:number){
        this.valor = valor
    }

   abstract pagar(valor:number):void
    
}