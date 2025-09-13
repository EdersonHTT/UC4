export class Estoque {
    produtos: string[] = ["pedra", "game"];

    adicionaProduto(item:string[]):void;
    adicionaProduto(item:string):void;

    adicionaProduto(item:any):void {
        if(Array.isArray(item)) {
            
        } else {
            
        }
    }
}