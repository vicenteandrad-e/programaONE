// Desafio 01
alert("Boas vindas ao nosso site!");
// let nome = "Lua";
// let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
// alert("Erro! Preencha todos os campos");
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

let nome = prompt("Digite o seu nome: ");
let idade = prompt("Informe sua idade: ");

if(idade >= 18) {
    alert(`${nome}, pode tirar a habilitação!`);
}