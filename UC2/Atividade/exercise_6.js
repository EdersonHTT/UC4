let ask = require("readline-sync")

function calculateRadius(r){

    return (4/3) * 3.14 * (r**3)

}

console.clear()

let radius = Number(ask.question("Tell the radius of the sphere: "))
let bulk = calculateRadius(radius)

console.clear()
console.log(`Radius: ${radius}\nBulk: ${bulk}`)