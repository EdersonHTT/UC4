import { Circulo } from "./Circulo";
import { IFuncionario } from "./IFuncionario";
import { ILivro } from "./ILivro";
import { IProduto } from "./IProduto";
import { IUsuario } from "./IUsuario"
import { Quadrado } from "./Quadrado";
import { SistemaLogin } from "./SistemaLogin";

type tipos = {
    nome: string,
    idade: number
}

// Aqui criamos um objeto do tipo IUsuario, ou seja, um objeto que SEGUE AS REGRAS da interface que criamos
const meuUsuario:IUsuario = {
    nome: "Roberto",
    idade: 2
}
console.log(meuUsuario.nome);

function mostrarProduto(produto:IProduto) {
    console.log(produto.nome);
    console.log(produto.valor);
}

const produto:IProduto = {
    nome:"pc",
    valor: 100
}

mostrarProduto(produto);
mostrarProduto({nome:"pc", valor: 100});

const livro: ILivro = {
    titulo: "A Arte da Guerra",
    autor: "Sun Tzu",
    anoPublicacao: 2019,
}

function mostrarLivro(livro:ILivro) {
    console.log(livro.titulo + "\n" + livro.autor + "\n" + livro.anoPublicacao)
}

mostrarLivro(livro);

function calcularBonus(funcionario:IFuncionario):number {
    return funcionario.salario * 0.1;
}
const funcionario1:IFuncionario = {
    nome:"Roberto",
    cargo: "Ux desiner",
    salario: 500
}
console.log("Bonus: " + calcularBonus(funcionario1))

const circulo:Circulo = new Circulo();
const quadrado:Quadrado = new Quadrado();

console.log("Area Circulo: " + circulo.calcularArea(50))
console.log("Area Quadrado: " + quadrado.calcularArea(50))

const sistema:SistemaLogin = new SistemaLogin();

console.log(sistema.autenticar("admin", "1234"))