export function chegarEmMordor():void {
    let passo = 0;
    const passoParaMordor = 4;

    do {
        passo++
        console.log("Deu " + passo + " passo")
    } while(passo < passoParaMordor)

    console.log("Chegou em Mordor")
}