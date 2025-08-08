type personagens = {
    nome: string, 
    jedi: boolean 
}

export function encontraJedis(personagens:personagens[]):void  {
    for(let personagem of personagens) {
        if(personagem.jedi) {
            console.log("Jedi encontrado: " + personagem.nome)
        }
    }
}