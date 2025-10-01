// function somaNumeros(num1:number, num2: number): number {
//     return num1 + num2
// }

import { Animal } from "./Animal";
import { TemNome } from "./TemNome";
import { Usuario } from "./Usuario";



// somaNumeros(55, 12) // retorna a soma dos dois numeros

// function somaStrings(palavra1: string, palavra2: string): string {
//     return palavra1 + palavra2
// }

// somaStrings('pei','dei') // retorna a concatenação das palavras/caracteres

// console.log(somaNumeros(55, 12))

// console.log(somaStrings('pei','dei'))

// function soma<T extends string | number>(param1: T, param2: T): T {
//    return ((param1 as any) + (param2 as any)) as T
// }

// console.log(soma<string>('oi', 'tudo bem?'))

// console.log(soma<number>(55, 12))



// function retornarGenerics<T>(item:T):T {
//     return  item
// }

// console.log(retornarGenerics<string>('Kaua'), retornarGenerics<number>(67))

// const nomes:string[] = ['Kaua', 'João', 'Maria']
// const numeros:number[] = [1, 2, 3, 4, 5]

// function retornarprimeiroString(array:string[]):string {
//     return array[0]
// }

// console.log(retornarprimeiroString(nomes))

// function retornarprimeiroNumero(array:number[]):number {
//     return array[0]
// }

// console.log(retornarprimeiroNumero(numeros))

// import { Animal } from "./Animal";
// import { Usuario } from "./Usuario";

// const nomes:string[] = ['Kaua', 'João', 'Maria']
// const numeros:number[] = [10, 20, 30, 40, 50]

// function mostraNome<T extends {nome:string}>(obj:T):string {
//     return obj.nome;
// }

// let meuAnimal = new Animal('Rex', 'Cachorro', 5)

// console.log(mostraNome<Animal>(meuAnimal)) 

// let meuUsuario = new Usuario('Kaua', "Kau@mail", "12345")

// console.log(mostraNome<Usuario>(meuUsuario))

// function mostratamanho<T extends {lenght:number}>(obj:T):number {
//     return obj.lenght
// }

// console.log(mostratamanho<string>("Kaua"), mostratamanho<number[]>([10, 20, 30])) // Erro, number não possui a propriedade lenght

function mostrarValor<T extends string | number | boolean>(valor:T):T {
    return valor
}

console.log(mostrarValor<string>('Kaua'), mostrarValor<number>(55))

function mostraNome<T extends TemNome>(obj:T):string {
    return obj.nome;
}

let meuUsuario:Usuario = new Usuario('Kaua', "Kau@mail", "12345")
console.log(mostraNome<Usuario>(meuUsuario))


function som<T extends Animal>(obj:T):string {
    return obj.nome + "Faz som";
}



//som()
