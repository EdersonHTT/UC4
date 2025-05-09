let ask = require("readline-sync")

function calculation(a, b, c){
    let r = ( a + b )**2
    let s = ( b + c )**2

    let d = ( r + s )/2

    return d
}

console.clear()

let a = Number(ask.question("Choose a number: "))
let b = Number(ask.question("Choose a number: "))
let c = Number(ask.question("Choose a number: "))

let result = calculation(a, b, c)

console.log("\nThe result of the calculation is: " + result)