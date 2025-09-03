import { Forma } from "./Forma";

export class Triangulo extends Forma {
    name:string = "Triangulo";

    calcularArea(h:number, b:number): number {
        return (b * h) / 2;
    }
}