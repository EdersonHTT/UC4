import { Animal } from "./Animal";

export class Owl extends Animal{
    constructor(name:string, weight:number) {
        super(name, weight);
    }

    fly():void {
        console.log(`The Owl ${this.name} is flying!`)
    }
}