import { IFormaGeometrica } from "./IFormaGeometrica";

export class Circulo implements IFormaGeometrica {
    calcularArea(r:number): number {
        return (r**2)*3.14159;
    }
}