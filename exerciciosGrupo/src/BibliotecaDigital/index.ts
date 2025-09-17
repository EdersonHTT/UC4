import { Biblioteca } from "./Biblioteca"
import { Livro } from "./Livro"
import { Revista } from "./Revista"
import { Artigo } from "./Artigo"

const livro1:Livro = new Livro("J.K Rowling", "Harry Potter", 1997)

const revista1:Revista = new Revista("Avon", 2025, "Agosto");

const artigo1:Artigo = new Artigo("Avon", 2025, "Documento");

const biblioteca:Biblioteca = new Biblioteca();

biblioteca.adicionar(livro1);
biblioteca.adicionar(revista1);
biblioteca.adicionar(artigo1);

livro1.exibir()
revista1.exibir()
artigo1.exibir()
console.log("Publicações: ")
biblioteca.buscarPorTitulo("Harry Potter").forEach(itens => {
    itens.exibir()
})