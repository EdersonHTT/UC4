let ask = require("readline-sync")

function seeMap(map){

    for(i of map){
        if(map.indexOf(i) === 0){
            console.log("______________________________")
            console.log(`|${i.join("  ")}|`)
        } else if(map.indexOf(i) === map.length-1){
            console.log(`|${i.join("  ")}|`)
            console.log("|____________________________|")
        } else {
            console.log(`|${i.join("  ")}|`)
        }

        
    }
}

function move(map, direction){
    let horizontal = 0
    let vertical = 0

    if(direction === "w"){
        vertical = -1
    } else if(direction === "d"){
        horizontal = 1
    } else if(direction === "s"){
        vertical = 1
    } else if(direction === "a"){
        horizontal = -1
    }

    for(let i = 0; i<map.length; i++){

        for(let k = 0; k<map[i].length; k++){

            if(map[i][k] === "P"){
                if(map.includes(map[(i+vertical)]) && map[(i+vertical)].includes(map[(i+vertical)][(k + horizontal)]) && map[(i + vertical)][(k + horizontal)] != "T" && map[(i+vertical)][(k+horizontal)] != "M" ){
                    ask.question(map[(i)][(k)])
                    ask.question(map[(i+vertical)][(k+horizontal)])
                    let temp = map[(i+vertical)][(k+horizontal)]
                    map[(i+vertical)][(k+horizontal)] = map[i][k]
                    map[i][k] = temp
                    break
                }
            }
        }
    }
}

let map = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", "T", "T", " ", " ", " ", "M", " ", "T", " "],
    [" ", "T", " ", " ", " ", " ", " ", "T", "T", " "],
    [" ", "T", " ", " ", " ", " ", " ", " ", "T", " "],
    [" ", " ", " ", " ", "T", "T", " ", " ", " ", " "],
    ["S", " ", " ", " ", " ", "T", " ", " ", " ", " "],
    ["S", " ", " ", " ", " ", "T", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", "T", " ", " ", " ", " ", " ", " ", " ", " "],
    ["T", "T", " ", " ", " ", " ", " ", " ", " ", "T"],
    ["M", " ", " ", " ", " ", " ", " ", "P", "T", "T"],
]

let conut = 0

while(true){


    console.clear()
    seeMap(map)
    move(map, ask.question("move: "))

    conut++
    if(conut === 999){
        break
    }
}