function forGraphic(pX, pY){

    return (Math.sqrt(((pX[0] - pX[1])**2) +  ((pY[0] - pY[1])**2))).toFixed(2)

}

console.log(`Distance: ${forGraphic([5, 6], [2,-7])}`)