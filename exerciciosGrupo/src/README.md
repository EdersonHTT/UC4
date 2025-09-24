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


---


# 📂 Ex4 – Sistema de Pagamentos

Crie um **sistema de pagamentos** com **Cartão, Pix e Boleto**.

- Cada método deve se comportar de forma diferente.
- Cartão deve suportar **sobrecarga** (parcelado ou à vista).



## 📁 Estrutura do Projeto

### IPagamento.ts
Interface **IPagamento**.

**Métodos:**
- `pagar(valor: number): void`

### Pagamento.ts
Classe **abstrata**.

**Atributos:**
- `valor: number`

**Métodos:**
- `pagar(valor: number): void` (**abstract**)

---

### Cartao.ts
Classe **concreta**, herda de `Pagamento`.

**Sobrecarga:**
- `pagar(valor: number)` → pagamento à vista
- `pagar(valor: number, parcelas: number)` → pagamento parcelado

---

### Pix.ts
Classe **concreta**, herda de `Pagamento`.

- `pagar()` gera **código aleatório** para pagamento.

---

### Boleto.ts
Classe **concreta**, herda de `Pagamento`.

- `pagar()` simula **prazo de compensação** do boleto.

---

### main.ts
- Testar os diferentes tipos de pagamento.

---

## 📌 Conceitos trabalhados
- Interfaces
- Classes abstratas
- Polimorfismo
- Sobrecarga de métodos

---------

# 📂 Ex5 – Simulador de Transporte de Cargas

Crie um **sistema para transportar cargas** usando veículos variados (**Moto, Caminhão, Navio**).

- Cada veículo possui **limite de peso**.
- O sistema deve **impedir transporte acima da capacidade**.
- Cada veículo deve **exibir mensagem personalizada** ao transportar.

---

## 📁 Estrutura do Projeto

### Veiculo.ts
Classe **abstrata**.

**Atributos:**
- `capacidade: number`

**Métodos:**
- `transportar<T>(carga: Carga<T>): void` (**abstract**)

---

### Caminhao.ts
Classe **concreta**, herda de `Veiculo`.

- Sobrescreve `transportar()`, verifica limite de carga.

---

### Moto.ts
Classe **concreta**, herda de `Veiculo`.

- Sobrescreve `transportar()`, verifica limite (≤ 30kg).

---

### Navio.ts
Classe **concreta**, herda de `Veiculo`.

- Sobrescreve `transportar()`, verifica limite (≤ 100000kg).

---

### Carga.ts
Classe **genérica** `<T>`.

**Atributos:**
- `item: T`
- `peso: number`

**Métodos:**
- `descricao(): string`![Alt text](https://doki.assets.unthrottled.io/stickers/jetbrains/v2/reZero/beatrice/beatrice.png)

---

### main.ts
- Criar instâncias de veículos.
- Criar cargas de tipos diferentes.
- Testar transporte, incluindo tentativas de exceder a capacidade.

---

## 📌 Conceitos trabalhados
- Classes abstratas
- Herança
- Polimorfismo
- Encapsulamento
- Generics
