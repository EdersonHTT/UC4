import { Pessoa } from "./Pessoa";

// Classe Doador 
export class Doador extends Pessoa {
   // atributos
   private tipoSangue: string;
   private dataUltimaDoacao: string;

   // Passa os parametros para a superclasse e para os atributos anteriores
   constructor(nome: string, idade: number, peso: number, tipoSangue: string, dataUltimaDoacao: string) {
      super(nome, idade, peso);
      this.tipoSangue = tipoSangue;
      this.dataUltimaDoacao = dataUltimaDoacao;
   }

   // Mostra as informações do doador
   mostrarInfo(): string {
      return `Nome: ${this.getNome()} | Idade: ${this.getIdade()} | Peso: ${this.getPeso()} | Tipo Sanguineo: ${this.tipoSangue} | Ultima doacao: ${this.dataUltimaDoacao}`;
   }

   // Get do atributo sangue
   getTipoSangue(): string {
      return this.tipoSangue;
   }

   // Get do atributo dataUltimaDoação
   getDataUltimaDoacao(): string {
      return this.dataUltimaDoacao;
   } 
}