"use strict";
// let nomeTurma:string = "25-1N";
// let numeroAluno:number = 20;
// let nomes:string[] = ["Belto", "Fulto"];
Object.defineProperty(exports, "__esModule", { value: true });
// function mensagem():void {
//     console.log("Konnichiwa");
// }
// mensagem();
// function calcula(nu1:number, nu2:number) {
//     return nu1 + nu2;
// }
// console.log(calcula(10, 90))
const ex1_1 = require("./exercicios/ex1");
const ex2_1 = require("./exercicios/ex2");
const ex3_1 = require("./exercicios/ex3");
const ex4_1 = require("./exercicios/ex4");
const ex5_1 = require("./exercicios/ex5");
(0, ex1_1.mensagem)("Ederson", 17, true);
console.log("\n");
console.log((0, ex2_1.matruculados)(["Ederson", "Kauan", "Gureguri"]));
console.log("\n");
(0, ex3_1.saudação)("Kaua");
console.log("\n");
console.log("Media: " + (0, ex4_1.calcularMedia)(3, 6, 9));
console.log("\n");
(0, ex5_1.contarAlunos)(["Ederson", "Kauan", "Gureguri"]);
