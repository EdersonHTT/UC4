type personagens = {
    nome: string, 
    poder: number 
}

export function encontraFortes(personagensDragon:personagens[]) {
    for(let personagem of personagensDragon) {
        if(personagem.poder >= 8000) {
            console.log("O poder de " + personagem.nome + " é de mais de 8000!")
        }
    }
}