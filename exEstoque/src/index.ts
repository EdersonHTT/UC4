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
        case "1":
            estoqueRoupa.adicionar(new Roupa(read.question("Descricao: "), parseInt(read.question("Tamanho: ")), parseInt(read.question("Valor: "))));
            break;
        case "2":
            estoqueEletronico.adicionar(new Eletronico(read.question("Modelo: "), read.question("Marca: "), parseInt(read.question("Valor: "))));
            break;
        case "3":
            estoqueLivro.adicionar(new Livro(read.question("Descricao: "), read.question("Autor: "), parseInt(read.question("Valor: "))));
            break;
        case "4":
            estoqueBrinquedo.adicionar(new Brinquedo(read.question("Nome: "), parseInt(read.question("Idade minima: ")), parseInt(read.question("Valor: "))));
            break;
        default:
            return "Valor invalido.";
    }

    return "Cadastrado com sucesso!";
}

function remove(escolha:string, indice:number):string {
    switch (escolha.toLowerCase()) {
        case "1":
            estoqueRoupa.remover(indice);
            break;
        case "2":
            estoqueEletronico.remover(indice);
            break;
        case "3":
            estoqueLivro.remover(indice);
            break;
        case "4":
            estoqueBrinquedo.remover(indice);
            break;
        default:
            return "Valor invalido.";
    }

    return "Produto deletado."
}

function buscar(escolha:string): Eletronico[] | Brinquedo[] | Roupa[] | Livro[] | string {
    switch (escolha.toLowerCase()) {
        case "1":
            console.log(`
    ==> Opcoes
    1 -> Autor
    2 -> Preco
            `)
            switch(read.question("Escolha uma opcao: ")) {
                case "1":
                    const autor:string = read.question("Autor: ");
                    return estoqueLivro.buscar(
                        (item) => {
                            return item.autor === autor;
                        }
                    );
                    break;
                case "2":
                    const preco:number = parseInt(read.question("Preco: "));
                    return estoqueEletronico.buscar(
                        (item) => {
                            return item.preco === preco;
                        }
                    );
                    break;
            }
            break;
        case "2":
            console.log(`
    ==> Opcoes
    1-> Tamanho
    2-> Preco
            `)
            switch(read.question("Escolha uma opcao: ")) {
                case "1":
                    const tamanho:number = parseInt(read.question("Tamanho: "));
                    return estoqueRoupa.buscar(
                        (item) => {
                            return item.tamanho === tamanho;
                        }
                    );
                    break;
                case "2":
                    const preco:number = parseInt(read.question("Preco: "));
                    return estoqueEletronico.buscar(
                        (item) => {
                            return item.preco === preco;
                        }
                    );
                    break;
            }
            break;
        case "3":
            console.log(`
    ==> Opcoes
    1-> Nome
    2-> Idade Minima
    3-> Preco
            `)
            switch(read.question("Escolha uma opcao: ")) {
                case "1":
                    const nome:string = read.question("Nome: ");
                    return estoqueBrinquedo.buscar(
                        (item) => {
                            return item.nome === nome;
                        }
                    );
                    break;
                case "2":
                    const idade:number = parseInt(read.question("Idade Minima: "));
                    return estoqueBrinquedo.buscar(
                        (item) => {
                            return item.idadeMinima >= idade;
                        }
                    );
                    break;
                case "3":
                    const preco:number = parseInt(read.question("Preco: "));
                    return estoqueEletronico.buscar(
                        (item) => {
                            return item.preco === preco;
                        }
                    );
                    break;
            }
            break;
        case "4":
            console.log(`
    ==> Opcoes
    1-> Modelo
    2-> Marca
    3-> Preco
            `)
            switch(read.question("Escolha uma opcao: ")) {
                case "1":
                    const modelo:string = read.question("Modelo: ");
                    return estoqueEletronico.buscar(
                        (item) => {
                            return item.modelo === modelo;
                        }
                    );
                    break;
                case "2":
                    const marca:string = read.question("Marca: ");
                    return estoqueEletronico.buscar(
                        (item) => {
                            return item.marca === marca;
                        }
                    );
                    break;
                case "3":
                    const preco:number = parseInt(read.question("Preco: "));
                    return estoqueEletronico.buscar(
                        (item) => {
                            return item.preco === preco;
                        }
                    );
                    break;
            }
            break;
    }

    return "Nao encontrado"
}

