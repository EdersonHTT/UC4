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
