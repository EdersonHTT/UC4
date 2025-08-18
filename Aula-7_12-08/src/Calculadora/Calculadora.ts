
export class Calculadora {
    nu1:number;
    nu2:number;

    constructor(nu1:number, nu2:number) {
        this.nu1 = nu1;
        this.nu2 = nu2;
    }

    soma():number {
        return this.nu1 + this.nu2;
    }
    
    subtracao():number {
        return this.nu1 - this.nu2;
    }
    
    multiplicacao():number {
        return this.nu1 * this.nu2;
    }
    
    
    dividir():number {
        if (this.nu1 === 0 || this.nu2 === 0) {
            return -1;
        }
    
        return this.nu1 / this.nu2;       
    }
    
}