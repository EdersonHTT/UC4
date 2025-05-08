let ask = require("readline-sync")

function chose(menu, code, amount){
    for(let iten of menu){
        if(iten[1] == code){
            return `Oder: ${iten[0].toUpperCase()}\nAmount: ${amount}\nPrice: ${(iten[2] * amount).toFixed(2)}`
        }
    };
}


const menu = [["Rotdog", 100, 1.20], ["Simple Bauru", 101, 1.30], ["Bauru with egg", 102, 1.50], ["Hamburger", 103, 1.20], ["Cheeseburguer", 104, 1.30], ["Coke", 105, 1.00]]

console.clear()
console.log(`--> Menu: 
+----------------+-----+--------+
|     Food       |Code | Price  |
+----------------+-----+--------+
| ${menu[0][0]}         | ${menu[0][1]} | R$${menu[0][2].toFixed(2)} |
| ${menu[1][0]}   | ${menu[1][1]} | R$${menu[1][2].toFixed(2)} |
| ${menu[2][0]} | ${menu[2][1]} | R$${menu[2][2].toFixed(2)} |
| ${menu[3][0]}      | ${menu[3][1]} | R$${menu[3][2].toFixed(2)} |
| ${menu[4][0]}  | ${menu[4][1]} | R$${menu[4][2].toFixed(2)} |
| ${menu[5][0]}           | ${menu[5][1]} | R$${menu[5][2].toFixed(2)} |
+----------------+-----+--------+
`)
console.log(chose(menu, ask.question("Chose a code between 100 to 105: "), Number(ask.question("Amount: "))))