export class Calculadora {
    //Aqui crio Assinaturas de Método
    // Ou seja, defino COMO este método pode ser chamado
    somar(a:number, b:number):void; // Assinatura que pode receber dois numeros
    somar(a:string, b:string):void; // Assinatura que pode receber dois numeros

    //Aqui crio a IMPLEMENTAÇÂO DO MÉTODO
    // Ou seja, DEFINO sua lógica

    somar(a:any, b:any):any {
        console.log(a + b);
    }
}