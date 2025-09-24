import { Dog } from "./Dog";
import { Owl } from "./Owl";

const myDog: Dog = new Dog("Gregori", 30);

myDog.eat();
myDog.bark();

const myOwl:Owl = new Owl("Shiro", 20);

myOwl.eat();
myOwl.fly();