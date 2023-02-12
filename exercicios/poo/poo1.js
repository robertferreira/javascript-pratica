export class Carro{

    constructor(marca, modelo, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ligado = false;
        this.km = 0;
        this.combustivel = 10;
    }

    info(){
        console.log(`A cor do carro é: ${this.cor}`);
    }
}