function pegaValorMax(estoques: (Estoque<Livro | Roupa | Eletronico | Brinquedo>)[], valorRef:number): (Estoque<Livro | Roupa | Eletronico | Brinquedo>)[]{
    const estoquesFiltrar = estoques;
    estoquesFiltrar.forEach(elemento => {
        elemento.listar().forEach((produtos, key) => {
            if(produtos.preco > valorRef) {
                elemento.listar().splice(key, 1);
            }
        });
    });

    return estoquesFiltrar;
}

function listar<T>(estoques: (Estoque<Livro | Roupa | Eletronico | Brinquedo>)[] | Estoque<T>, apenasUm?:boolean):void {
    let totalItens = 0;
    console.clear()

    if(Array.isArray(estoques)){
        estoques.forEach(elemento => {
            elemento.listar().forEach((produtos, key) => {
                totalItens++
                if(apenasUm && key === 0){
                    if (produtos instanceof Livro) {
                        key === 0 ? console.log("=====> Livros:") : "Sem titulo.";

                        console.log(`ID: ${key} | Descricao: ${produtos.descricao} | Autor: ${produtos.autor} | Valor: ${produtos.preco}`)
                    } else if (produtos instanceof Roupa) {
                        key === 0 ? console.log("=====> Roupas:") : "Sem titulo.";

                        console.log(`ID: ${key} | Descricao: ${produtos.descricao} | Tamanho: ${produtos.tamanho} | Valor: ${produtos.preco}`)
                    } else if (produtos instanceof Eletronico) {
                        key === 0 ? console.log("=====> Eletronicos:") : "Sem titulo.";

                        console.log(`ID: ${key} | Modelo: ${produtos.modelo} | Marca: ${produtos.marca} | Valor: ${produtos.preco}`)
                    } else {
                        key === 0 ? console.log("=====> Brinquedos:") : "Sem titulo.";

                        console.log(`ID: ${key} | Nome: ${produtos.nome} | Idade Minima: ${produtos.idadeMinima} | Valor: ${produtos.preco}`)
                    }
                } else if(!apenasUm){
                    if (produtos instanceof Livro) {
                    key === 0 ? console.log("=====> Livros:") : "Sem titulo.";

                    console.log(`ID: ${key} | Descricao: ${produtos.descricao} | Autor: ${produtos.autor} | Valor: ${produtos.preco}`)
                    } else if (produtos instanceof Roupa) {
                        key === 0 ? console.log("=====> Roupas:") : "Sem titulo.";

                        console.log(`ID: ${key} | Descricao: ${produtos.descricao} | Tamanho: ${produtos.tamanho} | Valor: ${produtos.preco}`)
                    } else if (produtos instanceof Eletronico) {
                        key === 0 ? console.log("=====> Eletronicos:") : "Sem titulo.";

                        console.log(`ID: ${key} | Modelo: ${produtos.modelo} | Marca: ${produtos.marca} | Valor: ${produtos.preco}`)
                    } else {
                        key === 0 ? console.log("=====> Brinquedos:") : "Sem titulo.";

                        console.log(`ID: ${key} | Nome: ${produtos.nome} | Idade Minima: ${produtos.idadeMinima} | Valor: ${produtos.preco}`)
                    }
                }
            });
        });
    } else {
        estoques.listar().forEach((produtos, key) => {
            totalItens++
            if (produtos instanceof Livro) {
                key === 0 ? console.log("=====> Livros:") : "Sem titulo.";

                console.log(`ID: ${key} | Descricao: ${produtos.descricao} | Autor: ${produtos.autor} | Valor: ${produtos.preco}`)
            } else if (produtos instanceof Roupa) {
                key === 0 ? console.log("=====> Roupas:") : "Sem titulo.";

                console.log(`ID: ${key} | Descricao: ${produtos.descricao} | Tamanho: ${produtos.tamanho} | Valor: ${produtos.preco}`)
            } else if (produtos instanceof Eletronico) {
                key === 0 ? console.log("=====> Eletronicos:") : "Sem titulo.";

                console.log(`ID: ${key} | Modelo: ${produtos.modelo} | Marca: ${produtos.marca} | Valor: ${produtos.preco}`)
            } else if (produtos instanceof Brinquedo) {
                key === 0 ? console.log("=====> Brinquedos:") : "Sem titulo.";

                console.log(`ID: ${key} | Nome: ${produtos.nome} | Idade Minima: ${produtos.idadeMinima} | Valor: ${produtos.preco}`)
            }
        });
    }
    console.log("\n----> Total de itens: " + totalItens + "\n\n")
}

