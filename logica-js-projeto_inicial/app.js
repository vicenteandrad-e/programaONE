let result = "Boas vindas ao jogo do número secreto!"; // Variável.
let numeroRandomico = 133;
alert(`${result}`); // Função que repassa uma mensagem no navegador.
let numeroSecreto = parseInt(Math.random() * numeroRandomico + 1); // Gera um número entre 1 a 10;
console.log(numeroSecreto);
// let chute = prompt("Escolha um número entre 1 e 10: "); // Função que repassa uma mensagem, e também, recebe um valor do usuário.
let chute; // Usa-se como uma variável incremental
let tentativas = 1; // valor também incremental

// `` Template String -> Permite o interpolação entre Strings e variáveis.
// se chute for igual ao número secreto -> Ideia da condicional.
// While == Enquanto, laço de repetição
// Operadores Lógicos: AND(&&) OR(||) NOT(!)
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroRandomico}`);
    if (chute == numeroSecreto) { // Condicional
        // PARA
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++; // Regra de incrementar, igual a tentativas = tentativas + 1
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // Operador Ternário -> Condicional
alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`); 

// if(tentativas > 1){
//     alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativas.`); 
// } else {
//     alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativa.`); 
// }


