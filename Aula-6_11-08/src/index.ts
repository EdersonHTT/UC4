import read from "readline-sync";

function soma(nu1:number, nu2:number):number {
    return nu1 + nu2;
}

function subtracao(nu1:number, nu2:number):number {
    return nu1 - nu2;
}

function multiplicacao(nu1:number, nu2:number):number {
    return nu1 * nu2;
}


function dividir(nu1:number, nu2:number):number {
    if (nu1 === 0 || nu2 === 0) {
        return -1;
    }

    return nu1 / nu2;       
}


let rodando:boolean = true
do {
    console.clear()
    console.log(`
====== CALCULADORA ======
1 - Somar
2 - Subtrair
3 - Multiplicar
4 - Dividir
5 - Sair

    `)

    switch(read.question("fazer: ")) {
        case "1": 
            console.clear()
            let somado = soma(parseInt(read.question("Digite um valor (1): ")), parseInt(read.question("Digite um valor (2): ")));
            console.log("A soma fica: " + somado);
            read.question("Enter para continuar... ")
            break;
        case "2":
            console.clear()
            let subtraido = subtracao(parseInt(read.question("Digite um valor (1): ")), parseInt(read.question("Digite um valor (2): ")));
            console.log("A subtracao fica: " + subtraido);
            read.question("Enter para continuar... ")
            break;
        case "3":
            console.clear()
            let multiplicado = multiplicacao(parseInt(read.question("Digite um valor (1): ")), parseInt(read.question("Digite um valor (2): ")));
            console.log("A multiplicacao fica: " + multiplicado);
            read.question("Enter para continuar... ")
            break;
        case "4":
            console.clear()
            let divisao = dividir(parseInt(read.question("Digite um valor (1): ")), parseInt(read.question("Digite um valor (2): ")));
            if (divisao != -1) {
                console.log("A divisao fica: " + divisao);
            } else {
                console.log("Divisao invalida!")
            }
            read.question("Enter para continuar... ")
            break;
        case "5":
            console.clear()
            console.log("Saindo... ")
            rodando = false;
            break;
        default:
            console.clear();
            console.log("Valor invalido!");
            read.question("Enter para continuar...");
        break;
    }
} while(rodando)