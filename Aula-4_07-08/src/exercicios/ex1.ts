export function encontraHobbit(nomes:string[]):void  {
    for(let i = 0; i < nomes.length; i++) {
        if(nomes[i].toLocaleLowerCase() === "frodo" || nomes[i].toLocaleLowerCase() === "sam" || nomes[i].toLocaleLowerCase() === "merry" ||  nomes[i].toLocaleLowerCase() === "pippin") {
            console.log(`Hobbit encontrado: ${nomes[i]}`);
        }
    }
}