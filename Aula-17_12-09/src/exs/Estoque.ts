export class Estoque {
    produtos: string[] = ["Arroz", "Feijão", "Macarrão", "Óleo", "Açúcar"];

    remover(item:string):void;
    remover(item:string[]):void;

    remover(item:any):void {
        if(Array.isArray(item)){
            this.produtos
        } else {

        }
    }
}