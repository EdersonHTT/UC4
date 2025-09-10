import read from "readline-sync";
import { Estoque } from "./Estoque";
import { Livro } from "./Livro";
import { Roupa } from "./Roupa";
import { Eletronico } from "./Eletronico";
import { Brinquedo } from "./Brinquedo";

const estoqueLivro:Estoque<Livro> = new Estoque();
const estoqueRoupa:Estoque<Roupa> = new Estoque();
const estoqueEletronico:Estoque<Eletronico> = new Estoque();
const estoqueBrinquedo:Estoque<Brinquedo> = new Estoque();
let condicao: boolean = true;

function cadastrar(escolha: string): string {
    switch(escolha.toLowerCase()) {
        case "livro":
            estoqueLivro.adicionar(new Livro(read.question("Descricao: "), read.question("Autor: "), parseInt(read.question("Valor: "))));
            break;
        case "roupa": 
            estoqueRoupa.adicionar(new Roupa(read.question("Descricao: "), parseInt(read.question("Tamanho: ")), parseInt(read.question("Valor: "))));
            break;
        case "brinquedo":
            estoqueBrinquedo.adicionar(new Brinquedo(read.question("Nome: "), parseInt(read.question("Idade minima: ")), parseInt(read.question("Valor: "))))
            break;
        case "ele.questiotronico":
            estoqueEletronico.adicionar(new Eletronico(read.question("Modelo: "), read.question("Marca: "), parseInt(read.question("Valor: "))))
            break;
        default:
            return "Valor invalido."
    }

    return "Cadastrado com sucesso!"
}

function listar() {
    const estoques = [estoqueBrinquedo, estoqueEletronico, estoqueLivro, estoqueRoupa];

    estoques.forEach(elemento => {
        elemento.listar().forEach((produtos, key) => {
            if(produtos instanceof Livro) {
                key === 0? console.log("===> Livros:") : "Sem titulo.";

                console.log("")
            }
        });
    });
}

do {
    console.clear();

    console.log(`
    ==========> Gerenciador de Produtos < ==========
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
            listar();
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