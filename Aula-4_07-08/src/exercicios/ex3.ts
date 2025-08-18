type personagens = {
    Naruto: string,
    Sasuke: string,
    Sakura: string,
    Kakashi: string
}

export function personagensClas(pessoa:personagens):void  {
    for(const personagem in pessoa) {
         console.log(personagem + " pertence ao clã " + pessoa[personagem as keyof typeof pessoa])
    }
}