export class Estoque {
    produtos: string[] = ["Arroz", "Feijão", "Macarrão", "Oleo", "Açúcar"];

    remover(item:string):void;
    remover(item:string[]):void;

    remover(item:any):void {
        if(Array.isArray(item)){
            this.produtos.forEach((produto, key) => {
                item.forEach(tirar => {
                    produto === tirar? this.produtos.splice(key, 1): null;
                });
            });
        } else {
            this.produtos.forEach((produto, key) => {
                produto === item? this.produtos.splice(key, 1): null;
            });
        }
    }
}