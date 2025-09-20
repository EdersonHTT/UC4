import { Boleto } from "./Boleto";
import { Cartao } from "./Cartao";
import { Pix } from "./Pix";


const boleto:Boleto = new Boleto(100);
const cartao: Cartao = new Cartao(100);
const pix:Pix = new Pix(100);

boleto.pagar(200);
cartao.pagar(200);
pix.pagar(200);