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

## Dividindo tarefas complexas em subtarefas mais simples

Ser extremamente sugestivo para com o chatGPT nem sempre é uma boa ideia, muita vezes, devido aos resultados gerados não sejam exatamente os esperados.
Com isso, uma nova estratégia adotada é a *quebra* na descrição das instruções, sendo assim, cada tarefa torna-se mais **descritiva** e **objetiva** para compreensão do chatGPT.
Além disso, testar **formatos de saída** é muito interessante, visto que, é possível analisar modelos diferentes de respostas dadas pelo chatGPT.
* Logo, segue algumas ideias para utilzar tais estratégias:

    1. Divisão de tarefas: "O vídeo no youtube precisa do título, descrição, ideia de thumbnail e texto no thumbnail...".
    2. Tarefa descritiva/objetiva: "Sugira a duração em minutos e em quais canais posso fazer parceria para divulgar a campanha...".
    3. Automização de resultados: "Devolva os resultado em código Javascript":...
        ```modelo javascript

            titulo = ""

            ideia_de_thumbnail = ""

            descricao = ""

            duracao = ""

            canais = []

            pontos_fortes = []

        ```

## Aprendendo a dar instruções mais claras

Durante o envio de instruções para o chatGPT, nos deparamos com resultados "adicionais" os quais, muitas vezes, não eram necessário para aquela pesquisa.
* Dessa forma, algumas maneiras eficientes para reduzimos estes *complementos* são: 

    1. Uso de termos finalizantes: "Retorne **SOMENTE** o *resultado especificado*.
    2. Resultados testados em bloco: "Retorne o resultado em 3(ou mais blocos)".
    3. Modelos determinantes: "Formulários, Objetos(javascript, java...)".
    4. Contadores durante a separação dos dados: "Sugestão #k... Modelos #1.... > Tipo 1: ...".


### Boas práticas na escrita de prompts:
    
* **Delimitadores:**

    1. Três aspas duplas: indica que o texto não deve ser processado ou interpretado.

        #### Exemplo:
        ~~~
            Dê um título para o texto abaixo:

            Texto:

            “””
                Python é uma linguagem de propósito geral de alto nível, multiparadigma, suporta o paradigma orientado a objetos, imperativo, funcional e procedural. 

                Possui tipagem dinâmica e uma de suas principais características é permitir a fácil leitura do código e exigir poucas linhas de código se comparado ao mesmo programa em outras linguagens. 

            “””

            Título: ...
        ~~~
    2. Três crases: Indica que o conteúdo entre elas é tratado como um bloco de código.
    
        #### Exemplo:
        ```
            Explique o código abaixo:

                for i in range(5):
                print(i);
        ```
    3. _____(Sublinhados): Indica que o conteúdo em questão deve ser gerado em formato de um formulário.
   
        #### Exemplo:
        ~~~
            Estou lançando uma campanha de dia das mães de um kit de beleza. O vídeo no youtube precisa de título, descrição, ideia de thumbnail e texto de thumbnail. Sugira a duração em minutos e em quais canais posso fazer parceria para divulgar a campanha. Descreva também os pontos fortes dela. Devolva o resultado no formato abaixo:

            Título: _____
            Descrição: _____
            Ideia de thumbnail: _____
            Texto de thumbnail: _____
            Duração: _____
            Canais: _____, _____,_____
            Pontos fortes: _____,_____,_____
        ~~~

* **Acentos e caracteres especiais:**

    Caso escreva prompts em português, sempre é interessante usar acentos ou caractes especiais. Isso pode ajudar o modelo a entender melhor aquilo que você está solicitando.

* **Use sinais de pontuação:**
  
    Vírgulas, interrogações e pontos finais, para separ cláusulas e tornar o prompt mais fácil de ler e entender. **Exemplo: "Qual é a diferença entre as lingugame Python e R?"**.

* **Uso citações:**
  
    Use aspas para citar trechos de textos relevantes ao seu prompt, especialmente se tiver fazendo alguma pergunta. **Exemplo:**

    > Sobre o que é o livro "Storytelling com Dados" da autora Cole Nussbaumer Knaflic?

    * **Tenha clareza e especificidade:** é de extrema importância que o prompts escrito seja claro e específico ao que você deseja. Isso ajuda o modelo a entender exatamente o que você está pedindo e evita respostas vagas e sem profundidade.
  
* **Forneça contexto:**
  
    Informações adicionais ou contextos relevantes ao chatGPT permite ajudá-lo  a enteder melhor a pergunta e gerar uma resposta mais precisa.

* **Evite pergunta complexa:**

    Fazer perguntas complexas e que exijam detalhamento é uma prática ruim. Quanto mais simple e direta os seus prompts, melhor compreensão por parte do chatGPT.

## Maximizando o potencial dos resultado

Para maximizar e otimizar resultados dos prompts dados pelo usuário, é preciso **analisar** cada instrução, de forma que, evite pular etapas.
* Algumas formas de melhorar ainda mais o modelo de prompts seria:
  
    1. Evitar pular passos. "Analisar, Notar, Maximizar dados". 
    2. Análise sobre os resultados gerados: "Analise os pontos em comum entre os resultado gerados. Descreva tais pontos em comum e diferenças...".
    3. Pontos positivos e negativos: "Descreva os pontos negativos e positivos de cada resultado separadamente...".
    4. Pontuação: "Com base na análise e pontos abordados, dê uma nota entre -100% e 100% como um "pontecializador" da campanha, isto é, quanto ese ponto influência no resultado final...".
    5. 

## Utilizando a estratégia *Step by step*

Uma estratégia comumente utilizada na construção de prompts segue o princípio do ***Step by step***. 
* Essa técnica precede das seguintes instruções:
    
    1. Descrever a situação do problema.
    2. Obter resposta passo a passo(pode utilizar o termo *let's thin step by step*).
    3. Análise de cada uma das hipótese(tornando o processo claro e objetivo).
    4. Provar dados analisado: "Prove que os resultado são corretos...".






