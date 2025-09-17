# 📂 Ex1 – Sistema de Missões RPG

Você vai desenvolver um **sistema de missões para um RPG** com Heróis e Vilões.

Cada personagem pode aceitar missões e concluí-las.

- Somente **missões aceitas** podem ser concluídas.
- Missões só podem ser concluídas se o **nível do personagem** for suficiente.
- **Heróis** ganham **honra**.
- **Vilões** ganham **infâmia**.

---

## 📁 Estrutura do Projeto

### Personagem.ts
Classe **abstrata**.

**Atributos:**
- `nome: string` (protected)
- `nivel: number` (protected)
- `missoes: Missao[]` (private)

**Métodos:**
- `aceitarMissao(missao: Missao): void`
- `concluirMissao(missao: Missao): void`
- `status(): void` (**abstract**)

---

### Heroi.ts
Classe **concreta**, herda de `Personagem`.

**Atributo extra:**
- `honra: number`

**Métodos:**
- Sobrescreve `status()`

---

### Vilao.ts
Classe **concreta**, herda de `Personagem`.

**Atributo extra:**
- `infamia: number`

**Métodos:**
- Sobrescreve `status()`

---

### Missao.ts
Classe **Missao**.

**Atributos:**
- `titulo: string`
- `dificuldade: number`

**Métodos:**
- `getTitulo(): string`
- `getDificuldade(): number`

---

### main.ts
- Criar instâncias de **personagens** e **missões**.
- Simular aceitação e conclusão de missões.
- Exibir status dos personagens.

---

## 📌 Conceitos trabalhados
- Herança
- Polimorfismo
- Encapsulamento



---------------------------------------------------





# 📂 Ex2 – Biblioteca Digital

Crie um **sistema que gerencia Livros, Revistas e Artigos** de uma biblioteca digital.

- Cada publicação deve ser exibida de maneira apropriada.
- Permitir **busca por título** (case-insensitive).

---

## 📁 Estrutura do Projeto

### IPublicacao.ts
Interface **IPublicacao**.

**Métodos:**
- `exibir(): void`

---

### Publicacao.ts
Classe **abstrata**, implementa `IPublicacao`.

**Atributos:**
- `titulo: string`
- `ano: number`

**Métodos:**
- `exibir(): void` (**abstract**)

---

### Livro.ts
Classe **concreta**, herda de `Publicacao`.

**Atributo extra:**
- `autor: string`

**Métodos:**
- Sobrescreve `exibir()`

---

### Revista.ts
Classe **concreta**, herda de `Publicacao`.

**Atributo extra:**
- `edicao: string`

**Métodos:**
- Sobrescreve `exibir()`

---

### Artigo.ts
Classe **concreta**, herda de `Publicacao`.

**Atributo extra:**
- `DOI: string`

**Métodos:**
- Sobrescreve `exibir()`

---

### Biblioteca.ts
Classe **Biblioteca**.

**Atributos:**
- `publicacoes: Publicacao[]`

**Métodos:**
- `adicionar(publicacao: Publicacao): void`
- `buscarPorTitulo(titulo: string): Publicacao[]`

---

### main.ts
- Criar instâncias de **Livros, Revistas e Artigos**.
- Testar **exibição** e **busca por título**.

---

## 📌 Conceitos trabalhados
- Interfaces
- Classes abstratas
- Herança
- Polimorfismo


----------------------------


# 📂 Ex3 – Loja Virtual Genérica

Desenvolva uma **loja virtual genérica** que armazene produtos de qualquer categoria.

- Cada produto deve ter pelo menos **nome** e **preço**.
- Subclasses da loja devem exibir produtos de maneira diferente.

---

## 📁 Estrutura do Projeto

### Produto.ts
Interface **Produto**.

**Atributos obrigatórios:**
- `nome: string`
- `preco: number`


---

### Loja.ts
Classe **genérica** `<T extends Produto>`.

**Atributos:**
- `produtos: T[]`

**Métodos:**
- `adicionar(produto: T): void`
- `listar(): T[]`
- `calcularTotal(): number`

---

### LojaDeEletronicos.ts
Classe **concreta**, herda de `Loja<T>`.

- Sobrescreve exibição para mostrar **garantia** do produto.

---

### LojaDeRoupas.ts
Classe **concreta**, herda de `Loja<T>`.

- Sobrescreve exibição para mostrar **tamanho** do produto.

---

### main.ts
- Criar instâncias de lojas e produtos.
- Adicionar produtos.
- Listar produtos.
- Calcular total.

---

## 📌 Conceitos trabalhados
- Generics
- Herança
- Polimorfismo
- Encapsulamento
