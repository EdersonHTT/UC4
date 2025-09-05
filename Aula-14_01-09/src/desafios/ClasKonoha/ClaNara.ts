import { Cla } from "./Cla";

export class ClaNara extends Cla {
    constructor(nome:string, lider:string) {
        super(nome, lider);
    }
    habilidadeEspecial(): void {
        console.log("A manipulação de sombras é a técnica secreta do clã Nara. Com ela, o usuário conecta sua sombra à do inimigo, obrigando-o a copiar todos os seus movimentos. Além disso, pode estender, prender e até estrangular com a sombra, tornando-se uma arma estratégica em combate.")
    }
}