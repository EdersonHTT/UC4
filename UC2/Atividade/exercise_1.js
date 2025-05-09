let ask = require("readline-sync")

function forGraphic(p1, p2){

    return (Math.sqrt(((p1[0] - p2[0])**2) +  ((p1[1] - p2[1])**2))).toFixed(2)

}

let p1 = []

console.clear()

p1.push(Number(ask.question("Say the number of x of point 1: ")))
p1.push(Number(ask.question("Say the number of y of point 1: ")))

let p2 = []

console.clear()

p2.push(Number(ask.question("Say the number of x of point 2: ")))
p2.push(Number(ask.question("Say the number of y of point 2: ")))

console.clear()

console.log(`Distance: ${forGraphic(p1, p2)}`)