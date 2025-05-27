process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf8');

function seeMap(map){

    let copy = [[], [], [], [], [], [], [], [], [], []]

    for(let i = 0; i < copy.length; i++){

        for(let k = 0; k < map[i].length; k++){

            copy[i].push(`\x1b[42m${map[i][k]}\x1b[0m`)
        }

        if(copy.indexOf(copy[i]) === 0){

            console.log("______________________________")
            console.log(`|${copy[i].join("\x1b[42m  \x1b[0m")}|`)
        } else if(copy.indexOf(copy[i]) === copy.length-1){

            console.log(`|${copy[i].join("\x1b[42m  \x1b[0m")}|`)
            console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")
        } else {

            console.log(`|${copy[i].join("\x1b[42m  \x1b[0m")}|`)
        }
    }
}

function move(map, direction, forms){
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

            if(map[i][k] === forms[2] && map.includes(map[(i+vertical)]) && map[(i+vertical)].includes(map[(i+vertical)][(k + horizontal)])){

                if(map[(i + vertical)][(k + horizontal)] != forms[0] && map[(i+vertical)][(k+horizontal)] != forms[1] && map[(i+vertical)][(k+horizontal)] != forms[3]){
                    
                    let temp = map[(i+vertical)][(k+horizontal)]
                    map[(i+vertical)][(k+horizontal)] = map[i][k]
                    map[i][k] = temp
                    return
                } else if(map[(i+vertical)][(k+horizontal)] === forms[1]){

                    map[(i+vertical)][(k+horizontal)] = map[i][k]
                    map[i][k] = " "
                }
            }
        }
    }
}

function start(){    

    console.clear()
    seeMap(map)
    process.stdin.on('data', (tecla) => {
        
        if(tecla != "\u001B"){
            
            move(map, tecla, [tree, monster, formP, item])
            console.clear()

            seeMap(map)
        } else {

            process.exit()
        }
            
    })
}

let tree = "\x1b[92m▲\x1b[0m"
let monster = "\x1b[31m■\x1b[0m"
let item = "\x1b[34m°\x1b[0m"
let formP = "\x1b[37m●\x1b[0m"

let map = [
    [monster, tree, tree, " ", " ", " ", monster, " ", tree, item],
    [" ", tree, " ", " ", " ", " ", " ", tree, tree, " "],
    [" ", tree, " ", " ", " ", " ", " ", " ", tree, " "],
    [" ", " ", " ", " ", tree, tree, " ", " ", " ", " "],
    [" ", " ", " ", " ", item, tree, " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", tree, " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", tree, " ", " ", " ", " ", " ", " ", " ", " "],
    [tree, tree, " ", " ", " ", " ", " ", " ", " ", tree],
    [monster, " ", " ", " ", " ", " ", " ", formP, tree, tree],
]

let player = {

    nome: "",
    hp: 100,
    inventory: []
}

start()
