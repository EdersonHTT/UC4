process.stdin.setRawMode(true)
process.stdin.resume()
process.stdin.setEncoding('utf8')

function inventory(key, player, itemNames, choiceUse, previous) {
    
    
    for (let i = 0; i < player.inventory.length; i++) {

        if (itemNames.length < 1 || !itemNames.includes(player.inventory[i].name)) {

            if(player.inventory[0] === player.inventory[i]){

                seeItens.push("-> "+player.inventory[i].name) 
                itemNames.push(player.inventory[i].name)    
            } else {

                seeItens.push("   "+player.inventory[i].name) 
                itemNames.push(player.inventory[i].name)
            }
        }
    }

    

    if(itemNames.length > 0){
        
        if(!itemSelected){

            if (key === "\u000D") {

                itemSelected = true
                toAction = 0
                key = " "
            } else if (key === "w" && choiceItems > 0 && choiceItems <= seeItens.length - 1 && seeItens.length != 1) {

                choiceItems -= 1

                seeItens[choiceItems + 1] = "   "+player.inventory[choiceItems + 1].name
                seeItens[choiceItems] = `-> ${itemNames[choiceItems]}`
            } else if (key === "s" && choiceItems < seeItens.length - 1 && choiceItems >= 0 && seeItens.length != 1) {

                choiceItems += 1

                seeItens[choiceItems - 1] = "   "+player.inventory[choiceItems - 1].name
                seeItens[choiceItems] = `-> ${itemNames[choiceItems]}`
            }

                    console.clear()
                    console.log(`    ______________________________
    |                            |    
    |                            |
    |                            |
    |      ${seeItens.join("        |\n   |       ")}        |
    |                            |
    |                            |
    |                            |
    ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`)
        } else {

            if (key === "a" && choiceLinear > 0 && choiceLinear <= choiceUse.length - 1) {

                choiceLinear -= 1

                choiceUse[choiceLinear + 1] = previous[choiceLinear + 1]
                choiceUse[choiceLinear] = `\x1b[30;47m${choiceUse[choiceLinear]}\x1b[0m`
            } else if (key === "d" && choiceLinear < choiceUse.length - 1 && choiceLinear >= 0) {

                choiceLinear += 1

                choiceUse[choiceLinear - 1] = previous[choiceLinear - 1]
                choiceUse[choiceLinear] = `\x1b[30;47m${choiceUse[choiceLinear]}\x1b[0m`
            }

            if(key === "\u000D" && enterPress){

                if(choiceLinear === 0){

                    // equip()
                } else {

                    itemSelected = false
                    enterPress = false
                }
            }

            console.clear()
            console.log(`  ______________________________
  |                            |
  |                            |
  |       ${seeItens.join("        |\n|       ")}        |
  |                            |
  |                            |
  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
__________________________________
|                                |
| ${choiceUse.join("  ")} |
|                                |
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`)
            enterPress = true
        }
    } else {

        console.clear()
        console.log(`______________________________
|                            |    
|                            |
|                            |
|     There are no items     |
|                            |
|                            |
|                            |
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`)
    }
}

function menuOpen(menu, key) {

    if (key === "\u000D") {

        if (choice === 0) {

        } else if (choice === 1) {

            browsing = "inventory"
            keyPress = " "
        } else if (choice === 2) {

        } else if (choice === menu.length - 1) {

            console.clear()
            process.exit()
        }
    } else if (key === "w" && choice > 0 && choice <= menu.length - 1) {

        choice -= 1

        menu[choice + 1] = previous[choice + 1]
        menu[choice] = `\x1b[30;47m${menu[choice]}\x1b[0m`
    } else if (key === "s" && choice < menu.length - 1 && choice >= 0) {

        choice += 1

        menu[choice - 1] = previous[choice - 1]
        menu[choice] = `\x1b[30;47m${menu[choice]}\x1b[0m`
    }

    console.clear()
    console.log(`______________________________
|                            |    
|                            |
|                            |
|       ${menu.join("        |\n|       ")}        |
|                            |
|                            |
|                            |
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`)
}

function seeMap(map) {

    let copy = [[], [], [], [], [], [], [], [], [], []]

    for (let i = 0; i < copy.length; i++) {

        for (let k = 0; k < map[i].length; k++) {

            copy[i].push(`\x1b[42m${map[i][k]}\x1b[0m`)
        }

        if (copy.indexOf(copy[i]) === 0) {

            console.log("______________________________")
            console.log(`|${copy[i].join("\x1b[42m  \x1b[0m")}|`)
        } else if (copy.indexOf(copy[i]) === copy.length - 1) {

            console.log(`|${copy[i].join("\x1b[42m  \x1b[0m")}|`)
            console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")
        } else {

            console.log(`|${copy[i].join("\x1b[42m  \x1b[0m")}|`)
        }
    }
}

