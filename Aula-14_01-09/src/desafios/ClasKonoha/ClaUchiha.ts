import { Cla } from "./Cla";

export class ClaUchiha extends Cla {
    constructor(nome:string, lider:string) {
        super(nome, lider);
    }
    habilidadeEspecial(): void {
        console.log("O Sharingan é o dōjutsu do clã Uchiha, capaz de prever movimentos, copiar jutsus e lançar ilusões pelo olhar. Quando evolui, desperta o Mangekyō, com poderes únicos e o Susanoo, mas à custa da visão. Com o Eternal Mangekyō, esse limite desaparece, e em casos raros pode até evoluir para o Rinnegan, o olho dos deuses.")
    }
}