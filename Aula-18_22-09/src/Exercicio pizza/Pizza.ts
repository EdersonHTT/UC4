import { SaboresPizza } from "./SaboresPizza";
import { PrecoDaPizza } from "./PrecoDaPizza";
import { TamanhoDaPizza } from "./TamanhoDaPizza";

export class Pizza {
    private sabor: SaboresPizza;
    private tamanho: TamanhoDaPizza;
    private preco: PrecoDaPizza;
    static TamanhoDaPizza: any;

    constructor(sabor: SaboresPizza, tamanho: TamanhoDaPizza) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.preco = this.calculaPreco();
    }
    
    descriçao(): string {
        return `Pizza de ${this.sabor}, tamanho ${this.tamanho}, preço R$ ${this.preco.toFixed(2)}`;
    }

    calculaPreco(): PrecoDaPizza {
        switch (this.tamanho) {
    case TamanhoDaPizza.Broto:
        return PrecoDaPizza.B;
    case TamanhoDaPizza.Pequena:
        return PrecoDaPizza.P;
    case TamanhoDaPizza.Media:
        return PrecoDaPizza.M;
    case TamanhoDaPizza.Grande:
        return PrecoDaPizza.G;
    case TamanhoDaPizza.Familia:
        return PrecoDaPizza.F;
    default:
        throw new Error("Tamanho inválido");
        }
    }
}