"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    // O construtor é metodo chamado automaticamente quando criamos um objeto a partir dessa classe. Nele, normalmente, vamos passar valores para os atributos
    function Dog(dogName, dogWeight, dogbreed) {
        this.name = dogName;
        this.weight = dogWeight;
        this.breed = dogbreed;
    }
    Dog.prototype.bark = function () {
        console.log("The dog is barking.");
    };
    Dog.prototype.eat = function () {
        console.log("The dog is eating.");
    };
    return Dog;
}());
exports.Dog = Dog;
