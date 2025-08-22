export class Pessoa {
    private nome: string;
    private idade: number;
    private peso: number;

    constructor(nome:string, idade:number, peso:number) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }

    mostrarInfo(): string {
        return `Nome: ${this.nome} | Idade: ${this.idade} | Peso: ${this.idade}`;
    }

    getNome(): string {
        return this.nome;
    }

    getIdade(): number {
        return this.idade;
    }

    getPeso(): number {
        return this.peso;
    }
}