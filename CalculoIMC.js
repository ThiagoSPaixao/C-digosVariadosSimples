/* O IMC - Índice de Massa Corporal é um critério da OMS (Organização Mundial da Saúde) 
   para dar a condição de peso de uma pessoa adulta.

   Fórmula do IMC: 
   IMC = peso / (altura * altura)

   Elabora um algorítmo que dado o peso e altura de um adulto, mostre a sua condição
   de acordo com a tabela abaixo:

   IMC em adultos Condição:
   - Abaixo de 18.5 Abaixo do Peso;
   - Entre 18.5 e 25 Peso Normal;
   - Entre 25 e 30 Acima do Peso;
   - Entre 30 e 40 Obeso;
   - Acima de 40 Obesidade Grave;
*/

const peso = 92;
const altura = 1.72;
const imc = peso / Math.pow(altura, 2);

console.log (imc.toFixed(2))

if (imc < 18.5){
    console.log ("O seu IMC é: " + imc.toFixed(2) + " Você está abaixo do peso.")
}

else if (imc >= 18.5 && imc < 25) {
    console.log ("O seu IMC é: " + imc.toFixed(2) + " Você está com peso normal.")
}

else if (imc >= 25 && imc < 30) {
    console.log ("O seu IMC é: " + imc.toFixed(2) + " você está acima do peso.")
}

else if (imc >= 30 && imc < 40) {
    console.log ("O seu IMC é: " + imc.toFixed(2) + " você está obeso.")
}

else {
    console.log ("O seu IMC é: " + imc.toFixed(2) + " Você se encontra em estado de \"Obesidade Grave.\"")
}
