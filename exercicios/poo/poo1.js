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
        console.log(`Marca......: ${this.marca}`);
        console.log(`Modelo.....: ${this.modelo}`);
        console.log(`Cor........: ${this.cor}`);
        console.log(`Ligado.....: ${this.ligado}`);
        console.log(`Km.........: ${this.km}`);
        console.log(`Combustivel: ${this.combustivel}`);
        console.log('---------------------');
        
    }
}