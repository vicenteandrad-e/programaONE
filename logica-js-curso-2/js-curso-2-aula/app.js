// Manipular textos
// let titulo = document.querySelector('h1'); // Seleciona uma tag do HTML
// titulo.innerHTML = "Jogo do número secreto";  // .innerHTML -> Indica que dentro do HTML vai ser manipulado

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';

let listaDeNumerosSorteados = []; // criação de uma lista
let numeroLimite = 10; // valor auxiliar
let numeroSecreto = gerarNumeroAleatorio(); // variável recebe o valor retornado
let numeroTentativas = 1;

// Criando uma função
function verificarChute() { // Função no Javascript
    let chute = document.querySelector('input').value; // Seleciona uma tag, e recebe o valor
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${numeroTentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); // Remove um atributo pelo id dado na tag!
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        numeroTentativas++;
        limparCampo();
    }
    console.log(chute == numeroSecreto);
}

// Funções com parâmetro
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(
        texto, 
        'Brazilian Portuguese Female', 
        {rate: 1.2}
    );
}

// Uso das funções
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', "Jogo do número secreto");
    exibirTextoNaTela('p', "Escolha um número entre 1 e 10");
}

// Funções com retorno
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; // .length é o tamanho da lista
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    } 
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { // .includes verificar se o valor está dentro do array
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // .push adiciona um valor para dentro do array
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

// Função limparCampo()
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ' ';
}

// Função reiniciarJogo();
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); // seta o valor do atributo disabled para true
}

exibirMensagemInicial();


// Tipo booleano
// Sò existe dois tipos: False e True