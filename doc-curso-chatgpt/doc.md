# ChatGPT: Otimiziando a qualidade dos resultados!

> Documentação feita para o curso do ChatGPT - programaONE + Alura.

## 1 - Limitações do ChatGPT

Por mais incrível que o chatGPT seja, é necessário entender que o mesmo possui limitações iguais a qualquer sistema.
* Algumas limitações do chatGPT:

    1. Respostas plausíveis, porém incorretas ou sem sentido. Isso ocorre devido a base de texto utilizado para "*treinar*" o chatGPT, nem sempre são 100% precisas.
    2. ChatGPT é sensível a ajustes nos **prompts** ou a tentivas da mesma solicitação várias vezes.
    3. O modelo também pode ser **prolixo** e usar demais certas frases. Esse problema surgi devido a problemas de super otimização.
    4. ChatGPT também possui limitações em sua capacidade de memória e contexto, pois o mesmo considera apenas uma quantidade limitada do texto escrito para gerar a respostas.

## 2 - Utilizando diferentes estratégias para criar PROMPTS

Para melhorar otimizar o uso do chatGPT em nossos projetos/estudos, precisamos usar técnicas que tornem mais precisas os **Prompts** dados pelo chatGPT.
* Algumas das técnicas utilizadas são:

    1. Termos como: "Eu quero, eu preciso, me dê...".
    2. Conclusão: "Eu quero um curso de Python...*complemento*".
    3. Demonstração de exemplos(*Few shots*).

### Curiosidade: Entendendo o que são tokens

Com o uso do chatGPT, é perceptível que uma boa projeção dos prompts é essencial para permitir o entendimento das instruções enviadas.
Porém como exatamente o chatGPT realizar essas transcrições? Para isso, o modelo utilizado recebe as informações que são processadas e divididas em **tokens**.
Um token pode ser uma palavra individual, um caractere, ou até mesmo uma parte de uma palavra. Essa forma de divisão é diferente baseado no tipo de idioma. 

[Tokenizer: Checagem dos textos traduzidos em *tokens*](https://platform.openai.com/tokenizer)

Esse modelo de tokenização atribui um valor de representação a cada token gerado, capturando informações **contextuais** e **semânticas**.
Dessa forma, no contexto do processamento de linguagem natural, as mesmas são usadas para entender o significado e a intenção subjacentes da sequência de palavras.
