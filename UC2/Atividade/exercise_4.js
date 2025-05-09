let ask = require("readline-sync")

function resultArithmetic(n1, n2, n3){
    let average = ((n1+n2+n3)/3).toFixed(2)

    if (average >=9.5){
        return "A"
    }else if(average >= 8.5 && average< 9.5){
        return "B"
    }else if(average >= 7 && average < 8.5){   
        return "C"
    }else{
        return "D"
    }

}

function resultWeighted(w1, w2, w3, n1, n2, n3){
    let average = (((w1 * n1) + (w2 * n2) + (w3 * n3)) / (w1 + w2 + w3)).toFixed(2)

    if (average >=9.5){
        return "A"
    }else if(average >= 8.5 && average< 9.5){
        return "B"
    }else if(average >= 7 && average< 8.5){   
        return "C"
    }else{
        return "D"
    }

}

console.clear()

let note1 = Number(ask.question("Note 1: "))
let note2 = Number(ask.question("Note 2: "))
let note3 = Number(ask.question("Note 3: "))

let weight1 = 3
let weight2 = 2
let weight3 = 1

console.clear()

console.log("[1] weighted\n[2] Arithmetic")
let typeAverage = ask.question("Choose an average type: ")

console.clear()

if(typeAverage == "1"){
    console.log(resultWeighted(weight1, weight2, weight3, note1, note2, note3, ))

}else if(typeAverage == "2"){
    console.log(resultArithmetic(note1, note2, note3))

}