import { Forma } from "./Forma";

export class Retangulo extends Forma {
    name:string = "Retangulo";
    calcularArea(h:number, b:number): number {
        return b * h;
    }
}