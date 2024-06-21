// Desafio 03
// 1
let contadorCrescente = 1;
while (contadorCrescente <= 10) {
    console.log("Contagem contador crescente = " + contadorCrescente);
    contadorCrescente++;
}

console.log(" "); // Espaço

// 2.
let contadorDecrescente = 10;
while(contadorDecrescente > 0) {
    console.log("Contagem contador decrescente = " + contadorDecrescente);
    contadorDecrescente--;
}

// 3.
let contagemRegressiva = prompt("Digite um número: ");
while(contagemRegressiva >= 0) {
    alert("Contagem regressiva: " + contagemRegressiva);
    contagemRegressiva--;
}


// 4.
let contagemProgressiva = prompt("Digite um número: ");
let numeroAuxiliar = 0;
while(numeroAuxiliar <= contagemProgressiva) {
    alert("Contagem progressiva: " + numeroAuxiliar);
    numeroAuxiliar++;
}
