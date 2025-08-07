"use strict";
// Variaveis
Object.defineProperty(exports, "__esModule", { value: true });
var Dog_1 = require("./Dog");
// String
var nome = "Kaua";
// Number
var idade = 15;
// Boolean
var deMaior = false;
// Arrays
var numeros = [1, 2, 3];
var nomes = ['Kaua', 'Ederson', 'Guregure'];
// Objeto
var pessoa = {
    nome: "Kaua",
    idade: 15
};
console.log(nome);
function calcula(num, num2) {
    return num + num2;
}
function mensagem(meuNome) {
    return "Ola ".concat(meuNome, ", tudo vem com voce?");
}
function frase() {
    console.log("E ae");
}
// Funçao com parametros opcionais
function sayhello(name) {
    console.log("Hello,", name || "world");
}
sayhello();
sayhello("Kaua");
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(100), applyDiscount(100, 0.9));
var myDog = new Dog_1.Dog("Bob", 10, "Golden-Retriever");
var myotherDog = new Dog_1.Dog("Scoot", 11, "vira-lata");
// Assism eu acesso seus atributos
console.log(myDog.breed); //Golden-Retriever
console.log(myotherDog.name); // Scoot
//Assim eu chamo os metodos 
myDog.bark();
myotherDog.eat();
