let ask = require("readline-sync")

function salaryIncrease(salary, position){
    let newSalary

    console.clear()
    
    if(position === "Manager"){
        newSalary = (salary + ((salary*10)/100)).toFixed(2)
        return `Old Salary: R$${(salary).toFixed(2)}\nNew Salary: R$${newSalary}\nSalary Difference: R$${newSalary - salary}`

    } else if(position === "Technical"){
        newSalary = (salary + ((salary*20)/100)).toFixed(2)
        return `Old Salary: R$${(salary).toFixed(2)}\nNew Salary: R$${newSalary}\nSalary Difference: R$${newSalary - salary}`

    } else if(position === "Engineer"){
        newSalary = (salary + ((salary*30)/100)).toFixed(2)
        return `Old Salary: R$${(salary).toFixed(2)}\nNew Salary: R$${newSalary}\nSalary Difference: R$${newSalary - salary}`

    } else {
        newSalary = (salary + ((salary*40)/100)).toFixed(2)
        return `Old Salary: R$${(salary).toFixed(2)}\nNew Salary: R$${newSalary}\nSalary Difference: R$${newSalary - salary}`

    }
}

console.clear()
console.log("Manager => +10%\nTechnical => +20%\nEngineer => +30%\nOther  => +40%\n")

console.log(salaryIncrease(Number(ask.question("Your salary: ")), ask.question("Your position: ")))

