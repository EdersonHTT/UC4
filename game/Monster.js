export class Monster {
    name = "Monstro"
    hp = 150
    dano = 15
    forma =`
                   _________    
                  |  ___    |   
                  | |o o|   |   
                  | |_^_|   |   
                  |_________|   
                  ||  | |  ||   
                  ||  | |  ||   
                 /_|__|_|__|_\\ 
                |   ||   ||   | 
                |___||___||___| 
                  |_|     |_|    
                  |_|     |_|    
                 (__)     (__)   
`

    Damage(player){
        let danoDado

        do{
            danoDado = Math.floor(Math.random()*this.dano)

            if(danoDado >= 5){
                break
            }
        }while(true)

        return player.hp - danoDado
    }

}