import { Cla } from "./desafios/ClasKonoha/Cla";
import { ClaAkimichi } from "./desafios/ClasKonoha/ClaAkimichi";
import { ClaHyuuga } from "./desafios/ClasKonoha/ClaHyuuga";
import { ClaNara } from "./desafios/ClasKonoha/ClaNara";
import { ClaUchiha } from "./desafios/ClasKonoha/ClaUchiha";

const clas:Cla[] = [
    new ClaNara("Nara", "Shikaku Nara"),
    new ClaUchiha("Uchiha", "Fugaku Uchiha"),
    new ClaAkimichi("Akimichi", "Chōza Akimichi"),
    new ClaHyuuga("Hyuuga", "Hiashi Hyūga")
];

clas.forEach(element => {
    element.exibirDetalhes();
    element.habilidadeEspecial();
});