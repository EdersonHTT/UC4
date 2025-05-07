function salaryIncrease(salary, position){
    let newSalary
    if(position === "Manager"){
        newSalary = (salary + ((salary*10)/100)).toFixed(2)
        return `Old Salary: R$${(salary).toFixed(2)}\nNew Salary: R$${newSalary}`

    } else if(position === "Technical"){
        newSalary = (salary + ((salary*20)/100)).toFixed(2)
        return `Old Salary: R$${(salary).toFixed(2)}}\nNew Salary: R$${newSalary}`

    } else if(position === "Engineer"){
        newSalary = (salary + ((salary*30)/100)).toFixed(2)
        return `Old Salary: R$${(salary).toFixed(2)}}\nNew Salary: R$${newSalary}`

    } 
}
//Manager, Technical, Engineer
//  10%  -   20%    -   30%

console.log(salaryIncrease(3000, "Manager"))

