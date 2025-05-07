let ask = require("readline-sync")

function deposit(balance, value) {

    return balance += value

}

function withdrawal(balance, value) {

    if(value <= balance){
        return balance -= value
    } else {
        return false
    }

}

let balance = 2000
let bankOpen = true


do {
    console.clear()

    console.log("===========> The Bank! <===========\n\n")
    console.log(`===> You Current Balance: ${balance}\n\n`)
    console.log("[1] -> Deposit\n[2] -> Withdrawal\n[3] -> Leave\\n\n")

    switch(ask.question("Take action: ")){
        case "1":
            console.clear()

            balance = deposit(balance, Number(ask.question("Chose a value: ")))

            console.log(`\n\n===> Current Balance: ${balance}\n\n`)
            ask.question("Enter to continue")
        break
        case "2":
            console.clear()

            let response = withdrawal(balance, Number(ask.question("Choose an amount to be withdrawn: ")))

            if(response === false){
                console.log("\n\n===> Insufficient Balance\n\n")
            } else {
                balance = response
                console.log(`\n\n===> Current Balance: ${balance}\n\n`)
            }
            ask.question("Enter to continue")

        break
        case "3":
            bankOpen = false
        break
    }

}while(bankOpen)