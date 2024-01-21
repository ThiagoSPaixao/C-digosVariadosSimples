/* Faça um algorítimo que dado as 3 notas tiradas por um aluno de um semestre
   da faculdade calcule e imprima a sua média e a sua classificação
   conforme a tabela abaixo;

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, Reprovado;
    - Media entre 5 e 7, Recuperação;
    - Média acima de 7, Aprovado;
*/

const nomeAluno = "Thiago Souza"
const instEnsino = "Faculdade Estácio"
const nota1 = 10
const nota2 = 10
const nota3 = 10
const notaAluno = (nota1 + nota2 + nota3) / 3;

console.log ("Nota do Aluno: " + notaAluno.toFixed(1))

if (notaAluno < 5) {

    console.log ("O Aluno " + nomeAluno + ", da Instituição de Ensino " + instEnsino + ", Está Reprovado.");
    console.log ("Não desista! Gênios também falham. Tente outra vez!")
}   

else if (notaAluno >= 5 && notaAluno < 7) {
    console.log ("O Aluno " + nomeAluno + ", da Instituição de Ensino " + instEnsino + ", Está em Recuperação.");
    console.log ("Você chegou perto! Estude mais um pouco.")
}

else {
    console.log ("O Aluno " + nomeAluno + ", da Instituição de Ensino " + instEnsino + ", Está Aprovado.");
    console.log ("Parabéns! Continue assim que você irá longe! ")
}
