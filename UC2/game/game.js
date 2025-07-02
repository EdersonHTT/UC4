process.stdin.setRawMode(true)
process.stdin.resume()
process.stdin.setEncoding('utf8')

import Monster from "./Monster.js";

function EndGame(){
    console.clear()
    console.log(`
  _____________________________
  |                           |
  |                           |
  |     Thank you for play    |
  |                           |
  |                           |
  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
    `)
}

function endBatlle(win) {
    if(!win){
        browsing = "toMap"
        keyPress = " "

        map = [
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

        start()
    } else {
        browsing = "toMap"
        keyPress = " "
        turnPlayer = false

        map[postionMonter[0]][postionMonter[1]] = " "
        sum = 1
        hit = 0
        reductionDamage = 0
        percentageDamage = 0
        formMonster = 0
        load = false
        inFight = false
        start()
    }

    let have = false
    for(let i = 0; i < map.length; i++){
        for(let k = 0; k < map[i].length; k++){
            if(map[i][k] === monster){
                have = true
            
            }
        }
    }
    if(!have){
        endGame = true
        EndGame()

        setTimeout(() => {
            console.clear()
            process.exit()
        }, 1000);
    }
}

function damagePlayer(){
    if(keyPress === "\u000D"){
        clearInterval(interval)

        interval = setInterval(() => {
            keyPress = " "
        }, 200);
        if(hit <= 2 || hit >= damageRange.length-4){
            reductionDamage = Math.floor(player.damage - (player.damage/2.5))

        } else if(hit > 2 && hit <= 4 || hit >= 7 && hit < damageRange.length-4){
            reductionDamage = Math.floor(player.damage - (player.damage/1.5))

        } else {
            reductionDamage = 0

        }

        load = true
        
        let damageGiven = player.damage - reductionDamage

        percentageDamage = Math.floor(((enemy.hp - damageGiven)/ enemy.hpMax) * 100)

        if(player.hp > 0){
            enemy.hp -= damageGiven

        }

        if(enemy.hp <= 0){
            for(let i = 0; i < enemy.bar.length; i++){
                enemy.bar[i] = " "

            }

            endBatlle(true)
            return
        }
        
        if(enemy.hp <= (enemy.hpMax/3)){
            formMonster = 2

        }

        console.clear()
        console.log("\n   => "+enemy.name)
        console.log("                     ______________________")
        console.log("               Life: |"+enemy.bar.join("")+"| "+Math.floor((enemy.hp / enemy.hpMax)*100)+"%")
        console.log("                     ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")
        console.log(enemy.forma[1])
        console.log(`______________________________________________________________
|                                                            |`)
        let descriptionPlayer = `|         You take ${damageGiven} of damage`
        while(true){
            if(descriptionPlayer.length <= 60){
            descriptionPlayer += " "
            } else {
                break
            }

        }
        
            console.log(descriptionPlayer+"|")

            console.log(`|                                                            |
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`)

        keyPress = " "
        turnPlayer = false

        setTimeout(() => {
            let damageReceived = enemy.Damage(player)

            if(enemy.hp > 0){
                player.hp -= damageReceived
            }

            if(player.hp === 0){
                for(let i = 0; i < player.bar.length; i++){
                    player.bar[i] = " "

                }

                
                endBatlle(false)
                return
            }

            console.clear()
            console.log("\n   => "+enemy.name)
            console.log("                     ______________________")
            console.log("               Life: |"+enemy.bar.join("")+"| "+Math.floor((enemy.hp / enemy.hpMax)*100)+"%")
            console.log("                     ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")
            console.log(enemy.forma[3])
            console.log(`______________________________________________________________
|                                                            |`)
            let description = `|         You take ${damageReceived} of damage`
            while(true){
                if(description.length <= 60){
                description += " "
                } else {
                    break
                }

            }

            console.log(description+"|")

           console.log(`|                                                            |
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`)
            console.log("            ______________________")
            console.log("  You Life: |"+player.bar.join("")+"| "+Math.floor((player.hp / player.hpMax)*100)+"%")
            console.log("            ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")

            if(player.hp <= 0){
                player.hp = 0
            }

            setTimeout(() => {
                load = false
                clearInterval(interval)
                fight(menuFight, player)
                return
            }, 1000);
        }, 1000);

    }else if (turnPlayer && keyPress === " "){
        interval = setInterval(()=>{
        if(hit === 0){
            sum = 1

        } else if(hit === damageRange.length-1){
            sum = -1

        }

        hit += sum

        copy[hit] = "\x1b[47m \x1b[0m"
        copy[hit-sum] = damageRange[hit-sum]

        console.clear()
        console.log("\n   => "+enemy.name)
        console.log("                     ______________________")
        console.log("               Life: |"+enemy.bar.join("")+"| "+Math.floor((enemy.hp / enemy.hpMax)*100)+"%")
        console.log("                     ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")
        console.log(enemy.forma[formMonster]+"\n")
        console.log("                  | "+copy.join(" ")+" |\n")

        
    }, 50)}
}

function fight(menuFight, player){

    if(!turnPlayer && !load){

        if(battleStart){
            battleStart = false
            keyPress = " "
            enemy = new Monster()
        }

        if (keyPress === "\u000D") {
            if (chooseAction === 0) {
                
                keyPress = " "
                turnPlayer = true
                fight(menuFight, player)
                return
            } else if (chooseAction === 1) {

                browsing = "inventory"
                keyPress = " "
            } else if (chooseAction === 2) {

                browsing = "equipment"
                keyPress = " "
            } else if(chooseAction === 3) {
                
                browsing = "status"
                keyPress = " "
            } else if(chooseAction === 4) {
                
                browsing = "toMap"
                inFight = false
                keyPress = " "
                start()
                return
            }

        } else if (keyPress === "a" && chooseAction > 0 && chooseAction <= menuFight.length - 1 && menuFight.length != 1) {

            chooseAction -= 1

            chosenAction[chooseAction + 1] = menuFight[chooseAction + 1]
            chosenAction[chooseAction] = `\x1b[30;47m${menuFight[chooseAction]}\x1b[0m`
        } else if (keyPress === "d" && chooseAction < menuFight.length - 1 && chooseAction >= 0 && menuFight.length != 1) {

            chooseAction += 1

            chosenAction[chooseAction - 1] = menuFight[chooseAction - 1]
            chosenAction[chooseAction] = `\x1b[30;47m${menuFight[chooseAction]}\x1b[0m`
        }   

        let porcentLife = Math.floor((player.hp / player.hpMax)*100)

        if(percentageDamage){
            let lifeTaken = Math.floor(((100-percentageDamage) / 100) * enemy.bar.length-1)
            
            let lifeTakenPlayer = Math.floor(((100-porcentLife) / 100) * player.bar.length-1)


            if(enemy.hp === 0){
                for(let i = 0; i < enemy.bar.length; i++){
                    enemy.bar[i] = " "

                }

            } else if(player.hp === 0){
                for(let i = 0; i < player.bar.length; i++){
                    player.bar[i] = " "

                }

            } else {
                for(let i = 0; i < lifeTaken; i++){
                    enemy.bar[enemy.bar.length-1-i] = " "

                }

                for(let i = 0; i < lifeTakenPlayer; i++){
                    player.bar[enemy.bar.length-1-i] = " "

                }

            }

            percentageDamage = 0
        }

        console.clear()
        console.log("\n   => "+enemy.name)
        console.log("                     ______________________")
        console.log("               Life: |"+enemy.bar.join("")+"| "+Math.floor((enemy.hp / enemy.hpMax)*100)+"%")
        console.log("                     ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")
        console.log(enemy.forma[formMonster])
        console.log(`______________________________________________________________
|                                                            |
| ${chosenAction.join(" ")} |
|                                                            |
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`)
        console.log("            ______________________")
        console.log("  You Life: |"+player.bar.join("")+"| "+porcentLife+"%")
        console.log("            ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")

    } else if(turnPlayer && !load){

        damagePlayer()
    }

}

function seeStatus(player){

    statusPlayer = [
        `hp: ${player.hp}`,
        `damage: ${player.damage}`,
    ]

    let textName = player.name + " Status:"

    console.clear()
    console.log("  ______________________________")
    console.log("  |                            |")
        
    for(let s = 0; textName.length < 26;  s++){

        textName += " "
    }

    console.log("  |  "+ textName +"|")
    console.log("  |                            |")

    for(let i = 0; i < statusPlayer.length; i++){
        let spaceNu = 20
        let spaces = ""
        let fullText

        let valor = spaceNu - statusPlayer[i].length
        valor = Math.floor(valor / 2)

        for(let v = 0; v < valor; v++){

            spaces += " "
        }

        fullText = statusPlayer[i] + spaces

        if(fullText.length < 19){

            for(let s = 0; fullText.length < 19;  s++){

                fullText += " "
            }
        }

        fullText += "|"

        console.log("  |         " + fullText)
    }

    console.log("  |                            |")
    console.log("  |                            |")
    console.log("  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")

}

function desuse(itemNu){

    if(justEquipped.includes(justEquipped[itemNu])){

        for(let b = 0; b < buffs.length; b++){

            if(justEquipped[itemNu][buffs[b]]){

                if(justEquipped[itemNu][buffs[b]] === "hp"){

                    player["hpMax"] -= justEquipped[itemNu][buffs[b]]
                }
                player[buffs[b]] -= justEquipped[itemNu][buffs[b]]
            }
        }

        player.inventory.push(justEquipped[itemNu])

        for(let i = 0; i < player.equipment.length; i++){

            if(player.equipment[i] === justEquipped[itemNu]){

                player.equipment[i] = "slot empty"
            }
        }

        
        justEquipped.splice(itemNu, 1)
    } 
}


function use(itemNu) {

    if(player.inventory[itemNu].name === "life potion"){

        if(player.hp < player.hpMax){
            player.hp += player.inventory[itemNu].heal

            if(player.hp > player.hpMax){

                player.hp = player.hpMax
            }

            player.inventory[itemNu].amount -= 1
                
            if(player.inventory[itemNu].amount <= 0){

                player.inventory.splice(itemNu, 1)
            } 
        }
        
    } else {

        for(let i = 0; i < player.equipment.length; i++){

            if(player.inventory[itemNu].type === slots[i]){

                if(!player.equipment.includes(player.inventory[itemNu])){

                    for(let b = 0; b < buffs.length; b++){

                        if(player.inventory[itemNu][buffs[b]]){

                            if(player.inventory[itemNu][buffs[b]] === "hp"){

                                player["hpMax"] += player.inventory[itemNu][buffs[b]]
                            }
                            player[buffs[b]] += player.inventory[itemNu][buffs[b]]
                        }
                    }

                    player.equipment[i] = player.inventory[itemNu]
                    player.inventory.splice(itemNu, 1)
                } else {

                    for(let b = 0; b < buffs.length; b++){

                        if(player.inventory[itemNu][buffs[b]]){

                            if(player.inventory[itemNu][buffs[b]] === "hp"){

                                player["hpMax"] += player.inventory[itemNu][buffs[b]]
                            }

                            player[buffs[b]] += player.inventory[itemNu][buffs[b]]
                        }

                        if(player.equipment[i][buffs[b]]){

                            if(player.inventory[itemNu][buffs[b]] === "hp"){

                                player["hpMax"] -= player.equipment[i][buffs[b]]
                            }

                            player[buffs[b]] -= player.equipment[i][buffs[b]]
                        }
                    }
                    
                    player.inventory.push(player.equipment[i])
                    player.equipment[i] = player.inventory[itemNu]
                    player.inventory.splice(itemNu, 1)
                }
            }
        }
    }

    itemNames = []
    seeItens = []
    inventory(player, choiceUse, previous)
}

function seeEquipment(player, choiceUnUse, previous) {

    if(choiceEquip >= player.equipment.length){

        choiceEquip = 0
    }
    
    for (let i = 0; i < player.equipment.length; i++) {

        if(player.equipment[i].name) {

            if(!equpedNames.includes(player.equipment[i].name)){

                if(equpedNames.length === 0){

                    justEquipped.push(player.equipment[i]) 
                    seeEquped.push("-> "+player.equipment[i].name) 
                    equpedNames.push(player.equipment[i].name)    
                } else {

                    justEquipped.push(player.equipment[i]) 
                    seeEquped.push("   "+player.equipment[i].name) 
                    equpedNames.push(player.equipment[i].name)
                }
            }

        }
    }

    if(equpedNames.length > 0){
        if(!itemSelected){

            if (keyPress === "\u000D") {

                itemSelected = true
                keyPress = " "
            } else if (keyPress === "w" && choiceEquip > 0 && choiceEquip <= seeEquped.length - 1 && seeEquped.length != 1) {

                choiceEquip -= 1

                seeEquped[choiceEquip + 1] = "   "+equpedNames[choiceEquip + 1]
                seeEquped[choiceEquip] = `-> ${equpedNames[choiceEquip]}`
            } else if (keyPress === "s" && choiceEquip < seeEquped.length - 1 && choiceEquip >= 0 && seeEquped.length != 1) {

                choiceEquip += 1

                seeEquped[choiceEquip - 1] = "   "+equpedNames[choiceEquip - 1]
                seeEquped[choiceEquip] = `-> ${equpedNames[choiceEquip]}`
            }

                console.clear()

                console.log("  ______________________________")
                console.log("  |                            |")
                console.log("  |                            |")
                
                
                for(let i = 0; i < seeEquped.length; i++){
                    let spaces = ""
                    let fullText

                    let valor = 23 - seeEquped[i].length
                    valor = Math.floor(valor / 2)

                    for(let v = 0; v < valor; v++){

                        spaces += " "
                    }

                    fullText = seeEquped[i] + spaces

                    if(fullText.length < 22){

                        for(let s = 0; fullText.length < 22;  s++){

                            fullText += " "
                        }
                    }

                    fullText += "|"

                    console.log("  |      " + fullText)
                }

                console.log("  |                            |")
                console.log("  |                            |")
                console.log("  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")
                
                console.log("__________________________________")
                console.log("|                                |")
                    
                for(let x = 0; x <= statusItens.length; x++){
                    
                    if(choiceEquip < justEquipped.length && justEquipped[choiceEquip].hasOwnProperty(statusItens[x])){
                        let show = statusItens[x]+": " + justEquipped[choiceEquip][statusItens[x]]
                        let spaces = ""
                        let fullText

                        let valor = 21 - show
                        valor = Math.floor(valor / 2)

                        for(let v = 0; v < valor; v++){

                            spaces += " "
                        }

                        fullText = show + spaces

                        if(fullText.length < 21){

                            for(let s = 0; fullText.length < 21;  s++){

                                fullText += " "
                            }

                        fullText += "|"

                        console.log("|           " + fullText)
                        }
                    }
                }

            console.log("|                                |")
            console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")
        } 
        
        if(itemSelected){

            if (keyPress === "a" && linearUnUse > 0 && linearUnUse <= choiceUnUse.length - 1) {

                linearUnUse -= 1

                choiceUnUse[linearUnUse + 1] = previous[linearUnUse + 1]
                choiceUnUse[linearUnUse] = `\x1b[30;47m${choiceUnUse[linearUnUse]}\x1b[0m`
            } else if (keyPress === "d" && linearUnUse < choiceUnUse.length - 1 && linearUnUse >= 0) {

                linearUnUse += 1

                choiceUnUse[linearUnUse - 1] = previous[linearUnUse - 1]
                choiceUnUse[linearUnUse] = `\x1b[30;47m${choiceUnUse[linearUnUse]}\x1b[0m`
            }

            if(keyPress === "\u000D"){

                if(linearUnUse === 0){

                    
                    desuse(choiceEquip)
                    itemSelected = false
                    keyPress = " "
                    equpedNames = []
                    seeEquped = []
                    choiceUnUse = ["\x1b[30;47m[    Unuse    ]\x1b[0m", "[    Leave    ]"]
                    previousEquipped = ["[    Unuse    ]", "[    Leave    ]"]
                    seeEquipment(player, choiceUnUse, previousEquipped)
                    return
                } else {

                    itemSelected = false
                    keyPress = " "
                    seeEquipment(player, choiceUnUse, previousEquipped)
                    return
                }
            }

            console.clear()
            console.log("  ______________________________")
            console.log("  |                            |")
            console.log("  |                            |")
                
                
            for(let i = 0; i < seeEquped.length; i++){
                let spaces = ""
                let fullText

                let valor = 23 - seeEquped[i].length
                valor = Math.floor(valor / 2)

                for(let v = 0; v < valor; v++){

                    spaces += " "
                }

                fullText = seeEquped[i] + spaces

                if(fullText.length < 22){

                    for(let s = 0; fullText.length < 22;  s++){

                        fullText += " "
                    }
                }

                fullText += "|"

                console.log("  |      " + fullText)
            }

            console.log("  |                            |")
            console.log("  |                            |")
            console.log("  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")

            console.log(`__________________________________
|                                |
| ${choiceUnUse.join("")} |
|                                |
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`)
        }
    } else {
        
        console.clear()
        console.log(`  ______________________________
  |                            |    
  |                            |
  |                            |
  |     There are no items     |
  |          equipped          |
  |                            |
  |                            |
  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`)
    }
}

function inventory(player, choiceUse, previous) {

    if(choiceItems >= player.inventory.length){
        choiceItems = 0
    }
    
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

            if (keyPress === "\u000D") {

                itemSelected = true
                keyPress = " "
            } else if (keyPress === "w" && choiceItems > 0 && choiceItems <= seeItens.length - 1 && seeItens.length != 1) {

                choiceItems -= 1

                seeItens[choiceItems + 1] = "   "+player.inventory[choiceItems + 1].name
                seeItens[choiceItems] = `-> ${itemNames[choiceItems]}`
            } else if (keyPress === "s" && choiceItems < seeItens.length - 1 && choiceItems >= 0 && seeItens.length != 1) {

                choiceItems += 1

                seeItens[choiceItems - 1] = "   "+player.inventory[choiceItems - 1].name
                seeItens[choiceItems] = `-> ${itemNames[choiceItems]}`
            }

                console.clear()

                console.log("  ______________________________")
                console.log("  |                            |")
                console.log("  |                            |")
                
                
                for(let i = 0; i < seeItens.length; i++){
                    let spaces = ""
                    let fullText

                    let valor = 23 - seeItens[i].length
                    valor = Math.floor(valor / 2)

                    for(let v = 0; v < valor; v++){

                        spaces += " "
                    }

                    fullText = seeItens[i] + spaces

                    if(fullText.length < 22){

                        for(let s = 0; fullText.length < 22;  s++){

                            fullText += " "
                        }
                    }

                    fullText += "|"

                    console.log("  |      " + fullText)
                }

                console.log("  |                            |")
                console.log("  |                            |")
                console.log("  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")

                console.log("__________________________________")
                console.log("|                                |")
                    
                for(let x = 0; x <= statusItens.length; x++){
                    
                    if(choiceItems < player.inventory.length && player.inventory[choiceItems].hasOwnProperty(statusItens[x])){
                        let show = statusItens[x]+": " + player.inventory[choiceItems][statusItens[x]]
                        let spaces = ""
                        let fullText

                        let valor = 21 - show
                        valor = Math.floor(valor / 2)

                        for(let v = 0; v < valor; v++){

                            spaces += " "
                        }

                        fullText = show + spaces

                        if(fullText.length < 21){

                            for(let s = 0; fullText.length < 21;  s++){

                                fullText += " "
                            }

                        fullText += "|"

                        console.log("|           " + fullText)
                        }
                    }
                }

                console.log("|                                |")
                console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")
        } 
        
        if(itemSelected){

            if (keyPress === "a" && choiceLinear > 0 && choiceLinear <= choiceUse.length - 1) {

                choiceLinear -= 1

                choiceUse[choiceLinear + 1] = previous[choiceLinear + 1]
                choiceUse[choiceLinear] = `\x1b[30;47m${choiceUse[choiceLinear]}\x1b[0m`
            } else if (keyPress === "d" && choiceLinear < choiceUse.length - 1 && choiceLinear >= 0) {

                choiceLinear += 1

                choiceUse[choiceLinear - 1] = previous[choiceLinear - 1]
                choiceUse[choiceLinear] = `\x1b[30;47m${choiceUse[choiceLinear]}\x1b[0m`
            }

            if(keyPress === "\u000D"){

                if(choiceLinear === 0){

                    itemSelected = false
                    keyPress = " "
                    itemNames = []
                    seeItens = []
                    use(choiceItems)
                    return
                } else {

                    itemSelected = false
                    keyPress = " "
                    inventory(player, choiceUse, previous)
                    return
                }
            }

            console.clear()
            console.log("  ______________________________")
            console.log("  |                            |")
            console.log("  |                            |")
                
                
            for(let i = 0; i < seeItens.length; i++){
                let spaces = ""
                let fullText

                let valor = 23 - seeItens[i].length
                valor = Math.floor(valor / 2)

                for(let v = 0; v < valor; v++){

                    spaces += " "
                }

                fullText = seeItens[i] + spaces

                if(fullText.length < 22){

                    for(let s = 0; fullText.length < 22;  s++){

                        fullText += " "
                    }
                }

                fullText += "|"

                console.log("  |      " + fullText)
            }

            console.log("  |                            |")
            console.log("  |                            |")
            console.log("  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")

            console.log(`__________________________________
|                                |
| ${choiceUse.join("  ")} |
|                                |
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`)
        }
    } else {

        console.clear()
        console.log(`  ______________________________
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
    if(!endGame){
        if (key === "\u000D") {

            if (choice === 0) {
                
                browsing = "status"
                keyPress = " "
            } else if (choice === 1) {

                browsing = "inventory"
                keyPress = " "
            } else if (choice === 2) {

                browsing = "equipment"
                keyPress = " "
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
    }   
    console.clear()
    console.log(`  ______________________________
  |                            |    
  |                            |
  |                            |
  |       ${menu.join("        |\n  |       ")}        |
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

            console.log("  ______________________________")
            console.log(`  |${copy[i].join("\x1b[42m  \x1b[0m")}|`)
        } else if (copy.indexOf(copy[i]) === copy.length - 1) {

            console.log(`  |${copy[i].join("\x1b[42m  \x1b[0m")}|`)
            console.log("  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾")
        } else {

            console.log(`  |${copy[i].join("\x1b[42m  \x1b[0m")}|`)
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

                    postionMonter = [(i + vertical), (k + horizontal)]
                    browsing = "fight"
                    battleStart = true
                    fight(menuFight, player)

                    return
                } else if (map[(i + vertical)][(k + horizontal)] === forms[3]) {

                    if (map.indexOf(map[i + vertical]) === 0 && map[i].indexOf(map[i][k + horizontal]) === 9) {
                        player.inventory.push(items[0])
                        map[(i + vertical)][(k + horizontal)] = map[i][k]
                        map[i][k] = " "

                    } else if (map.indexOf(map[i + vertical]) === 4 && map[i].indexOf(map[i][k + horizontal]) === 4) {
                        player.inventory.push({ ...items[1] })

                        for (let v = 0; v < player.inventory.length; v++) {

                            if (player.inventory[v].name === "life potion") {
                                player.inventory[v].amount += 3
                            }
                        }
                        map[(i + vertical)][(k + horizontal)] = map[i][k]
                        map[i][k] = " "
                        return
                    }
                    console.log(map[(i + vertical)][(k + horizontal)])
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

function start() {

    if (keyPress === "\u001B" && escCount === 0 && !inFight) {

        browsing = "menu"
        escCount += 1
        itemSelected = false

        menu = ["\x1b[30;47m[  Status   ]\x1b[0m", "[ Inventory ]", "[ Equipment ]", "[   Leave   ]"]
        choice = 0

        itemNames = []
        seeItens = []
        choiceItems = 0
        choiceLinear = 0
        choiceUse = ["\x1b[30;47m[    Use    ]\x1b[0m", "[    Leave    ]"]
    } else if (keyPress === "\u001B" && escCount === 1 && !inFight) {

        escCount -= 1
        browsing = "toMap"
        itemSelected = false
    } else if (keyPress === "\u001B" && inFight) {

        browsing = "fight"
        itemSelected = false
    }

    if(browsing === "toMap"){

        toMap(keyPress)
    }

    if(browsing === "menu"){

        menuOpen(menu, keyPress)
    }

    if(browsing === "fight"){

        inFight = true
        fight(menuFight, player)
    }

    if(browsing === "inventory"){

        inventory(player, choiceUse, previousItems, seeItens)
    }

    if(browsing === "equipment"){

        seeEquipment(player, choiceUnUse, previousEquipped)
    }

    if(browsing === "status"){

        seeStatus(player)
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

    name: "Ederson",
    hp: 100,
    hpMax: 100,
    damage: 100,
    inventory: [],
    equipment: ["slot empty", "slot empty", "slot empty", "slot empty", "slot empty"],
    bar: ["█", "█", "█", "█", "█", "█", "█", "█", "█", "█", "█", "█", "█", "█", "█", "█", "█", "█", "█", "█"]
}

let items = [

    { name: "sword", damage: 10, type: "weapon"},

    { name: "life potion", heal: 10,  amount: 0, type: "potion" }, 

    { name: "helmet", hp: 5, type: "helmet"}, 

    { name: "chestplate", hp: 10, type: "chestplate"},

    { name: "pants", hp: 10, type: "pants"},

    { name: "boots", hp: 5, type: "boots"}
]
let statusItens = ["heal", "amount", "buff",  "shifts",  "hp", "damage"]

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

let slots = ["helmet", "chestplate", "pants", "boots", "weapon"]
let buffs = ["hp", "damage"]
let choiceUnUse = ["\x1b[30;47m[    Unuse    ]\x1b[0m", "[    Leave    ]"]
let previousEquipped = ["[    Unuse    ]", "[    Leave    ]"]
let equpedNames = []
let seeEquped = []
let justEquipped = []
let linearUnUse = 0
let choiceEquip = 0

let statusPlayer = []

let escCount = 0
let browsing = "toMap"
let keyPress

let menuFight = ["[ ❤ Fight ]", "[ Inventory ]", "[ Equipment ]", "[ Status ]", "[ Run ]"]
let chosenAction = ["\x1b[30;47m[ ❤ Fight ]\x1b[0m", "[ Inventory ]", "[ Equipment ]", "[ Status ]", "[ Run ]"]
let chooseAction = 0
let inFight = false
let battleStart = false
let turnPlayer = false
let enemy

let damageRange = [
  "\x1b[100m \x1b[0m",
  "\x1b[100m \x1b[0m",
  "\x1b[100m \x1b[0m", 
  "\x1b[43m \x1b[0m", 
  "\x1b[43m \x1b[0m", 
  "\x1b[41m \x1b[0m", 
  "\x1b[41m \x1b[0m", 
  "\x1b[43m \x1b[0m", 
  "\x1b[43m \x1b[0m", 
  "\x1b[100m \x1b[0m",
  "\x1b[100m \x1b[0m",
  "\x1b[100m \x1b[0m"
]
let copy = [
  "\x1b[47m \x1b[0m",
  "\x1b[100m \x1b[0m",
  "\x1b[100m \x1b[0m", 
  "\x1b[43m \x1b[0m", 
  "\x1b[43m \x1b[0m", 
  "\x1b[41m \x1b[0m", 
  "\x1b[41m \x1b[0m", 
  "\x1b[43m \x1b[0m", 
  "\x1b[43m \x1b[0m", 
  "\x1b[100m \x1b[0m",
  "\x1b[100m \x1b[0m",
  "\x1b[100m \x1b[0m"
]
let sum = 1
let hit = 0
let reductionDamage = 0
let percentageDamage
let interval
let formMonster = 0
let load = false
let postionMonter
let endGame = false

seeMap(map)

process.stdin.on('data', (key) => {

    keyPress = key
    start()
})