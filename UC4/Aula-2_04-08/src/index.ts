// let nomeTurma:string = "25-1N";
// let numeroAluno:number = 20;
// let nomes:string[] = ["Belto", "Fulto"];

// function mensagem():void {
//     console.log("Konnichiwa");
// }

// mensagem();

// function calcula(nu1:number, nu2:number) {
//     return nu1 + nu2;
// }

// console.log(calcula(10, 90))

import { mensagem } from "./exercicios/ex1";
import { matruculados } from "./exercicios/ex2";
import { saudação } from "./exercicios/ex3";
import { calcularMedia } from "./exercicios/ex4";
import { contarAlunos } from "./exercicios/ex5";

mensagem("Ederson", 17, true);

console.log("\n")

console.log(matruculados(["Ederson", "Kauan", "Gureguri"]));

console.log("\n")

saudação("Kaua");

console.log("\n")

console.log("Media: " + calcularMedia(3, 6, 9));

console.log("\n")

contarAlunos(["Ederson", "Kauan", "Gureguri"]);