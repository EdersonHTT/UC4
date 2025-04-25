const angulo = 100

if(angulo > 0 && angulo < 90){
    console.log("Angulo Agudo")
} else if(angulo === 90){
    console.log("Angulo Reto")
} else if ((angulo > 90 && angulo < 180)){
    console.log("Angulo Obtuso")
} else {
    console.log("Não tem angulo")
}
