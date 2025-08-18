export class Dog {
    // Atributos de um cachorro
    name:string
    weight:number
    breed:string

    // O construtor é metodo chamado automaticamente quando criamos um objeto a partir dessa classe. Nele, normalmente, vamos passar valores para os atributos
    constructor(dogName:string, dogWeight:number, dogbreed:string){
        this.name = dogName
        this.weight = dogWeight
        this.breed = dogbreed
    }
    bark():void {
        console.log("The dog is barking.")
    }
    eat():void {
        console.log("The dog is eating.")
    }
}