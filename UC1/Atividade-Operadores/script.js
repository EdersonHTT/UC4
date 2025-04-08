console.log("-----------------> Hello World <-----------------\n")

let a1 = 10
let b = 20
let c = 30

console.log("=========> Variaveis <=========\n"+a1+"\n"+b)

// 2. Testando operadores de comparação

console.log("\n=====> Operadores de Comparação <======")
console.log("a é igual a b?", a1 == b)
console.log("a é diferente de b?", a1 != b)
console.log("não é a igual a b?", !(a1 == b))
console.log("a é maior que b?", a1 > b)
console.log("a é menor que b?", a1 < b)
console.log("a é maior igual a b?", a1 >= b)
console.log("a é menor igual a b?", a1 <= b)

// Opedores Logicos 

console.log("\n=========> Opedores Logicos <=========\n----> && <----\na é maior que 5 E b é maior que 3?", a1 > 5 && b > 3)
console.log("a é menor que 5 E b é maior que 3?", a1 < 5 && b > 3)
console.log("a é maior que 5 E b é menor que 3?", a1 > 5 && b < 3)

console.log("a é igual a 10 E b é igual que 20?", a1 == 5 && b > 3)
console.log("a é maior que 5 E b é menor que 3?", a1 > 5 && b < 3)

console.log("\n----> || <----\na é menor que 5 OU b é maior que 3?", a1 < 5 || b > 3)
console.log("a é maior que 5 OU b é menor que 3?", a1 > 5 || b < 3)

console.log("a é igual a 10 OU b é igual que 20?", a1 == 5 || b > 3)
console.log("a é maior que 5 OU b é menor que 3?", a1 > 5 || b < 3)

// comparando idades:

console.log("\n=========> Comparando Idades <=========\n")

const idade = 12 // A pessoa tem 18 anos
const temAssinatura = true // A pessoa tem 18 anos

console.log("A pessoa pode acessar a área exclusiva? " + (idade >=18 && temAssinatura === true))

/*
 *    A pessoa pode acessar a área exclusiva se for maior ou igua a 18 anos
 *    E se tiver uma assinatura pega.
 *    O operador "&&" (AND) vai retornar true se as duas condições forem verdadeiras.
 *    Passos:
 *    1. Declarar as variaveis necessárias e atribua os valores.
 *    2. Testar
*/

console.log("\n=========> Vendo se Pode Comprar Bebida Alcoólica <=========\n")

const idadeIndividuo = 12 // A pessoa tem 12 anos
const identidade = false // A identidade
let tem

if(idadeIndividuo >= 18 && identidade === true){
    tem = "sim"
} else {
    tem = "não"
}

console.log("A pessoa tem idade e documentos válidos para comprar bebida alcoólica? ", tem, "'"+(idadeIndividuo >=18 && identidade === true)+ "'")

console.log("\n=========> Vendo se tem cupom igual ou acima de 100 ou se é VIP <=========\n")

const cupom = 99 // A pessoa tem 12 anos
const vip = false // A identidade
let temComo

if(cupom >= 100 || vip === true){
    temComo = "sim"
} else {
    temComo = "não"
}

console.log("A pessoa tem um cupom valido OU é VIP para ganhar o desconto? ", temComo, "'"+(cupom >= 100 || vip === true)+ "'")

console.log("\n=========> Pessoa idosa <=========\n")

const idadeSenhor = 99 // A pessoa tem 99 anos
const Deficiente = true // A Deficiente
let e 

if(idadeSenhor >= 100 || Deficiente === true){
    e = "sim"
} else {
    e = "não"
}

console.log("A pessoa pode estacionar na vaga de idoso ou deficiente? ", e, "'"+(idadeSenhor >= 100 || Deficiente === true)+ "'")

console.log("\n=========> Pode jogar? <=========\n")

const controlhe = true// tem controle
const consoleGame = true // tem console
let podejogar

if(controlhe == true && consoleGame === true){
    podejogar = "sim"
} else {
    podejogar = "não"
}

console.log("A pessoa pode jogar? ", podejogar, "'"+(controlhe == true && consoleGame === true)+ "'")