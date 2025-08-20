export class Animal {
    // Protected deixa os atributos serem acessados nas classes filhas, diferente do private que os atributos só são acessados dentro da classe.
    protected name: string;
    protected weight: number;

    constructor(name:string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

    eat():void {
        console.log("The animal is eating!")
    }
}