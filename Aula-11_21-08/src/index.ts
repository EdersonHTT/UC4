// import { Biciclata } from "./classes/Bicicleta";
// import { Boleto } from "./classes/Boleto";
// import { Cachorro } from "./classes/Cachorro";
// import { Carro } from "./classes/Carro";
// import { CartaoCredito } from "./classes/CartaoCredito";
// import { Gato } from "./classes/Gato";
// import { Pagamento } from "./classes/Pagamento";
// import { Veiculo } from "./classes/Veiculo";

// const cachorro:Cachorro = new Cachorro();
// const gato:Gato = new Gato();

// cachorro.falar();
// gato.falar();

// console.log("\n\n");

// const veiculos:Veiculo[] = [];

// const carro:Carro = new Carro();
// const biciclata:Biciclata = new Biciclata();
// const veiculo:Veiculo = new Veiculo();

// veiculos.push(carro, biciclata, veiculo);

// veiculos.forEach(veiculos => {
//     veiculos.mover();
// });

// console.log("\n\n");

// const pagamentos:Array<Pagamento> = [];

// const pagamento:Pagamento = new Pagamento();
// const boleto: Boleto = new Boleto();
// const cartaoCredito:CartaoCredito = new CartaoCredito();

// pagamentos.push(boleto, cartaoCredito, pagamento);

// pagamentos.forEach(pagar => {
//     pagar.processar();
// });

// Importa classes e o readline-sync
import read from "readline-sync";
import { Pessoa } from "./trabalho/Pessoa";
import { Doador } from "./trabalho/Doador";
import { SistemaHemocentro } from "./trabalho/SistemaHemocentro";

// Classe Date para poder pegar a data de agora
const date:Date = new Date();

// Boolean para poder parar o loop
let rodando = true;
// Loop
do {
    console.clear();
    // Menu de escolha
    console.log(`
    ===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
    1. Cadastrar doador
    2. Listar doadores
    3. Buscar doador por tipo sanguíneo
    4. Buscar doador por data da última doação
    5. Sair
    `)

    // Escolha e verificação da escolha
    switch (read.question("Escolha uma Opcao: ")) {
        case "1":
            console.clear();
            // Valores necessarios para criar o objeto Doador
            const nome:string = read.question("Nome do doador: ");
            const idade:number = parseInt(read.question("Idade: "));
            const peso:number = parseInt(read.question("Peso: "));
            const tipoSangue:string = read.question("Tipo sanguineo: ");
            const ultimaDoacao:string = date.toLocaleDateString("pt-BR");

            // Cadastra o doador na lista da classe SistemaHemocentro e retorna um sucesso
            console.log(SistemaHemocentro.caastrardoadoador(new Doador(nome, idade, peso, tipoSangue, ultimaDoacao)));
            read.question("Enter para continuar... ");
            break;
        case "2":
            console.clear();
            // Imprimi a lista de todos os doadores
            SistemaHemocentro.listardoadores();
            read.question("Enter para continuar... ");
        break;
        case "3":
            console.clear();
            // Faz um procura por tipo sanguineo e imprimi a lista de todos os doadores com aquele tipo
            SistemaHemocentro.listarPorTipoSangue(read.question("Tipo de sangue: "))
            read.question("Enter para continuar... ");
        break;
        case "4":
            console.clear();
            // Faz um procura por data de doação e imprimi a lista de todos os doadores com aquela data
            SistemaHemocentro.listarPorDataUltimaDoacao(read.question("Data da doacao: "))
            read.question("Enter para continuar... ");
        break;
        case "5":
            console.log("Saindo...");
            rodando = false;
        break;
        default:
            console.log("Opcao invalidade");
            read.question("Enter para continuar... ")
        break;
    }

} while(rodando)