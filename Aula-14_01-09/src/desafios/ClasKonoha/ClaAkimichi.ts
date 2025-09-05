import { Cla } from "./Cla";

export class ClaAkimichi extends Cla {
    constructor(nome:string, lider:string) {
        super(nome, lider);
    }
    habilidadeEspecial(): void {
        console.log("A ampliação corporal é a técnica secreta do clã Akimichi. Permite aumentar partes do corpo — como braços e pernas — ou até o corpo inteiro, ampliando força e alcance nos ataques. É um jutsu que combina poder bruto com versatilidade em batalha.")
    }
}