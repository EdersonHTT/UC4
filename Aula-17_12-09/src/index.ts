import { Calculadora } from "./Calculadora";
import { Desenhista } from "./Desenhista";
import { Mensageiro } from "./Mensageiro";
import { Estoque } from "./exs/Estoque";
import { Loja } from "./exs/Loja";

const calc:Calculadora = new Calculadora();

// Passando numbers
calc.somar(1,2);
// Passando strings
calc.somar("Ederson", " da Silva")

const m = new Mensageiro();

m.enviar("Ana", "Oi, tudo bem?");  
// Enviando para: Ana
// Mensagem: Oi, tudo bem?

m.enviar(["João", "Maria"], "Bom dia, galera!");
// Enviando para vários: João, Maria
// Mensagem: Bom dia, galera!

const d = new Desenhista();

d.desenhar(10);       // Desenhando um círculo de raio 10
d.desenhar(20, 30);   // Desenhando um retângulo de 20x30

const loja:Loja = new Loja()

loja.adicionaProduto(["Game", "Pedra"]);
loja.adicionaProduto("Pedregulho");

const estoque:Estoque = new Estoque()

console.log("Produtos: " + estoque.produtos.join(" | "))
estoque.remover("Arroz")
console.log("Produtos: " + estoque.produtos.join(" | "))
estoque.remover(["Macarrão", "Oleo", "Açúcar"])
console.log("Produtos: " + estoque.produtos.join(" | "))