function move(map, direction, forms, player, items) {
    let horizontal = 0
    let vertical = 0

    if (direction === "w") {
        vertical = -1
    } else if (direction === "d") {
        horizontal = 1
    } else if (direction === "s") {
        vertical = 1
    } else if (direction === "a") {
        horizontal = -1
    }

    for (let i = 0; i < map.length; i++) {

        for (let k = 0; k < map[i].length; k++) {

            if (map[i][k] === forms[2] && map.includes(map[(i + vertical)]) && map[(i + vertical)].includes(map[(i + vertical)][(k + horizontal)])) {

                if (map[(i + vertical)][(k + horizontal)] != forms[0] && map[(i + vertical)][(k + horizontal)] != forms[1] && map[(i + vertical)][(k + horizontal)] != forms[3]) {

                    let temp = map[(i + vertical)][(k + horizontal)]
                    map[(i + vertical)][(k + horizontal)] = map[i][k]
                    map[i][k] = temp
                    return
                } else if (map[(i + vertical)][(k + horizontal)] === forms[1]) {


                    map[(i + vertical)][(k + horizontal)] = map[i][k]
                    map[i][k] = " "
                    return
                } else if (map[(i + vertical)][(k + horizontal)] === forms[3]) {

                    if (map.indexOf(map[i]) === 0, map[i].indexOf(map[i][k]) === 9) {

                        player.inventory.push(items[0])
                        map[(i + vertical)][(k + horizontal)] = map[i][k]
                        map[i][k] = " "
                    } else if (map.indexOf(map[i]) === 3, map[i].indexOf(map[i][k]) === 4) {

                        player.inventory.push({ ...items[1] })

                        for (let v = 0; v < player.inventory.length; v++) {

                            if (player.inventory[v].potion === "life") {

                                player.inventory[v].amount += 3
                            }
                        }
                        map[(i + vertical)][(k + horizontal)] = map[i][k]
                        map[i][k] = " "
                        return
                    }

                    return
                }
            }
        }
    }
}

function toMap(key) {

    move(map, key, [tree, monster, formP, item], player, items)
    console.clear()
    seeMap(map)
}

function start(key) {

    if (key === "\u001B" && escCount === 0) {

        browsing = "menu"
        escCount += 1
        itemSelected = false
        enterPress = false
    } else if (key === "\u001B" && escCount === 1) {

        escCount -= 1
        browsing = "toMap"
        itemSelected = false
        enterPress = false
    }

    if(browsing === "toMap"){

        toMap(key)
    }
    if(browsing === "menu"){

        menuOpen(menu, key)
    }
    if(browsing === "inventory"){

        inventory(key, player, itemNames, choiceUse, previousItems, seeItens)
    }
}

let tree = "\x1b[92m▲\x1b[0m"
let monster = "\x1b[31m■\x1b[0m"
let item = "\x1b[34m°\x1b[0m"
let formP = "\x1b[37m●\x1b[0m"

let map = [
    [monster, tree, tree, " ", " ", " ", monster, " ", tree, item],
    [" ", tree, " ", " ", " ", " ", " ", tree, tree, monster],
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

    name: "",
    hp: 100,
    damage: 5,
    inventory: []
}

let items = [

    { name: "sword", damage: 10, type: "weapon"},

    { name: "life potion", heal: 10,  amount: 0, type: "potion" }, 

    { name: "strength potion", buff: 15, shifts: 3, amount: 0, type: "potion" }, 

    { name: "helmet", hp: 5, type: "helmet"}, 

    { name: "chestplate", hp: 10, type: "chestplate"},

    { name: "pants", hp: 10, type: "pants"},

    { name: "boots", hp: 5, type: "boots"}
]

let menu = ["\x1b[30;47m[  Status   ]\x1b[0m", "[ Inventory ]", "[ Equipment ]", "[   Leave   ]"]
let choice = 0
let previous = ["[  Status   ]", "[ Inventory ]", "[ Equipment ]", "[   Leave   ]"]

let itemNames = []
let seeItens = []
let choiceItems = 0
let choiceLinear = 0
let choiceUse = ["\x1b[30;47m[    Use    ]\x1b[0m", "[    Leave    ]"]
let previousItems = ["[    Use    ]", "[    Leave    ]"]
let itemSelected = false
let enterPress = false

let escCount = 0
let browsing = "toMap"
let keyPress

console.clear()
seeMap(map)

process.stdin.on('data', (key) => {
    keyPress = key
    start(keyPress)
})