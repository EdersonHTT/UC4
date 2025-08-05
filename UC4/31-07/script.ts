// Variaveis

import { Dog } from "./Dog"

// String
let nome:string = "Kaua"
// Number
let idade:number = 15
// Boolean
let deMaior:boolean = false

// Arrays

let numeros: Array<number> = [1,2,3]
let nomes: string[] = ['Kaua','Ederson','Guregure']

// Objeto

let pessoa: {nome:string, idade:number} = {
    nome:"Kaua",
    idade: 15
}

console.log(nome) 



function calcula(num:number, num2:number):number {
return num + num2
}

function mensagem(meuNome:string):string{
    return `Ola ${meuNome}, tudo vem com voce?`
}

function frase():void {
    console.log("E ae")
}

// Funçao com parametros opcionais
function sayhello(name?: string): void {
    console.log("Hello,", name || "world")
}

sayhello()
sayhello("Kaua")

function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount)
}

console.log(
    applyDiscount(100),
    applyDiscount(100,0.9)
)


let myDog:Dog = new Dog("Bob",10,"Golden-Retriever")
let myotherDog:Dog = new Dog("Scoot",11,"vira-lata")

// Assism eu acesso seus atributos
console.log(myDog.breed) //Golden-Retriever
console.log(myotherDog.name) // Scoot

//Assim eu chamo os metodos 
myDog.bark()
myotherDog.eat()
