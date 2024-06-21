// Manipular textos
// let titulo = document.querySelector('h1'); // Seleciona uma tag do HTML
// titulo.innerHTML = "Jogo do número secreto";  // .innerHTML -> Indica que dentro do HTML vai ser manipulado

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';

// Criando uma função
function verificarChute() { // Função no Javascript
    let chute = document.querySelector('input').value; // Seleciona uma tag, e recebe o valor
    console.log(chute == numeroSecreto);
}

// Funções com parâmetro
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Uso das funções
exibirTextoNaTela('h1', "Jogo do número secreto");
exibirTextoNaTela('p', "Escolha um número entre 1 e 10");

// Funções com retorno
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1); // Return, retorna um valor
}

let numeroSecreto = gerarNumeroAleatorio(); // variável recebe o valor retornado

// Tipo booleano
// Sò existe dois tipos: False e True