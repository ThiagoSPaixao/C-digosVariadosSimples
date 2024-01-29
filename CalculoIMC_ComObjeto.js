/* Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();
        const mensagem = `O seu IMC é: ${imc.toFixed(2)}.`;

        if (imc < 18.5) {
            return `${mensagem} Você está abaixo do peso.`;
        } else if (imc < 25) {
            return `${mensagem} Você está com peso normal.`;
        } else if (imc < 30) {
            return `${mensagem} Você está acima do peso.`;
        } else if (imc < 40) {
            return `${mensagem} Você está obeso.`;
        } else {
            return `${mensagem} Você se encontra em estado de "Obesidade Grave."`;
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
const thiago = new Pessoa('Thiago Souza', 91.5, 1.72);
const juliana = new Pessoa('Juliana', 73, 1.60);

console.log(jose);
console.log(jose.classificarImc());

console.log(thiago);
console.log(thiago.classificarImc());

console.log(juliana);
console.log(juliana.classificarImc());

