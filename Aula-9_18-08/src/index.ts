import { Animal } from "./Animal";
import { Crocodile } from "./Crocodile";
import { Dog } from "./Dog";
import { Owl } from "./Owl";

const myDog: Dog = new Dog("Gregori", 30);

const myOwl:Owl = new Owl("Shiro", 20);

const myCrocodile:Crocodile = new Crocodile("Crocodile", 100);

myDog.eat();
myDog.bark();

console.log("\n\n")

myOwl.eat();
myOwl.fly();

console.log("\n\n")

myCrocodile.eat();
myCrocodile.swim();

const animals:Array<Animal> = [];

animals.push(myDog, myCrocodile, myOwl);

console.log("\n\n")

for(let i = 0; i < animals.length; i++) {
    animals[i].eat();
}