export class Jogo {
    private nuAleatorio: number = Math.floor(Math.random() * 100);

    chutar(nu: number, tentativas:number): string {

        if (nu > this.nuAleatorio) {

            return " Muito Alto"
        } else if (nu < this.nuAleatorio) {

            return " Muito Baixo"
        }
        
        return "Parabens! voce acertou o numero " + this.nuAleatorio + " em " + tentativas + " tentativa(s)!"
    }
}