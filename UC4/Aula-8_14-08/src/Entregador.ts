import { Pacote } from "./Pacote";

export class Entregador {
    private nome:string;

    constructor(nome:string) {
        this.nome = nome;
    }

    entregarPacote(pacote:Pacote) {
        console.log(`${this.nome} está entregando um pacote de ${pacote.getPeso()} para ${pacote.getDestino()}`)
    }

    trocarEndereco(pacote:Pacote, endereco:string) {
        pacote.setDestino(endereco);
    }
}