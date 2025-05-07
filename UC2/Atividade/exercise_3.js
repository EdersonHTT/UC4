let ask = require("readline-sync")

function chose(menu, code, amount){
    for(let iten of menu){
        if(iten[1] == code){
            return `Oder: ${iten[0].toUpperCase()}\nAmount: ${amount}\nPrice: ${(iten[2] * amount).toFixed(2)}`
        }
    };
}


const menu = [["Rotdog", 100, 1.20], ["Simple Bauru", 101, 1.30], ["Bauru with egg", 102, 1.50], ["Hamburger", 103, 1.20], ["Cheeseburguer", 104, 1.30], ["Coke", 105, 1.00]]

console.log(`Menu: 
+----------------+-----+-------+
| ${menu[0][0]}         | ${menu[0][1]} | R$${menu[2][2]} |
| ${menu[1][0]}   | ${menu[1][1]} | R$${menu[2][2]} |
| ${menu[2][0]} | ${menu[1][1]} | R$${menu[2][2]} |
+----------------+-----+-------+
`)
console.log(chose(menu, ask.question("A code between 100 to 105: "), Number(ask.question("Amount: "))))