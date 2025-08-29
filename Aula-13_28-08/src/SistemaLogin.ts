import { IAutenticavel } from "./IAutenticavel";

export class SistemaLogin implements IAutenticavel {
    user: string = "admin";
    senha: string = "1234";

    autenticar(usuario: string, senha: string): boolean {
        if (usuario === this.user && senha === this.senha) {
            return true;
        }

        return false;
    }
}