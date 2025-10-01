export class PerguntaResposta<P, V> {
    quiz:[P,V][] = [];

    adicionar(pergunta:P, resposta:V):void {
        this.quiz.push([pergunta, resposta]);
    }

    mostrarTudo():[P,V][] {
        return this.quiz;
    }
}