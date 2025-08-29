import { IFormaGeometrica } from "./IFormaGeometrica";

export class Quadrado implements IFormaGeometrica {
    calcularArea(l:number): number {
        return l**2;
    }
}