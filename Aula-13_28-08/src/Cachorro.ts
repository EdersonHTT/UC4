import { IAnimal } from "./IAnimal";

export class Cachorro implements IAnimal{
    nome: string;

    constructor(nome:string) {
        this.nome = nome;
    }

    emitirSom(): void {
        console.log("AUAU")
    }


	public get $nome(): string {
		return this.nome;
	}

	public set $nome(value: string) {
		this.nome = value;
	}

}