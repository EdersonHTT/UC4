import { Funcionario } from "./Funcionario";

export class FuncionarioCLT extends Funcionario {
    private salario:number = 2000;

    constructor(nome:string) {
        super(nome);
    }

    calcularSalario(): number {
        return this.salario;
    }
}