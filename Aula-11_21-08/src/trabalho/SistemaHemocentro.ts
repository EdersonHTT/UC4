import { Doador } from "./Doador";
import { Pessoa } from "./Pessoa";

// Classe responsável por gerenciar o cadastro e listagem de doadores
export class SistemaHemocentro {
    // Array estático que armazena todos os doadores cadastrados
    private static doadores: Doador[] = [];

    // Método para cadastrar um novo doador no sistema
    public static caastrardoadoador(doador: Doador): string {
        this.doadores.push(doador);
        return "Cadastro feito com sucesso";
    }

    // Método para listar todos os doadores cadastrados em formato de tabela
    public static listardoadores(): void {
        console.log("--------------------");
        console.log("LISTAGEM DE DOADORES:");
        console.log("--------------------");
        console.log("NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO");
        console.log("-----------------------------------------------------");
        this.doadores.forEach(d => {
            console.log(
                `${d.getNome()} | ${d.getIdade()} | ${d.getPeso()} | ${d.getTipoSangue()} | ${d.getDataUltimaDoacao()}`
            );
        });
        console.log("-----------------------------------------------------");
    }

    // Método para listar doadores por tipo sanguíneo específico informado
    public static listarPorTipoSangue(tipo: string): void {
        console.log("------------------------");
        console.log(`DOADORES COM TIPO SANGUÍNEO ${tipo}:`);
        console.log("------------------------");
        console.log("NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO");
        console.log("-----------------------------------------------------");
        const encontrados = this.doadores.filter(d => d.getTipoSangue() === tipo);
        encontrados.forEach(d => {
            console.log(
                `${d.getNome()} | ${d.getIdade()} | ${d.getPeso()} | ${d.getTipoSangue()} | ${d.getDataUltimaDoacao()}`
            );
        });
        console.log("-----------------------------------------------------");
    }

    // Método para listar doadores por data da última doação específica informada
    public static listarPorDataUltimaDoacao(data: string): void {
        console.log("------------------------");
        console.log(`DOADORES COM ÚLTIMA DOAÇÃO EM ${data}:`);
        console.log("------------------------");
        console.log("NOME | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO");
        console.log("-----------------------------------------------------");
        const encontrados = this.doadores.filter(d => d.getDataUltimaDoacao() === data);
        encontrados.forEach(d => {
            console.log(
                `${d.getNome()} | ${d.getIdade()} | ${d.getPeso()} | ${d.getTipoSangue()} | ${d.getDataUltimaDoacao()}`
            );
        });
        console.log("-----------------------------------------------------");
    }
}
