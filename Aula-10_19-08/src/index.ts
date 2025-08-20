import { Carro } from "./Carro";
import { ContaPoupanca } from "./ContaPoupanca";
import { Guerreiro } from "./Guerreiro";

const heroi = new Guerreiro(100);
const vilao = new Guerreiro(80);

heroi.atacar(vilao);
// vilao.sofrerDano(5); // ❌ ERRO: método protected não acessível fora da classe ou subclasses

const carro:Carro = new Carro(30);

console.log(carro.getVelociade());
carro.acelerar(20);
console.log(carro.getVelociade());

const conta:ContaPoupanca = new ContaPoupanca(1000);

console.log("\n\n"+conta.getSaldo());
conta.aplicarJuros(20);
console.log(conta.getSaldo());
