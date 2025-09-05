import { Cla } from "./Cla";

export class ClaHyuuga extends Cla {
    constructor(nome:string, lider:string) {
        super(nome, lider);
    }
    habilidadeEspecial(): void {
        console.log("O Byakugan é o dōjutsu do clã Hyūga. Dá visão quase 360°, enxerga o fluxo de chakra e permite usar o Punho Gentil, que ataca os pontos de energia do inimigo.")
    }
}