import { GenericType } from "typescript"
import { Roupa } from "./Roupa"
import { Estoque } from "./Estoque"
import { Livro } from "./Livro"

function returnArray<A> (arr: A[]):A {
    return arr[0]
}

const arr = [1, "a", true]
const arrN = [2,3,4]
const arrS = ["a", "b", "c"]

console.log(typeof returnArray(arr))
console.log(returnArray<number>(arrN))
console.log(returnArray<string>(arrS))

console.log("\n")
console.log("\n")

function returnLength<A extends { length: number }> (v: A):A {
    return v
}

// console.log(returnLength(1))
console.log(returnLength([1, 2, 3]))
console.log(returnLength("awd"))

console.log("\n")
console.log("\n")

function nuOrStr<A extends number | string> (v: A):A {
    return v
}

console.log(nuOrStr(1))
// console.log(nuOrStr(true))
console.log(nuOrStr("awd"))

console.log("\n")
console.log("\n")

interface TemNome {
    name: string;
}

function verifiqueNome<T extends TemNome> (v: T):T {
    return v
}

console.log(verifiqueNome({
    name: "Ederson"
}))

console.log("\n")
console.log("\n")

function coresEscolhidas<T extends "roxo" | "vermelho">(cor:T):T {
    return cor;
}

console.log(coresEscolhidas("roxo"));
// console.log(coresEscolhidas("amarelo"));

console.log("\n")
console.log("\n")

interface Tipos<T> {
    data: T;
    name: string
}

console.log("\n")
console.log("\n")

const estoqueRoupa = new Estoque<Roupa>()
const estoqueLivro = new Estoque<Livro>()

estoqueRoupa.adicionar(new Roupa("roupa roupa roupa", "30"));
estoqueRoupa.adicionar(new Roupa("roupa roupa roupa 2", "50"));
estoqueRoupa.adicionar(new Roupa("roupa roupa roupa 3", "20"));

estoqueLivro.adicionar(new Livro("livro livro", "Rodrigo"));
estoqueLivro.adicionar(new Livro("livro livro 2", "Rodrigo II"));
estoqueLivro.adicionar(new Livro("livro livro 3", "Rodrigo III"));