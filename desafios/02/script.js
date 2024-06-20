// Desafio 02
// 1.
let result = prompt("Qual dia da semana? ");
if(result == "Sábado") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

// 2.
let numeroUsuario = prompt("Digite um número: ");
if(numeroUsuario >= 0) {
    alert("O número é positivo!");
} else {
    alert("O número é negativo!");
}

// 3.
let pontuacaoUsuario = 75;
if(pontuacaoUsuario >= 100) {
    alert("Parabéns, vocÊ venceu!");
} else {
    alert("Tente novamente ganhar.");
}

// 4.
let saldoUsuario = 3000;
alert(`Saldo usuário: R$ ${saldoUsuario}.`);

// 5.
let nomeUsuario = prompt("Informe o seu nome: ");
alert(`Seja bem vindo, ${nomeUsuario}!`);