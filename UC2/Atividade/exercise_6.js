function calculateRadius(r){

    return (4/3) * 3.14 * (r**3)

}

let radius = 30
let bulk = calculateRadius(radius)

console.clear()
console.log(`Radius: ${radius}\nBulk: ${bulk}`)