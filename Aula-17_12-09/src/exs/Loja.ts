export class Loja {

    adicionaProduto(item:string[]):void;
    adicionaProduto(item:string):void;

    adicionaProduto(item:any):void {
        if(Array.isArray(item)) {
            console.log("Produtos: " + item.join(", "))
        } else {
            console.log("Produto: " + item)
        }
    }
}