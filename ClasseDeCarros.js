/* Crie uma Classe para representar carros:
Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
Crie um método que dado a quantidade de KM e o preço do combustível, nos dê o valor
gasto em reais para realizado este percurso. */

class Carro {
    marca;
    modelo;
    cor;
    gastoMedioPorKM;

    constructor (marca, modelo, cor, gastoMedioPorKM){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcularGastoDePercurso(distanciaEmKM, precoCombustivel){
        return distanciaEmKM * this.gastoMedioPorKM * precoCombustivel;
    }
}


const carro1 = new Carro ('Fiat', 'Uno', 'Azul', 1/12);
console.log(carro1.calcularGastoDePercurso(70 , 5))

const carro2 = new Carro ('Fiat', 'Palio', 'amarelo', 1/10)
console.log(carro2.calcularGastoDePercurso(87 , 5.49))

const carro3 = new Carro ('Chevrolet', 'Onix', 'Prata', 1/11)
console.log(carro3.calcularGastoDePercurso(100, 6))
