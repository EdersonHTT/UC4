import read from "readline-sync";
import { Estoque } from "./Estoque";
import { Livro } from "./Livro";
import { Roupa } from "./Roupa";
import { Eletronico } from "./Eletronico";
import { Brinquedo } from "./Brinquedo";

const estoqueLivro: Estoque<Livro> = new Estoque();
const estoqueRoupa: Estoque<Roupa> = new Estoque();
const estoqueEletronico: Estoque<Eletronico> = new Estoque();
const estoqueBrinquedo: Estoque<Brinquedo> = new Estoque();
let condicao: boolean = true;

function cadastrar(escolha: string): string {
    switch (escolha.toLowerCase()) {
        case "livro":
            estoqueLivro.adicionar(new Livro(read.question("Descricao: "), read.question("Autor: "), parseInt(read.question("Valor: "))));
            break;
        case "roupa":
            estoqueRoupa.adicionar(new Roupa(read.question("Descricao: "), parseInt(read.question("Tamanho: ")), parseInt(read.question("Valor: "))));
            break;
        case "brinquedo":
            estoqueBrinquedo.adicionar(new Brinquedo(read.question("Nome: "), parseInt(read.question("Idade minima: ")), parseInt(read.question("Valor: "))));
            break;
        case "ele.questiotronico":
            estoqueEletronico.adicionar(new Eletronico(read.question("Modelo: "), read.question("Marca: "), parseInt(read.question("Valor: "))));
            break;
        default:
            return "Valor invalido.";
    }

    return "Cadastrado com sucesso!";
}

function pegaValorMax(estoques: (Estoque<Livro> | Estoque<Roupa> | Estoque<Eletronico> | Estoque<Brinquedo>)[]): (Estoque<Livro> | Estoque<Roupa> | Estoque<Eletronico> | Estoque<Brinquedo>)[]{
    estoques.forEach(elemento => {
        elemento.listar().forEach((produtos, key) => {
            
        });
    });
}

function filtrar(estoques: (Estoque<Livro> | Estoque<Roupa> | Estoque<Eletronico> | Estoque<Brinquedo>)[]) {
    const todosEstoques = estoques;

    console.clear();
    let resposta: string;
    do {
        console.log(`
        ====> Opcoes de Filtro
        [1] - Menor para o maior
        [2] - Maior para o menor
        [3] - Valor maximo
        [4] - sair
            `);
        resposta = read.question("Escolha uma opcao: ");

        switch (resposta) {
            case "1":
                todosEstoques.sort((a, b) => { return a.listar()[0].preco - b.listar()[0].preco })

                listar(todosEstoques);
                read.question("Enter para continuar...");
                resposta = "4";
                break;
            case "2":
                todosEstoques.sort((a, b) => { return b.listar()[0].preco  - a.listar()[0].preco})

                listar(todosEstoques);
                read.question("Enter para continuar...");
                resposta = "4";
                break
        }
    } while (resposta != "4")
}

function listar(estoques: (Estoque<Livro> | Estoque<Roupa> | Estoque<Eletronico> | Estoque<Brinquedo>)[]) {
    let totalItens = 0;

    estoques.forEach(elemento => {
        elemento.listar().forEach((produtos, key) => {
            totalItens++
            if (produtos instanceof Livro) {
                key === 0 ? console.log("=====> Livros:") : "Sem titulo.";

                console.log(`Descricao: ${produtos.descricao} | Autor: ${produtos.autor} | Valor: ${produtos.preco}`)
            } else if (produtos instanceof Roupa) {
                key === 0 ? console.log("=====> Roupas:") : "Sem titulo.";

                console.log(`Descricao: ${produtos.descricao} | Tamanho: ${produtos.tamanho} | Valor: ${produtos.preco}`)
            } else if (produtos instanceof Eletronico) {
                key === 0 ? console.log("=====> Eletronicos:") : "Sem titulo.";

                console.log(`Modelo: ${produtos.modelo} | Marca: ${produtos.marca} | Valor: ${produtos.preco}`)
            } else {
                key === 0 ? console.log("=====> Brinquedos:") : "Sem titulo.";

                console.log(`Nome: ${produtos.nome} | Idade Minima: ${produtos.idadeMinima} | Valor: ${produtos.preco}`)
            }
        });
    });

    console.log("\n----> Total de itens: " + totalItens + "\n\n")
}

function menuListagem(estoques: (Estoque<Livro> | Estoque<Roupa> | Estoque<Eletronico> | Estoque<Brinquedo>)[]) {
    let resposta: string;
    do {
        console.log(`
    ====> Opcoes
    [1] - Filtrar por valor
    [2] - Primeiro item
    [3] - Voltar
        `);
        resposta = read.question("Escolha uma opcao: ");

        switch (resposta) {
            case "1":
                filtrar(estoques)
                break;
            case "2":

                break
        }
    } while (resposta != "3")
}

do {
    console.clear();

    console.log(`
    ==========> Gerenciador de Produtos <==========
    [1] - Cadrastrar Produto
    [2] - Listar Produtos
    [3] - Remover Produto
    [4] - Sair
    `)

    switch (read.question("Escolha uma Opcao: ")) {
        case "1":
            console.clear();
            console.log(`
    Opções:
    -> Roupa
    -> Eletronico
    -> Livro
    -> Brinquedo
            `);
            console.log(cadastrar(read.question()));
            break;
        case "2":
            console.clear();
            const estoques = [estoqueBrinquedo, estoqueEletronico, estoqueLivro, estoqueRoupa];
            listar(estoques);
            menuListagem()
            break;
        case "3":
            console.clear()

            break;
        case "4":
            console.clear()
            condicao = false
            break;
    }
} while (condicao)