import { Personagem } from "./Personagem"

export class Vilao extends Personagem{
    infamia: number = 0
    
    constructor(nome:string, infamia:number, nivel:number){
        super(nome, nivel)
        this.infamia = infamia
    }

    status(): void {
       console.log(`
       Nome: ${this.nome}
       Nivel: ${this.nivel}
       Infamia: ${this.infamia}
       `)
    }

}