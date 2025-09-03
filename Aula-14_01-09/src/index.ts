import { Administrador } from "./desafios/ex1/Administrador";
import { Cliente } from "./desafios/ex1/Cliente";
import { Funcionario } from "./ex1/Funcionario";
import { FuncionarioCLT } from "./ex1/FuncionarioCLT";
import { FuncionarioPJ } from "./ex1/FuncionarioPJ";
import { Forma } from "./ex2/Forma";
import { Retangulo } from "./ex2/Retangulo";
import { Triangulo } from "./ex2/Triangulo";

const trabalhoCLT:Funcionario = new FuncionarioCLT("Ederson"); 
const trabalhoPJ:Funcionario = new FuncionarioPJ("Kaua"); 

console.log("Salario de " + trabalhoCLT.getNome() + " CLT é: " + trabalhoCLT.calcularSalario())
console.log("Salario de " + trabalhoPJ.getNome() + " PJ é: " + trabalhoPJ.calcularSalario())

const formas:Forma[] = [];

formas.push(new Retangulo());
formas.push(new Triangulo());

formas.forEach(element => {
    console.log("A forma " + element.name + ": " + element.calcularArea(50, 20))
});

const cliente:Cliente = new Cliente("Ederson", "1234");
const administrador:Administrador = new Administrador("Ederson", "1234");

if(cliente.autenticar("Ederson", "1234")) {
    cliente.acessarPainel();
}

if(administrador.autenticar("Ederson", "1234")) {
    administrador.acessarPainel();
}