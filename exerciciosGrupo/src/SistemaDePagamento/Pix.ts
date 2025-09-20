import { Pagamento } from "./Pagamento";


export class Pix extends Pagamento {
    pagar(valor: number): void {
        let codigo:string = "";
        
        for(let i = 0; i<=36; i++) {
            codigo += Math.floor(Math.random()*10);
        }

        console.log(`Pagamento de R$${valor.toFixed(2)} via pix, codigo: ${codigo}`);
    
    }
}