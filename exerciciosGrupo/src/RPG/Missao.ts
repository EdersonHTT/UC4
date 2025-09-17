export class Missao {
    private titulo: string;
    private dificuldade: number;

    constructor(titulo:string, dificuldade:number) {
        this.titulo = titulo;
        this.dificuldade = dificuldade;
    }

    getTitulo(): string {
        return this.titulo;
    }

    getDificuldade(): number {
        return this.dificuldade;
    }
}