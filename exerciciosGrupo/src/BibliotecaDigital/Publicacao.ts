import { IPublicacao } from "./IPublicacao"

export abstract class Publicacao implements IPublicacao {
    titulo:string
    ano:number 

    constructor(titulo:string, ano:number){
        this.titulo = titulo;
        this.ano = ano;
    }

    abstract exibir(): void;
}