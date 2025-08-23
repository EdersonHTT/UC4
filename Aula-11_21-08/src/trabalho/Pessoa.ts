// classe 
export class Pessoa {
    private nome: string;
    private idade: number;
    private peso: number;

    // Contrutor para inicializar os atributos da pessoa
    constructor(nome:string, idade:number, peso:number) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }

    // retornar uma string com as informacoes da pessoa
    mostrarInfo(): string {
        return `Nome: ${this.nome} | Idade: ${this.idade} | Peso: ${this.peso}`;
    }

    // retornar o nome da pessoa
    getNome(): string {
        return this.nome;
    }

    // retorna. a idade da pessoa
    getIdade(): number {
        return this.idade;
    }

    // retornar o peso da pessoa
    getPeso(): number {
        return this.peso;
    }
}