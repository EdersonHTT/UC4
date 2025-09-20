import { LojaEletronicos } from "./LojaEletronicos";
import { LojaDeRoupas } from "./LojaDeRoupas";
import { Loja } from "./Loja";
import { IProduto } from "./IProduto";
;

const loja:Loja<IProduto> = new Loja();
const lojaEletronicos: LojaEletronicos = new LojaEletronicos();
const lojaRoupa: LojaDeRoupas = new LojaDeRoupas();

lojaEletronicos.adicionar({nome: "PC", preco: 40, garantia: "1 ano"})
lojaEletronicos.adicionar({nome: "Computador", preco: 1000, garantia: "2 ano"})

lojaEletronicos.listar().forEach(item => {
    console.log(`
    Nome: ${item.nome}
    Preco: ${item.preco}
    Garantia: ${item.garantia}
        `)
});
console.log("CalcularTotal Eletronicos: " + lojaEletronicos.calcularTotal())

lojaRoupa.adicionar({nome:"Camisa", preco: 30, tamanho:40})
lojaRoupa.adicionar({nome:"Calcas", preco: 100, tamanho:10})

lojaRoupa.listar().forEach(item => {
    console.log(`
    Nome: ${item.nome}
    Preco: ${item.preco}
    Tamanho: ${item.tamanho}
        `)
});

console.log("CalcularTotal Roupas: " + lojaRoupa.calcularTotal())
