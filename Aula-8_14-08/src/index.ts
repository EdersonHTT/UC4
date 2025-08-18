import { Entregador } from "./Entregador";
import { Pacote } from "./Pacote";
import { Pessoa } from "./Pessoa";


const entregandor = new Entregador("Douglas");
const pacote = new Pacote("Porto Velho", 1000)

entregandor.entregarPacote(pacote)
entregandor.trocarEndereco(pacote, "Sapucaia")
entregandor.entregarPacote(pacote)
