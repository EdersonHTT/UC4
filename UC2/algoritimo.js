let d = 2
let diD = 6

console.log("area losangolo: "+((d*diD)/2))

let r = 10
let pi = 3.14

console.log("area circulo: "+(pi*(r*r)))

// Media 

let nu1 = 5
let nu2 = 2
let nu3 = 7

console.log("Media: "+ (Math.floor((nu1+nu2+nu3)/3)))

// Celcius para Fahrenheit

let tC = 5

console.log("Celcius para Fahrenheit: "+ (((9*tC)/5)+32))

// Celcius para Kelvin

console.log("Celcius para Kelvin: "+ (tC+273))

// Calculo de IMC

let peso = 60
let altura = 1.75
let imc = 60/(altura*altura)
console.log("\n")

if(imc >= 18.5 && imc <= 24.9){
    console.log("imc medio")
} else if(imc > 24.9){
    console.log("imc alto")
} else {
    console.log("imc baixo")
}

console.log("\n")

// Media e comparação
const nota = require("readline-sync")
let notas = []

for(let i =0; i<3; i++){
    console.clear()
    console.log("Calculo Média\n")
    notas.push(Number(nota.question(`Nota ${i}: `)))
}

let medio = (notas[0]+notas[1]+notas[2])/3
medio = medio.toFixed(2)

if(medio >= 9){
    console.log(`Média: ${medio} \nConceito: A`)
} else if(medio >= 7.5 && medio < 9){
    console.log(`Média: ${medio} \nConceito: B`)
} else if(medio >= 6 && medio < 7){
    console.log(`Média: ${medio} \nConceito: C`)
} else {
    console.log(`Média: ${medio} \nConceito: D`)
}

// loop

for(let i =0; i<=1000; i++){
    if((i%2)=== 0){
        console.log(i + " é par")
    }
}