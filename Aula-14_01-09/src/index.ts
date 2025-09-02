import { Funcionario } from "./ex1/Funcionario";
import { FuncionarioCLT } from "./ex1/FuncionarioCLT";
import { FuncionarioPJ } from "./ex1/FuncionarioPJ";

const trabalhoCLT:Funcionario = new FuncionarioCLT("Ederson"); 
const trabalhoPJ:Funcionario = new FuncionarioPJ("Kaua"); 

console.log("Salario de " + trabalhoCLT.getNome() + " CLT é: " + trabalhoCLT.calcularSalario())
console.log("Salario de " + trabalhoPJ.getNome() + " PJ é: " + trabalhoPJ.calcularSalario())