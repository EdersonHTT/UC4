let senha = "Aoisora8"

if(senha.length >= 8){
    if(/[A-Z]/.exec(senha)){
        if(/[0-9]/.test(senha)){
            console.log("Senha está ótima")
        }else {
            console.log("senha falta numeros")
        }
    } else {
        console.log("senha falta letras maiusculas")
    }
} else {
    console.log("senha muito pequena")
}