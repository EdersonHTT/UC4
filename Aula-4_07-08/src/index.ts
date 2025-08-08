// const personagens:string[] = ["Frodo", "Gandalf", "Legolas"];

// // O forEach é usado em arrays
// // Ele serve para executar uma função para cada item deste array
// // Essa função é chamada como parametro do forEach(calback)
// // O primeiro parametro dessa fução

// personagens.forEach((nome, indice)=> {
//     console.log(`Personagens: ${indice}: ${nome}`)
// })

const sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];

import { encontraHobbit } from "./exercicios/ex1";
import { encontraJedis } from "./exercicios/ex2";
import { personagensClas } from "./exercicios/ex3";
import { encontraFortes } from "./exercicios/ex4";
import { encontraLendario } from "./exercicios/ex5";
import { chegarEmMordor } from "./exercicios/ex6";

encontraHobbit(sociedade);

type personagensType = {
    nome: string,
    jedi: boolean
}

const personagens: personagensType[] = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
];

encontraJedis(personagens);

type personagensNarutoType = {
    Naruto: string,
    Sasuke: string,
    Sakura: string,
    Kakashi: string
}

const personagensNaruto: personagensNarutoType = {
    Naruto: 'Uzumaki',
    Sasuke: 'Uchiha',
    Sakura: 'Haruno',
    Kakashi: 'Hatake'
};

personagensClas(personagensNaruto)

type personagensFortes = {
    nome: string, 
    poder: number 
}

const personagensDragon:personagensFortes[] = [
    { nome: 'Goku', poder: 15000 },
    { nome: 'Vegeta', poder: 14999 },
    { nome: 'Krillin', poder: 7500 },
    { nome: 'Freeza', poder: 20000 },
  ];

encontraFortes(personagensDragon)

const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];

encontraLendario(pokemons);

chegarEmMordor();