export class Pessoa {
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): void {
        console.log("Meu nome é " + this.nome + " e minha idade é " + this.idade)
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getNome(): string {
        return this.nome;
    }

    setIdade(idade: number): void {
        if (idade >= 0) {
            this.idade = idade;
        } else {
            console.log("valor invalido")
        }
    }

    getIdade(): number {
        return this.idade;
    }
}