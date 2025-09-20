import { Caminhao } from "./SimuladorTrasporte/Caminhao";
import { Carga } from "./SimuladorTrasporte/Carga";
import { Moto } from "./SimuladorTrasporte/Moto";
import { Navio } from "./SimuladorTrasporte/Navio";


const carga:Carga<string> = new Carga("Girafa", 10000);

const caminhao:Caminhao = new Caminhao(100)
const moto:Moto = new Moto()
const navio:Navio = new Navio()

console.log(carga.descricao())
caminhao.trasportar(carga)
moto.trasportar(carga)
navio.trasportar(carga)