function filtrar(estoques: (Estoque<Livro | Roupa | Eletronico | Brinquedo>)[]) {
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
                todosEstoques.forEach(estoque => {
                    estoque.listar().sort((a, b) => { return a.preco - b.preco})
                })

                listar(todosEstoques);
                read.question("Enter para continuar...");
                resposta = "4";
                break;
            case "2":
                todosEstoques.forEach(estoque => {
                    estoque.listar().sort((a, b) => { return b.preco - a.preco })
                })

                listar(todosEstoques);
                read.question("Enter para continuar...");
                resposta = "4";
                break;
            case "3":
                const estoqueTrocado = pegaValorMax(estoques, parseInt(read.question("Digite o valor maximo de preco: ")));
                listar(estoqueTrocado);
                read.question("Enter para continuar...");
                resposta = "4";
                break;
        }
    } while (resposta != "4")
}

function menuListagem(estoques: (Estoque<Livro | Roupa | Eletronico | Brinquedo>)[]) {
    let resposta: string;
    do {
        console.log(`
    ====> Opcoes
    [1] - Filtrar por valor
    [2] - Primeiro item
    [3] - Buscar
    [4] - Voltar
        `);
        resposta = read.question("Escolha uma opcao: ");

        switch (resposta) {
            case "1":
                filtrar(estoques);
                break;
            case "2":
                listar(estoques, true);
                read.question("Enter para continuar... ")
                break;
            case "3":
                console.clear();
                console.log(`
    Opções:
    1 -> Livro
    2 -> Roupa
    3 -> Brinquedo
    4 -> Eletronico
            `);
                const busca = buscar(read.question("Opcao:"));
                if(Array.isArray(busca)) {
                    const estoqueBusca:Estoque<typeof busca> = new Estoque();
                    estoqueBusca.adicionar(busca);

                    listar(estoqueBusca)
                    console.log(busca.join());
                } else {
                    console.log(busca);
                }
                read.question("Enter para continuar... ");
                break;
        }
    } while (resposta != "4")
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
    1 -> Roupa
    2 -> Eletronico
    3 -> Livro
    4 -> Brinquedo
            `);
            console.log(cadastrar(read.question()));
            read.question("Enter para continuar... ");
            break;
        case "2":
            console.clear();
            const estoques = [estoqueBrinquedo, estoqueEletronico, estoqueLivro, estoqueRoupa];
            listar(estoques);
            menuListagem(estoques)
            break;
        case "3":
            console.clear()
            console.log(`
    Opções:
    1 -> Roupa
    2 -> Eletronico
    3 -> Livro
    4 -> Brinquedo
            `);

            console.log(remove(read.question("Opcao:"), parseInt(read.question("ID do produto: "))));
            read.question("Enter para continuar... ");
            break;
        case "4":
            console.clear()
            condicao = false
            break;
    }
} while (condicao)