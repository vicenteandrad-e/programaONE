// Desafio 02

// 1.
function exibirOlaMundo() {
    console.log("Olá, Mundo!");
}

exibirOlaMundo();

// 2.
function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}

exibirNome("Vicente");

// 3.
function retornarDobroDoNumero(numero) {
    return numero * 2;
}

console.log(retornarDobroDoNumero(2));

// 4.
function retornarMedia(number01, number02, number03) {
    return (number01 + number02 + number03) / 3;
}

console.log(retornarMedia(2, 2, 8));

// 5.
function retornarMaiorNumero(number01, number02) {
    let maiorNumero = number01 > number02 ? `O maior número é: ${number01}` : `O maior número é: ${number02}`;
    return maiorNumero;
}

console.log(retornarMaiorNumero(2, 4));

// 6. 
function multiplicarNumeroPorEleMesmo(number) {
    return number * number;
}

console.log(multiplicarNumeroPorEleMesmo(10));
