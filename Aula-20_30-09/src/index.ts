
// =================ex1

import { PerguntaResposta } from "./PerguntaResposta";

// function temLength<T extends { length: number }> (par:T):void {
//     if(Array.isArray(par)) {
//         console.log("-> Array:")
//         par.forEach(e => {
//             console.log(e)
//         })
//         return;
//     } 
    
//     let valor:string = '';
//     if(typeof par === "string") valor = par;
//     console.log("-> String:")
//     console.log(valor.split("").join("\n"))
// }

// temLength("tamanho");
// temLength(["s", 1, true]);

// ================ex2

const quiz1:PerguntaResposta<string, boolean> = new PerguntaResposta();

quiz1.adicionar("A lua é cinza?", true);
quiz1.adicionar("O molho do pai do Kaua é bom?", true);
console.log("1\n\n" + quiz1.mostrarTudo().join("\n"));

const quiz2:PerguntaResposta<string, number> = new PerguntaResposta();

quiz2.adicionar("5 + 5?", 10);
quiz2.adicionar("60 + 7?", 67);
console.log("2\n\n" + quiz2.mostrarTudo().join("\n"));

interface Pergunta {
    titulo: string;
    categoria: string;
}

interface Resposta {
    resposta: string;
    pontos: number;
}

const quiz3:PerguntaResposta<Pergunta, Resposta> = new PerguntaResposta();

quiz3.adicionar(
    {titulo: "Quanto é 10 mais 10?", categoria: "Matematica"}, 
    {resposta: "10", pontos: 10}
);
console.log("3\n\n");

quiz3.mostrarTudo().forEach(e => {
    e.forEach(obj => {
        console.log(obj);
    })
    console.log("\n\n")
})