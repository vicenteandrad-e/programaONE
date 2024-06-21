// Desafio 01

// 1. Mudar título h1 com javascript
let tituloPrincipal = document.querySelector('h1');
tituloPrincipal.innerHTML = "Hora do Desafio";

// 2. Função para botão "Console"
function botaoClicado() {
    console.log("O botão foi clicado");
}

// 3. Função para botão "Alerta"
function botaoAlerta() {
    alert("Eu amo JS");
}

// 4. Função para botão "Prompt"
function botaoPrompt() {
    let cidade = prompt("Insira o nome de uma ciadade: ");
    alert(`Estive em ${cidade} e lembrei de você.`);
}

// 5. Função para botão "Soma"
function botaoSoma() {
    let primeiroNumero = parseInt(prompt("Digite um número: "));
    let segundoNumero = parseInt(prompt("Digite outro número: "));
    let resultadoSoma = primeiroNumero + segundoNumero;
    alert(`A soma dos números digitados é igual a: ${resultadoSoma}`);
}