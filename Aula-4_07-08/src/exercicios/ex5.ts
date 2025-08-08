export function encontraLendario(pokemons:string[]):void  {
    let i = 0;
    while(true) {
        if(pokemons[i].toLocaleLowerCase() === "mewtwo"){
            console.log("Pokémon lendário encontrado: Mewtwo!");
            break;
        }
        console.log(pokemons[i] + " capiturado")
        i++;
    }
}