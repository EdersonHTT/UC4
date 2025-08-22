import { Doador } from "./Doador";

export class SistemaEmoCentro {
    private doadores: Doador[] = [];
    
    public casdastrarDoador(): void {
        // solicita os dados do usuario e adiciona um novo doador na lista
    }

    public listarDoador(): void {
        // exibe todos os doadores cadastrados em tabela
    }

    public bucarPorTiposanguineo(): void {
        // solicita todo o tipo sanguinio e exibe doadores compativeis
    }

    public buscarPorDataUltimadoacao(): void{
        // solicita a data dos ultimos doadores cujo a ultima doação foi feita
    }
}