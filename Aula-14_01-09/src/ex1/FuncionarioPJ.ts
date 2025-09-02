import { Funcionario } from "./Funcionario";

export class FuncionarioPJ extends Funcionario {
    private horaTrabalhada:number = 100;

    constructor(nome:string) {
        super(nome);
    }

    calcularSalario(): number {
        return 100 * 300;
    }
}