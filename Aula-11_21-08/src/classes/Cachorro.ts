import { Animal } from "./Animal";

export class Cachorro extends Animal {
// Sobreescrevendo um metodo
    falar(): void {
        console.log("O cachorro esta latindo")
    }
}