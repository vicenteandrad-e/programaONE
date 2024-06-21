// Desafio 04
// 1.
console.log("Seja muito bem vindo!");

// 2.
let nome1 = "Vicente";
console.log(`Olá, ${nome1}!`);

// 3.
let nome2 = "Vicente";
alert(`Olá, ${nome2}!`);

// 4.
let resposta = prompt("Qual a linguagem de programação que você mais gosta?");
console.log("A linguagem é: " + resposta);

// 5.
let valor01 = 10;
let valor02 = 5;
let resultadoSoma = valor01 + valor02;
console.log(`A soma de ${valor01} e ${valor02} é igual a ${resultadoSoma}`);

// 6.
let resultadoSubtracao = valor01 - valor02;
console.log(`A diferença entre ${valor01} e ${valor02} é igual a ${resultadoSubtracao}`);

// 7.
let idadeUsuario = prompt("Informe a sua idade: ");
let maiorDeIdade = idadeUsuario >= 18 ? "Você é maior de idade!" : "VocÊ é menor de idade!";
console.log(maiorDeIdade);

// 8.
let numero = prompt("Digite um número: ");
if(numero > 0) {
    alert("O número é positivo!");
} else if (numero < 0) {
    alert("O número é negativo!");
} else {
    alert("O número é ZERO!");
}

// 9.
let contador = 0;
while(contador <= 10) {
    // console.log("Contagem = " + contador++); -> Uma maneira de fazer
    console.log("Contagem = " + contador);
    contador++;
}

// 10.
let nota = prompt("DIgite sua nota: ");
let aprovacao = nota >= 7 ? "Aprovado" : "Reprovado";
console.log(aprovacao);

// 11, 12, 13 .
let numeroAleatorio01 = Math.random();
let numeroAleatorio02 = parseInt(Math.random() * 10 + 1);
let numeroAleatorio03 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio01);
console.log(numeroAleatorio02);
console.log(numeroAleatorio03);
