export class Resta {
    private a: number;
    private b: number;
    constructor (valor1: number, valor2: number){
        this.a= valor1;
        this.b= valor2;
    }
    resultado = () => {
        return (this.a-this.b);
    }
}
