import { IAutenticavel } from "./IAutenticavel";
import { UsuarioSistema } from "./UsuarioSistema";

export class Administrador extends UsuarioSistema implements IAutenticavel {
    senha:string;

    constructor(nome:string, senha:string) {
        super(nome);
        this.senha = senha;
    }

    autenticar(usuario: string, senha: string): boolean {
        return this.nome === usuario && this.senha === senha;
    }

    acessarPainel(): void {
        console.log("Bem vindo ADM!")
    }
}