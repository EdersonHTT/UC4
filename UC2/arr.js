arr = ["uva", "maca", "pera"]


console.clear()
console.log(arr)
console.log(`Maca esta na posicao: ${arr.indexOf("maca")}`)
arr.splice(1, 0, "laranja")
console.log(arr)
console.log(`laranja esta na posicao: ${arr.indexOf("laranja")}`)
console.log(`Maca esta na posicao: ${arr.indexOf("maca")}`)
