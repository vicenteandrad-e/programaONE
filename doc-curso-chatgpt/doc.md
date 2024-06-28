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

        **Exemplo**:
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
    
        **Exemplo**:
        ```
            Explique o código abaixo:

                for i in range(5):
                print(i);
        ```
    3. _____(Sublinhados): Indica que o conteúdo em questão deve ser gerado em formato de um formulário.
   
        **Exemplo**:
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

## Utilizando a estratégia *Step by step*

Uma estratégia comumente utilizada na construção de prompts segue o princípio do ***Step by step***. 
* Essa técnica precede das seguintes instruções:
    
    1. Descrever a situação do problema.
    2. Obter resposta passo a passo(pode utilizar o termo *let's thin step by step*).
    3. Análise de cada uma das hipótese(tornando o processo claro e objetivo).
    4. Provar dados analisado: "Prove que os resultado são corretos...".

## Sintetizando textos na linguagem correta: boas práticas

Durante a sintetização de alguns prompts(como exemplo o uso de descrições em uma linguagem diferente), faz-se necessário o uso de boas práticas descritivas para que seja possível o entendimento do chatGPT.
* Práticas comuns durante a interpretação de textos com linguagem diferentes:
  
    1. Resumir textos
    2. Caso tenha idiomas diferentes, pedir para verificar qual o idioma utilizado.
    3. Evitar pula passos, Exemplo: "Saber qual idioma, pedi resumo no idioma em questão...".
    4. Utiliza de boas práticas, como citadas, nos tópicos de [*Boas práticas na escrita de prompts*](#boas-práticas-na-escrita-de-prompts), [*Maximizando o potencial dos resultado*](#maximizando-o-potencial-dos-resultado) e [*Utilizando diferentes estratégias para criar PROMPTS*](#2---utilizando-diferentes-estratégias-para-criar-prompts).

## Aprendendo a sintetizar resenhas de produtos

Resenhas ou feedback também são comumentes importantes, visto que, os mesmo retornam valores e detalhes que possam ser interessante ao dono ou produtor de determinado produto ou serviço.
* Algumas forma para abstrair resultados dentros dos prompts são:
  
  1. Buscar feedback positivos e negativos(questionamentos *diretos* e *claros*)
  2. Dependendo da linguagem, trazer a tradução para linguagem mãe.
  3. Extratir **palavras chaves**, Exemplo: "Devolva uma série de palavra chaves que extraim valores negativo ou positivos do feedback...*uso de outra táticas sitadas...*".
   
## Criando prompts para analisar sentimentos

Opiniões, pensamentos e ações baseados em alguma análise, também podem ser utilizadas para gerar prompts com resultados a respeito do sentimentos abordados naquela situação ou entendimento.
* Como obter tais resultados?
  
  1. Refinar o resultado, sendo mais direto e simplificado possível.
  2. Usar boas práticas.
  3. Usar termos como: "Positivo, Negativo, Misto, Neutro e afins...".]

### Prompts - Diversas aplicações

1. **Transformando o tom de voz**
    
    É possível adicionar "tons" que gerem uma resposta baseado no tipo de tonalidade você deseja, seja ela: "Amigável", "Objetiva", "Calma" e afins.

    **Exemplo**:
    ```
        Prompt:

        Reescreva o texto abaixo delimitado por “””, deixando seu tom de voz mais simpático e amigável:

        Texto: “”” Eu testei o novo lançamento da marca XYZ e, para ser sincera, fiquei extremamente decepcionada. A qualidade do produto é simplesmente terrível. A embalagem é frágil e quebrou logo no primeiro uso, além disso, a pigmentação das sombras é fraca e a durabilidade é praticamente inexistente. Não entendo como uma marca renomada pode lançar algo tão ruim no mercado. Não recomendo de forma alguma! ”””

        Resultado:

        "Eu tive a oportunidade de experimentar o mais recente lançamento da marca XYZ e, para ser sincera, acabei me decepcionando um pouco. Fiquei surpresa com a qualidade do produto, que não atendeu às minhas expectativas. A embalagem acabou se mostrando um pouco frágil, infelizmente quebrou logo no primeiro uso. Além disso, percebi que a pigmentação das sombras não é tão intensa quanto eu gostaria, e a durabilidade deixou um pouco a desejar também. Confesso que fiquei um tanto perplexa, pois esperava mais dessa marca renomada. Enfim, minha opinião é de que talvez esse produto não seja o melhor investimento, então não o recomendaria com muita ênfase."
    ```
    É perceptível que chatGPT mudou completamente a forma de expressão do texto acima. isso torna-se interessante por várias razões como:

        . Versatilidade.
        . Personalização.
        . Adaptação a diferentes plataformas.
        . Criatividade.
        . Acessibilidade.
  
2. **Convertendo formatos**

    Dados, informações, templates e afins podem ser manipulados para outros formatos afim de satisfazer as condições do usuário.

    ```
        Prompt:

        Temos alguns dados armazenados em um dicionário Python chamado “funcionários” . Escreva esses dados no formato CSV. Retorne apenas o CSV.

        funcionarios = {
            '001': {
                'nome': 'João',
                'idade': 30,
                'cargo': 'Gerente',
                'salario': 5000.00
            },
            '002': {
                'nome': 'Maria',
                'idade': 25,
                'cargo': 'Analista',
                'salario': 3500.00
            },
            '003': {
                'nome': 'Pedro',
                'idade': 28,
                'cargo': 'Desenvolvedor',
                'salario': 4000.00
            }
        }

        Resultado(em CSV):

        001,João,30,Gerente,5000.00 002,Maria,25,Analista,3500.00 003,Pedro,28,Desenvolvedor,4000.00
    ```

3. **Verificação ortográfica/verificação gramatical**

    Para a criação de textos em geral, a utilização do prompt para verificar erros ortográficos ou gramaticais é muito importante em diversos contextos.

    ```
        Prompt:

        Revise e corrija o texto abaixo delimitado por “””. Reescreva a versão corrigida.

        Texto: “”” Quando uma historia esta sendo contada ocorre a ativação de partes do cerebro que permitem que quem esteja ouvindo consiga transformar a historia em suas próprias ideias e experiências. No artigo “Speaker–listener neural coupling underlies successful communication” de 2010, publicado na revista PNAS, temos uma estudo de como isso acontece. Na imagem abaixo, retirada do artigo, nós temos a atividade neural de um par de pessoas, sendo uma delas a falante e outra a ouvinte durante uma narrativa. Em A temos a captura da gravaçao da narrativa e em B está o acoplamento neural falante-ouvinte, que foi avaliado através do uso de um modelo linear geral, no qual as séries temporais no cerebro da pessoa que estava falando são usadas para prever a atividade no cérebro da pessoa ouvinte. Esse estudo mostrou que a atividade da pessoa falante é espacial e temporalmente acoplada à atividade da ouvinte. Por conta disso esse acoplamento desaparece quando os participantes não conseguem se comunicar. “””

        Resultado:

        "Quando uma história está sendo contada, ocorre a ativação de partes do cérebro que permitem que quem esteja ouvindo consiga transformar a história em suas próprias ideias e experiências.

        No artigo "Speaker-Listener Neural Coupling Underlies Successful Communication", publicado em 2010 na revista PNAS, temos um estudo sobre como isso acontece. Na imagem abaixo, retirada do artigo, temos a atividade neural de um par de pessoas, sendo uma delas a falante e a outra a ouvinte durante uma narrativa. Em A, temos a captura da gravação da narrativa, e em B está o acoplamento neural falante-ouvinte, que foi avaliado por meio do uso de um modelo linear geral. Nesse modelo, as séries temporais no cérebro da pessoa que estava falando são utilizadas para prever a atividade no cérebro da pessoa ouvinte.

        Esse estudo mostrou que a atividade da pessoa falante é espacial e temporalmente acoplada à atividade da ouvinte. Por conta disso, esse acoplamento desaparece quando os participantes não conseguem se comunicar."
    ```

4. **Criando respostas automáticas para e-mails**

    Dentro de um contexto, onde o chatGPT deve agir como um assistente de atendimento ao cliente e ir passando quais tarefas ele terá que executar, é , utilizando das *boas práticas", criar prompt diretos e objetivos para dar resposta ao cliente final.

    ```
        Prompt:

        Você é um assistente de IA de atendimento ao cliente. Sua tarefa é enviar uma resposta por e-mail a um(a) cliente. Dado o e-mail do(a) cliente delimitado por """", gere uma resposta para agradecer ao cliente por sua avaliação. Se o sentimento for positivo ou neutro, agradeça por sua revisão. Se o sentimento for negativo, peça desculpas e sugira que eles entrem em contato com o atendimento ao cliente. Certifique-se de usar detalhes específicos da resenha. Escreva em um tom conciso e profissional. Assine o e-mail como Atendimento ao cliente.

        Resenha: """Entrega: rápida e muito eficiente, amei aprovado. Estética liquidificador: linda, não tem o que falar, visualmente é lindo. Potência: ótima, bate bem as coisas, mas se for fazer algo como massa e triturar algo não bate muito bem, são apenas 4 lâminas e elas não pegam bem no final, acaba dando mais trabalho, já tive liquidificador de 6 lâminas e amei a experiência, mas se o seu caso não for esse, é ótimo. Copo: ele é lindo, mas frágil, parece que a qualquer momento pode cair e quebrar do nada, como muito frágil e arranha muito fácil, mas a tampa veda bem e tem medidor em todo o copo e isso é ótimo, fácil também de limpar. Contexto geral: o liquidificador é bom, única coisa de ponto negativo é o quesito das lâminas e que o encaixe do copo com o morto não é bem travado, não tem trava de segurança, e ele fica a todo tempo querendo sair do motor e isso é ruim, deveriam prestar mais atenção a isso, pois é um fator de risco para os consumidores em geral. """

        Sentimento da resenha:

        Resultado:

        O sentimento geral da resenha é uma combinação de sentimentos positivos e negativos. Alguns aspectos do produto foram apreciados, enquanto outros apresentaram problemas ou preocupações. Para responder ao cliente, você pode usar a seguinte resposta:

        Caro(a) cliente,

        Agradecemos sinceramente por compartilhar sua avaliação detalhada do nosso liquidificador. A opinião dos nossos clientes é extremamente importante para nós.

        Ficamos contentes em saber que a entrega foi rápida e eficiente, e que você apreciou a estética do liquidificador. Também estamos felizes em saber que a potência do produto atende às suas necessidades na maioria das tarefas.

        Pedimos desculpas pelos problemas que você encontrou com as lâminas e o encaixe do copo. Levaremos suas observações em consideração para aprimorar esses aspectos em futuras versões do produto. Sua preocupação em relação à segurança é válida, e faremos o possível para melhorar o design do liquidificador. Para resolver as questões específicas que você mencionou, gostaríamos de encorajá-lo(a) a entrar em contato com nosso atendimento ao cliente. Nossa equipe estará à disposição para fornecer assistência adicional e encontrar uma solução que atenda às suas necessidades.

        Agradecemos novamente por sua revisão e por compartilhar sua experiência conosco. Sua opinião é valorizada e nos ajuda a aprimorar continuamente nossos produtos e serviços.

        Atenciosamente,

        Atendimento ao cliente
    ```