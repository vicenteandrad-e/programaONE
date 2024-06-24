// Desafio 03

// 1.
function calcularIMC(altura, peso) {
    let imc = peso / (altura * 2);
    console.log(imc.toFixed(2));
}

// 2.
function calcularFatorial(numero) {
    let result = numero;

    if (numero === 0 || numero === 1){
        return console.log("Não possível de calcular!");
    } else {
        let numeroFatorial = numero;
        while(numero > 1) {
            numero--;
            result = result * numero;
        }
       console.log(`O fatorial de ${numeroFatorial} é igual a ${result}`);
    }
}

// 3.
function converterDolar(valor) {
    if(valor <= 0 || valor == null) return console.log("Informe um valor acima de 0 e não nulo.");

    let converterParaDolar = valor * 4.80;
    console.log(`O valor ${valor} convertido paa dolar é igual a: $${converterParaDolar.toFixed(2)}`);
}

// 4..
function mostrarAreaEPerimetroDoRetangulo(altura, largura) {

    let areaRetangulo = altura * largura;
    let perimetroRetangulo = (altura + largura) * 2;

    console.log(`Área do retângulo = ${areaRetangulo}, Perímetro do retângulo = ${perimetroRetangulo}`);

}

// 5.
function mostrarAreaEPerimetroDoCirculo(raio) {

    let pi = 3.14;

    let areaCirculo = 2 * pi * raio;
    let perimetroCirculo = pi *(Math.pow(raio, 2));

    console.log(`Área do círculo = ${areaCirculo}, Perímetro do círculo = ${perimetroCirculo}`);

}

// 6.
function mostrarTabuada(valor) {

    let valorAuxiliar = 1;

    while(valorAuxiliar <= 10) {
        console.log(valor * valorAuxiliar);
        valorAuxiliar++;
    }

}